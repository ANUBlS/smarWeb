from decimal import Decimal

import pytest

from smartweb_api.convert import to_db


@pytest.mark.parametrize('value,ora,expected', [
    # 20-digit account numbers bound to NUMBER columns keep every digit (no float rounding)
    ('33010019440000000001', 'float', 33010019440000000001),
    ('33010019440000000001', 'integer', 33010019440000000001),
    ('1500,5', 'float', 1500.5),
    ('0.1', 'float', 0.1),
    ('12', 'integer', 12),
    ('12.0', 'integer', 12),
    (' ', 'float', None),
    (7, 'float', 7.0),
])
def test_numbers_from_text_are_exact(value, ora, expected):
    assert to_db(value, ora) == expected


def test_long_fraction_stays_decimal():
    assert to_db('12345678901234567.25', 'float') == Decimal('12345678901234567.25')


def test_invalid_number_is_rejected():
    with pytest.raises(ValueError):
        to_db('abc', 'float')

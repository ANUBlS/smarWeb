"""Decide whether a Cyrillic string is AzLat-encoded Azerbaijani (decode) or genuine Russian (keep)."""
import re

AZ_MARKERS = re.compile(r'[щцъэ]|[аеиоуыяю]ь|й[аеиоуяю]|жя|ья|ыь', re.I)
RU_MARKERS = re.compile(r'ть|ие|ый|ий|ой\b|ся\b|ст|ова|ени|ния|тся|ать|ить|ого|ее\b|ую\b|ые\b|при|про|что|это|вы|ль|ну|ет\b|ой|ств|ая\b|ки\b|ться|ание|ения|ный|ные|кой|мена', re.I)


def looks_azlat(s):
    if not re.search(r'[Ѐ-ӿ]', s):
        return False
    az = len(AZ_MARKERS.findall(s))
    ru = len(RU_MARKERS.findall(s))
    # ties default to Azerbaijani: the SmartBank UI is overwhelmingly Azeri
    return az >= ru

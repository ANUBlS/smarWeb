"""Menu action number -> Delphi package directory (relative to repo root).

Chosen from the GUIDs registered in SmartBank.ini [PluginManager\\Packages];
where a GUID exists in several copies the canonical (non-dated, non-'Copy of')
folder is used.
"""
ACTIONS = {
    1: ('Customers', 'Packages/Customers'),
    2: ('Accounts', 'Packages/Accounts'),
    3: ('Transactions', 'Packages/Transactions'),
    4: ('CloseDay', 'Packages/CloseDay'),
    5: ('RateManagement', 'Packages/RateManagement'),
    6: ('ProfitClosing', 'Packages/ProfitClosing'),
    7: ('RefEdit', 'Packages/RefEdit'),
    15: ('BalanceRefEdit', 'Packages/BalanceRefEdit'),
    16: ('BankInfo', 'Packages/BankInfo'),
    18: ('Avalute', 'Packages/Avalute'),
    20: ('PaymentDecree', 'Packages/PaymentDecree'),
    26: ('AboutBanks', 'Packages/AboutBanks'),
    27: ('LastRates', 'Packages/LastRates'),
    28: ('RepairNew', 'Packages/Repair New'),
    29: ('CreditManager', 'Packages/CreditManager'),
    30: ('ContractCorrection', 'Packages/SBCM_ContractCorrection'),
    31: ('MainFacilities', 'Packages/MainFacilities'),
    32: ('DepositManager', 'DepozitAqroinvest_neftfondu/DepositManager__'),
    33: ('DepositCorrection', 'DepositsManager/SBDM_DepositCorrection'),
    34: ('CreditsArchive', 'Packages/SBCM_CreditsArchive'),
    35: ('DepositsArchive', 'Packages/SBDM_DepositsArchive'),
    36: ('SessionMgr', 'Packages/SessionMgr'),
    37: ('TransactionsReporter', 'Packages/TransactionsReporter'),
    40: ('QueryExporter', 'Packages/QueryExporter'),
    42: ('CashSymbols', 'Packages/CashSymbols'),
    43: ('TuningTransactions', 'Packages/TuningTransactions'),
    44: ('LVPCSSManager', 'Packages/LVPCSSManager_Azer'),
    45: ('BackupCreator', 'Packages/SBBackupCreator'),
    49: ('TuningAccZones', 'Packages/TuningAcc_Zones'),
    50: ('CustomersInformations', 'Packages/CustomersInformations'),
    51: ('ExpertAnalys', 'Packages/ExpertAnalys'),
    53: ('TuningAccTypes', 'Packages/TuningAccTypes'),
    54: ('Administration', 'Packages/Administration'),
    55: ('RollbackDay', 'Packages/RollbackDay'),
    60: ('TransactionManager', 'Utils/TransactionManager'),
    61: ('Account', 'Packages/Account'),
    64: ('Account', 'Packages/Account'),
    67: ('CustomerOrder', "Packages/Customer's_orders(new)/Ocx"),
    68: ('OutAccount', 'Packages/Out_account/ocx'),
    69: ('OutBalanceRefEdit', 'Packages/Out_balancerefeditx/Ocx'),
    70: ('OutTransactionManager', 'Packages/Out_transaction_manager/ocx'),
    75: ('OutTuningAccTypes', 'Packages/Out_Tuningacctypes'),
    78: ('CustomerOperations', 'Packages/Customer_Operations'),
}

# Menu items under "Bankın hesabatları" (reports) — deferred per scope.
REPORT_ACTIONS = {10, 38, 46, 12, 62, 9, 47, 22, 58, 11, 21, 39, 41, 19, 17, 25, 14, 48, 65, 66}

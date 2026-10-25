// Generated from AccountPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "Buttons", "Db", "ActnList", "OracleData", "DBCtrlsEh", "Variants", "AccountDataModuleImpl", "AccountImpl", "AccountFlagsImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TAccountPropertiesForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbeditaccno": {"name": "DBEditAccNo", "type": "TDBEdit"}, "dbeditcurrid": {"name": "DBEditCurrID", "type": "TDBEdit"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dbeditbalance1": {"name": "DBEditBalance1", "type": "TDBEdit"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "dbeditcustid": {"name": "DBEditCustID", "type": "TDBEdit"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "label12": {"name": "Label12", "type": "TLabel"}, "dblookuppairacc": {"name": "DBLookupPairAcc", "type": "TDBLookupComboBox"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TDBEdit"}, "dblookupsimotchet": {"name": "DBLookupSimotchet", "type": "TDBLookupComboBox"}, "dbeditbranchid": {"name": "DBEditBranchID", "type": "TDBEdit"}, "dblookupcomboboxbranchname": {"name": "DBLookupComboBoxBranchName", "type": "TDBLookupComboBox"}, "dbeditaccname": {"name": "DBEditAccName", "type": "TDBEdit"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "accountflagsgb": {"name": "AccountFlagsGB", "type": "TGroupBox"}, "button3": {"name": "Button3", "type": "TButton"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "actionlistforhotkey": {"name": "ActionListForHotKey", "type": "TActionList"}, "accountavtocreate": {"name": "AccountAvtoCreate", "type": "TAction"}, "fullrefresh": {"name": "FullRefresh", "type": "TAction"}, "cbpairlookup": {"name": "CBPairLookUp", "type": "TCheckBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "editnotecode": {"name": "EditNoteCode", "type": "TEdit"}, "dbeditsimotcet": {"name": "DBEditSimOtcet", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "bal_cn2": {"name": "Bal_CN2", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbeditbalance2": {"name": "DBEditBalance2", "type": "TDBEdit"}, "dblookupbalance2": {"name": "DBLookupBalance2", "type": "TDBLookupComboBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "müxabirləşmə_kodu": {"name": "Müxabirləşmə_kodu", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit_kli_id2": {"name": "DBEdit_kli_id2", "type": "TDBEdit"}, "dblookupcombobox_kli_name": {"name": "DBLookupComboBox_kli_name", "type": "TDBLookupComboBox"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TIntegerField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "label18": {"name": "Label18", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2code": {"name": "OracleDataSet2CODE", "type": "TWideStringField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2filialid": {"name": "OracleDataSet2FILIALID", "type": "TFloatField"}, "oracledataset2ko_na": {"name": "OracleDataSet2KO_NA", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("AccountPropertiesForm", null, "TAccountPropertiesForm");
  });
  U.method("TAccountPropertiesForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc_number": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupCurr")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Valyuta seçimini düzgün edin"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupBalance1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı seçimini düzgün edin"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bal_CN2")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupBalance2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı yeni seçimini düzgün edin"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupCust")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştəri seçimini düzgün edin"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBEditAccNo")), "Text")), ""))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyişikliklər yadda saxlansın?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idyes"))))) {
      {
        const $t1 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
        if ($.truthy($.in_((await $.wv([$t1], "State", C, false)), [(await $.wv([$t1], "dsInsert", C, false)), (await $.wv([$t1], "dsEdit", C, false))]))) {
          await $.mset((await $.wcall([$t1], "FieldByName", ["open_dat"], C)), "AsDateTime", (await $.wcall([$t1], "Int", [(await $.mv((await $.wv([$t1], "DTPOpenDate", C, false)), "DateTime"))], C)));
          await $.mset((await $.wcall([$t1], "FieldByName", ["procuration_dat"], C)), "AsVariant", (await $.mv((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Value")));
          if ($.truthy($.eq((await $.mv((await $.wv([$t1], "DBLookupComboBoxBranchName", C, false)), "Text")), ""))) {
            await $.stmt((await $.wcall([$t1], "ShowMessage", ["Filial seçimi edin"], C)));
            return L0.result;
          }
          await $.stmt($.wcall([$t1], "Post", [], C));
        }
      }
    }
    await $.stmt($.call(C, "Close", []));
    L0["acc_number"] = (await $.mv((await $.v(C, "DBEditAccNo")), "Text"));
    {
      const $t2 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
      await $.stmt($.wcall([$t2], "CloseAll", [], C));
      await $.stmt($.wcall([$t2], "Open", [], C));
      await $.stmt((await $.wcall([$t2], "Locate", ["ACC_NO", (await $.wv([$t2], "acc_number", { get: async () => L0["acc_number"], set: async (v) => { L0["acc_number"] = v; }, local: true }, false)), []], C)));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesab № yaradılmayıb!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "CBPairLookUpClick", async function CBPairLookUpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBPairLookUp")), "Checked")), true))) {
    if ($.truthy($.eq($.not((await $.mv((await $.mv((await $.v(C, "AccDataModule")), "PairAccount")), "Active"))), true))) {
      await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PairAccount")), "Open", []);
    }
    await $.mset((await $.v(C, "DBLookupPairAcc")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupPairAcc")), "Enabled", false);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "AccDataModule")), "PairAccount")), "Active")), true))) {
      await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PairAccount")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "AccDataModule")), "user_Branches")), "RecordCount")), 1))) {
    await $.mset((await $.v(C, "DBEditBranchID")), "text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "user_Branches")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mset((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "user_Branches")), "FieldByName", ["id"])), "AsInteger")));
  }
  {
    const $t3 = (await $.v(C, "AccDataModule"));
    const $t4 = (await $.wv([$t3], "Currency", C, false));
    if ($.truthy($.eq((await $.wv([$t3, $t4], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t3, $t4], "DBEditCurrID", C, false)), "Text", (await $.wcall([$t3, $t4], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3, $t4], "AccDataModule", C, false)), "Currency")), "FieldByName", ["VALUTE"])), "AsInteger"))], C)));
      await $.mset((await $.wv([$t3, $t4], "DBLookupCurr", C, false)), "KeyValue", 0);
      await $.mset((await $.mcall((await $.mv((await $.wv([$t3, $t4], "AccDataModule", C, false)), "account")), "FieldByName", ["val_acc"])), "AsVariant", (await $.mv((await $.wv([$t3, $t4], "DBLookupCurr", C, false)), "KeyValue")));
    }
  }
  {
    const $t5 = (await $.v(C, "AccountForm"));
    const $t6 = (await $.wv([$t5], "AccDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t5, $t6], "OperationMode", C, false)), (await $.wv([$t5, $t6], "omInsert", C, false))))) {
      await $.mset((await $.wv([$t5, $t6], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "Sysdat", C, false)), "FieldByName", ["Tek_dat"])), "AsDateTime")));
      await $.mset((await $.wv([$t5, $t6], "DBDateTimeEditEh1", C, false)), "text", "");
    } else {
      await $.mset((await $.wv([$t5, $t6], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "Account", C, false)), "FieldByName", ["open_dat"])), "AsDateTime")));
      await $.mset((await $.wv([$t5, $t6], "DBDateTimeEditEh1", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "Account", C, false)), "FieldByName", ["procuration_dat"])), "AsVariant")));
    }
  }
  await $.mcall((await $.v(C, "EditNoteCode")), "Clear", []);
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Account", "AccountPropertiesForm", "Müxabirləşmə_kodu"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Müxabirləşmə_kodu")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Müxabirləşmə_kodu")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Account", "AccountPropertiesForm", "Bal_CN2"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Bal_CN2")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Bal_CN2")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Account", "AccountPropertiesForm", "DBLookupPairAcc"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "DBLookupPairAcc")), "Visible", false);
    await $.mset((await $.v(C, "CBPairLookUp")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "DBLookupPairAcc")), "Visible", true);
    await $.mset((await $.v(C, "CBPairLookUp")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Account", "AccountPropertiesForm", "DBEditLimit"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "DBEditLimit")), "Visible", false);
    await $.mset((await $.v(C, "Label12")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "DBEditLimit")), "Visible", true);
    await $.mset((await $.v(C, "Label12")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Account", "AccountPropertiesForm", "AccountFlagsGB"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "AccountFlagsGB")), "Visible", false);
    await $.mset((await $.v(C, "Label15")), "Visible", false);
    await $.mset((await $.v(C, "DBText1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "AccountFlagsGB")), "Visible", true);
    await $.mset((await $.v(C, "Label15")), "Visible", true);
    await $.mset((await $.v(C, "DBText1")), "Visible", true);
  }
  {
    const $t7 = (await $.v(C, "AccountForm"));
    const $t8 = (await $.wv([$t7], "AccDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t7, $t8], "OperationMode", C, false)), (await $.wv([$t7, $t8], "omEdit", C, false))))) {
      if ($.truthy($.in_((await $.mv((await $.mv((await $.wv([$t7, $t8], "AccDataModule", C, false)), "CustomersCUST_TYPE")), "AsInteger")), [0]))) {
        await $.mset((await $.wv([$t7, $t8], "DBEdit_kli_id2", C, false)), "Text", "");
        await $.mset((await $.wv([$t7, $t8], "DBLookupComboBox_kli_name", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t7, $t8], "DBLookupComboBox_kli_name", C, false)), "Enabled", (await $.wv([$t7, $t8], "false", C, false)));
        await $.mset((await $.wv([$t7, $t8], "DBEdit_kli_id2", C, false)), "Enabled", (await $.wv([$t7, $t8], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t7, $t8], "DBLookupComboBox_kli_name", C, false)), "Enabled", (await $.wv([$t7, $t8], "true", C, false)));
        await $.mset((await $.wv([$t7, $t8], "DBEdit_kli_id2", C, false)), "Enabled", (await $.wv([$t7, $t8], "true", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FullRefreshExecute", async function FullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SpeedButton3")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "AccDataModule"));
    const $t10 = (await $.wv([$t9], "Account", C, false));
    if ($.truthy($.in_((await $.wv([$t9, $t10], "State", C, false)), [(await $.wv([$t9, $t10], "dsInsert", C, false)), (await $.wv([$t9, $t10], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t9, $t10], "Cancel", [], C));
      await $.stmt($.wcall([$t9, $t10], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAccountPropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "DSsettings")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "ODS_AccNoLength")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "AccDataModule")), "Customers")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "Customers")), "Open", []);
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "DSsettings")), "FieldByName", ["VALUE"])), "AsString"));
  if ($.truthy($.eq(L0["a"], "0"))) {
    await $.mset((await $.v(C, "DBEditAccNo")), "ReadOnly", true);
  } else {
    await $.mset((await $.v(C, "DBEditAccNo")), "ReadOnly", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAccountPropertiesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t11 = L0["sender"];
      await $.stmt((await $.wcall([$t11], "SelectNext", [(await $.wv([$t11], "ActiveControl", C, false)), (await $.wv([$t11], "True", C, false)), (await $.wv([$t11], "True", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesForm", "AccountAvtoCreateExecute", async function AccountAvtoCreateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SpeedButton1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccFlags", (await $.mcall((await $.v(C, "TFormAccFlags")), "Create", [Self])));
  try {
    {
      const $t12 = (await $.v(C, "FormAccFlags"));
      const $t13 = (await $.mv((await $.wv([$t12], "AccDataModule", C, false)), "Account"));
      if ($.truthy((await $.and_(($.eq((await $.wv([$t12, $t13], "ShowModal", C, false)), (await $.wv([$t12, $t13], "mrOk", C, false)))), async () => ($.in_((await $.wv([$t12, $t13], "State", C, false)), [(await $.wv([$t12, $t13], "dsInsert", C, false)), (await $.wv([$t12, $t13], "dsEdit", C, false))])))))) {
        await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["Tipacc"], C)), "AsString", (await $.wv([$t12, $t13], "FlagMap", C, false)));
      }
    }
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FormAccFlags"))])))) {
      await $.mcall((await $.v(C, "FormAccFlags")), "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "AccDataModule"));
    await $.stmt((await $.wcall([$t14], "Refresh_", ["Account"], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["c_name"] = "GenerateAccountNumber";
  {
    const $t15 = (await $.v(C, "AccDataModule"));
    const $t16 = (await $.wv([$t15], "Account", C, false));
    if ($.truthy($.in_((await $.wv([$t15, $t16], "State", C, false)), [(await $.wv([$t15, $t16], "dsInsert", C, false)), (await $.wv([$t15, $t16], "dsEdit", C, false))]))) {
      await $.mset((await $.wcall([$t15, $t16], "FieldByName", ["acc_no"], C)), "AsString", (await $.mcall((await $.wv([$t15, $t16], "SBOP", C, false)), "CallStringFunction", [(await $.wv([$t15, $t16], "c_name", { get: async () => L0["c_name"], set: async (v) => { L0["c_name"] = v; }, local: true }, false)), ["BalCn", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["bal_cn1"], C)), "AsVariant")), "CurrencyID", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["val_acc"], C)), "AsVariant")), "CustomerID", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["kli_id"], C)), "AsVariant")), "BranchID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t15, $t16], "AccDataModule", C, false)), "user_Branches")), "FieldByName", ["id"])), "AsVariant")), "AnalitKod", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["SIM_OTCET"], C)), "AsVariant")), "NoteCode", (await $.mv((await $.wv([$t15, $t16], "EditNoteCode", C, false)), "Text")), "BalCn2", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["bal_cn2"], C)), "AsVariant")), "MehKod", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["TEMPID"], C)), "AsVariant"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "DBEditAccNoKeyPress", async function DBEditAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"]))))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesForm", "DBEditCustIDExit", async function DBEditCustIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "AccDataModule")), "CustomersCUST_TYPE")), "AsInteger")), [0, 2]))) {
    await $.mset((await $.v(C, "DBEdit_kli_id2")), "Text", "");
    await $.mset((await $.v(C, "DBLookupComboBox_kli_name")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "DBEdit_kli_id2")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox_kli_name")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "DBEdit_kli_id2")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox_kli_name")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "DBLookupCustCloseUp", async function DBLookupCustCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "AccDataModule")), "CustomersCUST_TYPE")), "AsInteger")), [0, 2]))) {
    await $.mset((await $.v(C, "DBEdit_kli_id2")), "Text", "");
    await $.mset((await $.v(C, "DBLookupComboBox_kli_name")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "DBEdit_kli_id2")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox_kli_name")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "DBEdit_kli_id2")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox_kli_name")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

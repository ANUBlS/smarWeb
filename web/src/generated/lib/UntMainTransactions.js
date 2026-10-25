// Generated from UntMainTransactions.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntMainTransactions", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Grids", "DBGrids", "ToolWin", "ComCtrls", "ImgList", "Oracle", "StdCtrls", "ExtCtrls", "Buttons", "Mask", "DBCtrls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmTransactions", "TForm", {"odstransactions": {"name": "ODSTransactions", "type": "TOracleDataSet"}, "dstransactions": {"name": "DSTransactions", "type": "TDataSource"}, "odstransactionsdaccount": {"name": "ODSTransactionsDACCOUNT", "type": "TStringField"}, "odstransactionsdebitcurrency": {"name": "ODSTransactionsDEBITCURRENCY", "type": "TStringField"}, "odstransactionscaccount": {"name": "ODSTransactionsCACCOUNT", "type": "TStringField"}, "odstransactionscreditcurrency": {"name": "ODSTransactionsCREDITCURRENCY", "type": "TStringField"}, "odstransactionsid": {"name": "ODSTransactionsID", "type": "TFloatField"}, "odstransactionsop_id": {"name": "ODSTransactionsOP_ID", "type": "TFloatField"}, "odstransactionsno_prov": {"name": "ODSTransactionsNO_PROV", "type": "TStringField"}, "odstransactionsdat": {"name": "ODSTransactionsDAT", "type": "TDateTimeField"}, "odstransactionsdebt": {"name": "ODSTransactionsDEBT", "type": "TFloatField"}, "odstransactionskredit": {"name": "ODSTransactionsKREDIT", "type": "TFloatField"}, "odstransactionsval_acc": {"name": "ODSTransactionsVAL_ACC", "type": "TFloatField"}, "odstransactionsvid_op": {"name": "ODSTransactionsVID_OP", "type": "TIntegerField"}, "odstransactionsammount": {"name": "ODSTransactionsAMMOUNT", "type": "TFloatField"}, "odstransactionslammount": {"name": "ODSTransactionsLAMMOUNT", "type": "TFloatField"}, "odstransactionskassa_b": {"name": "ODSTransactionsKASSA_B", "type": "TIntegerField"}, "odstransactionskassa_z": {"name": "ODSTransactionsKASSA_Z", "type": "TIntegerField"}, "odstransactionsno_filial": {"name": "ODSTransactionsNO_FILIAL", "type": "TIntegerField"}, "odstransactionsrate_d": {"name": "ODSTransactionsRATE_D", "type": "TFloatField"}, "odstransactionsrate_c": {"name": "ODSTransactionsRATE_C", "type": "TFloatField"}, "odstransactionscurrencyid_c": {"name": "ODSTransactionsCURRENCYID_C", "type": "TIntegerField"}, "odstransactionsammount_c": {"name": "ODSTransactionsAMMOUNT_C", "type": "TFloatField"}, "odstransactionsname": {"name": "ODSTransactionsNAME", "type": "TStringField"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "optransactions": {"name": "OPTransactions", "type": "TOraclePackage"}, "odsmaingroups": {"name": "ODSMainGroups", "type": "TOracleDataSet"}, "odsmaingroupsid": {"name": "ODSMainGroupsID", "type": "TFloatField"}, "odsmaingroupsname": {"name": "ODSMainGroupsNAME", "type": "TStringField"}, "odsmaingroupsamort": {"name": "ODSMainGroupsAMORT", "type": "TFloatField"}, "odsmaingroupsmain_account": {"name": "ODSMainGroupsMAIN_ACCOUNT", "type": "TFloatField"}, "odsmaingroupsexp_account": {"name": "ODSMainGroupsEXP_ACCOUNT", "type": "TFloatField"}, "odsmaingroupsamort_account": {"name": "ODSMainGroupsAMORT_ACCOUNT", "type": "TFloatField"}, "odsmaingroupssale_account": {"name": "ODSMainGroupsSALE_ACCOUNT", "type": "TFloatField"}, "odsmaingroupstaxamort": {"name": "ODSMainGroupsTAXAMORT", "type": "TFloatField"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "transactionviewer": {"name": "TransactionViewer", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "odstransactionsformatteddate": {"name": "ODSTransactionsFormatteddate", "type": "TStringField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dtpbegindate": {"name": "DTPBeginDate", "type": "TDateTimePicker"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dtpenddate": {"name": "DTPEndDate", "type": "TDateTimePicker"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "cbgroupfilter": {"name": "CBGroupFilter", "type": "TComboBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "ebegindate": {"name": "EBeginDate", "type": "TEdit"}, "elastdate": {"name": "ELastDate", "type": "TEdit"}, "assignmentsedit": {"name": "AssignmentsEdit", "type": "TDBEdit"}, "rate": {"name": "Rate", "type": "array"}}, {});
  U.fieldInit("TFrmTransactions", "rate", () => []);
  U.init(async () => {
    U.var_("FrmTransactions", null, "TFrmTransactions");
  });
  U.method("TFrmTransactions", "ExecuteFilter", async function ExecuteFilter(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex": 0, "saveplace": null};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex"] = 1;
  {
    const $t1 = L0["dataset"];
    await $.wset([$t1], "SavePlace", (await $.wv([$t1], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t1], "Active", C, false)), (await $.wv([$t1], "false", C, false))))) {
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetLength", [$.ref(async () => (await $.wv([$t1], "Rate", C, false)), async ($t2) => { await $.wset([$t1], "Rate", $t2, C); }), $.add((await $.wv([$t1], "RecordCount", C, false)), 1)], C)));
    await $.mcall((await $.mv((await $.wv([$t1], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", ["Bütün qruplar"])));
    try {
      await $.stmt($.wcall([$t1], "DisableControls", [], C));
      await $.stmt($.wcall([$t1], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t1], "Eof", C, false)))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", [(await $.wv([$t1], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString"))])));
        { const $t3 = await $.iset((await $.wv([$t1], "Rate", C, false)), [(await $.wv([$t1], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t1], "FieldByName", [(await $.wv([$t1], "IDfield", { get: async () => L0["idfield"], set: async (v) => { L0["idfield"] = v; }, local: true }, false))], C)), "AsInteger"))); if ($t3 !== undefined) { await $.wset([$t1], "Rate", $t3, C); } }
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.stmt((await $.wcall([$t1], "Inc", [$.ref(async () => (await $.wv([$t1], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false)), async ($t4) => { await $.wset([$t1], "RateIndex", $t4, { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }); })], C)));
        await $.tick();
      }
    } finally {
      await $.stmt((await $.wcall([$t1], "GotoBookmark", [(await $.wv([$t1], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1], "FreeBookmark", [(await $.wv([$t1], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TFrmTransactions", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TFrmTransactions", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "TransactionViewer")), "Focused")))) {
    {
      const $t5 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t6 = (await $.mv((await $.mv((await $.wv([$t5], "TransactionViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t5, $t6], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t5, $t6], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t5, $t6], "Prior", [], C));
      }
    }
  }
  await $.mcall((await $.v(C, "TransactionViewer")), "Repaint", []);
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TFrmTransactions", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ExecuteFilter", [(await $.v(C, "ODSMainGroups")), "Name", "ID", (await $.v(C, "CBGroupFilter"))])));
  await $.mset((await $.v(C, "CBGroupFilter")), "Itemindex", 0);
  {
    const $t7 = (await $.v(C, "OPTransactions"));
    await $.mset((await $.wv([$t7], "DTPBeginDate", C, false)), "DateTime", (await $.wcall([$t7], "CallDateFunction", ["GetPresentDate", []], C)));
    await $.mset((await $.wv([$t7], "EBeginDate", C, false)), "Text", (await $.wcall([$t7], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t7], "CallDateFunction", ["GetPresentDate", []], C))], C)));
    await $.mset((await $.wv([$t7], "DTPEndDate", C, false)), "DateTime", (await $.wcall([$t7], "CallDateFunction", ["GetPresentDate", []], C)));
    await $.mset((await $.wv([$t7], "ELastDate", C, false)), "Text", (await $.wcall([$t7], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t7], "CallDateFunction", ["GetPresentDate", []], C))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begindate": 0, "enddate": 0, "sqlstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["begindate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBeginDate")), "DateTime"))]));
  L0["enddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPEndDate")), "DateTime"))]));
  {
    const $t8 = (await $.v(C, "OPTransactions"));
    await $.wset([$t8], "SqlStr", (await $.wcall([$t8], "CallStringFunction", ["GetTransactions", [(await $.idx((await $.wv([$t8], "Rate", C, false)), [(await $.mv((await $.wv([$t8], "CBGroupFilter", C, false)), "ItemIndex"))])), (await $.wv([$t8], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), (await $.wv([$t8], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))]], C)), { get: async () => L0["sqlstr"], set: async (v) => { L0["sqlstr"] = v; }, local: true });
  }
  {
    const $t9 = (await $.v(C, "ODSTransactions"));
    if ($.truthy($.eq((await $.wv([$t9], "Active", C, false)), (await $.wv([$t9], "True", C, false))))) {
      await $.stmt($.wcall([$t9], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t9], "SetVariable", ["AStrParam", (await $.wv([$t9], "SqlStr", { get: async () => L0["sqlstr"], set: async (v) => { L0["sqlstr"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "CBGroupFilterChange", async function CBGroupFilterChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmTransactions", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t10) => { await $.set(C, "Rate", $t10); }), 0])));
  await $.mcall((await $.v(C, "ODSTransactions")), "CloseAll", []);
  await $.mcall((await $.v(C, "ODSMainGroups")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "ODSTransactionsCalcFields", async function ODSTransactionsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t11 = L0["dataset"];
    await $.mset((await $.wcall([$t11], "FieldByName", ["FormattedDate"], C)), "AsString", (await $.wcall([$t11], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t11], "FieldByName", ["DAT"], C)), "AsDateTime"))], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFrmTransactions", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begindate": 0, "enddate": 0, "sqlstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["begindate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBeginDate")), "DateTime"))]));
  L0["enddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPEndDate")), "DateTime"))]));
  {
    const $t12 = (await $.v(C, "OPTransactions"));
    await $.wset([$t12], "SqlStr", (await $.wcall([$t12], "CallStringFunction", ["GetTransactions", [(await $.idx((await $.wv([$t12], "Rate", C, false)), [(await $.mv((await $.wv([$t12], "CBGroupFilter", C, false)), "ItemIndex"))])), (await $.wv([$t12], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), (await $.wv([$t12], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))]], C)), { get: async () => L0["sqlstr"], set: async (v) => { L0["sqlstr"] = v; }, local: true });
  }
  {
    const $t13 = (await $.v(C, "ODSTransactions"));
    if ($.truthy((await $.wv([$t13], "Active", C, false)))) {
      await $.stmt($.wcall([$t13], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t13], "SetVariable", ["AStrParam", (await $.wv([$t13], "SqlStr", { get: async () => L0["sqlstr"], set: async (v) => { L0["sqlstr"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t13], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "DTPBeginDateChange", async function DTPBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EBeginDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((L0["sender"]), "Date"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "DTPEndDateChange", async function DTPEndDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ELastDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((L0["sender"]), "Date"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTransactions", "CBGroupFilterDrawItem", async function CBGroupFilterDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), "index": $.copyArg(p1), "rect": $.copyArg(p2), "state": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["control", "index", "rect", "state"]);
  {
    const $t14 = L0["control"];
    await $.stmt((await $.mcall((await $.wv([$t14], "Canvas", C, false)), "FillRect", [(await $.wv([$t14], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
    if ($.truthy((await $.and_(($.eq((await $.wv([$t14], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 0)), async () => ($.not(($.in_((await $.wv([$t14], "odComboBoxEdit", C, false)), (await $.wv([$t14], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false)))))))))) {
      if ($.truthy($.in_((await $.wv([$t14], "odSelected", C, false)), (await $.wv([$t14], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))))) {
        await $.mset((await $.mv((await $.wv([$t14], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t14], "clWhite", C, false)));
      } else {
        await $.mset((await $.mv((await $.wv([$t14], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t14], "clBlue", C, false)));
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t14], "Canvas", C, false)), "TextOut", [$.add((await $.mv((await $.wv([$t14], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 2), (await $.mv((await $.wv([$t14], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.idx((await $.wv([$t14], "Items", C, false)), [(await $.wv([$t14], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))])));
  }
  return L0.result;
}, {"params": ["Control", "Index", "Rect", "State"], "kind": "procedure", "ptypes": ["TWinControl", "Integer", "TRect", "TOwnerDrawState"]});
  return U;
}

// Generated from PaymentPlaneMgrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentPlaneMgrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Db", "OracleData", "Grids", "DBGrids", "ExtCtrls", "ComCtrls", "ToolWin", "ActnList", "ImgList", "CMExcelExport", "DatModConstructionImpl", "CreditsManagerForConstructionImpl", "sboapiDataModuleImpl", "PayPlanAddEditFormMgrUnit", "AutoPayPlaneFormUnit", "RepSeduleImpl", "ReportImpl"]);
  const C = [U];
  U.defClass("TPaymentPlaneForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "toolbarimages": {"name": "ToolBarImages", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "schdulegrid": {"name": "SchduleGrid", "type": "TDBGrid"}, "bayerinfodatsrc": {"name": "BayerInfoDatSrc", "type": "TDataSource"}, "bayerinfo": {"name": "BayerInfo", "type": "TOracleDataSet"}, "creditsinfo": {"name": "Creditsinfo", "type": "TOracleDataSet"}, "creditsinfodatsrc": {"name": "CreditsinfoDatSrc", "type": "TDataSource"}, "planinfo": {"name": "PlanInfo", "type": "TOracleDataSet"}, "planinfodatsrc": {"name": "PlanInfoDatSrc", "type": "TDataSource"}, "planinfoid": {"name": "PlanInfoID", "type": "TFloatField"}, "planinfoid2": {"name": "PlanInfoID2", "type": "TFloatField"}, "planinfopaymentdate": {"name": "PlanInfoPAYMENTDATE", "type": "TDateTimeField"}, "planinfomainamt": {"name": "PlanInfoMAINAMT", "type": "TFloatField"}, "planinfointamt": {"name": "PlanInfoINTAMT", "type": "TFloatField"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actndelete": {"name": "ActnDelete", "type": "TAction"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actnaunitet": {"name": "ActnAunitet", "type": "TAction"}, "planinfoseqno": {"name": "PlanInfoSeqNo", "type": "TIntegerField"}, "creditsinfocreditamount": {"name": "CreditsinfoCREDITAMOUNT", "type": "TFloatField"}, "creditsinfoinitialamount": {"name": "CreditsinfoINITIALAMOUNT", "type": "TFloatField"}, "creditsinfoopendate": {"name": "CreditsinfoOPENDATE", "type": "TDateTimeField"}, "creditsinfoclosedate": {"name": "CreditsinfoCLOSEDATE", "type": "TDateTimeField"}, "creditsinfointerestrate": {"name": "CreditsinfoINTERESTRATE", "type": "TFloatField"}, "creditsinfopenalityinterestrate": {"name": "CreditsinfoPENALITYINTERESTRATE", "type": "TFloatField"}, "creditsinfoclientid": {"name": "CreditsinfoCLIENTID", "type": "TFloatField"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "exportpaymentplane": {"name": "ExportPaymentPlane", "type": "TCMExcelExport"}, "actnprint": {"name": "ActnPrint", "type": "TAction"}, "exppayplanedata": {"name": "ExpPayPlaneData", "type": "TOracleDataSet"}, "exppayplanedatapaymentdate": {"name": "ExpPayPlaneDataPAYMENTDATE", "type": "TDateTimeField"}, "exppayplanedatamainamt": {"name": "ExpPayPlaneDataMAINAMT", "type": "TFloatField"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("PaymentPlaneForm", null, "TPaymentPlaneForm");
  });
  U.method("TPaymentPlaneForm", "MonthsBeetwean", async function MonthsBeetwean(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"d1": $.copyArg(p0), "d2": $.copyArg(p1), result: 0, "tempdate": 0};
  await $.fixArgs(L0, ["d1", "d2"]);
  L0["result"] = 1;
  L0["tempdate"] = L0["d1"];
  while ($.truthy($.le((await $.call(C, "IncMonth", [L0["tempdate"], L0["result"]])), L0["d2"]))) {
    await $.stmt((await $.call(C, "INC", [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; })])));
    await $.tick();
  }
  if ($.truthy($.gt((await $.call(C, "IncMonth", [L0["tempdate"], L0["result"]])), L0["d2"]))) {
    L0["result"] = $.sub(L0["result"], 1);
  }
  return L0.result;
}, {"params": ["D1", "D2"], "kind": "function", "ptypes": ["TDateTime", "TDateTime"]});
  U.method("TPaymentPlaneForm", "CreditID", async function CreditID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["ID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentPlaneForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPaymentPlaneForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentPlaneForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "bayerid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["creditid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t2 = (await $.v(C, "Creditsinfo"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["CRDID", (await $.wv([$t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.wset([$t2], "BayerID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ClientID"], C)), "AsInteger")), { get: async () => L0["bayerid"], set: async (v) => { L0["bayerid"] = v; }, local: true });
  }
  {
    const $t3 = (await $.v(C, "BayerInfo"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["BID", (await $.wv([$t3], "BayerID", { get: async () => L0["bayerid"], set: async (v) => { L0["bayerid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  {
    const $t4 = (await $.v(C, "PlanInfo"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["CrdID", (await $.wv([$t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  await $.set(C, "PayPlanAddEditForm", (await $.mcall((await $.v(C, "TPayPlanAddEditForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BayerInfo")), "Close", []);
  await $.mcall((await $.v(C, "Creditsinfo")), "close", []);
  await $.mcall((await $.v(C, "PlanInfo")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "PlanInfo"));
    await $.stmt($.wcall([$t5], "Insert", [], C));
    await $.mset((await $.wcall([$t5], "FieldByName", ["ID#"], C)), "AsInteger", (await $.wv([$t5], "CreditID", C, false)));
    await $.mset((await $.wcall([$t5], "FieldByName", ["ID"], C)), "AsInteger", 0);
  }
  await $.mcall((await $.v(C, "PayPlanAddEditForm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "PlanInfoSeqNoGetText", async function PlanInfoSeqNoGetText(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "text": $.asRef(p1), "displaytext": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "displaytext"]);
  await L0["text"].set((await $.call(C, "IntToStr", [(await $.mv((await $.mv(L0["sender"], "DataSet")), "RecNo"))])));
  return L0.result;
}, {"params": ["Sender", "Text", "DisplayText"], "kind": "procedure", "ptypes": ["TField", "String", "Boolean"]});
  U.method("TPaymentPlaneForm", "PlanInfoApplyRecord", async function PlanInfoApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "creditid": 0, "id": 0, "paydate": 0, "principial": 0, "interest": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  await L0["applied"].set(true);
  {
    const $t6 = L0["sender"];
    await $.wset([$t6], "id", (await $.mv((await $.wcall([$t6], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t6], "CreditID", (await $.mv((await $.wcall([$t6], "FieldByName", ["ID#"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
    await $.wset([$t6], "PayDate", (await $.mv((await $.wcall([$t6], "FieldByName", ["PaymentDate"], C)), "AsDateTime")), { get: async () => L0["paydate"], set: async (v) => { L0["paydate"] = v; }, local: true });
    await $.wset([$t6], "Principial", (await $.mv((await $.wcall([$t6], "FieldByName", ["MainAmt"], C)), "AsFloat")), { get: async () => L0["principial"], set: async (v) => { L0["principial"] = v; }, local: true });
    await $.wset([$t6], "Interest", (await $.mv((await $.wcall([$t6], "FieldByName", ["IntAmt"], C)), "AsFloat")), { get: async () => L0["interest"], set: async (v) => { L0["interest"] = v; }, local: true });
  }
  { const $t7 = L0["action"];
    if ($.eq($t7, "I") || $.eq($t7, "U")) {
      {
        const $t8 = (await $.v(C, "DatModConstruction"));
        const $t9 = (await $.wv([$t8], "sbcm_construction", C, false));
        await $.wset([$t8, $t9], "ID", (await $.wcall([$t8, $t9], "CallIntegerFunction", ["PaymentPlane_AddEdit", ["p_ID", (await $.wv([$t8, $t9], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "p_CreditID", (await $.wv([$t8, $t9], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_PayDate", (await $.wv([$t8, $t9], "PayDate", { get: async () => L0["paydate"], set: async (v) => { L0["paydate"] = v; }, local: true }, false)), "p_Principial", (await $.wv([$t8, $t9], "Principial", { get: async () => L0["principial"], set: async (v) => { L0["principial"] = v; }, local: true }, false)), "p_Interest", (await $.wv([$t8, $t9], "Interest", { get: async () => L0["interest"], set: async (v) => { L0["interest"] = v; }, local: true }, false))]], C)), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      }
    }
    else if ($.eq($t7, "D")) {
      {
        const $t10 = (await $.v(C, "DatModConstruction"));
        const $t11 = (await $.wv([$t10], "sbcm_construction", C, false));
        await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["DeletePaymentPlane", ["p_ID", (await $.wv([$t10, $t11], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TPaymentPlaneForm", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "PlanInfo"));
    await $.stmt($.wcall([$t12], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "PayPlanAddEditForm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PlanInfo")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "ActnDeleteExecute", async function ActnDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t13 = (await $.v(C, "SchduleGrid"));
      { const $t14 = 0;
        await $.wset([$t13], "I", $.sub((await $.mv((await $.wv([$t13], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t15 = true;
        for (;;) {
          if (!$t15) { await $.wset([$t13], "I", $.succ((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t15 = false;
          if (!($.ord((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t14))) break;
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t13], "Pointer", [(await $.idx((await $.wv([$t13], "SelectedRows", C, false)), [(await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
          await $.mcall((await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet")), "Delete", []);
          await $.mcall((await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet")), "Refresh", []);
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "ActnAunitetExecute", async function ActnAunitetExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d1": 0, "d2": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["d1"] = (await $.mv((await $.mcall((await $.v(C, "Creditsinfo")), "FieldByName", ["OpenDate"])), "AsDateTime"));
  L0["d2"] = (await $.mv((await $.mcall((await $.v(C, "Creditsinfo")), "FieldByName", ["CloseDate"])), "AsDateTime"));
  await $.set(C, "AutoPayPlaneForm", (await $.mcall((await $.v(C, "TAutoPayPlaneForm")), "Create", [Self])));
  {
    const $t16 = (await $.v(C, "AutoPayPlaneForm"));
    await $.mset((await $.wv([$t16], "DTPStartDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t16], "Creditsinfo", C, false)), "FieldByName", ["OpenDate"])), "AsDateTime")));
    await $.mset((await $.wv([$t16], "AmountEdit", C, false)), "Text", (await $.wcall([$t16], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t16], "Creditsinfo", C, false)), "FieldByName", ["CREDITAMOUNT"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t16], "CmbBoxPeriodRate", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t16], "NPeriodsEdit", C, false)), "Text", (await $.wcall([$t16], "IntToStr", [(await $.wcall([$t16], "MonthsBeetwean", [(await $.wv([$t16], "D1", { get: async () => L0["d1"], set: async (v) => { L0["d1"] = v; }, local: true }, false)), (await $.wv([$t16], "D2", { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true }, false))], C))], C)));
    await $.stmt($.wcall([$t16], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "ActnPrintExecute", async function ActnPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "RepSedule"))]))))) {
    await $.set(C, "RepSedule", (await $.mcall((await $.v(C, "TRepSedule")), "Create", [(await $.v(C, "application"))])));
  }
  {
    const $t17 = (await $.v(C, "RepSedule"));
    const $t18 = (await $.wv([$t17], "PlanInfo", C, false));
    await $.stmt($.wcall([$t17, $t18], "ClearVariables", [], C));
    await $.stmt($.wcall([$t17, $t18], "close", [], C));
    await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t17, $t18], "DatModConstruction", C, false)), "Credits")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t17, $t18], "Open", [], C));
  }
  {
    const $t19 = (await $.v(C, "RepSedule"));
    const $t20 = (await $.wv([$t19], "ReportPayShedData", C, false));
    await $.stmt($.wcall([$t19, $t20], "ClearVariables", [], C));
    await $.stmt($.wcall([$t19, $t20], "close", [], C));
    await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20], "DatModConstruction", C, false)), "Credits")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t19, $t20], "Open", [], C));
    await $.stmt($.wcall([$t19, $t20], "Preview", [], C));
    await $.stmt($.wcall([$t19, $t20], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentPlaneForm", "SchduleGridKeyPress", async function SchduleGridKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "SchduleGrid"));
    const $t22 = (await $.wv([$t21], "SelectedRows", C, false));
    const $t23 = (await $.mv((await $.wv([$t21, $t22], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t21, $t22, $t23], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t21, $t22, $t23], "First", [], C));
      while ($.truthy($.not((await $.wv([$t21, $t22, $t23], "Eof", C, false))))) {
        await $.wset([$t21, $t22, $t23], "CurrentRowSelected", (await $.wv([$t21, $t22, $t23], "True", C, false)), C);
        await $.stmt($.wcall([$t21, $t22, $t23], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t21, $t22, $t23], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

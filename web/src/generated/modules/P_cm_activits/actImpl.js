// Generated from actImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("actImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "Db", "OracleData", "StdCtrls", "Grids", "DBGrids", "Oracle", "Buttons", "CommonDecls", "sbsystem", "sboapiDataModuleImpl", "FrmIEAddEditImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TActFrom", "TForm", {"oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}, "oracledataset2act_id": {"name": "OracleDataSet2ACT_ID", "type": "TFloatField"}, "oracledataset2newid": {"name": "OracleDataSet2NEWID", "type": "TFloatField"}, "oracledataset1kod": {"name": "OracleDataSet1KOD", "type": "TWideStringField"}, "oracledataset2bank_kod": {"name": "OracleDataSet2BANK_KOD", "type": "TWideStringField"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}, "oracledataset4id": {"name": "OracleDataSet4ID", "type": "TFloatField"}, "oracledataset4name": {"name": "OracleDataSet4NAME", "type": "TWideStringField"}, "oracledataset1vid_sob": {"name": "OracleDataSet1VID_SOB", "type": "TFloatField"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset3code": {"name": "OracleDataSet3CODE", "type": "TWideStringField"}, "oracledataset3description": {"name": "OracleDataSet3DESCRIPTION", "type": "TWideStringField"}, "oracledataset3act_id": {"name": "OracleDataSet3ACT_ID", "type": "TFloatField"}, "cm_setup": {"name": "CM_SETUP", "type": "TOraclePackage"}, "datasrclinks": {"name": "DataSrcLinks", "type": "TDataSource"}, "linksdata": {"name": "LinksData", "type": "TOracleDataSet"}, "linksdataid": {"name": "LinksDataID", "type": "TFloatField"}, "linksdatacategoryid": {"name": "LinksDataCATEGORYID", "type": "TFloatField"}, "linksdatadescription": {"name": "LinksDataDESCRIPTION", "type": "TWideStringField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "datasrclinkvalues": {"name": "DataSrcLinkValues", "type": "TDataSource"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "dgridlinkvalues": {"name": "DGridLinkValues", "type": "TDBGrid"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "oracledataset4kodu": {"name": "OracleDataSet4KODU", "type": "TWideStringField"}, "oracledataset3kodu": {"name": "OracleDataSet3KODU", "type": "TWideStringField"}, "dbnavigator4": {"name": "DBNavigator4", "type": "TDBNavigator"}, "linkvaluesdata": {"name": "LinkValuesData", "type": "TOracleDataSet"}, "linkvaluesdatalinkid": {"name": "LinkValuesDataLINKID", "type": "TFloatField"}, "linkvaluesdatabranchid": {"name": "LinkValuesDataBRANCHID", "type": "TFloatField"}, "linkvaluesdatacurrencyid": {"name": "LinkValuesDataCURRENCYID", "type": "TFloatField"}, "linkvaluesdataaccountid": {"name": "LinkValuesDataACCOUNTID", "type": "TFloatField"}, "linkvaluesdatamehsulid": {"name": "LinkValuesDataMEHSULID", "type": "TFloatField"}, "linkvaluesdatacurrencyname": {"name": "LinkValuesDataCURRENCYNAME", "type": "TStringField"}, "linkvaluesdataaccountnumber": {"name": "LinkValuesDataAccountNumber", "type": "TStringField"}, "linkvaluesdatabranchname": {"name": "LinkValuesDataBRANCHNAME", "type": "TStringField"}, "linkvaluesdataname": {"name": "LinkValuesDataNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("ActFrom", null, "TActFrom");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "ActFrom")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TActFrom", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmIEAddEdit", (await $.mcall((await $.v(C, "TFrmIEAddEdit")), "Create", [Self])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "open", []);
  await $.mcall((await $.v(C, "LinkValuesData")), "open", []);
  await $.mcall((await $.v(C, "LinksData")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "close", []);
  await $.mcall((await $.v(C, "FrmIEAddEdit")), "Free", []);
  await $.mcall((await $.v(C, "LinkValuesData")), "close", []);
  await $.mcall((await $.v(C, "LinksData")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TActFrom", "OracleDataSet3ApplyRecord", async function OracleDataSet3ApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "v_id": 0, "v_person": 0, "v_act_id": 0, "v_code": '', "v_description": '', "v_kodu": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "v_id", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
    await $.wset([$t1], "v_code", (await $.mv((await $.wcall([$t1], "FieldByName", ["code"], C)), "AsString")), { get: async () => L0["v_code"], set: async (v) => { L0["v_code"] = v; }, local: true });
    await $.wset([$t1], "v_person", 0, { get: async () => L0["v_person"], set: async (v) => { L0["v_person"] = v; }, local: true });
    await $.wset([$t1], "v_description", (await $.mv((await $.wcall([$t1], "FieldByName", ["description"], C)), "Asstring")), { get: async () => L0["v_description"], set: async (v) => { L0["v_description"] = v; }, local: true });
    await $.wset([$t1], "v_act_id", (await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet2", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["v_act_id"], set: async (v) => { L0["v_act_id"] = v; }, local: true });
    await $.wset([$t1], "v_kodu", (await $.mv((await $.wcall([$t1], "FieldByName", ["kodu"], C)), "AsString")), { get: async () => L0["v_kodu"], set: async (v) => { L0["v_kodu"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t2 = L0["action"];
    if ($.eq($t2, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["CategoriesAdd", [L0["v_person"], L0["v_code"], L0["v_description"], L0["v_act_id"], L0["v_kodu"]]])));
    }
    else if ($.eq($t2, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["CategoriesEdit", [L0["v_id"], L0["v_person"], L0["v_code"], L0["v_description"], L0["v_act_id"], L0["v_kodu"]]])));
    }
    else if ($.eq($t2, "D")) {
      await $.stmt((await $.mcall((await $.v(C, "CM_SETUP")), "CallProcedure", ["CategoriesDelete", [L0["v_id"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TActFrom", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["snlscaption"] = "Qəbul.";
  await $.mcall((await $.v(C, "LinkValuesData")), "open", []);
  {
    const $t3 = (await $.wobj(C, "FrmIEAddEdit"));
    const $t4 = (await $.wv([$t3], "LinkValuesData", C, false));
    await $.wset([$t3, $t4], "Caption", (await $.wv([$t3, $t4], "SNLSCaption", { get: async () => L0["snlscaption"], set: async (v) => { L0["snlscaption"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t3, $t4], "Insert", [], C));
    await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["BranchID"], C)), "AsInteger", (await $.wv([$t3, $t4], "Get_BranchID", C, false)));
    await $.mset((await $.wv([$t3, $t4], "CBBranch", C, false)), "KeyValue", (await $.wv([$t3, $t4], "Get_BranchID", C, false)));
    await $.stmt($.wcall([$t3, $t4], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["snlscaption"] = "Redaktə.";
  {
    const $t5 = (await $.wobj(C, "FrmIEAddEdit"));
    const $t6 = (await $.wv([$t5], "LinkValuesData", C, false));
    await $.wset([$t5, $t6], "Caption", (await $.wv([$t5, $t6], "SNLSCaption", { get: async () => L0["snlscaption"], set: async (v) => { L0["snlscaption"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t5, $t6], "Edit", [], C));
    await $.stmt($.wcall([$t5, $t6], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["sconfirmdelete"] = "Ləğv edim?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["sconfirmdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t7 = (await $.wobj(C, "LinkValuesData"));
      await $.stmt($.wcall([$t7], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "FrmIEAddEdit")), "IEAccountList")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "FrmIEAddEdit")), "CurrencyList")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "FrmIEAddEdit")), "BranchList")), "open", []);
  if ($.truthy($.le((await $.mv((await $.v(C, "OracleDataSet3")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["- Mülkiyyət növü yığılmayıb -"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "LinksData")), "refresh", []);
  await $.mset((await $.v(C, "ActFrom")), "width", 774);
  await $.mset((await $.v(C, "ActFrom")), "position", (await $.v(C, "poscreenCenter")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ActFrom")), "width", 375);
  await $.mset((await $.v(C, "ActFrom")), "position", (await $.v(C, "poscreenCenter")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TActFrom", "OracleDataSet3AfterEdit", async function OracleDataSet3AfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TActFrom", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "FrmIEAddEdit")), "IEAccountList")), "Refresh", []);
  await $.mcall((await $.v(C, "LinksData")), "Refresh", []);
  await $.mcall((await $.v(C, "LinkValuesData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActFrom", "DBNavigator3Click", async function DBNavigator3Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  { const $t8 = L0["button"];
    if ($.eq($t8, (await $.v(C, "nbPost")))) {
      await $.mcall((await $.v(C, "LinksData")), "refresh", []);
      await $.mcall((await $.v(C, "OracleDataSet3")), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TActFrom", "DBNavigator2Click", async function DBNavigator2Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  { const $t9 = L0["button"];
    if ($.eq($t9, (await $.v(C, "nbPost")))) {
      await $.mcall((await $.v(C, "OracleDataSet2")), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TActFrom", "DBNavigator1Click", async function DBNavigator1Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  { const $t10 = L0["button"];
    if ($.eq($t10, (await $.v(C, "nbPost")))) {
      await $.mcall((await $.v(C, "OracleDataSet1")), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ActFrom", (await $.mcall((await $.v(C, "TActFrom")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

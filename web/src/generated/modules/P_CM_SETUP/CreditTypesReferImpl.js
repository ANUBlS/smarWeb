// Generated from CreditTypesReferImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreditTypesReferImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "Db", "OracleData", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "ImgList", "ComCtrls", "ToolWin", "Buttons", "Oracle", "sboapiDataModuleImpl", "CommonDecls", "CreditTypesAddEditImpl"]);
  const C = [U];
  U.defClass("TCreditTypeTuning", "TForm", {"crdtypesdata": {"name": "CrdTypesData", "type": "TOracleDataSet"}, "datasrccrdtypesdata": {"name": "DataSrcCrdTypesData", "type": "TDataSource"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "crdtypesgrid": {"name": "CrdTypesGrid", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "setuppackg": {"name": "SetupPackg", "type": "TOraclePackage"}, "crdtypesdataid": {"name": "CrdTypesDataID", "type": "TFloatField"}, "crdtypesdatarenewablestatus": {"name": "CrdTypesDataRENEWABLESTATUS", "type": "TFloatField"}, "crdtypesdataitype": {"name": "CrdTypesDataITYPE", "type": "TFloatField"}, "crdtypesdataiclass": {"name": "CrdTypesDataICLASS", "type": "TFloatField"}, "crdtypesdatadescription": {"name": "CrdTypesDataDESCRIPTION", "type": "TWideStringField"}, "crdtypesdatacardtype": {"name": "CrdTypesDataCARDTYPE", "type": "TFloatField"}, "crdtypesdataoutbalance": {"name": "CrdTypesDataOUTBALANCE", "type": "TFloatField"}, "crdtypesdataduepersentday": {"name": "CrdTypesDataDUEPERSENTDAY", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("CreditTypeTuning", null, "TCreditTypeTuning");
  });
  U.method("TCreditTypeTuning", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TCreditTypeTuning", "ShowCredTypesSetup", async function ShowCredTypesSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "CrdTypesData")), "Open", []);
  await $.set(C, "FrmAddEditCrdType", (await $.mcall((await $.v(C, "TFrmAddEditCrdType")), "Create", [Self])));
  await $.mset((await $.v(C, "FrmAddEditCrdType")), "FDataSet", (await $.v(C, "CrdTypesData")));
  await $.mset((await $.mv((await $.v(C, "FrmAddEditCrdType")), "DBEditDesc")), "DataSource", (await $.v(C, "DataSrcCrdTypesData")));
  await $.mset((await $.mv((await $.v(C, "FrmAddEditCrdType")), "DBEdit1")), "DataSource", (await $.v(C, "DataSrcCrdTypesData")));
  await $.mset((await $.mv((await $.v(C, "FrmAddEditCrdType")), "DBEditDesc")), "DataField", "DESCRIPTION");
  await $.mset((await $.mv((await $.v(C, "FrmAddEditCrdType")), "DBEdit1")), "DataField", "DUEPERSENTDAY");
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCreditTypeTuning", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmAddEditCrdType")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditTypeTuning", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CrdTypesData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditTypeTuning", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "CrdTypesData"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
    await $.mset((await $.wcall([$t1], "FieldByName", ["ICLASS"], C)), "AsInteger", 1);
    await $.mset((await $.mv((await $.wv([$t1], "FrmAddEditCrdType", C, false)), "CheckBoxReserve")), "Checked", (await $.wv([$t1], "True", C, false)));
    await $.mset((await $.wcall([$t1], "FieldByName", ["ITYPE"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t1], "FieldByName", ["RENEWABLESTATUS"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t1], "FieldByName", ["CARDTYPE"], C)), "AsInteger", 0);
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "FrmAddEditCrdType", C, false)), "ShowModal")), (await $.wv([$t1], "mrOk", C, false))))) {
      await $.stmt($.wcall([$t1], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditTypeTuning", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CrdTypesData")), "Delete", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditTypeTuning", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "CrdTypesData"));
    if ($.truthy($.le((await $.wv([$t2], "RecordCount", C, false)), 0))) {
      return L0.result;
    }
    await $.stmt($.wcall([$t2], "Edit", [], C));
    await $.mset((await $.mv((await $.wv([$t2], "FrmAddEditCrdType", C, false)), "CheckBoxReserve")), "Checked", $.eq((await $.mv((await $.wcall([$t2], "FieldByName", ["ICLASS"], C)), "AsInteger")), 1));
    await $.mset((await $.mv((await $.wv([$t2], "FrmAddEditCrdType", C, false)), "CheckBoxLine")), "Checked", $.eq((await $.mv((await $.wcall([$t2], "FieldByName", ["ITYPE"], C)), "AsInteger")), 1));
    await $.mset((await $.mv((await $.wv([$t2], "FrmAddEditCrdType", C, false)), "CheckBoxRen")), "Checked", $.eq((await $.mv((await $.wcall([$t2], "FieldByName", ["RENEWABLESTATUS"], C)), "AsInteger")), 1));
    await $.mset((await $.mv((await $.wv([$t2], "FrmAddEditCrdType", C, false)), "CheckBoxCredCard")), "Checked", $.eq((await $.mv((await $.wcall([$t2], "FieldByName", ["CARDTYPE"], C)), "AsInteger")), 1));
    if ($.truthy($.eq((await $.mv((await $.wv([$t2], "FrmAddEditCrdType", C, false)), "ShowModal")), (await $.wv([$t2], "mrOk", C, false))))) {
      await $.wset([$t2], "SavePlace", (await $.wv([$t2], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
      await $.stmt($.wcall([$t2], "Refresh", [], C));
      await $.stmt((await $.wcall([$t2], "GotoBookmark", [(await $.wcall([$t2], "Pointer", [(await $.wv([$t2], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C))], C)));
      await $.stmt((await $.wcall([$t2], "FreeBookmark", [(await $.wv([$t2], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditTypeTuning", "CrdTypesDataApplyRecord", async function CrdTypesDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "id": 0, "rstatus": 0, "iclass": 0, "itype": 0, "cardtype": 0, "day": 0, "desc": ''};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "ID", (await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t3], "RStatus", (await $.mv((await $.wcall([$t3], "FieldByName", ["RENEWABLESTATUS"], C)), "AsInteger")), { get: async () => L0["rstatus"], set: async (v) => { L0["rstatus"] = v; }, local: true });
    await $.wset([$t3], "IClass", (await $.mv((await $.wcall([$t3], "FieldByName", ["ICLASS"], C)), "AsInteger")), { get: async () => L0["iclass"], set: async (v) => { L0["iclass"] = v; }, local: true });
    await $.wset([$t3], "IType", (await $.mv((await $.wcall([$t3], "FieldByName", ["ITYPE"], C)), "AsInteger")), { get: async () => L0["itype"], set: async (v) => { L0["itype"] = v; }, local: true });
    await $.wset([$t3], "CARDTYPE", (await $.mv((await $.wcall([$t3], "FieldByName", ["CARDTYPE"], C)), "AsInteger")), { get: async () => L0["cardtype"], set: async (v) => { L0["cardtype"] = v; }, local: true });
    await $.wset([$t3], "Desc", (await $.mv((await $.wcall([$t3], "FieldByName", ["DESCRIPTION"], C)), "AsString")), { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    await $.wset([$t3], "day", (await $.mv((await $.wcall([$t3], "FieldByName", ["DUEPERSENTDAY"], C)), "Asinteger")), { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true });
  }
  await L0["applied"].set(true);
  { const $t4 = L0["action"];
    if ($.eq($t4, "I")) {
      await $.stmt((await $.mcall((await $.v(C, "SetupPackg")), "CallProcedure", ["CreditType_Add", ["p_renewablestatus", L0["rstatus"], "p_itype", L0["itype"], "p_iclass", L0["iclass"], "p_CARDTYPE", L0["cardtype"], "p_description", L0["desc"], "p_day", L0["day"]]])));
    }
    else if ($.eq($t4, "U")) {
      await $.stmt((await $.mcall((await $.v(C, "SetupPackg")), "CallProcedure", ["CreditType_Edit", ["p_ID", L0["id"], "p_renewablestatus", L0["rstatus"], "p_itype", L0["itype"], "p_iclass", L0["iclass"], "p_CARDTYPE", L0["cardtype"], "p_description", L0["desc"], "p_day", L0["day"]]])));
    }
    else if ($.eq($t4, "D")) {
      await $.stmt((await $.mcall((await $.v(C, "SetupPackg")), "CallProcedure", ["CreditType_Delete", ["p_ID", L0["id"]]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}

// Generated from UnitNote.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitNote", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "StdCtrls", "DBCtrls", "ExtCtrls", "XFSCtrls", "Grids", "XDBGrids", "Oracle", "Buttons", "sboapiDataModuleImpl", "OpenAccountImpl"]);
  const C = [U];
  U.defClass("TFormNote", "TForm", {"xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "ods_notetypes": {"name": "Ods_notetypes", "type": "TOracleDataSet"}, "ods_commtypes": {"name": "Ods_commtypes", "type": "TOracleDataSet"}, "dsrc_notetypes": {"name": "Dsrc_notetypes", "type": "TDataSource"}, "dsrc_commtypes": {"name": "dsrc_commtypes", "type": "TDataSource"}, "ods_notetypesid": {"name": "Ods_notetypesID", "type": "TFloatField"}, "ods_notetypesname": {"name": "Ods_notetypesNAME", "type": "TWideStringField"}, "ods_commtypesid": {"name": "Ods_commtypesID", "type": "TFloatField"}, "ods_commtypesname": {"name": "Ods_commtypesNAME", "type": "TWideStringField"}, "ods_main": {"name": "ods_main", "type": "TOracleDataSet"}, "dsrc_main": {"name": "dsrc_main", "type": "TDataSource"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "dblook_notetypes": {"name": "DBLook_notetypes", "type": "TDBLookupComboBox"}, "dblook_commtypes": {"name": "DBLook_commtypes", "type": "TDBLookupComboBox"}, "memonote": {"name": "MemoNote", "type": "TMemo"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "ods_maincustid": {"name": "ods_mainCUSTID", "type": "TFloatField"}, "ods_mainnote": {"name": "ods_mainNOTE", "type": "TWideStringField"}, "ods_mainstatus": {"name": "ods_mainSTATUS", "type": "TFloatField"}, "ods_mainuserinsert": {"name": "ods_mainUSERINSERT", "type": "TWideStringField"}, "ods_maincontractid": {"name": "ods_mainCONTRACTID", "type": "TFloatField"}, "ods_maindat": {"name": "ods_mainDAT", "type": "TDateTimeField"}, "ods_maintim": {"name": "ods_mainTIM", "type": "TDateTimeField"}, "pgcust_note": {"name": "pgcust_note", "type": "TOraclePackage"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "ods_mainid": {"name": "ods_mainID", "type": "TFloatField"}, "ods_mainnotetype_name": {"name": "ods_mainNOTETYPE_NAME", "type": "TWideStringField"}, "ods_maincommtype_name": {"name": "ods_mainCOMMTYPE_NAME", "type": "TWideStringField"}, "ods_mainnotetype": {"name": "ods_mainNOTETYPE", "type": "TFloatField"}, "ods_maincommtype": {"name": "ods_mainCOMMTYPE", "type": "TFloatField"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "new": {"name": "New", "type": "TXFBitBtn"}, "add": {"name": "Add", "type": "TXFButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "ods_mainst": {"name": "ods_mainST", "type": "TWideStringField"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "ods_notememo": {"name": "ods_notememo", "type": "TOracleDataSet"}, "ods_notememonote": {"name": "ods_notememoNOTE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormNote", null, "TFormNote");
    U.var_("dey", false, "Boolean");
  });
  U.method("TFormNote", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLook_notetypes")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLook_commtypes")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Add")), "Visible", false);
  await $.mset((await $.v(C, "new")), "Visible", true);
  await $.mcall((await $.v(C, "MemoNote")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormNote", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dey", false);
  await $.mcall((await $.v(C, "Ods_notetypes")), "Open", []);
  await $.mcall((await $.v(C, "Ods_commtypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ods_main"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_id", (await $.wcall([$t1], "strtoint", [(await $.wv([$t1], "cust_noteid", C, false))], C))], C)));
    await $.mset((await $.wv([$t1], "MemoNote", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainNOTE", C, false)), "AsString")));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  {
    const $t2 = (await $.v(C, "ods_notememo"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_id", (await $.wcall([$t2], "strtoint", [(await $.wv([$t2], "cust_noteid", C, false))], C))], C)));
    await $.stmt($.wcall([$t2], "open", [], C));
    await $.mset((await $.wv([$t2], "MemoNote", C, false)), "Text", (await $.mv((await $.wv([$t2], "ods_notememoNOTE", C, false)), "AsString")));
  }
  await $.mset((await $.v(C, "Add")), "Visible", true);
  await $.mset((await $.v(C, "new")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "XDBGrid1CellDblClick", async function XDBGrid1CellDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "ods_mainNOTETYPE")), "IsNull"))))) {
    await $.mset((await $.v(C, "DBLook_notetypes")), "KeyValue", (await $.mv((await $.v(C, "ods_mainNOTETYPE")), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLook_notetypes")), "KeyValue", (-(1)));
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "ods_mainCOMMTYPE")), "IsNull"))))) {
    await $.mset((await $.v(C, "DBLook_commtypes")), "KeyValue", (await $.mv((await $.v(C, "ods_mainCOMMTYPE")), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLook_commtypes")), "KeyValue", (-(1)));
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "ods_mainSTATUS")), "IsNull"))))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.v(C, "ods_mainSTATUS")), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  }
  await $.mset((await $.v(C, "MemoNote")), "Text", (await $.mv((await $.v(C, "ods_mainNOTE")), "AsString")));
  await $.mset((await $.v(C, "Add")), "Visible", false);
  await $.mset((await $.v(C, "new")), "Visible", true);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TFormNote", "NewClick", async function NewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLook_notetypes")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLook_commtypes")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "MemoNote")), "Clear", []);
  await $.mset((await $.v(C, "Add")), "Visible", true);
  await $.mset((await $.v(C, "new")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "AddClick", async function AddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLook_notetypes")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.call(C, "showmessage", ["Modul növü sahəsi seçilməyib  !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLook_commtypes")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.call(C, "showmessage", ["Əlaqə növü sahəsi seçilməyib   !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "MemoNote")), "text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Qeyd sahəsi doldurulmayıb  !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "contract_id")), ""))) {
    await $.set(C, "contract_id", "0");
  }
  await $.stmt((await $.mcall((await $.v(C, "pgcust_note")), "CallProcedure", ["add_cust_notes", [(await $.call(C, "strtoint", [(await $.v(C, "cust_noteid"))])), (await $.mv((await $.v(C, "DBLook_notetypes")), "KeyValue")), (await $.mv((await $.v(C, "DBLook_commtypes")), "KeyValue")), (await $.mv((await $.v(C, "MemoNote")), "Text")), (await $.call(C, "strtoint", [(await $.v(C, "contract_id"))])), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]])));
  await $.mset((await $.v(C, "DBLook_notetypes")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLook_commtypes")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "MemoNote")), "Clear", []);
  await $.mcall((await $.v(C, "ods_main")), "Refresh", []);
  await $.mcall((await $.v(C, "ods_main")), "Last", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormNote")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

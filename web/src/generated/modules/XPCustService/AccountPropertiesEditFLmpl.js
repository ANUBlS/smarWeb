// Generated from AccountPropertiesEditFLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountPropertiesEditFLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "DB", "OracleData", "StdCtrls", "Buttons", "Menus", "ImgList", "UnitDataModPCustService", "AccountPropertiesEditFormLmpl", "AccountPropertiesLmpl", "PCustServiceFormImpl1", "SBTranslateProc", "sboapiDataModuleImpl", "Pcust_CO_BookmarkSetupUnit", "Pcust_CO_BookmarkAddEditUnit", "Pcust_CO_frmWReportUnit", "FormBusProc", "UnitLikol", "Unit7", "Unit8"]);
  const C = [U];
  U.defClass("TAccountPropertiesEditF", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "account_grid": {"name": "Account_grid", "type": "TXDBGrid"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "closeaccount": {"name": "closeAccount", "type": "TMenuItem"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "accountedit1": {"name": "Accountedit1", "type": "TMenuItem"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "n1": {"name": "N1", "type": "TMenuItem"}, "debit2": {"name": "Debit2", "type": "TMenuItem"}, "kredit2": {"name": "Kredit2", "type": "TMenuItem"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "editbal_cn1": {"name": "EditBAL_CN1", "type": "TEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "editacc_no": {"name": "EditAcc_no", "type": "TEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "ddd1": {"name": "ddd1", "type": "TMenuItem"}, "yanacaq": {"name": "Yanacaq", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "pluginhandle": {"name": "PluginHandle", "type": "THandle"}, "exportproc": {"name": "exportproc", "type": "Procedure"}}, {});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("no_selected_account", "Heç bir hesab qeyd edilməyib!");
    U.var_("DB_HesabID", '', "String");
    U.var_("CR_HesabID", '', "String");
    U.var_("AccountPropertiesEditF", null, "TAccountPropertiesEditF");
  });
  U.method("TAccountPropertiesEditF", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "Account_grid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount"));
    await $.wset([$t3], "AccountID", (await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t3], "CloseAll", [], C));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.stmt((await $.wcall([$t3], "Locate", ["ID", (await $.wv([$t3], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TAccountPropertiesEditF", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["PCUS_EM"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form7", (await $.mcall((await $.v(C, "TForm7")), "create", [Self])));
  await $.mcall((await $.v(C, "Form7")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "Accountedit1Click", async function Accountedit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
    return L0.result;
  }
  await $.set(C, "account_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "AsString")));
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "account_edit", (await $.v(C, "account_id"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "EditAcc_noKeyPress", async function EditAcc_noKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesEditF", "EditBAL_CN1KeyPress", async function EditBAL_CN1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesEditF", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccountPropertiesEditForm", (await $.mcall((await $.v(C, "TAccountPropertiesEditForm")), "create", [Self])));
  await $.set(C, "Ph_CO_frmWReport", (await $.mcall((await $.v(C, "TPh_CO_frmWReport")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "N1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "N1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "N1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "closeAccount"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "closeAccount")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "closeAccount")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Accountedit1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Accountedit1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Accountedit1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Yanacaq"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Yanacaq")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Yanacaq")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "N2"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "N2")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "N2")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "Kredit2Click", async function Kredit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Hecbir hesab qeyd edilmeyib   !"])));
    return L0.result;
  } else {
    await $.set(C, "CR_HesabID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "CR_Hesab", (await $.v(C, "CR_HesabID"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Transaction")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "closeAccountClick", async function closeAccountClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "\"%s\" N-li hesab bağlansın?";
  {
    const $t4 = (await $.v(C, "DataModPCustService"));
    const $t5 = (await $.wv([$t4], "Ods_closAccount", C, false));
    if ($.truthy($.eq((await $.wcall([$t4, $t5], "MessageDlg", [(await $.wcall([$t4, $t5], "Format", [(await $.wv([$t4, $t5], "cs_message", { get: async () => L0["cs_message"], set: async (v) => { L0["cs_message"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["acc_no"], C)), "AsString"))]], C)), (await $.wv([$t4, $t5], "mtConfirmation", C, false)), [(await $.wv([$t4, $t5], "mbYes", C, false)), (await $.wv([$t4, $t5], "mbNo", C, false))], 0], C)), (await $.wv([$t4, $t5], "mrYes", C, false))))) {
      await $.stmt((await $.wcall([$t4, $t5], "CloseAccount", [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t4, $t5], "ActionRefreshExecute", [(await $.wv([$t4, $t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      await $.mcall((await $.mv((await $.wv([$t4, $t5], "DataModPCustService", C, false)), "Ods_closAccount")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "ddd1Click", async function ddd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["PCUS_BUS"]])));
  await $.set(C, "Form_busnesProc", (await $.mcall((await $.v(C, "TForm_busnesProc")), "create", [Self])));
  await $.mcall((await $.v(C, "Form_busnesProc")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "Debit2Click", async function Debit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Hecbir hesab qeyd edilmeyib   !"])));
    return L0.result;
  } else {
    await $.set(C, "DB_HesabID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "DB_Hesab", (await $.v(C, "DB_HesabID"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Transaction")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "Account_gridDblClick", async function Account_gridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "account_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "AsString")));
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "account_edit", (await $.v(C, "account_id"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "Account_gridDrawColumnCell", async function Account_gridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state1": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state1"]);
  {
    const $t6 = (await $.v(C, "DataModPCustService"));
    const $t7 = (await $.wv([$t6], "Ods_closAccount", C, false));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t6, $t7], "FieldByName", ["procuration_dat"], C)), "isNUll")))))) {
      if ($.truthy($.le((await $.mv((await $.wcall([$t6, $t7], "FieldByName", ["procuration_dat"], C)), "AsDatetime")), (await $.mv((await $.mv((await $.wv([$t6, $t7], "DataModPCustService", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime"))))) {
        await $.mset((await $.mv((await $.mv((await $.wv([$t6, $t7], "Account_grid", C, false)), "Canvas")), "Font")), "Color", (await $.wv([$t6, $t7], "clRed", C, false)));
      }
      await $.mset((await $.mv((await $.mv((await $.wv([$t6, $t7], "Account_grid", C, false)), "Canvas")), "Font")), "Style", [(await $.wv([$t6, $t7], "fsBold", C, false))]);
      await $.stmt((await $.mcall((await $.wv([$t6, $t7], "Account_grid", C, false)), "DefaultDrawDataCell", [(await $.wv([$t6, $t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.mv((await $.wv([$t6, $t7], "Account_grid", C, false)), "Columns")), [(await $.wv([$t6, $t7], "datacol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false))])), "Field")), (await $.wv([$t6, $t7], "State1", { get: async () => L0["state1"], set: async (v) => { L0["state1"] = v; }, local: true }, false))])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State1"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TAccountPropertiesEditF", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
    return L0.result;
  }
  await $.set(C, "account_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "FieldByName", ["id"])), "AsString")));
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "account_edit", (await $.v(C, "account_id"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "closeAccount")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AccountPropertiesEditF")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesEditF", "YanacaqClick", async function YanacaqClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["PCUS_YAN"]])));
  {
    const $t8 = (await $.v(C, "DataModPCustService"));
    const $t9 = (await $.wv([$t8], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_(((await $.wv([$t8, $t9], "Active", C, false))), async () => ($.ne((await $.wv([$t8, $t9], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t8, $t9], "FormLikol", (await $.mcall((await $.wv([$t8, $t9], "TFormLikol", C, false)), "create", [Self])), C);
      await $.mcall((await $.wv([$t8, $t9], "FormLikol", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t8, $t9], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

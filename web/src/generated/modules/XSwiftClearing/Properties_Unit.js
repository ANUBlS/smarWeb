// Generated from Properties_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Properties_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGrids", "Buttons", "StdCtrls", "SearchEdit", "CurrencyEdit", "Db", "OracleData", "Oracle", "Spin", "DBCtrls", "SelDialog", "data_unit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPropertiesForm", "TForm", {"but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "hoxaccount": {"name": "HOXAccount", "type": "TOracleDataSet"}, "hoxdatasource": {"name": "HoxDataSource", "type": "TDataSource"}, "forall": {"name": "ForAll", "type": "TOracleDataSet"}, "proper_pack": {"name": "Proper_pack", "type": "TOraclePackage"}, "swaccount": {"name": "SWAccount", "type": "TOracleDataSet"}, "swdatasource": {"name": "SWDataSource", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "combo_valute": {"name": "Combo_valute", "type": "TComboBox"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "search_hox": {"name": "search_hox", "type": "TSearchEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "search_swift": {"name": "search_swift", "type": "TSearchEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "edit_limit": {"name": "Edit_limit", "type": "TCurrencyEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit_hox": {"name": "Edit_hox", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "edit_swift": {"name": "Edit_swift", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "edit_swin": {"name": "Edit_swIN", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "edit_swout": {"name": "Edit_swOUT", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "but_in": {"name": "But_in", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "edit_in_dir": {"name": "Edit_IN_Dir", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "but_out": {"name": "But_out", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "edit_out_dir": {"name": "Edit_out_dir", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "edit_transcode_name": {"name": "Edit_transcode_name", "type": "TEdit"}, "edit_transcode_value": {"name": "Edit_transCode_value", "type": "TSpinEdit"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "commision": {"name": "Commision", "type": "TOracleDataSet"}, "commision_datasource": {"name": "commision_DataSource", "type": "TDataSource"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "getindir": {"name": "GetIndir", "type": "boolean"}, "getoutdir": {"name": "GetOutdir", "type": "boolean"}, "sw_getindir": {"name": "SW_GetIndir", "type": "boolean"}, "sw_getoutdir": {"name": "SW_GetOutdir", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("PropertiesForm", null, "TPropertiesForm");
  });
  U.method("TPropertiesForm", "Edit_hoxKeyPress", async function Edit_hoxKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPropertiesForm", "But_outClick", async function But_outClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "GetOUTdir", true);
  await $.mcall((await $.v(C, "SelDirFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "But_inClick", async function But_inClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "GetINdir", true);
  await $.mcall((await $.v(C, "SelDirFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_hox")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper", [2, (await $.mv((await $.v(C, "Edit_Hox")), "Text"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_swift")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper", [1, (await $.mv((await $.v(C, "Edit_swift")), "Text"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "But_cancelClick", async function But_cancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit_hox")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper", [3, (await $.mv((await $.v(C, "Edit_limit")), "Value"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_IN_Dir")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper_dir", [2, 1, (await $.mv((await $.v(C, "Edit_in_dir")), "Text"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_out_Dir")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper_dir", [2, 2, (await $.mv((await $.v(C, "Edit_out_dir")), "Text"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "search_swift")), "Text")), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["addto_hoxswaccount", [1, (await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "fieldbyname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "search_swift")), "Clear", []);
  await $.mcall((await $.v(C, "SWAccount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "search_hox")), "Text")), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["addto_hoxswaccount", [2, (await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Account_data")), "fieldbyname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "search_hox")), "clear", []);
  await $.mcall((await $.v(C, "HOXAccount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "sw_GetINdir", true);
  await $.mcall((await $.v(C, "SelDirFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "sw_GetOUTdir", true);
  await $.mcall((await $.v(C, "SelDirFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_swIN")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper_dir", [1, 1, (await $.mv((await $.v(C, "Edit_swIN")), "Text"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton11Click", async function SpeedButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_swout")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_proper_dir", [1, 2, (await $.mv((await $.v(C, "Edit_swout")), "Text"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton12Click", async function SpeedButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_transcode_name")), "Text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["INS_UPD_TRANSCODE", [(await $.mv((await $.v(C, "edit_transcode_name")), "text")), (await $.mv((await $.v(C, "edit_transcode_value")), "value"))]])));
  await $.mcall((await $.v(C, "Edit_transcode_name")), "Clear", []);
  await $.mset((await $.v(C, "Edit_transCode_value")), "Value", 0);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton13Click", async function SpeedButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "RecordCount")), 0)))) {
    await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["DEL_TRANSTYPE_CODE", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "fieldbyname", ["code"])), "asinteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton14Click", async function SpeedButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Commision")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Proper_pack")), "CallProcedure", ["UPD_TransType", [(await $.mv((await $.mcall((await $.v(C, "Commision")), "fieldbyname", ["id"])), "asinteger"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

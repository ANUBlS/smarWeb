// Generated from Properties_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Properties_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGrids", "Buttons", "StdCtrls", "SearchEdit", "CurrencyEdit", "Db", "OracleData", "Oracle", "Spin", "DBCtrls", "FileCtrl", "DBCGrids", "DBViewComboBox", "data_unit", "LVPCSSImpl", "Unit_setting", "Admin_Setting", "Vergi_Unit"]);
  const C = [U];
  U.defClass("TPropertiesForm", "TForm", {"but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "dataxsaccount": {"name": "DataXSAccount", "type": "TOracleDataSet"}, "ds_xsaccount": {"name": "DS_XSAccount", "type": "TDataSource"}, "datatemp": {"name": "DataTemp", "type": "TOracleDataSet"}, "packconfig": {"name": "PackConfig", "type": "TOraclePackage"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "combo_valute": {"name": "Combo_valute", "type": "TComboBox"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "searchxsaccount": {"name": "SearchXsAccount", "type": "TSearchEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "edit_limit": {"name": "Edit_limit", "type": "TCurrencyEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "but_in": {"name": "But_in", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "edit_in_dir": {"name": "Edit_IN_Dir", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "but_out": {"name": "But_out", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "edit_out_dir": {"name": "Edit_out_dir", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "edit_transcode_name": {"name": "Edit_transcode_name", "type": "TEdit"}, "edit_transcode_value": {"name": "Edit_transCode_value", "type": "TSpinEdit"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "commision": {"name": "Commision", "type": "TOracleDataSet"}, "ds_commision": {"name": "DS_Commision", "type": "TDataSource"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "but_archive": {"name": "but_archive", "type": "TSpeedButton"}, "speedbutton16": {"name": "SpeedButton16", "type": "TSpeedButton"}, "edit_archiv_dir": {"name": "Edit_archiv_dir", "type": "TEdit"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit_account": {"name": "Edit_Account", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "edit_transtype_name": {"name": "Edit_TransType_name", "type": "TEdit"}, "speedbutton17": {"name": "SpeedButton17", "type": "TSpeedButton"}, "dbctrlgrid1": {"name": "DBCtrlGrid1", "type": "TDBCtrlGrid"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "comfilial": {"name": "ComFilial", "type": "TDBViewComboBox"}, "datafilial": {"name": "DataFilial", "type": "TOracleDataSet"}, "dsfilial": {"name": "DSFilial", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "ds_xsbranchaccount": {"name": "DS_XSBranchAccount", "type": "TDataSource"}, "ordsxs_branchaccount": {"name": "OrDSXS_BranchAccount", "type": "TOracleDataSet"}, "searcheditxs_branchaccount": {"name": "SearchEditXS_BranchAccount", "type": "TSearchEdit"}, "btnxs_branchaccountok": {"name": "BtnXS_BranchAccountOK", "type": "TSpeedButton"}, "label4": {"name": "Label4", "type": "TLabel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "admin_": {"name": "Admin_", "type": "TSpeedButton"}, "button1": {"name": "Button1", "type": "TButton"}, "dir": {"name": "Dir", "type": "String"}}, {});
  U.init(async () => {
    U.var_("PropertiesForm", null, "TPropertiesForm");
  });
  U.method("TPropertiesForm", "Edit_AccountKeyPress", async function Edit_AccountKeyPress(Self, p0, p1) {
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
  await $.stmt((await $.call(C, "selectdirectory", ["Select Out directory", "", $.ref(async () => (await $.v(C, "dir")), async ($t1) => { await $.set(C, "dir", $t1); })])));
  if ($.truthy($.ne((await $.v(C, "dir")), ""))) {
    await $.mset((await $.v(C, "Edit_out_dir")), "Text", (await $.v(C, "Dir")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "But_inClick", async function But_inClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "selectdirectory", ["Select In directory", "", $.ref(async () => (await $.v(C, "dir")), async ($t2) => { await $.set(C, "dir", $t2); })])));
  if ($.truthy($.ne((await $.v(C, "dir")), ""))) {
    await $.mset((await $.v(C, "Edit_IN_Dir")), "Text", (await $.v(C, "dir")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_Account")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_config_change", [1, (await $.mv((await $.v(C, "Edit_Account")), "Text"))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Qebul Olundu!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
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
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_limit")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_config_change", [2, (await $.mv((await $.v(C, "Edit_limit")), "Value"))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Qebul Olundu!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_IN_Dir")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_config_change", [3, (await $.mv((await $.v(C, "Edit_in_dir")), "Text"))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Qebul Olundu!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  await $.mcall((await $.v(C, "LVPCSSForm")), "UpdateFileInList", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_out_Dir")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_config_change", [4, (await $.mv((await $.v(C, "Edit_out_dir")), "Text"))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Qebul Olundu!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SearchXsAccount")), "Text")), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_accounts_add", [(await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "DataFilial")), "fieldbyname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "SearchXsAccount")), "clear", []);
  await $.mcall((await $.v(C, "DataXSAccount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton12Click", async function SpeedButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_transcode_name")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBCtrlGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0)))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_transtype_code_change", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.v(C, "Edit_transcode_name")), "text")), (await $.mv((await $.v(C, "Edit_transcode_value")), "value"))]])));
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
    await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_transtype_code_delete", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "fieldbyname", ["code"])), "asinteger"))]])));
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
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_Config_Commision_Change", [(await $.mv((await $.mcall((await $.v(C, "Commision")), "fieldbyname", ["id"])), "asinteger"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPropertiesForm", "but_archiveClick", async function but_archiveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "selectdirectory", ["Select Archive directory", "", $.ref(async () => (await $.v(C, "dir")), async ($t3) => { await $.set(C, "dir", $t3); })])));
  if ($.truthy($.ne((await $.v(C, "dir")), ""))) {
    await $.mset((await $.v(C, "Edit_archiv_dir")), "Text", (await $.v(C, "Dir")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton16Click", async function SpeedButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_archiv_dir")), "text"))])), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_config_change", [5, (await $.mv((await $.v(C, "Edit_archiv_dir")), "Text"))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Qebul Olundu!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton15Click", async function SpeedButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_transtype_name")), "Text"))])), ""))) {
    return L0.result;
  }
  if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Locate", ["NAME", (await $.mv((await $.v(C, "Edit_transtype_name")), "text")), []])))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Bu ad movcuddur!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_transtype_name_change", [0, (await $.mv((await $.v(C, "Edit_transtype_name")), "text")), 1]])));
  await $.mcall((await $.v(C, "Edit_transtype_name")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton17Click", async function SpeedButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Bu ad movcuddur!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["xs_transtype_name_change", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "FieldByName", ["id"])), "AsInteger")), "", 0]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "BtnXS_BranchAccountOKClick", async function BtnXS_BranchAccountOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SearchEditXs_BranchAccount")), "Text")), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "PackConfig")), "CallProcedure", ["XS_BranchAccount_Add", [(await $.call(C, "StrToInt", [(await $.idx((await $.mv((await $.v(C, "Valute_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_Valute")), "ItemIndex"))]))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "DataFilial")), "FieldByName", ["ID"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "SearchXsAccount")), "clear", []);
  await $.mcall((await $.v(C, "OrDSXS_BranchAccount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_Setting")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "Admin_Click", async function Admin_Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "ODS_Ad_Sett_Fili")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "Active", true);
  {
    const $t4 = (await $.mv((await $.v(C, "DataMod")), "ODS_Admin_Setting"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    if ($.truthy($.eq((await $.wcall([$t4], "UpperCase", [(await $.mv((await $.wv([$t4], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t4], "Form_Admin_Setting", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t4], "Application", C, false)), "MessageBox", ["ACCESS DENIED!", "Admin Setting", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "VergiForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from SettingsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SettingsUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "ComCtrls", "Datmodule"]);
  const C = [U];
  U.defClass("TSettings", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button5": {"name": "Button5", "type": "TButton"}, "button6": {"name": "Button6", "type": "TButton"}, "save1": {"name": "save1", "type": "TButton"}, "save2": {"name": "Save2", "type": "TButton"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "save3": {"name": "Save3", "type": "TButton"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button7": {"name": "Button7", "type": "TButton"}, "button8": {"name": "Button8", "type": "TButton"}, "button9": {"name": "Button9", "type": "TButton"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "button10": {"name": "Button10", "type": "TButton"}, "button11": {"name": "Button11", "type": "TButton"}, "save4": {"name": "Save4", "type": "TButton"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "button13": {"name": "Button13", "type": "TButton"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "button12": {"name": "Button12", "type": "TButton"}, "button14": {"name": "Button14", "type": "TButton"}, "button15": {"name": "Button15", "type": "TButton"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "button16": {"name": "Button16", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Settings", $.rec("tsettings"), "TSettings");
  });
  U.method("TSettings", "Button10Click", async function Button10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["Deloper", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid4")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis Status silindi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid4")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button11Click", async function Button11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit4")), "Visible", true);
  await $.mset((await $.v(C, "Save4")), "Visible", true);
  await $.mset((await $.v(C, "button13")), "Visible", true);
  await $.mset((await $.v(C, "button10")), "Visible", false);
  await $.mset((await $.v(C, "button11")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button12Click", async function Button12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["Delicra", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis Icraci silindi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button13Click", async function Button13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit4")), "Visible", false);
  await $.mset((await $.v(C, "Save4")), "Visible", false);
  await $.mset((await $.v(C, "button13")), "Visible", false);
  await $.mset((await $.v(C, "button10")), "Visible", true);
  await $.mset((await $.v(C, "button11")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button14Click", async function Button14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit5")), "Visible", true);
  await $.mset((await $.v(C, "button15")), "Visible", true);
  await $.mset((await $.v(C, "button16")), "Visible", true);
  await $.mset((await $.v(C, "button12")), "Visible", false);
  await $.mset((await $.v(C, "button14")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button15Click", async function Button15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit5")), "Visible", false);
  await $.mset((await $.v(C, "button15")), "Visible", false);
  await $.mset((await $.v(C, "button16")), "Visible", false);
  await $.mset((await $.v(C, "button12")), "Visible", true);
  await $.mset((await $.v(C, "button14")), "Visible", true);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["inscourt_icra", [(await $.mv((await $.v(C, "edit5")), "Text")), 3, 1]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button16Click", async function Button16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit5")), "Visible", false);
  await $.mset((await $.v(C, "button15")), "Visible", false);
  await $.mset((await $.v(C, "button16")), "Visible", false);
  await $.mset((await $.v(C, "button12")), "Visible", true);
  await $.mset((await $.v(C, "button14")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["Delstat", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis Status silindi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Visible", true);
  await $.mset((await $.v(C, "button7")), "Visible", true);
  await $.mset((await $.v(C, "save1")), "Visible", true);
  await $.mset((await $.v(C, "button1")), "Visible", false);
  await $.mset((await $.v(C, "button2")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["Dellaststat", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis Icra Vəziyyəti silindi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit2")), "Visible", true);
  await $.mset((await $.v(C, "button8")), "Visible", true);
  await $.mset((await $.v(C, "save2")), "Visible", true);
  await $.mset((await $.v(C, "button3")), "Visible", false);
  await $.mset((await $.v(C, "button4")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["Delcourt", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis Məhkəmə silindi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit3")), "Visible", true);
  await $.mset((await $.v(C, "button9")), "Visible", true);
  await $.mset((await $.v(C, "save3")), "Visible", true);
  await $.mset((await $.v(C, "button5")), "Visible", false);
  await $.mset((await $.v(C, "button6")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Visible", false);
  await $.mset((await $.v(C, "button2")), "Visible", true);
  await $.mset((await $.v(C, "button1")), "Visible", true);
  await $.mset((await $.v(C, "save1")), "Visible", false);
  await $.mset((await $.v(C, "button7")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button8Click", async function Button8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit2")), "Visible", false);
  await $.mset((await $.v(C, "button3")), "Visible", true);
  await $.mset((await $.v(C, "button4")), "Visible", true);
  await $.mset((await $.v(C, "save2")), "Visible", false);
  await $.mset((await $.v(C, "button8")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Button9Click", async function Button9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit3")), "Visible", false);
  await $.mset((await $.v(C, "button5")), "Visible", true);
  await $.mset((await $.v(C, "button6")), "Visible", true);
  await $.mset((await $.v(C, "save3")), "Visible", false);
  await $.mset((await $.v(C, "button9")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "edit", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_stat_add")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_stat_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_last_stat_add")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_last_stat_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_managers_add")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_managers_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_operates_add")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_operates_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_managers_add_state")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_managers_add_state")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "save1Click", async function save1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Visible", false);
  await $.mset((await $.v(C, "button2")), "Visible", true);
  await $.mset((await $.v(C, "button1")), "Visible", true);
  await $.mset((await $.v(C, "save1")), "Visible", false);
  await $.mset((await $.v(C, "button7")), "Visible", false);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["inscourtstat", [(await $.mv((await $.v(C, "edit1")), "Text")), 1]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Save2Click", async function Save2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit2")), "Visible", false);
  await $.mset((await $.v(C, "button3")), "Visible", true);
  await $.mset((await $.v(C, "button4")), "Visible", true);
  await $.mset((await $.v(C, "save2")), "Visible", false);
  await $.mset((await $.v(C, "button8")), "Visible", false);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["inslastcourtstat", [(await $.mv((await $.v(C, "edit2")), "Text")), 2]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Save3Click", async function Save3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit3")), "Visible", false);
  await $.mset((await $.v(C, "button5")), "Visible", true);
  await $.mset((await $.v(C, "button6")), "Visible", true);
  await $.mset((await $.v(C, "save3")), "Visible", false);
  await $.mset((await $.v(C, "button9")), "Visible", false);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["inscourtmana", [(await $.mv((await $.v(C, "edit3")), "Text")), 3, 0]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettings", "Save4Click", async function Save4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit4")), "Visible", false);
  await $.mset((await $.v(C, "Save4")), "Visible", false);
  await $.mset((await $.v(C, "button13")), "Visible", false);
  await $.mset((await $.v(C, "button10")), "Visible", true);
  await $.mset((await $.v(C, "button11")), "Visible", true);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "pack")), "CallProcedure", ["inscourt_oper", [(await $.mv((await $.v(C, "edit4")), "Text")), 4]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid4")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid4")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from AzipsSett.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AzipsSett", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Unit2", "DBCtrls", "ExtCtrls", "StdCtrls", "Grids", "DBGrids", "Menus"]);
  const C = [U];
  U.defClass("TAzipsSettings", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "btnadd": {"name": "BTNadd", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "btnsave": {"name": "BTnsave", "type": "TButton"}, "btnexit": {"name": "BTNEXIT", "type": "TButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "s1": {"name": "S1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("AzipsSettings", null, "TAzipsSettings");
  });
  U.method("TAzipsSettings", "BTNaddClick", async function BTNaddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel2")), "Visible", true);
  await $.mset((await $.v(C, "DBGrid1")), "Height", 209);
  await $.mset((await $.v(C, "panel2")), "height", 148);
  await $.mset((await $.v(C, "btnadd")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzipsSettings", "BTNEXITClick", async function BTNEXITClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel2")), "Visible", false);
  await $.mset((await $.v(C, "btnadd")), "Visible", true);
  await $.mset((await $.v(C, "DBGrid1")), "Height", 322);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzipsSettings", "BTnsaveClick", async function BTnsaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["azpsettings", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", "");
    await $.stmt((await $.call(C, "showmessage", ["Hesablar Əlavə edildi."])));
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "Exception")) {
      L0["e"] = $.exc($t1);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t1; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzipsSettings", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "SWDataModule"));
    await $.mcall((await $.wv([$t2], "azpsettings", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t2], "AzpFilial", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t2], "azpval", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t2], "comm_acc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t2], "mbacc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t2], "azpsettings", C, false)), "open", []);
    await $.mcall((await $.wv([$t2], "AzpFilial", C, false)), "open", []);
    await $.mcall((await $.wv([$t2], "azpval", C, false)), "open", []);
    await $.mcall((await $.wv([$t2], "comm_acc", C, false)), "open", []);
    await $.mcall((await $.wv([$t2], "mbacc", C, false)), "open", []);
  }
  await $.mset((await $.v(C, "DBGrid1")), "Height", 322);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzipsSettings", "S1Click", async function S1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["azpsettings_del", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis hesab silindi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from MTsett.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MTsett", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Menus", "Grids", "DBGrids", "StdCtrls", "DBCtrls", "ExtCtrls", "ComCtrls", "Unit2", "SearchCombo", "SearchEdit", "SboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAzpSettings", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "btnsave": {"name": "BTnsave", "type": "TButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "btnadd": {"name": "BTNadd", "type": "TButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "s1": {"name": "S1", "type": "TMenuItem"}, "button1": {"name": "Button1", "type": "TButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btsave": {"name": "Btsave", "type": "TButton"}, "btadd": {"name": "Btadd", "type": "TButton"}, "btclose": {"name": "Btclose", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "combobox3": {"name": "ComboBox3", "type": "TComboBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dblookupcombobox7": {"name": "DBLookupComboBox7", "type": "TDBLookupComboBox"}, "dblookupcombobox8": {"name": "DBLookupComboBox8", "type": "TDBLookupComboBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "s2": {"name": "S2", "type": "TMenuItem"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "dblookupcombobox9": {"name": "DBLookupComboBox9", "type": "TDBLookupComboBox"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "dblookupcombobox10": {"name": "DBLookupComboBox10", "type": "TDBLookupComboBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "s3": {"name": "S3", "type": "TMenuItem"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("AzpSettings", null, "TAzpSettings");
  });
  U.method("TAzpSettings", "BtaddClick", async function BtaddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", true);
  await $.mset((await $.v(C, "DBGrid2")), "Height", 193);
  await $.mset((await $.v(C, "btadd")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "BtcloseClick", async function BtcloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBGrid2")), "Height", 337);
  await $.mset((await $.v(C, "btadd")), "Visible", true);
  await $.mset((await $.v(C, "panel1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "BTNaddClick", async function BTNaddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel2")), "Visible", true);
  await $.mset((await $.v(C, "DBGrid1")), "Height", 259);
  await $.mset((await $.v(C, "panel2")), "height", 148);
  await $.mset((await $.v(C, "btnadd")), "Visible", false);
  await $.mset((await $.v(C, "button1")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "BTnsaveClick", async function BTnsaveClick(Self, p0) {
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
  U.method("TAzpSettings", "BtsaveClick", async function BtsaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["Azp205", [(await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (await $.mv((await $.v(C, "DBLookupComboBox7")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue")), (await $.mv((await $.v(C, "Edit3")), "Text")), (await $.mv((await $.v(C, "DBLookupComboBox9")), "Text"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox6")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox7")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox8")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox9")), "KeyValue", "");
    await $.mset((await $.v(C, "combobox3")), "Text", "");
    await $.mset((await $.v(C, "Edit1")), "Text", "");
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "DBLookupComboBox9")), "KeyValue", "");
    await $.stmt((await $.call(C, "showmessage", ["Hesablar Əlavə edildi."])));
  } catch ($t2) {
    $.rethrowControl($t2);
    if ($.excIs($t2, "Exception")) {
      L0["e"] = $.exc($t2);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t2; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel2")), "Visible", false);
  await $.mset((await $.v(C, "DBGrid1")), "Height", 342);
  await $.mset((await $.v(C, "btnadd")), "Visible", true);
  await $.mset((await $.v(C, "button1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel3")), "Height", 125);
  await $.mset((await $.v(C, "dbgrid3")), "Height", 253);
  await $.mset((await $.v(C, "Button4")), "Visible", true);
  await $.mset((await $.v(C, "button3")), "Visible", true);
  await $.mset((await $.v(C, "button2")), "Visible", false);
  await $.mset((await $.v(C, "label17")), "Visible", true);
  await $.mset((await $.v(C, "label16")), "Visible", true);
  await $.mset((await $.v(C, "label15")), "Visible", true);
  await $.mset((await $.v(C, "label14")), "Visible", true);
  await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
  await $.mset((await $.v(C, "combobox1")), "Visible", true);
  await $.mset((await $.v(C, "combobox4")), "Visible", true);
  await $.mset((await $.v(C, "combobox2")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBGrid3")), "Height", 345);
  await $.mset((await $.v(C, "panel3")), "Height", 36);
  await $.mset((await $.v(C, "button3")), "Visible", false);
  await $.mset((await $.v(C, "button2")), "Visible", true);
  await $.mset((await $.v(C, "label17")), "Visible", false);
  await $.mset((await $.v(C, "label16")), "Visible", false);
  await $.mset((await $.v(C, "label15")), "Visible", false);
  await $.mset((await $.v(C, "label14")), "Visible", false);
  await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", false);
  await $.mset((await $.v(C, "combobox1")), "Visible", false);
  await $.mset((await $.v(C, "combobox4")), "Visible", false);
  await $.mset((await $.v(C, "combobox2")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fil": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "combobox3")), "Text")), "Filial"))) {
      L0["fil"] = 1;
    } else {
      L0["fil"] = 0;
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["bproc_out", [(await $.mv((await $.v(C, "DBLookupComboBox10")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox10")), "text")), (await $.mv((await $.v(C, "combobox1")), "Text")), (await $.mv((await $.v(C, "combobox2")), "Text")), L0["fil"]]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "KeyValue", "");
    await $.stmt((await $.call(C, "showmessage", ["Biznes  prosees əlavə edildi."])));
    await $.mcall((await $.v(C, "Button3")), "Click", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    if ($.excIs($t3, "Exception")) {
      L0["e"] = $.exc($t3);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t3; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "ComboBox1CloseUp", async function ComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "ComboBox1Enter", async function ComboBox1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "DBLookupComboBox3CloseUp", async function DBLookupComboBox3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "SWDataModule"));
    await $.mcall((await $.wv([$t4], "mbacc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "CloseAll", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox4", C, false)), "Text")), "AZN"))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "mbacc", C, false)), "SetVariable", ["bal1", 1052])));
      await $.stmt((await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "SetVariable", ["BAL2", 6404])));
      await $.stmt((await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "SetVariable", ["fil", (await $.mv((await $.wv([$t4], "DBLookupComboBox3", C, false)), "KeyValue"))])));
      await $.stmt((await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "SetVariable", ["val", (await $.mv((await $.wv([$t4], "DBLookupComboBox4", C, false)), "KeyValue"))])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t4], "mbacc", C, false)), "SetVariable", ["bal1", 1062])));
      await $.stmt((await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "SetVariable", ["BAL2", 6414])));
      await $.stmt((await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "SetVariable", ["fil", (await $.mv((await $.wv([$t4], "DBLookupComboBox3", C, false)), "KeyValue"))])));
      await $.stmt((await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "SetVariable", ["val", (await $.mv((await $.wv([$t4], "DBLookupComboBox4", C, false)), "KeyValue"))])));
    }
    await $.mcall((await $.wv([$t4], "mbacc", C, false)), "OPEN", []);
    await $.mcall((await $.wv([$t4], "comm_acc", C, false)), "OPEN", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "DBLookupComboBox4CloseUp", async function DBLookupComboBox4CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ilk öncə Filial seçilməlidir "])));
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", (-(1)));
    return L0.result;
  }
  {
    const $t5 = (await $.v(C, "SWDataModule"));
    await $.mcall((await $.wv([$t5], "mbacc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "CloseAll", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t5], "DBLookupComboBox4", C, false)), "Text")), "AZN"))) {
      await $.stmt((await $.mcall((await $.wv([$t5], "mbacc", C, false)), "SetVariable", ["bal1", 1052])));
      await $.stmt((await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "SetVariable", ["BAL2", 6404])));
      await $.stmt((await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "SetVariable", ["fil", (await $.mv((await $.wv([$t5], "DBLookupComboBox3", C, false)), "KeyValue"))])));
      await $.stmt((await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "SetVariable", ["val", (await $.mv((await $.wv([$t5], "DBLookupComboBox4", C, false)), "KeyValue"))])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t5], "mbacc", C, false)), "SetVariable", ["bal1", 1062])));
      await $.stmt((await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "SetVariable", ["BAL2", 6414])));
      await $.stmt((await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "SetVariable", ["fil", (await $.mv((await $.wv([$t5], "DBLookupComboBox3", C, false)), "KeyValue"))])));
      await $.stmt((await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "SetVariable", ["val", (await $.mv((await $.wv([$t5], "DBLookupComboBox4", C, false)), "KeyValue"))])));
    }
    await $.mcall((await $.wv([$t5], "mbacc", C, false)), "OPEN", []);
    await $.mcall((await $.wv([$t5], "comm_acc", C, false)), "OPEN", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "DBLookupComboBox6CloseUp", async function DBLookupComboBox6CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "SWDataModule"));
    await $.mcall((await $.wv([$t6], "all_banks", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "all_banks", C, false)), "setvariable", ["valute", (await $.mv((await $.wv([$t6], "DBLookupComboBox6", C, false)), "Text"))])));
    await $.mcall((await $.wv([$t6], "all_banks", C, false)), "open", []);
    await $.mcall((await $.wv([$t6], "all_banks", C, false)), "First", []);
    { const $t7 = (await $.mv((await $.wv([$t6], "all_banks", C, false)), "RecordCount"));
      await $.wset([$t6], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t6], "j", $.succ((await $.wv([$t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        await $.mcall((await $.wv([$t6], "all_banks", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "DBLookupComboBox9CloseUp", async function DBLookupComboBox9CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "All_Banks")), "FieldByName", ["bankcode"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Birinci Valyuta Secilməlidir!!"])));
    await $.mcall((await $.v(C, "edit1")), "Clear", []);
  } else {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      {
        const $t9 = (await $.v(C, "SWDataModule"));
        await $.mcall((await $.wv([$t9], "Main_acc", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "Main_acc", C, false)), "SetVariable", ["valcode", (await $.mv((await $.wv([$t9], "DBLookupComboBox6", C, false)), "KeyValue"))])));
        await $.stmt((await $.mcall((await $.wv([$t9], "Main_acc", C, false)), "SetVariable", ["bal1", (await $.wcall([$t9], "strtoint", [(await $.mv((await $.wv([$t9], "edit1", C, false)), "Text"))], C))])));
        await $.mcall((await $.wv([$t9], "Main_acc", C, false)), "Open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAzpSettings", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox6")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Birinci Valyuta Secilməlidir!!"])));
    await $.mcall((await $.v(C, "edit2")), "Clear", []);
  } else {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      {
        const $t10 = (await $.v(C, "SWDataModule"));
        await $.mcall((await $.wv([$t10], "alter_acc", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t10], "alter_acc", C, false)), "SetVariable", ["valcode", (await $.mv((await $.wv([$t10], "DBLookupComboBox6", C, false)), "KeyValue"))])));
        await $.stmt((await $.mcall((await $.wv([$t10], "alter_acc", C, false)), "SetVariable", ["bal2", (await $.wcall([$t10], "strtoint", [(await $.mv((await $.wv([$t10], "edit2", C, false)), "Text"))], C))])));
        await $.mcall((await $.wv([$t10], "alter_acc", C, false)), "Open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAzpSettings", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t11 = (await $.mv((await $.v(C, "SWDataModule")), "All_Banks"));
      await $.wset([$t11], "Filter", $.add("bankcode = ", (await $.mv((await $.wv([$t11], "edit3", C, false)), "Text"))), C);
      await $.wset([$t11], "Filtered", (await $.wv([$t11], "true", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAzpSettings", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "SWDataModule"));
    await $.mcall((await $.wv([$t12], "b_proc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "azpsettings", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "AzpFilial", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "bproc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "azpval", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "comm_acc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "mbacc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "Azpsett", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "All_Banks", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t12], "azpsettings", C, false)), "open", []);
    await $.mcall((await $.wv([$t12], "AzpFilial", C, false)), "open", []);
    await $.mcall((await $.wv([$t12], "azpval", C, false)), "open", []);
    await $.mcall((await $.wv([$t12], "Azpsett", C, false)), "open", []);
    await $.mcall((await $.wv([$t12], "All_Banks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t12], "b_proc", C, false)), "open", []);
    await $.mcall((await $.wv([$t12], "bproc", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "S1Click", async function S1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["azpsettings_del", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis hesab silindi."])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", [])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "S2Click", async function S2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["Azp205_del", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis hesab silindi."])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", [])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzpSettings", "S3Click", async function S3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Silinsin", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["bproc_in_del", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["Secilmis biznes proses silindi."])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", [])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

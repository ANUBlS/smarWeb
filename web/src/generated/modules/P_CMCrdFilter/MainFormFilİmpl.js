// Generated from MainFormFilİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainFormFilİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "DB", "OracleData", "ExtCtrls", "CommonDecls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainForm", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "dscustomers": {"name": "DSCustomers", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "mid": {"name": "Mid", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "knum": {"name": "Knum", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "kid": {"name": "Kid", "type": "TEdit"}, "mkod": {"name": "Mkod", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("MainForm", null, "TMainForm");
  });
  U.method("TMainForm", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "";
  if ($.truthy($.ne((await $.mv((await $.v(C, "Kid")), "Text")), ""))) {
    L0["result"] = $.add($.add($.add(L0["result"], "(id="), (await $.mv((await $.v(C, "Kid")), "Text"))), ")");
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Knum")), "Text")), ""))) {
    if ($.truthy($.eq(L0["result"], ""))) {
      L0["result"] = $.add($.add($.add($.add(L0["result"], " numberofcredit="), "'"), (await $.mv((await $.v(C, "Knum")), "Text"))), "'");
    } else {
      L0["result"] = $.add($.add($.add($.add(L0["result"], " and numberofcredit="), "'"), (await $.mv((await $.v(C, "Knum")), "Text"))), "'");
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Mid")), "Text")), ""))) {
    if ($.truthy($.eq(L0["result"], ""))) {
      L0["result"] = $.add($.add($.add(L0["result"], " (BOOROWERID="), (await $.mv((await $.v(C, "Mid")), "Text"))), ")");
    } else {
      L0["result"] = $.add($.add($.add(L0["result"], " and (BOOROWERID="), (await $.mv((await $.v(C, "Mid")), "Text"))), ")");
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
    if ($.truthy($.eq(L0["result"], ""))) {
      L0["result"] = $.add($.add($.add(L0["result"], "(BOOROWERID="), (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))]))), ")");
    } else {
      L0["result"] = $.add($.add($.add(L0["result"], " and (BOOROWERID="), (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))]))), ")");
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Mkod")), "Text")), ""))) {
    if ($.truthy($.eq(L0["result"], ""))) {
      L0["result"] = $.add($.add(L0["result"], "  passpin="), (await $.mv((await $.v(C, "Mkod")), "Text")));
    } else {
      L0["result"] = $.add($.add(L0["result"], " and passpin="), (await $.mv((await $.v(C, "Mkod")), "Text")));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "MainForm")), "Show", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CommonDBGrid"));
    const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.mv((await $.wv([$t1, $t2], "CheckBox1", C, false)), "Checked")))) {
      await $.wset([$t1, $t2], "Filter", "", C);
      await $.wset([$t1, $t2], "Filtered", (await $.wv([$t1, $t2], "False", C, false)), C);
      await $.mcall((await $.wv([$t1, $t2], "SelectedRows", C, false)), "Clear", []);
      await $.mset((await $.wv([$t1, $t2], "CommonDBGrid", C, false)), "Visible", (await $.wv([$t1, $t2], "true", C, false)));
      await $.mset((await $.wv([$t1, $t2], "CommonPanel", C, false)), "Visible", (await $.wv([$t1, $t2], "true", C, false)));
      await $.stmt($.wcall([$t1, $t2], "open", [], C));
      await $.mcall((await $.wv([$t1, $t2], "MainForm", C, false)), "Close", []);
    } else {
      if ($.truthy($.ne((await $.wv([$t1, $t2], "BuildFilterString", C, false)), ""))) {
        await $.wset([$t1, $t2], "Filter", (await $.wv([$t1, $t2], "BuildFilterString", C, false)), C);
        await $.wset([$t1, $t2], "Filtered", (await $.wv([$t1, $t2], "False", C, false)), C);
        await $.wset([$t1, $t2], "Filtered", (await $.wv([$t1, $t2], "True", C, false)), C);
        await $.stmt($.wcall([$t1, $t2], "open", [], C));
        await $.mcall((await $.wv([$t1, $t2], "SelectedRows", C, false)), "Clear", []);
        if ($.truthy($.eq((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
          await $.stmt((await $.wcall([$t1, $t2], "ShowMessage", ["Heç bir məlumat tapılmadı"], C)));
          await $.mset((await $.wv([$t1, $t2], "CommonDBGrid", C, false)), "Visible", (await $.wv([$t1, $t2], "false", C, false)));
          await $.mset((await $.wv([$t1, $t2], "CommonPanel", C, false)), "Visible", (await $.wv([$t1, $t2], "false", C, false)));
        } else {
          await $.stmt($.wcall([$t1, $t2], "open", [], C));
          await $.mset((await $.wv([$t1, $t2], "CommonDBGrid", C, false)), "Visible", (await $.wv([$t1, $t2], "true", C, false)));
          await $.mset((await $.wv([$t1, $t2], "CommonPanel", C, false)), "Visible", (await $.wv([$t1, $t2], "true", C, false)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "CommonDBGrid"));
    const $t4 = (await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet"));
    await $.wset([$t3, $t4], "Filter", "", C);
    await $.wset([$t3, $t4], "Filtered", (await $.wv([$t3, $t4], "False", C, false)), C);
    await $.mcall((await $.wv([$t3, $t4], "SelectedRows", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3, $t4], "CommonDBGrid", C, false)), "Visible", (await $.wv([$t3, $t4], "false", C, false)));
    await $.mset((await $.wv([$t3, $t4], "CommonPanel", C, false)), "Visible", (await $.wv([$t3, $t4], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Customers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Customers")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainForm", (await $.mcall((await $.v(C, "TMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

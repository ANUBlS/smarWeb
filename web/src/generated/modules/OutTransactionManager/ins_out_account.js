// Generated from ins_out_account.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ins_out_account", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "AccountDataModuleImpl"]);
  const C = [U];
  U.defClass("Tinsert_out_account", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "button6": {"name": "Button6", "type": "TButton"}, "box2": {"name": "box2", "type": "TGroupBox"}, "button7": {"name": "Button7", "type": "TButton"}, "button8": {"name": "Button8", "type": "TButton"}, "button9": {"name": "Button9", "type": "TButton"}, "box3": {"name": "box3", "type": "TGroupBox"}, "button10": {"name": "Button10", "type": "TButton"}, "button11": {"name": "Button11", "type": "TButton"}, "button12": {"name": "Button12", "type": "TButton"}, "box1": {"name": "box1", "type": "TGroupBox"}, "button13": {"name": "Button13", "type": "TButton"}, "button14": {"name": "Button14", "type": "TButton"}, "button15": {"name": "Button15", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("insert_out_account", null, "Tinsert_out_account");
  });
  U.method("Tinsert_out_account", "enableClick", async function enableClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["enable_triggers", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  aktivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "box2")), "visible", false);
  await $.mset((await $.v(C, "box3")), "visible", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "box1")), "Visible")), false))) {
    await $.mset((await $.v(C, "box1")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "box1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Cursor", (await $.v(C, "crSQLWait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["disable_trig_acc", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  passivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["insert_out_account", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Butun hesablar kocuruldu!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["enable_trig_acc", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  aktivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "box1")), "visible", false);
  await $.mset((await $.v(C, "box3")), "visible", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "box2")), "Visible")), false))) {
    await $.mset((await $.v(C, "box2")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "box2")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Cursor", (await $.v(C, "crSQLWait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["disable_trig_prov", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  passivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "box1")), "visible", false);
  await $.mset((await $.v(C, "box2")), "visible", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "box3")), "Visible")), false))) {
    await $.mset((await $.v(C, "box3")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "box3")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button10Click", async function Button10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Cursor", (await $.v(C, "crSQLWait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["disable_trig_arc", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  passivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button9Click", async function Button9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["enable_trig_prov", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  aktivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button8Click", async function Button8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["insert_out_provarch", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Butun hesablar kocuruldu!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button11Click", async function Button11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["insert_out_archost", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Butun hesablar kocuruldu!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinsert_out_account", "Button12Click", async function Button12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cursor", (await $.v(C, "crsqlwait")));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "out_sbop")), "callprocedure", ["enable_trig_arc", []])));
  await $.set(C, "cursor", (await $.v(C, "crdefault")));
  await $.mcall((await $.v(C, "Application")), "Processmessages", []);
  await $.stmt((await $.call(C, "showmessage", ["Triggerler  aktivdir!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

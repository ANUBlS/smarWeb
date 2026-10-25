// Generated from AdministrationOwnerSheep.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationOwnerSheep", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "Gauges", "SearchCombo", "sbcore", "AdministrationDataModule", "AdministrationOwnerSheepAdvanced"]);
  const C = [U];
  U.defClass("TOwnThread", "TThread", {"owner": {"name": "Owner", "type": "Integer"}, "newowner": {"name": "NewOwner", "type": "Integer"}, "someexcept": {"name": "SomeExcept", "type": "Exception"}}, {});
  U.defClass("TFmOwnerSheep", "TForm", {"grown": {"name": "grOwn", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btexit": {"name": "btExit", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btnadvanced": {"name": "btnAdvanced", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "sc": {"name": "SC", "type": "TSearchCombo"}, "edid1": {"name": "edID1", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "sc2": {"name": "SC2", "type": "TSearchCombo"}, "edid2": {"name": "edID2", "type": "TEdit"}, "gaproc": {"name": "gaProc", "type": "TGauge"}, "memcaution": {"name": "memCaution", "type": "TMemo"}, "montimer": {"name": "MonTimer", "type": "TTimer"}, "errorexit": {"name": "ErrorExit", "type": "Boolean"}, "errorstr": {"name": "ErrorStr", "type": "String"}}, {});
  U.init(async () => {
    U.const("WM_EXCEPTIONMESSAGE", $.add((await $.v(C, "WM_USER")), 400));
    U.var_("FmOwnerSheep", null, "TFmOwnerSheep");
    U.var_("MainTh", null, "TOwnThread");
  });
  U.method("TFmOwnerSheep", "WM_USERMY", async function WM_USERMY(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.v(C, "ErrorStr"))])));
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TOwnThread", "ChangeOwner", async function ChangeOwner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "FmOwnerSheep"));
    const $t2 = (await $.mv((await $.wv([$t1], "AdministrationData", C, false)), "pcADM"));
    await $.stmt((await $.wcall([$t1, $t2], "Synchronize", [(await $.wv([$t1, $t2], "IncBar", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "CallBooleanFunction", ["changeownerincustomers", [(await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID1", C, false)), "Text"))], C)), (await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID2", C, false)), "Text"))], C))]], C)));
    await $.stmt((await $.wcall([$t1, $t2], "Synchronize", [(await $.wv([$t1, $t2], "IncBar", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "CallBooleanFunction", ["changeownerinAccount", [(await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID1", C, false)), "Text"))], C)), (await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID2", C, false)), "Text"))], C))]], C)));
    await $.stmt((await $.wcall([$t1, $t2], "Synchronize", [(await $.wv([$t1, $t2], "IncBar", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "CallBooleanFunction", ["changeownerinTransaction", [(await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID1", C, false)), "Text"))], C)), (await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID2", C, false)), "Text"))], C))]], C)));
    await $.stmt((await $.wcall([$t1, $t2], "Synchronize", [(await $.wv([$t1, $t2], "IncBar", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "CallBooleanFunction", ["changeownerinContracts", [(await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID1", C, false)), "Text"))], C)), (await $.wcall([$t1, $t2], "StrToInt", [(await $.mv((await $.wv([$t1, $t2], "edID2", C, false)), "Text"))], C))]], C)));
    await $.stmt((await $.wcall([$t1, $t2], "Synchronize", [(await $.wv([$t1, $t2], "IncBar", C, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Sb_Commit", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "Synchronize", [(await $.wv([$t1, $t2], "IncBar", C, false))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOwnThread", "IncBar", async function IncBar(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.mv((await $.v(C, "FmOwnerSheep")), "gaProc"));
    await $.wset([$t3], "Progress", $.add((await $.wv([$t3], "Progress", C, false)), 10), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOwnThread", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt($.call(C, "ChangeOwner", []));
  } catch ($t4) {
    $.rethrowControl($t4);
    if ($.excIs($t4, "Exception")) {
      L0["e"] = $.exc($t4);
      if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FmOwnerSheep"))])))) {
        await $.mset((await $.v(C, "FmOwnerSheep")), "ErrorStr", (await $.mv(L0["e"], "Message")));
        await $.stmt((await $.call(C, "PostMessage", [(await $.mv((await $.v(C, "FmOwnerSheep")), "Handle")), (await $.v(C, "WM_EXCEPTIONMESSAGE")), (await $.call(C, "Integer", [L0["e"]])), 0])));
      }
    }
    else { throw $t4; }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFmOwnerSheep", "SCChange", async function SCChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "AdministrationData")), "UsersData"));
    await $.mset((await $.wv([$t5], "edID1", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["USER#"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "SC2Change", async function SC2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "AdministrationData")), "UsersData"));
    await $.mset((await $.wv([$t6], "edID2", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["USER#"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "edID1")), "Text")), (await $.v(C, "EmptyStr")))), async () => ($.ne((await $.mv((await $.v(C, "edID2")), "Text")), (await $.v(C, "EmptyStr")))))))) {
    try {
      await $.mset((await $.v(C, "gaProc")), "Progress", 0);
      if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "MainTh"))])))) {
        await $.mcall((await $.v(C, "MainTh")), "Terminate", []);
        await $.set(C, "MainTh", null);
      }
      await $.set(C, "MainTh", (await $.mcall((await $.v(C, "TOwnThread")), "Create", [false])));
    } catch ($t7) {
      $.rethrowControl($t7);
      $.handled($t7);
      await $.set(C, "ErrorExit", true);
      throw $t7;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FmOwnerSheep", null);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "MainTh"))])))) {
    await $.mcall((await $.v(C, "MainTh")), "Terminate", []);
    await $.set(C, "MainTh", null);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "QueryToExit", async function QueryToExit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  if ($.truthy((await $.or_($.not(((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "MainTh"))])), async () => ($.ne((await $.mv((await $.v(C, "gaProc")), "Progress")), (await $.mv((await $.v(C, "gaProc")), "MaxValue")))))))), async () => (await $.v(C, "ErrorExit")))))) {
    L0["result"] = true;
  } else {
    L0["result"] = false;
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFmOwnerSheep", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "QueryToExit")))))) {
    await L0["action"].set((await $.v(C, "caNone")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFmOwnerSheep", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FmOwnerSheep", Self);
  await $.mset((await $.v(C, "MonTimer")), "Enabled", true);
  await $.set(C, "ErrorExit", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "edID1KeyUp", async function edID1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "ref": null};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
    return L0.result;
  }
  if ($.truthy($.eq(L0["sender"], (await $.v(C, "edID1"))))) {
    L0["ref"] = (await $.ref_(C, "Sc"));
  } else {
    L0["ref"] = (await $.ref_(C, "sc2"));
  }
  {
    const $t8 = L0["ref"];
    const $t9 = (await $.mv((await $.wv([$t8], "AdministrationData", C, false)), "UsersData"));
    if ($.truthy((await $.wcall([$t8, $t9], "Locate", ["USER#", (await $.wcall([$t8, $t9], "StrToInt", [(await $.mv(((await $.wv([$t8, $t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))], C)), []], C)))) {
      await $.wset([$t8, $t9], "ItemIndex", (await $.mcall((await $.wv([$t8, $t9], "Items", C, false)), "IndexOf", [(await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["NAME"], C)), "AsString"))])), C);
    } else {
      await $.wset([$t8, $t9], "ItemIndex", 0, C);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFmOwnerSheep", "btnAdvancedClick", async function btnAdvancedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fmownersheepadv": null};
  await $.fixArgs(L0, ["sender"]);
  L0["fmownersheepadv"] = (await $.mcall((await $.v(C, "TfmAdmOwnerChangeAdvanced")), "Create", [Self]));
  try {
    await $.mcall(L0["fmownersheepadv"], "ShowModal", []);
  } finally {
    await $.mcall(L0["fmownersheepadv"], "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "MonTimerTimer", async function MonTimerTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (L0["sender"]);
    await $.wset([$t10], "Tag", $.add((await $.wv([$t10], "Tag", C, false)), 1), C);
    if ($.truthy($.gt((await $.wv([$t10], "Tag", C, false)), 16))) {
      await $.mset((await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.wv([$t10], "False", C, false)));
    }
    if ($.truthy($.eq(($.mod((await $.wv([$t10], "Tag", C, false)), 5)), 0))) {
      await $.mset((await $.mv((await $.wv([$t10], "memCaution", C, false)), "Font")), "Color", (await $.wv([$t10], "clRed", C, false)));
    } else {
      await $.mset((await $.mv((await $.wv([$t10], "memCaution", C, false)), "Font")), "Color", (await $.wv([$t10], "clBlack", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmOwnerSheep", "btExitClick", async function btExitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "MainTh"))])))) {
    await $.mcall((await $.v(C, "MainTh")), "Terminate", []);
    await $.set(C, "MainTh", null);
  }
  await $.set(C, "ErrorExit", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from InfoFrmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InfoFrmImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "DataMPrCrImpl"]);
  const C = [U];
  U.defClass("TInfoFrm", "TForm", {"scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}}, {});
  U.init(async () => {
    U.var_("InfoFrm", null, "TInfoFrm");
  });
  U.method("TInfoFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TInfoFrm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TInfoFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tp": 0, "lft": 0, "t": 0, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMPrCredit")), "CreditInfoDSet")), "FieldByName", ["numberofcredit"])), "AsString")), "  Nömrəli kreditin məlumatlaı"));
  L0["tp"] = 20;
  L0["lft"] = 5;
  L0["t"] = 0;
  {
    const $t1 = (await $.mv((await $.v(C, "DataMPrCredit")), "PrViewDSet"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.stmt($.wcall([$t1], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1], "EOF", C, false))))) {
      {
        const $t2 = ((await $.mcall((await $.wv([$t1], "TLabeledEdit", C, false)), "create", [(await $.wv([$t1], "InfoFrm", C, false))])));
        await $.wset([$t1, $t2], "Parent", (await $.wv([$t1, $t2], "ScrollBox1", C, false)), C);
        await $.mset((await $.wv([$t1, $t2], "EditLabel", C, false)), "Caption", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["comments"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t1, $t2], "EditLabel", C, false)), "Font")), "Color", (await $.wv([$t1, $t2], "clBlue", C, false)));
        await $.mset((await $.mv((await $.wv([$t1, $t2], "EditLabel", C, false)), "Font")), "Style", [(await $.wv([$t1, $t2], "fsBold", C, false))]);
        await $.wset([$t1, $t2], "fname", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["column_name"], C)), "AsString")), { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true });
        await $.wset([$t1, $t2], "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "DataMPrCredit", C, false)), "CreditInfoDSet")), "FieldByName", [(await $.wv([$t1, $t2], "fname", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false))])), "AsString")), C);
        await $.wset([$t1, $t2], "Top", (await $.wv([$t1, $t2], "tp", { get: async () => L0["tp"], set: async (v) => { L0["tp"] = v; }, local: true }, false)), C);
        await $.wset([$t1, $t2], "left", (await $.wv([$t1, $t2], "lft", { get: async () => L0["lft"], set: async (v) => { L0["lft"] = v; }, local: true }, false)), C);
        await $.wset([$t1, $t2], "width", 250, C);
        await $.wset([$t1, $t2], "lft", $.add((await $.wv([$t1, $t2], "lft", { get: async () => L0["lft"], set: async (v) => { L0["lft"] = v; }, local: true }, false)), 256), { get: async () => L0["lft"], set: async (v) => { L0["lft"] = v; }, local: true });
        await $.wset([$t1, $t2], "t", $.add((await $.wv([$t1, $t2], "t", { get: async () => L0["t"], set: async (v) => { L0["t"] = v; }, local: true }, false)), 1), { get: async () => L0["t"], set: async (v) => { L0["t"] = v; }, local: true });
        if ($.truthy($.gt((await $.wv([$t1, $t2], "t", { get: async () => L0["t"], set: async (v) => { L0["t"] = v; }, local: true }, false)), 2))) {
          await $.wset([$t1, $t2], "tp", $.add((await $.wv([$t1, $t2], "tp", { get: async () => L0["tp"], set: async (v) => { L0["tp"] = v; }, local: true }, false)), 40), { get: async () => L0["tp"], set: async (v) => { L0["tp"] = v; }, local: true });
          await $.wset([$t1, $t2], "lft", 5, { get: async () => L0["lft"], set: async (v) => { L0["lft"] = v; }, local: true });
          await $.wset([$t1, $t2], "t", 0, { get: async () => L0["t"], set: async (v) => { L0["t"] = v; }, local: true });
        }
      }
      await $.stmt($.wcall([$t1], "next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from GirovImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GirovImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "StdCtrls", "CMDBSearchEdit", "Buttons", "CheckLst", "Evanescence", "ExtCtrls", "ImgList", "NLSLocalizer", "guaranteeImpl", "CommonDecls", "GrovDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmGirov", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "addotherpaperno": {"name": "AddOtherPAPERNO", "type": "TEvanescence"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("FrmGirov", null, "TFrmGirov");
  });
  U.method("TFrmGirov", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "GrovDataMod"));
    const $t2 = (await $.wv([$t1], "AddOtherPAPERNO", C, false));
    { const $t3 = $.sub((await $.mv((await $.wv([$t1, $t2], "Items", C, false)), "Count")), 1);
      await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t1, $t2], "CRackage", C, false)), "CallProcedure", ["add_girov", ["p_numberofgur", (await $.idx((await $.wv([$t1, $t2], "Items", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "p_creditid", (await $.wv([$t1, $t2], "Get_SelectedCrdID", C, false))]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t1, $t2], "GirovDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t1, $t2], "PropDataSet", C, false)), "Refresh", []);
    await $.stmt($.wcall([$t1, $t2], "RefreshList", [], C));
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGirov", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel3")), "Visible", $.not((await $.mv((await $.v(C, "Panel3")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton2")), "Down", (await $.mv((await $.v(C, "Panel3")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGirov", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGirov", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = "and numberofcredit=";
  L0["s"] = (await $.mv((await $.v(C, "CMSearchEdit1")), "text"));
  if ($.truthy($.ne(L0["s"], ""))) {
    {
      const $t5 = (await $.wobj(C, "GrovDataMod"));
      const $t6 = (await $.wv([$t5], "PropDataSet", C, false));
      await $.stmt($.wcall([$t5, $t6], "close", [], C));
      { const $t7 = await $.iset((await $.wv([$t5, $t6], "SQL", C, false)), [10], $.add($.add($.add((await $.wv([$t5, $t6], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "'"), (await $.wv([$t5, $t6], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), "'")); if ($t7 !== undefined) { await $.wset([$t5, $t6], "SQL", $t7, C); } }
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
      await $.mcall((await $.wv([$t5, $t6], "AddOtherPAPERNO", C, false)), "RefreshList", []);
    }
  }
  await $.mset((await $.v(C, "CMSearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGirov", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.wobj(C, "GrovDataMod"));
    const $t9 = (await $.wv([$t8], "PropDataSet", C, false));
    await $.stmt($.wcall([$t8, $t9], "close", [], C));
    { const $t10 = await $.iset((await $.wv([$t8, $t9], "SQL", C, false)), [10], ""); if ($t10 !== undefined) { await $.wset([$t8, $t9], "SQL", $t10, C); } }
    await $.stmt($.wcall([$t8, $t9], "open", [], C));
    await $.mcall((await $.wv([$t8, $t9], "AddOtherPAPERNO", C, false)), "RefreshList", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGirov", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

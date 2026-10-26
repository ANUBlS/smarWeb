// Generated from Frmproperties_creditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Frmproperties_creditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "Oracle", "Db", "Buttons", "Grids", "DBGrids", "ExtCtrls", "ImgList", "ComCtrls", "ToolWin", "CMDBSearchEdit", "NLSLocalizer", "DMprop", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmproperties_credit", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "addotherpaperno": {"name": "AddOtherPAPERNO", "type": "TEvanescence"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}}, {});
  U.init(async () => {
    U.var_("Frmproperties_credit", null, "TFrmproperties_credit");
    U.var_("propid", 0, "integer");
  });
  U.method("TFrmproperties_credit", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmproperties_credit", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmproperties_credit", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmproperties_credit", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "propid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["id"])), "asinteger")));
  if ($.truthy($.eq((await $.v(C, "propid")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Əmlak müqaviləsin düzgün seçin !"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "DMproperties"));
    const $t2 = (await $.wv([$t1], "AddOtherPAPERNO", C, false));
    { const $t3 = $.sub((await $.mv((await $.wv([$t1, $t2], "Items", C, false)), "Count")), 1);
      await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t1, $t2], "OraclePackage2", C, false)), "CallProcedure", ["add_prop_credit", ["p_propid", (await $.wv([$t1, $t2], "propid", C, false)), "p_numberofcredit", (await $.idx((await $.wv([$t1, $t2], "Items", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t1, $t2], "DataSetCredit", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t1, $t2], "DSet_Prop_Kredit", C, false)), "Refresh", []);
    await $.stmt($.wcall([$t1, $t2], "RefreshList", [], C));
    await $.mcall((await $.wv([$t1, $t2], "Frmproperties_credit", C, false)), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmproperties_credit", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel3")), "Visible", $.not((await $.mv((await $.v(C, "Panel3")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton2")), "Down", (await $.mv((await $.v(C, "Panel3")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmproperties_credit", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = "and numberofcredit=";
  L0["s"] = (await $.mv((await $.v(C, "CMSearchEdit1")), "text"));
  if ($.truthy($.ne(L0["s"], ""))) {
    {
      const $t5 = (await $.v(C, "DMproperties"));
      const $t6 = (await $.wv([$t5], "DataSetCredit", C, false));
      await $.stmt($.wcall([$t5, $t6], "close", [], C));
      { const $t7 = await $.iset((await $.wv([$t5, $t6], "SQL", C, false)), [8], $.add($.add($.add((await $.wv([$t5, $t6], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "'"), (await $.wv([$t5, $t6], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), "'")); if ($t7 !== undefined) { await $.wset([$t5, $t6], "SQL", $t7, C); } }
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
      await $.stmt($.wcall([$t5, $t6], "refresh", [], C));
      await $.mcall((await $.wv([$t5, $t6], "AddOtherPAPERNO", C, false)), "RefreshList", []);
    }
  }
  await $.mset((await $.v(C, "CMSearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmproperties_credit", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "DMproperties"));
    const $t9 = (await $.wv([$t8], "DataSetCredit", C, false));
    await $.stmt($.wcall([$t8, $t9], "close", [], C));
    { const $t10 = await $.iset((await $.wv([$t8, $t9], "SQL", C, false)), [8], ""); if ($t10 !== undefined) { await $.wset([$t8, $t9], "SQL", $t10, C); } }
    await $.stmt($.wcall([$t8, $t9], "open", [], C));
    await $.stmt($.wcall([$t8, $t9], "refresh", [], C));
    await $.mcall((await $.wv([$t8, $t9], "AddOtherPAPERNO", C, false)), "RefreshList", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmproperties_credit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DMproperties"));
    const $t12 = (await $.wv([$t11], "DataSetCredit", C, false));
    await $.stmt($.wcall([$t11, $t12], "close", [], C));
    { const $t13 = await $.iset((await $.wv([$t11, $t12], "SQL", C, false)), [8], ""); if ($t13 !== undefined) { await $.wset([$t11, $t12], "SQL", $t13, C); } }
    await $.stmt($.wcall([$t11, $t12], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmproperties_credit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmproperties_credit", "CMSearchEdit1KeyPress", async function CMSearchEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t14 = L0["sender"];
        { const $t15 = (await $.wv([$t14], "Tag", C, false));
          if ($.eq($t15, 1) || $.eq($t15, 3)) {
            await $.stmt((await $.wcall([$t14], "SelectNext", [(await $.wv([$t14], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t14], "True", C, false)), (await $.wv([$t14], "True", C, false))], C)));
          }
        }
        await $.wset([$t14], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

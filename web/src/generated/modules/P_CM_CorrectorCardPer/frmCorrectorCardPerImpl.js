// Generated from frmCorrectorCardPerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCorrectorCardPerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Grids", "DBGridEh", "ImgList", "ToolWin", "DMCorrectorCardPerImpl", "FrmCardTrRestsImpl", "FrmCardInterestsImpl", "CommonDecls", "sbsystem"]);
  const C = [U];
  U.defClass("TfrmCorrectorCardPer", "TForm", {"statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("frmCorrectorCardPer", null, "TfrmCorrectorCardPer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmCorrectorCardPer")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmCorrectorCardPer", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmCorrectorCardPer", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCorrectorCardPer", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMCorrectorCardPer", (await $.mcall((await $.v(C, "TDMCorrectorCardPer")), "Create", [Self])));
  await $.set(C, "FrmCardTrRests", (await $.mcall((await $.v(C, "TFrmCardTrRests")), "Create", [Self])));
  await $.set(C, "FrmCardInterests", (await $.mcall((await $.v(C, "TFrmCardInterests")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCorrectorCardPer", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMCorrectorCardPer")), "Free", []);
  await $.mcall((await $.v(C, "FrmCardTrRests")), "Free", []);
  await $.mcall((await $.v(C, "FrmCardInterests")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCorrectorCardPer", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DMCorrectorCardPer"));
    const $t2 = (await $.wv([$t1], "Rests", C, false));
    await $.wset([$t1, $t2], "TrID", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Tranches", C, false)), "FieldByName", ["ID"])), "ASInteger")), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["TrID", (await $.wv([$t1, $t2], "TrID", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
  }
  await $.mcall((await $.v(C, "FrmCardTrRests")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCorrectorCardPer", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "DMCorrectorCardPer"));
    const $t4 = (await $.wv([$t3], "Tranches", C, false));
    await $.stmt($.wcall([$t3, $t4], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfrmCorrectorCardPer", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "DMCorrectorCardPer"));
    const $t6 = (await $.wv([$t5], "Int", C, false));
    await $.wset([$t5, $t6], "TrID", (await $.mv((await $.mcall((await $.wv([$t5, $t6], "Tranches", C, false)), "FieldByName", ["ID"])), "ASInteger")), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    if ($.truthy((await $.wv([$t5, $t6], "Active", C, false)))) {
      await $.stmt($.wcall([$t5, $t6], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["TrID", (await $.wv([$t5, $t6], "TrID", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
  }
  await $.mcall((await $.v(C, "FrmCardInterests")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCorrectorCardPer", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.wobj(C, "DMCorrectorCardPer"));
    const $t8 = (await $.wv([$t7], "Tranches", C, false));
    if ($.truthy((await $.wv([$t7, $t8], "Active", C, false)))) {
      await $.stmt($.wcall([$t7, $t8], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["CrdID", (await $.wv([$t7, $t8], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t7, $t8], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCorrectorCardPer", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmCorrectorCardPer", (await $.mcall((await $.v(C, "TfrmCorrectorCardPer")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

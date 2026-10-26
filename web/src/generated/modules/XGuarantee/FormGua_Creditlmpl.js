// Generated from FormGua_Creditlmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormGua_Creditlmpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "StdCtrls", "CheckLst", "Evanescence", "CMDBSearchEdit", "Buttons", "ExtCtrls", "ComCtrls", "ToolWin", "DataMGuarantee"]);
  const C = [U];
  U.defClass("TFormGua_Credit", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "addotherpaperno": {"name": "AddOtherPAPERNO", "type": "TEvanescence"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("FormGua_Credit", null, "TFormGua_Credit");
  });
  U.method("TFormGua_Credit", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormGua_Credit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataMGuarante"));
    const $t2 = (await $.wv([$t1], "DataSGuacredit", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [10], ""); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormGua_Credit", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
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

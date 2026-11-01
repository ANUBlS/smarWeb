// Generated from LogoutputImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LogoutputImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ImgList", "StdCtrls", "Menus"]);
  const C = [U];
  U.enumType("tlogmessage", 3);
  U.const("lmWarning", 0);
  U.const("lmError", 1);
  U.const("lmInformation", 2);
  U.defClass("TfrmLogOutput", "TForm", {"logimages": {"name": "LogImages", "type": "TImageList"}, "logmenu": {"name": "LogMenu", "type": "TPopupMenu"}, "loglistbox": {"name": "LogListBox", "type": "TListBox"}, "ddd1": {"name": "ddd1", "type": "TMenuItem"}, "save1": {"name": "save1", "type": "TMenuItem"}, "od1": {"name": "OD1", "type": "TOpenDialog"}, "fwarningbitmap": {"name": "FWarningBitmap", "type": "TBitmap"}, "ferrorbitmap": {"name": "FErrorBitmap", "type": "TBitmap"}, "finformationbitmap": {"name": "FInformationBitmap", "type": "TBitmap"}}, {});
  U.init(async () => {
    U.var_("frmLogOutput", null, "TfrmLogOutput");
  });
  U.method("TfrmLogOutput", "LogListBoxDrawItem", async function LogListBoxDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), "index": $.copyArg(p1), "rect": $.copyArg(p2), "state": $.copyArg(p3), result: undefined, "bitmap": null, "offset": 0};
  await $.fixArgs(L0, ["control", "index", "rect", "state"]);
  {
    const $t1 = (await $.mv((L0["control"]), "Canvas"));
    await $.stmt((await $.wcall([$t1], "FillRect", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
    await $.wset([$t1], "Offset", 2, { get: async () => L0["offset"], set: async (v) => { L0["offset"] = v; }, local: true });
    await $.wset([$t1], "Bitmap", (await $.wcall([$t1], "TBitmap", [(await $.idx((await $.mv((await $.mv(((await $.wv([$t1], "Control", { get: async () => L0["control"], set: async (v) => { L0["control"] = v; }, local: true }, false))), "Items")), "Objects")), [(await $.wv([$t1], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C)), { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), null))) {
      await $.stmt((await $.wcall([$t1], "BrushCopy", [(await $.wcall([$t1], "Bounds", [$.add((await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 2), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.mv((await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), "Width")), (await $.mv((await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), "Height"))], C)), (await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), (await $.wcall([$t1], "Bounds", [0, 0, (await $.mv((await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), "Width")), (await $.mv((await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), "Height"))], C)), (await $.wv([$t1], "clRed", C, false))], C)));
      await $.wset([$t1], "Offset", $.add((await $.mv((await $.wv([$t1], "Bitmap", { get: async () => L0["bitmap"], set: async (v) => { L0["bitmap"] = v; }, local: true }, false)), "width")), 6), { get: async () => L0["offset"], set: async (v) => { L0["offset"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t1], "TextOut", [$.add((await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t1], "Offset", { get: async () => L0["offset"], set: async (v) => { L0["offset"] = v; }, local: true }, false))), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.idx((await $.mv(((await $.wv([$t1], "Control", { get: async () => L0["control"], set: async (v) => { L0["control"] = v; }, local: true }, false))), "Items")), [(await $.wv([$t1], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C)));
  }
  return L0.result;
}, {"params": ["Control", "Index", "Rect", "State"], "kind": "procedure", "ptypes": ["TWinControl", "Integer", "TRect", "TOwnerDrawState"]});
  U.method("TfrmLogOutput", "ddd1Click", async function ddd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LogListBox")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmLogOutput", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FWarningBitmap", (await $.mv((await $.v(C, "TBitmap")), "Create")));
  await $.stmt((await $.mcall((await $.v(C, "LogImages")), "GetBitmap", [0, (await $.v(C, "FWarningBitmap"))])));
  await $.set(C, "FErrorBitmap", (await $.mv((await $.v(C, "TBitmap")), "Create")));
  await $.stmt((await $.mcall((await $.v(C, "LogImages")), "GetBitmap", [1, (await $.v(C, "FErrorBitmap"))])));
  await $.set(C, "FInformationBitmap", (await $.mv((await $.v(C, "TBitmap")), "Create")));
  await $.stmt((await $.mcall((await $.v(C, "LogImages")), "GetBitmap", [2, (await $.v(C, "FInformationBitmap"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmLogOutput", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FWarningBitmap")), "Free", []);
  await $.mcall((await $.v(C, "FErrorBitmap")), "Free", []);
  await $.mcall((await $.v(C, "FInformationBitmap")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmLogOutput", "AddOutput", async function AddOutput(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), "msgtype": $.copyArg(p1), "makevisible": $.copyArg(p2), result: undefined, "message": ''};
  await $.fixArgs(L0, ["outputmsg", "msgtype", "makevisible"]);
  L0["message"] = $.add($.add($.add("*** ", (await $.call(C, "TimeToStr", [(await $.v(C, "Now"))]))), " - "), L0["outputmsg"]);
  {
    const $t2 = (await $.v(C, "LogListBox"));
    const $t3 = (await $.wv([$t2], "Items", C, false));
    { const $t4 = (await $.wv([$t2, $t3], "Msgtype", { get: async () => L0["msgtype"], set: async (v) => { L0["msgtype"] = v; }, local: true }, false));
      if ($.eq($t4, (await $.wv([$t2, $t3], "lmWarning", C, false)))) {
        await $.wset([$t2, $t3], "ItemIndex", (await $.wcall([$t2, $t3], "AddObject", [(await $.wv([$t2, $t3], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "FWarningBitmap", C, false))], C)), C);
      }
      else if ($.eq($t4, (await $.wv([$t2, $t3], "lmError", C, false)))) {
        await $.wset([$t2, $t3], "ItemIndex", (await $.wcall([$t2, $t3], "AddObject", [(await $.wv([$t2, $t3], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "FErrorBitmap", C, false))], C)), C);
      }
      else if ($.eq($t4, (await $.wv([$t2, $t3], "lmInformation", C, false)))) {
        await $.wset([$t2, $t3], "ItemIndex", (await $.wcall([$t2, $t3], "AddObject", [(await $.wv([$t2, $t3], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "FInformationBitmap", C, false))], C)), C);
      }
    }
  }
  if ($.truthy((await $.and_(L0["makevisible"], async () => $.not((await $.v(C, "Visible"))))))) {
    await $.stmt($.call(C, "Show", []));
  }
  return L0.result;
}, {"params": ["OutputMsg", "Msgtype", "MakeVisible"], "kind": "procedure", "ptypes": ["String", "TLogMessage", "Boolean"]});
  U.method("TfrmLogOutput", "LogWarning", async function LogWarning(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["outputmsg"]);
  await $.stmt((await $.call(C, "AddOutput", [L0["outputmsg"], (await $.v(C, "lmWarning")), true])));
  return L0.result;
}, {"params": ["OutputMsg"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmLogOutput", "save1Click", async function save1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OD1")), "Execute", [])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "LogListBox")), "Items")), "SaveToFile", [(await $.mv((await $.v(C, "OD1")), "FileName"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmLogOutput", "LogError", async function LogError(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["outputmsg"]);
  await $.stmt((await $.call(C, "AddOutput", [L0["outputmsg"], (await $.v(C, "lmError")), true])));
  return L0.result;
}, {"params": ["OutputMsg"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmLogOutput", "LogInformation", async function LogInformation(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), "makevisible": (p1 === undefined ? false : p1), result: undefined};
  await $.fixArgs(L0, ["outputmsg", "makevisible"]);
  await $.stmt((await $.call(C, "AddOutput", [L0["outputmsg"], (await $.v(C, "lmInformation")), L0["makevisible"]])));
  return L0.result;
}, {"params": ["OutputMsg", "MakeVisible"], "kind": "procedure", "ptypes": ["String", "Boolean"]});
  return U;
}

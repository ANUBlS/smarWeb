// Generated from PrvFrmEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrvFrmEh", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "PrViewEh", "ComCtrls", "Menus", "ExtCtrls", "ToolWin", "StdCtrls", "EhLibConsts"]);
  const C = [U];
  U.defClass("TPreviewFormEh", "TForm", {"previeweh1": {"name": "PreviewEh1", "type": "TPreviewBox"}, "tbrmain": {"name": "tbrMain", "type": "TToolBar"}, "tbtprint": {"name": "tbtPrint", "type": "TToolButton"}, "tbtprintersetupdialog": {"name": "tbtPrinterSetupDialog", "type": "TToolButton"}, "tbtscale": {"name": "tbtScale", "type": "TToolButton"}, "tbtprevpage": {"name": "tbtPrevPage", "type": "TToolButton"}, "tbtnextpage": {"name": "tbtNextPage", "type": "TToolButton"}, "tbstop": {"name": "tbStop", "type": "TToolButton"}, "tbclose": {"name": "tbClose", "type": "TToolButton"}, "splitter": {"name": "Splitter", "type": "TSplitter"}, "pmnscale": {"name": "pmnScale", "type": "TPopupMenu"}, "mni500": {"name": "mni500", "type": "TMenuItem"}, "mni200": {"name": "mni200", "type": "TMenuItem"}, "mni150": {"name": "mni150", "type": "TMenuItem"}, "mni100": {"name": "mni100", "type": "TMenuItem"}, "mni75": {"name": "mni75", "type": "TMenuItem"}, "mni50": {"name": "mni50", "type": "TMenuItem"}, "mni25": {"name": "mni25", "type": "TMenuItem"}, "mni10": {"name": "mni10", "type": "TMenuItem"}, "mniwidth": {"name": "mniWidth", "type": "TMenuItem"}, "mnifull": {"name": "mniFull", "type": "TMenuItem"}, "imlmain": {"name": "imlMain", "type": "TImageList"}, "stbmain": {"name": "stbMain", "type": "TStatusBar"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "fpressedbutton": {"name": "FPressedButton", "type": "TToolButton"}, "fneedclose": {"name": "FNeedClose", "type": "Boolean"}}, {});
  U.defClass("TToolButtonCracker", "TToolButton", {}, {"mousecapture": {"name": "MouseCapture"}});
  U.init(async () => {
    U.const("InitRepeatPause", 400);
    U.const("RepeatPause", 100);
    U.var_("PreviewFormEh", null, "TPreviewFormEh");
  });
  U.method("TPreviewFormEh", "tbtPrintClick", async function tbtPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PreviewEh1")), "PrintDialog", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbtPrintDialogClick", async function tbtPrintDialogClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PreviewEh1")), "PrintDialog", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbtPrinterSetupDialogClick", async function tbtPrinterSetupDialogClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PreviewEh1")), "PrinterSetupDialog", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbtPrevPageClick", async function tbtPrevPageClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "Timer1")), "Interval")), (await $.v(C, "RepeatPause")))), async () => ($.eq(L0["sender"], null))))))) {
    await $.mset((await $.v(C, "PreviewEh1")), "PageIndex", (await $.call(C, "Pred", [(await $.mv((await $.v(C, "PreviewEh1")), "PageIndex"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbtNextPageClick", async function tbtNextPageClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "Timer1")), "Interval")), (await $.v(C, "RepeatPause")))), async () => ($.eq(L0["sender"], null))))))) {
    await $.mset((await $.v(C, "PreviewEh1")), "PageIndex", (await $.call(C, "Succ", [(await $.mv((await $.v(C, "PreviewEh1")), "PageIndex"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbStopClick", async function tbStopClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Abort", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbCloseClick", async function tbCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "mniScaleClick", async function mniScaleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "Checked", (await $.wv([$t1], "True", C, false)), C);
    await $.mset((await $.wv([$t1], "PreviewEh1", C, false)), "ViewMode", (await $.wcall([$t1], "TViewMode", [(await $.wv([$t1], "Tag", C, false))], C)));
    await $.mcall((await $.wv([$t1], "PreviewEh1", C, false)), "UpdatePageSetup", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Splitter")), "OnCanResize", (await $.ref_(C, "SplitterCanResize")));
  await $.mset((await $.v(C, "Splitter")), "ResizeStyle", (await $.v(C, "rsUpdate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "SplitterCanResize", async function SplitterCanResize(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newsize": $.asRef(p1), "accept": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.ge((await L0["newsize"].get()), $.add(38, 3))), async () => ($.eq((await $.mv((await $.v(C, "tbrMain")), "Images")), null)))), async () => (await $.mv((await $.v(C, "tbrMain")), "ShowCaptions")))))) {
    await $.mset((await $.v(C, "tbrMain")), "ShowCaptions", false);
    await $.mset((await $.v(C, "tbrMain")), "Images", (await $.v(C, "imlMain")));
    await $.mset((await $.v(C, "tbrMain")), "ButtonHeight", 38);
    await $.mset((await $.v(C, "tbrMain")), "ButtonWidth", 39);
  } else {
    if ($.truthy((await $.and_((await $.and_(($.ge((await L0["newsize"].get()), $.add(52, 3))), async () => $.not((await $.mv((await $.v(C, "tbrMain")), "ShowCaptions"))))), async () => ($.ne((await $.mv((await $.v(C, "tbrMain")), "Images")), null)))))) {
      await $.mset((await $.v(C, "tbrMain")), "ShowCaptions", true);
    } else {
      if ($.truthy((await $.and_((await $.and_(($.le((await L0["newsize"].get()), $.add(21, 3))), async () => $.not((await $.mv((await $.v(C, "tbrMain")), "ShowCaptions"))))), async () => ($.ne((await $.mv((await $.v(C, "tbrMain")), "Images")), null)))))) {
        await $.mset((await $.v(C, "tbrMain")), "Images", null);
        await $.mset((await $.v(C, "tbrMain")), "ShowCaptions", true);
      } else {
        if ($.truthy((await $.and_((await $.and_(($.le((await L0["newsize"].get()), $.add(38, 3))), async () => (await $.mv((await $.v(C, "tbrMain")), "ShowCaptions")))), async () => ($.ne((await $.mv((await $.v(C, "tbrMain")), "Images")), null)))))) {
          await $.mset((await $.v(C, "tbrMain")), "ShowCaptions", false);
          await $.mset((await $.v(C, "tbrMain")), "ButtonHeight", 38);
          await $.mset((await $.v(C, "tbrMain")), "ButtonWidth", 39);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "NewSize", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Boolean"]});
  U.method("TPreviewFormEh", "tbtScaleClick", async function tbtScaleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mcall((await $.v(C, "tbtScale")), "ClientToScreen", [(await $.call(C, "Point", [0, (await $.mv((await $.v(C, "tbtScale")), "Height"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "tbtScale")), "DropdownMenu")), "Popup", [(await $.mv(L0["p"], "x")), (await $.mv(L0["p"], "y"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "PreviewEh1PrinterPreviewChanged", async function PreviewEh1PrinterPreviewChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_($.not((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing"))), async () => (await $.v(C, "FNeedClose")))))) {
    await $.set(C, "FNeedClose", false);
    await $.stmt($.call(C, "Close", []));
  }
  await $.mset((await $.v(C, "tbStop")), "Enabled", (await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing")));
  await $.mset((await $.v(C, "tbClose")), "Enabled", $.not((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing"))));
  await $.mset((await $.v(C, "tbtPrint")), "Enabled", (await $.and_($.not((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing"))), async () => ($.gt((await $.mv((await $.mv((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printer")), "Printers")), "Count")), 0)))));
  await $.mset((await $.v(C, "tbtPrinterSetupDialog")), "Enabled", (await $.and_((await $.and_($.not((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing"))), async () => ((await $.or_((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "PreviewEh1")), "OnPrinterSetupDialog"))])), async () => (await $.call(C, "Assigned", [(await $.mv((await $.v(C, "PreviewEh1")), "OnPrinterSetupChanged"))]))))))), async () => (await $.call(C, "Assigned", [(await $.mv((await $.v(C, "PreviewEh1")), "PrinterSetupOwner"))])))));
  await $.mset((await $.v(C, "tbtPrevPage")), "Enabled", $.gt((await $.mv((await $.v(C, "PreviewEh1")), "PageIndex")), 1));
  await $.mset((await $.v(C, "tbtNextPage")), "Enabled", $.lt((await $.mv((await $.v(C, "PreviewEh1")), "PageIndex")), (await $.mv((await $.v(C, "PreviewEh1")), "PageCount"))));
  await $.mset((await $.v(C, "stbMain")), "SimpleText", (await $.call(C, "Format", [(await $.v(C, "SPageOfPagesEh")), [(await $.mv((await $.v(C, "PreviewEh1")), "PageIndex")), (await $.mv((await $.v(C, "PreviewEh1")), "PageCount"))]])));
  { const $t2 = (await $.mv((await $.v(C, "PreviewEh1")), "ViewMode"));
    if ($.eq($t2, (await $.v(C, "vm500")))) {
      await $.mset((await $.v(C, "mni500")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm200")))) {
      await $.mset((await $.v(C, "mni200")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm150")))) {
      await $.mset((await $.v(C, "mni150")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm100")))) {
      await $.mset((await $.v(C, "mni100")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm75")))) {
      await $.mset((await $.v(C, "mni75")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm50")))) {
      await $.mset((await $.v(C, "mni50")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm25")))) {
      await $.mset((await $.v(C, "mni25")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vm10")))) {
      await $.mset((await $.v(C, "mni10")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vmPageWidth")))) {
      await $.mset((await $.v(C, "mniWidth")), "Checked", true);
    }
    else if ($.eq($t2, (await $.v(C, "vmFullPage")))) {
      await $.mset((await $.v(C, "mniFull")), "Checked", true);
    }
  }
  await $.set(C, "Caption", $.add($.add((await $.v(C, "SPreviewEh")), " - "), (await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Title"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "PreviewEh1OpenPreviewer", async function PreviewEh1OpenPreviewer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "IsIconic", [(await $.v(C, "Handle"))])))) {
    await $.stmt((await $.call(C, "ShowWindow", [(await $.v(C, "Handle")), (await $.v(C, "sw_Restore"))])));
  }
  await $.stmt((await $.call(C, "BringWindowToTop", [(await $.v(C, "Handle"))])));
  if ($.truthy($.not((await $.v(C, "Visible"))))) {
    await $.stmt($.call(C, "Show", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Timer1")), "Interval", (await $.v(C, "RepeatPause")));
  if ($.truthy($.ne((await $.v(C, "FPressedButton")), null))) {
    if ($.truthy((await $.mv((await $.call(C, "TToolButtonCracker", [(await $.v(C, "FPressedButton"))])), "MouseCapture")))) {
      try {
        await $.stmt((await $.mcall((await $.v(C, "FPressedButton")), "OnClick", [null])));
      } catch ($t3) {
        $.rethrowControl($t3);
        $.handled($t3);
        await $.mset((await $.v(C, "Timer1")), "Enabled", false);
        throw $t3;
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPreviewFormEh", "tbtNextPageMouseDown", async function tbtNextPageMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.mset((await $.v(C, "Timer1")), "Interval", (await $.v(C, "InitRepeatPause")));
  await $.mset((await $.v(C, "Timer1")), "Enabled", true);
  await $.set(C, "FPressedButton", (await $.v(C, "tbtNextPage")));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPreviewFormEh", "tbtNextPageMouseUp", async function tbtNextPageMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.mset((await $.v(C, "Timer1")), "Enabled", false);
  await $.set(C, "FPressedButton", null);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPreviewFormEh", "tbtPrevPageMouseDown", async function tbtPrevPageMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.mset((await $.v(C, "Timer1")), "Interval", (await $.v(C, "InitRepeatPause")));
  await $.mset((await $.v(C, "Timer1")), "Enabled", true);
  await $.set(C, "FPressedButton", (await $.v(C, "tbtPrevPage")));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPreviewFormEh", "tbtPrevPageMouseUp", async function tbtPrevPageMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.mset((await $.v(C, "Timer1")), "Enabled", false);
  await $.set(C, "FPressedButton", null);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPreviewFormEh", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    if ($.truthy((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing")))) {
      await $.mcall((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Abort", []);
    } else {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPreviewFormEh", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Printing")))) {
    await $.mcall((await $.mv((await $.v(C, "PreviewEh1")), "Printer")), "Abort", []);
    await $.set(C, "FNeedClose", true);
    await L0["action"].set((await $.v(C, "caNone")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

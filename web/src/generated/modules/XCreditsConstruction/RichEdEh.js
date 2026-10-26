// Generated from RichEdEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RichEdEh", ["SysUtils", "Windows", "Messages", "Classes", "Graphics", "Controls", "ImgList", "DsgnIntf", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Menus", "ComCtrls", "ClipBrd", "ToolWin", "PrnDBGEh", "RichEdit", "ShellAPI"]);
  const C = [U];
  U.defClass("TRichStrEditDlgEh", "TForm", {"mainmenu": {"name": "MainMenu", "type": "TMainMenu"}, "filenewitem": {"name": "FileNewItem", "type": "TMenuItem"}, "fileopenitem": {"name": "FileOpenItem", "type": "TMenuItem"}, "filesaveitem": {"name": "FileSaveItem", "type": "TMenuItem"}, "filesaveasitem": {"name": "FileSaveAsItem", "type": "TMenuItem"}, "fileprintitem": {"name": "FilePrintItem", "type": "TMenuItem"}, "fileexititem": {"name": "FileExitItem", "type": "TMenuItem"}, "editundoitem": {"name": "EditUndoItem", "type": "TMenuItem"}, "editcutitem": {"name": "EditCutItem", "type": "TMenuItem"}, "editcopyitem": {"name": "EditCopyItem", "type": "TMenuItem"}, "editpasteitem": {"name": "EditPasteItem", "type": "TMenuItem"}, "opendialog": {"name": "OpenDialog", "type": "TOpenDialog"}, "savedialog": {"name": "SaveDialog", "type": "TSaveDialog"}, "printdialog": {"name": "PrintDialog", "type": "TPrintDialog"}, "ruler": {"name": "Ruler", "type": "TPanel"}, "fontdialog1": {"name": "FontDialog1", "type": "TFontDialog"}, "firstind": {"name": "FirstInd", "type": "TLabel"}, "leftind": {"name": "LeftInd", "type": "TLabel"}, "rulerline": {"name": "RulerLine", "type": "TBevel"}, "rightind": {"name": "RightInd", "type": "TLabel"}, "n5": {"name": "N5", "type": "TMenuItem"}, "mieditfont": {"name": "miEditFont", "type": "TMenuItem"}, "editor": {"name": "Editor", "type": "TRichEdit"}, "statusbar": {"name": "StatusBar", "type": "TStatusBar"}, "standardtoolbar": {"name": "StandardToolBar", "type": "TToolBar"}, "openbutton": {"name": "OpenButton", "type": "TToolButton"}, "savebutton": {"name": "SaveButton", "type": "TToolButton"}, "printbutton": {"name": "PrintButton", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "undobutton": {"name": "UndoButton", "type": "TToolButton"}, "cutbutton": {"name": "CutButton", "type": "TToolButton"}, "copybutton": {"name": "CopyButton", "type": "TToolButton"}, "pastebutton": {"name": "PasteButton", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "fontname": {"name": "FontName", "type": "TComboBox"}, "fontsize": {"name": "FontSize", "type": "TEdit"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "updown1": {"name": "UpDown1", "type": "TUpDown"}, "boldbutton": {"name": "BoldButton", "type": "TToolButton"}, "italicbutton": {"name": "ItalicButton", "type": "TToolButton"}, "underlinebutton": {"name": "UnderlineButton", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "leftalign": {"name": "LeftAlign", "type": "TToolButton"}, "centeralign": {"name": "CenterAlign", "type": "TToolButton"}, "rightalign": {"name": "RightAlign", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "bulletsbutton": {"name": "BulletsButton", "type": "TToolButton"}, "toolbarimages": {"name": "ToolbarImages", "type": "TImageList"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "okbutton": {"name": "OKButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "tbselectfont": {"name": "tbSelectFont", "type": "TToolButton"}, "ffilename": {"name": "FFileName", "type": "String"}, "fupdating": {"name": "FUpdating", "type": "Boolean"}, "fdragofs": {"name": "FDragOfs", "type": "Integer"}, "fdragging": {"name": "FDragging", "type": "Boolean"}}, {});
  U.defClass("TRichEditStringsEh", "TClassProperty", {}, {});
  U.init(async () => {
    U.const("sOverWrite", "OK to overwrite %s");
    U.const("sModified", "Modified");
    U.const("sColRowInfo", "Line: %3d   Col: %3d");
    U.const("RulerAdj", $.fdiv(4, 3));
    U.const("GutterWid", 6);
    U.var_("RichStrEditDlgEh", null, "TRichStrEditDlgEh");
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterPropertyEditor", [(await $.call(C, "TypeInfo", [(await $.v(C, "TStrings"))])), (await $.v(C, "TPrintDBGridEh")), "BeforeGridText", (await $.v(C, "TRichEditStringsEh"))])));
  await $.stmt((await $.call(C, "RegisterPropertyEditor", [(await $.call(C, "TypeInfo", [(await $.v(C, "TStrings"))])), (await $.v(C, "TPrintDBGridEh")), "AfterGridText", (await $.v(C, "TRichEditStringsEh"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichStrEditDlgEh", "SelectionChange", async function SelectionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "Editor")), "Paragraph"));
    try {
      await $.wset([$t1], "FUpdating", (await $.wv([$t1], "True", C, false)), C);
      await $.mset((await $.wv([$t1], "FirstInd", C, false)), "Left", $.add($.sub((await $.wcall([$t1], "Trunc", [$.mul((await $.wv([$t1], "FirstIndent", C, false)), (await $.wv([$t1], "RulerAdj", C, false)))], C)), 4), (await $.wv([$t1], "GutterWid", C, false))));
      await $.mset((await $.wv([$t1], "LeftInd", C, false)), "Left", $.add($.sub((await $.wcall([$t1], "Trunc", [$.mul(($.add((await $.wv([$t1], "LeftIndent", C, false)), (await $.wv([$t1], "FirstIndent", C, false)))), (await $.wv([$t1], "RulerAdj", C, false)))], C)), 4), (await $.wv([$t1], "GutterWid", C, false))));
      await $.mset((await $.wv([$t1], "RightInd", C, false)), "Left", $.sub($.sub((await $.mv((await $.wv([$t1], "Ruler", C, false)), "ClientWidth")), 6), (await $.wcall([$t1], "Trunc", [$.mul(($.add((await $.wv([$t1], "RightIndent", C, false)), (await $.wv([$t1], "GutterWid", C, false)))), (await $.wv([$t1], "RulerAdj", C, false)))], C))));
      await $.mset((await $.wv([$t1], "BoldButton", C, false)), "Down", $.in_((await $.wv([$t1], "fsBold", C, false)), (await $.mv((await $.mv((await $.wv([$t1], "Editor", C, false)), "SelAttributes")), "Style"))));
      await $.mset((await $.wv([$t1], "ItalicButton", C, false)), "Down", $.in_((await $.wv([$t1], "fsItalic", C, false)), (await $.mv((await $.mv((await $.wv([$t1], "Editor", C, false)), "SelAttributes")), "Style"))));
      await $.mset((await $.wv([$t1], "UnderlineButton", C, false)), "Down", $.in_((await $.wv([$t1], "fsUnderline", C, false)), (await $.mv((await $.mv((await $.wv([$t1], "Editor", C, false)), "SelAttributes")), "Style"))));
      await $.mset((await $.wv([$t1], "BulletsButton", C, false)), "Down", (await $.wcall([$t1], "Boolean", [(await $.wv([$t1], "Numbering", C, false))], C)));
      await $.mset((await $.wv([$t1], "FontSize", C, false)), "Text", (await $.wcall([$t1], "IntToStr", [(await $.mv((await $.mv((await $.wv([$t1], "Editor", C, false)), "SelAttributes")), "Size"))], C)));
      await $.mset((await $.wv([$t1], "FontName", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t1], "Editor", C, false)), "SelAttributes")), "Name")));
      { const $t2 = (await $.wcall([$t1], "Ord", [(await $.wv([$t1], "Alignment", C, false))], C));
        if ($.eq($t2, 0)) {
          await $.mset((await $.wv([$t1], "LeftAlign", C, false)), "Down", (await $.wv([$t1], "True", C, false)));
        }
        else if ($.eq($t2, 1)) {
          await $.mset((await $.wv([$t1], "RightAlign", C, false)), "Down", (await $.wv([$t1], "True", C, false)));
        }
        else if ($.eq($t2, 2)) {
          await $.mset((await $.wv([$t1], "CenterAlign", C, false)), "Down", (await $.wv([$t1], "True", C, false)));
        }
      }
      await $.stmt($.wcall([$t1], "UpdateCursorPos", [], C));
    } finally {
      await $.wset([$t1], "FUpdating", (await $.wv([$t1], "False", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "CurrText", async function CurrText(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Editor")), "SelAttributes"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("EnumFontsProc", async function EnumFontsProc(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"logfont": $.asRef(p0), "textmetric": $.asRef(p1), "fonttype": $.copyArg(p2), "data": $.copyArg(p3), result: 0};
  await $.fixArgs(L0, ["fonttype", "data"]);
  await $.stmt((await $.mcall((await $.call(C, "TStrings", [L0["data"]])), "Add", [(await $.mv((await L0["logfont"].get()), "lfFaceName"))])));
  L0["result"] = 1;
  return L0.result;
}, {"params": ["LogFont", "TextMetric", "FontType", "Data"], "kind": "function", "ptypes": ["TLogFont", "TTextMetric", "Integer", "Pointer"]});
  U.method("TRichStrEditDlgEh", "GetFontNames", async function GetFontNames(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dc": null};
  L0["dc"] = (await $.call(C, "GetDC", [0]));
  try {
    await $.stmt((await $.call(C, "EnumFonts", [L0["dc"], null, (await $.ref_(C, "EnumFontsProc")), (await $.call(C, "Pointer", [(await $.mv((await $.v(C, "FontName")), "Items"))]))])));
  } finally {
    await $.stmt((await $.call(C, "ReleaseDC", [0, L0["dc"]])));
  }
  await $.mset((await $.v(C, "FontName")), "Sorted", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichStrEditDlgEh", "SetupRuler", async function SetupRuler(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "s": ''};
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["s"], async ($t3) => { L0["s"] = $t3; }), 201])));
  L0["i"] = 1;
  while ($.truthy($.lt(L0["i"], 200))) {
    { const $t4 = await $.iset(L0["s"], [L0["i"]], "\t"); if ($t4 !== undefined) { L0["s"] = $t4; } }
    { const $t5 = await $.iset(L0["s"], [$.add(L0["i"], 1)], "|"); if ($t5 !== undefined) { L0["s"] = $t5; } }
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t6) => { L0["i"] = $t6; }), 2])));
    await $.tick();
  }
  await $.mset((await $.v(C, "Ruler")), "Caption", L0["s"]);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichStrEditDlgEh", "SetEditRect", async function SetEditRect(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "r": null};
  {
    const $t7 = (await $.v(C, "Editor"));
    await $.wset([$t7], "R", (await $.wcall([$t7], "Rect", [(await $.wv([$t7], "GutterWid", C, false)), 0, $.sub((await $.wv([$t7], "ClientWidth", C, false)), (await $.wv([$t7], "GutterWid", C, false))), (await $.wv([$t7], "ClientHeight", C, false))], C)), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
    await $.stmt((await $.wcall([$t7], "SendMessage", [(await $.wv([$t7], "Handle", C, false)), (await $.wv([$t7], "EM_SETRECT", C, false)), 0, (await $.wcall([$t7], "Longint", [(await $.wv([$t7], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, true))], C))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichStrEditDlgEh", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "GetFontNames", []));
  await $.stmt($.call(C, "SetupRuler", []));
  await $.stmt((await $.call(C, "SelectionChange", [Self])));
  await $.mset((await $.v(C, "CurrText")), "Name", (await $.mv((await $.v(C, "DefFontData")), "Name")));
  await $.mset((await $.v(C, "CurrText")), "Size", (-((await $.call(C, "MulDiv", [(await $.mv((await $.v(C, "DefFontData")), "Height")), 72, (await $.mv((await $.v(C, "Screen")), "PixelsPerInch"))])))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "ShowHint", async function ShowHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "Application")), "Hint"))])), 0))) {
    await $.mset((await $.v(C, "StatusBar")), "SimplePanel", true);
    await $.mset((await $.v(C, "StatusBar")), "SimpleText", (await $.mv((await $.v(C, "Application")), "Hint")));
  } else {
    await $.mset((await $.v(C, "StatusBar")), "SimplePanel", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "PerformFileOpen", async function PerformFileOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["afilename"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Editor")), "Lines")), "LoadFromFile", [L0["afilename"]])));
  await $.mcall((await $.v(C, "Editor")), "SetFocus", []);
  await $.mset((await $.v(C, "Editor")), "Modified", false);
  await $.stmt((await $.call(C, "SetModified", [false])));
  return L0.result;
}, {"params": ["AFileName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TRichStrEditDlgEh", "FileOpen", async function FileOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "OpenDialog")), "Execute")))) {
    await $.stmt((await $.call(C, "PerformFileOpen", [(await $.mv((await $.v(C, "OpenDialog")), "FileName"))])));
    await $.mset((await $.v(C, "Editor")), "ReadOnly", $.in_((await $.v(C, "ofReadOnly")), (await $.mv((await $.v(C, "OpenDialog")), "Options"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FileSave", async function FileSave(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FileSaveAs", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FileSaveAs", async function FileSaveAs(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "SaveDialog")), "Execute")))) {
    if ($.truthy($.not(($.eq((await $.call(C, "AnsiUpperCase", [(await $.call(C, "Copy", [(await $.mv((await $.v(C, "SaveDialog")), "FileName")), $.sub((await $.call(C, "Length", [(await $.mv((await $.v(C, "SaveDialog")), "FileName"))])), 3), 4]))])), ".RTF"))))) {
      await $.mset((await $.v(C, "SaveDialog")), "FileName", $.add((await $.mv((await $.v(C, "SaveDialog")), "FileName")), ".rtf"));
    }
    if ($.truthy((await $.call(C, "FileExists", [(await $.mv((await $.v(C, "SaveDialog")), "FileName"))])))) {
      if ($.truthy($.ne((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [(await $.v(C, "sOverWrite")), [(await $.mv((await $.v(C, "SaveDialog")), "FileName"))]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "idYes"))))) {
        return L0.result;
      }
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Editor")), "Lines")), "SaveToFile", [(await $.mv((await $.v(C, "SaveDialog")), "FileName"))])));
    await $.mset((await $.v(C, "Editor")), "Modified", false);
    await $.stmt((await $.call(C, "SetModified", [false])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FilePrint", async function FilePrint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "PrintDialog")), "Execute")))) {
    await $.stmt((await $.mcall((await $.v(C, "Editor")), "Print", [(await $.v(C, "FFileName"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FileExit", async function FileExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "EditUndo", async function EditUndo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "Editor"));
    if ($.truthy((await $.wv([$t8], "HandleAllocated", C, false)))) {
      await $.stmt((await $.wcall([$t8], "SendMessage", [(await $.wv([$t8], "Handle", C, false)), (await $.wv([$t8], "EM_UNDO", C, false)), 0, 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "EditCut", async function EditCut(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Editor")), "CutToClipboard", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "EditCopy", async function EditCopy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Editor")), "CopyToClipboard", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "EditPaste", async function EditPaste(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Editor")), "PasteFromClipboard", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "SelectFont", async function SelectFont(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FontDialog1")), "Font")), "Assign", [(await $.mv((await $.v(C, "Editor")), "SelAttributes"))])));
  if ($.truthy((await $.mv((await $.v(C, "FontDialog1")), "Execute")))) {
    await $.stmt((await $.mcall((await $.v(C, "CurrText")), "Assign", [(await $.mv((await $.v(C, "FontDialog1")), "Font"))])));
  }
  await $.stmt((await $.call(C, "SelectionChange", [Self])));
  await $.mcall((await $.v(C, "Editor")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "RulerResize", async function RulerResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RulerLine")), "Width", $.sub((await $.mv((await $.v(C, "Ruler")), "ClientWidth")), ($.mul((await $.mv((await $.v(C, "RulerLine")), "Left")), 2))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FormResize", async function FormResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetEditRect", []));
  await $.stmt((await $.call(C, "SelectionChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetEditRect", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "BoldButtonClick", async function BoldButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "BoldButton")), "Down")))) {
    await $.mset((await $.v(C, "CurrText")), "Style", $.add((await $.mv((await $.v(C, "CurrText")), "Style")), [(await $.v(C, "fsBold"))]));
  } else {
    await $.mset((await $.v(C, "CurrText")), "Style", $.sub((await $.mv((await $.v(C, "CurrText")), "Style")), [(await $.v(C, "fsBold"))]));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "ItalicButtonClick", async function ItalicButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "ItalicButton")), "Down")))) {
    await $.mset((await $.v(C, "CurrText")), "Style", $.add((await $.mv((await $.v(C, "CurrText")), "Style")), [(await $.v(C, "fsItalic"))]));
  } else {
    await $.mset((await $.v(C, "CurrText")), "Style", $.sub((await $.mv((await $.v(C, "CurrText")), "Style")), [(await $.v(C, "fsItalic"))]));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FontSizeChange", async function FontSizeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "CurrText")), "Size", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "FontSize")), "Text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "AlignButtonClick", async function AlignButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "Editor")), "Paragraph")), "Alignment", (await $.call(C, "TAlignment", [(await $.mv((await $.call(C, "TControl", [L0["sender"]])), "Tag"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "FontNameChange", async function FontNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "CurrText")), "Name", (await $.idx((await $.mv((await $.v(C, "FontName")), "Items")), [(await $.mv((await $.v(C, "FontName")), "ItemIndex"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "UnderlineButtonClick", async function UnderlineButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "UnderlineButton")), "Down")))) {
    await $.mset((await $.v(C, "CurrText")), "Style", $.add((await $.mv((await $.v(C, "CurrText")), "Style")), [(await $.v(C, "fsUnderline"))]));
  } else {
    await $.mset((await $.v(C, "CurrText")), "Style", $.sub((await $.mv((await $.v(C, "CurrText")), "Style")), [(await $.v(C, "fsUnderline"))]));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "BulletsButtonClick", async function BulletsButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FUpdating")))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "Editor")), "Paragraph")), "Numbering", (await $.call(C, "TNumberingStyle", [(await $.mv((await $.v(C, "BulletsButton")), "Down"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "RulerItemMouseDown", async function RulerItemMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.set(C, "FDragOfs", ($.idiv((await $.mv((await $.call(C, "TLabel", [L0["sender"]])), "Width")), 2)));
  await $.mset((await $.call(C, "TLabel", [L0["sender"]])), "Left", $.sub($.add((await $.mv((await $.call(C, "TLabel", [L0["sender"]])), "Left")), L0["x"]), (await $.v(C, "FDragOfs"))));
  await $.set(C, "FDragging", true);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TRichStrEditDlgEh", "RulerItemMouseMove", async function RulerItemMouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  if ($.truthy((await $.v(C, "FDragging")))) {
    await $.mset((await $.call(C, "TLabel", [L0["sender"]])), "Left", $.sub($.add((await $.mv((await $.call(C, "TLabel", [L0["sender"]])), "Left")), L0["x"]), (await $.v(C, "FDragOfs"))));
  }
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TRichStrEditDlgEh", "FirstIndMouseUp", async function FirstIndMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.set(C, "FDragging", false);
  await $.mset((await $.mv((await $.v(C, "Editor")), "Paragraph")), "FirstIndent", (await $.call(C, "Trunc", [$.fdiv(($.sub($.add((await $.mv((await $.v(C, "FirstInd")), "Left")), (await $.v(C, "FDragOfs"))), (await $.v(C, "GutterWid")))), (await $.v(C, "RulerAdj")))])));
  await $.stmt((await $.call(C, "LeftIndMouseUp", [L0["sender"], L0["button"], L0["shift"], L0["x"], L0["y"]])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TRichStrEditDlgEh", "LeftIndMouseUp", async function LeftIndMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.set(C, "FDragging", false);
  await $.mset((await $.mv((await $.v(C, "Editor")), "Paragraph")), "LeftIndent", $.sub((await $.call(C, "Trunc", [$.fdiv(($.sub($.add((await $.mv((await $.v(C, "LeftInd")), "Left")), (await $.v(C, "FDragOfs"))), (await $.v(C, "GutterWid")))), (await $.v(C, "RulerAdj")))])), (await $.mv((await $.mv((await $.v(C, "Editor")), "Paragraph")), "FirstIndent"))));
  await $.stmt((await $.call(C, "SelectionChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TRichStrEditDlgEh", "RightIndMouseUp", async function RightIndMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.set(C, "FDragging", false);
  await $.mset((await $.mv((await $.v(C, "Editor")), "Paragraph")), "RightIndent", $.sub((await $.call(C, "Trunc", [$.fdiv(($.sub($.add($.sub((await $.mv((await $.v(C, "Ruler")), "ClientWidth")), (await $.mv((await $.v(C, "RightInd")), "Left"))), (await $.v(C, "FDragOfs"))), 2)), (await $.v(C, "RulerAdj")))])), $.mul(2, (await $.v(C, "GutterWid")))));
  await $.stmt((await $.call(C, "SelectionChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TRichStrEditDlgEh", "UpdateCursorPos", async function UpdateCursorPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "charpos": null};
  await $.mset(L0["charpos"], "Y", (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "Editor")), "Handle")), (await $.v(C, "EM_EXLINEFROMCHAR")), 0, (await $.mv((await $.v(C, "Editor")), "SelStart"))])));
  await $.mset(L0["charpos"], "X", ($.sub((await $.mv((await $.v(C, "Editor")), "SelStart")), (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "Editor")), "Handle")), (await $.v(C, "EM_LINEINDEX")), (await $.mv(L0["charpos"], "Y")), 0])))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["charpos"], "Y")), async ($t9) => { await $.mset(L0["charpos"], "Y", $t9); })])));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["charpos"], "X")), async ($t10) => { await $.mset(L0["charpos"], "X", $t10); })])));
  await $.mset((await $.idx((await $.mv((await $.v(C, "StatusBar")), "Panels")), [0])), "Text", (await $.call(C, "Format", [(await $.v(C, "sColRowInfo")), [(await $.mv(L0["charpos"], "Y")), (await $.mv(L0["charpos"], "X"))]])));
  await $.mset((await $.v(C, "CopyButton")), "Enabled", $.gt((await $.mv((await $.v(C, "Editor")), "SelLength")), 0));
  await $.mset((await $.v(C, "EditCopyItem")), "Enabled", (await $.mv((await $.v(C, "CopyButton")), "Enabled")));
  await $.mset((await $.v(C, "CutButton")), "Enabled", (await $.mv((await $.v(C, "CopyButton")), "Enabled")));
  await $.mset((await $.v(C, "EditCutItem")), "Enabled", (await $.mv((await $.v(C, "CopyButton")), "Enabled")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichStrEditDlgEh", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "UpdateCursorPos", []));
  await $.stmt((await $.call(C, "DragAcceptFiles", [(await $.v(C, "Handle")), true])));
  await $.stmt((await $.call(C, "RichEditChange", [null])));
  await $.mcall((await $.v(C, "Editor")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "WMDropFiles", async function WMDropFiles(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined, "cfilename": $.sarr()};
  try {
    if ($.truthy($.gt((await $.call(C, "DragQueryFile", [(await $.mv((await L0["msg"].get()), "Drop")), 0, L0["cfilename"], (await $.v(C, "MAX_PATH"))])), 0))) {
      await $.stmt((await $.call(C, "PerformFileOpen", [L0["cfilename"]])));
      await $.mset((await L0["msg"].get()), "Result", 0);
    }
  } finally {
    await $.stmt((await $.call(C, "DragFinish", [(await $.mv((await L0["msg"].get()), "Drop"))])));
  }
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMDropFiles"]});
  U.method("TRichStrEditDlgEh", "RichEditChange", async function RichEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SetModified", [(await $.mv((await $.v(C, "Editor")), "Modified"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRichStrEditDlgEh", "SetModified", async function SetModified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(L0["value"])) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "StatusBar")), "Panels")), [1])), "Text", (await $.v(C, "sModified")));
  } else {
    await $.mset((await $.idx((await $.mv((await $.v(C, "StatusBar")), "Panels")), [1])), "Text", "");
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TRichEditStringsEh", "Edit", async function Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "stream": null};
  {
    const $t11 = (await $.mcall((await $.v(C, "TRichStrEditDlgEh")), "Create", [(await $.v(C, "Application"))]));
    try {
      await $.wset([$t11], "Stream", (await $.mcall((await $.wv([$t11], "TStringStream", C, false)), "Create", [""])), { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wcall([$t11], "TStrings", [(await $.wv([$t11], "GetOrdValue", C, false))], C)), "SaveToStream", [(await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false)), "Position", 0);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t11], "Editor", C, false)), "Lines")), "LoadFromStream", [(await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))])));
      { const $t12 = (await $.wv([$t11], "ShowModal", C, false));
        if ($.eq($t12, (await $.wv([$t11], "mrOk", C, false)))) {
          await $.mset((await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false)), "Position", 0);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t11], "Editor", C, false)), "Lines")), "SaveToStream", [(await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))])));
          await $.mset((await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false)), "Position", 0);
          await $.stmt((await $.mcall((await $.wcall([$t11], "TStrings", [(await $.wv([$t11], "GetOrdValue", C, false))], C)), "LoadFromStream", [(await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))])));
          await $.stmt($.wcall([$t11], "Modified", [], C));
        }
      }
      await $.mcall((await $.wv([$t11], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false)), "Free", []);
    } finally {
      await $.stmt($.wcall([$t11], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichEditStringsEh", "GetAttributes", async function GetAttributes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = $.sub($.add((await $.inherited(Self, "TRichEditStringsEh", "GetAttributes", null, arguments)), [(await $.v(C, "paDialog"))]), [(await $.v(C, "paSubProperties"))]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRichStrEditDlgEh", "EditorKeyDown", async function EditorKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}

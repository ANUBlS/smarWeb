// Generated from Ferdi_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Ferdi_Unit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "OleServer", "WordXP", "ComObj", "Data_Unit"]);
  const C = [U];
  U.defClass("TForm1", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Form1", null, "TForm1");
    U.var_("openDialog", null, "TOpenDialog");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "Form1")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TForm1", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "word": null, "pagebreak": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["word"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
  await $.mcall((await $.mv(L0["word"], "WordBasic")), "FileNew", []);
  await $.stmt((await $.mcall((await $.mv(L0["word"], "WordBasic")), "Insert", ["page1"])));
  L0["pagebreak"] = 1;
  await $.stmt((await $.mcall((await $.mv(L0["word"], "Selection")), "InsertBreak", [L0["pagebreak"]])));
  await $.stmt((await $.mcall((await $.mv(L0["word"], "WordBasic")), "Insert", ["page2"])));
  await $.mset(L0["word"], "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm1", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Memo1")), "Clear", []);
  await $.mcall((await $.v(C, "Memo2")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm1", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "word": null, "pagebreak": 0, "wordapp": null, "range": null, "i": 0, "selection": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "openDialog1")), "Filter", "Word files only|*.doc");
  if ($.truthy((await $.mv((await $.v(C, "OpenDialog1")), "Execute")))) {
    L0["wordapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
    await $.mset(L0["wordapp"], "Visible", false);
    await $.stmt((await $.mcall((await $.mv(L0["wordapp"], "documents")), "open", [(await $.mv((await $.v(C, "OpenDialog1")), "FileName"))])));
    await $.stmt((await $.mcall((await $.mv(L0["word"], "WordBasic")), "Insert", ["page1"])));
    L0["pagebreak"] = 1;
    await $.stmt((await $.mcall((await $.mv(L0["word"], "Selection")), "InsertBreak", [L0["pagebreak"]])));
    await $.stmt((await $.mcall((await $.mv(L0["word"], "WordBasic")), "Insert", ["page2"])));
    L0["range"] = (await $.mv((await $.mcall((await $.mv(L0["wordapp"], "Documents")), "Item", [1])), "Range"));
    await $.mcall((await $.mcall((await $.mv(L0["wordapp"], "documents")), "item", [1])), "select", []);
    await $.mcall((await $.mv(L0["wordapp"], "selection")), "copy", []);
    await $.mcall((await $.mv((await $.v(C, "Memo1")), "lines")), "clear", []);
    await $.mcall((await $.v(C, "Memo1")), "pastefromclipboard", []);
    await $.mcall((await $.mcall((await $.mv(L0["wordapp"], "documents")), "item", [1])), "Close", []);
    await $.mcall(L0["wordapp"], "Quit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Form1", (await $.mcall((await $.v(C, "TForm1")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

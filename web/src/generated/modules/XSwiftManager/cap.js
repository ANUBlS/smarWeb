// Generated from cap.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cap", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "QuickRpt", "QRCtrls", "ExtCtrls", "qrp1", "OleCtrls", "SHDocVw", "SWIFT_MAINImpl1"]);
  const C = [U];
  U.defClass("TPrintform", "TForm", {"prt": {"name": "prt", "type": "TRichEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "buttonprint": {"name": "ButtonPrint", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "webbrowser1": {"name": "WebBrowser1", "type": "TWebBrowser"}}, {});
  U.init(async () => {
    U.var_("Printform", null, "TPrintform");
  });
  U.method("TPrintform", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Printform")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrintform", "ButtonPrintClick", async function ButtonPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vain": null, "vaout": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "prt")), "Text")), 1, 1])), "<"))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WebBrowser1")), "ControlInterface")), "ExecWB", [(await $.v(C, "OLECMDID_PRINT")), (await $.v(C, "OLECMDEXECOPT_PROMPTUSER")), L0["vain"], L0["vaout"]])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "prt")), "Print", ["A.Z.I.P.S"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrintform", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "doc": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "webBrowser1")), "Document"))]))))) {
    await $.stmt((await $.mcall((await $.v(C, "webBrowser1")), "Navigate", ["about:blank"])));
  }
  if ($.truthy($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "prt")), "Text")), 1, 1])), "<"))) {
    await $.mset((await $.v(C, "prt")), "Visible", false);
    L0["doc"] = (await $.mv((await $.v(C, "webBrowser1")), "Document"));
    await $.mcall(L0["doc"], "Clear", []);
    await $.stmt((await $.mcall(L0["doc"], "Write", [(await $.mv((await $.v(C, "prt")), "Text"))])));
    await $.mcall(L0["doc"], "Close", []);
  } else {
    await $.mset((await $.v(C, "webBrowser1")), "Visible", false);
    await $.mset((await $.v(C, "prt")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrintform", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Printform")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

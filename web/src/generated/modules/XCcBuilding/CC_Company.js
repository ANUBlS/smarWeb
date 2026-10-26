// Generated from CC_Company.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Company", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "Buttons", "ExtCtrls", "NLSLocalizer", "CC_Datamodule"]);
  const C = [U];
  U.defClass("TCC_Add_Company", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "button1": {"name": "Button1", "type": "TButton"}, "editcompany": {"name": "EditCompany", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("CC_Add_Company", null, "TCC_Add_Company");
  });
  U.method("TCC_Add_Company", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_Add_Company", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_Add_Company", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesabın Əməliyyatları";
  await $.inherited(Self, "TCC_Add_Company", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_Add_Company", "EditCompanyKeyPress", async function EditCompanyKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t2 = L0["sender"];
        { const $t3 = (await $.wv([$t2], "Tag", C, false));
          if ($.eq($t3, 1)) {
            await $.stmt((await $.wcall([$t2], "SelectNext", [(await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t2], "True", C, false)), (await $.wv([$t2], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Add_Company", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditCompany")), "text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Kompaniyanın adını daxil edin!"])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditCompany")), "text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_datamod")), "CC_OP")), "CallProcedure", ["add_Companies", [(await $.mv((await $.v(C, "Editcompany")), "text"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Company")), "refresh", []);
  await $.mset((await $.v(C, "EditCompany")), "text", "");
  await $.mcall((await $.v(C, "EditCompany")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Add_Company", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditCompany")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Add_Company", "Button1KeyPress", async function Button1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t4 = L0["sender"];
        { const $t5 = (await $.wv([$t4], "Tag", C, false));
          if ($.eq($t5, 1)) {
            await $.stmt((await $.wcall([$t4], "SelectNext", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t4], "True", C, false)), (await $.wv([$t4], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

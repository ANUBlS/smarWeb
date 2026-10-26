// Generated from CC_Edit_House.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Edit_House", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "NLSLocalizer", "CC_Datamodule"]);
  const C = [U];
  U.defClass("TCC_Update_House", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "editname": {"name": "Editname", "type": "TEdit"}, "editadress": {"name": "Editadress", "type": "TEdit"}, "editentrance": {"name": "Editentrance", "type": "TEdit"}, "editflat": {"name": "Editflat", "type": "TEdit"}, "ac_groupbox": {"name": "ac_groupbox", "type": "TGroupBox"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "editfloor": {"name": "EditFloor", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("CC_Update_House", null, "TCC_Update_House");
  });
  U.method("TCC_Update_House", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_Update_House", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_Update_House", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesabın Əməliyyatları";
  await $.inherited(Self, "TCC_Update_House", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_Update_House", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditName")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "fieldbyname", ["bld_name"])), "asstring")));
  await $.mset((await $.v(C, "EditAdress")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "EditFloor")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "fieldbyname", ["floors"])), "asstring")));
  await $.mset((await $.v(C, "EditEntrance")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "fieldbyname", ["entrances"])), "asstring")));
  await $.mset((await $.v(C, "EditFlat")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "fieldbyname", ["flats"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Update_House", "EditnameKeyPress", async function EditnameKeyPress(Self, p0, p1) {
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
  U.method("TCC_Update_House", "EditadressKeyPress", async function EditadressKeyPress(Self, p0, p1) {
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
  U.method("TCC_Update_House", "EditentranceKeyPress", async function EditentranceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t6 = L0["sender"];
        { const $t7 = (await $.wv([$t6], "Tag", C, false));
          if ($.eq($t7, 1)) {
            await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Update_House", "EditflatKeyPress", async function EditflatKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t8 = L0["sender"];
        { const $t9 = (await $.wv([$t8], "Tag", C, false));
          if ($.eq($t9, 1)) {
            await $.stmt((await $.wcall([$t8], "SelectNext", [(await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t8], "True", C, false)), (await $.wv([$t8], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Update_House", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_bld_name": '', "p_adress": '', "p_floor": 0, "p_entrances": 0, "p_flats": 0, "p_id": 0, "p_comp_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_bld_name"] = (await $.mv((await $.v(C, "Editname")), "text"));
  L0["p_adress"] = (await $.mv((await $.v(C, "Editadress")), "Text"));
  L0["p_entrances"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editentrance")), "Text"))]));
  L0["p_floor"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditFloor")), "Text"))]));
  L0["p_flats"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editflat")), "Text"))]));
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_Datamod")), "CC_Building")), "fieldbyname", ["id"])), "asinteger"));
  L0["p_comp_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_Datamod")), "CC_Building")), "fieldbyname", ["comp_id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_OP")), "CallProcedure", ["upd_Buildings", [L0["p_id"], L0["p_comp_id"], L0["p_bld_name"], L0["p_adress"], L0["p_floor"], L0["p_entrances"], L0["p_flats"]]])));
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "open", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Update_House", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

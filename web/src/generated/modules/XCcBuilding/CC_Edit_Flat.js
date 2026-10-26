// Generated from CC_Edit_Flat.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Edit_Flat", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "NLSLocalizer", "CC_Datamodule"]);
  const C = [U];
  U.defClass("TCC_Update_flats", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "editno": {"name": "Editno", "type": "TEdit"}, "editfloor": {"name": "Editfloor", "type": "TEdit"}, "editroom": {"name": "Editroom", "type": "TEdit"}, "editarea": {"name": "Editarea", "type": "TEdit"}, "editprice1": {"name": "Editprice1", "type": "TEdit"}, "editpricegen": {"name": "Editpricegen", "type": "TEdit"}, "editentrance": {"name": "Editentrance", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "editcode": {"name": "EditCode", "type": "TEdit"}, "label8": {"name": "Label8", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("CC_Update_flats", null, "TCC_Update_flats");
  });
  U.method("TCC_Update_flats", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_Update_flats", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_Update_flats", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesabın Əməliyyatları";
  await $.inherited(Self, "TCC_Update_flats", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_Update_flats", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditCode")), "SetFocus", []);
  await $.mset((await $.v(C, "EditCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["code"])), "asstring")));
  await $.mset((await $.v(C, "EditNo")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["flatnumber"])), "asstring")));
  await $.mset((await $.v(C, "EditEntrance")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["entrance"])), "asstring")));
  await $.mset((await $.v(C, "EditFloor")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["ffloor"])), "asstring")));
  await $.mset((await $.v(C, "EditRoom")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["rooms"])), "asstring")));
  await $.mset((await $.v(C, "EditArea")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["area"])), "asstring")));
  await $.mset((await $.v(C, "EditPrice1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["price1"])), "asstring")));
  await $.mset((await $.v(C, "EditPricegen")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "fieldbyname", ["pricegen"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Update_flats", "EditnoKeyPress", async function EditnoKeyPress(Self, p0, p1) {
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
  U.method("TCC_Update_flats", "EditentranceKeyPress", async function EditentranceKeyPress(Self, p0, p1) {
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
  U.method("TCC_Update_flats", "EditfloorKeyPress", async function EditfloorKeyPress(Self, p0, p1) {
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
  U.method("TCC_Update_flats", "EditroomKeyPress", async function EditroomKeyPress(Self, p0, p1) {
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
  U.method("TCC_Update_flats", "EditareaKeyPress", async function EditareaKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t10 = L0["sender"];
        { const $t11 = (await $.wv([$t10], "Tag", C, false));
          if ($.eq($t11, 1)) {
            await $.stmt((await $.wcall([$t10], "SelectNext", [(await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t10], "True", C, false)), (await $.wv([$t10], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Update_flats", "Editprice1KeyPress", async function Editprice1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "calc": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t12 = L0["sender"];
        { const $t13 = (await $.wv([$t12], "Tag", C, false));
          if ($.eq($t13, 1)) {
            await $.stmt((await $.wcall([$t12], "SelectNext", [(await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t12], "True", C, false)), (await $.wv([$t12], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
    L0["calc"] = ($.mul((await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Editarea")), "Text"))])), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Editprice1")), "text"))]))));
    await $.mset((await $.v(C, "Editpricegen")), "Text", (await $.call(C, "floattostr", [L0["calc"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Update_flats", "EditpricegenKeyPress", async function EditpricegenKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t14 = L0["sender"];
        { const $t15 = (await $.wv([$t14], "Tag", C, false));
          if ($.eq($t15, 1)) {
            await $.stmt((await $.wcall([$t14], "SelectNext", [(await $.wv([$t14], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t14], "True", C, false)), (await $.wv([$t14], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Update_flats", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_flatcode": '', "p_flatnumber": '', "p_entrance": 0, "p_ffloor": 0, "p_rooms": 0, "p_area": 0, "p_price1": 0, "p_pricegen": 0, "p_buyer": 0, "p_id": 0, "p_bld_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_flatcode"] = (await $.mv((await $.v(C, "EditCode")), "text"));
  L0["p_flatnumber"] = (await $.mv((await $.v(C, "Editno")), "text"));
  L0["p_entrance"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editentrance")), "text"))]));
  L0["p_ffloor"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditFloor")), "text"))]));
  L0["p_rooms"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editroom")), "text"))]));
  L0["p_area"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editarea")), "text"))]));
  L0["p_price1"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editprice1")), "text"))]));
  L0["p_pricegen"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editpricegen")), "text"))]));
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_Datamod")), "CC_Buyer_Flat")), "fieldbyname", ["id"])), "asinteger"));
  L0["p_bld_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CC_Datamod")), "CC_Buyer_Flat")), "fieldbyname", ["bld_id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_Datamod")), "CC_OP")), "CallProcedure", ["upd_Flats", [L0["p_id"], L0["p_bld_id"], L0["p_flatcode"], L0["p_flatnumber"], L0["p_entrance"], L0["p_ffloor"], L0["p_rooms"], L0["p_area"], L0["p_price1"], L0["p_pricegen"], L0["p_buyer"]]])));
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "open", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Update_flats", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from transaction.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("transaction", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Buttons", "SearchEdit", "datamodule", "customers_orders_arest__"]);
  const C = [U];
  U.defClass("TEmeliyyat", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "total": {"name": "total", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "proper_edit": {"name": "proper_edit", "type": "TEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Emeliyyat", null, "TEmeliyyat");
  });
  U.method("TEmeliyyat", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TEmeliyyat", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TEmeliyyat", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Əməliyyat";
  await $.inherited(Self, "TEmeliyyat", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TEmeliyyat", "Edit2KeyUp", async function Edit2KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TEmeliyyat", "Edit3KeyUp", async function Edit3KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TEmeliyyat", "Edit4KeyUp", async function Edit4KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TEmeliyyat", "Edit5KeyUp", async function Edit5KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TEmeliyyat", "cleaning", async function cleaning(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "compcount": 0};
  { const $t2 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["compcount"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["compcount"] = $.succ(L0["compcount"], 1); }
      $t3 = false;
      if (!($.ord(L0["compcount"]) <= $.ord($t2))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
      } else {
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TComboBox")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TEmeliyyat", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "callprocedure", ["ORDER_TRANS_", [(await $.mv((await $.v(C, "total")), "text")), (await $.mv((await $.v(C, "dbedit2")), "text")), (await $.mv((await $.v(C, "proper_edit")), "text"))]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "callprocedure", ["C_TRANS", []])));
  await $.mcall((await $.v(C, "Emeliyyat")), "close", []);
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "comboname")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editcode")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editvoin")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editacc")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editswift")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_name")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_acc")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_voin")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editm_name")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editm_acc")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editm_voin")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editn_mon")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editw_mon")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editcon")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editedv")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editedv_f")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editedv_t")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editpro")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editpro_p")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editpro_t")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editchief")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "edithead")), "Text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editnumber")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editval")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmeliyyat", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "emeliyyat")), "proper_edit")), "text", (await $.mv((await $.mv((await $.v(C, "customers_orders_arest")), "Editcon")), "text")));
  await $.mset((await $.mv((await $.v(C, "emeliyyat")), "total")), "text", (await $.mv((await $.mv((await $.v(C, "customers_orders_arest")), "editn_mon")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmeliyyat", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "account")), "fieldbyname", ["acc_no"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["acc_no"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmeliyyat", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "Account")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "Acc")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmeliyyat", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "Acc")), "fieldbyname", ["acc_no"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["acc_no"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmeliyyat", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

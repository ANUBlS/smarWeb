// Generated from arest_check.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("arest_check", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "datamodule", "transaction", "customers_orders_arest__"]);
  const C = [U];
  U.defClass("Tcheck_arest", "TForm", {"checklistbox1": {"name": "CheckListBox1", "type": "TCheckListBox"}, "button1": {"name": "Button1", "type": "TButton"}, "clbaccflags": {"name": "CLBAccFlags", "type": "TCheckListBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("check_arest", null, "Tcheck_arest");
    U.var_("was_d", false, "boolean");
    U.var_("was_c", false, "boolean");
  });
  U.method("Tcheck_arest", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "Tcheck_arest", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("Tcheck_arest", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesaba arest";
  await $.inherited(Self, "Tcheck_arest", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("Tcheck_arest", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vnum": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.or_(((await $.mv((await $.v(C, "checkbox1")), "checked"))), async () => ((await $.mv((await $.v(C, "checkbox2")), "checked"))))))))) {
    await $.stmt((await $.call(C, "messagedlg", ["Arest tipi secin!", (await $.v(C, "mterror")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  L0["vnum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "fieldbyname", ["acc_no"])), "asstring"));
  if ($.truthy((await $.and_($.not(((await $.mv((await $.v(C, "checkbox1")), "checked")))), async () => ((await $.v(C, "was_d"))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["delete_d", [L0["vnum"]]])));
  } else {
    if ($.truthy((await $.and_(((await $.mv((await $.v(C, "checkbox1")), "checked"))), async () => $.not(((await $.v(C, "was_d")))))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["arest_d", [L0["vnum"]]])));
    }
  }
  if ($.truthy((await $.and_($.not(((await $.mv((await $.v(C, "checkbox2")), "checked")))), async () => ((await $.v(C, "was_c"))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["delete_c", [L0["vnum"]]])));
  } else {
    if ($.truthy((await $.and_(((await $.mv((await $.v(C, "checkbox2")), "checked"))), async () => $.not(((await $.v(C, "was_c")))))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["arest_c", [L0["vnum"]]])));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcheck_arest", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ref": 0, "vnum": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["vnum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "fieldbyname", ["acc_no"])), "asstring"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["arest_clear", [L0["vnum"]]])));
  {
    const $t2 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_acc"));
    await $.wset([$t2], "ref", (await $.mv((await $.wcall([$t2], "fieldbyname", ["id"], C)), "asinteger")), { get: async () => L0["ref"], set: async (v) => { L0["ref"] = v; }, local: true });
    await $.stmt($.wcall([$t2], "closeall", [], C));
    await $.stmt($.wcall([$t2], "open", [], C));
    await $.stmt((await $.wcall([$t2], "locate", ["id", (await $.wv([$t2], "ref", { get: async () => L0["ref"], set: async (v) => { L0["ref"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcheck_arest", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "simvol": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "was_c", false);
  await $.set(C, "was_d", false);
  { const $t3 = (await $.call(C, "length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "FieldByName", ["tipacc"])), "asstring"))]));
    L0["i"] = 1;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      L0["simvol"] = (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "FieldByName", ["tipacc"])), "asstring")), L0["i"], 1]));
      if ($.truthy($.eq(L0["simvol"], "D"))) {
        await $.mset((await $.mv((await $.v(C, "check_arest")), "CheckBox1")), "Checked", true);
        await $.set(C, "was_d", true);
      }
      if ($.truthy($.eq(L0["simvol"], "C"))) {
        await $.mset((await $.mv((await $.v(C, "check_arest")), "CheckBox2")), "Checked", true);
        await $.set(C, "was_c", true);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from s_arxiv.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("s_arxiv", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "datamodule"]);
  const C = [U];
  U.defClass("Tsend_arxiv", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "closedate": {"name": "closedate", "type": "TDateTimePicker"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("send_arxiv", null, "Tsend_arxiv");
  });
  U.method("Tsend_arxiv", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "Tsend_arxiv", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("Tsend_arxiv", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Arxivə göndərmə";
  await $.inherited(Self, "Tsend_arxiv", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("Tsend_arxiv", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": '', "v_id": 0, "v_close_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_close_date"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "closedate")), "DateTime"))]));
  L0["v_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust_id")), "FieldByName", ["id"])), "asinteger"));
  L0["v_pnum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust_id")), "FieldByName", ["PNUM"])), "AsString"));
  {
    const $t2 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    const $t3 = (await $.mv((await $.wv([$t2], "DataModCustOrders", C, false)), "customer_orders"));
    await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["trans_arxiv", [(await $.wv([$t2, $t3], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "v_close_date", { get: async () => L0["v_close_date"], set: async (v) => { L0["v_close_date"] = v; }, local: true }, false))]], C)));
    {
      const $t4 = (await $.mv((await $.wv([$t2, $t3], "DataModCustOrders", C, false)), "cust_id"));
      const $t5 = (await $.mv((await $.wv([$t2, $t3, $t4], "DataModCustOrders", C, false)), "customer_orders"));
      await $.stmt((await $.wcall([$t2, $t3, $t4, $t5], "CallProcedure", ["delete_order", [(await $.wv([$t2, $t3, $t4, $t5], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]], C)));
      await $.stmt($.wcall([$t2, $t3, $t4, $t5], "refresh", [], C));
      await $.mcall((await $.wv([$t2, $t3, $t4, $t5], "send_arxiv", C, false)), "close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsend_arxiv", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "closedate")), "datetime", (await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallDateFunction", ["CurrentDate", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

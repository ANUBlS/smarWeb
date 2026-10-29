// Generated from InsNewPayment.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsNewPayment", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons", "DBCtrls", "InsDataMod", "PaymentsMainImpl"]);
  const C = [U];
  U.enumType("tcreatetype", 2);
  U.const("ctNew", 0);
  U.const("ctEdit", 1);
  U.defClass("TfmNewPayments", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "eddate": {"name": "edDate", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edammount": {"name": "edAmmount", "type": "TEdit"}, "gkfy": {"name": "Gkfy", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "createdtype": {"name": "CreatedType", "type": "TCreateType"}, "paymentid": {"name": "PaymentID", "type": "Integer"}}, {});
  U.init(async () => {
    try { U.const("tdifferentsexception", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.var_("fmNewPayments", null, "TfmNewPayments");
  });
  U.method("TfmNewPayments", "CreateIt", async function CreateIt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ctype": $.copyArg(p0), "payid": (p1 === undefined ? (-(1)) : p1), result: undefined};
  await $.fixArgs(L0, ["ctype", "payid"]);
  await $.set(C, "CreatedType", L0["ctype"]);
  await $.set(C, "PaymentID", L0["payid"]);
  await $.inherited(Self, "TfmNewPayments", "Create", [(await $.v(C, "Owner"))], arguments);
  return L0.result;
}, {"params": ["cType", "payID"], "kind": "constructor", "ptypes": ["TCreateType", "Integer"]});
  U.method("TfmNewPayments", "CheckIsOld", async function CheckIsOld(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = true;
  {
    const $t1 = (await $.v(C, "PayDataMod"));
    const $t2 = (await $.wv([$t1], "OPSBOP", C, false));
    if ($.truthy($.gt((await $.wcall([$t1, $t2], "CallDateFunction", ["get_Date", []], C)), (await $.mv((await $.wv([$t1, $t2], "ODSPaymentsPAYDATE", C, false)), "Value"))))) {
      throw $.raise((await $.mcall((await $.wv([$t1, $t2], "TDifferentsException", C, false)), "Create", ["Evvelki gunleri deyishdirmek olmaz!"])));
    }
  }
  L0["result"] = false;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmNewPayments", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "PayDataMod"));
    const $t4 = (await $.wv([$t3], "OPSBOP", C, false));
    await $.mset((await $.wv([$t3, $t4], "edDate", C, false)), "Text", (await $.wcall([$t3, $t4], "DateTimeToStr", [(await $.wcall([$t3, $t4], "CallDateFunction", ["get_Date", []], C))], C)));
  }
  {
    const $t5 = (await $.v(C, "PayDataMod"));
    const $t6 = (await $.wv([$t5], "ODSPlan", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["insid", (await $.wv([$t5, $t6], "id", C, false))], C)));
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
  }
  {
    const $t7 = (await $.v(C, "PayDataMod"));
    if ($.truthy($.eq((await $.wv([$t7], "CreatedType", C, false)), (await $.wv([$t7], "ctEdit", C, false))))) {
      if ($.truthy($.not((await $.wcall([$t7], "CheckIsOld", [], C))))) {
        await $.mset((await $.wv([$t7], "btOk", C, false)), "Enabled", (await $.wv([$t7], "True", C, false)));
      }
      await $.mset((await $.wv([$t7], "edAmmount", C, false)), "Text", (await $.wcall([$t7], "FloatToStr", [(await $.mv((await $.wv([$t7], "ODSPaymentsAMMOUNT", C, false)), "Value"))], C)));
      await $.mset((await $.wv([$t7], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.wv([$t7], "ODSPaymentsPLANID", C, false)), "Value")));
    } else {
      await $.mset((await $.wv([$t7], "btOk", C, false)), "Enabled", (await $.wv([$t7], "True", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmNewPayments", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "PayDataMod"));
    if ($.truthy($.eq((await $.wv([$t8], "CreatedType", C, false)), (await $.wv([$t8], "ctNew", C, false))))) {
      if ($.truthy((await $.mcall((await $.wv([$t8], "OPCOMMON", C, false)), "CallBooleanFunction", ["addpayment", [(await $.wv([$t8], "id", C, false)), (await $.wcall([$t8], "StrToFloat", [(await $.mv((await $.wv([$t8], "edAmmount", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t8], "ODSPlanID", C, false)), "Value"))]])))) {
        await $.wset([$t8], "ModalResult", (await $.wv([$t8], "mrOk", C, false)), C);
      }
    } else {
      if ($.truthy((await $.mcall((await $.wv([$t8], "OPCOMMON", C, false)), "CallBooleanFunction", ["updpayment", [(await $.wv([$t8], "id", C, false)), (await $.mv((await $.wv([$t8], "ODSPaymentsID", C, false)), "Value")), (await $.wcall([$t8], "StrToFloat", [(await $.mv((await $.wv([$t8], "edAmmount", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t8], "ODSPlanID", C, false)), "Value"))]])))) {
        await $.wset([$t8], "ModalResult", (await $.wv([$t8], "mrOk", C, false)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmNewPayments", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "PayDataMod"));
    await $.mcall((await $.wv([$t9], "ODSPlan", C, false)), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

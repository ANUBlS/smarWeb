// Generated from fmPlanBuilderImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("fmPlanBuilderImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "HintBox", "StdCtrls", "Buttons", "XFSCtrls", "ComCtrls", "DMPaymentPlanImpl", "InsPaymentPlanImpl"]);
  const C = [U];
  U.defClass("TfmPlanBuilder", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "edammount": {"name": "edAmmount", "type": "TEdit"}, "edperiod": {"name": "edPeriod", "type": "TEdit"}, "cbtype": {"name": "cbType", "type": "TComboBox"}, "dtpend": {"name": "dtpEnd", "type": "TDateTimePicker"}, "dtpbegin": {"name": "dtpBegin", "type": "TDateTimePicker"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "hberror": {"name": "hbError", "type": "THintBox"}}, {});
  U.init(async () => {
    U.var_("fmPlanBuilder", null, "TfmPlanBuilder");
  });
  U.method("TfmPlanBuilder", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Plan hazirlansin", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.v(C, "DMPaymentPlan"));
      const $t2 = (await $.wv([$t1], "OPCOMMON", C, false));
      const $t3 = (await $.wv([$t1, $t2], "ODSContracts", C, false));
      await $.stmt((await $.wcall([$t1, $t2, $t3], "CallBooleanFunction", ["makeplan", [(await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["ID"], C)), "asInteger")), (await $.mv((await $.wv([$t1, $t2, $t3], "dtpBegin", C, false)), "DateTime")), (await $.mv((await $.wv([$t1, $t2, $t3], "dtpEnd", C, false)), "DateTime")), (await $.mv((await $.wv([$t1, $t2, $t3], "cbType", C, false)), "ItemIndex")), (await $.wcall([$t1, $t2, $t3], "StrToFloat", [(await $.wcall([$t1, $t2, $t3], "Trim", [(await $.mv((await $.wv([$t1, $t2, $t3], "edAmmount", C, false)), "Text"))], C))], C)), (await $.wcall([$t1, $t2, $t3], "StrToInt", [(await $.wcall([$t1, $t2, $t3], "Trim", [(await $.mv((await $.wv([$t1, $t2, $t3], "edPeriod", C, false)), "Text"))], C))], C))]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "refresh", []);
    await $.mset((await $.mv((await $.v(C, "frmPaymentPlan")), "ToolButton1")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "frmPaymentPlan")), "ToolButton7")), "Enabled", false);
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanBuilder", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanBuilder", "cbTypeChange", async function cbTypeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t4 = (await $.mv((await $.v(C, "cbType")), "ItemIndex"));
    if ($.eq($t4, 0)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), 30)]))])));
    }
    else if ($.eq($t4, 1)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), ($.mul(30, 3)))]))])));
    }
    else if ($.eq($t4, 2)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), ($.mul(30, 6)))]))])));
    }
    else if ($.eq($t4, 3)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), ($.mul(30, 12)))]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanBuilder", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DMPaymentPlan"));
    const $t6 = (await $.wv([$t5], "OPCOMMON", C, false));
    const $t7 = (await $.wv([$t5, $t6], "ODSContracts", C, false));
    await $.mset((await $.wv([$t5, $t6, $t7], "dtpBegin", C, false)), "DateTime", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["Begin_date"], C)), "asDateTime")));
    await $.mset((await $.wv([$t5, $t6, $t7], "dtpEnd", C, false)), "DateTime", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["End_date"], C)), "asDateTime")));
    await $.mset((await $.wv([$t5, $t6, $t7], "cbType", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t5, $t6, $t7], "edPeriod", C, false)), "Text", (await $.wcall([$t5, $t6, $t7], "IntToStr", [(await $.wcall([$t5, $t6, $t7], "trunc", [$.fdiv(($.sub((await $.mv((await $.wv([$t5, $t6, $t7], "dtpEnd", C, false)), "DateTime")), (await $.mv((await $.wv([$t5, $t6, $t7], "dtpBegin", C, false)), "DateTime")))), 30)], C))], C)));
    await $.mset((await $.wv([$t5, $t6, $t7], "edAmmount", C, false)), "Text", (await $.wcall([$t5, $t6, $t7], "CurrToStr", [$.add($.add((await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["AMMOUNT"], C)), "asCurrency")), ((await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6, $t7], "DMPaymentPlan", C, false)), "DSmesuliyyetShaqqi")), "FieldByName", ["SIGHAQQIM"])), "AsFloat")))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6, $t7], "DMPaymentPlan", C, false)), "DSFerdiqezaShaqqi")), "FieldByName", ["SIGHAQQIF"])), "AsFloat")))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanBuilder", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

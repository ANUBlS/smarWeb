// Generated from InsPlanBuilder.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsPlanBuilder", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "ExtCtrls", "Mask", "DBCtrls", "Oracle", "HintBox", "CurrencyEdit", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmPlanBuilder", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dtpbegin": {"name": "dtpBegin", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "cbtype": {"name": "cbType", "type": "TComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dtpend": {"name": "dtpEnd", "type": "TDateTimePicker"}, "edperiod": {"name": "edPeriod", "type": "TEdit"}, "hberror": {"name": "hbError", "type": "THintBox"}, "edammount": {"name": "edAmmount", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("fmPlanBuilder", null, "TfmPlanBuilder");
  });
  U.method("TfmPlanBuilder", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    const $t2 = (await $.wv([$t1], "OPCOMMON", C, false));
    const $t3 = (await $.wv([$t1, $t2], "ODSContracts", C, false));
    try {
      await $.stmt((await $.wcall([$t1, $t2, $t3], "CallBooleanFunction", ["makeplan", [(await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["ID"], C)), "asInteger")), (await $.mv((await $.wv([$t1, $t2, $t3], "dtpBegin", C, false)), "DateTime")), (await $.mv((await $.wv([$t1, $t2, $t3], "dtpEnd", C, false)), "DateTime")), (await $.mv((await $.wv([$t1, $t2, $t3], "cbType", C, false)), "ItemIndex")), (await $.wcall([$t1, $t2, $t3], "StrToFloat", [(await $.wcall([$t1, $t2, $t3], "Trim", [(await $.mv((await $.wv([$t1, $t2, $t3], "edAmmount", C, false)), "Text"))], C))], C)), (await $.wcall([$t1, $t2, $t3], "StrToInt", [(await $.wcall([$t1, $t2, $t3], "Trim", [(await $.mv((await $.wv([$t1, $t2, $t3], "edPeriod", C, false)), "Text"))], C))], C))]], C)));
      await $.mcall((await $.wv([$t1, $t2, $t3], "ODSPayPlan", C, false)), "refresh", []);
      await $.wset([$t1, $t2, $t3], "ModalResult", (await $.wv([$t1, $t2, $t3], "mrOk", C, false)), C);
    } catch ($t4) {
      $.rethrowControl($t4);
      if ($.excIs($t4, "EOracleError")) {
        L0["e"] = $.exc($t4);
        { const $t5 = (await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"));
          if ($.eq($t5, 20001)) {
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "hbError", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))])));
          }
          else if ($.eq($t5, 20002)) {
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "hbError", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))])));
          }
          else {
            await $.stmt((await $.wcall([$t1, $t2, $t3], "ShowMessage", [(await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
          }
        }
      }
      else { throw $t4; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanBuilder", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "InsDataMod"));
    const $t7 = (await $.wv([$t6], "OPCOMMON", C, false));
    const $t8 = (await $.wv([$t6, $t7], "ODSContracts", C, false));
    await $.mset((await $.wv([$t6, $t7, $t8], "dtpBegin", C, false)), "DateTime", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["Begin_date"], C)), "asDateTime")));
    await $.mset((await $.wv([$t6, $t7, $t8], "dtpEnd", C, false)), "DateTime", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["End_date"], C)), "asDateTime")));
    await $.mset((await $.wv([$t6, $t7, $t8], "cbType", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t6, $t7, $t8], "edPeriod", C, false)), "Text", (await $.wcall([$t6, $t7, $t8], "IntToStr", [(await $.wcall([$t6, $t7, $t8], "trunc", [$.fdiv(($.sub((await $.mv((await $.wv([$t6, $t7, $t8], "dtpEnd", C, false)), "DateTime")), (await $.mv((await $.wv([$t6, $t7, $t8], "dtpBegin", C, false)), "DateTime")))), 30)], C))], C)));
    await $.mset((await $.wv([$t6, $t7, $t8], "edAmmount", C, false)), "Text", (await $.wcall([$t6, $t7, $t8], "CurrToStr", [(await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["AMMOUNT"], C)), "asCurrency"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanBuilder", "cbTypeChange", async function cbTypeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t9 = (await $.mv((await $.v(C, "cbType")), "ItemIndex"));
    if ($.eq($t9, 0)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), 30)]))])));
    }
    else if ($.eq($t9, 1)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), ($.mul(30, 3)))]))])));
    }
    else if ($.eq($t9, 2)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), ($.mul(30, 6)))]))])));
    }
    else if ($.eq($t9, 3)) {
      await $.mset((await $.v(C, "edPeriod")), "Text", (await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "dtpEnd")), "DateTime")), (await $.mv((await $.v(C, "dtpBegin")), "DateTime")))), ($.mul(30, 12)))]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

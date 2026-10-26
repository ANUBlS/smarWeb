// Generated from cuChangeScheduleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cuChangeScheduleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ImgList", "ComCtrls", "Mask", "DBCtrlsEh", "cuScheduleDataModuleImpl", "sbsystem", "cuCommonDecls"]);
  const C = [U];
  U.defClass("TFrmChangeSchedule", "TForm", {"bitbtnchenge": {"name": "BitBtnChenge", "type": "TBitBtn"}, "bitbtnabort": {"name": "BitBtnAbort", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpchngschedule": {"name": "DTPChngSchedule", "type": "TDateTimePicker"}, "label2": {"name": "Label2", "type": "TLabel"}, "nperiodsedit": {"name": "NPeriodsEdit", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "edrest": {"name": "EdRest", "type": "TEdit"}, "cbchangedate": {"name": "cbchangedate", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FrmChangeSchedule", null, "TFrmChangeSchedule");
  });
  U.method("TFrmChangeSchedule", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmChangeSchedule", "MonthsBeetwean", async function MonthsBeetwean(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"d1": $.copyArg(p0), "d2": $.copyArg(p1), result: 0, "tempdate": 0};
  await $.fixArgs(L0, ["d1", "d2"]);
  L0["result"] = 1;
  L0["tempdate"] = L0["d1"];
  while ($.truthy($.le((await $.call(C, "IncMonth", [L0["tempdate"], L0["result"]])), L0["d2"]))) {
    await $.stmt((await $.call(C, "INC", [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; })])));
    await $.tick();
  }
  if ($.truthy($.gt((await $.call(C, "IncMonth", [L0["tempdate"], L0["result"]])), L0["d2"]))) {
    L0["result"] = $.sub(L0["result"], 1);
  }
  return L0.result;
}, {"params": ["D1", "D2"], "kind": "function", "ptypes": ["TDateTime", "TDateTime"]});
  U.method("TFrmChangeSchedule", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d2": 0, "periods": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPChngSchedule")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "cbchangedate")), "Checked", true);
  {
    const $t2 = (await $.v(C, "ScheduleDataModule"));
    const $t3 = (await $.wv([$t2], "CreditInfo", C, false));
    await $.wset([$t2, $t3], "D2", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["DUEDATEFIRSTCONTRACT"], C)), "AsDateTime")), { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true });
    await $.mset((await $.wv([$t2, $t3], "EdRest", C, false)), "Text", (await $.wcall([$t2, $t3], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t2, $t3], "CreditInfo", C, false)), "FieldByName", ["Rest"])), "AsFloat"))], C)));
  }
  L0["periods"] = (await $.call(C, "MonthsBeetwean", [(await $.v(C, "Get_CurrentDate")), L0["d2"]]));
  await $.mset((await $.v(C, "NPeriodsEdit")), "Text", (await $.call(C, "IntToStr", [L0["periods"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmChangeSchedule", "BitBtnAbortClick", async function BitBtnAbortClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmChangeSchedule", "BitBtnChengeClick", async function BitBtnChengeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begindate": 0, "creditid": 0, "period": 0, "crdrest": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["begindate"] = (await $.mv((await $.v(C, "DTPChngSchedule")), "DateTime"));
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["period"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "NPeriodsEdit")), "Text"))]));
  L0["crdrest"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EdRest")), "Text"))]));
  {
    const $t4 = (await $.v(C, "ScheduleDataModule"));
    const $t5 = (await $.wv([$t4], "CM_SCHEDULE", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["ChangeSchedule", ["p_CreditID", (await $.wv([$t4, $t5], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "P_Date", (await $.wv([$t4, $t5], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)), "p_period", (await $.wv([$t4, $t5], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), "p_rest", (await $.wv([$t4, $t5], "CrdRest", { get: async () => L0["crdrest"], set: async (v) => { L0["crdrest"] = v; }, local: true }, false)), "p_changedate", (await $.mv((await $.wv([$t4, $t5], "cbchangedate", C, false)), "checked"))]], C)));
    await $.mcall((await $.wv([$t4, $t5], "ScheduleData", C, false)), "Refresh", []);
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmChangeSchedule", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "BitBtnChengeClick", [Self])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmChangeSchedule", "DTPChngScheduleChange", async function DTPChngScheduleChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d1": 0, "d2": 0, "periods": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["d1"] = (await $.mv((await $.v(C, "DTPChngSchedule")), "DateTime"));
  {
    const $t6 = (await $.v(C, "ScheduleDataModule"));
    const $t7 = (await $.wv([$t6], "CreditInfo", C, false));
    await $.wset([$t6, $t7], "D2", (await $.mv((await $.wcall([$t6, $t7], "FieldByName", ["DUEDATEFIRSTCONTRACT"], C)), "AsDateTime")), { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true });
  }
  L0["periods"] = (await $.call(C, "MonthsBeetwean", [L0["d1"], L0["d2"]]));
  await $.mset((await $.v(C, "NPeriodsEdit")), "Text", (await $.call(C, "IntToStr", [L0["periods"]])));
  await $.mset((await $.v(C, "EdRest")), "Text", (await $.call(C, "floatToStr", [(await $.mcall((await $.mv((await $.v(C, "ScheduleDataModule")), "CM_SCHEDULE")), "callFloatFunction", ["get_creditRestbyDat", ["p_creditid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ScheduleDataModule")), "CreditInfo")), "FieldByName", ["ID"])), "asInteger")), "p_dat", L0["d1"]]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

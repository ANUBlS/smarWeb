// Generated from DateintervalUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DateintervalUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "Mask", "DBCtrlsEh", "ComCtrls", "CustAnalysDataModuleImpl", "sboapiDataModuleImpl", "SBSystem", "SBTranslateProc", "CreditsinDateUnit"]);
  const C = [U];
  U.defClass("TDateintervalForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "datetimepickerstart": {"name": "DateTimePickerStart", "type": "TDateTimePicker"}, "datetimepickerend": {"name": "DateTimePickerEnd", "type": "TDateTimePicker"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("DateintervalForm", null, "TDateintervalForm");
  });
  U.method("TDateintervalForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TDateintervalForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TDateintervalForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "d1": 0, "d2": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["showrestform"] = $.fn(async function ShowRestForm(p0, p1, p2) {
  const L1 = {"crdid": $.copyArg(p0), "d1": $.copyArg(p1), "d2": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["crdid", "d1", "d2"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditsinDateDataSet"));
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["CrdID", (await $.wv([$t1], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["D1", (await $.wv([$t1], "D1", { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["D2", (await $.wv([$t1], "D2", { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.wobj(C, "CreditinDateForm"));
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditsinDateDataSet"));
    await $.stmt($.wcall([$t3], "Close", [], C));
  }
  return L1.result;
});
  L0["creditid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSet")), "FieldByName", ["creditid"])), "ASInteger"));
  L0["d1"] = (await $.mv((await $.v(C, "DateTimePickerStart")), "Date"));
  L0["d2"] = (await $.mv((await $.v(C, "DateTimePickerEnd")), "Date"));
  await $.stmt((await $.callv(L0["showrestform"], [L0["creditid"], L0["d1"], L0["d2"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDateintervalForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDateintervalForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mset((await $.v(C, "DateTimePickerStart")), "Date", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DateTimePickerEnd")), "Date", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

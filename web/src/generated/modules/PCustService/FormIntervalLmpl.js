// Generated from FormIntervalLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormIntervalLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "ComCtrls", "UnitDataModPCustService", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormInterval", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "begin_dat": {"name": "Begin_Dat", "type": "TDateTimePicker"}, "end_dat": {"name": "End_dat", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormInterval", null, "TFormInterval");
  });
  U.method("TFormInterval", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "memorial_date")), "Open", []);
  await $.mset((await $.v(C, "Begin_dat")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_SYSDATE")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "End_dat")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_SYSDATE")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInterval", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormInterval", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ActiveControl", (await $.v(C, "Begin_dat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInterval", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s_date": 0, "e_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s_date"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "Begin_dat")), "DateTime"))]));
  L0["e_date"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "End_Dat")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OPackage")), "CallProcedure", ["ins_date", [L0["s_date"], L0["e_date"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "memorial_date")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

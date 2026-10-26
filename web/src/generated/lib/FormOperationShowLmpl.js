// Generated from FormOperationShowLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormOperationShowLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ComCtrls", "ExtCtrls", "Buttons", "SBTranslateProc", "sboapiDataModuleImpl", "DataCustNomImpl"]);
  const C = [U];
  U.defClass("TFormOperationShow", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormOperationShow", null, "TFormOperationShow");
  });
  U.method("TFormOperationShow", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormOperationShow", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationShow", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormOperationShow", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_sb_business_opers1")), "FieldByName", ["REFERENCE"])), "AsString")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_sb_business_opers1")), "FieldByName", ["NAME"])), "AsString")));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_sb_business_opers1")), "FieldByName", ["DAT"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_sb_business_opers1")), "FieldByName", ["TIM"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationShow", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

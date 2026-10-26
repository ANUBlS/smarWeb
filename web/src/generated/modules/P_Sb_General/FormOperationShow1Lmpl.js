// Generated from FormOperationShow1Lmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormOperationShow1Lmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Buttons", "DataCustNomImpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormOperationShow1", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormOperationShow1", null, "TFormOperationShow1");
  });
  U.method("TFormOperationShow1", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormOperationShow1", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationShow1", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormOperationShow1", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["name"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["debitaccno"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["debitcurrencysname"])), "AsString")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["creditaccno"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["creditcurrencysname"])), "AsString")));
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["debitamount"])), "AsString")));
  await $.mset((await $.v(C, "Edit8")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["creditamount"])), "AsString")));
  await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["lamount"])), "AsString")));
  await $.mset((await $.v(C, "Edit10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "FieldByName", ["status"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationShow1", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from FormOperationShow1Lmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormOperationShow1Lmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Buttons", "UnitDataModPCustService", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormOperationShow1", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}}, {});
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
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["name"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["debitaccno"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["debitcurrencysname"])), "AsString")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["creditaccno"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["creditcurrencysname"])), "AsString")));
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["debitamount"])), "AsString")));
  await $.mset((await $.v(C, "Edit8")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["creditamount"])), "AsString")));
  await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["lamount"])), "AsString")));
  await $.mset((await $.v(C, "Edit10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["status"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationShow1", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationShow1", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["upd_transactions_descrption", [L0["c_id"], (await $.mv((await $.v(C, "Edit2")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

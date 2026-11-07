// Generated from CreditTypesAddEditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreditTypesAddEditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "DBCtrlsEh", "Buttons", "DB"]);
  const C = [U];
  U.defClass("TFrmAddEditCrdType", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbeditdesc": {"name": "DBEditDesc", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "bitbtnsave": {"name": "BitBtnSave", "type": "TBitBtn"}, "bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "checkboxline": {"name": "CheckBoxLine", "type": "TCheckBox"}, "checkboxren": {"name": "CheckBoxRen", "type": "TCheckBox"}, "checkboxreserve": {"name": "CheckBoxReserve", "type": "TCheckBox"}, "checkboxcredcard": {"name": "CheckBoxCredCard", "type": "TCheckBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "fdataset": {"name": "FDataSet", "type": "TDataSet"}}, {});
  U.init(async () => {
    U.var_("FrmAddEditCrdType", null, "TFrmAddEditCrdType");
  });
  U.method("TFrmAddEditCrdType", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmAddEditCrdType", "CheckBoxLineClick", async function CheckBoxLineClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = L0["sender"];
    const $t2 = (await $.wv([$t1], "FDataSet", C, false));
    await $.stmt($.wcall([$t1, $t2], "Edit", [], C));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["ITYPE"], C)), "AsInteger", (await $.wcall([$t1, $t2], "Word", [(await $.wv([$t1, $t2], "Checked", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddEditCrdType", "CheckBoxRenClick", async function CheckBoxRenClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = L0["sender"];
    const $t4 = (await $.wv([$t3], "FDataSet", C, false));
    await $.stmt($.wcall([$t3, $t4], "Edit", [], C));
    await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["RENEWABLESTATUS"], C)), "AsInteger", (await $.wcall([$t3, $t4], "Word", [(await $.wv([$t3, $t4], "Checked", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddEditCrdType", "CheckBoxReserveClick", async function CheckBoxReserveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = L0["sender"];
    const $t6 = (await $.wv([$t5], "FDataSet", C, false));
    await $.stmt($.wcall([$t5, $t6], "Edit", [], C));
    await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["ICLASS"], C)), "AsInteger", (await $.wcall([$t5, $t6], "Word", [(await $.wv([$t5, $t6], "Checked", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddEditCrdType", "BitBtnSaveClick", async function BitBtnSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FDataSet")), "Post", []);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddEditCrdType", "BitBtnCancelClick", async function BitBtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FDataSet")), "Cancel", []);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddEditCrdType", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.v(C, "FDataSet")), "State")), [(await $.v(C, "dsEdit")), (await $.v(C, "dsInsert"))]))) {
    await $.mcall((await $.v(C, "FDataSet")), "Cancel", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmAddEditCrdType", "CheckBoxCredCardClick", async function CheckBoxCredCardClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = L0["sender"];
    const $t8 = (await $.wv([$t7], "FDataSet", C, false));
    await $.stmt($.wcall([$t7, $t8], "Edit", [], C));
    await $.mset((await $.wcall([$t7, $t8], "FieldByName", ["CARDTYPE"], C)), "AsInteger", (await $.wcall([$t7, $t8], "Word", [(await $.wv([$t7, $t8], "Checked", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

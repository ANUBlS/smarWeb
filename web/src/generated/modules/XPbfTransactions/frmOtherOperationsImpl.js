// Generated from frmOtherOperationsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmOtherOperationsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "Buttons", "ComCtrls", "DBCtrls", "dmpbf_transactionimpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmOtherOperations", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label4": {"name": "Label4", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("frmOtherOperations", null, "TfrmOtherOperations");
  });
  U.method("TfrmOtherOperations", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "dmpbf_transaction"));
    await $.wset([$t1], "OperType1", (await $.mv((await $.wv([$t1], "ComboBox1", C, false)), "text")), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmOtherOperations", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "dmpbf_transaction"));
    const $t3 = (await $.wv([$t2], "PBFOperations", C, false));
    await $.wset([$t2, $t3], "OperType1", (await $.mv((await $.wv([$t2, $t3], "ComboBox1", C, false)), "text")), C);
    await $.wset([$t2, $t3], "TrDat", (await $.wcall([$t2, $t3], "integer", [(await $.wcall([$t2, $t3], "trunc", [(await $.mv((await $.wv([$t2, $t3], "DateTimePicker1", C, false)), "datetime"))], C))], C)), C);
    await $.stmt($.wcall([$t2, $t3], "Post", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmOtherOperations", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "dmpbf_transaction"));
    const $t5 = (await $.wv([$t4], "PBFOperations", C, false));
    await $.stmt($.wcall([$t4, $t5], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmOtherOperations", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmOtherOperations", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmpbf_transaction")), "CurrDat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Clear", []);
  {
    const $t6 = (await $.v(C, "dmpbf_transaction"));
    const $t7 = (await $.wv([$t6], "PBFOpertionTypes", C, false));
    await $.stmt($.wcall([$t6, $t7], "first", [], C));
    while ($.truthy($.not((await $.wv([$t6, $t7], "eof", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t6, $t7], "ComboBox1", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t6, $t7], "fieldbyname", ["name"], C)), "asstring"))])));
      await $.stmt($.wcall([$t6, $t7], "next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

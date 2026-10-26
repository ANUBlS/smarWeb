// Generated from frmAddEditTrImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddEditTrImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "CMDBSearchEdit", "DBLookupEh", "Buttons", "ComCtrls", "dmpbf_transactionimpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmAddEditTr", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("frmAddEditTr", null, "TfrmAddEditTr");
  });
  U.method("TfrmAddEditTr", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddEditTr", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditTr", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAddEditTr", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmpbf_transaction")), "CurrDat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditTr", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "dmpbf_transaction"));
    const $t2 = (await $.wv([$t1], "PBFOperations", C, false));
    await $.wset([$t1, $t2], "TrDat", (await $.wcall([$t1, $t2], "integer", [(await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DateTimePicker1", C, false)), "datetime"))], C))], C)), C);
    await $.stmt($.wcall([$t1, $t2], "Post", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditTr", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "dmpbf_transaction"));
    const $t4 = (await $.wv([$t3], "PBFOperations", C, false));
    await $.stmt($.wcall([$t3, $t4], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditTr", "DBEditEh1KeyPress", async function DBEditEh1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "True", C, false))], C)));
        await $.wset([$t5], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

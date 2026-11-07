// Generated from frmCardAddEditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCardAddEditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "Buttons", "ExtCtrls", "CMHintBox", "DBLookupEh", "DMCardSettings"]);
  const C = [U];
  U.defClass("TfrmCardAddEdit", "TForm", {"dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "hbcards": {"name": "HBCards", "type": "TCMHintBox"}, "lcbcalcmethod": {"name": "LCBCALCMethod", "type": "TDBLookupComboboxEh"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("frmCardAddEdit", null, "TfrmCardAddEdit");
  });
  U.method("TfrmCardAddEdit", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmCardAddEdit", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCardAddEdit", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DMCardSeting"));
    if ($.truthy((await $.mv((await $.wv([$t1], "cardsortsDESCRIPTION", C, false)), "IsNull")))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "HBCards", C, false)), "ShowMessage", ["Adı sahəsi boşdur"])));
      $.abort();
    }
    await $.mcall((await $.wv([$t1], "cardsorts", C, false)), "Post", []);
    await $.stmt($.wcall([$t1], "Close", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardAddEdit", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "DMCardSeting"));
    const $t3 = (await $.wv([$t2], "cardsorts", C, false));
    await $.stmt($.wcall([$t2, $t3], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

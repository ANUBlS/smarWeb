// Generated from BanklarImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BanklarImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "nlsDialogs", "Buttons", "DBCtrls", "StdCtrls", "Mask", "CMDBSearchEdit", "DBCtrlsEh", "LazyTransactionDatModImpl"]);
  const C = [U];
  U.defClass("TFormBank", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("FormBank", null, "TFormBank");
  });
  U.method("TFormBank", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormBank", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "OracleDataSet1")), "fieldbyname", ["BANK_KOD"])), "asstring")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Bu bankın kodu daxil edilməyib"])));
    return L0.result;
  }
  L0["s"] = $.add("and substr(ad.acc_no,5,2)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "OracleDataSet1")), "fieldbyname", ["BANK_KOD"])), "asstring")));
  await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "Close", []);
  { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "sql")), [28], L0["s"]); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "sql", $t1); } }
  await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBank", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "Close", []);
  { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "sql")), [28], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "sql", $t2); } }
  await $.mcall((await $.mv((await $.v(C, "LazTrDatMod")), "TransactionsData")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBank", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBank", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

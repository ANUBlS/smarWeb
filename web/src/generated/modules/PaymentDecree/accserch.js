// Generated from accserch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("accserch", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "OracleData", "Grids", "StdCtrls", "DBGrids", "PaymentDataModul", "PaymentDecreeImpl"]);
  const C = [U];
  U.defClass("TFormAccounts", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}, "editacc_no_search": {"name": "EditACC_NO_SEARCH", "type": "TEdit"}, "editacc_no": {"name": "EditACC_NO", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "xdbgridaccounts": {"name": "XDBGridAccounts", "type": "TDBGrid"}, "v_accno": {"name": "v_AccNo", "type": "String"}, "deborkred": {"name": "DebOrKred", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FormAccounts", null, "TFormAccounts");
  });
  U.func("ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.mv((await $.wv([$t1], "FormAccounts", C, false)), "XDBGridAccounts")), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
          await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_AccNo", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSAccounts")), "FieldByName", ["ACC_NO"])), "AsString")));
  await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "XDBGridAccountsDblClick", async function XDBGridAccountsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_AccNo", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSAccounts")), "FieldByName", ["ACC_NO"])), "AsString")));
  await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "EditACC_NOKeyPress", async function EditACC_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditACC_NO"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "EditACC_NO_SEARCHKeyPress", async function EditACC_NO_SEARCHKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditACC_NO_SEARCH"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditName"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditACC_NO_SEARCH")), "Clear", []);
  await $.mcall((await $.v(C, "EditACC_NO")), "Clear", []);
  await $.mcall((await $.v(C, "EditName")), "Clear", []);
  {
    const $t3 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSAccounts"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select AC.*,C.Inn From Account AC,Customers C Where AC.kli_ID =C.ID and AC.acc_no= ", "'"), (await $.wv([$t3], "v_AccNo", C, false))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.mv((await $.wv([$t3], "PaymentDecree", C, false)), "EDAName")), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["NAME"], C)), "AsString")));
    await $.mset((await $.mv((await $.wv([$t3], "PaymentDecree", C, false)), "EDAInn")), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["INN"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormAccounts", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_INSERT")))))) {
    await $.set(C, "v_AccNo", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSAccounts")), "FieldByName", ["ACC_NO"])), "AsString")));
    await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormAccounts", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "DebOrKred")), true))) {
  } else {
  }
  if ($.truthy($.ne((await $.v(C, "v_AccNO")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSAccounts")), "Locate", ["ACC_NO", (await $.v(C, "v_AccNO")), []])));
  }
  await $.mcall((await $.v(C, "EditACC_NO_SEARCH")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

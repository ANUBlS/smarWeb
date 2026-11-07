// Generated from FormAccountsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormAccountsImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "OracleData", "ActnList", "TransactionDataModuleUnit", "TransactionPropertiesImpl", "TransactionManagerImpl"]);
  const C = [U];
  U.defClass("TFormAccounts", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "xdbgridaccounts": {"name": "XDBGridAccounts", "type": "TXDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "editacc_no_search": {"name": "EditACC_NO_SEARCH", "type": "TEdit"}, "editacc_no": {"name": "EditACC_NO", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "v_accno": {"name": "v_AccNo", "type": "String"}, "v_kliid": {"name": "v_KliID", "type": "integer"}, "deborkred": {"name": "DebOrKred", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FormAccounts", null, "TFormAccounts");
  });
  U.method("TFormAccounts", "ReportCode", async function ReportCode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["key"] = "\r";
  {
    const $t1 = (await $.wobj(C, "TransactionEditForm"));
    await $.wset([$t1], "report", (await $.mcall((await $.mv((await $.wv([$t1], "TransactionDataModule", C, false)), "OP_MMX")), "CallStringFunction", ["get_report", [(await $.wv([$t1], "kli_id1", C, false)), (await $.wv([$t1], "kli_id2", C, false)), (await $.wv([$t1], "id1", C, false)), (await $.wv([$t1], "id2", C, false))]])), C);
    await $.mset((await $.wv([$t1], "Editreportcode", C, false)), "Text", (await $.wv([$t1], "report", C, false)));
    if ($.truthy($.eq((await $.wv([$t1], "report", C, false)), ""))) {
      await $.mset((await $.wv([$t1], "Editreportcode", C, false)), "Text", "YOX");
    }
    await $.stmt((await $.wcall([$t1], "EditreportcodeKeyPress", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t1], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), async ($t2) => { await $.wset([$t1], "Key", $t2, { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }); })], C)));
  }
  return L0.result;
}, {"params": ["sender"], "kind": "procedure", "ptypes": ["tobject"]});
  U.method("TFormAccounts", "CloseFormExecute", async function CloseFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "SearchField", (await $.wcall([$t3], "copy", [(await $.wv([$t3], "Name", C, false)), 5, (await $.wcall([$t3], "length", [(await $.wv([$t3], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t4 = (await $.wcall([$t3], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t3], "XDBGridAccounts", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromCurrent", C, false)), (await $.wv([$t3, $t4], "srForward", C, false))])], C))))) {
        if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromBeginning", C, false))])], C))))) {
          await $.stmt((await $.wcall([$t3, $t4], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbOK", C, false))], 0], C)));
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
  await $.set(C, "v_AccNo", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["ACC_NO"])), "AsString")));
  await $.set(C, "v_KliID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "EditACC_NOKeyPress", async function EditACC_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "EditACC_NO_SEARCHKeyPress", async function EditACC_NO_SEARCHKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounts", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditACC_NO_SEARCH")), "Clear", []);
  await $.mcall((await $.v(C, "EditACC_NO")), "Clear", []);
  await $.mcall((await $.v(C, "EditName")), "Clear", []);
  if ($.truthy($.eq((await $.v(C, "v_reoprt_code")), true))) {
    await $.set(C, "id1", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["ID"])), "AsInteger")));
    await $.set(C, "kli_id1", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  }
  if ($.truthy($.eq((await $.v(C, "v_reoprt_code")), false))) {
    await $.set(C, "id2", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["ID"])), "AsInteger")));
    await $.set(C, "kli_id2", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  }
  await $.stmt((await $.call(C, "ReportCode", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormAccounts", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_INSERT")))))) {
    await $.set(C, "v_AccNo", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["ACC_NO"])), "AsString")));
    await $.set(C, "v_KliID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["KLI_ID"])), "AsInteger")));
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
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Locate", ["ACC_NO", (await $.v(C, "v_AccNO")), []])));
  }
  await $.mcall((await $.v(C, "EditACC_NO_SEARCH")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "XDBGridAccountsDblClick", async function XDBGridAccountsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_AccNo", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["ACC_NO"])), "AsString")));
  await $.set(C, "v_KliID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  await $.mcall((await $.v(C, "FormAccounts")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounts", "XDBGridAccountsTitleClick", async function XDBGridAccountsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t5 = (await $.wobj(C, "TransactionDataModule"));
    const $t6 = (await $.wv([$t5], "ODS_Account", C, false));
    await $.stmt($.wcall([$t5, $t6], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t5, $t6], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t5, $t6], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t5, $t6], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t5, $t6], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  return U;
}

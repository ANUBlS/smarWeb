// Generated from CurrectionUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CurrectionUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExpDataModuleUnit", "DBCtrls", "StdCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "OracleData", "sboapiDataModuleImpl", "SearchEdit", "Buttons", "ComCtrls", "DB", "XDBGrids", "ExpUnitImpl", "ExpressManagerImpl"]);
  const C = [U];
  U.defClass("ESearchError", "Exception", {}, {});
  U.defClass("TFormCurrection", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbsearchwhere": {"name": "CBSearchWhere", "type": "TDBLookupComboBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "dbgr": {"name": "DbGr", "type": "TXDBGrid"}}, {});
  U.init(async () => {
    U.var_("FormCurrection", null, "TFormCurrection");
  });
  U.method("TFormCurrection", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCurrection", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  L0["searchvalue"] = (await $.mv((await $.v(C, "Edit1")), "Text"));
  if ($.truthy($.eq(L0["searchvalue"], ""))) {
    if ($.truthy($.not((await $.v(C, "Visible"))))) {
      await $.stmt($.call(C, "Show", []));
      await $.mcall((await $.v(C, "Edit1")), "SetFocus", []);
      await $.mcall((await $.v(C, "Edit1")), "SelectAll", []);
      return L0.result;
    } else {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
  }
  {
    const $t1 = (await $.v(C, "ExpressFrom"));
    await $.mcall((await $.mv((await $.wv([$t1], "DbGr", C, false)), "SelectedRows")), "Clear", []);
    await $.wset([$t1], "FieldToSearch", (await $.mv((await $.wv([$t1], "CBSearchWhere", C, false)), "KeyValue")), { get: async () => L0["fieldtosearch"], set: async (v) => { L0["fieldtosearch"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1], "FindNextRecord", [(await $.mv((await $.mv((await $.wv([$t1], "DbGr", C, false)), "DataSource")), "DataSet")), (await $.wv([$t1], "FieldToSearch", { get: async () => L0["fieldtosearch"], set: async (v) => { L0["fieldtosearch"] = v; }, local: true }, false)), (await $.wv([$t1], "SearchValue", { get: async () => L0["searchvalue"], set: async (v) => { L0["searchvalue"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCurrection", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı Tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t2 = (L0["dataset"]);
    await $.wset([$t2], "Result", (await $.wcall([$t2], "SearchRecord", [(await $.wv([$t2], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t2], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t2], "srFromCurrent", C, false)), (await $.wv([$t2], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t2], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t2], "MessageDlg", [$.add($.add((await $.wv([$t2], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t2], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t2], "mtInformation", C, false)), [(await $.wv([$t2], "mbNo", C, false)), (await $.wv([$t2], "mbYes", C, false))], 0], C)), (await $.wv([$t2], "mrYes", C, false))))) {
        await $.wset([$t2], "Result", (await $.wcall([$t2], "SearchRecord", [(await $.wv([$t2], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t2], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t2], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t2], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t2], "MessageDlg", [(await $.wv([$t2], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t2], "mtInformation", C, false)), [(await $.wv([$t2], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TFormCurrection", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormCurrection", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

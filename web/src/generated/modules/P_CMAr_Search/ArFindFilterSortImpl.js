// Generated from ArFindFilterSortImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArFindFilterSortImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Buttons", "Oracle", "OracleData", "DB", "DBGridEh", "ArCommonDecls", "ArSFDataModuleImpl"]);
  const C = [U];
  U.defClass("ESearchError", "Exception", {}, {});
  U.defClass("TFFSForm", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "cbsearchwhere": {"name": "CBSearchWhere", "type": "TDBLookupComboboxEh"}, "cmbboxfindwhat": {"name": "CmbBoxFindWhat", "type": "TComboBox"}, "bitbtnfindnext": {"name": "BitBtnFindNext", "type": "TBitBtn"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FFSForm", null, "TFFSForm");
  });
  U.method("TFFSForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı Tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = (L0["dataset"]);
    await $.wset([$t1], "Result", (await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t1], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromCurrent", C, false)), (await $.wv([$t1], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t1], "MessageDlg", [$.add($.add((await $.wv([$t1], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t1], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbNo", C, false)), (await $.wv([$t1], "mbYes", C, false))], 0], C)), (await $.wv([$t1], "mrYes", C, false))))) {
        await $.wset([$t1], "Result", (await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t1], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t1], "MessageDlg", [(await $.wv([$t1], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TFFSForm", "FindRecord", async function FindRecord(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "fieldtosearch": '', "searchvalue": ''};
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "CmbBoxFindWhat")), "Text")));
  {
    const $t2 = (await $.v(C, "Edit1"));
    await $.wset([$t2], "Text", (await $.wcall([$t2], "StringReplace", [(await $.wv([$t2], "Text", C, false)), "i", "`", [(await $.wv([$t2], "rfReplaceAll", C, false))]], C)), C);
    await $.wset([$t2], "Text", (await $.wcall([$t2], "StringReplace", [(await $.wv([$t2], "Text", C, false)), "I", "`", [(await $.wv([$t2], "rfReplaceAll", C, false))]], C)), C);
    await $.wset([$t2], "Text", (await $.wcall([$t2], "StringReplace", [(await $.wv([$t2], "Text", C, false)), "İ", "`", [(await $.wv([$t2], "rfReplaceAll", C, false))]], C)), C);
    await $.wset([$t2], "Text", (await $.wcall([$t2], "StringReplace", [(await $.wv([$t2], "Text", C, false)), "I", "`", [(await $.wv([$t2], "rfReplaceAll", C, false))]], C)), C);
    await $.wset([$t2], "Text", (await $.wcall([$t2], "StringReplace", [(await $.wv([$t2], "Text", C, false)), "ı", "`", [(await $.wv([$t2], "rfReplaceAll", C, false))]], C)), C);
  }
  L0["searchvalue"] = (await $.mv((await $.v(C, "Edit1")), "Text"));
  if ($.truthy($.eq(L0["searchvalue"], ""))) {
    if ($.truthy($.not((await $.v(C, "Visible"))))) {
      await $.stmt($.call(C, "Show", []));
      await $.mcall((await $.v(C, "CmbBoxFindWhat")), "SetFocus", []);
      await $.mcall((await $.v(C, "CmbBoxFindWhat")), "SelectAll", []);
      return L0.result;
    } else {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "CommonDBGrid")), "SelectedRows")), "Clear", []);
  L0["fieldtosearch"] = (await $.mv((await $.v(C, "CBSearchWhere")), "KeyValue"));
  if ($.truthy($.eq(L0["fieldtosearch"], "NAME"))) {
    L0["fieldtosearch"] = "INAME";
  }
  if ($.truthy((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])))) {
    {
      const $t3 = (await $.mv((await $.v(C, "CmbBoxFindWhat")), "Items"));
      if ($.truthy($.eq((await $.wcall([$t3], "IndexOf", [(await $.wv([$t3], "SearchValue", { get: async () => L0["searchvalue"], set: async (v) => { L0["searchvalue"] = v; }, local: true }, false))], C)), (-(1))))) {
        await $.stmt((await $.wcall([$t3], "Add", [(await $.wv([$t3], "SearchValue", { get: async () => L0["searchvalue"], set: async (v) => { L0["searchvalue"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFFSForm", "BitBtnFindNextClick", async function BitBtnFindNextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "FindRecord", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFFSForm", "CmbBoxFindWhatKeyPress", async function CmbBoxFindWhatKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.v(C, "BitBtnFindNext")), "Click", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFFSForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFFSForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFFSForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ArSFDataModule", (await $.mcall((await $.v(C, "TArSFDataModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFFSForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ArSFDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["sfindfirst"] = "FindFirst";
  L0["sfindnext"] = "FindNext";
  if ($.truthy($.eq(L0["s"], L0["sfindfirst"]))) {
    await $.mcall((await $.v(C, "FFSForm")), "Show", []);
    await $.mcall((await $.mv((await $.v(C, "FFSForm")), "CmbBoxFindWhat")), "SetFocus", []);
    await $.mcall((await $.mv((await $.v(C, "FFSForm")), "CmbBoxFindWhat")), "SelectAll", []);
  } else {
    if ($.truthy($.eq(L0["s"], L0["sfindnext"]))) {
      await $.mcall((await $.v(C, "FFSForm")), "FindRecord", []);
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFFSForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FFSForm", (await $.mcall((await $.v(C, "TFFSForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

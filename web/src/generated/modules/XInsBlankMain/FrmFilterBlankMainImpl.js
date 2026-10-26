// Generated from FrmFilterBlankMainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmFilterBlankMainImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "ComCtrls", "DBCtrls", "DB", "OracleData", "Buttons", "BlankMainImpl", "sboapiDataModuleimpl", "BlankDMImpl"]);
  const C = [U];
  U.defClass("TFrmFilterBlankMain", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "cbsearchwhere": {"name": "CBSearchWhere", "type": "TDBLookupComboBox"}, "cmbboxfindwhat": {"name": "CmbBoxFindWhat", "type": "TComboBox"}}, {});
  U.init(async () => {
    U.var_("FrmFilterBlankMain", null, "TFrmFilterBlankMain");
  });
  U.method("TFrmFilterBlankMain", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmFilterBlankMain", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmFilterBlankMain", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmFilterBlankMain", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  L0["searchfield"] = (await $.call(C, "copy", [(await $.mv((await $.v(C, "CBSearchWhere")), "KeyValue")), 5, (await $.call(C, "length", [(await $.v(C, "Name"))]))]));
  {
    const $t1 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.v(C, "BlankDM")), "DSFullContarct"))]));
    if ($.truthy($.not((await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1], "CmbBoxFindWhat", C, false)), "Text")), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromCurrent", C, false)), (await $.wv([$t1], "srForward", C, false))])], C))))) {
      if ($.truthy($.eq((await $.wcall([$t1], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbNo", C, false)), (await $.wv([$t1], "mbYes", C, false))], 0], C)), (await $.wv([$t1], "mrYes", C, false))))) {
        if ($.truthy($.not((await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1], "CmbBoxFindWhat", C, false)), "Text")), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromBeginning", C, false))])], C))))) {
          await $.stmt((await $.wcall([$t1], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbOK", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmFilterBlankMain", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
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
  U.method("TFrmFilterBlankMain", "FindRecord", async function FindRecord(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "fieldtosearch": '', "searchvalue": ''};
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin!";
  L0["searchvalue"] = (await $.mv((await $.v(C, "CmbBoxFindWhat")), "Text"));
  if ($.truthy($.eq(L0["searchvalue"], ""))) {
    if ($.truthy($.not((await $.v(C, "Visible"))))) {
      await $.stmt($.call(C, "Show", []));
      await $.mcall((await $.v(C, "CmbBoxFindWhat")), "SetFocus", []);
      await $.mcall((await $.v(C, "CmbBoxFindWhat")), "SelectAll", []);
      return L0.result;
    } else {
      L0["fieldtosearch"] = (await $.mv((await $.v(C, "CBSearchWhere")), "KeyValue"));
    }
  }
  if ($.truthy((await $.call(C, "FindNextRecord", [(await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), L0["fieldtosearch"], L0["searchvalue"]])))) {
    {
      const $t3 = (await $.mv((await $.v(C, "CmbBoxFindWhat")), "Items"));
      if ($.truthy($.eq((await $.wcall([$t3], "IndexOf", [(await $.wv([$t3], "SearchValue", { get: async () => L0["searchvalue"], set: async (v) => { L0["searchvalue"] = v; }, local: true }, false))], C)), (-(1))))) {
        await $.stmt((await $.wcall([$t3], "Add", [(await $.wv([$t3], "SearchValue", { get: async () => L0["searchvalue"], set: async (v) => { L0["searchvalue"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmFilterBlankMain", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

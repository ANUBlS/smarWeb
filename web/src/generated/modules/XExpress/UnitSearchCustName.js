// Generated from UnitSearchCustName.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitSearchCustName", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "OracleData", "ExpDataModuleUnit", "ExpUnitNewImpl"]);
  const C = [U];
  U.defClass("TFormSearchCustName", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "editlastname": {"name": "EditLastName", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "editsoname": {"name": "EditSoName", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("FormSearchCustName", null, "TFormSearchCustName");
  });
  U.method("TFormSearchCustName", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpFormNew"));
    {
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "DBGrid1", C, false)), "DataSource")), "DataSet"));
      { const $t3 = (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t3, 1)) {
          await $.mset((await $.wv([$t1, $t2], "RadioGroup1", C, false)), "ItemIndex", 1);
          if ($.truthy($.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t1, $t2], "RadioButton1", C, false)), "Checked", (await $.wv([$t1, $t2], "true", C, false)));
          } else {
            await $.mset((await $.wv([$t1, $t2], "RadioButton2", C, false)), "Checked", (await $.wv([$t1, $t2], "true", C, false)));
          }
          await $.mset((await $.wv([$t1, $t2], "EditPINCodeI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["passpin"], C)), "AsString")));
          await $.mset((await $.wv([$t1, $t2], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["doc_type"], C)), "AsInteger")));
          await $.mset((await $.wv([$t1, $t2], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["passer"], C)), "AsString")));
          await $.mset((await $.wv([$t1, $t2], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["paspnum"], C)), "AsString")));
        }
        else if ($.eq($t3, 2)) {
          await $.mset((await $.wv([$t1, $t2], "RadioGroup1", C, false)), "ItemIndex", 2);
          if ($.truthy($.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t1, $t2], "RadioButton1", C, false)), "Checked", (await $.wv([$t1, $t2], "true", C, false)));
          } else {
            await $.mset((await $.wv([$t1, $t2], "RadioButton2", C, false)), "Checked", (await $.wv([$t1, $t2], "true", C, false)));
          }
          await $.mset((await $.wv([$t1, $t2], "EditPINCodeI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["passpin"], C)), "AsString")));
          await $.mset((await $.wv([$t1, $t2], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["doc_type"], C)), "AsInteger")));
          await $.mset((await $.wv([$t1, $t2], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["passer"], C)), "AsString")));
          await $.mset((await $.wv([$t1, $t2], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["paspnum"], C)), "AsString")));
        }
        else if ($.eq($t3, 4)) {
          await $.mset((await $.wv([$t1, $t2], "RadioGroup1", C, false)), "ItemIndex", 0);
          if ($.truthy($.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t1, $t2], "RadioButton1", C, false)), "Checked", (await $.wv([$t1, $t2], "true", C, false)));
          } else {
            await $.mset((await $.wv([$t1, $t2], "RadioButton2", C, false)), "Checked", (await $.wv([$t1, $t2], "true", C, false)));
          }
          await $.mset((await $.wv([$t1, $t2], "EditPINCodeI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["passpin"], C)), "AsString")));
          await $.mset((await $.wv([$t1, $t2], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["doc_type"], C)), "AsInteger")));
          await $.mset((await $.wv([$t1, $t2], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["passer"], C)), "AsString")));
          await $.mset((await $.wv([$t1, $t2], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["paspnum"], C)), "AsString")));
        }
      }
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearchCustName", "EditLastNameExit", async function EditLastNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearchCustName", "EditLastNameKeyPress", async function EditLastNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormSearchCustName", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null, "grid": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t4 = L0["sender"];
    await $.wset([$t4], "SearchField", (await $.wcall([$t4], "copy", [(await $.wv([$t4], "Name", C, false)), 5, (await $.wcall([$t4], "length", [(await $.wv([$t4], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t5 = (await $.wcall([$t4], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t4], "DBGrid1", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t4, $t5], "SearchRecord", [(await $.wv([$t4, $t5], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t4, $t5], "Text", C, false)), $.add((await $.wv([$t4, $t5], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t4, $t5], "srFromCurrent", C, false)), (await $.wv([$t4, $t5], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t4, $t5], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlasın?"), (await $.wv([$t4, $t5], "mtInformation", C, false)), [(await $.wv([$t4, $t5], "mbNo", C, false)), (await $.wv([$t4, $t5], "mbYes", C, false))], 0], C)), (await $.wv([$t4, $t5], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t4, $t5], "SearchRecord", [(await $.wv([$t4, $t5], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t4, $t5], "Text", C, false)), $.add((await $.wv([$t4, $t5], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t4, $t5], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t4, $t5], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t4, $t5], "mtInformation", C, false)), [(await $.wv([$t4, $t5], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearchCustName", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "ExpDataModule"));
    const $t7 = (await $.wv([$t6], "SendDataSet", C, false));
    await $.stmt($.wcall([$t6, $t7], "Close", [], C));
    await $.mcall((await $.wv([$t6, $t7], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t6, $t7], "SQL", C, false)), "Add", ["SELECT * FROM EXP_CUSTSEND"])));
    await $.stmt($.wcall([$t6, $t7], "Open", [], C));
  }
  {
    const $t8 = (await $.v(C, "ExpDataModule"));
    const $t9 = (await $.wv([$t8], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t8, $t9], "Close", [], C));
    await $.mcall((await $.wv([$t8, $t9], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "SQL", C, false)), "Add", ["SELECT * FROM EXP_CUSTSEND"])));
    await $.stmt($.wcall([$t8, $t9], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

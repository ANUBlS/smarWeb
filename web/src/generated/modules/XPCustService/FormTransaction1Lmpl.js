// Generated from FormTransaction1Lmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormTransaction1Lmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "XFSCtrls", "CurrencyEdit", "ExtCtrls", "DBCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "UnitDataModPCustService", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormTransaction1", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "dblookupceh_contrsname1": {"name": "DBLookupCEh_contrsName1", "type": "TDBLookupComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobo_filial": {"name": "DBLookupComboBo_filial", "type": "TDBLookupComboBox"}, "edit_description": {"name": "Edit_description", "type": "TEdit"}, "dblookupcomboboxeh_description": {"name": "DBLookupComboboxEh_description", "type": "TDBLookupComboboxEh"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("FormTransaction1", null, "TFormTransaction1");
  });
  U.method("TFormTransaction1", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_ostat": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModPCustService"));
    if ($.truthy($.gt((await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")), 0))) {
      await $.mset((await $.wv([$t1], "XFBitBtn1", C, false)), "Enabled", (await $.wv([$t1], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "CurrencyEdit1Click", async function CurrencyEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "CurrencyEdit1KeyPress", async function CurrencyEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction1", "CurrencyEdit2Click", async function CurrencyEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "CurrencyEdit2KeyPress", async function CurrencyEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction1", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "DBLookupComboboxEh_descriptionChange", async function DBLookupComboboxEh_descriptionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit_description")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")));
  }
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction1", "Edit_descriptionExit", async function Edit_descriptionExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_description")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "Edit_descriptionKeyPress", async function Edit_descriptionKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction1", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormTransaction1", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBo_filial")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "XFBitBtn1")), "Enabled", false);
  await $.mcall((await $.v(C, "Edit_description")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormTransaction1", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_contrs3")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_val")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction1", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", 0);
  await $.mset((await $.v(C, "DBLookupCEh_contrsName1")), "KeyValue", 1);
  await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
  await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "busp_id": 0, "v_ammount": 0, "v_lammount": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0.0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məbləğ daxil edilməyib  !"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OPG_BusProc")), "CallProcedure", ["ExecBProcess", [(await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProcID")), "AsInteger")), 0, 0, 0, 0, (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), "0", 0, (await $.mv((await $.v(C, "EditDescription")), "Text")), 0, (await $.mv((await $.v(C, "DBLookupCEh_contrsName1")), "KeyValue")), 0, 0, 0, 0, (await $.mv((await $.v(C, "DBLookupComboBo_filial")), "KeyValue")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))]])));
  await $.mcall((await $.v(C, "FormTransaction1")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction1", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

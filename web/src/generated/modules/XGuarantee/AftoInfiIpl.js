// Generated from AftoInfiIpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AftoInfiIpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DB", "OracleData", "ExtCtrls", "DBGridEh", "DBLookupEh", "DBGridEhGrouping", "GridsEh", "CommonDecls", "Menus", "ImgList", "DataMGuarantee", "sboapiDataModuleImpl", "GuaranteeMgrImpl"]);
  const C = [U];
  U.defClass("TAfForm", "TForm", {"ods_avto_qizl": {"name": "ods_avto_qizl", "type": "TOracleDataSet"}, "ods_avto_qizlgur_type": {"name": "ods_avto_qizlGUR_TYPE", "type": "TFloatField"}, "ods_avto_qizlpar1": {"name": "ods_avto_qizlPAR1", "type": "TWideStringField"}, "ods_avto_qizlpar2": {"name": "ods_avto_qizlPAR2", "type": "TWideStringField"}, "ods_avto_qizlpar3": {"name": "ods_avto_qizlPAR3", "type": "TWideStringField"}, "ods_avto_qizlpar4": {"name": "ods_avto_qizlPAR4", "type": "TWideStringField"}, "ods_avto_qizlpar5": {"name": "ods_avto_qizlPAR5", "type": "TWideStringField"}, "ods_avto_qizlpar6": {"name": "ods_avto_qizlPAR6", "type": "TWideStringField"}, "ods_avto_qizlpar7": {"name": "ods_avto_qizlPAR7", "type": "TWideStringField"}, "ods_avto_qizlpar8": {"name": "ods_avto_qizlPAR8", "type": "TWideStringField"}, "ods_avto_qizlpar9": {"name": "ods_avto_qizlPAR9", "type": "TWideStringField"}, "ods_avto_qizlpar10": {"name": "ods_avto_qizlPAR10", "type": "TWideStringField"}, "ods_avto_qizlpar11": {"name": "ods_avto_qizlPAR11", "type": "TWideStringField"}, "ods_avto_qizlpar12": {"name": "ods_avto_qizlPAR12", "type": "TWideStringField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "ods_goldstandart": {"name": "Ods_goldstandart", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "label11": {"name": "Label11", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "ods_goldstandartid": {"name": "Ods_goldstandartID", "type": "TFloatField"}, "ods_goldstandartstandart": {"name": "Ods_goldstandartSTANDART", "type": "TFloatField"}, "ods_goldstandartdescription": {"name": "Ods_goldstandartDESCRIPTION", "type": "TWideStringField"}, "ods_goldstandartprice": {"name": "Ods_goldstandartPRICE", "type": "TFloatField"}, "ods_goldstandartpercent": {"name": "Ods_goldstandartPERCENT", "type": "TFloatField"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "ods_gold": {"name": "ods_gold", "type": "TOracleDataSet"}, "dsrc_gold": {"name": "dsrc_gold", "type": "TDataSource"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "button2": {"name": "Button2", "type": "TButton"}, "ods_goldsum": {"name": "ods_goldsum", "type": "TOracleDataSet"}, "ods_goldsumlikvid": {"name": "ods_goldsumLIKVID", "type": "TFloatField"}, "ods_goldsumprice": {"name": "ods_goldsumPRICE", "type": "TFloatField"}, "ods_goldsumname": {"name": "ods_goldsumNAME", "type": "TWideStringField"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "stirisilmk1": {"name": "Stirisilmk1", "type": "TMenuItem"}, "ods_goldstandartstandart1": {"name": "Ods_goldstandartSTANDART1", "type": "TWideStringField"}, "ods_sum": {"name": "ods_sum", "type": "TOracleDataSet"}, "ods_sumlik": {"name": "ods_sumLIK", "type": "TFloatField"}, "ods_sumbaz": {"name": "ods_sumBAZ", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("AfForm", null, "TAfForm");
  });
  U.method("TAfForm", "FormClear", async function FormClear(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBEditEh1")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Value", (-(1)));
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit2")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh6")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh3")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh8")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh4")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh5")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh10")), "Clear", []);
  await $.mcall((await $.v(C, "DBEditEh7")), "Clear", []);
  await $.mcall((await $.v(C, "Memo1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit3")), "Clear", []);
  await $.mset((await $.v(C, "DBEditEh10")), "Value", 0);
  await $.mset((await $.v(C, "DBEditEh5")), "Enabled", false);
  await $.mset((await $.v(C, "DBEditEh10")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (-(1)))))), async () => ($.eq((await $.mv((await $.v(C, "DBEditEh5")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "showmessage", [" Məlumat tam doldurulmayıb  !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "FieldByName", ["cardid"])), "AsInteger")), 0))) {
    L0["count"] = 1;
  } else {
    L0["count"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "FieldByName", ["cardid"])), "AsInteger"));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["Guarantee_AddGold", [(await $.v(C, "Get_SelectedCrdID")), L0["count"], (await $.mv((await $.v(C, "DBEditEh1")), "Text")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Value")), (await $.mv((await $.v(C, "edit1")), "Text")), (await $.mv((await $.v(C, "Edit2")), "Text")), (await $.mv((await $.v(C, "DBEditEh6")), "Text")), (await $.mv((await $.v(C, "DBEditEh3")), "Text")), (await $.mv((await $.v(C, "DBEditEh8")), "Text")), (await $.mv((await $.v(C, "DBEditEh4")), "Text")), (await $.mv((await $.v(C, "DBEditEh5")), "Text")), (await $.mv((await $.v(C, "DBEditEh10")), "Text")), (await $.mv((await $.v(C, "DBEditEh7")), "Text")), (await $.mv((await $.v(C, "Memo1")), "Text")), (await $.mv((await $.v(C, "Edit3")), "Text"))]])));
  await $.mcall((await $.v(C, "ods_gold")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_gold")), "SetVariable", ["v_crid", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.stmt((await $.mcall((await $.v(C, "ods_gold")), "SetVariable", ["v_cardid", L0["count"]])));
  await $.mcall((await $.v(C, "ods_gold")), "Open", []);
  await $.mcall((await $.v(C, "ods_sum")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_sum")), "SetVariable", ["v_crid", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.mcall((await $.v(C, "ods_sum")), "Close", []);
  await $.mset((await $.mv((await $.v(C, "FrmGuarante")), "DBNumberEditEh5")), "Value", (await $.mv((await $.v(C, "ods_sumBAZ")), "AsFloat")));
  await $.mset((await $.mv((await $.v(C, "FrmGuarante")), "DBNumberEditEh1")), "Value", (await $.mv((await $.v(C, "ods_sumLIK")), "AsFloat")));
  await $.stmt((await $.call(C, "FormClear", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "FieldByName", ["cardid"])), "AsInteger")), 0))) {
    L0["count"] = 1;
  } else {
    L0["count"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "FieldByName", ["cardid"])), "AsInteger"));
  }
  await $.mcall((await $.v(C, "ods_goldsum")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_goldsum")), "SetVariable", ["v_crid", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.stmt((await $.mcall((await $.v(C, "ods_goldsum")), "SetVariable", ["v_cardid", L0["count"]])));
  await $.mcall((await $.v(C, "ods_goldsum")), "Open", []);
  await $.mset((await $.mv((await $.v(C, "FrmGuarante")), "DBEditEh8")), "Text", (await $.mv((await $.v(C, "ods_goldsumname")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "FrmGuarante")), "DBNumberEditEh5")), "Text", (await $.mv((await $.v(C, "ods_goldsumPRICE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "FrmGuarante")), "DBNumberEditEh1")), "Text", (await $.mv((await $.v(C, "ods_goldsumLIKVID")), "AsString")));
  await $.mcall((await $.v(C, "AfForm")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "DBEditEh10Change", async function DBEditEh10Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBEditEh5")), "text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEditEh10")), "text")), "")))))) {
    await $.mset((await $.v(C, "DBEditEh7")), "Text", $.sub((await $.mv((await $.v(C, "DBEditEh5")), "Value")), (await $.mv((await $.v(C, "DBEditEh10")), "Value"))));
    await $.mset((await $.v(C, "DBEditEh3")), "Text", $.mul((await $.mv((await $.v(C, "DBEditEh7")), "Value")), (await $.mv((await $.v(C, "edit2")), "text"))));
    await $.mset((await $.v(C, "DBEditEh8")), "Text", (await $.call(C, "inttostr", [(await $.call(C, "round", [$.fdiv(($.mul((await $.mv((await $.v(C, "DBEditEh3")), "Value")), 100)), 80)]))])));
    if ($.truthy($.lt((await $.mv((await $.v(C, "DBEditEh7")), "Value")), 0))) {
      await $.mset((await $.v(C, "DBEditEh7")), "Color", (await $.v(C, "clred")));
    } else {
      await $.mset((await $.v(C, "DBEditEh7")), "Color", (await $.v(C, "clGray")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "DBEditEh10KeyPress", async function DBEditEh10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), (await $.v(C, "decimalseparator")), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAfForm", "DBEditEh4KeyPress", async function DBEditEh4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), (await $.v(C, "decimalseparator")), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAfForm", "DBEditEh5Change", async function DBEditEh5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBEditEh7")), "Clear", []);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBEditEh10")), "text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEditEh5")), "text")), "")))))) {
    await $.mset((await $.v(C, "DBEditEh7")), "Text", $.sub((await $.mv((await $.v(C, "DBEditEh5")), "Value")), (await $.mv((await $.v(C, "DBEditEh10")), "Value"))));
    await $.mset((await $.v(C, "DBEditEh3")), "Text", $.mul((await $.mv((await $.v(C, "DBEditEh7")), "Value")), (await $.mv((await $.v(C, "edit2")), "text"))));
    await $.mset((await $.v(C, "DBEditEh8")), "Text", (await $.call(C, "inttostr", [(await $.call(C, "round", [$.fdiv(($.mul((await $.mv((await $.v(C, "DBEditEh3")), "Value")), 100)), 80)]))])));
    if ($.truthy($.lt((await $.mv((await $.v(C, "DBEditEh7")), "Value")), 0))) {
      await $.mset((await $.v(C, "DBEditEh7")), "Color", (await $.v(C, "clred")));
    } else {
      await $.mset((await $.v(C, "DBEditEh7")), "Color", (await $.v(C, "clGray")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "DBEditEh5KeyPress", async function DBEditEh5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), (await $.v(C, "decimalseparator")), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAfForm", "DBEditEh7KeyPress", async function DBEditEh7KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), (await $.v(C, "decimalseparator")), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAfForm", "DBLookupComboboxEh1CloseUp", async function DBLookupComboboxEh1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "DBEditEh5")), "Enabled", true);
  await $.mset((await $.v(C, "DBEditEh10")), "Enabled", true);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "Ods_goldstandartPERCENT")), "AsString")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.v(C, "Ods_goldstandartPRICE")), "AsString")));
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBEditEh7")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBEditEh3")), "Text", $.mul((await $.mv((await $.v(C, "DBEditEh7")), "Value")), (await $.mv((await $.v(C, "edit2")), "text"))));
    await $.mset((await $.v(C, "DBEditEh8")), "Text", (await $.call(C, "inttostr", [(await $.call(C, "round", [$.add($.fdiv(($.mul((await $.mv((await $.v(C, "DBEditEh3")), "Value")), (await $.mv((await $.v(C, "edit1")), "text")))), 100), ($.mul($.fdiv(($.mul((await $.mv((await $.v(C, "DBEditEh3")), "Value")), (await $.mv((await $.v(C, "edit1")), "text")))), 100), 0.44)))]))])));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TAfForm", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), (await $.v(C, "decimalseparator")), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAfForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FormClear", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAfForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEditEh7")), "Color", (await $.v(C, "clGray")));
  await $.mset((await $.v(C, "DBEditEh3")), "Color", (await $.v(C, "clGray")));
  await $.mset((await $.v(C, "DBEditEh8")), "Color", (await $.v(C, "clGray")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEditEh5")), "Enabled", false);
  await $.mset((await $.v(C, "DBEditEh10")), "Enabled", false);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "FieldByName", ["cardid"])), "AsInteger")), 0))) {
    L0["count"] = 1;
  } else {
    L0["count"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "FieldByName", ["cardid"])), "AsInteger"));
  }
  await $.mcall((await $.v(C, "ods_gold")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_gold")), "SetVariable", ["v_crid", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.stmt((await $.mcall((await $.v(C, "ods_gold")), "SetVariable", ["v_cardid", L0["count"]])));
  await $.mcall((await $.v(C, "ods_gold")), "Open", []);
  await $.mcall((await $.v(C, "ods_avto_qizl")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_avto_qizl")), "SetVariable", ["v_gur_type", (await $.mv((await $.mv((await $.v(C, "GurDm")), "pledgsortsGUR_TYPE")), "AsInteger"))])));
  await $.mcall((await $.v(C, "ods_avto_qizl")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAfForm", "Stirisilmk1Click", async function Stirisilmk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["delete_gold_lombard", [(await $.mv((await $.mcall((await $.v(C, "ods_gold")), "FieldByName", ["id"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "ods_gold")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

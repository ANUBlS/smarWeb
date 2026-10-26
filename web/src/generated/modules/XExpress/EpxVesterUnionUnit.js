// Generated from EpxVesterUnionUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EpxVesterUnionUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "XFSCtrls", "DBGridEh", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "CMCurrencyEdit", "CMDBSearchEdit", "ExpDataModuleUnit", "OpenAccountImpl", "UnitPaymentsCredit", "ExpUnitImpl", "ExpCustomersTypeUnit", "ExpressManagerImpl", "ExpVesterPrintUnit"]);
  const C = [U];
  U.defClass("TFormVesterUnion", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfilial": {"name": "XFilial", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "editfilial": {"name": "EditFilial", "type": "TEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "transtype": {"name": "Transtype", "type": "TComboBox"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "amountedit": {"name": "AmountEdit", "type": "TCMCurrencyEdit"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "priceamountedit": {"name": "PriceAmountEdit", "type": "TCMCurrencyEdit"}, "sumamountedit": {"name": "SumAmountEdit", "type": "TCMCurrencyEdit"}, "dbcountrname": {"name": "DBCountrName", "type": "TDBLookupComboboxEh"}, "editfrontname": {"name": "EditFrontname", "type": "TEdit"}, "editcustname": {"name": "EditCustName", "type": "TEdit"}, "accnameedit": {"name": "AccNameEdit", "type": "TEdit"}, "ostatamountedit": {"name": "OstatAmountEdit", "type": "TCMCurrencyEdit"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "valname": {"name": "Valname", "type": "TComboBox"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "dateedit": {"name": "DateEdit", "type": "TDBDateTimeEditEh"}, "editcustid": {"name": "EditCustid", "type": "TCMSearchEdit"}, "equeamountedit": {"name": "EqueAmountEdit", "type": "TCMCurrencyEdit"}, "tpks": {"name": "TPKS", "type": "TDBLookupComboboxEh"}, "finsert": {"name": "FInsert", "type": "integer"}, "pexid": {"name": "pexid", "type": "integer"}, "poptype": {"name": "poptype", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FormVesterUnion", null, "TFormVesterUnion");
    U.var_("TransferAccno", 0, "integer");
  });
  U.method("TFormVesterUnion", "AccountOpen", async function AccountOpen(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "accno": ''};
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    await $.wset([$t1], "Accno", (await $.mcall((await $.wv([$t1], "EXPESSPAC", C, false)), "CallStringFunction", ["ExpAccountOpen", ["custid", (await $.mv((await $.wv([$t1], "EditCustid", C, false)), "Text")), "vfilial", (await $.mv((await $.wv([$t1], "EditFilial", C, false)), "Text")), "valname", (await $.mv((await $.wv([$t1], "Valname", C, false)), "Text"))]])), { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true });
    await $.mset((await $.wv([$t1], "AccNameEdit", C, false)), "Text", (await $.wv([$t1], "Accno", { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true }, false)));
    await $.mcall((await $.wv([$t1], "Accountid", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Accountid", C, false)), "SetVariable", ["accno", (await $.wv([$t1], "Accno", { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "Accountid", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSTenostat", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "ODSTenostat", C, false)), "SetVariable", ["accid", (await $.mv((await $.wv([$t1], "AccountidID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t1], "ODSTenostat", C, false)), "Open", []);
    await $.mset((await $.wv([$t1], "OstatAmountEdit", C, false)), "Value", (await $.mv((await $.wv([$t1], "ODSTenostatOSTAT", C, false)), "AsFloat")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormVesterUnion", "AmountEditChange", async function AmountEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ekv": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ekv"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "CallFloatFunction", ["AmountCompare", ["Amount", (await $.mv((await $.v(C, "AmountEdit")), "Value")), "valname", (await $.mv((await $.v(C, "Valname")), "Text"))]]));
  await $.mset((await $.v(C, "EqueAmountEdit")), "Value", L0["ekv"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "Transtype")), "ItemIndex")), 0)))) {
    await $.mset((await $.v(C, "SumAmountEdit")), "Value", (await $.mv((await $.v(C, "AmountEdit")), "Value")));
  } else {
    await $.mset((await $.v(C, "SumAmountEdit")), "Value", $.add((await $.mv((await $.v(C, "AmountEdit")), "Value")), (await $.mv((await $.v(C, "PriceAmountEdit")), "Value"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "ComboBox4Click", async function ComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "ComboBox4DropDown", async function ComboBox4DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "FormPaymentsCredit")), "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "EditDescriptionKeyDown", async function EditDescriptionKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormVesterUnion", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ekvusd": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ExpDataModule"));
    if ($.truthy($.eq((await $.wv([$t2], "FInsert", C, false)), 0))) {
      await $.mcall((await $.wv([$t2], "FilialDataSet", C, false)), "Close", []);
      { const $t3 = await $.iset((await $.mv((await $.wv([$t2], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t3 !== undefined) { await $.mset((await $.wv([$t2], "FilialDataSet", C, false)), "SQL", $t3); } }
      { const $t4 = await $.iset((await $.mv((await $.wv([$t2], "FilialDataSet", C, false)), "SQL")), [1], "where id=(select filialid from sba_objinf where sysuserid=uid)"); if ($t4 !== undefined) { await $.mset((await $.wv([$t2], "FilialDataSet", C, false)), "SQL", $t4); } }
      await $.mcall((await $.wv([$t2], "FilialDataSet", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "EditFilial", C, false)), "Text", (await $.mv((await $.wv([$t2], "FilialDataSetNAME", C, false)), "AsString")));
      await $.mset((await $.wv([$t2], "EditCustid", C, false)), "Text", (await $.wcall([$t2], "IntToStr", [(await $.mv((await $.wv([$t2], "OpenAccount", C, false)), "retrun_custid"))], C)));
      await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "SetVariable", ["custid", (await $.mv((await $.wv([$t2], "OpenAccount", C, false)), "retrun_custid"))])));
      await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "EditCustName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
      await $.mcall((await $.wv([$t2], "Exp_settingstype", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.wv([$t2], "poptype", C, false))])));
      await $.mcall((await $.wv([$t2], "Exp_settingstype", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "TPKS", C, false)), "KeyValue", (-(1)));
      await $.mset((await $.wv([$t2], "Transtype", C, false)), "ItemIndex", (-(1)));
      await $.mset((await $.wv([$t2], "Valname", C, false)), "Text", "");
      await $.mset((await $.wv([$t2], "DateEdit", C, false)), "Text", "");
      await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "Value", 0);
      await $.mset((await $.wv([$t2], "EqueAmountEdit", C, false)), "Value", 0);
      await $.mset((await $.wv([$t2], "PriceAmountEdit", C, false)), "Value", 0);
      await $.mset((await $.wv([$t2], "SumAmountEdit", C, false)), "Value", 0);
      await $.mset((await $.wv([$t2], "DBCountrName", C, false)), "Text", "");
      await $.mcall((await $.wv([$t2], "EditFrontname", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t2], "AccNameEdit", C, false)), "Clear", []);
      await $.mset((await $.wv([$t2], "OstatAmountEdit", C, false)), "Value", 0);
      await $.mset((await $.mv((await $.wv([$t2], "SpeedButton1", C, false)), "Font")), "Color", (await $.wv([$t2], "clRed", C, false)));
      await $.mset((await $.mv((await $.wv([$t2], "SpeedButton2", C, false)), "Font")), "Color", (await $.wv([$t2], "clRed", C, false)));
      await $.mcall((await $.wv([$t2], "EditDescription", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t2], "TPKS", C, false)), "SetFocus", []);
    } else {
      await $.mset((await $.wv([$t2], "EditFilial", C, false)), "Text", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetFILIALNAME", C, false)), "AsString")));
      await $.mcall((await $.wv([$t2], "Exp_settingstype", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetOPTYPE", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t2], "Exp_settingstype", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "TPKS", C, false)), "KeyValue", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetSETID", C, false)), "AsInteger")));
      await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "SetVariable", ["custid", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetKLIID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "EditCustid", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "FieldByName", ["id"])), "AsString")));
      await $.mset((await $.wv([$t2], "EditCustName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "CustDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
      await $.mset((await $.wv([$t2], "Valname", C, false)), "Text", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetVALNAME", C, false)), "AsString")));
      await $.mset((await $.wv([$t2], "DBCountrName", C, false)), "KeyValue", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetCOUNTRYID", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t2], "Transtype", C, false)), "ItemIndex", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetTRANSTYPE", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t2], "AmountEdit", C, false)), "Value", $.sub((await $.mv((await $.wv([$t2], "ExpBatchsDataSetAMOUNT", C, false)), "AsFloat")), (await $.mv((await $.wv([$t2], "ExpBatchsDataSetPRICEAMOUNT", C, false)), "AsFloat"))));
      await $.mset((await $.wv([$t2], "PriceAmountEdit", C, false)), "Value", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetPRICEAMOUNT", C, false)), "AsFloat")));
      await $.mset((await $.wv([$t2], "SumAmountEdit", C, false)), "Value", $.add((await $.mv((await $.wv([$t2], "AmountEdit", C, false)), "Value")), (await $.mv((await $.wv([$t2], "PriceAmountEdit", C, false)), "Value"))));
      await $.wset([$t2], "Ekvusd", (await $.mcall((await $.mv((await $.wv([$t2], "ExpDataModule", C, false)), "EXPESSPAC")), "CallFloatFunction", ["AmountCompare", ["Amount", (await $.mv((await $.wv([$t2], "AmountEdit", C, false)), "Value")), "valname", (await $.mv((await $.wv([$t2], "Valname", C, false)), "Text"))]])), { get: async () => L0["ekvusd"], set: async (v) => { L0["ekvusd"] = v; }, local: true });
      await $.mset((await $.wv([$t2], "EqueAmountEdit", C, false)), "Value", (await $.wv([$t2], "Ekvusd", { get: async () => L0["ekvusd"], set: async (v) => { L0["ekvusd"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t2], "DBCountrName", C, false)), "KeyValue", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetCOUNTRYID", C, false)), "AsVariant")));
      await $.wset([$t2], "pexid", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetEXPID", C, false)), "AsInteger")), C);
      await $.wset([$t2], "poptype", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetOPTYPE", C, false)), "AsInteger")), C);
      await $.mset((await $.wv([$t2], "EditFrontname", C, false)), "Text", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetBKLINAME", C, false)), "AsString")));
      await $.mcall((await $.wv([$t2], "AccDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "AccDataSet", C, false)), "SetVariable", ["ID", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t2], "AccDataSet", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "AccNameEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mcall((await $.wv([$t2], "ODSTenostat", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "ODSTenostat", C, false)), "SetVariable", ["accid", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t2], "ODSTenostat", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "OstatAmountEdit", C, false)), "Value", (await $.mv((await $.wv([$t2], "ODSTenostatOSTAT", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t2], "EditDescription", C, false)), "Text", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
      await $.wset([$t2], "TransferAccno", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetTRANSFERS_ACCNO", C, false)), "AsInteger")), C);
      if ($.truthy($.eq((await $.wv([$t2], "TransferAccno", C, false)), 1))) {
        await $.mset((await $.mv((await $.wv([$t2], "SpeedButton2", C, false)), "Font")), "Color", (await $.wv([$t2], "clBlue", C, false)));
      } else {
        await $.mset((await $.mv((await $.wv([$t2], "SpeedButton2", C, false)), "Font")), "Color", (await $.wv([$t2], "clRed", C, false)));
      }
      await $.mset((await $.wv([$t2], "DateEdit", C, false)), "Value", (await $.mv((await $.wv([$t2], "ExpBatchsDataSetRECDATE", C, false)), "AsVariant")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "PriceAmountEditChange", async function PriceAmountEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SumAmountEdit")), "Value", $.add((await $.mv((await $.v(C, "AmountEdit")), "Value")), (await $.mv((await $.v(C, "PriceAmountEdit")), "Value"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SpeedButton1")), "Font")), "Color")), (await $.v(C, "clRed"))))) {
    if ($.truthy($.gt(($.sub((await $.mv((await $.v(C, "EqueAmountEdit")), "Value")), 1000)), 0))) {
      await $.stmt($.call(C, "AccountOpen", []));
      await $.mset((await $.mv((await $.v(C, "SpeedButton1")), "Font")), "Color", (await $.v(C, "clBlue")));
    } else {
      if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Köçürmə məbləği 1000 usd ekvivalentindən kiçik olduğu üçün hesab aça bilmərsiz!!!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
        if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Əgər bu xəbərdarlığa baxmayaraq hesab açmaq istəyirsinisə onda Bəli əks halda İmtina düyməsini basın", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
          await $.stmt($.call(C, "AccountOpen", []));
          await $.mset((await $.mv((await $.v(C, "SpeedButton1")), "Font")), "Color", (await $.v(C, "clBlue")));
        } else {
          return L0.result;
        }
      }
    }
  } else {
    await $.mcall((await $.v(C, "AccNameEdit")), "Clear", []);
    await $.mset((await $.v(C, "OstatAmountEdit")), "Value", 0);
    await $.mset((await $.mv((await $.v(C, "SpeedButton1")), "Font")), "Color", (await $.v(C, "clRed")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.gt((await $.call(C, "length", [(await $.mv((await $.v(C, "AccNameEdit")), "Text"))])), 0)), async () => ($.gt((await $.mv((await $.v(C, "OstatAmountEdit")), "Value")), 0)))))) {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SpeedButton2")), "Font")), "Color")), (await $.v(C, "clRed"))))) {
      await $.set(C, "TransferAccno", 1);
      await $.mset((await $.mv((await $.v(C, "SpeedButton2")), "Font")), "Color", (await $.v(C, "clBlue")));
      await $.mset((await $.v(C, "OstatAmountEdit")), "Value", $.sub((await $.mv((await $.v(C, "OstatAmountEdit")), "Value")), (await $.mv((await $.v(C, "SumAmountEdit")), "Value"))));
    } else {
      await $.set(C, "TransferAccno", 0);
      await $.mset((await $.mv((await $.v(C, "SpeedButton2")), "Font")), "Color", (await $.v(C, "clRed")));
      await $.mset((await $.v(C, "OstatAmountEdit")), "Value", $.add((await $.mv((await $.v(C, "OstatAmountEdit")), "Value")), (await $.mv((await $.v(C, "SumAmountEdit")), "Value"))));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "AccNameEdit")), "Text")), ""))) {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Accountid")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Accountid")), "SetVariable", ["accno", (await $.mv((await $.v(C, "AccNameEdit")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Accountid")), "Open", []);
  if ($.truthy($.lt((await $.call(C, "trunc", [(await $.call(C, "integer", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "AccountidOPEN_DAT")), "AsVariant"))]))])), (await $.call(C, "trunc", [(await $.call(C, "integer", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsVariant"))]))]))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesab artıq mövcud olduğu üçün sənəd çapa verilmədi"])));
    return L0.result;
  }
  await $.set(C, "FormExpVesterPrint", (await $.mcall((await $.v(C, "TFormExpVesterPrint")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "FormExpVesterPrint")), "CustomerInfoDataSet")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FormExpVesterPrint")), "CustomerInfoDataSet")), "SetVariable", ["acc_id", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "AccountidID")), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "FormExpVesterPrint")), "CustomerInfoDataSet")), "Open", []);
  await $.mset((await $.mv((await $.v(C, "FormExpVesterPrint")), "DBLookupComboboxEh1")), "Text", "");
  await $.mcall((await $.v(C, "FormExpVesterPrint")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ptpks": '', "ptranstype": 0, "pvalname": '', "pamountedit": 0, "ppriceamountedit": 0, "pdbcountrname": null, "peditfrontname": '', "pcustid": 0, "pdescript": '', "pfilalname": '', "psetid": 0, "paccnameedit": '', "pdate": '', "pid": 0, "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "TPKS")), "Value"))])))) {
    await $.stmt((await $.call(C, "ShowMessage", ["TPKS-in növünü seçin!...."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Transtype")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatın növünü seçin!...."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Valname")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Valyutanı  seçin!...."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "AmountEdit")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Köçürmə məbləğini daxil edin!...."])));
    return L0.result;
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Transtype")), "ItemIndex")), 0)))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "PriceAmountEdit")), "Value")), 0))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Xidmət haqqını daxil edin!...."])));
      return L0.result;
    }
  }
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBCountrName")), "Value"))])))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ölkəni seçin!...."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditFrontname")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qarşı tərəfi daxil edin!...."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Transtype")), "ItemIndex")), 2))) {
    if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DateEdit")), "Value"))])))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Tarixi seçin!...."])));
      return L0.result;
    }
  }
  L0["pcustid"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditCustid")), "Text"))]));
  L0["psetid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "FieldByName", ["id"])), "AsInteger"));
  L0["paccnameedit"] = (await $.mv((await $.v(C, "AccNameEdit")), "Text"));
  L0["pvalname"] = (await $.mv((await $.v(C, "Valname")), "Text"));
  L0["pamountedit"] = (await $.mv((await $.v(C, "AmountEdit")), "Value"));
  L0["ppriceamountedit"] = (await $.mv((await $.v(C, "PriceAmountEdit")), "value"));
  L0["pfilalname"] = (await $.mv((await $.v(C, "EditFilial")), "Text"));
  L0["pdescript"] = (await $.mv((await $.v(C, "EditDescription")), "Text"));
  L0["pdbcountrname"] = (await $.mv((await $.v(C, "DBCountrName")), "KeyValue"));
  L0["peditfrontname"] = (await $.mv((await $.v(C, "EditFrontname")), "Text"));
  L0["ptranstype"] = (await $.mv((await $.v(C, "Transtype")), "ItemIndex"));
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DateEdit")), "Value"))])))) {
    L0["pdate"] = "";
  } else {
    L0["pdate"] = (await $.mv((await $.v(C, "DateEdit")), "Text"));
  }
  if ($.truthy($.eq((await $.v(C, "FInsert")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "CallProcedure", ["exp_vester_insert", ["v_id", L0["pid"], "v_exid", (await $.v(C, "pexid")), "v_kliid", L0["pcustid"], "v_optype", (await $.v(C, "poptype")), "v_setid", L0["psetid"], "v_accname", L0["paccnameedit"], "v_valname", L0["pvalname"], "v_amount", L0["pamountedit"], "v_priceamount", L0["ppriceamountedit"], "v_filname", L0["pfilalname"], "v_remit_inf", L0["pdescript"], "v_doc_country", L0["pdbcountrname"], "v_bkliname", L0["peditfrontname"], "v_transtype", L0["ptranstype"], "v_transaccno", (await $.v(C, "TransferAccno")), "v_date", L0["pdate"]]])));
    L0["pid"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "GetParameter", [0]));
  } else {
    L0["pid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "CallProcedure", ["exp_vester_update", ["v_id", L0["pid"], "v_exid", (await $.v(C, "pexid")), "v_kliid", L0["pcustid"], "v_optype", (await $.v(C, "poptype")), "v_setid", L0["psetid"], "v_accname", L0["paccnameedit"], "v_valname", L0["pvalname"], "v_amount", L0["pamountedit"], "v_priceamount", L0["ppriceamountedit"], "v_filname", L0["pfilalname"], "v_remit_inf", L0["pdescript"], "v_doc_country", L0["pdbcountrname"], "v_bkliname", L0["peditfrontname"], "v_transtype", L0["ptranstype"], "v_transaccno", (await $.v(C, "TransferAccno")), "v_date", L0["pdate"]]])));
  }
  await $.mcall((await $.v(C, "FormVesterUnion")), "Close", []);
  await $.mcall((await $.v(C, "ExpCustomersType")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Locate", ["ID", L0["pid"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "TPKSCloseUp", async function TPKSCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "DSExp_settingstype")), "DataSet")), "FieldByName", ["description"])), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormVesterUnion", "TranstypeChange", async function TranstypeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Transtype")), "ItemIndex")), 2))) {
    await $.mset((await $.v(C, "PriceAmountEdit")), "ReadOnly", true);
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", false);
    await $.mset((await $.v(C, "DateEdit")), "ReadOnly", false);
    await $.mset((await $.v(C, "PriceAmountEdit")), "Value", 0);
    await $.mset((await $.v(C, "SumAmountEdit")), "Value", (await $.mv((await $.v(C, "AmountEdit")), "Value")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Transtype")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "PriceAmountEdit")), "ReadOnly", true);
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", false);
    await $.mset((await $.v(C, "DateEdit")), "ReadOnly", true);
    await $.mset((await $.v(C, "DateEdit")), "Text", "");
    await $.mset((await $.v(C, "PriceAmountEdit")), "Value", 0);
    await $.mset((await $.v(C, "SumAmountEdit")), "Value", (await $.mv((await $.v(C, "AmountEdit")), "Value")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Transtype")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "PriceAmountEdit")), "ReadOnly", false);
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", true);
    await $.mset((await $.v(C, "DateEdit")), "ReadOnly", true);
    await $.mset((await $.v(C, "DateEdit")), "Text", "");
    await $.mset((await $.v(C, "PriceAmountEdit")), "Value", 0);
    await $.mset((await $.v(C, "SumAmountEdit")), "Value", (await $.mv((await $.v(C, "AmountEdit")), "Value")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormVesterUnion", "ValnameChange", async function ValnameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AmountEdit")), "Value", 0);
  await $.mset((await $.v(C, "EqueAmountEdit")), "Value", 0);
  await $.mset((await $.v(C, "PriceAmountEdit")), "Value", 0);
  await $.mset((await $.v(C, "SumAmountEdit")), "Value", 0);
  await $.mcall((await $.v(C, "AccNameEdit")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from uCustomersIPInfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uCustomersIPInfo", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "ExtCtrls", "sboapidatamoduleimpl", "CustomerDataModuleImpl", "CustomerInfoFormImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmIPINFO", "TForm", {"odsipinfo": {"name": "ODSIpInfo", "type": "TOracleDataSet"}, "ipinfo": {"name": "IpInfo", "type": "TDataSource"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBLookupComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "odsmarriage": {"name": "ODSMarriage", "type": "TOracleDataSet"}, "marriage1": {"name": "Marriage1", "type": "TDataSource"}, "marriage2": {"name": "Marriage2", "type": "TDataSource"}, "odsinsurance": {"name": "ODSInsurance", "type": "TOracleDataSet"}, "passtype1": {"name": "PassType1", "type": "TDataSource"}, "passtype2": {"name": "PassType2", "type": "TDataSource"}, "odspasstypes": {"name": "ODSPassTypes", "type": "TOracleDataSet"}, "insurances": {"name": "Insurances", "type": "TDataSource"}, "soccategory1": {"name": "SocCategory1", "type": "TDataSource"}, "odssoccategories": {"name": "ODSSocCategories", "type": "TOracleDataSet"}, "soccategory2": {"name": "SocCategory2", "type": "TDataSource"}, "family": {"name": "Family", "type": "TDataSource"}, "odsfamily": {"name": "ODSFamily", "type": "TOracleDataSet"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBLookupComboBox"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "cb_inscontractdate": {"name": "cb_INSCONTRACTDATE", "type": "TDateTimePicker"}, "cb_inscontractpreiod": {"name": "cb_INSCONTRACTPREIOD", "type": "TDateTimePicker"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "label13": {"name": "Label13", "type": "TLabel"}, "cb_inscontrlastdate": {"name": "cb_INSCONTRLASTDATE", "type": "TDateTimePicker"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "periods": {"name": "Periods", "type": "TDataSource"}, "odsperiods": {"name": "ODSPeriods", "type": "TOracleDataSet"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "cb_bdate": {"name": "cb_BDATE", "type": "TDateTimePicker"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "dbedit26": {"name": "DBEdit26", "type": "TDBLookupComboBox"}, "odsipinfocustid": {"name": "ODSIpInfoCUSTID", "type": "TFloatField"}, "odsipinfobdate": {"name": "ODSIpInfoBDATE", "type": "TDateTimeField"}, "odsipinfomarriage": {"name": "ODSIpInfoMARRIAGE", "type": "TFloatField"}, "odsipinfomonthlyprofit": {"name": "ODSIpInfoMONTHLYPROFIT", "type": "TFloatField"}, "odsipinfoprofession": {"name": "ODSIpInfoPROFESSION", "type": "TWideStringField"}, "odsipinfopasstype": {"name": "ODSIpInfoPASSTYPE", "type": "TFloatField"}, "odsipinfopassserie": {"name": "ODSIpInfoPASSSERIE", "type": "TWideStringField"}, "odsipinfosoccategory": {"name": "ODSIpInfoSOCCATEGORY", "type": "TFloatField"}, "odsipinfoinsurancecomp": {"name": "ODSIpInfoINSURANCECOMP", "type": "TFloatField"}, "odsipinfoinspolicnum": {"name": "ODSIpInfoINSPOLICNUM", "type": "TWideStringField"}, "odsipinfoinscontractdate": {"name": "ODSIpInfoINSCONTRACTDATE", "type": "TDateTimeField"}, "odsipinfoinscontractpreiod": {"name": "ODSIpInfoINSCONTRACTPREIOD", "type": "TDateTimeField"}, "odsipinfobb_inn": {"name": "ODSIpInfoBB_INN", "type": "TWideStringField"}, "odsipinfobb_familystatus": {"name": "ODSIpInfoBB_FAMILYSTATUS", "type": "TFloatField"}, "odsipinfopassnum": {"name": "ODSIpInfoPASSNUM", "type": "TWideStringField"}, "odsipinfocardid": {"name": "ODSIpInfoCARDID", "type": "TFloatField"}, "odsipinfouniqueinsid": {"name": "ODSIpInfoUNIQUEINSID", "type": "TWideStringField"}, "odsipinfoinscontrlastdate": {"name": "ODSIpInfoINSCONTRLASTDATE", "type": "TDateTimeField"}, "odsipinfoinsperiodid": {"name": "ODSIpInfoINSPERIODID", "type": "TFloatField"}, "odsipinfoinsamount": {"name": "ODSIpInfoINSAMOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("frmIPINFO", null, "TfrmIPINFO");
    U.var_("CardID", 0, "Integer");
  });
  U.method("TfrmIPINFO", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3)))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  {
    const $t3 = (await $.v(C, "ODSIpInfo"));
    await $.stmt($.wcall([$t3], "ClearVariables", [], C));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["custid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "CustomerDataModule", C, false)), "ActiveCustomerList")), "FieldByName", ["ID"])), "AsVariant"))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "FieldByName", ["BDATE"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t3], "cb_BDATE", C, false)), "Date", (await $.wv([$t3], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "cb_BDATE", C, false)), "Date", (await $.mv((await $.wcall([$t3], "FieldByName", ["BDATE"], C)), "AsDateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "FieldByName", ["INSCONTRACTDATE"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t3], "cb_INSCONTRACTDATE", C, false)), "Date", (await $.wv([$t3], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "cb_INSCONTRACTDATE", C, false)), "Date", (await $.mv((await $.wcall([$t3], "FieldByName", ["INSCONTRACTDATE"], C)), "AsDateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "FieldByName", ["INSCONTRLASTDATE"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t3], "cb_INSCONTRLASTDATE", C, false)), "Date", (await $.wv([$t3], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "cb_INSCONTRLASTDATE", C, false)), "Date", (await $.mv((await $.wcall([$t3], "FieldByName", ["INSCONTRLASTDATE"], C)), "AsDateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "FieldByName", ["INSCONTRACTPREIOD"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t3], "cb_INSCONTRACTPREIOD", C, false)), "Date", (await $.wv([$t3], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "cb_INSCONTRACTPREIOD", C, false)), "Date", (await $.mv((await $.wcall([$t3], "FieldByName", ["INSCONTRACTPREIOD"], C)), "AsDateTime")));
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIPINFO", "DBEdit3Change", async function DBEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cname": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Button1")), "Enabled", true);
  if ($.truthy(($.is_(L0["sender"], "TDateTimePicker")))) {
    L0["cname"] = (await $.mv((L0["sender"]), "Name"));
    L0["cname"] = (await $.call(C, "copy", [L0["cname"], 4, $.sub((await $.call(C, "length", [L0["cname"]])), 3)]));
    await $.mset((await $.mcall((await $.v(C, "ODSIpInfo")), "FieldByName", [L0["cname"]])), "AsDateTime", (await $.mv((L0["sender"]), "Date")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIPINFO", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "ODSIpInfo"));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t4], "FieldByName", ["CUSTID"], C)), "AsString")), ""))) {
      await $.mset((await $.wcall([$t4], "FieldByName", ["CUSTID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "CustomerDataModule", C, false)), "ActiveCustomerList")), "FieldByName", ["ID"])), "AsInteger")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t4], "FieldByName", ["CARDID"], C)), "AsString")), ""))) {
      await $.mset((await $.wcall([$t4], "FieldByName", ["CARDID"], C)), "AsInteger", (await $.wv([$t4], "CardID", C, false)));
    }
    await $.mset((await $.wcall([$t4], "FieldByName", ["BDATE"], C)), "AsDateTime", (await $.mv((await $.wv([$t4], "cb_BDATE", C, false)), "Date")));
    await $.mset((await $.wcall([$t4], "FieldByName", ["INSCONTRACTPREIOD"], C)), "AsDateTime", (await $.mv((await $.wv([$t4], "cb_INSCONTRACTPREIOD", C, false)), "Date")));
    await $.mset((await $.wcall([$t4], "FieldByName", ["INSCONTRACTDATE"], C)), "AsDateTime", (await $.mv((await $.wv([$t4], "cb_INSCONTRACTDATE", C, false)), "Date")));
    await $.mset((await $.wcall([$t4], "FieldByName", ["INSCONTRLASTDATE"], C)), "AsDateTime", (await $.mv((await $.wv([$t4], "cb_INSCONTRLASTDATE", C, false)), "Date")));
    await $.stmt($.wcall([$t4], "Post", [], C));
    await $.mset((await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.wv([$t4], "False", C, false)));
    await $.stmt($.wcall([$t4], "refresh", [], C));
    try {
      await $.stmt($.wcall([$t4], "Edit", [], C));
    } catch ($t5) {
      $.rethrowControl($t5);
      $.handled($t5);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIPINFO", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "ODSIpInfo"));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t6], "FieldByName", ["BDATE"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t6], "cb_BDATE", C, false)), "Date", (await $.wv([$t6], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "cb_BDATE", C, false)), "Date", (await $.mv((await $.wcall([$t6], "FieldByName", ["BDATE"], C)), "AsDateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t6], "FieldByName", ["INSCONTRACTDATE"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t6], "cb_INSCONTRACTDATE", C, false)), "Date", (await $.wv([$t6], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "cb_INSCONTRACTDATE", C, false)), "Date", (await $.mv((await $.wcall([$t6], "FieldByName", ["INSCONTRACTDATE"], C)), "AsDateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t6], "FieldByName", ["INSCONTRLASTDATE"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t6], "cb_INSCONTRLASTDATE", C, false)), "Date", (await $.wv([$t6], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "cb_INSCONTRLASTDATE", C, false)), "Date", (await $.mv((await $.wcall([$t6], "FieldByName", ["INSCONTRLASTDATE"], C)), "AsDateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t6], "FieldByName", ["INSCONTRACTPREIOD"], C)), "AsString")), ""))) {
      await $.mset((await $.wv([$t6], "cb_INSCONTRACTPREIOD", C, false)), "Date", (await $.wv([$t6], "Date", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "cb_INSCONTRACTPREIOD", C, false)), "Date", (await $.mv((await $.wcall([$t6], "FieldByName", ["INSCONTRACTPREIOD"], C)), "AsDateTime")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

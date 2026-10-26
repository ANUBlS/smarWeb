// Generated from USearch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("USearch", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "Db", "OracleData", "ExtCtrls", "StdCtrls", "Buttons", "ComCtrls", "DBCtrls", "UMainPersonalAcc"]);
  const C = [U];
  U.defClass("TfrmSearch", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "lcbkli_id": {"name": "lcbKli_id", "type": "TDBLookupComboBox"}, "lcbprofitid": {"name": "lcbProfitID", "type": "TDBLookupComboBox"}, "edbegin_date": {"name": "edBegin_Date", "type": "TDateTimePicker"}, "edend_date": {"name": "edEnd_Date", "type": "TDateTimePicker"}, "ebanking_details": {"name": "EBanking_Details", "type": "TEdit"}, "lbcagentid": {"name": "lbcAgentID", "type": "TDBLookupComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "ckbfilter": {"name": "ckbFilter", "type": "TCheckBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "etotalemp_number": {"name": "ETotalEmp_Number", "type": "TEdit"}, "label52": {"name": "Label52", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "ednot_coveredperiod": {"name": "edNot_CoveredPeriod", "type": "TDateTimePicker"}, "ednot_covereperiod1": {"name": "edNot_CoverePeriod1", "type": "TDateTimePicker"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "emaxweeks": {"name": "EMaxWeeks", "type": "TEdit"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odsagent": {"name": "ODSAgent", "type": "TOracleDataSet"}, "odsagentid": {"name": "ODSAgentID", "type": "TFloatField"}, "odsagentname": {"name": "ODSAgentNAME", "type": "TStringField"}, "agentsource": {"name": "AgentSource", "type": "TDataSource"}, "odscustomerssource": {"name": "ODSCustomersSource", "type": "TDataSource"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscustomersaddress": {"name": "ODSCustomersADDRESS", "type": "TStringField"}, "odscustomersmobilephone": {"name": "ODSCustomersMOBILEPHONE", "type": "TStringField"}, "odscustomersfax": {"name": "ODSCustomersFAX", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("frmSearch", null, "TfrmSearch");
  });
  U.method("TfrmSearch", "GetFields", async function GetFields(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), "fields": $.asRef(p1), result: null, "i": 0, "l": 0, "varval": null};
  await $.fixArgs(L0, ["ownerobj"]);
  L0["addval"] = $.fn(async function AddVal(p0, p1) {
  const L1 = {"val": $.copyArg(p0), "vartype": (p1 === undefined ? (await $.v(C, "varInteger")) : p1), result: undefined, "idx": 0};
  await $.fixArgs(L1, ["val", "vartype"]);
  if ($.truthy((await $.call(C, "VarIsEmpty", [L0["varval"]])))) {
    L0["varval"] = (await $.call(C, "VarArrayCreate", [[0, 0], (await $.v(C, "varVariant"))]));
    L1["idx"] = 0;
  } else {
    await $.stmt((await $.call(C, "VarArrayRedim", [L0["varval"], $.add((await $.call(C, "VarArrayHighBound", [L0["varval"], (await $.call(C, "VarArrayDimCount", [L0["varval"]]))])), 1)])));
    L1["idx"] = (await $.call(C, "VarArrayHighBound", [L0["varval"], (await $.call(C, "VarArrayDimCount", [L0["varval"]]))]));
  }
  { const $t1 = await $.iset(L0["varval"], [L1["idx"]], (await $.call(C, "VarAsType", [L1["val"], L1["vartype"]]))); if ($t1 !== undefined) { L0["varval"] = $t1; } }
  return L1.result;
});
  {
    const $t2 = L0["ownerobj"];
    { const $t3 = $.sub((await $.wv([$t2], "ControlCount", C, false)), 1);
      await $.wset([$t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), ""))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "Copy", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name")), 2, $.sub((await $.wcall([$t2], "length", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C)), 1)], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), (await $.wv([$t2], "varString", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          if ($.truthy($.not((await $.wcall([$t2], "varIsNull", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "KeyValue"))], C))))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "Copy", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name")), 4, (await $.wcall([$t2], "length", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "KeyValue"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          if ($.truthy($.ne((await $.wcall([$t2], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "DateTime"))], C)), 0))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "Copy", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name")), 3, (await $.wcall([$t2], "length", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.wset([$t2], "l", (await $.wcall([$t2], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Date"))], C)), { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.wv([$t2], "l", { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true }, false)), (await $.wv([$t2], "varDate", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        await $.tick();
      }
    }
  }
  await L0["fields"].set((await $.call(C, "lowercase", [(await $.call(C, "copy", [(await L0["fields"].get()), 2, $.sub((await $.call(C, "Length", [(await L0["fields"].get())])), 1)]))])));
  L0["result"] = L0["varval"];
  return L0.result;
}, {"params": ["OwnerObj", "Fields"], "kind": "function", "ptypes": ["TCustomControl", "String"]});
  U.method("TfrmSearch", "GetFilterSring", async function GetFilterSring(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fields": '', "str": '', "i": 0, "p": 0, "val": null, "value": ''};
  L0["val"] = (await $.call(C, "GetFields", [(await $.v(C, "GroupBox1")), $.ref(async () => L0["fields"], async ($t5) => { L0["fields"] = $t5; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    { const $t6 = (await $.call(C, "VarArrayHighBound", [L0["val"], (await $.call(C, "VarArrayDimCount", [L0["val"]]))]));
      L0["i"] = 0;
      let $t7 = true;
      for (;;) {
        if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
        $t7 = false;
        if (!($.ord(L0["i"]) <= $.ord($t6))) break;
        { const $t8 = (await $.call(C, "pos", [";", L0["fields"]]));
          if ($.eq($t8, 0)) {
            L0["p"] = $.add((await $.call(C, "Length", [L0["fields"]])), 1);
          }
          else {
            L0["p"] = (await $.call(C, "pos", [";", L0["fields"]]));
          }
        }
        if ($.truthy($.gt(L0["i"], 0))) {
          L0["str"] = $.add(L0["str"], " and ");
        }
        { const $t9 = (await $.call(C, "VarType", [(await $.idx(L0["val"], [L0["i"]]))]));
          if ($.eq($t9, (await $.v(C, "varInteger")))) {
            L0["value"] = (await $.call(C, "VarToStr", [(await $.idx(L0["val"], [L0["i"]]))]));
          }
          else if ($.eq($t9, (await $.v(C, "varOleStr")))) {
            L0["value"] = $.add($.add("'", (await $.idx(L0["val"], [L0["i"]]))), "'");
          }
          else if ($.eq($t9, (await $.v(C, "varDate")))) {
            L0["value"] = $.add($.add("'", (await $.call(C, "DateToStr", [(await $.call(C, "Trunc", [(await $.idx(L0["val"], [L0["i"]]))]))]))), "'");
          }
        }
        L0["str"] = $.add($.add($.add($.add($.add(L0["str"], " ( "), (await $.call(C, "copy", [L0["fields"], 1, $.sub(L0["p"], 1)]))), "="), L0["value"]), " ) ");
        L0["fields"] = (await $.call(C, "Copy", [L0["fields"], $.add(L0["p"], 1), $.sub((await $.call(C, "length", [L0["fields"]])), L0["p"])]));
        await $.tick();
      }
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmSearch", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "GroupBox1"));
    { const $t11 = $.sub((await $.wv([$t10], "ControlCount", C, false)), 1);
      await $.wset([$t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t10], "i", $.succ((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "KeyValue", (await $.wv([$t10], "null", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DateTime", (await $.wcall([$t10], "StrToDate", ["30/12/1899"], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSearch", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fields": '', "val": null, "f": false};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = false;
  L0["val"] = (await $.call(C, "GetFields", [(await $.v(C, "GroupBox1")), $.ref(async () => L0["fields"], async ($t13) => { L0["fields"] = $t13; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    {
      const $t14 = (await $.v(C, "MainPersonalAcc"));
      if ($.truthy((await $.or_((await $.or_((await $.or_(($.ne((await $.wcall([$t14], "trunc", [(await $.mv((await $.wv([$t14], "edbegin_Date", C, false)), "Date"))], C)), 0)), async () => ($.ne((await $.wcall([$t14], "trunc", [(await $.mv((await $.wv([$t14], "edEnd_Date", C, false)), "Date"))], C)), 0)))), async () => ($.ne((await $.wcall([$t14], "trunc", [(await $.mv((await $.wv([$t14], "edNot_CoveredPeriod", C, false)), "Date"))], C)), 0)))), async () => ($.ne((await $.wcall([$t14], "trunc", [(await $.mv((await $.wv([$t14], "edNot_CoverePeriod1", C, false)), "Date"))], C)), 0)))))) {
        await $.wset([$t14], "f", (await $.wv([$t14], "true", C, false)), { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true });
      }
      if ($.truthy((await $.wv([$t14], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false)))) {
        if ($.truthy($.not((await $.mcall((await $.wv([$t14], "ODSPAccident", C, false)), "Locate", [(await $.wv([$t14], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t14], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), [(await $.wv([$t14], "loPartialKey", C, false)), (await $.wv([$t14], "loCaseInSensitive", C, false))]]))))) {
          await $.stmt((await $.wcall([$t14], "ShowMessage", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!"], C)));
        }
      }
      if ($.truthy($.not((await $.wv([$t14], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))))) {
        if ($.truthy($.not((await $.mcall((await $.wv([$t14], "ODSPAccident", C, false)), "Locate", [(await $.wv([$t14], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t14], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), [(await $.wv([$t14], "loCaseInSensitive", C, false))]]))))) {
          await $.stmt((await $.wcall([$t14], "ShowMessage", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!"], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSearch", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.mv((await $.v(C, "MainPersonalAcc")), "ODSPAccident"));
    await $.wset([$t15], "FilterOptions", [(await $.wv([$t15], "foCaseInSensitive", C, false))], C);
    await $.wset([$t15], "Filter", (await $.wv([$t15], "GetFilterSring", C, false)), C);
    await $.wset([$t15], "Filtered", (await $.and_(((await $.mv((await $.wv([$t15], "ckbFilter", C, false)), "Checked"))), async () => ($.ne((await $.wv([$t15], "Filter", C, false)), "")))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSearch", "EMaxWeeksKeyPress", async function EMaxWeeksKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t16 = L0["sender"];
        await $.stmt((await $.wcall([$t16], "SelectNext", [(await $.wv([$t16], "ActiveControl", C, false)), (await $.wv([$t16], "False", C, false)), (await $.wv([$t16], "True", C, false))], C)));
      }
    } else {
      {
        const $t17 = L0["sender"];
        await $.stmt((await $.wcall([$t17], "SelectNext", [(await $.wv([$t17], "ActiveControl", C, false)), (await $.wv([$t17], "True", C, false)), (await $.wv([$t17], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

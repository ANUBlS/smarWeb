// Generated from USearch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("USearch", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "ComCtrls", "DBCtrls", "ExtCtrls", "Buttons", "OracleData", "Db", "UPMFMain"]);
  const C = [U];
  U.defClass("TfrmSearch", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "lcbkli_id": {"name": "lcbKli_id", "type": "TDBLookupComboBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "lcbprofitid": {"name": "lcbProfitID", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "edbegin_date": {"name": "edBegin_Date", "type": "TDateTimePicker"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "edend_date": {"name": "edEnd_Date", "type": "TDateTimePicker"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "ebanking_details": {"name": "EBanking_Details", "type": "TEdit"}, "einsuredmodel": {"name": "EInsuredModel", "type": "TEdit"}, "einsuredstatenum": {"name": "EInsuredStateNum", "type": "TEdit"}, "einsuredoutputyear": {"name": "EInsuredOutputYear", "type": "TEdit"}, "einsuredactualvalue": {"name": "EInsuredActualValue", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "odsagents": {"name": "ODSAgents", "type": "TOracleDataSet"}, "odsagentsname": {"name": "ODSAgentsNAME", "type": "TStringField"}, "odsagentsid": {"name": "ODSAgentsID", "type": "TFloatField"}, "agentssource": {"name": "AgentsSource", "type": "TDataSource"}, "lbcbroker": {"name": "lbcBroker", "type": "TDBLookupComboBox"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersid": {"name": "CustomersID", "type": "TIntegerField"}, "customersname": {"name": "CustomersNAME", "type": "TStringField"}, "customersaddress": {"name": "CustomersADDRESS", "type": "TStringField"}, "customersmobilephone": {"name": "CustomersMOBILEPHONE", "type": "TStringField"}, "customersfax": {"name": "CustomersFAX", "type": "TStringField"}, "customerscontactperson": {"name": "CustomersCONTACTPERSON", "type": "TStringField"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "ckbfilter": {"name": "ckbFilter", "type": "TCheckBox"}}, {});
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
  U.method("TfrmSearch", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fields": '', "i": 0, "val": null, "f": false};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = false;
  L0["val"] = (await $.call(C, "GetFields", [(await $.v(C, "GroupBox1")), $.ref(async () => L0["fields"], async ($t5) => { L0["fields"] = $t5; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    {
      const $t6 = (await $.v(C, "PMFMain"));
      if ($.truthy((await $.or_(($.ne((await $.wcall([$t6], "trunc", [(await $.mv((await $.wv([$t6], "edbegin_Date", C, false)), "Date"))], C)), 0)), async () => ($.ne((await $.wcall([$t6], "trunc", [(await $.mv((await $.wv([$t6], "edEnd_Date", C, false)), "Date"))], C)), 0)))))) {
        await $.wset([$t6], "f", (await $.wv([$t6], "true", C, false)), { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true });
      }
      if ($.truthy((await $.wv([$t6], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false)))) {
        if ($.truthy($.not((await $.mcall((await $.wv([$t6], "Ins_MotorFull", C, false)), "Locate", [(await $.wv([$t6], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t6], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), [(await $.wv([$t6], "loPartialKey", C, false)), (await $.wv([$t6], "loCaseInsensitive", C, false))]]))))) {
          await $.stmt((await $.wcall([$t6], "MessageDlg", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!", (await $.wv([$t6], "mtWarning", C, false)), [(await $.wv([$t6], "mbOk", C, false))], 0], C)));
        }
      }
      if ($.truthy($.not((await $.wv([$t6], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))))) {
        if ($.truthy($.not((await $.mcall((await $.wv([$t6], "Ins_MotorFull", C, false)), "Locate", [(await $.wv([$t6], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t6], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), [(await $.wv([$t6], "loCaseInSensitive", C, false))]]))))) {
          await $.stmt((await $.wcall([$t6], "MessageDlg", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!", (await $.wv([$t6], "mtWarning", C, false)), [(await $.wv([$t6], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSearch", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "GroupBox1"));
    { const $t8 = $.sub((await $.wv([$t7], "ControlCount", C, false)), 1);
      await $.wset([$t7], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t7], "i", $.succ((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "KeyValue", (await $.wv([$t7], "null", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DateTime", (await $.wcall([$t7], "StrToDate", ["30/12/1899"], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSearch", "GetFilterSring", async function GetFilterSring(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fields": '', "str": '', "i": 0, "p": 0, "val": null, "value": ''};
  L0["val"] = (await $.call(C, "GetFields", [(await $.v(C, "GroupBox1")), $.ref(async () => L0["fields"], async ($t10) => { L0["fields"] = $t10; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    { const $t11 = (await $.call(C, "VarArrayHighBound", [L0["val"], (await $.call(C, "VarArrayDimCount", [L0["val"]]))]));
      L0["i"] = 0;
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
        $t12 = false;
        if (!($.ord(L0["i"]) <= $.ord($t11))) break;
        { const $t13 = (await $.call(C, "pos", [";", L0["fields"]]));
          if ($.eq($t13, 0)) {
            L0["p"] = $.add((await $.call(C, "Length", [L0["fields"]])), 1);
          }
          else {
            L0["p"] = (await $.call(C, "pos", [";", L0["fields"]]));
          }
        }
        if ($.truthy($.gt(L0["i"], 0))) {
          L0["str"] = $.add(L0["str"], " and ");
        }
        { const $t14 = (await $.call(C, "VarType", [(await $.idx(L0["val"], [L0["i"]]))]));
          if ($.eq($t14, (await $.v(C, "varInteger")))) {
            L0["value"] = (await $.call(C, "VarToStr", [(await $.idx(L0["val"], [L0["i"]]))]));
          }
          else if ($.eq($t14, (await $.v(C, "varOleStr")))) {
            L0["value"] = $.add($.add("'", (await $.idx(L0["val"], [L0["i"]]))), "'");
          }
          else if ($.eq($t14, (await $.v(C, "varDate")))) {
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
  U.method("TfrmSearch", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.mv((await $.v(C, "PMFMain")), "Ins_MotorFull"));
    await $.wset([$t15], "FilterOptions", [(await $.wv([$t15], "foCaseInsensitive", C, false))], C);
    await $.wset([$t15], "Filter", (await $.wv([$t15], "GetFilterSring", C, false)), C);
    await $.wset([$t15], "Filtered", (await $.and_(((await $.mv((await $.wv([$t15], "ckbFilter", C, false)), "Checked"))), async () => ($.ne((await $.wv([$t15], "Filter", C, false)), "")))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSearch", "EInsuredStateNumKeyPress", async function EInsuredStateNumKeyPress(Self, p0, p1) {
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

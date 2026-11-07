// Generated from BriefcaseImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BriefcaseImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "DBCtrls", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "QuickRpt", "BriefcaseDataModuleImpl", "CommonDecls", "BriefcaseQRepImpl", "BriefcaseQrepDataModuleImpl"]);
  const C = [U];
  U.defClass("TBriefcaseForm", "TForm", {"localizer": {"name": "Localizer", "type": "TNLSLocalizer"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "rpbegin": {"name": "RPBegin", "type": "TDateTimePicker"}, "rpend": {"name": "RPEnd", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "kdbegin": {"name": "KDBegin", "type": "TDateTimePicker"}, "kdend": {"name": "KDEnd", "type": "TDateTimePicker"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "reportnamelist": {"name": "ReportNameList", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "cbusers": {"name": "cbUsers", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "edcreditintervalbegin": {"name": "edCreditIntervalBegin", "type": "TMaskEdit"}, "edcreditintervalend": {"name": "edCreditIntervalEnd", "type": "TMaskEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "cbdistricts": {"name": "cbDistricts", "type": "TDBLookupComboboxEh"}, "cbvillages": {"name": "cbVillages", "type": "TDBLookupComboboxEh"}, "cbcustomers": {"name": "cbCustomers", "type": "TDBLookupComboboxEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "cbcredittypes": {"name": "cbCreditTypes", "type": "TDBLookupComboboxEh"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "edpercentartmabegin": {"name": "edPercentArtmaBegin", "type": "TMaskEdit"}, "edpercentartmaend": {"name": "edPercentArtmaEnd", "type": "TMaskEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "edpercentpogashbegin": {"name": "edPercentPogashBegin", "type": "TMaskEdit"}, "edpercentpogashend": {"name": "edPercentPogashEnd", "type": "TMaskEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "cbcreditdirection": {"name": "cbCreditDirection", "type": "TDBLookupComboboxEh"}, "rgpr": {"name": "rgPR", "type": "TRadioGroup"}, "chleavepogash": {"name": "chLeavePogash", "type": "TCheckBox"}, "btnsubmit": {"name": "btnSubmit", "type": "TBitBtn"}, "btncancel": {"name": "btnCancel", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.const("fw_Republic", "Resbuplika üzrə");
    U.const("fw_District", "Rayon üzrə: %s");
    U.const("fw_ReportPeriod1", "Hesabat dövrü: %s");
    U.const("fw_ReportPeriod2", "Hesabat dövrü: %s - %s");
    U.var_("BriefcaseForm", null, "TBriefcaseForm");
  });
  U.method("TBriefcaseForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "BriefcaseDataMod", (await $.mcall((await $.v(C, "TBriefcaseDataMod")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "BriefcaseReportForm", (await $.mcall((await $.v(C, "TBriefcaseReportForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "BriefcaseQRepDataMod", (await $.mcall((await $.v(C, "TBriefcaseQRepDataMod")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBriefcaseForm", "cbDistrictsChange", async function cbDistrictsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "districtid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "BriefcaseDataMod"));
    const $t2 = (await $.wv([$t1], "VillagesDataSet", C, false));
    await $.mcall((await $.wv([$t1, $t2], "CustomersDataSet", C, false)), "Close", []);
    await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    await $.mset((await $.wv([$t1, $t2], "cbCustomers", C, false)), "Enabled", (await $.wv([$t1, $t2], "False", C, false)));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2], "cbCustomers", C, false)), "ListSource")), "DataSet")), "Close", []);
    await $.wset([$t1, $t2], "DistrictID", (await $.mv((await $.wv([$t1, $t2], "cbDistricts", C, false)), "KeyValue")), { get: async () => L0["districtid"], set: async (v) => { L0["districtid"] = v; }, local: true });
    if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    }
    if ($.truthy($.le((await $.wv([$t1, $t2], "DistrictID", { get: async () => L0["districtid"], set: async (v) => { L0["districtid"] = v; }, local: true }, false)), 0))) {
      await $.mset((await $.wv([$t1, $t2], "cbVillages", C, false)), "Enabled", (await $.wv([$t1, $t2], "False", C, false)));
      await $.mset((await $.wv([$t1, $t2], "cbCustomers", C, false)), "Enabled", (await $.wv([$t1, $t2], "False", C, false)));
      return L0.result;
    }
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["DISTRICT_ID", (await $.wv([$t1, $t2], "DistrictID", { get: async () => L0["districtid"], set: async (v) => { L0["districtid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    await $.mset((await $.wv([$t1, $t2], "cbVillages", C, false)), "Enabled", (await $.wv([$t1, $t2], "True", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBriefcaseForm", "cbVillagesChange", async function cbVillagesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "villageid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "BriefcaseDataMod"));
    const $t4 = (await $.wv([$t3], "CustomersDataSet", C, false));
    await $.wset([$t3, $t4], "VillageID", (await $.mv((await $.wv([$t3, $t4], "cbVillages", C, false)), "KeyValue")), { get: async () => L0["villageid"], set: async (v) => { L0["villageid"] = v; }, local: true });
    if ($.truthy((await $.wv([$t3, $t4], "Active", C, false)))) {
      await $.stmt($.wcall([$t3, $t4], "Close", [], C));
    }
    if ($.truthy($.le((await $.wv([$t3, $t4], "VillageID", { get: async () => L0["villageid"], set: async (v) => { L0["villageid"] = v; }, local: true }, false)), 0))) {
      await $.mset((await $.wv([$t3, $t4], "cbCustomers", C, false)), "Enabled", (await $.wv([$t3, $t4], "False", C, false)));
      return L0.result;
    }
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["VILLAGEID", (await $.wv([$t3, $t4], "VillageID", { get: async () => L0["villageid"], set: async (v) => { L0["villageid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3, $t4], "Open", [], C));
    await $.mset((await $.wv([$t3, $t4], "cbCustomers", C, false)), "Enabled", (await $.wv([$t3, $t4], "True", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBriefcaseForm", "btnSubmitClick", async function btnSubmitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "BriefcaseReportForm"));
    await $.mset((await $.wv([$t5], "screen", C, false)), "cursor", (await $.wv([$t5], "crsqlwait", C, false)));
    await $.mcall((await $.wv([$t5], "OracleDataSet1", C, false)), "Open", []);
    await $.mset((await $.wv([$t5], "screen", C, false)), "cursor", (await $.wv([$t5], "Crdefault", C, false)));
    await $.stmt($.wcall([$t5], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

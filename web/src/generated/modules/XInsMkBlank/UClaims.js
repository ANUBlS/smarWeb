// Generated from UClaims.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UClaims", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "Buttons", "Db", "INSWordExporter", "ComCtrls", "Word97", "ComObj", "Mask", "UMKDataMod"]);
  const C = [U];
  U.defClass("TfrmClaims", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "report": {"name": "Report", "type": "TBitBtn"}, "wordexporter": {"name": "WordExporter", "type": "TINSWordExporter"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dtpclaim": {"name": "dtpClaim", "type": "TDateTimePicker"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label3": {"name": "Label3", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "label10": {"name": "Label10", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "dtapp": {"name": "dtApp", "type": "TDateTimePicker"}, "label12": {"name": "Label12", "type": "TLabel"}, "dtletter": {"name": "dtLetter", "type": "TDateTimePicker"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "label17": {"name": "Label17", "type": "TLabel"}, "dtactdate": {"name": "dtActDate", "type": "TDateTimePicker"}, "s": {"name": "s", "type": "real"}, "s1": {"name": "s1", "type": "real"}, "s2": {"name": "s2", "type": "real"}, "s3": {"name": "s3", "type": "real"}, "sum": {"name": "sum", "type": "real"}}, {});
  U.init(async () => {
    U.var_("frmClaims", null, "TfrmClaims");
  });
  U.method("TfrmClaims", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsMKDataMod"));
    const $t2 = (await $.wv([$t1], "ODSMotorKasko", C, false));
    await $.mset((await $.wv([$t1, $t2], "ODSMOTORKaskoCLAIM_DATE", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2], "dtpClaim", C, false)), "Date")));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsEdit", C, false)), (await $.wv([$t1, $t2], "dsInsert", C, false))]))) {
      await $.stmt($.wcall([$t1, $t2], "Post", [], C));
    }
    {
      const $t3 = (await $.wv([$t1, $t2], "InsMKDataMod", C, false));
      const $t4 = (await $.wv([$t1, $t2, $t3], "ODSClaims", C, false));
      if ($.truthy($.in_((await $.wv([$t1, $t2, $t3, $t4], "State", C, false)), [(await $.wv([$t1, $t2, $t3, $t4], "dsEdit", C, false)), (await $.wv([$t1, $t2, $t3, $t4], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t1, $t2, $t3, $t4], "Post", [], C));
        await $.stmt($.wcall([$t1, $t2, $t3, $t4], "RefreshRecord", [], C));
      }
    }
    {
      const $t5 = (await $.wv([$t1, $t2], "InsMKDataMod", C, false));
      const $t6 = (await $.wv([$t1, $t2, $t5], "ODSClaimSal", C, false));
      if ($.truthy($.in_((await $.wv([$t1, $t2, $t5, $t6], "State", C, false)), [(await $.wv([$t1, $t2, $t5, $t6], "dsEdit", C, false)), (await $.wv([$t1, $t2, $t5, $t6], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t1, $t2, $t5, $t6], "Post", [], C));
      }
      {
        const $t7 = (await $.wv([$t1, $t2, $t5, $t6], "InsMKDataMod", C, false));
        const $t8 = (await $.wv([$t1, $t2, $t5, $t6, $t7], "ODSClaimDescription", C, false));
        if ($.truthy($.in_((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "State", C, false)), [(await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "dsEdit", C, false)), (await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "dsInsert", C, false))]))) {
          await $.mset((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "ODSClaimDescriptionID", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "ODSMotorKaskoID", C, false)), "Value")));
          await $.mset((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "ODSClaimDescriptionAppDate", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "dtApp", C, false)), "Date")));
          await $.mset((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "ODSClaimDescriptionLetterDate", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "dtLetter", C, false)), "Date")));
          await $.mset((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "ODSClaimDescriptionActDate", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2, $t5, $t6, $t7, $t8], "dtActDate", C, false)), "Date")));
          await $.stmt($.wcall([$t1, $t2, $t5, $t6, $t7, $t8], "Post", [], C));
          await $.stmt($.wcall([$t1, $t2, $t5, $t6, $t7, $t8], "RefreshRecord", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClaims", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t9], "ODSClaims", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSClaims", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t9], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t9], "ODSClaims", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSClaimReport", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t9], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t9], "ODSClaimReport", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9], "ODSClaimSal", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSClaimSal", C, false)), "SetVariable", ["eid", (await $.mv((await $.wv([$t9], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t9], "ODSClaimSal", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t9], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "Open", []);
    if ($.truthy($.gt((await $.mv((await $.wv([$t9], "ODSClaimDescription", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "Edit", []);
    }
  }
  await $.mset((await $.v(C, "dtpClaim")), "Date", (await $.mv((await $.mv((await $.v(C, "InsMKDataMod")), "ODSMotorKaskoCLAIM_DATE")), "Value")));
  await $.mset((await $.v(C, "dtLetter")), "Date", (await $.mv((await $.mv((await $.v(C, "InsMKDataMod")), "ODSClaimDescriptionLetterDate")), "Value")));
  await $.mset((await $.v(C, "dtApp")), "Date", (await $.mv((await $.mv((await $.v(C, "InsMKDataMod")), "ODSClaimDescriptionAppDate")), "Value")));
  await $.mset((await $.v(C, "dtActDate")), "Date", (await $.mv((await $.mv((await $.v(C, "InsMKDataMod")), "ODSClaimDescriptionActDate")), "Value")));
  await $.stmt((await $.call(C, "CalcSum", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClaims", "ReportClick", async function ReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "j": 0, "n": 0, "m": 0, "filename": '', "s": 0, "s1": 0, "s2": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t10], "ODSCusts", C, false)), "Open", []);
    await $.wset([$t10], "s", 0, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.wset([$t10], "s1", 0, { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
    await $.wset([$t10], "s2", 0, { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
    await $.wset([$t10], "FileName", $.add((await $.wcall([$t10], "ExtractFilePath", [(await $.mv((await $.wv([$t10], "Application", C, false)), "ExeName"))], C)), "\\Kasko temir xercleri.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
    await $.wset([$t10], "wrdApp", (await $.wcall([$t10], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
    await $.mset((await $.wv([$t10], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t10], "True", C, false)));
    await $.wset([$t10], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t10], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t10], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
    await $.wset([$t10], "wrdSelection", (await $.mv((await $.wv([$t10], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
    await $.wset([$t10], "m", (await $.mv((await $.wv([$t10], "ODSClaimReport", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
    await $.wset([$t10], "n", (await $.mv((await $.wv([$t10], "ODSClaimSal", C, false)), "RecordCount")), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "policynum"])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t10], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t10], "ODSContractsPolicy_Num", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "insured"])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t10], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "insured1"])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t10], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "mark"])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t10], "ODSMotorKaskoInsuredMark", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "statenum"])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t10], "ODSMotorKaskoInsuredStateNum", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "date"])));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t10], "DateToStr", [(await $.mv((await $.wv([$t10], "ODSMotorKaskoCLAIM_DATE", C, false)), "Value"))], C))])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t10], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t10], "unAssigned", C, false)), (await $.wv([$t10], "unAssigned", C, false)), "claimnum"])));
    await $.mset((await $.mv((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t10], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t10], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t10], "ODSMotorKaskoClaim_Num", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t10], "ODSClaimReport", C, false)), "First", []);
    { const $t11 = (await $.mv((await $.wv([$t10], "ODSClaimReport", C, false)), "RecordCount"));
      await $.wset([$t10], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t10], "j", $.succ((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        await $.wset([$t10], "s1", $.add((await $.wv([$t10], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "ODSClaimReportCount", C, false)), "value"))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
        await $.wset([$t10], "s2", $.add((await $.wv([$t10], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "ODSClaimReportCost", C, false)), "value"))), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t10], "false", C, false)));
        await $.stmt((await $.wcall([$t10], "FillRow1", [(await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), (await $.wcall([$t10], "IntToStr", [(await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t10], "ODSClaimReportEName", C, false)), "Value")), (await $.wcall([$t10], "FloatToStr", [(await $.mv((await $.wv([$t10], "ODSClaimReportCount", C, false)), "value"))], C)), (await $.wcall([$t10], "FloatToStr", [(await $.mv((await $.wv([$t10], "ODSClaimReportCost", C, false)), "value"))], C)), (await $.wcall([$t10], "FloatToStr", [$.mul((await $.mv((await $.wv([$t10], "ODSClaimReportCount", C, false)), "value")), (await $.mv((await $.wv([$t10], "ODSClaimReportCost", C, false)), "value")))], C))], C)));
        if ($.truthy($.eq((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.wv([$t10], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))))) {
          await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t10], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2)])), "Range")), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Cell", [$.add((await $.wv([$t10], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2), 1])), "Range")), "Paragraphs")), "Alignment", (await $.wv([$t10], "wdAlignParagraphCenter", C, false)));
          await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t10], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2)])), "Range")), "Bold", (await $.wv([$t10], "true", C, false)));
          await $.stmt((await $.wcall([$t10], "FillRow1", [(await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t10], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2), "", "Cəmi :", (await $.wcall([$t10], "FloatToStr", [(await $.wv([$t10], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false))], C)), (await $.wcall([$t10], "FloatToStr", [(await $.wv([$t10], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false))], C)), (await $.wcall([$t10], "FloatToStr", [$.mul((await $.wv([$t10], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.wv([$t10], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)))], C))], C)));
        }
        await $.mcall((await $.wv([$t10], "ODSClaimReport", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t10], "ODSClaimSal", C, false)), "First", []);
    { const $t13 = (await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false));
      await $.wset([$t10], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t14 = true;
      for (;;) {
        if (!$t14) { await $.wset([$t10], "i", $.succ((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t14 = false;
        if (!($.ord((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t13))) break;
        await $.wset([$t10], "s", $.add((await $.wv([$t10], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "ODSClaimSalCost", C, false)), "value"))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t10], "false", C, false)));
        await $.stmt((await $.wcall([$t10], "FillRow", [2, (await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), (await $.wcall([$t10], "IntToStr", [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t10], "ODSClaimSalName", C, false)), "Value")), (await $.wcall([$t10], "FloatToStr", [(await $.mv((await $.wv([$t10], "ODSClaimSalCost", C, false)), "value"))], C))], C)));
        await $.mcall((await $.wv([$t10], "ODSClaimSal", C, false)), "Next", []);
        if ($.truthy($.eq((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))))) {
          await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2)])), "Range")), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Cell", [$.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2), 1])), "Range")), "Paragraphs")), "Alignment", (await $.wv([$t10], "wdAlignParagraphCenter", C, false)));
          await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2)])), "Range")), "Bold", (await $.wv([$t10], "true", C, false)));
          await $.stmt((await $.wcall([$t10], "FillRow", [2, (await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2), "", "Cəmi :", (await $.wcall([$t10], "FloatToStr", [(await $.wv([$t10], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))], C)));
          await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3)])), "Range")), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Cell", [$.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3), 1])), "Range")), "Paragraphs")), "Alignment", (await $.wv([$t10], "wdAlignParagraphCenter", C, false)));
          await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3)])), "Range")), "Bold", (await $.wv([$t10], "true", C, false)));
          await $.wset([$t10], "sum", $.add($.mul((await $.wv([$t10], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.wv([$t10], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false))), (await $.wv([$t10], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), C);
          await $.stmt((await $.wcall([$t10], "FillRow", [2, (await $.wv([$t10], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t10], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3), "", "Ümumi yekun :", (await $.wcall([$t10], "FloatToStr", [(await $.wv([$t10], "sum", C, false))], C))], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClaims", "CalcSum", async function CalcSum(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.set(C, "s", 0);
  await $.set(C, "s1", 0);
  await $.set(C, "s3", 0);
  {
    const $t15 = (await $.v(C, "InsMKDataMod"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t15], "ODSClaims", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t15], "ODSClaims", C, false)), "Last", []);
      { const $t16 = $.sub((await $.mv((await $.wv([$t15], "ODSClaims", C, false)), "RecordCount")), 1);
        await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t17 = true;
        for (;;) {
          if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t17 = false;
          if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
          await $.wset([$t15], "s", $.add((await $.wv([$t15], "s", C, false)), (await $.mv((await $.wv([$t15], "ODSClaimsCount", C, false)), "value"))), C);
          await $.wset([$t15], "s1", $.add((await $.wv([$t15], "s1", C, false)), (await $.mv((await $.wv([$t15], "ODSClaimsCost", C, false)), "value"))), C);
          await $.mcall((await $.wv([$t15], "ODSClaims", C, false)), "Prior", []);
          await $.tick();
        }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t15], "ODSClaimSal", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t15], "ODSClaimSal", C, false)), "Last", []);
      { const $t18 = $.sub((await $.mv((await $.wv([$t15], "ODSClaimSal", C, false)), "RecordCount")), 1);
        await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t19 = true;
        for (;;) {
          if (!$t19) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t19 = false;
          if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t18))) break;
          await $.wset([$t15], "s3", $.add((await $.wv([$t15], "s3", C, false)), (await $.mv((await $.wv([$t15], "ODSClaimSalCost", C, false)), "value"))), C);
          await $.mcall((await $.wv([$t15], "ODSClaimSal", C, false)), "Prior", []);
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmClaims", "DBNavigator2Click", async function DBNavigator2Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  {
    const $t20 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t20], "ODSClaimReport", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t20], "ODSClaimReport", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t20], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t20], "ODSClaimReport", C, false)), "Open", []);
  }
  await $.stmt((await $.call(C, "CalcSum", [])));
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TfrmClaims", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t21], "ODSMOTORKasko", C, false)), "Edit", []);
    await $.mset((await $.wv([$t21], "ODSMOTORKaskoCLAIM_NUM", C, false)), "Value", (await $.mcall((await $.wv([$t21], "OPCommon", C, false)), "CallStringFunction", ["getClaimNums", [(await $.mv((await $.wv([$t21], "ODSMotorKaskoTypeID", C, false)), "value"))]])));
    await $.mset((await $.wv([$t21], "ODSMOTORKaskoACT_NUM", C, false)), "Value", (await $.mcall((await $.wv([$t21], "OPCommon", C, false)), "CallStringFunction", ["generateInsuredAct", [(await $.mv((await $.wv([$t21], "ODSMotorKaskoTypeID", C, false)), "value"))]])));
    await $.mset((await $.wv([$t21], "ODSMOTORKaskoCLAIM_DATE", C, false)), "Value", (await $.mv((await $.wv([$t21], "dtpClaim", C, false)), "Date")));
    await $.mcall((await $.wv([$t21], "ODSMotorKasko", C, false)), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClaims", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t22], "ODSCusts", C, false)), "Open", []);
    await $.wset([$t22], "FileName", $.add((await $.wcall([$t22], "ExtractFilePath", [(await $.mv((await $.wv([$t22], "Application", C, false)), "ExeName"))], C)), "\\Kasko zerer akti.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
    await $.wset([$t22], "wrdApp", (await $.wcall([$t22], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
    await $.mset((await $.wv([$t22], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t22], "True", C, false)));
    await $.wset([$t22], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t22], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t22], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
    await $.wset([$t22], "wrdSelection", (await $.mv((await $.wv([$t22], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "insured"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "insured2"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "policynum"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t22], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSContractsPolicy_Num", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "insured1"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "mark"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSMotorKaskoInsuredMark", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "statenum"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSMotorKaskoInsuredStateNum", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "date"])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t22], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t22], "DateToStr", [(await $.mv((await $.wv([$t22], "ODSMotorKaskoCLAIM_DATE", C, false)), "Value"))], C))])));
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t22], "unAssigned", C, false)), (await $.wv([$t22], "unAssigned", C, false)), "claimnum"])));
    await $.stmt((await $.mcall((await $.wv([$t22], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t22], "ODSMotorKaskoClaim_Num", C, false)), "Value"))])));
    await $.wset([$t22], "n", (await $.mv((await $.wv([$t22], "ODSClaims", C, false)), "RecordCount")), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.mcall((await $.wv([$t22], "ODSClaims", C, false)), "First", []);
    { const $t23 = (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false));
      await $.wset([$t22], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t24 = true;
      for (;;) {
        if (!$t24) { await $.wset([$t22], "i", $.succ((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t24 = false;
        if (!($.ord((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t23))) break;
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t22], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t22], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t22], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t22], "false", C, false)));
        await $.stmt((await $.wcall([$t22], "FillRow", [1, (await $.wv([$t22], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), (await $.wcall([$t22], "IntToStr", [(await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t22], "ODSClaimsEName", C, false)), "Value")), (await $.mv((await $.wv([$t22], "ODSClaimsState", C, false)), "value"))], C)));
        await $.mcall((await $.wv([$t22], "ODSClaims", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClaims", "FillRow", async function FillRow(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"item": $.copyArg(p0), "doc": $.copyArg(p1), "row": $.copyArg(p2), "text0": $.copyArg(p3), "text1": $.copyArg(p4), "text2": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["item", "doc", "row", "text0", "text1", "text2"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [L0["item"]])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [L0["item"]])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [L0["item"]])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  return L0.result;
}, {"params": ["Item", "Doc", "Row", "Text0", "Text1", "Text2"], "kind": "procedure", "ptypes": ["integer", "Variant", "Integer", "String", "String", "String"]});
  U.method("TfrmClaims", "FillRow1", async function FillRow1(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"doc": $.copyArg(p0), "row": $.copyArg(p1), "text0": $.copyArg(p2), "text1": $.copyArg(p3), "text2": $.copyArg(p4), "text3": $.copyArg(p5), "text4": $.copyArg(p6), result: undefined};
  await $.fixArgs(L0, ["doc", "row", "text0", "text1", "text2", "text3", "text4"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 4])), "Range")), "InsertAfter", [L0["text3"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 5])), "Range")), "InsertAfter", [L0["text4"]])));
  return L0.result;
}, {"params": ["Doc", "Row", "Text0", "Text1", "Text2", "Text3", "Text4"], "kind": "procedure", "ptypes": ["Variant", "Integer", "String", "String", "String", "String", "String"]});
  U.method("TfrmClaims", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t26 = (await $.v(C, "WordExporter"));
      const $t27 = (await $.wv([$t26], "InsMKDataMod", C, false));
      await $.stmt((await $.mcall((await $.wv([$t26, $t27], "ODSCusts", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t26, $t27], "ODSContractsKli_id", C, false)), "Value")), []])));
      await $.stmt((await $.mcall((await $.wv([$t26, $t27], "ODSAValute", C, false)), "Locate", ["valute", (await $.mv((await $.wv([$t26, $t27], "ODSContractsValute_ID", C, false)), "Value")), []])));
      await $.wset([$t26, $t27], "s", 0, C);
      await $.wset([$t26, $t27], "s1", 0, C);
      await $.wset([$t26, $t27], "s2", 0, C);
      await $.mcall((await $.wv([$t26, $t27], "ODSClaimReport", C, false)), "First", []);
      { const $t28 = (await $.mv((await $.wv([$t26, $t27], "ODSClaimReport", C, false)), "RecordCount"));
        await $.wset([$t26, $t27], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
        let $t29 = true;
        for (;;) {
          if (!$t29) { await $.wset([$t26, $t27], "j", $.succ((await $.wv([$t26, $t27], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
          $t29 = false;
          if (!($.ord((await $.wv([$t26, $t27], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t28))) break;
          await $.wset([$t26, $t27], "s1", $.add((await $.wv([$t26, $t27], "s1", C, false)), (await $.mv((await $.wv([$t26, $t27], "ODSClaimReportCount", C, false)), "value"))), C);
          await $.wset([$t26, $t27], "s2", $.add((await $.wv([$t26, $t27], "s2", C, false)), (await $.mv((await $.wv([$t26, $t27], "ODSClaimReportCost", C, false)), "value"))), C);
          await $.mcall((await $.wv([$t26, $t27], "ODSClaimReport", C, false)), "Next", []);
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t26, $t27], "ODSClaimSal", C, false)), "First", []);
      { const $t30 = (await $.mv((await $.wv([$t26, $t27], "ODSClaimSal", C, false)), "RecordCount"));
        await $.wset([$t26, $t27], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t31 = true;
        for (;;) {
          if (!$t31) { await $.wset([$t26, $t27], "i", $.succ((await $.wv([$t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t31 = false;
          if (!($.ord((await $.wv([$t26, $t27], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t30))) break;
          await $.wset([$t26, $t27], "s", $.add((await $.wv([$t26, $t27], "s", C, false)), (await $.mv((await $.wv([$t26, $t27], "ODSClaimSalCost", C, false)), "value"))), C);
          await $.mcall((await $.wv([$t26, $t27], "ODSClaimSal", C, false)), "Next", []);
          await $.tick();
        }
      }
      await $.wset([$t26, $t27], "sum", $.add($.mul((await $.wv([$t26, $t27], "s1", C, false)), (await $.wv([$t26, $t27], "s2", C, false))), (await $.wv([$t26, $t27], "s", C, false))), C);
      await $.wset([$t26, $t27], "FileName", $.add((await $.wcall([$t26, $t27], "ExtractFilePath", [(await $.mv((await $.wv([$t26, $t27], "Application", C, false)), "ExeName"))], C)), "\\SigortaAkti.doc"), C);
      await $.stmt((await $.mcall((await $.wv([$t26, $t27], "WordExporter", C, false)), "Open", [(await $.wv([$t26, $t27], "False", C, false))])));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["insaktdate", (await $.wcall([$t26, $t27], "DateToStr", [(await $.wv([$t26, $t27], "now", C, false))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["actnum", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoact_num", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["actnum1", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoact_num", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["claimdate1", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoClaim_Date", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["insured", (await $.mv((await $.wv([$t26, $t27], "ODSCustsName", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["mark", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredMark", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["statenum", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredStateNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["insured1", (await $.mv((await $.wv([$t26, $t27], "ODSCustsName", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["mark1", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredMark", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["begindate", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSContractsBegin_Date", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["enddate", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSContractsEnd_Date", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["inscost", $.add($.add((await $.wcall([$t26, $t27], "FloatToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSContractsAmmount", C, false)), "Value"))], C)), " "), (await $.mv((await $.wv([$t26, $t27], "ODSAValuteVal_Name", C, false)), "Value"))), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["inssum", $.add($.add((await $.wcall([$t26, $t27], "FloatToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSContractsInsSumm", C, false)), "Value"))], C)), " "), (await $.mv((await $.wv([$t26, $t27], "ODSAValuteVal_Name", C, false)), "Value"))), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["franshiz", $.add($.add((await $.wcall([$t26, $t27], "FloatToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSContractsFranshiz", C, false)), "Value"))], C)), " "), (await $.mv((await $.wv([$t26, $t27], "ODSAValuteVal_Name", C, false)), "Value"))), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["mark2", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredMark", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["statenum1", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredStateNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["insured2", (await $.mv((await $.wv([$t26, $t27], "ODSCustsName", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["claimdate2", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoClaim_Date", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["region", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionRegion", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["street", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionStreet", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["detail", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionDetail", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["actdate", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionActDate", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["person", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionPerson", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["claimmark", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionMark", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["claimstatenum", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionStateNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["region1", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionRegion", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["mark3", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredMark", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["statenum2", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredStateNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["avtoservis", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionAvtoservis", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["mark4", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredMark", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["statenum3", (await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoInsuredStateNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["policynum", (await $.mv((await $.wv([$t26, $t27], "ODSContractsPolicy_Num", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["franshiz1", (await $.wcall([$t26, $t27], "FloatToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSContractsFranshiz", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["payment", (await $.wcall([$t26, $t27], "FloatToStr", [$.sub((await $.wv([$t26, $t27], "sum", C, false)), (await $.mv((await $.wv([$t26, $t27], "ODSContractsFranshiz", C, false)), "Value")))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["valute", (await $.mv((await $.wv([$t26, $t27], "ODSAValuteVal_Name", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["payment1", $.add($.add((await $.wcall([$t26, $t27], "FloatToStr", [$.sub((await $.wv([$t26, $t27], "sum", C, false)), (await $.mv((await $.wv([$t26, $t27], "ODSContractsFranshiz", C, false)), "Value")))], C)), " "), (await $.mv((await $.wv([$t26, $t27], "ODSAValuteVal_Name", C, false)), "Value"))), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["beneficiary", (await $.mv((await $.wv([$t26, $t27], "ODSContractsBeneficiary", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["claimdate3", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoClaim_Date", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["claimdate4", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSMotorKaskoClaim_Date", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["region2", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionRegion", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["region3", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionRegion", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["region4", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionRegion", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["appdate", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionAppDate", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["letterdate", (await $.wcall([$t26, $t27], "DateToStr", [(await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionLetterDate", C, false)), "Value"))], C)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["letternum", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionLetterNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["cprnum", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionSPRNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["prtnum", (await $.mv((await $.wv([$t26, $t27], "ODSClaimDescriptionPrtNum", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "SetBookmark", ["policynum1", (await $.mv((await $.wv([$t26, $t27], "ODSContractsPolicy_Num", C, false)), "Value")), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), (await $.wv([$t26, $t27], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t26, $t27], "False", C, false))], C)));
      await $.stmt($.wcall([$t26, $t27], "Show", [], C));
      await $.mcall((await $.wv([$t26, $t27], "WordExporter", C, false)), "Close", []);
      await $.stmt($.wcall([$t26, $t27], "Close", [], C));
    }
  } catch ($t25) {
    $.rethrowControl($t25);
    $.handled($t25);
    throw $t25;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

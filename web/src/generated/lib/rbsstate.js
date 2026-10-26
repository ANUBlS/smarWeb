// Generated from rbsstate.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("rbsstate", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QExport4", "QExport4Xlsx", "DB", "OracleData", "StdCtrls", "Buttons", "DBCtrls", "ComCtrls", "CMExcelExport", "ExtCtrls", "card_states", "Unit18", "ShlObj", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Trbsdostate", "TForm", {"label2": {"name": "Label2", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblcbavalute": {"name": "DBLCBavalute", "type": "TDBLookupComboBox"}, "editcli_id": {"name": "EditCli_Id", "type": "TEdit"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "avalute": {"name": "avalute", "type": "TOracleDataSet"}, "avalutevalute": {"name": "avaluteVALUTE", "type": "TIntegerField"}, "avaluteval_name": {"name": "avaluteVAL_NAME", "type": "TWideStringField"}, "avalutevalu_name": {"name": "avaluteVALU_NAME", "type": "TWideStringField"}, "avalutevalu_short": {"name": "avaluteVALU_SHORT", "type": "TWideStringField"}, "avaluteustorg": {"name": "avaluteUSTORG", "type": "TFloatField"}, "avaluteustpok": {"name": "avaluteUSTPOK", "type": "TFloatField"}, "avalutevalu_gen": {"name": "avaluteVALU_GEN", "type": "TWideStringField"}, "avalutevalu_az": {"name": "avaluteVALU_AZ", "type": "TWideStringField"}, "avaluteusing": {"name": "avaluteUSING", "type": "TIntegerField"}, "avalutevalu_other": {"name": "avaluteVALU_OTHER", "type": "TWideStringField"}, "avalutevalu_inter": {"name": "avaluteVALU_INTER", "type": "TWideStringField"}, "avalutevalu_bala": {"name": "avaluteVALU_BALA", "type": "TWideStringField"}, "avalutepristavka": {"name": "avalutePRISTAVKA", "type": "TFloatField"}, "avalutecountry": {"name": "avaluteCOUNTRY", "type": "TWideStringField"}, "avaluteust_pok1": {"name": "avaluteUST_POK1", "type": "TFloatField"}, "avaluteoffical": {"name": "avaluteOFFICAL", "type": "TWideStringField"}, "avalutelimit": {"name": "avaluteLIMIT", "type": "TFloatField"}, "avalutedebet": {"name": "avaluteDEBET", "type": "TFloatField"}, "avalutekredit": {"name": "avaluteKREDIT", "type": "TFloatField"}, "avalutef5501p": {"name": "avaluteF5501P", "type": "TFloatField"}, "avalutef5501v": {"name": "avaluteF5501V", "type": "TFloatField"}, "avalutesdebet": {"name": "avaluteSDEBET", "type": "TFloatField"}, "avalutescredit": {"name": "avaluteSCREDIT", "type": "TFloatField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "qexport4xlsx1": {"name": "QExport4Xlsx1", "type": "TQExport4Xlsx"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("rbsdostate", null, "Trbsdostate");
  });
  U.func("DesktopPath", async function DesktopPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L0["zpath"]])));
  L0["result"] = (L0["zpath"]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Trbsdostate", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton1")), "Checked")))) {
    await $.set(C, "card_state", (await $.mcall((await $.v(C, "Tcard_state")), "Create", [Self])));
    {
      const $t1 = (await $.mv((await $.v(C, "DataMod_CARDS")), "rbsdofilerep"));
      await $.stmt($.wcall([$t1], "Close", [], C));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["dat1", (await $.wcall([$t1], "trunc", [(await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "Date"))], C))], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["dat2", (await $.wcall([$t1], "trunc", [(await $.mv((await $.wv([$t1], "DateTimePicker2", C, false)), "Date"))], C))], C)));
      if ($.truthy((await $.mv((await $.wv([$t1], "CheckBox1", C, false)), "Checked")))) {
        { const $t2 = await $.iset((await $.wv([$t1], "sql", C, false)), [4], $.add($.add(" and device in (", (await $.mv((await $.wv([$t1], "EditCli_Id", C, false)), "Text"))), ")")); if ($t2 !== undefined) { await $.wset([$t1], "sql", $t2, C); } }
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "CBCurrency", C, false)), "Checked")), (await $.wv([$t1], "true", C, false))))) {
        { const $t3 = await $.iset((await $.wv([$t1], "sql", C, false)), [5], $.add($.add(" and accoutcurr in ('", (await $.mv((await $.wv([$t1], "DBLCBavalute", C, false)), "Text"))), "')")); if ($t3 !== undefined) { await $.wset([$t1], "sql", $t3, C); } }
      }
      await $.stmt($.wcall([$t1], "open", [], C));
    }
    await $.mset((await $.mv((await $.v(C, "card_state")), "QRD_Begin")), "Caption", (await $.call(C, "DateToStr", [(await $.mv((await $.v(C, "DateTimePicker1")), "Date"))])));
    await $.mset((await $.mv((await $.v(C, "card_state")), "QRD_End")), "Caption", (await $.call(C, "DateToStr", [(await $.mv((await $.v(C, "DateTimePicker2")), "Date"))])));
    await $.mcall((await $.mv((await $.v(C, "card_state")), "QRep")), "Preview", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "radiobutton2")), "Checked")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
      {
        const $t4 = (await $.mv((await $.v(C, "DataMod_CARDS")), "rbsdofilerep"));
        await $.stmt($.wcall([$t4], "Close", [], C));
        await $.stmt((await $.wcall([$t4], "SetVariable", ["dat1", (await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "DateTimePicker1", C, false)), "Date"))], C))], C)));
        await $.stmt((await $.wcall([$t4], "SetVariable", ["dat2", (await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "DateTimePicker2", C, false)), "Date"))], C))], C)));
        if ($.truthy((await $.mv((await $.wv([$t4], "CheckBox1", C, false)), "Checked")))) {
          { const $t5 = await $.iset((await $.wv([$t4], "sql", C, false)), [4], $.add($.add(" and device in (", (await $.mv((await $.wv([$t4], "EditCli_Id", C, false)), "Text"))), ")")); if ($t5 !== undefined) { await $.wset([$t4], "sql", $t5, C); } }
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t4], "CBCurrency", C, false)), "Checked")), (await $.wv([$t4], "true", C, false))))) {
          { const $t6 = await $.iset((await $.wv([$t4], "sql", C, false)), [5], $.add($.add(" and accoutcurr in ('", (await $.mv((await $.wv([$t4], "DBLCBavalute", C, false)), "Text"))), "')")); if ($t6 !== undefined) { await $.wset([$t4], "sql", $t6, C); } }
        }
        await $.mcall((await $.mv((await $.wv([$t4], "DataMod_CARDS", C, false)), "rbsdofilerep")), "open", []);
      }
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "rbsdofilerep")), "RecordCount")), 0))) {
        if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
          await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
        }
        await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "rbsdofilerep")), "RBSDOFILES", true])));
        await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş aralıqda məlumat yoxdur!!!!"])));
      }
    } else {
      {
        const $t7 = (await $.mv((await $.v(C, "DataMod_CARDS")), "RbsTaxRep"));
        await $.stmt($.wcall([$t7], "Close", [], C));
        await $.stmt((await $.wcall([$t7], "SetVariable", ["dat1", (await $.wcall([$t7], "trunc", [(await $.mv((await $.wv([$t7], "DateTimePicker1", C, false)), "Date"))], C))], C)));
        await $.stmt((await $.wcall([$t7], "SetVariable", ["dat2", (await $.wcall([$t7], "trunc", [(await $.mv((await $.wv([$t7], "DateTimePicker2", C, false)), "Date"))], C))], C)));
        await $.mcall((await $.mv((await $.wv([$t7], "DataMod_CARDS", C, false)), "RbsTaxRep")), "open", []);
      }
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "RbsTaxRep")), "RecordCount")), 0))) {
        if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
          await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
        }
        await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "RbsTaxRep")), "RbsTaxFiles", true])));
        await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş aralıqda məlumat yoxdur!!!!"])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Trbsdostate", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditCli_Id")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from UnitExchange.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitExchange", ["Windows", "Messages", "SysUtils", "ExtCtrls", "StdCtrls", "Buttons", "Mask", "Dialogs", "DBCtrls", "ComCtrls", "Controls", "Classes", "Graphics", "Forms", "Unit_ExchangeMGR", "UnitDateExch", "UnitProcAndFunc", "OracleData", "Oracle", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormExchange", "TForm", {"groupboxmain": {"name": "GroupBoxMain", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "dtp_date": {"name": "DTP_Date", "type": "TDateTimePicker"}, "grboxvalute": {"name": "GrBoxValute", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "dblc_currency": {"name": "DBLC_Currency", "type": "TDBLookupComboBox"}, "edit_purchase_course": {"name": "Edit_purchase_course", "type": "TEdit"}, "edit_nb_course": {"name": "Edit_nb_course", "type": "TEdit"}, "paneldest": {"name": "PanelDest", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dtp_system_time": {"name": "DTP_System_Time", "type": "TDateTimePicker"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "timer": {"name": "Timer", "type": "TTimer"}, "dblc_curr_other": {"name": "DBLC_Curr_Other", "type": "TDBLookupComboBox"}, "edit_selling_course": {"name": "Edit_selling_course", "type": "TEdit"}, "edit_relation_course": {"name": "Edit_Relation_Course", "type": "TEdit"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "bevel3": {"name": "Bevel3", "type": "TBevel"}, "bevel4": {"name": "Bevel4", "type": "TBevel"}, "bevel5": {"name": "Bevel5", "type": "TBevel"}, "bevel6": {"name": "Bevel6", "type": "TBevel"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit_other_nb_course": {"name": "Edit_other_nb_course", "type": "TEdit"}, "bevel7": {"name": "Bevel7", "type": "TBevel"}, "edit_exchange_amount": {"name": "Edit_Exchange_Amount", "type": "TEdit"}, "edit_ekv_amount": {"name": "Edit_Ekv_Amount", "type": "TEdit"}, "edit_fee_amount": {"name": "Edit_Fee_Amount", "type": "TEdit"}, "bevel8": {"name": "Bevel8", "type": "TBevel"}, "bevel9": {"name": "Bevel9", "type": "TBevel"}, "bevel10": {"name": "Bevel10", "type": "TBevel"}, "edit_setting": {"name": "Edit_Setting", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit_exch": {"name": "Edit_Exch", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "labelcountry": {"name": "LabelCountry", "type": "TLabel"}, "bevel11": {"name": "Bevel11", "type": "TBevel"}, "bevel12": {"name": "Bevel12", "type": "TBevel"}, "bevel13": {"name": "Bevel13", "type": "TBevel"}, "bevel14": {"name": "Bevel14", "type": "TBevel"}, "bevel15": {"name": "Bevel15", "type": "TBevel"}, "bevel16": {"name": "Bevel16", "type": "TBevel"}, "bevel17": {"name": "Bevel17", "type": "TBevel"}, "bevel18": {"name": "Bevel18", "type": "TBevel"}, "bevel19": {"name": "Bevel19", "type": "TBevel"}, "bevel20": {"name": "Bevel20", "type": "TBevel"}, "bevel21": {"name": "Bevel21", "type": "TBevel"}, "bevel22": {"name": "Bevel22", "type": "TBevel"}, "bevel23": {"name": "Bevel23", "type": "TBevel"}, "bevel24": {"name": "Bevel24", "type": "TBevel"}, "edit_first_name": {"name": "Edit_First_Name", "type": "TEdit"}, "edit_last_name": {"name": "Edit_Last_Name", "type": "TEdit"}, "edit_pasport": {"name": "Edit_Pasport", "type": "TEdit"}, "edit_aze": {"name": "Edit_AZE", "type": "TEdit"}, "edit_giving_member": {"name": "Edit_Giving_Member", "type": "TEdit"}, "edit_cust_confirm": {"name": "Edit_Cust_Confirm", "type": "TEdit"}, "edit_father": {"name": "Edit_Father", "type": "TEdit"}, "edit_country": {"name": "Edit_Country", "type": "TEdit"}, "dblc_country": {"name": "DBLC_Country", "type": "TDBLookupComboBox"}, "edit_cust_date": {"name": "Edit_Cust_Date", "type": "TMaskEdit"}, "dblc_first_name": {"name": "DBLC_First_Name", "type": "TDBLookupComboBox"}, "dblc_last_name": {"name": "DBLC_Last_Name", "type": "TDBLookupComboBox"}, "dblc_father": {"name": "DBLC_Father", "type": "TDBLookupComboBox"}, "btnrun": {"name": "BtnRun", "type": "TBitBtn"}, "btnexit": {"name": "BtnExit", "type": "TBitBtn"}, "dblc_cust_confirm": {"name": "DBLC_Cust_Confirm", "type": "TDBLookupComboBox"}, "dblc_giving_member": {"name": "DBLC_Giving_Member", "type": "TDBLookupComboBox"}, "bevel25": {"name": "Bevel25", "type": "TBevel"}}, {});
  U.init(async () => {
    U.var_("FormExchange", null, "TFormExchange");
    U.var_("resultID", 0, "integer");
  });
  U.method("TFormExchange", "TimerTimer", async function TimerTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTP_System_Time")), "Time", (await $.v(C, "Time")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "BtnRunClick", async function BtnRunClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ex_status"] = 3;
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLC_Currency")), "Text")), (await $.mv((await $.v(C, "DBLC_Curr_Other")), "Text")))))) {
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.v(C, "DBLC_Curr_Other")), "KeyValue")), 0)), async () => (($.ne((await $.mv((await $.v(C, "DBLC_Curr_Other")), "KeyValue")), 0))))))) {
        if ($.truthy((await $.or_(($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_Exchange_Amount")), "Text"))])), "")), async () => ($.gt((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Exchange_Amount")), "Text"))])), 0)))))) {
          {
            const $t1 = (await $.v(C, "DataModExch"));
            await $.wset([$t1], "v_id", (await $.mv((await $.mcall((await $.wv([$t1], "ODSExchProvarch", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "Trans", C, false)), "status", (await $.wv([$t1], "ex_status", { get: async () => L0["ex_status"], set: async (v) => { L0["ex_status"] = v; }, local: true }, false)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "operator_id", (await $.mcall((await $.wv([$t1], "OPExchMgr", C, false)), "CallIntegerFunction", ["UserID", []])));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "trans_date", (await $.wcall([$t1], "Integer", [(await $.wcall([$t1], "Trunc", [(await $.mv((await $.wv([$t1], "DTP_Date", C, false)), "DateTime"))], C))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "debit_amount", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit_Exchange_Amount", C, false)), "Text"))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "l_amount", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit_Ekv_Amount", C, false)), "Text"))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "fee_amount", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit_Fee_Amount", C, false)), "Text"))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_course", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit_purchase_course", C, false)), "Text"))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "trans_name", (await $.mv((await $.wv([$t1], "Edit_Setting", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_name", (await $.mv((await $.wv([$t1], "Edit_First_Name", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_lname", (await $.mv((await $.wv([$t1], "Edit_Last_Name", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_passport", (await $.mv((await $.wv([$t1], "Edit_Pasport", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "exch_name", (await $.mv((await $.wv([$t1], "Edit_Exch", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_id", (await $.mv((await $.wv([$t1], "DBLC_Currency", C, false)), "KeyValue")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "ex_id", (await $.mv((await $.mcall((await $.wv([$t1], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_father", (await $.mv((await $.wv([$t1], "Edit_Father", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_date", (await $.mv((await $.wv([$t1], "Edit_Cust_Date", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_confirm", (await $.mv((await $.wv([$t1], "Edit_Cust_Confirm", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_giving_member", (await $.mv((await $.wv([$t1], "Edit_Giving_Member", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_nb_course", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit_nb_course", C, false)), "Text"))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "op_time", (await $.mv((await $.wv([$t1], "DTP_System_Time", C, false)), "DateTime")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_name", (await $.mv((await $.wv([$t1], "DBLC_Currency", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_changed_name", (await $.mv((await $.wv([$t1], "DBLC_Curr_Other", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_changed_id", (await $.mv((await $.wv([$t1], "DBLC_Curr_Other", C, false)), "KeyValue")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "val_changed_course", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit_selling_course", C, false)), "Text"))], C)));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "cust_country", (await $.mv((await $.wv([$t1], "Edit_Country", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "country", (await $.mv((await $.wv([$t1], "Edit_AZE", C, false)), "Text")));
            await $.mset((await $.wv([$t1], "Trans", C, false)), "SessionName", (await $.mv((await $.mv((await $.mv((await $.wv([$t1], "DataModExch", C, false)), "OPExchMgr")), "Session")), "LogonUserName")));
            { const $t2 = (await $.wv([$t1], "StatusExchange", C, false));
              if ($.eq($t2, (await $.wv([$t1], "seExchangeInsert", C, false)))) {
                {
                  const $t3 = (await $.wv([$t1], "OPTrans", C, false));
                  await $.wset([$t1, $t3], "resultID", (await $.wcall([$t1, $t3], "CallIntegerFunction", ["add_ex_prov_trans", ["status", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "status")), "operator_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "operator_id")), "trans_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "trans_date")), "debit_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount")), "l_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount")), "fee_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "fee_amount")), "val_course", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_course")), "trans_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "trans_name")), "cust_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_name")), "cust_lname", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_lname")), "cust_passport", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_passport")), "exch_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "exch_name")), "val_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_id")), "ex_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "ex_id")), "cust_father", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_father")), "cust_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_date")), "cust_confirm", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_confirm")), "cust_giving_member", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_giving_member")), "val_nb_course", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_nb_course")), "op_time", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "op_time")), "val_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_name")), "val_changed_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_name")), "val_changed_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_id")), "val_changed_course", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_course")), "cust_country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_country")), "country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "country")), "SessionName", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "SessionName"))]], C)), C);
                  await $.stmt((await $.wcall([$t1, $t3], "CallProcedure", ["ex_constants_add", ["a_ex_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "ex_id")), "a_cust_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_name")), "a_cust_lname", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_lname")), "a_cust_passport", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_passport")), "a_cust_father", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_father")), "a_cust_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_date")), "a_cust_confirm", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_confirm")), "a_cust_giving_member", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_giving_member")), "a_cust_country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_country")), "a_country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "country"))]], C)));
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount", $.mul((await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_course")), (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount"))));
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "fee_amount", (await $.wcall([$t1, $t3], "ABS", [$.sub((await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount")), ($.mul((await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_nb_course")), (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount")))))], C)));
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "trans_name", (await $.wcall([$t1, $t3], "UpperCase", [$.add($.add($.add($.add($.add((await $.wcall([$t1, $t3], "SumNumToFull", [(await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount"))], C)), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t3], "DBLC_Currency", C, false)), "ListSource")), "DataSet")), "FieldByName", ["val_name"])), "AsString"))), " -nin "), (await $.mv((await $.wv([$t1, $t3], "Edit_purchase_course", C, false)), "Text"))), " kursla alışı ")], C)));
                  await $.wset([$t1, $t3], "resultID", (await $.wcall([$t1, $t3], "CallIntegerFunction", ["add_ex_prov_trans", ["status", 4, "operator_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "operator_id")), "trans_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "trans_date")), "debit_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount")), "l_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount")), "fee_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "fee_amount")), "val_course", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_course")), "trans_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "trans_name")), "cust_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_name")), "cust_lname", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_lname")), "cust_passport", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_passport")), "exch_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "exch_name")), "val_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_id")), "ex_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "ex_id")), "cust_father", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_father")), "cust_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_date")), "cust_confirm", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_confirm")), "cust_giving_member", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_giving_member")), "val_nb_course", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_nb_course")), "op_time", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "op_time")), "val_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_name")), "val_changed_name", "AZN", "val_changed_id", 0, "val_changed_course", 1, "cust_country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_country")), "country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "country")), "SessionName", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "SessionName"))]], C)), C);
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount", (await $.wcall([$t1, $t3], "StrToFloat", [(await $.mv((await $.wv([$t1, $t3], "Edit_Ekv_Amount", C, false)), "Text"))], C)));
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount", $.mul((await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_course")), (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount"))));
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "fee_amount", (await $.wcall([$t1, $t3], "ABS", [$.sub((await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount")), ($.mul((await $.wcall([$t1, $t3], "StrToFloat", [(await $.mv((await $.wv([$t1, $t3], "Edit_other_nb_course", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount")))))], C)));
                  await $.mset((await $.wv([$t1, $t3], "Trans", C, false)), "trans_name", (await $.wcall([$t1, $t3], "UpperCase", [$.add($.add($.add($.add($.add((await $.wcall([$t1, $t3], "SumNumToFull", [(await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount"))], C)), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t3], "DBLC_Curr_Other", C, false)), "ListSource")), "DataSet")), "FieldByName", ["val_name"])), "AsString"))), " -nin "), (await $.mv((await $.wv([$t1, $t3], "Edit_selling_course", C, false)), "Text"))), " kursla satışı ")], C)));
                  await $.wset([$t1, $t3], "resultID", (await $.wcall([$t1, $t3], "CallIntegerFunction", ["add_ex_prov_trans", ["status", 5, "operator_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "operator_id")), "trans_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "trans_date")), "debit_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "debit_amount")), "l_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "l_amount")), "fee_amount", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "fee_amount")), "val_course", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_course")), "trans_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "trans_name")), "cust_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_name")), "cust_lname", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_lname")), "cust_passport", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_passport")), "exch_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "exch_name")), "val_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_id")), "ex_id", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "ex_id")), "cust_father", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_father")), "cust_date", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_date")), "cust_confirm", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_confirm")), "cust_giving_member", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_giving_member")), "val_nb_course", (await $.wcall([$t1, $t3], "StrToFloat", [(await $.mv((await $.wv([$t1, $t3], "Edit_other_nb_course", C, false)), "Text"))], C)), "op_time", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "op_time")), "val_name", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "val_changed_name")), "val_changed_name", "AZN", "val_changed_id", 0, "val_changed_course", 1, "cust_country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "cust_country")), "country", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "country")), "SessionName", (await $.mv((await $.wv([$t1, $t3], "Trans", C, false)), "SessionName"))]], C)), C);
                }
                await $.mset((await $.wv([$t1], "Label1", C, false)), "Caption", (await $.mv((await $.wv([$t1], "Trans", C, false)), "SessionName")));
                await $.stmt($.wcall([$t1], "open_cust_data_sets", [], C));
                {
                  const $t4 = (await $.wv([$t1], "ODSExchProvarch", C, false));
                  await $.stmt($.wcall([$t1, $t4], "Refresh", [], C));
                }
                {
                  const $t5 = (await $.wv([$t1], "ODSExchRate", C, false));
                  await $.stmt($.wcall([$t1, $t5], "Refresh", [], C));
                }
              }
              else if ($.eq($t2, (await $.wv([$t1], "seExchangeEdit", C, false)))) {
                {
                  const $t6 = (await $.wv([$t1], "OPTrans", C, false));
                  await $.stmt((await $.wcall([$t1, $t6], "CallProcedure", ["ex_provarch_edit", ["v_id", (await $.wv([$t1, $t6], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "status", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "status")), "operator_id", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "operator_id")), "trans_date", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "trans_date")), "debit_amount", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "debit_amount")), "l_amount", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "l_amount")), "fee_amount", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "fee_amount")), "val_course", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "val_course")), "trans_name", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "trans_name")), "cust_name", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_name")), "cust_lname", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_lname")), "cust_passport", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_passport")), "exch_name", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "exch_name")), "cust_father", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_father")), "cust_date", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_date")), "cust_confirm", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_confirm")), "cust_giving_member", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_giving_member")), "val_nb_course", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "val_nb_course")), "val_name", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "val_name")), "val_changed_name", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "val_changed_name")), "val_changed_id", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "val_changed_id")), "val_changed_course", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "val_changed_course")), "cust_country", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "cust_country")), "country", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "country")), "SessionName", (await $.mv((await $.wv([$t1, $t6], "Trans", C, false)), "SessionName"))]], C)));
                }
                {
                  const $t7 = (await $.wv([$t1], "ODSExchProvarch", C, false));
                  await $.stmt($.wcall([$t1, $t7], "Refresh", [], C));
                }
                {
                  const $t8 = (await $.wv([$t1], "ODSExchRate", C, false));
                  await $.stmt($.wcall([$t1, $t8], "Refresh", [], C));
                }
              }
            }
          }
        } else {
          await $.stmt((await $.call(C, "ShowMessage", ["Məbləği düz yazın!!!!!Bu bir əmrdir!!!"])));
        }
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Milli valyuta ilə dəyişmək olmaz!"])));
      }
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Valyutalar eynidir!"])));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "Edit_Exchange_AmountKeyPress", async function Edit_Exchange_AmountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormExchange", "DBLC_CurrencyClick", async function DBLC_CurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc"));
    await $.mset((await $.wv([$t9], "Edit_purchase_course", C, false)), "Text", (await $.mv((await $.wcall([$t9], "FieldByName", ["val_purchase_course"], C)), "AsString")));
    await $.mset((await $.wv([$t9], "Edit_nb_course", C, false)), "Text", (await $.mv((await $.wcall([$t9], "FieldByName", ["val_nb_course"], C)), "AsString")));
  }
  await $.mset((await $.v(C, "Edit_Exchange_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
  await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
  await $.mset((await $.v(C, "Edit_Fee_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Exchange_Amount")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Edit_Exchange_AmountChange", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "DBLC_Curr_OtherClick", async function DBLC_Curr_OtherClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchRateOther"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t10], "Edit_purchase_course", C, false)), "Text")), ""))) {
      await $.mset((await $.wv([$t10], "Edit_selling_course", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["val_selling_course"], C)), "AsString")));
      await $.mset((await $.wv([$t10], "Edit_Relation_Course", C, false)), "Text", (await $.wcall([$t10], "FormatFloat", ["#.##", ($.fdiv((await $.wcall([$t10], "StrToFloat", [(await $.mv((await $.wv([$t10], "Edit_purchase_course", C, false)), "Text"))], C)), (await $.wcall([$t10], "StrToFloat", [(await $.mv((await $.wv([$t10], "Edit_selling_course", C, false)), "Text"))], C))))], C)));
      await $.mset((await $.wv([$t10], "Edit_other_nb_course", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["val_nb_course"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t10], "DBLC_Curr_Other", C, false)), "KeyValue", (-(1)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "Edit_Exchange_AmountChange", async function Edit_Exchange_AmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "man_ekv": 0, "man_ekv_other": 0, "val_nb_course": 0, "val_other_nb_course": 0, "purchase_course": 0, "exchange_amount": 0, "ekv_amount": 0, "selling_course": 0, "result_amount": 0, "fee": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Setting")), "Text", $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "SumNumToFull", [(await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Exchange_Amount")), "Text"))]))])), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLC_Currency")), "ListSource")), "DataSet")), "FieldByName", ["val_name"])), "AsString"))), "-nin "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLC_Curr_Other")), "ListSource")), "DataSet")), "FieldByName", ["val_name"])), "AsString"))), "-a "), (await $.mv((await $.v(C, "Edit_Relation_Course")), "Text"))), " kursla dəyişdirilməsi"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Exchange_Amount")), "Text")), ""))) {
    L0["purchase_course"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_purchase_course")), "Text"))]));
    L0["selling_course"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_selling_course")), "Text"))]));
    L0["val_other_nb_course"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_other_nb_course")), "Text"))]));
    L0["val_nb_course"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_nb_course")), "Text"))]));
    L0["exchange_amount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Exchange_Amount")), "Text"))]));
    L0["man_ekv"] = $.mul(L0["exchange_amount"], L0["purchase_course"]);
    L0["result_amount"] = $.fdiv(L0["man_ekv"], L0["selling_course"]);
    await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Text", (await $.call(C, "FormatFloat", ["#.##", L0["result_amount"]])));
    L0["ekv_amount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Ekv_Amount")), "Text"))]));
    L0["man_ekv_other"] = $.mul(L0["ekv_amount"], L0["selling_course"]);
    L0["fee"] = $.add((await $.call(C, "abs", [$.sub(L0["man_ekv"], ($.mul(L0["val_nb_course"], L0["exchange_amount"])))])), (await $.call(C, "abs", [$.sub(L0["man_ekv_other"], ($.mul(L0["val_other_nb_course"], L0["ekv_amount"])))])));
    await $.mset((await $.v(C, "Edit_Fee_Amount")), "Text", (await $.call(C, "FormatFloat", ["#.##", L0["fee"]])));
  } else {
    await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Text", "");
    await $.mset((await $.v(C, "Edit_Fee_Amount")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "ClearEdit", async function ClearEdit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Edit_purchase_course")), "Text", "");
  await $.mset((await $.v(C, "Edit_nb_course")), "Text", "");
  await $.mset((await $.v(C, "DBLC_Curr_Other")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Edit_selling_course")), "Text", "");
  await $.mset((await $.v(C, "Edit_other_nb_course")), "Text", "");
  await $.mset((await $.v(C, "Edit_Relation_Course")), "Text", "");
  await $.mset((await $.v(C, "Edit_Fee_Amount")), "Text", "");
  await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Text", "");
  await $.mset((await $.v(C, "Edit_Exchange_Amount")), "Text", "");
  await $.mset((await $.v(C, "Edit_First_Name")), "Text", "");
  await $.mset((await $.v(C, "Edit_Last_Name")), "Text", "");
  await $.mset((await $.v(C, "Edit_Father")), "Text", "");
  await $.mset((await $.v(C, "Edit_Pasport")), "Text", "");
  await $.mset((await $.v(C, "Edit_Cust_Date")), "Text", "");
  await $.mset((await $.v(C, "Edit_Cust_Confirm")), "Text", "");
  await $.mset((await $.v(C, "Edit_Giving_Member")), "Text", "");
  await $.mset((await $.v(C, "Edit_Country")), "Text", "");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormExchange", "DBLC_CountryClick", async function DBLC_CountryClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Country")), "Text", (await $.mv((await $.v(C, "DBLC_Country")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormExchange", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormExchange", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_Country")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Cust_Confirm")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Father")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_First_Name")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Giving_Member")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Last_Name")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DTP_Date")), "Date", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "DTP_System_Time")), "Time", (await $.v(C, "Time")));
  {
    const $t11 = (await $.v(C, "DataModExch"));
    const $t12 = (await $.mv((await $.wv([$t11], "DataModExch", C, false)), "ODSExchProvarch"));
    await $.mcall((await $.wv([$t11, $t12], "ODSRateInsert", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11, $t12], "ODSRateInsert", C, false)), "SetVariable", ["dat", (await $.wcall([$t11, $t12], "Integer", [(await $.wcall([$t11, $t12], "Trunc", [(await $.mv((await $.wv([$t11, $t12], "DTP_Date", C, false)), "DateTime"))], C))], C))])));
    await $.mcall((await $.wv([$t11, $t12], "ODSRateInsert", C, false)), "Open", []);
    { const $t13 = (await $.wv([$t11, $t12], "StatusExchange", C, false));
      if ($.eq($t13, (await $.wv([$t11, $t12], "seExchangeInsert", C, false)))) {
        await $.stmt($.wcall([$t11, $t12], "ClearEdit", [], C));
      }
      else if ($.eq($t13, (await $.wv([$t11, $t12], "seExchangeEdit", C, false)))) {
        await $.mset((await $.wv([$t11, $t12], "DTP_Date", C, false)), "Date", (await $.wcall([$t11, $t12], "Int", [(await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["dat"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t11, $t12], "DBLC_Currency", C, false)), "KeyValue", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_id"], C)), "AsInteger")));
        await $.mset((await $.wv([$t11, $t12], "DBLC_Curr_Other", C, false)), "KeyValue", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_changed_id"], C)), "AsInteger")));
        await $.mset((await $.wv([$t11, $t12], "Edit_purchase_course", C, false)), "Text", (await $.wcall([$t11, $t12], "FormatFloat", ["#.####", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["op_course"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_selling_course", C, false)), "Text", (await $.wcall([$t11, $t12], "FormatFloat", ["#.####", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_changed_course"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_other_nb_course", C, false)), "Text", (await $.wcall([$t11, $t12], "FormatFloat", ["#.####", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_changed_course"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_Relation_Course", C, false)), "Text", (await $.wcall([$t11, $t12], "FormatFloat", ["#.####", $.fdiv((await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["op_course"], C)), "AsFloat")), (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_changed_course"], C)), "AsFloat")))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_nb_course", C, false)), "Text", (await $.wcall([$t11, $t12], "FormatFloat", ["#.####", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_nb_course"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_Exchange_Amount", C, false)), "Text", (await $.wcall([$t11, $t12], "FloatToStr", [(await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["debitamount"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_Ekv_Amount", C, false)), "Text", (await $.wcall([$t11, $t12], "FloatToStr", [(await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["lamount"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_Fee_Amount", C, false)), "Text", (await $.wcall([$t11, $t12], "FloatToStr", [(await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["fee_amount"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t11, $t12], "Edit_Setting", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["oper_name"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_First_Name", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_name"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Last_Name", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_lname"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Pasport", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_passport"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Father", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_father"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Cust_Date", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_date"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Cust_Confirm", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_confirm"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Giving_Member", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_giving_member"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_Country", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["cust_country"], C)), "AsString")));
        await $.mset((await $.wv([$t11, $t12], "Edit_AZE", C, false)), "Text", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["country"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "BtnExitClick", async function BtnExitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "DBLC_First_NameClick", async function DBLC_First_NameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_First_Name")), "Text", (await $.mv((await $.v(C, "DBLC_First_Name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "DBLC_Last_NameClick", async function DBLC_Last_NameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Last_Name")), "Text", (await $.mv((await $.v(C, "DBLC_Last_Name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "DBLC_FatherClick", async function DBLC_FatherClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Father")), "Text", (await $.mv((await $.v(C, "DBLC_Father")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "DBLC_Cust_ConfirmClick", async function DBLC_Cust_ConfirmClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Cust_Confirm")), "Text", (await $.mv((await $.v(C, "DBLC_Cust_Confirm")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "DBLC_Giving_MemberClick", async function DBLC_Giving_MemberClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Giving_Member")), "Text", (await $.mv((await $.v(C, "DBLC_Giving_Member")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExchange", "Edit_PasportKeyPress", async function Edit_PasportKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

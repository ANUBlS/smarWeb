// Generated from EditFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EditFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMDBSearchEdit", "DB", "OracleData", "Buttons", "CurrencyEdit", "ComCtrls", "sboapiDataModuleImpl", "SimCorpImpl"]);
  const C = [U];
  U.defClass("TEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "cmsearcheditloacaccs": {"name": "CMSearchEditLoacAccs", "type": "TCMSearchEdit"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1kli_id": {"name": "OracleDataSet1KLI_ID", "type": "TFloatField"}, "oracledataset1op_id": {"name": "OracleDataSet1OP_ID", "type": "TFloatField"}, "oracledataset1acc_no": {"name": "OracleDataSet1ACC_NO", "type": "TWideStringField"}, "oracledataset1val_acc": {"name": "OracleDataSet1VAL_ACC", "type": "TIntegerField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset1open_dat": {"name": "OracleDataSet1OPEN_DAT", "type": "TDateTimeField"}, "oracledataset1close_dat": {"name": "OracleDataSet1CLOSE_DAT", "type": "TDateTimeField"}, "oracledataset1bal_cn1": {"name": "OracleDataSet1BAL_CN1", "type": "TFloatField"}, "oracledataset1bal_cn2": {"name": "OracleDataSet1BAL_CN2", "type": "TFloatField"}, "oracledataset1bal_cn3": {"name": "OracleDataSet1BAL_CN3", "type": "TFloatField"}, "oracledataset1bal_cn4": {"name": "OracleDataSet1BAL_CN4", "type": "TFloatField"}, "oracledataset1filial": {"name": "OracleDataSet1FILIAL", "type": "TIntegerField"}, "oracledataset1sim_otcet": {"name": "OracleDataSet1SIM_OTCET", "type": "TFloatField"}, "oracledataset1tipacc": {"name": "OracleDataSet1TIPACC", "type": "TWideStringField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "label2": {"name": "Label2", "type": "TLabel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label7": {"name": "Label7", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("EditForm", null, "TEditForm");
  });
  U.method("TEditForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "SimCorp"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "FieldByName", ["status"])), "AsInteger")), 1))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Bu əməliyatı dəyişmək olmaz !"], C)));
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.wv([$t1], "OraclePackage1", C, false)), "CallProcedure", ["edit_arxive", ["p_id", (await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "FieldByName", ["id"])), "AsInteger")), "p_debitacc", (await $.mv((await $.wv([$t1], "CMSearchEditLoacAccs", C, false)), "Text")), "p_kreditacc", (await $.mv((await $.wv([$t1], "CMSearchEdit1", C, false)), "Text")), "p_debitamount", (await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")), "p_kreditamount", (await $.mv((await $.wv([$t1], "CurrencyEdit2", C, false)), "Value")), "p_lamount", (await $.mv((await $.wv([$t1], "CurrencyEdit3", C, false)), "Value")), "p_description", (await $.mv((await $.wv([$t1], "Edit1", C, false)), "Text")), "p_type", (await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "FieldByName", ["typ"])), "AsInteger")), "p_date", (await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime"))]])));
    await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "Refresh", []);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEditForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from UnitReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitReport", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "Db", "OracleData", "StdCtrls", "Grids", "DBGrids", "Oracle", "Buttons", "ComCtrls", "XDBGrids", "CMExcelExport", "sboapiDataModuleImpl", "CommonDecls", "sbSystem", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormReport", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dsrc_girov": {"name": "Dsrc_girov", "type": "TDataSource"}, "dsrc_zamin": {"name": "Dsrc_zamin", "type": "TDataSource"}, "ods_girov": {"name": "ODS_girov", "type": "TOracleDataSet"}, "ods_zamin": {"name": "ODS_zamin", "type": "TOracleDataSet"}, "ods_zaminid": {"name": "ODS_zaminID", "type": "TFloatField"}, "ods_zaminboorowerid": {"name": "ODS_zaminBOOROWERID", "type": "TFloatField"}, "ods_zaminnumberofcredit": {"name": "ODS_zaminNUMBEROFCREDIT", "type": "TWideStringField"}, "ods_zaminfilial": {"name": "ODS_zaminFILIAL", "type": "TWideStringField"}, "ods_zamincreditlineamount": {"name": "ODS_zaminCREDITLINEAMOUNT", "type": "TFloatField"}, "ods_zaminstatus": {"name": "ODS_zaminSTATUS", "type": "TWideStringField"}, "ods_zaminguarantorname": {"name": "ODS_zaminGUARANTORNAME", "type": "TWideStringField"}, "ods_zamindateofbirth": {"name": "ODS_zaminDATEOFBIRTH", "type": "TDateTimeField"}, "ods_zaminpincode": {"name": "ODS_zaminPINCODE", "type": "TWideStringField"}, "ods_zamincuntry": {"name": "ODS_zaminCUNTRY", "type": "TWideStringField"}, "ods_zamincity": {"name": "ODS_zaminCITY", "type": "TWideStringField"}, "ods_zaminguarantorid": {"name": "ODS_zaminGUARANTORID", "type": "TWideStringField"}, "ods_zaminzmpaspyer1": {"name": "ODS_zaminZMPASPYER1", "type": "TWideStringField"}, "ods_zaminzmpaspdat1": {"name": "ODS_zaminZMPASPDAT1", "type": "TDateTimeField"}, "ods_zaminzaminadres1": {"name": "ODS_zaminZAMINADRES1", "type": "TWideStringField"}, "ods_zaminfactadres": {"name": "ODS_zaminFACTADRES", "type": "TWideStringField"}, "ods_zaminzaminwork1": {"name": "ODS_zaminZAMINWORK1", "type": "TWideStringField"}, "ods_zaminguarantorsalary": {"name": "ODS_zaminGUARANTORSALARY", "type": "TWideStringField"}, "ods_zaminzmtelmob1": {"name": "ODS_zaminZMTELMOB1", "type": "TWideStringField"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "buttonexportza": {"name": "ButtonExportza", "type": "TBitBtn"}, "closebtn": {"name": "CloseBtn", "type": "TBitBtn"}, "misexcelexportzamin": {"name": "MisExcelExportzamin", "type": "TCMExcelExport"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_girovid": {"name": "ODS_girovID", "type": "TFloatField"}, "ods_girovboorowerid": {"name": "ODS_girovBOOROWERID", "type": "TFloatField"}, "ods_girovnumberofcredit": {"name": "ODS_girovNUMBEROFCREDIT", "type": "TWideStringField"}, "ods_girovfilial": {"name": "ODS_girovFILIAL", "type": "TWideStringField"}, "ods_girovcreditlineamount": {"name": "ODS_girovCREDITLINEAMOUNT", "type": "TFloatField"}, "ods_girovstatus": {"name": "ODS_girovSTATUS", "type": "TWideStringField"}, "ods_girovpledgeid": {"name": "ODS_girovPLEDGEID", "type": "TWideStringField"}, "ods_girovpledgsorts": {"name": "ODS_girovPLEDGSORTS", "type": "TWideStringField"}, "ods_girovpledgename": {"name": "ODS_girovPLEDGENAME", "type": "TWideStringField"}, "ods_girovholdername": {"name": "ODS_girovHOLDERNAME", "type": "TWideStringField"}, "ods_girovregistryagency": {"name": "ODS_girovREGISTRYAGENCY", "type": "TWideStringField"}, "ods_girovregistryno": {"name": "ODS_girovREGISTRYNO", "type": "TWideStringField"}, "ods_girovregistrydate": {"name": "ODS_girovREGISTRYDATE", "type": "TDateTimeField"}, "ods_girovpledgeprice": {"name": "ODS_girovPLEDGEPRICE", "type": "TFloatField"}, "ods_girovgqpaspnum": {"name": "ODS_girovGQPASPNUM", "type": "TWideStringField"}, "ods_girovgqpaspdate": {"name": "ODS_girovGQPASPDATE", "type": "TDateTimeField"}, "ods_girovgqadress": {"name": "ODS_girovGQADRESS", "type": "TWideStringField"}, "ods_girovgqtelmob": {"name": "ODS_girovGQTELMOB", "type": "TWideStringField"}, "ods_girovreyster": {"name": "ODS_girovREYSTER", "type": "TWideStringField"}, "ods_girovcompanydat": {"name": "ODS_girovCOMPANYDAT", "type": "TDateTimeField"}, "ods_girovlikvid_acc_no": {"name": "ODS_girovLIKVID_ACC_NO", "type": "TWideStringField"}, "ods_girovlikvid_rest": {"name": "ODS_girovLIKVID_REST", "type": "TFloatField"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "misexcelexportgirov": {"name": "MisExcelExportGirov", "type": "TCMExcelExport"}, "ods_giroveklikvid": {"name": "ODS_girovEKLIKVID", "type": "TFloatField"}, "ods_girovdescription": {"name": "ODS_girovDESCRIPTION", "type": "TWideStringField"}, "ods_girovval_acc": {"name": "ODS_girovVAL_ACC", "type": "TWideStringField"}, "ods_girovtmnus_status": {"name": "ODS_girovTMNUS_STATUS", "type": "TWideStringField"}, "ods_girovtmnus_portfstatus": {"name": "ODS_girovTMNUS_PORTFSTATUS", "type": "TWideStringField"}, "ods_zamintmnus_status": {"name": "ODS_zaminTMNUS_STATUS", "type": "TWideStringField"}, "ods_zamintmnus_portfstatus": {"name": "ODS_zaminTMNUS_PORTFSTATUS", "type": "TWideStringField"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("FormReport", null, "TFormReport");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormReport")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormReport", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "MisExcelExportGirov"));
    await $.mset((await $.wv([$t1], "ODS_girov", C, false)), "QueryAllRecords", (await $.wv([$t1], "true", C, false)));
    await $.mcall((await $.wv([$t1], "ODS_girov", C, false)), "Refresh", []);
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.wv([$t1], "ODS_girov", C, false)), "GGROV", (await $.wv([$t1], "true", C, false)), (await $.wv([$t1], "false", C, false))], C)));
    await $.mset((await $.wv([$t1], "ODS_girov", C, false)), "QueryAllRecords", (await $.wv([$t1], "false", C, false)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReport", "ButtonExportzaClick", async function ButtonExportzaClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "MisExcelExportzamin"));
    await $.mset((await $.wv([$t2], "ODS_zamin", C, false)), "QueryAllRecords", (await $.wv([$t2], "true", C, false)));
    await $.mcall((await $.wv([$t2], "ODS_zamin", C, false)), "Refresh", []);
    await $.stmt($.wcall([$t2], "Connect", [], C));
    await $.stmt((await $.wcall([$t2], "ExportDataset", [(await $.wv([$t2], "ODS_zamin", C, false)), "ZAMIN", (await $.wv([$t2], "true", C, false)), (await $.wv([$t2], "false", C, false))], C)));
    await $.mset((await $.wv([$t2], "ODS_zamin", C, false)), "QueryAllRecords", (await $.wv([$t2], "false", C, false)));
    await $.stmt($.wcall([$t2], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReport", "CloseBtnClick", async function CloseBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormReport")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormReport", (await $.mcall((await $.v(C, "TFormReport")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

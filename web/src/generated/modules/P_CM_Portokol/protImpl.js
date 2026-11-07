// Generated from protImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("protImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "ComCtrls", "StdCtrls", "DBCtrls", "Mask", "Buttons", "ExtCtrls", "CommonDecls", "sboapiDataModuleImpl", "Reportimpl"]);
  const C = [U];
  U.defClass("TProtFrm", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "prot1": {"name": "prot1", "type": "TOracleDataSet"}, "prot2": {"name": "prot2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbmemo3": {"name": "DBMemo3", "type": "TDBMemo"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbmemo4": {"name": "DBMemo4", "type": "TDBMemo"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbmemo5": {"name": "DBMemo5", "type": "TDBMemo"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbmemo6": {"name": "DBMemo6", "type": "TDBMemo"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbmemo7": {"name": "DBMemo7", "type": "TDBMemo"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "erize1": {"name": "Erize1", "type": "TOracleDataSet"}, "erize1id": {"name": "Erize1ID", "type": "TFloatField"}, "erize1currency": {"name": "Erize1CURRENCY", "type": "TFloatField"}, "erize1boorowerid": {"name": "Erize1BOOROWERID", "type": "TFloatField"}, "erize1creditlineamount": {"name": "Erize1CREDITLINEAMOUNT", "type": "TFloatField"}, "erize1annualyinterestrate": {"name": "Erize1ANNUALYINTERESTRATE", "type": "TFloatField"}, "erize1initialamount": {"name": "Erize1INITIALAMOUNT", "type": "TFloatField"}, "erize1annualyoverduerate": {"name": "Erize1ANNUALYOVERDUERATE", "type": "TFloatField"}, "erize1annualypenaltyrate": {"name": "Erize1ANNUALYPENALTYRATE", "type": "TFloatField"}, "erize1dateofconclusion": {"name": "Erize1DATEOFCONCLUSION", "type": "TDateTimeField"}, "erize1duedatefirstcontract": {"name": "Erize1DUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "erize1duedatelastcontract": {"name": "Erize1DUEDATELASTCONTRACT", "type": "TDateTimeField"}, "erize1numberofcredit": {"name": "Erize1NUMBEROFCREDIT", "type": "TWideStringField"}, "erize1purposeofcredit": {"name": "Erize1PURPOSEOFCREDIT", "type": "TWideStringField"}, "erize1usrgroup": {"name": "Erize1USRGROUP", "type": "TFloatField"}, "erize1branchid": {"name": "Erize1BRANCHID", "type": "TFloatField"}, "erize1usid": {"name": "Erize1USID", "type": "TFloatField"}, "erize1status": {"name": "Erize1STATUS", "type": "TFloatField"}, "erize1customertype": {"name": "Erize1CUSTOMERTYPE", "type": "TFloatField"}, "erize1credittype": {"name": "Erize1CREDITTYPE", "type": "TFloatField"}, "erize1personaltype": {"name": "Erize1PERSONALTYPE", "type": "TFloatField"}, "erize1stopcalcdate": {"name": "Erize1STOPCALCDATE", "type": "TDateTimeField"}, "erize1rest": {"name": "Erize1REST", "type": "TFloatField"}, "erize1interestrest": {"name": "Erize1INTERESTREST", "type": "TFloatField"}, "erize1duerest": {"name": "Erize1DUEREST", "type": "TFloatField"}, "erize1dueinterestrest": {"name": "Erize1DUEINTERESTREST", "type": "TFloatField"}, "erize1penaltyrest": {"name": "Erize1PENALTYREST", "type": "TFloatField"}, "erize1reserveid": {"name": "Erize1RESERVEID", "type": "TFloatField"}, "erize1duereserveid": {"name": "Erize1DUERESERVEID", "type": "TFloatField"}, "erize1obligation": {"name": "Erize1OBLIGATION", "type": "TFloatField"}, "erize1pledgeprice": {"name": "Erize1PLEDGEPRICE", "type": "TFloatField"}, "erize1pledgeid": {"name": "Erize1PLEDGEID", "type": "TFloatField"}, "erize1contractaccno": {"name": "Erize1CONTRACTACCNO", "type": "TWideStringField"}, "erize1interestaccno": {"name": "Erize1INTERESTACCNO", "type": "TWideStringField"}, "erize1dueloanaccno": {"name": "Erize1DUELOANACCNO", "type": "TWideStringField"}, "erize1loanaccno": {"name": "Erize1LOANACCNO", "type": "TWideStringField"}, "erize1boorowerrest": {"name": "Erize1BOOROWERREST", "type": "TFloatField"}, "erize1val_name": {"name": "Erize1VAL_NAME", "type": "TWideStringField"}, "erize1name": {"name": "Erize1NAME", "type": "TWideStringField"}, "datasur1": {"name": "DataSur1", "type": "TDataSource"}, "erize1rownum": {"name": "Erize1ROWNUM", "type": "TFloatField"}, "erize1muddet": {"name": "Erize1MUDDET", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("ProtFrm", null, "TProtFrm");
  });
  U.method("TProtFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TProtFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "prot1")), "Open", []);
  await $.mcall((await $.v(C, "prot2")), "Open", []);
  await $.set(C, "Report", (await $.mcall((await $.v(C, "Treport")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProtFrm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "prot1")), "Close", []);
  await $.mcall((await $.v(C, "prot2")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProtFrm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProtFrm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Report")), "ProtRep")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

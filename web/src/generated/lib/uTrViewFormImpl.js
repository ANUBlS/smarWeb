// Generated from uTrViewFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uTrViewFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrls", "sboapidatamoduleimpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmTrView", "TForm", {"odstr": {"name": "odsTr", "type": "TOracleDataSet"}, "tr": {"name": "Tr", "type": "TDataSource"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "odstrid": {"name": "odsTrID", "type": "TFloatField"}, "odstrdebt": {"name": "odsTrDEBT", "type": "TWideStringField"}, "odstrkredit": {"name": "odsTrKREDIT", "type": "TWideStringField"}, "odstrval_acc": {"name": "odsTrVAL_ACC", "type": "TWideStringField"}, "odstrcurrencyid_c": {"name": "odsTrCURRENCYID_C", "type": "TWideStringField"}, "odstrammount": {"name": "odsTrAMMOUNT", "type": "TFloatField"}, "odstrlammount": {"name": "odsTrLAMMOUNT", "type": "TFloatField"}, "odstrammount_c": {"name": "odsTrAMMOUNT_C", "type": "TFloatField"}, "odstrusname": {"name": "odsTrUSNAME", "type": "TWideStringField"}, "odstrusrcommit": {"name": "odsTrUSRCOMMIT", "type": "TWideStringField"}, "odstrtim": {"name": "odsTrTIM", "type": "TDateTimeField"}, "odstrcommittime": {"name": "odsTrCOMMITTIME", "type": "TDateTimeField"}, "odstrkassa_b": {"name": "odsTrKASSA_B", "type": "TWideStringField"}, "odstrkassa_z": {"name": "odsTrKASSA_Z", "type": "TWideStringField"}, "odstrrate_d": {"name": "odsTrRATE_D", "type": "TFloatField"}, "odstrrate_c": {"name": "odsTrRATE_C", "type": "TFloatField"}, "odstrname": {"name": "odsTrNAME", "type": "TWideStringField"}, "odstrreportid": {"name": "odsTrREPORTID", "type": "TWideStringField"}, "odstrcountrid": {"name": "odsTrCOUNTRID", "type": "TWideStringField"}, "ftrid": {"name": "FTrID", "type": "Integer"}}, {"trid": {"name": "TrID", "read": "FTrID", "write": "FTrID"}});
  U.init(async () => {
    U.var_("frmTrView", null, "TfrmTrView");
  });
  U.method("TfrmTrView", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTrView", "ShowTrInfo", async function ShowTrInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "odsTr"));
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["trid", (await $.wv([$t1], "FTrID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmTrView", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

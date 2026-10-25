// Generated from uAccViewFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uAccViewFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrls", "sboapidatamoduleimpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmAccInfo", "TForm", {"odsacc": {"name": "odsAcc", "type": "TOracleDataSet"}, "acc": {"name": "acc", "type": "TDataSource"}, "odsaccid": {"name": "odsAccID", "type": "TFloatField"}, "odsacckli_id": {"name": "odsAccKLI_ID", "type": "TFloatField"}, "odsaccusname": {"name": "odsAccUSNAME", "type": "TWideStringField"}, "odsaccacc_no": {"name": "odsAccACC_NO", "type": "TWideStringField"}, "odsaccval_acc": {"name": "odsAccVAL_ACC", "type": "TIntegerField"}, "odsaccvalu_name": {"name": "odsAccVALU_NAME", "type": "TWideStringField"}, "odsaccname": {"name": "odsAccNAME", "type": "TWideStringField"}, "odsaccopen_dat": {"name": "odsAccOPEN_DAT", "type": "TDateTimeField"}, "odsaccbal_cn1": {"name": "odsAccBAL_CN1", "type": "TFloatField"}, "odsaccfid": {"name": "odsAccFID", "type": "TFloatField"}, "odsaccfilialname": {"name": "odsAccFILIALNAME", "type": "TWideStringField"}, "odsaccsim_otcet": {"name": "odsAccSIM_OTCET", "type": "TFloatField"}, "odsaccrepsymb": {"name": "odsAccREPSYMB", "type": "TWideStringField"}, "odsacctipacc": {"name": "odsAccTIPACC", "type": "TWideStringField"}, "odsacclimit": {"name": "odsAccLIMIT", "type": "TFloatField"}, "odsaccbalname": {"name": "odsAccBALNAME", "type": "TWideStringField"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "odsacccustname": {"name": "odsAccCUSTNAME", "type": "TWideStringField"}, "faccountid": {"name": "FAccountID", "type": "Integer"}}, {"accountid": {"name": "AccountID", "read": "FAccountID", "write": "FAccountID"}});
  U.init(async () => {
    U.var_("frmAccInfo", null, "TfrmAccInfo");
  });
  U.method("TfrmAccInfo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccInfo", "ShowAccInfo", async function ShowAccInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "odsAcc"));
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["accid", (await $.wv([$t1], "FAccountID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmAccInfo", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from excsett.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("excsett", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "dblookup", "CMDBSearchEdit", "ExtCtrls", "Grids", "DBGrids", "DBCtrls", "SearchEdit", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExchangesettings", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "contract_num": {"name": "contract_num", "type": "TEdit"}, "nameofatm": {"name": "nameofatm", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "filialcombo": {"name": "filialcombo", "type": "TDBLookupComboBox"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "searchatmazn": {"name": "Searchatmazn", "type": "TSearchEdit"}, "searchvdmazn": {"name": "Searchvdmazn", "type": "TSearchEdit"}, "searchvdmusd": {"name": "Searchvdmusd", "type": "TSearchEdit"}, "searchatmusd": {"name": "Searchatmusd", "type": "TSearchEdit"}, "searchvdmeur": {"name": "Searchvdmeur", "type": "TSearchEdit"}, "searchatmeur": {"name": "Searchatmeur", "type": "TSearchEdit"}, "searchvdmincome": {"name": "Searchvdmincome", "type": "TSearchEdit"}, "searchara": {"name": "Searchara", "type": "TSearchEdit"}}, {});
  U.init(async () => {
    U.var_("Exchangesettings", null, "TExchangesettings");
  });
  U.method("TExchangesettings", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["addexchangeacc", [(await $.mv((await $.v(C, "Searchatmazn")), "text")), (await $.mv((await $.v(C, "Searchvdmazn")), "text")), (await $.mv((await $.v(C, "Searchatmusd")), "text")), (await $.mv((await $.v(C, "Searchvdmusd")), "text")), (await $.mv((await $.v(C, "Searchatmeur")), "text")), (await $.mv((await $.v(C, "Searchvdmeur")), "text")), (await $.mv((await $.v(C, "filialcombo")), "KeyValue")), (await $.mv((await $.v(C, "Searchara")), "text")), (await $.mv((await $.v(C, "Searchvdmincome")), "text")), (await $.mv((await $.v(C, "contract_num")), "text")), (await $.mv((await $.v(C, "nameofatm")), "Text"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangesettings", "filialcomboCloseUp", async function filialcomboCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "exchange_acc")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "exchange_acc")), "SetVariable", ["fil", (await $.mv((await $.v(C, "filialcombo")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "exchange_acc")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangesettings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filial")), "Open", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from SettingsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SettingsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "Grids", "DBGrids", "ExtCtrls", "ComCtrls", "Db", "OracleData", "ImgList", "ToolWin", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TSettingsForm", "TForm", {"linkdatsrc": {"name": "LinkDatSrc", "type": "TDataSource"}, "link": {"name": "Link", "type": "TOracleDataSet"}, "linksdatsrc": {"name": "LinksDatSrc", "type": "TDataSource"}, "links": {"name": "Links", "type": "TOracleDataSet"}, "linkid": {"name": "LinkID", "type": "TFloatField"}, "linkname": {"name": "LinkNAME", "type": "TStringField"}, "linksbalcn": {"name": "LinksBALCN", "type": "TFloatField"}, "linksparentid": {"name": "LinksPARENTID", "type": "TFloatField"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "settingsdatsrc": {"name": "SettingsDatSrc", "type": "TDataSource"}, "settings": {"name": "Settings", "type": "TOracleDataSet"}, "settaccsdatsrc": {"name": "SettAccsDatSrc", "type": "TDataSource"}, "settaccs": {"name": "SettAccs", "type": "TOracleDataSet"}, "settingsid": {"name": "SettingsID", "type": "TFloatField"}, "settingsname": {"name": "SettingsNAME", "type": "TStringField"}, "acclookup": {"name": "AccLookup", "type": "TOracleDataSet"}, "acclookupid": {"name": "AccLookupID", "type": "TFloatField"}, "acclookupacc_no": {"name": "AccLookupACC_NO", "type": "TStringField"}, "acclookupname": {"name": "AccLookupNAME", "type": "TStringField"}, "settaccsparentid": {"name": "SettAccsPARENTID", "type": "TFloatField"}, "settaccsaccid": {"name": "SettAccsACCID", "type": "TFloatField"}, "settaccsaccountno": {"name": "SettAccsAccountno", "type": "TStringField"}, "settaccsaccname": {"name": "SettAccsAccName", "type": "TStringField"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "companiy": {"name": "Companiy", "type": "TOracleDataSet"}, "companiydatsrc": {"name": "CompaniyDatSrc", "type": "TDataSource"}, "companiyid": {"name": "CompaniyID", "type": "TFloatField"}, "companiycomp_name": {"name": "CompaniyCOMP_NAME", "type": "TStringField"}, "settingscompid": {"name": "SettingsCOMPID", "type": "TFloatField"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("SettingsForm", null, "TSettingsForm");
  });
  U.method("TSettingsForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSettingsForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Link")), "Open", []);
  await $.mcall((await $.v(C, "Links")), "Open", []);
  await $.mcall((await $.v(C, "Settings")), "open", []);
  await $.mcall((await $.v(C, "AccLookup")), "open", []);
  await $.mcall((await $.v(C, "SettAccs")), "open", []);
  await $.mcall((await $.v(C, "Companiy")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSettingsForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Link")), "Close", []);
  await $.mcall((await $.v(C, "Links")), "Close", []);
  await $.mcall((await $.v(C, "Settings")), "Close", []);
  await $.mcall((await $.v(C, "AccLookup")), "Close", []);
  await $.mcall((await $.v(C, "SettAccs")), "Close", []);
  await $.mcall((await $.v(C, "Companiy")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

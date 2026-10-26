// Generated from ExpAllParametrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpAllParametrUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "ComCtrls", "ToolWin", "ImgList", "StdActns", "ActnList", "DB", "OracleData", "DBGridEh", "StdCtrls", "DBGrids", "DBGridEhGrouping", "GridsEh", "ExpDataModuleUnit", "ExpAccTypeUnit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExpAllParametr", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "exptypedataset": {"name": "ExpTypeDataSet", "type": "TOracleDataSet"}, "exptypedatasetid": {"name": "ExpTypeDataSetID", "type": "TIntegerField"}, "exptypedatasetname": {"name": "ExpTypeDataSetNAME", "type": "TWideStringField"}, "exptypedatasetgroups": {"name": "ExpTypeDataSetGROUPS", "type": "TIntegerField"}, "exptypedatasource": {"name": "ExpTypeDataSource", "type": "TDataSource"}, "exptypeaccountsdatasource": {"name": "ExpTypeAccountsDataSource", "type": "TDataSource"}, "expsettingsdataset": {"name": "ExpSettingsDataSet", "type": "TOracleDataSet"}, "expsettingsdatasetid": {"name": "ExpSettingsDataSetID", "type": "TFloatField"}, "expsettingsdatasettypeid": {"name": "ExpSettingsDataSetTYPEID", "type": "TFloatField"}, "expsettingsdatasetname": {"name": "ExpSettingsDataSetNAME", "type": "TWideStringField"}, "expsettingsdatasource": {"name": "ExpSettingsDataSource", "type": "TDataSource"}, "filialdataset": {"name": "FilialDataSet", "type": "TOracleDataSet"}, "filialdatasource": {"name": "FilialDataSource", "type": "TDataSource"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "exptypeaccountsdataset": {"name": "ExpTypeAccountsDataSet", "type": "TOracleDataSet"}, "valyutadataset": {"name": "ValyutaDataSet", "type": "TOracleDataSet"}, "valyutadatasource": {"name": "ValyutaDataSource", "type": "TDataSource"}, "debetdataset": {"name": "DebetDataSet", "type": "TOracleDataSet"}, "debetdatasource": {"name": "DebetDataSource", "type": "TDataSource"}, "kredetdataset": {"name": "KredetDataSet", "type": "TOracleDataSet"}, "kredetdatasource": {"name": "KredetDataSource", "type": "TDataSource"}, "exptypeaccountsdatasetid": {"name": "ExpTypeAccountsDataSetID", "type": "TFloatField"}, "exptypeaccountsdatasetdebet": {"name": "ExpTypeAccountsDataSetDEBET", "type": "TFloatField"}, "exptypeaccountsdatasetkredet": {"name": "ExpTypeAccountsDataSetKREDET", "type": "TFloatField"}, "exptypeaccountsdatasetvalute": {"name": "ExpTypeAccountsDataSetVALUTE", "type": "TIntegerField"}, "exptypeaccountsdatasetbranchid": {"name": "ExpTypeAccountsDataSetBRANCHID", "type": "TFloatField"}, "exptypeaccountsdatasetdebetaccno": {"name": "ExpTypeAccountsDataSetDebetAccNo", "type": "TWideStringField"}, "exptypeaccountsdatasetkredetaccno": {"name": "ExpTypeAccountsDataSetKredetAccNo", "type": "TWideStringField"}, "exptypeaccountsdatasetfilialname": {"name": "ExpTypeAccountsDataSetFilialname", "type": "TWideStringField"}, "exptypeaccountsdatasetvalyuta": {"name": "ExpTypeAccountsDataSetValyuta", "type": "TWideStringField"}, "exptypeaccountsdatasetoptype": {"name": "ExpTypeAccountsDataSetOPTYPE", "type": "TFloatField"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "expsettingstypedataset": {"name": "ExpSettingsTypeDataSet", "type": "TOracleDataSet"}, "expsettingstypedatasource": {"name": "ExpSettingsTypeDataSource", "type": "TDataSource"}, "exptypeaccountsdatasetbdebet": {"name": "ExpTypeAccountsDataSetBDEBET", "type": "TFloatField"}, "exptypeaccountsdatasetbkredet": {"name": "ExpTypeAccountsDataSetBKREDET", "type": "TFloatField"}, "exptypeaccountsdatasetbdebetaccno": {"name": "ExpTypeAccountsDataSetBDebetAccNo", "type": "TWideStringField"}, "exptypeaccountsdatasetbkreditaccno": {"name": "ExpTypeAccountsDataSetBKreditAccNo", "type": "TWideStringField"}, "bdebetdataset": {"name": "BDebetDataSet", "type": "TOracleDataSet"}, "bdebetdatasource": {"name": "BDebetDataSource", "type": "TDataSource"}, "bkredetdataset": {"name": "BKredetDataSet", "type": "TOracleDataSet"}, "bkredetdatasource": {"name": "BKredetDataSource", "type": "TDataSource"}, "f": {"name": "F", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("ExpAllParametr", null, "TExpAllParametr");
  });
  U.method("TExpAllParametr", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "F", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpSettingsDataSetNAME")), "AsWideString")), "Möhkəmləndirmə"))) {
    await $.mset((await $.mv((await $.v(C, "ExpAccType")), "Panel2")), "Visible", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "ExpAccType")), "Panel2")), "Visible", false);
  }
  await $.mcall((await $.v(C, "ExpTypeAccountsDataSet")), "Insert", []);
  await $.mcall((await $.v(C, "ExpAccType")), "ShowModal", []);
  await $.mcall((await $.v(C, "ExpTypeAccountsDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAllParametr", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpTypeAccountsDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə  əminsiniz?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "ExpTypeAccountsDataSet"));
    await $.stmt($.wcall([$t1], "Delete", [], C));
    await $.stmt($.wcall([$t1], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAllParametr", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "F", true);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpSettingsDataSetNAME")), "AsWideString")), "Möhkəmləndirmə"))) {
    await $.mset((await $.mv((await $.v(C, "ExpAccType")), "Panel2")), "Visible", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "ExpAccType")), "Panel2")), "Visible", false);
  }
  await $.mcall((await $.v(C, "ExpTypeAccountsDataSet")), "Edit", []);
  {
    const $t2 = (await $.v(C, "ExpAccType"));
    await $.wset([$t2], "Caption", "Redaktə", C);
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  await $.mcall((await $.v(C, "ExpTypeAccountsDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAllParametr", "ExpSettingsDataSetAfterPost", async function ExpSettingsDataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TExpAllParametr", "ExpSettingsDataSetAfterScroll", async function ExpSettingsDataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpSettingsDataSetNAME")), "AsWideString")), "Möhkəmləndirmə"))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [3])), "Visible", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [4])), "Visible", true);
  } else {
    await $.mset((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [3])), "Visible", false);
    await $.mset((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [4])), "Visible", false);
    await $.mset((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [3])), "Width", 190);
    await $.mset((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [4])), "Width", 190);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TExpAllParametr", "ExpTypeDataSetAfterPost", async function ExpTypeDataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TExpAllParametr", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "FilialDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "FilialDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpTypeDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ExpTypeDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpSettingsDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ExpSettingsDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "DebetDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "DebetDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "KredetDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "KredetDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "BDebetDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "BDebetDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "BKredetDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "BKredetDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "ValyutaDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ValyutaDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpTypeAccountsDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ExpTypeAccountsDataSet")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAllParametr", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpTypeDataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "ExpSettingsDataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "ExpTypeAccountsDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAllParametr", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpAllParametr", "XDBGrid2KeyPress", async function XDBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_DELETE"))))) {
    if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə  əminsiniz?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      return L0.result;
    }
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpSettingsDataSet")), "Delete", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

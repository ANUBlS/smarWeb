// Generated from FrmMainTransimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmMainTransimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ImgList", "Grids", "DBGrids", "ComCtrls", "ToolWin", "StdCtrls", "Mask", "DBCtrls", "CMExcelExport", "CommanParametrs", "sboapiDataModuleImpl", "Dm_invstimpl", "AddInvestmentimpl"]);
  const C = [U];
  U.defClass("TFrmMainTrans", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbinvest": {"name": "DBInvest", "type": "TDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FrmMainTrans", null, "TFrmMainTrans");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "FrmMainTrans")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmMainTrans", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Dm_invst", (await $.mcall((await $.v(C, "TDm_invst")), "Create", [Self])));
  await $.set(C, "AddInvestment", (await $.mcall((await $.v(C, "TAddInvestment")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainTrans", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmMainTrans", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Enabled", false);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsMain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsMain")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsMain")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "ds_kassa")), "Refresh", []);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "Dscontracts")), "FieldByName", ["MUSTERI"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainTrans", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AddInvestment")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainTrans", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBInvest")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdu!!!"])));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsinmi ??", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "pk_ins_investment")), "CallIntegerFunction", ["del_invest_transaction", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBInvest")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBInvest")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainTrans", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsMain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsMain")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_invst")), "DsMain")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainTrans", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainTrans", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.mv((await $.mv((await $.wv([$t1], "FrmMainTrans", C, false)), "DBInvest")), "DataSource")), "DataSet")), "Yatirim Müqavilələri", (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "false", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmMainTrans", (await $.mcall((await $.v(C, "TFrmMainTrans")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

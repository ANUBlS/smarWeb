// Generated from frmPaymenTerminateimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmPaymenTerminateimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Grids", "DBGrids", "CMExcelExport", "ComCtrls", "ToolWin", "ImgList", "ActnList", "dmPaymenTerminateimpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "FrmAddPaymentTerimpl", "frmAddPaymentTerminateimpl"]);
  const C = [U];
  U.defClass("TfrmPaymentTer", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("frmPaymentTer", null, "TfrmPaymentTer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmPaymentTer")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmPaymentTer", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmPaymentTer", (await $.mcall((await $.v(C, "TdmPaymentTer")), "Create", [Self])));
  await $.set(C, "FrmAddPaymentTer", (await $.mcall((await $.v(C, "TFrmAddPaymentTer")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentTer", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmPaymentTer", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSPaymentTer")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSPaymentTer")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSPaymentTer")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSPaymentTerReal")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSPaymentTerReal")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSPaymentTerReal")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentTer", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Tanınmış zərər yoxdur"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "frmAddPaymentTer")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentTer", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.lt((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["PAYDATE"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Köhnə tarixdəki ödənişi silmək olmaz!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSTerBarderoSay")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSTerBarderoSay")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSTerBarderoSay")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSTerBarderoSay")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Bu müqavilə üçün xitam barderosu yığıldığı üçün xitamı silmək olmaz!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş ödəniş ləğv olunacaq! Əminsinizmi?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "Pins_common")), "CallIntegerFunction", ["cancelTerreal", [(await $.v(C, "contactid")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])), 1))) {
      await $.stmt((await $.call(C, "Showmessage", ["Ödəniş silindi!"])));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "frmPaymentTer")), "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentTer", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t1], "DBGrid1", C, false)), "DataSource")), "DataSet")), "xitam", (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "false", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentTer", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmPaymentTer", (await $.mcall((await $.v(C, "TfrmPaymentTer")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

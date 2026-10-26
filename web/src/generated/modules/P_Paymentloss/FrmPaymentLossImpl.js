// Generated from FrmPaymentLossImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPaymentLossImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGrids", "ActnList", "CMExcelExport", "StdCtrls", "DMPaymentLossImpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "FrmAddPaymentLossImpl"]);
  const C = [U];
  U.defClass("TFrmPaymentLoss", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("FrmPaymentLoss", null, "TFrmPaymentLoss");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmPaymentLoss")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmPaymentLoss", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMPaymentLoss", (await $.mcall((await $.v(C, "TDMPaymentLoss")), "Create", [Self])));
  await $.set(C, "FrmAddPaymentLoss", (await $.mcall((await $.v(C, "TFrmAddPaymentLoss")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentLoss", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPaymentLoss", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSPaymentLoss")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSPaymentLoss")), "SetVariable", ["dpid", (await $.v(C, "plossid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSPaymentLoss")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSPaymentLossReal")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.v(C, "plossid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSPaymentLossReal")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentLoss", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentLoss", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Tanınmış zərər yoxdur"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "FrmAddPaymentLoss")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentLoss", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Ödənmiş məlumat yoxdur"])));
  }
  {
    const $t1 = (await $.v(C, "DMPaymentLoss"));
    const $t2 = (await $.wv([$t1], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["checkadvancedobjectaccess", ["DELPAYMENTLOSS"]], C)));
  }
  if ($.truthy($.lt((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["PAYDATE"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Köhnə tarixdəki ödənişi silmək olmaz!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSLossBarderoSay")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSLossBarderoSay")), "SetVariable", ["pdep_id", (await $.v(C, "plossid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSLossBarderoSay")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSLossBarderoSay")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Bu müqavilə üçün zərər barderosu yığıldığı üçün zərəri silmək olmaz!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş ödəniş ləğv olunacaq! Əminsinizmi?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Pins_common")), "CallIntegerFunction", ["cancelclaimreal", [(await $.v(C, "contactid")), (await $.v(C, "plossid")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["pid"])), "AsInteger"))]])), 1))) {
      await $.stmt((await $.call(C, "Showmessage", ["Ödəniş silindi!"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "SetVariable", ["cid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "FieldByName", ["claim_status"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "Edit", []);
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "FieldByName", ["state"])), "AsInteger", 8);
      await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "post", []);
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentLoss", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Ödənmiş məlumat yoxdur"])));
  }
  {
    const $t3 = (await $.v(C, "DMPaymentLoss"));
    const $t4 = (await $.wv([$t3], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELPAYMENTLOSS"]], C)));
  }
  {
    const $t5 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t5], "Connect", [], C));
    await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t5], "DBGrid1", C, false)), "DataSource")), "DataSet")), "zərər.", (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "false", C, false))], C)));
    await $.stmt($.wcall([$t5], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmPaymentLoss", (await $.mcall((await $.v(C, "TFrmPaymentLoss")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

// Generated from FrmPaymentImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPaymentImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGrids", "ActnList", "CMExcelExport", "StdCtrls", "shellapi", "Menus", "DMPaymentImpl", "FrmAddPaymentImpl", "sboapiDataModuleimpl", "SBTranslateProc", "frmothertaninmaimpl", "CommanParametrs"]);
  const C = [U];
  U.defClass("TFrmPayment", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "sil1": {"name": "Sil1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("FrmPayment", null, "TFrmPayment");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmPayment")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmPayment", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShellExecuteA", [(await $.mv((await $.v(C, "CommonApplication")), "Handle")), "open", "Ins_chm.chm", null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["PAYDATE"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DMPayment")), "OPSBOP")), "CallDateFunction", ["get_Date", []]))))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Sistem tarixindən fərqli tarixdəki ödəmələri redaktə etmək olmaz"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "FrmPayment")), "ToolButton2Click", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMPayment", (await $.mcall((await $.v(C, "TDMPayment")), "create", [Self])));
  await $.set(C, "Form1", (await $.mcall((await $.v(C, "TForm1")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPayment", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 6))) {
    await $.mset((await $.v(C, "ToolButton1")), "Enabled", true);
    await $.mset((await $.v(C, "ToolButton2")), "Enabled", true);
    await $.mset((await $.v(C, "ToolButton4")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "ToolButton1")), "Enabled", false);
    await $.mset((await $.v(C, "ToolButton2")), "Enabled", false);
    await $.mset((await $.v(C, "ToolButton4")), "Enabled", false);
  }
  {
    const $t1 = (await $.v(C, "DMPayment"));
    const $t2 = (await $.wv([$t1], "ODSPayments", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["pcid", (await $.wv([$t1, $t2], "contactid", C, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
  }
  {
    const $t3 = (await $.v(C, "DMPayment"));
    const $t4 = (await $.wv([$t3], "DSContracts", C, false));
    await $.stmt($.wcall([$t3, $t4], "close", [], C));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["pcid", (await $.wv([$t3, $t4], "contactid", C, false))], C)));
    await $.stmt($.wcall([$t3, $t4], "Open", [], C));
  }
  {
    const $t5 = (await $.v(C, "DMPayment"));
    const $t6 = (await $.wv([$t5], "DSPlansetting", C, false));
    await $.stmt($.wcall([$t5, $t6], "close", [], C));
    await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["pcid", (await $.wv([$t5, $t6], "contactid", C, false))], C)));
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
  }
  {
    const $t7 = (await $.v(C, "DMPayment"));
    const $t8 = (await $.wv([$t7], "DSPaymentReal", C, false));
    await $.stmt($.wcall([$t7, $t8], "close", [], C));
    await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["pcid", (await $.wv([$t7, $t8], "contactid", C, false))], C)));
    await $.stmt($.wcall([$t7, $t8], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "Sil1Click", async function Sil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "ODSPayments")), "FieldByName", ["PLANID"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!! Yalnız plandan kənar əməliyyatı silmək olar."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş ödəmə pozulacaq əminsinizmi?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t9 = (await $.v(C, "DMPayment"));
      const $t10 = (await $.wv([$t9], "OPCOMMON", C, false));
      await $.stmt((await $.wcall([$t9, $t10], "CallIntegerFunction", ["commitotherdelete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]], C)));
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DMPayment"));
    const $t12 = (await $.wv([$t11], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "CallProcedure", ["checkadvancedobjectaccess", ["ADD_NEW_PAYMENT"]], C)));
  }
  {
    const $t13 = (await $.v(C, "DMPayment"));
    const $t14 = (await $.wv([$t13], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["checkadvancedobjectaccess", ["SEEPAYMENT"]], C)));
  }
  await $.set(C, "FrmAddPayment", (await $.mcall((await $.v(C, "TFrmAddPayment")), "Create", [Self])));
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "FrmAddPayment")), "ShowModal")), (await $.v(C, "mrOk"))))) {
      await $.mcall((await $.mv((await $.v(C, "DMPayment")), "ODSPayments")), "Refresh", []);
    }
  } finally {
    await $.mcall((await $.v(C, "FrmAddPayment")), "free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["PAYDATE"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DMPayment")), "OPSBOP")), "CallDateFunction", ["get_Date", []]))))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Sistem tarixindən fərqli tarixdəki ödəmələri redaktə etmək olmaz"])));
    return L0.result;
  }
  await $.set(C, "FrmAddPayment", (await $.mcall((await $.v(C, "TFrmAddPayment")), "CreateIt", [(await $.v(C, "ctEdit")), (await $.mv((await $.mv((await $.v(C, "DMPayment")), "ODSPaymentsID")), "asInteger"))])));
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "FrmAddPayment")), "ShowModal")), (await $.v(C, "mrOk"))))) {
      await $.mcall((await $.mv((await $.v(C, "DMPayment")), "ODSPayments")), "Refresh", []);
    }
  } finally {
    await $.mcall((await $.v(C, "FrmAddPayment")), "free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "DMPayment"));
    await $.mcall((await $.wv([$t15], "ODSPayments", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t15], "DSPaymentReal", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tradelaskres": false};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "DMPayment"));
    const $t17 = (await $.wv([$t16], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t16, $t17], "CallProcedure", ["checkadvancedobjectaccess", ["DELPAYMENT"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat yoxdur!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["PAYDATE"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DMPayment")), "OPSBOP")), "CallDateFunction", ["get_Date", []]))))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Sistem tarixindən fərqli tarixləri dəyişdirmək olmaz!"])));
    return L0.result;
  }
  {
    const $t18 = (await $.v(C, "DMPayment"));
    if ($.truthy($.eq((await $.wcall([$t18], "MessageDlg", ["Seçilmiş ödəmə pozulacaq əminsinizmi?", (await $.wv([$t18], "mtWarning", C, false)), [(await $.wv([$t18], "mbYes", C, false)), (await $.wv([$t18], "mbNo", C, false))], 0], C)), (await $.wv([$t18], "mrYes", C, false))))) {
      {
        const $t19 = (await $.wv([$t18], "DMPayment", C, false));
        const $t20 = (await $.wv([$t18, $t19], "OPCOMMON", C, false));
        if ($.truthy($.eq((await $.mcall((await $.wv([$t18, $t19, $t20], "OPCOMMON", C, false)), "CallIntegerFunction", ["cancelcontractpayment", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t18, $t19, $t20], "DBGrid2", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asInteger"))]])), 1))) {
          await $.stmt((await $.wcall([$t18, $t19, $t20], "MessageDlg", ["Əməliyyatlar pozuldu", (await $.wv([$t18, $t19, $t20], "mtInformation", C, false)), [(await $.wv([$t18, $t19, $t20], "mbok", C, false))], 0], C)));
        }
      }
      await $.mcall((await $.wv([$t18], "ODSPayments", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t18], "DSPaymentReal", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "DMPayment"));
    const $t22 = (await $.wv([$t21], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t21, $t22], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELPAYMENT"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat yoxdur!"])));
    return L0.result;
  }
  {
    const $t23 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t23], "Connect", [], C));
    await $.stmt((await $.wcall([$t23], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t23], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Ödəmələr.", (await $.wv([$t23], "True", C, false)), (await $.wv([$t23], "false", C, false))], C)));
    await $.stmt($.wcall([$t23], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayment", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "DMPayment"));
    const $t25 = (await $.wv([$t24], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["checkadvancedobjectaccess", ["ADD_NEW_TANINMA"]], C)));
  }
  await $.mcall((await $.v(C, "Form1")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmPayment", (await $.mcall((await $.v(C, "TFrmPayment")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

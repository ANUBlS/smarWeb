// Generated from Unit_Archive.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_Archive", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ToolWin", "ComCtrls", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "ImgList", "Mask", "DBCtrls", "Menus", "Oracledata", "Oracle", "Payment_DataModul", "UnitPayment_order", "CurrencyToHR_Azeri_Impl", "UntMain_Report", "UntSecond_Report", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmArchive", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbarchivegrid": {"name": "DBArchiveGrid", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "assignment": {"name": "Assignment", "type": "TDBEdit"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "rbonce": {"name": "RBOnce", "type": "TRadioButton"}, "rbcopy": {"name": "RBCopy", "type": "TRadioButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editpnum": {"name": "EditPNUM", "type": "TEdit"}, "editdacc_no": {"name": "EditDACC_NO", "type": "TEdit"}, "editkacc_no": {"name": "EditKACC_NO", "type": "TEdit"}, "editammount": {"name": "EditAMMOUNT", "type": "TEdit"}, "editkaccname": {"name": "EditKACCNAME", "type": "TEdit"}, "editkbname": {"name": "EditKBNAME", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FrmArchive", null, "TFrmArchive");
  });
  U.method("TFrmArchive", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "deleteid": 0, "paymentnumber": '', "recordno": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["paymentnumber"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive")), "FieldByName", ["PNUM"])), "AsString"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Do you want to delete payment №%s?", [L0["paymentnumber"]]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive"));
      const $t2 = (await $.mv((await $.wv([$t1], "PaymentOrderDataMod", C, false)), "OPPayment"));
      await $.wset([$t1, $t2], "RecordNo", (await $.wv([$t1, $t2], "RecNo", C, false)), { get: async () => L0["recordno"], set: async (v) => { L0["recordno"] = v; }, local: true });
      await $.wset([$t1, $t2], "deleteID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["deleteid"], set: async (v) => { L0["deleteid"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["delete_payment", [(await $.wv([$t1, $t2], "deleteID", { get: async () => L0["deleteid"], set: async (v) => { L0["deleteid"] = v; }, local: true }, false))]], C)));
      await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
      await $.wset([$t1, $t2], "RecNo", (await $.wv([$t1, $t2], "RecordNo", { get: async () => L0["recordno"], set: async (v) => { L0["recordno"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TFrmArchive", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "DBArchiveGrid")), "Focused")))) {
    {
      const $t3 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t4 = (await $.mv((await $.mv((await $.wv([$t3], "DBArchiveGrid", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t3, $t4], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t3, $t4], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t3, $t4], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TFrmArchive", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "Payment_order"));
    const $t6 = (await $.mv((await $.wv([$t5], "PaymentOrderDataMod", C, false)), "ODSArchive"));
    if ($.truthy((await $.wv([$t5, $t6], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t5, $t6], "ShowMessage", ["There are not data!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t5, $t6], "DBName", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbname"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBCod", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbcod"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBInn", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbinn"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbcoracc"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbswift"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "mod_bank", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["mod_bank"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "CBDANum", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["DACC_NO"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["DACC_NO"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EDAName", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["DACCNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EDAInn", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["DACCINN"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "CBKBName", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KBNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKBCod", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KBCOD"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKBInn", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KBINN"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKBCorAcc", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KBCORACC"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKBSwift", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KBSWIFT"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKANum", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KACC_NO"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKAName", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KACCNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKAInn", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["KACCINN"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EAmmount", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["AMMOUNT"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EAmmountW", C, false)), "text", (await $.wcall([$t5, $t6], "CurrencyToHR_Azeri", [(await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["AMMOUNT"], C)), "AsInteger")), 0, [0]], C)));
      await $.mset((await $.wv([$t5, $t6], "EAssignment", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["ASSIGNMENT"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EExtra", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["EXTRA"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EPNum", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["PNUM"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DTPayment", C, false)), "DateTime", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["PDATE"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t5, $t6], "Edit1", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["budgetclass"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "edit4", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["budgetlevel"], C)), "AsString")));
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Payment_order")), "isUpdate", true);
  {
    const $t7 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive"));
    const $t8 = (await $.wv([$t7], "Payment_order", C, false));
    if ($.truthy((await $.wv([$t7, $t8], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t7, $t8], "ShowMessage", ["There are not data!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t7, $t8], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["DACC_NO"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "CBDANum", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["DACC_NO"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EDAName", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["DACCNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EDAInn", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["DACCINN"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "CBKBName", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KBNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKBCod", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KBCOD"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKBInn", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KBINN"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKBCorAcc", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KBCORACC"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKBSwift", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KBSWIFT"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKANum", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KACC_NO"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKAName", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KACCNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EKAInn", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["KACCINN"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EAmmount", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["AMMOUNT"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EAmmountW", C, false)), "text", (await $.wcall([$t7, $t8], "CurrencyToHR_Azeri", [(await $.wcall([$t7, $t8], "Trunc", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["AMMOUNT"], C)), "AsFloat"))], C)), 0, [0]], C)));
      await $.mset((await $.wv([$t7, $t8], "EAssignment", C, false)), "Text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["ASSIGNMENT"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EExtra", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["EXTRA"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "EPNum", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["PNUM"], C)), "AsString")));
      await $.mset((await $.wv([$t7, $t8], "DTPayment", C, false)), "DateTime", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["PDATE"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t7, $t8], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["budgetclass"], C)), "Asstring")));
      await $.mset((await $.wv([$t7, $t8], "edit4", C, false)), "text", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["budgetlevel"], C)), "Asstring")));
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": '', "datetime": 0, "i": 0, "a": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive")), "FieldByName", ["ID"])), "AsString"));
  if ($.truthy((await $.mv((await $.v(C, "RBCopy")), "Checked")))) {
    try {
      {
        const $t9 = (await $.v(C, "QRMainReport"));
        await $.wset([$t9], "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["PDATE"])), "AsDateTime")), { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true });
        await $.mset((await $.wv([$t9], "QRDate1", C, false)), "caption", (await $.mcall((await $.wv([$t9], "Payment_order", C, false)), "ExtractMonth", [(await $.wv([$t9], "DateTime", { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true }, false)), " "])));
        await $.mset((await $.wv([$t9], "QRDate2", C, false)), "caption", (await $.mcall((await $.wv([$t9], "Payment_order", C, false)), "ExtractMonth", [(await $.wv([$t9], "DateTime", { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true }, false)), " "])));
        await $.mset((await $.wv([$t9], "QRNum1", C, false)), "Caption", $.add("Ödəniş tapşırığı №", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["PNum"])), "AsString"))));
        await $.mset((await $.wv([$t9], "QRNum2", C, false)), "Caption", $.add("Ödəniş tapşırığı №", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["PNum"])), "AsString"))));
        await $.mset((await $.wv([$t9], "QRAmmount1", C, false)), "caption", (await $.wcall([$t9], "FormatCurr", ["#,##.00", (await $.wcall([$t9], "StrToCurr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["Ammount"])), "AsString"))], C))], C)));
        await $.mset((await $.wv([$t9], "QRAmmount2", C, false)), "caption", (await $.wcall([$t9], "FormatCurr", ["#,##.00", (await $.wcall([$t9], "StrToCurr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["Ammount"])), "AsString"))], C))], C)));
        await $.mset((await $.wv([$t9], "QRAmmountW1", C, false)), "caption", (await $.mcall((await $.wv([$t9], "Payment_order", C, false)), "WithCoin", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["Ammount"])), "AsString"))])));
        await $.mset((await $.wv([$t9], "QRAmmountW2", C, false)), "caption", (await $.mcall((await $.wv([$t9], "Payment_order", C, false)), "WithCoin", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["Ammount"])), "AsString"))])));
        if ($.truthy((await $.mv((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "Active")))) {
          await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "close", []);
        }
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "SetVariable", [":acc_no", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString"))])));
        await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "open", []);
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old_acc_no"])), "asinteger")), 1))) {
          await $.mset((await $.wv([$t9], "QRDBACC_NO", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old"])), "AsString")));
          await $.mset((await $.wv([$t9], "QRDBACC_NO1", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old"])), "AsString")));
        } else {
          await $.wset([$t9], "i", (await $.wcall([$t9], "pos", ["_", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString"))], C)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          await $.wset([$t9], "a", (await $.wcall([$t9], "Length", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString"))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
          await $.wset([$t9], "s", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          await $.stmt((await $.wcall([$t9], "delete", [$.ref(async () => (await $.wv([$t9], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t9], "s", $t10, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }); }), (await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
          await $.mset((await $.wv([$t9], "QRDBACC_NO", C, false)), "Caption", (await $.wv([$t9], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
          await $.mset((await $.wv([$t9], "QRDBACC_NO1", C, false)), "Caption", (await $.wv([$t9], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        }
        await $.mset((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "Filter", $.add(" ID= ", (await $.wv([$t9], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))));
        await $.mset((await $.mv((await $.wv([$t9], "PaymentOrderDataMod", C, false)), "ODSArchive")), "Filtered", (await $.wv([$t9], "true", C, false)));
        await $.stmt($.wcall([$t9], "Preview", [], C));
      }
    } finally {
      await $.mset((await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive")), "Filtered", false);
    }
  } else {
    try {
      {
        const $t11 = (await $.v(C, "QRCommonReport"));
        await $.wset([$t11], "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["PDATE"])), "AsDateTime")), { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true });
        await $.mset((await $.wv([$t11], "QRDate", C, false)), "caption", (await $.mcall((await $.wv([$t11], "Payment_order", C, false)), "ExtractMonth", [(await $.wv([$t11], "DateTime", { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true }, false)), " "])));
        await $.mset((await $.wv([$t11], "QRNum", C, false)), "Caption", $.add("Ödəniş tapşırığı №", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["PNum"])), "AsString"))));
        await $.mset((await $.wv([$t11], "QRAmmount", C, false)), "caption", (await $.wcall([$t11], "FormatCurr", ["#,##.00", (await $.wcall([$t11], "StrToCurr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["Ammount"])), "AsString"))], C))], C)));
        await $.mset((await $.wv([$t11], "QRAmmountW", C, false)), "caption", (await $.mcall((await $.wv([$t11], "Payment_order", C, false)), "WithCoin", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["Ammount"])), "AsString"))])));
        if ($.truthy((await $.mv((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "Active")))) {
          await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "close", []);
        }
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "SetVariable", [":acc_no", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString"))])));
        await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "open", []);
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old_acc_no"])), "asinteger")), 1))) {
          await $.mset((await $.wv([$t11], "QRDBACC_NO", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old"])), "AsString")));
        } else {
          await $.wset([$t11], "i", (await $.wcall([$t11], "pos", ["_", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString"))], C)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          await $.wset([$t11], "a", (await $.wcall([$t11], "Length", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString"))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
          await $.wset([$t11], "s", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "FieldByName", ["DACC_NO"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          await $.stmt((await $.wcall([$t11], "delete", [$.ref(async () => (await $.wv([$t11], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t11], "s", $t12, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }); }), (await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t11], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
          await $.mset((await $.wv([$t11], "QRDBACC_NO", C, false)), "Caption", (await $.wv([$t11], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        }
        await $.mset((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "Filter", $.add(" ID= ", (await $.wv([$t11], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))));
        await $.mset((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "ODSArchive")), "Filtered", (await $.wv([$t11], "true", C, false)));
        await $.stmt($.wcall([$t11], "Preview", [], C));
      }
    } finally {
      await $.mset((await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive")), "Filtered", false);
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBArchiveGrid")), "DataSource")), "DataSet")), "Locate", ["ID", L0["id"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmArchive", "DBArchiveGridTitleClick", async function DBArchiveGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t13 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive"));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["Title", (await $.wv([$t13], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t13], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmArchive", "EditPNUMKeyPress", async function EditPNUMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmArchive", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t14 = L0["sender"];
    await $.wset([$t14], "SearchField", (await $.wcall([$t14], "copy", [(await $.wv([$t14], "Name", C, false)), 5, (await $.wcall([$t14], "length", [(await $.wv([$t14], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t15 = (await $.wcall([$t14], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t14], "DBArchiveGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t14, $t15], "SearchRecord", [(await $.wv([$t14, $t15], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t14, $t15], "Text", C, false)), $.add((await $.wv([$t14, $t15], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t14, $t15], "srFromCurrent", C, false)), (await $.wv([$t14, $t15], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t14, $t15], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbNo", C, false)), (await $.wv([$t14, $t15], "mbYes", C, false))], 0], C)), (await $.wv([$t14, $t15], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t14, $t15], "SearchRecord", [(await $.wv([$t14, $t15], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t14, $t15], "Text", C, false)), $.add((await $.wv([$t14, $t15], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t14, $t15], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t14, $t15], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": '', "datetime": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive")), "FieldByName", ["ID"])), "AsString"));
  try {
    {
      const $t16 = (await $.v(C, "QRCommonReport"));
      const $t17 = (await $.mv((await $.wv([$t16], "PaymentOrderDataMod", C, false)), "ODSArchive"));
      await $.wset([$t16, $t17], "DateTime", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["PDATE"], C)), "AsDateTime")), { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true });
      await $.mset((await $.wv([$t16, $t17], "QRDate", C, false)), "caption", (await $.mcall((await $.wv([$t16, $t17], "Payment_order", C, false)), "ExtractMonth", [(await $.wv([$t16, $t17], "DateTime", { get: async () => L0["datetime"], set: async (v) => { L0["datetime"] = v; }, local: true }, false)), " "])));
      await $.mset((await $.wv([$t16, $t17], "QRNum", C, false)), "Caption", $.add("Ödəniş tapşırığı №", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["PNum"], C)), "AsString"))));
      await $.mset((await $.wv([$t16, $t17], "QRAmmount", C, false)), "caption", (await $.wcall([$t16, $t17], "FormatCurr", ["#,##.00", (await $.wcall([$t16, $t17], "StrToCurr", [(await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["Ammount"], C)), "AsString"))], C))], C)));
      await $.mset((await $.wv([$t16, $t17], "QRAmmountW", C, false)), "caption", (await $.mcall((await $.wv([$t16, $t17], "Payment_order", C, false)), "WithCoin", [(await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["Ammount"], C)), "AsString"))])));
      await $.wset([$t16, $t17], "Filter", $.add(" ID= ", (await $.wv([$t16, $t17], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))), C);
      await $.wset([$t16, $t17], "Filtered", (await $.wv([$t16, $t17], "true", C, false)), C);
      await $.stmt($.wcall([$t16, $t17], "Preview", [], C));
    }
  } finally {
    await $.mset((await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive")), "Filtered", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmArchive", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.call(C, "TMenuItem", [L0["sender"]])), "Tag")), 0))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBArchiveGrid")), "DataSource")), "DataSet")), "First", []);
  } else {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBArchiveGrid")), "DataSource")), "DataSet")), "Last", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

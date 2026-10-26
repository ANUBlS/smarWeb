// Generated from frmExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "ImgList", "ToolWin", "Grids", "DBGridEh", "ActnList", "CMExcelExport", "Menus", "DMExtractMoneyImpl", "frmAddExtractMoneyImpl", "CommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmExtractMoney", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "actnexprt": {"name": "ActnExprt", "type": "TAction"}, "pmshowtr": {"name": "PMShowTr", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "refreshafteroperation": {"name": "RefreshAfterOperation", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("frmExtractMoney", null, "TfrmExtractMoney");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "DMExtractMoney"));
    {
      const $t2 = (await $.wv([$t1], "Payments", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "DepositInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t3], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["ContractID", (await $.wv([$t1, $t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "CustAcc", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["ContractID", (await $.wv([$t1, $t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      await $.wset([$t1, $t4], "CustAccID", (await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["ClientACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
    }
    {
      const $t5 = (await $.wv([$t1], "CreditAccs", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t5], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      }
      if ($.truthy((await $.wcall([$t1, $t5], "Locate", ["ID", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), []], C)))) {
        await $.mset((await $.mv((await $.wv([$t1, $t5], "frmAddExtractMoney", C, false)), "AccountListCB")), "KeyValue", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)));
      }
    }
  }
  {
    const $t6 = (await $.v(C, "frmExtractMoney"));
    await $.wset([$t6], "Caption", $.add((await $.wv([$t6], "Get_SelectedContNo", C, false)), " nömrəli depozitin ödənişləri"), C);
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmExtractMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmExtractMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmExtractMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMExtractMoney", (await $.mcall((await $.v(C, "TDMExtractMoney")), "Create", [Self])));
  await $.set(C, "frmAddExtractMoney", (await $.mcall((await $.v(C, "TfrmAddExtractMoney")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMExtractMoney")), "Free", []);
  await $.mcall((await $.v(C, "frmAddExtractMoney")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "frmAddExtractMoney")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshAfterOperation", true);
    await $.mcall((await $.mv((await $.v(C, "DMExtractMoney")), "Payments")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "DMExtractMoney"));
    const $t8 = (await $.wv([$t7], "Payments", C, false));
    const $t9 = (await $.wv([$t7, $t8], "sbcm_payment", C, false));
    await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["DeleteWithDrawMoney", ["P_DepWMoneyID", (await $.mv((await $.wcall([$t7, $t8, $t9], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t7, $t8, $t9], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ActnExprtExecute", async function ActnExprtExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.mv((await $.wv([$t10], "DMExtractMoney", C, false)), "Payments")), "Ödənilmiş əmanətlər", (await $.wv([$t10], "True", C, false)), (await $.wv([$t10], "false", C, false))], C)));
    await $.stmt($.wcall([$t10], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "RefreshAfterOperation")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfrmExtractMoney", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (L0["sender"]);
    await $.wset([$t11], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t11], "DMExtractMoney", C, false)), "Payments")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t12 = L0["acanvas"];
    const $t13 = (await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t14 = (await $.mv((await $.wv([$t12, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t12, $t13, $t14], "Charset", (await $.wv([$t12, $t13, $t14], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t12, $t13, $t14], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t12, $t13, $t14], "Default", C, false)))) {
        await $.wset([$t12, $t13, $t14], "Style", [(await $.wv([$t12, $t13, $t14], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t12, $t13], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t12, $t13], "Pen", C, false)), "Color", (await $.wv([$t12, $t13], "clBlack", C, false)));
      await $.wset([$t12, $t13], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t12, $t13], "MoveTo", [(await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t12, $t13], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t12, $t13], "LineTo", [(await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t12, $t13], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t12, $t13], "inc", [$.ref(async () => (await $.wv([$t12, $t13], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t12, $t13], "LineBottom", $t15, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t12, $t13], "Pen", C, false)), "Color", (await $.wv([$t12, $t13], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t12, $t13], "MoveTo", [(await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t12, $t13], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t12, $t13], "LineTo", [(await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t12, $t13], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t12, $t13], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t12, $t13], "Brush", C, false)), "Color", (await $.wv([$t12, $t13], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t12, $t13], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t12, $t13], "Font", C, false)), "Color", (await $.wv([$t12, $t13], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t12, $t13], "Font", C, false)), "Color", (await $.wv([$t12, $t13], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t12, $t13], "Brush", C, false)), "Color", (await $.wv([$t12, $t13], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t12, $t13], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t12, $t13], "Font", C, false)), "Color", (await $.wv([$t12, $t13], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t12, $t13], "Font", C, false)), "Color", (await $.wv([$t12, $t13], "clGrayText", C, false)));
        }
      }
      await $.wset([$t12, $t13], "Bar", (await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t12, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t16) => { await $.mset((await $.wv([$t12, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t16); }), 22], C)));
      await $.stmt((await $.wcall([$t12, $t13], "FillRect", [(await $.wv([$t12, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t12, $t13], "TextOut", [$.add((await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t12, $t13], "Caption", C, false))], C)));
    }
    await $.wset([$t12, $t13], "SText", (await $.wcall([$t12, $t13], "ShortCutToText", [(await $.wv([$t12, $t13], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t12, $t13], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t12, $t13], "TextWidth", [(await $.wv([$t12, $t13], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t12, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t12, $t13], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t12, $t13], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t17 = (await $.wv([$t12, $t13], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t12, $t13, $t17], "Assigned", [(await $.wv([$t12, $t13, $t17], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t12, $t13, $t17], "Checked", C, false)))) {
            await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t12, $t13, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t12, $t13, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t12, $t13, $t17], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t18) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t18); }), 2], C)));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t19) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t19); }), 2], C)));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t20) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t20); }), 2], C)));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t21) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t21); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t12, $t13, $t17], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t22) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t22); }), 1], C)));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t23) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t23); }), 1], C)));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t24) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t24); }), 1], C)));
            await $.stmt((await $.wcall([$t12, $t13, $t17], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t25) => { await $.mset((await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t25); }), 1], C)));
            if ($.truthy((await $.wv([$t12, $t13, $t17], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t12, $t13, $t17], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t12, $t13, $t17], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t12, $t13, $t17], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t12, $t13, $t17], "Images", C, false)), "Draw", [(await $.wv([$t12, $t13, $t17], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t12, $t13, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t12, $t13, $t17], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t12, $t13, $t17], "ImageIndex", C, false)), (await $.wv([$t12, $t13, $t17], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TfrmExtractMoney", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmExtractMoney", (await $.mcall((await $.v(C, "TfrmExtractMoney")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

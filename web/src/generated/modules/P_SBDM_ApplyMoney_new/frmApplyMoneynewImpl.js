// Generated from frmApplyMoneynewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmApplyMoneynewImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "ActnList", "dialogs", "CMExcelExport", "ImgList", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Menus", "DMApplyMoneynewImpl", "frmAddMoneynewImpl", "CommonDeclsImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFrmApplyMoneynew", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "pmshowtr": {"name": "PMShowTr", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "canrefreshdeposit": {"name": "CanRefReshDeposit", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FrmApplyMoneynew", null, "TFrmApplyMoneynew");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0, "custid": 0};
  await $.fixArgs(L0, ["s"]);
  await $.mset((await $.v(C, "FrmApplyMoneynew")), "Caption", $.add((await $.v(C, "Get_SelectedContNo")), "  nömrəli müqavilənin yatrımları"));
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "DMApplyMoney_new"));
    {
      const $t2 = (await $.wv([$t1], "Tranches", C, false));
      await $.stmt($.wcall([$t1, $t2], "close", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "DepositInfo", C, false));
      await $.stmt($.wcall([$t1, $t3], "close", [], C));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["ContractID", (await $.wv([$t1, $t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.wset([$t1, $t3], "CustID", (await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["CustomerID"], C)), "AsInteger")), { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true });
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "CustAcc", C, false));
      await $.stmt($.wcall([$t1, $t4], "close", [], C));
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["ContractID", (await $.wv([$t1, $t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      await $.wset([$t1, $t4], "CustAccID", (await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["ClientACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
    }
    {
      const $t5 = (await $.wv([$t1], "DebitAccs", C, false));
      await $.stmt($.wcall([$t1, $t5], "close", [], C));
      if ($.truthy($.not((await $.wv([$t1, $t5], "Active", C, false))))) {
        await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["CustID", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false))], C)));
      }
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      await $.mset((await $.mv((await $.wv([$t1, $t5], "frmAddMoneynew", C, false)), "AccountListCB")), "KeyValue", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)));
    }
    await $.mcall((await $.wv([$t1], "FrmApplyMoneynew", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmApplyMoneynew", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmApplyMoneynew", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "CanRefReshDeposit")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  {
    const $t6 = (await $.v(C, "DMApplyMoney_new"));
    await $.mcall((await $.wv([$t6], "Tranches", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "DepositInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t6], "CustAcc", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmApplyMoneynew", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMApplyMoney_new", (await $.mcall((await $.v(C, "TDMApplyMoney_new")), "Create", [Self])));
  await $.set(C, "frmAddMoneynew", (await $.mcall((await $.v(C, "TfrmAddMoneynew")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmAddMoneynew")), "Free", []);
  await $.mcall((await $.v(C, "DMApplyMoney_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmApplyMoneynew", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["trid"] = (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DMApplyMoney_new")), "Tranches")), "FieldByname", ["TrID"])), "AsInteger"))]));
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_TransactionViewer.bpl", L0["trid"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t7 = L0["acanvas"];
    const $t8 = (await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t9 = (await $.mv((await $.wv([$t7, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t7, $t8, $t9], "Charset", (await $.wv([$t7, $t8, $t9], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t7, $t8, $t9], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t7, $t8, $t9], "Default", C, false)))) {
        await $.wset([$t7, $t8, $t9], "Style", [(await $.wv([$t7, $t8, $t9], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t7, $t8], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t7, $t8], "Pen", C, false)), "Color", (await $.wv([$t7, $t8], "clBlack", C, false)));
      await $.wset([$t7, $t8], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t7, $t8], "MoveTo", [(await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t7, $t8], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "LineTo", [(await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t7, $t8], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "inc", [$.ref(async () => (await $.wv([$t7, $t8], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t7, $t8], "LineBottom", $t10, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t7, $t8], "Pen", C, false)), "Color", (await $.wv([$t7, $t8], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t7, $t8], "MoveTo", [(await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t7, $t8], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "LineTo", [(await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t7, $t8], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t7, $t8], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t7, $t8], "Brush", C, false)), "Color", (await $.wv([$t7, $t8], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t7, $t8], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t7, $t8], "Font", C, false)), "Color", (await $.wv([$t7, $t8], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t7, $t8], "Font", C, false)), "Color", (await $.wv([$t7, $t8], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t7, $t8], "Brush", C, false)), "Color", (await $.wv([$t7, $t8], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t7, $t8], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t7, $t8], "Font", C, false)), "Color", (await $.wv([$t7, $t8], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t7, $t8], "Font", C, false)), "Color", (await $.wv([$t7, $t8], "clGrayText", C, false)));
        }
      }
      await $.wset([$t7, $t8], "Bar", (await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t7, $t8], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t11) => { await $.mset((await $.wv([$t7, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t11); }), 22], C)));
      await $.stmt((await $.wcall([$t7, $t8], "FillRect", [(await $.wv([$t7, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "TextOut", [$.add((await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t7, $t8], "Caption", C, false))], C)));
    }
    await $.wset([$t7, $t8], "SText", (await $.wcall([$t7, $t8], "ShortCutToText", [(await $.wv([$t7, $t8], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t7, $t8], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t7, $t8], "TextWidth", [(await $.wv([$t7, $t8], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t7, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t7, $t8], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t7, $t8], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t12 = (await $.wv([$t7, $t8], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t7, $t8, $t12], "Assigned", [(await $.wv([$t7, $t8, $t12], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t7, $t8, $t12], "Checked", C, false)))) {
            await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t7, $t8, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t7, $t8, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t7, $t8, $t12], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t13) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t13); }), 2], C)));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t14) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t14); }), 2], C)));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t15) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t15); }), 2], C)));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t16) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t16); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t7, $t8, $t12], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t17) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t17); }), 1], C)));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t18) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t18); }), 1], C)));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t19) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t19); }), 1], C)));
            await $.stmt((await $.wcall([$t7, $t8, $t12], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t20) => { await $.mset((await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t20); }), 1], C)));
            if ($.truthy((await $.wv([$t7, $t8, $t12], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t7, $t8, $t12], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t7, $t8, $t12], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t7, $t8, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t7, $t8, $t12], "Images", C, false)), "Draw", [(await $.wv([$t7, $t8, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t7, $t8, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7, $t8, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7, $t8, $t12], "ImageIndex", C, false)), (await $.wv([$t7, $t8, $t12], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TFrmApplyMoneynew", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "DMApplyMoney_new"));
    const $t22 = (await $.wv([$t21], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t21, $t22], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_SBCM_TRANSH"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "frmAddMoneynew")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "CanRefReshDeposit", true);
    await $.mcall((await $.mv((await $.v(C, "DMApplyMoney_new")), "Tranches")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.v(C, "DMApplyMoney_new"));
    const $t24 = (await $.wv([$t23], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t23, $t24], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_SBCM_TRANSH"]], C)));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t25 = (await $.v(C, "DMApplyMoney_new"));
    const $t26 = (await $.wv([$t25], "Tranches", C, false));
    const $t27 = (await $.wv([$t25, $t26], "sbcm_tranches", C, false));
    await $.stmt((await $.wcall([$t25, $t26, $t27], "CallProcedure", ["DeleteDepositMoney", ["P_DepMoneyID", (await $.mv((await $.wcall([$t25, $t26, $t27], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t25, $t26, $t27], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.v(C, "DMApplyMoney_new"));
    const $t29 = (await $.wv([$t28], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t28, $t29], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_SBCM_TRANSH"]], C)));
  }
  {
    const $t30 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t30], "Connect", [], C));
    await $.stmt((await $.wcall([$t30], "ExportDataset", [(await $.mv((await $.wv([$t30], "DMApplyMoney_new", C, false)), "Tranches")), "Depozit yatrımları", (await $.wv([$t30], "True", C, false)), (await $.wv([$t30], "false", C, false))], C)));
    await $.stmt($.wcall([$t30], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmApplyMoneynew", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (L0["sender"]);
    await $.wset([$t31], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t31], "DMApplyMoney_new", C, false)), "Tranches")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmApplyMoneynew", (await $.mcall((await $.v(C, "TFrmApplyMoneynew")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

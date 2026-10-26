// Generated from NewDepositsFrmApplyMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmApplyMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "ActnList", "dialogs", "CMExcelExport", "ImgList", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Menus", "DBGridEhGrouping", "GridsEh", "XFSCtrls", "NewDepositsDMApplyMoneyImpl", "NewDepositsFrmAddMoneyImpl", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmApplyMoney", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "pmshowtr": {"name": "PMShowTr", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "köçermeler": {"name": "Köçermeler", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "canrefreshdeposit": {"name": "CanRefReshDeposit", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmApplyMoney", null, "TNewDepositsFrmApplyMoney");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0, "custid": 0};
  await $.fixArgs(L0, ["s"]);
  await $.mset((await $.v(C, "NewDepositsFrmApplyMoney")), "Caption", $.add((await $.v(C, "Get_SelectedContNo")), "  nömrəli müqavilənin yatırımları"));
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "NewDepositsDMApplyMoney"));
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
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      await $.wset([$t1, $t3], "CustID", (await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["CustomerID"], C)), "AsInteger")), { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true });
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
    }
    {
      const $t6 = (await $.wv([$t1], "ClientAccs", C, false));
      await $.stmt($.wcall([$t1, $t6], "close", [], C));
      if ($.truthy($.not((await $.wv([$t1, $t6], "Active", C, false))))) {
        await $.stmt((await $.wcall([$t1, $t6], "SetVariable", ["CustID", (await $.wv([$t1, $t6], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false))], C)));
      }
      await $.stmt($.wcall([$t1, $t6], "Open", [], C));
    }
    await $.mcall((await $.wv([$t1], "NewDepositsFrmApplyMoney", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmApplyMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmApplyMoney", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "CanRefReshDeposit")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  {
    const $t7 = (await $.v(C, "NewDepositsDMApplyMoney"));
    await $.mcall((await $.wv([$t7], "Tranches", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t7], "DepositInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t7], "CustAcc", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TNewDepositsFrmApplyMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsDMApplyMoney", (await $.mcall((await $.v(C, "TNewDepositsDMApplyMoney")), "Create", [Self])));
  await $.set(C, "NewDepositsFrmAddMoney", (await $.mcall((await $.v(C, "TNewDepositsFrmAddMoney")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsFrmAddMoney")), "Free", []);
  await $.mcall((await $.v(C, "NewDepositsDMApplyMoney")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmApplyMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsDMApplyMoney")), "Tranches")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["trid"] = (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDepositsDMApplyMoney")), "Tranches")), "FieldByname", ["TrID"])), "AsInteger"))]));
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_TransactionViewer.bpl", L0["trid"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t8 = L0["acanvas"];
    const $t9 = (await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t10 = (await $.mv((await $.wv([$t8, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t8, $t9, $t10], "Charset", (await $.wv([$t8, $t9, $t10], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t8, $t9, $t10], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t8, $t9, $t10], "Default", C, false)))) {
        await $.wset([$t8, $t9, $t10], "Style", [(await $.wv([$t8, $t9, $t10], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t8, $t9], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t8, $t9], "Pen", C, false)), "Color", (await $.wv([$t8, $t9], "clBlack", C, false)));
      await $.wset([$t8, $t9], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t8, $t9], "MoveTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "LineTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "inc", [$.ref(async () => (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t8, $t9], "LineBottom", $t11, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t8, $t9], "Pen", C, false)), "Color", (await $.wv([$t8, $t9], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t8, $t9], "MoveTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "LineTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t8, $t9], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t8, $t9], "Brush", C, false)), "Color", (await $.wv([$t8, $t9], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t8, $t9], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t8, $t9], "Brush", C, false)), "Color", (await $.wv([$t8, $t9], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t8, $t9], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clGrayText", C, false)));
        }
      }
      await $.wset([$t8, $t9], "Bar", (await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t8, $t9], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t12) => { await $.mset((await $.wv([$t8, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t12); }), 22], C)));
      await $.stmt((await $.wcall([$t8, $t9], "FillRect", [(await $.wv([$t8, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "TextOut", [$.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t8, $t9], "Caption", C, false))], C)));
    }
    await $.wset([$t8, $t9], "SText", (await $.wcall([$t8, $t9], "ShortCutToText", [(await $.wv([$t8, $t9], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t8, $t9], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t8, $t9], "TextWidth", [(await $.wv([$t8, $t9], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t8, $t9], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t8, $t9], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t13 = (await $.wv([$t8, $t9], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t8, $t9, $t13], "Assigned", [(await $.wv([$t8, $t9, $t13], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t8, $t9, $t13], "Checked", C, false)))) {
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t14) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t14); }), 2], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t15) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t15); }), 2], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t16) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t16); }), 2], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t17) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t17); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t18) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t18); }), 1], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t19) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t19); }), 1], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t20) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t20); }), 1], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t21) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t21); }), 1], C)));
            if ($.truthy((await $.wv([$t8, $t9, $t13], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "Images", C, false)), "Draw", [(await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t8, $t9, $t13], "ImageIndex", C, false)), (await $.wv([$t8, $t9, $t13], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TNewDepositsFrmApplyMoney", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "NewDepositsDMApplyMoney"));
    const $t23 = (await $.wv([$t22], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t22, $t23], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_DM_TRANSH"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "NewDepositsFrmAddMoney")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "CanRefReshDeposit", true);
    await $.mcall((await $.mv((await $.v(C, "NewDepositsDMApplyMoney")), "Tranches")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "NewDepositsDMApplyMoney"));
    const $t25 = (await $.wv([$t24], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_DM_TRANSH"]], C)));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t26 = (await $.v(C, "NewDepositsDMApplyMoney"));
    const $t27 = (await $.wv([$t26], "Tranches", C, false));
    const $t28 = (await $.wv([$t26, $t27], "dm_tranches", C, false));
    await $.stmt((await $.wcall([$t26, $t27, $t28], "CallProcedure", ["DeleteDepositMoney", ["P_DepMoneyID", (await $.mv((await $.wcall([$t26, $t27, $t28], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t26, $t27, $t28], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.v(C, "NewDepositsDMApplyMoney"));
    const $t30 = (await $.wv([$t29], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t29, $t30], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_DM_TRANSH"]], C)));
  }
  {
    const $t31 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t31], "Connect", [], C));
    await $.stmt((await $.wcall([$t31], "ExportDataset", [(await $.mv((await $.wv([$t31], "NewDepositsDMApplyMoney", C, false)), "Tranches")), "Depozit yatrımları", (await $.wv([$t31], "True", C, false)), (await $.wv([$t31], "false", C, false))], C)));
    await $.stmt($.wcall([$t31], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmApplyMoney", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (L0["sender"]);
    await $.wset([$t32], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t32], "NewDepositsDMApplyMoney", C, false)), "Tranches")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmApplyMoney", (await $.mcall((await $.v(C, "TNewDepositsFrmApplyMoney")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

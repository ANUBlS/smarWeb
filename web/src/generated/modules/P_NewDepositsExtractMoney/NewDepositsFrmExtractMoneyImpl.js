// Generated from NewDepositsFrmExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "ImgList", "ToolWin", "Grids", "DBGridEh", "ActnList", "CMExcelExport", "Menus", "XFSCtrls", "DBGridEhGrouping", "GridsEh", "NewDepositsDMExtractMoneyImpl", "NewDepositsFrmAddExtractMoneyImpl", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmExtractMoney", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexprt": {"name": "ActnExprt", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "pmshowtr": {"name": "PMShowTr", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "köçermeler": {"name": "Köçermeler", "type": "TToolButton"}, "əməliyyat": {"name": "Əməliyyat", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "refreshafteroperation": {"name": "RefreshAfterOperation", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmExtractMoney", null, "TNewDepositsFrmExtractMoney");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "NewDepositsDMExtractMoney"));
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
    }
  }
  {
    const $t6 = (await $.v(C, "NewDepositsFrmExtractMoney"));
    await $.wset([$t6], "Caption", $.add((await $.wv([$t6], "Get_SelectedContNo", C, false)), " nömrəli depozit ödənişləri"), C);
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmExtractMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmExtractMoney", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "RefreshAfterOperation")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TNewDepositsFrmExtractMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsDMExtractMoney", (await $.mcall((await $.v(C, "TNewDepositsDMExtractMoney")), "Create", [Self])));
  await $.set(C, "NewDepositsFrmAddExtractMoney", (await $.mcall((await $.v(C, "TNewDepositsFrmAddExtractMoney")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsDMExtractMoney")), "Free", []);
  await $.mcall((await $.v(C, "NewDepositsFrmAddExtractMoney")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmExtractMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "Payments")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
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
  U.method("TNewDepositsFrmExtractMoney", "ƏməliyyatClick", async function ƏməliyyatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "NewDepositsDMExtractMoney"));
    const $t22 = (await $.wv([$t21], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t21, $t22], "CallProcedure", ["checkadvancedobjectaccess", ["INSERT_SBCM_PEYMENT"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "NewDepositsFrmAddExtractMoney")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshAfterOperation", true);
    await $.mcall((await $.mv((await $.v(C, "NewDepositsDMExtractMoney")), "Payments")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.v(C, "NewDepositsDMExtractMoney"));
    const $t24 = (await $.wv([$t23], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t23, $t24], "CallProcedure", ["checkadvancedobjectaccess", ["DELETE_SBCM_PEYMENT"]], C)));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t25 = (await $.v(C, "NewDepositsDMExtractMoney"));
    const $t26 = (await $.wv([$t25], "Payments", C, false));
    const $t27 = (await $.wv([$t25, $t26], "dm_payment", C, false));
    await $.stmt((await $.wcall([$t25, $t26, $t27], "CallProcedure", ["DeleteWithDrawMoney", ["P_DepWMoneyID", (await $.mv((await $.wcall([$t25, $t26, $t27], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t25, $t26, $t27], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "ActnExprtExecute", async function ActnExprtExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.v(C, "NewDepositsDMExtractMoney"));
    const $t29 = (await $.wv([$t28], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t28, $t29], "CallProcedure", ["checkadvancedobjectaccess", ["EXCEL_SBCM_PEYMENT"]], C)));
  }
  {
    const $t30 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t30], "Connect", [], C));
    await $.stmt((await $.wcall([$t30], "ExportDataset", [(await $.mv((await $.wv([$t30], "NewDepositsDMExtractMoney", C, false)), "Payments")), "Ödənilmiş əməliyyat", (await $.wv([$t30], "True", C, false)), (await $.wv([$t30], "false", C, false))], C)));
    await $.stmt($.wcall([$t30], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmExtractMoney", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (L0["sender"]);
    await $.wset([$t31], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t31], "NewDepositsDMExtractMoney", C, false)), "Payments")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmExtractMoney", (await $.mcall((await $.v(C, "TNewDepositsFrmExtractMoney")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

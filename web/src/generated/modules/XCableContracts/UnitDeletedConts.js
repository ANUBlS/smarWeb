// Generated from UnitDeletedConts.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDeletedConts", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "Grids", "DBGrids", "Menus", "StdCtrls", "ExtCtrls", "OracleData", "Db", "DataModCableContr"]);
  const C = [U];
  U.defClass("TFrmDeletedConts", "TForm", {"dbgriddeletedconts": {"name": "DBGridDeletedConts", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "pnlalbottom": {"name": "PnlAlBottom", "type": "TPanel"}, "edtsrchid": {"name": "EdtSrchID", "type": "TEdit"}, "edtsrchcontractnum": {"name": "EdtSrchContractNum", "type": "TEdit"}, "edtsrchabn": {"name": "EdtSrchABN", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FrmDeletedConts", null, "TFrmDeletedConts");
    U.var_("OrderbyAD", '', "String");
  });
  U.method("TFrmDeletedConts", "OrderByColumn", async function OrderByColumn(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "column": $.copyArg(p1), result: undefined, "post": 0};
  await $.fixArgs(L0, ["dataset", "column"]);
  if ($.truthy(($.eq((await $.v(C, "orderbyAD")), " asc")))) {
    await $.set(C, "orderbyAD", " desc");
  } else {
    await $.set(C, "orderbyAD", " asc");
  }
  L0["post"] = (await $.mcall((await $.mv(L0["dataset"], "SQL")), "Add", [$.add($.add("order by ", (await $.mv(L0["column"], "FieldName"))), (await $.v(C, "orderbyAD")))]));
  try {
    await $.mcall(L0["dataset"], "Close", []);
    await $.mcall(L0["dataset"], "Open", []);
  } finally {
    await $.stmt((await $.mcall((await $.mv(L0["dataset"], "SQL")), "Delete", [$.ref(async () => L0["post"], async ($t1) => { L0["post"] = $t1; })])));
  }
  return L0.result;
}, {"params": ["DataSet", "Column"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TColumn"]});
  U.method("TFrmDeletedConts", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDeletedConts", "DBGridDeletedContsTitleClick", async function DBGridDeletedContsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt((await $.call(C, "OrderByColumn", [(await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), L0["column"]])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmDeletedConts", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDeletedConts", "EdtSrchIDChange", async function EdtSrchIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "Locate", ["ID", (await $.mv((await $.v(C, "EdtSrchID")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDeletedConts", "EdtSrchContractNumChange", async function EdtSrchContractNumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "Locate", ["Contract_NUM", (await $.mv((await $.v(C, "EdtSrchContractNum")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDeletedConts", "EdtSrchABNChange", async function EdtSrchABNChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "Locate", ["Abonent", (await $.mv((await $.v(C, "EdtSrchABN")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDeletedConts", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Müqavilə bərpa olunsunmu?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModC")), "CABLE")), "CallProcedure", ["ContractRestore", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "FieldByName", ["contract_num"])), "AsString"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModC")), "OrDS_DeletedConts")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModC")), "odsContracts")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDeletedConts", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t2 = L0["acanvas"];
    const $t3 = (await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t4 = (await $.wv([$t2, $t3], "Font", C, false));
      await $.wset([$t2, $t3, $t4], "Name", "Azl Sans Serif", C);
      await $.wset([$t2, $t3, $t4], "Charset", (await $.wv([$t2, $t3, $t4], "russian_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t2, $t3, $t4], "Default", C, false)))) {
        await $.wset([$t2, $t3, $t4], "Style", [(await $.wv([$t2, $t3, $t4], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t2, $t3], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t2, $t3], "Pen", C, false)), "Color", (await $.wv([$t2, $t3], "clBlack", C, false)));
      await $.wset([$t2, $t3], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3], "MoveTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "LineTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "inc", [$.ref(async () => (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t2, $t3], "LineBottom", $t5, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t2, $t3], "Pen", C, false)), "Color", (await $.wv([$t2, $t3], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t2, $t3], "MoveTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "LineTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t2, $t3], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t2, $t3], "Brush", C, false)), "Color", (await $.wv([$t2, $t3], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t2, $t3], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t2, $t3], "Brush", C, false)), "Color", (await $.wv([$t2, $t3], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t2, $t3], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clGrayText", C, false)));
        }
      }
      await $.wset([$t2, $t3], "Bar", (await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t6) => { await $.mset((await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t6); }), 20], C)));
      await $.stmt((await $.wcall([$t2, $t3], "FillRect", [(await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "TextOut", [$.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 20), $.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t2, $t3], "Caption", C, false))], C)));
    }
    await $.wset([$t2, $t3], "SText", (await $.wcall([$t2, $t3], "ShortCutToText", [(await $.wv([$t2, $t3], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t2, $t3], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t2, $t3], "TextWidth", [(await $.wv([$t2, $t3], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t2, $t3], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t2, $t3], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t7 = (await $.wv([$t2, $t3], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t2, $t3, $t7], "Assigned", [(await $.wv([$t2, $t3, $t7], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t2, $t3, $t7], "Checked", C, false)))) {
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 22));
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 22));
            await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t8) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t8); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t9) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t9); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t10) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t10); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t11) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t11); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t12) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t12); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t13) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t13); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t14) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t14); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t15) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t15); }), 1], C)));
            if ($.truthy((await $.wv([$t2, $t3, $t7], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "Images", C, false)), "Draw", [(await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t2, $t3, $t7], "ImageIndex", C, false)), (await $.wv([$t2, $t3, $t7], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  return U;
}

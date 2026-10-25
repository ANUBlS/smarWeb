// Generated from PaymentsPlaneUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentsPlaneUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "Menus", "ImgList", "PaymentsPlaneDataModuleUnit", "PlaneAddEditUnit", "StoredProgramsUnit"]);
  const C = [U];
  U.defClass("TFrmPaymentPlane", "TForm", {"planeviewer": {"name": "PlaneViewer", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btnok": {"name": "BtnOk", "type": "TButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "fcontractid": {"name": "FContractID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FrmPaymentPlane", null, "TFrmPaymentPlane");
  });
  U.method("TFrmPaymentPlane", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t1 = L0["acanvas"];
    const $t2 = (await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t3 = (await $.wv([$t1, $t2], "Font", C, false));
      await $.wset([$t1, $t2, $t3], "Charset", (await $.wv([$t1, $t2, $t3], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t1, $t2, $t3], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t1, $t2, $t3], "Default", C, false)))) {
        await $.wset([$t1, $t2, $t3], "Style", [(await $.wv([$t1, $t2, $t3], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t1, $t2], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t1, $t2], "Pen", C, false)), "Color", (await $.wv([$t1, $t2], "clBlack", C, false)));
      await $.wset([$t1, $t2], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "MoveTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "LineTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "inc", [$.ref(async () => (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t4) => { await $.wset([$t1, $t2], "LineBottom", $t4, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t1, $t2], "Pen", C, false)), "Color", (await $.wv([$t1, $t2], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t1, $t2], "MoveTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "LineTo", [(await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t1, $t2], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t1, $t2], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t1, $t2], "Brush", C, false)), "Color", (await $.wv([$t1, $t2], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t1, $t2], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t1, $t2], "Brush", C, false)), "Color", (await $.wv([$t1, $t2], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t1, $t2], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t1, $t2], "Font", C, false)), "Color", (await $.wv([$t1, $t2], "clGrayText", C, false)));
        }
      }
      await $.wset([$t1, $t2], "Bar", (await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t5) => { await $.mset((await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t5); }), 22], C)));
      await $.stmt((await $.wcall([$t1, $t2], "FillRect", [(await $.wv([$t1, $t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "TextOut", [$.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t1, $t2], "Caption", C, false))], C)));
    }
    await $.wset([$t1, $t2], "SText", (await $.wcall([$t1, $t2], "ShortCutToText", [(await $.wv([$t1, $t2], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1, $t2], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t1, $t2], "TextWidth", [(await $.wv([$t1, $t2], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t1, $t2], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t1, $t2], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t1, $t2], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t6 = (await $.wv([$t1, $t2], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t1, $t2, $t6], "Assigned", [(await $.wv([$t1, $t2, $t6], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t1, $t2, $t6], "Checked", C, false)))) {
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t7) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t7); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t8) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t8); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t9) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t9); }), 2], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t10) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t10); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t11) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t11); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t12) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t12); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t13) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t13); }), 1], C)));
            await $.stmt((await $.wcall([$t1, $t2, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t14) => { await $.mset((await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t14); }), 1], C)));
            if ($.truthy((await $.wv([$t1, $t2, $t6], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t1, $t2, $t6], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t1, $t2, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "Images", C, false)), "Draw", [(await $.wv([$t1, $t2, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1, $t2, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1, $t2, $t6], "ImageIndex", C, false)), (await $.wv([$t1, $t2, $t6], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TFrmPaymentPlane", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "BtnOk")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPaymentPlane", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentPlane", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "PlaneDataModule"));
    {
      const $t16 = (await $.wv([$t15], "PaymentsPlaneData", C, false));
      await $.stmt((await $.wcall([$t15, $t16], "SetVariable", ["ContractID", (await $.wv([$t15, $t16], "FContractID", C, false))], C)));
      await $.stmt($.wcall([$t15, $t16], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentPlane", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "PlaneDataModule"));
    {
      const $t18 = (await $.wv([$t17], "PaymentsPlaneData", C, false));
      await $.stmt($.wcall([$t17, $t18], "CloseAll", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmPaymentPlane", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PlaneDataModule", (await $.mcall((await $.v(C, "TPlaneDataModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentPlane", "Plane_Add", async function Plane_Add(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t19 = (await $.mcall((await $.v(C, "TPlaneAddEditForm")), "Create", [Self]));
    try {
      await $.wset([$t19], "PlaneGridState", (await $.wv([$t19], "pgsInsert", C, false)), C);
      await $.mset((await $.wv([$t19], "DTPPaymentDate", C, false)), "DateTime", (await $.wv([$t19], "GetBankDate", C, false)));
      await $.wset([$t19], "ContractID", (await $.wv([$t19], "FContractID", C, false)), C);
      await $.wset([$t19], "Result", $.eq((await $.wv([$t19], "ShowModal", C, false)), (await $.wv([$t19], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t19], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmPaymentPlane", "Plane_Edit", async function Plane_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t20 = (await $.mcall((await $.v(C, "TPlaneAddEditForm")), "Create", [Self]));
    try {
      await $.wset([$t20], "PlaneGridState", (await $.wv([$t20], "pgsEdit", C, false)), C);
      await $.wset([$t20], "ContractID", (await $.wv([$t20], "FContractID", C, false)), C);
      await $.wset([$t20], "Result", $.eq((await $.wv([$t20], "ShowModal", C, false)), (await $.wv([$t20], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t20], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmPaymentPlane", "Plane_Delete", async function Plane_Delete(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "id": 0};
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PlaneDataModule")), "PaymentsPlaneData")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t21 = (await $.mv((await $.v(C, "PlaneDataModule")), "PaymentsPlane"));
    await $.stmt((await $.wcall([$t21], "CallProcedure", ["Payments_Plane_Del", [(await $.wv([$t21], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmPaymentPlane", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.mv((await $.v(C, "PlaneDataModule")), "PaymentsPlaneData"));
    try {
      await $.stmt($.wcall([$t22], "Plane_Add", [], C));
      await $.stmt($.wcall([$t22], "Refresh", [], C));
    } finally {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentPlane", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.v(C, "PlaneDataModule")), "PaymentsPlaneData"));
    try {
      await $.stmt($.wcall([$t23], "Plane_Edit", [], C));
      await $.stmt($.wcall([$t23], "Refresh", [], C));
    } finally {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentPlane", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [" Delete Plane ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt($.call(C, "Plane_Delete", []));
  }
  await $.mcall((await $.mv((await $.v(C, "PlaneDataModule")), "PaymentsPlaneData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPaymentPlane", "PlaneViewerDrawColumnCell", async function PlaneViewerDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  {
    const $t24 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "FieldByName", ["Paid"])), "AsString")), "P"))) {
        await $.wset([$t24], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      } else {
        await $.wset([$t24], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      }
      if ($.truthy(($.eq((await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t24], "DataColIndex", { get: async () => L0["datacolindex"], set: async (v) => { L0["datacolindex"] = v; }, local: true }, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t24], "StatusImages", C, false)), "Draw", [(await $.wv([$t24], "Canvas", C, false)), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t24], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t24], "DefaultDrawColumnCell", [(await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t24], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t24], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  return U;
}

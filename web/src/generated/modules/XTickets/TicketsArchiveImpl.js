// Generated from TicketsArchiveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TicketsArchiveImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGrids", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Quickrpt", "Menus", "DataModTM", "TicketsRepImpl", "CurrencyToHR_Azeri_Impl", "UntSecondReport", "UntMainReport", "uChangeStatus", "TicketsManagerImpl"]);
  const C = [U];
  U.defClass("TfrmArchive", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "button3": {"name": "Button3", "type": "TButton"}, "cbpdcopy": {"name": "cbPDCopy", "type": "TCheckBox"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "dsf1": {"name": "dsf1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("frmArchive", null, "TfrmArchive");
  });
  U.method("TfrmArchive", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmArchive", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t1 = L0["sender"];
    await $.mset((await $.mv((await $.wv([$t1], "Canvas", C, false)), "Font")), "Color", (await $.idx((await $.wv([$t1], "GridColors", C, false)), [(await $.mv((await $.mv((await $.wv([$t1], "DataModuleTicketMan", C, false)), "ODSArchiveSTATUS")), "AsInteger"))])));
    await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TfrmArchive", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "qrpTicket"));
    const $t3 = (await $.wv([$t2], "DataModuleTicketMan", C, false));
    const $t4 = (await $.wv([$t2, $t3], "ODSforPrint", C, false));
    await $.stmt($.wcall([$t2, $t3, $t4], "Close", [], C));
    await $.stmt($.wcall([$t2, $t3, $t4], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t2, $t3, $t4], "SetVariable", ["ID", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSArchiveID", C, false)), "AsInteger"))], C)));
    await $.stmt($.wcall([$t2, $t3, $t4], "Open", [], C));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbLabel", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBLABEL", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbTitle", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBTITLE", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbDescription", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBDESCR", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbBotNum", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBBNUMB", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbStrAmount", C, false)), "Caption", (await $.wcall([$t2, $t3, $t4], "CurrencyToHR_Azeri", [(await $.mv((await $.wv([$t2, $t3, $t4], "ODSforPrintAMMOUNT", C, false)), "AsFloat")), 2, [0]], C)));
    await $.mset((await $.wv([$t2, $t3, $t4], "qupDate", C, false)), "Mask", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsFORMATDAT", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbtLabel", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBLABEL", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbtTitle", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBTITLE", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbtDescription", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBDESCR", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbtBotNum", C, false)), "Caption", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsLBBNUMB", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3, $t4], "qlbtStrAmount", C, false)), "Caption", (await $.wcall([$t2, $t3, $t4], "CurrencyToHR_Azeri", [(await $.mv((await $.wv([$t2, $t3, $t4], "ODSforPrintAMMOUNT", C, false)), "AsFloat")), 2, [0]], C)));
    await $.mset((await $.wv([$t2, $t3, $t4], "qbtDate", C, false)), "Mask", (await $.mv((await $.wv([$t2, $t3, $t4], "ODSSettingsFORMATDAT", C, false)), "AsString")));
    await $.stmt($.wcall([$t2, $t3, $t4], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmArchive", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["archsql"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select a.status, a.id, a.pdate, a.pnum, a.dbankfilial, a.dbankcode, a.dbankname,", "\r"), "\n"), "a.dbankinn, a.dbankswift, a.dbankkacc, a.dacc_no, a.daccname,"), "\r"), "\n"), "a.daccinn, a.kbankfilial, a.kbankcode, a.kbankname, a.kbankinn,"), "\r"), "\n"), "a.kbankswift, a.kbankkacc, a.kbanksubkacc, a.kacc_no, a.kaccname,"), "\r"), "\n"), "a.kaccinn, a.ammount, a.description, a.information, a.userid, u.name tuser"), "\r"), "\n"), "from sba_tm_archive a, user$ u"), "\r"), "\n"), "where (u.id=a.userid) and a.status=%s"), "\r"), "\n"), "order by a.id");
  {
    const $t5 = (await $.v(C, "DataModuleTicketMan"));
    const $t6 = (await $.wv([$t5], "ODSArchive", C, false));
    if ($.truthy((await $.wv([$t5, $t6], "active", C, false)))) {
      await $.stmt($.wcall([$t5, $t6], "close", [], C));
    }
    await $.stmt($.wcall([$t5, $t6], "ClearVariables", [], C));
    if ($.truthy($.eq((await $.mv((await $.wv([$t5, $t6], "ODSStatusesID", C, false)), "AsInteger")), (-(1))))) {
      await $.mset((await $.wv([$t5, $t6], "SQL", C, false)), "Text", (await $.wcall([$t5, $t6], "Format", [(await $.wv([$t5, $t6], "ArchSQL", { get: async () => L0["archsql"], set: async (v) => { L0["archsql"] = v; }, local: true }, false)), ["a.status"]], C)));
    } else {
      await $.mset((await $.wv([$t5, $t6], "SQL", C, false)), "Text", (await $.wcall([$t5, $t6], "Format", [(await $.wv([$t5, $t6], "ArchSQL", { get: async () => L0["archsql"], set: async (v) => { L0["archsql"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t5, $t6], "ODSStatusesID", C, false)), "AsString"))]], C)));
    }
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmArchive", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", 1);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmArchive", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DataModuleTicketMan"));
    const $t8 = (await $.wv([$t7], "ODSPaymentDecree", C, false));
    await $.stmt($.wcall([$t7, $t8], "Close", [], C));
    await $.stmt($.wcall([$t7, $t8], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["ID", (await $.mv((await $.wv([$t7, $t8], "ODSArchiveID", C, false)), "AsVariant"))], C)));
    await $.stmt($.wcall([$t7, $t8], "Open", [], C));
    if ($.truthy((await $.mv((await $.wv([$t7, $t8], "cbPDCopy", C, false)), "Checked")))) {
      if ($.truthy($.not((await $.wcall([$t7, $t8], "assigned", [(await $.wv([$t7, $t8], "QRMainReport", C, false))], C))))) {
        await $.wset([$t7, $t8], "QRMainReport", (await $.mcall((await $.wv([$t7, $t8], "TQRMainReport", C, false)), "Create", [Self])), C);
      }
      {
        const $t9 = (await $.wv([$t7, $t8], "QRMainReport", C, false));
        await $.mset((await $.wv([$t7, $t8, $t9], "QRAmmountW1", C, false)), "Caption", (await $.wcall([$t7, $t8, $t9], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t7, $t8, $t9], "ODSPaymentDecree", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat")), 2, []], C)));
        await $.mset((await $.wv([$t7, $t8, $t9], "QRAmmountW2", C, false)), "Caption", (await $.wcall([$t7, $t8, $t9], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t7, $t8, $t9], "ODSPaymentDecree", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat")), 2, []], C)));
        await $.stmt($.wcall([$t7, $t8, $t9], "Preview", [], C));
      }
    } else {
      if ($.truthy($.not((await $.wcall([$t7, $t8], "assigned", [(await $.wv([$t7, $t8], "QRCommonReport", C, false))], C))))) {
        await $.wset([$t7, $t8], "QRCommonReport", (await $.mcall((await $.wv([$t7, $t8], "TQRCommonReport", C, false)), "Create", [Self])), C);
      }
      {
        const $t10 = (await $.wv([$t7, $t8], "QRCommonReport", C, false));
        await $.mset((await $.wv([$t7, $t8, $t10], "QRAmmountW", C, false)), "Caption", (await $.wcall([$t7, $t8, $t10], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t7, $t8, $t10], "ODSPaymentDecree", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat")), 2, []], C)));
        await $.stmt($.wcall([$t7, $t8, $t10], "Preview", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmArchive", "dsf1DrawItem", async function dsf1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t11 = L0["acanvas"];
    const $t12 = (await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t13 = (await $.wv([$t11, $t12], "Font", C, false));
      await $.wset([$t11, $t12, $t13], "Name", "Azl Sans Serif", C);
      await $.wset([$t11, $t12, $t13], "Charset", (await $.wv([$t11, $t12, $t13], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t11, $t12, $t13], "Default", C, false)))) {
        await $.wset([$t11, $t12, $t13], "Style", [(await $.wv([$t11, $t12, $t13], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t11, $t12], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t11, $t12], "Pen", C, false)), "Color", (await $.wv([$t11, $t12], "clBlack", C, false)));
      await $.wset([$t11, $t12], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11, $t12], "MoveTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "LineTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "inc", [$.ref(async () => (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t11, $t12], "LineBottom", $t14, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t11, $t12], "Pen", C, false)), "Color", (await $.wv([$t11, $t12], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t11, $t12], "MoveTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "LineTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t11, $t12], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t11, $t12], "Brush", C, false)), "Color", (await $.wv([$t11, $t12], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t11, $t12], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t11, $t12], "Brush", C, false)), "Color", (await $.wv([$t11, $t12], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t11, $t12], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clGrayText", C, false)));
        }
      }
      await $.wset([$t11, $t12], "Bar", (await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11, $t12], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t15) => { await $.mset((await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t15); }), 22], C)));
      await $.stmt((await $.wcall([$t11, $t12], "FillRect", [(await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "TextOut", [$.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t11, $t12], "Caption", C, false))], C)));
    }
    await $.wset([$t11, $t12], "SText", (await $.wcall([$t11, $t12], "ShortCutToText", [(await $.wv([$t11, $t12], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t11, $t12], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t11, $t12], "TextWidth", [(await $.wv([$t11, $t12], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t11, $t12], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t11, $t12], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t16 = (await $.wv([$t11, $t12], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t11, $t12, $t16], "Assigned", [(await $.wv([$t11, $t12, $t16], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t11, $t12, $t16], "Checked", C, false)))) {
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t17) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t17); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t18) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t18); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t19) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t19); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t20) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t20); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t21) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t21); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t22) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t22); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t23) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t23); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t24) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t24); }), 1], C)));
            if ($.truthy((await $.wv([$t11, $t12, $t16], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "Images", C, false)), "Draw", [(await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t11, $t12, $t16], "ImageIndex", C, false)), (await $.wv([$t11, $t12, $t16], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TfrmArchive", "dsf1Click", async function dsf1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmchgstatus"))]))))) {
    await $.set(C, "frmChgStatus", (await $.mcall((await $.v(C, "TfrmChgStatus")), "Create", [Self])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "frmChgStatus")), "ShowModal")), (await $.v(C, "iDok"))))) {
    {
      const $t25 = (await $.v(C, "frmChgStatus"));
      const $t26 = (await $.wv([$t25], "DataModuleTicketMan", C, false));
      await $.stmt((await $.mcall((await $.wv([$t25, $t26], "TM_MANAGE", C, false)), "CallProcedure", ["changestatus", [(await $.mv((await $.wv([$t25, $t26], "ODSArchiveID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t25, $t26], "cbStat", C, false)), "KeyValue"))]])));
      await $.mcall((await $.wv([$t25, $t26], "ODSArchive", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

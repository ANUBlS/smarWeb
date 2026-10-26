// Generated from U9.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("U9", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ComCtrls", "ToolWin", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "CMExcelExport", "applicationpas", "balans", "CARDS_TLB", "cfilepas", "creditinfopas", "customers", "dpforms", "MAINFORMImpl1", "newcard", "payment", "rezform", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm9", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "editcardholder": {"name": "EditCARDHOLDER", "type": "TEdit"}, "editrbsnumber": {"name": "EditRBSNUMBER", "type": "TEdit"}, "editcardnumber": {"name": "EditCARDNUMBER", "type": "TEdit"}, "editcredit_lim": {"name": "EditCREDIT_LIM", "type": "TEdit"}, "editfname": {"name": "EditFNAME", "type": "TEdit"}, "editlname": {"name": "EditLNAME", "type": "TEdit"}, "editid": {"name": "EditID", "type": "TEdit"}, "editpassport": {"name": "EditPASSPORT", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("Form9", null, "TForm9");
  });
  U.method("TForm9", "ToolButton21Click", async function ToolButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "panel4")), "Visible")), false))) {
    await $.mset((await $.v(C, "ToolButton21")), "Down", true);
    await $.mset((await $.v(C, "Panel4")), "Visible", true);
    return L0.result;
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "panel4")), "Visible")), true))) {
      await $.mset((await $.v(C, "ToolButton21")), "Down", false);
      await $.mset((await $.v(C, "Panel4")), "Visible", false);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm9", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "newcard")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm9", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Kart silinsin?", (await $.v(C, "mtconfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_application", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "asinteger"))]])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm9", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm9", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "newcard")), "CARDS", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm9", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm9", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

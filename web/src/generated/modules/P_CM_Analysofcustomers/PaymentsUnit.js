// Generated from PaymentsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "ExtCtrls", "ComCtrls", "StdCtrls", "Mask", "DBCtrls", "Menus", "CMExcelExport", "CustAnalysDataModuleImpl"]);
  const C = [U];
  U.defClass("TPaymentsForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "excelexportpt": {"name": "ExcelExportPT", "type": "TCMExcelExport"}, "popupmenupay": {"name": "PopupMenuPay", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "popupmenutr": {"name": "PopupMenuTr", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("PaymentsForm", null, "TPaymentsForm");
  });
  U.method("TPaymentsForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPaymentsForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentsForm", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "CustAnalysDataModule"));
    {
      const $t2 = (await $.wv([$t1], "ExcelExportPT", C, false));
      await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "PaymentsDataSet", C, false)), "Ödəmələr", (await $.wv([$t1, $t2], "true", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "CustAnalysDataModule"));
    {
      const $t4 = (await $.wv([$t3], "ExcelExportPT", C, false));
      await $.stmt($.wcall([$t3, $t4], "Connect", [], C));
      await $.stmt((await $.wcall([$t3, $t4], "ExportDataset", [(await $.wv([$t3, $t4], "TrancheDataSet", C, false)), "Ödəmələr", (await $.wv([$t3, $t4], "true", C, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

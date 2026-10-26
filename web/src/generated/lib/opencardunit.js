// Generated from opencardunit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("opencardunit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ExtCtrls", "CMExcelExport", "ImgList", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Topencards", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "editcardnumber": {"name": "EditCARDNUMBER", "type": "TEdit"}, "editrbsnumber": {"name": "EditRBSNUMBER", "type": "TEdit"}, "editfname": {"name": "EditFNAME", "type": "TEdit"}, "editlname": {"name": "EditLNAME", "type": "TEdit"}, "editcardholder": {"name": "EditCARDHOLDER", "type": "TEdit"}, "editcredit_lim": {"name": "EditCREDIT_LIM", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "toolbutton24": {"name": "ToolButton24", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "toolbutton25": {"name": "ToolButton25", "type": "TToolButton"}, "toolbutton26": {"name": "ToolButton26", "type": "TToolButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("opencards", null, "Topencards");
  });
  U.method("Topencards", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "opencard")), "CARDS_OPEN", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Topencards", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "opencard")), "CLOSE", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "opencard")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Topencards", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Topencards", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

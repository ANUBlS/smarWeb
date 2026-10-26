// Generated from MaincargoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MaincargoImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MaincargoProj_TLB", "StdVcl", "StdCtrls", "ImgList", "Grids", "XDBGrids", "ComCtrls", "ToolWin", "XFSCtrls", "ExtCtrls", "DBCtrls", "CMExcelExport", "variants", "DB", "OracleData", "ActnList", "Oracle", "Menus", "ComObj", "ComServ", "DMMainCargoimpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs"]);
  const C = [U];
  U.defClass("TMaincargo", "TActiveForm", {"excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "rgcontract": {"name": "RGContract", "type": "TXFRadioGroup"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfgroupbox11": {"name": "XFGroupBox11", "type": "TXFGroupBox"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "xfcheckbox6": {"name": "XFCheckBox6", "type": "TXFCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "editval_name": {"name": "EditVAL_NAME", "type": "TEdit"}, "editpolicy_num": {"name": "EditPOLICY_NUM", "type": "TEdit"}, "editmusterinin_asa": {"name": "EditMUSTERININ_ASA", "type": "TEdit"}, "editammount": {"name": "EditAMMOUNT", "type": "TEdit"}, "editinssumm": {"name": "EditINSSUMM", "type": "TEdit"}, "editqaliq": {"name": "EditQaliq", "type": "TEdit"}, "editname_cargo": {"name": "EditNAME_CARGO", "type": "TEdit"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "emeliyyat": {"name": "Emeliyyat", "type": "TPopupMenu"}, "dmplan1": {"name": "dmplan1", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "dmlr1": {"name": "dmlr1", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "zrrlr1": {"name": "Zrrlr1", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "xitam1": {"name": "Xitam1", "type": "TMenuItem"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xfcheckbox4": {"name": "XFCheckBox4", "type": "TXFCheckBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfcheckbox7": {"name": "XFCheckBox7", "type": "TXFCheckBox"}, "editname1": {"name": "EditNAME1", "type": "TEdit"}, "xfradiogroup2": {"name": "XFRadioGroup2", "type": "TXFRadioGroup"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "faydagötürən": {"name": "Faydagötürən", "type": "TXFGroupBox"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "fevents": {"name": "FEvents", "type": "IMaincargoEvents"}}, {});
  U.init(async () => {
    U.var_("filterstatus", 0, "integer");
    U.var_("sort_ASC", false, "Boolean");
    U.var_("sqlstring", '', "String");
    U.var_("sql", '', "String");
    U.var_("sql1", '', "String");
  });
  U.method("TMaincargo", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMaincargo", "EditMUSTERININ_ASAKeyPress", async function EditMUSTERININ_ASAKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "EditNAME1")), "Text", (await $.mv((await $.v(C, "EditMUSTERININ_ASA")), "Text")));
    {
      const $t1 = (await $.v(C, "EditNAME1"));
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "i", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "I", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "İ", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "I", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "ı", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
    }
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditNAME1"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMaincargo", "EditS_NOVUExit", async function EditS_NOVUExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "EditS_NOVUKeyPress", async function EditS_NOVUKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMaincargo", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t2 = L0["sender"];
    await $.wset([$t2], "SearchField", (await $.wcall([$t2], "copy", [(await $.wv([$t2], "Name", C, false)), 5, (await $.wcall([$t2], "length", [(await $.wv([$t2], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t3 = (await $.wcall([$t2], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t2], "XDBGrid1", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t2, $t3], "SearchRecord", [(await $.wv([$t2, $t3], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "Text", C, false)), $.add((await $.wv([$t2, $t3], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t2, $t3], "srFromCurrent", C, false)), (await $.wv([$t2, $t3], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t2, $t3], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t2, $t3], "mtInformation", C, false)), [(await $.wv([$t2, $t3], "mbNo", C, false)), (await $.wv([$t2, $t3], "mbYes", C, false))], 0], C)), (await $.wv([$t2, $t3], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t2, $t3], "SearchRecord", [(await $.wv([$t2, $t3], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "Text", C, false)), $.add((await $.wv([$t2, $t3], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t2, $t3], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t2, $t3], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t2, $t3], "mtInformation", C, false)), [(await $.wv([$t2, $t3], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMaincargo", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMaincargo", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMaincargo", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMaincargo", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMaincargo", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "filterstatus", 0);
  await $.mset((await $.v(C, "XFCheckBox7")), "Checked", false);
  await $.set(C, "DMMainCargo", (await $.mcall((await $.v(C, "TDMMainCargo")), "Create", [Self])));
  await $.set(C, "sql1", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "SQL")), "Text")));
  await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
  await $.mset((await $.v(C, "RGContract")), "ItemIndex", 0);
  await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.set(C, "commandatasetcargo", (await $.mv((await $.v(C, "DMMainCargo")), "DSContract")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "dmlr1Click", async function dmlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "DMMainCargo"));
    const $t5 = (await $.wv([$t4], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["checkadvancedobjectaccess", ["SEEPAYMENT"]], C)));
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsPayment.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "dmplan1Click", async function dmplan1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsPaymentPlan.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMaincargo", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "RGContractClick", async function RGContractClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": '', "p_name": '', "p_cust_id": '', "p_agent_id": '', "p_marka": '', "p_avtotype": '', "p_fransiza": '', "p_type": '', "p_begin_date": '', "p_end_date": '', "pstate": 0, "filterstr": '', "bankenar": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["booleanprefix"] = " AND ";
  L0["statusfilter"] = "(ic.close_prefix=%d)";
  L0["nametype"] = "(ic.type_id=%d)";
  L0["namefilter"] = "(ic.KLI_ID=%d)";
  L0["custfilter"] = "(cust.id=%d)";
  L0["agent_idfilter"] = "(ic.AGENT_ID=%d)";
  L0["marka_idfilter"] = "(im.MARKA_ID=%d)";
  L0["avtotype_idfilter"] = "(im.INSUREDTYPE=%d)";
  L0["fransizafilter"] = "(ic.franshiz=%d)";
  L0["begindatefilter"] = " ic.begin_date ";
  L0["enddatefilter"] = " ic.end_date ";
  L0["bankenarfilter"] = "(ic.bnf_type=%d)";
  L0["checkfiltered"] = $.fn(async function CheckFiltered(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["filterstr"] = "";
  L0["status"] = (await $.callv(L0["checkfiltered"], [$.ne((await $.mv((await $.v(C, "RGContract")), "ItemIndex")), (-(1))), L0["statusfilter"], [(await $.mv((await $.v(C, "RGContract")), "ItemIndex"))]]));
  L0["p_name"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), L0["namefilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_cust_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), L0["custfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox6")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["p_agent_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), L0["agent_idfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox2")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]]));
  if ($.truthy($.eq(L0["status"], ""))) {
    L0["filterstr"] = "status is not null";
  } else {
    L0["filterstr"] = L0["status"];
  }
  if ($.truthy((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")))) {
    L0["bankenar"] = "bnf_type=1";
  } else {
    L0["bankenar"] = "bnf_type in(2,3,4,5,6,7,8,9,10,11,12,13,14,15)";
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox5")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["bankenar"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["bankenar"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_name"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_name"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_cust_id"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_cust_id"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_agent_id"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_agent_id"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 0))) {
      L0["p_begin_date"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["begindatefilter"], " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'");
      if ($.truthy($.eq(L0["filterstr"], ""))) {
        L0["filterstr"] = $.add(L0["booleanprefix"], L0["p_begin_date"]);
      } else {
        L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_begin_date"]);
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 1))) {
      L0["p_end_date"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["enddatefilter"], " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'");
      if ($.truthy($.eq(L0["filterstr"], ""))) {
        L0["filterstr"] = L0["p_end_date"];
      } else {
        L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_end_date"]);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox4")), "Checked")), true))) {
    { const $t6 = (await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"));
      if ($.eq($t6, 0)) {
        L0["pstate"] = 6;
      }
      else if ($.eq($t6, 1)) {
        L0["pstate"] = 0;
      }
      else if ($.eq($t6, 2)) {
        L0["pstate"] = 7;
      }
      else if ($.eq($t6, 3)) {
        L0["pstate"] = 8;
      }
    }
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = $.add(" and ic.state=", (await $.call(C, "inttostr", [L0["pstate"]])));
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " and ic.state="), (await $.call(C, "inttostr", [L0["pstate"]])));
    }
  }
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), "Text", "");
  await $.set(C, "sql", $.add($.add((await $.v(C, "sql1")), " and "), L0["filterstr"]));
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), "Text", (await $.v(C, "sql")));
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), "Text")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox7")), "Checked")), true))) {
    { const $t7 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), [20], ""); if ($t7 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql", $t7); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), [20], ""); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql", $t8); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), true))) {
    { const $t9 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), [20], ""); if ($t9 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql", $t9); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    { const $t10 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), [20], ""); if ($t10 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql", $t10); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")), true))) {
    { const $t11 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), [20], ""); if ($t11 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql", $t11); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox4")), "Checked")), true))) {
    { const $t12 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), [20], ""); if ($t12 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql", $t12); } }
  }
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), "Text")));
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), "text", (await $.call(C, "Stringreplace", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "sql")), "text")), "status", "DECODE (ic.close_prefix, 0, 1, 2)", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]])));
  await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMaincargo", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMaincargo", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMaincargo", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMaincargo", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMaincargo", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMaincargo", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMaincargo", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMaincargo", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMaincargo", "ToolButton13Click", async function ToolButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Heç bir məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t13 = (await $.v(C, "DMMainCargo"));
    const $t14 = (await $.wv([$t13], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELCONTRACT_ALLCARGO"]], C)));
  }
  {
    const $t15 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t15], "Connect", [], C));
    await $.stmt((await $.wcall([$t15], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t15], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Yük sığortaları.", (await $.wv([$t15], "True", C, false)), (await $.wv([$t15], "false", C, false))], C)));
    await $.stmt($.wcall([$t15], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Heç bir məlumat yoxdur."])));
    return L0.result;
  }
  await $.set(C, "opetion", "See");
  await $.set(C, "ins_cutsid", 0);
  await $.set(C, "ins_cutsid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["Kli_id"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.set(C, "p_contractstate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin1", ["CargoBlank.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "DMMainCargo"));
    const $t17 = (await $.wv([$t16], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t16, $t17], "CallProcedure", ["checkadvancedobjectaccess", ["NEWCONTRACT_ALLCARGO"]], C)));
  }
  await $.set(C, "opetion", "ins");
  await $.set(C, "ins_cutsid", 0);
  await $.set(C, "contactid", (-(1)));
  await $.stmt((await $.call(C, "loadPlugin1", ["CargoBlank.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.v(C, "DMMainCargo"));
    const $t19 = (await $.wv([$t18], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t18, $t19], "CallProcedure", ["checkadvancedobjectaccess", ["EDITCONTRACT_ALLCARGO"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Heç bir məlumat yoxdur."])));
    return L0.result;
  }
  await $.set(C, "opetion", "upd");
  await $.set(C, "ins_cutsid", 0);
  await $.set(C, "ins_cutsid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["Kli_id"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.set(C, "p_contractstate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin1", ["CargoBlank.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "LoadPlugin1", async function LoadPlugin1(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], ""])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TMaincargo", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "DMMainCargo"));
    const $t21 = (await $.wv([$t20], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t20, $t21], "CallProcedure", ["checkadvancedobjectaccess", ["CLOSECONTRACT_ALLCARGO"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Heç bir məlumat yoxdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş siğorta ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    try {
      {
        const $t23 = (await $.v(C, "DMMainCargo"));
        const $t24 = (await $.wv([$t23], "OPCOMMON", C, false));
        const $t25 = (await $.wv([$t23, $t24], "DSContract", C, false));
        if ($.truthy((await $.mcall((await $.mv((await $.wv([$t23, $t24, $t25], "DMMainCargo", C, false)), "OPCOMMON")), "callbooleanfunction", ["del_ins", [(await $.mv((await $.wv([$t23, $t24, $t25], "DSContractID", C, false)), "Value")), (await $.mv((await $.wv([$t23, $t24, $t25], "DSContractType_Id", C, false)), "value"))]])))) {
          await $.mcall((await $.mv((await $.mv((await $.wv([$t23, $t24, $t25], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        }
      }
    } catch ($t22) {
      $.rethrowControl($t22);
      if ($.excIs($t22, "EOracleError")) {
        L0["e"] = $.exc($t22);
        { const $t26 = (await $.mv(L0["e"], "ErrorCode"));
          if ($.eq($t26, 20002)) {
            if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş müqaviləyə uyğun hesablar ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "OPCOMMON")), "CallProcedure", ["close_acc", [(await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "ODSAccountID")), "value"))]])));
            }
          }
          else if ($.eq($t26, 20001)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Aslı hesablarda qalıq sıfırdan fərqlidir!"])));
          }
        }
      }
      else { throw $t22; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFGroupBox1")), "Visible", $.not((await $.mv((await $.v(C, "XFGroupBox1")), "Visible"))));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFGroupBox1")), "Visible")), true))) {
    await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSIns_cust")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSIns_cust")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DScutomers")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DScutomers")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSins_agents")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMMainCargo")), "DSins_agents")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t27 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t27], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t27], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "DataSource", C, false)), "DataSet")), "FieldByName", ["state"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy((await $.and_(($.eq((await $.wv([$t27], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t27], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.mset((await $.mv((await $.wv([$t27], "Canvas", C, false)), "brush")), "Style", (await $.wv([$t27], "bsSolid", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t27], "Canvas", C, false)), "FillRect", [(await $.wv([$t27], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t27], "ImageList2", C, false)), "Draw", [(await $.wv([$t27], "Canvas", C, false)), (await $.mv((await $.wv([$t27], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t27], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t27], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t27], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t27], "DefaultDrawColumnCell", [(await $.wv([$t27], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t27], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t27], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t27], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TMaincargo", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.v(C, "DMMainCargo")), "DSContract")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t28 = (await $.v(C, "DMMainCargo"));
    const $t29 = (await $.wv([$t28], "DSContract", C, false));
    try {
      await $.wset([$t28, $t29], "SortPosition", (await $.mcall((await $.wv([$t28, $t29], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t28, $t29], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t28, $t29], "Refresh", [], C));
    } finally {
      { const $t30 = await $.iset((await $.wv([$t28, $t29], "SQL", C, false)), [(await $.wv([$t28, $t29], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t28, $t29], "EmptyStr", C, false))); if ($t30 !== undefined) { await $.wset([$t28, $t29], "SQL", $t30, C); } }
      await $.mset((await $.wv([$t28, $t29], "Screen", C, false)), "Cursor", (await $.wv([$t28, $t29], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TMaincargo", "Xitam1Click", async function Xitam1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t31 = (await $.v(C, "DMMainCargo"));
    const $t32 = (await $.wv([$t31], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t31, $t32], "CallProcedure", ["checkadvancedobjectaccess", ["TERMINATEDINS_CONTRACT"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 8))) {
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 6))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Yalnız Təsdiq statusunda olan muqaviləyə xitam vermək olar."])));
      return L0.result;
    }
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsContracterminated.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaincargo", "Zrrlr1Click", async function Zrrlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    {
      const $t33 = (await $.v(C, "DMMainCargo"));
      const $t34 = (await $.wv([$t33], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t33, $t34], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSKASKO"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 1))) {
    {
      const $t35 = (await $.v(C, "DMMainCargo"));
      const $t36 = (await $.wv([$t35], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t35, $t36], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSFQ"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 13))) {
    {
      const $t37 = (await $.v(C, "DMMainCargo"));
      const $t38 = (await $.wv([$t37], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t37, $t38], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSMES"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 8))) {
    {
      const $t39 = (await $.v(C, "DMMainCargo"));
      const $t40 = (await $.wv([$t39], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t39, $t40], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSYUK"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 3))) {
    {
      const $t41 = (await $.v(C, "DMMainCargo"));
      const $t42 = (await $.wv([$t41], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t41, $t42], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSEMLAK"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 21))) {
    {
      const $t43 = (await $.v(C, "DMMainCargo"));
      const $t44 = (await $.wv([$t43], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t43, $t44], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSSEYAHET"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 2))) {
    {
      const $t45 = (await $.v(C, "DMMainCargo"));
      const $t46 = (await $.wv([$t45], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t45, $t46], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSTIBB"]], C)));
    }
  }
  await $.set(C, "commoncid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["loss.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

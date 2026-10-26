// Generated from BlankMainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BlankMainImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "shellapi", "ActiveX", "AxCtrls", "BlankMainProj_TLB", "StdVcl", "ExtCtrls", "XFSCtrls", "StdCtrls", "DBCtrls", "DBGridEhGrouping", "GridsEh", "DBGridEh", "DB", "OracleData", "variants", "Grids", "XDBGrids", "ComCtrls", "ToolWin", "ImgList", "ActnList", "Oracle", "PlgModalContainer", "CMExcelExport", "Menus", "DBGrids", "ComObj", "ComServ", "sboapiDataModuleimpl", "SBTranslateProc", "FrmFilterBlankMainImpl", "BlankDMImpl", "CommanParametrs", "Unit3", "Birthexcel"]);
  const C = [U];
  U.defClass("TBlankMain", "TActiveForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "pmccallactivex": {"name": "pmcCallActiveX", "type": "TPlgModalContainer"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "edits_novu": {"name": "EditS_NOVU", "type": "TEdit"}, "editpolis": {"name": "EditPOLIS", "type": "TEdit"}, "editcustname": {"name": "EditCUSTNAME", "type": "TEdit"}, "editagent": {"name": "EditAGENT", "type": "TEdit"}, "editammount": {"name": "EditAMMOUNT", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "editinssumm": {"name": "EditINSSUMM", "type": "TEdit"}, "edittariff": {"name": "EditTARIFF", "type": "TEdit"}, "editfranshiz": {"name": "EditFRANSHIZ", "type": "TEdit"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "emeliyyat": {"name": "Emeliyyat", "type": "TPopupMenu"}, "dmplan1": {"name": "dmplan1", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "dmlr1": {"name": "dmlr1", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "zrrlr1": {"name": "Zrrlr1", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "xitam1": {"name": "Xitam1", "type": "TMenuItem"}, "ffgd1": {"name": "ffgd1", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "gndlikzrrlr1": {"name": "Gndlikzrrlr1", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "krarsigortannpremiyabarderosunundnmsi1": {"name": "krarsigortannpremiyabarderosunundnmsi1", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "krarsiortayazrrbarderosunundnmsi1": {"name": "krarsiortayazrrbarderosunundnmsi1", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "krarsiortayaxitambarderosunundnmsi1": {"name": "krarsiortayaxitambarderosunundnmsi1", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "krarsiortannsubroqasiyabarderosunundnmsi1": {"name": "krarsiortannsubroqasiyabarderosunundnmsi1", "type": "TMenuItem"}, "editvalyuta": {"name": "EditVALYUTA", "type": "TEdit"}, "n10": {"name": "N10", "type": "TMenuItem"}, "yenilm1": {"name": "Yenilm1", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "kmk1": {"name": "Kmk1", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "esdiq1": {"name": "esdiq1", "type": "TMenuItem"}, "editname1": {"name": "EditNAME1", "type": "TEdit"}, "n13": {"name": "N13", "type": "TMenuItem"}, "onlineodeme1": {"name": "Onlineodeme1", "type": "TMenuItem"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "rgcontract": {"name": "RGContract", "type": "TXFRadioGroup"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfgroupbox11": {"name": "XFGroupBox11", "type": "TXFGroupBox"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "xfcheckbox8": {"name": "XFCheckBox8", "type": "TXFCheckBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xfcheckbox4": {"name": "XFCheckBox4", "type": "TXFCheckBox"}, "xfgroupbox10": {"name": "XFGroupBox10", "type": "TXFGroupBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "xfcheckbox7": {"name": "XFCheckBox7", "type": "TXFCheckBox"}, "xfradiogroup2": {"name": "XFRadioGroup2", "type": "TXFRadioGroup"}, "faydagötürən": {"name": "Faydagötürən", "type": "TXFGroupBox"}, "xfcheckbox10": {"name": "XFCheckBox10", "type": "TXFCheckBox"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfcheckbox11": {"name": "XFCheckBox11", "type": "TXFCheckBox"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "xfcheckbox6": {"name": "XFCheckBox6", "type": "TXFCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "n14": {"name": "N14", "type": "TMenuItem"}, "dogumgnexcel1": {"name": "Dogumgnexcel1", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "bildiris1": {"name": "Bildiris1", "type": "TMenuItem"}, "bildirishuquqi1": {"name": "BildirisHuquqi1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IBlankMainEvents"}, "cid": {"name": "CID", "type": "integer"}, "filterstatus": {"name": "filterstatus", "type": "integer"}, "filterstr1": {"name": "FilterStr1", "type": "String"}, "grup1": {"name": "grup1", "type": "String"}, "grup2": {"name": "grup2", "type": "String"}, "grup3": {"name": "grup3", "type": "String"}}, {});
  U.init(async () => {
  });
  U.method("TBlankMain", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBlankMain", "EditCUSTNAMEKeyPress", async function EditCUSTNAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "EditNAME1")), "Text", (await $.mv((await $.v(C, "EditCUSTNAME")), "Text")));
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
  U.method("TBlankMain", "EditS_NOVUExit", async function EditS_NOVUExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "EditS_NOVUKeyPress", async function EditS_NOVUKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TBlankMain", "esdiq1Click", async function esdiq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
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
  U.method("TBlankMain", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBlankMain", "ffgd1Click", async function ffgd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "BlankDM"));
    const $t5 = (await $.wv([$t4], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["checkadvancedobjectaccess", ["SEEBARDERO_TERMINATE"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təkrarsığortaya göndərilmiş müqavilə üçün Xitam barderosu yığmaq olar!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 8))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız xitam statusunda olan müqavilə üçün Xitam barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.set(C, "Bordero_type", "xitam");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["reinsurance.bpl", "terminate"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBlankMain", "Initialize", null, arguments);
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
  U.method("TBlankMain", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlankMain", "Gndlikzrrlr1Click", async function Gndlikzrrlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "BlankDM"));
    const $t7 = (await $.wv([$t6], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["DAILY_LOSSES"]], C)));
  }
  await $.stmt((await $.call(C, "loadPlugin", ["loss.bpl", "AllLost"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBlankMain", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "DBLookupComboBox5Click", async function DBLookupComboBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "dmlr1Click", async function dmlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t8 = (await $.v(C, "BlankDM"));
    const $t9 = (await $.wv([$t8], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["checkadvancedobjectaccess", ["SEEPAYMENT"]], C)));
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsPayment.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "dmplan1Click", async function dmplan1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "BlankDM"));
    const $t11 = (await $.wv([$t10], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["checkadvancedobjectaccess", ["ENTER_PEYMENT_PLAN1"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsPaymentPlan.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Dogumgnexcel1Click", async function Dogumgnexcel1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "SQL")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "SQL")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "Open", []);
  await $.mset((await $.v(C, "Memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "BlankDM")), "dsbirth")), "SQL")), "Text")));
  {
    const $t12 = (await $.mcall((await $.v(C, "TForm5")), "Create", [Self]));
    try {
      await $.stmt($.wcall([$t12], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t12], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBlankMain", "Kmk1Click", async function Kmk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShellExecute", [(await $.v(C, "Handle")), "open", (await $.call(C, "PChar", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "Ins_chm.chm")])), null, null, (await $.v(C, "SW_SHOW"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "krarsigortannpremiyabarderosunundnmsi1Click", async function krarsigortannpremiyabarderosunundnmsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "BlankDM"));
    const $t14 = (await $.wv([$t13], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["checkadvancedobjectaccess", ["SEEALLBARDERO_PREMIYA"]], C)));
  }
  await $.set(C, "Bordero_type", "S_haqqi");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Reinsurance.bpl", "operation"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "krarsiortannsubroqasiyabarderosunundnmsi1Click", async function krarsiortannsubroqasiyabarderosunundnmsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Bordero_type", "sub");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Reinsurance.bpl", "operation"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "krarsiortayaxitambarderosunundnmsi1Click", async function krarsiortayaxitambarderosunundnmsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "BlankDM"));
    const $t16 = (await $.wv([$t15], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t15, $t16], "CallProcedure", ["checkadvancedobjectaccess", ["SEEALLBARDERO_TERMINATE"]], C)));
  }
  await $.set(C, "Bordero_type", "xitam");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Reinsurance.bpl", "operation"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "krarsiortayazrrbarderosunundnmsi1Click", async function krarsiortayazrrbarderosunundnmsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "BlankDM"));
    const $t18 = (await $.wv([$t17], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t17, $t18], "CallProcedure", ["checkadvancedobjectaccess", ["SEEALLBARDERO_LOSS"]], C)));
  }
  await $.set(C, "Bordero_type", "Zerer");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Reinsurance.bpl", "operation"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Onlineodeme1Click", async function Onlineodeme1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0, "parentid": 0, "selectrow": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "XDBGrid1"));
    const $t20 = (await $.mv((await $.wv([$t19], "DataSource", C, false)), "DataSet"));
    await $.wset([$t19, $t20], "selectrow", (await $.mv((await $.wv([$t19, $t20], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    { const $t21 = $.sub((await $.wv([$t19, $t20], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t19, $t20], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t22 = true;
      for (;;) {
        if (!$t22) { await $.wset([$t19, $t20], "i", $.succ((await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t22 = false;
        if (!($.ord((await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t21))) break;
        await $.stmt((await $.wcall([$t19, $t20], "GotoBookmark", [(await $.wcall([$t19, $t20], "Pointer", [(await $.idx((await $.wv([$t19, $t20], "SelectedRows", C, false)), [(await $.wv([$t19, $t20], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        {
          const $t23 = (await $.wv([$t19, $t20], "BlankDM", C, false));
          if ($.truthy($.eq((await $.mcall((await $.wv([$t19, $t20, $t23], "OPCOMMON", C, false)), "CallBooleanFunction", ["addpaymentReal", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20, $t23], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["idc"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20, $t23], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["ammount"])), "AsFLOAT")), 1, (await $.wv([$t19, $t20, $t23], "null", C, false)), (await $.wv([$t19, $t20, $t23], "null", C, false)), 55989, (await $.wv([$t19, $t20, $t23], "null", C, false))]])), (await $.wv([$t19, $t20, $t23], "true", C, false))))) {
          }
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t19, $t20], "ShowMessage", ["Müqavilələr ödəndi"], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBlankMain", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBlankMain", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBlankMain", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBlankMain", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBlankMain", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBlankMain", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBlankMain", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBlankMain", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlankMain", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.mcall((await $.v(C, "TFrmFilterBlankMain")), "Create", [Self]));
    try {
      await $.mcall((await $.wv([$t24], "FrmFilterBlankMain", C, false)), "ShowModal", []);
    } finally {
      await $.stmt($.wcall([$t24], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton13Click", async function ToolButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["user"])), "AsString")), "SEDR")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["user"])), "AsString")), "SATISH_MUD")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["user"])), "AsString")), "SMART")))))) {
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mobilephone"])), "Visible", true);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["USER_ADI"])), "Visible", true);
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "Visible", true);
  }
  {
    const $t25 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t25], "Connect", [], C));
    await $.stmt((await $.wcall([$t25], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t25], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Bütün sığortalar.", (await $.wv([$t25], "True", C, false)), (await $.wv([$t25], "false", C, false))], C)));
    await $.stmt($.wcall([$t25], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton15Click", async function ToolButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null, "a": 0, "p_obeykt_type": '', "p_obeykt_name": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "moduletype", "m");
  await $.set(C, "opetion", "See");
  await $.set(C, "ins_cutsid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["kli_id"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.set(C, "p_contractstate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  {
    const $t26 = (await $.v(C, "BlankDM"));
    await $.mcall((await $.wv([$t26], "DSins_insur", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t26], "DSins_insur", C, false)), "SetVariable", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t26], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["TYPE_ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t26], "DSins_insur", C, false)), "Open", []);
    await $.wset([$t26], "p_obeykt_type", (await $.mv((await $.mcall((await $.wv([$t26], "DSins_insur", C, false)), "FieldByName", ["obeykt_type"])), "AsString")), { get: async () => L0["p_obeykt_type"], set: async (v) => { L0["p_obeykt_type"] = v; }, local: true });
    await $.wset([$t26], "p_obeykt_name", (await $.mv((await $.mcall((await $.wv([$t26], "DSins_insur", C, false)), "FieldByName", ["changeguid"])), "AsString")), { get: async () => L0["p_obeykt_name"], set: async (v) => { L0["p_obeykt_name"] = v; }, local: true });
  }
  if ($.truthy($.eq(L0["p_obeykt_type"], "ocx"))) {
    await $.mset((await $.v(C, "pmcCallActiveX")), "p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
    L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    {
      const $t27 = (await $.mv((await $.v(C, "BlankDM")), "ODSContracts"));
      const $t28 = (await $.mv((await $.wv([$t27], "BlankDM", C, false)), "OPCOMMON"));
      const $t29 = (await $.wv([$t27, $t28], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false));
      try {
        await $.wset([$t27, $t28, $t29], "a", (await $.mcall((await $.mv((await $.wv([$t27, $t28, $t29], "BlankDM", C, false)), "OPCOMMON")), "CallIntegerFunction", ["get_blank_id", [(await $.mv((await $.wcall([$t27, $t28, $t29], "FieldByName", ["ID"], C)), "asFloat"))]])), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        { const $t30 = await $.iset((await $.wv([$t27, $t28, $t29], "Values", C, false)), ["Mod"], "Edit"); if ($t30 !== undefined) { await $.wset([$t27, $t28, $t29], "Values", $t30, C); } }
        { const $t31 = await $.iset((await $.wv([$t27, $t28, $t29], "Values", C, false)), ["SID"], (await $.wcall([$t27, $t28, $t29], "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t27, $t28, $t29], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "asFloat"))], C))); if ($t31 !== undefined) { await $.wset([$t27, $t28, $t29], "Values", $t31, C); } }
        { const $t32 = await $.iset((await $.wv([$t27, $t28, $t29], "Values", C, false)), ["bid"], (await $.mcall((await $.mv((await $.wv([$t27, $t28, $t29], "BlankDM", C, false)), "OPCOMMON")), "CallIntegerFunction", ["get_blank_id", [(await $.mv((await $.wcall([$t27, $t28, $t29], "FieldByName", ["ID"], C)), "asFloat"))]]))); if ($t32 !== undefined) { await $.wset([$t27, $t28, $t29], "Values", $t32, C); } }
        { const $t33 = await $.iset((await $.wv([$t27, $t28, $t29], "Values", C, false)), ["KLI_ID"], (await $.wcall([$t27, $t28, $t29], "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t27, $t28, $t29], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["KLI_ID"])), "asFloat"))], C))); if ($t33 !== undefined) { await $.wset([$t27, $t28, $t29], "Values", $t33, C); } }
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t27, $t28, $t29], "BlankDM", C, false)), "OPCOMMON")), "CallProcedure", ["p_ins_cid", [(await $.mv((await $.wcall([$t27, $t28, $t29], "FieldByName", ["ID"], C)), "asFloat")), (await $.wv([$t27, $t28, $t29], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), (await $.wcall([$t27, $t28, $t29], "FloatToStr", [(await $.mv((await $.wcall([$t27, $t28, $t29], "FieldByName", ["KLI_ID"], C)), "asFloat"))], C)), "Edit"]])));
        await $.stmt((await $.wcall([$t27, $t28, $t29], "CallChangeForm", [(await $.wv([$t27, $t28, $t29], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
      } finally {
        await $.mcall((await $.wv([$t27, $t28, $t29], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Free", []);
      }
    }
  }
  if ($.truthy($.eq(L0["p_obeykt_type"], "bpl"))) {
    await $.stmt((await $.call(C, "loadPlugin1", [L0["p_obeykt_name"], ""])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null, "a": 0, "p_obeykt_type": '', "p_obeykt_name": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir müqavilə seçilməyib!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSContract")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSContract")), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSContract")), "Open", []);
  await $.set(C, "opetion", "upd");
  await $.set(C, "ins_cutsid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.set(C, "p_contractstate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  {
    const $t34 = (await $.v(C, "BlankDM"));
    const $t35 = (await $.wv([$t34], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t34, $t35], "CallProcedure", ["checkadvancedobjectaccess", ["EDITINSCONTRACTS"]], C)));
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 7)))))) {
    {
      const $t36 = (await $.v(C, "BlankDM"));
      const $t37 = (await $.wv([$t36], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t36, $t37], "CallProcedure", ["checkadvancedobjectaccess", ["REFUSALINS_EDİTCONTRACTS"]], C)));
    }
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş siğorta müqaviləsi redaktə statusuna keçəcək əminsinizmi?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t38 = (await $.v(C, "BlankDM"));
        const $t39 = (await $.wv([$t38], "OPCOMMON", C, false));
        if ($.truthy($.eq((await $.mcall((await $.wv([$t38, $t39], "OPCOMMON", C, false)), "CallIntegerFunction", ["editcontract", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t38, $t39], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))]])), 1))) {
          await $.stmt((await $.wcall([$t38, $t39], "MessageDlg", ["Müqavilə redaktə statusuna keçdi.", (await $.wv([$t38, $t39], "mtInformation", C, false)), [(await $.wv([$t38, $t39], "mbok", C, false))], 0], C)));
          await $.mcall((await $.mv((await $.wv([$t38, $t39], "BlankDM", C, false)), "DSFullContarct")), "Refresh", []);
        }
      }
    }
  }
  {
    const $t40 = (await $.v(C, "BlankDM"));
    await $.mcall((await $.wv([$t40], "DSins_insur", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t40], "DSins_insur", C, false)), "SetVariable", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["TYPE_ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t40], "DSins_insur", C, false)), "Open", []);
    await $.wset([$t40], "p_obeykt_type", (await $.mv((await $.mcall((await $.wv([$t40], "DSins_insur", C, false)), "FieldByName", ["obeykt_type"])), "AsString")), { get: async () => L0["p_obeykt_type"], set: async (v) => { L0["p_obeykt_type"] = v; }, local: true });
    await $.wset([$t40], "p_obeykt_name", (await $.mv((await $.mcall((await $.wv([$t40], "DSins_insur", C, false)), "FieldByName", ["changeguid"])), "AsWideString")), { get: async () => L0["p_obeykt_name"], set: async (v) => { L0["p_obeykt_name"] = v; }, local: true });
  }
  if ($.truthy($.eq(L0["p_obeykt_type"], "ocx"))) {
    await $.mset((await $.v(C, "pmcCallActiveX")), "p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
    L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    {
      const $t41 = (await $.mv((await $.v(C, "BlankDM")), "DSContract"));
      const $t42 = (await $.mv((await $.wv([$t41], "BlankDM", C, false)), "OPCOMMON"));
      const $t43 = (await $.wv([$t41, $t42], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false));
      try {
        await $.wset([$t41, $t42, $t43], "a", (await $.mcall((await $.mv((await $.wv([$t41, $t42, $t43], "BlankDM", C, false)), "OPCOMMON")), "CallIntegerFunction", ["get_blank_id", [(await $.mv((await $.wcall([$t41, $t42, $t43], "FieldByName", ["ID"], C)), "asFloat"))]])), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        { const $t44 = await $.iset((await $.wv([$t41, $t42, $t43], "Values", C, false)), ["Mod"], "Edit"); if ($t44 !== undefined) { await $.wset([$t41, $t42, $t43], "Values", $t44, C); } }
        { const $t45 = await $.iset((await $.wv([$t41, $t42, $t43], "Values", C, false)), ["SID"], (await $.wcall([$t41, $t42, $t43], "FloatToStr", [(await $.mv((await $.wcall([$t41, $t42, $t43], "FieldByName", ["ID"], C)), "asFloat"))], C))); if ($t45 !== undefined) { await $.wset([$t41, $t42, $t43], "Values", $t45, C); } }
        { const $t46 = await $.iset((await $.wv([$t41, $t42, $t43], "Values", C, false)), ["bid"], (await $.mcall((await $.mv((await $.wv([$t41, $t42, $t43], "BlankDM", C, false)), "OPCOMMON")), "CallIntegerFunction", ["get_blank_id", [(await $.mv((await $.wcall([$t41, $t42, $t43], "FieldByName", ["ID"], C)), "asFloat"))]]))); if ($t46 !== undefined) { await $.wset([$t41, $t42, $t43], "Values", $t46, C); } }
        { const $t47 = await $.iset((await $.wv([$t41, $t42, $t43], "Values", C, false)), ["KLI_ID"], (await $.wcall([$t41, $t42, $t43], "FloatToStr", [(await $.mv((await $.wcall([$t41, $t42, $t43], "FieldByName", ["KLI_ID"], C)), "asFloat"))], C))); if ($t47 !== undefined) { await $.wset([$t41, $t42, $t43], "Values", $t47, C); } }
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t41, $t42, $t43], "BlankDM", C, false)), "OPCOMMON")), "CallProcedure", ["p_ins_cid", [(await $.mv((await $.wcall([$t41, $t42, $t43], "FieldByName", ["ID"], C)), "asFloat")), (await $.wv([$t41, $t42, $t43], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), (await $.wcall([$t41, $t42, $t43], "FloatToStr", [(await $.mv((await $.wcall([$t41, $t42, $t43], "FieldByName", ["KLI_ID"], C)), "asFloat"))], C)), "Edit"]])));
        await $.stmt((await $.wcall([$t41, $t42, $t43], "CallChangeForm", [(await $.wv([$t41, $t42, $t43], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
      } finally {
        await $.mcall((await $.wv([$t41, $t42, $t43], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Free", []);
      }
    }
  }
  if ($.truthy($.eq(L0["p_obeykt_type"], "bpl"))) {
    await $.stmt((await $.call(C, "loadPlugin", [L0["p_obeykt_name"], ""])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "funcname": '', "trid": 0, "parentid": 0, "selectrow": 0, "i": 0, "a": 0, "c_acc": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t48 = (await $.v(C, "BlankDM"));
    const $t49 = (await $.wv([$t48], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t48, $t49], "CallProcedure", ["checkadvancedobjectaccess", ["COMMITINSCONTRACTS"]], C)));
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["IDC"])), "asInteger")));
  {
    const $t50 = (await $.v(C, "BlankDM"));
    await $.mcall((await $.wv([$t50], "DSPaymentSettingInfo", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t50], "DSPaymentSettingInfo", C, false)), "SetVariable", ["pcid", (await $.wv([$t50], "contactid", C, false))])));
    await $.mcall((await $.wv([$t50], "DSPaymentSettingInfo", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t50], "DSPaymentSettingInfo", C, false)), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t50], "showmessage", ["Diqqət! Bu müqavilənin Ödəmə planı haqqındakı məlumatları yığılmayıb!"], C)));
      return L0.result;
    }
    await $.mcall((await $.wv([$t50], "DSPaymentsetting", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t50], "DSPaymentsetting", C, false)), "SetVariable", ["pcid", (await $.wv([$t50], "contactid", C, false))])));
    await $.mcall((await $.wv([$t50], "DSPaymentsetting", C, false)), "Open", []);
    await $.mcall((await $.wv([$t50], "DSPaymentInfo", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t50], "DSPaymentInfo", C, false)), "SetVariable", ["pcid", (await $.wv([$t50], "contactid", C, false))])));
    await $.mcall((await $.wv([$t50], "DSPaymentInfo", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t50], "DSPaymentsetting", C, false)), "FieldByName", ["payment_type"])), "AsInteger")), 2))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t50], "DSPaymentInfo", C, false)), "FieldByName", ["say"])), "AsInteger")), 0))) {
        await $.stmt((await $.wcall([$t50], "showmessage", ["Diqqət! Bu müqavilənin Ödəmə planı hissələrlə ödəniş olduğundan ödəmə planı yığılmalıdır!"], C)));
        return L0.result;
      }
    }
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "asInteger")), 2)))) {
    await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSMedEmploes")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSMedEmploes")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
    await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSMedEmploes")), "Open", []);
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSMedEmploes")), "RecordCount")), 0)))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu tibbi sığorta müqaviləsi üçün Sığortalanacaq işçilərin siyahısı yığılmayıb!"])));
      return L0.result;
    }
  }
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DScontractcommit")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DScontractcommit")), "SetVariable", ["pid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DScontractcommit")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DScontractcommit")), "FieldByName", ["valute_id"])), "AsInteger")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSOperkurs")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSOperkurs")), "SetVariable", ["pval_kod", (await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DScontractcommit")), "FieldByName", ["valute_id"])), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSOperkurs")), "SetVariable", ["pdat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DScontractcommit")), "FieldByName", ["ins_date"])), "AsDateTime"))])));
    await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSOperkurs")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSOperkurs")), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət !Sistemdə bu müqavilənin  muqavilə tarixinə və valyutasına uyğun kurs movcudd deyil."])));
      return L0.result;
    }
  }
  {
    const $t51 = (await $.v(C, "XDBGrid1"));
    const $t52 = (await $.mv((await $.wv([$t51], "DataSource", C, false)), "DataSet"));
    await $.wset([$t51, $t52], "selectrow", (await $.mv((await $.wv([$t51, $t52], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    { const $t53 = $.sub((await $.wv([$t51, $t52], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t51, $t52], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t54 = true;
      for (;;) {
        if (!$t54) { await $.wset([$t51, $t52], "i", $.succ((await $.wv([$t51, $t52], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t54 = false;
        if (!($.ord((await $.wv([$t51, $t52], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t53))) break;
        await $.stmt((await $.wcall([$t51, $t52], "GotoBookmark", [(await $.wcall([$t51, $t52], "Pointer", [(await $.idx((await $.wv([$t51, $t52], "SelectedRows", C, false)), [(await $.wv([$t51, $t52], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        {
          const $t55 = (await $.wv([$t51, $t52], "BlankDM", C, false));
          const $t56 = (await $.wv([$t51, $t52, $t55], "OPCOMMON", C, false));
          await $.wset([$t51, $t52, $t55, $t56], "a", (await $.wcall([$t51, $t52, $t55, $t56], "CallIntegerFunction", ["get_acc_balanc_hesab", [21]], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t51, $t52, $t55, $t56], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 0))) {
            await $.stmt((await $.wcall([$t51, $t52, $t55, $t56], "showmessage", ["Diqqət ! Bu müqavilə tipində avtomatik hesabların açılası üçün balans hesabları sazlanmayıb!."], C)));
            return L0.result;
          }
        }
        {
          const $t57 = (await $.wv([$t51, $t52], "BlankDM", C, false));
          const $t58 = (await $.wv([$t51, $t52, $t57], "OPCOMMON", C, false));
          await $.wset([$t51, $t52, $t57, $t58], "c_acc", (await $.wcall([$t51, $t52, $t57, $t58], "CallIntegerFunction", ["get_acc_id", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t51, $t52, $t57, $t58], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["idc"])), "AsInteger"))]], C)), { get: async () => L0["c_acc"], set: async (v) => { L0["c_acc"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t51, $t52, $t57, $t58], "c_acc", { get: async () => L0["c_acc"], set: async (v) => { L0["c_acc"] = v; }, local: true }, false)), 0))) {
            await $.stmt((await $.wcall([$t51, $t52, $t57, $t58], "CallProcedure", ["account_open", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t51, $t52, $t57, $t58], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["idc"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t51, $t52, $t57, $t58], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["filial"])), "AsInteger"))]], C)));
          }
        }
        if ($.truthy($.eq((await $.mcall((await $.mv((await $.wv([$t51, $t52], "BlankDM", C, false)), "OPCOMMON")), "CallIntegerFunction", ["commitcontract", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t51, $t52], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["idc"])), "AsInteger"))]])), 1))) {
          await $.mcall((await $.mv((await $.wv([$t51, $t52], "BlankDM", C, false)), "DSFullContarct")), "Refresh", []);
          await $.mset((await $.wv([$t51, $t52], "ToolButton3", C, false)), "Enabled", (await $.wv([$t51, $t52], "false", C, false)));
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t51, $t52], "MessageDlg", [$.add((await $.wcall([$t51, $t52], "IntToStr", [(await $.mv((await $.wv([$t51, $t52], "SelectedRows", C, false)), "Count"))], C)), "   Müqavilə təsdiq olundu."), (await $.wv([$t51, $t52], "mtInformation", C, false)), [(await $.wv([$t51, $t52], "mbok", C, false))], 0], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "filterstatus", 0);
  await $.mset((await $.v(C, "XFCheckBox7")), "Checked", false);
  await $.set(C, "BlankDM", (await $.mcall((await $.v(C, "TBlankDM")), "Create", [Self])));
  await $.set(C, "FilterStr1", (await $.mv((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "SQL")), "Text")));
  await $.mset((await $.v(C, "Memo2")), "Text", $.add($.add($.add(" GROUP BY ic.id,ic.rowid,ic.commit_date,ii.name,ic.bnf_type,av.val_name,ic.policy_num,ic.close_prefix,ics.surname,ics.name,ics.fathername,cust.name,cust.id,ia.name,ia.surname,ia.fathername,ic.tariff,ic.filial,ic.franshiz,ins_date,ic.begin_date,", "ic.end_date,ic.state,ic.type_id,ii.mainformguid,ii.changeguid,ic.loanacc_id,ic.curracc_id,ic.agent_id,ic.kli_id,ii.suggestionguid,ii.policyguid,ii.mainformname,im.id,im.INSUREDMARK,im.INSUREDMODEL,im.INSUREDSTATENUM,im.INSUREDCOLOR,im.INSUREDOUTPUTYEAR,"), "im.INSUREDENGINENUM,im.UNDERFRAMENUM,ics.mobilephone,em.locationobj,"), "im.INSUREDBANNUM,im.color_id,im.model_id,im.marka_id,ic.inssumm,ict.stage_tesdiq_dat,ictd.terminted_amount,cust.cust_type,ic.userinsert,ics.dateofbirth,em.cost,mk.drivecost,ic.insured,ics.address"));
  await $.mset((await $.v(C, "RGContract")), "ItemIndex", 0);
  await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "XFRadioGroup2")), "ItemIndex", 0);
  await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.set(C, "Xcommangrid", (await $.v(C, "XDBGrid1")));
  await $.set(C, "FrmFilterBlankMain", (await $.mcall((await $.v(C, "TFrmFilterBlankMain")), "Create", [Self])));
  await $.set(C, "commandataset", (await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Bildiris1Click", async function Bildiris1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": '', "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\bildiris.docx");
  L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
  await $.mset(L0["wrdapp"], "Visible", true);
  L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
  L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "policy_num"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 14);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["polis"])), "AsString"))])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "begin_date"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 14);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["begin_date"])), "AsString"))])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "CUSTNAME"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 11);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CUSTNAME"])), "AsString"))])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "adress"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 11);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  L0["str"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "AsString"));
  if ($.truthy($.gt((await $.call(C, "Length", [L0["str"]])), 25))) {
    L0["str"] = $.add($.add((await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "AsString")), 0, 25])), "\r\n"), (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "AsString")), 25, 250])));
  }
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [L0["str"]])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "CUSTNAME2"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 14);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CUSTNAME2"])), "AsString"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "BildirisHuquqi1Click", async function BildirisHuquqi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": '', "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\bildirishuq.docx");
  L0["wrdapp"] = (await $.call(C, "CreateOleObject", ["Word.Application"]));
  await $.mset(L0["wrdapp"], "Visible", true);
  L0["wrddatadoc"] = (await $.mcall((await $.mv(L0["wrdapp"], "Documents")), "Open", [L0["filename"]]));
  L0["wrdselection"] = (await $.mv(L0["wrdapp"], "Selection"));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "policy_num"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 14);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["polis"])), "AsString"))])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "begin_date"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 14);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["begin_date"])), "AsString"))])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "CUSTNAME"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 11);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CUSTNAME"])), "AsString"))])));
  await $.stmt((await $.mcall(L0["wrdselection"], "GoTo", [(-(1)), (await $.v(C, "unAssigned")), (await $.v(C, "unAssigned")), "adress"])));
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Size", 11);
  await $.mset((await $.mv(L0["wrdselection"], "Font")), "Bold", true);
  L0["str"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "AsString"));
  if ($.truthy($.gt((await $.call(C, "Length", [L0["str"]])), 25))) {
    L0["str"] = $.add($.add((await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "AsString")), 0, 25])), "\r\n"), (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["adress"])), "AsString")), 25, 250])));
  }
  await $.stmt((await $.mcall(L0["wrdselection"], "TypeText", [L0["str"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Bonushesabat1Click", async function Bonushesabat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "TForm3")), "Create", [Self])));
  await $.mcall((await $.v(C, "Form3")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RGContract")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "CallChangeForm", async function CallChangeForm(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: undefined, "callerguid": null};
  await $.fixArgs(L0, ["params"]);
  {
    const $t59 = (await $.v(C, "BlankMain"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t59], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["CHANGEGUID"])), "AsString")), ""))) {
      throw $.raise((await $.mcall((await $.wv([$t59], "TGuidError", C, false)), "Create", ["Guid is empty w"])));
    }
    await $.wset([$t59], "CallerGuid", (await $.wcall([$t59], "StringToGuid", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t59], "BlankDM", C, false)), "DSFullContarct")), "FieldByName", ["CHANGEGUID"])), "AsString"))], C)), { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true });
    if ($.truthy($.eq((await $.mcall((await $.wv([$t59], "pmcCallActiveX", C, false)), "ShowModal", [(await $.wv([$t59], "CallerGuid", { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true }, false)), (await $.wv([$t59], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))])), (await $.wv([$t59], "mrOk", C, false))))) {
      await $.stmt((await $.wcall([$t59], "RefreshContractRec", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TStringList"]});
  U.method("TBlankMain", "RefreshContractRec", async function RefreshContractRec(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t60 = (await $.mv((await $.v(C, "BlankDM")), "DSFullContarct"));
    await $.stmt($.wcall([$t60], "Refresh", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBlankMain", "RGContractClick", async function RGContractClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": '', "p_name": '', "p_cust_id": '', "p_agent_id": '', "p_marka": '', "p_avtotype": '', "p_fransiza": '', "p_type": '', "p_ins_date": '', "p_begin_date": '', "p_end_date": '', "p_terminate_date": '', "pstate": 0, "p_reins": '', "bankenar": '', "filterstr": ''};
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
  L0["insdatafilter"] = "ic.ins_date";
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
  L0["p_type"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox8")), "Checked")), L0["nametype"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox5")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_name"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), L0["namefilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_cust_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), L0["custfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox6")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["p_agent_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), L0["agent_idfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox2")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox5")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox2")), "ItemIndex")), 0))) {
      L0["p_reins"] = " ic.id in  (select cid from ins_reinsurance)";
    } else {
      L0["p_reins"] = " ic.id in  ((select id from ins_contracts minus select id from ins_contracts where id in  (select cid from ins_reinsurance)))";
    }
  } else {
    L0["p_reins"] = "";
  }
  if ($.truthy($.eq(L0["status"], ""))) {
    L0["filterstr"] = "ic.close_prefix in(0,1)";
  } else {
    L0["filterstr"] = L0["status"];
  }
  if ($.truthy((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")))) {
    L0["bankenar"] = "bnf_type=1";
  } else {
    L0["bankenar"] = "bnf_type in(2,3,4,5,6,7,8,9,10,11,12,13,14,15,21,22,41,42,43,44,45,46,47,48)";
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox10")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["bankenar"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["bankenar"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox8")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_type"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_type"]);
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
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox5")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_reins"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_reins"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 3))) {
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
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 2))) {
      L0["p_terminate_date"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add("  ic.id in (select cid from ins_contract_terminated where stage_tesdiq_dat", " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'"), ")");
      if ($.truthy($.eq(L0["filterstr"], ""))) {
        L0["filterstr"] = L0["p_terminate_date"];
      } else {
        L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_terminate_date"]);
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 0))) {
      L0["p_ins_date"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["insdatafilter"], " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'");
      if ($.truthy($.eq(L0["filterstr"], ""))) {
        L0["filterstr"] = L0["p_ins_date"];
      } else {
        L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_ins_date"]);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox4")), "Checked")), true))) {
    { const $t61 = (await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"));
      if ($.eq($t61, 0)) {
        L0["pstate"] = 6;
      }
      else if ($.eq($t61, 1)) {
        L0["pstate"] = 0;
      }
      else if ($.eq($t61, 2)) {
        L0["pstate"] = 7;
      }
      else if ($.eq($t61, 3)) {
        L0["pstate"] = 8;
      }
    }
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = $.add(" and ic.state=", (await $.call(C, "inttostr", [L0["pstate"]])));
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " and ic.state="), (await $.call(C, "inttostr", [L0["pstate"]])));
    }
  }
  await $.mset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), "Text", $.add($.add($.add((await $.v(C, "FilterStr1")), L0["booleanprefix"]), L0["filterstr"]), (await $.mv((await $.v(C, "Memo2")), "Text"))));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox7")), "Checked")), true))) {
    { const $t62 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t62 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t62); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox8")), "Checked")), true))) {
    { const $t63 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t63 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t63); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), true))) {
    { const $t64 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t64 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t64); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    { const $t65 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t65 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t65); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")), true))) {
    { const $t66 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t66 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t66); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox4")), "Checked")), true))) {
    { const $t67 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t67 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t67); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox5")), "Checked")), true))) {
    { const $t68 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], ""); if ($t68 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t68); } }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox11")), "Checked")), true))) {
    { const $t69 = await $.iset((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), [19], "and ic.state=6 and ic.end_date>=sbop.get_date"); if ($t69 !== undefined) { await $.mset((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql", $t69); } }
  }
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "sql")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalniz Təsdiq olunmuş muqavilə inkar statusuna keçrilə bilər!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "FieldByName", ["commit_date"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! System tarixindən fərqli tarixdə təsdiq olunmuş müqaviləni \"İnkar\" etmək olmaz!"])));
    return L0.result;
  }
  {
    const $t70 = (await $.v(C, "BlankDM"));
    const $t71 = (await $.wv([$t70], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t70, $t71], "CallProcedure", ["checkadvancedobjectaccess", ["REFUSALINSCONTRACTS"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSpaymentcommit")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSpaymentcommit")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSpaymentcommit")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSpaymentcommit")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    {
      const $t72 = (await $.v(C, "BlankDM"));
      const $t73 = (await $.wv([$t72], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t72, $t73], "CallProcedure", ["checkadvancedobjectaccess", ["REFUS_COMMIT_CONTRACTS"]], C)));
    }
  }
  {
    const $t74 = (await $.v(C, "BlankDM"));
    const $t75 = (await $.wv([$t74], "OPCOMMON", C, false));
    if ($.truthy($.eq((await $.mcall((await $.wv([$t74, $t75], "OPCOMMON", C, false)), "CallIntegerFunction", ["cancelcontract", [(await $.mv((await $.mcall((await $.wv([$t74, $t75], "DSFullContarct", C, false)), "fieldbyname", ["IDC"])), "asInteger"))]])), 1))) {
      await $.stmt((await $.wcall([$t74, $t75], "MessageDlg", ["Əməliyyatlar pozuldu", (await $.wv([$t74, $t75], "mtInformation", C, false)), [(await $.wv([$t74, $t75], "mbok", C, false))], 0], C)));
      await $.mcall((await $.wv([$t74, $t75], "DSFullContarct", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t76 = (await $.v(C, "BlankDM"));
    const $t77 = (await $.wv([$t76], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t76, $t77], "CallProcedure", ["checkadvancedobjectaccess", ["CLOSEINSCONTRACTS"]], C)));
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş siğorta ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    try {
      {
        const $t79 = (await $.v(C, "BlankDM"));
        const $t80 = (await $.wv([$t79], "OPCOMMON", C, false));
        const $t81 = (await $.wv([$t79, $t80], "ODSContracts", C, false));
        if ($.truthy((await $.mcall((await $.mv((await $.wv([$t79, $t80, $t81], "BlankDM", C, false)), "OPCOMMON")), "callbooleanfunction", ["del_ins", [(await $.mv((await $.wv([$t79, $t80, $t81], "DSFullContarctIDC", C, false)), "Value")), (await $.mv((await $.wv([$t79, $t80, $t81], "DSFullContarctTYPE_ID", C, false)), "value"))]])))) {
          await $.mcall((await $.wv([$t79, $t80, $t81], "DSFullContarct", C, false)), "Refresh", []);
        }
      }
    } catch ($t78) {
      $.rethrowControl($t78);
      if ($.excIs($t78, "EOracleError")) {
        L0["e"] = $.exc($t78);
        { const $t82 = (await $.mv(L0["e"], "ErrorCode"));
          if ($.eq($t82, 20002)) {
            if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş müqaviləyə uyğun hesablar ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
              await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ODSAccount")), "close", []);
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ODSAccount")), "SetVariable", ["ownid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["IDC"])), "AsInteger"))])));
              await $.mcall((await $.mv((await $.v(C, "BlankDM")), "ODSAccount")), "Open", []);
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "OPCOMMON")), "CallProcedure", ["close_acc", [(await $.mv((await $.mv((await $.v(C, "BlankDM")), "ODSAccountID")), "value"))]])));
            }
          }
          else if ($.eq($t82, 20001)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Aslı hesablarda qalıq sıfırdan fərqlidir!"])));
          }
        }
      }
      else { throw $t78; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFGroupBox1")), "Visible", $.not((await $.mv((await $.v(C, "XFGroupBox1")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XDBGrid1CellClick", async function XDBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["column"]);
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CLOSE_PREFIX"])), "AsInteger")));
  {
    const $t83 = (await $.mv((await $.v(C, "BlankDM")), "ODSContracts"));
    await $.mcall((await $.mv((await $.wv([$t83], "BlankDM", C, false)), "DSPaymentSettingInfo")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t83], "BlankDM", C, false)), "DSPaymentSettingInfo")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t83], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.wv([$t83], "BlankDM", C, false)), "DSPaymentSettingInfo")), "Open", []);
    await $.wset([$t83], "a", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t83], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t83], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 0))) {
      await $.mset((await $.wv([$t83], "ToolButton3", C, false)), "Enabled", (await $.wv([$t83], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t83], "ToolButton3", C, false)), "Enabled", (await $.wv([$t83], "false", C, false)));
    }
    if ($.truthy(($.in_((await $.mv((await $.mcall((await $.mv((await $.wv([$t83], "BlankDM", C, false)), "DSPaymentSettingInfo")), "FieldByName", ["say"])), "AsInteger")), [0])))) {
      await $.mset((await $.wv([$t83], "ToolButton3", C, false)), "Enabled", (await $.wv([$t83], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TBlankMain", "XDBGrid1ColumnScroll", async function XDBGrid1ColumnScroll(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "leftindex": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "leftindex"]);
  {
    const $t84 = L0["sender"];
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t84], "DataSource", C, false)), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 0))) {
      await $.mset((await $.wv([$t84], "ToolButton3", C, false)), "Enabled", (await $.wv([$t84], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "LeftIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer"]});
  U.method("TBlankMain", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t85 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t85], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t85], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t85], "DataSource", C, false)), "DataSet")), "FieldByName", ["state"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy((await $.and_(($.eq((await $.wv([$t85], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t85], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.mset((await $.mv((await $.wv([$t85], "Canvas", C, false)), "brush")), "Style", (await $.wv([$t85], "bsSolid", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t85], "Canvas", C, false)), "FillRect", [(await $.wv([$t85], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
        if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t85], "DataSource", C, false)), "DataSet")), "FieldByName", ["C_FULL_CLAIM"])), "AsInteger")), 0))) {
          await $.stmt((await $.mcall((await $.wv([$t85], "ImageList2", C, false)), "Draw", [(await $.wv([$t85], "Canvas", C, false)), (await $.mv((await $.wv([$t85], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t85], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 10, (await $.wv([$t85], "True", C, false))])));
        } else {
          await $.stmt((await $.mcall((await $.wv([$t85], "ImageList2", C, false)), "Draw", [(await $.wv([$t85], "Canvas", C, false)), (await $.mv((await $.wv([$t85], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t85], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t85], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t85], "True", C, false))])));
        }
      } else {
        await $.stmt((await $.wcall([$t85], "DefaultDrawColumnCell", [(await $.wv([$t85], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t85], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t85], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t85], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TBlankMain", "XDBGrid1KeyUp", async function XDBGrid1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t86 = (await $.mv((await $.v(C, "BlankDM")), "ODSContracts"));
    await $.mcall((await $.mv((await $.wv([$t86], "BlankDM", C, false)), "DSPaymentSettingInfo")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t86], "BlankDM", C, false)), "DSPaymentSettingInfo")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t86], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.wv([$t86], "BlankDM", C, false)), "DSPaymentSettingInfo")), "Open", []);
    await $.wset([$t86], "a", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t86], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t86], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 0))) {
      await $.mset((await $.wv([$t86], "ToolButton3", C, false)), "Enabled", (await $.wv([$t86], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t86], "ToolButton3", C, false)), "Enabled", (await $.wv([$t86], "false", C, false)));
    }
    if ($.truthy(($.in_((await $.mv((await $.mcall((await $.mv((await $.wv([$t86], "BlankDM", C, false)), "DSPaymentSettingInfo")), "FieldByName", ["say"])), "AsInteger")), [0])))) {
      await $.mset((await $.wv([$t86], "ToolButton3", C, false)), "Enabled", (await $.wv([$t86], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TBlankMain", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t87 = (await $.v(C, "BlankDM"));
    const $t88 = (await $.wv([$t87], "DSFullContarct", C, false));
    try {
      await $.wset([$t87, $t88], "SortPosition", (await $.mcall((await $.wv([$t87, $t88], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t87, $t88], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t87, $t88], "Refresh", [], C));
    } finally {
      { const $t89 = await $.iset((await $.wv([$t87, $t88], "SQL", C, false)), [(await $.wv([$t87, $t88], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t87, $t88], "EmptyStr", C, false))); if ($t89 !== undefined) { await $.wset([$t87, $t88], "SQL", $t89, C); } }
      await $.mset((await $.wv([$t87, $t88], "Screen", C, false)), "Cursor", (await $.wv([$t87, $t88], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TBlankMain", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RGContract")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox11Click", async function XFCheckBox11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFCheckBox7")), "Checked", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox1Click", async function XFCheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox2Click", async function XFCheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox3Click", async function XFCheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox7Click", async function XFCheckBox7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFCheckBox11")), "Checked", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox8Click", async function XFCheckBox8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox8")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XFCheckBox9Click", async function XFCheckBox9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Xitam1Click", async function Xitam1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t90 = (await $.v(C, "BlankDM"));
    const $t91 = (await $.wv([$t90], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t90, $t91], "CallProcedure", ["checkadvancedobjectaccess", ["TERMINATEDINS_CONTRACT"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 8))) {
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 6))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Yalnız Təsdiq statusunda olan muqaviləyə xitam vermək olar."])));
      return L0.result;
    }
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsContracterminated.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "XitamBarderosu1Click", async function XitamBarderosu1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t92 = (await $.v(C, "BlankDM"));
    const $t93 = (await $.wv([$t92], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t92, $t93], "CallProcedure", ["checkadvancedobjectaccess", ["SEEBARDERO_TERMINATE"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSReins")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təkrarsığortaya göndərilmiş müqavilə üçün Xitam barderosu yığmaq olar!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 8))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız xitam statusunda olan müqavilə üçün Xitam barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.set(C, "Bordero_type", "xitam");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["reinsurance.bpl", "terminate"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Yenilm1Click", async function Yenilm1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "BlankDM")), "DSFullContarct")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlankMain", "Zrrlr1Click", async function Zrrlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    {
      const $t94 = (await $.v(C, "BlankDM"));
      const $t95 = (await $.wv([$t94], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t94, $t95], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSKASKO"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 1))) {
    {
      const $t96 = (await $.v(C, "BlankDM"));
      const $t97 = (await $.wv([$t96], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t96, $t97], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSFQ"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 13))) {
    {
      const $t98 = (await $.v(C, "BlankDM"));
      const $t99 = (await $.wv([$t98], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t98, $t99], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSMES"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 8))) {
    {
      const $t100 = (await $.v(C, "BlankDM"));
      const $t101 = (await $.wv([$t100], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t100, $t101], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSYUK"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 3))) {
    {
      const $t102 = (await $.v(C, "BlankDM"));
      const $t103 = (await $.wv([$t102], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t102, $t103], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSEMLAK"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 21))) {
    {
      const $t104 = (await $.v(C, "BlankDM"));
      const $t105 = (await $.wv([$t104], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t104, $t105], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSSEYAHET"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 2))) {
    {
      const $t106 = (await $.v(C, "BlankDM"));
      const $t107 = (await $.wv([$t106], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t106, $t107], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSTIBB"]], C)));
    }
  }
  await $.set(C, "commoncid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["idc"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["loss.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

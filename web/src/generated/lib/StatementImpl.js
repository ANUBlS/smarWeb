// Generated from StatementImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("StatementImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "StatementNew_TLB", "StdVcl", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "ImgList", "ComCtrls", "ToolWin", "Menus", "QRExport", "Buttons", "DBCtrls", "DBViewComboBox", "SBPlgAx50_TLB", "ComObj", "ComServ", "StatementDataModule", "StatementReportUnit", "SBCore", "AccGetReport"]);
  const C = [U];
  U.defClass("TStatementX", "TActiveForm", {"savedialog1": {"name": "SaveDialog1", "type": "TSaveDialog"}, "qrtextfilter1": {"name": "QRTextFilter1", "type": "TQRTextFilter"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "editacc_no": {"name": "EditAcc_no", "type": "TEdit"}, "editclientid": {"name": "EditClientID", "type": "TEdit"}, "bal_spredit": {"name": "Bal_sprEdit", "type": "TEdit"}, "printmode_rg": {"name": "PrintMode_RG", "type": "TRadioGroup"}, "comboboxbalance": {"name": "ComboBoxBalance", "type": "TComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "begindtpicker": {"name": "BeginDTPicker", "type": "TDateTimePicker"}, "enddtpicker": {"name": "EndDTPicker", "type": "TDateTimePicker"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dblcbfilial": {"name": "DBLCBfilial", "type": "TDBLookupComboBox"}, "dblcbavalute": {"name": "DBLCBavalute", "type": "TDBLookupComboBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "dblcbuser": {"name": "DBLCBUser", "type": "TDBLookupComboBox"}, "cbuser": {"name": "CBUser", "type": "TCheckBox"}, "comboboxprint": {"name": "ComboBoxPrint", "type": "TComboBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "cbturnover": {"name": "CBTurnOver", "type": "TCheckBox"}, "cbratediff": {"name": "CBRateDiff", "type": "TCheckBox"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "fevents": {"name": "FEvents", "type": "IStatementNewFormXEvents"}}, {});
  U.init(async () => {
    U.var_("D1", 0, "TDateTime");
    U.var_("D2", 0, "TDateTime");
    U.var_("CurrentDate", 0, "TDateTime");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
    U.var_("StatementX", null, "TStatementX");
  });
  U.method("TStatementX", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 0;
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "UpdateStr", async function UpdateStr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"inpstr": $.copyArg(p0), result: '', "tempstring": '', "endstring": '', "flag": 0, "tempcount": 0, "i": 0, "count": 0, "beg_index": 0, "k": 0};
  await $.fixArgs(L0, ["inpstr"]);
  L0["commas"] = "'";
  L0["comma"] = ",";
  L0["result"] = L0["inpstr"];
  if ($.truthy($.ne(L0["result"], ""))) {
    L0["tempstring"] = "";
    L0["endstring"] = "";
    L0["beg_index"] = 1;
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    L0["tempcount"] = 0;
    L0["flag"] = 1;
    { const $t1 = L0["k"];
      L0["i"] = 1;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
        $t2 = false;
        if (!($.ord(L0["i"]) <= $.ord($t1))) break;
        if ($.truthy($.ne((await $.idx(L0["result"], [L0["i"]])), " "))) {
          L0["tempstring"] = $.add(L0["tempstring"], (await $.idx(L0["result"], [L0["i"]])));
        }
        await $.tick();
      }
    }
    L0["inpstr"] = L0["tempstring"];
    L0["result"] = L0["inpstr"];
    L0["tempstring"] = "";
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    { const $t3 = L0["k"];
      L0["i"] = 1;
      let $t4 = true;
      for (;;) {
        if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
        $t4 = false;
        if (!($.ord(L0["i"]) <= $.ord($t3))) break;
        if ($.truthy($.eq((await $.idx(L0["result"], [L0["i"]])), ","))) {
          L0["count"] = $.sub(($.sub(L0["i"], 1)), L0["tempcount"]);
          L0["result"] = (await $.call(C, "Copy", [L0["result"], L0["beg_index"], L0["count"]]));
          L0["tempstring"] = $.add($.add($.add($.add(L0["tempstring"], L0["result"]), L0["commas"]), L0["comma"]), L0["commas"]);
          L0["result"] = L0["inpstr"];
          L0["beg_index"] = $.add(L0["i"], 1);
          L0["tempcount"] = L0["i"];
          L0["flag"] = 0;
        }
        if ($.truthy($.eq(L0["flag"], 1))) {
          L0["endstring"] = $.add(L0["endstring"], (await $.idx(L0["result"], [L0["i"]])));
        } else {
          L0["endstring"] = "";
          L0["flag"] = 1;
        }
        await $.tick();
      }
    }
    L0["result"] = $.add($.add($.add(L0["commas"], L0["tempstring"]), L0["endstring"]), L0["commas"]);
  } else {
    L0["result"] = "' '";
  }
  return L0.result;
}, {"params": ["InpStr"], "kind": "function", "ptypes": ["String"]});
  U.method("TStatementX", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TStatementX", "PrepareReportTable", async function PrepareReportTable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "a_name": '', "v_editclientid": '', "v_editacc_no": '', "v_bal_spr": '', "v_editval": 0, "v_speciesbalaccount": 0, "d1": 0, "d2": 0, "v_user": 0, "v_filial": 0, "turnyesno": 0, "ratedif": 0};
  L0["v_user"] = (await $.mv((await $.v(C, "dblcbUser")), "KeyValue"));
  L0["v_filial"] = (await $.mv((await $.v(C, "dblcbfilial")), "KeyValue"));
  L0["v_editval"] = (await $.mv((await $.v(C, "DBLCBavalute")), "KeyValue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBoxBalance")), "ItemIndex")), (-(1))))) {
    L0["v_speciesbalaccount"] = 1;
  } else {
    L0["v_speciesbalaccount"] = $.add((await $.mv((await $.v(C, "ComboBoxBalance")), "ItemIndex")), 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditClientID")), "Text")), ""))) {
    L0["v_editclientid"] = "-1";
  } else {
    L0["v_editclientid"] = (await $.mv((await $.v(C, "EditClientID")), "Text"));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditAcc_no")), "Text")), ""))) {
    L0["v_editacc_no"] = "-1";
  } else {
    L0["v_editacc_no"] = (await $.mv((await $.v(C, "EditAcc_no")), "Text"));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bal_sprEdit")), "Text")), ""))) {
    L0["v_bal_spr"] = "-1";
  } else {
    L0["v_bal_spr"] = (await $.call(C, "UpdateStr", [(await $.mv((await $.v(C, "Bal_sprEdit")), "Text"))]));
  }
  L0["d1"] = (await $.call(C, "Int", [(await $.mv((await $.v(C, "BeginDTPicker")), "DateTime"))]));
  L0["d2"] = (await $.call(C, "Int", [(await $.mv((await $.v(C, "EndDTPicker")), "DateTime"))]));
  L0["turnyesno"] = (await $.mv((await $.v(C, "CBTurnOver")), "Tag"));
  L0["ratedif"] = (await $.mv((await $.v(C, "CBRateDiff")), "Tag"));
  {
    const $t5 = (await $.mv((await $.v(C, "StatementDataModNew")), "P_Extraction_OP"));
    await $.stmt((await $.wcall([$t5], "CallProcedure", ["getextraction", [(await $.wv([$t5], "v_user", { get: async () => L0["v_user"], set: async (v) => { L0["v_user"] = v; }, local: true }, false)), (await $.wv([$t5], "v_filial", { get: async () => L0["v_filial"], set: async (v) => { L0["v_filial"] = v; }, local: true }, false)), (await $.wv([$t5], "v_SpeciesBalAccount", { get: async () => L0["v_speciesbalaccount"], set: async (v) => { L0["v_speciesbalaccount"] = v; }, local: true }, false)), (await $.wv([$t5], "v_EditVal", { get: async () => L0["v_editval"], set: async (v) => { L0["v_editval"] = v; }, local: true }, false)), (await $.wv([$t5], "v_EditClientID", { get: async () => L0["v_editclientid"], set: async (v) => { L0["v_editclientid"] = v; }, local: true }, false)), (await $.wcall([$t5], "UpdateStr", [(await $.wv([$t5], "v_EditAcc_no", { get: async () => L0["v_editacc_no"], set: async (v) => { L0["v_editacc_no"] = v; }, local: true }, false))], C)), (await $.wv([$t5], "v_Bal_spr", { get: async () => L0["v_bal_spr"], set: async (v) => { L0["v_bal_spr"] = v; }, local: true }, false)), (await $.wv([$t5], "d1", { get: async () => L0["d1"], set: async (v) => { L0["d1"] = v; }, local: true }, false)), (await $.wv([$t5], "d2", { get: async () => L0["d2"], set: async (v) => { L0["d2"] = v; }, local: true }, false)), (await $.wv([$t5], "RateDif", { get: async () => L0["ratedif"], set: async (v) => { L0["ratedif"] = v; }, local: true }, false)), (await $.wv([$t5], "TurnYesNo", { get: async () => L0["turnyesno"], set: async (v) => { L0["turnyesno"] = v; }, local: true }, false))]], C)));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "StatementDataModNew")), "P_Extraction_OP"));
    await $.wset([$t6], "a_name", (await $.wcall([$t6], "CallStringFunction", ["GetUserName", []], C)), { get: async () => L0["a_name"], set: async (v) => { L0["a_name"] = v; }, local: true });
  }
  {
    const $t7 = (await $.mv((await $.v(C, "StatementDataModNew")), "Extraction_ODSt"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    {
      const $t8 = (await $.wv([$t7], "SQL", C, false));
      await $.stmt($.wcall([$t7, $t8], "Clear", [], C));
      await $.stmt((await $.wcall([$t7, $t8], "Add", ["select * from SMART.EXTRACTION order by accountnumber "], C)));
    }
    await $.wset([$t7], "Active", (await $.wv([$t7], "true", C, false)), C);
  }
  {
    const $t9 = (await $.mv((await $.v(C, "StatementDataModNew")), "ExtractionTrans_ODSt"));
    await $.stmt($.wcall([$t9], "CloseAll", [], C));
    {
      const $t10 = (await $.wv([$t9], "SQL", C, false));
      await $.stmt($.wcall([$t9, $t10], "Clear", [], C));
      await $.stmt((await $.wcall([$t9, $t10], "Add", ["select * from SMART.EXTRACTIONTRANS"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "Add", [" where (OwnAccountID = :OwnAccountID) "], C)));
      await $.stmt((await $.wcall([$t9, $t10], "Add", [" order by dat, debit, kredit"], C)));
    }
    await $.wset([$t9], "Active", (await $.wv([$t9], "true", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementX", "PrepareReport", async function PrepareReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  { const $t11 = (await $.mv((await $.v(C, "PrintMode_RG")), "ItemIndex"));
    if ($.eq($t11, 0)) {
      await $.mset((await $.mv((await $.v(C, "StatementReport")), "DetailBand1")), "ForceNewPage", false);
    }
    else if ($.eq($t11, 1)) {
      await $.mset((await $.mv((await $.v(C, "StatementReport")), "DetailBand1")), "ForceNewPage", true);
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "BeginDTPicker")), "DateTime")), (await $.mv((await $.v(C, "EndDTPicker")), "DateTime"))))) {
    await $.mset((await $.mv((await $.v(C, "StatementReport")), "QRLabel7")), "Caption", (await $.call(C, "DateToStr", [(await $.mv((await $.v(C, "EndDTPicker")), "Date"))])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementX", "PostIntoFile", async function PostIntoFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t12 = (await $.v(C, "SaveDialog1"));
    if ($.truthy((await $.wv([$t12], "Execute", C, false)))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t12], "StatementReport", C, false)), "QuickRep1")), "ExportToFilter", [(await $.mcall((await $.wv([$t12], "TQRAsciiExportFilter", C, false)), "Create", [(await $.wv([$t12], "FileName", C, false))]))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementX", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TStatementX", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TStatementX", "Initialize", null, arguments);
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
  U.method("TStatementX", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TStatementX", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TStatementX", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TStatementX", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TStatementX", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TStatementX", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TStatementX", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TStatementX", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TStatementX", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TStatementX", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TStatementX", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementX", "miPostClick", async function miPostClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "PrepareReportTable", []));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "StatementReport"))]))))) {
    await $.set(C, "StatementReport", (await $.mcall((await $.v(C, "TStatementReport")), "Create", [null])));
  }
  await $.stmt($.call(C, "PrepareReport", []));
  await $.stmt($.call(C, "PostIntoFile", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "StatementX", Self);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "StatementDataModNew"))]))))) {
    await $.set(C, "StatementDataModNew", (await $.mcall((await $.v(C, "TStatementDataModNew")), "Create", [Self])));
  }
  await $.mset((await $.v(C, "ComboBoxBalance")), "ItemIndex", 0);
  await $.mset((await $.v(C, "ComboBoxPrint")), "ItemIndex", 0);
  await $.mset((await $.v(C, "BeginDTPicker")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.mset((await $.v(C, "EndDTPicker")), "DateTime", (await $.mv((await $.v(C, "BeginDTPicker")), "DateTime")));
  await $.mset((await $.v(C, "dblcbuser")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "miPreviewClick", async function miPreviewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "PrepareReportTable", []));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "StatementReport"))]))))) {
    await $.set(C, "StatementReport", (await $.mcall((await $.v(C, "TStatementReport")), "Create", [null])));
  }
  await $.stmt($.call(C, "PrepareReport", []));
  await $.mcall((await $.mv((await $.v(C, "StatementReport")), "QuickRep1")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "miPrintClick", async function miPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "PrepareReportTable", []));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "StatementReport"))]))))) {
    await $.set(C, "StatementReport", (await $.mcall((await $.v(C, "TStatementReport")), "Create", [null])));
  }
  await $.stmt($.call(C, "PrepareReport", []));
  await $.mcall((await $.mv((await $.v(C, "StatementReport")), "QuickRep1")), "Print", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "D1", (await $.mv((await $.v(C, "BeginDTPicker")), "Date")));
  await $.set(C, "D2", (await $.mv((await $.v(C, "EndDTPicker")), "Date")));
  { const $t13 = (await $.mv((await $.v(C, "ComboBoxPrint")), "ItemIndex"));
    if ($.eq($t13, 0)) {
      await $.stmt((await $.call(C, "miPreviewClick", [null])));
    }
    else if ($.eq($t13, 1)) {
      await $.stmt((await $.call(C, "miPrintClick", [null])));
    }
    else if ($.eq($t13, 2)) {
      await $.stmt((await $.call(C, "miPostClick", [null])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "IStatementX_Get_Color", async function IStatementX_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "IStatementX_Get_Font", async function IStatementX_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementX", "IStatementX__Set_Font", async function IStatementX__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TStatementX", "IStatementX_Set_Color", async function IStatementX_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TStatementX", "IStatementX_Set_Font", async function IStatementX_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TStatementX", "RBTurnOverFilterClick", async function RBTurnOverFilterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (L0["sender"]);
    if ($.truthy((await $.wv([$t14], "Checked", C, false)))) {
      await $.wset([$t14], "tag", 0, C);
    } else {
      await $.wset([$t14], "tag", 1, C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "CBTurnOverClick", async function CBTurnOverClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (L0["sender"]);
    if ($.truthy($.eq((await $.wv([$t15], "Checked", C, false)), (await $.wv([$t15], "True", C, false))))) {
      await $.wset([$t15], "Tag", 0, C);
    } else {
      await $.wset([$t15], "Tag", 1, C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBCurrency")), "Checked")), true))) {
    await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "CBFilialClick", async function CBFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBFilial")), "Checked")), true))) {
    await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "CBUserClick", async function CBUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBUser")), "Checked")), true))) {
    await $.mset((await $.v(C, "dblcbUser")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "dblcbUser")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementX", "CBRateDiffClick", async function CBRateDiffClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (L0["sender"]);
    if ($.truthy($.eq((await $.wv([$t16], "Checked", C, false)), (await $.wv([$t16], "True", C, false))))) {
      await $.wset([$t16], "Tag", 0, C);
    } else {
      await $.wset([$t16], "Tag", 1, C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t17) {
    $.rethrowControl($t17);
    $.handled($t17);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t18) {
    $.rethrowControl($t18);
    $.handled($t18);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t19) {
    $.rethrowControl($t19);
    $.handled($t19);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementX", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.stmt($.call(C, "CreateSheet", []));
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditAcc_no")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "GetBySubAccout", [(await $.mv((await $.v(C, "EditAcc_no")), "Text")), true, (await $.mv((await $.v(C, "BeginDTPicker")), "Date")), (await $.mv((await $.v(C, "EndDTPicker")), "Date"))])));
    } else {
      if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Bal_sprEdit")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "GetByBal", [(await $.mv((await $.v(C, "Bal_sprEdit")), "Text")), (await $.mv((await $.v(C, "BeginDTPicker")), "Date")), (await $.mv((await $.v(C, "EndDTPicker")), "Date"))])));
      } else {
        await $.stmt((await $.call(C, "GetAll", [(await $.mv((await $.v(C, "BeginDTPicker")), "Date")), (await $.mv((await $.v(C, "EndDTPicker")), "Date"))])));
      }
    }
    await $.set(C, "FinishPosition", 0);
    await $.stmt($.call(C, "ShowSheet", []));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

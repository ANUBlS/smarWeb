// Generated from ASANFinanceImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ASANFinanceImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ASANFinance_TLB", "StdVcl", "StdCtrls", "ExtCtrls", "ComCtrls", "IdIOHandler", "IdIOHandlerSocket", "IdIOHandlerStack", "IdSSL", "IdSSLOpenSSL", "IdBaseComponent", "IdComponent", "IdTCPConnection", "IdTCPClient", "IdHTTP", "dbxjson", "encddecd", "Grids", "XDBGrids", "Buttons", "DBCtrls", "RaBase", "RaControlsVCL", "Mask", "CurrencyEdit", "CMExcelExport", "ComObj", "ComServ", "PersonalQrFmImpl", "EpployeRepImpl", "PensioonRepImpl", "EtkisRepİmpl", "AsanDmInpl", "VoenRepImpl"]);
  const C = [U];
  U.defClass("TASANFinanceForm", "TActiveForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "idhttp1": {"name": "IdHTTP1", "type": "TIdHTTP"}, "ssl": {"name": "ssl", "type": "TIdSSLIOHandlerSocketOpenSSL"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label14": {"name": "Label14", "type": "TLabel"}, "pin": {"name": "PIN", "type": "TEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "citizenship": {"name": "Citizenship", "type": "TEdit"}, "givenorganization": {"name": "GivenOrganization", "type": "TEdit"}, "maritalstatus": {"name": "MaritalStatus", "type": "TEdit"}, "expiredate": {"name": "ExpireDate", "type": "TEdit"}, "givendate": {"name": "GivenDate", "type": "TEdit"}, "registrationaddress": {"name": "RegistrationAddress", "type": "TEdit"}, "gender": {"name": "Gender", "type": "TEdit"}, "birthaddress": {"name": "BirthAddress", "type": "TEdit"}, "birthdate": {"name": "BirthDate", "type": "TEdit"}, "patronymic": {"name": "Patronymic", "type": "TEdit"}, "surname": {"name": "Surname", "type": "TEdit"}, "name": {"name": "Name", "type": "TEdit"}, "documentnumber": {"name": "DocumentNumber", "type": "TEdit"}, "image1": {"name": "Image1", "type": "TImage"}, "label15": {"name": "Label15", "type": "TLabel"}, "militarystatus": {"name": "MilitaryStatus", "type": "TEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "bloodtype": {"name": "BloodType", "type": "TEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "eyecolor": {"name": "EyeColor", "type": "TEdit"}, "label19": {"name": "Label19", "type": "TLabel"}, "height": {"name": "Height", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "pagecontrol2": {"name": "PageControl2", "type": "TPageControl"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "button3": {"name": "Button3", "type": "TButton"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label17": {"name": "Label17", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button4": {"name": "Button4", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "tabsheet7": {"name": "TabSheet7", "type": "TTabSheet"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button5": {"name": "Button5", "type": "TButton"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label26": {"name": "Label26", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label29": {"name": "Label29", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label30": {"name": "Label30", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label31": {"name": "Label31", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label32": {"name": "Label32", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "label33": {"name": "Label33", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "label34": {"name": "Label34", "type": "TLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "label35": {"name": "Label35", "type": "TLabel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "label36": {"name": "Label36", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "tabsheet8": {"name": "TabSheet8", "type": "TTabSheet"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label37": {"name": "Label37", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "button6": {"name": "Button6", "type": "TButton"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label38": {"name": "Label38", "type": "TLabel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "button7": {"name": "Button7", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label42": {"name": "Label42", "type": "TLabel"}, "label43": {"name": "Label43", "type": "TLabel"}, "label44": {"name": "Label44", "type": "TLabel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "button8": {"name": "Button8", "type": "TButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "label45": {"name": "Label45", "type": "TLabel"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "label27": {"name": "Label27", "type": "TLabel"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "label46": {"name": "Label46", "type": "TLabel"}, "memo3": {"name": "Memo3", "type": "TMemo"}, "label47": {"name": "Label47", "type": "TLabel"}, "paspnum": {"name": "PaspNum", "type": "TEdit"}, "memo4": {"name": "Memo4", "type": "TMemo"}, "button9": {"name": "Button9", "type": "TButton"}, "tabsheet9": {"name": "TabSheet9", "type": "TTabSheet"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label48": {"name": "Label48", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "button10": {"name": "Button10", "type": "TButton"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "xdbgrid5": {"name": "XDBGrid5", "type": "TXDBGrid"}, "fevents": {"name": "FEvents", "type": "IASANFinanceFormEvents"}, "id": {"name": "id", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("Path", '', "String");
    U.var_("Path_B", '', "String");
  });
  U.method("TASANFinanceForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TASANFinanceForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TASANFinanceForm", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TASANFinanceForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TASANFinanceForm", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnMouseEnter", (await $.ref_(C, "MouseEnterEvent")));
  await $.set(C, "OnMouseLeave", (await $.ref_(C, "MouseLeaveEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Bin\\Photo", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", "temp.jpg");
  await $.set(C, "Path_B", "temp.jpg");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TASANFinanceForm", "Fill_Edit", async function Fill_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "AsanDm")), "BankInfoLOGO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PersonalQrFm")), "QRImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "AsanDm")), "BankInfoLOGO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t1) => { L0["f"] = $t1; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t2) => { L0["f"] = $t2; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PersonalQrFm")), "QRImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PersonalQrFm")), "QRImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TASANFinanceForm", "Fill_Edit1", async function Fill_Edit1(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "AsanDm")), "BankInfoLOGO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "EpployeRepFrm")), "QRImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "AsanDm")), "BankInfoLOGO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "EpployeRepFrm")), "QRImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "EpployeRepFrm")), "QRImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TASANFinanceForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TASANFinanceForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "CheckAsan", async function CheckAsan(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"fin": $.copyArg(p0), "service": $.copyArg(p1), "url": $.copyArg(p2), result: undefined, "jsontosend": null, "http": null, "log": 0, "jsontosends": null};
  await $.fixArgs(L0, ["fin", "service", "url"]);
  L0["log"] = 0;
  {
    const $t9 = (await $.mv((await $.v(C, "AsanDm")), "IdDSet"));
    if ($.truthy((await $.wv([$t9], "Active", C, false)))) {
      await $.stmt($.wcall([$t9], "close", [], C));
    }
    await $.stmt($.wcall([$t9], "open", [], C));
    await $.wset([$t9], "id", (await $.mv((await $.wcall([$t9], "FieldByName", ["id"], C)), "AsInteger")), C);
  }
  if ($.truthy(($.ne(L0["service"], "BalanceExp")))) {
    {
      const $t10 = (await $.mv((await $.v(C, "AsanDm")), "LogDSest"));
      if ($.truthy((await $.wv([$t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t10], "close", [], C));
      }
      await $.stmt((await $.wcall([$t10], "SetVariable", [":pin", (await $.wv([$t10], "Fin", { get: async () => L0["fin"], set: async (v) => { L0["fin"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetVariable", [":service", (await $.wv([$t10], "service", { get: async () => L0["service"], set: async (v) => { L0["service"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t10], "SetVariable", [":doc", (await $.mv((await $.wv([$t10], "PaspNum", C, false)), "Text"))], C)));
      await $.stmt($.wcall([$t10], "open", [], C));
      await $.wset([$t10], "log", (await $.wv([$t10], "RecordCount", C, false)), { get: async () => L0["log"], set: async (v) => { L0["log"] = v; }, local: true });
    }
  }
  if ($.truthy((await $.and_(($.gt(L0["log"], 0)), async () => ($.ne(L0["service"], "Balance")))))) {
    {
      const $t11 = (await $.mv((await $.v(C, "AsanDm")), "InsAsanLog"));
      await $.stmt($.wcall([$t11], "open", [], C));
      await $.stmt($.wcall([$t11], "Insert", [], C));
      await $.mset((await $.wcall([$t11], "FieldByName", ["id"], C)), "AsInteger", (await $.wv([$t11], "id", C, false)));
      await $.mset((await $.wcall([$t11], "FieldByName", ["pin"], C)), "AsString", (await $.wv([$t11], "Fin", { get: async () => L0["fin"], set: async (v) => { L0["fin"] = v; }, local: true }, false)));
      await $.mset((await $.wcall([$t11], "FieldByName", ["service"], C)), "AsString", (await $.wv([$t11], "service", { get: async () => L0["service"], set: async (v) => { L0["service"] = v; }, local: true }, false)));
      await $.mset((await $.wcall([$t11], "FieldByName", ["status"], C)), "AsString", "duplicate");
      await $.mset((await $.wcall([$t11], "FieldByName", ["info"], C)), "AsVariant", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "AsanDm", C, false)), "LogDSest")), "FieldByName", ["info"])), "AsVariant")));
      await $.stmt($.wcall([$t11], "post", [], C));
      await $.stmt($.wcall([$t11], "close", [], C));
      await $.mset((await $.wv([$t11], "memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "AsanDm", C, false)), "LogDSest")), "FieldByName", ["info"])), "AsVariant")));
    }
  } else {
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
      L0["http"] = (await $.mcall((await $.v(C, "TIDHttp")), "Create", [null]));
      await $.mset((await $.v(C, "IdHTTP1")), "IOHandler", (await $.v(C, "ssl")));
      await $.set(C, "ssl", (await $.mcall((await $.v(C, "ssl")), "Create", [null])));
      await $.mset(L0["http"], "HandleRedirects", true);
      await $.mset(L0["http"], "ReadTimeout", 3000);
      await $.stmt((await $.mcall((await $.mv((await $.mv(L0["http"], "Request")), "CustomHeaders")), "Add", [$.add("ApiKey:", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AsanDm")), "BankInfo")), "FieldByName", ["fond_reg_no"])), "AsString")))])));
      await $.mset((await $.mv(L0["http"], "Request")), "CacheControl", "no-cache");
      await $.mset((await $.mv(L0["http"], "Request")), "Connection", "Keep-Alive");
      await $.mset((await $.mv(L0["http"], "Request")), "Pragma", "no-cache");
      await $.mset((await $.mv(L0["http"], "Request")), "ContentType", "application/json; charset=utf-8");
      if ($.truthy($.eq(L0["fin"], "post"))) {
        await $.mset((await $.v(C, "Label46")), "Caption", "Connecting to Asan...");
        L0["jsontosends"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["url"]]));
        await $.mset((await $.v(C, "memo1")), "Text", (await $.mcall(L0["http"], "Post", ["http://prod.asanfinance.gov.az/api/v1/Info/Expenses", L0["jsontosends"]])));
      } else {
        if ($.truthy($.eq(L0["service"], "Personalinfo"))) {
          await $.mset((await $.v(C, "memo1")), "Text", (await $.mcall(L0["http"], "get", [$.add($.add($.add($.add($.add("http://prod.asanfinance.gov.az", L0["url"]), "PinAndDocNumber?pin="), L0["fin"]), "&docNumber="), (await $.mv((await $.v(C, "PaspNum")), "Text")))])));
        } else {
          await $.mset((await $.v(C, "memo1")), "Text", (await $.mcall(L0["http"], "get", [$.add($.add("http://prod.asanfinance.gov.az", L0["url"]), L0["fin"])])));
        }
      }
      await $.mset((await $.v(C, "Label46")), "Caption", "Connect to Asan...");
      if ($.truthy($.ne(L0["service"], "Balance"))) {
        {
          const $t13 = (await $.mv((await $.v(C, "AsanDm")), "InsAsanLog"));
          await $.stmt($.wcall([$t13], "open", [], C));
          await $.stmt($.wcall([$t13], "Insert", [], C));
          await $.mset((await $.wcall([$t13], "FieldByName", ["id"], C)), "AsInteger", (await $.wv([$t13], "id", C, false)));
          await $.mset((await $.wcall([$t13], "FieldByName", ["pin"], C)), "AsString", (await $.wv([$t13], "Fin", { get: async () => L0["fin"], set: async (v) => { L0["fin"] = v; }, local: true }, false)));
          await $.mset((await $.wcall([$t13], "FieldByName", ["service"], C)), "AsString", (await $.wv([$t13], "service", { get: async () => L0["service"], set: async (v) => { L0["service"] = v; }, local: true }, false)));
          await $.mset((await $.wcall([$t13], "FieldByName", ["status"], C)), "AsString", "success");
          await $.mset((await $.wcall([$t13], "FieldByName", ["info"], C)), "AsVariant", (await $.mv((await $.wv([$t13], "memo1", C, false)), "Text")));
          await $.mset((await $.wcall([$t13], "FieldByName", ["DOCNUMBER"], C)), "AsString", (await $.mv((await $.wv([$t13], "PaspNum", C, false)), "Text")));
          await $.mset((await $.wcall([$t13], "FieldByName", ["URL"], C)), "AsString", $.add($.add("http://prod.asanfinance.gov.az", (await $.wv([$t13], "url", { get: async () => L0["url"], set: async (v) => { L0["url"] = v; }, local: true }, false))), (await $.wv([$t13], "Fin", { get: async () => L0["fin"], set: async (v) => { L0["fin"] = v; }, local: true }, false))));
          await $.stmt($.wcall([$t13], "post", [], C));
          await $.stmt($.wcall([$t13], "close", [], C));
        }
      }
      await $.mcall(L0["http"], "Destroy", []);
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    } catch ($t12) {
      $.rethrowControl($t12);
      if ($.excIs($t12, "Exception")) {
        L0["e"] = $.exc($t12);
        await $.mcall(L0["http"], "Destroy", []);
        await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
        await $.stmt((await $.call(C, "ShowMessage", [$.add("Asan Finansa qoşulmada problem var: ", (await $.mv(L0["e"], "Message")))])));
        return L0.result;
      }
      else { throw $t12; }
    }
  }
  return L0.result;
}, {"params": ["Fin", "service", "url"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TASANFinanceForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 1);
  await $.set(C, "AsanDm", (await $.mcall((await $.v(C, "TAsanDm")), "Create", [Self])));
  await $.set(C, "PersonalQrFm", (await $.mcall((await $.v(C, "TPersonalQrFm")), "Create", [Self])));
  await $.set(C, "EpployeRepFrm", (await $.mcall((await $.v(C, "TEpployeRepFrm")), "Create", [Self])));
  await $.set(C, "PesionRepFrm", (await $.mcall((await $.v(C, "TPesionRepFrm")), "Create", [Self])));
  await $.set(C, "RepEtkisFrm", (await $.mcall((await $.v(C, "TRepEtkisFrm")), "Create", [Self])));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.call(C, "now", [])));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.call(C, "now", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "EpployeRepFrm"));
    await $.stmt($.wcall([$t14], "Fill_Edit1", [], C));
    await $.mcall((await $.wv([$t14], "EmpRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "PesionRepFrm"));
    await $.stmt($.wcall([$t15], "Fill_Edit1", [], C));
    await $.mset((await $.mv((await $.wv([$t15], "PesionRepFrm", C, false)), "pincode")), "Caption", (await $.mv((await $.wv([$t15], "edit2", C, false)), "Text")));
    await $.mcall((await $.wv([$t15], "PensionRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "RepEtkisFrm"));
    await $.stmt($.wcall([$t16], "Fill_Edit1", [], C));
    await $.mset((await $.mv((await $.wv([$t16], "RepEtkisFrm", C, false)), "pincode")), "Caption", (await $.mv((await $.wv([$t16], "edit3", C, false)), "Text")));
    await $.mcall((await $.wv([$t16], "EtkisRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "VoenForm"));
    await $.stmt($.wcall([$t17], "Fill_Edit1", [], C));
    await $.mcall((await $.wv([$t17], "VoenRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button10Click", async function Button10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Vöeni daxil edin!"])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "CheckAsan", [(await $.mv((await $.v(C, "edit4")), "Text")), "VoenInfo", (await $.mv((await $.mv((await $.v(C, "AsanDm")), "ods_linkVOENINFO")), "AsString"))])));
  {
    const $t18 = (await $.mv((await $.v(C, "AsanDm")), "Status"));
    if ($.truthy((await $.wv([$t18], "Active", C, false)))) {
      await $.stmt($.wcall([$t18], "close", [], C));
    }
    await $.stmt((await $.wcall([$t18], "SetVariable", [":id", (await $.wv([$t18], "id", C, false))], C)));
    await $.stmt($.wcall([$t18], "open", [], C));
    await $.wset([$t18], "status", (await $.mv((await $.wcall([$t18], "FieldByName", ["code"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy((await $.or_(($.ne((await $.wv([$t18], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0)), async () => ($.not((await $.mv((await $.wcall([$t18], "FieldByName", ["Message"], C)), "IsNull")))))))) {
      await $.stmt((await $.wcall([$t18], "ShowMessage", [(await $.mv((await $.wcall([$t18], "FieldByName", ["Message"], C)), "AsString"))], C)));
      return L0.result;
    }
  }
  {
    const $t19 = (await $.mv((await $.v(C, "AsanDm")), "VoenSet"));
    if ($.truthy((await $.wv([$t19], "Active", C, false)))) {
      await $.stmt($.wcall([$t19], "close", [], C));
    }
    await $.stmt((await $.wcall([$t19], "SetVariable", [":id", (await $.wv([$t19], "id", C, false))], C)));
    await $.stmt($.wcall([$t19], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "txt": '', "nam": ''};
  await $.fixArgs(L0, ["sender"]);
  { const $t20 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
      $t21 = false;
      if (!($.ord(L0["i"]) <= $.ord($t20))) break;
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TEdit")))), async () => ($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Tag")), 20)))))) {
        L0["nam"] = (await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "name"));
        L0["txt"] = (await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Text"));
        if ($.truthy($.ne(L0["nam"], ""))) {
          await $.stmt((await $.mcall((await $.v(C, "PersonalQrFm")), "Print", [L0["txt"], L0["nam"]])));
        }
      }
      await $.tick();
    }
  }
  {
    const $t22 = (await $.v(C, "PersonalQrFm"));
    await $.mset((await $.wv([$t22], "QRImage1", C, false)), "Picture", (await $.mv((await $.wv([$t22], "Image1", C, false)), "Picture")));
    await $.stmt($.wcall([$t22], "Fill_Edit", [], C));
    await $.mcall((await $.wv([$t22], "PersonalRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s1": '', "ljsonobj": null, "ljsonobjs": null, "respons": null, "fs": null, "s": '', "filename": '', "f": null, "graphic": null, "status": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "PIN")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "PaspNum")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Finkodu və ya Serya No daxil edin!"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo3")), "Lines")), "Add", [$.add("Bashladi  ", (await $.call(C, "timetostr", [(await $.v(C, "now"))])))])));
  await $.stmt((await $.call(C, "CheckAsan", [(await $.mv((await $.v(C, "PIN")), "Text")), "Personalinfo", (await $.mv((await $.mv((await $.v(C, "AsanDm")), "ods_linkPERSONALINFO")), "AsString"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo3")), "Lines")), "Add", [$.add("Begin parsing  ", (await $.call(C, "timetostr", [(await $.v(C, "now"))])))])));
  L0["s1"] = (await $.mv((await $.v(C, "Memo1")), "Text"));
  L0["ljsonobj"] = (await $.mcall((await $.v(C, "TJSONObject")), "ParseJSONValue", [(await $.mcall((await $.mv((await $.v(C, "TEncoding")), "UTF8")), "GetBytes", [L0["s1"]])), 0]));
  L0["ljsonobjs"] = (await $.call(C, "TJSONObject", [(await $.call(C, "TJSONArray", [(await $.mv((await $.mcall(L0["ljsonobj"], "Get", ["Status"])), "JsonValue"))]))]));
  L0["status"] = (await $.call(C, "strtoint", [(await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobjs"], "Get", ["Code"]))])), "JsonValue")), "Value"))]));
  if ($.truthy($.ne(L0["status"], 0))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobjs"], "Get", ["Message"]))])), "JsonValue")), "Value"))])));
    return L0.result;
  }
  try {
    try {
      L0["ljsonobj"] = (await $.call(C, "TJSONObject", [(await $.call(C, "TJSONArray", [(await $.mv((await $.mcall(L0["ljsonobj"], "Get", ["Response"])), "JsonValue"))]))]));
      { const $t24 = $.sub((await $.v(C, "ComponentCount")), 1);
        L0["i"] = 0;
        let $t25 = true;
        for (;;) {
          if (!$t25) { L0["i"] = $.succ(L0["i"], 1); }
          $t25 = false;
          if (!($.ord(L0["i"]) <= $.ord($t24))) break;
          if ($.truthy((await $.and_(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TEdit")))), async () => ($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Tag")), 20)))))) {
            await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Text", (await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobj"], "Get", [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "name"))]))])), "JsonValue")), "Value")));
          }
          await $.tick();
        }
      }
    } catch ($t23) {
      $.rethrowControl($t23);
      if ($.excIs($t23, "Exception")) {
        L0["e"] = $.exc($t23);
        await $.stmt((await $.call(C, "ShowMessage", [$.add("Pinkod yanlışdır! ", (await $.mv(L0["e"], "Message")))])));
        return L0.result;
      }
      else { throw $t23; }
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo3")), "Lines")), "Add", [$.add("end parsing  ", (await $.call(C, "timetostr", [(await $.v(C, "now"))])))])));
    L0["filename"] = $.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "image.jpg");
    L0["fs"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["filename"], (await $.v(C, "fmCreate"))]));
    await $.mset((await $.v(C, "Memo2")), "Text", (await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobj"], "Get", ["Image"]))])), "JsonValue")), "Value")));
    L0["s"] = (await $.call(C, "DecodeString", [(await $.call(C, "Trim", [(await $.mv((await $.v(C, "Memo2")), "Text"))]))]));
    await $.stmt((await $.mcall(L0["fs"], "Write", [(await $.idx(L0["s"], [1])), (await $.call(C, "Length", [L0["s"]]))])));
    await $.mset((await $.v(C, "Image1")), "Picture", null);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo3")), "Lines")), "Add", [$.add("sekil  ", (await $.call(C, "timetostr", [(await $.v(C, "now"))])))])));
  } finally {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => L0["fs"], async ($t26) => { L0["fs"] = $t26; })])));
    await $.mcall(L0["ljsonobj"], "Free", []);
  }
  L0["graphic"] = (await $.mv((await $.v(C, "TOleGraphic")), "Create"));
  L0["f"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["filename"], (await $.or_((await $.v(C, "fmOpenRead")), async () => (await $.v(C, "fmShareDenyNone"))))]));
  try {
    await $.stmt((await $.mcall(L0["graphic"], "LoadFromStream", [L0["f"]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "Assign", [L0["graphic"]])));
  } finally {
    await $.mcall(L0["f"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s1": '', "ljsonobj": null, "ljsonobjs": null, "respons": null, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CheckAsan", ["", "Balance", "/api/v1/Info/Balance"])));
  L0["s1"] = (await $.mv((await $.v(C, "Memo1")), "Text"));
  L0["ljsonobj"] = (await $.mcall((await $.v(C, "TJSONObject")), "ParseJSONValue", [(await $.mcall((await $.mv((await $.v(C, "TEncoding")), "UTF8")), "GetBytes", [L0["s1"]])), 0]));
  L0["ljsonobjs"] = (await $.call(C, "TJSONObject", [(await $.call(C, "TJSONArray", [(await $.mv((await $.mcall(L0["ljsonobj"], "Get", ["Status"])), "JsonValue"))]))]));
  L0["status"] = (await $.call(C, "strtoint", [(await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobjs"], "Get", ["Code"]))])), "JsonValue")), "Value"))]));
  if ($.truthy($.ne(L0["status"], 0))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobjs"], "Get", ["Message"]))])), "JsonValue")), "Value"))])));
    return L0.result;
  }
  L0["ljsonobj"] = (await $.call(C, "TJSONObject", [(await $.call(C, "TJSONArray", [(await $.mv((await $.mcall(L0["ljsonobj"], "Get", ["Response"])), "JsonValue"))]))]));
  await $.mset((await $.v(C, "Label21")), "Caption", (await $.mv((await $.mv((await $.call(C, "TJSONPair", [(await $.mcall(L0["ljsonobj"], "Get", ["Balance"]))])), "JsonValue")), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PaspNum")), "Text", "");
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Pinkodu daxil edin!"])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "CheckAsan", [(await $.mv((await $.v(C, "edit1")), "Text")), "Employeeinfo", (await $.mv((await $.mv((await $.v(C, "AsanDm")), "ods_linkEMPLOYEEINFO")), "AsString"))])));
  {
    const $t27 = (await $.mv((await $.v(C, "AsanDm")), "Status"));
    if ($.truthy((await $.wv([$t27], "Active", C, false)))) {
      await $.stmt($.wcall([$t27], "close", [], C));
    }
    await $.stmt((await $.wcall([$t27], "SetVariable", [":id", (await $.wv([$t27], "id", C, false))], C)));
    await $.stmt($.wcall([$t27], "open", [], C));
    await $.wset([$t27], "status", (await $.mv((await $.wcall([$t27], "FieldByName", ["code"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy((await $.or_(($.ne((await $.wv([$t27], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0)), async () => ($.not((await $.mv((await $.wcall([$t27], "FieldByName", ["Message"], C)), "IsNull")))))))) {
      await $.stmt((await $.wcall([$t27], "ShowMessage", [(await $.mv((await $.wcall([$t27], "FieldByName", ["Message"], C)), "AsString"))], C)));
      return L0.result;
    }
  }
  {
    const $t28 = (await $.mv((await $.v(C, "AsanDm")), "EmployerDataSet"));
    if ($.truthy((await $.wv([$t28], "Active", C, false)))) {
      await $.stmt($.wcall([$t28], "close", [], C));
    }
    await $.stmt((await $.wcall([$t28], "SetVariable", [":id", (await $.wv([$t28], "id", C, false))], C)));
    await $.stmt($.wcall([$t28], "open", [], C));
  }
  {
    const $t29 = (await $.mv((await $.v(C, "AsanDm")), "DeActiveEmpDSet"));
    if ($.truthy((await $.wv([$t29], "Active", C, false)))) {
      await $.stmt($.wcall([$t29], "close", [], C));
    }
    await $.stmt((await $.wcall([$t29], "SetVariable", [":id", (await $.wv([$t29], "id", C, false))], C)));
    await $.stmt($.wcall([$t29], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PaspNum")), "Text", "");
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Pinkodu daxil edin!"])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "CheckAsan", [(await $.mv((await $.v(C, "edit2")), "Text")), "PensionInfo", (await $.mv((await $.mv((await $.v(C, "AsanDm")), "ods_linkPENSIONINFO")), "AsString"))])));
  {
    const $t30 = (await $.mv((await $.v(C, "AsanDm")), "Status"));
    if ($.truthy((await $.wv([$t30], "Active", C, false)))) {
      await $.stmt($.wcall([$t30], "close", [], C));
    }
    await $.stmt((await $.wcall([$t30], "SetVariable", [":id", (await $.wv([$t30], "id", C, false))], C)));
    await $.stmt($.wcall([$t30], "open", [], C));
    await $.wset([$t30], "status", (await $.mv((await $.wcall([$t30], "FieldByName", ["code"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy((await $.or_(($.ne((await $.wv([$t30], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0)), async () => ($.not((await $.mv((await $.wcall([$t30], "FieldByName", ["Message"], C)), "IsNull")))))))) {
      await $.stmt((await $.wcall([$t30], "ShowMessage", [(await $.mv((await $.wcall([$t30], "FieldByName", ["Message"], C)), "AsString"))], C)));
      return L0.result;
    }
  }
  {
    const $t31 = (await $.mv((await $.v(C, "AsanDm")), "PensionDSet"));
    if ($.truthy((await $.wv([$t31], "Active", C, false)))) {
      await $.stmt($.wcall([$t31], "close", [], C));
    }
    await $.stmt((await $.wcall([$t31], "SetVariable", [":id", (await $.wv([$t31], "id", C, false))], C)));
    await $.stmt($.wcall([$t31], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Pinkodu daxil edin!"])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "CheckAsan", [(await $.mv((await $.v(C, "edit3")), "Text")), "FarmInfo", (await $.mv((await $.mv((await $.v(C, "AsanDm")), "ods_linkFARMINFO")), "AsString"))])));
  {
    const $t32 = (await $.mv((await $.v(C, "AsanDm")), "Status"));
    if ($.truthy((await $.wv([$t32], "Active", C, false)))) {
      await $.stmt($.wcall([$t32], "close", [], C));
    }
    await $.stmt((await $.wcall([$t32], "SetVariable", [":id", (await $.wv([$t32], "id", C, false))], C)));
    await $.stmt($.wcall([$t32], "open", [], C));
    await $.wset([$t32], "status", (await $.mv((await $.wcall([$t32], "FieldByName", ["code"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy((await $.or_(($.ne((await $.wv([$t32], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0)), async () => ($.not((await $.mv((await $.wcall([$t32], "FieldByName", ["Message"], C)), "IsNull")))))))) {
      await $.stmt((await $.wcall([$t32], "ShowMessage", [(await $.mv((await $.wcall([$t32], "FieldByName", ["Message"], C)), "AsString"))], C)));
      return L0.result;
    }
  }
  {
    const $t33 = (await $.mv((await $.v(C, "AsanDm")), "FarmPersonDset"));
    if ($.truthy((await $.wv([$t33], "Active", C, false)))) {
      await $.stmt($.wcall([$t33], "close", [], C));
    }
    await $.stmt((await $.wcall([$t33], "SetVariable", [":id", (await $.wv([$t33], "id", C, false))], C)));
    await $.stmt($.wcall([$t33], "open", [], C));
  }
  {
    const $t34 = (await $.mv((await $.v(C, "AsanDm")), "FarmSet"));
    if ($.truthy((await $.wv([$t34], "Active", C, false)))) {
      await $.stmt($.wcall([$t34], "close", [], C));
    }
    await $.stmt((await $.wcall([$t34], "SetVariable", [":id", (await $.wv([$t34], "id", C, false))], C)));
    await $.stmt($.wcall([$t34], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": '', "status": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["x"] = $.add($.add($.add($.add($.add($.add($.add($.add("{ \"StartDate\": \"", (await $.mcall((await $.v(C, "SysUtils")), "FormatDateTime", ["yyyy-MM-dd HH:mm:ss", (await $.mv((await $.v(C, "DateTimePicker1")), "datetime"))]))), "\", \"EndDate\": \""), (await $.mcall((await $.v(C, "SysUtils")), "FormatDateTime", ["yyyy-MM-dd HH:mm:ss", (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))), "\",\"Offset\": "), (await $.call(C, "CurrToStr", [(await $.mv((await $.v(C, "CurrencyEdit2")), "Value"))]))), ",\"Limit\":"), (await $.call(C, "CurrToStr", [(await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))]))), "}");
  await $.mset((await $.v(C, "memo4")), "Text", L0["x"]);
  await $.stmt((await $.call(C, "CheckAsan", ["post", "BalanceExp", L0["x"]])));
  {
    const $t35 = (await $.mv((await $.v(C, "AsanDm")), "Status"));
    if ($.truthy((await $.wv([$t35], "Active", C, false)))) {
      await $.stmt($.wcall([$t35], "close", [], C));
    }
    await $.stmt((await $.wcall([$t35], "SetVariable", [":id", (await $.wv([$t35], "id", C, false))], C)));
    await $.stmt($.wcall([$t35], "open", [], C));
    await $.wset([$t35], "status", (await $.mv((await $.wcall([$t35], "FieldByName", ["code"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy((await $.or_(($.ne((await $.wv([$t35], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0)), async () => ($.not((await $.mv((await $.wcall([$t35], "FieldByName", ["Message"], C)), "IsNull")))))))) {
      await $.stmt((await $.wcall([$t35], "ShowMessage", [(await $.mv((await $.wcall([$t35], "FieldByName", ["Message"], C)), "AsString"))], C)));
      return L0.result;
    }
  }
  {
    const $t36 = (await $.mv((await $.v(C, "AsanDm")), "XercSet"));
    if ($.truthy((await $.wv([$t36], "Active", C, false)))) {
      await $.stmt($.wcall([$t36], "close", [], C));
    }
    await $.stmt((await $.wcall([$t36], "SetVariable", [":id", (await $.wv([$t36], "id", C, false))], C)));
    await $.stmt($.wcall([$t36], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button8Click", async function Button8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t37], "Connect", [], C));
    await $.stmt((await $.wcall([$t37], "ExportDataset", [(await $.mv((await $.wv([$t37], "AsanDm", C, false)), "XercSet")), "Xercler", (await $.wv([$t37], "True", C, false))], C)));
    await $.stmt($.wcall([$t37], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Button9Click", async function Button9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "l_name": '', "l_custid": 0, "v_gender": 0, "v_fam_status": 0, "v_expdate": null};
  await $.fixArgs(L0, ["sender"]);
  L0["l_name"] = (await $.mv((await $.v(C, "name")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "DocumentNumber")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Öncə Asan Sorğunu edin"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Gender")), "Text")), "Qadın"))) {
    L0["v_gender"] = 2;
  } else {
    L0["v_gender"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "MaritalStatus")), "Text")), "Subay"))) {
    L0["v_fam_status"] = 2;
  } else {
    L0["v_fam_status"] = 1;
  }
  L0["v_expdate"] = (await $.mv((await $.v(C, "ExpireDate")), "Text"));
  L0["l_custid"] = 0;
  {
    const $t38 = (await $.v(C, "AsanDm"));
    await $.wset([$t38], "l_custid", (await $.mcall((await $.wv([$t38], "PrPackage", C, false)), "CallIntegerFunction", ["add_cust", ["p_passnum", (await $.mv((await $.wv([$t38], "DocumentNumber", C, false)), "Text")), "p_paspin", (await $.mv((await $.wv([$t38], "PIN", C, false)), "Text")), "p_name", (await $.wv([$t38], "l_name", { get: async () => L0["l_name"], set: async (v) => { L0["l_name"] = v; }, local: true }, false)), "p_soname", (await $.mv((await $.wv([$t38], "Patronymic", C, false)), "Text")), "p_lastname", (await $.mv((await $.wv([$t38], "Surname", C, false)), "Text")), "p_birthday", (await $.wcall([$t38], "StrToDate", [(await $.mv((await $.wv([$t38], "BirthDate", C, false)), "Text"))], C)), "p_birthplace", (await $.mv((await $.wv([$t38], "BirthAddress", C, false)), "Text")), "p_sex", (await $.wv([$t38], "v_gender", { get: async () => L0["v_gender"], set: async (v) => { L0["v_gender"] = v; }, local: true }, false)), "p_address", (await $.mv((await $.wv([$t38], "RegistrationAddress", C, false)), "Text")), "p_paspdate", (await $.wcall([$t38], "StrToDate", [(await $.mv((await $.wv([$t38], "GivenDate", C, false)), "Text"))], C)), "p_passexpire", (await $.wv([$t38], "v_expdate", { get: async () => L0["v_expdate"], set: async (v) => { L0["v_expdate"] = v; }, local: true }, false)), "p_fam_status", (await $.wv([$t38], "v_fam_status", { get: async () => L0["v_fam_status"], set: async (v) => { L0["v_fam_status"] = v; }, local: true }, false)), "p_paspplace", (await $.mv((await $.wv([$t38], "GivenOrganization", C, false)), "Text")), "p_citizenship", (await $.mv((await $.wv([$t38], "Citizenship", C, false)), "Text")), "p_work_place", "", "p_work_post", "", "p_monthlyprofit", ""]])), { get: async () => L0["l_custid"], set: async (v) => { L0["l_custid"] = v; }, local: true });
  }
  if ($.truthy($.gt(L0["l_custid"], 0))) {
    await $.stmt((await $.call(C, "ShowMessage", [$.add("Müştəri uğurla açıldı müştəri idsi-", (await $.call(C, "IntToStr", [L0["l_custid"]])))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TASANFinanceForm", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TASANFinanceForm", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TASANFinanceForm", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TASANFinanceForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TASANFinanceForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TASANFinanceForm", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TASANFinanceForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TASANFinanceForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TASANFinanceForm", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TASANFinanceForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TASANFinanceForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TASANFinanceForm", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TASANFinanceForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  return U;
}

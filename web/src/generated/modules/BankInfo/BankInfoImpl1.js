// Generated from BankInfoImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BankInfoImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "BankInfo_TLB", "StdVcl", "Menus", "StdCtrls", "Mask", "ExtCtrls", "ComCtrls", "ToolWin", "Buttons", "OracleData", "ExtDlgs", "Db", "DBCtrls", "Oracle", "DBCtrlsEh", "XFSCtrls", "frminfo", "jpeg", "QuickRpt", "QRCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBCore", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TBankInfoX", "TActiveForm", {"bankinfodataset": {"name": "BANKINFODataSet", "type": "TOracleDataSet"}, "dsbankinfo": {"name": "dsBANKINFO", "type": "TDataSource"}, "openpicturedialog1": {"name": "OpenPictureDialog1", "type": "TOpenPictureDialog"}, "ords_getuserbranchid": {"name": "OrDS_GetUserBranchID", "type": "TOracleDataSet"}, "bankinfodatasetkod_b": {"name": "BANKINFODataSetKOD_B", "type": "TFloatField"}, "bankinfodatasetbank": {"name": "BANKINFODataSetBANK", "type": "TWideStringField"}, "bankinfodatasetaz_name": {"name": "BANKINFODataSetAZ_NAME", "type": "TWideStringField"}, "bankinfodatasetkrno": {"name": "BANKINFODataSetKRNO", "type": "TWideStringField"}, "bankinfodatasetinn": {"name": "BANKINFODataSetINN", "type": "TWideStringField"}, "bankinfodatasetseher": {"name": "BANKINFODataSetSEHER", "type": "TWideStringField"}, "bankinfodatasetadress": {"name": "BANKINFODataSetADRESS", "type": "TWideStringField"}, "bankinfodatasetsedr": {"name": "BANKINFODataSetSEDR", "type": "TWideStringField"}, "bankinfodatasetbuhaltr": {"name": "BANKINFODataSetBUHALTR", "type": "TWideStringField"}, "bankinfodatasettel": {"name": "BANKINFODataSetTEL", "type": "TWideStringField"}, "bankinfodatasetfax": {"name": "BANKINFODataSetFAX", "type": "TWideStringField"}, "bankinfodatasetswift": {"name": "BANKINFODataSetSWIFT", "type": "TWideStringField"}, "bankinfodatasettelex": {"name": "BANKINFODataSetTELEX", "type": "TWideStringField"}, "bankinfodatasetemail": {"name": "BANKINFODataSetEMAIL", "type": "TWideStringField"}, "bankinfodatasetpost_in": {"name": "BANKINFODataSetPOST_IN", "type": "TWideStringField"}, "bankinfodatasetkod_fil": {"name": "BANKINFODataSetKOD_FIL", "type": "TIntegerField"}, "bankinfodatasetfilial": {"name": "BANKINFODataSetFILIAL", "type": "TWideStringField"}, "bankinfodatasetadres_fil": {"name": "BANKINFODataSetADRES_FIL", "type": "TWideStringField"}, "bankinfodatasettel_fil": {"name": "BANKINFODataSetTEL_FIL", "type": "TWideStringField"}, "bankinfodatasetfax_fil": {"name": "BANKINFODataSetFAX_FIL", "type": "TWideStringField"}, "bankinfodatasetswift_fil": {"name": "BANKINFODataSetSWIFT_FIL", "type": "TWideStringField"}, "bankinfodatasettelex_fil": {"name": "BANKINFODataSetTELEX_FIL", "type": "TWideStringField"}, "bankinfodatasetpostin_fil": {"name": "BANKINFODataSetPOSTIN_FIL", "type": "TWideStringField"}, "bankinfodatasetseher_fil": {"name": "BANKINFODataSetSEHER_FIL", "type": "TWideStringField"}, "bankinfodatasetinn_fil": {"name": "BANKINFODataSetINN_FIL", "type": "TWideStringField"}, "bankinfodatasetkrno_fil": {"name": "BANKINFODataSetKRNO_FIL", "type": "TWideStringField"}, "bankinfodatasetsedrfil": {"name": "BANKINFODataSetSEDRFIL", "type": "TWideStringField"}, "bankinfodatasetbuhal_fil": {"name": "BANKINFODataSetBUHAL_FIL", "type": "TWideStringField"}, "bankinfodatasetkod_bfil": {"name": "BANKINFODataSetKOD_BFIL", "type": "TFloatField"}, "bankinfodatasetnb": {"name": "BANKINFODataSetNB", "type": "TIntegerField"}, "bankinfodatasetval_mov": {"name": "BANKINFODataSetVAL_MOV", "type": "TWideStringField"}, "bankinfodatasetlogo": {"name": "BANKINFODataSetLOGO", "type": "TBlobField"}, "bankinfodatasetlink": {"name": "BANKINFODataSetLINK", "type": "TWideStringField"}, "bankinfodatasetsdv": {"name": "BANKINFODataSetSDV", "type": "TFloatField"}, "bankinfodatasetsvm": {"name": "BANKINFODataSetSVM", "type": "TFloatField"}, "bankinfodatasetbf": {"name": "BANKINFODataSetBF", "type": "TFloatField"}, "bankinfodatasetmanagertitle": {"name": "BANKINFODataSetMANAGERTITLE", "type": "TWideStringField"}, "bankinfodatasetaccountanttitle": {"name": "BANKINFODataSetACCOUNTANTTITLE", "type": "TWideStringField"}, "bankinfodatasetsvm_currencyid": {"name": "BANKINFODataSetSVM_CURRENCYID", "type": "TFloatField"}, "bankinfodatasetcapital": {"name": "BANKINFODataSetCAPITAL", "type": "TFloatField"}, "bankinfodatasetassistant": {"name": "BANKINFODataSetASSISTANT", "type": "TWideStringField"}, "bankinfodatasetassistanttitle": {"name": "BANKINFODataSetASSISTANTTITLE", "type": "TWideStringField"}, "bankinfodatasetreg_no": {"name": "BANKINFODataSetREG_NO", "type": "TWideStringField"}, "bankinfodatasetlicense_no": {"name": "BANKINFODataSetLICENSE_NO", "type": "TWideStringField"}, "bankinfodatasetfond_reg_no": {"name": "BANKINFODataSetFOND_REG_NO", "type": "TWideStringField"}, "bankinfodatasetlicense_fil": {"name": "BANKINFODataSetLICENSE_FIL", "type": "TWideStringField"}, "bankinfodatasetlicense_date": {"name": "BANKINFODataSetLICENSE_DATE", "type": "TDateTimeField"}, "bankinfodatasettax_regcode": {"name": "BANKINFODataSetTAX_REGCODE", "type": "TWideStringField"}, "obpackage": {"name": "OBPackage", "type": "TOraclePackage"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "cboxbank": {"name": "CBoxBank", "type": "TComboBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "editbank": {"name": "EditBANK", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "editkod_b": {"name": "EditKOD_B", "type": "TDBEdit"}, "dbecapital": {"name": "DBECapital", "type": "TDBEdit"}, "editkrno": {"name": "EditKRNO", "type": "TDBEdit"}, "editswift": {"name": "EditSWIFT", "type": "TDBEdit"}, "editinn": {"name": "EditINN", "type": "TDBEdit"}, "edittelex": {"name": "EditTELEX", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "editadress": {"name": "EditADRESS", "type": "TDBEdit"}, "editseher": {"name": "EditSEHER", "type": "TDBEdit"}, "edittel": {"name": "EditTEL", "type": "TDBEdit"}, "editfax": {"name": "EditFAX", "type": "TDBEdit"}, "editemail": {"name": "EditEMAIL", "type": "TDBEdit"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "dbimage1": {"name": "DBImage1", "type": "TDBImage"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "dateti_samelydate": {"name": "DateTi_samelydate", "type": "TDBDateTimeEditEh"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "editsedr": {"name": "EditSEDR", "type": "TDBEdit"}, "editassistant": {"name": "EditAssistant", "type": "TDBEdit"}, "editbuhaltr": {"name": "EditBUHALTR", "type": "TDBEdit"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "editassistanttitle": {"name": "EditAssistantTitle", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "xflabel25": {"name": "XFLabel25", "type": "TXFLabel"}, "xflabel26": {"name": "XFLabel26", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "xflabel29": {"name": "XFLabel29", "type": "TXFLabel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel32": {"name": "XFLabel32", "type": "TXFLabel"}, "xflabel33": {"name": "XFLabel33", "type": "TXFLabel"}, "xflabel34": {"name": "XFLabel34", "type": "TXFLabel"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "bankinfodatasetimza_logo": {"name": "BANKINFODataSetIMZA_LOGO", "type": "TBlobField"}, "dbimage2": {"name": "DBImage2", "type": "TDBImage"}, "fevents": {"name": "FEvents", "type": "IBankInfoXEvents"}}, {});
  U.init(async () => {
    U.var_("Path", '', "String");
    U.var_("Path_b", '', "String");
  });
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Bin\\Photo", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", (await $.call(C, "Format", ["%s\\temp.jpg", [L0["imagespath"]]])));
  await $.set(C, "Path_B", (await $.call(C, "Format", ["%s\\blank.jpg", [L0["imagespath"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBankInfoX", "Fill_Edit", async function Fill_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.v(C, "BANKINFODataSetLOGO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbimage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "BANKINFODataSetLOGO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t1) => { L0["f"] = $t1; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t2) => { L0["f"] = $t2; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "BANKINFODataSetIMZA_LOGO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbimage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "BANKINFODataSetIMZA_LOGO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBankInfoX", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBankInfoX", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBankInfoX", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBankInfoX", "Initialize", null, arguments);
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
  U.method("TBankInfoX", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBankInfoX", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBankInfoX", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBankInfoX", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBankInfoX", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBankInfoX", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBankInfoX", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBankInfoX", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBankInfoX", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBankInfoX", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBankInfoX", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBankInfoX", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BANKINFODataSet")), "Cancel", []);
  await $.mcall((await $.v(C, "BANKINFODataSet")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BANKINFODataSet")), "Post", []);
  await $.mcall((await $.v(C, "BANKINFODataSet")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "form23", (await $.mcall((await $.v(C, "Tform23")), "create", [Self])));
  await $.mcall((await $.v(C, "form23")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "DBImage1DblClick", async function DBImage1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "logo": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["logo"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage1")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      }
    } catch ($t9) {
      $.rethrowControl($t9);
      $.handled($t9);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage1")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "BANKINFODataSet")), "FieldByName", ["logo"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "DBImage2DblClick", async function DBImage2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "imza_logo": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["imza_logo"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage2")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      }
    } catch ($t10) {
      $.rethrowControl($t10);
      $.handled($t10);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage2")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "BANKINFODataSet")), "FieldByName", ["imza_logo"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CBoxBankADD", []));
  await $.stmt((await $.mcall((await $.v(C, "BANKINFODataSet")), "Locate", ["kod_fil", (await $.mv((await $.v(C, "CBoxBank")), "Text")), []])));
  await $.mcall((await $.v(C, "BANKINFODataSet")), "Edit", []);
  await $.stmt($.call(C, "GetPath", []));
  await $.stmt($.call(C, "Fill_Edit", []));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "tt", async function tt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "jpegimage": null, "blobstream": null};
  await $.stmt((await $.call(C, "showmessage", ["ddd"])));
  if ($.truthy(($.not((await $.mv((await $.mcall((await $.v(C, "BANKINFODataSet")), "FieldByName", ["logo"])), "IsNull")))))) {
    L0["blobstream"] = (await $.mcall((await $.v(C, "BANKINFODataSet")), "CreateBlobStream", [(await $.mcall((await $.v(C, "BANKINFODataSet")), "FieldByName", ["logo"])), (await $.v(C, "bmRead"))]));
    L0["jpegimage"] = (await $.mv((await $.v(C, "TJPEGImage")), "Create"));
    try {
      await $.stmt((await $.mcall(L0["jpegimage"], "LoadFromStream", [L0["blobstream"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dbimage1")), "Picture")), "Assign", [L0["jpegimage"]])));
    } finally {
      await $.mcall(L0["jpegimage"], "Free", []);
      await $.mcall(L0["blobstream"], "Free", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBankInfoX", "CBoxBankADD", async function CBoxBankADD(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.mcall((await $.v(C, "BANKINFODataSet")), "First", []);
  { const $t11 = (await $.mv((await $.v(C, "BANKINFODataSet")), "RecordCount"));
    L0["i"] = 1;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
      $t12 = false;
      if (!($.ord(L0["i"]) <= $.ord($t11))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxBank")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "BANKINFODataSet")), "FieldByName", ["kod_fil"])), "AsString"))])));
      await $.mcall((await $.v(C, "BANKINFODataSet")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "CBoxBank")), "Text", (await $.call(C, "IntToStr", [(await $.v(C, "GetUserBranchID"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBankInfoX", "GetUserBranchId", async function GetUserBranchId(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  await $.mcall((await $.v(C, "OrDS_GetUserBranchID")), "Open", []);
  L0["result"] = (await $.mv((await $.mcall((await $.v(C, "OrDS_GetUserBranchID")), "FieldByName", ["FilialID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBankInfoX", "CBoxBankChange", async function CBoxBankChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "BANKINFODataSet")), "Locate", ["kod_fil", (await $.mv((await $.v(C, "CBoxBank")), "Text")), []])));
  await $.mcall((await $.v(C, "BANKINFODataSet")), "Edit", []);
  await $.stmt($.call(C, "Fill_Edit", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBankInfoX", "CBoxBankCloseUp", async function CBoxBankCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Fill_Edit", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

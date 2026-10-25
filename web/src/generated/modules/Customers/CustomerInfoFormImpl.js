// Generated from CustomerInfoFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomerInfoFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "Db", "OracleData", "ExtDlgs", "Buttons", "ImgList", "ToolWin", "Oracle", "Jpeg", "CustomerDataModuleImpl", "SBCustomer", "sboapiDataModuleImpl", "UnitFrmZoom", "CustomerPropertiesForm_Unit", "uCustomersIPInfo", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TCustomerInfoForm", "TForm", {"tabcontrol": {"name": "TabControl", "type": "TTabControl"}, "custinfodata": {"name": "CustInfoData", "type": "TOracleDataSet"}, "custinfo": {"name": "CustInfo", "type": "TDataSource"}, "openpicturedlg": {"name": "OpenPictureDlg", "type": "TOpenPictureDialog"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "odscustimages": {"name": "ODSCustImages", "type": "TOracleDataSet"}, "dscustimages": {"name": "DSCustImages", "type": "TDataSource"}, "odscustimagesid": {"name": "ODSCustImagesID", "type": "TFloatField"}, "odscustimagesphoto": {"name": "ODSCustImagesPHOTO", "type": "TBlobField"}, "odscustimagescustsign": {"name": "ODSCustImagesCUSTSIGN", "type": "TBlobField"}, "odscustimagesstamp": {"name": "ODSCustImagesSTAMP", "type": "TBlobField"}, "custinfodataid": {"name": "CustInfoDataID", "type": "TFloatField"}, "custinfodataidcust": {"name": "CustInfoDataIDCUST", "type": "TFloatField"}, "custinfodatabirthday": {"name": "CustInfoDataBIRTHDAY", "type": "TDateTimeField"}, "custinfodatapaspdate": {"name": "CustInfoDataPASPDATE", "type": "TDateTimeField"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "edit19": {"name": "Edit19", "type": "TDBLookupComboBox"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "fill_edit": {"name": "Fill_Edit", "type": "TButton"}, "sb_custinfo": {"name": "sb_custInfo", "type": "TOraclePackage"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "tdedit4": {"name": "TDEdit4", "type": "TDateTimePicker"}, "tdedit18": {"name": "TDEdit18", "type": "TDateTimePicker"}, "odspassdeps": {"name": "odsPassDeps", "type": "TOracleDataSet"}, "passdeps": {"name": "passdeps", "type": "TDataSource"}, "custinfodatasoname": {"name": "CustInfoDataSONAME", "type": "TWideStringField"}, "custinfodataname": {"name": "CustInfoDataNAME", "type": "TWideStringField"}, "custinfodatalastname": {"name": "CustInfoDataLASTNAME", "type": "TWideStringField"}, "custinfodatabirthplace": {"name": "CustInfoDataBIRTHPLACE", "type": "TWideStringField"}, "custinfodatapasser": {"name": "CustInfoDataPASSER", "type": "TWideStringField"}, "custinfodatapaspplace": {"name": "CustInfoDataPASPPLACE", "type": "TWideStringField"}, "custinfodatacity": {"name": "CustInfoDataCITY", "type": "TWideStringField"}, "custinfodataaddress": {"name": "CustInfoDataADDRESS", "type": "TWideStringField"}, "custinfodataworkplace": {"name": "CustInfoDataWORKPLACE", "type": "TWideStringField"}, "custinfodataphone_w": {"name": "CustInfoDataPHONE_W", "type": "TWideStringField"}, "custinfodataphone_h": {"name": "CustInfoDataPHONE_H", "type": "TWideStringField"}, "custinfodataphone_m": {"name": "CustInfoDataPHONE_M", "type": "TWideStringField"}, "custinfodatae_mail": {"name": "CustInfoDataE_MAIL", "type": "TWideStringField"}, "custinfodataurl": {"name": "CustInfoDataURL", "type": "TWideStringField"}, "custinfodatarecomendation": {"name": "CustInfoDataRECOMENDATION", "type": "TWideStringField"}, "custinfodatagaranted": {"name": "CustInfoDataGARANTED", "type": "TWideStringField"}, "custinfodataotv_passport": {"name": "CustInfoDataOTV_PASSPORT", "type": "TWideStringField"}, "custinfodataotv_issued": {"name": "CustInfoDataOTV_ISSUED", "type": "TWideStringField"}, "custinfodatapaspnum": {"name": "CustInfoDataPASPNUM", "type": "TWideStringField"}, "custinfodatanote": {"name": "CustInfoDataNOTE", "type": "TWideStringField"}, "custinfodatawork": {"name": "CustInfoDataWORK", "type": "TWideStringField"}, "custinfodataotv_isdate": {"name": "CustInfoDataOTV_ISDATE", "type": "TWideStringField"}, "label1": {"name": "Label1", "type": "TLabel"}, "kartopen": {"name": "KartOpen", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("CustomerInfoForm", null, "TCustomerInfoForm");
    U.var_("Path", '', "String");
    U.var_("Path_B", '', "String");
  });
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Env\\Customers", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", (await $.call(C, "Format", ["%s\\temp.jpg", [L0["imagespath"]]])));
  await $.set(C, "Path_B", (await $.call(C, "Format", ["%s\\blank.jpg", [L0["imagespath"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomerInfoForm", "ViewCustInfo", async function ViewCustInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"customerid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["customerid"]);
  {
    const $t1 = (await $.v(C, "CustomerDataModule"));
    const $t2 = (await $.wv([$t1], "CustInfoData", C, false));
    await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CustomerID", (await $.wv([$t1, $t2], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
      await $.mcall((await $.wv([$t1, $t2], "ToolButton2", C, false)), "Click", []);
    }
    await $.stmt($.wcall([$t1, $t2], "GetPath", [], C));
    await $.stmt($.wcall([$t1, $t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["CustomerID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomerInfoForm", "CustInfoDataAfterOpen", async function CustInfoDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCust"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList")), "FieldByName", ["ID"])), "AsInteger")));
  {
    const $t3 = L0["dataset"];
    const $t4 = (await $.wv([$t3], "TabControl", C, false));
    await $.mcall((await $.wv([$t3, $t4], "Tabs", C, false)), "Clear", []);
    { const $t5 = $.sub((await $.wv([$t3, $t4], "RecordCount", C, false)), 1);
      await $.wset([$t3, $t4], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t3, $t4], "Index", $.succ((await $.wv([$t3, $t4], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t3, $t4], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t5))) break;
        await $.stmt((await $.mcall((await $.wv([$t3, $t4], "Tabs", C, false)), "Add", [(await $.wcall([$t3, $t4], "Format", ["Kart №%d", [(await $.wv([$t3, $t4], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])));
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t3, $t4], "First", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomerInfoForm", "TabControlChange", async function TabControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton6")), "Click", []);
  await $.mset((await $.v(C, "CustInfoData")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "CustInfoDataApplyRecord", async function CustInfoDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "info": $.rec("tcustomerinfo")};
  await $.fixArgs(L0, ["sender", "action"]);
  { const $t7 = L0["action"];
    if ($.eq($t7, "I")) {
      {
        const $t8 = L0["sender"];
        const $t9 = (await $.wv([$t8], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false));
        await $.wset([$t8, $t9], "Name", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["Name"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "LastName", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["LastName"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "SurName", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["SoName"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "BirthDate", (await $.wcall([$t8, $t9], "Trunc", [(await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BirthDay"], C)), "AsDateTime"))], C)), C);
        await $.wset([$t8, $t9], "BirthPlace", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BirthPlace"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "Address", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["Address"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "City", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["City"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "WorkPlace", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["WorkPlace"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "PhoneWork", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["Phone_W"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "PhoneHome", (await $.mv((await $.wcall([$t8, $t9], "FieldBYName", ["Phone_H"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "PhoneCelular", (await $.mv((await $.wcall([$t8, $t9], "FieldByname", ["Phone_M"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "Email", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["E_Mail"], C)), "AsString")), C);
        await $.wset([$t8, $t9], "Url", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["Url"], C)), "AsString")), C);
      }
      await $.stmt((await $.call(C, "Sb_AddCustomerInfo", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger")), L0["info"]])));
      await L0["applied"].set(true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TCustomerInfoForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ToolButton6Click", [(await $.v(C, "ToolButton6"))])));
  await $.stmt((await $.mcall((await $.v(C, "sb_CustInfo")), "CallProcedure", ["add_custinfo", ["vidcust", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList")), "FieldByName", ["ID"])), "AsInteger"))]])));
  {
    const $t10 = (await $.v(C, "TabControl"));
    const $t11 = (await $.wv([$t10], "CustInfoData", C, false));
    await $.stmt($.wcall([$t10, $t11], "Refresh", [], C));
    await $.wset([$t10, $t11], "recno", (await $.wv([$t10, $t11], "RecordCount", C, false)), C);
    await $.wset([$t10, $t11], "index", (await $.wv([$t10, $t11], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t10, $t11], "TabIndex", (await $.mcall((await $.wv([$t10, $t11], "Tabs", C, false)), "Add", [(await $.wcall([$t10, $t11], "Format", ["Kart №%d", [(await $.wv([$t10, $t11], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])), C);
  }
  await $.mcall((await $.v(C, "fill_edit")), "click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "sb_CustInfo")), "CallProcedure", ["del_custinfo", ["v_id", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["ID"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "CustInfoData")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "TabControl")), "Tabs")), "Clear", []);
  { const $t12 = $.sub((await $.mv((await $.v(C, "CustInfoData")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t13 = true;
    for (;;) {
      if (!$t13) { L0["index"] = $.succ(L0["index"], 1); }
      $t13 = false;
      if (!($.ord(L0["index"]) <= $.ord($t12))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TabControl")), "Tabs")), "Add", [(await $.call(C, "Format", ["Kart №%d", [L0["index"]]]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "fill_edit")), "click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "CustInfoData")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "edit4")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "TDEdit4")), "Date"))])));
    await $.mset((await $.v(C, "edit18")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "TDEdit18")), "Date"))])));
    await $.stmt((await $.mcall((await $.v(C, "sb_CustInfo")), "CallProcedure", ["upd_custinfo", ["vid", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["ID"])), "AsInteger")), "vidcust", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCust"])), "AsInteger")), "vName", (await $.mv((await $.v(C, "edit1")), "text")), "vLastName", (await $.mv((await $.v(C, "edit2")), "text")), "vSoName", (await $.mv((await $.v(C, "edit3")), "text")), "vBirthDay", (await $.mv((await $.v(C, "edit4")), "text")), "vBirthPlace", (await $.mv((await $.v(C, "edit5")), "text")), "vAddress", (await $.mv((await $.v(C, "edit6")), "text")), "vCity", (await $.mv((await $.v(C, "edit7")), "text")), "vWorkPlace", (await $.mv((await $.v(C, "edit8")), "text")), "vWork", (await $.mv((await $.v(C, "edit9")), "text")), "vPhone_w", (await $.mv((await $.v(C, "edit12")), "text")), "vPhone_h", (await $.mv((await $.v(C, "edit11")), "text")), "vPhone_m", (await $.mv((await $.v(C, "edit10")), "text")), "ve_mail", (await $.mv((await $.v(C, "edit13")), "text")), "vurl", (await $.mv((await $.v(C, "edit14")), "text")), "vGaranted", (await $.mv((await $.v(C, "edit15")), "text")), "vPasSer", (await $.mv((await $.v(C, "edit16")), "text")), "vPaspNum", (await $.mv((await $.v(C, "edit17")), "text")), "vPaspDate", (await $.mv((await $.v(C, "edit18")), "text")), "vPaspPlace", (await $.mv((await $.v(C, "edit19")), "text")), "vNote", (await $.mv((await $.v(C, "Memo1")), "text"))]])));
    await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
    try {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["PHOTO"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["CUSTSIGN"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["STAMP"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    } catch ($t14) {
      $.rethrowControl($t14);
      $.handled($t14);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during BlobOperation"])));
    }
    await $.mcall((await $.v(C, "CustInfoData")), "Refresh", []);
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustInfoData")), "Cancel", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image1")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image2")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image3")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t15) {
      $.rethrowControl($t15);
      $.handled($t15);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t16) {
      $.rethrowControl($t16);
      $.handled($t16);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t17) {
      $.rethrowControl($t17);
      $.handled($t17);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "Fill_EditClick", async function Fill_EditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSCustImages")), "Close", []);
  await $.mcall((await $.v(C, "ODSCustImages")), "Open", []);
  await $.mcall((await $.v(C, "odsPassDeps")), "Close", []);
  await $.mcall((await $.v(C, "odsPassDeps")), "Open", []);
  await $.mset((await $.v(C, "edit1")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["name"])), "asstring")));
  await $.mset((await $.v(C, "edit2")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["lastname"])), "asstring")));
  await $.mset((await $.v(C, "edit3")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["soname"])), "asstring")));
  await $.mset((await $.v(C, "edit4")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["BIRTHDAY"])), "asstring")));
  await $.mset((await $.v(C, "edit5")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["BIRTHPLACE"])), "asstring")));
  await $.mset((await $.v(C, "edit6")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Address"])), "asstring")));
  await $.mset((await $.v(C, "edit7")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["City"])), "asstring")));
  await $.mset((await $.v(C, "edit8")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["WorkPlace"])), "asstring")));
  await $.mset((await $.v(C, "edit9")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Work"])), "asstring")));
  await $.mset((await $.v(C, "edit10")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_m"])), "asstring")));
  await $.mset((await $.v(C, "edit11")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_h"])), "asstring")));
  await $.mset((await $.v(C, "edit12")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_w"])), "asstring")));
  await $.mset((await $.v(C, "edit13")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["e_mail"])), "asstring")));
  await $.mset((await $.v(C, "edit14")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["url"])), "asstring")));
  await $.mset((await $.v(C, "edit15")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Garanted"])), "asstring")));
  await $.mset((await $.v(C, "edit16")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PasSer"])), "asstring")));
  await $.mset((await $.v(C, "edit17")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspNum"])), "asstring")));
  await $.mset((await $.v(C, "edit18")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspDate"])), "asstring")));
  await $.mset((await $.v(C, "edit19")), "keyvalue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspPlace"])), "asstring")));
  await $.mset((await $.v(C, "Memo1")), "text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Note"])), "asstring")));
  try {
    await $.mset((await $.v(C, "tdedit4")), "date", (await $.call(C, "strtodate", [(await $.mv((await $.v(C, "Edit4")), "text"))])));
    await $.mset((await $.v(C, "tdedit18")), "date", (await $.call(C, "strtodate", [(await $.mv((await $.v(C, "Edit18")), "text"))])));
  } catch ($t18) {
    $.rethrowControl($t18);
    $.handled($t18);
    await $.mset((await $.v(C, "TDEdit4")), "date", (await $.v(C, "date")));
    await $.mset((await $.v(C, "TDEdit18")), "date", (await $.v(C, "date")));
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesPHOTO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesPHOTO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t20) => { L0["f"] = $t20; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t21) => { L0["f"] = $t21; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t22) => { L0["f"] = $t22; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t23) => { L0["f"] = $t23; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t24) => { L0["f"] = $t24; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t25) => { L0["f"] = $t25; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t26) => { L0["f"] = $t26; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesSTAMP")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesSTAMP")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t27) => { L0["f"] = $t27; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t28) => { L0["f"] = $t28; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t29) => { L0["f"] = $t29; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t30) => { L0["f"] = $t30; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "fill_edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomerInfoForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "frmIPINFO"));
    const $t32 = (await $.wv([$t31], "ODSIpInfo", C, false));
    await $.mcall((await $.wv([$t31, $t32], "ODSIpInfo", C, false)), "close", []);
    await $.wset([$t31, $t32], "CardID", (await $.mv((await $.wv([$t31, $t32], "CustInfoDataID", C, false)), "AsVariant")), C);
    await $.stmt((await $.wcall([$t31, $t32], "SetVariable", ["cardid", (await $.mv((await $.wv([$t31, $t32], "CustInfoDataID", C, false)), "AsVariant"))], C)));
    await $.stmt($.wcall([$t31, $t32], "Open", [], C));
    await $.stmt($.wcall([$t31, $t32], "edit", [], C));
    await $.mset((await $.wv([$t31, $t32], "cb_BDATE", C, false)), "Date", (await $.mv((await $.wcall([$t31, $t32], "FieldByName", ["BDATE"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t31, $t32], "cb_INSCONTRACTDATE", C, false)), "Date", (await $.mv((await $.wcall([$t31, $t32], "FieldByName", ["INSCONTRACTDATE"], C)), "AsDateTime")));
    await $.stmt($.wcall([$t31, $t32], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmIPINFO", (await $.mcall((await $.v(C, "TfrmIPINFO")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

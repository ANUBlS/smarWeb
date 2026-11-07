// Generated from FSCustInfoFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FSCustInfoFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "Db", "OracleData", "ExtDlgs", "Buttons", "ImgList", "ToolWin", "Oracle", "Jpeg", "SBCustomer", "sboapiDataModuleImpl", "UnitFrmZoom", "P_DataMod_Unit", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TCustomerInfoForm", "TForm", {"tabcontrol": {"name": "TabControl", "type": "TTabControl"}, "custinfodata": {"name": "CustInfoData", "type": "TOracleDataSet"}, "custinfo": {"name": "CustInfo", "type": "TDataSource"}, "openpicturedlg": {"name": "OpenPictureDlg", "type": "TOpenPictureDialog"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "odscustimages": {"name": "ODSCustImages", "type": "TOracleDataSet"}, "dscustimages": {"name": "DSCustImages", "type": "TDataSource"}, "odscustimagesid": {"name": "ODSCustImagesID", "type": "TFloatField"}, "odscustimagesphoto": {"name": "ODSCustImagesPHOTO", "type": "TBlobField"}, "odscustimagescustsign": {"name": "ODSCustImagesCUSTSIGN", "type": "TBlobField"}, "odscustimagesstamp": {"name": "ODSCustImagesSTAMP", "type": "TBlobField"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "edit19": {"name": "Edit19", "type": "TDBLookupComboBox"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "sb_custinfo": {"name": "sb_custInfo", "type": "TOraclePackage"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "tdedit4": {"name": "TDEdit4", "type": "TDateTimePicker"}, "tdedit18": {"name": "TDEdit18", "type": "TDateTimePicker"}, "passdeps": {"name": "passdeps", "type": "TDataSource"}, "odspassdeps": {"name": "odsPassDeps", "type": "TOracleDataSet"}, "custinfodataid": {"name": "CustInfoDataID", "type": "TFloatField"}, "custinfodataidcust": {"name": "CustInfoDataIDCUST", "type": "TFloatField"}, "custinfodatasoname": {"name": "CustInfoDataSONAME", "type": "TWideStringField"}, "custinfodataname": {"name": "CustInfoDataNAME", "type": "TWideStringField"}, "custinfodatalastname": {"name": "CustInfoDataLASTNAME", "type": "TWideStringField"}, "custinfodatabirthday": {"name": "CustInfoDataBIRTHDAY", "type": "TDateTimeField"}, "custinfodatabirthplace": {"name": "CustInfoDataBIRTHPLACE", "type": "TWideStringField"}, "custinfodatapasser": {"name": "CustInfoDataPASSER", "type": "TWideStringField"}, "custinfodatapaspnum": {"name": "CustInfoDataPASPNUM", "type": "TWideStringField"}, "custinfodatapaspdate": {"name": "CustInfoDataPASPDATE", "type": "TDateTimeField"}, "custinfodatapaspplace": {"name": "CustInfoDataPASPPLACE", "type": "TWideStringField"}, "custinfodatacity": {"name": "CustInfoDataCITY", "type": "TWideStringField"}, "custinfodataaddress": {"name": "CustInfoDataADDRESS", "type": "TWideStringField"}, "custinfodataworkplace": {"name": "CustInfoDataWORKPLACE", "type": "TWideStringField"}, "custinfodataphone_w": {"name": "CustInfoDataPHONE_W", "type": "TWideStringField"}, "custinfodataphone_h": {"name": "CustInfoDataPHONE_H", "type": "TWideStringField"}, "custinfodataphone_m": {"name": "CustInfoDataPHONE_M", "type": "TWideStringField"}, "custinfodatae_mail": {"name": "CustInfoDataE_MAIL", "type": "TWideStringField"}, "custinfodataurl": {"name": "CustInfoDataURL", "type": "TWideStringField"}, "custinfodatarecomendation": {"name": "CustInfoDataRECOMENDATION", "type": "TWideStringField"}, "custinfodatagaranted": {"name": "CustInfoDataGARANTED", "type": "TWideStringField"}, "custinfodataotv_passport": {"name": "CustInfoDataOTV_PASSPORT", "type": "TWideStringField"}, "custinfodataotv_issued": {"name": "CustInfoDataOTV_ISSUED", "type": "TWideStringField"}, "custinfodataotv_isdate": {"name": "CustInfoDataOTV_ISDATE", "type": "TWideStringField"}, "custinfodatanote": {"name": "CustInfoDataNOTE", "type": "TWideStringField"}, "custinfodatawork": {"name": "CustInfoDataWORK", "type": "TWideStringField"}, "label1": {"name": "Label1", "type": "TLabel"}, "fill_edit": {"name": "Fill_Edit", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "image2": {"name": "Image2", "type": "TImage"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "image3": {"name": "Image3", "type": "TImage"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "image1": {"name": "Image1", "type": "TImage"}, "kartopen": {"name": "KartOpen", "type": "Boolean"}}, {});
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
    const $t1 = (await $.wobj(C, "CustInfoData"));
    if ($.truthy($.eq((await $.wv([$t1], "RecordCount", C, false)), 0))) {
      await $.mcall((await $.wv([$t1], "ToolButton2", C, false)), "Click", []);
    }
    await $.stmt($.wcall([$t1], "GetPath", [], C));
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["CustomerID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomerInfoForm", "CustInfoDataAfterOpen", async function CustInfoDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCust"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Customers")), "FieldByName", ["ID"])), "AsInteger")));
  {
    const $t2 = L0["dataset"];
    const $t3 = (await $.wv([$t2], "TabControl", C, false));
    await $.mcall((await $.wv([$t2, $t3], "Tabs", C, false)), "Clear", []);
    { const $t4 = $.sub((await $.wv([$t2, $t3], "RecordCount", C, false)), 1);
      await $.wset([$t2, $t3], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t2, $t3], "Index", $.succ((await $.wv([$t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        await $.stmt((await $.mcall((await $.wv([$t2, $t3], "Tabs", C, false)), "Add", [(await $.wcall([$t2, $t3], "Format", ["Kart N-%d", [(await $.wv([$t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])));
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t2, $t3], "First", [], C));
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
  { const $t6 = L0["action"];
    if ($.eq($t6, "I")) {
      {
        const $t7 = L0["sender"];
        const $t8 = (await $.wv([$t7], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false));
        await $.wset([$t7, $t8], "Name", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Name"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "LastName", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["LastName"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "SurName", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["SoName"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "BirthDate", (await $.wcall([$t7, $t8], "Trunc", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["BirthDay"], C)), "AsDateTime"))], C)), C);
        await $.wset([$t7, $t8], "BirthPlace", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["BirthPlace"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "Address", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Address"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "City", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["City"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "WorkPlace", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["WorkPlace"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "PhoneWork", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Phone_W"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "PhoneHome", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Phone_H"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "PhoneCelular", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Phone_M"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "Email", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["E_Mail"], C)), "AsString")), C);
        await $.wset([$t7, $t8], "Url", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Url"], C)), "AsString")), C);
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
  await $.stmt((await $.mcall((await $.v(C, "sb_custInfo")), "CallProcedure", ["add_custinfo", ["vidcust", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Customers")), "FieldByName", ["ID"])), "AsInteger"))]])));
  {
    const $t9 = (await $.wobj(C, "TabControl"));
    const $t10 = (await $.wv([$t9], "CustInfoData", C, false));
    await $.stmt($.wcall([$t9, $t10], "Refresh", [], C));
    await $.wset([$t9, $t10], "RecNo", (await $.wv([$t9, $t10], "RecordCount", C, false)), C);
    await $.wset([$t9, $t10], "index", (await $.wv([$t9, $t10], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t9, $t10], "TabIndex", (await $.mcall((await $.wv([$t9, $t10], "Tabs", C, false)), "Add", [(await $.wcall([$t9, $t10], "Format", ["Kart N-%d", [(await $.wv([$t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])), C);
  }
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "sb_custInfo")), "CallProcedure", ["del_custinfo", ["v_id", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["ID"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "CustInfoData")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "TabControl")), "Tabs")), "Clear", []);
  { const $t11 = $.sub((await $.mv((await $.v(C, "CustInfoData")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["index"] = $.succ(L0["index"], 1); }
      $t12 = false;
      if (!($.ord(L0["index"]) <= $.ord($t11))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TabControl")), "Tabs")), "Add", [(await $.call(C, "Format", ["Kart N-%d", [L0["index"]]]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "CustInfoData")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "TDEdit4")), "Date"))])));
    await $.mset((await $.v(C, "Edit18")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "TDEdit18")), "Date"))])));
    await $.stmt((await $.mcall((await $.v(C, "sb_custInfo")), "CallProcedure", ["upd_custinfo", ["vid", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["ID"])), "AsInteger")), "vidcust", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCust"])), "AsInteger")), "vName", (await $.mv((await $.v(C, "Edit1")), "Text")), "vLastName", (await $.mv((await $.v(C, "Edit2")), "Text")), "vSoName", (await $.mv((await $.v(C, "Edit3")), "Text")), "vBirthDay", (await $.mv((await $.v(C, "Edit4")), "Text")), "vBirthPlace", (await $.mv((await $.v(C, "Edit5")), "Text")), "vAddress", (await $.mv((await $.v(C, "Edit6")), "Text")), "vCity", (await $.mv((await $.v(C, "Edit7")), "Text")), "vWorkPlace", (await $.mv((await $.v(C, "Edit8")), "Text")), "vWork", (await $.mv((await $.v(C, "Edit9")), "Text")), "vPhone_w", (await $.mv((await $.v(C, "Edit12")), "Text")), "vPhone_h", (await $.mv((await $.v(C, "Edit11")), "Text")), "vPhone_m", (await $.mv((await $.v(C, "Edit10")), "Text")), "ve_mail", (await $.mv((await $.v(C, "Edit13")), "Text")), "vurl", (await $.mv((await $.v(C, "Edit14")), "Text")), "vGaranted", (await $.mv((await $.v(C, "Edit15")), "Text")), "vPasSer", (await $.mv((await $.v(C, "Edit16")), "Text")), "vPaspNum", (await $.mv((await $.v(C, "Edit17")), "Text")), "vPaspDate", (await $.mv((await $.v(C, "Edit18")), "Text")), "vPaspPlace", (await $.mv((await $.v(C, "Edit19")), "Text")), "vNote", (await $.mv((await $.v(C, "Memo1")), "Text"))]])));
    await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
    try {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["PHOTO"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["CUSTSIGN"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["STAMP"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    } catch ($t13) {
      $.rethrowControl($t13);
      $.handled($t13);
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
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      await $.stmt((await $.call(C, "showmessage", [L0["exts"]])));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t14) {
      $.rethrowControl($t14);
      $.handled($t14);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "create"));
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
    } catch ($t15) {
      $.rethrowControl($t15);
      $.handled($t15);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "create"));
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
    } catch ($t16) {
      $.rethrowControl($t16);
      $.handled($t16);
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
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["name"])), "AsString")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["lastname"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["soname"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["BIRTHDAY"])), "AsString")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["BIRTHPLACE"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Address"])), "AsString")));
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["City"])), "AsString")));
  await $.mset((await $.v(C, "Edit8")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["WorkPlace"])), "AsString")));
  await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Work"])), "AsString")));
  await $.mset((await $.v(C, "Edit10")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_m"])), "AsString")));
  await $.mset((await $.v(C, "Edit11")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_h"])), "AsString")));
  await $.mset((await $.v(C, "Edit12")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_w"])), "AsString")));
  await $.mset((await $.v(C, "Edit13")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["e_mail"])), "AsString")));
  await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["url"])), "AsString")));
  await $.mset((await $.v(C, "Edit15")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Garanted"])), "AsString")));
  await $.mset((await $.v(C, "Edit16")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PasSer"])), "AsString")));
  await $.mset((await $.v(C, "Edit17")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspNum"])), "AsString")));
  await $.mset((await $.v(C, "Edit18")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspDate"])), "AsString")));
  await $.mset((await $.v(C, "Edit19")), "keyvalue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspPlace"])), "AsString")));
  await $.mset((await $.v(C, "Memo1")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Note"])), "AsString")));
  try {
    await $.mset((await $.v(C, "TDEdit4")), "Date", (await $.call(C, "strtodate", [(await $.mv((await $.v(C, "Edit4")), "Text"))])));
    await $.mset((await $.v(C, "TDEdit18")), "Date", (await $.call(C, "strtodate", [(await $.mv((await $.v(C, "Edit18")), "Text"))])));
  } catch ($t17) {
    $.rethrowControl($t17);
    $.handled($t17);
    await $.mset((await $.v(C, "TDEdit4")), "Date", (await $.v(C, "Date")));
    await $.mset((await $.v(C, "TDEdit18")), "Date", (await $.v(C, "Date")));
  }
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesPHOTO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesPHOTO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t18) => { L0["f"] = $t18; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t20) => { L0["f"] = $t20; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t21) => { L0["f"] = $t21; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t22) => { L0["f"] = $t22; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t23) => { L0["f"] = $t23; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t24) => { L0["f"] = $t24; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t25) => { L0["f"] = $t25; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesSTAMP")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesSTAMP")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t26) => { L0["f"] = $t26; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t27) => { L0["f"] = $t27; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t28) => { L0["f"] = $t28; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t29) => { L0["f"] = $t29; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
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
  return U;
}

// Generated from co_info_unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("co_info_unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "Oracle", "OracleData", "ImgList", "ExtDlgs", "ComCtrls", "Jpeg", "Buttons", "StdCtrls", "ExtCtrls", "sboapiDataModuleImpl", "CO_datamod_impl", "UnitFrmZoom"]);
  const C = [U];
  U.defClass("TCO_Infoform", "TForm", {"scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "image2": {"name": "Image2", "type": "TImage"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "image3": {"name": "Image3", "type": "TImage"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "tabcontrol": {"name": "TabControl", "type": "TTabControl"}, "scrollbox2": {"name": "ScrollBox2", "type": "TScrollBox"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "image4": {"name": "Image4", "type": "TImage"}, "bitbtn7": {"name": "BitBtn7", "type": "TBitBtn"}, "bitbtn8": {"name": "BitBtn8", "type": "TBitBtn"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "image5": {"name": "Image5", "type": "TImage"}, "bitbtn9": {"name": "BitBtn9", "type": "TBitBtn"}, "bitbtn10": {"name": "BitBtn10", "type": "TBitBtn"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "edit20": {"name": "Edit20", "type": "TEdit"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "edit21": {"name": "Edit21", "type": "TEdit"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "edit22": {"name": "Edit22", "type": "TEdit"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "edit23": {"name": "Edit23", "type": "TEdit"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "edit24": {"name": "Edit24", "type": "TEdit"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "edit25": {"name": "Edit25", "type": "TEdit"}, "panel36": {"name": "Panel36", "type": "TPanel"}, "edit26": {"name": "Edit26", "type": "TEdit"}, "panel37": {"name": "Panel37", "type": "TPanel"}, "edit27": {"name": "Edit27", "type": "TEdit"}, "panel38": {"name": "Panel38", "type": "TPanel"}, "edit28": {"name": "Edit28", "type": "TEdit"}, "panel39": {"name": "Panel39", "type": "TPanel"}, "edit29": {"name": "Edit29", "type": "TEdit"}, "panel40": {"name": "Panel40", "type": "TPanel"}, "edit30": {"name": "Edit30", "type": "TEdit"}, "panel41": {"name": "Panel41", "type": "TPanel"}, "edit31": {"name": "Edit31", "type": "TEdit"}, "panel42": {"name": "Panel42", "type": "TPanel"}, "edit32": {"name": "Edit32", "type": "TEdit"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "edit33": {"name": "Edit33", "type": "TEdit"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "edit34": {"name": "Edit34", "type": "TEdit"}, "panel45": {"name": "Panel45", "type": "TPanel"}, "image6": {"name": "Image6", "type": "TImage"}, "bitbtn11": {"name": "BitBtn11", "type": "TBitBtn"}, "bitbtn12": {"name": "BitBtn12", "type": "TBitBtn"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel46": {"name": "Panel46", "type": "TPanel"}, "edit35": {"name": "Edit35", "type": "TEdit"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "edit36": {"name": "Edit36", "type": "TEdit"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "edit37": {"name": "Edit37", "type": "TEdit"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "edit38": {"name": "Edit38", "type": "TEdit"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "openpicturedlg": {"name": "OpenPictureDlg", "type": "TOpenPictureDialog"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dscustimages": {"name": "DSCustImages", "type": "TDataSource"}, "odscustimages": {"name": "ODSCustImages", "type": "TOracleDataSet"}, "odscustimagesid": {"name": "ODSCustImagesID", "type": "TFloatField"}, "sb_custinfo": {"name": "sb_custInfo", "type": "TOraclePackage"}, "custinfodata": {"name": "CustInfoData", "type": "TOracleDataSet"}, "custinfodataid": {"name": "CustInfoDataID", "type": "TFloatField"}, "custinfodataidcust": {"name": "CustInfoDataIDCUST", "type": "TFloatField"}, "custinfodatasoname": {"name": "CustInfoDataSONAME", "type": "TStringField"}, "custinfodataname": {"name": "CustInfoDataNAME", "type": "TStringField"}, "custinfodatalastname": {"name": "CustInfoDataLASTNAME", "type": "TStringField"}, "custinfodatabirthday": {"name": "CustInfoDataBIRTHDAY", "type": "TDateTimeField"}, "custinfodatabirthplace": {"name": "CustInfoDataBIRTHPLACE", "type": "TStringField"}, "custinfodatapasser": {"name": "CustInfoDataPASSER", "type": "TStringField"}, "custinfodatapaspdate": {"name": "CustInfoDataPASPDATE", "type": "TDateTimeField"}, "custinfodatapaspplace": {"name": "CustInfoDataPASPPLACE", "type": "TStringField"}, "custinfodatacity": {"name": "CustInfoDataCITY", "type": "TStringField"}, "custinfodataaddress": {"name": "CustInfoDataADDRESS", "type": "TStringField"}, "custinfodataworkplace": {"name": "CustInfoDataWORKPLACE", "type": "TStringField"}, "custinfodataphone_w": {"name": "CustInfoDataPHONE_W", "type": "TStringField"}, "custinfodataphone_h": {"name": "CustInfoDataPHONE_H", "type": "TStringField"}, "custinfodataphone_m": {"name": "CustInfoDataPHONE_M", "type": "TStringField"}, "custinfodatae_mail": {"name": "CustInfoDataE_MAIL", "type": "TStringField"}, "custinfodataurl": {"name": "CustInfoDataURL", "type": "TStringField"}, "custinfodatarecomendation": {"name": "CustInfoDataRECOMENDATION", "type": "TStringField"}, "custinfodatagaranted": {"name": "CustInfoDataGARANTED", "type": "TStringField"}, "custinfodataotv_passport": {"name": "CustInfoDataOTV_PASSPORT", "type": "TStringField"}, "custinfodataotv_issued": {"name": "CustInfoDataOTV_ISSUED", "type": "TStringField"}, "custinfodataotv_isdate": {"name": "CustInfoDataOTV_ISDATE", "type": "TStringField"}, "custinfodatanote": {"name": "CustInfoDataNOTE", "type": "TStringField"}, "custinfodatawork": {"name": "CustInfoDataWORK", "type": "TStringField"}, "custinfodatapaspnum": {"name": "CustInfoDataPASPNUM", "type": "TFloatField"}, "custinfo": {"name": "CustInfo", "type": "TDataSource"}, "kartopen": {"name": "KartOpen", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("CO_Infoform", null, "TCO_Infoform");
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
  U.method("TCO_InfoForm", "ViewCustInfo", async function ViewCustInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"customerid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["customerid"]);
  {
    const $t1 = (await $.v(C, "CO_Datamod"));
    const $t2 = (await $.wv([$t1], "CustInfoData", C, false));
    await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CustomerID", (await $.wv([$t1, $t2], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
      await $.mcall((await $.wv([$t1, $t2], "SpeedButton1", C, false)), "Click", []);
    }
    await $.stmt($.wcall([$t1, $t2], "GetPath", [], C));
    await $.stmt($.wcall([$t1, $t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["CustomerID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCO_Infoform", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Infoform", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Infoform", "BitBtn10Click", async function BitBtn10Click(Self, p0) {
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
  U.method("TCO_Infoform", "BitBtn9Click", async function BitBtn9Click(Self, p0) {
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
    } catch ($t3) {
      $.rethrowControl($t3);
      $.handled($t3);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Infoform", "BitBtn8Click", async function BitBtn8Click(Self, p0) {
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
  U.method("TCO_Infoform", "BitBtn7Click", async function BitBtn7Click(Self, p0) {
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
    } catch ($t4) {
      $.rethrowControl($t4);
      $.handled($t4);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Infoform", "BitBtn12Click", async function BitBtn12Click(Self, p0) {
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
  U.method("TCO_Infoform", "BitBtn11Click", async function BitBtn11Click(Self, p0) {
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
    } catch ($t5) {
      $.rethrowControl($t5);
      $.handled($t5);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Infoform", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
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

// Generated from finger.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("finger", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "StdCtrls", "DBCtrls", "Grids", "DBGrids", "AdministrationMainForm", "AdministrationDataModule", "bsdkdll", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("Tfingers", "TForm", {"logmemo": {"name": "LogMemo", "type": "TMemo"}, "save2dbbutton": {"name": "Save2DbButton", "type": "TButton"}, "takesamplebutton": {"name": "TakeSampleButton", "type": "TButton"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "label1": {"name": "Label1", "type": "TLabel"}, "oracledataset12": {"name": "OracleDataSet12", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2test": {"name": "OracleDataSet2TEST", "type": "TFloatField"}, "oracledataset12id": {"name": "OracleDataSet12ID", "type": "TFloatField"}, "oracledataset12type": {"name": "OracleDataSet12TYPE", "type": "TWideStringField"}, "oracledataset12obj": {"name": "OracleDataSet12OBJ", "type": "TWideStringField"}, "oracledataset12createdate": {"name": "OracleDataSet12CREATEDATE", "type": "TDateTimeField"}, "oracledataset12description": {"name": "OracleDataSet12DESCRIPTION", "type": "TWideStringField"}, "oracledataset12fullname": {"name": "OracleDataSet12FULLNAME", "type": "TWideStringField"}, "oracledataset12phone": {"name": "OracleDataSet12PHONE", "type": "TWideStringField"}, "oracledataset12classid": {"name": "OracleDataSet12CLASSID", "type": "TFloatField"}, "oracledataset12filialid": {"name": "OracleDataSet12FILIALID", "type": "TFloatField"}, "oracledataset12advtype": {"name": "OracleDataSet12ADVTYPE", "type": "TFloatField"}, "oracledataset12sysuserid": {"name": "OracleDataSet12SYSUSERID", "type": "TFloatField"}, "oracledataset12user_first_name": {"name": "OracleDataSet12USER_FIRST_NAME", "type": "TWideStringField"}, "oracledataset12user_last_name": {"name": "OracleDataSet12USER_LAST_NAME", "type": "TWideStringField"}, "oracledataset12user_middle_name": {"name": "OracleDataSet12USER_MIDDLE_NAME", "type": "TWideStringField"}, "oracledataset12user_adress": {"name": "OracleDataSet12USER_ADRESS", "type": "TWideStringField"}, "oracledataset12user_phone": {"name": "OracleDataSet12USER_PHONE", "type": "TWideStringField"}, "oracledataset12finger": {"name": "OracleDataSet12FINGER", "type": "TBlobField"}, "oracledataset12finger2": {"name": "OracleDataSet12FINGER2", "type": "TBlobField"}, "oracledataset12finger3": {"name": "OracleDataSet12FINGER3", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "image1": {"name": "Image1", "type": "TDBImage"}, "button1": {"name": "Button1", "type": "TButton"}, "oracledataset1username": {"name": "OracleDataSet1USERNAME", "type": "TWideStringField"}, "oracledataset1finger": {"name": "OracleDataSet1FINGER", "type": "TBlobField"}, "oracledataset1finger2": {"name": "OracleDataSet1FINGER2", "type": "TBlobField"}, "pscanner": {"name": "pScanner", "type": "Pointer"}, "plastscannedimpression": {"name": "pLastScannedImpression", "type": "Pointer"}, "flasttemplate": {"name": "FLastTemplate", "type": "Pointer"}, "fdbdir": {"name": "FDBDir", "type": "String"}, "filename": {"name": "filename", "type": "String"}}, {});
  U.init(async () => {
    U.var_("fingers", null, "Tfingers");
  });
  U.func("FreeTemplate", async function FreeTemplate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "flasttemplate": null};
  if ($.truthy(($.ne(L0["flasttemplate"], null)))) {
    await $.stmt((await $.call(C, "BSDK_Destroy_Object", [L0["flasttemplate"]])));
    L0["flasttemplate"] = null;
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ScanImage", async function ScanImage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pscanner": $.copyArg(p0), result: null, "pimage": null, "expressquality": 0, "res": 0};
  await $.fixArgs(L0, ["pscanner"]);
  L0["expressquality"] = 0;
  L0["pimage"] = null;
  while ($.truthy(($.lt(L0["expressquality"], 20)))) {
    if ($.truthy(($.ne(L0["pimage"], null)))) {
      await $.stmt((await $.call(C, "BSDK_Destroy_Object", [L0["pimage"]])));
    }
    L0["res"] = (await $.call(C, "Bsdk_Scanner_AcquireImage", [L0["pscanner"], L0["pimage"]]));
    await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
    L0["expressquality"] = (await $.call(C, "Bsdk_Image_GetExpressQuality", [L0["pimage"], 8]));
    await $.tick();
  }
  L0["result"] = L0["pimage"];
  return L0.result;
}, {"params": ["pScanner"], "kind": "function", "ptypes": ["pointer"]});
  U.func("Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "res": 0, "pdevicelist": null, "pdevicedescriptorptr": null, "pscanner": null};
  L0["res"] = (await $.call(C, "bsdk_License_Create", [(await $.v(C, "BSDK_LICENSE_TYPE_ALL"))]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "BSDK_DeviceList_Create", [L0["pdevicelist"], (await $.v(C, "Bsdk_Device_Type_Scanner_Any"))]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  if ($.truthy(($.eq((await $.call(C, "BSDK_DeviceList_GetSize", [L0["pdevicelist"]])), 0)))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Scanner was not found"])));
  }
  L0["pdevicedescriptorptr"] = (await $.call(C, "BSDK_DeviceList_GetDeviceDescriptor", [L0["pdevicelist"], 0]));
  L0["res"] = (await $.call(C, "Bsdk_Scanner_Create", [L0["pscanner"], L0["pdevicedescriptorptr"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["result"] = L0["pscanner"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("LogMessage", async function LogMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["msg"]);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "fingers")), "LogMemo")), "Lines")), "Add", [L0["msg"]])));
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["String"]});
  U.method("Tfingers", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["t", "U"])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["cls", (await $.mv((await $.mv((await $.v(C, "AdministrationForm")), "edUsInfName")), "text"))])));
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfingers", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Label1")), "Caption", (await $.mv((await $.mv((await $.v(C, "AdministrationForm")), "edUsInfName")), "text")));
  await $.set(C, "pScanner", null);
  await $.stmt((await $.call(C, "LogMessage", ["Initializing..."])));
  await $.stmt((await $.call(C, "Repaint", [])));
  await $.set(C, "FDBDir", $.add((await $.call(C, "GetCurrentDir", [])), "\\DB"));
  await $.set(C, "pScanner", (await $.call(C, "Initialize", [])));
  await $.stmt((await $.call(C, "LogMessage", ["Ready!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfingers", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["nam", (await $.mv((await $.mv((await $.v(C, "AdministrationForm")), "edUsInfName")), "text"))])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfingers", "Save2DbButtonClick", async function Save2DbButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stream2": null, "stream1": null, "res": 0, "templatelength": 0, "buffertemplate": '', "filename": '', "ptransfered": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Save finger?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.call(C, "LogMessage", ["Storing to database..."])));
    L0["templatelength"] = (await $.call(C, "Bsdk_Template_GetSize", [(await $.v(C, "FLastTemplate"))]));
    await $.stmt((await $.call(C, "GetMem", [L0["buffertemplate"], L0["templatelength"]])));
    L0["res"] = (await $.call(C, "Bsdk_Template_Save", [(await $.v(C, "FLastTemplate")), L0["buffertemplate"], L0["templatelength"], L0["ptransfered"]]));
    await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
    await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
    L0["filename"] = (await $.mv((await $.v(C, "OracleDataSet2TEST")), "AsString"));
    {
      const $t1 = (await $.mcall((await $.v(C, "TFileStream")), "Create", [$.add($.add($.add((await $.v(C, "FDBDir")), "\\"), L0["filename"]), ".bin"), (await $.v(C, "fmCreate"))]));
      try {
        await $.stmt((await $.wcall([$t1], "WriteBuffer", [(await $.wcall([$t1], "PChar", [(await $.wv([$t1], "bufferTemplate", { get: async () => L0["buffertemplate"], set: async (v) => { L0["buffertemplate"] = v; }, local: true }, false))], C)), (await $.wv([$t1], "templateLength", { get: async () => L0["templatelength"], set: async (v) => { L0["templatelength"] = v; }, local: true }, false))], C)));
      } finally {
        await $.stmt($.wcall([$t1], "Free", [], C));
      }
    }
    L0["stream1"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [$.add($.add($.add((await $.v(C, "FDBDir")), "\\"), L0["filename"]), ".bin"), (await $.v(C, "fmOpenRead"))]));
    L0["stream2"] = (await $.mcall((await $.v(C, "OracleDataSet1")), "CreateBlobStream", [(await $.mcall((await $.v(C, "OracleDataSet1")), "fieldbyname", ["finger2"])), (await $.v(C, "bmWrite"))]));
    await $.stmt((await $.mcall(L0["stream2"], "CopyFrom", [L0["stream1"], (await $.mv(L0["stream1"], "Size"))])));
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => L0["stream1"], async ($t2) => { L0["stream1"] = $t2; })])));
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => L0["stream2"], async ($t3) => { L0["stream2"] = $t3; })])));
    await $.mcall((await $.v(C, "OracleDataSet1")), "Post", []);
    await $.stmt((await $.call(C, "DeleteFile", [$.add($.add($.add((await $.v(C, "FDBDir")), "\\"), L0["filename"]), ".bin")])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfingers", "TakeSampleButtonClick", async function TakeSampleButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0, "bmp": '', "bmpsize": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "pimageset", "finger.tfingers.takesamplebuttonclick.pimageset", async () => null);
  await $.staticConst(L0, "pimageprocessor", "finger.tfingers.takesamplebuttonclick.pimageprocessor", async () => null);
  await $.staticConst(L0, "ptemp", "finger.tfingers.takesamplebuttonclick.ptemp", async () => null);
  await $.set(C, "filename", $.add($.add($.add((await $.v(C, "FDBDir")), "\\"), (await $.mv((await $.v(C, "OracleDataSet2TEST")), "AsString"))), ".bmp"));
  await $.stmt((await $.call(C, "LogMessage", ["Acquiring fingerprint..."])));
  await $.set(C, "pLastScannedImpression", (await $.call(C, "ScanImage", [(await $.v(C, "pScanner"))])));
  await $.stmt((await $.call(C, "GetMem", [L0["bmp"], $.mul(500, 500)])));
  await $.stmt((await $.call(C, "CheckResult", [(await $.call(C, "Bsdk_Image_Save", [(await $.v(C, "pLastScannedImpression")), L0["bmp"], $.mul(500, 500), L0["bmpsize"]]))])));
  {
    const $t4 = (await $.mcall((await $.v(C, "TFileStream")), "Create", [(await $.v(C, "filename")), (await $.v(C, "fmCreate"))]));
    try {
      await $.stmt((await $.wcall([$t4], "WriteBuffer", [(await $.wcall([$t4], "PChar", [(await $.wv([$t4], "Bmp", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false))], C)), (await $.wv([$t4], "BmpSize", { get: async () => L0["bmpsize"], set: async (v) => { L0["bmpsize"] = v; }, local: true }, false))], C)));
    } finally {
      await $.stmt($.wcall([$t4], "Free", [], C));
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Bitmap")), "LoadFromFile", [(await $.v(C, "filename"))])));
  await $.stmt((await $.call(C, "FreeTemplate", [])));
  L0["res"] = (await $.call(C, "Bsdk_ImageSet_Create", [L0["pimageset"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_ImageSet_AddImage", [L0["pimageset"], (await $.v(C, "pLastScannedImpression")), 0]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_ImageProcessor_Create", [L0["pimageprocessor"], 0]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_ImageProcessor_CreateTemplateFromImageSet", [L0["pimageprocessor"], L0["pimageset"], L0["ptemp"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  await $.stmt((await $.call(C, "BSDK_Destroy_Object", [L0["pimageprocessor"]])));
  await $.stmt((await $.call(C, "BSDK_Destroy_Object", [L0["pimageset"]])));
  await $.set(C, "FLastTemplate", L0["ptemp"]);
  await $.stmt((await $.call(C, "LogMessage", ["Done!"])));
  await $.stmt((await $.call(C, "DeleteFile", [(await $.v(C, "filename"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

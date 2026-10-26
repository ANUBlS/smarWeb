// Generated from Fingerprint.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Fingerprint", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "sboapiDataModuleImpl", "BsdkDll", "SbTranslateProc"]);
  const C = [U];
  U.defClass("TFinger", "TForm", {"image1": {"name": "Image1", "type": "TImage"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "takesamplebutton": {"name": "TakeSampleButton", "type": "TButton"}, "save2dbbutton": {"name": "Save2DbButton", "type": "TButton"}, "searchindbbutton": {"name": "SearchInDbButton", "type": "TButton"}, "logmemo": {"name": "LogMemo", "type": "TMemo"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "pscanner": {"name": "pScanner", "type": "Pointer"}, "plastscannedimpression": {"name": "pLastScannedImpression", "type": "Pointer"}, "flasttemplate": {"name": "FLastTemplate", "type": "Pointer"}, "fdbdir": {"name": "FDBDir", "type": "String"}}, {});
  U.init(async () => {
    U.var_("Finger", null, "TFinger");
  });
  U.func("ScanImage", async function ScanImage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pscanner": $.copyArg(p0), result: null, "pimage": null, "expressquality": 0, "res": 0};
  await $.fixArgs(L0, ["pscanner"]);
  L0["expressquality"] = 0;
  L0["pimage"] = null;
  while ($.truthy(($.lt(L0["expressquality"], 20)))) {
    if ($.truthy(($.ne(L0["pimage"], null)))) {
      await $.stmt((await $.call(C, "Bsdk_Destroy_Object", [L0["pimage"]])));
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
  L0["res"] = (await $.call(C, "Bsdk_License_Create", [(await $.v(C, "BSDK_LICENSE_TYPE_ALL"))]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_DeviceList_Create", [L0["pdevicelist"], (await $.v(C, "Bsdk_Device_Type_Scanner_Any"))]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  if ($.truthy(($.eq((await $.call(C, "Bsdk_DeviceList_GetSize", [L0["pdevicelist"]])), 0)))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Scanner was not found"])));
  }
  L0["pdevicedescriptorptr"] = (await $.call(C, "Bsdk_DeviceList_GetDeviceDescriptor", [L0["pdevicelist"], 0]));
  L0["res"] = (await $.call(C, "Bsdk_Scanner_Create", [L0["pscanner"], L0["pdevicedescriptorptr"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["result"] = L0["pscanner"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("LogMessage", async function LogMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["msg"]);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "finger")), "LogMemo")), "Lines")), "Add", [L0["msg"]])));
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFinger", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pScanner", null);
  await $.stmt((await $.call(C, "LogMessage", ["Initializing..."])));
  await $.stmt((await $.call(C, "Repaint", [])));
  await $.set(C, "FDBDir", $.add((await $.call(C, "GetCurrentDir", [])), "\\DB"));
  await $.set(C, "pScanner", (await $.call(C, "Initialize", [])));
  await $.stmt((await $.call(C, "LogMessage", ["Ready!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("FreeTemplate", async function FreeTemplate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "flasttemplate": null};
  if ($.truthy(($.ne(L0["flasttemplate"], null)))) {
    await $.stmt((await $.call(C, "Bsdk_Destroy_Object", [L0["flasttemplate"]])));
    L0["flasttemplate"] = null;
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFinger", "TakeSampleButtonClick", async function TakeSampleButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0, "bmp": '', "bmpsize": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["pimageset"] = null;
  L0["pimageprocessor"] = null;
  L0["ptemp"] = null;
  await $.stmt((await $.call(C, "LogMessage", ["Acquiring fingerprint..."])));
  await $.set(C, "pLastScannedImpression", (await $.call(C, "ScanImage", [(await $.v(C, "pScanner"))])));
  await $.stmt((await $.call(C, "GetMem", [L0["bmp"], $.mul(500, 500)])));
  await $.stmt((await $.call(C, "CheckResult", [(await $.call(C, "Bsdk_Image_Save", [(await $.v(C, "pLastScannedImpression")), L0["bmp"], $.mul(500, 500), L0["bmpsize"]]))])));
  {
    const $t1 = (await $.mcall((await $.v(C, "TFileStream")), "Create", [$.add((await $.v(C, "getcurrentdir")), "\\db\\123.bmp"), (await $.v(C, "fmCreate"))]));
    try {
      await $.stmt((await $.wcall([$t1], "WriteBuffer", [(await $.wcall([$t1], "PChar", [(await $.wv([$t1], "Bmp", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false))], C)), (await $.wv([$t1], "BmpSize", { get: async () => L0["bmpsize"], set: async (v) => { L0["bmpsize"] = v; }, local: true }, false))], C)));
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Bitmap")), "LoadFromFile", ["D:\\123.bmp"])));
  await $.stmt((await $.call(C, "FreeTemplate", [])));
  L0["res"] = (await $.call(C, "Bsdk_ImageSet_Create", [L0["pimageset"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_ImageSet_AddImage", [L0["pimageset"], (await $.v(C, "pLastScannedImpression")), 0]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_ImageProcessor_Create", [L0["pimageprocessor"], 0]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  L0["res"] = (await $.call(C, "Bsdk_ImageProcessor_CreateTemplateFromImageSet", [L0["pimageprocessor"], L0["pimageset"], L0["ptemp"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  await $.stmt((await $.call(C, "Bsdk_Destroy_Object", [L0["pimageprocessor"]])));
  await $.stmt((await $.call(C, "Bsdk_Destroy_Object", [L0["pimageset"]])));
  await $.set(C, "FLastTemplate", L0["ptemp"]);
  await $.stmt((await $.call(C, "DeleteFile", [$.add((await $.v(C, "getcurrentdir")), "\\db\\123.bmp")])));
  await $.stmt((await $.call(C, "LogMessage", ["Done!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFinger", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FreeTemplate", [])));
  if ($.truthy(($.ne((await $.v(C, "pScanner")), null)))) {
    await $.stmt((await $.call(C, "Bsdk_Destroy_Object", [(await $.v(C, "pScanner"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFinger", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFinger", "Save2DbButtonClick", async function Save2DbButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0, "templatelength": 0, "buffertemplate": '', "filename": '', "ptransfered": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LogMessage", ["Storing to database..."])));
  L0["templatelength"] = (await $.call(C, "Bsdk_Template_GetSize", [(await $.v(C, "FLastTemplate"))]));
  await $.stmt((await $.call(C, "GetMem", [L0["buffertemplate"], L0["templatelength"]])));
  L0["res"] = (await $.call(C, "Bsdk_Template_Save", [(await $.v(C, "FLastTemplate")), L0["buffertemplate"], L0["templatelength"], L0["ptransfered"]]));
  await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
  if ($.truthy((await $.call(C, "InputQuery", ["", "Enter file name: ", $.ref(async () => L0["filename"], async ($t2) => { L0["filename"] = $t2; })])))) {
    {
      const $t3 = (await $.mcall((await $.v(C, "TFileStream")), "Create", [$.add($.add($.add((await $.v(C, "FDBDir")), "\\"), L0["filename"]), ".bin"), (await $.v(C, "fmCreate"))]));
      try {
        await $.stmt((await $.wcall([$t3], "WriteBuffer", [(await $.wcall([$t3], "PChar", [(await $.wv([$t3], "bufferTemplate", { get: async () => L0["buffertemplate"], set: async (v) => { L0["buffertemplate"] = v; }, local: true }, false))], C)), (await $.wv([$t3], "templateLength", { get: async () => L0["templatelength"], set: async (v) => { L0["templatelength"] = v; }, local: true }, false))], C)));
      } finally {
        await $.stmt($.wcall([$t3], "Free", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

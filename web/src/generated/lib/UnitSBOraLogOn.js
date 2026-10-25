// Generated from UnitSBOraLogOn.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitSBOraLogOn", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Oracle", "ExtCtrls", "HintBox", "Registry", "DB", "OracleData", "variants", "bsdkdll", "UnitChangePasswordForm"]);
  const C = [U];
  U.defClass("TCheckDataErr", "Exception", {}, {});
  U.defClass("TfmOraSBLogOn", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "edusername": {"name": "edUserName", "type": "TEdit"}, "edpassword": {"name": "edPassword", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "cbdatabase": {"name": "cbDatabase", "type": "TComboBox"}, "hberror": {"name": "hbError", "type": "THintBox"}, "oraclesession1": {"name": "OracleSession1", "type": "TOracleSession"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "label4": {"name": "Label4", "type": "TLabel"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2test": {"name": "OracleDataSet2TEST", "type": "TFloatField"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "tr": {"name": "tr", "type": "TBitBtn"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "pscanner": {"name": "pScanner", "type": "Pointer"}, "plastscannedimpression": {"name": "pLastScannedImpression", "type": "Pointer"}, "flasttemplate": {"name": "FLastTemplate", "type": "Pointer"}, "fdbdir": {"name": "FDBDir", "type": "String"}, "say1": {"name": "say1", "type": "integer"}, "logonusername": {"name": "LogonUsername", "type": "String"}, "logonpassword": {"name": "LogonPassword", "type": "String"}, "logondatabase": {"name": "LogonDatabase", "type": "String"}, "filename": {"name": "filename", "type": "String"}, "say": {"name": "say", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("fmOraSBLogOn", null, "TfmOraSBLogOn");
  });
  U.func("CheckFingerPrint", async function CheckFingerPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"srec": $.copyArg(p0), "ptargettemplate": $.copyArg(p1), result: 0, "res": 0, "ptemplate": null, "buffertemplate": '', "ptransfered": 0, "pmatcher": null, "score": 0};
  await $.fixArgs(L0, ["srec", "ptargettemplate"]);
  await $.stmt((await $.call(C, "GetMem", [L0["buffertemplate"], (await $.mv(L0["srec"], "Size"))])));
  try {
    {
      const $t1 = (await $.mcall((await $.v(C, "TFileStream")), "Create", [$.add($.add((await $.call(C, "GetCurrentDir", [])), "\\DB\\"), (await $.mv(L0["srec"], "Name"))), (await $.v(C, "fmOpenRead"))]));
      try {
        await $.stmt((await $.wcall([$t1], "ReadBuffer", [(await $.wcall([$t1], "PChar", [(await $.wv([$t1], "bufferTemplate", { get: async () => L0["buffertemplate"], set: async (v) => { L0["buffertemplate"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t1], "SRec", { get: async () => L0["srec"], set: async (v) => { L0["srec"] = v; }, local: true }, false)), "Size"))], C)));
      } finally {
        await $.stmt($.wcall([$t1], "Free", [], C));
      }
    }
    L0["res"] = (await $.call(C, "Bsdk_Template_Create", [L0["ptemplate"], 0]));
    await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
    try {
      L0["res"] = (await $.call(C, "Bsdk_Template_Load", [L0["ptemplate"], L0["buffertemplate"], (await $.mv(L0["srec"], "Size")), L0["ptransfered"]]));
      await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
      L0["res"] = (await $.call(C, "Bsdk_Matcher_Create", [L0["pmatcher"], 0, 0]));
      await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
      try {
        L0["res"] = (await $.call(C, "Bsdk_Matcher_Compare", [L0["pmatcher"], L0["ptemplate"], L0["ptargettemplate"], L0["score"]]));
        await $.stmt((await $.call(C, "CheckResult", [L0["res"]])));
      } finally {
        await $.stmt((await $.call(C, "BSDK_Destroy_Object", [L0["pmatcher"]])));
      }
      if ($.truthy($.ne(L0["score"], 0))) {
        L0.result = 1;
      } else {
        L0.result = 0;
        if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Fingerprint is incorrect! Check again?", (await $.v(C, "mtconfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mrno"))))) {
          await $.mcall((await $.v(C, "Application")), "Terminate", []);
        }
      }
    } finally {
      await $.stmt((await $.call(C, "BSDK_Destroy_Object", [L0["ptemplate"]])));
    }
  } finally {
    await $.stmt((await $.call(C, "FreeMem", [L0["buffertemplate"]])));
    await $.stmt((await $.call(C, "DeleteFile", [$.add($.add((await $.call(C, "GetCurrentDir", [])), "\\DB\\"), (await $.mv(L0["srec"], "Name")))])));
  }
  return L0.result;
}, {"params": ["SRec", "pTargetTemplate"], "kind": "function", "ptypes": ["TSearchRec", "Pointer"]});
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
  U.method("TfmOraSBLogOn", "GetTNSNames", async function GetTNSNames(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "k": 0, "n": '', "mem": null};
  L0["gettnsfile"] = $.fn(async function GetTNSFile() {
  const L1 = {result: undefined, "reg": null, "value": ''};
  L1["cval"] = "\\NETWORK\\ADMIN\\tnsnames.ora";
  L1["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
  await $.mset(L1["reg"], "Access", (await $.v(C, "KEY_READ")));
  {
    const $t2 = L1["reg"];
    await $.wset([$t2], "RootKey", (await $.wv([$t2], "HKEY_LOCAL_MACHINE", C, false)), C);
    await $.stmt((await $.wcall([$t2], "OpenKey", ["SOFTWARE\\ORACLE\\KEY_OraDb11g_home1", (await $.wv([$t2], "False", C, false))], C)));
    await $.wset([$t2], "value", (await $.wcall([$t2], "ReadString", ["ORACLE_HOME"], C)), { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true });
    if ($.truthy((await $.wcall([$t2], "FileExists", [$.add((await $.wv([$t2], "value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), (await $.wv([$t2], "cval", { get: async () => L1["cval"], set: async (v) => { L1["cval"] = v; }, local: true }, false)))], C)))) {
      await $.stmt((await $.mcall((await $.wv([$t2], "Mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), "LoadFromFile", [$.add((await $.wv([$t2], "value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), (await $.wv([$t2], "cval", { get: async () => L1["cval"], set: async (v) => { L1["cval"] = v; }, local: true }, false)))])));
    } else {
      await $.stmt((await $.wcall([$t2], "ShowMessage", ["File Not Exists!"], C)));
    }
  }
  return L1.result;
});
  L0["mem"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  await $.stmt($.callv(L0["gettnsfile"], []));
  {
    const $t3 = L0["mem"];
    { const $t4 = $.sub((await $.wv([$t3], "Count", C, false)), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        await $.wset([$t3], "n", (await $.wcall([$t3], "PChar", [(await $.idx((await $.wv([$t3], "mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
        if ($.truthy((await $.and_((await $.and_(($.ne((await $.idx((await $.wv([$t3], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), [0])), "#")), async () => ($.ne((await $.idx((await $.wv([$t3], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), [0])), "")))), async () => ($.ne((await $.idx((await $.wv([$t3], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), [0])), " ")))))) {
          await $.wset([$t3], "k", (await $.wcall([$t3], "Pos", ["=", (await $.idx((await $.wv([$t3], "mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t3], "cbDatabase", C, false)), "items")), "add", [(await $.wcall([$t3], "copy", [(await $.idx((await $.wv([$t3], "mem", { get: async () => L0["mem"], set: async (v) => { L0["mem"] = v; }, local: true }, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), 0, $.sub((await $.wv([$t3], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 2)], C))])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmOraSBLogOn", "CheckData", async function CheckData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  L0["result"] = $.eq(L0["value"], "");
  return L0.result;
}, {"params": ["value"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmOraSBLogOn", "CheckControls", async function CheckControls(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  try {
    if ($.truthy((await $.call(C, "CheckData", [(await $.mv((await $.v(C, "edUserName")), "Text"))])))) {
      throw $.raise((await $.mcall((await $.v(C, "TCheckDataErr")), "Create", ["Enter your username!"])));
    }
    if ($.truthy((await $.call(C, "CheckData", [(await $.mv((await $.v(C, "edPassword")), "Text"))])))) {
      throw $.raise((await $.mcall((await $.v(C, "TCheckDataErr")), "Create", ["Enter your password"])));
    }
    if ($.truthy((await $.call(C, "CheckData", [(await $.mv((await $.v(C, "cbDatabase")), "Text"))])))) {
      throw $.raise((await $.mcall((await $.v(C, "TCheckDataErr")), "Create", ["Enter database!"])));
    }
    L0["result"] = true;
  } catch ($t6) {
    $.rethrowControl($t6);
    if ($.excIs($t6, "TCheckDataErr")) {
      L0["e"] = $.exc($t6);
      await $.stmt((await $.mcall((await $.v(C, "hbError")), "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t6; }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmOraSBLogOn", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "q": 0, "z": 0, "res": 0, "bmp": '', "bmpsize": 0, "srec": null, "expire": '', "expire1": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["pimageset"] = null;
  L0["pimageprocessor"] = null;
  L0["ptemp"] = null;
  L0["expire"] = "ORA-28001";
  await $.set(C, "fmPassChange", (await $.mcall((await $.v(C, "TfmPassChange")), "Create", [Self])));
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "fmPassChange")), "edNewPass")), "Text")), ""))) {
    await $.mset((await $.v(C, "edPassword")), "Text", (await $.mv((await $.mv((await $.v(C, "fmPassChange")), "edNewPass")), "Text")));
  }
  await $.stmt((await $.call(C, "FreeTemplate", [])));
  if ($.truthy(($.ne((await $.v(C, "pScanner")), null)))) {
    await $.stmt((await $.call(C, "BSDK_Destroy_Object", [(await $.v(C, "pScanner"))])));
  }
  {
    const $t7 = (await $.v(C, "OracleSession1"));
    try {
      await $.wset([$t7], "LogonDatabase", (await $.mv((await $.wv([$t7], "cbDatabase", C, false)), "Text")), C);
      await $.wset([$t7], "LogonUsername", (await $.mv((await $.wv([$t7], "edUserName", C, false)), "Text")), C);
      await $.wset([$t7], "LogonPassword", $.add($.add("KLs", (await $.mv((await $.wv([$t7], "edPassword", C, false)), "Text"))), "#1$"), C);
      await $.stmt($.wcall([$t7], "LogOn", [], C));
    } catch ($t8) {
      $.rethrowControl($t8);
      if ($.excIs($t8, "EOracleError")) {
        L0["e"] = $.exc($t8);
        await $.wset([$t7], "expire1", (await $.wcall([$t7], "copy", [(await $.mv((await $.wv([$t7], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), 0, 9], C)), { get: async () => L0["expire1"], set: async (v) => { L0["expire1"] = v; }, local: true });
        await $.stmt((await $.wcall([$t7], "ShowMessage", [(await $.mv((await $.wv([$t7], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
        if ($.truthy($.eq((await $.wv([$t7], "expire", { get: async () => L0["expire"], set: async (v) => { L0["expire"] = v; }, local: true }, false)), (await $.wv([$t7], "expire1", { get: async () => L0["expire1"], set: async (v) => { L0["expire1"] = v; }, local: true }, false))))) {
          await $.wset([$t7], "fmPassChange", (await $.mcall((await $.wv([$t7], "TfmPassChange", C, false)), "Create", [Self])), C);
          await $.mcall((await $.wv([$t7], "fmPassChange", C, false)), "ShowModal", []);
          if ($.truthy($.eq((await $.mv((await $.wv([$t7], "fmPassChange", C, false)), "ModalResult")), (await $.wv([$t7], "mrOk", C, false))))) {
            await $.stmt((await $.wcall([$t7], "SetPassword", [(await $.mv((await $.mv((await $.wv([$t7], "fmPassChange", C, false)), "edNewPass")), "Text"))], C)));
          }
          await $.stmt($.wcall([$t7], "LogOn", [], C));
        }
      }
      else { throw $t8; }
    }
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
  if ($.truthy((await $.and_(($.lt((await $.mv((await $.mcall((await $.v(C, "OracleDataSet4")), "FieldByName", ["ex"])), "asinteger")), 5)), async () => ($.ne((await $.mv((await $.mcall((await $.v(C, "OracleDataSet4")), "FieldByName", ["ex"])), "asstring")), "")))))) {
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add("Şifrənizin bitməsinə ", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet4")), "FieldByName", ["ex"])), "asstring"))), " gün qalıb ! Şifrənizi yeniləyin! ")])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["finger3"])), "asinteger")), 1))) {
    L0["q"] = 0;
  } else {
    L0["q"] = 1;
  }
  if ($.truthy($.eq(L0["q"], 1))) {
    await $.mset((await $.v(C, "Label4")), "Visible", false);
    if ($.truthy($.not((await $.call(C, "CheckControls", []))))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "OracleSession1")), "Connected", false);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "fmPassChange")), "edNewPass")), "Text")), ""))) {
      await $.mset((await $.v(C, "edPassword")), "Text", (await $.mv((await $.mv((await $.v(C, "fmPassChange")), "edNewPass")), "Text")));
    }
    await $.set(C, "LogonUsername", (await $.mv((await $.v(C, "edUserName")), "Text")));
    await $.set(C, "LogonPassword", $.add($.add("KLs", (await $.mv((await $.v(C, "edPassword")), "Text"))), "#1$"));
    await $.set(C, "LogonDatabase", (await $.mv((await $.v(C, "cbDatabase")), "Text")));
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    await $.stmt((await $.call(C, "paint", [])));
    await $.set(C, "pScanner", null);
    await $.mset((await $.v(C, "Label4")), "Visible", true);
    await $.mset((await $.v(C, "label4")), "Caption", "Device is checking");
    await $.stmt((await $.call(C, "paint", [])));
    await $.set(C, "FDBDir", $.add((await $.call(C, "GetCurrentDir", [])), "\\DB"));
    await $.set(C, "pScanner", (await $.call(C, "Initialize", [])));
    await $.mset((await $.v(C, "label4")), "Caption", "barmağınızı yaxınlaşdırın");
    await $.stmt((await $.call(C, "repaint", [])));
    await $.set(C, "filename", $.add((await $.v(C, "FDBDir")), "\\"));
    await $.set(C, "pLastScannedImpression", (await $.call(C, "ScanImage", [(await $.v(C, "pScanner"))])));
    await $.stmt((await $.call(C, "GetMem", [L0["bmp"], $.mul(500, 500)])));
    await $.stmt((await $.call(C, "CheckResult", [(await $.call(C, "Bsdk_Image_Save", [(await $.v(C, "pLastScannedImpression")), L0["bmp"], $.mul(500, 500), L0["bmpsize"]]))])));
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
    await $.mset((await $.v(C, "label4")), "Caption", "Checking with database");
    await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
    await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
    await $.stmt((await $.mcall((await $.mcall((await $.v(C, "OracleDataSet3")), "FieldByName", ["finger2"])), "SaveTofile", [$.add($.add((await $.v(C, "filename")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["test"])), "AsString"))), ".bin")])));
    if ($.truthy($.ne((await $.call(C, "FindFirst", [$.add($.add((await $.v(C, "filename")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["test"])), "AsString"))), ".bin"), (await $.v(C, "faAnyFile")), $.ref(async () => L0["srec"], async ($t9) => { L0["srec"] = $t9; })])), 0))) {
      throw $.raise((await $.mcall((await $.v(C, "EReadError")), "Create", ["Failed to read database"])));
    }
    try {
      do {
        L0["z"] = (await $.call(C, "CheckFingerPrint", [L0["srec"], (await $.v(C, "FLastTemplate"))]));
        await $.tick();
      } while (!$.truthy($.gt((await $.call(C, "FindNext", [$.ref(async () => L0["srec"], async ($t10) => { L0["srec"] = $t10; })])), 0)));
    } finally {
      await $.stmt((await $.call(C, "FindClose", [$.ref(async () => L0["srec"], async ($t11) => { L0["srec"] = $t11; })])));
    }
    if ($.truthy($.eq(L0["z"], 1))) {
      await $.mcall((await $.v(C, "tr")), "Click", []);
    }
    await $.stmt((await $.call(C, "DeleteFile", [$.add($.add((await $.v(C, "filename")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["test"])), "AsString"))), ".bin")])));
    await $.stmt((await $.call(C, "FreeTemplate", [])));
    if ($.truthy(($.ne((await $.v(C, "pScanner")), null)))) {
      await $.stmt((await $.call(C, "BSDK_Destroy_Object", [(await $.v(C, "pScanner"))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmOraSBLogOn", "trClick", async function trClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LogonUsername", (await $.mv((await $.v(C, "edUserName")), "Text")));
  await $.set(C, "LogonPassword", (await $.mv((await $.v(C, "edPassword")), "Text")));
  await $.set(C, "LogonDatabase", (await $.mv((await $.v(C, "cbDatabase")), "Text")));
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmOraSBLogOn", "btCancelClick", async function btCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmOraSBLogOn", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetTNSNames", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmOraSBLogOn", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edUserName")), "Text", (await $.v(C, "LogonUsername")));
  await $.mset((await $.v(C, "edPassword")), "Text", (await $.v(C, "LogonPassword")));
  await $.mset((await $.v(C, "cbDatabase")), "Text", (await $.v(C, "LogonDatabase")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

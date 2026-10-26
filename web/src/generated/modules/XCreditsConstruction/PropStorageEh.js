// Generated from QPropStorageEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("QPropStorageEh", ["QForms", "QControls", "QPropFilerEh", "SysUtils", "Classes", "IniFiles", "TypInfo"]);
  const C = [U];
  U.const("sofUnknown", 0);
  U.const("sofBinary", 1);
  U.const("sofText", 2);
  U.defClass("TPropStorageManagerEh", "TComponent", {"fwriteastext": {"name": "FWriteAsText", "type": "Boolean"}}, {"writeastext": {"name": "WriteAsText", "read": "FWriteAsText", "write": "FWriteAsText"}});
  U.defClass("TIniPropStorageManEh", "TPropStorageManagerEh", {"finifilename": {"name": "FIniFileName", "type": "String"}}, {"inifilename": {"name": "IniFileName", "read": "FIniFileName", "write": "FIniFileName"}, "writeastext": {"name": "WriteAsText"}});
  U.defClass("TPropStorageEh", "TComponent", {"factive": {"name": "FActive", "type": "Boolean"}, "fafterloadprops": {"name": "FAfterLoadProps", "type": "TNotifyEvent"}, "faftersaveprops": {"name": "FAfterSaveProps", "type": "TNotifyEvent"}, "fbeforeloadprops": {"name": "FBeforeLoadProps", "type": "TNotifyEvent"}, "fbeforesaveprops": {"name": "FBeforeSaveProps", "type": "TNotifyEvent"}, "fdestroying": {"name": "FDestroying", "type": "Boolean"}, "fonreadprop": {"name": "FOnReadProp", "type": "TReadPropEventEh"}, "fonwritecustomprops": {"name": "FOnWriteCustomProps", "type": "TWriteCustomPropsEventEh"}, "fonsaveplacement": {"name": "FOnSavePlacement", "type": "TNotifyEvent"}, "fsaved": {"name": "FSaved", "type": "Boolean"}, "fsaveformclosequery": {"name": "FSaveFormCloseQuery", "type": "TCloseQueryEvent"}, "fsaveformdestroy": {"name": "FSaveFormDestroy", "type": "TNotifyEvent"}, "fsaveformshow": {"name": "FSaveFormShow", "type": "TNotifyEvent"}, "fsection": {"name": "FSection", "type": "String"}, "fstoragemanager": {"name": "FStorageManager", "type": "TPropStorageManagerEh"}, "fstoredprops": {"name": "FStoredProps", "type": "TPropertyNamesEh"}}, {"form": {"name": "Form", "read": "GetForm"}, "active": {"name": "Active", "read": "FActive", "write": "FActive"}, "section": {"name": "Section", "read": "GetSection", "write": "SetSection"}, "storagemanager": {"name": "StorageManager", "read": "FStorageManager", "write": "SetStorageManager"}, "storedprops": {"name": "StoredProps", "read": "FStoredProps", "write": "SetStoredProps"}, "afterloadprops": {"name": "AfterLoadProps", "read": "FAfterLoadProps", "write": "FAfterLoadProps"}, "aftersaveprops": {"name": "AfterSaveProps", "read": "FAfterSaveProps", "write": "FAfterSaveProps"}, "beforeloadprops": {"name": "BeforeLoadProps", "read": "FBeforeLoadProps", "write": "FBeforeLoadProps"}, "beforesaveprops": {"name": "BeforeSaveProps", "read": "FBeforeSaveProps", "write": "FBeforeSaveProps"}, "onwritecustomprops": {"name": "OnWriteCustomProps", "read": "FOnWriteCustomProps", "write": "FOnWriteCustomProps"}, "onreadprop": {"name": "OnReadProp", "read": "FOnReadProp", "write": "FOnReadProp"}});
  U.defClass("TPropertyNamesEh", "TStringList", {"froot": {"name": "FRoot", "type": "TComponent"}}, {"root": {"name": "Root", "read": "FRoot", "write": "SetRoot"}});
  U.defClass("TDefinePropertyFiler", "TFiler", {"fsl": {"name": "fsl", "type": "TStrings"}}, {});
  U.defClass("TPersistentCrack", "TPersistent", {}, {});
  U.init(async () => {
    U.const("FilerSignature", "TPF0");
    U.const("RegistryKeys", [{"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_CLASSES_ROOT"))])), "name": "HKEY_CLASSES_ROOT"}, {"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_CURRENT_USER"))])), "name": "HKEY_CURRENT_USER"}, {"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_LOCAL_MACHINE"))])), "name": "HKEY_LOCAL_MACHINE"}, {"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_USERS"))])), "name": "HKEY_USERS"}, {"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_PERFORMANCE_DATA"))])), "name": "HKEY_PERFORMANCE_DATA"}, {"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_CURRENT_CONFIG"))])), "name": "HKEY_CURRENT_CONFIG"}, {"value": (await $.call(C, "Integer", [(await $.v(C, "HKEY_DYN_DATA"))])), "name": "HKEY_DYN_DATA"}]);
    U.var_("FDefaultStorageManager", null, "TPropStorageManagerEh");
  });
  U.func("GetDefaultSection", async function GetDefaultSection(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), result: '', "f": null, "owner": null};
  await $.fixArgs(L0, ["component"]);
  if ($.truthy($.ne(L0["component"], null))) {
    if ($.truthy($.is_(L0["component"], "TCustomForm"))) {
      L0["result"] = (await $.mv(L0["component"], "ClassName"));
    } else {
      L0["result"] = (await $.mv(L0["component"], "Name"));
      if ($.truthy($.is_(L0["component"], "TControl"))) {
        L0["f"] = (await $.call(C, "GetParentForm", [(await $.call(C, "TControl", [L0["component"]]))]));
        if ($.truthy($.ne(L0["f"], null))) {
          L0["result"] = $.add((await $.mv(L0["f"], "ClassName")), L0["result"]);
        } else {
          if ($.truthy($.ne((await $.mv((await $.call(C, "TControl", [L0["component"]])), "Parent")), null))) {
            L0["result"] = $.add((await $.mv((await $.mv((await $.call(C, "TControl", [L0["component"]])), "Parent")), "Name")), L0["result"]);
          }
        }
      } else {
        L0["owner"] = (await $.mv(L0["component"], "Owner"));
        if ($.truthy($.is_(L0["owner"], "TForm"))) {
          L0["result"] = (await $.call(C, "Format", ["%s.%s", [(await $.mv(L0["owner"], "ClassName")), L0["result"]]]));
        }
      }
    }
  } else {
    L0["result"] = "";
  }
  return L0.result;
}, {"params": ["Component"], "kind": "function", "ptypes": ["TComponent"]});
  U.func("GetDefaultIniName", async function GetDefaultIniName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "ExtractFileName", [(await $.call(C, "ChangeFileExt", [(await $.mv((await $.v(C, "Application")), "ExeName")), ".INI"]))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("GetDefaultRegKey", async function GetDefaultRegKey(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  if ($.truthy($.ne((await $.mv((await $.v(C, "Application")), "Title")), ""))) {
    L0["result"] = (await $.mv((await $.v(C, "Application")), "Title"));
  } else {
    L0["result"] = (await $.call(C, "ExtractFileName", [(await $.call(C, "ChangeFileExt", [(await $.mv((await $.v(C, "Application")), "ExeName")), ""]))]));
  }
  L0["result"] = $.add("Software\\", L0["result"]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("TestStreamFormat", async function TestStreamFormat(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: null, "pos": 0, "signature": 0};
  await $.fixArgs(L0, ["stream"]);
  L0["pos"] = (await $.mv(L0["stream"], "Position"));
  L0["signature"] = 0;
  await $.stmt((await $.mcall(L0["stream"], "Read", [$.ref(async () => L0["signature"], async ($t1) => { L0["signature"] = $t1; }), (await $.call(C, "sizeof", [L0["signature"]]))])));
  await $.mset(L0["stream"], "Position", L0["pos"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "Byte", [L0["signature"]])), 255)), async () => ($.eq(L0["signature"], (await $.call(C, "Integer", [(await $.v(C, "FilerSignature"))])))))))) {
    L0["result"] = (await $.v(C, "sofBinary"));
  } else {
    if ($.truthy($.in_((await $.call(C, "Char", [L0["signature"]])), ["o", "O", "i", "I", " ", "\r", "\u000b", "\t"]))) {
      L0["result"] = (await $.v(C, "sofText"));
    } else {
      L0["result"] = (await $.v(C, "sofUnknown"));
    }
  }
  return L0.result;
}, {"params": ["Stream"], "kind": "function", "ptypes": ["TStream"]});
  U.func("GetDefinePropertyList", async function GetDefinePropertyList(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aobject": $.copyArg(p0), "sl": $.copyArg(p1), result: undefined, "dpf": null};
  await $.fixArgs(L0, ["aobject", "sl"]);
  L0["dpf"] = (await $.mcall((await $.v(C, "TDefinePropertyFiler")), "Create", [null, 0]));
  await $.stmt((await $.mcall(L0["dpf"], "GetDefinedObjectPropertyNames", [L0["aobject"], L0["sl"]])));
  await $.mcall(L0["dpf"], "Free", []);
  return L0.result;
}, {"params": ["AObject", "sl"], "kind": "procedure", "ptypes": ["TPersistent", "TStrings"]});
  U.method("TDefinePropertyFiler", "DefineBinaryProperty", async function DefineBinaryProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "readdata": $.copyArg(p1), "writedata": $.copyArg(p2), "hasdata": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["name", "readdata", "writedata", "hasdata"]);
  await $.stmt((await $.mcall((await $.v(C, "fsl")), "Add", [L0["name"]])));
  return L0.result;
}, {"params": ["Name", "ReadData", "WriteData", "HasData"], "kind": "procedure", "ptypes": ["String", "TStreamProc", "TStreamProc", "Boolean"]});
  U.method("TDefinePropertyFiler", "DefineProperty", async function DefineProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "readdata": $.copyArg(p1), "writedata": $.copyArg(p2), "hasdata": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["name", "readdata", "writedata", "hasdata"]);
  await $.stmt((await $.mcall((await $.v(C, "fsl")), "Add", [L0["name"]])));
  return L0.result;
}, {"params": ["Name", "ReadData", "WriteData", "HasData"], "kind": "procedure", "ptypes": ["String", "TReaderProc", "TWriterProc", "Boolean"]});
  U.method("TDefinePropertyFiler", "FlushBuffer", async function FlushBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDefinePropertyFiler", "GetDefinedObjectPropertyNames", async function GetDefinedObjectPropertyNames(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aobject": $.copyArg(p0), "sl": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["aobject", "sl"]);
  await $.set(C, "fsl", L0["sl"]);
  await $.stmt((await $.mcall((await $.call(C, "TPersistentCrack", [L0["aobject"]])), "DefineProperties", [Self])));
  return L0.result;
}, {"params": ["AObject", "sl"], "kind": "procedure", "ptypes": ["TPersistent", "TStrings"]});
  U.func("DefaultPropStorageManager", async function DefaultPropStorageManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FDefaultStorageManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("SetDefaultPropStorageManager", async function SetDefaultPropStorageManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newstoragemanager": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["newstoragemanager"]);
  L0["result"] = (await $.v(C, "FDefaultStorageManager"));
  await $.set(C, "FDefaultStorageManager", L0["newstoragemanager"]);
  return L0.result;
}, {"params": ["NewStorageManager"], "kind": "function", "ptypes": ["TPropStorageManagerEh"]});
  U.method("TPropStorageManagerEh", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPropStorageManagerEh", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FWriteAsText", true);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPropStorageManagerEh", "WriteProperties", async function WriteProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), result: undefined, "ss": null, "st": null};
  await $.fixArgs(L0, ["propstorage"]);
  L0["st"] = null;
  L0["ss"] = null;
  try {
    L0["st"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
    await $.stmt((await $.mcall(L0["propstorage"], "WritePropValues", [L0["st"]])));
    await $.mset(L0["st"], "Position", 0);
    if ($.truthy((await $.v(C, "WriteAsText")))) {
      L0["ss"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [""]));
      await $.stmt((await $.call(C, "ObjectBinaryToText", [L0["st"], L0["ss"]])));
      await $.stmt((await $.call(C, "WritePropertiesText", [L0["propstorage"], (await $.mv(L0["ss"], "DataString"))])));
    } else {
      await $.stmt((await $.call(C, "WritePropertiesStream", [L0["propstorage"], L0["st"]])));
    }
  } finally {
    await $.mcall(L0["st"], "Free", []);
    await $.mcall(L0["ss"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage"], "kind": "procedure", "ptypes": ["TPropStorageEh"]});
  U.method("TPropStorageManagerEh", "WritePropertiesText", async function WritePropertiesText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), "text": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["propstorage", "text"]);
  return L0.result;
}, {"params": ["PropStorage", "Text"], "kind": "procedure", "ptypes": ["TPropStorageEh", "String"]});
  U.method("TPropStorageManagerEh", "WritePropertiesStream", async function WritePropertiesStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), "stream": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["propstorage", "stream"]);
  return L0.result;
}, {"params": ["PropStorage", "Stream"], "kind": "procedure", "ptypes": ["TPropStorageEh", "TStream"]});
  U.method("TPropStorageManagerEh", "ReadProperties", async function ReadProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["propstorage"]);
  return L0.result;
}, {"params": ["PropStorage"], "kind": "procedure", "ptypes": ["TPropStorageEh"]});
  U.method("TPropStorageManagerEh", "ReadPropertiesStream", async function ReadPropertiesStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), "propstorage": $.copyArg(p1), result: undefined, "ms": null};
  await $.fixArgs(L0, ["stream", "propstorage"]);
  L0["ms"] = null;
  if ($.truthy($.eq((await $.call(C, "TestStreamFormat", [L0["stream"]])), (await $.v(C, "sofUnknown"))))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Invalid stream format."])));
  }
  try {
    if ($.truthy($.eq((await $.call(C, "TestStreamFormat", [L0["stream"]])), (await $.v(C, "sofText"))))) {
      L0["ms"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
      await $.stmt((await $.call(C, "ObjectTextToBinary", [L0["stream"], L0["ms"]])));
      await $.mset(L0["ms"], "Position", 0);
      L0["stream"] = L0["ms"];
    }
    await $.stmt((await $.mcall(L0["propstorage"], "ReadPropValues", [L0["stream"]])));
  } finally {
    await $.mcall(L0["ms"], "Free", []);
  }
  return L0.result;
}, {"params": ["Stream", "PropStorage"], "kind": "procedure", "ptypes": ["TStream", "TPropStorageEh"]});
  U.method("TIniPropStorageManEh", "ReadProperties", async function ReadProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), result: undefined, "ss": null, "sl": null, "ini": null, "i": 0, "buffer": ''};
  await $.fixArgs(L0, ["propstorage"]);
  L0["ss"] = null;
  L0["sl"] = null;
  L0["ini"] = null;
  try {
    L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [(await $.v(C, "IniFileName"))]));
    L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    if ($.truthy($.not((await $.mcall(L0["ini"], "SectionExists", [(await $.mv(L0["propstorage"], "Section"))]))))) {
      return L0.result;
    }
    await $.stmt((await $.mcall(L0["ini"], "ReadSectionValues", [(await $.mv(L0["propstorage"], "Section")), L0["sl"]])));
    { const $t2 = $.sub((await $.mv(L0["sl"], "Count")), 1);
      L0["i"] = 0;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
        { const $t4 = await $.iset((await $.mv(L0["sl"], "Strings")), [L0["i"]], (await $.idx((await $.mv(L0["sl"], "Values")), [$.add("Line", (await $.call(C, "IntToStr", [L0["i"]])))]))); if ($t4 !== undefined) { await $.mset(L0["sl"], "Strings", $t4); } }
        await $.tick();
      }
    }
    L0["ss"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [(await $.idx(L0["sl"], [0]))]));
    if ($.truthy($.ne((await $.call(C, "TestStreamFormat", [L0["ss"]])), (await $.v(C, "sofText"))))) {
      await $.stmt((await $.mcall(L0["ss"], "Seek", [0, (await $.v(C, "soFromEnd"))])));
      { const $t5 = $.sub((await $.mv(L0["sl"], "Count")), 1);
        L0["i"] = 1;
        let $t6 = true;
        for (;;) {
          if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
          $t6 = false;
          if (!($.ord(L0["i"]) <= $.ord($t5))) break;
          await $.stmt((await $.mcall(L0["ss"], "WriteString", [(await $.idx(L0["sl"], [L0["i"]]))])));
          await $.tick();
        }
      }
      await $.mset(L0["ss"], "Position", 0);
      await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["buffer"], async ($t7) => { L0["buffer"] = $t7; }), null, $.idiv((await $.mv(L0["ss"], "Size")), 2)])));
      await $.stmt((await $.call(C, "HexToBin", [(await $.call(C, "PChar", [(await $.mv(L0["ss"], "DataString"))])), (await $.call(C, "PChar", [L0["buffer"]])), (await $.mv(L0["ss"], "Size"))])));
      await $.mset(L0["ss"], "Size", 0);
      await $.stmt((await $.mcall(L0["ss"], "WriteString", [L0["buffer"]])));
      await $.mset(L0["ss"], "Position", 0);
    } else {
      await $.mset(L0["ss"], "Position", 0);
      await $.stmt((await $.mcall(L0["ss"], "WriteString", [(await $.mv(L0["sl"], "Text"))])));
      await $.mset(L0["ss"], "Position", 0);
    }
    await $.stmt((await $.call(C, "ReadPropertiesStream", [L0["ss"], L0["propstorage"]])));
  } finally {
    await $.mcall(L0["ss"], "Free", []);
    await $.mcall(L0["sl"], "Free", []);
    await $.mcall(L0["ini"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage"], "kind": "procedure", "ptypes": ["TPropStorageEh"]});
  U.method("TIniPropStorageManEh", "WritePropertiesStream", async function WritePropertiesStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), "stream": $.copyArg(p1), result: undefined, "ini": null, "buffer": '', "text": '', "line": '', "i": 0, "pos": 0};
  await $.fixArgs(L0, ["propstorage", "stream"]);
  L0["ini"] = null;
  L0["buffer"] = null;
  try {
    L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [(await $.v(C, "IniFileName"))]));
    await $.stmt((await $.call(C, "GetMem", [L0["buffer"], (await $.mv(L0["stream"], "Size"))])));
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["text"], async ($t8) => { L0["text"] = $t8; }), null, $.mul((await $.mv(L0["stream"], "Size")), 2)])));
    await $.stmt((await $.mcall(L0["stream"], "ReadBuffer", [L0["buffer"], (await $.mv(L0["stream"], "Size"))])));
    await $.stmt((await $.call(C, "BinToHex", [L0["buffer"], (await $.call(C, "PChar", [L0["text"]])), (await $.mv(L0["stream"], "Size"))])));
    L0["i"] = 0;
    L0["pos"] = 1;
    while ($.truthy($.le(L0["pos"], (await $.call(C, "Length", [L0["text"]]))))) {
      L0["line"] = (await $.call(C, "Copy", [L0["text"], L0["pos"], 80]));
      await $.stmt((await $.mcall(L0["ini"], "WriteString", [(await $.mv(L0["propstorage"], "Section")), $.add("Line", (await $.call(C, "IntToStr", [L0["i"]]))), $.add($.add("'", L0["line"]), "'")])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["pos"], async ($t9) => { L0["pos"] = $t9; }), 80])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t10) => { L0["i"] = $t10; })])));
      await $.tick();
    }
    while ($.truthy((await $.mcall(L0["ini"], "ValueExists", [(await $.mv(L0["propstorage"], "Section")), $.add("Line", (await $.call(C, "IntToStr", [L0["i"]])))])))) {
      await $.stmt((await $.mcall(L0["ini"], "DeleteKey", [(await $.mv(L0["propstorage"], "Section")), $.add("Line", (await $.call(C, "IntToStr", [L0["i"]])))])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t11) => { L0["i"] = $t11; })])));
      await $.tick();
    }
  } finally {
    await $.stmt((await $.call(C, "FreeMem", [L0["buffer"]])));
    await $.mcall(L0["ini"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage", "Stream"], "kind": "procedure", "ptypes": ["TPropStorageEh", "TStream"]});
  U.method("TIniPropStorageManEh", "WritePropertiesText", async function WritePropertiesText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), "text": $.copyArg(p1), result: undefined, "sl": null, "ini": null, "i": 0};
  await $.fixArgs(L0, ["propstorage", "text"]);
  L0["sl"] = null;
  L0["ini"] = null;
  try {
    L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    await $.mset(L0["sl"], "Text", L0["text"]);
    L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [(await $.v(C, "IniFileName"))]));
    { const $t12 = $.sub((await $.mv(L0["sl"], "Count")), 1);
      L0["i"] = 0;
      let $t13 = true;
      for (;;) {
        if (!$t13) { L0["i"] = $.succ(L0["i"], 1); }
        $t13 = false;
        if (!($.ord(L0["i"]) <= $.ord($t12))) break;
        await $.stmt((await $.mcall(L0["ini"], "WriteString", [(await $.mv(L0["propstorage"], "Section")), $.add("Line", (await $.call(C, "IntToStr", [L0["i"]]))), $.add($.add("'", (await $.idx(L0["sl"], [L0["i"]]))), "'")])));
        await $.tick();
      }
    }
    L0["i"] = (await $.mv(L0["sl"], "Count"));
    while ($.truthy((await $.mcall(L0["ini"], "ValueExists", [(await $.mv(L0["propstorage"], "Section")), $.add("Line", (await $.call(C, "IntToStr", [L0["i"]])))])))) {
      await $.stmt((await $.mcall(L0["ini"], "DeleteKey", [(await $.mv(L0["propstorage"], "Section")), $.add("Line", (await $.call(C, "IntToStr", [L0["i"]])))])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t14) => { L0["i"] = $t14; })])));
      await $.tick();
    }
  } finally {
    await $.mcall(L0["sl"], "Free", []);
    await $.mcall(L0["ini"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage", "Text"], "kind": "procedure", "ptypes": ["TPropStorageEh", "String"]});
  U.func("RegistryKeyToIdent", async function RegistryKeyToIdent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rootkey": $.copyArg(p0), "ident": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["rootkey"]);
  L0["result"] = (await $.call(C, "IntToIdent", [L0["rootkey"], (await L0["ident"].get()), (await $.v(C, "RegistryKeys"))]));
  return L0.result;
}, {"params": ["RootKey", "Ident"], "kind": "function", "ptypes": ["Longint", "String"]});
  U.func("IdentToRegistryKey", async function IdentToRegistryKey(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ident": $.copyArg(p0), "rootkey": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["ident"]);
  L0["result"] = (await $.call(C, "IdentToInt", [L0["ident"], (await L0["rootkey"].get()), (await $.v(C, "RegistryKeys"))]));
  return L0.result;
}, {"params": ["Ident", "RootKey"], "kind": "function", "ptypes": ["String", "Longint"]});
  U.func("GetRegistryKeyValues", async function GetRegistryKeyValues(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"proc": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["proc"]);
  { const $t15 = (await $.call(C, "High", [(await $.v(C, "RegistryKeys"))]));
    L0["i"] = (await $.call(C, "Low", [(await $.v(C, "RegistryKeys"))]));
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      await $.stmt((await $.callv(L0["proc"], [(await $.mv((await $.idx((await $.v(C, "RegistryKeys")), [L0["i"]])), "Name"))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Proc"], "kind": "procedure", "ptypes": ["TGetStrProc"]});
  U.method("TRegPropStorageManEh", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TRegPropStorageManEh", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FKey", (await $.v(C, "HKEY_CURRENT_USER")));
  await $.set(C, "FRegistryKey", (await $.v(C, "rkCurrentUserEh")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TRegPropStorageManEh", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TRegPropStorageManEh", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TRegPropStorageManEh", "ReadProperties", async function ReadProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), result: undefined, "ss": null, "reg": null, "ispresent": false, "buffer": '', "skeys": null, "svals": null, "sl": null, "i": 0, "linepos": 0};
  await $.fixArgs(L0, ["propstorage"]);
  L0["ss"] = null;
  L0["reg"] = null;
  L0["skeys"] = null;
  L0["svals"] = null;
  L0["sl"] = null;
  try {
    L0["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
    await $.mset(L0["reg"], "RootKey", (await $.v(C, "Key")));
    if ($.truthy($.eq((await $.v(C, "Path")), ""))) {
      L0["ispresent"] = (await $.mcall(L0["reg"], "KeyExists", [(await $.v(C, "GetDefaultRegKey"))]));
    } else {
      L0["ispresent"] = (await $.mcall(L0["reg"], "KeyExists", [(await $.v(C, "Path"))]));
    }
    if ($.truthy(L0["ispresent"])) {
      if ($.truthy($.eq((await $.v(C, "Path")), ""))) {
        await $.stmt((await $.mcall(L0["reg"], "OpenKey", [(await $.v(C, "GetDefaultRegKey")), false])));
      } else {
        await $.stmt((await $.mcall(L0["reg"], "OpenKey", [(await $.v(C, "Path")), false])));
      }
      if ($.truthy((await $.mcall(L0["reg"], "ValueExists", [(await $.mv(L0["propstorage"], "Section"))])))) {
        await $.stmt((await $.call(C, "ReadPropertiesOld", [L0["propstorage"]])));
        await $.stmt((await $.mcall(L0["reg"], "DeleteValue", [(await $.mv(L0["propstorage"], "Section"))])));
        return L0.result;
      }
      await $.mcall(L0["reg"], "CloseKey", []);
    }
    if ($.truthy($.eq((await $.v(C, "Path")), ""))) {
      L0["ispresent"] = (await $.mcall(L0["reg"], "OpenKey", [$.add($.add((await $.v(C, "GetDefaultRegKey")), "\\"), (await $.mv(L0["propstorage"], "Section"))), false]));
    } else {
      L0["ispresent"] = (await $.mcall(L0["reg"], "OpenKey", [$.add($.add((await $.v(C, "Path")), "\\"), (await $.mv(L0["propstorage"], "Section"))), false]));
    }
    if ($.truthy($.not(L0["ispresent"]))) {
      return L0.result;
    }
    L0["svals"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    await $.stmt((await $.mcall(L0["reg"], "GetValueNames", [L0["svals"]])));
    { const $t17 = $.sub((await $.mv(L0["svals"], "Count")), 1);
      L0["i"] = 0;
      let $t18 = true;
      for (;;) {
        if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
        $t18 = false;
        if (!($.ord(L0["i"]) <= $.ord($t17))) break;
        L0["linepos"] = (await $.mcall(L0["svals"], "IndexOf", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]])))]));
        if ($.truthy($.lt(L0["linepos"], 0))) {
          break;
        }
        await $.stmt((await $.mcall(L0["sl"], "Add", [(await $.mcall(L0["reg"], "ReadString", [(await $.idx(L0["svals"], [L0["linepos"]]))]))])));
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.mv(L0["sl"], "Count")), 0))) {
      return L0.result;
    }
    L0["ss"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [(await $.idx(L0["sl"], [0]))]));
    if ($.truthy($.ne((await $.call(C, "TestStreamFormat", [L0["ss"]])), (await $.v(C, "sofText"))))) {
      await $.stmt((await $.mcall(L0["ss"], "Seek", [0, (await $.v(C, "soFromEnd"))])));
      { const $t19 = $.sub((await $.mv(L0["sl"], "Count")), 1);
        L0["i"] = 1;
        let $t20 = true;
        for (;;) {
          if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
          $t20 = false;
          if (!($.ord(L0["i"]) <= $.ord($t19))) break;
          await $.stmt((await $.mcall(L0["ss"], "WriteString", [(await $.idx(L0["sl"], [L0["i"]]))])));
          await $.tick();
        }
      }
      await $.mset(L0["ss"], "Position", 0);
      await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["buffer"], async ($t21) => { L0["buffer"] = $t21; }), null, $.idiv((await $.mv(L0["ss"], "Size")), 2)])));
      await $.stmt((await $.call(C, "HexToBin", [(await $.call(C, "PChar", [(await $.mv(L0["ss"], "DataString"))])), (await $.call(C, "PChar", [L0["buffer"]])), (await $.mv(L0["ss"], "Size"))])));
      await $.mset(L0["ss"], "Size", 0);
      await $.stmt((await $.mcall(L0["ss"], "WriteString", [L0["buffer"]])));
      await $.mset(L0["ss"], "Position", 0);
    } else {
      await $.mset(L0["ss"], "Position", 0);
      await $.stmt((await $.mcall(L0["ss"], "WriteString", [(await $.mv(L0["sl"], "Text"))])));
      await $.mset(L0["ss"], "Position", 0);
    }
    await $.stmt((await $.call(C, "ReadPropertiesStream", [L0["ss"], L0["propstorage"]])));
  } finally {
    await $.mcall(L0["ss"], "Free", []);
    await $.mcall(L0["reg"], "Free", []);
    await $.mcall(L0["skeys"], "Free", []);
    await $.mcall(L0["svals"], "Free", []);
    await $.mcall(L0["sl"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage"], "kind": "procedure", "ptypes": ["TPropStorageEh"]});
  U.method("TRegPropStorageManEh", "ReadPropertiesOld", async function ReadPropertiesOld(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), result: undefined, "ss": null, "reg": null, "ispresent": false, "buffer": ''};
  await $.fixArgs(L0, ["propstorage"]);
  L0["ss"] = null;
  L0["reg"] = null;
  try {
    L0["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
    await $.mset(L0["reg"], "RootKey", (await $.v(C, "Key")));
    if ($.truthy($.eq((await $.v(C, "Path")), ""))) {
      L0["ispresent"] = (await $.mcall(L0["reg"], "OpenKey", [(await $.v(C, "GetDefaultRegKey")), false]));
    } else {
      L0["ispresent"] = (await $.mcall(L0["reg"], "OpenKey", [(await $.v(C, "Path")), false]));
    }
    if ($.truthy($.not(L0["ispresent"]))) {
      return L0.result;
    }
    if ($.truthy($.not((await $.mcall(L0["reg"], "ValueExists", [(await $.mv(L0["propstorage"], "Section"))]))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.mcall(L0["reg"], "GetDataType", [(await $.mv(L0["propstorage"], "Section"))])), (await $.v(C, "rdBinary"))))) {
      await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["buffer"], async ($t22) => { L0["buffer"] = $t22; }), null, (await $.mcall(L0["reg"], "GetDataSize", [(await $.mv(L0["propstorage"], "Section"))]))])));
      await $.stmt((await $.mcall(L0["reg"], "ReadBinaryData", [(await $.mv(L0["propstorage"], "Section")), (await $.call(C, "PChar", [L0["buffer"]])), (await $.call(C, "Length", [L0["buffer"]]))])));
    } else {
      L0["buffer"] = (await $.mcall(L0["reg"], "ReadString", [(await $.mv(L0["propstorage"], "Section"))]));
    }
    L0["ss"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["buffer"]]));
    await $.mset(L0["ss"], "Position", 0);
    await $.stmt((await $.call(C, "ReadPropertiesStream", [L0["ss"], L0["propstorage"]])));
  } finally {
    await $.mcall(L0["ss"], "Free", []);
    await $.mcall(L0["reg"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage"], "kind": "procedure", "ptypes": ["TPropStorageEh"]});
  U.method("TRegPropStorageManEh", "SerRegistryKey", async function SerRegistryKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  L0["registrykeytohkeyarr"] = [(await $.v(C, "HKEY_CLASSES_ROOT")), (await $.v(C, "HKEY_CURRENT_USER")), (await $.v(C, "HKEY_LOCAL_MACHINE")), (await $.v(C, "HKEY_USERS")), (await $.v(C, "HKEY_PERFORMANCE_DATA")), (await $.v(C, "HKEY_CURRENT_CONFIG")), (await $.v(C, "HKEY_DYN_DATA")), 0];
  if ($.truthy($.ne((await $.v(C, "FRegistryKey")), L0["value"]))) {
    await $.set(C, "FRegistryKey", L0["value"]);
    if ($.truthy($.ne((await $.v(C, "FRegistryKey")), (await $.v(C, "rkCustomRegistryKeyEh"))))) {
      await $.set(C, "FKey", (await $.idx(L0["registrykeytohkeyarr"], [(await $.v(C, "FRegistryKey"))])));
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TRegistryKeyEh"]});
  U.method("TRegPropStorageManEh", "SetKey", async function SetKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne((await $.v(C, "FKey")), L0["value"]))) {
    await $.set(C, "FKey", L0["value"]);
    { const $t23 = (await $.v(C, "FKey"));
      if ($.eq($t23, (await $.v(C, "HKEY_CLASSES_ROOT")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkClassesRootEh")));
      }
      else if ($.eq($t23, (await $.v(C, "HKEY_CURRENT_USER")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkCurrentUserEh")));
      }
      else if ($.eq($t23, (await $.v(C, "HKEY_LOCAL_MACHINE")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkLocalMachineEh")));
      }
      else if ($.eq($t23, (await $.v(C, "HKEY_USERS")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkUsersEh")));
      }
      else if ($.eq($t23, (await $.v(C, "HKEY_PERFORMANCE_DATA")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkPerformanceDataEh")));
      }
      else if ($.eq($t23, (await $.v(C, "HKEY_CURRENT_CONFIG")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkCurrentConfigEh")));
      }
      else if ($.eq($t23, (await $.v(C, "HKEY_DYN_DATA")))) {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkDynDataEh")));
      }
      else {
        await $.set(C, "FRegistryKey", (await $.v(C, "rkCustomRegistryKeyEh")));
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["HKEY"]});
  U.method("TRegPropStorageManEh", "WritePropertiesStream", async function WritePropertiesStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), "stream": $.copyArg(p1), result: undefined, "reg": null, "buffer": '', "text": '', "line": '', "i": 0, "pos": 0};
  await $.fixArgs(L0, ["propstorage", "stream"]);
  L0["reg"] = null;
  L0["buffer"] = null;
  try {
    L0["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
    await $.mset(L0["reg"], "RootKey", (await $.v(C, "Key")));
    if ($.truthy($.eq((await $.v(C, "Path")), ""))) {
      await $.stmt((await $.mcall(L0["reg"], "OpenKey", [$.add($.add((await $.v(C, "GetDefaultRegKey")), "\\"), (await $.mv(L0["propstorage"], "Section"))), true])));
    } else {
      await $.stmt((await $.mcall(L0["reg"], "OpenKey", [$.add($.add((await $.v(C, "Path")), "\\"), (await $.mv(L0["propstorage"], "Section"))), true])));
    }
    await $.stmt((await $.call(C, "GetMem", [L0["buffer"], (await $.mv(L0["stream"], "Size"))])));
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["text"], async ($t24) => { L0["text"] = $t24; }), null, $.mul((await $.mv(L0["stream"], "Size")), 2)])));
    await $.stmt((await $.mcall(L0["stream"], "ReadBuffer", [L0["buffer"], (await $.mv(L0["stream"], "Size"))])));
    await $.stmt((await $.call(C, "BinToHex", [L0["buffer"], (await $.call(C, "PChar", [L0["text"]])), (await $.mv(L0["stream"], "Size"))])));
    L0["i"] = 0;
    L0["pos"] = 1;
    while ($.truthy($.le(L0["pos"], (await $.call(C, "Length", [L0["text"]]))))) {
      L0["line"] = (await $.call(C, "Copy", [L0["text"], L0["pos"], 80]));
      await $.stmt((await $.mcall(L0["reg"], "WriteString", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]]))), L0["line"]])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["pos"], async ($t25) => { L0["pos"] = $t25; }), 80])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t26) => { L0["i"] = $t26; })])));
      await $.tick();
    }
    while ($.truthy((await $.mcall(L0["reg"], "ValueExists", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]])))])))) {
      await $.stmt((await $.mcall(L0["reg"], "DeleteValue", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]])))])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t27) => { L0["i"] = $t27; })])));
      await $.tick();
    }
  } finally {
    await $.stmt((await $.call(C, "FreeMem", [L0["buffer"]])));
    await $.mcall(L0["reg"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage", "Stream"], "kind": "procedure", "ptypes": ["TPropStorageEh", "TStream"]});
  U.method("TRegPropStorageManEh", "WritePropertiesText", async function WritePropertiesText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), "text": $.copyArg(p1), result: undefined, "reg": null, "sl": null, "i": 0};
  await $.fixArgs(L0, ["propstorage", "text"]);
  L0["reg"] = null;
  L0["sl"] = null;
  try {
    L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    await $.mset(L0["sl"], "Text", L0["text"]);
    L0["reg"] = (await $.mv((await $.v(C, "TRegistry")), "Create"));
    await $.mset(L0["reg"], "RootKey", (await $.v(C, "Key")));
    if ($.truthy($.eq((await $.v(C, "Path")), ""))) {
      await $.stmt((await $.mcall(L0["reg"], "OpenKey", [$.add($.add((await $.v(C, "GetDefaultRegKey")), "\\"), (await $.mv(L0["propstorage"], "Section"))), true])));
    } else {
      await $.stmt((await $.mcall(L0["reg"], "OpenKey", [$.add($.add((await $.v(C, "Path")), "\\"), (await $.mv(L0["propstorage"], "Section"))), true])));
    }
    { const $t28 = $.sub((await $.mv(L0["sl"], "Count")), 1);
      L0["i"] = 0;
      let $t29 = true;
      for (;;) {
        if (!$t29) { L0["i"] = $.succ(L0["i"], 1); }
        $t29 = false;
        if (!($.ord(L0["i"]) <= $.ord($t28))) break;
        await $.stmt((await $.mcall(L0["reg"], "WriteString", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]]))), (await $.idx(L0["sl"], [L0["i"]]))])));
        await $.tick();
      }
    }
    L0["i"] = (await $.mv(L0["sl"], "Count"));
    while ($.truthy((await $.mcall(L0["reg"], "ValueExists", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]])))])))) {
      await $.stmt((await $.mcall(L0["reg"], "DeleteValue", [$.add("Line", (await $.call(C, "FormatFloat", ["0000000000", L0["i"]])))])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t30) => { L0["i"] = $t30; })])));
      await $.tick();
    }
  } finally {
    await $.mcall(L0["sl"], "Free", []);
    await $.mcall(L0["reg"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage", "Text"], "kind": "procedure", "ptypes": ["TPropStorageEh", "String"]});
  U.method("TPropStorageEh", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPropStorageEh", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FSection", "");
  await $.set(C, "FActive", true);
  await $.set(C, "FStoredProps", (await $.mv((await $.v(C, "TPropertyNamesEh")), "Create")));
  await $.mset((await $.v(C, "FStoredProps")), "Root", L0["aowner"]);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPropStorageEh", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not(($.in_((await $.v(C, "csDesigning")), (await $.v(C, "ComponentState"))))))) {
    await $.stmt($.call(C, "RestoreEvents", []));
  }
  await $.mcall((await $.v(C, "FStoredProps")), "Free", []);
  await $.inherited(Self, "TPropStorageEh", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPropStorageEh", "Loaded", async function Loaded(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "loading": false};
  L0["loading"] = $.in_((await $.v(C, "csLoading")), (await $.v(C, "ComponentState")));
  await $.inherited(Self, "TPropStorageEh", "Loaded", null, arguments);
  if ($.truthy($.not(($.in_((await $.v(C, "csDesigning")), (await $.v(C, "ComponentState"))))))) {
    if ($.truthy(L0["loading"])) {
      await $.stmt($.call(C, "SetEvents", []));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEh", "GetForm", async function GetForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.is_((await $.v(C, "Owner")), "TCustomForm"))) {
    L0["result"] = (await $.call(C, "TForm", [(await $.v(C, "Owner"))]));
  } else {
    L0["result"] = null;
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropStorageEh", "SetEvents", async function SetEvents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.is_((await $.v(C, "Owner")), "TCustomForm"))) {
    {
      const $t31 = (await $.call(C, "TForm", [(await $.v(C, "Form"))]));
      await $.wset([$t31], "FSaveFormShow", (await $.wv([$t31], "OnShow", C, false)), C);
      await $.wset([$t31], "OnShow", (await $.wv([$t31], "FormShow", C, true)), C);
      await $.wset([$t31], "FSaveFormCloseQuery", (await $.wv([$t31], "OnCloseQuery", C, false)), C);
      await $.wset([$t31], "OnCloseQuery", (await $.wv([$t31], "FormCloseQuery", C, true)), C);
      await $.wset([$t31], "FSaveFormDestroy", (await $.wv([$t31], "OnDestroy", C, false)), C);
      await $.wset([$t31], "OnDestroy", (await $.wv([$t31], "FormDestroy", C, true)), C);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEh", "RestoreEvents", async function RestoreEvents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Owner")), null)), async () => ($.is_((await $.v(C, "Owner")), "TCustomForm")))))) {
    {
      const $t32 = (await $.call(C, "TForm", [(await $.v(C, "Form"))]));
      await $.wset([$t32], "OnShow", (await $.wv([$t32], "FSaveFormShow", C, true)), C);
      await $.wset([$t32], "OnCloseQuery", (await $.wv([$t32], "FSaveFormCloseQuery", C, true)), C);
      await $.wset([$t32], "OnDestroy", (await $.wv([$t32], "FSaveFormDestroy", C, true)), C);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEh", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Active")))) {
    try {
      await $.stmt($.call(C, "LoadProperties", []));
    } catch ($t33) {
      $.rethrowControl($t33);
      $.handled($t33);
      if ($.truthy((await $.v(C, "IsRaiseReadErrorEh")))) {
        await $.stmt((await $.mcall((await $.v(C, "Application")), "HandleException", [Self])));
      }
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FSaveFormShow"))])))) {
    await $.stmt((await $.call(C, "FSaveFormShow", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEh", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FSaveFormCloseQuery"))])))) {
    await $.stmt((await $.call(C, "FSaveFormCloseQuery", [L0["sender"], (await L0["canclose"].get())])));
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await L0["canclose"].get()), async () => (await $.v(C, "Active")))), async () => ($.is_((await $.v(C, "Owner")), "TCustomForm")))), async () => (await $.mv((await $.v(C, "Form")), "HandleAllocated")))))) {
    try {
      await $.stmt($.call(C, "SaveProperties", []));
    } catch ($t34) {
      $.rethrowControl($t34);
      $.handled($t34);
      await $.stmt((await $.mcall((await $.v(C, "Application")), "HandleException", [Self])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TPropStorageEh", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.v(C, "Active")), async () => $.not((await $.v(C, "FSaved"))))))) {
    await $.set(C, "FDestroying", true);
    try {
      await $.stmt($.call(C, "SaveProperties", []));
    } catch ($t35) {
      $.rethrowControl($t35);
      $.handled($t35);
      await $.stmt((await $.mcall((await $.v(C, "Application")), "HandleException", [Self])));
    }
    await $.set(C, "FDestroying", false);
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FSaveFormDestroy"))])))) {
    await $.stmt((await $.call(C, "FSaveFormDestroy", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEh", "GetSection", async function GetSection(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.v(C, "FSection"));
  if ($.truthy((await $.and_(($.eq(L0["result"], "")), async () => $.not(($.in_((await $.v(C, "csDesigning")), (await $.v(C, "ComponentState"))))))))) {
    L0["result"] = (await $.call(C, "GetDefaultSection", [(await $.v(C, "Owner"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropStorageEh", "SetSection", async function SetSection(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FSection", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPropStorageEh", "Save", async function Save(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FOnSavePlacement"))])))) {
    await $.stmt((await $.call(C, "FOnSavePlacement", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEh", "SetStorageManager", async function SetStorageManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne((await $.v(C, "FStorageManager")), L0["value"]))) {
    await $.set(C, "FStorageManager", L0["value"]);
    if ($.truthy($.ne(L0["value"], null))) {
      await $.stmt((await $.mcall(L0["value"], "FreeNotification", [Self])));
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPropStorageManagerEh"]});
  U.method("TPropStorageEh", "SetStoredProps", async function SetStoredProps(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FStoredProps")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPropertyNamesEh"]});
  U.method("TPropStorageEh", "WritePropValues", async function WritePropValues(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined, "pw": null};
  await $.fixArgs(L0, ["stream"]);
  L0["pw"] = (await $.mcall((await $.v(C, "TPropWriterEh")), "Create", [L0["stream"], 1024]));
  await $.mset(L0["pw"], "OnWriteOwnerProps", (await $.ref_(C, "WriteCustomProps")));
  try {
    await $.stmt((await $.mcall(L0["pw"], "WriteOwnerProperties", [(await $.v(C, "Owner")), (await $.v(C, "StoredProps"))])));
  } finally {
    await $.mcall(L0["pw"], "Free", []);
  }
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TPropStorageEh", "ReadPropValues", async function ReadPropValues(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined, "pr": null};
  await $.fixArgs(L0, ["stream"]);
  L0["pr"] = (await $.mcall((await $.v(C, "TPropReaderEh")), "Create", [L0["stream"], 1024]));
  await $.mset(L0["pr"], "OnReadOwnerProp", (await $.ref_(C, "ReadProp")));
  try {
    await $.stmt((await $.mcall(L0["pr"], "ReadOwnerProperties", [(await $.v(C, "Owner"))])));
  } finally {
    await $.mcall(L0["pr"], "Free", []);
  }
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TPropStorageEh", "LoadProperties", async function LoadProperties(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "BeforeLoadProps"))])))) {
    await $.stmt((await $.call(C, "BeforeLoadProps", [Self])));
  }
  await $.set(C, "FSaved", false);
  if ($.truthy($.ne((await $.v(C, "StorageManager")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "StorageManager")), "ReadProperties", [Self])));
  } else {
    if ($.truthy($.ne((await $.v(C, "DefaultPropStorageManager")), null))) {
      await $.stmt((await $.mcall((await $.v(C, "DefaultPropStorageManager")), "ReadProperties", [Self])));
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "AfterLoadProps"))])))) {
    await $.stmt((await $.call(C, "AfterLoadProps", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEh", "SaveProperties", async function SaveProperties(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "BeforeSaveProps"))])))) {
    await $.stmt((await $.call(C, "BeforeSaveProps", [Self])));
  }
  if ($.truthy($.ne((await $.v(C, "StorageManager")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "StorageManager")), "WriteProperties", [Self])));
    await $.set(C, "FSaved", true);
  } else {
    if ($.truthy($.ne((await $.v(C, "DefaultPropStorageManager")), null))) {
      await $.stmt((await $.mcall((await $.v(C, "DefaultPropStorageManager")), "WriteProperties", [Self])));
      await $.set(C, "FSaved", true);
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "AfterSaveProps"))])))) {
    await $.stmt((await $.call(C, "AfterSaveProps", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEh", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TPropStorageEh", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "FStorageManager")))))))) {
    await $.set(C, "StorageManager", null);
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TPropStorageEh", "WriteCustomProps", async function WriteCustomProps(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"writer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["writer"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnWriteCustomProps"))])))) {
    await $.stmt((await $.call(C, "OnWriteCustomProps", [Self, L0["writer"]])));
  }
  return L0.result;
}, {"params": ["Writer"], "kind": "procedure", "ptypes": ["TPropWriterEh"]});
  U.method("TPropStorageEh", "ReadProp", async function ReadProp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"reader": $.copyArg(p0), "propname": $.copyArg(p1), "processed": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["reader", "propname"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnReadProp"))])))) {
    await $.stmt((await $.call(C, "OnReadProp", [Self, L0["reader"], L0["propname"], (await L0["processed"].get())])));
  }
  return L0.result;
}, {"params": ["Reader", "PropName", "Processed"], "kind": "procedure", "ptypes": ["TPropReaderEh", "String", "Boolean"]});
  U.method("TPropertyNamesEh", "CheckPropertyPath", async function CheckPropertyPath(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.copyArg(p0), result: false, "token": '', "curobject": null};
  await $.fixArgs(L0, ["path"]);
  L0["curobject"] = (await $.v(C, "Root"));
  L0["result"] = false;
  L0["token"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
  while ($.truthy(true)) {
    if ($.truthy($.eq(L0["token"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [$.add($.add("Invalide property path: \"", L0["path"]), "\"")])));
    }
    if ($.truthy($.eq((await $.call(C, "UpperCase", [L0["token"]])), "<P>"))) {
      L0["result"] = (await $.call(C, "CheckObjectPropertyPath", [L0["curobject"], (await $.call(C, "Copy", [L0["path"], $.add((await $.call(C, "Length", ["<P>"])), 2), (await $.call(C, "Length", [L0["path"]]))]))]));
      return L0.result;
    }
    if ($.truthy(($.is_(L0["curobject"], "TComponent")))) {
      L0["curobject"] = (await $.call(C, "FindChildComponent", [L0["curobject"], (await $.v(C, "Root")), L0["token"], true]));
    } else {
      L0["curobject"] = null;
    }
    if ($.truthy($.eq(L0["curobject"], null))) {
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["path"], async ($t36) => { L0["path"] = $t36; }), 1, $.add((await $.call(C, "Length", [L0["token"]])), 1)])));
    L0["token"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
    await $.tick();
  }
  return L0.result;
}, {"params": ["Path"], "kind": "function", "ptypes": ["String"]});
  U.method("TPropertyNamesEh", "CheckObjectPropertyPath", async function CheckObjectPropertyPath(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"instance": $.copyArg(p0), "proppath": $.copyArg(p1), result: false, "propinfo": null, "propname": '', "dpl": null, "ci": null, "c": null, "i": 0, "cilist": null, "interceptorclass": null};
  await $.fixArgs(L0, ["instance", "proppath"]);
  L0["isspeccollectionpropname"] = $.fn(async function IsSpecCollectionPropName(p0) {
  const L1 = {"propname": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["propname"]);
  L1["result"] = (await $.and_(($.is_(L0["instance"], "TCollection")), async () => ((await $.or_(($.eq((await $.call(C, "AnsiUpperCase", [L1["propname"]])), (await $.call(C, "AnsiUpperCase", ["<ForAllItems>"])))), async () => ($.eq((await $.call(C, "AnsiUpperCase", [(await $.call(C, "Copy", [L1["propname"], 1, 5]))])), (await $.call(C, "AnsiUpperCase", ["<Item"])))))))));
  return L1.result;
});
  L0["cilist"] = (await $.mv((await $.v(C, "TList")), "Create"));
  try {
    L0["result"] = false;
    while ($.truthy(true)) {
      L0["propname"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["proppath"]]));
      await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["proppath"], async ($t37) => { L0["proppath"] = $t37; }), 1, $.add((await $.call(C, "Length", [L0["propname"]])), 1)])));
      if ($.truthy((await $.callv(L0["isspeccollectionpropname"], [L0["propname"]])))) {
        L0["c"] = (await $.call(C, "TCollection", [L0["instance"]]));
        if ($.truthy($.eq((await $.call(C, "AnsiUpperCase", [L0["propname"]])), (await $.call(C, "AnsiUpperCase", ["<ForAllItems>"]))))) {
          L0["ci"] = (await $.mcall((await $.mv(L0["c"], "ItemClass")), "Create", [null]));
          L0["instance"] = L0["ci"];
          await $.stmt((await $.mcall(L0["cilist"], "Add", [L0["ci"]])));
        } else {
          if ($.truthy(($.eq((await $.call(C, "Copy", [L0["propname"], 1, 5])), "<Item")))) {
            L0["i"] = (await $.call(C, "StrToInt", [(await $.call(C, "Copy", [(await $.call(C, "Copy", [L0["propname"], 1, $.sub((await $.call(C, "Length", [L0["propname"]])), 1)])), 6, 100]))]));
            if ($.truthy($.lt(L0["i"], (await $.mv(L0["c"], "Count"))))) {
              L0["instance"] = (await $.idx((await $.mv(L0["c"], "Items")), [L0["i"]]));
            }
          }
        }
        if ($.truthy($.eq(L0["proppath"], ""))) {
          L0["result"] = true;
          return L0.result;
        }
        continue;
      }
      L0["interceptorclass"] = (await $.call(C, "GetInterceptorForTarget", [(await $.mv(L0["instance"], "ClassType"))]));
      if ($.truthy($.ne(L0["interceptorclass"], null))) {
        L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["interceptorclass"], "ClassInfo")), L0["propname"]]));
        if ($.truthy($.eq(L0["propinfo"], null))) {
          L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["instance"], "ClassInfo")), L0["propname"]]));
        }
      } else {
        L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["instance"], "ClassInfo")), L0["propname"]]));
      }
      if ($.truthy($.eq(L0["propinfo"], null))) {
        if ($.truthy($.is_(L0["instance"], "TPersistent"))) {
          L0["dpl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
          try {
            await $.stmt((await $.call(C, "GetDefinePropertyList", [(await $.call(C, "TPersistent", [L0["instance"]])), L0["dpl"]])));
            if ($.truthy($.eq((await $.mcall(L0["dpl"], "IndexOf", [L0["propname"]])), (-(1))))) {
              return L0.result;
            }
          } finally {
            await $.mcall(L0["dpl"], "Free", []);
          }
        }
      }
      if ($.truthy($.eq(L0["proppath"], ""))) {
        L0["result"] = true;
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.mv(L0["propinfo"], "PropType")), "Kind")), (await $.v(C, "tkClass"))))) {
        L0["instance"] = (await $.call(C, "TObject", [(await $.call(C, "GetOrdProp", [L0["instance"], L0["propinfo"]]))]));
        if ($.truthy($.eq(L0["instance"], null))) {
          return L0.result;
        }
      }
      await $.tick();
    }
  } finally {
    { const $t38 = $.sub((await $.mv(L0["cilist"], "Count")), 1);
      L0["i"] = 0;
      let $t39 = true;
      for (;;) {
        if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
        $t39 = false;
        if (!($.ord(L0["i"]) <= $.ord($t38))) break;
        await $.mcall((await $.call(C, "TCollectionItem", [(await $.idx(L0["cilist"], [L0["i"]]))])), "Free", []);
        await $.tick();
      }
    }
    await $.mcall(L0["cilist"], "Free", []);
  }
  return L0.result;
}, {"params": ["Instance", "PropPath"], "kind": "function", "ptypes": ["TObject", "String"]});
  U.method("TPropertyNamesEh", "CheckPropertyNames", async function CheckPropertyNames(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t40 = 0;
    L0["i"] = $.sub((await $.v(C, "Count")), 1);
    let $t41 = true;
    for (;;) {
      if (!$t41) { L0["i"] = $.succ(L0["i"], -1); }
      $t41 = false;
      if (!($.ord(L0["i"]) >= $.ord($t40))) break;
      if ($.truthy($.not((await $.call(C, "CheckPropertyPath", [(await $.idx((await $.v(C, "Strings")), [L0["i"]]))]))))) {
        await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["i"], async ($t42) => { L0["i"] = $t42; })])));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropertyNamesEh", "CompareStrings", async function CompareStrings(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s1": $.copyArg(p0), "s2": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["s1", "s2"]);
  L0["comparestr"] = $.fn(async function CompareStr(p0, p1) {
  const L1 = {"s1": $.copyArg(p0), "s2": $.copyArg(p1), result: 0, "token1": '', "token2": ''};
  await $.fixArgs(L1, ["s1", "s2"]);
  L1["result"] = 0;
  if ($.truthy((await $.and_(($.eq(L1["s1"], "")), async () => ($.eq(L1["s2"], "")))))) {
    return L1.result;
  }
  L1["token1"] = (await $.call(C, "GetNextPointSeparatedToken", [L1["s1"]]));
  L1["token2"] = (await $.call(C, "GetNextPointSeparatedToken", [L1["s2"]]));
  if ($.truthy((await $.and_(($.eq((await $.call(C, "UpperCase", [L1["token1"]])), "<P>")), async () => ($.ne((await $.call(C, "UpperCase", [L1["token2"]])), "<P>")))))) {
    L1["result"] = (-(1));
  } else {
    if ($.truthy((await $.and_(($.ne((await $.call(C, "UpperCase", [L1["token1"]])), "<P>")), async () => ($.eq((await $.call(C, "UpperCase", [L1["token2"]])), "<P>")))))) {
      L1["result"] = 1;
    } else {
      if ($.truthy((await $.and_(($.eq((await $.call(C, "Copy", [L1["token1"], 1, 1])), "<")), async () => ($.ne((await $.call(C, "Copy", [L1["token2"], 1, 1])), "<")))))) {
        L1["result"] = 1;
      } else {
        if ($.truthy((await $.and_(($.eq((await $.call(C, "Copy", [L1["token2"], 1, 1])), "<")), async () => ($.ne((await $.call(C, "Copy", [L1["token1"], 1, 1])), "<")))))) {
          L1["result"] = (-(1));
        } else {
          L1["result"] = (await $.call(C, "AnsiCompareText", [L1["token1"], L1["token2"]]));
          if ($.truthy($.eq(L1["result"], 0))) {
            await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L1["s1"], async ($t43) => { L1["s1"] = $t43; }), 1, $.add((await $.call(C, "Length", [L1["token1"]])), 1)])));
            await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L1["s2"], async ($t44) => { L1["s2"] = $t44; }), 1, $.add((await $.call(C, "Length", [L1["token1"]])), 1)])));
            L1["result"] = (await $.callv(L1["comparestr"], [L1["s1"], L1["s2"]]));
          }
        }
      }
    }
  }
  return L1.result;
});
  L0["result"] = (await $.callv(L0["comparestr"], [L0["s1"], L0["s2"]]));
  return L0.result;
}, {"params": ["S1", "S2"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TPropertyNamesEh", "SetRoot", async function SetRoot(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FRoot", L0["value"]);
  await $.stmt($.call(C, "CheckPropertyNames", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TComponent"]});
  U.method("TPropertyNamesEh", "Add", async function Add(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: 0, "i": 0};
  await $.fixArgs(L0, ["s"]);
  L0["result"] = (-(1));
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.v(C, "Root")), null)), async () => $.not(($.in_((await $.v(C, "csLoading")), (await $.mv((await $.v(C, "Root")), "ComponentState"))))))), async () => $.not((await $.call(C, "CheckPropertyPath", [L0["s"]]))))))) {
    return L0.result;
  }
  { const $t45 = $.sub((await $.v(C, "Count")), 1);
    L0["i"] = 0;
    let $t46 = true;
    for (;;) {
      if (!$t46) { L0["i"] = $.succ(L0["i"], 1); }
      $t46 = false;
      if (!($.ord(L0["i"]) <= $.ord($t45))) break;
      if ($.truthy($.eq((await $.call(C, "CompareStrings", [(await $.idx((await $.v(C, "Strings")), [L0["i"]])), L0["s"]])), 0))) {
        return L0.result;
      } else {
        if ($.truthy($.gt((await $.call(C, "CompareStrings", [(await $.idx((await $.v(C, "Strings")), [L0["i"]])), L0["s"]])), 0))) {
          await $.stmt((await $.call(C, "Insert", [L0["i"], $.ref(async () => L0["s"], async ($t47) => { L0["s"] = $t47; })])));
          L0["result"] = L0["i"];
          return L0.result;
        }
      }
      await $.tick();
    }
  }
  await $.inherited(Self, "TPropertyNamesEh", "Add", [L0["s"]], arguments);
  return L0.result;
}, {"params": ["S"], "kind": "function", "ptypes": ["String"]});
  return U;
}

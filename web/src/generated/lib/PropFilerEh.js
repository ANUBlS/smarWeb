// Generated from PropFilerEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PropFilerEh", ["Windows", "Forms", "Controls", "SysUtils", "Classes", "TypInfo", "Variants", "RTLConsts", "Consts"]);
  const C = [U];
  U.defClass("TPropWriterEh", "TWriter", {"fcurrootslist": {"name": "FCurRootsList", "type": "TList"}, "fdefnbinproplist": {"name": "FDefnBinPropList", "type": "TStringList"}, "fdefnproplist": {"name": "FDefnPropList", "type": "TStringList"}, "finterceptorlist": {"name": "FInterceptorList", "type": "TList"}, "flastrootslist": {"name": "FLastRootsList", "type": "TList"}, "fproppath": {"name": "FPropPath", "type": "String"}, "fonwriteownerprops": {"name": "FOnWriteOwnerProps", "type": "TWriteOwnerPropsEventEh"}}, {"onwriteownerprops": {"name": "OnWriteOwnerProps", "read": "FOnWriteOwnerProps", "write": "FOnWriteOwnerProps"}});
  U.defClass("TPropReaderEh", "TReader", {"fcanhandleexcepts": {"name": "FCanHandleExcepts", "type": "Boolean"}, "fcollectionlist": {"name": "FCollectionList", "type": "TList"}, "finterceptorlist": {"name": "FInterceptorList", "type": "TList"}, "fpropname": {"name": "FPropName", "type": "String"}, "fonreadownerprop": {"name": "FOnReadOwnerProp", "type": "TReadOwnerPropEventEh"}}, {"onreadownerprop": {"name": "OnReadOwnerProp", "read": "FOnReadOwnerProp", "write": "FOnReadOwnerProp"}});
  U.defClass("TStoragePropertyInterceptor", "TPersistent", {"ftarget": {"name": "FTarget", "type": "TObject"}}, {"target": {"name": "Target", "read": "FTarget"}});
  U.defClass("TFormStoragePropertyInterceptor", "TStoragePropertyInterceptor", {"factivecontrol": {"name": "FActiveControl", "type": "TWinControl"}, "fheight": {"name": "FHeight", "type": "Integer"}, "fleft": {"name": "FLeft", "type": "Integer"}, "fpixelsperinch": {"name": "FPixelsPerInch", "type": "Integer"}, "fpospresent": {"name": "FPosPresent", "type": "Boolean"}, "ftop": {"name": "FTop", "type": "Integer"}, "fwidth": {"name": "FWidth", "type": "Integer"}, "fwindowstate": {"name": "FWindowState", "type": "TWindowState"}}, {"activecontrol": {"name": "ActiveControl", "write": "FActiveControl"}, "height": {"name": "Height", "read": "GetHeight", "write": "FHeight"}, "left": {"name": "Left", "read": "GetLeft", "write": "SetLeft"}, "pixelsperinch": {"name": "PixelsPerInch", "write": "FPixelsPerInch"}, "top": {"name": "Top", "read": "GetTop", "write": "SetTop"}, "width": {"name": "Width", "read": "GetWidth", "write": "FWidth"}, "windowstate": {"name": "WindowState", "write": "FWindowState"}});
  U.defClass("TComponentCrack", "TComponent", {}, {});
  U.defClass("TForChildListObj", "TObject", {"fchildlist": {"name": "FChildList", "type": "TStringList"}}, {});
  U.defClass("TPersistentCrack", "TPersistent", {}, {});
  U.defClass("TNastyForm", "TScrollingWinControl", {"factivecontrol": {"name": "FActiveControl", "type": "TWinControl"}, "ffocusedcontrol": {"name": "FFocusedControl", "type": "TWinControl"}, "fbordericons": {"name": "FBorderIcons", "type": "TBorderIcons"}, "fborderstyle": {"name": "FBorderStyle", "type": "TFormBorderStyle"}, "fsizechanging": {"name": "FSizeChanging", "type": "Boolean"}, "fwindowstate": {"name": "FWindowState", "type": "TWindowState"}, "fshowaction": {"name": "FShowAction", "type": "TShowAction"}, "fkeypreview": {"name": "FKeyPreview", "type": "Boolean"}, "factive": {"name": "FActive", "type": "Boolean"}, "fformstyle": {"name": "FFormStyle", "type": "TFormStyle"}, "fposition": {"name": "FPosition", "type": "TPosition"}}, {});
  U.init(async () => {
    U.var_("IsRaiseReadErrorEh", false, "Boolean");
    U.var_("ForChildListObj", null, "TForChildListObj");
    U.var_("InterceptorList", null, "TList");
    U.var_("TargetList", null, "TList");
  });
  U.method("TForChildListObj", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FChildList", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TForChildListObj", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FChildList")), "Free", []);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TForChildListObj", "GetChildList", async function GetChildList(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parentcomp": $.copyArg(p0), "root": $.copyArg(p1), "cl": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["parentcomp", "root", "cl"]);
  await $.mcall((await $.v(C, "FChildList")), "Clear", []);
  await $.stmt((await $.mcall((await $.call(C, "TComponentCrack", [L0["parentcomp"]])), "GetChildren", [(await $.v(C, "GetChildProc")), L0["root"]])));
  await $.stmt((await $.mcall(L0["cl"], "Assign", [(await $.v(C, "FChildList"))])));
  return L0.result;
}, {"params": ["ParentComp", "Root", "cl"], "kind": "procedure", "ptypes": ["TComponent", "TComponent", "TStrings"]});
  U.method("TForChildListObj", "GetChildProc", async function GetChildProc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"child": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["child"]);
  await $.stmt((await $.mcall((await $.v(C, "FChildList")), "AddObject", [(await $.mv(L0["child"], "Name")), L0["child"]])));
  return L0.result;
}, {"params": ["Child"], "kind": "procedure", "ptypes": ["TComponent"]});
  U.func("GetComponentChildListEh", async function GetComponentChildListEh(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"parentcomp": $.copyArg(p0), "root": $.copyArg(p1), "cl": $.copyArg(p2), "checkinline": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["parentcomp", "root", "cl", "checkinline"]);
  if ($.truthy($.eq((await $.v(C, "ForChildListObj")), null))) {
    await $.set(C, "ForChildListObj", (await $.mv((await $.v(C, "TForChildListObj")), "Create")));
  }
  if ($.truthy((await $.and_(L0["checkinline"], async () => ($.ne(L0["parentcomp"], L0["root"])))))) {
    await $.stmt((await $.mcall((await $.v(C, "ForChildListObj")), "GetChildList", [L0["parentcomp"], (await $.mv(L0["parentcomp"], "Owner")), L0["cl"]])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ForChildListObj")), "GetChildList", [L0["parentcomp"], L0["root"], L0["cl"]])));
  }
  return L0.result;
}, {"params": ["ParentComp", "Root", "cl", "CheckInline"], "kind": "procedure", "ptypes": ["TComponent", "TComponent", "TStrings", "Boolean"]});
  U.func("FindChildComponent", async function FindChildComponent(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"parentcomp": $.copyArg(p0), "root": $.copyArg(p1), "aname": $.copyArg(p2), "checkinline": $.copyArg(p3), result: null, "childlist": null, "idx": 0};
  await $.fixArgs(L0, ["parentcomp", "root", "aname", "checkinline"]);
  L0["childlist"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    await $.stmt((await $.call(C, "GetComponentChildListEh", [L0["parentcomp"], L0["root"], L0["childlist"], L0["checkinline"]])));
    L0["idx"] = (await $.mcall(L0["childlist"], "IndexOf", [L0["aname"]]));
    if ($.truthy($.gt(L0["idx"], (-(1))))) {
      L0["result"] = (await $.call(C, "TComponent", [(await $.idx((await $.mv(L0["childlist"], "Objects")), [L0["idx"]]))]));
    } else {
      L0["result"] = null;
    }
  } finally {
    await $.mcall(L0["childlist"], "Free", []);
  }
  return L0.result;
}, {"params": ["ParentComp", "Root", "AName", "CheckInline"], "kind": "function", "ptypes": ["TComponent", "TComponent", "String", "Boolean"]});
  U.func("GetNextPointSeparatedToken", async function GetNextPointSeparatedToken(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.copyArg(p0), result: '', "ppos": 0};
  await $.fixArgs(L0, ["path"]);
  L0["ppos"] = (await $.call(C, "Pos", [".", L0["path"]]));
  if ($.truthy($.gt(L0["ppos"], 0))) {
    L0["result"] = (await $.call(C, "Copy", [L0["path"], 1, $.sub(L0["ppos"], 1)]));
  } else {
    L0["result"] = L0["path"];
  }
  return L0.result;
}, {"params": ["Path"], "kind": "function", "ptypes": ["String"]});
  U.func("RegisterReadPropertyInterceptor", async function RegisterReadPropertyInterceptor(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"target": $.copyArg(p0), "interceptor": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["target", "interceptor"]);
  if ($.truthy($.eq((await $.v(C, "InterceptorList")), null))) {
    await $.set(C, "InterceptorList", (await $.mv((await $.v(C, "TList")), "Create")));
    await $.set(C, "TargetList", (await $.mv((await $.v(C, "TList")), "Create")));
  }
  { const $t1 = 0;
    L0["i"] = $.sub((await $.mv((await $.v(C, "TargetList")), "Count")), 1);
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], -1); }
      $t2 = false;
      if (!($.ord(L0["i"]) >= $.ord($t1))) break;
      if ($.truthy(($.eq((await $.idx((await $.v(C, "TargetList")), [L0["i"]])), L0["target"])))) {
        await $.stmt((await $.call(C, "UnregisterReadPropertyInterceptor", [L0["target"], (await $.idx((await $.v(C, "InterceptorList")), [L0["i"]]))])));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "InterceptorList")), "Add", [L0["interceptor"]])));
  await $.stmt((await $.mcall((await $.v(C, "TargetList")), "Add", [L0["target"]])));
  return L0.result;
}, {"params": ["Target", "Interceptor"], "kind": "procedure", "ptypes": ["TClass", "TReadPropertyInterceptorClass"]});
  U.func("UnregisterReadPropertyInterceptor", async function UnregisterReadPropertyInterceptor(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"target": $.copyArg(p0), "interceptor": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["target", "interceptor"]);
  { const $t3 = 0;
    L0["i"] = $.sub((await $.mv((await $.v(C, "TargetList")), "Count")), 1);
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], -1); }
      $t4 = false;
      if (!($.ord(L0["i"]) >= $.ord($t3))) break;
      if ($.truthy((await $.and_(($.eq((await $.idx((await $.v(C, "TargetList")), [L0["i"]])), L0["target"])), async () => ($.eq((await $.idx((await $.v(C, "InterceptorList")), [L0["i"]])), L0["interceptor"])))))) {
        await $.stmt((await $.mcall((await $.v(C, "InterceptorList")), "Delete", [$.ref(async () => L0["i"], async ($t5) => { L0["i"] = $t5; })])));
        await $.stmt((await $.mcall((await $.v(C, "TargetList")), "Delete", [$.ref(async () => L0["i"], async ($t6) => { L0["i"] = $t6; })])));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Target", "Interceptor"], "kind": "procedure", "ptypes": ["TClass", "TReadPropertyInterceptorClass"]});
  U.func("GetInterceptorForTarget", async function GetInterceptorForTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"target": $.copyArg(p0), result: null, "deep": 0, "meendeep": 0, "i": 0};
  await $.fixArgs(L0, ["target"]);
  L0["getclassdeep"] = $.fn(async function GetClassDeep(p0, p1) {
  const L1 = {"target": $.copyArg(p0), "classname": $.copyArg(p1), result: 0, "parenttarget": null};
  await $.fixArgs(L1, ["target", "classname"]);
  L1["result"] = 0;
  L1["parenttarget"] = L1["target"];
  while ($.truthy(true)) {
    if ($.truthy($.eq((await $.call(C, "UpperCase", [(await $.mv(L1["parenttarget"], "ClassName"))])), (await $.call(C, "UpperCase", [L1["classname"]]))))) {
      return L1.result;
    }
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["result"], async ($t7) => { L1["result"] = $t7; })])));
    L1["parenttarget"] = (await $.mv(L1["parenttarget"], "ClassParent"));
    if ($.truthy($.eq(L1["parenttarget"], null))) {
      L1["result"] = (await $.v(C, "MAXINT"));
      return L1.result;
    }
    await $.tick();
  }
  return L1.result;
});
  L0["result"] = null;
  if ($.truthy($.eq((await $.v(C, "TargetList")), null))) {
    return L0.result;
  }
  L0["meendeep"] = (await $.v(C, "MAXINT"));
  { const $t8 = $.sub((await $.mv((await $.v(C, "TargetList")), "Count")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      if ($.truthy((await $.mcall(L0["target"], "InheritsFrom", [(await $.call(C, "TClass", [(await $.idx((await $.v(C, "TargetList")), [L0["i"]]))]))])))) {
        L0["deep"] = (await $.callv(L0["getclassdeep"], [L0["target"], (await $.mv((await $.call(C, "TClass", [(await $.idx((await $.v(C, "TargetList")), [L0["i"]]))])), "ClassName"))]));
        if ($.truthy($.lt(L0["deep"], L0["meendeep"]))) {
          L0["meendeep"] = L0["deep"];
          L0["result"] = (await $.idx((await $.v(C, "InterceptorList")), [L0["i"]]));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Target"], "kind": "function", "ptypes": ["TClass"]});
  U.func("SameText", async function SameText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s1": $.copyArg(p0), "s2": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["s1", "s2"]);
  L0["result"] = ($.eq((await $.call(C, "CompareText", [L0["s1"], L0["s2"]])), 0));
  return L0.result;
}, {"params": ["S1", "S2"], "kind": "function", "ptypes": ["String", "String"]});
  U.func("FindNestedComponent", async function FindNestedComponent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"root": $.copyArg(p0), "namepath": $.copyArg(p1), result: null, "current": null, "found": null, "s": '', "p": '', "name": ''};
  await $.fixArgs(L0, ["root", "namepath"]);
  L0["result"] = null;
  if ($.truthy($.eq(L0["namepath"], ""))) {
    return L0.result;
  }
  L0["current"] = L0["root"];
  L0["p"] = (await $.call(C, "PChar", [(await $.call(C, "Pointer", [L0["namepath"]]))]));
  while ($.truthy($.ne(L0["p"], "\u0000"))) {
    L0["s"] = L0["p"];
    while ($.truthy($.not(($.in_(L0["p"], [".", "-", "\u0000"]))))) {
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t10) => { L0["p"] = $t10; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["name"], async ($t11) => { L0["name"] = $t11; }), L0["s"], $.sub(L0["p"], L0["s"])])));
    L0["found"] = (await $.mcall(L0["current"], "FindComponent", [L0["name"]]));
    if ($.truthy((await $.and_(($.eq(L0["found"], null)), async () => (await $.call(C, "SameText", [L0["name"], "Owner"])))))) {
      L0["found"] = L0["current"];
    }
    if ($.truthy($.eq(L0["found"], null))) {
      return L0.result;
    }
    if ($.truthy($.eq(L0["p"], "."))) {
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t12) => { L0["p"] = $t12; })])));
    }
    if ($.truthy($.eq(L0["p"], "-"))) {
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t13) => { L0["p"] = $t13; })])));
    }
    if ($.truthy($.eq(L0["p"], ">"))) {
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t14) => { L0["p"] = $t14; })])));
    }
    L0["current"] = L0["found"];
    await $.tick();
  }
  L0["result"] = L0["current"];
  return L0.result;
}, {"params": ["Root", "NamePath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPropWriterEh", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), "bufsize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["stream", "bufsize"]);
  await $.inherited(Self, "TPropWriterEh", "Create", [L0["stream"], L0["bufsize"]], arguments);
  await $.set(C, "FDefnPropList", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "FDefnBinPropList", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "FLastRootsList", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.set(C, "FCurRootsList", (await $.mv((await $.v(C, "TList")), "Create")));
  return L0.result;
}, {"params": ["Stream", "BufSize"], "kind": "constructor", "ptypes": ["TStream", "Integer"]});
  U.method("TPropWriterEh", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t15 = $.sub((await $.mv((await $.v(C, "FDefnPropList")), "Count")), 1);
    L0["i"] = 0;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      await $.stmt((await $.call(C, "Dispose", [(await $.call(C, "Pointer", [(await $.idx((await $.mv((await $.v(C, "FDefnPropList")), "Objects")), [L0["i"]]))]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FDefnPropList")), "Free", []);
  { const $t17 = $.sub((await $.mv((await $.v(C, "FDefnBinPropList")), "Count")), 1);
    L0["i"] = 0;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
      $t18 = false;
      if (!($.ord(L0["i"]) <= $.ord($t17))) break;
      await $.stmt((await $.call(C, "Dispose", [(await $.call(C, "Pointer", [(await $.idx((await $.mv((await $.v(C, "FDefnBinPropList")), "Objects")), [L0["i"]]))]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FDefnBinPropList")), "Free", []);
  await $.mcall((await $.v(C, "FLastRootsList")), "Free", []);
  await $.mcall((await $.v(C, "FCurRootsList")), "Free", []);
  await $.inherited(Self, "TPropWriterEh", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPropWriterEh", "BuildPropsList", async function BuildPropsList(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aobject": $.copyArg(p0), "sl": $.copyArg(p1), result: undefined, "proplist": null, "propcount": 0, "fsize": 0, "i": 0, "j": 0, "subo": null, "subsl": null};
  await $.fixArgs(L0, ["aobject", "sl"]);
  L0["subsl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["propcount"] = (await $.call(C, "GetPropList", [(await $.mv(L0["aobject"], "ClassInfo")), (await $.v(C, "tkProperties")), null]));
  L0["fsize"] = $.mul(L0["propcount"], (await $.call(C, "SizeOf", [(await $.v(C, "Pointer"))])));
  await $.stmt((await $.call(C, "GetMem", [L0["proplist"], L0["fsize"]])));
  await $.stmt((await $.call(C, "GetPropList", [(await $.mv(L0["aobject"], "ClassInfo")), (await $.v(C, "tkProperties")), L0["proplist"]])));
  { const $t19 = $.sub(L0["propcount"], 1);
    L0["i"] = 0;
    let $t20 = true;
    for (;;) {
      if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
      $t20 = false;
      if (!($.ord(L0["i"]) <= $.ord($t19))) break;
      if ($.truthy($.eq((await $.mv((await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "PropType")), "Kind")), (await $.v(C, "tkClass"))))) {
        L0["subo"] = (await $.call(C, "TObject", [(await $.call(C, "GetOrdProp", [L0["aobject"], (await $.idx(L0["proplist"], [L0["i"]]))]))]));
        if ($.truthy((await $.call(C, "Assigned", [L0["subo"]])))) {
          await $.mcall(L0["subsl"], "Clear", []);
          if ($.truthy($.not(($.is_(L0["subo"], "TComponent"))))) {
            await $.stmt((await $.call(C, "BuildPropsList", [L0["subo"], L0["subsl"]])));
            { const $t21 = $.sub((await $.mv(L0["subsl"], "Count")), 1);
              L0["j"] = 0;
              let $t22 = true;
              for (;;) {
                if (!$t22) { L0["j"] = $.succ(L0["j"], 1); }
                $t22 = false;
                if (!($.ord(L0["j"]) <= $.ord($t21))) break;
                await $.stmt((await $.mcall(L0["sl"], "Add", [$.add($.add((await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name")), "."), (await $.idx(L0["subsl"], [L0["j"]])))])));
                await $.tick();
              }
            }
          }
          if ($.truthy(($.is_(L0["subo"], "TCollection")))) {
            await $.stmt((await $.mcall(L0["sl"], "Add", [(await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name"))])));
          }
        }
      } else {
        await $.stmt((await $.mcall(L0["sl"], "Add", [(await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name"))])));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FreeMem", [L0["proplist"], L0["fsize"]])));
  await $.mcall(L0["subsl"], "Clear", []);
  await $.stmt((await $.call(C, "DefineObjectProperties", [L0["aobject"]])));
  await $.stmt((await $.mcall(L0["sl"], "AddStrings", [(await $.v(C, "FDefnPropList"))])));
  await $.stmt((await $.mcall(L0["sl"], "AddStrings", [(await $.v(C, "FDefnBinPropList"))])));
  await $.mcall(L0["subsl"], "Free", []);
  return L0.result;
}, {"params": ["AObject", "sl"], "kind": "procedure", "ptypes": ["TObject", "TStrings"]});
  U.method("TPropWriterEh", "WriteOwnerProperties", async function WriteOwnerProperties(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"owner": $.copyArg(p0), "proplist": $.copyArg(p1), result: undefined, "i": 0, "j": 0, "level": 0, "path": '', "ppos": 0, "compname": '', "newcomponent": null, "curowner": null};
  await $.fixArgs(L0, ["owner", "proplist"]);
  await $.set(C, "Root", L0["owner"]);
  await $.stmt($.call(C, "WriteSignature", []));
  await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["owner"], "ClassName"))])));
  await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["owner"], "Name"))])));
  await $.set(C, "FInterceptorList", (await $.mv((await $.v(C, "TList")), "Create")));
  { const $t23 = $.sub((await $.mv(L0["proplist"], "Count")), 1);
    L0["i"] = 0;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
      $t24 = false;
      if (!($.ord(L0["i"]) <= $.ord($t23))) break;
      L0["path"] = (await $.idx(L0["proplist"], [L0["i"]]));
      L0["ppos"] = (await $.call(C, "Pos", [".", L0["path"]]));
      if ($.truthy($.gt(L0["ppos"], 0))) {
        L0["compname"] = (await $.call(C, "Copy", [L0["path"], 1, $.sub(L0["ppos"], 1)]));
      } else {
        throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Component name is empty."])));
      }
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t25) => { L0["path"] = $t25; }), 1, L0["ppos"]])));
      if ($.truthy($.eq(L0["compname"], "<P>"))) {
        await $.stmt((await $.call(C, "SaveObjectProperyValue", [L0["owner"], L0["path"], (await $.idx(L0["proplist"], [L0["i"]]))])));
      }
      await $.mcall((await $.v(C, "FLastRootsList")), "Clear", []);
      await $.mset((await $.v(C, "FLastRootsList")), "Capacity", (await $.mv((await $.v(C, "FCurRootsList")), "Capacity")));
      { const $t26 = $.sub((await $.mv((await $.v(C, "FCurRootsList")), "Count")), 1);
        L0["j"] = 0;
        let $t27 = true;
        for (;;) {
          if (!$t27) { L0["j"] = $.succ(L0["j"], 1); }
          $t27 = false;
          if (!($.ord(L0["j"]) <= $.ord($t26))) break;
          await $.stmt((await $.mcall((await $.v(C, "FLastRootsList")), "Add", [(await $.idx((await $.v(C, "FCurRootsList")), [L0["j"]]))])));
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "FCurRootsList")), "Clear", []);
      await $.tick();
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnWriteOwnerProps"))])))) {
    await $.stmt((await $.call(C, "OnWriteOwnerProps", [Self])));
  }
  await $.stmt($.call(C, "WriteListEnd", []));
  { const $t28 = $.sub((await $.mv(L0["proplist"], "Count")), 1);
    L0["i"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["i"] = $.succ(L0["i"], 1); }
      $t29 = false;
      if (!($.ord(L0["i"]) <= $.ord($t28))) break;
      L0["path"] = (await $.idx(L0["proplist"], [L0["i"]]));
      L0["compname"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t30) => { L0["path"] = $t30; }), 1, $.add((await $.call(C, "Length", [L0["compname"]])), 1)])));
      if ($.truthy($.eq(L0["compname"], "<P>"))) {
        continue;
      }
      L0["curowner"] = L0["owner"];
      L0["level"] = 1;
      while ($.truthy($.ne(L0["compname"], "<P>"))) {
        if ($.truthy($.eq(L0["compname"], ""))) {
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Component name is empty."])));
        }
        L0["newcomponent"] = (await $.call(C, "FindChildComponent", [L0["curowner"], (await $.v(C, "Root")), L0["compname"], true]));
        if ($.truthy($.eq(L0["newcomponent"], null))) {
          break;
        }
        L0["curowner"] = L0["newcomponent"];
        if ($.truthy($.lt((await $.mv((await $.v(C, "FCurRootsList")), "Count")), L0["level"]))) {
          if ($.truthy($.gt((await $.mv((await $.v(C, "FCurRootsList")), "Count")), 0))) {
            await $.stmt($.call(C, "WriteListEnd", []));
          }
          await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["newcomponent"], "ClassName"))])));
          await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["newcomponent"], "Name"))])));
          await $.stmt((await $.mcall((await $.v(C, "FCurRootsList")), "Add", [L0["newcomponent"]])));
        } else {
          if ($.truthy($.gt((await $.mv((await $.v(C, "FCurRootsList")), "Count")), L0["level"]))) {
            if ($.truthy($.ne(L0["compname"], (await $.mv((await $.call(C, "TComponent", [(await $.idx((await $.v(C, "FCurRootsList")), [$.sub(L0["level"], 1)]))])), "Name"))))) {
              await $.stmt($.call(C, "WriteListEnd", []));
              { const $t31 = $.sub(L0["level"], 1);
                L0["j"] = $.sub((await $.mv((await $.v(C, "FCurRootsList")), "Count")), 1);
                let $t32 = true;
                for (;;) {
                  if (!$t32) { L0["j"] = $.succ(L0["j"], -1); }
                  $t32 = false;
                  if (!($.ord(L0["j"]) >= $.ord($t31))) break;
                  await $.stmt($.call(C, "WriteListEnd", []));
                  await $.stmt((await $.mcall((await $.v(C, "FCurRootsList")), "Delete", [$.ref(async () => L0["j"], async ($t33) => { L0["j"] = $t33; })])));
                  await $.tick();
                }
              }
              await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["newcomponent"], "ClassName"))])));
              await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["newcomponent"], "Name"))])));
              await $.stmt((await $.mcall((await $.v(C, "FCurRootsList")), "Add", [L0["newcomponent"]])));
            }
          } else {
            if ($.truthy($.ne(L0["compname"], (await $.mv((await $.call(C, "TComponent", [(await $.idx((await $.v(C, "FCurRootsList")), [$.sub(L0["level"], 1)]))])), "Name"))))) {
              await $.stmt($.call(C, "WriteListEnd", []));
              { const $t34 = L0["level"];
                L0["j"] = (await $.mv((await $.v(C, "FCurRootsList")), "Count"));
                let $t35 = true;
                for (;;) {
                  if (!$t35) { L0["j"] = $.succ(L0["j"], -1); }
                  $t35 = false;
                  if (!($.ord(L0["j"]) >= $.ord($t34))) break;
                  await $.stmt($.call(C, "WriteListEnd", []));
                  await $.stmt((await $.mcall((await $.v(C, "FCurRootsList")), "Delete", [$.sub(L0["j"], 1)])));
                  await $.tick();
                }
              }
              await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["newcomponent"], "ClassName"))])));
              await $.stmt((await $.call(C, "WriteStr", [(await $.mv(L0["newcomponent"], "Name"))])));
              await $.stmt((await $.mcall((await $.v(C, "FCurRootsList")), "Add", [L0["newcomponent"]])));
            }
          }
        }
        L0["compname"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
        await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t36) => { L0["path"] = $t36; }), 1, $.add((await $.call(C, "Length", [L0["compname"]])), 1)])));
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["level"], async ($t37) => { L0["level"] = $t37; })])));
        await $.tick();
      }
      await $.stmt((await $.call(C, "SaveObjectProperyValue", [(await $.call(C, "TObject", [(await $.idx((await $.v(C, "FCurRootsList")), [$.sub((await $.mv((await $.v(C, "FCurRootsList")), "Count")), 1)]))])), L0["path"], (await $.idx(L0["proplist"], [L0["i"]]))])));
      await $.tick();
    }
  }
  await $.stmt($.call(C, "WriteListEnd", []));
  { const $t38 = 0;
    L0["j"] = $.sub((await $.mv((await $.v(C, "FCurRootsList")), "Count")), 1);
    let $t39 = true;
    for (;;) {
      if (!$t39) { L0["j"] = $.succ(L0["j"], -1); }
      $t39 = false;
      if (!($.ord(L0["j"]) >= $.ord($t38))) break;
      await $.stmt($.call(C, "WriteListEnd", []));
      await $.stmt((await $.mcall((await $.v(C, "FCurRootsList")), "Delete", [$.ref(async () => L0["j"], async ($t40) => { L0["j"] = $t40; })])));
      await $.tick();
    }
  }
  await $.stmt($.call(C, "WriteListEnd", []));
  await $.stmt($.call(C, "FlushBuffer", []));
  { const $t41 = 0;
    L0["i"] = $.sub((await $.mv((await $.v(C, "FInterceptorList")), "Count")), 1);
    let $t42 = true;
    for (;;) {
      if (!$t42) { L0["i"] = $.succ(L0["i"], -1); }
      $t42 = false;
      if (!($.ord(L0["i"]) >= $.ord($t41))) break;
      {
        const $t43 = (await $.call(C, "TStoragePropertyInterceptor", [(await $.idx((await $.v(C, "FInterceptorList")), [L0["i"]]))]));
        await $.stmt($.wcall([$t43], "Free", [], C));
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FInterceptorList")), "Free", []);
  return L0.result;
}, {"params": ["Owner", "PropList"], "kind": "procedure", "ptypes": ["TComponent", "TStrings"]});
  U.method("TPropWriterEh", "SaveObjectProperyValue", async function SaveObjectProperyValue(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"instance": $.copyArg(p0), "path": $.copyArg(p1), "fullpath": $.copyArg(p2), result: undefined, "propinfo": null, "proptype": null, "propname": '', "ppos": 0, "index": 0, "i": 0, "j": 0, "collection": null, "sl": null, "suffix": ''};
  await $.fixArgs(L0, ["instance", "path", "fullpath"]);
  L0["writecollectionitemasproperty"] = $.fn(async function WriteCollectionItemAsProperty(p0, p1, p2) {
  const L1 = {"item": $.copyArg(p0), "path": $.copyArg(p1), "fullpath": $.copyArg(p2), result: undefined, "oldancestor": null, "saveproppath": ''};
  await $.fixArgs(L1, ["item", "path", "fullpath"]);
  L1["oldancestor"] = (await $.v(C, "Ancestor"));
  L1["saveproppath"] = (await $.v(C, "FPropPath"));
  try {
    await $.set(C, "FPropPath", $.add($.add($.add((await $.v(C, "FPropPath")), "__Item"), (await $.call(C, "IntToStr", [(await $.mv(L1["item"], "Index"))]))), "."));
    await $.stmt((await $.call(C, "SaveObjectProperyValue", [L1["item"], L1["path"], L1["fullpath"]])));
  } finally {
    await $.set(C, "Ancestor", L1["oldancestor"]);
    await $.set(C, "FPropPath", L1["saveproppath"]);
  }
  return L1.result;
});
  L0["writeproppath"] = $.fn(async function WritePropPath() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "WritePropName", [(await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "Name"))])));
  return L1.result;
});
  L0["writeset"] = $.fn(async function WriteSet(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined, "i": 0, "basetype": null};
  await $.fixArgs(L1, ["value"]);
  L1["basetype"] = (await $.mv((await $.call(C, "GetTypeData", [L0["proptype"]])), "CompType"));
  await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaSet"))])));
  { const $t44 = $.sub($.mul((await $.call(C, "SizeOf", [(await $.v(C, "TIntegerSet"))])), 8), 1);
    L1["i"] = 0;
    let $t45 = true;
    for (;;) {
      if (!$t45) { L1["i"] = $.succ(L1["i"], 1); }
      $t45 = false;
      if (!($.ord(L1["i"]) <= $.ord($t44))) break;
      if ($.truthy($.in_(L1["i"], (await $.call(C, "TIntegerSet", [L1["value"]]))))) {
        await $.stmt((await $.call(C, "WriteStr", [(await $.call(C, "GetEnumName", [L1["basetype"], L1["i"]]))])));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "WriteStr", [""])));
  return L1.result;
});
  L0["writeintprop"] = $.fn(async function WriteIntProp(p0, p1) {
  const L1 = {"inttype": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["inttype", "value"]);
  await $.stmt((await $.call(C, "WriteInteger", [L1["value"]])));
  return L1.result;
});
  L0["writecollectionprop"] = $.fn(async function WriteCollectionProp(p0) {
  const L1 = {"collection": $.copyArg(p0), result: undefined, "saveproppath": ''};
  await $.fixArgs(L1, ["collection"]);
  await $.stmt($.callv(L0["writeproppath"], []));
  L1["saveproppath"] = (await $.v(C, "FPropPath"));
  try {
    await $.set(C, "FPropPath", "");
    await $.stmt((await $.call(C, "WriteCollection", [L1["collection"]])));
  } finally {
    await $.set(C, "FPropPath", L1["saveproppath"]);
  }
  return L1.result;
});
  L0["writeordprop"] = $.fn(async function WriteOrdProp() {
  const L1 = {result: undefined, "value": 0};
  L1["value"] = (await $.call(C, "GetOrdProp", [L0["instance"], L0["propinfo"]]));
  await $.stmt($.callv(L0["writeproppath"], []));
  { const $t46 = (await $.mv(L0["proptype"], "Kind"));
    if ($.eq($t46, (await $.v(C, "tkInteger")))) {
      await $.stmt((await $.callv(L0["writeintprop"], [(await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "PropType")), L1["value"]])));
    }
    else if ($.eq($t46, (await $.v(C, "tkChar")))) {
      await $.stmt((await $.call(C, "WriteChar", [(await $.call(C, "Chr", [L1["value"]]))])));
    }
    else if ($.eq($t46, (await $.v(C, "tkSet")))) {
      await $.stmt((await $.callv(L0["writeset"], [L1["value"]])));
    }
    else if ($.eq($t46, (await $.v(C, "tkEnumeration")))) {
      await $.stmt((await $.call(C, "WriteIdent", [(await $.call(C, "GetEnumName", [L0["proptype"], L1["value"]]))])));
    }
  }
  return L1.result;
});
  L0["writefloatprop"] = $.fn(async function WriteFloatProp() {
  const L1 = {result: undefined, "value": 0};
  L1["value"] = (await $.call(C, "GetFloatProp", [L0["instance"], L0["propinfo"]]));
  await $.stmt($.callv(L0["writeproppath"], []));
  await $.stmt((await $.call(C, "WriteFloat", [L1["value"]])));
  return L1.result;
});
  L0["writeint64prop"] = $.fn(async function WriteInt64Prop() {
  const L1 = {result: undefined, "value": 0};
  L1["value"] = (await $.call(C, "GetInt64Prop", [L0["instance"], L0["propinfo"]]));
  await $.stmt($.callv(L0["writeproppath"], []));
  await $.stmt((await $.call(C, "WriteInteger", [L1["value"]])));
  return L1.result;
});
  L0["writestrprop"] = $.fn(async function WriteStrProp() {
  const L1 = {result: undefined, "value": ''};
  L1["value"] = (await $.call(C, "GetStrProp", [L0["instance"], L0["propinfo"]]));
  await $.stmt($.callv(L0["writeproppath"], []));
  await $.stmt((await $.call(C, "WriteString", [L1["value"]])));
  return L1.result;
});
  L0["ownedby"] = $.fn(async function OwnedBy(p0, p1) {
  const L1 = {"component": $.copyArg(p0), "owner": $.copyArg(p1), result: false};
  await $.fixArgs(L1, ["component", "owner"]);
  L1["result"] = true;
  while ($.truthy($.ne(L1["component"], null))) {
    if ($.truthy($.eq(L1["component"], L1["owner"]))) {
      return L1.result;
    } else {
      L1["component"] = (await $.mv(L1["component"], "Owner"));
    }
    await $.tick();
  }
  L1["result"] = false;
  return L1.result;
});
  L0["getcomponentvalue"] = $.fn(async function GetComponentValue(p0) {
  const L1 = {"component": $.copyArg(p0), result: ''};
  await $.fixArgs(L1, ["component"]);
  if ($.truthy($.eq((await $.mv(L1["component"], "Owner")), (await $.v(C, "Root"))))) {
    L1["result"] = (await $.mv(L1["component"], "Name"));
  } else {
    if ($.truthy($.eq(L1["component"], (await $.v(C, "Root"))))) {
      L1["result"] = "Owner";
    } else {
      if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv(L1["component"], "Owner")), null)), async () => ($.ne((await $.mv((await $.mv(L1["component"], "Owner")), "Name")), "")))), async () => ($.ne((await $.mv(L1["component"], "Name")), "")))))) {
        if ($.truthy((await $.callv(L0["ownedby"], [(await $.mv(L1["component"], "Owner")), (await $.v(C, "Root"))])))) {
          L1["result"] = $.add($.add((await $.callv(L1["getcomponentvalue"], [(await $.mv(L1["component"], "Owner"))])), "."), (await $.mv(L1["component"], "Name")));
        } else {
          L1["result"] = $.add($.add((await $.mv((await $.mv(L1["component"], "Owner")), "Name")), "."), (await $.mv(L1["component"], "Name")));
        }
      } else {
        if ($.truthy($.ne((await $.mv(L1["component"], "Name")), ""))) {
          L1["result"] = $.add((await $.mv(L1["component"], "Name")), ".Owner");
        } else {
          L1["result"] = "";
        }
      }
    }
  }
  return L1.result;
});
  L0["writeobjectprop"] = $.fn(async function WriteObjectProp() {
  const L1 = {result: undefined, "value": null, "oldancestor": null, "saveproppath": '', "componentvalue": ''};
  L1["value"] = (await $.call(C, "TObject", [(await $.call(C, "GetOrdProp", [L0["instance"], L0["propinfo"]]))]));
  if ($.truthy($.eq(L1["value"], null))) {
    await $.stmt($.callv(L0["writeproppath"], []));
    await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaNil"))])));
  } else {
    if ($.truthy($.is_(L1["value"], "TPersistent"))) {
      if ($.truthy(($.is_(L1["value"], "TComponent")))) {
        L1["componentvalue"] = (await $.callv(L0["getcomponentvalue"], [(await $.call(C, "TComponent", [L1["value"]]))]));
        if ($.truthy($.ne(L1["componentvalue"], ""))) {
          await $.stmt($.callv(L0["writeproppath"], []));
          await $.stmt((await $.call(C, "WriteIdent", [L1["componentvalue"]])));
        }
      } else {
        L1["oldancestor"] = (await $.v(C, "Ancestor"));
        L1["saveproppath"] = (await $.v(C, "FPropPath"));
        try {
          await $.set(C, "FPropPath", $.add($.add((await $.v(C, "FPropPath")), (await $.mv(L0["propinfo"], "Name"))), "."));
          if ($.truthy($.ne(L0["path"], ""))) {
            await $.stmt((await $.call(C, "SaveObjectProperyValue", [L1["value"], L0["path"], L0["fullpath"]])));
          } else {
            await $.stmt((await $.call(C, "WriteAllProperties", [L1["value"]])));
          }
        } finally {
          await $.set(C, "Ancestor", L1["oldancestor"]);
          await $.set(C, "FPropPath", L1["saveproppath"]);
        }
        if ($.truthy((await $.and_(($.is_(L1["value"], "TCollection")), async () => ($.eq(L0["path"], "")))))) {
          await $.stmt((await $.callv(L0["writecollectionprop"], [(await $.call(C, "TCollection", [L1["value"]]))])));
        }
      }
    }
  }
  return L1.result;
});
  L0["writemethodprop"] = $.fn(async function WriteMethodProp() {
  const L1 = {result: undefined, "value": null};
  L1["value"] = (await $.call(C, "GetMethodProp", [L0["instance"], L0["propinfo"]]));
  await $.stmt($.callv(L0["writeproppath"], []));
  if ($.truthy($.eq((await $.mv(L1["value"], "Code")), null))) {
    await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaNil"))])));
  } else {
    await $.stmt((await $.call(C, "WriteIdent", [(await $.mcall((await $.v(C, "Root")), "MethodName", [(await $.mv(L1["value"], "Code"))]))])));
  }
  return L1.result;
});
  L0["writevariant"] = $.fn(async function WriteVariant(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined, "vtype": 0};
  await $.fixArgs(L1, ["value"]);
  if ($.truthy((await $.call(C, "VarIsArray", [L1["value"]])))) {
    throw $.raise((await $.mcall((await $.v(C, "EWriteError")), "Create", [(await $.v(C, "SWriteError"))])));
  }
  L1["vtype"] = (await $.call(C, "VarType", [L1["value"]]));
  { const $t47 = (await $.and_(L1["vtype"], async () => (await $.v(C, "varTypeMask"))));
    if ($.eq($t47, (await $.v(C, "varEmpty")))) {
      await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaNil"))])));
    }
    else if ($.eq($t47, (await $.v(C, "varNull")))) {
      await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaNull"))])));
    }
    else if ($.eq($t47, (await $.v(C, "varOleStr")))) {
      await $.stmt((await $.call(C, "WriteWideString", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varString")))) {
      await $.stmt((await $.call(C, "WriteString", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varByte"))) || $.eq($t47, (await $.v(C, "varSmallInt"))) || $.eq($t47, (await $.v(C, "varInteger")))) {
      await $.stmt((await $.call(C, "WriteInteger", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varSingle")))) {
      await $.stmt((await $.call(C, "WriteSingle", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varDouble")))) {
      await $.stmt((await $.call(C, "WriteFloat", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varCurrency")))) {
      await $.stmt((await $.call(C, "WriteCurrency", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varDate")))) {
      await $.stmt((await $.call(C, "WriteDate", [L1["value"]])));
    }
    else if ($.eq($t47, (await $.v(C, "varBoolean")))) {
      if ($.truthy(L1["value"])) {
        await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaTrue"))])));
      } else {
        await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaFalse"))])));
      }
    }
    else {
      try {
        await $.stmt((await $.call(C, "WriteString", [L1["value"]])));
      } catch ($t48) {
        $.rethrowControl($t48);
        $.handled($t48);
        throw $.raise((await $.mcall((await $.v(C, "EWriteError")), "Create", [(await $.v(C, "SWriteError"))])));
      }
    }
  }
  return L1.result;
});
  L0["writevariantprop"] = $.fn(async function WriteVariantProp() {
  const L1 = {result: undefined, "value": null};
  L1["value"] = (await $.call(C, "GetVariantProp", [L0["instance"], L0["propinfo"]]));
  await $.stmt($.callv(L0["writeproppath"], []));
  await $.stmt((await $.callv(L0["writevariant"], [L1["value"]])));
  return L1.result;
});
  L0["checkinterceptor"] = $.fn(async function CheckInterceptor(p0, p1) {
  const L1 = {"instance": $.asRef(p0), "propname": $.copyArg(p1), result: false, "interceptorclass": null, "interceptor": null, "i": 0};
  await $.fixArgs(L1, ["propname"]);
  L1["result"] = false;
  L1["interceptorclass"] = (await $.call(C, "GetInterceptorForTarget", [(await $.mv((await L1["instance"].get()), "ClassType"))]));
  if ($.truthy($.eq(L1["interceptorclass"], null))) {
    return L1.result;
  }
  L1["interceptor"] = null;
  { const $t49 = $.sub((await $.mv((await $.v(C, "FInterceptorList")), "Count")), 1);
    L1["i"] = 0;
    let $t50 = true;
    for (;;) {
      if (!$t50) { L1["i"] = $.succ(L1["i"], 1); }
      $t50 = false;
      if (!($.ord(L1["i"]) <= $.ord($t49))) break;
      if ($.truthy($.eq((await L1["instance"].get()), (await $.mv((await $.call(C, "TStoragePropertyInterceptor", [(await $.idx((await $.v(C, "FInterceptorList")), [L1["i"]]))])), "FTarget"))))) {
        L1["interceptor"] = (await $.idx((await $.v(C, "FInterceptorList")), [L1["i"]]));
        break;
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq(L1["interceptor"], null))) {
    L1["interceptor"] = (await $.mcall(L1["interceptorclass"], "Create", [(await L1["instance"].get())]));
    await $.stmt((await $.mcall((await $.v(C, "FInterceptorList")), "Add", [L1["interceptor"]])));
  }
  L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L1["interceptor"], "ClassInfo")), L1["propname"]]));
  if ($.truthy((await $.or_(($.eq(L0["propinfo"], null)), async () => ($.eq((await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "GetProc")), null)))))) {
    return L1.result;
  }
  await L1["instance"].set(L1["interceptor"]);
  L1["result"] = true;
  return L1.result;
});
  if ($.truthy($.eq(L0["path"], ""))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Property name is empty."])));
  }
  L0["ppos"] = (await $.call(C, "Pos", [".", L0["path"]]));
  if ($.truthy($.gt(L0["ppos"], 0))) {
    L0["propname"] = (await $.call(C, "Copy", [L0["path"], 1, $.sub(L0["ppos"], 1)]));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t51) => { L0["path"] = $t51; }), 1, L0["ppos"]])));
  } else {
    L0["propname"] = L0["path"];
    L0["path"] = "";
  }
  if ($.truthy((await $.or_(($.eq(L0["propname"], "<ForAllItems>")), async () => ($.eq((await $.call(C, "Copy", [L0["propname"], 1, 5])), "<Item")))))) {
    if ($.truthy($.not(($.is_(L0["instance"], "TCollection"))))) {
      throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Component type is not Collection."])));
    }
    L0["collection"] = (await $.call(C, "TCollection", [L0["instance"]]));
    if ($.truthy($.eq(L0["propname"], "<ForAllItems>"))) {
      if ($.truthy((await $.and_(($.eq(L0["path"], "")), async () => ($.gt((await $.mv(L0["collection"], "Count")), 0)))))) {
        L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
        await $.stmt((await $.call(C, "BuildPropsList", [(await $.idx((await $.mv(L0["collection"], "Items")), [0])), L0["sl"]])));
        { const $t52 = $.sub((await $.mv(L0["collection"], "Count")), 1);
          L0["i"] = 0;
          let $t53 = true;
          for (;;) {
            if (!$t53) { L0["i"] = $.succ(L0["i"], 1); }
            $t53 = false;
            if (!($.ord(L0["i"]) <= $.ord($t52))) break;
            { const $t54 = $.sub((await $.mv(L0["sl"], "Count")), 1);
              L0["j"] = 0;
              let $t55 = true;
              for (;;) {
                if (!$t55) { L0["j"] = $.succ(L0["j"], 1); }
                $t55 = false;
                if (!($.ord(L0["j"]) <= $.ord($t54))) break;
                L0["suffix"] = (await $.idx(L0["sl"], [L0["j"]]));
                await $.stmt((await $.callv(L0["writecollectionitemasproperty"], [(await $.idx((await $.mv(L0["collection"], "Items")), [L0["i"]])), L0["suffix"], $.add($.add($.add($.add((await $.call(C, "Copy", [L0["fullpath"], 1, $.sub($.sub((await $.call(C, "Length", [L0["fullpath"]])), (await $.call(C, "Length", [L0["path"]]))), (await $.call(C, "Length", [".<ForAllItems>"])))])), "<Item"), (await $.call(C, "IntToStr", [L0["j"]]))), ">."), L0["suffix"])])));
                await $.tick();
              }
            }
            await $.tick();
          }
        }
        await $.mcall(L0["sl"], "Free", []);
      } else {
        { const $t56 = $.sub((await $.mv(L0["collection"], "Count")), 1);
          L0["i"] = 0;
          let $t57 = true;
          for (;;) {
            if (!$t57) { L0["i"] = $.succ(L0["i"], 1); }
            $t57 = false;
            if (!($.ord(L0["i"]) <= $.ord($t56))) break;
            await $.stmt((await $.callv(L0["writecollectionitemasproperty"], [(await $.idx((await $.mv(L0["collection"], "Items")), [L0["i"]])), L0["path"], $.add($.add($.add($.add((await $.call(C, "Copy", [L0["fullpath"], 1, $.sub($.sub((await $.call(C, "Length", [L0["fullpath"]])), (await $.call(C, "Length", [L0["path"]]))), (await $.call(C, "Length", [".<ForAllItems>"])))])), "<Item"), (await $.call(C, "IntToStr", [L0["i"]]))), ">."), L0["path"])])));
            await $.tick();
          }
        }
      }
    } else {
      L0["i"] = (await $.call(C, "StrToInt", [(await $.call(C, "Copy", [(await $.call(C, "Copy", [L0["propname"], 1, $.sub((await $.call(C, "Length", [L0["propname"]])), 1)])), 6, 100]))]));
      if ($.truthy($.eq(L0["path"], ""))) {
        L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
        await $.stmt((await $.call(C, "BuildPropsList", [(await $.idx((await $.mv(L0["collection"], "Items")), [L0["i"]])), L0["sl"]])));
        { const $t58 = $.sub((await $.mv(L0["sl"], "Count")), 1);
          L0["j"] = 0;
          let $t59 = true;
          for (;;) {
            if (!$t59) { L0["j"] = $.succ(L0["j"], 1); }
            $t59 = false;
            if (!($.ord(L0["j"]) <= $.ord($t58))) break;
            L0["suffix"] = (await $.idx(L0["sl"], [L0["j"]]));
            await $.stmt((await $.callv(L0["writecollectionitemasproperty"], [(await $.idx((await $.mv(L0["collection"], "Items")), [L0["i"]])), L0["suffix"], $.add($.add(L0["fullpath"], "."), L0["suffix"])])));
            await $.tick();
          }
        }
        await $.mcall(L0["sl"], "Free", []);
      } else {
        await $.stmt((await $.callv(L0["writecollectionitemasproperty"], [(await $.idx((await $.mv(L0["collection"], "Items")), [L0["i"]])), L0["path"], L0["fullpath"]])));
      }
    }
  } else {
    if ($.truthy($.not((await $.callv(L0["checkinterceptor"], [L0["instance"], L0["propname"]]))))) {
      L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["instance"], "ClassInfo")), L0["propname"]]));
    }
    if ($.truthy($.eq(L0["propinfo"], null))) {
      await $.stmt((await $.call(C, "DefineObjectProperties", [L0["instance"]])));
      if ($.truthy(($.ge((await $.mcall((await $.v(C, "FDefnPropList")), "IndexOf", [L0["propname"]])), 0)))) {
        L0["index"] = (await $.mcall((await $.v(C, "FDefnPropList")), "IndexOf", [L0["propname"]]));
        if ($.truthy((await $.and_((await $.call(C, "Assigned", [(await $.idx((await $.mv((await $.v(C, "FDefnPropList")), "Objects")), [L0["index"]]))])), async () => ($.ne((await $.mv(((await $.call(C, "PMethod", [(await $.idx((await $.mv((await $.v(C, "FDefnPropList")), "Objects")), [L0["index"]]))]))), "Code")), null)))))) {
          await $.stmt((await $.call(C, "WritePropName", [L0["propname"]])));
          await $.stmt((await $.callv((await $.call(C, "TWriterProc", [(await $.call(C, "PMethod", [(await $.idx((await $.mv((await $.v(C, "FDefnPropList")), "Objects")), [L0["index"]]))]))])), [Self])));
        }
      } else {
        if ($.truthy($.ge((await $.mcall((await $.v(C, "FDefnBinPropList")), "IndexOf", [L0["propname"]])), 0))) {
          L0["index"] = (await $.mcall((await $.v(C, "FDefnBinPropList")), "IndexOf", [L0["propname"]]));
          if ($.truthy((await $.call(C, "Assigned", [(await $.idx((await $.mv((await $.v(C, "FDefnBinPropList")), "Objects")), [L0["index"]]))])))) {
            await $.stmt((await $.call(C, "WritePropName", [L0["propname"]])));
            await $.stmt((await $.call(C, "WriteBinary", [(await $.call(C, "TStreamProc", [(await $.call(C, "PMethod", [(await $.idx((await $.mv((await $.v(C, "FDefnBinPropList")), "Objects")), [L0["index"]]))]))]))])));
          }
        } else {
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [$.add("Invalide property name: ", L0["propname"])])));
        }
      }
    } else {
      if ($.truthy((await $.and_(($.ne((await $.mv(L0["propinfo"], "GetProc")), null)), async () => ($.ne((await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "GetProc")), null)))))) {
        L0["proptype"] = (await $.mv(L0["propinfo"], "PropType"));
        { const $t60 = (await $.mv(L0["proptype"], "Kind"));
          if ($.eq($t60, (await $.v(C, "tkInteger"))) || $.eq($t60, (await $.v(C, "tkChar"))) || $.eq($t60, (await $.v(C, "tkEnumeration"))) || $.eq($t60, (await $.v(C, "tkSet")))) {
            await $.stmt($.callv(L0["writeordprop"], []));
          }
          else if ($.eq($t60, (await $.v(C, "tkFloat")))) {
            await $.stmt($.callv(L0["writefloatprop"], []));
          }
          else if ($.eq($t60, (await $.v(C, "tkString"))) || $.eq($t60, (await $.v(C, "tkLString"))) || $.eq($t60, (await $.v(C, "tkWString")))) {
            await $.stmt($.callv(L0["writestrprop"], []));
          }
          else if ($.eq($t60, (await $.v(C, "tkClass")))) {
            await $.stmt($.callv(L0["writeobjectprop"], []));
          }
          else if ($.eq($t60, (await $.v(C, "tkMethod")))) {
            await $.stmt($.callv(L0["writemethodprop"], []));
          }
          else if ($.eq($t60, (await $.v(C, "tkVariant")))) {
            await $.stmt($.callv(L0["writevariantprop"], []));
          }
          else if ($.eq($t60, (await $.v(C, "tkInt64")))) {
            await $.stmt($.callv(L0["writeint64prop"], []));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Instance", "Path", "FullPath"], "kind": "procedure", "ptypes": ["TObject", "String", "String"]});
  U.method("TPropWriterEh", "WritePropName", async function WritePropName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["propname"]);
  await $.stmt((await $.call(C, "WriteStr", [$.add((await $.v(C, "FPropPath")), L0["propname"])])));
  return L0.result;
}, {"params": ["PropName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPropWriterEh", "DefineBinaryProperty", async function DefineBinaryProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "readdata": $.copyArg(p1), "writedata": $.copyArg(p2), "hasdata": $.copyArg(p3), result: undefined, "pm": null};
  await $.fixArgs(L0, ["name", "readdata", "writedata", "hasdata"]);
  await $.stmt((await $.call(C, "New", [L0["pm"]])));
  L0["pm"] = (await $.call(C, "TMethod", [L0["writedata"]]));
  await $.stmt((await $.mcall((await $.v(C, "FDefnBinPropList")), "AddObject", [L0["name"], (await $.call(C, "TObject", [L0["pm"]]))])));
  return L0.result;
}, {"params": ["Name", "ReadData", "WriteData", "HasData"], "kind": "procedure", "ptypes": ["String", "TStreamProc", "TStreamProc", "Boolean"]});
  U.method("TPropWriterEh", "DefineProperty", async function DefineProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "readdata": $.copyArg(p1), "writedata": $.copyArg(p2), "hasdata": $.copyArg(p3), result: undefined, "pm": null};
  await $.fixArgs(L0, ["name", "readdata", "writedata", "hasdata"]);
  await $.stmt((await $.call(C, "New", [L0["pm"]])));
  L0["pm"] = (await $.call(C, "TMethod", [L0["writedata"]]));
  await $.stmt((await $.mcall((await $.v(C, "FDefnPropList")), "AddObject", [L0["name"], (await $.call(C, "TObject", [L0["pm"]]))])));
  return L0.result;
}, {"params": ["Name", "ReadData", "WriteData", "HasData"], "kind": "procedure", "ptypes": ["String", "TReaderProc", "TWriterProc", "Boolean"]});
  U.method("TPropWriterEh", "WriteCollection", async function WriteCollection(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0, "oldancestor": null};
  await $.fixArgs(L0, ["value"]);
  L0["oldancestor"] = (await $.v(C, "Ancestor"));
  await $.set(C, "Ancestor", null);
  try {
    await $.stmt((await $.call(C, "WriteValue", [(await $.v(C, "vaCollection"))])));
    if ($.truthy($.ne(L0["value"], null))) {
      { const $t61 = $.sub((await $.mv(L0["value"], "Count")), 1);
        L0["i"] = 0;
        let $t62 = true;
        for (;;) {
          if (!$t62) { L0["i"] = $.succ(L0["i"], 1); }
          $t62 = false;
          if (!($.ord(L0["i"]) <= $.ord($t61))) break;
          await $.stmt($.call(C, "WriteListBegin", []));
          await $.stmt((await $.call(C, "WriteAllProperties", [(await $.idx((await $.mv(L0["value"], "Items")), [L0["i"]]))])));
          await $.stmt($.call(C, "WriteListEnd", []));
          await $.tick();
        }
      }
    }
    await $.stmt($.call(C, "WriteListEnd", []));
  } finally {
    await $.set(C, "Ancestor", L0["oldancestor"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TCollection"]});
  U.method("TPropWriterEh", "WriteAllProperties", async function WriteAllProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"instance": $.copyArg(p0), result: undefined, "i": 0, "sl": null};
  await $.fixArgs(L0, ["instance"]);
  L0["sl"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  await $.stmt((await $.call(C, "BuildPropsList", [L0["instance"], L0["sl"]])));
  { const $t63 = $.sub((await $.mv(L0["sl"], "Count")), 1);
    L0["i"] = 0;
    let $t64 = true;
    for (;;) {
      if (!$t64) { L0["i"] = $.succ(L0["i"], 1); }
      $t64 = false;
      if (!($.ord(L0["i"]) <= $.ord($t63))) break;
      await $.stmt((await $.call(C, "SaveObjectProperyValue", [L0["instance"], (await $.idx(L0["sl"], [L0["i"]])), (await $.idx(L0["sl"], [L0["i"]]))])));
      await $.tick();
    }
  }
  await $.mcall(L0["sl"], "Free", []);
  return L0.result;
}, {"params": ["Instance"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropWriterEh", "DefineObjectProperties", async function DefineObjectProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"instance": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["instance"]);
  { const $t65 = $.sub((await $.mv((await $.v(C, "FDefnPropList")), "Count")), 1);
    L0["i"] = 0;
    let $t66 = true;
    for (;;) {
      if (!$t66) { L0["i"] = $.succ(L0["i"], 1); }
      $t66 = false;
      if (!($.ord(L0["i"]) <= $.ord($t65))) break;
      await $.stmt((await $.call(C, "Dispose", [(await $.call(C, "Pointer", [(await $.idx((await $.mv((await $.v(C, "FDefnPropList")), "Objects")), [L0["i"]]))]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FDefnPropList")), "Clear", []);
  { const $t67 = $.sub((await $.mv((await $.v(C, "FDefnBinPropList")), "Count")), 1);
    L0["i"] = 0;
    let $t68 = true;
    for (;;) {
      if (!$t68) { L0["i"] = $.succ(L0["i"], 1); }
      $t68 = false;
      if (!($.ord(L0["i"]) <= $.ord($t67))) break;
      await $.stmt((await $.call(C, "Dispose", [(await $.call(C, "Pointer", [(await $.idx((await $.mv((await $.v(C, "FDefnBinPropList")), "Objects")), [L0["i"]]))]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FDefnBinPropList")), "Clear", []);
  if ($.truthy($.is_(L0["instance"], "TPersistent"))) {
    await $.stmt((await $.mcall((await $.call(C, "TPersistentCrack", [L0["instance"]])), "DefineProperties", [Self])));
  }
  return L0.result;
}, {"params": ["Instance"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ReadError", async function ReadError(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ident": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["ident"]);
  throw $.raise((await $.mcall((await $.v(C, "EReadError")), "Create", [L0["ident"]])));
  return L0.result;
}, {"params": ["Ident"], "kind": "procedure", "ptypes": ["String"]});
  U.func("PropValueError", async function PropValueError(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "ReadError", [(await $.v(C, "SInvalidPropertyValue"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("PropertyNotFound", async function PropertyNotFound(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "ReadError", [(await $.v(C, "SUnknownProperty"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropReaderEh", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), "bufsize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["stream", "bufsize"]);
  await $.inherited(Self, "TPropReaderEh", "Create", [L0["stream"], L0["bufsize"]], arguments);
  await $.set(C, "FCollectionList", (await $.mv((await $.v(C, "TList")), "Create")));
  return L0.result;
}, {"params": ["Stream", "BufSize"], "kind": "constructor", "ptypes": ["TStream", "Integer"]});
  U.method("TPropReaderEh", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FCollectionList")), "Free", []);
  await $.inherited(Self, "TPropReaderEh", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPropReaderEh", "ReadComponent", async function ReadComponent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), result: undefined, "i": 0, "flags": null, "compname": '', "oldowner": null, "oldparen": null, "subscomp": null};
  await $.fixArgs(L0, ["component"]);
  L0["subscomp"] = null;
  await $.stmt((await $.call(C, "ReadPrefix", [L0["flags"], L0["i"]])));
  await $.stmt($.call(C, "ReadStr", []));
  L0["compname"] = (await $.v(C, "ReadStr"));
  if ($.truthy($.eq(L0["component"], null))) {
    L0["component"] = (await $.call(C, "FindChildComponent", [(await $.v(C, "Parent")), (await $.v(C, "Root")), L0["compname"], true]));
  } else {
    await $.set(C, "Owner", L0["component"]);
  }
  if ($.truthy($.eq(L0["component"], null))) {
    L0["subscomp"] = (await $.mcall((await $.v(C, "TComponent")), "Create", [null]));
    L0["component"] = L0["subscomp"];
  }
  await $.set(C, "FInterceptorList", (await $.mv((await $.v(C, "TList")), "Create")));
  while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
    await $.stmt((await $.call(C, "ReadProperty", [L0["component"]])));
    await $.tick();
  }
  await $.stmt($.call(C, "ReadListEnd", []));
  { const $t69 = $.sub((await $.mv((await $.v(C, "FCollectionList")), "Count")), 1);
    L0["i"] = 0;
    let $t70 = true;
    for (;;) {
      if (!$t70) { L0["i"] = $.succ(L0["i"], 1); }
      $t70 = false;
      if (!($.ord(L0["i"]) <= $.ord($t69))) break;
      await $.mcall((await $.call(C, "TCollection", [(await $.idx((await $.v(C, "FCollectionList")), [L0["i"]]))])), "EndUpdate", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FCollectionList")), "Clear", []);
  { const $t71 = 0;
    L0["i"] = $.sub((await $.mv((await $.v(C, "FInterceptorList")), "Count")), 1);
    let $t72 = true;
    for (;;) {
      if (!$t72) { L0["i"] = $.succ(L0["i"], -1); }
      $t72 = false;
      if (!($.ord(L0["i"]) >= $.ord($t71))) break;
      {
        const $t73 = (await $.call(C, "TStoragePropertyInterceptor", [(await $.idx((await $.v(C, "FInterceptorList")), [L0["i"]]))]));
        await $.stmt($.wcall([$t73], "Readed", [], C));
        await $.stmt($.wcall([$t73], "Free", [], C));
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FInterceptorList")), "Free", []);
  L0["oldowner"] = (await $.v(C, "Owner"));
  L0["oldparen"] = (await $.v(C, "Parent"));
  try {
    await $.set(C, "Owner", (await $.mv((await $.call(C, "TComponentCrack", [L0["component"]])), "GetChildOwner")));
    await $.set(C, "Parent", (await $.mv((await $.call(C, "TComponentCrack", [L0["component"]])), "GetChildParent")));
    while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
      await $.stmt((await $.call(C, "ReadComponent", [null])));
      await $.tick();
    }
    await $.stmt($.call(C, "ReadListEnd", []));
  } finally {
    await $.set(C, "Owner", L0["oldowner"]);
    await $.set(C, "Parent", L0["oldparen"]);
  }
  if ($.truthy($.ne(L0["subscomp"], null))) {
    await $.mcall(L0["subscomp"], "Free", []);
  }
  return L0.result;
}, {"params": ["Component"], "kind": "procedure", "ptypes": ["TComponent"]});
  U.method("TPropReaderEh", "ReadCollection", async function ReadCollection(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"collection": $.copyArg(p0), result: undefined, "item": null};
  await $.fixArgs(L0, ["collection"]);
  await $.mcall(L0["collection"], "BeginUpdate", []);
  try {
    if ($.truthy($.not((await $.v(C, "EndOfList"))))) {
      await $.mcall(L0["collection"], "Clear", []);
    }
    while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
      if ($.truthy($.in_((await $.v(C, "NextValue")), [(await $.v(C, "vaInt8")), (await $.v(C, "vaInt16")), (await $.v(C, "vaInt32"))]))) {
        await $.stmt($.call(C, "ReadInteger", []));
      }
      L0["item"] = (await $.mv(L0["collection"], "Add"));
      await $.stmt($.call(C, "ReadListBegin", []));
      while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
        await $.stmt((await $.call(C, "ReadProperty", [L0["item"]])));
        await $.tick();
      }
      await $.stmt($.call(C, "ReadListEnd", []));
      await $.tick();
    }
    await $.stmt($.call(C, "ReadListEnd", []));
  } finally {
    await $.mcall(L0["collection"], "EndUpdate", []);
  }
  return L0.result;
}, {"params": ["Collection"], "kind": "procedure", "ptypes": ["TCollection"]});
  U.method("TPropReaderEh", "ReadProperty", async function ReadProperty(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ainstance": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "l": 0, "instance": null, "propinfo": null, "propvalue": null, "proppath": '', "processed": false};
  await $.fixArgs(L0, ["ainstance"]);
  L0["handleexception"] = $.fn(async function HandleException(p0) {
  const L1 = {"e": $.copyArg(p0), result: undefined, "name": ''};
  await $.fixArgs(L1, ["e"]);
  L1["name"] = "";
  if ($.truthy($.is_(L0["ainstance"], "TComponent"))) {
    L1["name"] = (await $.mv((await $.call(C, "TComponent", [L0["ainstance"]])), "Name"));
  }
  if ($.truthy($.eq(L1["name"], ""))) {
    L1["name"] = (await $.mv(L0["ainstance"], "ClassName"));
  }
  throw $.raise((await $.mcall((await $.v(C, "EReadError")), "CreateFmt", [(await $.v(C, "SPropertyException")), [L1["name"], (await $.v(C, "DotSep")), L0["proppath"], (await $.mv(L1["e"], "Message"))]])));
  return L1.result;
});
  L0["proppatherror"] = $.fn(async function PropPathError() {
  const L1 = {result: undefined};
  await $.stmt($.call(C, "SkipValue", []));
  await $.stmt((await $.call(C, "ReadError", [(await $.v(C, "SInvalidPropertyPath"))])));
  return L1.result;
});
  L0["readcollectionitemasproperty"] = $.fn(async function ReadCollectionItemAsProperty(p0, p1) {
  const L1 = {"collection": $.copyArg(p0), "propname": $.asRef(p1), result: null, "i": 0, "index": 0, "s": '', "sindex": ''};
  await $.fixArgs(L1, ["collection"]);
  L1["s"] = (await $.call(C, "Copy", [(await L1["propname"].get()), $.add((await $.call(C, "Length", ["__Item"])), 1), (await $.call(C, "Length", [(await L1["propname"].get())]))]));
  L1["sindex"] = "";
  L1["result"] = L1["collection"];
  { const $t74 = (await $.call(C, "Length", [L1["s"]]));
    L1["i"] = 1;
    let $t75 = true;
    for (;;) {
      if (!$t75) { L1["i"] = $.succ(L1["i"], 1); }
      $t75 = false;
      if (!($.ord(L1["i"]) <= $.ord($t74))) break;
      if ($.truthy(($.in_((await $.idx(L1["s"], [L1["i"]])), ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])))) {
        L1["sindex"] = $.add(L1["sindex"], (await $.idx(L1["s"], [L1["i"]])));
      } else {
        break;
      }
      await $.tick();
    }
  }
  if ($.truthy($.ne(L1["sindex"], ""))) {
    L1["index"] = (await $.call(C, "StrToInt", [L1["sindex"]]));
  } else {
    return L1.result;
  }
  if ($.truthy($.gt((await $.mv(L1["collection"], "Count")), L1["index"]))) {
    await L1["propname"].set((await $.call(C, "Copy", [(await L1["propname"].get()), $.add($.add((await $.call(C, "Length", ["__Item"])), (await $.call(C, "Length", ["SIndex"]))), 1), (await $.call(C, "Length", [(await L1["propname"].get())]))])));
    L1["result"] = (await $.idx((await $.mv(L1["collection"], "Items")), [L1["index"]]));
  }
  if ($.truthy($.eq((await $.mcall((await $.v(C, "FCollectionList")), "IndexOf", [L1["collection"]])), (-(1))))) {
    await $.mcall(L1["collection"], "BeginUpdate", []);
    await $.stmt((await $.mcall((await $.v(C, "FCollectionList")), "Add", [L1["collection"]])));
  }
  return L1.result;
});
  L0["checkinterceptor"] = $.fn(async function CheckInterceptor(p0, p1) {
  const L1 = {"instance": $.copyArg(p0), "propname": $.copyArg(p1), result: false, "interceptorclass": null, "interceptor": null, "i": 0};
  await $.fixArgs(L1, ["instance", "propname"]);
  L1["result"] = false;
  L1["interceptorclass"] = (await $.call(C, "GetInterceptorForTarget", [(await $.mv(L1["instance"], "ClassType"))]));
  if ($.truthy($.eq(L1["interceptorclass"], null))) {
    return L1.result;
  }
  L1["interceptor"] = null;
  { const $t76 = $.sub((await $.mv((await $.v(C, "FInterceptorList")), "Count")), 1);
    L1["i"] = 0;
    let $t77 = true;
    for (;;) {
      if (!$t77) { L1["i"] = $.succ(L1["i"], 1); }
      $t77 = false;
      if (!($.ord(L1["i"]) <= $.ord($t76))) break;
      if ($.truthy($.eq(L1["instance"], (await $.mv((await $.call(C, "TStoragePropertyInterceptor", [(await $.idx((await $.v(C, "FInterceptorList")), [L1["i"]]))])), "FTarget"))))) {
        L1["interceptor"] = (await $.idx((await $.v(C, "FInterceptorList")), [L1["i"]]));
        break;
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq(L1["interceptor"], null))) {
    L1["interceptor"] = (await $.mcall(L1["interceptorclass"], "Create", [L1["instance"]]));
    await $.stmt((await $.mcall((await $.v(C, "FInterceptorList")), "Add", [L1["interceptor"]])));
  }
  L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L1["interceptor"], "ClassInfo")), L1["propname"]]));
  if ($.truthy((await $.or_(($.eq(L0["propinfo"], null)), async () => ($.eq((await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "SetProc")), null)))))) {
    return L1.result;
  }
  await $.stmt((await $.call(C, "ReadPropValue", [L1["interceptor"], L0["propinfo"]])));
  L1["result"] = true;
  return L1.result;
});
  try {
    L0["proppath"] = (await $.v(C, "ReadStr"));
    try {
      L0["i"] = 1;
      L0["l"] = (await $.call(C, "Length", [L0["proppath"]]));
      L0["instance"] = L0["ainstance"];
      await $.set(C, "FCanHandleExcepts", true);
      L0["propvalue"] = null;
      while ($.truthy(true)) {
        L0["j"] = L0["i"];
        while ($.truthy((await $.and_(($.le(L0["i"], L0["l"])), async () => ($.ne((await $.idx(L0["proppath"], [L0["i"]])), ".")))))) {
          await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t80) => { L0["i"] = $t80; })])));
          await $.tick();
        }
        await $.set(C, "FPropName", (await $.call(C, "Copy", [L0["proppath"], L0["j"], $.sub(L0["i"], L0["j"])])));
        if ($.truthy((await $.and_(($.is_(L0["propvalue"], "TCollection")), async () => ($.eq((await $.call(C, "Copy", [(await $.v(C, "FPropName")), 1, 6])), "__Item")))))) {
          L0["instance"] = (await $.callv(L0["readcollectionitemasproperty"], [(await $.call(C, "TCollection", [L0["propvalue"]])), (await $.v(C, "FPropName"))]));
          if ($.truthy($.ne(L0["instance"], null))) {
            await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t81) => { L0["i"] = $t81; })])));
            continue;
          }
        }
        if ($.truthy($.gt(L0["i"], L0["l"]))) {
          break;
        }
        L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["instance"], "ClassInfo")), (await $.v(C, "FPropName"))]));
        if ($.truthy($.eq(L0["propinfo"], null))) {
          await $.stmt($.call(C, "PropertyError", []));
        }
        L0["propvalue"] = null;
        if ($.truthy($.eq((await $.mv((await $.mv(L0["propinfo"], "PropType")), "Kind")), (await $.v(C, "tkClass"))))) {
          L0["propvalue"] = (await $.call(C, "TObject", [(await $.call(C, "GetOrdProp", [L0["instance"], L0["propinfo"]]))]));
        }
        if ($.truthy($.not(($.is_(L0["propvalue"], "TPersistent"))))) {
          await $.stmt($.callv(L0["proppatherror"], []));
        }
        L0["instance"] = (await $.call(C, "TPersistent", [L0["propvalue"]]));
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t82) => { L0["i"] = $t82; })])));
        await $.tick();
      }
      if ($.truthy((await $.callv(L0["checkinterceptor"], [L0["instance"], (await $.v(C, "FPropName"))])))) {
        return L0.result;
      }
      if ($.truthy((await $.and_(($.eq(L0["instance"], L0["ainstance"])), async () => (await $.call(C, "Assigned", [(await $.v(C, "OnReadOwnerProp"))])))))) {
        L0["processed"] = false;
        await $.stmt((await $.call(C, "OnReadOwnerProp", [Self, (await $.v(C, "FPropName")), L0["processed"]])));
        if ($.truthy(L0["processed"])) {
          return L0.result;
        }
      }
      L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["instance"], "ClassInfo")), (await $.v(C, "FPropName"))]));
      if ($.truthy($.ne(L0["propinfo"], null))) {
        await $.stmt((await $.call(C, "ReadPropValue", [L0["instance"], L0["propinfo"]])));
      } else {
        await $.set(C, "FCanHandleExcepts", false);
        await $.stmt((await $.mcall((await $.call(C, "TPersistentCrack", [L0["instance"]])), "DefineProperties", [Self])));
        await $.set(C, "FCanHandleExcepts", true);
        if ($.truthy($.ne((await $.v(C, "FPropName")), ""))) {
          await $.stmt($.call(C, "PropertyError", []));
        }
      }
    } catch ($t79) {
      $.rethrowControl($t79);
      if ($.excIs($t79, "Exception")) {
        L0["e"] = $.exc($t79);
        await $.stmt((await $.callv(L0["handleexception"], [L0["e"]])));
      }
      else { throw $t79; }
    }
  } catch ($t78) {
    $.rethrowControl($t78);
    if ($.excIs($t78, "Exception")) {
      L0["e"] = $.exc($t78);
      if ($.truthy((await $.or_($.not((await $.v(C, "FCanHandleExcepts"))), async () => $.not((await $.call(C, "Error", [(await $.mv(L0["e"], "Message"))]))))))) {
        throw $t78;
      }
    }
    else { throw $t78; }
  }
  return L0.result;
}, {"params": ["AInstance"], "kind": "procedure", "ptypes": ["TPersistent"]});
  U.method("TPropReaderEh", "Error", async function Error(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["message"]);
  L0["result"] = (await $.inherited(Self, "TPropReaderEh", "Error", [L0["message"]], arguments));
  if ($.truthy($.not((await $.v(C, "IsRaiseReadErrorEh"))))) {
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["Message"], "kind": "function", "ptypes": ["String"]});
  U.method("TPropReaderEh", "ReadPropValue", async function ReadPropValue(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"instance": $.copyArg(p0), "propinfo": $.copyArg(p1), result: undefined, "proptype": null, "method": null};
  await $.fixArgs(L0, ["instance", "propinfo"]);
  L0["nilmethod"] = {"code": null, "data": null};
  L0["setintident"] = $.fn(async function SetIntIdent(p0, p1, p2) {
  const L1 = {"instance": $.copyArg(p0), "propinfo": $.copyArg(p1), "ident": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["instance", "propinfo", "ident"]);
  await $.stmt($.call(C, "PropValueError", []));
  return L1.result;
});
  L0["setobjectident"] = $.fn(async function SetObjectIdent(p0, p1, p2) {
  const L1 = {"instance": $.copyArg(p0), "propinfo": $.copyArg(p1), "ident": $.copyArg(p2), result: undefined, "component": null, "globalname": ''};
  await $.fixArgs(L1, ["instance", "propinfo", "ident"]);
  L1["makeglobalreference"] = $.fn(async function MakeGlobalReference() {
  const L2 = {result: false, "s": '', "p": ''};
  L2["result"] = false;
  L2["s"] = (await $.call(C, "PChar", [(await $.call(C, "Pointer", [L1["ident"]]))]));
  L2["p"] = L2["s"];
  while ($.truthy($.not(($.in_(L2["p"], [".", "\u0000"]))))) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L2["p"], async ($t83) => { L2["p"] = $t83; })])));
    await $.tick();
  }
  if ($.truthy($.eq(L2["p"], "\u0000"))) {
    return L2.result;
  }
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L1["globalname"], async ($t84) => { L1["globalname"] = $t84; }), L2["s"], $.sub(L2["p"], L2["s"])])));
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => L1["ident"], async ($t85) => { L1["ident"] = $t85; }), 1, $.add($.sub(L2["p"], L2["s"]), 1)])));
  L2["result"] = true;
  return L2.result;
});
  L1["component"] = (await $.call(C, "FindNestedComponent", [(await $.v(C, "Root")), L1["ident"]]));
  if ($.truthy($.ne(L1["component"], null))) {
    await $.stmt((await $.call(C, "SetOrdProp", [L1["instance"], L1["propinfo"], (await $.call(C, "Longint", [L1["component"]]))])));
  } else {
    if ($.truthy(L1["makeglobalreference"])) {
      L1["component"] = (await $.call(C, "FindGlobalComponent", [L1["globalname"]]));
      if ($.truthy($.ne(L1["component"], null))) {
        L1["component"] = (await $.call(C, "FindNestedComponent", [L1["component"], L1["ident"]]));
        if ($.truthy($.ne(L1["component"], null))) {
          await $.stmt((await $.call(C, "SetOrdProp", [L1["instance"], L1["propinfo"], (await $.call(C, "Longint", [L1["component"]]))])));
        }
      }
    }
  }
  return L1.result;
});
  L0["readvariant"] = $.fn(async function ReadVariant() {
  const L1 = {result: null, "valtype": null};
  L1["valttovart"] = [(await $.v(C, "varNull")), (await $.v(C, "varError")), (await $.v(C, "varByte")), (await $.v(C, "varSmallInt")), (await $.v(C, "varInteger")), (await $.v(C, "varDouble")), (await $.v(C, "varString")), (await $.v(C, "varError")), (await $.v(C, "varBoolean")), (await $.v(C, "varBoolean")), (await $.v(C, "varError")), (await $.v(C, "varError")), (await $.v(C, "varString")), (await $.v(C, "varEmpty")), (await $.v(C, "varError")), (await $.v(C, "varSingle")), (await $.v(C, "varCurrency")), (await $.v(C, "varDate")), (await $.v(C, "varOleStr")), (await $.v(C, "varError")), (await $.v(C, "varUString")), (await $.v(C, "varDouble"))];
  L1["valtype"] = (await $.v(C, "NextValue"));
  { const $t86 = L1["valtype"];
    if ($.eq($t86, (await $.v(C, "vaNil"))) || $.eq($t86, (await $.v(C, "vaNull")))) {
      if ($.truthy($.eq((await $.v(C, "ReadValue")), (await $.v(C, "vaNil"))))) {
        await $.stmt((await $.call(C, "VarClear", [L1["result"]])));
      } else {
        L1["result"] = (await $.v(C, "NULL"));
      }
    }
    else if ($.eq($t86, (await $.v(C, "vaInt8")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VByte", (await $.call(C, "Byte", [(await $.v(C, "ReadInteger"))])));
    }
    else if ($.eq($t86, (await $.v(C, "vaInt16")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VSmallint", (await $.call(C, "Smallint", [(await $.v(C, "ReadInteger"))])));
    }
    else if ($.eq($t86, (await $.v(C, "vaInt32")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VInteger", (await $.v(C, "ReadInteger")));
    }
    else if ($.eq($t86, (await $.v(C, "vaExtended")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VDouble", (await $.v(C, "ReadFloat")));
    }
    else if ($.eq($t86, (await $.v(C, "vaSingle")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VSingle", (await $.v(C, "ReadSingle")));
    }
    else if ($.eq($t86, (await $.v(C, "vaCurrency")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VCurrency", (await $.v(C, "ReadCurrency")));
    }
    else if ($.eq($t86, (await $.v(C, "vaDate")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VDate", (await $.v(C, "ReadDate")));
    }
    else if ($.eq($t86, (await $.v(C, "vaString"))) || $.eq($t86, (await $.v(C, "vaLString")))) {
      L1["result"] = (await $.v(C, "ReadString"));
    }
    else if ($.eq($t86, (await $.v(C, "vaWString")))) {
      L1["result"] = (await $.v(C, "ReadWideString"));
    }
    else if ($.eq($t86, (await $.v(C, "vaFalse"))) || $.eq($t86, (await $.v(C, "vaTrue")))) {
      await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VBoolean", $.eq((await $.v(C, "ReadValue")), (await $.v(C, "vaTrue"))));
    }
    else {
      throw $.raise((await $.mcall((await $.v(C, "EReadError")), "Create", [(await $.v(C, "SReadError"))])));
    }
  }
  await $.mset((await $.call(C, "TVarData", [L1["result"]])), "VType", (await $.idx(L1["valttovart"], [L1["valtype"]])));
  return L1.result;
});
  L0["setvariantreference"] = $.fn(async function SetVariantReference() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "SetVariantProp", [L0["instance"], L0["propinfo"], L0["readvariant"]])));
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "SetProc")), null))) {
    await $.stmt((await $.call(C, "ReadError", [(await $.v(C, "SReadOnlyProperty"))])));
  }
  L0["proptype"] = (await $.mv((await $.call(C, "PPropInfo", [L0["propinfo"]])), "PropType"));
  { const $t87 = (await $.mv(L0["proptype"], "Kind"));
    if ($.eq($t87, (await $.v(C, "tkInteger")))) {
      if ($.truthy($.eq((await $.v(C, "NextValue")), (await $.v(C, "vaIdent"))))) {
        await $.stmt((await $.callv(L0["setintident"], [L0["instance"], L0["propinfo"], (await $.v(C, "ReadIdent"))])));
      } else {
        await $.stmt((await $.call(C, "SetOrdProp", [L0["instance"], L0["propinfo"], (await $.v(C, "ReadInteger"))])));
      }
    }
    else if ($.eq($t87, (await $.v(C, "tkChar")))) {
      await $.stmt((await $.call(C, "SetOrdProp", [L0["instance"], L0["propinfo"], (await $.call(C, "Ord", [(await $.v(C, "ReadChar"))]))])));
    }
    else if ($.eq($t87, (await $.v(C, "tkEnumeration")))) {
      await $.stmt((await $.call(C, "SetOrdProp", [L0["instance"], L0["propinfo"], (await $.call(C, "GetEnumValue", [L0["proptype"], (await $.v(C, "ReadIdent"))]))])));
    }
    else if ($.eq($t87, (await $.v(C, "tkFloat")))) {
      await $.stmt((await $.call(C, "SetFloatProp", [L0["instance"], L0["propinfo"], (await $.v(C, "ReadFloat"))])));
    }
    else if ($.eq($t87, (await $.v(C, "tkString"))) || $.eq($t87, (await $.v(C, "tkLString")))) {
      await $.stmt((await $.call(C, "SetStrProp", [L0["instance"], L0["propinfo"], (await $.v(C, "ReadString"))])));
    }
    else if ($.eq($t87, (await $.v(C, "tkWString")))) {
      await $.stmt((await $.call(C, "SetStrProp", [L0["instance"], L0["propinfo"], (await $.v(C, "ReadWideString"))])));
    }
    else if ($.eq($t87, (await $.v(C, "tkSet")))) {
      await $.stmt((await $.call(C, "SetOrdProp", [L0["instance"], L0["propinfo"], (await $.call(C, "ReadSet", [L0["proptype"]]))])));
    }
    else if ($.eq($t87, (await $.v(C, "tkClass")))) {
      { const $t88 = (await $.v(C, "NextValue"));
        if ($.eq($t88, (await $.v(C, "vaNil")))) {
          await $.stmt($.call(C, "ReadValue", []));
          await $.stmt((await $.call(C, "SetOrdProp", [L0["instance"], L0["propinfo"], 0])));
        }
        else if ($.eq($t88, (await $.v(C, "vaCollection")))) {
          await $.stmt($.call(C, "ReadValue", []));
          await $.stmt((await $.call(C, "ReadCollection", [(await $.call(C, "TCollection", [(await $.call(C, "GetOrdProp", [L0["instance"], L0["propinfo"]]))]))])));
        }
        else {
          await $.stmt((await $.callv(L0["setobjectident"], [L0["instance"], L0["propinfo"], (await $.v(C, "ReadIdent"))])));
        }
      }
    }
    else if ($.eq($t87, (await $.v(C, "tkMethod")))) {
      if ($.truthy($.eq((await $.v(C, "NextValue")), (await $.v(C, "vaNil"))))) {
        await $.stmt($.call(C, "ReadValue", []));
        await $.stmt((await $.call(C, "SetMethodProp", [L0["instance"], L0["propinfo"], L0["nilmethod"]])));
      } else {
        await $.mset(L0["method"], "Code", (await $.call(C, "FindMethod", [(await $.v(C, "Root")), (await $.v(C, "ReadIdent"))])));
        await $.mset(L0["method"], "Data", (await $.v(C, "Root")));
        if ($.truthy($.ne((await $.mv(L0["method"], "Code")), null))) {
          await $.stmt((await $.call(C, "SetMethodProp", [L0["instance"], L0["propinfo"], L0["method"]])));
        }
      }
    }
    else if ($.eq($t87, (await $.v(C, "tkVariant")))) {
      await $.stmt($.callv(L0["setvariantreference"], []));
    }
  }
  return L0.result;
}, {"params": ["Instance", "PropInfo"], "kind": "procedure", "ptypes": ["TPersistent", "Pointer"]});
  U.method("TPropReaderEh", "DefineProperty", async function DefineProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "readdata": $.copyArg(p1), "writedata": $.copyArg(p2), "hasdata": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["name", "readdata", "writedata", "hasdata"]);
  if ($.truthy((await $.and_((await $.call(C, "SameText", [L0["name"], (await $.v(C, "FPropName"))])), async () => (await $.call(C, "Assigned", [L0["readdata"]])))))) {
    await $.stmt((await $.callv(L0["readdata"], [Self])));
    await $.set(C, "FPropName", "");
  }
  return L0.result;
}, {"params": ["Name", "ReadData", "WriteData", "HasData"], "kind": "procedure", "ptypes": ["String", "TReaderProc", "TWriterProc", "Boolean"]});
  U.method("TPropReaderEh", "DefineBinaryProperty", async function DefineBinaryProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "readdata": $.copyArg(p1), "writedata": $.copyArg(p2), "hasdata": $.copyArg(p3), result: undefined, "stream": null, "count": 0};
  await $.fixArgs(L0, ["name", "readdata", "writedata", "hasdata"]);
  if ($.truthy((await $.and_((await $.call(C, "SameText", [L0["name"], (await $.v(C, "FPropName"))])), async () => (await $.call(C, "Assigned", [L0["readdata"]])))))) {
    if ($.truthy($.ne((await $.v(C, "ReadValue")), (await $.v(C, "vaBinary"))))) {
      await $.set(C, "FCanHandleExcepts", true);
      await $.stmt($.call(C, "PropValueError", []));
    }
    L0["stream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
    try {
      await $.stmt((await $.call(C, "Read", [$.ref(async () => L0["count"], async ($t89) => { L0["count"] = $t89; }), (await $.call(C, "SizeOf", [L0["count"]]))])));
      await $.stmt((await $.mcall(L0["stream"], "SetSize", [L0["count"]])));
      await $.stmt((await $.call(C, "Read", [$.ref(async () => (await $.mv(L0["stream"], "Memory")), async ($t90) => { await $.mset(L0["stream"], "Memory", $t90); }), $.ref(async () => L0["count"], async ($t91) => { L0["count"] = $t91; })])));
      await $.set(C, "FCanHandleExcepts", true);
      await $.stmt((await $.callv(L0["readdata"], [L0["stream"]])));
    } finally {
      await $.mcall(L0["stream"], "Free", []);
    }
    await $.set(C, "FPropName", "");
  }
  return L0.result;
}, {"params": ["Name", "ReadData", "WriteData", "HasData"], "kind": "procedure", "ptypes": ["String", "TStreamProc", "TStreamProc", "Boolean"]});
  U.method("TPropReaderEh", "ReadOwnerProperties", async function ReadOwnerProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["component"]);
  await $.stmt($.call(C, "ReadSignature", []));
  await $.set(C, "Root", L0["component"]);
  await $.set(C, "Owner", (await $.v(C, "Root")));
  await $.stmt((await $.call(C, "ReadComponent", [L0["component"]])));
  return L0.result;
}, {"params": ["Component"], "kind": "procedure", "ptypes": ["TComponent"]});
  U.func("EnumValue", async function EnumValue(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"enumtype": $.copyArg(p0), "enumname": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["enumtype", "enumname"]);
  L0["result"] = (await $.call(C, "GetEnumValue", [L0["enumtype"], L0["enumname"]]));
  if ($.truthy($.eq(L0["result"], (-(1))))) {
    await $.stmt($.call(C, "PropValueError", []));
  }
  return L0.result;
}, {"params": ["EnumType", "EnumName"], "kind": "function", "ptypes": ["PTypeInfo", "String"]});
  U.method("TPropReaderEh", "ReadSet", async function ReadSet(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"settype": $.copyArg(p0), result: 0, "enumtype": null, "enumname": ''};
  await $.fixArgs(L0, ["settype"]);
  try {
    if ($.truthy($.ne((await $.v(C, "ReadValue")), (await $.v(C, "vaSet"))))) {
      await $.stmt($.call(C, "PropValueError", []));
    }
    L0["enumtype"] = (await $.mv((await $.call(C, "GetTypeData", [L0["settype"]])), "CompType"));
    L0["result"] = 0;
    while ($.truthy(true)) {
      L0["enumname"] = (await $.v(C, "ReadStr"));
      if ($.truthy($.eq(L0["enumname"], ""))) {
        break;
      }
      await $.stmt((await $.call(C, "Include", [(await $.call(C, "TIntegerSet", [L0["result"]])), (await $.call(C, "EnumValue", [L0["enumtype"], L0["enumname"]]))])));
      await $.tick();
    }
  } catch ($t92) {
    $.rethrowControl($t92);
    $.handled($t92);
    await $.stmt($.call(C, "SkipSetBody", []));
    throw $t92;
  }
  return L0.result;
}, {"params": ["SetType"], "kind": "function", "ptypes": ["Pointer"]});
  U.method("TPropReaderEh", "SkipSetBody", async function SkipSetBody(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  while ($.truthy($.ne((await $.v(C, "ReadStr")), ""))) {
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropReaderEh", "PropertyError", async function PropertyError(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "SkipValue", []));
  await $.stmt($.call(C, "PropertyNotFound", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropReaderEh", "SkipValue", async function SkipValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["skiplist"] = $.fn(async function SkipList() {
  const L1 = {result: undefined};
  while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
    await $.stmt($.call(C, "SkipValue", []));
    await $.tick();
  }
  await $.stmt($.call(C, "ReadListEnd", []));
  return L1.result;
});
  L0["skipbytes"] = $.fn(async function SkipBytes(p0) {
  const L1 = {"count": $.copyArg(p0), result: undefined, "bytes": $.sarr()};
  await $.fixArgs(L1, ["count"]);
  while ($.truthy($.gt(L1["count"], 0))) {
    if ($.truthy($.gt(L1["count"], (await $.call(C, "SizeOf", [L1["bytes"]]))))) {
      await $.stmt((await $.call(C, "Read", [$.ref(async () => L1["bytes"], async ($t93) => { L1["bytes"] = $t93; }), (await $.call(C, "SizeOf", [L1["bytes"]]))])));
      await $.stmt((await $.call(C, "Dec", [$.ref(async () => L1["count"], async ($t94) => { L1["count"] = $t94; }), (await $.call(C, "SizeOf", [L1["bytes"]]))])));
    } else {
      await $.stmt((await $.call(C, "Read", [$.ref(async () => L1["bytes"], async ($t95) => { L1["bytes"] = $t95; }), $.ref(async () => L1["count"], async ($t96) => { L1["count"] = $t96; })])));
      L1["count"] = 0;
    }
    await $.tick();
  }
  return L1.result;
});
  L0["skipbinary"] = $.fn(async function SkipBinary() {
  const L1 = {result: undefined, "count": 0};
  await $.stmt((await $.call(C, "Read", [$.ref(async () => L1["count"], async ($t97) => { L1["count"] = $t97; }), (await $.call(C, "SizeOf", [L1["count"]]))])));
  await $.stmt((await $.callv(L0["skipbytes"], [L1["count"]])));
  return L1.result;
});
  L0["skipcollection"] = $.fn(async function SkipCollection() {
  const L1 = {result: undefined};
  while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
    if ($.truthy($.in_((await $.v(C, "NextValue")), [(await $.v(C, "vaInt8")), (await $.v(C, "vaInt16")), (await $.v(C, "vaInt32"))]))) {
      await $.stmt($.call(C, "SkipValue", []));
    }
    await $.stmt((await $.callv(L0["skipbytes"], [1])));
    while ($.truthy($.not((await $.v(C, "EndOfList"))))) {
      await $.stmt($.call(C, "SkipProperty", []));
      await $.tick();
    }
    await $.stmt($.call(C, "ReadListEnd", []));
    await $.tick();
  }
  await $.stmt($.call(C, "ReadListEnd", []));
  return L1.result;
});
  { const $t98 = (await $.v(C, "ReadValue"));
    if ($.eq($t98, (await $.v(C, "vaNull")))) {
    }
    else if ($.eq($t98, (await $.v(C, "vaList")))) {
      await $.stmt($.callv(L0["skiplist"], []));
    }
    else if ($.eq($t98, (await $.v(C, "vaInt8")))) {
      await $.stmt((await $.callv(L0["skipbytes"], [1])));
    }
    else if ($.eq($t98, (await $.v(C, "vaInt16")))) {
      await $.stmt((await $.callv(L0["skipbytes"], [2])));
    }
    else if ($.eq($t98, (await $.v(C, "vaInt32")))) {
      await $.stmt((await $.callv(L0["skipbytes"], [4])));
    }
    else if ($.eq($t98, (await $.v(C, "vaExtended")))) {
      await $.stmt((await $.callv(L0["skipbytes"], [(await $.call(C, "SizeOf", [(await $.v(C, "Extended"))]))])));
    }
    else if ($.eq($t98, (await $.v(C, "vaString"))) || $.eq($t98, (await $.v(C, "vaIdent")))) {
      await $.stmt($.call(C, "ReadStr", []));
    }
    else if ($.eq($t98, (await $.v(C, "vaFalse"))) || $.eq($t98, (await $.v(C, "vaTrue")))) {
    }
    else if ($.eq($t98, (await $.v(C, "vaBinary")))) {
      await $.stmt($.callv(L0["skipbinary"], []));
    }
    else if ($.eq($t98, (await $.v(C, "vaSet")))) {
      await $.stmt($.call(C, "SkipSetBody", []));
    }
    else if ($.eq($t98, (await $.v(C, "vaCollection")))) {
      await $.stmt($.callv(L0["skipcollection"], []));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropReaderEh", "SkipProperty", async function SkipProperty(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ReadStr", []));
  await $.stmt($.call(C, "SkipValue", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStoragePropertyInterceptor", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"atarget": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["atarget"]);
  await $.set(C, "FTarget", L0["atarget"]);
  return L0.result;
}, {"params": ["ATarget"], "kind": "constructor", "ptypes": ["TObject"]});
  U.method("TStoragePropertyInterceptor", "NeedIntercept", async function NeedIntercept(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStoragePropertyInterceptor", "Readed", async function Readed(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("GetFormNormalPlacement", async function GetFormNormalPlacement(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"form": $.copyArg(p0), result: null, "placement": null};
  await $.fixArgs(L0, ["form"]);
  if ($.truthy((await $.and_(($.ne((await $.mv(L0["form"], "WindowState")), (await $.v(C, "wsNormal")))), async () => (await $.mv(L0["form"], "HandleAllocated")))))) {
    await $.mset(L0["placement"], "length", (await $.call(C, "SizeOf", [(await $.v(C, "TWindowPlacement"))])));
    await $.stmt((await $.call(C, "GetWindowPlacement", [(await $.mv(L0["form"], "Handle")), L0["placement"]])));
    L0["result"] = (await $.mv(L0["placement"], "rcNormalPosition"));
  } else {
    L0["result"] = (await $.call(C, "Rect", [(await $.mv(L0["form"], "Left")), (await $.mv(L0["form"], "Top")), $.add((await $.mv(L0["form"], "Left")), (await $.mv(L0["form"], "Width"))), $.add((await $.mv(L0["form"], "Top")), (await $.mv(L0["form"], "Height")))]));
  }
  return L0.result;
}, {"params": ["Form"], "kind": "function", "ptypes": ["TCustomForm"]});
  U.method("TFormStoragePropertyInterceptor", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"atarget": $.copyArg(p0), result: undefined, "placementrect": null};
  await $.fixArgs(L0, ["atarget"]);
  await $.inherited(Self, "TFormStoragePropertyInterceptor", "Create", [L0["atarget"]], arguments);
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Target")), null)), async () => ($.is_((await $.v(C, "Target")), "TCustomForm")))))) {
    L0["placementrect"] = (await $.call(C, "GetFormNormalPlacement", [(await $.call(C, "TCustomForm", [(await $.v(C, "Target"))]))]));
    await $.set(C, "FTop", (await $.mv(L0["placementrect"], "Top")));
    await $.set(C, "FLeft", (await $.mv(L0["placementrect"], "Left")));
    await $.set(C, "FHeight", $.sub((await $.mv(L0["placementrect"], "Bottom")), (await $.mv(L0["placementrect"], "Top"))));
    await $.set(C, "FWidth", $.sub((await $.mv(L0["placementrect"], "Right")), (await $.mv(L0["placementrect"], "Left"))));
  }
  await $.set(C, "FPixelsPerInch", (await $.mv((await $.call(C, "TForm", [(await $.v(C, "Target"))])), "PixelsPerInch")));
  await $.set(C, "FWindowState", (await $.mv((await $.call(C, "TForm", [(await $.v(C, "Target"))])), "WindowState")));
  await $.set(C, "FActiveControl", (await $.mv((await $.call(C, "TForm", [(await $.v(C, "Target"))])), "ActiveControl")));
  return L0.result;
}, {"params": ["ATarget"], "kind": "constructor", "ptypes": ["TObject"]});
  U.method("TFormStoragePropertyInterceptor", "GetTop", async function GetTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Target")), null)), async () => ($.is_((await $.v(C, "Target")), "TCustomForm")))))) {
    L0["result"] = (await $.mv((await $.call(C, "GetFormNormalPlacement", [(await $.call(C, "TCustomForm", [(await $.v(C, "Target"))]))])), "Top"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormStoragePropertyInterceptor", "GetLeft", async function GetLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Target")), null)), async () => ($.is_((await $.v(C, "Target")), "TCustomForm")))))) {
    L0["result"] = (await $.mv((await $.call(C, "GetFormNormalPlacement", [(await $.call(C, "TCustomForm", [(await $.v(C, "Target"))]))])), "Left"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormStoragePropertyInterceptor", "GetHeight", async function GetHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "placementrect": null};
  L0["result"] = 0;
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Target")), null)), async () => ($.is_((await $.v(C, "Target")), "TCustomForm")))))) {
    L0["placementrect"] = (await $.call(C, "GetFormNormalPlacement", [(await $.call(C, "TCustomForm", [(await $.v(C, "Target"))]))]));
    L0["result"] = $.sub((await $.mv(L0["placementrect"], "Bottom")), (await $.mv(L0["placementrect"], "Top")));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormStoragePropertyInterceptor", "GetWidth", async function GetWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "placementrect": null};
  L0["result"] = 0;
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Target")), null)), async () => ($.is_((await $.v(C, "Target")), "TCustomForm")))))) {
    L0["placementrect"] = (await $.call(C, "GetFormNormalPlacement", [(await $.call(C, "TCustomForm", [(await $.v(C, "Target"))]))]));
    L0["result"] = $.sub((await $.mv(L0["placementrect"], "Right")), (await $.mv(L0["placementrect"], "Left")));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormStoragePropertyInterceptor", "GetNotmalFormPlacement", async function GetNotmalFormPlacement(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormStoragePropertyInterceptor", "Readed", async function Readed(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "placement": null};
  await $.inherited(Self, "TFormStoragePropertyInterceptor", "Readed", null, arguments);
  await $.set(C, "FHeight", (await $.call(C, "MulDiv", [(await $.v(C, "FHeight")), (await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), (await $.v(C, "FPixelsPerInch"))])));
  await $.set(C, "FLeft", (await $.call(C, "MulDiv", [(await $.v(C, "FLeft")), (await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), (await $.v(C, "FPixelsPerInch"))])));
  await $.set(C, "FTop", (await $.call(C, "MulDiv", [(await $.v(C, "FTop")), (await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), (await $.v(C, "FPixelsPerInch"))])));
  await $.set(C, "FWidth", (await $.call(C, "MulDiv", [(await $.v(C, "FWidth")), (await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), (await $.v(C, "FPixelsPerInch"))])));
  if ($.truthy(($.ne((await $.v(C, "Target")), null)))) {
    await $.mset((await $.call(C, "TCustomForm", [(await $.v(C, "Target"))])), "WindowState", (await $.v(C, "FWindowState")));
    await $.mset((await $.call(C, "TNastyForm", [(await $.v(C, "Target"))])), "FActiveControl", (await $.v(C, "FActiveControl")));
    await $.stmt((await $.mcall((await $.call(C, "TCustomForm", [(await $.v(C, "Target"))])), "SetBounds", [(await $.v(C, "FLeft")), (await $.v(C, "FTop")), (await $.v(C, "FWidth")), (await $.v(C, "FHeight"))])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormStoragePropertyInterceptor", "SetLeft", async function SetLeft(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPosPresent", true);
  await $.set(C, "FLeft", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFormStoragePropertyInterceptor", "SetTop", async function SetTop(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPosPresent", true);
  await $.set(C, "FTop", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterReadPropertyInterceptor", [(await $.v(C, "TCustomForm")), (await $.v(C, "TFormStoragePropertyInterceptor"))])));
  return L0.result;
});
  return U;
}

// Generated from csProp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("csProp", ["Classes", "Graphics", "TypInfo", "SysUtils"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("PropertyExists", async function PropertyExists(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "propname"]);
  L0["result"] = $.ne((await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]])), null);
  return L0.result;
}, {"params": ["Component", "PropName"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SetPointerProperty", async function SetPointerProperty(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), "ptr": $.copyArg(p2), result: undefined, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname", "ptr"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.ne(L0["ptrpropinfo"], null))) {
    await $.stmt((await $.call(C, "SetOrdProp", [L0["component"], L0["ptrpropinfo"], (await $.call(C, "LongInt", [L0["ptr"]]))])));
  }
  return L0.result;
}, {"params": ["Component", "PropName", "ptr"], "kind": "procedure", "ptypes": ["TComponent", "String", "Pointer"]});
  U.func("GetPointerProperty", async function GetPointerProperty(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), result: null, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.eq(L0["ptrpropinfo"], null))) {
    L0["result"] = null;
  } else {
    L0["result"] = (await $.call(C, "Pointer", [(await $.call(C, "GetOrdProp", [L0["component"], L0["ptrpropinfo"]]))]));
  }
  return L0.result;
}, {"params": ["Component", "PropName"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SetBooleanProperty", async function SetBooleanProperty(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), "b": $.copyArg(p2), result: undefined, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname", "b"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.ne(L0["ptrpropinfo"], null))) {
    await $.stmt((await $.call(C, "SetOrdProp", [L0["component"], L0["ptrpropinfo"], (await $.call(C, "LongInt", [L0["b"]]))])));
  }
  return L0.result;
}, {"params": ["Component", "PropName", "B"], "kind": "procedure", "ptypes": ["TComponent", "String", "Boolean"]});
  U.func("GetBooleanProperty", async function GetBooleanProperty(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), result: false, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.eq(L0["ptrpropinfo"], null))) {
    L0["result"] = false;
  } else {
    L0["result"] = $.eq((await $.call(C, "GetOrdProp", [L0["component"], L0["ptrpropinfo"]])), 1);
  }
  return L0.result;
}, {"params": ["Component", "PropName"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SetIntegerProperty", async function SetIntegerProperty(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), "l": $.copyArg(p2), result: undefined, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname", "l"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.ne(L0["ptrpropinfo"], null))) {
    await $.stmt((await $.call(C, "SetOrdProp", [L0["component"], L0["ptrpropinfo"], L0["l"]])));
  }
  return L0.result;
}, {"params": ["Component", "PropName", "L"], "kind": "procedure", "ptypes": ["TComponent", "String", "Longint"]});
  U.func("GetIntegerProperty", async function GetIntegerProperty(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), result: 0, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.eq(L0["ptrpropinfo"], null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = (await $.call(C, "GetOrdProp", [L0["component"], L0["ptrpropinfo"]]));
  }
  return L0.result;
}, {"params": ["Component", "PropName"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SetFloatProperty", async function SetFloatProperty(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), "value": $.copyArg(p2), result: undefined, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname", "value"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.ne(L0["ptrpropinfo"], null))) {
    await $.stmt((await $.call(C, "SetFloatProp", [L0["component"], L0["ptrpropinfo"], L0["value"]])));
  }
  return L0.result;
}, {"params": ["Component", "PropName", "Value"], "kind": "procedure", "ptypes": ["TComponent", "String", "Extended"]});
  U.func("GetFloatProperty", async function GetFloatProperty(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), result: 0, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.eq(L0["ptrpropinfo"], null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = (await $.call(C, "GetFloatProp", [L0["component"], L0["ptrpropinfo"]]));
  }
  return L0.result;
}, {"params": ["Component", "PropName"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SetStringProperty", async function SetStringProperty(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), "value": $.copyArg(p2), result: undefined, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname", "value"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.ne(L0["ptrpropinfo"], null))) {
    await $.stmt((await $.call(C, "SetStrProp", [L0["component"], L0["ptrpropinfo"], L0["value"]])));
  }
  return L0.result;
}, {"params": ["Component", "PropName", "Value"], "kind": "procedure", "ptypes": ["TComponent", "String", "String"]});
  U.func("GetStringProperty", async function GetStringProperty(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), result: '', "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.eq(L0["ptrpropinfo"], null))) {
    L0["result"] = "";
  } else {
    L0["result"] = (await $.call(C, "GetStrProp", [L0["component"], L0["ptrpropinfo"]]));
  }
  return L0.result;
}, {"params": ["Component", "PropName"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SetMethodProperty", async function SetMethodProperty(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "propname": $.copyArg(p1), "code": $.copyArg(p2), "data": $.copyArg(p3), result: undefined, "method": null, "ptrpropinfo": null};
  await $.fixArgs(L0, ["component", "propname", "code", "data"]);
  L0["ptrpropinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["component"], "ClassInfo")), L0["propname"]]));
  if ($.truthy($.ne(L0["ptrpropinfo"], null))) {
    await $.mset(L0["method"], "Code", L0["code"]);
    await $.mset(L0["method"], "Data", L0["data"]);
    await $.stmt((await $.call(C, "SetMethodProp", [L0["component"], L0["ptrpropinfo"], L0["method"]])));
  }
  return L0.result;
}, {"params": ["Component", "PropName", "Code", "Data"], "kind": "procedure", "ptypes": ["TComponent", "String", "Pointer", "Pointer"]});
  U.func("GetFontProperty", async function GetFontProperty(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["component"]);
  L0["result"] = (await $.call(C, "TFont", [(await $.call(C, "GetPointerProperty", [L0["component"], "Font"]))]));
  return L0.result;
}, {"params": ["Component"], "kind": "function", "ptypes": ["TComponent"]});
  return U;
}

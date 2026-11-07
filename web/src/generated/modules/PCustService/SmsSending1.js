// Generated from SmsSending1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SmsSending1", ["InvokeRegistry", "SOAPHTTPClient", "Types", "XSBuiltIns", "SysUtils"]);
  const C = [U];
  U.const("SmsSending", "SmsSending");
  U.defClass("stackTraceElement", "TRemotable", {}, {});
  U.defClass("IOException2", "TRemotable", {"fmessage_": {"name": "Fmessage_", "type": "String"}, "fmessage__specified": {"name": "Fmessage__Specified", "type": "boolean"}}, {"message_": {"name": "message_", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "Fmessage_", "write": "Setmessage_"}});
  U.defClass("IOException", "ERemotableException", {"fmessage_": {"name": "Fmessage_", "type": "String"}, "fmessage__specified": {"name": "Fmessage__Specified", "type": "boolean"}}, {"message_": {"name": "message_", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "Fmessage_", "write": "Setmessage_"}});
  U.defClass("JAXBException", "ERemotableException", {"ferrorcode": {"name": "FerrorCode", "type": "String"}, "ferrorcode_specified": {"name": "FerrorCode_Specified", "type": "boolean"}, "flinkedexception": {"name": "FlinkedException", "type": "throwable"}, "flinkedexception_specified": {"name": "FlinkedException_Specified", "type": "boolean"}, "fmessage_": {"name": "Fmessage_", "type": "String"}, "fmessage__specified": {"name": "Fmessage__Specified", "type": "boolean"}}, {"errorcode": {"name": "errorCode", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "FerrorCode", "write": "SeterrorCode"}, "linkedexception": {"name": "linkedException", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "FlinkedException", "write": "SetlinkedException"}, "message_": {"name": "message_", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "Fmessage_", "write": "Setmessage_"}});
  U.fieldInit("JAXBException", "flinkedexception", () => []);
  U.defClass("JAXBException2", "TRemotable", {"ferrorcode": {"name": "FerrorCode", "type": "String"}, "ferrorcode_specified": {"name": "FerrorCode_Specified", "type": "boolean"}, "flinkedexception": {"name": "FlinkedException", "type": "throwable"}, "flinkedexception_specified": {"name": "FlinkedException_Specified", "type": "boolean"}, "fmessage_": {"name": "Fmessage_", "type": "String"}, "fmessage__specified": {"name": "Fmessage__Specified", "type": "boolean"}}, {"errorcode": {"name": "errorCode", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "FerrorCode", "write": "SeterrorCode"}, "linkedexception": {"name": "linkedException", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "FlinkedException", "write": "SetlinkedException"}, "message_": {"name": "message_", "index": ["paren", ["bin", "or", ["id", "IS_OPTN"], ["id", "IS_UNQL"]]], "read": "Fmessage_", "write": "Setmessage_"}});
  U.fieldInit("JAXBException2", "flinkedexception", () => []);
  U.init(async () => {
    U.const("IS_OPTN", 1);
    U.const("IS_UNBD", 2);
    U.const("IS_NLBL", 4);
    U.const("IS_UNQL", 8);
  });
  U.func("GetSmsSending", async function GetSmsSending(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"usewsdl": $.copyArg(p0), "addr": $.copyArg(p1), "httprio": $.copyArg(p2), result: null, "rio": null};
  await $.fixArgs(L0, ["usewsdl", "addr", "httprio"]);
  L0["defwsdl"] = "http://192.168.2.218:8080/SmsSending/SmsSending?WSDL";
  L0["defurl"] = "http://192.168.2.218:8080/SmsSending/SmsSending";
  L0["defsvc"] = "SmsSending";
  L0["defprt"] = "SmsSendingPort";
  L0["result"] = null;
  if ($.truthy(($.eq(L0["addr"], "")))) {
    if ($.truthy(L0["usewsdl"])) {
      L0["addr"] = L0["defwsdl"];
    } else {
      L0["addr"] = L0["defurl"];
    }
  }
  if ($.truthy($.eq(L0["httprio"], null))) {
    L0["rio"] = (await $.mcall((await $.v(C, "THTTPRIO")), "Create", [null]));
  } else {
    L0["rio"] = L0["httprio"];
  }
  try {
    L0["result"] = (L0["rio"]);
    if ($.truthy(L0["usewsdl"])) {
      await $.mset(L0["rio"], "WSDLLocation", L0["addr"]);
      await $.mset(L0["rio"], "Service", L0["defsvc"]);
      await $.mset(L0["rio"], "Port", L0["defprt"]);
    } else {
      await $.mset(L0["rio"], "URL", L0["addr"]);
    }
  } finally {
    if ($.truthy((await $.and_(($.eq(L0["result"], null)), async () => ($.eq(L0["httprio"], null)))))) {
      await $.mcall(L0["rio"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["UseWSDL", "Addr", "HTTPRIO"], "kind": "function", "ptypes": ["Boolean", "String", "THTTPRIO"]});
  U.method("IOException2", "Setmessage_", async function Setmessage_(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "astring": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "astring"]);
  await $.set(C, "Fmessage_", L0["astring"]);
  await $.set(C, "Fmessage__Specified", true);
  return L0.result;
}, {"params": ["Index", "Astring"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("IOException2", "message__Specified", async function message__Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "Fmessage__Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("IOException", "Setmessage_", async function Setmessage_(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "astring": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "astring"]);
  await $.set(C, "Fmessage_", L0["astring"]);
  await $.set(C, "Fmessage__Specified", true);
  return L0.result;
}, {"params": ["Index", "Astring"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("IOException", "message__Specified", async function message__Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "Fmessage__Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("JAXBException", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t1 = $.sub((await $.mcall((await $.v(C, "System")), "Length", [(await $.v(C, "FlinkedException"))])), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      await $.stmt((await $.mcall((await $.v(C, "SysUtils")), "FreeAndNil", [$.ref(async () => (await $.idx((await $.v(C, "FlinkedException")), [L0["i"]])), async ($t3) => { { const $t4 = await $.iset((await $.v(C, "FlinkedException")), [L0["i"]], $t3); if ($t4 !== undefined) { await $.set(C, "FlinkedException", $t4); } } })])));
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "System")), "SetLength", [$.ref(async () => (await $.v(C, "FlinkedException")), async ($t5) => { await $.set(C, "FlinkedException", $t5); }), 0])));
  await $.inherited(Self, "JAXBException", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("JAXBException", "SeterrorCode", async function SeterrorCode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "astring": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "astring"]);
  await $.set(C, "FerrorCode", L0["astring"]);
  await $.set(C, "FerrorCode_Specified", true);
  return L0.result;
}, {"params": ["Index", "Astring"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("JAXBException", "errorCode_Specified", async function errorCode_Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "FerrorCode_Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("JAXBException", "SetlinkedException", async function SetlinkedException(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "athrowable": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "athrowable"]);
  await $.set(C, "FlinkedException", L0["athrowable"]);
  await $.set(C, "FlinkedException_Specified", true);
  return L0.result;
}, {"params": ["Index", "Athrowable"], "kind": "procedure", "ptypes": ["Integer", "throwable"]});
  U.method("JAXBException", "linkedException_Specified", async function linkedException_Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "FlinkedException_Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("JAXBException", "Setmessage_", async function Setmessage_(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "astring": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "astring"]);
  await $.set(C, "Fmessage_", L0["astring"]);
  await $.set(C, "Fmessage__Specified", true);
  return L0.result;
}, {"params": ["Index", "Astring"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("JAXBException", "message__Specified", async function message__Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "Fmessage__Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("JAXBException2", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t6 = $.sub((await $.mcall((await $.v(C, "System")), "Length", [(await $.v(C, "FlinkedException"))])), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      await $.stmt((await $.mcall((await $.v(C, "SysUtils")), "FreeAndNil", [$.ref(async () => (await $.idx((await $.v(C, "FlinkedException")), [L0["i"]])), async ($t8) => { { const $t9 = await $.iset((await $.v(C, "FlinkedException")), [L0["i"]], $t8); if ($t9 !== undefined) { await $.set(C, "FlinkedException", $t9); } } })])));
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "System")), "SetLength", [$.ref(async () => (await $.v(C, "FlinkedException")), async ($t10) => { await $.set(C, "FlinkedException", $t10); }), 0])));
  await $.inherited(Self, "JAXBException2", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("JAXBException2", "SeterrorCode", async function SeterrorCode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "astring": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "astring"]);
  await $.set(C, "FerrorCode", L0["astring"]);
  await $.set(C, "FerrorCode_Specified", true);
  return L0.result;
}, {"params": ["Index", "Astring"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("JAXBException2", "errorCode_Specified", async function errorCode_Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "FerrorCode_Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("JAXBException2", "SetlinkedException", async function SetlinkedException(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "athrowable": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "athrowable"]);
  await $.set(C, "FlinkedException", L0["athrowable"]);
  await $.set(C, "FlinkedException_Specified", true);
  return L0.result;
}, {"params": ["Index", "Athrowable"], "kind": "procedure", "ptypes": ["Integer", "throwable"]});
  U.method("JAXBException2", "linkedException_Specified", async function linkedException_Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "FlinkedException_Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("JAXBException2", "Setmessage_", async function Setmessage_(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "astring": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "astring"]);
  await $.set(C, "Fmessage_", L0["astring"]);
  await $.set(C, "Fmessage__Specified", true);
  return L0.result;
}, {"params": ["Index", "Astring"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("JAXBException2", "message__Specified", async function message__Specified(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.v(C, "Fmessage__Specified"));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  return U;
}

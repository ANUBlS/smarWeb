// Generated from Unitreject.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitreject", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "IdBaseComponent", "IdComponent", "IdTCPConnection", "IdTCPClient", "IdHTTP", "Datamoduls"]);
  const C = [U];
  U.defClass("TRejectForm", "TForm", {"memo1": {"name": "Memo1", "type": "TMemo"}, "button1": {"name": "Button1", "type": "TButton"}, "idhttp1": {"name": "IdHTTP1", "type": "TIdHTTP"}, "edit6": {"name": "Edit6", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("RejectForm", null, "TRejectForm");
  });
  U.method("TRejectForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "urls": '', "er": '', "headerkey": '', "endpars": '', "pages": '', "cnts": '', "respcont": '', "requestbody": null, "reqjson": null, "respjson": ''};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mcall((await $.mv((await $.v(C, "Datamod")), "OracleDataSet1")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "OracleDataSet1")), "open", []);
    L0["urls"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["ipadress"])), "AsVariant"));
    L0["headerkey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["headerkey"])), "AsString"));
    L0["endpars"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["endpointapp"])), "AsString")), "/"), (await $.mv((await $.v(C, "edit6")), "Text"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["endpointreject"])), "AsString")));
    {
      const $t2 = (await $.v(C, "IdHTTP1"));
      await $.mcall((await $.mv((await $.wv([$t2], "Request", C, false)), "CustomHeaders")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t2], "Request", C, false)), "CustomHeaders")), "AddValue", ["key", (await $.wv([$t2], "headerkey", { get: async () => L0["headerkey"], set: async (v) => { L0["headerkey"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t2], "Request", C, false)), "ContentType", "application/json");
      await $.wset([$t2], "ReqJson", (await $.mcall((await $.wv([$t2], "TStringStream", C, false)), "Create", [$.add($.add("{\"rejectReason\": \"", (await $.mv((await $.wv([$t2], "memo1", C, false)), "text"))), "\"}"), (await $.mv((await $.wv([$t2], "TEncoding", C, false)), "UTF8"))])), { get: async () => L0["reqjson"], set: async (v) => { L0["reqjson"] = v; }, local: true });
      await $.wset([$t2], "respcont", (await $.wcall([$t2], "PUT", [$.add((await $.wv([$t2], "urls", { get: async () => L0["urls"], set: async (v) => { L0["urls"] = v; }, local: true }, false)), (await $.wv([$t2], "endpars", { get: async () => L0["endpars"], set: async (v) => { L0["endpars"] = v; }, local: true }, false))), (await $.wv([$t2], "ReqJson", { get: async () => L0["reqjson"], set: async (v) => { L0["reqjson"] = v; }, local: true }, false))], C)), { get: async () => L0["respcont"], set: async (v) => { L0["respcont"] = v; }, local: true });
      await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryreject")), "close", []);
      await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryreject")), "closeAll", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryreject")), "SetVariable", ["clb", (await $.wv([$t2], "respcont", { get: async () => L0["respcont"], set: async (v) => { L0["respcont"] = v; }, local: true }, false))])));
      await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryreject")), "open", []);
      await $.mcall((await $.wv([$t2], "RequestBody", { get: async () => L0["requestbody"], set: async (v) => { L0["requestbody"] = v; }, local: true }, false)), "Free", []);
      await $.stmt($.wcall([$t2], "close", [], C));
    }
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "EIdHTTPProtocolException")) {
      L0["e"] = $.exc($t1);
      await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add((await $.mv(L0["e"], "ErrorMessage")), "**"), (await $.call(C, "inttostr", [(await $.mv(L0["e"], "ErrorCode"))]))), "**"), (await $.mv(L0["e"], "Message")))])));
    }
    else { throw $t1; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRejectForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from UnitApprove.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitApprove", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "IdBaseComponent", "IdComponent", "IdTCPConnection", "IdTCPClient", "IdHTTP", "IdURI", "Datamoduls", "MainForm"]);
  const C = [U];
  U.defClass("TApproveForm", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "idhttp1": {"name": "IdHTTP1", "type": "TIdHTTP"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("ApproveForm", null, "TApproveForm");
    U.var_("applicantid", '', "String");
  });
  U.method("TApproveForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "er": '', "headerkey": '', "endpars": '', "pages": '', "cnts": '', "respcont": '', "requestbody": null, "reqjson": null, "respjson": '', "urls": ''};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mcall((await $.mv((await $.v(C, "Datamod")), "OracleDataSet1")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "OracleDataSet1")), "open", []);
    await $.mset((await $.v(C, "memo1")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("{\"amount\":", (await $.mv((await $.v(C, "edit1")), "Text"))), ", \"duration\":"), (await $.mv((await $.v(C, "edit2")), "Text"))), ",\"interestRate\":"), (await $.mv((await $.v(C, "edit3")), "Text"))), ",\"commission\":"), (await $.mv((await $.v(C, "edit4")), "Text"))), ",\"gracePeriod\":"), (await $.mv((await $.v(C, "edit5")), "Text"))), "}"));
    L0["urls"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["ipadress"])), "AsVariant"));
    L0["headerkey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["headerkey"])), "AsString"));
    L0["endpars"] = $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["endpointapp"])), "AsString")), "/"), (await $.mv((await $.v(C, "edit6")), "Text"))), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "FieldByName", ["endpointapprove"])), "AsString")));
    {
      const $t2 = (await $.v(C, "IdHTTP1"));
      await $.mcall((await $.mv((await $.wv([$t2], "Request", C, false)), "CustomHeaders")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t2], "Request", C, false)), "CustomHeaders")), "AddValue", ["key", (await $.wv([$t2], "headerkey", { get: async () => L0["headerkey"], set: async (v) => { L0["headerkey"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t2], "Request", C, false)), "ContentType", "application/json");
      await $.wset([$t2], "ReqJson", (await $.mcall((await $.wv([$t2], "TStringStream", C, false)), "Create", [$.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("{\"amount\":", (await $.mv((await $.wv([$t2], "edit1", C, false)), "Text"))), ", \"duration\":"), (await $.mv((await $.wv([$t2], "edit2", C, false)), "Text"))), ",\"interestRate\":"), (await $.mv((await $.wv([$t2], "edit3", C, false)), "Text"))), ",\"commission\":"), (await $.mv((await $.wv([$t2], "edit4", C, false)), "Text"))), ",\"gracePeriod\":"), (await $.mv((await $.wv([$t2], "edit5", C, false)), "Text"))), "}"), (await $.mv((await $.wv([$t2], "TEncoding", C, false)), "UTF8"))])), { get: async () => L0["reqjson"], set: async (v) => { L0["reqjson"] = v; }, local: true });
      await $.wset([$t2], "respcont", (await $.wcall([$t2], "PUT", [$.add((await $.wv([$t2], "urls", { get: async () => L0["urls"], set: async (v) => { L0["urls"] = v; }, local: true }, false)), (await $.wv([$t2], "endpars", { get: async () => L0["endpars"], set: async (v) => { L0["endpars"] = v; }, local: true }, false))), (await $.wv([$t2], "ReqJson", { get: async () => L0["reqjson"], set: async (v) => { L0["reqjson"] = v; }, local: true }, false))], C)), { get: async () => L0["respcont"], set: async (v) => { L0["respcont"] = v; }, local: true });
      await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryapprove")), "close", []);
      await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryapprove")), "closeAll", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryapprove")), "SetVariable", ["clb", (await $.wv([$t2], "respcont", { get: async () => L0["respcont"], set: async (v) => { L0["respcont"] = v; }, local: true }, false))])));
      await $.mcall((await $.mv((await $.wv([$t2], "datamod", C, false)), "insqueryapprove")), "open", []);
      await $.mset((await $.wv([$t2], "memo1", C, false)), "Text", (await $.wv([$t2], "respcont", { get: async () => L0["respcont"], set: async (v) => { L0["respcont"] = v; }, local: true }, false)));
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
  U.method("TApproveForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

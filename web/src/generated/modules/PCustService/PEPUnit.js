// Generated from PEPUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PEPUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "IdHTTP", "IdSSLOpenSSL", "IdURI", "Dialogs", "StdCtrls", "ExtCtrls", "IOUtils", "ShlObj", "SHDocVw", "ShellAPI", "OleCtrls", "DB", "OracleData", "UnitDataModPCustService", "PCustServiceFormImpl1", "Printers", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPep_change", "TForm", {"memo1": {"name": "Memo1", "type": "TMemo"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1tax_regcode": {"name": "OracleDataSet1TAX_REGCODE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Pep_change", null, "TPep_change");
  });
  U.func("ShowCustomMessage", async function ShowCustomMessage(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null, "l": null};
  L0["f"] = (await $.mcall((await $.v(C, "TForm")), "Create", [null]));
  try {
    await $.mset(L0["f"], "Caption", "Xəbərdarlıq");
    await $.mset(L0["f"], "Width", 500);
    await $.mset(L0["f"], "Height", 80);
    await $.mset(L0["f"], "Position", (await $.v(C, "poScreenCenter")));
    await $.mset(L0["f"], "BorderStyle", (await $.v(C, "bsDialog")));
    L0["l"] = (await $.mcall((await $.v(C, "TLabel")), "Create", [L0["f"]]));
    await $.mset(L0["l"], "Parent", L0["f"]);
    await $.mset(L0["l"], "Caption", "Diqqət! Aidiyyatı şöbəyə müraciət edin!");
    await $.mset((await $.mv(L0["l"], "Font")), "Size", 14);
    await $.mset((await $.mv(L0["l"], "Font")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.mv(L0["l"], "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.mset(L0["l"], "AutoSize", true);
    await $.mset(L0["l"], "Left", 40);
    await $.mset(L0["l"], "Top", 20);
    await $.mcall(L0["f"], "ShowModal", []);
  } finally {
    await $.mcall(L0["f"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPep_change", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "http": null, "responsetext": '', "url": '', "url1": '', "name": '', "last_name": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  try {
    try {
      L0["name"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "convertpack")), "CallstringFunction", ["CONVERT_INT", [(await $.mv((await $.v(C, "edit1")), "Text"))]]));
      L0["last_name"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "convertpack")), "CallstringFunction", ["CONVERT_INT", [(await $.mv((await $.v(C, "edit2")), "Text"))]]));
      L0["url"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "OracleDataSet1TAX_REGCODE")), "AsString")), "name="), L0["name"]), "&surname="), L0["last_name"]);
      L0["responsetext"] = (await $.mcall(L0["http"], "Get", [L0["url"]]));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [$.add("Response: ", L0["responsetext"])])));
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Memo1")), "Lines")), "Count")), 2))) {
        await $.stmt($.call(C, "ShowCustomMessage", []));
      }
    } catch ($t1) {
      $.rethrowControl($t1);
      if ($.excIs($t1, "Exception")) {
        L0["e"] = $.exc($t1);
        await $.stmt((await $.call(C, "ShowMessage", [$.add("Xəta: ", (await $.mv(L0["e"], "Message")))])));
      }
      else { throw $t1; }
    }
  } finally {
    await $.mcall(L0["http"], "Free", []);
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPep_change", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
    await $.mset((await $.mv((await $.v(C, "PCustServiceForm")), "EditFirstName")), "text", (await $.mv((await $.v(C, "edit1")), "Text")));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
    await $.mset((await $.mv((await $.v(C, "PCustServiceForm")), "EditLastName")), "text", (await $.mv((await $.v(C, "edit2")), "Text")));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  await $.mcall((await $.v(C, "Pep_change")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPep_change", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPep_change", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

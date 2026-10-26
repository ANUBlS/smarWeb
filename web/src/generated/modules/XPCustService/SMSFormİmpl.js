// Generated from SMSFormİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SMSFormİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "XFSCtrls", "ExtCtrls", "ComCtrls", "DB", "OracleData", "InvokeRegistry", "Rio", "SOAPHTTPClient", "DBCtrls", "ExtDlgs", "SBTranslateProc", "sboapiDataModuleImpl", "SmsSending1", "UnitDataModPCustService", "PCustServiceFormImpl1"]);
  const C = [U];
  U.defClass("TSMSForm", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "smsmemo": {"name": "SMSMemo", "type": "TMemo"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "emailmemo": {"name": "EmailMemo", "type": "TMemo"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfradiobutton3": {"name": "XFRadioButton3", "type": "TXFRadioButton"}, "xfradiobutton4": {"name": "XFRadioButton4", "type": "TXFRadioButton"}, "sms": {"name": "sms", "type": "TOracleDataSet"}, "ods_filespath": {"name": "ODS_FilesPath", "type": "TOracleDataSet"}, "ods_filespathdescription": {"name": "ODS_FilesPathDESCRIPTION", "type": "TWideStringField"}, "dtp1": {"name": "DTP1", "type": "TDateTimePicker"}, "sys": {"name": "sys", "type": "TOracleDataSet"}, "httprio1": {"name": "HTTPRIO1", "type": "THTTPRIO"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "syssysdate": {"name": "sysSYSDATE", "type": "TDateTimeField"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "ods_sms": {"name": "Ods_sms", "type": "TOracleDataSet"}, "dsrc_sms": {"name": "Dsrc_sms", "type": "TDataSource"}, "ods_smsid": {"name": "Ods_smsID", "type": "TFloatField"}, "ods_smsname": {"name": "Ods_smsNAME", "type": "TWideStringField"}, "ods_smstemplate": {"name": "Ods_smsTEMPLATE", "type": "TWideStringField"}, "ods_smsdescription": {"name": "Ods_smsDESCRIPTION", "type": "TWideStringField"}, "ods_smstip": {"name": "Ods_smsTIP", "type": "TFloatField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "button1": {"name": "Button1", "type": "TButton"}, "smsphone_mob": {"name": "smsPHONE_MOB", "type": "TWideStringField"}, "smsid": {"name": "smsID", "type": "TIntegerField"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "memo2": {"name": "Memo2", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("SMSForm", null, "TSMSForm");
    U.var_("FilePAth", '', "String");
    U.var_("f", null, "TextFile");
  });
  U.method("TSMSForm", "WriteLnString", async function WriteLnString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t1) => { await $.set(C, "f", $t1); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t2) => { await $.set(C, "f", $t2); })])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo1")), "Lines")), "Add", [(await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t3) => { await $.set(C, "f", $t3); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TSMSForm", "WriteString", async function WriteString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t4) => { await $.set(C, "f", $t4); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t5) => { await $.set(C, "f", $t5); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo1")), "Lines")), "Add", [(await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t6) => { await $.set(C, "f", $t6); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TSMSForm", "CreateXmlFile", async function CreateXmlFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.mcall((await $.v(C, "sms")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "sms")), "SQL")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "sms")), "SQL")), "Text", (await $.v(C, "ds_recort")));
  await $.mset((await $.v(C, "Memo2")), "Text", (await $.v(C, "ds_recort")));
  await $.mcall((await $.v(C, "sms")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.v(C, "sms")), "RecordCount")), 1))) {
    await $.stmt((await $.call(C, "WriteLnString", ["<request>"])));
    await $.stmt((await $.call(C, "WriteLnString", ["<head>"])));
    await $.stmt((await $.call(C, "WriteString", ["<operation>"])));
    await $.stmt((await $.call(C, "WriteString", ["submit"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</operation>"])));
    await $.stmt((await $.call(C, "WriteString", ["<login>"])));
    await $.stmt((await $.call(C, "WriteString", ["login"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</login>"])));
    await $.stmt((await $.call(C, "WriteString", ["<password>"])));
    await $.stmt((await $.call(C, "WriteString", ["password"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</password>"])));
    await $.stmt((await $.call(C, "WriteString", ["<title>"])));
    await $.stmt((await $.call(C, "WriteString", ["title"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</title>"])));
    await $.stmt((await $.call(C, "WriteString", ["<bulkmessage>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.v(C, "SMSMemo")), "text"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</bulkmessage>"])));
    await $.stmt((await $.call(C, "WriteString", ["<scheduled>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.v(C, "sys")), "FieldByName", ["sysdate"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</scheduled>"])));
    await $.stmt((await $.call(C, "WriteString", ["<isbulk>"])));
    await $.stmt((await $.call(C, "WriteString", ["true"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</isbulk>"])));
    await $.stmt((await $.call(C, "WriteString", ["<controlid>"])));
    await $.stmt((await $.call(C, "WriteString", ["111"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</controlid>"])));
    await $.stmt((await $.call(C, "WriteString", ["</head>"])));
    {
      const $t7 = (await $.v(C, "sms"));
      await $.mcall((await $.wv([$t7], "sms", C, false)), "First", []);
      { const $t8 = $.sub((await $.mv((await $.wv([$t7], "sms", C, false)), "RecordCount")), 1);
        await $.wset([$t7], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t9 = true;
        for (;;) {
          if (!$t9) { await $.wset([$t7], "I", $.succ((await $.wv([$t7], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t9 = false;
          if (!($.ord((await $.wv([$t7], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
          await $.stmt((await $.wcall([$t7], "WriteLnString", ["<body>"], C)));
          await $.stmt((await $.wcall([$t7], "WriteString", ["<msisdn>"], C)));
          await $.stmt((await $.wcall([$t7], "WriteString", [(await $.mv((await $.wcall([$t7], "FieldByName", ["PHONE_MOB"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t7], "WriteLnString", ["</msisdn>"], C)));
          await $.stmt((await $.wcall([$t7], "WriteString", ["</body>"], C)));
          await $.mcall((await $.wv([$t7], "sms", C, false)), "Next", []);
          await $.tick();
        }
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "sms")), "RecordCount")), 1))) {
    await $.stmt((await $.call(C, "WriteLnString", ["<request>"])));
    await $.stmt((await $.call(C, "WriteLnString", ["<head>"])));
    await $.stmt((await $.call(C, "WriteString", ["<operation>"])));
    await $.stmt((await $.call(C, "WriteString", ["submit"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</operation>"])));
    await $.stmt((await $.call(C, "WriteString", ["<login>"])));
    await $.stmt((await $.call(C, "WriteString", ["login"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</login>"])));
    await $.stmt((await $.call(C, "WriteString", ["<password>"])));
    await $.stmt((await $.call(C, "WriteString", ["password"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</password>"])));
    await $.stmt((await $.call(C, "WriteString", ["<title>"])));
    await $.stmt((await $.call(C, "WriteString", ["title"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</title>"])));
    await $.stmt((await $.call(C, "WriteString", ["<scheduled>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.v(C, "sys")), "FieldByName", ["sysdate"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</scheduled>"])));
    await $.stmt((await $.call(C, "WriteString", ["<isbulk>"])));
    await $.stmt((await $.call(C, "WriteString", ["false"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</isbulk>"])));
    await $.stmt((await $.call(C, "WriteString", ["<controlid>"])));
    await $.stmt((await $.call(C, "WriteString", ["111"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</controlid>"])));
    await $.stmt((await $.call(C, "WriteString", ["</head>"])));
    await $.stmt((await $.call(C, "WriteLnString", ["<body>"])));
    await $.stmt((await $.call(C, "WriteString", ["<msisdn>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.v(C, "sms")), "FieldByName", ["PHONE_MOB"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</msisdn>"])));
    await $.stmt((await $.call(C, "WriteString", ["<message>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.v(C, "SMSMemo")), "text"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</message>"])));
    await $.stmt((await $.call(C, "WriteString", ["</body>"])));
  }
  await $.stmt((await $.call(C, "WriteString", ["</request>"])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSMSForm", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SMSMemo")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_sms")), "FieldByName", ["template"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSMSForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSMSForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Ods_sms")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSMSForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "s": '', "a": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSMSForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "showmessage", [(await $.mv((await $.mv((await $.v(C, "sms")), "SQL")), "Text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSMSForm", "createfiles", async function createfiles(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "formatteddatetime": '', "dir": ''};
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.v(C, "ODS_FilesPathDESCRIPTION")), "AsWideString"))]))))) {
    await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.v(C, "ODS_FilesPathDESCRIPTION")), "AsWideString"))])));
  }
  await $.stmt((await $.call(C, "DateTimeToString", [L0["formatteddatetime"], "yyyyddmm", (await $.mv((await $.v(C, "DTP1")), "Date"))])));
  L0["dir"] = $.add($.add((await $.mv((await $.v(C, "ODS_FilesPathDESCRIPTION")), "AsWideString")), L0["formatteddatetime"]), "\\");
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
    await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
  }
  await $.stmt((await $.call(C, "DateTimeToString", [L0["formatteddatetime"], "yyyyddmm", (await $.mv((await $.v(C, "DTP1")), "Date"))])));
  await $.set(C, "FilePAth", $.add(L0["dir"], ".txt"));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t10) => { await $.set(C, "f", $t10); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t11) => { await $.set(C, "f", $t11); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t12) => { await $.set(C, "f", $t12); })])));
  await $.stmt($.call(C, "CreateXmlFile", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSMSForm", "SMSMemoChange", async function SMSMemoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["x"] = 148;
  await $.mset((await $.v(C, "edit1")), "text", (await $.call(C, "inttostr", [$.sub(L0["x"], ((await $.call(C, "Length", [(await $.mv((await $.v(C, "SMSMemo")), "text"))]))))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSMSForm", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "a": '', "s": '', "port": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "SMSMemo")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Texsti boş göndərmək olmaz  !"])));
    return L0.result;
  }
  await $.stmt($.call(C, "createfiles", []));
  L0["port"] = (await $.v(C, "HTTPRIO1"));
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mcall(L0["port"], "send", [(await $.mv((await $.v(C, "Memo1")), "Text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSMSForm", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "OpenDialog1")), "Execute")))) {
    await $.mset((await $.v(C, "SMSForm")), "Caption", (await $.mv((await $.v(C, "OpenDialog1")), "FileName")));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SMSMemo")), "Lines")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenDialog1")), "FileName"))])));
    await $.mset((await $.v(C, "SMSMemo")), "SelStart", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

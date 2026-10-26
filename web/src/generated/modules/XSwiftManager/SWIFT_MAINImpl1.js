// Generated from SWIFT_MAINImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SWIFT_MAINImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "unit2", "SWIFT_MANAGER_TLB", "StdVcl", "Grids", "DBGrids", "Db", "OracleData", "SboapiDataModuleImpl", "ComCtrls", "ImgList", "ToolWin", "StdCtrls", "DBCtrls", "DBViewComboBox", "ActnList", "ExtCtrls", "Menus", "FileCtrl", "jpeg", "Azipsn", "Oracle", "XFSCtrls", "Buttons", "Unit16", "Checkacc", "Tranzit_account", "AzipsSett", "MTsett", "insett", "strutils", "ComObj", "ComServ", "OUT_MT", "Unit3", "cap", "Unit4", "createmess", "ceskin", "Unit19", "editmt103", "formmt103", "qrp1", "Unit7", "Unit8", "yoxp", "archivout", "ediTMT103Show", "SBTranslateProc", "UFX71"]);
  const C = [U];
  U.defClass("TSWIFT_MAIN", "TActiveForm", {"swimagelist1": {"name": "swImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "yeni": {"name": "Yeni", "type": "TAction"}, "createfayl": {"name": "CreateFayl", "type": "TAction"}, "delete": {"name": "Delete", "type": "TAction"}, "commit": {"name": "commit", "type": "TAction"}, "swpopupmenu1": {"name": "swPopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "addtrans": {"name": "AddTrans", "type": "TAction"}, "edit_out": {"name": "Edit_out", "type": "TAction"}, "refresh": {"name": "Refresh", "type": "TAction"}, "comboitemsins": {"name": "Comboitemsins", "type": "TAction"}, "addintrans": {"name": "AddInTrans", "type": "TAction"}, "geri": {"name": "geri", "type": "TAction"}, "out_delete": {"name": "out_delete", "type": "TAction"}, "createfile2": {"name": "createfile2", "type": "TAction"}, "addtrans2": {"name": "addtrans2", "type": "TAction"}, "editing": {"name": "editing", "type": "TAction"}, "cheskaccount": {"name": "cheskaccount", "type": "TAction"}, "undifinet_trans": {"name": "undifinet_trans", "type": "TAction"}, "konvert": {"name": "konvert", "type": "TAction"}, "konvert2": {"name": "konvert2", "type": "TAction"}, "konvert3": {"name": "konvert3", "type": "TAction"}, "commiting": {"name": "commiting", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "menuitem6": {"name": "MenuItem6", "type": "TMenuItem"}, "menuitem7": {"name": "MenuItem7", "type": "TMenuItem"}, "capet1": {"name": "Capet1", "type": "TMenuItem"}, "capet2": {"name": "CapEt2", "type": "TMenuItem"}, "addintransnew": {"name": "AddINTransNew", "type": "TAction"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "timer": {"name": "Timer", "type": "TTimer"}, "prior": {"name": "prior", "type": "TOracleDataSet"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "konver102": {"name": "Konver102", "type": "TAction"}, "konvertex": {"name": "Konvertex", "type": "TAction"}, "fayl102": {"name": "fayl102", "type": "TAction"}, "geriqaytar1": {"name": "Geriqaytar1", "type": "TMenuItem"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "user": {"name": "User", "type": "TOracleDataSet"}, "useruser": {"name": "UserUSER", "type": "TWideStringField"}, "rdk": {"name": "Rdk", "type": "TPopupMenu"}, "redaktet1": {"name": "Redaktet1", "type": "TMenuItem"}, "hesabiyoxla1": {"name": "Hesabiyoxla1", "type": "TMenuItem"}, "transender": {"name": "transender", "type": "TPopupMenu"}, "mliyyatgnnsndlringondrm1": {"name": "mliyyatGnnsndlringondrm1", "type": "TMenuItem"}, "oracledataset2time": {"name": "OracleDataSet2TIME", "type": "TWideStringField"}, "label1": {"name": "Label1", "type": "TLabel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "comit": {"name": "comit", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "print": {"name": "print", "type": "TToolButton"}, "cesking": {"name": "cesking", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "gridin": {"name": "GridIN", "type": "TDBGrid"}, "richedit2": {"name": "RichEdit2", "type": "TRichEdit"}, "memo3": {"name": "Memo3", "type": "TMemo"}, "sw_out_filelistbox": {"name": "sw_out_FileListBox", "type": "TFileListBox"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "memo4": {"name": "Memo4", "type": "TMemo"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "refreshbutton": {"name": "RefreshButton", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "createfile": {"name": "CreateFile", "type": "TToolButton"}, "openday": {"name": "openday", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "archive": {"name": "Archive", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "onebox": {"name": "onebox", "type": "TGroupBox"}, "grid_out": {"name": "grid_out", "type": "TDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "six1": {"name": "six1", "type": "TImage"}, "ac1": {"name": "ac1", "type": "TImage"}, "twobox": {"name": "twobox", "type": "TGroupBox"}, "gridout2": {"name": "GRIDOUT2", "type": "TDBGrid"}, "back": {"name": "back", "type": "TButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "six": {"name": "six", "type": "TImage"}, "ac": {"name": "ac", "type": "TImage"}, "threebox": {"name": "threebox", "type": "TGroupBox"}, "gridout3": {"name": "gridout3", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "six2": {"name": "six2", "type": "TImage"}, "ac2": {"name": "ac2", "type": "TImage"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "memo5": {"name": "Memo5", "type": "TMemo"}, "arxiv": {"name": "arxiv", "type": "TToolButton"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "pacs0008": {"name": "PACS0008", "type": "TAction"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "fevents": {"name": "FEvents", "type": "ISWIFT_MAINEvents"}}, {});
  U.init(async () => {
    U.const("Notcreate", 1);
    U.const("checking", 3);
    U.const("Created", 2);
    U.const("Commited", 5);
    U.const("Problemed", 8);
    U.const("Problemed2", 7);
    U.const("new", 10);
    U.const("edits", 11);
    U.var_("forma", 0, "integer");
    U.var_("a", '', "String");
    U.var_("b", '', "String");
    U.var_("OutFilePath", '', "String");
    U.var_("struktur", '', "String");
    U.var_("v_refrsh", '', "String");
    U.var_("datdate", 0, "Tdatetime");
  });
  U.method("TSWIFT_MAIN", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSWIFT_MAIN", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSWIFT_MAIN", "fayl102Execute", async function fayl102Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sum": 0, "kesr": 0, "i": 0, "testiq": 0, "prior": 0, "output": null, "filename": '', "swmessage": '', "amount": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "info": '', "k50": '', "k59": '', "m70": '', "m32": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "v_dataset1": null, "nameaa": '', "k": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dataset1"] = (await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet"));
  {
    const $t1 = L0["v_dataset1"];
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t1], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["status"])), "asinteger")), 1)))) {
      await $.wset([$t1], "edit_ref", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "asstring")), { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true });
    }
    { const $t2 = ($.sub(5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))], C))));
      await $.wset([$t1], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        await $.wset([$t1], "edit_ref", $.add("0", (await $.wv([$t1], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true });
        await $.tick();
      }
    }
    if ($.truthy($.not((await $.wcall([$t1], "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))], C))))) {
      await $.stmt((await $.wcall([$t1], "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))], C)));
    }
    await $.wset([$t1], "dir", $.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring")), "\\"), { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true });
    if ($.truthy($.not((await $.wcall([$t1], "DirectoryExists", [(await $.wv([$t1], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false))], C))))) {
      await $.stmt((await $.wcall([$t1], "MkDir", [(await $.wv([$t1], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false))], C)));
    }
    await $.wset([$t1], "FileName", $.add($.add($.add((await $.wv([$t1], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false)), "sw"), (await $.wv([$t1], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), ".rje"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
    await $.wset([$t1], "nameaa", $.add($.add("sw", (await $.wv([$t1], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), ".rje"), { get: async () => L0["nameaa"], set: async (v) => { L0["nameaa"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1], "AssignFile", [$.ref(async () => (await $.wv([$t1], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t4) => { await $.wset([$t1], "output", $t4, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); }), (await $.wv([$t1], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "Rewrite", [$.ref(async () => (await $.wv([$t1], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t1], "output", $t5, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); })], C)));
    await $.mset((await $.wv([$t1], "memo5", C, false)), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("{1:F01", (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "FieldByName", ["SENDERBIC"])), "asstring")), 0, 8], C))), "AXXX"), "00010"), (await $.wv([$t1], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), "}{2:I"), (await $.wcall([$t1], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "FieldByName", ["MESSAGETYPE"])), "asstring")), 3, 3], C))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "N}{3:{113:0050}{"), "108:"), (await $.wv([$t1], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), "}}{4:"), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["MF20"])), "AsString"))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["MF20_REFERENCE"])), "AsString"))), "\r\n"), ":23:"), "CREDIT"), "\r\n"), ":71:"), "OUR"), "\r\n"));
    { const $t6 = (await $.mv((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "RecordCount"));
      await $.wset([$t1], "k", 1, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t1], "k", $.succ((await $.wv([$t1], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t1], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))) <= $.ord($t6))) break;
        await $.wset([$t1], "Swmessage", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["M21"])), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
        await $.wset([$t1], "Swmessage", $.add((await $.wv([$t1], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["MF21"])), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
        await $.wset([$t1], "amount", $.add($.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["mf32b"])), "AsString")), "AZN"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["mf32a_amount"])), "AsString"))), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
        await $.wset([$t1], "k50", $.add("50k", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["mf50_name$adress"])), "AsString"))), { get: async () => L0["k50"], set: async (v) => { L0["k50"] = v; }, local: true });
        await $.wset([$t1], "k59", $.add(":59:", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["mf59_name$adress"])), "AsString"))), { get: async () => L0["k59"], set: async (v) => { L0["k59"] = v; }, local: true });
        await $.wset([$t1], "m70", $.add(":70:", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["mf70"])), "AsString"))), { get: async () => L0["m70"], set: async (v) => { L0["m70"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "memo5", C, false)), "Lines")), "Add", [(await $.wv([$t1], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "memo5", C, false)), "Lines")), "Add", [(await $.wv([$t1], "amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "memo5", C, false)), "Lines")), "Add", [(await $.wv([$t1], "k50", { get: async () => L0["k50"], set: async (v) => { L0["k50"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "memo5", C, false)), "Lines")), "Add", [(await $.wv([$t1], "k59", { get: async () => L0["k59"], set: async (v) => { L0["k59"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "memo5", C, false)), "Lines")), "Add", [(await $.wv([$t1], "m70", { get: async () => L0["m70"], set: async (v) => { L0["m70"] = v; }, local: true }, false))])));
        await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "Next", []);
        await $.tick();
      }
    }
    await $.wset([$t1], "m32", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["M32A"])), "AsString")), { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true });
    await $.wset([$t1], "m32", $.add((await $.wv([$t1], "m32", { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true }, false)), (await $.wcall([$t1], "FormatDateTime", ["yymmdd", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["MF32A_DATE"])), "AsDateTime"))], C))), { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true });
    await $.wset([$t1], "m32", $.add((await $.wv([$t1], "m32", { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102data")), "fieldbyname", ["MF32A_CURR"])), "AsString"))), { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true });
    await $.wset([$t1], "m32", $.add((await $.wv([$t1], "m32", { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "SWDataModule", C, false)), "MT102sum")), "fieldbyname", ["SUM(MF32A_AMOUNT)"])), "AsString"))), { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t1], "kesr", { get: async () => L0["kesr"], set: async (v) => { L0["kesr"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t1], "m32", $.add((await $.wv([$t1], "m32", { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true }, false)), ","), { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true });
    } else {
      await $.wset([$t1], "m32", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), ".", ",", [(await $.wv([$t1], "rfReplaceAll", C, false)), (await $.wv([$t1], "rfIgnoreCase", C, false))]], C)), { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true });
    }
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "memo5", C, false)), "Lines")), "Add", [$.add($.add((await $.wv([$t1], "m32", { get: async () => L0["m32"], set: async (v) => { L0["m32"] = v; }, local: true }, false)), "\r\n"), "-}")])));
    await $.stmt((await $.wcall([$t1], "writeln", [(await $.wv([$t1], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1], "Memo5", C, false)), "text"))], C)));
    await $.stmt((await $.wcall([$t1], "CloseFile", [$.ref(async () => (await $.wv([$t1], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t8) => { await $.wset([$t1], "output", $t8, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); })], C)));
  }
  L0["info"] = "Fayl yaradılıb!";
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["sw_out_CreateFile", [(await $.mv((await $.mcall(L0["v_dataset1"], "FieldByName", ["id"])), "asinteger")), L0["info"], 1]])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSWIFT_MAIN", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSWIFT_MAIN", "Geriqaytar1Click", async function Geriqaytar1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_BACK"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "callProcedure", ["del_std_transaction", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["tr_id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "RefreshButton")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSWIFT_MAIN", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSWIFT_MAIN", "KonvertexExecute", async function KonvertexExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valu": 0, "i": 0, "j": 0, "status": 0, "shifr": 0, "k": 0, "m": 0, "struktur": 0, "t": 0, "num1": 0, "swstring": '', "acount": '', "referens": '', "valyuta": '', "describ": '', "describ2": '', "mt": '', "all": '', "bic": '', "dat": '', "tax": '', "kod": '', "kor": '', "bank_voin": '', "v_out1": '', "v_out2": '', "v_out3": '', "v_out4": '', "dirold": '', "dirnew": '', "dir": '', "country": '', "voin": '', "sendern": '', "receiver": '', "descript": '', "fl": null, "strtempl": '', "strbuff": '', "pos1": 0, "kk": 0, "row": 0, "arr": []};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "PACS0008Execute", async function PACS0008Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sum": 0, "kesr": 0, "i": 0, "ij": 0, "testiq": 0, "prior": 0, "output": null, "filename": '', "swmessage": '', "swmessage1": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "info": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "v_dataset1": null, "nameaa": '', "k": 0, "fourthline": '', "firstline": '', "fifthline": '', "thirdline": '', "secondline": '', "sendebankcode": '', "senderbankinn": '', "senderinn": '', "recname": '', "sendername": '', "recinn": '', "senderbankbankcode": '', "recbankcode": '', "recbankinn": '', "recbankbankcode": '', "inputstring": '', "recinfo": '', "recinfo2": '', "lines": null};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "Gridout3")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Gridout3")), "SetFocus", []);
  }
  {
    const $t9 = (await $.v(C, "Gridout3"));
    const $t10 = (await $.wv([$t9], "SelectedRows", C, false));
    const $t11 = (await $.mv((await $.wv([$t9, $t10], "DataSource", C, false)), "DataSet"));
    const $t12 = (await $.wv([$t9, $t10, $t11], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t9, $t10, $t11, $t12], "Count", C, false)), 0))) {
        await $.wset([$t9, $t10, $t11, $t12], "CurrentRowSelected", (await $.wv([$t9, $t10, $t11, $t12], "True", C, false)), C);
      }
      { const $t13 = $.sub((await $.wv([$t9, $t10, $t11, $t12], "Count", C, false)), 1);
        await $.wset([$t9, $t10, $t11, $t12], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t14 = true;
        for (;;) {
          if (!$t14) { await $.wset([$t9, $t10, $t11, $t12], "Index", $.succ((await $.wv([$t9, $t10, $t11, $t12], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t14 = false;
          if (!($.ord((await $.wv([$t9, $t10, $t11, $t12], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t13))) break;
          await $.stmt((await $.wcall([$t9, $t10, $t11, $t12], "GotoBookmark", [(await $.wcall([$t9, $t10, $t11, $t12], "Pointer", [(await $.idx((await $.wv([$t9, $t10, $t11, $t12], "Items", C, false)), [(await $.wv([$t9, $t10, $t11, $t12], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t9, $t10, $t11, $t12], "TransactionID", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t9, $t10, $t11, $t12], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t15 = (await $.wcall([$t9, $t10, $t11, $t12], "MessageDlg", [(await $.wcall([$t9, $t10, $t11, $t12], "Format", ["Fayl #%d yaradılsın?", [(await $.wv([$t9, $t10, $t11, $t12], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t9, $t10, $t11, $t12], "mtConfirmation", C, false)), [(await $.wv([$t9, $t10, $t11, $t12], "mbYes", C, false)), (await $.wv([$t9, $t10, $t11, $t12], "mbNo", C, false)), (await $.wv([$t9, $t10, $t11, $t12], "mbCancel", C, false)), (await $.wv([$t9, $t10, $t11, $t12], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t15, (await $.wv([$t9, $t10, $t11, $t12], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t15, (await $.wv([$t9, $t10, $t11, $t12], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t15, (await $.wv([$t9, $t10, $t11, $t12], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t9, $t10, $t11, $t12], "MessageDlg", [(await $.wcall([$t9, $t10, $t11, $t12], "Format", ["%d  sayda köçürməyə fayl yaradılsın ?", [$.sub((await $.wv([$t9, $t10, $t11, $t12], "Count", C, false)), (await $.wv([$t9, $t10, $t11, $t12], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t9, $t10, $t11, $t12], "mtConfirmation", C, false)), [(await $.wv([$t9, $t10, $t11, $t12], "mbYes", C, false)), (await $.wv([$t9, $t10, $t11, $t12], "mbCancel", C, false))], 0], C)), (await $.wv([$t9, $t10, $t11, $t12], "mrYes", C, false))))) {
                  await $.wset([$t9, $t10, $t11, $t12], "WaitNextConfirm", (await $.wv([$t9, $t10, $t11, $t12], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t9, $t10, $t11, $t12], "Application", C, false)), "ProcessMessages", []);
          await $.wset([$t9, $t10, $t11, $t12], "testiq", (await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SwDataModule", C, false)), "sw_in_insert")), "CallIntegerFunction", ["sw_out_fileafter", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "GRIDOUT3", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "GRIDOUT2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["MF32A_DATE"])), "asdatetime"))]])), { get: async () => L0["testiq"], set: async (v) => { L0["testiq"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t9, $t10, $t11, $t12], "testiq", { get: async () => L0["testiq"], set: async (v) => { L0["testiq"] = v; }, local: true }, false)), 6))) {
            await $.wset([$t9, $t10, $t11, $t12], "v_dataset1", (await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "GRIDOUT3", C, false)), "DataSource")), "DataSet")), { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true });
            {
              const $t16 = (await $.wv([$t9, $t10, $t11, $t12], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false));
              if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["status"])), "asinteger")), 1)))) {
                await $.wset([$t9, $t10, $t11, $t12, $t16], "edit_ref", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["id"], C)), "asstring")), { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true });
                { const $t17 = ($.sub(5, (await $.wcall([$t9, $t10, $t11, $t12, $t16], "length", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))], C))));
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
                  let $t18 = true;
                  for (;;) {
                    if (!$t18) { await $.wset([$t9, $t10, $t11, $t12, $t16], "i", $.succ((await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                    $t18 = false;
                    if (!($.ord((await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t17))) break;
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "edit_ref", $.add("0", (await $.wv([$t9, $t10, $t11, $t12, $t16], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true });
                    await $.tick();
                  }
                }
                await $.wset([$t9, $t10, $t11, $t12, $t16], "valu", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF32A_CURR"], C)), "asstring")), { get: async () => L0["valu"], set: async (v) => { L0["valu"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t9, $t10, $t11, $t12, $t16], "valu", { get: async () => L0["valu"], set: async (v) => { L0["valu"] = v; }, local: true }, false)), "AZN"))) {
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "valu", "AZM", { get: async () => L0["valu"], set: async (v) => { L0["valu"] = v; }, local: true });
                }
                if ($.truthy($.not((await $.wcall([$t9, $t10, $t11, $t12, $t16], "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))], C))))) {
                  await $.stmt((await $.wcall([$t9, $t10, $t11, $t12, $t16], "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))], C)));
                }
                await $.wset([$t9, $t10, $t11, $t12, $t16], "dir", $.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring")), "\\"), { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true });
                if ($.truthy($.not((await $.wcall([$t9, $t10, $t11, $t12, $t16], "DirectoryExists", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false))], C))))) {
                  await $.stmt((await $.wcall([$t9, $t10, $t11, $t12, $t16], "MkDir", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false))], C)));
                }
                await $.wset([$t9, $t10, $t11, $t12, $t16], "FileName", $.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false)), "pacs"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), ".xml"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
                await $.wset([$t9, $t10, $t11, $t12, $t16], "nameaa", $.add($.add("pacs", (await $.wv([$t9, $t10, $t11, $t12, $t16], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), ".xml"), { get: async () => L0["nameaa"], set: async (v) => { L0["nameaa"] = v; }, local: true });
                await $.stmt((await $.wcall([$t9, $t10, $t11, $t12, $t16], "AssignFile", [$.ref(async () => (await $.wv([$t9, $t10, $t11, $t12, $t16], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t9, $t10, $t11, $t12, $t16], "output", $t19, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); }), (await $.wv([$t9, $t10, $t11, $t12, $t16], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))], C)));
                await $.stmt((await $.wcall([$t9, $t10, $t11, $t12, $t16], "Rewrite", [$.ref(async () => (await $.wv([$t9, $t10, $t11, $t12, $t16], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t20) => { await $.wset([$t9, $t10, $t11, $t12, $t16], "output", $t20, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); })], C)));
                if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["messagetype"])), "AsString")), "MT298")))) {
                  if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["mf12"])), "AsString")), "200"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\"> "), "\r\n"), "<Body> "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">"), "\r\n"), "<Fr>"), "\r\n"), "<FIId>"), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "</FinInstnId>    "), "\r\n"), "</FIId>  "), "\r\n"), "</Fr>"), "\r\n"), "<To> "), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</FIId>"), "\r\n"), "</To> "), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>   "), "\r\n"), "<MsgDefIdr>camt.056.001.10</MsgDefIdr> "), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>     "), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt> "), "\r\n"), "</AppHdr>   "), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.056.001.10\">"), "\r\n"), "<FIToFIPmtCxlReq>"), "\r\n"), "<Assgnmt>"), "\r\n"), "<Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</Id> "), "\r\n"), "<Assgnr> "), "\r\n"), "<Agt>"), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>"), "\r\n"), " </FinInstnId>"), "\r\n"), "</Agt>"), "\r\n"), "</Assgnr>"), "\r\n"), "<Assgne>"), "\r\n"), "<Agt>"), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI> "), "\r\n"), "</FinInstnId>"), "\r\n"), "</Agt>"), "\r\n"), "</Assgne> "), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00+"), "</CreDtTm> "), "\r\n"), "</Assgnmt> "), "\r\n"), "<Undrlyg>"), "\r\n"), "<TxInf>"), "\r\n"), "<OrgnlGrpInf>"), "\r\n"), "<OrgnlMsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["l02"], C)), "AsString"))), "</OrgnlMsgId>"), "\r\n"), "<OrgnlMsgNmId>NOTPROVIDED</OrgnlMsgNmId> "), "\r\n"), "</OrgnlGrpInf> "), "\r\n"), "<OrgnlIntrBkSttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "</OrgnlIntrBkSttlmDt> "), "\r\n"), "<Assgnr>  "), "\r\n"), "<FinInstnId>  "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>"), "\r\n"), "</Assgnr>  "), "\r\n"), "</TxInf>  "), "\r\n"), "</Undrlyg>  "), "\r\n"), "</FIToFIPmtCxlReq> "), "\r\n"), "</Document> "), "\r\n"), "</Body> "), "\r\n"), "</DataPDU>  "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                  if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["mf12"])), "AsString")), "800"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\"> "), "\r\n"), "<Body> "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">"), "\r\n"), "<Fr>"), "\r\n"), "<FIId>"), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "</FinInstnId>    "), "\r\n"), "</FIId>  "), "\r\n"), "</Fr>"), "\r\n"), "<To> "), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</FIId>"), "\r\n"), "</To> "), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>   "), "\r\n"), "<MsgDefIdr>pacs.028.001.05</MsgDefIdr> "), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>     "), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt> "), "\r\n"), "</AppHdr>   "), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:pacs.028.001.05\">  "), "\r\n"), "<FIToFIPmtStsReq> "), "\r\n"), "<GrpHdr> "), "\r\n"), "<MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId>"), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>"), "\r\n"), "</GrpHdr> "), "\r\n"), " <OrgnlGrpInf>  "), "\r\n"), "<OrgnlMsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["l02"], C)), "asstring"))), "</OrgnlMsgId>  "), "\r\n"), "<OrgnlMsgNmId>NOTPROVIDED</OrgnlMsgNmId> "), "\r\n"), "</OrgnlGrpInf> "), "\r\n"), " <TxInf>  "), "\r\n"), "<InstgAgt> "), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>   "), "\r\n"), "</InstgAgt>  "), "\r\n"), "<OrgnlTxRef> "), "\r\n"), "<IntrBkSttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "</IntrBkSttlmDt>"), "\r\n"), "</OrgnlTxRef>    "), "\r\n"), "</TxInf>    "), "\r\n"), "</FIToFIPmtStsReq>   "), "\r\n"), "</Document>  "), "\r\n"), "</Body>  "), "\r\n"), "</DataPDU>  "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                  if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["mf12"])), "AsString")), "202"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\"> "), "\r\n"), "<Body> "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">"), "\r\n"), "<Fr>"), "\r\n"), "<FIId>"), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "</FinInstnId>    "), "\r\n"), "</FIId>  "), "\r\n"), "</Fr>"), "\r\n"), "<To> "), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</FIId>"), "\r\n"), "</To> "), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>   "), "\r\n"), "<MsgDefIdr>camt.087.001.08</MsgDefIdr> "), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>     "), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt> "), "\r\n"), "</AppHdr>   "), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.087.001.08\">"), "\r\n"), "<ReqToModfyPmt>  "), "\r\n"), "  <Assgnmt> "), "\r\n"), "  <Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</Id>   "), "\r\n"), "  <Assgnr>  "), "\r\n"), "  <Agt>    "), "\r\n"), "  <FinInstnId>    "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</Agt> "), "\r\n"), "</Assgnr>  "), "\r\n"), "<Assgne> "), "\r\n"), "<Agt>  "), "\r\n"), "<FinInstnId>  "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI>  "), "\r\n"), "</FinInstnId> "), "\r\n"), "</Agt>  "), "\r\n"), "</Assgne>  "), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt> "), "\r\n"), "</Assgnmt>   "), "\r\n"), "<Undrlyg>"), "\r\n"), "<IntrBk>"), "\r\n"), "<OrgnlGrpInf>"), "\r\n"), "<OrgnlMsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["l02"], C)), "AsString"))), "</OrgnlMsgId> "), "\r\n"), "<OrgnlMsgNmId>NOTPROVIDED</OrgnlMsgNmId>"), "\r\n"), "</OrgnlGrpInf>"), "\r\n"), "<OrgnlIntrBkSttlmAmt Ccy=\"AZN\">0.</OrgnlIntrBkSttlmAmt> "), "\r\n"), "<OrgnlIntrBkSttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["CDAT"], C)), "AsDateTime"))], C))), "</OrgnlIntrBkSttlmDt> "), "\r\n"), "</IntrBk> "), "\r\n"), "</Undrlyg> "), "\r\n"), "<Mod>  "), "\r\n"), "<PmtTpInf><SvcLvl><Prtry>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["priority"], C)), "asstring"))), "</Prtry></SvcLvl></PmtTpInf>"), "\r\n"), "</Mod>    "), "\r\n"), "<InstrForAssgne>"), "\r\n"), "<InstrInf>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</InstrInf> "), "\r\n"), "</InstrForAssgne> "), "\r\n"), "</ReqToModfyPmt>"), "\r\n"), "</Document>"), "\r\n"), "</Body>  "), "\r\n"), "</DataPDU>  "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                }
                if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["messagetype"])), "AsString")), "MT205")))) {
                  if ($.truthy($.eq((await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["codex"], C)), "AsString")), "99"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\"> "), "\r\n"), "<Body> "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">"), "\r\n"), "<Fr>"), "\r\n"), "<FIId>"), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "</FinInstnId>    "), "\r\n"), "</FIId>  "), "\r\n"), "</Fr>"), "\r\n"), "<To> "), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</FIId>"), "\r\n"), "</To> "), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>   "), "\r\n"), "<MsgDefIdr>camt.050.001.06</MsgDefIdr> "), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>     "), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt> "), "\r\n"), "<Prty>0050</Prty> "), "\r\n"), "</AppHdr>   "), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.050.001.06\">"), "\r\n"), "<LqdtyCdtTrf>"), "\r\n"), "<MsgHdr> "), "\r\n"), "<MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId> "), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>  "), "\r\n"), "</MsgHdr> "), "\r\n"), "<LqdtyCdtTrf>"), "\r\n"), "<LqdtyTrfId>"), "\r\n"), "<EndToEndId>NOTPROVIDED</EndToEndId> "), "\r\n"), "<TxId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</TxId> "), "\r\n"), "</LqdtyTrfId>  "), "\r\n"), "<Cdtr> "), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf52_name$adress"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                    try {
                      await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "secondline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [1])), { get: async () => L0["secondline"], set: async (v) => { L0["secondline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "firstline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [0])), { get: async () => L0["firstline"], set: async (v) => { L0["firstline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "sendebankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "firstline", { get: async () => L0["firstline"], set: async (v) => { L0["firstline"] = v; }, local: true }, false)), 2, 8], C)), { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "fifthline", { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "sendername", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "secondline", { get: async () => L0["secondline"], set: async (v) => { L0["secondline"] = v; }, local: true }, false)), 1, 35], C)), { get: async () => L0["sendername"], set: async (v) => { L0["sendername"] = v; }, local: true });
                    } finally {
                      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                    }
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<Nm>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "sendername", { get: async () => L0["sendername"], set: async (v) => { L0["sendername"] = v; }, local: true }, false))), "</Nm>"), "\r\n"), "<Othr>"), "\r\n"), "<Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf50_account"], C)), "asstring"))), "</Id> "), "\r\n"), "<SchmeNm><Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false))), "</Prtry></SchmeNm> "), "\r\n"), "</Othr>"), "\r\n"), "</FinInstnId>"), "\r\n"), "</Cdtr> "), "\r\n"), "<CdtrAcct> "), "\r\n"), "  <Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false))), "</IBAN></Id> "), "\r\n"), "  <Tp><Prtry>BCSL</Prtry></Tp>"), "\r\n"), "</CdtrAcct>"), "\r\n"), "<TrfdAmt>"), "\r\n"), "<AmtWthCcy Ccy=\""), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF32A_CURR"], C)), "asstring"))), "\">"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "ReplaceStr", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF32A_AMOUNT"], C)), "asstring")), ",", "."], C))), "</AmtWthCcy>"), "\r\n"), "</TrfdAmt>"), "\r\n"), "<Dbtr>"), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["receiverbic"], C)), "AsString"))), "</BICFI> "), "\r\n"), "<Nm>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["rname"], C)), "AsString"))), "</Nm> "), "\r\n"), "<Othr> "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf58_name$location"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                    try {
                      await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "secondline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [1])), { get: async () => L0["secondline"], set: async (v) => { L0["secondline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "firstline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [0])), { get: async () => L0["firstline"], set: async (v) => { L0["firstline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "firstline", { get: async () => L0["firstline"], set: async (v) => { L0["firstline"] = v; }, local: true }, false)), 2, 8], C)), { get: async () => L0["recbankcode"], set: async (v) => { L0["recbankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recname", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["recname"], set: async (v) => { L0["recname"] = v; }, local: true });
                    } finally {
                      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                    }
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankcode", { get: async () => L0["recbankcode"], set: async (v) => { L0["recbankcode"] = v; }, local: true }, false))), "</Id> "), "\r\n"), "<SchmeNm><Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankinn", { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true }, false))), "</Prtry></SchmeNm> "), "\r\n"), "</Othr> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</Dbtr> "), "\r\n"), "<DbtrAcct>"), "\r\n"), "<Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true }, false))), "</IBAN></Id>"), "\r\n"), "</DbtrAcct>"), "\r\n"), "<SttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_DATE"], C)), "AsDateTime"))], C))), "</SttlmDt>"), "\r\n"), "</LqdtyCdtTrf> "), "\r\n"), "</LqdtyCdtTrf>"), "\r\n"), "</Document>"), "\r\n"), "</Body> "), "\r\n"), "</DataPDU>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  } else {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\"> "), "\r\n"), "<Body> "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">"), "\r\n"), "<Fr>"), "\r\n"), "<FIId>"), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "</FinInstnId>    "), "\r\n"), "</FIId>  "), "\r\n"), "</Fr>"), "\r\n"), "<To> "), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</FIId>"), "\r\n"), "</To> "), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>   "), "\r\n"), "<MsgDefIdr>pacs.009.001.10</MsgDefIdr> "), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>     "), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt> "), "\r\n"), "<Prty>0050</Prty> "), "\r\n"), "</AppHdr>   "), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:pacs.009.001.10\">"), "\r\n"), "<FICdtTrf>"), "\r\n"), "<GrpHdr>"), "\r\n"), "<MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId>"), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm> "), "\r\n"), "<BtchBookg>false</BtchBookg>"), "\r\n"), "<NbOfTxs>1</NbOfTxs> "), "\r\n"), "<SttlmInf>"), "\r\n"), "\t<SttlmMtd>CLRG</SttlmMtd>"), "\r\n"), "</SttlmInf> "), "\r\n"), "</GrpHdr>"), "\r\n"), "\t<CdtTrfTxInf> "), "\r\n"), "<PmtId>"), "\r\n"), "<EndToEndId>NOTPROVIDED</EndToEndId>"), "\r\n"), "<TxId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</TxId> "), "\r\n"), "<UETR>44bf930a-f18c-4031-8b13-42d225940f75</UETR>  "), "\r\n"), "</PmtId> "), "\r\n"), "<PmtTpInf>"), "\r\n"), "<ClrChanl>RTGS</ClrChanl>"), "\r\n"), "<LclInstrm>"), "\r\n"), "<Prtry>RTGS-TPCT</Prtry>"), "\r\n"), "</LclInstrm> "), "\r\n"), "</PmtTpInf>"), "\r\n"), "<IntrBkSttlmAmt Ccy=\""), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_CURR"], C)), "AsString"))), "\">"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "StringReplace", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_AMOUNT"], C)), "AsString")), ",", ".", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "rfReplaceAll", C, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "rfIgnoreCase", C, false))]], C))), "</IntrBkSttlmAmt> "), "\r\n"), "<IntrBkSttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "</IntrBkSttlmDt>"), "\r\n"), "<InstgAgt>"), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf52_name$adress"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                    try {
                      await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "secondline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [1])), { get: async () => L0["secondline"], set: async (v) => { L0["secondline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "firstline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [0])), { get: async () => L0["firstline"], set: async (v) => { L0["firstline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "sendebankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "firstline", { get: async () => L0["firstline"], set: async (v) => { L0["firstline"] = v; }, local: true }, false)), 2, 8], C)), { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "sendername", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "secondline", { get: async () => L0["secondline"], set: async (v) => { L0["secondline"] = v; }, local: true }, false)), 1, 35], C)), { get: async () => L0["sendername"], set: async (v) => { L0["sendername"] = v; }, local: true });
                    } finally {
                      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                    }
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf58_name$location"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                    try {
                      await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["recinn"], set: async (v) => { L0["recinn"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [0])), 2, 7], C)), { get: async () => L0["recbankcode"], set: async (v) => { L0["recbankcode"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 0, 10], C)), { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true });
                    } finally {
                      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                    }
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<Othr>"), "\r\n"), "<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true }, false))), "</Id> "), "\r\n"), "<SchmeNm><Prtry>IBAN</Prtry></SchmeNm> "), "\r\n"), "</Othr>"), "\r\n"), "</FinInstnId>"), "\r\n"), "</InstgAgt>"), "\r\n"), "<InstdAgt> "), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["RECEIVERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>"), "\r\n"), "<Othr>"), "\r\n"), "<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true }, false))), "</Id> "), "\r\n"), "<SchmeNm> "), "\r\n"), "<Prtry>IBAN</Prtry>"), "\r\n"), "</SchmeNm>"), "\r\n"), "</Othr> "), "\r\n"), "\t</FinInstnId>  "), "\r\n"), "</InstdAgt> "), "\r\n"), "<Dbtr>"), "\r\n"), "<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["senderbic"], C)), "asstring"))), "</BICFI> "), "\r\n"), "\t<Nm>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "sendername", { get: async () => L0["sendername"], set: async (v) => { L0["sendername"] = v; }, local: true }, false))), "</Nm> "), "\r\n"), "\t<Othr> "), "\r\n"), "\t<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "sendebankcode", { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true }, false))), "</Id>"), "\r\n"), "\t<SchmeNm>  "), "\r\n"), "\t\t<Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankinn", { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true }, false))), "</Prtry>  "), "\r\n"), "\t</SchmeNm>"), "\r\n"), "</Othr> "), "\r\n"), "\t</FinInstnId>"), "\r\n"), "</Dbtr>"), "\r\n"), "<DbtrAcct>"), "\r\n"), "<Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true }, false))), "</IBAN></Id>"), "\r\n"), "</DbtrAcct>"), "\r\n"), "\t<Cdtr>"), "\r\n"), "\t<FinInstnId>"), "\r\n"), "<BICFI>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["receiverbic"], C)), "asstring"))), "</BICFI>"), "\r\n"), "<Nm>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["rname"], C)), "AsString"))), "</Nm>"), "\r\n"), "<Othr>"), "\r\n"), "<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankcode", { get: async () => L0["recbankcode"], set: async (v) => { L0["recbankcode"] = v; }, local: true }, false))), "</Id>"), "\r\n"), "<SchmeNm>"), "\r\n"), "<Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankinn", { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true }, false))), "</Prtry>"), "\r\n"), "</SchmeNm> "), "\r\n"), "</Othr> "), "\r\n"), "</FinInstnId> "), "\r\n"), "</Cdtr>  "), "\r\n"), "\t<CdtrAcct> "), "\r\n"), "<Id>  "), "\r\n"), "<IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true }, false))), "</IBAN> "), "\r\n"), "</Id>  "), "\r\n"), "</CdtrAcct>  "), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    if ($.truthy($.ne((await $.wcall([$t9, $t10, $t11, $t12, $t16], "trim", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF72"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF72"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                      try {
                        await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                        { const $t21 = $.sub((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Count")), 1);
                          await $.wset([$t9, $t10, $t11, $t12, $t16], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
                          let $t22 = true;
                          for (;;) {
                            if (!$t22) { await $.wset([$t9, $t10, $t11, $t12, $t16], "I", $.succ((await $.wv([$t9, $t10, $t11, $t12, $t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                            $t22 = false;
                            if (!($.ord((await $.wv([$t9, $t10, $t11, $t12, $t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t21))) break;
                            await $.wset([$t9, $t10, $t11, $t12, $t16], "recinfo2", $.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo2", { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true }, false)), "<InstrForCdtrAgt>"), "\r\n"), "<InstrInf>"), (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "</InstrInf>"), "\r\n"), "</InstrForCdtrAgt>"), "\r\n"), { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true });
                            await $.tick();
                          }
                        }
                      } finally {
                        await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                      }
                    }
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo2", { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true }, false))), "<Purp>"), "\r\n"), "\t<Prtry>001</Prtry> "), "\r\n"), "</Purp>     "), "\r\n"), "</CdtTrfTxInf> "), "\r\n"), "</FICdtTrf> "), "\r\n"), "</Document>"), "\r\n"), "</Body>"), "\r\n"), "</DataPDU>"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                }
                if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["messagetype"])), "AsString")), "MT999")))) {
                  if ($.truthy($.eq((await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MONITORING"], C)), "AsString")), "text"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\">  "), "\r\n"), "<Body>   "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">   "), "\r\n"), "<Fr>"), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>  "), "\r\n"), "</FIId> "), "\r\n"), "</Fr>  "), "\r\n"), "<To>     "), "\r\n"), "<FIId>   "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI>  "), "\r\n"), "</FinInstnId>   "), "\r\n"), "</FIId>    "), "\r\n"), "</To>"), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>"), "\r\n"), "<MsgDefIdr>camt.998.001.03</MsgDefIdr>"), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>"), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt>"), "\r\n"), "<Prty>0020</Prty>"), "\r\n"), "</AppHdr>"), "\r\n"), "<Document xmlns=\"urn:swift:xsd:camt.998.001.03\">"), "\r\n"), "<CshMgmtPrtryMsg>"), "<MsgHdr>"), "\r\n"), "<MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId> "), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>"), "\r\n"), "</MsgHdr>"), "\r\n"), "<PrtryData>"), "\r\n"), "<Tp>cma.textMessage.001.03</Tp>"), "\r\n"), "<Data>"), "\r\n"), "<Document xmlns=\"urn:cma:xsd:cma.textMessage.001.03\">"), "\r\n"), "<TxtMsg>"), "\r\n"), "<Rcvr>"), "\r\n"), "<PrtcId>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["receiverbic"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</PrtcId>"), "\r\n"), "</Rcvr>"), "\r\n"), "<Sndr>"), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</Sndr>"), "\r\n"), "<Impt>INFO</Impt>"), "\r\n"), "<Txt>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF79"], C)), "asstring"))), "</Txt> "), "\r\n"), "</TxtMsg>"), "\r\n"), "</Document>"), "\r\n"), "</Data>"), "\r\n"), "</PrtryData>"), "\r\n"), "</CshMgmtPrtryMsg>"), "\r\n"), "</Document>"), "\r\n"), "</Body>"), "\r\n"), "</DataPDU>"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                  if ($.truthy($.eq((await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MONITORING"], C)), "AsString")), "days"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\">  "), "\r\n"), "<Body>   "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">   "), "\r\n"), "<Fr>"), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>  "), "\r\n"), "</FIId> "), "\r\n"), "</Fr>  "), "\r\n"), "<To>     "), "\r\n"), "<FIId>   "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI>  "), "\r\n"), "</FinInstnId>   "), "\r\n"), "</FIId>    "), "\r\n"), "</To>"), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>"), "\r\n"), "<MsgDefIdr>camt.018.001.05</MsgDefIdr>"), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>"), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt>"), "\r\n"), "</AppHdr>"), "\r\n"), " <Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:camt.018.001.05\">"), "\r\n"), " <GetBizDayInf>"), "\r\n"), " <MsgHdr>"), "\r\n"), " <MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId>"), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>"), "\r\n"), "</MsgHdr>"), "\r\n"), "<BizDayInfQryDef>"), "\r\n"), "<Crit> "), "\r\n"), " <NewCrit>"), "\r\n"), "<SchCrit>"), "\r\n"), "<EvtTp>"), "\r\n"), "<Prtry>"), "\r\n"), "<Id>GETBUSINESSDAYPERIOD</Id>"), "\r\n"), "</Prtry>"), "\r\n"), "</EvtTp> "), "\r\n"), "</SchCrit>"), "\r\n"), "</NewCrit> "), "\r\n"), "</Crit>  "), "\r\n"), "</BizDayInfQryDef> "), "\r\n"), "</GetBizDayInf>"), "\r\n"), "</Document>"), "\r\n"), "</Body>   "), "\r\n"), "</DataPDU>  "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                  if ($.truthy($.eq((await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MONITORING"], C)), "AsString")), "pass"))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\">  "), "\r\n"), "<Body>   "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">   "), "\r\n"), "<Fr>"), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>  "), "\r\n"), "</FIId> "), "\r\n"), "</Fr>  "), "\r\n"), "<To>     "), "\r\n"), "<FIId>   "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI>  "), "\r\n"), "</FinInstnId>   "), "\r\n"), "</FIId>    "), "\r\n"), "</To>"), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>"), "\r\n"), "<MsgDefIdr>camt.998.001.03</MsgDefIdr>"), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>"), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt>"), "\r\n"), "</AppHdr>"), "\r\n"), "<Document xmlns=\"urn:swift:xsd:camt.998.001.03\"> "), "\r\n"), "<CshMgmtPrtryMsg>"), "\r\n"), " <MsgHdr>"), "\r\n"), " <MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId>"), "\r\n"), "<CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>"), "\r\n"), "</MsgHdr>"), "\r\n"), "<PrtryData>"), "\r\n"), "<Tp>cma.changePassword.001.01</Tp>"), "\r\n"), "<Data>"), "\r\n"), " <Document xmlns=\"urn:cma:xsd:cma.changePassword.001.01\">"), "\r\n"), "<ChngPwd>"), "\r\n"), " <NewPwd>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["l03"], C)), "asstring"))), "</NewPwd> "), "\r\n"), "<OldPwd>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["l04"], C)), "asstring"))), "</OldPwd> "), "\r\n"), "</ChngPwd>"), "\r\n"), "</Document>"), "\r\n"), "</Data>"), "\r\n"), "</PrtryData>"), "\r\n"), "</CshMgmtPrtryMsg>"), "\r\n"), "</Document>"), "\r\n"), "</Body>  "), "\r\n"), "</DataPDU> "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                }
                if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["messagetype"])), "AsString")), "MT103")))) {
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "sum", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_AMOUNT"], C)), "AsFloat")), { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "kesr", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "frac", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false))], C)), { get: async () => L0["kesr"], set: async (v) => { L0["kesr"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\">  "), "\r\n"), "<Body>   "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">   "), "\r\n"), "<Fr>"), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>  "), "\r\n"), "</FIId> "), "\r\n"), "</Fr>  "), "\r\n"), "<To>     "), "\r\n"), "<FIId>   "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI>  "), "\r\n"), "</FinInstnId>   "), "\r\n"), "</FIId>    "), "\r\n"), "</To>"), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>"), "\r\n"), "<MsgDefIdr>pacs.008.001.10</MsgDefIdr>"), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>"), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt>"), "\r\n"), "<Prty>0050</Prty>"), "\r\n"), "</AppHdr>"), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:pacs.008.001.10\">"), "\r\n"), "<FIToFICstmrCdtTrf> "), "\r\n"), "<GrpHdr>"), "\r\n"), " <MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId> "), "\r\n"), " <CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>"), "\r\n"), " <BtchBookg>false</BtchBookg>"), "\r\n"), "<NbOfTxs>1</NbOfTxs> "), "\r\n"), "<SttlmInf><SttlmMtd>CLRG</SttlmMtd></SttlmInf>"), "\r\n"), "</GrpHdr>"), "\r\n"), "<CdtTrfTxInf> "), "\r\n"), "<PmtId>"), "\r\n"), "<EndToEndId>NOTPROVIDED</EndToEndId>"), "\r\n"), "<TxId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</TxId> "), "\r\n"), "<UETR>4e7b08db-68e1-4af3-ac40-cd06623bac8a</UETR> "), "\r\n"), "</PmtId>"), "\r\n"), "<PmtTpInf> "), "\r\n"), "<ClrChanl>RTGS</ClrChanl> "), "\r\n"), "<LclInstrm><Prtry>RTGS-SCCT</Prtry></LclInstrm> "), "\r\n"), "</PmtTpInf>  "), "\r\n"), "<IntrBkSttlmAmt Ccy=\""), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_CURR"], C)), "AsString"))), "\">"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "StringReplace", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_AMOUNT"], C)), "AsString")), ",", ".", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "rfReplaceAll", C, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "rfIgnoreCase", C, false))]], C))), "</IntrBkSttlmAmt> "), "\r\n"), "<IntrBkSttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_DATE"], C)), "AsDateTime"))], C))), "</IntrBkSttlmDt> "), "\r\n"), "<ChrgBr>DEBT</ChrgBr>"), "\r\n"), "<InstgAgt> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "<Othr>     "), "\r\n"), "<Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), "</Id>   "), "\r\n"), "<SchmeNm><Prtry>IBAN</Prtry></SchmeNm> "), "\r\n"), "</Othr>   "), "\r\n"), "</FinInstnId> "), "\r\n"), "</InstgAgt> "), "\r\n"), "<InstdAgt>"), "\r\n"), "<FinInstnId>  "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["receiverbic"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "<Othr>             "), "\r\n"), "<Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf54_account"], C)), "AsString"))), "</Id>  "), "\r\n"), "<SchmeNm><Prtry>IBAN</Prtry></SchmeNm> "), "\r\n"), "</Othr>     "), "\r\n"), "</FinInstnId> "), "\r\n"), "</InstdAgt>   "), "\r\n"), "<Dbtr>"), "\r\n"), "<Nm>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf50_bic"], C)), "AsString"))), "</Nm> "), "\r\n"), "</Dbtr>  "), "\r\n"), "<DbtrAcct> "), "\r\n"), "<Id><IBAN>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf50_account"], C)), "AsString"))), "</IBAN></Id> "), "\r\n"), "</DbtrAcct> "), "\r\n"), "<DbtrAgt>  "), "\r\n"), "<FinInstnId>  "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>   "), "\r\n"), "<Othr>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf50_name$adress"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                  try {
                    await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "fifthline", { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "sendebankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 6], C)), { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 8, 10], C)), { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "senderinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["senderinn"], set: async (v) => { L0["senderinn"] = v; }, local: true });
                  } finally {
                    await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                  }
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "sendebankcode", { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true }, false))), "</Id>   "), "\r\n"), "<SchmeNm>   "), "\r\n"), "<Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankinn", { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true }, false))), "</Prtry> "), "\r\n"), "</SchmeNm> "), "\r\n"), "</Othr>  "), "\r\n"), "</FinInstnId> "), "\r\n"), "</DbtrAgt>   "), "\r\n"), "<DbtrAgtAcct> "), "\r\n"), "<Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true }, false))), "</IBAN></Id>  "), "\r\n"), "</DbtrAgtAcct> "), "\r\n"), " <CdtrAgt> "), "\r\n"), " <FinInstnId> "), "\r\n"), "  <BICFI>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["receiverbic"], C)), "AsString"))), "</BICFI>"), "\r\n"), "  <Othr>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf59_name$adress"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                  try {
                    await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "recinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["recinn"], set: async (v) => { L0["recinn"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "fifthline", { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 6], C)), { get: async () => L0["recbankcode"], set: async (v) => { L0["recbankcode"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 8, 10], C)), { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true });
                  } finally {
                    await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                  }
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "  <Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["rcode"], C)), "AsString"))), "</Id> "), "\r\n"), "<SchmeNm>"), "\r\n"), "<Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankinn", { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true }, false))), "</Prtry> "), "\r\n"), "</SchmeNm>"), "\r\n"), " </Othr>  "), "\r\n"), "</FinInstnId> "), "\r\n"), " </CdtrAgt>"), "\r\n"), " <CdtrAgtAcct> "), "\r\n"), "<Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true }, false))), "</IBAN></Id>"), "\r\n"), "</CdtrAgtAcct>"), "\r\n"), " <Cdtr> "), "\r\n"), "<Nm>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf59_name"], C)), "AsString"))), "</Nm> "), "\r\n"), " </Cdtr> "), "\r\n"), " <CdtrAcct>  "), "\r\n"), " <Id><IBAN>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf59_account"], C)), "AsString"))), "</IBAN></Id> "), "\r\n"), " </CdtrAcct>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  if ($.truthy($.ne((await $.wcall([$t9, $t10, $t11, $t12, $t16], "trim", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF72"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<InstrForCdtrAgt>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF72"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                    try {
                      await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                      { const $t23 = $.sub((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Count")), 1);
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
                        let $t24 = true;
                        for (;;) {
                          if (!$t24) { await $.wset([$t9, $t10, $t11, $t12, $t16], "I", $.succ((await $.wv([$t9, $t10, $t11, $t12, $t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                          $t24 = false;
                          if (!($.ord((await $.wv([$t9, $t10, $t11, $t12, $t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t23))) break;
                          await $.wset([$t9, $t10, $t11, $t12, $t16], "recinfo2", $.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo2", { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true }, false)), "<InstrInf>"), (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "</InstrInf>"), "\r\n"), { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true });
                          await $.tick();
                        }
                      }
                    } finally {
                      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                    }
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo2", { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true }, false))), "</InstrForCdtrAgt>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  }
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<Tax> "), "\r\n"), "<Cdtr><TaxId>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinn", { get: async () => L0["recinn"], set: async (v) => { L0["recinn"] = v; }, local: true }, false))), "</TaxId></Cdtr>  "), "\r\n"), "<Dbtr><TaxId>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderinn", { get: async () => L0["senderinn"], set: async (v) => { L0["senderinn"] = v; }, local: true }, false))), "</TaxId></Dbtr>  "), "\r\n"), "</Tax>"), "\r\n"), "<RmtInf>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  if ($.truthy($.ne((await $.wcall([$t9, $t10, $t11, $t12, $t16], "trim", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["Mf70"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["Mf70"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                    try {
                      await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                      { const $t25 = $.sub((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Count")), 1);
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
                        let $t26 = true;
                        for (;;) {
                          if (!$t26) { await $.wset([$t9, $t10, $t11, $t12, $t16], "I", $.succ((await $.wv([$t9, $t10, $t11, $t12, $t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                          $t26 = false;
                          if (!($.ord((await $.wv([$t9, $t10, $t11, $t12, $t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t25))) break;
                          await $.wset([$t9, $t10, $t11, $t12, $t16], "recinfo", $.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo", { get: async () => L0["recinfo"], set: async (v) => { L0["recinfo"] = v; }, local: true }, false)), "<Ustrd>"), (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "</Ustrd>"), "\r\n"), { get: async () => L0["recinfo"], set: async (v) => { L0["recinfo"] = v; }, local: true });
                          await $.tick();
                        }
                      }
                    } finally {
                      await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                    }
                  }
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo", { get: async () => L0["recinfo"], set: async (v) => { L0["recinfo"] = v; }, local: true }, false))), "</RmtInf>"), "\r\n"), "</CdtTrfTxInf> "), "\r\n"), "</FIToFICstmrCdtTrf>  "), "\r\n"), "</Document>"), "\r\n"), "</Body> "), "\r\n"), "</DataPDU> "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                }
                if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["messagetype"])), "AsString")), "MT102")))) {
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "sum", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF32A_AMOUNT"], C)), "AsFloat")), { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "kesr", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "frac", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false))], C)), { get: async () => L0["kesr"], set: async (v) => { L0["kesr"] = v; }, local: true });
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("<?xml version=\"1.0\" encoding=\"UTF-8\"?> ", "\r\n"), "<DataPDU xmlns=\"urn:cma:stp:xsd:stp.1.0\">  "), "\r\n"), "<Body>   "), "\r\n"), "<AppHdr xmlns=\"urn:iso:std:iso:20022:tech:xsd:head.001.001.02\">   "), "\r\n"), "<Fr>"), "\r\n"), "<FIId> "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "</FinInstnId>  "), "\r\n"), "</FIId> "), "\r\n"), "</Fr>  "), "\r\n"), "<To>     "), "\r\n"), "<FIId>   "), "\r\n"), "<FinInstnId>   "), "\r\n"), "<BICFI>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "</BICFI>  "), "\r\n"), "</FinInstnId>   "), "\r\n"), "</FIId>    "), "\r\n"), "</To>"), "\r\n"), "<BizMsgIdr>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</BizMsgIdr>"), "\r\n"), "<MsgDefIdr>pacs.008.001.10</MsgDefIdr>"), "\r\n"), "<BizSvc>cba.rtsx.01</BizSvc>"), "\r\n"), "<CreDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDt>"), "\r\n"), "<Prty>0020</Prty>"), "\r\n"), "</AppHdr>"), "\r\n"), "<Document xmlns=\"urn:iso:std:iso:20022:tech:xsd:pacs.008.001.10\">"), "\r\n"), "<FIToFICstmrCdtTrf> "), "\r\n"), "<GrpHdr>"), "\r\n"), " <MsgId>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["MF20_REFERENCE"], C)), "asstring"))), "</MsgId> "), "\r\n"), " <CreDtTm>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["mf32a_date"], C)), "AsDateTime"))], C))), "T"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["hh:nn:ss", (await $.wv([$t9, $t10, $t11, $t12, $t16], "now", C, false))], C))), "+04:00</CreDtTm>"), "\r\n"), " <BtchBookg>true</BtchBookg>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  {
                    const $t27 = (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps"));
                    await $.stmt($.wcall([$t9, $t10, $t11, $t12, $t16, $t27], "close", [], C));
                    await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "sql", C, false)), "Clear", []);
                    await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "sql", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add("select * from sw_out_new ase where  mf20_reference=", "'"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "gridout3", C, false)), "DataSource")), "DataSet")), "FieldByName", ["mf20_reference"])), "AsString"))), "'"), " and L01 in (select max(L01) from sw_out_new where mf20_reference="), "'"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "gridout3", C, false)), "DataSource")), "DataSet")), "FieldByName", ["mf20_reference"])), "AsString"))), "'"), ")")])));
                    await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "SWDataModule", C, false)), "datatemps")), "SQL")), "Text")));
                    await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16, $t27], "SWDataModule", C, false)), "datatemps")), "open", []);
                  }
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "<NbOfTxs>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "FieldByName", ["L01"])), "AsString"))), "</NbOfTxs> "), "\r\n"), "<TtlIntrBkSttlmAmt Ccy=\""), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "FieldByName", ["MF32A_CURR"])), "AsString"))), "\">"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "StringReplace", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["MF32B_AMOUNT"])), "AsString")), ",", ".", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "rfReplaceAll", C, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "rfIgnoreCase", C, false))]], C))), "</TtlIntrBkSttlmAmt>"), "\r\n"), "<IntrBkSttlmDt>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "FormatDateTime", ["yyyy-mm-dd", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "FieldByName", ["mf32a_date"])), "AsDateTime"))], C))), "</IntrBkSttlmDt>  "), "\r\n"), "<SttlmInf><SttlmMtd>CLRG</SttlmMtd></SttlmInf>"), "\r\n"), "<PmtTpInf> "), "\r\n"), "<ClrChanl>RTGS</ClrChanl> "), "\r\n"), "<LclInstrm><Prtry>RTGS-SCCT</Prtry></LclInstrm> "), "\r\n"), "</PmtTpInf>  "), "\r\n"), "<InstgAgt> "), "\r\n"), "<FinInstnId> "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C))), "</BICFI>  "), "\r\n"), "<Othr>     "), "\r\n"), "<Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), "</Id>   "), "\r\n"), "<SchmeNm><Prtry>IBAN</Prtry></SchmeNm> "), "\r\n"), "</Othr>   "), "\r\n"), "</FinInstnId> "), "\r\n"), "</InstgAgt> "), "\r\n"), "<InstdAgt>"), "\r\n"), "<FinInstnId>  "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["receiverbic"], C)), "asstring")), 0, 8], C))), "</BICFI> "), "\r\n"), "<Othr>             "), "\r\n"), "<Id>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf54_account"], C)), "AsString"))), "</Id>  "), "\r\n"), "<SchmeNm><Prtry>IBAN</Prtry></SchmeNm> "), "\r\n"), "</Othr>     "), "\r\n"), "</FinInstnId> "), "\r\n"), "</InstdAgt>   "), "\r\n"), "</GrpHdr>"), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  {
                    const $t28 = (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps"));
                    await $.stmt($.wcall([$t9, $t10, $t11, $t12, $t16, $t28], "close", [], C));
                    await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16, $t28], "sql", C, false)), "clear", []);
                    await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16, $t28], "sql", C, false)), "Add", [$.add($.add($.add("select * from sw_out_new  where  mf20_reference=", "'"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16, $t28], "gridout3", C, false)), "DataSource")), "DataSet")), "FieldByName", ["mf20_reference"])), "AsString"))), "'")])));
                    await $.stmt($.wcall([$t9, $t10, $t11, $t12, $t16, $t28], "open", [], C));
                  }
                  { const $t29 = $.sub((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "RecordCount")), 1);
                    await $.wset([$t9, $t10, $t11, $t12, $t16], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
                    let $t30 = true;
                    for (;;) {
                      if (!$t30) { await $.wset([$t9, $t10, $t11, $t12, $t16], "i", $.succ((await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                      $t30 = false;
                      if (!($.ord((await $.wv([$t9, $t10, $t11, $t12, $t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t29))) break;
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage1", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage1", { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true }, false)), "<CdtTrfTxInf> "), "\r\n"), "<PmtId> "), "\r\n"), "<InstrId>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf21"])), "AsString"))), "</InstrId>  "), "\r\n"), "<EndToEndId>NOTPROVIDED</EndToEndId>"), "\r\n"), "<TxId>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf20_reference"])), "AsString"))), "//"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf21"])), "AsString"))), "</TxId>"), "\r\n"), "</PmtId>"), "\r\n"), "<IntrBkSttlmAmt Ccy=\""), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["MF32A_CURR"])), "AsString"))), "\">"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "StringReplace", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["MF32A_AMOUNT"])), "AsString")), ",", ".", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "rfReplaceAll", C, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "rfIgnoreCase", C, false))]], C))), "</IntrBkSttlmAmt> "), "\r\n"), "<ChrgBr>DEBT</ChrgBr>"), "\r\n"), "<Dbtr>"), "\r\n"), "<Nm>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["mf50_bic"], C)), "AsString"))), "</Nm> "), "\r\n"), "</Dbtr>  "), "\r\n"), "<DbtrAcct> "), "\r\n"), "<Id><IBAN>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf50_account"])), "AsString"))), "</IBAN></Id> "), "\r\n"), "</DbtrAcct> "), "\r\n"), "<DbtrAgt>  "), "\r\n"), "<FinInstnId>  "), "\r\n"), "<BICFI>"), (await $.wcall([$t9, $t10, $t11, $t12, $t16], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "FieldByName", ["SENDERBIC"])), "asstring")), 0, 8], C))), "</BICFI>   "), "\r\n"), "<Othr>"), "\r\n"), { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf50_name$adress"])), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                      try {
                        await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "fifthline", { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "sendebankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 6], C)), { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "senderbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 8, 10], C)), { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "senderinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "thirdline", { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["senderinn"], set: async (v) => { L0["senderinn"] = v; }, local: true });
                      } finally {
                        await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                      }
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage1", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage1", { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true }, false)), "<Id>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "sendebankcode", { get: async () => L0["sendebankcode"], set: async (v) => { L0["sendebankcode"] = v; }, local: true }, false))), "</Id>   "), "\r\n"), "<SchmeNm>   "), "\r\n"), "<Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankinn", { get: async () => L0["senderbankinn"], set: async (v) => { L0["senderbankinn"] = v; }, local: true }, false))), "</Prtry> "), "\r\n"), "</SchmeNm> "), "\r\n"), "</Othr>  "), "\r\n"), "</FinInstnId> "), "\r\n"), "</DbtrAgt>   "), "\r\n"), "<DbtrAgtAcct> "), "\r\n"), "<Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderbankbankcode", { get: async () => L0["senderbankbankcode"], set: async (v) => { L0["senderbankbankcode"] = v; }, local: true }, false))), "</IBAN></Id>  "), "\r\n"), "</DbtrAgtAcct> "), "\r\n"), " <CdtrAgt> "), "\r\n"), " <FinInstnId> "), "\r\n"), "  <BICFI>"), (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["receiverbic"], C)), "AsString"))), "</BICFI>"), "\r\n"), "  <Othr>"), "\r\n"), { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf59_name$adress"])), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                      try {
                        await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "thirdline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [2])), { get: async () => L0["thirdline"], set: async (v) => { L0["thirdline"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "FourthLine", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [3])), { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "fifthline", (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [4])), { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "recinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 10], C)), { get: async () => L0["recinn"], set: async (v) => { L0["recinn"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "fifthline", { get: async () => L0["fifthline"], set: async (v) => { L0["fifthline"] = v; }, local: true }, false)), 1, 28], C)), { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankcode", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 1, 6], C)), { get: async () => L0["recbankcode"], set: async (v) => { L0["recbankcode"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "recbankinn", (await $.wcall([$t9, $t10, $t11, $t12, $t16], "Copy", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "FourthLine", { get: async () => L0["fourthline"], set: async (v) => { L0["fourthline"] = v; }, local: true }, false)), 8, 10], C)), { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true });
                      } finally {
                        await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                      }
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage1", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage1", { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true }, false)), "  <Id>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["rcode"])), "AsString"))), "</Id> "), "\r\n"), "<SchmeNm>"), "\r\n"), "<Prtry>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankinn", { get: async () => L0["recbankinn"], set: async (v) => { L0["recbankinn"] = v; }, local: true }, false))), "</Prtry> "), "\r\n"), "</SchmeNm>"), "\r\n"), " </Othr>  "), "\r\n"), "</FinInstnId> "), "\r\n"), " </CdtrAgt>"), "\r\n"), " <CdtrAgtAcct> "), "\r\n"), "<Id><IBAN>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recbankbankcode", { get: async () => L0["recbankbankcode"], set: async (v) => { L0["recbankbankcode"] = v; }, local: true }, false))), "</IBAN></Id>"), "\r\n"), "</CdtrAgtAcct>"), "\r\n"), " <Cdtr> "), "\r\n"), "<Nm>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf59_name"])), "AsString"))), "</Nm> "), "\r\n"), " </Cdtr> "), "\r\n"), " <CdtrAcct>  "), "\r\n"), " <Id><IBAN>"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["mf59_account"])), "AsString"))), "</IBAN></Id> "), "\r\n"), " </CdtrAcct>"), "\r\n"), { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true });
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage1", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage1", { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo2", { get: async () => L0["recinfo2"], set: async (v) => { L0["recinfo2"] = v; }, local: true }, false))), "<Purp> <Prtry>001</Prtry></Purp>"), "\r\n"), "<Tax> "), "\r\n"), "<Cdtr><TaxId>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinn", { get: async () => L0["recinn"], set: async (v) => { L0["recinn"] = v; }, local: true }, false))), "</TaxId></Cdtr>"), "\r\n"), "<Dbtr><TaxId>"), (await $.wv([$t9, $t10, $t11, $t12, $t16], "senderinn", { get: async () => L0["senderinn"], set: async (v) => { L0["senderinn"] = v; }, local: true }, false))), "</TaxId></Dbtr>  "), "\r\n"), "</Tax>"), "\r\n"), "<RmtInf>"), "\r\n"), { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true });
                      if ($.truthy($.ne((await $.wcall([$t9, $t10, $t11, $t12, $t16], "trim", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "fieldbyname", ["Mf70"])), "AsString"))], C)), ""))) {
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "InputString", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "fieldbyname", ["Mf70"], C)), "AsString")), { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true });
                        await $.wset([$t9, $t10, $t11, $t12, $t16], "Lines", (await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "TStringList", C, false)), "Create")), { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true });
                        try {
                          await $.mset((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Text", (await $.wv([$t9, $t10, $t11, $t12, $t16], "InputString", { get: async () => L0["inputstring"], set: async (v) => { L0["inputstring"] = v; }, local: true }, false)));
                          { const $t31 = $.sub((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Count")), 1);
                            await $.wset([$t9, $t10, $t11, $t12, $t16], "Ij", 0, { get: async () => L0["ij"], set: async (v) => { L0["ij"] = v; }, local: true });
                            let $t32 = true;
                            for (;;) {
                              if (!$t32) { await $.wset([$t9, $t10, $t11, $t12, $t16], "Ij", $.succ((await $.wv([$t9, $t10, $t11, $t12, $t16], "Ij", { get: async () => L0["ij"], set: async (v) => { L0["ij"] = v; }, local: true }, false)), 1), { get: async () => L0["ij"], set: async (v) => { L0["ij"] = v; }, local: true }); }
                              $t32 = false;
                              if (!($.ord((await $.wv([$t9, $t10, $t11, $t12, $t16], "Ij", { get: async () => L0["ij"], set: async (v) => { L0["ij"] = v; }, local: true }, false))) <= $.ord($t31))) break;
                              await $.wset([$t9, $t10, $t11, $t12, $t16], "recinfo", $.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo", { get: async () => L0["recinfo"], set: async (v) => { L0["recinfo"] = v; }, local: true }, false)), "<Ustrd>"), (await $.idx((await $.wv([$t9, $t10, $t11, $t12, $t16], "lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10, $t11, $t12, $t16], "Ij", { get: async () => L0["ij"], set: async (v) => { L0["ij"] = v; }, local: true }, false))]))), "</Ustrd>"), "\r\n"), { get: async () => L0["recinfo"], set: async (v) => { L0["recinfo"] = v; }, local: true });
                              await $.tick();
                            }
                          }
                        } finally {
                          await $.mcall((await $.wv([$t9, $t10, $t11, $t12, $t16], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), "Free", []);
                        }
                      }
                      await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage1", $.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage1", { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "recinfo", { get: async () => L0["recinfo"], set: async (v) => { L0["recinfo"] = v; }, local: true }, false))), "</RmtInf>"), "\r\n"), "</CdtTrfTxInf> "), "\r\n"), { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true });
                      await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "datatemps")), "Next", []);
                      await $.tick();
                    }
                  }
                  await $.wset([$t9, $t10, $t11, $t12, $t16], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "Swmessage1", { get: async () => L0["swmessage1"], set: async (v) => { L0["swmessage1"] = v; }, local: true }, false))), "</FIToFICstmrCdtTrf>  "), "\r\n"), "</Document>"), "\r\n"), "</Body> "), "\r\n"), "</DataPDU> "), "\r\n"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                }
                await $.stmt((await $.wcall([$t9, $t10, $t11, $t12, $t16], "Writeln", [(await $.wv([$t9, $t10, $t11, $t12, $t16], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t9, $t10, $t11, $t12, $t16], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                await $.stmt((await $.wcall([$t9, $t10, $t11, $t12, $t16], "CloseFile", [$.ref(async () => (await $.wv([$t9, $t10, $t11, $t12, $t16], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t33) => { await $.wset([$t9, $t10, $t11, $t12, $t16], "output", $t33, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); })], C)));
                await $.wset([$t9, $t10, $t11, $t12, $t16], "info", "Fayl yaradılıb!", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true });
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_CreateFile", [(await $.mv((await $.wcall([$t9, $t10, $t11, $t12, $t16], "FieldByName", ["id"], C)), "asinteger")), (await $.wv([$t9, $t10, $t11, $t12, $t16], "info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), 1]])));
                await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12, $t16], "SWDataModule", C, false)), "swmammount")), "Refresh", []);
              }
            }
          } else {
            await $.wset([$t9, $t10, $t11, $t12], "info", "Təsdiq olunmamış əməliyyat var!", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true });
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_CreateFile", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "GRIDOUT2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger")), (await $.wv([$t9, $t10, $t11, $t12], "info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), 0]])));
          }
          await $.wset([$t9, $t10, $t11, $t12], "WillRefresh", (await $.wv([$t9, $t10, $t11, $t12], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "swmammount")), "Refresh", []);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t9, $t10, $t11, $t12], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "swmammount")), "Refresh", []);
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "edit2", C, false)), "Text", $.add($.add("Bu gün göndəriləcək ümumi məbləğ = ", (await $.wcall([$t9, $t10, $t11, $t12], "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "swmammount")), "FieldByName", ["summ"])), "AsFloat"))], C))), " AZN"));
        await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "sw_out_2")), "Open", []);
        await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "sw_out_2")), "Refresh", []);
        await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "sw_out3")), "Open", []);
        await $.mcall((await $.mv((await $.wv([$t9, $t10, $t11, $t12], "SWDataModule", C, false)), "sw_out3")), "Refresh", []);
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSWIFT_MAIN", "Konver102Execute", async function Konver102Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valu": 0, "i": 0, "j": 0, "z": 0, "status": 0, "shifr": 0, "k": 0, "m": 0, "struktur": 0, "num": 0, "num1": 0, "num2": 0, "swstring": '', "fli": '', "acount": '', "voin": '', "referens": '', "valyuta": '', "describ": '', "describ2": '', "mt": '', "all": '', "bic": '', "dat": '', "tax": '', "kod": '', "kor": '', "bank_voin": '', "dirold": '', "dirnew": '', "dir": '', "v_out1": '', "v_out2": '', "v_out3": '', "v_out4": '', "v_out8": '', "v_out7": '', "v_out5": '', "v_out6": '', "fl": null, "strtempl": '', "sendern": '', "receiver": '', "strbuff": '', "pos1": 0, "kk": 0, "row": 0, "arr": []};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mcall((await $.v(C, "sw_out_FileListBox")), "Update", []);
    L0["struktur"] = 0;
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_KONVERT"]])));
    L0["shifr"] = 3;
    L0["status"] = 2;
    L0["kk"] = 0;
    L0["j"] = 1;
    { const $t35 = $.sub((await $.mv((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), "Count")), 1);
      L0["m"] = 0;
      let $t36 = true;
      for (;;) {
        if (!$t36) { L0["m"] = $.succ(L0["m"], 1); }
        $t36 = false;
        if (!($.ord(L0["m"]) <= $.ord($t35))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["m"]]))])));
        L0["all"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))]));
        L0["v_out1"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1, 1000]))]));
        L0["v_out2"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1001, 1000]))]));
        L0["v_out3"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 2001, 1000]))]));
        L0["v_out4"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 3001, 1000]))]));
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["fl"], async ($t37) => { L0["fl"] = $t37; }), (await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["m"]]))])));
        await $.stmt((await $.call(C, "reset", [$.ref(async () => L0["fl"], async ($t38) => { L0["fl"] = $t38; })])));
        L0["num1"] = 0;
        L0["row"] = 1;
        while ($.truthy($.not((await $.call(C, "Eof", [L0["fl"]]))))) {
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["fl"], async ($t39) => { L0["fl"] = $t39; }), $.ref(async () => L0["strbuff"], async ($t40) => { L0["strbuff"] = $t40; })])));
          L0["pos1"] = (await $.call(C, "Pos", [":21:", L0["strbuff"]]));
          if ($.truthy($.gt(L0["pos1"], 0))) {
            if ($.truthy($.eq(L0["i"], (await $.call(C, "Length", [L0["arr"]]))))) {
              await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["arr"], async ($t41) => { L0["arr"] = $t41; }), $.add((await $.call(C, "Length", [L0["arr"]])), 10)])));
            }
            { const $t42 = await $.iset(L0["arr"], [L0["num1"], 0], L0["row"]); if ($t42 !== undefined) { L0["arr"] = $t42; } }
            { const $t43 = await $.iset(L0["arr"], [L0["num1"], 1], L0["pos1"]); if ($t43 !== undefined) { L0["arr"] = $t43; } }
            await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["num1"], async ($t44) => { L0["num1"] = $t44; })])));
          }
          await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["row"], async ($t45) => { L0["row"] = $t45; })])));
          await $.tick();
        }
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["fl"], async ($t46) => { L0["fl"] = $t46; })])));
        await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["arr"], async ($t47) => { L0["arr"] = $t47; }), L0["num1"]])));
        if ($.truthy($.gt(L0["num1"], 0))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo4")), "Lines")), "Add", [$.add($.add("axtarilan sozden  ", (await $.call(C, "IntToStr", [L0["num1"]]))), " defe var")])));
          { const $t48 = $.sub(L0["num1"], 1);
            L0["j"] = 0;
            let $t49 = true;
            for (;;) {
              if (!$t49) { L0["j"] = $.succ(L0["j"], 1); }
              $t49 = false;
              if (!($.ord(L0["j"]) <= $.ord($t48))) break;
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo4")), "Lines")), "Add", [$.add($.add($.add("Setir №", (await $.call(C, "IntToStr", [(await $.idx(L0["arr"], [L0["j"], 0]))]))), ", pozisiya  = "), (await $.call(C, "IntToStr", [(await $.idx(L0["arr"], [L0["j"], 1]))])))])));
              L0["kk"] = $.sub((await $.idx(L0["arr"], [L0["j"], 0])), 1);
              L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["kk"]])), 5, 16]))]));
              L0["acount"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 7)])), 6, 32]))]));
              L0["valu"] = (await $.call(C, "strtofloat", [(await $.call(C, "StringReplace", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 1)])), 9, 15])), ",", ".", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))]));
              L0["voin"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 9)])), 0, 10]))]));
              L0["mt"] = "MT102";
              L0["describ2"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 12)])), 4, 100]))]));
              L0["valyuta"] = "AZN";
              L0["bic"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 10)])), 19, 20]))]));
              L0["sendern"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 3)])), 0, 35]))]));
              L0["receiver"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["kk"], 8)])), 0, 35]))]));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_other102", [L0["acount"], L0["referens"], L0["bic"], L0["status"], L0["shifr"], L0["mt"], L0["v_out1"], L0["v_out2"], L0["v_out3"], L0["v_out4"], L0["valu"], L0["voin"], L0["describ2"], L0["sendern"], L0["receiver"]]])));
              await $.tick();
            }
          }
        }
        if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
          await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
        }
        L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
        if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
          await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
        }
        L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["m"]])), 1, 100]))])));
        L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["m"]])), 1, 100]))])));
        await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
        await $.tick();
      }
    }
  } catch ($t34) {
    $.rethrowControl($t34);
    if ($.excIs($t34, "Exception")) {
      L0["e"] = $.exc($t34);
    }
    else { throw $t34; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSWIFT_MAIN", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSWIFT_MAIN", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSWIFT_MAIN", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TSWIFT_MAIN", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSWIFT_MAIN", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSWIFT_MAIN", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSWIFT_MAIN", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSWIFT_MAIN", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.func("Pluginloader", async function Pluginloader(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TSWIFT_MAIN", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSWIFT_MAIN", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "today": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "Refresh", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["time"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "FieldByName", ["EXpire_t"])), "AsString"))))) {
    await $.stmt((await $.call(C, "ShowMessage", [$.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "FieldByName", ["EXpire_t"])), "AsString")), " -dan sonra əməliyyat yığmaq olmaz!!!")])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_NEW"]])));
    await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", "1"])));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fil": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateFEComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.set(C, "archive_out", (await $.mcall((await $.v(C, "tarchive_out")), "create", [Self])));
  await $.set(C, "Form12", (await $.mcall((await $.v(C, "TForm12")), "Create", [Self])));
  await $.set(C, "Form7", (await $.mcall((await $.v(C, "TForm7")), "create", [Self])));
  await $.set(C, "Form8", (await $.mcall((await $.v(C, "TForm8")), "create", [Self])));
  await $.set(C, "MT103Show", (await $.mcall((await $.v(C, "TMT103Show")), "Create", [Self])));
  await $.set(C, "struktur", "PRT");
  await $.mcall((await $.v(C, "RefreshButton")), "Click", []);
  try {
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["ConvInterval"])), "AsInteger")), 0))) {
      await $.mset((await $.v(C, "Timer1")), "Interval", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["ConvInterval"])), "AsInteger")));
      await $.mset((await $.v(C, "Timer1")), "Enabled", true);
    } else {
      await $.mset((await $.v(C, "timer1")), "Enabled", false);
    }
  } catch ($t50) {
    $.rethrowControl($t50);
    $.handled($t50);
    await $.mset((await $.v(C, "timer1")), "Enabled", false);
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "userfil")), "FieldByName", ["filialid"])), "AsInteger")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Close", []);
    { const $t51 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t51 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "SQL", $t51); } }
    { const $t52 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t52 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "SQL", $t52); } }
    { const $t53 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t53 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "SQL", $t53); } }
    { const $t54 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t54 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "SQL", $t54); } }
    { const $t55 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t55 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "SQL", $t55); } }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
  } else {
    L0["fil"] = (await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallIntegerFunction", ["checkadvancedobjectaccess_func", ["SW_IN_FIL"]]));
    if ($.truthy($.eq(L0["fil"], 1))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Open", []);
    } else {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Close", []);
      { const $t56 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t56 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "SQL", $t56); } }
      { const $t57 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t57 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "SQL", $t57); } }
      { const $t58 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t58 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "SQL", $t58); } }
      { const $t59 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t59 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "SQL", $t59); } }
      { const $t60 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t60 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "SQL", $t60); } }
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_PRINT"]])));
  await $.set(C, "a", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "fieldbyname", ["all_text2"])), "asstring")));
  await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", (await $.v(C, "a")));
  await $.mcall((await $.v(C, "printform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t61 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t61], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t62 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t61], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t62, (await $.wv([$t61], "notcreate", C, false)))) {
          await $.wset([$t61], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t62, (await $.wv([$t61], "created", C, false)))) {
          await $.wset([$t61], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t62, (await $.wv([$t61], "commited", C, false)))) {
          await $.wset([$t61], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t62, (await $.wv([$t61], "Problemed", C, false)))) {
          await $.wset([$t61], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t62, 11)) {
          await $.wset([$t61], "ImageIndex", 42, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t62, 12)) {
          await $.wset([$t61], "ImageIndex", 43, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t61], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t61], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t61], "swImageList1", C, false)), "Draw", [(await $.wv([$t61], "Canvas", C, false)), (await $.mv((await $.wv([$t61], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t61], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t61], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t61], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t61], "DefaultDrawColumnCell", [(await $.wv([$t61], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t61], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t61], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t61], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSWIFT_MAIN", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t63 = (await $.mv((await $.v(C, "SWDataModule")), "sw_in2"));
      await $.stmt($.wcall([$t63], "close", [], C));
      { const $t64 = await $.iset((await $.wv([$t63], "sql", C, false)), [46], $.add("order by ", (await $.wv([$t63], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))); if ($t64 !== undefined) { await $.wset([$t63], "sql", $t64, C); } }
      await $.stmt($.wcall([$t63], "open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSWIFT_MAIN", "YeniExecute", async function YeniExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OUT_FORM", (await $.mcall((await $.v(C, "Tout_form")), "create", [Self])));
  await $.mcall((await $.v(C, "OUT_FORM")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "CreateFaylExecute", async function CreateFaylExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sum": 0, "kesr": 0, "i": 0, "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GRIDOUT2")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GRIDOUT2")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger")), 5))) {
    L0["edit_ref"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asstring"));
    { const $t65 = ($.sub(8, (await $.call(C, "length", [L0["edit_ref"]]))));
      L0["i"] = 1;
      let $t66 = true;
      for (;;) {
        if (!$t66) { L0["i"] = $.succ(L0["i"], 1); }
        $t66 = false;
        if (!($.ord(L0["i"]) <= $.ord($t65))) break;
        L0["edit_ref"] = $.add("0", L0["edit_ref"]);
        await $.tick();
      }
    }
    L0["valu"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["MF32A_CURR"])), "asstring"));
    if ($.truthy($.eq(L0["valu"], "AZN"))) {
      L0["valu"] = "AZM";
    }
    if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
      await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))])));
    }
    L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
    if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
      await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
    }
    L0["filename"] = $.add($.add($.add(L0["dir"], "sw"), L0["edit_ref"]), ".rje");
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["output"], async ($t67) => { L0["output"] = $t67; }), L0["filename"]])));
    await $.stmt((await $.call(C, "ShowMessage", [L0["filename"]])));
    await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["output"], async ($t68) => { L0["output"] = $t68; })])));
    L0["beginmessage"] = "{1:F01";
    L0["swmessage"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["SENDERBIC"])), "asstring")), "AXXX1234123456}{2:I"), (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "asstring")), 3, 3]))), (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["RECEIVERBIC"])), "asstring")), 0, 8]))), "X"), (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["RECEIVERBIC"])), "asstring")), 9, 3]))), "N}{3:{"), (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "asstring")), 3, 3]))), ":"), L0["valu"]), "}}{4:");
    L0["beginmessage"] = $.add(L0["beginmessage"], L0["swmessage"]);
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["beginmessage"]])));
    L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF20"])), "AsString"));
    L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF20_REFERENCE"])), "AsString")));
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M23B"])), "AsString"));
    L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF23B"])), "AsString")));
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M21"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M21"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF21"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    L0["sum"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_AMOUNT"])), "AsFloat"));
    L0["kesr"] = (await $.call(C, "frac", [L0["sum"]]));
    L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M32A"])), "AsString"));
    L0["swmessage"] = $.add(L0["swmessage"], (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_DATE"])), "AsDateTime"))])));
    L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_CURR"])), "AsString")));
    L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_AMOUNT"])), "AsString")));
    if ($.truthy($.eq(L0["kesr"], 0))) {
      L0["swmessage"] = $.add(L0["swmessage"], ",");
    } else {
      L0["swmessage"] = (await $.call(C, "StringReplace", [L0["swmessage"], ".", ",", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    }
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M36"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M36"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF36"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "AsString"));
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_ACCOUNT"])), "AsString")), ""))) {
        L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_ACCOUNT"])), "AsString")));
        await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_BIC"])), "AsString")), ""))) {
        L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_BIC"])), "AsString"));
        await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "AsString")), ""))) {
        L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "AsString"));
        await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      }
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M52"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M52"])), "AsString"));
      L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF52_ACCOUNT"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF52_BIC"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF52_NAME$ADRESS"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M53"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M53"])), "AsString"));
      L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF53_ACCOUNT"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF53_BIC"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF53_NAME$LOCATION"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M54"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M54"])), "AsString"));
      L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF54_ACCOUNT"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF54_BIC"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF54_NAME$LOCATION"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M55"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M55"])), "AsString"));
      L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF55_ACCOUNT"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF55_BIC"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF55_NAME$LOCATION"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M56"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M56"])), "AsString"));
      L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF56_ACCOUNT"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF56_BIC"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF56_NAME$LOCATION"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "AsString"));
      L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF58_ACCOUNT"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF58_BIC"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF58_NAME$LOCATION"])), "AsString"));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M59"])), "AsString"));
    L0["swmessage"] = $.add($.add(L0["swmessage"], "/"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF59_ACCOUNT"])), "AsString")));
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF59_NAME$ADRESS"])), "AsString"));
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M70"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M70"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF70"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M71A"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M71A"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF71A"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M71F"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M71F"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF71G_CHILD"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M71G"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M71G"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF71G_CHILD"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M72"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M72"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF72"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M77B"])), "AsString")), ""))) {
      L0["swmessage"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["M77B"])), "AsString"));
      L0["swmessage"] = $.add(L0["swmessage"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "fieldbyname", ["MF77B"])), "AsString")));
      await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["swmessage"]])));
    }
    L0["endmesage"] = "-}";
    await $.stmt((await $.call(C, "Writeln", [L0["output"], L0["endmesage"]])));
    await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["output"], async ($t69) => { L0["output"] = $t69; })])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["sw_out_CreateFile", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Refresh", []);
    await $.stmt((await $.call(C, "ShowMessage", [$.add(L0["filename"], " adli fayl yaradildi!")])));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş əməliyyata fayl yaradila bilmez!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "grid_outDrawColumnCell", async function grid_outDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t70 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t70], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t71 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t70], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t71, (await $.wv([$t70], "notcreate", C, false)))) {
          await $.wset([$t70], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t71, (await $.wv([$t70], "created", C, false)))) {
          await $.wset([$t70], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t71, (await $.wv([$t70], "commited", C, false)))) {
          await $.wset([$t70], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t71, (await $.wv([$t70], "Problemed", C, false)))) {
          await $.wset([$t70], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t71, (await $.wv([$t70], "Problemed2", C, false)))) {
          await $.wset([$t70], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t71, 15)) {
          await $.wset([$t70], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t70], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t70], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t70], "swImageList1", C, false)), "Draw", [(await $.wv([$t70], "Canvas", C, false)), (await $.mv((await $.wv([$t70], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t70], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t70], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t70], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t70], "DefaultDrawColumnCell", [(await $.wv([$t70], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t70], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t70], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t70], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSWIFT_MAIN", "grid_outKeyDown", async function grid_outKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_f5"))))) {
    await $.stmt((await $.call(C, "RefreshButtonClick", [(await $.v(C, "RefreshButton"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.func("CopyFileAcrossNetwork", async function CopyFileAcrossNetwork(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), "dest": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["source", "dest"]);
  L0["result"] = (await $.call(C, "CopyFile", [(await $.call(C, "PChar", [L0["source"]])), (await $.call(C, "pchar", [L0["dest"]])), true]));
  return L0.result;
}, {"params": ["source", "dest"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TSWIFT_MAIN", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton4")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "TimerTimer", async function TimerTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "RefreshButtonClick", async function RefreshButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "swDataModule"))]))))) {
    await $.set(C, "swDataModule", (await $.mcall((await $.v(C, "TswDatamodule")), "Create", [Self])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["new_dat", []])));
  await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "Refresh", []);
  await $.mset((await $.v(C, "edit2")), "Text", $.add($.add("Bu gün göndəriləcək ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "Refresh", []);
  await $.mset((await $.v(C, "edit3")), "Text", $.add($.add("Bu gün verifikasiya olunacaq ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "edit1")), "Text", "2");
    await $.mcall((await $.v(C, "ToolButton8")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "RecordCount")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_DELETE"]])));
    await $.mcall((await $.v(C, "out_delete")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton12Click", async function ToolButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_SETTINGS"]])));
  await $.set(C, "AzpSettings", (await $.mcall((await $.v(C, "TAzpSettings")), "create", [Self])));
  await $.mcall((await $.v(C, "AzpSettings")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton13Click", async function ToolButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_COMMITS"]])));
  if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Gridout2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mcall((await $.v(C, "commiting")), "Execute", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "Refresh", []);
    await $.mset((await $.v(C, "edit2")), "Text", $.add($.add("Bu gün göndəriləcək ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "Refresh", []);
    await $.mset((await $.v(C, "edit3")), "Text", $.add($.add("Bu gün verifikasiya olunacaq ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", [" Heç bir format yoxdur!"])));
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "Refresh", []);
  await $.mset((await $.v(C, "edit2")), "Text", $.add($.add("Bu gün göndəriləcək ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "grid_outDblClick", async function grid_outDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "k": 0, "l": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
  await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", (await $.v(C, "v_refrsh"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_SETTINGS"]])));
  await $.set(C, "In_sett", (await $.mcall((await $.v(C, "TIn_sett")), "create", [Self])));
  await $.mcall((await $.v(C, "In_sett")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_COMMIT"]])));
  if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mcall((await $.v(C, "AddTrans2")), "Execute", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir format yoxdur!"])));
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "Refresh", []);
  await $.mset((await $.v(C, "edit3")), "Text", $.add($.add("Bu gün verifikasiya olunacaq ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "CreateFileClick", async function CreateFileClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.le((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 10000))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT10"]])));
  }
  if ($.truthy((await $.and_(($.le((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 100000)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 10000)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT100"]])));
  }
  if ($.truthy((await $.and_(($.le((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 1500000)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 100000)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT15"]])));
  }
  if ($.truthy((await $.and_(($.le((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 2500000)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 1500000)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT25"]])));
  }
  if ($.truthy(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_OUT3")), "FieldByName", ["mf32a_amount"])), "AsFloat")), 2500000)))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT250"]])));
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "SetVariable", ["refer", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "FieldByName", ["mf20_reference"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102sum")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102sum")), "SetVariable", ["refer", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "FieldByName", ["mf20_reference"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102sum")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["updout", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT102")))) {
      await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
      await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", $.add("-", (await $.v(C, "v_refrsh")))])));
      await $.mcall((await $.v(C, "PACS0008")), "Execute", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT103")))) {
      await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
      await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", $.add("-", (await $.v(C, "v_refrsh")))])));
      await $.mcall((await $.v(C, "PACS0008")), "Execute", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT205")))) {
      await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
      await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", $.add("-", (await $.v(C, "v_refrsh")))])));
      await $.mcall((await $.v(C, "PACS0008")), "Execute", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT999")))) {
      await $.mcall((await $.v(C, "PACS0008")), "Execute", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT298")))) {
      await $.mcall((await $.v(C, "PACS0008")), "Execute", []);
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir format yoxdur!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Edit_outExecute", async function Edit_outExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "k": 0, "l": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "RecordCount")), 0))) {
    await $.set(C, "OUT_FORM", (await $.mcall((await $.v(C, "Tout_form")), "Create", [Self])));
    {
      const $t72 = (await $.v(C, "OUT_FORM"));
      await $.mset((await $.wv([$t72], "fin", C, false)), "Style", (await $.wv([$t72], "csDropDown", C, false)));
      await $.mset((await $.wv([$t72], "FIN", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MESSAGETYPE"])), "asstring")));
      await $.mset((await $.wv([$t72], "fin", C, false)), "Enabled", (await $.wv([$t72], "False", C, false)));
      await $.mset((await $.wv([$t72], "sendertype", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["SENDERTYPE"])), "asstring")));
      await $.mset((await $.wv([$t72], "reciverbic", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["RECEIVERBIC"])), "asstring")));
      await $.mset((await $.wv([$t72], "OUT_FORM", C, false)), "Caption", (await $.mv((await $.wv([$t72], "FIN", C, false)), "Text")));
      await $.mset((await $.mv((await $.wv([$t72], "swDataModule", C, false)), "OracleDataSet2")), "Active", (await $.wv([$t72], "True", C, false)));
      await $.mset((await $.mv((await $.wv([$t72], "swDataModule", C, false)), "mt_select")), "Active", (await $.wv([$t72], "True", C, false)));
      if ($.truthy($.ne((await $.mv((await $.wv([$t72], "FIN", C, false)), "Text")), ""))) {
        await $.mset((await $.wv([$t72], "FIN", C, false)), "color", (await $.wv([$t72], "clWindow", C, false)));
      }
      await $.mset((await $.wv([$t72], "MainPanel", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
      { const $t73 = await $.iset((await $.mv((await $.mv((await $.wv([$t72], "swDataModule", C, false)), "mt_select")), "SQL")), [2], $.add($.add($.add(" and ", (await $.mv((await $.wv([$t72], "fin", C, false)), "Text"))), " is not null"), " order by sw_field")); if ($t73 !== undefined) { await $.mset((await $.mv((await $.wv([$t72], "swDataModule", C, false)), "mt_select")), "SQL", $t73); } }
      { const $t74 = $.sub((await $.mv((await $.wv([$t72], "OUT_FORM", C, false)), "ComponentCount")), 1);
        await $.wset([$t72], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t75 = true;
        for (;;) {
          if (!$t75) { await $.wset([$t72], "i", $.succ((await $.wv([$t72], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t75 = false;
          if (!($.ord((await $.wv([$t72], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t74))) break;
          if ($.truthy(($.eq((await $.mv((await $.idx((await $.mv((await $.wv([$t72], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t72], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassType")), (await $.wv([$t72], "TPanel", C, false)))))) {
            await $.wset([$t72], "k", $.add((await $.wv([$t72], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            {
              const $t76 = (await $.mv((await $.wv([$t72], "swdatamodule", C, false)), "mt_select"));
              await $.stmt((await $.wcall([$t72, $t76], "setvariable", ["Panelname", (await $.mv((await $.idx((await $.mv((await $.wv([$t72, $t76], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t72, $t76], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
              await $.stmt($.wcall([$t72, $t76], "close", [], C));
              await $.stmt($.wcall([$t72, $t76], "open", [], C));
              if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t72, $t76], "swdatamodule", C, false)), "mt_select")), "RecordCount")), 0))) {
                await $.mset((await $.idx((await $.mv((await $.wv([$t72, $t76], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t72, $t76], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t72, $t76], "True", C, false)));
              }
            }
          }
          await $.tick();
        }
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t72], "fin", C, false)), "Text")), "MT103"))) {
        await $.mset((await $.wv([$t72], "MF20_edit", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF20_REFERENCE"])), "asstring")));
        await $.mset((await $.wv([$t72], "MF23b_edit", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF23B"])), "asstring")));
        await $.mset((await $.wv([$t72], "MF26T_edit", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF26T"])), "asstring")));
        await $.mset((await $.wv([$t72], "mf32_date", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_DATE"])), "AsDateTime")));
        await $.mset((await $.wv([$t72], "mf32a_val", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_CURR"])), "asstring")));
        await $.mset((await $.wv([$t72], "Edit11_mf32a", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_AMOUNT"])), "asstring")));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "asstring")), ":50A:"))) {
          await $.mset((await $.wv([$t72], "MF50A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "asstring")));
          await $.mset((await $.wv([$t72], "CMF50", C, false)), "ItemIndex", 1);
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "asstring")), ":50D:"))) {
          await $.mset((await $.wv([$t72], "MF50D", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit4_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo3_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "asstring")), ":50K:"))) {
          await $.mset((await $.wv([$t72], "MF50K", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit3_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF50", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M52"])), "asstring")), ":52A:"))) {
          await $.mset((await $.wv([$t72], "MF52A", C, false)), "Visible", (await $.wv([$t72], "TRUE", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF52", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF52_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF52", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF52_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF52", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF52_NAME$ADRESS"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M52"])), "asstring")), ":52D:"))) {
          await $.mset((await $.wv([$t72], "MF52D", C, false)), "Visible", (await $.wv([$t72], "TRUE", C, false)));
          await $.mset((await $.wv([$t72], "Edit3_MF52", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF52_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF52", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF52_NAME$ADRESS"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M53"])), "asstring")), ":53A:"))) {
          await $.mset((await $.wv([$t72], "MF53A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M53"])), "asstring")), ":53B:"))) {
          await $.mset((await $.wv([$t72], "MF53B", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit3_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit4_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_BIC"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M53"])), "asstring")), ":53D:"))) {
          await $.mset((await $.wv([$t72], "MF53D", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit5_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF53", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF53_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M54"])), "asstring")), ":54A:"))) {
          await $.mset((await $.wv([$t72], "MF54A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M54"])), "asstring")), ":54B:"))) {
          await $.mset((await $.wv([$t72], "MF54B", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit4_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit5_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_BIC"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M54"])), "asstring")), ":54D:"))) {
          await $.mset((await $.wv([$t72], "MF54D", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit6_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF54", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF54_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M55"])), "asstring")), ":55A:"))) {
          await $.mset((await $.wv([$t72], "MF55A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M55"])), "asstring")), ":55B:"))) {
          await $.mset((await $.wv([$t72], "MF55B", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit3_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit4_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_BIC"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M55"])), "asstring")), ":55D:"))) {
          await $.mset((await $.wv([$t72], "MF55D", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit5_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF55", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF55_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M56"])), "asstring")), ":56A:"))) {
          await $.mset((await $.wv([$t72], "MF56A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF56", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF56_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF56", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF56_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF56", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF56_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M56"])), "asstring")), ":56C:"))) {
          await $.mset((await $.wv([$t72], "MF56C", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit3_MF56", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF56_ACCOUNT"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M56"])), "asstring")), ":56D:"))) {
          await $.mset((await $.wv([$t72], "MF56D", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit4_MF56", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF56_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF56", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF56_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "asstring")), ":58D:"))) {
          await $.mset((await $.wv([$t72], "MF57A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit2_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_BIC"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "asstring")), ":57B:"))) {
          await $.mset((await $.wv([$t72], "MF57B", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit3_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit4_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_BIC"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "asstring")), ":58C:"))) {
          await $.mset((await $.wv([$t72], "MF57C", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit5_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_ACCOUNT"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "asstring")), ":57D:"))) {
          await $.mset((await $.wv([$t72], "MF57D", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit6_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo2_MF57", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF58_NAME$LOCATION"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M59"])), "asstring")), ":59A:"))) {
          await $.mset((await $.wv([$t72], "MF59A", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit2_MF59", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF59_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Edit3_MF59", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF59_NAME$ADRESS"])), "asstring")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["M58"])), "asstring")), ":58:"))) {
          await $.mset((await $.wv([$t72], "MF59", C, false)), "Visible", (await $.wv([$t72], "True", C, false)));
          await $.mset((await $.wv([$t72], "Edit1_MF59", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF59_ACCOUNT"])), "asstring")));
          await $.mset((await $.wv([$t72], "Memo1_MF59", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF59_NAME$ADRESS"])), "asstring")));
        }
        await $.mset((await $.wv([$t72], "MF70_memo", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MF59_NAME$ADRESS"])), "asstring")));
      }
      await $.stmt($.wcall([$t72], "ShowModal", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş tarix araliğina informasiya yoxdu"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_EDIT"]])));
  await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["senderlt"])), "AsString")), "103"))) {
    await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", (await $.v(C, "v_refrsh"))])));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_EDIT"]])));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT103")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["FINCOPY"])), "AsString")), "AZN")))))) {
        await $.set(C, "MT103", (await $.mcall((await $.v(C, "TMT103")), "Create", [Self])));
        await $.mcall((await $.v(C, "MT103")), "ShowModal", []);
      } else {
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT103")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["FINCOPY"])), "AsString")), "AZN")))))) {
          await $.set(C, "MT103AZN", (await $.mcall((await $.v(C, "TMT103AZN")), "Create", [Self])));
          await $.mcall((await $.v(C, "MT103AZN")), "ShowModal", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Redakteet1Click", async function Redakteet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "FieldByName", ["FINCOPY"])), "AsString")), "AZN")))) {
      await $.mcall((await $.v(C, "Form7")), "ShowModal", []);
    } else {
      await $.mcall((await $.v(C, "MT103Show")), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Redaktet1Click", async function Redaktet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "rdkİN", (await $.mcall((await $.v(C, "TrdkİN")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "rdkİN")), "edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Acount"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "rdkİN")), "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["voin2"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "rdkİN")), "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["ID"])), "AsString")));
  await $.mcall((await $.v(C, "rdkİN")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = (await $.v(C, "SWDataModule"));
    if ($.truthy((await $.mv((await $.wv([$t77], "sw_out", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t77], "sw_out", C, false)), "Refresh", []);
    } else {
      await $.mcall((await $.wv([$t77], "sw_out", C, false)), "Open", []);
    }
    if ($.truthy((await $.mv((await $.wv([$t77], "sw_out_2", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t77], "sw_out_2", C, false)), "Refresh", []);
    } else {
      await $.mcall((await $.wv([$t77], "sw_out_2", C, false)), "Open", []);
    }
    if ($.truthy((await $.mv((await $.wv([$t77], "sw_out3", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t77], "sw_out3", C, false)), "Refresh", []);
    } else {
      await $.mcall((await $.wv([$t77], "sw_out3", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "DateTimePicker4KeyPress", async function DateTimePicker4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSWIFT_MAIN", "DateTimePicker3KeyPress", async function DateTimePicker3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSWIFT_MAIN", "AddTransExecute", async function AddTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Grid_out")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger")), 2))) {
    { const $t78 = $.sub((await $.mv((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "Count")), 1);
      L0["i"] = 0;
      let $t79 = true;
      for (;;) {
        if (!$t79) { L0["i"] = $.succ(L0["i"], 1); }
        $t79 = false;
        if (!($.ord(L0["i"]) <= $.ord($t78))) break;
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "items")), [L0["i"]]))]))])));
        { const $t80 = (await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Əməliyyatlar günün  sənədlərinə əlavə edilsin ?", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "asinteger"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
          if ($.eq($t80, (await $.v(C, "mryes")))) {
            await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "Refresh", []);
            await $.mcall((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "Clear", []);
          }
          else if ($.eq($t80, (await $.v(C, "mrno")))) {
            return L0.result;
          }
          else if ($.eq($t80, (await $.v(C, "mrcancel")))) {
            break;
          }
          else if ($.eq($t80, (await $.v(C, "mrall")))) {
            { const $t81 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "Count"))])), " Sayta əmaəliyyat əlavə edildi"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
              if ($.eq($t81, (await $.v(C, "mryes")))) {
                { const $t82 = $.sub((await $.mv((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "Count")), 1);
                  L0["j"] = 0;
                  let $t83 = true;
                  for (;;) {
                    if (!$t83) { L0["j"] = $.succ(L0["j"], 1); }
                    $t83 = false;
                    if (!($.ord(L0["j"]) <= $.ord($t82))) break;
                    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                    L0["formats"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "asstring"));
                    {
                      const $t84 = (await $.mv((await $.v(C, "SWDataModule")), "setprow"));
                      await $.stmt((await $.wcall([$t84], "SetVariable", ["Q", (await $.wv([$t84], "formats", { get: async () => L0["formats"], set: async (v) => { L0["formats"] = v; }, local: true }, false))], C)));
                    }
                    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "setprow")), "Close", []);
                    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "setprow")), "Open", []);
                    L0["kredit"] = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "setprowKREDIT")), "AsString"));
                    L0["debet"] = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "setprowDEBET")), "AsString"));
                    L0["summa"] = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "setprowSUMM")), "AsString"));
                    L0["destination"] = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "setprowDESTINATION")), "AsString"));
                    L0["ids"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "Asinteger"));
                    {
                      const $t85 = (await $.mv((await $.v(C, "SWDataModule")), "transac"));
                      await $.stmt((await $.wcall([$t85], "SetVariable", [":IDS1", (await $.wv([$t85], "ids", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
                    }
                    { const $t86 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "transac")), "SQL")), [0], ($.add($.add($.add($.add($.add($.add($.add($.add($.add("select a.", L0["kredit"]), " as kredit, a."), L0["debet"]), " as debet, a."), L0["summa"]), " as summa, a."), L0["destination"]), " as destination, id "), " from sw_out_new a where id=:ids1 "))); if ($t86 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "transac")), "SQL", $t86); } }
                    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "Close", []);
                    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "Open", []);
                    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["add_transaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "fieldbyname", ["ID"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "fieldbyname", ["debet"])), "asstring")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "fieldbyname", ["kredit"])), "asstring")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "fieldbyname", ["summa"])), "asstring")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "FieldByName", ["MF32A_DATE"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "transac")), "fieldbyname", ["DESTINATION"])), "asstring")), L0["vbic"]]])));
                    await $.tick();
                  }
                }
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", [])));
                await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "Refresh", []);
                await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "Refresh", []);
                await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "Refresh", []);
                await $.mcall((await $.mv((await $.v(C, "Grid_out")), "SelectedRows")), "Clear", []);
                break;
              }
              else if ($.eq($t81, (await $.v(C, "mrno")))) {
                return L0.result;
              }
            }
          }
        }
        await $.tick();
      }
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["sənəd artıq günün sənədlərinə əlavə edilib"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "openday")), "Click", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "Refresh", []);
  await $.mset((await $.v(C, "edit3")), "Text", $.add($.add("Bu gün verifikasiya olunacaq ümumi məbləğ = ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_amount")), "FieldByName", ["summ"])), "AsFloat"))]))), " AZN"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "NewMtExecute", async function NewMtExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OUT_FORM")), "Caption", (await $.mv((await $.mv((await $.v(C, "OUT_FORM")), "FIN")), "Text")));
  await $.mset((await $.mv((await $.v(C, "swDataModule")), "OracleDataSet2")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "swDataModule")), "mt_select")), "Active", true);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "OUT_FORM")), "FIN")), "Text")), ""))) {
    await $.mset((await $.mv((await $.v(C, "OUT_FORM")), "FIN")), "color", (await $.v(C, "clWindow")));
  }
  await $.mset((await $.mv((await $.v(C, "OUT_FORM")), "MainPanel")), "Visible", true);
  { const $t87 = await $.iset((await $.mv((await $.mv((await $.v(C, "swDataModule")), "mt_select")), "SQL")), [2], $.add($.add($.add(" and ", (await $.mv((await $.mv((await $.v(C, "OUT_FORM")), "fin")), "Text"))), " is not null"), " order by sw_field")); if ($t87 !== undefined) { await $.mset((await $.mv((await $.v(C, "swDataModule")), "mt_select")), "SQL", $t87); } }
  { const $t88 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t89 = true;
    for (;;) {
      if (!$t89) { L0["i"] = $.succ(L0["i"], 1); }
      $t89 = false;
      if (!($.ord(L0["i"]) <= $.ord($t88))) break;
      if ($.truthy(($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TPanel")))))) {
        L0["k"] = $.add(L0["k"], 1);
        {
          const $t90 = (await $.mv((await $.v(C, "swdatamodule")), "mt_select"));
          await $.stmt((await $.wcall([$t90], "setvariable", ["Panelname", (await $.mv((await $.idx((await $.mv((await $.wv([$t90], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t90], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
          await $.stmt($.wcall([$t90], "close", [], C));
          await $.stmt($.wcall([$t90], "open", [], C));
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t90], "swdatamodule", C, false)), "mt_select")), "RecordCount")), 0))) {
            await $.mset((await $.idx((await $.mv((await $.wv([$t90], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t90], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t90], "True", C, false)));
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ComboitemsinsExecute", async function ComboitemsinsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t91 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t92 = true;
    for (;;) {
      if (!$t92) { L0["i"] = $.succ(L0["i"], 1); }
      $t92 = false;
      if (!($.ord(L0["i"]) <= $.ord($t91))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TComboBox"))))) {
        {
          const $t93 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
          await $.stmt((await $.wcall([$t93], "setvariable", ["Comboname", (await $.mv((await $.idx((await $.mv((await $.wv([$t93], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t93], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
          await $.stmt($.wcall([$t93], "close", [], C));
          await $.stmt($.wcall([$t93], "open", [], C));
          { const $t94 = $.add((await $.mv((await $.mv((await $.wv([$t93], "swDataModule", C, false)), "ComboItems")), "RecordCount")), 1);
            await $.wset([$t93], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
            let $t95 = true;
            for (;;) {
              if (!$t95) { await $.wset([$t93], "j", $.succ((await $.wv([$t93], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
              $t95 = false;
              if (!($.ord((await $.wv([$t93], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t94))) break;
              if ($.truthy($.ne((await $.mv(((await $.idx((await $.mv((await $.wv([$t93], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t93], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), 0))) {
                if ($.truthy($.eq((await $.wv([$t93], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1))) {
                  await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t93], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t93], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "add", [""])));
                } else {
                  if ($.truthy($.eq((await $.idx((await $.mv(((await $.idx((await $.mv((await $.wv([$t93], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t93], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Items")), [$.add((await $.wv([$t93], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 2)])), ""))) {
                    await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t93], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t93], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "add", [(await $.mv((await $.mv((await $.wv([$t93], "swDataModule", C, false)), "ComboItemsCATEGORY")), "asstring"))])));
                    await $.mcall((await $.mv((await $.wv([$t93], "swDataModule", C, false)), "ComboItems")), "Next", []);
                  }
                }
              }
              await $.tick();
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fileformat": 0, "v_currdir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_currdir"] = (await $.v(C, "GetCurrentDir"));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "settings")), "open", []);
  await $.set(C, "OutFilePath", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "settingsPATH")), "asstring")));
  { const $t96 = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "settingsINN_FILETYPE")), "AsInteger"));
    if ($.eq($t96, 0)) {
      await $.set(C, "struktur", "SWF");
    }
    else if ($.eq($t96, 1)) {
      await $.set(C, "struktur", "FIN");
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "sw_out_FileListBox")), "ApplyFilePath", [(await $.v(C, "OutFilePath"))])));
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "Update", []);
  if ($.truthy($.eq((await $.v(C, "struktur")), "SWF"))) {
    await $.mset((await $.v(C, "sw_out_FileListBox")), "Mask", ("*.SWF"));
  }
  if ($.truthy($.eq((await $.v(C, "struktur")), "FIN"))) {
    await $.mset((await $.v(C, "sw_out_FileListBox")), "Mask", ("*.fin"));
  }
  L0["fileformat"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "FieldByName", ["INN_FILETYPE"])), "asInteger"));
  if ($.truthy($.eq(L0["fileformat"], 0))) {
    await $.mcall((await $.v(C, "Konvertex")), "Execute", []);
  }
  if ($.truthy($.eq(L0["fileformat"], 1))) {
    await $.mcall((await $.v(C, "konvert3")), "Execute", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "sw_out_FileListBox")), "ApplyFilePath", [L0["v_currdir"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ac1Click", async function ac1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ac1")), "Visible", false);
  await $.mset((await $.v(C, "six1")), "visible", true);
  await $.mset((await $.v(C, "threebox")), "Visible", false);
  await $.mset((await $.v(C, "twobox")), "Visible", false);
  await $.mset((await $.v(C, "onebox")), "Align", (await $.v(C, "alClient")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "six1Click", async function six1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ac1")), "Visible", true);
  await $.mset((await $.v(C, "six1")), "visible", false);
  await $.mset((await $.v(C, "onebox")), "Align", (await $.v(C, "alTop")));
  await $.mset((await $.v(C, "onebox")), "Height", 200);
  await $.mset((await $.v(C, "twobox")), "Visible", true);
  await $.mset((await $.v(C, "threebox")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "acClick", async function acClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ac")), "Visible", false);
  await $.mset((await $.v(C, "six")), "visible", true);
  await $.mset((await $.v(C, "threebox")), "Visible", false);
  await $.mset((await $.v(C, "onebox")), "Visible", false);
  await $.mset((await $.v(C, "twobox")), "Align", (await $.v(C, "alClient")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "sixClick", async function sixClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ac")), "Visible", true);
  await $.mset((await $.v(C, "six")), "visible", false);
  await $.mset((await $.v(C, "onebox")), "Visible", true);
  await $.mset((await $.v(C, "twobox")), "Align", (await $.v(C, "alTop")));
  await $.mset((await $.v(C, "twobox")), "Height", 200);
  await $.mset((await $.v(C, "threebox")), "visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ac2Click", async function ac2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ac2")), "Visible", false);
  await $.mset((await $.v(C, "six2")), "visible", true);
  await $.mset((await $.v(C, "twobox")), "Visible", false);
  await $.mset((await $.v(C, "onebox")), "Visible", false);
  await $.mset((await $.v(C, "threebox")), "Align", (await $.v(C, "alClient")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "six2Click", async function six2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ac2")), "Visible", true);
  await $.mset((await $.v(C, "six2")), "visible", false);
  await $.mset((await $.v(C, "onebox")), "visible", true);
  await $.mset((await $.v(C, "twobox")), "visible", true);
  await $.mset((await $.v(C, "threebox")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ArchiveClick", async function ArchiveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_ARCHIVE"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["new_dat", []])));
  await $.stmt((await $.call(C, "ShowMessage", ["Məlumatlar arxivə göndərildi!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "comitClick", async function comitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "AsString")), "MT102")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "AsString")), "MT103")))))) {
    await $.mcall((await $.v(C, "cesking")), "Click", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["status"])), "asinteger")), 2))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_COMMIT"]])));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "settings")), "FieldByName", ["showr"])), "AsInteger")), 0))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "AsString")), "MT102")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "AsString")), "MT103")))))) {
        await $.mcall((await $.v(C, "AddInTransNew")), "Execute", []);
        await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
        await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
        await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
        await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "Refresh", []);
      }
    }
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in2")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "printClick", async function printClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_PRINT"]])));
  await $.set(C, "a", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyname", ["all_text2"])), "asstring")));
  await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", (await $.v(C, "a")));
  await $.mcall((await $.v(C, "printform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "AddInTransExecute", async function AddInTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "hdebet": '', "hkredit": '', "tramount": 0, "trdescription": '', "trdescription2": '', "inn": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Gridin")), "SetFocus", []);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    { const $t97 = (await $.call(C, "MessageDlg", ["Əməliyyatlar günün sənədlarinə əlavə edilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel"))], 0]));
      if ($.eq($t97, (await $.v(C, "mryes")))) {
        await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "First", []);
        { const $t98 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "RecordCount")), 1);
          L0["i"] = 0;
          let $t99 = true;
          for (;;) {
            if (!$t99) { L0["i"] = $.succ(L0["i"], 1); }
            $t99 = false;
            if (!($.ord(L0["i"]) <= $.ord($t98))) break;
            if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger")), 11)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["MT"])), "asstring")), "MT103")))))) {
              L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["id"])), "asinteger"));
              L0["hdebet"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["bic"])), "AsString"));
              L0["hkredit"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["ACOUNT"])), "AsString"));
              L0["tramount"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["valu"])), "AsFloat"));
              L0["trdescription"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["description"])), "asstring"));
              L0["trdescription2"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["description2"])), "asstring"));
              L0["inn"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["TAX"])), "asstring"));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["add_in_transactions", [L0["id"], L0["hdebet"], L0["hkredit"], L0["tramount"], L0["trdescription"], L0["trdescription2"], L0["inn"]]])));
            }
            await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "Next", []);
            await $.tick();
          }
        }
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 8))) {
    await $.set(C, "IN_edit", (await $.mcall((await $.v(C, "TIN_edit")), "Create", [Self])));
    await $.mcall((await $.v(C, "IN_edit")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_DELETE"]])));
  await $.mcall((await $.v(C, "Delete")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "opendayClick", async function opendayClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_back"]])));
  await $.mcall((await $.v(C, "back")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "GRIDOUT2DrawColumnCell", async function GRIDOUT2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t100 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t100], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t101 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t100], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t101, (await $.wv([$t100], "notcreate", C, false)))) {
          await $.wset([$t100], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t101, (await $.wv([$t100], "created", C, false)))) {
          await $.wset([$t100], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t101, (await $.wv([$t100], "commited", C, false)))) {
          await $.wset([$t100], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t101, (await $.wv([$t100], "Problemed", C, false)))) {
          await $.wset([$t100], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t101, (await $.wv([$t100], "Problemed2", C, false)))) {
          await $.wset([$t100], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t101, 55)) {
          await $.wset([$t100], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t100], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t100], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t100], "swImageList1", C, false)), "Draw", [(await $.wv([$t100], "Canvas", C, false)), (await $.mv((await $.wv([$t100], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t100], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t100], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t100], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t100], "DefaultDrawColumnCell", [(await $.wv([$t100], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t100], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t100], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t100], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSWIFT_MAIN", "GRIDOUT2KeyDown", async function GRIDOUT2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_f5"))))) {
    await $.stmt((await $.call(C, "RefreshButtonClick", [(await $.v(C, "RefreshButton"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSWIFT_MAIN", "gridout3DrawColumnCell", async function gridout3DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t102 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t102], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t103 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t102], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t103, (await $.wv([$t102], "notcreate", C, false)))) {
          await $.wset([$t102], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t103, (await $.wv([$t102], "created", C, false)))) {
          await $.wset([$t102], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t103, (await $.wv([$t102], "commited", C, false)))) {
          await $.wset([$t102], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t103, (await $.wv([$t102], "Problemed", C, false)))) {
          await $.wset([$t102], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t103, (await $.wv([$t102], "Problemed2", C, false)))) {
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t102], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t102], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t102], "swImageList1", C, false)), "Draw", [(await $.wv([$t102], "Canvas", C, false)), (await $.mv((await $.wv([$t102], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t102], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t102], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t102], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t102], "DefaultDrawColumnCell", [(await $.wv([$t102], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t102], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t102], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t102], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSWIFT_MAIN", "gridout3KeyDown", async function gridout3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_f5"))))) {
    await $.stmt((await $.call(C, "RefreshButtonClick", [(await $.v(C, "RefreshButton"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSWIFT_MAIN", "GridINDblClick", async function GridINDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "printClick", [(await $.v(C, "print"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "GridINDrawColumnCell", async function GridINDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t104 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t104], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t105 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t104], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t105, (await $.wv([$t104], "notcreate", C, false)))) {
          await $.wset([$t104], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t105, (await $.wv([$t104], "created", C, false)))) {
          await $.wset([$t104], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t105, (await $.wv([$t104], "commited", C, false)))) {
          await $.wset([$t104], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t105, (await $.wv([$t104], "Problemed", C, false)))) {
          await $.wset([$t104], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t105, 11)) {
          await $.wset([$t104], "ImageIndex", 42, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t105, 12)) {
          await $.wset([$t104], "ImageIndex", 43, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t105, (await $.wv([$t104], "checking", C, false)))) {
          await $.wset([$t104], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t104], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t104], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t104], "swImageList1", C, false)), "Draw", [(await $.wv([$t104], "Canvas", C, false)), (await $.mv((await $.wv([$t104], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t104], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t104], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t104], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t104], "DefaultDrawColumnCell", [(await $.wv([$t104], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t104], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t104], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t104], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIN")), "DataSource")), "DataSet")), "FieldByName", ["description"])), "AsString")), "900"))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "GridIN")), "Canvas")), "Brush")), "Color", (await $.v(C, "Clred")));
    await $.stmt((await $.mcall((await $.v(C, "GridIN")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIN")), "DataSource")), "DataSet")), "FieldByName", ["description"])), "AsString")), "700"))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "GridIN")), "Canvas")), "Brush")), "Color", (await $.v(C, "Clred")));
    await $.stmt((await $.mcall((await $.v(C, "GridIN")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.func("ExtractDesc", async function ExtractDesc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"astring": $.copyArg(p0), result: '', "index": 0};
  await $.fixArgs(L0, ["astring"]);
  L0["result"] = "";
  L0["index"] = (await $.call(C, "Pos", ["desc", L0["astring"]]));
  if ($.truthy($.gt(L0["index"], 0))) {
    L0["result"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["astring"], L0["index"], (await $.call(C, "Length", [L0["astring"]]))]))]));
  }
  return L0.result;
}, {"params": ["AString"], "kind": "function", "ptypes": ["String"]});
  U.method("TSWIFT_MAIN", "GridINTitleClick", async function GridINTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "descpart": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t106 = (await $.mv((await $.v(C, "SWDataModule")), "sw_in"));
      await $.stmt($.wcall([$t106], "close", [], C));
      await $.wset([$t106], "DescPart", (await $.wcall([$t106], "ExtractDesc", [(await $.idx((await $.wv([$t106], "sql", C, false)), [46]))], C)), { get: async () => L0["descpart"], set: async (v) => { L0["descpart"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t106], "DescPart", { get: async () => L0["descpart"], set: async (v) => { L0["descpart"] = v; }, local: true }, false)), ""))) {
        { const $t107 = await $.iset((await $.wv([$t106], "sql", C, false)), [46], $.add($.add("order by ", (await $.wv([$t106], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))), " asc")); if ($t107 !== undefined) { await $.wset([$t106], "sql", $t107, C); } }
      } else {
        { const $t108 = await $.iset((await $.wv([$t106], "sql", C, false)), [46], $.add($.add("order by ", (await $.wv([$t106], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))), " desc")); if ($t108 !== undefined) { await $.wset([$t106], "sql", $t108, C); } }
      }
      await $.stmt($.wcall([$t106], "open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSWIFT_MAIN", "grid_outTitleClick", async function grid_outTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t109 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t109], "SortPosition", (await $.mcall((await $.wv([$t109], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t109], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t109], "Refresh", [], C));
    } finally {
      { const $t110 = await $.iset((await $.wv([$t109], "SQL", C, false)), [(await $.wv([$t109], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t109], "EmptyStr", C, false))); if ($t110 !== undefined) { await $.wset([$t109], "SQL", $t110, C); } }
      await $.mset((await $.wv([$t109], "Screen", C, false)), "Cursor", (await $.wv([$t109], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSWIFT_MAIN", "Hesabiyoxla1Click", async function Hesabiyoxla1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Checkinacc", (await $.mcall((await $.v(C, "TCheckinacc")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "Checkinacc")), "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Acount"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Checkinacc")), "Edit3")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["id"])), "asinteger"))])));
  await $.mcall((await $.v(C, "Checkinacc")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "GRIDOUT2TitleClick", async function GRIDOUT2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "gridout2")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t111 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "gridout2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t111], "SortPosition", (await $.mcall((await $.wv([$t111], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t111], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t111], "Refresh", [], C));
    } finally {
      { const $t112 = await $.iset((await $.wv([$t111], "SQL", C, false)), [(await $.wv([$t111], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t111], "EmptyStr", C, false))); if ($t112 !== undefined) { await $.wset([$t111], "SQL", $t112, C); } }
      await $.mset((await $.wv([$t111], "Screen", C, false)), "Cursor", (await $.wv([$t111], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSWIFT_MAIN", "gridout3TitleClick", async function gridout3TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t113 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t113], "SortPosition", (await $.mcall((await $.wv([$t113], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t113], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t113], "Refresh", [], C));
    } finally {
      { const $t114 = await $.iset((await $.wv([$t113], "SQL", C, false)), [(await $.wv([$t113], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t113], "EmptyStr", C, false))); if ($t114 !== undefined) { await $.wset([$t113], "SQL", $t114, C); } }
      await $.mset((await $.wv([$t113], "Screen", C, false)), "Cursor", (await $.wv([$t113], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSWIFT_MAIN", "DeleteExecute", async function DeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "Gridin")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Gridin")), "SetFocus", []);
  }
  {
    const $t115 = (await $.v(C, "Gridin"));
    const $t116 = (await $.wv([$t115], "SelectedRows", C, false));
    const $t117 = (await $.mv((await $.wv([$t115, $t116], "DataSource", C, false)), "DataSet"));
    const $t118 = (await $.wv([$t115, $t116, $t117], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t115, $t116, $t117, $t118], "Count", C, false)), 0))) {
        await $.wset([$t115, $t116, $t117, $t118], "CurrentRowSelected", (await $.wv([$t115, $t116, $t117, $t118], "True", C, false)), C);
      }
      { const $t119 = $.sub((await $.wv([$t115, $t116, $t117, $t118], "Count", C, false)), 1);
        await $.wset([$t115, $t116, $t117, $t118], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t120 = true;
        for (;;) {
          if (!$t120) { await $.wset([$t115, $t116, $t117, $t118], "Index", $.succ((await $.wv([$t115, $t116, $t117, $t118], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t120 = false;
          if (!($.ord((await $.wv([$t115, $t116, $t117, $t118], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t119))) break;
          await $.stmt((await $.wcall([$t115, $t116, $t117, $t118], "GotoBookmark", [(await $.wcall([$t115, $t116, $t117, $t118], "Pointer", [(await $.idx((await $.wv([$t115, $t116, $t117, $t118], "Items", C, false)), [(await $.wv([$t115, $t116, $t117, $t118], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t115, $t116, $t117, $t118], "TransactionID", (await $.mv((await $.wcall([$t115, $t116, $t117, $t118], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t115, $t116, $t117, $t118], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t121 = (await $.wcall([$t115, $t116, $t117, $t118], "MessageDlg", [(await $.wcall([$t115, $t116, $t117, $t118], "Format", ["Əməliyyatlar #%d silinsinmi?", [(await $.wv([$t115, $t116, $t117, $t118], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t115, $t116, $t117, $t118], "mtConfirmation", C, false)), [(await $.wv([$t115, $t116, $t117, $t118], "mbYes", C, false)), (await $.wv([$t115, $t116, $t117, $t118], "mbNo", C, false)), (await $.wv([$t115, $t116, $t117, $t118], "mbCancel", C, false)), (await $.wv([$t115, $t116, $t117, $t118], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t121, (await $.wv([$t115, $t116, $t117, $t118], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t121, (await $.wv([$t115, $t116, $t117, $t118], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t121, (await $.wv([$t115, $t116, $t117, $t118], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t115, $t116, $t117, $t118], "MessageDlg", [(await $.wcall([$t115, $t116, $t117, $t118], "Format", ["%d  sayda əməliyyat silinsinmi ?", [$.sub((await $.wv([$t115, $t116, $t117, $t118], "Count", C, false)), (await $.wv([$t115, $t116, $t117, $t118], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t115, $t116, $t117, $t118], "mtConfirmation", C, false)), [(await $.wv([$t115, $t116, $t117, $t118], "mbYes", C, false)), (await $.wv([$t115, $t116, $t117, $t118], "mbCancel", C, false))], 0], C)), (await $.wv([$t115, $t116, $t117, $t118], "mrYes", C, false))))) {
                  await $.wset([$t115, $t116, $t117, $t118], "WaitNextConfirm", (await $.wv([$t115, $t116, $t117, $t118], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t115, $t116, $t117, $t118], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t115, $t116, $t117, $t118], "SWDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_in_delete", [(await $.wv([$t115, $t116, $t117, $t118], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t115, $t116, $t117, $t118], "WillRefresh", (await $.wv([$t115, $t116, $t117, $t118], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t115, $t116, $t117, $t118], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.wv([$t115, $t116, $t117, $t118], "SWDataModule", C, false)), "sw_in")), "refresh", []);
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "backClick", async function backClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "RecordCount")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_BACK"]])));
    await $.mcall((await $.v(C, "geri")), "Execute", []);
  } else {
    await $.mset((await $.v(C, "Memo2")), "Text", "Əməliyyatlar qaytarılmadı!");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "strlist": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OpenDialog1")), "Options", [(await $.v(C, "ofAllowMultiSelect")), (await $.v(C, "ofFileMustExist"))]);
  if ($.truthy((await $.mv((await $.v(C, "OpenDialog1")), "Execute")))) {
    L0["strlist"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    try {
      { const $t122 = $.sub((await $.mv((await $.mv((await $.v(C, "OpenDialog1")), "Files")), "Count")), 1);
        L0["i"] = 0;
        let $t123 = true;
        for (;;) {
          if (!$t123) { L0["i"] = $.succ(L0["i"], 1); }
          $t123 = false;
          if (!($.ord(L0["i"]) <= $.ord($t122))) break;
          await $.stmt((await $.mcall(L0["strlist"], "LoadFromFile", [(await $.idx((await $.mv((await $.v(C, "OpenDialog1")), "Files")), [L0["i"]]))])));
          await $.tick();
        }
      }
    } finally {
      await $.mcall(L0["strlist"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "geriExecute", async function geriExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "GRIDOUT2")), "CanFocus")))) {
    await $.mcall((await $.v(C, "GRIDOUT2")), "SetFocus", []);
  }
  {
    const $t124 = (await $.v(C, "GRIDOUT2"));
    const $t125 = (await $.wv([$t124], "SelectedRows", C, false));
    const $t126 = (await $.mv((await $.wv([$t124, $t125], "DataSource", C, false)), "DataSet"));
    const $t127 = (await $.wv([$t124, $t125, $t126], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t124, $t125, $t126, $t127], "Count", C, false)), 0))) {
        await $.wset([$t124, $t125, $t126, $t127], "CurrentRowSelected", (await $.wv([$t124, $t125, $t126, $t127], "True", C, false)), C);
      }
      { const $t128 = $.sub((await $.wv([$t124, $t125, $t126, $t127], "Count", C, false)), 1);
        await $.wset([$t124, $t125, $t126, $t127], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t129 = true;
        for (;;) {
          if (!$t129) { await $.wset([$t124, $t125, $t126, $t127], "Index", $.succ((await $.wv([$t124, $t125, $t126, $t127], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t129 = false;
          if (!($.ord((await $.wv([$t124, $t125, $t126, $t127], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t128))) break;
          await $.stmt((await $.wcall([$t124, $t125, $t126, $t127], "GotoBookmark", [(await $.wcall([$t124, $t125, $t126, $t127], "Pointer", [(await $.idx((await $.wv([$t124, $t125, $t126, $t127], "Items", C, false)), [(await $.wv([$t124, $t125, $t126, $t127], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t124, $t125, $t126, $t127], "TransactionID", (await $.mv((await $.wcall([$t124, $t125, $t126, $t127], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t124, $t125, $t126, $t127], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t130 = (await $.wcall([$t124, $t125, $t126, $t127], "MessageDlg", [(await $.wcall([$t124, $t125, $t126, $t127], "Format", ["Əməliyyat  #%d qaytarılsın?", [(await $.wv([$t124, $t125, $t126, $t127], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t124, $t125, $t126, $t127], "mtConfirmation", C, false)), [(await $.wv([$t124, $t125, $t126, $t127], "mbYes", C, false)), (await $.wv([$t124, $t125, $t126, $t127], "mbNo", C, false)), (await $.wv([$t124, $t125, $t126, $t127], "mbCancel", C, false)), (await $.wv([$t124, $t125, $t126, $t127], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t130, (await $.wv([$t124, $t125, $t126, $t127], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t130, (await $.wv([$t124, $t125, $t126, $t127], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t130, (await $.wv([$t124, $t125, $t126, $t127], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t124, $t125, $t126, $t127], "MessageDlg", [(await $.wcall([$t124, $t125, $t126, $t127], "Format", ["%d  sayda əməliyyat qaytarılsın ?", [$.sub((await $.wv([$t124, $t125, $t126, $t127], "Count", C, false)), (await $.wv([$t124, $t125, $t126, $t127], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t124, $t125, $t126, $t127], "mtConfirmation", C, false)), [(await $.wv([$t124, $t125, $t126, $t127], "mbYes", C, false)), (await $.wv([$t124, $t125, $t126, $t127], "mbCancel", C, false))], 0], C)), (await $.wv([$t124, $t125, $t126, $t127], "mrYes", C, false))))) {
                  await $.wset([$t124, $t125, $t126, $t127], "WaitNextConfirm", (await $.wv([$t124, $t125, $t126, $t127], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t124, $t125, $t126, $t127], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t124, $t125, $t126, $t127], "SWDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_back", [(await $.wv([$t124, $t125, $t126, $t127], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t124, $t125, $t126, $t127], "WillRefresh", (await $.wv([$t124, $t125, $t126, $t127], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t124, $t125, $t126, $t127], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.wv([$t124, $t125, $t126, $t127], "SWDataModule", C, false)), "sw_out_2")), "refresh", []);
      }
      await $.mcall((await $.mv((await $.wv([$t124, $t125, $t126, $t127], "SWDataModule", C, false)), "sw_out")), "Refresh", []);
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Memo2")), "Text", $.add((await $.call(C, "IntToStr", [L0["index"]])), " sayda əməliyyat qaytarıldı!"));
  } else {
    await $.mset((await $.v(C, "Memo2")), "Text", "Bütün əməliyyat qaytarılıb!");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "out_deleteExecute", async function out_deleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "Grid_out")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Grid_out")), "SetFocus", []);
  }
  {
    const $t131 = (await $.v(C, "Grid_out"));
    const $t132 = (await $.wv([$t131], "SelectedRows", C, false));
    const $t133 = (await $.mv((await $.wv([$t131, $t132], "DataSource", C, false)), "DataSet"));
    const $t134 = (await $.wv([$t131, $t132, $t133], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t131, $t132, $t133, $t134], "Count", C, false)), 0))) {
        await $.wset([$t131, $t132, $t133, $t134], "CurrentRowSelected", (await $.wv([$t131, $t132, $t133, $t134], "True", C, false)), C);
      }
      { const $t135 = $.sub((await $.wv([$t131, $t132, $t133, $t134], "Count", C, false)), 1);
        await $.wset([$t131, $t132, $t133, $t134], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t136 = true;
        for (;;) {
          if (!$t136) { await $.wset([$t131, $t132, $t133, $t134], "Index", $.succ((await $.wv([$t131, $t132, $t133, $t134], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t136 = false;
          if (!($.ord((await $.wv([$t131, $t132, $t133, $t134], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t135))) break;
          await $.stmt((await $.wcall([$t131, $t132, $t133, $t134], "GotoBookmark", [(await $.wcall([$t131, $t132, $t133, $t134], "Pointer", [(await $.idx((await $.wv([$t131, $t132, $t133, $t134], "Items", C, false)), [(await $.wv([$t131, $t132, $t133, $t134], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t131, $t132, $t133, $t134], "TransactionID", (await $.mv((await $.wcall([$t131, $t132, $t133, $t134], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t131, $t132, $t133, $t134], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t137 = (await $.wcall([$t131, $t132, $t133, $t134], "MessageDlg", [(await $.wcall([$t131, $t132, $t133, $t134], "Format", ["Əməliyyat #%d silinsinmi ?", [(await $.wv([$t131, $t132, $t133, $t134], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t131, $t132, $t133, $t134], "mtConfirmation", C, false)), [(await $.wv([$t131, $t132, $t133, $t134], "mbYes", C, false)), (await $.wv([$t131, $t132, $t133, $t134], "mbNo", C, false)), (await $.wv([$t131, $t132, $t133, $t134], "mbCancel", C, false)), (await $.wv([$t131, $t132, $t133, $t134], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t137, (await $.wv([$t131, $t132, $t133, $t134], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t137, (await $.wv([$t131, $t132, $t133, $t134], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t137, (await $.wv([$t131, $t132, $t133, $t134], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t131, $t132, $t133, $t134], "MessageDlg", [(await $.wcall([$t131, $t132, $t133, $t134], "Format", ["%d  sayda əməliyyat silinsinmi ?", [$.sub((await $.wv([$t131, $t132, $t133, $t134], "Count", C, false)), (await $.wv([$t131, $t132, $t133, $t134], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t131, $t132, $t133, $t134], "mtConfirmation", C, false)), [(await $.wv([$t131, $t132, $t133, $t134], "mbYes", C, false)), (await $.wv([$t131, $t132, $t133, $t134], "mbCancel", C, false))], 0], C)), (await $.wv([$t131, $t132, $t133, $t134], "mrYes", C, false))))) {
                  await $.wset([$t131, $t132, $t133, $t134], "WaitNextConfirm", (await $.wv([$t131, $t132, $t133, $t134], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t131, $t132, $t133, $t134], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t131, $t132, $t133, $t134], "SWDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_delete", [(await $.wv([$t131, $t132, $t133, $t134], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t131, $t132, $t133, $t134], "WillRefresh", (await $.wv([$t131, $t132, $t133, $t134], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t131, $t132, $t133, $t134], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.wv([$t131, $t132, $t133, $t134], "SWDataModule", C, false)), "sw_out")), "refresh", []);
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Memo2")), "Text", $.add((await $.call(C, "IntToStr", [L0["index"]])), " sayda əməliyyat silindi!"));
  } else {
    await $.mset((await $.v(C, "Memo2")), "Text", "Bütün əməliyyatlar silinib!");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "createfile2Execute", async function createfile2Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sum": 0, "kesr": 0, "i": 0, "testiq": 0, "prior": 0, "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "info": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "v_dataset1": null, "nameaa": '', "k": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "Gridout3")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Gridout3")), "SetFocus", []);
  }
  {
    const $t138 = (await $.v(C, "Gridout3"));
    const $t139 = (await $.wv([$t138], "SelectedRows", C, false));
    const $t140 = (await $.mv((await $.wv([$t138, $t139], "DataSource", C, false)), "DataSet"));
    const $t141 = (await $.wv([$t138, $t139, $t140], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t138, $t139, $t140, $t141], "Count", C, false)), 0))) {
        await $.wset([$t138, $t139, $t140, $t141], "CurrentRowSelected", (await $.wv([$t138, $t139, $t140, $t141], "True", C, false)), C);
      }
      { const $t142 = $.sub((await $.wv([$t138, $t139, $t140, $t141], "Count", C, false)), 1);
        await $.wset([$t138, $t139, $t140, $t141], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t143 = true;
        for (;;) {
          if (!$t143) { await $.wset([$t138, $t139, $t140, $t141], "Index", $.succ((await $.wv([$t138, $t139, $t140, $t141], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t143 = false;
          if (!($.ord((await $.wv([$t138, $t139, $t140, $t141], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t142))) break;
          await $.stmt((await $.wcall([$t138, $t139, $t140, $t141], "GotoBookmark", [(await $.wcall([$t138, $t139, $t140, $t141], "Pointer", [(await $.idx((await $.wv([$t138, $t139, $t140, $t141], "Items", C, false)), [(await $.wv([$t138, $t139, $t140, $t141], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t138, $t139, $t140, $t141], "TransactionID", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t138, $t139, $t140, $t141], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t144 = (await $.wcall([$t138, $t139, $t140, $t141], "MessageDlg", [(await $.wcall([$t138, $t139, $t140, $t141], "Format", ["Fayl #%d yaradılsın?", [(await $.wv([$t138, $t139, $t140, $t141], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t138, $t139, $t140, $t141], "mtConfirmation", C, false)), [(await $.wv([$t138, $t139, $t140, $t141], "mbYes", C, false)), (await $.wv([$t138, $t139, $t140, $t141], "mbNo", C, false)), (await $.wv([$t138, $t139, $t140, $t141], "mbCancel", C, false)), (await $.wv([$t138, $t139, $t140, $t141], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t144, (await $.wv([$t138, $t139, $t140, $t141], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t144, (await $.wv([$t138, $t139, $t140, $t141], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t144, (await $.wv([$t138, $t139, $t140, $t141], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t138, $t139, $t140, $t141], "MessageDlg", [(await $.wcall([$t138, $t139, $t140, $t141], "Format", ["%d  sayda köçürməyə fayl yaradılsın ?", [$.sub((await $.wv([$t138, $t139, $t140, $t141], "Count", C, false)), (await $.wv([$t138, $t139, $t140, $t141], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t138, $t139, $t140, $t141], "mtConfirmation", C, false)), [(await $.wv([$t138, $t139, $t140, $t141], "mbYes", C, false)), (await $.wv([$t138, $t139, $t140, $t141], "mbCancel", C, false))], 0], C)), (await $.wv([$t138, $t139, $t140, $t141], "mrYes", C, false))))) {
                  await $.wset([$t138, $t139, $t140, $t141], "WaitNextConfirm", (await $.wv([$t138, $t139, $t140, $t141], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t138, $t139, $t140, $t141], "Application", C, false)), "ProcessMessages", []);
          await $.wset([$t138, $t139, $t140, $t141], "testiq", (await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SwDataModule", C, false)), "sw_in_insert")), "CallIntegerFunction", ["sw_out_fileafter", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "GRIDOUT3", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "GRIDOUT2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["MF32A_DATE"])), "asdatetime"))]])), { get: async () => L0["testiq"], set: async (v) => { L0["testiq"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t138, $t139, $t140, $t141], "testiq", { get: async () => L0["testiq"], set: async (v) => { L0["testiq"] = v; }, local: true }, false)), 6))) {
            await $.wset([$t138, $t139, $t140, $t141], "v_dataset1", (await $.mv((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "GRIDOUT3", C, false)), "DataSource")), "DataSet")), { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true });
            {
              const $t145 = (await $.wv([$t138, $t139, $t140, $t141], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false));
              if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t138, $t139, $t140, $t141, $t145], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["status"])), "asinteger")), 1)))) {
                await $.wset([$t138, $t139, $t140, $t141, $t145], "edit_ref", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["id"], C)), "asstring")), { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true });
                { const $t146 = ($.sub(5, (await $.wcall([$t138, $t139, $t140, $t141, $t145], "length", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))], C))));
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
                  let $t147 = true;
                  for (;;) {
                    if (!$t147) { await $.wset([$t138, $t139, $t140, $t141, $t145], "i", $.succ((await $.wv([$t138, $t139, $t140, $t141, $t145], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                    $t147 = false;
                    if (!($.ord((await $.wv([$t138, $t139, $t140, $t141, $t145], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t146))) break;
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "edit_ref", $.add("0", (await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true });
                    await $.tick();
                  }
                }
                await $.wset([$t138, $t139, $t140, $t141, $t145], "valu", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["MF32A_CURR"], C)), "asstring")), { get: async () => L0["valu"], set: async (v) => { L0["valu"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t138, $t139, $t140, $t141, $t145], "valu", { get: async () => L0["valu"], set: async (v) => { L0["valu"] = v; }, local: true }, false)), "AZN"))) {
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "valu", "AZM", { get: async () => L0["valu"], set: async (v) => { L0["valu"] = v; }, local: true });
                }
                if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "SW_OUT3")), "FieldByName", ["messagetype"])), "AsString")), "MT102"))) {
                  await $.mcall((await $.wv([$t138, $t139, $t140, $t141, $t145], "fayl102", C, false)), "Execute", []);
                } else {
                  if ($.truthy($.not((await $.wcall([$t138, $t139, $t140, $t141, $t145], "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))], C))))) {
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))], C)));
                  }
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "dir", $.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["path_out"])), "asstring")), "\\"), { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true });
                  if ($.truthy($.not((await $.wcall([$t138, $t139, $t140, $t141, $t145], "DirectoryExists", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false))], C))))) {
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "MkDir", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false))], C)));
                  }
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "FileName", $.add($.add($.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "dir", { get: async () => L0["dir"], set: async (v) => { L0["dir"] = v; }, local: true }, false)), "sw"), (await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), ".rje"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "nameaa", $.add($.add("sw", (await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), ".rje"), { get: async () => L0["nameaa"], set: async (v) => { L0["nameaa"] = v; }, local: true });
                  await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "AssignFile", [$.ref(async () => (await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t148) => { await $.wset([$t138, $t139, $t140, $t141, $t145], "output", $t148, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); }), (await $.wv([$t138, $t139, $t140, $t141, $t145], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))], C)));
                  await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Rewrite", [$.ref(async () => (await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t149) => { await $.wset([$t138, $t139, $t140, $t141, $t145], "output", $t149, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); })], C)));
                  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t138, $t139, $t140, $t141, $t145], "v_dataset1", { get: async () => L0["v_dataset1"], set: async (v) => { L0["v_dataset1"] = v; }, local: true }, false)), "FieldByName", ["messagetype"])), "AsString")), "MT298")))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "BeginMessage", "{1:F01", { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C)), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add($.add($.add($.add($.add($.add($.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "AXXX"), "00010"), (await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), "}{2:I"), (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["MESSAGETYPE"], C)), "asstring")), 3, 3], C))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "N}{4:"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "BeginMessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "BeginMessage", { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))), { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "BeginMessage", { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true }, false))], C)));
                  } else {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "BeginMessage", "{1:F01", { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["SENDERBIC"], C)), "asstring")), 0, 8], C)), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "AXXX"), "00010"), (await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), "}{2:I"), (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["MESSAGETYPE"], C)), "asstring")), 3, 3], C))), (await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "sw_settings")), "fieldbyname", ["m_bic"])), "asstring"))), "N}{3:{113:0050}{"), "108:"), (await $.wv([$t138, $t139, $t140, $t141, $t145], "edit_ref", { get: async () => L0["edit_ref"], set: async (v) => { L0["edit_ref"] = v; }, local: true }, false))), "}}{4:"), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "BeginMessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "BeginMessage", { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))), { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "BeginMessage", { get: async () => L0["beginmessage"], set: async (v) => { L0["beginmessage"] = v; }, local: true }, false))], C)));
                  }
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF20"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF20_REFERENCE"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                  await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["mf12"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M12"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF12"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M25"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M25"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF25"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["m34f"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["m34f"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["mf34f1"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["m34f"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["m34f"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["mf34f2"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M77E"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M77E"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF77E"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["l02"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", ":L02:", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["l02"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["l04"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", ":L04:", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["l04"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["l01"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", ":L01:", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["l01"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy((await $.and_(($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["priority"], C)), "AsString")), "")), async () => ($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["priority"], C)), "AsString")), "N")))))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", ":113:", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["priority"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M23B"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M23B"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF23B"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M21"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M21"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF21"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["m79"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["m79"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF79"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "sum", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF32A_AMOUNT"], C)), "AsFloat")), { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true });
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "kesr", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "frac", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false))], C)), { get: async () => L0["kesr"], set: async (v) => { L0["kesr"] = v; }, local: true });
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M32A"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M32A"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.wcall([$t138, $t139, $t140, $t141, $t145], "FormatDateTime", ["yymmdd", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF32A_DATE"], C)), "AsDateTime"))], C))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF32A_CURR"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF32A_AMOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    if ($.truthy($.eq((await $.wv([$t138, $t139, $t140, $t141, $t145], "kesr", { get: async () => L0["kesr"], set: async (v) => { L0["kesr"] = v; }, local: true }, false)), 0))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), ","), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    } else {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "StringReplace", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), ".", ",", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "rfReplaceAll", C, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "rfIgnoreCase", C, false))]], C)), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    }
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M36"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M36"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF36"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M50"], C)), "AsString")), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M50"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add($.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), "/"), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_BIC"], C)), "AsString"))], C)), ""))) {
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["FINCOPY"], C)), "AsString"))], C)), "AZN"))) {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), $.add((await $.wcall([$t138, $t139, $t140, $t141, $t145], "pos", ["\r", (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)), 2), $.sub((await $.wcall([$t138, $t139, $t140, $t141, $t145], "length", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)), (await $.wcall([$t138, $t139, $t140, $t141, $t145], "pos", ["\r", (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)))], C)), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), $.add((await $.wcall([$t138, $t139, $t140, $t141, $t145], "pos", ["\r", (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)), 2), $.sub((await $.wcall([$t138, $t139, $t140, $t141, $t145], "length", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)), (await $.wcall([$t138, $t139, $t140, $t141, $t145], "pos", ["\r", (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)))], C)), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M52"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M52"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF52_BIC"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF52_BIC"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF52_NAME$ADRESS"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF52_NAME$ADRESS"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M53"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M53"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF53_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF53_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF53_BIC"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF53_BIC"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF53_NAME$LOCATION"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF53_NAME$LOCATION"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M54"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M54"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF54_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF54_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF54_BIC"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF54_BIC"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF54_NAME$LOCATION"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF54_NAME$LOCATION"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M55"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M55"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF55_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF55_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF55_BIC"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF55_BIC"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF55_NAME$LOCATION"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF55_NAME$LOCATION"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M56"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M56"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF56_BIC"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF56_BIC"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF56_NAME$LOCATION"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF56_NAME$LOCATION"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M58"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M58"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF58_ACCOUNT"], C)), "AsString")), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF58_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF58_BIC"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF58_BIC"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF58_NAME$LOCATION"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF58_NAME$LOCATION"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M59"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M59"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF59_ACCOUNT"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add("/", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF59_ACCOUNT"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    }
                    if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF59_bic"], C)), "AsString"))], C)), ""))) {
                      await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF59_bic"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                      await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                    } else {
                      if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF59_NAME$ADRESS"], C)), "AsString"))], C)), ""))) {
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF59_NAME$ADRESS"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.wcall([$t138, $t139, $t140, $t141, $t145], "copy", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), $.add((await $.wcall([$t138, $t139, $t140, $t141, $t145], "pos", ["\r", (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)), 2), $.sub((await $.wcall([$t138, $t139, $t140, $t141, $t145], "length", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)), (await $.wcall([$t138, $t139, $t140, $t141, $t145], "pos", ["\r", (await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)))], C)), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                        await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                      }
                    }
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M70"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M70"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF70"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M71A"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M71A"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF71A"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M71F"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M71F"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF71G_CHILD"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M71G"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M71G"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF71G_CHILD"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M72"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M72"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF72"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  if ($.truthy($.ne((await $.wcall([$t138, $t139, $t140, $t141, $t145], "trim", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M77B"], C)), "AsString"))], C)), ""))) {
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["M77B"], C)), "AsString")), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.wset([$t138, $t139, $t140, $t141, $t145], "Swmessage", $.add((await $.wv([$t138, $t139, $t140, $t141, $t145], "Swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "fieldbyname", ["MF77B"], C)), "AsString"))), { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Writeln", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "swmessage", { get: async () => L0["swmessage"], set: async (v) => { L0["swmessage"] = v; }, local: true }, false))], C)));
                  }
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "Endmesage", "-}", { get: async () => L0["endmesage"], set: async (v) => { L0["endmesage"] = v; }, local: true });
                  await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "Write", [(await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), (await $.wv([$t138, $t139, $t140, $t141, $t145], "Endmesage", { get: async () => L0["endmesage"], set: async (v) => { L0["endmesage"] = v; }, local: true }, false))], C)));
                  await $.stmt((await $.wcall([$t138, $t139, $t140, $t141, $t145], "CloseFile", [$.ref(async () => (await $.wv([$t138, $t139, $t140, $t141, $t145], "output", { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }, false)), async ($t150) => { await $.wset([$t138, $t139, $t140, $t141, $t145], "output", $t150, { get: async () => L0["output"], set: async (v) => { L0["output"] = v; }, local: true }); })], C)));
                  await $.wset([$t138, $t139, $t140, $t141, $t145], "info", "Fayl yaradılıb!", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true });
                  await $.stmt((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_CreateFile", [(await $.mv((await $.wcall([$t138, $t139, $t140, $t141, $t145], "FieldByName", ["id"], C)), "asinteger")), (await $.wv([$t138, $t139, $t140, $t141, $t145], "info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), 1]])));
                  await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141, $t145], "SWDataModule", C, false)), "swmammount")), "Refresh", []);
                }
              }
            }
          } else {
            await $.wset([$t138, $t139, $t140, $t141], "info", "Təsdiq olunmamış əməliyyat var!", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true });
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_CreateFile", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "GRIDOUT2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger")), (await $.wv([$t138, $t139, $t140, $t141], "info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), 0]])));
          }
          await $.wset([$t138, $t139, $t140, $t141], "WillRefresh", (await $.wv([$t138, $t139, $t140, $t141], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "swmammount")), "Refresh", []);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t138, $t139, $t140, $t141], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "swmammount")), "Refresh", []);
        await $.mset((await $.wv([$t138, $t139, $t140, $t141], "edit2", C, false)), "Text", $.add($.add("Bu gün göndəriləcək ümumi məbləğ = ", (await $.wcall([$t138, $t139, $t140, $t141], "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "swmammount")), "FieldByName", ["summ"])), "AsFloat"))], C))), " AZN"));
        await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "sw_out_2")), "Open", []);
        await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "sw_out_2")), "Refresh", []);
        await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "sw_out3")), "Open", []);
        await $.mcall((await $.mv((await $.wv([$t138, $t139, $t140, $t141], "SWDataModule", C, false)), "sw_out3")), "Refresh", []);
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swmammount")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "addtrans2Execute", async function addtrans2Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "dest_title": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "k1": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "Grid_out")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Grid_out")), "SetFocus", []);
  }
  {
    const $t151 = (await $.v(C, "Grid_out"));
    const $t152 = (await $.wv([$t151], "SelectedRows", C, false));
    const $t153 = (await $.mv((await $.wv([$t151, $t152], "DataSource", C, false)), "DataSet"));
    const $t154 = (await $.wv([$t151, $t152, $t153], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t151, $t152, $t153, $t154], "Count", C, false)), 0))) {
        await $.wset([$t151, $t152, $t153, $t154], "CurrentRowSelected", (await $.wv([$t151, $t152, $t153, $t154], "True", C, false)), C);
      }
      { const $t155 = $.sub((await $.wv([$t151, $t152, $t153, $t154], "Count", C, false)), 1);
        await $.wset([$t151, $t152, $t153, $t154], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t156 = true;
        for (;;) {
          if (!$t156) { await $.wset([$t151, $t152, $t153, $t154], "Index", $.succ((await $.wv([$t151, $t152, $t153, $t154], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t156 = false;
          if (!($.ord((await $.wv([$t151, $t152, $t153, $t154], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t155))) break;
          await $.stmt((await $.wcall([$t151, $t152, $t153, $t154], "GotoBookmark", [(await $.wcall([$t151, $t152, $t153, $t154], "Pointer", [(await $.idx((await $.wv([$t151, $t152, $t153, $t154], "Items", C, false)), [(await $.wv([$t151, $t152, $t153, $t154], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t151, $t152, $t153, $t154], "TransactionID", (await $.mv((await $.wcall([$t151, $t152, $t153, $t154], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t151, $t152, $t153, $t154], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t157 = (await $.wcall([$t151, $t152, $t153, $t154], "MessageDlg", [(await $.wcall([$t151, $t152, $t153, $t154], "Format", ["Əməliyyat günün sənədlərinə əlavə edilsin?", [(await $.wv([$t151, $t152, $t153, $t154], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t151, $t152, $t153, $t154], "mtConfirmation", C, false)), [(await $.wv([$t151, $t152, $t153, $t154], "mbYes", C, false)), (await $.wv([$t151, $t152, $t153, $t154], "mbNo", C, false)), (await $.wv([$t151, $t152, $t153, $t154], "mbCancel", C, false)), (await $.wv([$t151, $t152, $t153, $t154], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t157, (await $.wv([$t151, $t152, $t153, $t154], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t157, (await $.wv([$t151, $t152, $t153, $t154], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t157, (await $.wv([$t151, $t152, $t153, $t154], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t151, $t152, $t153, $t154], "MessageDlg", [(await $.wcall([$t151, $t152, $t153, $t154], "Format", ["%d sayda əməliyyat gunün sənədlərinə əlavə edilsin?", [$.sub((await $.wv([$t151, $t152, $t153, $t154], "Count", C, false)), (await $.wv([$t151, $t152, $t153, $t154], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t151, $t152, $t153, $t154], "mtConfirmation", C, false)), [(await $.wv([$t151, $t152, $t153, $t154], "mbYes", C, false)), (await $.wv([$t151, $t152, $t153, $t154], "mbCancel", C, false))], 0], C)), (await $.wv([$t151, $t152, $t153, $t154], "mrYes", C, false))))) {
                  await $.wset([$t151, $t152, $t153, $t154], "WaitNextConfirm", (await $.wv([$t151, $t152, $t153, $t154], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t151, $t152, $t153, $t154], "Application", C, false)), "ProcessMessages", []);
          await $.wset([$t151, $t152, $t153, $t154], "formats", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "Grid_out", C, false)), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "asstring")), { get: async () => L0["formats"], set: async (v) => { L0["formats"] = v; }, local: true });
          {
            const $t158 = (await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprow"));
            await $.stmt((await $.wcall([$t151, $t152, $t153, $t154, $t158], "SetVariable", ["Q", (await $.wv([$t151, $t152, $t153, $t154, $t158], "formats", { get: async () => L0["formats"], set: async (v) => { L0["formats"] = v; }, local: true }, false))], C)));
          }
          await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprow")), "Close", []);
          await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprow")), "Open", []);
          await $.wset([$t151, $t152, $t153, $t154], "kredit", (await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprowKREDIT")), "AsString")), { get: async () => L0["kredit"], set: async (v) => { L0["kredit"] = v; }, local: true });
          if ($.truthy($.eq((await $.wcall([$t151, $t152, $t153, $t154], "trim", [(await $.wv([$t151, $t152, $t153, $t154], "kredit", { get: async () => L0["kredit"], set: async (v) => { L0["kredit"] = v; }, local: true }, false))], C)), "RECEIVERBIC"))) {
            await $.wset([$t151, $t152, $t153, $t154], "vbic", "BIC", { get: async () => L0["vbic"], set: async (v) => { L0["vbic"] = v; }, local: true });
          }
          await $.wset([$t151, $t152, $t153, $t154], "debet", (await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprowDEBET")), "AsString")), { get: async () => L0["debet"], set: async (v) => { L0["debet"] = v; }, local: true });
          await $.wset([$t151, $t152, $t153, $t154], "summa", (await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprowSUMM")), "AsString")), { get: async () => L0["summa"], set: async (v) => { L0["summa"] = v; }, local: true });
          await $.wset([$t151, $t152, $t153, $t154], "destination", (await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprowDESTINATION")), "AsString")), { get: async () => L0["destination"], set: async (v) => { L0["destination"] = v; }, local: true });
          await $.wset([$t151, $t152, $t153, $t154], "dest_title", (await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "setprowDEST_TITLE")), "asString")), { get: async () => L0["dest_title"], set: async (v) => { L0["dest_title"] = v; }, local: true });
          await $.wset([$t151, $t152, $t153, $t154], "ids", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "Grid_out", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "Asinteger")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
          {
            const $t159 = (await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac"));
            await $.stmt((await $.wcall([$t151, $t152, $t153, $t154, $t159], "SetVariable", [":IDS1", (await $.wv([$t151, $t152, $t153, $t154, $t159], "ids", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
          }
          { const $t160 = await $.iset((await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "SQL")), [0], ($.add($.add($.add($.add($.add($.add($.add($.add($.add("select a.", (await $.wv([$t151, $t152, $t153, $t154], "kredit", { get: async () => L0["kredit"], set: async (v) => { L0["kredit"] = v; }, local: true }, false))), " as kredit, a."), (await $.wv([$t151, $t152, $t153, $t154], "debet", { get: async () => L0["debet"], set: async (v) => { L0["debet"] = v; }, local: true }, false))), " as debet, a."), (await $.wv([$t151, $t152, $t153, $t154], "summa", { get: async () => L0["summa"], set: async (v) => { L0["summa"] = v; }, local: true }, false))), " as summa, "), "a.mf70"), " as destination, id "), " from sw_out_new a where a.id=:ids1 "))); if ($t160 !== undefined) { await $.mset((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "SQL", $t160); } }
          await $.mset((await $.wv([$t151, $t152, $t153, $t154], "Memo1", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "SQL")), "Text")));
          await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "Close", []);
          await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "Open", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_transaction", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "fieldbyname", ["ID"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "fieldbyname", ["debet"])), "asstring")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "fieldbyname", ["kredit"])), "asstring")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "fieldbyname", ["summa"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "Grid_out", C, false)), "DataSource")), "DataSet")), "FieldByName", ["MF32A_DATE"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "SWDataModule", C, false)), "transac")), "fieldbyname", ["DESTINATION"])), "asstring")), (await $.wv([$t151, $t152, $t153, $t154], "vbic", { get: async () => L0["vbic"], set: async (v) => { L0["vbic"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t151, $t152, $t153, $t154], "Grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["tax"])), "asstring")), (await $.wv([$t151, $t152, $t153, $t154], "k1", { get: async () => L0["k1"], set: async (v) => { L0["k1"] = v; }, local: true }, false))]])));
          await $.wset([$t151, $t152, $t153, $t154], "WillRefresh", (await $.wv([$t151, $t152, $t153, $t154], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  if ($.truthy(L0["willrefresh"])) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT2")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "editingExecute", async function editingExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "form5", (await $.mcall((await $.v(C, "Tform5")), "Create", [Self])));
  await $.mcall((await $.v(C, "form5")), "showmodal", []);
  {
    const $t161 = (await $.v(C, "form5"));
    await $.mset((await $.wv([$t161], "FIN2", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t161], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["MESSAGETYPE"])), "asstring")));
    await $.mset((await $.wv([$t161], "sendertype", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t161], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["SENDERTYPE"])), "asstring")));
    await $.mset((await $.wv([$t161], "reciverbic", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t161], "grid_out", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["RECEIVERBIC"])), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "cheskaccountExecute", async function cheskaccountExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "hdebet": '', "hkredit": '', "tramount": 0, "trdescription": '', "trdescription2": '', "inn": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Gridin")), "SetFocus", []);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "First", []);
    { const $t162 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t163 = true;
      for (;;) {
        if (!$t163) { L0["i"] = $.succ(L0["i"], 1); }
        $t163 = false;
        if (!($.ord(L0["i"]) <= $.ord($t162))) break;
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["MT"])), "asstring")), "MT103")))))) {
          L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["id"])), "asinteger"));
          L0["hkredit"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyName", ["ACOUNT"])), "AsString"));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["check_account", [L0["id"], L0["hkredit"]]])));
        }
        await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "Next", []);
        await $.tick();
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ceskingClick", async function ceskingClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vid": 0, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["vid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIN")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsVariant"));
  L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIN")), "DataSource")), "DataSet")), "FieldByName", ["ACOUNT"])), "asstring"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["check_account", [L0["vid"], L0["acc"]]])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "RefreshRecord", []);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "undifinet_transExecute", async function undifinet_transExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger")), 8))) {
    {
      const $t164 = (await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet"));
      await $.mcall((await $.mv((await $.mv((await $.wv([$t164], "gridin", C, false)), "DataSource")), "DataSet")), "Edit", []);
      await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t164], "gridin", C, false)), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger", 12);
      await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t164], "gridin", C, false)), "DataSource")), "DataSet")), "FieldByName", ["info"])), "asstring", "Təyin edilməmiş atılıb!");
      await $.stmt($.wcall([$t164], "post", [], C));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t164], "SWDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["undifined_transactions", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t164], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["id"])), "AsInteger"))]])));
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "NEXT", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Təyin olunmamışa atıla bilməz!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "XFButClick", async function XFButClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t165 = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "RecordCount"));
    L0["k"] = 1;
    let $t166 = true;
    for (;;) {
      if (!$t166) { L0["k"] = $.succ(L0["k"], 1); }
      $t166 = false;
      if (!($.ord(L0["k"]) <= $.ord($t165))) break;
      await $.stmt((await $.call(C, "showmessage", [(await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "RecordCount"))]))])));
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "fieldbyname", ["MF21"])), "AsString"))])));
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT102data")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_TRANZIT"]])));
  await $.set(C, "Tranzit_Acc", (await $.mcall((await $.v(C, "TTranzit_Acc")), "Create", [Self])));
  await $.mcall((await $.v(C, "Tranzit_Acc")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "arxivClick", async function arxivClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "inarchiv", (await $.mcall((await $.v(C, "Tinarchiv")), "Create", [Self])));
  await $.mcall((await $.v(C, "inarchiv")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "konvertExecute", async function konvertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valu": 0, "i": 0, "j": 0, "status": 0, "shifr": 0, "k": 0, "m": 0, "struktur": 0, "t": 0, "num1": 0, "swstring": '', "acount": '', "referens": '', "valyuta": '', "describ": '', "describ2": '', "mt": '', "all": '', "bic": '', "dat": '', "tax": '', "kod": '', "kor": '', "bank_voin": '', "v_out1": '', "v_out2": '', "v_out3": '', "v_out4": '', "dirold": '', "dirnew": '', "dir": '', "country": '', "voin": '', "sendern": '', "receiver": '', "descript": '', "fl": null, "strtempl": '', "strbuff": '', "pos1": 0, "kk": 0, "row": 0, "arr": []};
  await $.fixArgs(L0, ["sender"]);
  try {
    L0["struktur"] = 1;
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_KONVERT"]])));
    L0["shifr"] = 3;
    L0["status"] = 2;
    { const $t168 = $.sub((await $.mv((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), "count")), 1);
      L0["i"] = 0;
      let $t169 = true;
      for (;;) {
        if (!$t169) { L0["i"] = $.succ(L0["i"], 1); }
        $t169 = false;
        if (!($.ord(L0["i"]) <= $.ord($t168))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]]))])));
        L0["swstring"] = (await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["i"]]));
        L0["all"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))]));
        L0["all"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1, (await $.call(C, "Pos", ["}{5:", L0["all"]]))]))]));
        if ($.truthy($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "102"))) {
          if ($.truthy($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "103"))) {
            if ($.truthy($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "205"))) {
              if ($.truthy($.eq((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "298"))) {
                L0["mt"] = $.add("MT", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])));
                L0["all"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))]));
                L0["all"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1, (await $.call(C, "Pos", ["}{5:", L0["all"]]))]))]));
                if ($.truthy($.eq((await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [2])), 5, 3]))])), "012"))) {
                  L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [7])), 5, 12]))]));
                  L0["describ"] = "012";
                }
                if ($.truthy($.eq((await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [2])), 5, 3]))])), "900"))) {
                  L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [4])), 5, 12]))]));
                  L0["describ"] = "900";
                }
                if ($.truthy($.eq((await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [2])), 5, 3]))])), "700"))) {
                  L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1])), 5, 20]))]));
                  L0["describ"] = "700";
                }
                L0["valu"] = 0;
                L0["valyuta"] = "AZN";
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_all", [L0["all"], L0["mt"], L0["referens"], L0["valu"], L0["describ"]]])));
                if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
                  await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
                }
                L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
                if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
                  await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
                }
                L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])));
              } else {
                if ($.truthy($.eq((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "910"))) {
                  L0["mt"] = $.add("MT", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])));
                  L0["all"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))]));
                  L0["all"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1, (await $.call(C, "Pos", ["}{5:", L0["all"]]))]))]));
                  L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1])), 5, 12]))]));
                  L0["describ"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [6])), 5, 350]));
                  L0["valu"] = (await $.call(C, "strtofloat", [(await $.call(C, "StringReplace", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [4])), 15, 15])), ",", ".", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))]));
                  L0["valyuta"] = "AZN";
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_all", [L0["all"], L0["mt"], L0["referens"], L0["valu"], L0["describ"]]])));
                  if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
                    await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
                  }
                  L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
                  if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
                    await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
                  }
                  L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                  L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                  await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])));
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "900"))) {
                    L0["mt"] = $.add("MT", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])));
                    L0["all"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))]));
                    L0["all"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1, (await $.call(C, "Pos", ["}{5:", L0["all"]]))]))]));
                    L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1])), 5, 12]))]));
                    L0["describ"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [5])), 5, 350]));
                    L0["valu"] = (await $.call(C, "strtofloat", [(await $.call(C, "StringReplace", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [4])), 15, 15])), ",", ".", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))]));
                    L0["valyuta"] = "AZN";
                    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_all", [L0["all"], L0["mt"], L0["referens"], L0["valu"], L0["describ"]]])));
                    if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
                      await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
                    }
                    L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
                    if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
                      await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
                    }
                    L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                    L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                    await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
                    await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])));
                  }
                  if ($.truthy($.eq((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])), "950"))) {
                    L0["mt"] = $.add("MT", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0])), 34, 3])));
                    L0["all"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))]));
                    L0["all"] = (await $.call(C, "Trim", [(await $.call(C, "Copy", [L0["all"], 1, (await $.call(C, "Pos", ["}{5:", L0["all"]]))]))]));
                    L0["referens"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1])), 5, 12]))]));
                    L0["describ"] = "";
                    L0["valu"] = 0;
                    L0["valyuta"] = "AZN";
                    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_all", [L0["all"], L0["mt"], L0["referens"], L0["valu"], L0["describ"]]])));
                    if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
                      await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
                    }
                    L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
                    if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
                      await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
                    }
                    L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                    L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
                    await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
                    await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])));
                  }
                }
              }
            } else {
              L0["valu"] = (await $.call(C, "strtofloat", [(await $.call(C, "StringReplace", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [3])), 15, 15])), ",", ".", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))]));
              L0["valyuta"] = "AZN";
              L0["mt"] = "MT205";
              L0["referens"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1])), 5, 12]));
              L0["bic"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [8])), 0, 12]));
              L0["sendern"] = "";
              L0["receiver"] = "";
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_other", [L0["acount"], L0["referens"], L0["bic"], L0["status"], L0["shifr"], L0["mt"], L0["all"], L0["valu"], L0["voin"], L0["describ2"], L0["sendern"], L0["receiver"]]])));
              if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
                await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
              }
              L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
              if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
                await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
              }
              L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
              L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
              await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])));
            }
          } else {
            L0["valu"] = (await $.call(C, "strtofloat", [(await $.call(C, "StringReplace", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [3])), 15, 15])), ",", ".", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))]));
            L0["acount"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [9])), 6, 32]));
            L0["valyuta"] = "AZN";
            L0["mt"] = "MT103";
            L0["voin"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [11])), 0, 10]));
            L0["describ2"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [14])), 5, 100]));
            L0["referens"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1])), 5, 12]));
            L0["bic"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [7])), 19, 20]));
            L0["sendern"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [5])), 0, 35]));
            L0["receiver"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [10])), 0, 35]));
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [16])), 0, 4]))])), ":72:"))) {
              L0["descript"] = (await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [16])), 5, 35]));
            } else {
              L0["descript"] = "";
            }
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_other", [L0["acount"], L0["referens"], L0["bic"], L0["status"], L0["shifr"], L0["mt"], L0["all"], L0["valu"], L0["voin"], L0["describ2"], L0["sendern"], L0["receiver"], L0["descript"]]])));
            if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
              await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
            }
            L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_in"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
            if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
              await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
            }
            L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
            L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
            await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])));
          }
        } else {
          await $.mcall((await $.v(C, "konver102")), "Execute", []);
        }
        await $.tick();
      }
    }
  } catch ($t167) {
    $.rethrowControl($t167);
    if ($.excIs($t167, "exception")) {
      L0["e"] = $.exc($t167);
      await $.mcall((await $.v(C, "cheskaccount")), "execute", []);
      await $.mcall((await $.v(C, "Konver102")), "Execute", []);
    }
    else { throw $t167; }
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
  await $.mcall((await $.v(C, "cheskaccount")), "execute", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "konvert2Execute", async function konvert2Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "z": 0, "status": 0, "shifr": 0, "k": 0, "m": 0, "struktur": 0, "swstring": '', "fli": '', "acount": '', "referens": '', "valu": '', "valyuta": '', "describ": '', "describ2": '', "mt": '', "all": '', "bic": '', "dat": '', "tax": '', "kod": '', "kor": '', "bank_voin": '', "dirold": '', "dirnew": '', "dir": '', "fl": null};
  await $.fixArgs(L0, ["sender"]);
  L0["struktur"] = 0;
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_KONVERT"]])));
  L0["shifr"] = 3;
  L0["status"] = 2;
  { const $t170 = $.sub((await $.mv((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), "count")), 1);
    L0["i"] = 0;
    let $t171 = true;
    for (;;) {
      if (!$t171) { L0["i"] = $.succ(L0["i"], 1); }
      $t171 = false;
      if (!($.ord(L0["i"]) <= $.ord($t170))) break;
      await $.stmt((await $.call(C, "reset", [$.ref(async () => L0["fl"], async ($t172) => { L0["fl"] = $t172; }), (await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]]))])));
      L0["z"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["fl"]]))))) {
        L0["z"] = $.add(L0["z"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["fl"], async ($t173) => { L0["fl"] = $t173; }), $.ref(async () => L0["fli"], async ($t174) => { L0["fli"] = $t174; })])));
        { const $t175 = await $.iset((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["z"]], L0["fli"]); if ($t175 !== undefined) { await $.mset((await $.v(C, "RichEdit1")), "Lines", $t175); } }
        await $.tick();
      }
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["fl"], async ($t176) => { L0["fl"] = $t176; })])));
      L0["m"] = 0;
      { const $t177 = (await $.mv((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "Count"));
        L0["j"] = 0;
        let $t178 = true;
        for (;;) {
          if (!$t178) { L0["j"] = $.succ(L0["j"], 1); }
          $t178 = false;
          if (!($.ord(L0["j"]) <= $.ord($t177))) break;
          L0["m"] = $.add(L0["m"], 1);
          L0["swstring"] = (await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]]))]));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]]))])));
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), "-}{5:"))) {
            L0["all"] = (await $.mv((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Text"));
            L0["m"] = 0;
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 3]))])), "{1:"))) {
            L0["mt"] = $.add("MT", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 85, 3]))])));
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 3]))])), "{1:"))) {
            L0["bic"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 7, 8]))]));
            L0["bic"] = $.add(L0["bic"], (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 16, 3]))])));
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 4]))])), ":20:"))) {
            L0["swstring"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]])), 5, 20]))]));
            L0["referens"] = L0["swstring"];
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":32A:"))) {
            L0["dat"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]]))]))), 6, 6]))]));
            L0["valyuta"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]]))]))), 12, 3]))]));
            L0["valu"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]]))]))), 15, 100]))]));
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 4]))])), ":59:"))) {
            L0["swstring"] = (await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]]))]));
            L0["swstring"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 6, 100]))]));
            L0["acount"] = L0["swstring"];
            L0["describ2"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 1)]))]))), 1, 100]))]));
            L0["swstring"] = (await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 2)]))]));
            if ($.truthy($.ne((await $.call(C, "pos", [L0["swstring"], "/"])), 0))) {
              L0["tax"] = (await $.call(C, "copy", [L0["swstring"], 0, (await $.call(C, "pos", [L0["swstring"], "/"]))]));
            } else {
              L0["tax"] = L0["swstring"];
            }
            L0["swstring"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)]))]))), 1, 6]))]));
            L0["kod"] = L0["swstring"];
            L0["swstring"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)]))]))), 8, 13]))]));
            L0["kor"] = L0["swstring"];
            L0["swstring"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)]))]))), 22, 10]))]));
            L0["bank_voin"] = L0["swstring"];
          }
          if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50K:")), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50A:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50B:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50F:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50C:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50D:")))))) {
            L0["describ"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 1)]))]))), 1, 100]))]));
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), "-}{5:"))) {
            if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
              await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
            }
            L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
            if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
              await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
            }
            L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
            L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
            await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
            if ($.truthy($.eq(L0["mt"], "MT103"))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in", [L0["acount"], L0["referens"], L0["valu"], L0["bic"], L0["valyuta"], L0["describ"], L0["describ2"], L0["status"], L0["shifr"], L0["mt"], L0["all"], L0["tax"], L0["kod"], L0["bank_voin"], L0["kor"]]])));
              await $.mcall((await $.mv((await $.v(C, "richedit2")), "Lines")), "Clear", []);
            } else {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_other", [L0["referens"], L0["bic"], L0["status"], L0["shifr"], L0["mt"], L0["all"]]])));
              await $.mcall((await $.mv((await $.v(C, "richedit2")), "Lines")), "Clear", []);
            }
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "RichEdit1")), "Clear", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "refresh", []);
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "Repaint", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Refresh", []);
  await $.mcall((await $.v(C, "cheskaccount")), "execute", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c": 0, "v_dataset": null, "v_mf20": '', "v_mf21": '', "v_mf23": '', "v_mf32": '', "v_mf50": '', "v_mf52": '', "v_mf53": '', "v_mf54": '', "v_mf55": '', "v_mf56": '', "v_mf57": '', "v_mf59": '', "v_mf70": '', "v_mf71": '', "v_mf72": '', "v_mf77": '', "v_mf50_nameadress": '', "f": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["c"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "Text"))]));
  { const $t179 = L0["c"];
    if ($.eq($t179, 1)) {
      L0["v_dataset"] = (await $.mv((await $.mv((await $.v(C, "Grid_out")), "DataSource")), "DataSet"));
    }
    else if ($.eq($t179, 2)) {
      L0["v_dataset"] = (await $.mv((await $.mv((await $.v(C, "Gridout2")), "DataSource")), "DataSet"));
    }
    else if ($.eq($t179, 3)) {
      L0["v_dataset"] = (await $.mv((await $.mv((await $.v(C, "Gridout3")), "DataSource")), "DataSet"));
    }
  }
  {
    const $t180 = L0["v_dataset"];
    await $.wset([$t180], "v_mf20", $.add($.add((await $.mv((await $.wcall([$t180], "fieldbyname", ["MF20"], C)), "asstring")), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF20_REFERENCE"], C)), "asstring"))), { get: async () => L0["v_mf20"], set: async (v) => { L0["v_mf20"] = v; }, local: true });
    await $.wset([$t180], "v_mf21", $.add($.add((await $.mv((await $.wcall([$t180], "fieldbyname", ["M21"], C)), "asstring")), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["mf21"], C)), "asstring"))), { get: async () => L0["v_mf21"], set: async (v) => { L0["v_mf21"] = v; }, local: true });
    await $.wset([$t180], "v_mf23", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M23B"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["mf23b"], C)), "asstring"))), { get: async () => L0["v_mf23"], set: async (v) => { L0["v_mf23"] = v; }, local: true });
    await $.wset([$t180], "v_mf32", $.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M32A"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF32A_DATE"], C)), "asstring"))), " "), (await $.mv((await $.mcall((await $.wv([$t180], "v_DataSet", { get: async () => L0["v_dataset"], set: async (v) => { L0["v_dataset"] = v; }, local: true }, false)), "fieldbyname", ["MF32A_CURR"])), "asstring"))), (await $.mv((await $.mcall((await $.wv([$t180], "v_DataSet", { get: async () => L0["v_dataset"], set: async (v) => { L0["v_dataset"] = v; }, local: true }, false)), "fieldbyname", ["MF32A_AMOUNT"])), "asstring"))), { get: async () => L0["v_mf32"], set: async (v) => { L0["v_mf32"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M50"], C)), "asstring")), ":50A:"))) {
      await $.wset([$t180], "v_mf50", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M50"], C)), "asstring"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "asstring"))), { get: async () => L0["v_mf50"], set: async (v) => { L0["v_mf50"] = v; }, local: true });
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M50"], C)), "asstring")), ":50K:")), async () => ($.ne((await $.mv((await $.wcall([$t180], "fieldbyname", ["FINCOPY"], C)), "asstring")), "AZN")))))) {
        await $.wset([$t180], "v_MF50_NAMEADRESS", (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "asstring")), { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true });
        await $.wset([$t180], "v_MF50_NAMEADRESS", $.add($.add((await $.wcall([$t180], "copy", [(await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false)), 0, $.sub((await $.wcall([$t180], "pos", ["\r", (await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)), 1)], C)), "\r"), (await $.wcall([$t180], "copy", [(await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false)), $.add((await $.wcall([$t180], "pos", ["\r", (await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)), 2), $.sub((await $.wcall([$t180], "length", [(await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)), (await $.wcall([$t180], "pos", ["\r", (await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)))], C))), { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true });
        await $.wset([$t180], "v_mf50", $.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M50"], C)), "asstring"))), (await $.wv([$t180], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))), { get: async () => L0["v_mf50"], set: async (v) => { L0["v_mf50"] = v; }, local: true });
      } else {
        await $.wset([$t180], "v_mf50", $.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M50"], C)), "asstring"))), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "asstring"))), { get: async () => L0["v_mf50"], set: async (v) => { L0["v_mf50"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M52"], C)), "asstring")), ":52A:"))) {
      await $.wset([$t180], "v_mf52", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M52"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF52_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF52_NAME$ADRESS"], C)), "AsString"))), { get: async () => L0["v_mf52"], set: async (v) => { L0["v_mf52"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M52"], C)), "asstring")), ":52D:"))) {
        await $.wset([$t180], "v_mf52", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M52"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF52_NAME$ADRESS"], C)), "AsString"))), { get: async () => L0["v_mf52"], set: async (v) => { L0["v_mf52"] = v; }, local: true });
      } else {
        await $.wset([$t180], "v_mf52", "", { get: async () => L0["v_mf52"], set: async (v) => { L0["v_mf52"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["FINCOPY"], C)), "AsString")), "AZN"))) {
      await $.wset([$t180], "v_mf53", "", { get: async () => L0["v_mf53"], set: async (v) => { L0["v_mf53"] = v; }, local: true });
    } else {
      await $.wset([$t180], "v_mf53", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M53"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF53_ACCOUNT"], C)), "AsString"))), { get: async () => L0["v_mf53"], set: async (v) => { L0["v_mf53"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M54"], C)), "AsString")), ":54A:"))) {
      await $.wset([$t180], "v_mf54", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M54"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF54_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF54_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF54_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf54"], set: async (v) => { L0["v_mf54"] = v; }, local: true });
    } else {
      if ($.truthy(((await $.or_(($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M54"], C)), "AsString")), ":54B:")), async () => ($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M54"], C)), "AsString")), ":54D:"))))))) {
        await $.wset([$t180], "v_mf54", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M54"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF54_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF54_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf54"], set: async (v) => { L0["v_mf54"] = v; }, local: true });
      } else {
        await $.wset([$t180], "v_mf54", "", { get: async () => L0["v_mf54"], set: async (v) => { L0["v_mf54"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M55"], C)), "AsString")), ":55A:"))) {
      await $.wset([$t180], "v_mf55", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M55"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF55_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF55_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF55_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf55"], set: async (v) => { L0["v_mf55"] = v; }, local: true });
    } else {
      if ($.truthy(((await $.or_(($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M55"], C)), "AsString")), ":55B:")), async () => ($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M55"], C)), "AsString")), ":55D:"))))))) {
        await $.wset([$t180], "v_mf55", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M55"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF55_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF55_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf55"], set: async (v) => { L0["v_mf55"] = v; }, local: true });
      } else {
        await $.wset([$t180], "v_mf55", "", { get: async () => L0["v_mf55"], set: async (v) => { L0["v_mf55"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M56"], C)), "AsString")), ":56A:"))) {
      await $.wset([$t180], "v_mf56", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M56"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF56_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF56_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M56"], C)), "AsString")), ":56C:"))) {
        await $.wset([$t180], "v_mf56", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M56"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
      } else {
        if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M56"], C)), "AsString")), ":56D:"))) {
          await $.wset([$t180], "v_mf56", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M56"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF56_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
        } else {
          await $.wset([$t180], "v_mf56", "", { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString")), ":58A:"))) {
      await $.wset([$t180], "v_mf57", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString")), ":58D:"))) {
        await $.wset([$t180], "v_mf57", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
      } else {
        if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString")), ":57C:"))) {
          await $.wset([$t180], "v_mf57", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_ACCOUNT"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
        } else {
          if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString")), ":58D:"))) {
            await $.wset([$t180], "v_mf57", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M58"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF58_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
          } else {
            await $.wset([$t180], "v_mf57", "", { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
          }
        }
      }
    }
    await $.wset([$t180], "v_mf59", $.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M59"], C)), "asstring"))), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF59_NAME$ADRESS"], C)), "asstring"))), { get: async () => L0["v_mf59"], set: async (v) => { L0["v_mf59"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M70"], C)), "asstring")), ":70:"))) {
      await $.wset([$t180], "v_mf70", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M70"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF70"], C)), "asstring"))), { get: async () => L0["v_mf70"], set: async (v) => { L0["v_mf70"] = v; }, local: true });
    } else {
      await $.wset([$t180], "v_mf70", "", { get: async () => L0["v_mf70"], set: async (v) => { L0["v_mf70"] = v; }, local: true });
    }
    await $.wset([$t180], "v_mf71", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M71A"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF71A"], C)), "asstring"))), { get: async () => L0["v_mf71"], set: async (v) => { L0["v_mf71"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M72"], C)), "asstring")), ":72:"))) {
      await $.wset([$t180], "v_mf72", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M72"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF72"], C)), "asstring"))), { get: async () => L0["v_mf72"], set: async (v) => { L0["v_mf72"] = v; }, local: true });
    } else {
      await $.wset([$t180], "v_mf72", "", { get: async () => L0["v_mf72"], set: async (v) => { L0["v_mf72"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t180], "fieldbyname", ["M77B"], C)), "asstring")), ":77B:"))) {
      await $.wset([$t180], "v_mf77", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t180], "fieldbyname", ["M77B"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t180], "fieldbyname", ["MF77B"], C)), "asstring"))), { get: async () => L0["v_mf77"], set: async (v) => { L0["v_mf77"] = v; }, local: true });
    } else {
      await $.wset([$t180], "v_mf77", "", { get: async () => L0["v_mf77"], set: async (v) => { L0["v_mf77"] = v; }, local: true });
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall(L0["v_dataset"], "fieldbyname", ["hesabat"])), "asvariant")), ""))) {
    L0["f"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["v_mf20"], "\r\n"), L0["v_mf21"]), L0["v_mf23"]), L0["v_mf32"]), L0["v_mf50"]), L0["v_mf52"]), L0["v_mf53"]), L0["v_mf54"]), L0["v_mf55"]), L0["v_mf56"]), L0["v_mf57"]), L0["v_mf59"]), L0["v_mf70"]), L0["v_mf71"]), L0["v_mf72"]), L0["v_mf77"]);
    await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "create", [Self])));
    await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", L0["f"]);
    await $.mcall((await $.v(C, "printform")), "showmodal", []);
  } else {
    L0["f"] = (await $.mv((await $.mcall(L0["v_dataset"], "fieldbyname", ["hesabat"])), "asvariant"));
    await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "create", [Self])));
    await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", L0["f"]);
    await $.mcall((await $.v(C, "printform")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "konvert3Execute", async function konvert3Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "z": 0, "status": 0, "shifr": 0, "k": 0, "m": 0, "struktur": 0, "num": 0, "num1": 0, "num2": 0, "swstring": '', "fli": '', "acount": '', "referens": '', "valu": '', "valyuta": '', "describ": '', "describ2": '', "mt": '', "all": '', "bic": '', "dat": '', "tax": '', "kod": '', "kor": '', "bank_voin": '', "dirold": '', "dirnew": '', "dir": '', "fl": null};
  await $.fixArgs(L0, ["sender"]);
  L0["struktur"] = 0;
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_KONVERT"]])));
  L0["shifr"] = 3;
  L0["status"] = 2;
  { const $t181 = $.sub((await $.mv((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), "count")), 1);
    L0["i"] = 0;
    let $t182 = true;
    for (;;) {
      if (!$t182) { L0["i"] = $.succ(L0["i"], 1); }
      $t182 = false;
      if (!($.ord(L0["i"]) <= $.ord($t181))) break;
      await $.stmt((await $.call(C, "reset", [$.ref(async () => L0["fl"], async ($t183) => { L0["fl"] = $t183; }), (await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]]))])));
      L0["z"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["fl"]]))))) {
        L0["z"] = $.add(L0["z"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["fl"], async ($t184) => { L0["fl"] = $t184; }), $.ref(async () => L0["fli"], async ($t185) => { L0["fli"] = $t185; })])));
        L0["m"] = $.add(L0["m"], 1);
        L0["swstring"] = (await $.call(C, "trim", [L0["fli"]]));
        if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), "-}{5:"))) {
          { const $t186 = await $.iset((await $.mv((await $.v(C, "memo3")), "Lines")), [L0["z"]], L0["swstring"]); if ($t186 !== undefined) { await $.mset((await $.v(C, "memo3")), "Lines", $t186); } }
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), "-}{5:"))) {
          L0["all"] = (await $.mv((await $.v(C, "Memo3")), "text"));
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 3]))])), "{1:"))) {
          L0["mt"] = $.add("MT", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "settingsINN_MT_READLINE")), "asInteger")), 3]))])));
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 3]))])), "{1:"))) {
          L0["bic"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 7, 8]))]));
          L0["bic"] = $.add(L0["bic"], (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 16, 3]))])));
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 4]))])), ":20:"))) {
          L0["referens"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 5, 20]))]));
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":32A:"))) {
          L0["dat"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [L0["swstring"]]))), 6, 6]))]));
          L0["valyuta"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [L0["swstring"]]))), 12, 3]))]));
          L0["valu"] = (await $.call(C, "trim", [(await $.call(C, "copy", [((await $.call(C, "trim", [L0["swstring"]]))), 15, 100]))]));
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 4]))])), ":59:"))) {
          L0["num"] = L0["z"];
          L0["acount"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 6, 100]))]));
        }
        if ($.truthy($.eq(L0["z"], $.add(L0["num"], 1)))) {
          L0["describ2"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(L0["swstring"]), 1, 100]))]));
        }
        if ($.truthy($.eq(L0["z"], $.add(L0["num"], 2)))) {
          if ($.truthy($.ne((await $.call(C, "pos", ["/", (await $.call(C, "trim", [L0["swstring"]]))])), 0))) {
            L0["tax"] = (await $.call(C, "copy", [(await $.call(C, "trim", [L0["swstring"]])), 0, $.sub((await $.call(C, "pos", ["/", (await $.call(C, "trim", [L0["swstring"]]))])), 1)]));
          } else {
            L0["tax"] = (await $.call(C, "trim", [L0["swstring"]]));
          }
        }
        if ($.truthy($.eq(L0["z"], $.add(L0["num"], 3)))) {
          L0["kod"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(L0["swstring"]), 1, 6]))]));
          L0["bank_voin"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(L0["swstring"]), 8, 10]))]));
        }
        if ($.truthy($.eq(L0["z"], $.add(L0["num"], 4)))) {
          L0["kor"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(L0["swstring"]), 0, 13]))]));
        }
        if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50K:")), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50A:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50B:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50F:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50C:")))), async () => ($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), ":50D:")))))) {
          L0["num2"] = L0["z"];
        }
        if ($.truthy($.eq(L0["z"], $.add(L0["num2"], 1)))) {
          L0["describ"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(L0["swstring"]), 1, 100]))]));
        }
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["swstring"], 1, 5]))])), "-}{5:"))) {
        }
        await $.tick();
      }
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["fl"], async ($t187) => { L0["fl"] = $t187; })])));
      if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path_out"])), "asstring"))]))))) {
        await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring"))])));
      }
      L0["dir"] = $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\");
      if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
        await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
      }
      L0["dirnew"] = $.add(L0["dir"], (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
      L0["dirold"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_settings")), "fieldbyname", ["path"])), "asstring")), "\\"), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "sw_out_FileListBox")), "Items")), [L0["i"]])), 1, 100]))])));
      await $.stmt((await $.call(C, "movefile", [(await $.call(C, "pchar", [L0["dirold"]])), (await $.call(C, "pchar", [L0["dirnew"]]))])));
      if ($.truthy($.eq(L0["mt"], "MT103"))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in", [L0["acount"], L0["referens"], L0["valu"], L0["bic"], L0["valyuta"], L0["describ"], L0["describ2"], L0["status"], L0["shifr"], L0["mt"], L0["all"], L0["tax"], L0["kod"], L0["bank_voin"], L0["kor"]]])));
        await $.mcall((await $.mv((await $.v(C, "richedit2")), "Lines")), "Clear", []);
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["insert_in_other", [L0["referens"], L0["bic"], L0["status"], L0["shifr"], L0["mt"], L0["all"]]])));
        await $.mcall((await $.mv((await $.v(C, "richedit2")), "Lines")), "Clear", []);
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "refresh", []);
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "Repaint", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Refresh", []);
  await $.mcall((await $.v(C, "cheskaccount")), "execute", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "open", []);
  await $.mcall((await $.v(C, "sw_out_FileListBox")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ActiveFormDeactivate", async function ActiveFormDeactivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t188 = $.sub((await $.mv((await $.v(C, "swdatamodule")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t189 = true;
    for (;;) {
      if (!$t189) { L0["i"] = $.succ(L0["i"], 1); }
      $t189 = false;
      if (!($.ord(L0["i"]) <= $.ord($t188))) break;
      if ($.truthy(($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "swdatamodule")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TDataSet")))))) {
        await $.mcall((await $.idx((await $.mv((await $.v(C, "swdatamodule")), "Components")), [L0["i"]])), "close", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ActiveFormKeyDown", async function ActiveFormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_f5"))))) {
    await $.stmt((await $.call(C, "RefreshButtonClick", [(await $.v(C, "RefreshButton"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSWIFT_MAIN", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePage", (await $.v(C, "TabSheet2")));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "settings")), "open", []);
  await $.set(C, "OutFilePath", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "settingsPATH")), "asstring")));
  await $.set(C, "struktur", "PRT");
  if ($.truthy($.eq((await $.v(C, "struktur")), "PRT"))) {
    await $.mset((await $.v(C, "sw_out_FileListBox")), "Mask", ("*.prt"));
  }
  if ($.truthy($.eq((await $.v(C, "struktur")), "FIN"))) {
    await $.mset((await $.v(C, "sw_out_FileListBox")), "Mask", ("*.fin"));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "commitingExecute", async function commitingExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "GRIDOUT2")), "CanFocus")))) {
    await $.mcall((await $.v(C, "GRIDOUT2")), "SetFocus", []);
  }
  {
    const $t190 = (await $.v(C, "GRIDOUT2"));
    const $t191 = (await $.wv([$t190], "SelectedRows", C, false));
    const $t192 = (await $.mv((await $.wv([$t190, $t191], "DataSource", C, false)), "DataSet"));
    const $t193 = (await $.wv([$t190, $t191, $t192], "SWDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t190, $t191, $t192, $t193], "Count", C, false)), 0))) {
        await $.wset([$t190, $t191, $t192, $t193], "CurrentRowSelected", (await $.wv([$t190, $t191, $t192, $t193], "True", C, false)), C);
      }
      { const $t194 = $.sub((await $.wv([$t190, $t191, $t192, $t193], "Count", C, false)), 1);
        await $.wset([$t190, $t191, $t192, $t193], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t195 = true;
        for (;;) {
          if (!$t195) { await $.wset([$t190, $t191, $t192, $t193], "Index", $.succ((await $.wv([$t190, $t191, $t192, $t193], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t195 = false;
          if (!($.ord((await $.wv([$t190, $t191, $t192, $t193], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t194))) break;
          await $.stmt((await $.wcall([$t190, $t191, $t192, $t193], "GotoBookmark", [(await $.wcall([$t190, $t191, $t192, $t193], "Pointer", [(await $.idx((await $.wv([$t190, $t191, $t192, $t193], "Items", C, false)), [(await $.wv([$t190, $t191, $t192, $t193], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t190, $t191, $t192, $t193], "TransactionID", (await $.mv((await $.wcall([$t190, $t191, $t192, $t193], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t190, $t191, $t192, $t193], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t196 = (await $.wcall([$t190, $t191, $t192, $t193], "MessageDlg", [(await $.wcall([$t190, $t191, $t192, $t193], "Format", ["Əməliyyat  #%d təsdiq edilsin?", [(await $.wv([$t190, $t191, $t192, $t193], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t190, $t191, $t192, $t193], "mtConfirmation", C, false)), [(await $.wv([$t190, $t191, $t192, $t193], "mbYes", C, false)), (await $.wv([$t190, $t191, $t192, $t193], "mbNo", C, false)), (await $.wv([$t190, $t191, $t192, $t193], "mbCancel", C, false))], 0], C));
              if ($.eq($t196, (await $.wv([$t190, $t191, $t192, $t193], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t196, (await $.wv([$t190, $t191, $t192, $t193], "mrCancel", C, false)))) {
                break;
              }
            }
          }
          await $.mcall((await $.wv([$t190, $t191, $t192, $t193], "Application", C, false)), "ProcessMessages", []);
          await $.mcall((await $.wv([$t190, $t191, $t192, $t193], "form12", C, false)), "showmodal", []);
          if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t190, $t191, $t192, $t193], "form12", C, false)), "Edit2")), "text")), "0"))) {
            return L0.result;
          } else {
            if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t190, $t191, $t192, $t193], "Form12", C, false)), "Edit2")), "Text")), "1"))) {
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t190, $t191, $t192, $t193], "SWDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["sw_out_commit", [(await $.wv([$t190, $t191, $t192, $t193], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
            }
          }
          await $.wset([$t190, $t191, $t192, $t193], "WillRefresh", (await $.wv([$t190, $t191, $t192, $t193], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t190, $t191, $t192, $t193], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.wv([$t190, $t191, $t192, $t193], "SWDataModule", C, false)), "sw_out_2")), "refresh", []);
      }
      await $.mcall((await $.mv((await $.wv([$t190, $t191, $t192, $t193], "SWDataModule", C, false)), "sw_out")), "Refresh", []);
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "RecordCount")), 0))) {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "Capet1Click", async function Capet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "edit1")), "Text", "1");
    await $.mcall((await $.v(C, "ToolButton8")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton13")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "MenuItem6Click", async function MenuItem6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton11")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "MenuItem7Click", async function MenuItem7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton9")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "MenuItem8Click", async function MenuItem8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton2")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "mliyyatGnnsndlringondrm1Click", async function mliyyatGnnsndlringondrm1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SEND_TRAN"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SwDataModule")), "sw_in_insert")), "CallProcedure", ["transend", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "grid_out")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger")), 999]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "CapEt2Click", async function CapEt2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "edit1")), "Text", "3");
    await $.mcall((await $.v(C, "ToolButton8")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "MenuItem1Click", async function MenuItem1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "createfile")), "click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "MenuItem4Click", async function MenuItem4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "FieldByName", ["MESSAGETYPE"])), "AsString")), "MT103")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GRIDOUT3")), "DataSource")), "DataSet")), "FieldByName", ["FINCOPY"])), "AsString")), "AZN")))))) {
      await $.mcall((await $.v(C, "Form8")), "ShowModal", []);
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Valyutasi"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "GRIDOUT2DblClick", async function GRIDOUT2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
  await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", $.add("-", (await $.v(C, "v_refrsh")))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "gridout3DblClick", async function gridout3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_refrsh", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridout3")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
  await $.stmt((await $.call(C, "Pluginloader", ["filereport.bpl", "Azipsnew", $.add("-", (await $.v(C, "v_refrsh")))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("DateTimeToStrUs", async function DateTimeToStrUs(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dt": $.copyArg(p0), result: '', "us": ''};
  await $.fixArgs(L0, ["dt"]);
  L0["result"] = (await $.call(C, "FormatDateTime", ["hh\":\"nn\":\"ss\"-\" dd.mm.yyyy", L0["dt"]]));
  L0["dt"] = (await $.call(C, "Frac", [L0["dt"]]));
  L0["dt"] = $.mul($.mul($.mul(L0["dt"], 24), 60), 60);
  L0["us"] = $.add((await $.call(C, "IntToStr", [(await $.call(C, "Round", [$.mul((await $.call(C, "Frac", [L0["dt"]])), 1000000)]))])), "*");
  L0["result"] = $.add($.add(L0["us"], L0["result"]), (await $.call(C, "StringOfChar", ["0", $.sub(6, (await $.call(C, "Length", [L0["us"]])))])));
  return L0.result;
}, {"params": ["dt"], "kind": "function", "ptypes": ["TDatetime"]});
  U.func("String2Hex", async function String2Hex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t197) => { L0["result"] = $t197; }), $.mul((await $.call(C, "Length", [L0["buffer"]])), 2)])));
  await $.stmt((await $.call(C, "BinToHex", [(await $.call(C, "PAnsiChar", [L0["buffer"]])), (await $.call(C, "PChar", [L0["result"]])), (await $.call(C, "Length", [L0["buffer"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "function", "ptypes": ["AnsiString"]});
  U.func("Hex2String", async function Hex2String(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t198) => { L0["result"] = $t198; }), $.idiv((await $.call(C, "Length", [L0["buffer"]])), 2)])));
  await $.stmt((await $.call(C, "HexToBin", [(await $.call(C, "PChar", [L0["buffer"]])), (await $.call(C, "PAnsiChar", [L0["result"]])), (await $.call(C, "Length", [L0["result"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "function", "ptypes": ["String"]});
  U.func("Encrypting", async function Encrypting(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), result: '', "st": '', "s": '', "dt": '', "str": '', "x": 0, "i": 0, "k": 0};
  await $.fixArgs(L0, ["key"]);
  await $.set(C, "datdate", (await $.v(C, "now")));
  L0["dt"] = (await $.call(C, "DateTimeToStrUs", [(await $.v(C, "datdate"))]));
  L0["k"] = (await $.call(C, "strtoint", [(await $.call(C, "copy", [L0["dt"], 8, 2]))]));
  L0["st"] = (await $.call(C, "String2Hex", [$.add($.add(L0["dt"], "SMARTBANK.EXE"), "XOHKS")]));
  L0["x"] = L0["k"];
  { const $t199 = (await $.call(C, "length", [L0["st"]]));
    L0["i"] = 1;
    let $t200 = true;
    for (;;) {
      if (!$t200) { L0["i"] = $.succ(L0["i"], 1); }
      $t200 = false;
      if (!($.ord(L0["i"]) <= $.ord($t199))) break;
      L0["s"] = (await $.call(C, "chr", [($.sub((await $.call(C, "ord", [(await $.idx(L0["st"], [L0["i"]]))])), L0["x"]))]));
      L0["str"] = $.add(L0["str"], L0["s"]);
      await $.tick();
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["key"], "kind": "function", "ptypes": ["integer"]});
  U.func("Decrypt", async function Decrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"v_str": $.copyArg(p0), "key": $.copyArg(p1), result: '', "st": '', "str": '', "s": '', "x": 0, "i": 0};
  await $.fixArgs(L0, ["v_str", "key"]);
  L0["st"] = L0["v_str"];
  L0["x"] = L0["key"];
  { const $t201 = (await $.call(C, "length", [L0["st"]]));
    L0["i"] = 1;
    let $t202 = true;
    for (;;) {
      if (!$t202) { L0["i"] = $.succ(L0["i"], 1); }
      $t202 = false;
      if (!($.ord(L0["i"]) <= $.ord($t201))) break;
      L0["s"] = (await $.call(C, "chr", [($.add((await $.call(C, "ord", [(await $.idx(L0["st"], [L0["i"]]))])), L0["x"]))]));
      L0["str"] = $.add(L0["str"], L0["s"]);
      await $.tick();
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["v_str", "key"], "kind": "function", "ptypes": ["String", "integer"]});
  U.func("ufxcredit", async function ufxcredit(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accountid": $.copyArg(p0), "v_amount": $.copyArg(p1), result: 0, "st2": '', "st": '', "st3": '', "st4": '', "st5": ''};
  await $.fixArgs(L0, ["accountid", "v_amount"]);
  L0["st3"] = "SMARTBANK.EXE";
  {
    const $t203 = (await $.v(C, "SwDataModule"));
    await $.mcall((await $.wv([$t203], "get_cr_acc", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t203], "get_cr_acc", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t203], "get_cr_acc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t203], "get_ufx_check", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t203], "get_ufx_check", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t203], "get_ufx_check", C, false)), "Open", []);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.wv([$t203], "get_cr_acc", C, false)), "FieldByName", ["ncount"])), "AsInteger")), 0))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t203], "get_ufx_check", C, false)), "FieldByName", ["v_cnt"])), "AsInteger")), 0))) {
        await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "Open", []);
        await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "SetVariable", ["VCREDITID", (await $.mv((await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "FieldByName", ["VCREDITID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "Open", []);
        if ($.truthy($.lt((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "FieldByName", ["vdueinterestrest"])), "AsFloat"))))) {
          await $.wset([$t203], "Result", 0, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        } else {
          await $.wset([$t203], "Result", $.sub((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "FieldByName", ["vdueinterestrest"])), "AsFloat"))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        }
        await $.mcall((await $.wv([$t203], "Insufx", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t203], "Insufx", C, false)), "SetVariable", ["VCREDITID", (await $.mv((await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "FieldByName", ["VCREDITID"])), "AsInteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t203], "Insufx", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t203], "Insufx", C, false)), "SetVariable", ["VDUEINTERESTREST", (await $.mv((await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "FieldByName", ["vdueinterestrest"])), "AsFloat"))])));
        await $.stmt((await $.mcall((await $.wv([$t203], "Insufx", C, false)), "SetVariable", ["V_REST", $.sub((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t203], "get_debtamount", C, false)), "FieldByName", ["vdueinterestrest"])), "AsFloat")))])));
        await $.stmt((await $.mcall((await $.wv([$t203], "Insufx", C, false)), "SetVariable", ["VCODE", (await $.wcall([$t203], "Encrypting", [(await $.mv((await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "FieldByName", ["VCREDITID"])), "AsInteger"))], C))])));
        await $.stmt((await $.mcall((await $.wv([$t203], "Insufx", C, false)), "SetVariable", ["DATDATE", (await $.wv([$t203], "datdate", C, false))])));
        await $.mcall((await $.wv([$t203], "Insufx", C, false)), "ExecSQL", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t203], "sboapiDataModule", C, false)), "SBSession")), "Commit", [])));
      } else {
        await $.mcall((await $.wv([$t203], "ufxcode", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t203], "ufxcode", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t203], "ufxcode", C, false)), "Open", []);
        await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t203], "get_creditid", C, false)), "Open", []);
        await $.wset([$t203], "st2", (await $.wcall([$t203], "Decrypt", [(await $.mv((await $.mcall((await $.wv([$t203], "ufxcode", C, false)), "FieldByName", ["code"])), "AsAnsiString")), (await $.wcall([$t203], "strtoint", [(await $.wcall([$t203], "copy", [(await $.mv((await $.mcall((await $.wv([$t203], "ufxcode", C, false)), "FieldByName", ["dat"])), "AsString")), 12, 2], C))], C))], C)), { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true });
        await $.wset([$t203], "st", (await $.wcall([$t203], "copy", [(await $.wcall([$t203], "ReverseString", [((await $.wcall([$t203], "copy", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false)), $.add($.sub((await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C)), (await $.wcall([$t203], "length", ["534D41525442414E4B2E455845584F484B53"], C))), 1), (await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C))], C)))], C)), $.add($.add((await $.wcall([$t203], "Pos", ["584F484B53", (await $.wcall([$t203], "ReverseString", [((await $.wcall([$t203], "copy", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false)), $.add($.sub((await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C)), (await $.wcall([$t203], "length", ["534D41525442414E4B2E455845584F484B53"], C))), 1), (await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C))], C)))], C))], C)), (await $.wcall([$t203], "length", ["584F484B53"], C))), 1), (await $.wcall([$t203], "length", [(await $.wcall([$t203], "ReverseString", [((await $.wcall([$t203], "copy", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false)), $.add($.sub((await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C)), (await $.wcall([$t203], "length", ["534D41525442414E4B2E455845584F484B53"], C))), 1), (await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C))], C)))], C))], C))], C)), { get: async () => L0["st"], set: async (v) => { L0["st"] = v; }, local: true });
        if ($.truthy((await $.wcall([$t203], "ContainsText", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false)), (await $.wcall([$t203], "ReverseString", [(await $.wv([$t203], "st", { get: async () => L0["st"], set: async (v) => { L0["st"] = v; }, local: true }, false))], C))], C)))) {
          await $.wset([$t203], "st4", (await $.wcall([$t203], "copy", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false)), 0, $.sub((await $.wcall([$t203], "Length", [(await $.wv([$t203], "st2", { get: async () => L0["st2"], set: async (v) => { L0["st2"] = v; }, local: true }, false))], C)), (await $.wcall([$t203], "length", ["534D41525442414E4B2E455845584F484B53"], C)))], C)), { get: async () => L0["st4"], set: async (v) => { L0["st4"] = v; }, local: true });
          await $.wset([$t203], "st5", (await $.wcall([$t203], "hex2string", [(await $.wv([$t203], "st4", { get: async () => L0["st4"], set: async (v) => { L0["st4"] = v; }, local: true }, false))], C)), { get: async () => L0["st5"], set: async (v) => { L0["st5"] = v; }, local: true });
          await $.wset([$t203], "st5", (await $.wcall([$t203], "copy", [(await $.wv([$t203], "st5", { get: async () => L0["st5"], set: async (v) => { L0["st5"] = v; }, local: true }, false)), $.add((await $.wcall([$t203], "LastDelimiter", ["*", (await $.wv([$t203], "st5", { get: async () => L0["st5"], set: async (v) => { L0["st5"] = v; }, local: true }, false))], C)), 1), 2], C)), { get: async () => L0["st5"], set: async (v) => { L0["st5"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t203], "st5", { get: async () => L0["st5"], set: async (v) => { L0["st5"] = v; }, local: true }, false)), (await $.wcall([$t203], "copy", [(await $.mv((await $.mcall((await $.wv([$t203], "ufxcode", C, false)), "FieldByName", ["dat"])), "AsString")), 12, 2], C))))) {
            await $.stmt((await $.wcall([$t203], "showmessage", ["yeah"], C)));
            await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "Close", []);
            await $.stmt((await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
            await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "Open", []);
            if ($.truthy($.lt((await $.mv((await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "FieldByName", ["v_rstamount"])), "AsFloat")), 0))) {
              await $.wset([$t203], "Result", $.sub((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.wcall([$t203], "abs", [(await $.mv((await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "FieldByName", ["v_rstamount"])), "AsFloat"))], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              await $.mcall((await $.wv([$t203], "updufx", C, false)), "Close", []);
              await $.stmt((await $.mcall((await $.wv([$t203], "updufx", C, false)), "SetVariable", ["vaccid", (await $.wv([$t203], "accountid", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))])));
              await $.stmt((await $.mcall((await $.wv([$t203], "updufx", C, false)), "SetVariable", ["TRANSAMOUNT", $.sub((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.wcall([$t203], "abs", [(await $.mv((await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "FieldByName", ["v_rstamount"])), "AsFloat"))], C)))])));
              await $.mcall((await $.wv([$t203], "updufx", C, false)), "ExecSQL", []);
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t203], "sboapiDataModule", C, false)), "SBSession")), "Commit", [])));
              if ($.truthy($.lt(($.sub((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.wcall([$t203], "abs", [(await $.mv((await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "FieldByName", ["v_rstamount"])), "AsFloat"))], C)))), 0))) {
                await $.wset([$t203], "Result", 0, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              } else {
                await $.wset([$t203], "Result", $.sub((await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.wcall([$t203], "abs", [(await $.mv((await $.mcall((await $.wv([$t203], "get_restufxcheck", C, false)), "FieldByName", ["v_rstamount"])), "AsFloat"))], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              }
            } else {
              await $.wset([$t203], "Result", (await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          } else {
            await $.stmt((await $.wcall([$t203], "ShowMessage", ["Kode Standarta uygun deyil"], C)));
            return L0.result;
          }
        } else {
          await $.stmt((await $.wcall([$t203], "ShowMessage", ["Kode Standarta uygun deyil"], C)));
          return L0.result;
        }
      }
    } else {
      await $.wset([$t203], "Result", (await $.wv([$t203], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": ["accountid", "v_amount"], "kind": "function", "ptypes": ["Integer", "Double"]});
  U.method("TSWIFT_MAIN", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_OUT_OPENARCHIVE"]])));
  await $.mcall((await $.v(C, "archive_out")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton15Click", async function ToolButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "Open", []);
  await $.set(C, "OUT_FORM", (await $.mcall((await $.v(C, "TOUT_FORM")), "Create", [Self])));
  await $.mcall((await $.v(C, "OUT_FORM")), "ShowModal", []);
  await $.set(C, "forma", (await $.v(C, "new")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "ToolButton17Click", async function ToolButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_PRINT"]])));
  await $.set(C, "a", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyname", ["all_text"])), "asstring")));
  await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", (await $.v(C, "a")));
  await $.mcall((await $.v(C, "printform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSWIFT_MAIN", "AddINTransNewExecute", async function AddINTransNewExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0, "transamount": 0, "v_transamount": 0, "v_sendammount": 0, "vcardtype": '', "resp": '', "resptext": '', "ufxrrn": '', "pcardnumber": '', "valyutaname": '', "descript": '', "cardnumber": '', "cardtype": '', "descp": '', "valyuta": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t204 = (await $.v(C, "GridIn"));
    const $t205 = (await $.wv([$t204], "SelectedRows", C, false));
    const $t206 = (await $.mv((await $.wv([$t204, $t205], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t204, $t205, $t206], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t204, $t205, $t206], "Inc", [$.ref(async () => (await $.wv([$t204, $t205, $t206], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t207) => { await $.wset([$t204, $t205, $t206], "TrCount", $t207, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t204, $t205, $t206], "IDs", (await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t204, $t205, $t206], "DisableControls", [], C));
      try {
        { const $t208 = $.sub((await $.wv([$t204, $t205, $t206], "Count", C, false)), 1);
          await $.wset([$t204, $t205, $t206], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t209 = true;
          for (;;) {
            if (!$t209) { await $.wset([$t204, $t205, $t206], "i", $.succ((await $.wv([$t204, $t205, $t206], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t209 = false;
            if (!($.ord((await $.wv([$t204, $t205, $t206], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t208))) break;
            await $.stmt((await $.wcall([$t204, $t205, $t206], "GotoBookmark", [(await $.wcall([$t204, $t205, $t206], "TBookmark", [(await $.idx((await $.wv([$t204, $t205, $t206], "Items", C, false)), [(await $.wv([$t204, $t205, $t206], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.and_(($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["status"], C)), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT103")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT102")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT205")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT900")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT910")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT950")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT298")))), async () => ($.eq((await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["MT"], C)), "asstring")), "MT999")))))) {
              await $.stmt((await $.wcall([$t204, $t205, $t206], "Inc", [$.ref(async () => (await $.wv([$t204, $t205, $t206], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t210) => { await $.wset([$t204, $t205, $t206], "TrCount", $t210, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t204, $t205, $t206], "IDs", $.add($.add((await $.wv([$t204, $t205, $t206], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t204, $t205, $t206], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t204, $t205, $t206], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t204, $t205, $t206], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t211) => { await $.wset([$t204, $t205, $t206], "IDs", $t211, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t204, $t205, $t206], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyatlar günün sənədlərinə əlavə edilsin ?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t212 = (await $.mv((await $.v(C, "SWDataModule")), "SW_IN_FORAddIn"));
      await $.stmt($.wcall([$t212], "Close", [], C));
      await $.stmt((await $.wcall([$t212], "SetVariable", ["IDs", (await $.wv([$t212], "IDS", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t212], "Open", [], C));
      { const $t213 = $.sub((await $.wv([$t212], "recordcount", C, false)), 1);
        await $.wset([$t212], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t214 = true;
        for (;;) {
          if (!$t214) { await $.wset([$t212], "i", $.succ((await $.wv([$t212], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t214 = false;
          if (!($.ord((await $.wv([$t212], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t213))) break;
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t212], "SWDataModule", C, false)), "sw_settings")), "FieldByName", ["enabledufx"])), "AsInteger")), 1))) {
            if ($.truthy($.gt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "CallIntegerFunction", ["CardCheck", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), 2]])), 0))) {
              if ($.truthy($.eq((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "CallFloatFunction", ["UfxCheck", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger"))]])), 0))) {
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "CallProcedure", ["Ufx_send", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), 2, (await $.wv([$t212], "vcardtype", { get: async () => L0["vcardtype"], set: async (v) => { L0["vcardtype"] = v; }, local: true }, false)), (await $.wv([$t212], "pcardnumber", { get: async () => L0["pcardnumber"], set: async (v) => { L0["pcardnumber"] = v; }, local: true }, false)), (await $.wv([$t212], "valyutaname", { get: async () => L0["valyutaname"], set: async (v) => { L0["valyutaname"] = v; }, local: true }, false)), (await $.wv([$t212], "transamount", { get: async () => L0["transamount"], set: async (v) => { L0["transamount"] = v; }, local: true }, false)), (await $.wv([$t212], "descript", { get: async () => L0["descript"], set: async (v) => { L0["descript"] = v; }, local: true }, false))]])));
                await $.wset([$t212], "v_transamount", (await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "GetParameter", [5])), { get: async () => L0["v_transamount"], set: async (v) => { L0["v_transamount"] = v; }, local: true });
                await $.wset([$t212], "cardnumber", (await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "GetParameter", [3])), { get: async () => L0["cardnumber"], set: async (v) => { L0["cardnumber"] = v; }, local: true });
                await $.wset([$t212], "cardtype", (await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "GetParameter", [2])), { get: async () => L0["cardtype"], set: async (v) => { L0["cardtype"] = v; }, local: true });
                await $.wset([$t212], "descp", (await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "GetParameter", [6])), { get: async () => L0["descp"], set: async (v) => { L0["descp"] = v; }, local: true });
                await $.wset([$t212], "valyuta", (await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "GetParameter", [4])), { get: async () => L0["valyuta"], set: async (v) => { L0["valyuta"] = v; }, local: true });
                await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "cardfindcredit")), "close", []);
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "cardfindcredit")), "SetVariable", ["card_accid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t212], "SWDataModule", C, false)), "sw_in")), "fieldbyname", ["acount"])), "AsString"))])));
                await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "cardfindcredit")), "Open", []);
                await $.wset([$t212], "v_sendammount", (await $.wcall([$t212], "ufxcredit", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t212], "SWDataModule", C, false)), "cardfindcredit")), "fieldbyname", ["crdt"])), "asInteger")), (await $.wv([$t212], "v_transamount", { get: async () => L0["v_transamount"], set: async (v) => { L0["v_transamount"] = v; }, local: true }, false))], C)), { get: async () => L0["v_sendammount"], set: async (v) => { L0["v_sendammount"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t212], "v_sendammount", { get: async () => L0["v_sendammount"], set: async (v) => { L0["v_sendammount"] = v; }, local: true }, false)), 0))) {
                  await $.wset([$t212], "RespText", "Successfully processed", { get: async () => L0["resptext"], set: async (v) => { L0["resptext"] = v; }, local: true });
                  await $.stmt((await $.wcall([$t212], "ShowMessage", ["Əməliyyat Karta getmedi mebleg 0 !!!"], C)));
                } else {
                  await $.wset([$t212], "resp", (await $.mcall((await $.mv((await $.wv([$t212], "UFX71", C, false)), "GetUFX7")), "fundstransfer", [(await $.wv([$t212], "cardnumber", { get: async () => L0["cardnumber"], set: async (v) => { L0["cardnumber"] = v; }, local: true }, false)), (await $.wv([$t212], "cardtype", { get: async () => L0["cardtype"], set: async (v) => { L0["cardtype"] = v; }, local: true }, false)), (await $.wcall([$t212], "FormatDateTime", ["YYYY-MM-DD hh:mm:ss", (await $.wv([$t212], "now", C, false))], C)), (await $.wv([$t212], "descp", { get: async () => L0["descp"], set: async (v) => { L0["descp"] = v; }, local: true }, false)), (await $.wv([$t212], "valyuta", { get: async () => L0["valyuta"], set: async (v) => { L0["valyuta"] = v; }, local: true }, false)), (await $.wcall([$t212], "floattostr", [(await $.wv([$t212], "v_sendammount", { get: async () => L0["v_sendammount"], set: async (v) => { L0["v_sendammount"] = v; }, local: true }, false))], C))])), { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true });
                  await $.wset([$t212], "ufxrrn", (await $.wcall([$t212], "copy", [(await $.wv([$t212], "resp", { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true }, false)), 0, (await $.wcall([$t212], "pos", ["#", (await $.wv([$t212], "resp", { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["ufxrrn"], set: async (v) => { L0["ufxrrn"] = v; }, local: true });
                  await $.wset([$t212], "RespText", (await $.wcall([$t212], "copy", [(await $.wv([$t212], "resp", { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true }, false)), $.add((await $.wcall([$t212], "pos", ["#", (await $.wv([$t212], "resp", { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true }, false))], C)), 1), (await $.wcall([$t212], "length", [(await $.wv([$t212], "resp", { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["resptext"], set: async (v) => { L0["resptext"] = v; }, local: true });
                  await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "card")), "callprocedure", ["UfxResponse", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), 2, (await $.wv([$t212], "RespText", { get: async () => L0["resptext"], set: async (v) => { L0["resptext"] = v; }, local: true }, false)), (await $.wv([$t212], "v_sendammount", { get: async () => L0["v_sendammount"], set: async (v) => { L0["v_sendammount"] = v; }, local: true }, false)), (await $.wv([$t212], "resp", { get: async () => L0["resp"], set: async (v) => { L0["resp"] = v; }, local: true }, false))]])));
                }
                if ($.truthy($.eq((await $.wcall([$t212], "UPPERCASE", [(await $.wv([$t212], "RespText", { get: async () => L0["resptext"], set: async (v) => { L0["resptext"] = v; }, local: true }, false))], C)), (await $.wcall([$t212], "UPPERCASE", ["Successfully processed"], C))))) {
                  if ($.truthy($.ne((await $.wv([$t212], "v_sendammount", { get: async () => L0["v_sendammount"], set: async (v) => { L0["v_sendammount"] = v; }, local: true }, false)), 0))) {
                    await $.stmt((await $.wcall([$t212], "ShowMessage", ["Əməliyyat uğurla keçdi!!!"], C)));
                    await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_in_transactions2", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["bic"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["ACOUNT"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["valu"], C)), "AsFloat")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description2"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["TAX"], C)), "asstring"))]])));
                  } else {
                    await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_in_transactions2", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["bic"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["ACOUNT"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["valu"], C)), "AsFloat")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description2"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["TAX"], C)), "asstring"))]])));
                  }
                } else {
                  await $.stmt((await $.wcall([$t212], "ShowMessage", [$.add($.add($.add("Əməliyyat keçmədi!!!", ","), "Səhvin adı:"), (await $.wv([$t212], "RespText", { get: async () => L0["resptext"], set: async (v) => { L0["resptext"] = v; }, local: true }, false)))], C)));
                  return L0.result;
                }
              } else {
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_in_transactions2", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["bic"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["ACOUNT"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["valu"], C)), "AsFloat")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description2"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["TAX"], C)), "asstring"))]])));
              }
            } else {
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_in_transactions2", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["bic"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["ACOUNT"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["valu"], C)), "AsFloat")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description2"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["TAX"], C)), "asstring"))]])));
            }
          } else {
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t212], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_in_transactions2", [(await $.mv((await $.wcall([$t212], "fieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["bic"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["ACOUNT"], C)), "AsString")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["valu"], C)), "AsFloat")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["description2"], C)), "asstring")), (await $.mv((await $.wcall([$t212], "fieldbyName", ["TAX"], C)), "asstring"))]])));
          }
          await $.stmt($.wcall([$t212], "next", [], C));
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

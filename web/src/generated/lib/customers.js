// Generated from customers.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("customers", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "ImgList", "ExtCtrls", "Grids", "DBGrids", "StdCtrls", "DBCtrls", "OracleData", "ActnList", "comobj", "CMExcelExport", "Menus", "Variants", "OleServer", "ExcelXP", "balans", "CARDS_TLB", "MAINFORMImpl1", "payment", "Unit18", "newcard", "applicationpas", "cfilepas", "creditinfopas", "dpforms", "rezform", "Unitclient2", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tclients", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toexcel": {"name": "toexcel", "type": "TAction"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "editcardnumber": {"name": "EditCARDNUMBER", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "toolbutton24": {"name": "ToolButton24", "type": "TToolButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "editrbsnumber": {"name": "EditRBSNUMBER", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "editfname": {"name": "EditFNAME", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "editlname": {"name": "EditLNAME", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "editcardholder": {"name": "EditCARDHOLDER", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "editcredit_lim": {"name": "EditCREDIT_LIM", "type": "TEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "toolbutton25": {"name": "ToolButton25", "type": "TToolButton"}, "toolbutton26": {"name": "ToolButton26", "type": "TToolButton"}, "toolbutton27": {"name": "ToolButton27", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "editold_acc_no": {"name": "EditOLD_ACC_NO", "type": "TEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbgrid2": {"name": "dbGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("clients", null, "Tclients");
    U.var_("SearchField", '', "String");
    U.var_("SearchOptions", null, "TSearchRecordOptions");
    U.var_("num", 0, "integer");
  });
  U.method("Tclients", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_madd"]])));
  await $.set(C, "clients2", (await $.mcall((await $.v(C, "Tclients2")), "Create", [Self])));
  await $.mset((await $.mv((await $.v(C, "clients2")), "Edit1")), "Text", "NEW");
  await $.mcall((await $.v(C, "clients2")), "ShowModal", []);
  await $.mset((await $.v(C, "clients2")), "Caption", "  NEW CARD");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_medit"]])));
  await $.set(C, "clients2", (await $.mcall((await $.v(C, "Tclients2")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
  await $.mset((await $.mv((await $.v(C, "clients2")), "Edit1")), "Text", "EDIT");
  await $.mset((await $.v(C, "clients2")), "Caption", "  EDIT CARD");
  await $.mcall((await $.v(C, "clients2")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDSTYPE")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "statuscard")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "open", []);
  await $.set(C, "num", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("Tclients", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditRBSNUMBERChange", async function EditRBSNUMBERChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t3], "Filter", $.add($.add($.add("RBSNUMBER = '", (await $.mv((await $.wv([$t3], "editRBSNUMBER", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditRBSNUMBERKeyPress", async function EditRBSNUMBERKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t4 = L0["sender"];
      await $.wset([$t4], "SearchField", (await $.wcall([$t4], "copy", [(await $.wv([$t4], "Name", C, false)), 5, (await $.wcall([$t4], "length", [(await $.wv([$t4], "Name", C, false))], C))], C)), C);
      {
        const $t5 = (await $.wcall([$t4], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t4], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t4, $t5], "SearchRecord", [(await $.wv([$t4, $t5], "SearchField", C, false)), (await $.wv([$t4, $t5], "Text", C, false)), $.add((await $.wv([$t4, $t5], "SearchOptions", C, false)), [(await $.wv([$t4, $t5], "srFromCurrent", C, false)), (await $.wv([$t4, $t5], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t4, $t5], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t4, $t5], "mtInformation", C, false)), [(await $.wv([$t4, $t5], "mbNo", C, false)), (await $.wv([$t4, $t5], "mbYes", C, false))], 0], C)), (await $.wv([$t4, $t5], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t4, $t5], "SearchRecord", [(await $.wv([$t4, $t5], "SearchField", C, false)), (await $.wv([$t4, $t5], "Text", C, false)), $.add((await $.wv([$t4, $t5], "SearchOptions", C, false)), [(await $.wv([$t4, $t5], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t4, $t5], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t4, $t5], "mtInformation", C, false)), [(await $.wv([$t4, $t5], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "EditCARDHOLDERChange", async function EditCARDHOLDERChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t6], "Filter", $.add($.add($.add("CARDHOLDER = '", (await $.mv((await $.wv([$t6], "editCARDHOLDER", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditCARDHOLDERKeyPress", async function EditCARDHOLDERKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t9 = L0["sender"];
      await $.wset([$t9], "SearchField", (await $.wcall([$t9], "copy", [(await $.wv([$t9], "Name", C, false)), 5, (await $.wcall([$t9], "length", [(await $.wv([$t9], "Name", C, false))], C))], C)), C);
      {
        const $t10 = (await $.wcall([$t9], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t9], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t9, $t10], "SearchRecord", [(await $.wv([$t9, $t10], "SearchField", C, false)), (await $.wv([$t9, $t10], "Text", C, false)), $.add((await $.wv([$t9, $t10], "SearchOptions", C, false)), [(await $.wv([$t9, $t10], "srFromCurrent", C, false)), (await $.wv([$t9, $t10], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t9, $t10], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t9, $t10], "mtInformation", C, false)), [(await $.wv([$t9, $t10], "mbNo", C, false)), (await $.wv([$t9, $t10], "mbYes", C, false))], 0], C)), (await $.wv([$t9, $t10], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t9, $t10], "SearchRecord", [(await $.wv([$t9, $t10], "SearchField", C, false)), (await $.wv([$t9, $t10], "Text", C, false)), $.add((await $.wv([$t9, $t10], "SearchOptions", C, false)), [(await $.wv([$t9, $t10], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t9, $t10], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t9, $t10], "mtInformation", C, false)), [(await $.wv([$t9, $t10], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "ToolButton13Click", async function ToolButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "panel5")), "Visible")), false))) {
    await $.mset((await $.v(C, "ToolButton13")), "Down", true);
    await $.mset((await $.v(C, "Panel5")), "Visible", true);
    return L0.result;
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "panel5")), "Visible")), true))) {
      await $.mset((await $.v(C, "ToolButton13")), "Down", false);
      await $.mset((await $.v(C, "Panel5")), "Visible", false);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditCARDNUMBERExit", async function EditCARDNUMBERExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditCARDNUMBERKeyPress", async function EditCARDNUMBERKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t11 = L0["sender"];
      await $.wset([$t11], "SearchField", (await $.wcall([$t11], "copy", [(await $.wv([$t11], "Name", C, false)), 5, (await $.wcall([$t11], "length", [(await $.wv([$t11], "Name", C, false))], C))], C)), C);
      {
        const $t12 = (await $.wcall([$t11], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t11], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t11, $t12], "SearchRecord", [(await $.wv([$t11, $t12], "SearchField", C, false)), (await $.wv([$t11, $t12], "Text", C, false)), $.add((await $.wv([$t11, $t12], "SearchOptions", C, false)), [(await $.wv([$t11, $t12], "srFromCurrent", C, false)), (await $.wv([$t11, $t12], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t11, $t12], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t11, $t12], "mtInformation", C, false)), [(await $.wv([$t11, $t12], "mbNo", C, false)), (await $.wv([$t11, $t12], "mbYes", C, false))], 0], C)), (await $.wv([$t11, $t12], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t11, $t12], "SearchRecord", [(await $.wv([$t11, $t12], "SearchField", C, false)), (await $.wv([$t11, $t12], "Text", C, false)), $.add((await $.wv([$t11, $t12], "SearchOptions", C, false)), [(await $.wv([$t11, $t12], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t11, $t12], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t11, $t12], "mtInformation", C, false)), [(await $.wv([$t11, $t12], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t13 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      if ($.truthy($.eq((await $.wv([$t13], "num", C, false)), 1))) {
        await $.wset([$t13], "SortPosition", (await $.mcall((await $.wv([$t13], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t13], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
        await $.wset([$t13], "num", 2, C);
      } else {
        await $.wset([$t13], "SortPosition", (await $.mcall((await $.wv([$t13], "SQL", C, false)), "Add", [$.add($.add("ORDER BY ", (await $.wv([$t13], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))), "  desc")])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
        await $.wset([$t13], "num", 1, C);
      }
      await $.stmt($.wcall([$t13], "Refresh", [], C));
    } finally {
      { const $t14 = await $.iset((await $.wv([$t13], "SQL", C, false)), [(await $.wv([$t13], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t13], "EmptyStr", C, false))); if ($t14 !== undefined) { await $.wset([$t13], "SQL", $t14, C); } }
      await $.mset((await $.wv([$t13], "Screen", C, false)), "Cursor", (await $.wv([$t13], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tclients", "dbGrid2DblClick", async function dbGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBGrid2")), "Options", $.sub((await $.mv((await $.v(C, "DBGrid1")), "Options")), [(await $.v(C, "dgRowSelect"))]));
  await $.mset((await $.v(C, "DBGrid2")), "Options", $.add((await $.mv((await $.v(C, "DBGrid1")), "Options")), [(await $.v(C, "dgEditing"))]));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "dbGrid2DrawColumnCell", async function dbGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.lt(($.sub((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["expiry"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "FieldByName", ["dateclose"])), "asinteger")))), (await $.v(C, "date"))))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Canvas")), "Brush")), "Color", (await $.v(C, "Claqua")));
    await $.stmt((await $.mcall((await $.v(C, "DBGrid2")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  if ($.truthy(($.lt((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["expiry"])), "AsDateTime")), (await $.v(C, "date")))))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Canvas")), "Brush")), "Color", (await $.v(C, "clFuchsia")));
    await $.stmt((await $.mcall((await $.v(C, "DBGrid2")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tclients", "dbGrid2KeyPress", async function dbGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u0001"))) {
    {
      const $t15 = (await $.v(C, "dbgrid2"));
      const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
      const $t17 = (await $.mv((await $.wv([$t15, $t16], "DataSource", C, false)), "DataSet"));
      await $.stmt($.wcall([$t15, $t16, $t17], "DisableControls", [], C));
      try {
        await $.stmt($.wcall([$t15, $t16, $t17], "First", [], C));
        while ($.truthy($.not((await $.wv([$t15, $t16, $t17], "Eof", C, false))))) {
          await $.wset([$t15, $t16, $t17], "CurrentRowSelected", (await $.wv([$t15, $t16, $t17], "True", C, false)), C);
          await $.stmt($.wcall([$t15, $t16, $t17], "Next", [], C));
          await $.tick();
        }
      } finally {
        await $.stmt($.wcall([$t15, $t16, $t17], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "dbGrid2TitleClick", async function dbGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t18 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      if ($.truthy($.eq((await $.wv([$t18], "num", C, false)), 1))) {
        await $.wset([$t18], "SortPosition", (await $.mcall((await $.wv([$t18], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t18], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
        await $.wset([$t18], "num", 2, C);
      } else {
        await $.wset([$t18], "SortPosition", (await $.mcall((await $.wv([$t18], "SQL", C, false)), "Add", [$.add($.add("ORDER BY ", (await $.wv([$t18], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))), "  desc")])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
        await $.wset([$t18], "num", 1, C);
      }
      await $.stmt($.wcall([$t18], "Refresh", [], C));
    } finally {
      { const $t19 = await $.iset((await $.wv([$t18], "SQL", C, false)), [(await $.wv([$t18], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t18], "EmptyStr", C, false))); if ($t19 !== undefined) { await $.wset([$t18], "SQL", $t19, C); } }
      await $.mset((await $.wv([$t18], "Screen", C, false)), "Cursor", (await $.wv([$t18], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tclients", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t20], "Filter", $.add($.add($.add("RBSNUMBER = '", ""), ("*")), "'"), C);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "dataset")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "dataset")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "DBGrid1KeyPress", async function DBGrid1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u0001"))) {
    {
      const $t21 = (await $.v(C, "dbgrid1"));
      const $t22 = (await $.wv([$t21], "SelectedRows", C, false));
      const $t23 = (await $.mv((await $.wv([$t21, $t22], "DataSource", C, false)), "DataSet"));
      await $.stmt($.wcall([$t21, $t22, $t23], "DisableControls", [], C));
      try {
        await $.stmt($.wcall([$t21, $t22, $t23], "First", [], C));
        while ($.truthy($.not((await $.wv([$t21, $t22, $t23], "Eof", C, false))))) {
          await $.wset([$t21, $t22, $t23], "CurrentRowSelected", (await $.wv([$t21, $t22, $t23], "True", C, false)), C);
          await $.stmt($.wcall([$t21, $t22, $t23], "Next", [], C));
          await $.tick();
        }
      } finally {
        await $.stmt($.wcall([$t21, $t22, $t23], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tclients", "toexcelExecute", async function toexcelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "open", []);
  L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
  { const $t24 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 1], " #"); if ($t24 !== undefined) { await $.mset(L0["excel"], "Cells", $t24); } }
  { const $t25 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 2], "RBSNUMBER"); if ($t25 !== undefined) { await $.mset(L0["excel"], "Cells", $t25); } }
  { const $t26 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 3], "CARDHOLDER"); if ($t26 !== undefined) { await $.mset(L0["excel"], "Cells", $t26); } }
  { const $t27 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 4], "CARDNUMBER"); if ($t27 !== undefined) { await $.mset(L0["excel"], "Cells", $t27); } }
  { const $t28 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 5], "FIRST NAME"); if ($t28 !== undefined) { await $.mset(L0["excel"], "Cells", $t28); } }
  { const $t29 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 6], "LAST NAME"); if ($t29 !== undefined) { await $.mset(L0["excel"], "Cells", $t29); } }
  { const $t30 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 7], "CURRENCY"); if ($t30 !== undefined) { await $.mset(L0["excel"], "Cells", $t30); } }
  { const $t31 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 8], "CARDTYPE"); if ($t31 !== undefined) { await $.mset(L0["excel"], "Cells", $t31); } }
  { const $t32 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 9], "CARDSTATUS"); if ($t32 !== undefined) { await $.mset(L0["excel"], "Cells", $t32); } }
  { const $t33 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 10], "PASSPORT"); if ($t33 !== undefined) { await $.mset(L0["excel"], "Cells", $t33); } }
  { const $t34 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 11], "ISSUED_BY"); if ($t34 !== undefined) { await $.mset(L0["excel"], "Cells", $t34); } }
  { const $t35 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 12], "DOC_SINCE"); if ($t35 !== undefined) { await $.mset(L0["excel"], "Cells", $t35); } }
  { const $t36 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 13], "BIRTHDAY"); if ($t36 !== undefined) { await $.mset(L0["excel"], "Cells", $t36); } }
  { const $t37 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 14], "HOMEPHONE"); if ($t37 !== undefined) { await $.mset(L0["excel"], "Cells", $t37); } }
  { const $t38 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 15], "WORKPHONE"); if ($t38 !== undefined) { await $.mset(L0["excel"], "Cells", $t38); } }
  { const $t39 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 16], "CREDIT_LIM"); if ($t39 !== undefined) { await $.mset(L0["excel"], "Cells", $t39); } }
  { const $t40 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 17], "RESIDENT"); if ($t40 !== undefined) { await $.mset(L0["excel"], "Cells", $t40); } }
  { const $t41 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 18], "COUNTRY"); if ($t41 !== undefined) { await $.mset(L0["excel"], "Cells", $t41); } }
  { const $t42 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 19], "CITY"); if ($t42 !== undefined) { await $.mset(L0["excel"], "Cells", $t42); } }
  { const $t43 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 20], "ADDRESS"); if ($t43 !== undefined) { await $.mset(L0["excel"], "Cells", $t43); } }
  { const $t44 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 21], "DATEOPEN"); if ($t44 !== undefined) { await $.mset(L0["excel"], "Cells", $t44); } }
  { const $t45 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 22], "EXPIRY"); if ($t45 !== undefined) { await $.mset(L0["excel"], "Cells", $t45); } }
  { const $t46 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 23], "REFERENCE"); if ($t46 !== undefined) { await $.mset(L0["excel"], "Cells", $t46); } }
  { const $t47 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 24], "EMBOSSNAME"); if ($t47 !== undefined) { await $.mset(L0["excel"], "Cells", $t47); } }
  { const $t48 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 25], "COMPANY"); if ($t48 !== undefined) { await $.mset(L0["excel"], "Cells", $t48); } }
  { const $t49 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 26], "CONTRACT_NUM"); if ($t49 !== undefined) { await $.mset(L0["excel"], "Cells", $t49); } }
  { const $t50 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 27], "TYPES"); if ($t50 !== undefined) { await $.mset(L0["excel"], "Cells", $t50); } }
  { const $t51 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 28], "OLD_ACCOUNT"); if ($t51 !== undefined) { await $.mset(L0["excel"], "Cells", $t51); } }
  await $.mcall((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [1, 1])), (await $.idx((await $.mv(L0["excel"], "Cells")), [1, 28]))])), "Select", []);
  await $.mset((await $.mv((await $.mv(L0["excel"], "Selection")), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.mv(L0["excel"], "Selection")), "Font")), "COLOR", (await $.v(C, "CLRED")));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "First", []);
  { const $t52 = $.sub((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t53 = true;
    for (;;) {
      if (!$t53) { L0["index"] = $.succ(L0["index"], 1); }
      $t53 = false;
      if (!($.ord(L0["index"]) <= $.ord($t52))) break;
      { const $t54 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 1], $.add(L0["index"], 1)); if ($t54 !== undefined) { await $.mset(L0["excel"], "Cells", $t54); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 2])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      { const $t55 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["rbsnumber"])), "asstring"))); if ($t55 !== undefined) { await $.mset(L0["excel"], "Cells", $t55); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 2])), "ColumnWidth", 20);
      { const $t56 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CARDHOLDER"])), "asstring"))); if ($t56 !== undefined) { await $.mset(L0["excel"], "Cells", $t56); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 3])), "ColumnWidth", 20);
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 4])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 4])), "ColumnWidth", 20);
      { const $t57 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CARDNUMBER"])), "asstring"))); if ($t57 !== undefined) { await $.mset(L0["excel"], "Cells", $t57); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 5])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      { const $t58 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["FNAME"])), "asstring"))); if ($t58 !== undefined) { await $.mset(L0["excel"], "Cells", $t58); } }
      { const $t59 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["LNAME"])), "asstring"))); if ($t59 !== undefined) { await $.mset(L0["excel"], "Cells", $t59); } }
      { const $t60 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CURRENCY"])), "asstring"))); if ($t60 !== undefined) { await $.mset(L0["excel"], "Cells", $t60); } }
      { const $t61 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CARDTYPE"])), "asstring"))); if ($t61 !== undefined) { await $.mset(L0["excel"], "Cells", $t61); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 8])), "ColumnWidth", 20);
      { const $t62 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CARDSTATUS"])), "asstring"))); if ($t62 !== undefined) { await $.mset(L0["excel"], "Cells", $t62); } }
      { const $t63 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["PASSPORT"])), "asstring"))); if ($t63 !== undefined) { await $.mset(L0["excel"], "Cells", $t63); } }
      { const $t64 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["ISSUED_BY"])), "asstring"))); if ($t64 !== undefined) { await $.mset(L0["excel"], "Cells", $t64); } }
      { const $t65 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["DOC_SINCE"])), "asstring"))); if ($t65 !== undefined) { await $.mset(L0["excel"], "Cells", $t65); } }
      { const $t66 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 13], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["BIRTHDAY"])), "asstring"))); if ($t66 !== undefined) { await $.mset(L0["excel"], "Cells", $t66); } }
      { const $t67 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["HOMEPHONE"])), "asstring"))); if ($t67 !== undefined) { await $.mset(L0["excel"], "Cells", $t67); } }
      { const $t68 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 15], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["WORKPHONE"])), "asstring"))); if ($t68 !== undefined) { await $.mset(L0["excel"], "Cells", $t68); } }
      { const $t69 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 16], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CREDIT_LIM"])), "asstring"))); if ($t69 !== undefined) { await $.mset(L0["excel"], "Cells", $t69); } }
      { const $t70 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["RESIDENT"])), "asstring"))); if ($t70 !== undefined) { await $.mset(L0["excel"], "Cells", $t70); } }
      { const $t71 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["COUNTRY"])), "asstring"))); if ($t71 !== undefined) { await $.mset(L0["excel"], "Cells", $t71); } }
      { const $t72 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 19], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CITY"])), "asstring"))); if ($t72 !== undefined) { await $.mset(L0["excel"], "Cells", $t72); } }
      { const $t73 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["ADDRESS"])), "asstring"))); if ($t73 !== undefined) { await $.mset(L0["excel"], "Cells", $t73); } }
      { const $t74 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 21], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["DATEOPEN"])), "AsDateTime"))); if ($t74 !== undefined) { await $.mset(L0["excel"], "Cells", $t74); } }
      { const $t75 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 22], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["EXPIRY"])), "AsDateTime"))); if ($t75 !== undefined) { await $.mset(L0["excel"], "Cells", $t75); } }
      { const $t76 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 23], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["REFERENCE"])), "asstring"))); if ($t76 !== undefined) { await $.mset(L0["excel"], "Cells", $t76); } }
      { const $t77 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 24], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["EMBOSSNAME"])), "asstring"))); if ($t77 !== undefined) { await $.mset(L0["excel"], "Cells", $t77); } }
      { const $t78 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 25], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["COMPANY"])), "asstring"))); if ($t78 !== undefined) { await $.mset(L0["excel"], "Cells", $t78); } }
      { const $t79 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 26], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["CONTRACT_NUM"])), "asstring"))); if ($t79 !== undefined) { await $.mset(L0["excel"], "Cells", $t79); } }
      { const $t80 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["TYPES"])), "asstring"))); if ($t80 !== undefined) { await $.mset(L0["excel"], "Cells", $t80); } }
      { const $t81 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "FieldByName", ["old_acc_no"])), "asstring"))); if ($t81 !== undefined) { await $.mset(L0["excel"], "Cells", $t81); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 28])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliexcel")), "Next", []);
      await $.tick();
    }
  }
  await $.mset(L0["excel"], "visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "QueryAllRecords", true);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "Refresh", []);
  await $.mcall((await $.v(C, "toexcel")), "Execute", []);
  await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "QueryAllRecords", false);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "ToolButton21Click", async function ToolButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "panel4")), "Visible")), false))) {
    await $.mset((await $.v(C, "ToolButton21")), "Down", true);
    await $.mset((await $.v(C, "Panel4")), "Visible", true);
    return L0.result;
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "panel4")), "Visible")), true))) {
      await $.mset((await $.v(C, "ToolButton21")), "Down", false);
      await $.mset((await $.v(C, "Panel4")), "Visible", false);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditCARDNUMBERChange", async function EditCARDNUMBERChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t82 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t82], "Filter", $.add($.add($.add("CARDNUMBER = '", (await $.mv((await $.wv([$t82], "editCARDNUMBER", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditFNAMEChange", async function EditFNAMEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t83 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t83], "Filter", $.add($.add($.add("FNAME = '", (await $.mv((await $.wv([$t83], "editFNAME", C, false)), "Text"))), ("*")), "'"), C);
    await $.mset((await $.wv([$t83], "memo1", C, false)), "Text", (await $.wv([$t83], "Filter", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditFNAMEKeyPress", async function EditFNAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
    {
      const $t84 = L0["sender"];
      await $.wset([$t84], "SearchField", (await $.wcall([$t84], "copy", [(await $.wv([$t84], "Name", C, false)), 5, (await $.wcall([$t84], "length", [(await $.wv([$t84], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
      {
        const $t85 = (await $.wcall([$t84], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t84], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t84, $t85], "SearchRecord", [(await $.wv([$t84, $t85], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t84, $t85], "Text", C, false)), $.add((await $.wv([$t84, $t85], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t84, $t85], "srFromCurrent", C, false)), (await $.wv([$t84, $t85], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t84, $t85], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t84, $t85], "mtInformation", C, false)), [(await $.wv([$t84, $t85], "mbNo", C, false)), (await $.wv([$t84, $t85], "mbYes", C, false))], 0], C)), (await $.wv([$t84, $t85], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t84, $t85], "SearchRecord", [(await $.wv([$t84, $t85], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t84, $t85], "Text", C, false)), $.add((await $.wv([$t84, $t85], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t84, $t85], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t84, $t85], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t84, $t85], "mtInformation", C, false)), [(await $.wv([$t84, $t85], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "EditLNAMEChange", async function EditLNAMEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t86 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t86], "Filter", $.add($.add($.add("LNAME = '", (await $.mv((await $.wv([$t86], "editLNAME", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditLNAMEKeyPress", async function EditLNAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t87 = L0["sender"];
      await $.wset([$t87], "SearchField", (await $.wcall([$t87], "copy", [(await $.wv([$t87], "Name", C, false)), 5, (await $.wcall([$t87], "length", [(await $.wv([$t87], "Name", C, false))], C))], C)), C);
      {
        const $t88 = (await $.wcall([$t87], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t87], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t87, $t88], "SearchRecord", [(await $.wv([$t87, $t88], "SearchField", C, false)), (await $.wv([$t87, $t88], "Text", C, false)), $.add((await $.wv([$t87, $t88], "SearchOptions", C, false)), [(await $.wv([$t87, $t88], "srFromCurrent", C, false)), (await $.wv([$t87, $t88], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t87, $t88], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t87, $t88], "mtInformation", C, false)), [(await $.wv([$t87, $t88], "mbNo", C, false)), (await $.wv([$t87, $t88], "mbYes", C, false))], 0], C)), (await $.wv([$t87, $t88], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t87, $t88], "SearchRecord", [(await $.wv([$t87, $t88], "SearchField", C, false)), (await $.wv([$t87, $t88], "Text", C, false)), $.add((await $.wv([$t87, $t88], "SearchOptions", C, false)), [(await $.wv([$t87, $t88], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t87, $t88], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t87, $t88], "mtInformation", C, false)), [(await $.wv([$t87, $t88], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "EditOLD_ACC_NOChange", async function EditOLD_ACC_NOChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t89 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t89], "Filter", $.add($.add($.add("old_acc_no = '", (await $.mv((await $.wv([$t89], "EditOLD_ACC_NO", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditOLD_ACC_NOKeyPress", async function EditOLD_ACC_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t90 = L0["sender"];
      await $.wset([$t90], "SearchField", (await $.wcall([$t90], "copy", [(await $.wv([$t90], "Name", C, false)), 5, (await $.wcall([$t90], "length", [(await $.wv([$t90], "Name", C, false))], C))], C)), C);
      {
        const $t91 = (await $.wcall([$t90], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t90], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t90, $t91], "SearchRecord", [(await $.wv([$t90, $t91], "SearchField", C, false)), (await $.wv([$t90, $t91], "Text", C, false)), $.add((await $.wv([$t90, $t91], "SearchOptions", C, false)), [(await $.wv([$t90, $t91], "srFromCurrent", C, false)), (await $.wv([$t90, $t91], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t90, $t91], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t90, $t91], "mtInformation", C, false)), [(await $.wv([$t90, $t91], "mbNo", C, false)), (await $.wv([$t90, $t91], "mbYes", C, false))], 0], C)), (await $.wv([$t90, $t91], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t90, $t91], "SearchRecord", [(await $.wv([$t90, $t91], "SearchField", C, false)), (await $.wv([$t90, $t91], "Text", C, false)), $.add((await $.wv([$t90, $t91], "SearchOptions", C, false)), [(await $.wv([$t90, $t91], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t90, $t91], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t90, $t91], "mtInformation", C, false)), [(await $.wv([$t90, $t91], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "EditCREDIT_LIMChange", async function EditCREDIT_LIMChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t92 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t92], "Filter", $.add($.add($.add("CREDIT_LIM = '", (await $.mv((await $.wv([$t92], "editCREDIT_LIM", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "EditCREDIT_LIMKeyPress", async function EditCREDIT_LIMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t93 = L0["sender"];
      await $.wset([$t93], "SearchField", (await $.wcall([$t93], "copy", [(await $.wv([$t93], "Name", C, false)), 5, (await $.wcall([$t93], "length", [(await $.wv([$t93], "Name", C, false))], C))], C)), C);
      {
        const $t94 = (await $.wcall([$t93], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t93], "Dbgrid2", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t93, $t94], "SearchRecord", [(await $.wv([$t93, $t94], "SearchField", C, false)), (await $.wv([$t93, $t94], "Text", C, false)), $.add((await $.wv([$t93, $t94], "SearchOptions", C, false)), [(await $.wv([$t93, $t94], "srFromCurrent", C, false)), (await $.wv([$t93, $t94], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t93, $t94], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t93, $t94], "mtInformation", C, false)), [(await $.wv([$t93, $t94], "mbNo", C, false)), (await $.wv([$t93, $t94], "mbYes", C, false))], 0], C)), (await $.wv([$t93, $t94], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t93, $t94], "SearchRecord", [(await $.wv([$t93, $t94], "SearchField", C, false)), (await $.wv([$t93, $t94], "Text", C, false)), $.add((await $.wv([$t93, $t94], "SearchOptions", C, false)), [(await $.wv([$t93, $t94], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t93, $t94], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t93, $t94], "mtInformation", C, false)), [(await $.wv([$t93, $t94], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "CheckBox3Click", async function CheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "CheckBox4Click", async function CheckBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox3")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox3")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "CheckBox5Click", async function CheckBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox5")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "CheckBox6Click", async function CheckBox6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox6")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "tax1": '', "tax2": '', "tax": '', "fax": '', "vax": '', "knax": '', "ksax": '', "cax": '', "f1": '', "f2": '', "f3": '', "f4": '', "f5": '', "f6": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    L0["tax1"] = $.add($.add("DATEOPEN >= '", (await $.call(C, "DATETOSTR", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'");
    L0["tax2"] = $.add($.add("EXPIRY <= '", (await $.call(C, "DATETOSTR", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'");
    L0["tax"] = $.add($.add($.add($.add($.add("(", L0["tax1"]), ")"), " and ("), L0["tax2"]), ")");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    L0["fax"] = $.add($.add("FIL = '", (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text"))), "'");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    L0["vax"] = $.add($.add("CURRENCY = '", (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text"))), "'");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
    L0["knax"] = $.add($.add("CARDTYPE = '", (await $.mv((await $.v(C, "DBLookupComboBox3")), "Text"))), "'");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox5")), "Checked")))) {
    L0["ksax"] = $.add($.add("CARDSTATUS = '", (await $.mv((await $.v(C, "DBLookupComboBox4")), "Text"))), "'");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox6")), "Checked")))) {
    L0["cax"] = $.add($.add("COMPANY = '", (await $.mv((await $.v(C, "DBLookupComboBox5")), "Text"))), "'");
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    L0["f1"] = L0["tax"];
  }
  if ($.truthy((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))))) {
    L0["f1"] = L0["fax"];
  }
  if ($.truthy((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))))) {
    L0["f1"] = L0["vax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))))) {
    L0["f1"] = L0["knax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))))) {
    L0["f1"] = L0["ksax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked")))))) {
    L0["f1"] = L0["cax"];
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))))) {
    L0["f2"] = L0["fax"];
  }
  if ($.truthy((await $.or_(((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked"))))))))) {
    L0["f2"] = L0["vax"];
  }
  if ($.truthy((await $.or_((await $.or_(((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))), async () => ((await $.and_((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))))) {
    L0["f2"] = L0["knax"];
  }
  if ($.truthy((await $.or_((await $.or_((await $.or_(((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))))) {
    L0["f2"] = L0["ksax"];
  }
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked"))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => $.not((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))))) {
    L0["f2"] = L0["cax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))))) {
    L0["f3"] = L0["vax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))))) {
    L0["f3"] = L0["knax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))))) {
    L0["f3"] = L0["ksax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => $.not((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked")))))) {
    L0["f3"] = L0["cax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))))) {
    L0["f4"] = L0["knax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))))) {
    L0["f4"] = L0["ksax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => $.not((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked")))))) {
    L0["f4"] = L0["cax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))))) {
    L0["f5"] = L0["ksax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked")))))) {
    L0["f5"] = L0["cax"];
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => (await $.mv((await $.v(C, "CheckBox2")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked")))))) {
    L0["f6"] = L0["cax"];
  }
  if ($.truthy((await $.and_(($.ne(L0["f1"], "")), async () => ($.ne(L0["f1"], L0["tax"])))))) {
    if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.mv((await $.v(C, "CheckBox2")), "Checked")), async () => (await $.mv((await $.v(C, "CheckBox3")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox4")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox5")), "Checked")))), async () => (await $.mv((await $.v(C, "CheckBox6")), "Checked")))))) {
      L0["f1"] = $.add($.add("(", L0["f1"]), ")");
    }
  }
  if ($.truthy($.ne(L0["f2"], ""))) {
    L0["f2"] = $.add($.add(" and (", L0["f2"]), ")");
  }
  if ($.truthy($.ne(L0["f3"], ""))) {
    L0["f3"] = $.add($.add(" and (", L0["f3"]), ")");
  }
  if ($.truthy($.ne(L0["f4"], ""))) {
    L0["f4"] = $.add($.add(" and (", L0["f4"]), ")");
  }
  if ($.truthy($.ne(L0["f5"], ""))) {
    L0["f5"] = $.add($.add(" and (", L0["f5"]), ")");
  }
  if ($.truthy($.ne(L0["f6"], ""))) {
    L0["f6"] = $.add($.add(" and (", L0["f6"]), ")");
  }
  await $.mset((await $.v(C, "Memo1")), "Text", $.add($.add($.add($.add($.add(L0["f1"], L0["f2"]), L0["f3"]), L0["f4"]), L0["f5"]), L0["f6"]));
  {
    const $t95 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t95], "Filter", $.add($.add($.add($.add($.add((await $.wv([$t95], "f1", { get: async () => L0["f1"], set: async (v) => { L0["f1"] = v; }, local: true }, false)), (await $.wv([$t95], "f2", { get: async () => L0["f2"], set: async (v) => { L0["f2"] = v; }, local: true }, false))), (await $.wv([$t95], "f3", { get: async () => L0["f3"], set: async (v) => { L0["f3"] = v; }, local: true }, false))), (await $.wv([$t95], "f4", { get: async () => L0["f4"], set: async (v) => { L0["f4"] = v; }, local: true }, false))), (await $.wv([$t95], "f5", { get: async () => L0["f5"], set: async (v) => { L0["f5"] = v; }, local: true }, false))), (await $.wv([$t95], "f6", { get: async () => L0["f6"], set: async (v) => { L0["f6"] = v; }, local: true }, false))), C);
    await $.wset([$t95], "Filtered", (await $.wv([$t95], "true", C, false)), C);
    await $.mset((await $.mv((await $.wv([$t95], "DataMod_CARDS", C, false)), "cliexcel")), "Filter", $.add($.add($.add($.add($.add((await $.wv([$t95], "f1", { get: async () => L0["f1"], set: async (v) => { L0["f1"] = v; }, local: true }, false)), (await $.wv([$t95], "f2", { get: async () => L0["f2"], set: async (v) => { L0["f2"] = v; }, local: true }, false))), (await $.wv([$t95], "f3", { get: async () => L0["f3"], set: async (v) => { L0["f3"] = v; }, local: true }, false))), (await $.wv([$t95], "f4", { get: async () => L0["f4"], set: async (v) => { L0["f4"] = v; }, local: true }, false))), (await $.wv([$t95], "f5", { get: async () => L0["f5"], set: async (v) => { L0["f5"] = v; }, local: true }, false))), (await $.wv([$t95], "f6", { get: async () => L0["f6"], set: async (v) => { L0["f6"] = v; }, local: true }, false))));
    await $.mset((await $.mv((await $.wv([$t95], "DataMod_CARDS", C, false)), "cliexcel")), "Filtered", (await $.wv([$t95], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_mdelete"]])));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silmək istəyirsiniz?", (await $.v(C, "mtconfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delnew", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "asinteger"))]])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "ToolButton25Click", async function ToolButton25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "clients2")), "Edit1")), "Text", "EDIT");
  await $.mcall((await $.v(C, "clients2")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.lt(($.sub((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["expiry"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "FieldByName", ["dateclose"])), "asinteger")))), (await $.v(C, "date"))))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Canvas")), "Brush")), "Color", (await $.v(C, "Claqua")));
    await $.stmt((await $.mcall((await $.v(C, "DBGrid1")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  if ($.truthy(($.lt((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["expiry"])), "AsDateTime")), (await $.v(C, "date")))))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Canvas")), "Brush")), "Color", (await $.v(C, "clFuchsia")));
    await $.stmt((await $.mcall((await $.v(C, "DBGrid1")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tclients", "ToolButton26Click", async function ToolButton26Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "datetostr", [$.sub((await $.v(C, "date")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "FieldByName", ["dateclose"])), "asinteger")))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "tamyenile1Click", async function tamyenile1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton14")), "Click", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients", "tamyenile1DrawItem", async function tamyenile1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t96 = L0["acanvas"];
    const $t97 = (await $.wv([$t96], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t98 = (await $.mv((await $.wv([$t96, $t97], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t96, $t97, $t98], "Charset", (await $.wv([$t96, $t97, $t98], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t96, $t97, $t98], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t96, $t97, $t98], "Default", C, false)))) {
        await $.wset([$t96, $t97, $t98], "Style", [(await $.wv([$t96, $t97, $t98], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t96, $t97], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t96, $t97], "Pen", C, false)), "Color", (await $.wv([$t96, $t97], "clBlack", C, false)));
      await $.wset([$t96, $t97], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t96, $t97], "MoveTo", [(await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t96, $t97], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t96, $t97], "LineTo", [(await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t96, $t97], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t96, $t97], "inc", [$.ref(async () => (await $.wv([$t96, $t97], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t99) => { await $.wset([$t96, $t97], "LineBottom", $t99, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t96, $t97], "Pen", C, false)), "Color", (await $.wv([$t96, $t97], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t96, $t97], "MoveTo", [(await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t96, $t97], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t96, $t97], "LineTo", [(await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t96, $t97], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t96, $t97], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t96, $t97], "Brush", C, false)), "Color", (await $.wv([$t96, $t97], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t96, $t97], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t96, $t97], "Font", C, false)), "Color", (await $.wv([$t96, $t97], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t96, $t97], "Font", C, false)), "Color", (await $.wv([$t96, $t97], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t96, $t97], "Brush", C, false)), "Color", (await $.wv([$t96, $t97], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t96, $t97], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t96, $t97], "Font", C, false)), "Color", (await $.wv([$t96, $t97], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t96, $t97], "Font", C, false)), "Color", (await $.wv([$t96, $t97], "clGrayText", C, false)));
        }
      }
      await $.wset([$t96, $t97], "Bar", (await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t96, $t97], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t100) => { await $.mset((await $.wv([$t96, $t97], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t100); }), 22], C)));
      await $.stmt((await $.wcall([$t96, $t97], "FillRect", [(await $.wv([$t96, $t97], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t96, $t97], "TextOut", [$.add((await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t96, $t97], "Caption", C, false))], C)));
    }
    await $.wset([$t96, $t97], "SText", (await $.wcall([$t96, $t97], "ShortCutToText", [(await $.wv([$t96, $t97], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t96, $t97], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t96, $t97], "TextWidth", [(await $.wv([$t96, $t97], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t96, $t97], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t96, $t97], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t96, $t97], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t101 = (await $.wv([$t96, $t97], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t96, $t97, $t101], "Assigned", [(await $.wv([$t96, $t97, $t101], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t96, $t97, $t101], "Checked", C, false)))) {
            await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t96, $t97, $t101], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 10));
            await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t96, $t97, $t101], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 10));
            await $.mset((await $.mv((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t96, $t97, $t101], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t102) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t102); }), 2], C)));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t103) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t103); }), 2], C)));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t104) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t104); }), 2], C)));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t105) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t105); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t96, $t97, $t101], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t106) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t106); }), 1], C)));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t107) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t107); }), 1], C)));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t108) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t108); }), 1], C)));
            await $.stmt((await $.wcall([$t96, $t97, $t101], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t109) => { await $.mset((await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t109); }), 1], C)));
            if ($.truthy((await $.wv([$t96, $t97, $t101], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t96, $t97, $t101], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t96, $t97, $t101], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t96, $t97, $t101], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t96, $t97, $t101], "Images", C, false)), "Draw", [(await $.wv([$t96, $t97, $t101], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t96, $t97, $t101], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t96, $t97, $t101], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t96, $t97, $t101], "ImageIndex", C, false)), (await $.wv([$t96, $t97, $t101], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tclients", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Open", []);
  {
    const $t110 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Clients"));
    await $.wset([$t110], "Filter", $.add($.add($.add("RBSNUMBER = '", ""), ("*")), "'"), C);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "dataset")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "dataset")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

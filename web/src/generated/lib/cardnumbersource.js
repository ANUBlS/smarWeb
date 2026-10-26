// Generated from cardnumbersource.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cardnumbersource", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "Grids", "DBGrids", "ToolWin", "Menus", "CMExcelExport", "ImgList", "oracledata", "Unit18", "Unitclient2", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCARDNUMBER", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "combobox10": {"name": "ComboBox10", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "edit20": {"name": "Edit20", "type": "TEdit"}, "edit21": {"name": "Edit21", "type": "TEdit"}, "edit22": {"name": "Edit22", "type": "TEdit"}, "edit23": {"name": "Edit23", "type": "TEdit"}, "edit24": {"name": "Edit24", "type": "TEdit"}, "edit25": {"name": "Edit25", "type": "TEdit"}, "edit26": {"name": "Edit26", "type": "TEdit"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}, "edit27": {"name": "Edit27", "type": "TEdit"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "combobox11": {"name": "ComboBox11", "type": "TComboBox"}, "combobox12": {"name": "ComboBox12", "type": "TComboBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDBDateTimeEditEh"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDBDateTimeEditEh"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "excel1": {"name": "EXCEL1", "type": "TMenuItem"}, "selectall1": {"name": "SELECTALL1", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "excel2": {"name": "EXCEL2", "type": "TMenuItem"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("CARDNUMBER", null, "TCARDNUMBER");
  });
  U.method("TCARDNUMBER", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "edit2")), "Text")), "")))))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Kart nömrəsini daxil etmək istəyirsinizmi?", (await $.v(C, "mtInformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["CARDNUMBER", [(await $.call(C, "trim", [(await $.mv((await $.v(C, "EDIT1")), "TEXT"))])), (await $.mv((await $.v(C, "EDIT2")), "TEXT"))]])));
      {
        const $t1 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Client2"));
        await $.stmt($.wcall([$t1], "close", [], C));
        await $.stmt((await $.wcall([$t1], "SetVariable", ["refs", (await $.mv((await $.wv([$t1], "edit1", C, false)), "text"))], C)));
        await $.stmt($.wcall([$t1], "open", [], C));
        await $.mset((await $.wv([$t1], "Edit4", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["RBSNUMBER"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit6", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["KLI_ID"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "ComboBox10", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["TITUL"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "ComboBox11", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["TYPES"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "ComboBox12", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["CARDSTATUS"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit15", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["FNAME"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit16", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["LNAME"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit17", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["HOMEPHONE"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit27", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["WORKPHONE"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit18", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["PASSPORT"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "DateTimePicker7", C, false)), "Value", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["BIRTHDAY"], C)), "asvariant")));
        await $.mset((await $.wv([$t1], "Edit20", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["COUNTRY"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit19", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["CITY"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit21", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["LANG_CODE"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit22", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["ADDRESS"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "ComboBox1", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["CARDTYPE"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "DateTimePicker8", C, false)), "Value", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["EXPIRY"], C)), "asvariant")));
        await $.mset((await $.wv([$t1], "ComboBox4", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["RESIDENT"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit26", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["REFERENCE"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit25", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["SECURITY"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit24", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["CARDNUMBER"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "Edit23", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["EMBOSSNAME"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "ComboBox2", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FIELDBYNAME", ["COMPANY"], C)), "AsString")));
      }
      await $.stmt((await $.call(C, "ShowMessage", ["Kart nömrəsi bazaya qeyd olundu!"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "TabSheet2Show", async function TabSheet2Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", "");
  await $.mset((await $.v(C, "EDIT2")), "Text", "");
  await $.mset((await $.v(C, "Edit4")), "Text", "");
  await $.mset((await $.v(C, "Edit6")), "Text", "");
  await $.mset((await $.v(C, "ComboBox10")), "Text", "");
  await $.mset((await $.v(C, "ComboBox11")), "Text", "");
  await $.mset((await $.v(C, "ComboBox12")), "Text", "");
  await $.mset((await $.v(C, "Edit15")), "Text", "");
  await $.mset((await $.v(C, "Edit16")), "Text", "");
  await $.mset((await $.v(C, "Edit17")), "Text", "");
  await $.mset((await $.v(C, "Edit27")), "Text", "");
  await $.mset((await $.v(C, "Edit18")), "Text", "");
  await $.mset((await $.v(C, "DateTimePicker7")), "Value", (await $.v(C, "DATE")));
  await $.mset((await $.v(C, "Edit20")), "Text", "");
  await $.mset((await $.v(C, "Edit19")), "Text", "");
  await $.mset((await $.v(C, "Edit21")), "Text", "");
  await $.mset((await $.v(C, "Edit22")), "Text", "");
  await $.mset((await $.v(C, "ComboBox1")), "Text", "");
  await $.mset((await $.v(C, "DateTimePicker8")), "Value", (await $.v(C, "DATE")));
  await $.mset((await $.v(C, "ComboBox4")), "Text", "");
  await $.mset((await $.v(C, "Edit26")), "Text", "");
  await $.mset((await $.v(C, "Edit25")), "Text", "");
  await $.mset((await $.v(C, "Edit24")), "Text", "");
  await $.mset((await $.v(C, "Edit23")), "Text", "");
  await $.mset((await $.v(C, "ComboBox2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", "");
  await $.mset((await $.v(C, "EDIT2")), "Text", "");
  await $.mset((await $.v(C, "Edit4")), "Text", "");
  await $.mset((await $.v(C, "Edit6")), "Text", "");
  await $.mset((await $.v(C, "ComboBox10")), "Text", "");
  await $.mset((await $.v(C, "ComboBox11")), "Text", "");
  await $.mset((await $.v(C, "ComboBox12")), "Text", "");
  await $.mset((await $.v(C, "Edit15")), "Text", "");
  await $.mset((await $.v(C, "Edit16")), "Text", "");
  await $.mset((await $.v(C, "Edit17")), "Text", "");
  await $.mset((await $.v(C, "Edit27")), "Text", "");
  await $.mset((await $.v(C, "Edit18")), "Text", "");
  await $.mset((await $.v(C, "DateTimePicker7")), "value", (await $.v(C, "DATE")));
  await $.mset((await $.v(C, "Edit20")), "Text", "");
  await $.mset((await $.v(C, "Edit19")), "Text", "");
  await $.mset((await $.v(C, "Edit21")), "Text", "");
  await $.mset((await $.v(C, "Edit22")), "Text", "");
  await $.mset((await $.v(C, "ComboBox1")), "Text", "");
  await $.mset((await $.v(C, "DateTimePicker8")), "Value", (await $.v(C, "DATE")));
  await $.mset((await $.v(C, "ComboBox4")), "Text", "");
  await $.mset((await $.v(C, "Edit26")), "Text", "");
  await $.mset((await $.v(C, "Edit25")), "Text", "");
  await $.mset((await $.v(C, "Edit24")), "Text", "");
  await $.mset((await $.v(C, "Edit23")), "Text", "");
  await $.mset((await $.v(C, "ComboBox2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Edit2")), "Clear", []);
    {
      const $t2 = (await $.mv((await $.v(C, "DataMod_CARDS")), "Client2"));
      await $.stmt($.wcall([$t2], "close", [], C));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["refs", (await $.mv((await $.wv([$t2], "edit1", C, false)), "text"))], C)));
      await $.stmt($.wcall([$t2], "open", [], C));
      await $.mset((await $.wv([$t2], "Edit4", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["RBSNUMBER"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit6", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["KLI_ID"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "ComboBox10", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["TITUL"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "ComboBox11", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["TYPES"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "ComboBox12", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["CARDSTATUS"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit15", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["FNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit16", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["LNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit17", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["HOMEPHONE"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit27", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["WORKPHONE"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit18", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["PASSPORT"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "DateTimePicker7", C, false)), "value", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["BIRTHDAY"], C)), "asvariant")));
      await $.mset((await $.wv([$t2], "Edit20", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["COUNTRY"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit19", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["CITY"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit21", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["LANG_CODE"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit22", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["ADDRESS"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "ComboBox1", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["CARDTYPE"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "DateTimePicker8", C, false)), "Value", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["EXPIRY"], C)), "asvariant")));
      await $.mset((await $.wv([$t2], "ComboBox4", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["RESIDENT"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit26", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["REFERENCE"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit25", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["SECURITY"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit24", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["CARDNUMBER"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Edit23", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["EMBOSSNAME"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "ComboBox2", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FIELDBYNAME", ["COMPANY"], C)), "AsString")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t2], "Edit1", C, false)), "Text")), ""))) {
        await $.mset((await $.wv([$t2], "Edit1", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "EDIT2", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit4", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit6", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "ComboBox10", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "ComboBox11", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "ComboBox12", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit15", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit16", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit17", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit27", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit18", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "DateTimePicker7", C, false)), "value", (await $.wv([$t2], "DATE", C, false)));
        await $.mset((await $.wv([$t2], "Edit20", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit19", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit21", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit22", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "ComboBox1", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "DateTimePicker8", C, false)), "Value", (await $.wv([$t2], "DATE", C, false)));
        await $.mset((await $.wv([$t2], "ComboBox4", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit26", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit25", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit24", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "Edit23", C, false)), "Text", "");
        await $.mset((await $.wv([$t2], "ComboBox2", C, false)), "Text", "");
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit1")), "Text", "");
    await $.mset((await $.v(C, "EDIT2")), "Text", "");
    await $.mset((await $.v(C, "Edit4")), "Text", "");
    await $.mset((await $.v(C, "Edit6")), "Text", "");
    await $.mset((await $.v(C, "ComboBox10")), "Text", "");
    await $.mset((await $.v(C, "ComboBox11")), "Text", "");
    await $.mset((await $.v(C, "ComboBox12")), "Text", "");
    await $.mset((await $.v(C, "Edit15")), "Text", "");
    await $.mset((await $.v(C, "Edit16")), "Text", "");
    await $.mset((await $.v(C, "Edit17")), "Text", "");
    await $.mset((await $.v(C, "Edit27")), "Text", "");
    await $.mset((await $.v(C, "Edit18")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker7")), "value", (await $.v(C, "DATE")));
    await $.mset((await $.v(C, "Edit20")), "Text", "");
    await $.mset((await $.v(C, "Edit19")), "Text", "");
    await $.mset((await $.v(C, "Edit21")), "Text", "");
    await $.mset((await $.v(C, "Edit22")), "Text", "");
    await $.mset((await $.v(C, "ComboBox1")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker8")), "Value", (await $.v(C, "DATE")));
    await $.mset((await $.v(C, "ComboBox4")), "Text", "");
    await $.mset((await $.v(C, "Edit26")), "Text", "");
    await $.mset((await $.v(C, "Edit25")), "Text", "");
    await $.mset((await $.v(C, "Edit24")), "Text", "");
    await $.mset((await $.v(C, "Edit23")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCARDNUMBER", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["inserbase"] = $.fn(async function inserbase(p0) {
  const L1 = {"filename": $.copyArg(p0), result: undefined, "ij": 0, "qebul_edilen_fayl": '', "fayldaki_setrler": '', "qebul_edilen_f": null, "cartin_nomresi": '', "adi_ve_famili": '', "cartin_nomresi_2": '', "hesab_nomresi": '', "referensi": '', "faylin_bashligi": '', "faylin_sonlugu": '', "q_e_f_sonlugu": '', "q_e_f_bashligi": '', "adidir": '', "familidir": '', "duzdurmu": false, "i_ad": 0};
  await $.fixArgs(L1, ["filename"]);
  L1["qebul_edilen_fayl"] = L1["filename"];
  L1["q_e_f_sonlugu"] = (await $.call(C, "copy", [L1["qebul_edilen_fayl"], ($.sub((await $.call(C, "length", [L1["qebul_edilen_fayl"]])), 2)), 3]));
  L1["q_e_f_bashligi"] = (await $.call(C, "copy", [L1["qebul_edilen_fayl"], 1, 3]));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L1["qebul_edilen_f"], async ($t3) => { L1["qebul_edilen_f"] = $t3; }), L1["qebul_edilen_fayl"]])));
  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L1["qebul_edilen_f"], async ($t4) => { L1["qebul_edilen_f"] = $t4; })])));
  while ($.truthy($.not((await $.call(C, "eof", [L1["qebul_edilen_f"]]))))) {
    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L1["qebul_edilen_f"], async ($t5) => { L1["qebul_edilen_f"] = $t5; }), $.ref(async () => L1["fayldaki_setrler"], async ($t6) => { L1["fayldaki_setrler"] = $t6; })])));
    L1["cartin_nomresi"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L1["fayldaki_setrler"], 34, 16]))]));
    L1["adi_ve_famili"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L1["fayldaki_setrler"], 51, 25]))]));
    L1["cartin_nomresi_2"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L1["fayldaki_setrler"], 89, 16]))]));
    L1["hesab_nomresi"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L1["fayldaki_setrler"], 106, 30]))]));
    L1["referensi"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L1["fayldaki_setrler"], 1, 15]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["editcardnumber", [L1["cartin_nomresi"], L1["adi_ve_famili"], L1["cartin_nomresi_2"], L1["hesab_nomresi"], L1["referensi"]]])));
    L1["ij"] = $.add(L1["ij"], 1);
    await $.tick();
  }
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L1["qebul_edilen_f"], async ($t7) => { L1["qebul_edilen_f"] = $t7; })])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  return L1.result;
});
  if ($.truthy((await $.mv((await $.v(C, "OpenDialog1")), "Execute")))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["DELETCARDNUM", []])));
    await $.stmt((await $.callv(L0["inserbase"], [(await $.mv((await $.v(C, "OpenDialog1")), "FileName"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardnumber1")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardnumber2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "cardnumber1")), "KART NOMRELERI", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "cardnumber2")), "KART NOMRELERI", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t8 = (await $.v(C, "DBGrid1"));
    const $t9 = (await $.wv([$t8], "SelectedRows", C, false));
    const $t10 = (await $.mv((await $.wv([$t8, $t9], "DataSource", C, false)), "DataSet"));
    const $t11 = (await $.wv([$t8, $t9, $t10], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t8, $t9, $t10, $t11], "Count", C, false)), 0))) {
        await $.wset([$t8, $t9, $t10, $t11], "CurrentRowSelected", (await $.wv([$t8, $t9, $t10, $t11], "True", C, false)), C);
      }
      { const $t12 = $.sub((await $.wv([$t8, $t9, $t10, $t11], "Count", C, false)), 1);
        await $.wset([$t8, $t9, $t10, $t11], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t13 = true;
        for (;;) {
          if (!$t13) { await $.wset([$t8, $t9, $t10, $t11], "Index", $.succ((await $.wv([$t8, $t9, $t10, $t11], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t13 = false;
          if (!($.ord((await $.wv([$t8, $t9, $t10, $t11], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t12))) break;
          await $.stmt((await $.wcall([$t8, $t9, $t10, $t11], "GotoBookmark", [(await $.wcall([$t8, $t9, $t10, $t11], "Pointer", [(await $.idx((await $.wv([$t8, $t9, $t10, $t11], "Items", C, false)), [(await $.wv([$t8, $t9, $t10, $t11], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t8, $t9, $t10, $t11], "TransactionID", (await $.mv((await $.wcall([$t8, $t9, $t10, $t11], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t8, $t9, $t10, $t11], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t14 = (await $.wcall([$t8, $t9, $t10, $t11], "MessageDlg", [(await $.wcall([$t8, $t9, $t10, $t11], "Format", ["Secilmiş sətir silinsin? ", [(await $.wv([$t8, $t9, $t10, $t11], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t8, $t9, $t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t8, $t9, $t10, $t11], "mbYes", C, false)), (await $.wv([$t8, $t9, $t10, $t11], "mbNo", C, false)), (await $.wv([$t8, $t9, $t10, $t11], "mbCancel", C, false)), (await $.wv([$t8, $t9, $t10, $t11], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t14, (await $.wv([$t8, $t9, $t10, $t11], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t14, (await $.wv([$t8, $t9, $t10, $t11], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t14, (await $.wv([$t8, $t9, $t10, $t11], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t8, $t9, $t10, $t11], "MessageDlg", [(await $.wcall([$t8, $t9, $t10, $t11], "Format", ["%d  sayda sətir silinsin?", [$.sub((await $.wv([$t8, $t9, $t10, $t11], "Count", C, false)), (await $.wv([$t8, $t9, $t10, $t11], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t8, $t9, $t10, $t11], "mtConfirmation", C, false)), [(await $.wv([$t8, $t9, $t10, $t11], "mbYes", C, false)), (await $.wv([$t8, $t9, $t10, $t11], "mbCancel", C, false))], 0], C)), (await $.wv([$t8, $t9, $t10, $t11], "mrYes", C, false))))) {
                  await $.wset([$t8, $t9, $t10, $t11], "WaitNextConfirm", (await $.wv([$t8, $t9, $t10, $t11], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t8, $t9, $t10, $t11], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t8, $t9, $t10, $t11], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["cardnumdelete", [(await $.wv([$t8, $t9, $t10, $t11], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t8, $t9, $t10, $t11], "WillRefresh", (await $.wv([$t8, $t9, $t10, $t11], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t8, $t9, $t10, $t11], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t8, $t9, $t10, $t11], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t8, $t9, $t10, $t11], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t8, $t9, $t10, $t11], "ShowMessage", ["Sətir silindi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t15 = (await $.v(C, "DBGrid1"));
    const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
    const $t17 = (await $.mv((await $.wv([$t15, $t16], "DataSource", C, false)), "DataSet"));
    const $t18 = (await $.wv([$t15, $t16, $t17], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t15, $t16, $t17, $t18], "Count", C, false)), 0))) {
        await $.wset([$t15, $t16, $t17, $t18], "CurrentRowSelected", (await $.wv([$t15, $t16, $t17, $t18], "True", C, false)), C);
      }
      { const $t19 = $.sub((await $.wv([$t15, $t16, $t17, $t18], "Count", C, false)), 1);
        await $.wset([$t15, $t16, $t17, $t18], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t20 = true;
        for (;;) {
          if (!$t20) { await $.wset([$t15, $t16, $t17, $t18], "Index", $.succ((await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t20 = false;
          if (!($.ord((await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t19))) break;
          await $.stmt((await $.wcall([$t15, $t16, $t17, $t18], "GotoBookmark", [(await $.wcall([$t15, $t16, $t17, $t18], "Pointer", [(await $.idx((await $.wv([$t15, $t16, $t17, $t18], "Items", C, false)), [(await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t15, $t16, $t17, $t18], "TransactionID", (await $.mv((await $.wcall([$t15, $t16, $t17, $t18], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t15, $t16, $t17, $t18], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t21 = (await $.wcall([$t15, $t16, $t17, $t18], "MessageDlg", [(await $.wcall([$t15, $t16, $t17, $t18], "Format", ["Secilmiş kartlar dəyişilsin?? №", [(await $.wv([$t15, $t16, $t17, $t18], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t15, $t16, $t17, $t18], "mtConfirmation", C, false)), [(await $.wv([$t15, $t16, $t17, $t18], "mbYes", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbNo", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbCancel", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t21, (await $.wv([$t15, $t16, $t17, $t18], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t21, (await $.wv([$t15, $t16, $t17, $t18], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t21, (await $.wv([$t15, $t16, $t17, $t18], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t15, $t16, $t17, $t18], "MessageDlg", [(await $.wcall([$t15, $t16, $t17, $t18], "Format", ["%d  sayda kart dəyişilsin?", [$.sub((await $.wv([$t15, $t16, $t17, $t18], "Count", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t15, $t16, $t17, $t18], "mtConfirmation", C, false)), [(await $.wv([$t15, $t16, $t17, $t18], "mbYes", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbCancel", C, false))], 0], C)), (await $.wv([$t15, $t16, $t17, $t18], "mrYes", C, false))))) {
                  await $.wset([$t15, $t16, $t17, $t18], "WaitNextConfirm", (await $.wv([$t15, $t16, $t17, $t18], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t15, $t16, $t17, $t18], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t15, $t16, $t17, $t18], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["cardnumchange", [(await $.wv([$t15, $t16, $t17, $t18], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t15, $t16, $t17, $t18], "WillRefresh", (await $.wv([$t15, $t16, $t17, $t18], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t15, $t16, $t17, $t18], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t15, $t16, $t17, $t18], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t15, $t16, $t17, $t18], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t15, $t16, $t17, $t18], "ShowMessage", ["Kart nömrələri dəyişildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "EXCEL1Click", async function EXCEL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "cardnumber1")), "KART NOMRELERI", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "EXCEL2Click", async function EXCEL2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "cardnumber2")), "KART NOMRELERI", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t22 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t22], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t23 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t22], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t23, 1)) {
          await $.wset([$t22], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t23, 2)) {
          await $.wset([$t22], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t23, 3)) {
          await $.wset([$t22], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t23, 4)) {
          await $.wset([$t22], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t22], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t22], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t22], "ImageList1", C, false)), "Draw", [(await $.wv([$t22], "Canvas", C, false)), (await $.mv((await $.wv([$t22], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t22], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t22], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t22], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t22], "DefaultDrawColumnCell", [(await $.wv([$t22], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t22], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t22], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t22], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCARDNUMBER", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t24 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t25 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t25, 1)) {
          await $.wset([$t24], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, 2)) {
          await $.wset([$t24], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, 3)) {
          await $.wset([$t24], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, 4)) {
          await $.wset([$t24], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t24], "ImageList1", C, false)), "Draw", [(await $.wv([$t24], "Canvas", C, false)), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t24], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t24], "DefaultDrawColumnCell", [(await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t24], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t24], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCARDNUMBER", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t26 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t26], "SortPosition", (await $.mcall((await $.wv([$t26], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t26], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t26], "Refresh", [], C));
    } finally {
      { const $t27 = await $.iset((await $.wv([$t26], "SQL", C, false)), [(await $.wv([$t26], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t26], "EmptyStr", C, false))); if ($t27 !== undefined) { await $.wset([$t26], "SQL", $t27, C); } }
      await $.mset((await $.wv([$t26], "Screen", C, false)), "Cursor", (await $.wv([$t26], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCARDNUMBER", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
    const $t28 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t28], "SortPosition", (await $.mcall((await $.wv([$t28], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t28], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t28], "Refresh", [], C));
    } finally {
      { const $t29 = await $.iset((await $.wv([$t28], "SQL", C, false)), [(await $.wv([$t28], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t28], "EmptyStr", C, false))); if ($t29 !== undefined) { await $.wset([$t28], "SQL", $t29, C); } }
      await $.mset((await $.wv([$t28], "Screen", C, false)), "Cursor", (await $.wv([$t28], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCARDNUMBER", "TabSheet1Show", async function TabSheet1Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["DELETCARDNUM", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "SELECTALL1Click", async function SELECTALL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "dbgrid1"));
    const $t31 = (await $.wv([$t30], "SelectedRows", C, false));
    const $t32 = (await $.mv((await $.wv([$t30, $t31], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t30, $t31, $t32], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t30, $t31, $t32], "First", [], C));
      while ($.truthy($.not((await $.wv([$t30, $t31, $t32], "Eof", C, false))))) {
        await $.wset([$t30, $t31, $t32], "CurrentRowSelected", (await $.wv([$t30, $t31, $t32], "True", C, false)), C);
        await $.stmt($.wcall([$t30, $t31, $t32], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t30, $t31, $t32], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCARDNUMBER", "N11DrawItem", async function N11DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t33 = L0["acanvas"];
    const $t34 = (await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t35 = (await $.mv((await $.wv([$t33, $t34], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t33, $t34, $t35], "Charset", (await $.wv([$t33, $t34, $t35], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t33, $t34, $t35], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t33, $t34, $t35], "Default", C, false)))) {
        await $.wset([$t33, $t34, $t35], "Style", [(await $.wv([$t33, $t34, $t35], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t33, $t34], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t33, $t34], "Pen", C, false)), "Color", (await $.wv([$t33, $t34], "clBlack", C, false)));
      await $.wset([$t33, $t34], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t33, $t34], "MoveTo", [(await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t33, $t34], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t33, $t34], "LineTo", [(await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t33, $t34], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t33, $t34], "inc", [$.ref(async () => (await $.wv([$t33, $t34], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t36) => { await $.wset([$t33, $t34], "LineBottom", $t36, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t33, $t34], "Pen", C, false)), "Color", (await $.wv([$t33, $t34], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t33, $t34], "MoveTo", [(await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t33, $t34], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t33, $t34], "LineTo", [(await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t33, $t34], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t33, $t34], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t33, $t34], "Brush", C, false)), "Color", (await $.wv([$t33, $t34], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t33, $t34], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t33, $t34], "Font", C, false)), "Color", (await $.wv([$t33, $t34], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t33, $t34], "Font", C, false)), "Color", (await $.wv([$t33, $t34], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t33, $t34], "Brush", C, false)), "Color", (await $.wv([$t33, $t34], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t33, $t34], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t33, $t34], "Font", C, false)), "Color", (await $.wv([$t33, $t34], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t33, $t34], "Font", C, false)), "Color", (await $.wv([$t33, $t34], "clGrayText", C, false)));
        }
      }
      await $.wset([$t33, $t34], "Bar", (await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t33, $t34], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t37) => { await $.mset((await $.wv([$t33, $t34], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t37); }), 22], C)));
      await $.stmt((await $.wcall([$t33, $t34], "FillRect", [(await $.wv([$t33, $t34], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t33, $t34], "TextOut", [$.add((await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t33, $t34], "Caption", C, false))], C)));
    }
    await $.wset([$t33, $t34], "SText", (await $.wcall([$t33, $t34], "ShortCutToText", [(await $.wv([$t33, $t34], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t33, $t34], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t33, $t34], "TextWidth", [(await $.wv([$t33, $t34], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t33, $t34], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t33, $t34], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t33, $t34], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t38 = (await $.wv([$t33, $t34], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t33, $t34, $t38], "Assigned", [(await $.wv([$t33, $t34, $t38], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t33, $t34, $t38], "Checked", C, false)))) {
            await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t33, $t34, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t33, $t34, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t33, $t34, $t38], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t39) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t39); }), 2], C)));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t40) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t40); }), 2], C)));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t41) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t41); }), 2], C)));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t42) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t42); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t33, $t34, $t38], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t43) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t43); }), 1], C)));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t44) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t44); }), 1], C)));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t45) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t45); }), 1], C)));
            await $.stmt((await $.wcall([$t33, $t34, $t38], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t46) => { await $.mset((await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t46); }), 1], C)));
            if ($.truthy((await $.wv([$t33, $t34, $t38], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t33, $t34, $t38], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t33, $t34, $t38], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t33, $t34, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t33, $t34, $t38], "Images", C, false)), "Draw", [(await $.wv([$t33, $t34, $t38], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t33, $t34, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t33, $t34, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t33, $t34, $t38], "ImageIndex", C, false)), (await $.wv([$t33, $t34, $t38], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCARDNUMBER", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

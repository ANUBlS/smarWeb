// Generated from Unit3.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit3", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Db", "OracleData", "SearchEdit", "Menus", "ExtCtrls", "DBViewComboBox", "ldialogs", "ExcelXp", "OleServer", "CMExcelExport", "Unit2", "SboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSazlama", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "openbic": {"name": "Openbic", "type": "TOpenDialog"}, "mainmenu1": {"name": "MainMenu1", "type": "TMainMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "exit1": {"name": "Exit1", "type": "TMenuItem"}, "filials1": {"name": "Filials1", "type": "TMenuItem"}, "main1": {"name": "Main1", "type": "TMenuItem"}, "dbgridfilial": {"name": "dbgridfilial", "type": "TOracleDataSet"}, "fil_all": {"name": "fil_all", "type": "TDataSource"}, "filialoffilial": {"name": "filialoffilial", "type": "TOracleDataSet"}, "accountoffilial": {"name": "accountoffilial", "type": "TOracleDataSet"}, "fli": {"name": "fli", "type": "TDataSource"}, "ac": {"name": "ac", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}, "label13": {"name": "Label13", "type": "TLabel"}, "oracledataset6": {"name": "OracleDataSet6", "type": "TOracleDataSet"}, "datasource5": {"name": "DataSource5", "type": "TDataSource"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "instcount": {"name": "instcount", "type": "TEdit"}, "inst": {"name": "inst", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "format": {"name": "format", "type": "TDBViewComboBox"}, "debet": {"name": "debet", "type": "TDBViewComboBox"}, "kredit": {"name": "kredit", "type": "TDBViewComboBox"}, "summ": {"name": "summ", "type": "TDBViewComboBox"}, "destination": {"name": "destination", "type": "TDBViewComboBox"}, "filials": {"name": "filials", "type": "TDBViewComboBox"}, "prow": {"name": "prow", "type": "TDBGrid"}, "dest_title": {"name": "Dest_Title", "type": "TDBViewComboBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "add": {"name": "Add", "type": "TButton"}, "edit": {"name": "edit", "type": "TButton"}, "delete": {"name": "delete", "type": "TButton"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}, "dbviewcombobox3": {"name": "DBViewComboBox3", "type": "TDBViewComboBox"}, "dbviewcombobox4": {"name": "DBViewComboBox4", "type": "TDBViewComboBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "button6": {"name": "Button6", "type": "TButton"}, "button7": {"name": "Button7", "type": "TButton"}, "button8": {"name": "Button8", "type": "TButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "acc": {"name": "acc", "type": "TSearchEdit"}, "bic": {"name": "bic", "type": "TSearchEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Sazlama", null, "TSazlama");
  });
  U.method("TSazlama", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Openbic")), "Execute", []);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "Openbic")), "FileName")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "Filials1Click", async function Filials1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "Main1Click", async function Main1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "format")), "Text")), ""))) {
    await $.mset((await $.v(C, "debet")), "Visible", false);
    await $.mset((await $.v(C, "kredit")), "Visible", false);
    await $.mset((await $.v(C, "summ")), "Visible", false);
    await $.mset((await $.v(C, "destination")), "Visible", false);
    await $.mset((await $.v(C, "Filials")), "Visible", false);
    await $.mset((await $.v(C, "dest_title")), "Visible", false);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "formatChange", async function formatChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "format")), "Text")), ""))) {
    {
      const $t1 = (await $.v(C, "SWDataModule"));
      await $.stmt((await $.mcall((await $.wv([$t1], "settings_fields", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t1], "format", C, false)), "text"))])));
      await $.stmt((await $.mcall((await $.wv([$t1], "settings_fields2", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t1], "format", C, false)), "text"))])));
      await $.stmt((await $.mcall((await $.wv([$t1], "settings_fields3", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t1], "format", C, false)), "text"))])));
      await $.stmt((await $.mcall((await $.wv([$t1], "settings_fields4", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t1], "format", C, false)), "text"))])));
      await $.stmt((await $.mcall((await $.wv([$t1], "settings_fields5", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t1], "format", C, false)), "text"))])));
      await $.mcall((await $.wv([$t1], "settings_fields", C, false)), "close", []);
      await $.mcall((await $.wv([$t1], "settings_fields", C, false)), "open", []);
      await $.mcall((await $.wv([$t1], "settings_fields2", C, false)), "close", []);
      await $.mcall((await $.wv([$t1], "settings_fields2", C, false)), "open", []);
      await $.mcall((await $.wv([$t1], "settings_fields3", C, false)), "close", []);
      await $.mcall((await $.wv([$t1], "settings_fields3", C, false)), "open", []);
      await $.mcall((await $.wv([$t1], "settings_fields4", C, false)), "close", []);
      await $.mcall((await $.wv([$t1], "settings_fields4", C, false)), "open", []);
      await $.mcall((await $.wv([$t1], "settings_fields5", C, false)), "close", []);
      await $.mcall((await $.wv([$t1], "settings_fields5", C, false)), "open", []);
    }
    await $.mset((await $.v(C, "debet")), "Visible", true);
    await $.mset((await $.v(C, "kredit")), "Visible", true);
    await $.mset((await $.v(C, "summ")), "Visible", true);
    await $.mset((await $.v(C, "destination")), "Visible", true);
    await $.mset((await $.v(C, "Filials")), "Visible", true);
    await $.mset((await $.v(C, "dest_title")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "debet")), "Visible", false);
    await $.mset((await $.v(C, "kredit")), "Visible", false);
    await $.mset((await $.v(C, "summ")), "Visible", false);
    await $.mset((await $.v(C, "destination")), "Visible", false);
    await $.mset((await $.v(C, "Filials")), "Visible", false);
    await $.mset((await $.v(C, "dest_title")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "editClick", async function editClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "sta": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit")), "Caption")), "Əlavə et"))) {
    L0["sta"] = 1;
  } else {
    L0["sta"] = 2;
  }
  if ($.truthy($.eq(L0["sta"], 2))) {
    await $.mset((await $.v(C, "Edit")), "Caption", "Əlavə et");
    await $.mset((await $.v(C, "add")), "visible", false);
    await $.mset((await $.v(C, "delete")), "visible", false);
    await $.mset((await $.v(C, "debet")), "Visible", true);
    await $.mset((await $.v(C, "kredit")), "Visible", true);
    await $.mset((await $.v(C, "summ")), "Visible", true);
    await $.mset((await $.v(C, "destination")), "Visible", true);
    await $.mset((await $.v(C, "Filials")), "Visible", true);
    await $.mset((await $.v(C, "dest_title")), "Visible", true);
    await $.mset((await $.v(C, "format")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["FORMAT"])), "AsString")));
    if ($.truthy($.ne((await $.mv((await $.v(C, "format")), "Text")), ""))) {
      {
        const $t2 = (await $.v(C, "SWDataModule"));
        await $.stmt((await $.mcall((await $.wv([$t2], "settings_fields", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t2], "format", C, false)), "text"))])));
        await $.stmt((await $.mcall((await $.wv([$t2], "settings_fields2", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t2], "format", C, false)), "text"))])));
        await $.stmt((await $.mcall((await $.wv([$t2], "settings_fields3", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t2], "format", C, false)), "text"))])));
        await $.stmt((await $.mcall((await $.wv([$t2], "settings_fields4", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t2], "format", C, false)), "text"))])));
        await $.stmt((await $.mcall((await $.wv([$t2], "settings_fields5", C, false)), "SetVariable", [":FORMATS", (await $.mv((await $.wv([$t2], "format", C, false)), "text"))])));
        await $.mcall((await $.wv([$t2], "settings_fields", C, false)), "close", []);
        await $.mcall((await $.wv([$t2], "settings_fields", C, false)), "open", []);
        await $.mcall((await $.wv([$t2], "settings_fields2", C, false)), "close", []);
        await $.mcall((await $.wv([$t2], "settings_fields2", C, false)), "open", []);
        await $.mcall((await $.wv([$t2], "settings_fields3", C, false)), "close", []);
        await $.mcall((await $.wv([$t2], "settings_fields3", C, false)), "open", []);
        await $.mcall((await $.wv([$t2], "settings_fields4", C, false)), "close", []);
        await $.mcall((await $.wv([$t2], "settings_fields4", C, false)), "open", []);
        await $.mcall((await $.wv([$t2], "settings_fields5", C, false)), "close", []);
        await $.mcall((await $.wv([$t2], "settings_fields5", C, false)), "open", []);
      }
    }
    await $.mset((await $.v(C, "debet")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["DEBET"])), "AsString")));
    await $.mset((await $.v(C, "kredit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["KREDIT"])), "AsString")));
    await $.mset((await $.v(C, "summ")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["SUMM"])), "AsString")));
    await $.mset((await $.v(C, "destination")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["DESTINATION"])), "AsString")));
    await $.mset((await $.v(C, "Filials")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["FILIAL"])), "AsString")));
    await $.mset((await $.v(C, "dest_title")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "fieldbyname", ["DEST_TITLE"])), "AsString")));
  } else {
    await $.mset((await $.v(C, "Edit")), "Caption", "Redaktə et");
    await $.mset((await $.v(C, "add")), "visible", true);
    await $.mset((await $.v(C, "delete")), "visible", true);
    L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "prow")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["update_prow", [L0["id"], (await $.mv((await $.v(C, "debet")), "text")), (await $.mv((await $.v(C, "kredit")), "text")), (await $.mv((await $.v(C, "summ")), "text")), (await $.mv((await $.v(C, "destination")), "text")), (await $.mv((await $.v(C, "format")), "text")), (await $.mv((await $.v(C, "filials")), "text")), (await $.mv((await $.v(C, "dest_title")), "text"))]])));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "AddClick", async function AddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "format")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "debet")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "kredit")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "summ")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "destination")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Filials")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["add_prow", [(await $.mv((await $.v(C, "debet")), "text")), (await $.mv((await $.v(C, "kredit")), "text")), (await $.mv((await $.v(C, "summ")), "text")), (await $.mv((await $.v(C, "destination")), "text")), (await $.mv((await $.v(C, "format")), "text")), (await $.mv((await $.v(C, "filials")), "text"))]])));
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "prowo")), "Open", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Bütün xanaları seçin! "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0, "bic": '', "name": '', "branch": '', "city": '', "adress": '', "dir": '', "file_name": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["c_info"] = "%d record is imported!";
  if ($.truthy((await $.mv((await $.v(C, "RadioButton1")), "Checked")))) {
    L0["j"] = 2;
    if ($.truthy((await $.mv((await $.v(C, "Openbic")), "Execute")))) {
      L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
      await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "Openbic")), "FileName"))])));
      L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["FI"]));
      L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
      do {
        L0["bic"] = $.add((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 3])), "Text")), (await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 4])), "Text")));
        L0["name"] = (await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 5])), "Text"));
        L0["branch"] = (await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 6])), "Text"));
        L0["city"] = (await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 7])), "Text"));
        L0["adress"] = (await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 11])), "Text"));
        L0["j"] = $.add(L0["j"], 1);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["insert_bic ", [L0["bic"], L0["name"], L0["branch"], L0["city"], L0["adress"]]])));
        await $.mset((await $.v(C, "instcount")), "Text", $.add((await $.call(C, "IntToStr", [L0["j"]])), " Institution entered!"));
        await $.mcall((await $.v(C, "Sazlama")), "Refresh", []);
        await $.tick();
      } while (!$.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 3])), "Text")), "")));
      await $.stmt((await $.call(C, "ShowMessage", [$.add((await $.call(C, "inttostr", [L0["j"]])), " Messages imported to base!")])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSazlama", "Exit1Click", async function Exit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Sazlama")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

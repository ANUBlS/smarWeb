// Generated from frminfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frminfo", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Bnkinfo", "sboapiDataModuleImpl", "DB", "OracleData", "Grids", "DBGrids", "Menus", "Oracle"]);
  const C = [U];
  U.defClass("TForm23", "TForm", {"combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bankaddinfo": {"name": "bankaddinfo", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "bankaddinfocn": {"name": "bankaddinfoCN", "type": "TWideStringField"}, "bankaddinfoname": {"name": "bankaddinfoNAME", "type": "TWideStringField"}, "bankaddinfosurname": {"name": "bankaddinfoSURNAME", "type": "TWideStringField"}, "bankaddinfofname": {"name": "bankaddinfoFNAME", "type": "TWideStringField"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "sil1": {"name": "Sil1", "type": "TMenuItem"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Form23", null, "TForm23");
  });
  U.method("TForm23", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "SQL")), "Add", ["select a.rowid ,a.*  from bankinfo_adif a where a.kod_b=:addinfo"])));
  await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "DeclareVariable", ["addinfo", (await $.v(C, "otInteger"))])));
  await $.mcall((await $.v(C, "bankaddinfo")), "Refresh", []);
  await $.set(C, "form21", (await $.mcall((await $.v(C, "tform21")), "create", [Self])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 0))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "sql")), "Clear", []);
    await $.mcall((await $.v(C, "bankaddinfo")), "DeleteVariables", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "SQL")), "Add", ["select a.rowid ,a.* from bankinfo_adif a"])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 1))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 1])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 2))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 2])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 3))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 3])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 4))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 4])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 5))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 5])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm23", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "SQL")), "Add", ["select a.rowid ,a.*  from bankinfo_adif a where a.kod_b=:addinfo"])));
  await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "DeclareVariable", ["addinfo", (await $.v(C, "otInteger"))])));
  await $.mcall((await $.v(C, "bankaddinfo")), "Refresh", []);
  await $.set(C, "form21", (await $.mcall((await $.v(C, "tform21")), "create", [Self])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 1))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 1])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 2))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 2])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 3))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 3])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 4))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 4])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "itemindex")), 5))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
    await $.stmt((await $.mcall((await $.v(C, "bankaddinfo")), "setvariable", ["addinfo", 5])));
    await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "bankaddinfo")), "EOF"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "form21")), "ComboBox1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.v(C, "bankaddinfo")), "FieldByName", ["cn"])), "AsString"))])));
      await $.mcall((await $.v(C, "bankaddinfo")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "form21")), "Caption", $.add((await $.mv((await $.v(C, "ComboBox1")), "Text")), "  Əlavə etmək"));
  await $.mcall((await $.v(C, "form21")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm23", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "bankaddinfo")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "sql")), "Clear", []);
  await $.mcall((await $.v(C, "bankaddinfo")), "DeleteVariables", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "bankaddinfo")), "SQL")), "Add", ["select a.rowid ,a.* from bankinfo_adif a"])));
  await $.mcall((await $.v(C, "bankaddinfo")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm23", "Sil1Click", async function Sil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Siyahıdan silinsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.v(C, "bankaddinfo")), "Delete", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from P_CO_Cust_Settings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_Cust_Settings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Mask", "DBCtrls", "StdCtrls", "Buttons", "ExtCtrls", "Grids", "DBGrids", "P_Datamod_Unit"]);
  const C = [U];
  U.defClass("TP_Cust_Settings", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "editcountry": {"name": "EditCountry", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "editcities": {"name": "Editcities", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("P_Cust_Settings", null, "TP_Cust_Settings");
  });
  U.method("TP_Cust_Settings", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditCountry")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Boş daxil etmək olmaz"])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "phys_fs_customers")), "CallProcedure", ["add_countries", [(await $.mv((await $.v(C, "EditCountry")), "Text"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "Open", []);
  await $.mset((await $.v(C, "EditCountry")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Cust_Settings", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "phys_fs_customers")), "CallProcedure", ["delete_countries", [L0["p_id"]]])));
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Cust_Settings", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Editcities")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Boş daxil etmək olmaz"])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "phys_fs_customers")), "CallProcedure", ["add_cities", [(await $.mv((await $.v(C, "Editcities")), "Text")), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "DBEdit1")), "Text"))]))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "Open", []);
  await $.mset((await $.v(C, "Editcities")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Cust_Settings", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Cust_Settings", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t1 = (await $.mv((await $.v(C, "P_Datamodule")), "Cities"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "add", [$.add($.add("Select * from Cities where country_id='", (await $.mv((await $.wv([$t1], "DBEdit1", C, false)), "Text"))), "' ")])));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TP_Cust_Settings", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "phys_fs_customers")), "CallProcedure", ["delete_cities", [L0["p_id"]]])));
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Cust_Settings", "EditCountryKeyPress", async function EditCountryKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditCountry")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Boş daxil etmək olmaz"])));
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "phys_fs_customers")), "CallProcedure", ["add_countries", [(await $.mv((await $.v(C, "EditCountry")), "Text"))]])));
    }
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Country")), "Open", []);
    await $.mset((await $.v(C, "EditCountry")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Cust_Settings", "EditcitiesKeyPress", async function EditcitiesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Editcities")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Boş daxil etmək olmaz"])));
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "phys_fs_customers")), "CallProcedure", ["add_cities", [(await $.mv((await $.v(C, "Editcities")), "Text")), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "DBEdit1")), "Text"))]))]])));
    }
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Cities")), "Open", []);
    await $.mset((await $.v(C, "Editcities")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

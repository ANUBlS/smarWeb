// Generated from CC_Commision_Trans_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Commision_Trans_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "SearchEdit", "DBCtrls", "Mask", "ExtCtrls", "ActnList", "Db", "OracleData", "Oracle", "Buttons", "Grids", "DBGrids", "NLSLocalizer", "sboapiDataModuleImpl", "UnitData"]);
  const C = [U];
  U.enumType("toperationmode", 2);
  U.const("omInsert", 0);
  U.const("omUpdate", 1);
  U.defClass("TCC_Country_ins", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editcountry": {"name": "EditCountry", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "editcities": {"name": "Editcities", "type": "TEdit"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    U.var_("CC_Country_ins", null, "TCC_Country_ins");
  });
  U.method("TCC_Country_ins", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_Country_ins", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_Country_ins", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Ölkələr";
  await $.inherited(Self, "TCC_Country_ins", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_Country_ins", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Editcountry")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Boş daxil etmək olmaz!"])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_GENERAL")), "CallProcedure", ["add_countries", [(await $.mv((await $.v(C, "Editcountry")), "Text"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  await $.mset((await $.v(C, "Editcountry")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Country_ins", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_GENERAL")), "CallProcedure", ["delete_countries", [L0["p_id"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Country_ins", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Editcities")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Boş daxil etmək olmaz!"])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_GENERAL")), "CallProcedure", ["add_cities", [(await $.mv((await $.v(C, "Editcities")), "Text")), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "Dbedit1")), "text"))]))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Cities")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Cities")), "Open", []);
  await $.mset((await $.v(C, "Editcities")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Country_ins", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Country_ins", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t2 = (await $.mv((await $.v(C, "DataMod_Buyers")), "cities"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "Sql", C, false)), "add", [$.add($.add("Select * from Cities where country_id='", (await $.mv((await $.wv([$t2], "dbedit1", C, false)), "text"))), "' ")])));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCC_Country_ins", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Cities")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_GENERAL")), "CallProcedure", ["delete_cities", [L0["p_id"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Cities")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Cities")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

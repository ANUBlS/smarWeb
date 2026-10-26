// Generated from UnitDovriyye.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDovriyye", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "Grids", "DBGrids", "Db", "OracleData", "Oracle", "StdCtrls", "ComCtrls"]);
  const C = [U];
  U.defClass("TTurnoverForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "timepicer_b": {"name": "TimePicer_b", "type": "TDateTimePicker"}, "timepicker_s": {"name": "TimePicker_s", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "edit_min": {"name": "Edit_min", "type": "TEdit"}, "edit_max": {"name": "Edit_max", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "oraclesession1": {"name": "OracleSession1", "type": "TOracleSession"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("TurnoverForm", null, "TTurnoverForm");
  });
  U.method("TTurnoverForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "min": '', "max": '', "s_min_d": '', "s_max_d": '', "s_min_k": '', "s_max_k": '', "s_date_bas": '', "s_date_son": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["min"] = (await $.mv((await $.v(C, "Edit_min")), "Text"));
  L0["max"] = (await $.mv((await $.v(C, "Edit_max")), "Text"));
  if ($.truthy($.eq(L0["min"], ""))) {
    L0["s_min_d"] = "";
    L0["s_min_k"] = "";
  } else {
    L0["s_min_d"] = $.add(" ar.obr_d > ", L0["min"]);
    L0["s_min_k"] = $.add(" ar.obr_k > ", L0["min"]);
  }
  if ($.truthy($.eq(L0["max"], ""))) {
    L0["s_max_d"] = "";
    L0["s_max_k"] = "";
  } else {
    L0["s_max_d"] = $.add(" ar.obr_d < ", L0["max"]);
    L0["s_min_k"] = $.add(" ar.obr_k < ", L0["max"]);
  }
  L0["s"] = "SELECT c.id, c.name,ac.acc_no, ac.name, ar.pok_obr_d, ar.pok_obr_k";
  L0["s"] = $.add(L0["s"], " FROM customers c, ACCOUNT ac, archost ar  WHERE c.ID = ac.kli_id");
  L0["s"] = $.add($.add($.add($.add(L0["s"], " AND ac.ID = ar.acc_id and "), L0["s_min_d"]), " and "), L0["s_max_d"]);
  L0["s"] = $.add($.add($.add($.add(L0["s"], " and "), L0["s_min_k"]), " and "), L0["s_max_k"]);
  L0["s"] = $.add(L0["s"], " AND ar.datdate > '16-jun-2006'  AND ar.datdate < '20-jun-2006'");
  await $.mcall((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), "Add", [L0["s"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from UEmploees.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UEmploees", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Grids", "DBGrids", "Db", "OracleData", "DBCtrls", "OracleNavigator", "sboapiDataModuleImpl", "UDataMod"]);
  const C = [U];
  U.defClass("TfmEmploees", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "oraclenavigator1": {"name": "OracleNavigator1", "type": "TOracleNavigator"}}, {});
  U.init(async () => {
    U.var_("fmEmploees", null, "TfmEmploees");
  });
  U.method("TfmEmploees", "DBGrid1DrawDataCell", async function DBGrid1DrawDataCell(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "field": $.copyArg(p2), "state": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "field", "state"]);
  return L0.result;
}, {"params": ["Sender", "Rect", "Field", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "TField", "TGridDrawState"]});
  return U;
}

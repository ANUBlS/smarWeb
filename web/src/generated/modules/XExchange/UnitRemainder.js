// Generated from UnitRemainder.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRemainder", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGridEh", "DBGridEhGrouping", "CMExcelExport", "Menus", "GridsEh", "ComCtrls", "ToolWin", "ImgList", "StdCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc", "UnitRemandirReport", "UnitRate", "Unit_ExchangeMGR"]);
  const C = [U];
  U.defClass("TFormRemainder", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "excel1": {"name": "Excel1", "type": "TMenuItem"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormRemainder", null, "TFormRemainder");
  });
  U.method("TFormRemainder", "Excel1Click", async function Excel1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat tapılmadı!..."])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t1], "ODSVDM", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "ODSVDM", C, false)), "SetVariable", ["ex_id", (await $.mv((await $.wv([$t1], "ODSExRemainderEX_ID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t1], "ODSVDM", C, false)), "Open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "FormRemandirReport")), "frxReportRem")), "ShowReport", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRemainder", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormRemainder", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRemainder", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ToolButton1Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRemainder", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sysdate": 0, "sdat": 0, "dat": 0, "calendar": false, "ftime": 0, "lastday": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sysdate"] = (await $.v(C, "date"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["sdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBOPDate")), "CallDateFunction", ["get_date", []]))]))]));
  L0["calendar"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Ex_Calendar", [L0["dat"]]]));
  L0["lastday"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallDateFunction", ["LastWorkDay_Calendar", [L0["dat"]]]));
  {
    const $t2 = (await $.v(C, "DataModExch"));
    const $t3 = (await $.wv([$t2], "ODS_ExRemain", C, false));
    await $.stmt($.wcall([$t2, $t3], "Close", [], C));
    await $.mcall((await $.wv([$t2, $t3], "SQL", C, false)), "Clear", []);
    if ($.truthy(($.ge((await $.wv([$t2, $t3], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))))) {
      await $.stmt((await $.mcall((await $.wv([$t2, $t3], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
    }
    if ($.truthy((await $.and_((await $.and_(($.lt((await $.wv([$t2, $t3], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))), async () => (await $.wv([$t2, $t3], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t2, $t3], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "Lastday", { get: async () => L0["lastday"], set: async (v) => { L0["lastday"] = v; }, local: true }, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t2, $t3], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
    }
    if ($.truthy((await $.and_(($.lt((await $.wv([$t2, $t3], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))), async () => ((await $.or_($.not(((await $.wv([$t2, $t3], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)))), async () => ($.lt((await $.wv([$t2, $t3], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "Lastday", { get: async () => L0["lastday"], set: async (v) => { L0["lastday"] = v; }, local: true }, false))))))))))) {
      await $.stmt((await $.mcall((await $.wv([$t2, $t3], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
    }
    await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["dat", (await $.wv([$t2, $t3], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["sdat", (await $.wv([$t2, $t3], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["ex_id", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t2, $t3], "Open", [], C));
    await $.stmt($.wcall([$t2, $t3], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

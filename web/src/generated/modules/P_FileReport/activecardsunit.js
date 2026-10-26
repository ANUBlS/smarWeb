// Generated from activecardsunit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("activecardsunit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "DB", "OracleData", "Grids", "DBGrids", "StdCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "comobj"]);
  const C = [U];
  U.defClass("TActivecard", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("Activecard", null, "TActivecard");
  });
  U.method("TActivecard", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActivecard", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["dat", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TActivecard", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
  { const $t1 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 1], " #"); if ($t1 !== undefined) { await $.mset(L0["excel"], "Cells", $t1); } }
  { const $t2 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 2], "RBSNUMBER"); if ($t2 !== undefined) { await $.mset(L0["excel"], "Cells", $t2); } }
  { const $t3 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 3], "CARDHOLDER"); if ($t3 !== undefined) { await $.mset(L0["excel"], "Cells", $t3); } }
  { const $t4 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 4], "CARDNUMBER"); if ($t4 !== undefined) { await $.mset(L0["excel"], "Cells", $t4); } }
  { const $t5 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 5], "FIRST NAME"); if ($t5 !== undefined) { await $.mset(L0["excel"], "Cells", $t5); } }
  { const $t6 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 6], "LAST NAME"); if ($t6 !== undefined) { await $.mset(L0["excel"], "Cells", $t6); } }
  { const $t7 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 7], "CURRENCY"); if ($t7 !== undefined) { await $.mset(L0["excel"], "Cells", $t7); } }
  { const $t8 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 8], "CARDTYPE"); if ($t8 !== undefined) { await $.mset(L0["excel"], "Cells", $t8); } }
  { const $t9 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 9], "CARDSTATUS"); if ($t9 !== undefined) { await $.mset(L0["excel"], "Cells", $t9); } }
  { const $t10 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 10], "PASSPORT"); if ($t10 !== undefined) { await $.mset(L0["excel"], "Cells", $t10); } }
  { const $t11 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 11], "ISSUED_BY"); if ($t11 !== undefined) { await $.mset(L0["excel"], "Cells", $t11); } }
  { const $t12 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 12], "DOC_SINCE"); if ($t12 !== undefined) { await $.mset(L0["excel"], "Cells", $t12); } }
  { const $t13 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 13], "BIRTHDAY"); if ($t13 !== undefined) { await $.mset(L0["excel"], "Cells", $t13); } }
  { const $t14 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 14], "HOMEPHONE"); if ($t14 !== undefined) { await $.mset(L0["excel"], "Cells", $t14); } }
  { const $t15 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 15], "WORKPHONE"); if ($t15 !== undefined) { await $.mset(L0["excel"], "Cells", $t15); } }
  { const $t16 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 16], "CREDIT_LIM"); if ($t16 !== undefined) { await $.mset(L0["excel"], "Cells", $t16); } }
  { const $t17 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 17], "RESIDENT"); if ($t17 !== undefined) { await $.mset(L0["excel"], "Cells", $t17); } }
  { const $t18 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 18], "COUNTRY"); if ($t18 !== undefined) { await $.mset(L0["excel"], "Cells", $t18); } }
  { const $t19 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 19], "CITY"); if ($t19 !== undefined) { await $.mset(L0["excel"], "Cells", $t19); } }
  { const $t20 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 20], "ADDRESS"); if ($t20 !== undefined) { await $.mset(L0["excel"], "Cells", $t20); } }
  { const $t21 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 21], "DATEOPEN"); if ($t21 !== undefined) { await $.mset(L0["excel"], "Cells", $t21); } }
  { const $t22 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 22], "EXPIRY"); if ($t22 !== undefined) { await $.mset(L0["excel"], "Cells", $t22); } }
  { const $t23 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 23], "REFERENCE"); if ($t23 !== undefined) { await $.mset(L0["excel"], "Cells", $t23); } }
  { const $t24 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 24], "EMBOSSNAME"); if ($t24 !== undefined) { await $.mset(L0["excel"], "Cells", $t24); } }
  { const $t25 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 25], "COMPANY"); if ($t25 !== undefined) { await $.mset(L0["excel"], "Cells", $t25); } }
  { const $t26 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 26], "CONTRACT_NUM"); if ($t26 !== undefined) { await $.mset(L0["excel"], "Cells", $t26); } }
  { const $t27 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 27], "TYPES"); if ($t27 !== undefined) { await $.mset(L0["excel"], "Cells", $t27); } }
  await $.mcall((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [1, 1])), (await $.idx((await $.mv(L0["excel"], "Cells")), [1, 27]))])), "Select", []);
  await $.mset((await $.mv((await $.mv(L0["excel"], "Selection")), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.mv(L0["excel"], "Selection")), "Font")), "COLOR", (await $.v(C, "CLRED")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "First", []);
  { const $t28 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["index"] = $.succ(L0["index"], 1); }
      $t29 = false;
      if (!($.ord(L0["index"]) <= $.ord($t28))) break;
      { const $t30 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 1], $.add(L0["index"], 1)); if ($t30 !== undefined) { await $.mset(L0["excel"], "Cells", $t30); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 2])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      { const $t31 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 2], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["rbsnumber"])), "asstring"))); if ($t31 !== undefined) { await $.mset(L0["excel"], "Cells", $t31); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 2])), "ColumnWidth", 20);
      { const $t32 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 3], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CARDHOLDER"])), "asstring"))); if ($t32 !== undefined) { await $.mset(L0["excel"], "Cells", $t32); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 3])), "ColumnWidth", 20);
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 4])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 4])), "ColumnWidth", 20);
      { const $t33 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 4], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CARDNUMBER"])), "asstring"))); if ($t33 !== undefined) { await $.mset(L0["excel"], "Cells", $t33); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 5])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      { const $t34 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 5], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["FNAME"])), "asstring"))); if ($t34 !== undefined) { await $.mset(L0["excel"], "Cells", $t34); } }
      { const $t35 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 6], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["LNAME"])), "asstring"))); if ($t35 !== undefined) { await $.mset(L0["excel"], "Cells", $t35); } }
      { const $t36 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 7], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CURRENCY"])), "asstring"))); if ($t36 !== undefined) { await $.mset(L0["excel"], "Cells", $t36); } }
      { const $t37 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 8], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CARDTYPE"])), "asstring"))); if ($t37 !== undefined) { await $.mset(L0["excel"], "Cells", $t37); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 8])), "ColumnWidth", 20);
      { const $t38 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 9], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CARDSTATUS"])), "asstring"))); if ($t38 !== undefined) { await $.mset(L0["excel"], "Cells", $t38); } }
      { const $t39 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 10], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["PASSPORT"])), "asstring"))); if ($t39 !== undefined) { await $.mset(L0["excel"], "Cells", $t39); } }
      { const $t40 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 11], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ISSUED_BY"])), "asstring"))); if ($t40 !== undefined) { await $.mset(L0["excel"], "Cells", $t40); } }
      { const $t41 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 12], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["DOC_SINCE"])), "asstring"))); if ($t41 !== undefined) { await $.mset(L0["excel"], "Cells", $t41); } }
      { const $t42 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 13], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BIRTHDAY"])), "asstring"))); if ($t42 !== undefined) { await $.mset(L0["excel"], "Cells", $t42); } }
      { const $t43 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 14], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["HOMEPHONE"])), "asstring"))); if ($t43 !== undefined) { await $.mset(L0["excel"], "Cells", $t43); } }
      { const $t44 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 15], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["WORKPHONE"])), "asstring"))); if ($t44 !== undefined) { await $.mset(L0["excel"], "Cells", $t44); } }
      { const $t45 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 16], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CREDIT_LIM"])), "asstring"))); if ($t45 !== undefined) { await $.mset(L0["excel"], "Cells", $t45); } }
      { const $t46 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 17], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["RESIDENT"])), "asstring"))); if ($t46 !== undefined) { await $.mset(L0["excel"], "Cells", $t46); } }
      { const $t47 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 18], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["COUNTRY"])), "asstring"))); if ($t47 !== undefined) { await $.mset(L0["excel"], "Cells", $t47); } }
      { const $t48 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 19], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CITY"])), "asstring"))); if ($t48 !== undefined) { await $.mset(L0["excel"], "Cells", $t48); } }
      { const $t49 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 20], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ADDRESS"])), "asstring"))); if ($t49 !== undefined) { await $.mset(L0["excel"], "Cells", $t49); } }
      { const $t50 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 21], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["DATEOPEN"])), "asstring"))); if ($t50 !== undefined) { await $.mset(L0["excel"], "Cells", $t50); } }
      { const $t51 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 22], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["EXPIRY"])), "asstring"))); if ($t51 !== undefined) { await $.mset(L0["excel"], "Cells", $t51); } }
      { const $t52 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 23], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["REFERENCE"])), "asstring"))); if ($t52 !== undefined) { await $.mset(L0["excel"], "Cells", $t52); } }
      { const $t53 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 24], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["EMBOSSNAME"])), "asstring"))); if ($t53 !== undefined) { await $.mset(L0["excel"], "Cells", $t53); } }
      { const $t54 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 25], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["COMPANY"])), "asstring"))); if ($t54 !== undefined) { await $.mset(L0["excel"], "Cells", $t54); } }
      { const $t55 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 26], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CONTRACT_NUM"])), "asstring"))); if ($t55 !== undefined) { await $.mset(L0["excel"], "Cells", $t55); } }
      { const $t56 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 2), 27], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["TYPES"])), "asstring"))); if ($t56 !== undefined) { await $.mset(L0["excel"], "Cells", $t56); } }
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Next", []);
      await $.tick();
    }
  }
  await $.mset(L0["excel"], "visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

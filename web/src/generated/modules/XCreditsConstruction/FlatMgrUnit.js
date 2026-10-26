// Generated from FlatMgrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FlatMgrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Db", "OracleData", "Grids", "DBGrids", "ImgList", "DBCtrls", "sboapiDataModuleImpl", "DatModConstructionImpl", "ContractAddEditImpl"]);
  const C = [U];
  U.defClass("TFlatsMgrForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "companie": {"name": "companie", "type": "TOracleDataSet"}, "companieid": {"name": "companieID", "type": "TIntegerField"}, "building": {"name": "building", "type": "TOracleDataSet"}, "flat": {"name": "flat", "type": "TOracleDataSet"}, "companiesdatsrc": {"name": "companiesDatSrc", "type": "TDataSource"}, "buildingsdatsrc": {"name": "buildingsDatSrc", "type": "TDataSource"}, "flatsdatsrc": {"name": "flatsDatSrc", "type": "TDataSource"}, "buildingid": {"name": "buildingID", "type": "TFloatField"}, "buildingcomp_id": {"name": "buildingCOMP_ID", "type": "TFloatField"}, "buildingentrances": {"name": "buildingENTRANCES", "type": "TFloatField"}, "buildingflats": {"name": "buildingFLATS", "type": "TFloatField"}, "companiecomp_name": {"name": "companieCOMP_NAME", "type": "TWideStringField"}, "buildingbld_name": {"name": "buildingBLD_NAME", "type": "TWideStringField"}, "buildingaddress": {"name": "buildingADDRESS", "type": "TWideStringField"}, "flatid": {"name": "flatID", "type": "TFloatField"}, "flatbld_id": {"name": "flatBLD_ID", "type": "TFloatField"}, "flatflatnumber": {"name": "flatFLATNUMBER", "type": "TWideStringField"}, "flatentrance": {"name": "flatENTRANCE", "type": "TWideStringField"}, "flatrooms": {"name": "flatROOMS", "type": "TFloatField"}, "flatarea": {"name": "flatAREA", "type": "TFloatField"}, "flatprice1": {"name": "flatPRICE1", "type": "TFloatField"}, "flatpricegen": {"name": "flatPRICEGEN", "type": "TFloatField"}, "flatbuyer": {"name": "flatBUYER", "type": "TFloatField"}, "flatuserid": {"name": "flatUSERID", "type": "TFloatField"}, "flatbuyer_status": {"name": "flatBUYER_STATUS", "type": "TWideStringField"}, "flatffloor": {"name": "flatFFLOOR", "type": "TWideStringField"}, "flatcode": {"name": "flatCODE", "type": "TWideStringField"}, "editflatcode": {"name": "EditFlatCode", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FlatsMgrForm", null, "TFlatsMgrForm");
  });
  U.method("TFlatsMgrForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "companie")), "Open", []);
  await $.mcall((await $.v(C, "building")), "Open", []);
  await $.mcall((await $.v(C, "flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "companie")), "CloseAll", []);
  await $.mcall((await $.v(C, "building")), "CloseAll", []);
  await $.mcall((await $.v(C, "flat")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "AddEditContractForm"));
    await $.mset((await $.wv([$t1], "Edit6", C, false)), "text", (await $.wcall([$t1], "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["PRICEGEN"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t1], "Edit1", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "building")), "FieldByName", ["BLD_NAME"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit2", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["ENTRANCE"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit3", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["FLATNUMBER"])), "AsString")));
    await $.mset((await $.wv([$t1], "Edit4", C, false)), "text", (await $.wcall([$t1], "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["AREA"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t1], "Edit5", C, false)), "text", (await $.wcall([$t1], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["ROOMS"])), "AsInteger"))], C)));
    await $.mset((await $.wv([$t1], "EditPrice1", C, false)), "Text", (await $.wcall([$t1], "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["PRICE1"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t1], "EditFlatCode", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["CODE"])), "AsString")));
    await $.mset((await $.wv([$t1], "DBNumberEditEh7", C, false)), "Text", (await $.wcall([$t1], "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["PRICE1"])), "AsFloat"))], C)));
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["area"])), "asfloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "FieldByName", ["area"])), "AsFloat")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["FLATID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "FieldByName", ["id"])), "AsInteger")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["price1"])), "asfloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "FieldByName", ["price1"])), "AsFloat")));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFlatsMgrForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditFlatCode")), "Text")), ""))) {
    return L0.result;
  }
  {
    const $t2 = (await $.v(C, "flat"));
    await $.wset([$t2], "Filter", $.add("CODE=", (await $.mv((await $.wv([$t2], "EditFlatCode", C, false)), "Text"))), C);
    await $.wset([$t2], "Filtered", (await $.wv([$t2], "False", C, false)), C);
    await $.wset([$t2], "Filtered", (await $.wv([$t2], "True", C, false)), C);
  }
  {
    const $t3 = (await $.v(C, "building"));
    await $.wset([$t3], "Filter", $.add("ID=", (await $.mv((await $.mcall((await $.wv([$t3], "flat", C, false)), "FieldByName", ["BLD_ID"])), "AsString"))), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "False", C, false)), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "True", C, false)), C);
  }
  await $.stmt((await $.mcall((await $.v(C, "companie")), "Locate", ["ID", (await $.mv((await $.mcall((await $.v(C, "building")), "FieldByName", ["COMP_ID"])), "AsString")), []])));
  await $.stmt((await $.mcall((await $.v(C, "flat")), "Locate", ["Code", (await $.mv((await $.v(C, "EditFlatCode")), "Text")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "flat"));
    await $.stmt($.wcall([$t4], "edit", [], C));
    await $.mset((await $.wcall([$t4], "FieldByName", ["pricegen"], C)), "AsFloat", $.mul((await $.mv((await $.wcall([$t4], "FieldByName", ["area"], C)), "AsFloat")), (await $.mv((await $.wcall([$t4], "FieldByName", ["price1"], C)), "AsFloat"))));
    await $.stmt($.wcall([$t4], "post", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "buildingAfterScroll", async function buildingAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t5 = (await $.v(C, "flat"));
    await $.wset([$t5], "Filter", $.add("BLD_ID=", (await $.mv((await $.mcall((await $.wv([$t5], "building", C, false)), "FieldByName", ["ID"])), "AsString"))), C);
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "False", C, false)), C);
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFlatsMgrForm", "companieAfterScroll", async function companieAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = (await $.v(C, "building"));
    await $.wset([$t6], "Filter", $.add("comp_id=", (await $.mv((await $.mcall((await $.wv([$t6], "companie", C, false)), "FieldByName", ["ID"])), "AsString"))), C);
    await $.wset([$t6], "Filtered", (await $.wv([$t6], "False", C, false)), C);
    await $.wset([$t6], "Filtered", (await $.wv([$t6], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFlatsMgrForm", "DBGrid3DrawColumnCell", async function DBGrid3DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TFlatsMgrForm", "DBGrid3TitleClick", async function DBGrid3TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "title": ''};
  await $.fixArgs(L0, ["column"]);
  L0["title"] = (await $.mv(L0["column"], "FieldName"));
  await $.stmt((await $.mcall((await $.v(C, "flat")), "SetVariable", ["TITLE", L0["title"]])));
  await $.mcall((await $.v(C, "flat")), "Refresh", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  return U;
}

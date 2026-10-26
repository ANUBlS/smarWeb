// Generated from FlatsMgrIMPL.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FlatsMgrIMPL", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Db", "ImgList", "OracleData", "Grids", "DBGrids", "ExtCtrls", "DBCtrls", "sboapiDataModuleImpl", "Contractimpl", "DatModConstimpl"]);
  const C = [U];
  U.defClass("TFlatsMgrForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "companie": {"name": "companie", "type": "TOracleDataSet"}, "companiecomp_name": {"name": "companieCOMP_NAME", "type": "TWideStringField"}, "companieid": {"name": "companieID", "type": "TIntegerField"}, "building": {"name": "building", "type": "TOracleDataSet"}, "buildingid": {"name": "buildingID", "type": "TFloatField"}, "buildingcomp_id": {"name": "buildingCOMP_ID", "type": "TFloatField"}, "buildingbld_name": {"name": "buildingBLD_NAME", "type": "TWideStringField"}, "buildingentrances": {"name": "buildingENTRANCES", "type": "TFloatField"}, "buildingaddress": {"name": "buildingADDRESS", "type": "TWideStringField"}, "buildingflats": {"name": "buildingFLATS", "type": "TFloatField"}, "flat": {"name": "flat", "type": "TOracleDataSet"}, "flatid": {"name": "flatID", "type": "TFloatField"}, "flatbld_id": {"name": "flatBLD_ID", "type": "TFloatField"}, "flatflatnumber": {"name": "flatFLATNUMBER", "type": "TWideStringField"}, "flatentrance": {"name": "flatENTRANCE", "type": "TWideStringField"}, "flatffloor": {"name": "flatFFLOOR", "type": "TWideStringField"}, "flatrooms": {"name": "flatROOMS", "type": "TFloatField"}, "flatarea": {"name": "flatAREA", "type": "TFloatField"}, "flatprice1": {"name": "flatPRICE1", "type": "TFloatField"}, "flatpricegen": {"name": "flatPRICEGEN", "type": "TFloatField"}, "flatbuyer": {"name": "flatBUYER", "type": "TFloatField"}, "flatuserid": {"name": "flatUSERID", "type": "TFloatField"}, "flatbuyer_status": {"name": "flatBUYER_STATUS", "type": "TWideStringField"}, "flatcode": {"name": "flatCODE", "type": "TWideStringField"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "flatsdatsrc": {"name": "flatsDatSrc", "type": "TDataSource"}, "buildingsdatsrc": {"name": "buildingsDatSrc", "type": "TDataSource"}, "companiesdatsrc": {"name": "companiesDatSrc", "type": "TDataSource"}, "editflatcode": {"name": "EditFlatCode", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FlatsMgrForm", null, "TFlatsMgrForm");
  });
  U.method("TFlatsMgrForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "flat")), "Close", []);
  await $.mcall((await $.v(C, "building")), "Close", []);
  await $.mcall((await $.v(C, "companie")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "flat"));
    await $.stmt($.wcall([$t1], "edit", [], C));
    await $.mset((await $.wcall([$t1], "FieldByName", ["pricegen"], C)), "AsFloat", $.mul((await $.mv((await $.wcall([$t1], "FieldByName", ["area"], C)), "AsFloat")), (await $.mv((await $.wcall([$t1], "FieldByName", ["price1"], C)), "AsFloat"))));
    await $.stmt($.wcall([$t1], "post", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "buildingAfterScroll", async function buildingAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t2 = (await $.v(C, "flat"));
    await $.wset([$t2], "Filter", $.add("BLD_ID=", (await $.mv((await $.mcall((await $.wv([$t2], "building", C, false)), "FieldByName", ["ID"])), "AsString"))), C);
    await $.wset([$t2], "Filtered", (await $.wv([$t2], "False", C, false)), C);
    await $.wset([$t2], "Filtered", (await $.wv([$t2], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFlatsMgrForm", "companieAfterScroll", async function companieAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t3 = (await $.v(C, "building"));
    await $.wset([$t3], "Filter", $.add("comp_id=", (await $.mv((await $.mcall((await $.wv([$t3], "companie", C, false)), "FieldByName", ["ID"])), "AsString"))), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "False", C, false)), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFlatsMgrForm", "flatAfterPost", async function flatAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = L0["dataset"];
    await $.mset((await $.wcall([$t4], "FieldByName", ["pricegen"], C)), "AsFloat", $.mul((await $.mv((await $.wcall([$t4], "FieldByName", ["area"], C)), "AsFloat")), (await $.mv((await $.wcall([$t4], "FieldByName", ["price1"], C)), "AsFloat"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFlatsMgrForm", "flatCalcFields", async function flatCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFlatsMgrForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "companie")), "open", []);
  await $.mcall((await $.v(C, "building")), "open", []);
  await $.mcall((await $.v(C, "flat")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditFlatCode")), "Text")), ""))) {
    return L0.result;
  }
  {
    const $t5 = (await $.v(C, "flat"));
    await $.wset([$t5], "Filter", $.add("CODE=", (await $.mv((await $.wv([$t5], "EditFlatCode", C, false)), "Text"))), C);
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "False", C, false)), C);
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "True", C, false)), C);
  }
  {
    const $t6 = (await $.v(C, "building"));
    await $.wset([$t6], "Filter", $.add("ID=", (await $.mv((await $.mcall((await $.wv([$t6], "flat", C, false)), "FieldByName", ["BLD_ID"])), "AsString"))), C);
    await $.wset([$t6], "Filtered", (await $.wv([$t6], "False", C, false)), C);
    await $.wset([$t6], "Filtered", (await $.wv([$t6], "True", C, false)), C);
  }
  await $.stmt((await $.mcall((await $.v(C, "companie")), "Locate", ["ID", (await $.mv((await $.mcall((await $.v(C, "building")), "FieldByName", ["COMP_ID"])), "AsString")), []])));
  await $.stmt((await $.mcall((await $.v(C, "flat")), "Locate", ["Code", (await $.mv((await $.v(C, "EditFlatCode")), "Text")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatsMgrForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "FrmContract"));
    await $.mset((await $.wv([$t7], "Edit6", C, false)), "text", (await $.wcall([$t7], "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["PRICEGEN"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t7], "Edit1", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "building")), "FieldByName", ["BLD_NAME"])), "AsString")));
    await $.mset((await $.wv([$t7], "Edit2", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["ENTRANCE"])), "AsString")));
    await $.mset((await $.wv([$t7], "Edit3", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["FLATNUMBER"])), "AsString")));
    await $.mset((await $.wv([$t7], "Edit4", C, false)), "text", (await $.wcall([$t7], "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["AREA"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t7], "Edit5", C, false)), "text", (await $.wcall([$t7], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["ROOMS"])), "AsInteger"))], C)));
    await $.mset((await $.wv([$t7], "EditPrice1", C, false)), "Text", (await $.wcall([$t7], "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["PRICE1"])), "AsFloat"))], C)));
    await $.mset((await $.wv([$t7], "EditFlatCode", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["CODE"])), "AsString")));
    await $.mset((await $.wv([$t7], "DBNumberEditEh7", C, false)), "Text", (await $.wcall([$t7], "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "FlatsMgrForm", C, false)), "flat")), "FieldByName", ["PRICE1"])), "AsFloat"))], C)));
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["area"])), "asfloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "FieldByName", ["area"])), "AsFloat")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["FLATID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "FieldByName", ["id"])), "AsInteger")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["price1"])), "asfloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "FieldByName", ["price1"])), "AsFloat")));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from NewDepositsFrmAddEditAccTurningImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAddEditAccTurningImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBCtrls", "DBGridEh", "XFSCtrls", "Buttons", "ExtCtrls", "DB", "OracleData", "NewDepositsFrmAccountTurningImpl", "SBTranslateProc", "sboapiDataModuleimpl", "NewDepositsFormAccNameImpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAddEditAccTurning", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfstatictext1": {"name": "XFStaticText1", "type": "TXFStaticText"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xfstatictext2": {"name": "XFStaticText2", "type": "TXFStaticText"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfstatictext3": {"name": "XFStaticText3", "type": "TXFStaticText"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "editaccno": {"name": "EditAccno", "type": "TEdit"}, "xfbutton": {"name": "XFButton", "type": "TXFSpeedButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "dbcusttype": {"name": "DBCustType", "type": "TDBLookupComboBox"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TWideStringField"}, "categoriesnewdatsrc": {"name": "CategoriesNewDatSrc", "type": "TDataSource"}, "editmovename": {"name": "EditMoveName", "type": "TEdit"}, "movenames": {"name": "MoveNames", "type": "TOracleDataSet"}, "movenamesdatsrc": {"name": "MoveNamesDatSrc", "type": "TDataSource"}, "movenamesid": {"name": "MoveNamesID", "type": "TIntegerField"}, "movenamestypeid": {"name": "MoveNamesTYPEID", "type": "TIntegerField"}, "movenamesname": {"name": "MoveNamesNAME", "type": "TWideStringField"}, "movenamesdescription": {"name": "MoveNamesDESCRIPTION", "type": "TWideStringField"}, "categoriescustategory": {"name": "CategoriesCUSTATEGORY", "type": "TFloatField"}, "categoriesrezcategory": {"name": "CategoriesREZCATEGORY", "type": "TFloatField"}, "categoriesvalcategory": {"name": "CategoriesVALCATEGORY", "type": "TFloatField"}, "categoryid": {"name": "categoryid", "type": "integer"}, "valcategoryid": {"name": "valcategoryid", "type": "integer"}, "parentid": {"name": "parentid", "type": "integer"}, "pvalkod": {"name": "pvalkod", "type": "integer"}, "paccid": {"name": "paccid", "type": "integer"}, "pfilial": {"name": "pfilial", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAddEditAccTurning", null, "TNewDepositsFrmAddEditAccTurning");
  });
  U.method("TNewDepositsFrmAddEditAccTurning", "DBCustTypeClick", async function DBCustTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "categoryid", (await $.mv((await $.v(C, "DBCustType")), "KeyValue")));
  await $.set(C, "valcategoryid", (await $.mv((await $.v(C, "CategoriesVALCATEGORY")), "AsInteger")));
  {
    const $t1 = (await $.v(C, "MoveNames"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["typeid", (await $.wv([$t1], "categoryid", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "EditMoveName", C, false)), "Text", (await $.mv((await $.wv([$t1], "MoveNamesNAME", C, false)), "AsString")));
    await $.wset([$t1], "parentid", (await $.mv((await $.wv([$t1], "MoveNamesID", C, false)), "AsInteger")), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsFormAccName", (await $.mcall((await $.v(C, "TNewDepositsFormAccName")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "Close", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mset((await $.v(C, "DBCustType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "EditMoveName")), "Text", "");
  await $.mset((await $.v(C, "EditAccno")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBCustType")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin tipiini seçin!!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditAccno")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabı daxil edin!!!"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmAccountTurning")), "DM_RPDEPOSITORY")), "CallProcedure", ["InsSettings", [(await $.v(C, "parentid")), (await $.v(C, "paccid")), (await $.v(C, "pvalkod")), (await $.v(C, "pfilial"))]])));
  await $.stmt($.call(C, "Close", []));
  await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmAccountTurning")), "settings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditAccTurning", "XFButtonClick", async function XFButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsFormAccName")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

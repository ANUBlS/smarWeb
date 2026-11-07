// Generated from Unitmonxs.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitmonxs", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "DB", "OracleData", "StdCtrls", "sboapidatamoduleimpl", "TransactionDataModuleUnit", "TransactionManagerImpl", "TransactionPropertiesImpl", "CustUnit"]);
  const C = [U];
  U.defClass("TFormMonxs", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_monxs": {"name": "ODS_Monxs", "type": "TOracleDataSet"}, "dsrc_monxs": {"name": "Dsrc_monxs", "type": "TDataSource"}, "ods_monxsid": {"name": "ODS_MonxsID", "type": "TFloatField"}, "ods_monxsname": {"name": "ODS_MonxsNAME", "type": "TWideStringField"}, "ods_monxslast_name": {"name": "ODS_MonxsLAST_NAME", "type": "TWideStringField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "editname": {"name": "Editname", "type": "TEdit"}, "editlastname": {"name": "Editlastname", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormMonxs", null, "TFormMonxs");
  });
  U.method("TFormMonxs", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODS_Monxs")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMonxs", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "monex_id")), true))) {
    await $.set(C, "monexid", (await $.mv((await $.mcall((await $.v(C, "ODS_Monxs")), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustId")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_Monxs")), "FieldByName", ["id"])), "AsString")));
  }
  if ($.truthy($.eq((await $.v(C, "monex_id")), false))) {
    await $.set(C, "monexid", (await $.mv((await $.mcall((await $.v(C, "ODS_Monxs")), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_CCustId")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_Monxs")), "FieldByName", ["id"])), "AsString")));
  }
  await $.mcall((await $.v(C, "FormMonxs")), "Close", []);
  await $.mcall((await $.v(C, "FormCust")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMonxs", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Editname")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Adı sahəsi boşdur"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Editlastname")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Soyadı sahəsi boşdur"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallProcedure", ["add_cust_monxs", [(await $.mv((await $.v(C, "Editname")), "Text")), (await $.mv((await $.v(C, "Editlastname")), "Text"))]])));
  await $.mcall((await $.v(C, "ODS_Monxs")), "Refresh", []);
  if ($.truthy($.eq((await $.v(C, "monex_id")), true))) {
    await $.set(C, "monexid", (await $.mv((await $.mcall((await $.v(C, "ODS_Monxs")), "FieldByName", ["id"])), "AsInteger")));
  }
  if ($.truthy($.eq((await $.v(C, "monex_id")), false))) {
    await $.set(C, "monexid", (await $.mv((await $.mcall((await $.v(C, "ODS_Monxs")), "FieldByName", ["id"])), "AsInteger")));
  }
  await $.mset((await $.v(C, "Editname")), "Text", "");
  await $.mset((await $.v(C, "Editlastname")), "Text", "");
  await $.mcall((await $.v(C, "FormMonxs")), "Close", []);
  await $.mcall((await $.v(C, "FormCust")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMonxs", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormMonxs")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

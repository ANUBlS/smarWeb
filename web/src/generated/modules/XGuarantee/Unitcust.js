// Generated from Unitcust.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitcust", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "DB", "OracleData", "XDBGrids", "Buttons", "XFSCtrls", "sboapiDataModuleImpl", "GuaranteeMgrImpl", "DashinmazImpl"]);
  const C = [U];
  U.defClass("TFormCUT", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "ods_customers": {"name": "ODS_CUSTOMERS", "type": "TOracleDataSet"}, "ods_customersid": {"name": "ODS_CUSTOMERSID", "type": "TIntegerField"}, "ds_customers": {"name": "DS_CUSTOMERS", "type": "TDataSource"}, "ods_customersname": {"name": "ODS_CUSTOMERSNAME", "type": "TWideStringField"}, "ods_satici": {"name": "Ods_satici", "type": "TOracleDataSet"}, "ds_satici": {"name": "DS_Satici", "type": "TDataSource"}, "ods_saticicustid2": {"name": "Ods_saticiCUSTID2", "type": "TFloatField"}, "ods_saticisoname": {"name": "Ods_saticiSONAME", "type": "TWideStringField"}, "ods_saticiname": {"name": "Ods_saticiNAME", "type": "TWideStringField"}, "ods_saticilastname": {"name": "Ods_saticiLASTNAME", "type": "TWideStringField"}, "ods_saticipasspin": {"name": "Ods_saticiPASSPIN", "type": "TWideStringField"}, "ods_saticipassser": {"name": "Ods_saticiPASSSER", "type": "TWideStringField"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "ods_customersinn": {"name": "ODS_CUSTOMERSINN", "type": "TWideStringField"}, "ods_saticiful_name": {"name": "Ods_saticiFUL_NAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormCUT", null, "TFormCUT");
  });
  U.method("TFormCUT", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Close", []);
    { const $t1 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t1, 0)) {
        { const $t2 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and ID like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t2 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t2); } }
      }
      else if ($.eq($t1, 1)) {
        { const $t3 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and upper(name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t3); } }
      }
    }
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCUT", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Active")), true))))) {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCUT", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormCUT")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCUT", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "FrmDashinmaz"));
    await $.mset((await $.wv([$t6], "Edit1", C, false)), "Text", (await $.mv((await $.wv([$t6], "ODS_CUSTOMERSID", C, false)), "AsString")));
    await $.mset((await $.wv([$t6], "edit2", C, false)), "Text", (await $.mv((await $.wv([$t6], "ODS_CUSTOMERSNAME", C, false)), "AsString")));
    await $.mset((await $.wv([$t6], "edit3", C, false)), "Text", (await $.mv((await $.wv([$t6], "ODS_CUSTOMERSINN", C, false)), "AsString")));
    await $.mset((await $.wv([$t6], "edit4", C, false)), "Text", (await $.mv((await $.wv([$t6], "Ods_saticiCUSTID2", C, false)), "AsString")));
    await $.mset((await $.wv([$t6], "edit5", C, false)), "Text", (await $.mv((await $.wv([$t6], "Ods_saticiFUL_NAME", C, false)), "AsString")));
    await $.mset((await $.wv([$t6], "edit6", C, false)), "Text", (await $.mv((await $.wv([$t6], "Ods_saticiPASSPIN", C, false)), "AsString")));
    await $.wset([$t6], "satici_id", (await $.mv((await $.wv([$t6], "ODS_CUSTOMERSID", C, false)), "AsInteger")), C);
    await $.wset([$t6], "sex_satici", (await $.mv((await $.wv([$t6], "Ods_saticiCUSTID2", C, false)), "AsInteger")), C);
    await $.mcall((await $.wv([$t6], "FormCUT", C, false)), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

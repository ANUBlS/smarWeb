// Generated from CustUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "StdCtrls", "sboapidatamoduleimpl", "TransactionManagerImpl", "TransactionPropertiesImpl", "Unitmonxs"]);
  const C = [U];
  U.defClass("TFormCust", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_customers": {"name": "ODS_CUSTOMERS", "type": "TOracleDataSet"}, "dsrccust": {"name": "DsrcCust", "type": "TDataSource"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "ods_customersid": {"name": "ODS_CUSTOMERSID", "type": "TIntegerField"}, "ods_customersfullname": {"name": "ODS_CUSTOMERSFULLNAME", "type": "TWideStringField"}, "ods_customerssoname": {"name": "ODS_CUSTOMERSSONAME", "type": "TWideStringField"}, "ods_customersname": {"name": "ODS_CUSTOMERSNAME", "type": "TWideStringField"}, "ods_customerslastname": {"name": "ODS_CUSTOMERSLASTNAME", "type": "TWideStringField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "monexs": {"name": "Monexs", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FormCust", null, "TFormCust");
  });
  U.method("TFormCust", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Close", []);
    { const $t1 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t1, 0)) {
        { const $t2 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and c.ID like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t2 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t2); } }
      }
      else if ($.eq($t1, 1)) {
        { const $t3 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and upper(c.name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t3); } }
      }
      else if ($.eq($t1, 2)) {
        { const $t4 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(ci.", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t4 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t4); } }
      }
      else if ($.eq($t1, 3)) {
        { const $t5 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(ci.", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t5 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t5); } }
      }
      else if ($.eq($t1, 4)) {
        { const $t6 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(ci.", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t6 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t6); } }
      }
    }
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Close", []);
    { const $t7 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], ""); if ($t7 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t7); } }
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCust", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "vcustid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
  { const $t8 = $.sub((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), "Count")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Active")), true))))) {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Refresh", []);
  }
  L0["vcustid"] = (-(1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCust", "MonexsClick", async function MonexsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormMonxs", (await $.mcall((await $.v(C, "TFormMonxs")), "create", [Self])));
  await $.mcall((await $.v(C, "FormMonxs")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCust", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "nocustId")), true))) {
    await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
    await $.mcall((await $.v(C, "FormCust")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustId")), "Text", (await $.call(C, "inttostr", [(await $.v(C, "vCustId"))])));
    L0["key"] = "\r";
    await $.stmt((await $.mcall((await $.v(C, "TransactionEditForm")), "Edit_DCustIdKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t10) => { L0["key"] = $t10; })])));
  }
  if ($.truthy($.eq((await $.v(C, "nocustId")), false))) {
    await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
    await $.mcall((await $.v(C, "FormCust")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_CCustId")), "Text", (await $.call(C, "inttostr", [(await $.v(C, "vCustId"))])));
    L0["key"] = "\r";
    await $.stmt((await $.mcall((await $.v(C, "TransactionEditForm")), "Edit_CCustIdKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t11) => { L0["key"] = $t11; })])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCust", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "nocustId")), true))) {
    await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
    await $.mcall((await $.v(C, "FormCust")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_DCustId")), "Text", (await $.call(C, "inttostr", [(await $.v(C, "vCustId"))])));
    L0["key"] = "\r";
    await $.stmt((await $.mcall((await $.v(C, "TransactionEditForm")), "Edit_DCustIdKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t12) => { L0["key"] = $t12; })])));
  }
  if ($.truthy($.eq((await $.v(C, "nocustId")), false))) {
    await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
    await $.mcall((await $.v(C, "FormCust")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Edit_CCustId")), "Text", (await $.call(C, "inttostr", [(await $.v(C, "vCustId"))])));
    L0["key"] = "\r";
    await $.stmt((await $.mcall((await $.v(C, "TransactionEditForm")), "Edit_CCustIdKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t13) => { L0["key"] = $t13; })])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from CustomersImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomersImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "DB", "OracleData", "SboapiDataModuleImpl", "ComCtrls", "ToolWin", "StdCtrls"]);
  const C = [U];
  U.defClass("TFormCustomers", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "ods_customers": {"name": "ODS_CUSTOMERS", "type": "TOracleDataSet"}, "ds_customers": {"name": "DS_CUSTOMERS", "type": "TDataSource"}, "ods_customersid": {"name": "ODS_CUSTOMERSID", "type": "TIntegerField"}, "ods_customersfullname": {"name": "ODS_CUSTOMERSFULLNAME", "type": "TWideStringField"}, "ods_customerssoname": {"name": "ODS_CUSTOMERSSONAME", "type": "TWideStringField"}, "ods_customersname": {"name": "ODS_CUSTOMERSNAME", "type": "TWideStringField"}, "ods_customerslastname": {"name": "ODS_CUSTOMERSLASTNAME", "type": "TWideStringField"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "vcustid": {"name": "vCustId", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FormCustomers", null, "TFormCustomers");
  });
  U.method("TFormCustomers", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "EditSearchChange", async function EditSearchChange(Self, p0) {
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
  U.method("TFormCustomers", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormCustomers", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
  { const $t8 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
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
  await $.set(C, "vCustId", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "vCustId", (-(1)));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

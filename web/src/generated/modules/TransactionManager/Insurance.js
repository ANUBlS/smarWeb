// Generated from Insurance.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Insurance", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ComCtrls", "ExtCtrls", "Oracle", "CMExcelExport", "DB", "OracleData"]);
  const C = [U];
  U.defClass("TForminsurance", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_dat": {"name": "ods_dat", "type": "TOracleDataSet"}, "ods_datdat": {"name": "ods_datDAT", "type": "TDateTimeField"}, "ods_schedule": {"name": "ods_schedule", "type": "TOracleDataSet"}, "ods_schedulecreditid": {"name": "ods_scheduleCREDITID", "type": "TFloatField"}, "ods_schedulemuq": {"name": "ods_scheduleMUQ", "type": "TWideStringField"}, "ods_schedulepaymentdate": {"name": "ods_schedulePAYMENTDATE", "type": "TDateTimeField"}, "ods_scheduleinsurance": {"name": "ods_scheduleINSURANCE", "type": "TFloatField"}, "ods_scheduleinsurance_accno": {"name": "ods_scheduleINSURANCE_ACCNO", "type": "TWideStringField"}, "ods_schedulest": {"name": "ods_scheduleST", "type": "TWideStringField"}, "ods_schedulestatus": {"name": "ods_scheduleSTATUS", "type": "TIntegerField"}, "dsrc_schedule": {"name": "Dsrc_schedule", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1acc_no": {"name": "OracleDataSet1ACC_NO", "type": "TWideStringField"}, "oracledataset1acc": {"name": "OracleDataSet1ACC", "type": "TWideStringField"}, "misexcelexport": {"name": "MisExcelExport", "type": "TCMExcelExport"}, "cm_schedule": {"name": "cm_schedule", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("Forminsurance", null, "TForminsurance");
  });
  U.method("TForminsurance", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v1": '', "v2": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
    L0["v1"] = (await $.mv((await $.v(C, "EditSearch")), "Text"));
    if ($.truthy($.eq(L0["v1"], "0"))) {
      L0["v2"] = " and nvl(insurance,0)>0";
    } else {
      L0["v2"] = $.add($.add(" and insurance like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'");
    }
    await $.mcall((await $.v(C, "ods_schedule")), "Close", []);
    { const $t1 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t1, 0)) {
        { const $t2 = await $.iset((await $.mv((await $.v(C, "ods_schedule")), "SQL")), [2], $.add($.add("and creditid like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t2 !== undefined) { await $.mset((await $.v(C, "ods_schedule")), "SQL", $t2); } }
      }
      else if ($.eq($t1, 1)) {
        { const $t3 = await $.iset((await $.mv((await $.v(C, "ods_schedule")), "SQL")), [2], $.add($.add("and muq like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t3 !== undefined) { await $.mset((await $.v(C, "ods_schedule")), "SQL", $t3); } }
      }
      else if ($.eq($t1, 2)) {
        { const $t4 = await $.iset((await $.mv((await $.v(C, "ods_schedule")), "SQL")), [2], L0["v2"]); if ($t4 !== undefined) { await $.mset((await $.v(C, "ods_schedule")), "SQL", $t4); } }
      }
    }
    await $.mcall((await $.v(C, "ods_schedule")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "ods_schedule")), "Close", []);
    { const $t5 = await $.iset((await $.mv((await $.v(C, "ods_schedule")), "SQL")), [2], ""); if ($t5 !== undefined) { await $.mset((await $.v(C, "ods_schedule")), "SQL", $t5); } }
    await $.mcall((await $.v(C, "ods_schedule")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForminsurance", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_dat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForminsurance", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransDate")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "ods_dat")), "FieldByName", ["dat"])), "AsDateTime")));
  await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [0])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [1])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [3])), "Title")), "Caption"))])));
  await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForminsurance", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.wobj(C, "ods_schedule"));
    await $.stmt($.wcall([$t6], "close", [], C));
    { const $t7 = await $.iset((await $.wv([$t6], "sql", C, false)), [2], ""); if ($t7 !== undefined) { await $.wset([$t6], "sql", $t7, C); } }
    { const $t8 = await $.iset((await $.wv([$t6], "sql", C, false)), [3], ""); if ($t8 !== undefined) { await $.wset([$t6], "sql", $t8, C); } }
    await $.stmt((await $.wcall([$t6], "SetVariable", ["v_dat", (await $.wcall([$t6], "Int", [(await $.mv((await $.wv([$t6], "TransDate", C, false)), "DateTime"))], C))], C)));
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  {
    const $t9 = (await $.wobj(C, "ods_schedule"));
    await $.stmt($.wcall([$t9], "edit", [], C));
    await $.stmt($.wcall([$t9], "post", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForminsurance", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "count": 0, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mv((await $.v(C, "ods_schedule")), "RecordCount"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [L0["count"]])), "Sayda əməliyyat günün sənədlərinə göndəriləcək ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.v(C, "ods_schedule")), "First", []);
    { const $t10 = $.sub(L0["count"], 1);
      L0["i"] = 0;
      let $t11 = true;
      for (;;) {
        if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
        $t11 = false;
        if (!($.ord(L0["i"]) <= $.ord($t10))) break;
        await $.stmt((await $.mcall((await $.v(C, "cm_schedule")), "CallProcedure", ["Tr_Add", [(await $.mv((await $.v(C, "ods_scheduleCREDITID")), "AsInteger")), (await $.mv((await $.v(C, "ods_scheduleMUQ")), "AsString")), (await $.mv((await $.v(C, "TransDate")), "DateTime")), (await $.mv((await $.v(C, "ods_scheduleINSURANCE")), "Value")), (await $.mv((await $.v(C, "ods_scheduleINSURANCE_ACCNO")), "AsString"))]])));
        await $.mcall((await $.v(C, "ods_schedule")), "Next", []);
        await $.tick();
      }
    }
    {
      const $t12 = (await $.wobj(C, "ods_schedule"));
      { const $t13 = await $.iset((await $.wv([$t12], "sql", C, false)), [3], "and status=2"); if ($t13 !== undefined) { await $.wset([$t12], "sql", $t13, C); } }
    }
    await $.mcall((await $.v(C, "ods_schedule")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForminsurance", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.wobj(C, "MisExcelExport"));
    await $.stmt($.wcall([$t14], "Connect", [], C));
    await $.stmt((await $.wcall([$t14], "ExportDataset", [(await $.wv([$t14], "ods_schedule", C, false)), "Sigorta", (await $.wv([$t14], "true", C, false)), (await $.wv([$t14], "false", C, false))], C)));
    await $.stmt($.wcall([$t14], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

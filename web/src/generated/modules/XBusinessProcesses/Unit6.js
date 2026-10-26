// Generated from Unit6.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit6", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DB", "OracleData", "SearchEdit", "dblookup", "DBCtrls", "Grids", "DBGrids", "ExtCtrls", "Designer", "ActnList", "sboapidatamoduleimpl", "sbtranslateproc"]);
  const C = [U];
  U.defClass("TForm6", "TForm", {"combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "ods_avalute_t": {"name": "ODS_avalute_t", "type": "TOracleDataSet"}, "ds_avalute_t": {"name": "DS_avalute_t", "type": "TDataSource"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "ods_avalute_tval_name": {"name": "ODS_avalute_tVAL_NAME", "type": "TWideStringField"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "gridaccount": {"name": "GridAccount", "type": "TDBGrid"}, "ods_sb_bproc_acc": {"name": "ODS_sb_bproc_acc", "type": "TOracleDataSet"}, "ds_sb_bproc_acc": {"name": "DS_sb_bproc_acc", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit_balcn": {"name": "Edit_BalCN", "type": "TEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "ods_sb_bproc_accid": {"name": "ODS_sb_bproc_accID", "type": "TFloatField"}, "ods_sb_bproc_accacc_no": {"name": "ODS_sb_bproc_accACC_NO", "type": "TWideStringField"}, "ods_sb_bproc_accname": {"name": "ODS_sb_bproc_accNAME", "type": "TWideStringField"}, "ods_sb_bproc_accbal_cn1": {"name": "ODS_sb_bproc_accBAL_CN1", "type": "TFloatField"}, "edit_accno": {"name": "Edit_AccNo", "type": "TEdit"}, "ods_sb_bproc_accval_acc": {"name": "ODS_sb_bproc_accVAL_ACC", "type": "TIntegerField"}, "ods_sb_bproc_accval_name": {"name": "ODS_sb_bproc_accVal_NAME", "type": "TWideStringField"}, "ods_avalute_tvalute": {"name": "ODS_avalute_tVALUTE", "type": "TFloatField"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "action_src": {"name": "Action_Src", "type": "TAction"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "ods_sb_bproc_acckli_id": {"name": "ODS_sb_bproc_accKLI_ID", "type": "TFloatField"}, "edit_kil_id": {"name": "Edit_kil_id", "type": "TEdit"}, "v_accid": {"name": "v_accID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("Form6", null, "TForm6");
  });
  U.method("TForm6", "Action_SrcExecute", async function Action_SrcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_kil_id")), "Text")), ""))) {
    { const $t1 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [1], $.add($.add("and a.kli_id like ('%", (await $.mv((await $.v(C, "Edit_kil_id")), "Text"))), "%')")); if ($t1 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t1); } }
  } else {
    { const $t2 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [1], ""); if ($t2 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t2); } }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_AccNo")), "Text")), ""))) {
    { const $t3 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [2], $.add($.add("and sb.ACC_NO like ('%", (await $.mv((await $.v(C, "Edit_AccNo")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [2], ""); if ($t4 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t4); } }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_BalCN")), "Text")), ""))) {
    { const $t5 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [3], $.add($.add("and a.bal_cn1 like ('%", (await $.mv((await $.v(C, "Edit_BalCN")), "Text"))), "%')")); if ($t5 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t5); } }
  } else {
    { const $t6 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [3], ""); if ($t6 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t6); } }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    { const $t7 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [4], $.add($.add("and a.name like ('%", (await $.mv((await $.v(C, "Edit1")), "Text"))), "%')")); if ($t7 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t7); } }
  } else {
    { const $t8 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [4], ""); if ($t8 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t8); } }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1))))) {
    { const $t9 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [5], $.add("and a.val_acc = ", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue"))])))); if ($t9 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t9); } }
  } else {
    { const $t10 = await $.iset((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "SQL")), [5], ""); if ($t10 !== undefined) { await $.mset((await $.v(C, "ODS_sb_bproc_acc")), "SQL", $t10); } }
  }
  await $.mcall((await $.v(C, "ODS_sb_bproc_acc")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "DBLookupComboBox3CloseUp", async function DBLookupComboBox3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "Edit_ACCNoChange", async function Edit_ACCNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "Edit_BalCNChange", async function Edit_BalCNChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "Edit_kil_idChange", async function Edit_kil_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Action_Src")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TForm6", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TForm6", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "ODS_sb_bproc_acc")), "Active"))))) {
    await $.mcall((await $.v(C, "ODS_sb_bproc_acc")), "Open", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "ODS_sb_bproc_acc")), "Locate", ["ID", (await $.v(C, "v_accID")), []])));
  await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm6", "GridAccountDblClick", async function GridAccountDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_accID", (await $.mv((await $.v(C, "ODS_sb_bproc_accID")), "AsInteger")));
  if ($.truthy($.eq((await $.v(C, "v_accID")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir hesab seçilməyib!!"])));
  } else {
    await $.mcall((await $.v(C, "Form6")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

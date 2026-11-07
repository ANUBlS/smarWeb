// Generated from VilibleFieldsListImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("VilibleFieldsListImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "Db", "OracleData", "Oracle", "Buttons", "ActnList", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TVFListForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "datasrclist": {"name": "DataSrcList", "type": "TOracleDataSet"}, "spup": {"name": "spUP", "type": "TSpeedButton"}, "spdown": {"name": "spDown", "type": "TSpeedButton"}, "actionslst": {"name": "ActionsLst", "type": "TActionList"}, "moveup": {"name": "MoveUp", "type": "TAction"}, "movedown": {"name": "MoveDown", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editfrozencolcnt": {"name": "EditFrozenColCnt", "type": "TEdit"}, "btnsaveclose": {"name": "BtnSaveClose", "type": "TButton"}, "btncancelclose": {"name": "BtnCancelClose", "type": "TButton"}, "setuppackage": {"name": "SetupPackage", "type": "TOraclePackage"}, "vflistbox": {"name": "VFListBox", "type": "TCheckListBox"}, "datasrclistseqno": {"name": "DataSrcListSEQNO", "type": "TFloatField"}, "datasrclistfieldname": {"name": "DataSrcListFIELDNAME", "type": "TWideStringField"}, "datasrclistfrozen": {"name": "DataSrcListFROZEN", "type": "TFloatField"}, "datasrclistuserid": {"name": "DataSrcListUSERID", "type": "TFloatField"}, "datasrclistvisible": {"name": "DataSrcListVISIBLE", "type": "TFloatField"}, "datasrclistid": {"name": "DataSrcListID", "type": "TFloatField"}, "datasrclistfielddesc": {"name": "DataSrcListFIELDDESC", "type": "TWideStringField"}, "ffieldlist": {"name": "FFieldList", "type": "TList"}, "saveandclose": {"name": "SaveAndClose", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("VFListForm", null, "TVFListForm");
  });
  U.method("TVFListForm", "BulidVFList", async function BulidVFList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "isfieldvisible": false, "frozenfieldscount": 0, "fielddesc": '', "i": 0, "id": 0};
  L0["frozenfieldscount"] = 0;
  {
    const $t1 = (await $.wobj(C, "DataSrcList"));
    const $t2 = (await $.wv([$t1], "VFListBox", C, false));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    await $.stmt($.wcall([$t1, $t2], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1, $t2], "EOF", C, false))))) {
      await $.wset([$t1, $t2], "FieldDesc", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["FIELDDESC"], C)), "AsString")), { get: async () => L0["fielddesc"], set: async (v) => { L0["fielddesc"] = v; }, local: true });
      await $.wset([$t1, $t2], "IsFieldVisible", $.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["VISIBLE"], C)), "AsInteger")), 0), { get: async () => L0["isfieldvisible"], set: async (v) => { L0["isfieldvisible"] = v; }, local: true });
      await $.wset([$t1, $t2], "FrozenFieldsCount", $.add((await $.wv([$t1, $t2], "FrozenFieldsCount", { get: async () => L0["frozenfieldscount"], set: async (v) => { L0["frozenfieldscount"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["FROZEN"], C)), "AsInteger"))), { get: async () => L0["frozenfieldscount"], set: async (v) => { L0["frozenfieldscount"] = v; }, local: true });
      await $.wset([$t1, $t2], "ID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      await $.wset([$t1, $t2], "I", (await $.mcall((await $.wv([$t1, $t2], "Items", C, false)), "Add", [(await $.wv([$t1, $t2], "FieldDesc", { get: async () => L0["fielddesc"], set: async (v) => { L0["fielddesc"] = v; }, local: true }, false))])), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t1, $t2], "IsFieldVisible", { get: async () => L0["isfieldvisible"], set: async (v) => { L0["isfieldvisible"] = v; }, local: true }, false))); if ($t3 !== undefined) { await $.wset([$t1, $t2], "Checked", $t3, C); } }
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "FFieldList", C, false)), "Add", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C))])));
      await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "EditFrozenColCnt")), "Text", (await $.call(C, "IntToStr", [L0["frozenfieldscount"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TVFListForm", "SaveVFList", async function SaveVFList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "id": 0, "colvisible": 0, "frozen": 0, "freezecount": 0};
  L0["freezecount"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditFrozenColCnt")), "Text"))]));
  {
    const $t4 = (await $.wobj(C, "SetupPackage"));
    const $t5 = (await $.wv([$t4], "VFListBox", C, false));
    { const $t6 = $.sub((await $.mv((await $.wv([$t4, $t5], "Items", C, false)), "Count")), 1);
      await $.wset([$t4, $t5], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t4, $t5], "I", $.succ((await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
        await $.wset([$t4, $t5], "ID", (await $.wcall([$t4, $t5], "Integer", [(await $.idx((await $.wv([$t4, $t5], "FFieldList", C, false)), [(await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
        await $.wset([$t4, $t5], "ColVisible", (await $.wcall([$t4, $t5], "Integer", [$.not((await $.idx((await $.wv([$t4, $t5], "Checked", C, false)), [(await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))], C)), { get: async () => L0["colvisible"], set: async (v) => { L0["colvisible"] = v; }, local: true });
        await $.wset([$t4, $t5], "Frozen", (await $.wcall([$t4, $t5], "Integer", [$.lt((await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t4, $t5], "FreezeCount", { get: async () => L0["freezecount"], set: async (v) => { L0["freezecount"] = v; }, local: true }, false)))], C)), { get: async () => L0["frozen"], set: async (v) => { L0["frozen"] = v; }, local: true });
        await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["SetVFList", ["p_ID", (await $.wv([$t4, $t5], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "p_SeqNo", (await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), "p_Visible", (await $.wv([$t4, $t5], "ColVisible", { get: async () => L0["colvisible"], set: async (v) => { L0["colvisible"] = v; }, local: true }, false)), "p_Frozen", (await $.wv([$t4, $t5], "Frozen", { get: async () => L0["frozen"], set: async (v) => { L0["frozen"] = v; }, local: true }, false))]], C)));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TVFListForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "BulidVFList", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVFListForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.mcall((await $.v(C, "BtnCancelClose")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TVFListForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FFieldList", (await $.mv((await $.v(C, "TList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVFListForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FFieldList")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVFListForm", "MoveUpExecute", async function MoveUpExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idx": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idx"] = (await $.mv((await $.v(C, "VFListBox")), "ItemIndex"));
  {
    const $t8 = (await $.wobj(C, "VFListBox"));
    const $t9 = (await $.wv([$t8], "Items", C, false));
    if ($.truthy($.gt((await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t8, $t9], "Move", [(await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)], C)));
      await $.stmt((await $.mcall((await $.wv([$t8, $t9], "FFieldList", C, false)), "Exchange", [(await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)])));
      if ($.truthy($.ge((await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t8, $t9], "ItemIndex", $.sub((await $.wv([$t8, $t9], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVFListForm", "MoveDownExecute", async function MoveDownExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idx": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idx"] = (await $.mv((await $.v(C, "VFListBox")), "ItemIndex"));
  {
    const $t10 = (await $.wobj(C, "VFListBox"));
    const $t11 = (await $.wv([$t10], "Items", C, false));
    if ($.truthy((await $.and_(($.ne((await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), (-(1)))), async () => ($.lt((await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.mv((await $.wv([$t10, $t11], "Items", C, false)), "Count")), 1))))))) {
      await $.stmt((await $.wcall([$t10, $t11], "Move", [(await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.add((await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)], C)));
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "FFieldList", C, false)), "Exchange", [(await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.add((await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)])));
      if ($.truthy($.le((await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.mv((await $.wv([$t10, $t11], "Items", C, false)), "Count")), 1)))) {
        await $.wset([$t10, $t11], "ItemIndex", $.add((await $.wv([$t10, $t11], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVFListForm", "BtnCancelCloseClick", async function BtnCancelCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "SaveAndClose", false);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVFListForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["ssurewantexit"] = "Dəyişikliklər yadda qalmaycaq. Əminsinizmi?";
  L0["stakeeffectafterrestart"] = "Bütün dəyişikliklər  proqram növbəti dəfə yüklndikdə qüvvəyə minəcək .";
  await L0["canclose"].set((await $.or_((await $.v(C, "SaveAndClose")), async () => ($.eq((await $.call(C, "MessageDlg", [L0["ssurewantexit"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  if ($.truthy((await $.v(C, "SaveAndClose")))) {
    await $.stmt((await $.call(C, "MessageDlg", [L0["stakeeffectafterrestart"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
  }
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TVFListForm", "BtnSaveCloseClick", async function BtnSaveCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveVFList", []));
  await $.set(C, "SaveAndClose", true);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

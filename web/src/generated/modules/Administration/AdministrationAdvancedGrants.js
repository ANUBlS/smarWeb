// Generated from AdministrationAdvancedGrants.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationAdvancedGrants", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "CheckLst", "ExtCtrls", "Db", "OracleData", "DBCtrls", "SearchCombo", "AdministrationDataModule", "AdministrationMainForm", "adm_AdvGrantAddEditForm"]);
  const C = [U];
  U.defClass("TfmAdvancedgrants", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "clbadvancedmain": {"name": "clbAdvancedMain", "type": "TCheckListBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "lbmodlabel": {"name": "lbModLabel", "type": "TLabel"}, "addbtn": {"name": "addBtn", "type": "TBitBtn"}, "edbtn": {"name": "edBtn", "type": "TBitBtn"}, "delbtn": {"name": "delBtn", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("fmAdvancedgrants", null, "TfmAdvancedgrants");
  });
  U.method("TfmAdvancedgrants", "RefreshAdvancedData", async function RefreshAdvancedData(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"modid": $.copyArg(p0), "usnam": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["modid", "usnam"]);
  {
    const $t1 = (await $.v(C, "AdministrationData"));
    const $t2 = (await $.mv((await $.wv([$t1], "AdministrationData", C, false)), "ModAdvancedGrantsData"));
    if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    }
    if ($.truthy($.not(((await $.wv([$t1, $t2], "Active", C, false)))))) {
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["MODID", (await $.wv([$t1, $t2], "ModId", { get: async () => L0["modid"], set: async (v) => { L0["modid"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["UserNam", (await $.wv([$t1, $t2], "UsNam", { get: async () => L0["usnam"], set: async (v) => { L0["usnam"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    await $.mset((await $.wv([$t1, $t2], "lbModLabel", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "UsTablesData", C, false)), "FieldByName", ["trvdesc"])), "AsString")));
  }
  return L0.result;
}, {"params": ["ModId", "UsNam"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TfmAdvancedgrants", "RefreshCheckBox", async function RefreshCheckBox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "clbAdvancedMain")), "Items")), "Clear", []);
  {
    const $t3 = (await $.mv((await $.v(C, "AdministrationData")), "ModAdvancedGrantsData"));
    try {
      await $.stmt($.wcall([$t3], "DisableControls", [], C));
      await $.stmt($.wcall([$t3], "First", [], C));
      {
        const $t4 = (await $.wv([$t3], "clbAdvancedMain", C, false));
        while ($.truthy($.not(((await $.wv([$t3, $t4], "EOF", C, false)))))) {
          await $.stmt((await $.mcall((await $.wv([$t3, $t4], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["DESCRIPTION"], C)), "AsString"))])));
          if ($.truthy($.gt((await $.mv((await $.wv([$t3, $t4], "Items", C, false)), "Count")), 0))) {
            { const $t5 = await $.iset((await $.wv([$t3, $t4], "Checked", C, false)), [$.sub((await $.mv((await $.wv([$t3, $t4], "Items", C, false)), "Count")), 1)], (await $.wcall([$t3, $t4], "IntToBool", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["usergranted"], C)), "AsInteger"))], C))); if ($t5 !== undefined) { await $.wset([$t3, $t4], "Checked", $t5, C); } }
          }
          await $.stmt($.wcall([$t3, $t4], "Next", [], C));
          await $.tick();
        }
      }
    } finally {
      await $.stmt($.wcall([$t3], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmAdvancedgrants", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "Administrationdata")), "UsTablesData"));
    await $.stmt((await $.wcall([$t6], "RefreshAdvancedData", [(await $.mv((await $.wcall([$t6], "FieldByName", ["Id"], C)), "ASInteger")), (await $.wv([$t6], "GetActiveUser", C, false))], C)));
  }
  await $.stmt($.call(C, "RefreshCheckBox", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdvancedgrants", "ApplyAdvancedGrants", async function ApplyAdvancedGrants(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t7 = (await $.v(C, "Administrationdata"));
    const $t8 = (await $.mv((await $.wv([$t7], "Administrationdata", C, false)), "ModAdvancedGrantsData"));
    await $.stmt($.wcall([$t7, $t8], "First", [], C));
    { const $t9 = $.sub((await $.wv([$t7, $t8], "RecordCount", C, false)), 1);
      await $.wset([$t7, $t8], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t10 = true;
      for (;;) {
        if (!$t10) { await $.wset([$t7, $t8], "i", $.succ((await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t10 = false;
        if (!($.ord((await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t9))) break;
        await $.stmt((await $.mcall((await $.wv([$t7, $t8], "pcAdm", C, false)), "CallProcedure", ["UserAdvancedGrants", [(await $.wcall([$t7, $t8], "IntToBool", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["usergranted"], C)), "AsInteger"))], C)), (await $.wv([$t7, $t8], "GetActiveUser", C, false)), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["id"], C)), "AsInteger"))]])));
        await $.stmt($.wcall([$t7, $t8], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmAdvancedgrants", "clbAdvancedMainClickCheck", async function clbAdvancedMainClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "Administrationdata")), "ModAdvancedGrantsData"));
    if ($.truthy((await $.wv([$t11], "Active", C, false)))) {
      {
        const $t12 = ((await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)));
        if ($.truthy((await $.wcall([$t11, $t12], "Locate", ["Description", (await $.idx((await $.wv([$t11, $t12], "Items", C, false)), [(await $.wv([$t11, $t12], "ItemIndex", C, false))])), []], C)))) {
          await $.stmt($.wcall([$t11, $t12], "Edit", [], C));
          await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["usergranted"], C)), "AsInteger", (await $.wcall([$t11, $t12], "BoolToInt", [(await $.idx((await $.wv([$t11, $t12], "Checked", C, false)), [(await $.wv([$t11, $t12], "ItemIndex", C, false))]))], C)));
          await $.stmt($.wcall([$t11, $t12], "Post", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdvancedgrants", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ApplyAdvancedGrants", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdvancedgrants", "addBtnClick", async function addBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "frmAddEditAdvGrants"));
    const $t14 = (await $.wv([$t13], "AdministrationData", C, false));
    await $.wset([$t13, $t14], "NewRecord", (await $.wv([$t13, $t14], "True", C, false)), C);
    await $.mset((await $.wv([$t13, $t14], "edGrantName", C, false)), "Enabled", (await $.wv([$t13, $t14], "True", C, false)));
    await $.mset((await $.wv([$t13, $t14], "edGrantName", C, false)), "Text", "");
    await $.mset((await $.wv([$t13, $t14], "edErrorMessage", C, false)), "Text", "");
    await $.mset((await $.wv([$t13, $t14], "edDescription", C, false)), "Text", "");
    await $.mset((await $.wv([$t13, $t14], "CheckBox1", C, false)), "Checked", (await $.wv([$t13, $t14], "False", C, false)));
    await $.mset((await $.wv([$t13, $t14], "CurrencyEdit1", C, false)), "Value", 0);
    await $.stmt($.wcall([$t13, $t14], "ShowModal", [], C));
    await $.mcall((await $.wv([$t13, $t14], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13, $t14], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.stmt($.wcall([$t13, $t14], "RefreshCheckBox", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdvancedgrants", "edBtnClick", async function edBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "frmAddEditAdvGrants"));
    const $t16 = (await $.wv([$t15], "AdministrationData", C, false));
    await $.wset([$t15, $t16], "NewRecord", (await $.wv([$t15, $t16], "False", C, false)), C);
    await $.mset((await $.wv([$t15, $t16], "edGrantName", C, false)), "Enabled", (await $.wv([$t15, $t16], "False", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t15, $t16], "ModAdvancedGrantsData", C, false)), "Locate", ["Description", (await $.idx((await $.mv((await $.wv([$t15, $t16], "clbAdvancedMain", C, false)), "Items")), [(await $.mv((await $.wv([$t15, $t16], "clbAdvancedMain", C, false)), "ItemIndex"))])), []])));
    await $.mset((await $.wv([$t15, $t16], "edGrantName", C, false)), "Text", (await $.mv((await $.wv([$t15, $t16], "ModAdvancedGrantsDataGRANTNAME", C, false)), "Value")));
    await $.mset((await $.wv([$t15, $t16], "edErrorMessage", C, false)), "Text", (await $.mv((await $.wv([$t15, $t16], "ModAdvancedGrantsDataERRORMESSAGE", C, false)), "Value")));
    await $.mset((await $.wv([$t15, $t16], "edDescription", C, false)), "Text", (await $.mv((await $.wv([$t15, $t16], "ModAdvancedGrantsDataDESCRIPTION", C, false)), "Value")));
    await $.mset((await $.wv([$t15, $t16], "CheckBox1", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t15, $t16], "ModAdvancedGrantsDataHAVVALUE", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t15, $t16], "CurrencyEdit1", C, false)), "Value", (await $.mv((await $.wv([$t15, $t16], "ModAdvancedGrantsDataMAXAVALUE", C, false)), "Value")));
    await $.stmt($.wcall([$t15, $t16], "ShowModal", [], C));
    await $.mcall((await $.wv([$t15, $t16], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t15, $t16], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.stmt($.wcall([$t15, $t16], "RefreshCheckBox", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdvancedgrants", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmAddEditAdvGrants", (await $.mcall((await $.v(C, "TfrmAddEditAdvGrants")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAdvancedgrants", "delBtnClick", async function delBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.mcall((await $.wv([$t17], "ModAdvancedGrantsData", C, false)), "Locate", ["Description", (await $.idx((await $.mv((await $.wv([$t17], "clbAdvancedMain", C, false)), "Items")), [(await $.mv((await $.wv([$t17], "clbAdvancedMain", C, false)), "ItemIndex"))])), []])));
    if ($.truthy($.eq((await $.wcall([$t17], "messagedlg", ["Hüquq ləğv olunsun?", (await $.wv([$t17], "mtWarning", C, false)), [(await $.wv([$t17], "mbyes", C, false)), (await $.wv([$t17], "mbno", C, false))], 0], C)), (await $.wv([$t17], "idyes", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t17], "pcADM", C, false)), "CallProcedure", ["deladvancedgrant", [(await $.mv((await $.wv([$t17], "ModAdvancedGrantsDataID", C, false)), "Value"))]])));
    }
    await $.mcall((await $.wv([$t17], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t17], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.stmt($.wcall([$t17], "RefreshCheckBox", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

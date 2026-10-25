// Generated from adm_classesGrants.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("adm_classesGrants", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "ExtCtrls", "Buttons", "AdministrationDataModule", "adm_AdvGrantAddEditForm"]);
  const C = [U];
  U.defClass("TfrmClassGrants", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "evadvgrants": {"name": "evAdvGrants", "type": "TEvanescence"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbins": {"name": "cbIns", "type": "TCheckBox"}, "cbupd": {"name": "cbUpd", "type": "TCheckBox"}, "cbdel": {"name": "cbDel", "type": "TCheckBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "addbtn": {"name": "addBtn", "type": "TBitBtn"}, "edbtn": {"name": "edBtn", "type": "TBitBtn"}, "delbtn": {"name": "delBtn", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmClassGrants", null, "TfrmClassGrants");
  });
  U.method("TfrmClassGrants", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassGrants", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.mcall((await $.wv([$t1], "pcADM", C, false)), "CallProcedure", ["updclassgrant", [(await $.mv((await $.wv([$t1], "ClassesdataID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t1], "ModeditdataCLASS", C, false)), "AsVariant")), (await $.wcall([$t1], "Integer", [(await $.mv((await $.wv([$t1], "cbIns", C, false)), "Checked"))], C)), (await $.wcall([$t1], "Integer", [(await $.mv((await $.wv([$t1], "cbUpd", C, false)), "Checked"))], C)), (await $.wcall([$t1], "Integer", [(await $.mv((await $.wv([$t1], "cbDel", C, false)), "Checked"))], C))]])));
    await $.stmt((await $.mcall((await $.wv([$t1], "pcADM", C, false)), "CallProcedure", ["delclassadvgrant", [(await $.mv((await $.mcall((await $.wv([$t1], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString")), (await $.mv((await $.wv([$t1], "ModeditdataCLASS", C, false)), "AsVariant"))]])));
    { const $t2 = $.sub((await $.mv((await $.mv((await $.wv([$t1], "evAdvGrants", C, false)), "Items")), "Count")), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy((await $.idx((await $.mv((await $.wv([$t1], "evAdvGrants", C, false)), "Checked")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.wv([$t1], "odsClsModAdvGrant", C, false)), "Locate", ["description", (await $.idx((await $.mv((await $.wv([$t1], "evAdvGrants", C, false)), "Items")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []])));
          await $.stmt((await $.mcall((await $.wv([$t1], "pcADM", C, false)), "CallProcedure", ["addclassadvgrant", [(await $.mv((await $.mcall((await $.wv([$t1], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsVariant")), (await $.mv((await $.wv([$t1], "odsClsModAdvGrantID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t1], "ModeditdataCLASS", C, false)), "AsVariant"))]])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassGrants", "RefreshCheckBox", async function RefreshCheckBox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t4 = (await $.v(C, "AdministrationData"));
    const $t5 = (await $.wv([$t4], "odsClsModAdvGrant", C, false));
    const $t6 = (await $.wv([$t4, $t5], "frmClassGrants", C, false));
    await $.mcall((await $.wv([$t4, $t5, $t6], "evAdvGrants", C, false)), "Close", []);
    await $.mcall((await $.wv([$t4, $t5, $t6], "odsClsModAdvGrant", C, false)), "Close", []);
    await $.stmt($.wcall([$t4, $t5, $t6], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t4, $t5, $t6], "SetVariable", ["mid", (await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataMODID", C, false)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t4, $t5, $t6], "SetVariable", ["classname", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))], C)));
    await $.mcall((await $.wv([$t4, $t5, $t6], "evAdvGrants", C, false)), "Open", []);
    { const $t7 = $.sub((await $.mv((await $.mv((await $.wv([$t4, $t5, $t6], "evAdvGrants", C, false)), "Items")), "Count")), 1);
      await $.wset([$t4, $t5, $t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t4, $t5, $t6], "i", $.succ((await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        await $.stmt((await $.wcall([$t4, $t5, $t6], "Locate", ["description", (await $.idx((await $.mv((await $.wv([$t4, $t5, $t6], "evAdvGrants", C, false)), "Items")), [(await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []], C)));
        { const $t9 = await $.iset((await $.mv((await $.wv([$t4, $t5, $t6], "evAdvGrants", C, false)), "Checked")), [(await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "odsClsModAdvGrantACC", C, false)), "AsInteger")), 1)); if ($t9 !== undefined) { await $.mset((await $.wv([$t4, $t5, $t6], "evAdvGrants", C, false)), "Checked", $t9); } }
        await $.tick();
      }
    }
    await $.mset((await $.wv([$t4, $t5, $t6], "cbIns", C, false)), "Enabled", $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataCNI", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t4, $t5, $t6], "cbUpd", C, false)), "Enabled", $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataCNU", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t4, $t5, $t6], "cbDel", C, false)), "Enabled", $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataCND", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t4, $t5, $t6], "cbIns", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataINS", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t4, $t5, $t6], "cbUpd", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataUPD", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t4, $t5, $t6], "cbDel", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t4, $t5, $t6], "ModeditdataDEL", C, false)), "AsInteger")), 1));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmClassGrants", "addBtnClick", async function addBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "frmAddEditAdvGrants"));
    const $t11 = (await $.wv([$t10], "AdministrationData", C, false));
    await $.wset([$t10, $t11], "NewRecord", (await $.wv([$t10, $t11], "True", C, false)), C);
    await $.mset((await $.wv([$t10, $t11], "edGrantName", C, false)), "Enabled", (await $.wv([$t10, $t11], "True", C, false)));
    await $.mset((await $.wv([$t10, $t11], "edGrantName", C, false)), "Text", "");
    await $.mset((await $.wv([$t10, $t11], "edErrorMessage", C, false)), "Text", "");
    await $.mset((await $.wv([$t10, $t11], "edDescription", C, false)), "Text", "");
    await $.mset((await $.wv([$t10, $t11], "CheckBox1", C, false)), "Checked", (await $.wv([$t10, $t11], "False", C, false)));
    await $.mset((await $.wv([$t10, $t11], "CurrencyEdit1", C, false)), "Value", 0);
    await $.mcall((await $.wv([$t10, $t11], "frmAddEditAdvGrants", C, false)), "ShowModal", []);
    await $.mcall((await $.wv([$t10, $t11], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t10, $t11], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.stmt($.wcall([$t10, $t11], "RefreshCheckBox", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassGrants", "edBtnClick", async function edBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "frmAddEditAdvGrants"));
    const $t13 = (await $.wv([$t12], "AdministrationData", C, false));
    await $.wset([$t12, $t13], "NewRecord", (await $.wv([$t12, $t13], "False", C, false)), C);
    await $.mset((await $.wv([$t12, $t13], "edGrantName", C, false)), "Enabled", (await $.wv([$t12, $t13], "False", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t12, $t13], "ModAdvancedGrantsData", C, false)), "Locate", ["Description", (await $.idx((await $.mv((await $.wv([$t12, $t13], "evAdvGrants", C, false)), "Items")), [(await $.mv((await $.wv([$t12, $t13], "evAdvGrants", C, false)), "ItemIndex"))])), []])));
    await $.mset((await $.wv([$t12, $t13], "edGrantName", C, false)), "Text", (await $.mv((await $.wv([$t12, $t13], "ModAdvancedGrantsDataGRANTNAME", C, false)), "Value")));
    await $.mset((await $.wv([$t12, $t13], "edErrorMessage", C, false)), "Text", (await $.mv((await $.wv([$t12, $t13], "ModAdvancedGrantsDataERRORMESSAGE", C, false)), "Value")));
    await $.mset((await $.wv([$t12, $t13], "edDescription", C, false)), "Text", (await $.mv((await $.wv([$t12, $t13], "ModAdvancedGrantsDataDESCRIPTION", C, false)), "Value")));
    await $.mset((await $.wv([$t12, $t13], "CheckBox1", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t12, $t13], "ModAdvancedGrantsDataHAVVALUE", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t12, $t13], "CurrencyEdit1", C, false)), "Value", (await $.mv((await $.wv([$t12, $t13], "ModAdvancedGrantsDataMAXAVALUE", C, false)), "Value")));
    await $.mcall((await $.wv([$t12, $t13], "frmAddEditAdvGrants", C, false)), "ShowModal", []);
    await $.mcall((await $.wv([$t12, $t13], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t12, $t13], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.stmt($.wcall([$t12, $t13], "RefreshCheckBox", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassGrants", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmAddEditAdvGrants", (await $.mcall((await $.v(C, "TfrmAddEditAdvGrants")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmClassGrants", "delBtnClick", async function delBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.mcall((await $.wv([$t14], "ModAdvancedGrantsData", C, false)), "Locate", ["Description", (await $.idx((await $.mv((await $.wv([$t14], "evAdvGrants", C, false)), "Items")), [(await $.mv((await $.wv([$t14], "evAdvGrants", C, false)), "ItemIndex"))])), []])));
    if ($.truthy($.eq((await $.wcall([$t14], "messagedlg", ["Hüquq ləğv olunsun?", (await $.wv([$t14], "mtWarning", C, false)), [(await $.wv([$t14], "mbyes", C, false)), (await $.wv([$t14], "mbno", C, false))], 0], C)), (await $.wv([$t14], "idyes", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t14], "pcADM", C, false)), "CallProcedure", ["deladvancedgrant", [(await $.mv((await $.wv([$t14], "ModAdvancedGrantsDataID", C, false)), "Value"))]])));
    }
    await $.mcall((await $.wv([$t14], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t14], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.stmt($.wcall([$t14], "RefreshCheckBox", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

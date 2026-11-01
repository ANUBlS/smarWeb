// Generated from AdministrationModEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationModEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Buttons", "ExtCtrls", "HintBox", "ComObj", "ComCtrls", "Grids", "DBGrids", "SearchEdit", "OracleData", "AdministrationDataModule", "AdministrationMainForm"]);
  const C = [U];
  U.enumType("tmodaction", 4);
  U.const("maNone", 0);
  U.const("maInsert", 1);
  U.const("maDelete", 2);
  U.const("maUpdate", 3);
  U.defClass("EModException", "Exception", {}, {});
  U.defClass("TfmModEdit", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "brcansel": {"name": "brCansel", "type": "TBitBtn"}, "erbox": {"name": "ErBox", "type": "THintBox"}, "pcmodules": {"name": "pcModules", "type": "TPageControl"}, "tbinfo": {"name": "tbInfo", "type": "TTabSheet"}, "tbrights": {"name": "tbRights", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "gbmainmod": {"name": "gbMainMod", "type": "TGroupBox"}, "grobjects": {"name": "grObjects", "type": "TDBGrid"}, "grmodules": {"name": "grModules", "type": "TDBGrid"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "btrefresh": {"name": "btRefresh", "type": "TBitBtn"}, "gbobjprivs": {"name": "gbObjPrivs", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbinsert": {"name": "cbInsert", "type": "TCheckBox"}, "cbdelete": {"name": "cbDelete", "type": "TCheckBox"}, "cbupdate": {"name": "cbUpdate", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "eddescr": {"name": "edDescr", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "edclassid": {"name": "edClassId", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "edmodname": {"name": "edModName", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "rbsel": {"name": "rbSel", "type": "TRadioButton"}, "rbinsert": {"name": "rbInsert", "type": "TRadioButton"}, "rbdelete": {"name": "rbDelete", "type": "TRadioButton"}, "rbupdate": {"name": "rbUpdate", "type": "TRadioButton"}}, {"mclassid": {"name": "MClassID", "index": ["num", 0], "read": "GetInf"}, "mname": {"name": "MName", "index": ["num", 1], "read": "GetInf"}, "mdescription": {"name": "MDescription", "index": ["num", 2], "read": "GetInf"}, "mactions": {"name": "MActions", "read": "getMActions"}});
  U.init(async () => {
    U.var_("fmModEdit", null, "TfmModEdit");
  });
  U.method("TfmModEdit", "Execute", async function Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"act": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["act"]);
  {
    const $t1 = (await $.v(C, "btApply"));
    { const $t2 = (await $.wcall([$t1], "Ord", [(await $.wv([$t1], "Act", { get: async () => L0["act"], set: async (v) => { L0["act"] = v; }, local: true }, false))], C));
      if ($.eq($t2, 1)) {
        await $.wset([$t1], "Caption", "Əlavə", C);
      }
      else if ($.eq($t2, 2)) {
        await $.wset([$t1], "Caption", "Ləğv", C);
      }
      else if ($.eq($t2, 3)) {
        await $.wset([$t1], "Caption", "Dəyişmə", C);
        await $.stmt($.wcall([$t1], "InitializeModule", [], C));
        await $.mset((await $.wv([$t1], "edModName", C, false)), "Enabled", (await $.wv([$t1], "False", C, false)));
      }
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  if ($.truthy($.eq((await $.v(C, "ModalResult")), (await $.v(C, "mrOk"))))) {
    L0["result"] = L0["act"];
  } else {
    L0["result"] = (await $.v(C, "maNone"));
  }
  return L0.result;
}, {"params": ["Act"], "kind": "function", "ptypes": ["TModAction"]});
  U.method("TfmModEdit", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tmp": null};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "edModName")), "Text")), (await $.v(C, "EmptyStr")))))) {
      throw $.raise((await $.mcall((await $.v(C, "EModException")), "Create", ["Modulun adını daxil edin"])));
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "edClassId")), "Text")), (await $.v(C, "EmptyStr")))))) {
      throw $.raise((await $.mcall((await $.v(C, "EModException")), "Create", ["ClassID-ni daxil edin"])));
    }
    L0["tmp"] = (await $.call(C, "StringToGUID", [(await $.mv((await $.v(C, "edClassId")), "Text"))]));
  } catch ($t3) {
    $.rethrowControl($t3);
    if ($.excIs($t3, "EModException")) {
      L0["e"] = $.exc($t3);
      await $.set(C, "Modalresult", (await $.v(C, "mrNone")));
      await $.stmt((await $.mcall((await $.v(C, "ErBox")), "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else if ($.excIs($t3, "EOleSysError")) {
      L0["e"] = $.exc($t3);
      await $.set(C, "Modalresult", (await $.v(C, "mrNone")));
      await $.stmt((await $.mcall((await $.v(C, "ErBox")), "ShowMessage", ["Wrong Classid"])));
    }
    else { throw $t3; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "InitializeModule", async function InitializeModule(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.mv((await $.v(C, "AdministrationData")), "ModulesData"));
    await $.mset((await $.wv([$t4], "edClassId", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["NAme"], C)), "AsString")));
    await $.mset((await $.wv([$t4], "edModName", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["Description"], C)), "AsString")));
    await $.mset((await $.wv([$t4], "edDescr", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["TrvDesc"], C)), "AsString")));
    await $.mset((await $.wv([$t4], "cbInsert", C, false)), "Checked", (await $.wcall([$t4], "IntToBool", [(await $.mv((await $.wcall([$t4], "FieldByName", ["CAN_INSERT"], C)), "AsInteger"))], C)));
    await $.mset((await $.wv([$t4], "cbDelete", C, false)), "Checked", (await $.wcall([$t4], "IntToBool", [(await $.mv((await $.wcall([$t4], "FieldByName", ["CAN_DELETE"], C)), "AsInteger"))], C)));
    await $.mset((await $.wv([$t4], "cbUpdate", C, false)), "Checked", (await $.wcall([$t4], "IntToBool", [(await $.mv((await $.wcall([$t4], "FieldByName", ["CAN_UPDATE"], C)), "AsInteger"))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmModEdit", "GetInf", async function GetInf(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["index"]);
  { const $t5 = L0["index"];
    if ($.eq($t5, 0)) {
      L0["result"] = (await $.mv((await $.v(C, "edClassId")), "Text"));
    }
    else if ($.eq($t5, 1)) {
      L0["result"] = (await $.mv((await $.v(C, "edModName")), "Text"));
    }
    else if ($.eq($t5, 2)) {
      L0["result"] = (await $.mv((await $.v(C, "edDescr")), "Text"));
    }
  }
  return L0.result;
}, {"params": ["index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TfmModEdit", "getMActions", async function getMActions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  { const $t6 = (await $.call(C, "Ord", [L0["value"]]));
    if ($.eq($t6, 1)) {
      L0["result"] = (await $.mv((await $.v(C, "cbInsert")), "Checked"));
    }
    else if ($.eq($t6, 2)) {
      L0["result"] = (await $.mv((await $.v(C, "cbDelete")), "Checked"));
    }
    else if ($.eq($t6, 3)) {
      L0["result"] = (await $.mv((await $.v(C, "cbUpdate")), "Checked"));
    }
    else {
      L0["result"] = false;
    }
  }
  return L0.result;
}, {"params": ["value"], "kind": "function", "ptypes": ["TModAction"]});
  U.method("TfmModEdit", "pcModulesChange", async function pcModulesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = ((await $.mv((await $.mv((await $.v(C, "grObjects")), "DataSource")), "DataSet")));
    if ($.truthy($.not(((await $.wv([$t7], "ACTIVE", C, false)))))) {
      await $.stmt((await $.wcall([$t7], "SetVariable", ["OWNERNAME", (await $.wv([$t7], "Sm_Own", C, false))], C)));
      await $.stmt($.wcall([$t7], "Open", [], C));
    }
  }
  {
    const $t8 = (await $.v(C, "AdministrationData"));
    const $t9 = ((await $.mv((await $.mv((await $.wv([$t8], "grModules", C, false)), "DataSource")), "DataSet")));
    if ($.truthy($.not(((await $.wv([$t8, $t9], "ACTIVE", C, false)))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["MODULE", $.add("SBR_", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ModulesData", C, false)), "FieldByName", ["Description"])), "AsString")))], C)));
      await $.stmt($.wcall([$t8, $t9], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "pcModules")), "ActivePage", (await $.idx((await $.mv((await $.v(C, "pcModules")), "Pages")), [0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "grObjects")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "grModules")), "DataSource")), "DataSet")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfmModEdit", "InsertRec", async function InsertRec(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "objpriv": ''};
  {
    const $t10 = (await $.v(C, "AdministrationData"));
    const $t11 = (await $.mv((await $.wv([$t10], "AdministrationData", C, false)), "ObjectsData"));
    const $t12 = (await $.mcall((await $.mv((await $.wv([$t10, $t11], "AdministrationData", C, false)), "ObjectsData")), "FieldByName", ["OBJECT_TYPE"]));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t10, $t11, $t12], "AsString", C, false)), "VIEW")), async () => ($.eq((await $.wv([$t10, $t11, $t12], "AsString", C, false)), "TABLE")))))) {
      await $.wset([$t10, $t11, $t12], "ObjPriv", "SELECT", { get: async () => L0["objpriv"], set: async (v) => { L0["objpriv"] = v; }, local: true });
    } else {
      if ($.truthy((await $.or_((await $.or_(($.eq((await $.wv([$t10, $t11, $t12], "AsString", C, false)), "PROCEDURE")), async () => ($.eq((await $.wv([$t10, $t11, $t12], "AsString", C, false)), "PACKAGE")))), async () => ($.eq((await $.wv([$t10, $t11, $t12], "AsString", C, false)), "FUNCTION")))))) {
        await $.wset([$t10, $t11, $t12], "ObjPriv", "EXECUTE", { get: async () => L0["objpriv"], set: async (v) => { L0["objpriv"] = v; }, local: true });
      } else {
        await $.wset([$t10, $t11, $t12], "ObjPriv", (await $.mv((await $.wcall([$t10, $t11, $t12], "FieldByName", ["OBJECT_TYPE"], C)), "AsString")), { get: async () => L0["objpriv"], set: async (v) => { L0["objpriv"] = v; }, local: true });
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t10, $t11, $t12], "ModPrivsData", C, false)), "AppendRecord", [[(await $.mv((await $.wcall([$t10, $t11, $t12], "FieldByName", ["OBJECT_NAME"], C)), "AsString")), (await $.wv([$t10, $t11, $t12], "ObjPriv", { get: async () => L0["objpriv"], set: async (v) => { L0["objpriv"] = v; }, local: true }, false))]])));
  }
  await $.stmt((await $.call(C, "EnableConstrain", [(await $.mv((await $.v(C, "AdministrationData")), "ModPrivsData"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmModEdit", "grObjectsDblClick", async function grObjectsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "InsertRec", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "btRefreshClick", async function btRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "AdministrationData"));
    await $.mcall((await $.wv([$t13], "ModPrivsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t13], "ModPrivsData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t13], "ObjectsData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "grModulesKeyDown", async function grModulesKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t14 = (await $.v(C, "AdministrationData"));
    if ($.truthy($.eq((await $.wv([$t14], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t14], "vk_delete", C, false))))) {
      if ($.truthy($.eq((await $.wcall([$t14], "MessageDlg", ["Ləğv olunsun?", (await $.wv([$t14], "mtConfirmation", C, false)), [(await $.wv([$t14], "mbYes", C, false)), (await $.wv([$t14], "mbNo", C, false))], 0], C)), (await $.wv([$t14], "mrYes", C, false))))) {
        await $.mcall((await $.wv([$t14], "ModPrivsData", C, false)), "Delete", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfmModEdit", "EnableConstrain", async function EnableConstrain(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dat": $.copyArg(p0), result: undefined, "isenable": false, "i": 0};
  await $.fixArgs(L0, ["dat"]);
  L0["reenable"] = $.fn(async function ReEnable(p0) {
  const L1 = {"isenabled": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["isenabled"]);
  {
    const $t15 = (await $.v(C, "gbObjPrivs"));
    { const $t16 = $.sub((await $.wv([$t15], "ControlCount", C, false)), 1);
      await $.wset([$t15], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t15], "Controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "TRadioButton")))) {
          await $.mset((await $.idx((await $.wv([$t15], "Controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t15], "IsEnabled", { get: async () => L1["isenabled"], set: async (v) => { L1["isenabled"] = v; }, local: true }, false)));
        }
        await $.tick();
      }
    }
  }
  return L1.result;
});
  L0["isenable"] = false;
  {
    const $t18 = (await $.v(C, "gbObjPrivs"));
    { const $t19 = $.sub((await $.wv([$t18], "ControlCount", C, false)), 1);
      await $.wset([$t18], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t20 = true;
      for (;;) {
        if (!$t20) { await $.wset([$t18], "i", $.succ((await $.wv([$t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t20 = false;
        if (!($.ord((await $.wv([$t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t19))) break;
        if ($.truthy((await $.and_(($.is_((await $.idx((await $.wv([$t18], "Controls", C, false)), [(await $.wv([$t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TRadioButton")), async () => ($.eq((await $.wcall([$t18], "UpperCase", [(await $.mv(((await $.idx((await $.wv([$t18], "Controls", C, false)), [(await $.wv([$t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Caption"))], C)), (await $.mv((await $.mcall((await $.wv([$t18], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), "FieldByName", ["Privilege"])), "AsString")))))))) {
          await $.wset([$t18], "IsEnable", (await $.wv([$t18], "true", C, false)), { get: async () => L0["isenable"], set: async (v) => { L0["isenable"] = v; }, local: true });
          await $.mset((await $.idx((await $.wv([$t18], "Controls", C, false)), [(await $.wv([$t18], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Checked", (await $.wv([$t18], "True", C, false)));
        }
        await $.tick();
      }
    }
  }
  await $.stmt((await $.callv(L0["reenable"], [L0["isenable"]])));
  return L0.result;
}, {"params": ["Dat"], "kind": "procedure", "ptypes": ["TOracleDataSet"]});
  U.method("TfmModEdit", "grObjectsKeyDown", async function grObjectsKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_Return"))))) {
    await $.stmt($.call(C, "InsertRec", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfmModEdit", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rolename": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Hüquq dəyişiklikləri qəbul edilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t21 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    const $t22 = (await $.wv([$t21], "AdministrationData", C, false));
    await $.wset([$t21, $t22], "RoleName", $.add("SBR_", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "ModulesData", C, false)), "FieldByName", ["description"])), "AsString"))), { get: async () => L0["rolename"], set: async (v) => { L0["rolename"] = v; }, local: true });
    await $.stmt((await $.wcall([$t21, $t22], "CallProcedure", ["revokeprivsfromtorole", [(await $.wv([$t21, $t22], "RoleName", { get: async () => L0["rolename"], set: async (v) => { L0["rolename"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "Sm_Own", C, false))]], C)));
    {
      const $t23 = (await $.wv([$t21, $t22], "ModPrivsData", C, false));
      try {
        await $.stmt($.wcall([$t21, $t22, $t23], "DisableControls", [], C));
        await $.stmt($.wcall([$t21, $t22, $t23], "First", [], C));
        while ($.truthy($.not(((await $.wv([$t21, $t22, $t23], "EOF", C, false)))))) {
          await $.stmt((await $.wcall([$t21, $t22, $t23], "CallProcedure", ["grantprivtorole", [(await $.wv([$t21, $t22, $t23], "RoleName", { get: async () => L0["rolename"], set: async (v) => { L0["rolename"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["PRIVILEGE"], C)), "AsString")), (await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["TABLE_NAME"], C)), "AsString")), (await $.wv([$t21, $t22, $t23], "Sm_own", C, false))]], C)));
          await $.stmt($.wcall([$t21, $t22, $t23], "Next", [], C));
          await $.tick();
        }
      } finally {
        await $.stmt($.wcall([$t21, $t22, $t23], "EnableControls", [], C));
      }
    }
  }
  await $.stmt((await $.call(C, "btRefreshClick", [Self])));
  await $.stmt((await $.call(C, "MessageDlg", ["Hüquqlar dəyişildi ", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmModEdit", Self);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmModEdit", null);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmModEdit", "rbSelClick", async function rbSelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.mv((await $.v(C, "AdministrationData")), "ModPrivsData"));
    await $.mset((await $.wcall([$t24], "FieldByName", ["PRIVILEGE"], C)), "AsString", (await $.wcall([$t24], "UPPERCASE", [(await $.mv(((await $.wv([$t24], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Caption"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from admGroupUsersImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admGroupUsersImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGridEh", "StdCtrls", "Buttons", "ActnList", "ImgList", "admDataModule", "admMainFormImpl", "CommonDecls", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmGroupUsers", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "groupusersgrid": {"name": "GroupUsersGrid", "type": "TStringGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "sbaddmaster": {"name": "sbAddMaster", "type": "TSpeedButton"}, "sbdelmaster": {"name": "sbDelMaster", "type": "TSpeedButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "sbaddslave": {"name": "sbAddSlave", "type": "TSpeedButton"}, "sbdelslave": {"name": "sbDelSlave", "type": "TSpeedButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "sbaddneutral": {"name": "sbAddNeutral", "type": "TSpeedButton"}, "sbdelneutral": {"name": "sbDelNeutral", "type": "TSpeedButton"}, "actsusergroups": {"name": "actsUserGroups", "type": "TActionList"}, "actadduser": {"name": "actAddUser", "type": "TAction"}, "actdeluser": {"name": "actDelUser", "type": "TAction"}, "imgacts": {"name": "imgActs", "type": "TImageList"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "actcommit": {"name": "actCommit", "type": "TAction"}, "actclose": {"name": "actClose", "type": "TAction"}}, {});
  U.init(async () => {
    U.const("rsUserAlreadyExists", "İstifadəçi artıq qrupdadır.");
    U.var_("frmGroupUsers", null, "TfrmGroupUsers");
    U.var_("panelDown", false, "Boolean");
  });
  U.func("ReinitializeRows", async function ReinitializeRows(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sg": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "delrow": false};
  await $.fixArgs(L0, ["sg"]);
  {
    const $t1 = L0["sg"];
    await $.wset([$t1], "DelRow", (await $.wv([$t1], "True", C, false)), { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true });
    { const $t2 = 0;
      await $.wset([$t1], "i", $.sub((await $.wv([$t1], "RowCount", C, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t2))) break;
        { const $t4 = $.sub((await $.wv([$t1], "ColCount", C, false)), 1);
          await $.wset([$t1], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
          let $t5 = true;
          for (;;) {
            if (!$t5) { await $.wset([$t1], "z", $.succ((await $.wv([$t1], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
            $t5 = false;
            if (!($.ord((await $.wv([$t1], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t4))) break;
            await $.wset([$t1], "DelRow", (await $.and_((await $.wv([$t1], "DelRow", { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true }, false)), async () => ($.eq((await $.idx((await $.wv([$t1], "Cells", C, false)), [(await $.wv([$t1], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), (await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t1], "EmptyStr", C, false)))))), { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true });
            await $.tick();
          }
        }
        if ($.truthy((await $.wv([$t1], "DelRow", { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true }, false)))) {
          await $.wset([$t1], "RowCount", $.sub((await $.wv([$t1], "RowCount", C, false)), 1), C);
          await $.wset([$t1], "DelRow", (await $.wv([$t1], "True", C, false)), { get: async () => L0["delrow"], set: async (v) => { L0["delrow"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["SG"], "kind": "procedure", "ptypes": ["TStringGrid"]});
  U.func("AddCells", async function AddCells(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"asg": $.copyArg(p0), "acol": $.copyArg(p1), "astr": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["asg", "acol", "astr"]);
  {
    const $t6 = L0["asg"];
    if ($.truthy($.ne((await $.idx((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "aCol", { get: async () => L0["acol"], set: async (v) => { L0["acol"] = v; }, local: true }, false)), $.sub((await $.wv([$t6], "RowCount", C, false)), 1)])), (await $.wv([$t6], "EmptyStr", C, false))))) {
      await $.wset([$t6], "RowCount", $.add((await $.wv([$t6], "RowCount", C, false)), 1), C);
      { const $t7 = await $.iset((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "aCol", { get: async () => L0["acol"], set: async (v) => { L0["acol"] = v; }, local: true }, false)), $.sub((await $.wv([$t6], "RowCount", C, false)), 1)], (await $.wv([$t6], "aStr", { get: async () => L0["astr"], set: async (v) => { L0["astr"] = v; }, local: true }, false))); if ($t7 !== undefined) { await $.wset([$t6], "Cells", $t7, C); } }
    } else {
      { const $t8 = 0;
        await $.wset([$t6], "i", $.sub((await $.wv([$t6], "RowCount", C, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t9 = true;
        for (;;) {
          if (!$t9) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t9 = false;
          if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t8))) break;
          if ($.truthy($.ne((await $.idx((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "aCol", { get: async () => L0["acol"], set: async (v) => { L0["acol"] = v; }, local: true }, false)), (await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t6], "EmptyStr", C, false))))) {
            break;
          }
          await $.tick();
        }
      }
      { const $t10 = await $.iset((await $.wv([$t6], "Cells", C, false)), [(await $.wv([$t6], "aCol", { get: async () => L0["acol"], set: async (v) => { L0["acol"] = v; }, local: true }, false)), $.add((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)], (await $.wv([$t6], "aStr", { get: async () => L0["astr"], set: async (v) => { L0["astr"] = v; }, local: true }, false))); if ($t10 !== undefined) { await $.wset([$t6], "Cells", $t10, C); } }
    }
  }
  return L0.result;
}, {"params": ["aSG", "aCol", "aStr"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer", "String"]});
  U.func("DelCells", async function DelCells(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"asg": $.copyArg(p0), "dcol": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["asg", "dcol"]);
  {
    const $t11 = L0["asg"];
    await $.wset([$t11], "RowCount", $.add((await $.wv([$t11], "RowCount", C, false)), 1), C);
    { const $t12 = $.sub((await $.wv([$t11], "RowCount", C, false)), 2);
      await $.wset([$t11], "i", (await $.wv([$t11], "Row", C, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t13 = true;
      for (;;) {
        if (!$t13) { await $.wset([$t11], "i", $.succ((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t13 = false;
        if (!($.ord((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t12))) break;
        { const $t14 = await $.iset((await $.wv([$t11], "Cells", C, false)), [(await $.wv([$t11], "dCol", { get: async () => L0["dcol"], set: async (v) => { L0["dcol"] = v; }, local: true }, false)), (await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.idx((await $.wv([$t11], "Cells", C, false)), [(await $.wv([$t11], "dCol", { get: async () => L0["dcol"], set: async (v) => { L0["dcol"] = v; }, local: true }, false)), $.add((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)]))); if ($t14 !== undefined) { await $.wset([$t11], "Cells", $t14, C); } }
        await $.tick();
      }
    }
  }
  await $.stmt((await $.call(C, "ReinitializeRows", [L0["asg"]])));
  return L0.result;
}, {"params": ["aSG", "dCol"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer"]});
  U.func("ExistsInGrid", async function ExistsInGrid(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"esg": $.copyArg(p0), "estr": $.copyArg(p1), result: null, "i": 0, "j": 0};
  await $.fixArgs(L0, ["esg", "estr"]);
  {
    const $t15 = L0["esg"];
    { const $t16 = $.sub((await $.wv([$t15], "ColCount", C, false)), 1);
      await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        { const $t18 = $.sub((await $.wv([$t15], "RowCount", C, false)), 1);
          await $.wset([$t15], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t19 = true;
          for (;;) {
            if (!$t19) { await $.wset([$t15], "j", $.succ((await $.wv([$t15], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t19 = false;
            if (!($.ord((await $.wv([$t15], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t18))) break;
            if ($.truthy($.eq((await $.wcall([$t15], "UpperCase", [(await $.idx((await $.wv([$t15], "Cells", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t15], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t15], "UpperCase", [(await $.wv([$t15], "eStr", { get: async () => L0["estr"], set: async (v) => { L0["estr"] = v; }, local: true }, false))], C))))) {
              await $.wset([$t15], "Result", (await $.wv([$t15], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              return L0.result;
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
    await $.wset([$t15], "Result", (await $.wv([$t15], "False", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["eSG", "eStr"], "kind": "function", "ptypes": ["TStringGrid", "String"]});
  U.method("TfrmGroupUsers", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.wobj(C, "admDM"));
    const $t21 = (await $.wv([$t20], "GroupUsersGrid", C, false));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupUsers", "AddUserClick", async function AddUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.wobj(C, "admDM"));
    if ($.truthy($.not((await $.wcall([$t22], "ExistsInGrid", [(await $.wv([$t22], "GroupUsersGrid", C, false)), (await $.mv((await $.wv([$t22], "CredUsersDataSetNAME", C, false)), "AsString"))], C))))) {
      await $.stmt((await $.wcall([$t22], "AddCells", [(await $.wv([$t22], "GroupUsersGrid", C, false)), (await $.mv(((await $.wv([$t22], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Tag")), (await $.mv((await $.wv([$t22], "CredUsersDataSetNAME", C, false)), "AsString"))], C)));
    } else {
      await $.stmt((await $.wcall([$t22], "LogWarning", [(await $.wv([$t22], "rsUserAlreadyExists", C, false))], C)));
    }
  }
  if ($.truthy(($.is_(L0["sender"], "TPanel")))) {
    await $.mset(L0["sender"], "BevelInner", (await $.v(C, "bvRaised")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupUsers", "DelUserClick", async function DelUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "GroupUsersGrid")), "Col")), (await $.mv((L0["sender"]), "Tag"))))) {
    await $.stmt((await $.call(C, "DelCells", [(await $.v(C, "GroupUsersGrid")), (await $.mv((L0["sender"]), "Tag"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupUsers", "actCommitExecute", async function actCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.wobj(C, "admDM"));
    const $t24 = (await $.wv([$t23], "CM_ADMIN", C, false));
    const $t25 = (await $.wv([$t23, $t24], "GroupUsersGrid", C, false));
    await $.stmt((await $.wcall([$t23, $t24, $t25], "CallProcedure", ["grmcleargroup", [(await $.mv((await $.wv([$t23, $t24, $t25], "GroupsDataSetID", C, false)), "AsVariant"))]], C)));
    { const $t26 = $.sub((await $.wv([$t23, $t24, $t25], "ColCount", C, false)), 1);
      await $.wset([$t23, $t24, $t25], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t27 = true;
      for (;;) {
        if (!$t27) { await $.wset([$t23, $t24, $t25], "i", $.succ((await $.wv([$t23, $t24, $t25], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t27 = false;
        if (!($.ord((await $.wv([$t23, $t24, $t25], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t26))) break;
        { const $t28 = $.sub((await $.wv([$t23, $t24, $t25], "RowCount", C, false)), 1);
          await $.wset([$t23, $t24, $t25], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t29 = true;
          for (;;) {
            if (!$t29) { await $.wset([$t23, $t24, $t25], "j", $.succ((await $.wv([$t23, $t24, $t25], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t29 = false;
            if (!($.ord((await $.wv([$t23, $t24, $t25], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t28))) break;
            if ($.truthy($.ne((await $.idx((await $.wv([$t23, $t24, $t25], "Cells", C, false)), [(await $.wv([$t23, $t24, $t25], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t23, $t24, $t25], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), (await $.wv([$t23, $t24, $t25], "EmptyStr", C, false))))) {
              await $.stmt((await $.wcall([$t23, $t24, $t25], "CallProcedure", ["grmuseraddingroupbyname", [(await $.idx((await $.wv([$t23, $t24, $t25], "Cells", C, false)), [(await $.wv([$t23, $t24, $t25], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t23, $t24, $t25], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), (await $.mv((await $.wv([$t23, $t24, $t25], "GroupsDataSetID", C, false)), "AsVariant")), $.add((await $.wv([$t23, $t24, $t25], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)]], C)));
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t23, $t24, $t25], "Session", C, false)), "Commit", []);
    await $.stmt((await $.wcall([$t23, $t24, $t25], "RefreshDataSet", [(await $.wv([$t23, $t24, $t25], "UserInGroupDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t23, $t24, $t25], "RefreshDataSet", [(await $.wv([$t23, $t24, $t25], "GroupUsersDataSet", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupUsers", "Panel3MouseDown", async function Panel3MouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy($.eq(L0["button"], (await $.v(C, "mbLeft"))))) {
    await $.mset(L0["sender"], "BevelInner", (await $.v(C, "bvLowered")));
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TfrmGroupUsers", "Panel3MouseUp", async function Panel3MouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy($.eq(L0["button"], (await $.v(C, "mbLeft"))))) {
    await $.mset(L0["sender"], "BevelInner", (await $.v(C, "bvRaised")));
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TfrmGroupUsers", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "actCloseExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmGroupUsers", "actCloseExecute", async function actCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

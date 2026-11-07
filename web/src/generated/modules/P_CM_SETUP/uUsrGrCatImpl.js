// Generated from uUsrGrCatImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uUsrGrCatImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "ImgList", "ToolWin", "Grids", "DBGridEh", "ExtCtrls", "DBCtrls", "DBGrids", "DBGridEhGrouping", "GridsEh", "CommonDecls", "uUsrGrAddEditImpl", "uUsrGroupDMImpl", "UCategories"]);
  const C = [U];
  U.defClass("TUsrGrMainForm", "TForm", {"mainpages": {"name": "MainPages", "type": "TPageControl"}, "usrgrsheet": {"name": "UsrGrSheet", "type": "TTabSheet"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolimg": {"name": "ToolImg", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "coolbar2": {"name": "CoolBar2", "type": "TCoolBar"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("UsrGrMainForm", null, "TUsrGrMainForm");
    U.var_("edit_insert", false, "Boolean");
  });
  U.method("TUsrGrMainForm", "PAdd", async function PAdd(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.asRef(p0), "t": $.asRef(p1), result: undefined};
  if ($.truthy($.eq((await L0["s"].get()), "add"))) {
    await L0["t"].set(true);
  } else {
    await L0["t"].set(false);
  }
  return L0.result;
}, {"params": ["s", "t"], "kind": "procedure", "ptypes": ["String", "boolean"]});
  U.method("TUsrGrMainForm", "FAdd", async function FAdd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "s": '', "t": false};
  L0["s"] = "Add";
  await $.stmt((await $.call(C, "PAdd", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; }), $.ref(async () => L0["t"], async ($t2) => { L0["t"] = $t2; })])));
  L0["result"] = L0["t"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TUsrGrMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TUsrGrMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TUsrGrMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "UsrGrDataMod", (await $.mcall((await $.v(C, "TUsrGrDataMod")), "Create", [Self])));
  await $.set(C, "UsrGrAddEditForm", (await $.mcall((await $.v(C, "TUsrGrAddEditForm")), "Create", [Self])));
  await $.set(C, "AddEditCatForm", (await $.mcall((await $.v(C, "TAddEditCatForm")), "Create", [Self])));
  await $.mset((await $.v(C, "MainPages")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "edit_insert", true);
  {
    const $t3 = (await $.wobj(C, "UsrGrDataMod"));
    const $t4 = (await $.wv([$t3], "UserGroupsDataSet", C, false));
    await $.stmt($.wcall([$t3, $t4], "Insert", [], C));
  }
  await $.mcall((await $.v(C, "UsrGrAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "edit_insert", false);
  {
    const $t5 = (await $.wobj(C, "UsrGrDataMod"));
    const $t6 = (await $.wv([$t5], "UserGroupsDataSet", C, false));
    await $.stmt($.wcall([$t5, $t6], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "UsrGrAddEditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinəcək Əminsinizmi ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t7 = (await $.mv((await $.v(C, "UsrGrDataMod")), "UserGroupsDataSet"));
      await $.stmt($.wcall([$t7], "Delete", [], C));
      await $.stmt($.wcall([$t7], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.wobj(C, "UsrGrDataMod"));
    const $t9 = (await $.wv([$t8], "CatDataSet", C, false));
    await $.stmt($.wcall([$t8, $t9], "Insert", [], C));
  }
  await $.mcall((await $.v(C, "AddEditCatForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "UsrGrDataMod")), "Free", []);
  await $.mcall((await $.v(C, "UsrGrAddEditForm")), "Free", []);
  await $.mcall((await $.v(C, "AddEditCatForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.wobj(C, "UsrGrDataMod"));
    const $t11 = (await $.wv([$t10], "CatDataSet", C, false));
    await $.stmt($.wcall([$t10, $t11], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "AddEditCatForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Ñèëèíìÿñèíÿ ÿìèíñèíèçìè?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t12 = (await $.mv((await $.v(C, "UsrGrDataMod")), "CatDataSet"));
      await $.stmt($.wcall([$t12], "Delete", [], C));
      await $.stmt($.wcall([$t12], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "DBGridEh1KeyPress", async function DBGridEh1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TUsrGrMainForm", "DBGridEh2KeyPress", async function DBGridEh2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t13 = (await $.wobj(C, "UsrGrDataMod"));
      const $t14 = (await $.wv([$t13], "CatDataSet", C, false));
      await $.stmt($.wcall([$t13, $t14], "Edit", [], C));
    }
    await $.mcall((await $.v(C, "AddEditCatForm")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TUsrGrMainForm", "DBGridEh2DblClick", async function DBGridEh2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.wobj(C, "UsrGrDataMod"));
    const $t16 = (await $.wv([$t15], "CatDataSet", C, false));
    await $.stmt($.wcall([$t15, $t16], "Edit", [], C));
  }
  await $.mcall((await $.v(C, "AddEditCatForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton12Click", async function ToolButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.wobj(C, "UsrGrDataMod"));
    const $t18 = (await $.wv([$t17], "OracleDataSet1", C, false));
    await $.stmt($.wcall([$t17, $t18], "Insert", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.wobj(C, "UsrGrDataMod"));
    const $t20 = (await $.wv([$t19], "OracleDataSet1", C, false));
    await $.stmt($.wcall([$t19, $t20], "edit", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinəcək Əminsinizmi ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t21 = (await $.mv((await $.v(C, "UsrGrDataMod")), "OracleDataSet1"));
      await $.stmt($.wcall([$t21], "Delete", [], C));
      await $.stmt($.wcall([$t21], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrMainForm", "ToolButton18Click", async function ToolButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.wobj(C, "UsrGrDataMod"));
    const $t23 = (await $.wv([$t22], "OracleDataSet1", C, false));
    await $.stmt($.wcall([$t22, $t23], "post", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

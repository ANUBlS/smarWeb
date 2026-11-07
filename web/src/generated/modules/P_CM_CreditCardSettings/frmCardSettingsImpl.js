// Generated from frmCardSettingsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCardSettingsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Grids", "DBGridEh", "ComCtrls", "ToolWin", "ImgList", "ActnList", "DBCtrls", "Buttons", "CommonDecls", "DMCardSettings", "frmCardAddEditImpl", "FrmCardPropertiesImpl"]);
  const C = [U];
  U.defClass("TfrmCardSettings", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actnprops": {"name": "ActnProps", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmCardSettings", null, "TfrmCardSettings");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmCardSettings")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmCardSettings", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmCardSettings", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCardSettings", "AddNewCards", async function AddNewCards(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "calcmethodid": 0};
  L0["rs_addcards"] = "Yeni";
  L0["calcmethodid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCardSeting")), "cardmethods")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t1 = (await $.wobj(C, "DMCardSeting"));
    const $t2 = (await $.wv([$t1], "cardsorts", C, false));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["CalcMethod"], C)), "AsInteger", (await $.wv([$t1, $t2], "CalcmethodID", { get: async () => L0["calcmethodid"], set: async (v) => { L0["calcmethodid"] = v; }, local: true }, false)));
    await $.stmt($.wcall([$t1, $t2], "Insert", [], C));
  }
  {
    const $t3 = (await $.wobj(C, "frmCardAddEdit"));
    await $.wset([$t3], "Caption", (await $.wv([$t3], "rs_AddCards", { get: async () => L0["rs_addcards"], set: async (v) => { L0["rs_addcards"] = v; }, local: true }, false)), C);
    await $.mset((await $.wv([$t3], "LCBCALCMethod", C, false)), "KeyValue", (await $.wv([$t3], "CalcmethodID", { get: async () => L0["calcmethodid"], set: async (v) => { L0["calcmethodid"] = v; }, local: true }, false)));
    await $.stmt($.wcall([$t3], "ShowModal", [], C));
  }
  await $.stmt($.call(C, "RefreshCards", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmCardSettings", "EditCards", async function EditCards(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rs_editcards"] = "Redaktə";
  {
    const $t4 = (await $.wobj(C, "DMCardSeting"));
    const $t5 = (await $.wv([$t4], "cardsorts", C, false));
    await $.stmt($.wcall([$t4, $t5], "Edit", [], C));
  }
  {
    const $t6 = (await $.wobj(C, "FrmCardProperties"));
    await $.wset([$t6], "Caption", (await $.wv([$t6], "rs_EditCards", { get: async () => L0["rs_editcards"], set: async (v) => { L0["rs_editcards"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  await $.stmt($.call(C, "RefreshCards", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmCardSettings", "DeleteCards", async function DeleteCards(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"p_cardid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["p_cardid"]);
  {
    const $t7 = (await $.wobj(C, "DMCardSeting"));
    const $t8 = (await $.wv([$t7], "cm_cards", C, false));
    await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["del_cards", [(await $.wv([$t7, $t8], "p_cardID", { get: async () => L0["p_cardid"], set: async (v) => { L0["p_cardid"] = v; }, local: true }, false))]], C)));
  }
  await $.stmt($.call(C, "RefreshCards", []));
  return L0.result;
}, {"params": ["p_cardID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmCardSettings", "RefreshCards", async function RefreshCards(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.wobj(C, "DMCardSeting"));
    const $t10 = (await $.wv([$t9], "cardsorts", C, false));
    await $.stmt($.wcall([$t9, $t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmCardSettings", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "AddNewCards", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardSettings", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "EditCards", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardSettings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmCardAddEdit", (await $.mcall((await $.v(C, "TfrmCardAddEdit")), "Create", [Self])));
  await $.set(C, "DMCardSeting", (await $.mcall((await $.v(C, "TDMCardSeting")), "Create", [Self])));
  await $.set(C, "FrmCardProperties", (await $.mcall((await $.v(C, "TFrmCardProperties")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardSettings", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmCardAddEdit")), "Free", []);
  await $.mcall((await $.v(C, "DMCardSeting")), "Free", []);
  await $.mcall((await $.v(C, "FrmCardProperties")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardSettings", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Ləğv edilməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t11 = (await $.wobj(C, "DMCardSeting"));
    const $t12 = (await $.wv([$t11], "cardsorts", C, false));
    await $.wset([$t11, $t12], "CrdID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
  }
  await $.stmt((await $.call(C, "DeleteCards", [L0["crdid"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardSettings", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCardSettings", "DBNavigator1Click", async function DBNavigator1Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  if ($.truthy($.eq(L0["button"], (await $.v(C, "nbDelete"))))) {
    await $.stmt($.call(C, "RefreshCards", []));
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmCardSettings", (await $.mcall((await $.v(C, "TfrmCardSettings")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

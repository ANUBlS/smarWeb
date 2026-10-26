// Generated from FormInfoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormInfoImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "ExtCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "StdCtrls", "ImgList", "Frmproperties_creditImpl", "DMprop", "FrmInfodeletImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormInfo", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("FormInfo", null, "TFormInfo");
  });
  U.method("TFormInfo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Frmproperties_credit", (await $.mcall((await $.v(C, "TFrmproperties_credit")), "Create", [Self])));
  await $.set(C, "Frmproperties_creditDel", (await $.mcall((await $.v(C, "TFrmproperties_creditDel")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DSet_Prop_Kredit")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetCredit")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInfo", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "Frmproperties_credit"));
    const $t2 = (await $.wv([$t1], "DMproperties", C, false));
    if ($.truthy($.gt((await $.mv((await $.wv([$t1, $t2], "DataSetCredit", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t1, $t2], "AddOtherPAPERNO", C, false)), "RefreshList", []);
      await $.stmt($.wcall([$t1, $t2], "showmodal", [], C));
      await $.mcall((await $.wv([$t1, $t2], "DataSetCredit", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInfo", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DSet_Prop_Kredit")), "closeall", []);
  await $.mcall((await $.v(C, "Frmproperties_credit")), "Free", []);
  await $.mcall((await $.v(C, "Frmproperties_creditDel")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInfo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["propid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["id"])), "asinteger"));
  {
    const $t3 = (await $.mv((await $.v(C, "DMproperties")), "DSet_Prop_Kredit"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["id", (await $.wv([$t3], "propid", { get: async () => L0["propid"], set: async (v) => { L0["propid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
    await $.stmt($.wcall([$t3], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInfo", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormInfo", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInfo", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "Frmproperties_creditDel"));
    const $t5 = (await $.wv([$t4], "DMproperties", C, false));
    if ($.truthy($.gt((await $.mv((await $.wv([$t4, $t5], "DSet_Prop_Kredit", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t4, $t5], "DSet_Prop_Kredit", C, false)), "refresh", []);
      await $.mcall((await $.wv([$t4, $t5], "DelOtherPAPERNO", C, false)), "RefreshList", []);
      await $.stmt($.wcall([$t4, $t5], "showmodal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInfo", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DSet_Prop_Kredit")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

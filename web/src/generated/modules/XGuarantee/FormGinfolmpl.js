// Generated from FormGinfolmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormGinfolmpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "Grids", "DBGrids", "Buttons", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "FormGua_Creditlmpl", "DataMGuarantee", "Unit16"]);
  const C = [U];
  U.defClass("TFormGinfo", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("FormGinfo", null, "TFormGinfo");
  });
  U.method("TFormGinfo", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "FormGua_credit"));
    const $t2 = (await $.wv([$t1], "DatamGuarante", C, false));
    if ($.truthy($.gt((await $.mv((await $.wv([$t1, $t2], "DataSGuacredit", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t1, $t2], "AddOtherPAPERNO", C, false)), "RefreshList", []);
      await $.stmt($.wcall([$t1, $t2], "showmodal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGinfo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormGua_credit", (await $.mcall((await $.v(C, "TFormGua_credit")), "Create", [Self])));
  await $.set(C, "FormGua_creditDel", (await $.mcall((await $.v(C, "TFormGua_creditDel")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataS_Gua_credit")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGinfo", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataS_Gua_credit")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGinfo", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormGinfo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["propid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "FieldByname", ["id"])), "asinteger"));
  {
    const $t3 = (await $.mv((await $.v(C, "DataMGuarante")), "DataS_Gua_credit"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["id", (await $.wv([$t3], "propid", { get: async () => L0["propid"], set: async (v) => { L0["propid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
    await $.stmt($.wcall([$t3], "refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from Unit_setting.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_setting", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Buttons", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "NLSLocalizer", "LVPCSSImpl", "Data_Unit"]);
  const C = [U];
  U.defClass("TForm_Setting", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "edit_balans_hesabi": {"name": "Edit_Balans_hesabi", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbg_balans_hesablari": {"name": "DBG_Balans_Hesablari", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "sb_ok": {"name": "SB_OK", "type": "TSpeedButton"}, "sb_del": {"name": "SB_DEL", "type": "TSpeedButton"}, "button_exit": {"name": "Button_Exit", "type": "TButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("Form_Setting", null, "TForm_Setting");
  });
  U.method("TForm_Setting", "Button_ExitClick", async function Button_ExitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Setting", "SB_OKClick", async function SB_OKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.v(C, "Edit_Balans_hesabi")), "Text"))])), 4))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Filter_Account_add", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit_Balans_hesabi")), "Text"))]))]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_XS_Filter")), "Refresh", []);
    await $.mcall((await $.v(C, "Edit_Balans_hesabi")), "Clear", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabını DÜZGÜN YAZIN!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Setting", "SB_DELClick", async function SB_DELClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.v(C, "Edit_Balans_hesabi")), "Text"))])), 4))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Filter_Account_Delete", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit_Balans_hesabi")), "Text"))]))]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_XS_Filter")), "Refresh", []);
    await $.mcall((await $.v(C, "Edit_Balans_hesabi")), "Clear", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabını DÜZGÜN YAZIN!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Setting", "Edit_Balans_hesabiKeyPress", async function Edit_Balans_hesabiKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9")])))), async () => ($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))))) {
    if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
      await $.stmt((await $.call(C, "SB_OKClick", [L0["sender"]])));
    }
    await L0["key"].set((await $.call(C, "chr", [0])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_Setting", "Edit_Balans_hesabiEnter", async function Edit_Balans_hesabiEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit_Balans_hesabi")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Setting", "DBG_Balans_HesablariCellClick", async function DBG_Balans_HesablariCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "Edit_Balans_hesabi")), "Text", (await $.mv((await $.mv(L0["column"], "Field")), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TForm_Setting", "DBG_Balans_HesablariKeyPress", async function DBG_Balans_HesablariKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Balans_hesabi")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DataMod")), "ODS_XS_Filter")), "Fields")), [0])), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_Setting", "Edit_Balans_hesabiKeyUp", async function Edit_Balans_hesabiKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "SB_DELClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}

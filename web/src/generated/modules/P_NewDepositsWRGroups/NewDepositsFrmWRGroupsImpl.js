// Generated from NewDepositsFrmWRGroupsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmWRGroupsImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "WordXP", "OleServer", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ExtCtrls", "ImgList", "ActnList", "Grids", "XDBGrids", "XFSCtrls", "NewDepositsDMWRGroupsImpl", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmWRGroups", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgridcontracttype": {"name": "XDBGridContractType", "type": "TXDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xdbgridallcontract": {"name": "XDBGridAllContract", "type": "TXDBGrid"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xdbgridselectedcontract": {"name": "XDBGridSelectedContract", "type": "TXDBGrid"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "templid": {"name": "TemplID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmWRGroups", null, "TNewDepositsFrmWRGroups");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NewDepositsFrmWRGroups")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmWRGroups", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWRGroups", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmWRGroups", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "NewDepositsDMWRGroups"));
    await $.mcall((await $.wv([$t1], "DMtypes", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "DmWrGroups", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "DmWrTemplates", C, false)), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TNewDepositsFrmWRGroups", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsDMWRGroups", (await $.mcall((await $.v(C, "TNewDepositsDMWRGroups")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWRGroups", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsDMWRGroups")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWRGroups", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmWRGroups", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "NewDepositsDMWRGroups"));
    await $.mcall((await $.wv([$t2], "DMtypes", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "DmWrGroups", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "DmWrTemplates", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWRGroups", "XDBGridAllContractDblClick", async function XDBGridAllContractDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "NewDepositsDMWRGroups"));
    await $.stmt((await $.mcall((await $.wv([$t3], "dm_rpdepository", C, false)), "CallProcedure", ["DmWrGroupAdd", [(await $.mv((await $.mcall((await $.wv([$t3], "DMtypes", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t3], "DmWrTemplates", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
    await $.mcall((await $.wv([$t3], "DmWrGroups", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWRGroups", "XDBGridAllContractKeyPress", async function XDBGridAllContractKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "XDBGridAllContractDblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmWRGroups", "XDBGridContractTypeKeyPress", async function XDBGridContractTypeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmWRGroups", "XDBGridSelectedContractDblClick", async function XDBGridSelectedContractDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "NewDepositsDMWRGroups"));
    await $.stmt((await $.mcall((await $.wv([$t4], "dm_rpdepository", C, false)), "CallProcedure", ["DmWrGroupDel", [(await $.mv((await $.mcall((await $.wv([$t4], "DMtypes", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t4], "DmWrTemplates", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
    await $.mcall((await $.wv([$t4], "DmWrGroups", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWRGroups", "XDBGridSelectedContractKeyDown", async function XDBGridSelectedContractKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "XDBGridSelectedContractDblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TNewDepositsFrmWRGroups", "XDBGridSelectedContractKeyPress", async function XDBGridSelectedContractKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmWRGroups", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmWRGroups", (await $.mcall((await $.v(C, "TNewDepositsFrmWRGroups")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

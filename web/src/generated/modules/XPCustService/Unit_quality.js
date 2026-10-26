// Generated from Unit_quality.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_quality", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "StdCtrls", "Mask", "DBCtrls", "ActnList", "Grids", "DBGrids", "ComCtrls", "db", "ToolWin", "sboapiDataModuleImpl", "UnitDataModPCustService"]);
  const C = [U];
  U.defClass("TQuality", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actionaddtemplare": {"name": "ActionAddTemplare", "type": "TAction"}, "actionedittemplate": {"name": "ActionEditTemplate", "type": "TAction"}, "actiondeletetemplate": {"name": "ActionDeleteTemplate", "type": "TAction"}, "actionrfreshtemplate": {"name": "ActionRfreshTemplate", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddbookmark": {"name": "ActnAddBookmark", "type": "TAction"}, "actndeletebookmark": {"name": "ActnDeleteBookmark", "type": "TAction"}, "actneditbookmark": {"name": "ActnEditBookmark", "type": "TAction"}, "actnnewbookmark": {"name": "ActnNewBookmark", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("Quality", null, "TQuality");
  });
  U.method("TQuality", "ToolButton15Click", async function ToolButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality"));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQuality", "ToolButton19Click", async function ToolButton19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinsin?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality"));
      await $.stmt($.wcall([$t3], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQuality", "ToolButton21Click", async function ToolButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQuality", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_quality")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQuality", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_quality"));
    await $.stmt($.wcall([$t4], "Insert", [], C));
  }
  if ($.truthy($.eq(L0["i"], (await $.v(C, "mrOK"))))) {
    {
      const $t5 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_quality"));
      await $.stmt($.wcall([$t5], "Refresh", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_quality")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQuality", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["tempdeletemsg"] = "Silinsin?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["tempdeletemsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t6 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_quality"));
      await $.stmt($.wcall([$t6], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

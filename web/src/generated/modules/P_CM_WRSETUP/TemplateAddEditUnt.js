// Generated from TemplateAddEditUnt.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TemplateAddEditUnt", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "DBCtrls", "Mask", "ActnList", "db", "DBGridEh", "DBCtrlsEh", "DBLookupEh", "OracleData", "WRSetupDataModImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TTemplAddEditForm", "TForm", {"dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "sbopendlg": {"name": "SBOpenDlg", "type": "TSpeedButton"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaccept": {"name": "ActnAccept", "type": "TAction"}, "actnreject": {"name": "ActnReject", "type": "TAction"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TWideStringField"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TWideStringField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("TemplAddEditForm", null, "TTemplAddEditForm");
  });
  U.method("TTemplAddEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "ActnRejectExecute", [null])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTemplAddEditForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "OracleDataSet2ID")), "AsInteger")), 62))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTemplAddEditForm", "ActnAcceptExecute", async function ActnAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBEdit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (-(1)))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (-(1)))))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
      await $.stmt($.wcall([$t1], "Post", [], C));
      await $.wset([$t1], "ModalResult", (await $.wv([$t1], "mrOk", C, false)), C);
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablonun adı daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Şablon faylı daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Məhsul daxil edilməyib"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Tipi daxil edilməyib"])));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
      await $.stmt($.wcall([$t2], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTemplAddEditForm", "SBOpenDlgClick", async function SBOpenDlgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "WRSetupDataMod"));
    const $t4 = (await $.wv([$t3], "OpenDlg", C, false));
    const $t5 = (await $.wv([$t3, $t4], "WRTemplatesDataSet", C, false));
    if ($.truthy((await $.wv([$t3, $t4, $t5], "Execute", C, false)))) {
      await $.mset((await $.wcall([$t3, $t4, $t5], "FieldByName", ["Path"], C)), "AsString", (await $.wv([$t3, $t4, $t5], "FileName", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTemplAddEditForm", "ActnRejectExecute", async function ActnRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "WRSetupDataMod")), "WRTemplatesDataSet"));
    await $.stmt($.wcall([$t6], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTemplAddEditForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TTemplAddEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from PostCommisionOnusImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PostCommisionOnusImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ComCtrls", "ToolWin", "ImgList", "CMExcelExport", "Grids", "DBGrids", "Menus", "Unit18", "setac", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPostCommisionOnus", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "sil1": {"name": "Sil1", "type": "TMenuItem"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "sil2": {"name": "Sil2", "type": "TMenuItem"}, "mainmenu1": {"name": "MainMenu1", "type": "TMainMenu"}, "hamsnse1": {"name": "Hamsnse1", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "hamsnsemk1": {"name": "Hamsnsemk1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("PostCommisionOnus", null, "TPostCommisionOnus");
  });
  U.method("TPostCommisionOnus", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPostCommisionOnus", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision")), "SetVariable", ["pdate", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision_commit")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision_commit")), "SetVariable", ["pdate", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision_commit")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "Hamsnse1Click", async function Hamsnse1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DBGrid1"));
    const $t2 = (await $.wv([$t1], "SelectedRows", C, false));
    const $t3 = (await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t1, $t2, $t3], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t1, $t2, $t3], "First", [], C));
      while ($.truthy($.not((await $.wv([$t1, $t2, $t3], "Eof", C, false))))) {
        await $.wset([$t1, $t2, $t3], "CurrentRowSelected", (await $.wv([$t1, $t2, $t3], "True", C, false)), C);
        await $.stmt($.wcall([$t1, $t2, $t3], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t1, $t2, $t3], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "Hamsnsemk1Click", async function Hamsnsemk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DBGrid2"));
    const $t5 = (await $.wv([$t4], "SelectedRows", C, false));
    const $t6 = (await $.mv((await $.wv([$t4, $t5], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t4, $t5, $t6], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t4, $t5, $t6], "First", [], C));
      while ($.truthy($.not((await $.wv([$t4, $t5, $t6], "Eof", C, false))))) {
        await $.wset([$t4, $t5, $t6], "CurrentRowSelected", (await $.wv([$t4, $t5, $t6], "True", C, false)), C);
        await $.stmt($.wcall([$t4, $t5, $t6], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t4, $t5, $t6], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "Sil1Click", async function Sil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "countafte": 0, "countbefo": 0, "waitnextconfirm": false, "willrefresh": false, "tid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid2")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid2")), "SetFocus", []);
  }
  L0["countbefo"] = (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "RecordCount"));
  {
    const $t7 = (await $.v(C, "DBGrid2"));
    const $t8 = (await $.wv([$t7], "SelectedRows", C, false));
    const $t9 = (await $.mv((await $.wv([$t7, $t8], "DataSource", C, false)), "DataSet"));
    const $t10 = (await $.wv([$t7, $t8, $t9], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t7, $t8, $t9, $t10], "Count", C, false)), 0))) {
        await $.wset([$t7, $t8, $t9, $t10], "CurrentRowSelected", (await $.wv([$t7, $t8, $t9, $t10], "True", C, false)), C);
      }
      { const $t11 = $.sub((await $.wv([$t7, $t8, $t9, $t10], "Count", C, false)), 1);
        await $.wset([$t7, $t8, $t9, $t10], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t12 = true;
        for (;;) {
          if (!$t12) { await $.wset([$t7, $t8, $t9, $t10], "Index", $.succ((await $.wv([$t7, $t8, $t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t12 = false;
          if (!($.ord((await $.wv([$t7, $t8, $t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t11))) break;
          await $.stmt((await $.wcall([$t7, $t8, $t9, $t10], "GotoBookmark", [(await $.wcall([$t7, $t8, $t9, $t10], "Pointer", [(await $.idx((await $.wv([$t7, $t8, $t9, $t10], "Items", C, false)), [(await $.wv([$t7, $t8, $t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t7, $t8, $t9, $t10], "TID", (await $.mv((await $.wcall([$t7, $t8, $t9, $t10], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["tid"], set: async (v) => { L0["tid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t7, $t8, $t9, $t10], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            if ($.truthy($.eq((await $.wcall([$t7, $t8, $t9, $t10], "MessageDlg", [(await $.wcall([$t7, $t8, $t9, $t10], "Format", ["%d  sayda  əməliyyat silinsinmi?", [$.sub((await $.wv([$t7, $t8, $t9, $t10], "Count", C, false)), (await $.wv([$t7, $t8, $t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t7, $t8, $t9, $t10], "mtConfirmation", C, false)), [(await $.wv([$t7, $t8, $t9, $t10], "mbYes", C, false)), (await $.wv([$t7, $t8, $t9, $t10], "mbCancel", C, false))], 0], C)), (await $.wv([$t7, $t8, $t9, $t10], "mrYes", C, false))))) {
              await $.wset([$t7, $t8, $t9, $t10], "WaitNextConfirm", (await $.wv([$t7, $t8, $t9, $t10], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
            } else {
              continue;
            }
          }
          await $.mcall((await $.wv([$t7, $t8, $t9, $t10], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t7, $t8, $t9, $t10], "DataMod_CARDS", C, false)), "card_commission_our_pos_onus")), "CallProcedure", ["del_card_messages_comm_commit", [(await $.wv([$t7, $t8, $t9, $t10], "TID", { get: async () => L0["tid"], set: async (v) => { L0["tid"] = v; }, local: true }, false))]])));
          await $.wset([$t7, $t8, $t9, $t10], "WillRefresh", (await $.wv([$t7, $t8, $t9, $t10], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t7, $t8, $t9, $t10], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t7, $t8, $t9, $t10], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t7, $t8, $t9, $t10], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.wset([$t7, $t8, $t9, $t10], "countafte", (await $.mv((await $.mv((await $.mv((await $.wv([$t7, $t8, $t9, $t10], "DBGrid2", C, false)), "DataSource")), "DataSet")), "RecordCount")), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        if ($.truthy($.lt((await $.wv([$t7, $t8, $t9, $t10], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false)), 0))) {
          await $.wset([$t7, $t8, $t9, $t10], "countafte", $.mul((await $.wv([$t7, $t8, $t9, $t10], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false)), ((-(1)))), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        }
        await $.wset([$t7, $t8, $t9, $t10], "countafte", $.sub((await $.wv([$t7, $t8, $t9, $t10], "countbefo", { get: async () => L0["countbefo"], set: async (v) => { L0["countbefo"] = v; }, local: true }, false)), (await $.wv([$t7, $t8, $t9, $t10], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false))), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        await $.stmt((await $.wcall([$t7, $t8, $t9, $t10], "ShowMessage", [$.add((await $.wcall([$t7, $t8, $t9, $t10], "inttostr", [(await $.wv([$t7, $t8, $t9, $t10], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false))], C)), " sayda seçilmiş əməliyyat silindi!")], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "Sil2Click", async function Sil2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "countafte": 0, "countbefo": 0, "waitnextconfirm": false, "willrefresh": false, "tid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  L0["countbefo"] = (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RecordCount"));
  {
    const $t13 = (await $.v(C, "DBGrid1"));
    const $t14 = (await $.wv([$t13], "SelectedRows", C, false));
    const $t15 = (await $.mv((await $.wv([$t13, $t14], "DataSource", C, false)), "DataSet"));
    const $t16 = (await $.wv([$t13, $t14, $t15], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t13, $t14, $t15, $t16], "Count", C, false)), 0))) {
        await $.wset([$t13, $t14, $t15, $t16], "CurrentRowSelected", (await $.wv([$t13, $t14, $t15, $t16], "True", C, false)), C);
      }
      { const $t17 = $.sub((await $.wv([$t13, $t14, $t15, $t16], "Count", C, false)), 1);
        await $.wset([$t13, $t14, $t15, $t16], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t18 = true;
        for (;;) {
          if (!$t18) { await $.wset([$t13, $t14, $t15, $t16], "Index", $.succ((await $.wv([$t13, $t14, $t15, $t16], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t18 = false;
          if (!($.ord((await $.wv([$t13, $t14, $t15, $t16], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t17))) break;
          await $.stmt((await $.wcall([$t13, $t14, $t15, $t16], "GotoBookmark", [(await $.wcall([$t13, $t14, $t15, $t16], "Pointer", [(await $.idx((await $.wv([$t13, $t14, $t15, $t16], "Items", C, false)), [(await $.wv([$t13, $t14, $t15, $t16], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t13, $t14, $t15, $t16], "TID", (await $.mv((await $.wcall([$t13, $t14, $t15, $t16], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["tid"], set: async (v) => { L0["tid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t13, $t14, $t15, $t16], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            if ($.truthy($.eq((await $.wcall([$t13, $t14, $t15, $t16], "MessageDlg", [(await $.wcall([$t13, $t14, $t15, $t16], "Format", ["%d  sayda  əməliyyat silinsinmi?", [$.sub((await $.wv([$t13, $t14, $t15, $t16], "Count", C, false)), (await $.wv([$t13, $t14, $t15, $t16], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t13, $t14, $t15, $t16], "mtConfirmation", C, false)), [(await $.wv([$t13, $t14, $t15, $t16], "mbYes", C, false)), (await $.wv([$t13, $t14, $t15, $t16], "mbCancel", C, false))], 0], C)), (await $.wv([$t13, $t14, $t15, $t16], "mrYes", C, false))))) {
              await $.wset([$t13, $t14, $t15, $t16], "WaitNextConfirm", (await $.wv([$t13, $t14, $t15, $t16], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
            } else {
              continue;
            }
          }
          await $.mcall((await $.wv([$t13, $t14, $t15, $t16], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t13, $t14, $t15, $t16], "DataMod_CARDS", C, false)), "card_commission_our_pos_onus")), "CallProcedure", ["del_card_messages_c_commision", [(await $.wv([$t13, $t14, $t15, $t16], "TID", { get: async () => L0["tid"], set: async (v) => { L0["tid"] = v; }, local: true }, false))]])));
          await $.wset([$t13, $t14, $t15, $t16], "WillRefresh", (await $.wv([$t13, $t14, $t15, $t16], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t13, $t14, $t15, $t16], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t13, $t14, $t15, $t16], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t13, $t14, $t15, $t16], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.wset([$t13, $t14, $t15, $t16], "countafte", (await $.mv((await $.mv((await $.mv((await $.wv([$t13, $t14, $t15, $t16], "DBGrid1", C, false)), "DataSource")), "DataSet")), "RecordCount")), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        await $.wset([$t13, $t14, $t15, $t16], "countafte", $.sub((await $.wv([$t13, $t14, $t15, $t16], "countbefo", { get: async () => L0["countbefo"], set: async (v) => { L0["countbefo"] = v; }, local: true }, false)), (await $.wv([$t13, $t14, $t15, $t16], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false))), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        if ($.truthy($.lt((await $.wv([$t13, $t14, $t15, $t16], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false)), 0))) {
          await $.wset([$t13, $t14, $t15, $t16], "countafte", $.mul((await $.wv([$t13, $t14, $t15, $t16], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false)), ((-(1)))), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        }
        await $.stmt((await $.wcall([$t13, $t14, $t15, $t16], "ShowMessage", [$.add((await $.wcall([$t13, $t14, $t15, $t16], "inttostr", [(await $.wv([$t13, $t14, $t15, $t16], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false))], C)), " sayda seçilmiş əməliyyat silindi!")], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "countafte": 0, "countbefo": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Hec bir melumat yoxdur."])));
    return L0.result;
  }
  L0["countbefo"] = (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "RecordCount"));
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t19 = (await $.v(C, "DBGrid1"));
    const $t20 = (await $.wv([$t19], "SelectedRows", C, false));
    const $t21 = (await $.mv((await $.wv([$t19, $t20], "DataSource", C, false)), "DataSet"));
    const $t22 = (await $.wv([$t19, $t20, $t21], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t19, $t20, $t21, $t22], "Count", C, false)), 0))) {
        await $.wset([$t19, $t20, $t21, $t22], "CurrentRowSelected", (await $.wv([$t19, $t20, $t21, $t22], "True", C, false)), C);
      }
      { const $t23 = $.sub((await $.wv([$t19, $t20, $t21, $t22], "Count", C, false)), 1);
        await $.wset([$t19, $t20, $t21, $t22], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t24 = true;
        for (;;) {
          if (!$t24) { await $.wset([$t19, $t20, $t21, $t22], "Index", $.succ((await $.wv([$t19, $t20, $t21, $t22], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t24 = false;
          if (!($.ord((await $.wv([$t19, $t20, $t21, $t22], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t23))) break;
          await $.stmt((await $.wcall([$t19, $t20, $t21, $t22], "GotoBookmark", [(await $.wcall([$t19, $t20, $t21, $t22], "Pointer", [(await $.idx((await $.wv([$t19, $t20, $t21, $t22], "Items", C, false)), [(await $.wv([$t19, $t20, $t21, $t22], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t19, $t20, $t21, $t22], "TransactionID", (await $.mv((await $.wcall([$t19, $t20, $t21, $t22], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t19, $t20, $t21, $t22], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            if ($.truthy($.eq((await $.wcall([$t19, $t20, $t21, $t22], "MessageDlg", [(await $.wcall([$t19, $t20, $t21, $t22], "Format", ["%d  sayda seçilmiş əməliyyat təsdiq edilsinmi?", [$.sub((await $.wv([$t19, $t20, $t21, $t22], "Count", C, false)), (await $.wv([$t19, $t20, $t21, $t22], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t19, $t20, $t21, $t22], "mtConfirmation", C, false)), [(await $.wv([$t19, $t20, $t21, $t22], "mbYes", C, false)), (await $.wv([$t19, $t20, $t21, $t22], "mbCancel", C, false))], 0], C)), (await $.wv([$t19, $t20, $t21, $t22], "mrYes", C, false))))) {
              await $.wset([$t19, $t20, $t21, $t22], "WaitNextConfirm", (await $.wv([$t19, $t20, $t21, $t22], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
            } else {
              continue;
            }
          }
          await $.mcall((await $.wv([$t19, $t20, $t21, $t22], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t19, $t20, $t21, $t22], "DataMod_CARDS", C, false)), "card_commission_our_pos_onus")), "CallProcedure", ["card_merchand_c_comission", [(await $.wv([$t19, $t20, $t21, $t22], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t19, $t20, $t21, $t22], "WillRefresh", (await $.wv([$t19, $t20, $t21, $t22], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t19, $t20, $t21, $t22], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t19, $t20, $t21, $t22], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t19, $t20, $t21, $t22], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.wset([$t19, $t20, $t21, $t22], "countafte", (await $.mv((await $.mv((await $.mv((await $.wv([$t19, $t20, $t21, $t22], "DBGrid2", C, false)), "DataSource")), "DataSet")), "RecordCount")), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        await $.wset([$t19, $t20, $t21, $t22], "countafte", $.sub((await $.wv([$t19, $t20, $t21, $t22], "countbefo", { get: async () => L0["countbefo"], set: async (v) => { L0["countbefo"] = v; }, local: true }, false)), (await $.wv([$t19, $t20, $t21, $t22], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false))), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        if ($.truthy($.lt((await $.wv([$t19, $t20, $t21, $t22], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false)), 0))) {
          await $.wset([$t19, $t20, $t21, $t22], "countafte", $.mul((await $.wv([$t19, $t20, $t21, $t22], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false)), ((-(1)))), { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true });
        }
        await $.stmt((await $.wcall([$t19, $t20, $t21, $t22], "ShowMessage", [$.add((await $.wcall([$t19, $t20, $t21, $t22], "inttostr", [(await $.wv([$t19, $t20, $t21, $t22], "countafte", { get: async () => L0["countafte"], set: async (v) => { L0["countafte"] = v; }, local: true }, false))], C)), " sayda əməliyyat təsdiqləndi!")], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision")), "SetVariable", ["pdate", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision_commit")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision_commit")), "SetVariable", ["pdate", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "DScard_m_commision_commit")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPostCommisionOnus", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "DataMod_CARDS"));
    const $t26 = (await $.wv([$t25], "card_commission_our_pos_onus", C, false));
    await $.stmt((await $.wcall([$t25, $t26], "CallProcedure", ["ins_card_messages_c_commision", []], C)));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

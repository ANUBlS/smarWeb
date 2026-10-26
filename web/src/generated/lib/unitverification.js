// Generated from unitverification.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("unitverification", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ComCtrls", "ToolWin", "ExtCtrls", "CMExcelExport", "ImgList", "StdCtrls", "FileCtrl", "ActnList", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tverification", "TForm", {"popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "simplefile": {"name": "simplefile", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button6": {"name": "Button6", "type": "TButton"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "button7": {"name": "Button7", "type": "TButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("verification", null, "Tverification");
  });
  U.method("Tverification", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t1 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t2 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t2, 1)) {
          await $.wset([$t1], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 2)) {
          await $.wset([$t1], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 3)) {
          await $.wset([$t1], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 4)) {
          await $.wset([$t1], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "ImageList1", C, false)), "Draw", [(await $.wv([$t1], "Canvas", C, false)), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tverification", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t3 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t4 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t4, 1)) {
          await $.wset([$t3], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t4, 2)) {
          await $.wset([$t3], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t4, 3)) {
          await $.wset([$t3], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t4, 4)) {
          await $.wset([$t3], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t3], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t3], "ImageList1", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t3], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t3], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t3], "DefaultDrawColumnCell", [(await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t3], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tverification", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t5 = (await $.v(C, "DBGrid1"));
    const $t6 = (await $.wv([$t5], "SelectedRows", C, false));
    const $t7 = (await $.mv((await $.wv([$t5, $t6], "DataSource", C, false)), "DataSet"));
    const $t8 = (await $.wv([$t5, $t6, $t7], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t5, $t6, $t7, $t8], "Count", C, false)), 0))) {
        await $.wset([$t5, $t6, $t7, $t8], "CurrentRowSelected", (await $.wv([$t5, $t6, $t7, $t8], "True", C, false)), C);
      }
      { const $t9 = $.sub((await $.wv([$t5, $t6, $t7, $t8], "Count", C, false)), 1);
        await $.wset([$t5, $t6, $t7, $t8], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t10 = true;
        for (;;) {
          if (!$t10) { await $.wset([$t5, $t6, $t7, $t8], "Index", $.succ((await $.wv([$t5, $t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t10 = false;
          if (!($.ord((await $.wv([$t5, $t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t9))) break;
          await $.stmt((await $.wcall([$t5, $t6, $t7, $t8], "GotoBookmark", [(await $.wcall([$t5, $t6, $t7, $t8], "Pointer", [(await $.idx((await $.wv([$t5, $t6, $t7, $t8], "Items", C, false)), [(await $.wv([$t5, $t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t5, $t6, $t7, $t8], "TransactionID", (await $.mv((await $.wcall([$t5, $t6, $t7, $t8], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t5, $t6, $t7, $t8], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t11 = (await $.wcall([$t5, $t6, $t7, $t8], "MessageDlg", [(await $.wcall([$t5, $t6, $t7, $t8], "Format", ["Əmaliyyat verifikasiya edilsin? №", [(await $.wv([$t5, $t6, $t7, $t8], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t5, $t6, $t7, $t8], "mtConfirmation", C, false)), [(await $.wv([$t5, $t6, $t7, $t8], "mbYes", C, false)), (await $.wv([$t5, $t6, $t7, $t8], "mbNo", C, false)), (await $.wv([$t5, $t6, $t7, $t8], "mbCancel", C, false)), (await $.wv([$t5, $t6, $t7, $t8], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t11, (await $.wv([$t5, $t6, $t7, $t8], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t11, (await $.wv([$t5, $t6, $t7, $t8], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t11, (await $.wv([$t5, $t6, $t7, $t8], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t5, $t6, $t7, $t8], "MessageDlg", [(await $.wcall([$t5, $t6, $t7, $t8], "Format", ["%d  sayda əməliyyat verifikasiya edildi?", [$.sub((await $.wv([$t5, $t6, $t7, $t8], "Count", C, false)), (await $.wv([$t5, $t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t5, $t6, $t7, $t8], "mtConfirmation", C, false)), [(await $.wv([$t5, $t6, $t7, $t8], "mbYes", C, false)), (await $.wv([$t5, $t6, $t7, $t8], "mbCancel", C, false))], 0], C)), (await $.wv([$t5, $t6, $t7, $t8], "mrYes", C, false))))) {
                  await $.wset([$t5, $t6, $t7, $t8], "WaitNextConfirm", (await $.wv([$t5, $t6, $t7, $t8], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t5, $t6, $t7, $t8], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t5, $t6, $t7, $t8], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["verifi", [(await $.wv([$t5, $t6, $t7, $t8], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t5, $t6, $t7, $t8], "WillRefresh", (await $.wv([$t5, $t6, $t7, $t8], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t5, $t6, $t7, $t8], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6, $t7, $t8], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t5, $t6, $t7, $t8], "ShowMessage", ["Əməliyyatlar verifikasiya edildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid2")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid2")), "SetFocus", []);
  }
  {
    const $t12 = (await $.v(C, "DBGrid2"));
    const $t13 = (await $.wv([$t12], "SelectedRows", C, false));
    const $t14 = (await $.mv((await $.wv([$t12, $t13], "DataSource", C, false)), "DataSet"));
    const $t15 = (await $.wv([$t12, $t13, $t14], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t12, $t13, $t14, $t15], "Count", C, false)), 0))) {
        await $.wset([$t12, $t13, $t14, $t15], "CurrentRowSelected", (await $.wv([$t12, $t13, $t14, $t15], "True", C, false)), C);
      }
      { const $t16 = $.sub((await $.wv([$t12, $t13, $t14, $t15], "Count", C, false)), 1);
        await $.wset([$t12, $t13, $t14, $t15], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t17 = true;
        for (;;) {
          if (!$t17) { await $.wset([$t12, $t13, $t14, $t15], "Index", $.succ((await $.wv([$t12, $t13, $t14, $t15], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t17 = false;
          if (!($.ord((await $.wv([$t12, $t13, $t14, $t15], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t16))) break;
          await $.stmt((await $.wcall([$t12, $t13, $t14, $t15], "GotoBookmark", [(await $.wcall([$t12, $t13, $t14, $t15], "Pointer", [(await $.idx((await $.wv([$t12, $t13, $t14, $t15], "Items", C, false)), [(await $.wv([$t12, $t13, $t14, $t15], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t12, $t13, $t14, $t15], "TransactionID", (await $.mv((await $.wcall([$t12, $t13, $t14, $t15], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t12, $t13, $t14, $t15], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t18 = (await $.wcall([$t12, $t13, $t14, $t15], "MessageDlg", [(await $.wcall([$t12, $t13, $t14, $t15], "Format", ["Əmaliyyat verifikasiya edilsin? №", [(await $.wv([$t12, $t13, $t14, $t15], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t12, $t13, $t14, $t15], "mtConfirmation", C, false)), [(await $.wv([$t12, $t13, $t14, $t15], "mbYes", C, false)), (await $.wv([$t12, $t13, $t14, $t15], "mbNo", C, false)), (await $.wv([$t12, $t13, $t14, $t15], "mbCancel", C, false)), (await $.wv([$t12, $t13, $t14, $t15], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t18, (await $.wv([$t12, $t13, $t14, $t15], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t18, (await $.wv([$t12, $t13, $t14, $t15], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t18, (await $.wv([$t12, $t13, $t14, $t15], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t12, $t13, $t14, $t15], "MessageDlg", [(await $.wcall([$t12, $t13, $t14, $t15], "Format", ["%d  sayda əməliyyat verifikasiya edildi?", [$.sub((await $.wv([$t12, $t13, $t14, $t15], "Count", C, false)), (await $.wv([$t12, $t13, $t14, $t15], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t12, $t13, $t14, $t15], "mtConfirmation", C, false)), [(await $.wv([$t12, $t13, $t14, $t15], "mbYes", C, false)), (await $.wv([$t12, $t13, $t14, $t15], "mbCancel", C, false))], 0], C)), (await $.wv([$t12, $t13, $t14, $t15], "mrYes", C, false))))) {
                  await $.wset([$t12, $t13, $t14, $t15], "WaitNextConfirm", (await $.wv([$t12, $t13, $t14, $t15], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t12, $t13, $t14, $t15], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t12, $t13, $t14, $t15], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["verifi", [(await $.wv([$t12, $t13, $t14, $t15], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t12, $t13, $t14, $t15], "WillRefresh", (await $.wv([$t12, $t13, $t14, $t15], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t12, $t13, $t14, $t15], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t12, $t13, $t14, $t15], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t12, $t13, $t14, $t15], "ShowMessage", ["Əməliyyatlar verifikasiya edildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "open", []);
  await $.mcall((await $.v(C, "Button6")), "Click", []);
  await $.mcall((await $.v(C, "Button7")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "MenuItem1Click", async function MenuItem1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "dbgrid2"));
    const $t20 = (await $.wv([$t19], "SelectedRows", C, false));
    const $t21 = (await $.mv((await $.wv([$t19, $t20], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t19, $t20, $t21], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t19, $t20, $t21], "First", [], C));
      while ($.truthy($.not((await $.wv([$t19, $t20, $t21], "Eof", C, false))))) {
        await $.wset([$t19, $t20, $t21], "CurrentRowSelected", (await $.wv([$t19, $t20, $t21], "True", C, false)), C);
        await $.stmt($.wcall([$t19, $t20, $t21], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t19, $t20, $t21], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "dbgrid1"));
    const $t23 = (await $.wv([$t22], "SelectedRows", C, false));
    const $t24 = (await $.mv((await $.wv([$t22, $t23], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t22, $t23, $t24], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t22, $t23, $t24], "First", [], C));
      while ($.truthy($.not((await $.wv([$t22, $t23, $t24], "Eof", C, false))))) {
        await $.wset([$t22, $t23, $t24], "CurrentRowSelected", (await $.wv([$t22, $t23, $t24], "True", C, false)), C);
        await $.stmt($.wcall([$t22, $t23, $t24], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t22, $t23, $t24], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "urgent2")), "Verification", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tverification", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "simple2")), "Verification", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

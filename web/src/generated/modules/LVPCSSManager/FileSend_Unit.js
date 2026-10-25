// Generated from FileSend_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FileSend_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Buttons", "sboapiDataModuleImpl", "Db", "OracleData", "FileCtrl", "shellapi", "ExtCtrls", "ComCtrls", "LVPCSSImpl"]);
  const C = [U];
  U.defClass("TSendFileForm", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "sentinfo": {"name": "SentInfo", "type": "TOracleDataSet"}, "mt150_datasource": {"name": "Mt150_DataSource", "type": "TDataSource"}, "forcheck": {"name": "ForCheck", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("SendFileForm", null, "TSendFileForm");
  });
  U.method("TSendFileForm", "RefDate", async function RefDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  await $.mcall((await $.v(C, "SentInfo")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "SentInfo")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.v(C, "SentInfo")), "SetVariable", ["EndDate", L0["dtend"]])));
  await $.mcall((await $.v(C, "SentInfo")), "Open", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSendFileForm", "But_cancelClick", async function But_cancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSendFileForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filename": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SentInfo")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "ForCheck")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "SentInfo")), "FieldByName", ["batchfile"])), "AsInteger")), 0))) {
    L0["filename"] = $.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "ForCheck")), "fieldbyname", ["out_dir"])), "AsString")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\"), (await $.mv((await $.mcall((await $.v(C, "SentInfo")), "fieldbyname", ["user_reference"])), "AsString"))), ".xml");
  } else {
    L0["filename"] = $.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "ForCheck")), "fieldbyname", ["out_dir"])), "AsString")), "\\"), (await $.call(C, "FormatDateTime", ["ddmmyy", (await $.v(C, "date"))]))), "\\Batches\\"), (await $.mv((await $.mcall((await $.v(C, "SentInfo")), "fieldbyname", ["user_reference"])), "AsString"))), ".xml");
  }
  if ($.truthy((await $.call(C, "FileExists", [L0["filename"]])))) {
    await $.stmt((await $.call(C, "ShellExecute", [(await $.mv((await $.v(C, "Application")), "Handle")), "open", (await $.call(C, "pchar", [L0["filename"]])), null, null, (await $.v(C, "SW_SHOW"))])));
  } else {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "format", ["File %s not found !", [$.add((await $.mv((await $.mcall((await $.v(C, "SentInfo")), "fieldbyname", ["user_reference"])), "AsString")), ".xml")]])), (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSendFileForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefDate", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSendFileForm", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSendFileForm", "FormConstrainedResize", async function FormConstrainedResize(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "minwidth": $.asRef(p1), "minheight": $.asRef(p2), "maxwidth": $.asRef(p3), "maxheight": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["minwidth"].set(334);
  await L0["minheight"].set(363);
  return L0.result;
}, {"params": ["Sender", "MinWidth", "MinHeight", "MaxWidth", "MaxHeight"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Integer", "Integer"]});
  U.method("TSendFileForm", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t1 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t2 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["batchfile"])), "AsInteger"));
        if ($.eq($t2, 0)) {
          await $.wset([$t1], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "LVPCSSForm", C, false)), "ImageList")), "Draw", [(await $.wv([$t1], "Canvas", C, false)), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  return U;
}

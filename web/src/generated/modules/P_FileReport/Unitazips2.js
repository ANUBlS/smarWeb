// Generated from Unitazips2.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitazips2", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ComCtrls", "ToolWin", "ImgList", "oracle", "db", "Unit15", "Unitdatamod", "Filereportform", "Unitazips", "printpas"]);
  const C = [U];
  U.defClass("TAzips2", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "toolbutton25": {"name": "ToolButton25", "type": "TToolButton"}, "toolbutton26": {"name": "ToolButton26", "type": "TToolButton"}, "toolbutton27": {"name": "ToolButton27", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "swimagelist1": {"name": "swImageList1", "type": "TImageList"}}, {});
  U.init(async () => {
    U.const("Notcreate", 1);
    U.const("Created", 2);
    U.const("Commited", 5);
    U.const("Problemed", 8);
    U.const("Problemed2", 7);
    U.const("new", 10);
    U.const("edits", 11);
    U.var_("Azips2", null, "TAzips2");
  });
  U.method("TAzips2", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t1 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t2 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t2, 44)) {
          await $.wset([$t1], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 55)) {
          await $.wset([$t1], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "commited", C, false)))) {
          await $.wset([$t1], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "Problemed", C, false)))) {
          await $.wset([$t1], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "Problemed2", C, false)))) {
          await $.wset([$t1], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 15)) {
          await $.wset([$t1], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 1)) {
          await $.wset([$t1], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, 20)) {
          await $.wset([$t1], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "swImageList1", C, false)), "Draw", [(await $.wv([$t1], "Canvas", C, false)), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TAzips2", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "azips")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "azips")), "SetVariable", ["V", (await $.v(C, "x"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "azips")), "Open", []);
  await $.mset((await $.v(C, "DBGrid1")), "DataSource", null);
  await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "Azipssource")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzips2", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModbpl", (await $.mcall((await $.v(C, "TDataModbpl")), "Create", [null])));
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "azips")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "azips")), "SetVariable", ["V", (await $.v(C, "x"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "azips")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzips2", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Azips", (await $.mcall((await $.v(C, "TAzips")), "Create", [null])));
  await $.mset((await $.mv((await $.v(C, "azips")), "Edit5")), "Text", "N");
  await $.mcall((await $.v(C, "azips")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzips2", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzips2", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 44))) {
    await $.set(C, "Azips", (await $.mcall((await $.v(C, "TAzips")), "Create", [null])));
    await $.mset((await $.mv((await $.v(C, "azips")), "Edit5")), "Text", "E");
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchEdit1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mf50_account"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "amount")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mf32a_amount"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mf59_account"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Azips")), "reciverbic")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mf59_account"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Azips")), "SearchCombo2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mf59_account"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "referens")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["mf20_reference"])), "AsString")));
    await $.mcall((await $.v(C, "Azips")), "showmodal", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş köçürmə redaktə oluna bilməz!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAzips2", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c": 0, "v_dataset": null, "v_mf20": '', "v_mf23": '', "v_mf32": '', "v_mf50": '', "v_mf52": '', "v_mf53": '', "v_mf54": '', "v_mf55": '', "v_mf56": '', "v_mf57": '', "v_mf59": '', "v_mf70": '', "v_mf71": '', "v_mf72": '', "v_mf77": '', "v_mf50_nameadress": '', "a": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dataset"] = (await $.mv((await $.mv((await $.v(C, "dbGrid1")), "DataSource")), "DataSet"));
  {
    const $t3 = L0["v_dataset"];
    await $.wset([$t3], "v_mf20", $.add($.add((await $.mv((await $.wcall([$t3], "fieldbyname", ["MF20"], C)), "asstring")), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF20_REFERENCE"], C)), "asstring"))), { get: async () => L0["v_mf20"], set: async (v) => { L0["v_mf20"] = v; }, local: true });
    await $.wset([$t3], "v_mf23", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M23B"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["mf23b"], C)), "asstring"))), { get: async () => L0["v_mf23"], set: async (v) => { L0["v_mf23"] = v; }, local: true });
    await $.wset([$t3], "v_mf32", $.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M32A"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF32A_DATE"], C)), "asstring"))), " "), (await $.mv((await $.mcall((await $.wv([$t3], "v_DataSet", { get: async () => L0["v_dataset"], set: async (v) => { L0["v_dataset"] = v; }, local: true }, false)), "fieldbyname", ["MF32A_CURR"])), "asstring"))), (await $.mv((await $.mcall((await $.wv([$t3], "v_DataSet", { get: async () => L0["v_dataset"], set: async (v) => { L0["v_dataset"] = v; }, local: true }, false)), "fieldbyname", ["MF32A_AMOUNT"])), "asstring"))), { get: async () => L0["v_mf32"], set: async (v) => { L0["v_mf32"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M50"], C)), "asstring")), ":50A:"))) {
      await $.wset([$t3], "v_mf50", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M50"], C)), "asstring"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_ACCOUNT"], C)), "asstring"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_BIC"], C)), "asstring"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "asstring"))), { get: async () => L0["v_mf50"], set: async (v) => { L0["v_mf50"] = v; }, local: true });
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M50"], C)), "asstring")), ":50K:")), async () => ($.ne((await $.mv((await $.wcall([$t3], "fieldbyname", ["FINCOPY"], C)), "asstring")), "AZN")))))) {
        await $.wset([$t3], "v_MF50_NAMEADRESS", (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "asstring")), { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true });
        await $.wset([$t3], "v_MF50_NAMEADRESS", $.add($.add($.add((await $.wcall([$t3], "copy", [(await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false)), 0, $.sub((await $.wcall([$t3], "pos", ["\r", (await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)), 1)], C)), "\r"), "TAXID "), (await $.wcall([$t3], "copy", [(await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false)), $.add((await $.wcall([$t3], "pos", ["\r", (await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)), 2), $.sub((await $.wcall([$t3], "length", [(await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)), (await $.wcall([$t3], "pos", ["\r", (await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))], C)))], C))), { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true });
        await $.wset([$t3], "v_mf50", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M50"], C)), "asstring"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_ACCOUNT"], C)), "asstring"))), "\r"), (await $.wv([$t3], "v_MF50_NAMEADRESS", { get: async () => L0["v_mf50_nameadress"], set: async (v) => { L0["v_mf50_nameadress"] = v; }, local: true }, false))), { get: async () => L0["v_mf50"], set: async (v) => { L0["v_mf50"] = v; }, local: true });
      } else {
        await $.wset([$t3], "v_mf50", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M50"], C)), "asstring"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_ACCOUNT"], C)), "asstring"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF50_NAME$ADRESS"], C)), "asstring"))), { get: async () => L0["v_mf50"], set: async (v) => { L0["v_mf50"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M52"], C)), "asstring")), ":52A:"))) {
      await $.wset([$t3], "v_mf52", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M52"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF52_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF52_NAME$ADRESS"], C)), "AsString"))), { get: async () => L0["v_mf52"], set: async (v) => { L0["v_mf52"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M52"], C)), "asstring")), ":52D:"))) {
        await $.wset([$t3], "v_mf52", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M52"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF52_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF52_NAME$ADRESS"], C)), "AsString"))), { get: async () => L0["v_mf52"], set: async (v) => { L0["v_mf52"] = v; }, local: true });
      } else {
        await $.wset([$t3], "v_mf52", "", { get: async () => L0["v_mf52"], set: async (v) => { L0["v_mf52"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["FINCOPY"], C)), "AsString")), "AZN"))) {
      await $.wset([$t3], "v_mf53", "", { get: async () => L0["v_mf53"], set: async (v) => { L0["v_mf53"] = v; }, local: true });
    } else {
      await $.wset([$t3], "v_mf53", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M53"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF53_ACCOUNT"], C)), "AsString"))), { get: async () => L0["v_mf53"], set: async (v) => { L0["v_mf53"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M54"], C)), "AsString")), ":54A:"))) {
      await $.wset([$t3], "v_mf54", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M54"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF54_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF54_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF54_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf54"], set: async (v) => { L0["v_mf54"] = v; }, local: true });
    } else {
      if ($.truthy(((await $.or_(($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M54"], C)), "AsString")), ":54B:")), async () => ($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M54"], C)), "AsString")), ":54D:"))))))) {
        await $.wset([$t3], "v_mf54", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M54"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF54_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF54_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf54"], set: async (v) => { L0["v_mf54"] = v; }, local: true });
      } else {
        await $.wset([$t3], "v_mf54", "", { get: async () => L0["v_mf54"], set: async (v) => { L0["v_mf54"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M55"], C)), "AsString")), ":55A:"))) {
      await $.wset([$t3], "v_mf55", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M55"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF55_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF55_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF55_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf55"], set: async (v) => { L0["v_mf55"] = v; }, local: true });
    } else {
      if ($.truthy(((await $.or_(($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M55"], C)), "AsString")), ":55B:")), async () => ($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M55"], C)), "AsString")), ":55D:"))))))) {
        await $.wset([$t3], "v_mf55", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M55"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF55_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF55_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf55"], set: async (v) => { L0["v_mf55"] = v; }, local: true });
      } else {
        await $.wset([$t3], "v_mf55", "", { get: async () => L0["v_mf55"], set: async (v) => { L0["v_mf55"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M56"], C)), "AsString")), ":56A:"))) {
      await $.wset([$t3], "v_mf56", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M56"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF56_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF56_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M56"], C)), "AsString")), ":56C:"))) {
        await $.wset([$t3], "v_mf56", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M56"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
      } else {
        if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M56"], C)), "AsString")), ":56D:"))) {
          await $.wset([$t3], "v_mf56", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M56"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF56_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF56_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
        } else {
          await $.wset([$t3], "v_mf56", "", { get: async () => L0["v_mf56"], set: async (v) => { L0["v_mf56"] = v; }, local: true });
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString")), ":57A:"))) {
      await $.wset([$t3], "v_mf57", $.add($.add($.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_BIC"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString")), ":57B:"))) {
        await $.wset([$t3], "v_mf57", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
      } else {
        if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString")), ":57C:"))) {
          await $.wset([$t3], "v_mf57", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_ACCOUNT"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
        } else {
          if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString")), ":57D:"))) {
            await $.wset([$t3], "v_mf57", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M57"], C)), "AsString"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_ACCOUNT"], C)), "AsString"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF57_NAME$LOCATION"], C)), "AsString"))), { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
          } else {
            await $.wset([$t3], "v_mf57", "", { get: async () => L0["v_mf57"], set: async (v) => { L0["v_mf57"] = v; }, local: true });
          }
        }
      }
    }
    await $.wset([$t3], "v_mf59", $.add($.add($.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M59"], C)), "asstring"))), " /"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF59_ACCOUNT"], C)), "asstring"))), "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF59_NAME$ADRESS"], C)), "asstring"))), { get: async () => L0["v_mf59"], set: async (v) => { L0["v_mf59"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M70"], C)), "asstring")), ":70:"))) {
      await $.wset([$t3], "v_mf70", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M70"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF70"], C)), "asstring"))), { get: async () => L0["v_mf70"], set: async (v) => { L0["v_mf70"] = v; }, local: true });
    } else {
      await $.wset([$t3], "v_mf70", "", { get: async () => L0["v_mf70"], set: async (v) => { L0["v_mf70"] = v; }, local: true });
    }
    await $.wset([$t3], "v_mf71", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M71A"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF71A"], C)), "asstring"))), { get: async () => L0["v_mf71"], set: async (v) => { L0["v_mf71"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M72"], C)), "asstring")), ":72:"))) {
      await $.wset([$t3], "v_mf72", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M72"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF72"], C)), "asstring"))), { get: async () => L0["v_mf72"], set: async (v) => { L0["v_mf72"] = v; }, local: true });
    } else {
      await $.wset([$t3], "v_mf72", "", { get: async () => L0["v_mf72"], set: async (v) => { L0["v_mf72"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3], "fieldbyname", ["M77B"], C)), "asstring")), ":77B:"))) {
      await $.wset([$t3], "v_mf77", $.add($.add($.add($.add("\r", "\r"), (await $.mv((await $.wcall([$t3], "fieldbyname", ["M77B"], C)), "asstring"))), " "), (await $.mv((await $.wcall([$t3], "fieldbyname", ["MF77B"], C)), "asstring"))), { get: async () => L0["v_mf77"], set: async (v) => { L0["v_mf77"] = v; }, local: true });
    } else {
      await $.wset([$t3], "v_mf77", "", { get: async () => L0["v_mf77"], set: async (v) => { L0["v_mf77"] = v; }, local: true });
    }
  }
  L0["a"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["v_mf20"], L0["v_mf23"]), L0["v_mf32"]), L0["v_mf50"]), L0["v_mf52"]), L0["v_mf53"]), L0["v_mf54"]), L0["v_mf55"]), L0["v_mf56"]), L0["v_mf57"]), L0["v_mf59"]), L0["v_mf70"]), L0["v_mf71"]), L0["v_mf72"]), L0["v_mf77"]);
  await $.set(C, "printform", (await $.mcall((await $.v(C, "tprintform")), "create", [Self])));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "printform")), "PRT")), "Lines")), "Add", [L0["a"]])));
  await $.mcall((await $.v(C, "printform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

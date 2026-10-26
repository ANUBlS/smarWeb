// Generated from Azipsn.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Azipsn", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "SearchEdit", "DBCtrls", "Unit2", "DB", "OracleData", "ExtCtrls", "Grids", "DBGrids", "IdBaseComponent", "IdCoder", "IdCoder3to4", "IdCoder00E", "IdCoderXXE", "IdCoderMIME", "IdCoderUUE"]);
  const C = [U];
  U.defClass("Tsettings", "TForm", {"radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "tsd": {"name": "tsd", "type": "TButton"}, "radiobutton3": {"name": "RadioButton3", "type": "TRadioButton"}, "radiobutton4": {"name": "RadioButton4", "type": "TRadioButton"}, "radiobutton5": {"name": "RadioButton5", "type": "TRadioButton"}, "radiobutton6": {"name": "RadioButton6", "type": "TRadioButton"}, "radiobutton7": {"name": "RadioButton7", "type": "TRadioButton"}, "radiobutton8": {"name": "RadioButton8", "type": "TRadioButton"}, "radiobutton10": {"name": "RadioButton10", "type": "TRadioButton"}, "radiobutton11": {"name": "RadioButton11", "type": "TRadioButton"}, "radiobutton12": {"name": "RadioButton12", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "radiobutton13": {"name": "RadioButton13", "type": "TRadioButton"}, "radiobutton15": {"name": "RadioButton15", "type": "TRadioButton"}, "radiobutton16": {"name": "RadioButton16", "type": "TRadioButton"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("settings", $.rec("tsettings"), "Tsettings");
    U.var_("isEmpty", false, "boolean");
    U.var_("CanClose", false, "boolean");
    U.var_("code", '', "String");
    U.var_("ritems", 0, "integer");
  });
  U.func("Sezar", async function Sezar(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "s": $.copyArg(p1), "decode": $.copyArg(p2), result: '', "i": 0, "st": ''};
  await $.fixArgs(L0, ["key", "s", "decode"]);
  L0["st"] = L0["s"];
  if ($.truthy(L0["decode"])) {
    L0["key"] = (-(L0["key"]));
  }
  { const $t1 = (await $.call(C, "Length", [L0["s"]]));
    L0["i"] = 1;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      { const $t3 = await $.iset(L0["st"], [L0["i"]], (await $.call(C, "Chr", [($.add((await $.call(C, "Ord", [(await $.idx(L0["s"], [L0["i"]]))])), L0["key"]))]))); if ($t3 !== undefined) { L0["st"] = $t3; } }
      await $.tick();
    }
  }
  L0["result"] = L0["st"];
  return L0.result;
}, {"params": ["Key", "S", "Decode"], "kind": "function", "ptypes": ["Integer", "String", "Boolean"]});
  U.method("Tsettings", "tsdClick", async function tsdClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t4 = (await $.v(C, "dbgrid1"));
    const $t5 = (await $.wv([$t4], "SelectedRows", C, false));
    const $t6 = (await $.mv((await $.wv([$t4, $t5], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t4, $t5, $t6], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t4, $t5, $t6], "Inc", [$.ref(async () => (await $.wv([$t4, $t5, $t6], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t7) => { await $.wset([$t4, $t5, $t6], "TrCount", $t7, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t4, $t5, $t6], "IDs", (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t4, $t5, $t6], "DisableControls", [], C));
      try {
        { const $t8 = $.sub((await $.wv([$t4, $t5, $t6], "Count", C, false)), 1);
          await $.wset([$t4, $t5, $t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t9 = true;
          for (;;) {
            if (!$t9) { await $.wset([$t4, $t5, $t6], "i", $.succ((await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t9 = false;
            if (!($.ord((await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
            await $.stmt((await $.wcall([$t4, $t5, $t6], "GotoBookmark", [(await $.wcall([$t4, $t5, $t6], "TBookmark", [(await $.idx((await $.wv([$t4, $t5, $t6], "Items", C, false)), [(await $.wv([$t4, $t5, $t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.and_(($.eq((await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["status"], C)), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["MT"], C)), "asstring")), "MT103")))), async () => ($.eq((await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["MT"], C)), "asstring")), "MT102")))), async () => ($.eq((await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["MT"], C)), "asstring")), "MT205")))), async () => ($.eq((await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["MT"], C)), "asstring")), "MT900")))), async () => ($.eq((await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["MT"], C)), "asstring")), "MT910")))))) {
              await $.stmt((await $.wcall([$t4, $t5, $t6], "Inc", [$.ref(async () => (await $.wv([$t4, $t5, $t6], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t4, $t5, $t6], "TrCount", $t10, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t4, $t5, $t6], "IDs", $.add($.add((await $.wv([$t4, $t5, $t6], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t4, $t5, $t6], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t4, $t5, $t6], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t4, $t5, $t6], "IDs", $t11, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t4, $t5, $t6], "EnableControls", [], C));
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "SetVariable", ["mt", (await $.idx((await $.mv((await $.v(C, "RadioGroup1")), "Items")), [(await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"))]))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "Text")), ""))) {
    await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "FieldByName", ["DESCRIPTION"])), "AsString")));
  }
  {
    const $t12 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t12], "close", [], C));
    await $.stmt((await $.wcall([$t12], "SetVariable", ["kod", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "SWDataModule", C, false)), "sw_radioname")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t12], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t12], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t12], "Execute", [], C));
    await $.mcall((await $.wv([$t12], "Session", C, false)), "Commit", []);
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyatlar günün sənədlərinə əlavə edilsin ?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t13 = (await $.mv((await $.v(C, "SWDataModule")), "SW_IN_FORAddIn"));
      await $.stmt($.wcall([$t13], "Close", [], C));
      await $.stmt((await $.wcall([$t13], "SetVariable", ["IDs", (await $.wv([$t13], "IDS", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t13], "Open", [], C));
      { const $t14 = $.sub((await $.wv([$t13], "recordcount", C, false)), 1);
        await $.wset([$t13], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t15 = true;
        for (;;) {
          if (!$t15) { await $.wset([$t13], "i", $.succ((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t15 = false;
          if (!($.ord((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t14))) break;
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t13], "SwDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["add_in_transactions2", [(await $.mv((await $.wcall([$t13], "fieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t13], "fieldbyName", ["bic"], C)), "AsString")), (await $.mv((await $.wcall([$t13], "fieldbyName", ["ACOUNT"], C)), "AsString")), (await $.mv((await $.wcall([$t13], "fieldbyName", ["valu"], C)), "AsFloat")), (await $.mv((await $.wv([$t13], "edit3", C, false)), "Text")), (await $.mv((await $.wcall([$t13], "fieldbyName", ["description2"], C)), "asstring")), (await $.mv((await $.wcall([$t13], "fieldbyName", ["TAX"], C)), "asstring"))]])));
          await $.stmt($.wcall([$t13], "next", [], C));
          await $.tick();
        }
      }
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "SetVariable", ["mt", (await $.idx((await $.mv((await $.v(C, "RadioGroup1")), "Items")), [(await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"))]))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "open", []);
  await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "FieldByName", ["description"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "key": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "value": 0, "index": 0, "rbname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["index"] = (await $.mv((await $.v(C, "radiogroup1")), "ItemIndex"));
  L0["value"] = (await $.call(C, "Integer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "radiogroup1")), "Items")), "Objects")), [L0["index"]]))]));
  await $.stmt((await $.call(C, "showmessage", [(await $.call(C, "inttostr", [L0["index"]]))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "SetVariable", ["mt", (await $.idx((await $.mv((await $.v(C, "RadioGroup1")), "Items")), [(await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"))]))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_radioname")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "clicker", async function clicker(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "btntest": null, "i": 0, "j": 0, "rb": []};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "SetVariable", ["val", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "FieldByName", ["valute"])), "AsString"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "SetVariable", ["type", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "FieldByName", ["mt"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "open", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["rb"], async ($t16) => { L0["rb"] = $t16; }), (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "RecordCount"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "First", []);
  { const $t17 = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "RecordCount"));
    L0["i"] = 1;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
      $t18 = false;
      if (!($.ord(L0["i"]) <= $.ord($t17))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "RadioGroup1")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "FieldByName", ["mtname"])), "AsString"))])));
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "swnames")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Intesdiq")), "FieldByName", ["MT"])), "AsString")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "MT205"))) {
    await $.mset((await $.v(C, "RadioButton3")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton4")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton5")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton6")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton7")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton8")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton10")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton11")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton12")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "MT900"))) {
    await $.mset((await $.v(C, "RadioButton1")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton2")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton10")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton11")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton12")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "MT910"))) {
    await $.mset((await $.v(C, "RadioButton1")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton2")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton3")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton4")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton5")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton6")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton7")), "Visible", false);
    await $.mset((await $.v(C, "RadioButton8")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton10Click", async function RadioButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "10");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t19 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t19], "close", [], C));
    await $.stmt((await $.wcall([$t19], "SetVariable", ["kod", (await $.wv([$t19], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t19], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t19], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t19], "Execute", [], C));
    await $.mcall((await $.wv([$t19], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton11Click", async function RadioButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "11");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t20 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t20], "close", [], C));
    await $.stmt((await $.wcall([$t20], "SetVariable", ["kod", (await $.wv([$t20], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t20], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t20], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t20], "Execute", [], C));
    await $.mcall((await $.wv([$t20], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton12Click", async function RadioButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "12");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t21 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t21], "close", [], C));
    await $.stmt((await $.wcall([$t21], "SetVariable", ["kod", (await $.wv([$t21], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t21], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t21], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t21], "Execute", [], C));
    await $.mcall((await $.wv([$t21], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton13Click", async function RadioButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "10");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t22 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t22], "close", [], C));
    await $.stmt((await $.wcall([$t22], "SetVariable", ["kod", (await $.wv([$t22], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t22], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t22], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t22], "Execute", [], C));
    await $.mcall((await $.wv([$t22], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton14Click", async function RadioButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "11");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t23 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t23], "close", [], C));
    await $.stmt((await $.wcall([$t23], "SetVariable", ["kod", (await $.wv([$t23], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t23], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t23], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t23], "Execute", [], C));
    await $.mcall((await $.wv([$t23], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton15Click", async function RadioButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "12");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t24 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t24], "close", [], C));
    await $.stmt((await $.wcall([$t24], "SetVariable", ["kod", (await $.wv([$t24], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t24], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t24], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t24], "Execute", [], C));
    await $.mcall((await $.wv([$t24], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton16Click", async function RadioButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "13");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t25 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t25], "close", [], C));
    await $.stmt((await $.wcall([$t25], "SetVariable", ["kod", (await $.wv([$t25], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t25], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t25], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t25], "Execute", [], C));
    await $.mcall((await $.wv([$t25], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton17Click", async function RadioButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "14");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t26 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t26], "close", [], C));
    await $.stmt((await $.wcall([$t26], "SetVariable", ["kod", (await $.wv([$t26], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t26], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t26], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t26], "Execute", [], C));
    await $.mcall((await $.wv([$t26], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton18Click", async function RadioButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "15");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t27 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t27], "close", [], C));
    await $.stmt((await $.wcall([$t27], "SetVariable", ["kod", (await $.wv([$t27], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t27], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t27], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t27], "Execute", [], C));
    await $.mcall((await $.wv([$t27], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "2");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t28 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t28], "close", [], C));
    await $.stmt((await $.wcall([$t28], "SetVariable", ["kod", (await $.wv([$t28], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t28], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t28], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t28], "Execute", [], C));
    await $.mcall((await $.wv([$t28], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "1");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t29 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t29], "close", [], C));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["kod", (await $.wv([$t29], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t29], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t29], "Execute", [], C));
    await $.mcall((await $.wv([$t29], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton3Click", async function RadioButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "3");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t30 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t30], "close", [], C));
    await $.stmt((await $.wcall([$t30], "SetVariable", ["kod", (await $.wv([$t30], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t30], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t30], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t30], "Execute", [], C));
    await $.mcall((await $.wv([$t30], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton4Click", async function RadioButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "4");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t31 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t31], "close", [], C));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["kod", (await $.wv([$t31], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t31], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t31], "Execute", [], C));
    await $.mcall((await $.wv([$t31], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton5Click", async function RadioButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "5");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t32 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t32], "close", [], C));
    await $.stmt((await $.wcall([$t32], "SetVariable", ["kod", (await $.wv([$t32], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t32], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t32], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t32], "Execute", [], C));
    await $.mcall((await $.wv([$t32], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton6Click", async function RadioButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "6");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t33 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t33], "close", [], C));
    await $.stmt((await $.wcall([$t33], "SetVariable", ["kod", (await $.wv([$t33], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t33], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t33], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t33], "Execute", [], C));
    await $.mcall((await $.wv([$t33], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton7Click", async function RadioButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "7");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t34 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t34], "close", [], C));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["kod", (await $.wv([$t34], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t34], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t34], "Execute", [], C));
    await $.mcall((await $.wv([$t34], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton8Click", async function RadioButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "8");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t35 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t35], "close", [], C));
    await $.stmt((await $.wcall([$t35], "SetVariable", ["kod", (await $.wv([$t35], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t35], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t35], "Execute", [], C));
    await $.mcall((await $.wv([$t35], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioButton9Click", async function RadioButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "code", "9");
  await $.mset((await $.v(C, "tsd")), "Visible", true);
  {
    const $t36 = (await $.mv((await $.v(C, "SWDataModule")), "updswin"));
    await $.stmt($.wcall([$t36], "close", [], C));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["kod", (await $.wv([$t36], "code", C, false))], C)));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t36], "DBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t36], "Execute", [], C));
    await $.mcall((await $.wv([$t36], "Session", C, false)), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsettings", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "button1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

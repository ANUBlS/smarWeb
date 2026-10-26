// Generated from InsFindFilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsFindFilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "PlgModalContainer", "Oracle", "OracleData", "CurrencyEdit", "Buttons", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "ExtCtrls"]);
  const C = [U];
  U.defClass("TfmFind", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "label25": {"name": "Label25", "type": "TLabel"}, "ckbfilter": {"name": "ckbFilter", "type": "TCheckBox"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "lbdbcbcustname": {"name": "lbDBCBCustName", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    try { U.const("tcalcexception", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    try { U.const("toutputyear", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.var_("fmFind", null, "TfmFind");
  });
  U.method("TfmFind", "edInsuredOutputYearKeyPress", async function edInsuredOutputYearKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmFind", "cbKLI_IDClick", async function cbKLI_IDClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edInsuredOutputYearKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t1) => { L0["key"] = $t1; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("GetFieldName", async function GetFieldName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ge((await $.call(C, "Length", [L0["value"]])), 3))) {
    L0["result"] = (await $.call(C, "Copy", [L0["value"], 3, $.sub((await $.call(C, "Length", [L0["value"]])), 2)]));
  }
  return L0.result;
}, {"params": ["value"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmFind", "GetConditions", async function GetConditions(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), "fields": $.asRef(p1), result: null, "i": 0, "l": 0, "varval": null};
  await $.fixArgs(L0, ["ownerobj"]);
  L0["addval"] = $.fn(async function addVal(p0, p1) {
  const L1 = {"val": $.copyArg(p0), "vartype": (p1 === undefined ? (await $.v(C, "varInteger")) : p1), result: undefined, "idx": 0};
  await $.fixArgs(L1, ["val", "vartype"]);
  if ($.truthy((await $.call(C, "VarIsEmpty", [L0["varval"]])))) {
    L0["varval"] = (await $.call(C, "VarArrayCreate", [[0, 0], (await $.v(C, "varVariant"))]));
    L1["idx"] = 0;
  } else {
    await $.stmt((await $.call(C, "VarArrayRedim", [L0["varval"], $.add((await $.call(C, "VarArrayHighBound", [L0["varval"], (await $.call(C, "VarArrayDimCount", [L0["varval"]]))])), 1)])));
    L1["idx"] = (await $.call(C, "VarArrayHighBound", [L0["varval"], (await $.call(C, "VarArrayDimCount", [L0["varval"]]))]));
  }
  { const $t2 = await $.iset(L0["varval"], [L1["idx"]], (await $.call(C, "VarAsType", [L1["val"], L1["vartype"]]))); if ($t2 !== undefined) { L0["varval"] = $t2; } }
  return L1.result;
});
  {
    const $t3 = L0["ownerobj"];
    { const $t4 = $.sub((await $.wv([$t3], "ControlCount", C, false)), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), ""))) {
            await $.wset([$t3], "Fields", $.add($.add((await $.wv([$t3], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t3], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t3], "addVal", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), (await $.wv([$t3], "varString", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), (-(1))))) {
            await $.wset([$t3], "Fields", $.add($.add((await $.wv([$t3], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t3], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t3], "addVal", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          if ($.truthy($.not((await $.wcall([$t3], "varIsNull", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "KeyValue"))], C))))) {
            await $.wset([$t3], "Fields", $.add($.add((await $.wv([$t3], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t3], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t3], "addVal", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "keyValue"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          if ($.truthy($.ne((await $.wcall([$t3], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "DateTime"))], C)), 0))) {
            await $.wset([$t3], "Fields", $.add($.add((await $.wv([$t3], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t3], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.wset([$t3], "l", (await $.wcall([$t3], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t3], "controls", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Date"))], C)), { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true });
            await $.stmt((await $.wcall([$t3], "addVal", [(await $.wv([$t3], "l", { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true }, false)), (await $.wv([$t3], "varDate", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        await $.tick();
      }
    }
  }
  await L0["fields"].set((await $.call(C, "lowercase", [(await $.call(C, "copy", [(await L0["fields"].get()), 2, $.sub((await $.call(C, "Length", [(await L0["fields"].get())])), 1)]))])));
  L0["result"] = L0["varval"];
  return L0.result;
}, {"params": ["OwnerObj", "Fields"], "kind": "function", "ptypes": ["TCustomControl", "String"]});
  U.func("VarArrConcat", async function VarArrConcat(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"v1": $.copyArg(p0), "v2": $.copyArg(p1), result: null, "v1highbound": 0, "v2highbound": 0, "i": 0, "res": null};
  await $.fixArgs(L0, ["v1", "v2"]);
  if ($.truthy((await $.call(C, "VarIsArray", [L0["v1"]])))) {
    L0["result"] = L0["v1"];
  } else {
    L0["result"] = L0["v2"];
    return L0.result;
  }
  if ($.truthy(($.not((await $.call(C, "VarIsArray", [L0["v2"]])))))) {
    return L0.result;
  }
  L0["res"] = L0["v1"];
  L0["v1highbound"] = (await $.call(C, "VarArrayHighBound", [L0["v1"], (await $.call(C, "VarArrayDimCount", [L0["v1"]]))]));
  L0["v2highbound"] = (await $.call(C, "VarArrayHighBound", [L0["v2"], (await $.call(C, "VarArrayDimCount", [L0["v2"]]))]));
  await $.stmt((await $.call(C, "VarArrayRedim", [L0["res"], $.add($.add(L0["v1highbound"], L0["v2highbound"]), 1)])));
  { const $t6 = L0["v2highbound"];
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      { const $t8 = await $.iset(L0["res"], [$.add($.add(L0["v1highbound"], L0["i"]), 1)], (await $.idx(L0["v2"], [L0["i"]]))); if ($t8 !== undefined) { L0["res"] = $t8; } }
      await $.tick();
    }
  }
  L0["result"] = L0["res"];
  return L0.result;
}, {"params": ["V1", "V2"], "kind": "function", "ptypes": ["Variant", "Variant"]});
  U.method("TfmFind", "GetAllObjConditions", async function GetAllObjConditions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fields": $.asRef(p0), result: null, "tmp": '', "val": null};
  return L0.result;
}, {"params": ["Fields"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmFind", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "val": null, "fields": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["val"] = (await $.call(C, "GetAllObjConditions", [$.ref(async () => L0["fields"], async ($t9) => { L0["fields"] = $t9; })]));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmFind", "ClearControlElements", async function ClearControlElements(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["ownerobj"]);
  {
    const $t10 = L0["ownerobj"];
    { const $t11 = $.sub((await $.wv([$t10], "ControlCount", C, false)), 1);
      await $.wset([$t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t10], "i", $.succ((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "KeyValue", (await $.wv([$t10], "null", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          await $.mset((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DateTime", (await $.wcall([$t10], "StrToDate", ["30/12/1899"], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["OwnerObj"], "kind": "procedure", "ptypes": ["TCustomControl"]});
  U.method("TfmFind", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmFind", "GetFilterSring", async function GetFilterSring(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fields": '', "str": '', "i": 0, "p": 0, "val": null, "value": ''};
  L0["val"] = (await $.call(C, "GetAllObjConditions", [$.ref(async () => L0["fields"], async ($t13) => { L0["fields"] = $t13; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    { const $t14 = (await $.call(C, "VarArrayHighBound", [L0["val"], (await $.call(C, "VarArrayDimCount", [L0["val"]]))]));
      L0["i"] = 0;
      let $t15 = true;
      for (;;) {
        if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
        $t15 = false;
        if (!($.ord(L0["i"]) <= $.ord($t14))) break;
        { const $t16 = (await $.call(C, "pos", [";", L0["fields"]]));
          if ($.eq($t16, 0)) {
            L0["p"] = $.add((await $.call(C, "Length", [L0["fields"]])), 1);
          }
          else {
            L0["p"] = (await $.call(C, "pos", [";", L0["fields"]]));
          }
        }
        if ($.truthy($.gt(L0["i"], 0))) {
          L0["str"] = $.add(L0["str"], " and ");
        }
        { const $t17 = (await $.call(C, "VarType", [(await $.idx(L0["val"], [L0["i"]]))]));
          if ($.eq($t17, (await $.v(C, "varInteger")))) {
            L0["value"] = (await $.call(C, "VarToStr", [(await $.idx(L0["val"], [L0["i"]]))]));
          }
          else if ($.eq($t17, (await $.v(C, "varOleStr")))) {
            L0["value"] = $.add($.add("'", (await $.idx(L0["val"], [L0["i"]]))), "'");
          }
          else if ($.eq($t17, (await $.v(C, "varDate")))) {
            L0["value"] = $.add($.add("'", (await $.call(C, "DateToStr", [(await $.call(C, "Trunc", [(await $.idx(L0["val"], [L0["i"]]))]))]))), "'");
          }
        }
        L0["str"] = $.add($.add($.add($.add($.add(L0["str"], " ( "), (await $.call(C, "copy", [L0["fields"], 1, $.sub(L0["p"], 1)]))), "="), L0["value"]), " ) ");
        L0["fields"] = (await $.call(C, "Copy", [L0["fields"], $.add(L0["p"], 1), $.sub((await $.call(C, "length", [L0["fields"]])), L0["p"])]));
        await $.tick();
      }
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmFind", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

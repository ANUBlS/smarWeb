// Generated from InsCustFind.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsCustFind", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "variants", "StdCtrls", "Buttons", "ExtCtrls", "DBCtrls", "ComCtrls", "Mask", "OracleData", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmCustFind", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "edname": {"name": "edName", "type": "TEdit"}, "edsurname": {"name": "edSurname", "type": "TEdit"}, "edfathername": {"name": "edFathername", "type": "TEdit"}, "edpasportno": {"name": "edPasportno", "type": "TEdit"}, "edcontactperson": {"name": "edContactPerson", "type": "TEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "ckbfilter": {"name": "ckbFilter", "type": "TCheckBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edinsured_typeid": {"name": "edInsured_TypeID", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("fmCustFind", null, "TfmCustFind");
  });
  U.func("GetFieldName", async function GetFieldName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ge((await $.call(C, "Length", [L0["value"]])), 3))) {
    L0["result"] = (await $.call(C, "Copy", [L0["value"], 3, $.sub((await $.call(C, "Length", [L0["value"]])), 2)]));
  }
  return L0.result;
}, {"params": ["value"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmCustFind", "GetConditions", async function GetConditions(Self, p0, p1) {
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
  { const $t1 = await $.iset(L0["varval"], [L1["idx"]], (await $.call(C, "VarAsType", [L1["val"], L1["vartype"]]))); if ($t1 !== undefined) { L0["varval"] = $t1; } }
  return L1.result;
});
  {
    const $t2 = L0["ownerobj"];
    { const $t3 = $.sub((await $.wv([$t2], "ControlCount", C, false)), 1);
      await $.wset([$t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), ""))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), (await $.wv([$t2], "varString", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), (-(1))))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          if ($.truthy($.not((await $.wcall([$t2], "varIsNull", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "KeyValue"))], C))))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "keyValue"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          if ($.truthy($.ne((await $.wcall([$t2], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "DateTime"))], C)), 0))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.wset([$t2], "l", (await $.wcall([$t2], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Date"))], C)), { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.wv([$t2], "l", { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true }, false)), (await $.wv([$t2], "varDate", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
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
  U.method("TfmCustFind", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fields": '', "i": 0, "val": null};
  await $.fixArgs(L0, ["sender"]);
  L0["val"] = (await $.call(C, "GetConditions", [(await $.v(C, "GroupBox1")), $.ref(async () => L0["fields"], async ($t5) => { L0["fields"] = $t5; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    {
      const $t6 = (await $.v(C, "InsDataMod"));
      if ($.truthy($.not((await $.mcall((await $.wv([$t6], "ODSInsCustomers", C, false)), "Locate", [(await $.wv([$t6], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t6], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), []]))))) {
        await $.stmt((await $.wcall([$t6], "MessageDlg", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!", (await $.wv([$t6], "mtWarning", C, false)), [(await $.wv([$t6], "mbOk", C, false))], 0], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmCustFind", "edAgeKeyPress", async function edAgeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmCustFind", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "GroupBox1"));
    { const $t8 = $.sub((await $.wv([$t7], "ControlCount", C, false)), 1);
      await $.wset([$t7], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t7], "i", $.succ((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "KeyValue", (await $.wv([$t7], "null", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          await $.mset((await $.idx((await $.wv([$t7], "controls", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DateTime", (await $.wcall([$t7], "StrToDate", ["30/12/1899"], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmCustFind", "GetFilterSring", async function GetFilterSring(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fields": '', "str": '', "i": 0, "p": 0, "val": null, "value": ''};
  L0["val"] = (await $.call(C, "GetConditions", [(await $.v(C, "GroupBox1")), $.ref(async () => L0["fields"], async ($t10) => { L0["fields"] = $t10; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    { const $t11 = (await $.call(C, "VarArrayHighBound", [L0["val"], (await $.call(C, "VarArrayDimCount", [L0["val"]]))]));
      L0["i"] = 0;
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
        $t12 = false;
        if (!($.ord(L0["i"]) <= $.ord($t11))) break;
        { const $t13 = (await $.call(C, "pos", [";", L0["fields"]]));
          if ($.eq($t13, 0)) {
            L0["p"] = $.add((await $.call(C, "Length", [L0["fields"]])), 1);
          }
          else {
            L0["p"] = (await $.call(C, "pos", [";", L0["fields"]]));
          }
        }
        if ($.truthy($.gt(L0["i"], 0))) {
          L0["str"] = $.add(L0["str"], " and ");
        }
        { const $t14 = (await $.call(C, "VarType", [(await $.idx(L0["val"], [L0["i"]]))]));
          if ($.eq($t14, (await $.v(C, "varInteger")))) {
            L0["value"] = (await $.call(C, "VarToStr", [(await $.idx(L0["val"], [L0["i"]]))]));
          }
          else if ($.eq($t14, (await $.v(C, "varOleStr")))) {
            L0["value"] = $.add($.add("'", (await $.idx(L0["val"], [L0["i"]]))), "'");
          }
          else if ($.eq($t14, (await $.v(C, "varDate")))) {
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
  U.method("TfmCustFind", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "InsDataMod"));
    const $t16 = (await $.wv([$t15], "ODSInsCustomers", C, false));
    await $.wset([$t15, $t16], "Filter", (await $.wv([$t15, $t16], "GetFilterSring", C, false)), C);
    await $.wset([$t15, $t16], "Filtered", (await $.and_(((await $.mv((await $.wv([$t15, $t16], "ckbFilter", C, false)), "Checked"))), async () => ($.ne((await $.wv([$t15, $t16], "Filter", C, false)), "")))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

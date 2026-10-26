// Generated from InsContFind.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsContFind", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "variants", "StdCtrls", "Buttons", "ExtCtrls", "DBCtrls", "ComCtrls", "OracleData", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmContFind", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label25": {"name": "Label25", "type": "TLabel"}, "btfind": {"name": "btFind", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "btnew": {"name": "btNew", "type": "TBitBtn"}, "btfilter": {"name": "btFilter", "type": "TBitBtn"}, "ckbfilter": {"name": "ckbFilter", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "gbmain": {"name": "gbMain", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbtype_id": {"name": "dbTYPE_ID", "type": "TDBLookupComboBox"}, "dtins_date": {"name": "dtIns_Date", "type": "TDateTimePicker"}, "edpolicy_num": {"name": "edPolicy_Num", "type": "TEdit"}, "edinssumm": {"name": "edInsSumm", "type": "TEdit"}, "edtariff": {"name": "edTariff", "type": "TEdit"}, "edammount": {"name": "edAmmount", "type": "TEdit"}, "edfranshiz": {"name": "edFranshiz", "type": "TEdit"}, "gbstate": {"name": "gbState", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "image4": {"name": "Image4", "type": "TImage"}, "image5": {"name": "Image5", "type": "TImage"}, "image6": {"name": "Image6", "type": "TImage"}, "image7": {"name": "Image7", "type": "TImage"}, "c0state": {"name": "c0State", "type": "TCheckBox"}, "c1state": {"name": "c1State", "type": "TCheckBox"}, "c2state": {"name": "c2State", "type": "TCheckBox"}, "c3state": {"name": "c3State", "type": "TCheckBox"}, "c4state": {"name": "c4State", "type": "TCheckBox"}, "c5state": {"name": "c5State", "type": "TCheckBox"}, "c6state": {"name": "c6State", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("fmContFind", null, "TfmContFind");
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
  U.method("TfmContFind", "GetConditions", async function GetConditions(Self, p0, p1) {
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
        if ($.truthy($.is_((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TCheckBox"))) {
          if ($.truthy((await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Checked")))) {
            await $.wset([$t2], "Fields", $.add($.add((await $.wv([$t2], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t2], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t2], "addVal", [(await $.mv(((await $.idx((await $.wv([$t2], "controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "tag"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
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
  { const $t5 = L0["v2highbound"];
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      { const $t7 = await $.iset(L0["res"], [$.add($.add(L0["v1highbound"], L0["i"]), 1)], (await $.idx(L0["v2"], [L0["i"]]))); if ($t7 !== undefined) { L0["res"] = $t7; } }
      await $.tick();
    }
  }
  L0["result"] = L0["res"];
  return L0.result;
}, {"params": ["V1", "V2"], "kind": "function", "ptypes": ["Variant", "Variant"]});
  U.method("TfmContFind", "GetAllObjConditions", async function GetAllObjConditions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fields": $.asRef(p0), result: null, "tmp": '', "val": null};
  L0["val"] = (await $.call(C, "GetConditions", [(await $.v(C, "gbState")), $.ref(async () => L0["tmp"], async ($t8) => { L0["tmp"] = $t8; })]));
  await L0["fields"].set(L0["tmp"]);
  L0["val"] = (await $.call(C, "VarArrConcat", [L0["val"], (await $.call(C, "GetConditions", [(await $.v(C, "gbMain")), $.ref(async () => L0["tmp"], async ($t9) => { L0["tmp"] = $t9; })]))]));
  if ($.truthy((await $.and_(($.ne(L0["tmp"], "")), async () => ($.ne((await L0["fields"].get()), "")))))) {
    L0["tmp"] = $.add(";", L0["tmp"]);
  }
  await L0["fields"].set($.add((await L0["fields"].get()), L0["tmp"]));
  L0["result"] = L0["val"];
  return L0.result;
}, {"params": ["Fields"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmContFind", "CheckCheckBoxes", async function CheckCheckBoxes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "i": 0, "count": 0};
  L0["count"] = 0;
  {
    const $t10 = (await $.v(C, "gbState"));
    { const $t11 = $.sub((await $.wv([$t10], "ControlCount", C, false)), 1);
      await $.wset([$t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t10], "i", $.succ((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TCheckBox"))) {
          if ($.truthy((await $.mv(((await $.idx((await $.wv([$t10], "controls", C, false)), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Checked")))) {
            await $.wset([$t10], "count", $.add((await $.wv([$t10], "count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), 1), { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true });
          }
        }
        await $.tick();
      }
    }
  }
  L0["result"] = $.gt(L0["count"], 1);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmContFind", "btFindClick", async function btFindClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fields": '', "val": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "CheckCheckBoxes")))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Axtarish ucun ancaq bir veziyet secile biler.", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  }
  L0["val"] = (await $.call(C, "GetAllObjConditions", [$.ref(async () => L0["fields"], async ($t13) => { L0["fields"] = $t13; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    {
      const $t14 = (await $.v(C, "InsDataMod"));
      if ($.truthy($.not((await $.mcall((await $.wv([$t14], "ODSContracts", C, false)), "Locate", [(await $.wv([$t14], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t14], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), []]))))) {
        await $.stmt((await $.wcall([$t14], "MessageDlg", ["Verilmiş parametrlərə uyğun müştəri tapılmadı !", (await $.wv([$t14], "mtWarning", C, false)), [(await $.wv([$t14], "mbOk", C, false))], 0], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmContFind", "ClearControlElements", async function ClearControlElements(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["ownerobj"]);
  {
    const $t15 = L0["ownerobj"];
    { const $t16 = $.sub((await $.wv([$t15], "ControlCount", C, false)), 1);
      await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          await $.mset((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TCheckBox"))) {
          await $.mset((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Checked", (await $.wv([$t15], "False", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "KeyValue", (await $.wv([$t15], "null", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          await $.mset((await $.idx((await $.wv([$t15], "controls", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DateTime", (await $.wcall([$t15], "StrToDate", ["30/12/1899"], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["OwnerObj"], "kind": "procedure", "ptypes": ["TCustomControl"]});
  U.method("TfmContFind", "btNewClick", async function btNewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ClearControlElements", [(await $.v(C, "gbState"))])));
  await $.stmt((await $.call(C, "ClearControlElements", [(await $.v(C, "gbMain"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmContFind", "GetFilterSring", async function GetFilterSring(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), result: '', "fields": '', "str": '', "i": 0, "p": 0, "val": null, "fieldname": '', "value": ''};
  await $.fixArgs(L0, ["ownerobj"]);
  L0["val"] = (await $.call(C, "GetConditions", [L0["ownerobj"], $.ref(async () => L0["fields"], async ($t18) => { L0["fields"] = $t18; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    { const $t19 = (await $.call(C, "VarArrayHighBound", [L0["val"], (await $.call(C, "VarArrayDimCount", [L0["val"]]))]));
      L0["i"] = 0;
      let $t20 = true;
      for (;;) {
        if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
        $t20 = false;
        if (!($.ord(L0["i"]) <= $.ord($t19))) break;
        { const $t21 = (await $.call(C, "pos", [";", L0["fields"]]));
          if ($.eq($t21, 0)) {
            L0["p"] = $.add((await $.call(C, "Length", [L0["fields"]])), 1);
          }
          else {
            L0["p"] = (await $.call(C, "pos", [";", L0["fields"]]));
          }
        }
        { const $t22 = (await $.call(C, "VarType", [(await $.idx(L0["val"], [L0["i"]]))]));
          if ($.eq($t22, (await $.v(C, "varInteger")))) {
            L0["value"] = (await $.call(C, "VarToStr", [(await $.idx(L0["val"], [L0["i"]]))]));
          }
          else if ($.eq($t22, (await $.v(C, "varOleStr")))) {
            L0["value"] = $.add($.add("'", (await $.idx(L0["val"], [L0["i"]]))), "'");
          }
          else if ($.eq($t22, (await $.v(C, "varDate")))) {
            L0["value"] = $.add($.add("'", (await $.call(C, "DateToStr", [(await $.call(C, "Trunc", [(await $.idx(L0["val"], [L0["i"]]))]))]))), "'");
          }
        }
        L0["fieldname"] = (await $.call(C, "copy", [L0["fields"], 1, $.sub(L0["p"], 1)]));
        if ($.truthy($.gt(L0["i"], 0))) {
          if ($.truthy($.gt((await $.call(C, "pos", [(await $.call(C, "trim", [L0["fieldname"]])), L0["str"]])), 0))) {
            L0["str"] = $.add(L0["str"], " or ");
          } else {
            if ($.truthy($.gt((await $.call(C, "pos", ["or", L0["str"]])), 0))) {
              L0["str"] = $.add($.add(" ( ", L0["str"]), " ) and ");
            } else {
              L0["str"] = $.add(L0["str"], " and ");
            }
          }
        }
        L0["str"] = $.add($.add($.add($.add($.add(L0["str"], " ( "), L0["fieldname"]), "="), L0["value"]), " ) ");
        L0["fields"] = (await $.call(C, "Copy", [L0["fields"], $.add(L0["p"], 1), $.sub((await $.call(C, "length", [L0["fields"]])), L0["p"])]));
        await $.tick();
      }
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["OwnerObj"], "kind": "function", "ptypes": ["TCustomControl"]});
  U.method("TfmContFind", "btFilterClick", async function btFilterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str1": '', "str2": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.v(C, "InsDataMod"));
    const $t24 = (await $.wv([$t23], "ODSContracts", C, false));
    await $.wset([$t23, $t24], "Str1", (await $.wcall([$t23, $t24], "GetFilterSring", [(await $.wv([$t23, $t24], "gbState", C, false))], C)), { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true });
    await $.wset([$t23, $t24], "Str2", (await $.wcall([$t23, $t24], "GetFilterSring", [(await $.wv([$t23, $t24], "gbMain", C, false))], C)), { get: async () => L0["str2"], set: async (v) => { L0["str2"] = v; }, local: true });
    if ($.truthy((await $.and_(($.ne((await $.wcall([$t23, $t24], "trim", [(await $.wv([$t23, $t24], "Str1", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true }, false))], C)), "")), async () => ($.ne((await $.wcall([$t23, $t24], "trim", [(await $.wv([$t23, $t24], "Str2", { get: async () => L0["str2"], set: async (v) => { L0["str2"] = v; }, local: true }, false))], C)), "")))))) {
      await $.wset([$t23, $t24], "Str1", $.add($.add("(", (await $.wv([$t23, $t24], "Str1", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true }, false))), ") and "), { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true });
    }
    await $.wset([$t23, $t24], "Str1", $.add((await $.wv([$t23, $t24], "Str1", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true }, false)), (await $.wv([$t23, $t24], "Str2", { get: async () => L0["str2"], set: async (v) => { L0["str2"] = v; }, local: true }, false))), { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true });
    await $.wset([$t23, $t24], "Filter", (await $.wv([$t23, $t24], "Str1", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true }, false)), C);
    await $.wset([$t23, $t24], "Filtered", (await $.and_(((await $.mv((await $.wv([$t23, $t24], "ckbFilter", C, false)), "Checked"))), async () => ($.ne((await $.wv([$t23, $t24], "Filter", C, false)), "")))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

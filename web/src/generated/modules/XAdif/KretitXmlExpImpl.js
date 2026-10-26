// Generated from KretitXmlExpImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("KretitXmlExpImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Gauges", "DB", "IniFiles", "sboapiDataModuleImpl", "UnitAdifData"]);
  const C = [U];
  $.defRecord("tbankinfo", {"bankname": () => '', "bankid": () => ''});
  U.defClass("TKredit", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "sbsave": {"name": "SBSave", "type": "TSpeedButton"}, "editdest": {"name": "EditDest", "type": "TEdit"}, "savedlg": {"name": "SaveDlg", "type": "TSaveDialog"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.const("SIniLocation", "BankInfo.ini");
    U.const("SSection", "BankInfo");
    U.const("SBankID", "BankID");
    U.const("SBankName", "BankName");
    U.var_("Kredit", null, "TKredit");
    U.var_("f", null, "TextFile");
    U.var_("UnusableGrops", [], "set");
  });
  U.method("TKredit", "Get_BankInfo", async function Get_BankInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: $.rec("tbankinfo"), "ini": null, "bankid": '', "bankname": '', "path": ''};
  L0["path"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), (await $.v(C, "SIniLocation")));
  L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [L0["path"]]));
  {
    const $t1 = L0["ini"];
    try {
      await $.wset([$t1], "BankID", (await $.wcall([$t1], "ReadString", [(await $.wv([$t1], "SSection", C, false)), (await $.wv([$t1], "SBankID", C, false)), ""], C)), { get: async () => L0["bankid"], set: async (v) => { L0["bankid"] = v; }, local: true });
      await $.wset([$t1], "BankName", (await $.wcall([$t1], "ReadString", [(await $.wv([$t1], "SSection", C, false)), (await $.wv([$t1], "SBankName", C, false)), ""], C)), { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true });
      await $.mset((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "BankName", (await $.wcall([$t1], "Utf8Decode", [(await $.wv([$t1], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "BankID", (await $.wcall([$t1], "Utf8Decode", [(await $.wv([$t1], "BankID", { get: async () => L0["bankid"], set: async (v) => { L0["bankid"] = v; }, local: true }, false))], C)));
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TKredit", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sr": 0, "r": 0, "s": 0, "i": 0, "a": 0, "bankid": '', "bankname": '', "strdate": '', "fvalue": '', "fname": '', "abankinfo": $.rec("tbankinfo")};
  await $.fixArgs(L0, ["sender"]);
  L0["writestring"] = $.fn(async function WriteString(p0) {
  const L1 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t2) => { await $.set(C, "f", $t2); }), (await $.mv((await $.v(C, "EditDest")), "Text"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t3) => { await $.set(C, "f", $t3); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [L1["s"]]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t4) => { await $.set(C, "f", $t4); })])));
  return L1.result;
});
  L0["writedata"] = $.fn(async function WriteData(p0, p1) {
  const L1 = {"field": $.copyArg(p0), "value": $.copyArg(p1), result: undefined, "s": '', "fieldvalue": '', "tagfirst": '', "taglast": '', "tagprefix": '', "tagsuffix": '', "cancontainutf8": 0, "parentgroup": 0, "fieldgroup": 0, "aansistr": ''};
  await $.fixArgs(L1, ["field", "value"]);
  L1["getspecimensettings"] = $.fn(async function GetSpecimenSettings(p0, p1, p2, p3, p4, p5, p6, p7) {
  const L2 = {"fieldname": $.copyArg(p0), "tagfirst": $.asRef(p1), "taglast": $.asRef(p2), "tagprefix": $.asRef(p3), "tagsuffix": $.asRef(p4), "fieldgroup": $.asRef(p5), "cancontainutf8": $.asRef(p6), "parentgroup": $.asRef(p7), result: undefined};
  await $.fixArgs(L2, ["fieldname"]);
  {
    const $t5 = (await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct"));
    if ($.truthy((await $.wcall([$t5], "Locate", ["FieldName", (await $.wv([$t5], "FieldName", { get: async () => L2["fieldname"], set: async (v) => { L2["fieldname"] = v; }, local: true }, false)), [(await $.wv([$t5], "loCaseInsensitive", C, false))]], C)))) {
      await $.wset([$t5], "TagFirst", (await $.mv((await $.wcall([$t5], "FieldByName", ["TagFirst"], C)), "AsString")), { get: async () => await L2["tagfirst"].get(), set: async (v) => { await L2["tagfirst"].set(v); }, local: true });
      await $.wset([$t5], "TagLast", (await $.mv((await $.wcall([$t5], "FieldByName", ["TagLast"], C)), "AsString")), { get: async () => await L2["taglast"].get(), set: async (v) => { await L2["taglast"].set(v); }, local: true });
      await $.wset([$t5], "TagPrefix", (await $.mv((await $.wcall([$t5], "FieldByName", ["TagPrefix"], C)), "AsString")), { get: async () => await L2["tagprefix"].get(), set: async (v) => { await L2["tagprefix"].set(v); }, local: true });
      await $.wset([$t5], "TagSuffix", (await $.mv((await $.wcall([$t5], "FieldByName", ["TagSuffix"], C)), "AsString")), { get: async () => await L2["tagsuffix"].get(), set: async (v) => { await L2["tagsuffix"].set(v); }, local: true });
      await $.wset([$t5], "FieldGroup", (await $.mv((await $.wcall([$t5], "FieldByName", ["FieldGroup"], C)), "AsInteger")), { get: async () => await L2["fieldgroup"].get(), set: async (v) => { await L2["fieldgroup"].set(v); }, local: true });
      await $.wset([$t5], "CanContainUTF8", (await $.mv((await $.wcall([$t5], "FieldByName", ["AlphaField"], C)), "AsInteger")), { get: async () => await L2["cancontainutf8"].get(), set: async (v) => { await L2["cancontainutf8"].set(v); }, local: true });
      await $.wset([$t5], "ParentGroup", (await $.mv((await $.wcall([$t5], "FieldByName", ["ParentGroup"], C)), "AsInteger")), { get: async () => await L2["parentgroup"].get(), set: async (v) => { await L2["parentgroup"].set(v); }, local: true });
    } else {
      await $.stmt((await $.wcall([$t5], "ShowMessage", ["TagSettings Table : Field Not Found!"], C)));
    }
  }
  return L2.result;
});
  L1["s"] = "";
  await $.stmt((await $.callv(L1["getspecimensettings"], [L1["field"], L1["tagfirst"], L1["taglast"], L1["tagprefix"], L1["tagsuffix"], L1["fieldgroup"], L1["cancontainutf8"], L1["parentgroup"]])));
  if ($.truthy((await $.or_(($.in_(L1["fieldgroup"], (await $.v(C, "UnusableGrops")))), async () => ($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))) {
    if ($.truthy((await $.and_(($.ne(L1["tagsuffix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagsuffix"]])));
    }
    return L1.result;
  }
  L1["fieldvalue"] = L1["value"];
  if ($.truthy(($.eq(L1["fieldvalue"], "")))) {
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["tagprefix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))), async () => ($.ne(L1["parentgroup"], (-(1)))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagprefix"]])));
    }
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["tagsuffix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))), async () => (($.ne(L1["parentgroup"], (-(1))))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagsuffix"]])));
    }
    if ($.truthy(($.eq(L1["parentgroup"], (-(2)))))) {
      await $.stmt((await $.callv(L0["writestring"], [$.add(L1["tagfirst"], L1["taglast"])])));
    }
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["fieldgroup"], 0)), async () => ($.ne(L1["parentgroup"], 0)))), async () => ($.ne(L1["parentgroup"], (-(2)))))))) {
      await $.set(C, "UnusableGrops", $.add((await $.v(C, "UnusableGrops")), [L1["fieldgroup"]]));
    }
    return L1.result;
  }
  L1["s"] = $.add($.add($.add($.add(L1["tagprefix"], L1["tagfirst"]), L1["fieldvalue"]), L1["taglast"]), L1["tagsuffix"]);
  L1["aansistr"] = (await $.call(C, "UTF8Encode", [L1["s"]]));
  await $.stmt((await $.callv(L0["writestring"], [L1["aansistr"]])));
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDest")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["      Faylı seçməmisiz!     "])));
    return L0.result;
  }
  L0["r"] = (await $.mv((await $.mv((await $.v(C, "Adif_Data")), "KreditDSet")), "recordcount"));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct")), "Open", []);
  L0["sr"] = (await $.mv((await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct")), "recordcount"));
  L0["abankinfo"] = (await $.v(C, "Get_BankInfo"));
  L0["bankid"] = (await $.mv(L0["abankinfo"], "BankID"));
  L0["bankname"] = (await $.mv(L0["abankinfo"], "BankName"));
  await $.stmt((await $.callv(L0["writestring"], ["<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<KREDITS>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<BANK_CODE>"])));
  await $.stmt((await $.callv(L0["writestring"], [L0["bankid"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</BANK_CODE>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<BANK_NAME>"])));
  await $.stmt((await $.callv(L0["writestring"], [L0["bankname"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</BANK_NAME>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<ROWCOUNT>"])));
  await $.stmt((await $.callv(L0["writestring"], [(await $.call(C, "inttostr", [L0["r"]]))])));
  await $.stmt((await $.callv(L0["writestring"], ["</ROWCOUNT>"])));
  { const $t6 = L0["r"];
    L0["i"] = 1;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct")), "First", []);
      { const $t8 = $.sub(L0["sr"], 1);
        L0["a"] = 0;
        let $t9 = true;
        for (;;) {
          if (!$t9) { L0["a"] = $.succ(L0["a"], 1); }
          $t9 = false;
          if (!($.ord(L0["a"]) <= $.ord($t8))) break;
          L0["fname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct")), "FieldByName", ["fieldname"])), "AsString"));
          if ($.truthy((await $.or_((await $.or_(($.eq(L0["fname"], "COLLETRALS1")), async () => ($.eq(L0["fname"], "KREDIT1")))), async () => ($.eq(L0["fname"], "KREDIT")))))) {
            L0["fvalue"] = "";
          } else {
            L0["fvalue"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditDSet")), "FieldByName", [L0["fname"]])), "AsString"));
          }
          await $.stmt((await $.callv(L0["writedata"], [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct")), "FieldByName", ["fieldname"])), "AsString")), L0["fvalue"]])));
          await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditXmlstruct")), "next", []);
          await $.tick();
        }
      }
      await $.set(C, "UnusableGrops", []);
      await $.mset((await $.v(C, "Gauge1")), "Progress", (await $.call(C, "Trunc", [$.fdiv($.mul(L0["s"], 100), L0["r"])])));
      L0["s"] = $.add(L0["s"], 1);
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "KreditDSet")), "next", []);
      await $.tick();
    }
  }
  await $.stmt((await $.callv(L0["writestring"], ["</KREDITS>"])));
  await $.stmt((await $.call(C, "ShowMessage", [$.add($.add("İxrac qurtardı ", (await $.call(C, "inttostr", [$.sub(L0["s"], 1)]))), "- sayda kredit ixrac olundu")])));
  await $.stmt((await $.call(C, "MessageDlg", ["XML file uğurla yaradıldı", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge1")), "Progress", 0);
  await $.mset((await $.v(C, "EditDest")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKredit", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TKredit", "SBSaveClick", async function SBSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "SaveDlg"));
    if ($.truthy((await $.wv([$t10], "Execute", C, false)))) {
      await $.mset((await $.wv([$t10], "EditDest", C, false)), "Text", (await $.wv([$t10], "FileName", C, false)));
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t11) => { await $.set(C, "f", $t11); }), (await $.mv((await $.v(C, "EditDest")), "Text"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t12) => { await $.set(C, "f", $t12); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t13) => { await $.set(C, "f", $t13); })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

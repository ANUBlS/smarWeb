// Generated from MKSUnderTable.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MKSUnderTable", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "HintBox", "OleCtnrs", "Buttons", "DB", "ExtCtrls", "MKSuggestionImpl"]);
  const C = [U];
  U.defClass("TfmUndertable", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "olecontainer1": {"name": "OleContainer1", "type": "TOleContainer"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "hberror": {"name": "hbError", "type": "THintBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("fmUndertable", null, "TfmUndertable");
  });
  U.method("TfmUndertable", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "OleContainer1"));
    await $.stmt((await $.wcall([$t1], "DoVerb", [(await $.wv([$t1], "ovPrimary", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "fmMKSuggestion"));
    const $t3 = (await $.wv([$t2], "ODSTemplates", C, false));
    if ($.truthy($.in_((await $.wv([$t2, $t3], "State", C, false)), [(await $.wv([$t2, $t3], "dsEdit", C, false)), (await $.wv([$t2, $t3], "dsInsert", C, false))]))) {
      await $.stmt($.wcall([$t2, $t3], "Cancel", [], C));
    }
    await $.mcall((await $.wv([$t2, $t3], "ODSTemplates", C, false)), "Edit", []);
    await $.stmt((await $.wcall([$t2, $t3], "FormShow", [(await $.wv([$t2, $t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "fmMKSuggestion"));
    await $.mcall((await $.wv([$t4], "ODSTemplates", C, false)), "Insert", []);
  }
  await $.stmt((await $.call(C, "FormShow", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit1")), "DataSource", (await $.mv((await $.v(C, "fmMKSuggestion")), "DSTemplates")));
  await $.mset((await $.v(C, "DBEdit1")), "DataField", "NAME");
  {
    const $t5 = (await $.v(C, "fmMKSuggestion"));
    const $t6 = (await $.wv([$t5], "ODSTemplates", C, false));
    if ($.truthy((await $.wv([$t5, $t6], "IsEmpty", C, false)))) {
      await $.mset((await $.wv([$t5, $t6], "RadioButton2", C, false)), "Checked", (await $.wv([$t5, $t6], "True", C, false)));
    } else {
      await $.stmt($.wcall([$t5, $t6], "Edit", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "Panel1DblClick", async function Panel1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "fmMKSuggestion"));
    const $t8 = (await $.wv([$t7], "ODSTemplates", C, false));
    if ($.truthy($.eq((await $.wv([$t7, $t8], "State", C, false)), (await $.wv([$t7, $t8], "dsEdit", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t7, $t8], "hbError", C, false)), "ShowMessage", ["edit"])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t7, $t8], "hbError", C, false)), "ShowMessage", ["Insert"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "buf": null};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
    L0["buf"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
    {
      const $t9 = (await $.v(C, "fmMKSuggestion"));
      const $t10 = (await $.wv([$t9], "ODSTemplates", C, false));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["NAME"], C)), "asString")), ""))) {
        await $.stmt((await $.mcall((await $.wv([$t9, $t10], "hbError", C, false)), "ShowMessage", ["Yeni şablonun adını daxil edin!"])));
        await $.mset((await $.wv([$t9, $t10], "Screen", C, false)), "Cursor", (await $.wv([$t9, $t10], "crDefault", C, false)));
        await $.mcall((await $.wv([$t9, $t10], "DBEdit1", C, false)), "SetFocus", []);
        $.abort();
      }
      await $.stmt((await $.mcall((await $.wv([$t9, $t10], "OleContainer1", C, false)), "SaveToStream", [(await $.wv([$t9, $t10], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wcall([$t9, $t10], "TBlobField", [(await $.wcall([$t9, $t10], "FieldByName", ["TEMPLATE"], C))], C)), "LoadFromStream", [(await $.wv([$t9, $t10], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t9, $t10], "Post", [], C));
      await $.stmt($.wcall([$t9, $t10], "RefreshRecord", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.mcall(L0["buf"], "Free", []);
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "fmMKSuggestion"));
    const $t12 = (await $.wv([$t11], "ODSTemplates", C, false));
    await $.stmt($.wcall([$t11, $t12], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "OleContainer1Exit", async function OleContainer1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "OleContainer1"));
    await $.stmt($.wcall([$t13], "Close", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "OpenContainer", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.v(C, "OleContainer1")), "State")), [(await $.v(C, "osLoaded"))]))) {
    await $.mcall((await $.v(C, "OleContainer1")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfmUndertable", "OpenContainer", async function OpenContainer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"show": $.copyArg(p0), result: undefined, "buf": null, "fwordapl": null};
  await $.fixArgs(L0, ["show"]);
  {
    const $t14 = (await $.v(C, "fmMKSuggestion"));
    const $t15 = (await $.wv([$t14], "ODSTemplates", C, false));
    if ($.truthy($.in_((await $.wv([$t14, $t15], "State", C, false)), [(await $.wv([$t14, $t15], "dsEdit", C, false))]))) {
      await $.wset([$t14, $t15], "Buf", (await $.mv((await $.wv([$t14, $t15], "TMemoryStream", C, false)), "Create")), { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wcall([$t14, $t15], "TBlobField", [(await $.wcall([$t14, $t15], "FieldByName", ["TEMPLATE"], C))], C)), "SaveToStream", [(await $.wv([$t14, $t15], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t14, $t15], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), "Position", 0);
      await $.stmt((await $.mcall((await $.wv([$t14, $t15], "OleContainer1", C, false)), "LoadFromStream", [(await $.wv([$t14, $t15], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t14, $t15], "OleContainer1", C, false)), "CreateObject", ["Word.Document", (await $.wv([$t14, $t15], "False", C, false))])));
    }
  }
  if ($.truthy(L0["show"])) {
    await $.stmt((await $.mcall((await $.v(C, "OleContainer1")), "DoVerb", [(await $.v(C, "ovShow"))])));
  }
  return L0.result;
}, {"params": ["Show"], "kind": "procedure", "ptypes": ["Boolean"]});
  return U;
}

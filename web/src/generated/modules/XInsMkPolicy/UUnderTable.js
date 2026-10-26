// Generated from UUnderTable.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UUnderTable", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "OleCtnrs", "StdCtrls", "Buttons", "Mask", "DBCtrls", "db", "HintBox", "Grids", "DBGrids", "UMKPolicyImpl"]);
  const C = [U];
  U.defClass("TfmUndertable", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "hberror": {"name": "hbError", "type": "THintBox"}, "olecontainer1": {"name": "OleContainer1", "type": "TOleContainer"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("fmUndertable", null, "TfmUndertable");
  });
  U.method("TfmUndertable", "OpenContainer", async function OpenContainer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"show": (p0 === undefined ? true : p0), result: undefined, "buf": null, "fwordapl": null};
  await $.fixArgs(L0, ["show"]);
  {
    const $t1 = (await $.v(C, "fmMKPolicy"));
    const $t2 = (await $.wv([$t1], "ODSTemplates", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsEdit", C, false))]))) {
      await $.wset([$t1, $t2], "Buf", (await $.mv((await $.wv([$t1, $t2], "TMemoryStream", C, false)), "Create")), { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wcall([$t1, $t2], "TBlobField", [(await $.wcall([$t1, $t2], "FieldByName", ["TEMPLATE"], C))], C)), "SaveToStream", [(await $.wv([$t1, $t2], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t1, $t2], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), "Position", 0);
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "OleContainer1", C, false)), "LoadFromStream", [(await $.wv([$t1, $t2], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "OleContainer1", C, false)), "CreateObject", ["Word.Document", (await $.wv([$t1, $t2], "False", C, false))])));
    }
  }
  if ($.truthy(L0["show"])) {
    await $.stmt((await $.mcall((await $.v(C, "OleContainer1")), "DoVerb", [(await $.v(C, "ovShow"))])));
  }
  return L0.result;
}, {"params": ["Show"], "kind": "procedure", "ptypes": ["Boolean"]});
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
  U.method("TfmUndertable", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "fmMKPolicy"));
    await $.mcall((await $.wv([$t3], "ODSTemplates", C, false)), "Insert", []);
  }
  await $.stmt((await $.call(C, "FormShow", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "fmMKPolicy"));
    const $t5 = (await $.wv([$t4], "ODSTemplates", C, false));
    if ($.truthy($.in_((await $.wv([$t4, $t5], "State", C, false)), [(await $.wv([$t4, $t5], "dsEdit", C, false)), (await $.wv([$t4, $t5], "dsInsert", C, false))]))) {
      await $.stmt($.wcall([$t4, $t5], "Cancel", [], C));
    }
    await $.mcall((await $.wv([$t4, $t5], "ODSTemplates", C, false)), "Edit", []);
    await $.stmt((await $.wcall([$t4, $t5], "FormShow", [(await $.wv([$t4, $t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit1")), "DataSource", (await $.mv((await $.v(C, "fmMKPolicy")), "DSTemplates")));
  await $.mset((await $.v(C, "DBEdit1")), "DataField", "NAME");
  {
    const $t6 = (await $.v(C, "fmMKPolicy"));
    const $t7 = (await $.wv([$t6], "ODSTemplates", C, false));
    if ($.truthy((await $.wv([$t6, $t7], "IsEmpty", C, false)))) {
      await $.mset((await $.wv([$t6, $t7], "RadioButton2", C, false)), "Checked", (await $.wv([$t6, $t7], "True", C, false)));
    } else {
      await $.stmt($.wcall([$t6, $t7], "Edit", [], C));
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
      const $t8 = (await $.v(C, "fmMKPolicy"));
      const $t9 = (await $.wv([$t8], "ODSTemplates", C, false));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["NAME"], C)), "asString")), ""))) {
        await $.stmt((await $.mcall((await $.wv([$t8, $t9], "hbError", C, false)), "ShowMessage", ["Yeni şablonun adını daxil edin!"])));
        await $.mset((await $.wv([$t8, $t9], "Screen", C, false)), "Cursor", (await $.wv([$t8, $t9], "crDefault", C, false)));
        await $.mcall((await $.wv([$t8, $t9], "DBEdit1", C, false)), "SetFocus", []);
        $.abort();
      }
      await $.stmt((await $.mcall((await $.wv([$t8, $t9], "OleContainer1", C, false)), "SaveToStream", [(await $.wv([$t8, $t9], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wcall([$t8, $t9], "TBlobField", [(await $.wcall([$t8, $t9], "FieldByName", ["TEMPLATE"], C))], C)), "LoadFromStream", [(await $.wv([$t8, $t9], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t8, $t9], "Post", [], C));
      await $.stmt($.wcall([$t8, $t9], "RefreshRecord", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.mcall(L0["buf"], "Free", []);
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "Panel1DblClick", async function Panel1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "fmMKPolicy"));
    const $t11 = (await $.wv([$t10], "ODSTemplates", C, false));
    if ($.truthy($.eq((await $.wv([$t10, $t11], "State", C, false)), (await $.wv([$t10, $t11], "dsEdit", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "hbError", C, false)), "ShowMessage", ["edit"])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "hbError", C, false)), "ShowMessage", ["Insert"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "fmMKPolicy"));
    const $t13 = (await $.wv([$t12], "ODSTemplates", C, false));
    await $.stmt($.wcall([$t12, $t13], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "OleContainer1"));
    await $.stmt((await $.wcall([$t14], "DoVerb", [(await $.wv([$t14], "ovPrimary", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUndertable", "OleContainer1Exit", async function OleContainer1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "OleContainer1"));
    await $.stmt($.wcall([$t15], "Close", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

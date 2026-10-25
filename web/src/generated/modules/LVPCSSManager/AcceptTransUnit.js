// Generated from AcceptTransUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AcceptTransUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "StdCtrls", "ExtCtrls", "Data_Unit", "LVPCSSImpl"]);
  const C = [U];
  U.defClass("TFormAcceptTransaction", "TForm", {"speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FormAcceptTransaction", null, "TFormAcceptTransaction");
  });
  U.method("TFormAcceptTransaction", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Referens")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["TRANS_REF"])), "AsString"))))) {
        await $.stmt((await $.call(C, "MessageDlg", ["New Reference must be different of current reference !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
        return L0.result;
      }
      if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_Referens")), "Text"))])), (await $.v(C, "EmptyStr"))))) {
        await $.stmt((await $.call(C, "MessageDlg", ["Please enter Reference !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
        return L0.result;
      }
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "PackTemp")), "CallProcedure", ["UpdateBatchReference", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), (await $.mv((await $.v(C, "Edit_referens")), "Text"))]])));
    }
    if ($.truthy($.not((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "PackTemp")), "CallIntegerFunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RefreshRecord", []);
    } else {
      {
        const $t1 = (await $.v(C, "LVPCSSform"));
        await $.wset([$t1], "AcceptTransForCreated", (await $.wv([$t1], "True", C, false)), C);
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAcceptTransaction", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "LVPCSSform"));
    await $.wset([$t2], "AcceptTransForCreated", (await $.wv([$t2], "False", C, false)), C);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAcceptTransaction", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Referens")), "text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetReference")), "CallStringfunction", ["GetNewBatchRefrence", [0]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAcceptTransaction", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "GroupBox1")), "Enabled", (await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAcceptTransaction", "Edit_ReferensKeyPress", async function Edit_ReferensKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","z"), ...$.range("A","Z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

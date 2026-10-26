// Generated from UConditions.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UConditions", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Grids", "DBGrids", "ExtCtrls", "DBCtrls", "UMKDataMod", "UMKBlank"]);
  const C = [U];
  U.defClass("TfrmCond", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "memconditions": {"name": "memConditions", "type": "TMemo"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "btadd": {"name": "btAdd", "type": "TBitBtn"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "label1": {"name": "Label1", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmCond", null, "TfrmCond");
  });
  U.method("TfrmCond", "btAddClick", async function btAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "memConditions"));
    if ($.truthy($.ne((await $.wv([$t1], "Text", C, false)), ""))) {
      await $.wset([$t1], "Text", $.add($.add((await $.wv([$t1], "Text", C, false)), "."), "\r\n"), C);
    }
    await $.wset([$t1], "Text", $.add($.add((await $.wv([$t1], "Text", C, false)), (await $.mv((await $.mv((await $.wv([$t1], "InsMkDataMod", C, false)), "ODSConditionsNAME")), "Value"))), "."), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCond", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "InsMkDataMod")), "ODSConditions")), "IsEmpty")))) {
    await $.mset((await $.v(C, "btAdd")), "Enabled", false);
  }
  await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "InsMkDataMod")), "DSConditions")));
  await $.mset((await $.v(C, "memConditions")), "Text", (await $.mv((await $.mv((await $.v(C, "InsMkDataMod")), "ODSContractsConditions")), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCond", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "InsMkDataMod")), "ODSContracts")), "Edit", []);
  await $.mset((await $.mv((await $.v(C, "InsMkDataMod")), "ODSContractsConditions")), "Value", (await $.mv((await $.v(C, "memConditions")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "InsMkDataMod")), "ODSContracts")), "Post", []);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCond", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "memConditions")), "Lines")), "SaveToFile", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\InsConditions.txt")])));
  await $.mset((await $.v(C, "memConditions")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCond", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "memConditions")), "Lines")), "LoadFromFile", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "\\InsConditions.txt")])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

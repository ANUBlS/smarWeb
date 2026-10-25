// Generated from CollectionUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CollectionUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Grids", "DBGrids", "CollectionDataModUnit", "DepositDataModuleUnit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmCollection", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbgridcollection": {"name": "DBGridCollection", "type": "TDBGrid"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmCollection", null, "TFrmCollection");
  });
  U.method("TFrmCollection", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCollection", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CollectionDataMod", (await $.mcall((await $.v(C, "TCollectionDataMod")), "Create", [Self])));
  await $.set(C, "Caption", $.add((await $.v(C, "Caption")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DepositDataModule")), "Deposits")), "FieldByName", ["ContractNo"])), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCollection", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CollectionDataMod")), "CollectionData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ID#", (await $.wv([$t1], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

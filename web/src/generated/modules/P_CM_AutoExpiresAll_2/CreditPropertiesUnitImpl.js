// Generated from CreditPropertiesUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreditPropertiesUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "Grids", "DBGridEh", "DatModAexUnitImpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmCreditProperties", "TForm", {"pccreditproperties": {"name": "PCCreditProperties", "type": "TPageControl"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("FrmCreditProperties", null, "TFrmCreditProperties");
  });
  U.method("TFrmCreditProperties", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditProperties", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCreditProperties", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PCCreditProperties")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditProperties", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}

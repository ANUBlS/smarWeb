// Generated from frmTranchRestImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmTranchRestImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "Buttons", "Grids", "DBGridEh", "ExtCtrls", "CMExcelExport", "DMCardPercentImpl"]);
  const C = [U];
  U.defClass("TfrmTranchRest", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmTranchRest", null, "TfrmTranchRest");
  });
  U.method("TfrmTranchRest", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmTranchRest", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmTranchRest", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DMCardPercent"));
    {
      const $t2 = (await $.wv([$t1], "CMExcelExport1", C, false));
      await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "Tranchrest", C, false)), "Tranh üzrə qalıqlar", (await $.wv([$t1, $t2], "true", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

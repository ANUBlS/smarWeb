// Generated from InsBalSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsBalSettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "DBViewComboBox", "Mask", "DBCtrls", "ExtCtrls", "DB", "Grids", "DBGrids", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmBalSettings", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("fmBalSettings", null, "TfmBalSettings");
  });
  U.method("TfmBalSettings", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    if ($.truthy(($.eq((await $.wv([$t1], "ModalResult", C, false)), (await $.wv([$t1], "mrOk", C, false)))))) {
      if ($.truthy(($.eq((await $.mv((await $.wv([$t1], "ODSAcc_types", C, false)), "State")), (await $.wv([$t1], "dsEdit", C, false)))))) {
        await $.mcall((await $.wv([$t1], "ODSAcc_types", C, false)), "Post", []);
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t1], "ODSBal_cn", C, false)), "State")), (await $.wv([$t1], "dsEdit", C, false)))))) {
        await $.mcall((await $.wv([$t1], "ODSBal_cn", C, false)), "Post", []);
      }
    }
    await $.mcall((await $.wv([$t1], "ODSAcc_types", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t1], "ODSBal_cn", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

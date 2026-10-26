// Generated from UMKAccesories.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMKAccesories", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "DBCtrls", "StdCtrls", "Buttons", "DB", "UMKDataMod", "UMKBlank"]);
  const C = [U];
  U.defClass("TfrmAccessories", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmAccessories", null, "TfrmAccessories");
  });
  U.method("TfrmAccessories", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsMKDataMod"));
    const $t2 = (await $.wv([$t1], "ODSAccessories", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsEdit", C, false)), (await $.wv([$t1, $t2], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t1, $t2], "ODSAccessoriesCid", C, false)), "Value", (await $.mv((await $.wv([$t1, $t2], "ODSMotorKaskoID", C, false)), "Value")));
      await $.stmt($.wcall([$t1, $t2], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

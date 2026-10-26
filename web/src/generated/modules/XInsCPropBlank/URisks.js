// Generated from URisks.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("URisks", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Grids", "DBGrids", "ExtCtrls", "UCProperty", "UDModule"]);
  const C = [U];
  U.defClass("TRiskForm", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btadd": {"name": "btAdd", "type": "TBitBtn"}, "btok": {"name": "btOk", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("RiskForm", null, "TRiskForm");
  });
  U.method("TRiskForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DModule")), "ODSRiskType")), "IsEmpty")))) {
    await $.mset((await $.v(C, "btAdd")), "Enabled", false);
  }
  await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "DModule")), "RisktypeData")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRiskForm", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRiskForm", "btAddClick", async function btAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CProperty"));
    const $t2 = (await $.wv([$t1], "memRisk", C, false));
    if ($.truthy($.ne((await $.wv([$t1, $t2], "Text", C, false)), ""))) {
      await $.wset([$t1, $t2], "Text", $.add((await $.wv([$t1, $t2], "Text", C, false)), ", "), C);
    }
    await $.wset([$t1, $t2], "Text", $.add((await $.wv([$t1, $t2], "Text", C, false)), (await $.mv((await $.mv((await $.wv([$t1, $t2], "DModule", C, false)), "ODSRisktypeNAME")), "Value"))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from Unit1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormMeans", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "closed": {"name": "Closed", "type": "TRadioButton"}, "stopped": {"name": "Stopped", "type": "TRadioButton"}, "aktive": {"name": "Aktive", "type": "TRadioButton"}, "all": {"name": "All", "type": "TRadioButton"}}, {});
  U.init(async () => {
    U.var_("FormMeans", null, "TFormMeans");
  });
  U.method("TFormMeans", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "all")), "Checked")))) {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt($.wcall([$t1], "Close", [], C));
      await $.wset([$t1], "filtered", (await $.wv([$t1], "false", C, false)), C);
      await $.wset([$t1], "filter", "", C);
      await $.wset([$t1], "filtered", (await $.wv([$t1], "true", C, false)), C);
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Close", []);
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL")), [16], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL", $t2); } }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Open", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "Closed")), "Checked")))) {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt($.wcall([$t3], "Close", [], C));
      await $.wset([$t3], "filtered", (await $.wv([$t3], "false", C, false)), C);
      await $.wset([$t3], "filter", "CLOSE_FORMAT=2", C);
      await $.wset([$t3], "filtered", (await $.wv([$t3], "true", C, false)), C);
      await $.stmt($.wcall([$t3], "Open", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Close", []);
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL")), [16], " and  CLOSE_FORMAT=2"); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL", $t4); } }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Open", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "Stopped")), "Checked")))) {
    {
      const $t5 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt($.wcall([$t5], "Close", [], C));
      await $.wset([$t5], "filtered", (await $.wv([$t5], "false", C, false)), C);
      await $.wset([$t5], "filter", "CLOSE_FORMAT=3", C);
      await $.wset([$t5], "filtered", (await $.wv([$t5], "true", C, false)), C);
      await $.stmt($.wcall([$t5], "Open", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Close", []);
    { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL")), [16], " and  CLOSE_FORMAT=3"); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL", $t6); } }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Open", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "Aktive")), "Checked")))) {
    {
      const $t7 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt($.wcall([$t7], "Close", [], C));
      await $.wset([$t7], "filtered", (await $.wv([$t7], "false", C, false)), C);
      await $.wset([$t7], "filter", "((CLOSE_FORMAT=1) or (CLOSE_FORMAT=0))", C);
      await $.wset([$t7], "filtered", (await $.wv([$t7], "true", C, false)), C);
      await $.stmt($.wcall([$t7], "Open", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Close", []);
    { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL")), [16], " and (CLOSE_FORMAT=1 or CLOSE_FORMAT=0)"); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "SQL", $t8); } }
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Open", []);
  }
  await $.mcall((await $.v(C, "FormMeans")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMeans", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from UnitGroupDat.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitGroupDat", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ComCtrls", "StdCtrls", "Buttons", "UnitData", "UnitFilter", "UnitRepGroupNB", "UnitRepGroupNL", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormGroupDat", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "dtpdat": {"name": "DTPDat", "type": "TDateTimePicker"}, "rgroupch": {"name": "RGroupCh", "type": "TRadioGroup"}, "dtpenddat": {"name": "DTPEndDat", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormGroupDat", null, "TFormGroupDat");
  });
  U.method("TFormGroupDat", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_dat": 0, "v_date": 0, "v_enddat": 0, "v_enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPDat")), "DateTime"))]))]));
  L0["v_enddat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPEndDat")), "DateTime"))]))]));
  L0["v_date"] = (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["last_amort_date", [L0["v_dat"]]]));
  L0["v_enddate"] = (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["last_amort_date", [L0["v_enddat"]]]));
  {
    const $t1 = (await $.mv((await $.v(C, "DataModWares")), "ODSRepGroupAllNB"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_amort_date", (await $.wv([$t1], "v_date", { get: async () => L0["v_date"], set: async (v) => { L0["v_date"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["end_date", (await $.wv([$t1], "v_enddate", { get: async () => L0["v_enddate"], set: async (v) => { L0["v_enddate"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t1], "DataModWares", C, false)), "ODSGroups")), "Filter")), ""))) {
      await $.wset([$t1], "Filtered", (await $.wv([$t1], "false", C, false)), C);
      await $.wset([$t1], "Filter", (await $.mv((await $.mv((await $.wv([$t1], "DataModWares", C, false)), "ODSGroups")), "Filter")), C);
      await $.wset([$t1], "Filtered", (await $.wv([$t1], "true", C, false)), C);
    }
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  { const $t2 = (await $.mv((await $.v(C, "RGroupCh")), "ItemIndex"));
    if ($.eq($t2, 0)) {
      await $.mcall((await $.v(C, "QRepGroupAll")), "Preview", []);
      await $.mcall((await $.v(C, "QRepGroupAll")), "Refresh", []);
    }
    else if ($.eq($t2, 1)) {
      await $.mcall((await $.v(C, "QRepGroupAllNL")), "Preview", []);
      await $.mcall((await $.v(C, "QRepGroupAllNL")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGroupDat", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPDat")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  await $.mset((await $.v(C, "DTPEndDat")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGroupDat", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

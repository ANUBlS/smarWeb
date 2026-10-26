// Generated from UnitViewTurn.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitViewTurn", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Grids", "DBGridEh", "ComCtrls", "Oracle", "Buttons", "DB", "UnitData", "UnitExcel", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormViewTurn", "TForm", {"gboxnb": {"name": "GBoxNB", "type": "TGroupBox"}, "dbgridwaresnb": {"name": "DBGridWaresNB", "type": "TDBGridEh"}, "dbgridehgroupnb": {"name": "DBGridEhGroupNB", "type": "TDBGridEh"}, "panelsum": {"name": "PanelSum", "type": "TPanel"}, "labelfirstprice": {"name": "LabelFirstPrice", "type": "TLabel"}, "labelremainder": {"name": "LabelRemainder", "type": "TLabel"}, "labelallamort": {"name": "LabelAllAmort", "type": "TLabel"}, "labelamort": {"name": "LabelAmort", "type": "TLabel"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "labels": {"name": "LabelS", "type": "TLabel"}, "search": {"name": "Search", "type": "TLabel"}, "labelsrchname": {"name": "LabelSrchName", "type": "TLabel"}, "labelsrchfp": {"name": "LabelSrchFP", "type": "TLabel"}, "labelsrchr": {"name": "LabelSrchR", "type": "TLabel"}, "labelsrchaa": {"name": "LabelSrchAA", "type": "TLabel"}, "labelsrcha": {"name": "LabelSrchA", "type": "TLabel"}, "editsrchfp": {"name": "EditSrchFP", "type": "TEdit"}, "editsrchr": {"name": "EditSrchR", "type": "TEdit"}, "editsrchaa": {"name": "EditSrchAA", "type": "TEdit"}, "editsrchname": {"name": "EditSrchName", "type": "TEdit"}, "editsrcha": {"name": "EditSrchA", "type": "TEdit"}, "panelcheck": {"name": "PanelCheck", "type": "TPanel"}, "dtp_dat": {"name": "DTP_Dat", "type": "TDateTimePicker"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "panelff": {"name": "PanelFF", "type": "TPanel"}, "dbeditfirst_price": {"name": "DBEditFIRST_PRICE", "type": "TDBEdit"}, "dbeditremainder": {"name": "DBEditREMAINDER", "type": "TDBEdit"}, "dbeditall_amort": {"name": "DBEditALL_AMORT", "type": "TDBEdit"}, "dbeditamort": {"name": "DBEditAMORT", "type": "TDBEdit"}, "dbedittax_first_price": {"name": "DBEditTAX_FIRST_PRICE", "type": "TDBEdit"}, "dbedittax_remainder": {"name": "DBEditTAX_REMAINDER", "type": "TDBEdit"}, "dbedittax_all_amort": {"name": "DBEditTAX_ALL_AMORT", "type": "TDBEdit"}, "dbedittax_amort": {"name": "DBEditTAX_AMORT", "type": "TDBEdit"}, "timerb": {"name": "TimerB", "type": "TTimer"}, "timera": {"name": "TimerA", "type": "TTimer"}, "btnexportexcel": {"name": "BtnExportExcel", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormViewTurn", null, "TFormViewTurn");
  });
  U.method("TFormViewTurn", "Sum_For_Group_Params", async function Sum_For_Group_Params(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
  const C = $.chain(Self, U);
  const L0 = {"v_amort_date": $.copyArg(p0), "v_groups_id": $.copyArg(p1), "v_sum_first_price": $.asRef(p2), "v_sum_remainder": $.asRef(p3), "v_sum_all_amort": $.asRef(p4), "v_sum_amort": $.asRef(p5), "v_sum_tax_first_price": $.asRef(p6), "v_sum_tax_remainder": $.asRef(p7), "v_sum_tax_all_amort": $.asRef(p8), "v_sum_tax_amort": $.asRef(p9), result: undefined};
  await $.fixArgs(L0, ["v_amort_date", "v_groups_id"]);
  {
    const $t1 = (await $.v(C, "DataModWares"));
    await $.stmt((await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "CallProcedure", ["Sum_For_Group_Params", [(await $.wv([$t1], "v_amort_date", { get: async () => L0["v_amort_date"], set: async (v) => { L0["v_amort_date"] = v; }, local: true }, false)), (await $.wv([$t1], "v_groups_id", { get: async () => L0["v_groups_id"], set: async (v) => { L0["v_groups_id"] = v; }, local: true }, false)), 0, 0, 0, 0, 0, 0, 0, 0]])));
    await $.wset([$t1], "v_sum_first_price", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [2])), { get: async () => await L0["v_sum_first_price"].get(), set: async (v) => { await L0["v_sum_first_price"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_remainder", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [3])), { get: async () => await L0["v_sum_remainder"].get(), set: async (v) => { await L0["v_sum_remainder"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_all_amort", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [4])), { get: async () => await L0["v_sum_all_amort"].get(), set: async (v) => { await L0["v_sum_all_amort"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_amort", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [5])), { get: async () => await L0["v_sum_amort"].get(), set: async (v) => { await L0["v_sum_amort"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_tax_first_price", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [6])), { get: async () => await L0["v_sum_tax_first_price"].get(), set: async (v) => { await L0["v_sum_tax_first_price"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_tax_remainder", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [7])), { get: async () => await L0["v_sum_tax_remainder"].get(), set: async (v) => { await L0["v_sum_tax_remainder"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_tax_all_amort", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [8])), { get: async () => await L0["v_sum_tax_all_amort"].get(), set: async (v) => { await L0["v_sum_tax_all_amort"].set(v); }, local: true });
    await $.wset([$t1], "v_sum_tax_amort", (await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "GetParameter", [9])), { get: async () => await L0["v_sum_tax_amort"].get(), set: async (v) => { await L0["v_sum_tax_amort"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["v_amort_date", "v_groups_id", "v_sum_first_price", "v_sum_remainder", "v_sum_all_amort", "v_sum_amort", "v_sum_tax_first_price", "v_sum_tax_remainder", "v_sum_tax_all_amort", "v_sum_tax_amort"], "kind": "procedure", "ptypes": ["TDateTime", "integer", "real", "real", "real", "real", "real", "real", "real", "real"]});
  U.method("TFormViewTurn", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_amort_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_amort_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Dat")), "DateTime"))]))]));
  {
    const $t2 = (await $.v(C, "DataModWares"));
    await $.mcall((await $.wv([$t2], "ODSViewGroups", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "ODSViewWares", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSViewWares", C, false)), "SetVariable", ["v_amort_date", (await $.wv([$t2], "v_amort_date", { get: async () => L0["v_amort_date"], set: async (v) => { L0["v_amort_date"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t2], "ODSViewWares", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "DBGridEhGroupNBCellClick", async function DBGridEhGroupNBCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "p_amort_date": 0};
  await $.fixArgs(L0, ["column"]);
  L0["p_amort_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Dat")), "DateTime"))]))]));
  {
    const $t3 = (await $.mv((await $.v(C, "DataModWares")), "ODSSumViewWares"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["amort_date", (await $.wv([$t3], "p_amort_date", { get: async () => L0["p_amort_date"], set: async (v) => { L0["p_amort_date"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TFormViewTurn", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_amort_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_amort_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Dat")), "DateTime"))]))]));
  {
    const $t4 = (await $.v(C, "DataModWares"));
    await $.mcall((await $.wv([$t4], "ODSViewGroups", C, false)), "Open", []);
    await $.mcall((await $.wv([$t4], "ODSViewWares", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSViewWares", C, false)), "SetVariable", ["v_amort_date", (await $.wv([$t4], "v_amort_date", { get: async () => L0["v_amort_date"], set: async (v) => { L0["v_amort_date"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t4], "ODSViewWares", C, false)), "Open", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "DBGridEhGroupNBKeyDown", async function DBGridEhGroupNBKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "p_amort_date": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  L0["p_amort_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Dat")), "DateTime"))]))]));
  {
    const $t5 = (await $.mv((await $.v(C, "DataModWares")), "ODSSumViewWares"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["amort_date", (await $.wv([$t5], "p_amort_date", { get: async () => L0["p_amort_date"], set: async (v) => { L0["p_amort_date"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormViewTurn", "LabelSClick", async function LabelSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "LabelS")), "Caption")), "<"))) {
    await $.mset((await $.v(C, "TimerA")), "Enabled", true);
    await $.mset((await $.v(C, "TimerB")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "TimerB")), "Enabled", true);
    await $.mset((await $.v(C, "TimerA")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "TimerBTimer", async function TimerBTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "PanelSearch")), "Width")), $.add(16, 10)))) {
    await $.mset((await $.v(C, "PanelSearch")), "Width", $.sub((await $.mv((await $.v(C, "PanelSearch")), "Width")), 10));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "LabelS")), "Caption", "<");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "TimerATimer", async function TimerATimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.lt((await $.mv((await $.v(C, "PanelSearch")), "Width")), $.sub((await $.mv((await $.v(C, "PanelSum")), "Width")), 4)))) {
    await $.mset((await $.v(C, "PanelSearch")), "Width", $.add((await $.mv((await $.v(C, "PanelSearch")), "Width")), 10));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "LabelS")), "Caption", ">");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "EditSrchAAChange", async function EditSrchAAChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchAA")), "Text")), ""))) {
    {
      const $t6 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t6], "Locate", ["all_amort", (await $.mv((await $.wv([$t6], "EditSrchAA", C, false)), "Text")), [(await $.wv([$t6], "loCaseInsensitive", C, false)), (await $.wv([$t6], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t6], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t6], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "EditSrchFPChange", async function EditSrchFPChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchFP")), "Text")), ""))) {
    {
      const $t7 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t7], "Locate", ["first_price", (await $.mv((await $.wv([$t7], "EditSrchFP", C, false)), "Text")), [(await $.wv([$t7], "loCaseInsensitive", C, false)), (await $.wv([$t7], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t7], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t7], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormViewTurn", "BtnExportExcelClick", async function BtnExportExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormExcel", (await $.mcall((await $.v(C, "TFormExcel")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormExcel")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

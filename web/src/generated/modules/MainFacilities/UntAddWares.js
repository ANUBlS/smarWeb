// Generated from UntAddWares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntAddWares", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons", "ComCtrls", "Db", "ActnList", "CurrencyEdit", "MFDataModule", "UntMainFacilitiesImpl", "SBTransaction"]);
  const C = [U];
  U.defClass("EInvalidDepartment", "Exception", {}, {});
  U.defClass("TFrmAddWares", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "titlepanel": {"name": "TitlePanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "ename": {"name": "ENAME", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "cbdepartments": {"name": "CBDepartments", "type": "TComboBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "efxm": {"name": "EFXM", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "einventar": {"name": "EInventar", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dtpinventar_date": {"name": "DTPINVENTAR_DATE", "type": "TDateTimePicker"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "efirst_price": {"name": "EFIRST_PRICE", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "ebalance_price": {"name": "EBALANCE_PRICE", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "eaccrualamort": {"name": "EAccrualAmort", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "eamortnb": {"name": "EAMORTNB", "type": "TEdit"}, "eproducer_plane": {"name": "EPRODUCER_PLANE", "type": "TEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "eamorttax": {"name": "EAMORTTAX", "type": "TEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "dtpin_date": {"name": "DTPIN_DATE", "type": "TDateTimePicker"}, "ein_num": {"name": "EIN_NUM", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "dtprepair": {"name": "DTPREPAIR", "type": "TDateTimePicker"}, "erepair_summa": {"name": "EREPAIR_SUMMA", "type": "TEdit"}, "erepair_num": {"name": "EREPAIR_NUM", "type": "TEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "dtpmodern": {"name": "DTPMODERN", "type": "TDateTimePicker"}, "emodern_summa": {"name": "EMODERN_SUMMA", "type": "TEdit"}, "emodern_num": {"name": "EMODERN_NUM", "type": "TEdit"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "emoder5n_num": {"name": "EMODER5N_NUM", "type": "TEdit"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "edepartment": {"name": "EDepartment", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "mainactionlist": {"name": "MainActionList", "type": "TActionList"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "inv_d": {"name": "INV_D", "type": "TDateTime"}, "in_d": {"name": "IN_D", "type": "TDateTime"}, "mod_d": {"name": "MOD_D", "type": "TDateTime"}, "rep_d": {"name": "REP_D", "type": "TDateTime"}, "dsector_cod": {"name": "DSector_cod", "type": "Integer"}, "out_d": {"name": "OUT_D", "type": "Variant"}, "out_num": {"name": "OUT_NUM", "type": "Variant"}, "m": {"name": "M", "type": "Variant"}, "r": {"name": "R", "type": "Variant"}}, {});
  U.init(async () => {
    U.var_("FrmAddWares", null, "TFrmAddWares");
  });
  U.method("TFrmAddWares", "GetDepartmentName", async function GetDepartmentName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"departmentid": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["departmentid"]);
  {
    const $t1 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.wset([$t1], "result", (await $.wcall([$t1], "CallStringFunction", ["GetDepartmentName", [(await $.wv([$t1], "DepartmentID", { get: async () => L0["departmentid"], set: async (v) => { L0["departmentid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["DepartmentID"], "kind": "function", "ptypes": ["integer"]});
  U.method("TFrmAddWares", "CleanUp", async function CleanUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "compcount": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (L0["sender"]);
    { const $t3 = $.sub((await $.wv([$t2], "ComponentCount", C, false)), 1);
      await $.wset([$t2], "CompCount", 0, { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "CompCount", $.succ((await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false)), 1), { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Components", C, false)), [(await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false))])), "TEdit")))) {
          await $.mset((await $.idx((await $.wv([$t2], "Components", C, false)), [(await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false))])), "Text", "");
        } else {
          if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Components", C, false)), [(await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false))])), "TComboBox")))) {
            await $.mset((await $.idx((await $.wv([$t2], "Components", C, false)), [(await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false))])), "Text", "");
            await $.mset((await $.idx((await $.wv([$t2], "Components", C, false)), [(await $.wv([$t2], "CompCount", { get: async () => L0["compcount"], set: async (v) => { L0["compcount"] = v; }, local: true }, false))])), "Tag", 0);
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "groupid": 0, "searchid": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omAdd"))))) {
      await $.set(C, "INV_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPINVENTAR_DATE")), "DateTime"))])));
      await $.set(C, "IN_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPIN_DATE")), "DateTime"))])));
      L0["groupid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewGroup")), "FieldByName", ["ID"])), "AsInteger"));
      {
        const $t6 = (await $.v(C, "MainFDataModule"));
        await $.stmt((await $.mcall((await $.wv([$t6], "OPViewWares", C, false)), "CallProcedure", ["add_wares", [(await $.wv([$t6], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "ENAME", C, false)), "Text")), (await $.mv((await $.wv([$t6], "EInventar", C, false)), "Text")), (await $.wv([$t6], "INV_D", C, false)), (await $.wcall([$t6], "StrToFloat", [(await $.mv((await $.wv([$t6], "EFirst_price", C, false)), "Text"))], C)), (await $.wcall([$t6], "StrToFloat", [(await $.mv((await $.wv([$t6], "EBalance_price", C, false)), "Text"))], C)), (await $.wv([$t6], "IN_D", C, false)), (await $.wcall([$t6], "StrToInt", [(await $.mv((await $.wv([$t6], "EIn_num", C, false)), "Text"))], C)), (await $.wcall([$t6], "StrToInt", [(await $.mv((await $.wv([$t6], "EAMORTNB", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t6], "EPRODUCER_PLANE", C, false)), "Text")), (await $.wcall([$t6], "StrToInt", [(await $.mv((await $.wv([$t6], "EFXM", C, false)), "Text"))], C)), (await $.mv((await $.mcall((await $.wv([$t6], "ODSTakeDepartmentID", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0, 0, (await $.wcall([$t6], "StrToFloat", [(await $.mv((await $.wv([$t6], "EAccrualAmort", C, false)), "Text"))], C)), 0, 0, (await $.wcall([$t6], "StrToInt", [(await $.mv((await $.wv([$t6], "EAMORTTAX", C, false)), "Text"))], C))]])));
        await $.mcall((await $.wv([$t6], "ODSWClose", C, false)), "Refresh", []);
        await $.mcall((await $.wv([$t6], "ODSMODERN", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t6], "ODSMODERN", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t6], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t6], "ODSMODERN", C, false)), "Open", []);
        await $.mcall((await $.wv([$t6], "ODSREPAIR", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t6], "ODSREPAIR", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t6], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t6], "ODSREPAIR", C, false)), "Open", []);
        await $.mcall((await $.wv([$t6], "ViewWares", C, false)), "Refresh", []);
        await $.stmt($.wcall([$t6], "Close", [], C));
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omEdit"))))) {
        {
          const $t7 = (await $.v(C, "MainFDataModule"));
          await $.wset([$t7], "SearchID", (await $.mv((await $.mcall((await $.wv([$t7], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t7], "OPViewWares", C, false)), "CallProcedure", ["upd_wares", [(await $.mv((await $.mcall((await $.wv([$t7], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.wv([$t7], "EName", C, false)), "Text")), (await $.mv((await $.wv([$t7], "EInventar", C, false)), "Text")), (await $.mv((await $.wv([$t7], "DTPInventar_date", C, false)), "DateTime")), (await $.wcall([$t7], "StrToFloat", [(await $.mv((await $.wv([$t7], "EFirst_price", C, false)), "Text"))], C)), (await $.wcall([$t7], "StrToFloat", [(await $.mv((await $.wv([$t7], "EBalance_price", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t7], "DTPIn_date", C, false)), "DateTime")), (await $.wcall([$t7], "StrToInt", [(await $.mv((await $.wv([$t7], "EIn_num", C, false)), "Text"))], C)), (await $.wcall([$t7], "StrToFloat", [(await $.mv((await $.wv([$t7], "EAMORTNB", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t7], "EPRODUCER_PLANE", C, false)), "Text")), (await $.wcall([$t7], "StrToInt", [(await $.mv((await $.wv([$t7], "EFXM", C, false)), "Text"))], C)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "MainFDataModule", C, false)), "ODSTakeDepartmentID")), "FieldByName", ["ID"])), "AsInteger")), (await $.wcall([$t7], "StrToFloat", [(await $.mv((await $.wv([$t7], "EAccrualAmort", C, false)), "Text"))], C)), (await $.wcall([$t7], "StrToFloat", [(await $.mv((await $.wv([$t7], "EAMORTTAX", C, false)), "Text"))], C))]])));
          await $.mcall((await $.wv([$t7], "ViewWares", C, false)), "Refresh", []);
          await $.stmt((await $.mcall((await $.wv([$t7], "ViewWares", C, false)), "Locate", ["ID", (await $.wv([$t7], "SearchID", { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true }, false)), [(await $.wv([$t7], "loPartialKey", C, false))]])));
          await $.mcall((await $.wv([$t7], "ODSWClose", C, false)), "Refresh", []);
          await $.stmt($.wcall([$t7], "Close", [], C));
        }
      }
    }
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
    throw $t5;
  }
  await $.mset((await $.v(C, "EMODERN_NUM")), "Text", "");
  await $.mset((await $.v(C, "EMODERN_SUMMA")), "Text", "");
  await $.mset((await $.v(C, "EREPAIR_NUM")), "TEXT", "");
  await $.mset((await $.v(C, "EREPAIR_SUMMA")), "tEXT", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omAdd"))))) {
    await $.stmt((await $.call(C, "CleanUp", [Self])));
    await $.mset((await $.v(C, "EAMORTNB")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewGroup")), "FieldByName", ["AMORT"])), "AsString")));
    await $.mset((await $.v(C, "EAMORTTAX")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewGroup")), "FieldByName", ["TAXAMORT"])), "AsString")));
    await $.mset((await $.v(C, "DTPINVENTAR_DATE")), "DateTime", (await $.mv((await $.v(C, "MainFacilities")), "GetPresentDate")));
    await $.mset((await $.v(C, "DTPMODERN")), "DateTime", (await $.mv((await $.v(C, "MainFacilities")), "GetPresentDate")));
    await $.mset((await $.v(C, "DTPREPAIR")), "DateTime", (await $.mv((await $.v(C, "MainFacilities")), "GetPresentDate")));
    await $.mset((await $.v(C, "DTPIN_DATE")), "DateTime", (await $.mv((await $.v(C, "MainFacilities")), "GetPresentDate")));
    await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "0");
    await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "0");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omEdit"))))) {
      await $.set(C, "INV_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPInventar_date")), "DateTime"))])));
      await $.set(C, "IN_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPIn_date")), "DateTime"))])));
      {
        const $t8 = (await $.v(C, "MainFDataModule"));
        await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t8], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "Open", []);
        if ($.truthy($.not((await $.mv((await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "FieldByName", ["Modern_date"])), "IsNull"))))) {
          await $.mset((await $.wv([$t8], "DTPMODERN", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "FieldByName", ["Modern_date"])), "AsDateTime")));
          await $.wset([$t8], "M", (await $.mv((await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "FieldByName", ["Modern_date"])), "AsDateTime")), C);
          await $.mset((await $.wv([$t8], "EMODERN_SUMMA", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "FieldByName", ["Modern_summa"])), "AsString")));
          await $.mset((await $.wv([$t8], "EMODERN_NUM", C, false)), "text", (await $.mv((await $.mcall((await $.wv([$t8], "ODSMODERN", C, false)), "FieldByName", ["Modern_num"])), "AsString")));
        } else {
          await $.wset([$t8], "M", (await $.wv([$t8], "Null", C, false)), C);
        }
        await $.mcall((await $.wv([$t8], "ODSREPAIR", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t8], "ODSREPAIR", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t8], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t8], "ODSREPAIR", C, false)), "Open", []);
        if ($.truthy($.not((await $.mv((await $.mcall((await $.wv([$t8], "ODSREPAIR", C, false)), "FieldByName", ["Repair_date"])), "IsNull"))))) {
          await $.mset((await $.wv([$t8], "DTPREPAIR", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t8], "ODSREPAIR", C, false)), "FieldByName", ["Repair_date"])), "AsDateTime")));
          await $.wset([$t8], "R", (await $.mv((await $.mcall((await $.wv([$t8], "ODSREPAIR", C, false)), "FieldByName", ["Repair_date"])), "AsDateTime")), C);
          await $.mset((await $.wv([$t8], "EREPAIR_SUMMA", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t8], "ODSRepair", C, false)), "FieldByName", ["Repair_summa"])), "AsString")));
          await $.mset((await $.wv([$t8], "EREPAIR_NUM", C, false)), "text", (await $.mv((await $.mcall((await $.wv([$t8], "ODSRepair", C, false)), "FieldByName", ["Repair_num"])), "AsString")));
        } else {
          await $.wset([$t8], "R", (await $.wv([$t8], "Null", C, false)), C);
        }
      }
      {
        const $t9 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTakeDepartmentID"));
        await $.stmt($.wcall([$t9], "Close", [], C));
        await $.stmt((await $.wcall([$t9], "SetVariable", ["Dname", (await $.mv((await $.wv([$t9], "CBDepartments", C, false)), "text"))], C)));
        await $.stmt($.wcall([$t9], "Open", [], C));
      }
      {
        const $t10 = (await $.mv((await $.v(C, "MainFDataModule")), "ViewWares"));
        await $.mset((await $.wv([$t10], "CBDepartments", C, false)), "text", (await $.wcall([$t10], "GetDepartmentName", [(await $.mv((await $.wcall([$t10], "FieldByName", ["Sector_cod"], C)), "AsInteger"))], C)));
        await $.mset((await $.wv([$t10], "ENAME", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Name"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EFXM", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["FXM"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EINVENTAR", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Inventar"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "DTPINVENTAR_DATE", C, false)), "DateTime", (await $.wcall([$t10], "StrToDate", [(await $.mv((await $.wcall([$t10], "FieldByName", ["Inventar_date"], C)), "AsString"))], C)));
        await $.mset((await $.wv([$t10], "EAMORTNB", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Amort"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EAMORTTAX", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Tax"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EFIRST_PRICE", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["First_price"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EBALANCE_PRICE", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Balance_price"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EIN_NUM", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["In_num"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "DTPIN_DATE", C, false)), "DateTime", (await $.wcall([$t10], "StrToDate", [(await $.mv((await $.wcall([$t10], "FieldByName", ["In_date"], C)), "AsString"))], C)));
        await $.mset((await $.wv([$t10], "EPRODUCER_PLANE", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Producer_plane"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "EAccrualAmort", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["AllAmort"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "CurrencyEdit1", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["TaxPercentPrice"], C)), "AsString")));
        await $.mset((await $.wv([$t10], "CurrencyEdit2", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["AllTaxAmort"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EMODERN_NUM")), "Text", "");
  await $.mset((await $.v(C, "EMODERN_SUMMA")), "Text", "");
  await $.mset((await $.v(C, "EREPAIR_NUM")), "TEXT", "");
  await $.mset((await $.v(C, "EREPAIR_SUMMA")), "tEXT", "");
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "CBDepartmentsClick", async function CBDepartmentsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTakeDepartmentID"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["Dname", (await $.mv((await $.wv([$t11], "CBDepartments", C, false)), "text"))], C)));
    await $.stmt($.wcall([$t11], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "transaction": $.rec("ttransaction"), "returnid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MOD_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPMODERN")), "DateTime"))])));
  if ($.truthy($.le((await $.v(C, "MOD_D")), (await $.v(C, "M"))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["V odin denğ nelğzə 2 modernizaüii!"])));
    $.abort();
  }
  await $.set(C, "OUT_D", (await $.v(C, "Null")));
  await $.set(C, "OUT_NUM", (await $.v(C, "Null")));
  try {
    {
      const $t13 = (await $.v(C, "MainFDataModule"));
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t13], "EMODERN_NUM", C, false)), "Text")), "")), async () => ($.ne((await $.mv((await $.wv([$t13], "EMODERN_SUMMA", C, false)), "Text")), "")))))) {
        await $.stmt((await $.mcall((await $.wv([$t13], "OPViewWares", C, false)), "CallProcedure", ["delete_moderned_wares", [(await $.mv((await $.mcall((await $.wv([$t13], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
        await $.stmt((await $.mcall((await $.wv([$t13], "OPViewWares", C, false)), "CallProcedure", ["add_moderned_wares", [(await $.mv((await $.mcall((await $.wv([$t13], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t13], "ViewWares", C, false)), "FieldByName", ["GroupsID"])), "AsInteger")), (await $.wcall([$t13], "StrToInt", [(await $.mv((await $.wv([$t13], "EMODERN_NUM", C, false)), "Text"))], C)), (await $.wcall([$t13], "StrToInt", [(await $.mv((await $.wv([$t13], "EMODERN_SUMMA", C, false)), "text"))], C)), (await $.wv([$t13], "MOD_D", C, false))]])));
        await $.mcall((await $.wv([$t13], "ODSMODERN", C, false)), "Refresh", []);
        await $.wset([$t13], "ReturnID", (await $.mv((await $.mcall((await $.wv([$t13], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["returnid"], set: async (v) => { L0["returnid"] = v; }, local: true });
        await $.mcall((await $.wv([$t13], "ViewWares", C, false)), "Refresh", []);
        await $.stmt((await $.mcall((await $.wv([$t13], "ViewWares", C, false)), "Locate", ["ID", (await $.wv([$t13], "ReturnID", { get: async () => L0["returnid"], set: async (v) => { L0["returnid"] = v; }, local: true }, false)), [(await $.wv([$t13], "loPartialKey", C, false))]])));
        {
          const $t14 = (await $.wv([$t13], "MainFDataModule", C, false));
          {
            const $t15 = (await $.wv([$t13, $t14], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
            await $.wset([$t13, $t14, $t15], "Size", 0, C);
            await $.wset([$t13, $t14, $t15], "TransactionDate", (await $.wv([$t13, $t14, $t15], "Mod_D", C, false)), C);
            await $.wset([$t13, $t14, $t15], "hDebit", (await $.mv((await $.mcall((await $.wv([$t13, $t14, $t15], "ViewGroup", C, false)), "FieldByName", ["Main_account"])), "Value")), C);
            await $.wset([$t13, $t14, $t15], "hCredit", (await $.mv((await $.mcall((await $.wv([$t13, $t14, $t15], "ViewGroup", C, false)), "FieldByName", ["Sale_account"])), "Value")), C);
            await $.wset([$t13, $t14, $t15], "DebitAmount", (await $.wcall([$t13, $t14, $t15], "StrToInt", [(await $.mv((await $.wv([$t13, $t14, $t15], "EMODERN_SUMMA", C, false)), "text"))], C)), C);
            await $.wset([$t13, $t14, $t15], "CreditAmount", (await $.wcall([$t13, $t14, $t15], "StrToInt", [(await $.mv((await $.wv([$t13, $t14, $t15], "EMODERN_SUMMA", C, false)), "text"))], C)), C);
            await $.wset([$t13, $t14, $t15], "LAmount", (await $.wcall([$t13, $t14, $t15], "StrToInt", [(await $.mv((await $.wv([$t13, $t14, $t15], "EMODERN_SUMMA", C, false)), "text"))], C)), C);
            await $.wset([$t13, $t14, $t15], "DebitRate", 1, C);
            await $.wset([$t13, $t14, $t15], "CreditRate", 1, C);
            await $.wset([$t13, $t14, $t15], "ParentID", 0, C);
            await $.wset([$t13, $t14, $t15], "DebitBankID", 0, C);
            await $.wset([$t13, $t14, $t15], "CreditBankID", 0, C);
            await $.wset([$t13, $t14, $t15], "FilialID", 0, C);
            await $.wset([$t13, $t14, $t15], "PackageNumber", 0, C);
            await $.wset([$t13, $t14, $t15], "InbalanceChar", 0, C);
            await $.wset([$t13, $t14, $t15], "OutBalanceChar", 0, C);
            await $.wset([$t13, $t14, $t15], "CypherCode", 0, C);
            await $.wset([$t13, $t14, $t15], "OperationCode", 0, C);
            await $.wset([$t13, $t14, $t15], "TransactionID", (-(1)), C);
            await $.wset([$t13, $t14, $t15], "TrName", "Modernləşmə", C);
            await $.wset([$t13, $t14, $t15], "IsRoot", (await $.wv([$t13, $t14, $t15], "true", C, false)), C);
            await $.wset([$t13, $t14, $t15], "ArchiveID", 0, C);
          }
          await $.stmt((await $.wcall([$t13, $t14], "SB_AddTransaction", [$.ref(async () => (await $.wv([$t13, $t14], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false)), async ($t16) => { await $.wset([$t13, $t14], "Transaction", $t16, { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }); }), []], C)));
        }
        {
          const $t17 = (await $.mv((await $.wv([$t13], "MainFDataModule", C, false)), "OPViewWares"));
          const $t18 = (await $.mv((await $.wv([$t13, $t17], "MainFDataModule", C, false)), "ViewWares"));
          await $.stmt((await $.wcall([$t13, $t17, $t18], "CallProcedure", ["add_archive_wares1", [(await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["ID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["GROUPSID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Name"], C)), "AsString")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Inventar"], C)), "AsString")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Inventar_date"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["First_price"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Balance_price"], C)), "Value")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["In_date"], C)), "AsDateTime")), (await $.wv([$t13, $t17, $t18], "OUT_D", C, false)), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["In_num"], C)), "AsInteger")), (await $.wv([$t13, $t17, $t18], "OUT_NUM", C, false)), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Amort"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["AllAmort"], C)), "Value")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Producer_plane"], C)), "AsString")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["FXM"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Sector_cod"], C)), "AsInteger")), "", (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Modern_date"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Modern_summa"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Modern_num"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Repair_date"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Repair_summa"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Repair_num"], C)), "AsInteger")), (await $.mv((await $.wcall([$t13, $t17, $t18], "FieldByName", ["Amort_date"], C)), "AsDateTime"))]], C)));
        }
        await $.wset([$t13], "M", (await $.wv([$t13], "Mod_D", C, false)), C);
      }
    }
  } catch ($t12) {
    $.rethrowControl($t12);
    $.handled($t12);
    throw $t12;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EMODERN_NUM")), "Text", "");
  await $.mset((await $.v(C, "EMODERN_SUMMA")), "Text", "");
  await $.mset((await $.v(C, "EREPAIR_NUM")), "TEXT", "");
  await $.mset((await $.v(C, "EREPAIR_SUMMA")), "tEXT", "");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmAddWares", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "MainFDataModule"));
    const $t20 = (await $.wv([$t19], "OPViewWares", C, false));
    await $.wset([$t19, $t20], "SearchID", (await $.mv((await $.mcall((await $.wv([$t19, $t20], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true });
    await $.stmt((await $.wcall([$t19, $t20], "CallProcedure", ["TempTaxUpdate", [(await $.wv([$t19, $t20], "searchid", { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t19, $t20], "CurrencyEdit1", C, false)), "value")), (await $.mv((await $.wv([$t19, $t20], "CurrencyEdit2", C, false)), "value"))]], C)));
    await $.mcall((await $.wv([$t19, $t20], "ViewWares", C, false)), "Refresh", []);
    await $.stmt((await $.mcall((await $.wv([$t19, $t20], "ViewWares", C, false)), "Locate", ["ID", (await $.wv([$t19, $t20], "SearchID", { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true }, false)), [(await $.wv([$t19, $t20], "loPartialKey", C, false))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "CBDepartmentsChange", async function CBDepartmentsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTakeDepartmentID"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.stmt((await $.wcall([$t21], "SetVariable", ["Dname", (await $.mv((await $.wv([$t21], "CBDepartments", C, false)), "text"))], C)));
    await $.stmt($.wcall([$t21], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "EFXMKeyPress", async function EFXMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ",", ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddWares", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmAddWares", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EDepartment")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["There is no department!"])));
    $.abort();
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallProcedure", ["add_departments", [(await $.mv((await $.v(C, "EDepartment")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartments")), "Refresh", []);
  {
    const $t22 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartments"));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.stmt($.wcall([$t22], "First", [], C));
    while ($.truthy($.not((await $.wv([$t22], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t22], "FrmAddWares", C, false)), "CBDepartments")), "Items")), "Add", [(await $.mv((await $.wcall([$t22], "FieldByName", ["Department"], C)), "AsString"))])));
      await $.stmt($.wcall([$t22], "Next", [], C));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "EDepartment")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EMODERN_NUM")), "Text", "");
  await $.mset((await $.v(C, "EMODERN_SUMMA")), "Text", "");
  await $.mset((await $.v(C, "EREPAIR_NUM")), "TEXT", "");
  await $.mset((await $.v(C, "EREPAIR_SUMMA")), "tEXT", "");
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EDepartment")), "text")), ""))) {
    throw $.raise((await $.mcall((await $.v(C, "EInvalidDepartment")), "Create", ["Invalid department!"])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallProcedure", ["add_departments", [(await $.mv((await $.v(C, "EDepartment")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartments")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "CBDepartments")), "Items")), "Clear", []);
  {
    const $t23 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartments"));
    await $.stmt($.wcall([$t23], "Open", [], C));
    await $.stmt($.wcall([$t23], "First", [], C));
    while ($.truthy($.not((await $.wv([$t23], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t23], "CBDepartments", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t23], "FieldByName", ["Department"], C)), "AsString"))])));
      await $.stmt($.wcall([$t23], "Next", [], C));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "EDepartment")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "transaction": $.rec("ttransaction"), "returnid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "REP_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPREPAIR")), "DateTime"))])));
  if ($.truthy($.le((await $.v(C, "REP_D")), (await $.v(C, "R"))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["V odin denğ nelğzə 2 remonta!"])));
    $.abort();
  }
  await $.set(C, "OUT_D", (await $.v(C, "Null")));
  await $.set(C, "OUT_NUM", (await $.v(C, "Null")));
  {
    const $t24 = (await $.v(C, "MainFDataModule"));
    try {
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t24], "EREPAIR_NUM", C, false)), "Text")), "")), async () => ($.ne((await $.mv((await $.wv([$t24], "EREPAIR_SUMMA", C, false)), "Text")), "")))))) {
        await $.stmt((await $.mcall((await $.wv([$t24], "OPViewWares", C, false)), "CallProcedure", ["delete_repaired_wares", [(await $.mv((await $.mcall((await $.wv([$t24], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
        await $.stmt((await $.mcall((await $.wv([$t24], "OPViewWares", C, false)), "CallProcedure", ["add_repaired_wares", [(await $.mv((await $.mcall((await $.wv([$t24], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t24], "ViewWares", C, false)), "FieldByName", ["GroupsID"])), "AsInteger")), (await $.wcall([$t24], "StrToInt", [(await $.mv((await $.wv([$t24], "EREPAIR_NUM", C, false)), "Text"))], C)), (await $.wcall([$t24], "StrToInt", [(await $.mv((await $.wv([$t24], "EREPAIR_SUMMA", C, false)), "text"))], C)), (await $.wv([$t24], "REP_D", C, false))]])));
        await $.mcall((await $.wv([$t24], "ODSREPAIR", C, false)), "Refresh", []);
        await $.wset([$t24], "ReturnID", (await $.mv((await $.mcall((await $.wv([$t24], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["returnid"], set: async (v) => { L0["returnid"] = v; }, local: true });
        await $.mcall((await $.wv([$t24], "ViewWares", C, false)), "Refresh", []);
        await $.stmt((await $.mcall((await $.wv([$t24], "ViewWares", C, false)), "Locate", ["ID", (await $.wv([$t24], "ReturnID", { get: async () => L0["returnid"], set: async (v) => { L0["returnid"] = v; }, local: true }, false)), [(await $.wv([$t24], "loPartialKey", C, false))]])));
        {
          const $t26 = (await $.wv([$t24], "MainFDataModule", C, false));
          {
            const $t27 = (await $.wv([$t24, $t26], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
            await $.wset([$t24, $t26, $t27], "Size", 0, C);
            await $.wset([$t24, $t26, $t27], "TransactionDate", (await $.wv([$t24, $t26, $t27], "Mod_D", C, false)), C);
            await $.wset([$t24, $t26, $t27], "hDebit", (await $.mv((await $.mcall((await $.wv([$t24, $t26, $t27], "ViewGroup", C, false)), "FieldByName", ["Main_account"])), "Value")), C);
            await $.wset([$t24, $t26, $t27], "hCredit", (await $.mv((await $.mcall((await $.wv([$t24, $t26, $t27], "ViewGroup", C, false)), "FieldByName", ["Sale_account"])), "Value")), C);
            await $.wset([$t24, $t26, $t27], "DebitAmount", (await $.wcall([$t24, $t26, $t27], "StrToInt", [(await $.mv((await $.wv([$t24, $t26, $t27], "ERepair_SUMMA", C, false)), "text"))], C)), C);
            await $.wset([$t24, $t26, $t27], "CreditAmount", (await $.wcall([$t24, $t26, $t27], "StrToInt", [(await $.mv((await $.wv([$t24, $t26, $t27], "ERepair_SUMMA", C, false)), "text"))], C)), C);
            await $.wset([$t24, $t26, $t27], "LAmount", (await $.wcall([$t24, $t26, $t27], "StrToInt", [(await $.mv((await $.wv([$t24, $t26, $t27], "ERepair_SUMMA", C, false)), "text"))], C)), C);
            await $.wset([$t24, $t26, $t27], "DebitRate", 1, C);
            await $.wset([$t24, $t26, $t27], "CreditRate", 1, C);
            await $.wset([$t24, $t26, $t27], "ParentID", 0, C);
            await $.wset([$t24, $t26, $t27], "DebitBankID", 0, C);
            await $.wset([$t24, $t26, $t27], "CreditBankID", 0, C);
            await $.wset([$t24, $t26, $t27], "FilialID", 0, C);
            await $.wset([$t24, $t26, $t27], "PackageNumber", 0, C);
            await $.wset([$t24, $t26, $t27], "InbalanceChar", 0, C);
            await $.wset([$t24, $t26, $t27], "OutBalanceChar", 0, C);
            await $.wset([$t24, $t26, $t27], "CypherCode", 0, C);
            await $.wset([$t24, $t26, $t27], "OperationCode", 0, C);
            await $.wset([$t24, $t26, $t27], "TransactionID", (-(1)), C);
            await $.wset([$t24, $t26, $t27], "TrName", "Əsaslı təmir", C);
            await $.wset([$t24, $t26, $t27], "IsRoot", (await $.wv([$t24, $t26, $t27], "true", C, false)), C);
            await $.wset([$t24, $t26, $t27], "ArchiveID", 0, C);
          }
          await $.stmt((await $.wcall([$t24, $t26], "SB_AddTransaction", [$.ref(async () => (await $.wv([$t24, $t26], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false)), async ($t28) => { await $.wset([$t24, $t26], "Transaction", $t28, { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }); }), []], C)));
        }
        {
          const $t29 = (await $.mv((await $.wv([$t24], "MainFDataModule", C, false)), "OPViewWares"));
          const $t30 = (await $.mv((await $.wv([$t24, $t29], "MainFDataModule", C, false)), "ViewWares"));
          await $.stmt((await $.wcall([$t24, $t29, $t30], "CallProcedure", ["add_archive_wares1", [(await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["ID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["GROUPSID"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Name"], C)), "AsString")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Inventar"], C)), "AsString")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Inventar_date"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["First_price"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Balance_price"], C)), "Value")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["In_date"], C)), "AsDateTime")), (await $.wv([$t24, $t29, $t30], "OUT_D", C, false)), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["In_num"], C)), "AsInteger")), (await $.wv([$t24, $t29, $t30], "OUT_NUM", C, false)), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Amort"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["AllAmort"], C)), "Value")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Producer_plane"], C)), "AsString")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["FXM"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Sector_cod"], C)), "AsInteger")), "", (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Modern_date"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Modern_summa"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Modern_num"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Repair_date"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Repair_summa"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Repair_num"], C)), "AsInteger")), (await $.mv((await $.wcall([$t24, $t29, $t30], "FieldByName", ["Amort_date"], C)), "AsDateTime"))]], C)));
        }
        await $.wset([$t24], "R", (await $.wv([$t24], "REP_D", C, false)), C);
      }
    } catch ($t25) {
      $.rethrowControl($t25);
      $.handled($t25);
      throw $t25;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "groupid": 0, "searchid": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omAdd"))))) {
      await $.set(C, "INV_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPINVENTAR_DATE")), "DateTime"))])));
      await $.set(C, "IN_D", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPIN_DATE")), "DateTime"))])));
      L0["groupid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewGroup")), "FieldByName", ["ID"])), "AsInteger"));
      {
        const $t32 = (await $.v(C, "MainFDataModule"));
        await $.stmt((await $.mcall((await $.wv([$t32], "OPViewWares", C, false)), "CallProcedure", ["add_wares", [(await $.wv([$t32], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t32], "ENAME", C, false)), "Text")), (await $.mv((await $.wv([$t32], "EInventar", C, false)), "Text")), (await $.wv([$t32], "INV_D", C, false)), (await $.wcall([$t32], "StrToFloat", [(await $.mv((await $.wv([$t32], "EFirst_price", C, false)), "Text"))], C)), (await $.wcall([$t32], "StrToFloat", [(await $.mv((await $.wv([$t32], "EBalance_price", C, false)), "Text"))], C)), (await $.wv([$t32], "IN_D", C, false)), (await $.wcall([$t32], "StrToInt", [(await $.mv((await $.wv([$t32], "EIn_num", C, false)), "Text"))], C)), (await $.wcall([$t32], "StrToInt", [(await $.mv((await $.wv([$t32], "EAMORTNB", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t32], "EPRODUCER_PLANE", C, false)), "Text")), (await $.wcall([$t32], "StrToInt", [(await $.mv((await $.wv([$t32], "EFXM", C, false)), "Text"))], C)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSTakeDepartmentID", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0, (await $.wcall([$t32], "StrToFloat", [(await $.mv((await $.wv([$t32], "EAccrualAmort", C, false)), "Text"))], C)), 0, 0, (await $.wcall([$t32], "StrToInt", [(await $.mv((await $.wv([$t32], "EAMORTTAX", C, false)), "Text"))], C))]])));
        await $.mcall((await $.wv([$t32], "ODSWClose", C, false)), "Refresh", []);
        await $.mcall((await $.wv([$t32], "ODSMODERN", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t32], "ODSMODERN", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t32], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t32], "ODSMODERN", C, false)), "Open", []);
        await $.mcall((await $.wv([$t32], "ODSREPAIR", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t32], "ODSREPAIR", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t32], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t32], "ODSREPAIR", C, false)), "Open", []);
        await $.mcall((await $.wv([$t32], "ViewWares", C, false)), "Refresh", []);
        await $.stmt($.wcall([$t32], "Close", [], C));
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omEdit"))))) {
        {
          const $t33 = (await $.v(C, "MainFDataModule"));
          await $.wset([$t33], "SearchID", (await $.mv((await $.mcall((await $.wv([$t33], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t33], "OPViewWares", C, false)), "CallProcedure", ["upd_wares", [(await $.mv((await $.mcall((await $.wv([$t33], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.wv([$t33], "EName", C, false)), "Text")), (await $.mv((await $.wv([$t33], "EInventar", C, false)), "Text")), (await $.mv((await $.wv([$t33], "DTPInventar_date", C, false)), "DateTime")), (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "EFirst_price", C, false)), "Text"))], C)), (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "EBalance_price", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t33], "DTPIn_date", C, false)), "DateTime")), (await $.wcall([$t33], "StrToInt", [(await $.mv((await $.wv([$t33], "EIn_num", C, false)), "Text"))], C)), (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "EAMORTNB", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t33], "EPRODUCER_PLANE", C, false)), "Text")), (await $.wcall([$t33], "StrToInt", [(await $.mv((await $.wv([$t33], "EFXM", C, false)), "Text"))], C)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "MainFDataModule", C, false)), "ODSTakeDepartmentID")), "FieldByName", ["ID"])), "AsInteger")), (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "EAccrualAmort", C, false)), "Text"))], C)), (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "EAMORTTAX", C, false)), "Text"))], C)), (await $.mv((await $.mcall((await $.wv([$t33], "ViewWares", C, false)), "FieldByName", ["GroupsID"])), "AsInteger"))]])));
          await $.mcall((await $.wv([$t33], "ViewWares", C, false)), "Refresh", []);
          await $.stmt((await $.mcall((await $.wv([$t33], "ViewWares", C, false)), "Locate", ["ID", (await $.wv([$t33], "SearchID", { get: async () => L0["searchid"], set: async (v) => { L0["searchid"] = v; }, local: true }, false)), [(await $.wv([$t33], "loPartialKey", C, false))]])));
          await $.mcall((await $.wv([$t33], "ODSWClose", C, false)), "Refresh", []);
          await $.stmt($.wcall([$t33], "Close", [], C));
        }
      }
    }
  } catch ($t31) {
    $.rethrowControl($t31);
    $.handled($t31);
    throw $t31;
  }
  await $.mset((await $.v(C, "EMODERN_NUM")), "Text", "");
  await $.mset((await $.v(C, "EMODERN_SUMMA")), "Text", "");
  await $.mset((await $.v(C, "EREPAIR_NUM")), "TEXT", "");
  await $.mset((await $.v(C, "EREPAIR_SUMMA")), "tEXT", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "ActionCancelExecute", async function ActionCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EMODERN_NUM")), "Text", "");
  await $.mset((await $.v(C, "EMODERN_SUMMA")), "Text", "");
  await $.mset((await $.v(C, "EREPAIR_NUM")), "TEXT", "");
  await $.mset((await $.v(C, "EREPAIR_SUMMA")), "tEXT", "");
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddWares", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (L0["sender"]);
    await $.wset([$t34], "Enabled", (await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.wcall([$t34], "trim", [(await $.mv((await $.wv([$t34], "ENAME", C, false)), "Text"))], C)), "")), async () => ($.ne((await $.mv((await $.wv([$t34], "EFXM", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t34], "EFIRST_PRICE", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t34], "EBALANCE_PRICE", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t34], "EAccrualAmort", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t34], "EAMORTNB", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t34], "EAMORTTAX", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t34], "EIN_NUM", C, false)), "Text")), "")))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

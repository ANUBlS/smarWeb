// Generated from UnitBalansAdd.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitBalansAdd", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "DBGridEh", "StdCtrls", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Oracle", "sboapiDataModuleImpl", "UnitBktBalans"]);
  const C = [U];
  U.defClass("TFormAdd", "TForm", {"bktname": {"name": "BKTName", "type": "TOracleDataSet"}, "dsbktname": {"name": "DSBKTName", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "odsbkt": {"name": "ODSBKT", "type": "TOracleDataSet"}, "dsbkt": {"name": "DSBKT", "type": "TDataSource"}, "dsbalanas": {"name": "DSBalanas", "type": "TDataSource"}, "odsbalans": {"name": "ODSBalans", "type": "TOracleDataSet"}, "prudensial": {"name": "prudensial", "type": "TOraclePackage"}, "odsbktid": {"name": "ODSBKTID", "type": "TFloatField"}, "odsbktdescription": {"name": "ODSBKTDESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormAdd", null, "TFormAdd");
  });
  U.method("TFormAdd", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bkttype": null, "tip": null, "balans": null};
  await $.fixArgs(L0, ["sender"]);
  L0["bkttype"] = (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"));
  L0["tip"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"));
  L0["balans"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  if ($.truthy((await $.call(C, "VarIsNull", [L0["bkttype"]])))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Bkt-ni daxil edin!!!!"])));
  }
  if ($.truthy($.eq(L0["tip"], (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Tip-i daxil edin!!!!"])));
  }
  if ($.truthy($.eq(L0["balans"], (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balansg daxil edin!!!!"])));
  }
  if ($.truthy((await $.or_((await $.or_((await $.call(C, "VarIsNull", [L0["bkttype"]])), async () => ($.eq(L0["tip"], (-(1)))))), async () => ($.eq(L0["balans"], (-(1)))))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "Prudensial")), "CallProcedure", ["BktAdd", [L0["bkttype"], L0["tip"], L0["balans"]]])));
  await $.mcall((await $.v(C, "FormAdd")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "BKTBalans")), "BKTBalans")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdd", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ODSBKT"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "Sql", C, false)), "Clear", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT1"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select idd id,A||' '||description description from bkt1 order by A"])));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT2"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select id,A||' '||description description from bkt2 order by A"])));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT3"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select * from bkt3 order by id"])));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT7"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select * from bkt7 order by id"])));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT9.1"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select idd id,A||' '||description description from bkt9_1 order by A"])));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT11"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select id,A||' '||description description from bkt11 order by A"])));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "BKTName", C, false)), "FieldByName", ["name"])), "AsString")), "BKT12"))) {
      await $.stmt((await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", ["select id,A||' '||description description from bkt12 order by A"])));
    }
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdd", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BKTName")), "Close", []);
  await $.mcall((await $.v(C, "BKTName")), "Open", []);
  await $.mcall((await $.v(C, "ODSBalans")), "Close", []);
  await $.mcall((await $.v(C, "ODSBalans")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

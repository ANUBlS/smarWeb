// Generated from setac.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("setac", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "Db", "OracleData", "cardbranch", "Unit18", "balhs", "comp", "crdtype", "banksettings", "filialaccounts", "datclose", "domesticbank", "atmendpos", "poscomission", "Unit155", "SBTranslateProc", "sboapiDataModuleImpl", "paymentsett", "excsett", "Taxfilessettings"]);
  const C = [U];
  U.defClass("TForm10", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Form10", null, "TForm10");
  });
  U.method("TForm10", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 1))) {
    await $.set(C, "Form11", (await $.mcall((await $.v(C, "TForm11")), "create", [Self])));
    await $.mcall((await $.v(C, "Form11")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 2))) {
    await $.set(C, "Form13", (await $.mcall((await $.v(C, "Tform13")), "create", [Self])));
    await $.mcall((await $.v(C, "Form13")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 4))) {
    await $.set(C, "dateclose", (await $.mcall((await $.v(C, "tdateclose")), "create", [Self])));
    await $.mcall((await $.v(C, "dateclose")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 6))) {
    await $.set(C, "domestic_bank", (await $.mcall((await $.v(C, "tdomestic_bank")), "create", [Self])));
    await $.mcall((await $.v(C, "domestic_bank")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 3))) {
    await $.set(C, "Form14", (await $.mcall((await $.v(C, "Tform14")), "create", [Self])));
    await $.mcall((await $.v(C, "Form14")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 7))) {
    await $.set(C, "Bank_Settings", (await $.mcall((await $.v(C, "TBank_Settings")), "create", [Self])));
    await $.mcall((await $.v(C, "Bank_Settings")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 5))) {
    await $.set(C, "filial_accounts", (await $.mcall((await $.v(C, "tfilial_accounts")), "create", [Self])));
    await $.mcall((await $.v(C, "filial_accounts")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 8))) {
    await $.set(C, "atmpos", (await $.mcall((await $.v(C, "tatmpos")), "create", [Self])));
    await $.mcall((await $.v(C, "atmpos")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "AsInteger")), 9))) {
    await $.set(C, "POS_COMMISION", (await $.mcall((await $.v(C, "TPOS_COMMISION")), "create", [Self])));
    await $.mcall((await $.v(C, "POS_COMMISION")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "AsInteger")), 10))) {
    await $.set(C, "PROVS", (await $.mcall((await $.v(C, "TPROVS")), "create", [Self])));
    await $.mcall((await $.v(C, "PROVS")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm10", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 1))) {
    await $.set(C, "Form11", (await $.mcall((await $.v(C, "TForm11")), "create", [Self])));
    await $.mcall((await $.v(C, "Form11")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 2))) {
    await $.set(C, "Form13", (await $.mcall((await $.v(C, "Tform13")), "create", [Self])));
    await $.mcall((await $.v(C, "Form13")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 4))) {
    await $.set(C, "dateclose", (await $.mcall((await $.v(C, "tdateclose")), "create", [Self])));
    await $.mcall((await $.v(C, "dateclose")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 6))) {
    await $.set(C, "domestic_bank", (await $.mcall((await $.v(C, "tdomestic_bank")), "create", [Self])));
    await $.mcall((await $.v(C, "domestic_bank")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 3))) {
    await $.set(C, "Form14", (await $.mcall((await $.v(C, "Tform14")), "create", [Self])));
    await $.mcall((await $.v(C, "Form14")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 7))) {
    await $.set(C, "Bank_Settings", (await $.mcall((await $.v(C, "TBank_Settings")), "create", [Self])));
    await $.mcall((await $.v(C, "Bank_Settings")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 5))) {
    await $.set(C, "filial_accounts", (await $.mcall((await $.v(C, "tfilial_accounts")), "create", [Self])));
    await $.mcall((await $.v(C, "filial_accounts")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 8))) {
    await $.set(C, "atmpos", (await $.mcall((await $.v(C, "tatmpos")), "create", [Self])));
    await $.mcall((await $.v(C, "atmpos")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "AsInteger")), 9))) {
    await $.set(C, "POS_COMMISION", (await $.mcall((await $.v(C, "TPOS_COMMISION")), "create", [Self])));
    await $.mcall((await $.v(C, "POS_COMMISION")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "AsInteger")), 10))) {
    await $.set(C, "PROVS", (await $.mcall((await $.v(C, "TPROVS")), "create", [Self])));
    await $.mcall((await $.v(C, "PROVS")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 11))) {
    await $.set(C, "card_branch", (await $.mcall((await $.v(C, "Tcard_branch")), "create", [Self])));
    await $.mcall((await $.v(C, "card_branch")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 12))) {
    await $.set(C, "paymentset", (await $.mcall((await $.v(C, "TPaymentset")), "create", [Self])));
    await $.mcall((await $.v(C, "Paymentset")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 13))) {
    await $.set(C, "Exchangesettings", (await $.mcall((await $.v(C, "TExchangesettings")), "Create", [Self])));
    await $.mcall((await $.v(C, "Exchangesettings")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "FieldByName", ["id"])), "asinteger")), 14))) {
    await $.set(C, "RbsTaxFileAccsett", (await $.mcall((await $.v(C, "TRbsTaxFileAccsett")), "Create", [Self])));
    await $.mcall((await $.v(C, "RbsTaxFileAccsett")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm10", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar"));
    await $.wset([$t1], "Filter", $.add($.add($.add("id = '", (await $.mv((await $.wv([$t1], "edit1", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm10", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar"));
    await $.wset([$t2], "Filter", $.add($.add($.add("SAZLAMALAR = '", (await $.mv((await $.wv([$t2], "edit2", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm10", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "sazlamalar")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm10", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.mv((await $.v(C, "form10")), "DBGrid1")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t3 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.mv((await $.v(C, "form10")), "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t3], "SortPosition", (await $.mcall((await $.wv([$t3], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t3], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t3], "Refresh", [], C));
    } finally {
      { const $t4 = await $.iset((await $.wv([$t3], "SQL", C, false)), [(await $.wv([$t3], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t3], "EmptyStr", C, false))); if ($t4 !== undefined) { await $.wset([$t3], "SQL", $t4, C); } }
      await $.mset((await $.wv([$t3], "Screen", C, false)), "Cursor", (await $.wv([$t3], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  return U;
}

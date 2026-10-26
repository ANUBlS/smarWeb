// Generated from UnitForeignCurrency.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitForeignCurrency", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "CMCurrencyEdit", "DBCtrls", "UnitPaymentsCredit", "ExpressDecls", "ExpDataModuleUnit"]);
  const C = [U];
  U.defClass("TFormForeignCurrency", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dblcbaccount": {"name": "DBLCBAccount", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "cmcurforeginedit": {"name": "CmCurForeginEdit", "type": "TCMCurrencyEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblcbcountry": {"name": "DBLCBCountry", "type": "TDBLookupComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormForeignCurrency", null, "TFormForeignCurrency");
  });
  U.method("TFormForeignCurrency", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLCBAccount")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın adı sahəsi seçilməyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CmCurForeginEdit")), "text")), "0.00"))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləğ sahəsi doldurulmayıb!"])));
    return L0.result;
  }
  await $.mset((await $.v(C, "ExpressVariables")), "doc_country", (await $.mv((await $.v(C, "DBLCBCountry")), "KeyValue")));
  await $.mset((await $.v(C, "ExpressVariables")), "Fc_accid", (await $.mv((await $.v(C, "DBLCBAccount")), "KeyValue")));
  await $.mset((await $.v(C, "ExpressVariables")), "Fc_amount", (await $.mv((await $.v(C, "CmCurForeginEdit")), "Value")));
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormForeignCurrency", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormForeignCurrency", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "FormPaymentsCredit"));
    await $.mcall((await $.wv([$t1], "ODSAccNo", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSAccNo", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSCountry", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSCountry", C, false)), "Open", []);
    if ($.truthy($.eq((await $.wv([$t1], "FForm", C, false)), 0))) {
      await $.mset((await $.wv([$t1], "DBLCBCountry", C, false)), "KeyValue", (-(1)));
      await $.mset((await $.wv([$t1], "DBLCBAccount", C, false)), "KeyValue", (-(1)));
      await $.mset((await $.wv([$t1], "CmCurForeginEdit", C, false)), "Text", "0.00");
    } else {
      await $.mset((await $.wv([$t1], "DBLCBCountry", C, false)), "KeyValue", (await $.mv((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSetCOUNTRYID")), "AsInteger")));
      await $.mset((await $.wv([$t1], "DBLCBAccount", C, false)), "KeyValue", (await $.mv((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSetDEBETACCID")), "AsInteger")));
      await $.mset((await $.wv([$t1], "CmCurForeginEdit", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSetCOMISSIONAMOUNT")), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

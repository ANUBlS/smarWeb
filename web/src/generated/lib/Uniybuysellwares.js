// Generated from Uniybuysellwares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Uniybuysellwares", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "StdCtrls", "ImgList", "ToolWin", "Grids", "DBGrids", "UnitDat", "UnitData"]);
  const C = [U];
  U.defClass("TFormbuysellwares", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("Formbuysellwares", null, "TFormbuysellwares");
    U.var_("vbyors", 0, "integer");
  });
  U.method("TFormbuysellwares", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDatabuy")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDatabuy")), "Open", []);
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "DataModWares")), "DataSourcebuy")));
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDatabuy")), "Refresh", []);
      await $.set(C, "vbyors", 0);
    }
    else if ($.eq($t1, 1)) {
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSetsell")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSetsell")), "Open", []);
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "DataModWares")), "DataSourcesell")));
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSetsell")), "Refresh", []);
      await $.set(C, "vbyors", 1);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormbuysellwares", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "amountstr": '', "v_amount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["amountstr"] = (await $.call(C, "InputBox", ["Məbləğ Daxil edin", "", "0"]));
  if ($.truthy((await $.or_(($.eq(L0["amountstr"], "")), async () => ($.eq(L0["amountstr"], "0")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləğ daxil edilməyib!!!!"])));
    return L0.result;
  } else {
    if ($.truthy($.not((await $.call(C, "TryStrToFloat", [L0["amountstr"], $.ref(async () => L0["v_amount"], async ($t2) => { L0["v_amount"] = $t2; })]))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Məbləğ daxil edilməyib!!!!"])));
      return L0.result;
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["settransaction_buy_sell", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["wares_id"])), "AsInteger")), L0["v_amount"], (await $.v(C, "vbyors"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

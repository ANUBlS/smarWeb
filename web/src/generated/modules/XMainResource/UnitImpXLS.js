// Generated from UnitImpXLS.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitImpXLS", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "OleServer", "ExcelXP", "ComCtrls", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormImpXLS", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "cboxstartrow": {"name": "CBoxStartRow", "type": "TComboBox"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "excelapp": {"name": "ExcelApp", "type": "TExcelApplication"}, "opendlg": {"name": "OpenDlg", "type": "TOpenDialog"}, "labelselrow": {"name": "LabelSelRow", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtplastamort_date": {"name": "DTPLastAmort_date", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormImpXLS", null, "TFormImpXLS");
  });
  U.method("TFormImpXLS", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxStartRow")), "ItemIndex", 0);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormImpXLS", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "row": 0, "cellstr": '', "v_wares_name": '', "v_inventar_date": 0, "v_groups_id": 0, "v_first_price": 0, "v_remainder": 0, "v_amort": 0, "v_all_amort": 0, "v_percent": 0, "v_tax_first_price": 0, "v_tax_remainder": 0, "v_tax_amort": 0, "v_tax_all_amort": 0, "v_tax_percent": 0, "v_amort_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["startrow"] = 3;
  L0["rootcell"] = 1;
  L0["row"] = L0["startrow"];
  L0["v"] = (await $.mv((await $.v(C, "ExcelApp")), "Application"));
  await $.mcall((await $.v(C, "ExcelApp")), "Connect", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenDlg")), "Execute")))) {
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDlg")), "FileName"))])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["amort"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    L0["cellstr"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["rootcell"]]));
    while ($.truthy($.ne(L0["cellstr"], ""))) {
      L0["v_amort_date"] = (await $.call(C, "Int", [(await $.mv((await $.v(C, "DTPLastAmort_date")), "DateTime"))]));
      L0["v_groups_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["id"])), "asinteger"));
      L0["v_wares_name"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 1]));
      L0["v_inventar_date"] = (await $.call(C, "Int", [(await $.call(C, "StrToDateTime", [(await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 2]))]))]));
      L0["v_percent"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 3]));
      L0["v_first_price"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 4]));
      L0["v_all_amort"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 5]));
      L0["v_amort"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 6]));
      L0["v_remainder"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 7]));
      L0["v_tax_percent"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 8]));
      L0["v_tax_first_price"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 9]));
      L0["v_tax_all_amort"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 10]));
      L0["v_tax_amort"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 11]));
      L0["v_tax_remainder"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 12]));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["row"], async ($t1) => { L0["row"] = $t1; })])));
      L0["cellstr"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["rootcell"]]));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["add_wares", [L0["v_wares_name"], L0["v_inventar_date"], L0["v_groups_id"], L0["v_first_price"], L0["v_remainder"], L0["v_amort"], L0["v_all_amort"], L0["v_percent"], L0["v_tax_first_price"], L0["v_tax_remainder"], L0["v_tax_amort"], L0["v_tax_all_amort"], L0["v_tax_percent"], L0["v_amort_date"], "", ""]])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "ExcelApp")), "Quit", []);
  await $.mcall((await $.v(C, "ExcelApp")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from UntTaxPercents.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntTaxPercents", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCGrids", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGrids", "Db", "OracleData", "ExtCtrls", "Excel97", "OleServer", "MFDataModule", "UntMainFacilitiesImpl"]);
  const C = [U];
  U.defClass("TFrmTaxPercents", "TForm", {"excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "dbtaxpercents": {"name": "DBTaxPercents", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "labelprint": {"name": "LabelPrint", "type": "TLabel"}, "ename": {"name": "EName", "type": "TEdit"}, "efirst_price": {"name": "EFirst_Price", "type": "TEdit"}, "ealltaxamort": {"name": "EAllTaxAmort", "type": "TEdit"}, "etaxamort": {"name": "ETaxAmort", "type": "TEdit"}, "cbgroups": {"name": "CBGroups", "type": "TComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "efprice": {"name": "EFPrice", "type": "TEdit"}, "ebprice": {"name": "EBPrice", "type": "TEdit"}, "eamort": {"name": "EAmort", "type": "TEdit"}, "erest": {"name": "ERest", "type": "TEdit"}, "rate": {"name": "Rate", "type": "array"}}, {});
  U.fieldInit("TFrmTaxPercents", "rate", () => []);
  U.init(async () => {
    U.var_("FrmTaxPercents", null, "TFrmTaxPercents");
  });
  U.method("TFrmTaxPercents", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "DBTaxPercents")), "DataSource")), "DataSet"));
    if ($.truthy($.not((await $.wv([$t1], "Active", C, false))))) {
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
  }
  {
    const $t2 = (await $.v(C, "MainFacilities"));
    const $t3 = (await $.wv([$t2], "MainFDataModule", C, false));
    await $.stmt((await $.wcall([$t2, $t3], "PustToComboID", [(await $.wv([$t2, $t3], "ODSGroupFilter", C, false)), "Name", "ID", (await $.wv([$t2, $t3], "CBGroups", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTaxPercents", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents"));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", "Select * From Wares Order by Balance_price");
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "rate")), async ($t5) => { await $.set(C, "rate", $t5); }), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTaxPercents", "ENameExit", async function ENameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = L0["sender"];
    await $.wset([$t6], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTaxPercents", "PustToComboID", async function PustToComboID(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex": 0, "saveplace": null};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex"] = 0;
  {
    const $t7 = L0["dataset"];
    await $.wset([$t7], "SavePlace", (await $.wv([$t7], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t7], "Active", C, false)), (await $.wv([$t7], "false", C, false))))) {
      await $.stmt($.wcall([$t7], "Open", [], C));
    }
    await $.stmt((await $.wcall([$t7], "SetLength", [$.ref(async () => (await $.wv([$t7], "Rate", C, false)), async ($t8) => { await $.wset([$t7], "Rate", $t8, C); }), (await $.wv([$t7], "RecordCount", C, false))], C)));
    await $.mcall((await $.mv((await $.wv([$t7], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", ["Bütün qruplar"])));
    try {
      await $.stmt($.wcall([$t7], "DisableControls", [], C));
      await $.stmt($.wcall([$t7], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t7], "Eof", C, false)))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t7], "FieldByName", [(await $.wv([$t7], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString"))])));
        { const $t9 = await $.iset((await $.wv([$t7], "Rate", C, false)), [(await $.wv([$t7], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t7], "FieldByName", [(await $.wv([$t7], "IDfield", { get: async () => L0["idfield"], set: async (v) => { L0["idfield"] = v; }, local: true }, false))], C)), "AsInteger"))); if ($t9 !== undefined) { await $.wset([$t7], "Rate", $t9, C); } }
        await $.stmt($.wcall([$t7], "Next", [], C));
        await $.stmt((await $.wcall([$t7], "Inc", [$.ref(async () => (await $.wv([$t7], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t7], "RateIndex", $t10, { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }); })], C)));
        await $.tick();
      }
    } finally {
      await $.stmt((await $.wcall([$t7], "GotoBookmark", [(await $.wv([$t7], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7], "FreeBookmark", [(await $.wv([$t7], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t7], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TFrmTaxPercents", "ENameChange", async function ENameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 2, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBTaxPercents")), "DataSource")), "DataSet")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTaxPercents", "CBGroupsChange", async function CBGroupsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "firstprice": 0, "balanceprice": 0, "alltaxamort": 0, "taxamort": 0, "groupsid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "ItemIndex")), 0))) {
    {
      const $t11 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents"));
      await $.stmt($.wcall([$t11], "Close", [], C));
      await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", "Select * From Wares Order by ID,Balance_price");
      await $.stmt($.wcall([$t11], "Open", [], C));
    }
  } else {
    {
      const $t12 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents"));
      await $.stmt($.wcall([$t12], "Close", [], C));
      await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add("Select * From Wares Where GroupsID=", (await $.wcall([$t12], "IntToStr", [(await $.idx((await $.wv([$t12], "Rate", C, false)), [$.sub((await $.mv(((await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "ItemIndex")), 1)]))], C))), " Order by ID,Balance_price"));
      await $.stmt($.wcall([$t12], "Open", [], C));
    }
  }
  L0["groupsid"] = (await $.idx((await $.v(C, "Rate")), [$.sub((await $.mv((L0["sender"]), "ItemIndex")), 1)]));
  {
    const $t13 = (await $.v(C, "MainFacilities"));
    await $.stmt((await $.wcall([$t13], "SumGroupDetailsForTax", [(await $.wv([$t13], "GroupsID", { get: async () => L0["groupsid"], set: async (v) => { L0["groupsid"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t13], "FirstPrice", { get: async () => L0["firstprice"], set: async (v) => { L0["firstprice"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t13], "FirstPrice", $t14, { get: async () => L0["firstprice"], set: async (v) => { L0["firstprice"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t13], "BalancePrice", { get: async () => L0["balanceprice"], set: async (v) => { L0["balanceprice"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t13], "BalancePrice", $t15, { get: async () => L0["balanceprice"], set: async (v) => { L0["balanceprice"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t13], "AllTaxAmort", { get: async () => L0["alltaxamort"], set: async (v) => { L0["alltaxamort"] = v; }, local: true }, false)), async ($t16) => { await $.wset([$t13], "AllTaxAmort", $t16, { get: async () => L0["alltaxamort"], set: async (v) => { L0["alltaxamort"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t13], "TaxAmort", { get: async () => L0["taxamort"], set: async (v) => { L0["taxamort"] = v; }, local: true }, false)), async ($t17) => { await $.wset([$t13], "TaxAmort", $t17, { get: async () => L0["taxamort"], set: async (v) => { L0["taxamort"] = v; }, local: true }); })], C)));
  }
  await $.mset((await $.v(C, "EFPrice")), "text", (await $.call(C, "FormatFloat", ["#,##.00", L0["firstprice"]])));
  await $.mset((await $.v(C, "EBPrice")), "text", (await $.call(C, "FormatFloat", ["#,##.00", L0["balanceprice"]])));
  await $.mset((await $.v(C, "EAmort")), "text", (await $.call(C, "FormatFloat", ["#,##.00", L0["alltaxamort"]])));
  await $.mset((await $.v(C, "ERest")), "text", (await $.call(C, "FormatFloat", ["#,##.00", L0["taxamort"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTaxPercents", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_F2")))))) {
    try {
      L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
      { const $t18 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t18 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t18); } }
      await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "/Wares.xls")])));
      L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Tax"]));
      L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
      await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Activate", []);
      await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "Clear", []);
      await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "AutoFormat", [1, 0, true, 0, 0, 0, 1])));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "Font")), "Size", 10);
      L0["row"] = 6;
      L0["cell"] = 1;
      await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "First", []);
      { const $t19 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "RecordCount"));
        L0["j"] = 1;
        let $t20 = true;
        for (;;) {
          if (!$t20) { L0["j"] = $.succ(L0["j"], 1); }
          $t20 = false;
          if (!($.ord(L0["j"]) <= $.ord($t19))) break;
          L0["cell"] = 1;
          { const $t21 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "FieldCount")), 4);
            L0["i"] = 0;
            let $t22 = true;
            for (;;) {
              if (!$t22) { L0["i"] = $.succ(L0["i"], 1); }
              $t22 = false;
              if (!($.ord(L0["i"]) <= $.ord($t21))) break;
              await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
              { const $t23 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "Fields")), [L0["i"]])), "AsString"))); if ($t23 !== undefined) { await $.mset(L0["sheet"], "cells", $t23); } }
              L0["cell"] = $.add(L0["cell"], 1);
              await $.tick();
            }
          }
          L0["row"] = $.add(L0["row"], 1);
          await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "Next", []);
          await $.tick();
        }
      }
    } finally {
      L0["v"] = (await $.v(C, "null"));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmTaxPercents", "LabelPrintClick", async function LabelPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    { const $t24 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t24 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t24); } }
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "/Wares.xls")])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Tax"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Activate", []);
    await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "Clear", []);
    await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "AutoFormat", [1, 0, true, 0, 0, 0, 1])));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Tax"])), "Range")), ["A6:CA99"])), "Font")), "Size", 10);
    L0["row"] = 6;
    L0["cell"] = 1;
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "First", []);
    { const $t25 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "RecordCount"));
      L0["j"] = 1;
      let $t26 = true;
      for (;;) {
        if (!$t26) { L0["j"] = $.succ(L0["j"], 1); }
        $t26 = false;
        if (!($.ord(L0["j"]) <= $.ord($t25))) break;
        L0["cell"] = 1;
        { const $t27 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "FieldCount")), 4);
          L0["i"] = 0;
          let $t28 = true;
          for (;;) {
            if (!$t28) { L0["i"] = $.succ(L0["i"], 1); }
            $t28 = false;
            if (!($.ord(L0["i"]) <= $.ord($t27))) break;
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
            { const $t29 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "Fields")), [L0["i"]])), "AsString"))); if ($t29 !== undefined) { await $.mset(L0["sheet"], "cells", $t29); } }
            L0["cell"] = $.add(L0["cell"], 1);
            await $.tick();
          }
        }
        L0["row"] = $.add(L0["row"], 1);
        await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSTaxPercents")), "Next", []);
        await $.tick();
      }
    }
  } finally {
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTaxPercents", "LabelPrintMouseMove", async function LabelPrintMouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  await $.mset((await $.mv(L0["sender"], "Font")), "Color", (await $.v(C, "clBlue")));
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TFrmTaxPercents", "Panel1MouseMove", async function Panel1MouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  await $.mset((await $.mv((await $.v(C, "LabelPrint")), "Font")), "Color", (await $.v(C, "clWindowText")));
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  return U;
}

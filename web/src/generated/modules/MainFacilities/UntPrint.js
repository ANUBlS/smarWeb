// Generated from UntPrint.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntPrint", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Excel97", "OleServer", "OracleData", "MFDataModule", "UntMainFacilitiesImpl", "UntRptMainF", "UntDifferenceReport"]);
  const C = [U];
  U.defClass("TFrmPrint", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "rbwares": {"name": "RBWares", "type": "TRadioButton"}, "rbgroups": {"name": "RBGroups", "type": "TRadioButton"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "cbgroupsfilter": {"name": "CBGroupsFilter", "type": "TComboBox"}, "rbdepartments": {"name": "RBDepartments", "type": "TRadioButton"}, "rbdifferencereport": {"name": "RBDifferenceReport", "type": "TRadioButton"}, "chbcopyoff": {"name": "CHBCopyOff", "type": "TCheckBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "rate": {"name": "Rate", "type": "array"}, "headdescription": {"name": "HeadDescription", "type": "String"}}, {});
  U.fieldInit("TFrmPrint", "rate", () => []);
  U.init(async () => {
    U.var_("FrmPrint", null, "TFrmPrint");
  });
  U.method("TFrmPrint", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0, "fieldvalue": '', "firstprice": 0, "balanceprice": 0, "allamort": 0, "remainder": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["informationmessage"] = "\"%s\" tarixinə əsas vəsaitlər haqqında məlumat ";
  if ($.truthy((await $.mv((await $.v(C, "RBGroups")), "Checked")))) {
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Open", []);
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    { const $t1 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t1 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t1); } }
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "/Wares.xls")])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Group"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Activate", []);
    await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "Clear", []);
    await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "AutoFormat", [1, 0, true, 0, 0, 0, 1])));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "Font")), "Size", 10);
    L0["row"] = 5;
    L0["cell"] = 1;
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "First", []);
    { const $t2 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "RecordCount"));
      L0["j"] = 1;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["j"] = $.succ(L0["j"], 1); }
        $t3 = false;
        if (!($.ord(L0["j"]) <= $.ord($t2))) break;
        L0["cell"] = 1;
        { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "FieldCount")), 1);
          L0["i"] = 1;
          let $t5 = true;
          for (;;) {
            if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
            $t5 = false;
            if (!($.ord(L0["i"]) <= $.ord($t4))) break;
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
            { const $t6 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Fields")), [L0["i"]])), "AsString"))); if ($t6 !== undefined) { await $.mset(L0["sheet"], "cells", $t6); } }
            L0["cell"] = $.add(L0["cell"], 1);
            await $.tick();
          }
        }
        L0["row"] = $.add(L0["row"], 1);
        await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Next", []);
        await $.tick();
      }
    }
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Close", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "RBWares")), "Checked")))) {
    {
      const $t7 = (await $.v(C, "MainFDataModule"));
      await $.mcall((await $.wv([$t7], "M1", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t8 = await $.iset((await $.mv((await $.wv([$t7], "M1", C, false)), "SQL")), [7], ""); if ($t8 !== undefined) { await $.mset((await $.wv([$t7], "M1", C, false)), "SQL", $t8); } }
      } else {
        { const $t9 = await $.iset((await $.mv((await $.wv([$t7], "M1", C, false)), "SQL")), [7], $.add("where  GroupsID =", (await $.wcall([$t7], "IntToStr", [(await $.idx((await $.wv([$t7], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t9 !== undefined) { await $.mset((await $.wv([$t7], "M1", C, false)), "SQL", $t9); } }
      }
      await $.mcall((await $.wv([$t7], "M1", C, false)), "Open", []);
      await $.mcall((await $.wv([$t7], "R1", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t10 = await $.iset((await $.mv((await $.wv([$t7], "R1", C, false)), "SQL")), [7], ""); if ($t10 !== undefined) { await $.mset((await $.wv([$t7], "R1", C, false)), "SQL", $t10); } }
      } else {
        { const $t11 = await $.iset((await $.mv((await $.wv([$t7], "R1", C, false)), "SQL")), [7], $.add("where  GroupsID =", (await $.wcall([$t7], "IntToStr", [(await $.idx((await $.wv([$t7], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t11 !== undefined) { await $.mset((await $.wv([$t7], "R1", C, false)), "SQL", $t11); } }
      }
      await $.mcall((await $.wv([$t7], "R1", C, false)), "Open", []);
      await $.mcall((await $.wv([$t7], "ExcelPreviewCurrent", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t12 = await $.iset((await $.mv((await $.wv([$t7], "ExcelPreviewCurrent", C, false)), "SQL")), [15], ""); if ($t12 !== undefined) { await $.mset((await $.wv([$t7], "ExcelPreviewCurrent", C, false)), "SQL", $t12); } }
      } else {
        { const $t13 = await $.iset((await $.mv((await $.wv([$t7], "ExcelPreviewCurrent", C, false)), "SQL")), [15], $.add("where  GroupsID =", (await $.wcall([$t7], "IntToStr", [(await $.idx((await $.wv([$t7], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t13 !== undefined) { await $.mset((await $.wv([$t7], "ExcelPreviewCurrent", C, false)), "SQL", $t13); } }
      }
      await $.mcall((await $.wv([$t7], "ExcelPreviewCurrent", C, false)), "Open", []);
      await $.mcall((await $.wv([$t7], "ExcelPreviewCopyOff", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t14 = await $.iset((await $.mv((await $.wv([$t7], "ExcelPreviewCopyOff", C, false)), "SQL")), [24], " Where not out_num is null  "); if ($t14 !== undefined) { await $.mset((await $.wv([$t7], "ExcelPreviewCopyOff", C, false)), "SQL", $t14); } }
      } else {
        { const $t15 = await $.iset((await $.mv((await $.wv([$t7], "ExcelPreviewCopyOff", C, false)), "SQL")), [24], $.add(" Where not out_num is null and GroupsID =", (await $.wcall([$t7], "IntToStr", [(await $.idx((await $.wv([$t7], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t7], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t15 !== undefined) { await $.mset((await $.wv([$t7], "ExcelPreviewCopyOff", C, false)), "SQL", $t15); } }
      }
      await $.mcall((await $.wv([$t7], "ExcelPreviewCopyOff", C, false)), "Open", []);
    }
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    { const $t16 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t16 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t16); } }
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "/Wares.xls")])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Main"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Activate", []);
    await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "Clear", []);
    await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "AutoFormat", [1, 0, true, 0, 0, 0, 1])));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "Font")), "Size", 8);
    L0["row"] = 6;
    L0["cell"] = 1;
    { const $t17 = await $.iset((await $.mv(L0["sheet"], "cells")), [1, 5], (await $.mv((await $.v(C, "CBGroupsFilter")), "Text"))); if ($t17 !== undefined) { await $.mset(L0["sheet"], "cells", $t17); } }
    { const $t18 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "RecordCount"));
      L0["j"] = 1;
      let $t19 = true;
      for (;;) {
        if (!$t19) { L0["j"] = $.succ(L0["j"], 1); }
        $t19 = false;
        if (!($.ord(L0["j"]) <= $.ord($t18))) break;
        L0["cell"] = 1;
        { const $t20 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "FieldCount")), 1);
          L0["i"] = 0;
          let $t21 = true;
          for (;;) {
            if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
            $t21 = false;
            if (!($.ord(L0["i"]) <= $.ord($t20))) break;
            L0["fieldvalue"] = (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "Fields")), [L0["i"]])), "AsString"));
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
            { const $t22 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], L0["fieldvalue"]); if ($t22 !== undefined) { await $.mset(L0["sheet"], "cells", $t22); } }
            L0["cell"] = $.add(L0["cell"], 1);
            await $.tick();
          }
        }
        L0["row"] = $.add(L0["row"], 1);
        await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "Next", []);
        await $.tick();
      }
    }
    if ($.truthy((await $.mv((await $.v(C, "CHBCopyOff")), "Checked")))) {
      { const $t23 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "RecordCount"));
        L0["j"] = 1;
        let $t24 = true;
        for (;;) {
          if (!$t24) { L0["j"] = $.succ(L0["j"], 1); }
          $t24 = false;
          if (!($.ord(L0["j"]) <= $.ord($t23))) break;
          L0["cell"] = 1;
          { const $t25 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "FieldCount")), 1);
            L0["i"] = 0;
            let $t26 = true;
            for (;;) {
              if (!$t26) { L0["i"] = $.succ(L0["i"], 1); }
              $t26 = false;
              if (!($.ord(L0["i"]) <= $.ord($t25))) break;
              L0["fieldvalue"] = (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "Fields")), [L0["i"]])), "AsString"));
              await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
              { const $t27 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], L0["fieldvalue"]); if ($t27 !== undefined) { await $.mset(L0["sheet"], "cells", $t27); } }
              L0["cell"] = $.add(L0["cell"], 1);
              await $.tick();
            }
          }
          L0["row"] = $.add(L0["row"], 1);
          await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "Next", []);
          await $.tick();
        }
      }
    }
    {
      const $t28 = (await $.v(C, "MainFacilities"));
      const $t29 = (await $.mv((await $.wv([$t28], "MainFDataModule", C, false)), "ViewGroup"));
      await $.stmt((await $.wcall([$t28, $t29], "SumGroupDetails", [(await $.idx((await $.mv(Self, "Rate")), [(await $.mv((await $.wv([$t28, $t29], "CBGroupsFilter", C, false)), "ItemIndex"))])), $.ref(async () => (await $.wv([$t28, $t29], "FirstPrice", { get: async () => L0["firstprice"], set: async (v) => { L0["firstprice"] = v; }, local: true }, false)), async ($t30) => { await $.wset([$t28, $t29], "FirstPrice", $t30, { get: async () => L0["firstprice"], set: async (v) => { L0["firstprice"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t28, $t29], "BalancePrice", { get: async () => L0["balanceprice"], set: async (v) => { L0["balanceprice"] = v; }, local: true }, false)), async ($t31) => { await $.wset([$t28, $t29], "BalancePrice", $t31, { get: async () => L0["balanceprice"], set: async (v) => { L0["balanceprice"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t28, $t29], "AllAmort", { get: async () => L0["allamort"], set: async (v) => { L0["allamort"] = v; }, local: true }, false)), async ($t32) => { await $.wset([$t28, $t29], "AllAmort", $t32, { get: async () => L0["allamort"], set: async (v) => { L0["allamort"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t28, $t29], "Remainder", { get: async () => L0["remainder"], set: async (v) => { L0["remainder"] = v; }, local: true }, false)), async ($t33) => { await $.wset([$t28, $t29], "Remainder", $t33, { get: async () => L0["remainder"], set: async (v) => { L0["remainder"] = v; }, local: true }); })], C)));
    }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 7])), "Font")), "Size", 12);
    { const $t34 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], 7], (await $.call(C, "FloatToStr", [L0["firstprice"]]))); if ($t34 !== undefined) { await $.mset(L0["sheet"], "cells", $t34); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 11])), "Font")), "Size", 12);
    { const $t35 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], 11], (await $.call(C, "FloatToStr", [L0["allamort"]]))); if ($t35 !== undefined) { await $.mset(L0["sheet"], "cells", $t35); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 2])), "Font")), "Size", 12);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 4])), "Font")), "Size", 12);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 2])), "Font")), "Size", 12);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 4])), "Font")), "Size", 12);
    { const $t36 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 2], "İlkin dəyərlər: "); if ($t36 !== undefined) { await $.mset(L0["sheet"], "cells", $t36); } }
    { const $t37 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 4], (await $.call(C, "FloatToStr", [L0["firstprice"]]))); if ($t37 !== undefined) { await $.mset(L0["sheet"], "cells", $t37); } }
    { const $t38 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 2], "Yığılmış amortizasiya: "); if ($t38 !== undefined) { await $.mset(L0["sheet"], "cells", $t38); } }
    { const $t39 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 4], (await $.call(C, "FloatToStr", [L0["allamort"]]))); if ($t39 !== undefined) { await $.mset(L0["sheet"], "cells", $t39); } }
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "Close", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "RBDepartments")), "Checked")))) {
    {
      const $t40 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartmentsPrint"));
      const $t41 = (await $.wv([$t40], "RptDepartments", C, false));
      if ($.truthy($.eq((await $.mv((await $.wv([$t40, $t41], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t42 = await $.iset((await $.wv([$t40, $t41], "SQL", C, false)), [4], ""); if ($t42 !== undefined) { await $.wset([$t40, $t41], "SQL", $t42, C); } }
      } else {
        { const $t43 = await $.iset((await $.wv([$t40, $t41], "SQL", C, false)), [4], $.add("Where sector_cod =", (await $.wcall([$t40, $t41], "IntToStr", [(await $.idx((await $.wv([$t40, $t41], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t40, $t41], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t43 !== undefined) { await $.wset([$t40, $t41], "SQL", $t43, C); } }
      }
      if ($.truthy((await $.wv([$t40, $t41], "Active", C, false)))) {
        await $.stmt($.wcall([$t40, $t41], "Close", [], C));
      }
      await $.stmt($.wcall([$t40, $t41], "Open", [], C));
      await $.mset((await $.wv([$t40, $t41], "QRMainName", C, false)), "Caption", (await $.mv((await $.wv([$t40, $t41], "CBGroupsFilter", C, false)), "Text")));
      await $.mset((await $.wv([$t40, $t41], "QRDateFormat", C, false)), "Caption", (await $.wcall([$t40, $t41], "Format", [(await $.wv([$t40, $t41], "InformationMessage", { get: async () => L0["informationmessage"], set: async (v) => { L0["informationmessage"] = v; }, local: true }, false)), [(await $.wcall([$t40, $t41], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t40, $t41], "MainFacilities", C, false)), "GetPresentDate"))], C))]], C)));
      await $.stmt($.wcall([$t40, $t41], "Preview", [], C));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "RBDifferenceReport")), "Checked")))) {
    await $.stmt($.call(C, "DifferenceReport", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "RBWaresClick", async function RBWaresClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBGroupsFilter")), "Enabled", (await $.mv((L0["sender"]), "Checked")));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t44) => { await $.set(C, "Rate", $t44); }), 0])));
  }
  await $.set(C, "HeadDescription", "Bütün Vəsaitlər Üzrə");
  {
    const $t45 = (await $.v(C, "MainFacilities"));
    const $t46 = (await $.wv([$t45], "MainFDataModule", C, false));
    await $.stmt((await $.wcall([$t45, $t46], "PustToComboID", [(await $.wv([$t45, $t46], "ODSGroupFilter", C, false)), "Name", "ID", (await $.wv([$t45, $t46], "CBGroupsFilter", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "RBGroupsClick", async function RBGroupsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBGroupsFilter")), "Enabled", $.not((await $.mv((L0["sender"]), "Checked"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmPrint", "PustToComboID", async function PustToComboID(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex": 0, "saveplace": null};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex"] = 0;
  {
    const $t47 = L0["dataset"];
    if ($.truthy($.eq((await $.wv([$t47], "Active", C, false)), (await $.wv([$t47], "false", C, false))))) {
      await $.stmt($.wcall([$t47], "Open", [], C));
    }
    await $.wset([$t47], "SavePlace", (await $.wv([$t47], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt((await $.wcall([$t47], "SetLength", [$.ref(async () => (await $.wv([$t47], "Rate", C, false)), async ($t48) => { await $.wset([$t47], "Rate", $t48, C); }), (await $.wv([$t47], "RecordCount", C, false))], C)));
    await $.mcall((await $.mv((await $.wv([$t47], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t47], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", [(await $.wv([$t47], "HeadDescription", C, false))])));
    try {
      await $.stmt($.wcall([$t47], "DisableControls", [], C));
      await $.stmt($.wcall([$t47], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t47], "Eof", C, false)))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t47], "ComboBox", { get: async () => L0["combobox"], set: async (v) => { L0["combobox"] = v; }, local: true }, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t47], "FieldByName", [(await $.wv([$t47], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString"))])));
        { const $t49 = await $.iset((await $.wv([$t47], "Rate", C, false)), [(await $.wv([$t47], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t47], "FieldByName", [(await $.wv([$t47], "IDfield", { get: async () => L0["idfield"], set: async (v) => { L0["idfield"] = v; }, local: true }, false))], C)), "AsInteger"))); if ($t49 !== undefined) { await $.wset([$t47], "Rate", $t49, C); } }
        await $.stmt($.wcall([$t47], "Next", [], C));
        await $.stmt((await $.wcall([$t47], "Inc", [$.ref(async () => (await $.wv([$t47], "RateIndex", { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }, false)), async ($t50) => { await $.wset([$t47], "RateIndex", $t50, { get: async () => L0["rateindex"], set: async (v) => { L0["rateindex"] = v; }, local: true }); })], C)));
        await $.tick();
      }
    } finally {
      await $.stmt((await $.wcall([$t47], "GotoBookmark", [(await $.wv([$t47], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t47], "FreeBookmark", [(await $.wv([$t47], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t47], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TFrmPrint", "DifferenceReport", async function DifferenceReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "sqlstr": ''};
  {
    const $t51 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.wset([$t51], "SqlStr", (await $.wcall([$t51], "CallStringFunction", ["DifferenceReport", []], C)), { get: async () => L0["sqlstr"], set: async (v) => { L0["sqlstr"] = v; }, local: true });
  }
  try {
    await $.set(C, "RPTDifferenceReport", (await $.mcall((await $.v(C, "TRPTDifferenceReport")), "Create", [Self])));
    {
      const $t52 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSDifferenceReport"));
      if ($.truthy($.eq((await $.wv([$t52], "Active", C, false)), (await $.wv([$t52], "True", C, false))))) {
        await $.stmt($.wcall([$t52], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t52], "SetVariable", ["AStrParam", (await $.wv([$t52], "SqlStr", { get: async () => L0["sqlstr"], set: async (v) => { L0["sqlstr"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t52], "Open", [], C));
    }
    await $.mset((await $.mv((await $.v(C, "RPTDifferenceReport")), "QRReportTitle")), "Caption", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "MainFacilities")), "GetPresentDate"))])));
    await $.mcall((await $.v(C, "RPTDifferenceReport")), "Preview", []);
  } finally {
    await $.mcall((await $.v(C, "RPTDifferenceReport")), "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmPrint", "CBGroupsFilterChange", async function CBGroupsFilterChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "RBDepartmentsClick", async function RBDepartmentsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBGroupsFilter")), "Enabled", (await $.mv((L0["sender"]), "Checked")));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t53) => { await $.set(C, "Rate", $t53); }), 0])));
  }
  await $.set(C, "HeadDescription", "Ümumi Bank Üzrə");
  {
    const $t54 = (await $.v(C, "MainFacilities"));
    const $t55 = (await $.wv([$t54], "MainFDataModule", C, false));
    await $.stmt((await $.wcall([$t54, $t55], "PustToComboID", [(await $.wv([$t54, $t55], "ODSDepartments", C, false)), "Department", "ID", (await $.wv([$t54, $t55], "CBGroupsFilter", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t56) => { await $.set(C, "Rate", $t56); }), 0])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmPrint", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0, "fieldvalue": '', "firstprice": 0, "balanceprice": 0, "allamort": 0, "remainder": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["informationmessage"] = "\"%s\" tarixinə əsas vəsaitlər haqqında məlumat ";
  if ($.truthy((await $.mv((await $.v(C, "RBGroups")), "Checked")))) {
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Open", []);
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    { const $t57 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t57 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t57); } }
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "/Wares.xls")])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Group"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Activate", []);
    await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "Clear", []);
    await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "AutoFormat", [1, 0, true, 0, 0, 0, 1])));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Group"])), "Range")), ["A5:CA99"])), "Font")), "Size", 10);
    L0["row"] = 5;
    L0["cell"] = 1;
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "First", []);
    { const $t58 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "RecordCount"));
      L0["j"] = 1;
      let $t59 = true;
      for (;;) {
        if (!$t59) { L0["j"] = $.succ(L0["j"], 1); }
        $t59 = false;
        if (!($.ord(L0["j"]) <= $.ord($t58))) break;
        L0["cell"] = 1;
        { const $t60 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "FieldCount")), 1);
          L0["i"] = 1;
          let $t61 = true;
          for (;;) {
            if (!$t61) { L0["i"] = $.succ(L0["i"], 1); }
            $t61 = false;
            if (!($.ord(L0["i"]) <= $.ord($t60))) break;
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
            { const $t62 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Fields")), [L0["i"]])), "AsString"))); if ($t62 !== undefined) { await $.mset(L0["sheet"], "cells", $t62); } }
            L0["cell"] = $.add(L0["cell"], 1);
            await $.tick();
          }
        }
        L0["row"] = $.add(L0["row"], 1);
        await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Next", []);
        await $.tick();
      }
    }
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewGroups")), "Close", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "RBWares")), "Checked")))) {
    {
      const $t63 = (await $.v(C, "MainFDataModule"));
      await $.mcall((await $.wv([$t63], "M1", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t64 = await $.iset((await $.mv((await $.wv([$t63], "M1", C, false)), "SQL")), [7], ""); if ($t64 !== undefined) { await $.mset((await $.wv([$t63], "M1", C, false)), "SQL", $t64); } }
      } else {
        { const $t65 = await $.iset((await $.mv((await $.wv([$t63], "M1", C, false)), "SQL")), [7], $.add("where  GroupsID =", (await $.wcall([$t63], "IntToStr", [(await $.idx((await $.wv([$t63], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t65 !== undefined) { await $.mset((await $.wv([$t63], "M1", C, false)), "SQL", $t65); } }
      }
      await $.mcall((await $.wv([$t63], "M1", C, false)), "Open", []);
      await $.mcall((await $.wv([$t63], "R1", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t66 = await $.iset((await $.mv((await $.wv([$t63], "R1", C, false)), "SQL")), [7], ""); if ($t66 !== undefined) { await $.mset((await $.wv([$t63], "R1", C, false)), "SQL", $t66); } }
      } else {
        { const $t67 = await $.iset((await $.mv((await $.wv([$t63], "R1", C, false)), "SQL")), [7], $.add("where  GroupsID =", (await $.wcall([$t63], "IntToStr", [(await $.idx((await $.wv([$t63], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t67 !== undefined) { await $.mset((await $.wv([$t63], "R1", C, false)), "SQL", $t67); } }
      }
      await $.mcall((await $.wv([$t63], "R1", C, false)), "Open", []);
      await $.mcall((await $.wv([$t63], "ExcelPreviewCurrent", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t68 = await $.iset((await $.mv((await $.wv([$t63], "ExcelPreviewCurrent", C, false)), "SQL")), [15], ""); if ($t68 !== undefined) { await $.mset((await $.wv([$t63], "ExcelPreviewCurrent", C, false)), "SQL", $t68); } }
      } else {
        { const $t69 = await $.iset((await $.mv((await $.wv([$t63], "ExcelPreviewCurrent", C, false)), "SQL")), [15], $.add("where  GroupsID =", (await $.wcall([$t63], "IntToStr", [(await $.idx((await $.wv([$t63], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t69 !== undefined) { await $.mset((await $.wv([$t63], "ExcelPreviewCurrent", C, false)), "SQL", $t69); } }
      }
      await $.mcall((await $.wv([$t63], "ExcelPreviewCurrent", C, false)), "Open", []);
      await $.mcall((await $.wv([$t63], "ExcelPreviewCopyOff", C, false)), "Close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t70 = await $.iset((await $.mv((await $.wv([$t63], "ExcelPreviewCopyOff", C, false)), "SQL")), [24], " Where not out_num is null  "); if ($t70 !== undefined) { await $.mset((await $.wv([$t63], "ExcelPreviewCopyOff", C, false)), "SQL", $t70); } }
      } else {
        { const $t71 = await $.iset((await $.mv((await $.wv([$t63], "ExcelPreviewCopyOff", C, false)), "SQL")), [24], $.add(" Where not out_num is null and GroupsID =", (await $.wcall([$t63], "IntToStr", [(await $.idx((await $.wv([$t63], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t63], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t71 !== undefined) { await $.mset((await $.wv([$t63], "ExcelPreviewCopyOff", C, false)), "SQL", $t71); } }
      }
      await $.mcall((await $.wv([$t63], "ExcelPreviewCopyOff", C, false)), "Open", []);
    }
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    { const $t72 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t72 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t72); } }
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))])), "/Wares.xls")])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Main"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Activate", []);
    await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "Clear", []);
    await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "AutoFormat", [1, 0, true, 0, 0, 0, 1])));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["sheets"], "Item")), ["Main"])), "Range")), ["A6:CA99"])), "Font")), "Size", 8);
    L0["row"] = 6;
    L0["cell"] = 1;
    { const $t73 = await $.iset((await $.mv(L0["sheet"], "cells")), [1, 5], (await $.mv((await $.v(C, "CBGroupsFilter")), "Text"))); if ($t73 !== undefined) { await $.mset(L0["sheet"], "cells", $t73); } }
    { const $t74 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "RecordCount"));
      L0["j"] = 1;
      let $t75 = true;
      for (;;) {
        if (!$t75) { L0["j"] = $.succ(L0["j"], 1); }
        $t75 = false;
        if (!($.ord(L0["j"]) <= $.ord($t74))) break;
        L0["cell"] = 1;
        { const $t76 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "FieldCount")), 1);
          L0["i"] = 0;
          let $t77 = true;
          for (;;) {
            if (!$t77) { L0["i"] = $.succ(L0["i"], 1); }
            $t77 = false;
            if (!($.ord(L0["i"]) <= $.ord($t76))) break;
            L0["fieldvalue"] = (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "Fields")), [L0["i"]])), "AsString"));
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
            { const $t78 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], L0["fieldvalue"]); if ($t78 !== undefined) { await $.mset(L0["sheet"], "cells", $t78); } }
            L0["cell"] = $.add(L0["cell"], 1);
            await $.tick();
          }
        }
        L0["row"] = $.add(L0["row"], 1);
        await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "Next", []);
        await $.tick();
      }
    }
    if ($.truthy((await $.mv((await $.v(C, "CHBCopyOff")), "Checked")))) {
      { const $t79 = (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "RecordCount"));
        L0["j"] = 1;
        let $t80 = true;
        for (;;) {
          if (!$t80) { L0["j"] = $.succ(L0["j"], 1); }
          $t80 = false;
          if (!($.ord(L0["j"]) <= $.ord($t79))) break;
          L0["cell"] = 1;
          { const $t81 = $.sub((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "FieldCount")), 1);
            L0["i"] = 0;
            let $t82 = true;
            for (;;) {
              if (!$t82) { L0["i"] = $.succ(L0["i"], 1); }
              $t82 = false;
              if (!($.ord(L0["i"]) <= $.ord($t81))) break;
              L0["fieldvalue"] = (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "Fields")), [L0["i"]])), "AsString"));
              await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]])), "Borders")), "weight", 2);
              { const $t83 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["cell"]], L0["fieldvalue"]); if ($t83 !== undefined) { await $.mset(L0["sheet"], "cells", $t83); } }
              L0["cell"] = $.add(L0["cell"], 1);
              await $.tick();
            }
          }
          L0["row"] = $.add(L0["row"], 1);
          await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "Next", []);
          await $.tick();
        }
      }
    }
    {
      const $t84 = (await $.v(C, "MainFacilities"));
      const $t85 = (await $.mv((await $.wv([$t84], "MainFDataModule", C, false)), "ViewGroup"));
      await $.stmt((await $.wcall([$t84, $t85], "SumGroupDetails", [(await $.idx((await $.mv(Self, "Rate")), [(await $.mv((await $.wv([$t84, $t85], "CBGroupsFilter", C, false)), "ItemIndex"))])), $.ref(async () => (await $.wv([$t84, $t85], "FirstPrice", { get: async () => L0["firstprice"], set: async (v) => { L0["firstprice"] = v; }, local: true }, false)), async ($t86) => { await $.wset([$t84, $t85], "FirstPrice", $t86, { get: async () => L0["firstprice"], set: async (v) => { L0["firstprice"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t84, $t85], "BalancePrice", { get: async () => L0["balanceprice"], set: async (v) => { L0["balanceprice"] = v; }, local: true }, false)), async ($t87) => { await $.wset([$t84, $t85], "BalancePrice", $t87, { get: async () => L0["balanceprice"], set: async (v) => { L0["balanceprice"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t84, $t85], "AllAmort", { get: async () => L0["allamort"], set: async (v) => { L0["allamort"] = v; }, local: true }, false)), async ($t88) => { await $.wset([$t84, $t85], "AllAmort", $t88, { get: async () => L0["allamort"], set: async (v) => { L0["allamort"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t84, $t85], "Remainder", { get: async () => L0["remainder"], set: async (v) => { L0["remainder"] = v; }, local: true }, false)), async ($t89) => { await $.wset([$t84, $t85], "Remainder", $t89, { get: async () => L0["remainder"], set: async (v) => { L0["remainder"] = v; }, local: true }); })], C)));
    }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 7])), "Font")), "Size", 12);
    { const $t90 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], 7], (await $.call(C, "FloatToStr", [L0["firstprice"]]))); if ($t90 !== undefined) { await $.mset(L0["sheet"], "cells", $t90); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], 11])), "Font")), "Size", 12);
    { const $t91 = await $.iset((await $.mv(L0["sheet"], "cells")), [L0["row"], 11], (await $.call(C, "FloatToStr", [L0["allamort"]]))); if ($t91 !== undefined) { await $.mset(L0["sheet"], "cells", $t91); } }
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 2])), "Font")), "Size", 12);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 4])), "Font")), "Size", 12);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 2])), "Font")), "Size", 12);
    await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 4])), "Font")), "Size", 12);
    { const $t92 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 2], "İlkin dəyərlər: "); if ($t92 !== undefined) { await $.mset(L0["sheet"], "cells", $t92); } }
    { const $t93 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 4], (await $.call(C, "FloatToStr", [L0["firstprice"]]))); if ($t93 !== undefined) { await $.mset(L0["sheet"], "cells", $t93); } }
    { const $t94 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 2], "Yığılmış amortizasiya: "); if ($t94 !== undefined) { await $.mset(L0["sheet"], "cells", $t94); } }
    { const $t95 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 4], (await $.call(C, "FloatToStr", [L0["allamort"]]))); if ($t95 !== undefined) { await $.mset(L0["sheet"], "cells", $t95); } }
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCurrent")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ExcelPreviewCopyOff")), "Close", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "RBDepartments")), "Checked")))) {
    {
      const $t96 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartmentsPrint"));
      const $t97 = (await $.wv([$t96], "RptDepartments", C, false));
      if ($.truthy($.eq((await $.mv((await $.wv([$t96, $t97], "CBGroupsFilter", C, false)), "ItemIndex")), 0))) {
        { const $t98 = await $.iset((await $.wv([$t96, $t97], "SQL", C, false)), [4], ""); if ($t98 !== undefined) { await $.wset([$t96, $t97], "SQL", $t98, C); } }
      } else {
        { const $t99 = await $.iset((await $.wv([$t96, $t97], "SQL", C, false)), [4], $.add("Where sector_cod =", (await $.wcall([$t96, $t97], "IntToStr", [(await $.idx((await $.wv([$t96, $t97], "Rate", C, false)), [$.sub((await $.mv((await $.wv([$t96, $t97], "CBGroupsFilter", C, false)), "ItemIndex")), 1)]))], C)))); if ($t99 !== undefined) { await $.wset([$t96, $t97], "SQL", $t99, C); } }
      }
      if ($.truthy((await $.wv([$t96, $t97], "Active", C, false)))) {
        await $.stmt($.wcall([$t96, $t97], "Close", [], C));
      }
      await $.stmt($.wcall([$t96, $t97], "Open", [], C));
      await $.mset((await $.wv([$t96, $t97], "QRMainName", C, false)), "Caption", (await $.mv((await $.wv([$t96, $t97], "CBGroupsFilter", C, false)), "Text")));
      await $.mset((await $.wv([$t96, $t97], "QRDateFormat", C, false)), "Caption", (await $.wcall([$t96, $t97], "Format", [(await $.wv([$t96, $t97], "InformationMessage", { get: async () => L0["informationmessage"], set: async (v) => { L0["informationmessage"] = v; }, local: true }, false)), [(await $.wcall([$t96, $t97], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t96, $t97], "MainFacilities", C, false)), "GetPresentDate"))], C))]], C)));
      await $.stmt($.wcall([$t96, $t97], "Preview", [], C));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "RBDifferenceReport")), "Checked")))) {
    await $.stmt($.call(C, "DifferenceReport", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPrint", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

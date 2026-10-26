// Generated from PaymentreportUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentreportUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "OleServer", "ExcelXP", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "Datamodunit", "Unitselection"]);
  const C = [U];
  U.defClass("TPayreport", "TForm", {"datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "button1": {"name": "Button1", "type": "TButton"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "button3": {"name": "Button3", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcombobox1": {"name": "DBLookupCombobox1", "type": "TDBLookupComboboxEh"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Payreport", null, "TPayreport");
  });
  U.method("TPayreport", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["PORTFELPAYMENT"]])));
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay")), "CloseAll", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay")), "SetVariable", ["dat1", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "Datetime"))]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay")), "SetVariable", ["dat2", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "Datetime"))]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay")), "SetVariable", ["brname", (await $.mv((await $.v(C, "edit1")), "Text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay")), "open", []);
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
      L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
      await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_Payment.xlsx")])));
      try {
        { const $t2 = 100;
          L0["openedxlscnt"] = 1;
          let $t3 = true;
          for (;;) {
            if (!$t3) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
            $t3 = false;
            if (!($.ord(L0["openedxlscnt"]) <= $.ord($t2))) break;
            L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
            await $.tick();
          }
        }
      } catch ($t1) {
        $.rethrowControl($t1);
        $.handled($t1);
      }
      L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
      L0["a"] = 0;
      L0["i"] = 0;
      await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "First", []);
      { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_pay")), "RecordCount")), 1);
        L0["a"] = 0;
        let $t5 = true;
        for (;;) {
          if (!$t5) { L0["a"] = $.succ(L0["a"], 1); }
          $t5 = false;
          if (!($.ord(L0["a"]) <= $.ord($t4))) break;
          L0["esasborc"] = 0;
          L0["faizborc"] = 0;
          L0["cemiesas"] = 0;
          L0["cemifaiz"] = 0;
          L0["val"] = "AZN";
          { const $t6 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["rownum"])), "AsString"))); if ($t6 !== undefined) { await $.mset(L0["sheet"], "cells", $t6); } }
          { const $t7 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["prtid"])), "AsString"))); if ($t7 !== undefined) { await $.mset(L0["sheet"], "cells", $t7); } }
          { const $t8 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t8 !== undefined) { await $.mset(L0["sheet"], "cells", $t8); } }
          { const $t9 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["types"])), "AsString"))); if ($t9 !== undefined) { await $.mset(L0["sheet"], "cells", $t9); } }
          { const $t10 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["management"])), "AsString"))); if ($t10 !== undefined) { await $.mset(L0["sheet"], "cells", $t10); } }
          { const $t11 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["legal_type"])), "AsString"))); if ($t11 !== undefined) { await $.mset(L0["sheet"], "cells", $t11); } }
          { const $t12 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["manages"])), "AsString"))); if ($t12 !== undefined) { await $.mset(L0["sheet"], "cells", $t12); } }
          { const $t13 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["name"])), "AsString"))); if ($t13 !== undefined) { await $.mset(L0["sheet"], "cells", $t13); } }
          { const $t14 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["MAINBEFOREAMOUNT"])), "AsFloat"))); if ($t14 !== undefined) { await $.mset(L0["sheet"], "cells", $t14); } }
          { const $t15 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["PERCBEFOREAMOUNT"])), "AsFloat"))); if ($t15 !== undefined) { await $.mset(L0["sheet"], "cells", $t15); } }
          { const $t16 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["MAINBEFOREAMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["PERCBEFOREAMOUNT"])), "AsFloat")))); if ($t16 !== undefined) { await $.mset(L0["sheet"], "cells", $t16); } }
          { const $t17 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["typename"])), "AsString"))); if ($t17 !== undefined) { await $.mset(L0["sheet"], "cells", $t17); } }
          { const $t18 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["datdate"])), "AsDateTime"))); if ($t18 !== undefined) { await $.mset(L0["sheet"], "cells", $t18); } }
          { const $t19 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["val_name"])), "AsString"))); if ($t19 !== undefined) { await $.mset(L0["sheet"], "cells", $t19); } }
          { const $t20 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["AMOUNT_MAIN"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["AMOUNT_PERC"])), "AsFloat")))); if ($t20 !== undefined) { await $.mset(L0["sheet"], "cells", $t20); } }
          { const $t21 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["AMOUNT_MAIN"])), "AsFloat"))); if ($t21 !== undefined) { await $.mset(L0["sheet"], "cells", $t21); } }
          { const $t22 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["AMOUNT_PERC"])), "AsFloat"))); if ($t22 !== undefined) { await $.mset(L0["sheet"], "cells", $t22); } }
          { const $t23 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["SERVICEFEE"])), "AsFloat"))); if ($t23 !== undefined) { await $.mset(L0["sheet"], "cells", $t23); } }
          { const $t24 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 19], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["mainafteramount"])), "AsFloat"))); if ($t24 !== undefined) { await $.mset(L0["sheet"], "cells", $t24); } }
          { const $t25 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["mainafterperc"])), "AsFloat"))); if ($t25 !== undefined) { await $.mset(L0["sheet"], "cells", $t25); } }
          { const $t26 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 21], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["mainafteramount"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "fieldbyname", ["mainafterperc"])), "AsFloat")))); if ($t26 !== undefined) { await $.mset(L0["sheet"], "cells", $t26); } }
          L0["i"] = $.add(L0["i"], 1);
          await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay")), "Next", []);
          await $.tick();
        }
      }
      { const $t27 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t27 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t27); } }
      await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.mcall((await $.v(C, "Payreport")), "Close", []);
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    }
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay2")), "CloseAll", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay2")), "SetVariable", ["dat1", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "Date"))]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay2")), "SetVariable", ["dat2", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "Date"))]))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_pay2")), "open", []);
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
      L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
      await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_Payment.xlsx")])));
      try {
        { const $t29 = 100;
          L0["openedxlscnt"] = 1;
          let $t30 = true;
          for (;;) {
            if (!$t30) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
            $t30 = false;
            if (!($.ord(L0["openedxlscnt"]) <= $.ord($t29))) break;
            L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
            await $.tick();
          }
        }
      } catch ($t28) {
        $.rethrowControl($t28);
        $.handled($t28);
      }
      L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
      L0["a"] = 0;
      L0["i"] = 0;
      await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "First", []);
      { const $t31 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "RecordCount")), 1);
        L0["a"] = 0;
        let $t32 = true;
        for (;;) {
          if (!$t32) { L0["a"] = $.succ(L0["a"], 1); }
          $t32 = false;
          if (!($.ord(L0["a"]) <= $.ord($t31))) break;
          L0["esasborc"] = 0;
          L0["faizborc"] = 0;
          L0["cemiesas"] = 0;
          L0["cemifaiz"] = 0;
          L0["val"] = "AZN";
          { const $t33 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["rownum"])), "AsString"))); if ($t33 !== undefined) { await $.mset(L0["sheet"], "cells", $t33); } }
          { const $t34 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["prtid"])), "AsString"))); if ($t34 !== undefined) { await $.mset(L0["sheet"], "cells", $t34); } }
          { const $t35 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t35 !== undefined) { await $.mset(L0["sheet"], "cells", $t35); } }
          { const $t36 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["types"])), "AsString"))); if ($t36 !== undefined) { await $.mset(L0["sheet"], "cells", $t36); } }
          { const $t37 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["management"])), "AsString"))); if ($t37 !== undefined) { await $.mset(L0["sheet"], "cells", $t37); } }
          { const $t38 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["legal_type"])), "AsString"))); if ($t38 !== undefined) { await $.mset(L0["sheet"], "cells", $t38); } }
          { const $t39 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["manages"])), "AsString"))); if ($t39 !== undefined) { await $.mset(L0["sheet"], "cells", $t39); } }
          { const $t40 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["name"])), "AsString"))); if ($t40 !== undefined) { await $.mset(L0["sheet"], "cells", $t40); } }
          { const $t41 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["MAINBEFOREAMOUNT"])), "AsFloat"))); if ($t41 !== undefined) { await $.mset(L0["sheet"], "cells", $t41); } }
          { const $t42 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["PERCBEFOREAMOUNT"])), "AsFloat"))); if ($t42 !== undefined) { await $.mset(L0["sheet"], "cells", $t42); } }
          { const $t43 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["MAINBEFOREAMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["PERCBEFOREAMOUNT"])), "AsFloat")))); if ($t43 !== undefined) { await $.mset(L0["sheet"], "cells", $t43); } }
          { const $t44 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["typename"])), "AsString"))); if ($t44 !== undefined) { await $.mset(L0["sheet"], "cells", $t44); } }
          { const $t45 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["datdate"])), "AsDateTime"))); if ($t45 !== undefined) { await $.mset(L0["sheet"], "cells", $t45); } }
          { const $t46 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["val_name"])), "AsString"))); if ($t46 !== undefined) { await $.mset(L0["sheet"], "cells", $t46); } }
          { const $t47 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["AMOUNT_MAIN"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["AMOUNT_PERC"])), "AsFloat")))); if ($t47 !== undefined) { await $.mset(L0["sheet"], "cells", $t47); } }
          { const $t48 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["AMOUNT_MAIN"])), "AsFloat"))); if ($t48 !== undefined) { await $.mset(L0["sheet"], "cells", $t48); } }
          { const $t49 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["AMOUNT_PERC"])), "AsFloat"))); if ($t49 !== undefined) { await $.mset(L0["sheet"], "cells", $t49); } }
          { const $t50 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["SERVICEFEE"])), "AsFloat"))); if ($t50 !== undefined) { await $.mset(L0["sheet"], "cells", $t50); } }
          { const $t51 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 19], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["mainafteramount"])), "AsFloat"))); if ($t51 !== undefined) { await $.mset(L0["sheet"], "cells", $t51); } }
          { const $t52 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["mainafterperc"])), "AsFloat"))); if ($t52 !== undefined) { await $.mset(L0["sheet"], "cells", $t52); } }
          { const $t53 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 21], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["mainafteramount"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "fieldbyname", ["mainafterperc"])), "AsFloat")))); if ($t53 !== undefined) { await $.mset(L0["sheet"], "cells", $t53); } }
          L0["i"] = $.add(L0["i"], 1);
          await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_pay2")), "Next", []);
          await $.tick();
        }
      }
      { const $t54 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t54 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t54); } }
      await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.mcall((await $.v(C, "Payreport")), "Close", []);
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["HUQUQEMLAK"]])));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_Court.xlsx")])));
  try {
    { const $t56 = 100;
      L0["openedxlscnt"] = 1;
      let $t57 = true;
      for (;;) {
        if (!$t57) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t57 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t56))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t55) {
    $.rethrowControl($t55);
    $.handled($t55);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "First", []);
  { const $t58 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t59 = true;
    for (;;) {
      if (!$t59) { L0["a"] = $.succ(L0["a"], 1); }
      $t59 = false;
      if (!($.ord(L0["a"]) <= $.ord($t58))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t60 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["rownum"])), "AsString"))); if ($t60 !== undefined) { await $.mset(L0["sheet"], "cells", $t60); } }
      { const $t61 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["rownum"])), "AsString"))); if ($t61 !== undefined) { await $.mset(L0["sheet"], "cells", $t61); } }
      { const $t62 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["prtid"])), "AsString"))); if ($t62 !== undefined) { await $.mset(L0["sheet"], "cells", $t62); } }
      { const $t63 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["INNORPIN"])), "AsString"))); if ($t63 !== undefined) { await $.mset(L0["sheet"], "cells", $t63); } }
      { const $t64 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["filname"])), "AsString"))); if ($t64 !== undefined) { await $.mset(L0["sheet"], "cells", $t64); } }
      { const $t65 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t65 !== undefined) { await $.mset(L0["sheet"], "cells", $t65); } }
      { const $t66 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt1"])), "AsString"))); if ($t66 !== undefined) { await $.mset(L0["sheet"], "cells", $t66); } }
      { const $t67 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt1_date"])), "AsVariant"))); if ($t67 !== undefined) { await $.mset(L0["sheet"], "cells", $t67); } }
      { const $t68 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt2"])), "AsString"))); if ($t68 !== undefined) { await $.mset(L0["sheet"], "cells", $t68); } }
      { const $t69 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt2_date"])), "AsVariant"))); if ($t69 !== undefined) { await $.mset(L0["sheet"], "cells", $t69); } }
      { const $t70 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 23], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_AMMOUNT"])), "AsString"))); if ($t70 !== undefined) { await $.mset(L0["sheet"], "cells", $t70); } }
      { const $t71 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 24], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_STATUS"])), "AsString"))); if ($t71 !== undefined) { await $.mset(L0["sheet"], "cells", $t71); } }
      { const $t72 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 25], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_DATE_NUM"])), "AsString"))); if ($t72 !== undefined) { await $.mset(L0["sheet"], "cells", $t72); } }
      { const $t73 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 26], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_NAME"])), "AsString"))); if ($t73 !== undefined) { await $.mset(L0["sheet"], "cells", $t73); } }
      { const $t74 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_ACCEPTED_AMMOUNT"])), "AsString"))); if ($t74 !== undefined) { await $.mset(L0["sheet"], "cells", $t74); } }
      { const $t75 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_DESC"])), "AsString"))); if ($t75 !== undefined) { await $.mset(L0["sheet"], "cells", $t75); } }
      { const $t76 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 29], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_MANAGE"])), "AsString"))); if ($t76 !== undefined) { await $.mset(L0["sheet"], "cells", $t76); } }
      { const $t77 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 30], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_LASTSTAT"])), "AsString"))); if ($t77 !== undefined) { await $.mset(L0["sheet"], "cells", $t77); } }
      { const $t78 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 31], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_MEASURE"])), "AsString"))); if ($t78 !== undefined) { await $.mset(L0["sheet"], "cells", $t78); } }
      { const $t79 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 32], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_REPLACE"])), "AsString"))); if ($t79 !== undefined) { await $.mset(L0["sheet"], "cells", $t79); } }
      { const $t80 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 33], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["REPLACEMENT_COUNT"])), "AsString"))); if ($t80 !== undefined) { await $.mset(L0["sheet"], "cells", $t80); } }
      { const $t81 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 34], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["INVESTIGATION_ORG"])), "AsString"))); if ($t81 !== undefined) { await $.mset(L0["sheet"], "cells", $t81); } }
      { const $t82 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 35], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["INFOS"])), "AsString"))); if ($t82 !== undefined) { await $.mset(L0["sheet"], "cells", $t82); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "Next", []);
      await $.tick();
    }
  }
  { const $t83 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t83 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t83); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["EMLAKCAP"]])));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_PROP.xlsx")])));
  try {
    { const $t85 = 100;
      L0["openedxlscnt"] = 1;
      let $t86 = true;
      for (;;) {
        if (!$t86) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t86 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t85))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t84) {
    $.rethrowControl($t84);
    $.handled($t84);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "First", []);
  { const $t87 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t88 = true;
    for (;;) {
      if (!$t88) { L0["a"] = $.succ(L0["a"], 1); }
      $t88 = false;
      if (!($.ord(L0["a"]) <= $.ord($t87))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t89 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["rownum"])), "AsString"))); if ($t89 !== undefined) { await $.mset(L0["sheet"], "cells", $t89); } }
      { const $t90 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["rownum"])), "AsString"))); if ($t90 !== undefined) { await $.mset(L0["sheet"], "cells", $t90); } }
      { const $t91 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["prtid"])), "AsString"))); if ($t91 !== undefined) { await $.mset(L0["sheet"], "cells", $t91); } }
      { const $t92 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["INNORPIN"])), "AsString"))); if ($t92 !== undefined) { await $.mset(L0["sheet"], "cells", $t92); } }
      { const $t93 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["filname"])), "AsString"))); if ($t93 !== undefined) { await $.mset(L0["sheet"], "cells", $t93); } }
      { const $t94 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t94 !== undefined) { await $.mset(L0["sheet"], "cells", $t94); } }
      { const $t95 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt1"])), "AsString"))); if ($t95 !== undefined) { await $.mset(L0["sheet"], "cells", $t95); } }
      { const $t96 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt1_date"])), "AsVariant"))); if ($t96 !== undefined) { await $.mset(L0["sheet"], "cells", $t96); } }
      { const $t97 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt2"])), "AsString"))); if ($t97 !== undefined) { await $.mset(L0["sheet"], "cells", $t97); } }
      { const $t98 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["akt2_date"])), "AsVariant"))); if ($t98 !== undefined) { await $.mset(L0["sheet"], "cells", $t98); } }
      { const $t99 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 23], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PROPERTY"])), "AsString"))); if ($t99 !== undefined) { await $.mset(L0["sheet"], "cells", $t99); } }
      { const $t100 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 24], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PROP_DESC"])), "AsString"))); if ($t100 !== undefined) { await $.mset(L0["sheet"], "cells", $t100); } }
      { const $t101 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 25], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PROP_ADDRESS"])), "AsString"))); if ($t101 !== undefined) { await $.mset(L0["sheet"], "cells", $t101); } }
      { const $t102 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 26], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PORP_PASSPORT"])), "AsString"))); if ($t102 !== undefined) { await $.mset(L0["sheet"], "cells", $t102); } }
      { const $t103 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PROP_PRICE"])), "AsString"))); if ($t103 !== undefined) { await $.mset(L0["sheet"], "cells", $t103); } }
      { const $t104 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PROP_INFO"])), "AsString"))); if ($t104 !== undefined) { await $.mset(L0["sheet"], "cells", $t104); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "Next", []);
      await $.tick();
    }
  }
  { const $t105 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t105 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t105); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["PORTFEL"]])));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB.xlsx")])));
  try {
    { const $t107 = 100;
      L0["openedxlscnt"] = 1;
      let $t108 = true;
      for (;;) {
        if (!$t108) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t108 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t107))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t106) {
    $.rethrowControl($t106);
    $.handled($t106);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "First", []);
  { const $t109 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t110 = true;
    for (;;) {
      if (!$t110) { L0["a"] = $.succ(L0["a"], 1); }
      $t110 = false;
      if (!($.ord(L0["a"]) <= $.ord($t109))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t111 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t111 !== undefined) { await $.mset(L0["sheet"], "cells", $t111); } }
      { const $t112 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t112 !== undefined) { await $.mset(L0["sheet"], "cells", $t112); } }
      { const $t113 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prtid"])), "AsString"))); if ($t113 !== undefined) { await $.mset(L0["sheet"], "cells", $t113); } }
      { const $t114 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["INNORPIN"])), "AsString"))); if ($t114 !== undefined) { await $.mset(L0["sheet"], "cells", $t114); } }
      { const $t115 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types"])), "AsString"))); if ($t115 !== undefined) { await $.mset(L0["sheet"], "cells", $t115); } }
      { const $t116 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t116 !== undefined) { await $.mset(L0["sheet"], "cells", $t116); } }
      { const $t117 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1"])), "AsString"))); if ($t117 !== undefined) { await $.mset(L0["sheet"], "cells", $t117); } }
      { const $t118 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1_date"])), "AsVariant"))); if ($t118 !== undefined) { await $.mset(L0["sheet"], "cells", $t118); } }
      { const $t119 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2"])), "AsString"))); if ($t119 !== undefined) { await $.mset(L0["sheet"], "cells", $t119); } }
      { const $t120 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2_date"])), "AsVariant"))); if ($t120 !== undefined) { await $.mset(L0["sheet"], "cells", $t120); } }
      { const $t121 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat"))); if ($t121 !== undefined) { await $.mset(L0["sheet"], "cells", $t121); } }
      { const $t122 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat"))); if ($t122 !== undefined) { await $.mset(L0["sheet"], "cells", $t122); } }
      { const $t123 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat")))); if ($t123 !== undefined) { await $.mset(L0["sheet"], "cells", $t123); } }
      { const $t124 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat"))); if ($t124 !== undefined) { await $.mset(L0["sheet"], "cells", $t124); } }
      { const $t125 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat"))); if ($t125 !== undefined) { await $.mset(L0["sheet"], "cells", $t125); } }
      { const $t126 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat")))); if ($t126 !== undefined) { await $.mset(L0["sheet"], "cells", $t126); } }
      { const $t127 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat"))); if ($t127 !== undefined) { await $.mset(L0["sheet"], "cells", $t127); } }
      { const $t128 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat"))); if ($t128 !== undefined) { await $.mset(L0["sheet"], "cells", $t128); } }
      { const $t129 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 19], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat")))); if ($t129 !== undefined) { await $.mset(L0["sheet"], "cells", $t129); } }
      { const $t130 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat"))); if ($t130 !== undefined) { await $.mset(L0["sheet"], "cells", $t130); } }
      { const $t131 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 21], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat"))); if ($t131 !== undefined) { await $.mset(L0["sheet"], "cells", $t131); } }
      { const $t132 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 22], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat")))); if ($t132 !== undefined) { await $.mset(L0["sheet"], "cells", $t132); } }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat"));
        L0["val"] = "AZN";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat"));
        L0["val"] = "USD";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat"));
        L0["val"] = "EUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat"));
        L0["val"] = "GBP";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat"));
        L0["val"] = "RUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat"));
        L0["val"] = "GEL";
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ACCEPTED_VALUTE"])), "AsFloat")), 0)))) {
        L0["val"] = "AZN";
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ACCEPTED_VALUTE"])), "AsFloat")), 1)))) {
        L0["val"] = "USD";
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ACCEPTED_VALUTE"])), "AsFloat")), 45)))) {
        L0["val"] = "EUR";
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ACCEPTED_VALUTE"])), "AsFloat")), 50)))) {
        L0["val"] = "GBP";
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ACCEPTED_VALUTE"])), "AsFloat")), 48)))) {
        L0["val"] = "RUR";
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ACCEPTED_VALUTE"])), "AsFloat")), 475)))) {
        L0["val"] = "GEL";
      }
      { const $t133 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 23], (await $.call(C, "UpperCase", [L0["val"]]))); if ($t133 !== undefined) { await $.mset(L0["sheet"], "cells", $t133); } }
      { const $t134 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 24], L0["esasborc"]); if ($t134 !== undefined) { await $.mset(L0["sheet"], "cells", $t134); } }
      { const $t135 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 25], L0["faizborc"]); if ($t135 !== undefined) { await $.mset(L0["sheet"], "cells", $t135); } }
      { const $t136 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 26], $.add(L0["esasborc"], L0["faizborc"])); if ($t136 !== undefined) { await $.mset(L0["sheet"], "cells", $t136); } }
      { const $t137 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))); if ($t137 !== undefined) { await $.mset(L0["sheet"], "cells", $t137); } }
      { const $t138 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))); if ($t138 !== undefined) { await $.mset(L0["sheet"], "cells", $t138); } }
      { const $t139 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 29], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat")))); if ($t139 !== undefined) { await $.mset(L0["sheet"], "cells", $t139); } }
      { const $t140 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 30], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["otmetarixi"])), "AsVariant"))); if ($t140 !== undefined) { await $.mset(L0["sheet"], "cells", $t140); } }
      { const $t141 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 31], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))); if ($t141 !== undefined) { await $.mset(L0["sheet"], "cells", $t141); } }
      { const $t142 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 32], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))); if ($t142 !== undefined) { await $.mset(L0["sheet"], "cells", $t142); } }
      { const $t143 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 33], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat")))); if ($t143 !== undefined) { await $.mset(L0["sheet"], "cells", $t143); } }
      { const $t144 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 34], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat"))); if ($t144 !== undefined) { await $.mset(L0["sheet"], "cells", $t144); } }
      { const $t145 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 35], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat"))); if ($t145 !== undefined) { await $.mset(L0["sheet"], "cells", $t145); } }
      { const $t146 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 36], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")))); if ($t146 !== undefined) { await $.mset(L0["sheet"], "cells", $t146); } }
      { const $t147 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 37], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["Servishaqq"])), "AsFloat"))); if ($t147 !== undefined) { await $.mset(L0["sheet"], "cells", $t147); } }
      { const $t148 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 38], $.add((await $.call(C, "floattostr", [$.mul((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["xidmetfaizi"])), "AsFloat")), 100)])), "%")); if ($t148 !== undefined) { await $.mset(L0["sheet"], "cells", $t148); } }
      { const $t149 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 39], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ximethaqqi"])), "AsFloat"))); if ($t149 !== undefined) { await $.mset(L0["sheet"], "cells", $t149); } }
      { const $t150 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 40], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))); if ($t150 !== undefined) { await $.mset(L0["sheet"], "cells", $t150); } }
      { const $t151 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 41], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))); if ($t151 !== undefined) { await $.mset(L0["sheet"], "cells", $t151); } }
      { const $t152 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 42], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat")))); if ($t152 !== undefined) { await $.mset(L0["sheet"], "cells", $t152); } }
      { const $t153 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 43], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))); if ($t153 !== undefined) { await $.mset(L0["sheet"], "cells", $t153); } }
      { const $t154 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 44], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))); if ($t154 !== undefined) { await $.mset(L0["sheet"], "cells", $t154); } }
      { const $t155 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 45], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat")))); if ($t155 !== undefined) { await $.mset(L0["sheet"], "cells", $t155); } }
      { const $t156 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 46], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))); if ($t156 !== undefined) { await $.mset(L0["sheet"], "cells", $t156); } }
      { const $t157 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 47], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))); if ($t157 !== undefined) { await $.mset(L0["sheet"], "cells", $t157); } }
      { const $t158 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 48], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat")))); if ($t158 !== undefined) { await $.mset(L0["sheet"], "cells", $t158); } }
      { const $t159 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 49], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))); if ($t159 !== undefined) { await $.mset(L0["sheet"], "cells", $t159); } }
      { const $t160 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 50], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))); if ($t160 !== undefined) { await $.mset(L0["sheet"], "cells", $t160); } }
      { const $t161 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 51], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat")))); if ($t161 !== undefined) { await $.mset(L0["sheet"], "cells", $t161); } }
      { const $t162 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 52], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat"))); if ($t162 !== undefined) { await $.mset(L0["sheet"], "cells", $t162); } }
      { const $t163 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 53], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat"))); if ($t163 !== undefined) { await $.mset(L0["sheet"], "cells", $t163); } }
      { const $t164 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 54], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat")))); if ($t164 !== undefined) { await $.mset(L0["sheet"], "cells", $t164); } }
      { const $t165 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 55], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["emlak"])), "AsFloat"))); if ($t165 !== undefined) { await $.mset(L0["sheet"], "cells", $t165); } }
      L0["cemiesas"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["esasborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")));
      L0["cemifaiz"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["faizborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")));
      { const $t166 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 56], L0["cemiesas"]); if ($t166 !== undefined) { await $.mset(L0["sheet"], "cells", $t166); } }
      { const $t167 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 57], L0["cemifaiz"]); if ($t167 !== undefined) { await $.mset(L0["sheet"], "cells", $t167); } }
      { const $t168 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 58], $.add(L0["cemiesas"], L0["cemifaiz"])); if ($t168 !== undefined) { await $.mset(L0["sheet"], "cells", $t168); } }
      { const $t169 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 59], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["management"])), "AsString"))); if ($t169 !== undefined) { await $.mset(L0["sheet"], "cells", $t169); } }
      { const $t170 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 60], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["beneficiar"])), "AsString"))); if ($t170 !== undefined) { await $.mset(L0["sheet"], "cells", $t170); } }
      { const $t171 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 61], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["project"])), "AsString"))); if ($t171 !== undefined) { await $.mset(L0["sheet"], "cells", $t171); } }
      { const $t172 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 62], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prject_country"])), "AsString"))); if ($t172 !== undefined) { await $.mset(L0["sheet"], "cells", $t172); } }
      { const $t173 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 63], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["group_type"])), "AsString"))); if ($t173 !== undefined) { await $.mset(L0["sheet"], "cells", $t173); } }
      { const $t174 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 64], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["name"])), "AsString"))); if ($t174 !== undefined) { await $.mset(L0["sheet"], "cells", $t174); } }
      { const $t175 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 65], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["abb_branch"])), "AsString"))); if ($t175 !== undefined) { await $.mset(L0["sheet"], "cells", $t175); } }
      { const $t176 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 66], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["legal_type"])), "AsString"))); if ($t176 !== undefined) { await $.mset(L0["sheet"], "cells", $t176); } }
      { const $t177 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 67], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["mtk"])), "AsString"))); if ($t177 !== undefined) { await $.mset(L0["sheet"], "cells", $t177); } }
      { const $t178 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 68], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["activity_area"])), "AsString"))); if ($t178 !== undefined) { await $.mset(L0["sheet"], "cells", $t178); } }
      { const $t179 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 69], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["capital_founder"])), "AsString"))); if ($t179 !== undefined) { await $.mset(L0["sheet"], "cells", $t179); } }
      { const $t180 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 70], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["founder"])), "AsString"))); if ($t180 !== undefined) { await $.mset(L0["sheet"], "cells", $t180); } }
      { const $t181 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 71], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["address"])), "AsString"))); if ($t181 !== undefined) { await $.mset(L0["sheet"], "cells", $t181); } }
      { const $t182 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 72], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["phone"])), "AsString"))); if ($t182 !== undefined) { await $.mset(L0["sheet"], "cells", $t182); } }
      { const $t183 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 73], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types_1"])), "AsString"))); if ($t183 !== undefined) { await $.mset(L0["sheet"], "cells", $t183); } }
      { const $t184 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 74], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut"])), "AsString"))); if ($t184 !== undefined) { await $.mset(L0["sheet"], "cells", $t184); } }
      { const $t185 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 75], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ammount"])), "AsFloat"))); if ($t185 !== undefined) { await $.mset(L0["sheet"], "cells", $t185); } }
      { const $t186 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 76], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs"])), "AsString"))); if ($t186 !== undefined) { await $.mset(L0["sheet"], "cells", $t186); } }
      { const $t187 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 77], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername"])), "AsString"))); if ($t187 !== undefined) { await $.mset(L0["sheet"], "cells", $t187); } }
      { const $t188 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 78], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date"])), "AsString"))); if ($t188 !== undefined) { await $.mset(L0["sheet"], "cells", $t188); } }
      { const $t189 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 79], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price"])), "AsFloat"))); if ($t189 !== undefined) { await $.mset(L0["sheet"], "cells", $t189); } }
      { const $t190 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 80], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_1"])), "AsString"))); if ($t190 !== undefined) { await $.mset(L0["sheet"], "cells", $t190); } }
      { const $t191 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 81], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername_"])), "AsString"))); if ($t191 !== undefined) { await $.mset(L0["sheet"], "cells", $t191); } }
      { const $t192 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 82], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date_"])), "AsVariant"))); if ($t192 !== undefined) { await $.mset(L0["sheet"], "cells", $t192); } }
      { const $t193 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 83], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_"])), "AsFloat"))); if ($t193 !== undefined) { await $.mset(L0["sheet"], "cells", $t193); } }
      { const $t194 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 84], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_"])), "AsString"))); if ($t194 !== undefined) { await $.mset(L0["sheet"], "cells", $t194); } }
      { const $t195 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 85], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs_1"])), "AsString"))); if ($t195 !== undefined) { await $.mset(L0["sheet"], "cells", $t195); } }
      { const $t196 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 86], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["CUST_ID"])), "AsString"))); if ($t196 !== undefined) { await $.mset(L0["sheet"], "cells", $t196); } }
      { const $t197 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 87], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["AZ_BORC"])), "AsString"))); if ($t197 !== undefined) { await $.mset(L0["sheet"], "cells", $t197); } }
      { const $t198 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 88], $.sub($.add(L0["cemiesas"], L0["cemifaiz"]), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["AZ_BORC"])), "AsFloat")))); if ($t198 !== undefined) { await $.mset(L0["sheet"], "cells", $t198); } }
      { const $t199 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 89], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ISRESTRUCT"])), "AsString"))); if ($t199 !== undefined) { await $.mset(L0["sheet"], "cells", $t199); } }
      { const $t200 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 90], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["CREDITNUMBER"])), "AsString"))); if ($t200 !== undefined) { await $.mset(L0["sheet"], "cells", $t200); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Next", []);
      await $.tick();
    }
  }
  { const $t201 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t201 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t201); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "Button8Click", async function Button8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_Mehkeme.xlsx")])));
  try {
    { const $t203 = 100;
      L0["openedxlscnt"] = 1;
      let $t204 = true;
      for (;;) {
        if (!$t204) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t204 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t203))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t202) {
    $.rethrowControl($t202);
    $.handled($t202);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "First", []);
  { const $t205 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t206 = true;
    for (;;) {
      if (!$t206) { L0["a"] = $.succ(L0["a"], 1); }
      $t206 = false;
      if (!($.ord(L0["a"]) <= $.ord($t205))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t207 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t207 !== undefined) { await $.mset(L0["sheet"], "cells", $t207); } }
      { const $t208 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t208 !== undefined) { await $.mset(L0["sheet"], "cells", $t208); } }
      { const $t209 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prtid"])), "AsString"))); if ($t209 !== undefined) { await $.mset(L0["sheet"], "cells", $t209); } }
      { const $t210 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["INNORPIN"])), "AsString"))); if ($t210 !== undefined) { await $.mset(L0["sheet"], "cells", $t210); } }
      { const $t211 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types"])), "AsString"))); if ($t211 !== undefined) { await $.mset(L0["sheet"], "cells", $t211); } }
      { const $t212 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t212 !== undefined) { await $.mset(L0["sheet"], "cells", $t212); } }
      { const $t213 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1"])), "AsString"))); if ($t213 !== undefined) { await $.mset(L0["sheet"], "cells", $t213); } }
      { const $t214 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1_date"])), "AsVariant"))); if ($t214 !== undefined) { await $.mset(L0["sheet"], "cells", $t214); } }
      { const $t215 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2"])), "AsString"))); if ($t215 !== undefined) { await $.mset(L0["sheet"], "cells", $t215); } }
      { const $t216 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2_date"])), "AsVariant"))); if ($t216 !== undefined) { await $.mset(L0["sheet"], "cells", $t216); } }
      { const $t217 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat"))); if ($t217 !== undefined) { await $.mset(L0["sheet"], "cells", $t217); } }
      { const $t218 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat"))); if ($t218 !== undefined) { await $.mset(L0["sheet"], "cells", $t218); } }
      { const $t219 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat")))); if ($t219 !== undefined) { await $.mset(L0["sheet"], "cells", $t219); } }
      { const $t220 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat"))); if ($t220 !== undefined) { await $.mset(L0["sheet"], "cells", $t220); } }
      { const $t221 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat"))); if ($t221 !== undefined) { await $.mset(L0["sheet"], "cells", $t221); } }
      { const $t222 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat")))); if ($t222 !== undefined) { await $.mset(L0["sheet"], "cells", $t222); } }
      { const $t223 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat"))); if ($t223 !== undefined) { await $.mset(L0["sheet"], "cells", $t223); } }
      { const $t224 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat"))); if ($t224 !== undefined) { await $.mset(L0["sheet"], "cells", $t224); } }
      { const $t225 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 19], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat")))); if ($t225 !== undefined) { await $.mset(L0["sheet"], "cells", $t225); } }
      { const $t226 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat"))); if ($t226 !== undefined) { await $.mset(L0["sheet"], "cells", $t226); } }
      { const $t227 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 21], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat"))); if ($t227 !== undefined) { await $.mset(L0["sheet"], "cells", $t227); } }
      { const $t228 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 22], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat")))); if ($t228 !== undefined) { await $.mset(L0["sheet"], "cells", $t228); } }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat"));
        L0["val"] = "AZN";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat"));
        L0["val"] = "USD";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat"));
        L0["val"] = "EUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat"));
        L0["val"] = "GBP";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat"));
        L0["val"] = "RUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat"));
        L0["val"] = "GEL";
      }
      { const $t229 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 23], (await $.call(C, "UpperCase", [L0["val"]]))); if ($t229 !== undefined) { await $.mset(L0["sheet"], "cells", $t229); } }
      { const $t230 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 24], L0["esasborc"]); if ($t230 !== undefined) { await $.mset(L0["sheet"], "cells", $t230); } }
      { const $t231 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 25], L0["faizborc"]); if ($t231 !== undefined) { await $.mset(L0["sheet"], "cells", $t231); } }
      { const $t232 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 26], $.add(L0["esasborc"], L0["faizborc"])); if ($t232 !== undefined) { await $.mset(L0["sheet"], "cells", $t232); } }
      { const $t233 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))); if ($t233 !== undefined) { await $.mset(L0["sheet"], "cells", $t233); } }
      { const $t234 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))); if ($t234 !== undefined) { await $.mset(L0["sheet"], "cells", $t234); } }
      { const $t235 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 29], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat")))); if ($t235 !== undefined) { await $.mset(L0["sheet"], "cells", $t235); } }
      { const $t236 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 30], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["otmetarixi"])), "AsVariant"))); if ($t236 !== undefined) { await $.mset(L0["sheet"], "cells", $t236); } }
      { const $t237 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 31], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))); if ($t237 !== undefined) { await $.mset(L0["sheet"], "cells", $t237); } }
      { const $t238 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 32], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))); if ($t238 !== undefined) { await $.mset(L0["sheet"], "cells", $t238); } }
      { const $t239 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 33], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat")))); if ($t239 !== undefined) { await $.mset(L0["sheet"], "cells", $t239); } }
      { const $t240 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 34], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat"))); if ($t240 !== undefined) { await $.mset(L0["sheet"], "cells", $t240); } }
      { const $t241 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 35], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat"))); if ($t241 !== undefined) { await $.mset(L0["sheet"], "cells", $t241); } }
      { const $t242 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 36], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")))); if ($t242 !== undefined) { await $.mset(L0["sheet"], "cells", $t242); } }
      { const $t243 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 37], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["Servishaqq"])), "AsFloat"))); if ($t243 !== undefined) { await $.mset(L0["sheet"], "cells", $t243); } }
      { const $t244 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 38], $.add((await $.call(C, "floattostr", [$.mul((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["xidmetfaizi"])), "AsFloat")), 100)])), "%")); if ($t244 !== undefined) { await $.mset(L0["sheet"], "cells", $t244); } }
      { const $t245 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 39], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ximethaqqi"])), "AsFloat"))); if ($t245 !== undefined) { await $.mset(L0["sheet"], "cells", $t245); } }
      { const $t246 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 40], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))); if ($t246 !== undefined) { await $.mset(L0["sheet"], "cells", $t246); } }
      { const $t247 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 41], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))); if ($t247 !== undefined) { await $.mset(L0["sheet"], "cells", $t247); } }
      { const $t248 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 42], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat")))); if ($t248 !== undefined) { await $.mset(L0["sheet"], "cells", $t248); } }
      { const $t249 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 43], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))); if ($t249 !== undefined) { await $.mset(L0["sheet"], "cells", $t249); } }
      { const $t250 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 44], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))); if ($t250 !== undefined) { await $.mset(L0["sheet"], "cells", $t250); } }
      { const $t251 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 45], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat")))); if ($t251 !== undefined) { await $.mset(L0["sheet"], "cells", $t251); } }
      { const $t252 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 46], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))); if ($t252 !== undefined) { await $.mset(L0["sheet"], "cells", $t252); } }
      { const $t253 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 47], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))); if ($t253 !== undefined) { await $.mset(L0["sheet"], "cells", $t253); } }
      { const $t254 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 48], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat")))); if ($t254 !== undefined) { await $.mset(L0["sheet"], "cells", $t254); } }
      { const $t255 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 49], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))); if ($t255 !== undefined) { await $.mset(L0["sheet"], "cells", $t255); } }
      { const $t256 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 50], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))); if ($t256 !== undefined) { await $.mset(L0["sheet"], "cells", $t256); } }
      { const $t257 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 51], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat")))); if ($t257 !== undefined) { await $.mset(L0["sheet"], "cells", $t257); } }
      { const $t258 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 52], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat"))); if ($t258 !== undefined) { await $.mset(L0["sheet"], "cells", $t258); } }
      { const $t259 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 53], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat"))); if ($t259 !== undefined) { await $.mset(L0["sheet"], "cells", $t259); } }
      { const $t260 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 54], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat")))); if ($t260 !== undefined) { await $.mset(L0["sheet"], "cells", $t260); } }
      { const $t261 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 55], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["emlak"])), "AsFloat"))); if ($t261 !== undefined) { await $.mset(L0["sheet"], "cells", $t261); } }
      L0["cemiesas"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["esasborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")));
      L0["cemifaiz"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["faizborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")));
      { const $t262 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 56], L0["cemiesas"]); if ($t262 !== undefined) { await $.mset(L0["sheet"], "cells", $t262); } }
      { const $t263 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 57], L0["cemifaiz"]); if ($t263 !== undefined) { await $.mset(L0["sheet"], "cells", $t263); } }
      { const $t264 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 58], $.add(L0["cemiesas"], L0["cemifaiz"])); if ($t264 !== undefined) { await $.mset(L0["sheet"], "cells", $t264); } }
      { const $t265 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 59], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["management"])), "AsString"))); if ($t265 !== undefined) { await $.mset(L0["sheet"], "cells", $t265); } }
      { const $t266 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 60], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["beneficiar"])), "AsString"))); if ($t266 !== undefined) { await $.mset(L0["sheet"], "cells", $t266); } }
      { const $t267 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 61], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["project"])), "AsString"))); if ($t267 !== undefined) { await $.mset(L0["sheet"], "cells", $t267); } }
      { const $t268 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 62], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prject_country"])), "AsString"))); if ($t268 !== undefined) { await $.mset(L0["sheet"], "cells", $t268); } }
      { const $t269 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 63], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["group_type"])), "AsString"))); if ($t269 !== undefined) { await $.mset(L0["sheet"], "cells", $t269); } }
      { const $t270 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 64], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["name"])), "AsString"))); if ($t270 !== undefined) { await $.mset(L0["sheet"], "cells", $t270); } }
      { const $t271 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 65], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["abb_branch"])), "AsString"))); if ($t271 !== undefined) { await $.mset(L0["sheet"], "cells", $t271); } }
      { const $t272 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 66], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["legal_type"])), "AsString"))); if ($t272 !== undefined) { await $.mset(L0["sheet"], "cells", $t272); } }
      { const $t273 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 67], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["mtk"])), "AsString"))); if ($t273 !== undefined) { await $.mset(L0["sheet"], "cells", $t273); } }
      { const $t274 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 68], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["activity_area"])), "AsString"))); if ($t274 !== undefined) { await $.mset(L0["sheet"], "cells", $t274); } }
      { const $t275 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 69], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["capital_founder"])), "AsString"))); if ($t275 !== undefined) { await $.mset(L0["sheet"], "cells", $t275); } }
      { const $t276 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 70], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["founder"])), "AsString"))); if ($t276 !== undefined) { await $.mset(L0["sheet"], "cells", $t276); } }
      { const $t277 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 71], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["address"])), "AsString"))); if ($t277 !== undefined) { await $.mset(L0["sheet"], "cells", $t277); } }
      { const $t278 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 72], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["phone"])), "AsString"))); if ($t278 !== undefined) { await $.mset(L0["sheet"], "cells", $t278); } }
      { const $t279 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 73], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types_1"])), "AsString"))); if ($t279 !== undefined) { await $.mset(L0["sheet"], "cells", $t279); } }
      { const $t280 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 74], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut"])), "AsString"))); if ($t280 !== undefined) { await $.mset(L0["sheet"], "cells", $t280); } }
      { const $t281 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 75], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ammount"])), "AsFloat"))); if ($t281 !== undefined) { await $.mset(L0["sheet"], "cells", $t281); } }
      { const $t282 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 76], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs"])), "AsString"))); if ($t282 !== undefined) { await $.mset(L0["sheet"], "cells", $t282); } }
      { const $t283 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 77], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername"])), "AsString"))); if ($t283 !== undefined) { await $.mset(L0["sheet"], "cells", $t283); } }
      { const $t284 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 78], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date"])), "AsString"))); if ($t284 !== undefined) { await $.mset(L0["sheet"], "cells", $t284); } }
      { const $t285 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 79], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price"])), "AsFloat"))); if ($t285 !== undefined) { await $.mset(L0["sheet"], "cells", $t285); } }
      { const $t286 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 80], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_1"])), "AsString"))); if ($t286 !== undefined) { await $.mset(L0["sheet"], "cells", $t286); } }
      { const $t287 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 81], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername_"])), "AsString"))); if ($t287 !== undefined) { await $.mset(L0["sheet"], "cells", $t287); } }
      { const $t288 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 82], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date_"])), "AsVariant"))); if ($t288 !== undefined) { await $.mset(L0["sheet"], "cells", $t288); } }
      { const $t289 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 83], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_"])), "AsFloat"))); if ($t289 !== undefined) { await $.mset(L0["sheet"], "cells", $t289); } }
      { const $t290 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 84], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_"])), "AsString"))); if ($t290 !== undefined) { await $.mset(L0["sheet"], "cells", $t290); } }
      { const $t291 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 85], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs_1"])), "AsString"))); if ($t291 !== undefined) { await $.mset(L0["sheet"], "cells", $t291); } }
      { const $t292 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 86], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["court_date"])), "AsVariant"))); if ($t292 !== undefined) { await $.mset(L0["sheet"], "cells", $t292); } }
      { const $t293 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 87], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["court_dec"])), "AsString"))); if ($t293 !== undefined) { await $.mset(L0["sheet"], "cells", $t293); } }
      { const $t294 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 88], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["decission"])), "AsString"))); if ($t294 !== undefined) { await $.mset(L0["sheet"], "cells", $t294); } }
      { const $t295 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 89], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["dec_date"])), "AsVariant"))); if ($t295 !== undefined) { await $.mset(L0["sheet"], "cells", $t295); } }
      { const $t296 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 90], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["manages"])), "AsString"))); if ($t296 !== undefined) { await $.mset(L0["sheet"], "cells", $t296); } }
      { const $t297 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 91], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["laststat"])), "AsString"))); if ($t297 !== undefined) { await $.mset(L0["sheet"], "cells", $t297); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Next", []);
      await $.tick();
    }
  }
  { const $t298 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t298 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t298); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupCombobox1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupCombobox1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "DBLookupCombobox1Change", async function DBLookupCombobox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.v(C, "DBLookupCombobox1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayreport", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "now")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "now")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

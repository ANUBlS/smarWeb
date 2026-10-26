// Generated from Unit7.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit7", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "DB", "OracleData", "OleServer", "ExcelXP", "ComCtrls", "UnitDataModPCustService", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm7", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "odsxx": {"name": "odsxx", "type": "TOracleDataSet"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "sb_sysdate": {"name": "sb_sysdate", "type": "TOracleDataSet"}, "sb_sysdatetek_dat": {"name": "sb_sysdateTEK_DAT", "type": "TDateTimeField"}, "ods_arch": {"name": "ods_arch", "type": "TOracleDataSet"}, "ods_archostat": {"name": "ods_archOSTAT", "type": "TFloatField"}, "odsxxdat": {"name": "odsxxDAT", "type": "TDateTimeField"}, "odsxxinv_num": {"name": "odsxxINV_NUM", "type": "TWideStringField"}, "odsxxinv_date": {"name": "odsxxINV_DATE", "type": "TDateTimeField"}, "odsxxdebit": {"name": "odsxxDEBIT", "type": "TFloatField"}, "odsxxcredit": {"name": "odsxxCREDIT", "type": "TFloatField"}, "odsxxtrans_date": {"name": "odsxxTRANS_DATE", "type": "TDateTimeField"}, "odsxxpar1": {"name": "odsxxPAR1", "type": "TWideStringField"}, "odsxxpar3": {"name": "odsxxPAR3", "type": "TWideStringField"}, "odsxxpar4": {"name": "odsxxPAR4", "type": "TWideStringField"}, "odsxxpar5": {"name": "odsxxPAR5", "type": "TWideStringField"}, "odsxxpar6": {"name": "odsxxPAR6", "type": "TWideStringField"}, "odsxxpar7": {"name": "odsxxPAR7", "type": "TWideStringField"}, "odsxxpar8": {"name": "odsxxPAR8", "type": "TWideStringField"}, "odsxxpar9": {"name": "odsxxPAR9", "type": "TWideStringField"}, "odsxxmebleg": {"name": "odsxxMEBLEG", "type": "TFloatField"}, "odsxxpar13": {"name": "odsxxPAR13", "type": "TFloatField"}, "odsxxpar14": {"name": "odsxxPAR14", "type": "TFloatField"}, "odsxxpar15": {"name": "odsxxPAR15", "type": "TFloatField"}, "odsxxdebt": {"name": "odsxxDEBT", "type": "TFloatField"}, "odsxxammount": {"name": "odsxxAMMOUNT", "type": "TFloatField"}, "odsxxodenis": {"name": "odsxxODENIS", "type": "TFloatField"}, "odsxxrn": {"name": "odsxxRN", "type": "TFloatField"}, "odsxxpar11": {"name": "odsxxPAR11", "type": "TFloatField"}, "ods_text": {"name": "ods_text", "type": "TOracleDataSet"}, "ods_texttext": {"name": "ods_textTEXT", "type": "TWideStringField"}, "odsxxyanacaq": {"name": "odsxxYANACAQ", "type": "TFloatField"}, "odsxx1": {"name": "odsxx1", "type": "TOracleDataSet"}, "odsxx1par11": {"name": "odsxx1PAR11", "type": "TFloatField"}, "odsxx1dat": {"name": "odsxx1DAT", "type": "TDateTimeField"}, "odsxx1inv_num": {"name": "odsxx1INV_NUM", "type": "TWideStringField"}, "odsxx1inv_date": {"name": "odsxx1INV_DATE", "type": "TDateTimeField"}, "odsxx1debit": {"name": "odsxx1DEBIT", "type": "TFloatField"}, "odsxx1credit": {"name": "odsxx1CREDIT", "type": "TFloatField"}, "odsxx1trans_date": {"name": "odsxx1TRANS_DATE", "type": "TDateTimeField"}, "odsxx1par1": {"name": "odsxx1PAR1", "type": "TWideStringField"}, "odsxx1par3": {"name": "odsxx1PAR3", "type": "TWideStringField"}, "odsxx1par4": {"name": "odsxx1PAR4", "type": "TWideStringField"}, "odsxx1par5": {"name": "odsxx1PAR5", "type": "TWideStringField"}, "odsxx1par6": {"name": "odsxx1PAR6", "type": "TWideStringField"}, "odsxx1par7": {"name": "odsxx1PAR7", "type": "TWideStringField"}, "odsxx1par8": {"name": "odsxx1PAR8", "type": "TWideStringField"}, "odsxx1par9": {"name": "odsxx1PAR9", "type": "TWideStringField"}, "odsxx1mebleg": {"name": "odsxx1MEBLEG", "type": "TFloatField"}, "odsxx1par13": {"name": "odsxx1PAR13", "type": "TFloatField"}, "odsxx1par14": {"name": "odsxx1PAR14", "type": "TFloatField"}, "odsxx1par15": {"name": "odsxx1PAR15", "type": "TFloatField"}, "odsxx1debt": {"name": "odsxx1DEBT", "type": "TFloatField"}, "odsxx1ammount": {"name": "odsxx1AMMOUNT", "type": "TFloatField"}, "odsxx1odenis": {"name": "odsxx1ODENIS", "type": "TFloatField"}, "odsxx1yanacaq": {"name": "odsxx1YANACAQ", "type": "TFloatField"}, "odsxx1rn": {"name": "odsxx1RN", "type": "TFloatField"}, "odsxx1bonus": {"name": "odsxx1BONUS", "type": "TFloatField"}, "odsxx1id": {"name": "odsxx1ID", "type": "TWideStringField"}, "ods_dat": {"name": "ods_dat", "type": "TOracleDataSet"}, "ods_datdat": {"name": "ods_datDAT", "type": "TWideStringField"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "ods_textcusttype": {"name": "ods_textCUSTTYPE", "type": "TWideStringField"}, "odsxx1litr": {"name": "odsxx1LITR", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Form7", null, "TForm7");
  });
  U.method("TForm7", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.v(C, "sb_sysdateTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.v(C, "sb_sysdateTEK_DAT")), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm7", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "sahil.xlsx")])));
  try {
    { const $t2 = 100;
      L0["openedxlscnt"] = 1;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t3 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t2))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["Sheet1"]));
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
  L0["v_bdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["v_edate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  {
    const $t4 = (await $.v(C, "odsxx"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["V_ACCID", (await $.mv((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "Ods_closAccountID")), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["begindat", (await $.wv([$t4], "v_BDate", { get: async () => L0["v_bdate"], set: async (v) => { L0["v_bdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["enddat", (await $.wv([$t4], "v_eDate", { get: async () => L0["v_edate"], set: async (v) => { L0["v_edate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  {
    const $t5 = (await $.v(C, "ods_arch"));
    await $.stmt($.wcall([$t5], "close", [], C));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["v_accid", (await $.mv((await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "Ods_closAccountID")), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["v_begindat", (await $.wv([$t5], "v_BDate", { get: async () => L0["v_bdate"], set: async (v) => { L0["v_bdate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "open", [], C));
  }
  await $.mcall((await $.v(C, "odsxx")), "First", []);
  L0["row"] = 10;
  { const $t6 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(1, L0["j"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccount")), "fieldbyname", ["name_1"])), "AsString"))); if ($t6 !== undefined) { await $.mset(L0["sheet"], "cells", $t6); } }
  { const $t7 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(3, L0["j"]), 2], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par3"])), "AsString"))); if ($t7 !== undefined) { await $.mset(L0["sheet"], "cells", $t7); } }
  { const $t8 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(4, L0["j"]), 2], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par4"])), "AsString"))); if ($t8 !== undefined) { await $.mset(L0["sheet"], "cells", $t8); } }
  { const $t9 = $.sub((await $.mv((await $.v(C, "odsxx")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t10 = true;
    for (;;) {
      if (!$t10) { L0["a"] = $.succ(L0["a"], 1); }
      $t10 = false;
      if (!($.ord(L0["a"]) <= $.ord($t9))) break;
      try {
        { const $t12 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 1], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["dat"])), "AsString"))); if ($t12 !== undefined) { await $.mset(L0["sheet"], "cells", $t12); } }
        { const $t13 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 2], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["inv_num"])), "AsString"))); if ($t13 !== undefined) { await $.mset(L0["sheet"], "cells", $t13); } }
        { const $t14 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 3], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par6"])), "AsString"))); if ($t14 !== undefined) { await $.mset(L0["sheet"], "cells", $t14); } }
        { const $t15 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 4], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par8"])), "AsString"))); if ($t15 !== undefined) { await $.mset(L0["sheet"], "cells", $t15); } }
        { const $t16 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 5], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par11"])), "AsString"))); if ($t16 !== undefined) { await $.mset(L0["sheet"], "cells", $t16); } }
        { const $t17 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 6], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par5"])), "AsString"))); if ($t17 !== undefined) { await $.mset(L0["sheet"], "cells", $t17); } }
        { const $t18 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 7], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["par13"])), "AsString"))); if ($t18 !== undefined) { await $.mset(L0["sheet"], "cells", $t18); } }
        { const $t19 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 8], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["ammount"])), "AsString"))); if ($t19 !== undefined) { await $.mset(L0["sheet"], "cells", $t19); } }
        { const $t20 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(10, L0["i"]), 9], (await $.mv((await $.mcall((await $.v(C, "odsxx")), "fieldbyname", ["odenis"])), "AsString"))); if ($t20 !== undefined) { await $.mset(L0["sheet"], "cells", $t20); } }
        L0["i"] = $.add(L0["i"], 1);
        await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Range")), [$.add("A", (await $.call(C, "IntToStr", [L0["row"]]))), $.add("I", (await $.call(C, "IntToStr", [L0["row"]])))])), "Borders")), "LineStyle", 1);
        L0["row"] = $.add(L0["row"], 1);
        await $.mcall((await $.v(C, "odsxx")), "next", []);
      } catch ($t11) {
        $.rethrowControl($t11);
        $.handled($t11);
      }
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 1])), "Font")), "Bold", true);
  { const $t21 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 1], "       CƏMİ"); if ($t21 !== undefined) { await $.mset(L0["sheet"], "cells", $t21); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 4])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 8])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 9])), "Font")), "Bold", true);
  { const $t22 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 8], $.add($.add("=SUM(H10:H", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t22 !== undefined) { await $.mset(L0["sheet"], "cells", $t22); } }
  { const $t23 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 9], $.add($.add("=SUM(I10:I", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t23 !== undefined) { await $.mset(L0["sheet"], "cells", $t23); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 1])), "Font")), "Bold", true);
  { const $t24 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 1], "G /Ə/ qalıq"); if ($t24 !== undefined) { await $.mset(L0["sheet"], "cells", $t24); } }
  { const $t25 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 2], (await $.mv((await $.v(C, "ods_archOSTAT")), "AsString"))); if ($t25 !== undefined) { await $.mset(L0["sheet"], "cells", $t25); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 2), 2])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 7])), "Font")), "Bold", true);
  { const $t26 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 7], " Ödənilməli  "); if ($t26 !== undefined) { await $.mset(L0["sheet"], "cells", $t26); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 8])), "Font")), "Bold", true);
  { const $t27 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 3), 8], $.add($.add($.add($.add($.add("=H", (await $.call(C, "IntToStr", [$.add(L0["row"], 1)]))), "+B"), (await $.call(C, "inttostr", [$.add(L0["row"], 2)]))), "-I"), (await $.call(C, "IntToStr", [$.add(L0["row"], 1)])))); if ($t27 !== undefined) { await $.mset(L0["sheet"], "cells", $t27); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 1])), "Font")), "Bold", true);
  { const $t28 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 1], " TƏRTİB ETDİ :  "); if ($t28 !== undefined) { await $.mset(L0["sheet"], "cells", $t28); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 1])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t29 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1], "Şərifli Aygün ___________ "); if ($t29 !== undefined) { await $.mset(L0["sheet"], "cells", $t29); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t30 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7], " TƏSDİQLƏDİ:  Baş mühasib"); if ($t30 !== undefined) { await $.mset(L0["sheet"], "cells", $t30); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t31 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7], "İbrahimova Guzel ___________"); if ($t31 !== undefined) { await $.mset(L0["sheet"], "cells", $t31); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "Font")), "Bold", true);
  { const $t32 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t32 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t32); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm7", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form7")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm7", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "v1_bdate": '', "v1_edate": '', "v_custtype": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "Papa_transport.xlsx")])));
  try {
    { const $t34 = 100;
      L0["openedxlscnt"] = 1;
      let $t35 = true;
      for (;;) {
        if (!$t35) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t35 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t34))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["Sheet1"]));
        await $.tick();
      }
    }
  } catch ($t33) {
    $.rethrowControl($t33);
    $.handled($t33);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  L0["v_bdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["v_edate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  L0["v1_bdate"] = (await $.call(C, "DateToStr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]));
  L0["v1_edate"] = (await $.call(C, "DateToStr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  {
    const $t36 = (await $.v(C, "odsxx1"));
    await $.stmt($.wcall([$t36], "close", [], C));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["V_ACCID", (await $.mv((await $.mv((await $.wv([$t36], "DataModPCustService", C, false)), "Ods_closAccountID")), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["begindat", (await $.wv([$t36], "v_BDate", { get: async () => L0["v_bdate"], set: async (v) => { L0["v_bdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["enddat", (await $.wv([$t36], "v_eDate", { get: async () => L0["v_edate"], set: async (v) => { L0["v_edate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t36], "open", [], C));
  }
  {
    const $t37 = (await $.v(C, "ods_arch"));
    await $.stmt($.wcall([$t37], "close", [], C));
    await $.stmt((await $.wcall([$t37], "SetVariable", ["v_accid", (await $.mv((await $.mv((await $.wv([$t37], "DataModPCustService", C, false)), "Ods_closAccountID")), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t37], "SetVariable", ["v_begindat", (await $.wv([$t37], "v_BDate", { get: async () => L0["v_bdate"], set: async (v) => { L0["v_bdate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t37], "open", [], C));
  }
  await $.mcall((await $.v(C, "odsxx1")), "First", []);
  L0["row"] = 12;
  { const $t38 = await $.iset((await $.mv(L0["sheet"], "cells")), [3, 8], (await $.mv((await $.v(C, "ods_datDAT")), "AsString"))); if ($t38 !== undefined) { await $.mset(L0["sheet"], "cells", $t38); } }
  { const $t39 = await $.iset((await $.mv(L0["sheet"], "cells")), [6, 2], $.add($.add($.add(" Tarix aralığı  ", L0["v1_bdate"]), "  "), L0["v1_edate"])); if ($t39 !== undefined) { await $.mset(L0["sheet"], "cells", $t39); } }
  await $.mcall((await $.v(C, "ods_text")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_text")), "SetVariable", ["v_accid", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_closAccountID")), "AsInteger"))])));
  await $.mcall((await $.v(C, "ods_text")), "Open", []);
  { const $t40 = await $.iset((await $.mv(L0["sheet"], "cells")), [2, 5], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "FieldByName", ["id"])), "AsString"))); if ($t40 !== undefined) { await $.mset(L0["sheet"], "cells", $t40); } }
  { const $t41 = await $.iset((await $.mv(L0["sheet"], "cells")), [5, 2], (await $.mv((await $.v(C, "ods_textTEXT")), "AsString"))); if ($t41 !== undefined) { await $.mset(L0["sheet"], "cells", $t41); } }
  L0["v_custtype"] = (await $.mv((await $.v(C, "ods_textCUSTTYPE")), "AsString"));
  { const $t42 = $.sub((await $.mv((await $.v(C, "odsxx1")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t43 = true;
    for (;;) {
      if (!$t43) { L0["a"] = $.succ(L0["a"], 1); }
      $t43 = false;
      if (!($.ord(L0["a"]) <= $.ord($t42))) break;
      { const $t44 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 1], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["dat"])), "Asstring"))); if ($t44 !== undefined) { await $.mset(L0["sheet"], "cells", $t44); } }
      { const $t45 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 2], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["par3"])), "asstring"))); if ($t45 !== undefined) { await $.mset(L0["sheet"], "cells", $t45); } }
      { const $t46 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 3], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["inv_num"])), "asstring"))); if ($t46 !== undefined) { await $.mset(L0["sheet"], "cells", $t46); } }
      { const $t47 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 4], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["par8"])), "AsString"))); if ($t47 !== undefined) { await $.mset(L0["sheet"], "cells", $t47); } }
      { const $t48 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 5], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["par6"])), "AsString"))); if ($t48 !== undefined) { await $.mset(L0["sheet"], "cells", $t48); } }
      { const $t49 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 6], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["par5"])), "AsString"))); if ($t49 !== undefined) { await $.mset(L0["sheet"], "cells", $t49); } }
      { const $t50 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 7], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["par11"])), "AsString"))); if ($t50 !== undefined) { await $.mset(L0["sheet"], "cells", $t50); } }
      { const $t51 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 8], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["par13"])), "AsString"))); if ($t51 !== undefined) { await $.mset(L0["sheet"], "cells", $t51); } }
      { const $t52 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 9], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["ammount"])), "AsString"))); if ($t52 !== undefined) { await $.mset(L0["sheet"], "cells", $t52); } }
      { const $t53 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 10], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["odenis"])), "AsString"))); if ($t53 !== undefined) { await $.mset(L0["sheet"], "cells", $t53); } }
      { const $t54 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 11], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["yanacaq"])), "AsString"))); if ($t54 !== undefined) { await $.mset(L0["sheet"], "cells", $t54); } }
      { const $t55 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 12], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["litr"])), "AsString"))); if ($t55 !== undefined) { await $.mset(L0["sheet"], "cells", $t55); } }
      { const $t56 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(12, L0["i"]), 13], (await $.mv((await $.mcall((await $.v(C, "odsxx1")), "fieldbyname", ["bonus"])), "AsString"))); if ($t56 !== undefined) { await $.mset(L0["sheet"], "cells", $t56); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Range")), [$.add("A", (await $.call(C, "IntToStr", [L0["row"]]))), $.add("M", (await $.call(C, "IntToStr", [L0["row"]])))])), "Borders")), "LineStyle", 1);
      L0["row"] = $.add(L0["row"], 1);
      await $.mcall((await $.v(C, "odsxx1")), "next", []);
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 8])), "Font")), "Bold", true);
  { const $t57 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 8], "       Yekun"); if ($t57 !== undefined) { await $.mset(L0["sheet"], "cells", $t57); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 9])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 10])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 11])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 12])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 13])), "Font")), "Bold", true);
  { const $t58 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 9], $.add($.add("=SUM(I10:I", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t58 !== undefined) { await $.mset(L0["sheet"], "cells", $t58); } }
  { const $t59 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 10], $.add($.add("=SUM(J10:J", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t59 !== undefined) { await $.mset(L0["sheet"], "cells", $t59); } }
  { const $t60 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 11], $.add($.add("=SUM(K10:K", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t60 !== undefined) { await $.mset(L0["sheet"], "cells", $t60); } }
  { const $t61 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 12], $.add($.add("=SUM(L10:L", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t61 !== undefined) { await $.mset(L0["sheet"], "cells", $t61); } }
  { const $t62 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 1), 13], $.add($.add("=SUM(M10:M", (await $.call(C, "IntToStr", [L0["row"]]))), ")")); if ($t62 !== undefined) { await $.mset(L0["sheet"], "cells", $t62); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 1])), "Font")), "Bold", true);
  { const $t63 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 1], "\"Sifarişçi\" Papalogistika MMC-nin direktoru :"); if ($t63 !== undefined) { await $.mset(L0["sheet"], "cells", $t63); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 1])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t64 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1], "VÖEN: 1402579981"); if ($t64 !== undefined) { await $.mset(L0["sheet"], "cells", $t64); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 1])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 1])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 1])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 1])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t65 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 1], "Ismayılov O. ___________ "); if ($t65 !== undefined) { await $.mset(L0["sheet"], "cells", $t65); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 1])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t66 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7], $.add(" \"İcraçı\" ", L0["v_custtype"])); if ($t66 !== undefined) { await $.mset(L0["sheet"], "cells", $t66); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 7), 7])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t67 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7], $.add("VÖEN  ", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FSVOEN")), "AsString")))); if ($t67 !== undefined) { await $.mset(L0["sheet"], "cells", $t67); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 8), 7])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 7])), "Font")), "Bold", true);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 7])), "WrapText", false);
  await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 7])), "HorizontalAlignment", (await $.v(C, "xlleft")));
  { const $t68 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 7], $.add((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FSPAPA_N")), "AsString")), ".___________")); if ($t68 !== undefined) { await $.mset(L0["sheet"], "cells", $t68); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(L0["row"], 9), 7])), "Font")), "Bold", true);
  { const $t69 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t69 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t69); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

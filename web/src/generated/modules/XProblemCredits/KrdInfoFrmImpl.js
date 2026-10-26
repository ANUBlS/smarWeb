// Generated from KrdInfoFrmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("KrdInfoFrmImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "DBGridEhGrouping", "GridsEh", "DBGridEh", "Buttons", "XFSCtrls", "StdCtrls", "DBCtrls", "XDBCtrls", "DBCtrlsEh", "Mask", "Grids", "DBGrids", "PrCmDMImpl", "ComObj", "SendFrmİmpl"]);
  const C = [U];
  U.defClass("TKrdInfoFrm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xflabel25": {"name": "XFLabel25", "type": "TXFLabel"}, "xflabel26": {"name": "XFLabel26", "type": "TXFLabel"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "zaminlər": {"name": "Zaminlər", "type": "TTabSheet"}, "girovlar": {"name": "Girovlar", "type": "TTabSheet"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xflabel29": {"name": "XFLabel29", "type": "TXFLabel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xflabel33": {"name": "XFLabel33", "type": "TXFLabel"}, "dbedit29": {"name": "DBEdit29", "type": "TDBEdit"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel32": {"name": "XFLabel32", "type": "TXFLabel"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "dbedit28": {"name": "DBEdit28", "type": "TDBEdit"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "dbedit31": {"name": "DBEdit31", "type": "TDBEdit"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "dbedit33": {"name": "DBEdit33", "type": "TDBEdit"}, "dbedit34": {"name": "DBEdit34", "type": "TDBEdit"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xflabel39": {"name": "XFLabel39", "type": "TXFLabel"}, "xflabel40": {"name": "XFLabel40", "type": "TXFLabel"}, "dbedit35": {"name": "DBEdit35", "type": "TDBEdit"}, "dbedit36": {"name": "DBEdit36", "type": "TDBEdit"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "xflabel34": {"name": "XFLabel34", "type": "TXFLabel"}, "xflabel41": {"name": "XFLabel41", "type": "TXFLabel"}, "dbedit30": {"name": "DBEdit30", "type": "TDBEdit"}, "dbedit37": {"name": "DBEdit37", "type": "TDBEdit"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "xflabel42": {"name": "XFLabel42", "type": "TXFLabel"}, "xflabel43": {"name": "XFLabel43", "type": "TXFLabel"}, "dbedit38": {"name": "DBEdit38", "type": "TDBEdit"}, "dbedit39": {"name": "DBEdit39", "type": "TDBEdit"}, "xfpanel24": {"name": "XFPanel24", "type": "TXFPanel"}, "xflabel44": {"name": "XFLabel44", "type": "TXFLabel"}, "xflabel45": {"name": "XFLabel45", "type": "TXFLabel"}, "dbedit40": {"name": "DBEdit40", "type": "TDBEdit"}, "dbedit41": {"name": "DBEdit41", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "xfpanel25": {"name": "XFPanel25", "type": "TXFPanel"}, "xflabel46": {"name": "XFLabel46", "type": "TXFLabel"}, "xflabel47": {"name": "XFLabel47", "type": "TXFLabel"}, "dbedit42": {"name": "DBEdit42", "type": "TDBEdit"}, "dbedit43": {"name": "DBEdit43", "type": "TDBEdit"}, "xfpanel26": {"name": "XFPanel26", "type": "TXFPanel"}, "xflabel48": {"name": "XFLabel48", "type": "TXFLabel"}, "dbedit44": {"name": "DBEdit44", "type": "TDBEdit"}, "xfpanel27": {"name": "XFPanel27", "type": "TXFPanel"}, "xflabel50": {"name": "XFLabel50", "type": "TXFLabel"}, "xflabel51": {"name": "XFLabel51", "type": "TXFLabel"}, "dbedit46": {"name": "DBEdit46", "type": "TDBEdit"}, "dbedit47": {"name": "DBEdit47", "type": "TDBEdit"}, "xfpanel28": {"name": "XFPanel28", "type": "TXFPanel"}, "xflabel52": {"name": "XFLabel52", "type": "TXFLabel"}, "xflabel53": {"name": "XFLabel53", "type": "TXFLabel"}, "dbedit48": {"name": "DBEdit48", "type": "TDBEdit"}, "dbedit49": {"name": "DBEdit49", "type": "TDBEdit"}, "xflabel49": {"name": "XFLabel49", "type": "TXFLabel"}, "dbedit45": {"name": "DBEdit45", "type": "TDBEdit"}, "xfpanel29": {"name": "XFPanel29", "type": "TXFPanel"}, "xflabel54": {"name": "XFLabel54", "type": "TXFLabel"}, "dbedit50": {"name": "DBEdit50", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("KrdInfoFrm", null, "TKrdInfoFrm");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.method("TKrdInfoFrm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SendFrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKrdInfoFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TKrdInfoFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKrdInfoFrm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "sysdat": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "tt": 0, "dat": 0, "dd": 0, "rc": 0, "t_val": 0, "bash": '', "ll": 0, "vv": 0, "ss": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format"] = "#,##0.00";
  L0["number_format_r"] = "#,##0.00%";
  L0["n"] = "yyy";
  L0["d"] = 2;
  L0["f"] = 3;
  L0["createsheet"] = $.fn(async function CreateSheet() {
  const L1 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 25);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 35);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 15);
    { const $t4 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 6], ""); if ($t4 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t4); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 6])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 6])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 6])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t5 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 1], "Ödəməlidir "); if ($t5 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t5); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "size", 13);
    { const $t6 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], " Müqavilənin № si:"); if ($t6 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t6); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    { const $t7 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], $.add(" ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "FieldByName", ["numberofcredit"])), "asstring")))); if ($t7 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t7); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t8 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 5], " Borcalanın adı:"); if ($t8 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t8); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "size", 13);
    { const $t9 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "FieldByName", ["name"])), "asstring"))); if ($t9 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t10 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t10 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t10); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Value", " Tarix");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t11 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], " Qalıq"); if ($t11 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t11); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Value", " Əsas borcdan");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t12 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], " Hesablanmış % dən"); if ($t12 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t12); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t13 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], " Cəmi"); if ($t13 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "first", []);
    await $.stmt($.callv(L0["showsheet"], []));
    L0["ss"] = 0;
    L0["vv"] = 0;
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "RecordCount"));
    { const $t14 = L0["rc"];
      L0["i"] = 1;
      let $t15 = true;
      for (;;) {
        if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
        $t15 = false;
        if (!($.ord(L0["i"]) <= $.ord($t14))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t16 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["sira"])), "asinteger"))); if ($t16 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t16); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t17 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["PAYMENTDATE"])), "asdatetime"))); if ($t17 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t17); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t18 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["rest"])), "asfloat"))); if ($t18 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t18); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t19 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["principal"])), "asfloat"))); if ($t19 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t19); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t20 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["interest"])), "asfloat"))); if ($t20 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t20); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
        { const $t21 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["sm"])), "asfloat"))); if ($t21 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t21); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clred")));
        L0["ss"] = $.add(L0["ss"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["principal"])), "asfloat")));
        L0["vv"] = $.add(L0["vv"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["interest"])), "asfloat")));
        L0["ll"] = $.add(L0["ll"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "FieldByName", ["sm"])), "asfloat")));
        await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t22 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəm"); if ($t22 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t22); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t23 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], L0["ss"]); if ($t23 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t23); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t24 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], L0["vv"]); if ($t24 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t24); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t25 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5], L0["ll"]); if ($t25 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t25); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t26 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6], L0["ll"]); if ($t26 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t26); } }
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":F"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":F"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Schedule")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKrdInfoFrm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "sysdat": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "tt": 0, "dat": 0, "dd": 0, "rc": 0, "t_val": 0, "bash": '', "ll": 0, "vv": 0, "ss": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format"] = "#,##0.00";
  L0["number_format_r"] = "#,##0.00%";
  L0["n"] = "yyy";
  L0["d"] = 2;
  L0["f"] = 3;
  L0["createsheet"] = $.fn(async function CreateSheet() {
  const L1 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t27) {
    $.rethrowControl($t27);
    $.handled($t27);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t28) {
    $.rethrowControl($t28);
    $.handled($t28);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t29) {
    $.rethrowControl($t29);
    $.handled($t29);
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 35);
    { const $t30 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], ""); if ($t30 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t30); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t31 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 1], "Ödəmişdir "); if ($t31 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t31); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "size", 13);
    { const $t32 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], " Müqavilənin № si:"); if ($t32 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t32); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    { const $t33 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], $.add(" ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "FieldByName", ["numberofcredit"])), "asstring")))); if ($t33 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t33); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t34 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 5], " Borcalanın adı:"); if ($t34 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t34); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "size", 13);
    { const $t35 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "FieldByName", ["name"])), "asstring"))); if ($t35 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t35); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t36 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t36 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t36); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Value", " Tarix");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", " Əsas borucdan");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t37 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "Əsas borc. faizdən"); if ($t37 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t37); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t38 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], " Gecikmiş borcdan"); if ($t38 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t38); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t39 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], " Gecikmiş B faizdən"); if ($t39 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t39); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t40 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], " Penya"); if ($t40 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t40); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clred")));
    { const $t41 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], " Cəmi"); if ($t41 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t41); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clred")));
    L0["ss"] = 0;
    L0["vv"] = 0;
    await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "first", []);
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "RecordCount"));
    await $.stmt($.callv(L0["showsheet"], []));
    { const $t42 = L0["rc"];
      L0["i"] = 1;
      let $t43 = true;
      for (;;) {
        if (!$t43) { L0["i"] = $.succ(L0["i"], 1); }
        $t43 = false;
        if (!($.ord(L0["i"]) <= $.ord($t42))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t44 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["sira"])), "asinteger"))); if ($t44 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t44); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t45 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["paydate"])), "asdatetime"))); if ($t45 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t45); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t46 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["payedamt"])), "asfloat"))); if ($t46 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t46); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t47 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["payedintamt"])), "asfloat"))); if ($t47 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t47); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t48 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["payeddueamt"])), "asfloat"))); if ($t48 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t48); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
        { const $t49 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["payeddueintamt"])), "asfloat"))); if ($t49 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t49); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
        { const $t50 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["PAYEDPENALTYAMT"])), "asfloat"))); if ($t50 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t50); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Bold", true);
        { const $t51 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["sm"])), "asfloat"))); if ($t51 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t51); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 8])), "Font")), "Color", (await $.v(C, "clred")));
        L0["ss"] = $.add(L0["ss"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["payedamt"])), "asfloat")));
        L0["vv"] = $.add(L0["vv"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["payedintamt"])), "asfloat")));
        L0["ll"] = $.add(L0["ll"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "FieldByName", ["sm"])), "asfloat")));
        await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t52 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəm"); if ($t52 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t52); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t53 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], L0["ss"]); if ($t53 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t53); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t54 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], L0["vv"]); if ($t54 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t54); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t55 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5], $.add($.add("=sum(E9:E", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t55 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t55); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t56 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6], $.add($.add("=sum(F9:F", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t56 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t56); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 7])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t57 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 7], $.add($.add("=sum(G9:G", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t57 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t57); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 8])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 8])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 8])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t58 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 8], L0["ll"]); if ($t58 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t58); } }
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ":H"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ":H"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "Payments")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TKrdInfoFrm", "XFPanel4Resize", async function XFPanel4Resize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

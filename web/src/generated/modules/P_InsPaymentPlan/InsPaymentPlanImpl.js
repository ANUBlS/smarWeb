// Generated from InsPaymentPlanImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsPaymentPlanImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "HintBox", "Buttons", "ExtCtrls", "ImgList", "StdCtrls", "XFSCtrls", "CMCurrencyEdit", "ComCtrls", "ToolWin", "CMExcelExport", "Grids", "DBGrids", "db", "oracle", "ExcelXP", "OleServer", "comobj", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "DMPaymentPlanImpl", "fmPlanBuilderImpl", "fmPlanFormImpl"]);
  const C = [U];
  U.defClass("TfrmPaymentPlan", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfspeedbutton1": {"name": "XFSpeedButton1", "type": "TXFSpeedButton"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "cmcurrencyedit3": {"name": "CMCurrencyEdit3", "type": "TCMCurrencyEdit"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "cmcurrencyedit4": {"name": "CMCurrencyEdit4", "type": "TCMCurrencyEdit"}, "cmcurrencyedit5": {"name": "CMCurrencyEdit5", "type": "TCMCurrencyEdit"}, "cmcurrencyedit6": {"name": "CMCurrencyEdit6", "type": "TCMCurrencyEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "hberror": {"name": "hbError", "type": "THintBox"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "xfspeedbutton2": {"name": "XFSpeedButton2", "type": "TXFSpeedButton"}, "button1": {"name": "Button1", "type": "TButton"}, "edtbtn": {"name": "edtbtn", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("frmPaymentPlan", null, "TfrmPaymentPlan");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmPaymentPlan")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmPaymentPlan", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "Open", []);
  L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["A1", "C1"])), "Font")), "Size", 12);
  { const $t1 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 2], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "FieldByName", ["policy_num"])), "AsString")), " №-li ƏMLAK SIĞORTASI ŞƏHADƏTNAMƏSİNƏ")); if ($t1 !== undefined) { await $.mset(L0["excel"], "Cells", $t1); } }
  { const $t2 = await $.iset((await $.mv(L0["excel"], "Cells")), [2, 2], "1 №-li ƏLAVƏ"); if ($t2 !== undefined) { await $.mset(L0["excel"], "Cells", $t2); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["B1", "B2"])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["B1", "B2"])), "Font")), "Size", 12);
  { const $t3 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 1], "No"); if ($t3 !== undefined) { await $.mset(L0["excel"], "Cells", $t3); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "wraptext", true);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "ColumnWidth", 20);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "Font")), "BOLD", true);
  { const $t4 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 2], "Tarix"); if ($t4 !== undefined) { await $.mset(L0["excel"], "Cells", $t4); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "wraptext", true);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "ColumnWidth", 20);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "Font")), "BOLD", true);
  { const $t5 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 3], "Sığorta haqqı(AZN)"); if ($t5 !== undefined) { await $.mset(L0["excel"], "Cells", $t5); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "ColumnWidth", 20);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "wraptext", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "Font")), "BOLD", true);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "SetVariable", ["INSID", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "First", []);
  { const $t6 = $.sub((await $.mv((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["index"] = $.succ(L0["index"], 1); }
      $t7 = false;
      if (!($.ord(L0["index"]) <= $.ord($t6))) break;
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Font")), "BOLD", true);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Font")), "Size", 12);
      { const $t8 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "FieldByName", ["no"])), "AsInteger"))); if ($t8 !== undefined) { await $.mset(L0["excel"], "Cells", $t8); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Borders")), "weight", 2);
      { const $t9 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "FieldByName", ["pay_date"])), "asstring"))); if ($t9 !== undefined) { await $.mset(L0["excel"], "Cells", $t9); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2])), "Borders")), "weight", 2);
      { const $t10 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "FieldByName", ["ammount"])), "asstring"))); if ($t10 !== undefined) { await $.mset(L0["excel"], "Cells", $t10); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "Borders")), "weight", 2);
      await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "Next", []);
      await $.tick();
    }
  }
  { const $t11 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1], "CƏMİ:"); if ($t11 !== undefined) { await $.mset(L0["excel"], "Cells", $t11); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2])), "Borders")), "weight", 2);
  { const $t12 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "FieldByName", ["ammount"])), "AsString"))); if ($t12 !== undefined) { await $.mset(L0["excel"], "Cells", $t12); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "Font")), "BOLD", true);
  await $.mcall((await $.mv(L0["excel"], "columns")), "AutoFit", []);
  await $.mset(L0["excel"], "visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "CMCurrencyEdit1Change", async function CMCurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text")), ""))) {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "CMCurrencyEdit4Change", async function CMCurrencyEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "FieldByName", ["AMMOUNT"])), "AsFloat"))))) {
    await $.stmt((await $.call(C, "Showmessage", ["Daxil olunan məbləğ sığorta haqqından böyük olmamalıdır!"])));
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "FieldByName", ["AMMOUNT"])), "AsFloat")));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", $.fdiv(($.mul(((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value"))), 100)), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "FieldByName", ["AMMOUNT"])), "AsFloat"))));
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value")), 0)))))) {
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
  }
  await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "CMCurrencyEdit5DblClick", async function CMCurrencyEdit5DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmPlanForm", (await $.mcall((await $.v(C, "TfmPlanForm")), "Create", [Self])));
  try {
    {
      const $t13 = (await $.v(C, "DMPaymentPlan"));
      const $t14 = (await $.wv([$t13], "ODSPayPlan", C, false));
      await $.stmt($.wcall([$t13, $t14], "Edit", [], C));
    }
    await $.mcall((await $.v(C, "fmPlanForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanForm")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmPlanForm", (await $.mcall((await $.v(C, "TfmPlanForm")), "Create", [Self])));
  try {
    {
      const $t15 = (await $.v(C, "DMPaymentPlan"));
      const $t16 = (await $.wv([$t15], "ODSPayPlan", C, false));
      await $.stmt($.wcall([$t15, $t16], "Edit", [], C));
    }
    await $.mcall((await $.v(C, "fmPlanForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanForm")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMPaymentPlan", (await $.mcall((await $.v(C, "TDMPaymentPlan")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F11"))))) {
    await $.mset((await $.v(C, "edtbtn")), "Visible", true);
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F10"))))) {
    await $.mset((await $.v(C, "edtbtn")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmPaymentPlan", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmPaymentPlan", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "SetVariable", ["insid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "SetVariable", ["p_id", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "edit", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSmesuliyyetShaqqi")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSmesuliyyetShaqqi")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSmesuliyyetShaqqi")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSFerdiqezaShaqqi")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSFerdiqezaShaqqi")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSFerdiqezaShaqqi")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "XFButton1")), "Enabled", true);
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
    await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
    await $.mset((await $.v(C, "XFRadioButton1")), "Visible", true);
    await $.mset((await $.v(C, "XFRadioButton2")), "Visible", true);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit5")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit6")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit5")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit6")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit5")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit6")), "Visible", false);
    await $.mset((await $.v(C, "XFCheckBox1")), "Visible", false);
    await $.mset((await $.v(C, "XFCheckBox2")), "Visible", false);
    await $.mset((await $.v(C, "XFCheckBox3")), "Visible", false);
    await $.mset((await $.v(C, "ToolButton7")), "Enabled", true);
    await $.mset((await $.v(C, "ToolButton1")), "Enabled", true);
  } else {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["payment_type"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
      await $.mset((await $.v(C, "XFRadioButton2")), "Visible", false);
      await $.mset((await $.v(C, "XFRadioButton1")), "Visible", true);
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
      await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", 0);
      await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", 0);
      await $.mset((await $.v(C, "CMCurrencyEdit5")), "Value", 0);
      await $.mset((await $.v(C, "CMCurrencyEdit6")), "Value", 0);
      await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit4")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit5")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit6")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit1")), "Visible", false);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Visible", false);
      await $.mset((await $.v(C, "XFCheckBox1")), "Visible", false);
      await $.mset((await $.v(C, "ToolButton7")), "Enabled", false);
      await $.mset((await $.v(C, "ToolButton1")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
      await $.mset((await $.v(C, "XFRadioButton1")), "Visible", false);
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
      await $.mset((await $.v(C, "XFRadioButton2")), "Visible", true);
      await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["percent"])), "AsFloat")));
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["percent_f"])), "AsFloat")));
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["percent_m"])), "AsFloat")));
      await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["Ammount"])), "AsFloat")));
      await $.mset((await $.v(C, "CMCurrencyEdit5")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["Ammount_f"])), "AsFloat")));
      await $.mset((await $.v(C, "CMCurrencyEdit6")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "FieldByName", ["Ammount_m"])), "AsFloat")));
      await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", true);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit4")), "Enabled", true);
      await $.mset((await $.v(C, "CMCurrencyEdit5")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit6")), "Enabled", false);
      await $.mset((await $.v(C, "CMCurrencyEdit1")), "Visible", true);
      await $.mset((await $.v(C, "XFCheckBox1")), "Visible", true);
      await $.mset((await $.v(C, "ToolButton1")), "Enabled", false);
      await $.mset((await $.v(C, "ToolButton7")), "Enabled", false);
      await $.mset((await $.v(C, "ToolButton1")), "Enabled", false);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSplancontract")), "FieldByName", ["state"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "ToolButton3")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "ToolButton3")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "edtbtnClick", async function edtbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "sb_aca")), "CallProcedure", ["checkadvancedobjectaccess", ["EDT_PLAN_SETTING"]])));
  await $.mset((await $.v(C, "dbgrid1")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "Open", []);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), false)))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!!Ödəniş növü seçilməyib!!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!! Siz tam ödəniş seçdiyiniz üçün plan yiğmaq olmur!!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!! Hissələrlə ödənişi təsdiqləmədən plan yiğmaq olmur!!!"])));
    return L0.result;
  }
  if ($.truthy(true)) {
    {
      const $t17 = (await $.v(C, "DMPaymentPlan"));
      const $t18 = (await $.wv([$t17], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t17, $t18], "CallProcedure", ["checkadvancedobjectaccess", ["ADDPAYMET_PLAN"]], C)));
    }
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  try {
    await $.set(C, "fmPlanBuilder", (await $.mcall((await $.v(C, "TfmPlanBuilder")), "Create", [Self])));
    await $.mcall((await $.v(C, "fmPlanBuilder")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanBuilder")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "DMPaymentPlan"));
    const $t20 = (await $.wv([$t19], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t19, $t20], "CallProcedure", ["checkadvancedobjectaccess", ["DELETEPAYMET_PLAN"]], C)));
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Plan ləğv olunacaq!", (await $.v(C, "mtWarning")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t21 = (await $.v(C, "DMPaymentPlan"));
      const $t22 = (await $.wv([$t21], "OPCOMMON", C, false));
      const $t23 = (await $.wv([$t21, $t22], "ODSContracts", C, false));
      try {
        await $.stmt((await $.wcall([$t21, $t22, $t23], "CallProcedure", ["clearplan", [(await $.mv((await $.wcall([$t21, $t22, $t23], "FieldByName", ["ID"], C)), "asInteger"))]], C)));
        await $.mcall((await $.wv([$t21, $t22, $t23], "ODSPayPlan", C, false)), "refresh", []);
        await $.mcall((await $.wv([$t21, $t22, $t23], "DSPaymentsetting", C, false)), "Refresh", []);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit1", C, false)), "Value", 0);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit2", C, false)), "Value", 0);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit3", C, false)), "Value", 0);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit4", C, false)), "Value", 0);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit5", C, false)), "Value", 0);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit6", C, false)), "Value", 0);
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit1", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "CMCurrencyEdit4", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFCheckBox1", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFCheckBox2", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFCheckBox3", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFRadioButton1", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "true", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFRadioButton2", C, false)), "Visible", (await $.wv([$t21, $t22, $t23], "true", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFRadioButton1", C, false)), "Checked", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFRadioButton2", C, false)), "Checked", (await $.wv([$t21, $t22, $t23], "false", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "ToolButton1", C, false)), "Enabled", (await $.wv([$t21, $t22, $t23], "true", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "ToolButton7", C, false)), "Enabled", (await $.wv([$t21, $t22, $t23], "true", C, false)));
        await $.mset((await $.wv([$t21, $t22, $t23], "XFButton1", C, false)), "Enabled", (await $.wv([$t21, $t22, $t23], "true", C, false)));
      } catch ($t24) {
        $.rethrowControl($t24);
        if ($.excIs($t24, "EOracleError")) {
          L0["e"] = $.exc($t24);
          await $.stmt((await $.mcall((await $.wv([$t21, $t22, $t23], "hbError", C, false)), "ShowMessage", [$.add($.add((await $.wcall([$t21, $t22, $t23], "IntToStr", [(await $.mv((await $.wv([$t21, $t22, $t23], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"))], C)), " "), (await $.mv((await $.wv([$t21, $t22, $t23], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))])));
        }
        else { throw $t24; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  {
    const $t25 = (await $.v(C, "DMPaymentPlan"));
    const $t26 = (await $.wv([$t25], "ODSPayPlan", C, false));
    await $.stmt($.wcall([$t25, $t26], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "Open", []);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), false)))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!!Ödəniş növü seçilməyib!!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!! Siz tam ödəniş seçdiyiniz üçün plan yiğmaq olmur!!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DMPaymentPlan")), "DSPaymentsetting")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!! Hissələrlə ödənişi təsdiqləmədən plan yiğmaq olmur!!!"])));
    return L0.result;
  }
  {
    const $t27 = (await $.v(C, "DMPaymentPlan"));
    const $t28 = (await $.wv([$t27], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t27, $t28], "CallProcedure", ["checkadvancedobjectaccess", ["ADDPAYMET_PLAN"]], C)));
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  await $.set(C, "fmPlanForm", (await $.mcall((await $.v(C, "TfmPlanForm")), "Create", [Self])));
  try {
    {
      const $t29 = (await $.v(C, "DMPaymentPlan"));
      const $t30 = (await $.wv([$t29], "ODSPayPlan", C, false));
      await $.stmt($.wcall([$t29, $t30], "Insert", [], C));
    }
    await $.mcall((await $.v(C, "fmPlanForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanForm")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ppayment_type": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "DMPaymentPlan"));
    const $t32 = (await $.wv([$t31], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t31, $t32], "CallProcedure", ["checkadvancedobjectaccess", ["COMMITPAYMENT_PLAN_SETTING"]], C)));
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), false)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Heç bir plan növü seçilməyib"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSins_dict_initial_payment")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSins_dict_initial_payment")), "Open", []);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true)), async () => ($.lt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "DSins_dict_initial_payment")), "FieldByName", ["PERCENT"])), "AsFloat")))))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! İlkin ödəniləcək % sazlamya uyğun sazlanmış %-dən kiçikdir."])));
    return L0.result;
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value")), 0)))))) {
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    L0["ppayment_type"] = 1;
  } else {
    L0["ppayment_type"] = 2;
  }
  {
    const $t33 = (await $.v(C, "DMPaymentPlan"));
    await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "Edit", []);
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["cid"])), "AsFloat", (await $.wv([$t33], "contactid", C, false)));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["payment_type"])), "AsFloat", (await $.wv([$t33], "ppayment_type", { get: async () => L0["ppayment_type"], set: async (v) => { L0["ppayment_type"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["percent"])), "AsFloat", (await $.mv((await $.wv([$t33], "CMCurrencyEdit1", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["percent_f"])), "AsFloat", (await $.mv((await $.wv([$t33], "CMCurrencyEdit2", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["percent_m"])), "AsFloat", (await $.mv((await $.wv([$t33], "CMCurrencyEdit3", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat", (await $.mv((await $.wv([$t33], "CMCurrencyEdit4", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["AMMOUNT_f"])), "AsFloat", (await $.mv((await $.wv([$t33], "CMCurrencyEdit5", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["AMMOUNT_m"])), "AsFloat", (await $.mv((await $.wv([$t33], "CMCurrencyEdit6", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "FieldByName", ["op_id"])), "AsFloat", 0);
    await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "Post", []);
    await $.mcall((await $.wv([$t33], "DSPaymentsetting", C, false)), "RefreshRecord", []);
    await $.stmt((await $.wcall([$t33], "Showmessage", ["Plan haqqındaki məlumat təsdiqləndi."], C)));
    await $.mcall((await $.mv((await $.wv([$t33], "DMPaymentPlan", C, false)), "DSPaymentsetting")), "Refresh", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "DMPaymentPlan", C, false)), "DSPaymentsetting")), "FieldByName", ["payment_type"])), "AsFloat")), 1))) {
      await $.mset((await $.wv([$t33], "XFRadioButton2", C, false)), "Visible", (await $.wv([$t33], "false", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "DMPaymentPlan", C, false)), "DSPaymentsetting")), "FieldByName", ["payment_type"])), "AsFloat")), 2))) {
      await $.mset((await $.wv([$t33], "XFRadioButton1", C, false)), "Visible", (await $.wv([$t33], "false", C, false)));
    }
    await $.mset((await $.wv([$t33], "XFButton1", C, false)), "Enabled", (await $.wv([$t33], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "XFRadioButton1Click", async function XFRadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit5")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit6")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit5")), "Enabled", false);
    await $.mset((await $.v(C, "CMCurrencyEdit6")), "Enabled", false);
    await $.mset((await $.v(C, "XFCheckBox1")), "Visible", false);
    await $.mset((await $.v(C, "XFCheckBox2")), "Visible", false);
    await $.mset((await $.v(C, "XFCheckBox3")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit5")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit6")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "XFRadioButton2Click", async function XFRadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", 0);
    await $.mset((await $.v(C, "XFCheckBox1")), "Visible", true);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", true);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Enabled", true);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Visible", true);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPaymentPlan", "XFSpeedButton1Click", async function XFSpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "Open", []);
  L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["A1", "C1"])), "Font")), "Size", 12);
  { const $t34 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 2], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "FieldByName", ["policy_num"])), "AsString")), " №-li ƏMLAK SIĞORTASI ŞƏHADƏTNAMƏSİNƏ")); if ($t34 !== undefined) { await $.mset(L0["excel"], "Cells", $t34); } }
  { const $t35 = await $.iset((await $.mv(L0["excel"], "Cells")), [2, 2], "1 №-li ƏLAVƏ"); if ($t35 !== undefined) { await $.mset(L0["excel"], "Cells", $t35); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["B1", "B2"])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["B1", "B2"])), "Font")), "Size", 12);
  { const $t36 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 1], "No"); if ($t36 !== undefined) { await $.mset(L0["excel"], "Cells", $t36); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "wraptext", true);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "ColumnWidth", 20);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 1])), "Font")), "BOLD", true);
  { const $t37 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 2], "Tarix"); if ($t37 !== undefined) { await $.mset(L0["excel"], "Cells", $t37); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "wraptext", true);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "ColumnWidth", 20);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 2])), "Font")), "BOLD", true);
  { const $t38 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 3], "Sığorta haqqı(AZN)"); if ($t38 !== undefined) { await $.mset(L0["excel"], "Cells", $t38); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "ColumnWidth", 20);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "wraptext", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [5, 3])), "Font")), "BOLD", true);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "SetVariable", ["INSID", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "First", []);
  { const $t39 = $.sub((await $.mv((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t40 = true;
    for (;;) {
      if (!$t40) { L0["index"] = $.succ(L0["index"], 1); }
      $t40 = false;
      if (!($.ord(L0["index"]) <= $.ord($t39))) break;
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Font")), "BOLD", true);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Font")), "Size", 12);
      { const $t41 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "FieldByName", ["no"])), "AsInteger"))); if ($t41 !== undefined) { await $.mset(L0["excel"], "Cells", $t41); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Borders")), "weight", 2);
      { const $t42 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "FieldByName", ["pay_date"])), "asstring"))); if ($t42 !== undefined) { await $.mset(L0["excel"], "Cells", $t42); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2])), "Borders")), "weight", 2);
      { const $t43 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "FieldByName", ["ammount"])), "asstring"))); if ($t43 !== undefined) { await $.mset(L0["excel"], "Cells", $t43); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "Borders")), "weight", 2);
      await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSPayPlan")), "Next", []);
      await $.tick();
    }
  }
  { const $t44 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1], "CƏMİ:"); if ($t44 !== undefined) { await $.mset(L0["excel"], "Cells", $t44); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 1])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 2])), "Borders")), "weight", 2);
  { const $t45 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentPlan")), "ODSContracts")), "FieldByName", ["ammount"])), "AsString"))); if ($t45 !== undefined) { await $.mset(L0["excel"], "Cells", $t45); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 6), 3])), "Font")), "BOLD", true);
  { const $t46 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 1], "SIĞORTAÇININ NÜMAYƏNDƏSİ:"); if ($t46 !== undefined) { await $.mset(L0["excel"], "Cells", $t46); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 1])), (await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 1]))])), "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 1])), (await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 1]))])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 1])), (await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 1]))])), "Font")), "Size", 11);
  { const $t47 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 3], "             SIĞORTALI:"); if ($t47 !== undefined) { await $.mset(L0["excel"], "Cells", $t47); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 3])), (await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 3]))])), "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 3])), (await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 3]))])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Range")), [(await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 9), 3])), (await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 3]))])), "Font")), "Size", 11);
  { const $t48 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 11), 1], " M.Y________________________________"); if ($t48 !== undefined) { await $.mset(L0["excel"], "Cells", $t48); } }
  { const $t49 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 11), 3], "________________________________"); if ($t49 !== undefined) { await $.mset(L0["excel"], "Cells", $t49); } }
  { const $t50 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 1], "                     imza"); if ($t50 !== undefined) { await $.mset(L0["excel"], "Cells", $t50); } }
  { const $t51 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 12), 3], "                     imza"); if ($t51 !== undefined) { await $.mset(L0["excel"], "Cells", $t51); } }
  await $.mcall((await $.mv(L0["excel"], "columns")), "AutoFit", []);
  await $.mset(L0["excel"], "visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmPaymentPlan", (await $.mcall((await $.v(C, "TfrmPaymentPlan")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

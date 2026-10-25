// Generated from inv_ArchiveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("inv_ArchiveImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Menus", "ImgList", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ExtCtrls", "OracleData", "OleServer", "comobj", "ExcelXP", "PaymentDataModul", "PaymentDecreeImpl", "CurrencyToHR_Azeri_Impl", "UntMainReport", "UntSecondReport", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("Tinv_Archive", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbarchivegrid": {"name": "DBArchiveGrid", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "assignment": {"name": "Assignment", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editpnum": {"name": "EditPNUM", "type": "TEdit"}, "editdacc_no": {"name": "EditDACC_NO", "type": "TEdit"}, "editkacc_no": {"name": "EditKACC_NO", "type": "TEdit"}, "editammount": {"name": "EditAMMOUNT", "type": "TEdit"}, "editkaccname": {"name": "EditKACCNAME", "type": "TEdit"}, "editkbname": {"name": "EditKBNAME", "type": "TEdit"}, "imagelist": {"name": "ImageList", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("inv_Archive", null, "Tinv_Archive");
  });
  U.method("Tinv_Archive", "EditPNUMKeyPress", async function EditPNUMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinv_Archive", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "DBArchiveGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinv_Archive", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinv_Archive", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinv_Archive", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "paymentnumber": '', "deleteid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "SetVariable", ["INV_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müqavilə ilə bağlı məlumatlar tam silinməmiş silinmə etmək olmaz!!!"])));
    return L0.result;
  }
  L0["paymentnumber"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["NUM"])), "AsString"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Do you want to delete Invoices №%s?  ", [L0["paymentnumber"]]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t3 = (await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive"));
      const $t4 = (await $.mv((await $.wv([$t3], "PaymentDataMod", C, false)), "OPPayment"));
      await $.wset([$t3, $t4], "deleteID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["deleteid"], set: async (v) => { L0["deleteid"] = v; }, local: true });
      await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["delete_invoices", [(await $.wv([$t3, $t4], "deleteID", { get: async () => L0["deleteid"], set: async (v) => { L0["deleteid"] = v; }, local: true }, false))]], C)));
      await $.stmt($.wcall([$t3, $t4], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinv_Archive", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PaymentDecree")), "isUpdate", true);
  await $.mset((await $.v(C, "PaymentDecree")), "cid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBArchiveGrid")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  {
    const $t5 = (await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive"));
    const $t6 = (await $.wv([$t5], "PaymentDecree", C, false));
    if ($.truthy((await $.wv([$t5, $t6], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t5, $t6], "ShowMessage", ["Cədvəldə Məlumat Yoxdur!!!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t5, $t6], "GroupBox5", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "ToolButton12", C, false)), "Enabled", (await $.wv([$t5, $t6], "true", C, false)));
      await $.mset((await $.wv([$t5, $t6], "Panel25", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "GroupBox4", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "GroupBox6", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "Panel26", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "GroupBox7", C, false)), "Visible", (await $.wv([$t5, $t6], "true", C, false)));
      await $.mset((await $.wv([$t5, $t6], "GroupBox8", C, false)), "Visible", (await $.wv([$t5, $t6], "true", C, false)));
      await $.mset((await $.wv([$t5, $t6], "edPrescription", C, false)), "Text", "");
      await $.mset((await $.wv([$t5, $t6], "EDAInn", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "CheckBox", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      await $.mset((await $.wv([$t5, $t6], "Col1", C, false)), "Text", "");
      await $.mset((await $.wv([$t5, $t6], "Col2", C, false)), "Text", "");
      await $.mset((await $.wv([$t5, $t6], "Col3", C, false)), "Text", "");
      await $.mset((await $.wv([$t5, $t6], "Col4", C, false)), "Text", "");
      await $.mcall((await $.mv((await $.wv([$t5, $t6], "PaymentDataMod", C, false)), "Ds_Inv_child")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t5, $t6], "PaymentDataMod", C, false)), "Ds_Inv_child")), "SetVariable", ["INV_ID", (await $.wv([$t5, $t6], "cid", C, false))])));
      await $.mcall((await $.mv((await $.wv([$t5, $t6], "PaymentDataMod", C, false)), "Ds_Inv_child")), "Open", []);
      await $.mset((await $.wv([$t5, $t6], "DateTimePicker1", C, false)), "DateTime", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["pdate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t5, $t6], "DBName", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbname"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBCod", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbcod"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "dbinn", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbinn"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dacc_no"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["dbswift"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "CBKBName", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["kbname"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EKBInn", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["kbinn"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["kacc_no"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EdNum", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["num"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "edPrescription", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["prescription"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "Col1", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col1"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "Col2", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col2"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "Col3", C, false)), "text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col3"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "Col4", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col4"], C)), "AsString")));
      await $.mset((await $.wv([$t5, $t6], "EDAName", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "PaymentDataMod", C, false)), "Ds_Acoount")), "FieldByName", ["name"])), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBGrid1", C, false)), "Columns")), "Items")), [1])), "Title")), "Caption", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col1"], C)), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBGrid1", C, false)), "Columns")), "Items")), [2])), "Title")), "Caption", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col2"], C)), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBGrid1", C, false)), "Columns")), "Items")), [3])), "Title")), "Caption", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col3"], C)), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBGrid1", C, false)), "Columns")), "Items")), [4])), "Title")), "Caption", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["col4"], C)), "AsString")));
      await $.mcall((await $.wv([$t5, $t6], "DBGrid1", C, false)), "Refresh", []);
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinv_Archive", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "open", []);
  L0["excel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Add", []);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["B1", "B8"])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["D1", "D8"])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["C1", "C8"])), "Borders")), "weight", 2);
  await $.mset((await $.idx((await $.mv(L0["excel"], "Range")), ["C1", "C8"])), "Mergecells", true);
  { const $t7 = await $.iset((await $.mv(L0["excel"], "Cells")), [1, 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["dbname"])), "AsString"))); if ($t7 !== undefined) { await $.mset(L0["excel"], "Cells", $t7); } }
  { const $t8 = await $.iset((await $.mv(L0["excel"], "Cells")), [2, 2], $.add("VÖEN ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["dbinn"])), "AsString")))); if ($t8 !== undefined) { await $.mset(L0["excel"], "Cells", $t8); } }
  { const $t9 = await $.iset((await $.mv(L0["excel"], "Cells")), [3, 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["kbname"])), "AsString"))); if ($t9 !== undefined) { await $.mset(L0["excel"], "Cells", $t9); } }
  { const $t10 = await $.iset((await $.mv(L0["excel"], "Cells")), [4, 2], $.add("H/h - ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["dacc_no"])), "AsString")))); if ($t10 !== undefined) { await $.mset(L0["excel"], "Cells", $t10); } }
  { const $t11 = await $.iset((await $.mv(L0["excel"], "Cells")), [5, 2], $.add("VÖEN ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["kbinn"])), "AsString")))); if ($t11 !== undefined) { await $.mset(L0["excel"], "Cells", $t11); } }
  { const $t12 = await $.iset((await $.mv(L0["excel"], "Cells")), [6, 2], $.add("M/h ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["kacc_no"])), "AsString")))); if ($t12 !== undefined) { await $.mset(L0["excel"], "Cells", $t12); } }
  { const $t13 = await $.iset((await $.mv(L0["excel"], "Cells")), [7, 2], $.add("Kod ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["dbcod"])), "AsString")))); if ($t13 !== undefined) { await $.mset(L0["excel"], "Cells", $t13); } }
  { const $t14 = await $.iset((await $.mv(L0["excel"], "Cells")), [8, 2], $.add("SWIFT Bik   ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["dbswift"])), "AsString")))); if ($t14 !== undefined) { await $.mset(L0["excel"], "Cells", $t14); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["B1", "B8"])), "Font")), "BOLD", true);
  { const $t15 = await $.iset((await $.mv(L0["excel"], "Cells")), [3, 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["kbname"])), "AsString"))); if ($t15 !== undefined) { await $.mset(L0["excel"], "Cells", $t15); } }
  { const $t16 = await $.iset((await $.mv(L0["excel"], "Cells")), [4, 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["kbinn"])), "AsString"))); if ($t16 !== undefined) { await $.mset(L0["excel"], "Cells", $t16); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["D3", "D4"])), "Font")), "BOLD", true);
  { const $t17 = await $.iset((await $.mv(L0["excel"], "Cells")), [9, 3], $.add("HESAB ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["num"])), "AsString")))); if ($t17 !== undefined) { await $.mset(L0["excel"], "Cells", $t17); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [9, 3])), "Font")), "BOLD", true);
  { const $t18 = await $.iset((await $.mv(L0["excel"], "Cells")), [11, 3], $.add("Əsas: ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["prescription"])), "AsString")))); if ($t18 !== undefined) { await $.mset(L0["excel"], "Cells", $t18); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [11, 3])), "wraptext", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [11, 3])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["A13", "E13"])), "Borders")), "weight", 2);
  { const $t19 = await $.iset((await $.mv(L0["excel"], "Cells")), [13, 1], "No"); if ($t19 !== undefined) { await $.mset(L0["excel"], "Cells", $t19); } }
  { const $t20 = await $.iset((await $.mv(L0["excel"], "Cells")), [13, 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["col1"])), "AsString"))); if ($t20 !== undefined) { await $.mset(L0["excel"], "Cells", $t20); } }
  { const $t21 = await $.iset((await $.mv(L0["excel"], "Cells")), [13, 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["col2"])), "AsString"))); if ($t21 !== undefined) { await $.mset(L0["excel"], "Cells", $t21); } }
  { const $t22 = await $.iset((await $.mv(L0["excel"], "Cells")), [13, 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["col3"])), "AsString"))); if ($t22 !== undefined) { await $.mset(L0["excel"], "Cells", $t22); } }
  { const $t23 = await $.iset((await $.mv(L0["excel"], "Cells")), [13, 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds")), "FieldByName", ["col4"])), "AsString"))); if ($t23 !== undefined) { await $.mset(L0["excel"], "Cells", $t23); } }
  await $.mset((await $.idx((await $.mv(L0["excel"], "range")), ["A13", "F13"])), "wraptext", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "range")), ["A13", "F13"])), "Font")), "BOLD", true);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "SetVariable", ["INV_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "First", []);
  { const $t24 = $.sub((await $.mv((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t25 = true;
    for (;;) {
      if (!$t25) { L0["index"] = $.succ(L0["index"], 1); }
      $t25 = false;
      if (!($.ord(L0["index"]) <= $.ord($t24))) break;
      await $.mset((await $.idx((await $.mv(L0["excel"], "range")), ["A13", "F13"])), "wraptext", true);
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 1])), "NUMBERFORMAT", (await $.call(C, "AnsiChar", ["@"])));
      { const $t26 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "FieldByName", ["id"])), "asstring"))); if ($t26 !== undefined) { await $.mset(L0["excel"], "Cells", $t26); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 1])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 1])), "Borders")), "weight", 2);
      { const $t27 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "FieldByName", ["col1"])), "asstring"))); if ($t27 !== undefined) { await $.mset(L0["excel"], "Cells", $t27); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 2])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 2])), "Borders")), "weight", 2);
      { const $t28 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "FieldByName", ["col2"])), "asstring"))); if ($t28 !== undefined) { await $.mset(L0["excel"], "Cells", $t28); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 3])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 3])), "Borders")), "weight", 2);
      { const $t29 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "FieldByName", ["col3"])), "asstring"))); if ($t29 !== undefined) { await $.mset(L0["excel"], "Cells", $t29); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 4])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 4])), "Borders")), "weight", 2);
      { const $t30 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "FieldByName", ["col4"])), "asstring"))); if ($t30 !== undefined) { await $.mset(L0["excel"], "Cells", $t30); } }
      await $.mset((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 5])), "ColumnWidth", 20);
      await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 5])), "Borders")), "weight", 2);
      await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Next", []);
      await $.tick();
    }
  }
  { const $t31 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 2], "CƏMİ:"); if ($t31 !== undefined) { await $.mset(L0["excel"], "Cells", $t31); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 2])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 2])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 1])), "Borders")), "weight", 2);
  { const $t32 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 2], "ƏDV 18%:"); if ($t32 !== undefined) { await $.mset(L0["excel"], "Cells", $t32); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 2])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 2])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 1])), "Borders")), "weight", 2);
  { const $t33 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 2], "YEKUN:"); if ($t33 !== undefined) { await $.mset(L0["excel"], "Cells", $t33); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 2])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 2])), "Font")), "BOLD", true);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 1])), "Borders")), "weight", 2);
  { const $t34 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["CEMI_COL2"])), "asstring"))); if ($t34 !== undefined) { await $.mset(L0["excel"], "Cells", $t34); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 3])), "Font")), "BOLD", true);
  { const $t35 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["edv_col2"])), "asstring"))); if ($t35 !== undefined) { await $.mset(L0["excel"], "Cells", $t35); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 3])), "Font")), "BOLD", true);
  { const $t36 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["yekun_col2"])), "asstring"))); if ($t36 !== undefined) { await $.mset(L0["excel"], "Cells", $t36); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 3])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 3])), "Font")), "BOLD", true);
  { const $t37 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["CEMI_COL3"])), "asstring"))); if ($t37 !== undefined) { await $.mset(L0["excel"], "Cells", $t37); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 4])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 4])), "Font")), "BOLD", true);
  { const $t38 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["edv_col3"])), "asstring"))); if ($t38 !== undefined) { await $.mset(L0["excel"], "Cells", $t38); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 4])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 4])), "Font")), "BOLD", true);
  { const $t39 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["yekun_col3"])), "asstring"))); if ($t39 !== undefined) { await $.mset(L0["excel"], "Cells", $t39); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 4])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 4])), "Font")), "BOLD", true);
  { const $t40 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["CEMI_COL4"])), "asstring"))); if ($t40 !== undefined) { await $.mset(L0["excel"], "Cells", $t40); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 5])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 14), 5])), "Font")), "BOLD", true);
  { const $t41 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["edv_col4"])), "asstring"))); if ($t41 !== undefined) { await $.mset(L0["excel"], "Cells", $t41); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 5])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 15), 5])), "Font")), "BOLD", true);
  { const $t42 = await $.iset((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds2")), "FieldByName", ["yekun_col4"])), "asstring"))); if ($t42 !== undefined) { await $.mset(L0["excel"], "Cells", $t42); } }
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 5])), "Borders")), "weight", 2);
  await $.mset((await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [$.add(L0["index"], 16), 5])), "Font")), "BOLD", true);
  await $.mcall((await $.mv(L0["excel"], "columns")), "AutoFit", []);
  await $.mset(L0["excel"], "visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

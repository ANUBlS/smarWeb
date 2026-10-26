// Generated from Frmreinsoperationimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Frmreinsoperationimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "Grids", "DBGrids", "CMExcelExport", "Menus", "XDBGrids", "ImgList", "ComCtrls", "DBCtrls", "shellapi", "ActiveX", "AxCtrls", "StdVcl", "DBGridEhGrouping", "GridsEh", "DBGridEh", "DB", "OracleData", "ToolWin", "ActnList", "Oracle", "PlgModalContainer", "DMreinsuranceImpl", "AddaccountImpl", "FrmreinsuranceImpl", "FrmAddCustImpl", "CommanParametrs"]);
  const C = [U];
  U.defClass("TFrmreinsoperation", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "xfbutton7": {"name": "XFButton7", "type": "TXFButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xfbutton11": {"name": "XFButton11", "type": "TXFButton"}, "xfbutton12": {"name": "XFButton12", "type": "TXFButton"}, "xfbutton13": {"name": "XFButton13", "type": "TXFButton"}, "xfbutton14": {"name": "XFButton14", "type": "TXFButton"}, "xfbutton15": {"name": "XFButton15", "type": "TXFButton"}, "xfbutton16": {"name": "XFButton16", "type": "TXFButton"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfbutton17": {"name": "XFButton17", "type": "TXFButton"}, "xfbutton18": {"name": "XFButton18", "type": "TXFButton"}, "xfbutton19": {"name": "XFButton19", "type": "TXFButton"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfbutton20": {"name": "XFButton20", "type": "TXFButton"}, "xfbutton21": {"name": "XFButton21", "type": "TXFButton"}, "xfbutton22": {"name": "XFButton22", "type": "TXFButton"}, "xfbutton23": {"name": "XFButton23", "type": "TXFButton"}, "xfbutton24": {"name": "XFButton24", "type": "TXFButton"}, "xfbutton25": {"name": "XFButton25", "type": "TXFButton"}, "xdbgrid5": {"name": "XDBGrid5", "type": "TXDBGrid"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfbutton26": {"name": "XFButton26", "type": "TXFButton"}, "xfbutton27": {"name": "XFButton27", "type": "TXFButton"}, "xfbutton28": {"name": "XFButton28", "type": "TXFButton"}, "xdbgrid6": {"name": "XDBGrid6", "type": "TXDBGrid"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfbutton29": {"name": "XFButton29", "type": "TXFButton"}, "xfbutton30": {"name": "XFButton30", "type": "TXFButton"}, "xfbutton31": {"name": "XFButton31", "type": "TXFButton"}, "xfbutton32": {"name": "XFButton32", "type": "TXFButton"}, "xfbutton33": {"name": "XFButton33", "type": "TXFButton"}, "xfbutton34": {"name": "XFButton34", "type": "TXFButton"}, "xdbgrid7": {"name": "XDBGrid7", "type": "TXDBGrid"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "xfbutton35": {"name": "XFButton35", "type": "TXFButton"}, "xfbutton36": {"name": "XFButton36", "type": "TXFButton"}, "xfbutton37": {"name": "XFButton37", "type": "TXFButton"}, "xdbgrid8": {"name": "XDBGrid8", "type": "TXDBGrid"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfbutton10": {"name": "XFButton10", "type": "TXFButton"}, "xfbutton8": {"name": "XFButton8", "type": "TXFButton"}, "xfbutton9": {"name": "XFButton9", "type": "TXFButton"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "xfcheckbox8": {"name": "XFCheckBox8", "type": "TXFCheckBox"}, "xfbutton38": {"name": "XFButton38", "type": "TXFButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "editbardero_no": {"name": "EditBARDERO_NO", "type": "TEdit"}, "editsigorta_haqqi": {"name": "EditSIGORTA_HAQQI", "type": "TEdit"}, "editcust_name": {"name": "EditCUST_NAME", "type": "TEdit"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "edit1bardero_no": {"name": "Edit1BARDERO_NO", "type": "TEdit"}, "edit2sigorta_haqqi": {"name": "Edit2SIGORTA_HAQQI", "type": "TEdit"}, "edit3cust_name": {"name": "Edit3CUST_NAME", "type": "TEdit"}, "edit4bardero_no": {"name": "Edit4BARDERO_NO", "type": "TEdit"}, "edit5sigorta_haqqi": {"name": "Edit5SIGORTA_HAQQI", "type": "TEdit"}, "edit6cust_name": {"name": "Edit6CUST_NAME", "type": "TEdit"}, "edit7bardero_no": {"name": "Edit7BARDERO_NO", "type": "TEdit"}, "edit8sigorta_haqqi": {"name": "Edit8SIGORTA_HAQQI", "type": "TEdit"}, "edit9cust_name": {"name": "Edit9CUST_NAME", "type": "TEdit"}, "xfbutton39": {"name": "XFButton39", "type": "TXFButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "op": {"name": "op", "type": "String"}, "sqlsh": {"name": "sqlSH", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FilterStr1", '', "String");
    U.var_("Frmreinsoperation", null, "TFrmreinsoperation");
  });
  U.method("TFrmreinsoperation", "Edit1BARDERO_NOExit", async function Edit1BARDERO_NOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "Edit1BARDERO_NOKeyPress", async function Edit1BARDERO_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsoperation", "EditBARDERO_NO1KeyPress", async function EditBARDERO_NO1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecuteLoss", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsoperation", "Edit4BARDERO_NOKeyPress", async function Edit4BARDERO_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecuteter", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsoperation", "Edit7BARDERO_NOKeyPress", async function Edit7BARDERO_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecutesub", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsoperation", "ActionSpeedSearchExecutesub", async function ActionSpeedSearchExecutesub(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 6, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "XDBGrid7", C, false)), "DataSource")), "DataSet"))], C));
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
  U.method("TFrmreinsoperation", "EditBARDERO_NOExit", async function EditBARDERO_NOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "EditBARDERO_NOKeyPress", async function EditBARDERO_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsoperation", "ActionSpeedSearchExecuteter", async function ActionSpeedSearchExecuteter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "SearchField", (await $.wcall([$t3], "copy", [(await $.wv([$t3], "Name", C, false)), 6, (await $.wcall([$t3], "length", [(await $.wv([$t3], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t4 = (await $.wcall([$t3], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t3], "XDBGrid5", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromCurrent", C, false)), (await $.wv([$t3, $t4], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t3, $t4], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbNo", C, false)), (await $.wv([$t3, $t4], "mbYes", C, false))], 0], C)), (await $.wv([$t3, $t4], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t3, $t4], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "ActionSpeedSearchExecuteLoss", async function ActionSpeedSearchExecuteLoss(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t5 = L0["sender"];
    await $.wset([$t5], "SearchField", (await $.wcall([$t5], "copy", [(await $.wv([$t5], "Name", C, false)), 6, (await $.wcall([$t5], "length", [(await $.wv([$t5], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t6 = (await $.wcall([$t5], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t5], "XDBGrid3", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t5, $t6], "SearchRecord", [(await $.wv([$t5, $t6], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "Text", C, false)), $.add((await $.wv([$t5, $t6], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t5, $t6], "srFromCurrent", C, false)), (await $.wv([$t5, $t6], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t5, $t6], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t5, $t6], "mtInformation", C, false)), [(await $.wv([$t5, $t6], "mbNo", C, false)), (await $.wv([$t5, $t6], "mbYes", C, false))], 0], C)), (await $.wv([$t5, $t6], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t5, $t6], "SearchRecord", [(await $.wv([$t5, $t6], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "Text", C, false)), $.add((await $.wv([$t5, $t6], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t5, $t6], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t5, $t6], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t5, $t6], "mtInformation", C, false)), [(await $.wv([$t5, $t6], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t7 = L0["sender"];
    await $.wset([$t7], "SearchField", (await $.wcall([$t7], "copy", [(await $.wv([$t7], "Name", C, false)), 5, (await $.wcall([$t7], "length", [(await $.wv([$t7], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t8 = (await $.wcall([$t7], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t7], "XDBGrid1", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t7, $t8], "SearchRecord", [(await $.wv([$t7, $t8], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t7, $t8], "Text", C, false)), $.add((await $.wv([$t7, $t8], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t7, $t8], "srFromCurrent", C, false)), (await $.wv([$t7, $t8], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t7, $t8], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t7, $t8], "mtInformation", C, false)), [(await $.wv([$t7, $t8], "mbNo", C, false)), (await $.wv([$t7, $t8], "mbYes", C, false))], 0], C)), (await $.wv([$t7, $t8], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t7, $t8], "SearchRecord", [(await $.wv([$t7, $t8], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t7, $t8], "Text", C, false)), $.add((await $.wv([$t7, $t8], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t7, $t8], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t7, $t8], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t7, $t8], "mtInformation", C, false)), [(await $.wv([$t7, $t8], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmreinsoperation", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsoperation", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSFullbardero")), "Open", []);
  if ($.truthy($.eq((await $.v(C, "Bordero_type")), "S_haqqi"))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
    await $.mset((await $.v(C, "TabSheet1")), "TabVisible", true);
    await $.mset((await $.v(C, "TabSheet2")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet4")), "TabVisible", false);
  } else {
    if ($.truthy($.eq((await $.v(C, "Bordero_type")), "Zerer"))) {
      await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
      await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
      await $.mset((await $.v(C, "TabSheet1")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet4")), "TabVisible", false);
    } else {
      if ($.truthy($.eq((await $.v(C, "Bordero_type")), "xitam"))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
        await $.mset((await $.v(C, "TabSheet2")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet1")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet3")), "TabVisible", true);
        await $.mset((await $.v(C, "TabSheet4")), "TabVisible", false);
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "Bordero_type")), "sub"))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
    await $.mset((await $.v(C, "TabSheet2")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet1")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet4")), "TabVisible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t9 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t9], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t9], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataSource", C, false)), "DataSet")), "FieldByName", ["status"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy((await $.and_(($.eq((await $.wv([$t9], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t9], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.mset((await $.mv((await $.wv([$t9], "Canvas", C, false)), "brush")), "Style", (await $.wv([$t9], "bsSolid", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t9], "Canvas", C, false)), "FillRect", [(await $.wv([$t9], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t9], "ImageList2", C, false)), "Draw", [(await $.wv([$t9], "Canvas", C, false)), (await $.mv((await $.wv([$t9], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t9], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t9], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t9], "True", C, false))])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TFrmreinsoperation", "XDBGrid5CellClick", async function XDBGrid5CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t10 = (await $.mv((await $.v(C, "DMreinsurance")), "DSFullBardero_ter_info"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.stmt((await $.wcall([$t10], "SetVariable", ["pbardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t10], "Frmreinsoperation", C, false)), "XDBGrid5")), "DataSource")), "Dataset")), "FieldByName", ["bardero_no"])), "asstring"))], C)));
    await $.stmt($.wcall([$t10], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TFrmreinsoperation", "XFButton10Click", async function XFButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFGroupBox5")), "Visible", $.not((await $.mv((await $.v(C, "XFGroupBox5")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton11Click", async function XFButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DMreinsurance"));
    const $t12 = (await $.wv([$t11], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "CallProcedure", ["checkadvancedobjectaccess", ["COMMITBARDERO_LOSS"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız redaktə statusunda olan bardero təsdiqlənə bilər!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["upd_loss_reins_status_commit", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSFullbardero")), "Locate", ["bardero_no", L0["a"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton12Click", async function XFButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "DMreinsurance"));
    const $t14 = (await $.wv([$t13], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["checkadvancedobjectaccess", ["TANINMABARDERO_LOSS"]], C)));
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq statusunda olan bardero tanına bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_BH")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_BH")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_BH")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri TS öhtəlik Balans hesabı sazlanmayıb!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_H")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_H")), "SetVariable", ["pbardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_H")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_H")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS debitor\" Balans hesabına uyğun hesabı sistemdə mövcud deyil!"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_H")), "FieldByName", ["say"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS debitor\" Balans hesabına uyğun sistemdə çox sayda hesabı mövcuddur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_lossbardero_taninma", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton13Click", async function XFButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "DMreinsurance"));
    const $t16 = (await $.wv([$t15], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t15, $t16], "CallProcedure", ["checkadvancedobjectaccess", ["PAYMENTBARDERO_LOSS"]], C)));
  }
  await $.set(C, "op", "Z");
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız tanınma statusunda olan bardero ödənilə bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "Addaccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton14Click", async function XFButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "DMreinsurance"));
    const $t18 = (await $.wv([$t17], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t17, $t18], "CallProcedure", ["checkadvancedobjectaccess", ["BACKBARDERO_LOSS"]], C)));
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["upd_loss_reins_status_back", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSFullbardero")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton15Click", async function XFButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "DMreinsurance"));
    const $t20 = (await $.wv([$t19], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t19, $t20], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELBARDERO_LOSS"]], C)));
  }
  {
    const $t21 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t21], "Connect", [], C));
    await $.stmt((await $.wcall([$t21], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t21], "XDBGrid3", C, false)), "DataSource")), "DataSet")), "Zerer Barderolar.", (await $.wv([$t21], "True", C, false)), (await $.wv([$t21], "false", C, false))], C)));
    await $.stmt($.wcall([$t21], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton16Click", async function XFButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton18Click", async function XFButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "DMreinsurance"));
    const $t23 = (await $.wv([$t22], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t22, $t23], "CallProcedure", ["checkadvancedobjectaccess", ["DELETBARDERO_LOSS"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid4")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid4")), "DataSource")), "DataSet")), "FieldByName", ["STATUS"])), "AsFloat")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalniz redaktə rejimində olan bardero məlumatin silmək olar! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş Təkrarsığortaçının ləğv olunmasına əminsinizmi?!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid4")), "DataSource")), "DataSet")), "Delete", []);
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid4")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton19Click", async function XFButton19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "DMreinsurance"));
    const $t25 = (await $.wv([$t24], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELBARDERO_LOSS"]], C)));
  }
  {
    const $t26 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t26], "Connect", [], C));
    await $.stmt((await $.wcall([$t26], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t26], "XDBGrid4", C, false)), "DataSource")), "DataSet")), "Barderolar.", (await $.wv([$t26], "True", C, false)), (await $.wv([$t26], "false", C, false))], C)));
    await $.stmt($.wcall([$t26], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.v(C, "DMreinsurance"));
    const $t28 = (await $.wv([$t27], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t27, $t28], "CallProcedure", ["checkadvancedobjectaccess", ["COMMITBARDERO_PREMIYA"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız redaktə statusunda olan bardero təsdiqlənə bilər!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ins_common")), "CallProcedure", ["upd_reins_status_commit", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSFullbardero")), "Locate", ["bardero_no", L0["a"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton20Click", async function XFButton20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.v(C, "DMreinsurance"));
    const $t30 = (await $.wv([$t29], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t29, $t30], "CallProcedure", ["checkadvancedobjectaccess", ["COMMITBARDERO_TERMINATE"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız redaktə statusunda olan bardero təsdiqlənə bilər!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["upd_ter_reins_status_commit", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton21Click", async function XFButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "DMreinsurance"));
    const $t32 = (await $.wv([$t31], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t31, $t32], "CallProcedure", ["checkadvancedobjectaccess", ["TANINMABARDERO_TERMINATE"]], C)));
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq statusunda olan bardero tanına bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_BH")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_BH")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriDep_BH")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri TS öhtəlik Balans hesabı sazlanmayıb!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSterminated")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSterminated")), "SetVariable", ["pbardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSterminated")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSterminated")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS debitor\" Balans hesabına uyğun hesabı sistemdə mövcud deyil!"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSterminated")), "FieldByName", ["say"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS debitor\" Balans hesabına uyğun sistemdə çox sayda hesabı mövcuddur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_terbardero_taninma", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton22Click", async function XFButton22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "DMreinsurance"));
    const $t34 = (await $.wv([$t33], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t33, $t34], "CallProcedure", ["checkadvancedobjectaccess", ["PAYMENTBARDERO_TERMINATE"]], C)));
  }
  await $.set(C, "op", "X");
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız tanınma statusunda olan bardero ödənilə bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "Addaccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton23Click", async function XFButton23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.v(C, "DMreinsurance"));
    const $t36 = (await $.wv([$t35], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t35, $t36], "CallProcedure", ["checkadvancedobjectaccess", ["BACKBARDERO_TERMINATE"]], C)));
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["upd_ter_reins_status_back", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton24Click", async function XFButton24Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.v(C, "DMreinsurance"));
    const $t38 = (await $.wv([$t37], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t37, $t38], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELBARDERO_TERMINATE"]], C)));
  }
  {
    const $t39 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t39], "Connect", [], C));
    await $.stmt((await $.wcall([$t39], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t39], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "Xitam Barderolar.", (await $.wv([$t39], "True", C, false)), (await $.wv([$t39], "false", C, false))], C)));
    await $.stmt($.wcall([$t39], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton25Click", async function XFButton25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid5")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton27Click", async function XFButton27Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.v(C, "DMreinsurance"));
    const $t41 = (await $.wv([$t40], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t40, $t41], "CallProcedure", ["checkadvancedobjectaccess", ["DELETBARDERO_TERMINATE"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid6")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid6")), "DataSource")), "DataSet")), "FieldByName", ["STATUS"])), "AsFloat")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalniz redaktə rejimində olan bardero məlumatin silmək olar! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş Təkrarsığortaçının ləğv olunmasına əminsinizmi?!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid6")), "DataSource")), "DataSet")), "Delete", []);
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid6")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton28Click", async function XFButton28Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t42 = (await $.v(C, "DMreinsurance"));
    const $t43 = (await $.wv([$t42], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t42, $t43], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELBARDERO_TERMINATE"]], C)));
  }
  {
    const $t44 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t44], "Connect", [], C));
    await $.stmt((await $.wcall([$t44], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t44], "XDBGrid6", C, false)), "DataSource")), "DataSet")), "Barderolar.", (await $.wv([$t44], "True", C, false)), (await $.wv([$t44], "false", C, false))], C)));
    await $.stmt($.wcall([$t44], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton29Click", async function XFButton29Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız redaktə statusunda olan bardero təsdiqlənə bilər!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["upd_sub_reins_status_commit", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton30Click", async function XFButton30Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq statusunda olan bardero tanına bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMustero_BH")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMustero_BH")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMustero_BH")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri TS öhtəlik Balans hesabı sazlanmayıb!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dssub_custH")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dssub_custH")), "SetVariable", ["pbardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dssub_custH")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dssub_custH")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS öhtəlik\" Balans hesabına uyğun hesabı sistemdə mövcud deyil!"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dssub_custH")), "FieldByName", ["say"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS öhtəlik\" Balans hesabına uyğun sistemdə çox sayda hesabı mövcuddur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_subbardero_taninma", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton31Click", async function XFButton31Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "op", "Sub");
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız tanınma statusunda olan bardero ödənilə bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "Addaccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton32Click", async function XFButton32Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["upd_sub_reins_status_back", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton33Click", async function XFButton33Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t45 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t45], "Connect", [], C));
    await $.stmt((await $.wcall([$t45], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t45], "XDBGrid7", C, false)), "DataSource")), "DataSet")), "Subraqasiya Barderolar.", (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "false", C, false))], C)));
    await $.stmt($.wcall([$t45], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton34Click", async function XFButton34Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid7")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton36Click", async function XFButton36Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid8")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid8")), "DataSource")), "DataSet")), "FieldByName", ["STATUS"])), "AsFloat")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalniz redaktə rejimində olan bardero məlumatin silmək olar! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş Təkrarsığortaçının ləğv olunmasına əminsinizmi?!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid8")), "DataSource")), "DataSet")), "Delete", []);
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid8")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton37Click", async function XFButton37Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t46 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t46], "Connect", [], C));
    await $.stmt((await $.wcall([$t46], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t46], "XDBGrid8", C, false)), "DataSource")), "DataSet")), "Barderolar.", (await $.wv([$t46], "True", C, false)), (await $.wv([$t46], "false", C, false))], C)));
    await $.stmt($.wcall([$t46], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton38Click", async function XFButton38Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton39Click", async function XFButton39Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t47 = (await $.v(C, "DMreinsurance"));
    const $t48 = (await $.wv([$t47], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t47, $t48], "CallProcedure", ["checkadvancedobjectaccess", ["TANINMABARDERO_PREMIYA"]], C)));
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq statusunda olan bardero tanına bilər!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMustero_BH")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMustero_BH")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMustero_BH")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri TS öhtəlik Balans hesabı sazlanmayıb!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriohtek_h")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriohtek_h")), "SetVariable", ["pbardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriohtek_h")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriohtek_h")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS öhtəlik\" Balans hesabına uyğun hesabı sistemdə mövcud deyil!"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMusteriohtek_h")), "FieldByName", ["say"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçimiş bardero Müştərisinin  \"Müştəri TS öhtəlik\" Balans hesabına uyğun sistemdə çox sayda hesabı mövcuddur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_bardero_taninma", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))]])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSFullbardero")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t49 = (await $.v(C, "DMreinsurance"));
    const $t50 = (await $.wv([$t49], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t49, $t50], "CallProcedure", ["checkadvancedobjectaccess", ["PAYMENTBARDERO_PREMIYA"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız tanınma statusunda olan bardero ödənilə bilər!"])));
    return L0.result;
  }
  await $.set(C, "op", "S");
  await $.mcall((await $.v(C, "Addaccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t51 = (await $.v(C, "DMreinsurance"));
    const $t52 = (await $.wv([$t51], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t51, $t52], "CallProcedure", ["checkadvancedobjectaccess", ["BACKBARDERO_PREMIYA"]], C)));
  }
  L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ins_common")), "CallProcedure", ["upd_reins_status_back", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "asinteger"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSFullbardero")), "Locate", ["bardero_no", L0["a"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton6Click", async function XFButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t53 = (await $.v(C, "DMreinsurance"));
    const $t54 = (await $.wv([$t53], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t53, $t54], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELBARDERO_PREMIYA"]], C)));
  }
  {
    const $t55 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t55], "Connect", [], C));
    await $.stmt((await $.wcall([$t55], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t55], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Barderolar.", (await $.wv([$t55], "True", C, false)), (await $.wv([$t55], "false", C, false))], C)));
    await $.stmt($.wcall([$t55], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton7Click", async function XFButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFGroupBox5")), "Visible")), true))) {
    await $.mset((await $.v(C, "XFGroupBox5")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFGroupBox5")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton8Click", async function XFButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t56 = (await $.v(C, "DMreinsurance"));
    const $t57 = (await $.wv([$t56], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t56, $t57], "CallProcedure", ["checkadvancedobjectaccess", ["DELETBARDERO_PREMIYA"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["STATUS"])), "AsFloat")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalniz redaktə rejimində olan bardero məlumatin silmək olar! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş Təkrarsığortaçının ləğv olunmasına əminsinizmi?!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t58 = (await $.v(C, "DMreinsurance"));
      const $t59 = (await $.wv([$t58], "ins_common", C, false));
      await $.stmt((await $.wcall([$t58, $t59], "CallProcedure", ["del_reins", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t58, $t59], "XDBGrid2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]], C)));
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "XFButton9Click", async function XFButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t60 = (await $.v(C, "DMreinsurance"));
    const $t61 = (await $.wv([$t60], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t60, $t61], "CallProcedure", ["checkadvancedobjectaccess", ["EXCELBARDERO_PREMIYA"]], C)));
  }
  {
    const $t62 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t62], "Connect", [], C));
    await $.stmt((await $.wcall([$t62], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t62], "XDBGrid2", C, false)), "DataSource")), "DataSet")), "Barderolar.", (await $.wv([$t62], "True", C, false)), (await $.wv([$t62], "false", C, false))], C)));
    await $.stmt($.wcall([$t62], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsoperation", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_instype": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["booleanprefix"] = " AND ";
  L0["p_instypefilter"] = "(ii.id=%d)";
  L0["checkfiltered"] = $.fn(async function CheckFiltered(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["filterstr"] = "";
  L0["p_instype"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox8")), "Checked")), L0["p_instypefilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox8")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_instype"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_instype"]);
    }
  }
  L0["filterstr"] = $.add(" and ", L0["filterstr"]);
  L0["filterstr"] = $.add((await $.v(C, "FilterStr1")), L0["filterstr"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "ds_reins_info")), "sql")), "Clear", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "ds_reins_info")), "sql")), "Text", L0["filterstr"]);
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "ds_reins_info")), "sql")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ds_reins_info")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ds_reins_info")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

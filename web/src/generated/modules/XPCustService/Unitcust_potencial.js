// Generated from Unitcust_potencial.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitcust_potencial", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "ComCtrls", "StdCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "Grids", "XDBGrids", "DB", "OracleData", "ImgList", "UnitDataModPCustService", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm_custPotencial", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "datetime": {"name": "Datetime", "type": "TDBDateTimeEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "editphonemob": {"name": "EditPhoneMob", "type": "TMaskEdit"}, "editphonecity": {"name": "EditPhoneCity", "type": "TEdit"}, "dblookupco_departamnet": {"name": "DBLookupCo_departamnet", "type": "TDBLookupComboBox"}, "dblookupcomstatus": {"name": "DBLookupComStatus", "type": "TDBLookupComboBox"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "memo": {"name": "memo", "type": "TMemo"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "ods_main": {"name": "ODs_main", "type": "TOracleDataSet"}, "dsrc_main": {"name": "dsrc_Main", "type": "TDataSource"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "dblookupcomuser": {"name": "DBLookupComUser", "type": "TDBLookupComboBox"}, "ods_departament": {"name": "Ods_departament", "type": "TOracleDataSet"}, "ods_call": {"name": "Ods_call", "type": "TOracleDataSet"}, "ods_user": {"name": "Ods_user", "type": "TOracleDataSet"}, "dsrc_departament": {"name": "dsrc_departament", "type": "TDataSource"}, "dsrc_call": {"name": "dsrc_call", "type": "TDataSource"}, "dsrc_user": {"name": "dsrc_user", "type": "TDataSource"}, "ods_mainid": {"name": "ODs_mainID", "type": "TFloatField"}, "ods_mainname": {"name": "ODs_mainNAME", "type": "TWideStringField"}, "ods_mainaddress": {"name": "ODs_mainADDRESS", "type": "TWideStringField"}, "ods_mainphone_m": {"name": "ODs_mainPHONE_M", "type": "TWideStringField"}, "ods_mainphone_h": {"name": "ODs_mainPHONE_H", "type": "TWideStringField"}, "ods_maincalle_user": {"name": "ODs_mainCALLE_USER", "type": "TWideStringField"}, "ods_maincall_result": {"name": "ODs_mainCALL_RESULT", "type": "TWideStringField"}, "ods_maincall_status": {"name": "ODs_mainCALL_STATUS", "type": "TWideStringField"}, "ods_maindepartment": {"name": "ODs_mainDEPARTMENT", "type": "TWideStringField"}, "ods_maincall_date": {"name": "ODs_mainCALL_DATE", "type": "TDateTimeField"}, "ods_maincalleuser": {"name": "ODs_mainCALLEUSER", "type": "TWideStringField"}, "ods_maincallstatus": {"name": "ODs_mainCALLSTATUS", "type": "TFloatField"}, "ods_maindepartment_": {"name": "ODs_mainDEPARTMENT_", "type": "TFloatField"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "maskedit1": {"name": "MaskEdit1", "type": "TMaskEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "xfbutton7": {"name": "XFButton7", "type": "TXFButton"}, "xfbutton8": {"name": "XFButton8", "type": "TXFButton"}, "conbosearch": {"name": "conboSearch", "type": "TComboBox"}, "edisearch": {"name": "EdiSearch", "type": "TEdit"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "ods_meeting": {"name": "Ods_meeting", "type": "TOracleDataSet"}, "dsrc_meeting": {"name": "dsrc_meeting", "type": "TDataSource"}, "ods_meetingid": {"name": "Ods_meetingID", "type": "TFloatField"}, "ods_meetingname": {"name": "Ods_meetingNAME", "type": "TWideStringField"}, "ods_meetingaddress": {"name": "Ods_meetingADDRESS", "type": "TWideStringField"}, "ods_meetingphone_m": {"name": "Ods_meetingPHONE_M", "type": "TWideStringField"}, "ods_meetingphone_h": {"name": "Ods_meetingPHONE_H", "type": "TWideStringField"}, "ods_meetingmeeting_user": {"name": "Ods_meetingMEETING_USER", "type": "TWideStringField"}, "ods_meetingmeetinguser": {"name": "Ods_meetingMEETINGUSER", "type": "TWideStringField"}, "ods_meetingmeeting_result": {"name": "Ods_meetingMEETING_RESULT", "type": "TWideStringField"}, "ods_meetingagreement_case": {"name": "Ods_meetingAGREEMENT_CASE", "type": "TWideStringField"}, "ods_meetingmeeting_ststus": {"name": "Ods_meetingMEETING_STSTUS", "type": "TWideStringField"}, "ods_meetingmeetingststus": {"name": "Ods_meetingMEETINGSTSTUS", "type": "TFloatField"}, "ods_meetingdepartment": {"name": "Ods_meetingDEPARTMENT", "type": "TWideStringField"}, "ods_meetingdepartment_": {"name": "Ods_meetingDEPARTMENT_", "type": "TFloatField"}, "ods_meetingmeeting_date": {"name": "Ods_meetingMEETING_DATE", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("Form_custPotencial", null, "TForm_custPotencial");
  });
  U.method("TForm_custPotencial", "Custclear", async function Custclear(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhoneCity")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhoneMob")), "Clear", []);
  await $.mcall((await $.v(C, "memo")), "Clear", []);
  await $.mcall((await $.v(C, "Datetime")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComStatus")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComUser")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupCo_departamnet")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "EdiSearchChange", async function EdiSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EdiSearch")), "Text"))])), 0))) {
    await $.mcall((await $.v(C, "Ods_meeting")), "Close", []);
    { const $t1 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t1, 0)) {
        { const $t2 = await $.iset((await $.mv((await $.v(C, "Ods_meeting")), "SQL")), [10], $.add($.add("and ID like '", (await $.mv((await $.v(C, "EdiSearch")), "Text"))), "%'")); if ($t2 !== undefined) { await $.mset((await $.v(C, "Ods_meeting")), "SQL", $t2); } }
      }
      else if ($.eq($t1, 1)) {
        { const $t3 = await $.iset((await $.mv((await $.v(C, "Ods_meeting")), "SQL")), [10], $.add($.add("and upper(name) like upper('%", (await $.mv((await $.v(C, "EdiSearch")), "Text"))), "%')")); if ($t3 !== undefined) { await $.mset((await $.v(C, "Ods_meeting")), "SQL", $t3); } }
      }
      else if ($.eq($t1, 2)) {
        { const $t4 = await $.iset((await $.mv((await $.v(C, "Ods_meeting")), "SQL")), [10], $.add($.add("and upper(meeting_user) like upper('%", (await $.mv((await $.v(C, "EdiSearch")), "Text"))), "%')")); if ($t4 !== undefined) { await $.mset((await $.v(C, "Ods_meeting")), "SQL", $t4); } }
      }
      else if ($.eq($t1, 3)) {
        { const $t5 = await $.iset((await $.mv((await $.v(C, "Ods_meeting")), "SQL")), [10], $.add($.add("and upper(meeting_STATUS) like upper('%", (await $.mv((await $.v(C, "EdiSearch")), "Text"))), "%')")); if ($t5 !== undefined) { await $.mset((await $.v(C, "Ods_meeting")), "SQL", $t5); } }
      }
      else if ($.eq($t1, 4)) {
        { const $t6 = await $.iset((await $.mv((await $.v(C, "Ods_meeting")), "SQL")), [10], $.add($.add("and upper(DEPARTMENT) like upper('%", (await $.mv((await $.v(C, "EdiSearch")), "Text"))), "%')")); if ($t6 !== undefined) { await $.mset((await $.v(C, "Ods_meeting")), "SQL", $t6); } }
      }
    }
    await $.mcall((await $.v(C, "Ods_meeting")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "Ods_meeting")), "Close", []);
    { const $t7 = await $.iset((await $.mv((await $.v(C, "Ods_meeting")), "SQL")), [10], ""); if ($t7 !== undefined) { await $.mset((await $.v(C, "Ods_meeting")), "SQL", $t7); } }
    await $.mcall((await $.v(C, "Ods_meeting")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "EditPhoneMobChange", async function EditPhoneMobChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TMaskEdit", [L0["sender"]])), "Modified", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
    await $.mcall((await $.v(C, "ods_main")), "Close", []);
    { const $t8 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t8, 0)) {
        { const $t9 = await $.iset((await $.mv((await $.v(C, "ods_main")), "SQL")), [10], $.add($.add("and ID like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t9 !== undefined) { await $.mset((await $.v(C, "ods_main")), "SQL", $t9); } }
      }
      else if ($.eq($t8, 1)) {
        { const $t10 = await $.iset((await $.mv((await $.v(C, "ods_main")), "SQL")), [10], $.add($.add("and upper(name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t10 !== undefined) { await $.mset((await $.v(C, "ods_main")), "SQL", $t10); } }
      }
      else if ($.eq($t8, 2)) {
        { const $t11 = await $.iset((await $.mv((await $.v(C, "ods_main")), "SQL")), [10], $.add($.add("and upper(calle_user) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t11 !== undefined) { await $.mset((await $.v(C, "ods_main")), "SQL", $t11); } }
      }
      else if ($.eq($t8, 3)) {
        { const $t12 = await $.iset((await $.mv((await $.v(C, "ods_main")), "SQL")), [10], $.add($.add("and upper(CALL_STATUS) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t12 !== undefined) { await $.mset((await $.v(C, "ods_main")), "SQL", $t12); } }
      }
      else if ($.eq($t8, 4)) {
        { const $t13 = await $.iset((await $.mv((await $.v(C, "ods_main")), "SQL")), [10], $.add($.add("and upper(DEPARTMENT) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t13 !== undefined) { await $.mset((await $.v(C, "ods_main")), "SQL", $t13); } }
      }
    }
    await $.mcall((await $.v(C, "ods_main")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "ods_main")), "Close", []);
    { const $t14 = await $.iset((await $.mv((await $.v(C, "ods_main")), "SQL")), [10], ""); if ($t14 !== undefined) { await $.mset((await $.v(C, "ods_main")), "SQL", $t14); } }
    await $.mcall((await $.v(C, "ods_main")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [0])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [1])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [6])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [8])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [9])), "Title")), "Caption"))])));
  await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "conboSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [0])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "conboSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [1])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "conboSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [6])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "conboSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [8])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "conboSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [9])), "Title")), "Caption"))])));
  await $.mset((await $.v(C, "conboSearch")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XDBGrid1CellDblClick", async function XDBGrid1CellDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.v(C, "ODs_mainNAME")), "AsString")));
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.v(C, "ODs_mainADDRESS")), "AsString")));
  await $.mset((await $.v(C, "EditPhoneCity")), "Text", (await $.mv((await $.v(C, "ODs_mainPHONE_H")), "AsString")));
  await $.mset((await $.v(C, "EditPhoneMob")), "Text", (await $.mv((await $.v(C, "ODs_mainPHONE_M")), "Asstring")));
  await $.mset((await $.v(C, "memo")), "Text", (await $.mv((await $.v(C, "ODs_mainCALL_RESULT")), "AsString")));
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "ODs_mainCALL_DATE")), "AsVariant"))])))) {
    await $.mset((await $.v(C, "Datetime")), "text", "");
  } else {
    await $.mset((await $.v(C, "Datetime")), "Value", (await $.mv((await $.v(C, "ODs_mainCALL_DATE")), "AsVariant")));
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "ODs_mainCALLSTATUS")), "IsNull"))))) {
    await $.mset((await $.v(C, "DBLookupComStatus")), "KeyValue", (await $.mv((await $.v(C, "ODs_mainCALLSTATUS")), "AsString")));
  } else {
    await $.mset((await $.v(C, "DBLookupComStatus")), "KeyValue", (-(1)));
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "ODs_mainDEPARTMENT_")), "IsNull"))))) {
    await $.mset((await $.v(C, "DBLookupCo_departamnet")), "KeyValue", (await $.mv((await $.v(C, "ODs_mainDEPARTMENT_")), "AsString")));
  } else {
    await $.mset((await $.v(C, "DBLookupCo_departamnet")), "KeyValue", (-(1)));
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "ODs_mainCALLEUSER")), "IsNull"))))) {
    await $.mset((await $.v(C, "DBLookupComUser")), "KeyValue", (await $.mv((await $.v(C, "ODs_mainCALLEUSER")), "AsString")));
  } else {
    await $.mset((await $.v(C, "DBLookupComUser")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TForm_custPotencial", "XDBGrid1TotalClick", async function XDBGrid1TotalClick(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), "index": $.copyArg(p1), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column", "index"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t15 = (await $.v(C, "ods_main"));
    await $.mset((await $.wv([$t15], "Screen", C, false)), "Cursor", (await $.wv([$t15], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["Title", (await $.wv([$t15], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t15], "Refresh", [], C));
    await $.mset((await $.wv([$t15], "Screen", C, false)), "Cursor", (await $.wv([$t15], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column", "Index"], "kind": "procedure", "ptypes": ["TXColumn", "Integer"]});
  U.method("TForm_custPotencial", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_name": '', "c_address": '', "c_calle": '', "c_call_result": '', "c_phone_m": '', "c_phone_h": '', "c_call_status": 0, "c_department": 0, "c_call_date": null, "c_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Müştərinin adı sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Ünvanı sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Datetime")), "Value")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["  Tarix sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComUser")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Zəng edeən şəxs sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupCo_departamnet")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Şöbə sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComStatus")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Status sahəsini daxil eidn !"])));
    return L0.result;
  }
  L0["c_name"] = (await $.mv((await $.v(C, "edit1")), "Text"));
  L0["c_address"] = (await $.mv((await $.v(C, "edit2")), "Text"));
  L0["c_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  L0["c_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["c_call_result"] = (await $.mv((await $.v(C, "memo")), "Text"));
  L0["c_call_date"] = (await $.mv((await $.v(C, "Datetime")), "Value"));
  L0["c_call_status"] = (await $.mv((await $.v(C, "DBLookupComStatus")), "KeyValue"));
  L0["c_department"] = (await $.mv((await $.v(C, "DBLookupCo_departamnet")), "KeyValue"));
  L0["c_calle"] = (await $.mv((await $.v(C, "DBLookupComUser")), "KeyValue"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["  Yeni  Müştərini  yaddaşa yazmaq istəyirsinizmi   ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["add_cust_potencial_calle", [L0["c_id"], L0["c_name"], L0["c_address"], L0["c_phone_m"], L0["c_phone_h"], L0["c_calle"], L0["c_call_result"], L0["c_call_status"], L0["c_department"], L0["c_call_date"]]])));
    L0["c_id"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "GetParameter", [0]));
    await $.stmt((await $.call(C, "Custclear", [L0["sender"]])));
    {
      const $t16 = (await $.v(C, "ods_main"));
      await $.stmt($.wcall([$t16], "CloseAll", [], C));
      await $.stmt($.wcall([$t16], "Open", [], C));
      await $.stmt((await $.wcall([$t16], "Locate", ["ID", (await $.wv([$t16], "c_id", { get: async () => L0["c_id"], set: async (v) => { L0["c_id"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_name": '', "c_address": '', "c_calle": '', "c_call_result": '', "c_phone_m": '', "c_phone_h": '', "c_id": 0, "c_call_status": 0, "c_department": 0, "c_call_date": null, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Müştərinin adı sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Ünvanı sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Datetime")), "Value")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["  Tarix sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComUser")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Zəng edeən şəxs sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupCo_departamnet")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Şöbə sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComStatus")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Status sahəsini daxil eidn !"])));
    return L0.result;
  }
  L0["c_id"] = (await $.mv((await $.v(C, "ODs_mainid")), "AsInteger"));
  L0["c_name"] = (await $.mv((await $.v(C, "edit1")), "Text"));
  L0["c_address"] = (await $.mv((await $.v(C, "edit2")), "Text"));
  L0["c_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  L0["c_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["c_call_result"] = (await $.mv((await $.v(C, "memo")), "Text"));
  L0["c_call_date"] = (await $.mv((await $.v(C, "Datetime")), "Value"));
  L0["c_call_status"] = (await $.mv((await $.v(C, "DBLookupComStatus")), "KeyValue"));
  L0["c_department"] = (await $.mv((await $.v(C, "DBLookupCo_departamnet")), "KeyValue"));
  L0["c_calle"] = (await $.mv((await $.v(C, "DBLookupComUser")), "KeyValue"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["  Dəyşikliki  Yadda  saxlanılsınmı ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["edit_cust_potencial_calle", [L0["c_id"], L0["c_name"], L0["c_address"], L0["c_phone_m"], L0["c_phone_h"], L0["c_calle"], L0["c_call_result"], L0["c_call_status"], L0["c_department"], L0["c_call_date"]]])));
    await $.stmt((await $.call(C, "Custclear", [L0["sender"]])));
    {
      const $t17 = (await $.v(C, "ods_main"));
      await $.wset([$t17], "AccountID", (await $.mv((await $.wcall([$t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
      await $.stmt($.wcall([$t17], "CloseAll", [], C));
      await $.stmt($.wcall([$t17], "Open", [], C));
      await $.stmt((await $.wcall([$t17], "Locate", ["ID", (await $.wv([$t17], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["   Müştəri  silinəcək əminsinizmi  ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["delete_cust_potencial_calle", [L0["c_id"]]])));
  }
  await $.mcall((await $.v(C, "ODs_main")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_custPotencial")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_name": '', "c_address": '', "c_calle": '', "c_call_result": '', "c_phone_m": '', "c_phone_h": '', "c_call_status": 0, "c_department": 0, "c_call_date": null, "c_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Müştərinin adı sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Ünvanı sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["  Tarix sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Müştəri olma sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Şöbə sahəsini daxil eidn !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["  Status sahəsini daxil eidn !"])));
    return L0.result;
  }
  L0["c_name"] = (await $.mv((await $.v(C, "edit3")), "Text"));
  L0["c_address"] = (await $.mv((await $.v(C, "edit4")), "Text"));
  L0["c_phone_h"] = (await $.mv((await $.v(C, "edit5")), "Text"));
  L0["c_phone_m"] = (await $.mv((await $.v(C, "MaskEdit1")), "Text"));
  L0["c_call_result"] = (await $.mv((await $.v(C, "memo1")), "Text"));
  L0["c_call_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
  L0["c_call_status"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  L0["c_department"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
  L0["c_calle"] = (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["  Yeni  Müştərini  yaddaşa yazmaq istəyirsinizmi   ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["add_cust_potencial_meeting", [L0["c_id"], L0["c_name"], L0["c_address"], L0["c_phone_m"], L0["c_phone_h"], L0["c_calle"], L0["c_call_result"], L0["c_call_status"], L0["c_department"], L0["c_call_date"]]])));
    L0["c_id"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "GetParameter", [0]));
    await $.stmt((await $.call(C, "Custclear", [L0["sender"]])));
    {
      const $t18 = (await $.v(C, "Ods_meeting"));
      await $.stmt($.wcall([$t18], "CloseAll", [], C));
      await $.stmt($.wcall([$t18], "Open", [], C));
      await $.stmt((await $.wcall([$t18], "Locate", ["ID", (await $.wv([$t18], "c_id", { get: async () => L0["c_id"], set: async (v) => { L0["c_id"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XFButton7Click", async function XFButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["   Müştəri  silinəcək əminsinizmi  ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["delete_cust_potencial_meeting", [L0["c_id"]]])));
  }
  await $.mcall((await $.v(C, "Ods_meeting")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_custPotencial", "XFButton8Click", async function XFButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_custPotencial")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

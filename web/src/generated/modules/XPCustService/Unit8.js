// Generated from Unit8.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit8", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ComCtrls", "ExtCtrls", "DB", "OracleData", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "UnitDataModPCustService", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm8", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "sb_sysdate": {"name": "sb_sysdate", "type": "TOracleDataSet"}, "sb_sysdatetek_dat": {"name": "sb_sysdateTEK_DAT", "type": "TDateTimeField"}, "ods_tonaj": {"name": "ods_tonaj", "type": "TOracleDataSet"}, "ods_buspros": {"name": "ods_buspros", "type": "TOracleDataSet"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "dsrc_buspros": {"name": "dsrc_buspros", "type": "TDataSource"}, "ods_busprosid": {"name": "ods_busprosID", "type": "TFloatField"}, "ods_busprosname": {"name": "ods_busprosNAME", "type": "TWideStringField"}, "ods_tonajpar6": {"name": "ods_tonajPAR6", "type": "TWideStringField"}, "ods_tonajtrans_date": {"name": "ods_tonajTRANS_DATE", "type": "TDateTimeField"}, "ods_tonajpar11": {"name": "ods_tonajPAR11", "type": "TFloatField"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("Form8", null, "TForm8");
  });
  U.method("TForm8", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.v(C, "sb_sysdateTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.v(C, "sb_sysdateTEK_DAT")), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm8", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_bdate": 0, "v_edate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_bdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["v_edate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  {
    const $t1 = (await $.v(C, "ods_tonaj"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_name", (await $.mv((await $.wv([$t1], "ods_busprosNAME", C, false)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["begindat", (await $.wv([$t1], "v_BDate", { get: async () => L0["v_bdate"], set: async (v) => { L0["v_bdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["enddat", (await $.wv([$t1], "v_eDate", { get: async () => L0["v_edate"], set: async (v) => { L0["v_edate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ods_tonaj")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Seçilmiş tarixdə heçbir məlumat mövcud deyil  !"])));
  } else {
    {
      const $t2 = (await $.v(C, "CMExcelExport1"));
      await $.stmt($.wcall([$t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t2], "ExportDataset", [(await $.wv([$t2], "ods_tonaj", C, false)), "tonaj", (await $.wv([$t2], "True", C, false))], C)));
      await $.stmt($.wcall([$t2], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

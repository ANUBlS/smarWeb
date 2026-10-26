// Generated from frmins_reinsr_contractimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmins_reinsr_contractimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "XFSCtrls", "ExtCtrls", "Mask", "ComCtrls", "dmins_reinsr_contractimpl", "CommanParametrs", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("Tfrmins_reinsr_contract", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}}, {});
  U.init(async () => {
    U.var_("frmins_reinsr_contract", null, "Tfrmins_reinsr_contract");
    U.var_("CID", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "frmins_reinsr_contract")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("Tfrmins_reinsr_contract", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmins_reinsr_contract", (await $.mcall((await $.v(C, "Tdmins_reinsr_contract")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmins_reinsr_contract", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmins_reinsr_contract", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    {
      const $t1 = (await $.v(C, "dmins_reinsr_contract"));
      await $.mcall((await $.wv([$t1], "ds_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "ds_contracts", C, false)), "SetVariable", ["pid", (-(1))])));
      await $.mcall((await $.wv([$t1], "ds_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t1], "dsins_rein_other_info", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "dsins_rein_other_info", C, false)), "SetVariable", [":pid", (-(1))])));
      await $.mcall((await $.wv([$t1], "dsins_rein_other_info", C, false)), "Open", []);
      await $.mset((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "dmins_reinsr_contract", C, false)), "DSsysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
      await $.mset((await $.wv([$t1], "DateTimePicker2", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "dmins_reinsr_contract", C, false)), "DSsysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
      await $.mset((await $.wv([$t1], "ComboBox1", C, false)), "Text", "");
    }
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "upd"))) {
    {
      const $t2 = (await $.v(C, "dmins_reinsr_contract"));
      await $.mcall((await $.wv([$t2], "ds_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "ds_contracts", C, false)), "SetVariable", ["pid", (await $.wv([$t2], "contactid", C, false))])));
      await $.mcall((await $.wv([$t2], "ds_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t2], "dsins_rein_other_info", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "dsins_rein_other_info", C, false)), "SetVariable", ["pid", (await $.wv([$t2], "contactid", C, false))])));
      await $.mcall((await $.wv([$t2], "dsins_rein_other_info", C, false)), "Open", []);
      await $.mset((await $.wv([$t2], "DateTimePicker1", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2], "ds_contracts", C, false)), "FieldByName", ["begin_date"])), "AsDateTime")));
      await $.mset((await $.wv([$t2], "DateTimePicker2", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2], "ds_contracts", C, false)), "FieldByName", ["end_date"])), "AsDateTime")));
      await $.mset((await $.wv([$t2], "ComboBox1", C, false)), "ItemIndex", (await $.mv((await $.mcall((await $.wv([$t2], "dsins_rein_other_info", C, false)), "FieldByName", ["INS_TYPE"])), "AsInteger")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmins_reinsr_contract", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığorta növü sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Təkrarsığorta forması  sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit10")), "text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığortalı sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığortaçı(təkrarsığortalı)  sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Təkrarsığortaçı sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit9")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Polis № sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Azadolma məbləği sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Orijinal ümumi sığorta(t.s) məbləği sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit8")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Təkrarsığorta komissiyası sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığortaçının(t.sığortalının) payı sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Təkrarsığortaçının payı sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit6")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Təkrarsığortaçının brutto haqqı sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit7")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığorta predmetinin bazar dəyəri sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit5")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Təmiz təkrarsığorta haqqı sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBMemo1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Sığorta predmeti barədə məlumat sahəsi boşdu"])));
    return L0.result;
  }
  {
    const $t3 = (await $.v(C, "dmins_reinsr_contract"));
    if ($.truthy($.eq((await $.wv([$t3], "opetion", C, false)), "ins"))) {
      await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "open", []);
      await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "edit", []);
      await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "Open", []);
      await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "FieldByName", ["begin_date"])), "AsDateTime", (await $.mv((await $.wv([$t3], "DateTimePicker1", C, false)), "DateTime")));
      await $.mset((await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "FieldByName", ["end_date"])), "AsDateTime", (await $.mv((await $.wv([$t3], "DateTimePicker2", C, false)), "DateTime")));
      await $.mset((await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "FieldByName", ["INS_TYPE"])), "AsInteger", (await $.mv((await $.wv([$t3], "ComboBox1", C, false)), "ItemIndex")));
    }
    if ($.truthy($.eq((await $.wv([$t3], "opetion", C, false)), "upd"))) {
      await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "open", []);
      await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "edit", []);
      await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "Open", []);
      await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "FieldByName", ["type_id"])), "AsInteger", (await $.mv((await $.wv([$t3], "DBLookupComboBox1", C, false)), "KeyValue")));
      await $.mset((await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "FieldByName", ["begin_date"])), "AsDateTime", (await $.mv((await $.wv([$t3], "DateTimePicker1", C, false)), "DateTime")));
      await $.mset((await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "FieldByName", ["end_date"])), "AsDateTime", (await $.mv((await $.wv([$t3], "DateTimePicker2", C, false)), "DateTime")));
      await $.mset((await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "FieldByName", ["INS_TYPE"])), "AsInteger", (await $.mv((await $.wv([$t3], "ComboBox1", C, false)), "ItemIndex")));
    }
    await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "Post", []);
    await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "RefreshRecord", []);
    await $.wset([$t3], "CID", (await $.mv((await $.mcall((await $.wv([$t3], "ds_contracts", C, false)), "FieldByName", ["id"])), "asInteger")), C);
    await $.mset((await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "FieldByName", ["cid"])), "asInteger", (await $.wv([$t3], "CID", C, false)));
    await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "Post", []);
    await $.mcall((await $.wv([$t3], "dsins_rein_other_info", C, false)), "RefreshRecord", []);
    await $.mcall((await $.wv([$t3], "frmins_reinsr_contract", C, false)), "Close", []);
    await $.mcall((await $.wv([$t3], "Reinsgrid", C, false)), "refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmins_reinsr_contract", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmins_reinsr_contract", (await $.mcall((await $.v(C, "Tfrmins_reinsr_contract")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

// Generated from Filters.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Filters", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "XFSCtrls", "DBCtrls", "ExtCtrls", "ImgList", "ComCtrls", "Datmodule"]);
  const C = [U];
  U.defClass("TFiltrs", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "checkbox1": {"name": "CheckBox1", "type": "TXFCheckBox"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "dateend": {"name": "dateend", "type": "TXFCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "hasrest": {"name": "hasrest", "type": "TXFCheckBox"}, "closedcheck": {"name": "closedcheck", "type": "TXFCheckBox"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "crtsnded": {"name": "crtsnded", "type": "TXFCheckBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Filtrs", null, "TFiltrs");
    U.var_("fltfil", '', "String");
    U.var_("fltstat", '', "String");
    U.var_("fltdate", '', "String");
    U.var_("fltclose", '', "String");
    U.var_("fltheadcourt", '', "String");
    U.var_("fltrest", '', "String");
    U.var_("flthead", '', "String");
    U.var_("fltprtrest", '', "String");
  });
  U.method("TFiltrs", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "filials")), "RecordCount")), 1))) {
    await $.stmt((await $.call(C, "ShowMessage", ["user bütün filiallari görə bilmir !!!"])));
  } else {
    if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSource_filial")), "DataSet")), "Open", []);
      await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
      await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
      await $.set(C, "fltfil", " and branch =");
    } else {
      await $.set(C, "fltfil", "");
      await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
      await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "DateTimePicker1Change", async function DateTimePicker1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fltdate", $.add($.add(" and DUEDATEFIRSTCONTRACT = ' ", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fltfil", $.add(" and branch =", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL")), "Text")));
  await $.mset((await $.v(C, "memo2")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_court")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_court")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL")), "Text")));
  await $.mset((await $.v(C, "memo2")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL")), "Text")));
  if ($.truthy($.ne((await $.v(C, "fltrest")), ""))) {
    await $.set(C, "flthead", "");
  }
  if ($.truthy($.ne((await $.v(C, "fltprtrest")), ""))) {
    await $.set(C, "fltheadcourt", "");
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_court")), "Open", []);
  { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL")), [20], ""); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL", $t1); } }
  { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL")), [20], $.add($.add($.add($.add($.add((await $.v(C, "flthead")), (await $.v(C, "fltrest"))), (await $.v(C, "fltdate"))), (await $.v(C, "fltclose"))), (await $.v(C, "fltfil"))), (await $.v(C, "fltstat")))); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL", $t2); } }
  { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL")), [32], ""); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL", $t3); } }
  { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL")), [32], $.add($.add($.add($.add($.add((await $.v(C, "flthead")), (await $.v(C, "fltrest"))), (await $.v(C, "fltdate"))), (await $.v(C, "fltclose"))), (await $.v(C, "fltfil"))), (await $.v(C, "fltstat")))); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL", $t4); } }
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL")), "Text")));
  await $.mset((await $.v(C, "memo2")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Main_court")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "crtsndedClick", async function crtsndedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "crtsnded")), "Checked")))) {
    await $.set(C, "fltstat", "  and status in (1)");
    await $.set(C, "fltheadcourt", " where  cr.id=cor.id  ");
    await $.set(C, "flthead", "  ,customers s,custinfo cv where s.id=cr.boorowerid and idcust=cr.boorowerid and s.id=cv.idcust  and cr.id=cour.id(+)");
  } else {
    await $.set(C, "fltstat", " and status in (0,1)");
    await $.set(C, "fltheadcourt", " where  cr.id=cor.id  ");
    await $.set(C, "flthead", "  ,customers s,custinfo cv where s.id=cr.boorowerid and idcust=cr.boorowerid and s.id=cv.idcust and cr.id=cour.id(+)");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "hasrestClick", async function hasrestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "hasrest")), "Checked")))) {
    await $.set(C, "fltrest", " and lstrest>0");
  } else {
    await $.set(C, "fltrest", "");
    await $.set(C, "fltprtrest", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "closedcheckClick", async function closedcheckClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "closedcheck")), "Checked")))) {
    await $.set(C, "fltclose", " and closedate is not null");
  } else {
    await $.set(C, "fltclose", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "ComboBox1CloseUp", async function ComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "ComboBox1")), "Items")), [(await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"))])), "Bütün hamısı"))) {
    await $.set(C, "fltstat", "  and status in (0,1,3)");
  }
  if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "ComboBox1")), "Items")), [(await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"))])), "Tədbir görülmüşlər"))) {
    await $.set(C, "fltstat", "  and status in (1)");
  }
  if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "ComboBox1")), "Items")), [(await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"))])), "Tədbir görülməmişlər"))) {
    await $.set(C, "fltstat", "  and status in (0)");
  }
  if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "ComboBox1")), "Items")), [(await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"))])), "Tədbir görülə bilməyənlər"))) {
    await $.set(C, "fltstat", "  and status in (3)");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFiltrs", "dateendClick", async function dateendClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "dateend")), "Checked")))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", true);
  } else {
    await $.set(C, "fltdate", "");
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSource_filial")), "DataSet")), "close", []);
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

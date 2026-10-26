// Generated from frmaddterminateimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmaddterminateimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "DBCtrls", "ExtCtrls", "ComCtrls", "Mask", "DMreinsuranceImpl", "CommanParametrs", "FrmreinsuranceImpl", "sboapiDataModuleImpl", "frmterminatebarderoimpl"]);
  const C = [U];
  U.defClass("Tfrmaddterminate", "TForm", {"xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "filter": {"name": "filter", "type": "String"}}, {});
  U.init(async () => {
    U.var_("frmaddterminate", null, "Tfrmaddterminate");
  });
  U.method("Tfrmaddterminate", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b", "/", "-"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmaddterminate", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "filter", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "SQL")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddterminate", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmaddterminate", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "t": '', "tm": '', "tfq": '', "t1": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "SetVariable", ["p_id", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "Open", []);
  L0["t"] = "";
  L0["tm"] = "";
  L0["tfq"] = "";
  L0["t1"] = "";
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["chm"])), "AsInteger")), 1)))))) {
    L0["tm"] = "(13)";
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["chfq"])), "AsInteger")), 1)))))) {
    L0["tfq"] = "(1)";
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["chkasko"])), "AsInteger")), 1)))))) {
    L0["t"] = "(4)";
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)))) {
    if ($.truthy($.eq(L0["t1"], ""))) {
      L0["t1"] = L0["tm"];
    } else {
      L0["t1"] = $.add($.add(L0["t1"], ","), L0["tm"]);
    }
    if ($.truthy($.eq(L0["t1"], ""))) {
      L0["t1"] = L0["tfq"];
    } else {
      L0["t1"] = $.add($.add(L0["t1"], ","), L0["tfq"]);
    }
    if ($.truthy($.eq(L0["t1"], ""))) {
      L0["t1"] = L0["t"];
    } else {
      L0["t1"] = $.add($.add(L0["t1"], ","), L0["t"]);
    }
  } else {
    L0["t1"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsString"));
  }
  if ($.truthy($.ne(L0["t1"], ""))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "Close", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "SQL")), "Text", $.add($.add($.add((await $.v(C, "filter")), " and id in ("), L0["t1"]), ")"));
    await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "SQL")), "Text")));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "open", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "Close", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "SQL")), "Text", (await $.v(C, "filter")));
    await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "SQL")), "Text")));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSinsurancesX")), "open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScustomersX")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScustomersX")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScustomersX")), "open", []);
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_terminated_bardero")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_terminated_bardero")), "SetVariable", ["pid", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_terminated_bardero")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddterminate", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Xitam Bardero № Sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Təkrarsığortaçının adı Sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Siğorta növü Sahəsi boşdur."])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero_ter_sogortaci")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero_ter_sogortaci")), "SetVariable", ["pid", (await $.v(C, "contactid"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero_ter_sogortaci")), "SetVariable", ["p_type_id", (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero_ter_sogortaci")), "SetVariable", ["p_cust_id", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero_ter_sogortaci")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero_ter_sogortaci")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Bu müqavilə artiq xitam barderosuna göndərilib."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__ter_sayi")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__ter_sayi")), "SetVariable", ["p_bardero_no", (await $.mv((await $.v(C, "DBEdit1")), "Text"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__ter_sayi")), "SetVariable", ["p_type_id", (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__ter_sayi")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__ter_sayi")), "open", []);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__ter_sayi")), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Xitam barderosu ucun eyni adda və eyni siğorta növündə Bardero yığıla bilməz."])));
      return L0.result;
    }
    {
      const $t1 = (await $.v(C, "DMreinsurance"));
      await $.mcall((await $.wv([$t1], "DSins_terminated_bardero", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t1], "DSins_terminated_bardero", C, false)), "post", []);
      await $.mcall((await $.mv((await $.wv([$t1], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    }
  }
  await $.mcall((await $.v(C, "frmaddterminate")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "frmterminatebardero")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddterminate", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

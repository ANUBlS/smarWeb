// Generated from frmaddsub_barderoimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmaddsub_barderoimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "DBCtrls", "Mask", "ExtCtrls", "DMreinsuranceImpl", "CommanParametrs", "FrmreinsuranceImpl", "sboapiDataModuleImpl", "frmsubbarderoimpl"]);
  const C = [U];
  U.defClass("Tfrmaddsub_bardero", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("frmaddsub_bardero", null, "Tfrmaddsub_bardero");
  });
  U.method("Tfrmaddsub_bardero", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b", "/", "-"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmaddsub_bardero", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmaddsub_bardero", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustReinssub")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustReinssub")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustReinssub")), "open", []);
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_sub_bardero")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_sub_bardero")), "SetVariable", ["pid", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_sub_bardero")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddsub_bardero", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Subroqasiya Bardero № Sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Təkrarsığortaçının adı Sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__sub_sayi")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__sub_sayi")), "SetVariable", ["p_bardero_no", (await $.mv((await $.v(C, "DBEdit1")), "Text"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__sub_sayi")), "open", []);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__sub_sayi")), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Subroqasiya barderosu ucun eyni adda Bardero №-si yığıla bilməz."])));
      return L0.result;
    }
    {
      const $t1 = (await $.v(C, "DMreinsurance"));
      await $.mcall((await $.wv([$t1], "DSins_sub_bardero", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t1], "DSins_sub_bardero", C, false)), "post", []);
      await $.mcall((await $.mv((await $.wv([$t1], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    }
  }
  await $.mcall((await $.v(C, "frmaddsub_bardero")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "frmsubbardero")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddsub_bardero", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

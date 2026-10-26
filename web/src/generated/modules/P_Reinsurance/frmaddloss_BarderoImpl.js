// Generated from frmaddloss_BarderoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmaddloss_BarderoImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "Mask", "DBCtrls", "DMreinsuranceImpl", "CommanParametrs", "FrmreinsuranceImpl", "sboapiDataModuleImpl", "frmlossbarderoImpl"]);
  const C = [U];
  U.defClass("Tfrmaddloss_Bardero", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}}, {});
  U.init(async () => {
    U.var_("frmaddloss_Bardero", null, "Tfrmaddloss_Bardero");
  });
  U.method("Tfrmaddloss_Bardero", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b", "/", "-"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmaddloss_Bardero", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmaddloss_Bardero", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustReins")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustReins")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustReins")), "open", []);
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_loss_bardero")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_loss_bardero")), "SetVariable", ["pid", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_loss_bardero")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddloss_Bardero", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Zərər Bardero № Sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Təkrarsığortaçının adı Sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__loss_sayi")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__loss_sayi")), "SetVariable", ["p_dep_id", (await $.v(C, "commandepid"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__loss_sayi")), "SetVariable", ["p_bardero_no", (await $.mv((await $.v(C, "DBEdit1")), "Text"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__loss_sayi")), "open", []);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Bardero__loss_sayi")), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Bu zərər ucun eyni adda Bardero №-si yığıla bilməz."])));
      return L0.result;
    }
    {
      const $t1 = (await $.v(C, "DMreinsurance"));
      await $.mcall((await $.wv([$t1], "DSins_loss_bardero", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t1], "DSins_loss_bardero", C, false)), "post", []);
      await $.mcall((await $.mv((await $.wv([$t1], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    }
  }
  await $.mcall((await $.v(C, "frmaddloss_Bardero")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "frmlossbardero")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmaddloss_Bardero", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

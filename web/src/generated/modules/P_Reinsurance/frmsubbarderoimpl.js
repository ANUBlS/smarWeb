// Generated from frmsubbarderoimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmsubbarderoimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "Grids", "XDBGrids", "ExtCtrls", "frmaddloss_BarderoImpl", "DMreinsuranceImpl", "CommanParametrs", "FrmreinsuranceImpl", "sboapiDataModuleImpl", "frmaddsub_barderoimpl"]);
  const C = [U];
  U.defClass("Tfrmsubbardero", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("frmsubbardero", null, "Tfrmsubbardero");
  });
  U.method("Tfrmsubbardero", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmaddsub_bardero", (await $.mcall((await $.v(C, "Tfrmaddsub_bardero")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmsubbardero", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmsubbardero", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMainSubBardero")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMainSubBardero")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMainSubBardero")), "SetVariable", ["Pdep_id", (await $.v(C, "commandepid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSMainSubBardero")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmsubbardero", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmsubbardero", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATUS"])), "AsFloat")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalniz redaktə rejimində olan bardero məlumatin silmək olar! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş Təkrarsığortaçının ləğv olunmasına əminsinizmi?!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.v(C, "DMreinsurance"));
      const $t2 = (await $.wv([$t1], "ins_common", C, false));
      await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Delete", []);
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "frmsubbardero")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmsubbardero", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dsTekrar_s_say")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dsTekrar_s_say")), "SetVariable", ["p_id", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dsTekrar_s_say")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dsTekrar_s_say")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Bu zərərə aid olan müqavilə heç bir təkrarsoğortaçıya aid deyil.Subroqasiya barderosu yığıla bilməz."])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ds_odenmislerin_sayi")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ds_odenmislerin_sayi")), "SetVariable", ["p_id", (await $.v(C, "commandepid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ds_odenmislerin_sayi")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "ds_odenmislerin_sayi")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Seçilmiş Zərər ödənməyib.Subroqasiya barderosu yığıla bilməz."])));
    return L0.result;
  }
  await $.set(C, "opetion", "ins");
  await $.mcall((await $.v(C, "frmaddsub_bardero")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

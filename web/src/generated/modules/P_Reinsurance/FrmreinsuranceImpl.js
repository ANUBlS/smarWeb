// Generated from FrmreinsuranceImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmreinsuranceImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "Grids", "XDBGrids", "ComObj", "CommanParametrs", "sboapiDataModuleImpl", "SBTranslateProc", "DMreinsuranceImpl", "FrmAddCustImpl", "Frmreinsoperationimpl", "AddaccountImpl", "frmaddloss_BarderoImpl", "frmlossbarderoImpl", "frmterminatebarderoimpl", "frmaddterminateimpl", "frmsubbarderoimpl"]);
  const C = [U];
  U.defClass("TFrmreinsurance", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "op": {"name": "op", "type": "String"}}, {});
  U.init(async () => {
    U.var_("Frmreinsurance", null, "TFrmreinsurance");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "Frmreinsurance")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "operation"))) {
    await $.mcall((await $.v(C, "Frmreinsoperation")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "loss1"))) {
    await $.mcall((await $.v(C, "frmlossbardero")), "showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "terminate"))) {
    await $.mcall((await $.v(C, "frmterminatebardero")), "showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "subroqasiya"))) {
    await $.mcall((await $.v(C, "frmsubbardero")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmreinsurance", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMreinsurance", (await $.mcall((await $.v(C, "TDMreinsurance")), "create", [Self])));
  await $.set(C, "frmsubbardero", (await $.mcall((await $.v(C, "Tfrmsubbardero")), "create", [Self])));
  await $.set(C, "FrmAddCust", (await $.mcall((await $.v(C, "TFrmAddCust")), "create", [Self])));
  await $.set(C, "Frmreinsoperation", (await $.mcall((await $.v(C, "TFrmreinsoperation")), "create", [Self])));
  await $.set(C, "Addaccount", (await $.mcall((await $.v(C, "TAddaccount")), "create", [Self])));
  await $.set(C, "frmlossbardero", (await $.mcall((await $.v(C, "Tfrmlossbardero")), "create", [Self])));
  await $.set(C, "frmaddloss_Bardero", (await $.mcall((await $.v(C, "Tfrmaddloss_Bardero")), "create", [Self])));
  await $.set(C, "frmterminatebardero", (await $.mcall((await $.v(C, "Tfrmterminatebardero")), "Create", [Self])));
  await $.set(C, "frmaddterminate", (await $.mcall((await $.v(C, "tfrmaddterminate")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmreinsurance", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "SetVariable", ["p_id", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "Open", []);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["TYPE_ID"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["TYPE_ID"])), "AsInteger")), 13)))))) {
    await $.mset((await $.v(C, "XFButton1")), "Visible", true);
    await $.mset((await $.v(C, "XFButton6")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
    await $.mset((await $.v(C, "XFButton6")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 6))) {
    await $.mset((await $.v(C, "XFButton5")), "Enabled", true);
    await $.mset((await $.v(C, "XFButton3")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "XFButton5")), "Enabled", false);
    await $.mset((await $.v(C, "XFButton3")), "Enabled", false);
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsuranceMain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsuranceMain")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsuranceMain")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  if ($.truthy($.lt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsuranceMain")), "FieldByName", ["dat"])), "AsDateTime")), (await $.call(C, "StrToDate", ["27.12.2013"]))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Sistem tarixindən fərqli tarixdə yığılmış barderonu ödəmək olmaz!!!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSRins_reinsuranceMain")), "Edit", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "Dsins_reinsuranceMain")), "FieldByName", ["status"])), "AsInteger", 3);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsuranceMain")), "Post", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Ödəndi!!!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Frmreinsurance")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "SetVariable", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "FieldByName", ["status"])), "AsString")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!!Bu təkrarsığorta statusu təsdiq,tanınma və ya ödənmə olduğu üçün redaktə etmək olmaz"])));
    return L0.result;
  }
  await $.set(C, "op", "update");
  await $.mcall((await $.v(C, "FrmAddCust")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMreinsurance"));
    const $t2 = (await $.wv([$t1], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["checkadvancedobjectaccess", ["DELETBARDERO_PREMIYA"]], C)));
  }
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
      const $t3 = (await $.v(C, "DMreinsurance"));
      const $t4 = (await $.wv([$t3], "ins_common", C, false));
      await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["del_reins", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t3, $t4], "Frmreinsurance", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]], C)));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DMreinsurance"));
    const $t6 = (await $.wv([$t5], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["checkadvancedobjectaccess", ["ADDBARDERO_PREMIYA"]], C)));
  }
  await $.set(C, "op", "insert");
  await $.mcall((await $.v(C, "FrmAddCust")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmreinsurance", "XFButton6Click", async function XFButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdu"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSRins_reinsuranceMain")), "Edit", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "Dsins_reinsuranceMain")), "FieldByName", ["status"])), "AsInteger", 0);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsuranceMain")), "Post", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Redaktə rejiminə keçdi!!!"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Frmreinsurance", (await $.mcall((await $.v(C, "TFrmreinsurance")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}

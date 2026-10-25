// Generated from arxiv_orders__.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("arxiv_orders__", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "NLSDialogs", "NLSLocalizer", "Buttons", "ComObj", "ActiveX", "datamodule", "edit_arxiv_cust_order__"]);
  const C = [U];
  U.defClass("Tarxiv_orders", "TForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "searchgroupbox": {"name": "searchGroupBox", "type": "TGroupBox"}, "noedit": {"name": "noEdit", "type": "TEdit"}, "innedit": {"name": "innEdit", "type": "TEdit"}, "nameedit": {"name": "nameEdit", "type": "TEdit"}, "ddateedit": {"name": "ddateEdit", "type": "TEdit"}, "cdate": {"name": "cdate", "type": "TEdit"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}}, {});
  U.init(async () => {
    U.var_("arxiv_orders", null, "Tarxiv_orders");
  });
  U.method("Tarxiv_orders", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "Tarxiv_orders", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("Tarxiv_orders", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Arxiv sərəncamlar";
  await $.inherited(Self, "Tarxiv_orders", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("Tarxiv_orders", "noEditChange", async function noEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "noedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "Locate", ["pnum", (await $.mv((await $.v(C, "noedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "innEditChange", async function innEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "innedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "Locate", ["acc_inn", (await $.mv((await $.v(C, "innedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "nameEditChange", async function nameEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "nameedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "Locate", ["c_name", (await $.mv((await $.v(C, "nameedit")), "Text")), []])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "ddateEditChange", async function ddateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "cdateChange", async function cdateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "searchgroupbox")), "Visible")), false))) {
    await $.mset((await $.v(C, "searchgroupbox")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "searchgroupbox")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_pnum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "FieldByName", ["PNUM"])), "AsString"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["№%s sərəncam silinsin?", [L0["v_pnum"]]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["delete_s1", [L0["v_pnum"]]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "noEditExit", async function noEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "innEditExit", async function innEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "nameEditExit", async function nameEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "ddateEditExit", async function ddateEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "cdateExit", async function cdateExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t2 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["Title", (await $.wv([$t2], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tarxiv_orders", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t3 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["Title", (await $.wv([$t3], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t3], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tarxiv_orders", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "edit_arxiv_cust_order", (await $.mcall((await $.v(C, "Tedit_arxiv_cust_order")), "Create", [Self])));
  {
    const $t4 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    const $t5 = (await $.wv([$t4], "edit_arxiv_cust_order", C, false));
    if ($.truthy((await $.wv([$t4, $t5], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t4, $t5], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      {
        const $t6 = (await $.mv((await $.wv([$t4, $t5], "DataModCustOrders", C, false)), "arxiv_order"));
        const $t7 = (await $.wv([$t4, $t5, $t6], "edit_arxiv_cust_order", C, false));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["c_acc"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["c_name"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["c_inn"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editname", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["b_name"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["b_code"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["b_inn"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["b_acc"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["b_swift"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["m_name"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["m_acc"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["m_inn"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["n_mon"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["w_mon"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["content"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["edv"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["edv_f"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["edv_c"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["pro"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["pro_f"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["pro_c"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["pnum"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editval", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["val"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["ddate"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "closedate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["close_date"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["chief"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["head"], C)), "AsString")));
        await $.mset((await $.wv([$t4, $t5, $t6, $t7], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "fieldbyname", ["acc_inn"], C)), "asstring")));
        await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "edit_arxiv_cust_order", C, false)), "Showmodal", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_pnum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "FieldByName", ["PNUM"])), "AsString"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["№%s sərəncam silinsin?", [L0["v_pnum"]]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders")), "CallProcedure", ["delete_s1", [L0["v_pnum"]]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    if ($.truthy((await $.wv([$t8], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t8], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t8], "searchgroupbox", C, false)), "Visible")), (await $.wv([$t8], "false", C, false))))) {
        await $.mset((await $.wv([$t8], "searchgroupbox", C, false)), "Visible", (await $.wv([$t8], "true", C, false)));
      } else {
        await $.mset((await $.wv([$t8], "searchgroupbox", C, false)), "Visible", (await $.wv([$t8], "false", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "edit_arxiv_cust_order", (await $.mcall((await $.v(C, "Tedit_arxiv_cust_order")), "Create", [Self])));
  {
    const $t9 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    const $t10 = (await $.wv([$t9], "edit_arxiv_cust_order", C, false));
    if ($.truthy((await $.wv([$t9, $t10], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t9, $t10], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      {
        const $t11 = (await $.mv((await $.wv([$t9, $t10], "DataModCustOrders", C, false)), "arxiv_order"));
        const $t12 = (await $.wv([$t9, $t10, $t11], "edit_arxiv_cust_order", C, false));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["c_acc"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["c_name"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["c_inn"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editname", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["b_name"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["b_code"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["b_inn"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["b_acc"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["b_swift"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["m_name"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["m_acc"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["m_inn"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["n_mon"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["w_mon"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["content"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["edv"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["edv_f"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["edv_c"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["pro"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["pro_f"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["pro_c"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["pnum"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editval", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["val"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["ddate"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "closedate", C, false)), "DateTime", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["close_date"], C)), "AsDateTime")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["chief"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "FieldByName", ["head"], C)), "AsString")));
        await $.mset((await $.wv([$t9, $t10, $t11, $t12], "edit1", C, false)), "text", (await $.mv((await $.wcall([$t9, $t10, $t11, $t12], "fieldbyname", ["acc_inn"], C)), "asstring")));
        await $.mcall((await $.wv([$t9, $t10, $t11, $t12], "edit_arxiv_cust_order", C, false)), "Showmodal", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": '', "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "DataModCustOrders")), "arxiv_order"));
    if ($.truthy((await $.wv([$t13], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t13], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t13], "v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "arxiv_order")), "FieldByName", ["id"])), "asinteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
      await $.wset([$t13], "v_pnum", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "arxiv_order")), "FieldByName", ["PNUM"])), "AsString")), { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t13], "MessageDlg", [(await $.wcall([$t13], "Format", ["№%s sərəncam silinsin?", [(await $.wv([$t13], "v_pnum", { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true }, false))]], C)), (await $.wv([$t13], "mtConfirmation", C, false)), (await $.wv([$t13], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t13], "mrYes", C, false))))) {
        {
          const $t14 = (await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "arxiv_order"));
          const $t15 = (await $.mv((await $.wv([$t13, $t14], "DataModCustOrders", C, false)), "customer_orders"));
          await $.stmt((await $.wcall([$t13, $t14, $t15], "CallProcedure", ["DELETE_CUST_ORDER_ARXIV", [(await $.wv([$t13, $t14, $t15], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]], C)));
          await $.stmt($.wcall([$t13, $t14, $t15], "Refresh", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarxiv_orders", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_delete"))))) {
    await $.stmt((await $.call(C, "SpeedButton5Click", [Self])));
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}

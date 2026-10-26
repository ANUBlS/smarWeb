// Generated from FormReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormReport", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Grids", "XDBGrids", "Income_Form", "FormAccNoBalCN", "FormBal_CN", "QK_İmpotDataMod"]);
  const C = [U];
  U.defClass("TForm_Report", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "radbh": {"name": "RadBH", "type": "TXFRadioButton"}, "radsh": {"name": "RadSH", "type": "TXFRadioButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Form_Report", null, "TForm_Report");
  });
  U.method("TForm_Report", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFLabel4")), "Caption", "");
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TForm_Report", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RadBH")), "Checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Report", "RadBHClick", async function RadBHClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFLabel2")), "Caption", "Balans Hesabı");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadSH")), "Checked")), false))) {
    await $.mcall((await $.v(C, "edit2")), "Clear", []);
    await $.mcall((await $.v(C, "edit4")), "Clear", []);
    await $.mset((await $.v(C, "XFLabel4")), "Caption", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Report", "RadSHClick", async function RadSHClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadSH")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFLabel2")), "Caption", "Sub Hesabı");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), false))) {
    await $.mcall((await $.v(C, "edit2")), "Clear", []);
    await $.mcall((await $.v(C, "edit4")), "Clear", []);
    await $.mset((await $.v(C, "XFLabel4")), "Caption", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Report", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "b": 0, "c_income_acc_id": 0, "c_b_s_status": 0, "c_balcn_accno_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit3")), "Text"))])), ""))) {
    await $.mset((await $.v(C, "XFLabel4")), "Caption", "Gəlir hesabı seçilməyib  !");
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), true))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit4")), "Text"))])), ""))) {
      await $.mset((await $.v(C, "XFLabel4")), "Caption", "Balans hesabı seçilməyib  !");
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadSH")), "Checked")), true))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit4")), "Text"))])), ""))) {
      await $.mset((await $.v(C, "XFLabel4")), "Caption", "Sub hesab seçilməyib  !");
      return L0.result;
    }
  }
  L0["c_income_acc_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit3")), "Text"))]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), true))) {
    L0["c_b_s_status"] = 0;
  } else {
    L0["c_b_s_status"] = 1;
  }
  L0["c_balcn_accno_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit4")), "Text"))]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "edit4")), "Text"))))) {
      await $.mset((await $.v(C, "XFLabel4")), "Caption", "Gəlir və balans hesabını eyni seçmisiniz   !");
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadSH")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "edit4")), "Text"))))) {
      await $.mset((await $.v(C, "XFLabel4")), "Caption", "Gəlir və sub hesabını eyni seçmisiniz   !");
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), true))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), "")))) {
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "qk_accsettings")), "CallIntegerFunction", ["Add_QK_Acc_settings_yoxlama", ["c_balcn_accno_id", (await $.mv((await $.v(C, "Edit4")), "Text"))]]));
      if ($.truthy($.ne(L0["b"], (-(1))))) {
        await $.mset((await $.v(C, "XFLabel4")), "Caption", " Bu balans hesabı atrıq sazlanıb  !");
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadSH")), "Checked")), true))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), "")))) {
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "qk_accsettings")), "CallIntegerFunction", ["Add_QK_Acc_settings_yoxlama", ["c_balcn_accno_id", (await $.mv((await $.v(C, "Edit4")), "Text"))]]));
      if ($.truthy($.ne(L0["b"], (-(1))))) {
        await $.mset((await $.v(C, "XFLabel4")), "Caption", " Hesab artıq sazlanıb !");
        return L0.result;
      }
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "qk_accsettings")), "CallProcedure", ["add_acc_settings", [L0["c_income_acc_id"], L0["c_b_s_status"], L0["c_balcn_accno_id"]]])));
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mset((await $.v(C, "XFLabel4")), "Caption", " Sazlama uğurla yerinə yetrildi  !");
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_ACC_SETTINGS")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_ACC_SETTINGS")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Report", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["        Silinsinmi  ?", ["c_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "qk_accsettings")), "CallProcedure", ["del_QK_Acc_settings", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_ACC_SETTINGS")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_ACC_SETTINGS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Report", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "IncomeForm", (await $.mcall((await $.v(C, "TIncomeForm")), "create", [Self])));
  await $.mset((await $.v(C, "XFLabel4")), "Caption", "");
  await $.mcall((await $.v(C, "IncomeForm")), "showModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Report", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadBH")), "Checked")), true))) {
    await $.set(C, "FormBalCN", (await $.mcall((await $.v(C, "tFormBalCN")), "create", [Self])));
    await $.mcall((await $.v(C, "FormBalCN")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadSH")), "Checked")), true))) {
    await $.set(C, "FormAccNo_BalCN", (await $.mcall((await $.v(C, "TFormAccNo_BalCN")), "create", [Self])));
    await $.mcall((await $.v(C, "FormAccNo_BalCN")), "ShowModal", []);
  }
  await $.mset((await $.v(C, "XFLabel4")), "Caption", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from Executive.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Executive", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "DBCtrls", "Mask", "ExtCtrls", "UnitDataModuleCourt"]);
  const C = [U];
  U.defClass("TFormExecutive", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("FormExecutive", null, "TFormExecutive");
  });
  U.method("TFormExecutive", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit3")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExecutive", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit3")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExecutive", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Gondərəcəyiniz yeri seçin!"])));
    return L0.result;
  } else {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModuleCourt")), "ct_control"));
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["ExecutiveBodyUpdate", ["crnum", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1], "DBEdit1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), "etype", (await $.mv((await $.wv([$t1], "DBLookupComboBox1", C, false)), "KeyValue"))]], C)));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBEdit1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), []])));
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExecutive", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

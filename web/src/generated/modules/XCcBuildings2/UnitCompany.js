// Generated from UnitCompany.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitCompany", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "UnitDataModccBuildings"]);
  const C = [U];
  U.defClass("TFormCompany", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "editcompany": {"name": "EditCompany", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}, "addupd": {"name": "AddUpd", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormCompany", null, "TFormCompany");
  });
  U.method("TFormCompany", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_name": '', "p_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditCompany")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Şirkətin adını daxil edin!"])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditCompany")), "Text")), ""))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "Text")), "1"))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_OP")), "CallProcedure", ["add_Companies", [(await $.mv((await $.v(C, "EditCompany")), "Text"))]])));
      await $.mset((await $.v(C, "EditCompany")), "Text", "");
      await $.mcall((await $.v(C, "EditCompany")), "SetFocus", []);
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "Text")), "2"))) {
      L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatamodccBuildings")), "CC_Company")), "FieldByName", ["ID"])), "AsInteger"));
      L0["p_name"] = (await $.mv((await $.v(C, "EditCompany")), "Text"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_OP")), "CallProcedure", ["upd_Companies", [L0["p_id"], L0["p_name"]]])));
    }
    await $.mcall((await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from group.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("group", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "Datamod1", "sboapiDataModuleImpl", "DB", "OracleData"]);
  const C = [U];
  U.defClass("TAddgroup", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Addgroup", null, "TAddgroup");
  });
  U.method("TAddgroup", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "AddName")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "AddName")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "AddName")), "Insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "AddName")), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.v(C, "edit1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "AddName")), "FieldByName", ["Percent"])), "AsInteger", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit2")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "AddName")), "Post", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Vesait qrupu elave edildi "])));
  await $.mcall((await $.v(C, "Addgroup")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

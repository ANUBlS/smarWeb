// Generated from InfoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InfoImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "Buttons", "ExtDlgs", "OracleData", "db", "ExtCtrls", "OracleNavigator", "ShellApi", "DMprop"]);
  const C = [U];
  U.defClass("TInfoFrm", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "openpicturedialog2": {"name": "OpenPictureDialog2", "type": "TOpenPictureDialog"}, "oraclenavigator3": {"name": "OracleNavigator3", "type": "TOracleNavigator"}}, {});
  U.init(async () => {
    U.var_("InfoFrm", null, "TInfoFrm");
  });
  U.method("TInfoFrm", "SpeedButton14Click", async function SpeedButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filename": '', "path": '', "dataset": null};
  await $.fixArgs(L0, ["sender"]);
  L0["dataset"] = (await $.mv((await $.v(C, "DMproperties")), "Info"));
  {
    const $t1 = L0["dataset"];
    await $.stmt($.wcall([$t1], "Edit", [], C));
    if ($.truthy((await $.mv((await $.wv([$t1], "OpenPictureDialog2", C, false)), "Execute")))) {
      await $.stmt((await $.mcall((await $.wcall([$t1], "TBlobField", [(await $.mcall((await $.wv([$t1], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["info"]))], C)), "LoadFromFile", [(await $.mv((await $.wv([$t1], "OpenPictureDialog2", C, false)), "FileName"))])));
    } else {
      return L0.result;
      await $.mcall((await $.wv([$t1], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "cancel", []);
    }
    await $.mset((await $.mcall((await $.wv([$t1], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["filename"])), "Value", (await $.wcall([$t1], "ExtractFileName", [(await $.mv((await $.wv([$t1], "OpenPictureDialog2", C, false)), "FileName"))], C)));
    await $.mcall((await $.wv([$t1], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInfoFrm", "SpeedButton15Click", async function SpeedButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filename": '', "path": '', "dataset": null};
  await $.fixArgs(L0, ["sender"]);
  L0["dataset"] = (await $.mv((await $.v(C, "DMproperties")), "Info"));
  if ($.truthy((await $.mv((await $.call(C, "TBlobField", [(await $.mcall(L0["dataset"], "FieldByName", ["info"]))])), "IsNull")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məlumat yoxdur "])));
    return L0.result;
  }
  L0["path"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "DocTemp\\");
  L0["filename"] = $.add(L0["path"], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", ["filename"])), "Value")));
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["path"]]))))) {
    await $.stmt((await $.call(C, "MkDir", [L0["path"]])));
  }
  await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall(L0["dataset"], "FieldByName", ["info"]))])), "SaveToFile", [L0["filename"]])));
  await $.stmt((await $.call(C, "ShellExecute", [(await $.v(C, "handle")), "Open", (await $.call(C, "PChar", [L0["filename"]])), null, null, (await $.v(C, "SW_SHOW"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

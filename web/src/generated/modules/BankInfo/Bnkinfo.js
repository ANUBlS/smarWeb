// Generated from Bnkinfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Bnkinfo", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "XFSCtrls", "Buttons", "Mask", "DBCtrlsEh", "sboapiDataModuleImpl", "DB", "OracleData", "frminfo"]);
  const C = [U];
  U.defClass("TForm21", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "bnknumber": {"name": "bnknumber", "type": "TEdit"}, "bnkname": {"name": "bnkname", "type": "TEdit"}, "bnklname": {"name": "bnklname", "type": "TEdit"}, "bnkfname": {"name": "bnkfname", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "bnkinfo": {"name": "bnkinfo", "type": "TOracleDataSet"}, "bnkinfokod_b": {"name": "bnkinfoKOD_B", "type": "TFloatField"}, "bnkinfocn": {"name": "bnkinfoCN", "type": "TWideStringField"}, "bnkinfoname": {"name": "bnkinfoNAME", "type": "TWideStringField"}, "bnkinfosurname": {"name": "bnkinfoSURNAME", "type": "TWideStringField"}, "bnkinfofname": {"name": "bnkinfoFNAME", "type": "TWideStringField"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}}, {});
  U.init(async () => {
    U.var_("Form21", null, "TForm21");
  });
  U.method("TForm21", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "bnkinfo")), "close", []);
  await $.stmt((await $.mcall((await $.v(C, "bnkinfo")), "setvariable", ["nf", (await $.mv((await $.v(C, "combobox1")), "text"))])));
  await $.mcall((await $.v(C, "bnkinfo")), "open", []);
  await $.mset((await $.v(C, "bnknumber")), "text", (await $.mv((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["cn"])), "AsString")));
  await $.mset((await $.v(C, "bnkname")), "text", (await $.mv((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["name"])), "AsString")));
  await $.mset((await $.v(C, "bnklname")), "text", (await $.mv((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["surname"])), "AsString")));
  await $.mset((await $.v(C, "bnkfname")), "text", (await $.mv((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["fname"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm21", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "bnkinfo")), "Open", []);
  await $.mcall((await $.v(C, "bnkinfo")), "Insert", []);
  await $.mset((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["kod_b"])), "AsInteger", (await $.mv((await $.v(C, "ComboBox2")), "ItemIndex")));
  await $.mset((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["cn"])), "AsString", (await $.mv((await $.v(C, "bnknumber")), "text")));
  await $.mset((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["name"])), "AsString", (await $.mv((await $.v(C, "bnkname")), "text")));
  await $.mset((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["surname"])), "AsString", (await $.mv((await $.v(C, "bnklname")), "text")));
  await $.mset((await $.mcall((await $.v(C, "bnkinfo")), "FieldByName", ["fname"])), "AsString", (await $.mv((await $.v(C, "bnkfname")), "text")));
  await $.mcall((await $.v(C, "bnkinfo")), "Post", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Əlavə edildi."])));
  await $.mcall((await $.v(C, "bnkinfo")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Add", [(await $.mv((await $.v(C, "bnknumber")), "text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

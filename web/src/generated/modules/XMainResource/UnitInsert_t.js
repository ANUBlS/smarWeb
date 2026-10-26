// Generated from UnitInsert_t.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitInsert_t", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "UnitWares", "UnitInsWares", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormInsert_t", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormInsert_t", null, "TFormInsert_t");
    U.var_("gg", 0, "integer");
  });
  U.method("TFormInsert_t", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormInsert_t")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert_t", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_diger": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormInsert_t")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert_t", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "gg")), 2))) {
    await $.mset((await $.v(C, "edit1")), "text", (await $.mv((await $.mv((await $.v(C, "FormUpdWares")), "Edit_Wares_Name")), "Text")));
    await $.mset((await $.v(C, "edit5")), "Text", (await $.mv((await $.mv((await $.v(C, "FormUpdWares")), "Edit_Keeping_Sec1")), "Text")));
    await $.mset((await $.v(C, "edit8")), "Text", (await $.mv((await $.mv((await $.v(C, "FormUpdWares")), "Edit_Inv_No")), "Text")));
    await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.mv((await $.v(C, "FormUpdWares")), "Edit_Keeping_Sec1")), "Text")));
    await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mv((await $.v(C, "FormUpdWares")), "CBoxFXM")), "Text")));
    await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["CHARACTER"])), "asstring")));
    await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["PRODUCTION"])), "asstring")));
    await $.mset((await $.v(C, "edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["INFORMATION"])), "asstring")));
  }
  if ($.truthy($.eq((await $.v(C, "gg")), 1))) {
    await $.mset((await $.v(C, "edit1")), "text", (await $.mv((await $.mv((await $.v(C, "FormInsert")), "Edit_Wares_Name")), "Text")));
    await $.mset((await $.v(C, "edit5")), "Text", (await $.mv((await $.mv((await $.v(C, "FormInsert")), "Edit_Keeping_Sec")), "Text")));
    await $.mset((await $.v(C, "edit8")), "Text", (await $.mv((await $.mv((await $.v(C, "FormInsert")), "Edit_Inv_No")), "Text")));
    await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.mv((await $.v(C, "FormInsert")), "Edit_User")), "Text")));
    await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mv((await $.v(C, "FormInsert")), "CBoxFXM")), "Text")));
    await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["CHARACTER"])), "asstring")));
    await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["PRODUCTION"])), "asstring")));
    await $.mset((await $.v(C, "edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["INFORMATION"])), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert_t", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from adm_AdvGrantAddEditForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("adm_AdvGrantAddEditForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CurrencyEdit", "ExtCtrls", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("TfrmAddEditAdvGrants", "TForm", {"edgrantname": {"name": "edGrantName", "type": "TEdit"}, "ederrormessage": {"name": "edErrorMessage", "type": "TEdit"}, "eddescription": {"name": "edDescription", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "pnmb": {"name": "pnMB", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "newrecord": {"name": "NewRecord", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("frmAddEditAdvGrants", null, "TfrmAddEditAdvGrants");
  });
  U.method("TfrmAddEditAdvGrants", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditAdvGrants", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "intval": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t2 = (await $.v(C, "AdministrationData"));
      if ($.truthy((await $.wv([$t2], "NewRecord", C, false)))) {
        if ($.truthy((await $.mv((await $.wv([$t2], "CheckBox1", C, false)), "Checked")))) {
          await $.stmt((await $.mcall((await $.wv([$t2], "pcADM", C, false)), "CallProcedure", ["addnewadvancedgrantwithborder", [(await $.mv((await $.wv([$t2], "ModeditdataMODID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t2], "edGrantName", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edErrorMessage", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edDescription", C, false)), "Text")), (await $.mv((await $.wv([$t2], "currencyedit1", C, false)), "Value"))]])));
        } else {
          await $.wset([$t2], "IntVal", (await $.mcall((await $.wv([$t2], "pcADM", C, false)), "CallIntegerFunction", ["addnewadvancedgrant", [(await $.mv((await $.wv([$t2], "ModeditdataMODID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t2], "edGrantName", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edErrorMessage", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edDescription", C, false)), "Text"))]])), { get: async () => L0["intval"], set: async (v) => { L0["intval"] = v; }, local: true });
        }
      } else {
        await $.stmt((await $.mcall((await $.wv([$t2], "pcADM", C, false)), "CallProcedure", ["editadvancedgrant", [(await $.mv((await $.wv([$t2], "ModAdvancedGrantsDataID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t2], "ModeditdataMODID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t2], "edGrantName", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edErrorMessage", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edDescription", C, false)), "Text"))]])));
        if ($.truthy((await $.mv((await $.wv([$t2], "CheckBox1", C, false)), "Checked")))) {
          await $.stmt((await $.mcall((await $.wv([$t2], "pcADM", C, false)), "CallProcedure", ["editmoneyborder", [(await $.mv((await $.wv([$t2], "ModAdvancedGrantsDataID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t2], "CurrencyEdit1", C, false)), "Value"))]])));
        } else {
          await $.stmt((await $.mcall((await $.wv([$t2], "pcADM", C, false)), "CallProcedure", ["delmoneyborder", [(await $.mv((await $.wv([$t2], "ModAdvancedGrantsDataID", C, false)), "AsVariant"))]])));
        }
      }
    }
    await $.stmt($.call(C, "close", []));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.stmt((await $.call(C, "showmessage", ["Error"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

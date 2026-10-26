// Generated from CableManServAddEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableManServAddEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "CurrencyEdit", "OracleData", "ComCtrls", "Buttons", "CableManDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmServAddEdit", "TForm", {"dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "label4": {"name": "Label4", "type": "TLabel"}, "cbmeth": {"name": "cbMeth", "type": "TComboBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "tptime": {"name": "tpTime", "type": "TDateTimePicker"}, "cboxfrmanthracc": {"name": "CBoxFrmAnthrAcc", "type": "TDBLookupComboBox"}, "chboxfrmanthracc": {"name": "ChBoxFrmAnthrAcc", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("frmServAddEdit", null, "TfrmServAddEdit");
  });
  U.method("TfrmServAddEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModCable"));
    { const $t2 = $.sub((await $.wv([$t1], "componentcount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy((await $.and_(($.is_((await $.idx((await $.wv([$t1], "components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "toracledataset")), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "tag")), 2)))))) {
          await $.mcall((await $.idx((await $.wv([$t1], "components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "open", []);
        }
        await $.tick();
      }
    }
  }
  await $.mset((await $.v(C, "ChBoxFrmAnthrAcc")), "Checked", false);
  await $.mset((await $.v(C, "CBoxFrmAnthrAcc")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmServAddEdit", "ChBoxFrmAnthrAccClick", async function ChBoxFrmAnthrAccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ChBoxFrmAnthrAcc")), "Checked")))) {
    await $.mset((await $.v(C, "CBoxFrmAnthrAcc")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "CBoxFrmAnthrAcc")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

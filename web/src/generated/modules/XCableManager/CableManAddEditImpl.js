// Generated from CableManAddEditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableManAddEditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "OracleData", "ComCtrls", "ExtCtrls", "Buttons", "CableManDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmAbonAddEdit", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "edname": {"name": "edName", "type": "TEdit"}, "edreg": {"name": "edReg", "type": "TDateTimePicker"}, "eddoctype": {"name": "edDocType", "type": "TDBLookupComboBox"}, "eddoc": {"name": "edDoc", "type": "TEdit"}, "edaddr": {"name": "edAddr", "type": "TEdit"}, "edphon": {"name": "edPhon", "type": "TEdit"}, "edwphon": {"name": "edWPhon", "type": "TEdit"}, "edaccroof": {"name": "edAccRoof", "type": "TCheckBox"}, "edsignal": {"name": "edSignal", "type": "TCheckBox"}, "edreciever": {"name": "edReciever", "type": "TEdit"}, "edengtime": {"name": "edEngTime", "type": "TDateTimePicker"}, "edengineer": {"name": "edEngineer", "type": "TDBLookupComboBox"}, "eddone": {"name": "edDone", "type": "TDateTimePicker"}, "edvat": {"name": "edVAT", "type": "TCheckBox"}, "edstatus": {"name": "edStatus", "type": "TDBLookupComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "edmobphone": {"name": "edMobPhone", "type": "TEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "chboxforeigner": {"name": "ChBoxForeigner", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("frmAbonAddEdit", null, "TfrmAbonAddEdit");
  });
  U.method("TfrmAbonAddEdit", "FormCreate", async function FormCreate(Self, p0) {
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
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

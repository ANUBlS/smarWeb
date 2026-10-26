// Generated from CableContractsAddEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableContractsAddEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "CurrencyEdit", "ComCtrls", "OracleData", "Buttons", "DataModCableContr", "CableContAccsImpl"]);
  const C = [U];
  U.defClass("TfrmContractAddEdit", "TForm", {"lbcontract_num": {"name": "lbcontract_num", "type": "TLabel"}, "lbcard_num": {"name": "lbcard_num", "type": "TLabel"}, "lbinst_date": {"name": "lbinst_date", "type": "TLabel"}, "lbinst_place": {"name": "lbinst_place", "type": "TLabel"}, "lbserie": {"name": "lbserie", "type": "TLabel"}, "lbworks_num": {"name": "lbworks_num", "type": "TLabel"}, "lbreceiver_num": {"name": "lbreceiver_num", "type": "TLabel"}, "lbcable_length": {"name": "lbcable_length", "type": "TLabel"}, "lbamount": {"name": "lbamount", "type": "TLabel"}, "lbcurr_code": {"name": "lbcurr_code", "type": "TLabel"}, "lbdiscount": {"name": "lbdiscount", "type": "TLabel"}, "lbeng_id": {"name": "lbeng_id", "type": "TLabel"}, "lbpack_num": {"name": "lbpack_num", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edcontract_num": {"name": "edcontract_num", "type": "TEdit"}, "edcard_num": {"name": "edcard_num", "type": "TEdit"}, "edinst_date": {"name": "edinst_date", "type": "TDateTimePicker"}, "edinst_place": {"name": "edinst_place", "type": "TComboBox"}, "edserie": {"name": "edserie", "type": "TEdit"}, "edworks_num": {"name": "edworks_num", "type": "TEdit"}, "edreceiver_num": {"name": "edreceiver_num", "type": "TEdit"}, "edcable_length": {"name": "edcable_length", "type": "TEdit"}, "edamount": {"name": "edamount", "type": "TCurrencyEdit"}, "edcurr_code": {"name": "edcurr_code", "type": "TDBLookupComboBox"}, "eddiscount": {"name": "eddiscount", "type": "TEdit"}, "edeng_id": {"name": "edeng_id", "type": "TDBLookupComboBox"}, "edpack_num": {"name": "edpack_num", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edacc_id": {"name": "edAcc_ID", "type": "TDBLookupComboBox"}, "abonent": {"name": "Abonent", "type": "TLabel"}, "edabn_id": {"name": "edabn_id", "type": "TDBLookupComboBox"}, "edcalcag": {"name": "edCalcAg", "type": "TCheckBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "eddiscdesc": {"name": "edDiscDesc", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "edexp_date": {"name": "edexp_date", "type": "TDateTimePicker"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("frmContractAddEdit", null, "TfrmContractAddEdit");
  });
  U.method("TfrmContractAddEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.mv((await $.v(C, "DataModC")), "componentcount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.mv((await $.v(C, "DataModC")), "components")), [L0["i"]])), "toracledataset")), async () => ($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "DataModC")), "components")), [L0["i"]])), "tag")), 2)))))) {
        await $.mcall((await $.idx((await $.mv((await $.v(C, "DataModC")), "components")), [L0["i"]])), "open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractAddEdit", "edpack_numCloseUp", async function edpack_numCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edamount")), "value", $.add((await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "Fields")), [2])), "AsCurrency")), (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "Fields")), [4])), "AsCurrency"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractAddEdit", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmAcc"))]))))) {
    await $.set(C, "frmAcc", (await $.mcall((await $.v(C, "TfrmAcc")), "Create", [Self])));
  }
  {
    const $t3 = (await $.v(C, "DataModC"));
    const $t4 = (await $.wv([$t3], "frmAcc", C, false));
    if ($.truthy($.eq((await $.wv([$t3, $t4], "ShowModal", C, false)), 1))) {
      await $.wset([$t3, $t4], "AcID", (await $.mcall((await $.wv([$t3, $t4], "CABLE", C, false)), "CallIntegerFunction", ["open_account", [(await $.mv((await $.wv([$t3, $t4], "AccNoEdit", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t3, $t4], "odsAbonents", C, false)), "Fields")), [1])), "AsString")), (await $.mv((await $.idx((await $.mv((await $.wv([$t3, $t4], "odsValutes", C, false)), "Fields")), [0])), "AsInteger"))]])), { get: async () => L0["acid"], set: async (v) => { L0["acid"] = v; }, local: true });
      await $.mcall((await $.wv([$t3, $t4], "odsAccs", C, false)), "Close", []);
      await $.mcall((await $.wv([$t3, $t4], "odsAccs", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "odsAccs", C, false)), "Locate", ["ID", (await $.wv([$t3, $t4], "AcID", { get: async () => L0["acid"], set: async (v) => { L0["acid"] = v; }, local: true }, false)), []])));
      await $.mset((await $.wv([$t3, $t4], "edAcc_ID", C, false)), "KeyValue", (await $.wv([$t3, $t4], "AcID", { get: async () => L0["acid"], set: async (v) => { L0["acid"] = v; }, local: true }, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

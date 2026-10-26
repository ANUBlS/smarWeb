// Generated from CableManContractAdd.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableManContractAdd", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "DBCtrls", "OracleData", "CurrencyEdit", "Buttons", "CableManDataModuleImpl", "CableManAccsImpl"]);
  const C = [U];
  U.defClass("TfrmContractAdd", "TForm", {"edcontract_num": {"name": "edcontract_num", "type": "tedit"}, "edcard_num": {"name": "edcard_num", "type": "tedit"}, "edinst_date": {"name": "edinst_date", "type": "TDateTimePicker"}, "edinst_place": {"name": "edinst_place", "type": "TComboBox"}, "edserie": {"name": "edserie", "type": "tedit"}, "edworks_num": {"name": "edworks_num", "type": "tedit"}, "edreceiver_num": {"name": "edreceiver_num", "type": "tedit"}, "edcable_length": {"name": "edcable_length", "type": "tedit"}, "edamount": {"name": "edamount", "type": "TCurrencyEdit"}, "edcurr_code": {"name": "edcurr_code", "type": "TDBLookupComboBox"}, "eddiscount": {"name": "eddiscount", "type": "tedit"}, "edeng_id": {"name": "edeng_id", "type": "TDBLookupComboBox"}, "edpack_num": {"name": "edpack_num", "type": "TDBLookupComboBox"}, "lbcontract_num": {"name": "lbcontract_num", "type": "tlabel"}, "lbcard_num": {"name": "lbcard_num", "type": "tlabel"}, "lbinst_date": {"name": "lbinst_date", "type": "tlabel"}, "lbinst_place": {"name": "lbinst_place", "type": "tlabel"}, "lbserie": {"name": "lbserie", "type": "tlabel"}, "lbworks_num": {"name": "lbworks_num", "type": "tlabel"}, "lbreceiver_num": {"name": "lbreceiver_num", "type": "tlabel"}, "lbcable_length": {"name": "lbcable_length", "type": "tlabel"}, "lbamount": {"name": "lbamount", "type": "tlabel"}, "lbcurr_code": {"name": "lbcurr_code", "type": "tlabel"}, "lbdiscount": {"name": "lbdiscount", "type": "tlabel"}, "lbeng_id": {"name": "lbeng_id", "type": "tlabel"}, "lbpack_num": {"name": "lbpack_num", "type": "tlabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "edacc_id": {"name": "edAcc_ID", "type": "TDBLookupComboBox"}, "edcalcag": {"name": "edCalcAg", "type": "TCheckBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "eddiscdesc": {"name": "edDiscDesc", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "edexp_date": {"name": "edexp_date", "type": "TDateTimePicker"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "lblsrv_num": {"name": "LblSRV_num", "type": "TLabel"}, "edsrv_num": {"name": "edSRV_num", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("frmContractAdd", null, "TfrmContractAdd");
  });
  U.method("TfrmContractAdd", "FormCreate", async function FormCreate(Self, p0) {
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
  U.method("TfrmContractAdd", "edpack_numCloseUp", async function edpack_numCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edamount")), "value", $.add((await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "Fields")), [2])), "AsCurrency")), (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "Fields")), [4])), "AsCurrency"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractAdd", "Label1DblClick", async function Label1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmAcc"))]))))) {
    await $.set(C, "frmAcc", (await $.mcall((await $.v(C, "TfrmAcc")), "Create", [Self])));
  }
  {
    const $t4 = (await $.v(C, "DataModCable"));
    const $t5 = (await $.wv([$t4], "frmAcc", C, false));
    if ($.truthy($.eq((await $.wv([$t4, $t5], "ShowModal", C, false)), 1))) {
      await $.wset([$t4, $t5], "AcID", (await $.mcall((await $.wv([$t4, $t5], "CABLE", C, false)), "CallIntegerFunction", ["open_account", [(await $.mv((await $.wv([$t4, $t5], "AccNoEdit", C, false)), "Text")), (await $.mv((await $.idx((await $.mv((await $.wv([$t4, $t5], "odsAbonents", C, false)), "Fields")), [1])), "AsString")), (await $.mv((await $.idx((await $.mv((await $.wv([$t4, $t5], "odsValutes", C, false)), "Fields")), [0])), "AsInteger"))]])), { get: async () => L0["acid"], set: async (v) => { L0["acid"] = v; }, local: true });
      await $.mcall((await $.wv([$t4, $t5], "odsAccs", C, false)), "Close", []);
      await $.mcall((await $.wv([$t4, $t5], "odsAccs", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t4, $t5], "odsAccs", C, false)), "Locate", ["ID", (await $.wv([$t4, $t5], "AcID", { get: async () => L0["acid"], set: async (v) => { L0["acid"] = v; }, local: true }, false)), []])));
      await $.mset((await $.wv([$t4, $t5], "edAcc_ID", C, false)), "KeyValue", (await $.wv([$t4, $t5], "AcID", { get: async () => L0["acid"], set: async (v) => { L0["acid"] = v; }, local: true }, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractAdd", "edSRV_numCloseUp", async function edSRV_numCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edamount")), "value", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["price"])), "AsCurrency")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

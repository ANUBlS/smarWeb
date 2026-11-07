// Generated from CCAccountImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CCAccountImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Mask", "DBCtrls", "XFSCtrls", "CCDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormContractAccounts", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "xfcheckbox4": {"name": "XFCheckBox4", "type": "TXFCheckBox"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "xfcheckbox6": {"name": "XFCheckBox6", "type": "TXFCheckBox"}, "xfcheckbox7": {"name": "XFCheckBox7", "type": "TXFCheckBox"}, "xfcheckbox8": {"name": "XFCheckBox8", "type": "TXFCheckBox"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "xfcheckbox10": {"name": "XFCheckBox10", "type": "TXFCheckBox"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xfcheckbox11": {"name": "XFCheckBox11", "type": "TXFCheckBox"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "xfcheckbox12": {"name": "XFCheckBox12", "type": "TXFCheckBox"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "xflabel25": {"name": "XFLabel25", "type": "TXFLabel"}, "xfcheckbox13": {"name": "XFCheckBox13", "type": "TXFCheckBox"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "xflabel26": {"name": "XFLabel26", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xfcheckbox14": {"name": "XFCheckBox14", "type": "TXFCheckBox"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("FormContractAccounts", null, "TFormContractAccounts");
  });
  U.method("TFormContractAccounts", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFCheckBox1")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox2")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox3")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox4")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox5")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox6")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox7")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox8")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox9")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox10")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox14")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox13")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox12")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox11")), "Checked", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormContractAccounts", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormContractAccounts", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["BOOROWERID"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel2")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel2")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["loanaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel3")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel3")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["dueloanaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel4")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel4")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["interestaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel5")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel5")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["dueinterestaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel6")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel6")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["primaryreserveaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel7")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel7")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["secondaryreserveaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel8")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel8")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["primarypurreserveaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel9")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel9")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["secondarypurreserveaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel10")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel10")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["doublepaymentaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel15")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel15")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["insuranceaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel14")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel14")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["commissionobligationaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel13")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel13")), "Visible", false);
  }
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "CCDataMod")), "Accounts")), "fieldbyname", ["tranzitaccid"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFPanel12")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFPanel12")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormContractAccounts", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "boorowerid": 0, "booroweraccid": 0, "loanaccid": 0, "dueloanaccid": 0, "interestaccid": 0, "dueinterestaccid": 0, "primaryreserveaccid": 0, "secondaryreserveaccid": 0, "secondarypurreserveaccid": 0, "primarypurreserveaccid": 0, "doublepaymentaccid": 0, "insuranceaccid": 0, "commissionobligationaccid": 0, "tranzitaccid": 0, "loanid": 0, "presid": 0, "intid": 0, "custid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "CCDataMod"));
    const $t2 = (await $.wv([$t1], "Accounts", C, false));
    const $t3 = (await $.wv([$t1, $t2], "CM_CREDIT", C, false));
    await $.wset([$t1, $t2, $t3], "boorowerid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["BOOROWERID"], C)), "AsInteger")), { get: async () => L0["boorowerid"], set: async (v) => { L0["boorowerid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "booroweraccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["BOOROWERAccID"], C)), "AsInteger")), { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "loanaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["loanaccid"], C)), "AsInteger")), { get: async () => L0["loanaccid"], set: async (v) => { L0["loanaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "dueloanaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["dueloanaccid"], C)), "AsInteger")), { get: async () => L0["dueloanaccid"], set: async (v) => { L0["dueloanaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "interestaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["interestaccid"], C)), "AsInteger")), { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "dueinterestaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["dueinterestaccid"], C)), "AsInteger")), { get: async () => L0["dueinterestaccid"], set: async (v) => { L0["dueinterestaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "primaryreserveaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["primaryreserveaccid"], C)), "AsInteger")), { get: async () => L0["primaryreserveaccid"], set: async (v) => { L0["primaryreserveaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "secondaryreserveaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["secondaryreserveaccid"], C)), "AsInteger")), { get: async () => L0["secondaryreserveaccid"], set: async (v) => { L0["secondaryreserveaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "secondarypurreserveaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["secondarypurreserveaccid"], C)), "AsInteger")), { get: async () => L0["secondarypurreserveaccid"], set: async (v) => { L0["secondarypurreserveaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "primarypurreserveaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["primarypurreserveaccid"], C)), "AsInteger")), { get: async () => L0["primarypurreserveaccid"], set: async (v) => { L0["primarypurreserveaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "doublepaymentaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["doublepaymentaccid"], C)), "AsInteger")), { get: async () => L0["doublepaymentaccid"], set: async (v) => { L0["doublepaymentaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "insuranceaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["insuranceaccid"], C)), "AsInteger")), { get: async () => L0["insuranceaccid"], set: async (v) => { L0["insuranceaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "commissionobligationaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["commissionobligationaccid"], C)), "AsInteger")), { get: async () => L0["commissionobligationaccid"], set: async (v) => { L0["commissionobligationaccid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "tranzitaccid", (await $.mv((await $.wcall([$t1, $t2, $t3], "fieldbyname", ["tranzitaccid"], C)), "AsInteger")), { get: async () => L0["tranzitaccid"], set: async (v) => { L0["tranzitaccid"] = v; }, local: true });
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "boorowerid", { get: async () => L0["boorowerid"], set: async (v) => { L0["boorowerid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox1", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "booroweraccid", { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox2", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "loanaccid", { get: async () => L0["loanaccid"], set: async (v) => { L0["loanaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox3", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "dueloanaccid", { get: async () => L0["dueloanaccid"], set: async (v) => { L0["dueloanaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox4", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "interestaccid", { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox5", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "dueinterestaccid", { get: async () => L0["dueinterestaccid"], set: async (v) => { L0["dueinterestaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox6", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "primaryreserveaccid", { get: async () => L0["primaryreserveaccid"], set: async (v) => { L0["primaryreserveaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox7", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "secondaryreserveaccid", { get: async () => L0["secondaryreserveaccid"], set: async (v) => { L0["secondaryreserveaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox8", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "secondarypurreserveaccid", { get: async () => L0["secondarypurreserveaccid"], set: async (v) => { L0["secondarypurreserveaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox10", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "primarypurreserveaccid", { get: async () => L0["primarypurreserveaccid"], set: async (v) => { L0["primarypurreserveaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox9", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Customers", ["p_id", (await $.wv([$t1, $t2, $t3], "custid", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox1", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "doublepaymentaccid", { get: async () => L0["doublepaymentaccid"], set: async (v) => { L0["doublepaymentaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox14", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "insuranceaccid", { get: async () => L0["insuranceaccid"], set: async (v) => { L0["insuranceaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox13", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "commissionobligationaccid", { get: async () => L0["commissionobligationaccid"], set: async (v) => { L0["commissionobligationaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox12", C, false)), "Checked"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["CloseCont_Account", ["p_id", (await $.wv([$t1, $t2, $t3], "tranzitaccid", { get: async () => L0["tranzitaccid"], set: async (v) => { L0["tranzitaccid"] = v; }, local: true }, false)), "defCA", (await $.mv((await $.wv([$t1, $t2, $t3], "XFCheckBox11", C, false)), "Checked"))]], C)));
    await $.stmt($.wcall([$t1, $t2, $t3], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

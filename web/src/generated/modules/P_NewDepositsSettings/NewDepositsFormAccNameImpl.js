// Generated from NewDepositsFormAccNameImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFormAccNameImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DB", "OracleData", "ComCtrls", "ToolWin", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "Buttons", "NewDepositsFrmAddEditAccTurningImpl"]);
  const C = [U];
  U.defClass("TNewDepositsFormAccName", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "accountsdatsrc": {"name": "AccountsDatSrc", "type": "TDataSource"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "TWideStringField"}, "accountsname": {"name": "AccountsNAME", "type": "TWideStringField"}, "accountsval_acc": {"name": "AccountsVAL_ACC", "type": "TIntegerField"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "editname": {"name": "EditName", "type": "TEdit"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "editid": {"name": "EditID", "type": "TEdit"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "editacc_no": {"name": "EditACC_NO", "type": "TEdit"}, "accountsfilial": {"name": "AccountsFILIAL", "type": "TWideStringField"}, "accountsid2": {"name": "AccountsID2", "type": "TFloatField"}, "accountsvalname": {"name": "AccountsVALNAME", "type": "TWideStringField"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "accountsfilialid": {"name": "AccountsFILIALID", "type": "TIntegerField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFormAccName", null, "TNewDepositsFormAccName");
  });
  U.method("TNewDepositsFormAccName", "EditACC_NOExit", async function EditACC_NOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormAccName", "EditACC_NOKeyPress", async function EditACC_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFormAccName", "EditIDExit", async function EditIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormAccName", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFormAccName", "EditNameExit", async function EditNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormAccName", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFormAccName", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "Accounts"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "NewDepositsFrmAddEditAccTurning", C, false)), "valcategoryid")), 0))) {
      { const $t2 = await $.iset((await $.wv([$t1], "SQL", C, false)), [11], "close_dat is null and (val_acc<=:val_acc)"); if ($t2 !== undefined) { await $.wset([$t1], "SQL", $t2, C); } }
    } else {
      { const $t3 = await $.iset((await $.wv([$t1], "SQL", C, false)), [11], "close_dat is null and (val_acc>=:val_acc)"); if ($t3 !== undefined) { await $.wset([$t1], "SQL", $t3, C); } }
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["val_acc", (await $.mv((await $.wv([$t1], "NewDepositsFrmAddEditAccTurning", C, false)), "valcategoryid"))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormAccName", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "NewDepositsFrmAddEditAccTurning"));
    await $.wset([$t4], "pvalkod", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
    await $.wset([$t4], "paccid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["val_acc"])), "AsInteger")), C);
    await $.wset([$t4], "pfilial", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["filialid"])), "AsInteger")), C);
    await $.mset((await $.wv([$t4], "EditAccno", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["acc_no"])), "AsString")));
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormAccName", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormAccName", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "v_name": '', "searchoptions": null, "result": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı Tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t5 = L0["sender"];
    await $.wset([$t5], "v_name", (await $.wv([$t5], "Name", C, false)), { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true });
    if ($.truthy($.eq((await $.wcall([$t5], "UpperCase", [(await $.wv([$t5], "Name", C, false))], C)), (await $.wcall([$t5], "UpperCase", ["EditAcc_No_Search"], C))))) {
      await $.wset([$t5], "v_name", "EditACC_NO", { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true });
    }
    await $.wset([$t5], "name", (await $.wv([$t5], "v_Name", { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true }, false)), C);
    await $.wset([$t5], "SearchOptions", [(await $.wv([$t5], "srIgnoreCase", C, false)), (await $.wv([$t5], "srPartialMatch", C, false))], { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true });
    {
      const $t6 = (await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
      await $.wset([$t5, $t6], "SearchField", (await $.wcall([$t5, $t6], "copy", [(await $.wv([$t5, $t6], "Name", C, false)), 5, (await $.wcall([$t5, $t6], "length", [(await $.wv([$t5, $t6], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
      {
        const $t7 = (await $.wv([$t5, $t6], "Accounts", C, false));
        if ($.truthy((await $.or_((await $.or_(($.eq((await $.wcall([$t5, $t6, $t7], "UpperCase", [(await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "ACC_NO")), async () => ($.eq((await $.wcall([$t5, $t6, $t7], "UpperCase", [(await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "NAME1")))), async () => ($.eq((await $.wcall([$t5, $t6, $t7], "UpperCase", [(await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "OLD_ACC_NO")))))) {
          { const $t8 = await $.iset((await $.wv([$t5, $t6, $t7], "SQL", C, false)), [17], ($.add($.add($.add($.add(" and lower(", (await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") like '"), (await $.wcall([$t5, $t6, $t7], "LowerCase", [(await $.wv([$t5, $t6, $t7], "Text", C, false))], C))), "%'"))); if ($t8 !== undefined) { await $.wset([$t5, $t6, $t7], "SQL", $t8, C); } }
        } else {
          if ($.truthy((await $.or_((await $.or_(($.eq((await $.wcall([$t5, $t6, $t7], "UpperCase", [(await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "OPEN_DAT")), async () => ($.eq((await $.wcall([$t5, $t6, $t7], "UpperCase", [(await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "CLOSE_DAT")))), async () => ($.eq((await $.wcall([$t5, $t6, $t7], "UpperCase", [(await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "USERINSERT")))))) {
            { const $t9 = await $.iset((await $.wv([$t5, $t6, $t7], "SQL", C, false)), [17], (":pSearch")); if ($t9 !== undefined) { await $.wset([$t5, $t6, $t7], "SQL", $t9, C); } }
            await $.stmt((await $.wcall([$t5, $t6, $t7], "SetVariable", ["pSearch", $.add($.add($.add($.add(" and lower(", (await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") = '"), (await $.wcall([$t5, $t6, $t7], "LowerCase", [(await $.wv([$t5, $t6, $t7], "Text", C, false))], C))), "'")], C)));
          } else {
            { const $t10 = await $.iset((await $.wv([$t5, $t6, $t7], "SQL", C, false)), [17], (":pSearch")); if ($t10 !== undefined) { await $.wset([$t5, $t6, $t7], "SQL", $t10, C); } }
            await $.stmt((await $.wcall([$t5, $t6, $t7], "SetVariable", ["pSearch", $.add($.add($.add(" and lower(", (await $.wv([$t5, $t6, $t7], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") = "), (await $.wcall([$t5, $t6, $t7], "LowerCase", [(await $.wv([$t5, $t6, $t7], "Text", C, false))], C)))], C)));
          }
        }
        if ($.truthy($.eq((await $.wcall([$t5, $t6, $t7], "Trim", [(await $.wv([$t5, $t6, $t7], "Text", C, false))], C)), ""))) {
          await $.stmt((await $.wcall([$t5, $t6, $t7], "SetVariable", ["pSearch", ""], C)));
        }
        await $.stmt($.wcall([$t5, $t6, $t7], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

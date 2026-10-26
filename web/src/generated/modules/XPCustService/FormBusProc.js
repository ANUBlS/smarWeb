// Generated from FormBusProc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormBusProc", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "StdCtrls", "XFSCtrls", "DB", "ExtCtrls", "Oracle", "UnitDataModPCustService", "FormTransaction2Lmpl", "FormTransaction3Lmpl", "FormTransaction1Lmpl", "UnitTransaction", "Creditİmpl", "DepozLmpl", "UnitTransaction11"]);
  const C = [U];
  U.defClass("TForm_busnesProc", "TForm", {"panel_bsproc": {"name": "Panel_BsProc", "type": "TPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "maingrid1": {"name": "MainGrid1", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("Form_busnesProc", null, "TForm_busnesProc");
  });
  U.method("TForm_busnesProc", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "Edit2"));
    if ($.truthy($.ne((await $.wv([$t1], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t1], "DataModPCustService", C, false)), "DS_BusProc")), "DataSet")), "Locate", ["ID", (await $.mv((await $.wv([$t1], "Edit2", C, false)), "Text")), [(await $.wv([$t1], "loPartialKey", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_busnesProc", "Edit2Click", async function Edit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit3")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_busnesProc", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_busnesProc", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "Edit3"));
    if ($.truthy($.ne((await $.wv([$t2], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t2], "DataModPCustService", C, false)), "DS_BusProc")), "DataSet")), "Locate", ["Name", (await $.mv((await $.wv([$t2], "Edit3", C, false)), "Text")), [(await $.wv([$t2], "loPartialKey", C, false)), (await $.wv([$t2], "loCaseInsensitive", C, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_busnesProc", "Edit3Click", async function Edit3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_busnesProc", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_(((await L0["key"].get())), [...$.range("0","9")]))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_busnesProc", "MainGrid1DblClick", async function MainGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["call_formtransaction1"] = $.fn(async function call_FormTransaction1() {
  const L1 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormTransaction1"))]))))) {
    await $.set(C, "FormTransaction1", (await $.mcall((await $.v(C, "TFormTransaction1")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormTransaction1")), "ShowModal", []);
  return L1.result;
});
  L0["call_formtransaction2"] = $.fn(async function call_FormTransaction2() {
  const L1 = {result: undefined, "x": 0};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormTransaction2"))]))))) {
    await $.set(C, "FormTransaction2", (await $.mcall((await $.v(C, "TFormTransaction2")), "Create", [Self])));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["CustID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t3], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t3], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t3], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccSymb_A"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t3], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t3], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.mcall((await $.wv([$t3], "DataModPCustService", C, false)), "BusProcFilter", [(await $.mv((await $.wv([$t3], "DataModPCustService", C, false)), "ODS_AccNO_A"))])));
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  await $.mcall((await $.v(C, "FormTransaction2")), "ShowModal", []);
  return L1.result;
});
  L0["call_formtransaction3"] = $.fn(async function call_FormTransaction3() {
  const L1 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormTransaction3"))]))))) {
    await $.set(C, "FormTransaction3", (await $.mcall((await $.v(C, "TFormTransaction3")), "Create", [Self])));
  }
  {
    const $t4 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["CustID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t4], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t4], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t4], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccSymb_A"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t4], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t4], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.mcall((await $.wv([$t4], "DataModPCustService", C, false)), "BusProcFilter", [(await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_AccNO_A"))])));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  {
    const $t5 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t5], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t5], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_B"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t5], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccSymb_B"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t5], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t5], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_B"])), "AsString"))], C)));
    }
    {
      const $t6 = (await $.mv((await $.wv([$t5], "DataModPCustService", C, false)), "ODS_BusProc"));
      if ($.truthy((await $.or_((await $.or_(($.ne((await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["AccBalCn_B"], C)), "AsString")), "")), async () => ($.ne((await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["AccSymb_B"], C)), "AsString")), "")))), async () => ($.ne((await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["AccCurr_B"], C)), "AsString")), "")))))) {
        { const $t7 = await $.iset((await $.mv((await $.mv((await $.wv([$t5, $t6], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql")), [11], ""); if ($t7 !== undefined) { await $.mset((await $.mv((await $.wv([$t5, $t6], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql", $t7); } }
      } else {
        { const $t8 = await $.iset((await $.mv((await $.mv((await $.wv([$t5, $t6], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql")), [11], $.add($.add((await $.idx((await $.mv((await $.mv((await $.wv([$t5, $t6], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql")), [11])), " and  kli_ID = "), "-1")); if ($t8 !== undefined) { await $.mset((await $.mv((await $.wv([$t5, $t6], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql", $t8); } }
      }
    }
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  await $.mcall((await $.v(C, "FormTransaction3")), "ShowModal", []);
  return L1.result;
});
  L0["call_formtransaction4"] = $.fn(async function call_FormTransaction4() {
  const L1 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormTransaction4"))]))))) {
    await $.set(C, "FormTransaction4", (await $.mcall((await $.v(C, "TFormTransaction4")), "Create", [Self])));
  }
  {
    const $t9 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A"));
    await $.stmt($.wcall([$t9], "ClearVariables", [], C));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.stmt((await $.wcall([$t9], "SetVariable", ["CustID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t9], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccSymb_A"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.mcall((await $.wv([$t9], "DataModPCustService", C, false)), "BusProcFilter", [(await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_AccNO_A"))])));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  {
    const $t10 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_B"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t10], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccSymb_B"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_B"])), "AsString"))], C)));
    }
    {
      const $t11 = (await $.mv((await $.wv([$t10], "DataModPCustService", C, false)), "ODS_BusProc"));
      if ($.truthy((await $.or_((await $.or_(($.ne((await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["AccBalCn_B"], C)), "AsString")), "")), async () => ($.ne((await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["AccSymb_B"], C)), "AsString")), "")))), async () => ($.ne((await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["AccCurr_B"], C)), "AsString")), "")))))) {
        { const $t12 = await $.iset((await $.mv((await $.mv((await $.wv([$t10, $t11], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql")), [11], ""); if ($t12 !== undefined) { await $.mset((await $.mv((await $.wv([$t10, $t11], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql", $t12); } }
      } else {
        { const $t13 = await $.iset((await $.mv((await $.mv((await $.wv([$t10, $t11], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql")), [11], $.add($.add((await $.idx((await $.mv((await $.mv((await $.wv([$t10, $t11], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql")), [11])), " and  kli_ID = "), "-1")); if ($t13 !== undefined) { await $.mset((await $.mv((await $.wv([$t10, $t11], "DataModPCustService", C, false)), "ODS_AccNO_B")), "sql", $t13); } }
      }
    }
    await $.stmt($.wcall([$t10], "Open", [], C));
  }
  {
    const $t14 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_C"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t14], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t14], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccBalCn_C"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t14], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccSymb_C"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_C"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t14], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t14], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_BusProc")), "FieldByName", ["AccCurr_C"])), "AsString"))], C)));
    }
    {
      const $t15 = (await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_BusProc"));
      if ($.truthy((await $.or_((await $.or_(($.ne((await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["AccBalCn_C"], C)), "AsString")), "")), async () => ($.ne((await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["AccSymb_C"], C)), "AsString")), "")))), async () => ($.ne((await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["AccCurr_C"], C)), "AsString")), "")))))) {
        { const $t16 = await $.iset((await $.mv((await $.mv((await $.wv([$t14, $t15], "DataModPCustService", C, false)), "ODS_AccNO_C")), "sql")), [11], ""); if ($t16 !== undefined) { await $.mset((await $.mv((await $.wv([$t14, $t15], "DataModPCustService", C, false)), "ODS_AccNO_C")), "sql", $t16); } }
      } else {
        { const $t17 = await $.iset((await $.mv((await $.mv((await $.wv([$t14, $t15], "DataModPCustService", C, false)), "ODS_AccNO_C")), "sql")), [11], $.add($.add((await $.idx((await $.mv((await $.mv((await $.wv([$t14, $t15], "DataModPCustService", C, false)), "ODS_AccNO_C")), "sql")), [11])), " and  kli_ID = "), "-1")); if ($t17 !== undefined) { await $.mset((await $.mv((await $.wv([$t14, $t15], "DataModPCustService", C, false)), "ODS_AccNO_C")), "sql", $t17); } }
      }
    }
    await $.stmt($.wcall([$t14], "Open", [], C));
  }
  await $.mcall((await $.v(C, "FormTransaction4")), "ShowModal", []);
  return L1.result;
});
  { const $t18 = (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProcFORMNUM")), "AsInteger"));
    if ($.eq($t18, 1)) {
      await $.stmt($.callv(L0["call_formtransaction1"], []));
    }
    else if ($.eq($t18, 2)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyat vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
        await $.stmt($.callv(L0["call_formtransaction2"], []));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 3)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyat vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
        await $.stmt($.callv(L0["call_formtransaction3"], []));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 4)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyat vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
        await $.stmt($.callv(L0["call_formtransaction4"], []));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 5)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala kredit vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
        if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CreditFrm"))]))))) {
          await $.set(C, "CreditFrm", (await $.mcall((await $.v(C, "TCreditFrm")), "Create", [Self])));
        }
        await $.mcall((await $.v(C, "CreditFrm")), "ShowModal", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 6)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala depozit vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
        if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DepozitFrm"))]))))) {
          await $.set(C, "DepozitFrm", (await $.mcall((await $.v(C, "TDepozitFrm")), "Create", [Self])));
        }
        await $.mcall((await $.v(C, "DepozitFrm")), "ShowModal", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 11)) {
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
        if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormTransaction11"))]))))) {
          await $.set(C, "FormTransaction11", (await $.mcall((await $.v(C, "TFormTransaction11")), "Create", [Self])));
        }
        await $.mcall((await $.v(C, "FormTransaction11")), "ShowModal", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

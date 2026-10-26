// Generated from UnitbussProc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitbussProc", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "StdCtrls", "XFSCtrls", "ExtCtrls", "DB", "OracleData", "FormTransaction1Lmpl", "FormTransaction2Lmpl", "FormTransaction3Lmpl", "UnitTransaction", "UnitDataBussProc", "Creditİmpl", "DepozLmpl", "OpenAccountImpl", "UnitProc_type"]);
  const C = [U];
  U.defClass("TFormBussProc", "TForm", {"panel_bsproc": {"name": "Panel_BsProc", "type": "TPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "maingrid1": {"name": "MainGrid1", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("cust_elaqe_Transaction", 0, "integer");
    U.var_("FormBussProc", null, "TFormBussProc");
  });
  U.method("TFormBussProc", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["custtype", "is null"], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ids", (await $.wv([$t1], "null", C, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormBussProc", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModule_bussProc", (await $.mcall((await $.v(C, "TDataModule_bussProc")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBussProc", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "xy": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModule_bussProc"));
    const $t3 = (await $.wv([$t2], "Ods_cust_proc", C, false));
    await $.stmt($.wcall([$t2, $t3], "close", [], C));
    await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["custid", (await $.wv([$t2, $t3], "phys_jur_custid", C, false))], C)));
    await $.stmt($.wcall([$t2, $t3], "open", [], C));
  }
  { const $t4 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "Ods_cust_proc")), "FieldByName", ["cust_type"])), "AsInteger"));
    if ($.eq($t4, 0)) {
      {
        const $t5 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc"));
        await $.stmt($.wcall([$t5], "close", [], C));
        await $.stmt((await $.wcall([$t5], "SetVariable", ["custtype", " in 0"], C)));
        await $.stmt($.wcall([$t5], "open", [], C));
      }
    }
    else if ($.eq($t4, 1)) {
      {
        const $t6 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc"));
        await $.stmt($.wcall([$t6], "close", [], C));
        await $.stmt((await $.wcall([$t6], "SetVariable", ["custtype", " in 1"], C)));
        await $.stmt($.wcall([$t6], "open", [], C));
      }
    }
    else if ($.eq($t4, 2)) {
      {
        const $t7 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc"));
        await $.stmt($.wcall([$t7], "close", [], C));
        await $.stmt((await $.wcall([$t7], "SetVariable", ["custtype", " in 2"], C)));
        await $.stmt($.wcall([$t7], "open", [], C));
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc")), "Open", []);
  await $.mset((await $.v(C, "MainGrid1")), "DataSource", (await $.mv((await $.v(C, "DataModule_bussProc")), "DS_BusProc")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBussProc", "MainGrid1DblClick", async function MainGrid1DblClick(Self, p0) {
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
    const $t8 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["CustID", (await $.wcall([$t8], "strtoint", [(await $.wv([$t8], "phys_jur_custid", C, false))], C))], C)));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["Acc_id", (await $.wcall([$t8], "strtoint", [(await $.wv([$t8], "phys_jur_accid", C, false))], C))], C)));
    await $.stmt((await $.wcall([$t8], "showmessage", ["dd"], C)));
    await $.stmt((await $.mcall((await $.wv([$t8], "DataModule_bussProc", C, false)), "BusProcFilter", [(await $.mv((await $.wv([$t8], "DataModule_bussProc", C, false)), "ODS_AccNO_A"))])));
    await $.stmt($.wcall([$t8], "open", [], C));
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
    const $t9 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.stmt((await $.wcall([$t9], "SetVariable", ["CustID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t9], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccSymb_A"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.mcall((await $.wv([$t9], "DataModule_bussProc", C, false)), "BusProcFilter", [(await $.mv((await $.wv([$t9], "DataModule_bussProc", C, false)), "ODS_AccNO_A"))])));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  {
    const $t10 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_B"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t10], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccSymb_B"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t10], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_B"])), "AsString"))], C)));
    }
    await $.stmt($.wcall([$t10], "Open", [], C));
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
    const $t11 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A"));
    await $.stmt($.wcall([$t11], "ClearVariables", [], C));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["CustID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t11], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t11], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t11], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccSymb_A"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_A"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t11], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t11], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_A"])), "AsString"))], C)));
    }
    await $.stmt((await $.mcall((await $.wv([$t11], "DataModule_bussProc", C, false)), "BusProcFilter", [(await $.mv((await $.wv([$t11], "DataModule_bussProc", C, false)), "ODS_AccNO_A"))])));
    await $.stmt($.wcall([$t11], "Open", [], C));
  }
  {
    const $t12 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t12], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t12], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_B"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t12], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccSymb_B"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_B"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t12], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t12], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_B"])), "AsString"))], C)));
    }
    await $.stmt($.wcall([$t12], "Open", [], C));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_C"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t13], "SetVariable", ["BalCn", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t13], "SetVariable", ["BalCn", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccBalCn_C"])), "AsString"))], C)));
    }
    await $.stmt((await $.wcall([$t13], "SetVariable", ["vTipAcc", $.add($.add("'%", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccSymb_C"])), "AsString"))), "%'")], C)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_C"])), "AsString")), ""))) {
      await $.stmt((await $.wcall([$t13], "SetVariable", ["Currency", " not in (-1)"], C)));
    } else {
      await $.stmt((await $.wcall([$t13], "SetVariable", ["Currency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModule_bussProc", C, false)), "ODS_BussProc")), "FieldByName", ["AccCurr_C"])), "AsString"))], C)));
    }
    await $.stmt($.wcall([$t13], "Open", [], C));
  }
  await $.mcall((await $.v(C, "FormTransaction4")), "ShowModal", []);
  return L1.result;
});
  { const $t14 = (await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProcFORMNUM")), "AsInteger"));
    if ($.eq($t14, 1)) {
      await $.stmt($.callv(L0["call_formtransaction1"], []));
    }
    else if ($.eq($t14, 2)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "Ods_cust_proc")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyat vermek olmaz   !"])));
        return L0.result;
      }
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "open", []);
      await $.mset((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FSid")), "AsInteger", 169);
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "Ods_cust_proc")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "Ods_cust_proc")), "RecordCount")), 0)))))) {
        await $.stmt($.callv(L0["call_formtransaction2"], []));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t14, 3)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyat vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "RecordCount")), 0)))))) {
        await $.stmt($.callv(L0["call_formtransaction3"], []));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t14, 4)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyat vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "RecordCount")), 0)))))) {
        await $.stmt($.callv(L0["call_formtransaction4"], []));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t14, 5)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala kredit vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "RecordCount")), 0)))))) {
        if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CreditFrm"))]))))) {
          await $.set(C, "CreditFrm", (await $.mcall((await $.v(C, "TCreditFrm")), "Create", [Self])));
        }
        await $.mcall((await $.v(C, "CreditFrm")), "ShowModal", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seçilməyib !"])));
        return L0.result;
      }
    }
    else if ($.eq($t14, 6)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
        await $.stmt((await $.call(C, "showmessage", ["Nominala depozit vermek olmaz   !"])));
        return L0.result;
      }
      if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "RecordCount")), 0)))))) {
        if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DepozitFrm"))]))))) {
          await $.set(C, "DepozitFrm", (await $.mcall((await $.v(C, "TDepozitFrm")), "Create", [Self])));
        }
        await $.mcall((await $.v(C, "DepozitFrm")), "ShowModal", []);
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

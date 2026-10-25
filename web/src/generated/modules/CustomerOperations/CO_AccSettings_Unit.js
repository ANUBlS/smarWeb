// Generated from CO_AccSettings_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_AccSettings_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "Variants", "CO_datamod_impl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TCO_AccSettings", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "editball": {"name": "EditBall", "type": "TEdit"}, "editcust": {"name": "EditCust", "type": "TEdit"}, "editfil": {"name": "EditFil", "type": "TEdit"}, "editvalute": {"name": "EditValute", "type": "TEdit"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "symboledit": {"name": "symboledit", "type": "TEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TFloatField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TStringField"}, "currencydata": {"name": "CurrencyData", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "branch": {"name": "Branch", "type": "TOracleDataSet"}, "branchdata": {"name": "Branchdata", "type": "TDataSource"}, "balaccdata": {"name": "BalAccData", "type": "TDataSource"}, "balacc": {"name": "BalAcc", "type": "TOracleDataSet"}, "balaccbal_cn": {"name": "BalAccBAL_CN", "type": "TStringField"}, "balaccbalname": {"name": "BalAccBALNAME", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("CO_AccSettings", null, "TCO_AccSettings");
  });
  U.method("TCO_AccSettings", "EditValuteChange", async function EditValuteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupCurr")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupCurr")), "KeyValue", (await $.v(C, "null")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "DBLookupCurrClick", async function DBLookupCurrClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditValute")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurr")), "ListSource")), "DataSet")), "FieldByName", ["VALUTE"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "EditBallChange", async function EditBallChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupBalance1")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupBalance1")), "KeyValue", (await $.v(C, "null")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "DBLookupBalance1Click", async function DBLookupBalance1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditBall")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance1")), "ListSource")), "DataSet")), "FieldByName", ["BAL_CN"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "EditCustChange", async function EditCustChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditCust")), "Text")), "")))) {
    await $.mset((await $.v(C, "DBLookupCust")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupCust")), "KeyValue", (await $.v(C, "null")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "DBLookupCustClick", async function DBLookupCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditCust")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCust")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "EditFilChange", async function EditFilChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", (await $.v(C, "null")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditFil")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox4")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_acc_settings", [(await $.mv((await $.v(C, "EditValute")), "Text")), (await $.mv((await $.v(C, "DBEdit1")), "Text")), (await $.mv((await $.v(C, "EditBall")), "Text")), (await $.mv((await $.v(C, "DBEdit2")), "Text")), (await $.mv((await $.v(C, "EditCust")), "Text")), (await $.mv((await $.v(C, "DBEdit3")), "Text")), L0["ddate"], 0, (await $.mv((await $.v(C, "symboledit")), "Text")), (await $.mv((await $.v(C, "DBEditLimit")), "Text")), (await $.mv((await $.v(C, "EditFil")), "Text")), (await $.mv((await $.v(C, "DBEdit5")), "Text"))]])));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "refresh", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "EditValuteKeyPress", async function EditValuteKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t1 = L0["sender"];
        { const $t2 = (await $.wv([$t1], "Tag", C, false));
          if ($.eq($t2, 1)) {
            await $.stmt((await $.wcall([$t1], "SelectNext", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "DBLookupCurrKeyPress", async function DBLookupCurrKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t3 = L0["sender"];
        { const $t4 = (await $.wv([$t3], "Tag", C, false));
          if ($.eq($t4, 1)) {
            await $.stmt((await $.wcall([$t3], "SelectNext", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t3], "True", C, false)), (await $.wv([$t3], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "EditBallKeyPress", async function EditBallKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t5 = L0["sender"];
        { const $t6 = (await $.wv([$t5], "Tag", C, false));
          if ($.eq($t6, 1)) {
            await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "DBLookupBalance1KeyPress", async function DBLookupBalance1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t7 = L0["sender"];
        { const $t8 = (await $.wv([$t7], "Tag", C, false));
          if ($.eq($t8, 1)) {
            await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false)), (await $.wv([$t7], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "EditCustKeyPress", async function EditCustKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t9 = L0["sender"];
        { const $t10 = (await $.wv([$t9], "Tag", C, false));
          if ($.eq($t10, 1)) {
            await $.stmt((await $.wcall([$t9], "SelectNext", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "DBLookupCustKeyPress", async function DBLookupCustKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t11 = L0["sender"];
        { const $t12 = (await $.wv([$t11], "Tag", C, false));
          if ($.eq($t12, 1)) {
            await $.stmt((await $.wcall([$t11], "SelectNext", [(await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t11], "True", C, false)), (await $.wv([$t11], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "DTPOpenDateKeyPress", async function DTPOpenDateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t13 = L0["sender"];
        { const $t14 = (await $.wv([$t13], "Tag", C, false));
          if ($.eq($t14, 1)) {
            await $.stmt((await $.wcall([$t13], "SelectNext", [(await $.wv([$t13], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "symboleditKeyPress", async function symboleditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t15 = L0["sender"];
        { const $t16 = (await $.wv([$t15], "Tag", C, false));
          if ($.eq($t16, 1)) {
            await $.stmt((await $.wcall([$t15], "SelectNext", [(await $.wv([$t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t15], "True", C, false)), (await $.wv([$t15], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "DBEditLimitKeyPress", async function DBEditLimitKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t17 = L0["sender"];
        { const $t18 = (await $.wv([$t17], "Tag", C, false));
          if ($.eq($t18, 1)) {
            await $.stmt((await $.wcall([$t17], "SelectNext", [(await $.wv([$t17], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t17], "True", C, false)), (await $.wv([$t17], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "EditFilKeyPress", async function EditFilKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t19 = L0["sender"];
        { const $t20 = (await $.wv([$t19], "Tag", C, false));
          if ($.eq($t20, 1)) {
            await $.stmt((await $.wcall([$t19], "SelectNext", [(await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19], "True", C, false)), (await $.wv([$t19], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "DBLookupComboBox4KeyPress", async function DBLookupComboBox4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t21 = L0["sender"];
        { const $t22 = (await $.wv([$t21], "Tag", C, false));
          if ($.eq($t22, 1)) {
            await $.stmt((await $.wcall([$t21], "SelectNext", [(await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t21], "True", C, false)), (await $.wv([$t21], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "Button1KeyPress", async function Button1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t23 = L0["sender"];
        { const $t24 = (await $.wv([$t23], "Tag", C, false));
          if ($.eq($t24, 1)) {
            await $.stmt((await $.wcall([$t23], "SelectNext", [(await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t23], "True", C, false)), (await $.wv([$t23], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_AccSettings", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit1")), "Text", "");
  await $.mset((await $.v(C, "DBEdit2")), "Text", "");
  await $.mset((await $.v(C, "DBEdit3")), "Text", "");
  await $.mset((await $.v(C, "DBEdit5")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "Open", []);
  await $.mset((await $.v(C, "DTPOpenDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "EditValute")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["val_code"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["val_name"])), "asstring")));
  await $.mset((await $.v(C, "EditBall")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["bal_cn1"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["bal_name"])), "asstring")));
  await $.mset((await $.v(C, "EditCust")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["cust_id"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["cust_name"])), "asstring")));
  await $.mset((await $.v(C, "symboledit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["acc_symbol"])), "asstring")));
  await $.mset((await $.v(C, "DBEditLimit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["limit"])), "asstring")));
  await $.mset((await $.v(C, "EditFil")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["branch_id"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "AccSettings")), "FieldByName", ["branch_name"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_AccSettings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

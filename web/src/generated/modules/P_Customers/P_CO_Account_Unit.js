// Generated from P_CO_Account_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_Account_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Db", "OracleData", "NLSLocalizer", "StdCtrls", "SearchEdit", "Mask", "DBCtrls", "ComCtrls", "Buttons", "ExtCtrls", "ActnList", "Variants", "Oracle", "sboapiDataModuleImpl", "P_Datamod_Unit", "P_AccFlags", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TP_CO_Account_Form", "TForm", {"currency": {"name": "Currency", "type": "TOracleDataSet"}, "currencydata": {"name": "CurrencyData", "type": "TDataSource"}, "balacc": {"name": "BalAcc", "type": "TOracleDataSet"}, "balaccbal_cn": {"name": "BalAccBAL_CN", "type": "TWideStringField"}, "balaccbalname": {"name": "BalAccBALNAME", "type": "TWideStringField"}, "balaccdata": {"name": "BalAccData", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "branchesdata": {"name": "BranchesData", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "buyerid": {"name": "buyerid", "type": "TEdit"}, "accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbtext8": {"name": "DBText8", "type": "TDBText"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "editball": {"name": "EditBall", "type": "TSearchEdit"}, "editacc": {"name": "EditAcc", "type": "TEdit"}, "editcust": {"name": "EditCust", "type": "TEdit"}, "editfil": {"name": "EditFil", "type": "TEdit"}, "editvalute": {"name": "EditValute", "type": "TSearchEdit"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "editaccname": {"name": "EditAccName", "type": "TEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "asymboledit_": {"name": "asymboledit_", "type": "TEdit"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "dbedit6", "type": "TEdit"}, "dbedit7": {"name": "dbedit7", "type": "TEdit"}, "accountflagsgb": {"name": "AccountFlagsGB", "type": "TGroupBox"}, "button3": {"name": "Button3", "type": "TButton"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TFloatField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TWideStringField"}, "dbrepsymb": {"name": "dbrepsymb", "type": "TDBLookupComboBox"}, "symboledit_": {"name": "symboledit_", "type": "TSearchEdit"}, "actionlistforhotkey": {"name": "ActionListForHotKey", "type": "TActionList"}, "accountavtocreate": {"name": "AccountAvtoCreate", "type": "TAction"}, "ballaccdata2": {"name": "ballaccdata2", "type": "TDataSource"}, "balacc2": {"name": "balacc2", "type": "TOracleDataSet"}, "label11": {"name": "Label11", "type": "TLabel"}, "editnotecode": {"name": "EditNoteCode", "type": "TEdit"}, "balacc2bal_cn": {"name": "balacc2BAL_CN", "type": "TWideStringField"}, "balacc2balname": {"name": "balacc2BALNAME", "type": "TWideStringField"}, "bal_cn2": {"name": "BAL_CN2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "editball2": {"name": "editball2", "type": "TSearchEdit"}, "dblookupbalance2": {"name": "DBLookupBalance2", "type": "TDBLookupComboBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "pg_pcustservice": {"name": "PG_PCustService", "type": "TOraclePackage"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "tipacc": {"name": "TipAcc", "type": "TEdit"}, "custid": {"name": "custid", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("P_CO_Account_Form", null, "TP_CO_Account_Form");
  });
  U.method("TP_CO_Account_Form", "DBLookupCustClick", async function DBLookupCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditCust")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCust")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "bal_cnChange", async function bal_cnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.v(C, "BalAcc")), "FieldByName", ["bal_cn"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "DataSet")), "FieldByName", ["bal_cn"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "EditCustChange", async function EditCustChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditCust")), "Text")), "")))) {
    await $.mset((await $.v(C, "DBLookupCust")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "EditAccName")), "Text", "");
    await $.mset((await $.v(C, "DBLookupCust")), "KeyValue", (await $.v(C, "null")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "BrancheditChange", async function BrancheditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.v(C, "Branches")), "FieldByName", ["id"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "DataSet")), "FieldByName", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "DBEditAccNoKeyPress", async function DBEditAccNoKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "val_codeKeyPress", async function val_codeKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "DBLookupCurrKeyPress", async function DBLookupCurrKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "bal_cnKeyPress", async function bal_cnKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "DBLookupBalance1KeyPress", async function DBLookupBalance1KeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "DBLookupBalance2Click", async function DBLookupBalance2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "editball2")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance2")), "ListSource")), "DataSet")), "FieldByName", ["BAL_CN"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "DBLookupBalance2KeyPress", async function DBLookupBalance2KeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "EditCustKeyPress", async function EditCustKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "DBLookupCustKeyPress", async function DBLookupCustKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "DTPOpenDateKeyPress", async function DTPOpenDateKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "TweditKeyPress", async function TweditKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "SymbolEditKeyPress", async function SymbolEditKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "LimitEditKeyPress", async function LimitEditKeyPress(Self, p0, p1) {
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
  U.method("TP_CO_Account_Form", "BrancheditKeyPress", async function BrancheditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t25 = L0["sender"];
        { const $t26 = (await $.wv([$t25], "Tag", C, false));
          if ($.eq($t26, 1)) {
            await $.stmt((await $.wcall([$t25], "SelectNext", [(await $.wv([$t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t25], "True", C, false)), (await $.wv([$t25], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "DBLookupComboBox4KeyPress", async function DBLookupComboBox4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t27 = L0["sender"];
        { const $t28 = (await $.wv([$t27], "Tag", C, false));
          if ($.eq($t28, 1)) {
            await $.stmt((await $.wcall([$t27], "SelectNext", [(await $.wv([$t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t27], "True", C, false)), (await $.wv([$t27], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "DBEditAccNameKeyPress", async function DBEditAccNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t29 = L0["sender"];
        { const $t30 = (await $.wv([$t29], "Tag", C, false));
          if ($.eq($t30, 1)) {
            await $.stmt((await $.wcall([$t29], "SelectNext", [(await $.wv([$t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t29], "True", C, false)), (await $.wv([$t29], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t31 = L0["sender"];
        { const $t32 = (await $.wv([$t31], "Tag", C, false));
          if ($.eq($t32, 1)) {
            await $.stmt((await $.wcall([$t31], "SelectNext", [(await $.wv([$t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t31], "True", C, false)), (await $.wv([$t31], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "EditValuteChange", async function EditValuteChange(Self, p0) {
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
  U.method("TP_CO_Account_Form", "DBLookupCurrClick", async function DBLookupCurrClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditValute")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurr")), "ListSource")), "DataSet")), "FieldByName", ["VALUTE"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "EditBallChange", async function EditBallChange(Self, p0) {
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
  U.method("TP_CO_Account_Form", "DBLookupBalance1Click", async function DBLookupBalance1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditBall")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance1")), "ListSource")), "DataSet")), "FieldByName", ["BAL_CN"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "EditFilChange", async function EditFilChange(Self, p0) {
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
  U.method("TP_CO_Account_Form", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditFil")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox4")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "EditAccKeyPress", async function EditAccKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t33 = L0["sender"];
        { const $t34 = (await $.wv([$t33], "Tag", C, false));
          if ($.eq($t34, 1)) {
            await $.stmt((await $.wcall([$t33], "SelectNext", [(await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t33], "True", C, false)), (await $.wv([$t33], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "editball2Change", async function editball2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupBalance2")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupBalance2")), "KeyValue", (await $.v(C, "null")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "editball2KeyPress", async function editball2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t35 = L0["sender"];
        { const $t36 = (await $.wv([$t35], "Tag", C, false));
          if ($.eq($t36, 1)) {
            await $.stmt((await $.wcall([$t35], "SelectNext", [(await $.wv([$t35], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "EditValuteKeyPress", async function EditValuteKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t37 = L0["sender"];
        { const $t38 = (await $.wv([$t37], "Tag", C, false));
          if ($.eq($t38, 1)) {
            await $.stmt((await $.wcall([$t37], "SelectNext", [(await $.wv([$t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t37], "True", C, false)), (await $.wv([$t37], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "EditBallKeyPress", async function EditBallKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t39 = L0["sender"];
        { const $t40 = (await $.wv([$t39], "Tag", C, false));
          if ($.eq($t40, 1)) {
            await $.stmt((await $.wcall([$t39], "SelectNext", [(await $.wv([$t39], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t39], "True", C, false)), (await $.wv([$t39], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "EditFilKeyPress", async function EditFilKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t41 = L0["sender"];
        { const $t42 = (await $.wv([$t41], "Tag", C, false));
          if ($.eq($t42, 1)) {
            await $.stmt((await $.wcall([$t41], "SelectNext", [(await $.wv([$t41], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t41], "True", C, false)), (await $.wv([$t41], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Account_Form", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "CheckParams", [L0["sender"]])))) {
    await $.stmt((await $.call(C, "showmessage", ["Melumat tam deyil"])));
  } else {
    L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "PHYS_FS_CUSTOMERS")), "CallIntegerFunction", ["open_Account", [(await $.mv((await $.v(C, "EditAcc")), "Text")), (await $.mv((await $.v(C, "EditValute")), "Text")), (await $.mv((await $.v(C, "EditBall")), "Text")), (await $.mv((await $.v(C, "EditCust")), "Text")), L0["ddate"], (await $.mv((await $.v(C, "DBEditLimit")), "Text")), (await $.mv((await $.v(C, "dbrepsymb")), "KeyValue")), (await $.mv((await $.v(C, "EditFil")), "Text")), (await $.mv((await $.v(C, "TipAcc")), "Text")), (await $.mv((await $.v(C, "EditAccName")), "Text")), (await $.mv((await $.v(C, "custid")), "Text")), (await $.mv((await $.v(C, "editball2")), "Text"))]])));
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "Open", []);
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditValute")), "Text", "0");
  await $.mset((await $.v(C, "DBEdit1")), "Text", "");
  await $.mset((await $.v(C, "DBEdit2")), "Text", "");
  await $.mset((await $.v(C, "DBEdit3")), "Text", "");
  await $.mset((await $.v(C, "DBEdit4")), "Text", "");
  await $.mset((await $.v(C, "DBEdit5")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "Open", []);
  await $.mset((await $.v(C, "DTPOpenDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "EditValute")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["val_code"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["val_name"])), "asstring")));
  await $.mset((await $.v(C, "EditBall")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["bal_cn1"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["bal_name"])), "asstring")));
  await $.mset((await $.v(C, "EditCust")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["id"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["cust_name"])), "asstring")));
  await $.mset((await $.v(C, "DBEditLimit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["limit"])), "asstring")));
  await $.mset((await $.v(C, "EditFil")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["branch_id"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccSettings")), "FieldByName", ["branch_name"])), "asstring")));
  await $.mset((await $.v(C, "EditAccName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["cust_name"])), "asstring")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dbrepsymb")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "dbrepsymb")), "KeyValue", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "dbrepsymb")), "ListSource")), "DataSet")), "Fields")), [0])), "AsVariant")));
  await $.mset((await $.v(C, "symboledit_")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "dbrepsymb")), "ListSource")), "DataSet")), "Fields")), [1])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBText8")), "Caption", "");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TP_CO_Account_Form", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tt"] = (await $.mcall((await $.v(C, "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["P_Customers", "P_CO_Account_Form", "Bal_CN2"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Bal_CN2")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Bal_CN2")), "Visible", true);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bal_CN2")), "Visible")), true))) {
    await $.mset((await $.v(C, "P_CO_Account_Form")), "AutoSize", true);
    await $.mset((await $.v(C, "P_CO_Account_Form")), "ClientHeight", 380);
  } else {
    await $.mset((await $.v(C, "P_CO_Account_Form")), "AutoSize", false);
    await $.mset((await $.v(C, "P_CO_Account_Form")), "ClientHeight", 330);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccFlags", (await $.mcall((await $.v(C, "TAccFlags")), "Create", [Self])));
  try {
    {
      const $t43 = (await $.wobj(C, "AccFlags"));
      const $t44 = (await $.mv((await $.wv([$t43], "P_DataModule", C, false)), "AccFlag"));
      if ($.truthy(($.eq((await $.wv([$t43, $t44], "ShowModal", C, false)), (await $.wv([$t43, $t44], "mrOk", C, false)))))) {
        await $.mset((await $.wv([$t43, $t44], "TipAcc", C, false)), "Text", (await $.wv([$t43, $t44], "FlagMap", C, false)));
      }
    }
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "AccFlags"))])))) {
      await $.mcall((await $.v(C, "AccFlags")), "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["c_name"] = "GenerateAccountNumber";
  if ($.truthy((await $.call(C, "CheckParams", [L0["sender"]])))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat tam deyil!"])));
  } else {
    {
      const $t45 = (await $.wobj(C, "P_DataModule"));
      const $t46 = (await $.wv([$t45], "SBOP", C, false));
      await $.mset((await $.wv([$t45, $t46], "EditAcc", C, false)), "Text", (await $.mcall((await $.wv([$t45, $t46], "SBOP", C, false)), "CallStringFunction", [(await $.wv([$t45, $t46], "c_name", { get: async () => L0["c_name"], set: async (v) => { L0["c_name"] = v; }, local: true }, false)), ["BalCn", (await $.mv((await $.wv([$t45, $t46], "DBLookupBalance1", C, false)), "KeyValue")), "CurrencyID", (await $.mv((await $.wv([$t45, $t46], "DBLookupCurr", C, false)), "KeyValue")), "CustomerID", (await $.mv((await $.wv([$t45, $t46], "DBLookupCust", C, false)), "KeyValue")), "BranchID", (await $.mv((await $.wv([$t45, $t46], "DBLookupComboBox4", C, false)), "KeyValue")), "AnalitKod", (await $.mv((await $.wv([$t45, $t46], "dbrepsymb", C, false)), "KeyValue")), "BalCn2", (await $.mv((await $.wv([$t45, $t46], "DBLookupBalance2", C, false)), "KeyValue")), "NoteCode", (await $.mv((await $.wv([$t45, $t46], "EditNoteCode", C, false)), "Text"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "CheckParams", async function CheckParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: null, "s": false};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bal_CN2")), "Visible")), true))) {
    L0["s"] = ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "editball2")), "Text"))])), ""));
  } else {
    L0["s"] = false;
  }
  L0["result"] = (await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "symboledit_")), "Text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditBall")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditCust")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFil")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditValute")), "Text"))])), ""))));
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Name")), "ButtonCommit"))) {
    L0["result"] = (await $.or_(L0["result"], async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditAcc")), "Text"))])), ""))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "function", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "symboledit_Change", async function symboledit_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "dbrepsymb")), "KeyValue", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "dbrepsymb")), "ListSource")), "DataSet")), "Fields")), [0])), "AsVariant")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "dbrepsymbCloseUp", async function dbrepsymbCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "symboledit_")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "Fields")), [0])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Account_Form", "AccountAvtoCreateExecute", async function AccountAvtoCreateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SpeedButton1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

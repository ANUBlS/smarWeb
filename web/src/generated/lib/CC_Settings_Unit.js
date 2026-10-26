// Generated from CC_Settings_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Settings_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Mask", "DBCtrls", "ComCtrls", "NLSLocalizer", "Variants", "Unitdata"]);
  const C = [U];
  U.defClass("TCC_Settings", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "editball": {"name": "EditBall", "type": "TEdit"}, "editacc": {"name": "EditAcc", "type": "TEdit"}, "editcust": {"name": "EditCust", "type": "TEdit"}, "editfil": {"name": "EditFil", "type": "TEdit"}, "editvalute": {"name": "EditValute", "type": "TEdit"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "editaccname": {"name": "EditAccName", "type": "TEdit"}, "symboledit": {"name": "symboledit", "type": "TEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("CC_Settings", null, "TCC_Settings");
  });
  U.method("TCC_Settings", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_Settings", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_Settings", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesabın məlumatları";
  await $.inherited(Self, "TCC_Settings", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_Settings", "DBLookupCurrClick", async function DBLookupCurrClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditValute")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurr")), "ListSource")), "DataSet")), "FieldByName", ["VALUTE"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Settings", "DBLookupBalance1Click", async function DBLookupBalance1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditBall")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance1")), "ListSource")), "DataSet")), "FieldByName", ["BAL_CN"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Settings", "DBLookupCustClick", async function DBLookupCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditCust")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCust")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Settings", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditFil")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox4")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInTeger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Settings", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Dbedit1")), "Text", "");
  await $.mset((await $.v(C, "Dbedit2")), "Text", "");
  await $.mset((await $.v(C, "Dbedit3")), "Text", "");
  await $.mset((await $.v(C, "Dbedit5")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_Settings")), "Open", []);
  await $.mset((await $.v(C, "DTPOpenDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "Editvalute")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["val_code"])), "asstring")));
  await $.mset((await $.v(C, "dbedit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["val_name"])), "asstring")));
  await $.mset((await $.v(C, "Editball")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["bal_cn1"])), "asstring")));
  await $.mset((await $.v(C, "dbedit2")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["bal_name"])), "asstring")));
  await $.mset((await $.v(C, "editcust")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["cust_id"])), "asstring")));
  await $.mset((await $.v(C, "dbedit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["cust_name"])), "asstring")));
  await $.mset((await $.v(C, "symboledit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["acc_symbol"])), "asstring")));
  await $.mset((await $.v(C, "DBEditLimit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["limit"])), "asstring")));
  await $.mset((await $.v(C, "Editfil")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["branch_id"])), "asstring")));
  await $.mset((await $.v(C, "dbedit5")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Datamod_Buyers")), "CC_Settings")), "fieldbyname", ["branch_name"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Settings", "DBLookupCurrKeyPress", async function DBLookupCurrKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t2 = L0["sender"];
        { const $t3 = (await $.wv([$t2], "Tag", C, false));
          if ($.eq($t3, 1)) {
            await $.stmt((await $.wcall([$t2], "SelectNext", [(await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t2], "True", C, false)), (await $.wv([$t2], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Settings", "val_codeKeyPress", async function val_codeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SelectNext", [L0["sender"], true, true])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Settings", "EditValuteChange", async function EditValuteChange(Self, p0) {
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
  U.method("TCC_Settings", "EditValuteKeyPress", async function EditValuteKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t4 = L0["sender"];
        { const $t5 = (await $.wv([$t4], "Tag", C, false));
          if ($.eq($t5, 1)) {
            await $.stmt((await $.wcall([$t4], "SelectNext", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t4], "True", C, false)), (await $.wv([$t4], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCC_Settings", "EditBallChange", async function EditBallChange(Self, p0) {
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
  U.method("TCC_Settings", "EditCustChange", async function EditCustChange(Self, p0) {
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
  U.method("TCC_Settings", "EditFilChange", async function EditFilChange(Self, p0) {
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
  U.method("TCC_Settings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_GENERAL")), "CallProcedure", ["ins_cc_repairing", [(await $.mv((await $.v(C, "Editvalute")), "text")), (await $.mv((await $.v(C, "dbedit1")), "text")), (await $.mv((await $.v(C, "Editball")), "text")), (await $.mv((await $.v(C, "dbedit2")), "text")), (await $.mv((await $.v(C, "Editcust")), "text")), (await $.mv((await $.v(C, "dbedit3")), "text")), L0["ddate"], 0, (await $.mv((await $.v(C, "SymbolEdit")), "text")), (await $.mv((await $.v(C, "DBEditLimit")), "text")), (await $.mv((await $.v(C, "Editfil")), "text")), (await $.mv((await $.v(C, "dbedit5")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_Settings")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "CC_Settings")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

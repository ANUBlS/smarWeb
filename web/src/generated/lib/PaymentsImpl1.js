// Generated from PaymentsImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentsImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "nlsDialogs", "ActiveX", "AxCtrls", "Payments_TLB", "StdVcl", "Db", "OracleData", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "Buttons", "DBCtrls", "ComCtrls", "Menus", "Oracle", "Dialogs", "ImgList", "Mask", "Variants", "CheckLst", "CMExcelExport", "ComObj", "ComServ", "sboapiDataModuleImpl", "UnitPaymentsProperties", "Unit1", "Unit4", "SBTranslateProc", "ShellApi"]);
  const C = [U];
  U.defClass("TPaymentsForm", "TActiveForm", {"p": {"name": "p", "type": "TPopupMenu"}, "timer": {"name": "Timer", "type": "TTimer"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "print1": {"name": "Print1", "type": "TMenuItem"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "btnrefresh": {"name": "BtnRefresh", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "filtergroup": {"name": "filtergroup", "type": "TGroupBox"}, "filterrefreshbutton": {"name": "filterrefreshbutton", "type": "TSpeedButton"}, "label5": {"name": "Label5", "type": "TLabel"}, "dtpbegin": {"name": "DTPBEGIN", "type": "TDateTimePicker"}, "dtpend": {"name": "DTPEND", "type": "TDateTimePicker"}, "checkxoks": {"name": "CHECKXOKS", "type": "TCheckBox"}, "checkazips": {"name": "CHECKAZIPS", "type": "TCheckBox"}, "checkbd": {"name": "CHECKBD", "type": "TCheckBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgridpayments": {"name": "DBGridPayments", "type": "TDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "searchid": {"name": "searchid", "type": "TEdit"}, "searchgonderen_name": {"name": "searchGONDEREN_NAME", "type": "TEdit"}, "searchgonderen_acc": {"name": "searchGONDEREN_ACC", "type": "TEdit"}, "searchalan_name": {"name": "searchALAN_NAME", "type": "TEdit"}, "searchalan_acc": {"name": "searchALAN_ACC", "type": "TEdit"}, "searchamount": {"name": "searchAMOUNT", "type": "TEdit"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "allcheck": {"name": "allcheck", "type": "TCheckBox"}, "a1": {"name": "A1", "type": "TMenuItem"}, "p1": {"name": "P1", "type": "TMenuItem"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkplan": {"name": "checkplan", "type": "TCheckBox"}, "checkcommit": {"name": "Checkcommit", "type": "TCheckBox"}, "checkdel": {"name": "Checkdel", "type": "TCheckBox"}, "fevents": {"name": "FEvents", "type": "IPaymentsFormEvents"}}, {});
  U.init(async () => {
    U.const("BooleanPrefix", " AND ");
    U.const("n", 3);
    U.var_("ss", $.sarr(), "mas");
  });
  U.method("TPaymentsForm", "A1Click", async function A1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "open", []);
  L0["a"] = (await $.call(C, "PChar", [$.add($.add($.add($.add("\\\\10.0.11.90\\adocs\\", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "FieldByName", ["cli_id"])), "AsString"))), "-"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "FieldByName", ["id"])), "AsString"))), ".adoc")]));
  await $.stmt((await $.call(C, "ShellExecute", [(await $.v(C, "Handle")), "open", (await $.call(C, "PChar", [L0["a"]])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "t_chekd1": 0, "t_chekd2": 0, "t_chekd3": 0, "t_chekd4": 0, "t_chekd5": 0, "t_chekd6": 0, "t_chekd7": 0, "t_chekd8": 0, "t_chekd9": 0, "t_chekd10": 0, "t_chekd11": 0, "dat1": '', "dat2": '', "creditfilialf": '', "operatorf": '', "operationtypef": '', "operationstatusf": '', "filterstr": '', "datef": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["currencyfilter"] = "((DebitCurrencyID<>%d)AND(CreditCurrencyID<>%d))";
  L0["debetfilialfilter"] = "(DebitBranch=%d)";
  L0["creditfilialfilter"] = "(CreditBranch=%d)";
  L0["operatorfilter"] = "(OperatorID=%d)";
  L0["operationtypefilter"] = "(OperationCode<>%d)";
  L0["operationtype"] = "((transaction_type=%d)OR(transaction_type=%d)OR(transaction_type=%d) OR (transaction_type=%d)OR (transaction_type=%d)OR (transaction_type=%d)OR(transaction_type=%d)OR (transaction_type=%d))";
  L0["operationstatus"] = "((status =%d)or(status =%d)or(status =%d))";
  L0["checkfiltred"] = $.fn(async function CheckFiltred(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["addboolprefix"] = $.fn(async function AddBoolPrefix(p0) {
  const L1 = {"willadd": $.copyArg(p0), result: ''};
  await $.fixArgs(L1, ["willadd"]);
  L1["result"] = " ";
  if ($.truthy(L1["willadd"])) {
    L1["result"] = (await $.v(C, "BooleanPrefix"));
  }
  return L1.result;
});
  L0["generatefilter"] = $.fn(async function GenerateFilter(p0, p1, p2) {
  const L1 = {"checklistbox": $.copyArg(p0), "filterconst": $.copyArg(p1), "icount": $.copyArg(p2), result: '', "position": 0, "i": 0, "filter": ''};
  await $.fixArgs(L1, ["checklistbox", "filterconst", "icount"]);
  L1["result"] = "";
  {
    const $t1 = L1["checklistbox"];
    const $t2 = (await $.wv([$t1], "Items", C, false));
    await $.wset([$t1, $t2], "Position", 0, { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
    if ($.truthy($.not(($.gt((await $.wv([$t1, $t2], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy($.not((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [0]))))) {
      if ($.truthy($.eq((await $.wv([$t1, $t2], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t1, $t2], "Filter", (await $.wcall([$t1, $t2], "Format", [(await $.wv([$t1, $t2], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t1, $t2], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      } else {
        await $.wset([$t1, $t2], "Filter", (await $.wcall([$t1, $t2], "Format", [(await $.wv([$t1, $t2], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t1, $t2], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "Tag", C, false))], C))], C)), "Strings")), [0]))], C)), (await $.wcall([$t1, $t2], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      }
    } else {
      await $.wset([$t1, $t2], "Filter", "", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
    }
    { const $t3 = $.sub((await $.mv((await $.wv([$t1, $t2], "Items", C, false)), "Count")), 1);
      await $.wset([$t1, $t2], "i", 1, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy($.not((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))))) {
          if ($.truthy($.eq((await $.wv([$t1, $t2], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
            await $.wset([$t1, $t2], "Filter", $.add($.add((await $.wv([$t1, $t2], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t1, $t2], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t1, $t2], "Format", [(await $.wv([$t1, $t2], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t1, $t2], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          } else {
            await $.wset([$t1, $t2], "Filter", $.add($.add((await $.wv([$t1, $t2], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t1, $t2], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t1, $t2], "Format", [(await $.wv([$t1, $t2], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t1, $t2], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t1, $t2], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.wv([$t1, $t2], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          }
          await $.wset([$t1, $t2], "Position", (await $.wv([$t1, $t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  L1["result"] = L1["filter"];
  return L1.result;
});
  L0["filterstr"] = "";
  L0["t_chekd1"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CheckBox6")), "Checked"))])), (await $.mv((await $.v(C, "CheckBox6")), "Tag")));
  L0["t_chekd2"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CHECKAZIPS")), "Checked"))])), (await $.mv((await $.v(C, "CHECKAZIPS")), "Tag")));
  L0["t_chekd3"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CHECKXOKS")), "Checked"))])), (await $.mv((await $.v(C, "CHECKXOKS")), "Tag")));
  L0["t_chekd4"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CHECKBD")), "Checked"))])), (await $.mv((await $.v(C, "CHECKBD")), "Tag")));
  L0["t_chekd5"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CheckBox4")), "Checked"))])), (await $.mv((await $.v(C, "CheckBox4")), "Tag")));
  L0["t_chekd6"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CheckBox5")), "Checked"))])), (await $.mv((await $.v(C, "CheckBox5")), "Tag")));
  L0["t_chekd7"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CheckBox7")), "Checked"))])), (await $.mv((await $.v(C, "CheckBox7")), "Tag")));
  L0["t_chekd8"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CheckBox8")), "Checked"))])), (await $.mv((await $.v(C, "CheckBox8")), "Tag")));
  L0["t_chekd9"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "Checkplan")), "Checked"))])), (await $.mv((await $.v(C, "Checkplan")), "Tag")));
  L0["t_chekd10"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "Checkcommit")), "Checked"))])), (await $.mv((await $.v(C, "Checkcommit")), "Tag")));
  L0["t_chekd11"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "Checkdel")), "Checked"))])), (await $.mv((await $.v(C, "Checkdel")), "Tag")));
  L0["operationtypef"] = (await $.callv(L0["checkfiltred"], [true, L0["operationtype"], [L0["t_chekd1"], L0["t_chekd2"], L0["t_chekd3"], L0["t_chekd4"], L0["t_chekd5"], L0["t_chekd6"], L0["t_chekd7"], L0["t_chekd8"]]]));
  L0["operationstatusf"] = (await $.callv(L0["checkfiltred"], [true, L0["operationstatus"], [L0["t_chekd9"], L0["t_chekd10"], L0["t_chekd11"]]]));
  if ($.truthy($.ne(L0["operationstatusf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operationstatusf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["operationstatusf"]);
    }
  }
  if ($.truthy($.ne(L0["operationtypef"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operationtypef"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["operationtypef"]);
    }
  }
  {
    const $t5 = (await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet"));
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "False", C, false)), C);
    await $.wset([$t5], "Filter", (await $.wv([$t5], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t5], "Filtered", (await $.wv([$t5], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "NOTHINGCHECK", async function NOTHINGCHECK(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"first": $.copyArg(p0), "second": $.copyArg(p1), "third": $.copyArg(p2), "typeof": $.copyArg(p3), result: undefined, "i": 0};
  await $.fixArgs(L0, ["first", "second", "third", "typeof"]);
  if ($.truthy((await $.and_((await $.and_($.not((L0["first"])), async () => $.not((L0["second"])))), async () => $.not((L0["third"])))))) {
    { const $t6 = L0["typeof"];
      if ($.eq($t6, 1)) {
        { const $t7 = 60;
          L0["i"] = 37;
          let $t8 = true;
          for (;;) {
            if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
            $t8 = false;
            if (!($.ord(L0["i"]) <= $.ord($t7))) break;
            { const $t9 = await $.iset((await $.mv((await $.mv((await $.v(C, "Dm")), "odspayments")), "SQL")), [L0["i"]], ""); if ($t9 !== undefined) { await $.mset((await $.mv((await $.v(C, "Dm")), "odspayments")), "SQL", $t9); } }
            await $.tick();
          }
        }
      }
      else if ($.eq($t6, 2)) {
        { const $t10 = 35;
          L0["i"] = 30;
          let $t11 = true;
          for (;;) {
            if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
            $t11 = false;
            if (!($.ord(L0["i"]) <= $.ord($t10))) break;
            { const $t12 = await $.iset((await $.mv((await $.mv((await $.v(C, "Dm")), "odspayments")), "SQL")), [L0["i"]], ""); if ($t12 !== undefined) { await $.mset((await $.mv((await $.v(C, "Dm")), "odspayments")), "SQL", $t12); } }
            await $.tick();
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["first", "second", "third", "typeof"], "kind": "procedure", "ptypes": ["boolean", "boolean", "boolean", "byte"]});
  U.method("TPaymentsForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPaymentsForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPaymentsForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPaymentsForm", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPaymentsForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentsForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPaymentsForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CHECKXOKSClick", async function CHECKXOKSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "dm")), "ODSPayments"));
    { const $t14 = await $.iset((await $.wv([$t13], "sql", C, false)), [39], $.add($.add("where filial = '", (await $.wcall([$t13], "inttostr", [(await $.mv((await $.wv([$t13], "DBLookupComboBox1", C, false)), "KeyValue"))], C))), "'")); if ($t14 !== undefined) { await $.wset([$t13], "sql", $t14, C); } }
  }
  await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentsForm", "P1Click", async function P1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "open", []);
  L0["a"] = (await $.call(C, "PChar", [$.add($.add($.add($.add("\\\\10.0.11.90\\adocs\\", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "FieldByName", ["cli_id"])), "AsString"))), "-"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "ods_rep")), "FieldByName", ["id"])), "AsString"))), ".pdf")]));
  await $.stmt((await $.call(C, "ShellExecute", [(await $.v(C, "Handle")), "open", (await $.call(C, "PChar", [L0["a"]])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPaymentsForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPaymentsForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPaymentsForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPaymentsForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPaymentsForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPaymentsForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPaymentsForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPaymentsForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentsForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat1": 0, "dat2": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dm", (await $.mcall((await $.v(C, "tdm")), "Create", [Self])));
  await $.mset((await $.v(C, "dtpbegin")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "Dat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "dtpend")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "Dat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  {
    const $t15 = (await $.v(C, "dm"));
    await $.mcall((await $.wv([$t15], "odspayments", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t15], "odspayments", C, false)), "setvariable", ["sort", "1"])));
    await $.stmt((await $.mcall((await $.wv([$t15], "odspayments", C, false)), "setvariable", ["DAT1", (await $.wcall([$t15], "trunc", [(await $.mv((await $.wv([$t15], "dtpbegin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "odspayments", C, false)), "setvariable", ["DAT2", (await $.wcall([$t15], "trunc", [(await $.mv((await $.wv([$t15], "dtpend", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t15], "odspayments", C, false)), "open", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "BtnRefreshClick", async function BtnRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "dm"));
    await $.mcall((await $.wv([$t16], "odspayments", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t16], "odspayments", C, false)), "setvariable", ["sort", "1"])));
    await $.stmt((await $.mcall((await $.wv([$t16], "odspayments", C, false)), "setvariable", ["DAT1", (await $.wcall([$t16], "trunc", [(await $.mv((await $.wv([$t16], "dtpbegin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t16], "odspayments", C, false)), "setvariable", ["DAT2", (await $.wcall([$t16], "trunc", [(await $.mv((await $.wv([$t16], "dtpend", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t16], "odspayments", C, false)), "open", []);
    await $.mset((await $.wv([$t16], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t16], "odspayments", C, false)), "SQL")), "Text")));
  }
  await $.mcall((await $.v(C, "SpeedButton3")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DBGridPaymentsDblClick", async function DBGridPaymentsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "P1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DBGridPaymentsTitleClick", async function DBGridPaymentsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    L0["titlename"] = "STATUS";
  } else {
    L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  }
  {
    const $t17 = (await $.mv((await $.v(C, "dm")), "odspayments"));
    await $.mset((await $.wv([$t17], "Screen", C, false)), "Cursor", (await $.wv([$t17], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t17], "SetVariable", ["sort", (await $.wv([$t17], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.stmt($.wcall([$t17], "refresh", [], C));
    await $.mset((await $.wv([$t17], "Screen", C, false)), "Cursor", (await $.wv([$t17], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TPaymentsForm", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TPaymentsForm", "capClick", async function capClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "rep"))]))))) {
    await $.set(C, "rep", (await $.mcall((await $.v(C, "trep")), "Create", [Self])));
  }
  {
    const $t18 = (await $.v(C, "rep"));
  }
  await $.mcall((await $.v(C, "rep")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "dm")), "dat")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "dm")), "dat")), "Open", []);
  }
  await $.mset((await $.v(C, "filtergroup")), "Visible", $.not((await $.mv((await $.v(C, "filtergroup")), "Visible"))));
  if ($.truthy((await $.mv((await $.v(C, "filtergroup")), "Visible")))) {
    await $.mset((await $.v(C, "dtpbegin")), "Date", (await $.call(C, "strtodate", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "dat")), "fieldbyname", ["tek_dat"])), "asstring"))])));
    await $.mset((await $.v(C, "dtpend")), "Date", (await $.mv((await $.v(C, "dtpbegin")), "Date")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t19], "Connect", [], C));
    await $.stmt((await $.wcall([$t19], "ExportDataset", [(await $.mv((await $.wv([$t19], "dm", C, false)), "ODSPayments")), "Transactions", (await $.wv([$t19], "True", C, false)), (await $.wv([$t19], "True", C, false))], C)));
    await $.stmt($.wcall([$t19], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "DBGridPaymentsDrawColumnCell", async function DBGridPaymentsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t20 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t21 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "Asinteger"));
        if ($.eq($t21, 1)) {
          await $.wset([$t20], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t21, 2)) {
          await $.wset([$t20], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t21, 4)) {
          await $.wset([$t20], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t21, 3)) {
          await $.wset([$t20], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t21, 9)) {
          await $.wset([$t20], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t21, 10)) {
          await $.wset([$t20], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t20], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t20], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t20], "ImageList", C, false)), "Draw", [(await $.wv([$t20], "Canvas", C, false)), (await $.mv((await $.wv([$t20], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t20], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t20], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t20], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t20], "DefaultDrawColumnCell", [(await $.wv([$t20], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t20], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t20], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t20], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TPaymentsForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Dm")), "odspayments")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm")), "odspayments")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "searchidChange", async function searchidChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = L0["sender"];
    if ($.truthy($.ne((await $.wv([$t22], "Text", C, false)), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t22], "dm", C, false)), "odspayments")), "Locate", [(await $.wcall([$t22], "Copy", [(await $.wv([$t22], "Name", C, false)), 7, (await $.wcall([$t22], "Length", [(await $.wv([$t22], "Name", C, false))], C))], C)), (await $.wv([$t22], "Text", C, false)), [(await $.wv([$t22], "loCaseInsensitive", C, false)), (await $.wv([$t22], "loPartialKey", C, false))]])));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "dbgridpayments")), "SelectedRows")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "dbgridpayments")), "SelectedRows")), "CurrentRowSelected", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "searchidExit", async function searchidExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "last", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "First", []);
    { const $t23 = (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "RecordCount"));
      L0["i"] = 0;
      let $t24 = true;
      for (;;) {
        if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
        $t24 = false;
        if (!($.ord(L0["i"]) <= $.ord($t23))) break;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["transaction_type"])), "Asinteger")), 2))) {
          L0["j"] = 1;
        }
        if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["transaction_type"])), "Asinteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["transaction_type"])), "Asinteger")), 5)))))) {
          L0["j"] = 2;
        }
        if ($.truthy((await $.or_((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["transaction_type"])), "Asinteger")), 4)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["transaction_type"])), "Asinteger")), 2)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["transaction_type"])), "Asinteger")), 5)))))) {
          L0["j"] = 3;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "dm")), "pack")), "CallProcedure", ["Ibank_change_status", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "FieldByName", ["TRANS_ID"])), "AsString")), L0["j"]]])));
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridPayments")), "DataSource")), "DataSet")), "Next", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "Print1Click", async function Print1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "dm"));
    if ($.truthy($.not((await $.wcall([$t25], "assigned", [(await $.wv([$t25], "rep", C, false))], C))))) {
      await $.wset([$t25], "rep", (await $.mcall((await $.wv([$t25], "trep", C, false)), "Create", [Self])), C);
    }
    {
      const $t26 = (await $.wv([$t25], "rep", C, false));
      await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t25, $t26], "DBGridPayments", C, false)), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "open", []);
      { const $t27 = (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "FieldByName", ["transaction_type"])), "AsInteger"));
        if ($.eq($t27, 3) || $.eq($t27, 7) || $.eq($t27, 88)) {
          await $.mset((await $.wv([$t25, $t26], "P013", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_name"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "MFO1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_code"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "INN1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_tin"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "KORBANKACC1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_acc"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "BIC1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_bic"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "P018", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_name"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "MFO2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_code"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "INN2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_tin"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "KORBANKACC2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_acc"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "BIC2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_bic"])), "asstring")));
        }
        else {
          await $.mset((await $.wv([$t25, $t26], "P013", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_name"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "MFO1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_code"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "INN1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_tin"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "KORBANKACC1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_acc"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "BIC1", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["bank_bic"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "P018", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["receiver_bank_name"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "MFO2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["receiver_bank_code"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "INN2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["receiver_bank_tin"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "KORBANKACC2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["receiver_bank_acc"])), "asstring")));
          await $.mset((await $.wv([$t25, $t26], "BIC2", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["receiver_bank_bic"])), "asstring")));
        }
      }
      await $.mset((await $.wv([$t25, $t26], "NAME", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["gonderen_name"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "acc", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["gonderen_acc"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "inn", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["gonderen_inn"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "korNAME", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["alan_name"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "koracc", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["alan_acc"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "korinn", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["alan_inn"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "iso", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["currency"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "nazntext", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["teynat"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "nazntextadd", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["note"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "taxcode", C, false)), "caption", "-");
      await $.mset((await $.wv([$t25, $t26], "taxlevelcode", C, false)), "caption", "-");
      await $.mset((await $.wv([$t25, $t26], "p004", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["amount"])), "asstring")));
      await $.mset((await $.wv([$t25, $t26], "P099", C, false)), "caption", (await $.mv((await $.mcall((await $.wv([$t25, $t26], "ods_rep", C, false)), "fieldbyname", ["AMOUNT_YAZI"])), "asstring")));
      await $.mcall((await $.wv([$t25, $t26], "rep", C, false)), "Preview", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dbgridpayments")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "searchidKeyPress", async function searchidKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
    {
      const $t28 = L0["sender"];
      await $.wset([$t28], "SearchField", (await $.wcall([$t28], "copy", [(await $.wv([$t28], "Name", C, false)), 7, (await $.wcall([$t28], "length", [(await $.wv([$t28], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
      {
        const $t29 = (await $.wcall([$t28], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t28], "DBGridpayments", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t28, $t29], "SearchRecord", [(await $.wv([$t28, $t29], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t28, $t29], "Text", C, false)), $.add((await $.wv([$t28, $t29], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t28, $t29], "srFromCurrent", C, false)), (await $.wv([$t28, $t29], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t28, $t29], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "yenidən başlamaq istəyirsinizmi  ?"), (await $.wv([$t28, $t29], "mtInformation", C, false)), [(await $.wv([$t28, $t29], "mbNo", C, false)), (await $.wv([$t28, $t29], "mbYes", C, false))], 0], C)), (await $.wv([$t28, $t29], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t28, $t29], "SearchRecord", [(await $.wv([$t28, $t29], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t28, $t29], "Text", C, false)), $.add((await $.wv([$t28, $t29], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t28, $t29], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t28, $t29], "MessageDlg", ["Yazı Tapılmadı !", (await $.wv([$t28, $t29], "mtInformation", C, false)), [(await $.wv([$t28, $t29], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentsForm", "CHECKAZIPSClick", async function CHECKAZIPSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CHECKBDClick", async function CHECKBDClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "allcheckClick", async function allcheckClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "allcheck")), "Checked")))) {
    await $.mset((await $.v(C, "CheckBox4")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox6")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox5")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox7")), "Checked", true);
    await $.mset((await $.v(C, "CHECKAZIPS")), "Checked", true);
    await $.mset((await $.v(C, "CHECKBD")), "Checked", true);
    await $.mset((await $.v(C, "CHECKXOKS")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox8")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox4")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox6")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox5")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox7")), "Checked", false);
    await $.mset((await $.v(C, "CHECKAZIPS")), "Checked", false);
    await $.mset((await $.v(C, "CHECKBD")), "Checked", false);
    await $.mset((await $.v(C, "CHECKXOKS")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox8")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
  } else {
    { const $t30 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM")), "ODSPayments")), "sql")), [39], ""); if ($t30 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM")), "ODSPayments")), "sql", $t30); } }
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckBox8Click", async function CheckBox8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckcommitClick", async function CheckcommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckdelClick", async function CheckdelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "checkplanClick", async function checkplanClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckBox4Click", async function CheckBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckBox5Click", async function CheckBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckBox6Click", async function CheckBox6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentsForm", "CheckBox7Click", async function CheckBox7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

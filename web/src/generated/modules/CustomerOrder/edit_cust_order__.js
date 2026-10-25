// Generated from edit_cust_order__.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("edit_cust_order__", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "Oracledata", "NLSDialogs", "Grids", "DBGrids", "Mask", "DBCtrls", "NLSLocalizer", "datamodule", "CurrencyToHR_Azeri_Impl", "arest_check"]);
  const C = [U];
  U.defClass("Tedit_cust_order", "TForm", {"groupbox30": {"name": "GroupBox30", "type": "TGroupBox"}, "label19": {"name": "Label19", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "editchief": {"name": "Editchief", "type": "TEdit"}, "edithead": {"name": "Edithead", "type": "TEdit"}, "groupbox29": {"name": "GroupBox29", "type": "TGroupBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "editn_mon": {"name": "Editn_mon", "type": "TEdit"}, "editw_mon": {"name": "Editw_mon", "type": "TEdit"}, "editcon": {"name": "Editcon", "type": "TEdit"}, "groupbox21": {"name": "GroupBox21", "type": "TGroupBox"}, "groupbox22": {"name": "GroupBox22", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "editc_name": {"name": "Editc_name", "type": "TEdit"}, "groupbox23": {"name": "GroupBox23", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "groupbox24": {"name": "GroupBox24", "type": "TGroupBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "editc_voin": {"name": "Editc_voin", "type": "TEdit"}, "groupbox33": {"name": "GroupBox33", "type": "TGroupBox"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "editnumber": {"name": "editnumber", "type": "TEdit"}, "editdate": {"name": "editdate", "type": "TDateTimePicker"}, "groupbox37": {"name": "GroupBox37", "type": "TGroupBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbname": {"name": "DBname", "type": "TDBEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbcode": {"name": "DBcode", "type": "TDBEdit"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbinn": {"name": "DBinn", "type": "TDBEdit"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbcoracc": {"name": "DBCorAcc", "type": "TDBEdit"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbswift": {"name": "DBswift", "type": "TDBEdit"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "editcode": {"name": "Editcode", "type": "TEdit"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "editvoin": {"name": "Editvoin", "type": "TEdit"}, "groupbox19": {"name": "GroupBox19", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "editacc": {"name": "Editacc", "type": "TEdit"}, "groupbox20": {"name": "GroupBox20", "type": "TGroupBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "editswift": {"name": "Editswift", "type": "TEdit"}, "groupbox32": {"name": "GroupBox32", "type": "TGroupBox"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "editedv": {"name": "Editedv", "type": "TEdit"}, "editedv_f": {"name": "Editedv_f", "type": "TEdit"}, "editedv_t": {"name": "Editedv_t", "type": "TEdit"}, "editpro_t": {"name": "Editpro_t", "type": "TEdit"}, "editpro_p": {"name": "Editpro_p", "type": "TEdit"}, "editpro": {"name": "Editpro", "type": "TEdit"}, "groupbox25": {"name": "GroupBox25", "type": "TGroupBox"}, "groupbox26": {"name": "GroupBox26", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "editm_name": {"name": "Editm_name", "type": "TEdit"}, "groupbox27": {"name": "GroupBox27", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "editm_acc": {"name": "Editm_acc", "type": "TEdit"}, "groupbox28": {"name": "GroupBox28", "type": "TGroupBox"}, "editm_voin": {"name": "Editm_voin", "type": "TEdit"}, "editname": {"name": "editname", "type": "TEdit"}, "editc_acc": {"name": "editc_acc", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "label16": {"name": "Label16", "type": "TLabel"}, "editval": {"name": "editval", "type": "TEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "km": {"name": "km", "type": "TLabel"}, "rate": {"name": "Rate", "type": "array"}, "isupdate": {"name": "isUpdate", "type": "boolean"}}, {});
  U.fieldInit("Tedit_cust_order", "rate", () => []);
  U.init(async () => {
    U.var_("edit_cust_order", null, "Tedit_cust_order");
  });
  U.method("Tedit_cust_order", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "Tedit_cust_order", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("Tedit_cust_order", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Sərəncam";
  await $.inherited(Self, "Tedit_cust_order", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("Tedit_cust_order", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "setvariable", ["cust", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit1")), "text"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "cleaning", async function cleaning(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "compcount": 0};
  { const $t2 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["compcount"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["compcount"] = $.succ(L0["compcount"], 1); }
      $t3 = false;
      if (!($.ord(L0["compcount"]) <= $.ord($t2))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
      } else {
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TComboBox")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("Tedit_cust_order", "ComboID", async function ComboID(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex": 0};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex"] = 0;
  if ($.truthy($.eq((await $.mv(L0["dataset"], "Active")), false))) {
    await $.mcall(L0["dataset"], "Open", []);
  }
  await $.mcall(L0["dataset"], "First", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t4) => { await $.set(C, "Rate", $t4); }), (await $.mv(L0["dataset"], "RecordCount"))])));
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    { const $t5 = await $.iset((await $.v(C, "Rate")), [L0["rateindex"]], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["idfield"]])), "AsInteger"))); if ($t5 !== undefined) { await $.set(C, "Rate", $t5); } }
    await $.mcall(L0["dataset"], "Next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["rateindex"], async ($t6) => { L0["rateindex"] = $t6; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("Tedit_cust_order", "ComboBox", async function ComboBox(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "combobox": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["dataset", "field", "combobox"]);
  if ($.truthy($.eq((await $.mv(L0["dataset"], "active")), false))) {
    await $.mcall(L0["dataset"], "open", []);
  }
  await $.mcall(L0["dataset"], "first", []);
  await $.mcall((await $.mv((await $.callv(L0["combobox"], [])), "items")), "clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "eof")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.callv(L0["combobox"], [])), "items")), "add", [(await $.mv((await $.mcall(L0["dataset"], "fieldbyname", [L0["field"]])), "asstring"))])));
    await $.mcall(L0["dataset"], "next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "TComboBox"]});
  U.method("Tedit_cust_order", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "editdate")), "DateTime"))]));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Sərəncamda etdiyiniz dəyişikliklər qəbul edilsin?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t7 = (await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders"));
      const $t8 = (await $.mv((await $.wv([$t7], "DataModCustOrders", C, false)), "cust_orders"));
      await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["update_cust_order", [(await $.wv([$t7, $t8], "ddate", { get: async () => L0["ddate"], set: async (v) => { L0["ddate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t7, $t8], "Editnumber", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "DBCode", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "dbinn", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "dbcoracc", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "dbswift", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editval", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editname", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editcode", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editvoin", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editswift", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editacc", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editc_name", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editc_acc", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editc_voin", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editm_name", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editm_acc", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editm_voin", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editn_mon", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editw_mon", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editcon", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editedv", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editedv_f", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editedv_t", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editpro", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editpro_t", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editpro_p", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "editchief", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "edithead", C, false)), "text")), (await $.mv((await $.wv([$t7, $t8], "edit1", C, false)), "text"))]], C)));
    }
  }
  await $.stmt($.call(C, "cleaning", []));
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_order")), "refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "cust_orders")), "refresh", []);
  await $.mcall((await $.v(C, "edit_cust_order")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "WithCoin", async function WithCoin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ammount": $.copyArg(p0), result: '', "ttrunc": 0};
  await $.fixArgs(L0, ["ammount"]);
  L0["ttrunc"] = (await $.call(C, "Trunc", [(await $.call(C, "StrToCurr", [L0["ammount"]]))]));
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["ammount"], async ($t9) => { L0["ammount"] = $t9; }), (await $.call(C, "Pos", [(await $.call(C, "CurrToStr", [L0["ttrunc"]])), L0["ammount"]])), $.add((await $.call(C, "Length", [(await $.call(C, "CurrToStr", [L0["ttrunc"]]))])), 1)])));
  if ($.truthy($.eq(L0["ammount"], ""))) {
    L0["ammount"] = "00";
  }
  L0["result"] = $.add($.add($.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [L0["ttrunc"], 0, [0]])), " "), "="), " "), L0["ammount"]), " qəp");
  return L0.result;
}, {"params": ["Ammount"], "kind": "function", "ptypes": ["String"]});
  U.method("Tedit_cust_order", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "DataModCustOrders"));
    await $.mcall((await $.wv([$t10], "Bankm", C, false)), "open", []);
    await $.mcall((await $.wv([$t10], "bank_info", C, false)), "open", []);
    await $.mcall((await $.mv((await $.wv([$t10], "DataModCustOrders", C, false)), "search_order")), "open", []);
    await $.mcall((await $.mv((await $.wv([$t10], "DataModCustOrders", C, false)), "cust_orders")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "check_arest", (await $.mcall((await $.v(C, "Tcheck_arest")), "create", [Self])));
  await $.mcall((await $.v(C, "check_arest")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Editn_monExit", async function Editn_monExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "editn_mon")), "text")), ""))) {
    await $.mset((await $.v(C, "editw_mon")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "editn_mon")), "text"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Editn_monChange", async function Editn_monChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.call(C, "Trim", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])), "")))) {
    await $.mset((await $.v(C, "editw_mon")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "editn_mon")), "text"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Editc_voinChange", async function Editc_voinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lenstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["lenstr"] = (await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))]));
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt(L0["lenstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ancaq 10 rəqəm daxil etmək olar!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t11) => { L0["str"] = $t11; }), 11, $.sub(L0["lenstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Editm_voinChange", async function Editm_voinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lenstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["lenstr"] = (await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))]));
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt(L0["lenstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ancaq 10 rəqəm daxil etmək olar!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t12) => { L0["str"] = $t12; }), 11, $.sub(L0["lenstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Edit1KeyUp", async function Edit1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tedit_cust_order", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "setvariable", ["cust", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit1")), "text"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "check_arest", (await $.mcall((await $.v(C, "Tcheck_arest")), "create", [Self])));
  await $.mcall((await $.v(C, "check_arest")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "Editw_monKeyPress", async function Editw_monKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "Editedv_tKeyDown", async function Editedv_tKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tedit_cust_order", "Editpro_tKeyDown", async function Editpro_tKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tedit_cust_order", "Editedv_tKeyPress", async function Editedv_tKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "Editpro_tKeyPress", async function Editpro_tKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "EditedvKeyPress", async function EditedvKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "Editedv_fKeyPress", async function Editedv_fKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "EditproKeyPress", async function EditproKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "Editpro_pKeyPress", async function Editpro_pKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "Editn_monKeyPress", async function Editn_monKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tedit_cust_order", "EditcodeChange", async function EditcodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "DataModCustOrders")), "Bankm"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from bankm c where bankcode= ", "'"), (await $.mv((await $.wv([$t13], "editcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "editvoin", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["inn"], C)), "AsString")));
    await $.mset((await $.wv([$t13], "editacc", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["krno"], C)), "AsString")));
    await $.mset((await $.wv([$t13], "editswift", C, false)), "text", (await $.mv((await $.wcall([$t13], "fieldbyname", ["swift"], C)), "asstring")));
    await $.mset((await $.wv([$t13], "editname", C, false)), "text", (await $.mv((await $.wcall([$t13], "fieldbyname", ["name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "editc_accChange", async function editc_accChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.mv((await $.v(C, "DataModCustOrders")), "account"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("select * from account  where acc_no= ", "'"), (await $.mv((await $.wv([$t14], "editc_acc", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "editc_name", C, false)), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tedit_cust_order", "editnumberKeyDown", async function editnumberKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}

// Generated from customers_orders_arest__.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("customers_orders_arest__", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "Oracledata", "Grids", "DBGrids", "Mask", "NLSDialogs", "NLSLocalizer", "DBCtrls", "Menus", "ImgList", "datamodule", "CurrencyToHR_Azeri_Impl", "arest_check", "s_arxiv", "transaction"]);
  const C = [U];
  U.defClass("Tcustomers_orders_arest", "TForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "groupbox38": {"name": "GroupBox38", "type": "TGroupBox"}, "groupbox37": {"name": "GroupBox37", "type": "TGroupBox"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "groupbox33": {"name": "GroupBox33", "type": "TGroupBox"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "editnumber": {"name": "editnumber", "type": "TEdit"}, "editdate": {"name": "editdate", "type": "TDateTimePicker"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbname": {"name": "DBname", "type": "TDBEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbcode": {"name": "DBcode", "type": "TDBEdit"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbinn": {"name": "DBinn", "type": "TDBEdit"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbcoracc": {"name": "DBCorAcc", "type": "TDBEdit"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbswift": {"name": "DBswift", "type": "TDBEdit"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "comboname": {"name": "comboname", "type": "TComboBox"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "editcode": {"name": "Editcode", "type": "TEdit"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "editvoin": {"name": "Editvoin", "type": "TEdit"}, "groupbox19": {"name": "GroupBox19", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "editacc": {"name": "Editacc", "type": "TEdit"}, "groupbox20": {"name": "GroupBox20", "type": "TGroupBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "editswift": {"name": "Editswift", "type": "TEdit"}, "groupbox21": {"name": "GroupBox21", "type": "TGroupBox"}, "groupbox22": {"name": "GroupBox22", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "editc_name": {"name": "Editc_name", "type": "TEdit"}, "groupbox23": {"name": "GroupBox23", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "groupbox24": {"name": "GroupBox24", "type": "TGroupBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "editc_voin": {"name": "Editc_voin", "type": "TEdit"}, "groupbox25": {"name": "GroupBox25", "type": "TGroupBox"}, "groupbox26": {"name": "GroupBox26", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "editm_name": {"name": "Editm_name", "type": "TEdit"}, "groupbox27": {"name": "GroupBox27", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "editm_acc": {"name": "Editm_acc", "type": "TEdit"}, "groupbox28": {"name": "GroupBox28", "type": "TGroupBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "editm_voin": {"name": "Editm_voin", "type": "TEdit"}, "groupbox29": {"name": "GroupBox29", "type": "TGroupBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "editn_mon": {"name": "Editn_mon", "type": "TEdit"}, "editw_mon": {"name": "Editw_mon", "type": "TEdit"}, "editcon": {"name": "Editcon", "type": "TEdit"}, "groupbox32": {"name": "GroupBox32", "type": "TGroupBox"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "editedv": {"name": "Editedv", "type": "TEdit"}, "editedv_f": {"name": "Editedv_f", "type": "TEdit"}, "editedv_t": {"name": "Editedv_t", "type": "TEdit"}, "groupbox30": {"name": "GroupBox30", "type": "TGroupBox"}, "label19": {"name": "Label19", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "editchief": {"name": "Editchief", "type": "TEdit"}, "edithead": {"name": "Edithead", "type": "TEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox31": {"name": "GroupBox31", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "editc_acc": {"name": "editc_acc", "type": "TEdit"}, "editpro": {"name": "editpro", "type": "TEdit"}, "editpro_p": {"name": "Editpro_p", "type": "TEdit"}, "editpro_t": {"name": "Editpro_t", "type": "TEdit"}, "editval": {"name": "editval", "type": "TComboBox"}, "db_arest": {"name": "db_arest", "type": "TPopupMenu"}, "arest": {"name": "arest", "type": "TMenuItem"}, "db_order": {"name": "db_order", "type": "TPopupMenu"}, "edit": {"name": "edit", "type": "TMenuItem"}, "legvetmek1": {"name": "Legvetmek1", "type": "TMenuItem"}, "arxiv1": {"name": "Arxiv1", "type": "TMenuItem"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "km": {"name": "km", "type": "TLabel"}, "rate": {"name": "Rate", "type": "array"}, "isupdate": {"name": "isUpdate", "type": "boolean"}}, {});
  U.fieldInit("Tcustomers_orders_arest", "rate", () => []);
  U.init(async () => {
    U.var_("customers_orders_arest", null, "Tcustomers_orders_arest");
  });
  U.method("Tcustomers_orders_arest", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "Tcustomers_orders_arest", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("Tcustomers_orders_arest", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Sərəncam";
  await $.inherited(Self, "Tcustomers_orders_arest", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("Tcustomers_orders_arest", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "setvariable", ["cust", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit1")), "text"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "serach_cust")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "cleaning", async function cleaning(Self) {
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
  U.method("Tcustomers_orders_arest", "ComboID", async function ComboID(Self, p0, p1, p2, p3) {
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
  U.method("Tcustomers_orders_arest", "ComboBox", async function ComboBox(Self, p0, p1, p2) {
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
  U.method("Tcustomers_orders_arest", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "emeliyyat", (await $.mcall((await $.v(C, "Temeliyyat")), "Create", [Self])));
    await $.mcall((await $.v(C, "emeliyyat")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "emeliyyat")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t7 = (await $.mv((await $.v(C, "DataModCustOrders")), "valute"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t7], "SQL", C, false)), "Add", ["select * from avalute"])));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editval")), "Clear", []);
  { const $t8 = (await $.mv((await $.mv((await $.v(C, "DataModCustOrders")), "valute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t9 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t8))) break;
      {
        const $t10 = (await $.v(C, "editval"));
        await $.stmt((await $.mcall((await $.wv([$t10], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataModCustOrders", C, false)), "valute")), "FieldByName", ["val_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "valute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("Tcustomers_orders_arest", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "editdate")), "DateTime"))]));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Bu sərəncamda etdiyiniz dəyişilliklər qəbul edilsin?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t11 = (await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders"));
      await $.stmt((await $.wcall([$t11], "CallProcedure", ["update_cust_order", [(await $.wv([$t11], "ddate", { get: async () => L0["ddate"], set: async (v) => { L0["ddate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t11], "Editnumber", C, false)), "text")), (await $.mv((await $.wv([$t11], "DBCode", C, false)), "text")), (await $.mv((await $.wv([$t11], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t11], "dbinn", C, false)), "text")), (await $.mv((await $.wv([$t11], "dbcoracc", C, false)), "text")), (await $.mv((await $.wv([$t11], "dbswift", C, false)), "text")), (await $.mv((await $.wv([$t11], "editval", C, false)), "text")), (await $.mv((await $.wv([$t11], "comboname", C, false)), "text")), (await $.mv((await $.wv([$t11], "editcode", C, false)), "text")), (await $.mv((await $.wv([$t11], "editvoin", C, false)), "text")), (await $.mv((await $.wv([$t11], "editswift", C, false)), "text")), (await $.mv((await $.wv([$t11], "editacc", C, false)), "text")), (await $.mv((await $.wv([$t11], "editc_name", C, false)), "text")), (await $.mv((await $.wv([$t11], "editc_acc", C, false)), "text")), (await $.mv((await $.wv([$t11], "editc_voin", C, false)), "text")), (await $.mv((await $.wv([$t11], "editm_name", C, false)), "text")), (await $.mv((await $.wv([$t11], "editm_acc", C, false)), "text")), (await $.mv((await $.wv([$t11], "editm_voin", C, false)), "text")), (await $.mv((await $.wv([$t11], "editn_mon", C, false)), "text")), (await $.mv((await $.wv([$t11], "editw_mon", C, false)), "text")), (await $.mv((await $.wv([$t11], "editcon", C, false)), "text")), (await $.mv((await $.wv([$t11], "editedv", C, false)), "text")), (await $.mv((await $.wv([$t11], "editedv_f", C, false)), "text")), (await $.mv((await $.wv([$t11], "editedv_t", C, false)), "text")), (await $.mv((await $.wv([$t11], "editpro", C, false)), "text")), (await $.mv((await $.wv([$t11], "editpro_t", C, false)), "text")), (await $.mv((await $.wv([$t11], "editpro_p", C, false)), "text")), (await $.mv((await $.wv([$t11], "editchief", C, false)), "text")), (await $.mv((await $.wv([$t11], "edithead", C, false)), "text")), (await $.mv((await $.wv([$t11], "edit1", C, false)), "text"))]], C)));
      await $.mcall((await $.mv((await $.wv([$t11], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
      await $.mcall((await $.mv((await $.wv([$t11], "DataModCustOrders", C, false)), "search_acc")), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "WithCoin", async function WithCoin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ammount": $.copyArg(p0), result: '', "ttrunc": 0};
  await $.fixArgs(L0, ["ammount"]);
  L0["ttrunc"] = (await $.call(C, "Trunc", [(await $.call(C, "StrToCurr", [L0["ammount"]]))]));
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["ammount"], async ($t12) => { L0["ammount"] = $t12; }), (await $.call(C, "Pos", [(await $.call(C, "CurrToStr", [L0["ttrunc"]])), L0["ammount"]])), $.add((await $.call(C, "Length", [(await $.call(C, "CurrToStr", [L0["ttrunc"]]))])), 1)])));
  if ($.truthy($.eq(L0["ammount"], ""))) {
    L0["ammount"] = "00";
  }
  L0["result"] = $.add($.add($.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [L0["ttrunc"], 0, [0]])), " "), "="), " "), L0["ammount"]), " qəp");
  return L0.result;
}, {"params": ["Ammount"], "kind": "function", "ptypes": ["String"]});
  U.method("Tcustomers_orders_arest", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": '', "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    if ($.truthy((await $.wv([$t13], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t13], "ShowMessage", ["Hec bir serencam qeyd olunmayib!"], C)));
      return L0.result;
    } else {
      await $.wset([$t13], "v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "cust_id")), "fieldbyname", ["id"])), "asinteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
      await $.wset([$t13], "v_pnum", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "cust_id")), "FieldByName", ["PNUM"])), "AsString")), { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t13], "MessageDlg", [(await $.wcall([$t13], "Format", ["№%s sərəncam silinsin?", [(await $.wv([$t13], "v_pnum", { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true }, false))]], C)), (await $.wv([$t13], "mtConfirmation", C, false)), (await $.wv([$t13], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t13], "mrYes", C, false))))) {
        {
          const $t14 = (await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "cust_id"));
          const $t15 = (await $.mv((await $.wv([$t13, $t14], "DataModCustOrders", C, false)), "customer_orders"));
          await $.stmt((await $.wcall([$t13, $t14, $t15], "CallProcedure", ["delete_order", [(await $.wv([$t13, $t14, $t15], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]], C)));
          await $.stmt($.wcall([$t13, $t14, $t15], "Refresh", [], C));
        }
      }
      await $.mcall((await $.mv((await $.wv([$t13], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    const $t17 = (await $.wv([$t16], "customers_orders_arest", C, false));
    if ($.truthy((await $.wv([$t16, $t17], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t16, $t17], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t16, $t17], "send_arxiv", (await $.mcall((await $.wv([$t16, $t17], "Tsend_arxiv", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t16, $t17], "send_arxiv", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t16, $t17], "send_arxiv", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "combonameChange", async function combonameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t18 = (await $.mv((await $.v(C, "DataModCustOrders")), "Bankm"));
      await $.stmt($.wcall([$t18], "Close", [], C));
      await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", $.add("Select * From BankM Where ID= ", (await $.wcall([$t18], "IntToStr", [(await $.idx((await $.wv([$t18], "Rate", C, false)), [(await $.mv((await $.wv([$t18], "comboname", C, false)), "ItemIndex"))]))], C))));
      await $.stmt($.wcall([$t18], "Open", [], C));
      await $.mset((await $.wv([$t18], "editcode", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t18], "editvoin", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t18], "Editacc", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t18], "Editswift", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["SWIFT"], C)), "AsString")));
    }
  } finally {
    {
      const $t19 = (await $.mv((await $.v(C, "DataModCustOrders")), "Bankm"));
      await $.stmt($.wcall([$t19], "Close", [], C));
      await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", "Select * From BankM ");
      await $.stmt($.wcall([$t19], "Open", [], C));
      await $.stmt($.wcall([$t19], "refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "DataModCustOrders"));
    await $.mcall((await $.wv([$t20], "Bankm", C, false)), "open", []);
    await $.mcall((await $.wv([$t20], "bank_info", C, false)), "open", []);
    await $.stmt($.wcall([$t20], "addvalute", [], C));
    await $.stmt((await $.wcall([$t20], "ComboID", [(await $.wv([$t20], "Bankm", C, false)), "NAME", "ID", (await $.wv([$t20], "comboname", C, false))], C)));
    await $.mset((await $.wv([$t20], "editdate", C, false)), "DateTime", (await $.mcall((await $.wv([$t20], "customer_orders", C, false)), "CallDateFunction", ["Currentdate", []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t21 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    await $.stmt((await $.wcall([$t21], "SetVariable", ["Title", (await $.wv([$t21], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t21], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders_arest", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t22 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_acc"));
    await $.stmt((await $.wcall([$t22], "SetVariable", ["Title", (await $.wv([$t22], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t22], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders_arest", "Editn_monExit", async function Editn_monExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "editn_mon")), "text")), ""))) {
    await $.mset((await $.v(C, "editw_mon")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "editn_mon")), "text"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "Editn_monChange", async function Editn_monChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.call(C, "Trim", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])), "")))) {
    await $.mset((await $.v(C, "editw_mon")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "editn_mon")), "text"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "Editn_monKeyPress", async function Editn_monKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "Editc_voinChange", async function Editc_voinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lenstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["lenstr"] = (await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))]));
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt(L0["lenstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ancaq 10 rəqəm daxil etmək olar!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t23) => { L0["str"] = $t23; }), 11, $.sub(L0["lenstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "Editm_voinChange", async function Editm_voinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lenstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["lenstr"] = (await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))]));
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt(L0["lenstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ancaq 10 rəqəm daxil etmək olar!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t24) => { L0["str"] = $t24; }), 11, $.sub(L0["lenstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "comboname")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editcode")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editvoin")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editacc")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editswift")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_name")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_acc")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_voin")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editm_name")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editm_acc")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editm_voin")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editn_mon")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editw_mon")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editcon")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editedv")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editedv_f")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editedv_t")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editpro")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editpro_p")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editpro_t")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editchief")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "edithead")), "Text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editnumber")), "text", "");
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editval")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SpeedButton10")), "Click", []);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "editdate")), "DateTime"))]));
  if ($.truthy($.not(((await $.or_(((await $.mv((await $.mv((await $.v(C, "check_arest")), "CheckBox1")), "Checked"))), async () => ((await $.mv((await $.mv((await $.v(C, "check_arest")), "CheckBox2")), "Checked"))))))))) {
    await $.stmt((await $.call(C, "SpeedButton10Click", [L0["sender"]])));
  } else {
    {
      const $t25 = (await $.mv((await $.v(C, "DataModCustOrders")), "customer_orders"));
      await $.stmt((await $.wcall([$t25], "CallProcedure", ["accept_order", [(await $.wv([$t25], "ddate", { get: async () => L0["ddate"], set: async (v) => { L0["ddate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t25], "Editnumber", C, false)), "text")), (await $.mv((await $.wv([$t25], "DBCode", C, false)), "text")), (await $.mv((await $.wv([$t25], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t25], "dbinn", C, false)), "text")), (await $.mv((await $.wv([$t25], "dbcoracc", C, false)), "text")), (await $.mv((await $.wv([$t25], "dbswift", C, false)), "text")), (await $.mv((await $.wv([$t25], "editval", C, false)), "text")), (await $.mv((await $.wv([$t25], "comboname", C, false)), "text")), (await $.mv((await $.wv([$t25], "editcode", C, false)), "text")), (await $.mv((await $.wv([$t25], "editvoin", C, false)), "text")), (await $.mv((await $.wv([$t25], "editswift", C, false)), "text")), (await $.mv((await $.wv([$t25], "editacc", C, false)), "text")), (await $.mv((await $.wv([$t25], "editc_name", C, false)), "text")), (await $.mv((await $.wv([$t25], "editc_acc", C, false)), "text")), (await $.mv((await $.wv([$t25], "editc_voin", C, false)), "text")), (await $.mv((await $.wv([$t25], "editm_name", C, false)), "text")), (await $.mv((await $.wv([$t25], "editm_acc", C, false)), "text")), (await $.mv((await $.wv([$t25], "editm_voin", C, false)), "text")), (await $.mv((await $.wv([$t25], "editn_mon", C, false)), "text")), (await $.mv((await $.wv([$t25], "editw_mon", C, false)), "text")), (await $.mv((await $.wv([$t25], "editcon", C, false)), "text")), (await $.mv((await $.wv([$t25], "editedv", C, false)), "text")), (await $.mv((await $.wv([$t25], "editedv_f", C, false)), "text")), (await $.mv((await $.wv([$t25], "editedv_t", C, false)), "text")), (await $.mv((await $.wv([$t25], "editpro", C, false)), "text")), (await $.mv((await $.wv([$t25], "editpro_t", C, false)), "text")), (await $.mv((await $.wv([$t25], "editpro_p", C, false)), "text")), (await $.mv((await $.wv([$t25], "editchief", C, false)), "text")), (await $.mv((await $.wv([$t25], "edithead", C, false)), "text")), (await $.mv((await $.wv([$t25], "dbedit1", C, false)), "text")), (await $.mv((await $.wv([$t25], "edit1", C, false)), "text"))]], C)));
      await $.mcall((await $.mv((await $.wv([$t25], "DataModCustOrders", C, false)), "cust_id")), "refresh", []);
      await $.mcall((await $.mv((await $.wv([$t25], "DataModCustOrders", C, false)), "search_acc")), "refresh", []);
      try {
      } finally {
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_acc"));
    if ($.truthy((await $.wv([$t26], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t26], "ShowMessage", ["Hec bir hesab qeyd olunmayib!"], C)));
      return L0.result;
    } else {
      await $.wset([$t26], "check_arest", (await $.mcall((await $.wv([$t26], "Tcheck_arest", C, false)), "create", [Self])), C);
      await $.mcall((await $.wv([$t26], "check_arest", C, false)), "showmodal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "EditcodeKeyPress", async function EditcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "EditvoinKeyPress", async function EditvoinKeyPress(Self, p0, p1) {
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
  U.method("Tcustomers_orders_arest", "EditaccKeyPress", async function EditaccKeyPress(Self, p0, p1) {
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
  U.method("Tcustomers_orders_arest", "EditswiftKeyPress", async function EditswiftKeyPress(Self, p0, p1) {
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
  U.method("Tcustomers_orders_arest", "Editw_monKeyPress", async function Editw_monKeyPress(Self, p0, p1) {
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
  U.method("Tcustomers_orders_arest", "Editedv_tKeyDown", async function Editedv_tKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "Editpro_tKeyDown", async function Editpro_tKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "Editedv_tKeyPress", async function Editedv_tKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "Editpro_tKeyPress", async function Editpro_tKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "EditedvKeyPress", async function EditedvKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "Editedv_fKeyPress", async function Editedv_fKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "EditproKeyPress", async function EditproKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "Editpro_pKeyPress", async function Editpro_pKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tcustomers_orders_arest", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_name")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_acc")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModCustOrders")), "search_acc")), "fieldbyname", ["acc_no"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "customers_orders_arest")), "editc_voin")), "text", (await $.mv((await $.mv((await $.v(C, "customers_orders_arest")), "edit1")), "text")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders_arest", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "editnumberKeyDown", async function editnumberKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "DBGrid2KeyDown", async function DBGrid2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcustomers_orders_arest", "DBGrid2CellClick", async function DBGrid2CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t27 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    const $t28 = (await $.wv([$t27], "customers_orders_arest", C, false));
    if ($.truthy((await $.wv([$t27, $t28], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t27, $t28], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t27, $t28], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["c_acc"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["c_name"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["c_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "comboname", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["b_name"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["b_code"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["b_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["b_acc"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["b_swift"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["m_name"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["m_acc"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["m_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["n_mon"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["w_mon"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["content"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["edv"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["edv_f"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["edv_c"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["pro"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["pro_f"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["pro_c"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["pnum"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editval", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["val"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["ddate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t27, $t28], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["chief"], C)), "AsString")));
      await $.mset((await $.wv([$t27, $t28], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["head"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcustomers_orders_arest", "EditcodeChange", async function EditcodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.mv((await $.v(C, "DataModCustOrders")), "Bankm"));
    await $.stmt($.wcall([$t29], "Close", [], C));
    await $.mcall((await $.wv([$t29], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t29], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from bankm c where bankcode= ", "'"), (await $.mv((await $.wv([$t29], "editcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t29], "Open", [], C));
    await $.mset((await $.wv([$t29], "editvoin", C, false)), "Text", (await $.mv((await $.wcall([$t29], "FieldByName", ["inn"], C)), "AsString")));
    await $.mset((await $.wv([$t29], "editacc", C, false)), "Text", (await $.mv((await $.wcall([$t29], "FieldByName", ["krno"], C)), "AsString")));
    await $.mset((await $.wv([$t29], "editswift", C, false)), "text", (await $.mv((await $.wcall([$t29], "fieldbyname", ["swift"], C)), "asstring")));
    await $.mset((await $.wv([$t29], "comboname", C, false)), "text", (await $.mv((await $.wcall([$t29], "fieldbyname", ["name"], C)), "asstring")));
    if ($.truthy($.ne((await $.mv((await $.wv([$t29], "editcode", C, false)), "text")), ""))) {
      await $.mset((await $.mv((await $.wv([$t29], "km", C, false)), "Font")), "color", (await $.wv([$t29], "clblue", C, false)));
    } else {
      await $.mset((await $.mv((await $.wv([$t29], "km", C, false)), "font")), "color", (await $.wv([$t29], "clred", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "editvalKeyPress", async function editvalKeyPress(Self, p0, p1) {
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
  U.method("Tcustomers_orders_arest", "editClick", async function editClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    const $t31 = (await $.wv([$t30], "customers_orders_arest", C, false));
    if ($.truthy((await $.wv([$t30, $t31], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t30, $t31], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mset((await $.wv([$t30, $t31], "editc_acc", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["c_acc"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editc_name", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["c_name"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editc_voin", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["c_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "comboname", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["b_name"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editcode", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["b_code"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editvoin", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["b_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "EditAcc", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["b_acc"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "EditSwift", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["b_swift"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editm_name", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["m_name"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editm_acc", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["m_acc"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editm_voin", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["m_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editn_mon", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["n_mon"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editw_mon", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["w_mon"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editcon", C, false)), "Text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["content"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editedv", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["edv"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "Editedv_f", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["edv_f"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editedv_t", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["edv_c"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editpro", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["pro"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editpro_p", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["pro_f"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editpro_t", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["pro_c"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editnumber", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["pnum"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editval", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["val"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "editdate", C, false)), "DateTime", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["ddate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t30, $t31], "editchief", C, false)), "text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["chief"], C)), "AsString")));
      await $.mset((await $.wv([$t30, $t31], "edithead", C, false)), "Text", (await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["head"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "Legvetmek1Click", async function Legvetmek1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_pnum": '', "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    if ($.truthy((await $.wv([$t32], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t32], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t32], "v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "DataModCustOrders", C, false)), "cust_id")), "fieldbyname", ["id"])), "asinteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
      await $.wset([$t32], "v_pnum", (await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "DataModCustOrders", C, false)), "cust_id")), "FieldByName", ["PNUM"])), "AsString")), { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t32], "MessageDlg", [(await $.wcall([$t32], "Format", ["№%s sərəncam  silinsin?", [(await $.wv([$t32], "v_pnum", { get: async () => L0["v_pnum"], set: async (v) => { L0["v_pnum"] = v; }, local: true }, false))]], C)), (await $.wv([$t32], "mtConfirmation", C, false)), (await $.wv([$t32], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t32], "mrYes", C, false))))) {
        {
          const $t33 = (await $.mv((await $.wv([$t32], "DataModCustOrders", C, false)), "cust_id"));
          const $t34 = (await $.mv((await $.wv([$t32, $t33], "DataModCustOrders", C, false)), "customer_orders"));
          await $.stmt((await $.wcall([$t32, $t33, $t34], "CallProcedure", ["delete_order", [(await $.wv([$t32, $t33, $t34], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]], C)));
          await $.stmt($.wcall([$t32, $t33, $t34], "Refresh", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "Arxiv1Click", async function Arxiv1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.mv((await $.v(C, "DataModCustOrders")), "cust_id"));
    const $t36 = (await $.wv([$t35], "customers_orders_arest", C, false));
    if ($.truthy((await $.wv([$t35, $t36], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t35, $t36], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t35, $t36], "send_arxiv", (await $.mcall((await $.wv([$t35, $t36], "Tsend_arxiv", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t35, $t36], "send_arxiv", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t35, $t36], "send_arxiv", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t37 = L0["acanvas"];
    const $t38 = (await $.wv([$t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t39 = (await $.wv([$t37, $t38], "Font", C, false));
      await $.wset([$t37, $t38, $t39], "Name", "Azl Sans Serif", C);
      await $.wset([$t37, $t38, $t39], "Charset", (await $.wv([$t37, $t38, $t39], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t37, $t38, $t39], "Default", C, false)))) {
        await $.wset([$t37, $t38, $t39], "Style", [(await $.wv([$t37, $t38, $t39], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t37, $t38], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t37, $t38], "Pen", C, false)), "Color", (await $.wv([$t37, $t38], "clBlack", C, false)));
      await $.wset([$t37, $t38], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t37, $t38], "MoveTo", [(await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t37, $t38], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t37, $t38], "LineTo", [(await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t37, $t38], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t37, $t38], "inc", [$.ref(async () => (await $.wv([$t37, $t38], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t40) => { await $.wset([$t37, $t38], "LineBottom", $t40, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t37, $t38], "Pen", C, false)), "Color", (await $.wv([$t37, $t38], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t37, $t38], "MoveTo", [(await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t37, $t38], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t37, $t38], "LineTo", [(await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t37, $t38], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t37, $t38], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t37, $t38], "Brush", C, false)), "Color", (await $.wv([$t37, $t38], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t37, $t38], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t37, $t38], "Font", C, false)), "Color", (await $.wv([$t37, $t38], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t37, $t38], "Font", C, false)), "Color", (await $.wv([$t37, $t38], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t37, $t38], "Brush", C, false)), "Color", (await $.wv([$t37, $t38], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t37, $t38], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t37, $t38], "Font", C, false)), "Color", (await $.wv([$t37, $t38], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t37, $t38], "Font", C, false)), "Color", (await $.wv([$t37, $t38], "clGrayText", C, false)));
        }
      }
      await $.wset([$t37, $t38], "Bar", (await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t37, $t38], "FillRect", [(await $.wv([$t37, $t38], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t37, $t38], "TextOut", [$.add((await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t37, $t38], "Caption", C, false))], C)));
    }
    await $.wset([$t37, $t38], "SText", (await $.wcall([$t37, $t38], "ShortCutToText", [(await $.wv([$t37, $t38], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t37, $t38], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t37, $t38], "TextWidth", [(await $.wv([$t37, $t38], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t37, $t38], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t37, $t38], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t37, $t38], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t41 = (await $.wv([$t37, $t38], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t37, $t38, $t41], "Assigned", [(await $.wv([$t37, $t38, $t41], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t37, $t38, $t41], "Checked", C, false)))) {
            await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t37, $t38, $t41], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t37, $t38, $t41], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t37, $t38, $t41], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t42) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t42); }), 2], C)));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t43) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t43); }), 2], C)));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t44) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t44); }), 2], C)));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t45) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t45); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t37, $t38, $t41], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t46) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t46); }), 1], C)));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t47) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t47); }), 1], C)));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t48) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t48); }), 1], C)));
            await $.stmt((await $.wcall([$t37, $t38, $t41], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t49) => { await $.mset((await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t49); }), 1], C)));
            if ($.truthy((await $.wv([$t37, $t38, $t41], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t37, $t38, $t41], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t37, $t38, $t41], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t37, $t38, $t41], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t37, $t38, $t41], "Images", C, false)), "Draw", [(await $.wv([$t37, $t38, $t41], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t37, $t38, $t41], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t37, $t38, $t41], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t37, $t38, $t41], "ImageIndex", C, false)), (await $.wv([$t37, $t38, $t41], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders_arest", "arestClick", async function arestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t50 = (await $.mv((await $.v(C, "DataModCustOrders")), "search_acc"));
    if ($.truthy((await $.wv([$t50], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t50], "ShowMessage", ["Heç bir sərəncam qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t50], "check_arest", (await $.mcall((await $.wv([$t50], "Tcheck_arest", C, false)), "create", [Self])), C);
      await $.mcall((await $.wv([$t50], "check_arest", C, false)), "showmodal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "arestDrawItem", async function arestDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders_arest", "editDrawItem", async function editDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders_arest", "Legvetmek1DrawItem", async function Legvetmek1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders_arest", "Arxiv1DrawItem", async function Arxiv1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("Tcustomers_orders_arest", "combonameKeyPress", async function combonameKeyPress(Self, p0, p1) {
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
  return U;
}

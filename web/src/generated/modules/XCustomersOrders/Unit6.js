// Generated from Unit6.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit6", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "Oracledata", "Grids", "DBGrids", "Mask", "NLSDialogs", "NLSLocalizer", "DBCtrls", "Menus", "ImgList", "ExtCtrls", "CustomersordersImpl1", "CustomersordersProj1_TLB", "Unit3", "Unit4", "Unit5", "Unit7"]);
  const C = [U];
  U.defClass("TCustomers_orders_arest", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "customers_orders_arest": {"name": "Customers_orders_arest", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "groupbox19": {"name": "GroupBox19", "type": "TGroupBox"}, "groupbox20": {"name": "GroupBox20", "type": "TGroupBox"}, "groupbox21": {"name": "GroupBox21", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "groupbox22": {"name": "GroupBox22", "type": "TGroupBox"}, "groupbox23": {"name": "GroupBox23", "type": "TGroupBox"}, "groupbox24": {"name": "GroupBox24", "type": "TGroupBox"}, "groupbox25": {"name": "GroupBox25", "type": "TGroupBox"}, "groupbox26": {"name": "GroupBox26", "type": "TGroupBox"}, "groupbox27": {"name": "GroupBox27", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "groupbox28": {"name": "GroupBox28", "type": "TGroupBox"}, "groupbox29": {"name": "GroupBox29", "type": "TGroupBox"}, "groupbox30": {"name": "GroupBox30", "type": "TGroupBox"}, "groupbox31": {"name": "GroupBox31", "type": "TGroupBox"}, "groupbox32": {"name": "GroupBox32", "type": "TGroupBox"}, "groupbox33": {"name": "GroupBox33", "type": "TGroupBox"}, "editvoin": {"name": "Editvoin", "type": "TEdit"}, "editcode": {"name": "Editcode", "type": "TEdit"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "editdate": {"name": "editdate", "type": "TDateTimePicker"}, "editval": {"name": "editval", "type": "TComboBox"}, "groupbox34": {"name": "GroupBox34", "type": "TGroupBox"}, "groupbox35": {"name": "GroupBox35", "type": "TGroupBox"}, "groupbox36": {"name": "GroupBox36", "type": "TGroupBox"}, "groupbox37": {"name": "GroupBox37", "type": "TGroupBox"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "editacc": {"name": "Editacc", "type": "TEdit"}, "editswift": {"name": "Editswift", "type": "TEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "comboname": {"name": "Comboname", "type": "TComboBox"}, "label33": {"name": "Label33", "type": "TLabel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "arestctrlu1": {"name": "Arestctrlu1", "type": "TMenuItem"}, "redakteetmek1": {"name": "redakteetmek1", "type": "TMenuItem"}, "legvetmek1": {"name": "legvetmek1", "type": "TMenuItem"}, "arxiv1": {"name": "arxiv1", "type": "TMenuItem"}, "inndbedit": {"name": "innDBEdit", "type": "TDBEdit"}, "nameedit": {"name": "nameEdit", "type": "TEdit"}, "accedit": {"name": "accEdit", "type": "TEdit"}, "innedit": {"name": "innEdit", "type": "TEdit"}, "rate": {"name": "Rate", "type": "array"}}, {});
  U.fieldInit("TCustomers_orders_arest", "rate", () => []);
  U.init(async () => {
    U.var_("Customers_orders_arest", null, "TCustomers_orders_arest");
  });
  U.method("TCustomers_orders_arest", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomers_orders_arest", "Edit2KeyDown", async function Edit2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCustomers_orders_arest", "editvalKeyPress", async function editvalKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomers_orders_arest", "EditcodeKeyPress", async function EditcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomers_orders_arest", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCustomers_orders_arest", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t1 = (await $.mv((await $.v(C, "dm")), "search_acc"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["Title", (await $.wv([$t1], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomers_orders_arest", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "nameedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "search_acc")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "accedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dm")), "search_acc")), "fieldbyname", ["acc_no"])), "asstring")));
  await $.mset((await $.v(C, "innedit")), "Text", (await $.mv((await $.v(C, "inndbedit")), "Text")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomers_orders_arest", "CombonameChange", async function CombonameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t2 = (await $.mv((await $.v(C, "dm")), "Bankm"));
      await $.stmt($.wcall([$t2], "Close", [], C));
      await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add("Select * From BankM Where ID= ", (await $.wcall([$t2], "IntToStr", [(await $.idx((await $.wv([$t2], "Rate", C, false)), [(await $.mv((await $.wv([$t2], "comboname", C, false)), "ItemIndex"))]))], C))));
      await $.stmt($.wcall([$t2], "Open", [], C));
      await $.mset((await $.wv([$t2], "editcode", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "editvoin", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Editacc", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t2], "Editswift", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["SWIFT"], C)), "AsString")));
    }
  } finally {
    {
      const $t3 = (await $.mv((await $.v(C, "dm")), "Bankm"));
      await $.stmt($.wcall([$t3], "Close", [], C));
      await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", "Select * From BankM ");
      await $.stmt($.wcall([$t3], "Open", [], C));
      await $.stmt($.wcall([$t3], "refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomers_orders_arest", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "dm")), "search_acc"));
    if ($.truthy((await $.wv([$t4], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t4], "ShowMessage", ["Hec bir hesab qeyd olunmayib!"], C)));
      return L0.result;
    } else {
      await $.wset([$t4], "check_arest", (await $.mcall((await $.wv([$t4], "Tcheck_arest", C, false)), "create", [Self])), C);
      await $.mcall((await $.wv([$t4], "check_arest", C, false)), "showmodal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcustomers_orders_arest", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t5 = (await $.mv((await $.v(C, "dm")), "valute"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", ["select * from avalute"])));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editval")), "Clear", []);
  { const $t6 = (await $.mv((await $.mv((await $.v(C, "dm")), "valute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t7 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t6))) break;
      {
        const $t8 = (await $.v(C, "editval"));
        await $.stmt((await $.mcall((await $.wv([$t8], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "dm", C, false)), "valute")), "FieldByName", ["val_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "Dm")), "valute")), "Next", []);
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
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t9) => { await $.set(C, "Rate", $t9); }), (await $.mv(L0["dataset"], "RecordCount"))])));
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    { const $t10 = await $.iset((await $.v(C, "Rate")), [L0["rateindex"]], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["idfield"]])), "AsInteger"))); if ($t10 !== undefined) { await $.set(C, "Rate", $t10); } }
    await $.mcall(L0["dataset"], "Next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["rateindex"], async ($t11) => { L0["rateindex"] = $t11; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TCustomers_orders_arest", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.or_(((await $.mv((await $.mv((await $.v(C, "check_arest")), "CheckBox1")), "Checked"))), async () => ((await $.mv((await $.mv((await $.v(C, "check_arest")), "CheckBox2")), "Checked"))))))))) {
    await $.stmt((await $.call(C, "messagedlg", ["Tipacc secin!", (await $.v(C, "mterror")), [(await $.v(C, "mbok"))], 0])));
    await $.stmt((await $.call(C, "SpeedButton3Click", [L0["sender"]])));
  } else {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomers_orders_arest", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "dm"));
    await $.mcall((await $.wv([$t12], "Bankm", C, false)), "open", []);
    await $.stmt($.wcall([$t12], "addvalute", [], C));
    await $.stmt((await $.wcall([$t12], "ComboID", [(await $.wv([$t12], "Bankm", C, false)), "NAME", "ID", (await $.wv([$t12], "comboname", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

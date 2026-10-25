// Generated from UntInterChange.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntInterChange", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "db", "ExtCtrls", "Buttons", "ComCtrls", "MFDataModule", "UntAddWares", "UntMainFacilitiesImpl", "UntRptMainF", "UntDelWares"]);
  const C = [U];
  U.defClass("TFrmInterChange", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "label5": {"name": "Label5", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "dtpchange": {"name": "DTPChange", "type": "TDateTimePicker"}, "rateid": {"name": "RateID", "type": "array"}, "ratename": {"name": "RateName", "type": "array"}, "rateinventar": {"name": "RateInventar", "type": "array"}, "ratebalanceprice": {"name": "RateBalancePrice", "type": "array"}, "changedbalanceprice": {"name": "ChangedBalancePrice", "type": "integer"}, "index": {"name": "index", "type": "Integer"}, "addchanged": {"name": "AddChanged", "type": "Boolean"}, "copyoff": {"name": "CopyOff", "type": "Boolean"}, "groupid": {"name": "GroupID", "type": "Integer"}, "changedname": {"name": "ChangedName", "type": "String"}, "sum": {"name": "sum", "type": "Longint"}}, {});
  U.fieldInit("TFrmInterChange", "rateid", () => []);
  U.fieldInit("TFrmInterChange", "ratename", () => []);
  U.fieldInit("TFrmInterChange", "rateinventar", () => []);
  U.fieldInit("TFrmInterChange", "ratebalanceprice", () => []);
  U.init(async () => {
    U.var_("FrmInterChange", null, "TFrmInterChange");
  });
  U.method("TFrmInterChange", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "index", 0);
  await $.set(C, "sum", 0);
  await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Clear", []);
  await $.mcall((await $.v(C, "ComboBox1")), "Clear", []);
  {
    const $t1 = (await $.mv((await $.v(C, "MainFDataModule")), "ViewGroup"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.stmt($.wcall([$t1], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ComboBox1", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Name"], C)), "AsString"))])));
      await $.stmt($.wcall([$t1], "Next", [], C));
      await $.tick();
    }
  }
  {
    const $t2 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.stmt((await $.wcall([$t2], "SetLength", [$.ref(async () => (await $.wv([$t2], "RateID", C, false)), async ($t3) => { await $.wset([$t2], "RateID", $t3, C); }), (await $.wv([$t2], "RecordCount", C, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetLength", [$.ref(async () => (await $.wv([$t2], "RateName", C, false)), async ($t4) => { await $.wset([$t2], "RateName", $t4, C); }), (await $.wv([$t2], "RecordCount", C, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetLength", [$.ref(async () => (await $.wv([$t2], "RateInventar", C, false)), async ($t5) => { await $.wset([$t2], "RateInventar", $t5, C); }), (await $.wv([$t2], "RecordCount", C, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetLength", [$.ref(async () => (await $.wv([$t2], "RateBalancePrice", C, false)), async ($t6) => { await $.wset([$t2], "RateBalancePrice", $t6, C); }), (await $.wv([$t2], "RecordCount", C, false))], C)));
    await $.stmt($.wcall([$t2], "First", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "str": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to change this commodity?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    L0["str"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["name"])), "AsString"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [L0["str"]])));
    await $.set(C, "CopyOff", true);
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "RateID"))]))))) {
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateID")), async ($t7) => { await $.set(C, "RateID", $t7); }), (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "RecordCount"))])));
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateName")), async ($t8) => { await $.set(C, "RateName", $t8); }), (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "RecordCount"))])));
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateInventar")), async ($t9) => { await $.set(C, "RateInventar", $t9); }), (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "RecordCount"))])));
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateBalancePrice")), async ($t10) => { await $.set(C, "RateBalancePrice", $t10); }), (await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "RecordCount"))])));
      await $.set(C, "index", 0);
      { const $t11 = await $.iset((await $.v(C, "RateID")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["ID"])), "AsInteger"))); if ($t11 !== undefined) { await $.set(C, "RateID", $t11); } }
      { const $t12 = await $.iset((await $.v(C, "RateName")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["NAME"])), "AsString"))); if ($t12 !== undefined) { await $.set(C, "RateName", $t12); } }
      { const $t13 = await $.iset((await $.v(C, "RateInventar")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["INVENTAR"])), "AsString"))); if ($t13 !== undefined) { await $.set(C, "RateInventar", $t13); } }
      { const $t14 = await $.iset((await $.v(C, "RateBalancePrice")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["BALANCE_PRICE"])), "AsInteger"))); if ($t14 !== undefined) { await $.set(C, "RateBalancePrice", $t14); } }
      await $.mcall((await $.v(C, "FrmDelWares")), "ShowModal", []);
      await $.set(C, "sum", $.add((await $.v(C, "sum")), (await $.idx((await $.v(C, "RateBalancePrice")), [(await $.v(C, "index"))]))));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.v(C, "index")), async ($t15) => { await $.set(C, "index", $t15); })])));
    } else {
      { const $t16 = await $.iset((await $.v(C, "RateID")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["ID"])), "AsInteger"))); if ($t16 !== undefined) { await $.set(C, "RateID", $t16); } }
      { const $t17 = await $.iset((await $.v(C, "RateName")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["NAME"])), "AsString"))); if ($t17 !== undefined) { await $.set(C, "RateName", $t17); } }
      { const $t18 = await $.iset((await $.v(C, "RateInventar")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["INVENTAR"])), "AsString"))); if ($t18 !== undefined) { await $.set(C, "RateInventar", $t18); } }
      { const $t19 = await $.iset((await $.v(C, "RateBalancePrice")), [(await $.v(C, "index"))], (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "FieldByName", ["BALANCE_PRICE"])), "AsInteger"))); if ($t19 !== undefined) { await $.set(C, "RateBalancePrice", $t19); } }
      await $.set(C, "sum", $.add((await $.v(C, "sum")), (await $.idx((await $.v(C, "RateBalancePrice")), [(await $.v(C, "index"))]))));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.v(C, "index")), async ($t20) => { await $.set(C, "index", $t20); })])));
      await $.mcall((await $.v(C, "FrmDelWares")), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmInterChange", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["CHANGE?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.mset((await $.v(C, "MainFacilities")), "PushKey", 1);
  }
  await $.set(C, "AddChanged", true);
  await $.mcall((await $.v(C, "FrmAddWares")), "ShowModal", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "Open", []);
  { const $t21 = $.sub((await $.v(C, "index")), 1);
    L0["i"] = 0;
    let $t22 = true;
    for (;;) {
      if (!$t22) { L0["i"] = $.succ(L0["i"], 1); }
      $t22 = false;
      if (!($.ord(L0["i"]) <= $.ord($t21))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallProcedure", ["delete_wares", [(await $.idx((await $.v(C, "RateID")), [L0["i"]]))]])));
      await $.tick();
    }
  }
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewWares")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "Refresh", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateID")), async ($t23) => { await $.set(C, "RateID", $t23); }), 0])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateName")), async ($t24) => { await $.set(C, "RateName", $t24); }), 0])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateInventar")), async ($t25) => { await $.set(C, "RateInventar", $t25); }), 0])));
  await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "sum", 0);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "Refresh", []);
  await $.mset((await $.v(C, "DTPChange")), "DateTime", (await $.v(C, "now")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSTakeGroupID"));
    await $.stmt($.wcall([$t26], "Close", [], C));
    await $.stmt((await $.wcall([$t26], "SetVariable", ["Gname", (await $.mv((await $.wv([$t26], "ComboBox1", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t26], "Open", [], C));
    await $.wset([$t26], "GroupID", (await $.mv((await $.wcall([$t26], "FieldByName", ["ID"], C)), "AsInteger")), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "d": 0, "takenid": '', "takenname": '', "takeninventar": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["CHANGE?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
      await $.mset((await $.v(C, "Edit1")), "Text", "0");
    } else {
      await $.set(C, "sum", $.add((await $.v(C, "sum")), (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "Text"))]))));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit3")), "Text")), ""))) {
      await $.mset((await $.v(C, "Edit3")), "Text", "0");
    } else {
      await $.set(C, "sum", $.sub((await $.v(C, "sum")), (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit3")), "Text"))]))));
    }
    await $.set(C, "AddChanged", true);
    if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Show the group!"])));
      $.abort();
    }
    L0["d"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPChange")), "DateTime"))]));
    await $.mset((await $.v(C, "MainFacilities")), "PushKey", 1);
    await $.set(C, "ChangedName", (await $.mv((await $.v(C, "Edit2")), "Text")));
    await $.mcall((await $.v(C, "FrmAddWares")), "ShowModal", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "Open", []);
    L0["takenid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "FieldByName", ["ID"])), "AsString"));
    L0["takenname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "FieldByName", ["Name"])), "AsString"));
    L0["takeninventar"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "FieldByName", ["Inventar"])), "AsString"));
    { const $t27 = $.sub((await $.v(C, "index")), 1);
      L0["i"] = 0;
      let $t28 = true;
      for (;;) {
        if (!$t28) { L0["i"] = $.succ(L0["i"], 1); }
        $t28 = false;
        if (!($.ord(L0["i"]) <= $.ord($t27))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallProcedure", ["add_interchange", [(await $.idx((await $.v(C, "RateID")), [L0["i"]])), (await $.idx((await $.v(C, "RateName")), [L0["i"]])), (await $.idx((await $.v(C, "RateInventar")), [L0["i"]])), (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), L0["takenid"], L0["takenname"], L0["takeninventar"], (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit3")), "Text"))])), L0["d"]]])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallProcedure", ["delete_wares", [(await $.idx((await $.v(C, "RateID")), [L0["i"]]))]])));
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewWares")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSInterChange")), "Refresh", []);
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateID")), async ($t29) => { await $.set(C, "RateID", $t29); }), 0])));
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateName")), async ($t30) => { await $.set(C, "RateName", $t30); }), 0])));
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateInventar")), async ($t31) => { await $.set(C, "RateInventar", $t31); }), 0])));
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateBalancePrice")), async ($t32) => { await $.set(C, "RateBalancePrice", $t32); }), 0])));
    await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSChangeArchive")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWaresID")), "Close", []);
    { const $t33 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["j"] = 0;
      let $t34 = true;
      for (;;) {
        if (!$t34) { L0["j"] = $.succ(L0["j"], 1); }
        $t34 = false;
        if (!($.ord(L0["j"]) <= $.ord($t33))) break;
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["j"]])), "TEdit")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["j"]])), "Text", "");
        }
        await $.tick();
      }
    }
    await $.set(C, "sum", 0);
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateID")), async ($t35) => { await $.set(C, "RateID", $t35); }), 0])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateName")), async ($t36) => { await $.set(C, "RateName", $t36); }), 0])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateInventar")), async ($t37) => { await $.set(C, "RateInventar", $t37); }), 0])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "RateBalancePrice")), async ($t38) => { await $.set(C, "RateBalancePrice", $t38); }), 0])));
  await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Clear", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmInterChange", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSChangeArchive")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

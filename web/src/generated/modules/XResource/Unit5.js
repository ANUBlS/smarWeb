// Generated from Unit5.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit5", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "sboapiDataModuleImpl", "group", "datamod1", "Grids", "DBGrids", "StdCtrls", "ExtCtrls"]);
  const C = [U];
  U.defClass("TForm5", "TForm", {"panelm": {"name": "PanelM", "type": "TPanel"}, "groupboxname": {"name": "GroupBoxName", "type": "TGroupBox"}, "editgroupname": {"name": "EditGroupName", "type": "TEdit"}, "groupboxnbpercent": {"name": "GroupBoxNBPercent", "type": "TGroupBox"}, "editpercentnb": {"name": "EditPercentNB", "type": "TEdit"}, "groupboxdebtacc": {"name": "GroupBoxDebtAcc", "type": "TGroupBox"}, "debtacc": {"name": "DebtAcc", "type": "TComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupboxcredacc": {"name": "GroupBoxCredAcc", "type": "TGroupBox"}, "credacc": {"name": "CredAcc", "type": "TComboBox"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "groupbox_main_acc": {"name": "GroupBox_main_acc", "type": "TGroupBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "mainacc": {"name": "Mainacc", "type": "TComboBox"}, "groupbox_sale_acc": {"name": "GroupBox_sale_acc", "type": "TGroupBox"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "saleacc": {"name": "SaleAcc", "type": "TComboBox"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Form5", null, "TForm5");
  });
  U.method("TForm5", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit3")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "mainresoursce")), "CallProcedure", ["add_group", [(await $.mv((await $.v(C, "EditGroupName")), "Text")), (await $.mv((await $.v(C, "EditPercentNB")), "Text")), (await $.mv((await $.v(C, "mainacc")), "Text")), (await $.mv((await $.v(C, "DebtAcc")), "Text")), (await $.mv((await $.v(C, "CredAcc")), "Text")), (await $.mv((await $.v(C, "SaleAcc")), "Text"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "Refresh", []);
    await $.stmt($.call(C, "close", []));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataMod")), "addgroup"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["a", (await $.mv((await $.wv([$t1], "edit1", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "addgroup")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DebtAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "DataMod")), "addgroup"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["a", (await $.mv((await $.wv([$t2], "edit2", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "addgroup")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Mainacc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataMod")), "addgroup"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["a", (await $.mv((await $.wv([$t3], "edit3", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "addgroup")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CredAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Edit4Change", async function Edit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "DataMod")), "addgroup"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["a", (await $.mv((await $.wv([$t4], "edit4", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "addgroup")), "eof"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SaleAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "FieldByName", ["acc_no"])), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "addgroup")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

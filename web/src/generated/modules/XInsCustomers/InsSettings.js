// Generated from InsSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsSettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "DBViewComboBox", "Mask", "DBCtrls", "ExtCtrls", "DB", "Grids", "DBGrids", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmSettings", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "dbnavigator5": {"name": "DBNavigator5", "type": "TDBNavigator"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbnavigator7": {"name": "DBNavigator7", "type": "TDBNavigator"}, "dbgrid7": {"name": "DBGrid7", "type": "TDBGrid"}, "dbnavigator4": {"name": "DBNavigator4", "type": "TDBNavigator"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "dbnavigator6": {"name": "DBNavigator6", "type": "TDBNavigator"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "dbnavigator8": {"name": "DBNavigator8", "type": "TDBNavigator"}, "dbgrid8": {"name": "DBGrid8", "type": "TDBGrid"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "gridpsettings": {"name": "GridPSettings", "type": "TDBGrid"}, "dbnavigator9": {"name": "DBNavigator9", "type": "TDBNavigator"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgrid9": {"name": "DBGrid9", "type": "TDBGrid"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbgrid10": {"name": "DBGrid10", "type": "TDBGrid"}, "dbnavigator10": {"name": "DBNavigator10", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.const("caPost", (await $.v(C, "mrOk")));
    U.const("caCancel", (await $.v(C, "mrCancel")));
    U.var_("fmSettings", null, "TfmSettings");
  });
  U.method("TfmSettings", "SaveAndCloseDataset", async function SaveAndCloseDataset(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "caction": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "caction"]);
  if ($.truthy(($.eq((await $.mv(L0["sender"], "State")), (await $.v(C, "dsEdit")))))) {
    { const $t1 = L0["caction"];
      if ($.eq($t1, (await $.v(C, "caPost")))) {
        await $.mcall(L0["sender"], "Post", []);
      }
      else if ($.eq($t1, (await $.v(C, "caCancel")))) {
        await $.mcall(L0["sender"], "Cancel", []);
      }
    }
  }
  await $.mcall(L0["sender"], "Close", []);
  return L0.result;
}, {"params": ["sender", "cAction"], "kind": "procedure", "ptypes": ["TDataSet", "Integer"]});
  U.method("TfmSettings", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["closelinkedtables"] = $.fn(async function CloseLinkedTables(p0, p1) {
  const L1 = {"cname": $.copyArg(p0), "caction": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L1, ["cname", "caction"]);
  {
    const $t2 = L1["cname"];
    { const $t3 = $.sub((await $.wv([$t2], "ControlCount", C, false)), 1);
      await $.wset([$t2], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "TCustomControl")))) {
          await $.stmt((await $.wcall([$t2], "CloseLinkedTables", [(await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t2], "cAction", { get: async () => L1["caction"], set: async (v) => { L1["caction"] = v; }, local: true }, false))], { get: async () => L0["closelinkedtables"], set: async (v) => { L0["closelinkedtables"] = v; }, local: true })));
        }
        if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "TDBgrid")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))), "tag")), 0))) {
            await $.stmt((await $.wcall([$t2], "SaveAndCloseDataset", [(await $.mv((await $.mv(((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))), "DataSource")), "DataSet")), (await $.wv([$t2], "cAction", { get: async () => L1["caction"], set: async (v) => { L1["caction"] = v; }, local: true }, false))], C)));
          }
        }
        await $.tick();
      }
    }
  }
  return L1.result;
});
  {
    const $t5 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.wcall([$t5], "CloseLinkedTables", [(await $.wv([$t5], "TabSheet1", C, false)), (await $.wv([$t5], "ModalResult", C, false))], { get: async () => L0["closelinkedtables"], set: async (v) => { L0["closelinkedtables"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5], "CloseLinkedTables", [(await $.wv([$t5], "TabSheet2", C, false)), (await $.wv([$t5], "ModalResult", C, false))], { get: async () => L0["closelinkedtables"], set: async (v) => { L0["closelinkedtables"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5], "CloseLinkedTables", [(await $.wv([$t5], "TabSheet3", C, false)), (await $.wv([$t5], "ModalResult", C, false))], { get: async () => L0["closelinkedtables"], set: async (v) => { L0["closelinkedtables"] = v; }, local: true })));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfmSettings", "TabSheet3Show", async function TabSheet3Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "InsDataMod"));
    await $.mset((await $.wv([$t6], "CheckBox1", C, false)), "Checked", (await $.mcall((await $.wv([$t6], "OPCOMMON", C, false)), "CallIntegerFunction", ["disablepolicies", []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmSettings", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t7], "OPCOMMON", C, false)), "CallIntegerFunction", ["disablepolicies", [(await $.wcall([$t7], "Integer", [(await $.mv((await $.wv([$t7], "CheckBox1", C, false)), "Checked"))], C))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmSettings", "CheckBox1KeyPress", async function CheckBox1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CheckBox1Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmSettings", "CheckBox1KeyUp", async function CheckBox1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "CheckBox1Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfmSettings", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "InsDataMod"));
    await $.mset((await $.wv([$t8], "ODSInsurances", C, false)), "Filtered", (await $.mv((await $.wv([$t8], "CheckBox2", C, false)), "Checked")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

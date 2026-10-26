// Generated from ExpCustomersTypeUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpCustomersTypeUnit", ["Windows", "Messages", "SysUtils", "variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "ExtCtrls", "ComCtrls", "ImgList", "XFSCtrls", "ExpDataModuleUnit", "ExpUnitImpl", "ExpUnitNewImpl", "UnitPayments", "UnitPaymentsCredit", "ExpressDecls", "EpxVesterUnionUnit"]);
  const C = [U];
  U.defClass("TExpCustomersType", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "treeview1": {"name": "TreeView1", "type": "TTreeView"}, "typecode": {"name": "typecode", "type": "Integer"}, "typetext": {"name": "typetext", "type": "String"}}, {});
  U.init(async () => {
    U.var_("ExpCustomersType", null, "TExpCustomersType");
  });
  U.method("TExpCustomersType", "LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TExpCustomersType", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsexpcaption"] = "(Yeni)";
  await $.mcall((await $.v(C, "ExpCustomersType")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["EXPRESS_ADD"]])));
  await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpCustomersType", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TExpCustomersType", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mytreenode1": null, "mytreenode2": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "Clear", []);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    await $.mcall((await $.wv([$t1], "ExpTypeDataSet", C, false)), "First", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t1], "ExpTypeDataSet", C, false)), "Eof"))))) {
      await $.wset([$t1], "MyTreeNode1", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [null, (await $.mv((await $.mcall((await $.wv([$t1], "ExpTypeDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true });
      await $.mset((await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), "ImageIndex", 0);
      await $.mset((await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), "SelectedIndex", 1);
      await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "First", []);
      while ($.truthy($.not((await $.mv((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "Eof"))))) {
        { const $t2 = (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["id"])), "AsInteger"));
          if ($.eq($t2, 1)) {
            await $.wset([$t1], "MyTreeNode2", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "ImageIndex", 2);
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "SelectedIndex", 2);
          }
          else if ($.eq($t2, 4)) {
            await $.wset([$t1], "MyTreeNode2", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "ImageIndex", 4);
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "SelectedIndex", 4);
          }
          else if ($.eq($t2, 5)) {
            await $.wset([$t1], "MyTreeNode2", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "ImageIndex", 5);
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "SelectedIndex", 5);
          }
          else if ($.eq($t2, 6)) {
            await $.wset([$t1], "MyTreeNode2", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "ImageIndex", 6);
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "SelectedIndex", 6);
          }
          else if ($.eq($t2, 7)) {
            await $.wset([$t1], "MyTreeNode2", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "ImageIndex", 7);
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "SelectedIndex", 7);
          }
          else if ($.eq($t2, 8)) {
            await $.wset([$t1], "MyTreeNode2", (await $.mcall((await $.mv((await $.wv([$t1], "TreeView1", C, false)), "Items")), "AddChild", [(await $.wv([$t1], "MyTreeNode1", { get: async () => L0["mytreenode1"], set: async (v) => { L0["mytreenode1"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "FieldByName", ["name"])), "AsString"))])), { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true });
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "ImageIndex", 8);
            await $.mset((await $.wv([$t1], "MyTreeNode2", { get: async () => L0["mytreenode2"], set: async (v) => { L0["mytreenode2"] = v; }, local: true }, false)), "SelectedIndex", 8);
          }
        }
        await $.mcall((await $.wv([$t1], "ExpSettingsDataSet", C, false)), "Next", []);
        await $.tick();
      }
      await $.mcall((await $.wv([$t1], "ExpTypeDataSet", C, false)), "Next", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "TreeView1")), "FullExpand", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpCustomersType", "TreeView1Change", async function TreeView1Change(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "node"]);
  await $.set(C, "typecode", (await $.mv(L0["node"], "ImageIndex")));
  await $.set(C, "typetext", (await $.mv(L0["node"], "Text")));
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TExpCustomersType", "TreeView1DblClick", async function TreeView1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_groups": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.v(C, "typecode")), 2)), async () => ($.eq((await $.v(C, "typecode")), 4)))), async () => ($.eq((await $.v(C, "typecode")), 5)))), async () => ($.eq((await $.v(C, "typecode")), 6)))), async () => ($.eq((await $.v(C, "typecode")), 7)))), async () => ($.eq((await $.v(C, "typecode")), 8)))))) {
    {
      const $t3 = (await $.v(C, "ExpDataModule"));
      const $t4 = (await $.wv([$t3], "ExpGroupsDataset", C, false));
      await $.stmt($.wcall([$t3, $t4], "close", [], C));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["name", (await $.wv([$t3, $t4], "typetext", C, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "Open", [], C));
      await $.wset([$t3, $t4], "v_groups", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["groups"], C)), "AsInteger")), { get: async () => L0["v_groups"], set: async (v) => { L0["v_groups"] = v; }, local: true });
    }
    { const $t5 = L0["v_groups"];
      if ($.eq($t5, 1)) {
        {
          const $t6 = (await $.v(C, "ExpFormNew"));
          const $t7 = (await $.wv([$t6], "ExpDataModule", C, false));
          await $.mset((await $.wv([$t6, $t7], "PageControl1", C, false)), "ActivePageIndex", 0);
          await $.mset((await $.wv([$t6, $t7], "ExpressVariables", C, false)), "exid", 1);
          await $.wset([$t6, $t7], "FForm", 0, C);
          await $.mset((await $.wv([$t6, $t7], "Button1", C, false)), "Visible", (await $.wv([$t6, $t7], "True", C, false)));
          await $.mset((await $.wv([$t6, $t7], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t6, $t7], "False", C, false)));
          await $.stmt($.wcall([$t6, $t7], "ShowModal", [], C));
        }
      }
      else if ($.eq($t5, 2)) {
        {
          const $t8 = (await $.v(C, "ExpDataModule"));
          const $t9 = (await $.wv([$t8], "Formpayments", C, false));
          await $.wset([$t8, $t9], "exid", 2, C);
          await $.wset([$t8, $t9], "FForm", 0, C);
          await $.mset((await $.wv([$t8, $t9], "ExpSetDataSet", C, false)), "Filter", $.add("name=", (await $.wcall([$t8, $t9], "QUOTEDSTR", [(await $.wv([$t8, $t9], "typetext", C, false))], C))));
          await $.mset((await $.wv([$t8, $t9], "ExpSetDataSet", C, false)), "Filtered", (await $.wv([$t8, $t9], "true", C, false)));
          await $.wset([$t8, $t9], "Optype", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ExpSetDataSet", C, false)), "FieldByName", ["id"])), "AsInteger")), C);
          await $.mset((await $.wv([$t8, $t9], "FormPaymentsCredit", C, false)), "optype", (await $.mv((await $.mcall((await $.wv([$t8, $t9], "ExpSetDataSet", C, false)), "FieldByName", ["id"])), "AsInteger")));
          if ($.truthy($.eq((await $.wv([$t8, $t9], "typetext", C, false)), "Təcili pul köçürmə sistemi"))) {
            await $.mset((await $.wv([$t8, $t9], "FormVesterUnion", C, false)), "FInsert", 0);
            await $.mset((await $.wv([$t8, $t9], "FormVesterUnion", C, false)), "pexid", 2);
            await $.mset((await $.mv((await $.wv([$t8, $t9], "FormVesterUnion", C, false)), "SpeedButton4")), "Visible", (await $.wv([$t8, $t9], "True", C, false)));
            await $.mset((await $.wv([$t8, $t9], "FormVesterUnion", C, false)), "poptype", (await $.mv((await $.wv([$t8, $t9], "FormPaymentsCredit", C, false)), "optype")));
            await $.stmt((await $.wcall([$t8, $t9], "LoadPlugin", ["Sb_General.bpl", "FormCusNom"], C)));
            await $.mcall((await $.wv([$t8, $t9], "FormVesterUnion", C, false)), "ShowModal", []);
          } else {
            if ($.truthy($.eq((await $.wv([$t8, $t9], "typetext", C, false)), "Hesaba Mədaxil"))) {
              await $.mset((await $.wv([$t8, $t9], "ExpressVariables", C, false)), "exid", 2);
              await $.mset((await $.wv([$t8, $t9], "FormPaymentsCredit", C, false)), "FForm", 0);
              await $.mcall((await $.wv([$t8, $t9], "FormPaymentsCredit", C, false)), "ShowModal", []);
            } else {
              if ($.truthy($.eq((await $.wv([$t8, $t9], "typetext", C, false)), "Möhkəmləndirmə"))) {
                await $.mset((await $.wv([$t8, $t9], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t8, $t9], "True", C, false)));
                await $.mset((await $.wv([$t8, $t9], "DBLookupComboBox2", C, false)), "KeyValue", (-(1)));
                await $.mset((await $.wv([$t8, $t9], "Panel7", C, false)), "Visible", (await $.wv([$t8, $t9], "False", C, false)));
                await $.mset((await $.wv([$t8, $t9], "Label7", C, false)), "Visible", (await $.wv([$t8, $t9], "False", C, false)));
              } else {
                await $.mset((await $.wv([$t8, $t9], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t8, $t9], "False", C, false)));
                await $.mset((await $.wv([$t8, $t9], "DBLookupComboBox2", C, false)), "KeyValue", 0);
                await $.mset((await $.wv([$t8, $t9], "Panel7", C, false)), "Visible", (await $.wv([$t8, $t9], "True", C, false)));
                await $.mset((await $.wv([$t8, $t9], "Label7", C, false)), "Visible", (await $.wv([$t8, $t9], "True", C, false)));
              }
              await $.stmt($.wcall([$t8, $t9], "ShowModal", [], C));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

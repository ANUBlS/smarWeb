// Generated from PropStorageEditEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PropStorageEditEh", ["PropStorageEh", "PropFilerEh", "StdCtrls", "ComCtrls", "Buttons", "Controls", "Forms", "ImgList", "CheckLst", "ExtCtrls", "Windows", "SysUtils", "TypInfo", "Classes"]);
  const C = [U];
  U.const("nthProperty", 0);
  U.const("nthControl", 1);
  U.const("nthPropNode", 2);
  $.defRecord("tnodeinfoeh", {"checked": () => 0, "instance": () => null, "nodetype": () => null, "isvoidproperty": () => false, "name": () => '', "path": () => ''});
  U.defClass("TPropStorageEditEhForm", "TForm", {"spaddprop": {"name": "spAddProp", "type": "TSpeedButton"}, "sbremoveallprops": {"name": "sbRemoveAllProps", "type": "TSpeedButton"}, "sbremoveprop": {"name": "sbRemoveProp", "type": "TSpeedButton"}, "treeview1": {"name": "TreeView1", "type": "TTreeView"}, "treeview2": {"name": "TreeView2", "type": "TTreeView"}, "bok": {"name": "bOk", "type": "TButton"}, "bcancel": {"name": "bCancel", "type": "TButton"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cbpredifinedprops": {"name": "cbPredifinedProps", "type": "TCheckListBox"}, "lcompsandprops": {"name": "lCompsAndProps", "type": "TLabel"}, "lstoredprops": {"name": "lStoredProps", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "spsynchtrees": {"name": "spSynchTrees", "type": "TSpeedButton"}, "leftborderwidth": {"name": "LeftBorderWidth", "type": "Integer"}, "rightborderwidth": {"name": "RightBorderWidth", "type": "Integer"}, "buttonsize": {"name": "ButtonSize", "type": "Integer"}, "vbottommargin": {"name": "VBottomMargin", "type": "Integer"}, "onicondownnode": {"name": "OnIconDownNode", "type": "TTreeNode"}, "propstorage": {"name": "PropStorage", "type": "TPropStorageEh"}, "rootnode": {"name": "RootNode", "type": "TTreeNode"}, "startbuildticks": {"name": "StartBuildTicks", "type": "LongWord"}}, {});
  U.defClass("TPredifinedPropsEh", null, {"fckecked": {"name": "FCkecked", "type": "Boolean"}, "feditform": {"name": "FEditForm", "type": "TPropStorageEditEhForm"}}, {});
  U.defClass("TPredifinedActiveControlEh", "TPredifinedPropsEh", {"factivecontroladded": {"name": "FActiveControlAdded", "type": "Boolean"}}, {});
  U.defClass("TPredifinedPosPropertiesEh", "TPredifinedPropsEh", {"fleftadded": {"name": "FLeftAdded", "type": "Boolean"}, "ftopadded": {"name": "FTopAdded", "type": "Boolean"}}, {});
  U.defClass("TPredifinedSizePropertiesEh", "TPredifinedPropsEh", {"fheightadded": {"name": "FHeightAdded", "type": "Boolean"}, "fpixelsperinchadded": {"name": "FPixelsPerInchAdded", "type": "Boolean"}, "fwidthadded": {"name": "FWidthAdded", "type": "Boolean"}}, {});
  U.defClass("TPredifinedStatePropertiesEh", "TPredifinedPropsEh", {"fstateadded": {"name": "FStateAdded", "type": "Boolean"}}, {});
  U.defClass("TComponentCrack", "TComponent", {}, {});
  U.init(async () => {
    U.var_("PredifinedPropsClassList", null, "TList");
  });
  U.func("EditPropStorage", async function EditPropStorage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propstorage": $.copyArg(p0), result: false, "propstorageeditor": null, "oldcursor": null, "ticks": 0};
  await $.fixArgs(L0, ["propstorage"]);
  L0["ticks"] = (await $.v(C, "GetTickCount"));
  L0["result"] = false;
  L0["propstorageeditor"] = (await $.mcall((await $.v(C, "TPropStorageEditEhForm")), "Create", [(await $.v(C, "Application"))]));
  await $.mset(L0["propstorageeditor"], "PropStorage", L0["propstorage"]);
  L0["oldcursor"] = (await $.mv((await $.v(C, "Screen")), "Cursor"));
  try {
    await $.mset(L0["propstorageeditor"], "StartBuildTicks", (await $.v(C, "GetTickCount")));
    await $.mcall(L0["propstorageeditor"], "BuildPropertyList", []);
    await $.mcall(L0["propstorageeditor"], "BuildPredifinedProps", []);
    await $.stmt((await $.mcall(L0["propstorageeditor"], "BuildStoringPropertyList", [(await $.mv(L0["propstorage"], "StoredProps"))])));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", L0["oldcursor"]);
  }
  await $.mset((await $.mv(L0["propstorageeditor"], "Edit1")), "Text", (await $.call(C, "IntToStr", [$.sub((await $.v(C, "GetTickCount")), L0["ticks"])])));
  try {
    if ($.truthy($.eq((await $.mv(L0["propstorageeditor"], "ShowModal")), (await $.v(C, "mrOk"))))) {
      await $.stmt((await $.mcall(L0["propstorageeditor"], "GetStoringPorps", [(await $.mv(L0["propstorage"], "StoredProps"))])));
      L0["result"] = true;
    }
  } finally {
    await $.mcall(L0["propstorageeditor"], "Free", []);
  }
  return L0.result;
}, {"params": ["PropStorage"], "kind": "function", "ptypes": ["TPropStorageEh"]});
  U.func("RegisterPredifinedPropsClass", async function RegisterPredifinedPropsClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"propsclass": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["propsclass"]);
  await $.stmt((await $.mcall((await $.v(C, "PredifinedPropsClassList")), "Add", [L0["propsclass"]])));
  return L0.result;
}, {"params": ["PropsClass"], "kind": "procedure", "ptypes": ["TPredifinedPropsEhClass"]});
  U.func("CompareNodeInfo", async function CompareNodeInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pni1": $.copyArg(p0), "pni2": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["pni1", "pni2"]);
  L0["result"] = (await $.and_(($.eq((await $.mv(L0["pni1"], "Name")), (await $.mv(L0["pni2"], "Name")))), async () => ($.eq((await $.mv(L0["pni1"], "NodeType")), (await $.mv(L0["pni2"], "NodeType"))))));
  return L0.result;
}, {"params": ["Pni1", "Pni2"], "kind": "function", "ptypes": ["PNodeInfoEh", "PNodeInfoEh"]});
  U.method("TPropStorageEditEhForm", "TreeView1MouseDown", async function TreeView1MouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy(($.in_((await $.v(C, "htOnIcon")), (await $.mcall((await $.v(C, "TreeView1")), "GetHitTestInfoAt", [L0["x"], L0["y"]])))))) {
    await $.set(C, "OnIconDownNode", (await $.mcall((await $.v(C, "TreeView1")), "GetNodeAt", [L0["x"], L0["y"]])));
    if ($.truthy($.lt((await $.mv((await $.v(C, "OnIconDownNode")), "ImageIndex")), 8))) {
      await $.mset((await $.v(C, "OnIconDownNode")), "ImageIndex", $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.v(C, "OnIconDownNode")), "Data"))])), "Checked")), 4));
      await $.mset((await $.v(C, "OnIconDownNode")), "SelectedIndex", $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.v(C, "OnIconDownNode")), "Data"))])), "Checked")), 4));
    } else {
      await $.set(C, "OnIconDownNode", null);
    }
  } else {
    await $.set(C, "OnIconDownNode", null);
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "TreeView1MouseMove", async function TreeView1MouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  if ($.truthy(($.ne((await $.v(C, "OnIconDownNode")), null)))) {
    if ($.truthy((await $.and_(($.in_((await $.v(C, "htOnIcon")), (await $.mcall((await $.v(C, "TreeView1")), "GetHitTestInfoAt", [L0["x"], L0["y"]])))), async () => ($.eq((await $.mcall((await $.v(C, "TreeView1")), "GetNodeAt", [L0["x"], L0["y"]])), (await $.v(C, "OnIconDownNode")))))))) {
      await $.mset((await $.v(C, "OnIconDownNode")), "ImageIndex", $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.v(C, "OnIconDownNode")), "Data"))])), "Checked")), 4));
      await $.mset((await $.v(C, "OnIconDownNode")), "SelectedIndex", $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.v(C, "OnIconDownNode")), "Data"))])), "Checked")), 4));
    } else {
      await $.mset((await $.v(C, "OnIconDownNode")), "ImageIndex", (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.v(C, "OnIconDownNode")), "Data"))])), "Checked")));
      await $.mset((await $.v(C, "OnIconDownNode")), "SelectedIndex", (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.v(C, "OnIconDownNode")), "Data"))])), "Checked")));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "TreeView1MouseUp", async function TreeView1MouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy(($.ne((await $.v(C, "OnIconDownNode")), null)))) {
    if ($.truthy((await $.and_(($.in_((await $.v(C, "htOnIcon")), (await $.mcall((await $.v(C, "TreeView1")), "GetHitTestInfoAt", [L0["x"], L0["y"]])))), async () => ($.eq((await $.mcall((await $.v(C, "TreeView1")), "GetNodeAt", [L0["x"], L0["y"]])), (await $.v(C, "OnIconDownNode")))))))) {
      await $.stmt((await $.call(C, "MainToggle", [(await $.v(C, "OnIconDownNode"))])));
      await $.mcall((await $.v(C, "TreeView1")), "Invalidate", []);
      await $.set(C, "OnIconDownNode", null);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "MainToggle", async function MainToggle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["n"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty"))))))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked")), 1))) {
    await $.stmt((await $.call(C, "MainAddPropertyNode", [L0["n"]])));
  } else {
    await $.stmt((await $.call(C, "MainDeletePropertyNode", [L0["n"]])));
  }
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "MainAddPropertyNode", async function MainAddPropertyNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["n"]);
  if ($.truthy((await $.or_($.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty"))))), async () => ($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked")), 1)))))) {
    return L0.result;
  }
  try {
    await $.mset(L0["n"], "ImageIndex", 1);
    await $.mset(L0["n"], "SelectedIndex", 1);
    await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked", 1);
    await $.stmt((await $.call(C, "AddPropertyNode", [L0["n"]])));
    await $.stmt((await $.call(C, "AddParentChecked", [L0["n"]])));
    await $.stmt((await $.call(C, "ResetChildNodes", [L0["n"]])));
  } finally {
  }
  await $.stmt($.call(C, "UpdateButtonState", []));
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "MainAddPropertyNode", async function MainAddPropertyNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.copyArg(p0), result: undefined, "token": '', "pterm": '', "node": null, "nodetype": null};
  await $.fixArgs(L0, ["path"]);
  L0["token"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
  L0["node"] = (await $.mv((await $.mv((await $.v(C, "TreeView1")), "Items")), "GetFirstNode"));
  L0["nodetype"] = (await $.v(C, "nthControl"));
  if ($.truthy($.eq((await $.call(C, "AnsiUpperCase", [L0["token"]])), "<P>"))) {
    L0["token"] = "<Form>";
  } else {
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t1) => { L0["path"] = $t1; }), 1, $.add((await $.call(C, "Length", [L0["token"]])), 1)])));
    if ($.truthy(($.gt((await $.mv(L0["node"], "Count")), 0)))) {
      L0["node"] = (await $.idx((await $.mv(L0["node"], "Item")), [0]));
    } else {
      throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [$.add($.add("Can not expand path - \"", L0["path"]), "\"")])));
    }
  }
  while ($.truthy($.ne(L0["token"], ""))) {
    while ($.truthy(true)) {
      if ($.truthy($.eq(L0["node"], null))) {
        return L0.result;
      }
      if ($.truthy((await $.and_(($.eq((await $.call(C, "AnsiCompareText", [(await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Name")), L0["token"]])), 0)), async () => ($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "NodeType")), L0["nodetype"])))))) {
        if ($.truthy($.ne(L0["path"], ""))) {
          if ($.truthy((await $.and_(($.gt((await $.mv(L0["node"], "Count")), 0)), async () => (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["node"], "Item")), [0])), "Data"))])), "IsVoidProperty")))))) {
            await $.mcall((await $.idx((await $.mv(L0["node"], "Item")), [0])), "Free", []);
            L0["pterm"] = "";
            await $.stmt((await $.call(C, "AddProperties", [L0["node"], (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Instance")), $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Path")), L0["pterm"]), $.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))])));
            if ($.truthy($.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty"))))))) {
              await $.stmt((await $.call(C, "AddComponents", [L0["node"], (await $.call(C, "TComponent", [(await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Instance"))])), $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Path")), L0["pterm"])])));
            }
          }
          if ($.truthy(($.gt((await $.mv(L0["node"], "Count")), 0)))) {
            L0["node"] = (await $.idx((await $.mv(L0["node"], "Item")), [0]));
          } else {
            throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [$.add($.add("Can not expand path - \"", L0["path"]), "\"")])));
          }
        }
        break;
      }
      L0["node"] = (await $.mcall(L0["node"], "GetNextSibling", []));
      if ($.truthy($.eq(L0["node"], null))) {
        return L0.result;
      }
      await $.tick();
    }
    L0["token"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t2) => { L0["path"] = $t2; }), 1, $.add((await $.call(C, "Length", [L0["token"]])), 1)])));
    if ($.truthy($.eq((await $.call(C, "AnsiUpperCase", [L0["token"]])), "<P>"))) {
      if ($.truthy($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "NodeType")), (await $.v(C, "nthPropNode"))))) {
        if ($.truthy(($.gt((await $.mv(L0["node"], "Count")), 0)))) {
          L0["node"] = (await $.idx((await $.mv(L0["node"], "Item")), [0]));
        } else {
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [$.add($.add("Can not expand path - \"", L0["path"]), "\"")])));
        }
      }
      L0["nodetype"] = (await $.v(C, "nthProperty"));
      L0["token"] = (await $.call(C, "GetNextPointSeparatedToken", [L0["path"]]));
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["path"], async ($t3) => { L0["path"] = $t3; }), 1, $.add((await $.call(C, "Length", [L0["token"]])), 1)])));
    }
    await $.tick();
  }
  await $.stmt((await $.call(C, "MainAddPropertyNode", [L0["node"]])));
  return L0.result;
}, {"params": ["Path"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPropStorageEditEhForm", "MainDeletePropertyNode", async function MainDeletePropertyNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["n"]);
  if ($.truthy((await $.or_($.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty"))))), async () => ($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked")), 0)))))) {
    return L0.result;
  }
  try {
    await $.mset(L0["n"], "ImageIndex", 0);
    await $.mset(L0["n"], "SelectedIndex", 0);
    await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked", 0);
    await $.stmt((await $.call(C, "RemovePropertyNode", [L0["n"]])));
    await $.stmt((await $.call(C, "ResetParentNodes", [L0["n"]])));
    await $.stmt((await $.call(C, "ResetChildNodes", [L0["n"]])));
  } finally {
  }
  await $.stmt($.call(C, "UpdateButtonState", []));
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "MainDeletePropertyNode", async function MainDeletePropertyNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["path"]);
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      if ($.truthy($.eq((await $.call(C, "AnsiCompareText", [L0["path"], (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data"))])), "Data"))])), "Path"))])), 0))) {
        await $.stmt((await $.call(C, "MainDeletePropertyNode", [(await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data"))]))])));
        return L0.result;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Path"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPropStorageEditEhForm", "AddPropertyNode", async function AddPropertyNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "nc": null, "nlist": null};
  await $.fixArgs(L0, ["n"]);
  if ($.truthy((await $.call(C, "Assigned", [L0["n"]])))) {
    L0["nlist"] = (await $.mv((await $.v(C, "TList")), "Create"));
    while ($.truthy($.ne(L0["n"], null))) {
      await $.stmt((await $.mcall(L0["nlist"], "Add", [L0["n"]])));
      L0["n"] = (await $.mv(L0["n"], "Parent"));
      await $.tick();
    }
    L0["n"] = null;
    { const $t6 = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t7 = true;
      for (;;) {
        if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
        $t7 = false;
        if (!($.ord(L0["i"]) <= $.ord($t6))) break;
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Parent")), null)), async () => (await $.call(C, "CompareNodeInfo", [(await $.call(C, "PNodeInfoEh", [(await $.mv((await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data"))])), "Data"))])), (await $.call(C, "PNodeInfoEh", [((await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [$.sub((await $.mv(L0["nlist"], "Count")), 1)]))])), "Data")))]))])))))) {
          L0["n"] = (await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]]));
          break;
        }
        await $.tick();
      }
    }
    try {
      if ($.truthy($.eq(L0["n"], null))) {
        { const $t9 = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
          L0["i"] = 0;
          let $t10 = true;
          for (;;) {
            if (!$t10) { L0["i"] = $.succ(L0["i"], 1); }
            $t10 = false;
            if (!($.ord(L0["i"]) <= $.ord($t9))) break;
            if ($.truthy((await $.and_(($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Parent")), null)), async () => ($.gt((await $.mv((await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data"))])), "Index")), (await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [$.sub((await $.mv(L0["nlist"], "Count")), 1)]))])), "Index")))))))) {
              L0["n"] = (await $.mcall((await $.mv((await $.v(C, "TreeView2")), "Items")), "InsertObject", [(await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), (await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [$.sub((await $.mv(L0["nlist"], "Count")), 1)]))])), "Text")), (await $.idx(L0["nlist"], [$.sub((await $.mv(L0["nlist"], "Count")), 1)]))]));
              await $.stmt((await $.call(C, "PropertyAdded", [L0["n"]])));
              $.abort();
            }
            await $.tick();
          }
        }
        L0["n"] = (await $.mcall((await $.mv((await $.v(C, "TreeView2")), "Items")), "AddObject", [null, (await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [$.sub((await $.mv(L0["nlist"], "Count")), 1)]))])), "Text")), (await $.idx(L0["nlist"], [$.sub((await $.mv(L0["nlist"], "Count")), 1)]))]));
        await $.stmt((await $.call(C, "PropertyAdded", [L0["n"]])));
      }
    } catch ($t8) {
      $.rethrowControl($t8);
      if ($.excIs($t8, "EAbort")) {
      }
      else {
        throw $t8;
      }
    }
    { const $t11 = 0;
      L0["i"] = $.sub((await $.mv(L0["nlist"], "Count")), 2);
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["i"] = $.succ(L0["i"], -1); }
        $t12 = false;
        if (!($.ord(L0["i"]) >= $.ord($t11))) break;
        L0["nc"] = (await $.call(C, "FindChildNodeInfo", [L0["n"], (await $.idx(L0["nlist"], [L0["i"]]))]));
        if ($.truthy($.ne(L0["nc"], null))) {
          L0["n"] = L0["nc"];
        } else {
          try {
            { const $t14 = $.sub((await $.mv(L0["n"], "Count")), 1);
              L0["j"] = 0;
              let $t15 = true;
              for (;;) {
                if (!$t15) { L0["j"] = $.succ(L0["j"], 1); }
                $t15 = false;
                if (!($.ord(L0["j"]) <= $.ord($t14))) break;
                if ($.truthy(($.gt((await $.mv((await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["j"]])), "Data"))])), "Index")), (await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [L0["i"]]))])), "Index")))))) {
                  L0["n"] = (await $.mcall((await $.mv((await $.v(C, "TreeView2")), "Items")), "InsertObject", [(await $.idx((await $.mv(L0["n"], "Item")), [L0["j"]])), (await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [L0["i"]]))])), "Text")), (await $.idx(L0["nlist"], [L0["i"]]))]));
                  await $.stmt((await $.call(C, "PropertyAdded", [L0["n"]])));
                  $.abort();
                }
                await $.tick();
              }
            }
            L0["n"] = (await $.mcall((await $.mv((await $.v(C, "TreeView2")), "Items")), "AddChildObject", [L0["n"], (await $.mv((await $.call(C, "TTreeNode", [(await $.idx(L0["nlist"], [L0["i"]]))])), "Text")), (await $.idx(L0["nlist"], [L0["i"]]))]));
            await $.stmt((await $.call(C, "PropertyAdded", [L0["n"]])));
          } catch ($t13) {
            $.rethrowControl($t13);
            if ($.excIs($t13, "EAbort")) {
            }
            else {
              throw $t13;
            }
          }
        }
        await $.tick();
      }
    }
    await $.mcall(L0["nlist"], "Free", []);
  }
  if ($.truthy($.ne(L0["n"], null))) {
    await $.mset(L0["n"], "Selected", true);
  }
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "AddParentChecked", async function AddParentChecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["n"]);
  L0["n"] = (await $.mv(L0["n"], "Parent"));
  while ($.truthy((await $.and_(($.ne(L0["n"], null)), async () => ($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))))) {
    await $.mset(L0["n"], "ImageIndex", 2);
    await $.mset(L0["n"], "SelectedIndex", 2);
    await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked", 2);
    L0["n"] = (await $.mv(L0["n"], "Parent"));
    await $.tick();
  }
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "ResetParentNodes", async function ResetParentNodes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["n"]);
  L0["n"] = (await $.mv(L0["n"], "Parent"));
  if ($.truthy($.eq(L0["n"], null))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "HaveCheckedChilds", [L0["n"]]))))) {
    await $.stmt((await $.call(C, "RemovePropertyNode", [L0["n"]])));
  }
  if ($.truthy(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))) {
    if ($.truthy((await $.call(C, "HaveCheckedChilds", [L0["n"]])))) {
      await $.mset(L0["n"], "ImageIndex", 2);
      await $.mset(L0["n"], "SelectedIndex", 2);
      await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked", 2);
    } else {
      await $.mset(L0["n"], "ImageIndex", 0);
      await $.mset(L0["n"], "SelectedIndex", 0);
      await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked", 0);
      await $.stmt((await $.call(C, "RemovePropertyNode", [L0["n"]])));
    }
  }
  await $.stmt((await $.call(C, "ResetParentNodes", [L0["n"]])));
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "ResetChildNodes", async function ResetChildNodes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["n"]);
  if ($.truthy($.ne((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["n"], "Data"))])), "Checked")), 0))) {
    { const $t16 = $.sub((await $.mv(L0["n"], "Count")), 1);
      L0["i"] = 0;
      let $t17 = true;
      for (;;) {
        if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
        $t17 = false;
        if (!($.ord(L0["i"]) <= $.ord($t16))) break;
        await $.stmt((await $.call(C, "ResetChildNodes", [(await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]]))])));
        if ($.truthy($.ne((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "Data"))])), "Checked")), 0))) {
          await $.mset((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "ImageIndex", 0);
          await $.mset((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "SelectedIndex", 0);
          await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "Data"))])), "Checked", 0);
          await $.stmt((await $.call(C, "RemovePropertyNode", [(await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]]))])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "RemovePropertyNode", async function RemovePropertyNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined, "pn": null, "i": 0};
  await $.fixArgs(L0, ["n"]);
  L0["pn"] = (await $.mv(L0["n"], "Parent"));
  if ($.truthy((await $.call(C, "Assigned", [L0["n"]])))) {
    { const $t18 = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t19 = true;
      for (;;) {
        if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
        $t19 = false;
        if (!($.ord(L0["i"]) <= $.ord($t18))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data")), L0["n"]))) {
          await $.stmt((await $.call(C, "PropertyDeleting", [(await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]]))])));
          await $.mcall((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Delete", []);
          break;
        }
        await $.tick();
      }
    }
  }
  while ($.truthy((await $.and_(($.ne(L0["pn"], null)), async () => ($.eq((await $.mv(L0["pn"], "Count")), 0)))))) {
    L0["n"] = L0["pn"];
    L0["pn"] = (await $.mv(L0["pn"], "Parent"));
    if ($.truthy($.ne((await $.mcall(L0["n"], "GetPrevChild", [L0["n"]])), null))) {
      await $.mset((await $.v(C, "TreeView2")), "Selected", (await $.mcall(L0["n"], "GetPrevChild", [L0["n"]])));
    } else {
      if ($.truthy($.ne((await $.mcall(L0["n"], "GetNextChild", [L0["n"]])), null))) {
        await $.mset((await $.v(C, "TreeView2")), "Selected", (await $.mcall(L0["n"], "GetNextChild", [L0["n"]])));
      } else {
        await $.mset((await $.v(C, "TreeView2")), "Selected", (await $.mv(L0["n"], "Parent")));
      }
    }
    { const $t20 = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t21 = true;
      for (;;) {
        if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
        $t21 = false;
        if (!($.ord(L0["i"]) <= $.ord($t20))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data")), L0["n"]))) {
          await $.stmt((await $.call(C, "PropertyDeleting", [(await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]]))])));
          await $.mcall((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Delete", []);
          break;
        }
        await $.tick();
      }
    }
    await $.tick();
  }
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "FindChildNodeInfo", async function FindChildNodeInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"n2": $.copyArg(p0), "n1": $.copyArg(p1), result: null, "i": 0};
  await $.fixArgs(L0, ["n2", "n1"]);
  L0["result"] = null;
  { const $t22 = $.sub((await $.mv(L0["n2"], "Count")), 1);
    L0["i"] = 0;
    let $t23 = true;
    for (;;) {
      if (!$t23) { L0["i"] = $.succ(L0["i"], 1); }
      $t23 = false;
      if (!($.ord(L0["i"]) <= $.ord($t22))) break;
      if ($.truthy($.eq(((await $.mv((await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv(L0["n2"], "Item")), [L0["i"]])), "Data"))])), "Data"))), (await $.mv(L0["n1"], "Data"))))) {
        L0["result"] = (await $.idx((await $.mv(L0["n2"], "Item")), [L0["i"]]));
        return L0.result;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["N2", "N1"], "kind": "function", "ptypes": ["TTreeNode", "TTreeNode"]});
  U.method("TPropStorageEditEhForm", "HaveCheckedChilds", async function HaveCheckedChilds(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: false, "i": 0};
  await $.fixArgs(L0, ["n"]);
  L0["result"] = false;
  { const $t24 = $.sub((await $.mv(L0["n"], "Count")), 1);
    L0["i"] = 0;
    let $t25 = true;
    for (;;) {
      if (!$t25) { L0["i"] = $.succ(L0["i"], 1); }
      $t25 = false;
      if (!($.ord(L0["i"]) <= $.ord($t24))) break;
      if ($.truthy(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))) {
        if ($.truthy($.ne((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "Data"))])), "Checked")), 0))) {
          L0["result"] = true;
          return L0.result;
        }
      } else {
        if ($.truthy(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "Data"))])), "NodeType")), (await $.v(C, "nthPropNode")))))) {
          L0["result"] = (await $.callv(L0["havecheckedchilds"], [(await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]]))]));
          if ($.truthy(L0["result"])) {
            return L0.result;
          }
        } else {
          if ($.truthy($.ne((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]])), "Data"))])), "Instance")), null))) {
            if ($.truthy((await $.callv(L0["havecheckedchilds"], [(await $.idx((await $.mv(L0["n"], "Item")), [L0["i"]]))])))) {
              L0["result"] = true;
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["N"], "kind": "function", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "AddSortedChildObject", async function AddSortedChildObject(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parent": $.copyArg(p0), "s": $.copyArg(p1), "data": $.copyArg(p2), result: null, "node": null};
  await $.fixArgs(L0, ["parent", "s", "data"]);
  if ($.truthy($.eq(L0["parent"], null))) {
    L0["node"] = (await $.mv((await $.mv((await $.v(C, "TreeView1")), "Items")), "GetFirstNode"));
  } else {
    L0["node"] = (await $.mv(L0["parent"], "getFirstChild"));
  }
  if ($.truthy($.eq(L0["node"], null))) {
    L0["result"] = (await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "AddChildObject", [L0["parent"], L0["s"], L0["data"]]));
    return L0.result;
  }
  while ($.truthy($.ne(L0["node"], null))) {
    if ($.truthy($.gt((await $.call(C, "CompareNodeData", [(await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), L0["data"]])), 0))) {
      L0["result"] = (await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "InsertObject", [L0["node"], L0["s"], L0["data"]]));
      return L0.result;
    }
    L0["node"] = (await $.mv(L0["node"], "GetNextSibling"));
    await $.tick();
  }
  L0["result"] = (await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "AddChildObject", [L0["parent"], L0["s"], L0["data"]]));
  return L0.result;
}, {"params": ["Parent", "S", "Data"], "kind": "function", "ptypes": ["TTreeNode", "String", "PNodeInfoEh"]});
  U.method("TPropStorageEditEhForm", "CompareNodeData", async function CompareNodeData(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"data1": $.copyArg(p0), "data2": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["data1", "data2"]);
  if ($.truthy($.eq((await $.mv(L0["data1"], "NodeType")), (await $.mv(L0["data2"], "NodeType"))))) {
    if ($.truthy($.eq((await $.mv(L0["data1"], "NodeType")), (await $.v(C, "nthProperty"))))) {
      if ($.truthy((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv(L0["data1"], "Name")), 1, 1])), "<")), async () => ($.ne((await $.call(C, "Copy", [(await $.mv(L0["data2"], "Name")), 1, 1])), "<")))))) {
        L0["result"] = 1;
      } else {
        if ($.truthy((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv(L0["data2"], "Name")), 1, 1])), "<")), async () => ($.ne((await $.call(C, "Copy", [(await $.mv(L0["data1"], "Name")), 1, 1])), "<")))))) {
          L0["result"] = (-(1));
        } else {
          L0["result"] = (await $.call(C, "CompareText", [(await $.mv(L0["data1"], "Name")), (await $.mv(L0["data2"], "Name"))]));
        }
      }
    } else {
      L0["result"] = (await $.call(C, "CompareText", [(await $.mv(L0["data1"], "Name")), (await $.mv(L0["data2"], "Name"))]));
    }
  } else {
    if ($.truthy($.eq((await $.mv(L0["data1"], "NodeType")), (await $.v(C, "nthProperty"))))) {
      L0["result"] = (-(1));
    } else {
      if ($.truthy($.eq((await $.mv(L0["data1"], "NodeType")), (await $.v(C, "nthPropNode"))))) {
        L0["result"] = (-(1));
      } else {
        L0["result"] = 1;
      }
    }
  }
  return L0.result;
}, {"params": ["Data1", "Data2"], "kind": "function", "ptypes": ["PNodeInfoEh", "PNodeInfoEh"]});
  U.method("TPropStorageEditEhForm", "CompareNode", async function CompareNode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"node1": $.copyArg(p0), "node2": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["node1", "node2"]);
  L0["result"] = (await $.call(C, "CompareNodeData", [(await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node1"], "Data"))])), (await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node2"], "Data"))]))]));
  return L0.result;
}, {"params": ["Node1", "Node2"], "kind": "function", "ptypes": ["TTreeNode", "TTreeNode"]});
  U.method("TPropStorageEditEhForm", "ExchangeNode", async function ExchangeNode(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parent": $.copyArg(p0), "l": $.copyArg(p1), "r": $.copyArg(p2), result: undefined, "n": null};
  await $.fixArgs(L0, ["parent", "l", "r"]);
  L0["n"] = (await $.mcall((await $.v(C, "TTreeNode")), "Create", [null]));
  await $.stmt((await $.mcall(L0["n"], "Assign", [(await $.idx((await $.mv(L0["parent"], "Item")), [L0["l"]]))])));
  { const $t26 = await $.iset((await $.mv(L0["parent"], "Item")), [L0["l"]], (await $.idx((await $.mv(L0["parent"], "Item")), [L0["r"]]))); if ($t26 !== undefined) { await $.mset(L0["parent"], "Item", $t26); } }
  { const $t27 = await $.iset((await $.mv(L0["parent"], "Item")), [L0["r"]], L0["n"]); if ($t27 !== undefined) { await $.mset(L0["parent"], "Item", $t27); } }
  await $.mcall(L0["n"], "Free", []);
  return L0.result;
}, {"params": ["Parent", "L", "R"], "kind": "procedure", "ptypes": ["TTreeNode", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "QuickSort", async function QuickSort(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parent": $.copyArg(p0), "l": $.copyArg(p1), "r": $.copyArg(p2), result: undefined, "i": 0, "j": 0, "p": 0};
  await $.fixArgs(L0, ["parent", "l", "r"]);
  do {
    L0["i"] = L0["l"];
    L0["j"] = L0["r"];
    L0["p"] = $.shr(($.add(L0["l"], L0["r"])), 1);
    do {
      while ($.truthy($.lt((await $.call(C, "CompareNode", [(await $.idx((await $.mv(L0["parent"], "Item")), [L0["i"]])), (await $.idx((await $.mv(L0["parent"], "Item")), [L0["p"]]))])), 0))) {
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t28) => { L0["i"] = $t28; })])));
        await $.tick();
      }
      while ($.truthy($.gt((await $.call(C, "CompareNode", [(await $.idx((await $.mv(L0["parent"], "Item")), [L0["j"]])), (await $.idx((await $.mv(L0["parent"], "Item")), [L0["p"]]))])), 0))) {
        await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["j"], async ($t29) => { L0["j"] = $t29; })])));
        await $.tick();
      }
      if ($.truthy($.le(L0["i"], L0["j"]))) {
        await $.stmt((await $.call(C, "ExchangeNode", [L0["parent"], L0["i"], L0["j"]])));
        if ($.truthy($.eq(L0["p"], L0["i"]))) {
          L0["p"] = L0["j"];
        } else {
          if ($.truthy($.eq(L0["p"], L0["j"]))) {
            L0["p"] = L0["i"];
          }
        }
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t30) => { L0["i"] = $t30; })])));
        await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["j"], async ($t31) => { L0["j"] = $t31; })])));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["i"], L0["j"])));
    if ($.truthy($.lt(L0["l"], L0["j"]))) {
      await $.stmt((await $.call(C, "QuickSort", [L0["parent"], L0["l"], L0["j"]])));
    }
    L0["l"] = L0["i"];
    await $.tick();
  } while (!$.truthy($.ge(L0["i"], L0["r"])));
  return L0.result;
}, {"params": ["Parent", "L", "R"], "kind": "procedure", "ptypes": ["TTreeNode", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "BuildPropertyList", async function BuildPropertyList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "n": null, "childlist": null};
  await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "BeginUpdate", []);
  await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "Clear", []);
  L0["childlist"] = null;
  try {
    L0["n"] = (await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "Add", [null, $.add("<Form>: ", (await $.mv((await $.mv((await $.v(C, "PropStorage")), "Owner")), "ClassName")))]));
    await $.mset(L0["n"], "ImageIndex", 8);
    await $.mset(L0["n"], "SelectedIndex", 8);
    await $.mset(L0["n"], "Data", (await $.call(C, "CreateNodeInfo", [(await $.mv((await $.v(C, "PropStorage")), "Owner")), "<Form>", "", (await $.v(C, "nthControl")), false])));
    await $.set(C, "RootNode", L0["n"]);
    await $.stmt((await $.call(C, "AddVoidProperty", [L0["n"]])));
    await $.mset(L0["n"], "Expanded", true);
  } finally {
    await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "EndUpdate", []);
    await $.mcall(L0["childlist"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEditEhForm", "BuildStoringPropertyList", async function BuildStoringPropertyList(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"proplist": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["proplist"]);
  { const $t32 = $.sub((await $.mv(L0["proplist"], "Count")), 1);
    L0["i"] = 0;
    let $t33 = true;
    for (;;) {
      if (!$t33) { L0["i"] = $.succ(L0["i"], 1); }
      $t33 = false;
      if (!($.ord(L0["i"]) <= $.ord($t32))) break;
      await $.stmt((await $.call(C, "MainAddPropertyNode", [(await $.idx(L0["proplist"], [L0["i"]]))])));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "TreeView2")), "FullExpand", []);
  return L0.result;
}, {"params": ["PropList"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPropStorageEditEhForm", "CreateNodeInfo", async function CreateNodeInfo(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "name": $.copyArg(p1), "path": $.copyArg(p2), "nodetype": $.copyArg(p3), "isvoidproperty": $.copyArg(p4), result: null, "pni": null};
  await $.fixArgs(L0, ["component", "name", "path", "nodetype", "isvoidproperty"]);
  await $.stmt((await $.call(C, "New", [L0["pni"]])));
  await $.mset(L0["pni"], "Instance", L0["component"]);
  await $.mset(L0["pni"], "Name", L0["name"]);
  await $.mset(L0["pni"], "Path", L0["path"]);
  await $.mset(L0["pni"], "NodeType", L0["nodetype"]);
  await $.mset(L0["pni"], "IsVoidProperty", L0["isvoidproperty"]);
  await $.mset(L0["pni"], "Checked", 0);
  L0["result"] = L0["pni"];
  return L0.result;
}, {"params": ["Component", "Name", "Path", "NodeType", "IsVoidProperty"], "kind": "function", "ptypes": ["TComponent", "String", "String", "TNodeTypeEh", "Boolean"]});
  U.method("TPropStorageEditEhForm", "AddVoidProperty", async function AddVoidProperty(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), result: undefined, "nc": null};
  await $.fixArgs(L0, ["n"]);
  L0["nc"] = (await $.mcall((await $.mv((await $.v(C, "TreeView1")), "Items")), "AddChildObjectFirst", [L0["n"], "VoidProperty", (await $.call(C, "Pointer", [0]))]));
  await $.mset(L0["nc"], "Data", (await $.call(C, "CreateNodeInfo", [null, "VoidProperty", "VoidProperty", (await $.v(C, "nthProperty")), true])));
  return L0.result;
}, {"params": ["N"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "GetObjectPropList", async function GetObjectPropList(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aobject": $.copyArg(p0), "objpropcount": $.asRef(p1), result: null, "interclass": null, "proplist": null, "interproplist": null, "objproplist": null, "propcount": 0, "interpropcount": 0, "fintersize": 0, "fsize": 0, "i": 0, "j": 0, "comp": 0, "list": null};
  await $.fixArgs(L0, ["aobject"]);
  L0["propcount"] = (await $.call(C, "GetPropList", [(await $.mv(L0["aobject"], "ClassInfo")), (await $.v(C, "tkProperties")), null]));
  L0["fsize"] = $.mul(L0["propcount"], (await $.call(C, "SizeOf", [(await $.v(C, "Pointer"))])));
  await $.stmt((await $.call(C, "GetMem", [L0["proplist"], L0["fsize"]])));
  await $.stmt((await $.call(C, "GetPropList", [(await $.mv(L0["aobject"], "ClassInfo")), (await $.v(C, "tkProperties")), L0["proplist"]])));
  await L0["objpropcount"].set(L0["propcount"]);
  L0["result"] = L0["proplist"];
  L0["interclass"] = (await $.call(C, "GetInterceptorForTarget", [(await $.mv(L0["aobject"], "ClassType"))]));
  if ($.truthy($.eq(L0["interclass"], null))) {
    return L0.result;
  }
  L0["interpropcount"] = (await $.call(C, "GetPropList", [(await $.mv(L0["interclass"], "ClassInfo")), (await $.v(C, "tkProperties")), null]));
  L0["fintersize"] = $.mul(L0["interpropcount"], (await $.call(C, "SizeOf", [(await $.v(C, "Pointer"))])));
  await $.stmt((await $.call(C, "GetMem", [L0["interproplist"], L0["fintersize"]])));
  await $.stmt((await $.call(C, "GetPropList", [(await $.mv(L0["interclass"], "ClassInfo")), (await $.v(C, "tkProperties")), L0["interproplist"]])));
  L0["list"] = (await $.mv((await $.v(C, "TList")), "Create"));
  L0["j"] = 0;
  { const $t34 = $.sub(L0["propcount"], 1);
    L0["i"] = 0;
    let $t35 = true;
    for (;;) {
      if (!$t35) { L0["i"] = $.succ(L0["i"], 1); }
      $t35 = false;
      if (!($.ord(L0["i"]) <= $.ord($t34))) break;
      if ($.truthy($.lt(L0["j"], L0["interpropcount"]))) {
        L0["comp"] = (await $.call(C, "CompareText", [(await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name")), (await $.mv((await $.idx(L0["interproplist"], [L0["j"]])), "Name"))]));
        if ($.truthy($.eq(L0["comp"], 0))) {
          await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["j"], async ($t36) => { L0["j"] = $t36; })])));
          await $.stmt((await $.mcall(L0["list"], "Add", [(await $.idx(L0["proplist"], [L0["i"]]))])));
        } else {
          if ($.truthy($.lt(L0["comp"], 0))) {
            await $.stmt((await $.mcall(L0["list"], "Add", [(await $.idx(L0["proplist"], [L0["i"]]))])));
          } else {
            await $.stmt((await $.mcall(L0["list"], "Add", [(await $.idx(L0["interproplist"], [L0["j"]]))])));
            await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["j"], async ($t37) => { L0["j"] = $t37; })])));
          }
        }
      } else {
        await $.stmt((await $.mcall(L0["list"], "Add", [(await $.idx(L0["proplist"], [L0["i"]]))])));
      }
      await $.tick();
    }
  }
  { const $t38 = $.sub(L0["interpropcount"], 1);
    L0["i"] = L0["j"];
    let $t39 = true;
    for (;;) {
      if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
      $t39 = false;
      if (!($.ord(L0["i"]) <= $.ord($t38))) break;
      await $.stmt((await $.mcall(L0["list"], "Add", [(await $.idx(L0["interproplist"], [L0["i"]]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "GetMem", [L0["objproplist"], $.mul((await $.mv(L0["list"], "Count")), (await $.call(C, "SizeOf", [(await $.v(C, "Pointer"))])))])));
  { const $t40 = $.sub((await $.mv(L0["list"], "Count")), 1);
    L0["i"] = 0;
    let $t41 = true;
    for (;;) {
      if (!$t41) { L0["i"] = $.succ(L0["i"], 1); }
      $t41 = false;
      if (!($.ord(L0["i"]) <= $.ord($t40))) break;
      { const $t42 = await $.iset(L0["objproplist"], [L0["i"]], (await $.idx(L0["list"], [L0["i"]]))); if ($t42 !== undefined) { L0["objproplist"] = $t42; } }
      await $.tick();
    }
  }
  await L0["objpropcount"].set((await $.mv(L0["list"], "Count")));
  L0["result"] = L0["objproplist"];
  await $.mcall(L0["list"], "Free", []);
  await $.stmt((await $.call(C, "FreeMem", [L0["proplist"], L0["fsize"]])));
  await $.stmt((await $.call(C, "FreeMem", [L0["interproplist"], L0["fintersize"]])));
  return L0.result;
}, {"params": ["AObject", "ObjPropCount"], "kind": "function", "ptypes": ["TObject", "Integer"]});
  U.method("TPropStorageEditEhForm", "AddProperties", async function AddProperties(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), "o": $.copyArg(p1), "path": $.copyArg(p2), "isaddpropnode": $.copyArg(p3), result: undefined, "proplist": null, "propcount": 0, "i": 0, "j": 0, "nc": null, "subo": null, "defineproplist": null};
  await $.fixArgs(L0, ["n", "o", "path", "isaddpropnode"]);
  L0["proplist"] = (await $.call(C, "GetObjectPropList", [L0["o"], $.ref(async () => L0["propcount"], async ($t43) => { L0["propcount"] = $t43; })]));
  if ($.truthy($.ne(L0["path"], ""))) {
    L0["path"] = $.add(L0["path"], ".");
  }
  if ($.truthy(L0["isaddpropnode"])) {
    L0["path"] = $.add(L0["path"], "<P>");
    L0["n"] = (await $.call(C, "AddSortedChildObject", [L0["n"], "<Properties>", (await $.call(C, "CreateNodeInfo", [null, "<P>", L0["path"], (await $.v(C, "nthPropNode")), false]))]));
    await $.mset(L0["n"], "ImageIndex", 12);
    await $.mset(L0["n"], "SelectedIndex", 12);
    L0["path"] = $.add(L0["path"], ".");
  }
  { const $t44 = $.sub(L0["propcount"], 1);
    L0["i"] = 0;
    let $t45 = true;
    for (;;) {
      if (!$t45) { L0["i"] = $.succ(L0["i"], 1); }
      $t45 = false;
      if (!($.ord(L0["i"]) <= $.ord($t44))) break;
      L0["nc"] = (await $.call(C, "AddSortedChildObject", [L0["n"], (await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name")), (await $.call(C, "CreateNodeInfo", [null, (await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name")), $.add(L0["path"], (await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "Name"))), (await $.v(C, "nthProperty")), false]))]));
      await $.mset(L0["nc"], "ImageIndex", 0);
      await $.mset(L0["nc"], "SelectedIndex", 0);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.idx(L0["proplist"], [L0["i"]])), "PropType")), "Kind")), (await $.v(C, "tkClass"))))) {
        L0["subo"] = (await $.call(C, "TObject", [(await $.call(C, "GetOrdProp", [L0["o"], (await $.idx(L0["proplist"], [L0["i"]]))]))]));
        if ($.truthy((await $.call(C, "Assigned", [L0["subo"]])))) {
          await $.mset((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["nc"], "Data"))])), "Instance", L0["subo"]);
          if ($.truthy($.not(($.is_(L0["subo"], "TComponent"))))) {
            await $.stmt((await $.call(C, "AddVoidProperty", [L0["nc"]])));
          }
        }
      }
      if ($.truthy($.gt(($.sub((await $.v(C, "GetTickCount")), (await $.v(C, "StartBuildTicks")))), 250))) {
        await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
      }
      await $.tick();
    }
  }
  if ($.truthy($.is_(L0["o"], "TPersistent"))) {
    L0["defineproplist"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
    await $.stmt((await $.call(C, "GetDefinePropertyList", [(await $.call(C, "TPersistent", [L0["o"]])), L0["defineproplist"]])));
    { const $t46 = $.sub((await $.mv(L0["defineproplist"], "Count")), 1);
      L0["j"] = 0;
      let $t47 = true;
      for (;;) {
        if (!$t47) { L0["j"] = $.succ(L0["j"], 1); }
        $t47 = false;
        if (!($.ord(L0["j"]) <= $.ord($t46))) break;
        if ($.truthy($.eq((await $.call(C, "GetChildNodeByText", [L0["n"], (await $.idx(L0["defineproplist"], [L0["j"]]))])), null))) {
          L0["nc"] = (await $.call(C, "AddSortedChildObject", [L0["n"], (await $.idx(L0["defineproplist"], [L0["j"]])), (await $.call(C, "CreateNodeInfo", [null, (await $.idx(L0["defineproplist"], [L0["j"]])), $.add(L0["path"], (await $.idx(L0["defineproplist"], [L0["j"]]))), (await $.v(C, "nthProperty")), false]))]));
          await $.mset(L0["nc"], "ImageIndex", 0);
          await $.mset(L0["nc"], "SelectedIndex", 0);
        }
        await $.tick();
      }
    }
    await $.mcall(L0["defineproplist"], "Free", []);
  }
  if ($.truthy(($.is_(L0["o"], "TCollection")))) {
    await $.stmt((await $.call(C, "AddCollectionProperties", [L0["n"], (await $.call(C, "TCollection", [L0["o"]])), L0["path"]])));
  }
  await $.stmt((await $.call(C, "FreeMem", [L0["proplist"], $.mul(L0["propcount"], (await $.call(C, "SizeOf", [(await $.v(C, "Pointer"))])))])));
  return L0.result;
}, {"params": ["N", "O", "Path", "IsAddPropNode"], "kind": "procedure", "ptypes": ["TTreeNode", "TObject", "String", "Boolean"]});
  U.method("TPropStorageEditEhForm", "AddComponents", async function AddComponents(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), "o": $.copyArg(p1), "path": $.copyArg(p2), result: undefined, "i": 0, "c": null, "nc": null, "childlist": null};
  await $.fixArgs(L0, ["n", "o", "path"]);
  if ($.truthy($.ne(L0["path"], ""))) {
    L0["path"] = $.add(L0["path"], ".");
  }
  L0["childlist"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  await $.stmt((await $.call(C, "GetComponentChildListEh", [L0["o"], (await $.mv((await $.v(C, "PropStorage")), "Owner")), L0["childlist"], true])));
  { const $t48 = $.sub((await $.mv(L0["childlist"], "Count")), 1);
    L0["i"] = 0;
    let $t49 = true;
    for (;;) {
      if (!$t49) { L0["i"] = $.succ(L0["i"], 1); }
      $t49 = false;
      if (!($.ord(L0["i"]) <= $.ord($t48))) break;
      L0["c"] = (await $.call(C, "TComponent", [(await $.idx((await $.mv(L0["childlist"], "Objects")), [L0["i"]]))]));
      if ($.truthy($.eq((await $.mv(L0["c"], "Name")), ""))) {
        continue;
      }
      L0["nc"] = (await $.call(C, "AddSortedChildObject", [L0["n"], $.add($.add((await $.mv(L0["c"], "Name")), ": "), (await $.mv(L0["c"], "ClassName"))), (await $.call(C, "CreateNodeInfo", [L0["c"], (await $.mv(L0["c"], "Name")), $.add(L0["path"], (await $.mv(L0["c"], "Name"))), (await $.v(C, "nthControl")), false]))]));
      if ($.truthy($.is_(L0["c"], "TWinControl"))) {
        await $.mset(L0["nc"], "ImageIndex", 9);
      } else {
        await $.mset(L0["nc"], "ImageIndex", 10);
      }
      await $.mset(L0["nc"], "SelectedIndex", (await $.mv(L0["nc"], "ImageIndex")));
      await $.stmt((await $.call(C, "AddVoidProperty", [L0["nc"]])));
      await $.tick();
    }
  }
  await $.mcall(L0["childlist"], "Free", []);
  return L0.result;
}, {"params": ["N", "O", "Path"], "kind": "procedure", "ptypes": ["TTreeNode", "TComponent", "String"]});
  U.method("TPropStorageEditEhForm", "AddCollectionProperties", async function AddCollectionProperties(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"n": $.copyArg(p0), "o": $.copyArg(p1), "path": $.copyArg(p2), result: undefined, "i": 0, "nc": null};
  await $.fixArgs(L0, ["n", "o", "path"]);
  if ($.truthy($.eq((await $.mv(L0["o"], "Count")), 0))) {
    return L0.result;
  }
  L0["nc"] = (await $.call(C, "AddSortedChildObject", [L0["n"], "<ForAllItems>", (await $.call(C, "CreateNodeInfo", [null, "<ForAllItems>", $.add(L0["path"], "<ForAllItems>"), (await $.v(C, "nthProperty")), false]))]));
  await $.mset(L0["nc"], "ImageIndex", 0);
  await $.mset(L0["nc"], "SelectedIndex", 0);
  await $.stmt((await $.call(C, "AddProperties", [L0["nc"], (await $.idx((await $.mv(L0["o"], "Items")), [0])), $.add(L0["path"], "<ForAllItems>"), false])));
  if ($.truthy($.gt((await $.mv(L0["o"], "Count")), 0))) {
    { const $t50 = $.sub((await $.mv(L0["o"], "Count")), 1);
      L0["i"] = 0;
      let $t51 = true;
      for (;;) {
        if (!$t51) { L0["i"] = $.succ(L0["i"], 1); }
        $t51 = false;
        if (!($.ord(L0["i"]) <= $.ord($t50))) break;
        L0["nc"] = (await $.call(C, "AddSortedChildObject", [L0["n"], $.add($.add("<Item", (await $.call(C, "IntToStr", [L0["i"]]))), ">"), (await $.call(C, "CreateNodeInfo", [null, $.add($.add("<Item", (await $.call(C, "IntToStr", [L0["i"]]))), ">"), $.add($.add($.add(L0["path"], "<Item"), (await $.call(C, "IntToStr", [L0["i"]]))), ">"), (await $.v(C, "nthProperty")), false]))]));
        await $.mset(L0["nc"], "ImageIndex", 0);
        await $.mset(L0["nc"], "SelectedIndex", 0);
        await $.stmt((await $.call(C, "AddProperties", [L0["nc"], (await $.idx((await $.mv(L0["o"], "Items")), [L0["i"]])), $.add($.add($.add(L0["path"], "<Item"), (await $.call(C, "IntToStr", [L0["i"]]))), ">"), false])));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["N", "O", "Path"], "kind": "procedure", "ptypes": ["TTreeNode", "TCollection", "String"]});
  U.method("TPropStorageEditEhForm", "GetStoringPorps", async function GetStoringPorps(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"proplist": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["proplist"]);
  await $.mcall(L0["proplist"], "Clear", []);
  { const $t52 = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t53 = true;
    for (;;) {
      if (!$t53) { L0["i"] = $.succ(L0["i"], 1); }
      $t53 = false;
      if (!($.ord(L0["i"]) <= $.ord($t52))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Count")), 0))) {
        await $.stmt((await $.mcall(L0["proplist"], "Add", [(await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.call(C, "TTreeNode", [(await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Data"))])), "Data"))])), "Path"))])));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["PropList"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPropStorageEditEhForm", "TreeView1GetSelectedIndex", async function TreeView1GetSelectedIndex(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "node"]);
  await $.mset(L0["node"], "SelectedIndex", (await $.mv(L0["node"], "ImageIndex")));
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TPropStorageEditEhForm", "TreeView1Deletion", async function TreeView1Deletion(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "node"]);
  if ($.truthy($.ne((await $.mv(L0["node"], "Data")), null))) {
    await $.stmt((await $.call(C, "Dispose", [(await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))]))])));
  }
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TPropStorageEditEhForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LeftBorderWidth", (await $.mv((await $.v(C, "TreeView1")), "Left")));
  await $.set(C, "RightBorderWidth", $.sub($.sub($.idiv((await $.v(C, "ClientWidth")), 2), (await $.mv((await $.v(C, "TreeView1")), "Width"))), (await $.mv((await $.v(C, "TreeView1")), "Left"))));
  await $.set(C, "ButtonSize", (await $.mv((await $.v(C, "spAddProp")), "Width")));
  await $.set(C, "VBottomMargin", $.sub((await $.v(C, "ClientHeight")), (await $.mv((await $.v(C, "Bevel1")), "Top"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t54 = $.sub((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t55 = true;
    for (;;) {
      if (!$t55) { L0["i"] = $.succ(L0["i"], 1); }
      $t55 = false;
      if (!($.ord(L0["i"]) <= $.ord($t54))) break;
      await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]])), "Free", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "FormResize", async function FormResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TreeView1")), "Width", $.sub($.sub($.idiv((await $.v(C, "ClientWidth")), 2), (await $.v(C, "LeftBorderWidth"))), (await $.v(C, "RightBorderWidth"))));
  await $.mset((await $.v(C, "spAddProp")), "Left", $.sub($.idiv((await $.v(C, "ClientWidth")), 2), 11));
  await $.mset((await $.v(C, "spAddProp")), "Top", $.sub($.sub($.sub($.idiv(($.sub((await $.v(C, "ClientHeight")), (await $.v(C, "VBottomMargin")))), 2), (await $.v(C, "ButtonSize"))), 5), $.idiv((await $.v(C, "ButtonSize")), 2)));
  await $.mset((await $.v(C, "sbRemoveProp")), "Left", $.sub($.idiv((await $.v(C, "ClientWidth")), 2), 11));
  await $.mset((await $.v(C, "sbRemoveProp")), "Top", $.sub($.idiv(($.sub((await $.v(C, "ClientHeight")), (await $.v(C, "VBottomMargin")))), 2), $.idiv((await $.v(C, "ButtonSize")), 2)));
  await $.mset((await $.v(C, "sbRemoveAllProps")), "Left", $.sub($.idiv((await $.v(C, "ClientWidth")), 2), 11));
  await $.mset((await $.v(C, "sbRemoveAllProps")), "Top", $.add($.add($.idiv(($.sub((await $.v(C, "ClientHeight")), (await $.v(C, "VBottomMargin")))), 2), $.idiv((await $.v(C, "ButtonSize")), 2)), 5));
  await $.mset((await $.v(C, "spSynchTrees")), "Left", $.sub($.idiv((await $.v(C, "ClientWidth")), 2), 11));
  await $.mset((await $.v(C, "spSynchTrees")), "Top", $.add($.add($.add($.idiv(($.sub((await $.v(C, "ClientHeight")), (await $.v(C, "VBottomMargin")))), 2), $.idiv((await $.v(C, "ButtonSize")), 2)), (await $.v(C, "ButtonSize"))), 10));
  await $.mset((await $.v(C, "TreeView2")), "Left", $.add($.idiv((await $.v(C, "ClientWidth")), 2), (await $.v(C, "RightBorderWidth"))));
  await $.mset((await $.v(C, "lStoredProps")), "Left", (await $.mv((await $.v(C, "TreeView2")), "Left")));
  await $.mset((await $.v(C, "TreeView2")), "Width", (await $.mv((await $.v(C, "TreeView1")), "Width")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "spAddPropClick", async function spAddPropClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "MainAddPropertyNode", [(await $.mv((await $.v(C, "TreeView1")), "Selected"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "sbRemovePropClick", async function sbRemovePropClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "TreeView2")), "Selected")), null))) {
    await $.stmt((await $.call(C, "SlaveDeleteNode", [(await $.mv((await $.v(C, "TreeView2")), "Selected"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "sbRemoveAllPropsClick", async function sbRemoveAllPropsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    while ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 0))) {
      { const $t56 = 0;
        L0["i"] = $.sub((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 1);
        let $t57 = true;
        for (;;) {
          if (!$t57) { L0["i"] = $.succ(L0["i"], -1); }
          $t57 = false;
          if (!($.ord(L0["i"]) >= $.ord($t56))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]])), "Parent")), null))) {
            await $.stmt((await $.call(C, "SlaveDeleteNode", [(await $.idx((await $.mv((await $.v(C, "TreeView2")), "Items")), [L0["i"]]))])));
            break;
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  } finally {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "spSynchTreesClick", async function spSynchTreesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "TreeView2")), "Selected")), null))) {
    return L0.result;
  }
  await $.mset((await $.call(C, "TTreeNode", [(await $.mv((await $.mv((await $.v(C, "TreeView2")), "Selected")), "Data"))])), "Selected", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "SlaveDeleteNode", async function SlaveDeleteNode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sn": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sn"]);
  try {
    if ($.truthy($.eq((await $.mv(L0["sn"], "Count")), 0))) {
      await $.stmt((await $.call(C, "MainDeletePropertyNode", [(await $.call(C, "TTreeNode", [(await $.mv((L0["sn"]), "Data"))]))])));
    } else {
      { const $t58 = 0;
        L0["i"] = $.sub((await $.mv(L0["sn"], "Count")), 1);
        let $t59 = true;
        for (;;) {
          if (!$t59) { L0["i"] = $.succ(L0["i"], -1); }
          $t59 = false;
          if (!($.ord(L0["i"]) >= $.ord($t58))) break;
          await $.stmt((await $.call(C, "SlaveDeleteNode", [(await $.idx((await $.mv(L0["sn"], "Item")), [L0["i"]]))])));
          await $.tick();
        }
      }
    }
  } finally {
  }
  return L0.result;
}, {"params": ["SN"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "TreeView1Change", async function TreeView1Change(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "node"]);
  await $.stmt($.call(C, "UpdateButtonState", []));
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "TreeView1")), "Selected")), null)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "TreeView1")), "Selected")), "Data")), null)))))) {
    await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.mv((await $.v(C, "TreeView1")), "Selected")), "Data"))])), "Path")));
  }
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TPropStorageEditEhForm", "UpdateButtonState", async function UpdateButtonState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "spAddProp")), "Enabled", (await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "TreeView1")), "Selected")), null)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "TreeView1")), "Selected")), "Data")), null)))), async () => ($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.mv((await $.v(C, "TreeView1")), "Selected")), "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))), async () => ($.ne((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.mv((await $.v(C, "TreeView1")), "Selected")), "Data"))])), "Checked")), 1)))));
  await $.mset((await $.v(C, "sbRemoveProp")), "Enabled", (await $.and_(($.ne((await $.mv((await $.v(C, "TreeView2")), "Selected")), null)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Selected")), "Data")), null)))));
  await $.mset((await $.v(C, "spSynchTrees")), "Enabled", (await $.mv((await $.v(C, "sbRemoveProp")), "Enabled")));
  await $.mset((await $.v(C, "sbRemoveAllProps")), "Enabled", ($.gt((await $.mv((await $.mv((await $.v(C, "TreeView2")), "Items")), "Count")), 0)));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPropStorageEditEhForm", "TreeView2MouseDown", async function TreeView2MouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined, "downnode": null};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy($.in_((await $.v(C, "ssDouble")), L0["shift"]))) {
    L0["downnode"] = (await $.mcall((await $.v(C, "TreeView2")), "GetNodeAt", [L0["x"], L0["y"]]));
    if ($.truthy((await $.and_(($.ne(L0["downnode"], null)), async () => ($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.call(C, "TTreeNode", [(await $.mv(L0["downnode"], "Data"))])), "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))))) {
      await $.stmt((await $.call(C, "MainDeletePropertyNode", [(await $.call(C, "TTreeNode", [(await $.mv(L0["downnode"], "Data"))]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "cbPredifinedPropsClickCheck", async function cbPredifinedPropsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "oldcursor": null};
  await $.fixArgs(L0, ["sender"]);
  L0["oldcursor"] = (await $.mv((await $.v(C, "Screen")), "Cursor"));
  try {
    { const $t60 = $.sub((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t61 = true;
      for (;;) {
        if (!$t61) { L0["i"] = $.succ(L0["i"], 1); }
        $t61 = false;
        if (!($.ord(L0["i"]) <= $.ord($t60))) break;
        if ($.truthy($.ne((await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]])), null))) {
          await $.stmt((await $.mcall((await $.call(C, "TPredifinedPropsEh", [(await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]]))])), "SetCkecked", [(await $.idx((await $.mv((await $.v(C, "cbPredifinedProps")), "Checked")), [L0["i"]]))])));
        }
        await $.tick();
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", L0["oldcursor"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropStorageEditEhForm", "TreeView1Compare", async function TreeView1Compare(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node1": $.copyArg(p1), "node2": $.copyArg(p2), "data": $.copyArg(p3), "compare": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "node1", "node2", "data"]);
  if ($.truthy($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node1"], "Data"))])), "NodeType")), (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node2"], "Data"))])), "NodeType"))))) {
    await L0["compare"].set((await $.call(C, "CompareText", [(await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node1"], "Data"))])), "Name")), (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node2"], "Data"))])), "Name"))])));
  } else {
    if ($.truthy($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node1"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty"))))) {
      await L0["compare"].set((-(1)));
    } else {
      await L0["compare"].set(1);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Node1", "Node2", "Data", "Compare"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode", "TTreeNode", "Integer", "Integer"]});
  U.method("TPropStorageEditEhForm", "GetChildNodeByText", async function GetChildNodeByText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"parentnode": $.copyArg(p0), "text": $.copyArg(p1), result: null, "i": 0};
  await $.fixArgs(L0, ["parentnode", "text"]);
  L0["result"] = null;
  { const $t62 = $.sub((await $.mv(L0["parentnode"], "Count")), 1);
    L0["i"] = 0;
    let $t63 = true;
    for (;;) {
      if (!$t63) { L0["i"] = $.succ(L0["i"], 1); }
      $t63 = false;
      if (!($.ord(L0["i"]) <= $.ord($t62))) break;
      if ($.truthy($.eq((await $.call(C, "AnsiCompareText", [(await $.mv((await $.idx((await $.mv(L0["parentnode"], "Item")), [L0["i"]])), "Text")), L0["text"]])), 0))) {
        L0["result"] = (await $.idx((await $.mv(L0["parentnode"], "Item")), [L0["i"]]));
        return L0.result;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["ParentNode", "Text"], "kind": "function", "ptypes": ["TTreeNode", "String"]});
  U.method("TPropStorageEditEhForm", "TreeView1Expanding", async function TreeView1Expanding(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), "allowexpansion": $.asRef(p2), result: undefined, "oldcursor": null, "topnode": null, "pterm": ''};
  await $.fixArgs(L0, ["sender", "node"]);
  L0["topnode"] = (await $.mv((await $.v(C, "TreeView1")), "TopItem"));
  if ($.truthy((await $.and_(($.gt((await $.mv(L0["node"], "Count")), 0)), async () => (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.idx((await $.mv(L0["node"], "Item")), [0])), "Data"))])), "IsVoidProperty")))))) {
    await $.mcall((await $.idx((await $.mv(L0["node"], "Item")), [0])), "Free", []);
    await $.set(C, "StartBuildTicks", (await $.v(C, "GetTickCount")));
    L0["oldcursor"] = (await $.mv((await $.v(C, "Screen")), "Cursor"));
    try {
      L0["pterm"] = "";
      await $.stmt((await $.call(C, "AddProperties", [L0["node"], (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Instance")), $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Path")), L0["pterm"]), $.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty")))))])));
      if ($.truthy($.not(($.eq((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "NodeType")), (await $.v(C, "nthProperty"))))))) {
        await $.stmt((await $.call(C, "AddComponents", [L0["node"], (await $.call(C, "TComponent", [(await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Instance"))])), $.add((await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv(L0["node"], "Data"))])), "Path")), L0["pterm"])])));
      }
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", L0["oldcursor"]);
    }
  }
  if ($.truthy($.eq((await $.mv(L0["node"], "Count")), 1))) {
    await $.mset((await $.idx(L0["node"], [0])), "Expanded", true);
  }
  await $.mset((await $.v(C, "TreeView1")), "TopItem", L0["topnode"]);
  return L0.result;
}, {"params": ["Sender", "Node", "AllowExpansion"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode", "Boolean"]});
  U.method("TPropStorageEditEhForm", "BuildPredifinedProps", async function BuildPredifinedProps(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "preprop": null};
  { const $t64 = $.sub((await $.mv((await $.v(C, "PredifinedPropsClassList")), "Count")), 1);
    L0["i"] = 0;
    let $t65 = true;
    for (;;) {
      if (!$t65) { L0["i"] = $.succ(L0["i"], 1); }
      $t65 = false;
      if (!($.ord(L0["i"]) <= $.ord($t64))) break;
      L0["preprop"] = (await $.mcall((await $.call(C, "TPredifinedPropsEhClass", [(await $.idx((await $.v(C, "PredifinedPropsClassList")), [L0["i"]]))])), "Create", [Self]));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "AddObject", [(await $.mv(L0["preprop"], "Caprion")), L0["preprop"]])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPredifinedPropsEh", "Caprion", async function Caprion(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPredifinedPropsEh", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"editform": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["editform"]);
  await $.set(C, "FEditForm", L0["editform"]);
  return L0.result;
}, {"params": ["EditForm"], "kind": "constructor", "ptypes": ["TPropStorageEditEhForm"]});
  U.method("TPredifinedPropsEh", "PropertyAdded", async function PropertyAdded(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  L0["result"] = false;
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedPropsEh", "PropertyDeleted", async function PropertyDeleted(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  L0["result"] = false;
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedPropsEh", "SetCkecked", async function SetCkecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"achecked": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["achecked"]);
  await $.set(C, "FCkecked", L0["achecked"]);
  return L0.result;
}, {"params": ["AChecked"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPredifinedActiveControlEh", "Caprion", async function Caprion(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "Form ActiveControl";
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPredifinedActiveControlEh", "PropertyAdded", async function PropertyAdded(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.ActiveControl"))) {
    await $.set(C, "FActiveControlAdded", true);
  }
  await $.set(C, "FCkecked", (await $.v(C, "FActiveControlAdded")));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedActiveControlEh", "PropertyDeleted", async function PropertyDeleted(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.ActiveControl"))) {
    await $.set(C, "FActiveControlAdded", false);
  }
  await $.set(C, "FCkecked", (await $.v(C, "FActiveControlAdded")));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPropStorageEditEhForm", "PropertyAdded", async function PropertyAdded(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dn": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["dn"]);
  { const $t66 = $.sub((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t67 = true;
    for (;;) {
      if (!$t67) { L0["i"] = $.succ(L0["i"], 1); }
      $t67 = false;
      if (!($.ord(L0["i"]) <= $.ord($t66))) break;
      if ($.truthy($.ne((await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]])), null))) {
        { const $t68 = await $.iset((await $.mv((await $.v(C, "cbPredifinedProps")), "Checked")), [L0["i"]], (await $.mcall((await $.call(C, "TPredifinedPropsEh", [(await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]]))])), "PropertyAdded", [null, (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.call(C, "TTreeNode", [(await $.mv(L0["dn"], "Data"))])), "Data"))])), "Path"))]))); if ($t68 !== undefined) { await $.mset((await $.v(C, "cbPredifinedProps")), "Checked", $t68); } }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DN"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPropStorageEditEhForm", "PropertyDeleting", async function PropertyDeleting(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dn": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["dn"]);
  { const $t69 = $.sub((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t70 = true;
    for (;;) {
      if (!$t70) { L0["i"] = $.succ(L0["i"], 1); }
      $t70 = false;
      if (!($.ord(L0["i"]) <= $.ord($t69))) break;
      if ($.truthy($.ne((await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]])), null))) {
        { const $t71 = await $.iset((await $.mv((await $.v(C, "cbPredifinedProps")), "Checked")), [L0["i"]], (await $.mcall((await $.call(C, "TPredifinedPropsEh", [(await $.idx((await $.mv((await $.mv((await $.v(C, "cbPredifinedProps")), "Items")), "Objects")), [L0["i"]]))])), "PropertyDeleted", [null, (await $.mv((await $.call(C, "PNodeInfoEh", [(await $.mv((await $.call(C, "TTreeNode", [(await $.mv(L0["dn"], "Data"))])), "Data"))])), "Path"))]))); if ($t71 !== undefined) { await $.mset((await $.v(C, "cbPredifinedProps")), "Checked", $t71); } }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DN"], "kind": "procedure", "ptypes": ["TTreeNode"]});
  U.method("TPredifinedActiveControlEh", "SetCkecked", async function SetCkecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"achecked": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["achecked"]);
  if ($.truthy($.ne(L0["achecked"], (await $.v(C, "FCkecked"))))) {
    if ($.truthy(L0["achecked"])) {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.ActiveControl"])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.ActiveControl"])));
    }
    await $.inherited(Self, "TPredifinedActiveControlEh", "SetCkecked", [L0["achecked"]], arguments);
  }
  return L0.result;
}, {"params": ["AChecked"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPredifinedPosPropertiesEh", "Caprion", async function Caprion(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "Form Pos";
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPredifinedPosPropertiesEh", "PropertyAdded", async function PropertyAdded(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.Top"))) {
    await $.set(C, "FTopAdded", true);
  }
  if ($.truthy($.eq(L0["proppath"], "<P>.Left"))) {
    await $.set(C, "FLeftAdded", true);
  }
  await $.set(C, "FCkecked", (await $.and_((await $.v(C, "FTopAdded")), async () => (await $.v(C, "FLeftAdded")))));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedPosPropertiesEh", "PropertyDeleted", async function PropertyDeleted(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.Top"))) {
    await $.set(C, "FTopAdded", false);
  }
  if ($.truthy($.eq(L0["proppath"], "<P>.Left"))) {
    await $.set(C, "FLeftAdded", false);
  }
  await $.set(C, "FCkecked", (await $.and_((await $.v(C, "FTopAdded")), async () => (await $.v(C, "FLeftAdded")))));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedPosPropertiesEh", "SetCkecked", async function SetCkecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"achecked": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["achecked"]);
  if ($.truthy($.ne(L0["achecked"], (await $.v(C, "FCkecked"))))) {
    if ($.truthy(L0["achecked"])) {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.Top"])));
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.Left"])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.Top"])));
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.Left"])));
    }
    await $.inherited(Self, "TPredifinedPosPropertiesEh", "SetCkecked", [L0["achecked"]], arguments);
  }
  return L0.result;
}, {"params": ["AChecked"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPredifinedSizePropertiesEh", "Caprion", async function Caprion(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "Form Size";
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPredifinedSizePropertiesEh", "PropertyAdded", async function PropertyAdded(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.Height"))) {
    await $.set(C, "FHeightAdded", true);
  }
  if ($.truthy($.eq(L0["proppath"], "<P>.Width"))) {
    await $.set(C, "FWidthAdded", true);
  }
  if ($.truthy($.eq(L0["proppath"], "<P>.PixelsPerInch"))) {
    await $.set(C, "FPixelsPerInchAdded", true);
  }
  await $.set(C, "FCkecked", (await $.and_((await $.and_((await $.v(C, "FHeightAdded")), async () => (await $.v(C, "FWidthAdded")))), async () => (await $.v(C, "FPixelsPerInchAdded")))));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedSizePropertiesEh", "PropertyDeleted", async function PropertyDeleted(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.Height"))) {
    await $.set(C, "FHeightAdded", false);
  }
  if ($.truthy($.eq(L0["proppath"], "<P>.Width"))) {
    await $.set(C, "FWidthAdded", false);
  }
  if ($.truthy($.eq(L0["proppath"], "<P>.PixelsPerInch"))) {
    await $.set(C, "FPixelsPerInchAdded", false);
  }
  await $.set(C, "FCkecked", (await $.and_((await $.and_((await $.v(C, "FHeightAdded")), async () => (await $.v(C, "FWidthAdded")))), async () => (await $.v(C, "FPixelsPerInchAdded")))));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedSizePropertiesEh", "SetCkecked", async function SetCkecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"achecked": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["achecked"]);
  if ($.truthy($.ne(L0["achecked"], (await $.v(C, "FCkecked"))))) {
    if ($.truthy(L0["achecked"])) {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.Height"])));
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.Width"])));
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.PixelsPerInch"])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.Height"])));
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.Width"])));
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.PixelsPerInch"])));
    }
    await $.inherited(Self, "TPredifinedSizePropertiesEh", "SetCkecked", [L0["achecked"]], arguments);
  }
  return L0.result;
}, {"params": ["AChecked"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPredifinedStatePropertiesEh", "Caprion", async function Caprion(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "Form State";
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPredifinedStatePropertiesEh", "PropertyAdded", async function PropertyAdded(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.WindowState"))) {
    await $.set(C, "FStateAdded", true);
  }
  await $.set(C, "FCkecked", (await $.v(C, "FStateAdded")));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedStatePropertiesEh", "PropertyDeleted", async function PropertyDeleted(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), "proppath": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["component", "proppath"]);
  if ($.truthy($.eq(L0["proppath"], "<P>.WindowState"))) {
    await $.set(C, "FStateAdded", false);
  }
  await $.set(C, "FCkecked", (await $.v(C, "FStateAdded")));
  L0["result"] = (await $.v(C, "FCkecked"));
  return L0.result;
}, {"params": ["Component", "PropPath"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.method("TPredifinedStatePropertiesEh", "SetCkecked", async function SetCkecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"achecked": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["achecked"]);
  if ($.truthy($.ne(L0["achecked"], (await $.v(C, "FCkecked"))))) {
    if ($.truthy(L0["achecked"])) {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainAddPropertyNode", ["<P>.WindowState"])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "FEditForm")), "MainDeletePropertyNode", ["<P>.WindowState"])));
    }
    await $.inherited(Self, "TPredifinedStatePropertiesEh", "SetCkecked", [L0["achecked"]], arguments);
  }
  return L0.result;
}, {"params": ["AChecked"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PredifinedPropsClassList", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.stmt((await $.call(C, "RegisterPredifinedPropsClass", [(await $.v(C, "TPredifinedActiveControlEh"))])));
  await $.stmt((await $.call(C, "RegisterPredifinedPropsClass", [(await $.v(C, "TPredifinedPosPropertiesEh"))])));
  await $.stmt((await $.call(C, "RegisterPredifinedPropsClass", [(await $.v(C, "TPredifinedSizePropertiesEh"))])));
  await $.stmt((await $.call(C, "RegisterPredifinedPropsClass", [(await $.v(C, "TPredifinedStatePropertiesEh"))])));
  return L0.result;
});
  return U;
}

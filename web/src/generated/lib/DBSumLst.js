// Generated from QDBSumLst.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("QDBSumLst", ["SysUtils", "Classes", "DB", "TypInfo", "Variants"]);
  const C = [U];
  U.enumType("tgroupoperation", 3);
  U.const("goSum", 0);
  U.const("goAvg", 1);
  U.const("goCount", 2);
  U.defClass("TDBSum", "TCollectionItem", {"ffieldname": {"name": "FFieldName", "type": "String"}, "fgroupoperation": {"name": "FGroupOperation", "type": "TGroupOperation"}, "value": {"name": "Value", "type": "Currency"}, "fnotnullrecordcount": {"name": "FNotNullRecordCount", "type": "Integer"}, "fsumvalueassum": {"name": "FSumValueAsSum", "type": "Currency"}, "varvalue": {"name": "VarValue", "type": "Variant"}, "sumvalue": {"name": "SumValue", "type": "Currency"}}, {"fieldname": {"name": "FieldName", "read": "FFieldName", "write": "SetFieldName"}, "groupoperation": {"name": "GroupOperation", "read": "FGroupOperation", "write": "SetGroupOperation"}});
  U.defClass("TDBSumCollection", "TCollection", {"fowner": {"name": "FOwner", "type": "TPersistent"}}, {"items": {"name": "Items", "read": "GetItem", "write": "SetItem"}});
  U.defClass("TDBSumListProducer", "TPersistent", {"fvirtualrecords": {"name": "FVirtualRecords", "type": "Boolean"}, "changing": {"name": "Changing", "type": "Boolean"}, "factive": {"name": "FActive", "type": "Boolean"}, "fdataset": {"name": "FDataSet", "type": "TDataSet"}, "fdesigntimework": {"name": "FDesignTimeWork", "type": "Boolean"}, "feventsoverloaded": {"name": "FEventsOverloaded", "type": "Boolean"}, "fexternalrecalc": {"name": "FExternalRecalc", "type": "Boolean"}, "filter": {"name": "Filter", "type": "String"}, "filtered": {"name": "Filtered", "type": "Boolean"}, "fmasterdataset": {"name": "FMasterDataset", "type": "TDataset"}, "fmasterpropinfo": {"name": "FMasterPropInfo", "type": "PPropInfo"}, "foldrecno": {"name": "FOldRecNo", "type": "Integer"}, "fonafterrecalcall": {"name": "FOnAfterRecalcAll", "type": "TNotifyEvent"}, "fonrecalcall": {"name": "FOnRecalcAll", "type": "TNotifyEvent"}, "fowner": {"name": "FOwner", "type": "TComponent"}, "fsumcollection": {"name": "FSumCollection", "type": "TDBSumCollection"}, "fsumlistchanged": {"name": "FSumListChanged", "type": "TNotifyEvent"}, "ftryedinsert": {"name": "FTryedInsert", "type": "Boolean"}, "fvirtualreclist": {"name": "FVirtualRecList", "type": "TList"}, "oldaftercancel": {"name": "OldAfterCancel", "type": "TDataSetNotifyEvent"}, "oldafterclose": {"name": "OldAfterClose", "type": "TDataSetNotifyEvent"}, "oldafteredit": {"name": "OldAfterEdit", "type": "TDataSetNotifyEvent"}, "oldafterinsert": {"name": "OldAfterInsert", "type": "TDataSetNotifyEvent"}, "oldafteropen": {"name": "OldAfterOpen", "type": "TDataSetNotifyEvent"}, "oldafterpost": {"name": "OldAfterPost", "type": "TDataSetNotifyEvent"}, "oldafterscroll": {"name": "OldAfterScroll", "type": "TDataSetNotifyEvent"}, "oldbeforedelete": {"name": "OldBeforeDelete", "type": "TDataSetNotifyEvent"}, "oldmasterafterscroll": {"name": "OldMasterAfterScroll", "type": "TDataSetNotifyEvent"}}, {"active": {"name": "Active", "read": "FActive", "write": "SetActive"}, "dataset": {"name": "DataSet", "read": "FDataSet", "write": "SetDataSet"}, "externalrecalc": {"name": "ExternalRecalc", "read": "FExternalRecalc", "write": "SetExternalRecalc"}, "recno": {"name": "RecNo", "read": "GetRecNo", "write": "SetRecNo"}, "sumcollection": {"name": "SumCollection", "read": "FSumCollection", "write": "SetSumCollection"}, "virtualrecords": {"name": "VirtualRecords", "read": "FVirtualRecords", "write": "SetVirtualRecords"}, "sumlistchanged": {"name": "SumListChanged", "read": "FSumListChanged", "write": "FSumListChanged"}, "onafterrecalcall": {"name": "OnAfterRecalcAll", "read": "FOnAfterRecalcAll", "write": "FOnAfterRecalcAll"}, "onrecalcall": {"name": "OnRecalcAll", "read": "FOnRecalcAll", "write": "FOnRecalcAll"}});
  U.defClass("TDBSumList", "TComponent", {"fsumlistproducer": {"name": "FSumListProducer", "type": "TDBSumListProducer"}}, {"recno": {"name": "RecNo", "read": "GetRecNo", "write": "SetRecNo"}, "active": {"name": "Active", "read": "GetActive", "write": "SetActive"}, "dataset": {"name": "DataSet", "read": "GetDataSet", "write": "SetDataSet"}, "externalrecalc": {"name": "ExternalRecalc", "read": "GetExternalRecalc", "write": "SetExternalRecalc"}, "sumcollection": {"name": "SumCollection", "read": "GetSumCollection", "write": "SetSumCollection"}, "virtualrecords": {"name": "VirtualRecords", "read": "GetVirtualRecords", "write": "SetVirtualRecords"}, "sumlistchanged": {"name": "SumListChanged", "read": "GetSumListChanged", "write": "SetSumListChanged"}, "onafterrecalcall": {"name": "OnAfterRecalcAll", "read": "GetOnAfterRecalcAll", "write": "SetOnAfterRecalcAll"}, "onrecalcall": {"name": "OnRecalcAll", "read": "GetOnRecalcAll", "write": "SetOnRecalcAll"}});
  U.init(async () => {
  });
  U.method("TDBSumListProducer", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TDBSumListProducer", "Create", null, arguments);
  await $.set(C, "FDesignTimeWork", false);
  await $.set(C, "FOwner", L0["aowner"]);
  await $.set(C, "FSumCollection", (await $.mcall((await $.v(C, "TDBSumCollection")), "Create", [(await $.v(C, "TDBSum"))])));
  await $.mset((await $.v(C, "FSumCollection")), "FOwner", Self);
  await $.set(C, "FActive", true);
  await $.set(C, "FVirtualRecList", (await $.mv((await $.v(C, "TList")), "Create")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TDBSumListProducer", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "Deactivate", [false])));
  await $.mcall((await $.v(C, "FVirtualRecList")), "Free", []);
  await $.mcall((await $.v(C, "FSumCollection")), "Free", []);
  await $.inherited(Self, "TDBSumListProducer", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TDBSumListProducer", "Assign", async function Assign(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["source"]);
  if ($.truthy($.is_(L0["source"], "TDBSumListProducer"))) {
    await $.set(C, "Active", (await $.mv((await $.call(C, "TDBSumListProducer", [L0["source"]])), "Active")));
    await $.set(C, "DataSet", (await $.mv((await $.call(C, "TDBSumListProducer", [L0["source"]])), "DataSet")));
    await $.set(C, "ExternalRecalc", (await $.mv((await $.call(C, "TDBSumListProducer", [L0["source"]])), "ExternalRecalc")));
    await $.stmt((await $.mcall((await $.v(C, "SumCollection")), "Assign", [(await $.mv((await $.call(C, "TDBSumListProducer", [L0["source"]])), "SumCollection"))])));
    await $.set(C, "SumListChanged", (await $.mv((await $.call(C, "TDBSumListProducer", [L0["source"]])), "SumListChanged")));
    await $.set(C, "VirtualRecords", (await $.mv((await $.call(C, "TDBSumListProducer", [L0["source"]])), "VirtualRecords")));
    await $.set(C, "OnAfterRecalcAll", (await $.mref((await $.call(C, "TDBSumListProducer", [L0["source"]])), "OnAfterRecalcAll")));
    await $.set(C, "OnRecalcAll", (await $.mref((await $.call(C, "TDBSumListProducer", [L0["source"]])), "OnRecalcAll")));
  } else {
    await $.inherited(Self, "TDBSumListProducer", "Assign", [L0["source"]], arguments);
  }
  return L0.result;
}, {"params": ["Source"], "kind": "procedure", "ptypes": ["TPersistent"]});
  U.method("TDBSumListProducer", "GetMasterDataSet", async function GetMasterDataSet(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"apropinfo": $.copyArg(p0), result: null, "propvalue": null};
  await $.fixArgs(L0, ["apropinfo"]);
  L0["result"] = null;
  L0["propvalue"] = null;
  if ($.truthy(($.ne(L0["apropinfo"], null)))) {
    if ($.truthy($.eq((await $.mv((await $.mv(L0["apropinfo"], "PropType")), "Kind")), (await $.v(C, "tkClass"))))) {
      try {
        L0["propvalue"] = ((await $.call(C, "TObject", [(await $.call(C, "GetOrdProp", [(await $.v(C, "FDataSet")), L0["apropinfo"]]))])));
      } catch ($t1) {
        $.rethrowControl($t1);
        $.handled($t1);
      }
    }
  }
  if ($.truthy(($.ne(L0["propvalue"], null)))) {
    L0["result"] = (await $.mv(L0["propvalue"], "DataSet"));
  }
  return L0.result;
}, {"params": ["APropInfo"], "kind": "function", "ptypes": ["PPropInfo"]});
  U.method("TDBSumListProducer", "ResetMasterInfo", async function ResetMasterInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FMasterDataSet"))])))) {
    await $.mset((await $.v(C, "FMasterDataSet")), "AfterScroll", (await $.v(C, "OldMasterAfterScroll")));
  }
  await $.set(C, "OldMasterAfterScroll", null);
  await $.set(C, "FMasterPropInfo", (await $.call(C, "GetPropInfo", [(await $.mv((await $.v(C, "FDataSet")), "ClassInfo")), "MasterSource"])));
  await $.set(C, "FMasterDataSet", (await $.call(C, "GetMasterDataSet", [(await $.v(C, "FMasterPropInfo"))])));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FMasterDataSet"))])))) {
    await $.set(C, "OldMasterAfterScroll", (await $.mv((await $.v(C, "FMasterDataSet")), "AfterScroll")));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FMasterDataSet"))])))) {
    await $.mset((await $.v(C, "FMasterDataSet")), "AfterScroll", (await $.v(C, "MasterDataSetAfterScroll")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "SetDataSetEvents", async function SetDataSetEvents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "FDataSet"))])), async () => ($.eq((await $.v(C, "FEventsOverloaded")), false)))))) {
    await $.set(C, "FMasterPropInfo", (await $.call(C, "GetPropInfo", [(await $.mv((await $.v(C, "FDataSet")), "ClassInfo")), "MasterSource"])));
    await $.set(C, "FMasterDataSet", (await $.call(C, "GetMasterDataSet", [(await $.v(C, "FMasterPropInfo"))])));
    await $.set(C, "OldAfterEdit", (await $.mv((await $.v(C, "FDataSet")), "AfterEdit")));
    await $.set(C, "OldAfterInsert", (await $.mv((await $.v(C, "FDataSet")), "AfterInsert")));
    await $.set(C, "OldAfterOpen", (await $.mv((await $.v(C, "FDataSet")), "AfterOpen")));
    await $.set(C, "OldAfterPost", (await $.mv((await $.v(C, "FDataSet")), "AfterPost")));
    await $.set(C, "OldAfterScroll", (await $.mv((await $.v(C, "FDataSet")), "AfterScroll")));
    await $.set(C, "OldBeforeDelete", (await $.mv((await $.v(C, "FDataSet")), "BeforeDelete")));
    await $.set(C, "OldAfterClose", (await $.mv((await $.v(C, "FDataSet")), "AfterClose")));
    await $.set(C, "OldAfterCancel", (await $.mv((await $.v(C, "FDataSet")), "AfterCancel")));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FMasterDataSet"))])))) {
      await $.set(C, "OldMasterAfterScroll", (await $.mv((await $.v(C, "FMasterDataSet")), "AfterScroll")));
    }
    await $.mset((await $.v(C, "FDataSet")), "AfterEdit", (await $.v(C, "DataSetAfterEdit")));
    await $.mset((await $.v(C, "FDataSet")), "AfterInsert", (await $.v(C, "DataSetAfterInsert")));
    await $.mset((await $.v(C, "FDataSet")), "AfterOpen", (await $.v(C, "DataSetAfterOpen")));
    await $.mset((await $.v(C, "FDataSet")), "AfterPost", (await $.v(C, "DataSetAfterPost")));
    await $.mset((await $.v(C, "FDataSet")), "AfterScroll", (await $.v(C, "DataSetAfterScroll")));
    await $.mset((await $.v(C, "FDataSet")), "BeforeDelete", (await $.v(C, "DataSetBeforeDelete")));
    await $.mset((await $.v(C, "FDataSet")), "AfterClose", (await $.v(C, "DataSetAfterClose")));
    await $.mset((await $.v(C, "FDataSet")), "AfterCancel", (await $.v(C, "DataSetAfterCancel")));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FMasterDataSet"))])))) {
      await $.mset((await $.v(C, "FMasterDataSet")), "AfterScroll", (await $.v(C, "MasterDataSetAfterScroll")));
    }
    await $.set(C, "FEventsOverloaded", true);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "ReturnEvents", async function ReturnEvents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  if ($.truthy((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "FDataSet"))])), async () => ($.eq((await $.v(C, "FEventsOverloaded")), true)))))) {
    await $.mset((await $.v(C, "FDataSet")), "AfterEdit", (await $.v(C, "OldAfterEdit")));
    await $.mset((await $.v(C, "FDataSet")), "AfterInsert", (await $.v(C, "OldAfterInsert")));
    await $.mset((await $.v(C, "FDataSet")), "AfterOpen", (await $.v(C, "OldAfterOpen")));
    await $.mset((await $.v(C, "FDataSet")), "AfterPost", (await $.v(C, "OldAfterPost")));
    await $.mset((await $.v(C, "FDataSet")), "AfterScroll", (await $.v(C, "OldAfterScroll")));
    await $.mset((await $.v(C, "FDataSet")), "BeforeDelete", (await $.v(C, "OldBeforeDelete")));
    await $.mset((await $.v(C, "FDataSet")), "AfterClose", (await $.v(C, "OldAfterClose")));
    await $.mset((await $.v(C, "FDataSet")), "AfterCancel", (await $.v(C, "OldAfterCancel")));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FMasterDataSet"))])))) {
      await $.mset((await $.v(C, "FMasterDataSet")), "AfterScroll", (await $.v(C, "OldMasterAfterScroll")));
    }
    await $.set(C, "OldMasterAfterScroll", null);
    await $.set(C, "OldAfterEdit", null);
    await $.set(C, "OldAfterInsert", null);
    await $.set(C, "OldAfterOpen", null);
    await $.set(C, "OldAfterPost", null);
    await $.set(C, "OldAfterScroll", null);
    await $.set(C, "OldBeforeDelete", null);
    await $.set(C, "OldAfterClose", null);
    await $.set(C, "OldAfterCancel", null);
    await $.set(C, "FMasterPropInfo", null);
    await $.set(C, "FMasterDataSet", null);
    await $.set(C, "FEventsOverloaded", false);
    { const $t2 = $.sub((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 1);
      L0["i"] = 0;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
        await $.stmt((await $.mcall((await $.v(C, "FDataSet")), "FreeBookmark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["i"]]))])));
        await $.tick();
      }
    }
    await $.mcall((await $.v(C, "FVirtualRecList")), "Clear", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "SetDataSet", async function SetDataSet(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "oldactive": false};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.and_((await $.and_((await $.call(C, "Assigned", [L0["value"]])), async () => ($.eq((await $.v(C, "FDataSet")), L0["value"])))), async () => ($.in_((await $.v(C, "csDestroying")), (await $.mv(L0["value"], "ComponentState")))))))) {
    await $.stmt($.call(C, "ReturnEvents", []));
    await $.set(C, "FDataSet", null);
  }
  if ($.truthy(($.eq((await $.v(C, "FDataSet")), L0["value"])))) {
    return L0.result;
  }
  if ($.truthy((await $.and_($.not(($.in_((await $.v(C, "csLoading")), (await $.mv((await $.v(C, "FOwner")), "ComponentState"))))), async () => ((await $.or_((await $.v(C, "FDesignTimeWork")), async () => $.not(($.in_((await $.v(C, "csDesigning")), (await $.mv((await $.v(C, "FOwner")), "ComponentState")))))))))))) {
    L0["oldactive"] = (await $.v(C, "Active"));
    await $.stmt((await $.call(C, "Deactivate", [true])));
    await $.set(C, "FDataSet", L0["value"]);
    if ($.truthy(L0["oldactive"])) {
      await $.stmt((await $.call(C, "Activate", [true])));
    }
  } else {
    await $.set(C, "FDataSet", L0["value"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "Loaded", async function Loaded(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "FDataSet"))])), async () => (await $.v(C, "Active")))))) {
    await $.stmt((await $.call(C, "Activate", [true])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "RecalcAll", async function RecalcAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "item": null, "needrecalc": false};
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(((await $.and_($.not((await $.v(C, "FDesignTimeWork"))), async () => ($.in_((await $.v(C, "csDesigning")), (await $.mv((await $.v(C, "FOwner")), "ComponentState"))))))), async () => ($.in_((await $.v(C, "csLoading")), (await $.mv((await $.v(C, "FOwner")), "ComponentState")))))), async () => ($.eq((await $.v(C, "Active")), false)))), async () => $.not((await $.call(C, "Assigned", [(await $.v(C, "DataSet"))]))))), async () => ($.eq((await $.mv((await $.v(C, "DataSet")), "Active")), false)))), async () => ($.eq((await $.v(C, "FEventsOverloaded")), false)))))) {
    return L0.result;
  }
  try {
    await $.stmt($.call(C, "ClearSumValues", []));
    await $.set(C, "FOldRecNo", (-(1)));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnRecalcAll"))])))) {
      await $.stmt((await $.call(C, "OnRecalcAll", [Self])));
    }
    if ($.truthy((await $.v(C, "ExternalRecalc")))) {
      return L0.result;
    }
    L0["needrecalc"] = false;
    { const $t4 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
      L0["i"] = 0;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
        if ($.truthy((await $.or_(($.eq((await $.mv((await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))])), "GroupOperation")), (await $.v(C, "goCount")))), async () => ($.ne((await $.mv((await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))])), "FieldName")), "")))))) {
          L0["needrecalc"] = true;
          break;
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.and_($.not((await $.mv((await $.v(C, "FDataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))))) {
      L0["needrecalc"] = true;
    }
    if ($.truthy(L0["needrecalc"])) {
      await $.mcall((await $.v(C, "FDataSet")), "DisableControls", []);
      { const $t6 = $.sub((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 1);
        L0["i"] = 0;
        let $t7 = true;
        for (;;) {
          if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
          $t7 = false;
          if (!($.ord(L0["i"]) <= $.ord($t6))) break;
          await $.stmt((await $.mcall((await $.v(C, "FDataSet")), "FreeBookmark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["i"]]))])));
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "FVirtualRecList")), "Clear", []);
      await $.set(C, "Changing", true);
      await $.mcall((await $.v(C, "FDataSet")), "First", []);
      while ($.truthy($.eq((await $.mv((await $.v(C, "FDataSet")), "Eof")), false))) {
        { const $t8 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
          L0["i"] = 0;
          let $t9 = true;
          for (;;) {
            if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
            $t9 = false;
            if (!($.ord(L0["i"]) <= $.ord($t8))) break;
            L0["item"] = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
            if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "GroupOperation")), (await $.v(C, "goCount")))), async () => ($.ne((await $.mv(L0["item"], "FieldName")), "")))))) {
              { const $t10 = (await $.mv(L0["item"], "GroupOperation"));
                if ($.eq($t10, (await $.v(C, "goSum")))) {
                  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull")), false)))) {
                    await $.mset(L0["item"], "SumValue", $.add((await $.mv(L0["item"], "SumValue")), (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat"))));
                  }
                }
                else if ($.eq($t10, (await $.v(C, "goCount")))) {
                  if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "FieldName")), "")), async () => $.not((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull"))))))) {
                    await $.mset(L0["item"], "SumValue", $.add((await $.mv(L0["item"], "SumValue")), 1));
                  }
                }
                else if ($.eq($t10, (await $.v(C, "goAvg")))) {
                  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull")), false)))) {
                    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["item"], "FNotNullRecordCount")), async ($t11) => { await $.mset(L0["item"], "FNotNullRecordCount", $t11); })])));
                  }
                  await $.mset(L0["item"], "FSumValueAsSum", $.add((await $.mv(L0["item"], "FSumValueAsSum")), (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat"))));
                }
              }
            }
            await $.tick();
          }
        }
        if ($.truthy((await $.and_($.not((await $.mv((await $.v(C, "FDataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))))) {
          await $.stmt((await $.mcall((await $.v(C, "FVirtualRecList")), "Add", [(await $.call(C, "Pointer", [(await $.mv((await $.v(C, "FDataSet")), "GetBookmark"))]))])));
        }
        await $.mcall((await $.v(C, "FDataSet")), "Next", []);
        await $.tick();
      }
      await $.mcall((await $.v(C, "FDataSet")), "First", []);
      { const $t12 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
        L0["i"] = 0;
        let $t13 = true;
        for (;;) {
          if (!$t13) { L0["i"] = $.succ(L0["i"], 1); }
          $t13 = false;
          if (!($.ord(L0["i"]) <= $.ord($t12))) break;
          {
            const $t14 = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
            if ($.truthy($.eq((await $.wv([$t14], "GroupOperation", C, false)), (await $.wv([$t14], "goAvg", C, false))))) {
              if ($.truthy($.ne((await $.wv([$t14], "FNotNullRecordCount", C, false)), 0))) {
                await $.wset([$t14], "SumValue", $.fdiv((await $.wv([$t14], "FSumValueAsSum", C, false)), (await $.wv([$t14], "FNotNullRecordCount", C, false))), C);
              } else {
                await $.wset([$t14], "SumValue", 0, C);
              }
            }
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "FDataSet")), "EnableControls", []);
    }
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnAfterRecalcAll"))])))) {
      await $.stmt((await $.call(C, "OnAfterRecalcAll", [Self])));
    }
  } finally {
    await $.set(C, "Filtered", (await $.mv((await $.v(C, "FDataSet")), "Filtered")));
    await $.set(C, "Filter", (await $.mv((await $.v(C, "FDataSet")), "Filter")));
    await $.set(C, "Changing", false);
    await $.stmt($.call(C, "DoSumListChanged", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "DataSetAfterEdit", async function DataSetAfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0, "item": null};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy(($.eq((await $.v(C, "Active")), false)))) {
    return L0.result;
  }
  { const $t15 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
    L0["i"] = 0;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      L0["item"] = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
      if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "GroupOperation")), (await $.v(C, "goCount")))), async () => ($.ne((await $.mv(L0["item"], "FieldName")), "")))))) {
        { const $t17 = (await $.mv(L0["item"], "GroupOperation"));
          if ($.eq($t17, (await $.v(C, "goSum"))) || $.eq($t17, (await $.v(C, "goAvg")))) {
            if ($.truthy(($.eq((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull")), false)))) {
              await $.mset(L0["item"], "Value", (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat")));
            } else {
              await $.mset(L0["item"], "Value", 0);
            }
            await $.mset(L0["item"], "VarValue", (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsVariant")));
          }
          else if ($.eq($t17, (await $.v(C, "goCount")))) {
            if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "FieldName")), "")), async () => $.not((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull"))))))) {
              await $.mset(L0["item"], "Value", 1);
            } else {
              await $.mset(L0["item"], "Value", 0);
            }
          }
        }
      }
      await $.tick();
    }
  }
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterEdit"))]))))) {
    await $.stmt((await $.call(C, "OldAfterEdit", [L0["dataset"]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetAfterInsert", async function DataSetAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0, "item": null, "abookmark": null};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.v(C, "Active")))) {
    { const $t18 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
      L0["i"] = 0;
      let $t19 = true;
      for (;;) {
        if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
        $t19 = false;
        if (!($.ord(L0["i"]) <= $.ord($t18))) break;
        L0["item"] = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
        if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "GroupOperation")), (await $.v(C, "goCount")))), async () => ($.ne((await $.mv(L0["item"], "FieldName")), "")))))) {
          { const $t20 = (await $.mv(L0["item"], "GroupOperation"));
            if ($.eq($t20, (await $.v(C, "goSum"))) || $.eq($t20, (await $.v(C, "goAvg")))) {
              await $.mset(L0["item"], "Value", 0);
              await $.mset(L0["item"], "VarValue", (await $.v(C, "Null")));
            }
            else if ($.eq($t20, (await $.v(C, "goCount")))) {
              if ($.truthy((await $.and_($.not(($.eq((await $.mv(L0["item"], "FieldName")), ""))), async () => $.not((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull"))))))) {
                await $.mset(L0["item"], "Value", 1);
              } else {
                await $.mset(L0["item"], "Value", 0);
              }
            }
          }
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.and_($.not((await $.mv((await $.v(C, "FDataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))))) {
      L0["abookmark"] = (await $.mv((await $.v(C, "FDataSet")), "GetBookmark"));
      if ($.truthy((await $.call(C, "Assigned", [L0["abookmark"]])))) {
        await $.stmt((await $.mcall((await $.v(C, "FVirtualRecList")), "Add", [(await $.call(C, "Pointer", [L0["abookmark"]]))])));
      } else {
        await $.set(C, "FTryedInsert", true);
      }
    }
  }
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterInsert"))]))))) {
    await $.stmt((await $.call(C, "OldAfterInsert", [L0["dataset"]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetAfterOpen", async function DataSetAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.v(C, "Active")))) {
    await $.stmt($.call(C, "RecalcAll", []));
  }
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterOpen"))]))))) {
    await $.stmt((await $.call(C, "OldAfterOpen", [L0["dataset"]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetAfterPost", async function DataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0, "item": null, "arecno": 0, "c": 0};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.v(C, "Active")))) {
    { const $t21 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
      L0["i"] = 0;
      let $t22 = true;
      for (;;) {
        if (!$t22) { L0["i"] = $.succ(L0["i"], 1); }
        $t22 = false;
        if (!($.ord(L0["i"]) <= $.ord($t21))) break;
        L0["item"] = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
        if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "GroupOperation")), (await $.v(C, "goCount")))), async () => ($.ne((await $.mv(L0["item"], "FieldName")), "")))))) {
          { const $t23 = (await $.mv(L0["item"], "GroupOperation"));
            if ($.eq($t23, (await $.v(C, "goSum")))) {
              if ($.truthy(($.eq((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull")), false)))) {
                await $.mset(L0["item"], "SumValue", $.add($.sub((await $.mv(L0["item"], "SumValue")), (await $.mv(L0["item"], "Value"))), (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat"))));
              } else {
                await $.mset(L0["item"], "SumValue", $.sub((await $.mv(L0["item"], "SumValue")), (await $.mv(L0["item"], "Value"))));
              }
            }
            else if ($.eq($t23, (await $.v(C, "goCount")))) {
              if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "FieldName")), "")), async () => $.not((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull"))))))) {
                await $.mset(L0["item"], "SumValue", $.add($.sub((await $.mv(L0["item"], "SumValue")), (await $.mv(L0["item"], "Value"))), 1));
              } else {
                await $.mset(L0["item"], "SumValue", $.sub((await $.mv(L0["item"], "SumValue")), (await $.mv(L0["item"], "Value"))));
              }
            }
            else if ($.eq($t23, (await $.v(C, "goAvg")))) {
              if ($.truthy(($.eq((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull")), false)))) {
                if ($.truthy($.eq((await $.mv(L0["item"], "VarValue")), (await $.v(C, "Null"))))) {
                  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["item"], "FNotNullRecordCount")), async ($t24) => { await $.mset(L0["item"], "FNotNullRecordCount", $t24); })])));
                }
                await $.mset(L0["item"], "FSumValueAsSum", $.add($.sub((await $.mv(L0["item"], "FSumValueAsSum")), (await $.mv(L0["item"], "Value"))), (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat"))));
              } else {
                if ($.truthy($.ne((await $.mv(L0["item"], "VarValue")), (await $.v(C, "Null"))))) {
                  await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L0["item"], "FNotNullRecordCount")), async ($t25) => { await $.mset(L0["item"], "FNotNullRecordCount", $t25); })])));
                }
                await $.mset(L0["item"], "FSumValueAsSum", $.sub((await $.mv(L0["item"], "FSumValueAsSum")), (await $.mv(L0["item"], "Value"))));
              }
              if ($.truthy($.ne((await $.mv(L0["item"], "FNotNullRecordCount")), 0))) {
                await $.mset(L0["item"], "SumValue", $.fdiv((await $.mv(L0["item"], "FSumValueAsSum")), (await $.mv(L0["item"], "FNotNullRecordCount"))));
              } else {
                await $.mset(L0["item"], "SumValue", 0);
              }
            }
          }
        }
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "FDataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))), async () => (await $.v(C, "FTryedInsert")))), true))) {
      L0["arecno"] = (await $.v(C, "FOldRecNo"));
      if ($.truthy((await $.or_(($.eq(L0["arecno"], (-(1)))), async () => ($.ge(L0["arecno"], (await $.mv((await $.v(C, "FVirtualRecList")), "Count")))))))) {
        L0["arecno"] = 0;
      }
      if ($.truthy(($.gt((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 0)))) {
        L0["c"] = (await $.mcall(L0["dataset"], "CompareBookmarks", [(await $.call(C, "TBookMark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["arecno"]]))])), (await $.call(C, "TBookMark", [(await $.mv((await $.v(C, "FDataSet")), "Bookmark"))]))]));
      } else {
        L0["c"] = 0;
      }
      if ($.truthy(($.gt(L0["c"], 0)))) {
        while ($.truthy($.gt(L0["c"], 0))) {
          await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["arecno"], async ($t26) => { L0["arecno"] = $t26; })])));
          if ($.truthy(($.lt(L0["arecno"], 0)))) {
            break;
          }
          L0["c"] = (await $.mcall(L0["dataset"], "CompareBookmarks", [(await $.call(C, "TBookMark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["arecno"]]))])), (await $.call(C, "TBookMark", [(await $.mv((await $.v(C, "FDataSet")), "Bookmark"))]))]));
          await $.tick();
        }
      } else {
        if ($.truthy(($.lt(L0["c"], 0)))) {
          while ($.truthy($.lt(L0["c"], 0))) {
            await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["arecno"], async ($t27) => { L0["arecno"] = $t27; })])));
            if ($.truthy(($.ge(L0["arecno"], (await $.mv((await $.v(C, "FVirtualRecList")), "Count")))))) {
              break;
            }
            L0["c"] = (await $.mcall(L0["dataset"], "CompareBookmarks", [(await $.call(C, "TBookMark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["arecno"]]))])), (await $.call(C, "TBookMark", [(await $.mv((await $.v(C, "FDataSet")), "Bookmark"))]))]));
            await $.tick();
          }
        }
      }
      await $.stmt((await $.mcall((await $.v(C, "FVirtualRecList")), "Insert", [L0["arecno"], (await $.call(C, "Pointer", [(await $.mv((await $.v(C, "FDataSet")), "GetBookmark"))]))])));
      await $.set(C, "FTryedInsert", false);
    }
    await $.stmt($.call(C, "DoSumListChanged", []));
  }
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterPost"))]))))) {
    await $.stmt((await $.call(C, "OldAfterPost", [L0["dataset"]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetAfterScroll", async function DataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterScroll"))]))))) {
    await $.stmt((await $.call(C, "OldAfterScroll", [L0["dataset"]])));
  }
  if ($.truthy(($.eq((await $.v(C, "Active")), false)))) {
    return L0.result;
  }
  if ($.truthy(($.eq((await $.v(C, "Changing")), false)))) {
    if ($.truthy(((await $.or_(((await $.and_((await $.mv(L0["dataset"], "Filtered")), async () => ($.ne((await $.v(C, "Filter")), (await $.mv(L0["dataset"], "Filter"))))))), async () => ($.ne((await $.v(C, "Filtered")), (await $.mv(L0["dataset"], "Filtered"))))))))) {
      await $.stmt($.call(C, "RecalcAll", []));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetBeforeDelete", async function DataSetBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0, "item": null};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldBeforeDelete"))]))))) {
    await $.stmt((await $.call(C, "OldBeforeDelete", [L0["dataset"]])));
  }
  if ($.truthy(($.eq((await $.v(C, "Active")), false)))) {
    return L0.result;
  }
  { const $t28 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
    L0["i"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["i"] = $.succ(L0["i"], 1); }
      $t29 = false;
      if (!($.ord(L0["i"]) <= $.ord($t28))) break;
      L0["item"] = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
      if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "GroupOperation")), (await $.v(C, "goCount")))), async () => ($.ne((await $.mv(L0["item"], "FieldName")), "")))))) {
        { const $t30 = (await $.mv(L0["item"], "GroupOperation"));
          if ($.eq($t30, (await $.v(C, "goSum")))) {
            await $.mset(L0["item"], "SumValue", $.sub((await $.mv(L0["item"], "SumValue")), (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat"))));
          }
          else if ($.eq($t30, (await $.v(C, "goCount")))) {
            if ($.truthy((await $.or_(($.eq((await $.mv(L0["item"], "FieldName")), "")), async () => $.not((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull"))))))) {
              await $.mset(L0["item"], "SumValue", $.sub((await $.mv(L0["item"], "SumValue")), 1));
            }
          }
          else if ($.eq($t30, (await $.v(C, "goAvg")))) {
            await $.mset(L0["item"], "FSumValueAsSum", $.sub((await $.mv(L0["item"], "FSumValueAsSum")), (await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "AsFloat"))));
            if ($.truthy($.not((await $.mv((await $.mcall((await $.v(C, "FDataSet")), "FieldByName", [(await $.mv(L0["item"], "FieldName"))])), "IsNull"))))) {
              await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L0["item"], "FNotNullRecordCount")), async ($t31) => { await $.mset(L0["item"], "FNotNullRecordCount", $t31); })])));
            }
            if ($.truthy($.ne((await $.mv(L0["item"], "FNotNullRecordCount")), 0))) {
              await $.mset(L0["item"], "SumValue", $.fdiv((await $.mv(L0["item"], "FSumValueAsSum")), (await $.mv(L0["item"], "FNotNullRecordCount"))));
            } else {
              await $.mset(L0["item"], "SumValue", 0);
            }
          }
        }
      }
      await $.tick();
    }
  }
  if ($.truthy((await $.and_($.not((await $.mv((await $.v(C, "FDataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))))) {
    L0["i"] = (await $.call(C, "FindVirtualRecord", [(await $.call(C, "TBookmark", [(await $.mv((await $.v(C, "FDataSet")), "Bookmark"))]))]));
    if ($.truthy($.ge(L0["i"], 0))) {
      await $.stmt((await $.mcall((await $.v(C, "FDataSet")), "FreeBookmark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["i"]]))])));
      await $.stmt((await $.mcall((await $.v(C, "FVirtualRecList")), "Delete", [$.ref(async () => L0["i"], async ($t32) => { L0["i"] = $t32; })])));
    }
  }
  await $.stmt($.call(C, "DoSumListChanged", []));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetAfterClose", async function DataSetAfterClose(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.v(C, "Active")))) {
    await $.stmt($.call(C, "ClearSumValues", []));
    await $.stmt($.call(C, "DoSumListChanged", []));
    await $.set(C, "Changing", false);
  }
  if ($.truthy((await $.and_((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "FDataSet"))])), async () => (await $.call(C, "Assigned", [(await $.v(C, "FVirtualRecList"))])))), async () => ($.gt((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 0)))))) {
    { const $t33 = $.sub((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 1);
      L0["i"] = 0;
      let $t34 = true;
      for (;;) {
        if (!$t34) { L0["i"] = $.succ(L0["i"], 1); }
        $t34 = false;
        if (!($.ord(L0["i"]) <= $.ord($t33))) break;
        await $.stmt((await $.mcall((await $.v(C, "FDataSet")), "FreeBookmark", [(await $.idx((await $.v(C, "FVirtualRecList")), [L0["i"]]))])));
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "FVirtualRecList")), "Clear", []);
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterClose"))]))))) {
    await $.stmt((await $.call(C, "OldAfterClose", [L0["dataset"]])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "SetSumCollection", async function SetSumCollection(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumCollection")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDBSumCollection"]});
  U.method("TDBSumListProducer", "SetActive", async function SetActive(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(($.eq((await $.v(C, "FActive")), L0["value"])))) {
    return L0.result;
  }
  if ($.truthy(($.eq(L0["value"], true)))) {
    await $.stmt((await $.call(C, "Activate", [true])));
  }
  if ($.truthy(($.eq(L0["value"], false)))) {
    await $.stmt((await $.call(C, "Deactivate", [true])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumListProducer", "Activate", async function Activate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"arecalcall": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["arecalcall"]);
  await $.set(C, "FActive", true);
  if ($.truthy((await $.or_(($.in_((await $.v(C, "csLoading")), (await $.mv((await $.v(C, "FOwner")), "ComponentState")))), async () => ((await $.and_($.not((await $.v(C, "FDesignTimeWork"))), async () => ($.in_((await $.v(C, "csDesigning")), (await $.mv((await $.v(C, "FOwner")), "ComponentState"))))))))))) {
    return L0.result;
  }
  await $.stmt($.call(C, "SetDataSetEvents", []));
  if ($.truthy(L0["arecalcall"])) {
    await $.stmt($.call(C, "RecalcAll", []));
  }
  return L0.result;
}, {"params": ["ARecalcAll"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumListProducer", "Deactivate", async function Deactivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aclearsumvalues": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aclearsumvalues"]);
  await $.set(C, "FActive", false);
  if ($.truthy((await $.or_(($.in_((await $.v(C, "csLoading")), (await $.mv((await $.v(C, "FOwner")), "ComponentState")))), async () => ((await $.and_($.not((await $.v(C, "FDesignTimeWork"))), async () => ($.in_((await $.v(C, "csDesigning")), (await $.mv((await $.v(C, "FOwner")), "ComponentState"))))))))))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ReturnEvents", []));
  if ($.truthy(L0["aclearsumvalues"])) {
    await $.stmt($.call(C, "ClearSumValues", []));
  }
  return L0.result;
}, {"params": ["AClearSumValues"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumListProducer", "DoSumListChanged", async function DoSumListChanged(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "SumListChanged"))])))) {
    await $.stmt((await $.call(C, "SumListChanged", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "ClearSumValues", async function ClearSumValues(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "item": null};
  { const $t35 = $.sub((await $.mv((await $.v(C, "FSumCollection")), "Count")), 1);
    L0["i"] = 0;
    let $t36 = true;
    for (;;) {
      if (!$t36) { L0["i"] = $.succ(L0["i"], 1); }
      $t36 = false;
      if (!($.ord(L0["i"]) <= $.ord($t35))) break;
      L0["item"] = (await $.call(C, "TDBSum", [(await $.idx((await $.mv((await $.v(C, "FSumCollection")), "Items")), [L0["i"]]))]));
      await $.mset(L0["item"], "SumValue", 0);
      await $.mset(L0["item"], "Value", 0);
      await $.mset(L0["item"], "FSumValueAsSum", 0);
      await $.mset(L0["item"], "FNotNullRecordCount", 0);
      await $.tick();
    }
  }
  await $.stmt($.call(C, "DoSumListChanged", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "SetExternalRecalc", async function SetExternalRecalc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(($.eq((await $.v(C, "FExternalRecalc")), L0["value"])))) {
    return L0.result;
  }
  await $.set(C, "FExternalRecalc", L0["value"]);
  await $.stmt($.call(C, "RecalcAll", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumListProducer", "MasterDataSetAfterScroll", async function MasterDataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldMasterAfterScroll"))]))))) {
    await $.stmt((await $.call(C, "OldMasterAfterScroll", [L0["dataset"]])));
  }
  if ($.truthy(($.eq((await $.v(C, "Active")), false)))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "Changing")), false))) {
    await $.stmt($.call(C, "RecalcAll", []));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "DataSetAfterCancel", async function DataSetAfterCancel(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy(((await $.call(C, "Assigned", [(await $.v(C, "OldAfterCancel"))]))))) {
    await $.stmt((await $.call(C, "OldAfterCancel", [L0["dataset"]])));
  }
  await $.set(C, "FTryedInsert", false);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumListProducer", "GetOwner", async function GetOwner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FOwner"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumListProducer", "Update", async function Update(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy(($.in_((await $.v(C, "csLoading")), (await $.mv((await $.v(C, "FOwner")), "ComponentState")))))) {
    return L0.result;
  }
  if ($.truthy(($.in_((await $.v(C, "csDestroying")), (await $.mv((await $.v(C, "FOwner")), "ComponentState")))))) {
    return L0.result;
  }
  await $.stmt($.call(C, "RecalcAll", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumListProducer", "SetVirtualRecords", async function SetVirtualRecords(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(($.eq((await $.v(C, "FVirtualRecords")), L0["value"])))) {
    return L0.result;
  }
  await $.set(C, "FVirtualRecords", L0["value"]);
  if ($.truthy((await $.v(C, "FVirtualRecords")))) {
    await $.stmt($.call(C, "RecalcAll", []));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumListProducer", "GetRecNo", async function GetRecNo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "DataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))), async () => (await $.v(C, "Active")))))) {
    L0["result"] = $.add((await $.call(C, "FindVirtualRecord", [(await $.call(C, "TBookmark", [(await $.mv((await $.v(C, "DataSet")), "Bookmark"))]))])), 1);
  } else {
    L0["result"] = (await $.mv((await $.v(C, "DataSet")), "RecNo"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumListProducer", "SetRecNo", async function SetRecNo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.and_((await $.and_($.not((await $.mv((await $.v(C, "DataSet")), "IsSequenced"))), async () => (await $.v(C, "VirtualRecords")))), async () => (await $.v(C, "Active")))))) {
    await $.stmt((await $.mcall((await $.v(C, "DataSet")), "GotoBookmark", [(await $.call(C, "TBookmark", [(await $.idx((await $.v(C, "FVirtualRecList")), [$.sub(L0["value"], 1)]))]))])));
  } else {
    await $.mset((await $.v(C, "DataSet")), "RecNo", L0["value"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TDBSumListProducer", "RecordCount", async function RecordCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "DataSet"))])), async () => $.not((await $.mv((await $.v(C, "DataSet")), "IsSequenced"))))), async () => (await $.v(C, "VirtualRecords")))), async () => (await $.v(C, "Active")))))) {
    L0["result"] = (await $.mv((await $.v(C, "FVirtualRecList")), "Count"));
  } else {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "DataSet"))])))) {
      L0["result"] = (await $.mv((await $.v(C, "DataSet")), "RecordCount"));
    } else {
      L0["result"] = 0;
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumListProducer", "IsSequenced", async function IsSequenced(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.or_(((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "DataSet"))])), async () => (await $.mv((await $.v(C, "DataSet")), "IsSequenced"))))), async () => ((await $.and_((await $.and_((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "DataSet"))])), async () => (await $.v(C, "VirtualRecords")))), async () => (await $.v(C, "Active")))), async () => $.not(((await $.and_(($.eq((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 0)), async () => $.not(((await $.and_((await $.mv((await $.v(C, "DataSet")), "EOF")), async () => (await $.mv((await $.v(C, "DataSet")), "BOF")))))))))))))));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumListProducer", "FindVirtualRecord", async function FindVirtualRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"bookmark": $.copyArg(p0), result: 0, "c": 0};
  await $.fixArgs(L0, ["bookmark"]);
  L0["result"] = (-(1));
  if ($.truthy($.eq((await $.v(C, "FOldRecNo")), (-(1))))) {
    await $.set(C, "FOldRecNo", 0);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FVirtualRecList")), "Count")), 0))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.v(C, "FOldRecNo")), (await $.mv((await $.v(C, "FVirtualRecList")), "Count"))))) {
    await $.set(C, "FOldRecNo", 0);
  }
  L0["c"] = (await $.mcall((await $.v(C, "DataSet")), "CompareBookmarks", [(await $.call(C, "TBookMark", [(await $.idx((await $.v(C, "FVirtualRecList")), [(await $.v(C, "FOldRecNo"))]))])), L0["bookmark"]]));
  if ($.truthy(($.gt(L0["c"], 0)))) {
    while ($.truthy($.ne(L0["c"], 0))) {
      await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.v(C, "FOldRecNo")), async ($t37) => { await $.set(C, "FOldRecNo", $t37); })])));
      if ($.truthy(($.lt((await $.v(C, "FOldRecNo")), 0)))) {
        return L0.result;
      }
      L0["c"] = (await $.mcall((await $.v(C, "DataSet")), "CompareBookmarks", [(await $.call(C, "TBookMark", [(await $.idx((await $.v(C, "FVirtualRecList")), [(await $.v(C, "FOldRecNo"))]))])), L0["bookmark"]]));
      await $.tick();
    }
  } else {
    if ($.truthy(($.lt(L0["c"], 0)))) {
      while ($.truthy($.ne(L0["c"], 0))) {
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.v(C, "FOldRecNo")), async ($t38) => { await $.set(C, "FOldRecNo", $t38); })])));
        if ($.truthy(($.ge((await $.v(C, "FOldRecNo")), (await $.mv((await $.v(C, "FVirtualRecList")), "Count")))))) {
          return L0.result;
        }
        L0["c"] = (await $.mcall((await $.v(C, "DataSet")), "CompareBookmarks", [(await $.call(C, "TBookMark", [(await $.idx((await $.v(C, "FVirtualRecList")), [(await $.v(C, "FOldRecNo"))]))])), L0["bookmark"]]));
        await $.tick();
      }
    }
  }
  L0["result"] = (await $.v(C, "FOldRecNo"));
  return L0.result;
}, {"params": ["Bookmark"], "kind": "function", "ptypes": ["TBookmark"]});
  U.method("TDBSum", "Assign", async function Assign(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["source"]);
  if ($.truthy($.is_(L0["source"], "TDBSum"))) {
    await $.set(C, "GroupOperation", (await $.mv((await $.call(C, "TDBSum", [L0["source"]])), "GroupOperation")));
    await $.set(C, "FieldName", (await $.mv((await $.call(C, "TDBSum", [L0["source"]])), "FieldName")));
    await $.set(C, "Value", (await $.mv((await $.call(C, "TDBSum", [L0["source"]])), "Value")));
    await $.set(C, "SumValue", (await $.mv((await $.call(C, "TDBSum", [L0["source"]])), "SumValue")));
  } else {
    await $.inherited(Self, "TDBSum", "Assign", [L0["source"]], arguments);
  }
  return L0.result;
}, {"params": ["Source"], "kind": "procedure", "ptypes": ["TPersistent"]});
  U.method("TDBSum", "SetFieldName", async function SetFieldName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(($.eq((await $.v(C, "FFieldName")), L0["value"])))) {
    return L0.result;
  }
  await $.set(C, "FFieldName", L0["value"]);
  await $.stmt((await $.call(C, "Changed", [false])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TDBSum", "SetGroupOperation", async function SetGroupOperation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(($.eq((await $.v(C, "FGroupOperation")), L0["value"])))) {
    return L0.result;
  }
  await $.set(C, "FGroupOperation", L0["value"]);
  await $.stmt((await $.call(C, "Changed", [false])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TGroupOperation"]});
  U.method("TDBSumCollection", "GetOwner", async function GetOwner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FOwner"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumCollection", "GetItem", async function GetItem(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["index"]);
  L0["result"] = (await $.call(C, "TDBSum", [(await $.inherited(Self, "TDBSumCollection", "GetItem", [L0["index"]], arguments))]));
  return L0.result;
}, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TDBSumCollection", "SetItem", async function SetItem(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "value"]);
  await $.inherited(Self, "TDBSumCollection", "SetItem", [L0["index"], L0["value"]], arguments);
  return L0.result;
}, {"params": ["Index", "Value"], "kind": "procedure", "ptypes": ["Integer", "TDBSum"]});
  U.method("TDBSumCollection", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"item": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["item"]);
  await $.mcall((await $.call(C, "TDBSumListProducer", [(await $.v(C, "FOwner"))])), "Update", []);
  return L0.result;
}, {"params": ["Item"], "kind": "procedure", "ptypes": ["TCollectionItem"]});
  U.method("TDBSumCollection", "GetSumByOpAndFName", async function GetSumByOpAndFName(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"agroupoperation": $.copyArg(p0), "afieldname": $.copyArg(p1), result: null, "i": 0};
  await $.fixArgs(L0, ["agroupoperation", "afieldname"]);
  L0["result"] = null;
  { const $t39 = $.sub((await $.v(C, "Count")), 1);
    L0["i"] = 0;
    let $t40 = true;
    for (;;) {
      if (!$t40) { L0["i"] = $.succ(L0["i"], 1); }
      $t40 = false;
      if (!($.ord(L0["i"]) <= $.ord($t39))) break;
      if ($.truthy((await $.and_(($.eq(L0["agroupoperation"], (await $.mv((await $.idx((await $.v(C, "Items")), [L0["i"]])), "GroupOperation")))), async () => ($.eq((await $.call(C, "AnsiCompareText", [L0["afieldname"], (await $.mv((await $.idx((await $.v(C, "Items")), [L0["i"]])), "FieldName"))])), 0)))))) {
        L0["result"] = (await $.idx((await $.v(C, "Items")), [L0["i"]]));
        return L0.result;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["AGroupOperation", "AFieldName"], "kind": "function", "ptypes": ["TGroupOperation", "String"]});
  U.method("TDBSumList", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TDBSumList", "Create", null, arguments);
  await $.set(C, "FSumListProducer", (await $.mcall((await $.v(C, "TDBSumListProducer")), "Create", [Self])));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TDBSumList", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TDBSumList", "Destroy", null, arguments);
  await $.mcall((await $.v(C, "FSumListProducer")), "Free", []);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TDBSumList", "Activate", async function Activate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"arecalcall": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["arecalcall"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "Activate", [L0["arecalcall"]])));
  return L0.result;
}, {"params": ["ARecalcAll"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumList", "ClearSumValues", async function ClearSumValues(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FSumListProducer")), "ClearSumValues", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumList", "DataSetAfterClose", async function DataSetAfterClose(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetAfterClose", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "DataSetAfterEdit", async function DataSetAfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetAfterEdit", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "DataSetAfterInsert", async function DataSetAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetAfterInsert", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "DataSetAfterOpen", async function DataSetAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetAfterOpen", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "DataSetAfterPost", async function DataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetAfterPost", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "DataSetAfterScroll", async function DataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetAfterScroll", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "DataSetBeforeDelete", async function DataSetBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "DataSetBeforeDelete", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "Deactivate", async function Deactivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aclearsumvalues": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aclearsumvalues"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "Deactivate", [L0["aclearsumvalues"]])));
  return L0.result;
}, {"params": ["AClearSumValues"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumList", "DoSumListChanged", async function DoSumListChanged(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FSumListProducer")), "DoSumListChanged", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumList", "Loaded", async function Loaded(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TDBSumList", "Loaded", null, arguments);
  await $.mcall((await $.v(C, "FSumListProducer")), "Loaded", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumList", "MasterDataSetAfterScroll", async function MasterDataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "MasterDataSetAfterScroll", [L0["dataset"]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "RecalcAll", async function RecalcAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FSumListProducer")), "RecalcAll", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumList", "SetActive", async function SetActive(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "SetActive", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumList", "SetDataSet", async function SetDataSet(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "SetDataSet", [L0["value"]])));
  if ($.truthy($.ne(L0["value"], null))) {
    await $.stmt((await $.mcall(L0["value"], "FreeNotification", [Self])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDBSumList", "SetDataSetEvents", async function SetDataSetEvents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FSumListProducer")), "SetDataSetEvents", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDBSumList", "SetExternalRecalc", async function SetExternalRecalc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "SetExternalRecalc", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumList", "SetSumCollection", async function SetSumCollection(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FSumListProducer")), "SetSumCollection", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDBSumCollection"]});
  U.method("TDBSumList", "GetActive", async function GetActive(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "GetDataSet", async function GetDataSet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "DataSet"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "GetExternalRecalc", async function GetExternalRecalc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "ExternalRecalc"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "GetOnRecalcAll", async function GetOnRecalcAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "OnRecalcAll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "GetSumCollection", async function GetSumCollection(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "SumCollection"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "GetSumListChanged", async function GetSumListChanged(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "SumListChanged"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "SetOnRecalcAll", async function SetOnRecalcAll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "FSumListProducer")), "OnRecalcAll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TNotifyEvent"]});
  U.method("TDBSumList", "SetSumListChanged", async function SetSumListChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "FSumListProducer")), "SumListChanged", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TNotifyEvent"]});
  U.method("TDBSumList", "IsSequenced", async function IsSequenced(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "IsSequenced"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "RecordCount", async function RecordCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "RecordCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "SetVirtualRecords", async function SetVirtualRecords(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "FSumListProducer")), "VirtualRecords", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TDBSumList", "GetVirtualRecords", async function GetVirtualRecords(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "VirtualRecords"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "GetRecNo", async function GetRecNo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "RecNo"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "SetRecNo", async function SetRecNo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "FSumListProducer")), "RecNo", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TDBSumList", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TDBSumList", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy(($.eq(L0["operation"], (await $.v(C, "opRemove")))))) {
    if ($.truthy((await $.and_(($.is_(L0["acomponent"], "TDataSet")), async () => ($.eq(L0["acomponent"], (await $.v(C, "DataSet")))))))) {
      await $.set(C, "DataSet", null);
    }
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TDBSumList", "GetOnAfterRecalcAll", async function GetOnAfterRecalcAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "FSumListProducer")), "OnAfterRecalcAll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDBSumList", "SetOnAfterRecalcAll", async function SetOnAfterRecalcAll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "FSumListProducer")), "OnAfterRecalcAll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TNotifyEvent"]});
  return U;
}

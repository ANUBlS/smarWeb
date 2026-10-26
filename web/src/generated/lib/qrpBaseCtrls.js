// Generated from qrpBaseCtrls.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("qrpBaseCtrls", ["Classes", "QRCtrls", "QRPrntr", "Quickrpt", "Controls", "Dialogs", "Forms", "QRPCtrls"]);
  const C = [U];
  U.defClass("TLabelSettings", "TPersistent", {"ffirstlabel": {"name": "fFirstLabel", "type": "Longint"}, "flabelcount": {"name": "fLabelCount", "type": "Longint"}}, {"firstlabel": {"name": "FirstLabel", "read": "fFirstLabel", "write": "fFirstLabel"}, "labelcount": {"name": "LabelCount", "read": "fLabelCount", "write": "fLabelCount"}});
  U.defClass("TQRPQuickrep", "TQuickRep", {"flabelsettings": {"name": "FLabelSettings", "type": "TLabelSettings"}, "fprepareautomatically": {"name": "FPrepareAutomatically", "type": "Boolean"}, "bandshidden": {"name": "BandsHidden", "type": "Boolean"}, "reportprintprepared": {"name": "ReportPrintPrepared", "type": "Boolean"}, "skiplabelsband1": {"name": "SkipLabelsBand1", "type": "TQRCustomBand"}, "skiplabelsband2": {"name": "SkipLabelsBand2", "type": "TQRChildband"}, "skiplabelsband3": {"name": "SkipLabelsBand3", "type": "TQRChildband"}, "detailband": {"name": "DetailBand", "type": "TQRCustomBand"}, "totalpagecount": {"name": "TotalPageCount", "type": "Integer"}}, {"labelsettings": {"name": "LabelSettings", "read": "FLabelSettings", "write": "FLabelSettings"}, "prepareautomatically": {"name": "PrepareAutomatically", "read": "FPrepareAutomatically", "write": "FPrepareAutomatically"}});
  U.init(async () => {
  });
  U.method("TQRPQuickrep", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TQRPQuickrep", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FLabelSettings", (await $.mv((await $.v(C, "TLabelSettings")), "Create")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TQRPQuickrep", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FLabelSettings")), "Free", []);
  await $.inherited(Self, "TQRPQuickrep", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TQRPQuickrep", "Print", async function Print(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "Print", null, arguments);
    await $.stmt($.call(C, "DoneReportPrint", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPQuickrep", "Preview", async function Preview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "Preview", null, arguments);
    await $.stmt($.call(C, "DoneReportPrint", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPQuickrep", "Prepare", async function Prepare(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "Prepare", null, arguments);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPQuickrep", "PrepareReportPrint", async function PrepareReportPrint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "detailband": null, "rowspaceband": null, "skiplabels": 0, "columnlabels": 0};
  L0["result"] = true;
  if ($.truthy((await $.v(C, "ReportPrintPrepared")))) {
    return L0.result;
  }
  await $.set(C, "ReportPrintPrepared", true);
  L0["detailband"] = (await $.call(C, "TQRCustomBand", [(await $.mcall((await $.v(C, "Owner")), "FindComponent", ["LabelBand"]))]));
  if ($.truthy($.eq(L0["detailband"], null))) {
    L0["detailband"] = (await $.call(C, "TQRCustomBand", [(await $.mcall((await $.v(C, "Owner")), "FindComponent", ["DetailBand"]))]));
  }
  if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "Labelsettings")), "FirstLabel")), 1)), async () => ($.ne(L0["detailband"], null)))))) {
    L0["skiplabels"] = $.sub((await $.mv((await $.v(C, "Labelsettings")), "FirstLabel")), 1);
    await $.set(C, "SkipLabelsBand1", (await $.mcall((await $.v(C, "TQRGroup")), "Create", [(await $.v(C, "Owner"))])));
    await $.set(C, "SkipLabelsBand2", (await $.mcall((await $.v(C, "TQRPChildband")), "Create", [(await $.v(C, "Owner"))])));
    await $.set(C, "SkipLabelsBand3", (await $.mcall((await $.v(C, "TQRPChildband")), "Create", [(await $.v(C, "Owner"))])));
    await $.mset((await $.v(C, "SkipLabelsBand1")), "Parent", Self);
    await $.mset((await $.v(C, "SkipLabelsBand2")), "Parent", Self);
    await $.mset((await $.v(C, "SkipLabelsBand3")), "Parent", Self);
    await $.mset((await $.v(C, "SkipLabelsBand1")), "Height", 0);
    await $.mset((await $.v(C, "SkipLabelsBand2")), "Height", 0);
    await $.mset((await $.v(C, "SkipLabelsBand2")), "ParentBand", (await $.v(C, "SkipLabelsBand1")));
    await $.mset((await $.v(C, "SkipLabelsBand3")), "ParentBand", (await $.v(C, "SkipLabelsBand2")));
    L0["rowspaceband"] = (await $.call(C, "TQRPChildBand", [(await $.mcall((await $.v(C, "Owner")), "FindComponent", ["RowSpace"]))]));
    if ($.truthy($.ne(L0["detailband"], null))) {
      if ($.truthy($.ne(L0["rowspaceband"], null))) {
        L0["columnlabels"] = (await $.call(C, "Round", [$.fdiv(($.add($.sub($.sub((await $.mv((await $.v(C, "Page")), "Length")), (await $.mv((await $.v(C, "Page")), "TopMargin"))), (await $.mv((await $.v(C, "Page")), "BottomMargin"))), (await $.mv((await $.mv(L0["rowspaceband"], "Size")), "Height")))), ($.add((await $.mv((await $.mv(L0["detailband"], "Size")), "Height")), (await $.mv((await $.mv(L0["rowspaceband"], "Size")), "Height")))))]));
      } else {
        L0["columnlabels"] = (await $.call(C, "Round", [$.fdiv(($.sub($.sub((await $.mv((await $.v(C, "Page")), "Length")), (await $.mv((await $.v(C, "Page")), "TopMargin"))), (await $.mv((await $.v(C, "Page")), "BottomMargin")))), (await $.mv((await $.mv(L0["detailband"], "Size")), "Height")))]));
      }
      if ($.truthy($.ge(L0["skiplabels"], L0["columnlabels"]))) {
        while ($.truthy($.ge(L0["skiplabels"], L0["columnlabels"]))) {
          L0["skiplabels"] = $.sub(L0["skiplabels"], L0["columnlabels"]);
          await $.tick();
        }
        await $.mset((await $.v(C, "SkipLabelsBand2")), "ForceNewColumn", true);
        await $.mset((await $.v(C, "SkipLabelsBand3")), "ForceNewColumn", true);
      }
      if ($.truthy($.ne(L0["rowspaceband"], null))) {
        await $.mset((await $.v(C, "SkipLabelsBand3")), "Height", $.mul(($.add((await $.mv(L0["detailband"], "Height")), (await $.mv(L0["rowspaceband"], "Height")))), L0["skiplabels"]));
      } else {
        await $.mset((await $.v(C, "SkipLabelsBand3")), "Height", $.mul((await $.mv(L0["detailband"], "Height")), L0["skiplabels"]));
      }
    }
  }
  if ($.truthy((await $.v(C, "PrepareAutomatically")))) {
    await $.set(C, "BandsHidden", (await $.v(C, "HideBands")));
    await $.set(C, "Hidebands", true);
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
      await $.inherited(Self, "TQRPQuickrep", "Prepare", null, arguments);
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    }
    await $.set(C, "TotalPageCount", (await $.mv((await $.v(C, "QRPrinter")), "PageCount")));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRPQuickrep", "DoneReportPrint", async function DoneReportPrint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.v(C, "ReportPrintPrepared"))))) {
    return L0.result;
  }
  await $.set(C, "ReportPrintPrepared", false);
  await $.mcall((await $.v(C, "SkipLabelsBand1")), "Free", []);
  await $.mcall((await $.v(C, "SkipLabelsBand2")), "Free", []);
  await $.mcall((await $.v(C, "SkipLabelsBand3")), "Free", []);
  await $.set(C, "SkipLabelsBand1", null);
  await $.set(C, "SkipLabelsBand2", null);
  await $.set(C, "SkipLabelsBand3", null);
  await $.set(C, "DetailBand", null);
  await $.set(C, "TotalPageCount", 0);
  if ($.truthy((await $.v(C, "PrepareAutomatically")))) {
    await $.set(C, "Hidebands", (await $.v(C, "BandsHidden")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPQuickrep", "PrintBackground", async function PrintBackground(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "PrintBackground", null, arguments);
    await $.stmt($.call(C, "DoneReportPrint", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPQuickrep", "ExportToFilter", async function ExportToFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"afilter": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["afilter"]);
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "ExportToFilter", [L0["afilter"]], arguments);
    await $.stmt($.call(C, "DoneReportPrint", []));
  }
  return L0.result;
}, {"params": ["AFilter"], "kind": "procedure", "ptypes": ["TQRExportFilter"]});
  U.method("TQRPQuickrep", "PreviewModal", async function PreviewModal(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "Preview", null, arguments);
    await $.stmt($.call(C, "DoneReportPrint", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPQuickrep", "PreviewModeless", async function PreviewModeless(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "PrepareReportPrint")))) {
    await $.inherited(Self, "TQRPQuickrep", "Preview", null, arguments);
    await $.stmt($.call(C, "DoneReportPrint", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}

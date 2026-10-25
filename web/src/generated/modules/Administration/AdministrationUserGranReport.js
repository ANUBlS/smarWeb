// Generated from AdministrationUserGranReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationUserGranReport", ["Windows", "SysUtils", "Messages", "Classes", "Graphics", "Controls", "StdCtrls", "ExtCtrls", "Forms", "Quickrpt", "QRCtrls", "OracleData", "AdministrationDataModule", "AdministrationMainForm"]);
  const C = [U];
  U.defClass("TrptUsers", "TQuickRep", {"titleband1": {"name": "TitleBand1", "type": "TQRBand"}, "detailband1": {"name": "DetailBand1", "type": "TQRBand"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "qrsubdetail1": {"name": "QRSubDetail1", "type": "TQRSubDetail"}, "qrdbtext3": {"name": "QRDBText3", "type": "TQRDBText"}, "useright": {"name": "UseRight", "type": "TQRDBText"}, "insertright": {"name": "InsertRight", "type": "TQRDBText"}, "delright": {"name": "DelRight", "type": "TQRDBText"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrdbtext7": {"name": "QRDBText7", "type": "TQRDBText"}, "qrdbtext8": {"name": "QRDBText8", "type": "TQRDBText"}, "qrdbtext9": {"name": "QRDBText9", "type": "TQRDBText"}, "qrshape1": {"name": "QRShape1", "type": "TQRShape"}, "qrshape2": {"name": "QRShape2", "type": "TQRShape"}, "qrshape3": {"name": "QRShape3", "type": "TQRShape"}, "updateright": {"name": "UpdateRight", "type": "TQRDBText"}, "qrshape4": {"name": "QRShape4", "type": "TQRShape"}, "qrshape5": {"name": "QRShape5", "type": "TQRShape"}, "qrshape6": {"name": "QRShape6", "type": "TQRShape"}, "qrshape7": {"name": "QRShape7", "type": "TQRShape"}, "insertrightpict": {"name": "InsertRightPict", "type": "TQRImage"}, "userightpict": {"name": "UseRightPict", "type": "TQRImage"}, "delrightpict": {"name": "DelRightPict", "type": "TQRImage"}, "updaterightpict": {"name": "UpdateRightPict", "type": "TQRImage"}, "qrstringsband1": {"name": "QRStringsBand1", "type": "TQRStringsBand"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrdbtext2": {"name": "QRDBText2", "type": "TQRDBText"}, "qrsysdata1": {"name": "QRSysData1", "type": "TQRSysData"}, "qrdbtext4": {"name": "QRDBText4", "type": "TQRDBText"}, "pagefooterband1": {"name": "PageFooterBand1", "type": "TQRBand"}, "qrsysdata2": {"name": "QRSysData2", "type": "TQRSysData"}}, {});
  U.init(async () => {
    U.var_("rptUsers", null, "TrptUsers");
  });
  U.method("TrptUsers", "Review", async function Review(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"standart": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["standart"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 1))) {
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TQRDBText")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", $.not((L0["standart"])));
        } else {
          if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TQRImage")))) {
            await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", L0["standart"]);
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Standart"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TrptUsers", "QRSubDetail1BeforePrint", async function QRSubDetail1BeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["resetpicture"] = $.fn(async function ResetPicture(p0, p1) {
  const L1 = {"qrpicture": $.copyArg(p0), "qrtext": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["qrpicture", "qrtext"]);
  {
    const $t3 = L1["qrtext"];
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t3], "DataSet", C, false)), "FieldByName", [(await $.wv([$t3], "DataField", C, false))])), "AsString")), (await $.mcall(((await $.wv([$t3], "DataSet", C, false))), "GetVariable", ["GRANTED"]))))) {
      await $.mset((await $.wv([$t3], "QrPicture", { get: async () => L1["qrpicture"], set: async (v) => { L1["qrpicture"] = v; }, local: true }, false)), "Picture", (await $.wv([$t3], "TempPic", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "QrPicture", { get: async () => L1["qrpicture"], set: async (v) => { L1["qrpicture"] = v; }, local: true }, false)), "Picture", null);
    }
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["resetpicture"], [(await $.v(C, "UseRightPict")), (await $.v(C, "UseRight"))])));
  await $.stmt((await $.callv(L0["resetpicture"], [(await $.v(C, "InsertRightPict")), (await $.v(C, "InsertRight"))])));
  await $.stmt((await $.callv(L0["resetpicture"], [(await $.v(C, "DelRightPict")), (await $.v(C, "DelRight"))])));
  await $.stmt((await $.callv(L0["resetpicture"], [(await $.v(C, "UpdateRightPict")), (await $.v(C, "UpdateRight"))])));
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  return U;
}

// Generated from PersonalQrFmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PersonalQrFmImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QRCtrls", "QuickRpt", "ExtCtrls", "ASANFinanceImpl", "AsanDmInpl"]);
  const C = [U];
  U.defClass("TPersonalQrFm", "TForm", {"personalrep": {"name": "PersonalRep", "type": "TQuickRep"}, "qrband": {"name": "QrBand", "type": "TQRBand"}, "qrdbtext1": {"name": "QRDBText1", "type": "TQRDBText"}, "pin": {"name": "PIN", "type": "TQRLabel"}, "qrimage1": {"name": "QRImage1", "type": "TQRImage"}, "documentnumber": {"name": "DocumentNumber", "type": "TQRLabel"}, "name": {"name": "Name", "type": "TQRLabel"}, "surname": {"name": "Surname", "type": "TQRLabel"}, "patronymic": {"name": "Patronymic", "type": "TQRLabel"}, "birthdate": {"name": "BirthDate", "type": "TQRLabel"}, "birthaddress": {"name": "BirthAddress", "type": "TQRLabel"}, "gender": {"name": "Gender", "type": "TQRLabel"}, "registrationaddress": {"name": "RegistrationAddress", "type": "TQRLabel"}, "givendate": {"name": "GivenDate", "type": "TQRLabel"}, "expiredate": {"name": "ExpireDate", "type": "TQRLabel"}, "maritalstatus": {"name": "MaritalStatus", "type": "TQRLabel"}, "givenorganization": {"name": "GivenOrganization", "type": "TQRLabel"}, "citizenship": {"name": "Citizenship", "type": "TQRLabel"}, "militarystatus": {"name": "MilitaryStatus", "type": "TQRLabel"}, "bloodtype": {"name": "BloodType", "type": "TQRLabel"}, "eyecolor": {"name": "EyeColor", "type": "TQRLabel"}, "height": {"name": "Height", "type": "TQRLabel"}, "qrlabel1": {"name": "QRLabel1", "type": "TQRLabel"}, "qrlabel2": {"name": "QRLabel2", "type": "TQRLabel"}, "qrlabel3": {"name": "QRLabel3", "type": "TQRLabel"}, "qrlabel4": {"name": "QRLabel4", "type": "TQRLabel"}, "qrlabel5": {"name": "QRLabel5", "type": "TQRLabel"}, "qrlabel6": {"name": "QRLabel6", "type": "TQRLabel"}, "qrlabel7": {"name": "QRLabel7", "type": "TQRLabel"}, "qrlabel8": {"name": "QRLabel8", "type": "TQRLabel"}, "qrlabel9": {"name": "QRLabel9", "type": "TQRLabel"}, "qrlabel10": {"name": "QRLabel10", "type": "TQRLabel"}, "qrlabel11": {"name": "QRLabel11", "type": "TQRLabel"}, "qrlabel12": {"name": "QRLabel12", "type": "TQRLabel"}, "qrlabel13": {"name": "QRLabel13", "type": "TQRLabel"}, "qrlabel14": {"name": "QRLabel14", "type": "TQRLabel"}, "qrlabel15": {"name": "QRLabel15", "type": "TQRLabel"}, "qrlabel16": {"name": "QRLabel16", "type": "TQRLabel"}, "qrlabel17": {"name": "QRLabel17", "type": "TQRLabel"}, "qrlabel18": {"name": "QRLabel18", "type": "TQRLabel"}, "qrimage2": {"name": "QRImage2", "type": "TQRImage"}}, {});
  U.init(async () => {
    U.var_("PersonalQrFm", null, "TPersonalQrFm");
  });
  U.method("TPersonalQrFm", "PersonalRepBeforePrint", async function PersonalRepBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printreport": $.asRef(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "PrintReport"], "kind": "procedure", "ptypes": ["TCustomQuickRep", "Boolean"]});
  U.method("TPersonalQrFm", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"txt": $.copyArg(p0), "name": $.copyArg(p1), result: undefined, "s": 0};
  await $.fixArgs(L0, ["txt", "name"]);
  try {
    await $.mset((await $.call(C, "FindComponent", [L0["name"]])), "Caption", L0["txt"]);
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "Exception")) {
      L0["s"] = 0;
    }
    else { throw $t1; }
  }
  return L0.result;
}, {"params": ["txt", "name"], "kind": "procedure", "ptypes": ["String", "String"]});
  return U;
}

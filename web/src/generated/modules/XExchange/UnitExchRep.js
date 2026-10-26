// Generated from UnitExchRep.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitExchRep", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "sboapiDataModuleImpl", "SBTranslateProc", "UnitDateExch", "UnitRep", "IniFiles", "UnitRepX"]);
  const C = [U];
  U.defClass("TExchRep", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}}, {});
  U.init(async () => {
    U.var_("ExchRep", null, "TExchRep");
  });
  U.method("TExchRep", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "ini": null, "bankname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "paramstr", [0]))])), "Exchange.ini")]));
  L0["bankname"] = (await $.mcall(L0["ini"], "ReadString", ["BankName", "name", ""]));
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "FieldByName", ["id"])), "AsInteger"));
  {
    const $t1 = (await $.mv((await $.v(C, "DataModExch")), "ODSReport"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["p_id", (await $.wv([$t1], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  if ($.truthy((await $.mv((await $.v(C, "RadioButton1")), "Checked")))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DataModExch")), "ODSReport"));
      const $t3 = (await $.wv([$t2], "FormRepx", C, false));
      await $.mset((await $.wv([$t2, $t3], "LabelBankName", C, false)), "Caption", (await $.wv([$t2, $t3], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      { const $t4 = (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["Status"], C)), "AsInteger"));
        if ($.eq($t4, 1)) {
          await $.mset((await $.wv([$t2, $t3], "LabelStatus", C, false)), "Caption", "XARİCİ VALYUTANIN ALIŞI");
          await $.mset((await $.wv([$t2, $t3], "LabelDate", C, false)), "Caption", (await $.wcall([$t2, $t3], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["dat"], C)), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t2, $t3], "LabelTime", C, false)), "Caption", (await $.wcall([$t2, $t3], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t2, $t3], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t2, $t3], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t2, $t3], "LabelCourse", C, false)), "Caption", (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["op_course"], C)), "AsString")));
          await $.mset((await $.wv([$t2, $t3], "LabelDifference", C, false)), "Caption", "");
          await $.mset((await $.wv([$t2, $t3], "QRLabel20", C, false)), "Caption", $.add($.add("VÖEN", "  "), (await $.mv((await $.mcall((await $.mv((await $.wv([$t2, $t3], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString"))));
          await $.mcall((await $.wv([$t2, $t3], "QuickRep", C, false)), "Preview", []);
        }
        else if ($.eq($t4, 2)) {
          await $.mset((await $.wv([$t2, $t3], "LabelStatus", C, false)), "Caption", "XARİCİ VALYUTANIN SATIŞI");
          await $.mset((await $.wv([$t2, $t3], "LabelDate", C, false)), "Caption", (await $.wcall([$t2, $t3], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2, $t3], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["dat"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t2, $t3], "LabelTime", C, false)), "Caption", (await $.wcall([$t2, $t3], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2, $t3], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["op_time"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t2, $t3], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t2, $t3], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t2, $t3], "LabelCourse", C, false)), "Caption", (await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["op_course"], C)), "AsString")));
          await $.mset((await $.wv([$t2, $t3], "LabelDifference", C, false)), "Caption", "");
          await $.mset((await $.wv([$t2, $t3], "QRLabel20", C, false)), "Caption", $.add($.add("VÖEN", "  "), (await $.mv((await $.mcall((await $.mv((await $.wv([$t2, $t3], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString"))));
          await $.mcall((await $.wv([$t2, $t3], "QuickRep", C, false)), "Preview", []);
        }
      }
    }
  } else {
    {
      const $t5 = (await $.mv((await $.v(C, "DataModExch")), "ODSReport"));
      const $t6 = (await $.wv([$t5], "FormRep", C, false));
      await $.mset((await $.wv([$t5, $t6], "LabelBankName", C, false)), "Caption", (await $.wv([$t5, $t6], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t5, $t6], "LabelBankNameCopy", C, false)), "Caption", (await $.wv([$t5, $t6], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      { const $t7 = (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["Status"], C)), "AsInteger"));
        if ($.eq($t7, 1)) {
          await $.mset((await $.wv([$t5, $t6], "LabelStatus", C, false)), "Caption", "XARİCİ VALYUTANIN ALIŞI");
          await $.mset((await $.wv([$t5, $t6], "LabelDate", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["dat"], C)), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelTime", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelCourse", C, false)), "Caption", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_course"], C)), "AsString")));
          await $.mset((await $.wv([$t5, $t6], "LabelDifference", C, false)), "Caption", "");
          await $.mset((await $.wv([$t5, $t6], "LabelStatusCopy", C, false)), "Caption", "XARİCİ VALYUTANIN ALIŞI");
          await $.mset((await $.wv([$t5, $t6], "LabelDateCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["dat"], C)), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelTimeCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelCustomerCopy", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelPassportCopy", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelCourseCopy", C, false)), "Caption", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_course"], C)), "AsString")));
          await $.mset((await $.wv([$t5, $t6], "LabelDifferenceCopy", C, false)), "Caption", "");
          await $.mcall((await $.wv([$t5, $t6], "QuickRep", C, false)), "Preview", []);
        }
        else if ($.eq($t7, 2)) {
          await $.mset((await $.wv([$t5, $t6], "LabelStatus", C, false)), "Caption", "XARİCİ VALYUTANIN SATIŞI");
          await $.mset((await $.wv([$t5, $t6], "LabelDate", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["dat"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelTime", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["op_time"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelCourse", C, false)), "Caption", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_course"], C)), "AsString")));
          await $.mset((await $.wv([$t5, $t6], "LabelDifference", C, false)), "Caption", "");
          await $.mset((await $.wv([$t5, $t6], "LabelStatusCopy", C, false)), "Caption", "XARİCİ VALYUTANIN SATIŞI");
          await $.mset((await $.wv([$t5, $t6], "LabelDateCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["dat"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelTimeCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["op_time"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelCustomerCopy", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelPassportCopy", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelCourseCopy", C, false)), "Caption", (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_course"], C)), "AsString")));
          await $.mset((await $.wv([$t5, $t6], "LabelDifferenceCopy", C, false)), "Caption", "");
          await $.mcall((await $.wv([$t5, $t6], "QuickRep", C, false)), "Preview", []);
        }
        else if ($.eq($t7, 3)) {
          await $.mset((await $.wv([$t5, $t6], "LabelStatus", C, false)), "Caption", "BİR XARİCİ VALYUTANIN DİGƏRİ İLƏ DƏYİŞDİRİLMƏSİ");
          await $.mset((await $.wv([$t5, $t6], "LabelDate", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["dat"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelTime", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["op_time"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelCourse", C, false)), "Caption", (await $.wcall([$t5, $t6], "formatfloat", ["#.####", $.fdiv((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_course"], C)), "AsFloat")), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["val_changed_course"], C)), "AsFloat")))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelDifference", C, false)), "Caption", "fərq");
          await $.mset((await $.wv([$t5, $t6], "LabelStatusCopy", C, false)), "Caption", "BİR XARİCİ VALYUTANIN DİGƏRİ İLƏ DƏYİŞDİRİLMƏSİ");
          await $.mset((await $.wv([$t5, $t6], "LabelDateCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["dat"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelTimeCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModExch", C, false)), "ODSExchProvarch")), "fieldbyname", ["op_time"])), "AsDateTime"))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelCustomerCopy", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_father"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelPassportCopy", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["cust_passport"], C)), "AsString"))));
          await $.mset((await $.wv([$t5, $t6], "LabelCourseCopy", C, false)), "Caption", (await $.wcall([$t5, $t6], "formatfloat", ["#.####", $.fdiv((await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["op_course"], C)), "AsFloat")), (await $.mv((await $.wcall([$t5, $t6], "fieldbyname", ["val_changed_course"], C)), "AsFloat")))], C)));
          await $.mset((await $.wv([$t5, $t6], "LabelDifferenceCopy", C, false)), "Caption", "fərq");
          await $.mcall((await $.wv([$t5, $t6], "QuickRep", C, false)), "Preview", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchRep", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExchRep")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchRep", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchRep", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchRep", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RadioButton2")), "Checked", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchRep", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RadioButton1")), "Checked", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

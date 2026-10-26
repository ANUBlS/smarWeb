// Generated from UnitPaymentsProperties.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitPaymentsProperties", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "PaymentsImpl1", "Payments_TLB", "Unit1", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormPaymentProperties", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "label37": {"name": "Label37", "type": "TLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "edit31": {"name": "Edit31", "type": "TEdit"}, "edit23": {"name": "Edit23", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit32": {"name": "Edit32", "type": "TEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "edit33": {"name": "Edit33", "type": "TEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "label54": {"name": "Label54", "type": "TLabel"}, "edit22": {"name": "Edit22", "type": "TEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label48": {"name": "Label48", "type": "TLabel"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "edit20": {"name": "Edit20", "type": "TEdit"}, "edit21": {"name": "Edit21", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label61": {"name": "Label61", "type": "TLabel"}, "label62": {"name": "Label62", "type": "TLabel"}, "label63": {"name": "Label63", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "edit26": {"name": "Edit26", "type": "TEdit"}, "edit27": {"name": "Edit27", "type": "TEdit"}, "edit28": {"name": "Edit28", "type": "TEdit"}, "edit29": {"name": "Edit29", "type": "TEdit"}, "edit30": {"name": "Edit30", "type": "TEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "label17": {"name": "Label17", "type": "TLabel"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "edit15": {"name": "Edit15", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormPaymentProperties", null, "TFormPaymentProperties");
  });
  U.method("TFormPaymentProperties", "DateTimePicker1Exit", async function DateTimePicker1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentProperties", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentProperties", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "groupbox1")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

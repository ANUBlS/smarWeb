// Generated from PrReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrReport", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "CMExcelExport", "PrCmDMImpl"]);
  const C = [U];
  U.defClass("TFormReport", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "cmexcelreport": {"name": "CMExcelReport", "type": "TCMExcelExport"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "radiogrouphesabat": {"name": "RadioGroupHesabat", "type": "TRadioGroup"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label2": {"name": "Label2", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormReport", null, "TFormReport");
    U.var_("pdat", 0, "TDateTime");
    U.var_("edat", 0, "TDateTime");
  });
  U.method("TFormReport", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CMExcelReport"));
    const $t2 = (await $.wv([$t1], "PrCmDM", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "RadioGroupHesabat", C, false)), "ItemIndex")), 0))) {
      await $.mcall((await $.wv([$t1, $t2], "ReportDelays", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "ReportDelays", C, false)), "SetVariable", ["dat1", (await $.wv([$t1, $t2], "edat", C, false))])));
      await $.mcall((await $.wv([$t1, $t2], "ReportDelays", C, false)), "Open", []);
      await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ReportDelays", C, false)), "Gecikmələr", (await $.wv([$t1, $t2], "True", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Disconnect", [], C));
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "RadioGroupHesabat", C, false)), "ItemIndex")), 1))) {
        await $.mcall((await $.wv([$t1, $t2], "ReportInterval", C, false)), "close", []);
        await $.stmt((await $.mcall((await $.wv([$t1, $t2], "ReportInterval", C, false)), "SetVariable", ["dat1", (await $.wv([$t1, $t2], "edat", C, false))])));
        await $.mcall((await $.wv([$t1, $t2], "ReportInterval", C, false)), "Open", []);
        if ($.truthy($.gt((await $.mv((await $.wv([$t1, $t2], "ReportInterval", C, false)), "RecordCount")), 0))) {
          await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
          await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ReportInterval", C, false)), "Gecikmə_Aralıqları", (await $.wv([$t1, $t2], "True", C, false))], C)));
          await $.stmt($.wcall([$t1, $t2], "Disconnect", [], C));
        } else {
          await $.stmt((await $.wcall([$t1, $t2], "ShowMessage", ["Heç bir məlumat yoxdur"], C)));
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "RadioGroupHesabat", C, false)), "ItemIndex")), 2))) {
      await $.wset([$t1, $t2], "pdat", (await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DateTimePicker1", C, false)), "DateTime"))], C)), C);
      await $.wset([$t1, $t2], "edat", (await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DateTimePicker2", C, false)), "DateTime"))], C)), C);
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "PrPackage", C, false)), "CallProcedure", ["portfel_araliq_7", ["begindat", (await $.wv([$t1, $t2], "pdat", C, false)), "enddat", (await $.wv([$t1, $t2], "edat", C, false))]])));
      await $.mcall((await $.wv([$t1, $t2], "ODSDueDay7", C, false)), "Refresh", []);
      await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSDueDay7", C, false)), "Gecikmələrdə yerdəyişmə", (await $.wv([$t1, $t2], "True", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Disconnect", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "RadioGroupHesabat", C, false)), "ItemIndex")), 3))) {
      await $.wset([$t1, $t2], "pdat", (await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DateTimePicker1", C, false)), "DateTime"))], C)), C);
      await $.wset([$t1, $t2], "edat", (await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DateTimePicker2", C, false)), "DateTime"))], C)), C);
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "PrPackage", C, false)), "CallProcedure", ["portfel_araliq_7", ["begindat", (await $.wv([$t1, $t2], "pdat", C, false)), "enddat", (await $.wv([$t1, $t2], "edat", C, false))]])));
      await $.mcall((await $.wv([$t1, $t2], "ODSDueDay6", C, false)), "Refresh", []);
      await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ODSDueDay6", C, false)), "Gecikmələrdə yerdəyişmə cəm", (await $.wv([$t1, $t2], "True", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReport", "DateTimePicker1Change", async function DateTimePicker1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pdat", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReport", "DateTimePicker2Change", async function DateTimePicker2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "edat", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

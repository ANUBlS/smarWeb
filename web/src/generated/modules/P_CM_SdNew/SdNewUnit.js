// Generated from SdNewUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SdNewUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "ExtCtrls", "StdCtrls", "ComCtrls", "CMExcelExport", "Mask", "DBCtrlsEh", "DBLookupEh", "NLSLocalizer", "CommonDecls", "SdNewDatModImpl", "ProgressSDUnit", "SystemState"]);
  const C = [U];
  U.defClass("TSDForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "natval": {"name": "NatVal", "type": "TCheckBox"}, "freeval": {"name": "Freeval", "type": "TCheckBox"}, "freenotval": {"name": "FreeNotVal", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "legalperson": {"name": "LegalPerson", "type": "TCheckBox"}, "naturalperson": {"name": "NaturalPerson", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "firstdatetime": {"name": "FirstDateTime", "type": "TDateTimePicker"}, "lastdatetime": {"name": "LastDateTime", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("SDForm", null, "TSDForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "SDForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TSDForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FirstDateTime")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "LastDateTime")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.set(C, "DatModSdNew", (await $.mcall((await $.v(C, "TDatModSdNew")), "Create", [Self])));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DatModSdNew"));
    await $.mcall((await $.wv([$t1], "CrdInfo", C, false)), "CloseAll", []);
    await $.stmt($.wcall([$t1], "Free", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fdate": 0, "ldate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["fdate"] = (await $.call(C, "Integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "FirstDateTime")), "DateTime"))]))]));
  L0["ldate"] = (await $.call(C, "Integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "LastDateTime")), "DateTime"))]))]));
  {
    const $t2 = (await $.wobj(C, "DatModSdNew"));
    await $.mcall((await $.mv((await $.wv([$t2], "DataSetSD", C, false)), "Session")), "Commit", []);
    await $.stmt((await $.wcall([$t2], "LogInformation", ["İxrac başlandı"], C)));
    await $.stmt((await $.mcall((await $.wv([$t2], "CM_SD", C, false)), "CallProcedure", ["run_result", ["bdate", (await $.wv([$t2], "Fdate", { get: async () => L0["fdate"], set: async (v) => { L0["fdate"] = v; }, local: true }, false)), "edate", (await $.wv([$t2], "LDate", { get: async () => L0["ldate"], set: async (v) => { L0["ldate"] = v; }, local: true }, false)), "n_val", (await $.mv((await $.wv([$t2], "NatVal", C, false)), "checked")), "f_val", (await $.mv((await $.wv([$t2], "Freeval", C, false)), "checked")), "fn_val", (await $.mv((await $.wv([$t2], "FreeNotVal", C, false)), "checked")), "natper", (await $.mv((await $.wv([$t2], "NaturalPerson", C, false)), "checked")), "legper", (await $.mv((await $.wv([$t2], "LegalPerson", C, false)), "checked"))]])));
    await $.stmt((await $.wcall([$t2], "LogInformation", ["İxrac bitdi"], C)));
    await $.mcall((await $.wv([$t2], "DataSetSD", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t2], "DataSetSD", C, false)), "Open", []);
    {
      const $t3 = (await $.wv([$t2], "ExcelExport", C, false));
      await $.stmt($.wcall([$t2, $t3], "Connect", [], C));
      await $.stmt((await $.wcall([$t2, $t3], "ExportDataset", [(await $.wv([$t2, $t3], "DataSetSD", C, false)), "SD1 Hesabatı ", (await $.wv([$t2, $t3], "true", C, false))], C)));
      await $.stmt($.wcall([$t2, $t3], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TSDForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "SDForm", (await $.mcall((await $.v(C, "TSDForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

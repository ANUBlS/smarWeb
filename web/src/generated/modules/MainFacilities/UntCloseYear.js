// Generated from UntCloseYear.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntCloseYear", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "Buttons", "MFDataModule", "UntMainFacilitiesImpl"]);
  const C = [U];
  U.defClass("TFrmSetCloseYear", "TForm", {"memo1": {"name": "Memo1", "type": "TMemo"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "ecurrentdate": {"name": "ECurrentDate", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "enewdate": {"name": "ENewDate", "type": "TEdit"}, "dtpnewdate": {"name": "DTPNewDate", "type": "TDateTimePicker"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("FrmSetCloseYear", null, "TFrmSetCloseYear");
  });
  U.method("TFrmSetCloseYear", "DTPNewDateChange", async function DTPNewDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ENewDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((L0["sender"]), "Date"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetCloseYear", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "MainFacilities"));
    const $t2 = (await $.mv((await $.wv([$t1], "MainFDataModule", C, false)), "OPViewWares"));
    await $.mset((await $.wv([$t1, $t2], "DTPNewDate", C, false)), "DateTime", (await $.wv([$t1, $t2], "GetPresentdate", C, false)));
    await $.mset((await $.wv([$t1, $t2], "ENewDate", C, false)), "Text", (await $.wcall([$t1, $t2], "FormatDateTime", ["dd-mmm-yyyy", (await $.wv([$t1, $t2], "GetPresentdate", C, false))], C)));
    await $.mset((await $.wv([$t1, $t2], "ECurrentDate", C, false)), "Text", (await $.wcall([$t1, $t2], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t1, $t2], "CallDateFunction", ["GetCurrentYear", []], C))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetCloseYear", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "newdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["message_closedaywarning"] = $.add("Are you sure to close current operation day ", "(current operation date is: \"%s\"), and open with date: \"%s\"");
  L0["newdate"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPNewDate")), "DateTime"))]));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [L0["message_closedaywarning"], [(await $.mv((await $.v(C, "ECurrentDate")), "Text")), (await $.mv((await $.v(C, "ENewDate")), "Text"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t3 = (await $.v(C, "MainFDataModule"));
      await $.stmt((await $.mcall((await $.wv([$t3], "OPViewWares", C, false)), "CallProcedure", ["SetNewSettings", [(await $.wv([$t3], "NewDate", { get: async () => L0["newdate"], set: async (v) => { L0["newdate"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t3], "ViewWares", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetCloseYear", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmSetCloseYear", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "newdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["message_closedaywarning"] = $.add("Are you sure to close current operation day ", "(current operation date is: \"%s\"), and open with date: \"%s\"");
  L0["newdate"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPNewDate")), "DateTime"))]));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [L0["message_closedaywarning"], [(await $.mv((await $.v(C, "ECurrentDate")), "Text")), (await $.mv((await $.v(C, "ENewDate")), "Text"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t4 = (await $.v(C, "MainFDataModule"));
      await $.stmt((await $.mcall((await $.wv([$t4], "OPViewWares", C, false)), "CallProcedure", ["SetNewSettings", [(await $.wv([$t4], "NewDate", { get: async () => L0["newdate"], set: async (v) => { L0["newdate"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t4], "ViewWares", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

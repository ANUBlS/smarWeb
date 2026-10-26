// Generated from AutoPayPlaneFormUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AutoPayPlaneFormUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "CMCurrencyEdit", "ComCtrls", "DatModConstructionImpl", "PaymentPlaneMgrUnit"]);
  const C = [U];
  U.defClass("TAutoPayPlaneForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtpstartdate": {"name": "DTPStartDate", "type": "TDateTimePicker"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "amountedit": {"name": "AmountEdit", "type": "TCMCurrencyEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cmbboxperiodrate": {"name": "CmbBoxPeriodRate", "type": "TComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "nperiodsedit": {"name": "NPeriodsEdit", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("AutoPayPlaneForm", null, "TAutoPayPlaneForm");
  });
  U.method("TAutoPayPlaneForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAutoPayPlaneForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAutoPayPlaneForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "perrate": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.mv((await $.v(C, "CmbBoxPeriodRate")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      L0["perrate"] = 1;
    }
    else if ($.eq($t1, 1)) {
      L0["perrate"] = 3;
    }
    else if ($.eq($t1, 2)) {
      L0["perrate"] = 6;
    }
    else {
      L0["perrate"] = 12;
    }
  }
  {
    const $t2 = (await $.v(C, "DatModConstruction"));
    const $t3 = (await $.wv([$t2], "sbcm_construction", C, false));
    await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["add_payment_plane", ["p_CreditID", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "Credits", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_Amount", (await $.mv((await $.wv([$t2, $t3], "AmountEdit", C, false)), "Value")), "p_Rate", 0, "p_FirstPayDate", (await $.mv((await $.wv([$t2, $t3], "DTPStartDate", C, false)), "DateTime")), "p_StartDate", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "Credits", C, false)), "FieldbyName", ["OpenDate"])), "AsDateTime")), "p_Periods", (await $.wcall([$t2, $t3], "StrToInt", [(await $.mv((await $.wv([$t2, $t3], "NPeriodsEdit", C, false)), "Text"))], C)), "p_PeriodRate", (await $.wv([$t2, $t3], "PerRate", { get: async () => L0["perrate"], set: async (v) => { L0["perrate"] = v; }, local: true }, false))]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "PaymentPlaneForm")), "PlanInfo")), "RefResh", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

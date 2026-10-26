// Generated from UnitResursGive.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitResursGive", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CurrencyEdit", "DBCtrls", "ExtCtrls", "Mask", "CMCurrencyEdit", "DBCtrlsEh", "UnitDateExch", "Unit_ExchangeMGR"]);
  const C = [U];
  U.defClass("TFormGivenResurs", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "vresinsert": {"name": "VResInsert", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("FormGivenResurs", null, "TFormGivenResurs");
  });
  U.method("TFormGivenResurs", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModExch")), "ODSTrdestination"));
    const $t2 = (await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t1, $t2], "Active", C, false)))))) {
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "Items", C, false)), "Count")), (await $.wv([$t1, $t2], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t1, $t2], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t1, $t2], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t1, $t2], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t1, $t2], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["name"], C)), "AsString"))])));
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TFormGivenResurs", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filnumber": 0, "filname": '', "valnumber": 0, "valname": '', "amount": 0, "nextday": null, "descript": '', "nextstatus": 0, "daydat": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"))])))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Valyutanı seçin!..."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləği daxil edin !..."])));
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"))])))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Tarixi daxil edin !..."])));
      return L0.result;
    }
  }
  L0["daydat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.mv((await $.v(C, "ExchangeMGR_X")), "DateTimePicker5")), "DateTime"))]))]));
  L0["filnumber"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSVdmResurs")), "FieldByName", ["ex_no"])), "AsInteger"));
  L0["filname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchOffice")), "FieldByName", ["ex_name"])), "AsString"));
  L0["valnumber"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  L0["valname"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text"));
  L0["amount"] = (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value"));
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    L0["nextday"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
    L0["nextstatus"] = 1;
  } else {
    L0["nextday"] = (await $.v(C, "null"));
    L0["nextstatus"] = 0;
  }
  L0["descript"] = "VDM-ə dövriyyədən vəsaitin verilməsi";
  if ($.truthy($.not((await $.v(C, "VResInsert"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallProcedure", ["VDMResursInsert", [L0["valnumber"], L0["valname"], L0["filnumber"], L0["filname"], L0["amount"], L0["daydat"], L0["nextday"], 1, 1, L0["nextstatus"], L0["descript"]]])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallProcedure", ["VDMResursUpdate", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "FieldByName", ["id"])), "AsInteger")), L0["valnumber"], L0["valname"], L0["filnumber"], L0["filname"], L0["amount"], L0["daydat"], L0["nextday"], 1, 1, L0["nextstatus"], L0["descript"]]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "Refresh", []);
  await $.mcall((await $.v(C, "FormGivenResurs")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGivenResurs", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGivenResurs", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "Panel17")), "Font")), "Style", $.add((await $.mv((await $.mv((await $.v(C, "Panel17")), "Font")), "Style")), [(await $.v(C, "fsBold"))]));
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Enabled", true);
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Color", (await $.v(C, "clWhite")));
  } else {
    await $.mset((await $.mv((await $.v(C, "Panel17")), "Font")), "Style", $.sub((await $.mv((await $.mv((await $.v(C, "Panel17")), "Font")), "Style")), [(await $.v(C, "fsBold"))]));
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Enabled", false);
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Color", (await $.v(C, "clGradientInactiveCaption")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGivenResurs", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGivenResurs", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "FormGivenResurs")), "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGivenResurs", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "VResInsert")))))) {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
    await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
    await $.mset((await $.mv((await $.v(C, "Panel17")), "Font")), "Style", $.sub((await $.mv((await $.mv((await $.v(C, "Panel17")), "Font")), "Style")), [(await $.v(C, "fsBold"))]));
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
    await $.mcall((await $.v(C, "DBDateTimeEditEh1")), "Clear", []);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Enabled", false);
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Color", (await $.v(C, "clGradientInactiveCaption")));
  } else {
    {
      const $t3 = (await $.v(C, "DataModExch"));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t3], "ODSResurs", C, false)), "FieldByName", ["nextstatus"])), "AsInteger")), 1))) {
        await $.mset((await $.wv([$t3], "CheckBox1", C, false)), "Checked", (await $.wv([$t3], "True", C, false)));
        await $.mset((await $.mv((await $.wv([$t3], "Panel17", C, false)), "Font")), "Style", $.add((await $.mv((await $.mv((await $.wv([$t3], "Panel17", C, false)), "Font")), "Style")), [(await $.wv([$t3], "fsBold", C, false))]));
        await $.mset((await $.wv([$t3], "DBDateTimeEditEh1", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
        await $.mset((await $.wv([$t3], "DBDateTimeEditEh1", C, false)), "Color", (await $.wv([$t3], "clWhite", C, false)));
      } else {
        await $.mset((await $.wv([$t3], "CheckBox1", C, false)), "Checked", (await $.wv([$t3], "False", C, false)));
        await $.mset((await $.mv((await $.wv([$t3], "Panel17", C, false)), "Font")), "Style", $.sub((await $.mv((await $.mv((await $.wv([$t3], "Panel17", C, false)), "Font")), "Style")), [(await $.wv([$t3], "fsBold", C, false))]));
        await $.mset((await $.wv([$t3], "DBDateTimeEditEh1", C, false)), "Enabled", (await $.wv([$t3], "False", C, false)));
        await $.mset((await $.wv([$t3], "DBDateTimeEditEh1", C, false)), "Color", (await $.wv([$t3], "clGradientInactiveCaption", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

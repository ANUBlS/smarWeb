// Generated from ReceiveMessDetals_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReceiveMessDetals_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "SearchEdit", "ComCtrls", "data_unit", "LVPCSSImpl"]);
  const C = [U];
  U.defClass("TRecMessDet_Form", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbrichedit1": {"name": "DBRichEdit1", "type": "TDBRichEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "dbrichedit2": {"name": "DBRichEdit2", "type": "TDBRichEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("RecMessDet_Form", null, "TRecMessDet_Form");
  });
  U.method("TRecMessDet_Form", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SearchEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit2")), "Clear", []);
  await $.mcall((await $.v(C, "DBEdit3")), "Clear", []);
  await $.mcall((await $.v(C, "DBEdit8")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit1")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRecMessDet_Form", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRecMessDet_Form", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "SearchEdit1")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.v(C, "SearchEdit2")), "Color")), (await $.v(C, "clred")))))))) {
    return L0.result;
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.v(C, "GetUseDate")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["Get_Date", []])))))))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Emeliyyat #%d deyishdirile bilmez!", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["id"])), "AsInteger"))]])), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
    return L0.result;
  }
  { const $t1 = (await $.call(C, "MessageDlg", [$.add($.add("Emeliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["id"])), "AsString"))), " deyisdirilsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
    if ($.eq($t1, (await $.v(C, "mryes")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallProcedure", ["xs_Incoming_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["acc_no"])), "asstring"))]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["xs_incoming_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
      await $.stmt($.call(C, "close", []));
    }
    else if ($.eq($t1, (await $.v(C, "mrno")))) {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRecMessDet_Form", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TRecMessDet_Form", "FormConstrainedResize", async function FormConstrainedResize(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "minwidth": $.asRef(p1), "minheight": $.asRef(p2), "maxwidth": $.asRef(p3), "maxheight": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["minwidth"].set(630);
  await L0["minheight"].set(310);
  return L0.result;
}, {"params": ["Sender", "MinWidth", "MinHeight", "MaxWidth", "MaxHeight"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Integer", "Integer"]});
  return U;
}

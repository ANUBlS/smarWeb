// Generated from FormStatementLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormStatementLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Gauges", "ExtCtrls", "DBCtrls", "Buttons", "UnitDataModPCustService"]);
  const C = [U];
  U.defClass("TFormStatement", "TForm", {"grboxmain": {"name": "GrBoxMain", "type": "TGroupBox"}, "grboxdate": {"name": "GrBoxDate", "type": "TGroupBox"}, "labelbegdate": {"name": "LabelBegDate", "type": "TLabel"}, "labelenddate": {"name": "LabelEndDate", "type": "TLabel"}, "dtp_begin": {"name": "DTP_Begin", "type": "TDateTimePicker"}, "dtp_end": {"name": "DTP_End", "type": "TDateTimePicker"}, "cbturnover": {"name": "CBTurnOver", "type": "TCheckBox"}, "cbratediff": {"name": "CBRateDiff", "type": "TCheckBox"}, "grboxchecking": {"name": "GrBoxChecking", "type": "TGroupBox"}, "label_acc_no": {"name": "Label_Acc_No", "type": "TLabel"}, "label_bal_cn": {"name": "Label_Bal_Cn", "type": "TLabel"}, "labelcli_id": {"name": "LabelCli_Id", "type": "TLabel"}, "edit_acc_no": {"name": "Edit_Acc_No", "type": "TEdit"}, "edit_bal_cn": {"name": "Edit_Bal_Cn", "type": "TEdit"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "cboxextractcheck": {"name": "CBoxExtractCheck", "type": "TComboBox"}, "editcli_id": {"name": "EditCli_Id", "type": "TEdit"}, "rgroupprintmode": {"name": "RGroupPrintMode", "type": "TRadioGroup"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblcbavalute": {"name": "DBLCBavalute", "type": "TDBLookupComboBox"}, "dblcbfilial": {"name": "DBLCBfilial", "type": "TDBLookupComboBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "cbuser": {"name": "CBUser", "type": "TCheckBox"}, "dblcbuser": {"name": "dblcbUser", "type": "TDBLookupComboBox"}, "rgroupsetting": {"name": "RGroupSetting", "type": "TRadioGroup"}, "rgroupvalview": {"name": "RGroupValView", "type": "TRadioGroup"}, "panelprogress": {"name": "PanelProgress", "type": "TPanel"}, "prbarparent": {"name": "PrBarParent", "type": "TGauge"}, "prbarchild": {"name": "PrBarChild", "type": "TProgressBar"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}}, {});
  U.init(async () => {
    U.var_("FormStatement", null, "TFormStatement");
  });
  U.method("TFormStatement", "UpdateStr", async function UpdateStr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"inpstr": $.copyArg(p0), result: '', "tempstring": '', "endstring": '', "flag": 0, "tempcount": 0, "i": 0, "count": 0, "beg_index": 0, "k": 0};
  await $.fixArgs(L0, ["inpstr"]);
  L0["commas"] = "'";
  L0["comma"] = ",";
  L0["result"] = L0["inpstr"];
  if ($.truthy($.ne(L0["result"], ""))) {
    L0["tempstring"] = "";
    L0["endstring"] = "";
    L0["beg_index"] = 1;
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    L0["tempcount"] = 0;
    L0["flag"] = 1;
    { const $t1 = L0["k"];
      L0["i"] = 1;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
        $t2 = false;
        if (!($.ord(L0["i"]) <= $.ord($t1))) break;
        if ($.truthy($.ne((await $.idx(L0["result"], [L0["i"]])), " "))) {
          L0["tempstring"] = $.add(L0["tempstring"], (await $.idx(L0["result"], [L0["i"]])));
        }
        await $.tick();
      }
    }
    L0["inpstr"] = L0["tempstring"];
    L0["result"] = L0["inpstr"];
    L0["tempstring"] = "";
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    { const $t3 = L0["k"];
      L0["i"] = 1;
      let $t4 = true;
      for (;;) {
        if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
        $t4 = false;
        if (!($.ord(L0["i"]) <= $.ord($t3))) break;
        if ($.truthy($.eq((await $.idx(L0["result"], [L0["i"]])), ","))) {
          L0["count"] = $.sub(($.sub(L0["i"], 1)), L0["tempcount"]);
          L0["result"] = (await $.call(C, "Copy", [L0["result"], L0["beg_index"], L0["count"]]));
          L0["tempstring"] = $.add($.add($.add($.add(L0["tempstring"], L0["result"]), L0["commas"]), L0["comma"]), L0["commas"]);
          L0["result"] = L0["inpstr"];
          L0["beg_index"] = $.add(L0["i"], 1);
          L0["tempcount"] = L0["i"];
          L0["flag"] = 0;
        }
        if ($.truthy($.eq(L0["flag"], 1))) {
          L0["endstring"] = $.add(L0["endstring"], (await $.idx(L0["result"], [L0["i"]])));
        } else {
          L0["endstring"] = "";
          L0["flag"] = 1;
        }
        await $.tick();
      }
    }
    L0["result"] = $.add($.add($.add(L0["commas"], L0["tempstring"]), L0["endstring"]), L0["commas"]);
  } else {
    L0["result"] = "' '";
  }
  return L0.result;
}, {"params": ["InpStr"], "kind": "function", "ptypes": ["String"]});
  U.method("TStatementFrm", "SB_SysDate", async function SB_SysDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t5 = (await $.mv((await $.v(C, "DataModPCustService")), "SB_STATEMENT"));
    await $.wset([$t5], "Result", (await $.wcall([$t5], "CallDateFunction", ["get_date", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormStatement", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxExtractCheck")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DTP_Begin")), "DateTime", (await $.v(C, "SB_SysDate")));
  await $.mset((await $.v(C, "DTP_End")), "DateTime", (await $.v(C, "SB_SysDate")));
  await $.mset((await $.v(C, "dblcbuser")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

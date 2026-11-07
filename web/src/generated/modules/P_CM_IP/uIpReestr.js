// Generated from uIpReestr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uIpReestr", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "CheckLst", "Evanescence", "CommonDecls", "SystemState", "CMOracleApiDataModuleImpl", "uIPYMReportImpl", "CurrencyToHR_Azeri_Impl", "uIPReestrReportImpl"]);
  const C = [U];
  U.defClass("TfrmReestr", "TForm", {"activecrd": {"name": "ActiveCrd", "type": "TDataSource"}, "odsactivecrd": {"name": "ODSActiveCrd", "type": "TOracleDataSet"}, "evactive": {"name": "evActive", "type": "TEvanescence"}, "label1": {"name": "Label1", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("frmReestr", null, "TfrmReestr");
  });
  U.method("TfrmReestr", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "evActive")), "close", []);
  await $.mcall((await $.v(C, "evActive")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReestr", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cmtext": ''};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "qrpReestrInfo"))]))))) {
      await $.set(C, "qrpReestrInfo", (await $.mcall((await $.v(C, "TqrpReestrInfo")), "Create", [Self])));
    }
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "Exception")) {
      L0["e"] = $.exc($t1);
      await $.stmt((await $.call(C, "LogError", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t1; }
  }
  L0["cmtext"] = (await $.mv((await $.mv((await $.v(C, "evActive")), "GetCheckedKeyList")), "CommaText"));
  {
    const $t2 = (await $.wobj(C, "qrpReestrInfo"));
    const $t3 = (await $.wv([$t2], "ODSReestrInfo", C, false));
    await $.stmt($.wcall([$t2, $t3], "Close", [], C));
    { const $t4 = await $.iset((await $.wv([$t2, $t3], "SQL", C, false)), [1], $.add($.add("where creditid in (", (await $.wv([$t2, $t3], "cmtext", { get: async () => L0["cmtext"], set: async (v) => { L0["cmtext"] = v; }, local: true }, false))), ")")); if ($t4 !== undefined) { await $.wset([$t2, $t3], "SQL", $t4, C); } }
    await $.stmt($.wcall([$t2, $t3], "Open", [], C));
    await $.stmt($.wcall([$t2, $t3], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReestr", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

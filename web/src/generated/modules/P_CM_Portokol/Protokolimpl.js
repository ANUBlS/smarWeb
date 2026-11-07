// Generated from Protokolimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Protokolimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "DB", "OracleData", "Oracle", "CommonDecls", "protImpl", "sboapiDataModuleImpl", "ErizeImpl"]);
  const C = [U];
  U.defClass("Tmainform", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "protokol": {"name": "Protokol", "type": "TOraclePackage"}, "sysdattek_dat": {"name": "sysdatTEK_DAT", "type": "TDateTimeField"}, "sysdatpred_dat": {"name": "sysdatPRED_DAT", "type": "TDateTimeField"}, "sysdatarc_day": {"name": "sysdatARC_DAY", "type": "TDateTimeField"}, "sysdatclose": {"name": "sysdatCLOSE", "type": "TIntegerField"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("mainform", null, "Tmainform");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], "Main"))) {
    await $.mcall((await $.v(C, "mainform")), "Show", []);
  }
  if ($.truthy($.eq(L0["s"], "Prot"))) {
    await $.mcall((await $.v(C, "ProtFrm")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "Erize"))) {
    await $.mcall((await $.v(C, "ERizeFrm")), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("Tmainform", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "slectedrowcnt": 0, "crdid": 0, "dat": 0, "ver": '', "id": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["can_inf"] = "Seçilmiş ərizələrin protokola daxil edilməsiinə əminsinizmi ?";
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_inf"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  L0["ver"] = ",";
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "ERizeFrm")), "MainGrid")), "SelectedRows")), "Count")), 1))) {
    {
      const $t1 = (await $.mv((await $.v(C, "ERizeFrm")), "MainGrid"));
      const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
      await $.wset([$t1, $t2], "SlectedRowCnt", (await $.mv((await $.wv([$t1, $t2], "SelectedRows", C, false)), "Count")), { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true });
      { const $t3 = $.sub((await $.wv([$t1, $t2], "SlectedRowCnt", { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t1, $t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t4 = true;
        for (;;) {
          if (!$t4) { await $.wset([$t1, $t2], "i", $.succ((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t4 = false;
          if (!($.ord((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
          await $.stmt((await $.wcall([$t1, $t2], "GotoBookmark", [(await $.wcall([$t1, $t2], "Pointer", [(await $.idx((await $.wv([$t1, $t2], "SelectedRows", C, false)), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t1, $t2], "CrdId", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t1, $t2], "Protokol", C, false)), "CallProcedure", ["up_port_protokol", [(await $.wv([$t1, $t2], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1, $t2], "edit1", C, false)), "Text"))]])));
          if ($.truthy($.eq((await $.wv([$t1, $t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), ($.sub((await $.wv([$t1, $t2], "SlectedRowCnt", { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true }, false)), 1))))) {
            await $.wset([$t1, $t2], "ver", "", { get: async () => L0["ver"], set: async (v) => { L0["ver"] = v; }, local: true });
          }
          await $.wset([$t1, $t2], "id", $.add($.add((await $.wv([$t1, $t2], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wcall([$t1, $t2], "IntToStr", [(await $.wv([$t1, $t2], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C))), (await $.wv([$t1, $t2], "ver", { get: async () => L0["ver"], set: async (v) => { L0["ver"] = v; }, local: true }, false))), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          await $.tick();
        }
      }
    }
    await $.stmt($.call(C, "refresh", []));
  } else {
    {
      const $t5 = (await $.wobj(C, "CommonDBGrid"));
      const $t6 = (await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet"));
      await $.wset([$t5, $t6], "CrdId", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t5, $t6], "Protokol", C, false)), "CallProcedure", ["up_port_protokol", [(await $.wv([$t5, $t6], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5, $t6], "edit1", C, false)), "Text"))]])));
      await $.wset([$t5, $t6], "id", (await $.wcall([$t5, $t6], "IntToStr", [(await $.wv([$t5, $t6], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      await $.stmt($.wcall([$t5, $t6], "Refresh", [], C));
    }
  }
  {
    const $t7 = (await $.wobj(C, "ProtFrm"));
    const $t8 = (await $.wv([$t7], "Erize1", C, false));
    await $.stmt($.wcall([$t7, $t8], "close", [], C));
    { const $t9 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [2], $.add($.add("where id in ( ", (await $.wv([$t7, $t8], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))), ")")); if ($t9 !== undefined) { await $.wset([$t7, $t8], "SQL", $t9, C); } }
    await $.stmt($.wcall([$t7, $t8], "open", [], C));
    await $.stmt($.wcall([$t7, $t8], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tmainform", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ERizeFrm")), "Erize")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tmainform", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tmainform", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("Tmainform", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("Tmainform", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdat")), "Open", []);
  await $.set(C, "ProtFrm", (await $.mcall((await $.v(C, "TProtFrm")), "create", [Self])));
  await $.set(C, "ERizeFrm", (await $.mcall((await $.v(C, "TERizeFrm")), "create", [Self])));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "FieldByName", ["Tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "mainform", (await $.mcall((await $.v(C, "Tmainform")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

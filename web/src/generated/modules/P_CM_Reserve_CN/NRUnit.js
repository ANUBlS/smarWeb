// Generated from NRUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NRUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "NReservesDatModImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TNRForm", "TForm", {"speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("NRForm", null, "TNRForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NRForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNRForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "slectedrowcnt": 0, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["can_rereserveinf"] = "Seçilmiş ehtiyyatların qiymətləndirilməsinə əminsinizmi?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_rereserveinf"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "SelectedRows")), "Count")), 1))) {
    {
      const $t1 = (await $.wobj(C, "CommonDBGrid"));
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
          {
            const $t5 = (await $.wv([$t1, $t2], "ResevesDatMod", C, false));
            await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t5], "CM_RESERVE_COUNT_NEW", C, false)), "CallProcedure", ["reserve_contr_new", [(await $.wv([$t1, $t2, $t5], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
          }
          await $.tick();
        }
      }
    }
  } else {
    {
      const $t6 = (await $.wobj(C, "CommonDBGrid"));
      const $t7 = (await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet"));
      await $.wset([$t6, $t7], "CrdId", (await $.mv((await $.wcall([$t6, $t7], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      {
        const $t8 = (await $.wv([$t6, $t7], "ResevesDatMod", C, false));
        await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t8], "CM_RESERVE_COUNT_NEW", C, false)), "CallProcedure", ["reserve_contr_new", [(await $.wv([$t6, $t7, $t8], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNRForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ResevesDatMod", (await $.mcall((await $.v(C, "TResevesDatMod")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNRForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ResevesDatMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNRForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNRForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "slectedrowcnt": 0, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["can_rereserveinf"] = "Seçilmiş ehtiyyatların qiymətləndirilməsinə əminsinizmi?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_rereserveinf"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "SelectedRows")), "Count")), 1))) {
    {
      const $t9 = (await $.wobj(C, "CommonDBGrid"));
      const $t10 = (await $.mv((await $.wv([$t9], "DataSource", C, false)), "DataSet"));
      await $.wset([$t9, $t10], "SlectedRowCnt", (await $.mv((await $.wv([$t9, $t10], "SelectedRows", C, false)), "Count")), { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true });
      { const $t11 = $.sub((await $.wv([$t9, $t10], "SlectedRowCnt", { get: async () => L0["slectedrowcnt"], set: async (v) => { L0["slectedrowcnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t9, $t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t12 = true;
        for (;;) {
          if (!$t12) { await $.wset([$t9, $t10], "i", $.succ((await $.wv([$t9, $t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t12 = false;
          if (!($.ord((await $.wv([$t9, $t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
          await $.stmt((await $.wcall([$t9, $t10], "GotoBookmark", [(await $.wcall([$t9, $t10], "Pointer", [(await $.idx((await $.wv([$t9, $t10], "SelectedRows", C, false)), [(await $.wv([$t9, $t10], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t9, $t10], "CrdId", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
          {
            const $t13 = (await $.wv([$t9, $t10], "ResevesDatMod", C, false));
            await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t13], "CM_RESERVE_COUNT_NEW", C, false)), "CallProcedure", ["percent_after_months", [(await $.wv([$t9, $t10, $t13], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
          }
          await $.tick();
        }
      }
    }
  } else {
    {
      const $t14 = (await $.wobj(C, "CommonDBGrid"));
      const $t15 = (await $.mv((await $.wv([$t14], "DataSource", C, false)), "DataSet"));
      await $.wset([$t14, $t15], "CrdId", (await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
      {
        const $t16 = (await $.wv([$t14, $t15], "ResevesDatMod", C, false));
        await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16], "CM_RESERVE_COUNT_NEW", C, false)), "CallProcedure", ["percent_after_months", [(await $.wv([$t14, $t15, $t16], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
      }
    }
  }
  await $.stmt((await $.call(C, "ShowMessage", ["Qiymətləndirilmə bitdi!"])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NRForm", (await $.mcall((await $.v(C, "TNRForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

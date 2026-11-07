// Generated from StartReserveMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("StartReserveMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ImgList", "CommonDecls", "StartReserveDatModImpl"]);
  const C = [U];
  U.defClass("TStartReserveForm", "TForm", {"localizer": {"name": "Localizer", "type": "TNLSLocalizer"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}}, {});
  U.init(async () => {
    U.var_("StartReserveForm", null, "TStartReserveForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "StartReserveForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TStartReserveForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TStartReserveForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TStartReserveForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "committr": false};
  await $.fixArgs(L0, ["sender"]);
  L0["can_rereserveinf"] = "Ehtiyatın yenilənməsirə əminsinizmi?";
  L0["dlgf"] = "Ehtiyatın yenilənməsi(Seçilmiş kreditlər üzrə)";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["can_rereserveinf"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t1 = (await $.wobj(C, "CommonDBGrid"));
    const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
    await $.wset([$t1, $t2], "CrdId", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true });
    {
      const $t3 = (await $.wv([$t1, $t2], "SRDatMod", C, false));
      await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "CM_RESERVE_REFRESH", C, false)), "CallProcedure", ["refreshreserve", ["p_CreditID", (await $.wv([$t1, $t2, $t3], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
    }
    try {
      await $.wset([$t1, $t2], "CommitTr", (await $.wcall([$t1, $t2], "TrDelayed_Show", [Self, (await $.wv([$t1, $t2], "DLGF", { get: async () => L0["dlgf"], set: async (v) => { L0["dlgf"] = v; }, local: true }, false))], C)), { get: async () => L0["committr"], set: async (v) => { L0["committr"] = v; }, local: true });
      await $.stmt($.wcall([$t1, $t2], "Update", [], C));
      {
        const $t5 = (await $.wv([$t1, $t2], "SRDatMod", C, false));
        await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t5], "CM_RESERVE_REFRESH", C, false)), "CallProcedure", ["committr", ["DefCommit", (await $.wv([$t1, $t2, $t5], "CommitTr", { get: async () => L0["committr"], set: async (v) => { L0["committr"] = v; }, local: true }, false)), "p_id", (await $.wv([$t1, $t2, $t5], "CrdId", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))]])));
      }
      if ($.truthy((await $.wv([$t1, $t2], "CommitTr", { get: async () => L0["committr"], set: async (v) => { L0["committr"] = v; }, local: true }, false)))) {
        await $.mset(Self, "ModalResult", (await $.wv([$t1, $t2], "mrOk", C, false)));
      }
      await $.mcall(Self, "Update", []);
    } catch ($t4) {
      $.rethrowControl($t4);
      $.handled($t4);
      {
        const $t6 = (await $.wv([$t1, $t2], "SRDatMod", C, false));
        await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t6], "CM_RESERVE_REFRESH", C, false)), "CallProcedure", ["CommitTr", ["DefCommit", (await $.wv([$t1, $t2, $t6], "False", C, false))]])));
      }
      throw $t4;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStartReserveForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "SRDatMod", (await $.mcall((await $.v(C, "TSRDatMod")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStartReserveForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "StartReserveForm", (await $.mcall((await $.v(C, "TStartReserveForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

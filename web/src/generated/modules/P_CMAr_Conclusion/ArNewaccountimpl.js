// Generated from ArNewaccountimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArNewaccountimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "Buttons", "DBCtrls", "DBGrids", "CheckLst", "DBLookupEh", "Evanescence", "DataModuleArConclusion", "ArConclusionMainUnitImpl"]);
  const C = [U];
  U.defClass("TNewaccount", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("Newaccount", null, "TNewaccount");
  });
  U.method("TNewaccount", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "fild": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rscracc"] = "Seçilmiş hesablar yaradılacaq Əminsiniz ?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rscracc"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "OracleDataSet1")), "post", []);
    {
      const $t1 = (await $.v(C, "ArDataModuleConcl"));
      const $t2 = (await $.wv([$t1], "OracleDataSet2", C, false));
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "IUPackage", C, false)), "CallProcedure", ["open_accno", []])));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Customer", C, false)), "FieldByName", ["ID"])), "Asinteger"))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.mv((await $.v(C, "ArDataModuleConcl")), "OracleDataSet2"));
      await $.stmt($.wcall([$t3], "first", [], C));
      while ($.truthy($.not((await $.wv([$t3], "EOF", C, false))))) {
        {
          const $t4 = (await $.wv([$t3], "ArConclusionForm", C, false));
          { const $t5 = $.sub((await $.wv([$t3, $t4], "ComponentCount", C, false)), 1);
            await $.wset([$t3, $t4], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
            let $t6 = true;
            for (;;) {
              if (!$t6) { await $.wset([$t3, $t4], "I", $.succ((await $.wv([$t3, $t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
              $t6 = false;
              if (!($.ord((await $.wv([$t3, $t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t3, $t4], "Components", C, false)), [(await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassType")), (await $.wv([$t3, $t4], "TDBLookupComboboxEh", C, false)))))) {
                if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t3, $t4], "Components", C, false)), [(await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name")), (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["iname"], C)), "asstring"))))) {
                  await $.mcall((await $.mv((await $.mv((await $.idx((await $.wv([$t3, $t4], "components", C, false)), [(await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ListSource")), "DataSet")), "Refresh", []);
                  await $.wset([$t3, $t4], "fild", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["FILNAME"], C)), "asstring")), { get: async () => L0["fild"], set: async (v) => { L0["fild"] = v; }, local: true });
                  await $.mset((await $.mcall((await $.mv((await $.mv((await $.idx((await $.wv([$t3, $t4], "components", C, false)), [(await $.wv([$t3, $t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DataSource")), "DataSet")), "FieldByName", [(await $.wv([$t3, $t4], "fild", { get: async () => L0["fild"], set: async (v) => { L0["fild"] = v; }, local: true }, false))])), "asinteger", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["acc_id"], C)), "asinteger")));
                }
              }
              await $.tick();
            }
          }
        }
        await $.stmt($.wcall([$t3], "Next", [], C));
        await $.tick();
      }
    }
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewaccount", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewaccount", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}

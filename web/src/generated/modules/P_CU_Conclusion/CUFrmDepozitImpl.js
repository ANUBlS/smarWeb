// Generated from CUFrmDepozitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUFrmDepozitImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "Buttons", "CUDataModuleConclusion", "CUConclusionMainUnitImpl"]);
  const C = [U];
  U.defClass("TFrmDepozit", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfspeedbutton1": {"name": "XFSpeedButton1", "type": "TXFSpeedButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfspeedbutton2": {"name": "XFSpeedButton2", "type": "TXFSpeedButton"}, "xfspeedbutton3": {"name": "XFSpeedButton3", "type": "TXFSpeedButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("FrmDepozit", null, "TFrmDepozit");
  });
  U.method("TFrmDepozit", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmDepozit", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TFrmDepozit", "XFSpeedButton1Click", async function XFSpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "CUDataModuleConcl"));
    await $.mcall((await $.wv([$t1], "DepozitDSet", C, false)), "close", []);
    if ($.truthy($.ne((await $.mv((await $.wv([$t1], "Edit1", C, false)), "Text")), ""))) {
      { const $t2 = await $.iset((await $.mv((await $.wv([$t1], "DepozitDSet", C, false)), "SQL")), [28], $.add($.add($.add($.add("and cont.customerid in(", (await $.wcall([$t1], "inttostr", [(await $.mv((await $.mv((await $.wv([$t1], "ConclusionForm", C, false)), "DBLookupComboboxEh19")), "KeyValue"))], C))), ","), (await $.mv((await $.wv([$t1], "Edit1", C, false)), "Text"))), ")")); if ($t2 !== undefined) { await $.mset((await $.wv([$t1], "DepozitDSet", C, false)), "SQL", $t2); } }
    } else {
      { const $t3 = await $.iset((await $.mv((await $.wv([$t1], "DepozitDSet", C, false)), "SQL")), [28], ""); if ($t3 !== undefined) { await $.mset((await $.wv([$t1], "DepozitDSet", C, false)), "SQL", $t3); } }
    }
    await $.mcall((await $.wv([$t1], "DepozitDSet", C, false)), "open", []);
    await $.mset((await $.wv([$t1], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t1], "DepozitDSet", C, false)), "SQL")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepozit", "XFSpeedButton2Click", async function XFSpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0, "i": 0, "s": '', "num": '', "kredqaliq": 0, "qaliq": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["kredqaliq"] = 0;
  {
    const $t4 = (await $.v(C, "XDBGrid1"));
    { const $t5 = 0;
      await $.wset([$t4], "I", $.sub((await $.mv((await $.wv([$t4], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t4], "I", $.succ((await $.wv([$t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t5))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t4], "Pointer", [(await $.idx((await $.wv([$t4], "SelectedRows", C, false)), [(await $.wv([$t4], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
        {
          const $t7 = (await $.mv((await $.wv([$t4], "CUDataModuleConcl", C, false)), "Depozitqaliq"));
          if ($.truthy((await $.wv([$t4, $t7], "Active", C, false)))) {
            await $.mcall((await $.mv((await $.wv([$t4, $t7], "CUDataModuleConcl", C, false)), "Depozitqaliq")), "Close", []);
          }
          await $.stmt((await $.wcall([$t4, $t7], "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4, $t7], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
          await $.stmt($.wcall([$t4, $t7], "open", [], C));
          if ($.truthy($.gt((await $.wv([$t4, $t7], "RecCount", C, false)), 0))) {
            await $.wset([$t4, $t7], "kredqaliq", (await $.mv((await $.wcall([$t4, $t7], "FieldByName", ["rest"], C)), "AsFloat")), { get: async () => L0["kredqaliq"], set: async (v) => { L0["kredqaliq"] = v; }, local: true });
          }
        }
        await $.wset([$t4], "s", $.add($.add((await $.wv([$t4], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), ((await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "FieldByName", ["id"])), "AsString")))), ","), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.wset([$t4], "num", $.add($.add((await $.wv([$t4], "num", { get: async () => L0["num"], set: async (v) => { L0["num"] = v; }, local: true }, false)), ((await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "FieldByName", ["contractno"])), "AsString")))), ","), { get: async () => L0["num"], set: async (v) => { L0["num"] = v; }, local: true });
        await $.wset([$t4], "qaliq", $.sub($.add((await $.wv([$t4], "qaliq", { get: async () => L0["qaliq"], set: async (v) => { L0["qaliq"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ekfacticaldebt"])), "AsFloat"))), (await $.wv([$t4], "kredqaliq", { get: async () => L0["kredqaliq"], set: async (v) => { L0["kredqaliq"] = v; }, local: true }, false))), { get: async () => L0["qaliq"], set: async (v) => { L0["qaliq"] = v; }, local: true });
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq(L0["num"], ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir depozit seçməmisiniz"])));
    return L0.result;
  }
  if ($.truthy($.lt(L0["qaliq"], (await $.mv((await $.mv((await $.v(C, "ConclusionForm")), "DBNumberEditEh1")), "Value"))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Qeyd olunmuş depozit və ya depozitlərin qalıq məbləği kreditin məbləğindən azdır!"])));
    return L0.result;
  }
  L0["s"] = (await $.call(C, "Copy", [L0["s"], 0, $.sub((await $.call(C, "LENGTH", [L0["s"]])), 1)]));
  L0["num"] = (await $.call(C, "Copy", [L0["num"], 0, $.sub((await $.call(C, "LENGTH", [L0["num"]])), 1)]));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add(L0["num"], " bu nömrəli depozitlər kreditin girovu kimi qəbul olunacaq əminsinizmi!"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNO"))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "CUDataModuleConcl")), "CreditPropsDEPOZITIDS")), "AsString", L0["s"]);
  await $.mcall((await $.mv((await $.v(C, "CUDataModuleConcl")), "DepAccSet")), "Close", []);
  { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "CUDataModuleConcl")), "DepAccSet")), "sql")), [9], $.add($.add("and cont.id in( ", L0["s"]), ")")); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "CUDataModuleConcl")), "DepAccSet")), "sql", $t8); } }
  await $.mcall((await $.mv((await $.v(C, "CUDataModuleConcl")), "DepAccSet")), "open", []);
  await $.mcall((await $.v(C, "FrmDepozit")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepozit", "XFSpeedButton3Click", async function XFSpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

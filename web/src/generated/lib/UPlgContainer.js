// Generated from UPlgContainer.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UPlgContainer", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "OleCtrls", "SBPlgAx50_TLB", "AxLoader"]);
  const C = [U];
  U.defClass("TfmContainer", "TForm", {"foleobject": {"name": "FOleObject", "type": "TOleControl"}}, {});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
  });
  U.method("TfmContainer", "WMModalResult", async function WMModalResult(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  { const $t1 = (await $.mv((await L0["msg"].get()), "Msg"));
    if ($.eq($t1, (await $.v(C, "WM_ModalResult")))) {
      await $.set(C, "ModalResult", (await $.mv((await L0["msg"].get()), "wParam")));
    }
  }
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TfmContainer", "PutParam", async function PutParam(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined, "paraminput": null};
  await $.fixArgs(L0, ["name", "value"]);
  if ($.truthy($.eq((await $.mcall((await $.call(C, "IUnknown", [(await $.mv((await $.call(C, "TVarData", [(await $.mv((await $.v(C, "FOleObject")), "OleObject"))])), "VUnknown"))])), "QueryInterface", [(await $.v(C, "IID_IParamInput")), L0["paraminput"]])), (await $.v(C, "S_OK"))))) {
    { const $t2 = await $.iset((await $.mv(L0["paraminput"], "Params")), [L0["name"]], L0["value"]); if ($t2 !== undefined) { await $.mset(L0["paraminput"], "Params", $t2); } }
  }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["String", "Variant"]});
  U.method("TfmContainer", "ObjectActivate", async function ObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "vobject": null};
  if ($.truthy($.eq((await $.mcall((await $.call(C, "IUnknown", [(await $.mv((await $.call(C, "TVarData", [(await $.mv((await $.v(C, "FOleObject")), "OleObject"))])), "VUnknown"))])), "QueryInterface", [(await $.v(C, "IID_IUIObject")), L0["vobject"]])), (await $.v(C, "S_OK"))))) {
    await $.stmt((await $.mcall(L0["vobject"], "Activate", [])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmContainer", "OleResize", async function OleResize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "vobject": null};
  if ($.truthy($.eq((await $.mcall((await $.call(C, "IUnknown", [(await $.mv((await $.call(C, "TVarData", [(await $.mv((await $.v(C, "FOleObject")), "OleObject"))])), "VUnknown"))])), "QueryInterface", [(await $.v(C, "IID_IUIObject")), L0["vobject"]])), (await $.v(C, "S_OK"))))) {
    await $.set(C, "Height", (await $.mcall(L0["vobject"], "Get_Height", [])));
    await $.set(C, "Width", (await $.mcall(L0["vobject"], "Get_Width", [])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmContainer", "SetParams", async function SetParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t3 = L0["params"];
    { const $t4 = $.sub((await $.mv((await $.wv([$t3], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Count")), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        await $.stmt((await $.wcall([$t3], "PutParam", [(await $.idx((await $.wv([$t3], "Names", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.idx((await $.wv([$t3], "Values", C, false)), [(await $.idx((await $.wv([$t3], "Names", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]))], C)));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TStringList"]});
  U.method("TfmContainer", "SetCaption", async function SetCaption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "vobject": null};
  if ($.truthy($.eq((await $.mcall((await $.call(C, "IUnknown", [(await $.mv((await $.call(C, "TVarData", [(await $.mv((await $.v(C, "FOleObject")), "OleObject"))])), "VUnknown"))])), "QueryInterface", [(await $.v(C, "IID_ISBPlgAc50BufferForm")), L0["vobject"]])), (await $.v(C, "S_OK"))))) {
    await $.set(C, "Caption", (await $.mcall(L0["vobject"], "Get_Caption", [])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmContainer", "SetOwner", async function SetOwner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined, "vobject": null};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.eq((await $.mcall((await $.call(C, "IUnknown", [(await $.mv((await $.call(C, "TVarData", [(await $.mv((await $.v(C, "FOleObject")), "OleObject"))])), "VUnknown"))])), "QueryInterface", [(await $.v(C, "IID_ISBPlgAc50BufferForm")), L0["vobject"]])), (await $.v(C, "S_OK"))))) {
    await $.stmt((await $.mcall(L0["vobject"], "Set_Owner", [L0["val"]])));
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmContainer", "OpenObj", async function OpenObj(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"objguid": $.copyArg(p0), "params": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["objguid", "params"]);
  await $.set(C, "FOleObject", (await $.mcall((await $.v(C, "TActiveFormX")), "CreateObject", [Self, L0["objguid"], (await $.v(C, "IUnknown"))])));
  await $.stmt((await $.call(C, "SetParams", [L0["params"]])));
  await $.stmt((await $.call(C, "SetOwner", [(await $.v(C, "handle"))])));
  await $.stmt((await $.call(C, "ObjectActivate", [])));
  await $.stmt((await $.call(C, "OleResize", [])));
  await $.stmt((await $.call(C, "SetCaption", [])));
  {
    const $t6 = (await $.v(C, "FOleObject"));
    await $.wset([$t6], "Parent", Self, C);
    await $.wset([$t6], "Align", (await $.wv([$t6], "alClient", C, false)), C);
  }
  return L0.result;
}, {"params": ["ObjGuid", "Params"], "kind": "procedure", "ptypes": ["TGUID", "TStringList"]});
  U.method("TfmContainer", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmContainer", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FOleObject")), "Free", []);
  await L0["action"].set((await $.v(C, "caFree")));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

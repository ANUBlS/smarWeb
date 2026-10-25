// Generated from DuplicateUint.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DuplicateUint", ["SysUtils", "Windows", "Messages", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "IniFiles", "TypInfo"]);
  const C = [U];
  U.defClass("TUniqueReader", "TReader", {"lastread": {"name": "LastRead", "type": "TComponent"}}, {});
  U.init(async () => {
  });
  U.method("TUniqueReader", "ComponentRead", async function ComponentRead(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"component": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["component"]);
  await $.set(C, "LastRead", L0["component"]);
  return L0.result;
}, {"params": ["Component"], "kind": "procedure", "ptypes": ["TComponent"]});
  U.method("TUniqueReader", "SetNameUnique", async function SetNameUnique(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"reader": $.copyArg(p0), "component": $.copyArg(p1), "name": $.asRef(p2), result: undefined, "i": 0, "tempname": ''};
  await $.fixArgs(L0, ["reader", "component"]);
  L0["i"] = 0;
  L0["tempname"] = (await L0["name"].get());
  while ($.truthy($.ne((await $.mcall((await $.mv(L0["component"], "Owner")), "FindComponent", [(await L0["name"].get())])), null))) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t1) => { L0["i"] = $t1; })])));
    await L0["name"].set((await $.call(C, "Format", ["%s%d", [L0["tempname"], L0["i"]]])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["Reader", "Component", "Name"], "kind": "procedure", "ptypes": ["TReader", "TComponent", "String"]});
  U.func("DuplicateComponents", async function DuplicateComponents(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), result: null, "stream": null, "uniquereader": null, "writer": null};
  await $.fixArgs(L0, ["acomponent"]);
  L0["registercomponentclasses"] = $.fn(async function RegisterComponentClasses(p0) {
  const L1 = {"acomponent": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["acomponent"]);
  await $.stmt((await $.call(C, "RegisterClass", [(await $.call(C, "TPersistentClass", [(await $.mv(L1["acomponent"], "ClassType"))]))])));
  if ($.truthy($.is_(L1["acomponent"], "TWinControl"))) {
    if ($.truthy($.gt((await $.mv((await $.call(C, "TWinControl", [L1["acomponent"]])), "ControlCount")), 0))) {
      { const $t2 = ($.sub((await $.mv((await $.call(C, "TWinControl", [L1["acomponent"]])), "ControlCount")), 1));
        L1["i"] = 0;
        let $t3 = true;
        for (;;) {
          if (!$t3) { L1["i"] = $.succ(L1["i"], 1); }
          $t3 = false;
          if (!($.ord(L1["i"]) <= $.ord($t2))) break;
          await $.stmt((await $.callv(L0["registercomponentclasses"], [(await $.idx((await $.mv((await $.call(C, "TWinControl", [L1["acomponent"]])), "Controls")), [L1["i"]]))])));
          await $.tick();
        }
      }
    }
  }
  return L1.result;
});
  L0["uniquereader"] = null;
  L0["writer"] = null;
  L0["stream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  try {
    await $.stmt((await $.callv(L0["registercomponentclasses"], [L0["acomponent"]])));
    try {
      L0["writer"] = (await $.mcall((await $.v(C, "TWriter")), "Create", [L0["stream"], 4096]));
      await $.mset(L0["writer"], "Root", (await $.mv(L0["acomponent"], "Owner")));
      await $.mcall(L0["writer"], "WriteSignature", []);
      await $.stmt((await $.mcall(L0["writer"], "WriteComponent", [L0["acomponent"]])));
      await $.mcall(L0["writer"], "WriteListEnd", []);
    } finally {
      await $.mcall(L0["writer"], "Free", []);
    }
    await $.mset(L0["stream"], "Position", 0);
    try {
      L0["uniquereader"] = (await $.mcall((await $.v(C, "TUniqueReader")), "Create", [L0["stream"], 4096]));
      await $.mset(L0["uniquereader"], "OnSetName", (await $.mref(L0["uniquereader"], "SetNameUnique")));
      await $.mset(L0["uniquereader"], "LastRead", null);
      if ($.truthy($.is_(L0["acomponent"], "TWinControl"))) {
        await $.stmt((await $.mcall(L0["uniquereader"], "ReadComponents", [(await $.mv((await $.call(C, "TWinControl", [L0["acomponent"]])), "Owner")), (await $.mv((await $.call(C, "TWinControl", [L0["acomponent"]])), "Parent")), (await $.mv(L0["uniquereader"], "ComponentRead"))])));
      } else {
        await $.stmt((await $.mcall(L0["uniquereader"], "ReadComponents", [(await $.mv(L0["acomponent"], "Owner")), null, (await $.mv(L0["uniquereader"], "ComponentRead"))])));
      }
      L0["result"] = (await $.mv(L0["uniquereader"], "LastRead"));
    } finally {
      await $.mcall(L0["uniquereader"], "Free", []);
    }
  } finally {
    await $.mcall(L0["stream"], "Free", []);
  }
  return L0.result;
}, {"params": ["AComponent"], "kind": "function", "ptypes": ["TComponent"]});
  return U;
}

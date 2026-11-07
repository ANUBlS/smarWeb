// Generated from SetupLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SetupLoader", ["Windows", "Sysutils", "ReferencesImpl", "CommonDecls", "VilibleFieldsListImpl", "AccGroupsImpl", "IETuningFormImpl", "TrDescTuningFormImpl", "CreditTypesReferImpl", "uUsrGrCatImpl", "PledgImpl", "OtherSetupImpl", "FrmSiqortaimpl", "expertImpl", "ReserveImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("showOther", async function showOther(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mcall((await $.v(C, "TFrmOtherSetup")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowUsrGr", async function ShowUsrGr(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.mcall((await $.v(C, "TUsrGrMainForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t2], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t2], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowPledgs", async function ShowPledgs(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.mcall((await $.v(C, "TPledgForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t3], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t3], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSetup", async function ShowSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.mcall((await $.v(C, "TMainReferForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t4], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t4], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowVFSetup", async function ShowVFSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t5 = (await $.mcall((await $.v(C, "TVFListForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t5], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t5], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowAGSetup", async function ShowAGSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.mcall((await $.v(C, "TAccGrpForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t6], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t6], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowIESetup", async function ShowIESetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "IETuningForm")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowTrDescTuningForm", async function ShowTrDescTuningForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t7 = (await $.mcall((await $.v(C, "TTrDescTuningForm")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t7], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t7], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowFrmSiqorta", async function ShowFrmSiqorta(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.mcall((await $.v(C, "TFrmSiqorta")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t8], "showmodal", [], C));
    } finally {
      await $.stmt($.wcall([$t8], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowFrmExpert", async function ShowFrmExpert(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.mcall((await $.v(C, "TExpert")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t9], "showmodal", [], C));
    } finally {
      await $.stmt($.wcall([$t9], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowCredTypesSetup", async function ShowCredTypesSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.mcall((await $.v(C, "TCreditTypeTuning")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t10], "ShowCredTypesSetup", [], C));
    } finally {
      await $.stmt($.wcall([$t10], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowReserve", async function ShowReserve(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t11 = (await $.mcall((await $.v(C, "TFrmReserve")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t11], "showmodal", [], C));
    } finally {
      await $.stmt($.wcall([$t11], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["sppshowsetup"] = "TreeSetup";
  L0["sppshowvflist"] = "VFSetup";
  L0["sppshowagsetup"] = "AccGrSetup";
  L0["sppshowiesetup"] = "ShowIESetup";
  L0["spptrdesctuning"] = "TrDescTuning";
  L0["sppcredittypestuning"] = "CreditTypesTuning";
  L0["spshowusrgr"] = "USERGROUP";
  L0["spshowplegs"] = "PLEDGS";
  L0["spshowother"] = "showOther";
  L0["spshowfrmsiqorta"] = "FrmSiqorta";
  L0["spshowfrmexpert"] = "Expert";
  L0["spreserve"] = "Reserve";
  if ($.truthy($.eq(L0["s"], L0["spshowusrgr"]))) {
    await $.stmt($.call(C, "ShowUsrGr", []));
  } else {
    if ($.truthy($.eq(L0["s"], L0["sppshowsetup"]))) {
      await $.stmt($.call(C, "ShowSetup", []));
    } else {
      if ($.truthy($.eq(L0["s"], L0["sppshowvflist"]))) {
        await $.stmt($.call(C, "ShowVFSetup", []));
      } else {
        if ($.truthy($.eq(L0["s"], L0["sppshowagsetup"]))) {
          await $.stmt($.call(C, "ShowAGSetup", []));
        } else {
          if ($.truthy($.eq(L0["s"], L0["sppshowiesetup"]))) {
            await $.stmt($.call(C, "ShowIESetup", []));
          } else {
            if ($.truthy($.eq(L0["s"], L0["spptrdesctuning"]))) {
              await $.stmt($.call(C, "ShowTrDescTuningForm", []));
            } else {
              if ($.truthy($.eq(L0["s"], L0["spshowplegs"]))) {
                await $.stmt($.call(C, "ShowPledgs", []));
              } else {
                if ($.truthy($.eq(L0["s"], L0["spreserve"]))) {
                  await $.stmt($.call(C, "ShowReserve", []));
                } else {
                  if ($.truthy($.eq(L0["s"], L0["spshowfrmsiqorta"]))) {
                    await $.stmt($.call(C, "ShowFrmSiqorta", []));
                  } else {
                    if ($.truthy($.eq(L0["s"], L0["spshowfrmexpert"]))) {
                      await $.stmt($.call(C, "ShowFrmExpert", []));
                    } else {
                      if ($.truthy($.eq(L0["s"], L0["spshowother"]))) {
                        await $.stmt($.call(C, "showOther", []));
                      } else {
                        await $.stmt($.call(C, "ShowCredTypesSetup", []));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}

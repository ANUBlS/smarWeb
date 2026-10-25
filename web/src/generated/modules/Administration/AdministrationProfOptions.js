// Generated from AdministrationProfOptions.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationProfOptions", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "ComCtrls", "HintBox", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("ECheckOptions", "Exception", {}, {});
  U.defClass("TfmProfOptions", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "hberrorbx": {"name": "hbErrorBx", "type": "THintBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "chklockstatus": {"name": "chkLockStatus", "type": "TCheckBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "password_life_time": {"name": "PASSWORD_LIFE_TIME", "type": "TComboBox"}, "password_grace_time": {"name": "PASSWORD_GRACE_TIME", "type": "TComboBox"}, "password_reuse_time": {"name": "PASSWORD_REUSE_TIME", "type": "TComboBox"}, "password_reuse_max": {"name": "PASSWORD_REUSE_MAX", "type": "TComboBox"}, "failed_login_attempts": {"name": "FAILED_LOGIN_ATTEMPTS", "type": "TComboBox"}, "password_lock_time": {"name": "PASSWORD_LOCK_TIME", "type": "TComboBox"}, "edminpasslength": {"name": "edMinPassLength", "type": "TComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "label9": {"name": "Label9", "type": "TLabel"}, "usern": {"name": "usern", "type": "String"}}, {"username": {"name": "userName", "read": "GetUsern", "write": "SetUsern"}});
  U.init(async () => {
    U.var_("fmProfOptions", null, "TfmProfOptions");
  });
  U.method("TfmProfOptions", "GetUsern", async function GetUsern(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.v(C, "usern"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmProfOptions", "SetUsern", async function SetUsern(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "usern", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfmProfOptions", "Get_UserName", async function Get_UserName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "";
  {
    const $t1 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallStringFunction", ["getusername", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmProfOptions", "DisableControls", async function DisableControls(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t2 = (await $.v(C, "GroupBox1"));
    { const $t3 = $.sub((await $.wv([$t2], "ControlCount", C, false)), 1);
      await $.wset([$t2], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox")))) {
          await $.mset((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t2], "False", C, false)));
          await $.mset((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Color", (await $.wv([$t2], "clBtnFace", C, false)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmProfOptions", "EnableControls", async function EnableControls(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t5 = (await $.v(C, "GroupBox1"));
    { const $t6 = $.sub((await $.wv([$t5], "ControlCount", C, false)), 1);
      await $.wset([$t5], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t5], "i", $.succ((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t5], "Controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t5], "Controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t5], "True", C, false)));
          await $.mset((await $.idx((await $.wv([$t5], "Controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Color", (await $.wv([$t5], "clWindow", C, false)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmProfOptions", "CheckUser", async function CheckUser(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  {
    const $t8 = (await $.v(C, "AdministrationData"));
    if ($.truthy((await $.mcall((await $.wv([$t8], "pcAca", C, false)), "CallBooleanFunction", ["isadm", [(await $.wcall([$t8], "UpperCase", [(await $.wv([$t8], "get_UserName", C, false))], C))]])))) {
      await $.wset([$t8], "Result", (await $.wv([$t8], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmProfOptions", "readParams", async function readParams(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t9 = (await $.v(C, "GroupBox1"));
    { const $t10 = $.sub((await $.wv([$t9], "ControlCount", C, false)), 1);
      await $.wset([$t9], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t11 = true;
      for (;;) {
        if (!$t11) { await $.wset([$t9], "i", $.succ((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t11 = false;
        if (!($.ord((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t10))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t9], "Controls", C, false)), [(await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox")))) {
          try {
            {
              const $t13 = (await $.mv((await $.wv([$t9], "AdministrationData", C, false)), "pcADM"));
              await $.mset((await $.idx((await $.wv([$t9, $t13], "Controls", C, false)), [(await $.wv([$t9, $t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", (await $.wcall([$t9, $t13], "CallStringFunction", ["getprofilevalues", [(await $.wv([$t9, $t13], "usern", C, false)), (await $.mv(((await $.idx((await $.wv([$t9, $t13], "Controls", C, false)), [(await $.wv([$t9, $t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "name"))]], C)));
            }
          } catch ($t12) {
            $.rethrowControl($t12);
            if ($.excIs($t12, "Exception")) {
              L0["e"] = $.exc($t12);
              await $.stmt((await $.wcall([$t9], "ShowMessage", [(await $.mv((await $.wv([$t9], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
            }
            else { throw $t12; }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmProfOptions", "saveParams", async function saveParams(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t14 = (await $.v(C, "GroupBox1"));
    { const $t15 = $.sub((await $.wv([$t14], "ControlCount", C, false)), 1);
      await $.wset([$t14], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t16 = true;
      for (;;) {
        if (!$t16) { await $.wset([$t14], "i", $.succ((await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t16 = false;
        if (!($.ord((await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t15))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t14], "Controls", C, false)), [(await $.wv([$t14], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          {
            const $t17 = (await $.mv((await $.wv([$t14], "AdministrationData", C, false)), "pcADM"));
            try {
              if ($.truthy($.not((await $.wcall([$t14, $t17], "CallBooleanFunction", ["setprofilevalues", [(await $.wv([$t14, $t17], "usern", C, false)), (await $.mv(((await $.idx((await $.wv([$t14, $t17], "Controls", C, false)), [(await $.wv([$t14, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "name")), (await $.mv(((await $.idx((await $.wv([$t14, $t17], "Controls", C, false)), [(await $.wv([$t14, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text"))]], C))))) {
                throw $.raise((await $.mcall((await $.wv([$t14, $t17], "ECheckOptions", C, false)), "Create", [(await $.mv(((await $.idx((await $.wv([$t14, $t17], "Controls", C, false)), [(await $.wv([$t14, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))])));
              }
            } catch ($t18) {
              $.rethrowControl($t18);
              if ($.excIs($t18, "ECheckOptions")) {
                L0["e"] = $.exc($t18);
                await $.stmt((await $.mcall((await $.wv([$t14, $t17], "hbErrorBx", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t14, $t17], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))])));
              }
              else { throw $t18; }
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CheckNumber", async function CheckNumber(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: false, "i": 0};
  await $.fixArgs(L0, ["val"]);
  L0["result"] = true;
  { const $t19 = (await $.call(C, "Length", [L0["val"]]));
    L0["i"] = 1;
    let $t20 = true;
    for (;;) {
      if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
      $t20 = false;
      if (!($.ord(L0["i"]) <= $.ord($t19))) break;
      if ($.truthy($.not(($.in_((await $.idx(L0["val"], [L0["i"]])), [...$.range("0","9"), "."]))))) {
        L0["result"] = false;
        break;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["val"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmProfOptions", "CheckObjectInfo", async function CheckObjectInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: false, "value": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["result"] = false;
  if ($.truthy(($.is_(L0["sender"], "TComboBox")))) {
    L0["value"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["value"], ""))) {
      return L0.result;
    }
    if ($.truthy((await $.or_(($.eq(L0["value"], "UNLIMITED")), async () => ((await $.call(C, "CheckNumber", [L0["value"]]))))))) {
      L0["result"] = true;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "function", "ptypes": ["TObject"]});
  U.method("TfmProfOptions", "CheckAllObjectsInfo", async function CheckAllObjectsInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "i": 0};
  L0["result"] = true;
  {
    const $t21 = (await $.v(C, "GroupBox1"));
    { const $t22 = $.sub((await $.wv([$t21], "ControlCount", C, false)), 1);
      await $.wset([$t21], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t23 = true;
      for (;;) {
        if (!$t23) { await $.wset([$t21], "i", $.succ((await $.wv([$t21], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t23 = false;
        if (!($.ord((await $.wv([$t21], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t22))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t21], "Controls", C, false)), [(await $.wv([$t21], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          {
            const $t24 = (await $.mv((await $.wv([$t21], "AdministrationData", C, false)), "pcADM"));
            try {
              if ($.truthy($.not((await $.wcall([$t21, $t24], "CheckObjectInfo", [((await $.idx((await $.wv([$t21, $t24], "Controls", C, false)), [(await $.wv([$t21, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))], C))))) {
                throw $.raise((await $.mcall((await $.wv([$t21, $t24], "ECheckOptions", C, false)), "Create", [(await $.mv(((await $.idx((await $.wv([$t21, $t24], "Controls", C, false)), [(await $.wv([$t21, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))])));
              }
            } catch ($t25) {
              $.rethrowControl($t25);
              if ($.excIs($t25, "ECheckOptions")) {
                L0["e"] = $.exc($t25);
                await $.stmt((await $.mcall((await $.wv([$t21, $t24], "hbErrorBx", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t21, $t24], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))])));
                await $.mset((await $.wv([$t21, $t24], "hbErrorBx", C, false)), "Visible", (await $.wv([$t21, $t24], "true", C, false)));
                await $.wset([$t21, $t24], "result", (await $.wv([$t21, $t24], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              }
              else { throw $t25; }
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmProfOptions", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "CheckUser", []))))) {
    await $.stmt($.call(C, "Close", []));
  }
  if ($.truthy($.not((await $.call(C, "CheckAllObjectsInfo", []))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrNone")));
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    await $.stmt((await $.call(C, "DisableControls", [])));
    await $.stmt((await $.call(C, "saveParams", [])));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt((await $.call(C, "EnableControls", [])));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmProfOptions", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "fmProfOptions", Self);
  if ($.truthy($.not((await $.call(C, "CheckUser", []))))) {
    await $.stmt((await $.call(C, "DisableControls", [])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "readParams", [])));
  await $.stmt((await $.call(C, "isLockedExecute", [Self])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmProfOptions", "LockUnlockUserExecute", async function LockUnlockUserExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crHourGlass")));
    {
      const $t26 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
      await $.stmt((await $.wcall([$t26], "CallProcedure", ["lockunlockuser", [(await $.wv([$t26], "usern", C, false)), (await $.mv((await $.wv([$t26], "chkLockStatus", C, false)), "Checked"))]], C)));
    }
  } finally {
    await $.stmt((await $.call(C, "isLockedExecute", [L0["sender"]])));
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.mset((await $.v(C, "BitBtn1")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmProfOptions", "isLockedExecute", async function isLockedExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    await $.mset((await $.wv([$t27], "chkLockStatus", C, false)), "Checked", (await $.wcall([$t27], "CallBooleanFunction", ["islocked", [(await $.wv([$t27], "usern", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmProfOptions", "edMinPassLengthChange", async function edMinPassLengthChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "BitBtn1")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmProfOptions", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "hbErrorBx")), "Visible")))) {
    await L0["action"].set((await $.v(C, "caNone")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

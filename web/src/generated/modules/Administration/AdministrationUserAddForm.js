// Generated from AdministrationUserAddForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationUserAddForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "Buttons", "ImgList", "Mask", "HintBox", "SearchCombo", "DBCtrls", "AdministrationDataModule", "AdmBarForm", "AdministrationMainForm"]);
  const C = [U];
  $.defRecord("tuserinfo", {"username": () => '', "passw": () => '', "fullname": () => '', "description": () => '', "phone": () => '', "acclass": () => '', "acfilial": () => '', "aclang": () => '', "acadm": () => false});
  U.defClass("ECheckOperation", "Exception", {}, {});
  U.defClass("TfmUserSetup", "TForm", {"pcadduser": {"name": "pcAddUser", "type": "TPageControl"}, "tbsusinf": {"name": "tbsUsInf", "type": "TTabSheet"}, "tbsuspass": {"name": "tbsUsPass", "type": "TTabSheet"}, "tbsfinish": {"name": "tbsFinish", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edusname": {"name": "edUsName", "type": "TEdit"}, "edusfullname": {"name": "edUsFullName", "type": "TEdit"}, "eddescr": {"name": "edDescr", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "btnext": {"name": "btNext", "type": "TBitBtn"}, "btback": {"name": "btBack", "type": "TBitBtn"}, "edphone": {"name": "edPhone", "type": "TMaskEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "edpass1": {"name": "edPass1", "type": "TEdit"}, "edpass2": {"name": "edPass2", "type": "TEdit"}, "lbpass": {"name": "lbPass", "type": "TLabel"}, "lbconfirm": {"name": "lbConfirm", "type": "TLabel"}, "cbhidepass": {"name": "cbHidePass", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "hberrorbx": {"name": "hbErrorBx", "type": "THintBox"}, "tbclose": {"name": "tbClose", "type": "TTabSheet"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "lbclose": {"name": "lbClose", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "tbsdropuser": {"name": "tbsDropUser", "type": "TTabSheet"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcascade": {"name": "cbCascade", "type": "TCheckBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "tbsclassadd": {"name": "tbsClassadd", "type": "TTabSheet"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "edclassname": {"name": "edClassName", "type": "TEdit"}, "edclassdescr": {"name": "edClassDescr", "type": "TEdit"}, "tbsclassdrop": {"name": "tbsClassdrop", "type": "TTabSheet"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "tbsuserclass": {"name": "tbsUserclass", "type": "TTabSheet"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "cbclass": {"name": "cbClass", "type": "TSearchCombo"}, "label11": {"name": "Label11", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "label12": {"name": "Label12", "type": "TLabel"}, "eddrop": {"name": "edDrop", "type": "TSearchCombo"}, "eddropclass": {"name": "edDropclass", "type": "TSearchCombo"}, "tbsgroupcreate": {"name": "tbsGroupCreate", "type": "TTabSheet"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "edgroupcr": {"name": "edGroupCr", "type": "TEdit"}, "edgroupdesc": {"name": "edGroupDesc", "type": "TEdit"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "tbsgroupdrop": {"name": "tbsGroupDrop", "type": "TTabSheet"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "scbgroupname": {"name": "scbGroupName", "type": "TSearchCombo"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "cbfilial": {"name": "cbFilial", "type": "TSearchCombo"}, "label17": {"name": "Label17", "type": "TLabel"}, "cbadmrights": {"name": "cbAdmRights", "type": "TCheckBox"}, "dbgrouptype": {"name": "dbGroupType", "type": "TDBLookupComboBox"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "cblang": {"name": "cbLang", "type": "TSearchCombo"}, "lang3": {"name": "Lang3", "type": "TSearchCombo"}}, {});
  U.init(async () => {
    U.var_("fmUserSetup", null, "TfmUserSetup");
  });
  U.func("SendMsg", async function SendMsg(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"comp": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["comp"]);
  if ($.truthy((await $.call(C, "Assigned", [L0["comp"]])))) {
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv(L0["comp"], "Handle")), (await $.v(C, "WM_USER")), 0, 0])));
  }
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  return L0.result;
}, {"params": ["Comp"], "kind": "procedure", "ptypes": ["TWinControl"]});
  U.method("TfmUserSetup", "btNextClick", async function btNextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["verifypassword"] = $.fn(async function VerifyPassword(p0) {
  const L1 = {"passwd": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["passwd"]);
  L1["result"] = false;
  {
    const $t1 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    if ($.truthy((await $.wcall([$t1], "CallBooleanFunction", ["verify_password", [(await $.wcall([$t1], "trim", [$.add($.add("KLs", (await $.wv([$t1], "passwd", { get: async () => L1["passwd"], set: async (v) => { L1["passwd"] = v; }, local: true }, false))), "#1$")], C))]], C)))) {
      await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  L0["checkforchange"] = $.fn(async function CheckForChange() {
  const L1 = {result: undefined};
  {
    const $t2 = (await $.v(C, "pcAddUser"));
    { const $t3 = (await $.wv([$t2], "ActivePageIndex", C, false));
      if ($.eq($t3, 0)) {
        if ($.truthy($.eq((await $.mv((await $.wv([$t2], "edUsName", C, false)), "Text")), (await $.wv([$t2], "EmptyStr", C, false))))) {
          throw $.raise((await $.mcall((await $.wv([$t2], "ECheckOperation", C, false)), "Create", [" İstifadəçi adını daxil edin"])));
        }
      }
      else if ($.eq($t3, 1)) {
        if ($.truthy(($.eq((await $.mv((await $.wv([$t2], "edPass1", C, false)), "Text")), (await $.wv([$t2], "EmptyStr", C, false)))))) {
          throw $.raise((await $.mcall((await $.wv([$t2], "ECheckOperation", C, false)), "Create", [" Şifrəni daxil edin"])));
        }
        if ($.truthy((await $.and_(((await $.mv((await $.wv([$t2], "cbHidePass", C, false)), "Checked"))), async () => ($.ne((await $.mv((await $.wv([$t2], "edPass1", C, false)), "Text")), (await $.mv((await $.wv([$t2], "edPass2", C, false)), "Text")))))))) {
          throw $.raise((await $.mcall((await $.wv([$t2], "ECheckOperation", C, false)), "Create", [" Şifrə düzgün deyil"])));
        }
        if ($.truthy($.not((await $.wcall([$t2], "VerifyPassword", [(await $.mv((await $.wv([$t2], "edPass1", C, false)), "text"))], { get: async () => L0["verifypassword"], set: async (v) => { L0["verifypassword"] = v; }, local: true }))))) {
          throw $.raise((await $.mcall((await $.wv([$t2], "ECheckOperation", C, false)), "Create", [" Şifrə mürəkkəb olmalıdır"])));
        }
      }
    }
  }
  return L1.result;
});
  L0["newchng"] = $.fn(async function NewChng(p0) {
  const L1 = {"pc": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["pc"]);
  await $.mset((await $.v(C, "btBack")), "Enabled", $.not(($.eq(L1["pc"], 0))));
  {
    const $t4 = (await $.v(C, "pcAddUser"));
    if ($.truthy($.eq((await $.wv([$t4], "ActivePage", C, false)), (await $.wv([$t4], "tbsFinish", C, false))))) {
      await $.mset((await $.wv([$t4], "btNext", C, false)), "Caption", "Qəbul");
    } else {
      await $.mset((await $.wv([$t4], "btNext", C, false)), "Caption", "Növbəti >");
    }
  }
  return L1.result;
});
  {
    const $t5 = (await $.v(C, "pcAddUser"));
    await $.mset((await $.wv([$t5], "hbErrorBx", C, false)), "Visible", (await $.wv([$t5], "False", C, false)));
    try {
      if ($.truthy($.eq(((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t5], "btNext", C, false))))) {
        if ($.truthy((await $.wcall([$t5], "CheckForActions", [(await $.wv([$t5], "ActivePage", C, false))], C)))) {
          return L0.result;
        }
      }
      await $.wset([$t5], "i", $.add((await $.wv([$t5], "ActivePageIndex", C, false)), (await $.mv(((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Tag"))), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      if ($.truthy((await $.and_(($.ge((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 0)), async () => ($.le((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), $.sub((await $.wv([$t5], "PageCount", C, false)), 1))))))) {
        if ($.truthy($.eq((await $.mv(((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Tag")), 1))) {
          await $.stmt($.wcall([$t5], "CheckForChange", [], { get: async () => L0["checkforchange"], set: async (v) => { L0["checkforchange"] = v; }, local: true }));
        }
      }
      await $.wset([$t5], "ActivePageIndex", (await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), C);
      await $.stmt((await $.wcall([$t5], "NewChng", [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], { get: async () => L0["newchng"], set: async (v) => { L0["newchng"] = v; }, local: true })));
    } catch ($t6) {
      $.rethrowControl($t6);
      if ($.excIs($t6, "ECheckOperation")) {
        L0["e"] = $.exc($t6);
        await $.stmt((await $.mcall((await $.wv([$t5], "hbErrorBx", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t5], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))])));
      }
      else { throw $t6; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUserSetup", "btCancelClick", async function btCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUserSetup", "cbHidePassClick", async function cbHidePassClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((L0["sender"]), "Checked")))) {
    await $.mset((await $.v(C, "edPass1")), "PasswordChar", "*");
    await $.mset((await $.v(C, "lbConfirm")), "Enabled", true);
    await $.mset((await $.v(C, "edPass2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "edPass1")), "PasswordChar", "\u0000");
    await $.mset((await $.v(C, "lbConfirm")), "Enabled", false);
    await $.mset((await $.v(C, "edPass2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUserSetup", "AddUser", async function AddUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"inf": $.copyArg(p0), result: undefined, "brform": null, "pswd": ''};
  await $.fixArgs(L0, ["inf"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  try {
    {
      const $t7 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
      const $t8 = (await $.wv([$t7], "Inf", { get: async () => L0["inf"], set: async (v) => { L0["inf"] = v; }, local: true }, false));
      await $.mset((await $.wv([$t7, $t8], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Position", (await $.wv([$t7, $t8], "poOwnerFormCenter", C, false)));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t7, $t8], "AdministrationData", C, false)), "pcACA")), "CallBooleanFunction", ["checkforuser", [(await $.wv([$t7, $t8], "UserName", C, false)), (await $.wv([$t7, $t8], "True", C, false))]])));
      await $.stmt((await $.mcall((await $.wv([$t7, $t8], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["User creating", "User creating", "Creating user...", 10, 110])));
      {
        const $t9 = (await $.mv((await $.wv([$t7, $t8], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "BarCaption"));
        await $.stmt((await $.wcall([$t7, $t8, $t9], "SendMsg", [(await $.wv([$t7, $t8, $t9], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["create_user", [(await $.wv([$t7, $t8, $t9], "UserName", C, false)), (await $.wv([$t7, $t8, $t9], "passw", C, false))]], C)));
        await $.stmt((await $.wcall([$t7, $t8, $t9], "SendMsg", [(await $.wv([$t7, $t8, $t9], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["insertuserinf", [(await $.wv([$t7, $t8, $t9], "username", C, false)), (await $.wv([$t7, $t8, $t9], "description", C, false)), (await $.wv([$t7, $t8, $t9], "fullname", C, false)), (await $.wv([$t7, $t8, $t9], "phone", C, false)), (await $.wv([$t7, $t8, $t9], "AcClass", C, false)), (await $.wv([$t7, $t8, $t9], "AcFilial", C, false)), (await $.wv([$t7, $t8, $t9], "AcLang", C, false))]], C)));
        await $.wset([$t7, $t8, $t9], "Caption", "Give basic grants...", C);
        await $.stmt((await $.wcall([$t7, $t8, $t9], "SendMsg", [(await $.wv([$t7, $t8, $t9], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t7, $t8, $t9], "CallBooleanFunction", ["grrole", ["STANDART", (await $.wv([$t7, $t8, $t9], "UserName", C, false))]], C)));
        if ($.truthy((await $.wv([$t7, $t8, $t9], "AcAdm", C, false)))) {
          await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["grantprivtorole", [(await $.wv([$t7, $t8, $t9], "UserName", C, false)), "ROLE", "ALL PRIVILEGES", ""]], C)));
          await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["grantprivtorole", [(await $.wv([$t7, $t8, $t9], "UserName", C, false)), "ROLE", "DBA", ""]], C)));
        }
        await $.stmt((await $.wcall([$t7, $t8, $t9], "SendMsg", [(await $.wv([$t7, $t8, $t9], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
        if ($.truthy($.ne((await $.wv([$t7, $t8, $t9], "AcClass", C, false)), ""))) {
          await $.wset([$t7, $t8, $t9], "Caption", "Activating class...", C);
          await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["grantclass", [(await $.wv([$t7, $t8, $t9], "USERNAME", C, false)), (await $.wv([$t7, $t8, $t9], "AcClass", C, false))]], C)));
        }
        await $.stmt((await $.wcall([$t7, $t8, $t9], "SendMsg", [(await $.wv([$t7, $t8, $t9], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      }
    }
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["brform"]])))) {
      await $.mcall(L0["brform"], "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Inf"], "kind": "procedure", "ptypes": ["TUserInfo"]});
  U.method("TfmUserSetup", "Dropuser", async function Dropuser(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"username": $.copyArg(p0), "cascade": $.copyArg(p1), result: undefined, "brform": null};
  await $.fixArgs(L0, ["username", "cascade"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t10 = (await $.v(C, "AdministrationData"));
    const $t11 = (await $.mv((await $.wv([$t10], "AdministrationData", C, false)), "pcADM"));
    try {
      await $.mset((await $.wv([$t10, $t11], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Position", (await $.wv([$t10, $t11], "poOwnerFormCenter", C, false)));
      if ($.truthy($.eq((await $.wv([$t10, $t11], "UserName", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10, $t11], "Session", C, false)), "LogonUsername"))))) {
        throw $.raise((await $.mcall((await $.wv([$t10, $t11], "ECheckOperation", C, false)), "Create", ["Özünü ləğv etmək mümkün deyil"])));
      }
      if ($.truthy($.not(((await $.mcall((await $.wv([$t10, $t11], "pcACA", C, false)), "CallBooleanFunction", ["checkforuser", [(await $.wv([$t10, $t11], "UserName", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false))]])))))) {
        throw $.raise((await $.mcall((await $.wv([$t10, $t11], "ECheckOperation", C, false)), "Create", ["İstifadəçi tapılmadı"])));
      }
      if ($.truthy((await $.and_(((await $.mcall((await $.wv([$t10, $t11], "pcACA", C, false)), "CallBooleanFunction", ["isadm", [(await $.wv([$t10, $t11], "UserName", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false))]]))), async () => $.not(($.eq((await $.mv((await $.wv([$t10, $t11], "Session", C, false)), "LogonUsername")), (await $.wv([$t10, $t11], "sm_own", C, false))))))))) {
        throw $.raise((await $.mcall((await $.wv([$t10, $t11], "ECheckOperation", C, false)), "Create", ["Administratoru ləğv etmək olmaz"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["User dropping", "User dropping", "Dropping user...", 10, 20])));
      await $.stmt((await $.wcall([$t10, $t11], "SendMsg", [(await $.wv([$t10, $t11], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["create_user", [(await $.wv([$t10, $t11], "UserName", { get: async () => L0["username"], set: async (v) => { L0["username"] = v; }, local: true }, false)), "", (await $.wv([$t10, $t11], "False", C, false)), (await $.wv([$t10, $t11], "Cascade", { get: async () => L0["cascade"], set: async (v) => { L0["cascade"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t10, $t11], "SendMsg", [(await $.wv([$t10, $t11], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wcall([$t10, $t11], "Assigned", [(await $.wv([$t10, $t11], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t10, $t11], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["UserName", "Cascade"], "kind": "procedure", "ptypes": ["String", "Boolean"]});
  U.method("TfmUserSetup", "ClassCreate", async function ClassCreate(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"classnam": $.copyArg(p0), "description": $.copyArg(p1), result: undefined, "brform": null};
  await $.fixArgs(L0, ["classnam", "description"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t12 = (await $.v(C, "AdministrationData"));
    const $t13 = (await $.mv((await $.wv([$t12], "AdministrationData", C, false)), "pcADM"));
    try {
      await $.mset((await $.wv([$t12, $t13], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Position", (await $.wv([$t12, $t13], "poOwnerFormCenter", C, false)));
      if ($.truthy($.eq((await $.wv([$t12, $t13], "ClassNam", { get: async () => L0["classnam"], set: async (v) => { L0["classnam"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Emptystr", C, false))))) {
        throw $.raise((await $.mcall((await $.wv([$t12, $t13], "ECheckOperation", C, false)), "Create", ["Sinfi daxil edin"])));
      }
      if ($.truthy((await $.mcall((await $.wv([$t12, $t13], "pcACA", C, false)), "CallBooleanFunction", ["checkclass", [(await $.wv([$t12, $t13], "ClassNam", { get: async () => L0["classnam"], set: async (v) => { L0["classnam"] = v; }, local: true }, false))]])))) {
        throw $.raise((await $.mcall((await $.wv([$t12, $t13], "ECheckOperation", C, false)), "Create", ["Sinif artıq mövcuddur"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t12, $t13], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Class creating", "Class creating", "Creating class...", 10, 20])));
      await $.stmt((await $.wcall([$t12, $t13], "SendMsg", [(await $.wv([$t12, $t13], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t12, $t13], "CallProcedure", ["createclass", [(await $.wv([$t12, $t13], "ClassNam", { get: async () => L0["classnam"], set: async (v) => { L0["classnam"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Description", { get: async () => L0["description"], set: async (v) => { L0["description"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t12, $t13], "SendMsg", [(await $.wv([$t12, $t13], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wcall([$t12, $t13], "Assigned", [(await $.wv([$t12, $t13], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t12, $t13], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["ClassNam", "Description"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TfmUserSetup", "ClassDrop", async function ClassDrop(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"classnam": $.copyArg(p0), result: undefined, "brform": null};
  await $.fixArgs(L0, ["classnam"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t14 = (await $.v(C, "AdministrationData"));
    const $t15 = (await $.mv((await $.wv([$t14], "AdministrationData", C, false)), "pcADM"));
    try {
      await $.mset((await $.wv([$t14, $t15], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Position", (await $.wv([$t14, $t15], "poOwnerFormCenter", C, false)));
      if ($.truthy($.not(((await $.mcall((await $.wv([$t14, $t15], "pcACA", C, false)), "CallBooleanFunction", ["checkclass", [(await $.wv([$t14, $t15], "ClassNam", { get: async () => L0["classnam"], set: async (v) => { L0["classnam"] = v; }, local: true }, false))]])))))) {
        throw $.raise((await $.mcall((await $.wv([$t14, $t15], "ECheckOperation", C, false)), "Create", ["Sinif mövcud deyil"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t14, $t15], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Class dropping", "Class dropping", "Dropping class...", 10, 30])));
      await $.stmt((await $.wcall([$t14, $t15], "SendMsg", [(await $.wv([$t14, $t15], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t14, $t15], "CallProcedure", ["dropclass", [(await $.wv([$t14, $t15], "ClassNam", { get: async () => L0["classnam"], set: async (v) => { L0["classnam"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t14, $t15], "SendMsg", [(await $.wv([$t14, $t15], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wcall([$t14, $t15], "Assigned", [(await $.wv([$t14, $t15], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t14, $t15], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["ClassNam"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfmUserSetup", "GroupCreate", async function GroupCreate(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"groupname": $.copyArg(p0), "descrp": $.copyArg(p1), "grtype": $.copyArg(p2), result: undefined, "brform": null};
  await $.fixArgs(L0, ["groupname", "descrp", "grtype"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t16 = (await $.v(C, "AdministrationData"));
    const $t17 = (await $.mv((await $.wv([$t16], "AdministrationData", C, false)), "pcADM"));
    try {
      await $.mset((await $.wv([$t16, $t17], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Position", (await $.wv([$t16, $t17], "poOwnerFormCenter", C, false)));
      if ($.truthy($.eq((await $.wv([$t16, $t17], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "Emptystr", C, false))))) {
        throw $.raise((await $.mcall((await $.wv([$t16, $t17], "ECheckOperation", C, false)), "Create", ["Qrupu daxil edin"])));
      }
      if ($.truthy((await $.mcall((await $.wv([$t16, $t17], "pcACA", C, false)), "CallBooleanFunction", ["checkgroup", [(await $.wv([$t16, $t17], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false))]])))) {
        throw $.raise((await $.mcall((await $.wv([$t16, $t17], "ECheckOperation", C, false)), "Create", ["Qrup artıq mövcuddur"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t16, $t17], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Group creating", "Group creating", "Creating group...", 10, 30])));
      await $.stmt((await $.wcall([$t16, $t17], "SendMsg", [(await $.wv([$t16, $t17], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t16, $t17], "CallProcedure", ["creategroup", [(await $.wv([$t16, $t17], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "descrp", { get: async () => L0["descrp"], set: async (v) => { L0["descrp"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "GrType", { get: async () => L0["grtype"], set: async (v) => { L0["grtype"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t16, $t17], "SendMsg", [(await $.wv([$t16, $t17], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wcall([$t16, $t17], "Assigned", [(await $.wv([$t16, $t17], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t16, $t17], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["GroupName", "descrp", "GrType"], "kind": "procedure", "ptypes": ["String", "String", "integer"]});
  U.method("TfmUserSetup", "GroupDrop", async function GroupDrop(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"groupname": $.copyArg(p0), result: undefined, "brform": null};
  await $.fixArgs(L0, ["groupname"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t18 = (await $.v(C, "AdministrationData"));
    const $t19 = (await $.mv((await $.wv([$t18], "AdministrationData", C, false)), "pcADM"));
    try {
      await $.mset((await $.wv([$t18, $t19], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Position", (await $.wv([$t18, $t19], "poOwnerFormCenter", C, false)));
      if ($.truthy($.not(((await $.mcall((await $.wv([$t18, $t19], "pcACA", C, false)), "CallBooleanFunction", ["checkgroup", [(await $.wv([$t18, $t19], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false))]])))))) {
        throw $.raise((await $.mcall((await $.wv([$t18, $t19], "ECheckOperation", C, false)), "Create", ["Qrup mövcud deyil"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t18, $t19], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Group dropping", "Group dropping", "Dropping group...", 10, 20])));
      await $.stmt((await $.wcall([$t18, $t19], "SendMsg", [(await $.wv([$t18, $t19], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "CallProcedure", ["dropgroup", [(await $.wv([$t18, $t19], "GroupName", { get: async () => L0["groupname"], set: async (v) => { L0["groupname"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.wcall([$t18, $t19], "SendMsg", [(await $.wv([$t18, $t19], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wcall([$t18, $t19], "Assigned", [(await $.wv([$t18, $t19], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t18, $t19], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["GroupName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfmUserSetup", "Lang3Change", async function Lang3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbLang")), "ItemIndex", (await $.mv((await $.v(C, "Lang3")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUserSetup", "CheckForActions", async function CheckForActions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"tab": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["tab"]);
  L0["showclose"] = $.fn(async function ShowClose(p0) {
  const L1 = {"closestring": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["closestring"]);
  await $.mset((await $.v(C, "pcAddUser")), "ActivePage", (await $.v(C, "tbClose")));
  await $.mset((await $.v(C, "lbClose")), "Caption", L1["closestring"]);
  await $.mset((await $.v(C, "btNext")), "Enabled", false);
  await $.mset((await $.v(C, "btBack")), "Enabled", false);
  await $.mset((await $.v(C, "btCancel")), "Caption", "Bağla");
  return L1.result;
});
  L0["preparedropus"] = $.fn(async function PrepareDropUs() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "Dropuser", [(await $.mv((await $.v(C, "edDrop")), "Text")), (await $.mv((await $.v(C, "cbCascade")), "Checked"))])));
  await $.stmt((await $.callv(L0["showclose"], ["İstifadəçi ləğv olundu"])));
  return L1.result;
});
  L0["preparecreateus"] = $.fn(async function PrepareCreateUS() {
  const L1 = {result: undefined, "inf": $.rec("tuserinfo")};
  {
    const $t20 = L1["inf"];
    await $.wset([$t20], "UserName", (await $.mv((await $.wv([$t20], "edUsName", C, false)), "Text")), C);
    await $.wset([$t20], "Passw", $.add($.add("KLs", (await $.mv((await $.wv([$t20], "edPass1", C, false)), "Text"))), "#1$"), C);
    await $.wset([$t20], "Fullname", (await $.mv((await $.wv([$t20], "edUsFullName", C, false)), "Text")), C);
    await $.wset([$t20], "Description", (await $.mv((await $.wv([$t20], "edDescr", C, false)), "Text")), C);
    await $.wset([$t20], "Phone", (await $.mv((await $.wv([$t20], "edPhone", C, false)), "EditText")), C);
    if ($.truthy($.ne((await $.mv((await $.wv([$t20], "cbClass", C, false)), "ItemIndex")), 0))) {
      await $.wset([$t20], "AcClass", (await $.mv((await $.wv([$t20], "cbClass", C, false)), "Text")), C);
    }
    await $.wset([$t20], "AcAdm", (await $.mv((await $.wv([$t20], "cbAdmRights", C, false)), "Checked")), C);
    {
      const $t21 = (await $.wv([$t20], "AdministrationData", C, false));
      await $.wset([$t20, $t21], "AcFilial", (await $.mv((await $.mcall((await $.wv([$t20, $t21], "FilialData", C, false)), "FieldByName", ["ID"])), "AsString")), C);
      await $.wset([$t20, $t21], "AcLang", (await $.mv((await $.mcall((await $.wv([$t20, $t21], "SlLang", C, false)), "FieldByName", ["NAME"])), "AsString")), C);
      await $.stmt((await $.wcall([$t20, $t21], "AddUser", [(await $.wv([$t20, $t21], "Inf", { get: async () => L1["inf"], set: async (v) => { L1["inf"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t20, $t21], "ShowClose", ["İstifadəçi yaradıldı"], { get: async () => L0["showclose"], set: async (v) => { L0["showclose"] = v; }, local: true })));
    }
  }
  return L1.result;
});
  L0["prepareclasscreate"] = $.fn(async function PrepareClassCreate() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "ClassCreate", [(await $.call(C, "Trim", [(await $.mv((await $.v(C, "edClassName")), "Text"))])), (await $.mv((await $.v(C, "edClassDescr")), "Text"))])));
  await $.stmt((await $.callv(L0["showclose"], ["Sinif yaradıldı "])));
  return L1.result;
});
  L0["prepareclassdrop"] = $.fn(async function PrepareClassDrop() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "ClassDrop", [(await $.mv((await $.v(C, "edDropclass")), "Text"))])));
  await $.stmt((await $.callv(L0["showclose"], ["Sinif ləğv olundu"])));
  return L1.result;
});
  L0["preparegroupcreate"] = $.fn(async function PrepareGroupCreate() {
  const L1 = {result: undefined, "tempint": 0};
  {
    const $t22 = (await $.v(C, "dbGroupType"));
    const $t23 = (await $.mv((await $.wv([$t22], "ListSource", C, false)), "DataSet"));
    if ($.truthy((await $.wv([$t22, $t23], "Active", C, false)))) {
      await $.wset([$t22, $t23], "TempInt", (await $.wv([$t22, $t23], "KeyValue", C, false)), { get: async () => L1["tempint"], set: async (v) => { L1["tempint"] = v; }, local: true });
    } else {
      await $.wset([$t22, $t23], "TempInt", 0, { get: async () => L1["tempint"], set: async (v) => { L1["tempint"] = v; }, local: true });
    }
  }
  await $.stmt((await $.call(C, "GroupCreate", [(await $.call(C, "Trim", [(await $.mv((await $.v(C, "edGroupCr")), "Text"))])), (await $.mv((await $.v(C, "edGroupDesc")), "Text")), L1["tempint"]])));
  await $.stmt((await $.callv(L0["showclose"], ["Qrup yaradıldı"])));
  return L1.result;
});
  L0["preparegroupdrop"] = $.fn(async function PrepareGroupDrop() {
  const L1 = {result: undefined};
  await $.stmt((await $.call(C, "GroupDrop", [(await $.mv((await $.v(C, "scbGroupName")), "Text"))])));
  await $.stmt((await $.callv(L0["showclose"], ["Qrup ləğv olundu"])));
  return L1.result;
});
  L0["result"] = false;
  if ($.truthy(($.eq(L0["tab"], (await $.v(C, "tbsFinish")))))) {
    await $.stmt($.callv(L0["preparecreateus"], []));
    L0["result"] = true;
  }
  if ($.truthy(($.eq(L0["tab"], (await $.v(C, "tbsDropUser")))))) {
    await $.stmt($.callv(L0["preparedropus"], []));
    L0["result"] = true;
  }
  if ($.truthy(($.eq(L0["tab"], (await $.v(C, "tbsClassadd")))))) {
    await $.stmt($.callv(L0["prepareclasscreate"], []));
    L0["result"] = true;
  }
  if ($.truthy(($.eq(L0["tab"], (await $.v(C, "tbsClassdrop")))))) {
    await $.stmt($.callv(L0["prepareclassdrop"], []));
    L0["result"] = true;
  }
  if ($.truthy(($.eq(L0["tab"], (await $.v(C, "tbsGroupCreate")))))) {
    await $.stmt($.callv(L0["preparegroupcreate"], []));
    L0["result"] = true;
  }
  if ($.truthy(($.eq(L0["tab"], (await $.v(C, "tbsGroupDrop")))))) {
    await $.stmt($.callv(L0["preparegroupdrop"], []));
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["Tab"], "kind": "function", "ptypes": ["TTabSheet"]});
  U.method("TfmUserSetup", "edClassNameKeyPress", async function edClassNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","z"), ...$.range("A","Z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmUserSetup", "edUsNameKeyPress", async function edUsNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "layout": $.sarr()};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetKeyboardLayoutName", [L0["layout"]])));
  if ($.truthy(($.ne(L0["layout"], "00000409")))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 0)), async () => ($.in_((await L0["key"].get()), [...$.range("0","9")])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.gt((await $.mv((L0["sender"]), "SelLength")), 0)), async () => ($.in_((await L0["key"].get()), [...$.range("0","9")])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmUserSetup", "cbClassChange", async function cbClassChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbAdmRights")), "Enabled", $.eq((await $.mv((await $.v(C, "cbClass")), "ItemIndex")), 0));
  if ($.truthy((await $.mv((await $.v(C, "cbAdmRights")), "Checked")))) {
    await $.mset((await $.v(C, "cbAdmRights")), "Checked", $.eq((await $.mv((await $.v(C, "cbClass")), "ItemIndex")), 0));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

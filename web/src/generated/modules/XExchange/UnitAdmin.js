// Generated from UnitAdmin.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitAdmin", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "DBCtrls", "NLSDialogs", "UnitDateExch", "Unit_ExchangeMGR", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAdmin", "TForm", {"grboxadm": {"name": "GrBoxADM", "type": "TGroupBox"}, "grboxuserlist": {"name": "GrBoxUserList", "type": "TGroupBox"}, "dblc_userlist": {"name": "DBLC_UserList", "type": "TDBLookupComboBox"}, "btncreateuser": {"name": "BtnCreateUser", "type": "TBitBtn"}, "chboxadmin": {"name": "ChBoxAdmin", "type": "TCheckBox"}, "btndropuser": {"name": "BtnDropUser", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "editusername": {"name": "EditUserName", "type": "TEdit"}, "editpassword": {"name": "EditPassWord", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "ch_box": {"name": "ch_box", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblc_user": {"name": "DBLC_User", "type": "TDBLookupComboBox"}, "chk_box": {"name": "chk_box", "type": "TEdit"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "checkboxadmin": {"name": "CheckBoxAdmin", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FormAdmin", null, "TFormAdmin");
  });
  U.method("TFormAdmin", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "userid": '', "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])))) {
    if ($.truthy($.eq((await $.call(C, "MessageDLG", [(await $.call(C, "Pchar", ["İstifadəçi yaradılsın? "])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t1 = (await $.v(C, "DataModExch"));
        if ($.truthy((await $.and_(($.ne((await $.wcall([$t1], "Trim", [(await $.mv((await $.wv([$t1], "EditPassWord", C, false)), "Text"))], C)), "")), async () => ($.ne((await $.wcall([$t1], "Trim", [(await $.mv((await $.wv([$t1], "EditUserName", C, false)), "Text"))], C)), "")))))) {
          try {
            await $.mset((await $.wv([$t1], "Screen", C, false)), "Cursor", (await $.wv([$t1], "crSQLWait", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t1], "OPAdmin", C, false)), "CallProcedure", ["create_new_user", [(await $.mv((await $.wv([$t1], "EditUserName", C, false)), "Text")), (await $.mv((await $.wv([$t1], "EditPassWord", C, false)), "Text"))]])));
            await $.mcall((await $.mv((await $.wv([$t1], "DataModExch", C, false)), "ODSUsers")), "Close", []);
            await $.mcall((await $.mv((await $.wv([$t1], "DataModExch", C, false)), "ODSUsers")), "Open", []);
            await $.stmt((await $.wcall([$t1], "ShowMessage", ["İstifadəçi yaradıldı!!!"], C)));
          } finally {
            await $.mset((await $.wv([$t1], "Screen", C, false)), "Cursor", (await $.wv([$t1], "crDefault", C, false)));
          }
        }
      }
    }
    L0["userid"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallIntegerFunction", ["ReturnUserId", [(await $.call(C, "Uppercase", [(await $.mv((await $.v(C, "EditUserName")), "Text"))]))]]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallProcedure", ["Ins_UserName", [L0["userid"], (await $.call(C, "Uppercase", [(await $.mv((await $.v(C, "EditUserName")), "Text"))])), (await $.mv((await $.v(C, "chk_box")), "Text"))]])));
    await $.mset((await $.v(C, "EditUserName")), "Text", "");
    await $.mset((await $.v(C, "EditPassWord")), "Text", "");
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
    await $.stmt((await $.mcall((await $.v(C, "NLSDialogs")), "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])))) {
    if ($.truthy($.eq((await $.call(C, "MessageDLG", [(await $.call(C, "Pchar", ["İstifadəçini ləğv edim? "])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t2 = (await $.v(C, "DataModExch"));
        if ($.truthy($.ne((await $.mv((await $.wv([$t2], "EditUserName", C, false)), "Text")), ""))) {
          try {
            await $.mset((await $.wv([$t2], "Screen", C, false)), "Cursor", (await $.wv([$t2], "crSQLWait", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2], "OPAdmin", C, false)), "CallProcedure", ["dropuser", [(await $.mv((await $.wv([$t2], "EditUserName", C, false)), "Text"))]])));
            await $.stmt((await $.wcall([$t2], "ShowMessage", ["İstifadəçi ləğv edildi!!!"], C)));
          } finally {
            await $.mset((await $.wv([$t2], "Screen", C, false)), "Cursor", (await $.wv([$t2], "crDefault", C, false)));
            await $.mset((await $.wv([$t2], "EditUserName", C, false)), "Text", "");
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
      await $.stmt((await $.mcall((await $.v(C, "NLSDialogs")), "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "userid": '', "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])))) {
    L0["userid"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallIntegerFunction", ["ReturnUserId", [(await $.mv((await $.v(C, "DBLC_User")), "Text"))]]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallProcedure", ["Ins_UserName", [L0["userid"], (await $.mv((await $.v(C, "DBLC_User")), "Text")), (await $.mv((await $.v(C, "chk_box")), "Text"))]])));
    await $.stmt((await $.call(C, "ShowMessage", ["İstifadəçiyə administrator hüququ verildi!"])));
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
    await $.stmt((await $.mcall((await $.v(C, "NLSDialogs")), "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "BtnCreateUserClick", async function BtnCreateUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallProcedure", ["Ins_UserName", [(await $.mv((await $.v(C, "DBLC_UserList")), "Keyvalue")), (await $.mv((await $.v(C, "DBLC_UserList")), "Text")), (await $.mv((await $.v(C, "ch_box")), "Text"))]])));
    if ($.truthy($.eq((await $.call(C, "MessageDLG", [(await $.call(C, "Pchar", ["İstifadəçi yaradılsın? "])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t3 = (await $.v(C, "DataModExch"));
        if ($.truthy($.ne((await $.mv((await $.wv([$t3], "DBLC_UserList", C, false)), "KeyValue")), (-(1))))) {
          try {
            await $.mset((await $.wv([$t3], "Screen", C, false)), "Cursor", (await $.wv([$t3], "crSQLWait", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t3], "OPAdmin", C, false)), "CallProcedure", ["create_user", [(await $.mv((await $.wv([$t3], "DBLC_UserList", C, false)), "Text")), (await $.mv((await $.wv([$t3], "ChBoxAdmin", C, false)), "Checked"))]])));
            await $.stmt((await $.wcall([$t3], "ShowMessage", ["İstifadəçi yaradıldı!!!"], C)));
          } finally {
            await $.mset((await $.wv([$t3], "Screen", C, false)), "Cursor", (await $.wv([$t3], "crDefault", C, false)));
          }
        }
      }
    }
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
    await $.stmt((await $.mcall((await $.v(C, "NLSDialogs")), "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "BtnDropUserClick", async function BtnDropUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), true))) {
    if ($.truthy($.eq((await $.call(C, "MessageDLG", [(await $.call(C, "Pchar", ["İstifadəçini ləğv edim? "])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t4 = (await $.v(C, "DataModExch"));
        if ($.truthy($.ne((await $.mv((await $.wv([$t4], "DBLC_UserList", C, false)), "KeyValue")), (-(1))))) {
          try {
            await $.mset((await $.wv([$t4], "Screen", C, false)), "Cursor", (await $.wv([$t4], "crSQLWait", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t4], "OPAdmin", C, false)), "CallProcedure", ["drop_synonym", [(await $.mv((await $.wv([$t4], "DBLC_UserList", C, false)), "Text"))]])));
            await $.stmt((await $.wcall([$t4], "ShowMessage", ["İstifadəçini ləğv edildi!!!"], C)));
          } finally {
            await $.mset((await $.wv([$t4], "Screen", C, false)), "Cursor", (await $.wv([$t4], "crDefault", C, false)));
          }
        }
      }
    }
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
    await $.stmt((await $.mcall((await $.v(C, "NLSDialogs")), "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "ChBoxAdminClick", async function ChBoxAdminClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBoxAdmin")), "checked")), true))) {
    await $.mset((await $.v(C, "ch_box")), "text", "1");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBoxAdmin")), "checked")), false))) {
    await $.mset((await $.v(C, "ch_box")), "text", "0");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "CheckBoxAdminClick", async function CheckBoxAdminClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBoxAdmin")), "checked")), true))) {
    await $.mset((await $.v(C, "chk_box")), "text", "1");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBoxAdmin")), "checked")), false))) {
    await $.mset((await $.v(C, "chk_box")), "text", "0");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_UserList")), "KeyValue", (-(1)));
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSUsers")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSUserList")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAdmin", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

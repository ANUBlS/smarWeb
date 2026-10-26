// Generated from ceskin.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ceskin", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "SearchEdit", "DBViewComboBox", "Unit2", "SWIFT_MAINImpl1", "SBTranslateProc", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TCeskform", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "stat": {"name": "stat", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}}, {});
  U.init(async () => {
    U.var_("Ceskform", null, "TCeskform");
  });
  U.method("TCeskform", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  do {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Eof")), false))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_IN")), "NEXT", []);
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "asstring")), "MT103")))))) {
        await $.mset((await $.v(C, "stat")), "Caption", "Yoxlanılmalıdır!");
      } else {
        await $.mset((await $.v(C, "stat")), "Caption", "test!");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "stat")), "Caption")), "Yoxlanılmalıdır!"))) {
        await $.mset((await $.v(C, "Button1")), "Enabled", true);
        await $.mset((await $.v(C, "Button2")), "Enabled", true);
      } else {
        await $.mset((await $.v(C, "Button1")), "Enabled", false);
        await $.mset((await $.v(C, "Button2")), "Enabled", false);
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["VALUTE"])), "AsString")), "AZN"))) {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", true);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", false);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", false);
      }
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "asstring")), "MT103")))))) {
        await $.mset((await $.v(C, "stat")), "Caption", "Yoxlanılmalıdır!");
      } else {
        await $.mset((await $.v(C, "stat")), "Caption", "test!");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "stat")), "Caption")), "Yoxlanılmalıdır!"))) {
        await $.mset((await $.v(C, "Button1")), "Enabled", true);
        await $.mset((await $.v(C, "Button2")), "Enabled", true);
      } else {
        await $.mset((await $.v(C, "Button1")), "Enabled", false);
        await $.mset((await $.v(C, "Button2")), "Enabled", false);
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["VALUTE"])), "AsString")), "AZN"))) {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", true);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", false);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", false);
      }
      return L0.result;
    }
    await $.tick();
  } while (!$.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["status"])), "AsInteger")), 2))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "asstring")), "MT103")))))) {
    await $.mset((await $.v(C, "stat")), "Caption", "Yoxlanılmalıdir!");
  } else {
    await $.mset((await $.v(C, "stat")), "Caption", "test!");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "stat")), "Caption")), "Yoxlanılmalıdır!"))) {
    await $.mset((await $.v(C, "Button1")), "Enabled", true);
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "Button1")), "Enabled", false);
    await $.mset((await $.v(C, "Button2")), "Enabled", false);
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["VALUTE"])), "AsString")), "AZN"))) {
    await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", true);
    await $.mset((await $.v(C, "GroupBox5")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", false);
    await $.mset((await $.v(C, "GroupBox5")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "asstring")), "MT103")))))) {
    await $.mset((await $.v(C, "stat")), "Caption", "Yoxlanılmalıdır!");
  } else {
    await $.mset((await $.v(C, "stat")), "Caption", "test!");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "stat")), "Caption")), "Yoxlanılmalıdır!"))) {
    await $.mset((await $.v(C, "Button1")), "Enabled", true);
    await $.mset((await $.v(C, "Button2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "Button1")), "Enabled", false);
    await $.mset((await $.v(C, "Button2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.mv((await $.v(C, "swdatamodule")), "sw_customers"))]))))) {
    await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "sw_customers")), "Active", []);
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "sw_customers")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Account")), "Fieldbyname", ["KLI_ID"])), "asinteger")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  do {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Bof")), false))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_IN")), "Prior", []);
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "asstring")), "MT103")))))) {
        await $.mset((await $.v(C, "stat")), "Caption", "Yoxlanılmalıdır!");
      } else {
        await $.mset((await $.v(C, "stat")), "Caption", "test!");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "stat")), "Caption")), "Yoxlanılmalıdır!"))) {
        await $.mset((await $.v(C, "Button1")), "Enabled", true);
        await $.mset((await $.v(C, "Button2")), "Enabled", true);
      } else {
        await $.mset((await $.v(C, "Button1")), "Enabled", false);
        await $.mset((await $.v(C, "Button2")), "Enabled", false);
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["VALUTE"])), "AsString")), "AZN"))) {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", true);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", false);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", false);
      }
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["Status"])), "asinteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["mt"])), "asstring")), "MT103")))))) {
        await $.mset((await $.v(C, "stat")), "Caption", "Yoxlanılmalıdır!");
      } else {
        await $.mset((await $.v(C, "stat")), "Caption", "test!");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "stat")), "Caption")), "Yoxlanılmalıdır!"))) {
        await $.mset((await $.v(C, "Button1")), "Enabled", true);
        await $.mset((await $.v(C, "Button2")), "Enabled", true);
      } else {
        await $.mset((await $.v(C, "Button1")), "Enabled", false);
        await $.mset((await $.v(C, "Button2")), "Enabled", false);
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["VALUTE"])), "AsString")), "AZN"))) {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", true);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "DBViewComboBox2")), "Visible", false);
        await $.mset((await $.v(C, "GroupBox5")), "Visible", false);
      }
      return L0.result;
    }
    await $.tick();
  } while (!$.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "FieldByName", ["status"])), "AsInteger")), 2)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Əməliyyat düz olaraq qebul edilsin?  ", [(await $.mv((await $.v(C, "dbedit7")), "text"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
    if ($.eq($t1, (await $.v(C, "mryes")))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DBViewComboBox2")), "Visible")), true)), async () => ($.ne((await $.mv((await $.v(C, "DBViewComboBox2")), "Text")), "")))))) {
        {
          const $t2 = (await $.mv((await $.v(C, "SWDataModule")), "sw_in"));
          await $.stmt($.wcall([$t2], "Edit", [], C));
          await $.mset((await $.wcall([$t2], "FieldByName", ["status"], C)), "AsInteger", 11);
          await $.mset((await $.wcall([$t2], "FieldByName", ["info"], C)), "asstring", "Yoxlanılıb!");
          await $.mset((await $.wcall([$t2], "FieldByName", ["hesabat"], C)), "asstring", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "SWDataModule", C, false)), "hteyinat")), "FieldByName", ["ID"])), "asString")));
          await $.stmt($.wcall([$t2], "post", [], C));
        }
        await $.mcall((await $.v(C, "Button4")), "Click", []);
      } else {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "DBViewComboBox2")), "Visible")), false)))) {
          {
            const $t3 = (await $.mv((await $.v(C, "SWDataModule")), "sw_in"));
            await $.mcall((await $.mv((await $.wv([$t3], "SWDataModule", C, false)), "sw_in")), "Edit", []);
            await $.mset((await $.mcall((await $.mv((await $.wv([$t3], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["status"])), "AsInteger", 11);
            await $.mset((await $.mcall((await $.mv((await $.wv([$t3], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["info"])), "asstring", "Yoxlanılıb!");
            await $.stmt($.wcall([$t3], "post", [], C));
          }
          await $.mcall((await $.v(C, "Button4")), "Click", []);
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBViewComboBox2")), "Text")), ""))) {
            await $.stmt((await $.call(C, "ShowMessage", ["Hesabat təyinatını seçin!"])));
          }
        }
      }
    }
    else if ($.eq($t1, (await $.v(C, "mrno")))) {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t4 = (await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Əməliyyat təyin edilməmişə atılsın?  ", [(await $.mv((await $.v(C, "dbedit7")), "text"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel"))], 0]));
    if ($.eq($t4, (await $.v(C, "mryes")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SW_IN_UNDEF"]])));
      {
        const $t5 = (await $.mv((await $.v(C, "SWDataModule")), "sw_in"));
        await $.mcall((await $.mv((await $.wv([$t5], "SWDataModule", C, false)), "sw_in")), "Edit", []);
        await $.mset((await $.mcall((await $.mv((await $.wv([$t5], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["status"])), "AsInteger", 12);
        await $.mset((await $.mcall((await $.mv((await $.wv([$t5], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["info"])), "asstring", "Təyin edilməmişə atılıb !");
        await $.stmt($.wcall([$t5], "post", [], C));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t5], "SWDataModule", C, false)), "sw_in_insert")), "CallProcedure", ["undifined_transactions", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["id"])), "AsInteger"))]])));
      }
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_IN")), "NEXT", []);
    }
    else if ($.eq($t4, (await $.v(C, "mrno")))) {
      {
        const $t6 = (await $.mv((await $.v(C, "SWDataModule")), "sw_in"));
        await $.mcall((await $.mv((await $.wv([$t6], "SWDataModule", C, false)), "sw_in")), "Edit", []);
        await $.mset((await $.mcall((await $.mv((await $.wv([$t6], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["status"])), "AsInteger", 8);
        await $.mset((await $.mcall((await $.mv((await $.wv([$t6], "SWDataModule", C, false)), "sw_in")), "FieldByName", ["info"])), "asstring", "Səhvdir!");
        await $.stmt($.wcall([$t6], "post", [], C));
      }
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SW_IN")), "NEXT", []);
    }
    else if ($.eq($t4, (await $.v(C, "mrcancel")))) {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCeskform", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

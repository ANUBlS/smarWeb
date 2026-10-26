// Generated from OpenAccount.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OpenAccount", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "CMDBSearchEdit", "Buttons", "CommonDecls", "OpenAccount_DatamodImpl"]);
  const C = [U];
  U.defClass("TOpenAccountForm", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("OpenAccountForm", null, "TOpenAccountForm");
    U.var_("x", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "OpenAccountForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TOpenAccountForm", "Edit4Change", async function Edit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "x", 0);
  {
    const $t1 = (await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_parts"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t1], "Edit4", C, false)), "Text")), ""))) {
      await $.stmt($.wcall([$t1], "close", [], C));
      { const $t2 = await $.iset((await $.wv([$t1], "SQL", C, false)), [2], ""); if ($t2 !== undefined) { await $.wset([$t1], "SQL", $t2, C); } }
      { const $t3 = await $.iset((await $.wv([$t1], "SQL", C, false)), [2], $.add($.add($.add((await $.idx((await $.wv([$t1], "SQL", C, false)), [2])), "and nvl(upper(( part||' '||partname)),0) like upper ('%"), (await $.mv((await $.wv([$t1], "Edit4", C, false)), "Text"))), "%')")); if ($t3 !== undefined) { await $.wset([$t1], "SQL", $t3, C); } }
      await $.stmt($.wcall([$t1], "open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "edit4", C, false)), "Text")), ""))) {
      await $.mcall((await $.mv((await $.wv([$t1], "OpenAccount_DataModule", C, false)), "ODS_bal_spr_parts")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t1], "OpenAccount_DataModule", C, false)), "ODS_bal_spr_groups")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t1], "OpenAccount_DataModule", C, false)), "ODS_bal_spr1")), "Close", []);
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccountForm", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccountForm", "Edit5Change", async function Edit5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit5")), "Text"))])), 2)), async () => ($.eq((await $.mv((await $.v(C, "edit4")), "text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "edit6")), "text")), "")))))) {
    await $.mset((await $.v(C, "edit4")), "text", (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit5")), "Text")), 1, 2])));
    await $.mset((await $.v(C, "edit6")), "text", (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit5")), "Text")), 1, 2])));
    await $.set(C, "x", 1);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit5")), "Text"))])), 2)), async () => ($.ne((await $.mv((await $.v(C, "edit4")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "edit6")), "text")), "")))))) {
    if ($.truthy((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit5")), "Text")), 1, 2])), (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit4")), "Text")), 1, 2])))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit5")), "Text")), 1, 2])), (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit6")), "Text")), 1, 2])))))))) {
      {
        const $t4 = (await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr1"));
        if ($.truthy($.ne((await $.mv((await $.wv([$t4], "Edit5", C, false)), "Text")), ""))) {
          await $.stmt($.wcall([$t4], "close", [], C));
          { const $t5 = await $.iset((await $.wv([$t4], "SQL", C, false)), [2], ""); if ($t5 !== undefined) { await $.wset([$t4], "SQL", $t5, C); } }
          if ($.truthy($.eq((await $.wcall([$t4], "get_param", [(await $.mv((await $.wv([$t4], "Edit5", C, false)), "Text"))], C)), 0))) {
            { const $t6 = await $.iset((await $.wv([$t4], "SQL", C, false)), [2], $.add($.add("and nvl(upper((balname)),0) like upper ('%", (await $.mv((await $.wv([$t4], "Edit5", C, false)), "Text"))), "%')")); if ($t6 !== undefined) { await $.wset([$t4], "SQL", $t6, C); } }
          } else {
            { const $t7 = await $.iset((await $.wv([$t4], "SQL", C, false)), [2], $.add("and bal_cn=", (await $.mv((await $.wv([$t4], "Edit5", C, false)), "Text")))); if ($t7 !== undefined) { await $.wset([$t4], "SQL", $t7, C); } }
          }
          await $.stmt($.wcall([$t4], "open", [], C));
        }
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr1")), "Close", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit5")), "Text")), ""))) {
    {
      const $t8 = (await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups"));
      await $.stmt($.wcall([$t8], "close", [], C));
      { const $t9 = await $.iset((await $.wv([$t8], "SQL", C, false)), [2], ""); if ($t9 !== undefined) { await $.wset([$t8], "SQL", $t9, C); } }
      if ($.truthy($.eq((await $.wcall([$t8], "get_param", [(await $.mv((await $.wv([$t8], "Edit6", C, false)), "Text"))], C)), 0))) {
        { const $t10 = await $.iset((await $.wv([$t8], "SQL", C, false)), [2], $.add($.add("and nvl(upper((grpname)),0) like upper ('%", (await $.mv((await $.wv([$t8], "Edit6", C, false)), "Text"))), "%')")); if ($t10 !== undefined) { await $.wset([$t8], "SQL", $t10, C); } }
      } else {
        { const $t11 = await $.iset((await $.wv([$t8], "SQL", C, false)), [2], $.add("and grp=", (await $.mv((await $.wv([$t8], "Edit6", C, false)), "Text")))); if ($t11 !== undefined) { await $.wset([$t8], "SQL", $t11, C); } }
      }
      await $.stmt($.wcall([$t8], "open", [], C));
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "x")), 1)), async () => ($.eq((await $.mv((await $.v(C, "edit5")), "Text")), "")))))) {
    await $.mset((await $.v(C, "edit4")), "Text", "");
    await $.mset((await $.v(C, "edit6")), "Text", "");
    await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_parts")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccountForm", "Edit6Change", async function Edit6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "get_param", [(await $.mv((await $.v(C, "Edit6")), "Text"))])), 1)), async () => ($.eq((await $.mv((await $.v(C, "edit6")), "Text")), "")))))) {
    await $.mset((await $.v(C, "edit6")), "MaxLength", 3);
    if ($.truthy((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit6")), "Text"))])), 2)), async () => ($.eq((await $.mv((await $.v(C, "edit4")), "text")), "")))))) {
      await $.mset((await $.v(C, "edit4")), "text", (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit6")), "Text")), 1, 2])));
      await $.set(C, "x", 1);
    }
    if ($.truthy((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit6")), "Text"))])), 2)), async () => ($.ne((await $.mv((await $.v(C, "edit4")), "text")), "")))))) {
      if ($.truthy($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit4")), "Text")), 1, 2])), (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit6")), "Text")), 1, 2]))))) {
        {
          const $t12 = (await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups"));
          await $.stmt($.wcall([$t12], "close", [], C));
          { const $t13 = await $.iset((await $.wv([$t12], "SQL", C, false)), [2], ""); if ($t13 !== undefined) { await $.wset([$t12], "SQL", $t13, C); } }
          { const $t14 = await $.iset((await $.wv([$t12], "SQL", C, false)), [2], $.add("and grp=", (await $.mv((await $.wv([$t12], "Edit6", C, false)), "Text")))); if ($t14 !== undefined) { await $.wset([$t12], "SQL", $t14, C); } }
          await $.stmt($.wcall([$t12], "open", [], C));
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "Close", []);
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "edit6")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), "")))))) {
      {
        const $t15 = (await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_parts"));
        await $.stmt($.wcall([$t15], "close", [], C));
        { const $t16 = await $.iset((await $.wv([$t15], "SQL", C, false)), [2], ""); if ($t16 !== undefined) { await $.wset([$t15], "SQL", $t16, C); } }
        { const $t17 = await $.iset((await $.wv([$t15], "SQL", C, false)), [2], $.add("and part=", (await $.mv((await $.wv([$t15], "Edit4", C, false)), "Text")))); if ($t17 !== undefined) { await $.wset([$t15], "SQL", $t17, C); } }
        await $.stmt($.wcall([$t15], "open", [], C));
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.v(C, "x")), 1)), async () => ($.eq((await $.mv((await $.v(C, "edit6")), "Text")), "")))))) {
      await $.mset((await $.v(C, "edit4")), "Text", "");
      await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_parts")), "Close", []);
    }
  }
  if ($.truthy($.eq((await $.call(C, "get_param", [(await $.mv((await $.v(C, "Edit6")), "Text"))])), 0))) {
    await $.mset((await $.v(C, "edit6")), "MaxLength", 0);
    {
      const $t18 = (await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups"));
      if ($.truthy($.ne((await $.mv((await $.wv([$t18], "Edit6", C, false)), "Text")), ""))) {
        await $.stmt($.wcall([$t18], "close", [], C));
        { const $t19 = await $.iset((await $.wv([$t18], "SQL", C, false)), [2], ""); if ($t19 !== undefined) { await $.wset([$t18], "SQL", $t19, C); } }
        { const $t20 = await $.iset((await $.wv([$t18], "SQL", C, false)), [2], $.add($.add("and nvl(upper((grpname)),0) like upper ('%", (await $.mv((await $.wv([$t18], "Edit6", C, false)), "Text"))), "%')")); if ($t20 !== undefined) { await $.wset([$t18], "SQL", $t20, C); } }
        await $.stmt($.wcall([$t18], "open", [], C));
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "RecordCount")), 1))) {
      await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "FieldByName", ["grp "])), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccountForm", "get_param", async function get_param(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"param": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["param"]);
  try {
    await $.stmt((await $.call(C, "strtoint", [L0["param"]])));
    L0["result"] = 1;
  } catch ($t21) {
    $.rethrowControl($t21);
    $.handled($t21);
    L0["result"] = 0;
  }
  return L0.result;
}, {"params": ["param"], "kind": "function", "ptypes": ["String"]});
  U.method("TOpenAccountForm", "XDBGrid3CellClick", async function XDBGrid3CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "FieldByName", ["grp"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TOpenAccountForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TOpenAccountForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit4")), "clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_parts")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_bal_spr_groups")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "OpenAccount_DataModule")), "ODS_Bal_spr1")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TOpenAccountForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OpenAccount_DataModule", (await $.mcall((await $.v(C, "TOpenAccount_DataModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "OpenAccountForm", (await $.mcall((await $.v(C, "TOpenAccountForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

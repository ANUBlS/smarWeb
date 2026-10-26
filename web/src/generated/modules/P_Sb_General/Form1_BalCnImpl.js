// Generated from Form1_BalCnImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Form1_BalCnImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "OpenAccdataImpl", "OpenAccountImpl"]);
  const C = [U];
  U.defClass("TFormBalCn1", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FormBalCn1", null, "TFormBalCn1");
    U.var_("x", 0, "integer");
  });
  U.method("TFormBalCn1", "get_param", async function get_param(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"param": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["param"]);
  try {
    await $.stmt((await $.call(C, "strtoint", [L0["param"]])));
    L0["result"] = 1;
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    L0["result"] = 0;
  }
  return L0.result;
}, {"params": ["param"], "kind": "function", "ptypes": ["String"]});
  U.method("TFormBalCn1", "XDBGrid3DblClick", async function XDBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "OpenAccount")), "DBLookupComboboxEh6")), "ListSource", (await $.mv((await $.v(C, "DataAcc")), "Dsrc_bal_spr3")));
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr3")), "open", []);
  {
    const $t2 = (await $.v(C, "DataAcc"));
    const $t3 = (await $.wv([$t2], "ODS_Bal_spr3", C, false));
    if ($.truthy($.ne((await $.wv([$t2, $t3], "RecordCount", C, false)), 0))) {
      await $.mset((await $.mv((await $.wv([$t2, $t3], "OpenAccount", C, false)), "Edit2")), "Text", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["bal_cn"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t2, $t3], "OpenAccount", C, false)), "DBLookupComboboxEh6")), "Text", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["balname"], C)), "AsString")));
    }
  }
  await $.mcall((await $.v(C, "FormBalCn1")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCn1", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "OpenAccount")), "DBLookupComboboxEh6")), "ListSource", (await $.mv((await $.v(C, "DataAcc")), "Dsrc_bal_spr3")));
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr3")), "open", []);
  {
    const $t4 = (await $.v(C, "DataAcc"));
    const $t5 = (await $.wv([$t4], "ODS_Bal_spr3", C, false));
    if ($.truthy($.ne((await $.wv([$t4, $t5], "RecordCount", C, false)), 0))) {
      await $.mset((await $.mv((await $.wv([$t4, $t5], "OpenAccount", C, false)), "Edit2")), "Text", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["bal_cn"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t4, $t5], "OpenAccount", C, false)), "DBLookupComboboxEh6")), "Text", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["balname"], C)), "AsString")));
    }
  }
  await $.mcall((await $.v(C, "FormBalCn1")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCn1", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "x", 0);
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.v(C, "edit1")), "Text")));
  {
    const $t6 = (await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_parts1"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t6], "Edit1", C, false)), "Text")), ""))) {
      await $.stmt($.wcall([$t6], "close", [], C));
      { const $t7 = await $.iset((await $.wv([$t6], "SQL", C, false)), [2], ""); if ($t7 !== undefined) { await $.wset([$t6], "SQL", $t7, C); } }
      { const $t8 = await $.iset((await $.wv([$t6], "SQL", C, false)), [2], $.add($.add($.add((await $.idx((await $.wv([$t6], "SQL", C, false)), [2])), "and nvl(upper(( part||' '||partname)),0) like upper ('%"), (await $.mv((await $.wv([$t6], "Edit1", C, false)), "Text"))), "%')")); if ($t8 !== undefined) { await $.wset([$t6], "SQL", $t8, C); } }
      await $.stmt($.wcall([$t6], "open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t6], "edit1", C, false)), "Text")), ""))) {
      await $.mcall((await $.mv((await $.wv([$t6], "DataAcc", C, false)), "ODS_bal_spr_parts1")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t6], "DataAcc", C, false)), "ODS_bal_spr_groups1")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t6], "DataAcc", C, false)), "ODS_bal_spr3")), "Close", []);
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCn1", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.v(C, "edit2")), "Text")));
  if ($.truthy((await $.or_(($.eq((await $.call(C, "get_param", [(await $.mv((await $.v(C, "Edit2")), "Text"))])), 1)), async () => ($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "")))))) {
    await $.mset((await $.v(C, "edit2")), "MaxLength", 3);
    if ($.truthy((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit2")), "Text"))])), 2)), async () => ($.eq((await $.mv((await $.v(C, "edit1")), "text")), "")))))) {
      await $.mset((await $.v(C, "edit1")), "text", (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit2")), "Text")), 1, 2])));
      await $.set(C, "x", 1);
    }
    if ($.truthy((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit2")), "Text"))])), 2)), async () => ($.ne((await $.mv((await $.v(C, "edit1")), "text")), "")))))) {
      if ($.truthy($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit1")), "Text")), 1, 2])), (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit2")), "Text")), 1, 2]))))) {
        {
          const $t9 = (await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1"));
          await $.stmt($.wcall([$t9], "close", [], C));
          { const $t10 = await $.iset((await $.wv([$t9], "SQL", C, false)), [2], ""); if ($t10 !== undefined) { await $.wset([$t9], "SQL", $t10, C); } }
          { const $t11 = await $.iset((await $.wv([$t9], "SQL", C, false)), [2], $.add(" and grp= ", (await $.mv((await $.wv([$t9], "Edit2", C, false)), "Text")))); if ($t11 !== undefined) { await $.wset([$t9], "SQL", $t11, C); } }
          await $.stmt($.wcall([$t9], "open", [], C));
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1")), "Close", []);
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), "")))))) {
      {
        const $t12 = (await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_parts1"));
        await $.stmt($.wcall([$t12], "close", [], C));
        { const $t13 = await $.iset((await $.wv([$t12], "SQL", C, false)), [2], ""); if ($t13 !== undefined) { await $.wset([$t12], "SQL", $t13, C); } }
        { const $t14 = await $.iset((await $.wv([$t12], "SQL", C, false)), [2], $.add(" and part=", (await $.mv((await $.wv([$t12], "Edit1", C, false)), "Text")))); if ($t14 !== undefined) { await $.wset([$t12], "SQL", $t14, C); } }
        await $.stmt($.wcall([$t12], "open", [], C));
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.v(C, "x")), 1)), async () => ($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "")))))) {
      await $.mset((await $.v(C, "edit1")), "Text", "");
      await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_parts1")), "Close", []);
    }
  }
  if ($.truthy($.eq((await $.call(C, "get_param", [(await $.mv((await $.v(C, "Edit2")), "Text"))])), 0))) {
    await $.mset((await $.v(C, "edit2")), "MaxLength", 0);
    {
      const $t15 = (await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1"));
      if ($.truthy($.ne((await $.mv((await $.wv([$t15], "Edit2", C, false)), "Text")), ""))) {
        await $.stmt($.wcall([$t15], "close", [], C));
        { const $t16 = await $.iset((await $.wv([$t15], "SQL", C, false)), [2], ""); if ($t16 !== undefined) { await $.wset([$t15], "SQL", $t16, C); } }
        { const $t17 = await $.iset((await $.wv([$t15], "SQL", C, false)), [2], $.add($.add(" and nvl(upper((grpname)),0) like upper ('%", (await $.mv((await $.wv([$t15], "Edit2", C, false)), "Text"))), "%')")); if ($t17 !== undefined) { await $.wset([$t15], "SQL", $t17, C); } }
        await $.stmt($.wcall([$t15], "open", [], C));
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1")), "RecordCount")), 1))) {
      await $.mset((await $.v(C, "edit2")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1")), "FieldByName", ["grp"])), "AsInteger"))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCn1", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit3")), "Text"))])), 2)), async () => ($.eq((await $.mv((await $.v(C, "edit1")), "text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "edit2")), "text")), "")))))) {
    await $.mset((await $.v(C, "edit1")), "text", (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit3")), "Text")), 1, 2])));
    await $.mset((await $.v(C, "edit2")), "text", (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit3")), "Text")), 1, 2])));
    await $.set(C, "x", 1);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((await $.v(C, "edit3")), "Text"))])), 3)), async () => ($.ne((await $.mv((await $.v(C, "edit1")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "edit2")), "text")), "")))))) {
    if ($.truthy((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit3")), "Text")), 1, 2])), (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit1")), "Text")), 1, 2])))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit3")), "Text")), 1, 3])), (await $.call(C, "Copy", [(await $.mv((await $.v(C, "edit2")), "Text")), 1, 3])))))))) {
      {
        const $t18 = (await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr3"));
        if ($.truthy($.ne((await $.mv((await $.wv([$t18], "Edit3", C, false)), "Text")), ""))) {
          await $.stmt($.wcall([$t18], "close", [], C));
          { const $t19 = await $.iset((await $.wv([$t18], "SQL", C, false)), [2], ""); if ($t19 !== undefined) { await $.wset([$t18], "SQL", $t19, C); } }
          if ($.truthy($.eq((await $.wcall([$t18], "get_param", [(await $.mv((await $.wv([$t18], "Edit3", C, false)), "Text"))], C)), 0))) {
            { const $t20 = await $.iset((await $.wv([$t18], "SQL", C, false)), [2], $.add($.add(" and nvl(upper((balname)),0) like upper ('%", (await $.mv((await $.wv([$t18], "Edit3", C, false)), "Text"))), "%')")); if ($t20 !== undefined) { await $.wset([$t18], "SQL", $t20, C); } }
          } else {
            { const $t21 = await $.iset((await $.wv([$t18], "SQL", C, false)), [2], $.add(" and bal_cn=", (await $.mv((await $.wv([$t18], "Edit3", C, false)), "Text")))); if ($t21 !== undefined) { await $.wset([$t18], "SQL", $t21, C); } }
          }
          await $.stmt($.wcall([$t18], "open", [], C));
        }
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr3")), "Close", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "Text")), ""))) {
    {
      const $t22 = (await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1"));
      await $.stmt($.wcall([$t22], "close", [], C));
      { const $t23 = await $.iset((await $.wv([$t22], "SQL", C, false)), [2], ""); if ($t23 !== undefined) { await $.wset([$t22], "SQL", $t23, C); } }
      if ($.truthy($.eq((await $.wcall([$t22], "get_param", [(await $.mv((await $.wv([$t22], "Edit2", C, false)), "Text"))], C)), 0))) {
        { const $t24 = await $.iset((await $.wv([$t22], "SQL", C, false)), [2], $.add($.add(" and nvl(upper((grpname)),0) like upper ('%", (await $.mv((await $.wv([$t22], "Edit2", C, false)), "Text"))), "%')")); if ($t24 !== undefined) { await $.wset([$t22], "SQL", $t24, C); } }
      } else {
        { const $t25 = await $.iset((await $.wv([$t22], "SQL", C, false)), [2], $.add(" and grp=", (await $.mv((await $.wv([$t22], "Edit2", C, false)), "Text")))); if ($t25 !== undefined) { await $.wset([$t22], "SQL", $t25, C); } }
      }
      await $.stmt($.wcall([$t22], "open", [], C));
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "x")), 1)), async () => ($.eq((await $.mv((await $.v(C, "edit3")), "Text")), "")))))) {
    await $.mset((await $.v(C, "edit1")), "Text", "");
    await $.mset((await $.v(C, "edit2")), "Text", "");
    await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_parts1")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBalCn1", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_parts1")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_bal_spr_groups1")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}

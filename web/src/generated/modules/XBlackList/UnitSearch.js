// Generated from UnitSearch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitSearch", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "Grids", "XDBGrids", "StdCtrls", "BlackListImpl", "DmBlackImpl"]);
  const C = [U];
  U.defClass("TFormSearch", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormSearch", null, "TFormSearch");
  });
  U.method("TFormSearch", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t1 = L0["sender"];
      await $.stmt((await $.wcall([$t1], "SelectNext", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "True", C, false))], C)));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
      await $.mcall((await $.v(C, "edit2")), "Clear", []);
      {
        const $t2 = (await $.v(C, "DmBlack"));
        const $t3 = (await $.wv([$t2], "ods_search", C, false));
        await $.stmt($.wcall([$t2, $t3], "close", [], C));
        { const $t4 = await $.iset((await $.wv([$t2, $t3], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t2, $t3], "SQL", C, false)), [8])), " and nvl(upper(nam),0) like upper ('%"), (await $.mv((await $.wv([$t2, $t3], "Edit1", C, false)), "Text"))), "%')")); if ($t4 !== undefined) { await $.wset([$t2, $t3], "SQL", $t4, C); } }
        await $.stmt($.wcall([$t2, $t3], "open", [], C));
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "Close", []);
      { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "SQL")), [8], ""); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "SQL", $t5); } }
      await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormSearch", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t6 = L0["sender"];
      await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
      await $.mcall((await $.v(C, "edit1")), "Clear", []);
      {
        const $t7 = (await $.v(C, "DmBlack"));
        const $t8 = (await $.wv([$t7], "ods_search", C, false));
        await $.stmt($.wcall([$t7, $t8], "close", [], C));
        { const $t9 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t7, $t8], "SQL", C, false)), [8])), " and nvl(upper(nam1),0) like upper ('%"), (await $.mv((await $.wv([$t7, $t8], "Edit2", C, false)), "Text"))), "%')")); if ($t9 !== undefined) { await $.wset([$t7, $t8], "SQL", $t9, C); } }
        await $.stmt($.wcall([$t7, $t8], "open", [], C));
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "Close", []);
      { const $t10 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "SQL")), [8], ""); if ($t10 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "SQL", $t10); } }
      await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormSearch", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DmBlack"));
    const $t12 = (await $.wv([$t11], "ods_search", C, false));
    if ($.truthy($.not((await $.wv([$t11, $t12], "Active", C, false))))) {
      await $.stmt($.wcall([$t11, $t12], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t11, $t12], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearch", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DmBlack")), "ods_searchDATAID")), "AsString")), ""))) {
    {
      const $t13 = (await $.v(C, "DmBlack"));
      const $t14 = (await $.wv([$t13], "ods_blecxml", C, false));
      { const $t15 = await $.iset((await $.wv([$t13, $t14], "Sql", C, false)), [4], ""); if ($t15 !== undefined) { await $.wset([$t13, $t14], "Sql", $t15, C); } }
      await $.stmt($.wcall([$t13, $t14], "close", [], C));
      { const $t16 = await $.iset((await $.wv([$t13, $t14], "SQL", C, false)), [4], $.add($.add($.add(" and  dataid  = ", "'"), (await $.mv((await $.mv((await $.wv([$t13, $t14], "DmBlack", C, false)), "ods_searchDATAID")), "AsString"))), "'")); if ($t16 !== undefined) { await $.wset([$t13, $t14], "SQL", $t16, C); } }
      await $.stmt($.wcall([$t13, $t14], "open", [], C));
    }
  } else {
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
    { const $t17 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "SQL")), [4], ""); if ($t17 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "SQL", $t17); } }
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
  }
  await $.mcall((await $.v(C, "FormSearch")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearch", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t18 = (await $.v(C, "DmBlack"));
    const $t19 = (await $.wv([$t18], "ods_search", C, false));
    await $.mset((await $.wv([$t18, $t19], "Screen", C, false)), "Cursor", (await $.wv([$t18, $t19], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t18, $t19], "SetVariable", ["Title", (await $.wv([$t18, $t19], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t18, $t19], "Refresh", [], C));
    await $.mset((await $.wv([$t18, $t19], "Screen", C, false)), "Cursor", (await $.wv([$t18, $t19], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  return U;
}

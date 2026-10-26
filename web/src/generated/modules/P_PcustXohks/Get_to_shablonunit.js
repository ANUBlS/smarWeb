// Generated from Get_to_shablonunit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Get_to_shablonunit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "Db", "OracleData", "StdCtrls", "ExtCtrls", "SearchEdit", "DataXohks", "XohksPayment_Det"]);
  const C = [U];
  U.defClass("TForm_get_to_shablon", "TForm", {"gridreadybatchs": {"name": "GridReadyBatchs", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "searchedit5": {"name": "SearchEdit5", "type": "TSearchEdit"}, "searchedit6": {"name": "SearchEdit6", "type": "TSearchEdit"}, "searchedit7": {"name": "SearchEdit7", "type": "TSearchEdit"}}, {});
  U.init(async () => {
    U.var_("Form_get_to_shablon", null, "TForm_get_to_shablon");
  });
  U.method("TForm_get_to_shablon", "GridReadyBatchsDblClick", async function GridReadyBatchsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_shablon"));
    const $t2 = (await $.wv([$t1], "FormPayment_Det", C, false));
    if ($.truthy($.gt((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
      await $.mset((await $.wv([$t1, $t2], "Edit_amount", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [0])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_TransCode", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [1])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Combo_BankName", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [2])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Combo_BankName", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t1, $t2], "Combo_BankName", C, false)), "Items")), "IndexOf", [(await $.mv((await $.wv([$t1, $t2], "Combo_BankName", C, false)), "Text"))])));
      await $.stmt((await $.wcall([$t1, $t2], "Combo_BankNameChange", [Self], C)));
      await $.mset((await $.wv([$t1, $t2], "Edit_Client_acc_no", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [3])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_Client_Name", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [4])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_Client_Code", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [5])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_Client_Voen", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [6])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_tey1", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [7])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_tey2", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [8])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_tey3", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [9])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_tey4", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [10])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_inf1", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [11])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_inf2", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [12])), "AsString")));
      await $.mset((await $.wv([$t1, $t2], "Edit_inf3", C, false)), "Text", (await $.mv((await $.idx((await $.wv([$t1, $t2], "Fields", C, false)), [13])), "AsString")));
      await $.stmt((await $.wcall([$t1, $t2], "SpeedButton2Click", [(await $.wv([$t1, $t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t1, $t2], "Button1", C, false)), "Enabled", (await $.wv([$t1, $t2], "true", C, false)));
      await $.mcall((await $.wv([$t1, $t2], "Edit_amount", C, false)), "SetFocus", []);
      await $.mcall((await $.wv([$t1, $t2], "Form_get_to_shablon", C, false)), "Close", []);
    }
  }
  await $.mcall((await $.v(C, "SearchEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit2")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit3")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit4")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit5")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit6")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit7")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_get_to_shablon", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GridReadyBatchsDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_get_to_shablon", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModXhoks")), "INS"));
    const $t4 = (await $.mv((await $.wv([$t3], "DataModXhoks", C, false)), "ODS_shablon"));
    await $.stmt((await $.wcall([$t3, $t4], "Callprocedure", ["xs_Beneficiary_shablon_delete", [(await $.mv((await $.idx((await $.wv([$t3, $t4], "Fields", C, false)), [14])), "AsString"))]], C)));
    await $.stmt($.wcall([$t3, $t4], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_get_to_shablon", "GridReadyBatchsTitleClick", async function GridReadyBatchsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_shablon")), "Close", []);
  {
    const $t5 = (await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "ODS_shablon")), "SQL"));
    await $.stmt($.wcall([$t5], "Clear", [], C));
    await $.stmt((await $.wcall([$t5], "Add", ["SELECT mebleg, odenish_kod, bankin_kodu, hesab_no, adi, kodu, voen, "], C)));
    await $.stmt((await $.wcall([$t5], "Add", [" od_tey1, od_tey2, od_tey3, od_tey4, elave_mel1, elave_mel2, "], C)));
    await $.stmt((await $.wcall([$t5], "Add", [" elave_mel3, shablonun_adi, bankin_adi, odenish "], C)));
    await $.stmt((await $.wcall([$t5], "Add", [$.add($.add(" FROM xs_beneficiary_shablon order by ", (await $.mv((await $.wv([$t5], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName"))), " ")], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_shablon")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  return U;
}

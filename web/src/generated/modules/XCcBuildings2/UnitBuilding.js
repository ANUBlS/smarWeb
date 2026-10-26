// Generated from UnitBuilding.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitBuilding", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "UnitDataModccBuildings"]);
  const C = [U];
  U.defClass("TFormBuilding", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "editname": {"name": "EditName", "type": "TEdit"}, "editadress": {"name": "EditAdress", "type": "TEdit"}, "editentrance": {"name": "EditEntrance", "type": "TEdit"}, "editflat": {"name": "EditFlat", "type": "TEdit"}, "editfloor": {"name": "EditFloor", "type": "TEdit"}, "ac_groupbox": {"name": "ac_groupbox", "type": "TGroupBox"}, "editid": {"name": "Editid", "type": "TEdit"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "addupd": {"name": "AddUpd", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FormBuilding", null, "TFormBuilding");
  });
  U.method("TFormBuilding", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBuilding", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": '', "p_compid": '', "p_bldname": '', "p_address": '', "p_floors": '', "p_entrances": '', "p_flats": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditName")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditAdress")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Binanın adı yaxud ünvanı sahəsi boşdur"])));
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "EditName")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditAdress")), "Text")), "")))))) {
    {
      const $t1 = (await $.v(C, "DataModccBuildings"));
      await $.wset([$t1], "p_CompID", (await $.mv((await $.mcall((await $.wv([$t1], "CC_Company", C, false)), "FieldByName", ["ID"])), "AsString")), { get: async () => L0["p_compid"], set: async (v) => { L0["p_compid"] = v; }, local: true });
      await $.wset([$t1], "p_BldName", (await $.mv((await $.wv([$t1], "EditName", C, false)), "Text")), { get: async () => L0["p_bldname"], set: async (v) => { L0["p_bldname"] = v; }, local: true });
      await $.wset([$t1], "p_Address", (await $.mv((await $.wv([$t1], "EditAdress", C, false)), "Text")), { get: async () => L0["p_address"], set: async (v) => { L0["p_address"] = v; }, local: true });
      await $.wset([$t1], "p_Floors", (await $.mv((await $.wv([$t1], "EditFloor", C, false)), "Text")), { get: async () => L0["p_floors"], set: async (v) => { L0["p_floors"] = v; }, local: true });
      await $.wset([$t1], "p_Entrances", (await $.mv((await $.wv([$t1], "EditEntrance", C, false)), "Text")), { get: async () => L0["p_entrances"], set: async (v) => { L0["p_entrances"] = v; }, local: true });
      await $.wset([$t1], "p_Flats", (await $.mv((await $.wv([$t1], "EditFlat", C, false)), "Text")), { get: async () => L0["p_flats"], set: async (v) => { L0["p_flats"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t1], "AddUpd", C, false)), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "CC_OP", C, false)), "CallProcedure", ["add_Buildings", [(await $.wv([$t1], "p_CompID", { get: async () => L0["p_compid"], set: async (v) => { L0["p_compid"] = v; }, local: true }, false)), (await $.wv([$t1], "p_BldName", { get: async () => L0["p_bldname"], set: async (v) => { L0["p_bldname"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Address", { get: async () => L0["p_address"], set: async (v) => { L0["p_address"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Floors", { get: async () => L0["p_floors"], set: async (v) => { L0["p_floors"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Entrances", { get: async () => L0["p_entrances"], set: async (v) => { L0["p_entrances"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Flats", { get: async () => L0["p_flats"], set: async (v) => { L0["p_flats"] = v; }, local: true }, false))]])));
      }
      if ($.truthy($.eq((await $.wv([$t1], "AddUpd", C, false)), 2))) {
        await $.wset([$t1], "p_ID", (await $.mv((await $.mcall((await $.wv([$t1], "CC_building", C, false)), "FieldByName", ["ID"])), "AsString")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t1], "CC_OP", C, false)), "CallProcedure", ["upd_Buildings", [(await $.wv([$t1], "p_ID", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t1], "p_CompID", { get: async () => L0["p_compid"], set: async (v) => { L0["p_compid"] = v; }, local: true }, false)), (await $.wv([$t1], "p_BldName", { get: async () => L0["p_bldname"], set: async (v) => { L0["p_bldname"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Address", { get: async () => L0["p_address"], set: async (v) => { L0["p_address"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Floors", { get: async () => L0["p_floors"], set: async (v) => { L0["p_floors"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Entrances", { get: async () => L0["p_entrances"], set: async (v) => { L0["p_entrances"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Flats", { get: async () => L0["p_flats"], set: async (v) => { L0["p_flats"] = v; }, local: true }, false))]])));
      }
      await $.mcall((await $.wv([$t1], "CC_building", C, false)), "Close", []);
      await $.mcall((await $.wv([$t1], "CC_building", C, false)), "Open", []);
      await $.mset((await $.wv([$t1], "EditName", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditAdress", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditEntrance", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditFlat", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditFloor", C, false)), "Text", "");
      await $.mcall((await $.wv([$t1], "EditName", C, false)), "SetFocus", []);
    }
  }
  if ($.truthy($.eq((await $.v(C, "AddUpd")), 2))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

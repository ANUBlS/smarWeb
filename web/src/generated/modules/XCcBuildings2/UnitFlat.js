// Generated from UnitFlat.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFlat", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "UnitDataModccBuildings"]);
  const C = [U];
  U.defClass("TFormFlat", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "editno": {"name": "EditNo", "type": "TEdit"}, "editfloor": {"name": "EditFloor", "type": "TEdit"}, "editroom": {"name": "EditRoom", "type": "TEdit"}, "editarea": {"name": "EditArea", "type": "TEdit"}, "editprice1": {"name": "EditPrice1", "type": "TEdit"}, "editpricegen": {"name": "EditPriceGen", "type": "TEdit"}, "editentrance": {"name": "EditEntrance", "type": "TEdit"}, "editcode": {"name": "EditCode", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "editid": {"name": "Editid", "type": "TEdit"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "addupd": {"name": "AddUpd", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FormFlat", null, "TFormFlat");
  });
  U.method("TFormFlat", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": '', "p_bldid": '', "p_flatcode": '', "p_flatnum": '', "p_entrance": '', "p_floor": '', "p_rooms": '', "p_area": '', "p_price1": '', "p_pricegen": '', "p_buyer": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditNo")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Mənzilin N-si sahəsi boşdur!"])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditNo")), "Text")), ""))) {
    {
      const $t1 = (await $.v(C, "DataModccBuildings"));
      await $.wset([$t1], "p_BldID", (await $.mv((await $.mcall((await $.wv([$t1], "CC_Building", C, false)), "FieldByName", ["ID"])), "AsString")), { get: async () => L0["p_bldid"], set: async (v) => { L0["p_bldid"] = v; }, local: true });
      await $.wset([$t1], "p_FlatCode", (await $.mv((await $.wv([$t1], "EditCode", C, false)), "Text")), { get: async () => L0["p_flatcode"], set: async (v) => { L0["p_flatcode"] = v; }, local: true });
      await $.wset([$t1], "p_FlatNum", (await $.mv((await $.wv([$t1], "EditNo", C, false)), "Text")), { get: async () => L0["p_flatnum"], set: async (v) => { L0["p_flatnum"] = v; }, local: true });
      await $.wset([$t1], "p_Entrance", (await $.mv((await $.wv([$t1], "EditEntrance", C, false)), "Text")), { get: async () => L0["p_entrance"], set: async (v) => { L0["p_entrance"] = v; }, local: true });
      await $.wset([$t1], "p_Floor", (await $.mv((await $.wv([$t1], "EditFloor", C, false)), "Text")), { get: async () => L0["p_floor"], set: async (v) => { L0["p_floor"] = v; }, local: true });
      await $.wset([$t1], "p_Rooms", (await $.mv((await $.wv([$t1], "EditRoom", C, false)), "Text")), { get: async () => L0["p_rooms"], set: async (v) => { L0["p_rooms"] = v; }, local: true });
      await $.wset([$t1], "p_Area", (await $.mv((await $.wv([$t1], "EditArea", C, false)), "Text")), { get: async () => L0["p_area"], set: async (v) => { L0["p_area"] = v; }, local: true });
      await $.wset([$t1], "p_Price1", (await $.mv((await $.wv([$t1], "EditPrice1", C, false)), "Text")), { get: async () => L0["p_price1"], set: async (v) => { L0["p_price1"] = v; }, local: true });
      await $.wset([$t1], "p_PriceGen", (await $.mv((await $.wv([$t1], "EditPriceGen", C, false)), "Text")), { get: async () => L0["p_pricegen"], set: async (v) => { L0["p_pricegen"] = v; }, local: true });
      await $.wset([$t1], "p_Buyer", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModccBuildings", C, false)), "CC_Buyer_Flat")), "FieldByName", ["buyer"])), "AsInteger")), { get: async () => L0["p_buyer"], set: async (v) => { L0["p_buyer"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t1], "AddUpd", C, false)), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "CC_OP", C, false)), "CallProcedure", ["add_Flats", [(await $.wv([$t1], "p_BldID", { get: async () => L0["p_bldid"], set: async (v) => { L0["p_bldid"] = v; }, local: true }, false)), (await $.wv([$t1], "p_FlatCode", { get: async () => L0["p_flatcode"], set: async (v) => { L0["p_flatcode"] = v; }, local: true }, false)), (await $.wv([$t1], "p_FlatNum", { get: async () => L0["p_flatnum"], set: async (v) => { L0["p_flatnum"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Entrance", { get: async () => L0["p_entrance"], set: async (v) => { L0["p_entrance"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Floor", { get: async () => L0["p_floor"], set: async (v) => { L0["p_floor"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Rooms", { get: async () => L0["p_rooms"], set: async (v) => { L0["p_rooms"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Area", { get: async () => L0["p_area"], set: async (v) => { L0["p_area"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Price1", { get: async () => L0["p_price1"], set: async (v) => { L0["p_price1"] = v; }, local: true }, false)), (await $.wv([$t1], "p_PriceGen", { get: async () => L0["p_pricegen"], set: async (v) => { L0["p_pricegen"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Buyer", { get: async () => L0["p_buyer"], set: async (v) => { L0["p_buyer"] = v; }, local: true }, false))]])));
      }
      if ($.truthy($.eq((await $.wv([$t1], "AddUpd", C, false)), 2))) {
        await $.wset([$t1], "p_ID", (await $.mv((await $.mcall((await $.wv([$t1], "CC_Buyer_Flat", C, false)), "FieldByName", ["ID"])), "AsString")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t1], "CC_OP", C, false)), "CallProcedure", ["upd_Flats", [(await $.wv([$t1], "p_ID", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t1], "p_BldID", { get: async () => L0["p_bldid"], set: async (v) => { L0["p_bldid"] = v; }, local: true }, false)), (await $.wv([$t1], "p_FlatCode", { get: async () => L0["p_flatcode"], set: async (v) => { L0["p_flatcode"] = v; }, local: true }, false)), (await $.wv([$t1], "p_FlatNum", { get: async () => L0["p_flatnum"], set: async (v) => { L0["p_flatnum"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Entrance", { get: async () => L0["p_entrance"], set: async (v) => { L0["p_entrance"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Floor", { get: async () => L0["p_floor"], set: async (v) => { L0["p_floor"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Rooms", { get: async () => L0["p_rooms"], set: async (v) => { L0["p_rooms"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Area", { get: async () => L0["p_area"], set: async (v) => { L0["p_area"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Price1", { get: async () => L0["p_price1"], set: async (v) => { L0["p_price1"] = v; }, local: true }, false)), (await $.wv([$t1], "p_PriceGen", { get: async () => L0["p_pricegen"], set: async (v) => { L0["p_pricegen"] = v; }, local: true }, false)), (await $.wv([$t1], "p_Buyer", { get: async () => L0["p_buyer"], set: async (v) => { L0["p_buyer"] = v; }, local: true }, false))]])));
      }
      await $.mcall((await $.wv([$t1], "CC_Buyer_Flat", C, false)), "Close", []);
      await $.mcall((await $.wv([$t1], "CC_Buyer_Flat", C, false)), "Open", []);
      await $.mset((await $.wv([$t1], "EditCode", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "Editno", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditEntrance", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditFloor", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditRoom", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditArea", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditPrice1", C, false)), "Text", "");
      await $.mset((await $.wv([$t1], "EditPricegen", C, false)), "Text", "");
      await $.mcall((await $.wv([$t1], "EditCode", C, false)), "SetFocus", []);
    }
  }
  if ($.truthy($.eq((await $.v(C, "AddUpd")), 2))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFlat", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormFlat", "EditPrice1KeyPress", async function EditPrice1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "pricegeneral": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t2 = L0["sender"];
        { const $t3 = (await $.wv([$t2], "Tag", C, false));
          if ($.eq($t3, 1)) {
            await $.stmt((await $.wcall([$t2], "SelectNext", [(await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t2], "True", C, false)), (await $.wv([$t2], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
    L0["pricegeneral"] = ($.mul((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditArea")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditPrice1")), "Text"))]))));
    await $.mset((await $.v(C, "EditPriceGen")), "Text", (await $.call(C, "FloatToStr", [L0["pricegeneral"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

// Generated from onlinec.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("onlinec", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGrids", "ImgList", "ComCtrls", "ToolWin", "PluginToolBar", "Unitclient2", "StdCtrls", "Unit18"]);
  const C = [U];
  U.defClass("TOnline", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Online", null, "TOnline");
  });
  U.method("TOnline", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_madd"]])));
  await $.set(C, "clients2", (await $.mcall((await $.v(C, "Tclients2")), "Create", [Self])));
  await $.mset((await $.v(C, "clients2")), "Caption", "ONLINE");
  await $.mset((await $.mv((await $.v(C, "clients2")), "edit1")), "Text", "ONLINE");
  await $.mcall((await $.mv((await $.v(C, "clients2")), "ComboBox9")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "First", []);
  { const $t1 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "recordcount"));
    L0["k"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["k"] = $.succ(L0["k"], 1); }
      $t2 = false;
      if (!($.ord(L0["k"]) <= $.ord($t1))) break;
      if ($.truthy($.eq(L0["k"], 0))) {
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox9")), "Items")), "add", [" "])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox9")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "fieldbyname", ["TYPE"])), "asstring"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "next", []);
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "clients2")), "edit1")), "Text")), "ONLINE"))) {
    await $.mset((await $.mv((await $.v(C, "clients2")), "DBEdit3")), "Text", "");
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit15")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["FNAME"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit15")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit16")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["LNAME"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit16")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit18")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["PASSPORT"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit18")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "DateTimePicker7")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit17")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["HOMEPHONE"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit17")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit27")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["WORKPHONE"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit27")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit20")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["COUNTRY"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit20")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit19")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["CITY"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit19")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit22")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["ADDRESS"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit22")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["RESIDENT"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox4")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["CARDTYPE"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox1")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox12")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit28")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit26")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit23")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox2")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit25")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["SECURITY"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit25")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit21")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["currency"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit21")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "CheckBox2")), "Checked", false);
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox11")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Online_Cards")), "fieldbyname", ["TITUL"])), "asstring")));
    await $.mset((await $.mv((await $.v(C, "clients2")), "ComboBox10")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "clients2")), "Edit24")), "Visible", true);
  }
  await $.mcall((await $.v(C, "clients2")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

// Generated from CO_CustRelations.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_CustRelations", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "CO_datamod_impl", "Menus", "CustomersImpl", "ExtCtrls", "StdCtrls", "Buttons", "ComCtrls", "ToolWin", "XDBGrids", "DB"]);
  const C = [U];
  U.defClass("TFormCustRelations", "TForm", {"pm1": {"name": "PM1", "type": "TPopupMenu"}, "laqlndirmk1": {"name": "laqlndirmk1", "type": "TMenuItem"}, "laqlndirmnisil1": {"name": "laqlndirmnisil1", "type": "TMenuItem"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panelphotos": {"name": "PanelPhotos", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "image2": {"name": "Image2", "type": "TImage"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "image3": {"name": "Image3", "type": "TImage"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "tbphotos": {"name": "TBPhotos", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("FormCustRelations", null, "TFormCustRelations");
  });
  U.method("TFormCustRelations", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormCustRelations")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "laqlndirmk1Click", async function laqlndirmk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "FormCustomers")), "vCustId")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallProcedure", ["add_cust_relations", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["ID"])), "AsInteger")), "v_custid2", (await $.mv((await $.v(C, "FormCustomers")), "vCustId"))]])));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "laqlndirmnisil1Click", async function laqlndirmnisil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallProcedure", ["del_cust_relations", ["v_custid", (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "CustomersID")), "AsInteger")), "v_custid2", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "FieldByName", ["CUSTID2"])), "AsInteger"))]])));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "PanelPhotos")), "Visible")), false))) {
    await $.mset((await $.v(C, "PanelPhotos")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "PanelPhotos")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "State")), [(await $.v(C, "dsEdit")), (await $.v(C, "dsInsert"))]))) {
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Cancel", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "State")), [(await $.v(C, "dsEdit")), (await $.v(C, "dsInsert"))]))) {
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "laqlndirmk1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "TBPhotosClick", async function TBPhotosClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "TBPhotos")), "Down")), true))) {
    await $.mset((await $.v(C, "PanelPhotos")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "PanelPhotos")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormCustRelations")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustRelations", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "laqlndirmnisil1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

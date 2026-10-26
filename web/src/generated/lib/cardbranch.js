// Generated from cardbranch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cardbranch", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "Unitcardarxiv", "datclose", "Unit18", "StdCtrls", "DBCtrls", "Menus"]);
  const C = [U];
  U.defClass("Tcard_branch", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "s1": {"name": "S1", "type": "TMenuItem"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("card_branch", null, "Tcard_branch");
  });
  U.method("Tcard_branch", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["addbranchescode", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), (await $.mv((await $.v(C, "Edit1")), "Text"))]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Filialın Plastik kart kodu əlavə olundu.."])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcard_branch", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mess_count": 0, "stmessage": null, "messagebody": null, "tempstr": null, "tempstr1": null, "tempstr2": null, "s": null, "filename": null, "sum_amount": 0, "sum_all_amount": 0, "a": 0, "dir": '', "dir2": '', "xmlfile": null, "v": 0, "c": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["addstr"] = $.fn(async function AddStr(p0, p1, p2) {
  const L1 = {"bodys": $.asRef(p0), "adds": $.copyArg(p1), "newrow": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["adds", "newrow"]);
  await L1["bodys"].set($.add((await L1["bodys"].get()), L1["adds"]));
  if ($.truthy(L1["newrow"])) {
    await L1["bodys"].set($.add((await L1["bodys"].get()), "\n"));
  }
  return L1.result;
});
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "Open", []);
  L0["dir"] = "C:\\AZCARD\\OUT";
  L0["filename"] = $.add($.add(L0["dir"], "\\CARDFILUPD"), ".xml");
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["xmlfile"], async ($t1) => { L0["xmlfile"] = $t1; }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["xmlfile"], async ($t2) => { L0["xmlfile"] = $t2; })])));
  await $.stmt((await $.call(C, "StringReplace", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["dates"])), "AsString")), "-", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]])));
  L0["c"] = $.add($.add($.add($.add("NBC#", (await $.call(C, "StringReplace", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["dates"])), "AsString")), "-", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))), "-"), (await $.call(C, "StringReplace", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["time"])), "AsString")), ":", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))), "_0100_");
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "<?xml version=\"1.0\" encoding=\"windows-1251\"?>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "<ApplicationFile>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "<FileHeader>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "   <FormatVersion>2.0</FormatVersion>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "        <Sender>0270</Sender>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add("       <CreationDate>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["dates"])), "AsString"))), "</CreationDate>")])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add("         <CreationTime>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["time"])), "AsString"))), "</CreationTime>")])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "         <Number>100</Number>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "          <Institution>0270</Institution>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "     </FileHeader>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "        <ApplicationsList>"])));
  L0["v"] = 1;
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "eof"))))) {
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "    <Application>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add($.add("            <RegNumber>", L0["c"]), (await $.call(C, "inttostr", [L0["v"]]))), "</RegNumber>")])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add("            <OrderDprt>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["branch_code"])), "AsString"))), "</OrderDprt>")])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            <ObjectType>Client</ObjectType>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            <ActionType>Update</ActionType>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            <ObjectFor>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            <ClientIDT>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            <ClientInfo>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add("                <ShortName>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["cardholder"])), "AsString"))), "</ShortName>")])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "             </ClientInfo>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add("               <RefContractNumber>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["cardnumber"])), "AsString"))), "</RefContractNumber>")])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "             </ClientIDT>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "                </ObjectFor>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            <Data>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "                  <Client>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], $.add($.add("                    <OrderDprt>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "FieldByName", ["branch_code"])), "AsString"))), "</OrderDprt>")])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "                  </Client>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "            </Data>"])));
    await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "       </Application>"])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr_upd")), "Next", []);
    L0["v"] = $.add(L0["v"], 1);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "</ApplicationsList>"])));
  await $.stmt((await $.call(C, "Writeln", [L0["xmlfile"], "</ApplicationFile>"])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["xmlfile"], async ($t3) => { L0["xmlfile"] = $t3; })])));
  await $.stmt((await $.call(C, "ShowMessage", ["Xml Yaradildi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcard_branch", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F11"))))) {
    await $.mset((await $.v(C, "Button2")), "Visible", true);
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F10"))))) {
    await $.mset((await $.v(C, "Button2")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("Tcard_branch", "S1Click", async function S1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t4 = (await $.call(C, "MessageDlg", ["Əməliyyat Kodu silinsin ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
    if ($.eq($t4, (await $.v(C, "mryes")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["del_branchescode", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "fieldbyName", ["branchid"])), "asinteger"))]])));
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

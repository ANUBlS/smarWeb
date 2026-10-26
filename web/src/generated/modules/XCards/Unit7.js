// Generated from Unit7.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit7", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "Buttons", "Unit18", "MAINFORMImpl1"]);
  const C = [U];
  U.defClass("TFormSearch", "TForm", {"dbgridmaincard": {"name": "DBGridMainCard", "type": "TDBGrid"}, "pnladvsearch": {"name": "PnlAdvSearch", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label44": {"name": "Label44", "type": "TLabel"}, "label45": {"name": "Label45", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "editcardnumber": {"name": "EditCardNumber", "type": "TEdit"}, "editmaincard": {"name": "EditMainCard", "type": "TEdit"}, "editrbsnum": {"name": "EditRBSNum", "type": "TEdit"}, "editrbsnum2": {"name": "EditRBSNum2", "type": "TEdit"}, "editreference": {"name": "EditReference", "type": "TEdit"}, "editcardholder": {"name": "EditCardHolder", "type": "TEdit"}, "editlastname": {"name": "EditLastName", "type": "TEdit"}, "editfirstname": {"name": "EditFirstName", "type": "TEdit"}, "cboxcurrencies": {"name": "CBoxCurrencies", "type": "TComboBox"}, "combocisearch": {"name": "ComboCISearch", "type": "TComboBox"}, "comcitype": {"name": "ComCIType", "type": "TComboBox"}, "editcompany": {"name": "EditCompany", "type": "TEdit"}, "dtpickeropendate": {"name": "DTPickerOpenDate", "type": "TDateTimePicker"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "buttoncicard": {"name": "ButtonCICard", "type": "TSpeedButton"}, "buttoncisub": {"name": "ButtonCISUB", "type": "TSpeedButton"}, "buttonciother": {"name": "buttonCIother", "type": "TSpeedButton"}, "buttonciselec": {"name": "ButtonCISelec", "type": "TSpeedButton"}, "printbutton": {"name": "PrintButton", "type": "TSpeedButton"}, "btnexcel": {"name": "BtnExcel", "type": "TSpeedButton"}, "checkgridrowselect": {"name": "CheckGridRowSelect", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FormSearch", null, "TFormSearch");
  });
  U.method("TFormSearch", "EditCardNumberEnter", async function EditCardNumberEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall(L0["sender"], "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearch", "DBGridMainCardDrawColumnCell", async function DBGridMainCardDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "buttonCIother")), "Down")), false))) {
    if ($.truthy(($.lt((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridMainCard")), "DataSource")), "DataSet")), "FieldByName", ["expiry"])), "AsDateTime")), (await $.v(C, "date")))))) {
      await $.mset((await $.mv((await $.mv((await $.v(C, "DBGridMainCard")), "Canvas")), "Brush")), "Color", 12615680);
      await $.stmt((await $.mcall((await $.v(C, "DBGridMainCard")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
    }
    if ($.truthy(($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridMainCard")), "DataSource")), "DataSet")), "FieldByName", ["dateclose"])), "AsString")), "")))) {
      await $.mset((await $.mv((await $.mv((await $.v(C, "DBGridMainCard")), "Canvas")), "Brush")), "Color", (await $.v(C, "Clsilver")));
      await $.stmt((await $.mcall((await $.v(C, "DBGridMainCard")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TFormSearch", "ComCITypeChange", async function ComCITypeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sqlstr": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ButtonCICard")), "down")))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
      L0["sqlstr"] = "Select clients.rowid,clients.* from cardmanager.clients where (messtype<3)";
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
        L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype<3)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')");
      } else {
        if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
          L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype<3)and(cardstatus='", (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
        } else {
          if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
            L0["sqlstr"] = $.add($.add($.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype<3)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')and(cardstatus='"), (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
          }
        }
      }
    }
  } else {
    if ($.truthy((await $.mv((await $.v(C, "ButtonCISUB")), "down")))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
        L0["sqlstr"] = "Select clients.rowid,clients.* from cardmanager.clients a where (messtype=2)";
      } else {
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
          L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=2)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')");
        } else {
          if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
            L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=2)and(cardstatus='", (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
          } else {
            if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
              L0["sqlstr"] = $.add($.add($.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=2)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')and(cardstatus='"), (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
            }
          }
        }
      }
    } else {
      if ($.truthy((await $.mv((await $.v(C, "buttonCIother")), "Down")))) {
        L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=9)and(othtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearch", "ComboCISearchChange", async function ComboCISearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sqlstr": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ButtonCICard")), "down")))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
      L0["sqlstr"] = "Select clients.rowid,clients.* from cardmanager.clients where (messtype<3)";
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
        L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype<3)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')");
      } else {
        if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
          L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype<3)and(cardstatus='", (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
        } else {
          if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
            L0["sqlstr"] = $.add($.add($.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype<3)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')and(cardstatus='"), (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
          }
        }
      }
    }
  } else {
    if ($.truthy((await $.mv((await $.v(C, "ButtonCISUB")), "down")))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
        L0["sqlstr"] = "Select clients.rowid,clients.* from cardmanager.clients where (messtype=2)";
      } else {
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
          L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=2)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')");
        } else {
          if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
            L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=2)and(cardstatus='", (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
          } else {
            if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "ComboCISearch")), "ItemIndex")), 0)), async () => ($.gt((await $.mv((await $.v(C, "ComCIType")), "ItemIndex")), 0)))))) {
              L0["sqlstr"] = $.add($.add($.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=2)and(cardtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')and(cardstatus='"), (await $.idx((await $.mv((await $.v(C, "ComboCISearch")), "items")), [(await $.mv((await $.v(C, "ComboCISearch")), "itemindex"))]))), "')");
            }
          }
        }
      }
    } else {
      if ($.truthy((await $.mv((await $.v(C, "buttonCIother")), "Down")))) {
        L0["sqlstr"] = $.add($.add("Select clients.rowid, clients.* from cardmanager.clients where (messtype=9)and(othtype='", (await $.idx((await $.mv((await $.v(C, "ComCIType")), "items")), [(await $.mv((await $.v(C, "ComCIType")), "itemindex"))]))), "')");
      }
    }
  }
  await $.stmt((await $.call(C, "ShowMessage", [L0["sqlstr"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSearch", "ButtonCICardClick", async function ButtonCICardClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "strsql": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

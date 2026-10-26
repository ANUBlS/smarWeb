// Generated from cfile_addi.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cfile_addi", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ComCtrls", "ToolWin", "xmldom", "XMLIntf", "msxmldom", "XMLDoc", "StdCtrls", "Grids", "DBGrids", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAdditional_cfile", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "xmldocument1": {"name": "XMLDocument1", "type": "TXMLDocument"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "button1": {"name": "Button1", "type": "TButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "s1": {"name": "S1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("Additional_cfile", null, "TAdditional_cfile");
  });
  U.func("SearchForText_AndSelect", async function SearchForText_AndSelect(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"richedit": $.copyArg(p0), "searchtext": $.copyArg(p1), result: false, "startpos": 0, "position": 0, "endpos": 0};
  await $.fixArgs(L0, ["richedit", "searchtext"]);
  L0["startpos"] = 0;
  {
    const $t1 = L0["richedit"];
    await $.wset([$t1], "Endpos", (await $.wcall([$t1], "Length", [(await $.mv((await $.wv([$t1], "RichEdit", { get: async () => L0["richedit"], set: async (v) => { L0["richedit"] = v; }, local: true }, false)), "Text"))], C)), { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true });
    await $.mcall((await $.wv([$t1], "Lines", C, false)), "BeginUpdate", []);
    while ($.truthy($.ne((await $.wcall([$t1], "FindText", [(await $.wv([$t1], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false)), (await $.wv([$t1], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), (await $.wv([$t1], "Endpos", { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true }, false)), [(await $.wv([$t1], "stMatchCase", C, false))]], C)), (-(1))))) {
      await $.wset([$t1], "Endpos", $.sub((await $.wcall([$t1], "Length", [(await $.mv((await $.wv([$t1], "RichEdit", { get: async () => L0["richedit"], set: async (v) => { L0["richedit"] = v; }, local: true }, false)), "Text"))], C)), (await $.wv([$t1], "startpos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false))), { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true });
      await $.wset([$t1], "Position", (await $.wcall([$t1], "FindText", [(await $.wv([$t1], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false)), (await $.wv([$t1], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), (await $.wv([$t1], "Endpos", { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true }, false)), [(await $.wv([$t1], "stMatchCase", C, false))]], C)), { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1], "Inc", [$.ref(async () => (await $.wv([$t1], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), async ($t2) => { await $.wset([$t1], "StartPos", $t2, { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }); }), (await $.wcall([$t1], "Length", [(await $.wv([$t1], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false))], C))], C)));
      await $.stmt($.wcall([$t1], "SetFocus", [], C));
      await $.wset([$t1], "SelStart", (await $.wv([$t1], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), C);
      await $.wset([$t1], "SelLength", (await $.wcall([$t1], "Length", [(await $.wv([$t1], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false))], C)), C);
      await $.tick();
    }
    await $.mcall((await $.wv([$t1], "Lines", C, false)), "EndUpdate", []);
  }
  return L0.result;
}, {"params": ["RichEdit", "SearchText"], "kind": "function", "ptypes": ["TRichEdit", "String"]});
  U.method("TAdditional_cfile", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rootnode": null, "xmlnode": null, "i": 0, "j": 0, "k": 0, "tr": 0, "sr": 0, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "OpenDialog1")), "Execute")))) {
    L0["fname"] = (await $.mv((await $.v(C, "OpenDialog1")), "FileName"));
  }
  await $.stmt((await $.mcall((await $.v(C, "XMLDocument1")), "LoadFromFile", [L0["fname"]])));
  await $.mset((await $.v(C, "XMLDocument1")), "Active", true);
  L0["rootnode"] = (await $.mv((await $.v(C, "XMLDocument1")), "DocumentElement"));
  { const $t3 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["rootnode"], "ChildNodes")), ["DocTransList"])), "ChildNodes")), "Count")), 1);
    L0["j"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["j"] = $.succ(L0["j"], 1); }
      $t4 = false;
      if (!($.ord(L0["j"]) <= $.ord($t3))) break;
      L0["fname"] = (await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["rootnode"], "ChildNodes")), ["DocTransList"])), "ChildNodes")), [L0["j"]])), "ChildNodes")), ["DocID"])), "Text"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["multi_del", [L0["fname"]]])));
      { const $t5 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["rootnode"], "ChildNodes")), ["DocTransList"])), "ChildNodes")), [L0["j"]])), "ChildNodes")), ["SynteticTransList"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t6 = true;
        for (;;) {
          if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
          $t6 = false;
          if (!($.ord(L0["i"]) <= $.ord($t5))) break;
          L0["xmlnode"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["rootnode"], "ChildNodes")), ["DocTransList"])), "ChildNodes")), [L0["j"]])), "ChildNodes")), ["SynteticTransList"])), "ChildNodes")), [L0["i"]]));
          L0["tr"] = (await $.call(C, "strtoint", [(await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlnode"], "ChildNodes")), ["TransferedAmount"])), "ChildNodes")), ["GMTrCurrency"])), "Text"))]));
          L0["sr"] = (await $.call(C, "strtoint", [(await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlnode"], "ChildNodes")), ["AccountAmount"])), "ChildNodes")), ["GMCurrency"])), "Text"))]));
          if ($.truthy($.ne(L0["tr"], L0["sr"]))) {
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [(await $.call(C, "StringOfChar", ["#", 20]))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [(await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlnode"], "ChildNodes")), ["AccountAmount"])), "ChildNodes")), ["GMAmount"])), "Text"))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [(await $.call(C, "StringOfChar", ["*", 20]))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [(await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["rootnode"], "ChildNodes")), ["DocTransList"])), "ChildNodes")), [L0["j"]])), "ChildNodes")), ["DocID"])), "Text"))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["multi_ins", [(await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["rootnode"], "ChildNodes")), ["DocTransList"])), "ChildNodes")), [L0["j"]])), "ChildNodes")), ["DocID"])), "Text")), (await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlnode"], "ChildNodes")), ["AccountAmount"])), "ChildNodes")), ["GMAmount"])), "Text")), L0["sr"]]])));
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "XMLDocument1")), "Active", false);
  await $.mcall((await $.v(C, "ToolButton3")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdditional_cfile", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t7 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t8 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t8, 1)) {
          await $.wset([$t7], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 2)) {
          await $.wset([$t7], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 3)) {
          await $.wset([$t7], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 4)) {
          await $.wset([$t7], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "ImageList1", C, false)), "Draw", [(await $.wv([$t7], "Canvas", C, false)), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t7], "DefaultDrawColumnCell", [(await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t7], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TAdditional_cfile", "DBGrid1KeyPress", async function DBGrid1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "S1")), "click", []);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdditional_cfile", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t9 = (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"));
    try {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t9], "DataMod_CARDS", C, false)), "caddi")), "SQL")), "Add", [$.add("ORDER BY ", (await $.wv([$t9], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])));
      await $.stmt($.wcall([$t9], "Refresh", [], C));
    } finally {
      await $.mset((await $.wv([$t9], "Screen", C, false)), "Cursor", (await $.wv([$t9], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TAdditional_cfile", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t10 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t10], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t11 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t11, 1)) {
          await $.wset([$t10], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t11, 2)) {
          await $.wset([$t10], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t11, 3)) {
          await $.wset([$t10], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t11, 4)) {
          await $.wset([$t10], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t10], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t10], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t10], "ImageList1", C, false)), "Draw", [(await $.wv([$t10], "Canvas", C, false)), (await $.mv((await $.wv([$t10], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t10], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t10], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t10], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t10], "DefaultDrawColumnCell", [(await $.wv([$t10], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t10], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t10], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t10], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TAdditional_cfile", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdditional_cfile", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "xml": null, "i": 0, "k": 0, "j": 0, "dt": '', "st": '', "fname": '', "fl": null, "stpos": 0, "endpos": 0, "ref": '', "pos1": 0, "num1": 0, "kk": 0, "row": 0, "arr": []};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "button1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdditional_cfile", "S1Click", async function S1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "dbgrid1"));
    const $t13 = (await $.wv([$t12], "SelectedRows", C, false));
    const $t14 = (await $.mv((await $.wv([$t12, $t13], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t12, $t13, $t14], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t12, $t13, $t14], "First", [], C));
      while ($.truthy($.not((await $.wv([$t12, $t13, $t14], "Eof", C, false))))) {
        await $.wset([$t12, $t13, $t14], "CurrentRowSelected", (await $.wv([$t12, $t13, $t14], "True", C, false)), C);
        await $.stmt($.wcall([$t12, $t13, $t14], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t12, $t13, $t14], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdditional_cfile", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t15 = (await $.v(C, "DBGrid1"));
    const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
    const $t17 = (await $.mv((await $.wv([$t15, $t16], "DataSource", C, false)), "DataSet"));
    const $t18 = (await $.wv([$t15, $t16, $t17], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t15, $t16, $t17, $t18], "Count", C, false)), 0))) {
        await $.wset([$t15, $t16, $t17, $t18], "CurrentRowSelected", (await $.wv([$t15, $t16, $t17, $t18], "True", C, false)), C);
      }
      { const $t19 = $.sub((await $.wv([$t15, $t16, $t17, $t18], "Count", C, false)), 1);
        await $.wset([$t15, $t16, $t17, $t18], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t20 = true;
        for (;;) {
          if (!$t20) { await $.wset([$t15, $t16, $t17, $t18], "Index", $.succ((await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t20 = false;
          if (!($.ord((await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t19))) break;
          await $.stmt((await $.wcall([$t15, $t16, $t17, $t18], "GotoBookmark", [(await $.wcall([$t15, $t16, $t17, $t18], "Pointer", [(await $.idx((await $.wv([$t15, $t16, $t17, $t18], "Items", C, false)), [(await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t15, $t16, $t17, $t18], "TransactionID", (await $.mv((await $.wcall([$t15, $t16, $t17, $t18], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t15, $t16, $t17, $t18], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t21 = (await $.wcall([$t15, $t16, $t17, $t18], "MessageDlg", [(await $.wcall([$t15, $t16, $t17, $t18], "Format", ["Əmaliyyat təsdiq edilsin? №", [(await $.wv([$t15, $t16, $t17, $t18], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t15, $t16, $t17, $t18], "mtConfirmation", C, false)), [(await $.wv([$t15, $t16, $t17, $t18], "mbYes", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbNo", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbCancel", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t21, (await $.wv([$t15, $t16, $t17, $t18], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t21, (await $.wv([$t15, $t16, $t17, $t18], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t21, (await $.wv([$t15, $t16, $t17, $t18], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t15, $t16, $t17, $t18], "MessageDlg", [(await $.wcall([$t15, $t16, $t17, $t18], "Format", ["%d  sayda əməliyyat təsdiq edildi?", [$.sub((await $.wv([$t15, $t16, $t17, $t18], "Count", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t15, $t16, $t17, $t18], "mtConfirmation", C, false)), [(await $.wv([$t15, $t16, $t17, $t18], "mbYes", C, false)), (await $.wv([$t15, $t16, $t17, $t18], "mbCancel", C, false))], 0], C)), (await $.wv([$t15, $t16, $t17, $t18], "mrYes", C, false))))) {
                  await $.wset([$t15, $t16, $t17, $t18], "WaitNextConfirm", (await $.wv([$t15, $t16, $t17, $t18], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t15, $t16, $t17, $t18], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t15, $t16, $t17, $t18], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_multi", [(await $.wv([$t15, $t16, $t17, $t18], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t15, $t16, $t17, $t18], "WillRefresh", (await $.wv([$t15, $t16, $t17, $t18], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t15, $t16, $t17, $t18], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.wv([$t15, $t16, $t17, $t18], "ToolButton3", C, false)), "Click", []);
        await $.stmt((await $.wcall([$t15, $t16, $t17, $t18], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdditional_cfile", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dbgrid1")), "DataSource")), "DataSet")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dbgrid1")), "DataSource")), "DataSet")), "open", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dbgrid2")), "DataSource")), "DataSet")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dbgrid2")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

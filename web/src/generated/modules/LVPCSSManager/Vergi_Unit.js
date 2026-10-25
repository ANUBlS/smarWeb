// Generated from Vergi_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Vergi_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "ImgList", "StdCtrls", "ComCtrls", "Grids", "DBGrids", "ToolWin", "sboapiDataModuleImpl", "FileCtrl", "ExtCtrls", "Data_Unit"]);
  const C = [U];
  U.defClass("TVergiForm", "TForm", {"coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "listbox1": {"name": "ListBox1", "type": "TListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TStringField"}, "oracledataset1bosh": {"name": "OracleDataSet1BOSH", "type": "TStringField"}, "oracledataset1tek": {"name": "OracleDataSet1TEK", "type": "TStringField"}, "oracledataset1uch": {"name": "OracleDataSet1UCH", "type": "TStringField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TStringField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TStringField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TStringField"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "oracledataset6": {"name": "OracleDataSet6", "type": "TOracleDataSet"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("VergiForm", null, "TVergiForm");
  });
  U.method("TVergiForm", "LoadFileNames", async function LoadFileNames(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dir": $.copyArg(p0), result: false, "currdir": '', "fileinfo": null, "filedir": '', "fileattrs": 0};
  await $.fixArgs(L0, ["dir"]);
  L0["currdir"] = (await $.v(C, "GetCurrentDir"));
  try {
    L0["filedir"] = L0["dir"];
    if ($.truthy((await $.call(C, "DirectoryExists", [L0["filedir"]])))) {
      await $.stmt((await $.call(C, "ChDir", [L0["filedir"]])));
    } else {
      await $.stmt((await $.call(C, "MessageDlg", [$.add($.add("Directory ", L0["filedir"]), " not Exists!"), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
      L0["result"] = false;
      return L0.result;
    }
    L0["fileattrs"] = (await $.call(C, "Integer", [(await $.v(C, "faReadOnly"))]));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faHidden")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faSysFile")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faVolumeID")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faDirectory")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faArchive")));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "VergiForm")), "ListBox1")), "Items")), "Clear", []);
    if ($.truthy($.eq((await $.call(C, "FindFirst", ["*.xml", L0["fileattrs"], $.ref(async () => L0["fileinfo"], async ($t1) => { L0["fileinfo"] = $t1; })])), 0))) {
      do {
        if ($.truthy($.eq(((await $.and_((await $.mv(L0["fileinfo"], "Attr")), async () => L0["fileattrs"]))), (await $.mv(L0["fileinfo"], "Attr"))))) {
          await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "VergiForm")), "ListBox1")), "Items")), "Add", [(await $.mv(L0["fileinfo"], "Name"))])));
        }
        await $.tick();
      } while (!$.truthy($.ne((await $.call(C, "FindNext", [$.ref(async () => L0["fileinfo"], async ($t2) => { L0["fileinfo"] = $t2; })])), 0)));
      await $.stmt((await $.call(C, "FindClose", [$.ref(async () => L0["fileinfo"], async ($t3) => { L0["fileinfo"] = $t3; })])));
    }
  } finally {
    await $.stmt((await $.call(C, "ChDir", [L0["currdir"]])));
  }
  L0["result"] = false;
  return L0.result;
}, {"params": ["Dir"], "kind": "function", "ptypes": ["String"]});
  U.method("TVergiForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Refresh", []);
  await $.stmt((await $.call(C, "LoadFileNames", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "fieldbyname", ["ver_dir"])), "AsString"))])));
  await $.mcall((await $.v(C, "ListBox1")), "Update", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVergiForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Refresh", []);
  await $.stmt((await $.call(C, "LoadFileNames", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "fieldbyname", ["ver_dir"])), "AsString"))])));
  await $.mcall((await $.v(C, "ListBox1")), "Update", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TVergiForm", "LoadToRich", async function LoadToRich(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), result: '', "stpos": 0, "endpos": 0, "ref": ''};
  await $.fixArgs(L0, ["filename"]);
  await $.mcall((await $.v(C, "RichEdit1")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [L0["filename"]])));
  L0["stpos"] = (await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["<treasury>", 0, (await $.mv((await $.v(C, "RichEdit1")), "GetTextLen")), [(await $.v(C, "stMatchCase"))]]));
  L0["endpos"] = (await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["</treasury>", 0, (await $.mv((await $.v(C, "RichEdit1")), "GetTextLen")), [(await $.v(C, "stMatchCase"))]]));
  await $.mset((await $.v(C, "RichEdit1")), "SelStart", $.add(L0["stpos"], (await $.call(C, "length", ["<treasury>"]))));
  await $.mset((await $.v(C, "RichEdit1")), "SelLength", $.sub((await $.call(C, "abs", [$.sub(L0["endpos"], L0["stpos"])])), (await $.call(C, "length", ["</treasury>"]))));
  L0["ref"] = (await $.mv((await $.v(C, "RichEdit1")), "SelText"));
  L0["result"] = L0["ref"];
  return L0.result;
}, {"params": ["FileName"], "kind": "function", "ptypes": ["String"]});
  U.method("TVergiForm", "ConvertToBase", async function ConvertToBase(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rich": $.copyArg(p0), "ref": $.copyArg(p1), result: undefined, "startpos": 0, "endpos": 0, "fnstartpos": 0, "fnendpos": 0, "p": 0, "temppos": 0, "templine": 0, "lineindex": 0, "tempvar": 0, "stmessage": '', "s": '', "text1": '', "text2": '', "i": 0, "j": 0, "k": 0, "say": 0, "g": 0, "ss": $.sarr(), "dataset": null};
  await $.fixArgs(L0, ["rich", "ref"]);
  try {
    L0["i"] = 6;
    if ($.truthy($.eq((await $.mv(L0["rich"], "GetTextLen")), 0))) {
      return L0.result;
    }
    L0["startpos"] = 0;
    { const $t4 = 3;
      L0["say"] = 1;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["say"] = $.succ(L0["say"], 1); }
        $t5 = false;
        if (!($.ord(L0["say"]) <= $.ord($t4))) break;
        if ($.truthy($.eq(L0["say"], 1))) {
          L0["dataset"] = (await $.v(C, "OracleDataSet1"));
          { const $t6 = await $.iset(L0["ss"], [1], "<institution name=\""); if ($t6 !== undefined) { L0["ss"] = $t6; } }
          L0["s"] = "</institutions>";
        }
        if ($.truthy($.eq(L0["say"], 2))) {
          L0["dataset"] = (await $.v(C, "OracleDataSet2"));
          { const $t7 = await $.iset(L0["ss"], [1], "<destination name=\">"); if ($t7 !== undefined) { L0["ss"] = $t7; } }
          L0["s"] = "</destinations>";
        }
        if ($.truthy($.eq(L0["say"], 3))) {
          L0["dataset"] = (await $.v(C, "OracleDataSet3"));
          { const $t8 = await $.iset(L0["ss"], [1], "<level name=\""); if ($t8 !== undefined) { L0["ss"] = $t8; } }
          L0["s"] = "</budget_levels>";
        }
        { const $t9 = await $.iset(L0["ss"], [2], "code=\""); if ($t9 !== undefined) { L0["ss"] = $t9; } }
        { const $t10 = await $.iset(L0["ss"], [3], "inn=\""); if ($t10 !== undefined) { L0["ss"] = $t10; } }
        while ($.truthy($.ne(L0["stmessage"], L0["s"]))) {
          L0["k"] = 1;
          if ($.truthy((await $.or_(($.eq((await $.mv(L0["dataset"], "Name")), "OracleDataSet1")), async () => ($.eq((await $.mv(L0["dataset"], "Name")), "OracleDataSet3")))))) {
            L0["j"] = $.add((await $.call(C, "length", [(await $.idx(L0["ss"], [L0["k"]]))])), 2);
          }
          if ($.truthy($.eq((await $.mv(L0["dataset"], "Name")), "OracleDataSet2"))) {
            L0["j"] = (await $.call(C, "length", [(await $.idx(L0["ss"], [L0["k"]]))]));
          }
          L0["text1"] = "";
          await $.mcall(L0["dataset"], "Insert", []);
          L0["stmessage"] = (await $.idx((await $.mv(L0["rich"], "Lines")), [L0["i"]]));
          while ($.truthy($.le(L0["j"], (await $.call(C, "length", [L0["stmessage"]]))))) {
            if ($.truthy($.ne((await $.idx(L0["stmessage"], [L0["j"]])), "\""))) {
              L0["text1"] = $.add(L0["text1"], (await $.idx(L0["stmessage"], [L0["j"]])));
              await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["j"], async ($t11) => { L0["j"] = $t11; })])));
            } else {
              if ($.truthy($.eq(L0["k"], 1))) {
                if ($.truthy($.eq(L0["say"], 2))) {
                  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["id"])), "AsInteger", (await $.call(C, "StrToInt", [L0["text1"]])));
                } else {
                  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["Name"])), "AsString", L0["text1"]);
                }
                L0["text2"] = L0["text1"];
                L0["stmessage"] = (await $.call(C, "copy", [L0["stmessage"], $.add(L0["j"], 1), (await $.call(C, "length", [L0["stmessage"]]))]));
              }
              if ($.truthy($.eq(L0["k"], 2))) {
                if ($.truthy($.eq(L0["say"], 2))) {
                  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["Name"])), "AsString", L0["text1"]);
                } else {
                  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["id"])), "AsVariant", L0["text1"]);
                }
                await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["DESCRIPTION"])), "AsString", $.add($.add(L0["text1"], "-"), L0["text2"]));
                L0["stmessage"] = (await $.call(C, "copy", [L0["stmessage"], $.add(L0["j"], 1), (await $.call(C, "length", [L0["stmessage"]]))]));
              }
              if ($.truthy($.eq(L0["k"], 3))) {
                L0["text1"] = (await $.call(C, "stringReplace", [L0["stmessage"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
                L0["g"] = (await $.call(C, "pos", ["\"", L0["text1"]]));
                await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["text1"], async ($t12) => { L0["text1"] = $t12; }), 1, L0["g"]])));
                L0["g"] = (await $.call(C, "pos", ["\"", L0["text1"]]));
                await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["text1"], async ($t13) => { L0["text1"] = $t13; }), L0["g"], (await $.call(C, "length", [L0["text1"]]))])));
                await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["TEK"])), "AsString", L0["text1"]);
              }
              if ($.truthy($.eq(L0["stmessage"], "/>"))) {
                break;
              }
              await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["k"], async ($t14) => { L0["k"] = $t14; })])));
              if ($.truthy($.eq((await $.mv(L0["dataset"], "Name")), "OracleDataSet2"))) {
                L0["j"] = $.add((await $.call(C, "length", [(await $.idx(L0["ss"], [L0["k"]]))])), 2);
              } else {
                L0["j"] = $.add((await $.call(C, "length", [(await $.idx(L0["ss"], [L0["k"]]))])), 2);
              }
              L0["text1"] = "";
            }
            await $.tick();
          }
          await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t15) => { L0["i"] = $t15; })])));
          await $.tick();
        }
        await $.tick();
      }
    }
  } finally {
    await $.mcall(L0["dataset"], "Post", []);
  }
  return L0.result;
}, {"params": ["Rich", "ref"], "kind": "procedure", "ptypes": ["TRichEdit", "String"]});
  U.method("TVergiForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ref": '', "errstr": '', "filedir": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet4")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet5")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet5")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet6")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet6")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Refresh", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Refresh", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    L0["ref"] = "";
    L0["filedir"] = $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["ver_dir"])), "AsString")), "\\");
    { const $t16 = $.sub((await $.mv((await $.mv((await $.v(C, "ListBox1")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t17 = true;
      for (;;) {
        if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
        $t17 = false;
        if (!($.ord(L0["i"]) <= $.ord($t16))) break;
        L0["ref"] = (await $.call(C, "LoadToRich", [$.add(L0["filedir"], (await $.idx((await $.mv((await $.v(C, "ListBox1")), "Items")), [L0["i"]])))]));
        if ($.truthy($.ne(L0["ref"], "0"))) {
          await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
          await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
          await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
          await $.stmt((await $.call(C, "ConvertToBase", [(await $.v(C, "RichEdit1")), L0["ref"]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Clear", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

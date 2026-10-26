// Generated from INSWordExporter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("INSWordExporter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "WordXp", "ComObj", "OleServer"]);
  const C = [U];
  U.defClass("TINSWordExporter", "TComponent", {"ffilename": {"name": "FFileName", "type": "OleVariant"}, "fwordapl": {"name": "FWordApl", "type": "variant"}}, {"filename": {"name": "FileName", "read": "GetFileName", "write": "SetFileName"}});
  U.init(async () => {
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Smart", [(await $.v(C, "TINSWordExporter"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TINSWordExporter", "WordSearch", async function WordSearch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), result: undefined, "what": null, "which": null, "count": null, "name": null};
  await $.fixArgs(L0, ["data"]);
  L0["what"] = (-(1));
  L0["name"] = L0["data"];
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FWordApl")), "Selection")), "GoTo", [L0["what"], L0["which"], L0["count"], L0["name"]])));
  return L0.result;
}, {"params": ["data"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TINSWordExporter", "WordInsert", async function WordInsert(Self, p0, p1, p2, p3, p4, p5, p6, p7) {
  const C = $.chain(Self, U);
  const L0 = {"info": $.copyArg(p0), "_bold": $.copyArg(p1), "_italic": $.copyArg(p2), "_strikethrough": $.copyArg(p3), "_underline": $.copyArg(p4), "_size": $.copyArg(p5), "_name": $.copyArg(p6), "_center": $.copyArg(p7), result: undefined};
  await $.fixArgs(L0, ["info", "_bold", "_italic", "_strikethrough", "_underline", "_size", "_name", "_center"]);
  try {
    if ($.truthy(L0["_bold"])) {
      await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "Font")), "Bold", 5);
    }
    await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "Font")), "italic", L0["_italic"]);
    await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "Font")), "StrikeThrough", L0["_strikethrough"]);
    await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "Font")), "Underline", L0["_underline"]);
    await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "Font")), "Size", L0["_size"]);
    await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "Font")), "Name", L0["_name"]);
    if ($.truthy($.eq(L0["_center"], true))) {
      await $.mset((await $.mv((await $.mv((await $.v(C, "FWordApl")), "Selection")), "ParagraphFormat")), "Alignment", 1);
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "FWordApl")), "selection")), "TypeText", [L0["info"]])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
  }
  return L0.result;
}, {"params": ["info", "_bold", "_italic", "_StrikeThrough", "_Underline", "_Size", "_Name", "_center"], "kind": "procedure", "ptypes": ["String", "boolean", "boolean", "boolean", "boolean", "integer", "String", "boolean"]});
  U.method("TINSWordExporter", "SetFileName", async function SetFileName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["name"]);
  if ($.truthy($.ne(L0["name"], ""))) {
    await $.set(C, "FFileName", L0["name"]);
  }
  return L0.result;
}, {"params": ["Name"], "kind": "procedure", "ptypes": ["TFileName"]});
  U.method("TINSWordExporter", "GetFileName", async function GetFileName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "String", [(await $.v(C, "FFileName"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TINSWordExporter", "Close", async function Close(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TINSWordExporter", "SetBookmark", async function SetBookmark(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), "fontbold": $.copyArg(p2), "fontitalic": $.copyArg(p3), "fontstrikethrough": $.copyArg(p4), "fontunderline": $.copyArg(p5), "fontsize": $.copyArg(p6), "fontname": $.copyArg(p7), "fontcenter": $.copyArg(p8), result: undefined};
  await $.fixArgs(L0, ["name", "value", "fontbold", "fontitalic", "fontstrikethrough", "fontunderline", "fontsize", "fontname", "fontcenter"]);
  if ($.truthy((await $.or_(($.eq(L0["name"], "")), async () => ($.eq(L0["value"], "")))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "WordSearch", [L0["name"]])));
  await $.stmt((await $.call(C, "WordInsert", [L0["value"], L0["fontbold"], L0["fontitalic"], L0["fontstrikethrough"], L0["fontunderline"], L0["fontsize"], L0["fontname"], L0["fontcenter"]])));
  return L0.result;
}, {"params": ["Name", "Value", "FontBold", "FontItalic", "FontStrikeThrough", "FontUnderline", "FontSize", "FontName", "FontCenter"], "kind": "procedure", "ptypes": ["String", "String", "boolean", "boolean", "boolean", "boolean", "integer", "String", "boolean"]});
  U.method("TINSWordExporter", "Show", async function Show(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "FWordApl")), "Visible", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TINSWordExporter", "Paste", async function Paste(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FWordApl")), "Selection")), "PasteAndFormat", [1])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TINSWordExporter", "Open", async function Open(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"show": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["show"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  await $.set(C, "FWordApl", (await $.call(C, "CreateoleObject", ["Word.Application"])));
  try {
    if ($.truthy(L0["show"])) {
      await $.mcall(Self, "Show", []);
    }
  } catch ($t2) {
    $.rethrowControl($t2);
    if ($.excIs($t2, "EOleException")) {
      L0["e"] = $.exc($t2);
      { const $t3 = (await $.mv(L0["e"], "ErrorCode"));
        if ($.eq($t3, 2)) {
          await $.stmt((await $.call(C, "ShowMessage", ["File not found!"])));
        }
        else if ($.eq($t3, 3)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Wrong file name!"])));
        }
        else if ($.eq($t3, 4)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Too many open files!"])));
        }
        else if ($.eq($t3, 5)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Access denied!"])));
        }
        else if ($.eq($t3, 100)) {
          await $.stmt((await $.call(C, "ShowMessage", ["EOF!"])));
        }
        else if ($.eq($t3, 101)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Disk full!"])));
        }
        else if ($.eq($t3, 106)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Invalid input!"])));
        }
      }
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.stmt($.call(C, "Close", []));
    }
    else { throw $t2; }
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  return L0.result;
}, {"params": ["Show"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TINSWordExporter", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"owner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["owner"]);
  await $.inherited(Self, "TINSWordExporter", "Create", [L0["owner"]], arguments);
  return L0.result;
}, {"params": ["Owner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TINSWordExporter", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "Close", [])));
  await $.inherited(Self, "TINSWordExporter", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  return U;
}

// Generated from QRExpBld.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("QRExpBld", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "QRExpr", "QR5Const", "QRPrntr", "QRExtra", "Buttons", "DB", "QREnvEd"]);
  const C = [U];
  U.defClass("TQRExpressionBuilder", "TForm", {"mainpage": {"name": "MainPage", "type": "TPanel"}, "datafieldpage": {"name": "DataFieldPage", "type": "TPanel"}, "functionpage": {"name": "FunctionPage", "type": "TPanel"}, "funcparamspage": {"name": "FuncParamsPage", "type": "TPanel"}, "heading": {"name": "Heading", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "insertdatafieldbtn": {"name": "InsertDataFieldBtn", "type": "TButton"}, "insertfunctionbtn": {"name": "InsertFunctionBtn", "type": "TButton"}, "insertvariablebtn": {"name": "InsertVariableBtn", "type": "TButton"}, "addplus": {"name": "AddPlus", "type": "TButton"}, "addminus": {"name": "AddMinus", "type": "TButton"}, "addmul": {"name": "AddMul", "type": "TButton"}, "adddiv": {"name": "AddDiv", "type": "TButton"}, "addequal": {"name": "AddEqual", "type": "TButton"}, "addsmaller": {"name": "AddSmaller", "type": "TButton"}, "addlarger": {"name": "AddLarger", "type": "TButton"}, "addnotequal": {"name": "AddNotEqual", "type": "TButton"}, "addlessequal": {"name": "AddLessEqual", "type": "TButton"}, "addgreaterequal": {"name": "AddGreaterEqual", "type": "TButton"}, "addnot": {"name": "AddNot", "type": "TButton"}, "addand": {"name": "AddAnd", "type": "TButton"}, "addor": {"name": "AddOr", "type": "TButton"}, "validatebtn": {"name": "ValidateBtn", "type": "TButton"}, "clear": {"name": "Clear", "type": "TButton"}, "ok": {"name": "OK", "type": "TButton"}, "cancel": {"name": "Cancel", "type": "TButton"}, "datafieldokbtn": {"name": "DataFieldOKBtn", "type": "TButton"}, "datafieldcancelbtn": {"name": "DataFieldCancelBtn", "type": "TButton"}, "datafieldgb": {"name": "DataFieldGB", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dataset": {"name": "DataSet", "type": "TComboBox"}, "datafield": {"name": "DataField", "type": "TListBox"}, "functionokbtn": {"name": "FunctionOKBtn", "type": "TButton"}, "functioncancelbtn": {"name": "FunctionCancelBtn", "type": "TButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "availablefields": {"name": "AvailableFields", "type": "TListBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "categories": {"name": "Categories", "type": "TListBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "availablefunc": {"name": "AvailableFunc", "type": "TListBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "funcname": {"name": "FuncName", "type": "TLabel"}, "funcdescription": {"name": "FuncDescription", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "copyfuncname": {"name": "CopyFuncName", "type": "TLabel"}, "copyfuncdescription": {"name": "CopyFuncDescription", "type": "TLabel"}, "funcparamsb": {"name": "FuncParamSB", "type": "TScrollBox"}, "funcparamokbtn": {"name": "FuncParamOkBtn", "type": "TButton"}, "funcargcancelbtn": {"name": "FuncArgCancelBtn", "type": "TButton"}, "availabledatasets": {"name": "AvailableDatasets", "type": "TListBox"}, "variablepage": {"name": "VariablePage", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "variableokbtn": {"name": "VariableOKBtn", "type": "TButton"}, "variablecancelbtn": {"name": "VariableCancelBtn", "type": "TButton"}, "availablevariables": {"name": "AvailableVariables", "type": "TListBox"}, "variablevalue": {"name": "VariableValue", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "modifyvariables": {"name": "ModifyVariables", "type": "TButton"}, "toppanel": {"name": "TopPanel", "type": "TPanel"}, "topimage": {"name": "TopImage", "type": "TImage"}, "label8": {"name": "Label8", "type": "TLabel"}, "shape1": {"name": "Shape1", "type": "TShape"}, "expr": {"name": "Expr", "type": "TEdit"}, "ffuncparamsresult": {"name": "FFuncParamsResult", "type": "integer"}, "ffuncresult": {"name": "FFuncResult", "type": "integer"}, "fdatafieldresult": {"name": "FDatafieldResult", "type": "integer"}, "fexprresult": {"name": "FExprResult", "type": "integer"}, "fdatasetform": {"name": "FDatasetForm", "type": "TCustomForm"}, "fvariableresult": {"name": "FVariableResult", "type": "integer"}, "flocalenvironment": {"name": "FLocalEnvironment", "type": "TQREvEnvironment"}, "cancelled": {"name": "Cancelled", "type": "boolean"}}, {"datasetform": {"name": "DatasetForm", "read": "FDatasetForm", "write": "FDatasetForm"}, "localenvironment": {"name": "LocalEnvironment", "read": "FLocalEnvironment", "write": "FLocalEnvironment"}});
  U.defClass("TWordWrapEdit", "TEdit", {}, {});
  U.init(async () => {
  });
  U.func("TrimExpr", async function TrimExpr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aexpr": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["aexpr"]);
  while ($.truthy($.gt((await $.call(C, "pos", ["\r", L0["aexpr"]])), 0))) {
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["aexpr"], async ($t1) => { L0["aexpr"] = $t1; }), (await $.call(C, "Pos", ["\r", L0["aexpr"]])), 2])));
    await $.tick();
  }
  L0["result"] = L0["aexpr"];
  return L0.result;
}, {"params": ["AExpr"], "kind": "function", "ptypes": ["String"]});
  U.func("GetExpression", async function GetExpression(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"acaption": $.copyArg(p0), "value": $.asRef(p1), "adatasetform": $.copyArg(p2), "aparentcontrol": $.copyArg(p3), "alocalenvironment": $.copyArg(p4), result: false};
  await $.fixArgs(L0, ["acaption", "adatasetform", "aparentcontrol", "alocalenvironment"]);
  {
    const $t2 = (await $.mcall((await $.v(C, "TQRExpressionBuilder")), "Create", [(await $.v(C, "Application"))]));
    try {
      await $.wset([$t2], "DatasetForm", (await $.wv([$t2], "ADatasetForm", { get: async () => L0["adatasetform"], set: async (v) => { L0["adatasetform"] = v; }, local: true }, false)), C);
      await $.wset([$t2], "LocalEnvironment", (await $.wv([$t2], "ALocalEnvironment", { get: async () => L0["alocalenvironment"], set: async (v) => { L0["alocalenvironment"] = v; }, local: true }, false)), C);
      if ($.truthy($.ne((await $.wv([$t2], "AParentControl", { get: async () => L0["aparentcontrol"], set: async (v) => { L0["aparentcontrol"] = v; }, local: true }, false)), null))) {
        await $.wset([$t2], "Parent", (await $.wv([$t2], "AParentControl", { get: async () => L0["aparentcontrol"], set: async (v) => { L0["aparentcontrol"] = v; }, local: true }, false)), C);
        await $.wset([$t2], "Top", 0, C);
        await $.wset([$t2], "Left", 0, C);
        await $.wset([$t2], "BorderStyle", (await $.wv([$t2], "bsNone", C, false)), C);
        await $.stmt($.wcall([$t2], "PickDatasets", [], C));
        await $.stmt($.wcall([$t2], "PickVariables", [], C));
        await $.wset([$t2], "Position", (await $.wv([$t2], "poDesigned", C, false)), C);
      }
      if ($.truthy($.ne((await $.wv([$t2], "ACaption", { get: async () => L0["acaption"], set: async (v) => { L0["acaption"] = v; }, local: true }, false)), ""))) {
        await $.mset((await $.wv([$t2], "Heading", C, false)), "Caption", (await $.wv([$t2], "ACaption", { get: async () => L0["acaption"], set: async (v) => { L0["acaption"] = v; }, local: true }, false)));
      }
      await $.mset((await $.wv([$t2], "Expr", C, false)), "Text", (await $.wv([$t2], "Value", { get: async () => await L0["value"].get(), set: async (v) => { await L0["value"].set(v); }, local: true }, false)));
      await $.mset((await $.wv([$t2], "Expr", C, false)), "SelStart", 0);
      await $.mset((await $.wv([$t2], "Expr", C, false)), "SelLength", (await $.wcall([$t2], "Length", [(await $.wv([$t2], "Value", { get: async () => await L0["value"].get(), set: async (v) => { await L0["value"].set(v); }, local: true }, false))], C)));
      await $.wset([$t2], "FExprResult", 0, C);
      await $.mcall((await $.wv([$t2], "MainPage", C, false)), "BringToFront", []);
      await $.wset([$t2], "Cancelled", (await $.wv([$t2], "false", C, false)), C);
      if ($.truthy($.eq((await $.wv([$t2], "Parent", C, false)), null))) {
        await $.stmt($.wcall([$t2], "ShowModal", [], C));
      } else {
        await $.stmt($.wcall([$t2], "Show", [], C));
        do {
          await $.mcall((await $.wv([$t2], "Application", C, false)), "HandleMessage", []);
          await $.tick();
        } while (!$.truthy((await $.or_(($.ne((await $.wv([$t2], "FExprResult", C, false)), 0)), async () => ((await $.wv([$t2], "Cancelled", C, false)))))));
      }
      await $.wset([$t2], "Result", $.eq((await $.wv([$t2], "FExprResult", C, false)), 1), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy((await $.wv([$t2], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
        await $.wset([$t2], "Value", (await $.wcall([$t2], "TrimExpr", [(await $.mv((await $.wv([$t2], "Expr", C, false)), "Text"))], C)), { get: async () => await L0["value"].get(), set: async (v) => { await L0["value"].set(v); }, local: true });
      } else {
        await $.wset([$t2], "Value", "", { get: async () => await L0["value"].get(), set: async (v) => { await L0["value"].set(v); }, local: true });
      }
    } finally {
      await $.stmt($.wcall([$t2], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["ACaption", "Value", "ADataSetForm", "AParentControl", "ALocalEnvironment"], "kind": "function", "ptypes": ["String", "String", "TCustomForm", "TWinControl", "TQREvEnvironment"]});
  U.method("TWordWrapEdit", "CreateParams", async function CreateParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.asRef(p0), result: undefined};
  L0["wordwraps"] = [0, (await $.v(C, "ES_AUTOHSCROLL"))];
  await $.inherited(Self, "TWordWrapEdit", "CreateParams", [(await L0["params"].get())], arguments);
  {
    const $t3 = (await L0["params"].get());
    await $.wset([$t3], "Style", (await $.or_((await $.and_((await $.wv([$t3], "Style", C, false)), async () => $.not((await $.idx((await $.wv([$t3], "WordWraps", { get: async () => L0["wordwraps"], set: async (v) => { L0["wordwraps"] = v; }, local: true }, false)), [(await $.wv([$t3], "True", C, false))]))))), async () => (await $.wv([$t3], "ES_MULTILINE", C, false)))), C);
  }
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TCreateParams"]});
  U.method("TQRExpressionBuilder", "InsertDataFieldBtnClick", async function InsertDataFieldBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "afield": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MainPage")), "Enabled", false);
  if ($.truthy((await $.call(C, "GetDatafield", [$.ref(async () => L0["afield"], async ($t4) => { L0["afield"] = $t4; })])))) {
    await $.mset((await $.v(C, "MainPage")), "Enabled", true);
    await $.stmt((await $.call(C, "InsertText", [L0["afield"]])));
  } else {
    await $.mset((await $.v(C, "MainPage")), "Enabled", true);
  }
  await $.mcall((await $.v(C, "MainPage")), "BringToFront", []);
  await $.mcall((await $.v(C, "Expr")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "DataFieldCancelBtnClick", async function DataFieldCancelBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FDatafieldResult", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "DataFieldOKBtnClick", async function DataFieldOKBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FDatafieldResult", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FunctionOKBtnClick", async function FunctionOKBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FFuncResult", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "CategoriesClick", async function CategoriesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetFunctionsCat", [(await $.mv((await $.v(C, "Categories")), "ItemIndex"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "GetFunctionsCat", async function GetFunctionsCat(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["index"]);
  await $.mcall((await $.mv((await $.v(C, "AvailableFunc")), "Items")), "Clear", []);
  { const $t5 = $.sub((await $.mv((await $.mv((await $.v(C, "QRFunctionLibrary")), "EntryList")), "Count")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      {
        const $t7 = (await $.call(C, "TQRLibraryEntry", [(await $.idx((await $.mv((await $.v(C, "QRFunctionLibrary")), "Entry")), [L0["i"]]))]));
        if ($.truthy((await $.or_(($.eq((await $.wv([$t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 0)), async () => ($.eq((await $.wcall([$t7], "StrToInt", [(await $.wcall([$t7], "Copy", [(await $.wv([$t7], "Data", C, false)), 1, 1], C))], C)), (await $.wv([$t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))))))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "AvailableFunc", C, false)), "Items")), "AddObject", [(await $.wv([$t7], "Name", C, false)), (await $.wcall([$t7], "TQRLibraryEntry", [(await $.idx((await $.mv((await $.wv([$t7], "QRFunctionLibrary", C, false)), "Entry")), [(await $.wv([$t7], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
        }
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "SelectFunc", [0])));
  return L0.result;
}, {"params": ["Index"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TQRExpressionBuilder", "SelectFunc", async function SelectFunc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: undefined, "atext": ''};
  await $.fixArgs(L0, ["index"]);
  if ($.truthy(($.lt(L0["index"], (await $.mv((await $.mv((await $.v(C, "AvailableFunc")), "Items")), "Count")))))) {
    L0["atext"] = (await $.mv((await $.call(C, "TQRLibraryEntry", [(await $.idx((await $.mv((await $.mv((await $.v(C, "AvailableFunc")), "Items")), "Objects")), [L0["index"]]))])), "Description"));
    await $.mset((await $.v(C, "FuncName")), "Caption", (await $.call(C, "copy", [L0["atext"], 1, $.sub((await $.call(C, "AnsiPos", ["|", L0["atext"]])), 1)])));
    await $.mset((await $.v(C, "FuncDescription")), "Caption", (await $.call(C, "copy", [L0["atext"], $.add((await $.call(C, "AnsiPos", ["|", L0["atext"]])), 1), (await $.call(C, "Length", [L0["atext"]]))])));
  } else {
    await $.mset((await $.v(C, "FuncDescription")), "Caption", "");
    await $.mset((await $.v(C, "FuncName")), "Caption", "");
  }
  return L0.result;
}, {"params": ["Index"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TQRExpressionBuilder", "AvailableFuncClick", async function AvailableFuncClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SelectFunc", [(await $.mv((await $.v(C, "AvailableFunc")), "ItemIndex"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetFunctionsCat", [0])));
  await $.set(C, "Expr", (await $.mcall((await $.v(C, "TWordWrapEdit")), "Create", [Self])));
  {
    const $t8 = (await $.v(C, "Expr"));
    await $.wset([$t8], "AutoSize", (await $.wv([$t8], "false", C, false)), C);
    await $.wset([$t8], "Parent", (await $.wv([$t8], "MainPage", C, false)), C);
    await $.wset([$t8], "Top", 36, C);
    await $.wset([$t8], "Left", 20, C);
    await $.wset([$t8], "Width", 341, C);
    await $.wset([$t8], "Height", 91, C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "GetFunc", async function GetFunc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"func": $.asRef(p0), result: false, "allarguments": '', "arguments": ''};
  await $.mset((await $.v(C, "FunctionPage")), "Enabled", true);
  await $.mcall((await $.v(C, "FunctionPage")), "BringToFront", []);
  await $.set(C, "FFuncResult", 0);
  do {
    await $.mcall((await $.v(C, "Application")), "HandleMessage", []);
    await $.tick();
  } while (!$.truthy($.ne((await $.v(C, "FFuncResult")), 0)));
  if ($.truthy($.eq((await $.v(C, "FFuncResult")), 1))) {
    L0["result"] = true;
    if ($.truthy((await $.and_(($.ge((await $.mv((await $.v(C, "AvailableFunc")), "ItemIndex")), 0)), async () => ($.le((await $.mv((await $.v(C, "AvailableFunc")), "ItemIndex")), $.sub((await $.mv((await $.mv((await $.v(C, "AvailableFunc")), "Items")), "Count")), 1))))))) {
      {
        const $t9 = (await $.call(C, "TQRLibraryEntry", [(await $.idx((await $.mv((await $.mv((await $.v(C, "AvailableFunc")), "Items")), "Objects")), [(await $.mv((await $.v(C, "AvailableFunc")), "ItemIndex"))]))]));
        await $.wset([$t9], "Func", (await $.wv([$t9], "Name", C, false)), { get: async () => await L0["func"].get(), set: async (v) => { await L0["func"].set(v); }, local: true });
        await $.wset([$t9], "Arguments", (await $.wv([$t9], "Data", C, false)), { get: async () => L0["arguments"], set: async (v) => { L0["arguments"] = v; }, local: true });
      }
    }
    if ($.truthy($.gt((await $.call(C, "Length", [L0["arguments"]])), 1))) {
      await $.mset((await $.v(C, "FunctionPage")), "Enabled", false);
      if ($.truthy((await $.call(C, "GetParams", [(await $.call(C, "Copy", [L0["arguments"], 2, (await $.call(C, "length", [L0["arguments"]]))])), $.ref(async () => L0["allarguments"], async ($t10) => { L0["allarguments"] = $t10; })])))) {
        await L0["func"].set($.add($.add($.add((await L0["func"].get()), "("), L0["allarguments"]), ")"));
      } else {
        L0["result"] = false;
      }
      await $.mset((await $.v(C, "FunctionPage")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "FunctionPage")), "BringToFront", []);
  } else {
    L0["result"] = false;
  }
  if ($.truthy($.not(L0["result"]))) {
    await L0["func"].set("");
  }
  await $.mset((await $.v(C, "FunctionPage")), "Enabled", false);
  return L0.result;
}, {"params": ["Func"], "kind": "function", "ptypes": ["String"]});
  U.method("TQRExpressionBuilder", "GetParams", async function GetParams(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"paramlist": $.copyArg(p0), "paramresult": $.asRef(p1), result: false, "i": 0};
  await $.fixArgs(L0, ["paramlist"]);
  await $.mset((await $.v(C, "FuncParamsPage")), "Enabled", true);
  await $.mcall((await $.v(C, "FuncParamsPage")), "BringToFront", []);
  await $.mset((await $.v(C, "CopyFuncName")), "Caption", (await $.mv((await $.v(C, "FuncName")), "Caption")));
  await $.mset((await $.v(C, "CopyFuncDescription")), "Caption", (await $.mv((await $.v(C, "FuncDescription")), "Caption")));
  { const $t11 = $.sub((await $.call(C, "length", [L0["paramlist"]])), 1);
    L0["i"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
      $t12 = false;
      if (!($.ord(L0["i"]) <= $.ord($t11))) break;
      {
        const $t13 = (await $.mcall((await $.v(C, "TLabel")), "Create", [Self]));
        await $.wset([$t13], "Parent", (await $.wv([$t13], "FuncParamSB", C, false)), C);
        await $.wset([$t13], "Left", 10, C);
        await $.wset([$t13], "Top", $.mul((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 40), C);
        await $.wset([$t13], "Tag", 1, C);
        { const $t14 = (await $.idx((await $.wv([$t13], "ParamList", { get: async () => L0["paramlist"], set: async (v) => { L0["paramlist"] = v; }, local: true }, false)), [$.add((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)]));
          if ($.eq($t14, "N")) {
            await $.wset([$t13], "Caption", (await $.wv([$t13], "SqrExpBldNumeric", C, false)), C);
          }
          else if ($.eq($t14, "B")) {
            await $.wset([$t13], "Caption", (await $.wv([$t13], "SqrExpBldLogical", C, false)), C);
          }
          else if ($.eq($t14, "S")) {
            await $.wset([$t13], "Caption", (await $.wv([$t13], "SqrExpBldText", C, false)), C);
          }
          else if ($.eq($t14, "V")) {
            await $.wset([$t13], "Caption", (await $.wv([$t13], "SqrExpBldValue", C, false)), C);
          }
        }
        await $.wset([$t13], "Caption", (await $.wcall([$t13], "Format", [(await $.wv([$t13], "Caption", C, false)), [$.add((await $.wv([$t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)]], C)), C);
      }
      {
        const $t15 = (await $.mcall((await $.v(C, "TEdit")), "Create", [Self]));
        await $.wset([$t15], "Parent", (await $.wv([$t15], "FuncParamSB", C, false)), C);
        await $.wset([$t15], "Left", 10, C);
        await $.wset([$t15], "Top", $.add($.mul((await $.wv([$t15], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 40), 15), C);
        await $.wset([$t15], "Width", $.sub((await $.mv((await $.wv([$t15], "Parent", C, false)), "Width")), 60), C);
        await $.wset([$t15], "Tag", (await $.wv([$t15], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), C);
      }
      {
        const $t16 = (await $.mcall((await $.v(C, "TSpeedButton")), "Create", [Self]));
        await $.wset([$t16], "Parent", (await $.wv([$t16], "FuncParamSB", C, false)), C);
        await $.wset([$t16], "Left", $.sub((await $.mv((await $.wv([$t16], "Parent", C, false)), "Width")), 40), C);
        await $.wset([$t16], "Width", 20, C);
        await $.wset([$t16], "Height", 20, C);
        await $.wset([$t16], "Top", $.add($.mul((await $.wv([$t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 40), 15), C);
        await $.wset([$t16], "Caption", "...", C);
        await $.wset([$t16], "Tag", (await $.wv([$t16], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), C);
        await $.wset([$t16], "OnClick", (await $.wv([$t16], "GetParamExprClick", C, true)), C);
      }
      await $.mset((await $.mv((await $.v(C, "FuncParamSB")), "VertScrollBar")), "Range", $.mul((await $.call(C, "Length", [L0["paramlist"]])), 40));
      await $.mset((await $.mv((await $.v(C, "FuncParamSB")), "VertScrollBar")), "Increment", 40);
      await $.tick();
    }
  }
  await $.set(C, "FFuncParamsResult", 0);
  do {
    await $.mcall((await $.v(C, "Application")), "HandleMessage", []);
    await $.tick();
  } while (!$.truthy($.ne((await $.v(C, "FFuncParamsResult")), 0)));
  L0["result"] = $.eq((await $.v(C, "FFuncParamsResult")), 1);
  if ($.truthy(L0["result"])) {
    await L0["paramresult"].set("");
    { const $t17 = $.sub((await $.mv((await $.v(C, "FuncParamSB")), "ControlCount")), 1);
      L0["i"] = 0;
      let $t18 = true;
      for (;;) {
        if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
        $t18 = false;
        if (!($.ord(L0["i"]) <= $.ord($t17))) break;
        if ($.truthy($.is_((await $.idx((await $.mv((await $.v(C, "FuncParamSB")), "Controls")), [L0["i"]])), "TEdit"))) {
          if ($.truthy($.ne((await L0["paramresult"].get()), ""))) {
            await L0["paramresult"].set($.add((await L0["paramresult"].get()), ","));
          }
          await L0["paramresult"].set($.add((await L0["paramresult"].get()), (await $.mv((await $.call(C, "TEdit", [(await $.idx((await $.mv((await $.v(C, "FuncParamSB")), "Controls")), [L0["i"]]))])), "Text"))));
        }
        await $.tick();
      }
    }
  }
  while ($.truthy($.gt((await $.mv((await $.v(C, "FuncParamSB")), "ControlCount")), 0))) {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "FuncParamSB")), "Controls")), [0])), "Free", []);
    await $.tick();
  }
  await $.mset((await $.v(C, "FuncParamsPage")), "Enabled", false);
  return L0.result;
}, {"params": ["ParamList", "ParamResult"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TQRExpressionBuilder", "GetParamExprClick", async function GetParamExprClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "paramexpr": ''};
  await $.fixArgs(L0, ["sender"]);
  { const $t19 = $.sub((await $.mv((await $.v(C, "FuncParamSB")), "ControlCount")), 1);
    L0["i"] = 0;
    let $t20 = true;
    for (;;) {
      if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
      $t20 = false;
      if (!($.ord(L0["i"]) <= $.ord($t19))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.mv((await $.v(C, "FuncParamSB")), "Controls")), [L0["i"]])), "TEdit")), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [(await $.idx((await $.mv((await $.v(C, "FuncParamSB")), "Controls")), [L0["i"]]))])), "Tag")), (await $.mv((await $.call(C, "TSpeedButton", [L0["sender"]])), "Tag")))))))) {
        {
          const $t21 = (await $.call(C, "TEdit", [(await $.idx((await $.mv((await $.v(C, "FuncParamSB")), "Controls")), [L0["i"]]))]));
          await $.wset([$t21], "ParamExpr", (await $.wv([$t21], "Text", C, false)), { get: async () => L0["paramexpr"], set: async (v) => { L0["paramexpr"] = v; }, local: true });
          if ($.truthy((await $.wcall([$t21], "GetExpression", [(await $.wcall([$t21], "Format", [(await $.wv([$t21], "SqrExpBldEnterParam", C, false)), [$.add((await $.wv([$t21], "Tag", C, false)), 1), (await $.mv((await $.wv([$t21], "FuncName", C, false)), "Caption"))]], C)), $.ref(async () => (await $.wv([$t21], "ParamExpr", { get: async () => L0["paramexpr"], set: async (v) => { L0["paramexpr"] = v; }, local: true }, false)), async ($t22) => { await $.wset([$t21], "ParamExpr", $t22, { get: async () => L0["paramexpr"], set: async (v) => { L0["paramexpr"] = v; }, local: true }); }), (await $.wv([$t21], "DataSetForm", C, false)), Self, (await $.wv([$t21], "FLocalEnvironment", C, false))], C)))) {
            await $.wset([$t21], "Text", (await $.wv([$t21], "ParamExpr", { get: async () => L0["paramexpr"], set: async (v) => { L0["paramexpr"] = v; }, local: true }, false)), C);
          }
          await $.mcall((await $.wv([$t21], "FuncParamsPage", C, false)), "BringToFront", []);
          await $.stmt($.wcall([$t21], "SetFocus", [], C));
          await $.wset([$t21], "SelStart", 0, C);
          await $.wset([$t21], "SelLength", (await $.wcall([$t21], "Length", [(await $.wv([$t21], "Text", C, false))], C)), C);
          return L0.result;
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "InsertFunctionBtnClick", async function InsertFunctionBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "afunction": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MainPage")), "Enabled", false);
  if ($.truthy((await $.call(C, "GetFunc", [$.ref(async () => L0["afunction"], async ($t23) => { L0["afunction"] = $t23; })])))) {
    await $.mset((await $.v(C, "MainPage")), "Enabled", true);
    await $.stmt((await $.call(C, "InsertText", [L0["afunction"]])));
  } else {
    await $.mset((await $.v(C, "MainPage")), "Enabled", true);
  }
  await $.mcall((await $.v(C, "MainPage")), "BringToFront", []);
  await $.mcall((await $.v(C, "Expr")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FuncParamOkBtnClick", async function FuncParamOkBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FFuncParamsResult", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FuncArgCancelBtnClick", async function FuncArgCancelBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FFuncParamsResult", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FunctionCancelBtnClick", async function FunctionCancelBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FFuncResult", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FFuncResult", 2);
  await $.set(C, "FFuncParamsResult", 2);
  await $.set(C, "FDataFieldResult", 2);
  if ($.truthy($.ne((await $.v(C, "FExprResult")), 1))) {
    await $.set(C, "FExprResult", 2);
  }
  await $.set(C, "FVariableResult", 2);
  await L0["canclose"].set(true);
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TQRExpressionBuilder", "GetDatafield", async function GetDatafield(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"field": $.asRef(p0), result: false};
  await $.set(C, "FDatafieldResult", 0);
  await $.mset((await $.v(C, "DataFieldPage")), "Enabled", true);
  await $.mcall((await $.v(C, "DataFieldPage")), "BringToFront", []);
  do {
    await $.mcall((await $.v(C, "Application")), "HandleMessage", []);
    await $.tick();
  } while (!$.truthy((await $.or_(($.ne((await $.v(C, "FDatafieldResult")), 0)), async () => (await $.v(C, "Cancelled"))))));
  L0["result"] = $.eq((await $.v(C, "FDatafieldResult")), 1);
  if ($.truthy((await $.and_((await $.and_(L0["result"], async () => ($.gt((await $.mv((await $.v(C, "AvailableDataSets")), "ItemIndex")), (-(1)))))), async () => ($.gt((await $.mv((await $.v(C, "AvailableFields")), "ItemIndex")), (-(1)))))))) {
    await L0["field"].set($.add($.add((await $.idx((await $.mv((await $.v(C, "AvailableDatasets")), "Items")), [(await $.mv((await $.v(C, "AvailableDataSets")), "ItemIndex"))])), "."), (await $.idx((await $.mv((await $.v(C, "AvailableFields")), "Items")), [(await $.mv((await $.v(C, "AvailableFields")), "ItemIndex"))]))));
  } else {
    await L0["field"].set("");
  }
  await $.mset((await $.v(C, "DataFieldPage")), "Enabled", false);
  return L0.result;
}, {"params": ["Field"], "kind": "function", "ptypes": ["String"]});
  U.method("TQRExpressionBuilder", "GetVariable", async function GetVariable(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"variable": $.asRef(p0), result: false};
  await $.set(C, "FVariableResult", 0);
  await $.mset((await $.v(C, "VariablePage")), "Enabled", true);
  await $.mcall((await $.v(C, "VariablePage")), "BringToFront", []);
  do {
    await $.mcall((await $.v(C, "Application")), "HandleMessage", []);
    await $.tick();
  } while (!$.truthy((await $.or_(($.ne((await $.v(C, "FVariableResult")), 0)), async () => (await $.v(C, "Cancelled"))))));
  L0["result"] = $.eq((await $.v(C, "FVariableResult")), 1);
  if ($.truthy(L0["result"])) {
    await L0["variable"].set((await $.idx((await $.mv((await $.v(C, "AvailableVariables")), "Items")), [(await $.mv((await $.v(C, "AvailableVariables")), "ItemIndex"))])));
  } else {
    await L0["variable"].set("");
  }
  await $.mset((await $.v(C, "VariablePage")), "Enabled", false);
  return L0.result;
}, {"params": ["Variable"], "kind": "function", "ptypes": ["String"]});
  U.method("TQRExpressionBuilder", "InsertText", async function InsertText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"atext": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["atext"]);
  await $.mset((await $.v(C, "Expr")), "SelText", L0["atext"]);
  await $.mset((await $.v(C, "Expr")), "SelStart", $.add((await $.mv((await $.v(C, "Expr")), "SelStart")), (await $.mv((await $.v(C, "Expr")), "SelLength"))));
  await $.mset((await $.v(C, "Expr")), "SelLength", 0);
  await $.mcall((await $.v(C, "Expr")), "SetFocus", []);
  return L0.result;
}, {"params": ["AText"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TQRExpressionBuilder", "AddSomeClick", async function AddSomeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "InsertText", [$.add($.add(" ", (await $.mv((await $.call(C, "TSpeedButton", [L0["sender"]])), "Caption"))), " ")])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "PickDatasets", async function PickDatasets(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dslist": null};
  L0["dslist"] = null;
  try {
    L0["dslist"] = (await $.call(C, "AllDataSets", [(await $.v(C, "DatasetForm")), true]));
    await $.mset((await $.v(C, "AvailableDataSets")), "Items", L0["dslist"]);
    await $.mset((await $.v(C, "AvailableDataSets")), "ItemIndex", 0);
    await $.stmt((await $.call(C, "AvailableDataSetsClick", [Self])));
  } finally {
    await $.mcall(L0["dslist"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRExpressionBuilder", "PickVariables", async function PickVariables(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.mcall((await $.mv((await $.v(C, "AvailableVariables")), "Items")), "Clear", []);
  if ($.truthy($.ne((await $.v(C, "LocalEnvironment")), null))) {
    { const $t24 = $.sub((await $.mv((await $.v(C, "LocalEnvironment")), "Count")), 1);
      L0["i"] = 0;
      let $t25 = true;
      for (;;) {
        if (!$t25) { L0["i"] = $.succ(L0["i"], 1); }
        $t25 = false;
        if (!($.ord(L0["i"]) <= $.ord($t24))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "AvailableVariables")), "Items")), "Add", [(await $.idx((await $.v(C, "LocalEnvironment")), [L0["i"]]))])));
        await $.tick();
      }
    }
  }
  { const $t26 = $.sub((await $.mv((await $.v(C, "QRGlobalEnvironment")), "Count")), 1);
    L0["i"] = 0;
    let $t27 = true;
    for (;;) {
      if (!$t27) { L0["i"] = $.succ(L0["i"], 1); }
      $t27 = false;
      if (!($.ord(L0["i"]) <= $.ord($t26))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "AvailableVariables")), "Items")), "Add", [(await $.idx((await $.v(C, "QRGlobalEnvironment")), [L0["i"]]))])));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "AvailableVariables")), "ItemIndex", 0);
  await $.stmt((await $.call(C, "AvailableVariablesClick", [Self])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRExpressionBuilder", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "PickDataSets", []));
  await $.stmt($.call(C, "PickVariables", []));
  await $.mcall((await $.v(C, "Expr")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "AvailableDatasetsClick", async function AvailableDatasetsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AvailableFields")), "Items")), "Clear", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "AvailableDataSets")), "Items")), "Count")), 0))) {
    {
      const $t28 = (await $.call(C, "TDataSet", [(await $.idx((await $.mv((await $.mv((await $.v(C, "AvailableDataSets")), "Items")), "Objects")), [(await $.mv((await $.v(C, "AvailableDataSets")), "ItemIndex"))]))]));
      { const $t29 = $.sub((await $.wv([$t28], "FieldCount", C, false)), 1);
        await $.wset([$t28], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t30 = true;
        for (;;) {
          if (!$t30) { await $.wset([$t28], "I", $.succ((await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t30 = false;
          if (!($.ord((await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t29))) break;
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t28], "AvailableFields", C, false)), "Items")), "Add", [(await $.mv((await $.idx((await $.wv([$t28], "Fields", C, false)), [(await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "FieldName"))])));
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "OKClick", async function OKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FExprResult", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "CancelClick", async function CancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FExprResult", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "ClearClick", async function ClearClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Expr")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "ValidateBtnClick", async function ValidateBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "aresult": null, "textresult": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "QRGlobalEnvironment")), "Prepare", []);
  if ($.truthy($.ne((await $.v(C, "LocalEnvironment")), null))) {
    await $.mcall((await $.v(C, "LocalEnvironment")), "Prepare", []);
  }
  {
    const $t31 = (await $.mv((await $.v(C, "TQREvaluator")), "Create"));
    try {
      await $.wset([$t31], "DataSets", (await $.mv((await $.wv([$t31], "TList", C, false)), "Create")), C);
      await $.wset([$t31], "Environment", (await $.wv([$t31], "LocalEnvironment", C, false)), C);
      { const $t32 = $.sub((await $.mv((await $.mv((await $.wv([$t31], "AvailableDataSets", C, false)), "Items")), "Count")), 1);
        await $.wset([$t31], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t33 = true;
        for (;;) {
          if (!$t33) { await $.wset([$t31], "I", $.succ((await $.wv([$t31], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t33 = false;
          if (!($.ord((await $.wv([$t31], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t32))) break;
          await $.stmt((await $.mcall((await $.wv([$t31], "DataSets", C, false)), "Add", [(await $.wcall([$t31], "TDataSet", [(await $.idx((await $.mv((await $.mv((await $.wv([$t31], "AvailableDataSets", C, false)), "Items")), "Objects")), [(await $.wv([$t31], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
          await $.tick();
        }
      }
      await $.wset([$t31], "AResult", (await $.wcall([$t31], "Calculate", [(await $.wcall([$t31], "TrimExpr", [(await $.mv((await $.wv([$t31], "Expr", C, false)), "Text"))], C))], C)), { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true });
      await $.wset([$t31], "TextResult", "", { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true });
      { const $t34 = (await $.mv((await $.wv([$t31], "AResult", { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true }, false)), "Kind"));
        if ($.eq($t34, (await $.wv([$t31], "resInt", C, false)))) {
          await $.wset([$t31], "TextResult", (await $.wcall([$t31], "IntToStr", [(await $.mv((await $.wv([$t31], "AResult", { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true }, false)), "IntResult"))], C)), { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t31], "resDouble", C, false)))) {
          await $.wset([$t31], "TextResult", (await $.wcall([$t31], "FloatToStr", [(await $.mv((await $.wv([$t31], "AResult", { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true }, false)), "DblResult"))], C)), { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t31], "resString", C, false)))) {
          await $.wset([$t31], "TextResult", (await $.mv((await $.wv([$t31], "AResult", { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true }, false)), "StringVal")), { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t31], "resBool", C, false)))) {
          if ($.truthy((await $.mv((await $.wv([$t31], "AResult", { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true }, false)), "booResult")))) {
            await $.wset([$t31], "TextResult", "True", { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true });
          } else {
            await $.wset([$t31], "TextResult", "False", { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true });
          }
        }
      }
      if ($.truthy($.eq((await $.wv([$t31], "TextResult", { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true }, false)), ""))) {
        await $.stmt((await $.wcall([$t31], "ShowMessage", [$.add((await $.wv([$t31], "SqrExpBldError", C, false)), (await $.mv((await $.wv([$t31], "AResult", { get: async () => L0["aresult"], set: async (v) => { L0["aresult"] = v; }, local: true }, false)), "StringVal")))], C)));
      } else {
        await $.stmt((await $.wcall([$t31], "ShowMessage", [$.add((await $.wv([$t31], "SqrExpBldNoError", C, false)), (await $.wv([$t31], "TextResult", { get: async () => L0["textresult"], set: async (v) => { L0["textresult"] = v; }, local: true }, false)))], C)));
      }
      await $.mcall((await $.wv([$t31], "DataSets", C, false)), "Free", []);
    } finally {
      await $.stmt($.wcall([$t31], "free", [], C));
    }
  }
  if ($.truthy($.ne((await $.v(C, "LocalEnvironment")), null))) {
    await $.mcall((await $.v(C, "LocalEnvironment")), "Unprepare", []);
  }
  await $.mcall((await $.v(C, "QRGlobalEnvironment")), "Unprepare", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "InsertVariableBtnClick", async function InsertVariableBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "avariable": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MainPage")), "Enabled", false);
  if ($.truthy((await $.call(C, "GetVariable", [$.ref(async () => L0["avariable"], async ($t35) => { L0["avariable"] = $t35; })])))) {
    await $.mset((await $.v(C, "MainPage")), "Enabled", true);
    await $.stmt((await $.call(C, "InsertText", [L0["avariable"]])));
  } else {
    await $.mset((await $.v(C, "MainPage")), "Enabled", true);
  }
  await $.mcall((await $.v(C, "MainPage")), "BringToFront", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "VariableOKBtnClick", async function VariableOKBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FVariableResult", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "VariableCancelBtnClick", async function VariableCancelBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FVariableResult", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "AvailableVariablesClick", async function AvailableVariablesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "varname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["varname"] = (await $.idx((await $.mv((await $.v(C, "AvailableVariables")), "Items")), [(await $.mv((await $.v(C, "AvailableVariables")), "ItemIndex"))]));
  if ($.truthy((await $.and_(($.ne((await $.v(C, "LocalEnvironment")), null)), async () => ($.ge((await $.mcall((await $.v(C, "LocalEnvironment")), "IndexOf", [L0["varname"]])), 0)))))) {
    {
      const $t36 = (await $.call(C, "TQREvEmbeddedFunction", [(await $.mv((await $.call(C, "TQREvElementWrapper", [(await $.mcall((await $.v(C, "LocalEnvironment")), "Element", [L0["varname"]]))])), "EmbeddedFunction"))]));
      await $.mset((await $.wv([$t36], "VariableValue", C, false)), "Caption", (await $.wv([$t36], "Expression", C, false)));
    }
  } else {
    {
      const $t37 = (await $.call(C, "TQREvEmbeddedFunction", [(await $.mv((await $.call(C, "TQREvElementWrapper", [(await $.mcall((await $.v(C, "QRGlobalEnvironment")), "Element", [L0["varname"]]))])), "EmbeddedFunction"))]));
      await $.mset((await $.wv([$t37], "VariableValue", C, false)), "Caption", (await $.wv([$t37], "Expression", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "ModifyVariablesClick", async function ModifyVariablesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "EditEnvironment", [(await $.v(C, "LocalEnvironment")), true, Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRExpressionBuilder", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await L0["key"].get()), 27)), async () => ($.eq((await L0["key"].get()), (await $.call(C, "ord", [" "])))))))) {
    await $.set(C, "Cancelled", true);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TQRExpressionBuilder", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await L0["key"].get()), (await $.call(C, "chr", [27])))), async () => ($.eq((await L0["key"].get()), " ")))))) {
    await $.set(C, "Cancelled", true);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

// Generated from QREnvEd.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("QREnvEd", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "QRExpr", "Grids", "StdCtrls", "Buttons", "QR5Const", "QRExpBld"]);
  const C = [U];
  U.defClass("TQREnvironmentEditor", "TForm", {"variableokbtn": {"name": "VariableOKBtn", "type": "TButton"}, "availablegb": {"name": "AvailableGB", "type": "TGroupBox"}, "udfgrid": {"name": "UDFGrid", "type": "TStringGrid"}, "deletebtn": {"name": "DeleteBtn", "type": "TButton"}, "editbtn": {"name": "EditBtn", "type": "TButton"}, "addbtn": {"name": "AddBtn", "type": "TButton"}, "localcb": {"name": "LocalCB", "type": "TRadioButton"}, "globalcb": {"name": "GlobalCB", "type": "TRadioButton"}, "newentrygb": {"name": "NewEntryGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "name": {"name": "Name", "type": "TEdit"}, "expression": {"name": "Expression", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "newokbtn": {"name": "NewOKBtn", "type": "TButton"}, "newcancelbtn": {"name": "NewCancelBtn", "type": "TButton"}, "closedialog": {"name": "CloseDialog", "type": "boolean"}, "newresult": {"name": "NewResult", "type": "integer"}, "fenvironment": {"name": "FEnvironment", "type": "TQREvEnvironment"}}, {"environment": {"name": "Environment", "read": "FEnvironment", "write": "FEnvironment"}});
  U.init(async () => {
  });
  U.method("TQREnvironmentEditor", "WorkEnvironment", async function WorkEnvironment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy((await $.mv((await $.v(C, "LocalCB")), "Checked")))) {
    L0["result"] = (await $.v(C, "Environment"));
  } else {
    L0["result"] = (await $.v(C, "QRGlobalEnvironment"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQREnvironmentEditor", "PopulateGrid", async function PopulateGrid(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  if ($.truthy($.ne((await $.v(C, "WorkEnvironment")), null))) {
    await $.mset((await $.v(C, "UDFGrid")), "RowCount", $.add((await $.mv((await $.v(C, "WorkEnvironment")), "Count")), 1));
    { const $t1 = $.sub((await $.mv((await $.v(C, "WorkEnvironment")), "Count")), 1);
      L0["i"] = 0;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
        $t2 = false;
        if (!($.ord(L0["i"]) <= $.ord($t1))) break;
        { const $t3 = await $.iset((await $.mv((await $.v(C, "UDFGrid")), "Cells")), [0, $.add(L0["i"], 1)], (await $.idx((await $.v(C, "WorkEnvironment")), [L0["i"]]))); if ($t3 !== undefined) { await $.mset((await $.v(C, "UDFGrid")), "Cells", $t3); } }
        { const $t4 = await $.iset((await $.mv((await $.v(C, "UDFGrid")), "Cells")), [1, $.add(L0["i"], 1)], (await $.mv((await $.call(C, "TQREvEmbeddedFunction", [(await $.idx((await $.mv((await $.v(C, "WorkEnvironment")), "Objects")), [L0["i"]]))])), "Expression"))); if ($t4 !== undefined) { await $.mset((await $.v(C, "UDFGrid")), "Cells", $t4); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQREnvironmentEditor", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t5 = await $.iset((await $.mv((await $.v(C, "UDFGrid")), "Cells")), [0, 0], (await $.v(C, "SqrName"))); if ($t5 !== undefined) { await $.mset((await $.v(C, "UDFGrid")), "Cells", $t5); } }
  { const $t6 = await $.iset((await $.mv((await $.v(C, "UDFGrid")), "Cells")), [1, 0], (await $.v(C, "SqrExpression"))); if ($t6 !== undefined) { await $.mset((await $.v(C, "UDFGrid")), "Cells", $t6); } }
  await $.set(C, "Environment", null);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "UDFGridSetEditText", async function UDFGridSetEditText(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "arow": $.copyArg(p2), "value": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acol", "arow", "value"]);
  if ($.truthy($.eq(L0["acol"], 0))) {
    { const $t7 = await $.iset((await $.v(C, "WorkEnvironment")), [$.sub(L0["arow"], 1)], (await $.call(C, "AnsiUppercase", [L0["value"]]))); if ($t7 !== undefined) { await $.set(C, "WorkEnvironment", $t7); } }
  } else {
    if ($.truthy($.not((await $.mv((await $.v(C, "WorkEnvironment")), "Prepared"))))) {
      await $.mcall((await $.call(C, "TQREvEmbeddedFunction", [(await $.idx((await $.mv((await $.v(C, "WorkEnvironment")), "Objects")), [$.sub(L0["arow"], 1)]))])), "Free", []);
      { const $t8 = await $.iset((await $.mv((await $.v(C, "WorkEnvironment")), "Objects")), [$.sub(L0["arow"], 1)], (await $.mcall((await $.v(C, "TQREvEmbeddedFunction")), "Create", [L0["value"]]))); if ($t8 !== undefined) { await $.mset((await $.v(C, "WorkEnvironment")), "Objects", $t8); } }
    } else {
      { const $t9 = await $.iset((await $.mv((await $.v(C, "UDFGrid")), "Cells")), [1, L0["arow"]], (await $.mv((await $.call(C, "TQREvEmbeddedFunction", [(await $.idx((await $.mv((await $.v(C, "WorkEnvironment")), "Objects")), [$.sub(L0["arow"], 1)]))])), "Expression"))); if ($t9 !== undefined) { await $.mset((await $.v(C, "UDFGrid")), "Cells", $t9); } }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "ARow", "Value"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "String"]});
  U.method("TQREnvironmentEditor", "EditBtnClick", async function EditBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "aexpression": '', "aname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "UDFGrid"));
    await $.wset([$t10], "aName", (await $.idx((await $.wv([$t10], "Cells", C, false)), [0, (await $.wv([$t10], "Row", C, false))])), { get: async () => L0["aname"], set: async (v) => { L0["aname"] = v; }, local: true });
    await $.wset([$t10], "aExpression", (await $.mv((await $.wcall([$t10], "TQREvEmbeddedFunction", [(await $.idx((await $.mv((await $.wv([$t10], "WorkEnvironment", C, false)), "Objects")), [$.sub((await $.wv([$t10], "Row", C, false)), 1)]))], C)), "Expression")), { get: async () => L0["aexpression"], set: async (v) => { L0["aexpression"] = v; }, local: true });
    if ($.truthy((await $.wcall([$t10], "GetExpression", [(await $.wv([$t10], "aName", { get: async () => L0["aname"], set: async (v) => { L0["aname"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t10], "AExpression", { get: async () => L0["aexpression"], set: async (v) => { L0["aexpression"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t10], "AExpression", $t11, { get: async () => L0["aexpression"], set: async (v) => { L0["aexpression"] = v; }, local: true }); }), Self, Self, (await $.wv([$t10], "Environment", C, false))], C)))) {
      { const $t12 = await $.iset((await $.wv([$t10], "Cells", C, false)), [1, (await $.wv([$t10], "Row", C, false))], (await $.wv([$t10], "AExpression", { get: async () => L0["aexpression"], set: async (v) => { L0["aexpression"] = v; }, local: true }, false))); if ($t12 !== undefined) { await $.wset([$t10], "Cells", $t12, C); } }
      await $.stmt((await $.wcall([$t10], "UDFGridSetEditText", [Self, 1, (await $.wv([$t10], "Row", C, false)), (await $.wv([$t10], "AExpression", { get: async () => L0["aexpression"], set: async (v) => { L0["aexpression"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "LocalCBClick", async function LocalCBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "PopulateGrid", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("EditEnvironment", async function EditEnvironment(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aenvironment": $.copyArg(p0), "allowglobalenv": $.copyArg(p1), "parentcontrol": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["aenvironment", "allowglobalenv", "parentcontrol"]);
  {
    const $t13 = (await $.mcall((await $.v(C, "TQREnvironmentEditor")), "Create", [(await $.v(C, "Application"))]));
    try {
      if ($.truthy($.ne((await $.wv([$t13], "ParentControl", { get: async () => L0["parentcontrol"], set: async (v) => { L0["parentcontrol"] = v; }, local: true }, false)), null))) {
      }
      if ($.truthy($.not((await $.wv([$t13], "AllowGlobalEnv", { get: async () => L0["allowglobalenv"], set: async (v) => { L0["allowglobalenv"] = v; }, local: true }, false))))) {
        await $.mset((await $.wv([$t13], "GlobalCB", C, false)), "Enabled", (await $.wv([$t13], "false", C, false)));
      }
      if ($.truthy($.eq((await $.wv([$t13], "AEnvironment", { get: async () => L0["aenvironment"], set: async (v) => { L0["aenvironment"] = v; }, local: true }, false)), null))) {
        await $.mset((await $.wv([$t13], "LocalCB", C, false)), "Enabled", (await $.wv([$t13], "false", C, false)));
        await $.mset((await $.wv([$t13], "GlobalCB", C, false)), "Checked", (await $.wv([$t13], "true", C, false)));
      } else {
        await $.wset([$t13], "Environment", (await $.wv([$t13], "AEnvironment", { get: async () => L0["aenvironment"], set: async (v) => { L0["aenvironment"] = v; }, local: true }, false)), C);
      }
      await $.stmt($.wcall([$t13], "PopulateGrid", [], C));
      await $.wset([$t13], "CloseDialog", (await $.wv([$t13], "false", C, false)), C);
      await $.stmt($.wcall([$t13], "ShowModal", [], C));
      do {
        await $.mcall((await $.wv([$t13], "Application", C, false)), "HandleMessage", []);
        await $.tick();
      } while (!$.truthy((await $.wv([$t13], "CloseDialog", C, false))));
    } finally {
      await $.stmt($.wcall([$t13], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["AEnvironment", "AllowGlobalEnv", "ParentControl"], "kind": "procedure", "ptypes": ["TQREvEnvironment", "boolean", "TWinControl"]});
  U.method("TQREnvironmentEditor", "VariableOKBtnClick", async function VariableOKBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CloseDialog", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "GetNew", async function GetNew(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.asRef(p0), "aexpr": $.asRef(p1), result: false};
  await $.mset((await $.v(C, "AddBtn")), "Visible", false);
  await $.mset((await $.v(C, "EditBtn")), "Visible", false);
  await $.mset((await $.v(C, "DeleteBtn")), "Visible", false);
  await $.mset((await $.v(C, "VariableOKBtn")), "Visible", false);
  await $.mcall((await $.v(C, "NewEntryGB")), "BringToFront", []);
  await $.set(C, "NewResult", 0);
  do {
    await $.mcall((await $.v(C, "Application")), "HandleMessage", []);
    await $.tick();
  } while (!$.truthy($.ne((await $.v(C, "NewResult")), 0)));
  if ($.truthy($.eq((await $.v(C, "NewResult")), 1))) {
    await L0["aname"].set((await $.mv((await $.v(C, "Name")), "Text")));
    await L0["aexpr"].set((await $.mv((await $.v(C, "Expression")), "Text")));
    L0["result"] = true;
  } else {
    L0["result"] = false;
  }
  await $.mset((await $.v(C, "AddBtn")), "Visible", true);
  await $.mset((await $.v(C, "EditBtn")), "Visible", true);
  await $.mset((await $.v(C, "DeleteBtn")), "Visible", true);
  await $.mset((await $.v(C, "VariableOKBtn")), "Visible", true);
  await $.mcall((await $.v(C, "AvailableGB")), "BringToFront", []);
  return L0.result;
}, {"params": ["AName", "AExpr"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TQREnvironmentEditor", "NewOKBtnClick", async function NewOKBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewResult", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "NewCancelBtnClick", async function NewCancelBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewResult", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "AddBtnClick", async function AddBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "newname": '', "newexpr": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "GetNew", [$.ref(async () => L0["newname"], async ($t14) => { L0["newname"] = $t14; }), $.ref(async () => L0["newexpr"], async ($t15) => { L0["newexpr"] = $t15; })])))) {
    await $.stmt((await $.mcall((await $.v(C, "WorkEnvironment")), "AddFunction", [L0["newname"], L0["newexpr"]])));
    await $.stmt($.call(C, "PopulateGrid", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "aname": '', "aexpr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["aname"] = (await $.mv((await $.v(C, "Name")), "Text"));
  L0["aexpr"] = (await $.mv((await $.v(C, "Expression")), "Text"));
  if ($.truthy((await $.call(C, "GetExpression", [L0["aname"], $.ref(async () => L0["aexpr"], async ($t16) => { L0["aexpr"] = $t16; }), Self, Self, (await $.v(C, "Environment"))])))) {
    await $.mset((await $.v(C, "Expression")), "Text", L0["aexpr"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQREnvironmentEditor", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CloseDialog", true);
  await L0["canclose"].set(true);
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  return U;
}

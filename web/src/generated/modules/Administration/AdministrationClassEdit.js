// Generated from AdministrationClassEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationClassEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCGrids", "StdCtrls", "DBCtrls", "ComCtrls", "Buttons", "DB", "OracleNavigator", "Menus", "ImgList", "AdministrationDataModule", "AdministrationMainForm", "AdmBarForm", "adm_classesAdvInfoImpl", "adm_classesGrants", "AdministrationProfOptions"]);
  const C = [U];
  U.defClass("TfmClassEdit", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "oraclenavigator1": {"name": "OracleNavigator1", "type": "TOracleNavigator"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "cgclassedit": {"name": "cgClassEdit", "type": "TDBCtrlGrid"}, "edrole": {"name": "edrole", "type": "TDBText"}, "dbcheckbox1": {"name": "DBCheckBox1", "type": "TDBCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "btclose": {"name": "btClose", "type": "TBitBtn"}, "edclasscl": {"name": "edClassCL", "type": "TEdit"}, "eddescrcl": {"name": "edDescrCl", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "miselall": {"name": "miSelAll", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "mideselall": {"name": "miDeSelAll", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("fmClassEdit", null, "TfmClassEdit");
  });
  U.method("TfmClassEdit", "cgClassEditPaintPanel", async function cgClassEditPaintPanel(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dbctrlgrid": $.copyArg(p0), "index": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["dbctrlgrid", "index"]);
  if ($.truthy($.eq(L0["index"], (await $.mv(L0["dbctrlgrid"], "PanelIndex"))))) {
    await $.mset((await $.mv((await $.v(C, "edrole")), "Font")), "Color", (await $.v(C, "clWhite")));
  } else {
    await $.mset((await $.mv((await $.v(C, "edrole")), "Font")), "Color", (await $.v(C, "clBlack")));
  }
  return L0.result;
}, {"params": ["DBCtrlGrid", "Index"], "kind": "procedure", "ptypes": ["TDBCtrlGrid", "Integer"]});
  U.method("TfmClassEdit", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmClassEdit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "fieldbyname", ["finger3"])), "asinteger", 1);
  } else {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "fieldbyname", ["finger3"])), "asinteger", 0);
  }
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "post", []);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfmClassEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "AdministrationData")), "Classesdata"));
    await $.mset((await $.wv([$t1], "edClassCL", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["obj"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "edDescrCl", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["description"], C)), "AsString")));
    await $.wset([$t1], "Caption", $.add($.add("Sinif: \"", (await $.mv((await $.wcall([$t1], "FieldByName", ["obj"], C)), "AsString"))), "\""), C);
  }
  await $.set(C, "frmClassesAdvInfo", (await $.mcall((await $.v(C, "TfrmClassesAdvInfo")), "Create", [Self])));
  await $.set(C, "frmClassGrants", (await $.mcall((await $.v(C, "TfrmClassGrants")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmClassEdit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["cls", (await $.mv((await $.v(C, "edClassCL")), "text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["t", "C"])));
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "FieldByName", ["finger3"])), "asinteger")), 1))) {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmClassEdit", "DBCheckBox1MouseUp", async function DBCheckBox1MouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy((await $.mv((await $.v(C, "cgClassEdit")), "CanFocus")))) {
    await $.mcall((await $.v(C, "cgClassEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TfmClassEdit", "cgClassEditKeyDown", async function cgClassEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_space"))))) {
    {
      const $t2 = (await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet"));
      if ($.truthy($.not(((await $.wv([$t2], "Active", C, false)))))) {
        return L0.result;
      }
      await $.stmt($.wcall([$t2], "Edit", [], C));
      await $.mset((await $.wcall([$t2], "FieldByName", [(await $.mv((await $.wv([$t2], "DBCheckBox1", C, false)), "DataField"))], C)), "AsInteger", (await $.wcall([$t2], "BoolToInt", [$.not(((await $.wcall([$t2], "IntToBool", [(await $.mv((await $.wcall([$t2], "FieldByName", [(await $.mv((await $.wv([$t2], "DBCheckBox1", C, false)), "DataField"))], C)), "AsInteger"))], C))))], C)));
      await $.stmt($.wcall([$t2], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfmClassEdit", "btApplyMouseDown", async function btApplyMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined, "bk": null, "brform": null};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t3 = (await $.v(C, "AdministrationData"));
    const $t4 = (await $.mv((await $.mv((await $.wv([$t3], "cgClassEdit", C, false)), "DataSource")), "DataSet"));
    try {
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Class Access", "Sinfin hüquqları", "Yerinə yetirilməsi...", 10, 40])));
      await $.stmt((await $.wcall([$t3, $t4], "Snd", [(await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.wset([$t3, $t4], "bk", (await $.wv([$t3, $t4], "GetBookmark", C, false)), { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true });
      await $.stmt($.wcall([$t3, $t4], "DisableControls", [], C));
      await $.stmt($.wcall([$t3, $t4], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t3, $t4], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t3, $t4], "pcADM", C, false)), "CallProcedure", ["updateclassgrants", [(await $.mv((await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["Class"], C)), "AsString")), (await $.wcall([$t3, $t4], "IntToBool", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["Acc"], C)), "ASInteger"))], C))]])));
        await $.stmt($.wcall([$t3, $t4], "Next", [], C));
        await $.tick();
      }
      await $.stmt((await $.wcall([$t3, $t4], "Snd", [(await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t3, $t4], "GotoBookmark", [(await $.wv([$t3, $t4], "bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "EnableControls", [], C));
      if ($.truthy((await $.or_(((await $.and_(($.ne((await $.mv((await $.wv([$t3, $t4], "edClassCL", C, false)), "Text")), (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "FieldByName", ["obj"])), "ASString")))), async () => ($.ne((await $.mv((await $.wv([$t3, $t4], "edClassCL", C, false)), "Text")), ""))))), async () => ((await $.and_(($.ne((await $.mv((await $.wv([$t3, $t4], "edDescrCl", C, false)), "Text")), (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "FieldByName", ["description"])), "ASString")))), async () => ($.ne((await $.mv((await $.wv([$t3, $t4], "edDescrCl", C, false)), "Text")), ""))))))))) {
        await $.stmt((await $.mcall((await $.wv([$t3, $t4], "pcADM", C, false)), "CallProcedure", ["updateclass", [(await $.mv((await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.wv([$t3, $t4], "edClassCL", C, false)), "Text")), (await $.mv((await $.wv([$t3, $t4], "edDescrCl", C, false)), "Text"))]])));
      }
      await $.mset((await $.mv((await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "BarCaption")), "Caption", "Sinfin bütün istifadəçiləri üzrə hüquqların dəyişdirilməsi");
      await $.stmt((await $.wcall([$t3, $t4], "Snd", [(await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "pcADM", C, false)), "CallProcedure", ["updateallusersbyclass", [(await $.mv((await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "FieldByName", ["id"])), "AsInteger"))]])));
      await $.stmt((await $.wcall([$t3, $t4], "Snd", [(await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "pcADM", C, false)), "CallProcedure", ["applyclassgrants", [(await $.mv((await $.wv([$t3, $t4], "edClassCL", C, false)), "Text"))]])));
      await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "Close", []);
      await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "open", []);
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "Classesdata", C, false)), "Locate", ["obj", (await $.mv((await $.wv([$t3, $t4], "edClassCL", C, false)), "Text")), []])));
      await $.wset([$t3, $t4], "Caption", $.add("Sinif: ", (await $.mv((await $.wv([$t3, $t4], "edClassCL", C, false)), "Text"))), C);
    } finally {
      if ($.truthy((await $.wcall([$t3, $t4], "Assigned", [(await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t3, $t4], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TfmClassEdit", "miSelAllDrawItem", async function miSelAllDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t5 = L0["acanvas"];
    const $t6 = (await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t7 = (await $.wv([$t5, $t6], "Font", C, false));
      await $.wset([$t5, $t6, $t7], "Name", "Tahoma", C);
      await $.wset([$t5, $t6, $t7], "Charset", (await $.wv([$t5, $t6, $t7], "DEFAULT_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t5, $t6, $t7], "Default", C, false)))) {
        await $.wset([$t5, $t6, $t7], "Style", [(await $.wv([$t5, $t6, $t7], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t5, $t6], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t5, $t6], "Pen", C, false)), "Color", (await $.wv([$t5, $t6], "clBlack", C, false)));
      await $.wset([$t5, $t6], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5, $t6], "MoveTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "LineTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "inc", [$.ref(async () => (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t8) => { await $.wset([$t5, $t6], "LineBottom", $t8, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t5, $t6], "Pen", C, false)), "Color", (await $.wv([$t5, $t6], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t5, $t6], "MoveTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "LineTo", [(await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t5, $t6], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t5, $t6], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t5, $t6], "Brush", C, false)), "Color", (await $.wv([$t5, $t6], "clNavy", C, false)));
      } else {
        await $.mset((await $.wv([$t5, $t6], "Brush", C, false)), "Color", (await $.wv([$t5, $t6], "clBtnFace", C, false)));
      }
      await $.wset([$t5, $t6], "Bar", (await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t9) => { await $.mset((await $.wv([$t5, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t9); }), 22], C)));
      await $.stmt((await $.wcall([$t5, $t6], "FillRect", [(await $.wv([$t5, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "TextOut", [$.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t5, $t6], "Caption", C, false))], C)));
    }
    await $.wset([$t5, $t6], "SText", (await $.wcall([$t5, $t6], "ShortCutToText", [(await $.wv([$t5, $t6], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t5, $t6], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t5, $t6], "TextWidth", [(await $.wv([$t5, $t6], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t5, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t5, $t6], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t5, $t6], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t10 = (await $.wv([$t5, $t6], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t5, $t6, $t10], "Assigned", [(await $.wv([$t5, $t6, $t10], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t5, $t6, $t10], "Checked", C, false)))) {
            await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t5, $t6, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t5, $t6, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t10], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t11) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t11); }), 2], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t12) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t12); }), 2], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t13) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t13); }), 2], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t14) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t14); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t10], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t15) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t15); }), 1], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t16) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t16); }), 1], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t17) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t17); }), 1], C)));
            await $.stmt((await $.wcall([$t5, $t6, $t10], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t18) => { await $.mset((await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t18); }), 1], C)));
            if ($.truthy((await $.wv([$t5, $t6, $t10], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t10], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t5, $t6, $t10], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t5, $t6, $t10], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t5, $t6, $t10], "Images", C, false)), "Draw", [(await $.wv([$t5, $t6, $t10], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5, $t6, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t5, $t6, $t10], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t5, $t6, $t10], "ImageIndex", C, false)), (await $.wv([$t5, $t6, $t10], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TfmClassEdit", "miSelAllClick", async function miSelAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.wcall([$t19], "SelAlll", [(await $.wv([$t19], "ModEditData", C, false)), "ACC", $.eq((await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19], "miSelAll", C, false)))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmClassEdit", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "AdministrationData"));
    const $t21 = (await $.wv([$t20], "odsAccFlags", C, false));
    const $t22 = (await $.wv([$t20, $t21], "frmClassesAdvInfo", C, false));
    await $.wset([$t20, $t21, $t22], "Caption", $.add($.add("Sinif: \"", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))), "\""), C);
    await $.mcall((await $.wv([$t20, $t21, $t22], "evFlags", C, false)), "Close", []);
    await $.mcall((await $.wv([$t20, $t21, $t22], "odsAccFlags", C, false)), "Close", []);
    await $.stmt($.wcall([$t20, $t21, $t22], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t20, $t21, $t22], "SetVariable", ["classname", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))], C)));
    await $.mcall((await $.wv([$t20, $t21, $t22], "evFlags", C, false)), "Open", []);
    { const $t23 = $.sub((await $.mv((await $.mv((await $.wv([$t20, $t21, $t22], "evFlags", C, false)), "Items")), "Count")), 1);
      await $.wset([$t20, $t21, $t22], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t24 = true;
      for (;;) {
        if (!$t24) { await $.wset([$t20, $t21, $t22], "i", $.succ((await $.wv([$t20, $t21, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t24 = false;
        if (!($.ord((await $.wv([$t20, $t21, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t23))) break;
        await $.stmt((await $.wcall([$t20, $t21, $t22], "Locate", ["description", (await $.idx((await $.mv((await $.wv([$t20, $t21, $t22], "evFlags", C, false)), "Items")), [(await $.wv([$t20, $t21, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []], C)));
        { const $t25 = await $.iset((await $.mv((await $.wv([$t20, $t21, $t22], "evFlags", C, false)), "Checked")), [(await $.wv([$t20, $t21, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], $.eq((await $.mv((await $.wv([$t20, $t21, $t22], "odsAccFlagsACC", C, false)), "AsInteger")), 1)); if ($t25 !== undefined) { await $.mset((await $.wv([$t20, $t21, $t22], "evFlags", C, false)), "Checked", $t25); } }
        await $.tick();
      }
    }
    await $.mset((await $.wv([$t20, $t21, $t22], "cbOpType", C, false)), "KeyValue", 1);
    {
      const $t26 = (await $.wv([$t20, $t21, $t22], "odsClsBalAcc", C, false));
      await $.stmt($.wcall([$t20, $t21, $t22, $t26], "Close", [], C));
      await $.stmt((await $.wcall([$t20, $t21, $t22, $t26], "SetVariable", ["op", 1], C)));
      await $.stmt((await $.wcall([$t20, $t21, $t22, $t26], "SetVariable", ["classname", (await $.mv((await $.mcall((await $.wv([$t20, $t21, $t22, $t26], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))], C)));
      await $.mcall((await $.wv([$t20, $t21, $t22, $t26], "evBalAccs", C, false)), "Open", []);
      { const $t27 = $.sub((await $.mv((await $.mv((await $.wv([$t20, $t21, $t22, $t26], "evBalAccs", C, false)), "Items")), "Count")), 1);
        await $.wset([$t20, $t21, $t22, $t26], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t28 = true;
        for (;;) {
          if (!$t28) { await $.wset([$t20, $t21, $t22, $t26], "i", $.succ((await $.wv([$t20, $t21, $t22, $t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t28 = false;
          if (!($.ord((await $.wv([$t20, $t21, $t22, $t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t27))) break;
          await $.stmt((await $.wcall([$t20, $t21, $t22, $t26], "Locate", ["bal_cn", (await $.idx((await $.mv((await $.wv([$t20, $t21, $t22, $t26], "evBalAccs", C, false)), "Items")), [(await $.wv([$t20, $t21, $t22, $t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []], C)));
          { const $t29 = await $.iset((await $.mv((await $.wv([$t20, $t21, $t22, $t26], "evBalAccs", C, false)), "Checked")), [(await $.wv([$t20, $t21, $t22, $t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], $.eq((await $.mv((await $.wv([$t20, $t21, $t22, $t26], "odsClsBalAccACC", C, false)), "AsInteger")), 1)); if ($t29 !== undefined) { await $.mset((await $.wv([$t20, $t21, $t22, $t26], "evBalAccs", C, false)), "Checked", $t29); } }
          await $.tick();
        }
      }
    }
    await $.stmt($.wcall([$t20, $t21, $t22], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmClassEdit", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fmprofiles": null};
  await $.fixArgs(L0, ["sender"]);
  L0["fmprofiles"] = (await $.mcall((await $.v(C, "TfmProfOptions")), "Create", [Self]));
  try {
    await $.mset(L0["fmprofiles"], "userName", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "Classesdata")), "FieldByName", ["obj"])), "AsString")));
    await $.stmt((await $.mcall(L0["fmprofiles"], "Execute", [])));
    await $.mcall(L0["fmprofiles"], "ShowModal", []);
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["fmprofiles"]])))) {
      await $.mcall(L0["fmprofiles"], "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmClassEdit", "cgClassEditDblClick", async function cgClassEditDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "mid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "AdministrationData"));
    const $t31 = (await $.wv([$t30], "odsClsModAdvGrant", C, false));
    const $t32 = (await $.wv([$t30, $t31], "frmClassGrants", C, false));
    await $.mcall((await $.wv([$t30, $t31, $t32], "evAdvGrants", C, false)), "Close", []);
    await $.mcall((await $.wv([$t30, $t31, $t32], "odsClsModAdvGrant", C, false)), "Close", []);
    await $.stmt($.wcall([$t30, $t31, $t32], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t30, $t31, $t32], "SetVariable", ["mid", (await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataMODID", C, false)), "AsVariant"))], C)));
    await $.stmt((await $.wcall([$t30, $t31, $t32], "SetVariable", ["classname", (await $.mv((await $.mcall((await $.wv([$t30, $t31, $t32], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))], C)));
    await $.mcall((await $.wv([$t30, $t31, $t32], "ModAdvancedGrantsData", C, false)), "ClearVariables", []);
    await $.mcall((await $.wv([$t30, $t31, $t32], "ModAdvancedGrantsData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "ModAdvancedGrantsData", C, false)), "SetVariable", ["modid", (await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataMODID", C, false)), "AsVariant"))])));
    await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "ModAdvancedGrantsData", C, false)), "SetVariable", ["usernam", (await $.mv((await $.mcall((await $.wv([$t30, $t31, $t32], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))])));
    await $.mcall((await $.wv([$t30, $t31, $t32], "ModAdvancedGrantsData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t30, $t31, $t32], "ModeditDataX", C, false)), "Close", []);
    await $.mcall((await $.wv([$t30, $t31, $t32], "ModeditDataX", C, false)), "ClearVariables", []);
    await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "ModeditDataX", C, false)), "SetVariable", ["clsid", (await $.mv((await $.wv([$t30, $t31, $t32], "ClassesdataID", C, false)), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "ModeditDataX", C, false)), "SetVariable", ["modid", (await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataMODID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t30, $t31, $t32], "ModeditDataX", C, false)), "Open", []);
    await $.mcall((await $.wv([$t30, $t31, $t32], "evAdvGrants", C, false)), "Open", []);
    { const $t33 = $.sub((await $.mv((await $.mv((await $.wv([$t30, $t31, $t32], "evAdvGrants", C, false)), "Items")), "Count")), 1);
      await $.wset([$t30, $t31, $t32], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t34 = true;
      for (;;) {
        if (!$t34) { await $.wset([$t30, $t31, $t32], "i", $.succ((await $.wv([$t30, $t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t34 = false;
        if (!($.ord((await $.wv([$t30, $t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t33))) break;
        await $.stmt((await $.wcall([$t30, $t31, $t32], "Locate", ["description", (await $.idx((await $.mv((await $.wv([$t30, $t31, $t32], "evAdvGrants", C, false)), "Items")), [(await $.wv([$t30, $t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), []], C)));
        { const $t35 = await $.iset((await $.mv((await $.wv([$t30, $t31, $t32], "evAdvGrants", C, false)), "Checked")), [(await $.wv([$t30, $t31, $t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "odsClsModAdvGrantACC", C, false)), "AsInteger")), 1)); if ($t35 !== undefined) { await $.mset((await $.wv([$t30, $t31, $t32], "evAdvGrants", C, false)), "Checked", $t35); } }
        await $.tick();
      }
    }
    await $.mset((await $.wv([$t30, $t31, $t32], "cbIns", C, false)), "Enabled", $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataCNI", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t30, $t31, $t32], "cbUpd", C, false)), "Enabled", $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataCNU", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t30, $t31, $t32], "cbDel", C, false)), "Enabled", $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataCND", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t30, $t31, $t32], "cbIns", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataXINS", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t30, $t31, $t32], "cbUpd", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataXUPD", C, false)), "AsInteger")), 1));
    await $.mset((await $.wv([$t30, $t31, $t32], "cbDel", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t30, $t31, $t32], "ModeditdataXDEL", C, false)), "AsInteger")), 1));
    await $.stmt($.wcall([$t30, $t31, $t32], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

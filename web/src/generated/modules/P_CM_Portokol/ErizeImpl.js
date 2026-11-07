// Generated from ErizeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ErizeImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "ExtCtrls", "DB", "OracleData", "ImgList", "Menus", "CommonDecls", "sboapiDataModuleImpl", "Protokolimpl"]);
  const C = [U];
  U.defClass("TERizeFrm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "erize": {"name": "Erize", "type": "TOracleDataSet"}, "datasur": {"name": "DataSur", "type": "TDataSource"}, "erizeid": {"name": "ErizeID", "type": "TFloatField"}, "erizecurrency": {"name": "ErizeCURRENCY", "type": "TFloatField"}, "erizeboorowerid": {"name": "ErizeBOOROWERID", "type": "TFloatField"}, "erizecreditlineamount": {"name": "ErizeCREDITLINEAMOUNT", "type": "TFloatField"}, "erizeannualyinterestrate": {"name": "ErizeANNUALYINTERESTRATE", "type": "TFloatField"}, "erizeinitialamount": {"name": "ErizeINITIALAMOUNT", "type": "TFloatField"}, "erizeannualyoverduerate": {"name": "ErizeANNUALYOVERDUERATE", "type": "TFloatField"}, "erizeannualypenaltyrate": {"name": "ErizeANNUALYPENALTYRATE", "type": "TFloatField"}, "erizedateofconclusion": {"name": "ErizeDATEOFCONCLUSION", "type": "TDateTimeField"}, "erizeduedatefirstcontract": {"name": "ErizeDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "erizeduedatelastcontract": {"name": "ErizeDUEDATELASTCONTRACT", "type": "TDateTimeField"}, "erizenumberofcredit": {"name": "ErizeNUMBEROFCREDIT", "type": "TWideStringField"}, "erizepurposeofcredit": {"name": "ErizePURPOSEOFCREDIT", "type": "TWideStringField"}, "erizeusrgroup": {"name": "ErizeUSRGROUP", "type": "TFloatField"}, "erizebranchid": {"name": "ErizeBRANCHID", "type": "TFloatField"}, "erizeusid": {"name": "ErizeUSID", "type": "TFloatField"}, "erizestatus": {"name": "ErizeSTATUS", "type": "TFloatField"}, "erizecustomertype": {"name": "ErizeCUSTOMERTYPE", "type": "TFloatField"}, "erizecredittype": {"name": "ErizeCREDITTYPE", "type": "TFloatField"}, "erizepersonaltype": {"name": "ErizePERSONALTYPE", "type": "TFloatField"}, "erizestopcalcdate": {"name": "ErizeSTOPCALCDATE", "type": "TDateTimeField"}, "erizerest": {"name": "ErizeREST", "type": "TFloatField"}, "erizeinterestrest": {"name": "ErizeINTERESTREST", "type": "TFloatField"}, "erizeduerest": {"name": "ErizeDUEREST", "type": "TFloatField"}, "erizedueinterestrest": {"name": "ErizeDUEINTERESTREST", "type": "TFloatField"}, "erizepenaltyrest": {"name": "ErizePENALTYREST", "type": "TFloatField"}, "erizereserveid": {"name": "ErizeRESERVEID", "type": "TFloatField"}, "erizeduereserveid": {"name": "ErizeDUERESERVEID", "type": "TFloatField"}, "erizeobligation": {"name": "ErizeOBLIGATION", "type": "TFloatField"}, "erizepledgeprice": {"name": "ErizePLEDGEPRICE", "type": "TFloatField"}, "erizepledgeid": {"name": "ErizePLEDGEID", "type": "TFloatField"}, "erizecontractaccno": {"name": "ErizeCONTRACTACCNO", "type": "TWideStringField"}, "erizeinterestaccno": {"name": "ErizeINTERESTACCNO", "type": "TWideStringField"}, "erizedueloanaccno": {"name": "ErizeDUELOANACCNO", "type": "TWideStringField"}, "erizeloanaccno": {"name": "ErizeLOANACCNO", "type": "TWideStringField"}, "erizeboorowerrest": {"name": "ErizeBOOROWERREST", "type": "TFloatField"}, "erizeval_name": {"name": "ErizeVAL_NAME", "type": "TWideStringField"}, "erizename": {"name": "ErizeNAME", "type": "TWideStringField"}, "maingrid": {"name": "MainGrid", "type": "TDBGridEh"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "seilmirizlri1": {"name": "Seilmirizlri1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("ERizeFrm", null, "TERizeFrm");
  });
  U.method("TERizeFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TERizeFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Erize")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TERizeFrm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Erize")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TERizeFrm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TERizeFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Erize")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TERizeFrm", "MainGridDrawColumnCell", async function MainGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t1 = L0["sender"];
    if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t1], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy(($.eq((await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 4)))) {
        await $.stmt((await $.mcall((await $.wv([$t1], "StatusImages", C, false)), "Draw", [(await $.wv([$t1], "Canvas", C, false)), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TERizeFrm", "Seilmirizlri1Click", async function Seilmirizlri1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "mainform")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

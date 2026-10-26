// Generated from UnitArchiveWares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitArchiveWares", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "ExtCtrls", "Grids", "DBGridEh", "StdCtrls", "Buttons", "Mask", "DBCtrls", "ComCtrls", "sboapiDataModuleImpl", "UnitData", "UnitDat", "UnitWaresArSent", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TArchiveWares", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgridehargr": {"name": "DBGridEhArGr", "type": "TDBGridEh"}, "dbgridarwares": {"name": "DBGridArWares", "type": "TDBGridEh"}, "bitbtnar": {"name": "BitBtnAr", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dtp_b": {"name": "DTP_B", "type": "TDateTimePicker"}, "dtp_e": {"name": "DTP_E", "type": "TDateTimePicker"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("ArchiveWares", null, "TArchiveWares");
    U.var_("v1_groups_id", 0, "real");
  });
  U.method("TArchiveWares", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSGroupsAr")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSetArWares")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSSumWaresAr")), "Active", true);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArchiveWares", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSGroupsAr")), "Active", false);
  await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSetArWares")), "Active", false);
  await $.mset((await $.mv((await $.v(C, "DataModWares")), "ODSSumWaresAr")), "Active", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TArchiveWares", "BitBtnArClick", async function BitBtnArClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["5 fazidən az olanları arxivə göndərməyə əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["archive_wares", []])));
    await $.stmt((await $.call(C, "MessageDlg", ["Arxivə göndərildi.", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArchiveWares", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fi_date": 0, "la_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["fi_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.mv((await $.v(C, "ArchiveWares")), "DTP_B")), "DateTime"))]))]));
  L0["la_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.mv((await $.v(C, "ArchiveWares")), "DTP_E")), "DateTime"))]))]));
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t1 = (await $.mv((await $.v(C, "DataModWares")), "ODSetArWares"));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["B_DATE", (await $.wv([$t1], "Fi_Date", { get: async () => L0["fi_date"], set: async (v) => { L0["fi_date"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["E_DATE", (await $.wv([$t1], "La_Date", { get: async () => L0["la_date"], set: async (v) => { L0["la_date"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "Refresh", [], C));
    }
    {
      const $t2 = (await $.mv((await $.v(C, "DataModWares")), "ODSSumWaresAr"));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["B_DATE", (await $.wv([$t2], "Fi_Date", { get: async () => L0["fi_date"], set: async (v) => { L0["fi_date"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["E_DATE", (await $.wv([$t2], "La_Date", { get: async () => L0["la_date"], set: async (v) => { L0["la_date"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArchiveWares", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ArWaresS", (await $.mcall((await $.v(C, "TArWaresS")), "Create", [Self])));
  await $.mcall((await $.v(C, "ArWaresS")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

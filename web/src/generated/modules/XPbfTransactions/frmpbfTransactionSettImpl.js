// Generated from frmpbfTransactionSettImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmpbfTransactionSettImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "ComCtrls", "StdCtrls", "Grids", "DBGridEh", "Db", "OracleData", "ExtCtrls", "DBCtrls", "Buttons", "Dialogs", "ExtDlgs", "sboapiDataModuleImpl", "dmpbf_transactionimpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmpbfTransactionSett", "TForm", {"statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "pbfsetting": {"name": "pbfsetting", "type": "TOracleDataSet"}, "pbfsettingchilds": {"name": "pbfsettingchilds", "type": "TOracleDataSet"}, "pbfsettingds": {"name": "pbfsettingds", "type": "TDataSource"}, "pbfsettingchildsds": {"name": "pbfsettingchildsds", "type": "TDataSource"}, "pbfsettingchildsmainid": {"name": "pbfsettingchildsMAINID", "type": "TFloatField"}, "pbfsettingchildsdebit": {"name": "pbfsettingchildsDEBIT", "type": "TWideStringField"}, "pbfsettingchildscredit": {"name": "pbfsettingchildsCREDIT", "type": "TWideStringField"}, "pbfsettingchildsdescription": {"name": "pbfsettingchildsDESCRIPTION", "type": "TWideStringField"}, "pbfsettingfromfilial": {"name": "pbfsettingFROMFILIAL", "type": "TWideStringField"}, "pbfsettingtofilial": {"name": "pbfsettingTOFILIAL", "type": "TWideStringField"}, "pbfsettingid": {"name": "pbfsettingID", "type": "TFloatField"}, "pbfsettingchildsid": {"name": "pbfsettingchildsID", "type": "TFloatField"}, "pbfsettingchildsdebitfilial": {"name": "pbfsettingchildsDEBITFILIAL", "type": "TWideStringField"}, "pbfsettingchildskreditfilial": {"name": "pbfsettingchildsKREDITFILIAL", "type": "TWideStringField"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}, "pbfotypes": {"name": "pbfotypes", "type": "TOracleDataSet"}, "dspbfotypes": {"name": "dspbfotypes", "type": "TDataSource"}, "pbfotypeoperationsds": {"name": "pbfotypeoperationsds", "type": "TDataSource"}, "pbfotypesname": {"name": "pbfotypesNAME", "type": "TWideStringField"}, "pbfotypesid": {"name": "pbfotypesID", "type": "TFloatField"}, "pbfotypeoperations": {"name": "pbfotypeoperations", "type": "TOracleDataSet"}, "pbfotypeoperationsid": {"name": "pbfotypeoperationsID", "type": "TFloatField"}, "pbfotypeoperationsmainid": {"name": "pbfotypeoperationsMAINID", "type": "TFloatField"}, "pbfotypeoperationsdebitfilial": {"name": "pbfotypeoperationsDEBITFILIAL", "type": "TWideStringField"}, "pbfotypeoperationsdebit": {"name": "pbfotypeoperationsDEBIT", "type": "TWideStringField"}, "pbfotypeoperationskreditfilial": {"name": "pbfotypeoperationsKREDITFILIAL", "type": "TWideStringField"}, "pbfotypeoperationscredit": {"name": "pbfotypeoperationsCREDIT", "type": "TWideStringField"}, "pbfotypeoperationsdescription": {"name": "pbfotypeoperationsDESCRIPTION", "type": "TWideStringField"}, "pbfotypeoperationstype": {"name": "pbfotypeoperationsTYPE", "type": "TFloatField"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrideh5": {"name": "DBGridEh5", "type": "TDBGridEh"}, "pbfothersettings": {"name": "pbfothersettings", "type": "TOracleDataSet"}, "pbfosfilials": {"name": "PbfOSFilials", "type": "TOracleDataSet"}, "pbfothersettingsds": {"name": "pbfothersettingsds", "type": "TDataSource"}, "pbfothersettingsid": {"name": "pbfothersettingsID", "type": "TFloatField"}, "pbfothersettingsfilialid": {"name": "pbfothersettingsFILIALID", "type": "TFloatField"}, "pbfothersettingsstamp": {"name": "pbfothersettingsSTAMP", "type": "TBlobField"}, "pbfothersettingschiefsign": {"name": "pbfothersettingsCHIEFSIGN", "type": "TBlobField"}, "pbfothersettingsaccoutantsign": {"name": "pbfothersettingsACCOUTANTSIGN", "type": "TBlobField"}, "pbfosfilialsid": {"name": "PbfOSFilialsID", "type": "TFloatField"}, "pbfosfilialsname": {"name": "PbfOSFilialsNAME", "type": "TWideStringField"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbimage1": {"name": "DBImage1", "type": "TDBImage"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "pbfosfilialsds": {"name": "PbfOSFilialsds", "type": "TDataSource"}, "dbimage2": {"name": "DBImage2", "type": "TDBImage"}, "dbimage3": {"name": "DBImage3", "type": "TDBImage"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "openpicturedialog1": {"name": "OpenPictureDialog1", "type": "TOpenPictureDialog"}}, {});
  U.init(async () => {
    U.var_("frmpbfTransactionSett", null, "TfrmpbfTransactionSett");
  });
  U.method("TfrmpbfTransactionSett", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmpbfTransactionSett", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmpbfTransactionSett", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "pbfsetting")), "open", []);
  await $.mcall((await $.v(C, "pbfsettingchilds")), "open", []);
  await $.mcall((await $.v(C, "pbfotypes")), "open", []);
  await $.mcall((await $.v(C, "pbfotypeoperations")), "open", []);
  await $.mcall((await $.v(C, "pbfothersettings")), "open", []);
  await $.mcall((await $.v(C, "PbfOSFilials")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmpbfTransactionSett", "DBGridEh2KeyDown", async function DBGridEh2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t1 = L0["sender"];
    if ($.truthy((await $.and_(($.eq((await $.wv([$t1], "key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t1], "VK_DELETE", C, false)))), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      if ($.truthy($.eq((await $.wcall([$t1], "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.wv([$t1], "mtConfirmation", C, false)), [(await $.wv([$t1], "mbYes", C, false)), (await $.wv([$t1], "mbNo", C, false))], 0], C)), (await $.wv([$t1], "mrYes", C, false))))) {
        await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "Delete", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmpbfTransactionSett", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh4")), "Columns")), [1])), "PickList")), "Clear", []);
  await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh4")), "Columns")), [3])), "PickList")), "Clear", []);
  {
    const $t2 = (await $.v(C, "dmpbf_transaction"));
    const $t3 = (await $.wv([$t2], "kindofaccs", C, false));
    await $.stmt($.wcall([$t2, $t3], "first", [], C));
    while ($.truthy($.not((await $.mv((await $.wv([$t2, $t3], "kindofaccs", C, false)), "eof"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t2, $t3], "DBGridEh4", C, false)), "Columns")), [1])), "PickList")), "Add", [(await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["acc_no"], C)), "asstring"))])));
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t2, $t3], "DBGridEh4", C, false)), "Columns")), [3])), "PickList")), "Add", [(await $.mv((await $.wcall([$t2, $t3], "fieldbyname", ["acc_no"], C)), "asstring"))])));
      await $.mcall((await $.wv([$t2, $t3], "kindofaccs", C, false)), "next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmpbfTransactionSett", "pbfotypeoperationsBeforePost", async function pbfotypeoperationsBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "pbfotypeoperations")), "FieldByName", ["Type"])), "asInteger", 1);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfrmpbfTransactionSett", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage1")), "DataSource")), "DataSet")), "edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage1")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage1")), "DataSource")), "DataSet")), "Post", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage1")), "DataSource")), "DataSet")), "RefreshRecord", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmpbfTransactionSett", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage2")), "DataSource")), "DataSet")), "edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage2")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage2")), "DataSource")), "DataSet")), "Post", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage2")), "DataSource")), "DataSet")), "RefreshRecord", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmpbfTransactionSett", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage3")), "DataSource")), "DataSet")), "edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBImage3")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage3")), "DataSource")), "DataSet")), "Post", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBImage3")), "DataSource")), "DataSet")), "RefreshRecord", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

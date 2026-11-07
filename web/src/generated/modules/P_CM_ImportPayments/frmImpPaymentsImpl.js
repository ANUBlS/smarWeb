// Generated from frmImpPaymentsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmImpPaymentsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Excelxp", "OleServer", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "Oracle", "OracleData", "Dialogs", "CMExcelExport", "DMImpPaymentsImpl", "CommonDecls", "sbsystem"]);
  const C = [U];
  U.defClass("TfrmImpPayments", "TForm", {"savedlg": {"name": "SaveDlg", "type": "TOpenDialog"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "savepathedit": {"name": "SavePathEdit", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dtpimpdate": {"name": "DTPImpDate", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "progressshower": {"name": "ProgressShower", "type": "TProgressBar"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "exortoperations": {"name": "ExortOperations", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("frmImpPayments", null, "TfrmImpPayments");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmImpPayments")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmImpPayments", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmImpPayments", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmImpPayments", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmImpPayments", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "SaveDlg"));
    if ($.truthy((await $.wv([$t1], "Execute", C, false)))) {
      await $.mset((await $.wv([$t1], "SavePathEdit", C, false)), "Text", (await $.wv([$t1], "FileName", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmImpPayments", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "row": 0, "cellstr": '', "p_maina": 0, "p_inta": 0, "p_pena": 0, "p_trdate": 0, "accno": '', "crno": '', "errmessage": '', "custname": '', "checkresults": 0, "countoperaions": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["startrow"] = 2;
  L0["rootcell"] = 2;
  await $.mcall((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet2")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet2")), "open", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet2")), "Session")), "Commit", []);
  L0["countoperaions"] = 0;
  L0["row"] = L0["startrow"];
  await $.mset((await $.v(C, "ProgressShower")), "Position", 1);
  await $.mset((await $.v(C, "ProgressShower")), "Max", 100);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  try {
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "SavePathEdit")), "Text"))])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["MIS"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    L0["cellstr"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["row"], L0["rootcell"]]));
    {
      const $t2 = (await $.wobj(C, "DMImpPayments"));
      while ($.truthy($.ne((await $.wv([$t2], "CellStr", { get: async () => L0["cellstr"], set: async (v) => { L0["cellstr"] = v; }, local: true }, false)), ""))) {
        try {
          await $.wset([$t2], "crno", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 1])), { get: async () => L0["crno"], set: async (v) => { L0["crno"] = v; }, local: true });
          await $.wset([$t2], "CustName", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 2])), { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true });
          await $.wset([$t2], "p_maina", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 3])), { get: async () => L0["p_maina"], set: async (v) => { L0["p_maina"] = v; }, local: true });
          await $.wset([$t2], "p_inta", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 4])), { get: async () => L0["p_inta"], set: async (v) => { L0["p_inta"] = v; }, local: true });
          await $.wset([$t2], "p_pena", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 5])), { get: async () => L0["p_pena"], set: async (v) => { L0["p_pena"] = v; }, local: true });
          await $.wset([$t2], "p_trdate", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 6])), { get: async () => L0["p_trdate"], set: async (v) => { L0["p_trdate"] = v; }, local: true });
          await $.wset([$t2], "accno", (await $.idx((await $.mv((await $.wv([$t2], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 7])), { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true });
          await $.mset((await $.wv([$t2], "ProgressShower", C, false)), "Position", 50);
          {
            const $t4 = (await $.wv([$t2], "DMImpPayments", C, false));
            await $.wset([$t2, $t4], "CheckResults", (await $.mcall((await $.wv([$t2, $t4], "cm_dif_trans", C, false)), "CallStringFunction", ["add_pay", ["p_crnum", (await $.wv([$t2, $t4], "crno", { get: async () => L0["crno"], set: async (v) => { L0["crno"] = v; }, local: true }, false)), "p_cust", (await $.wv([$t2, $t4], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)), "p_main", (await $.wv([$t2, $t4], "p_maina", { get: async () => L0["p_maina"], set: async (v) => { L0["p_maina"] = v; }, local: true }, false)), "p_int", (await $.wv([$t2, $t4], "p_inta", { get: async () => L0["p_inta"], set: async (v) => { L0["p_inta"] = v; }, local: true }, false)), "p_pen", (await $.wv([$t2, $t4], "p_pena", { get: async () => L0["p_pena"], set: async (v) => { L0["p_pena"] = v; }, local: true }, false)), "p_dat", (await $.wv([$t2, $t4], "p_trdate", { get: async () => L0["p_trdate"], set: async (v) => { L0["p_trdate"] = v; }, local: true }, false)), "p_accno", (await $.wv([$t2, $t4], "accno", { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true }, false))]])), { get: async () => L0["checkresults"], set: async (v) => { L0["checkresults"] = v; }, local: true });
            await $.wset([$t2, $t4], "CountOperaions", $.add((await $.wv([$t2, $t4], "CountOperaions", { get: async () => L0["countoperaions"], set: async (v) => { L0["countoperaions"] = v; }, local: true }, false)), 1), { get: async () => L0["countoperaions"], set: async (v) => { L0["countoperaions"] = v; }, local: true });
            await $.stmt((await $.wcall([$t2, $t4], "Inc", [$.ref(async () => (await $.wv([$t2, $t4], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t2, $t4], "Row", $t5, { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }); })], C)));
            await $.wset([$t2, $t4], "CellStr", (await $.idx((await $.mv((await $.wv([$t2, $t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t2, $t4], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), (await $.wv([$t2, $t4], "RootCell", { get: async () => L0["rootcell"], set: async (v) => { L0["rootcell"] = v; }, local: true }, false))])), { get: async () => L0["cellstr"], set: async (v) => { L0["cellstr"] = v; }, local: true });
          }
        } catch ($t3) {
          $.rethrowControl($t3);
          if ($.excIs($t3, "EOracleError")) {
            L0["e"] = $.exc($t3);
            await $.wset([$t2], "ErrMessage", (await $.mv((await $.wv([$t2], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true });
            await $.stmt((await $.wcall([$t2], "ShowMessage", [$.add($.add((await $.wv([$t2], "ErrMessage", { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true }, false)), "---"), (await $.wv([$t2], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)))], C)));
            continue;
          }
          else { throw $t3; }
        }
        await $.tick();
      }
    }
  } finally {
    await $.mcall((await $.v(C, "ExcelApplication1")), "Quit", []);
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DMImpPayments")), "cm_dif_trans")), "Session")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMImpPayments")), "cm_dif_trans")), "CallProcedure", ["add_payy", []])));
    await $.mset((await $.v(C, "ProgressShower")), "Position", 100);
    await $.mset((await $.v(C, "ProgressShower")), "Position", 0);
    await $.mcall((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet1")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet1")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet1")), "RecordCount")), 0))) {
      await $.stmt((await $.call(C, "ShowMessage", [$.add((await $.call(C, "IntToStr", [L0["countoperaions"]])), " - sayda əməliyyat aparıldı")])));
    } else {
      if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add($.add($.add((await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DMImpPayments")), "OracleDataSet1")), "RecordCount"))])), " - sayda əməliyyat aparla bilmedi"), "\r"), " Excele atmaq isteyirsinizmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYES"))))) {
        {
          const $t6 = (await $.wobj(C, "ExortOperations"));
          await $.stmt($.wcall([$t6], "Connect", [], C));
          await $.stmt((await $.wcall([$t6], "ExportDataset", [(await $.mv((await $.wv([$t6], "DMImpPayments", C, false)), "OracleDataSet1")), "Kredit Əməliyyatları", (await $.wv([$t6], "True", C, false))], C)));
          await $.stmt($.wcall([$t6], "Disconnect", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmImpPayments", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMImpPayments", (await $.mcall((await $.v(C, "TDMImpPayments")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmImpPayments", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMImpPayments")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmImpPayments", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPImpDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmImpPayments", (await $.mcall((await $.v(C, "TfrmImpPayments")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

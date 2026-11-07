// Generated from PortfelFilialsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PortfelFilialsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "StdCtrls", "Buttons", "CheckLst", "Evanescence", "ComCtrls", "ExtCtrls", "PortfelFilialsDatModImpl", "CommonDecls", "sbsystem"]);
  const C = [U];
  U.defClass("TPFForm", "TForm", {"cmexcelexport": {"name": "CMExcelExport", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dtpbegin": {"name": "DTPBegin", "type": "TDateTimePicker"}, "dtpend": {"name": "DTPEnd", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "evanescence1": {"name": "Evanescence1", "type": "TEvanescence"}, "evanescence2": {"name": "Evanescence2", "type": "TEvanescence"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "prbarpart": {"name": "PrBarPart", "type": "TProgressBar"}, "prbarmain": {"name": "PrBarMain", "type": "TProgressBar"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("PFForm", null, "TPFForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PFForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPFForm", "FilterString", async function FilterString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"elgun": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["elgun"]);
  L0["f_ev"] = $.fn(async function F_Ev(p0, p1) {
  const L1 = {"cs": $.copyArg(p0), "ev": $.copyArg(p1), result: '', "s": '', "s1": '', "i": 0};
  await $.fixArgs(L1, ["cs", "ev"]);
  L1["s"] = "";
  L1["s1"] = "";
  { const $t1 = $.sub((await $.mv((await $.mv(L1["ev"], "GetCheckedKeyList")), "Count")), 1);
    L1["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L1["i"] = $.succ(L1["i"], 1); }
      $t2 = false;
      if (!($.ord(L1["i"]) <= $.ord($t1))) break;
      L1["s1"] = $.add($.add($.add($.add("(", L1["cs"]), "="), (await $.idx((await $.mv(L1["ev"], "GetCheckedKeyList")), [L1["i"]]))), ")");
      if ($.truthy($.eq(L1["s"], ""))) {
        L1["s"] = L1["s1"];
      } else {
        L1["s"] = $.add($.add(L1["s"], " or "), L1["s1"]);
      }
      await $.tick();
    }
  }
  L1["result"] = L1["s"];
  return L1.result;
});
  L0["result"] = (await $.callv(L0["f_ev"], ["ID", L0["elgun"]]));
  return L0.result;
}, {"params": ["Elgun"], "kind": "function", "ptypes": ["TEvanescence"]});
  U.method("TPFForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPFForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PFDataMod", (await $.mcall((await $.v(C, "TPFDataMod")), "Create", [Self])));
  await $.mcall((await $.v(C, "Evanescence1")), "Open", []);
  await $.mcall((await $.v(C, "Evanescence1")), "CheckAll", []);
  await $.mcall((await $.v(C, "Evanescence2")), "Open", []);
  await $.mcall((await $.v(C, "Evanescence2")), "CheckAll", []);
  await $.mset((await $.v(C, "DTPBegin")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPEnd")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPFForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Evanescence1")), "Close", []);
  await $.mcall((await $.v(C, "Evanescence2")), "Close", []);
  await $.mcall((await $.v(C, "PFDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPFForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cntper": 0, "cntbrch": 0, "perid": 0, "brid": 0, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "PFDataMod")), "Results")), "Session")), "Commit", []);
  {
    const $t3 = (await $.mv((await $.v(C, "PFDataMod")), "Persons"));
    await $.wset([$t3], "Filter", (await $.wcall([$t3], "FilterString", [(await $.wv([$t3], "Evanescence2", C, false))], C)), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "False", C, false)), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "True", C, false)), C);
    await $.stmt($.wcall([$t3], "First", [], C));
  }
  {
    const $t4 = (await $.mv((await $.v(C, "PFDataMod")), "Branches"));
    await $.wset([$t4], "Filter", (await $.wcall([$t4], "FilterString", [(await $.wv([$t4], "Evanescence1", C, false))], C)), C);
    await $.wset([$t4], "Filtered", (await $.wv([$t4], "False", C, false)), C);
    await $.wset([$t4], "Filtered", (await $.wv([$t4], "True", C, false)), C);
    await $.stmt($.wcall([$t4], "First", [], C));
  }
  await $.mset((await $.v(C, "PrBarPart")), "Position", 0);
  await $.mset((await $.v(C, "PrBarMain")), "Position", 0);
  L0["bdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBegin")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPEnd")), "DateTime"))]))]));
  { const $t5 = (await $.mv((await $.mv((await $.v(C, "PFDataMod")), "Persons")), "RecordCount"));
    L0["cntper"] = 1;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["cntper"] = $.succ(L0["cntper"], 1); }
      $t6 = false;
      if (!($.ord(L0["cntper"]) <= $.ord($t5))) break;
      await $.mset((await $.v(C, "PrBarMain")), "Position", $.idiv(($.mul((L0["cntper"]), 100)), (await $.mv((await $.mv((await $.v(C, "PFDataMod")), "Persons")), "RecordCount"))));
      L0["perid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PFDataMod")), "Persons")), "FieldByName", ["ID"])), "AsInteger"));
      if ($.truthy($.eq(L0["cntper"], 2))) {
        await $.mcall((await $.mv((await $.v(C, "PFDataMod")), "Branches")), "First", []);
      }
      { const $t7 = (await $.mv((await $.mv((await $.v(C, "PFDataMod")), "Branches")), "RecordCount"));
        L0["cntbrch"] = 1;
        let $t8 = true;
        for (;;) {
          if (!$t8) { L0["cntbrch"] = $.succ(L0["cntbrch"], 1); }
          $t8 = false;
          if (!($.ord(L0["cntbrch"]) <= $.ord($t7))) break;
          await $.mset((await $.v(C, "PrBarPart")), "Position", $.idiv(($.mul(L0["cntbrch"], 100)), (await $.mv((await $.mv((await $.v(C, "PFDataMod")), "Branches")), "RecordCount"))));
          L0["brid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PFDataMod")), "Branches")), "FieldByName", ["ID"])), "AsInteger"));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "PFDataMod")), "CM_AK_REPORTS")), "CallProcedure", ["Portfel_Filials", [L0["brid"], L0["perid"], L0["bdat"], L0["edat"]]])));
          await $.mcall((await $.mv((await $.v(C, "PFDataMod")), "Branches")), "next", []);
          await $.tick();
        }
      }
      await $.mcall((await $.mv((await $.v(C, "PFDataMod")), "Persons")), "next", []);
      await $.mset((await $.v(C, "PrBarMain")), "Position", 100);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "PrBarPart")), "Position", 0);
  await $.mset((await $.v(C, "PrBarMain")), "Position", 0);
  {
    const $t9 = (await $.wobj(C, "CMExcelExport"));
    await $.mcall((await $.mv((await $.wv([$t9], "PFDataMod", C, false)), "Results")), "CloseAll", []);
    await $.mcall((await $.mv((await $.wv([$t9], "PFDataMod", C, false)), "Results")), "Open", []);
    await $.stmt($.wcall([$t9], "Connect", [], C));
    await $.stmt((await $.wcall([$t9], "ExportDataset", [(await $.mv((await $.wv([$t9], "PFDataMod", C, false)), "Results")), "ww", (await $.wv([$t9], "true", C, false))], C)));
    await $.stmt($.wcall([$t9], "Disconnect", [], C));
    await $.mcall((await $.mv((await $.wv([$t9], "PFDataMod", C, false)), "Results")), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPFForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Evanescence1")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPFForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Evanescence1")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PFForm", (await $.mcall((await $.v(C, "TPFForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}

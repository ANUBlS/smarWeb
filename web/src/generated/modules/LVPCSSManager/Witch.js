// Generated from Witch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Witch", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Data_Unit", "Dialogs", "Db", "Grids", "DBGrids", "OracleData", "sboapiDataModuleImpl", "LVPCSSImpl"]);
  const C = [U];
  U.defClass("TFormWitch", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("FormWitch", null, "TFormWitch");
  });
  U.method("TFormWitch", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t1 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t2 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t2, (await $.wv([$t1], "msDefault", C, false)))) {
          await $.wset([$t1], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msCommit", C, false)))) {
          await $.wset([$t1], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msReject", C, false)))) {
          await $.wset([$t1], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msFileCreated", C, false)))) {
          await $.wset([$t1], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msVerifikator", C, false)))) {
          await $.wset([$t1], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msFVerifikator", C, false)))) {
          await $.wset([$t1], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msAvtorizator", C, false)))) {
          await $.wset([$t1], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t2, (await $.wv([$t1], "msReturnBack", C, false)))) {
          await $.wset([$t1], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "LVPCSSForm", C, false)), "ImageList")), "Draw", [(await $.wv([$t1], "Canvas", C, false)), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t1], "DefaultDrawColumnCell", [(await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t1], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t1], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy(($.eq(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t1], "DBGrid1", C, false)))))) {
        { const $t3 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t3, (await $.wv([$t1], "MsHeadOffice", C, false)))) {
            await $.wset([$t1], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t1], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t1], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t1], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "LVPCSSForm", C, false)), "ImageListFilial")), "Draw", [(await $.wv([$t1], "Canvas", C, false)), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t1], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t1], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TFormWitch", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t4 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t5 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t5, (await $.wv([$t4], "msDefault", C, false)))) {
          await $.wset([$t4], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msCommit", C, false)))) {
          await $.wset([$t4], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msReject", C, false)))) {
          await $.wset([$t4], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msFileCreated", C, false)))) {
          await $.wset([$t4], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msVerifikator", C, false)))) {
          await $.wset([$t4], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msFVerifikator", C, false)))) {
          await $.wset([$t4], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msAvtorizator", C, false)))) {
          await $.wset([$t4], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, (await $.wv([$t4], "msReturnBack", C, false)))) {
          await $.wset([$t4], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t4], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t4], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "LVPCSSForm", C, false)), "ImageList")), "Draw", [(await $.wv([$t4], "Canvas", C, false)), (await $.mv((await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t4], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t4], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t4], "DefaultDrawColumnCell", [(await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t4], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t4], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t4], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy(($.eq(((await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t4], "DBGrid1", C, false)))))) {
        { const $t6 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t6, (await $.wv([$t4], "MsHeadOffice", C, false)))) {
            await $.wset([$t4], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t4], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t4], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t4], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "LVPCSSForm", C, false)), "ImageListFilial")), "Draw", [(await $.wv([$t4], "Canvas", C, false)), (await $.mv((await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t4], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t4], "True", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  return U;
}

// Generated from CommanParametrs.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CommanParametrs", ["SysUtils", "Classes", "Controls", "Forms", "Messages", "DB", "Windows", "XDBGrids", "DBGrids"]);
  const C = [U];
  U.init(async () => {
    U.var_("CommonApplication", null, "TApplication");
    U.var_("CommonApplication1", null, "TApplication");
    U.var_("commangrid", null, "TDBGrid");
    U.var_("gridmesuliyyet", null, "TDBGrid");
    U.var_("gridferdiqeza", null, "TDBGrid");
    U.var_("Maininvestgrid", null, "TDBGrid");
    U.var_("Reinsgrid", null, "TXDBGrid");
    U.var_("Xcommangrid", null, "TXDBGrid");
    U.var_("commandataset", null, "Tdataset");
    U.var_("commandatasetTravel", null, "Tdataset");
    U.var_("commandatasetcargo", null, "Tdataset");
    U.var_("contractstatus1", 0, "integer");
    U.var_("commandepid", 0, "integer");
    U.var_("frmloss", 0, "integer");
    U.var_("commoncid", 0, "integer");
    U.var_("contactid", 0, "integer");
    U.var_("ins_cutsid", 0, "integer");
    U.var_("contractstatus", 0, "integer");
    U.var_("MK_ID", 0, "integer");
    U.var_("instype_id", 0, "integer");
    U.var_("p_contractstate", 0, "integer");
    U.var_("lossimtina", 0, "integer");
    U.var_("lossimtinaR", 0, "integer");
    U.var_("plossid", 0, "integer");
    U.var_("lossoperatin", 0, "integer");
    U.var_("losstesdiq", 0, "integer");
    U.var_("lossstatus", 0, "integer");
    U.var_("moduletype", '', "String");
    U.var_("opetion_acc", '', "String");
    U.var_("opetion", '', "String");
    U.var_("opetion_avto", '', "String");
    U.var_("ins_or_upd", '', "String");
    U.var_("op_cust", '', "String");
    U.var_("BarderoReportType", '', "String");
    U.var_("Bordero_type", '', "String");
    U.var_("bordero_say", '', "String");
    U.var_("bardero_hesabat", '', "String");
  });
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], ""])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.func("LoadPlugin1", async function LoadPlugin1(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], ""])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  return U;
}

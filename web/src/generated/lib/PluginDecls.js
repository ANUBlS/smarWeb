// Generated from PluginDecls.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PluginDecls", ["Windows", "SysUtils", "Classes", "Graphics", "IniFiles"]);
  const C = [U];
  $.defRecord("tplugin", {"module": () => '', "param": () => '', "modulehandle": () => null});
  U.init(async () => {
    U.const("CCount", "Count");
    U.const("CCaption", "Caption");
    U.const("CShortCut", "ShortCut");
    U.const("CMenuIcon", "Icon");
    U.const("CPlugin", "Plugin");
    U.const("CPluginParam", "PluginParam");
    U.const("CSection", "%s\\MenuItem%d");
    U.const("CPluginInitProcName", "InitPlugin");
    U.const("CPluginFinalizeFuncName", "FinalizePlugin");
    U.const("CPluginIconGetFuncName", "GetIcon");
    U.const("CPluginMenuItemCheckedFunc", "Checked");
  });
  return U;
}

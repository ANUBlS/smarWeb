// Generated from bsdkdll.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("bsdkdll", []);
  const C = [U];
  U.init(async () => {
    U.const("BSDK_RESULT_BASE", 0);
    U.const("BSDK_ERROR_INVALID_LICENSE", $.sub((await $.v(C, "BSDK_RESULT_BASE")), 12));
    U.const("BSDK_LICENSE_TYPE_FUTRONIC", 1);
    U.const("BSDK_LICENSE_TYPE_SENTINEL", 2);
    U.const("BSDK_LICENSE_TYPE_HARDWARE", 4);
    U.const("BSDK_LICENSE_TYPE_SENTINEL_SHK", 8);
    U.const("BSDK_LICENSE_TYPE_ALL", 255);
    U.const("Bsdk_Device_Type_Any", 0);
    U.const("Bsdk_Device_Type_Scanner_Any", 256);
    U.const("Bsdk_Device_Type_Scanner_Umatch", 257);
    U.const("Bsdk_Device_Type_Scanner_Upek", 258);
    U.const("Bsdk_Device_Type_Scanner_CrossMatch", 259);
  });
  return U;
}

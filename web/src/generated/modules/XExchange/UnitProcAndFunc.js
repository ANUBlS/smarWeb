// Generated from UnitProcAndFunc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitProcAndFunc", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Menus", "ExtCtrls", "Grids", "StdCtrls", "Mask", "Buttons", "ComCtrls", "ImgList"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("RoundEx", async function RoundEx(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L0, ["x", "precision"]);
  L0["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L0["x"]])), L0["precision"]);
  L0["temp"] = (await $.call(C, "Frac", [L0["scaledfractpart"]]));
  L0["scaledfractpart"] = (await $.call(C, "Int", [L0["scaledfractpart"]]));
  if ($.truthy($.eq(L0["temp"], 5))) {
    L0["scaledfractpart"] = $.add(L0["scaledfractpart"], 1);
  }
  if ($.truthy($.eq(L0["temp"], (-(5))))) {
    L0["scaledfractpart"] = $.sub(L0["scaledfractpart"], 1);
  }
  L0.result = $.add((await $.call(C, "Int", [L0["x"]])), $.fdiv(L0["scaledfractpart"], L0["precision"]));
  return L0.result;
}, {"params": ["X", "Precision"], "kind": "function", "ptypes": ["Double", "Integer"]});
  U.func("SetRU", async function SetRU(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "layout": $.sarr()};
  await $.stmt((await $.call(C, "LoadKeyboardLayout", [(await $.call(C, "StrCopy", [L0["layout"], "00000419"])), (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("SetEN", async function SetEN(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "layout": $.sarr()};
  await $.stmt((await $.call(C, "LoadKeyboardLayout", [(await $.call(C, "StrCopy", [L0["layout"], "00000409"])), (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("SumNumToFullVal", async function SumNumToFullVal(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"number": $.copyArg(p0), "val_name": $.copyArg(p1), "val": $.copyArg(p2), result: '', "partnum": 0, "truncnum": 0, "numtmp": 0, "d": 0, "numstr": '', "i": 0, "r": 0, "flag11": false};
  await $.fixArgs(L0, ["number", "val_name", "val"]);
  L0["partnum"] = 0;
  L0["d"] = 1000000;
  L0["r"] = 4;
  L0["truncnum"] = (await $.call(C, "Trunc", [L0["number"]]));
  if ($.truthy($.ne(L0["truncnum"], 0))) {
    do {
      L0["partnum"] = $.idiv(L0["truncnum"], L0["d"]);
      await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["r"], async ($t1) => { L0["r"] = $t1; })])));
      L0["d"] = $.idiv(L0["d"], 1000);
      await $.tick();
    } while (!$.truthy($.ne(L0["partnum"], 0)));
  } else {
    L0["r"] = 0;
  }
  { const $t2 = 1;
    L0["i"] = L0["r"];
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], -1); }
      $t3 = false;
      if (!($.ord(L0["i"]) >= $.ord($t2))) break;
      L0["flag11"] = false;
      L0["numtmp"] = $.idiv(L0["partnum"], 100);
      { const $t4 = L0["numtmp"];
        if ($.eq($t4, 1)) {
          L0["numstr"] = $.add(L0["numstr"], "YÜZ ");
        }
        else if ($.eq($t4, 2)) {
          L0["numstr"] = $.add(L0["numstr"], "İKİ YÜZ ");
        }
        else if ($.eq($t4, 3)) {
          L0["numstr"] = $.add(L0["numstr"], "ÜÇ YÜZ ");
        }
        else if ($.eq($t4, 4)) {
          L0["numstr"] = $.add(L0["numstr"], "DÖRD YÜZ ");
        }
        else if ($.eq($t4, 5)) {
          L0["numstr"] = $.add(L0["numstr"], "BEŞ YÜZ ");
        }
        else if ($.eq($t4, 6)) {
          L0["numstr"] = $.add(L0["numstr"], "ALTI YÜZ ");
        }
        else if ($.eq($t4, 7)) {
          L0["numstr"] = $.add(L0["numstr"], "YEDDİ YÜZ ");
        }
        else if ($.eq($t4, 8)) {
          L0["numstr"] = $.add(L0["numstr"], "SƏKKİZ YÜZ ");
        }
        else if ($.eq($t4, 9)) {
          L0["numstr"] = $.add(L0["numstr"], "DOQQUZ YÜZ ");
        }
      }
      L0["numtmp"] = $.idiv(($.mod(L0["partnum"], 100)), 10);
      { const $t5 = L0["numtmp"];
        if ($.eq($t5, 1)) {
          L0["numtmp"] = $.mod(L0["partnum"], 100);
          { const $t6 = L0["numtmp"];
            if ($.eq($t6, 10)) {
              L0["numstr"] = $.add(L0["numstr"], "ON ");
            }
            else if ($.eq($t6, 11)) {
              L0["numstr"] = $.add(L0["numstr"], "ON BİR ");
            }
            else if ($.eq($t6, 12)) {
              L0["numstr"] = $.add(L0["numstr"], "ON İKİ ");
            }
            else if ($.eq($t6, 13)) {
              L0["numstr"] = $.add(L0["numstr"], "ON ÜÇ ");
            }
            else if ($.eq($t6, 14)) {
              L0["numstr"] = $.add(L0["numstr"], "ON DÖRD ");
            }
            else if ($.eq($t6, 15)) {
              L0["numstr"] = $.add(L0["numstr"], "ON BEŞ ");
            }
            else if ($.eq($t6, 16)) {
              L0["numstr"] = $.add(L0["numstr"], "ON ALTI ");
            }
            else if ($.eq($t6, 17)) {
              L0["numstr"] = $.add(L0["numstr"], "ON YEDDİ ");
            }
            else if ($.eq($t6, 18)) {
              L0["numstr"] = $.add(L0["numstr"], "ON SƏKKİZ ");
            }
            else if ($.eq($t6, 19)) {
              L0["numstr"] = $.add(L0["numstr"], "ON DOQQUZ ");
            }
          }
          { const $t7 = L0["i"];
            if ($.eq($t7, 3)) {
              L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
            }
            else if ($.eq($t7, 2)) {
              L0["numstr"] = $.add(L0["numstr"], "MİN ");
            }
            else if ($.eq($t7, 1)) {
              L0["numstr"] = $.add(L0["numstr"], L0["val_name"]);
            }
          }
          L0["flag11"] = true;
        }
        else if ($.eq($t5, 2)) {
          L0["numstr"] = $.add(L0["numstr"], "İYİRMİ ");
        }
        else if ($.eq($t5, 3)) {
          L0["numstr"] = $.add(L0["numstr"], "OTUZ ");
        }
        else if ($.eq($t5, 4)) {
          L0["numstr"] = $.add(L0["numstr"], "QIRX ");
        }
        else if ($.eq($t5, 5)) {
          L0["numstr"] = $.add(L0["numstr"], "ƏLLİ ");
        }
        else if ($.eq($t5, 6)) {
          L0["numstr"] = $.add(L0["numstr"], "ALTMIŞ ");
        }
        else if ($.eq($t5, 7)) {
          L0["numstr"] = $.add(L0["numstr"], "YETMİŞ ");
        }
        else if ($.eq($t5, 8)) {
          L0["numstr"] = $.add(L0["numstr"], "SƏKSƏN ");
        }
        else if ($.eq($t5, 9)) {
          L0["numstr"] = $.add(L0["numstr"], "DOXSAN");
        }
      }
      L0["numtmp"] = $.mod(L0["partnum"], 10);
      if ($.truthy($.not(L0["flag11"]))) {
        { const $t8 = L0["numtmp"];
          if ($.eq($t8, 1)) {
            if ($.truthy($.eq(L0["i"], 2))) {
              L0["numstr"] = $.add(L0["numstr"], "BİR ");
            } else {
              L0["numstr"] = $.add(L0["numstr"], "BİR ");
            }
          }
          else if ($.eq($t8, 2)) {
            if ($.truthy($.eq(L0["i"], 2))) {
              L0["numstr"] = $.add(L0["numstr"], "İKİ ");
            } else {
              L0["numstr"] = $.add(L0["numstr"], "İKİ ");
            }
          }
          else if ($.eq($t8, 3)) {
            L0["numstr"] = $.add(L0["numstr"], "ÜÇ ");
          }
          else if ($.eq($t8, 4)) {
            L0["numstr"] = $.add(L0["numstr"], "DÖRD ");
          }
          else if ($.eq($t8, 5)) {
            L0["numstr"] = $.add(L0["numstr"], "BEŞ ");
          }
          else if ($.eq($t8, 6)) {
            L0["numstr"] = $.add(L0["numstr"], "ALTI ");
          }
          else if ($.eq($t8, 7)) {
            L0["numstr"] = $.add(L0["numstr"], "YEDDİ ");
          }
          else if ($.eq($t8, 8)) {
            L0["numstr"] = $.add(L0["numstr"], "SƏKKİZ ");
          }
          else if ($.eq($t8, 9)) {
            L0["numstr"] = $.add(L0["numstr"], "DOQQUZ ");
          }
        }
        { const $t9 = L0["i"];
          if ($.eq($t9, 3)) {
            { const $t10 = L0["numtmp"];
              if ($.eq($t10, 1)) {
                L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
              }
              else if ($.eq($t10, 2) || $.eq($t10, 3) || $.eq($t10, 4)) {
                L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
              }
              else {
                L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
              }
            }
          }
          else if ($.eq($t9, 2)) {
            { const $t11 = L0["numtmp"];
              if ($.eq($t11, 1)) {
                L0["numstr"] = $.add(L0["numstr"], "MİN ");
              }
              else if ($.eq($t11, 2) || $.eq($t11, 3) || $.eq($t11, 4)) {
                L0["numstr"] = $.add(L0["numstr"], "MİN ");
              }
              else {
                if ($.truthy($.ne(L0["partnum"], 0))) {
                  L0["numstr"] = $.add(L0["numstr"], "MİN ");
                }
              }
            }
          }
          else if ($.eq($t9, 1)) {
            { const $t12 = L0["numtmp"];
              if ($.eq($t12, 1)) {
                L0["numstr"] = $.add(L0["numstr"], L0["val_name"]);
              }
              else if ($.eq($t12, 2) || $.eq($t12, 3) || $.eq($t12, 4)) {
                L0["numstr"] = $.add(L0["numstr"], L0["val_name"]);
              }
              else {
                L0["numstr"] = $.add(L0["numstr"], L0["val_name"]);
              }
            }
          }
        }
      }
      if ($.truthy($.gt(L0["i"], 1))) {
        L0["partnum"] = $.idiv(($.mod(L0["truncnum"], ($.mul(L0["d"], 1000)))), L0["d"]);
        L0["d"] = $.idiv(L0["d"], 1000);
      }
      await $.tick();
    }
  }
  L0["partnum"] = (await $.call(C, "Round", [$.mul((await $.call(C, "Frac", [L0["number"]])), 100)]));
  if ($.truthy($.eq(L0["partnum"], 0))) {
    L0.result = L0["numstr"];
    return L0.result;
  }
  L0["numtmp"] = $.idiv(L0["partnum"], 10);
  if ($.truthy($.eq(L0["numtmp"], 0))) {
    L0["numstr"] = $.add($.add($.add(L0["numstr"], "0"), (await $.call(C, "IntToStr", [L0["partnum"]]))), " ");
  } else {
    L0["numstr"] = $.add($.add(L0["numstr"], (await $.call(C, "IntToStr", [L0["partnum"]]))), " ");
  }
  L0["numtmp"] = $.mod(L0["partnum"], 10);
  { const $t13 = L0["numtmp"];
    if ($.eq($t13, 1)) {
      if ($.truthy($.ne(L0["partnum"], 11))) {
        L0["numstr"] = $.add(L0["numstr"], L0["val"]);
      } else {
        L0["numstr"] = $.add(L0["numstr"], L0["val"]);
      }
    }
    else if ($.eq($t13, 2) || $.eq($t13, 3) || $.eq($t13, 4)) {
      if ($.truthy((await $.or_(($.lt(L0["partnum"], 5)), async () => ($.gt(L0["partnum"], 14)))))) {
        L0["numstr"] = $.add(L0["numstr"], L0["val"]);
      } else {
        L0["numstr"] = $.add(L0["numstr"], L0["val"]);
      }
    }
    else {
      L0["numstr"] = $.add(L0["numstr"], L0["val"]);
    }
  }
  L0.result = L0["numstr"];
  return L0.result;
}, {"params": ["Number", "val_name", "val"], "kind": "function", "ptypes": ["real", "String", "String"]});
  U.func("SumNumToFull", async function SumNumToFull(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"number": $.copyArg(p0), result: '', "partnum": 0, "truncnum": 0, "numtmp": 0, "d": 0, "numstr": '', "i": 0, "r": 0, "flag11": false};
  await $.fixArgs(L0, ["number"]);
  L0["partnum"] = 0;
  L0["d"] = 1000000;
  L0["r"] = 4;
  L0["truncnum"] = (await $.call(C, "Trunc", [L0["number"]]));
  if ($.truthy($.ne(L0["truncnum"], 0))) {
    do {
      L0["partnum"] = $.idiv(L0["truncnum"], L0["d"]);
      await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["r"], async ($t14) => { L0["r"] = $t14; })])));
      L0["d"] = $.idiv(L0["d"], 1000);
      await $.tick();
    } while (!$.truthy($.ne(L0["partnum"], 0)));
  } else {
    L0["r"] = 0;
  }
  { const $t15 = 1;
    L0["i"] = L0["r"];
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], -1); }
      $t16 = false;
      if (!($.ord(L0["i"]) >= $.ord($t15))) break;
      L0["flag11"] = false;
      L0["numtmp"] = $.idiv(L0["partnum"], 100);
      { const $t17 = L0["numtmp"];
        if ($.eq($t17, 1)) {
          L0["numstr"] = $.add(L0["numstr"], "YÜZ ");
        }
        else if ($.eq($t17, 2)) {
          L0["numstr"] = $.add(L0["numstr"], "İKİ YÜZ ");
        }
        else if ($.eq($t17, 3)) {
          L0["numstr"] = $.add(L0["numstr"], "ÜÇ YÜZ ");
        }
        else if ($.eq($t17, 4)) {
          L0["numstr"] = $.add(L0["numstr"], "DÖRD YÜZ ");
        }
        else if ($.eq($t17, 5)) {
          L0["numstr"] = $.add(L0["numstr"], "BEŞ YÜZ ");
        }
        else if ($.eq($t17, 6)) {
          L0["numstr"] = $.add(L0["numstr"], "ALTI YÜZ ");
        }
        else if ($.eq($t17, 7)) {
          L0["numstr"] = $.add(L0["numstr"], "YEDDİ YÜZ ");
        }
        else if ($.eq($t17, 8)) {
          L0["numstr"] = $.add(L0["numstr"], "SƏKKİZ YÜZ ");
        }
        else if ($.eq($t17, 9)) {
          L0["numstr"] = $.add(L0["numstr"], "DOQQUZ YÜZ ");
        }
      }
      L0["numtmp"] = $.idiv(($.mod(L0["partnum"], 100)), 10);
      { const $t18 = L0["numtmp"];
        if ($.eq($t18, 1)) {
          L0["numtmp"] = $.mod(L0["partnum"], 100);
          { const $t19 = L0["numtmp"];
            if ($.eq($t19, 10)) {
              L0["numstr"] = $.add(L0["numstr"], "ON ");
            }
            else if ($.eq($t19, 11)) {
              L0["numstr"] = $.add(L0["numstr"], "ON BİR ");
            }
            else if ($.eq($t19, 12)) {
              L0["numstr"] = $.add(L0["numstr"], "ON İKİ ");
            }
            else if ($.eq($t19, 13)) {
              L0["numstr"] = $.add(L0["numstr"], "ON ÜÇ ");
            }
            else if ($.eq($t19, 14)) {
              L0["numstr"] = $.add(L0["numstr"], "ON DÖRD ");
            }
            else if ($.eq($t19, 15)) {
              L0["numstr"] = $.add(L0["numstr"], "ON BEŞ ");
            }
            else if ($.eq($t19, 16)) {
              L0["numstr"] = $.add(L0["numstr"], "ON ALTI ");
            }
            else if ($.eq($t19, 17)) {
              L0["numstr"] = $.add(L0["numstr"], "ON YEDDİ ");
            }
            else if ($.eq($t19, 18)) {
              L0["numstr"] = $.add(L0["numstr"], "ON SƏKKİZ ");
            }
            else if ($.eq($t19, 19)) {
              L0["numstr"] = $.add(L0["numstr"], "ON DOQQUZ ");
            }
          }
          { const $t20 = L0["i"];
            if ($.eq($t20, 3)) {
              L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
            }
            else if ($.eq($t20, 2)) {
              L0["numstr"] = $.add(L0["numstr"], "MİN ");
            }
          }
          L0["flag11"] = true;
        }
        else if ($.eq($t18, 2)) {
          L0["numstr"] = $.add(L0["numstr"], "İYİRMİ ");
        }
        else if ($.eq($t18, 3)) {
          L0["numstr"] = $.add(L0["numstr"], "OTUZ ");
        }
        else if ($.eq($t18, 4)) {
          L0["numstr"] = $.add(L0["numstr"], "QIRX ");
        }
        else if ($.eq($t18, 5)) {
          L0["numstr"] = $.add(L0["numstr"], "ƏLLİ ");
        }
        else if ($.eq($t18, 6)) {
          L0["numstr"] = $.add(L0["numstr"], "ALTMIŞ ");
        }
        else if ($.eq($t18, 7)) {
          L0["numstr"] = $.add(L0["numstr"], "YETMİŞ ");
        }
        else if ($.eq($t18, 8)) {
          L0["numstr"] = $.add(L0["numstr"], "SƏKSƏN ");
        }
        else if ($.eq($t18, 9)) {
          L0["numstr"] = $.add(L0["numstr"], "DOXSAN");
        }
      }
      L0["numtmp"] = $.mod(L0["partnum"], 10);
      if ($.truthy($.not(L0["flag11"]))) {
        { const $t21 = L0["numtmp"];
          if ($.eq($t21, 1)) {
            if ($.truthy($.eq(L0["i"], 2))) {
              L0["numstr"] = $.add(L0["numstr"], "BİR ");
            } else {
              L0["numstr"] = $.add(L0["numstr"], "BİR ");
            }
          }
          else if ($.eq($t21, 2)) {
            if ($.truthy($.eq(L0["i"], 2))) {
              L0["numstr"] = $.add(L0["numstr"], "İKİ ");
            } else {
              L0["numstr"] = $.add(L0["numstr"], "İKİ ");
            }
          }
          else if ($.eq($t21, 3)) {
            L0["numstr"] = $.add(L0["numstr"], "ÜÇ ");
          }
          else if ($.eq($t21, 4)) {
            L0["numstr"] = $.add(L0["numstr"], "DÖRD ");
          }
          else if ($.eq($t21, 5)) {
            L0["numstr"] = $.add(L0["numstr"], "BEŞ ");
          }
          else if ($.eq($t21, 6)) {
            L0["numstr"] = $.add(L0["numstr"], "ALTI ");
          }
          else if ($.eq($t21, 7)) {
            L0["numstr"] = $.add(L0["numstr"], "YEDDİ ");
          }
          else if ($.eq($t21, 8)) {
            L0["numstr"] = $.add(L0["numstr"], "SƏKKİZ ");
          }
          else if ($.eq($t21, 9)) {
            L0["numstr"] = $.add(L0["numstr"], "DOQQUZ ");
          }
        }
        { const $t22 = L0["i"];
          if ($.eq($t22, 3)) {
            { const $t23 = L0["numtmp"];
              if ($.eq($t23, 1)) {
                L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
              }
              else if ($.eq($t23, 2) || $.eq($t23, 3) || $.eq($t23, 4)) {
                L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
              }
              else {
                L0["numstr"] = $.add(L0["numstr"], "MİLİYON ");
              }
            }
          }
          else if ($.eq($t22, 2)) {
            { const $t24 = L0["numtmp"];
              if ($.eq($t24, 1)) {
                L0["numstr"] = $.add(L0["numstr"], "MİN ");
              }
              else if ($.eq($t24, 2) || $.eq($t24, 3) || $.eq($t24, 4)) {
                L0["numstr"] = $.add(L0["numstr"], "MİN ");
              }
              else {
                if ($.truthy($.ne(L0["partnum"], 0))) {
                  L0["numstr"] = $.add(L0["numstr"], "MİN ");
                }
              }
            }
          }
        }
      }
      if ($.truthy($.gt(L0["i"], 1))) {
        L0["partnum"] = $.idiv(($.mod(L0["truncnum"], ($.mul(L0["d"], 1000)))), L0["d"]);
        L0["d"] = $.idiv(L0["d"], 1000);
      }
      await $.tick();
    }
  }
  L0.result = L0["numstr"];
  return L0.result;
}, {"params": ["Number"], "kind": "function", "ptypes": ["real"]});
  U.func("MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t25 = L0["acanvas"];
    const $t26 = (await $.wv([$t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t27 = (await $.wv([$t25, $t26], "Font", C, false));
      await $.wset([$t25, $t26, $t27], "Name", "Azl Sans Serif", C);
      await $.wset([$t25, $t26, $t27], "Charset", (await $.wv([$t25, $t26, $t27], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t25, $t26, $t27], "Default", C, false)))) {
        await $.wset([$t25, $t26, $t27], "Style", [(await $.wv([$t25, $t26, $t27], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t25, $t26], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t25, $t26], "Pen", C, false)), "Color", (await $.wv([$t25, $t26], "clBlack", C, false)));
      await $.wset([$t25, $t26], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t25, $t26], "MoveTo", [(await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t25, $t26], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t25, $t26], "LineTo", [(await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t25, $t26], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t25, $t26], "inc", [$.ref(async () => (await $.wv([$t25, $t26], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t28) => { await $.wset([$t25, $t26], "LineBottom", $t28, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t25, $t26], "Pen", C, false)), "Color", (await $.wv([$t25, $t26], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t25, $t26], "MoveTo", [(await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t25, $t26], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t25, $t26], "LineTo", [(await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t25, $t26], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t25, $t26], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t25, $t26], "Brush", C, false)), "Color", (await $.wv([$t25, $t26], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t25, $t26], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t25, $t26], "Font", C, false)), "Color", (await $.wv([$t25, $t26], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t25, $t26], "Font", C, false)), "Color", (await $.wv([$t25, $t26], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t25, $t26], "Brush", C, false)), "Color", (await $.wv([$t25, $t26], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t25, $t26], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t25, $t26], "Font", C, false)), "Color", (await $.wv([$t25, $t26], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t25, $t26], "Font", C, false)), "Color", (await $.wv([$t25, $t26], "clGrayText", C, false)));
        }
      }
      await $.wset([$t25, $t26], "Bar", (await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t25, $t26], "FillRect", [(await $.wv([$t25, $t26], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t25, $t26], "TextOut", [$.add((await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t25, $t26], "Caption", C, false))], C)));
    }
    await $.wset([$t25, $t26], "SText", (await $.wcall([$t25, $t26], "ShortCutToText", [(await $.wv([$t25, $t26], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t25, $t26], "TextOut", [$.add($.sub((await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t25, $t26], "TextWidth", [(await $.wv([$t25, $t26], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t25, $t26], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t25, $t26], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t25, $t26], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t29 = (await $.wv([$t25, $t26], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t25, $t26, $t29], "Assigned", [(await $.wv([$t25, $t26, $t29], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t25, $t26, $t29], "Checked", C, false)))) {
            await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t25, $t26, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t25, $t26, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.mv((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t25, $t26, $t29], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t30) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t30); }), 1], C)));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t31) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t31); }), 1], C)));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t32) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t32); }), 1], C)));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t33) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t33); }), 1], C)));
            await $.mset((await $.mv((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t25, $t26, $t29], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t34) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t34); }), 1], C)));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t35) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t35); }), 1], C)));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t36) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t36); }), 1], C)));
            await $.stmt((await $.wcall([$t25, $t26, $t29], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t37) => { await $.mset((await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t37); }), 1], C)));
            if ($.truthy((await $.wv([$t25, $t26, $t29], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t25, $t26, $t29], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t25, $t26, $t29], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t25, $t26, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t25, $t26, $t29], "Images", C, false)), "Draw", [(await $.wv([$t25, $t26, $t29], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t25, $t26, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t25, $t26, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t25, $t26, $t29], "ImageIndex", C, false)), (await $.wv([$t25, $t26, $t29], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  return U;
}

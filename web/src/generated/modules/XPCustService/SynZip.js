// Generated from SynZip.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SynZip", ["clocale", "Types", "SysUtils", "Classes"]);
  const C = [U];
  U.const("szcfRaw", 0);
  U.const("szcfZip", 1);
  U.const("szcfGZ", 2);
  $.defRecord("tzstream", {"next_in": () => null, "avail_in": () => 0, "total_in": () => 0, "next_out": () => null, "avail_out": () => 0, "total_out": () => 0, "msg": () => null, "state": () => null, "zalloc": () => null, "zfree": () => null, "opaque": () => null, "data_type": () => 0, "adler": () => 0, "reserved": () => 0});
  $.defRecord("tfileinfoextra", {"id": () => 0, "size": () => 0});
  $.defRecord("tfileinfoextraname", {"id": () => 0, "size": () => 0, "version": () => 0, "namecrc32": () => 0, "utf8name": () => ''});
  $.defRecord("tlastheader", {"signature": () => 0, "thisdisk": () => 0, "headerdisk": () => 0, "thisfiles": () => 0, "totalfiles": () => 0, "headersize": () => 0, "headeroffset": () => 0, "commentlen": () => 0});
  $.defRecord("tzipentry", {"infolocal": () => null, "infodirectory": () => null, "data": () => null, "storedname": () => null, "zipname": () => null});
  $.defRecord("tdatadescriptor", {"signature": () => 0, "crc32": () => 0, "zipsize": () => 0, "fullsize": () => 0});
  $.defRecord("ttempbuf", {"buf": () => null, "temp": () => '', "buf128k": () => $.sarr()});
  U.defClass("ESynZipException", "Exception", {}, {});
  U.defClass("TFileInfo", null, {"neededversion": {"name": "neededVersion", "type": "word"}, "flags": {"name": "flags", "type": "word"}, "zzipmethod": {"name": "zzipMethod", "type": "word"}, "zlastmod": {"name": "zlastMod", "type": "integer"}, "zcrc32": {"name": "zcrc32", "type": "dword"}, "zzipsize": {"name": "zzipSize", "type": "dword"}, "zfullsize": {"name": "zfullSize", "type": "dword"}, "namelen": {"name": "nameLen", "type": "word"}, "extralen": {"name": "extraLen", "type": "word"}}, {});
  U.defClass("TFileHeader", null, {"signature": {"name": "signature", "type": "dword"}, "madeby": {"name": "madeBy", "type": "word"}, "fileinfo": {"name": "fileInfo", "type": "TFileInfo"}, "commentlen": {"name": "commentLen", "type": "word"}, "firstdiskno": {"name": "firstDiskNo", "type": "word"}, "intfileattr": {"name": "intFileAttr", "type": "word"}, "extfileattr": {"name": "extFileAttr", "type": "dword"}, "localheadoff": {"name": "localHeadOff", "type": "dword"}}, {});
  U.defClass("TLocalFileHeader", null, {"signature": {"name": "signature", "type": "dword"}, "fileinfo": {"name": "fileInfo", "type": "TFileInfo"}}, {});
  U.defClass("TGZRead", null, {"comp": {"name": "comp", "type": "pointer"}, "zsdest": {"name": "zsdest", "type": "pointer"}, "zscrc": {"name": "zscrc", "type": "cardinal"}, "zssize": {"name": "zssize", "type": "integer"}, "zscode": {"name": "zscode", "type": "integer"}, "zs": {"name": "zs", "type": "TZStream"}, "complen": {"name": "complen", "type": "ZipPtrInt"}, "uncomplen32": {"name": "uncomplen32", "type": "cardinal"}, "crc32": {"name": "crc32", "type": "cardinal"}, "unixmodtime": {"name": "unixmodtime", "type": "cardinal"}, "fname": {"name": "fname", "type": "PAnsiChar"}, "fcomment": {"name": "fcomment", "type": "PAnsiChar"}, "extra": {"name": "extra", "type": "PAnsiChar"}}, {});
  U.fieldInit("TGZRead", "zs", () => $.rec("tzstream"));
  U.defClass("TSynZipCompressor", "TStream", {"finitialized": {"name": "fInitialized", "type": "Boolean"}, "fdeststream": {"name": "fDestStream", "type": "TStream"}, "fstrm": {"name": "fStrm", "type": "TZStream"}, "fcrc": {"name": "fCRC", "type": "Cardinal"}, "fgzformat": {"name": "fGZFormat", "type": "boolean"}, "fbufferout": {"name": "fBufferOut", "type": "array"}}, {"crc": {"name": "CRC", "read": "fCRC"}});
  U.fieldInit("TSynZipCompressor", "fstrm", () => $.rec("tzstream"));
  U.fieldInit("TSynZipCompressor", "fbufferout", () => []);
  U.defClass("TZipRead", null, {"buf": {"name": "buf", "type": "PByteArray"}, "firstfileheader": {"name": "FirstFileHeader", "type": "PFileHeader"}, "readoffset": {"name": "ReadOffset", "type": "cardinal"}, "file_": {"name": "file_", "type": "THandle"}, "mapsize": {"name": "mapSize", "type": "cardinal"}, "count": {"name": "Count", "type": "integer"}, "entry": {"name": "Entry", "type": "array"}}, {});
  U.fieldInit("TZipRead", "entry", () => []);
  U.defClass("TZipWriteAbstract", null, {"fappendoffset": {"name": "fAppendOffset", "type": "cardinal"}, "fmagic": {"name": "fMagic", "type": "cardinal"}, "count": {"name": "Count", "type": "integer"}, "entry": {"name": "Entry", "type": "array"}}, {});
  U.fieldInit("TZipWriteAbstract", "entry", () => []);
  U.defClass("TZipWrite", "TZipWriteAbstract", {"ffilename": {"name": "fFileName", "type": "TFileName"}, "handle": {"name": "Handle", "type": "integer"}}, {});
  U.defClass("TZipWriteToStream", "TZipWriteAbstract", {"fdest": {"name": "fDest", "type": "TStream"}}, {});
  U.init(async () => {
    U.const("FileInfoExtra_UnicodePathId", 28789);
    U.const("ZLIB_VERSION", "1.2.3");
    U.const("ZLIB_VERNUM", 4656);
    U.const("Z_NO_FLUSH", 0);
    U.const("Z_PARTIAL_FLUSH", 1);
    U.const("Z_SYNC_FLUSH", 2);
    U.const("Z_FULL_FLUSH", 3);
    U.const("Z_FINISH", 4);
    U.const("Z_BLOCK", 5);
    U.const("Z_OK", 0);
    U.const("Z_STREAM_END", 1);
    U.const("Z_NEED_DICT", 2);
    U.const("Z_ERRNO", (-(1)));
    U.const("Z_STREAM_ERROR", (-(2)));
    U.const("Z_DATA_ERROR", (-(3)));
    U.const("Z_MEM_ERROR", (-(4)));
    U.const("Z_BUF_ERROR", (-(5)));
    U.const("Z_VERSION_ERROR", (-(6)));
    U.const("Z_NO_COMPRESSION", 0);
    U.const("Z_BEST_SPEED", 1);
    U.const("Z_BEST_COMPRESSION", 9);
    U.const("Z_DEFAULT_COMPRESSION", (-(1)));
    U.const("Z_FILTERED", 1);
    U.const("Z_HUFFMAN_ONLY", 2);
    U.const("Z_RLE", 3);
    U.const("Z_FIXED", 4);
    U.const("Z_DEFAULT_STRATEGY", 0);
    U.const("Z_BINARY", 0);
    U.const("Z_ASCII", 1);
    U.const("Z_UNKNOWN", 2);
    U.const("Z_STORED", 0);
    U.const("Z_DEFLATED", 8);
    U.const("MAX_WBITS", 15);
    U.const("DEF_MEM_LEVEL", 8);
    U.const("Z_NULL", 0);
    U.const("ZIP_FILES_ALL", "*");
    U.const("FIRSTHEADER_SIGNATURE_INC", $.add(67324752, 1));
    U.const("LASTHEADER_SIGNATURE_INC", $.add(101010256, 1));
    U.const("ENTRY_SIGNATURE_INC", $.add(33639248, 1));
    U.const("GZHEAD", [559903, 0, 0]);
    U.const("GZHEAD_SIZE", 10);
    U.const("HTTP_LEVEL", 1);
    U.var_("EventArchiveZipWrite", null, "TZipWrite");
  });
  U.func("EventArchiveZip", async function EventArchiveZip(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aoldlogfilename": $.copyArg(p0), "adestinationpath": $.copyArg(p1), result: false, "n": 0};
  await $.fixArgs(L0, ["aoldlogfilename", "adestinationpath"]);
  L0["result"] = false;
  if ($.truthy($.eq(L0["aoldlogfilename"], ""))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "EventArchiveZipWrite")), async ($t1) => { await $.set(C, "EventArchiveZipWrite", $t1); })])));
  } else {
    if ($.truthy($.not((await $.call(C, "FileExists", [L0["aoldlogfilename"]]))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.v(C, "EventArchiveZipWrite")), null))) {
      await $.set(C, "EventArchiveZipWrite", (await $.mcall((await $.v(C, "TZipWrite")), "CreateFrom", [$.add((await $.mcall((await $.v(C, "system")), "copy", [L0["adestinationpath"], 1, $.sub((await $.call(C, "length", [L0["adestinationpath"]])), 1)])), ".zip")])));
    }
    L0["n"] = (await $.mv((await $.v(C, "EventArchiveZipWrite")), "Count"));
    await $.stmt((await $.mcall((await $.v(C, "EventArchiveZipWrite")), "AddDeflated", [L0["aoldlogfilename"], true])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EventArchiveZipWrite")), "Count")), $.add(L0["n"], 1))), async () => (await $.call(C, "DeleteFile", [L0["aoldlogfilename"]])))))) {
      L0["result"] = true;
    }
  }
  return L0.result;
}, {"params": ["aOldLogFileName", "aDestinationPath"], "kind": "function", "ptypes": ["TFileName", "TFileName"]});
  U.func("Is7BitAnsi", async function Is7BitAnsi(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"p": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["p"]);
  if ($.truthy($.ne(L0["p"], null))) {
    while ($.truthy(true)) {
      if ($.truthy($.eq((await $.call(C, "ord", [L0["p"]])), 0))) {
        break;
      } else {
        if ($.truthy($.le((await $.call(C, "ord", [L0["p"]])), 126))) {
          await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["p"], async ($t2) => { L0["p"] = $t2; })])));
        } else {
          L0["result"] = false;
          return L0.result;
        }
      }
      await $.tick();
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["P"], "kind": "function", "ptypes": ["PChar"]});
  U.method("TZipWriteAbstract", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "fMagic", (await $.v(C, "FIRSTHEADER_SIGNATURE_INC")));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "fMagic")), async ($t3) => { await $.set(C, "fMagic", $t3); })])));
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TZipWriteAbstract", "InternalAdd", async function InternalAdd(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"zipname": $.copyArg(p0), "buf": $.copyArg(p1), "size": $.copyArg(p2), result: 0, "i": 0};
  await $.fixArgs(L0, ["zipname", "buf", "size"]);
  {
    const $t4 = (await $.idx((await $.v(C, "Entry")), [(await $.v(C, "Count"))]));
    await $.mset((await $.wv([$t4], "fHr", C, false)), "signature", (await $.wv([$t4], "ENTRY_SIGNATURE_INC", C, false)));
    await $.stmt((await $.wcall([$t4], "dec", [$.ref(async () => (await $.mv((await $.wv([$t4], "fHr", C, false)), "signature")), async ($t5) => { await $.mset((await $.wv([$t4], "fHr", C, false)), "signature", $t5); })], C)));
    await $.mset((await $.wv([$t4], "fHr", C, false)), "madeBy", 788);
    await $.mset((await $.mv((await $.wv([$t4], "fHr", C, false)), "fileInfo")), "neededVersion", 20);
    await $.wset([$t4], "result", (await $.wv([$t4], "InternalWritePosition", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    await $.mset((await $.wv([$t4], "fHr", C, false)), "localHeadOff", $.sub((await $.wv([$t4], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.wv([$t4], "fAppendOffset", C, false))));
    if ($.truthy((await $.wcall([$t4], "Is7BitAnsi", [(await $.wcall([$t4], "pointer", [(await $.wv([$t4], "zipName", { get: async () => L0["zipname"], set: async (v) => { L0["zipname"] = v; }, local: true }, false))], C))], C)))) {
      await $.stmt((await $.wcall([$t4], "SetString", [$.ref(async () => (await $.wv([$t4], "intName", C, false)), async ($t6) => { await $.wset([$t4], "intName", $t6, C); }), (await $.wcall([$t4], "PAnsiChar", [(await $.wcall([$t4], "pointer", [(await $.wv([$t4], "zipName", { get: async () => L0["zipname"], set: async (v) => { L0["zipname"] = v; }, local: true }, false))], C))], C)), (await $.wcall([$t4], "length", [(await $.wv([$t4], "zipName", { get: async () => L0["zipname"], set: async (v) => { L0["zipname"] = v; }, local: true }, false))], C))], C)));
      await $.mcall((await $.mv((await $.wv([$t4], "fHr", C, false)), "fileInfo")), "UnSetUTF8FileName", []);
    } else {
      await $.wset([$t4], "intName", (await $.wcall([$t4], "UTF8Encode", [(await $.wcall([$t4], "WideString", [(await $.wv([$t4], "zipName", { get: async () => L0["zipname"], set: async (v) => { L0["zipname"] = v; }, local: true }, false))], C))], C)), C);
      await $.mcall((await $.mv((await $.wv([$t4], "fHr", C, false)), "fileInfo")), "SetUTF8FileName", []);
    }
    await $.mset((await $.mv((await $.wv([$t4], "fHr", C, false)), "fileInfo")), "nameLen", (await $.wcall([$t4], "length", [(await $.wv([$t4], "intName", C, false))], C)));
    await $.mset((await $.mv((await $.wv([$t4], "fhr", C, false)), "fileInfo")), "extraLen", 0);
    await $.stmt((await $.wcall([$t4], "InternalWrite", [(await $.wv([$t4], "fMagic", C, false)), (await $.wcall([$t4], "sizeof", [(await $.wv([$t4], "fMagic", C, false))], C))], C)));
    await $.stmt((await $.wcall([$t4], "InternalWrite", [(await $.mv((await $.wv([$t4], "fhr", C, false)), "fileInfo")), (await $.wcall([$t4], "sizeof", [(await $.mv((await $.wv([$t4], "fhr", C, false)), "fileInfo"))], C))], C)));
    { const $t7 = (await $.wcall([$t4], "integer", [(await $.mv((await $.mv((await $.wv([$t4], "fhr", C, false)), "fileInfo")), "nameLen"))], C));
      await $.wset([$t4], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t4], "i", $.succ((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        if ($.truthy($.eq((await $.idx((await $.wv([$t4], "intName", C, false)), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "\\"))) {
          { const $t9 = await $.iset((await $.wv([$t4], "intName", C, false)), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], "/"); if ($t9 !== undefined) { await $.wset([$t4], "intName", $t9, C); } }
        }
        await $.tick();
      }
    }
    await $.stmt((await $.wcall([$t4], "InternalWrite", [(await $.wcall([$t4], "pointer", [(await $.wv([$t4], "intName", C, false))], C)), (await $.mv((await $.mv((await $.wv([$t4], "fhr", C, false)), "fileInfo")), "nameLen"))], C)));
  }
  if ($.truthy($.ne(L0["buf"], null))) {
    await $.stmt((await $.call(C, "InternalWrite", [L0["buf"], L0["size"]])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "Count")), async ($t10) => { await $.set(C, "Count", $t10); })])));
  }
  return L0.result;
}, {"params": ["zipName", "Buf", "Size"], "kind": "function", "ptypes": ["TFileName", "pointer", "integer"]});
  U.method("TZipWriteAbstract", "AddDeflated", async function AddDeflated(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"azipname": $.copyArg(p0), "buf": $.copyArg(p1), "size": $.copyArg(p2), "compresslevel": $.copyArg(p3), "fileage": $.copyArg(p4), result: undefined, "tmp": null, "tmpsize": 0};
  await $.fixArgs(L0, ["azipname", "buf", "size", "compresslevel", "fileage"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.v(C, "Count")), (await $.call(C, "length", [(await $.v(C, "Entry"))]))))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Entry")), async ($t11) => { await $.set(C, "Entry", $t11); }), $.add((await $.call(C, "length", [(await $.v(C, "Entry"))])), 20)])));
  }
  {
    const $t12 = (await $.idx((await $.v(C, "Entry")), [(await $.v(C, "Count"))]));
    {
      const $t13 = (await $.mv((await $.wv([$t12], "fhr", C, false)), "fileInfo"));
      await $.wset([$t12, $t13], "zcrc32", (await $.mcall((await $.wv([$t12, $t13], "SynZip", C, false)), "crc32", [0, (await $.wv([$t12, $t13], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))])), C);
      await $.wset([$t12, $t13], "zfullSize", (await $.wv([$t12, $t13], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), C);
      await $.wset([$t12, $t13], "zzipMethod", (await $.wv([$t12, $t13], "Z_DEFLATED", C, false)), C);
      await $.wset([$t12, $t13], "zlastMod", (await $.wv([$t12, $t13], "FileAge", { get: async () => L0["fileage"], set: async (v) => { L0["fileage"] = v; }, local: true }, false)), C);
      await $.wset([$t12, $t13], "tmpsize", $.add($.idiv(($.mul((await $.wcall([$t12, $t13], "Int64", [(await $.wv([$t12, $t13], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))], C)), 11)), 10), 12), { get: async () => L0["tmpsize"], set: async (v) => { L0["tmpsize"] = v; }, local: true });
      await $.stmt((await $.wcall([$t12, $t13], "Getmem", [(await $.wv([$t12, $t13], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "tmpSize", { get: async () => L0["tmpsize"], set: async (v) => { L0["tmpsize"] = v; }, local: true }, false))], C)));
      await $.wset([$t12, $t13], "zzipSize", (await $.wcall([$t12, $t13], "CompressMem", [(await $.wv([$t12, $t13], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "tmpSize", { get: async () => L0["tmpsize"], set: async (v) => { L0["tmpsize"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "CompressLevel", { get: async () => L0["compresslevel"], set: async (v) => { L0["compresslevel"] = v; }, local: true }, false))], C)), C);
      await $.stmt((await $.wcall([$t12, $t13], "InternalAdd", [(await $.wv([$t12, $t13], "aZipName", { get: async () => L0["azipname"], set: async (v) => { L0["azipname"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "zzipSize", C, false))], C)));
      await $.stmt((await $.wcall([$t12, $t13], "Freemem", [(await $.wv([$t12, $t13], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["aZipName", "Buf", "Size", "CompressLevel", "FileAge"], "kind": "procedure", "ptypes": ["TFileName", "pointer", "integer", "integer", "integer"]});
  U.method("TZipWriteAbstract", "AddStored", async function AddStored(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"azipname": $.copyArg(p0), "buf": $.copyArg(p1), "size": $.copyArg(p2), "fileage": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["azipname", "buf", "size", "fileage"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.v(C, "Count")), (await $.call(C, "length", [(await $.v(C, "Entry"))]))))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Entry")), async ($t14) => { await $.set(C, "Entry", $t14); }), $.add((await $.call(C, "length", [(await $.v(C, "Entry"))])), 20)])));
  }
  {
    const $t15 = (await $.idx((await $.v(C, "Entry")), [(await $.v(C, "Count"))]));
    const $t16 = (await $.mv((await $.wv([$t15], "fhr", C, false)), "fileInfo"));
    await $.wset([$t15, $t16], "zcrc32", (await $.mcall((await $.wv([$t15, $t16], "SynZip", C, false)), "crc32", [0, (await $.wv([$t15, $t16], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t15, $t16], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))])), C);
    await $.wset([$t15, $t16], "zfullSize", (await $.wv([$t15, $t16], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), C);
    await $.wset([$t15, $t16], "zzipSize", (await $.wv([$t15, $t16], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), C);
    await $.wset([$t15, $t16], "zlastMod", (await $.wv([$t15, $t16], "FileAge", { get: async () => L0["fileage"], set: async (v) => { L0["fileage"] = v; }, local: true }, false)), C);
    await $.stmt((await $.wcall([$t15, $t16], "InternalAdd", [(await $.wv([$t15, $t16], "aZipName", { get: async () => L0["azipname"], set: async (v) => { L0["azipname"] = v; }, local: true }, false)), (await $.wv([$t15, $t16], "Buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t15, $t16], "Size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["aZipName", "Buf", "Size", "FileAge"], "kind": "procedure", "ptypes": ["TFileName", "pointer", "integer", "integer"]});
  U.method("TZipWriteAbstract", "AddFromZip", async function AddFromZip(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), "entryindex": $.copyArg(p1), result: undefined, "s": null, "origzipname": null};
  await $.fixArgs(L0, ["source", "entryindex"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq(L0["source"], null)))))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.v(C, "Count")), (await $.call(C, "length", [(await $.v(C, "Entry"))]))))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Entry")), async ($t17) => { await $.set(C, "Entry", $t17); }), $.add((await $.call(C, "length", [(await $.v(C, "Entry"))])), 20)])));
  }
  {
    const $t18 = (await $.idx((await $.v(C, "Entry")), [(await $.v(C, "Count"))]));
    if ($.truthy((await $.mcall((await $.wv([$t18], "Source", { get: async () => L0["source"], set: async (v) => { L0["source"] = v; }, local: true }, false)), "RetrieveFileInfo", [(await $.wv([$t18], "EntryIndex", { get: async () => L0["entryindex"], set: async (v) => { L0["entryindex"] = v; }, local: true }, false)), $.ref(async () => (await $.mv((await $.wv([$t18], "fhr", C, false)), "FileInfo")), async ($t19) => { await $.mset((await $.wv([$t18], "fhr", C, false)), "FileInfo", $t19); })])))) {
      await $.wset([$t18], "s", (await $.idx((await $.mv((await $.wv([$t18], "Source", { get: async () => L0["source"], set: async (v) => { L0["source"] = v; }, local: true }, false)), "Entry")), [(await $.wv([$t18], "EntryIndex", { get: async () => L0["entryindex"], set: async (v) => { L0["entryindex"] = v; }, local: true }, false))])), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.stmt((await $.wcall([$t18], "SetString", [$.ref(async () => (await $.wv([$t18], "origZipName", { get: async () => L0["origzipname"], set: async (v) => { L0["origzipname"] = v; }, local: true }, false)), async ($t20) => { await $.wset([$t18], "origZipName", $t20, { get: async () => L0["origzipname"], set: async (v) => { L0["origzipname"] = v; }, local: true }); }), (await $.mv((await $.wv([$t18], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "storedName")), (await $.mv((await $.mv((await $.wv([$t18], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "infoLocal")), "nameLen"))], C)));
      await $.stmt((await $.wcall([$t18], "InternalAdd", [(await $.wv([$t18], "origZipName", { get: async () => L0["origzipname"], set: async (v) => { L0["origzipname"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t18], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "data")), (await $.mv((await $.mv((await $.wv([$t18], "fhr", C, false)), "fileInfo")), "zzipSize"))], C)));
    }
  }
  return L0.result;
}, {"params": ["Source", "EntryIndex"], "kind": "procedure", "ptypes": ["TZipRead", "integer"]});
  U.method("TZipWriteAbstract", "Append", async function Append(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"content": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["content"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.ne((await $.v(C, "fAppendOffset")), 0)))))) {
    return L0.result;
  }
  await $.set(C, "fAppendOffset", (await $.call(C, "length", [L0["content"]])));
  await $.stmt((await $.call(C, "InternalWrite", [(await $.call(C, "pointer", [L0["content"]])), (await $.v(C, "fAppendOffset"))])));
  return L0.result;
}, {"params": ["Content"], "kind": "procedure", "ptypes": ["ZipString"]});
  U.method("TZipWriteAbstract", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "lhr": $.rec("tlastheader"), "i": 0};
  await $.stmt((await $.call(C, "fillchar", [$.ref(async () => L0["lhr"], async ($t21) => { L0["lhr"] = $t21; }), (await $.call(C, "sizeof", [L0["lhr"]])), 0])));
  await $.mset(L0["lhr"], "signature", (await $.v(C, "LASTHEADER_SIGNATURE_INC")));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["lhr"], "signature")), async ($t22) => { await $.mset(L0["lhr"], "signature", $t22); })])));
  await $.mset(L0["lhr"], "thisFiles", (await $.v(C, "Count")));
  await $.mset(L0["lhr"], "totalFiles", (await $.v(C, "Count")));
  await $.mset(L0["lhr"], "headerOffset", $.sub((await $.v(C, "InternalWritePosition")), (await $.v(C, "fAppendOffset"))));
  { const $t23 = $.sub((await $.v(C, "Count")), 1);
    L0["i"] = 0;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
      $t24 = false;
      if (!($.ord(L0["i"]) <= $.ord($t23))) break;
      {
        const $t25 = (await $.idx((await $.v(C, "Entry")), [L0["i"]]));
        await $.stmt((await $.wcall([$t25], "assert", [$.eq((await $.mv((await $.mv((await $.wv([$t25], "fhr", C, false)), "fileInfo")), "nameLen")), (await $.wcall([$t25], "length", [(await $.wv([$t25], "intName", C, false))], C)))], C)));
        await $.stmt((await $.wcall([$t25], "inc", [$.ref(async () => (await $.mv((await $.wv([$t25], "lhr", { get: async () => L0["lhr"], set: async (v) => { L0["lhr"] = v; }, local: true }, false)), "headerSize")), async ($t26) => { await $.mset((await $.wv([$t25], "lhr", { get: async () => L0["lhr"], set: async (v) => { L0["lhr"] = v; }, local: true }, false)), "headerSize", $t26); }), $.add((await $.wcall([$t25], "sizeof", [(await $.wv([$t25], "TFileHeader", C, false))], C)), (await $.mv((await $.mv((await $.wv([$t25], "fhr", C, false)), "fileInfo")), "nameLen")))], C)));
        await $.stmt((await $.wcall([$t25], "InternalWrite", [(await $.wv([$t25], "fhr", C, false)), (await $.wcall([$t25], "sizeof", [(await $.wv([$t25], "fhr", C, false))], C))], C)));
        await $.stmt((await $.wcall([$t25], "InternalWrite", [(await $.wcall([$t25], "pointer", [(await $.wv([$t25], "IntName", C, false))], C)), (await $.mv((await $.mv((await $.wv([$t25], "fhr", C, false)), "fileInfo")), "nameLen"))], C)));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "InternalWrite", [L0["lhr"], (await $.call(C, "sizeof", [L0["lhr"]]))])));
  await $.inherited(Self, "TZipWriteAbstract", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TZipWrite", "InternalWritePosition", async function InternalWritePosition(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "SetFilePointer", [(await $.v(C, "Handle")), 0, null, (await $.v(C, "FILE_CURRENT"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TZipWrite", "InternalWrite", async function InternalWrite(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buf": $.copyArg(p0), "len": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["buf", "len"]);
  await $.stmt((await $.call(C, "FileWrite", [(await $.v(C, "Handle")), L0["buf"], L0["len"]])));
  return L0.result;
}, {"params": ["buf", "len"], "kind": "procedure", "ptypes": [null, "cardinal"]});
  U.method("TZipWrite", "AddFolder", async function AddFolder(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"foldername": $.copyArg(p0), "mask": $.copyArg(p1), "recursive": $.copyArg(p2), "compresslevel": $.copyArg(p3), "zipfolder": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["foldername", "mask", "recursive", "compresslevel", "zipfolder"]);
  L0["recursiveadd"] = $.fn(async function RecursiveAdd(p0, p1) {
  const L1 = {"filedir": $.copyArg(p0), "zipdir": $.copyArg(p1), result: undefined, "f": null};
  await $.fixArgs(L1, ["filedir", "zipdir"]);
  if ($.truthy(L0["recursive"])) {
    if ($.truthy($.eq((await $.call(C, "FindFirst", [$.add(L1["filedir"], (await $.v(C, "ZIP_FILES_ALL"))), (await $.v(C, "faDirectory")), $.ref(async () => L1["f"], async ($t27) => { L1["f"] = $t27; })])), 0))) {
      do {
        if ($.truthy($.ne((await $.idx((await $.mv(L1["f"], "Name")), [1])), "."))) {
          await $.stmt((await $.callv(L0["recursiveadd"], [$.add($.add(L1["filedir"], (await $.mv(L1["f"], "Name"))), (await $.v(C, "PathDelim"))), $.add($.add(L1["zipdir"], (await $.mv(L1["f"], "Name"))), "\\")])));
        }
        await $.tick();
      } while (!$.truthy($.ne((await $.call(C, "FindNext", [$.ref(async () => L1["f"], async ($t28) => { L1["f"] = $t28; })])), 0)));
      await $.stmt((await $.call(C, "FindClose", [$.ref(async () => L1["f"], async ($t29) => { L1["f"] = $t29; })])));
    }
  }
  if ($.truthy($.eq((await $.call(C, "FindFirst", [$.add(L1["filedir"], L0["mask"]), $.sub((await $.v(C, "faAnyfile")), (await $.v(C, "faDirectory"))), $.ref(async () => L1["f"], async ($t30) => { L1["f"] = $t30; })])), 0))) {
    do {
      if ($.truthy($.ne((await $.idx((await $.mv(L1["f"], "Name")), [1])), "."))) {
        if ($.truthy($.eq((await $.and_((await $.mv(L1["f"], "Attr")), async () => ($.add($.add($.add((await $.v(C, "faDirectory")), (await $.v(C, "faVolumeID"))), (await $.v(C, "faSysFile"))), (await $.v(C, "faHidden")))))), 0))) {
          await $.stmt((await $.call(C, "AddDeflated", [$.add(L1["filedir"], (await $.mv(L1["f"], "Name"))), false, L0["compresslevel"], $.add(L1["zipdir"], (await $.mv(L1["f"], "Name")))])));
        }
      }
      await $.tick();
    } while (!$.truthy($.ne((await $.call(C, "FindNext", [$.ref(async () => L1["f"], async ($t31) => { L1["f"] = $t31; })])), 0)));
    await $.stmt((await $.call(C, "FindClose", [$.ref(async () => L1["f"], async ($t32) => { L1["f"] = $t32; })])));
  }
  return L1.result;
});
  if ($.truthy($.ne(L0["zipfolder"], ""))) {
    L0["zipfolder"] = (await $.call(C, "IncludeTrailingPathDelimiter", [L0["zipfolder"]]));
  }
  await $.stmt((await $.callv(L0["recursiveadd"], [(await $.call(C, "IncludeTrailingPathDelimiter", [L0["foldername"]])), L0["zipfolder"]])));
  return L0.result;
}, {"params": ["FolderName", "Mask", "Recursive", "CompressLevel", "ZipFolder"], "kind": "procedure", "ptypes": ["TFileName", "TFileName", "boolean", "integer", "TFileName"]});
  U.method("TZipWrite", "AddDeflated", async function AddDeflated(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), "removepath": $.copyArg(p1), "compresslevel": $.copyArg(p2), "zipname": $.copyArg(p3), result: undefined, "size": 0, "size64": null, "offshead": 0, "offsend": 0, "s": null, "d": null, "z": null};
  await $.fixArgs(L0, ["afilename", "removepath", "compresslevel", "zipname"]);
  L0["s"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["afilename"], (await $.or_((await $.v(C, "fmOpenRead")), async () => (await $.v(C, "fmShareDenyNone"))))]));
  try {
    if ($.truthy($.eq(L0["zipname"], ""))) {
      if ($.truthy(L0["removepath"])) {
        L0["zipname"] = (await $.call(C, "ExtractFileName", [L0["afilename"]]));
      } else {
        L0["zipname"] = (await $.call(C, "StringReplace", [L0["afilename"], "/", "\\", [(await $.v(C, "rfReplaceAll"))]]));
      }
    }
    L0["size"] = (await $.mv(L0["s"], "Size"));
    if ($.truthy($.ne((await $.mv(L0["size64"], "Hi")), 0))) {
      throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "CreateFmt", ["%s file too big for .zip", [L0["afilename"]]])));
    }
    if ($.truthy($.ge((await $.v(C, "Count")), (await $.call(C, "length", [(await $.v(C, "Entry"))]))))) {
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Entry")), async ($t33) => { await $.set(C, "Entry", $t33); }), $.add((await $.call(C, "length", [(await $.v(C, "Entry"))])), 20)])));
    }
    L0["offshead"] = (await $.call(C, "InternalAdd", [L0["zipname"], null, 0]));
    L0["d"] = (await $.mcall((await $.v(C, "THandleStream")), "Create", [(await $.v(C, "Handle"))]));
    L0["z"] = (await $.mcall((await $.v(C, "TSynZipCompressor")), "Create", [L0["d"], L0["compresslevel"]]));
    try {
      await $.stmt((await $.mcall(L0["z"], "CopyFrom", [L0["s"], (await $.mv(L0["size64"], "Lo"))])));
      await $.mcall(L0["z"], "Flush", []);
      await $.stmt((await $.call(C, "assert", [$.eq((await $.mv(L0["z"], "SizeIn")), (await $.mv(L0["size64"], "Lo")))])));
      {
        const $t34 = (await $.idx((await $.v(C, "Entry")), [(await $.v(C, "Count"))]));
        {
          const $t35 = (await $.mv((await $.wv([$t34], "fhr", C, false)), "fileInfo"));
          await $.wset([$t34, $t35], "zcrc32", (await $.mv((await $.wv([$t34, $t35], "Z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), "CRC")), C);
          await $.wset([$t34, $t35], "zfullSize", (await $.mv((await $.wv([$t34, $t35], "Z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), "SizeIn")), C);
          await $.wset([$t34, $t35], "zzipSize", (await $.mv((await $.wv([$t34, $t35], "Z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), "SizeOut")), C);
          await $.wset([$t34, $t35], "zzipMethod", (await $.wv([$t34, $t35], "Z_DEFLATED", C, false)), C);
          await $.wset([$t34, $t35], "zlastMod", (await $.wcall([$t34, $t35], "FileAge", [(await $.wv([$t34, $t35], "ZipName", { get: async () => L0["zipname"], set: async (v) => { L0["zipname"] = v; }, local: true }, false))], C)), C);
        }
        await $.wset([$t34], "OffsEnd", (await $.mv((await $.wv([$t34], "D", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false)), "Position")), { get: async () => L0["offsend"], set: async (v) => { L0["offsend"] = v; }, local: true });
        await $.mset((await $.wv([$t34], "D", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false)), "Position", $.add((await $.wv([$t34], "OffsHead", { get: async () => L0["offshead"], set: async (v) => { L0["offshead"] = v; }, local: true }, false)), (await $.wcall([$t34], "sizeof", [(await $.wv([$t34], "fMagic", C, false))], C))));
        await $.stmt((await $.mcall((await $.wv([$t34], "D", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false)), "WriteBuffer", [(await $.mv((await $.wv([$t34], "fhr", C, false)), "fileInfo")), (await $.wcall([$t34], "sizeof", [(await $.mv((await $.wv([$t34], "fhr", C, false)), "fileInfo"))], C))])));
        await $.mset((await $.wv([$t34], "D", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false)), "Position", (await $.wv([$t34], "OffsEnd", { get: async () => L0["offsend"], set: async (v) => { L0["offsend"] = v; }, local: true }, false)));
      }
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "Count")), async ($t36) => { await $.set(C, "Count", $t36); })])));
    } finally {
      await $.mcall(L0["z"], "Free", []);
      await $.mcall(L0["d"], "Free", []);
    }
  } finally {
    await $.mcall(L0["s"], "Free", []);
  }
  return L0.result;
}, {"params": ["aFileName", "RemovePath", "CompressLevel", "ZipName"], "kind": "procedure", "ptypes": ["TFileName", "boolean", "integer", "TFileName"]});
  U.method("TZipWrite", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["afilename"]);
  await $.stmt($.call(C, "Create", []));
  await $.set(C, "fFileName", L0["afilename"]);
  if ($.truthy($.eq((await $.v(C, "Handle")), 0))) {
    await $.set(C, "Handle", (await $.call(C, "FileCreate", [L0["afilename"]])));
  }
  return L0.result;
}, {"params": ["aFileName"], "kind": "constructor", "ptypes": ["TFileName"]});
  U.method("TZipWrite", "CreateFrom", async function CreateFrom(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), "dummy": $.copyArg(p1), result: undefined, "r": null, "i": 0};
  await $.fixArgs(L0, ["afilename", "dummy"]);
  await $.set(C, "Handle", (await $.call(C, "FileOpen", [L0["afilename"], (await $.or_((await $.v(C, "fmOpenReadWrite")), async () => (await $.v(C, "fmShareDenyNone"))))])));
  if ($.truthy($.lt((await $.v(C, "Handle")), 0))) {
    L0["r"] = null;
    await $.set(C, "Handle", 0);
  } else {
    L0["r"] = (await $.mcall((await $.v(C, "TZipRead")), "Create", [(await $.v(C, "Handle"))]));
  }
  await $.stmt((await $.call(C, "Create", [L0["afilename"]])));
  if ($.truthy($.ne(L0["r"], null))) {
    try {
      await $.set(C, "Count", (await $.mv(L0["r"], "Count")));
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Entry")), async ($t37) => { await $.set(C, "Entry", $t37); }), $.add((await $.v(C, "Count")), 10)])));
      { const $t38 = $.sub((await $.v(C, "Count")), 1);
        L0["i"] = 0;
        let $t39 = true;
        for (;;) {
          if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
          $t39 = false;
          if (!($.ord(L0["i"]) <= $.ord($t38))) break;
          {
            const $t40 = (await $.idx((await $.v(C, "Entry")), [L0["i"]]));
            const $t41 = (await $.idx((await $.mv((await $.wv([$t40], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Entry")), [(await $.wv([$t40], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]));
            await $.mcall((await $.wv([$t40, $t41], "fhr", C, false)), "Init", []);
            await $.mset((await $.wv([$t40, $t41], "fhr", C, false)), "localHeadOff", $.sub((await $.wcall([$t40, $t41], "ZipPtrUint", [(await $.wv([$t40, $t41], "infoLocal", C, false))], C)), (await $.wcall([$t40, $t41], "ZipPtrUint", [(await $.mv((await $.idx((await $.mv((await $.wv([$t40, $t41], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Entry")), [0])), "infoLocal"))], C))));
            await $.stmt((await $.mcall((await $.wv([$t40, $t41], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "RetrieveFileInfo", [(await $.wv([$t40, $t41], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), $.ref(async () => (await $.mv((await $.wv([$t40, $t41], "fhr", C, false)), "fileInfo")), async ($t42) => { await $.mset((await $.wv([$t40, $t41], "fhr", C, false)), "fileInfo", $t42); })])));
            await $.stmt((await $.wcall([$t40, $t41], "SetString", [$.ref(async () => (await $.wv([$t40, $t41], "intName", C, false)), async ($t43) => { await $.wset([$t40, $t41], "intName", $t43, C); }), (await $.wv([$t40, $t41], "storedName", C, false)), (await $.mv((await $.wv([$t40, $t41], "infoLocal", C, false)), "nameLen"))], C)));
          }
          await $.tick();
        }
      }
      await $.stmt((await $.call(C, "FileSeek", [(await $.v(C, "Handle")), (await $.mv(L0["r"], "ReadOffset")), (await $.v(C, "soFromBeginning"))])));
    } finally {
      await $.mcall(L0["r"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["aFileName", "dummy"], "kind": "constructor", "ptypes": ["TFileName", "integer"]});
  U.method("TZipWrite", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TZipWrite", "Destroy", null, arguments);
  await $.stmt((await $.call(C, "SetEndOfFile", [(await $.v(C, "Handle"))])));
  await $.stmt((await $.call(C, "FileClose", [(await $.v(C, "Handle"))])));
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TZipWriteToStream", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"adest": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["adest"]);
  await $.set(C, "fDest", L0["adest"]);
  await $.inherited(Self, "TZipWriteToStream", "Create", null, arguments);
  return L0.result;
}, {"params": ["aDest"], "kind": "constructor", "ptypes": ["TStream"]});
  U.method("TZipWriteToStream", "InternalWritePosition", async function InternalWritePosition(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mcall((await $.v(C, "fDest")), "Seek", [0, (await $.v(C, "soCurrent"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TZipWriteToStream", "InternalWrite", async function InternalWrite(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buf": $.copyArg(p0), "len": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["buf", "len"]);
  await $.stmt((await $.mcall((await $.v(C, "fDest")), "WriteBuffer", [L0["buf"], L0["len"]])));
  return L0.result;
}, {"params": ["buf", "len"], "kind": "procedure", "ptypes": [null, "cardinal"]});
  U.method("TZipRead", "UnMap", async function UnMap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Count", 0);
  if ($.truthy((await $.and_(($.ne((await $.v(C, "mapSize")), 0)), async () => ($.ne((await $.v(C, "buf")), null)))))) {
    await $.stmt((await $.call(C, "fpmunmap", [(await $.v(C, "buf")), (await $.v(C, "mapSize"))])));
    await $.set(C, "mapSize", 0);
  }
  if ($.truthy($.gt((await $.v(C, "file_")), 0))) {
    await $.stmt((await $.call(C, "FileClose", [(await $.v(C, "file_"))])));
    await $.set(C, "file_", 0);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TZipRead", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bufzip": $.copyArg(p0), "size": $.copyArg(p1), result: undefined, "lhr": null, "h": null, "lfhr": null, "i": 0, "j": 0, "tmp": null, "p": null};
  await $.fixArgs(L0, ["bufzip", "size"]);
  { const $t44 = 127;
    L0["i"] = 0;
    let $t45 = true;
    for (;;) {
      if (!$t45) { L0["i"] = $.succ(L0["i"], 1); }
      $t45 = false;
      if (!($.ord(L0["i"]) <= $.ord($t44))) break;
      L0["lhr"] = (await $.idx(L0["bufzip"], [$.sub(L0["size"], (await $.call(C, "sizeof", [(await $.v(C, "TLastHeader"))])))]));
      if ($.truthy($.eq($.add((await $.mv(L0["lhr"], "signature")), 1), (await $.v(C, "LASTHEADER_SIGNATURE_INC"))))) {
        break;
      }
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["size"], async ($t46) => { L0["size"] = $t46; })])));
      if ($.truthy($.le(L0["size"], (await $.call(C, "sizeof", [L0["lhr"]]))))) {
        break;
      }
      await $.tick();
    }
  }
  if ($.truthy($.ne($.add((await $.mv(L0["lhr"], "signature")), 1), (await $.v(C, "LASTHEADER_SIGNATURE_INC"))))) {
    await $.stmt($.call(C, "UnMap", []));
    throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "Create", ["ZIP format"])));
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Entry")), async ($t47) => { await $.set(C, "Entry", $t47); }), (await $.mv(L0["lhr"], "totalFiles"))])));
  await $.set(C, "ReadOffset", (await $.mv(L0["lhr"], "headerOffset")));
  await $.set(C, "FirstFileHeader", (await $.idx(L0["bufzip"], [(await $.mv(L0["lhr"], "headerOffset"))])));
  L0["h"] = (await $.v(C, "FirstFileHeader"));
  { const $t48 = (await $.mv(L0["lhr"], "totalFiles"));
    L0["i"] = 1;
    let $t49 = true;
    for (;;) {
      if (!$t49) { L0["i"] = $.succ(L0["i"], 1); }
      $t49 = false;
      if (!($.ord(L0["i"]) <= $.ord($t48))) break;
      if ($.truthy($.ne($.add((await $.mv(L0["h"], "signature")), 1), (await $.v(C, "ENTRY_SIGNATURE_INC"))))) {
        await $.stmt($.call(C, "UnMap", []));
        throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "Create", ["ZIP format"])));
      }
      L0["lfhr"] = (await $.idx(L0["bufzip"], [(await $.mv(L0["h"], "localHeadOff"))]));
      {
        const $t50 = (await $.mv(L0["lfhr"], "fileInfo"));
        if ($.truthy($.ne((await $.and_((await $.wv([$t50], "flags", C, false)), async () => ($.shl(1, 3)))), 0))) {
          if ($.truthy((await $.or_((await $.or_(($.ne((await $.wv([$t50], "zcrc32", C, false)), 0)), async () => ($.ne((await $.wv([$t50], "zzipSize", C, false)), 0)))), async () => ($.ne((await $.wv([$t50], "zfullSize", C, false)), 0)))))) {
            throw $.raise((await $.mcall((await $.wv([$t50], "ESynZipException", C, false)), "Create", ["ZIP extended format"])));
          }
        } else {
          if ($.truthy((await $.or_(($.eq((await $.wv([$t50], "zzipSize", C, false)), (await $.wcall([$t50], "cardinal", [(-(1))], C)))), async () => ($.eq((await $.wv([$t50], "zfullSize", C, false)), (await $.wcall([$t50], "cardinal", [(-(1))], C)))))))) {
            throw $.raise((await $.mcall((await $.wv([$t50], "ESynZipException", C, false)), "Create", ["ZIP64 format not supported - use mORMot 2"])));
          }
        }
      }
      {
        const $t51 = (await $.idx((await $.v(C, "Entry")), [(await $.v(C, "Count"))]));
        await $.wset([$t51], "infoLocal", (await $.mref((await $.wv([$t51], "lfhr", { get: async () => L0["lfhr"], set: async (v) => { L0["lfhr"] = v; }, local: true }, false)), "fileInfo")), C);
        await $.wset([$t51], "infoDirectory", (await $.wv([$t51], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)), C);
        await $.wset([$t51], "storedName", $.add((await $.wcall([$t51], "PAnsiChar", [(await $.wv([$t51], "lfhr", { get: async () => L0["lfhr"], set: async (v) => { L0["lfhr"] = v; }, local: true }, false))], C)), (await $.wcall([$t51], "sizeof", [(await $.wv([$t51], "lfhr", { get: async () => L0["lfhr"], set: async (v) => { L0["lfhr"] = v; }, local: true }, false))], C))), C);
        await $.wset([$t51], "data", $.add($.add((await $.wv([$t51], "storedName", C, false)), (await $.mv((await $.wv([$t51], "infoLocal", C, false)), "NameLen"))), (await $.mv((await $.wv([$t51], "infoLocal", C, false)), "extraLen"))), C);
        await $.stmt((await $.wcall([$t51], "SetString", [$.ref(async () => (await $.wv([$t51], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), async ($t52) => { await $.wset([$t51], "tmp", $t52, { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }); }), (await $.wv([$t51], "storedName", C, false)), (await $.mv((await $.wv([$t51], "infoLocal", C, false)), "nameLen"))], C)));
        { const $t53 = $.sub((await $.mv((await $.wv([$t51], "infoLocal", C, false)), "nameLen")), 1);
          await $.wset([$t51], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t54 = true;
          for (;;) {
            if (!$t54) { await $.wset([$t51], "j", $.succ((await $.wv([$t51], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t54 = false;
            if (!($.ord((await $.wv([$t51], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t53))) break;
            if ($.truthy($.eq((await $.idx((await $.wv([$t51], "storedName", C, false)), [(await $.wv([$t51], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "/"))) {
              await $.iset((await $.wcall([$t51], "PAnsiChar", [(await $.wcall([$t51], "Pointer", [(await $.wv([$t51], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))], C)), [(await $.wv([$t51], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], "\\");
            }
            await $.tick();
          }
        }
        await $.wset([$t51], "P", (await $.mv((await $.wv([$t51], "infoLocal", C, false)), "ExtraUnicodeFileNamePos")), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
        if ($.truthy((await $.mv((await $.wv([$t51], "infoLocal", C, false)), "GetUTF8FileName")))) {
          await $.wset([$t51], "zipName", (await $.wcall([$t51], "TFileName", [(await $.wcall([$t51], "UTF8Decode", [(await $.wv([$t51], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))], C)), C);
        } else {
          if ($.truthy($.ne((await $.wv([$t51], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), null))) {
            await $.stmt((await $.wcall([$t51], "SetString", [$.ref(async () => (await $.wv([$t51], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), async ($t55) => { await $.wset([$t51], "tmp", $t55, { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }); }), (await $.wcall([$t51], "PAnsiChar", [(await $.mref((await $.wcall([$t51], "PFileInfoExtraName", [(await $.wv([$t51], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)), "utf8Name"))], C)), $.sub((await $.mv((await $.wcall([$t51], "PFileInfoExtraName", [(await $.wv([$t51], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)), "size")), 5)], C)));
            await $.wset([$t51], "zipName", (await $.wcall([$t51], "TFileName", [(await $.wcall([$t51], "UTF8Decode", [(await $.wv([$t51], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))], C)), C);
          } else {
            await $.wset([$t51], "zipName", (await $.wcall([$t51], "TFileName", [(await $.wcall([$t51], "UTF8Decode", [(await $.wv([$t51], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))], C)), C);
          }
        }
        await $.stmt((await $.wcall([$t51], "inc", [(await $.wcall([$t51], "PByte", [(await $.wv([$t51], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false))], C)), $.add($.add($.add((await $.wcall([$t51], "sizeof", [(await $.wv([$t51], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t51], "infoLocal", C, false)), "NameLen"))), (await $.mv((await $.mv((await $.wv([$t51], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)), "fileInfo")), "extraLen"))), (await $.mv((await $.wv([$t51], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)), "commentLen")))], C)));
        if ($.truthy($.not(($.in_((await $.mv((await $.wv([$t51], "infoLocal", C, false)), "zZipMethod")), [(await $.wv([$t51], "Z_STORED", C, false)), (await $.wv([$t51], "Z_DEFLATED", C, false))]))))) {
          throw $.raise((await $.mcall((await $.wv([$t51], "ESynZipException", C, false)), "CreateFmt", ["Unsupported compression method %d for %s", [(await $.mv((await $.wv([$t51], "infoLocal", C, false)), "zZipMethod")), (await $.wv([$t51], "zipName", C, false))]])));
        }
        if ($.truthy((await $.or_(($.eq((await $.wv([$t51], "zipName", C, false)), "")), async () => ($.eq((await $.idx((await $.wv([$t51], "zipName", C, false)), [(await $.wcall([$t51], "length", [(await $.wv([$t51], "zipName", C, false))], C))])), "\\")))))) {
          continue;
        }
        await $.stmt((await $.wcall([$t51], "inc", [$.ref(async () => (await $.wv([$t51], "Count", C, false)), async ($t56) => { await $.wset([$t51], "Count", $t56, C); })], C)));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["BufZip", "Size"], "kind": "constructor", "ptypes": ["PByteArray", "cardinal"]});
  U.method("TZipRead", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"instance": $.copyArg(p0), "resname": $.copyArg(p1), "restype": $.copyArg(p2), result: undefined, "hresinfo": 0, "hglobal": 0};
  await $.fixArgs(L0, ["instance", "resname", "restype"]);
  if ($.truthy($.eq(L0["instance"], 0))) {
    L0["instance"] = (await $.v(C, "HInstance"));
  }
  L0["hresinfo"] = (await $.call(C, "FindResource", [L0["instance"], (await $.call(C, "PChar", [L0["resname"]])), L0["restype"]]));
  if ($.truthy($.eq(L0["hresinfo"], 0))) {
    return L0.result;
  }
  L0["hglobal"] = (await $.call(C, "LoadResource", [L0["instance"], L0["hresinfo"]]));
  if ($.truthy($.ne(L0["hglobal"], 0))) {
    await $.stmt((await $.call(C, "Create", [(await $.call(C, "LockResource", [L0["hglobal"]])), (await $.call(C, "SizeofResource", [L0["instance"], L0["hresinfo"]]))])));
  }
  return L0.result;
}, {"params": ["Instance", "ResName", "ResType"], "kind": "constructor", "ptypes": ["THandle", "String", "PChar"]});
  U.method("TZipRead", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"afile": $.copyArg(p0), "zipstartoffset": $.copyArg(p1), "size": $.copyArg(p2), result: undefined, "i": 0, "exeoffset": 0};
  await $.fixArgs(L0, ["afile", "zipstartoffset", "size"]);
  if ($.truthy($.le(L0["afile"], 0))) {
    return L0.result;
  }
  if ($.truthy($.eq(L0["size"], 0))) {
    L0["size"] = (await $.call(C, "GetFileSize", [L0["afile"], null]));
  }
  await $.set(C, "mapSize", L0["size"]);
  await $.set(C, "buf", (await $.call(C, "fpmmap", [null, L0["size"], (await $.v(C, "PROT_READ")), (await $.v(C, "MAP_SHARED")), L0["afile"], 0])));
  if ($.truthy($.eq((await $.v(C, "buf")), (await $.v(C, "MAP_FAILED"))))) {
    await $.set(C, "buf", null);
  }
  if ($.truthy($.eq((await $.v(C, "buf")), null))) {
    await $.stmt($.call(C, "Unmap", []));
    throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "Create", ["FileMap failed"])));
  }
  L0["exeoffset"] = (-(1));
  { const $t57 = $.sub(L0["size"], 5);
    L0["i"] = L0["zipstartoffset"];
    let $t58 = true;
    for (;;) {
      if (!$t58) { L0["i"] = $.succ(L0["i"], 1); }
      $t58 = false;
      if (!($.ord(L0["i"]) <= $.ord($t57))) break;
      if ($.truthy($.eq($.add((await $.call(C, "PCardinal", [(await $.idx((await $.v(C, "buf")), [L0["i"]]))])), 1), (await $.v(C, "FIRSTHEADER_SIGNATURE_INC"))))) {
        L0["exeoffset"] = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  if ($.truthy($.lt(L0["exeoffset"], 0))) {
    { const $t59 = $.sub(L0["size"], 5);
      L0["i"] = L0["zipstartoffset"];
      let $t60 = true;
      for (;;) {
        if (!$t60) { L0["i"] = $.succ(L0["i"], 1); }
        $t60 = false;
        if (!($.ord(L0["i"]) <= $.ord($t59))) break;
        if ($.truthy($.eq($.add((await $.call(C, "PCardinal", [(await $.idx((await $.v(C, "buf")), [L0["i"]]))])), 1), (await $.v(C, "LASTHEADER_SIGNATURE_INC"))))) {
          L0["exeoffset"] = L0["i"];
          break;
        }
        await $.tick();
      }
    }
  }
  if ($.truthy($.lt(L0["exeoffset"], 0))) {
    await $.stmt($.call(C, "Unmap", []));
    throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "Create", ["No ZIP header found"])));
  }
  await $.stmt((await $.call(C, "Create", [(await $.idx((await $.v(C, "Buf")), [L0["exeoffset"]])), $.sub((await $.call(C, "integer", [L0["size"]])), L0["exeoffset"])])));
  return L0.result;
}, {"params": ["aFile", "ZipStartOffset", "Size"], "kind": "constructor", "ptypes": ["THandle", "cardinal", "cardinal"]});
  U.method("TZipRead", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), "zipstartoffset": $.copyArg(p1), "size": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["afilename", "zipstartoffset", "size"]);
  await $.set(C, "file_", (await $.call(C, "FileOpen", [L0["afilename"], (await $.or_((await $.v(C, "fmOpenRead")), async () => (await $.v(C, "fmShareDenyNone"))))])));
  await $.stmt((await $.call(C, "Create", [(await $.v(C, "file_")), L0["zipstartoffset"], L0["size"]])));
  return L0.result;
}, {"params": ["aFileName", "ZipStartOffset", "Size"], "kind": "constructor", "ptypes": ["TFileName", "cardinal", "cardinal"]});
  U.method("TZipRead", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "UnMap", []));
  await $.inherited(Self, "TZipRead", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TZipRead", "NameToIndex", async function NameToIndex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["aname"]);
  if ($.truthy((await $.and_(($.ne(Self, null)), async () => ($.ne(L0["aname"], "")))))) {
    { const $t61 = $.sub((await $.v(C, "Count")), 1);
      L0["result"] = 0;
      let $t62 = true;
      for (;;) {
        if (!$t62) { L0["result"] = $.succ(L0["result"], 1); }
        $t62 = false;
        if (!($.ord(L0["result"]) <= $.ord($t61))) break;
        if ($.truthy((await $.call(C, "SameText", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["result"]])), "zipName")), L0["aname"]])))) {
          return L0.result;
        }
        await $.tick();
      }
    }
  }
  L0["result"] = (-(1));
  return L0.result;
}, {"params": ["aName"], "kind": "function", "ptypes": ["TFileName"]});
  U.method("TZipRead", "RetrieveFileInfo", async function RetrieveFileInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "info": $.asRef(p1), result: false, "p": null, "pdatastart": 0};
  await $.fixArgs(L0, ["index"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.ge((await $.call(C, "cardinal", [L0["index"]])), (await $.call(C, "cardinal", [(await $.v(C, "Count"))])))))))) {
    L0["result"] = false;
    return L0.result;
  }
  await L0["info"].set((await $.mv((await $.idx((await $.v(C, "Entry")), [L0["index"]])), "infoLocal")));
  if ($.truthy($.eq((await $.and_((await $.mv((await L0["info"].get()), "flags")), async () => ($.shl(1, 3)))), 0))) {
    L0["result"] = true;
    return L0.result;
  }
  {
    const $t63 = (await $.mv((await $.mv((await $.idx((await $.v(C, "Entry")), [L0["index"]])), "infoDirectory")), "fileInfo"));
    if ($.truthy((await $.and_(($.ne((await $.wv([$t63], "zzipSize", C, false)), (await $.wcall([$t63], "dword", [(-(1))], C)))), async () => ($.ne((await $.wv([$t63], "zfullSize", C, false)), (await $.wcall([$t63], "dword", [(-(1))], C)))))))) {
      await $.mset((await $.wv([$t63], "Info", { get: async () => await L0["info"].get(), set: async (v) => { await L0["info"].set(v); }, local: true }, false)), "zcrc32", (await $.wv([$t63], "zcrc32", C, false)));
      await $.mset((await $.wv([$t63], "Info", { get: async () => await L0["info"].get(), set: async (v) => { await L0["info"].set(v); }, local: true }, false)), "zzipSize", (await $.wv([$t63], "zzipSize", C, false)));
      await $.mset((await $.wv([$t63], "Info", { get: async () => await L0["info"].get(), set: async (v) => { await L0["info"].set(v); }, local: true }, false)), "zfullSize", (await $.wv([$t63], "zfullSize", C, false)));
      await $.wset([$t63], "result", (await $.wv([$t63], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      return L0.result;
    }
  }
  if ($.truthy($.lt(L0["index"], $.sub((await $.v(C, "Count")), 2)))) {
    L0["p"] = (await $.call(C, "Pointer", [(await $.mv((await $.idx((await $.v(C, "Entry")), [$.add(L0["index"], 1)])), "infoLocal"))]));
  } else {
    L0["p"] = (await $.call(C, "Pointer", [(await $.v(C, "FirstFileHeader"))]));
  }
  await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["p"], async ($t64) => { L0["p"] = $t64; })])));
  L0["pdatastart"] = (await $.call(C, "ZipPtrUint", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["index"]])), "data"))]));
  do {
    if ($.truthy($.ne((await $.mv(L0["p"], "signature")), 134695760))) {
      if ($.truthy($.gt((await $.call(C, "ZipPtrUint", [L0["p"]])), L0["pdatastart"]))) {
        await $.stmt((await $.call(C, "dec", [(await $.call(C, "PByte", [L0["p"]]))])));
      } else {
        break;
      }
    } else {
      if ($.truthy($.eq((await $.mv(L0["p"], "zipSize")), $.sub((await $.call(C, "ZipPtrUint", [L0["p"]])), L0["pdatastart"])))) {
        if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq((await $.mv(L0["p"], "zipSize")), 0)), async () => ($.eq((await $.mv(L0["p"], "fullSize")), 0)))), async () => ($.eq((await $.mv(L0["p"], "zipSize")), (await $.call(C, "dword", [(-(1))])))))), async () => ($.eq((await $.mv(L0["p"], "fullSize")), (await $.call(C, "dword", [(-(1))])))))))) {
          break;
        }
        await $.mset((await L0["info"].get()), "zcrc32", (await $.mv(L0["p"], "crc32")));
        await $.mset((await L0["info"].get()), "zzipSize", (await $.mv(L0["p"], "zipSize")));
        await $.mset((await L0["info"].get()), "zfullSize", (await $.mv(L0["p"], "fullSize")));
        L0["result"] = true;
        return L0.result;
      } else {
        if ($.truthy($.gt((await $.call(C, "ZipPtrUint", [L0["p"]])), L0["pdatastart"]))) {
          await $.stmt((await $.call(C, "dec", [(await $.call(C, "PByte", [L0["p"]]))])));
        } else {
          break;
        }
      }
    }
    await $.tick();
  } while (!$.truthy(false));
  L0["result"] = false;
  return L0.result;
}, {"params": ["Index", "Info"], "kind": "function", "ptypes": ["integer", "TFileInfo"]});
  U.method("TZipRead", "UnZip", async function UnZip(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aindex": $.copyArg(p0), result: '', "len": 0, "info": null};
  await $.fixArgs(L0, ["aindex"]);
  L0["result"] = "";
  if ($.truthy($.not((await $.call(C, "RetrieveFileInfo", [L0["aindex"], $.ref(async () => L0["info"], async ($t65) => { L0["info"] = $t65; })]))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t66) => { L0["result"] = $t66; }), null, (await $.mv(L0["info"], "zfullSize"))])));
  { const $t67 = (await $.mv(L0["info"], "zZipMethod"));
    if ($.eq($t67, (await $.v(C, "Z_STORED")))) {
      L0["len"] = (await $.mv(L0["info"], "zfullsize"));
      await $.stmt((await $.call(C, "move", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "data")), (await $.call(C, "pointer", [L0["result"]])), L0["len"]])));
    }
    else if ($.eq($t67, (await $.v(C, "Z_DEFLATED")))) {
      L0["len"] = (await $.call(C, "UnCompressMem", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "data")), (await $.call(C, "pointer", [L0["result"]])), (await $.mv(L0["info"], "zzipsize")), (await $.mv(L0["info"], "zfullsize"))]));
    }
    else {
      throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "CreateFmt", ["Unsupported method %d for %s", [(await $.mv(L0["info"], "zZipMethod")), (await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "zipName"))]])));
    }
  }
  if ($.truthy((await $.or_(($.ne(L0["len"], (await $.mv(L0["info"], "zfullsize")))), async () => ($.ne((await $.mv(L0["info"], "zcrc32")), (await $.mcall((await $.v(C, "SynZip")), "crc32", [0, (await $.call(C, "pointer", [L0["result"]])), (await $.mv(L0["info"], "zfullSize"))])))))))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "CreateFmt", ["Error decompressing %s", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "zipName"))]])));
  }
  return L0.result;
}, {"params": ["aIndex"], "kind": "function", "ptypes": ["integer"]});
  U.func("EnsurePath", async function EnsurePath(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.asRef(p0), result: false, "parent": null};
  L0["result"] = false;
  if ($.truthy($.eq((await L0["path"].get()), ""))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.idx((await L0["path"].get()), [(await $.call(C, "length", [(await L0["path"].get())]))])), "\\"))) {
    await L0["path"].set($.add((await L0["path"].get()), "\\"));
  }
  if ($.truthy((await $.call(C, "DirectoryExists", [(await L0["path"].get())])))) {
    L0["result"] = true;
  } else {
    L0["parent"] = (await $.call(C, "ExtractFilePath", [(await $.mcall((await $.v(C, "system")), "copy", [(await L0["path"].get()), 1, $.sub((await $.call(C, "length", [(await L0["path"].get())])), 1)]))]));
    if ($.truthy((await $.and_(($.ne(L0["parent"], "")), async () => $.not((await $.call(C, "DirectoryExists", [L0["parent"]]))))))) {
      if ($.truthy($.not((await $.callv(L0["ensurepath"], [$.ref(async () => L0["parent"], async ($t68) => { L0["parent"] = $t68; })]))))) {
        return L0.result;
      }
    }
    if ($.truthy((await $.call(C, "CreateDir", [(await L0["path"].get())])))) {
      L0["result"] = true;
    }
  }
  return L0.result;
}, {"params": ["Path"], "kind": "function", "ptypes": ["TFileName"]});
  U.method("TZipRead", "UnZipStream", async function UnZipStream(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aindex": $.copyArg(p0), "ainfo": $.copyArg(p1), "adest": $.copyArg(p2), result: false, "crc": 0};
  await $.fixArgs(L0, ["aindex", "ainfo", "adest"]);
  L0["result"] = false;
  { const $t69 = (await $.mv(L0["ainfo"], "zZipMethod"));
    if ($.eq($t69, (await $.v(C, "Z_STORED")))) {
      await $.stmt((await $.mcall(L0["adest"], "WriteBuffer", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "data")), (await $.mv(L0["ainfo"], "zfullsize"))])));
      L0["crc"] = (await $.mcall((await $.v(C, "SynZip")), "crc32", [0, (await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "data")), (await $.mv(L0["ainfo"], "zfullSize"))]));
    }
    else if ($.eq($t69, (await $.v(C, "Z_DEFLATED")))) {
      if ($.truthy($.ne((await $.call(C, "UnCompressStream", [(await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "data")), (await $.mv(L0["ainfo"], "zzipsize")), L0["adest"], L0["crc"]])), (await $.mv(L0["ainfo"], "zfullsize"))))) {
        return L0.result;
      }
    }
    else {
      throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "CreateFmt", ["Unsupported method %d for %s", [(await $.mv(L0["ainfo"], "zZipMethod")), (await $.mv((await $.idx((await $.v(C, "Entry")), [L0["aindex"]])), "zipName"))]])));
    }
  }
  L0["result"] = $.eq(L0["crc"], (await $.mv(L0["ainfo"], "zcrc32")));
  return L0.result;
}, {"params": ["aIndex", "aInfo", "aDest"], "kind": "function", "ptypes": ["integer", "TFileInfo", "TStream"]});
  U.method("TZipRead", "UnZip", async function UnZip(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aindex": $.copyArg(p0), "adest": $.copyArg(p1), result: false, "info": null};
  await $.fixArgs(L0, ["aindex", "adest"]);
  if ($.truthy($.not((await $.call(C, "RetrieveFileInfo", [L0["aindex"], $.ref(async () => L0["info"], async ($t70) => { L0["info"] = $t70; })]))))) {
    L0["result"] = false;
  } else {
    L0["result"] = (await $.call(C, "UnZipStream", [L0["aindex"], L0["info"], L0["adest"]]));
  }
  return L0.result;
}, {"params": ["aIndex", "aDest"], "kind": "function", "ptypes": ["integer", "TStream"]});
  U.method("TZipRead", "UnZip", async function UnZip(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aindex": $.copyArg(p0), "destdir": $.copyArg(p1), "destdirisfilename": $.copyArg(p2), result: false, "fs": null, "path": null, "info": null};
  await $.fixArgs(L0, ["aindex", "destdir", "destdirisfilename"]);
  L0["result"] = false;
  if ($.truthy($.not((await $.call(C, "RetrieveFileInfo", [L0["aindex"], $.ref(async () => L0["info"], async ($t71) => { L0["info"] = $t71; })]))))) {
    return L0.result;
  }
  {
    const $t72 = (await $.idx((await $.v(C, "Entry")), [L0["aindex"]]));
    if ($.truthy((await $.wv([$t72], "DestDirIsFileName", { get: async () => L0["destdirisfilename"], set: async (v) => { L0["destdirisfilename"] = v; }, local: true }, false)))) {
      await $.wset([$t72], "Path", (await $.wv([$t72], "DestDir", { get: async () => L0["destdir"], set: async (v) => { L0["destdir"] = v; }, local: true }, false)), { get: async () => L0["path"], set: async (v) => { L0["path"] = v; }, local: true });
    } else {
      await $.wset([$t72], "Path", $.add((await $.wv([$t72], "DestDir", { get: async () => L0["destdir"], set: async (v) => { L0["destdir"] = v; }, local: true }, false)), (await $.wcall([$t72], "ExtractFilePath", [(await $.wv([$t72], "zipName", C, false))], C))), { get: async () => L0["path"], set: async (v) => { L0["path"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t72], "EnsurePath", [$.ref(async () => (await $.wv([$t72], "Path", { get: async () => L0["path"], set: async (v) => { L0["path"] = v; }, local: true }, false)), async ($t73) => { await $.wset([$t72], "Path", $t73, { get: async () => L0["path"], set: async (v) => { L0["path"] = v; }, local: true }); })], C))))) {
        return L0.result;
      }
      await $.wset([$t72], "Path", $.add((await $.wv([$t72], "Path", { get: async () => L0["path"], set: async (v) => { L0["path"] = v; }, local: true }, false)), (await $.wcall([$t72], "ExtractFileName", [(await $.wv([$t72], "zipName", C, false))], C))), { get: async () => L0["path"], set: async (v) => { L0["path"] = v; }, local: true });
    }
  }
  L0["fs"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["path"], (await $.v(C, "fmCreate"))]));
  try {
    L0["result"] = (await $.call(C, "UnZipStream", [L0["aindex"], L0["info"], L0["fs"]]));
  } finally {
    await $.mcall(L0["fs"], "Free", []);
  }
  return L0.result;
}, {"params": ["aIndex", "DestDir", "DestDirIsFileName"], "kind": "function", "ptypes": ["integer", "TFileName", "boolean"]});
  U.method("TZipRead", "UnZipAll", async function UnZipAll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"destdir": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["destdir"]);
  if ($.truthy($.ne(L0["destdir"], ""))) {
    L0["destdir"] = (await $.call(C, "IncludeTrailingPathDelimiter", [L0["destdir"]]));
  }
  { const $t74 = $.sub((await $.v(C, "Count")), 1);
    L0["result"] = 0;
    let $t75 = true;
    for (;;) {
      if (!$t75) { L0["result"] = $.succ(L0["result"], 1); }
      $t75 = false;
      if (!($.ord(L0["result"]) <= $.ord($t74))) break;
      if ($.truthy($.not((await $.call(C, "UnZip", [L0["result"], L0["destdir"]]))))) {
        return L0.result;
      }
      await $.tick();
    }
  }
  L0["result"] = (-(1));
  return L0.result;
}, {"params": ["DestDir"], "kind": "function", "ptypes": ["TFileName"]});
  U.method("TZipRead", "UnZip", async function UnZip(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), "destdir": $.copyArg(p1), "destdirisfilename": $.copyArg(p2), result: false, "aindex": 0};
  await $.fixArgs(L0, ["aname", "destdir", "destdirisfilename"]);
  L0["aindex"] = (await $.call(C, "NameToIndex", [L0["aname"]]));
  if ($.truthy($.lt(L0["aindex"], 0))) {
    L0["result"] = false;
  } else {
    L0["result"] = (await $.callv(L0["unzip"], [L0["aindex"], L0["destdir"], L0["destdirisfilename"]]));
  }
  return L0.result;
}, {"params": ["aName", "DestDir", "DestDirIsFileName"], "kind": "function", "ptypes": ["TFileName", "TFileName", "boolean"]});
  U.method("TZipRead", "UnZip", async function UnZip(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aname": $.copyArg(p0), result: '', "aindex": 0};
  await $.fixArgs(L0, ["aname"]);
  L0["aindex"] = (await $.call(C, "NameToIndex", [L0["aname"]]));
  if ($.truthy($.lt(L0["aindex"], 0))) {
    L0["result"] = "";
  } else {
    L0["result"] = (await $.callv(L0["unzip"], [L0["aindex"]]));
  }
  return L0.result;
}, {"params": ["aName"], "kind": "function", "ptypes": ["TFileName"]});
  U.method("TGZRead", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"gz": $.copyArg(p0), "gzlen": $.copyArg(p1), result: false, "offset": 0, "flags": []};
  await $.fixArgs(L0, ["gz", "gzlen"]);
  await $.set(C, "comp", null);
  await $.set(C, "complen", 0);
  await $.set(C, "uncomplen32", 0);
  await $.set(C, "zsdest", null);
  L0["result"] = false;
  await $.set(C, "extra", null);
  await $.set(C, "fname", null);
  await $.set(C, "fcomment", null);
  if ($.truthy((await $.or_((await $.or_(($.eq(L0["gz"], null)), async () => ($.le(L0["gzlen"], 18)))), async () => ($.ne((await $.and_((await $.call(C, "PCardinal", [L0["gz"]])), async () => 16777215)), (await $.idx((await $.v(C, "GZHEAD")), [0])))))))) {
    return L0.result;
  }
  L0["flags"] = (await $.call(C, "TGZFlags", [(await $.idx(L0["gz"], [3]))]));
  await $.set(C, "unixmodtime", (await $.call(C, "PCardinal", [$.add(L0["gz"], 4)])));
  L0["offset"] = (await $.v(C, "GZHEAD_SIZE"));
  if ($.truthy($.in_((await $.v(C, "gzfExtra")), L0["flags"]))) {
    await $.set(C, "extra", $.add(L0["gz"], L0["offset"]));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["offset"], async ($t76) => { L0["offset"] = $t76; }), $.add((await $.call(C, "PWord", [(await $.v(C, "extra"))])), (await $.call(C, "SizeOf", [(await $.v(C, "word"))])))])));
  }
  if ($.truthy($.in_((await $.v(C, "gzfName")), L0["flags"]))) {
    await $.set(C, "fname", $.add(L0["gz"], L0["offset"]));
    while ($.truthy((await $.and_(($.lt(L0["offset"], L0["gzlen"])), async () => ($.ne((await $.idx(L0["gz"], [L0["offset"]])), "\u0000")))))) {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["offset"], async ($t77) => { L0["offset"] = $t77; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["offset"], async ($t78) => { L0["offset"] = $t78; })])));
  }
  if ($.truthy($.in_((await $.v(C, "gzfComment")), L0["flags"]))) {
    await $.set(C, "fcomment", $.add(L0["gz"], L0["offset"]));
    while ($.truthy((await $.and_(($.lt(L0["offset"], L0["gzlen"])), async () => ($.ne((await $.idx(L0["gz"], [L0["offset"]])), "\u0000")))))) {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["offset"], async ($t79) => { L0["offset"] = $t79; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["offset"], async ($t80) => { L0["offset"] = $t80; })])));
  }
  if ($.truthy($.in_((await $.v(C, "gzfHCRC")), L0["flags"]))) {
    if ($.truthy($.ne((await $.call(C, "PWord", [$.add(L0["gz"], L0["offset"])])), (await $.and_((await $.mcall((await $.v(C, "SynZip")), "crc32", [0, L0["gz"], L0["offset"]])), async () => 65535))))) {
      return L0.result;
    } else {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["offset"], async ($t81) => { L0["offset"] = $t81; }), (await $.call(C, "SizeOf", [(await $.v(C, "word"))]))])));
    }
  }
  if ($.truthy($.ge(L0["offset"], $.sub(L0["gzlen"], 8)))) {
    return L0.result;
  }
  await $.set(C, "uncomplen32", (await $.call(C, "PCardinal", [(await $.idx(L0["gz"], [$.sub(L0["gzlen"], 4)]))])));
  await $.set(C, "comp", $.add(L0["gz"], L0["offset"]));
  await $.set(C, "complen", $.sub($.sub(L0["gzlen"], L0["offset"]), 8));
  await $.set(C, "crc32", (await $.call(C, "PCardinal", [(await $.idx(L0["gz"], [$.sub(L0["gzlen"], 8)]))])));
  L0["result"] = true;
  return L0.result;
}, {"params": ["gz", "gzLen"], "kind": "function", "ptypes": ["PAnsiChar", "ZipPtrInt"]});
  U.method("TGZRead", "ToMem", async function ToMem(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = "";
  if ($.truthy((await $.or_(($.eq((await $.v(C, "comp")), null)), async () => ((await $.and_(($.eq((await $.v(C, "uncomplen32")), 0)), async () => ($.eq((await $.v(C, "crc32")), 0))))))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t82) => { L0["result"] = $t82; }), (await $.v(C, "uncomplen32"))])));
  if ($.truthy((await $.or_(($.ne((await $.call(C, "UnCompressMem", [(await $.v(C, "comp")), (await $.call(C, "pointer", [L0["result"]])), (await $.v(C, "complen")), (await $.v(C, "uncomplen32"))])), (await $.call(C, "integer", [(await $.v(C, "uncomplen32"))])))), async () => ($.ne((await $.mcall((await $.v(C, "SynZip")), "crc32", [0, (await $.call(C, "pointer", [L0["result"]])), (await $.v(C, "uncomplen32"))])), (await $.v(C, "crc32")))))))) {
    L0["result"] = "";
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGZRead", "ToStream", async function ToStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), "tempbufsize": $.copyArg(p1), result: false, "crc": 0};
  await $.fixArgs(L0, ["stream", "tempbufsize"]);
  L0["crc"] = 0;
  L0["result"] = (await $.and_((await $.and_((await $.and_(($.ne((await $.v(C, "comp")), null)), async () => ($.ne(L0["stream"], null)))), async () => ($.eq((await $.call(C, "UnCompressStream", [(await $.v(C, "comp")), (await $.v(C, "complen")), L0["stream"], L0["crc"], false, L0["tempbufsize"]])), (await $.v(C, "uncomplen32")))))), async () => ($.eq(L0["crc"], (await $.v(C, "crc32"))))));
  return L0.result;
}, {"params": ["stream", "tempBufSize"], "kind": "function", "ptypes": ["TStream", "integer"]});
  U.method("TGZRead", "ToFile", async function ToFile(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), "tempbufsize": $.copyArg(p1), result: false, "f": null};
  await $.fixArgs(L0, ["filename", "tempbufsize"]);
  L0["result"] = false;
  if ($.truthy((await $.or_(($.eq((await $.v(C, "comp")), null)), async () => ($.eq(L0["filename"], "")))))) {
    return L0.result;
  }
  L0["f"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["filename"], (await $.v(C, "fmCreate"))]));
  try {
    L0["result"] = (await $.call(C, "ToStream", [L0["f"], L0["tempbufsize"]]));
  } finally {
    await $.mcall(L0["f"], "Free", []);
  }
  return L0.result;
}, {"params": ["filename", "tempBufSize"], "kind": "function", "ptypes": ["TFileName", "integer"]});
  U.method("TGZRead", "ZStreamStart", async function ZStreamStart(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dest": $.copyArg(p0), "destsize": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["dest", "destsize"]);
  L0["result"] = false;
  await $.set(C, "zscode", (await $.v(C, "Z_STREAM_ERROR")));
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.v(C, "comp")), null)), async () => ($.eq(L0["dest"], null)))), async () => ($.le(L0["destsize"], 0)))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => (await $.v(C, "zs")), async ($t83) => { await $.set(C, "zs", $t83); })])));
  await $.mset((await $.v(C, "zs")), "next_in", (await $.v(C, "comp")));
  await $.mset((await $.v(C, "zs")), "avail_in", (await $.v(C, "complen")));
  await $.mset((await $.v(C, "zs")), "next_out", L0["dest"]);
  await $.mset((await $.v(C, "zs")), "avail_out", L0["destsize"]);
  await $.set(C, "zscode", (await $.call(C, "inflateInit2_", [$.ref(async () => (await $.v(C, "zs")), async ($t84) => { await $.set(C, "zs", $t84); }), (-((await $.v(C, "MAX_WBITS")))), (await $.v(C, "ZLIB_VERSION")), (await $.call(C, "sizeof", [(await $.v(C, "zs"))]))])));
  if ($.truthy($.ge((await $.v(C, "zscode")), 0))) {
    await $.set(C, "zscrc", 0);
    await $.set(C, "zsdest", L0["dest"]);
    await $.set(C, "zssize", L0["destsize"]);
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["dest", "destsize"], "kind": "function", "ptypes": ["pointer", "integer"]});
  U.method("TGZRead", "ZStreamStarted", async function ZStreamStarted(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = $.ne((await $.v(C, "zsdest")), null);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGZRead", "ZStreamNext", async function ZStreamNext(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.v(C, "comp")), null)), async () => ($.eq((await $.v(C, "zsdest")), null)))), async () => $.not(((await $.or_((await $.or_(($.eq((await $.v(C, "zscode")), (await $.v(C, "Z_OK")))), async () => ($.eq((await $.v(C, "zscode")), (await $.v(C, "Z_STREAM_END")))))), async () => ($.eq((await $.v(C, "zscode")), (await $.v(C, "Z_BUF_ERROR")))))))))))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.v(C, "zscode")), (await $.v(C, "Z_STREAM_END"))))) {
    await $.set(C, "zscode", (await $.call(C, "Check", [(await $.call(C, "inflate", [$.ref(async () => (await $.v(C, "zs")), async ($t85) => { await $.set(C, "zs", $t85); }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_OK")), (await $.v(C, "Z_STREAM_END")), (await $.v(C, "Z_BUF_ERROR"))], "ZStreamNext"])));
    L0["result"] = $.sub((await $.v(C, "zssize")), (await $.call(C, "integer", [(await $.mv((await $.v(C, "zs")), "avail_out"))])));
    if ($.truthy($.eq(L0["result"], 0))) {
      return L0.result;
    }
    await $.set(C, "zscrc", (await $.mcall((await $.v(C, "SynZip")), "crc32", [(await $.v(C, "zscrc")), (await $.v(C, "zsdest")), L0["result"]])));
    await $.mset((await $.v(C, "zs")), "next_out", (await $.v(C, "zsdest")));
    await $.mset((await $.v(C, "zs")), "avail_out", (await $.v(C, "zssize")));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGZRead", "ZStreamDone", async function ZStreamDone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy((await $.and_(($.ne((await $.v(C, "comp")), null)), async () => ($.ne((await $.v(C, "zsdest")), null)))))) {
    await $.stmt((await $.call(C, "inflateEnd", [$.ref(async () => (await $.v(C, "zs")), async ($t86) => { await $.set(C, "zs", $t86); })])));
    await $.set(C, "zsdest", null);
    L0["result"] = (await $.and_(($.eq((await $.v(C, "zscrc")), (await $.v(C, "crc32")))), async () => ($.eq((await $.call(C, "cardinal", [(await $.mv((await $.v(C, "zs")), "total_out"))])), (await $.v(C, "uncomplen32"))))));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("GZRead", async function GZRead(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"gz": $.copyArg(p0), "gzlen": $.copyArg(p1), result: '', "gzr": null};
  await $.fixArgs(L0, ["gz", "gzlen"]);
  if ($.truthy((await $.mcall(L0["gzr"], "Init", [L0["gz"], L0["gzlen"]])))) {
    L0["result"] = (await $.mv(L0["gzr"], "ToMem"));
  } else {
    L0["result"] = "";
  }
  return L0.result;
}, {"params": ["gz", "gzLen"], "kind": "function", "ptypes": ["PAnsiChar", "integer"]});
  U.func("GZFile", async function GZFile(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"orig": $.copyArg(p0), "destgz": $.copyArg(p1), "compressionlevel": (p2 === undefined ? 6 : p2), result: false, "gz": null, "s": null, "d": null};
  await $.fixArgs(L0, ["orig", "destgz", "compressionlevel"]);
  try {
    L0["s"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["orig"], (await $.or_((await $.v(C, "fmOpenRead")), async () => (await $.v(C, "fmShareDenyNone"))))]));
    try {
      L0["d"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["destgz"], (await $.v(C, "fmCreate"))]));
      try {
        L0["gz"] = (await $.mcall((await $.v(C, "TSynZipCompressor")), "Create", [L0["d"], L0["compressionlevel"], (await $.v(C, "szcfGZ"))]));
        try {
          await $.stmt((await $.mcall(L0["gz"], "CopyFrom", [L0["s"], 0])));
          L0["result"] = true;
        } finally {
          await $.mcall(L0["gz"], "Free", []);
        }
      } finally {
        await $.mcall(L0["d"], "Free", []);
      }
    } finally {
      await $.mcall(L0["s"], "Free", []);
    }
  } catch ($t87) {
    $.rethrowControl($t87);
    $.handled($t87);
    L0["result"] = false;
  }
  return L0.result;
}, {"params": ["orig", "destgz", "CompressionLevel"], "kind": "function", "ptypes": ["TFileName", "TFileName", "Integer"]});
  U.func("compressBound", async function compressBound(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sourcelen": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["sourcelen"]);
  L0["result"] = $.add($.add($.add(L0["sourcelen"], ($.shr(L0["sourcelen"], 12))), ($.shr(L0["sourcelen"], 14))), 11);
  return L0.result;
}, {"params": ["sourceLen"], "kind": "function", "ptypes": ["cardinal"]});
  U.func("zlibAllocMem", async function zlibAllocMem(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"appdata": $.copyArg(p0), "items": $.copyArg(p1), "size": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["appdata", "items", "size"]);
  await $.stmt((await $.call(C, "Getmem", [L0["result"], $.mul(L0["items"], L0["size"])])));
  return L0.result;
}, {"params": ["AppData", "Items", "Size"], "kind": "function", "ptypes": ["Pointer", "cardinal", "cardinal"]});
  U.func("zlibFreeMem", async function zlibFreeMem(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"appdata": $.copyArg(p0), "block": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["appdata", "block"]);
  await $.stmt((await $.call(C, "FreeMem", [L0["block"]])));
  return L0.result;
}, {"params": ["AppData", "Block"], "kind": "procedure", "ptypes": ["Pointer", "Pointer"]});
  U.func("StreamInit", async function StreamInit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "fillchar", [$.ref(async () => (await L0["stream"].get()), async ($t88) => { await L0["stream"].set($t88); }), (await $.call(C, "sizeof", [(await L0["stream"].get())])), 0])));
  await $.mset((await L0["stream"].get()), "zalloc", (await $.ref_(C, "zlibAllocMem")));
  await $.mset((await L0["stream"].get()), "zfree", (await $.ref_(C, "zlibFreeMem")));
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TZStream"]});
  U.func("DeflateInit", async function DeflateInit(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.asRef(p0), "compressionlevel": $.copyArg(p1), "zlibformat": $.copyArg(p2), result: false, "bits": 0};
  await $.fixArgs(L0, ["compressionlevel", "zlibformat"]);
  if ($.truthy(L0["zlibformat"])) {
    L0["bits"] = (await $.v(C, "MAX_WBITS"));
  } else {
    L0["bits"] = (-((await $.v(C, "MAX_WBITS"))));
  }
  L0["result"] = $.ge((await $.call(C, "deflateInit2_", [$.ref(async () => (await L0["stream"].get()), async ($t89) => { await L0["stream"].set($t89); }), L0["compressionlevel"], (await $.v(C, "Z_DEFLATED")), L0["bits"], (await $.v(C, "DEF_MEM_LEVEL")), (await $.v(C, "Z_DEFAULT_STRATEGY")), (await $.v(C, "ZLIB_VERSION")), (await $.call(C, "sizeof", [(await L0["stream"].get())]))])), 0);
  return L0.result;
}, {"params": ["Stream", "CompressionLevel", "ZlibFormat"], "kind": "function", "ptypes": ["TZStream", "integer", "Boolean"]});
  U.func("ZLibError", async function ZLibError(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"code": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["code"]);
  { const $t90 = L0["code"];
    if ($.eq($t90, (await $.v(C, "Z_ERRNO")))) {
      L0["result"] = "Z_ERRNO";
    }
    else if ($.eq($t90, (await $.v(C, "Z_STREAM_ERROR")))) {
      L0["result"] = "Z_STREAM_ERROR";
    }
    else if ($.eq($t90, (await $.v(C, "Z_DATA_ERROR")))) {
      L0["result"] = "Z_DATA_ERROR";
    }
    else if ($.eq($t90, (await $.v(C, "Z_MEM_ERROR")))) {
      L0["result"] = "Z_MEM_ERROR";
    }
    else if ($.eq($t90, (await $.v(C, "Z_BUF_ERROR")))) {
      L0["result"] = "Z_BUF_ERROR";
    }
    else if ($.eq($t90, (await $.v(C, "Z_VERSION_ERROR")))) {
      L0["result"] = "Z_VERSION_ERROR";
    }
    else {
      await $.stmt((await $.call(C, "str", [L0["code"], $.ref(async () => L0["result"], async ($t91) => { L0["result"] = $t91; })])));
    }
  }
  return L0.result;
}, {"params": ["Code"], "kind": "function", "ptypes": ["integer"]});
  U.func("Check", async function Check(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"code": $.copyArg(p0), "validcodes": $.copyArg(p1), "context": $.copyArg(p2), result: 0, "i": 0};
  await $.fixArgs(L0, ["code", "validcodes", "context"]);
  if ($.truthy($.eq(L0["code"], (await $.v(C, "Z_MEM_ERROR"))))) {
    await $.stmt($.call(C, "OutOfMemoryError", []));
  }
  L0["result"] = L0["code"];
  { const $t92 = (await $.call(C, "High", [L0["validcodes"]]));
    L0["i"] = (await $.call(C, "Low", [L0["validcodes"]]));
    let $t93 = true;
    for (;;) {
      if (!$t93) { L0["i"] = $.succ(L0["i"], 1); }
      $t93 = false;
      if (!($.ord(L0["i"]) <= $.ord($t92))) break;
      if ($.truthy($.eq((await $.idx(L0["validcodes"], [L0["i"]])), L0["code"]))) {
        return L0.result;
      }
      await $.tick();
    }
  }
  throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "CreateFmt", ["Error %s during %s process", [(await $.call(C, "ZLibError", [L0["code"]])), L0["context"]]])));
  return L0.result;
}, {"params": ["Code", "ValidCodes", "Context"], "kind": "function", "ptypes": ["Integer", null, "String"]});
  U.func("CompressString", async function CompressString() { return $.notPorted("CompressString", "cannot assign to call"); }, {"params": ["data", "failIfGrow", "CompressionLevel"], "kind": "function", "ptypes": ["ZipString", "boolean", "integer"], "error": "cannot assign to call", "src": "function CompressString(const data: ZipString; failIfGrow: boolean = false;\n  CompressionLevel: integer=6) : ZipString;\nvar i1 : integer;\nbegin\n  result := '';\n  SetLength(result, 12 + (Int64(length(data)) * 11) div 10 + 12);\n  pInt64(result)^ := length(data);\n  PCardinalArray(result)^[2] := adler32(0, pointer(data), length(data));\n  i1 := CompressMem(pointer(data), @PByteArray(result)[12], length(data),\n    length(result) - 12, CompressionLevel);\n  if (i1 > 0) and ( (12 + i1 < length(data)) or not failIfGrow ) then\n       SetLength(result, 12 + i1)\n  else result := '';\nend;"});
  U.func("UncompressString", async function UncompressString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["data"]);
  L0["result"] = "";
  if ($.truthy($.gt((await $.call(C, "Length", [L0["data"]])), 12))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t95) => { L0["result"] = $t95; }), (await $.call(C, "PCardinal", [L0["data"]]))])));
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t96) => { L0["result"] = $t96; }), (await $.call(C, "UncompressMem", [(await $.idx((await $.call(C, "PByteArray", [L0["data"]])), [12])), (await $.call(C, "pointer", [L0["result"]])), $.sub((await $.call(C, "length", [L0["data"]])), 12), (await $.call(C, "length", [L0["result"]]))]))])));
    if ($.truthy((await $.and_(($.ne(L0["result"], "")), async () => ($.ne(((await $.call(C, "Adler32", [0, (await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "length", [L0["result"]]))]))), (await $.idx((await $.call(C, "PCardinalArray", [L0["data"]])), [2])))))))) {
      L0["result"] = "";
    }
  }
  return L0.result;
}, {"params": ["data"], "kind": "function", "ptypes": ["ZipString"]});
  U.func("CompressMem", async function CompressMem(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"src": $.copyArg(p0), "dst": $.copyArg(p1), "srclen": $.copyArg(p2), "dstlen": $.copyArg(p3), "compressionlevel": (p4 === undefined ? 6 : p4), "zlibformat": (p5 === undefined ? false : p5), result: 0, "strm": $.rec("tzstream")};
  await $.fixArgs(L0, ["src", "dst", "srclen", "dstlen", "compressionlevel", "zlibformat"]);
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => L0["strm"], async ($t97) => { L0["strm"] = $t97; })])));
  await $.mset(L0["strm"], "next_in", L0["src"]);
  await $.mset(L0["strm"], "avail_in", L0["srclen"]);
  await $.mset(L0["strm"], "next_out", L0["dst"]);
  await $.mset(L0["strm"], "avail_out", L0["dstlen"]);
  if ($.truthy((await $.call(C, "DeflateInit", [$.ref(async () => L0["strm"], async ($t98) => { L0["strm"] = $t98; }), L0["compressionlevel"], L0["zlibformat"]])))) {
    try {
      await $.stmt((await $.call(C, "Check", [(await $.call(C, "deflate", [$.ref(async () => L0["strm"], async ($t99) => { L0["strm"] = $t99; }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_STREAM_END")), (await $.v(C, "Z_OK"))], "CompressMem"])));
    } finally {
      await $.stmt((await $.call(C, "deflateEnd", [$.ref(async () => L0["strm"], async ($t100) => { L0["strm"] = $t100; })])));
    }
  }
  L0["result"] = (await $.mv(L0["strm"], "total_out"));
  return L0.result;
}, {"params": ["src", "dst", "srcLen", "dstLen", "CompressionLevel", "ZlibFormat"], "kind": "function", "ptypes": ["pointer", "pointer", "integer", "integer", "integer", "Boolean"]});
  U.func("InitTempBuf", async function InitTempBuf(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"tempbuf": $.asRef(p0), "tempbufsize": $.asRef(p1), result: undefined};
  if ($.truthy($.le((await L0["tempbufsize"].get()), (await $.call(C, "sizeof", [(await $.mv((await L0["tempbuf"].get()), "buf128k"))]))))) {
    await L0["tempbufsize"].set((await $.call(C, "sizeof", [(await $.mv((await L0["tempbuf"].get()), "buf128k"))])));
    await $.mset((await L0["tempbuf"].get()), "buf", (await $.mref((await L0["tempbuf"].get()), "buf128k")));
  } else {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.mv((await L0["tempbuf"].get()), "temp")), async ($t101) => { await $.mset((await L0["tempbuf"].get()), "temp", $t101); }), (await L0["tempbufsize"].get())])));
    await $.mset((await L0["tempbuf"].get()), "buf", (await $.call(C, "pointer", [(await $.mv((await L0["tempbuf"].get()), "temp"))])));
  }
  return L0.result;
}, {"params": ["tempbuf", "TempBufSize"], "kind": "procedure", "ptypes": ["TTempBuf", "integer"]});
  U.func("CompressStream", async function CompressStream(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"src": $.copyArg(p0), "srclen": $.copyArg(p1), "tmp": $.copyArg(p2), "compressionlevel": $.copyArg(p3), "zlibformat": $.copyArg(p4), "tempbufsize": $.copyArg(p5), result: 0, "strm": $.rec("tzstream"), "code": 0, "temp": $.rec("ttempbuf")};
  await $.fixArgs(L0, ["src", "srclen", "tmp", "compressionlevel", "zlibformat", "tempbufsize"]);
  L0["flushbuf"] = $.fn(async function FlushBuf() {
  const L1 = {result: undefined, "count": 0};
  L1["count"] = $.sub(L0["tempbufsize"], (await $.call(C, "integer", [(await $.mv(L0["strm"], "avail_out"))])));
  if ($.truthy($.eq(L1["count"], 0))) {
    return L1.result;
  }
  await $.stmt((await $.mcall(L0["tmp"], "WriteBuffer", [(await $.mv(L0["temp"], "buf")), L1["count"]])));
  await $.mset(L0["strm"], "next_out", (await $.mv(L0["temp"], "buf")));
  await $.mset(L0["strm"], "avail_out", L0["tempbufsize"]);
  return L1.result;
});
  await $.stmt((await $.call(C, "InitTempBuf", [$.ref(async () => L0["temp"], async ($t102) => { L0["temp"] = $t102; }), $.ref(async () => L0["tempbufsize"], async ($t103) => { L0["tempbufsize"] = $t103; })])));
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => L0["strm"], async ($t104) => { L0["strm"] = $t104; })])));
  await $.mset(L0["strm"], "next_in", L0["src"]);
  await $.mset(L0["strm"], "avail_in", L0["srclen"]);
  await $.mset(L0["strm"], "next_out", (await $.mv(L0["temp"], "buf")));
  await $.mset(L0["strm"], "avail_out", L0["tempbufsize"]);
  if ($.truthy((await $.call(C, "DeflateInit", [$.ref(async () => L0["strm"], async ($t105) => { L0["strm"] = $t105; }), L0["compressionlevel"], L0["zlibformat"]])))) {
    try {
      do {
        L0["code"] = (await $.call(C, "Check", [(await $.call(C, "deflate", [$.ref(async () => L0["strm"], async ($t106) => { L0["strm"] = $t106; }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_OK")), (await $.v(C, "Z_STREAM_END")), (await $.v(C, "Z_BUF_ERROR"))], "CompressStream"]));
        await $.stmt($.callv(L0["flushbuf"], []));
        await $.tick();
      } while (!$.truthy($.eq(L0["code"], (await $.v(C, "Z_STREAM_END")))));
      await $.stmt($.callv(L0["flushbuf"], []));
    } finally {
      await $.stmt((await $.call(C, "deflateEnd", [$.ref(async () => L0["strm"], async ($t107) => { L0["strm"] = $t107; })])));
    }
  }
  L0["result"] = (await $.mv(L0["strm"], "total_out"));
  return L0.result;
}, {"params": ["src", "srcLen", "tmp", "CompressionLevel", "ZlibFormat", "TempBufSize"], "kind": "function", "ptypes": ["pointer", "integer", "TStream", "integer", "Boolean", "integer"]});
  U.func("UnCompressMem", async function UnCompressMem(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"src": $.copyArg(p0), "dst": $.copyArg(p1), "srclen": $.copyArg(p2), "dstlen": $.copyArg(p3), "zlibformat": $.copyArg(p4), result: 0, "strm": $.rec("tzstream"), "bits": 0};
  await $.fixArgs(L0, ["src", "dst", "srclen", "dstlen", "zlibformat"]);
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => L0["strm"], async ($t108) => { L0["strm"] = $t108; })])));
  await $.mset(L0["strm"], "next_in", L0["src"]);
  await $.mset(L0["strm"], "avail_in", L0["srclen"]);
  await $.mset(L0["strm"], "next_out", L0["dst"]);
  await $.mset(L0["strm"], "avail_out", L0["dstlen"]);
  if ($.truthy(L0["zlibformat"])) {
    L0["bits"] = (await $.v(C, "MAX_WBITS"));
  } else {
    L0["bits"] = (-((await $.v(C, "MAX_WBITS"))));
  }
  if ($.truthy($.ge((await $.call(C, "inflateInit2_", [$.ref(async () => L0["strm"], async ($t109) => { L0["strm"] = $t109; }), L0["bits"], (await $.v(C, "ZLIB_VERSION")), (await $.call(C, "sizeof", [L0["strm"]]))])), 0))) {
    try {
      await $.stmt((await $.call(C, "Check", [(await $.call(C, "inflate", [$.ref(async () => L0["strm"], async ($t110) => { L0["strm"] = $t110; }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_OK")), (await $.v(C, "Z_STREAM_END"))], "UnCompressMem"])));
    } finally {
      await $.stmt((await $.call(C, "inflateEnd", [$.ref(async () => L0["strm"], async ($t111) => { L0["strm"] = $t111; })])));
    }
  }
  L0["result"] = (await $.mv(L0["strm"], "total_out"));
  return L0.result;
}, {"params": ["src", "dst", "srcLen", "dstLen", "ZlibFormat"], "kind": "function", "ptypes": ["pointer", "pointer", "integer", "integer", "Boolean"]});
  U.func("UnCompressStream", async function UnCompressStream(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"src": $.copyArg(p0), "srclen": $.copyArg(p1), "tmp": $.copyArg(p2), "checkcrc": $.copyArg(p3), "zlibformat": $.copyArg(p4), "tempbufsize": $.copyArg(p5), result: 0, "strm": $.rec("tzstream"), "code": 0, "bits": 0, "temp": $.rec("ttempbuf")};
  await $.fixArgs(L0, ["src", "srclen", "tmp", "checkcrc", "zlibformat", "tempbufsize"]);
  L0["flushbuf"] = $.fn(async function FlushBuf() {
  const L1 = {result: undefined, "count": 0};
  L1["count"] = $.sub(L0["tempbufsize"], (await $.call(C, "integer", [(await $.mv(L0["strm"], "avail_out"))])));
  if ($.truthy($.eq(L1["count"], 0))) {
    return L1.result;
  }
  if ($.truthy($.ne(L0["checkcrc"], null))) {
    L0["checkcrc"] = (await $.mcall((await $.v(C, "SynZip")), "crc32", [L0["checkcrc"], (await $.mv(L0["temp"], "buf")), L1["count"]]));
  }
  if ($.truthy($.ne(L0["tmp"], null))) {
    await $.stmt((await $.mcall(L0["tmp"], "WriteBuffer", [(await $.mv(L0["temp"], "buf")), L1["count"]])));
  }
  await $.mset(L0["strm"], "next_out", (await $.mv(L0["temp"], "buf")));
  await $.mset(L0["strm"], "avail_out", L0["tempbufsize"]);
  return L1.result;
});
  await $.stmt((await $.call(C, "InitTempBuf", [$.ref(async () => L0["temp"], async ($t112) => { L0["temp"] = $t112; }), $.ref(async () => L0["tempbufsize"], async ($t113) => { L0["tempbufsize"] = $t113; })])));
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => L0["strm"], async ($t114) => { L0["strm"] = $t114; })])));
  await $.mset(L0["strm"], "next_in", L0["src"]);
  await $.mset(L0["strm"], "avail_in", L0["srclen"]);
  await $.mset(L0["strm"], "next_out", (await $.mv(L0["temp"], "buf")));
  await $.mset(L0["strm"], "avail_out", L0["tempbufsize"]);
  if ($.truthy($.ne(L0["checkcrc"], null))) {
    L0["checkcrc"] = 0;
  }
  if ($.truthy(L0["zlibformat"])) {
    L0["bits"] = (await $.v(C, "MAX_WBITS"));
  } else {
    L0["bits"] = (-((await $.v(C, "MAX_WBITS"))));
  }
  if ($.truthy($.ge((await $.call(C, "inflateInit2_", [$.ref(async () => L0["strm"], async ($t115) => { L0["strm"] = $t115; }), L0["bits"], (await $.v(C, "ZLIB_VERSION")), (await $.call(C, "sizeof", [L0["strm"]]))])), 0))) {
    try {
      do {
        L0["code"] = (await $.call(C, "Check", [(await $.call(C, "inflate", [$.ref(async () => L0["strm"], async ($t116) => { L0["strm"] = $t116; }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_OK")), (await $.v(C, "Z_STREAM_END")), (await $.v(C, "Z_BUF_ERROR"))], "UnCompressStream"]));
        if ($.truthy((await $.and_(($.eq(L0["code"], (await $.v(C, "Z_BUF_ERROR")))), async () => ($.eq(L0["tempbufsize"], (await $.call(C, "integer", [(await $.mv(L0["strm"], "avail_out"))])))))))) {
          await $.stmt((await $.call(C, "Check", [L0["code"], [], "UnCompressStream"])));
        }
        await $.stmt($.callv(L0["flushbuf"], []));
        await $.tick();
      } while (!$.truthy($.eq(L0["code"], (await $.v(C, "Z_STREAM_END")))));
      await $.stmt($.callv(L0["flushbuf"], []));
    } finally {
      await $.stmt((await $.call(C, "inflateEnd", [$.ref(async () => L0["strm"], async ($t117) => { L0["strm"] = $t117; })])));
    }
  }
  L0["result"] = (await $.mv(L0["strm"], "total_out"));
  return L0.result;
}, {"params": ["src", "srcLen", "tmp", "checkCRC", "ZlibFormat", "TempBufSize"], "kind": "function", "ptypes": ["pointer", "integer", "TStream", "PCardinal", "Boolean", "integer"]});
  U.func("UnCompressZipString", async function UnCompressZipString(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"src": $.copyArg(p0), "srclen": $.copyArg(p1), "data": $.asRef(p2), "checkcrc": $.copyArg(p3), "zlibformat": $.copyArg(p4), "tempbufsize": $.copyArg(p5), result: 0, "strm": $.rec("tzstream"), "len": 0, "code": 0, "bits": 0, "temp": $.rec("ttempbuf")};
  await $.fixArgs(L0, ["src", "srclen", "checkcrc", "zlibformat", "tempbufsize"]);
  L0["flushbuf"] = $.fn(async function FlushBuf() {
  const L1 = {result: undefined, "count": 0};
  L1["count"] = $.sub(L0["tempbufsize"], (await $.call(C, "integer", [(await $.mv(L0["strm"], "avail_out"))])));
  if ($.truthy($.eq(L1["count"], 0))) {
    return L1.result;
  }
  if ($.truthy($.ne(L0["checkcrc"], null))) {
    L0["checkcrc"] = (await $.mcall((await $.v(C, "SynZip")), "crc32", [L0["checkcrc"], (await $.mv(L0["temp"], "buf")), L1["count"]]));
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await L0["data"].get()), async ($t118) => { await L0["data"].set($t118); }), $.add(L0["len"], L1["count"])])));
  await $.stmt((await $.call(C, "Move", [(await $.mv(L0["temp"], "buf")), $.ref(async () => (await $.idx((await $.call(C, "PByteArray", [(await L0["data"].get())])), [L0["len"]])), async ($t119) => { await $.iset((await $.call(C, "PByteArray", [(await L0["data"].get())])), [L0["len"]], $t119); }), L1["count"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["len"], async ($t120) => { L0["len"] = $t120; }), L1["count"]])));
  await $.mset(L0["strm"], "next_out", (await $.mv(L0["temp"], "buf")));
  await $.mset(L0["strm"], "avail_out", L0["tempbufsize"]);
  return L1.result;
});
  await $.stmt((await $.call(C, "InitTempBuf", [$.ref(async () => L0["temp"], async ($t121) => { L0["temp"] = $t121; }), $.ref(async () => L0["tempbufsize"], async ($t122) => { L0["tempbufsize"] = $t122; })])));
  L0["len"] = 0;
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => L0["strm"], async ($t123) => { L0["strm"] = $t123; })])));
  await $.mset(L0["strm"], "next_in", L0["src"]);
  await $.mset(L0["strm"], "avail_in", L0["srclen"]);
  await $.mset(L0["strm"], "next_out", (await $.mv(L0["temp"], "buf")));
  await $.mset(L0["strm"], "avail_out", L0["tempbufsize"]);
  if ($.truthy($.ne(L0["checkcrc"], null))) {
    L0["checkcrc"] = 0;
  }
  if ($.truthy(L0["zlibformat"])) {
    L0["bits"] = (await $.v(C, "MAX_WBITS"));
  } else {
    L0["bits"] = (-((await $.v(C, "MAX_WBITS"))));
  }
  if ($.truthy($.ge((await $.call(C, "inflateInit2_", [$.ref(async () => L0["strm"], async ($t124) => { L0["strm"] = $t124; }), L0["bits"], (await $.v(C, "ZLIB_VERSION")), (await $.call(C, "sizeof", [L0["strm"]]))])), 0))) {
    try {
      do {
        L0["code"] = (await $.call(C, "Check", [(await $.call(C, "inflate", [$.ref(async () => L0["strm"], async ($t125) => { L0["strm"] = $t125; }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_OK")), (await $.v(C, "Z_STREAM_END")), (await $.v(C, "Z_BUF_ERROR"))], "UnCompressZipString"]));
        await $.stmt($.callv(L0["flushbuf"], []));
        await $.tick();
      } while (!$.truthy($.eq(L0["code"], (await $.v(C, "Z_STREAM_END")))));
      await $.stmt($.callv(L0["flushbuf"], []));
    } finally {
      await $.stmt((await $.call(C, "inflateEnd", [$.ref(async () => L0["strm"], async ($t126) => { L0["strm"] = $t126; })])));
    }
  }
  L0["result"] = (await $.mv(L0["strm"], "total_out"));
  return L0.result;
}, {"params": ["src", "srcLen", "data", "checkCRC", "ZlibFormat", "TempBufSize"], "kind": "function", "ptypes": ["pointer", "integer", "ZipString", "PCardinal", "Boolean", "integer"]});
  U.func("CompressGZip", async function CompressGZip() { return $.notPorted("CompressGZip", "cannot assign to call"); }, {"params": ["DataRawByteString", "Compress"], "kind": "function", "ptypes": [null, "boolean"], "error": "cannot assign to call", "src": "function CompressGZip(var DataRawByteString; Compress: boolean): AnsiString;\nvar L: integer;\n    P: PAnsiChar;\n    Data: ZipString absolute DataRawByteString;\nbegin\n  L := length(Data);\n  if Compress then begin\n    SetString(result,nil,L+128+L shr 3); \n    P := pointer(result);\n    move(GZHEAD,P^,GZHEAD_SIZE);\n    inc(P,GZHEAD_SIZE);\n    inc(P,CompressMem(pointer(Data),P,L,length(result)-(GZHEAD_SIZE+8),HTTP_LEVEL));\n    PCardinal(P)^ := SynZip.crc32(0,pointer(Data),L);\n    inc(P,4);\n    PCardinal(P)^ := L;\n    inc(P,4);\n    SetString(Data,PAnsiChar(pointer(result)),P-pointer(result));\n  end else\n    Data := gzread(pointer(Data),length(Data));\n  result := 'gzip';\nend;"});
  U.func("CompressInternal", async function CompressInternal(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.asRef(p0), "compress": $.copyArg(p1), "zlib": $.copyArg(p2), result: undefined, "tmp": '', "datalen": 0};
  await $.fixArgs(L0, ["compress", "zlib"]);
  L0["tmp"] = (await L0["data"].get());
  L0["datalen"] = (await $.call(C, "length", [(await L0["data"].get())]));
  if ($.truthy(L0["compress"])) {
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => (await L0["data"].get()), async ($t131) => { await L0["data"].set($t131); }), null, $.add($.add(L0["datalen"], 256), $.shr(L0["datalen"], 3))])));
    L0["datalen"] = (await $.call(C, "CompressMem", [(await $.call(C, "pointer", [L0["tmp"]])), (await $.call(C, "pointer", [(await L0["data"].get())])), L0["datalen"], (await $.call(C, "length", [(await L0["data"].get())])), (await $.v(C, "HTTP_LEVEL")), L0["zlib"]]));
    if ($.truthy($.le(L0["datalen"], 0))) {
      await L0["data"].set("");
    } else {
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await L0["data"].get()), async ($t132) => { await L0["data"].set($t132); }), L0["datalen"]])));
    }
  } else {
    await $.stmt((await $.call(C, "UnCompressZipString", [(await $.call(C, "pointer", [L0["tmp"]])), L0["datalen"], $.ref(async () => (await L0["data"].get()), async ($t133) => { await L0["data"].set($t133); }), null, L0["zlib"], 0])));
  }
  return L0.result;
}, {"params": ["Data", "Compress", "ZLib"], "kind": "procedure", "ptypes": ["ZipString", "boolean", "boolean"]});
  U.func("CompressDeflate", async function CompressDeflate(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datarawbytestring": $.asRef(p0), "compress": $.copyArg(p1), result: '', "data": ''};
  await $.fixArgs(L0, ["compress"]);
  await $.stmt((await $.call(C, "CompressInternal", [$.ref(async () => L0["data"], async ($t134) => { L0["data"] = $t134; }), L0["compress"], false])));
  L0["result"] = "deflate";
  return L0.result;
}, {"params": ["DataRawByteString", "Compress"], "kind": "function", "ptypes": [null, "boolean"]});
  U.func("CompressZLib", async function CompressZLib(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datarawbytestring": $.asRef(p0), "compress": $.copyArg(p1), result: '', "data": ''};
  await $.fixArgs(L0, ["compress"]);
  await $.stmt((await $.call(C, "CompressInternal", [$.ref(async () => L0["data"], async ($t135) => { L0["data"] = $t135; }), L0["compress"], true])));
  L0["result"] = "zlib";
  return L0.result;
}, {"params": ["DataRawByteString", "Compress"], "kind": "function", "ptypes": [null, "boolean"]});
  U.method("TLocalFileHeader", "LocalData", async function LocalData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = Self;
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["result"], async ($t136) => { L0["result"] = $t136; }), $.add($.add((await $.call(C, "sizeof", [(await $.v(C, "TLocalFileHeader"))])), (await $.mv((await $.v(C, "fileInfo")), "extraLen"))), (await $.mv((await $.v(C, "fileInfo")), "nameLen")))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFileHeader", "IsFolder", async function IsFolder(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = $.ne((await $.and_((await $.v(C, "extFileAttr")), async () => 16)), 0);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFileHeader", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "fillchar", [$.ref(async () => Self, async ($t137) => { await $.set(C, "self", $t137); }), (await $.call(C, "sizeof", [(await $.v(C, "TFileHeader"))])), 0])));
  await $.set(C, "signature", (await $.v(C, "ENTRY_SIGNATURE_INC")));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "signature")), async ($t138) => { await $.set(C, "signature", $t138); })])));
  await $.set(C, "madeBy", 20);
  await $.set(C, "extFileAttr", 160);
  await $.mset((await $.v(C, "fileInfo")), "neededVersion", 20);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFileInfo", "AlgoID", async function AlgoID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.and_(($.shr((await $.v(C, "flags")), 7)), async () => 15));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFileInfo", "SameAs", async function SameAs(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ainfo": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["ainfo"]);
  if ($.truthy((await $.or_(($.eq((await $.v(C, "zzipSize")), 0)), async () => ($.eq((await $.mv(L0["ainfo"], "zzipSize")), 0)))))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "Create", ["SameAs() with crc+sizes in \"data descriptor\""])));
  }
  L0["result"] = (await $.and_((await $.and_((await $.and_((await $.and_(($.eq((await $.v(C, "zzipMethod")), (await $.mv(L0["ainfo"], "zzipMethod")))), async () => ($.eq((await $.v(C, "flags")), (await $.mv(L0["ainfo"], "flags")))))), async () => ($.eq((await $.v(C, "zzipSize")), (await $.mv(L0["ainfo"], "zzipSize")))))), async () => ($.eq((await $.v(C, "zfullSize")), (await $.mv(L0["ainfo"], "zfullSize")))))), async () => ($.eq((await $.v(C, "zcrc32")), (await $.mv(L0["ainfo"], "zcrc32"))))));
  return L0.result;
}, {"params": ["aInfo"], "kind": "function", "ptypes": ["PFileInfo"]});
  U.method("TFileInfo", "SetAlgoID", async function SetAlgoID(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"algorithm": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["algorithm"]);
  await $.set(C, "zzipMethod", (await $.v(C, "Z_STORED")));
  await $.set(C, "flags", (await $.or_(((await $.and_((await $.v(C, "flags")), async () => 63615))), async () => $.shl(((await $.and_(L0["algorithm"], async () => 15))), 7))));
  return L0.result;
}, {"params": ["Algorithm"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TFileInfo", "GetUTF8FileName", async function GetUTF8FileName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = $.ne(((await $.and_((await $.v(C, "flags")), async () => ($.shl(1, 11))))), 0);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFileInfo", "ExtraUnicodeFileNamePos", async function ExtraUnicodeFileNamePos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "pextrastart": null, "p": null};
  L0["result"] = null;
  if ($.truthy($.eq((await $.v(C, "extraLen")), 0))) {
    return L0.result;
  }
  L0["pextrastart"] = $.add($.add((await $.call(C, "PAnsiChar", [(await $.call(C, "pointer", [Self]))])), (await $.call(C, "sizeof", [Self]))), (await $.v(C, "NameLen")));
  L0["p"] = L0["pextrastart"];
  do {
    if ($.truthy($.eq((await $.mv((await $.call(C, "PFileInfoExtra", [L0["p"]])), "id")), (await $.v(C, "FileInfoExtra_UnicodePathId"))))) {
      L0["result"] = L0["p"];
      break;
    } else {
      if ($.truthy($.lt($.sub($.add($.add(L0["p"], $.mul((await $.call(C, "sizeof", [(await $.v(C, "word"))])), 2)), (await $.mv((await $.call(C, "PFileInfoExtra", [L0["p"]])), "size"))), L0["pextrastart"]), (await $.v(C, "extraLen"))))) {
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["p"], async ($t139) => { L0["p"] = $t139; }), $.add((await $.mv((await $.call(C, "PFileInfoExtra", [L0["p"]])), "size")), $.mul((await $.call(C, "sizeof", [(await $.v(C, "word"))])), 2))])));
      } else {
        break;
      }
    }
    await $.tick();
  } while (!$.truthy(false));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFileInfo", "SetUTF8FileName", async function SetUTF8FileName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "flags", (await $.or_((await $.v(C, "flags")), async () => ($.shl(1, 11)))));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFileInfo", "UnSetUTF8FileName", async function UnSetUTF8FileName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "flags", (await $.and_((await $.v(C, "flags")), async () => $.not(($.shl(1, 11))))));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CRC32string", async function CRC32string(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"astring": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["astring"]);
  L0["result"] = (await $.call(C, "length", [L0["astring"]]));
  if ($.truthy($.ne(L0["result"], 0))) {
    L0["result"] = (await $.mcall((await $.v(C, "SynZip")), "crc32", [0, (await $.call(C, "pointer", [L0["astring"]])), L0["result"]]));
  }
  return L0.result;
}, {"params": ["aString"], "kind": "function", "ptypes": ["ZipString"]});
  U.method("TSynZipCompressor", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"outstream": $.copyArg(p0), "compressionlevel": $.copyArg(p1), "format": (p2 === undefined ? (await $.v(C, "szcfRaw")) : p2), result: undefined};
  await $.fixArgs(L0, ["outstream", "compressionlevel", "format"]);
  await $.set(C, "fDestStream", L0["outstream"]);
  await $.set(C, "fGZFormat", ($.eq(L0["format"], (await $.v(C, "szcfGZ")))));
  if ($.truthy((await $.v(C, "fGZFormat")))) {
    await $.stmt((await $.mcall((await $.v(C, "fDestStream")), "WriteBuffer", [(await $.v(C, "GZHEAD")), (await $.v(C, "GZHEAD_SIZE"))])));
  }
  await $.stmt((await $.call(C, "StreamInit", [$.ref(async () => (await $.v(C, "FStrm")), async ($t140) => { await $.set(C, "FStrm", $t140); })])));
  await $.mset((await $.v(C, "FStrm")), "next_out", (await $.ref_(C, "FBufferOut")));
  await $.mset((await $.v(C, "FStrm")), "avail_out", (await $.call(C, "SizeOf", [(await $.v(C, "FBufferOut"))])));
  await $.set(C, "fInitialized", (await $.call(C, "DeflateInit", [$.ref(async () => (await $.v(C, "FStrm")), async ($t141) => { await $.set(C, "FStrm", $t141); }), L0["compressionlevel"], $.eq(L0["format"], (await $.v(C, "szcfZip")))])));
  return L0.result;
}, {"params": ["outStream", "CompressionLevel", "Format"], "kind": "constructor", "ptypes": ["TStream", "Integer", "TSynZipCompressorFormat"]});
  U.method("TSynZipCompressor", "Flush", async function Flush(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "FInitialized")))) {
    while ($.truthy((await $.and_(($.ne((await $.call(C, "Check", [(await $.call(C, "deflate", [$.ref(async () => (await $.v(C, "FStrm")), async ($t142) => { await $.set(C, "FStrm", $t142); }), (await $.v(C, "Z_FINISH"))])), [(await $.v(C, "Z_OK")), (await $.v(C, "Z_STREAM_END"))], "Flush"])), (await $.v(C, "Z_STREAM_END")))), async () => ($.eq((await $.mv((await $.v(C, "FStrm")), "avail_out")), 0)))))) {
      await $.stmt($.call(C, "FlushBufferOut", []));
      await $.tick();
    }
    await $.stmt($.call(C, "FlushBufferOut", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSynZipCompressor", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "FInitialized")))) {
    await $.stmt($.call(C, "Flush", []));
    await $.mset((await $.v(C, "FStrm")), "next_out", null);
    await $.mset((await $.v(C, "FStrm")), "avail_out", 0);
    await $.stmt((await $.call(C, "deflateEnd", [$.ref(async () => (await $.v(C, "FStrm")), async ($t143) => { await $.set(C, "FStrm", $t143); })])));
  }
  if ($.truthy((await $.v(C, "fGZFormat")))) {
    await $.stmt((await $.mcall((await $.v(C, "fDestStream")), "WriteBuffer", [(await $.v(C, "fCRC")), 4])));
    await $.stmt((await $.mcall((await $.v(C, "fDestStream")), "WriteBuffer", [(await $.mv((await $.v(C, "FStrm")), "total_in")), 4])));
  }
  await $.inherited(Self, "TSynZipCompressor", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TSynZipCompressor", "SizeIn", async function SizeIn(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "FStrm")), "total_in"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSynZipCompressor", "SizeOut", async function SizeOut(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "FStrm")), "total_out"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSynZipCompressor", "FlushBufferOut", async function FlushBufferOut(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  if ($.truthy($.not((await $.v(C, "FInitialized"))))) {
    return L0.result;
  }
  if ($.truthy($.lt((await $.mv((await $.v(C, "FStrm")), "avail_out")), (await $.call(C, "SizeOf", [(await $.v(C, "FBufferOut"))]))))) {
    L0["result"] = $.sub((await $.call(C, "SizeOf", [(await $.v(C, "FBufferOut"))])), (await $.mv((await $.v(C, "FStrm")), "avail_out")));
    await $.stmt((await $.mcall((await $.v(C, "FDestStream")), "WriteBuffer", [(await $.v(C, "FBufferOut")), L0["result"]])));
    await $.mset((await $.v(C, "FStrm")), "next_out", (await $.ref_(C, "FBufferOut")));
    await $.mset((await $.v(C, "FStrm")), "avail_out", (await $.call(C, "SizeOf", [(await $.v(C, "FBufferOut"))])));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSynZipCompressor", "Read", async function Read(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.asRef(p0), "count": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["count"]);
  await $.stmt((await $.call(C, "assert", [false])));
  L0["result"] = 0;
  return L0.result;
}, {"params": ["Buffer", "Count"], "kind": "function", "ptypes": [null, "Integer"]});
  U.method("TSynZipCompressor", "Seek", async function Seek(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"offset": $.copyArg(p0), "origin": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["offset", "origin"]);
  if ($.truthy($.not((await $.v(C, "FInitialized"))))) {
    L0["result"] = 0;
  } else {
    if ($.truthy((await $.and_(($.eq(L0["offset"], 0)), async () => ($.eq(L0["origin"], (await $.v(C, "soFromCurrent")))))))) {
      L0["result"] = (await $.mv((await $.v(C, "FStrm")), "total_in"));
    } else {
      L0["result"] = 0;
      await $.stmt((await $.call(C, "assert", [(await $.and_((await $.and_(($.eq(L0["offset"], 0)), async () => ($.eq(L0["origin"], (await $.v(C, "soFromBeginning")))))), async () => ($.eq((await $.mv((await $.v(C, "FStrm")), "total_in")), 0))))])));
    }
  }
  return L0.result;
}, {"params": ["Offset", "Origin"], "kind": "function", "ptypes": ["Integer", "Word"]});
  U.method("TSynZipCompressor", "Write", async function Write(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "count": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["buffer", "count"]);
  if ($.truthy((await $.or_((await $.or_(($.eq(Self, null)), async () => $.not((await $.v(C, "FInitialized"))))), async () => ($.le(L0["count"], 0)))))) {
    L0["result"] = 0;
    return L0.result;
  }
  L0["result"] = L0["count"];
  await $.set(C, "fCRC", (await $.mcall((await $.v(C, "SynZip")), "crc32", [(await $.v(C, "fCRC")), L0["buffer"], L0["count"]])));
  await $.mset((await $.v(C, "FStrm")), "next_in", (await $.call(C, "pointer", [L0["buffer"]])));
  await $.mset((await $.v(C, "FStrm")), "avail_in", L0["count"]);
  while ($.truthy($.gt((await $.mv((await $.v(C, "FStrm")), "avail_in")), 0))) {
    if ($.truthy($.ne((await $.call(C, "Check", [(await $.call(C, "deflate", [$.ref(async () => (await $.v(C, "FStrm")), async ($t144) => { await $.set(C, "FStrm", $t144); }), (await $.v(C, "Z_NO_FLUSH"))])), [(await $.v(C, "Z_OK"))], "Write"])), (await $.v(C, "Z_OK"))))) {
      throw $.raise((await $.mcall((await $.v(C, "ESynZipException")), "Create", ["ZCompress"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "FStrm")), "avail_out")), 0))) {
      await $.stmt($.call(C, "FlushBufferOut", []));
    }
    await $.tick();
  }
  await $.mset((await $.v(C, "FStrm")), "next_in", null);
  await $.mset((await $.v(C, "FStrm")), "avail_in", 0);
  return L0.result;
}, {"params": ["Buffer", "Count"], "kind": "function", "ptypes": [null, "Integer"]});
  return U;
}

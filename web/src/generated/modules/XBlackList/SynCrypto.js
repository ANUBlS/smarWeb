// Generated from SynCrypto.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SynCrypto", ["SysUtils", "RTLConsts", "Classes", "SynLZ", "SynCommons", "SynTable", "Variants"]);
  const C = [U];
  U.const("repNoCheck", 0);
  U.const("repCheckedIfAvailable", 1);
  U.const("repMandatory", 2);
  U.const("SHA3_224", 0);
  U.const("SHA3_256", 1);
  U.const("SHA3_384", 2);
  U.const("SHA3_512", 3);
  U.const("SHAKE_128", 4);
  U.const("SHAKE_256", 5);
  U.const("saSha1", 0);
  U.const("saSha256", 1);
  U.const("saSha384", 2);
  U.const("saSha512", 3);
  U.const("saSha3224", 4);
  U.const("saSha3256", 5);
  U.const("saSha3384", 6);
  U.const("saSha3512", 7);
  U.const("saSha3S128", 8);
  U.const("saSha3S256", 9);
  U.const("hfMD5", 0);
  U.const("hfSHA1", 1);
  U.const("hfSHA256", 2);
  U.const("hfSHA384", 3);
  U.const("hfSHA512", 4);
  U.const("hfSHA3_256", 5);
  U.const("hfSHA3_512", 6);
  U.const("sprSuccess", 0);
  U.const("sprBadRequest", 1);
  U.const("sprUnsupported", 2);
  U.const("sprUnexpectedAlgorithm", 3);
  U.const("sprInvalidCertificate", 4);
  U.const("sprInvalidSignature", 5);
  U.const("sprInvalidEphemeralKey", 6);
  U.const("sprInvalidPublicKey", 7);
  U.const("sprInvalidPrivateKey", 8);
  U.const("sprInvalidMAC", 9);
  U.const("jrcIssuer", 0);
  U.const("jrcSubject", 1);
  U.const("jrcAudience", 2);
  U.const("jrcExpirationTime", 3);
  U.const("jrcNotBefore", 4);
  U.const("jrcIssuedAt", 5);
  U.const("jrcJwtID", 6);
  U.const("jwtValid", 0);
  U.const("jwtNoToken", 1);
  U.const("jwtWrongFormat", 2);
  U.const("jwtInvalidAlgorithm", 3);
  U.const("jwtInvalidPayload", 4);
  U.const("jwtUnexpectedClaim", 5);
  U.const("jwtMissingClaim", 6);
  U.const("jwtUnknownAudience", 7);
  U.const("jwtExpired", 8);
  U.const("jwtNotBeforeFailed", 9);
  U.const("jwtInvalidIssuedAt", 10);
  U.const("jwtInvalidID", 11);
  U.const("jwtInvalidSignature", 12);
  U.const("joHeaderParse", 0);
  U.const("joAllowUnexpectedClaims", 1);
  U.const("joAllowUnexpectedAudience", 2);
  U.const("joNoJwtIDGenerate", 3);
  U.const("joNoJwtIDCheck", 4);
  U.const("joDoubleInData", 5);
  $.defRecord("taesivctr", {"nonce": () => null, "magic": () => 0, "ctr": () => 0});
  $.defRecord("taesmac256", {"plain": () => null, "encrypted": () => null});
  $.defRecord("tsha512hash", {"a": () => null, "b": () => null, "c": () => null, "d": () => null, "e": () => null, "f": () => null, "g": () => null, "h": () => null});
  $.defRecord("tsynsignerparams", {"algo": () => null, "secret": () => null, "salt": () => null, "rounds": () => 0});
  $.defRecord("tjwtcontent", {"result": () => null, "claims": () => [], "audience": () => [], "reg": () => [], "data": () => null});
  $.defRecord("taescontext", {"rk": () => $.sarr(), "iv": () => null, "buf": () => null, "doblock": () => null, "initialized": () => false, "rounds": () => 0, "keybits": () => 0});
  $.defRecord("tshahash", {"a": () => 0, "b": () => 0, "c": () => 0, "d": () => 0, "e": () => 0, "f": () => 0, "g": () => 0, "h": () => 0});
  $.defRecord("tshacontext", {"hash": () => $.rec("tshahash"), "mlen": () => null, "buffer": () => $.sarr(), "index": () => 0});
  $.defRecord("tcryptdata", {"nonce": () => null, "mac": () => null, "crc": () => 0, "data": () => null});
  U.defClass("ESynCrypto", "ESynException", {}, {});
  U.defClass("THash128History", null, {"previous": {"name": "Previous", "type": "array"}, "index": {"name": "Index", "type": "integer"}, "depth": {"name": "Depth", "type": "integer"}, "count": {"name": "Count", "type": "integer"}}, {});
  U.fieldInit("THash128History", "previous", () => []);
  U.defClass("TAES", null, {"context": {"name": "Context", "type": "array"}}, {});
  U.fieldInit("TAES", "context", () => $.sarr());
  U.defClass("TAESGCMEngine", null, {"actx": {"name": "actx", "type": "TAES"}, "aad_ghv": {"name": "aad_ghv", "type": "TAESBlock"}, "txt_ghv": {"name": "txt_ghv", "type": "TAESBlock"}, "ghash_h": {"name": "ghash_h", "type": "TAESBlock"}, "aad_cnt": {"name": "aad_cnt", "type": "TQWordRec"}, "atx_cnt": {"name": "atx_cnt", "type": "TQWordRec"}, "y0_val": {"name": "y0_val", "type": "integer"}, "blen": {"name": "blen", "type": "byte"}, "flags": {"name": "flags", "type": "set"}, "gf_t4k": {"name": "gf_t4k", "type": "array"}}, {});
  U.fieldInit("TAESGCMEngine", "flags", () => []);
  U.fieldInit("TAESGCMEngine", "gf_t4k", () => []);
  U.defClass("TAESAbstract", "TSynPersistent", {"fkeysize": {"name": "fKeySize", "type": "cardinal"}, "fkeysizebytes": {"name": "fKeySizeBytes", "type": "cardinal"}, "fkey": {"name": "fKey", "type": "TAESKey"}, "fiv": {"name": "fIV", "type": "TAESBlock"}, "fivctr": {"name": "fIVCTR", "type": "TAESIVCTR"}, "fivctrstate": {"name": "fIVCTRState", "type": "enum"}, "fivhistorydec": {"name": "fIVHistoryDec", "type": "THash128History"}, "fivreplayattackcheck": {"name": "fIVReplayAttackCheck", "type": "TAESIVReplayAttackCheck"}}, {"keysize": {"name": "KeySize", "read": "fKeySize"}, "iv": {"name": "IV", "read": "fIV", "write": "fIV"}, "ivreplayattackcheck": {"name": "IVReplayAttackCheck", "read": "fIVReplayAttackCheck", "write": "fIVReplayAttackCheck"}, "ivhistorydepth": {"name": "IVHistoryDepth", "read": "fIVHistoryDec.Depth", "write": "SetIVHistory"}});
  U.fieldInit("TAESAbstract", "fivctr", () => $.rec("taesivctr"));
  U.defClass("TAESAbstractSyn", "TAESAbstract", {"fin": {"name": "fIn", "type": "PAESBlock"}, "fout": {"name": "fOut", "type": "PAESBlock"}, "fcv": {"name": "fCV", "type": "TAESBlock"}, "aes": {"name": "AES", "type": "TAES"}, "faesinit": {"name": "fAESInit", "type": "enum"}}, {"cv": {"name": "CV", "read": "fCV"}});
  U.defClass("TAESECB", "TAESAbstractSyn", {}, {});
  U.defClass("TAESCBC", "TAESAbstractSyn", {}, {});
  U.defClass("TAESAbstractEncryptOnly", "TAESAbstractSyn", {}, {});
  U.defClass("TAESCFB", "TAESAbstractEncryptOnly", {}, {});
  U.defClass("TAESOFB", "TAESAbstractEncryptOnly", {}, {});
  U.defClass("TAESCTR", "TAESAbstractEncryptOnly", {"fctroffset": {"name": "fCTROffset", "type": "PtrInt"}, "fctroffsetmin": {"name": "fCTROffsetMin", "type": "PtrInt"}}, {});
  U.defClass("TAESAbstractAEAD", "TAESAbstractEncryptOnly", {"fmac": {"name": "fMAC", "type": "TAESMAC256"}, "fmackey": {"name": "fMACKey", "type": "TAESMAC256"}}, {});
  U.fieldInit("TAESAbstractAEAD", "fmac", () => $.rec("taesmac256"));
  U.fieldInit("TAESAbstractAEAD", "fmackey", () => $.rec("taesmac256"));
  U.defClass("TAESCFBCRC", "TAESAbstractAEAD", {}, {});
  U.defClass("TAESOFBCRC", "TAESAbstractAEAD", {}, {});
  U.defClass("TAESGCM", "TAESAbstract", {"faes": {"name": "fAES", "type": "TAESGCMEngine"}, "fcontext": {"name": "fContext", "type": "enum"}}, {});
  U.defClass("TAESLocked", "TSynPersistentLock", {"faes": {"name": "fAES", "type": "TAES"}}, {});
  U.defClass("TAESPRNG", "TAESLocked", {"fctr": {"name": "fCTR", "type": "THash128Rec"}, "fbytessinceseed": {"name": "fBytesSinceSeed", "type": "integer"}, "fseedafterbytes": {"name": "fSeedAfterBytes", "type": "integer"}, "faeskeysize": {"name": "fAESKeySize", "type": "integer"}, "fseedpbkdf2rounds": {"name": "fSeedPBKDF2Rounds", "type": "cardinal"}, "ftotalbytes": {"name": "fTotalBytes", "type": "QWord"}}, {"seedafterbytes": {"name": "SeedAfterBytes", "read": "fSeedAfterBytes"}, "seedpbkdf2rounds": {"name": "SeedPBKDF2Rounds", "read": "fSeedPBKDF2Rounds"}, "aeskeysize": {"name": "AESKeySize", "read": "fAESKeySize"}, "totalbytes": {"name": "TotalBytes", "read": "fTotalBytes"}});
  U.defClass("TAESPRNGSystem", "TAESPRNG", {}, {});
  U.defClass("TSHA1", null, {"context": {"name": "Context", "type": "array"}}, {});
  U.fieldInit("TSHA1", "context", () => $.sarr());
  U.defClass("TSHA256", null, {"context": {"name": "Context", "type": "array"}}, {});
  U.fieldInit("TSHA256", "context", () => $.sarr());
  U.defClass("TSHA384", null, {"hash": {"name": "Hash", "type": "TSHA512Hash"}, "mlen": {"name": "MLen", "type": "QWord"}, "data": {"name": "Data", "type": "array"}, "index": {"name": "Index", "type": "integer"}}, {});
  U.fieldInit("TSHA384", "hash", () => $.rec("tsha512hash"));
  U.fieldInit("TSHA384", "data", () => $.sarr());
  U.defClass("TSHA512", null, {"hash": {"name": "Hash", "type": "TSHA512Hash"}, "mlen": {"name": "MLen", "type": "QWord"}, "data": {"name": "Data", "type": "array"}, "index": {"name": "Index", "type": "integer"}}, {});
  U.fieldInit("TSHA512", "hash", () => $.rec("tsha512hash"));
  U.fieldInit("TSHA512", "data", () => $.sarr());
  U.defClass("TSHA3", null, {"context": {"name": "Context", "type": "array"}}, {});
  U.fieldInit("TSHA3", "context", () => $.sarr());
  U.defClass("TMD5", null, {"in_": {"name": "in_", "type": "TMD5In"}, "bytes": {"name": "bytes", "type": "array"}, "buf": {"name": "buf", "type": "TMD5Buf"}}, {});
  U.fieldInit("TMD5", "in_", () => $.sarr());
  U.fieldInit("TMD5", "bytes", () => $.sarr());
  U.defClass("TRC4", null, {"state": {"name": "state", "type": "array"}, "curri": {"name": "currI", "type": "PtrInt"}, "currj": {"name": "currJ", "type": "PtrInt"}}, {});
  U.fieldInit("TRC4", "state", () => []);
  U.defClass("TAESFullHeader", null, {"originallen": {"name": "OriginalLen", "type": "cardinal"}, "sourcelen": {"name": "SourceLen", "type": "cardinal"}, "somesalt": {"name": "SomeSalt", "type": "cardinal"}, "headercheck": {"name": "HeaderCheck", "type": "cardinal"}}, {});
  U.defClass("TAESFull", null, {"head": {"name": "Head", "type": "TAESFullHeader"}, "outstreamcreated": {"name": "outStreamCreated", "type": "TMemoryStream"}}, {});
  U.defClass("TAESWriteStream", "TStream", {"adler": {"name": "Adler", "type": "cardinal"}, "destsize": {"name": "DestSize", "type": "cardinal"}, "dest": {"name": "Dest", "type": "TStream"}, "buf": {"name": "Buf", "type": "TAESBlock"}, "bufcount": {"name": "BufCount", "type": "integer"}, "aes": {"name": "AES", "type": "TAES"}, "nocrypt": {"name": "NoCrypt", "type": "boolean"}}, {});
  U.defClass("THMAC_SHA1", null, {"sha": {"name": "sha", "type": "TSHA1"}, "step7data": {"name": "step7data", "type": "THash512Rec"}}, {});
  U.defClass("THMAC_SHA384", null, {"sha": {"name": "sha", "type": "TSHA384"}, "step7data": {"name": "step7data", "type": "array"}}, {});
  U.fieldInit("THMAC_SHA384", "step7data", () => $.sarr());
  U.defClass("THMAC_SHA512", null, {"sha": {"name": "sha", "type": "TSHA512"}, "step7data": {"name": "step7data", "type": "array"}}, {});
  U.fieldInit("THMAC_SHA512", "step7data", () => $.sarr());
  U.defClass("THMAC_SHA256", null, {"sha": {"name": "sha", "type": "TSha256"}, "step7data": {"name": "step7data", "type": "THash512Rec"}}, {});
  U.defClass("TSynSigner", null, {"ctxt": {"name": "ctxt", "type": "array"}, "fsignaturesize": {"name": "fSignatureSize", "type": "integer"}, "falgo": {"name": "fAlgo", "type": "TSignAlgo"}}, {"algo": {"name": "Algo", "read": "fAlgo"}, "signaturesize": {"name": "SignatureSize", "read": "fSignatureSize"}});
  U.fieldInit("TSynSigner", "ctxt", () => $.sarr());
  U.defClass("TSynHasher", null, {"falgo": {"name": "fAlgo", "type": "THashAlgo"}, "ctxt": {"name": "ctxt", "type": "array"}}, {"algo": {"name": "Algo", "read": "fAlgo"}});
  U.fieldInit("TSynHasher", "ctxt", () => $.sarr());
  U.defClass("THMAC_CRC32C", null, {"seed": {"name": "seed", "type": "cardinal"}, "step7data": {"name": "step7data", "type": "THash512Rec"}}, {});
  U.defClass("TProtocolNone", "TInterfacedObject", {}, {});
  U.defClass("TProtocolAES", "TInterfacedObjectLocked", {"faes": {"name": "fAES", "type": "array"}}, {});
  U.fieldInit("TProtocolAES", "faes", () => []);
  U.defClass("EJWTException", "ESynException", {}, {});
  U.defClass("TJWTAbstract", "TSynPersistent", {"falgorithm": {"name": "fAlgorithm", "type": "RawUTF8"}, "fheader": {"name": "fHeader", "type": "RawUTF8"}, "fheaderb64": {"name": "fHeaderB64", "type": "RawUTF8"}, "fclaims": {"name": "fClaims", "type": "TJWTClaims"}, "foptions": {"name": "fOptions", "type": "TJWTOptions"}, "faudience": {"name": "fAudience", "type": "TRawUTF8DynArray"}, "fexpirationseconds": {"name": "fExpirationSeconds", "type": "integer"}, "fidgen": {"name": "fIDGen", "type": "TSynUniqueIdentifierGenerator"}, "fcachetimeoutseconds": {"name": "fCacheTimeoutSeconds", "type": "integer"}, "fcacheresults": {"name": "fCacheResults", "type": "TJWTResults"}, "fcache": {"name": "fCache", "type": "TSynDictionary"}}, {"algorithm": {"name": "Algorithm", "read": "fAlgorithm"}, "options": {"name": "Options", "read": "fOptions", "write": "fOptions"}, "claims": {"name": "Claims", "read": "fClaims"}, "expirationseconds": {"name": "ExpirationSeconds", "read": "fExpirationSeconds"}, "audience": {"name": "Audience", "read": "fAudience"}, "cachetimeoutseconds": {"name": "CacheTimeoutSeconds", "read": "fCacheTimeoutSeconds", "write": "SetCacheTimeoutSeconds"}, "cacheresults": {"name": "CacheResults", "read": "fCacheResults", "write": "fCacheResults"}});
  U.fieldInit("TJWTAbstract", "fclaims", () => []);
  U.fieldInit("TJWTAbstract", "foptions", () => []);
  U.fieldInit("TJWTAbstract", "fcacheresults", () => []);
  U.defClass("TJWTNone", "TJWTAbstract", {}, {});
  U.defClass("TJWTSynSignerAbstract", "TJWTAbstract", {"fsignprepared": {"name": "fSignPrepared", "type": "TSynSigner"}}, {"signaturesize": {"name": "SignatureSize", "read": "fSignPrepared.fSignatureSize"}, "signaturealgo": {"name": "SignatureAlgo", "read": "fSignPrepared.fAlgo"}, "signprepared": {"name": "SignPrepared", "read": "fSignPrepared"}});
  U.defClass("TJWTHS256", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTHS384", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTHS512", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTS3224", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTS3256", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTS3384", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTS3512", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTS3S128", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TJWTS3S256", "TJWTSynSignerAbstract", {}, {});
  U.defClass("TSHA3Context", null, {"state": {"name": "State", "type": "array"}, "dataqueue": {"name": "DataQueue", "type": "array"}, "algo": {"name": "Algo", "type": "TSHA3Algo"}, "squeezing": {"name": "Squeezing", "type": "boolean"}, "rate": {"name": "Rate", "type": "integer"}, "capacity": {"name": "Capacity", "type": "integer"}, "bitsinqueue": {"name": "BitsInQueue", "type": "integer"}, "bitsavailableforsqueezing": {"name": "BitsAvailableForSqueezing", "type": "integer"}}, {});
  U.fieldInit("TSHA3Context", "state", () => $.sarr());
  U.fieldInit("TSHA3Context", "dataqueue", () => $.sarr());
  U.init(async () => {
    U.const("AESContextSize", $.add(276, (await $.call(C, "sizeof", [(await $.v(C, "pointer"))]))));
    U.const("SHAContextSize", 108);
    U.const("SHA3ContextSize", 412);
    U.const("AESBlockShift", 4);
    U.const("AESBlockMod", 15);
    U.const("AESKeySize", $.idiv(256, 8));
    U.const("SHA1DIGESTSTRLEN", $.mul((await $.call(C, "sizeof", [(await $.v(C, "TSHA1Digest"))])), 2));
    U.const("SHA256DIGESTSTRLEN", $.mul((await $.call(C, "sizeof", [(await $.v(C, "TSHA256Digest"))])), 2));
    U.const("MD5DIGESTSTRLEN", $.mul((await $.call(C, "sizeof", [(await $.v(C, "TMD5Digest"))])), 2));
    U.const("JWT_CLAIMS_TEXT", ["iss", "sub", "aud", "exp", "nbf", "iat", "jti"]);
    U.const("JWT_TEXT", ["HS256", "HS256", "HS384", "HS512", "S3224", "S3256", "S3384", "S3512", "S3S128", "S3S256"]);
    U.const("JWT_CLASS", [(await $.v(C, "TJWTHS256")), (await $.v(C, "TJWTHS256")), (await $.v(C, "TJWTHS384")), (await $.v(C, "TJWTHS512")), (await $.v(C, "TJWTS3224")), (await $.v(C, "TJWTS3256")), (await $.v(C, "TJWTS3384")), (await $.v(C, "TJWTS3512")), (await $.v(C, "TJWTS3S128")), (await $.v(C, "TJWTS3S256"))]);
    U.const("AESMaxRounds", 14);
    U.const("RCon", [1, 2, 4, 8, 16, 32, 64, 128, 27, 54]);
    U.const("gft_le", [0, 49665, 33795, 17922, 2055, 51718, 35844, 19973, 4110, 53775, 37901, 22028, 6153, 55816, 39946, 24075, 8220, 57885, 42015, 26142, 10267, 59930, 44056, 28185, 12306, 61971, 46097, 30224, 14357, 64020, 48150, 32279, 16440, 33337, 50235, 1594, 18495, 35390, 52284, 3645, 20534, 37431, 54325, 5684, 22577, 39472, 56370, 7731, 24612, 41509, 58407, 9766, 26659, 43554, 60448, 11809, 28714, 45611, 62505, 13864, 30765, 47660, 64558, 15919, 32880, 17009, 1139, 50802, 34935, 19062, 3188, 52853, 36990, 21119, 5245, 54908, 39033, 23160, 7290, 56955, 41068, 25197, 9327, 58990, 43115, 27242, 11368, 61033, 45154, 29283, 13409, 63072, 47205, 31332, 15462, 65127, 49224, 585, 17483, 34378, 51279, 2638, 19532, 36429, 53318, 4679, 21573, 38468, 55361, 6720, 23618, 40515, 57428, 8789, 25687, 42582, 59475, 10834, 27728, 44625, 61530, 12891, 29785, 46680, 63581, 14940, 31838, 48735, 225, 49888, 34018, 18147, 2278, 51943, 36069, 20196, 4335, 53998, 38124, 22253, 6376, 56041, 40171, 24298, 8445, 58108, 42238, 26367, 10490, 60155, 44281, 28408, 12531, 62194, 46320, 30449, 14580, 64245, 48375, 32502, 16601, 33496, 50394, 1755, 18654, 35551, 52445, 3804, 20695, 37590, 54484, 5845, 22736, 39633, 56531, 7890, 24773, 41668, 58566, 9927, 26818, 43715, 60609, 11968, 28875, 45770, 62664, 14025, 30924, 47821, 64719, 16078, 32913, 17040, 1170, 50835, 34966, 19095, 3221, 52884, 37023, 21150, 5276, 54941, 39064, 23193, 7323, 56986, 41101, 25228, 9358, 59023, 43146, 27275, 11401, 61064, 45187, 29314, 13440, 63105, 47236, 31365, 15495, 65158, 49321, 680, 17578, 34475, 51374, 2735, 19629, 36524, 53415, 4774, 21668, 38565, 55456, 6817, 23715, 40610, 57525, 8884, 25782, 42679, 59570, 10931, 27825, 44720, 61627, 12986, 29880, 46777, 63676, 15037, 31935, 48830]);
    U.const("CTR_POS", 12);
    U.const("SHA512K", [(await $.call(C, "QWord", [4794697086780616226])), (await $.call(C, "QWord", [8158064640168781261])), (await $.call(C, "QWord", [13096744586834688815])), (await $.call(C, "QWord", [16840607885511220156])), (await $.call(C, "QWord", [4131703408338449720])), (await $.call(C, "QWord", [6480981068601479193])), (await $.call(C, "QWord", [10538285296894168987])), (await $.call(C, "QWord", [12329834152419229976])), (await $.call(C, "QWord", [15566598209576043074])), (await $.call(C, "QWord", [1334009975649890238])), (await $.call(C, "QWord", [2608012711638119052])), (await $.call(C, "QWord", [6128411473006802146])), (await $.call(C, "QWord", [8268148722764581231])), (await $.call(C, "QWord", [9286055187155687089])), (await $.call(C, "QWord", [11230858885718282805])), (await $.call(C, "QWord", [13951009754708518548])), (await $.call(C, "QWord", [16472876342353939154])), (await $.call(C, "QWord", [17275323862435702243])), (await $.call(C, "QWord", [1135362057144423861])), (await $.call(C, "QWord", [2597628984639134821])), (await $.call(C, "QWord", [3308224258029322869])), (await $.call(C, "QWord", [5365058923640841347])), (await $.call(C, "QWord", [6679025012923562964])), (await $.call(C, "QWord", [8573033837759648693])), (await $.call(C, "QWord", [10970295158949994411])), (await $.call(C, "QWord", [12119686244451234320])), (await $.call(C, "QWord", [12683024718118986047])), (await $.call(C, "QWord", [13788192230050041572])), (await $.call(C, "QWord", [14330467153632333762])), (await $.call(C, "QWord", [15395433587784984357])), (await $.call(C, "QWord", [489312712824947311])), (await $.call(C, "QWord", [1452737877330783856])), (await $.call(C, "QWord", [2861767655752347644])), (await $.call(C, "QWord", [3322285676063803686])), (await $.call(C, "QWord", [5560940570517711597])), (await $.call(C, "QWord", [5996557281743188959])), (await $.call(C, "QWord", [7280758554555802590])), (await $.call(C, "QWord", [8532644243296465576])), (await $.call(C, "QWord", [9350256976987008742])), (await $.call(C, "QWord", [10552545826968843579])), (await $.call(C, "QWord", [11727347734174303076])), (await $.call(C, "QWord", [12113106623233404929])), (await $.call(C, "QWord", [14000437183269869457])), (await $.call(C, "QWord", [14369950271660146224])), (await $.call(C, "QWord", [15101387698204529176])), (await $.call(C, "QWord", [15463397548674623760])), (await $.call(C, "QWord", [17586052441742319658])), (await $.call(C, "QWord", [1182934255886127544])), (await $.call(C, "QWord", [1847814050463011016])), (await $.call(C, "QWord", [2177327727835720531])), (await $.call(C, "QWord", [2830643537854262169])), (await $.call(C, "QWord", [3796741975233480872])), (await $.call(C, "QWord", [4115178125766777443])), (await $.call(C, "QWord", [5681478168544905931])), (await $.call(C, "QWord", [6601373596472566643])), (await $.call(C, "QWord", [7507060721942968483])), (await $.call(C, "QWord", [8399075790359081724])), (await $.call(C, "QWord", [8693463985226723168])), (await $.call(C, "QWord", [9568029438360202098])), (await $.call(C, "QWord", [10144078919501101548])), (await $.call(C, "QWord", [10430055236837252648])), (await $.call(C, "QWord", [11840083180663258601])), (await $.call(C, "QWord", [13761210420658862357])), (await $.call(C, "QWord", [14299343276471374635])), (await $.call(C, "QWord", [14566680578165727644])), (await $.call(C, "QWord", [15097957966210449927])), (await $.call(C, "QWord", [16922976911328602910])), (await $.call(C, "QWord", [17689382322260857208])), (await $.call(C, "QWord", [500013540394364858])), (await $.call(C, "QWord", [748580250866718886])), (await $.call(C, "QWord", [1242879168328830382])), (await $.call(C, "QWord", [1977374033974150939])), (await $.call(C, "QWord", [2944078676154940804])), (await $.call(C, "QWord", [3659926193048069267])), (await $.call(C, "QWord", [4368137639120453308])), (await $.call(C, "QWord", [4836135668995329356])), (await $.call(C, "QWord", [5532061633213252278])), (await $.call(C, "QWord", [6448918945643986474])), (await $.call(C, "QWord", [6902733635092675308])), (await $.call(C, "QWord", [7801388544844847127]))]);
    U.const("cKeccakPermutationSize", 1600);
    U.const("cKeccakMaximumRate", 1536);
    U.const("cKeccakPermutationSizeInBytes", $.idiv((await $.v(C, "cKeccakPermutationSize")), 8));
    U.const("cKeccakMaximumRateInBytes", $.idiv((await $.v(C, "cKeccakMaximumRate")), 8));
    U.const("cKeccakNumberOfRounds", 24);
    U.const("cRoundConstants", [(await $.call(C, "QWord", [1])), (await $.call(C, "QWord", [32898])), (await $.call(C, "QWord", [9223372036854808714])), (await $.call(C, "QWord", [9223372039002292224])), (await $.call(C, "QWord", [32907])), (await $.call(C, "QWord", [2147483649])), (await $.call(C, "QWord", [9223372039002292353])), (await $.call(C, "QWord", [9223372036854808585])), (await $.call(C, "QWord", [138])), (await $.call(C, "QWord", [136])), (await $.call(C, "QWord", [2147516425])), (await $.call(C, "QWord", [2147483658])), (await $.call(C, "QWord", [2147516555])), (await $.call(C, "QWord", [9223372036854775947])), (await $.call(C, "QWord", [9223372036854808713])), (await $.call(C, "QWord", [9223372036854808579])), (await $.call(C, "QWord", [9223372036854808578])), (await $.call(C, "QWord", [9223372036854775936])), (await $.call(C, "QWord", [32778])), (await $.call(C, "QWord", [9223372039002259466])), (await $.call(C, "QWord", [9223372039002292353])), (await $.call(C, "QWord", [9223372036854808704])), (await $.call(C, "QWord", [2147483649])), (await $.call(C, "QWord", [9223372039002292232]))]);
    U.const("SHA3_DEF_LEN", [224, 256, 384, 512, 256, 512]);
    U.const("TmpSize", 65536);
    U.const("TmpSizeBlock", $.shr((await $.v(C, "TmpSize")), (await $.v(C, "AESBlockShift"))));
    U.const("JWT_MAXSIZE", 4096);
    U.var_("AESIVCTR_KEY", [3462225470, 642804837, 1452146834, 315417728], "TBlock128");
    U.var_("MainAESPRNG", null, "TAESPRNG");
    U.var_("CryptProtectDataEntropy", [25, 142, 186, 82, 250, 214, 86, 153, 123, 115, 27, 208, 139, 58, 149, 171, 148, 99, 194, 192, 120, 5, 156, 139, 133, 183, 161, 227, 237, 147, 39, 24], "THash256");
    U.var_("CompressShaAesKey", null, "TSHA256Digest");
    U.var_("CompressShaAesClass", (await $.v(C, "TAESCFB")), "TAESAbstractClass");
    U.var_("Td0", [], "array");
    U.var_("Td1", [], "array");
    U.var_("Td2", [], "array");
    U.var_("Td3", [], "array");
    U.var_("Te0", [], "array");
    U.var_("Te1", [], "array");
    U.var_("Te2", [], "array");
    U.var_("Te3", [], "array");
    U.var_("SBox", [], "array");
    U.var_("InvSBox", [], "array");
    U.var_("Xor32Byte", null, "TByteArray");
    U.var_("aesivctr", [], "array");
    U.var_("__h", null, "THash256");
    U.var_("__hmac", null, "THMAC_SHA256");
    U.var_("_TJWTResult", [], "array");
    U.var_("_TJWTClaim", [], "array");
  });
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"res": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["res"]);
  L0["result"] = (await $.call(C, "GetEnumName", [(await $.call(C, "TypeInfo", [(await $.v(C, "TProtocolResult"))])), (await $.call(C, "ord", [L0["res"]]))]));
  return L0.result;
}, {"params": ["res"], "kind": "function", "ptypes": ["TProtocolResult"]});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"chk": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["chk"]);
  L0["result"] = (await $.call(C, "GetEnumName", [(await $.call(C, "TypeInfo", [(await $.v(C, "TAESIVReplayAttackCheck"))])), (await $.call(C, "ord", [L0["chk"]]))]));
  return L0.result;
}, {"params": ["chk"], "kind": "function", "ptypes": ["TAESIVReplayAttackCheck"]});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["algo"]);
  L0["result"] = (await $.call(C, "GetEnumName", [(await $.call(C, "TypeInfo", [(await $.v(C, "TSignAlgo"))])), (await $.call(C, "ord", [L0["algo"]]))]));
  return L0.result;
}, {"params": ["algo"], "kind": "function", "ptypes": ["TSignAlgo"]});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["algo"]);
  L0["result"] = (await $.call(C, "GetEnumName", [(await $.call(C, "TypeInfo", [(await $.v(C, "THashAlgo"))])), (await $.call(C, "ord", [L0["algo"]]))]));
  return L0.result;
}, {"params": ["algo"], "kind": "function", "ptypes": ["THashAlgo"]});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["algo"]);
  L0["result"] = (await $.call(C, "GetEnumName", [(await $.call(C, "TypeInfo", [(await $.v(C, "TSHA3Algo"))])), (await $.call(C, "ord", [L0["algo"]]))]));
  return L0.result;
}, {"params": ["algo"], "kind": "function", "ptypes": ["TSHA3Algo"]});
  U.func("XorBlock16", async function XorBlock16(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.copyArg(p0), "b": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["a", "b"]);
  { const $t1 = await $.iset(L0["a"], [0], $.xor((await $.idx(L0["a"], [0])), (await $.idx(L0["b"], [0])))); if ($t1 !== undefined) { L0["a"] = $t1; } }
  { const $t2 = await $.iset(L0["a"], [1], $.xor((await $.idx(L0["a"], [1])), (await $.idx(L0["b"], [1])))); if ($t2 !== undefined) { L0["a"] = $t2; } }
  { const $t3 = await $.iset(L0["a"], [2], $.xor((await $.idx(L0["a"], [2])), (await $.idx(L0["b"], [2])))); if ($t3 !== undefined) { L0["a"] = $t3; } }
  { const $t4 = await $.iset(L0["a"], [3], $.xor((await $.idx(L0["a"], [3])), (await $.idx(L0["b"], [3])))); if ($t4 !== undefined) { L0["a"] = $t4; } }
  return L0.result;
}, {"params": ["A", "B"], "kind": "procedure", "ptypes": ["PCardinalArray", "PCardinalArray"]});
  U.func("XorBlock16", async function XorBlock16(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.copyArg(p0), "b": $.copyArg(p1), "c": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["a", "b", "c"]);
  { const $t5 = await $.iset(L0["b"], [0], $.xor((await $.idx(L0["a"], [0])), (await $.idx(L0["c"], [0])))); if ($t5 !== undefined) { L0["b"] = $t5; } }
  { const $t6 = await $.iset(L0["b"], [1], $.xor((await $.idx(L0["a"], [1])), (await $.idx(L0["c"], [1])))); if ($t6 !== undefined) { L0["b"] = $t6; } }
  { const $t7 = await $.iset(L0["b"], [2], $.xor((await $.idx(L0["a"], [2])), (await $.idx(L0["c"], [2])))); if ($t7 !== undefined) { L0["b"] = $t7; } }
  { const $t8 = await $.iset(L0["b"], [3], $.xor((await $.idx(L0["a"], [3])), (await $.idx(L0["c"], [3])))); if ($t8 !== undefined) { L0["b"] = $t8; } }
  return L0.result;
}, {"params": ["A", "B", "C"], "kind": "procedure", "ptypes": ["PCardinalArray", "PCardinalArray", "PCardinalArray"]});
  U.func("AESBlockToShortString", async function AESBlockToShortString(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.copyArg(p0), "result": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["block"]);
  { const $t9 = await $.iset((await L0["result"].get()), [0], " "); if ($t9 !== undefined) { await L0["result"].set($t9); } }
  await $.stmt((await $.mcall((await $.v(C, "SynCommons")), "BinToHex", [L0["block"], (await $.idx((await L0["result"].get()), [1])), 16])));
  return L0.result;
}, {"params": ["block", "result"], "kind": "procedure", "ptypes": ["TAESBlock", "short32"]});
  U.func("AESBlockToShortString", async function AESBlockToShortString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["block"]);
  await $.stmt((await $.callv(L0["aesblocktoshortstring"], [L0["block"], $.ref(async () => L0["result"], async ($t10) => { L0["result"] = $t10; })])));
  return L0.result;
}, {"params": ["block"], "kind": "function", "ptypes": ["TAESBlock"]});
  U.func("AESBlockToString", async function AESBlockToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["block"]);
  await $.stmt((await $.call(C, "FastSetString", [L0["result"], null, 32])));
  await $.stmt((await $.mcall((await $.v(C, "SynCommons")), "BinToHex", [L0["block"], (await $.call(C, "pointer", [L0["result"]])), 16])));
  return L0.result;
}, {"params": ["block"], "kind": "function", "ptypes": ["TAESBlock"]});
  U.func("MD5DigestToString", async function MD5DigestToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"d": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["d"]);
  await $.stmt((await $.call(C, "BinToHexLower", [L0["d"], (await $.call(C, "sizeof", [L0["d"]])), L0["result"]])));
  return L0.result;
}, {"params": ["D"], "kind": "function", "ptypes": ["TMD5Digest"]});
  U.func("MD5StringToDigest", async function MD5StringToDigest(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), "dest": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["source"]);
  L0["result"] = (await $.mcall((await $.v(C, "SynCommons")), "HexToBin", [(await $.call(C, "pointer", [L0["source"]])), (await L0["dest"].get()), (await $.call(C, "sizeof", [(await L0["dest"].get())]))]));
  return L0.result;
}, {"params": ["Source", "Dest"], "kind": "function", "ptypes": ["RawUTF8", "TMD5Digest"]});
  U.func("SHA1DigestToString", async function SHA1DigestToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"d": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["d"]);
  await $.stmt((await $.call(C, "BinToHexLower", [L0["d"], (await $.call(C, "sizeof", [L0["d"]])), L0["result"]])));
  return L0.result;
}, {"params": ["D"], "kind": "function", "ptypes": ["TSHA1Digest"]});
  U.func("SHA1StringToDigest", async function SHA1StringToDigest(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), "dest": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["source"]);
  L0["result"] = (await $.mcall((await $.v(C, "SynCommons")), "HexToBin", [(await $.call(C, "pointer", [L0["source"]])), (await L0["dest"].get()), (await $.call(C, "sizeof", [(await L0["dest"].get())]))]));
  return L0.result;
}, {"params": ["Source", "Dest"], "kind": "function", "ptypes": ["RawUTF8", "TSHA1Digest"]});
  U.func("SHA256DigestToString", async function SHA256DigestToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"d": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["d"]);
  await $.stmt((await $.call(C, "BinToHexLower", [L0["d"], (await $.call(C, "sizeof", [L0["d"]])), L0["result"]])));
  return L0.result;
}, {"params": ["D"], "kind": "function", "ptypes": ["TSHA256Digest"]});
  U.func("SHA256StringToDigest", async function SHA256StringToDigest(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), "dest": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["source"]);
  L0["result"] = (await $.mcall((await $.v(C, "SynCommons")), "HexToBin", [(await $.call(C, "pointer", [L0["source"]])), (await L0["dest"].get()), (await $.call(C, "sizeof", [(await L0["dest"].get())]))]));
  return L0.result;
}, {"params": ["Source", "Dest"], "kind": "function", "ptypes": ["RawUTF8", "TSHA256Digest"]});
  U.func("SHA512DigestToString", async function SHA512DigestToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"d": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["d"]);
  await $.stmt((await $.call(C, "BinToHexLower", [L0["d"], (await $.call(C, "sizeof", [L0["d"]])), L0["result"]])));
  return L0.result;
}, {"params": ["D"], "kind": "function", "ptypes": ["TSHA512Digest"]});
  U.func("SHA384DigestToString", async function SHA384DigestToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"d": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["d"]);
  await $.stmt((await $.call(C, "BinToHexLower", [L0["d"], (await $.call(C, "sizeof", [L0["d"]])), L0["result"]])));
  return L0.result;
}, {"params": ["D"], "kind": "function", "ptypes": ["TSHA384Digest"]});
  U.func("XorMemoryPtrInt", async function XorMemoryPtrInt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dest": $.copyArg(p0), "source": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["dest", "source", "count"]);
  { const $t11 = $.sub(L0["count"], 1);
    L0["i"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
      $t12 = false;
      if (!($.ord(L0["i"]) <= $.ord($t11))) break;
      { const $t13 = await $.iset(L0["dest"], [L0["i"]], $.xor((await $.idx(L0["dest"], [L0["i"]])), (await $.idx(L0["source"], [L0["i"]])))); if ($t13 !== undefined) { L0["dest"] = $t13; } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["dest", "source", "count"], "kind": "procedure", "ptypes": ["PPtrIntArray", "PPtrIntArray", "integer"]});
  U.func("ComputeAesStaticTables", async function ComputeAesStaticTables(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "x": 0, "y": 0, "pow": [], "log": [], "c": 0};
  L0["x"] = 1;
  { const $t14 = 255;
    L0["i"] = 0;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
      $t15 = false;
      if (!($.ord(L0["i"]) <= $.ord($t14))) break;
      { const $t16 = await $.iset(L0["pow"], [L0["i"]], L0["x"]); if ($t16 !== undefined) { L0["pow"] = $t16; } }
      { const $t17 = await $.iset(L0["log"], [L0["x"]], L0["i"]); if ($t17 !== undefined) { L0["log"] = $t17; } }
      if ($.truthy($.ne((await $.and_(L0["x"], async () => 128)), 0))) {
        L0["x"] = $.xor($.xor(L0["x"], ($.shl(L0["x"], 1))), 27);
      } else {
        L0["x"] = $.xor(L0["x"], ($.shl(L0["x"], 1)));
      }
      await $.tick();
    }
  }
  { const $t18 = await $.iset((await $.v(C, "SBox")), [0], 99); if ($t18 !== undefined) { await $.set(C, "SBox", $t18); } }
  { const $t19 = await $.iset((await $.v(C, "InvSBox")), [99], 0); if ($t19 !== undefined) { await $.set(C, "InvSBox", $t19); } }
  { const $t20 = 255;
    L0["i"] = 1;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
      $t21 = false;
      if (!($.ord(L0["i"]) <= $.ord($t20))) break;
      L0["x"] = (await $.idx(L0["pow"], [$.sub(255, (await $.idx(L0["log"], [L0["i"]])))]));
      L0["y"] = $.add(($.shl(L0["x"], 1)), ($.shr(L0["x"], 7)));
      L0["x"] = $.xor(L0["x"], L0["y"]);
      L0["y"] = $.add(($.shl(L0["y"], 1)), ($.shr(L0["y"], 7)));
      L0["x"] = $.xor(L0["x"], L0["y"]);
      L0["y"] = $.add(($.shl(L0["y"], 1)), ($.shr(L0["y"], 7)));
      L0["x"] = $.xor(L0["x"], L0["y"]);
      L0["y"] = $.add(($.shl(L0["y"], 1)), ($.shr(L0["y"], 7)));
      L0["x"] = $.xor($.xor(L0["x"], L0["y"]), 99);
      { const $t22 = await $.iset((await $.v(C, "SBox")), [L0["i"]], L0["x"]); if ($t22 !== undefined) { await $.set(C, "SBox", $t22); } }
      { const $t23 = await $.iset((await $.v(C, "InvSBox")), [L0["x"]], L0["i"]); if ($t23 !== undefined) { await $.set(C, "InvSBox", $t23); } }
      await $.tick();
    }
  }
  { const $t24 = 255;
    L0["i"] = 0;
    let $t25 = true;
    for (;;) {
      if (!$t25) { L0["i"] = $.succ(L0["i"], 1); }
      $t25 = false;
      if (!($.ord(L0["i"]) <= $.ord($t24))) break;
      L0["x"] = (await $.idx((await $.v(C, "SBox")), [L0["i"]]));
      L0["y"] = $.shl(L0["x"], 1);
      if ($.truthy($.ne((await $.and_(L0["x"], async () => 128)), 0))) {
        L0["y"] = $.xor(L0["y"], 27);
      }
      { const $t26 = await $.iset((await $.v(C, "Te0")), [L0["i"]], $.add($.add($.add(L0["y"], $.shl(L0["x"], 8)), $.shl(L0["x"], 16)), $.shl(($.xor(L0["y"], L0["x"])), 24))); if ($t26 !== undefined) { await $.set(C, "Te0", $t26); } }
      { const $t27 = await $.iset((await $.v(C, "Te1")), [L0["i"]], $.add($.shl((await $.idx((await $.v(C, "Te0")), [L0["i"]])), 8), $.shr((await $.idx((await $.v(C, "Te0")), [L0["i"]])), 24))); if ($t27 !== undefined) { await $.set(C, "Te1", $t27); } }
      { const $t28 = await $.iset((await $.v(C, "Te2")), [L0["i"]], $.add($.shl((await $.idx((await $.v(C, "Te1")), [L0["i"]])), 8), $.shr((await $.idx((await $.v(C, "Te1")), [L0["i"]])), 24))); if ($t28 !== undefined) { await $.set(C, "Te2", $t28); } }
      { const $t29 = await $.iset((await $.v(C, "Te3")), [L0["i"]], $.add($.shl((await $.idx((await $.v(C, "Te2")), [L0["i"]])), 8), $.shr((await $.idx((await $.v(C, "Te2")), [L0["i"]])), 24))); if ($t29 !== undefined) { await $.set(C, "Te3", $t29); } }
      L0["x"] = (await $.idx((await $.v(C, "InvSBox")), [L0["i"]]));
      if ($.truthy($.eq(L0["x"], 0))) {
        continue;
      }
      L0["c"] = (await $.idx(L0["log"], [L0["x"]]));
      { const $t30 = await $.iset((await $.v(C, "Td0")), [L0["i"]], $.add($.add($.add((await $.idx(L0["pow"], [$.mod(($.add(L0["c"], 223)), 255)])), $.shl((await $.idx(L0["pow"], [$.mod(($.add(L0["c"], 199)), 255)])), 8)), $.shl((await $.idx(L0["pow"], [$.mod(($.add(L0["c"], 238)), 255)])), 16)), $.shl((await $.idx(L0["pow"], [$.mod(($.add(L0["c"], 104)), 255)])), 24))); if ($t30 !== undefined) { await $.set(C, "Td0", $t30); } }
      { const $t31 = await $.iset((await $.v(C, "Td1")), [L0["i"]], $.add($.shl((await $.idx((await $.v(C, "Td0")), [L0["i"]])), 8), $.shr((await $.idx((await $.v(C, "Td0")), [L0["i"]])), 24))); if ($t31 !== undefined) { await $.set(C, "Td1", $t31); } }
      { const $t32 = await $.iset((await $.v(C, "Td2")), [L0["i"]], $.add($.shl((await $.idx((await $.v(C, "Td1")), [L0["i"]])), 8), $.shr((await $.idx((await $.v(C, "Td1")), [L0["i"]])), 24))); if ($t32 !== undefined) { await $.set(C, "Td2", $t32); } }
      { const $t33 = await $.iset((await $.v(C, "Td3")), [L0["i"]], $.add($.shl((await $.idx((await $.v(C, "Td2")), [L0["i"]])), 8), $.shr((await $.idx((await $.v(C, "Td2")), [L0["i"]])), 24))); if ($t33 !== undefined) { await $.set(C, "Td3", $t33); } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("bswap256", async function bswap256(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "d": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "d"]);
  { const $t34 = await $.iset(L0["d"], [0], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [0]))]))); if ($t34 !== undefined) { L0["d"] = $t34; } }
  { const $t35 = await $.iset(L0["d"], [1], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [1]))]))); if ($t35 !== undefined) { L0["d"] = $t35; } }
  { const $t36 = await $.iset(L0["d"], [2], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [2]))]))); if ($t36 !== undefined) { L0["d"] = $t36; } }
  { const $t37 = await $.iset(L0["d"], [3], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [3]))]))); if ($t37 !== undefined) { L0["d"] = $t37; } }
  { const $t38 = await $.iset(L0["d"], [4], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [4]))]))); if ($t38 !== undefined) { L0["d"] = $t38; } }
  { const $t39 = await $.iset(L0["d"], [5], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [5]))]))); if ($t39 !== undefined) { L0["d"] = $t39; } }
  { const $t40 = await $.iset(L0["d"], [6], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [6]))]))); if ($t40 !== undefined) { L0["d"] = $t40; } }
  { const $t41 = await $.iset(L0["d"], [7], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [7]))]))); if ($t41 !== undefined) { L0["d"] = $t41; } }
  return L0.result;
}, {"params": ["s", "d"], "kind": "procedure", "ptypes": ["PIntegerArray", "PIntegerArray"]});
  U.func("bswap160", async function bswap160(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "d": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "d"]);
  { const $t42 = await $.iset(L0["d"], [0], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [0]))]))); if ($t42 !== undefined) { L0["d"] = $t42; } }
  { const $t43 = await $.iset(L0["d"], [1], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [1]))]))); if ($t43 !== undefined) { L0["d"] = $t43; } }
  { const $t44 = await $.iset(L0["d"], [2], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [2]))]))); if ($t44 !== undefined) { L0["d"] = $t44; } }
  { const $t45 = await $.iset(L0["d"], [3], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [3]))]))); if ($t45 !== undefined) { L0["d"] = $t45; } }
  { const $t46 = await $.iset(L0["d"], [4], (await $.call(C, "bswap32", [(await $.idx(L0["s"], [4]))]))); if ($t46 !== undefined) { L0["d"] = $t46; } }
  return L0.result;
}, {"params": ["s", "d"], "kind": "procedure", "ptypes": ["PIntegerArray", "PIntegerArray"]});
  U.func("SHA256SelfTest", async function SHA256SelfTest(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "digest": null};
  L0["d1"] = [186, 120, 22, 191, 143, 1, 207, 234, 65, 65, 64, 222, 93, 174, 34, 35, 176, 3, 97, 163, 150, 23, 122, 156, 180, 16, 255, 97, 242, 0, 21, 173];
  L0["d2"] = [36, 141, 106, 97, 210, 6, 56, 184, 229, 192, 38, 147, 12, 62, 96, 57, 163, 60, 228, 89, 100, 255, 33, 103, 246, 236, 237, 212, 25, 219, 6, 193];
  L0["d3"] = [148, 228, 169, 217, 5, 49, 35, 29, 190, 216, 126, 210, 228, 243, 94, 74, 11, 244, 179, 188, 206, 235, 23, 22, 213, 119, 177, 224, 139, 169, 186, 163];
  L0["singletest"] = $.fn(async function SingleTest(p0, p1) {
  const L1 = {"s": $.copyArg(p0), "tdig": $.copyArg(p1), result: false, "sha": null, "digest": null, "i": 0};
  await $.fixArgs(L1, ["s", "tdig"]);
  await $.stmt((await $.mcall(L1["sha"], "Full", [(await $.call(C, "pointer", [L1["s"]])), (await $.call(C, "length", [L1["s"]])), $.ref(async () => L1["digest"], async ($t47) => { L1["digest"] = $t47; })])));
  L1["result"] = (await $.call(C, "IsEqual", [L1["digest"], L1["tdig"]]));
  if ($.truthy($.not(L1["result"]))) {
    return L1.result;
  }
  await $.mcall(L1["sha"], "Init", []);
  { const $t48 = (await $.call(C, "length", [L1["s"]]));
    L1["i"] = 1;
    let $t49 = true;
    for (;;) {
      if (!$t49) { L1["i"] = $.succ(L1["i"], 1); }
      $t49 = false;
      if (!($.ord(L1["i"]) <= $.ord($t48))) break;
      await $.stmt((await $.mcall(L1["sha"], "Update", [(await $.idx(L1["s"], [L1["i"]])), 1])));
      await $.tick();
    }
  }
  await $.stmt((await $.mcall(L1["sha"], "Final", [$.ref(async () => L1["digest"], async ($t50) => { L1["digest"] = $t50; })])));
  L1["result"] = (await $.call(C, "IsEqual", [L1["digest"], L1["tdig"]]));
  return L1.result;
});
  L0["result"] = (await $.and_((await $.callv(L0["singletest"], ["abc", L0["d1"]])), async () => (await $.callv(L0["singletest"], ["abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq", L0["d2"]]))));
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "SHA256Weak", ["lagrangehommage", $.ref(async () => L0["digest"], async ($t51) => { L0["digest"] = $t51; })])));
  L0["result"] = (await $.call(C, "IsEqual", [L0["digest"], L0["d3"]]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("MD5", async function MD5(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "md5": null, "d": null};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.mcall((await $.callv(L0["md5"], [])), "Full", [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "Length", [L0["s"]])), $.ref(async () => L0["d"], async ($t52) => { L0["d"] = $t52; })])));
  L0["result"] = (await $.call(C, "MD5DigestToString", [L0["d"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["d"]])));
  return L0.result;
}, {"params": ["s"], "kind": "function", "ptypes": ["RawByteString"]});
  U.func("SHA1", async function SHA1(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "sha": null, "digest": null};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "length", [L0["s"]])), $.ref(async () => L0["digest"], async ($t53) => { L0["digest"] = $t53; })])));
  L0["result"] = (await $.call(C, "SHA1DigestToString", [L0["digest"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["s"], "kind": "function", "ptypes": ["RawByteString"]});
  U.func("SHA384", async function SHA384(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "sha": null, "digest": null};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "length", [L0["s"]])), $.ref(async () => L0["digest"], async ($t54) => { L0["digest"] = $t54; })])));
  L0["result"] = (await $.call(C, "SHA384DigestToString", [L0["digest"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["s"], "kind": "function", "ptypes": ["RawByteString"]});
  U.func("SHA512", async function SHA512(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "sha": null, "digest": null};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "length", [L0["s"]])), $.ref(async () => L0["digest"], async ($t55) => { L0["digest"] = $t55; })])));
  L0["result"] = (await $.call(C, "SHA512DigestToString", [L0["digest"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["s"], "kind": "function", "ptypes": ["RawByteString"]});
  U.method("THMAC_SHA1", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keylen": $.copyArg(p1), result: undefined, "i": 0, "k0": null, "k0xoripad": null};
  await $.fixArgs(L0, ["key", "keylen"]);
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k0"], "b"))])));
  if ($.truthy($.gt(L0["keylen"], (await $.call(C, "sizeof", [L0["k0"]]))))) {
    await $.stmt((await $.mcall((await $.v(C, "sha")), "Full", [L0["key"], L0["keylen"], $.ref(async () => (await $.mv(L0["k0"], "b160")), async ($t56) => { await $.mset(L0["k0"], "b160", $t56); })])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["key"], L0["k0"], L0["keylen"]])));
  }
  { const $t57 = 15;
    L0["i"] = 0;
    let $t58 = true;
    for (;;) {
      if (!$t58) { L0["i"] = $.succ(L0["i"], 1); }
      $t58 = false;
      if (!($.ord(L0["i"]) <= $.ord($t57))) break;
      { const $t59 = await $.iset((await $.mv(L0["k0xoripad"], "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 909522486)); if ($t59 !== undefined) { await $.mset(L0["k0xoripad"], "c", $t59); } }
      await $.tick();
    }
  }
  { const $t60 = 15;
    L0["i"] = 0;
    let $t61 = true;
    for (;;) {
      if (!$t61) { L0["i"] = $.succ(L0["i"], 1); }
      $t61 = false;
      if (!($.ord(L0["i"]) <= $.ord($t60))) break;
      { const $t62 = await $.iset((await $.mv((await $.v(C, "step7data")), "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 1549556828)); if ($t62 !== undefined) { await $.mset((await $.v(C, "step7data")), "c", $t62); } }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "sha")), "Init", []);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])));
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k0"], "b"))])));
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k0xoripad"], "b"))])));
  return L0.result;
}, {"params": ["key", "keylen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA1", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["msg", "msglen"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["msg"], L0["msglen"]])));
  return L0.result;
}, {"params": ["msg", "msglen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA1", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t63) => { await L0["result"].set($t63); })])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await $.ref_(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await L0["result"].get()), (await $.call(C, "sizeof", [(await L0["result"].get())]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t64) => { await L0["result"].set($t64); }), L0["noinit"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillZero", [(await $.mv((await $.v(C, "step7data")), "b"))])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["TSHA1Digest", "boolean"]});
  U.method("THMAC_SHA1", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined, "res": null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Done", [$.ref(async () => L0["res"], async ($t65) => { L0["res"] = $t65; }), L0["noinit"]])));
  await L0["result"].set((await $.call(C, "SHA1DigestToString", [L0["res"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillZero", [L0["res"]])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["RawUTF8", "boolean"]});
  U.method("THMAC_SHA1", "Compute", async function Compute(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), "result": $.asRef(p2), result: undefined, "temp": null};
  await $.fixArgs(L0, ["msg", "msglen"]);
  L0["temp"] = Self;
  await $.stmt((await $.mcall(L0["temp"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["temp"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t66) => { await L0["result"].set($t66); })])));
  return L0.result;
}, {"params": ["msg", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA1Digest"]});
  U.func("HMAC_SHA1", async function HMAC_SHA1(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "keylen": $.copyArg(p2), "msglen": $.copyArg(p3), "result": $.asRef(p4), result: undefined, "mac": null};
  await $.fixArgs(L0, ["key", "msg", "keylen", "msglen"]);
  await $.stmt((await $.mcall(L0["mac"], "Init", [L0["key"], L0["keylen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t67) => { await L0["result"].set($t67); })])));
  return L0.result;
}, {"params": ["key", "msg", "keylen", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer", "integer", "TSHA1Digest"]});
  U.func("HMAC_SHA1", async function HMAC_SHA1(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA1", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t68) => { await L0["result"].set($t68); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "TSHA1Digest"]});
  U.func("HMAC_SHA1", async function HMAC_SHA1(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA1", [L0["key"], (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "sizeof", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t69) => { await L0["result"].set($t69); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["TSHA1Digest", "RawByteString", "TSHA1Digest"]});
  U.func("PBKDF2_HMAC_SHA1", async function PBKDF2_HMAC_SHA1(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"password": $.copyArg(p0), "salt": $.copyArg(p1), "count": $.copyArg(p2), "result": $.asRef(p3), result: undefined, "i": 0, "tmp": null, "mac": null, "first": null};
  await $.fixArgs(L0, ["password", "salt", "count"]);
  await $.stmt((await $.call(C, "HMAC_SHA1", [L0["password"], $.add(L0["salt"], "\u0000\u0000\u0000\u0001"), $.ref(async () => (await L0["result"].get()), async ($t70) => { await L0["result"].set($t70); })])));
  if ($.truthy($.lt(L0["count"], 2))) {
    return L0.result;
  }
  L0["tmp"] = (await L0["result"].get());
  await $.stmt((await $.mcall(L0["first"], "Init", [(await $.call(C, "pointer", [L0["password"]])), (await $.call(C, "length", [L0["password"]]))])));
  { const $t71 = L0["count"];
    L0["i"] = 2;
    let $t72 = true;
    for (;;) {
      if (!$t72) { L0["i"] = $.succ(L0["i"], 1); }
      $t72 = false;
      if (!($.ord(L0["i"]) <= $.ord($t71))) break;
      L0["mac"] = L0["first"];
      await $.stmt((await $.mcall((await $.mv(L0["mac"], "sha")), "Update", [L0["tmp"], (await $.call(C, "sizeof", [L0["tmp"]]))])));
      await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => L0["tmp"], async ($t73) => { L0["tmp"] = $t73; }), true])));
      await $.stmt((await $.call(C, "XorMemory", [(await L0["result"].get()), L0["tmp"], (await $.call(C, "sizeof", [(await L0["result"].get())]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillcharFast", [L0["mac"], (await $.call(C, "sizeof", [L0["mac"]])), 0])));
  await $.stmt((await $.call(C, "FillcharFast", [L0["first"], (await $.call(C, "sizeof", [L0["first"]])), 0])));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["password", "salt", "count", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "Integer", "TSHA1Digest"]});
  U.method("THMAC_SHA256", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keylen": $.copyArg(p1), result: undefined, "i": 0, "k0": null, "k0xoripad": null};
  await $.fixArgs(L0, ["key", "keylen"]);
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k0"], "b"))])));
  if ($.truthy($.gt(L0["keylen"], (await $.call(C, "sizeof", [L0["k0"]]))))) {
    await $.stmt((await $.mcall((await $.v(C, "sha")), "Full", [L0["key"], L0["keylen"], $.ref(async () => (await $.mv(L0["k0"], "Lo")), async ($t74) => { await $.mset(L0["k0"], "Lo", $t74); })])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["key"], L0["k0"], L0["keylen"]])));
  }
  { const $t75 = 15;
    L0["i"] = 0;
    let $t76 = true;
    for (;;) {
      if (!$t76) { L0["i"] = $.succ(L0["i"], 1); }
      $t76 = false;
      if (!($.ord(L0["i"]) <= $.ord($t75))) break;
      { const $t77 = await $.iset((await $.mv(L0["k0xoripad"], "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 909522486)); if ($t77 !== undefined) { await $.mset(L0["k0xoripad"], "c", $t77); } }
      await $.tick();
    }
  }
  { const $t78 = 15;
    L0["i"] = 0;
    let $t79 = true;
    for (;;) {
      if (!$t79) { L0["i"] = $.succ(L0["i"], 1); }
      $t79 = false;
      if (!($.ord(L0["i"]) <= $.ord($t78))) break;
      { const $t80 = await $.iset((await $.mv((await $.v(C, "step7data")), "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 1549556828)); if ($t80 !== undefined) { await $.mset((await $.v(C, "step7data")), "c", $t80); } }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "sha")), "Init", []);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])));
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k0"], "b"))])));
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k0xoripad"], "b"))])));
  return L0.result;
}, {"params": ["key", "keylen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA256", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["msg", "msglen"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["msg"], L0["msglen"]])));
  return L0.result;
}, {"params": ["msg", "msglen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA256", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["msg"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["msg"], (await $.call(C, "sizeof", [L0["msg"]]))])));
  return L0.result;
}, {"params": ["msg"], "kind": "procedure", "ptypes": ["THash128"]});
  U.method("THMAC_SHA256", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["msg"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["msg"], (await $.call(C, "sizeof", [L0["msg"]]))])));
  return L0.result;
}, {"params": ["msg"], "kind": "procedure", "ptypes": ["THash256"]});
  U.method("THMAC_SHA256", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["msg"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["msg"]]))])));
  return L0.result;
}, {"params": ["msg"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("THMAC_SHA256", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t81) => { await L0["result"].set($t81); })])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await $.ref_(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await L0["result"].get()), (await $.call(C, "sizeof", [(await L0["result"].get())]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t82) => { await L0["result"].set($t82); }), L0["noinit"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillZero", [(await $.mv((await $.v(C, "step7data")), "b"))])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["TSHA256Digest", "boolean"]});
  U.method("THMAC_SHA256", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined, "res": null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Done", [$.ref(async () => L0["res"], async ($t83) => { L0["res"] = $t83; }), L0["noinit"]])));
  await L0["result"].set((await $.call(C, "SHA256DigestToString", [L0["res"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillZero", [L0["res"]])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["RawUTF8", "boolean"]});
  U.method("THMAC_SHA256", "Compute", async function Compute(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), "result": $.asRef(p2), result: undefined, "temp": null};
  await $.fixArgs(L0, ["msg", "msglen"]);
  L0["temp"] = Self;
  await $.stmt((await $.mcall(L0["temp"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["temp"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t84) => { await L0["result"].set($t84); })])));
  return L0.result;
}, {"params": ["msg", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA256Digest"]});
  U.func("HMAC_SHA256", async function HMAC_SHA256(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "keylen": $.copyArg(p2), "msglen": $.copyArg(p3), "result": $.asRef(p4), result: undefined, "mac": null};
  await $.fixArgs(L0, ["key", "msg", "keylen", "msglen"]);
  await $.stmt((await $.mcall(L0["mac"], "Init", [L0["key"], L0["keylen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t85) => { await L0["result"].set($t85); })])));
  return L0.result;
}, {"params": ["key", "msg", "keylen", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer", "integer", "TSHA256Digest"]});
  U.func("HMAC_SHA256", async function HMAC_SHA256(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA256", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t86) => { await L0["result"].set($t86); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "TSHA256Digest"]});
  U.func("HMAC_SHA256", async function HMAC_SHA256(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA256", [L0["key"], (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "sizeof", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t87) => { await L0["result"].set($t87); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["TSHA256Digest", "RawByteString", "TSHA256Digest"]});
  U.func("PBKDF2_HMAC_SHA256", async function PBKDF2_HMAC_SHA256(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"password": $.copyArg(p0), "salt": $.copyArg(p1), "count": $.copyArg(p2), "result": $.asRef(p3), "saltdefault": $.copyArg(p4), result: undefined, "i": 0, "tmp": null, "mac": null, "first": null};
  await $.fixArgs(L0, ["password", "salt", "count", "saltdefault"]);
  if ($.truthy($.eq(L0["salt"], ""))) {
    await $.stmt((await $.call(C, "HMAC_SHA256", [L0["password"], $.add(L0["saltdefault"], "\u0000\u0000\u0000\u0001"), $.ref(async () => (await L0["result"].get()), async ($t88) => { await L0["result"].set($t88); })])));
  } else {
    await $.stmt((await $.call(C, "HMAC_SHA256", [L0["password"], $.add(L0["salt"], "\u0000\u0000\u0000\u0001"), $.ref(async () => (await L0["result"].get()), async ($t89) => { await L0["result"].set($t89); })])));
  }
  if ($.truthy($.lt(L0["count"], 2))) {
    return L0.result;
  }
  L0["tmp"] = (await L0["result"].get());
  await $.stmt((await $.mcall(L0["first"], "Init", [(await $.call(C, "pointer", [L0["password"]])), (await $.call(C, "length", [L0["password"]]))])));
  { const $t90 = L0["count"];
    L0["i"] = 2;
    let $t91 = true;
    for (;;) {
      if (!$t91) { L0["i"] = $.succ(L0["i"], 1); }
      $t91 = false;
      if (!($.ord(L0["i"]) <= $.ord($t90))) break;
      L0["mac"] = L0["first"];
      await $.stmt((await $.mcall((await $.mv(L0["mac"], "sha")), "Update", [L0["tmp"], (await $.call(C, "sizeof", [L0["tmp"]]))])));
      await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => L0["tmp"], async ($t92) => { L0["tmp"] = $t92; }), true])));
      await $.stmt((await $.call(C, "XorMemoryPtrInt", [(await L0["result"].get()), L0["tmp"], $.shr((await $.call(C, "sizeof", [(await L0["result"].get())])), 3)])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillcharFast", [L0["first"], (await $.call(C, "sizeof", [L0["first"]])), 0])));
  await $.stmt((await $.call(C, "FillcharFast", [L0["mac"], (await $.call(C, "sizeof", [L0["mac"]])), 0])));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["password", "salt", "count", "result", "saltdefault"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "Integer", "TSHA256Digest", "RawByteString"]});
  U.func("PBKDF2_HMAC_SHA256", async function PBKDF2_HMAC_SHA256() { return $.notPorted("PBKDF2_HMAC_SHA256", "cannot assign to call"); }, {"params": ["password", "salt", "count", "result", "saltdefault"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "Integer", "THash256DynArray", "RawByteString"], "error": "cannot assign to call", "src": "procedure PBKDF2_HMAC_SHA256(const password,salt: RawByteString; count: Integer;\n  var result: THash256DynArray; const saltdefault: RawByteString);\nvar n,i: integer;\n    iter: RawByteString;\n    tmp: TSHA256Digest;\n    mac: THMAC_SHA256;\n    first: THMAC_SHA256;\nbegin\n  first.Init(pointer(password),length(password));\n  SetLength(iter,sizeof(integer));\n  for n := 0 to high(result) do begin\n    PInteger(iter)^ := bswap32(n+1); \n    if salt='' then\n      HMAC_SHA256(password,saltdefault+iter,result[n]) else\n      HMAC_SHA256(password,salt+iter,result[n]);\n    tmp := result[n];\n    for i := 2 to count do begin\n      mac := first; \n      mac.sha.Update(@tmp,sizeof(tmp));\n      mac.Done(tmp,true);\n      XorMemoryPtrInt(@result[n],@tmp,sizeof(result[n]) shr   3 );\n    end;\n  end;\n  FillZero(tmp);\n  FillcharFast(mac,sizeof(mac),0);\n  FillcharFast(first,sizeof(first),0);\nend;"});
  U.func("SHA256", async function SHA256(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "sha": null, "digest": null};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "length", [L0["s"]])), $.ref(async () => L0["digest"], async ($t96) => { L0["digest"] = $t96; })])));
  L0["result"] = (await $.call(C, "SHA256DigestToString", [L0["digest"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["s"], "kind": "function", "ptypes": ["RawByteString"]});
  U.func("SHA256", async function SHA256(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "len": $.copyArg(p1), result: null, "sha": null, "digest": null};
  await $.fixArgs(L0, ["data", "len"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [L0["data"], L0["len"], $.ref(async () => L0["digest"], async ($t97) => { L0["digest"] = $t97; })])));
  L0["result"] = (await $.call(C, "SHA256DigestToString", [L0["digest"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["Data", "Len"], "kind": "function", "ptypes": ["pointer", "integer"]});
  U.func("SHA256Digest", async function SHA256Digest(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "len": $.copyArg(p1), result: null, "sha": null};
  await $.fixArgs(L0, ["data", "len"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [L0["data"], L0["len"], $.ref(async () => L0["result"], async ($t98) => { L0["result"] = $t98; })])));
  return L0.result;
}, {"params": ["Data", "Len"], "kind": "function", "ptypes": ["pointer", "integer"]});
  U.func("SHA256Digest", async function SHA256Digest(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), result: null, "sha": null};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.mcall(L0["sha"], "Full", [(await $.call(C, "pointer", [L0["data"]])), (await $.call(C, "Length", [L0["data"]])), $.ref(async () => L0["result"], async ($t99) => { L0["result"] = $t99; })])));
  return L0.result;
}, {"params": ["Data"], "kind": "function", "ptypes": ["RawByteString"]});
  U.method("THMAC_SHA384", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keylen": $.copyArg(p1), result: undefined, "i": 0, "k0": $.sarr(), "k0xoripad": $.sarr()};
  await $.fixArgs(L0, ["key", "keylen"]);
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  if ($.truthy($.gt(L0["keylen"], (await $.call(C, "sizeof", [L0["k0"]]))))) {
    await $.stmt((await $.mcall((await $.v(C, "sha")), "Full", [L0["key"], L0["keylen"], (await $.call(C, "PSHA384Digest", [L0["k0"]]))])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["key"], L0["k0"], L0["keylen"]])));
  }
  { const $t100 = 31;
    L0["i"] = 0;
    let $t101 = true;
    for (;;) {
      if (!$t101) { L0["i"] = $.succ(L0["i"], 1); }
      $t101 = false;
      if (!($.ord(L0["i"]) <= $.ord($t100))) break;
      { const $t102 = await $.iset(L0["k0xoripad"], [L0["i"]], $.xor((await $.idx(L0["k0"], [L0["i"]])), 909522486)); if ($t102 !== undefined) { L0["k0xoripad"] = $t102; } }
      await $.tick();
    }
  }
  { const $t103 = 31;
    L0["i"] = 0;
    let $t104 = true;
    for (;;) {
      if (!$t104) { L0["i"] = $.succ(L0["i"], 1); }
      $t104 = false;
      if (!($.ord(L0["i"]) <= $.ord($t103))) break;
      { const $t105 = await $.iset((await $.v(C, "step7data")), [L0["i"]], $.xor((await $.idx(L0["k0"], [L0["i"]])), 1549556828)); if ($t105 !== undefined) { await $.set(C, "step7data", $t105); } }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "sha")), "Init", []);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]])), 0])));
  return L0.result;
}, {"params": ["key", "keylen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA384", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["msg", "msglen"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["msg"], L0["msglen"]])));
  return L0.result;
}, {"params": ["msg", "msglen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA384", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t106) => { await L0["result"].set($t106); })])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await $.ref_(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await L0["result"].get()), (await $.call(C, "sizeof", [(await L0["result"].get())]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t107) => { await L0["result"].set($t107); }), L0["noinit"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))])), 0])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["TSHA384Digest", "boolean"]});
  U.method("THMAC_SHA384", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined, "res": null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Done", [$.ref(async () => L0["res"], async ($t108) => { L0["res"] = $t108; }), L0["noinit"]])));
  await L0["result"].set((await $.call(C, "SHA384DigestToString", [L0["res"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillZero", [L0["res"]])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["RawUTF8", "boolean"]});
  U.method("THMAC_SHA384", "Compute", async function Compute(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), "result": $.asRef(p2), result: undefined, "temp": null};
  await $.fixArgs(L0, ["msg", "msglen"]);
  L0["temp"] = Self;
  await $.stmt((await $.mcall(L0["temp"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["temp"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t109) => { await L0["result"].set($t109); })])));
  return L0.result;
}, {"params": ["msg", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA384Digest"]});
  U.func("HMAC_SHA384", async function HMAC_SHA384(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "keylen": $.copyArg(p2), "msglen": $.copyArg(p3), "result": $.asRef(p4), result: undefined, "mac": null};
  await $.fixArgs(L0, ["key", "msg", "keylen", "msglen"]);
  await $.stmt((await $.mcall(L0["mac"], "Init", [L0["key"], L0["keylen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t110) => { await L0["result"].set($t110); })])));
  return L0.result;
}, {"params": ["key", "msg", "keylen", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer", "integer", "TSHA384Digest"]});
  U.func("HMAC_SHA384", async function HMAC_SHA384(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA384", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t111) => { await L0["result"].set($t111); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "TSHA384Digest"]});
  U.func("HMAC_SHA384", async function HMAC_SHA384(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA384", [L0["key"], (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "sizeof", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t112) => { await L0["result"].set($t112); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["TSHA384Digest", "RawByteString", "TSHA384Digest"]});
  U.func("PBKDF2_HMAC_SHA384", async function PBKDF2_HMAC_SHA384(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"password": $.copyArg(p0), "salt": $.copyArg(p1), "count": $.copyArg(p2), "result": $.asRef(p3), result: undefined, "i": 0, "tmp": null, "mac": null, "first": null};
  await $.fixArgs(L0, ["password", "salt", "count"]);
  await $.stmt((await $.call(C, "HMAC_SHA384", [L0["password"], $.add(L0["salt"], "\u0000\u0000\u0000\u0001"), $.ref(async () => (await L0["result"].get()), async ($t113) => { await L0["result"].set($t113); })])));
  if ($.truthy($.lt(L0["count"], 2))) {
    return L0.result;
  }
  L0["tmp"] = (await L0["result"].get());
  await $.stmt((await $.mcall(L0["first"], "Init", [(await $.call(C, "pointer", [L0["password"]])), (await $.call(C, "length", [L0["password"]]))])));
  { const $t114 = L0["count"];
    L0["i"] = 2;
    let $t115 = true;
    for (;;) {
      if (!$t115) { L0["i"] = $.succ(L0["i"], 1); }
      $t115 = false;
      if (!($.ord(L0["i"]) <= $.ord($t114))) break;
      L0["mac"] = L0["first"];
      await $.stmt((await $.mcall((await $.mv(L0["mac"], "sha")), "Update", [L0["tmp"], (await $.call(C, "sizeof", [L0["tmp"]]))])));
      await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => L0["tmp"], async ($t116) => { L0["tmp"] = $t116; }), true])));
      await $.stmt((await $.call(C, "XorMemoryPtrInt", [(await L0["result"].get()), L0["tmp"], $.shr((await $.call(C, "sizeof", [(await L0["result"].get())])), 3)])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillcharFast", [L0["mac"], (await $.call(C, "sizeof", [L0["mac"]])), 0])));
  await $.stmt((await $.call(C, "FillcharFast", [L0["first"], (await $.call(C, "sizeof", [L0["first"]])), 0])));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["password", "salt", "count", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "Integer", "TSHA384Digest"]});
  U.method("THMAC_SHA512", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keylen": $.copyArg(p1), result: undefined, "i": 0, "k0": $.sarr(), "k0xoripad": $.sarr()};
  await $.fixArgs(L0, ["key", "keylen"]);
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  if ($.truthy($.gt(L0["keylen"], (await $.call(C, "sizeof", [L0["k0"]]))))) {
    await $.stmt((await $.mcall((await $.v(C, "sha")), "Full", [L0["key"], L0["keylen"], (await $.call(C, "PSHA512Digest", [L0["k0"]]))])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["key"], L0["k0"], L0["keylen"]])));
  }
  { const $t117 = 31;
    L0["i"] = 0;
    let $t118 = true;
    for (;;) {
      if (!$t118) { L0["i"] = $.succ(L0["i"], 1); }
      $t118 = false;
      if (!($.ord(L0["i"]) <= $.ord($t117))) break;
      { const $t119 = await $.iset(L0["k0xoripad"], [L0["i"]], $.xor((await $.idx(L0["k0"], [L0["i"]])), 909522486)); if ($t119 !== undefined) { L0["k0xoripad"] = $t119; } }
      await $.tick();
    }
  }
  { const $t120 = 31;
    L0["i"] = 0;
    let $t121 = true;
    for (;;) {
      if (!$t121) { L0["i"] = $.succ(L0["i"], 1); }
      $t121 = false;
      if (!($.ord(L0["i"]) <= $.ord($t120))) break;
      { const $t122 = await $.iset((await $.v(C, "step7data")), [L0["i"]], $.xor((await $.idx(L0["k0"], [L0["i"]])), 1549556828)); if ($t122 !== undefined) { await $.set(C, "step7data", $t122); } }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "sha")), "Init", []);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]])), 0])));
  return L0.result;
}, {"params": ["key", "keylen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA512", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["msg", "msglen"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [L0["msg"], L0["msglen"]])));
  return L0.result;
}, {"params": ["msg", "msglen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_SHA512", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t123) => { await L0["result"].set($t123); })])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await $.ref_(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Update", [(await L0["result"].get()), (await $.call(C, "sizeof", [(await L0["result"].get())]))])));
  await $.stmt((await $.mcall((await $.v(C, "sha")), "Final", [$.ref(async () => (await L0["result"].get()), async ($t124) => { await L0["result"].set($t124); }), L0["noinit"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))])), 0])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["TSHA512Digest", "boolean"]});
  U.method("THMAC_SHA512", "Done", async function Done(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined, "res": null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Done", [$.ref(async () => L0["res"], async ($t125) => { L0["res"] = $t125; }), L0["noinit"]])));
  await L0["result"].set((await $.call(C, "SHA512DigestToString", [L0["res"]])));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillZero", [L0["res"]])));
  }
  return L0.result;
}, {"params": ["result", "NoInit"], "kind": "procedure", "ptypes": ["RawUTF8", "boolean"]});
  U.method("THMAC_SHA512", "Compute", async function Compute(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), "result": $.asRef(p2), result: undefined, "temp": null};
  await $.fixArgs(L0, ["msg", "msglen"]);
  L0["temp"] = Self;
  await $.stmt((await $.mcall(L0["temp"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["temp"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t126) => { await L0["result"].set($t126); })])));
  return L0.result;
}, {"params": ["msg", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA512Digest"]});
  U.func("HMAC_SHA512", async function HMAC_SHA512(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "keylen": $.copyArg(p2), "msglen": $.copyArg(p3), "result": $.asRef(p4), result: undefined, "mac": null};
  await $.fixArgs(L0, ["key", "msg", "keylen", "msglen"]);
  await $.stmt((await $.mcall(L0["mac"], "Init", [L0["key"], L0["keylen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Update", [L0["msg"], L0["msglen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => (await L0["result"].get()), async ($t127) => { await L0["result"].set($t127); })])));
  return L0.result;
}, {"params": ["key", "msg", "keylen", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer", "integer", "TSHA512Digest"]});
  U.func("HMAC_SHA512", async function HMAC_SHA512(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA512", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t128) => { await L0["result"].set($t128); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "TSHA512Digest"]});
  U.func("HMAC_SHA512", async function HMAC_SHA512(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_SHA512", [L0["key"], (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "sizeof", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t129) => { await L0["result"].set($t129); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["TSHA512Digest", "RawByteString", "TSHA512Digest"]});
  U.func("PBKDF2_HMAC_SHA512", async function PBKDF2_HMAC_SHA512(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"password": $.copyArg(p0), "salt": $.copyArg(p1), "count": $.copyArg(p2), "result": $.asRef(p3), result: undefined, "i": 0, "tmp": null, "mac": null, "first": null};
  await $.fixArgs(L0, ["password", "salt", "count"]);
  await $.stmt((await $.call(C, "HMAC_SHA512", [L0["password"], $.add(L0["salt"], "\u0000\u0000\u0000\u0001"), $.ref(async () => (await L0["result"].get()), async ($t130) => { await L0["result"].set($t130); })])));
  if ($.truthy($.lt(L0["count"], 2))) {
    return L0.result;
  }
  L0["tmp"] = (await L0["result"].get());
  await $.stmt((await $.mcall(L0["first"], "Init", [(await $.call(C, "pointer", [L0["password"]])), (await $.call(C, "length", [L0["password"]]))])));
  { const $t131 = L0["count"];
    L0["i"] = 2;
    let $t132 = true;
    for (;;) {
      if (!$t132) { L0["i"] = $.succ(L0["i"], 1); }
      $t132 = false;
      if (!($.ord(L0["i"]) <= $.ord($t131))) break;
      L0["mac"] = L0["first"];
      await $.stmt((await $.mcall((await $.mv(L0["mac"], "sha")), "Update", [L0["tmp"], (await $.call(C, "sizeof", [L0["tmp"]]))])));
      await $.stmt((await $.mcall(L0["mac"], "Done", [$.ref(async () => L0["tmp"], async ($t133) => { L0["tmp"] = $t133; }), true])));
      await $.stmt((await $.call(C, "XorMemoryPtrInt", [(await L0["result"].get()), L0["tmp"], $.shr((await $.call(C, "sizeof", [(await L0["result"].get())])), 3)])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillcharFast", [L0["mac"], (await $.call(C, "sizeof", [L0["mac"]])), 0])));
  await $.stmt((await $.call(C, "FillcharFast", [L0["first"], (await $.call(C, "sizeof", [L0["first"]])), 0])));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["password", "salt", "count", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "Integer", "TSHA512Digest"]});
  U.func("crc256cmix", async function crc256cmix(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"h1": $.copyArg(p0), "h2": $.copyArg(p1), "h": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["h1", "h2", "h"]);
  { const $t134 = await $.iset(L0["h"], [0], L0["h1"]); if ($t134 !== undefined) { L0["h"] = $t134; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t135) => { L0["h1"] = $t135; }), L0["h2"]])));
  { const $t136 = await $.iset(L0["h"], [1], L0["h1"]); if ($t136 !== undefined) { L0["h"] = $t136; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t137) => { L0["h1"] = $t137; }), L0["h2"]])));
  { const $t138 = await $.iset(L0["h"], [2], L0["h1"]); if ($t138 !== undefined) { L0["h"] = $t138; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t139) => { L0["h1"] = $t139; }), L0["h2"]])));
  { const $t140 = await $.iset(L0["h"], [3], L0["h1"]); if ($t140 !== undefined) { L0["h"] = $t140; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t141) => { L0["h1"] = $t141; }), L0["h2"]])));
  { const $t142 = await $.iset(L0["h"], [4], L0["h1"]); if ($t142 !== undefined) { L0["h"] = $t142; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t143) => { L0["h1"] = $t143; }), L0["h2"]])));
  { const $t144 = await $.iset(L0["h"], [5], L0["h1"]); if ($t144 !== undefined) { L0["h"] = $t144; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t145) => { L0["h1"] = $t145; }), L0["h2"]])));
  { const $t146 = await $.iset(L0["h"], [6], L0["h1"]); if ($t146 !== undefined) { L0["h"] = $t146; } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["h1"], async ($t147) => { L0["h1"] = $t147; }), L0["h2"]])));
  { const $t148 = await $.iset(L0["h"], [7], L0["h1"]); if ($t148 !== undefined) { L0["h"] = $t148; } }
  return L0.result;
}, {"params": ["h1", "h2", "h"], "kind": "procedure", "ptypes": ["cardinal", "cardinal", "PCardinalArray"]});
  U.func("HMAC_CRC256C", async function HMAC_CRC256C(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "keylen": $.copyArg(p2), "msglen": $.copyArg(p3), "result": $.asRef(p4), result: undefined, "i": 0, "h1": 0, "h2": 0, "k0": null, "k0xoripad": null, "step7data": null};
  await $.fixArgs(L0, ["key", "msg", "keylen", "msglen"]);
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  if ($.truthy($.gt(L0["keylen"], (await $.call(C, "sizeof", [L0["k0"]]))))) {
    await $.stmt((await $.call(C, "crc256c", [L0["key"], L0["keylen"], (await $.mv(L0["k0"], "Lo"))])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["key"], L0["k0"], L0["keylen"]])));
  }
  { const $t149 = 15;
    L0["i"] = 0;
    let $t150 = true;
    for (;;) {
      if (!$t150) { L0["i"] = $.succ(L0["i"], 1); }
      $t150 = false;
      if (!($.ord(L0["i"]) <= $.ord($t149))) break;
      { const $t151 = await $.iset((await $.mv(L0["k0xoripad"], "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 909522486)); if ($t151 !== undefined) { await $.mset(L0["k0xoripad"], "c", $t151); } }
      await $.tick();
    }
  }
  { const $t152 = 15;
    L0["i"] = 0;
    let $t153 = true;
    for (;;) {
      if (!$t153) { L0["i"] = $.succ(L0["i"], 1); }
      $t153 = false;
      if (!($.ord(L0["i"]) <= $.ord($t152))) break;
      { const $t154 = await $.iset((await $.mv(L0["step7data"], "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 1549556828)); if ($t154 !== undefined) { await $.mset(L0["step7data"], "c", $t154); } }
      await $.tick();
    }
  }
  L0["h1"] = (await $.call(C, "crc32c", [(await $.call(C, "crc32c", [0, L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])), L0["msg"], L0["msglen"]]));
  L0["h2"] = (await $.call(C, "crc32c", [(await $.call(C, "crc32c", [L0["h1"], L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])), L0["msg"], L0["msglen"]]));
  await $.stmt((await $.call(C, "crc256cmix", [L0["h1"], L0["h2"], (await L0["result"].get())])));
  L0["h1"] = (await $.call(C, "crc32c", [(await $.call(C, "crc32c", [0, L0["step7data"], (await $.call(C, "sizeof", [L0["step7data"]]))])), (await L0["result"].get()), (await $.call(C, "sizeof", [(await L0["result"].get())]))]));
  L0["h2"] = (await $.call(C, "crc32c", [(await $.call(C, "crc32c", [L0["h1"], L0["step7data"], (await $.call(C, "sizeof", [L0["step7data"]]))])), (await L0["result"].get()), (await $.call(C, "sizeof", [(await L0["result"].get())]))]));
  await $.stmt((await $.call(C, "crc256cmix", [L0["h1"], L0["h2"], (await L0["result"].get())])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["step7data"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  return L0.result;
}, {"params": ["key", "msg", "keylen", "msglen", "result"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer", "integer", "THash256"]});
  U.func("HMAC_CRC256C", async function HMAC_CRC256C(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_CRC256C", [L0["key"], (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "SizeOf", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t155) => { await L0["result"].set($t155); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["THash256", "RawByteString", "THash256"]});
  U.func("HMAC_CRC256C", async function HMAC_CRC256C(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "result": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["key", "msg"]);
  await $.stmt((await $.call(C, "HMAC_CRC256C", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["key"]])), (await $.call(C, "length", [L0["msg"]])), $.ref(async () => (await L0["result"].get()), async ($t156) => { await L0["result"].set($t156); })])));
  return L0.result;
}, {"params": ["key", "msg", "result"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString", "THash256"]});
  U.method("THMAC_CRC32C", "Init", async function Init(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["key"]);
  await $.stmt((await $.call(C, "Init", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "length", [L0["key"]]))])));
  return L0.result;
}, {"params": ["key"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("THMAC_CRC32C", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keylen": $.copyArg(p1), result: undefined, "i": 0, "k0": null, "k0xoripad": null};
  await $.fixArgs(L0, ["key", "keylen"]);
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  if ($.truthy($.gt(L0["keylen"], (await $.call(C, "sizeof", [L0["k0"]]))))) {
    await $.stmt((await $.call(C, "crc256c", [L0["key"], L0["keylen"], (await $.mv(L0["k0"], "Lo"))])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["key"], L0["k0"], L0["keylen"]])));
  }
  { const $t157 = 15;
    L0["i"] = 0;
    let $t158 = true;
    for (;;) {
      if (!$t158) { L0["i"] = $.succ(L0["i"], 1); }
      $t158 = false;
      if (!($.ord(L0["i"]) <= $.ord($t157))) break;
      { const $t159 = await $.iset((await $.mv(L0["k0xoripad"], "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 909522486)); if ($t159 !== undefined) { await $.mset(L0["k0xoripad"], "c", $t159); } }
      await $.tick();
    }
  }
  { const $t160 = 15;
    L0["i"] = 0;
    let $t161 = true;
    for (;;) {
      if (!$t161) { L0["i"] = $.succ(L0["i"], 1); }
      $t161 = false;
      if (!($.ord(L0["i"]) <= $.ord($t160))) break;
      { const $t162 = await $.iset((await $.mv((await $.v(C, "step7data")), "c")), [L0["i"]], $.xor((await $.idx((await $.mv(L0["k0"], "c")), [L0["i"]])), 1549556828)); if ($t162 !== undefined) { await $.mset((await $.v(C, "step7data")), "c", $t162); } }
      await $.tick();
    }
  }
  await $.set(C, "seed", (await $.call(C, "crc32c", [0, L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]]))])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0"], (await $.call(C, "sizeof", [L0["k0"]])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [L0["k0xoripad"], (await $.call(C, "sizeof", [L0["k0xoripad"]])), 0])));
  return L0.result;
}, {"params": ["key", "keylen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_CRC32C", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["msg", "msglen"]);
  await $.set(C, "seed", (await $.call(C, "crc32c", [(await $.v(C, "seed")), L0["msg"], L0["msglen"]])));
  return L0.result;
}, {"params": ["msg", "msglen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("THMAC_CRC32C", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["msg"]);
  await $.set(C, "seed", (await $.call(C, "crc32c", [(await $.v(C, "seed")), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["msg"]]))])));
  return L0.result;
}, {"params": ["msg"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("THMAC_CRC32C", "Done", async function Done(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["noinit"]);
  L0["result"] = (await $.call(C, "crc32c", [(await $.v(C, "seed")), (await $.ref_(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))]))]));
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillcharFast", [Self, (await $.call(C, "sizeof", [Self])), 0])));
  }
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("THMAC_CRC32C", "Compute", async function Compute(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.copyArg(p0), "msglen": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["msg", "msglen"]);
  L0["result"] = (await $.call(C, "crc32c", [(await $.call(C, "crc32c", [(await $.v(C, "seed")), L0["msg"], L0["msglen"]])), (await $.ref_(C, "step7data")), (await $.call(C, "sizeof", [(await $.v(C, "step7data"))]))]));
  return L0.result;
}, {"params": ["msg", "msglen"], "kind": "function", "ptypes": ["pointer", "integer"]});
  U.func("HMAC_CRC32C", async function HMAC_CRC32C(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), "keylen": $.copyArg(p2), "msglen": $.copyArg(p3), result: 0, "mac": null};
  await $.fixArgs(L0, ["key", "msg", "keylen", "msglen"]);
  await $.stmt((await $.mcall(L0["mac"], "Init", [L0["key"], L0["keylen"]])));
  await $.stmt((await $.mcall(L0["mac"], "Update", [L0["msg"], L0["msglen"]])));
  L0["result"] = (await $.mv(L0["mac"], "Done"));
  return L0.result;
}, {"params": ["key", "msg", "keylen", "msglen"], "kind": "function", "ptypes": ["pointer", "pointer", "integer", "integer"]});
  U.func("HMAC_CRC32C", async function HMAC_CRC32C(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["key", "msg"]);
  L0["result"] = (await $.callv(L0["hmac_crc32c"], [L0["key"], (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "SizeOf", [L0["key"]])), (await $.call(C, "length", [L0["msg"]]))]));
  return L0.result;
}, {"params": ["key", "msg"], "kind": "function", "ptypes": ["THash256", "RawByteString"]});
  U.func("HMAC_CRC32C", async function HMAC_CRC32C(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "msg": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["key", "msg"]);
  L0["result"] = (await $.callv(L0["hmac_crc32c"], [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["msg"]])), (await $.call(C, "length", [L0["key"]])), (await $.call(C, "length", [L0["msg"]]))]));
  return L0.result;
}, {"params": ["key", "msg"], "kind": "function", "ptypes": ["RawByteString", "RawByteString"]});
  U.func("SHA1SelfTest", async function SHA1SelfTest(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "s": null, "sha": null, "digest": null};
  L0["test1out"] = [169, 153, 62, 54, 71, 6, 129, 106, 186, 62, 37, 113, 120, 80, 194, 108, 156, 208, 216, 157];
  L0["test2out"] = [132, 152, 62, 68, 28, 59, 210, 110, 186, 174, 74, 161, 249, 81, 41, 229, 229, 70, 112, 241];
  L0["singletest"] = $.fn(async function SingleTest(p0, p1) {
  const L1 = {"s": $.copyArg(p0), "tdig": $.copyArg(p1), result: false, "sha": null, "digest": null, "i": 0};
  await $.fixArgs(L1, ["s", "tdig"]);
  await $.stmt((await $.mcall(L1["sha"], "Full", [(await $.call(C, "pointer", [L1["s"]])), (await $.call(C, "length", [L1["s"]])), $.ref(async () => L1["digest"], async ($t163) => { L1["digest"] = $t163; })])));
  L1["result"] = (await $.call(C, "IsEqual", [L1["digest"], L1["tdig"]]));
  if ($.truthy($.not(L1["result"]))) {
    return L1.result;
  }
  { const $t164 = (await $.call(C, "length", [L1["s"]]));
    L1["i"] = 1;
    let $t165 = true;
    for (;;) {
      if (!$t165) { L1["i"] = $.succ(L1["i"], 1); }
      $t165 = false;
      if (!($.ord(L1["i"]) <= $.ord($t164))) break;
      await $.stmt((await $.mcall(L1["sha"], "Update", [(await $.idx(L1["s"], [L1["i"]])), 1])));
      await $.tick();
    }
  }
  await $.stmt((await $.mcall(L1["sha"], "Final", [$.ref(async () => L1["digest"], async ($t166) => { L1["digest"] = $t166; })])));
  L1["result"] = (await $.call(C, "IsEqual", [L1["digest"], L1["tdig"]]));
  return L1.result;
});
  L0["result"] = (await $.and_((await $.callv(L0["singletest"], ["abc", L0["test1out"]])), async () => (await $.callv(L0["singletest"], ["abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq", L0["test2out"]]))));
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  L0["s"] = "Wikipedia, l'encyclopedie libre et gratuite";
  await $.stmt((await $.mcall(L0["sha"], "Full", [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "length", [L0["s"]])), $.ref(async () => L0["digest"], async ($t167) => { L0["digest"] = $t167; })])));
  L0["result"] = $.eq((await $.call(C, "SHA1DigestToString", [L0["digest"]])), "c18cc65028bbdc147288a2d136313287782b9c73");
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "HMAC_SHA1", ["", "", $.ref(async () => L0["digest"], async ($t168) => { L0["digest"] = $t168; })])));
  L0["result"] = $.eq((await $.call(C, "SHA1DigestToString", [L0["digest"]])), "fbdb1d1b18aa6c08324b7d64b71fb76370690e1d");
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "HMAC_SHA1", ["key", "The quick brown fox jumps over the lazy dog", $.ref(async () => L0["digest"], async ($t169) => { L0["digest"] = $t169; })])));
  L0["result"] = $.eq((await $.call(C, "SHA1DigestToString", [L0["digest"]])), "de7c9b85b8b78aa6bc8a7a36f70a90701c9db4d9");
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PBKDF2_HMAC_SHA1", ["password", "salt", 1, $.ref(async () => L0["digest"], async ($t170) => { L0["digest"] = $t170; })])));
  L0["s"] = (await $.call(C, "SHA1DigestToString", [L0["digest"]]));
  L0["result"] = $.eq(L0["s"], "0c60c80f961f0e71f3a9b524af6012062fe037a6");
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PBKDF2_HMAC_SHA1", ["password", "salt", 2, $.ref(async () => L0["digest"], async ($t171) => { L0["digest"] = $t171; })])));
  L0["s"] = (await $.call(C, "SHA1DigestToString", [L0["digest"]]));
  L0["result"] = $.eq(L0["s"], "ea6c014dc72d6f8ccd1ed92ace1d41f0d8de8957");
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PBKDF2_HMAC_SHA1", ["password", "salt", 4096, $.ref(async () => L0["digest"], async ($t172) => { L0["digest"] = $t172; })])));
  L0["s"] = (await $.call(C, "SHA1DigestToString", [L0["digest"]]));
  L0["result"] = $.eq(L0["s"], "4b007901b765489abead49d926f721d065a429c1");
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("AESSelfTest", async function AESSelfTest() { return $.notPorted("AESSelfTest", "cannot assign to call"); }, {"params": ["onlytables"], "kind": "function", "ptypes": ["Boolean"], "error": "cannot assign to call", "src": "function AESSelfTest(onlytables: Boolean): boolean;\nvar A: TAES;\n    st: RawByteString;\n    Key: TSHA256Digest;\n    s,b,p: TAESBlock;\n    i,k,ks: integer;\nbegin\n  \n  result := (PtrUInt(@TD0)+$400=PtrUInt(@TD1))and(PtrUInt(@TD0)+$800=PtrUInt(@TD2))\n    and(PtrUInt(@TD0)+$C00=PtrUInt(@TD3))and(PtrUInt(@TD0)+$1000=PtrUInt(@TE0))\n    and(PtrUInt(@TD0)+$1400=PtrUInt(@TE1))and(PtrUInt(@TD0)+$1800=PtrUInt(@TE2))\n    and(PtrUInt(@TD0)+$1C00=PtrUInt(@TE3))and\n    (SBox[255]=$16)and(InvSBox[0]=$52)and\n    (Te0[0]=$a56363c6)and(Te0[255]=$3a16162c)and\n    (Te1[0]=$6363c6a5)and(Te1[255]=$16162c3a)and\n    (Te3[0]=$c6a56363)and(Te3[255]=$2c3a1616)and\n    (Td0[0]=$50a7f451)and(Td0[99]=0)and(Td0[255]=$4257b8d0)and\n    (Td3[0]=$5150a7f4)and(Td3[255]=$d04257b8);\n  if onlytables or not result then\n    exit;\n  \n  result := false;\n  Randomize;\n  st := '1234essai';\n  PInteger(@st[1])^ := Random(MaxInt);\n  for k := 0 to 2 do begin\n    ks := 128+k*64; \n\n    for i := 1 to 100 do begin\n      SHA256Weak(st,Key);\n      moveFast(Key,s,16);\n      A.EncryptInit(Key,ks);\n      A.Encrypt(s,b);\n      A.Done;\n      A.DecryptInit(Key,ks);\n      A.Decrypt(b,p);\n      A.Done;\n      if not IsEqual(p,s) then begin\n        writeln('AESSelfTest compareError with keysize=',ks);\n        exit;\n      end;\n      st := st+AnsiChar(Random(255));\n    end;\n  end;\n  result := true;\nend;"});
  U.method("TAES", "Encrypt", async function Encrypt(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"b": $.asRef(p0), result: undefined};
  await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "DoBlock", [(await $.v(C, "Context")), (await L0["b"].get()), (await L0["b"].get())])));
  return L0.result;
}, {"params": ["B"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.func("aesencryptpas", async function aesencryptpas(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"ctxt": $.copyArg(p0), "bi": $.copyArg(p1), "bo": $.copyArg(p2), result: undefined, "t": null, "s0": 0, "s1": 0, "s2": 0, "s3": 0, "t0": 0, "t1": 0, "t2": 0, "t3": 0, "pk": null};
  await $.fixArgs(L0, ["ctxt", "bi", "bo"]);
  L0["pk"] = (await $.mref(L0["ctxt"], "RK"));
  L0["s0"] = $.xor((await $.idx(L0["bi"], [0])), (await $.idx(L0["pk"], [0])));
  L0["s1"] = $.xor((await $.idx(L0["bi"], [1])), (await $.idx(L0["pk"], [1])));
  L0["s2"] = $.xor((await $.idx(L0["bi"], [2])), (await $.idx(L0["pk"], [2])));
  L0["s3"] = $.xor((await $.idx(L0["bi"], [3])), (await $.idx(L0["pk"], [3])));
  L0["t"] = (await $.ref_(C, "Te0"));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [4])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [5])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [6])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [7])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [8])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [9])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [10])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [11])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [12])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [13])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [14])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [15])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [16])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [17])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [18])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [19])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [20])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [21])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [22])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [23])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [24])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [25])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [26])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [27])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [28])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [29])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [30])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [31])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [32])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [33])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [34])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [35])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [36])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [37])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [38])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [39])));
  if ($.truthy($.gt((await $.mv(L0["ctxt"], "rounds")), 10))) {
    L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [40])));
    L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [41])));
    L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [42])));
    L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [43])));
    L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [44])));
    L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [45])));
    L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [46])));
    L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [47])));
    if ($.truthy($.gt((await $.mv(L0["ctxt"], "rounds")), 12))) {
      L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [48])));
      L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [49])));
      L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [50])));
      L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [51])));
      L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [52])));
      L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [53])));
      L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [54])));
      L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [55])));
    }
  }
  await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["pk"]])), $.shl((await $.mv(L0["ctxt"], "rounds")), 4)])));
  { const $t173 = await $.iset(L0["bo"], [0], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "SBox")), [(await $.and_(L0["t0"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t1"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t2"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "SBox")), [$.shr(L0["t3"], 24)]))), 24))), (await $.idx(L0["pk"], [0])))); if ($t173 !== undefined) { L0["bo"] = $t173; } }
  { const $t174 = await $.iset(L0["bo"], [1], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "SBox")), [(await $.and_(L0["t1"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t2"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t3"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "SBox")), [$.shr(L0["t0"], 24)]))), 24))), (await $.idx(L0["pk"], [1])))); if ($t174 !== undefined) { L0["bo"] = $t174; } }
  { const $t175 = await $.iset(L0["bo"], [2], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "SBox")), [(await $.and_(L0["t2"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t3"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t0"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "SBox")), [$.shr(L0["t1"], 24)]))), 24))), (await $.idx(L0["pk"], [2])))); if ($t175 !== undefined) { L0["bo"] = $t175; } }
  { const $t176 = await $.iset(L0["bo"], [3], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "SBox")), [(await $.and_(L0["t3"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t0"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_($.shr(L0["t1"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "SBox")), [$.shr(L0["t2"], 24)]))), 24))), (await $.idx(L0["pk"], [3])))); if ($t176 !== undefined) { L0["bo"] = $t176; } }
  return L0.result;
}, {"params": ["ctxt", "bi", "bo"], "kind": "procedure", "ptypes": ["TAESContext", "PWA4", "PWA4"]});
  U.method("TAES", "Encrypt", async function Encrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bi": $.copyArg(p0), "bo": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["bi"]);
  await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "DoBlock", [(await $.v(C, "Context")), L0["bi"], (await L0["bo"].get())])));
  return L0.result;
}, {"params": ["BI", "BO"], "kind": "procedure", "ptypes": ["TAESBlock", "TAESBlock"]});
  U.method("TAES", "EncryptInit", async function EncryptInit(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), result: false, "nk": 0, "ctx": $.rec("taescontext")};
  await $.fixArgs(L0, ["key", "keysize"]);
  L0["shift"] = $.fn(async function Shift(p0, p1) {
  const L1 = {"keysize": $.copyArg(p0), "pk": $.copyArg(p1), result: undefined, "i": 0, "temp": 0};
  await $.fixArgs(L1, ["keysize", "pk"]);
  { const $t177 = L1["keysize"];
    if ($.eq($t177, 128)) {
      { const $t178 = 9;
        L1["i"] = 0;
        let $t179 = true;
        for (;;) {
          if (!$t179) { L1["i"] = $.succ(L1["i"], 1); }
          $t179 = false;
          if (!($.ord(L1["i"]) <= $.ord($t178))) break;
          L1["temp"] = (await $.idx(L1["pk"], [3]));
          { const $t180 = await $.iset(L1["pk"], [4], $.xor($.xor($.xor($.xor($.xor((((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 8)), async () => 255))])))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 16)), async () => 255))]))), 8))), ($.shl(((await $.idx((await $.v(C, "SBox")), [($.shr(L1["temp"], 24))]))), 16))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_((L1["temp"]), async () => 255))]))), 24))), (await $.idx(L1["pk"], [0]))), (await $.idx((await $.v(C, "RCon")), [L1["i"]])))); if ($t180 !== undefined) { L1["pk"] = $t180; } }
          { const $t181 = await $.iset(L1["pk"], [5], $.xor((await $.idx(L1["pk"], [1])), (await $.idx(L1["pk"], [4])))); if ($t181 !== undefined) { L1["pk"] = $t181; } }
          { const $t182 = await $.iset(L1["pk"], [6], $.xor((await $.idx(L1["pk"], [2])), (await $.idx(L1["pk"], [5])))); if ($t182 !== undefined) { L1["pk"] = $t182; } }
          { const $t183 = await $.iset(L1["pk"], [7], $.xor((await $.idx(L1["pk"], [3])), (await $.idx(L1["pk"], [6])))); if ($t183 !== undefined) { L1["pk"] = $t183; } }
          await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L1["pk"]])), $.mul(4, 4)])));
          await $.tick();
        }
      }
    }
    else if ($.eq($t177, 192)) {
      { const $t184 = 7;
        L1["i"] = 0;
        let $t185 = true;
        for (;;) {
          if (!$t185) { L1["i"] = $.succ(L1["i"], 1); }
          $t185 = false;
          if (!($.ord(L1["i"]) <= $.ord($t184))) break;
          L1["temp"] = (await $.idx(L1["pk"], [5]));
          { const $t186 = await $.iset(L1["pk"], [6], $.xor($.xor($.xor($.xor($.xor((((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 8)), async () => 255))])))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 16)), async () => 255))]))), 8))), ($.shl(((await $.idx((await $.v(C, "SBox")), [($.shr(L1["temp"], 24))]))), 16))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_((L1["temp"]), async () => 255))]))), 24))), (await $.idx(L1["pk"], [0]))), (await $.idx((await $.v(C, "RCon")), [L1["i"]])))); if ($t186 !== undefined) { L1["pk"] = $t186; } }
          { const $t187 = await $.iset(L1["pk"], [7], $.xor((await $.idx(L1["pk"], [1])), (await $.idx(L1["pk"], [6])))); if ($t187 !== undefined) { L1["pk"] = $t187; } }
          { const $t188 = await $.iset(L1["pk"], [8], $.xor((await $.idx(L1["pk"], [2])), (await $.idx(L1["pk"], [7])))); if ($t188 !== undefined) { L1["pk"] = $t188; } }
          { const $t189 = await $.iset(L1["pk"], [9], $.xor((await $.idx(L1["pk"], [3])), (await $.idx(L1["pk"], [8])))); if ($t189 !== undefined) { L1["pk"] = $t189; } }
          if ($.truthy($.eq(L1["i"], 7))) {
            return L1.result;
          }
          { const $t190 = await $.iset(L1["pk"], [10], $.xor((await $.idx(L1["pk"], [4])), (await $.idx(L1["pk"], [9])))); if ($t190 !== undefined) { L1["pk"] = $t190; } }
          { const $t191 = await $.iset(L1["pk"], [11], $.xor((await $.idx(L1["pk"], [5])), (await $.idx(L1["pk"], [10])))); if ($t191 !== undefined) { L1["pk"] = $t191; } }
          await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L1["pk"]])), $.mul(6, 4)])));
          await $.tick();
        }
      }
    }
    else {
      { const $t192 = 6;
        L1["i"] = 0;
        let $t193 = true;
        for (;;) {
          if (!$t193) { L1["i"] = $.succ(L1["i"], 1); }
          $t193 = false;
          if (!($.ord(L1["i"]) <= $.ord($t192))) break;
          L1["temp"] = (await $.idx(L1["pk"], [7]));
          { const $t194 = await $.iset(L1["pk"], [8], $.xor($.xor($.xor($.xor($.xor((((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 8)), async () => 255))])))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 16)), async () => 255))]))), 8))), ($.shl(((await $.idx((await $.v(C, "SBox")), [($.shr(L1["temp"], 24))]))), 16))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_((L1["temp"]), async () => 255))]))), 24))), (await $.idx(L1["pk"], [0]))), (await $.idx((await $.v(C, "RCon")), [L1["i"]])))); if ($t194 !== undefined) { L1["pk"] = $t194; } }
          { const $t195 = await $.iset(L1["pk"], [9], $.xor((await $.idx(L1["pk"], [1])), (await $.idx(L1["pk"], [8])))); if ($t195 !== undefined) { L1["pk"] = $t195; } }
          { const $t196 = await $.iset(L1["pk"], [10], $.xor((await $.idx(L1["pk"], [2])), (await $.idx(L1["pk"], [9])))); if ($t196 !== undefined) { L1["pk"] = $t196; } }
          { const $t197 = await $.iset(L1["pk"], [11], $.xor((await $.idx(L1["pk"], [3])), (await $.idx(L1["pk"], [10])))); if ($t197 !== undefined) { L1["pk"] = $t197; } }
          if ($.truthy($.eq(L1["i"], 6))) {
            return L1.result;
          }
          L1["temp"] = (await $.idx(L1["pk"], [11]));
          { const $t198 = await $.iset(L1["pk"], [12], $.xor($.xor($.xor($.xor((((await $.idx((await $.v(C, "SBox")), [(await $.and_((L1["temp"]), async () => 255))])))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 8)), async () => 255))]))), 8))), ($.shl(((await $.idx((await $.v(C, "SBox")), [(await $.and_(($.shr(L1["temp"], 16)), async () => 255))]))), 16))), ($.shl(((await $.idx((await $.v(C, "SBox")), [($.shr(L1["temp"], 24))]))), 24))), (await $.idx(L1["pk"], [4])))); if ($t198 !== undefined) { L1["pk"] = $t198; } }
          { const $t199 = await $.iset(L1["pk"], [13], $.xor((await $.idx(L1["pk"], [5])), (await $.idx(L1["pk"], [12])))); if ($t199 !== undefined) { L1["pk"] = $t199; } }
          { const $t200 = await $.iset(L1["pk"], [14], $.xor((await $.idx(L1["pk"], [6])), (await $.idx(L1["pk"], [13])))); if ($t200 !== undefined) { L1["pk"] = $t200; } }
          { const $t201 = await $.iset(L1["pk"], [15], $.xor((await $.idx(L1["pk"], [7])), (await $.idx(L1["pk"], [14])))); if ($t201 !== undefined) { L1["pk"] = $t201; } }
          await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L1["pk"]])), $.mul(8, 4)])));
          await $.tick();
        }
      }
    }
  }
  return L1.result;
});
  L0["result"] = true;
  await $.mset(L0["ctx"], "Initialized", true);
  if ($.truthy((await $.and_((await $.and_(($.ne(L0["keysize"], 128)), async () => ($.ne(L0["keysize"], 192)))), async () => ($.ne(L0["keysize"], 256)))))) {
    L0["result"] = false;
    await $.mset(L0["ctx"], "Initialized", false);
    return L0.result;
  }
  L0["nk"] = $.idiv(L0["keysize"], 32);
  await $.stmt((await $.call(C, "MoveFast", [L0["key"], (await $.mv(L0["ctx"], "RK")), $.mul(4, L0["nk"])])));
  await $.mset(L0["ctx"], "DoBlock", (await $.ref_(C, "aesencryptpas")));
  await $.mset(L0["ctx"], "Rounds", $.add(6, L0["nk"]));
  await $.mset(L0["ctx"], "KeyBits", L0["keysize"]);
  await $.stmt((await $.callv(L0["shift"], [L0["keysize"], (await $.call(C, "pointer", [(await $.mref(L0["ctx"], "RK"))]))])));
  return L0.result;
}, {"params": ["Key", "KeySize"], "kind": "function", "ptypes": [null, "cardinal"]});
  U.func("aesdecryptpas", async function aesdecryptpas(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"ctxt": $.copyArg(p0), "bi": $.copyArg(p1), "bo": $.copyArg(p2), result: undefined, "s0": 0, "s1": 0, "s2": 0, "s3": 0, "t0": 0, "t1": 0, "t2": 0, "t3": 0, "pk": null, "t": null};
  await $.fixArgs(L0, ["ctxt", "bi", "bo"]);
  L0["t"] = (await $.ref_(C, "Td0"));
  L0["pk"] = (await $.call(C, "PAWk", [(await $.mref(L0["ctxt"], "RK"))]));
  L0["s0"] = $.xor((await $.idx(L0["bi"], [0])), (await $.idx(L0["pk"], [0])));
  L0["s1"] = $.xor((await $.idx(L0["bi"], [1])), (await $.idx(L0["pk"], [1])));
  L0["s2"] = $.xor((await $.idx(L0["bi"], [2])), (await $.idx(L0["pk"], [2])));
  L0["s3"] = $.xor((await $.idx(L0["bi"], [3])), (await $.idx(L0["pk"], [3])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [4])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [5])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [6])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [7])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [8])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [9])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [10])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [11])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [12])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [13])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [14])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [15])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [16])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [17])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [18])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [19])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [20])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [21])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [22])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [23])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [24])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [25])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [26])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [27])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [28])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [29])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [30])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [31])));
  L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [32])));
  L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [33])));
  L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [34])));
  L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [35])));
  L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [36])));
  L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [37])));
  L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [38])));
  L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [39])));
  if ($.truthy($.gt((await $.mv(L0["ctxt"], "rounds")), 10))) {
    L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [40])));
    L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [41])));
    L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [42])));
    L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [43])));
    L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [44])));
    L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [45])));
    L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [46])));
    L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [47])));
    if ($.truthy($.gt((await $.mv(L0["ctxt"], "rounds")), 12))) {
      L0["s0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t1"], 24))]))), (await $.idx(L0["pk"], [48])));
      L0["s1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t2"], 24))]))), (await $.idx(L0["pk"], [49])));
      L0["s2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t3"], 24))]))), (await $.idx(L0["pk"], [50])));
      L0["s3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["t3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["t2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["t1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["t0"], 24))]))), (await $.idx(L0["pk"], [51])));
      L0["t0"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s0"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s3"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s2"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s1"], 24))]))), (await $.idx(L0["pk"], [52])));
      L0["t1"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s1"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s0"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s3"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s2"], 24))]))), (await $.idx(L0["pk"], [53])));
      L0["t2"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s2"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s1"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s0"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s3"], 24))]))), (await $.idx(L0["pk"], [54])));
      L0["t3"] = $.xor($.xor($.xor($.xor((await $.idx(L0["t"], [(await $.and_(L0["s3"], async () => 255))])), (await $.idx(L0["t"], [$.add(256, (await $.and_($.shr(L0["s2"], 8), async () => 255)))]))), (await $.idx(L0["t"], [$.add(512, (await $.and_($.shr(L0["s1"], 16), async () => 255)))]))), (await $.idx(L0["t"], [$.add(768, $.shr(L0["s0"], 24))]))), (await $.idx(L0["pk"], [55])));
    }
  }
  await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["pk"]])), ($.shl((await $.mv(L0["ctxt"], "rounds")), 4))])));
  { const $t202 = await $.iset(L0["bo"], [0], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_(L0["t0"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t3"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t2"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [$.shr(L0["t1"], 24)]))), 24))), (await $.idx(L0["pk"], [0])))); if ($t202 !== undefined) { L0["bo"] = $t202; } }
  { const $t203 = await $.iset(L0["bo"], [1], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_(L0["t1"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t0"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t3"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [$.shr(L0["t2"], 24)]))), 24))), (await $.idx(L0["pk"], [1])))); if ($t203 !== undefined) { L0["bo"] = $t203; } }
  { const $t204 = await $.iset(L0["bo"], [2], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_(L0["t2"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t1"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t0"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [$.shr(L0["t3"], 24)]))), 24))), (await $.idx(L0["pk"], [2])))); if ($t204 !== undefined) { L0["bo"] = $t204; } }
  { const $t205 = await $.iset(L0["bo"], [3], $.xor(($.xor($.xor($.xor(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_(L0["t3"], async () => 255))]))), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t2"], 8), async () => 255))]))), 8)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [(await $.and_($.shr(L0["t1"], 16), async () => 255))]))), 16)), $.shl(((await $.idx((await $.v(C, "InvSBox")), [$.shr(L0["t0"], 24)]))), 24))), (await $.idx(L0["pk"], [3])))); if ($t205 !== undefined) { L0["bo"] = $t205; } }
  return L0.result;
}, {"params": ["ctxt", "bi", "bo"], "kind": "procedure", "ptypes": ["TAESContext", "PWA4", "PWA4"]});
  U.func("MakeDecrKey", async function MakeDecrKey(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rounds": $.copyArg(p0), "k": $.copyArg(p1), result: undefined, "x": 0, "i": 0, "j": 0, "t": null, "s": null};
  await $.fixArgs(L0, ["rounds", "k"]);
  L0["i"] = 0;
  L0["j"] = $.mul(4, L0["rounds"]);
  while ($.truthy($.lt(L0["i"], L0["j"]))) {
    L0["x"] = (await $.idx(L0["k"], [L0["i"]]));
    { const $t206 = await $.iset(L0["k"], [L0["i"]], (await $.idx(L0["k"], [L0["j"]]))); if ($t206 !== undefined) { L0["k"] = $t206; } }
    { const $t207 = await $.iset(L0["k"], [L0["j"]], L0["x"]); if ($t207 !== undefined) { L0["k"] = $t207; } }
    L0["x"] = (await $.idx(L0["k"], [$.add(L0["i"], 1)]));
    { const $t208 = await $.iset(L0["k"], [$.add(L0["i"], 1)], (await $.idx(L0["k"], [$.add(L0["j"], 1)]))); if ($t208 !== undefined) { L0["k"] = $t208; } }
    { const $t209 = await $.iset(L0["k"], [$.add(L0["j"], 1)], L0["x"]); if ($t209 !== undefined) { L0["k"] = $t209; } }
    L0["x"] = (await $.idx(L0["k"], [$.add(L0["i"], 2)]));
    { const $t210 = await $.iset(L0["k"], [$.add(L0["i"], 2)], (await $.idx(L0["k"], [$.add(L0["j"], 2)]))); if ($t210 !== undefined) { L0["k"] = $t210; } }
    { const $t211 = await $.iset(L0["k"], [$.add(L0["j"], 2)], L0["x"]); if ($t211 !== undefined) { L0["k"] = $t211; } }
    L0["x"] = (await $.idx(L0["k"], [$.add(L0["i"], 3)]));
    { const $t212 = await $.iset(L0["k"], [$.add(L0["i"], 3)], (await $.idx(L0["k"], [$.add(L0["j"], 3)]))); if ($t212 !== undefined) { L0["k"] = $t212; } }
    { const $t213 = await $.iset(L0["k"], [$.add(L0["j"], 3)], L0["x"]); if ($t213 !== undefined) { L0["k"] = $t213; } }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t214) => { L0["i"] = $t214; }), 4])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["j"], async ($t215) => { L0["j"] = $t215; }), 4])));
    await $.tick();
  }
  L0["t"] = (await $.ref_(C, "Td0"));
  L0["s"] = (await $.ref_(C, "SBox"));
  do {
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["k"]])), 16])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["rounds"], async ($t216) => { L0["rounds"] = $t216; })])));
    L0["x"] = (await $.idx(L0["k"], [0]));
    { const $t217 = await $.iset(L0["k"], [0], $.xor($.xor($.xor((await $.idx(L0["t"], [$.add(768, (await $.idx(L0["s"], [$.shr(L0["x"], 24)])))])), (await $.idx(L0["t"], [$.add(512, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 16), async () => 255))])))]))), (await $.idx(L0["t"], [$.add(256, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 8), async () => 255))])))]))), (await $.idx(L0["t"], [(await $.idx(L0["s"], [(await $.and_(L0["x"], async () => 255))]))])))); if ($t217 !== undefined) { L0["k"] = $t217; } }
    L0["x"] = (await $.idx(L0["k"], [1]));
    { const $t218 = await $.iset(L0["k"], [1], $.xor($.xor($.xor((await $.idx(L0["t"], [$.add(768, (await $.idx(L0["s"], [$.shr(L0["x"], 24)])))])), (await $.idx(L0["t"], [$.add(512, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 16), async () => 255))])))]))), (await $.idx(L0["t"], [$.add(256, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 8), async () => 255))])))]))), (await $.idx(L0["t"], [(await $.idx(L0["s"], [(await $.and_(L0["x"], async () => 255))]))])))); if ($t218 !== undefined) { L0["k"] = $t218; } }
    L0["x"] = (await $.idx(L0["k"], [2]));
    { const $t219 = await $.iset(L0["k"], [2], $.xor($.xor($.xor((await $.idx(L0["t"], [$.add(768, (await $.idx(L0["s"], [$.shr(L0["x"], 24)])))])), (await $.idx(L0["t"], [$.add(512, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 16), async () => 255))])))]))), (await $.idx(L0["t"], [$.add(256, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 8), async () => 255))])))]))), (await $.idx(L0["t"], [(await $.idx(L0["s"], [(await $.and_(L0["x"], async () => 255))]))])))); if ($t219 !== undefined) { L0["k"] = $t219; } }
    L0["x"] = (await $.idx(L0["k"], [3]));
    { const $t220 = await $.iset(L0["k"], [3], $.xor($.xor($.xor((await $.idx(L0["t"], [$.add(768, (await $.idx(L0["s"], [$.shr(L0["x"], 24)])))])), (await $.idx(L0["t"], [$.add(512, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 16), async () => 255))])))]))), (await $.idx(L0["t"], [$.add(256, (await $.idx(L0["s"], [(await $.and_($.shr(L0["x"], 8), async () => 255))])))]))), (await $.idx(L0["t"], [(await $.idx(L0["s"], [(await $.and_(L0["x"], async () => 255))]))])))); if ($t220 !== undefined) { L0["k"] = $t220; } }
    await $.tick();
  } while (!$.truthy($.eq(L0["rounds"], 1)));
  return L0.result;
}, {"params": ["rounds", "k"], "kind": "procedure", "ptypes": ["integer", "PAWk"]});
  U.method("TAES", "DecryptInitFrom", async function DecryptInitFrom(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"encryption": $.copyArg(p0), "key": $.copyArg(p1), "keysize": $.copyArg(p2), result: false, "ctx": $.rec("taescontext")};
  await $.fixArgs(L0, ["encryption", "key", "keysize"]);
  await $.mset(L0["ctx"], "Initialized", false);
  if ($.truthy($.not((await $.mv((L0["encryption"]), "Initialized"))))) {
    await $.stmt((await $.call(C, "EncryptInit", [L0["key"], L0["keysize"]])));
  } else {
    await $.set(C, "self", (L0["encryption"]));
  }
  L0["result"] = (await $.mv(L0["ctx"], "Initialized"));
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.mset(L0["ctx"], "DoBlock", (await $.ref_(C, "aesdecryptpas")));
  await $.stmt((await $.call(C, "MakeDecrKey", [(await $.mv(L0["ctx"], "Rounds")), (await $.mref(L0["ctx"], "RK"))])));
  return L0.result;
}, {"params": ["Encryption", "Key", "KeySize"], "kind": "function", "ptypes": ["TAES", null, "cardinal"]});
  U.method("TAES", "DecryptInit", async function DecryptInit(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["key", "keysize"]);
  L0["result"] = (await $.call(C, "DecryptInitFrom", [Self, L0["key"], L0["keysize"]]));
  return L0.result;
}, {"params": ["Key", "KeySize"], "kind": "function", "ptypes": [null, "cardinal"]});
  U.method("TAES", "Decrypt", async function Decrypt(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"b": $.asRef(p0), result: undefined};
  await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "DoBlock", [(await $.v(C, "Context")), (await L0["b"].get()), (await L0["b"].get())])));
  return L0.result;
}, {"params": ["B"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.method("TAES", "Decrypt", async function Decrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bi": $.copyArg(p0), "bo": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["bi"]);
  await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "DoBlock", [(await $.v(C, "Context")), L0["bi"], (await L0["bo"].get())])));
  return L0.result;
}, {"params": ["BI", "BO"], "kind": "procedure", "ptypes": ["TAESBlock", "TAESBlock"]});
  U.method("TAES", "DoBlocks", async function DoBlocks(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"pin": $.copyArg(p0), "pout": $.copyArg(p1), "oin": $.asRef(p2), "oout": $.asRef(p3), "count": $.copyArg(p4), "doencrypt": $.copyArg(p5), result: undefined, "i": 0, "ctx": $.rec("taescontext")};
  await $.fixArgs(L0, ["pin", "pout", "count", "doencrypt"]);
  { const $t221 = L0["count"];
    L0["i"] = 1;
    let $t222 = true;
    for (;;) {
      if (!$t222) { L0["i"] = $.succ(L0["i"], 1); }
      $t222 = false;
      if (!($.ord(L0["i"]) <= $.ord($t221))) break;
      await $.stmt((await $.mcall(L0["ctx"], "DoBlock", [L0["ctx"], L0["pin"], L0["pout"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["pin"], async ($t223) => { L0["pin"] = $t223; })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["pout"], async ($t224) => { L0["pout"] = $t224; })])));
      await $.tick();
    }
  }
  await L0["oin"].set(L0["pin"]);
  await L0["oout"].set(L0["pout"]);
  return L0.result;
}, {"params": ["pIn", "pOut", "oIn", "oOut", "Count", "doEncrypt"], "kind": "procedure", "ptypes": ["PAESBlock", "PAESBlock", "PAESBLock", "PAESBLock", "integer", "boolean"]});
  U.method("TAES", "DoInit", async function DoInit(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "doencrypt": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["key", "keysize", "doencrypt"]);
  if ($.truthy(L0["doencrypt"])) {
    L0["result"] = (await $.call(C, "EncryptInit", [L0["key"], L0["keysize"]]));
  } else {
    L0["result"] = (await $.call(C, "DecryptInit", [L0["key"], L0["keysize"]]));
  }
  return L0.result;
}, {"params": ["Key", "KeySize", "doEncrypt"], "kind": "function", "ptypes": [null, "cardinal", "boolean"]});
  U.method("TAES", "DoBlocks", async function DoBlocks(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"pin": $.copyArg(p0), "pout": $.copyArg(p1), "count": $.copyArg(p2), "doencrypt": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["pin", "pout", "count", "doencrypt"]);
  await $.stmt((await $.call(C, "DoBlocks", [L0["pin"], L0["pout"], $.ref(async () => L0["pin"], async ($t225) => { L0["pin"] = $t225; }), $.ref(async () => L0["pout"], async ($t226) => { L0["pout"] = $t226; }), L0["count"], L0["doencrypt"]])));
  return L0.result;
}, {"params": ["pIn", "pOut", "Count", "doEncrypt"], "kind": "procedure", "ptypes": ["PAESBlock", "PAESBlock", "integer", "boolean"]});
  U.method("TAES", "DoBlocksOFB", async function DoBlocksOFB(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"iv": $.copyArg(p0), "src": $.copyArg(p1), "dst": $.copyArg(p2), "blockcount": $.copyArg(p3), result: undefined, "cv": null};
  await $.fixArgs(L0, ["iv", "src", "dst", "blockcount"]);
  L0["cv"] = L0["iv"];
  while ($.truthy($.gt(L0["blockcount"], 0))) {
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["blockcount"], async ($t227) => { L0["blockcount"] = $t227; })])));
    await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "DoBlock", [(await $.v(C, "Context")), L0["cv"], L0["cv"]])));
    await $.stmt((await $.call(C, "XorBlock16", [L0["src"], L0["dst"], (await $.call(C, "pointer", [L0["cv"]]))])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["src"]])), (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["dst"]])), (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["iv", "src", "dst", "blockcount"], "kind": "procedure", "ptypes": ["TAESBlock", "pointer", "pointer", "PtrUInt"]});
  U.method("TAES", "Initialized", async function Initialized(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "Initialized"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAES", "UsesAESNI", async function UsesAESNI(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAES", "KeyBits", async function KeyBits(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "Context"))])), "KeyBits"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAES", "Done", async function Done(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "ctx": $.rec("taescontext")};
  await $.stmt((await $.call(C, "FillcharFast", [L0["ctx"], (await $.call(C, "sizeof", [L0["ctx"]])), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("mul_x", async function mul_x(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.asRef(p0), "b": $.copyArg(p1), result: undefined, "t": 0, "y": null};
  await $.fixArgs(L0, ["b"]);
  L0["mask_80"] = (await $.call(C, "cardinal", [2155905152]));
  L0["mask_7f"] = (await $.call(C, "cardinal", [2139062143]));
  L0["t"] = (await $.idx((await $.v(C, "gft_le")), [(await $.and_(($.shr((await $.idx(L0["y"], [3])), 17)), async () => L0["mask_80"]))]));
  await $.iset((await $.call(C, "TWA4", [(await L0["a"].get())])), [3], (await $.or_(((await $.and_(($.shr((await $.idx(L0["y"], [3])), 1)), async () => L0["mask_7f"]))), async () => ((await $.and_(((await $.or_(($.shl((await $.idx(L0["y"], [3])), 15)), async () => ($.shr((await $.idx(L0["y"], [2])), 17))))), async () => L0["mask_80"]))))));
  await $.iset((await $.call(C, "TWA4", [(await L0["a"].get())])), [2], (await $.or_(((await $.and_(($.shr((await $.idx(L0["y"], [2])), 1)), async () => L0["mask_7f"]))), async () => ((await $.and_(((await $.or_(($.shl((await $.idx(L0["y"], [2])), 15)), async () => ($.shr((await $.idx(L0["y"], [1])), 17))))), async () => L0["mask_80"]))))));
  await $.iset((await $.call(C, "TWA4", [(await L0["a"].get())])), [1], (await $.or_(((await $.and_(($.shr((await $.idx(L0["y"], [1])), 1)), async () => L0["mask_7f"]))), async () => ((await $.and_(((await $.or_(($.shl((await $.idx(L0["y"], [1])), 15)), async () => ($.shr((await $.idx(L0["y"], [0])), 17))))), async () => L0["mask_80"]))))));
  await $.iset((await $.call(C, "TWA4", [(await L0["a"].get())])), [0], $.xor(((await $.or_(((await $.and_(($.shr((await $.idx(L0["y"], [0])), 1)), async () => L0["mask_7f"]))), async () => ((await $.and_(($.shl((await $.idx(L0["y"], [0])), 15)), async () => L0["mask_80"])))))), L0["t"]));
  return L0.result;
}, {"params": ["a", "b"], "kind": "procedure", "ptypes": ["TAESBlock", "TAESBlock"]});
  U.func("gf_mul", async function gf_mul(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.asRef(p0), "b": $.copyArg(p1), result: undefined, "p": $.sarr(), "x": null, "t": 0, "i": 0, "j": 0, "c": 0};
  await $.fixArgs(L0, ["b"]);
  { const $t228 = await $.iset(L0["p"], [0], L0["b"]); if ($t228 !== undefined) { L0["p"] = $t228; } }
  { const $t229 = 7;
    L0["i"] = 1;
    let $t230 = true;
    for (;;) {
      if (!$t230) { L0["i"] = $.succ(L0["i"], 1); }
      $t230 = false;
      if (!($.ord(L0["i"]) <= $.ord($t229))) break;
      await $.stmt((await $.call(C, "mul_x", [$.ref(async () => (await $.idx(L0["p"], [L0["i"]])), async ($t231) => { { const $t232 = await $.iset(L0["p"], [L0["i"]], $t231); if ($t232 !== undefined) { L0["p"] = $t232; } } }), (await $.idx(L0["p"], [$.sub(L0["i"], 1)]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillZero", [(await $.call(C, "TAESBlock", [L0["x"]]))])));
  { const $t233 = 15;
    L0["i"] = 0;
    let $t234 = true;
    for (;;) {
      if (!$t234) { L0["i"] = $.succ(L0["i"], 1); }
      $t234 = false;
      if (!($.ord(L0["i"]) <= $.ord($t233))) break;
      L0["c"] = (await $.idx((await L0["a"].get()), [$.sub(15, L0["i"])]));
      if ($.truthy($.gt(L0["i"], 0))) {
        L0["t"] = (await $.idx((await $.v(C, "gft_le")), [$.shr((await $.idx(L0["x"], [3])), 24)]));
        { const $t235 = await $.iset(L0["x"], [3], ((await $.or_(($.shl((await $.idx(L0["x"], [3])), 8)), async () => ($.shr((await $.idx(L0["x"], [2])), 24)))))); if ($t235 !== undefined) { L0["x"] = $t235; } }
        { const $t236 = await $.iset(L0["x"], [2], ((await $.or_(($.shl((await $.idx(L0["x"], [2])), 8)), async () => ($.shr((await $.idx(L0["x"], [1])), 24)))))); if ($t236 !== undefined) { L0["x"] = $t236; } }
        { const $t237 = await $.iset(L0["x"], [1], ((await $.or_(($.shl((await $.idx(L0["x"], [1])), 8)), async () => ($.shr((await $.idx(L0["x"], [0])), 24)))))); if ($t237 !== undefined) { L0["x"] = $t237; } }
        { const $t238 = await $.iset(L0["x"], [0], ($.xor(($.shl((await $.idx(L0["x"], [0])), 8)), L0["t"]))); if ($t238 !== undefined) { L0["x"] = $t238; } }
      }
      { const $t239 = 7;
        L0["j"] = 0;
        let $t240 = true;
        for (;;) {
          if (!$t240) { L0["j"] = $.succ(L0["j"], 1); }
          $t240 = false;
          if (!($.ord(L0["j"]) <= $.ord($t239))) break;
          if ($.truthy($.ne((await $.and_(L0["c"], async () => ($.shr(128, L0["j"])))), 0))) {
            { const $t241 = await $.iset(L0["x"], [3], $.xor((await $.idx(L0["x"], [3])), (await $.idx((await $.call(C, "TWA4", [(await $.idx(L0["p"], [L0["j"]]))])), [3])))); if ($t241 !== undefined) { L0["x"] = $t241; } }
            { const $t242 = await $.iset(L0["x"], [2], $.xor((await $.idx(L0["x"], [2])), (await $.idx((await $.call(C, "TWA4", [(await $.idx(L0["p"], [L0["j"]]))])), [2])))); if ($t242 !== undefined) { L0["x"] = $t242; } }
            { const $t243 = await $.iset(L0["x"], [1], $.xor((await $.idx(L0["x"], [1])), (await $.idx((await $.call(C, "TWA4", [(await $.idx(L0["p"], [L0["j"]]))])), [1])))); if ($t243 !== undefined) { L0["x"] = $t243; } }
            { const $t244 = await $.iset(L0["x"], [0], $.xor((await $.idx(L0["x"], [0])), (await $.idx((await $.call(C, "TWA4", [(await $.idx(L0["p"], [L0["j"]]))])), [0])))); if ($t244 !== undefined) { L0["x"] = $t244; } }
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  }
  await L0["a"].set((await $.call(C, "TAESBlock", [L0["x"]])));
  return L0.result;
}, {"params": ["a", "b"], "kind": "procedure", "ptypes": ["TAESBlock", "TAESBlock"]});
  U.method("TAESGCMEngine", "Make4K_Table", async function Make4K_Table(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "j": 0, "k": 0};
  { const $t245 = await $.iset((await $.v(C, "gf_t4k")), [128], (await $.v(C, "ghash_h"))); if ($t245 !== undefined) { await $.set(C, "gf_t4k", $t245); } }
  L0["j"] = 64;
  while ($.truthy($.gt(L0["j"], 0))) {
    await $.stmt((await $.call(C, "mul_x", [$.ref(async () => (await $.idx((await $.v(C, "gf_t4k")), [L0["j"]])), async ($t246) => { { const $t247 = await $.iset((await $.v(C, "gf_t4k")), [L0["j"]], $t246); if ($t247 !== undefined) { await $.set(C, "gf_t4k", $t247); } } }), (await $.idx((await $.v(C, "gf_t4k")), [$.add(L0["j"], L0["j"])]))])));
    L0["j"] = $.shr(L0["j"], 1);
    await $.tick();
  }
  L0["j"] = 2;
  while ($.truthy($.lt(L0["j"], 256))) {
    { const $t248 = $.sub(L0["j"], 1);
      L0["k"] = 1;
      let $t249 = true;
      for (;;) {
        if (!$t249) { L0["k"] = $.succ(L0["k"], 1); }
        $t249 = false;
        if (!($.ord(L0["k"]) <= $.ord($t248))) break;
        await $.stmt((await $.call(C, "XorBlock16", [(await $.idx((await $.v(C, "gf_t4k")), [L0["k"]])), (await $.idx((await $.v(C, "gf_t4k")), [$.add(L0["j"], L0["k"])])), (await $.idx((await $.v(C, "gf_t4k")), [L0["j"]]))])));
        await $.tick();
      }
    }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["j"], async ($t250) => { L0["j"] = $t250; }), L0["j"]])));
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESGCMEngine", "gf_mul_h", async function gf_mul_h(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.asRef(p0), result: undefined, "x": null, "i": 0, "t": 0, "p": null, "tab": null};
  L0["tab"] = (await $.ref_(C, "gft_le"));
  L0["x"] = (await $.call(C, "TWA4", [(await $.idx((await $.v(C, "gf_t4k")), [(await $.idx((await L0["a"].get()), [15]))]))]));
  { const $t251 = 0;
    L0["i"] = 14;
    let $t252 = true;
    for (;;) {
      if (!$t252) { L0["i"] = $.succ(L0["i"], -1); }
      $t252 = false;
      if (!($.ord(L0["i"]) >= $.ord($t251))) break;
      L0["p"] = (await $.idx((await $.v(C, "gf_t4k")), [(await $.idx((await L0["a"].get()), [L0["i"]]))]));
      L0["t"] = (await $.idx(L0["tab"], [$.shr((await $.idx(L0["x"], [3])), 24)]));
      { const $t253 = await $.iset(L0["x"], [3], $.xor(((await $.or_(($.shl((await $.idx(L0["x"], [3])), 8)), async () => ($.shr((await $.idx(L0["x"], [2])), 24))))), (await $.idx(L0["p"], [3])))); if ($t253 !== undefined) { L0["x"] = $t253; } }
      { const $t254 = await $.iset(L0["x"], [2], $.xor(((await $.or_(($.shl((await $.idx(L0["x"], [2])), 8)), async () => ($.shr((await $.idx(L0["x"], [1])), 24))))), (await $.idx(L0["p"], [2])))); if ($t254 !== undefined) { L0["x"] = $t254; } }
      { const $t255 = await $.iset(L0["x"], [1], $.xor(((await $.or_(($.shl((await $.idx(L0["x"], [1])), 8)), async () => ($.shr((await $.idx(L0["x"], [0])), 24))))), (await $.idx(L0["p"], [1])))); if ($t255 !== undefined) { L0["x"] = $t255; } }
      { const $t256 = await $.iset(L0["x"], [0], $.xor(($.xor(($.shl((await $.idx(L0["x"], [0])), 8)), L0["t"])), (await $.idx(L0["p"], [0])))); if ($t256 !== undefined) { L0["x"] = $t256; } }
      await $.tick();
    }
  }
  await L0["a"].set((await $.call(C, "TAESBlock", [L0["x"]])));
  return L0.result;
}, {"params": ["a"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.func("GCM_IncCtr", async function GCM_IncCtr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.idx((await L0["x"].get()), [15])), async ($t257) => { { const $t258 = await $.iset((await L0["x"].get()), [15], $t257); if ($t258 !== undefined) { await L0["x"].set($t258); } } })])));
  if ($.truthy($.ne((await $.idx((await L0["x"].get()), [15])), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.idx((await L0["x"].get()), [14])), async ($t259) => { { const $t260 = await $.iset((await L0["x"].get()), [14], $t259); if ($t260 !== undefined) { await L0["x"].set($t260); } } })])));
  if ($.truthy($.ne((await $.idx((await L0["x"].get()), [14])), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.idx((await L0["x"].get()), [13])), async ($t261) => { { const $t262 = await $.iset((await L0["x"].get()), [13], $t261); if ($t262 !== undefined) { await L0["x"].set($t262); } } })])));
  if ($.truthy($.eq((await $.idx((await L0["x"].get()), [13])), 0))) {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.idx((await L0["x"].get()), [12])), async ($t263) => { { const $t264 = await $.iset((await L0["x"].get()), [12], $t263); if ($t264 !== undefined) { await L0["x"].set($t264); } } })])));
  }
  return L0.result;
}, {"params": ["x"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.method("TAESGCMEngine", "internal_crypt", async function internal_crypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"ptp": $.copyArg(p0), "ctp": $.copyArg(p1), "ilen": $.copyArg(p2), result: undefined, "b_pos": 0};
  await $.fixArgs(L0, ["ptp", "ctp", "ilen"]);
  L0["b_pos"] = (await $.v(C, "blen"));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "blen")), async ($t265) => { await $.set(C, "blen", $t265); }), L0["ilen"]])));
  await $.set(C, "blen", (await $.and_((await $.v(C, "blen")), async () => (await $.v(C, "AESBlockMod")))));
  if ($.truthy($.eq(L0["b_pos"], 0))) {
    L0["b_pos"] = (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]));
  } else {
    while ($.truthy((await $.and_(($.gt(L0["ilen"], 0)), async () => ($.lt(L0["b_pos"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))])))))))) {
      L0["ctp"] = $.xor(L0["ptp"], (await $.idx((await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf")), [L0["b_pos"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["b_pos"], async ($t266) => { L0["b_pos"] = $t266; })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["ptp"], async ($t267) => { L0["ptp"] = $t267; })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["ctp"], async ($t268) => { L0["ctp"] = $t268; })])));
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t269) => { L0["ilen"] = $t269; })])));
      await $.tick();
    }
  }
  while ($.truthy($.ge(L0["ilen"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))))) {
    await $.stmt((await $.call(C, "GCM_IncCtr", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t270) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t270); })])));
    await $.stmt((await $.mcall((await $.v(C, "actx")), "Encrypt", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t271) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t271); }), $.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf")), async ($t272) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf", $t272); })])));
    await $.stmt((await $.call(C, "XorBlock16", [(await $.call(C, "pointer", [L0["ptp"]])), (await $.call(C, "pointer", [L0["ctp"]])), (await $.mref((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf"))])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ptp"]]))])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ctp"]]))])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t273) => { L0["ilen"] = $t273; }), (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))])));
    await $.tick();
  }
  while ($.truthy($.gt(L0["ilen"], 0))) {
    if ($.truthy($.eq(L0["b_pos"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))))) {
      await $.stmt((await $.call(C, "GCM_IncCtr", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t274) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t274); })])));
      await $.stmt((await $.mcall((await $.v(C, "actx")), "Encrypt", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t275) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t275); }), $.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf")), async ($t276) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf", $t276); })])));
      L0["b_pos"] = 0;
    }
    L0["ctp"] = $.xor((await $.idx((await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf")), [L0["b_pos"]])), L0["ptp"]);
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["b_pos"], async ($t277) => { L0["b_pos"] = $t277; })])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["ptp"], async ($t278) => { L0["ptp"] = $t278; })])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["ctp"], async ($t279) => { L0["ctp"] = $t279; })])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t280) => { L0["ilen"] = $t280; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["ptp", "ctp", "ILen"], "kind": "procedure", "ptypes": ["PByte", "PByte", "PtrUInt"]});
  U.method("TAESGCMEngine", "internal_auth", async function internal_auth(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"ctp": $.copyArg(p0), "ilen": $.copyArg(p1), "ghv": $.asRef(p2), "gcnt": $.asRef(p3), result: undefined, "b_pos": 0};
  await $.fixArgs(L0, ["ctp", "ilen"]);
  L0["b_pos"] = (await $.and_((await $.mv((await L0["gcnt"].get()), "L")), async () => (await $.v(C, "AESBlockMod"))));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["gcnt"].get()), "V")), async ($t281) => { await $.mset((await L0["gcnt"].get()), "V", $t281); }), L0["ilen"]])));
  if ($.truthy((await $.and_(($.eq(L0["b_pos"], 0)), async () => ($.ne((await $.mv((await L0["gcnt"].get()), "V")), 0)))))) {
    await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await L0["ghv"].get()), async ($t282) => { await L0["ghv"].set($t282); })])));
  }
  while ($.truthy((await $.and_(($.gt(L0["ilen"], 0)), async () => ($.lt(L0["b_pos"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))])))))))) {
    { const $t283 = await $.iset((await L0["ghv"].get()), [L0["b_pos"]], $.xor((await $.idx((await L0["ghv"].get()), [L0["b_pos"]])), L0["ctp"])); if ($t283 !== undefined) { await L0["ghv"].set($t283); } }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["b_pos"], async ($t284) => { L0["b_pos"] = $t284; })])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["ctp"], async ($t285) => { L0["ctp"] = $t285; })])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t286) => { L0["ilen"] = $t286; })])));
    await $.tick();
  }
  while ($.truthy($.ge(L0["ilen"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))))) {
    await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await L0["ghv"].get()), async ($t287) => { await L0["ghv"].set($t287); })])));
    await $.stmt((await $.call(C, "XorBlock16", [(await L0["ghv"].get()), (await $.call(C, "pointer", [L0["ctp"]]))])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ctp"]]))])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t288) => { L0["ilen"] = $t288; }), (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))])));
    await $.tick();
  }
  while ($.truthy($.gt(L0["ilen"], 0))) {
    if ($.truthy($.eq(L0["b_pos"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))))) {
      await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await L0["ghv"].get()), async ($t289) => { await L0["ghv"].set($t289); })])));
      L0["b_pos"] = 0;
    }
    { const $t290 = await $.iset((await L0["ghv"].get()), [L0["b_pos"]], $.xor((await $.idx((await L0["ghv"].get()), [L0["b_pos"]])), L0["ctp"])); if ($t290 !== undefined) { await L0["ghv"].set($t290); } }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["b_pos"], async ($t291) => { L0["b_pos"] = $t291; })])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["ctp"], async ($t292) => { L0["ctp"] = $t292; })])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t293) => { L0["ilen"] = $t293; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["ctp", "ILen", "ghv", "gcnt"], "kind": "procedure", "ptypes": ["PByte", "PtrUInt", "TAESBlock", "TQWordRec"]});
  U.method("TAESGCMEngine", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keybits": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["key", "keybits"]);
  await $.stmt((await $.call(C, "FillcharFast", [Self, (await $.call(C, "SizeOf", [Self])), 0])));
  L0["result"] = (await $.mcall((await $.v(C, "actx")), "EncryptInit", [L0["key"], L0["keybits"]]));
  if ($.truthy($.not(L0["result"]))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "actx")), "Encrypt", [$.ref(async () => (await $.v(C, "ghash_h")), async ($t294) => { await $.set(C, "ghash_h", $t294); }), $.ref(async () => (await $.v(C, "ghash_h")), async ($t295) => { await $.set(C, "ghash_h", $t295); })])));
  await $.stmt($.call(C, "Make4K_Table", []));
  return L0.result;
}, {"params": ["Key", "KeyBits"], "kind": "function", "ptypes": [null, "PtrInt"]});
  U.method("TAESGCMEngine", "Reset", async function Reset(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"piv": $.copyArg(p0), "iv_len": $.copyArg(p1), result: false, "i": 0, "n_pos": 0};
  await $.fixArgs(L0, ["piv", "iv_len"]);
  if ($.truthy((await $.or_(($.eq(L0["piv"], null)), async () => ($.eq(L0["iv_len"], 0)))))) {
    L0["result"] = false;
    return L0.result;
  }
  if ($.truthy($.eq(L0["iv_len"], (await $.v(C, "CTR_POS"))))) {
    await $.stmt((await $.call(C, "MoveFast", [L0["piv"], (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), (await $.v(C, "CTR_POS"))])));
    await $.iset((await $.call(C, "TWA4", [(await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV"))])), [3], 16777216);
  } else {
    L0["n_pos"] = L0["iv_len"];
    await $.stmt((await $.call(C, "FillZero", [(await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV"))])));
    while ($.truthy($.ge(L0["n_pos"], (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))))) {
      await $.stmt((await $.call(C, "XorBlock16", [(await $.mref((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), L0["piv"]])));
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAesBlock", [L0["piv"]]))])));
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["n_pos"], async ($t296) => { L0["n_pos"] = $t296; }), (await $.call(C, "SizeOf", [(await $.v(C, "TAESBlock"))]))])));
      await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t297) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t297); })])));
      await $.tick();
    }
    if ($.truthy($.gt(L0["n_pos"], 0))) {
      { const $t298 = $.sub(L0["n_pos"], 1);
        L0["i"] = 0;
        let $t299 = true;
        for (;;) {
          if (!$t299) { L0["i"] = $.succ(L0["i"], 1); }
          $t299 = false;
          if (!($.ord(L0["i"]) <= $.ord($t298))) break;
          { const $t300 = await $.iset((await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), [L0["i"]], $.xor((await $.idx((await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), [L0["i"]])), (await $.idx((await $.call(C, "PAESBlock", [L0["piv"]])), [L0["i"]])))); if ($t300 !== undefined) { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t300); } }
          await $.tick();
        }
      }
      await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t301) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t301); })])));
    }
    L0["n_pos"] = $.shl(L0["iv_len"], 3);
    L0["i"] = 15;
    while ($.truthy($.gt(L0["n_pos"], 0))) {
      { const $t302 = await $.iset((await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), [L0["i"]], $.xor((await $.idx((await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), [L0["i"]])), (await $.call(C, "byte", [L0["n_pos"]])))); if ($t302 !== undefined) { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t302); } }
      L0["n_pos"] = $.shr(L0["n_pos"], 8);
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["i"], async ($t303) => { L0["i"] = $t303; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t304) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t304); })])));
  }
  await $.set(C, "y0_val", (await $.idx((await $.call(C, "TWA4", [(await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV"))])), [3])));
  await $.stmt((await $.call(C, "FillZero", [(await $.v(C, "aad_ghv"))])));
  await $.stmt((await $.call(C, "FillZero", [(await $.v(C, "txt_ghv"))])));
  await $.mset((await $.v(C, "aad_cnt")), "V", 0);
  await $.mset((await $.v(C, "atx_cnt")), "V", 0);
  await $.set(C, "flags", []);
  L0["result"] = true;
  return L0.result;
}, {"params": ["pIV", "IV_len"], "kind": "function", "ptypes": ["pointer", "PtrInt"]});
  U.method("TAESGCMEngine", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"ptp": $.copyArg(p0), "ctp": $.copyArg(p1), "ilen": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["ptp", "ctp", "ilen"]);
  if ($.truthy($.gt(L0["ilen"], 0))) {
    if ($.truthy((await $.or_((await $.or_(($.eq(L0["ptp"], null)), async () => ($.eq(L0["ctp"], null)))), async () => ($.in_((await $.v(C, "flagFinalComputed")), (await $.v(C, "flags")))))))) {
      L0["result"] = false;
      return L0.result;
    }
    if ($.truthy((await $.and_(($.eq((await $.and_(L0["ilen"], async () => (await $.v(C, "AESBlockMod")))), 0)), async () => ($.eq((await $.v(C, "blen")), 0)))))) {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await $.v(C, "atx_cnt")), "V")), async ($t305) => { await $.mset((await $.v(C, "atx_cnt")), "V", $t305); }), L0["ilen"]])));
      L0["ilen"] = $.shr(L0["ilen"], (await $.v(C, "AESBlockShift")));
      do {
        await $.stmt((await $.call(C, "GCM_IncCtr", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t306) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t306); })])));
        await $.stmt((await $.mcall((await $.v(C, "actx")), "Encrypt", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t307) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t307); }), $.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf")), async ($t308) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf", $t308); })])));
        await $.stmt((await $.call(C, "XorBlock16", [L0["ptp"], L0["ctp"], (await $.mref((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf"))])));
        await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.v(C, "txt_ghv")), async ($t309) => { await $.set(C, "txt_ghv", $t309); })])));
        await $.stmt((await $.call(C, "XorBlock16", [(await $.ref_(C, "txt_ghv")), L0["ctp"]])));
        await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ptp"]]))])));
        await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ctp"]]))])));
        await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t310) => { L0["ilen"] = $t310; })])));
        await $.tick();
      } while (!$.truthy($.eq(L0["ilen"], 0)));
    } else {
      await $.stmt((await $.call(C, "internal_crypt", [L0["ptp"], L0["ctp"], L0["ilen"]])));
      await $.stmt((await $.call(C, "internal_auth", [L0["ctp"], L0["ilen"], $.ref(async () => (await $.v(C, "txt_ghv")), async ($t311) => { await $.set(C, "txt_ghv", $t311); }), $.ref(async () => (await $.v(C, "atx_cnt")), async ($t312) => { await $.set(C, "atx_cnt", $t312); })])));
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["ptp", "ctp", "ILen"], "kind": "function", "ptypes": ["Pointer", "Pointer", "PtrInt"]});
  U.method("TAESGCMEngine", "Decrypt", async function Decrypt(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"ctp": $.copyArg(p0), "ptp": $.copyArg(p1), "ilen": $.copyArg(p2), "ptag": $.copyArg(p3), "tlen": $.copyArg(p4), result: false, "tag": null};
  await $.fixArgs(L0, ["ctp", "ptp", "ilen", "ptag", "tlen"]);
  L0["result"] = false;
  if ($.truthy($.gt(L0["ilen"], 0))) {
    if ($.truthy((await $.or_((await $.or_(($.eq(L0["ptp"], null)), async () => ($.eq(L0["ctp"], null)))), async () => ($.in_((await $.v(C, "flagFinalComputed")), (await $.v(C, "flags")))))))) {
      return L0.result;
    }
    if ($.truthy((await $.and_(($.eq((await $.and_(L0["ilen"], async () => (await $.v(C, "AESBlockMod")))), 0)), async () => ($.eq((await $.v(C, "blen")), 0)))))) {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await $.v(C, "atx_cnt")), "V")), async ($t313) => { await $.mset((await $.v(C, "atx_cnt")), "V", $t313); }), L0["ilen"]])));
      L0["ilen"] = $.shr(L0["ilen"], (await $.v(C, "AESBlockShift")));
      do {
        await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.v(C, "txt_ghv")), async ($t314) => { await $.set(C, "txt_ghv", $t314); })])));
        await $.stmt((await $.call(C, "XorBlock16", [(await $.ref_(C, "txt_ghv")), L0["ctp"]])));
        await $.stmt((await $.call(C, "GCM_IncCtr", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t315) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t315); })])));
        await $.stmt((await $.mcall((await $.v(C, "actx")), "Encrypt", [$.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV")), async ($t316) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV", $t316); }), $.ref(async () => (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf")), async ($t317) => { await $.mset((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf", $t317); })])));
        await $.stmt((await $.call(C, "XorBlock16", [L0["ctp"], L0["ptp"], (await $.mref((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "buf"))])));
        await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ptp"]]))])));
        await $.stmt((await $.call(C, "inc", [(await $.call(C, "PAESBlock", [L0["ctp"]]))])));
        await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ilen"], async ($t318) => { L0["ilen"] = $t318; })])));
        await $.tick();
      } while (!$.truthy($.eq(L0["ilen"], 0)));
      if ($.truthy((await $.and_(($.ne(L0["ptag"], null)), async () => ($.gt(L0["tlen"], 0)))))) {
        await $.stmt((await $.call(C, "Final", [$.ref(async () => L0["tag"], async ($t319) => { L0["tag"] = $t319; }), false])));
        if ($.truthy($.not((await $.call(C, "IsEqual", [L0["tag"], L0["ptag"], L0["tlen"]]))))) {
          return L0.result;
        }
      }
    } else {
      await $.stmt((await $.call(C, "internal_auth", [L0["ctp"], L0["ilen"], $.ref(async () => (await $.v(C, "txt_ghv")), async ($t320) => { await $.set(C, "txt_ghv", $t320); }), $.ref(async () => (await $.v(C, "atx_cnt")), async ($t321) => { await $.set(C, "atx_cnt", $t321); })])));
      if ($.truthy((await $.and_(($.ne(L0["ptag"], null)), async () => ($.gt(L0["tlen"], 0)))))) {
        await $.stmt((await $.call(C, "Final", [$.ref(async () => L0["tag"], async ($t322) => { L0["tag"] = $t322; }), false])));
        if ($.truthy($.not((await $.call(C, "IsEqual", [L0["tag"], L0["ptag"], L0["tlen"]]))))) {
          return L0.result;
        }
      }
      await $.stmt((await $.call(C, "internal_crypt", [L0["ctp"], L0["ptp"], L0["ilen"]])));
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["ctp", "ptp", "ILen", "ptag", "tlen"], "kind": "function", "ptypes": ["Pointer", "Pointer", "PtrInt", "pointer", "PtrInt"]});
  U.method("TAESGCMEngine", "Add_AAD", async function Add_AAD(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"paad": $.copyArg(p0), "alen": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["paad", "alen"]);
  if ($.truthy($.gt(L0["alen"], 0))) {
    if ($.truthy((await $.or_(($.eq(L0["paad"], null)), async () => ($.in_((await $.v(C, "flagFinalComputed")), (await $.v(C, "flags")))))))) {
      L0["result"] = false;
      return L0.result;
    }
    await $.stmt((await $.call(C, "internal_auth", [L0["paad"], L0["alen"], $.ref(async () => (await $.v(C, "aad_ghv")), async ($t323) => { await $.set(C, "aad_ghv", $t323); }), $.ref(async () => (await $.v(C, "aad_cnt")), async ($t324) => { await $.set(C, "aad_cnt", $t324); })])));
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["pAAD", "aLen"], "kind": "function", "ptypes": ["pointer", "PtrInt"]});
  U.method("TAESGCMEngine", "Final", async function Final(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"tag": $.asRef(p0), "anddone": $.copyArg(p1), result: false, "tbuf": null, "ln": 0};
  await $.fixArgs(L0, ["anddone"]);
  if ($.truthy($.not(($.in_((await $.v(C, "flagFinalComputed")), (await $.v(C, "flags"))))))) {
    await $.stmt((await $.call(C, "include", [$.ref(async () => (await $.v(C, "flags")), async ($t325) => { await $.set(C, "flags", $t325); }), (await $.v(C, "flagFinalComputed"))])));
    await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.v(C, "aad_ghv")), async ($t326) => { await $.set(C, "aad_ghv", $t326); })])));
    await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.v(C, "txt_ghv")), async ($t327) => { await $.set(C, "txt_ghv", $t327); })])));
    L0["ln"] = $.shr(($.add((await $.mv((await $.v(C, "atx_cnt")), "V")), (await $.v(C, "AESBlockMod")))), (await $.v(C, "AESBlockShift")));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "aad_cnt")), "V")), 0)), async () => ($.ne(L0["ln"], 0)))))) {
      L0["tbuf"] = (await $.v(C, "ghash_h"));
      while ($.truthy($.ne(L0["ln"], 0))) {
        if ($.truthy((await $.call(C, "odd", [L0["ln"]])))) {
          await $.stmt((await $.call(C, "gf_mul", [$.ref(async () => (await $.v(C, "aad_ghv")), async ($t328) => { await $.set(C, "aad_ghv", $t328); }), L0["tbuf"]])));
        }
        L0["ln"] = $.shr(L0["ln"], 1);
        if ($.truthy($.ne(L0["ln"], 0))) {
          await $.stmt((await $.call(C, "gf_mul", [$.ref(async () => L0["tbuf"], async ($t329) => { L0["tbuf"] = $t329; }), L0["tbuf"]])));
        }
        await $.tick();
      }
    }
    await $.iset((await $.call(C, "TWA4", [L0["tbuf"]])), [0], (await $.call(C, "bswap32", [(await $.or_(($.shr((await $.mv((await $.v(C, "aad_cnt")), "L")), 29)), async () => ($.shl((await $.mv((await $.v(C, "aad_cnt")), "H")), 3))))])));
    await $.iset((await $.call(C, "TWA4", [L0["tbuf"]])), [1], (await $.call(C, "bswap32", [($.shl((await $.mv((await $.v(C, "aad_cnt")), "L")), 3))])));
    await $.iset((await $.call(C, "TWA4", [L0["tbuf"]])), [2], (await $.call(C, "bswap32", [(await $.or_(($.shr((await $.mv((await $.v(C, "atx_cnt")), "L")), 29)), async () => ($.shl((await $.mv((await $.v(C, "atx_cnt")), "H")), 3))))])));
    await $.iset((await $.call(C, "TWA4", [L0["tbuf"]])), [3], (await $.call(C, "bswap32", [($.shl((await $.mv((await $.v(C, "atx_cnt")), "L")), 3))])));
    await $.stmt((await $.call(C, "XorBlock16", [L0["tbuf"], (await $.ref_(C, "txt_ghv"))])));
    await $.stmt((await $.call(C, "XorBlock16", [(await $.ref_(C, "aad_ghv")), L0["tbuf"]])));
    await $.stmt((await $.call(C, "gf_mul_h", [$.ref(async () => (await $.v(C, "aad_ghv")), async ($t330) => { await $.set(C, "aad_ghv", $t330); })])));
    L0["tbuf"] = (await $.mv((await $.call(C, "TAESContext", [(await $.v(C, "actx"))])), "IV"));
    await $.iset((await $.call(C, "TWA4", [L0["tbuf"]])), [3], (await $.v(C, "y0_val")));
    await $.stmt((await $.mcall((await $.v(C, "actx")), "Encrypt", [$.ref(async () => L0["tbuf"], async ($t331) => { L0["tbuf"] = $t331; })])));
    await $.stmt((await $.call(C, "XorBlock16", [(await $.ref_(C, "aad_ghv")), (await L0["tag"].get()), L0["tbuf"]])));
    if ($.truthy(L0["anddone"])) {
      await $.stmt($.call(C, "Done", []));
    }
    L0["result"] = true;
  } else {
    await $.stmt($.call(C, "Done", []));
    L0["result"] = false;
  }
  return L0.result;
}, {"params": ["tag", "andDone"], "kind": "function", "ptypes": ["TAESBlock", "boolean"]});
  U.method("TAESGCMEngine", "Done", async function Done(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.in_((await $.v(C, "flagFlushed")), (await $.v(C, "flags"))))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "actx")), "Done", []);
  await $.stmt((await $.call(C, "include", [$.ref(async () => (await $.v(C, "flags")), async ($t332) => { await $.set(C, "flags", $t332); }), (await $.v(C, "flagFlushed"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESGCMEngine", "FullEncryptAndAuthenticate", async function FullEncryptAndAuthenticate(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keybits": $.copyArg(p1), "piv": $.copyArg(p2), "iv_len": $.copyArg(p3), "paad": $.copyArg(p4), "alen": $.copyArg(p5), "ptp": $.copyArg(p6), "ctp": $.copyArg(p7), "plen": $.copyArg(p8), "tag": $.asRef(p9), result: false};
  await $.fixArgs(L0, ["key", "keybits", "piv", "iv_len", "paad", "alen", "ptp", "ctp", "plen"]);
  L0["result"] = (await $.and_((await $.and_((await $.and_((await $.and_((await $.call(C, "Init", [L0["key"], L0["keybits"]])), async () => (await $.call(C, "Reset", [$.ref(async () => L0["piv"], async ($t333) => { L0["piv"] = $t333; }), L0["iv_len"]])))), async () => (await $.call(C, "Add_AAD", [L0["paad"], L0["alen"]])))), async () => (await $.call(C, "Encrypt", [$.ref(async () => L0["ptp"], async ($t334) => { L0["ptp"] = $t334; }), $.ref(async () => L0["ctp"], async ($t335) => { L0["ctp"] = $t335; }), L0["plen"]])))), async () => (await $.call(C, "Final", [$.ref(async () => (await L0["tag"].get()), async ($t336) => { await L0["tag"].set($t336); })]))));
  await $.stmt($.call(C, "Done", []));
  return L0.result;
}, {"params": ["Key", "KeyBits", "pIV", "IV_len", "pAAD", "aLen", "ptp", "ctp", "pLen", "tag"], "kind": "function", "ptypes": [null, "PtrInt", "pointer", "PtrInt", "pointer", "PtrInt", "Pointer", "Pointer", "PtrInt", "TAESBlock"]});
  U.method("TAESGCMEngine", "FullDecryptAndVerify", async function FullDecryptAndVerify(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keybits": $.copyArg(p1), "piv": $.copyArg(p2), "iv_len": $.copyArg(p3), "paad": $.copyArg(p4), "alen": $.copyArg(p5), "ctp": $.copyArg(p6), "ptp": $.copyArg(p7), "plen": $.copyArg(p8), "ptag": $.copyArg(p9), "tlen": $.copyArg(p10), result: false};
  await $.fixArgs(L0, ["key", "keybits", "piv", "iv_len", "paad", "alen", "ctp", "ptp", "plen", "ptag", "tlen"]);
  L0["result"] = (await $.and_((await $.and_((await $.and_((await $.call(C, "Init", [L0["key"], L0["keybits"]])), async () => (await $.call(C, "Reset", [$.ref(async () => L0["piv"], async ($t337) => { L0["piv"] = $t337; }), L0["iv_len"]])))), async () => (await $.call(C, "Add_AAD", [L0["paad"], L0["alen"]])))), async () => (await $.call(C, "Decrypt", [$.ref(async () => L0["ctp"], async ($t338) => { L0["ctp"] = $t338; }), $.ref(async () => L0["ptp"], async ($t339) => { L0["ptp"] = $t339; }), L0["plen"], L0["ptag"], L0["tlen"]]))));
  await $.stmt($.call(C, "Done", []));
  return L0.result;
}, {"params": ["Key", "KeyBits", "pIV", "IV_len", "pAAD", "aLen", "ctp", "ptp", "pLen", "ptag", "tLen"], "kind": "function", "ptypes": [null, "PtrInt", "pointer", "PtrInt", "pointer", "PtrInt", "Pointer", "Pointer", "PtrInt", "pointer", "PtrInt"]});
  U.func("Sha256ExpandMessageBlocks", async function Sha256ExpandMessageBlocks() { return $.notPorted("Sha256ExpandMessageBlocks", "expected 'begin' got kw:'initialization' near '                                                            initialization   ComputeAesStaticTables;                    '"); }, {"params": ["W", "Buf"], "kind": "procedure", "ptypes": ["PIntegerArray", "PIntegerArray"], "error": "expected 'begin' got kw:'initialization' near '                                                            initialization   ComputeAesStaticTables;                    '", "src": "procedure Sha256ExpandMessageBlocks(W, Buf: PIntegerArray);\n\n \n\n\n\n\n\n\n \n\n\n \n\n\n\n \n\n \n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n \n  \n\n\n \n \n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n \n\nconst\n  K256: array[0..63] of cardinal = (\n   $428a2f98, $71374491, $b5c0fbcf, $e9b5dba5, $3956c25b, $59f111f1,\n   $923f82a4, $ab1c5ed5, $d807aa98, $12835b01, $243185be, $550c7dc3,\n   $72be5d74, $80deb1fe, $9bdc06a7, $c19bf174, $e49b69c1, $efbe4786,\n   $0fc19dc6, $240ca1cc, $2de92c6f, $4a7484aa, $5cb0a9dc, $76f988da,\n   $983e5152, $a831c66d, $b00327c8, $bf597fc7, $c6e00bf3, $d5a79147,\n   $06ca6351, $14292967, $27b70a85, $2e1b2138, $4d2c6dfc, $53380d13,\n   $650a7354, $766a0abb, $81c2c92e, $92722c85, $a2bfe8a1, $a81a664b,\n   $c24b8b70, $c76c51a3, $d192e819, $d6990624, $f40e3585, $106aa070,\n   $19a4c116, $1e376c08, $2748774c, $34b0bcb5, $391c0cb3, $4ed8aa4a,\n   $5b9cca4f, $682e6ff3, $748f82ee, $78a5636f, $84c87814, $8cc70208,\n   $90befffa, $a4506ceb, $bef9a3f7, $c67178f2);\n\n \n\n\n\n\n\n\n  \n\n\n  \n\n\n \n\n \n\n\n\n \n\n\n \n\n\n\n\n\n \n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n \n\n\n\n\n\n \n\n\n \n\n\n   \n\n\n\n\n\n\n\n \n\nprocedure Sha256CompressPas(var Hash: TSHAHash; Data: pointer);\n\nvar H: TSHAHash;\n    W: array[0..63] of cardinal;\n     \n\n\n \nbegin\n  \n  Sha256ExpandMessageBlocks(@W,Data);\n  \n  H.A := Hash.A;\n  H.B := Hash.B;\n  H.C := Hash.C;\n  H.D := Hash.D;\n  H.E := Hash.E;\n  H.F := Hash.F;\n  H.G := Hash.G;\n  H.H := Hash.H;\n \n\n\n \n\n\n\n\n \n\n\n\n\n \n\n\n\n \n  \n  asm\n    push ebx\n    push esi\n    push edi\n    xor  edi,edi \n    \n@s: mov  eax,[H].TSHAHash.E\n    mov  ecx,eax\n    mov  edx,eax\n    mov  ebx,eax \n    ror  eax,6\n    ror  edx,11\n    ror  ecx,25\n    xor  eax,edx\n    mov  edx,[H].TSHAHash.G\n    xor  eax,ecx\n    mov  ecx,[H].TSHAHash.H\n    add  ecx,eax \n    mov  eax,[H].TSHAHash.F\n    mov  [H].TSHAHash.H,edx\n    mov  [H].TSHAHash.G,eax\n    xor  eax,edx\n    mov  [H].TSHAHash.F,ebx\n    and  eax,ebx\n    xor  eax,edx\n    add  eax,dword ptr [K256+edi*4]\n    add  eax,ecx\n    mov  ecx,[H].TSHAHash.D\n    add  eax,dword ptr [W+edi*4]\n    mov  ebx,[H].TSHAHash.A\n    \n    add  ecx,eax\n    mov  esi,eax  \n    mov  [H].TSHAHash.E,ecx \n    mov  eax,ebx \n    mov  edx,ebx\n    ror  eax,2\n    mov  ecx,ebx\n    ror  edx,13\n    ror  ecx,22\n    xor  eax,edx\n    xor  eax,ecx \n    mov  ecx,[H].TSHAHash.B\n    add  esi,eax\n    mov  eax,ebx \n    mov  edx,ebx \n    or   eax,ecx\n    and  eax,[H].TSHAHash.C   \n    and  edx,ecx\n    or   eax,edx \n    inc  edi\n    add  esi,eax  \n    mov  [H].TSHAHash.A,esi \n    mov  eax,[H].TSHAHash.C \n    mov  [H].TSHAHash.B,ebx\n    mov  [H].TSHAHash.C,ecx\n    mov  [H].TSHAHash.D,eax\n    cmp  edi,64\n    jnz  @s\n    pop  edi\n    pop  esi\n    pop  ebx\n  end;\n \n  \n  inc(Hash.A,H.A);\n  inc(Hash.B,H.B);\n  inc(Hash.C,H.C);\n  inc(Hash.D,H.D);\n  inc(Hash.E,H.E);\n  inc(Hash.F,H.F);\n  inc(Hash.G,H.G);\n  inc(Hash.H,H.H);\nend;"});
  U.func("RawSha256Compress", async function RawSha256Compress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.asRef(p0), "data": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.call(C, "Sha256CompressPas", [(await $.call(C, "TSHAHash", [(await L0["hash"].get())])), L0["data"]])));
  return L0.result;
}, {"params": ["Hash", "Data"], "kind": "procedure", "ptypes": [null, "pointer"]});
  U.method("TSHA256", "Final", async function Final() { return $.notPorted("TSHA256.Final", "cannot assign to call"); }, {"params": ["Digest", "NoInit"], "kind": "procedure", "ptypes": ["TSHA256Digest", "boolean"], "error": "cannot assign to call", "src": "procedure TSHA256.Final(out Digest: TSHA256Digest; NoInit: boolean);\n\nvar Data: TSHAContext absolute Context;\nbegin\n  \n  Data.Buffer[Data.Index] := $80;\n  FillcharFast(Data.Buffer[Data.Index+1],63-Data.Index,0);\n  \n  if Data.Index>=56 then begin\n    RawSha256Compress(Data.Hash,@Data.Buffer);\n    FillcharFast(Data.Buffer,56,0);\n  end;\n  \n  \n  PInteger(@Data.Buffer[56])^ := bswap32(TQWordRec(Data.MLen).H);\n  PInteger(@Data.Buffer[60])^ := bswap32(TQWordRec(Data.MLen).L);\n  RawSha256Compress(Data.Hash,@Data.Buffer);\n  \n  bswap256(@Data.Hash,@Digest);\n  \n  if not NoInit then\n    Init;\nend;"});
  U.method("TSHA256", "Final", async function Final(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.callv(L0["final"], [$.ref(async () => L0["result"], async ($t342) => { L0["result"] = $t342; }), L0["noinit"]])));
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("TSHA256", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "digest": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt($.call(C, "Init", []));
  await $.stmt((await $.call(C, "Update", [L0["buffer"], L0["len"]])));
  await $.stmt((await $.call(C, "Final", [$.ref(async () => (await L0["digest"].get()), async ($t343) => { await L0["digest"].set($t343); })])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA256Digest"]});
  U.method("TSHA256", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "data": $.rec("tshacontext")};
  await $.mset((await $.mv(L0["data"], "Hash")), "A", 1779033703);
  await $.mset((await $.mv(L0["data"], "Hash")), "B", 3144134277);
  await $.mset((await $.mv(L0["data"], "Hash")), "C", 1013904242);
  await $.mset((await $.mv(L0["data"], "Hash")), "D", 2773480762);
  await $.mset((await $.mv(L0["data"], "Hash")), "E", 1359893119);
  await $.mset((await $.mv(L0["data"], "Hash")), "F", 2600822924);
  await $.mset((await $.mv(L0["data"], "Hash")), "G", 528734635);
  await $.mset((await $.mv(L0["data"], "Hash")), "H", 1541459225);
  await $.stmt((await $.call(C, "FillcharFast", [(await $.mv(L0["data"], "MLen")), $.sub((await $.call(C, "sizeof", [L0["data"]])), (await $.call(C, "sizeof", [(await $.mv(L0["data"], "Hash"))]))), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSHA256", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined, "data": $.rec("tshacontext"), "alen": 0};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy($.eq(L0["buffer"], null))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv(L0["data"], "MLen")), async ($t344) => { await $.mset(L0["data"], "MLen", $t344); }), $.shl((await $.call(C, "QWord", [(await $.call(C, "cardinal", [L0["len"]]))])), 3)])));
  while ($.truthy($.gt(L0["len"], 0))) {
    L0["alen"] = $.sub(64, (await $.mv(L0["data"], "Index")));
    if ($.truthy($.le(L0["alen"], L0["len"]))) {
      if ($.truthy($.ne((await $.mv(L0["data"], "Index")), 0))) {
        await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.mv(L0["data"], "Buffer")), [(await $.mv(L0["data"], "Index"))])), L0["alen"]])));
        await $.stmt((await $.call(C, "RawSha256Compress", [$.ref(async () => (await $.mv(L0["data"], "Hash")), async ($t345) => { await $.mset(L0["data"], "Hash", $t345); }), (await $.mref(L0["data"], "Buffer"))])));
        await $.mset(L0["data"], "Index", 0);
      } else {
        await $.stmt((await $.call(C, "RawSha256Compress", [$.ref(async () => (await $.mv(L0["data"], "Hash")), async ($t346) => { await $.mset(L0["data"], "Hash", $t346); }), L0["buffer"]])));
      }
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["len"], async ($t347) => { L0["len"] = $t347; }), L0["alen"]])));
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["buffer"]])), L0["alen"]])));
    } else {
      await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.mv(L0["data"], "Buffer")), [(await $.mv(L0["data"], "Index"))])), L0["len"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv(L0["data"], "Index")), async ($t348) => { await $.mset(L0["data"], "Index", $t348); }), L0["len"]])));
      break;
    }
    await $.tick();
  }
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TSHA256", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["buffer"]])), (await $.call(C, "length", [L0["buffer"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.func("SHA256Weak", async function SHA256Weak(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "digest": $.asRef(p1), result: undefined, "l": 0, "sha": null, "p": null, "tmp": $.sarr()};
  await $.fixArgs(L0, ["s"]);
  L0["l"] = (await $.call(C, "length", [L0["s"]]));
  L0["p"] = (await $.call(C, "pointer", [L0["s"]]));
  if ($.truthy($.lt(L0["l"], (await $.call(C, "sizeof", [L0["tmp"]]))))) {
    await $.stmt((await $.call(C, "FillcharFast", [L0["tmp"], (await $.call(C, "sizeof", [L0["tmp"]])), L0["l"]])));
    if ($.truthy($.gt(L0["l"], 0))) {
      await $.stmt((await $.call(C, "MoveFast", [L0["p"], L0["tmp"], L0["l"]])));
    }
    await $.stmt((await $.mcall(L0["sha"], "Full", [L0["tmp"], (await $.call(C, "sizeof", [L0["tmp"]])), $.ref(async () => (await L0["digest"].get()), async ($t349) => { await L0["digest"].set($t349); })])));
  } else {
    await $.stmt((await $.mcall(L0["sha"], "Full", [L0["p"], L0["l"], $.ref(async () => (await L0["digest"].get()), async ($t350) => { await L0["digest"].set($t350); })])));
  }
  return L0.result;
}, {"params": ["s", "Digest"], "kind": "procedure", "ptypes": ["RawByteString", "TSHA256Digest"]});
  U.func("sha512_compresspas", async function sha512_compresspas(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.asRef(p0), "data": $.copyArg(p1), result: undefined, "a": null, "b": null, "c": null, "d": null, "e": null, "f": null, "g": null, "h": null, "temp1": null, "temp2": null, "w": $.sarr(), "i": 0};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.call(C, "bswap64array", [L0["data"], L0["w"], 16])));
  { const $t351 = 79;
    L0["i"] = 16;
    let $t352 = true;
    for (;;) {
      if (!$t352) { L0["i"] = $.succ(L0["i"], 1); }
      $t352 = false;
      if (!($.ord(L0["i"]) <= $.ord($t351))) break;
      { const $t353 = await $.iset(L0["w"], [L0["i"]], $.add($.add($.add(($.xor($.xor(((await $.or_(($.shr((await $.idx(L0["w"], [$.sub(L0["i"], 2)])), 19)), async () => ($.shl((await $.idx(L0["w"], [$.sub(L0["i"], 2)])), 45))))), ((await $.or_(($.shr((await $.idx(L0["w"], [$.sub(L0["i"], 2)])), 61)), async () => ($.shl((await $.idx(L0["w"], [$.sub(L0["i"], 2)])), 3)))))), ($.shr((await $.idx(L0["w"], [$.sub(L0["i"], 2)])), 6)))), (await $.idx(L0["w"], [$.sub(L0["i"], 7)]))), ($.xor($.xor(((await $.or_(($.shr((await $.idx(L0["w"], [$.sub(L0["i"], 15)])), 1)), async () => ($.shl((await $.idx(L0["w"], [$.sub(L0["i"], 15)])), 63))))), ((await $.or_(($.shr((await $.idx(L0["w"], [$.sub(L0["i"], 15)])), 8)), async () => ($.shl((await $.idx(L0["w"], [$.sub(L0["i"], 15)])), 56)))))), ($.shr((await $.idx(L0["w"], [$.sub(L0["i"], 15)])), 7))))), (await $.idx(L0["w"], [$.sub(L0["i"], 16)])))); if ($t353 !== undefined) { L0["w"] = $t353; } }
      await $.tick();
    }
  }
  L0["a"] = (await $.mv((await L0["hash"].get()), "a"));
  L0["b"] = (await $.mv((await L0["hash"].get()), "b"));
  L0["c"] = (await $.mv((await L0["hash"].get()), "c"));
  L0["d"] = (await $.mv((await L0["hash"].get()), "d"));
  L0["e"] = (await $.mv((await L0["hash"].get()), "e"));
  L0["f"] = (await $.mv((await L0["hash"].get()), "f"));
  L0["g"] = (await $.mv((await L0["hash"].get()), "g"));
  L0["h"] = (await $.mv((await L0["hash"].get()), "h"));
  { const $t354 = 79;
    L0["i"] = 0;
    let $t355 = true;
    for (;;) {
      if (!$t355) { L0["i"] = $.succ(L0["i"], 1); }
      $t355 = false;
      if (!($.ord(L0["i"]) <= $.ord($t354))) break;
      L0["temp1"] = $.add($.add($.add($.add(L0["h"], ($.xor($.xor(((await $.or_(($.shr(L0["e"], 14)), async () => ($.shl(L0["e"], 50))))), ((await $.or_(($.shr(L0["e"], 18)), async () => ($.shl(L0["e"], 46)))))), ((await $.or_(($.shr(L0["e"], 41)), async () => ($.shl(L0["e"], 23)))))))), ($.xor(((await $.and_(L0["e"], async () => L0["f"]))), ((await $.and_($.not(L0["e"]), async () => L0["g"])))))), (await $.idx((await $.v(C, "SHA512K")), [L0["i"]]))), (await $.idx(L0["w"], [L0["i"]])));
      L0["temp2"] = $.add(($.xor($.xor(((await $.or_(($.shr(L0["a"], 28)), async () => ($.shl(L0["a"], 36))))), ((await $.or_(($.shr(L0["a"], 34)), async () => ($.shl(L0["a"], 30)))))), ((await $.or_(($.shr(L0["a"], 39)), async () => ($.shl(L0["a"], 25))))))), ($.xor($.xor(((await $.and_(L0["a"], async () => L0["b"]))), ((await $.and_(L0["a"], async () => L0["c"])))), ((await $.and_(L0["b"], async () => L0["c"]))))));
      L0["h"] = L0["g"];
      L0["g"] = L0["f"];
      L0["f"] = L0["e"];
      L0["e"] = $.add(L0["d"], L0["temp1"]);
      L0["d"] = L0["c"];
      L0["c"] = L0["b"];
      L0["b"] = L0["a"];
      L0["a"] = $.add(L0["temp1"], L0["temp2"]);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "a")), async ($t356) => { await $.mset((await L0["hash"].get()), "a", $t356); }), L0["a"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "b")), async ($t357) => { await $.mset((await L0["hash"].get()), "b", $t357); }), L0["b"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "c")), async ($t358) => { await $.mset((await L0["hash"].get()), "c", $t358); }), L0["c"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "d")), async ($t359) => { await $.mset((await L0["hash"].get()), "d", $t359); }), L0["d"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "e")), async ($t360) => { await $.mset((await L0["hash"].get()), "e", $t360); }), L0["e"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "f")), async ($t361) => { await $.mset((await L0["hash"].get()), "f", $t361); }), L0["f"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "g")), async ($t362) => { await $.mset((await L0["hash"].get()), "g", $t362); }), L0["g"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "h")), async ($t363) => { await $.mset((await L0["hash"].get()), "h", $t363); }), L0["h"]])));
  return L0.result;
}, {"params": ["Hash", "Data"], "kind": "procedure", "ptypes": ["TSHA512Hash", "PQWordArray"]});
  U.func("RawSha512Compress", async function RawSha512Compress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.asRef(p0), "data": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.call(C, "sha512_compresspas", [(await $.call(C, "TSHA512Hash", [(await L0["hash"].get())])), L0["data"]])));
  return L0.result;
}, {"params": ["Hash", "Data"], "kind": "procedure", "ptypes": [null, "pointer"]});
  U.method("TSHA384", "Final", async function Final() { return $.notPorted("TSHA384.Final", "cannot assign to call"); }, {"params": ["Digest", "NoInit"], "kind": "procedure", "ptypes": ["TSHA384Digest", "boolean"], "error": "cannot assign to call", "src": "procedure TSHA384.Final(out Digest: TSHA384Digest; NoInit: boolean);\nbegin\n  Data[Index] := $80;\n  FillcharFast(Data[Index+1],127-Index,0);\n  if Index>=112 then begin\n    RawSha512Compress(Hash,@Data);\n    FillcharFast(Data,112,0);\n  end;\n  PQWord(@Data[112])^ := bswap64(MLen shr 61);\n  PQWord(@Data[120])^ := bswap64(MLen shl 3);\n  RawSha512Compress(Hash,@Data);\n  bswap64array(@Hash,@Digest,6);\n  if not NoInit then\n    Init;\nend;"});
  U.method("TSHA384", "Final", async function Final(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.callv(L0["final"], [$.ref(async () => L0["result"], async ($t366) => { L0["result"] = $t366; }), L0["noinit"]])));
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("TSHA384", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "digest": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt($.call(C, "Init", []));
  await $.stmt((await $.call(C, "Update", [L0["buffer"], L0["len"]])));
  await $.stmt((await $.call(C, "Final", [$.ref(async () => (await L0["digest"].get()), async ($t367) => { await L0["digest"].set($t367); })])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA384Digest"]});
  U.method("TSHA384", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Hash")), "a", (await $.call(C, "QWord", [14680500436340154072])));
  await $.mset((await $.v(C, "Hash")), "b", (await $.call(C, "QWord", [7105036623409894663])));
  await $.mset((await $.v(C, "Hash")), "c", (await $.call(C, "QWord", [10473403895298186519])));
  await $.mset((await $.v(C, "Hash")), "d", (await $.call(C, "QWord", [1526699215303891257])));
  await $.mset((await $.v(C, "Hash")), "e", (await $.call(C, "QWord", [7436329637833083697])));
  await $.mset((await $.v(C, "Hash")), "f", (await $.call(C, "QWord", [10282925794625328401])));
  await $.mset((await $.v(C, "Hash")), "g", (await $.call(C, "QWord", [15784041429090275239])));
  await $.mset((await $.v(C, "Hash")), "h", (await $.call(C, "QWord", [5167115440072839076])));
  await $.set(C, "MLen", 0);
  await $.set(C, "Index", 0);
  await $.stmt((await $.call(C, "FillcharFast", [(await $.v(C, "Data")), (await $.call(C, "sizeof", [(await $.v(C, "Data"))])), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSHA384", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined, "alen": 0};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy((await $.or_(($.eq(L0["buffer"], null)), async () => ($.le(L0["len"], 0)))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "MLen")), async ($t368) => { await $.set(C, "MLen", $t368); }), L0["len"]])));
  do {
    L0["alen"] = $.sub((await $.call(C, "sizeof", [(await $.v(C, "Data"))])), (await $.v(C, "Index")));
    if ($.truthy($.le(L0["alen"], L0["len"]))) {
      if ($.truthy($.ne((await $.v(C, "Index")), 0))) {
        await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.v(C, "Data")), [(await $.v(C, "Index"))])), L0["alen"]])));
        await $.stmt((await $.call(C, "RawSha512Compress", [$.ref(async () => (await $.v(C, "Hash")), async ($t369) => { await $.set(C, "Hash", $t369); }), (await $.ref_(C, "Data"))])));
        await $.set(C, "Index", 0);
      } else {
        await $.stmt((await $.call(C, "RawSha512Compress", [$.ref(async () => (await $.v(C, "Hash")), async ($t370) => { await $.set(C, "Hash", $t370); }), L0["buffer"]])));
      }
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["len"], async ($t371) => { L0["len"] = $t371; }), L0["alen"]])));
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["buffer"]])), L0["alen"]])));
    } else {
      await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.v(C, "Data")), [(await $.v(C, "Index"))])), L0["len"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "Index")), async ($t372) => { await $.set(C, "Index", $t372); }), L0["len"]])));
      break;
    }
    await $.tick();
  } while (!$.truthy($.le(L0["len"], 0)));
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TSHA384", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["buffer"]])), (await $.call(C, "length", [L0["buffer"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("TSHA512", "Final", async function Final() { return $.notPorted("TSHA512.Final", "cannot assign to call"); }, {"params": ["Digest", "NoInit"], "kind": "procedure", "ptypes": ["TSHA512Digest", "boolean"], "error": "cannot assign to call", "src": "procedure TSHA512.Final(out Digest: TSHA512Digest; NoInit: boolean);\nbegin\n  Data[Index] := $80;\n  FillcharFast(Data[Index+1],127-Index,0);\n  if Index>=112 then begin\n    RawSha512Compress(Hash,@Data);\n    FillcharFast(Data,112,0);\n  end;\n  PQWord(@Data[112])^ := bswap64(MLen shr 61);\n  PQWord(@Data[120])^ := bswap64(MLen shl 3);\n  RawSha512Compress(Hash,@Data);\n  bswap64array(@Hash,@Digest,8);\n  if not NoInit then\n    Init;\nend;"});
  U.method("TSHA512", "Final", async function Final(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.callv(L0["final"], [$.ref(async () => L0["result"], async ($t375) => { L0["result"] = $t375; }), L0["noinit"]])));
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("TSHA512", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "digest": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt($.call(C, "Init", []));
  await $.stmt((await $.call(C, "Update", [L0["buffer"], L0["len"]])));
  await $.stmt((await $.call(C, "Final", [$.ref(async () => (await L0["digest"].get()), async ($t376) => { await L0["digest"].set($t376); })])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA512Digest"]});
  U.method("TSHA512", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Hash")), "a", 7640891576956012808);
  await $.mset((await $.v(C, "Hash")), "b", (await $.call(C, "QWord", [13503953896175478587])));
  await $.mset((await $.v(C, "Hash")), "c", 4354685564936845355);
  await $.mset((await $.v(C, "Hash")), "d", (await $.call(C, "QWord", [11912009170470909681])));
  await $.mset((await $.v(C, "Hash")), "e", 5840696475078001361);
  await $.mset((await $.v(C, "Hash")), "f", (await $.call(C, "QWord", [11170449401992604703])));
  await $.mset((await $.v(C, "Hash")), "g", 2270897969802886507);
  await $.mset((await $.v(C, "Hash")), "h", 6620516959819538809);
  await $.set(C, "MLen", 0);
  await $.set(C, "Index", 0);
  await $.stmt((await $.call(C, "FillcharFast", [(await $.v(C, "Data")), (await $.call(C, "sizeof", [(await $.v(C, "Data"))])), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSHA512", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined, "alen": 0};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy((await $.or_(($.eq(L0["buffer"], null)), async () => ($.le(L0["len"], 0)))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "MLen")), async ($t377) => { await $.set(C, "MLen", $t377); }), L0["len"]])));
  do {
    L0["alen"] = $.sub((await $.call(C, "sizeof", [(await $.v(C, "Data"))])), (await $.v(C, "Index")));
    if ($.truthy($.le(L0["alen"], L0["len"]))) {
      if ($.truthy($.ne((await $.v(C, "Index")), 0))) {
        await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.v(C, "Data")), [(await $.v(C, "Index"))])), L0["alen"]])));
        await $.stmt((await $.call(C, "RawSha512Compress", [$.ref(async () => (await $.v(C, "Hash")), async ($t378) => { await $.set(C, "Hash", $t378); }), (await $.ref_(C, "Data"))])));
        await $.set(C, "Index", 0);
      } else {
        await $.stmt((await $.call(C, "RawSha512Compress", [$.ref(async () => (await $.v(C, "Hash")), async ($t379) => { await $.set(C, "Hash", $t379); }), L0["buffer"]])));
      }
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["len"], async ($t380) => { L0["len"] = $t380; }), L0["alen"]])));
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["buffer"]])), L0["alen"]])));
    } else {
      await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.v(C, "Data")), [(await $.v(C, "Index"))])), L0["len"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "Index")), async ($t381) => { await $.set(C, "Index", $t381); }), L0["len"]])));
      break;
    }
    await $.tick();
  } while (!$.truthy($.le(L0["len"], 0)));
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TSHA512", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["buffer"]])), (await $.call(C, "length", [L0["buffer"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.func("KeccakPermutationKernel", async function KeccakPermutationKernel() { return $.notPorted("KeccakPermutationKernel", "asm block"); }, {"params": ["B", "A", "C"], "kind": "procedure", "ptypes": ["Pointer", "Pointer", "Pointer"], "error": "asm block", "src": "procedure KeccakPermutationKernel(B, A, C: Pointer);\n \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n  \n\nasm \n        .noframe\n  \n        mov     r8, rdx\n        mov     rdx, rsi\n        mov     rcx, rdi\n         \n        push    rbx\n        push    r12\n        push    r13\n        push    r14\n        add     rdx, 128\n        add     rcx, 128\n        \n        mov     r10, [rdx - 128]\n        mov     r11, [rdx - 120]\n        mov     r12, [rdx - 112]\n        mov     r13, [rdx - 104]\n        mov     r14, [rdx - 96]\n        xor     r10, [rdx - 88]\n        xor     r11, [rdx - 80]\n        xor     r12, [rdx - 72]\n        xor     r13, [rdx - 64]\n        xor     r14, [rdx - 56]\n        xor     r10, [rdx - 48]\n        xor     r11, [rdx - 40]\n        xor     r12, [rdx - 32]\n        xor     r13, [rdx - 24]\n        xor     r14, [rdx - 16]\n        xor     r10, [rdx - 8]\n        xor     r11, [rdx]\n        xor     r12, [rdx + 8]\n        xor     r13, [rdx + 16]\n        xor     r14, [rdx + 24]\n        xor     r10, [rdx + 32]\n        xor     r11, [rdx + 40]\n        xor     r12, [rdx + 48]\n        xor     r13, [rdx + 56]\n        xor     r14, [rdx + 64]\n        mov     [r8], r10\n        mov     [r8 + 8], r11\n        mov     [r8 + 16], r12\n        mov     [r8 + 24], r13\n        mov     [r8 + 32], r14\n        rol     r10, 1\n        rol     r11, 1\n        rol     r12, 1\n        rol     r13, 1\n        rol     r14, 1\n        xor     r10, [r8 + 24]\n        xor     r11, [r8 + 32]\n        xor     r12, [r8]\n        xor     r13, [r8 + 8]\n        xor     r14, [r8 + 16]\n        \n        mov     rax, [rdx - 128]\n        mov     r8, [rdx - 80]\n        mov     r9, [rdx - 32]\n        mov     rbx, [rdx + 16]\n        xor     rax, r11\n        xor     r8, r12\n        xor     r9, r13\n        xor     rbx, r14\n        rol     r8, 44\n        rol     r9, 43\n        rol     rbx, 21\n        mov     [rcx - 128], rax\n        mov     [rcx - 120], r8\n        mov     [rcx - 112], r9\n        mov     [rcx - 104], rbx\n        mov     rax, [rdx + 64]\n        mov     r8, [rdx - 104]\n        mov     r9, [rdx - 56]\n        mov     rbx, [rdx - 48]\n        xor     rax, r10\n        xor     r8, r14\n        xor     r9, r10\n        xor     rbx, r11\n        rol     rax, 14\n        rol     r8, 28\n        rol     r9, 20\n        rol     rbx, 3\n        mov     [rcx - 96], rax\n        mov     [rcx - 88], r8\n        mov     [rcx - 80], r9\n        mov     [rcx - 72], rbx\n        mov     rax, [rdx]\n        mov     r8, [rdx + 48]\n        mov     r9, [rdx - 120]\n        mov     rbx, [rdx - 72]\n        xor     rax, r12\n        xor     r8, r13\n        xor     r9, r12\n        xor     rbx, r13\n        rol     rax, 45\n        rol     r8, 61\n        rol     r9, 1\n        rol     rbx, 6\n        mov     [rcx - 64], rax\n        mov     [rcx - 56], r8\n        mov     [rcx - 48], r9\n        mov     [rcx - 40], rbx\n        mov     rax, [rdx - 24]\n        mov     r8, [rdx + 24]\n        mov     r9, [rdx + 32]\n        mov     rbx, [rdx - 96]\n        xor     rax, r14\n        xor     r8, r10\n        xor     r9, r11\n        xor     rbx, r10\n        rol     rax, 25\n        rol     r8, 8\n        rol     r9, 18\n        rol     rbx, 27\n        mov     [rcx - 32], rax\n        mov     [rcx - 24], r8\n        mov     [rcx - 16], r9\n        mov     [rcx - 8], rbx\n        mov     rax, [rdx - 88]\n        mov     r8, [rdx - 40]\n        mov     r9, [rdx + 8]\n        mov     rbx, [rdx + 56]\n        xor     rax, r11\n        xor     r8, r12\n        xor     r9, r13\n        xor     rbx, r14\n        rol     rax, 36\n        rol     r8, 10\n        rol     r9, 15\n        rol     rbx, 56\n        mov     [rcx], rax\n        mov     [rcx + 8], r8\n        mov     [rcx + 16], r9\n        mov     [rcx + 24], rbx\n        mov     rax, [rdx - 112]\n        mov     r8, [rdx - 64]\n        mov     r9, [rdx - 16]\n        mov     rbx, [rdx - 8]\n        xor     rax, r13\n        xor     r8, r14\n        xor     r9, r10\n        mov     r10, [rdx + 40]\n        xor     rbx, r11\n        rol     rax, 62\n        rol     r8, 55\n        xor     r10, r12\n        rol     r9, 39\n        rol     rbx, 41\n        mov     [rcx + 32], rax\n        mov     [rcx + 40], r8\n        rol     r10, 2\n        mov     [rcx + 48], r9\n        mov     [rcx + 56], rbx\n        mov     [rcx + 64], r10\n        \n        mov     rax, [rcx - 120]\n        mov     r8, [rcx - 112]\n        mov     r9, [rcx - 104]\n        mov     r10, [rcx - 96]\n        mov     r11, [rcx - 128]\n        mov     r12, [rcx - 80]\n        mov     r13, [rcx - 72]\n        mov     r14, [rcx - 64]\n        mov     rbx, [rcx - 56]\n        not     rax\n        not     r8\n        not     r9\n        not     r10\n        not     r11\n        not     r12\n        not     r13\n        not     r14\n        not     rbx\n        and     rax, [rcx - 112]\n        and     r8, [rcx - 104]\n        and     r9, [rcx - 96]\n        and     r10, [rcx - 128]\n        and     r11, [rcx - 120]\n        and     r12, [rcx - 72]\n        and     r13, [rcx - 64]\n        and     r14, [rcx - 56]\n        and     rbx, [rcx - 88]\n        xor     rax, [rcx - 128]\n        xor     r8, [rcx - 120]\n        xor     r9, [rcx - 112]\n        xor     r10, [rcx - 104]\n        xor     r11, [rcx - 96]\n        xor     r12, [rcx - 88]\n        xor     r13, [rcx - 80]\n        xor     r14, [rcx - 72]\n        xor     rbx, [rcx - 64]\n        mov     [rdx - 128], rax\n        mov     [rdx - 120], r8\n        mov     [rdx - 112], r9\n        mov     [rdx - 104], r10\n        mov     [rdx - 96], r11\n        mov     [rdx - 88], r12\n        mov     [rdx - 80], r13\n        mov     [rdx - 72], r14\n        mov     [rdx - 64], rbx\n        mov     rax, [rcx - 88]\n        m"});
  U.func("KeccakPermutation", async function KeccakPermutation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.copyArg(p0), result: undefined, "b": $.sarr(), "c": $.sarr(), "i": 0};
  await $.fixArgs(L0, ["a"]);
  { const $t382 = 23;
    L0["i"] = 0;
    let $t383 = true;
    for (;;) {
      if (!$t383) { L0["i"] = $.succ(L0["i"], 1); }
      $t383 = false;
      if (!($.ord(L0["i"]) <= $.ord($t382))) break;
      await $.stmt((await $.call(C, "KeccakPermutationKernel", [L0["b"], L0["a"], L0["c"]])));
      { const $t384 = await $.iset(L0["a"], [0], $.xor((await $.idx(L0["a"], [0])), (await $.idx((await $.v(C, "cRoundConstants")), [L0["i"]])))); if ($t384 !== undefined) { L0["a"] = $t384; } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["A"], "kind": "procedure", "ptypes": ["PQWordArray"]});
  U.method("TSHA3Context", "Init", async function Init(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aalgo"]);
  { const $t385 = L0["aalgo"];
    if ($.eq($t385, (await $.v(C, "SHA3_224")))) {
      await $.stmt((await $.call(C, "InitSponge", [1152, 448])));
    }
    else if ($.eq($t385, (await $.v(C, "SHA3_256")))) {
      await $.stmt((await $.call(C, "InitSponge", [1088, 512])));
    }
    else if ($.eq($t385, (await $.v(C, "SHA3_384")))) {
      await $.stmt((await $.call(C, "InitSponge", [832, 768])));
    }
    else if ($.eq($t385, (await $.v(C, "SHA3_512")))) {
      await $.stmt((await $.call(C, "InitSponge", [576, 1024])));
    }
    else if ($.eq($t385, (await $.v(C, "SHAKE_128")))) {
      await $.stmt((await $.call(C, "InitSponge", [1344, 256])));
    }
    else if ($.eq($t385, (await $.v(C, "SHAKE_256")))) {
      await $.stmt((await $.call(C, "InitSponge", [1088, 512])));
    }
    else {
      throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["Unexpected TSHA3Context.Init(%)", [(await $.call(C, "ord", [L0["aalgo"]]))]])));
    }
  }
  await $.set(C, "Algo", L0["aalgo"]);
  return L0.result;
}, {"params": ["aAlgo"], "kind": "procedure", "ptypes": ["TSHA3Algo"]});
  U.method("TSHA3Context", "InitSponge", async function InitSponge(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"arate": $.copyArg(p0), "acapacity": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["arate", "acapacity"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_(($.ne($.add(L0["arate"], L0["acapacity"]), 1600)), async () => ($.le(L0["arate"], 0)))), async () => ($.ge(L0["arate"], 1600)))), async () => ($.ne(((await $.and_(L0["arate"], async () => 63))), 0)))))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["Unexpected TSHA3Context.Init(%,%)", [L0["arate"], L0["acapacity"]]])));
  }
  await $.stmt((await $.call(C, "FillCharFast", [Self, (await $.call(C, "sizeof", [Self])), 0])));
  await $.set(C, "Rate", L0["arate"]);
  await $.set(C, "Capacity", L0["acapacity"]);
  return L0.result;
}, {"params": ["aRate", "aCapacity"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.method("TSHA3Context", "AbsorbQueue", async function AbsorbQueue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "XorMemoryPtrInt", [(await $.ref_(C, "State")), (await $.ref_(C, "DataQueue")), $.shr((await $.v(C, "Rate")), 6)])));
  await $.stmt((await $.call(C, "KeccakPermutation", [(await $.ref_(C, "State"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSHA3Context", "Absorb", async function Absorb(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "databitlen": $.copyArg(p1), result: undefined, "i": 0, "j": 0, "wholeblocks": 0, "partialblock": 0, "partialbyte": 0, "curdata": null};
  await $.fixArgs(L0, ["data", "databitlen"]);
  if ($.truthy($.ne((await $.and_((await $.v(C, "BitsInQueue")), async () => 7)), 0))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "Create", ["TSHA3Context.Absorb: only last may contain partial"])));
  }
  if ($.truthy((await $.v(C, "Squeezing")))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "Create", ["TSHA3Context.Absorb: too late for additional input"])));
  }
  L0["i"] = 0;
  while ($.truthy($.lt(L0["i"], L0["databitlen"]))) {
    if ($.truthy((await $.and_((await $.and_(($.eq((await $.v(C, "BitsInQueue")), 0)), async () => ($.ge(L0["databitlen"], (await $.v(C, "Rate")))))), async () => ($.le(L0["i"], ($.sub(L0["databitlen"], (await $.v(C, "Rate")))))))))) {
      L0["wholeblocks"] = $.idiv(($.sub(L0["databitlen"], L0["i"])), (await $.v(C, "Rate")));
      L0["curdata"] = (await $.idx(L0["data"], [$.shr(L0["i"], 3)]));
      { const $t386 = L0["wholeblocks"];
        L0["j"] = 1;
        let $t387 = true;
        for (;;) {
          if (!$t387) { L0["j"] = $.succ(L0["j"], 1); }
          $t387 = false;
          if (!($.ord(L0["j"]) <= $.ord($t386))) break;
          await $.stmt((await $.call(C, "XorMemoryPtrInt", [(await $.ref_(C, "State")), L0["curdata"], $.shr((await $.v(C, "Rate")), 6)])));
          await $.stmt((await $.call(C, "KeccakPermutation", [(await $.ref_(C, "State"))])));
          await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["curdata"]])), $.shr((await $.v(C, "Rate")), 3)])));
          await $.tick();
        }
      }
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t388) => { L0["i"] = $t388; }), $.mul(L0["wholeblocks"], (await $.v(C, "Rate")))])));
    } else {
      L0["partialblock"] = $.sub(L0["databitlen"], L0["i"]);
      if ($.truthy($.gt($.add(L0["partialblock"], (await $.v(C, "BitsInQueue"))), (await $.v(C, "Rate"))))) {
        L0["partialblock"] = $.sub((await $.v(C, "Rate")), (await $.v(C, "BitsInQueue")));
      }
      L0["partialbyte"] = (await $.and_(L0["partialblock"], async () => 7));
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["partialblock"], async ($t389) => { L0["partialblock"] = $t389; }), L0["partialbyte"]])));
      await $.stmt((await $.call(C, "MoveFast", [(await $.idx(L0["data"], [$.shr(L0["i"], 3)])), (await $.idx((await $.v(C, "DataQueue")), [$.shr((await $.v(C, "BitsInQueue")), 3)])), $.shr(L0["partialblock"], 3)])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "BitsInQueue")), async ($t390) => { await $.set(C, "BitsInQueue", $t390); }), L0["partialblock"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t391) => { L0["i"] = $t391; }), L0["partialblock"]])));
      if ($.truthy($.eq((await $.v(C, "BitsInQueue")), (await $.v(C, "Rate"))))) {
        await $.stmt($.call(C, "AbsorbQueue", []));
        await $.set(C, "BitsInQueue", 0);
      }
      if ($.truthy($.gt(L0["partialbyte"], 0))) {
        { const $t392 = await $.iset((await $.v(C, "DataQueue")), [$.shr((await $.v(C, "BitsInQueue")), 3)], (await $.and_((await $.idx(L0["data"], [$.shr(L0["i"], 3)])), async () => ($.sub(($.shl(1, L0["partialbyte"])), 1))))); if ($t392 !== undefined) { await $.set(C, "DataQueue", $t392); } }
        await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "BitsInQueue")), async ($t393) => { await $.set(C, "BitsInQueue", $t393); }), L0["partialbyte"]])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t394) => { L0["i"] = $t394; }), L0["partialbyte"]])));
      }
    }
    await $.tick();
  }
  return L0.result;
}, {"params": ["data", "databitlen"], "kind": "procedure", "ptypes": ["PByteArray", "integer"]});
  U.method("TSHA3Context", "AbsorbFinal", async function AbsorbFinal(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "databitlen": $.copyArg(p1), result: undefined, "lastbyte": 0};
  await $.fixArgs(L0, ["data", "databitlen"]);
  if ($.truthy($.eq((await $.and_(L0["databitlen"], async () => 7)), 0))) {
    await $.stmt((await $.call(C, "Absorb", [L0["data"], L0["databitlen"]])));
  } else {
    await $.stmt((await $.call(C, "Absorb", [L0["data"], $.sub(L0["databitlen"], ((await $.and_(L0["databitlen"], async () => 7))))])));
    L0["lastbyte"] = $.shr((await $.idx(L0["data"], [$.shr(L0["databitlen"], 3)])), ($.sub(8, ((await $.and_(L0["databitlen"], async () => 7))))));
    await $.stmt((await $.call(C, "Absorb", [L0["lastbyte"], (await $.and_(L0["databitlen"], async () => 7))])));
  }
  return L0.result;
}, {"params": ["data", "databitlen"], "kind": "procedure", "ptypes": ["PByteArray", "integer"]});
  U.method("TSHA3Context", "PadAndSwitchToSqueezingPhase", async function PadAndSwitchToSqueezingPhase(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  if ($.truthy($.eq($.add((await $.v(C, "BitsInQueue")), 1), (await $.v(C, "Rate"))))) {
    L0["i"] = $.shr((await $.v(C, "BitsInQueue")), 3);
    { const $t395 = await $.iset((await $.v(C, "DataQueue")), [L0["i"]], (await $.or_((await $.idx((await $.v(C, "DataQueue")), [L0["i"]])), async () => ($.shl(1, ((await $.and_((await $.v(C, "BitsInQueue")), async () => 7)))))))); if ($t395 !== undefined) { await $.set(C, "DataQueue", $t395); } }
    await $.stmt($.call(C, "AbsorbQueue", []));
    await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "DataQueue")), $.shr((await $.v(C, "Rate")), 3), 0])));
  } else {
    L0["i"] = $.shr((await $.v(C, "BitsInQueue")), 3);
    await $.stmt((await $.call(C, "FillCharFast", [(await $.idx((await $.v(C, "DataQueue")), [$.shr(($.add((await $.v(C, "BitsInQueue")), 7)), 3)])), $.sub($.shr((await $.v(C, "Rate")), 3), $.shr(($.add((await $.v(C, "BitsInQueue")), 7)), 3)), 0])));
    { const $t396 = await $.iset((await $.v(C, "DataQueue")), [L0["i"]], (await $.or_((await $.idx((await $.v(C, "DataQueue")), [L0["i"]])), async () => ($.shl(1, ((await $.and_((await $.v(C, "BitsInQueue")), async () => 7)))))))); if ($t396 !== undefined) { await $.set(C, "DataQueue", $t396); } }
  }
  L0["i"] = $.shr(($.sub((await $.v(C, "Rate")), 1)), 3);
  { const $t397 = await $.iset((await $.v(C, "DataQueue")), [L0["i"]], (await $.or_((await $.idx((await $.v(C, "DataQueue")), [L0["i"]])), async () => ($.shl(1, ((await $.and_(($.sub((await $.v(C, "Rate")), 1)), async () => 7)))))))); if ($t397 !== undefined) { await $.set(C, "DataQueue", $t397); } }
  await $.stmt($.call(C, "AbsorbQueue", []));
  await $.stmt((await $.call(C, "MoveFast", [(await $.v(C, "State")), (await $.v(C, "DataQueue")), $.shr((await $.v(C, "Rate")), 3)])));
  await $.set(C, "BitsAvailableForSqueezing", (await $.v(C, "Rate")));
  await $.set(C, "Squeezing", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSHA3Context", "Squeeze", async function Squeeze(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"output": $.copyArg(p0), "outputlength": $.copyArg(p1), result: undefined, "i": 0, "partialblock": 0};
  await $.fixArgs(L0, ["output", "outputlength"]);
  if ($.truthy($.not((await $.v(C, "Squeezing"))))) {
    await $.stmt($.call(C, "PadAndSwitchToSqueezingPhase", []));
  }
  if ($.truthy($.ne((await $.and_(L0["outputlength"], async () => 7)), 0))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["TSHA3Context.Squeeze(%?)", [L0["outputlength"]]])));
  }
  L0["i"] = 0;
  while ($.truthy($.lt(L0["i"], L0["outputlength"]))) {
    if ($.truthy($.eq((await $.v(C, "BitsAvailableForSqueezing")), 0))) {
      await $.stmt((await $.call(C, "KeccakPermutation", [(await $.ref_(C, "State"))])));
      await $.stmt((await $.call(C, "MoveFast", [(await $.v(C, "State")), (await $.v(C, "DataQueue")), $.shr((await $.v(C, "Rate")), 3)])));
      await $.set(C, "BitsAvailableForSqueezing", (await $.v(C, "Rate")));
    }
    L0["partialblock"] = (await $.v(C, "BitsAvailableForSqueezing"));
    if ($.truthy($.gt(L0["partialblock"], $.sub(L0["outputlength"], L0["i"])))) {
      L0["partialblock"] = $.sub(L0["outputlength"], L0["i"]);
    }
    await $.stmt((await $.call(C, "MoveFast", [(await $.idx((await $.v(C, "DataQueue")), [$.shr(($.sub((await $.v(C, "Rate")), (await $.v(C, "BitsAvailableForSqueezing")))), 3)])), (await $.idx(L0["output"], [$.shr(L0["i"], 3)])), $.shr(L0["partialblock"], 3)])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "BitsAvailableForSqueezing")), async ($t398) => { await $.set(C, "BitsAvailableForSqueezing", $t398); }), L0["partialblock"]])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t399) => { L0["i"] = $t399; }), L0["partialblock"]])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["output", "outputLength"], "kind": "procedure", "ptypes": ["PByteArray", "integer"]});
  U.method("TSHA3Context", "FinalBit_LSB", async function FinalBit_LSB(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"bits": $.copyArg(p0), "bitlen": $.copyArg(p1), "hashval": $.copyArg(p2), "numbits": $.copyArg(p3), result: undefined, "ll": 0, "lw": 0};
  await $.fixArgs(L0, ["bits", "bitlen", "hashval", "numbits"]);
  L0["bitlen"] = (await $.and_(L0["bitlen"], async () => 7));
  if ($.truthy($.eq(L0["bitlen"], 0))) {
    L0["lw"] = 0;
  } else {
    L0["lw"] = (await $.and_(L0["bits"], async () => (await $.call(C, "Pred", [$.shl((await $.call(C, "word", [1])), L0["bitlen"])]))));
  }
  if ($.truthy($.ge((await $.v(C, "Algo")), (await $.v(C, "SHAKE_128"))))) {
    L0["lw"] = (await $.or_(L0["lw"], async () => ($.shl((await $.call(C, "word", [15])), L0["bitlen"]))));
    L0["ll"] = $.add(L0["bitlen"], 4);
  } else {
    L0["lw"] = (await $.or_(L0["lw"], async () => ($.shl((await $.call(C, "word", [2])), L0["bitlen"]))));
    L0["ll"] = $.add(L0["bitlen"], 2);
  }
  if ($.truthy($.lt(L0["ll"], 9))) {
    L0["lw"] = $.shl(L0["lw"], ($.sub(8, L0["ll"])));
    await $.stmt((await $.call(C, "AbsorbFinal", [L0["lw"], L0["ll"]])));
    await $.stmt((await $.call(C, "Squeeze", [L0["hashval"], L0["numbits"]])));
  } else {
    await $.stmt((await $.call(C, "AbsorbFinal", [L0["lw"], 8])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ll"], async ($t400) => { L0["ll"] = $t400; }), 8])));
    L0["lw"] = $.shr(L0["lw"], L0["ll"]);
    await $.stmt((await $.call(C, "AbsorbFinal", [L0["lw"], L0["ll"]])));
    await $.stmt((await $.call(C, "Squeeze", [L0["hashval"], L0["numbits"]])));
  }
  return L0.result;
}, {"params": ["bits", "bitlen", "hashval", "numbits"], "kind": "procedure", "ptypes": ["byte", "integer", "Pointer", "integer"]});
  U.method("TSHA3", "Init", async function Init(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["algo"]);
  await $.stmt((await $.mcall((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "Init", [L0["algo"]])));
  return L0.result;
}, {"params": ["Algo"], "kind": "procedure", "ptypes": ["TSHA3Algo"]});
  U.method("TSHA3", "Algorithm", async function Algorithm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "Algo"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSHA3", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["buffer"]);
  if ($.truthy($.ne(L0["buffer"], ""))) {
    await $.stmt((await $.mcall((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "Absorb", [(await $.call(C, "pointer", [L0["buffer"]])), $.shl((await $.call(C, "Length", [L0["buffer"]])), 3)])));
  }
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("TSHA3", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy($.gt(L0["len"], 0))) {
    await $.stmt((await $.mcall((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "Absorb", [L0["buffer"], $.shl(L0["len"], 3)])));
  }
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TSHA3", "Final", async function Final(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"digest": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Final", [(await L0["digest"].get()), 256, L0["noinit"]])));
  return L0.result;
}, {"params": ["Digest", "NoInit"], "kind": "procedure", "ptypes": ["THash256", "boolean"]});
  U.method("TSHA3", "Final", async function Final(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"digest": $.asRef(p0), "noinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Final", [(await L0["digest"].get()), 512, L0["noinit"]])));
  return L0.result;
}, {"params": ["Digest", "NoInit"], "kind": "procedure", "ptypes": ["THash512", "boolean"]});
  U.method("TSHA3", "Final", async function Final(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"digest": $.copyArg(p0), "digestbits": $.copyArg(p1), "noinit": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["digest", "digestbits", "noinit"]);
  if ($.truthy($.eq(L0["digestbits"], 0))) {
    L0["digestbits"] = (await $.idx((await $.v(C, "SHA3_DEF_LEN")), [(await $.mv((await $.call(C, "TSHA3Context", [(await $.v(C, "Context"))])), "Algo"))]));
  }
  if ($.truthy((await $.mv((await $.call(C, "TSHA3Context", [(await $.v(C, "Context"))])), "Squeezing")))) {
    await $.stmt((await $.mcall((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "Squeeze", [L0["digest"], L0["digestbits"]])));
  } else {
    await $.stmt((await $.mcall((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "FinalBit_LSB", [0, 0, L0["digest"], L0["digestbits"]])));
  }
  if ($.truthy($.not(L0["noinit"]))) {
    await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "Context")), (await $.call(C, "sizeof", [(await $.v(C, "Context"))])), 0])));
  }
  return L0.result;
}, {"params": ["Digest", "DigestBits", "NoInit"], "kind": "procedure", "ptypes": ["pointer", "integer", "boolean"]});
  U.method("TSHA3", "Final256", async function Final256(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Final", [$.ref(async () => L0["result"], async ($t401) => { L0["result"] = $t401; }), L0["noinit"]])));
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("TSHA3", "Final512", async function Final512(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.call(C, "Final", [$.ref(async () => L0["result"], async ($t402) => { L0["result"] = $t402; }), L0["noinit"]])));
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("TSHA3", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "digest": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt((await $.call(C, "Full", [(await $.v(C, "SHA3_256")), L0["buffer"], $.ref(async () => L0["len"], async ($t403) => { L0["len"] = $t403; }), (await L0["digest"].get()), 256])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "THash256"]});
  U.method("TSHA3", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "digest": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt((await $.call(C, "Full", [(await $.v(C, "SHA3_512")), L0["buffer"], $.ref(async () => L0["len"], async ($t404) => { L0["len"] = $t404; }), (await L0["digest"].get()), 512])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "THash512"]});
  U.method("TSHA3", "Full", async function Full(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), "buffer": $.copyArg(p1), "len": $.copyArg(p2), "digest": $.copyArg(p3), "digestbits": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["algo", "buffer", "len", "digest", "digestbits"]);
  await $.stmt((await $.call(C, "Init", [L0["algo"]])));
  await $.stmt((await $.call(C, "Update", [L0["buffer"], L0["len"]])));
  await $.stmt((await $.call(C, "Final", [$.ref(async () => L0["digest"], async ($t405) => { L0["digest"] = $t405; }), L0["digestbits"]])));
  return L0.result;
}, {"params": ["Algo", "Buffer", "Len", "Digest", "DigestBits"], "kind": "procedure", "ptypes": ["TSHA3Algo", "pointer", "integer", "pointer", "integer"]});
  U.method("TSHA3", "FullStr", async function FullStr(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), "buffer": $.copyArg(p1), "len": $.copyArg(p2), "digestbits": $.copyArg(p3), result: null, "tmp": null};
  await $.fixArgs(L0, ["algo", "buffer", "len", "digestbits"]);
  if ($.truthy($.eq(L0["digestbits"], 0))) {
    L0["digestbits"] = (await $.idx((await $.v(C, "SHA3_DEF_LEN")), [L0["algo"]]));
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["tmp"], async ($t406) => { L0["tmp"] = $t406; }), $.shr(L0["digestbits"], 3)])));
  await $.stmt((await $.call(C, "Full", [L0["algo"], L0["buffer"], $.ref(async () => L0["len"], async ($t407) => { L0["len"] = $t407; }), (await $.call(C, "pointer", [L0["tmp"]])), L0["digestbits"]])));
  L0["result"] = (await $.mcall((await $.v(C, "SynCommons")), "BinToHex", [L0["tmp"]]));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["Algo", "Buffer", "Len", "DigestBits"], "kind": "function", "ptypes": ["TSHA3Algo", "pointer", "integer", "integer"]});
  U.method("TSHA3", "Cypher", async function Cypher(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "source": $.copyArg(p1), "dest": $.copyArg(p2), "keylen": $.copyArg(p3), "datalen": $.copyArg(p4), "algo": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["key", "source", "dest", "keylen", "datalen", "algo"]);
  if ($.truthy($.le(L0["datalen"], 0))) {
    return L0.result;
  }
  if ($.truthy($.eq(L0["source"], L0["dest"]))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "Create", ["Unexpected TSHA3.Cypher(Source=Dest)"])));
  }
  await $.stmt((await $.call(C, "Full", [L0["algo"], L0["key"], $.ref(async () => L0["keylen"], async ($t408) => { L0["keylen"] = $t408; }), L0["dest"], $.shl(L0["datalen"], 3)])));
  await $.stmt((await $.call(C, "XorMemory", [L0["dest"], L0["source"], L0["datalen"]])));
  return L0.result;
}, {"params": ["Key", "Source", "Dest", "KeyLen", "DataLen", "Algo"], "kind": "procedure", "ptypes": ["pointer", "pointer", "pointer", "integer", "integer", "TSHA3Algo"]});
  U.method("TSHA3", "Cypher", async function Cypher(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "source": $.copyArg(p1), "algo": $.copyArg(p2), result: null, "len": 0};
  await $.fixArgs(L0, ["key", "source", "algo"]);
  L0["len"] = (await $.call(C, "length", [L0["source"]]));
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t409) => { L0["result"] = $t409; }), null, L0["len"]])));
  await $.stmt((await $.callv(L0["cypher"], [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "pointer", [L0["source"]])), (await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "length", [L0["key"]])), L0["len"]])));
  return L0.result;
}, {"params": ["Key", "Source", "Algo"], "kind": "function", "ptypes": ["RawByteString", "RawByteString", "TSHA3Algo"]});
  U.method("TSHA3", "InitCypher", async function InitCypher(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keylen": $.copyArg(p1), "algo": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["key", "keylen", "algo"]);
  await $.stmt((await $.call(C, "Init", [L0["algo"]])));
  await $.stmt((await $.call(C, "Update", [L0["key"], L0["keylen"]])));
  await $.stmt((await $.mcall((await $.call(C, "PSHA3Context", [(await $.ref_(C, "Context"))])), "FinalBit_LSB", [0, 0, null, 0])));
  return L0.result;
}, {"params": ["Key", "KeyLen", "Algo"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA3Algo"]});
  U.method("TSHA3", "InitCypher", async function InitCypher(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "algo": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["key", "algo"]);
  await $.stmt((await $.call(C, "InitCypher", [(await $.call(C, "pointer", [L0["key"]])), (await $.call(C, "length", [L0["key"]])), L0["algo"]])));
  return L0.result;
}, {"params": ["Key", "Algo"], "kind": "procedure", "ptypes": ["RawByteString", "TSHA3Algo"]});
  U.method("TSHA3", "Cypher", async function Cypher(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), "dest": $.copyArg(p1), "datalen": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["source", "dest", "datalen"]);
  await $.stmt((await $.call(C, "Final", [$.ref(async () => L0["dest"], async ($t410) => { L0["dest"] = $t410; }), $.shl(L0["datalen"], 3), true])));
  await $.stmt((await $.call(C, "XorMemory", [L0["dest"], L0["source"], L0["datalen"]])));
  return L0.result;
}, {"params": ["Source", "Dest", "DataLen"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer"]});
  U.method("TSHA3", "Cypher", async function Cypher(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), result: null, "len": 0};
  await $.fixArgs(L0, ["source"]);
  L0["len"] = (await $.call(C, "length", [L0["source"]]));
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t411) => { L0["result"] = $t411; }), null, L0["len"]])));
  await $.stmt((await $.callv(L0["cypher"], [(await $.call(C, "pointer", [L0["source"]])), (await $.call(C, "pointer", [L0["result"]])), L0["len"]])));
  return L0.result;
}, {"params": ["Source"], "kind": "function", "ptypes": ["RawByteString"]});
  U.method("TSHA3", "Done", async function Done(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "FillCharFast", [Self, (await $.call(C, "sizeof", [Self])), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("SHA3", async function SHA3(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), "s": $.copyArg(p1), "digestbits": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["algo", "s", "digestbits"]);
  L0["result"] = (await $.callv(L0["sha3"], [L0["algo"], (await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "length", [L0["s"]])), L0["digestbits"]]));
  return L0.result;
}, {"params": ["Algo", "s", "DigestBits"], "kind": "function", "ptypes": ["TSHA3Algo", "RawByteString", "integer"]});
  U.func("SHA3", async function SHA3(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), "buffer": $.copyArg(p1), "len": $.copyArg(p2), "digestbits": $.copyArg(p3), result: null, "instance": null};
  await $.fixArgs(L0, ["algo", "buffer", "len", "digestbits"]);
  L0["result"] = (await $.mcall(L0["instance"], "FullStr", [L0["algo"], L0["buffer"], L0["len"], L0["digestbits"]]));
  return L0.result;
}, {"params": ["Algo", "Buffer", "Len", "DigestBits"], "kind": "function", "ptypes": ["TSHA3Algo", "pointer", "integer", "integer"]});
  U.func("PBKDF2_SHA3", async function PBKDF2_SHA3(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), "password": $.copyArg(p1), "salt": $.copyArg(p2), "count": $.copyArg(p3), "result": $.copyArg(p4), "resultbytes": $.copyArg(p5), result: undefined, "i": 0, "tmp": null, "mac": null, "first": null};
  await $.fixArgs(L0, ["algo", "password", "salt", "count", "result", "resultbytes"]);
  if ($.truthy($.le(L0["resultbytes"], 0))) {
    L0["resultbytes"] = $.shr((await $.idx((await $.v(C, "SHA3_DEF_LEN")), [L0["algo"]])), 3);
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["tmp"], async ($t412) => { L0["tmp"] = $t412; }), L0["resultbytes"]])));
  await $.stmt((await $.mcall(L0["first"], "Init", [L0["algo"]])));
  await $.stmt((await $.mcall(L0["first"], "Update", [L0["password"]])));
  L0["mac"] = L0["first"];
  await $.stmt((await $.mcall(L0["mac"], "Update", [L0["salt"]])));
  await $.stmt((await $.mcall(L0["mac"], "Final", [(await $.call(C, "pointer", [L0["tmp"]])), $.shl(L0["resultbytes"], 3), true])));
  await $.stmt((await $.call(C, "MoveFast", [(await $.call(C, "pointer", [L0["tmp"]])), L0["result"], L0["resultbytes"]])));
  { const $t413 = L0["count"];
    L0["i"] = 2;
    let $t414 = true;
    for (;;) {
      if (!$t414) { L0["i"] = $.succ(L0["i"], 1); }
      $t414 = false;
      if (!($.ord(L0["i"]) <= $.ord($t413))) break;
      L0["mac"] = L0["first"];
      await $.stmt((await $.mcall(L0["mac"], "Update", [(await $.call(C, "pointer", [L0["tmp"]])), L0["resultbytes"]])));
      await $.stmt((await $.mcall(L0["mac"], "Final", [(await $.call(C, "pointer", [L0["tmp"]])), $.shl(L0["resultbytes"], 3), true])));
      await $.stmt((await $.call(C, "XorMemory", [(await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "pointer", [L0["tmp"]])), L0["resultbytes"]])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillcharFast", [L0["mac"], (await $.call(C, "sizeof", [L0["mac"]])), 0])));
  await $.stmt((await $.call(C, "FillcharFast", [L0["first"], (await $.call(C, "sizeof", [L0["first"]])), 0])));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["algo", "password", "salt", "count", "result", "resultbytes"], "kind": "procedure", "ptypes": ["TSHA3Algo", "RawByteString", "RawByteString", "Integer", "PByte", "Integer"]});
  U.func("PBKDF2_SHA3_Crypt", async function PBKDF2_SHA3_Crypt(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"algo": $.copyArg(p0), "password": $.copyArg(p1), "salt": $.copyArg(p2), "count": $.copyArg(p3), "data": $.asRef(p4), result: undefined, "key": null, "len": 0};
  await $.fixArgs(L0, ["algo", "password", "salt", "count"]);
  L0["len"] = (await $.call(C, "length", [(await L0["data"].get())]));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["key"], async ($t415) => { L0["key"] = $t415; }), L0["len"]])));
  await $.stmt((await $.call(C, "PBKDF2_SHA3", [L0["algo"], L0["password"], L0["salt"], L0["count"], (await $.call(C, "pointer", [L0["key"]])), L0["len"]])));
  await $.stmt((await $.call(C, "XorMemory", [(await $.call(C, "pointer", [(await L0["data"].get())])), (await $.call(C, "pointer", [L0["key"]])), L0["len"]])));
  await $.stmt((await $.call(C, "FillZero", [L0["key"]])));
  return L0.result;
}, {"params": ["algo", "password", "salt", "count", "data"], "kind": "procedure", "ptypes": ["TSHA3Algo", "RawByteString", "RawByteString", "Integer", "RawByteString"]});
  U.method("TSynHasher", "Init", async function Init(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["aalgo"]);
  await $.set(C, "fAlgo", L0["aalgo"]);
  L0["result"] = true;
  { const $t416 = L0["aalgo"];
    if ($.eq($t416, (await $.v(C, "hfMD5")))) {
      await $.mcall((await $.call(C, "PMD5", [(await $.ref_(C, "ctxt"))])), "Init", []);
    }
    else if ($.eq($t416, (await $.v(C, "hfSHA1")))) {
      await $.mcall((await $.call(C, "PSHA1", [(await $.ref_(C, "ctxt"))])), "Init", []);
    }
    else if ($.eq($t416, (await $.v(C, "hfSHA256")))) {
      await $.mcall((await $.call(C, "PSHA256", [(await $.ref_(C, "ctxt"))])), "Init", []);
    }
    else if ($.eq($t416, (await $.v(C, "hfSHA384")))) {
      await $.mcall((await $.call(C, "PSHA384", [(await $.ref_(C, "ctxt"))])), "Init", []);
    }
    else if ($.eq($t416, (await $.v(C, "hfSHA512")))) {
      await $.mcall((await $.call(C, "PSHA512", [(await $.ref_(C, "ctxt"))])), "Init", []);
    }
    else if ($.eq($t416, (await $.v(C, "hfSHA3_256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Init", [(await $.v(C, "SHA3_256"))])));
    }
    else if ($.eq($t416, (await $.v(C, "hfSHA3_512")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Init", [(await $.v(C, "SHA3_512"))])));
    }
    else {
      L0["result"] = false;
    }
  }
  return L0.result;
}, {"params": ["aAlgo"], "kind": "function", "ptypes": ["THashAlgo"]});
  U.method("TSynHasher", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"abuffer": $.copyArg(p0), "alen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["abuffer", "alen"]);
  { const $t417 = (await $.v(C, "fAlgo"));
    if ($.eq($t417, (await $.v(C, "hfMD5")))) {
      await $.stmt((await $.mcall((await $.call(C, "PMD5", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t417, (await $.v(C, "hfSHA1")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA1", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t417, (await $.v(C, "hfSHA256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA256", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t417, (await $.v(C, "hfSHA384")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA384", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t417, (await $.v(C, "hfSHA512")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA512", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t417, (await $.v(C, "hfSHA3_256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t417, (await $.v(C, "hfSHA3_512")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
  }
  return L0.result;
}, {"params": ["aBuffer", "aLen"], "kind": "procedure", "ptypes": ["Pointer", "integer"]});
  U.method("TSynHasher", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"abuffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["abuffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["abuffer"]])), (await $.call(C, "length", [L0["abuffer"]]))])));
  return L0.result;
}, {"params": ["aBuffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("TSynHasher", "Final", async function Final(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  { const $t418 = (await $.v(C, "fAlgo"));
    if ($.eq($t418, (await $.v(C, "hfMD5")))) {
      L0["result"] = (await $.call(C, "MD5DigestToString", [(await $.mv((await $.call(C, "PMD5", [(await $.ref_(C, "ctxt"))])), "Final"))]));
    }
    else if ($.eq($t418, (await $.v(C, "hfSHA1")))) {
      L0["result"] = (await $.call(C, "SHA1DigestToString", [(await $.mv((await $.call(C, "PSHA1", [(await $.ref_(C, "ctxt"))])), "Final"))]));
    }
    else if ($.eq($t418, (await $.v(C, "hfSHA256")))) {
      L0["result"] = (await $.call(C, "SHA256DigestToString", [(await $.mv((await $.call(C, "PSHA256", [(await $.ref_(C, "ctxt"))])), "Final"))]));
    }
    else if ($.eq($t418, (await $.v(C, "hfSHA384")))) {
      L0["result"] = (await $.call(C, "SHA384DigestToString", [(await $.mv((await $.call(C, "PSHA384", [(await $.ref_(C, "ctxt"))])), "Final"))]));
    }
    else if ($.eq($t418, (await $.v(C, "hfSHA512")))) {
      L0["result"] = (await $.call(C, "SHA512DigestToString", [(await $.mv((await $.call(C, "PSHA512", [(await $.ref_(C, "ctxt"))])), "Final"))]));
    }
    else if ($.eq($t418, (await $.v(C, "hfSHA3_256")))) {
      L0["result"] = (await $.call(C, "SHA256DigestToString", [(await $.mv((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Final256"))]));
    }
    else if ($.eq($t418, (await $.v(C, "hfSHA3_512")))) {
      L0["result"] = (await $.call(C, "SHA512DigestToString", [(await $.mv((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Final512"))]));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSynHasher", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "abuffer": $.copyArg(p1), "alen": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["aalgo", "abuffer", "alen"]);
  await $.stmt((await $.call(C, "Init", [L0["aalgo"]])));
  await $.stmt((await $.call(C, "Update", [L0["abuffer"], L0["alen"]])));
  L0["result"] = (await $.v(C, "Final"));
  return L0.result;
}, {"params": ["aAlgo", "aBuffer", "aLen"], "kind": "function", "ptypes": ["THashAlgo", "Pointer", "integer"]});
  U.func("HashFull", async function HashFull(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "abuffer": $.copyArg(p1), "alen": $.copyArg(p2), result: null, "hasher": null};
  await $.fixArgs(L0, ["aalgo", "abuffer", "alen"]);
  L0["result"] = (await $.mcall(L0["hasher"], "Full", [L0["aalgo"], L0["abuffer"], $.ref(async () => L0["alen"], async ($t419) => { L0["alen"] = $t419; })]));
  return L0.result;
}, {"params": ["aAlgo", "aBuffer", "aLen"], "kind": "function", "ptypes": ["THashAlgo", "Pointer", "integer"]});
  U.func("HashFile", async function HashFile(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), "aalgo": $.copyArg(p1), result: null, "hasher": null, "temp": null, "f": 0, "size": null, "read": 0};
  await $.fixArgs(L0, ["afilename", "aalgo"]);
  L0["result"] = "";
  if ($.truthy((await $.or_(($.eq(L0["afilename"], "")), async () => $.not((await $.mcall(L0["hasher"], "Init", [L0["aalgo"]]))))))) {
    return L0.result;
  }
  L0["f"] = (await $.call(C, "FileOpenSequentialRead", [L0["afilename"]]));
  if ($.truthy($.ge((await $.call(C, "PtrInt", [L0["f"]])), 0))) {
    try {
      await $.mset(L0["size"], "L", (await $.call(C, "GetFileSize", [L0["f"], (await $.mref(L0["size"], "H"))])));
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["temp"], async ($t420) => { L0["temp"] = $t420; }), $.shl(1, 20)])));
      while ($.truthy($.gt((await $.mv(L0["size"], "V")), 0))) {
        L0["read"] = (await $.call(C, "FileRead", [L0["f"], (await $.call(C, "pointer", [L0["temp"]])), $.shl(1, 20)]));
        if ($.truthy($.le(L0["read"], 0))) {
          return L0.result;
        }
        await $.stmt((await $.mcall(L0["hasher"], "Update", [(await $.call(C, "pointer", [L0["temp"]])), L0["read"]])));
        await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["size"], "V")), async ($t421) => { await $.mset(L0["size"], "V", $t421); }), L0["read"]])));
        await $.tick();
      }
      L0["result"] = (await $.mv(L0["hasher"], "Final"));
    } finally {
      await $.stmt((await $.call(C, "FileClose", [L0["f"]])));
    }
  }
  return L0.result;
}, {"params": ["aFileName", "aAlgo"], "kind": "function", "ptypes": ["TFileName", "THashAlgo"]});
  U.func("HashFile", async function HashFile(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"afilename": $.copyArg(p0), "aalgos": $.copyArg(p1), result: undefined, "data": null, "hash": null, "efn": '', "fn": '', "a": null};
  await $.fixArgs(L0, ["afilename", "aalgos"]);
  if ($.truthy($.eq(L0["aalgos"], []))) {
    return L0.result;
  }
  L0["efn"] = (await $.call(C, "ExtractFileName", [L0["afilename"]]));
  L0["data"] = (await $.call(C, "StringFromFile", [L0["afilename"]]));
  if ($.truthy($.ne(L0["data"], ""))) {
    { const $t422 = (await $.call(C, "high", [L0["a"]]));
      L0["a"] = (await $.call(C, "low", [L0["a"]]));
      let $t423 = true;
      for (;;) {
        if (!$t423) { L0["a"] = $.succ(L0["a"], 1); }
        $t423 = false;
        if (!($.ord(L0["a"]) <= $.ord($t422))) break;
        if ($.truthy($.in_(L0["a"], L0["aalgos"]))) {
          await $.stmt((await $.call(C, "FormatUTF8", ["% *%", [(await $.call(C, "HashFull", [L0["a"], (await $.call(C, "pointer", [L0["data"]])), (await $.call(C, "length", [L0["data"]]))])), L0["efn"]], L0["hash"]])));
          await $.stmt((await $.call(C, "FormatString", ["%.%", [L0["efn"], (await $.call(C, "LowerCase", [(await $.call(C, "TrimLeftLowerCaseShort", [(await $.call(C, "ToText", [L0["a"]]))]))]))], L0["fn"]])));
          await $.stmt((await $.call(C, "FileFromString", [L0["hash"], L0["fn"]])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["aFileName", "aAlgos"], "kind": "procedure", "ptypes": ["TFileName", "THashAlgos"]});
  U.method("TSynSigner", "Init", async function Init(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "asecret": $.copyArg(p1), "asecretlen": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["aalgo", "asecret", "asecretlen"]);
  L0["sign_size"] = [20, 32, 48, 64, 28, 32, 48, 64, 32, 64];
  L0["sha3_algo"] = [(await $.v(C, "SHA3_224")), (await $.v(C, "SHA3_256")), (await $.v(C, "SHA3_384")), (await $.v(C, "SHA3_512")), (await $.v(C, "SHAKE_128")), (await $.v(C, "SHAKE_256"))];
  await $.set(C, "fAlgo", L0["aalgo"]);
  await $.set(C, "fSignatureSize", (await $.idx(L0["sign_size"], [(await $.v(C, "fAlgo"))])));
  { const $t424 = (await $.v(C, "fAlgo"));
    if ($.eq($t424, (await $.v(C, "saSha1")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA1", [(await $.ref_(C, "ctxt"))])), "Init", [L0["asecret"], L0["asecretlen"]])));
    }
    else if ($.eq($t424, (await $.v(C, "saSha256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA256", [(await $.ref_(C, "ctxt"))])), "Init", [L0["asecret"], L0["asecretlen"]])));
    }
    else if ($.eq($t424, (await $.v(C, "saSha384")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA384", [(await $.ref_(C, "ctxt"))])), "Init", [L0["asecret"], L0["asecretlen"]])));
    }
    else if ($.eq($t424, (await $.v(C, "saSha512")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA512", [(await $.ref_(C, "ctxt"))])), "Init", [L0["asecret"], L0["asecretlen"]])));
    }
    else if ($.inRange($t424, (await $.v(C, "saSha3224")), (await $.v(C, "saSha3S256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Init", [(await $.idx(L0["sha3_algo"], [(await $.v(C, "fAlgo"))]))])));
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Update", [L0["asecret"], L0["asecretlen"]])));
    }
  }
  return L0.result;
}, {"params": ["aAlgo", "aSecret", "aSecretLen"], "kind": "procedure", "ptypes": ["TSignAlgo", "pointer", "integer"]});
  U.method("TSynSigner", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "asecret": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["aalgo", "asecret"]);
  await $.stmt((await $.call(C, "Init", [L0["aalgo"], (await $.call(C, "pointer", [L0["asecret"]])), (await $.call(C, "length", [L0["asecret"]]))])));
  return L0.result;
}, {"params": ["aAlgo", "aSecret"], "kind": "procedure", "ptypes": ["TSignAlgo", "RawUTF8"]});
  U.method("TSynSigner", "Init", async function Init(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "asecret": $.copyArg(p1), "asalt": $.copyArg(p2), "asecretpbkdf2rounds": $.copyArg(p3), "apbkdf2secret": $.copyArg(p4), result: undefined, "temp": null};
  await $.fixArgs(L0, ["aalgo", "asecret", "asalt", "asecretpbkdf2rounds", "apbkdf2secret"]);
  if ($.truthy($.gt(L0["asecretpbkdf2rounds"], 1))) {
    await $.stmt((await $.call(C, "PBKDF2", [L0["aalgo"], $.ref(async () => L0["asecret"], async ($t425) => { L0["asecret"] = $t425; }), $.ref(async () => L0["asalt"], async ($t426) => { L0["asalt"] = $t426; }), L0["asecretpbkdf2rounds"], $.ref(async () => L0["temp"], async ($t427) => { L0["temp"] = $t427; })])));
    await $.stmt((await $.call(C, "Init", [L0["aalgo"], L0["temp"], (await $.v(C, "fSignatureSize"))])));
    if ($.truthy($.ne(L0["apbkdf2secret"], null))) {
      L0["apbkdf2secret"] = L0["temp"];
    }
    await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["temp"], "b"))])));
  } else {
    await $.stmt((await $.call(C, "Init", [L0["aalgo"], L0["asecret"]])));
  }
  return L0.result;
}, {"params": ["aAlgo", "aSecret", "aSalt", "aSecretPBKDF2Rounds", "aPBKDF2Secret"], "kind": "procedure", "ptypes": ["TSignAlgo", "RawUTF8", "RawUTF8", "integer", "PHash512Rec"]});
  U.method("TSynSigner", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"abuffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["abuffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["abuffer"]])), (await $.call(C, "length", [L0["abuffer"]]))])));
  return L0.result;
}, {"params": ["aBuffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.method("TSynSigner", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"abuffer": $.copyArg(p0), "alen": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["abuffer", "alen"]);
  { const $t428 = (await $.v(C, "fAlgo"));
    if ($.eq($t428, (await $.v(C, "saSha1")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA1", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t428, (await $.v(C, "saSha256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA256", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t428, (await $.v(C, "saSha384")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA384", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.eq($t428, (await $.v(C, "saSha512")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA512", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
    else if ($.inRange($t428, (await $.v(C, "saSha3224")), (await $.v(C, "saSha3S256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Update", [L0["abuffer"], L0["alen"]])));
    }
  }
  return L0.result;
}, {"params": ["aBuffer", "aLen"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TSynSigner", "Final", async function Final(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"asignature": $.asRef(p0), "anoinit": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["anoinit"]);
  { const $t429 = (await $.v(C, "fAlgo"));
    if ($.eq($t429, (await $.v(C, "saSha1")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA1", [(await $.ref_(C, "ctxt"))])), "Done", [$.ref(async () => (await $.mv((await L0["asignature"].get()), "b160")), async ($t430) => { await $.mset((await L0["asignature"].get()), "b160", $t430); }), L0["anoinit"]])));
    }
    else if ($.eq($t429, (await $.v(C, "saSha256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA256", [(await $.ref_(C, "ctxt"))])), "Done", [$.ref(async () => (await $.mv((await L0["asignature"].get()), "Lo")), async ($t431) => { await $.mset((await L0["asignature"].get()), "Lo", $t431); }), L0["anoinit"]])));
    }
    else if ($.eq($t429, (await $.v(C, "saSha384")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA384", [(await $.ref_(C, "ctxt"))])), "Done", [$.ref(async () => (await $.mv((await L0["asignature"].get()), "b384")), async ($t432) => { await $.mset((await L0["asignature"].get()), "b384", $t432); }), L0["anoinit"]])));
    }
    else if ($.eq($t429, (await $.v(C, "saSha512")))) {
      await $.stmt((await $.mcall((await $.call(C, "PHMAC_SHA512", [(await $.ref_(C, "ctxt"))])), "Done", [$.ref(async () => (await $.mv((await L0["asignature"].get()), "b")), async ($t433) => { await $.mset((await L0["asignature"].get()), "b", $t433); }), L0["anoinit"]])));
    }
    else if ($.inRange($t429, (await $.v(C, "saSha3224")), (await $.v(C, "saSha3S256")))) {
      await $.stmt((await $.mcall((await $.call(C, "PSHA3", [(await $.ref_(C, "ctxt"))])), "Final", [(await L0["asignature"].get()), $.shl((await $.v(C, "fSignatureSize")), 3), L0["anoinit"]])));
    }
  }
  return L0.result;
}, {"params": ["aSignature", "aNoInit"], "kind": "procedure", "ptypes": ["THash512Rec", "boolean"]});
  U.method("TSynSigner", "Final", async function Final(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "sig": null};
  await $.stmt((await $.callv(L0["final"], [$.ref(async () => L0["sig"], async ($t434) => { L0["sig"] = $t434; })])));
  L0["result"] = (await $.call(C, "BinToHexLower", [L0["sig"], (await $.v(C, "fSignatureSize"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSynSigner", "Full", async function Full(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "asecret": $.copyArg(p1), "abuffer": $.copyArg(p2), "alen": $.copyArg(p3), result: null};
  await $.fixArgs(L0, ["aalgo", "asecret", "abuffer", "alen"]);
  await $.stmt((await $.call(C, "Init", [L0["aalgo"], L0["asecret"]])));
  await $.stmt((await $.call(C, "Update", [L0["abuffer"], L0["alen"]])));
  L0["result"] = (await $.v(C, "Final"));
  return L0.result;
}, {"params": ["aAlgo", "aSecret", "aBuffer", "aLen"], "kind": "function", "ptypes": ["TSignAlgo", "RawUTF8", "Pointer", "integer"]});
  U.method("TSynSigner", "Full", async function Full(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "asecret": $.copyArg(p1), "asalt": $.copyArg(p2), "asecretpbkdf2rounds": $.copyArg(p3), "abuffer": $.copyArg(p4), "alen": $.copyArg(p5), result: null};
  await $.fixArgs(L0, ["aalgo", "asecret", "asalt", "asecretpbkdf2rounds", "abuffer", "alen"]);
  await $.stmt((await $.call(C, "Init", [L0["aalgo"], L0["asecret"], L0["asalt"], L0["asecretpbkdf2rounds"]])));
  await $.stmt((await $.call(C, "Update", [L0["abuffer"], L0["alen"]])));
  L0["result"] = (await $.v(C, "Final"));
  return L0.result;
}, {"params": ["aAlgo", "aSecret", "aSalt", "aSecretPBKDF2Rounds", "aBuffer", "aLen"], "kind": "function", "ptypes": ["TSignAlgo", "RawUTF8", "RawUTF8", "integer", "Pointer", "integer"]});
  U.method("TSynSigner", "PBKDF2", async function PBKDF2(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"aalgo": $.copyArg(p0), "asecret": $.copyArg(p1), "asalt": $.copyArg(p2), "asecretpbkdf2rounds": $.copyArg(p3), "aderivatedkey": $.asRef(p4), result: undefined, "iter": null, "temp": null, "i": 0};
  await $.fixArgs(L0, ["aalgo", "asecret", "asalt", "asecretpbkdf2rounds"]);
  await $.stmt((await $.call(C, "Init", [L0["aalgo"], L0["asecret"]])));
  L0["iter"] = Self;
  await $.stmt((await $.mcall(L0["iter"], "Update", [L0["asalt"]])));
  if ($.truthy($.lt((await $.v(C, "fAlgo")), (await $.v(C, "saSha3224"))))) {
    await $.stmt((await $.mcall(L0["iter"], "Update", ["\u0000\u0000\u0000\u0001"])));
  }
  await $.stmt((await $.mcall(L0["iter"], "Final", [$.ref(async () => (await L0["aderivatedkey"].get()), async ($t435) => { await L0["aderivatedkey"].set($t435); }), true])));
  if ($.truthy($.lt(L0["asecretpbkdf2rounds"], 2))) {
    return L0.result;
  }
  L0["temp"] = (await L0["aderivatedkey"].get());
  { const $t436 = L0["asecretpbkdf2rounds"];
    L0["i"] = 2;
    let $t437 = true;
    for (;;) {
      if (!$t437) { L0["i"] = $.succ(L0["i"], 1); }
      $t437 = false;
      if (!($.ord(L0["i"]) <= $.ord($t436))) break;
      L0["iter"] = Self;
      await $.stmt((await $.mcall(L0["iter"], "Update", [L0["temp"], (await $.v(C, "fSignatureSize"))])));
      await $.stmt((await $.mcall(L0["iter"], "Final", [$.ref(async () => L0["temp"], async ($t438) => { L0["temp"] = $t438; }), true])));
      await $.stmt((await $.call(C, "XorMemory", [(await L0["aderivatedkey"].get()), L0["temp"], (await $.v(C, "fSignatureSize"))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["temp"], "b"))])));
  await $.stmt((await $.call(C, "FillCharFast", [(await $.mv(L0["iter"], "ctxt")), (await $.call(C, "SizeOf", [(await $.mv(L0["iter"], "ctxt"))])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "ctxt")), (await $.call(C, "SizeOf", [(await $.v(C, "ctxt"))])), 0])));
  return L0.result;
}, {"params": ["aAlgo", "aSecret", "aSalt", "aSecretPBKDF2Rounds", "aDerivatedKey"], "kind": "procedure", "ptypes": ["TSignAlgo", "RawUTF8", "RawUTF8", "integer", "THash512Rec"]});
  U.method("TSynSigner", "PBKDF2", async function PBKDF2(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aparams": $.copyArg(p0), "aderivatedkey": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["aparams"]);
  await $.stmt((await $.call(C, "PBKDF2", [(await $.mv(L0["aparams"], "algo")), $.ref(async () => (await $.mv(L0["aparams"], "secret")), async ($t439) => { await $.mset(L0["aparams"], "secret", $t439); }), $.ref(async () => (await $.mv(L0["aparams"], "salt")), async ($t440) => { await $.mset(L0["aparams"], "salt", $t440); }), (await $.mv(L0["aparams"], "rounds")), $.ref(async () => (await L0["aderivatedkey"].get()), async ($t441) => { await L0["aderivatedkey"].set($t441); })])));
  return L0.result;
}, {"params": ["aParams", "aDerivatedKey"], "kind": "procedure", "ptypes": ["TSynSignerParams", "THash512Rec"]});
  U.method("TSynSigner", "PBKDF2", async function PBKDF2(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"aparamsjson": $.copyArg(p0), "aparamsjsonlen": $.copyArg(p1), "aderivatedkey": $.asRef(p2), "adefaultsalt": $.copyArg(p3), "adefaultalgo": $.copyArg(p4), result: undefined, "tmp": null, "k": $.rec("tsynsignerparams")};
  await $.fixArgs(L0, ["aparamsjson", "aparamsjsonlen", "adefaultsalt", "adefaultalgo"]);
  L0["setdefault"] = $.fn(async function SetDefault() {
  const L1 = {result: undefined};
  await $.mset(L0["k"], "algo", L0["adefaultalgo"]);
  await $.mset(L0["k"], "secret", "");
  await $.mset(L0["k"], "salt", L0["adefaultsalt"]);
  await $.mset(L0["k"], "rounds", 1000);
  return L1.result;
});
  await $.stmt($.callv(L0["setdefault"], []));
  if ($.truthy((await $.or_(($.eq(L0["aparamsjson"], null)), async () => ($.le(L0["aparamsjsonlen"], 0)))))) {
    await $.mset(L0["k"], "secret", L0["adefaultsalt"]);
  } else {
    if ($.truthy($.ne((await $.idx(L0["aparamsjson"], [1])), "{"))) {
      await $.stmt((await $.call(C, "FastSetString", [(await $.mv(L0["k"], "secret")), L0["aparamsjson"], L0["aparamsjsonlen"]])));
    } else {
      await $.stmt((await $.mcall(L0["tmp"], "Init", [L0["aparamsjson"], L0["aparamsjsonlen"]])));
      try {
        if ($.truthy((await $.or_((await $.or_(($.eq((await $.call(C, "RecordLoadJSON", [L0["k"], (await $.mv(L0["tmp"], "buf")), (await $.call(C, "TypeInfo", [(await $.v(C, "TSynSignerParams"))]))])), null)), async () => ($.eq((await $.mv(L0["k"], "secret")), "")))), async () => ($.eq((await $.mv(L0["k"], "salt")), "")))))) {
          await $.stmt($.callv(L0["setdefault"], []));
          await $.stmt((await $.call(C, "FastSetString", [(await $.mv(L0["k"], "secret")), L0["aparamsjson"], L0["aparamsjsonlen"]])));
        }
      } finally {
        await $.stmt((await $.call(C, "FillCharFast", [(await $.mv(L0["tmp"], "buf")), (await $.mv(L0["tmp"], "len")), 0])));
        await $.mcall(L0["tmp"], "Done", []);
      }
    }
  }
  await $.stmt((await $.call(C, "PBKDF2", [(await $.mv(L0["k"], "algo")), $.ref(async () => (await $.mv(L0["k"], "secret")), async ($t442) => { await $.mset(L0["k"], "secret", $t442); }), $.ref(async () => (await $.mv(L0["k"], "salt")), async ($t443) => { await $.mset(L0["k"], "salt", $t443); }), (await $.mv(L0["k"], "rounds")), $.ref(async () => (await L0["aderivatedkey"].get()), async ($t444) => { await L0["aderivatedkey"].set($t444); })])));
  await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["k"], "secret"))])));
  return L0.result;
}, {"params": ["aParamsJSON", "aParamsJSONLen", "aDerivatedKey", "aDefaultSalt", "aDefaultAlgo"], "kind": "procedure", "ptypes": ["PUTF8Char", "integer", "THash512Rec", "RawUTF8", "TSignAlgo"]});
  U.method("TSynSigner", "PBKDF2", async function PBKDF2(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aparamsjson": $.copyArg(p0), "aderivatedkey": $.asRef(p1), "adefaultsalt": $.copyArg(p2), "adefaultalgo": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["aparamsjson", "adefaultsalt", "adefaultalgo"]);
  await $.stmt((await $.call(C, "PBKDF2", [(await $.call(C, "pointer", [L0["aparamsjson"]])), (await $.call(C, "length", [L0["aparamsjson"]])), $.ref(async () => (await L0["aderivatedkey"].get()), async ($t445) => { await L0["aderivatedkey"].set($t445); }), L0["adefaultsalt"], $.ref(async () => L0["adefaultalgo"], async ($t446) => { L0["adefaultalgo"] = $t446; })])));
  return L0.result;
}, {"params": ["aParamsJSON", "aDerivatedKey", "aDefaultSalt", "aDefaultAlgo"], "kind": "procedure", "ptypes": ["RawUTF8", "THash512Rec", "RawUTF8", "TSignAlgo"]});
  U.method("TSynSigner", "AssignTo", async function AssignTo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aderivatedkey": $.asRef(p0), "aaes": $.asRef(p1), "aencrypt": $.copyArg(p2), result: undefined, "ks": 0};
  await $.fixArgs(L0, ["aencrypt"]);
  { const $t447 = (await $.v(C, "Algo"));
    if ($.eq($t447, (await $.v(C, "saSha3S128")))) {
      L0["ks"] = 128;
    }
    else if ($.eq($t447, (await $.v(C, "saSha3S256")))) {
      L0["ks"] = 256;
    }
    else {
      { const $t448 = (await $.v(C, "SignatureSize"));
        if ($.eq($t448, 20)) {
          L0["ks"] = 128;
          await $.mset((await L0["aderivatedkey"].get()), "i0", $.xor((await $.mv((await L0["aderivatedkey"].get()), "i0")), (await $.mv((await L0["aderivatedkey"].get()), "i4"))));
        }
        else if ($.eq($t448, 28)) {
          L0["ks"] = 192;
        }
        else if ($.eq($t448, 32)) {
          L0["ks"] = 256;
        }
        else if ($.eq($t448, 48)) {
          L0["ks"] = 256;
          await $.mset((await L0["aderivatedkey"].get()), "d0", $.xor((await $.mv((await L0["aderivatedkey"].get()), "d0")), (await $.mv((await L0["aderivatedkey"].get()), "d4"))));
          await $.mset((await L0["aderivatedkey"].get()), "d1", $.xor((await $.mv((await L0["aderivatedkey"].get()), "d1")), (await $.mv((await L0["aderivatedkey"].get()), "d5"))));
        }
        else if ($.eq($t448, 64)) {
          L0["ks"] = 256;
          await $.mset((await L0["aderivatedkey"].get()), "d0", $.xor((await $.mv((await L0["aderivatedkey"].get()), "d0")), (await $.mv((await L0["aderivatedkey"].get()), "d4"))));
          await $.mset((await L0["aderivatedkey"].get()), "d1", $.xor((await $.mv((await L0["aderivatedkey"].get()), "d1")), (await $.mv((await L0["aderivatedkey"].get()), "d5"))));
          await $.mset((await L0["aderivatedkey"].get()), "d2", $.xor((await $.mv((await L0["aderivatedkey"].get()), "d0")), (await $.mv((await L0["aderivatedkey"].get()), "d6"))));
          await $.mset((await L0["aderivatedkey"].get()), "d3", $.xor((await $.mv((await L0["aderivatedkey"].get()), "d1")), (await $.mv((await L0["aderivatedkey"].get()), "d7"))));
        }
        else {
          return L0.result;
        }
      }
    }
  }
  await $.stmt((await $.mcall((await L0["aaes"].get()), "DoInit", [(await L0["aderivatedkey"].get()), L0["ks"], L0["aencrypt"]])));
  await $.stmt((await $.call(C, "FillZero", [(await $.mv((await L0["aderivatedkey"].get()), "b"))])));
  return L0.result;
}, {"params": ["aDerivatedKey", "aAES", "aEncrypt"], "kind": "procedure", "ptypes": ["THash512Rec", "TAES", "boolean"]});
  U.method("TSynSigner", "Done", async function Done(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "FillCharFast", [Self, (await $.call(C, "SizeOf", [Self])), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("AES", async function AES(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "buffer": $.copyArg(p2), "len": $.copyArg(p3), "encrypt": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["key", "keysize", "buffer", "len", "encrypt"]);
  await $.stmt((await $.call(C, "AES", [L0["key"], L0["keysize"], L0["buffer"], L0["buffer"], L0["len"], L0["encrypt"]])));
  return L0.result;
}, {"params": ["Key", "KeySize", "buffer", "Len", "Encrypt"], "kind": "procedure", "ptypes": [null, "cardinal", "pointer", "Integer", "boolean"]});
  U.func("AES", async function AES(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "bin": $.copyArg(p2), "bout": $.copyArg(p3), "len": $.copyArg(p4), "encrypt": $.copyArg(p5), result: undefined, "n": 0, "pin": null, "pout": null, "crypt": null};
  await $.fixArgs(L0, ["key", "keysize", "bin", "bout", "len", "encrypt"]);
  if ($.truthy((await $.or_(($.eq(L0["bin"], null)), async () => ($.eq(L0["bout"], null)))))) {
    return L0.result;
  }
  L0["n"] = $.shr(L0["len"], (await $.v(C, "AESBlockShift")));
  if ($.truthy($.lt(L0["n"], 0))) {
    return L0.result;
  } else {
    if ($.truthy($.gt(L0["n"], 0))) {
      if ($.truthy((await $.and_(($.gt(L0["keysize"], 4)), async () => $.not((await $.mcall(L0["crypt"], "DoInit", [L0["key"], L0["keysize"], L0["encrypt"]]))))))) {
        L0["keysize"] = 4;
      }
    }
  }
  if ($.truthy($.eq(L0["keysize"], 0))) {
    await $.stmt((await $.call(C, "MoveFast", [L0["bin"], L0["bout"], L0["len"]])));
    return L0.result;
  }
  if ($.truthy($.lt(L0["n"], 1))) {
    await $.stmt((await $.call(C, "MoveFast", [L0["bin"], L0["bout"], L0["len"]])));
    await $.stmt((await $.call(C, "XorOffset", [L0["bout"], 0, L0["len"]])));
    return L0.result;
  }
  await $.stmt((await $.mcall(L0["crypt"], "DoBlocks", [L0["bin"], L0["bout"], $.ref(async () => L0["pin"], async ($t449) => { L0["pin"] = $t449; }), $.ref(async () => L0["pout"], async ($t450) => { L0["pout"] = $t450; }), L0["n"], L0["encrypt"]])));
  L0["n"] = (await $.and_((await $.call(C, "cardinal", [L0["len"]])), async () => (await $.v(C, "AESBlockMod"))));
  await $.stmt((await $.call(C, "MoveFast", [L0["pin"], L0["pout"], L0["n"]])));
  await $.stmt((await $.call(C, "XorOffset", [(await $.call(C, "pointer", [L0["pout"]])), $.sub(L0["len"], L0["n"]), L0["n"]])));
  await $.mcall(L0["crypt"], "Done", []);
  return L0.result;
}, {"params": ["Key", "KeySize", "bIn", "bOut", "Len", "Encrypt"], "kind": "procedure", "ptypes": [null, "cardinal", "pointer", "pointer", "Integer", "boolean"]});
  U.func("AES", async function AES(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "s": $.copyArg(p2), "encrypt": $.copyArg(p3), result: null};
  await $.fixArgs(L0, ["key", "keysize", "s", "encrypt"]);
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t451) => { L0["result"] = $t451; }), null, (await $.call(C, "length", [L0["s"]]))])));
  if ($.truthy($.ne(L0["s"], ""))) {
    await $.stmt((await $.callv(L0["aes"], [L0["key"], L0["keysize"], (await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "length", [L0["s"]])), L0["encrypt"]])));
  }
  return L0.result;
}, {"params": ["Key", "KeySize", "s", "Encrypt"], "kind": "function", "ptypes": [null, "cardinal", "RawByteString", "boolean"]});
  U.func("AES", async function AES(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "buffer": $.copyArg(p2), "len": $.copyArg(p3), "stream": $.copyArg(p4), "encrypt": $.copyArg(p5), result: false, "buf": null, "last": 0, "b": 0, "n": 0, "i": 0, "crypt": null};
  await $.fixArgs(L0, ["key", "keysize", "buffer", "len", "stream", "encrypt"]);
  L0["result"] = false;
  if ($.truthy($.eq(L0["buffer"], null))) {
    return L0.result;
  }
  if ($.truthy((await $.and_(($.gt(L0["keysize"], 4)), async () => $.not((await $.mcall(L0["crypt"], "DoInit", [L0["key"], L0["keysize"], L0["encrypt"]]))))))) {
    L0["keysize"] = 4;
  }
  if ($.truthy($.eq(L0["keysize"], 0))) {
    await $.stmt((await $.mcall(L0["stream"], "WriteBuffer", [L0["buffer"], L0["len"]])));
    L0["result"] = true;
    return L0.result;
  }
  await $.stmt((await $.call(C, "getmem", [L0["buf"], (await $.v(C, "TmpSize"))])));
  try {
    L0["last"] = (await $.and_(L0["len"], async () => (await $.v(C, "AESBlockMod"))));
    L0["n"] = $.sub(L0["len"], L0["last"]);
    L0["i"] = 0;
    while ($.truthy($.gt(L0["n"], 0))) {
      if ($.truthy($.gt(L0["n"], (await $.v(C, "TmpSize"))))) {
        L0["b"] = (await $.v(C, "TmpSize"));
      } else {
        L0["b"] = L0["n"];
      }
      await $.stmt((await $.call(C, "assert", [$.eq((await $.and_(L0["b"], async () => (await $.v(C, "AESBlockMod")))), 0)])));
      if ($.truthy($.eq(L0["keysize"], 4))) {
        await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], L0["buf"], L0["b"]])));
        await $.stmt((await $.call(C, "XorOffset", [(await $.call(C, "pointer", [L0["buf"]])), L0["i"], L0["b"]])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t452) => { L0["i"] = $t452; }), L0["b"]])));
      } else {
        await $.stmt((await $.mcall(L0["crypt"], "DoBlocks", [L0["buffer"], L0["buf"], $.shr(L0["b"], (await $.v(C, "AESBlockShift"))), $.ref(async () => L0["encrypt"], async ($t453) => { L0["encrypt"] = $t453; })])));
      }
      await $.stmt((await $.mcall(L0["stream"], "WriteBuffer", [L0["buf"], L0["b"]])));
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["buffer"]])), L0["b"]])));
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["n"], async ($t454) => { L0["n"] = $t454; }), L0["b"]])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "assert", [(await $.or_(($.gt(L0["keysize"], 4)), async () => ($.eq(L0["i"], $.sub(L0["len"], L0["last"])))))])));
    if ($.truthy($.gt(L0["last"], 0))) {
      await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], L0["buf"], L0["last"]])));
      await $.stmt((await $.call(C, "XorOffset", [(await $.call(C, "pointer", [L0["buf"]])), $.sub(L0["len"], L0["last"]), L0["last"]])));
      await $.stmt((await $.mcall(L0["stream"], "WriteBuffer", [L0["buf"], L0["last"]])));
    }
    L0["result"] = true;
  } finally {
    await $.stmt((await $.call(C, "freemem", [L0["buf"]])));
  }
  return L0.result;
}, {"params": ["Key", "KeySize", "buffer", "Len", "Stream", "Encrypt"], "kind": "function", "ptypes": [null, "cardinal", "pointer", "cardinal", "TStream", "boolean"]});
  U.func("KeyFrom", async function KeyFrom(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["key", "keysize"]);
  { const $t455 = $.idiv(L0["keysize"], 8);
    if ($.eq($t455, 0)) {
      L0["result"] = 0;
    }
    else if ($.eq($t455, 1)) {
      L0["result"] = (await $.call(C, "PByte", [L0["key"]]));
    }
    else if ($.eq($t455, 2) || $.eq($t455, 3)) {
      L0["result"] = (await $.call(C, "PWord", [L0["key"]]));
    }
    else {
      L0["result"] = (await $.call(C, "PInteger", [L0["key"]]));
    }
  }
  return L0.result;
}, {"params": ["Key", "KeySize"], "kind": "function", "ptypes": [null, "cardinal"]});
  U.method("TAESFullHeader", "Calc", async function Calc(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["key", "keysize"]);
  L0["result"] = $.xor($.xor($.xor((await $.call(C, "Adler32Asm", [L0["keysize"], L0["key"], $.shr(L0["keysize"], 3)])), (await $.idx((await $.v(C, "Te0")), [(await $.and_((await $.v(C, "OriginalLen")), async () => 255))]))), (await $.idx((await $.v(C, "Te1")), [(await $.and_((await $.v(C, "SourceLen")), async () => 255))]))), (await $.idx((await $.v(C, "Td0")), [(await $.and_((await $.v(C, "SomeSalt")), async () => 2047))])));
  return L0.result;
}, {"params": ["Key", "KeySize"], "kind": "function", "ptypes": [null, "cardinal"]});
  U.method("TAESFull", "EncodeDecode", async function EncodeDecode(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "inlen": $.copyArg(p2), "encrypt": $.copyArg(p3), "instream": $.copyArg(p4), "outstream": $.copyArg(p5), "bin": $.copyArg(p6), "bout": $.copyArg(p7), "originallen": (p8 === undefined ? 0 : p8), result: 0, "tmp": null, "pin": null, "pout": null, "crypt": null, "nblock": 0, "xorcod": 0, "n": 0, "lastlen": 0, "i": 0, "last": null};
  await $.fixArgs(L0, ["key", "keysize", "inlen", "encrypt", "instream", "outstream", "bin", "bout", "originallen"]);
  L0["read"] = $.fn(async function Read(p0, p1) {
  const L1 = {"tmp": $.copyArg(p0), "bytecount": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["tmp", "bytecount"]);
  if ($.truthy($.eq(L0["pin"], null))) {
    await $.stmt((await $.mcall(L0["instream"], "Read", [$.ref(async () => L1["tmp"], async ($t456) => { L1["tmp"] = $t456; }), $.ref(async () => L1["bytecount"], async ($t457) => { L1["bytecount"] = $t457; })])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L0["pin"], L1["tmp"], L1["bytecount"]])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["pin"]])), L1["bytecount"]])));
  }
  return L1.result;
});
  L0["write"] = $.fn(async function Write(p0, p1) {
  const L1 = {"tmp": $.copyArg(p0), "bytecount": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["tmp", "bytecount"]);
  if ($.truthy($.eq(L0["pout"], null))) {
    await $.stmt((await $.mcall(L0["outstream"], "WriteBuffer", [L1["tmp"], L1["bytecount"]])));
  } else {
    await $.stmt((await $.call(C, "MoveFast", [L1["tmp"], L0["pout"], L1["bytecount"]])));
    await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["pout"]])), L1["bytecount"]])));
  }
  return L1.result;
});
  L0["setoutlen"] = $.fn(async function SetOutLen(p0) {
  const L1 = {"len": $.copyArg(p0), result: undefined, "p": 0};
  await $.fixArgs(L1, ["len"]);
  L1["result"] = L1["len"];
  if ($.truthy($.ne(L0["outstream"], null))) {
    if ($.truthy((await $.mcall(L0["outstream"], "InheritsFrom", [(await $.v(C, "TMemoryStream"))])))) {
      {
        const $t458 = (await $.call(C, "TMemoryStream", [L0["outstream"]]));
        await $.wset([$t458], "P", (await $.wcall([$t458], "Seek", [0, (await $.wv([$t458], "soCurrent", C, false))], C)), { get: async () => L1["p"], set: async (v) => { L1["p"] = v; }, local: true });
        await $.wset([$t458], "Size", $.add((await $.wv([$t458], "P", { get: async () => L1["p"], set: async (v) => { L1["p"] = v; }, local: true }, false)), (await $.wv([$t458], "Len", { get: async () => L1["len"], set: async (v) => { L1["len"] = v; }, local: true }, false))), C);
        await $.stmt((await $.wcall([$t458], "Seek", [$.add((await $.wv([$t458], "P", { get: async () => L1["p"], set: async (v) => { L1["p"] = v; }, local: true }, false)), (await $.wv([$t458], "Len", { get: async () => L1["len"], set: async (v) => { L1["len"] = v; }, local: true }, false))), (await $.wv([$t458], "soBeginning", C, false))], C)));
        await $.wset([$t458], "bOut", $.add((await $.wcall([$t458], "PAnsiChar", [(await $.wv([$t458], "Memory", C, false))], C)), (await $.wv([$t458], "P", { get: async () => L1["p"], set: async (v) => { L1["p"] = v; }, local: true }, false))), { get: async () => L0["bout"], set: async (v) => { L0["bout"] = v; }, local: true });
        await $.wset([$t458], "pOut", (await $.wv([$t458], "bOut", { get: async () => L0["bout"], set: async (v) => { L0["bout"] = v; }, local: true }, false)), { get: async () => L0["pout"], set: async (v) => { L0["pout"] = v; }, local: true });
        await $.wset([$t458], "OutStream", null, { get: async () => L0["outstream"], set: async (v) => { L0["outstream"] = v; }, local: true });
      }
    }
  } else {
    if ($.truthy($.eq(L0["bout"], null))) {
      await $.set(C, "outStreamCreated", (await $.mv((await $.v(C, "THeapMemoryStream")), "Create")));
      await $.mset((await $.v(C, "outStreamCreated")), "Size", L1["len"]);
      L0["bout"] = (await $.mv((await $.v(C, "outStreamCreated")), "Memory"));
      L0["pout"] = L0["bout"];
    }
  }
  if ($.truthy($.eq(L0["keysize"], 0))) {
    return L1.result;
  }
  if ($.truthy((await $.or_((await $.or_(($.eq(L0["keysize"], 32)), async () => ($.ne(L0["instream"], null)))), async () => ($.ne(L0["outstream"], null)))))) {
    await $.stmt((await $.call(C, "New", [L0["tmp"]])));
  }
  return L1.result;
});
  L0["doblock"] = $.fn(async function DoBlock(p0) {
  const L1 = {"blockcount": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["blockcount"]);
  if ($.truthy($.eq(L1["blockcount"], 0))) {
    return L1.result;
  }
  await $.stmt((await $.callv(L0["read"], [$.ref(async () => L0["tmp"], async ($t459) => { L0["tmp"] = $t459; }), $.shl(L1["blockcount"], (await $.v(C, "AESBlockShift")))])));
  await $.stmt((await $.mcall(L0["crypt"], "DoBlocks", [(await $.call(C, "PAESBLock", [L0["tmp"]])), (await $.call(C, "PAESBLock", [L0["tmp"]])), $.ref(async () => L1["blockcount"], async ($t460) => { L1["blockcount"] = $t460; }), $.ref(async () => L0["encrypt"], async ($t461) => { L0["encrypt"] = $t461; })])));
  await $.stmt((await $.callv(L0["write"], [L0["tmp"], $.shl(L1["blockcount"], (await $.v(C, "AESBlockShift")))])));
  return L1.result;
});
  L0["result"] = 0;
  L0["tmp"] = null;
  await $.set(C, "outStreamCreated", null);
  await $.mset((await $.v(C, "Head")), "SourceLen", L0["inlen"]);
  L0["nblock"] = $.shr((await $.mv((await $.v(C, "Head")), "SourceLen")), (await $.v(C, "AESBlockShift")));
  if ($.truthy((await $.and_(L0["encrypt"], async () => ($.ne(L0["originallen"], 0)))))) {
    await $.mset((await $.v(C, "Head")), "OriginalLen", L0["originallen"]);
  } else {
    await $.mset((await $.v(C, "Head")), "OriginalLen", L0["inlen"]);
  }
  L0["keysize"] = $.idiv(L0["keysize"], 8);
  if ($.truthy($.not(($.in_(L0["keysize"], [0, 4, 16, 24, 32]))))) {
    L0["keysize"] = 0;
  } else {
    L0["keysize"] = $.mul(L0["keysize"], 8);
  }
  L0["xorcod"] = L0["inlen"];
  if ($.truthy((await $.and_(($.ne(L0["instream"], null)), async () => (await $.mcall(L0["instream"], "InheritsFrom", [(await $.v(C, "TMemoryStream"))])))))) {
    L0["bin"] = (await $.mv((await $.call(C, "TMemoryStream", [L0["instream"]])), "Memory"));
    L0["instream"] = null;
  }
  L0["pin"] = L0["bin"];
  L0["pout"] = L0["bout"];
  if ($.truthy((await $.and_(($.ge(L0["keysize"], 128)), async () => $.not((await $.mcall(L0["crypt"], "DoInit", [L0["key"], L0["keysize"], L0["encrypt"]]))))))) {
    L0["keysize"] = 32;
  }
  if ($.truthy($.eq(L0["keysize"], 32))) {
    L0["xorcod"] = $.xor((await $.call(C, "KeyFrom", [L0["key"], L0["keysize"]])), L0["xorcod"]);
  } else {
    if ($.truthy((await $.and_(($.eq(L0["keysize"], 0)), async () => ($.eq(L0["instream"], null)))))) {
      await $.stmt((await $.callv(L0["setoutlen"], [L0["inlen"]])));
      await $.stmt((await $.callv(L0["write"], [L0["bin"], L0["inlen"]])));
      return L0.result;
    }
  }
  try {
    if ($.truthy($.lt(L0["keysize"], 128))) {
      await $.stmt((await $.callv(L0["setoutlen"], [L0["inlen"]])));
      await $.stmt((await $.call(C, "assert", [$.ne(L0["tmp"], null)])));
      L0["lastlen"] = L0["inlen"];
      while ($.truthy($.ne(L0["lastlen"], 0))) {
        if ($.truthy($.gt(L0["lastlen"], (await $.v(C, "TmpSize"))))) {
          L0["n"] = (await $.v(C, "TmpSize"));
        } else {
          L0["n"] = L0["lastlen"];
        }
        await $.stmt((await $.callv(L0["read"], [$.ref(async () => L0["tmp"], async ($t462) => { L0["tmp"] = $t462; }), $.ref(async () => L0["n"], async ($t463) => { L0["n"] = $t463; })])));
        if ($.truthy($.gt(L0["keysize"], 0))) {
          await $.stmt((await $.call(C, "XorBlock", [(await $.call(C, "pointer", [L0["tmp"]])), L0["n"], L0["xorcod"]])));
        }
        await $.stmt((await $.callv(L0["write"], [L0["tmp"], L0["n"]])));
        await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["lastlen"], async ($t464) => { L0["lastlen"] = $t464; }), L0["n"]])));
        await $.tick();
      }
    } else {
      if ($.truthy(L0["encrypt"])) {
        if ($.truthy((await $.and_(($.eq(L0["pin"], L0["pout"])), async () => ($.ne(L0["pin"], null)))))) {
          await $.stmt((await $.call(C, "assert", [false])));
          L0["result"] = 0;
          return L0.result;
        }
        L0["lastlen"] = (await $.and_(L0["inlen"], async () => (await $.v(C, "AESBlockMod"))));
        if ($.truthy($.eq(L0["lastlen"], 0))) {
          await $.stmt((await $.callv(L0["setoutlen"], [$.add(L0["inlen"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))])))])));
        } else {
          await $.stmt((await $.callv(L0["setoutlen"], [$.shl(($.add(L0["nblock"], 2)), (await $.v(C, "AESBlockShift")))])));
        }
        await $.mset((await $.v(C, "Head")), "SomeSalt", (await $.call(C, "random", [(await $.v(C, "MaxInt"))])));
        await $.mset((await $.v(C, "Head")), "HeaderCheck", (await $.mcall((await $.v(C, "Head")), "Calc", [L0["key"], L0["keysize"]])));
        await $.stmt((await $.mcall(L0["crypt"], "Encrypt", [(await $.call(C, "TAESBlock", [(await $.v(C, "Head"))]))])));
        await $.stmt((await $.callv(L0["write"], [(await $.ref_(C, "Head")), (await $.call(C, "sizeof", [(await $.v(C, "Head"))]))])));
      } else {
        await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["nblock"], async ($t465) => { L0["nblock"] = $t465; })])));
        await $.stmt((await $.callv(L0["read"], [(await $.ref_(C, "Head")), (await $.call(C, "sizeof", [(await $.v(C, "Head"))]))])));
        await $.stmt((await $.mcall(L0["crypt"], "Decrypt", [(await $.call(C, "TAESBlock", [(await $.v(C, "Head"))]))])));
        {
          const $t466 = (await $.v(C, "Head"));
          if ($.truthy($.ne((await $.wv([$t466], "HeaderCheck", C, false)), (await $.mcall((await $.wv([$t466], "Head", C, false)), "Calc", [(await $.wv([$t466], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), (await $.wv([$t466], "KeySize", { get: async () => L0["keysize"], set: async (v) => { L0["keysize"] = v; }, local: true }, false))]))))) {
            await $.wset([$t466], "result", (-(1)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            return L0.result;
          }
          await $.stmt((await $.wcall([$t466], "SetOutLen", [(await $.wv([$t466], "SourceLen", C, false))], { get: async () => L0["setoutlen"], set: async (v) => { L0["setoutlen"] = v; }, local: true })));
          await $.wset([$t466], "LastLen", (await $.and_((await $.wv([$t466], "SourceLen", C, false)), async () => (await $.wv([$t466], "AESBlockMod", C, false)))), { get: async () => L0["lastlen"], set: async (v) => { L0["lastlen"] = v; }, local: true });
        }
        if ($.truthy($.ne(L0["lastlen"], 0))) {
          await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["nblock"], async ($t467) => { L0["nblock"] = $t467; })])));
        }
      }
      if ($.truthy($.eq(L0["tmp"], null))) {
        await $.stmt((await $.mcall(L0["crypt"], "DoBlocks", [L0["pin"], L0["pout"], $.ref(async () => L0["pin"], async ($t468) => { L0["pin"] = $t468; }), $.ref(async () => L0["pout"], async ($t469) => { L0["pout"] = $t469; }), L0["nblock"], L0["encrypt"]])));
      } else {
        { const $t470 = $.idiv(L0["nblock"], (await $.v(C, "TmpSizeBlock")));
          L0["i"] = 1;
          let $t471 = true;
          for (;;) {
            if (!$t471) { L0["i"] = $.succ(L0["i"], 1); }
            $t471 = false;
            if (!($.ord(L0["i"]) <= $.ord($t470))) break;
            await $.stmt((await $.callv(L0["doblock"], [(await $.v(C, "TmpSizeBlock"))])));
            await $.tick();
          }
        }
        await $.stmt((await $.callv(L0["doblock"], [$.mod(L0["nblock"], (await $.v(C, "TmpSizeBlock")))])));
      }
      if ($.truthy($.ne(L0["lastlen"], 0))) {
        if ($.truthy(L0["encrypt"])) {
          await $.stmt((await $.call(C, "FillcharFast", [L0["last"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))])), 0])));
          await $.stmt((await $.callv(L0["read"], [L0["last"], $.ref(async () => L0["lastlen"], async ($t472) => { L0["lastlen"] = $t472; })])));
          await $.stmt((await $.mcall(L0["crypt"], "Encrypt", [$.ref(async () => L0["last"], async ($t473) => { L0["last"] = $t473; })])));
          await $.stmt((await $.callv(L0["write"], [L0["last"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))])));
        } else {
          await $.stmt((await $.callv(L0["read"], [L0["last"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))])));
          await $.stmt((await $.mcall(L0["crypt"], "Decrypt", [$.ref(async () => L0["last"], async ($t474) => { L0["last"] = $t474; })])));
          await $.stmt((await $.callv(L0["write"], [L0["last"], L0["lastlen"]])));
        }
      }
      await $.mcall(L0["crypt"], "Done", []);
    }
  } finally {
    if ($.truthy($.ne(L0["tmp"], null))) {
      await $.stmt((await $.call(C, "Freemem", [L0["tmp"]])));
    }
  }
  return L0.result;
}, {"params": ["Key", "KeySize", "inLen", "Encrypt", "inStream", "outStream", "bIn", "bOut", "OriginalLen"], "kind": "function", "ptypes": [null, "cardinal", "cardinal", "boolean", "TStream", "TStream", "pointer", "pointer", "Cardinal"]});
  U.func("AESFullKeyOK", async function AESFullKeyOK(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "buff": $.copyArg(p2), result: false, "crypt": null, "head": null};
  await $.fixArgs(L0, ["key", "keysize", "buff"]);
  if ($.truthy($.lt(L0["keysize"], 128))) {
    L0["result"] = true;
  } else {
    if ($.truthy($.not((await $.mcall(L0["crypt"], "DecryptInit", [L0["key"], L0["keysize"]]))))) {
      L0["result"] = false;
    } else {
      await $.stmt((await $.mcall(L0["crypt"], "Decrypt", [(await $.call(C, "PAESBlock", [L0["buff"]])), (await $.call(C, "TAESBlock", [L0["head"]]))])));
      L0["result"] = $.eq((await $.mcall(L0["head"], "Calc", [L0["key"], L0["keysize"]])), (await $.mv(L0["head"], "HeaderCheck")));
      await $.mcall(L0["crypt"], "Done", []);
    }
  }
  return L0.result;
}, {"params": ["Key", "KeySize", "buff"], "kind": "function", "ptypes": [null, "cardinal", "pointer"]});
  U.func("AESFull", async function AESFull(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "bin": $.copyArg(p2), "bout": $.copyArg(p3), "len": $.copyArg(p4), "encrypt": $.copyArg(p5), "originallen": (p6 === undefined ? 0 : p6), result: 0, "a": null};
  await $.fixArgs(L0, ["key", "keysize", "bin", "bout", "len", "encrypt", "originallen"]);
  L0["result"] = (await $.mcall(L0["a"], "EncodeDecode", [L0["key"], L0["keysize"], L0["len"], L0["encrypt"], null, null, L0["bin"], L0["bout"], L0["originallen"]]));
  return L0.result;
}, {"params": ["Key", "KeySize", "bIn", "bOut", "Len", "Encrypt", "OriginalLen"], "kind": "function", "ptypes": [null, "cardinal", "pointer", "pointer", "integer", "boolean", "Cardinal"]});
  U.func("AESFull", async function AESFull(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "keysize": $.copyArg(p1), "bin": $.copyArg(p2), "len": $.copyArg(p3), "outstream": $.copyArg(p4), "encrypt": $.copyArg(p5), "originallen": (p6 === undefined ? 0 : p6), result: false, "a": null};
  await $.fixArgs(L0, ["key", "keysize", "bin", "len", "outstream", "encrypt", "originallen"]);
  L0["result"] = $.ge((await $.mcall(L0["a"], "EncodeDecode", [L0["key"], L0["keysize"], L0["len"], L0["encrypt"], null, L0["outstream"], L0["bin"], null, L0["originallen"]])), 0);
  return L0.result;
}, {"params": ["Key", "KeySize", "bIn", "Len", "outStream", "Encrypt", "OriginalLen"], "kind": "function", "ptypes": [null, "cardinal", "pointer", "Integer", "TStream", "boolean", "Cardinal"]});
  U.func("AESSHA256", async function AESSHA256(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"bin": $.copyArg(p0), "bout": $.copyArg(p1), "len": $.copyArg(p2), "password": $.copyArg(p3), "encrypt": $.copyArg(p4), result: undefined, "digest": null};
  await $.fixArgs(L0, ["bin", "bout", "len", "password", "encrypt"]);
  await $.stmt((await $.call(C, "SHA256Weak", [L0["password"], $.ref(async () => L0["digest"], async ($t475) => { L0["digest"] = $t475; })])));
  await $.stmt((await $.call(C, "AES", [L0["digest"], $.mul((await $.call(C, "sizeof", [L0["digest"]])), 8), L0["bin"], L0["bout"], L0["len"], L0["encrypt"]])));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["bIn", "bOut", "Len", "Password", "Encrypt"], "kind": "procedure", "ptypes": ["pointer", "pointer", "integer", "RawByteString", "boolean"]});
  U.func("AESSHA256", async function AESSHA256(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "password": $.copyArg(p1), "encrypt": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["s", "password", "encrypt"]);
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t476) => { L0["result"] = $t476; }), null, (await $.call(C, "length", [L0["s"]]))])));
  await $.stmt((await $.callv(L0["aessha256"], [(await $.call(C, "pointer", [L0["s"]])), (await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "length", [L0["s"]])), L0["password"], L0["encrypt"]])));
  return L0.result;
}, {"params": ["s", "Password", "Encrypt"], "kind": "function", "ptypes": ["RawByteString", "RawByteString", "boolean"]});
  U.func("AESSHA256", async function AESSHA256(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "password": $.copyArg(p2), "encrypt": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["buffer", "len", "password", "encrypt"]);
  await $.stmt((await $.call(C, "AESSHA256", [L0["buffer"], L0["buffer"], L0["len"], L0["password"], L0["encrypt"]])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Password", "Encrypt"], "kind": "procedure", "ptypes": ["pointer", "integer", "RawByteString", "boolean"]});
  U.func("AESSHA256Full", async function AESSHA256Full(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"bin": $.copyArg(p0), "len": $.copyArg(p1), "outstream": $.copyArg(p2), "password": $.copyArg(p3), "encrypt": $.copyArg(p4), result: undefined, "digest": null};
  await $.fixArgs(L0, ["bin", "len", "outstream", "password", "encrypt"]);
  await $.stmt((await $.call(C, "SHA256Weak", [L0["password"], $.ref(async () => L0["digest"], async ($t477) => { L0["digest"] = $t477; })])));
  await $.stmt((await $.call(C, "AESFull", [L0["digest"], $.mul((await $.call(C, "sizeof", [L0["digest"]])), 8), L0["bin"], L0["len"], L0["outstream"], L0["encrypt"]])));
  return L0.result;
}, {"params": ["bIn", "Len", "outStream", "Password", "Encrypt"], "kind": "procedure", "ptypes": ["pointer", "Integer", "TStream", "RawByteString", "boolean"]});
  U.func("Adler32Pas", async function Adler32Pas(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"adler": $.copyArg(p0), "p": $.copyArg(p1), "count": $.copyArg(p2), result: 0, "s1": 0, "s2": 0, "i": 0, "n": 0};
  await $.fixArgs(L0, ["adler", "p", "count"]);
  L0["s1"] = (await $.mv((await $.call(C, "LongRec", [L0["adler"]])), "Lo"));
  L0["s2"] = (await $.mv((await $.call(C, "LongRec", [L0["adler"]])), "Hi"));
  while ($.truthy($.gt(L0["count"], 0))) {
    if ($.truthy($.lt(L0["count"], 5552))) {
      L0["n"] = L0["count"];
    } else {
      L0["n"] = 5552;
    }
    { const $t478 = L0["n"];
      L0["i"] = 1;
      let $t479 = true;
      for (;;) {
        if (!$t479) { L0["i"] = $.succ(L0["i"], 1); }
        $t479 = false;
        if (!($.ord(L0["i"]) <= $.ord($t478))) break;
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["s1"], async ($t480) => { L0["s1"] = $t480; }), (await $.call(C, "PByte", [L0["p"]]))])));
        await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["p"]]))])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["s2"], async ($t481) => { L0["s2"] = $t481; }), L0["s1"]])));
        await $.tick();
      }
    }
    L0["s1"] = $.mod(L0["s1"], 65521);
    L0["s2"] = $.mod(L0["s2"], 65521);
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["count"], async ($t482) => { L0["count"] = $t482; }), L0["n"]])));
    await $.tick();
  }
  L0["result"] = $.add(((await $.and_(L0["s1"], async () => 65535))), $.shl(((await $.and_(L0["s2"], async () => 65535))), 16));
  return L0.result;
}, {"params": ["Adler", "p", "Count"], "kind": "function", "ptypes": ["cardinal", "pointer", "Integer"]});
  U.func("Adler32Asm", async function Adler32Asm() { return $.notPorted("Adler32Asm", "asm block"); }, {"params": ["Adler", "p", "Count"], "kind": "function", "ptypes": ["cardinal", "pointer", "Integer"], "error": "asm block", "src": "function Adler32Asm(Adler: cardinal; p: pointer; Count: Integer): cardinal;\n \n\n\n\n    \nasm\n        push    ebx\n        push    esi\n        push    edi\n        mov     edi, eax\n        shr     edi, 16\n        movzx   ebx, ax\n        push    ebp\n        mov     esi, edx\n        test    esi, esi\n        mov     ebp, ecx\n        jne     @31\n        mov     eax, 1\n        jmp     @32\n@31:    test    ebp, ebp\n        jbe     @34\n@33:    cmp     ebp, 5552\n        jae     @35\n        mov     eax, ebp\n        jmp     @36\n@35:    mov     eax, 5552\n@36:    sub     ebp, eax\n        cmp     eax, 16\n        jl      @38\n        xor     edx, edx\n        xor     ecx, ecx\n@39:    sub     eax, 16\n        mov     dl, [esi]\n        mov     cl, [esi + 1]\n        add     ebx, edx\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 2]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 3]\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 4]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 5]\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 6]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 7]\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 8]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 9]\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 10]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 11]\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 12]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 13]\n        add     edi, ebx\n        add     ebx, ecx\n        mov     dl, [esi + 14]\n        add     edi, ebx\n        add     ebx, edx\n        mov     cl, [esi + 15]\n        add     edi, ebx\n        add     ebx, ecx\n        add     esi, 16\n        lea     edi, [edi + ebx]\n        cmp     eax, 16\n        jge     @39\n@38:    test    eax, eax\n        je      @42\n@43:    movzx   edx, byte ptr[esi]\n        add     ebx, edx\n        dec     eax\n        lea     esi, [esi + 1]\n        lea     edi, [edi + ebx]\n        jg      @43\n@42:    mov     ecx, 65521\n        mov     eax, ebx\n        xor     edx, edx\n        div     ecx\n        mov     ebx, edx\n        mov     ecx, 65521\n        mov     eax, edi\n        xor     edx, edx\n        div     ecx\n        test    ebp, ebp\n        mov     edi, edx\n        ja      @33\n@34:    mov     eax, edi\n        shl     eax, 16\n        or      eax, ebx\n@32:    pop     ebp\n        pop     edi\n        pop     esi\n        pop     ebx\nend;"});
  U.func("Adler32SelfTest", async function Adler32SelfTest(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Adler32Asm", [1, (await $.ref_(C, "Te0")), (await $.call(C, "sizeof", [(await $.v(C, "Te0"))]))])), 3166633488)), async () => ($.eq((await $.call(C, "Adler32Asm", [7, (await $.ref_(C, "Te1")), $.sub((await $.call(C, "sizeof", [(await $.v(C, "Te1"))])), 3)])), 3667000766)))), async () => ($.eq((await $.call(C, "Adler32Pas", [1, (await $.ref_(C, "Te0")), (await $.call(C, "sizeof", [(await $.v(C, "Te0"))]))])), 3166633488)))), async () => ($.eq((await $.call(C, "Adler32Pas", [7, (await $.ref_(C, "Te1")), $.sub((await $.call(C, "sizeof", [(await $.v(C, "Te1"))])), 3)])), 3667000766))));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESWriteStream", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"outstream": $.copyArg(p0), "key": $.copyArg(p1), "keysize": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["outstream", "key", "keysize"]);
  await $.inherited(Self, "TAESWriteStream", "Create", null, arguments);
  if ($.truthy($.eq(L0["keysize"], 0))) {
    await $.set(C, "NoCrypt", true);
  } else {
    await $.stmt((await $.mcall((await $.v(C, "AES")), "EncryptInit", [L0["key"], L0["keysize"]])));
  }
  await $.set(C, "Dest", L0["outstream"]);
  return L0.result;
}, {"params": ["outStream", "Key", "KeySize"], "kind": "constructor", "ptypes": ["TStream", null, "cardinal"]});
  U.method("TAESWriteStream", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "Finish", []));
  await $.mcall((await $.v(C, "AES")), "Done", []);
  await $.inherited(Self, "TAESWriteStream", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TAESWriteStream", "Finish", async function Finish(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.v(C, "BufCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "assert", [(await $.and_((await $.and_(($.lt((await $.v(C, "BufCount")), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))])))), async () => (await $.mv((await $.v(C, "AES")), "Initialized")))), async () => $.not((await $.v(C, "NoCrypt")))))])));
  await $.stmt((await $.call(C, "XorOffset", [(await $.ref_(C, "Buf")), (await $.v(C, "DestSize")), (await $.v(C, "BufCount"))])));
  await $.stmt((await $.mcall((await $.v(C, "Dest")), "WriteBuffer", [(await $.v(C, "Buf")), (await $.v(C, "BufCount"))])));
  await $.set(C, "BufCount", 0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESWriteStream", "Read", async function Read(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.asRef(p0), "count": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["count"]);
  throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["Unexpected %.Read", [Self]])));
  return L0.result;
}, {"params": ["Buffer", "Count"], "kind": "function", "ptypes": [null, "Integer"]});
  U.method("TAESWriteStream", "Seek", async function Seek(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"offset": $.copyArg(p0), "origin": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["offset", "origin"]);
  throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["Unexpected %.Seek", [Self]])));
  return L0.result;
}, {"params": ["Offset", "Origin"], "kind": "function", "ptypes": ["Integer", "Word"]});
  U.method("TAESWriteStream", "Write", async function Write(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "count": $.copyArg(p1), result: 0, "b": null, "len": 0};
  await $.fixArgs(L0, ["buffer", "count"]);
  L0["result"] = L0["count"];
  await $.set(C, "Adler", (await $.call(C, "Adler32Asm", [(await $.v(C, "Adler")), L0["buffer"], L0["count"]])));
  if ($.truthy($.not((await $.v(C, "NoCrypt"))))) {
    if ($.truthy($.not((await $.mv((await $.v(C, "AES")), "Initialized"))))) {
      await $.stmt((await $.call(C, "XorOffset", [L0["b"], (await $.v(C, "DestSize")), L0["count"]])));
    } else {
      if ($.truthy($.gt((await $.v(C, "BufCount")), 0))) {
        L0["len"] = $.sub((await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))])), (await $.v(C, "BufCount")));
        if ($.truthy($.gt(L0["len"], L0["count"]))) {
          L0["len"] = L0["count"];
        }
        await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.v(C, "Buf")), [(await $.v(C, "BufCount"))])), L0["len"]])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "BufCount")), async ($t483) => { await $.set(C, "BufCount", $t483); }), L0["len"]])));
        if ($.truthy($.lt((await $.v(C, "BufCount")), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))))) {
          return L0.result;
        }
        await $.stmt((await $.mcall((await $.v(C, "AES")), "Encrypt", [$.ref(async () => (await $.v(C, "Buf")), async ($t484) => { await $.set(C, "Buf", $t484); })])));
        await $.stmt((await $.mcall((await $.v(C, "Dest")), "WriteBuffer", [(await $.v(C, "Buf")), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "DestSize")), async ($t485) => { await $.set(C, "DestSize", $t485); }), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))])));
        await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["count"], async ($t486) => { L0["count"] = $t486; }), L0["len"]])));
        await $.stmt((await $.mcall((await $.v(C, "AES")), "DoBlocks", [(await $.idx(L0["b"], [L0["len"]])), (await $.idx(L0["b"], [L0["len"]])), $.shr((await $.call(C, "cardinal", [L0["count"]])), (await $.v(C, "AESBlockShift"))), $.ref(async () => true, async ($t487) => { await $.set(C, "true", $t487); })])));
      } else {
        await $.stmt((await $.mcall((await $.v(C, "AES")), "DoBlocks", [L0["b"], L0["b"], $.shr((await $.call(C, "cardinal", [L0["count"]])), (await $.v(C, "AESBlockShift"))), $.ref(async () => true, async ($t488) => { await $.set(C, "true", $t488); })])));
      }
      await $.set(C, "BufCount", (await $.and_((await $.call(C, "cardinal", [L0["count"]])), async () => (await $.v(C, "AESBlockMod")))));
      if ($.truthy($.ne((await $.v(C, "BufCount")), 0))) {
        await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["count"], async ($t489) => { L0["count"] = $t489; }), (await $.v(C, "BufCount"))])));
        await $.stmt((await $.call(C, "MoveFast", [(await $.idx(L0["b"], [L0["count"]])), (await $.idx((await $.v(C, "Buf")), [0])), (await $.v(C, "BufCount"))])));
      }
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "Dest")), "WriteBuffer", [L0["buffer"], L0["count"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "DestSize")), async ($t490) => { await $.set(C, "DestSize", $t490); }), L0["count"]])));
  return L0.result;
}, {"params": ["Buffer", "Count"], "kind": "function", "ptypes": [null, "Integer"]});
  U.func("XorBlock", async function XorBlock() { return $.notPorted("XorBlock", "cannot assign to call"); }, {"params": ["p", "Count", "Cod"], "kind": "procedure", "ptypes": ["PIntegerArray", "integer", "integer"], "error": "cannot assign to call", "src": "procedure XorBlock(p: PIntegerArray; Count, Cod: integer);\n\nvar i: integer;\nbegin\n  for i := 1 to Count shr 4 do begin \n    Cod := (Cod shl 11) xor integer(Td0[cod shr 21]); \n    p^[0] := p^[0] xor Cod;\n    p^[1] := p^[1] xor Cod;\n    p^[2] := p^[2] xor Cod;\n    p^[3] := p^[3] xor Cod;\n    inc(PByte(p),16);\n  end;\n  Cod := (Cod shl 11) xor integer(Td0[cod shr 21]);\n  for i := 1 to (Count and AESBlockMod)shr 2 do begin \n    p^[0] := p^[0] xor Cod;\n    inc(PByte(p),4);\n  end;\n  for i := 1 to Count and 3 do begin\n    PByte(p)^ := PByte(p)^ xor byte(Cod);\n    inc(PByte(p));\n  end;\nend;"});
  U.func("XorOffset", async function XorOffset(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"p": $.copyArg(p0), "index": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "len": 0};
  await $.fixArgs(L0, ["p", "index", "count"]);
  if ($.truthy($.gt(L0["count"], 0))) {
    do {
      L0["index"] = (await $.and_(L0["index"], async () => 8191));
      L0["len"] = $.sub(8192, L0["index"]);
      if ($.truthy($.gt(L0["len"], L0["count"]))) {
        L0["len"] = L0["count"];
      }
      await $.stmt((await $.call(C, "XorMemory", [L0["p"], (await $.idx((await $.v(C, "Xor32Byte")), [L0["index"]])), L0["len"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["p"], async ($t502) => { L0["p"] = $t502; }), L0["len"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["index"], async ($t503) => { L0["index"] = $t503; }), L0["len"]])));
      await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["count"], async ($t504) => { L0["count"] = $t504; }), L0["len"]])));
      await $.tick();
    } while (!$.truthy($.eq(L0["count"], 0)));
  }
  return L0.result;
}, {"params": ["P", "Index", "Count"], "kind": "procedure", "ptypes": ["PByteArray", "integer", "integer"]});
  U.func("XorConst", async function XorConst(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"p": $.copyArg(p0), "count": $.copyArg(p1), result: undefined, "i": 0, "code": 0};
  await $.fixArgs(L0, ["p", "count"]);
  L0["code"] = (await $.call(C, "integer", [(await $.idx((await $.v(C, "Td0")), [(await $.and_(L0["count"], async () => 1023))]))]));
  { const $t505 = ($.shr(L0["count"], 4));
    L0["i"] = 1;
    let $t506 = true;
    for (;;) {
      if (!$t506) { L0["i"] = $.succ(L0["i"], 1); }
      $t506 = false;
      if (!($.ord(L0["i"]) <= $.ord($t505))) break;
      { const $t507 = await $.iset(L0["p"], [0], $.xor((await $.idx(L0["p"], [0])), L0["code"])); if ($t507 !== undefined) { L0["p"] = $t507; } }
      { const $t508 = await $.iset(L0["p"], [1], $.xor((await $.idx(L0["p"], [1])), L0["code"])); if ($t508 !== undefined) { L0["p"] = $t508; } }
      { const $t509 = await $.iset(L0["p"], [2], $.xor((await $.idx(L0["p"], [2])), L0["code"])); if ($t509 !== undefined) { L0["p"] = $t509; } }
      { const $t510 = await $.iset(L0["p"], [3], $.xor((await $.idx(L0["p"], [3])), L0["code"])); if ($t510 !== undefined) { L0["p"] = $t510; } }
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["p"]])), 16])));
      await $.tick();
    }
  }
  { const $t511 = $.sub(($.shr(((await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))))), 2)), 1);
    L0["i"] = 0;
    let $t512 = true;
    for (;;) {
      if (!$t512) { L0["i"] = $.succ(L0["i"], 1); }
      $t512 = false;
      if (!($.ord(L0["i"]) <= $.ord($t511))) break;
      { const $t513 = await $.iset(L0["p"], [L0["i"]], $.xor((await $.idx(L0["p"], [L0["i"]])), L0["code"])); if ($t513 !== undefined) { L0["p"] = $t513; } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["P", "Count"], "kind": "procedure", "ptypes": ["PIntegerArray", "integer"]});
  U.func("MD5Transform", async function MD5Transform() { return $.notPorted("MD5Transform", "asm block"); }, {"params": ["buf", "in_"], "kind": "procedure", "ptypes": ["TMD5Buf", "TMD5In"], "error": "asm block", "src": "procedure MD5Transform(var buf: TMD5Buf; const in_: TMD5In);\n\n \n \n  \n\n\n \n \n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n \n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n \n      \nasm \n        push    ebx\n        push    esi\n        push    edi\n        push    ebp\n        mov     ebp, edx\n        push    eax\n        mov     edx, dword ptr [eax+0CH]\n        mov     ecx, dword ptr [eax+8H]\n        mov     ebx, dword ptr [eax+4H]\n        mov     eax, dword ptr [eax]\n        add     eax, dword ptr [ebp]\n        add     eax, -680876936\n        mov     esi, ebx\n        not     esi\n        and     esi, edx\n        mov     edi, ecx\n        and     edi, ebx\n        or      esi, edi\n        add     eax, esi\n        rol     eax, 7\n        add     eax, ebx\n        add     edx, dword ptr [ebp+4H]\n        add     edx, -389564586\n        mov     esi, eax\n        not     esi\n        and     esi, ecx\n        mov     edi, ebx\n        and     edi, eax\n        or      esi, edi\n        add     edx, esi\n        rol     edx, 12\n        add     edx, eax\n        add     ecx, dword ptr [ebp+8H]\n        add     ecx, 606105819\n        mov     esi, edx\n        not     esi\n        and     esi, ebx\n        mov     edi, eax\n        and     edi, edx\n        or      esi, edi\n        add     ecx, esi\n        rol     ecx, 17\n        add     ecx, edx\n        add     ebx, dword ptr [ebp+0CH]\n        add     ebx, -1044525330\n        mov     esi, ecx\n        not     esi\n        and     esi, eax\n        mov     edi, edx\n        and     edi, ecx\n        or      esi, edi\n        add     ebx, esi\n        rol     ebx, 22\n        add     ebx, ecx\n        add     eax, dword ptr [ebp+10H]\n        add     eax, -176418897\n        mov     esi, ebx\n        not     esi\n        and     esi, edx\n        mov     edi, ecx\n        and     edi, ebx\n        or      esi, edi\n        add     eax, esi\n        rol     eax, 7\n        add     eax, ebx\n        add     edx, dword ptr [ebp+14H]\n        add     edx, 1200080426\n        mov     esi, eax\n        not     esi\n        and     esi, ecx\n        mov     edi, ebx\n        and     edi, eax\n        or      esi, edi\n        add     edx, esi\n        rol     edx, 12\n        add     edx, eax\n        add     ecx, dword ptr [ebp+18H]\n        add     ecx, -1473231341\n        mov     esi, edx\n        not     esi\n        and     esi, ebx\n        mov     edi, eax\n        and     edi, edx\n        or      esi, edi\n        add     ecx, esi\n        rol     ecx, 17\n        add     ecx, edx\n        add     ebx, dword ptr [ebp+1CH]\n        add     ebx, -45705983\n        mov     esi, ecx\n        not     esi\n        and     esi, eax\n        mov     edi, edx\n        and     edi, ecx\n        or      esi, edi\n        add     ebx, esi\n        rol     ebx, 22\n        add     ebx, ecx\n        add     eax, dword ptr [ebp+20H]\n        add     eax, 1770035416\n        mov     esi, ebx\n        not     esi\n        and     esi, edx\n        mov     edi, ecx\n        and     edi, ebx\n        or      esi, edi\n        add     eax, esi\n        rol     eax, 7\n        add     eax, ebx\n        add     edx, dword ptr [ebp+24H]\n        add     edx, -1958414417\n        mov     esi, eax\n        not     esi\n        and     esi, ecx\n        mov     edi, ebx\n        and     edi, eax\n        or      esi, edi\n        add     edx, esi\n        rol     edx, 12\n        add     edx, eax\n        add     ecx, dword ptr [ebp+28H]\n        add     ecx, -42063\n        mov     esi, edx\n        not     esi\n        and     esi, ebx\n        mov     edi, eax\n        and     edi, edx\n        or      esi, edi\n        add     ecx, esi\n        rol     ecx, 17\n        add     ecx, edx\n        add     ebx, dword ptr [ebp+2CH]\n        add     ebx, -1990404162\n        mov     esi, ecx\n        not     esi\n        and     esi, eax\n        mov     edi, edx\n        and     edi, ecx\n        or      esi, edi\n        add     ebx, esi\n        rol     ebx, 22\n        add     ebx, ecx\n        add     eax, dword ptr [ebp+30H]\n        add     eax, 1804603682\n        mov     esi, ebx\n        not     esi\n        and     esi, edx\n        mov     edi, ecx\n        and     edi, ebx\n        or      esi, edi\n        add     eax, esi\n        rol     eax, 7\n        add     eax, ebx\n        add     edx, dword ptr [ebp+34H]\n        add     edx, -40341101\n        mov     esi, eax\n        not     esi\n        and     esi, ecx\n        mov     edi, ebx\n        and     edi, eax\n        or      esi, edi\n        add     edx, esi\n        rol     edx, 12\n        add     edx, eax\n        add     ecx, dword ptr [ebp+38H]\n        add     ecx, -1502002290\n        mov     esi, edx\n        not     esi\n        and     esi, ebx\n        mov     edi, eax\n        and     edi, edx\n        or      esi, edi\n        add     ecx, esi\n        rol     ecx, 17\n        add     ecx, edx\n        add     ebx, dword ptr [ebp+3CH]\n        add     ebx, 1236535329\n        mov     esi, ecx\n        not     esi\n        and     esi, eax\n        mov     edi, edx\n        and     edi, ecx\n        or      esi, edi\n        add     ebx, esi\n        rol     ebx, 22\n        add     ebx, ecx\n        add     eax, dword ptr [ebp+4H]\n        add     eax, -165796510\n        mov     esi, edx\n        not    "});
  U.func("RawMd5Compress", async function RawMd5Compress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.asRef(p0), "data": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.call(C, "MD5Transform", [(await $.call(C, "TMD5Buf", [(await L0["hash"].get())])), (await $.call(C, "PMD5In", [L0["data"]]))])));
  return L0.result;
}, {"params": ["Hash", "Data"], "kind": "procedure", "ptypes": [null, "pointer"]});
  U.method("TMD5", "Final", async function Final(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt($.call(C, "Finalize", []));
  L0["result"] = (await $.call(C, "TMD5Digest", [(await $.v(C, "buf"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMD5", "Final", async function Final(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"result": $.asRef(p0), result: undefined};
  await $.stmt($.call(C, "Finalize", []));
  await L0["result"].set((await $.call(C, "TMD5Digest", [(await $.v(C, "buf"))])));
  return L0.result;
}, {"params": ["result"], "kind": "procedure", "ptypes": ["TMD5Digest"]});
  U.method("TMD5", "Finalize", async function Finalize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "count": 0, "p": null};
  L0["count"] = (await $.and_((await $.idx((await $.v(C, "bytes")), [0])), async () => 63));
  L0["p"] = (await $.ref_(C, "in_"));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t514) => { L0["p"] = $t514; }), L0["count"]])));
  L0["p"] = 128;
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t515) => { L0["p"] = $t515; })])));
  L0["count"] = $.sub(55, L0["count"]);
  if ($.truthy($.lt(L0["count"], 0))) {
    await $.stmt((await $.call(C, "FillcharFast", [L0["p"], $.add(L0["count"], 8), 0])));
    await $.stmt((await $.call(C, "MD5Transform", [$.ref(async () => (await $.v(C, "buf")), async ($t516) => { await $.set(C, "buf", $t516); }), (await $.v(C, "in_"))])));
    L0["p"] = (await $.ref_(C, "in_"));
    L0["count"] = 56;
  }
  await $.stmt((await $.call(C, "FillcharFast", [L0["p"], L0["count"], 0])));
  { const $t517 = await $.iset((await $.v(C, "in_")), [14], $.shl((await $.idx((await $.v(C, "bytes")), [0])), 3)); if ($t517 !== undefined) { await $.set(C, "in_", $t517); } }
  { const $t518 = await $.iset((await $.v(C, "in_")), [15], (await $.or_(($.shl((await $.idx((await $.v(C, "bytes")), [1])), 3)), async () => ($.shr((await $.idx((await $.v(C, "bytes")), [0])), 29))))); if ($t518 !== undefined) { await $.set(C, "in_", $t518); } }
  await $.stmt((await $.call(C, "MD5Transform", [$.ref(async () => (await $.v(C, "buf")), async ($t519) => { await $.set(C, "buf", $t519); }), (await $.v(C, "in_"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMD5", "Full", async function Full() { return $.notPorted("TMD5.Full", "cannot assign to call"); }, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "TMD5Digest"], "error": "cannot assign to call", "src": "procedure TMD5.Full(Buffer: pointer; Len: integer; out Digest: TMD5Digest);\nbegin\n  buf[0] := $67452301;\n  buf[1] := $efcdab89;\n  buf[2] := $98badcfe;\n  buf[3] := $10325476;\n  bytes[0] := Len;\n  while Len>=SizeOf(TMD5In) do begin\n    MD5Transform(buf,PMD5In(Buffer)^);\n    inc(PMD5In(Buffer));\n    dec(Len,SizeOf(TMD5In));\n  end;\n  MoveFast(Buffer^,in_,Len);\n  Buffer := PAnsiChar(@in_)+Len;\n  PByte(Buffer)^ := $80;\n  inc(PByte(Buffer));\n  Len := 55-Len;\n  if Len>=0 then\n    FillcharFast(Buffer^,Len,0) else begin\n    FillcharFast(Buffer^,Len+8,0);\n    MD5Transform(buf,in_);\n    FillcharFast(in_,56,0);\n  end;\n  Len := bytes[0];\n  in_[14] := Len shl 3;\n  in_[15] := Len shr 29;\n  MD5Transform(buf,in_);\n  Digest := TMD5Digest(buf);\nend;"});
  U.method("TMD5", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  { const $t527 = await $.iset((await $.v(C, "buf")), [0], 1732584193); if ($t527 !== undefined) { await $.set(C, "buf", $t527); } }
  { const $t528 = await $.iset((await $.v(C, "buf")), [1], 4023233417); if ($t528 !== undefined) { await $.set(C, "buf", $t528); } }
  { const $t529 = await $.iset((await $.v(C, "buf")), [2], 2562383102); if ($t529 !== undefined) { await $.set(C, "buf", $t529); } }
  { const $t530 = await $.iset((await $.v(C, "buf")), [3], 271733878); if ($t530 !== undefined) { await $.set(C, "buf", $t530); } }
  { const $t531 = await $.iset((await $.v(C, "bytes")), [0], 0); if ($t531 !== undefined) { await $.set(C, "bytes", $t531); } }
  { const $t532 = await $.iset((await $.v(C, "bytes")), [1], 0); if ($t532 !== undefined) { await $.set(C, "bytes", $t532); } }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMD5", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined, "p": null, "t": 0, "i": 0};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy($.eq(L0["len"], 0))) {
    return L0.result;
  }
  L0["p"] = L0["buffer"];
  L0["t"] = (await $.idx((await $.v(C, "bytes")), [0]));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.idx((await $.v(C, "bytes")), [0])), async ($t533) => { { const $t534 = await $.iset((await $.v(C, "bytes")), [0], $t533); if ($t534 !== undefined) { await $.set(C, "bytes", $t534); } } }), L0["len"]])));
  if ($.truthy($.lt((await $.idx((await $.v(C, "bytes")), [0])), L0["t"]))) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.idx((await $.v(C, "bytes")), [1])), async ($t535) => { { const $t536 = await $.iset((await $.v(C, "bytes")), [1], $t535); if ($t536 !== undefined) { await $.set(C, "bytes", $t536); } } })])));
  }
  L0["t"] = $.sub(64, ((await $.and_(L0["t"], async () => 63))));
  if ($.truthy($.gt(L0["t"], L0["len"]))) {
    await $.stmt((await $.call(C, "MoveFast", [L0["p"], (await $.call(C, "Pointer", [$.sub($.add((await $.call(C, "PtrUInt", [(await $.ref_(C, "in_"))])), 64), L0["t"])])), L0["len"]])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "MoveFast", [L0["p"], (await $.call(C, "Pointer", [$.sub($.add((await $.call(C, "PtrUInt", [(await $.ref_(C, "in_"))])), 64), L0["t"])])), L0["t"]])));
  await $.stmt((await $.call(C, "MD5Transform", [$.ref(async () => (await $.v(C, "buf")), async ($t537) => { await $.set(C, "buf", $t537); }), (await $.v(C, "in_"))])));
  await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["p"]])), L0["t"]])));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["len"], async ($t538) => { L0["len"] = $t538; }), L0["t"]])));
  { const $t539 = $.shr(L0["len"], 6);
    L0["i"] = 1;
    let $t540 = true;
    for (;;) {
      if (!$t540) { L0["i"] = $.succ(L0["i"], 1); }
      $t540 = false;
      if (!($.ord(L0["i"]) <= $.ord($t539))) break;
      await $.stmt((await $.call(C, "MD5Transform", [$.ref(async () => (await $.v(C, "buf")), async ($t541) => { await $.set(C, "buf", $t541); }), L0["p"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["p"], async ($t542) => { L0["p"] = $t542; })])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "MoveFast", [L0["p"], (await $.v(C, "in_")), (await $.and_(L0["len"], async () => 63))])));
  return L0.result;
}, {"params": ["buffer", "len"], "kind": "procedure", "ptypes": [null, "Cardinal"]});
  U.method("TMD5", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["buffer"]])), (await $.call(C, "length", [L0["buffer"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.func("MD5Buf", async function MD5Buf(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: null, "md5": null};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt((await $.mcall(L0["md5"], "Full", [L0["buffer"], L0["len"], $.ref(async () => L0["result"], async ($t543) => { L0["result"] = $t543; })])));
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "function", "ptypes": [null, "Cardinal"]});
  U.func("htdigest", async function htdigest(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"user": $.copyArg(p0), "realm": $.copyArg(p1), "pass": $.copyArg(p2), result: null, "tmp": null};
  await $.fixArgs(L0, ["user", "realm", "pass"]);
  L0["tmp"] = $.add($.add($.add(L0["user"], ":"), L0["realm"]), ":");
  L0["result"] = $.add(L0["tmp"], (await $.call(C, "MD5", [$.add(L0["tmp"], L0["pass"])])));
  return L0.result;
}, {"params": ["user", "realm", "pass"], "kind": "function", "ptypes": ["RawByteString", "RawByteString", "RawByteString"]});
  U.func("MD5SelfTest", async function MD5SelfTest(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "htdigest", ["agent007", "download area", "secret"])), "agent007:download area:8364d0044ef57b3defcfa141e8f77b65")), async () => ($.eq((await $.call(C, "MD5", [""])), "d41d8cd98f00b204e9800998ecf8427e")))), async () => ($.eq((await $.call(C, "MD5", ["a"])), "0cc175b9c0f1b6a831c399e269772661")))), async () => ($.eq((await $.call(C, "MD5", ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"])), "d174ab98d277d9f5a5611c2c9f419d9f"))));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("sha1Compress", async function sha1Compress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.asRef(p0), "data": $.copyArg(p1), result: undefined, "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "x": 0, "w": $.sarr(), "i": 0};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.call(C, "bswap256", [(await $.idx(L0["data"], [0])), (await $.idx(L0["w"], [0]))])));
  await $.stmt((await $.call(C, "bswap256", [(await $.idx(L0["data"], [32])), (await $.idx(L0["w"], [8]))])));
  { const $t544 = 79;
    L0["i"] = 16;
    let $t545 = true;
    for (;;) {
      if (!$t545) { L0["i"] = $.succ(L0["i"], 1); }
      $t545 = false;
      if (!($.ord(L0["i"]) <= $.ord($t544))) break;
      L0["x"] = $.xor($.xor($.xor((await $.idx(L0["w"], [$.sub(L0["i"], 3)])), (await $.idx(L0["w"], [$.sub(L0["i"], 8)]))), (await $.idx(L0["w"], [$.sub(L0["i"], 14)]))), (await $.idx(L0["w"], [$.sub(L0["i"], 16)])));
      { const $t546 = await $.iset(L0["w"], [L0["i"]], (await $.or_(($.shl(L0["x"], 1)), async () => ($.shr(L0["x"], 31))))); if ($t546 !== undefined) { L0["w"] = $t546; } }
      await $.tick();
    }
  }
  L0["a"] = (await $.mv((await L0["hash"].get()), "A"));
  L0["b"] = (await $.mv((await L0["hash"].get()), "B"));
  L0["c"] = (await $.mv((await L0["hash"].get()), "C"));
  L0["d"] = (await $.mv((await L0["hash"].get()), "D"));
  L0["e"] = (await $.mv((await L0["hash"].get()), "E"));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t547) => { L0["e"] = $t547; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor(L0["d"], ((await $.and_(L0["b"], async () => ($.xor(L0["c"], L0["d"])))))))), 1518500249), (await $.idx(L0["w"], [0])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t548) => { L0["d"] = $t548; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor(L0["c"], ((await $.and_(L0["a"], async () => ($.xor(L0["b"], L0["c"])))))))), 1518500249), (await $.idx(L0["w"], [1])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t549) => { L0["c"] = $t549; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor(L0["b"], ((await $.and_(L0["e"], async () => ($.xor(L0["a"], L0["b"])))))))), 1518500249), (await $.idx(L0["w"], [2])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t550) => { L0["b"] = $t550; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor(L0["a"], ((await $.and_(L0["d"], async () => ($.xor(L0["e"], L0["a"])))))))), 1518500249), (await $.idx(L0["w"], [3])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t551) => { L0["a"] = $t551; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor(L0["e"], ((await $.and_(L0["c"], async () => ($.xor(L0["d"], L0["e"])))))))), 1518500249), (await $.idx(L0["w"], [4])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t552) => { L0["e"] = $t552; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor(L0["d"], ((await $.and_(L0["b"], async () => ($.xor(L0["c"], L0["d"])))))))), 1518500249), (await $.idx(L0["w"], [5])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t553) => { L0["d"] = $t553; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor(L0["c"], ((await $.and_(L0["a"], async () => ($.xor(L0["b"], L0["c"])))))))), 1518500249), (await $.idx(L0["w"], [6])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t554) => { L0["c"] = $t554; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor(L0["b"], ((await $.and_(L0["e"], async () => ($.xor(L0["a"], L0["b"])))))))), 1518500249), (await $.idx(L0["w"], [7])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t555) => { L0["b"] = $t555; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor(L0["a"], ((await $.and_(L0["d"], async () => ($.xor(L0["e"], L0["a"])))))))), 1518500249), (await $.idx(L0["w"], [8])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t556) => { L0["a"] = $t556; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor(L0["e"], ((await $.and_(L0["c"], async () => ($.xor(L0["d"], L0["e"])))))))), 1518500249), (await $.idx(L0["w"], [9])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t557) => { L0["e"] = $t557; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor(L0["d"], ((await $.and_(L0["b"], async () => ($.xor(L0["c"], L0["d"])))))))), 1518500249), (await $.idx(L0["w"], [10])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t558) => { L0["d"] = $t558; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor(L0["c"], ((await $.and_(L0["a"], async () => ($.xor(L0["b"], L0["c"])))))))), 1518500249), (await $.idx(L0["w"], [11])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t559) => { L0["c"] = $t559; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor(L0["b"], ((await $.and_(L0["e"], async () => ($.xor(L0["a"], L0["b"])))))))), 1518500249), (await $.idx(L0["w"], [12])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t560) => { L0["b"] = $t560; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor(L0["a"], ((await $.and_(L0["d"], async () => ($.xor(L0["e"], L0["a"])))))))), 1518500249), (await $.idx(L0["w"], [13])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t561) => { L0["a"] = $t561; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor(L0["e"], ((await $.and_(L0["c"], async () => ($.xor(L0["d"], L0["e"])))))))), 1518500249), (await $.idx(L0["w"], [14])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t562) => { L0["e"] = $t562; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor(L0["d"], ((await $.and_(L0["b"], async () => ($.xor(L0["c"], L0["d"])))))))), 1518500249), (await $.idx(L0["w"], [15])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t563) => { L0["d"] = $t563; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor(L0["c"], ((await $.and_(L0["a"], async () => ($.xor(L0["b"], L0["c"])))))))), 1518500249), (await $.idx(L0["w"], [16])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t564) => { L0["c"] = $t564; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor(L0["b"], ((await $.and_(L0["e"], async () => ($.xor(L0["a"], L0["b"])))))))), 1518500249), (await $.idx(L0["w"], [17])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t565) => { L0["b"] = $t565; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor(L0["a"], ((await $.and_(L0["d"], async () => ($.xor(L0["e"], L0["a"])))))))), 1518500249), (await $.idx(L0["w"], [18])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t566) => { L0["a"] = $t566; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor(L0["e"], ((await $.and_(L0["c"], async () => ($.xor(L0["d"], L0["e"])))))))), 1518500249), (await $.idx(L0["w"], [19])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t567) => { L0["e"] = $t567; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 1859775393), (await $.idx(L0["w"], [20])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t568) => { L0["d"] = $t568; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 1859775393), (await $.idx(L0["w"], [21])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t569) => { L0["c"] = $t569; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 1859775393), (await $.idx(L0["w"], [22])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t570) => { L0["b"] = $t570; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 1859775393), (await $.idx(L0["w"], [23])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t571) => { L0["a"] = $t571; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 1859775393), (await $.idx(L0["w"], [24])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t572) => { L0["e"] = $t572; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 1859775393), (await $.idx(L0["w"], [25])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t573) => { L0["d"] = $t573; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 1859775393), (await $.idx(L0["w"], [26])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t574) => { L0["c"] = $t574; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 1859775393), (await $.idx(L0["w"], [27])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t575) => { L0["b"] = $t575; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 1859775393), (await $.idx(L0["w"], [28])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t576) => { L0["a"] = $t576; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 1859775393), (await $.idx(L0["w"], [29])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t577) => { L0["e"] = $t577; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 1859775393), (await $.idx(L0["w"], [30])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t578) => { L0["d"] = $t578; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 1859775393), (await $.idx(L0["w"], [31])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t579) => { L0["c"] = $t579; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 1859775393), (await $.idx(L0["w"], [32])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t580) => { L0["b"] = $t580; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 1859775393), (await $.idx(L0["w"], [33])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t581) => { L0["a"] = $t581; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 1859775393), (await $.idx(L0["w"], [34])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t582) => { L0["e"] = $t582; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 1859775393), (await $.idx(L0["w"], [35])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t583) => { L0["d"] = $t583; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 1859775393), (await $.idx(L0["w"], [36])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t584) => { L0["c"] = $t584; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 1859775393), (await $.idx(L0["w"], [37])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t585) => { L0["b"] = $t585; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 1859775393), (await $.idx(L0["w"], [38])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t586) => { L0["a"] = $t586; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 1859775393), (await $.idx(L0["w"], [39])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t587) => { L0["e"] = $t587; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ((await $.or_(((await $.and_(L0["b"], async () => L0["c"]))), async () => ((await $.and_(L0["d"], async () => ((await $.or_(L0["b"], async () => L0["c"])))))))))), 2400959708), (await $.idx(L0["w"], [40])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t588) => { L0["d"] = $t588; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ((await $.or_(((await $.and_(L0["a"], async () => L0["b"]))), async () => ((await $.and_(L0["c"], async () => ((await $.or_(L0["a"], async () => L0["b"])))))))))), 2400959708), (await $.idx(L0["w"], [41])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t589) => { L0["c"] = $t589; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ((await $.or_(((await $.and_(L0["e"], async () => L0["a"]))), async () => ((await $.and_(L0["b"], async () => ((await $.or_(L0["e"], async () => L0["a"])))))))))), 2400959708), (await $.idx(L0["w"], [42])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t590) => { L0["b"] = $t590; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ((await $.or_(((await $.and_(L0["d"], async () => L0["e"]))), async () => ((await $.and_(L0["a"], async () => ((await $.or_(L0["d"], async () => L0["e"])))))))))), 2400959708), (await $.idx(L0["w"], [43])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t591) => { L0["a"] = $t591; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ((await $.or_(((await $.and_(L0["c"], async () => L0["d"]))), async () => ((await $.and_(L0["e"], async () => ((await $.or_(L0["c"], async () => L0["d"])))))))))), 2400959708), (await $.idx(L0["w"], [44])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t592) => { L0["e"] = $t592; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ((await $.or_(((await $.and_(L0["b"], async () => L0["c"]))), async () => ((await $.and_(L0["d"], async () => ((await $.or_(L0["b"], async () => L0["c"])))))))))), 2400959708), (await $.idx(L0["w"], [45])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t593) => { L0["d"] = $t593; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ((await $.or_(((await $.and_(L0["a"], async () => L0["b"]))), async () => ((await $.and_(L0["c"], async () => ((await $.or_(L0["a"], async () => L0["b"])))))))))), 2400959708), (await $.idx(L0["w"], [46])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t594) => { L0["c"] = $t594; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ((await $.or_(((await $.and_(L0["e"], async () => L0["a"]))), async () => ((await $.and_(L0["b"], async () => ((await $.or_(L0["e"], async () => L0["a"])))))))))), 2400959708), (await $.idx(L0["w"], [47])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t595) => { L0["b"] = $t595; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ((await $.or_(((await $.and_(L0["d"], async () => L0["e"]))), async () => ((await $.and_(L0["a"], async () => ((await $.or_(L0["d"], async () => L0["e"])))))))))), 2400959708), (await $.idx(L0["w"], [48])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t596) => { L0["a"] = $t596; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ((await $.or_(((await $.and_(L0["c"], async () => L0["d"]))), async () => ((await $.and_(L0["e"], async () => ((await $.or_(L0["c"], async () => L0["d"])))))))))), 2400959708), (await $.idx(L0["w"], [49])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t597) => { L0["e"] = $t597; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ((await $.or_(((await $.and_(L0["b"], async () => L0["c"]))), async () => ((await $.and_(L0["d"], async () => ((await $.or_(L0["b"], async () => L0["c"])))))))))), 2400959708), (await $.idx(L0["w"], [50])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t598) => { L0["d"] = $t598; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ((await $.or_(((await $.and_(L0["a"], async () => L0["b"]))), async () => ((await $.and_(L0["c"], async () => ((await $.or_(L0["a"], async () => L0["b"])))))))))), 2400959708), (await $.idx(L0["w"], [51])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t599) => { L0["c"] = $t599; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ((await $.or_(((await $.and_(L0["e"], async () => L0["a"]))), async () => ((await $.and_(L0["b"], async () => ((await $.or_(L0["e"], async () => L0["a"])))))))))), 2400959708), (await $.idx(L0["w"], [52])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t600) => { L0["b"] = $t600; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ((await $.or_(((await $.and_(L0["d"], async () => L0["e"]))), async () => ((await $.and_(L0["a"], async () => ((await $.or_(L0["d"], async () => L0["e"])))))))))), 2400959708), (await $.idx(L0["w"], [53])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t601) => { L0["a"] = $t601; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ((await $.or_(((await $.and_(L0["c"], async () => L0["d"]))), async () => ((await $.and_(L0["e"], async () => ((await $.or_(L0["c"], async () => L0["d"])))))))))), 2400959708), (await $.idx(L0["w"], [54])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t602) => { L0["e"] = $t602; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ((await $.or_(((await $.and_(L0["b"], async () => L0["c"]))), async () => ((await $.and_(L0["d"], async () => ((await $.or_(L0["b"], async () => L0["c"])))))))))), 2400959708), (await $.idx(L0["w"], [55])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t603) => { L0["d"] = $t603; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ((await $.or_(((await $.and_(L0["a"], async () => L0["b"]))), async () => ((await $.and_(L0["c"], async () => ((await $.or_(L0["a"], async () => L0["b"])))))))))), 2400959708), (await $.idx(L0["w"], [56])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t604) => { L0["c"] = $t604; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ((await $.or_(((await $.and_(L0["e"], async () => L0["a"]))), async () => ((await $.and_(L0["b"], async () => ((await $.or_(L0["e"], async () => L0["a"])))))))))), 2400959708), (await $.idx(L0["w"], [57])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t605) => { L0["b"] = $t605; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ((await $.or_(((await $.and_(L0["d"], async () => L0["e"]))), async () => ((await $.and_(L0["a"], async () => ((await $.or_(L0["d"], async () => L0["e"])))))))))), 2400959708), (await $.idx(L0["w"], [58])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t606) => { L0["a"] = $t606; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ((await $.or_(((await $.and_(L0["c"], async () => L0["d"]))), async () => ((await $.and_(L0["e"], async () => ((await $.or_(L0["c"], async () => L0["d"])))))))))), 2400959708), (await $.idx(L0["w"], [59])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t607) => { L0["e"] = $t607; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 3395469782), (await $.idx(L0["w"], [60])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t608) => { L0["d"] = $t608; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 3395469782), (await $.idx(L0["w"], [61])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t609) => { L0["c"] = $t609; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 3395469782), (await $.idx(L0["w"], [62])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t610) => { L0["b"] = $t610; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 3395469782), (await $.idx(L0["w"], [63])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t611) => { L0["a"] = $t611; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 3395469782), (await $.idx(L0["w"], [64])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t612) => { L0["e"] = $t612; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 3395469782), (await $.idx(L0["w"], [65])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t613) => { L0["d"] = $t613; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 3395469782), (await $.idx(L0["w"], [66])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t614) => { L0["c"] = $t614; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 3395469782), (await $.idx(L0["w"], [67])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t615) => { L0["b"] = $t615; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 3395469782), (await $.idx(L0["w"], [68])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t616) => { L0["a"] = $t616; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 3395469782), (await $.idx(L0["w"], [69])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t617) => { L0["e"] = $t617; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 3395469782), (await $.idx(L0["w"], [70])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t618) => { L0["d"] = $t618; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 3395469782), (await $.idx(L0["w"], [71])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t619) => { L0["c"] = $t619; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 3395469782), (await $.idx(L0["w"], [72])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t620) => { L0["b"] = $t620; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 3395469782), (await $.idx(L0["w"], [73])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t621) => { L0["a"] = $t621; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 3395469782), (await $.idx(L0["w"], [74])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["e"], async ($t622) => { L0["e"] = $t622; }), $.add($.add($.add(((await $.or_(($.shl(L0["a"], 5)), async () => ($.shr(L0["a"], 27))))), ($.xor($.xor(L0["b"], L0["c"]), L0["d"]))), 3395469782), (await $.idx(L0["w"], [75])))])));
  L0["b"] = (await $.or_(($.shl(L0["b"], 30)), async () => ($.shr(L0["b"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["d"], async ($t623) => { L0["d"] = $t623; }), $.add($.add($.add(((await $.or_(($.shl(L0["e"], 5)), async () => ($.shr(L0["e"], 27))))), ($.xor($.xor(L0["a"], L0["b"]), L0["c"]))), 3395469782), (await $.idx(L0["w"], [76])))])));
  L0["a"] = (await $.or_(($.shl(L0["a"], 30)), async () => ($.shr(L0["a"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["c"], async ($t624) => { L0["c"] = $t624; }), $.add($.add($.add(((await $.or_(($.shl(L0["d"], 5)), async () => ($.shr(L0["d"], 27))))), ($.xor($.xor(L0["e"], L0["a"]), L0["b"]))), 3395469782), (await $.idx(L0["w"], [77])))])));
  L0["e"] = (await $.or_(($.shl(L0["e"], 30)), async () => ($.shr(L0["e"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["b"], async ($t625) => { L0["b"] = $t625; }), $.add($.add($.add(((await $.or_(($.shl(L0["c"], 5)), async () => ($.shr(L0["c"], 27))))), ($.xor($.xor(L0["d"], L0["e"]), L0["a"]))), 3395469782), (await $.idx(L0["w"], [78])))])));
  L0["d"] = (await $.or_(($.shl(L0["d"], 30)), async () => ($.shr(L0["d"], 2))));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["a"], async ($t626) => { L0["a"] = $t626; }), $.add($.add($.add(((await $.or_(($.shl(L0["b"], 5)), async () => ($.shr(L0["b"], 27))))), ($.xor($.xor(L0["c"], L0["d"]), L0["e"]))), 3395469782), (await $.idx(L0["w"], [79])))])));
  L0["c"] = (await $.or_(($.shl(L0["c"], 30)), async () => ($.shr(L0["c"], 2))));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "A")), async ($t627) => { await $.mset((await L0["hash"].get()), "A", $t627); }), L0["a"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "B")), async ($t628) => { await $.mset((await L0["hash"].get()), "B", $t628); }), L0["b"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "C")), async ($t629) => { await $.mset((await L0["hash"].get()), "C", $t629); }), L0["c"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "D")), async ($t630) => { await $.mset((await L0["hash"].get()), "D", $t630); }), L0["d"]])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await L0["hash"].get()), "E")), async ($t631) => { await $.mset((await L0["hash"].get()), "E", $t631); }), L0["e"]])));
  return L0.result;
}, {"params": ["Hash", "Data"], "kind": "procedure", "ptypes": ["TSHAHash", "PByteArray"]});
  U.func("RawSha1Compress", async function RawSha1Compress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.asRef(p0), "data": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["data"]);
  await $.stmt((await $.call(C, "sha1Compress", [(await $.call(C, "TSHAHash", [(await L0["hash"].get())])), L0["data"]])));
  return L0.result;
}, {"params": ["Hash", "Data"], "kind": "procedure", "ptypes": [null, "pointer"]});
  U.method("TSHA1", "Final", async function Final() { return $.notPorted("TSHA1.Final", "cannot assign to call"); }, {"params": ["Digest", "NoInit"], "kind": "procedure", "ptypes": ["TSHA1Digest", "boolean"], "error": "cannot assign to call", "src": "procedure TSHA1.Final(out Digest: TSHA1Digest; NoInit: boolean);\nvar Data: TSHAContext absolute Context;\nbegin\n  \n  Data.Buffer[Data.Index] := $80;\n  FillcharFast(Data.Buffer[Data.Index+1],63-Data.Index,0);\n  \n  if Data.Index>=56 then begin\n    sha1Compress(Data.Hash,@Data.Buffer);\n    FillcharFast(Data.Buffer,56,0);\n  end;\n  \n  \n  PCardinal(@Data.Buffer[56])^ := bswap32(TQWordRec(Data.MLen).H);\n  PCardinal(@Data.Buffer[60])^ := bswap32(TQWordRec(Data.MLen).L);\n  sha1Compress(Data.Hash,@Data.Buffer);\n  \n  bswap160(@Data.Hash,@Digest);\n  \n  if not NoInit then\n    Init;\nend;"});
  U.method("TSHA1", "Final", async function Final(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"noinit": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["noinit"]);
  await $.stmt((await $.callv(L0["final"], [$.ref(async () => L0["result"], async ($t634) => { L0["result"] = $t634; }), L0["noinit"]])));
  return L0.result;
}, {"params": ["NoInit"], "kind": "function", "ptypes": ["boolean"]});
  U.method("TSHA1", "Full", async function Full(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "digest": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt($.call(C, "Init", []));
  await $.stmt((await $.call(C, "Update", [L0["buffer"], L0["len"]])));
  await $.stmt((await $.call(C, "Final", [$.ref(async () => (await L0["digest"].get()), async ($t635) => { await L0["digest"].set($t635); })])));
  return L0.result;
}, {"params": ["Buffer", "Len", "Digest"], "kind": "procedure", "ptypes": ["pointer", "integer", "TSHA1Digest"]});
  U.method("TSHA1", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "data": $.rec("tshacontext")};
  await $.mset((await $.mv(L0["data"], "Hash")), "A", 1732584193);
  await $.mset((await $.mv(L0["data"], "Hash")), "B", 4023233417);
  await $.mset((await $.mv(L0["data"], "Hash")), "C", 2562383102);
  await $.mset((await $.mv(L0["data"], "Hash")), "D", 271733878);
  await $.mset((await $.mv(L0["data"], "Hash")), "E", 3285377520);
  await $.stmt((await $.call(C, "FillcharFast", [(await $.mv(L0["data"], "MLen")), $.sub((await $.call(C, "sizeof", [L0["data"]])), (await $.call(C, "sizeof", [(await $.mv(L0["data"], "Hash"))]))), 0])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSHA1", "Update", async function Update(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined, "data": $.rec("tshacontext"), "alen": 0};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy($.eq(L0["buffer"], null))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv(L0["data"], "MLen")), async ($t636) => { await $.mset(L0["data"], "MLen", $t636); }), $.shl((await $.call(C, "QWord", [(await $.call(C, "Cardinal", [L0["len"]]))])), 3)])));
  while ($.truthy($.gt(L0["len"], 0))) {
    L0["alen"] = $.sub((await $.call(C, "sizeof", [(await $.mv(L0["data"], "Buffer"))])), (await $.mv(L0["data"], "Index")));
    if ($.truthy($.le(L0["alen"], L0["len"]))) {
      if ($.truthy($.ne((await $.mv(L0["data"], "Index")), 0))) {
        await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.mv(L0["data"], "Buffer")), [(await $.mv(L0["data"], "Index"))])), L0["alen"]])));
        await $.stmt((await $.call(C, "sha1Compress", [$.ref(async () => (await $.mv(L0["data"], "Hash")), async ($t637) => { await $.mset(L0["data"], "Hash", $t637); }), (await $.mref(L0["data"], "Buffer"))])));
        await $.mset(L0["data"], "Index", 0);
      } else {
        await $.stmt((await $.call(C, "sha1Compress", [$.ref(async () => (await $.mv(L0["data"], "Hash")), async ($t638) => { await $.mset(L0["data"], "Hash", $t638); }), L0["buffer"]])));
      }
      await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["len"], async ($t639) => { L0["len"] = $t639; }), L0["alen"]])));
      await $.stmt((await $.call(C, "inc", [(await $.call(C, "PByte", [L0["buffer"]])), L0["alen"]])));
    } else {
      await $.stmt((await $.call(C, "MoveFast", [L0["buffer"], (await $.idx((await $.mv(L0["data"], "Buffer")), [(await $.mv(L0["data"], "Index"))])), L0["len"]])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv(L0["data"], "Index")), async ($t640) => { await $.mset(L0["data"], "Index", $t640); }), L0["len"]])));
      break;
    }
    await $.tick();
  }
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TSHA1", "Update", async function Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["buffer"]);
  await $.stmt((await $.call(C, "Update", [(await $.call(C, "pointer", [L0["buffer"]])), (await $.call(C, "length", [L0["buffer"]]))])));
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["RawByteString"]});
  U.func("AESIVCtrEncryptDecrypt", async function AESIVCtrEncryptDecrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bi": $.copyArg(p0), "bo": $.asRef(p1), "doencrypt": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bi", "doencrypt"]);
  if ($.truthy($.eq((await $.idx((await $.v(C, "aesivctr")), [L0["doencrypt"]])), null))) {
    await $.stmt((await $.call(C, "GarbageCollectorFreeAndNil", [(await $.idx((await $.v(C, "aesivctr")), [L0["doencrypt"]])), (await $.mv((await $.v(C, "TAESLocked")), "Create"))])));
    {
      const $t641 = (await $.mv((await $.idx((await $.v(C, "aesivctr")), [L0["doencrypt"]])), "fAES"));
      if ($.truthy((await $.wv([$t641], "DoEncrypt", { get: async () => L0["doencrypt"], set: async (v) => { L0["doencrypt"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t641], "EncryptInit", [(await $.wv([$t641], "AESIVCTR_KEY", C, false)), 128], C)));
      } else {
        await $.stmt((await $.wcall([$t641], "DecryptInit", [(await $.wv([$t641], "AESIVCTR_KEY", C, false)), 128], C)));
      }
    }
  }
  {
    const $t642 = (await $.idx((await $.v(C, "aesivctr")), [L0["doencrypt"]]));
    await $.mcall((await $.wv([$t642], "fSafe", C, false)), "Lock", []);
    await $.stmt((await $.mcall((await $.wcall([$t642], "TAESContext", [(await $.mv((await $.wv([$t642], "fAES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t642], "fAES", C, false)), "Context")), (await $.wv([$t642], "BI", { get: async () => L0["bi"], set: async (v) => { L0["bi"] = v; }, local: true }, false)), (await $.wv([$t642], "BO", { get: async () => await L0["bo"].get(), set: async (v) => { await L0["bo"].set(v); }, local: true }, false))])));
    await $.mcall((await $.wv([$t642], "fSafe", C, false)), "UnLock", []);
  }
  return L0.result;
}, {"params": ["BI", "BO", "DoEncrypt"], "kind": "procedure", "ptypes": [null, null, "boolean"]});
  U.method("TAESAbstract", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "akeysize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["akey", "akeysize"]);
  if ($.truthy((await $.and_((await $.and_(($.ne(L0["akeysize"], 128)), async () => ($.ne(L0["akeysize"], 192)))), async () => ($.ne(L0["akeysize"], 256)))))) {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["%.Create(aKeySize=%): 128/192/256 required", [Self, L0["akeysize"]]])));
  }
  await $.set(C, "fKeySize", L0["akeysize"]);
  await $.set(C, "fKeySizeBytes", $.shr((await $.v(C, "fKeySize")), 3));
  await $.stmt((await $.call(C, "MoveFast", [L0["akey"], (await $.v(C, "fKey")), (await $.v(C, "fKeySizeBytes"))])));
  return L0.result;
}, {"params": ["aKey", "aKeySize"], "kind": "constructor", "ptypes": [null, "cardinal"]});
  U.method("TAESAbstract", "SetIVCTR", async function SetIVCTR(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tmp": null};
  do {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TAESPRNG")), "Main")), "FillRandom", [(await $.call(C, "TAESBLock", [(await $.v(C, "fIVCTR"))]))])));
    await $.tick();
  } while (!$.truthy($.ne((await $.mv((await $.v(C, "fIVCTR")), "nonce")), 0)));
  L0["tmp"] = (await $.call(C, "ClassNameShort", [Self]));
  await $.mset((await $.v(C, "fIVCtr")), "magic", (await $.call(C, "crc32c", [2879761317, (await $.idx(L0["tmp"], [2])), 6])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESAbstract", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["akey"]);
  await $.stmt((await $.call(C, "Create", [L0["akey"], 128])));
  return L0.result;
}, {"params": ["aKey"], "kind": "constructor", "ptypes": ["THash128"]});
  U.method("TAESAbstract", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["akey"]);
  await $.stmt((await $.call(C, "Create", [L0["akey"], 256])));
  return L0.result;
}, {"params": ["aKey"], "kind": "constructor", "ptypes": ["THash256"]});
  U.method("TAESAbstract", "CreateTemp", async function CreateTemp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"akeysize": $.copyArg(p0), result: undefined, "tmp": null};
  await $.fixArgs(L0, ["akeysize"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TAESPRNG")), "Main")), "FillRandom", [$.ref(async () => L0["tmp"], async ($t643) => { L0["tmp"] = $t643; })])));
  await $.stmt((await $.call(C, "Create", [L0["tmp"], L0["akeysize"]])));
  await $.stmt((await $.call(C, "FillZero", [L0["tmp"]])));
  return L0.result;
}, {"params": ["aKeySize"], "kind": "constructor", "ptypes": ["cardinal"]});
  U.method("TAESAbstract", "CreateFromSha256", async function CreateFromSha256(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), result: undefined, "digest": null};
  await $.fixArgs(L0, ["akey"]);
  await $.stmt((await $.call(C, "SHA256Weak", [L0["akey"], $.ref(async () => L0["digest"], async ($t644) => { L0["digest"] = $t644; })])));
  await $.stmt((await $.call(C, "Create", [L0["digest"], 256])));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["aKey"], "kind": "constructor", "ptypes": ["RawUTF8"]});
  U.method("TAESAbstract", "CreateFromPBKDF2", async function CreateFromPBKDF2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "asalt": $.copyArg(p1), "arounds": $.copyArg(p2), result: undefined, "digest": null};
  await $.fixArgs(L0, ["akey", "asalt", "arounds"]);
  await $.stmt((await $.call(C, "PBKDF2_HMAC_SHA256", [L0["akey"], L0["asalt"], L0["arounds"], $.ref(async () => L0["digest"], async ($t645) => { L0["digest"] = $t645; }), (await $.call(C, "ToText", [(await $.v(C, "ClassType"))]))])));
  await $.stmt((await $.call(C, "Create", [L0["digest"], 256])));
  await $.stmt((await $.call(C, "FillZero", [L0["digest"]])));
  return L0.result;
}, {"params": ["aKey", "aSalt", "aRounds"], "kind": "constructor", "ptypes": ["RawUTF8", "RawByteString", "Integer"]});
  U.method("TAESAbstract", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAESAbstract", "Destroy", null, arguments);
  await $.stmt((await $.call(C, "FillZero", [(await $.v(C, "fKey"))])));
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TAESAbstract", "AlgoName", async function AlgoName() { return $.notPorted("TAESAbstract.AlgoName", "cannot assign to call"); }, {"params": [], "kind": "function", "ptypes": [], "error": "cannot assign to call", "src": "function TAESAbstract.AlgoName: TShort16;\nconst TXT: array[2..4] of array[0..7] of AnsiChar = (#9'aes128',#9'aes192',#9'aes256');\nvar s: PShortString;\nbegin\n  if (self=nil) or (KeySize=0) then\n    result[0] := #0 else begin\n    PInt64(@result)^ := PInt64(@TXT[KeySize shr 6])^;\n    s := ClassNameShort(self);\n    if s^[0]<#7 then\n      result[0] := #6 else begin\n      result[7] := NormToLower[s^[5]]; \n      result[8] := NormToLower[s^[6]];\n      result[9] := NormToLower[s^[7]];\n    end;\n  end;\nend;"});
  U.method("TAESAbstract", "SetIVHistory", async function SetIVHistory(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"adepth": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["adepth"]);
  await $.stmt((await $.mcall((await $.v(C, "fIVHistoryDec")), "Init", [L0["adepth"], L0["adepth"]])));
  return L0.result;
}, {"params": ["aDepth"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TAESAbstract", "EncryptPKCS7", async function EncryptPKCS7(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "ivatbeginning": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["input", "ivatbeginning"]);
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t647) => { L0["result"] = $t647; }), null, (await $.call(C, "EncryptPKCS7Length", [(await $.call(C, "length", [L0["input"]])), L0["ivatbeginning"]]))])));
  await $.stmt((await $.call(C, "EncryptPKCS7Buffer", [(await $.call(C, "Pointer", [L0["input"]])), (await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "length", [L0["input"]])), (await $.call(C, "length", [L0["result"]])), L0["ivatbeginning"]])));
  return L0.result;
}, {"params": ["Input", "IVAtBeginning"], "kind": "function", "ptypes": ["RawByteString", "boolean"]});
  U.method("TAESAbstract", "EncryptPKCS7", async function EncryptPKCS7(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "ivatbeginning": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["input", "ivatbeginning"]);
  L0["result"] = null;
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t648) => { L0["result"] = $t648; }), (await $.call(C, "EncryptPKCS7Length", [(await $.call(C, "length", [L0["input"]])), L0["ivatbeginning"]]))])));
  await $.stmt((await $.call(C, "EncryptPKCS7Buffer", [(await $.call(C, "Pointer", [L0["input"]])), (await $.call(C, "pointer", [L0["result"]])), (await $.call(C, "length", [L0["input"]])), (await $.call(C, "length", [L0["result"]])), L0["ivatbeginning"]])));
  return L0.result;
}, {"params": ["Input", "IVAtBeginning"], "kind": "function", "ptypes": ["TBytes", "boolean"]});
  U.method("TAESAbstract", "EncryptPKCS7Length", async function EncryptPKCS7Length(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"inputlen": $.copyArg(p0), "ivatbeginning": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["inputlen", "ivatbeginning"]);
  L0["result"] = $.sub($.add(L0["inputlen"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))), ((await $.and_(L0["inputlen"], async () => (await $.v(C, "AESBlockMod"))))));
  if ($.truthy(L0["ivatbeginning"])) {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["result"], async ($t649) => { L0["result"] = $t649; }), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))])));
  }
  return L0.result;
}, {"params": ["InputLen", "IVAtBeginning"], "kind": "function", "ptypes": ["cardinal", "boolean"]});
  U.method("TAESAbstract", "EncryptPKCS7Buffer", async function EncryptPKCS7Buffer() { return $.notPorted("TAESAbstract.EncryptPKCS7Buffer", "cannot assign to call"); }, {"params": ["Input", "Output", "InputLen", "OutputLen", "IVAtBeginning"], "kind": "function", "ptypes": ["Pointer", "Pointer", "cardinal", "cardinal", "boolean"], "error": "cannot assign to call", "src": "function TAESAbstract.EncryptPKCS7Buffer(Input,Output: Pointer; InputLen,OutputLen: cardinal;\n  IVAtBeginning: boolean): boolean;\nvar padding, ivsize: cardinal;\nbegin\n  padding := sizeof(TAESBlock)-(InputLen and AESBlockMod);\n  if IVAtBeginning then\n    ivsize := sizeof(TAESBlock) else\n    ivsize := 0;\n  if OutputLen<>ivsize+InputLen+padding then begin\n    result := false;\n    exit;\n  end;\n  if IVAtBeginning then begin\n    if fIVReplayAttackCheck<>repNoCheck then begin\n      if fIVCTR.nonce=0 then\n        SetIVCTR;\n      AESIVCtrEncryptDecrypt(fIVCTR,fIV,true); \n      inc(fIVCTR.ctr); \n    end else\n      TAESPRNG.Main.FillRandom(fIV); \n    PAESBlock(Output)^ := fIV;\n  end;\n  MoveFast(Input^,PByteArray(Output)^[ivsize],InputLen);\n  FillcharFast(PByteArray(Output)^[ivsize+InputLen],padding,padding);\n  Inc(PByte(Output),ivsize);\n  Encrypt(Output,Output,InputLen+padding);\n  result := true;\nend;"});
  U.method("TAESAbstract", "DecryptPKCS7Len", async function DecryptPKCS7Len(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"inputlen": $.asRef(p0), "ivsize": $.asRef(p1), "input": $.copyArg(p2), "ivatbeginning": $.copyArg(p3), "raiseesyncryptoonerror": $.copyArg(p4), result: false, "ctr": $.rec("taesivctr")};
  await $.fixArgs(L0, ["input", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["result"] = true;
  if ($.truthy((await $.or_(($.lt((await L0["inputlen"].get()), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))])))), async () => ($.ne((await $.and_((await L0["inputlen"].get()), async () => (await $.v(C, "AESBlockMod")))), 0)))))) {
    if ($.truthy(L0["raiseesyncryptoonerror"])) {
      throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["%.DecryptPKCS7: Invalid InputLen=%", [Self, (await L0["inputlen"].get())]])));
    } else {
      L0["result"] = false;
    }
  }
  if ($.truthy((await $.and_(L0["result"], async () => L0["ivatbeginning"])))) {
    if ($.truthy((await $.and_(($.ne((await $.v(C, "fIVReplayAttackCheck")), (await $.v(C, "repNoCheck")))), async () => ($.ne((await $.v(C, "fIVCTRState")), (await $.v(C, "ctrNotUsed")))))))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "fIVCTR")), "nonce")), 0))) {
        await $.stmt($.call(C, "SetIVCTR", []));
      }
      await $.stmt((await $.call(C, "AESIVCtrEncryptDecrypt", [L0["input"], $.ref(async () => L0["ctr"], async ($t653) => { L0["ctr"] = $t653; }), false])));
      if ($.truthy($.eq((await $.v(C, "fIVCTRState")), (await $.v(C, "ctrUnknown"))))) {
        if ($.truthy($.eq((await $.mv(L0["ctr"], "magic")), (await $.mv((await $.v(C, "fIVCTR")), "magic"))))) {
          await $.set(C, "fIVCTR", L0["ctr"]);
          await $.set(C, "fIVCTRState", (await $.v(C, "ctrUsed")));
          await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await $.v(C, "fIVCTR")), "ctr")), async ($t654) => { await $.mset((await $.v(C, "fIVCTR")), "ctr", $t654); })])));
        } else {
          if ($.truthy($.eq((await $.v(C, "fIVReplayAttackCheck")), (await $.v(C, "repMandatory"))))) {
            if ($.truthy(L0["raiseesyncryptoonerror"])) {
              throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", [$.add("%.DecryptPKCS7: IVCTR is not handled ", "on encryption"), [Self]])));
            } else {
              L0["result"] = false;
            }
          } else {
            await $.set(C, "fIVCTRState", (await $.v(C, "ctrNotused")));
            if ($.truthy($.eq((await $.mv((await $.v(C, "fIVHistoryDec")), "Depth")), 0))) {
              await $.stmt((await $.call(C, "SetIVHistory", [64])));
            }
          }
        }
      } else {
        if ($.truthy((await $.call(C, "IsEqual", [(await $.call(C, "TAESBlock", [L0["ctr"]])), (await $.call(C, "TAESBlock", [(await $.v(C, "fIVCTR"))]))])))) {
          await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.mv((await $.v(C, "fIVCTR")), "ctr")), async ($t655) => { await $.mset((await $.v(C, "fIVCTR")), "ctr", $t655); })])));
        } else {
          if ($.truthy(L0["raiseesyncryptoonerror"])) {
            throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", [$.add("%.DecryptPKCS7: wrong IVCTR %/% %/% -> ", "potential replay attack"), [Self, (await $.mv(L0["ctr"], "magic")), (await $.mv((await $.v(C, "fIVCTR")), "magic")), (await $.mv(L0["ctr"], "ctr")), (await $.mv((await $.v(C, "fIVCTR")), "ctr"))]])));
          } else {
            L0["result"] = false;
          }
        }
      }
    }
    await $.set(C, "fIV", (await $.call(C, "PAESBlock", [L0["input"]])));
    if ($.truthy((await $.and_((await $.and_(L0["result"], async () => ($.gt((await $.mv((await $.v(C, "fIVHistoryDec")), "Depth")), 0)))), async () => $.not((await $.mcall((await $.v(C, "fIVHistoryDec")), "Add", [(await $.v(C, "fIV"))]))))))) {
      if ($.truthy(L0["raiseesyncryptoonerror"])) {
        throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", [$.add("%.DecryptPKCS7: duplicated IV=% -> ", "potential replay attack"), [Self, (await $.call(C, "AESBlockToShortString", [(await $.v(C, "fIV"))]))]])));
      } else {
        L0["result"] = false;
      }
    }
    await $.stmt((await $.call(C, "dec", [$.ref(async () => (await L0["inputlen"].get()), async ($t656) => { await L0["inputlen"].set($t656); }), (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))])));
    await L0["ivsize"].set((await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))])));
  } else {
    await L0["ivsize"].set(0);
  }
  return L0.result;
}, {"params": ["InputLen", "ivsize", "Input", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["Integer", "Integer", "pointer", "boolean", "boolean"]});
  U.method("TAESAbstract", "DecryptPKCS7Buffer", async function DecryptPKCS7Buffer(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "inputlen": $.copyArg(p1), "ivatbeginning": $.copyArg(p2), "raiseesyncryptoonerror": $.copyArg(p3), result: null, "ivsize": 0, "padding": 0, "tmp": $.sarr(), "p": null};
  await $.fixArgs(L0, ["input", "inputlen", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["result"] = "";
  if ($.truthy($.not((await $.call(C, "DecryptPKCS7Len", [$.ref(async () => L0["inputlen"], async ($t657) => { L0["inputlen"] = $t657; }), $.ref(async () => L0["ivsize"], async ($t658) => { L0["ivsize"] = $t658; }), L0["input"], L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]))))) {
    return L0.result;
  }
  if ($.truthy($.lt(L0["inputlen"], (await $.call(C, "sizeof", [L0["tmp"]]))))) {
    L0["p"] = L0["tmp"];
  } else {
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t659) => { L0["result"] = $t659; }), null, L0["inputlen"]])));
    L0["p"] = (await $.call(C, "pointer", [L0["result"]]));
  }
  await $.stmt((await $.call(C, "Decrypt", [(await $.idx((await $.call(C, "PByteArray", [L0["input"]])), [L0["ivsize"]])), $.ref(async () => L0["p"], async ($t660) => { L0["p"] = $t660; }), L0["inputlen"]])));
  L0["padding"] = (await $.call(C, "ord", [(await $.idx(L0["p"], [$.sub(L0["inputlen"], 1)]))]));
  if ($.truthy($.gt(L0["padding"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))))) {
    if ($.truthy(L0["raiseesyncryptoonerror"])) {
      throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["%.DecryptPKCS7: Invalid Input", [Self]])));
    } else {
      L0["result"] = "";
    }
  } else {
    if ($.truthy($.eq(L0["p"], L0["tmp"]))) {
      await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t661) => { L0["result"] = $t661; }), L0["p"], $.sub(L0["inputlen"], L0["padding"])])));
    } else {
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t662) => { L0["result"] = $t662; }), $.sub(L0["inputlen"], L0["padding"])])));
    }
  }
  return L0.result;
}, {"params": ["Input", "InputLen", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["Pointer", "integer", "boolean", "boolean"]});
  U.method("TAESAbstract", "DecryptPKCS7", async function DecryptPKCS7(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "ivatbeginning": $.copyArg(p1), "raiseesyncryptoonerror": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["input", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["result"] = (await $.call(C, "DecryptPKCS7Buffer", [(await $.call(C, "pointer", [L0["input"]])), (await $.call(C, "length", [L0["input"]])), L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]));
  return L0.result;
}, {"params": ["Input", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["RawByteString", "boolean", "boolean"]});
  U.method("TAESAbstract", "DecryptPKCS7", async function DecryptPKCS7(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "ivatbeginning": $.copyArg(p1), "raiseesyncryptoonerror": $.copyArg(p2), result: null, "len": 0, "ivsize": 0, "padding": 0};
  await $.fixArgs(L0, ["input", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["result"] = null;
  L0["len"] = (await $.call(C, "length", [L0["input"]]));
  if ($.truthy($.not((await $.call(C, "DecryptPKCS7Len", [$.ref(async () => L0["len"], async ($t663) => { L0["len"] = $t663; }), $.ref(async () => L0["ivsize"], async ($t664) => { L0["ivsize"] = $t664; }), (await $.call(C, "pointer", [L0["input"]])), L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t665) => { L0["result"] = $t665; }), L0["len"]])));
  await $.stmt((await $.call(C, "Decrypt", [(await $.idx((await $.call(C, "PByteArray", [L0["input"]])), [L0["ivsize"]])), (await $.call(C, "pointer", [L0["result"]])), L0["len"]])));
  L0["padding"] = (await $.idx(L0["result"], [$.sub(L0["len"], 1)]));
  if ($.truthy($.gt(L0["padding"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))))) {
    if ($.truthy(L0["raiseesyncryptoonerror"])) {
      throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["%.DecryptPKCS7: Invalid Input", [Self]])));
    } else {
      L0["result"] = null;
    }
  } else {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t666) => { L0["result"] = $t666; }), $.sub(L0["len"], L0["padding"])])));
  }
  return L0.result;
}, {"params": ["Input", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["TBytes", "boolean", "boolean"]});
  U.method("TAESAbstract", "MACSetNonce", async function MACSetNonce(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "aassociated": $.copyArg(p1), "aassociatedlen": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["akey", "aassociated", "aassociatedlen"]);
  L0["result"] = false;
  return L0.result;
}, {"params": ["aKey", "aAssociated", "aAssociatedLen"], "kind": "function", "ptypes": ["THash256", "pointer", "integer"]});
  U.method("TAESAbstract", "MACGetLast", async function MACGetLast(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acrc": $.asRef(p0), result: false};
  L0["result"] = false;
  return L0.result;
}, {"params": ["aCRC"], "kind": "function", "ptypes": ["THash256"]});
  U.method("TAESAbstract", "MACEquals", async function MACEquals(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acrc": $.copyArg(p0), result: false, "mac": null};
  await $.fixArgs(L0, ["acrc"]);
  L0["result"] = (await $.and_((await $.call(C, "MACGetLast", [$.ref(async () => L0["mac"], async ($t667) => { L0["mac"] = $t667; })])), async () => (await $.call(C, "IsEqual", [L0["mac"], L0["acrc"]]))));
  return L0.result;
}, {"params": ["aCRC"], "kind": "function", "ptypes": ["THash256"]});
  U.method("TAESAbstract", "MACCheckError", async function MACCheckError(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aencrypted": $.copyArg(p0), "count": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["aencrypted", "count"]);
  L0["result"] = false;
  return L0.result;
}, {"params": ["aEncrypted", "Count"], "kind": "function", "ptypes": ["pointer", "cardinal"]});
  U.method("TAESAbstract", "MACAndCrypt", async function MACAndCrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "encrypt": $.copyArg(p1), result: null, "rec": $.rec("tcryptdata"), "len": 0, "pcd": null, "p": null};
  await $.fixArgs(L0, ["data", "encrypt"]);
  L0["version"] = 1;
  L0["crcsiz"] = $.mul((await $.call(C, "sizeof", [(await $.v(C, "THash256"))])), 2);
  L0["siz"] = $.add(L0["crcsiz"], (await $.call(C, "sizeof", [(await $.v(C, "cardinal"))])));
  L0["result"] = "";
  try {
    if ($.truthy(L0["encrypt"])) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TAESPRNG")), "Main")), "FillRandom", [$.ref(async () => (await $.mv(L0["rec"], "nonce")), async ($t668) => { await $.mset(L0["rec"], "nonce", $t668); })])));
      if ($.truthy($.not((await $.call(C, "MACSetNonce", [(await $.mv(L0["rec"], "nonce"))]))))) {
        return L0.result;
      }
      await $.mset(L0["rec"], "Data", (await $.call(C, "EncryptPKCS7", [L0["data"], true])));
      if ($.truthy($.not((await $.call(C, "MACGetLast", [$.ref(async () => (await $.mv(L0["rec"], "mac")), async ($t669) => { await $.mset(L0["rec"], "mac", $t669); })]))))) {
        return L0.result;
      }
      await $.mset(L0["rec"], "crc", (await $.call(C, "crc32c", [L0["version"], (await $.mref(L0["rec"], "nonce")), L0["crcsiz"]])));
      L0["result"] = (await $.call(C, "RecordSave", [L0["rec"], (await $.call(C, "TypeInfo", [(await $.v(C, "TCryptData"))]))]));
    } else {
      if ($.truthy((await $.or_(($.le((await $.call(C, "length", [L0["data"]])), L0["siz"])), async () => ($.ne((await $.mv(L0["pcd"], "crc")), (await $.call(C, "crc32c", [L0["version"], (await $.call(C, "pointer", [L0["pcd"]])), L0["crcsiz"]])))))))) {
        return L0.result;
      }
      L0["p"] = (await $.mref(L0["pcd"], "data"));
      L0["len"] = (await $.call(C, "FromVarUInt32", [(await $.call(C, "PByte", [L0["p"]]))]));
      if ($.truthy($.ne($.sub((await $.call(C, "length", [L0["data"]])), L0["len"]), $.sub(L0["p"], (await $.call(C, "pointer", [L0["data"]])))))) {
        return L0.result;
      }
      if ($.truthy((await $.call(C, "MACSetNonce", [(await $.mv(L0["pcd"], "nonce"))])))) {
        L0["result"] = (await $.call(C, "DecryptPKCS7Buffer", [L0["p"], L0["len"], true, false]));
      }
      if ($.truthy($.ne(L0["result"], ""))) {
        if ($.truthy($.not((await $.call(C, "MACEquals", [(await $.mv(L0["pcd"], "mac"))]))))) {
          await $.stmt((await $.call(C, "FillZero", [L0["result"]])));
          L0["result"] = "";
        }
      }
    }
  } finally {
    await $.stmt((await $.call(C, "FillZero", [(await $.mv(L0["rec"], "data"))])));
  }
  return L0.result;
}, {"params": ["Data", "Encrypt"], "kind": "function", "ptypes": ["RawByteString", "boolean"]});
  U.method("TAESAbstract", "MACEncrypt", async function MACEncrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "key": $.copyArg(p1), "encrypt": $.copyArg(p2), result: null, "aes": null};
  await $.fixArgs(L0, ["data", "key", "encrypt"]);
  L0["aes"] = (await $.call(C, "Create", [L0["key"]]));
  try {
    L0["result"] = (await $.mcall(L0["aes"], "MACAndCrypt", [L0["data"], L0["encrypt"]]));
  } finally {
    await $.mcall(L0["aes"], "Free", []);
  }
  return L0.result;
}, {"params": ["Data", "Key", "Encrypt"], "kind": "function", "ptypes": ["RawByteString", "THash256", "boolean"]});
  U.method("TAESAbstract", "MACEncrypt", async function MACEncrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "key": $.copyArg(p1), "encrypt": $.copyArg(p2), result: null, "aes": null};
  await $.fixArgs(L0, ["data", "key", "encrypt"]);
  L0["aes"] = (await $.call(C, "Create", [L0["key"]]));
  try {
    L0["result"] = (await $.mcall(L0["aes"], "MACAndCrypt", [L0["data"], L0["encrypt"]]));
  } finally {
    await $.mcall(L0["aes"], "Free", []);
  }
  return L0.result;
}, {"params": ["Data", "Key", "Encrypt"], "kind": "function", "ptypes": ["RawByteString", "THash128", "boolean"]});
  U.method("TAESAbstract", "SimpleEncrypt", async function SimpleEncrypt(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "key": $.copyArg(p1), "encrypt": $.copyArg(p2), "ivatbeginning": $.copyArg(p3), "raiseesyncryptoonerror": $.copyArg(p4), result: null, "instance": null};
  await $.fixArgs(L0, ["input", "key", "encrypt", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["instance"] = (await $.call(C, "CreateFromSha256", [L0["key"]]));
  try {
    if ($.truthy(L0["encrypt"])) {
      L0["result"] = (await $.mcall(L0["instance"], "EncryptPKCS7", [L0["input"], L0["ivatbeginning"]]));
    } else {
      L0["result"] = (await $.mcall(L0["instance"], "DecryptPKCS7", [L0["input"], L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]));
    }
  } finally {
    await $.mcall(L0["instance"], "Free", []);
  }
  return L0.result;
}, {"params": ["Input", "Key", "Encrypt", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["RawByteString", "RawByteString", "boolean", "boolean", "boolean"]});
  U.method("TAESAbstract", "SimpleEncrypt", async function SimpleEncrypt(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"input": $.copyArg(p0), "key": $.copyArg(p1), "keysize": $.copyArg(p2), "encrypt": $.copyArg(p3), "ivatbeginning": $.copyArg(p4), "raiseesyncryptoonerror": $.copyArg(p5), result: null, "instance": null};
  await $.fixArgs(L0, ["input", "key", "keysize", "encrypt", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["instance"] = (await $.call(C, "Create", [L0["key"], L0["keysize"]]));
  try {
    if ($.truthy(L0["encrypt"])) {
      L0["result"] = (await $.mcall(L0["instance"], "EncryptPKCS7", [L0["input"], L0["ivatbeginning"]]));
    } else {
      L0["result"] = (await $.mcall(L0["instance"], "DecryptPKCS7", [L0["input"], L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]));
    }
  } finally {
    await $.mcall(L0["instance"], "Free", []);
  }
  return L0.result;
}, {"params": ["Input", "Key", "KeySize", "Encrypt", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["RawByteString", null, "integer", "boolean", "boolean", "boolean"]});
  U.method("TAESAbstract", "SimpleEncryptFile", async function SimpleEncryptFile(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"inputfile": $.copyArg(p0), "outputfile": $.copyArg(p1), "key": $.copyArg(p2), "encrypt": $.copyArg(p3), "ivatbeginning": $.copyArg(p4), "raiseesyncryptoonerror": $.copyArg(p5), result: false, "src": null, "dst": null};
  await $.fixArgs(L0, ["inputfile", "outputfile", "key", "encrypt", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["result"] = false;
  L0["src"] = (await $.call(C, "StringFromFile", [L0["inputfile"]]));
  if ($.truthy($.ne(L0["src"], ""))) {
    L0["dst"] = (await $.call(C, "SimpleEncrypt", [L0["src"], L0["key"], L0["encrypt"], L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]));
    if ($.truthy($.ne(L0["dst"], ""))) {
      L0["result"] = (await $.call(C, "FileFromString", [L0["dst"], L0["outputfile"]]));
    }
  }
  return L0.result;
}, {"params": ["InputFile", "OutputFile", "Key", "Encrypt", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["TFileName", "TFileName", "RawByteString", "boolean", "boolean", "boolean"]});
  U.method("TAESAbstract", "SimpleEncryptFile", async function SimpleEncryptFile(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"inputfile": $.copyArg(p0), "outputfile": $.copyArg(p1), "key": $.copyArg(p2), "keysize": $.copyArg(p3), "encrypt": $.copyArg(p4), "ivatbeginning": $.copyArg(p5), "raiseesyncryptoonerror": $.copyArg(p6), result: false, "src": null, "dst": null};
  await $.fixArgs(L0, ["inputfile", "outputfile", "key", "keysize", "encrypt", "ivatbeginning", "raiseesyncryptoonerror"]);
  L0["result"] = false;
  L0["src"] = (await $.call(C, "StringFromFile", [L0["inputfile"]]));
  if ($.truthy($.ne(L0["src"], ""))) {
    L0["dst"] = (await $.call(C, "SimpleEncrypt", [L0["src"], L0["key"], L0["keysize"], L0["encrypt"], L0["ivatbeginning"], L0["raiseesyncryptoonerror"]]));
    if ($.truthy($.ne(L0["dst"], ""))) {
      L0["result"] = (await $.call(C, "FileFromString", [L0["dst"], L0["outputfile"]]));
    }
  }
  return L0.result;
}, {"params": ["InputFile", "Outputfile", "Key", "KeySize", "Encrypt", "IVAtBeginning", "RaiseESynCryptoOnError"], "kind": "function", "ptypes": ["TFileName", "TFileName", null, "integer", "boolean", "boolean", "boolean"]});
  U.method("TAESAbstract", "Clone", async function Clone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mcall((await $.call(C, "TAESAbstractClass", [(await $.v(C, "ClassType"))])), "Create", [(await $.v(C, "fKey")), (await $.v(C, "fKeySize"))]));
  await $.mset(L0["result"], "IVHistoryDepth", (await $.v(C, "IVHistoryDepth")));
  await $.mset(L0["result"], "IVReplayAttackCheck", (await $.v(C, "IVReplayAttackCheck")));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESAbstract", "CloneEncryptDecrypt", async function CloneEncryptDecrypt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "Clone"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESAbstractSyn", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAESAbstractSyn", "Destroy", null, arguments);
  await $.mcall((await $.v(C, "AES")), "Done", []);
  await $.stmt((await $.call(C, "FillZero", [(await $.v(C, "fCV"))])));
  await $.stmt((await $.call(C, "FillZero", [(await $.v(C, "fIV"))])));
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TAESAbstractSyn", "Clone", async function Clone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy(($.ne((await $.mv((await $.v(C, "fIVHistoryDec")), "Count")), 0)))) {
    L0["result"] = (await $.inherited(Self, "TAESAbstractSyn", "Clone", null, arguments));
  } else {
    L0["result"] = (await $.v(C, "NewInstance"));
    await $.stmt((await $.call(C, "MoveFast", [(await $.call(C, "pointer", [Self])), (await $.call(C, "pointer", [L0["result"]])), (await $.v(C, "InstanceSize"))])));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESAbstractSyn", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.set(C, "fIn", L0["bufin"]);
  await $.set(C, "fOut", L0["bufout"]);
  await $.set(C, "fCV", (await $.v(C, "fIV")));
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESAbstractSyn", "DecryptInit", async function DecryptInit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.mcall((await $.v(C, "AES")), "DecryptInit", [(await $.v(C, "fKey")), (await $.v(C, "fKeySize"))])))) {
    await $.set(C, "fAESInit", (await $.v(C, "initDecrypt")));
  } else {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["%.DecryptInit", [Self]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESAbstractSyn", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.set(C, "fIn", L0["bufin"]);
  await $.set(C, "fOut", L0["bufout"]);
  await $.set(C, "fCV", (await $.v(C, "fIV")));
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESAbstractSyn", "EncryptInit", async function EncryptInit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.mcall((await $.v(C, "AES")), "EncryptInit", [(await $.v(C, "fKey")), (await $.v(C, "fKeySize"))])))) {
    await $.set(C, "fAESInit", (await $.v(C, "initEncrypt")));
  } else {
    throw $.raise((await $.mcall((await $.v(C, "ESynCrypto")), "CreateUTF8", ["%.EncryptInit", [Self]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESAbstractSyn", "TrailerBytes", async function TrailerBytes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"count": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["count"]);
  if ($.truthy($.ne((await $.v(C, "fAESInit")), (await $.v(C, "initEncrypt"))))) {
    await $.stmt($.call(C, "EncryptInit", []));
  }
  await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fCV")), (await $.v(C, "fCV"))])));
  await $.stmt((await $.call(C, "XorMemory", [(await $.call(C, "pointer", [(await $.v(C, "fOut"))])), (await $.call(C, "pointer", [(await $.v(C, "fIn"))])), (await $.ref_(C, "fCV")), L0["count"]])));
  return L0.result;
}, {"params": ["count"], "kind": "procedure", "ptypes": ["cardinal"]});
  U.method("TAESECB", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESECB", "Decrypt", null, arguments);
  if ($.truthy($.ne((await $.v(C, "fAESInit")), (await $.v(C, "initDecrypt"))))) {
    await $.stmt($.call(C, "DecryptInit", []));
  }
  { const $t670 = $.shr(L0["count"], 4);
    L0["i"] = 1;
    let $t671 = true;
    for (;;) {
      if (!$t671) { L0["i"] = $.succ(L0["i"], 1); }
      $t671 = false;
      if (!($.ord(L0["i"]) <= $.ord($t670))) break;
      await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fIn")), (await $.v(C, "fOut"))])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fIn")), async ($t672) => { await $.set(C, "fIn", $t672); })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fOut")), async ($t673) => { await $.set(C, "fOut", $t673); })])));
      await $.tick();
    }
  }
  L0["count"] = (await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))));
  if ($.truthy($.ne(L0["count"], 0))) {
    await $.stmt((await $.call(C, "TrailerBytes", [L0["count"]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESECB", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESECB", "Encrypt", null, arguments);
  if ($.truthy($.ne((await $.v(C, "fAESInit")), (await $.v(C, "initEncrypt"))))) {
    await $.stmt($.call(C, "EncryptInit", []));
  }
  { const $t674 = $.shr(L0["count"], 4);
    L0["i"] = 1;
    let $t675 = true;
    for (;;) {
      if (!$t675) { L0["i"] = $.succ(L0["i"], 1); }
      $t675 = false;
      if (!($.ord(L0["i"]) <= $.ord($t674))) break;
      await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fIn")), (await $.v(C, "fOut"))])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fIn")), async ($t676) => { await $.set(C, "fIn", $t676); })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fOut")), async ($t677) => { await $.set(C, "fOut", $t677); })])));
      await $.tick();
    }
  }
  L0["count"] = (await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))));
  if ($.truthy($.ne(L0["count"], 0))) {
    await $.stmt((await $.call(C, "TrailerBytes", [L0["count"]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESCBC", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0, "tmp": null};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESCBC", "Decrypt", null, arguments);
  if ($.truthy($.ge(L0["count"], (await $.call(C, "sizeof", [(await $.v(C, "TAESBlock"))]))))) {
    if ($.truthy($.ne((await $.v(C, "fAESInit")), (await $.v(C, "initDecrypt"))))) {
      await $.stmt($.call(C, "DecryptInit", []));
    }
    { const $t678 = $.shr(L0["count"], 4);
      L0["i"] = 1;
      let $t679 = true;
      for (;;) {
        if (!$t679) { L0["i"] = $.succ(L0["i"], 1); }
        $t679 = false;
        if (!($.ord(L0["i"]) <= $.ord($t678))) break;
        L0["tmp"] = (await $.v(C, "fIn"));
        await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fIn")), (await $.v(C, "fOut"))])));
        await $.stmt((await $.call(C, "XorBlock16", [(await $.call(C, "pointer", [(await $.v(C, "fOut"))])), (await $.call(C, "pointer", [(await $.ref_(C, "fCV"))]))])));
        await $.set(C, "fCV", L0["tmp"]);
        await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fIn")), async ($t680) => { await $.set(C, "fIn", $t680); })])));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fOut")), async ($t681) => { await $.set(C, "fOut", $t681); })])));
        await $.tick();
      }
    }
  }
  L0["count"] = (await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))));
  if ($.truthy($.ne(L0["count"], 0))) {
    await $.stmt((await $.call(C, "TrailerBytes", [L0["count"]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESCBC", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESCBC", "Encrypt", null, arguments);
  if ($.truthy($.ne((await $.v(C, "fAESInit")), (await $.v(C, "initEncrypt"))))) {
    await $.stmt($.call(C, "EncryptInit", []));
  }
  { const $t682 = $.shr(L0["count"], 4);
    L0["i"] = 1;
    let $t683 = true;
    for (;;) {
      if (!$t683) { L0["i"] = $.succ(L0["i"], 1); }
      $t683 = false;
      if (!($.ord(L0["i"]) <= $.ord($t682))) break;
      await $.stmt((await $.call(C, "XorBlock16", [(await $.call(C, "pointer", [(await $.v(C, "fIn"))])), (await $.call(C, "pointer", [(await $.v(C, "fOut"))])), (await $.call(C, "pointer", [(await $.ref_(C, "fCV"))]))])));
      await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fOut")), (await $.v(C, "fOut"))])));
      await $.set(C, "fCV", (await $.v(C, "fOut")));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fIn")), async ($t684) => { await $.set(C, "fIn", $t684); })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fOut")), async ($t685) => { await $.set(C, "fOut", $t685); })])));
      await $.tick();
    }
  }
  L0["count"] = (await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))));
  if ($.truthy($.ne(L0["count"], 0))) {
    await $.stmt((await $.call(C, "TrailerBytes", [L0["count"]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESAbstractEncryptOnly", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "akeysize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["akey", "akeysize"]);
  await $.inherited(Self, "TAESAbstractEncryptOnly", "Create", [L0["akey"], L0["akeysize"]], arguments);
  await $.stmt($.call(C, "EncryptInit", []));
  return L0.result;
}, {"params": ["aKey", "aKeySize"], "kind": "constructor", "ptypes": [null, "cardinal"]});
  U.method("TAESAbstractEncryptOnly", "CloneEncryptDecrypt", async function CloneEncryptDecrypt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = Self;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESCFB", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0, "tmp": null};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESCFB", "Decrypt", null, arguments);
  { const $t686 = $.shr(L0["count"], 4);
    L0["i"] = 1;
    let $t687 = true;
    for (;;) {
      if (!$t687) { L0["i"] = $.succ(L0["i"], 1); }
      $t687 = false;
      if (!($.ord(L0["i"]) <= $.ord($t686))) break;
      L0["tmp"] = (await $.v(C, "fIn"));
      await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fCV")), (await $.v(C, "fCV"))])));
      await $.stmt((await $.call(C, "XorBlock16", [(await $.call(C, "pointer", [(await $.v(C, "fIn"))])), (await $.call(C, "pointer", [(await $.v(C, "fOut"))])), (await $.call(C, "pointer", [(await $.ref_(C, "fCV"))]))])));
      await $.set(C, "fCV", L0["tmp"]);
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fIn")), async ($t688) => { await $.set(C, "fIn", $t688); })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fOut")), async ($t689) => { await $.set(C, "fOut", $t689); })])));
      await $.tick();
    }
  }
  L0["count"] = (await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))));
  if ($.truthy($.ne(L0["count"], 0))) {
    await $.stmt((await $.call(C, "TrailerBytes", [L0["count"]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESCFB", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESCFB", "Encrypt", null, arguments);
  { const $t690 = $.shr(L0["count"], 4);
    L0["i"] = 1;
    let $t691 = true;
    for (;;) {
      if (!$t691) { L0["i"] = $.succ(L0["i"], 1); }
      $t691 = false;
      if (!($.ord(L0["i"]) <= $.ord($t690))) break;
      await $.stmt((await $.mcall((await $.call(C, "TAESContext", [(await $.mv((await $.v(C, "AES")), "Context"))])), "DoBlock", [(await $.mv((await $.v(C, "AES")), "Context")), (await $.v(C, "fCV")), (await $.v(C, "fCV"))])));
      await $.stmt((await $.call(C, "XorBlock16", [(await $.call(C, "pointer", [(await $.v(C, "fIn"))])), (await $.call(C, "pointer", [(await $.v(C, "fOut"))])), (await $.call(C, "pointer", [(await $.ref_(C, "fCV"))]))])));
      await $.set(C, "fCV", (await $.v(C, "fOut")));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fIn")), async ($t692) => { await $.set(C, "fIn", $t692); })])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fOut")), async ($t693) => { await $.set(C, "fOut", $t693); })])));
      await $.tick();
    }
  }
  L0["count"] = (await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod"))));
  if ($.truthy($.ne(L0["count"], 0))) {
    await $.stmt((await $.call(C, "TrailerBytes", [L0["count"]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESAbstractAEAD", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAESAbstractAEAD", "Destroy", null, arguments);
  await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "fMacKey")), (await $.call(C, "sizeof", [(await $.v(C, "fMacKey"))])), 0])));
  await $.stmt((await $.call(C, "FillCharFast", [(await $.v(C, "fMac")), (await $.call(C, "sizeof", [(await $.v(C, "fMac"))])), 0])));
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TAESAbstractAEAD", "MACSetNonce", async function MACSetNonce(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "aassociated": $.copyArg(p1), "aassociatedlen": $.copyArg(p2), result: false, "rec": null};
  await $.fixArgs(L0, ["akey", "aassociated", "aassociatedlen"]);
  await $.mset((await $.v(C, "fMACKey")), "plain", (await $.mv(L0["rec"], "Lo")));
  await $.stmt((await $.call(C, "XorBlock16", [(await $.mref((await $.v(C, "fMACKey")), "plain")), (await $.mref(L0["rec"], "Hi"))])));
  if ($.truthy((await $.and_(($.ne(L0["aassociated"], null)), async () => ($.gt(L0["aassociatedlen"], 0)))))) {
    await $.stmt((await $.call(C, "crc128c", [L0["aassociated"], L0["aassociatedlen"], (await $.mv((await $.v(C, "fMACKey")), "encrypted"))])));
  } else {
    await $.stmt((await $.call(C, "FillcharFast", [(await $.mv((await $.v(C, "fMACKey")), "encrypted")), (await $.call(C, "sizeof", [(await $.v(C, "THash128"))])), 255])));
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["aKey", "aAssociated", "aAssociatedLen"], "kind": "function", "ptypes": ["THash256", "pointer", "integer"]});
  U.method("TAESAbstractAEAD", "MACGetLast", async function MACGetLast(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acrc": $.asRef(p0), result: false, "rec": null};
  await $.stmt((await $.mcall((await $.v(C, "AES")), "Encrypt", [$.ref(async () => (await $.mv((await $.v(C, "fMAC")), "plain")), async ($t694) => { await $.mset((await $.v(C, "fMAC")), "plain", $t694); }), $.ref(async () => (await $.mv(L0["rec"], "Lo")), async ($t695) => { await $.mset(L0["rec"], "Lo", $t695); })])));
  await $.mset(L0["rec"], "Hi", (await $.mv((await $.v(C, "fMAC")), "encrypted")));
  L0["result"] = true;
  return L0.result;
}, {"params": ["aCRC"], "kind": "function", "ptypes": ["THash256"]});
  U.method("TAESAbstractAEAD", "MACCheckError", async function MACCheckError(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aencrypted": $.copyArg(p0), "count": $.copyArg(p1), result: false, "crc": null};
  await $.fixArgs(L0, ["aencrypted", "count"]);
  L0["result"] = false;
  if ($.truthy((await $.or_(($.lt(L0["count"], 32)), async () => ($.ne((await $.and_(L0["count"], async () => (await $.v(C, "AESBlockMod")))), 0)))))) {
    return L0.result;
  }
  L0["crc"] = (await $.mv((await $.v(C, "fMACKey")), "encrypted"));
  await $.stmt((await $.call(C, "crcblocks", [L0["crc"], L0["aencrypted"], $.sub($.shr(L0["count"], 4), 2)])));
  L0["result"] = (await $.call(C, "IsEqual", [L0["crc"], (await $.call(C, "PHash128", [(await $.idx((await $.call(C, "PByteArray", [L0["aencrypted"]])), [$.sub(L0["count"], (await $.call(C, "sizeof", [L0["crc"]])))]))]))]));
  return L0.result;
}, {"params": ["aEncrypted", "Count"], "kind": "function", "ptypes": ["pointer", "cardinal"]});
  U.method("TAESCFBCRC", "Decrypt", async function Decrypt() { return $.notPorted("TAESCFBCRC.Decrypt", "cannot assign to call"); }, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"], "error": "cannot assign to call", "src": "procedure TAESCFBCRC.Decrypt(BufIn, BufOut: pointer; Count: cardinal);\nvar i: integer;\n    tmp: TAESBlock;\nbegin\n  if Count=0 then\n    exit;\n  fMAC := fMACKey; \n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  begin\n    inherited; \n    for i := 1 to Count shr 4 do begin\n      tmp := fIn^;\n      crcblock(@fMAC.encrypted,pointer(fIn)); \n      TAESContext(AES.Context).DoBlock(AES.Context,fCV,fCV);\n      XorBlock16(pointer(fIn),pointer(fOut),pointer(@fCV));\n      fCV := tmp;\n      crcblock(@fMAC.plain,pointer(fOut));\n      inc(fIn);\n      inc(fOut);\n    end;\n    Count := Count and AESBlockMod;\n    if Count<>0 then begin\n      TrailerBytes(Count);\n      with fMAC do \n        PCardinal(@plain)^ := crc32c(PCardinal(@plain)^,pointer(fOut),Count);\n    end;\n  end;\nend;"});
  U.method("TAESCFBCRC", "Encrypt", async function Encrypt() { return $.notPorted("TAESCFBCRC.Encrypt", "cannot assign to call"); }, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"], "error": "cannot assign to call", "src": "procedure TAESCFBCRC.Encrypt(BufIn, BufOut: pointer; Count: cardinal);\nvar i: integer;\nbegin\n  if Count=0 then\n    exit;\n  fMAC := fMACKey; \n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  begin\n    inherited; \n    for i := 1 to Count shr 4 do begin\n      TAESContext(AES.Context).DoBlock(AES.Context,fCV,fCV);\n      crcblock(@fMAC.plain,pointer(fIn)); \n      XorBlock16(pointer(fIn),pointer(fOut),pointer(@fCV));\n      fCV := fOut^;\n      crcblock(@fMAC.encrypted,pointer(fOut));\n      inc(fIn);\n      inc(fOut);\n    end;\n    Count := Count and AESBlockMod;\n    if Count<>0 then begin\n      with fMAC do \n        PCardinal(@plain)^ := crc32c(PCardinal(@plain)^,pointer(fIn),Count);\n      TrailerBytes(Count);\n    end;\n  end;\nend;"});
  U.method("TAESOFBCRC", "Decrypt", async function Decrypt() { return $.notPorted("TAESOFBCRC.Decrypt", "cannot assign to call"); }, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"], "error": "cannot assign to call", "src": "procedure TAESOFBCRC.Decrypt(BufIn, BufOut: pointer; Count: cardinal);\nvar i: integer;\nbegin\n  if Count=0 then\n    exit;\n  fMAC := fMACKey; \n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  begin\n    inherited Encrypt(BufIn,BufOut,Count); \n    for i := 1 to Count shr 4 do begin\n      TAESContext(AES.Context).DoBlock(AES.Context,fCV,fCV);\n      crcblock(@fMAC.encrypted,pointer(fIn)); \n      XorBlock16(pointer(fIn),pointer(fOut),pointer(@fCV));\n      crcblock(@fMAC.plain,pointer(fOut));\n      inc(fIn);\n      inc(fOut);\n    end;\n    Count := Count and AESBlockMod;\n    if Count<>0 then begin\n      TrailerBytes(Count);\n      with fMAC do \n        PCardinal(@plain)^ := crc32c(PCardinal(@plain)^,pointer(fOut),Count);\n    end;\n  end;\nend;"});
  U.method("TAESOFBCRC", "Encrypt", async function Encrypt() { return $.notPorted("TAESOFBCRC.Encrypt", "cannot assign to call"); }, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"], "error": "cannot assign to call", "src": "procedure TAESOFBCRC.Encrypt(BufIn, BufOut: pointer; Count: cardinal);\nvar i: integer;\nbegin\n  if Count=0 then\n    exit;\n  fMAC := fMACKey; \n   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  begin\n    inherited Encrypt(BufIn,BufOut,Count); \n    for i := 1 to Count shr 4 do begin\n      TAESContext(AES.Context).DoBlock(AES.Context,fCV,fCV);\n      crcblock(@fMAC.plain,pointer(fIn)); \n      XorBlock16(pointer(fIn),pointer(fOut),pointer(@fCV));\n      crcblock(@fMAC.encrypted,pointer(fOut));\n      inc(fIn);\n      inc(fOut);\n    end;\n    Count := Count and AESBlockMod;\n    if Count<>0 then begin\n      with fMAC do \n        PCardinal(@plain)^ := crc32c(PCardinal(@plain)^,pointer(fIn),Count);\n      TrailerBytes(Count);\n    end;\n  end;\nend;"});
  U.method("TAESOFB", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufIn", { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }, false)), async ($t716) => { await $.wset([$t700, $t705, $t710, $t715], "BufIn", $t716, { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufOut", { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }, false)), async ($t717) => { await $.wset([$t700, $t705, $t710, $t715], "BufOut", $t717, { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESOFB", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESOFB", "Encrypt", null, arguments);
  { const $t718 = $.shr((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), 4);
    await $.wset([$t700, $t705, $t710, $t715], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t719 = true;
    for (;;) {
      if (!$t719) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t719 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t718))) break;
      await $.stmt((await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TAESContext", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "AES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "AES", C, false)), "Context")), (await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false))])));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorBlock16", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fIn", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fOut", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fCV", C, true))], C))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fIn", C, false)), async ($t720) => { await $.wset([$t700, $t705, $t710, $t715], "fIn", $t720, C); })], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fOut", C, false)), async ($t721) => { await $.wset([$t700, $t705, $t710, $t715], "fOut", $t721, C); })], C)));
      await $.tick();
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "Count", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), async () => (await $.wv([$t700, $t705, $t710, $t715], "AESBlockMod", C, false)))), { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true });
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), 0))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "TrailerBytes", [(await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESCTR", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "akeysize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["akey", "akeysize"]);
  await $.inherited(Self, "TAESCTR", "Create", [(await $.wv([$t700, $t705, $t710, $t715], "aKey", { get: async () => L0["akey"], set: async (v) => { L0["akey"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aKeySize", { get: async () => L0["akeysize"], set: async (v) => { L0["akeysize"] = v; }, local: true }, false))], arguments);
  await $.wset([$t700, $t705, $t710, $t715], "fCTROffset", 7, C);
  return L0.result;
}, {"params": ["aKey", "aKeySize"], "kind": "constructor", "ptypes": [null, "cardinal"]});
  U.method("TAESCTR", "ComposeIV", async function ComposeIV(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"nonce": $.copyArg(p0), "counter": $.copyArg(p1), "noncelen": $.copyArg(p2), "counterlen": $.copyArg(p3), "lsbcounter": $.copyArg(p4), result: false};
  await $.fixArgs(L0, ["nonce", "counter", "noncelen", "counterlen", "lsbcounter"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_(($.eq($.add((await $.wv([$t700, $t705, $t710, $t715], "NonceLen", { get: async () => L0["noncelen"], set: async (v) => { L0["noncelen"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false))), 16)), async () => ($.gt((await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false)), 0)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
    if ($.truthy((await $.wv([$t700, $t705, $t710, $t715], "LSBCounter", { get: async () => L0["lsbcounter"], set: async (v) => { L0["lsbcounter"] = v; }, local: true }, false)))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "MoveFast", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Nonce", { get: async () => L0["nonce"], set: async (v) => { L0["nonce"] = v; }, local: true }, false)), [0])), (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fIV", C, false)), [0])), (await $.wv([$t700, $t705, $t710, $t715], "NonceLen", { get: async () => L0["noncelen"], set: async (v) => { L0["noncelen"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "MoveFast", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), [0])), (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fIV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "NonceLen", { get: async () => L0["noncelen"], set: async (v) => { L0["noncelen"] = v; }, local: true }, false))])), (await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false))], C)));
      await $.wset([$t700, $t705, $t710, $t715], "fCTROffset", 15, C);
      await $.wset([$t700, $t705, $t710, $t715], "fCTROffsetMin", $.sub(16, (await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false))), C);
    } else {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "MoveFast", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false)), [0])), (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fIV", C, false)), [0])), (await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "MoveFast", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Nonce", { get: async () => L0["nonce"], set: async (v) => { L0["nonce"] = v; }, local: true }, false)), [0])), (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fIV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false))])), (await $.wv([$t700, $t705, $t710, $t715], "NonceLen", { get: async () => L0["noncelen"], set: async (v) => { L0["noncelen"] = v; }, local: true }, false))], C)));
      await $.wset([$t700, $t705, $t710, $t715], "fCTROffset", $.sub((await $.wv([$t700, $t705, $t710, $t715], "CounterLen", { get: async () => L0["counterlen"], set: async (v) => { L0["counterlen"] = v; }, local: true }, false)), 1), C);
      await $.wset([$t700, $t705, $t710, $t715], "fCTROffsetMin", 0, C);
    }
  }
  return L0.result;
}, {"params": ["Nonce", "Counter", "NonceLen", "CounterLen", "LSBCounter"], "kind": "function", "ptypes": ["PAESBlock", "PAESBlock", "integer", "integer", "boolean"]});
  U.method("TAESCTR", "ComposeIV", async function ComposeIV(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"nonce": $.copyArg(p0), "counter": $.copyArg(p1), "lsbcounter": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["nonce", "counter", "lsbcounter"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "ComposeIV", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Nonce", { get: async () => L0["nonce"], set: async (v) => { L0["nonce"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "Nonce", { get: async () => L0["nonce"], set: async (v) => { L0["nonce"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "Counter", { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "LSBCounter", { get: async () => L0["lsbcounter"], set: async (v) => { L0["lsbcounter"] = v; }, local: true }, false))], { get: async () => L0["composeiv"], set: async (v) => { L0["composeiv"] = v; }, local: true })), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["Nonce", "Counter", "LSBCounter"], "kind": "function", "ptypes": ["TByteDynArray", "TByteDynArray", "boolean"]});
  U.method("TAESCTR", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined, "i": 0, "offs": 0, "tmp": null};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.inherited(Self, "TAESCTR", "Encrypt", null, arguments);
  { const $t722 = $.shr((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), 4);
    await $.wset([$t700, $t705, $t710, $t715], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t723 = true;
    for (;;) {
      if (!$t723) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t723 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t722))) break;
      await $.stmt((await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TAESContext", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "AES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "AES", C, false)), "Context")), (await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))])));
      await $.wset([$t700, $t705, $t710, $t715], "offs", (await $.wv([$t700, $t705, $t710, $t715], "fCTROffset", C, false)), { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true });
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false))])), async ($t724) => { { const $t725 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false))], $t724); if ($t725 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "fCV", $t725, C); } } })], C)));
      if ($.truthy($.eq((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false))])), 0))) {
        do {
          await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "dec", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false)), async ($t726) => { await $.wset([$t700, $t705, $t710, $t715], "offs", $t726, { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }); })], C)));
          await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false))])), async ($t727) => { { const $t728 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false))], $t727); if ($t728 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "fCV", $t728, C); } } })], C)));
          if ($.truthy((await $.or_(($.ne((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false))])), 0)), async () => ($.eq((await $.wv([$t700, $t705, $t710, $t715], "offs", { get: async () => L0["offs"], set: async (v) => { L0["offs"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "fCTROffsetMin", C, false)))))))) {
            break;
          }
          await $.tick();
        } while (!$.truthy((await $.wv([$t700, $t705, $t710, $t715], "false", C, false))));
      }
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorBlock16", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fIn", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fOut", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, true))], C))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fIn", C, false)), async ($t729) => { await $.wset([$t700, $t705, $t710, $t715], "fIn", $t729, C); })], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fOut", C, false)), async ($t730) => { await $.wset([$t700, $t705, $t710, $t715], "fOut", $t730, C); })], C)));
      await $.tick();
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "Count", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), async () => (await $.wv([$t700, $t705, $t710, $t715], "AESBlockMod", C, false)))), { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true });
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), 0))) {
    await $.stmt((await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TAESContext", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "AES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "AES", C, false)), "Context")), (await $.wv([$t700, $t705, $t710, $t715], "fCV", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))])));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorMemory", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fOut", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fIn", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESCTR", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufIn", { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }, false)), async ($t731) => { await $.wset([$t700, $t705, $t710, $t715], "BufIn", $t731, { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufOut", { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }, false)), async ($t732) => { await $.wset([$t700, $t705, $t710, $t715], "BufOut", $t732, { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESGCM", "Create", async function Create(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "akeysize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["akey", "akeysize"]);
  await $.inherited(Self, "TAESGCM", "Create", [(await $.wv([$t700, $t705, $t710, $t715], "aKey", { get: async () => L0["akey"], set: async (v) => { L0["akey"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aKeySize", { get: async () => L0["akeysize"], set: async (v) => { L0["akeysize"] = v; }, local: true }, false))], arguments);
  if ($.truthy($.not((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "aKey", { get: async () => L0["akey"], set: async (v) => { L0["akey"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aKeySize", { get: async () => L0["akeysize"], set: async (v) => { L0["akeysize"] = v; }, local: true }, false))]))))) {
    throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["%.Create(keysize=%) failed", [Self, (await $.wv([$t700, $t705, $t710, $t715], "aKeySize", { get: async () => L0["akeysize"], set: async (v) => { L0["akeysize"] = v; }, local: true }, false))]])));
  }
  return L0.result;
}, {"params": ["aKey", "aKeySize"], "kind": "constructor", "ptypes": [null, "cardinal"]});
  U.method("TAESGCM", "Clone", async function Clone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "NewInstance", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.mset((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "fKey", (await $.wv([$t700, $t705, $t710, $t715], "fKey", C, false)));
  await $.mset((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "fKeySize", (await $.wv([$t700, $t705, $t710, $t715], "fKeySize", C, false)));
  await $.mset((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "fKeySizeBytes", (await $.wv([$t700, $t705, $t710, $t715], "fKeySizeBytes", C, false)));
  await $.mset((await $.wcall([$t700, $t705, $t710, $t715], "TAESGCM", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), "fAES", (await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESGCM", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAESGCM", "Destroy", null, arguments);
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Done", []);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "fIV", C, false))], C)));
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TAESGCM", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "fContext", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ctxEncrypt", C, false))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "fContext", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ctxNone", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Reset", [(await $.wv([$t700, $t705, $t710, $t715], "fIV", C, true)), (await $.wv([$t700, $t705, $t710, $t715], "CTR_POS", C, false))])));
      await $.wset([$t700, $t705, $t710, $t715], "fContext", (await $.wv([$t700, $t705, $t710, $t715], "ctxEncrypt", C, false)), C);
    } else {
      throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["%.Encrypt after Decrypt", [Self]])));
    }
  }
  if ($.truthy($.not((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufIn", { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }, false)), async ($t733) => { await $.wset([$t700, $t705, $t710, $t715], "BufIn", $t733, { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufOut", { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }, false)), async ($t734) => { await $.wset([$t700, $t705, $t710, $t715], "BufOut", $t734, { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))]))))) {
    throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["%.Encrypt called after GCM final state", [Self]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESGCM", "Decrypt", async function Decrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.copyArg(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "bufout", "count"]);
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "fContext", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ctxDecrypt", C, false))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "fContext", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ctxNone", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Reset", [(await $.wv([$t700, $t705, $t710, $t715], "fIV", C, true)), (await $.wv([$t700, $t705, $t710, $t715], "CTR_POS", C, false))])));
      await $.wset([$t700, $t705, $t710, $t715], "fContext", (await $.wv([$t700, $t705, $t710, $t715], "ctxDecrypt", C, false)), C);
    } else {
      throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["%.Decrypt after Encrypt", [Self]])));
    }
  }
  if ($.truthy($.not((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Decrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufIn", { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }, false)), async ($t735) => { await $.wset([$t700, $t705, $t710, $t715], "BufIn", $t735, { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "BufOut", { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }, false)), async ($t736) => { await $.wset([$t700, $t705, $t710, $t715], "BufOut", $t736, { get: async () => L0["bufout"], set: async (v) => { L0["bufout"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))]))))) {
    throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["%.Decrypt called after GCM final state", [Self]])));
  }
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESGCM", "MACSetNonce", async function MACSetNonce(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "aassociated": $.copyArg(p1), "aassociatedlen": $.copyArg(p2), result: false};
  await $.fixArgs(L0, ["akey", "aassociated", "aassociatedlen"]);
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "fContext", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ctxNone", C, false))))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    return L0.result;
  }
  if ($.truthy((await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "aAssociated", { get: async () => L0["aassociated"], set: async (v) => { L0["aassociated"] = v; }, local: true }, false)), null)), async () => ($.gt((await $.wv([$t700, $t705, $t710, $t715], "aAssociatedLen", { get: async () => L0["aassociatedlen"], set: async (v) => { L0["aassociatedlen"] = v; }, local: true }, false)), 0)))))) {
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Add_AAD", [(await $.wv([$t700, $t705, $t710, $t715], "aAssociated", { get: async () => L0["aassociated"], set: async (v) => { L0["aassociated"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aAssociatedLen", { get: async () => L0["aassociatedlen"], set: async (v) => { L0["aassociatedlen"] = v; }, local: true }, false))])));
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["aKey", "aAssociated", "aAssociatedLen"], "kind": "function", "ptypes": ["THash256", "pointer", "integer"]});
  U.method("TAESGCM", "MACGetLast", async function MACGetLast(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acrc": $.asRef(p0), result: false};
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "fContext", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ctxNone", C, false))))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Final", [$.ref(async () => (await $.mv((await $.wcall([$t700, $t705, $t710, $t715], "THash256Rec", [(await $.wv([$t700, $t705, $t710, $t715], "aCRC", { get: async () => await L0["acrc"].get(), set: async (v) => { await L0["acrc"].set(v); }, local: true }, false))], C)), "Lo")), async ($t737) => { await $.mset((await $.wcall([$t700, $t705, $t710, $t715], "THash256Rec", [(await $.wv([$t700, $t705, $t710, $t715], "aCRC", { get: async () => await L0["acrc"].get(), set: async (v) => { await L0["acrc"].set(v); }, local: true }, false))], C)), "Lo", $t737); }), (await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.mv((await $.wcall([$t700, $t705, $t710, $t715], "THash256Rec", [(await $.wv([$t700, $t705, $t710, $t715], "aCRC", { get: async () => await L0["acrc"].get(), set: async (v) => { await L0["acrc"].set(v); }, local: true }, false))], C)), "Hi"))], C)));
  await $.wset([$t700, $t705, $t710, $t715], "fContext", (await $.wv([$t700, $t705, $t710, $t715], "ctxNone", C, false)), C);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["aCRC"], "kind": "function", "ptypes": ["THash256"]});
  U.method("TAESGCM", "MACCheckError", async function MACCheckError(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aencrypted": $.copyArg(p0), "count": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["aencrypted", "count"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["aEncrypted", "Count"], "kind": "function", "ptypes": ["pointer", "cardinal"]});
  U.method("TAESLocked", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAESLocked", "Destroy", null, arguments);
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Done", []);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TAESPRNG", "Create", async function Create(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pbkdf2rounds": $.copyArg(p0), "reseedafterbytes": $.copyArg(p1), "aeskeysize": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pbkdf2rounds", "reseedafterbytes", "aeskeysize"]);
  await $.inherited(Self, "TAESPRNG", "Create", null, arguments);
  if ($.truthy($.lt((await $.wv([$t700, $t705, $t710, $t715], "PBKDF2Rounds", { get: async () => L0["pbkdf2rounds"], set: async (v) => { L0["pbkdf2rounds"] = v; }, local: true }, false)), 2))) {
    await $.wset([$t700, $t705, $t710, $t715], "PBKDF2Rounds", 2, { get: async () => L0["pbkdf2rounds"], set: async (v) => { L0["pbkdf2rounds"] = v; }, local: true });
  }
  await $.wset([$t700, $t705, $t710, $t715], "fSeedPBKDF2Rounds", (await $.wv([$t700, $t705, $t710, $t715], "PBKDF2Rounds", { get: async () => L0["pbkdf2rounds"], set: async (v) => { L0["pbkdf2rounds"] = v; }, local: true }, false)), C);
  await $.wset([$t700, $t705, $t710, $t715], "fSeedAfterBytes", (await $.wv([$t700, $t705, $t710, $t715], "ReseedAfterBytes", { get: async () => L0["reseedafterbytes"], set: async (v) => { L0["reseedafterbytes"] = v; }, local: true }, false)), C);
  await $.wset([$t700, $t705, $t710, $t715], "fAESKeySize", (await $.wv([$t700, $t705, $t710, $t715], "AESKeySize", { get: async () => L0["aeskeysize"], set: async (v) => { L0["aeskeysize"] = v; }, local: true }, false)), C);
  await $.stmt($.wcall([$t700, $t705, $t710, $t715], "Seed", [], C));
  return L0.result;
}, {"params": ["PBKDF2Rounds", "ReseedAfterBytes", "AESKeySize"], "kind": "constructor", "ptypes": ["integer", "integer", "integer"]});
  U.func("FillSystemRandom", async function FillSystemRandom(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), "allowblocking": $.copyArg(p2), result: undefined, "fromos": false, "i": 0, "tmp": []};
  await $.fixArgs(L0, ["buffer", "len", "allowblocking"]);
  await $.wset([$t700, $t705, $t710, $t715], "fromos", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true });
  if ($.truthy((await $.wv([$t700, $t705, $t710, $t715], "fromos", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }, false)))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "i", (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
  do {
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "SynCommons", C, false)), "FillRandom", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, true)), $.shr((await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)), 2)])));
    if ($.truthy($.le((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorMemory", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, false)), [$.sub((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))])), (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)));
      break;
    }
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorMemoryPtrInt", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, false)), [$.sub((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))])), (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, true)), $.shr((await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)), 3)], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "dec", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t738) => { await $.wset([$t700, $t705, $t710, $t715], "i", $t738, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))], C)));
    await $.tick();
  } while (!$.truthy((await $.wv([$t700, $t705, $t710, $t715], "false", C, false))));
  return L0.result;
}, {"params": ["Buffer", "Len", "AllowBlocking"], "kind": "procedure", "ptypes": ["PByteArray", "integer", "boolean"]});
  U.method("TAESPRNG", "GetEntropy", async function GetEntropy(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), "systemonly": $.copyArg(p1), result: null, "ext": null, "data": null, "fromos": null, "version": null, "sha3": null};
  await $.fixArgs(L0, ["len", "systemonly"]);
  L0["sha3update"] = $.fn(async function sha3update() {
  const L1 = {result: undefined, "g": null};
  await $.stmt((await $.mcall((await $.v(C, "SynCommons")), "FillRandom", [(await $.mref(L0["data"], "Hi")), 8])));
  await $.stmt((await $.mcall(L0["sha3"], "Update", [L0["data"], (await $.call(C, "sizeof", [L0["data"]]))])));
  await $.stmt((await $.call(C, "CreateGUID", [L1["g"]])));
  await $.stmt((await $.mcall(L0["sha3"], "Update", [L1["g"], (await $.call(C, "sizeof", [L1["g"]]))])));
  return L1.result;
});
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "QueryPerformanceCounter", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "d0"))], C)));
  try {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fromos", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }, false)), async ($t739) => { await $.wset([$t700, $t705, $t710, $t715], "fromos", $t739, { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillSystemRandom", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "fromos", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "SystemOnly", { get: async () => L0["systemonly"], set: async (v) => { L0["systemonly"] = v; }, local: true }, false))], C)));
    if ($.truthy((await $.wv([$t700, $t705, $t710, $t715], "SystemOnly", { get: async () => L0["systemonly"], set: async (v) => { L0["systemonly"] = v; }, local: true }, false)))) {
      await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "fromos", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.wset([$t700, $t705, $t710, $t715], "fromos", "", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true });
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "SHAKE_256", C, false))])));
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "sha3update", [], { get: async () => L0["sha3update"], set: async (v) => { L0["sha3update"] = v; }, local: true }));
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "h1", (await $.mv((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "ExeVersion", C, false)), "Hash")), "b")));
    await $.wset([$t700, $t705, $t710, $t715], "version", (await $.wcall([$t700, $t705, $t710, $t715], "RecordSave", [(await $.wv([$t700, $t705, $t710, $t715], "ExeVersion", C, false)), (await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TExeVersion", C, false))], C))], C)), { get: async () => L0["version"], set: async (v) => { L0["version"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "version", { get: async () => L0["version"], set: async (v) => { L0["version"] = v; }, local: true }, false))])));
    await $.wset([$t700, $t705, $t710, $t715], "ext", (await $.wv([$t700, $t705, $t710, $t715], "NowUTC", C, false)), { get: async () => L0["ext"], set: async (v) => { L0["ext"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "ext", { get: async () => L0["ext"], set: async (v) => { L0["ext"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "ext", { get: async () => L0["ext"], set: async (v) => { L0["ext"] = v; }, local: true }, false))], C))])));
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "sha3update", [], { get: async () => L0["sha3update"], set: async (v) => { L0["sha3update"] = v; }, local: true }));
    await $.wset([$t700, $t705, $t710, $t715], "ext", (await $.wv([$t700, $t705, $t710, $t715], "Random", C, false)), { get: async () => L0["ext"], set: async (v) => { L0["ext"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "ext", { get: async () => L0["ext"], set: async (v) => { L0["ext"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "ext", { get: async () => L0["ext"], set: async (v) => { L0["ext"] = v; }, local: true }, false))], C))])));
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "i0", (await $.wcall([$t700, $t705, $t710, $t715], "integer", [(await $.wv([$t700, $t705, $t710, $t715], "HInstance", C, false))], C)));
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "i1", (await $.wcall([$t700, $t705, $t710, $t715], "integer", [(await $.wv([$t700, $t705, $t710, $t715], "GetCurrentThreadId", C, false))], C)));
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "i2", (await $.wcall([$t700, $t705, $t710, $t715], "integer", [(await $.wv([$t700, $t705, $t710, $t715], "MainThreadID", C, false))], C)));
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "i3", (await $.wcall([$t700, $t705, $t710, $t715], "integer", [(await $.wv([$t700, $t705, $t710, $t715], "UnixMSTimeUTCFast", C, false))], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SleepHiRes", [0], C)));
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "sha3update", [], { get: async () => L0["sha3update"], set: async (v) => { L0["sha3update"] = v; }, local: true }));
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "OSVersionText", C, false))])));
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "SystemInfo", C, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "SystemInfo", C, false))], C))])));
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Cypher", [(await $.wv([$t700, $t705, $t710, $t715], "fromos", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }, false))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  } finally {
    await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha3", { get: async () => L0["sha3"], set: async (v) => { L0["sha3"] = v; }, local: true }, false)), "Done", []);
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "fromos", { get: async () => L0["fromos"], set: async (v) => { L0["fromos"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Len", "SystemOnly"], "kind": "function", "ptypes": ["integer", "boolean"]});
  U.method("TAESPRNG", "Seed", async function Seed(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "key": null, "entropy": null};
  try {
    await $.wset([$t700, $t705, $t710, $t715], "entropy", (await $.wcall([$t700, $t705, $t710, $t715], "GetEntropy", [128], C)), { get: async () => L0["entropy"], set: async (v) => { L0["entropy"] = v; }, local: true });
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "PBKDF2_HMAC_SHA512", [(await $.wv([$t700, $t705, $t710, $t715], "entropy", { get: async () => L0["entropy"], set: async (v) => { L0["entropy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "ExeVersion", C, false)), "User")), (await $.wv([$t700, $t705, $t710, $t715], "fSeedPBKDF2Rounds", C, false)), $.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), "b")), async ($t740) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), "b", $t740); })], C)));
    await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "Lock", []);
    try {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "EncryptInit", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), "Lo")), (await $.wv([$t700, $t705, $t710, $t715], "fAESKeySize", C, false))])));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "crcblocks", [(await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, true)), (await $.mref((await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), "Hi")), 2], C)));
      await $.wset([$t700, $t705, $t710, $t715], "fBytesSinceSeed", 0, C);
    } finally {
      await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "UnLock", []);
    }
  } finally {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), "b"))], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "entropy", { get: async () => L0["entropy"], set: async (v) => { L0["entropy"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESPRNG", "IncrementCTR", async function IncrementCTR(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i0")), async ($t741) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i0", $t741); })], C)));
  if ($.truthy($.eq((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i0")), 0))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i1")), async ($t742) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i1", $t742); })], C)));
    if ($.truthy($.eq((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i1")), 0))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i2")), async ($t743) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i2", $t743); })], C)));
      if ($.truthy($.eq((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i2")), 0))) {
        await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i3")), async ($t744) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "i3", $t744); })], C)));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESPRNG", "FillRandom", async function FillRandom(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.asRef(p0), result: undefined};
  if ($.truthy($.gt((await $.wv([$t700, $t705, $t710, $t715], "fBytesSinceSeed", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fSeedAfterBytes", C, false))))) {
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "Seed", [], C));
  }
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "Lock", []);
  await $.stmt((await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TAESContext", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Context")), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "b")), (await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, false))])));
  await $.stmt($.wcall([$t700, $t705, $t710, $t715], "IncrementCTR", [], C));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fBytesSinceSeed", C, false)), async ($t745) => { await $.wset([$t700, $t705, $t710, $t715], "fBytesSinceSeed", $t745, C); }), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, false))], C))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fTotalBytes", C, false)), async ($t746) => { await $.wset([$t700, $t705, $t710, $t715], "fTotalBytes", $t746, C); }), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, false))], C))], C)));
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "UnLock", []);
  return L0.result;
}, {"params": ["Block"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.method("TAESPRNG", "FillRandom", async function FillRandom(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.asRef(p0), result: undefined};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [(await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => await L0["buffer"].get(), set: async (v) => { await L0["buffer"].set(v); }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => await L0["buffer"].get(), set: async (v) => { await L0["buffer"].set(v); }, local: true }, false))], C))], C)));
  return L0.result;
}, {"params": ["Buffer"], "kind": "procedure", "ptypes": ["THash256"]});
  U.method("TAESPRNG", "FillRandom", async function FillRandom(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined, "buf": null, "rnd": null, "i": 0};
  await $.fixArgs(L0, ["buffer", "len"]);
  if ($.truthy($.le((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 0))) {
    return L0.result;
  }
  if ($.truthy($.gt((await $.wv([$t700, $t705, $t710, $t715], "fBytesSinceSeed", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fSeedAfterBytes", C, false))))) {
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "Seed", [], C));
  }
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "Lock", []);
  { const $t747 = $.shr((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 4);
    await $.wset([$t700, $t705, $t710, $t715], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t748 = true;
    for (;;) {
      if (!$t748) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t748 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t747))) break;
      await $.stmt((await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TAESContext", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Context")), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "b")), (await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t700, $t705, $t710, $t715], "IncrementCTR", [], C));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), async ($t749) => { await $.wset([$t700, $t705, $t710, $t715], "buf", $t749, { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fBytesSinceSeed", C, false)), async ($t750) => { await $.wset([$t700, $t705, $t710, $t715], "fBytesSinceSeed", $t750, C); }), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fTotalBytes", C, false)), async ($t751) => { await $.wset([$t700, $t705, $t710, $t715], "fTotalBytes", $t751, C); }), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  await $.wset([$t700, $t705, $t710, $t715], "Len", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), async () => (await $.wv([$t700, $t705, $t710, $t715], "AESBlockMod", C, false)))), { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true });
  if ($.truthy($.gt((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 0))) {
    await $.stmt((await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TAESContext", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Context"))], C)), "DoBlock", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), "Context")), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fCTR", C, false)), "b")), (await $.wv([$t700, $t705, $t710, $t715], "rnd", { get: async () => L0["rnd"], set: async (v) => { L0["rnd"] = v; }, local: true }, false))])));
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "IncrementCTR", [], C));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "MoveFast", [(await $.wv([$t700, $t705, $t710, $t715], "rnd", { get: async () => L0["rnd"], set: async (v) => { L0["rnd"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  }
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "UnLock", []);
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TAESPRNG", "FillRandom", async function FillRandom(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["len"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetString", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async ($t752) => { await $.wset([$t700, $t705, $t710, $t715], "result", $t752, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }); }), null, (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], { get: async () => L0["fillrandom"], set: async (v) => { L0["fillrandom"] = v; }, local: true })));
  return L0.result;
}, {"params": ["Len"], "kind": "function", "ptypes": ["integer"]});
  U.method("TAESPRNG", "FillRandomBytes", async function FillRandomBytes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["len"]);
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C))))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", null, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async ($t753) => { await $.wset([$t700, $t705, $t710, $t715], "result", $t753, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["Len"], "kind": "function", "ptypes": ["integer"]});
  U.method("TAESPRNG", "FillRandomHex", async function FillRandomHex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: null, "bin": null};
  await $.fixArgs(L0, ["len"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FastSetString", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), null, $.mul((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 2)], C)));
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 0))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "bin", (await $.idx((await $.wcall([$t700, $t705, $t710, $t715], "PByteArray", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), [(await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))])), { get: async () => L0["bin"], set: async (v) => { L0["bin"] = v; }, local: true });
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "bin", { get: async () => L0["bin"], set: async (v) => { L0["bin"] = v; }, local: true }, false)), async ($t754) => { await $.wset([$t700, $t705, $t710, $t715], "bin", $t754, { get: async () => L0["bin"], set: async (v) => { L0["bin"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "SynCommons", C, false)), "BinToHex", [(await $.wv([$t700, $t705, $t710, $t715], "bin", { get: async () => L0["bin"], set: async (v) => { L0["bin"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))])));
  return L0.result;
}, {"params": ["Len"], "kind": "function", "ptypes": ["integer"]});
  U.method("TAESPRNG", "Random32", async function Random32(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "block": null};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "b")), async ($t755) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "b", $t755); })], C)));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "c0")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESPRNG", "Random32", async function Random32(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"max": $.copyArg(p0), result: 0, "block": null};
  await $.fixArgs(L0, ["max"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "b")), async ($t756) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "b", $t756); })], C)));
  await $.wset([$t700, $t705, $t710, $t715], "result", $.shr(($.mul((await $.wcall([$t700, $t705, $t710, $t715], "Qword", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "c0"))], C)), (await $.wv([$t700, $t705, $t710, $t715], "max", { get: async () => L0["max"], set: async (v) => { L0["max"] = v; }, local: true }, false)))), 32), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["max"], "kind": "function", "ptypes": ["cardinal"]});
  U.method("TAESPRNG", "Random64", async function Random64(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "block": null};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "b")), async ($t757) => { await $.mset((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "b", $t757); })], C)));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), "L")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Hash128ToExt", async function Hash128ToExt() { return $.notPorted("Hash128ToExt", "expected ';' got op:'/' near 'SynExtended; const   COEFF64: TSynExtended = (1.0/$80000000)/$100000000;   begin   result := (THash128Rec(r).Lo and $7ff'"); }, {"params": ["r"], "kind": "function", "ptypes": ["THash128"], "error": "expected ';' got op:'/' near 'SynExtended; const   COEFF64: TSynExtended = (1.0/$80000000)/$100000000;   begin   result := (THash128Rec(r).Lo and $7ff'", "src": "function Hash128ToExt(  const  r: THash128): TSynExtended;\nconst\n  COEFF64: TSynExtended = (1.0/$80000000)/$100000000;  \nbegin\n  result := (THash128Rec(r).Lo and $7fffffffffffffff)*COEFF64;\nend;"});
  U.func("Hash128ToDouble", async function Hash128ToDouble() { return $.notPorted("Hash128ToDouble", "expected ';' got op:'/' near 'THash128): double; const   COEFF64: double = (1.0/$80000000)/$100000000;   begin   result := (THash128Rec(r).Lo and $7ff'"); }, {"params": ["r"], "kind": "function", "ptypes": ["THash128"], "error": "expected ';' got op:'/' near 'THash128): double; const   COEFF64: double = (1.0/$80000000)/$100000000;   begin   result := (THash128Rec(r).Lo and $7ff'", "src": "function Hash128ToDouble(  const  r: THash128): double;\nconst\n  COEFF64: double = (1.0/$80000000)/$100000000;  \nbegin\n  result := (THash128Rec(r).Lo and $7fffffffffffffff)*COEFF64;\nend;"});
  U.func("Hash128ToSingle", async function Hash128ToSingle() { return $.notPorted("Hash128ToSingle", "expected ';' got op:'/' near 'THash128): double; const   COEFF64: single = (1.0/$80000000)/$100000000;   begin   result := (THash128Rec(r).Lo and $7ff'"); }, {"params": ["r"], "kind": "function", "ptypes": ["THash128"], "error": "expected ';' got op:'/' near 'THash128): double; const   COEFF64: single = (1.0/$80000000)/$100000000;   begin   result := (THash128Rec(r).Lo and $7ff'", "src": "function Hash128ToSingle(  const  r: THash128): double;\nconst\n  COEFF64: single = (1.0/$80000000)/$100000000;  \nbegin\n  result := (THash128Rec(r).Lo and $7fffffffffffffff)*COEFF64;\nend;"});
  U.method("TAESPRNG", "RandomExt", async function RandomExt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "block": null};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), async ($t758) => { await $.wset([$t700, $t705, $t710, $t715], "block", $t758, { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }); })], C)));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "Hash128ToExt", [(await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESPRNG", "RandomDouble", async function RandomDouble(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "block": null};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false)), async ($t759) => { await $.wset([$t700, $t705, $t710, $t715], "block", $t759, { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }); })], C)));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "Hash128ToDouble", [(await $.wv([$t700, $t705, $t710, $t715], "block", { get: async () => L0["block"], set: async (v) => { L0["block"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAESPRNG", "RandomPassword", async function RandomPassword(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: null, "i": 0, "haspunct": false, "p": null};
  await $.fixArgs(L0, ["len"]);
  L0["chars"] = $.add("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", ":bcd.fgh(jklmn)pqrst?vwxyz+BCD%FGH!JKLMN/PQRST@VWX#Z$.:()?%!-+*/@#");
  do {
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), async ($t760) => { await $.wset([$t700, $t705, $t710, $t715], "Len", $t760, { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }); })], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "haspunct", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["haspunct"], set: async (v) => { L0["haspunct"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "P", (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
    { const $t761 = (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false));
      await $.wset([$t700, $t705, $t710, $t715], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t762 = true;
      for (;;) {
        if (!$t762) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t762 = false;
        if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t761))) break;
        await $.wset([$t700, $t705, $t710, $t715], "P", (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "CHARS", { get: async () => L0["chars"], set: async (v) => { L0["chars"] = v; }, local: true }, false)), [$.mod((await $.wcall([$t700, $t705, $t710, $t715], "ord", [(await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "CHARS", { get: async () => L0["chars"], set: async (v) => { L0["chars"] = v; }, local: true }, false))], C)))])), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
        if ($.truthy((await $.and_($.not((await $.wv([$t700, $t705, $t710, $t715], "haspunct", { get: async () => L0["haspunct"], set: async (v) => { L0["haspunct"] = v; }, local: true }, false))), async () => $.not(($.in_((await $.wcall([$t700, $t705, $t710, $t715], "ord", [(await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)), [...$.range((await $.wcall([$t700, $t705, $t710, $t715], "ord", ["A"], C)),(await $.wcall([$t700, $t705, $t710, $t715], "ord", ["Z"], C))), ...$.range((await $.wcall([$t700, $t705, $t710, $t715], "ord", ["a"], C)),(await $.wcall([$t700, $t705, $t710, $t715], "ord", ["z"], C))), ...$.range((await $.wcall([$t700, $t705, $t710, $t715], "ord", ["0"], C)),(await $.wcall([$t700, $t705, $t710, $t715], "ord", ["9"], C)))]))))))) {
          await $.wset([$t700, $t705, $t710, $t715], "haspunct", (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), { get: async () => L0["haspunct"], set: async (v) => { L0["haspunct"] = v; }, local: true });
        }
        await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), async ($t763) => { await $.wset([$t700, $t705, $t710, $t715], "P", $t763, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }); })], C)));
        await $.tick();
      }
    }
    await $.tick();
  } while (!$.truthy((await $.or_(($.le((await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 4)), async () => ((await $.and_((await $.wv([$t700, $t705, $t710, $t715], "haspunct", { get: async () => L0["haspunct"], set: async (v) => { L0["haspunct"] = v; }, local: true }, false)), async () => ($.ne((await $.wcall([$t700, $t705, $t710, $t715], "LowerCase", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))))))))));
  return L0.result;
}, {"params": ["Len"], "kind": "function", "ptypes": ["integer"]});
  U.func("SetMainAESPRNG", async function SetMainAESPRNG(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.wcall([$t700, $t705, $t710, $t715], "GlobalLock", [], C));
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "MainAESPRNG", C, false)), null))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "GarbageCollectorFreeAndNil", [(await $.wv([$t700, $t705, $t710, $t715], "MainAESPRNG", C, false)), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "TAESPRNG", C, false)), "Create"))], C)));
  }
  await $.stmt($.wcall([$t700, $t705, $t710, $t715], "GlobalUnLock", [], C));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAESPRNG", "Main", async function Main(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "MainAESPRNG", C, false)), null))) {
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "SetMainAESPRNG", [], C));
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "MainAESPRNG", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("AFDiffusion", async function AFDiffusion(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buf": $.copyArg(p0), "rnd": $.copyArg(p1), "size": $.copyArg(p2), result: undefined, "sha": null, "dig": null, "last": 0, "iv": 0, "i": 0};
  await $.fixArgs(L0, ["buf", "rnd", "size"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorMemory", [(await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "rnd", { get: async () => L0["rnd"], set: async (v) => { L0["rnd"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))], C)));
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Init", []);
  await $.wset([$t700, $t705, $t710, $t715], "last", $.idiv((await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C))), { get: async () => L0["last"], set: async (v) => { L0["last"] = v; }, local: true });
  { const $t764 = $.sub((await $.wv([$t700, $t705, $t710, $t715], "last", { get: async () => L0["last"], set: async (v) => { L0["last"] = v; }, local: true }, false)), 1);
    await $.wset([$t700, $t705, $t710, $t715], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t765 = true;
    for (;;) {
      if (!$t765) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t765 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t764))) break;
      await $.wset([$t700, $t705, $t710, $t715], "iv", (await $.wcall([$t700, $t705, $t710, $t715], "bswap32", [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)), { get: async () => L0["iv"], set: async (v) => { L0["iv"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "iv", { get: async () => L0["iv"], set: async (v) => { L0["iv"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "iv", { get: async () => L0["iv"], set: async (v) => { L0["iv"] = v; }, local: true }, false))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C))])));
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Final", [(await $.wcall([$t700, $t705, $t710, $t715], "PSHA256Digest", [(await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))], C))])));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [(await $.wcall([$t700, $t705, $t710, $t715], "PByte", [(await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C))], C)));
      await $.tick();
    }
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "dec", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), async ($t766) => { await $.wset([$t700, $t705, $t710, $t715], "size", $t766, { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }); }), $.mul((await $.wv([$t700, $t705, $t710, $t715], "last", { get: async () => L0["last"], set: async (v) => { L0["last"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C)))], C)));
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), 0))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "iv", (await $.wcall([$t700, $t705, $t710, $t715], "bswap32", [(await $.wv([$t700, $t705, $t710, $t715], "last", { get: async () => L0["last"], set: async (v) => { L0["last"] = v; }, local: true }, false))], C)), { get: async () => L0["iv"], set: async (v) => { L0["iv"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "iv", { get: async () => L0["iv"], set: async (v) => { L0["iv"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "iv", { get: async () => L0["iv"], set: async (v) => { L0["iv"] = v; }, local: true }, false))], C))])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Final", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false)), async ($t767) => { await $.wset([$t700, $t705, $t710, $t715], "dig", $t767, { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }); })])));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "MoveSmall", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "buf", { get: async () => L0["buf"], set: async (v) => { L0["buf"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["buf", "rnd", "size"], "kind": "procedure", "ptypes": ["pointer", "pointer", "cardinal"]});
  U.method("TAESPRNG", "AFSplit", async function AFSplit(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "bufferbytes": $.copyArg(p1), "stripescount": $.copyArg(p2), result: null, "dst": null, "tmp": null, "i": 0};
  await $.fixArgs(L0, ["buffer", "bufferbytes", "stripescount"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.ne(Self, null))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async ($t768) => { await $.wset([$t700, $t705, $t710, $t715], "result", $t768, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }); }), $.mul((await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false)), ($.add((await $.wv([$t700, $t705, $t710, $t715], "StripesCount", { get: async () => L0["stripescount"], set: async (v) => { L0["stripescount"] = v; }, local: true }, false)), 1)))], C)));
  }
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), ""))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "dst", (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), { get: async () => L0["dst"], set: async (v) => { L0["dst"] = v; }, local: true });
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), async ($t769) => { await $.wset([$t700, $t705, $t710, $t715], "tmp", $t769, { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
  { const $t770 = (await $.wv([$t700, $t705, $t710, $t715], "StripesCount", { get: async () => L0["stripescount"], set: async (v) => { L0["stripescount"] = v; }, local: true }, false));
    await $.wset([$t700, $t705, $t710, $t715], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t771 = true;
    for (;;) {
      if (!$t771) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t771 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t770))) break;
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "dst", { get: async () => L0["dst"], set: async (v) => { L0["dst"] = v; }, local: true }, false)), async ($t772) => { await $.wset([$t700, $t705, $t710, $t715], "dst", $t772, { get: async () => L0["dst"], set: async (v) => { L0["dst"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "AFDiffusion", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "dst", { get: async () => L0["dst"], set: async (v) => { L0["dst"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [(await $.wcall([$t700, $t705, $t710, $t715], "PByte", [(await $.wv([$t700, $t705, $t710, $t715], "dst", { get: async () => L0["dst"], set: async (v) => { L0["dst"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
      await $.tick();
    }
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorMemory", [(await $.wv([$t700, $t705, $t710, $t715], "dst", { get: async () => L0["dst"], set: async (v) => { L0["dst"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["Buffer", "BufferBytes", "StripesCount"], "kind": "function", "ptypes": [null, "integer", "integer"]});
  U.method("TAESPRNG", "AFSplit", async function AFSplit(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "stripescount": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["buffer", "stripescount"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "AFSplit", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "StripesCount", { get: async () => L0["stripescount"], set: async (v) => { L0["stripescount"] = v; }, local: true }, false))], { get: async () => L0["afsplit"], set: async (v) => { L0["afsplit"] = v; }, local: true })), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["Buffer", "StripesCount"], "kind": "function", "ptypes": ["RawByteString", "integer"]});
  U.method("TAESPRNG", "AFUnsplit", async function AFUnsplit(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"split": $.copyArg(p0), "buffer": $.asRef(p1), "bufferbytes": $.copyArg(p2), result: false, "len": 0, "i": 0, "src": null, "tmp": null};
  await $.fixArgs(L0, ["split", "bufferbytes"]);
  await $.wset([$t700, $t705, $t710, $t715], "len", (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "Split", { get: async () => L0["split"], set: async (v) => { L0["split"] = v; }, local: true }, false))], C)), { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 0)), async () => ($.eq($.mod((await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "cardinal", [(await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C))), 0)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.not((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "src", (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Split", { get: async () => L0["split"], set: async (v) => { L0["split"] = v; }, local: true }, false))], C)), { get: async () => L0["src"], set: async (v) => { L0["src"] = v; }, local: true });
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), async ($t773) => { await $.wset([$t700, $t705, $t710, $t715], "tmp", $t773, { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
  { const $t774 = $.idiv((await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "cardinal", [(await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
    await $.wset([$t700, $t705, $t710, $t715], "i", 2, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t775 = true;
    for (;;) {
      if (!$t775) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t775 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t774))) break;
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "AFDiffusion", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "src", { get: async () => L0["src"], set: async (v) => { L0["src"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [(await $.wcall([$t700, $t705, $t710, $t715], "PByte", [(await $.wv([$t700, $t705, $t710, $t715], "src", { get: async () => L0["src"], set: async (v) => { L0["src"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
      await $.tick();
    }
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "XorMemory", [(await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => await L0["buffer"].get(), set: async (v) => { await L0["buffer"].set(v); }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "src", { get: async () => L0["src"], set: async (v) => { L0["src"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "BufferBytes", { get: async () => L0["bufferbytes"], set: async (v) => { L0["bufferbytes"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["Split", "Buffer", "BufferBytes"], "kind": "function", "ptypes": ["RawByteString", null, "integer"]});
  U.method("TAESPRNG", "AFUnsplit", async function AFUnsplit(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"split": $.copyArg(p0), "stripescount": $.copyArg(p1), result: null, "len": 0};
  await $.fixArgs(L0, ["split", "stripescount"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "len", (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "Split", { get: async () => L0["split"], set: async (v) => { L0["split"] = v; }, local: true }, false))], C)), { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true });
  if ($.truthy((await $.or_(($.eq((await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), 0)), async () => ($.ne($.mod((await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "cardinal", [$.add((await $.wv([$t700, $t705, $t710, $t715], "StripesCount", { get: async () => L0["stripescount"], set: async (v) => { L0["stripescount"] = v; }, local: true }, false)), 1)], C))), 0)))))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "len", $.idiv((await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "cardinal", [$.add((await $.wv([$t700, $t705, $t710, $t715], "StripesCount", { get: async () => L0["stripescount"], set: async (v) => { L0["stripescount"] = v; }, local: true }, false)), 1)], C))), { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true });
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async ($t776) => { await $.wset([$t700, $t705, $t710, $t715], "result", $t776, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], C)));
  if ($.truthy($.not((await $.wcall([$t700, $t705, $t710, $t715], "AFUnsplit", [(await $.wv([$t700, $t705, $t710, $t715], "Split", { get: async () => L0["split"], set: async (v) => { L0["split"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))], { get: async () => L0["afunsplit"], set: async (v) => { L0["afunsplit"] = v; }, local: true }))))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Split", "StripesCount"], "kind": "function", "ptypes": ["RawByteString", "integer"]});
  U.method("TAESPRNG", "Fill", async function Fill(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "Main", C, false)), "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, false)), async ($t777) => { await $.wset([$t700, $t705, $t710, $t715], "Buffer", $t777, { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))])));
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TAESPRNG", "Fill", async function Fill(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.asRef(p0), result: undefined};
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "Main", C, false)), "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, false)), async ($t778) => { await $.wset([$t700, $t705, $t710, $t715], "Block", $t778, { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }); })])));
  return L0.result;
}, {"params": ["Block"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.method("TAESPRNG", "Fill", async function Fill(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.asRef(p0), result: undefined};
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "Main", C, false)), "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, false)), async ($t779) => { await $.wset([$t700, $t705, $t710, $t715], "Block", $t779, { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }); })])));
  return L0.result;
}, {"params": ["Block"], "kind": "procedure", "ptypes": ["THash256"]});
  U.method("TAESPRNG", "Fill", async function Fill(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["len"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "Main", C, false)), "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), async ($t780) => { await $.wset([$t700, $t705, $t710, $t715], "Len", $t780, { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }); })])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["Len"], "kind": "function", "ptypes": ["integer"]});
  U.method("TAESPRNG", "Bytes", async function Bytes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"len": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["len"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "Main", C, false)), "FillRandomBytes", [(await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["Len"], "kind": "function", "ptypes": ["integer"]});
  U.method("TAESPRNGSystem", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAESPRNGSystem", "Create", [0, 0], arguments);
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TAESPRNGSystem", "FillRandom", async function FillRandom(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"block": $.asRef(p0), result: undefined};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillRandom", [(await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "Block", { get: async () => await L0["block"].get(), set: async (v) => { await L0["block"].set(v); }, local: true }, false))], C))], C)));
  return L0.result;
}, {"params": ["Block"], "kind": "procedure", "ptypes": ["TAESBlock"]});
  U.method("TAESPRNGSystem", "FillRandom", async function FillRandom(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "len": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["buffer", "len"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillSystemRandom", [(await $.wv([$t700, $t705, $t710, $t715], "Buffer", { get: async () => L0["buffer"], set: async (v) => { L0["buffer"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Len", { get: async () => L0["len"], set: async (v) => { L0["len"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "false", C, false))], C)));
  return L0.result;
}, {"params": ["Buffer", "Len"], "kind": "procedure", "ptypes": ["pointer", "integer"]});
  U.method("TAESPRNGSystem", "Seed", async function Seed(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRC4", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "akeylen": $.copyArg(p1), result: undefined, "i": 0, "k": 0, "j": 0, "tmp": 0};
  await $.fixArgs(L0, ["akey", "akeylen"]);
  if ($.truthy($.le((await $.wv([$t700, $t705, $t710, $t715], "aKeyLen", { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }, false)), 0))) {
    throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["TRC4.Init(invalid aKeyLen=%)", [(await $.wv([$t700, $t705, $t710, $t715], "aKeyLen", { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }, false))]])));
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "dec", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "aKeyLen", { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }, false)), async ($t781) => { await $.wset([$t700, $t705, $t710, $t715], "aKeyLen", $t781, { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }); })], C)));
  { const $t782 = (await $.wcall([$t700, $t705, $t710, $t715], "high", [(await $.wv([$t700, $t705, $t710, $t715], "state", C, false))], C));
    await $.wset([$t700, $t705, $t710, $t715], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t783 = true;
    for (;;) {
      if (!$t783) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t783 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t782))) break;
      { const $t784 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))); if ($t784 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "state", $t784, C); } }
      await $.tick();
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
  { const $t785 = (await $.wcall([$t700, $t705, $t710, $t715], "high", [(await $.wv([$t700, $t705, $t710, $t715], "state", C, false))], C));
    await $.wset([$t700, $t705, $t710, $t715], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    let $t786 = true;
    for (;;) {
      if (!$t786) { await $.wset([$t700, $t705, $t710, $t715], "i", $.succ((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
      $t786 = false;
      if (!($.ord((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t785))) break;
      await $.wset([$t700, $t705, $t710, $t715], "j", (await $.and_(($.add($.add((await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), (await $.idx((await $.wcall([$t700, $t705, $t710, $t715], "TByteArray", [(await $.wv([$t700, $t705, $t710, $t715], "aKey", { get: async () => L0["akey"], set: async (v) => { L0["akey"] = v; }, local: true }, false))], C)), [(await $.wv([$t700, $t705, $t710, $t715], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])))), async () => 255)), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
      await $.wset([$t700, $t705, $t710, $t715], "tmp", (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true });
      { const $t787 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))); if ($t787 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "state", $t787, C); } }
      { const $t788 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], (await $.wv([$t700, $t705, $t710, $t715], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))); if ($t788 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "state", $t788, C); } }
      if ($.truthy($.ge((await $.wv([$t700, $t705, $t710, $t715], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aKeyLen", { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }, false))))) {
        await $.wset([$t700, $t705, $t710, $t715], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
      } else {
        await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), async ($t789) => { await $.wset([$t700, $t705, $t710, $t715], "k", $t789, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); })], C)));
      }
      await $.tick();
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "currI", 0, C);
  await $.wset([$t700, $t705, $t710, $t715], "currJ", 0, C);
  return L0.result;
}, {"params": ["aKey", "aKeyLen"], "kind": "procedure", "ptypes": [null, "integer"]});
  U.method("TRC4", "InitSHA3", async function InitSHA3(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"akey": $.copyArg(p0), "akeylen": $.copyArg(p1), result: undefined, "sha": null, "dig": []};
  await $.fixArgs(L0, ["akey", "akeylen"]);
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "sha", { get: async () => L0["sha"], set: async (v) => { L0["sha"] = v; }, local: true }, false)), "Full", [(await $.wv([$t700, $t705, $t710, $t715], "SHAKE_128", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "aKey", { get: async () => L0["akey"], set: async (v) => { L0["akey"] = v; }, local: true }, true)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "aKeyLen", { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }, false)), async ($t790) => { await $.wset([$t700, $t705, $t710, $t715], "aKeyLen", $t790, { get: async () => L0["akeylen"], set: async (v) => { L0["akeylen"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, true)), $.shl((await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C)), 3)])));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Init", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillCharFast", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "dig", { get: async () => L0["dig"], set: async (v) => { L0["dig"] = v; }, local: true }, false))], C)), 0], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Drop", [3072], C)));
  return L0.result;
}, {"params": ["aKey", "aKeyLen"], "kind": "procedure", "ptypes": [null, "integer"]});
  U.method("TRC4", "EncryptBuffer", async function EncryptBuffer() { return $.notPorted("TRC4.EncryptBuffer", "cannot assign to call"); }, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": ["PByte", "PByte", "cardinal"], "error": "cannot assign to call", "src": "procedure TRC4.EncryptBuffer(BufIn, BufOut: PByte; Count: cardinal);\nvar i,j,ki,kj: PtrInt;\n    by4: array[0..3] of byte;\nbegin\n  i := currI;\n  j := currJ;\n  while Count>3 do begin\n    dec(Count,4);\n    i := (i+1) and $ff;\n    ki := State[i];\n    j := (j+ki) and $ff;\n    kj := (ki+State[j]) and $ff;\n    State[i] := State[j];\n    i := (i+1) and $ff;\n    State[j] := ki;\n    ki := State[i];\n    by4[0] := State[kj];\n    j := (j+ki) and $ff;\n    kj := (ki+State[j]) and $ff;\n    State[i] := State[j];\n    i := (i+1) and $ff;\n    State[j] := ki;\n    by4[1] := State[kj];\n    ki := State[i];\n    j := (j+ki) and $ff;\n    kj := (ki+State[j]) and $ff;\n    State[i] := State[j];\n    i := (i+1) and $ff;\n    State[j] := ki;\n    by4[2] := State[kj];\n    ki := State[i];\n    j := (j+ki) and $ff;\n    kj := (ki+State[j]) and $ff;\n    State[i] := State[j];\n    State[j] := ki;\n    by4[3] := State[kj];\n    PCardinal(BufOut)^ := PCardinal(BufIn)^ xor cardinal(by4);\n    inc(BufIn,4);\n    inc(BufOut,4);\n  end;\n  while Count>0 do begin\n    dec(Count);\n    i := (i+1) and $ff;\n    ki := State[i];\n    j := (j+ki) and $ff;\n    kj := (ki+State[j]) and $ff;\n    State[i] := State[j];\n    State[j] := ki;\n    BufOut^ := BufIn^ xor State[kj];\n    inc(BufIn);\n    inc(BufOut);\n  end;\n  currI := i;\n  currJ := j;\nend;"});
  U.method("TRC4", "Encrypt", async function Encrypt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"bufin": $.copyArg(p0), "bufout": $.asRef(p1), "count": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["bufin", "count"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "EncryptBuffer", [(await $.wv([$t700, $t705, $t710, $t715], "BufIn", { get: async () => L0["bufin"], set: async (v) => { L0["bufin"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "BufOut", { get: async () => await L0["bufout"].get(), set: async (v) => { await L0["bufout"].set(v); }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["BufIn", "BufOut", "Count"], "kind": "procedure", "ptypes": [null, null, "cardinal"]});
  U.method("TRC4", "Drop", async function Drop(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"count": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "ki": 0};
  await $.fixArgs(L0, ["count"]);
  await $.wset([$t700, $t705, $t710, $t715], "i", (await $.wv([$t700, $t705, $t710, $t715], "currI", C, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "j", (await $.wv([$t700, $t705, $t710, $t715], "currJ", C, false)), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
  while ($.truthy($.gt((await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), 0))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "dec", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Count", { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }, false)), async ($t804) => { await $.wset([$t700, $t705, $t710, $t715], "Count", $t804, { get: async () => L0["count"], set: async (v) => { L0["count"] = v; }, local: true }); })], C)));
    await $.wset([$t700, $t705, $t710, $t715], "i", (await $.and_(($.add((await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)), async () => 255)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "ki", (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), { get: async () => L0["ki"], set: async (v) => { L0["ki"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "j", (await $.and_(($.add((await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "ki", { get: async () => L0["ki"], set: async (v) => { L0["ki"] = v; }, local: true }, false)))), async () => 255)), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
    { const $t805 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))); if ($t805 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "state", $t805, C); } }
    { const $t806 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "state", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], (await $.wv([$t700, $t705, $t710, $t715], "ki", { get: async () => L0["ki"], set: async (v) => { L0["ki"] = v; }, local: true }, false))); if ($t806 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "state", $t806, C); } }
    await $.tick();
  }
  await $.wset([$t700, $t705, $t710, $t715], "currI", (await $.wv([$t700, $t705, $t710, $t715], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), C);
  await $.wset([$t700, $t705, $t710, $t715], "currJ", (await $.wv([$t700, $t705, $t710, $t715], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), C);
  return L0.result;
}, {"params": ["Count"], "kind": "procedure", "ptypes": ["cardinal"]});
  U.func("RC4SelfTest", async function RC4SelfTest(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "rc4": null, "dat": $.sarr(), "backup": null};
  L0["key"] = [97, 138, 99, 210, 251];
  L0["indat"] = [220, 238, 76, 249, 44];
  L0["outdat"] = [241, 56, 41, 201, 222];
  L0["test1"] = [1, 35, 69, 103, 137, 171, 205, 239];
  L0["res1"] = [117, 183, 135, 128, 153, 224, 197, 150];
  L0["key2"] = [239, 1, 35, 69];
  L0["test2"] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  L0["res2"] = [214, 161, 65, 167, 236, 60, 56, 223, 189, 97];
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "Test1", { get: async () => L0["test1"], set: async (v) => { L0["test1"] = v; }, local: true }, false)), 8])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Test1", { get: async () => L0["test1"], set: async (v) => { L0["test1"] = v; }, local: true }, false)), async ($t807) => { await $.wset([$t700, $t705, $t710, $t715], "Test1", $t807, { get: async () => L0["test1"], set: async (v) => { L0["test1"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), async ($t808) => { await $.wset([$t700, $t705, $t710, $t715], "Dat", $t808, { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }); }), 8])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "Res1", { get: async () => L0["res1"], set: async (v) => { L0["res1"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "Res1", { get: async () => L0["res1"], set: async (v) => { L0["res1"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "Key2", { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true }, false)), 4])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Test2", { get: async () => L0["test2"], set: async (v) => { L0["test2"] = v; }, local: true }, false)), async ($t809) => { await $.wset([$t700, $t705, $t710, $t715], "Test2", $t809, { get: async () => L0["test2"], set: async (v) => { L0["test2"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), async ($t810) => { await $.wset([$t700, $t705, $t710, $t715], "Dat", $t810, { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }); }), 10])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async () => (await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "Res2", { get: async () => L0["res2"], set: async (v) => { L0["res2"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "Res2", { get: async () => L0["res2"], set: async (v) => { L0["res2"] = v; }, local: true }, false))], C))], C)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false))], C))])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false)), async ($t811) => { await $.wset([$t700, $t705, $t710, $t715], "InDat", $t811, { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), async ($t812) => { await $.wset([$t700, $t705, $t710, $t715], "Dat", $t812, { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false))], C))])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async () => (await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, false))], C))], C)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false))], C))])));
  await $.wset([$t700, $t705, $t710, $t715], "Backup", (await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), { get: async () => L0["backup"], set: async (v) => { L0["backup"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false)), async ($t813) => { await $.wset([$t700, $t705, $t710, $t715], "InDat", $t813, { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), async ($t814) => { await $.wset([$t700, $t705, $t710, $t715], "Dat", $t814, { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false))], C))])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async () => (await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, false))], C))], C)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "RC4", (await $.wv([$t700, $t705, $t710, $t715], "Backup", { get: async () => L0["backup"], set: async (v) => { L0["backup"] = v; }, local: true }, false)), { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false)), async ($t815) => { await $.wset([$t700, $t705, $t710, $t715], "InDat", $t815, { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), async ($t816) => { await $.wset([$t700, $t705, $t710, $t715], "Dat", $t816, { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false))], C))])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async () => (await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, false))], C))], C)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "RC4", (await $.wv([$t700, $t705, $t710, $t715], "Backup", { get: async () => L0["backup"], set: async (v) => { L0["backup"] = v; }, local: true }, false)), { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "RC4", { get: async () => L0["rc4"], set: async (v) => { L0["rc4"] = v; }, local: true }, false)), "Encrypt", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, false)), async ($t817) => { await $.wset([$t700, $t705, $t710, $t715], "OutDat", $t817, { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), async ($t818) => { await $.wset([$t700, $t705, $t710, $t715], "Dat", $t818, { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, false))], C))])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.and_((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async () => (await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "InDat", { get: async () => L0["indat"], set: async (v) => { L0["indat"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "OutDat", { get: async () => L0["outdat"], set: async (v) => { L0["outdat"] = v; }, local: true }, false))], C))], C)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("CompressShaAesSetKey", async function CompressShaAesSetKey(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "aesclass": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["key", "aesclass"]);
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), ""))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "CompressShaAesKey", C, false))], C)));
  } else {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SHA256Weak", [(await $.wv([$t700, $t705, $t710, $t715], "Key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "CompressShaAesKey", C, false)), async ($t819) => { await $.wset([$t700, $t705, $t710, $t715], "CompressShaAesKey", $t819, C); })], C)));
  }
  return L0.result;
}, {"params": ["Key", "AesClass"], "kind": "procedure", "ptypes": ["RawByteString", "TAESAbstractClass"]});
  U.func("CompressShaAes", async function CompressShaAes(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datarawbytestring": $.asRef(p0), "compress": $.copyArg(p1), result: '', "data": null};
  await $.fixArgs(L0, ["compress"]);
  if ($.truthy((await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), "")), async () => ($.ne((await $.wv([$t700, $t705, $t710, $t715], "CompressShaAesClass", C, false)), null)))))) {
    try {
      {
        const $t821 = (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "CompressShaAesClass", C, false)), "Create", [(await $.wv([$t700, $t705, $t710, $t715], "CompressShaAesKey", C, false)), 256]));
        try {
          if ($.truthy((await $.wv([$t700, $t705, $t710, $t715, $t821], "Compress", { get: async () => L0["compress"], set: async (v) => { L0["compress"] = v; }, local: true }, false)))) {
            await $.stmt((await $.wcall([$t700, $t705, $t710, $t715, $t821], "CompressSynLZ", [(await $.wv([$t700, $t705, $t710, $t715, $t821], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715, $t821], "true", C, false))], C)));
            await $.wset([$t700, $t705, $t710, $t715, $t821], "Data", (await $.wcall([$t700, $t705, $t710, $t715, $t821], "EncryptPKCS7", [(await $.wv([$t700, $t705, $t710, $t715, $t821], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715, $t821], "true", C, false))], C)), { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true });
          } else {
            await $.wset([$t700, $t705, $t710, $t715, $t821], "Data", (await $.wcall([$t700, $t705, $t710, $t715, $t821], "DecryptPKCS7", [(await $.wv([$t700, $t705, $t710, $t715, $t821], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715, $t821], "true", C, false))], C)), { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true });
            if ($.truthy($.eq((await $.wcall([$t700, $t705, $t710, $t715, $t821], "CompressSynLZ", [(await $.wv([$t700, $t705, $t710, $t715, $t821], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715, $t821], "false", C, false))], C)), ""))) {
              await $.wset([$t700, $t705, $t710, $t715, $t821], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              return L0.result;
            }
          }
        } finally {
          await $.stmt($.wcall([$t700, $t705, $t710, $t715, $t821], "Free", [], C));
        }
      }
    } catch ($t820) {
      $.rethrowControl($t820);
      if ($.excIs($t820, "Exception")) {
        await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        return L0.result;
      }
      else { throw $t820; }
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", "synshaaes", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["DataRawByteString", "Compress"], "kind": "function", "ptypes": [null, "boolean"]});
  U.method("THash128History", "Init", async function Init(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"size": $.copyArg(p0), "maxsize": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["size", "maxsize"]);
  await $.wset([$t700, $t705, $t710, $t715], "Depth", (await $.wv([$t700, $t705, $t710, $t715], "maxsize", { get: async () => L0["maxsize"], set: async (v) => { L0["maxsize"] = v; }, local: true }, false)), C);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Previous", C, false)), async ($t822) => { await $.wset([$t700, $t705, $t710, $t715], "Previous", $t822, C); }), (await $.wv([$t700, $t705, $t710, $t715], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false))], C)));
  await $.wset([$t700, $t705, $t710, $t715], "Count", 0, C);
  await $.wset([$t700, $t705, $t710, $t715], "Index", 0, C);
  return L0.result;
}, {"params": ["size", "maxsize"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.method("THash128History", "Exists", async function Exists(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["hash"]);
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Count", C, false)), 0))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  } else {
    await $.wset([$t700, $t705, $t710, $t715], "result", $.ge((await $.wcall([$t700, $t705, $t710, $t715], "Hash128Index", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Previous", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "Count", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "hash", { get: async () => L0["hash"], set: async (v) => { L0["hash"] = v; }, local: true }, true))], C)), 0), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["hash"], "kind": "function", "ptypes": ["THash128"]});
  U.method("THash128History", "Add", async function Add(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"hash": $.copyArg(p0), result: false, "n": 0};
  await $.fixArgs(L0, ["hash"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", $.lt((await $.wcall([$t700, $t705, $t710, $t715], "Hash128Index", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Previous", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "Count", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "hash", { get: async () => L0["hash"], set: async (v) => { L0["hash"] = v; }, local: true }, true))], C)), 0), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.not((await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
    return L0.result;
  }
  await $.mset((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Previous", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "Index", C, false))])), "b", (await $.wv([$t700, $t705, $t710, $t715], "hash", { get: async () => L0["hash"], set: async (v) => { L0["hash"] = v; }, local: true }, false)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Index", C, false)), async ($t823) => { await $.wset([$t700, $t705, $t710, $t715], "Index", $t823, C); })], C)));
  if ($.truthy($.ge((await $.wv([$t700, $t705, $t710, $t715], "Index", C, false)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "Previous", C, false))], C))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Index", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "Depth", C, false))))) {
      await $.wset([$t700, $t705, $t710, $t715], "Index", 0, C);
    } else {
      await $.wset([$t700, $t705, $t710, $t715], "n", (await $.wcall([$t700, $t705, $t710, $t715], "NextGrow", [(await $.wv([$t700, $t705, $t710, $t715], "Index", C, false))], C)), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
      if ($.truthy($.ge((await $.wv([$t700, $t705, $t710, $t715], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Depth", C, false))))) {
        await $.wset([$t700, $t705, $t710, $t715], "n", (await $.wv([$t700, $t705, $t710, $t715], "Depth", C, false)), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
      }
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetLength", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Previous", C, false)), async ($t824) => { await $.wset([$t700, $t705, $t710, $t715], "Previous", $t824, C); }), (await $.wv([$t700, $t705, $t710, $t715], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))], C)));
    }
  }
  if ($.truthy($.lt((await $.wv([$t700, $t705, $t710, $t715], "Count", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "Depth", C, false))))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Count", C, false)), async ($t825) => { await $.wset([$t700, $t705, $t710, $t715], "Count", $t825, C); })], C)));
  }
  return L0.result;
}, {"params": ["hash"], "kind": "function", "ptypes": ["THash128"]});
  U.func("read__h__hmac", async function read__h__hmac(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "keyfile": null, "instance": null, "key": null, "key2": null, "appsec": null};
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "__hmac", C, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "CryptProtectDataEntropy", C, true)), 32])));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetString", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false)), async ($t826) => { await $.wset([$t700, $t705, $t710, $t715], "appsec", $t826, { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "PAnsiChar", [(await $.wv([$t700, $t705, $t710, $t715], "CryptProtectDataEntropy", C, true))], C)), 32], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "PBKDF2_HMAC_SHA256", [(await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "ExeVersion", C, false)), "User")), 100, $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "instance", { get: async () => L0["instance"], set: async (v) => { L0["instance"] = v; }, local: true }, false)), async ($t827) => { await $.wset([$t700, $t705, $t710, $t715], "instance", $t827, { get: async () => L0["instance"], set: async (v) => { L0["instance"] = v; }, local: true }); })], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false))], C)));
  await $.wset([$t700, $t705, $t710, $t715], "appsec", (await $.wcall([$t700, $t705, $t710, $t715], "BinToBase64URI", [(await $.wv([$t700, $t705, $t710, $t715], "instance", { get: async () => L0["instance"], set: async (v) => { L0["instance"] = v; }, local: true }, true)), 15], C)), { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true });
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FormatString", ["%.syn-%", [(await $.wcall([$t700, $t705, $t710, $t715], "GetSystemPath", [(await $.wv([$t700, $t705, $t710, $t715], "spUserData", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false))], (await $.wcall([$t700, $t705, $t710, $t715], "string", [(await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))], C))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "SetString", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false)), async ($t828) => { await $.wset([$t700, $t705, $t710, $t715], "appsec", $t828, { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }); }), (await $.wcall([$t700, $t705, $t710, $t715], "PAnsiChar", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "instance", { get: async () => L0["instance"], set: async (v) => { L0["instance"] = v; }, local: true }, false)), [15]))], C)), 17], C)));
  try {
    await $.wset([$t700, $t705, $t710, $t715], "key", (await $.wcall([$t700, $t705, $t710, $t715], "StringFromFile", [(await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))], C)), { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), ""))) {
      try {
        await $.wset([$t700, $t705, $t710, $t715], "key2", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TAESCFB", C, false)), "SimpleEncrypt", [(await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])), { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true });
      } catch ($t829) {
        $.rethrowControl($t829);
        $.handled($t829);
        await $.wset([$t700, $t705, $t710, $t715], "key2", "", { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true });
      }
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false))], C)));
      await $.wset([$t700, $t705, $t710, $t715], "key", (await $.wv([$t700, $t705, $t710, $t715], "key2", { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true }, false)), { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true });
      if ($.truthy((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TAESPRNG", C, false)), "AFUnsplit", [(await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "__h", C, false)), async ($t830) => { await $.wset([$t700, $t705, $t710, $t715], "__h", $t830, C); }), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "__h", C, false))], C))])))) {
        return L0.result;
      }
    }
    if ($.truthy((await $.wcall([$t700, $t705, $t710, $t715], "FileExists", [(await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))], C)))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "chmod", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))], C)), (await $.or_((await $.wv([$t700, $t705, $t710, $t715], "S_IRUSR", C, false)), async () => (await $.wv([$t700, $t705, $t710, $t715], "S_IWUSR", C, false))))], C)));
    }
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "TAESPRNG", C, false)), "Main")), "FillRandom", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "__h", C, false)), async ($t831) => { await $.wset([$t700, $t705, $t710, $t715], "__h", $t831, C); })])));
    await $.wset([$t700, $t705, $t710, $t715], "key", (await $.mcall((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "TAESPRNG", C, false)), "Main")), "AFSplit", [(await $.wv([$t700, $t705, $t710, $t715], "__h", C, false)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "__h", C, false))], C)), 126])), { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "key2", (await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "key", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TAESCFB", C, false)), "SimpleEncrypt", [(await $.wv([$t700, $t705, $t710, $t715], "key2", { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])), { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true });
    if ($.truthy($.not((await $.wcall([$t700, $t705, $t710, $t715], "FileFromString", [(await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))], C))))) {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "ESynCrypto", C, false)), "CreateUTF8", ["Unable to write %", [(await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))]])));
    }
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "chmod", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "keyfile", { get: async () => L0["keyfile"], set: async (v) => { L0["keyfile"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "S_IRUSR", C, false))], C)));
  } finally {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "key", { get: async () => L0["key"], set: async (v) => { L0["key"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "key2", { get: async () => L0["key2"], set: async (v) => { L0["key2"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "appsec", { get: async () => L0["appsec"], set: async (v) => { L0["appsec"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "instance", { get: async () => L0["instance"], set: async (v) => { L0["instance"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CryptDataForCurrentUser", async function CryptDataForCurrentUser(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "appsecret": $.copyArg(p1), "encrypt": $.copyArg(p2), result: null, "hmac": null, "secret": null};
  await $.fixArgs(L0, ["data", "appsecret", "encrypt"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), ""))) {
    return L0.result;
  }
  if ($.truthy((await $.wcall([$t700, $t705, $t710, $t715], "IsZero", [(await $.wv([$t700, $t705, $t710, $t715], "__h", C, false))], C)))) {
    await $.stmt($.wcall([$t700, $t705, $t710, $t715], "read__h__hmac", [], C));
  }
  try {
    await $.wset([$t700, $t705, $t710, $t715], "hmac", (await $.wv([$t700, $t705, $t710, $t715], "__hmac", C, false)), { get: async () => L0["hmac"], set: async (v) => { L0["hmac"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "hmac", { get: async () => L0["hmac"], set: async (v) => { L0["hmac"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "AppSecret", { get: async () => L0["appsecret"], set: async (v) => { L0["appsecret"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "hmac", { get: async () => L0["hmac"], set: async (v) => { L0["hmac"] = v; }, local: true }, false)), "Update", [(await $.wv([$t700, $t705, $t710, $t715], "__h", C, false))])));
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "hmac", { get: async () => L0["hmac"], set: async (v) => { L0["hmac"] = v; }, local: true }, false)), "Done", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "secret", { get: async () => L0["secret"], set: async (v) => { L0["secret"] = v; }, local: true }, false)), async ($t832) => { await $.wset([$t700, $t705, $t710, $t715], "secret", $t832, { get: async () => L0["secret"], set: async (v) => { L0["secret"] = v; }, local: true }); })])));
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TAESCFBCRC", C, false)), "MACEncrypt", [(await $.wv([$t700, $t705, $t710, $t715], "Data", { get: async () => L0["data"], set: async (v) => { L0["data"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "secret", { get: async () => L0["secret"], set: async (v) => { L0["secret"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Encrypt", { get: async () => L0["encrypt"], set: async (v) => { L0["encrypt"] = v; }, local: true }, false))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  } finally {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillZero", [(await $.wv([$t700, $t705, $t710, $t715], "secret", { get: async () => L0["secret"], set: async (v) => { L0["secret"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Data", "AppSecret", "Encrypt"], "kind": "function", "ptypes": ["RawByteString", "RawByteString", "boolean"]});
  U.method("TProtocolNone", "ProcessHandshake", async function ProcessHandshake(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msgin": $.copyArg(p0), "msgout": $.asRef(p1), result: null};
  await $.fixArgs(L0, ["msgin"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "sprUnsupported", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["MsgIn", "MsgOut"], "kind": "function", "ptypes": ["RawUTF8", "RawUTF8"]});
  U.method("TProtocolNone", "Decrypt", async function Decrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aencrypted": $.copyArg(p0), "aplain": $.asRef(p1), result: null};
  await $.fixArgs(L0, ["aencrypted"]);
  await $.wset([$t700, $t705, $t710, $t715], "aPlain", (await $.wv([$t700, $t705, $t710, $t715], "aEncrypted", { get: async () => L0["aencrypted"], set: async (v) => { L0["aencrypted"] = v; }, local: true }, false)), { get: async () => await L0["aplain"].get(), set: async (v) => { await L0["aplain"].set(v); }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "sprSuccess", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["aEncrypted", "aPlain"], "kind": "function", "ptypes": ["RawByteString", "RawByteString"]});
  U.method("TProtocolNone", "Encrypt", async function Encrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aplain": $.copyArg(p0), "aencrypted": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["aplain"]);
  await $.wset([$t700, $t705, $t710, $t715], "aEncrypted", (await $.wv([$t700, $t705, $t710, $t715], "aPlain", { get: async () => L0["aplain"], set: async (v) => { L0["aplain"] = v; }, local: true }, false)), { get: async () => await L0["aencrypted"].get(), set: async (v) => { await L0["aencrypted"].set(v); }, local: true });
  return L0.result;
}, {"params": ["aPlain", "aEncrypted"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString"]});
  U.method("TProtocolNone", "Clone", async function Clone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "TProtocolNone", C, false)), "Create")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProtocolAES", "Create", async function Create(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aclass": $.copyArg(p0), "akey": $.copyArg(p1), "akeysize": $.copyArg(p2), "aivreplayattackcheck": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["aclass", "akey", "akeysize", "aivreplayattackcheck"]);
  await $.inherited(Self, "TProtocolAES", "Create", null, arguments);
  { const $t833 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))], (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "aClass", { get: async () => L0["aclass"], set: async (v) => { L0["aclass"] = v; }, local: true }, false)), "Create", [(await $.wv([$t700, $t705, $t710, $t715], "aKey", { get: async () => L0["akey"], set: async (v) => { L0["akey"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aKeySize", { get: async () => L0["akeysize"], set: async (v) => { L0["akeysize"] = v; }, local: true }, false))]))); if ($t833 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "fAES", $t833, C); } }
  await $.mset((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), "IVReplayAttackCheck", (await $.wv([$t700, $t705, $t710, $t715], "aIVReplayAttackCheck", { get: async () => L0["aivreplayattackcheck"], set: async (v) => { L0["aivreplayattackcheck"] = v; }, local: true }, false)));
  { const $t834 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "true", C, false))], (await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), "Clone"))); if ($t834 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "fAES", $t834, C); } }
  return L0.result;
}, {"params": ["aClass", "aKey", "aKeySize", "aIVReplayAttackCheck"], "kind": "constructor", "ptypes": ["TAESAbstractClass", null, "cardinal", "TAESIVReplayAttackCheck"]});
  U.method("TProtocolAES", "CreateFrom", async function CreateFrom(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aanother": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aanother"]);
  await $.inherited(Self, "TProtocolAES", "Create", null, arguments);
  { const $t835 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))], (await $.mv((await $.idx((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "aAnother", { get: async () => L0["aanother"], set: async (v) => { L0["aanother"] = v; }, local: true }, false)), "fAES")), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), "Clone"))); if ($t835 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "fAES", $t835, C); } }
  { const $t836 = await $.iset((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "true", C, false))], (await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), "Clone"))); if ($t836 !== undefined) { await $.wset([$t700, $t705, $t710, $t715], "fAES", $t836, C); } }
  return L0.result;
}, {"params": ["aAnother"], "kind": "constructor", "ptypes": ["TProtocolAES"]});
  U.method("TProtocolAES", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), "Free", []);
  await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])), "Free", []);
  await $.inherited(Self, "TProtocolAES", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TProtocolAES", "ProcessHandshake", async function ProcessHandshake(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"msgin": $.copyArg(p0), "msgout": $.asRef(p1), result: null};
  await $.fixArgs(L0, ["msgin"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "sprUnsupported", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["MsgIn", "MsgOut"], "kind": "function", "ptypes": ["RawUTF8", "RawUTF8"]});
  U.method("TProtocolAES", "Decrypt", async function Decrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aencrypted": $.copyArg(p0), "aplain": $.asRef(p1), result: null};
  await $.fixArgs(L0, ["aencrypted"]);
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "Lock", []);
  try {
    try {
      await $.wset([$t700, $t705, $t710, $t715], "aPlain", (await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), "DecryptPKCS7", [(await $.wv([$t700, $t705, $t710, $t715], "aEncrypted", { get: async () => L0["aencrypted"], set: async (v) => { L0["aencrypted"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "false", C, false))])), { get: async () => await L0["aplain"].get(), set: async (v) => { await L0["aplain"].set(v); }, local: true });
      if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "aPlain", { get: async () => await L0["aplain"].get(), set: async (v) => { await L0["aplain"].set(v); }, local: true }, false)), ""))) {
        await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "sprBadRequest", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      } else {
        await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "sprSuccess", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    } catch ($t837) {
      $.rethrowControl($t837);
      $.handled($t837);
      await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "sprInvalidMAC", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  } finally {
    await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "UnLock", []);
  }
  return L0.result;
}, {"params": ["aEncrypted", "aPlain"], "kind": "function", "ptypes": ["RawByteString", "RawByteString"]});
  U.method("TProtocolAES", "Encrypt", async function Encrypt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aplain": $.copyArg(p0), "aencrypted": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["aplain"]);
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "Lock", []);
  try {
    await $.wset([$t700, $t705, $t710, $t715], "aEncrypted", (await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "fAES", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])), "EncryptPKCS7", [(await $.wv([$t700, $t705, $t710, $t715], "aPlain", { get: async () => L0["aplain"], set: async (v) => { L0["aplain"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])), { get: async () => await L0["aencrypted"].get(), set: async (v) => { await L0["aencrypted"].set(v); }, local: true });
  } finally {
    await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSafe", C, false)), "UnLock", []);
  }
  return L0.result;
}, {"params": ["aPlain", "aEncrypted"], "kind": "procedure", "ptypes": ["RawByteString", "RawByteString"]});
  U.method("TProtocolAES", "Clone", async function Clone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mcall((await $.wcall([$t700, $t705, $t710, $t715], "TProtocolAESClass", [(await $.wv([$t700, $t705, $t710, $t715], "ClassType", C, false))], C)), "CreateFrom", [Self])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTAbstract", "Create", async function Create(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"aalgorithm": $.copyArg(p0), "aclaims": $.copyArg(p1), "aaudience": $.copyArg(p2), "aexpirationminutes": $.copyArg(p3), "aididentifier": $.copyArg(p4), "aidobfuscationkey": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["aalgorithm", "aclaims", "aaudience", "aexpirationminutes", "aididentifier", "aidobfuscationkey"]);
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "aAlgorithm", { get: async () => L0["aalgorithm"], set: async (v) => { L0["aalgorithm"] = v; }, local: true }, false)), ""))) {
    throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "EJWTException", C, false)), "CreateUTF8", ["%.Create(algo?)", [Self]])));
  }
  await $.inherited(Self, "TJWTAbstract", "Create", null, arguments);
  if ($.truthy($.ge((await $.wcall([$t700, $t705, $t710, $t715], "high", [(await $.wv([$t700, $t705, $t710, $t715], "aAudience", { get: async () => L0["aaudience"], set: async (v) => { L0["aaudience"] = v; }, local: true }, false))], C)), 0))) {
    await $.wset([$t700, $t705, $t710, $t715], "fAudience", (await $.wcall([$t700, $t705, $t710, $t715], "TRawUTF8DynArrayFrom", [(await $.wv([$t700, $t705, $t710, $t715], "aAudience", { get: async () => L0["aaudience"], set: async (v) => { L0["aaudience"] = v; }, local: true }, false))], C)), C);
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "include", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false)), async ($t838) => { await $.wset([$t700, $t705, $t710, $t715], "aClaims", $t838, { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "jrcAudience", C, false))], C)));
  }
  if ($.truthy($.gt((await $.wv([$t700, $t705, $t710, $t715], "aExpirationMinutes", { get: async () => L0["aexpirationminutes"], set: async (v) => { L0["aexpirationminutes"] = v; }, local: true }, false)), 0))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "include", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false)), async ($t839) => { await $.wset([$t700, $t705, $t710, $t715], "aClaims", $t839, { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false))], C)));
    await $.wset([$t700, $t705, $t710, $t715], "fExpirationSeconds", $.mul((await $.wv([$t700, $t705, $t710, $t715], "aExpirationMinutes", { get: async () => L0["aexpirationminutes"], set: async (v) => { L0["aexpirationminutes"] = v; }, local: true }, false)), 60), C);
  } else {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "exclude", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false)), async ($t840) => { await $.wset([$t700, $t705, $t710, $t715], "aClaims", $t840, { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false))], C)));
  }
  await $.wset([$t700, $t705, $t710, $t715], "fAlgorithm", (await $.wv([$t700, $t705, $t710, $t715], "aAlgorithm", { get: async () => L0["aalgorithm"], set: async (v) => { L0["aalgorithm"] = v; }, local: true }, false)), C);
  await $.wset([$t700, $t705, $t710, $t715], "fClaims", (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false)), C);
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcJwtID", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false))))) {
    await $.wset([$t700, $t705, $t710, $t715], "fIDGen", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TSynUniqueIdentifierGenerator", C, false)), "Create", [(await $.wv([$t700, $t705, $t710, $t715], "aIDIdentifier", { get: async () => L0["aididentifier"], set: async (v) => { L0["aididentifier"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aIDObfuscationKey", { get: async () => L0["aidobfuscationkey"], set: async (v) => { L0["aidobfuscationkey"] = v; }, local: true }, false))])), C);
  }
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "fHeader", C, false)), ""))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FormatUTF8", ["{\"alg\":\"%\",\"typ\":\"JWT\"}", [(await $.wv([$t700, $t705, $t710, $t715], "aAlgorithm", { get: async () => L0["aalgorithm"], set: async (v) => { L0["aalgorithm"] = v; }, local: true }, false))], (await $.wv([$t700, $t705, $t710, $t715], "fHeader", C, false))], C)));
  }
  await $.wset([$t700, $t705, $t710, $t715], "fHeaderB64", $.add((await $.wcall([$t700, $t705, $t710, $t715], "BinToBase64URI", [(await $.wv([$t700, $t705, $t710, $t715], "fHeader", C, false))], C)), "."), C);
  await $.wset([$t700, $t705, $t710, $t715], "fCacheResults", [(await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false))], C);
  return L0.result;
}, {"params": ["aAlgorithm", "aClaims", "aAudience", "aExpirationMinutes", "aIDIdentifier", "aIDObfuscationKey"], "kind": "constructor", "ptypes": ["RawUTF8", "TJWTClaims", null, "integer", "TSynUniqueIdentifierProcess", "RawUTF8"]});
  U.method("TJWTAbstract", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fIDGen", C, false)), "Free", []);
  await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), "Free", []);
  await $.inherited(Self, "TJWTAbstract", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TJWTAbstract", "Compute", async function Compute(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"datanamevalue": $.copyArg(p0), "issuer": $.copyArg(p1), "subject": $.copyArg(p2), "audience": $.copyArg(p3), "notbefore": $.copyArg(p4), "expirationminutes": $.copyArg(p5), "signature": $.copyArg(p6), result: null, "payload": null, "headpayload": null, "signat": null};
  await $.fixArgs(L0, ["datanamevalue", "issuer", "subject", "audience", "notbefore", "expirationminutes", "signature"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "payload", (await $.wcall([$t700, $t705, $t710, $t715], "PayloadToJSON", [(await $.wv([$t700, $t705, $t710, $t715], "DataNameValue", { get: async () => L0["datanamevalue"], set: async (v) => { L0["datanamevalue"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Issuer", { get: async () => L0["issuer"], set: async (v) => { L0["issuer"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Subject", { get: async () => L0["subject"], set: async (v) => { L0["subject"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Audience", { get: async () => L0["audience"], set: async (v) => { L0["audience"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "NotBefore", { get: async () => L0["notbefore"], set: async (v) => { L0["notbefore"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "ExpirationMinutes", { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true }, false))], C)), { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "headpayload", $.add((await $.wv([$t700, $t705, $t710, $t715], "fHeaderB64", C, false)), (await $.wcall([$t700, $t705, $t710, $t715], "BinToBase64URI", [(await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false))], C))), { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "signat", (await $.wcall([$t700, $t705, $t710, $t715], "ComputeSignature", [(await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false))], C)), { get: async () => L0["signat"], set: async (v) => { L0["signat"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "result", $.add($.add((await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false)), "."), (await $.wv([$t700, $t705, $t710, $t715], "signat", { get: async () => L0["signat"], set: async (v) => { L0["signat"] = v; }, local: true }, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.gt((await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "JWT_MAXSIZE", C, false))))) {
    throw $.raise((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "EJWTException", C, false)), "CreateUTF8", ["%.Compute oversize: len=%", [Self, (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C))]])));
  }
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false)), null))) {
    await $.wset([$t700, $t705, $t710, $t715], "Signature", (await $.wv([$t700, $t705, $t710, $t715], "signat", { get: async () => L0["signat"], set: async (v) => { L0["signat"] = v; }, local: true }, false)), { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["DataNameValue", "Issuer", "Subject", "Audience", "NotBefore", "ExpirationMinutes", "Signature"], "kind": "function", "ptypes": ["ArrayOfConst", "RawUTF8", "RawUTF8", "RawUTF8", "TDateTime", "integer", "PRawUTF8"]});
  U.method("TJWTAbstract", "ComputeAuthorizationHeader", async function ComputeAuthorizationHeader(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"datanamevalue": $.copyArg(p0), "issuer": $.copyArg(p1), "subject": $.copyArg(p2), "audience": $.copyArg(p3), "notbefore": $.copyArg(p4), "expirationminutes": $.copyArg(p5), result: null};
  await $.fixArgs(L0, ["datanamevalue", "issuer", "subject", "audience", "notbefore", "expirationminutes"]);
  if ($.truthy($.eq(Self, null))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  } else {
    await $.wset([$t700, $t705, $t710, $t715], "result", $.add("Bearer ", (await $.wcall([$t700, $t705, $t710, $t715], "Compute", [(await $.wv([$t700, $t705, $t710, $t715], "DataNameValue", { get: async () => L0["datanamevalue"], set: async (v) => { L0["datanamevalue"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Issuer", { get: async () => L0["issuer"], set: async (v) => { L0["issuer"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "Subject", { get: async () => L0["subject"], set: async (v) => { L0["subject"] = v; }, local: true }, false)), async ($t841) => { await $.wset([$t700, $t705, $t710, $t715], "Subject", $t841, { get: async () => L0["subject"], set: async (v) => { L0["subject"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "Audience", { get: async () => L0["audience"], set: async (v) => { L0["audience"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "NotBefore", { get: async () => L0["notbefore"], set: async (v) => { L0["notbefore"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "ExpirationMinutes", { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true }, false))], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["DataNameValue", "Issuer", "Subject", "Audience", "NotBefore", "ExpirationMinutes"], "kind": "function", "ptypes": ["ArrayOfConst", "RawUTF8", "RawUTF8", "RawUTF8", "TDateTime", "integer"]});
  U.method("TJWTAbstract", "PayloadToJSON", async function PayloadToJSON(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"datanamevalue": $.copyArg(p0), "issuer": $.copyArg(p1), "subject": $.copyArg(p2), "audience": $.copyArg(p3), "notbefore": $.copyArg(p4), "expirationminutes": $.copyArg(p5), result: null, "payload": null};
  await $.fixArgs(L0, ["datanamevalue", "issuer", "subject", "audience", "notbefore", "expirationminutes"]);
  L0["raisemissing"] = $.fn(async function RaiseMissing(p0) {
  const L1 = {"c": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["c"]);
  throw $.raise((await $.mcall((await $.v(C, "EJWTException")), "CreateUTF8", ["%.PayloadJSON: missing %", [Self, (await $.call(C, "ToText", [L1["c"]]))]])));
  return L1.result;
});
  await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "InitObject", [(await $.wv([$t700, $t705, $t710, $t715], "DataNameValue", { get: async () => L0["datanamevalue"], set: async (v) => { L0["datanamevalue"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "JSON_OPTIONS_FAST", C, false))])));
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcIssuer", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Issuer", { get: async () => L0["issuer"], set: async (v) => { L0["issuer"] = v; }, local: true }, false)), ""))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "RaiseMissing", [(await $.wv([$t700, $t705, $t710, $t715], "jrcIssuer", C, false))], { get: async () => L0["raisemissing"], set: async (v) => { L0["raisemissing"] = v; }, local: true })));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddValueFromText", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcIssuer", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "Issuer", { get: async () => L0["issuer"], set: async (v) => { L0["issuer"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])));
    }
  }
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcSubject", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Subject", { get: async () => L0["subject"], set: async (v) => { L0["subject"] = v; }, local: true }, false)), ""))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "RaiseMissing", [(await $.wv([$t700, $t705, $t710, $t715], "jrcSubject", C, false))], { get: async () => L0["raisemissing"], set: async (v) => { L0["raisemissing"] = v; }, local: true })));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddValueFromText", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcSubject", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "Subject", { get: async () => L0["subject"], set: async (v) => { L0["subject"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])));
    }
  }
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcAudience", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "Audience", { get: async () => L0["audience"], set: async (v) => { L0["audience"] = v; }, local: true }, false)), ""))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "RaiseMissing", [(await $.wv([$t700, $t705, $t710, $t715], "jrcAudience", C, false))], { get: async () => L0["raisemissing"], set: async (v) => { L0["raisemissing"] = v; }, local: true })));
    } else {
      if ($.truthy($.eq((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "Audience", { get: async () => L0["audience"], set: async (v) => { L0["audience"] = v; }, local: true }, false)), [1])), "["))) {
        await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddOrUpdateValue", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcAudience", C, false))])), (await $.wcall([$t700, $t705, $t710, $t715], "_JsonFast", [(await $.wv([$t700, $t705, $t710, $t715], "Audience", { get: async () => L0["audience"], set: async (v) => { L0["audience"] = v; }, local: true }, false))], C))])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddValueFromText", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcAudience", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "Audience", { get: async () => L0["audience"], set: async (v) => { L0["audience"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))])));
      }
    }
  }
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcNotBefore", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    if ($.truthy($.le((await $.wv([$t700, $t705, $t710, $t715], "NotBefore", { get: async () => L0["notbefore"], set: async (v) => { L0["notbefore"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddOrUpdateValue", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcNotBefore", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "UnixTimeUTC", C, false))])));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddOrUpdateValue", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcNotBefore", C, false))])), (await $.wcall([$t700, $t705, $t710, $t715], "DateTimeToUnixTime", [(await $.wv([$t700, $t705, $t710, $t715], "NotBefore", { get: async () => L0["notbefore"], set: async (v) => { L0["notbefore"] = v; }, local: true }, false))], C))])));
    }
  }
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcIssuedAt", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddOrUpdateValue", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcIssuedAt", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "UnixTimeUTC", C, false))])));
  }
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "ExpirationMinutes", { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t700, $t705, $t710, $t715], "ExpirationMinutes", (await $.wv([$t700, $t705, $t710, $t715], "fExpirationSeconds", C, false)), { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true });
    } else {
      await $.wset([$t700, $t705, $t710, $t715], "ExpirationMinutes", $.mul((await $.wv([$t700, $t705, $t710, $t715], "ExpirationMinutes", { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true }, false)), 60), { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true });
    }
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddOrUpdateValue", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false))])), $.add((await $.wv([$t700, $t705, $t710, $t715], "UnixTimeUTC", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "ExpirationMinutes", { get: async () => L0["expirationminutes"], set: async (v) => { L0["expirationminutes"] = v; }, local: true }, false)))])));
  }
  if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcJwtID", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fClaims", C, false))))) {
    if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "joNoJwtIDGenerate", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "fOptions", C, false))))) {
      if ($.truthy($.lt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "GetValueIndex", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcJwtID", C, false))]))])), 0))) {
        return L0.result;
      }
    } else {
      await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "AddValueFromText", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_CLAIMS_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "jrcJwtID", C, false))])), (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fIDGen", C, false)), "ToObfuscated", [(await $.mv((await $.wv([$t700, $t705, $t710, $t715], "fIDGen", C, false)), "ComputeNew"))]))])));
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), "ToJSON")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["DataNameValue", "Issuer", "Subject", "Audience", "NotBefore", "ExpirationMinutes"], "kind": "function", "ptypes": ["ArrayOfConst", "RawUTF8", "RawUTF8", "RawUTF8", "TDateTime", "cardinal"]});
  U.method("TJWTAbstract", "SetCacheTimeoutSeconds", async function SetCacheTimeoutSeconds(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.wset([$t700, $t705, $t710, $t715], "fCacheTimeoutSeconds", (await $.wv([$t700, $t705, $t710, $t715], "value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), C);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FreeAndNil", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), async ($t842) => { await $.wset([$t700, $t705, $t710, $t715], "fCache", $t842, C); })], C)));
  if ($.truthy((await $.and_(($.gt((await $.wv([$t700, $t705, $t710, $t715], "value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t700, $t705, $t710, $t715], "fCacheResults", C, false)), [])))))) {
    await $.wset([$t700, $t705, $t710, $t715], "fCache", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TSynDictionary", C, false)), "Create", [(await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TRawUTF8DynArray", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TJWTContentDynArray", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))])), C);
  }
  return L0.result;
}, {"params": ["value"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TJWTAbstract", "Verify", async function Verify(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"token": $.copyArg(p0), "jwt": $.asRef(p1), "excludedclaims": $.copyArg(p2), result: undefined, "headpayload": null, "signature": null, "fromcache": false};
  await $.fixArgs(L0, ["token", "excludedclaims"]);
  await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtNoToken", C, false)));
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), null)))))) {
    await $.wset([$t700, $t705, $t710, $t715], "fromcache", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["fromcache"], set: async (v) => { L0["fromcache"] = v; }, local: true });
  } else {
    await $.wset([$t700, $t705, $t710, $t715], "fromcache", (await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), "FindAndCopy", [(await $.wv([$t700, $t705, $t710, $t715], "Token", { get: async () => L0["token"], set: async (v) => { L0["token"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false))])), { get: async () => L0["fromcache"], set: async (v) => { L0["fromcache"] = v; }, local: true });
    await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), "DeleteDeprecated", []);
  }
  if ($.truthy($.not((await $.wv([$t700, $t705, $t710, $t715], "fromcache", { get: async () => L0["fromcache"], set: async (v) => { L0["fromcache"] = v; }, local: true }, false))))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Parse", [(await $.wv([$t700, $t705, $t710, $t715], "Token", { get: async () => L0["token"], set: async (v) => { L0["token"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), async ($t843) => { await $.wset([$t700, $t705, $t710, $t715], "JWT", $t843, { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false)), async ($t844) => { await $.wset([$t700, $t705, $t710, $t715], "headpayload", $t844, { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false)), async ($t845) => { await $.wset([$t700, $t705, $t710, $t715], "signature", $t845, { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }); }), (await $.wv([$t700, $t705, $t710, $t715], "ExcludedClaims", { get: async () => L0["excludedclaims"], set: async (v) => { L0["excludedclaims"] = v; }, local: true }, false))], C)));
  }
  if ($.truthy($.in_((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result")), [(await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "jwtNotBeforeFailed", C, false))]))) {
    if ($.truthy((await $.and_((await $.wcall([$t700, $t705, $t710, $t715], "CheckAgainstActualTimestamp", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), async ($t846) => { await $.wset([$t700, $t705, $t710, $t715], "JWT", $t846, { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }); })], C)), async () => $.not((await $.wv([$t700, $t705, $t710, $t715], "fromcache", { get: async () => L0["fromcache"], set: async (v) => { L0["fromcache"] = v; }, local: true }, false))))))) {
      await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "CheckSignature", [(await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), async ($t847) => { await $.wset([$t700, $t705, $t710, $t715], "JWT", $t847, { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }); })], C)));
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_($.not((await $.wv([$t700, $t705, $t710, $t715], "fromcache", { get: async () => L0["fromcache"], set: async (v) => { L0["fromcache"] = v; }, local: true }, false))), async () => ($.ne(Self, null)))), async () => ($.ne((await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), null)))), async () => ($.in_((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result")), (await $.wv([$t700, $t705, $t710, $t715], "fCacheResults", C, false)))))))) {
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fCache", C, false)), "Add", [(await $.wv([$t700, $t705, $t710, $t715], "Token", { get: async () => L0["token"], set: async (v) => { L0["token"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false))])));
  }
  return L0.result;
}, {"params": ["Token", "JWT", "ExcludedClaims"], "kind": "procedure", "ptypes": ["RawUTF8", "TJWTContent", "TJWTClaims"]});
  U.method("TJWTAbstract", "Verify", async function Verify(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"token": $.copyArg(p0), result: null, "jwt": $.rec("tjwtcontent")};
  await $.fixArgs(L0, ["token"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Verify", [(await $.wv([$t700, $t705, $t710, $t715], "Token", { get: async () => L0["token"], set: async (v) => { L0["token"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "jwt", { get: async () => L0["jwt"], set: async (v) => { L0["jwt"] = v; }, local: true }, false)), async ($t848) => { await $.wset([$t700, $t705, $t710, $t715], "jwt", $t848, { get: async () => L0["jwt"], set: async (v) => { L0["jwt"] = v; }, local: true }); })], { get: async () => L0["verify"], set: async (v) => { L0["verify"] = v; }, local: true })));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "jwt", { get: async () => L0["jwt"], set: async (v) => { L0["jwt"] = v; }, local: true }, false)), "result")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["Token"], "kind": "function", "ptypes": ["RawUTF8"]});
  U.method("TJWTAbstract", "CheckAgainstActualTimestamp", async function CheckAgainstActualTimestamp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"jwt": $.asRef(p0), result: false, "nowunix": 0, "unix": 0};
  if ($.truthy($.ne($.mul([(await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "jrcNotBefore", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "jrcIssuedAt", C, false))], (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "claims"))), []))) {
    await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    await $.wset([$t700, $t705, $t710, $t715], "nowunix", (await $.wv([$t700, $t705, $t710, $t715], "UnixTimeUTC", C, false)), { get: async () => L0["nowunix"], set: async (v) => { L0["nowunix"] = v; }, local: true });
    if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false)), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "claims"))))) {
      if ($.truthy((await $.or_($.not((await $.wcall([$t700, $t705, $t710, $t715], "ToCardinal", [(await $.idx((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "reg")), [(await $.wv([$t700, $t705, $t710, $t715], "jrcExpirationTime", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "unix", { get: async () => L0["unix"], set: async (v) => { L0["unix"] = v; }, local: true }, false))], C))), async () => ($.gt((await $.wv([$t700, $t705, $t710, $t715], "nowunix", { get: async () => L0["nowunix"], set: async (v) => { L0["nowunix"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "unix", { get: async () => L0["unix"], set: async (v) => { L0["unix"] = v; }, local: true }, false)))))))) {
        await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtExpired", C, false)));
        return L0.result;
      }
    }
    if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcNotBefore", C, false)), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "claims"))))) {
      if ($.truthy((await $.or_($.not((await $.wcall([$t700, $t705, $t710, $t715], "ToCardinal", [(await $.idx((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "reg")), [(await $.wv([$t700, $t705, $t710, $t715], "jrcNotBefore", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "unix", { get: async () => L0["unix"], set: async (v) => { L0["unix"] = v; }, local: true }, false))], C))), async () => ($.lt((await $.wv([$t700, $t705, $t710, $t715], "nowunix", { get: async () => L0["nowunix"], set: async (v) => { L0["nowunix"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "unix", { get: async () => L0["unix"], set: async (v) => { L0["unix"] = v; }, local: true }, false)))))))) {
        await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtNotBeforeFailed", C, false)));
        return L0.result;
      }
    }
    if ($.truthy($.in_((await $.wv([$t700, $t705, $t710, $t715], "jrcIssuedAt", C, false)), (await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "claims"))))) {
      if ($.truthy((await $.or_($.not((await $.wcall([$t700, $t705, $t710, $t715], "ToCardinal", [(await $.idx((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "reg")), [(await $.wv([$t700, $t705, $t710, $t715], "jrcIssuedAt", C, false))])), (await $.wv([$t700, $t705, $t710, $t715], "unix", { get: async () => L0["unix"], set: async (v) => { L0["unix"] = v; }, local: true }, false))], C))), async () => ($.gt((await $.wv([$t700, $t705, $t710, $t715], "unix", { get: async () => L0["unix"], set: async (v) => { L0["unix"] = v; }, local: true }, false)), $.add((await $.wv([$t700, $t705, $t710, $t715], "nowunix", { get: async () => L0["nowunix"], set: async (v) => { L0["nowunix"] = v; }, local: true }, false)), 60))))))) {
        await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtInvalidIssuedAt", C, false)));
        return L0.result;
      }
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false)));
  return L0.result;
}, {"params": ["JWT"], "kind": "function", "ptypes": ["TJWTContent"]});
  U.method("TJWTAbstract", "Parse", async function Parse() { return $.notPorted("TJWTAbstract.Parse", "cannot assign to call"); }, {"params": ["Token", "JWT", "headpayload", "signature", "excluded"], "kind": "procedure", "ptypes": ["RawUTF8", "TJWTContent", "RawUTF8", "RawByteString", "TJWTClaims"], "error": "cannot assign to call", "src": "procedure TJWTAbstract.Parse(const Token: RawUTF8; var JWT: TJWTContent;\n  out headpayload: RawUTF8; out signature: RawByteString; excluded: TJWTClaims);\nvar payloadend,j,toklen,c,cap,headerlen,len,a: integer;\n    P: PUTF8Char;\n    N,V: PUTF8Char;\n    wasString: boolean;\n    EndOfObject: AnsiChar;\n    claim: TJWTClaim;\n    requiredclaims: TJWTClaims;\n    id: TSynUniqueIdentifierBits;\n    value: variant;\n    payload: RawUTF8;\n    head: array[0..1] of TValuePUTF8Char;\n    aud: TDocVariantData;\n    tok: PAnsiChar absolute Token;\nbegin\n  \n  Finalize(JWT.reg);\n  JWT.data.InitFast(0,dvObject); \n  byte(JWT.claims) := 0;\n  word(JWT.audience) := 0;\n  toklen := length(Token);\n  if (toklen=0) or (self=nil) then begin\n    JWT.result := jwtNoToken;\n    exit;\n  end;\n  \n  JWT.result := jwtInvalidAlgorithm;\n  if joHeaderParse in fOptions then begin \n    headerlen := PosExChar('.',Token);\n    if (headerlen=0) or (headerlen>512) then\n      exit;\n    Base64URIToBin(tok,headerlen-1,signature);\n    JSONDecode(pointer(signature),['alg','typ'],@head);\n    if not head[0].Idem(fAlgorithm) or\n       ((head[1].Value<>nil) and not head[1].Idem('JWT')) then\n      exit;\n  end else begin \n    headerlen := length(fHeaderB64);\n    if (toklen<=headerlen) or not CompareMem(pointer(fHeaderB64),tok,headerlen) then\n      exit;\n  end;\n  \n  JWT.result := jwtWrongFormat;\n  if toklen>JWT_MAXSIZE Then\n    exit;\n  payloadend := PosEx('.',Token,headerlen+1);\n  if (payloadend=0) or (payloadend-headerlen>2700) then\n    exit;\n  Base64URIToBin(tok+payloadend,toklen-payloadend,signature);\n  if (signature='') and (payloadend<>toklen) then\n    exit;\n  JWT.result := jwtInvalidPayload;\n  Base64URIToBin(tok+headerlen,payloadend-headerlen-1,RawByteString(payload));\n  if payload='' then\n    exit;\n  \n  P := GotoNextNotSpace(pointer(payload));\n  if P^<>'{' then\n    exit;\n  P := GotoNextNotSpace(P+1);\n  cap := JSONObjectPropCount(P);\n  if cap<0 then\n    exit;\n  requiredclaims := fClaims - excluded;\n  if cap>0 then\n  repeat\n    N := GetJSONPropName(P);\n    if N=nil then\n      exit;\n    V := GetJSONFieldOrObjectOrArray(P,@wasstring,@EndOfObject,true);\n    len := StrLen(N);\n    if (len=3) and (V<>nil) then begin\n      c := PInteger(N)^;\n      for claim := low(claim) to high(claim) do\n        if PInteger(JWT_CLAIMS_TEXT[claim])^=c then begin\n          if V^=#0 then\n            exit;\n          include(JWT.claims,claim);\n          if not(claim in fClaims) and not(joAllowUnexpectedClaims in fOptions) then begin\n            JWT.result := jwtUnexpectedClaim;\n            exit;\n          end;\n          FastSetString(JWT.reg[claim],V,StrLen(V));\n          if claim in requiredclaims then\n          case claim of\n          jrcJwtID:\n            if not(joNoJwtIDCheck in fOptions) then\n              if not fIDGen.FromObfuscated(JWT.reg[jrcJwtID],id.Value) or\n                 (id.CreateTimeUnix<UNIXTIME_MINIMAL) then begin\n                JWT.result := jwtInvalidID;\n                exit;\n              end;\n          jrcAudience:\n            if JWT.reg[jrcAudience][1]='[' then begin\n              aud.InitJSON(JWT.reg[jrcAudience],JSON_OPTIONS_FAST);\n              if aud.Count=0 then\n                exit;\n              for j := 0 to aud.Count-1 do begin\n                a := FindRawUTF8(fAudience,VariantToUTF8(aud.Values[j]));\n                if a<0 then begin\n                  JWT.result := jwtUnknownAudience;\n                  if not (joAllowUnexpectedAudience in fOptions) then\n                    exit;\n                end else\n                  include(JWT.audience,a);\n              end;\n              aud.Clear;\n            end else begin\n              a := FindRawUTF8(fAudience,JWT.reg[jrcAudience]);\n              if a<0 then begin\n                JWT.result := jwtUnknownAudience;\n                if not (joAllowUnexpectedAudience in fOptions) then\n                  exit;\n              end else\n                include(JWT.audience,a);\n            end;\n          end;\n          len := 0; \n          dec(cap);\n          break;\n        end;\n      if len=0 then\n        continue;\n    end;\n    GetVariantFromJSON(V,wasString,value,@JSON_OPTIONS[true],joDoubleInData in fOptions);\n    if JWT.data.Count=0 then\n      JWT.data.Capacity := cap;\n    JWT.data.AddValue(N,len,value)\n  until (EndOfObject='}') or (P=nil);\n  if JWT.data.Count>0 then\n    JWT.data.Capacity := JWT.data.Count;\n  if requiredclaims-JWT.claims<>[] then\n    JWT.result := jwtMissingClaim else begin\n    FastSetString(headpayload,tok,payloadend-1);\n    JWT.result := jwtValid;\n  end;\nend;"});
  U.method("TJWTAbstract", "VerifyAuthorizationHeader", async function VerifyAuthorizationHeader(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"httpauthorizationheader": $.copyArg(p0), "jwt": $.asRef(p1), result: false};
  await $.fixArgs(L0, ["httpauthorizationheader"]);
  if ($.truthy((await $.or_(($.gt((await $.wcall([$t700, $t705, $t710, $t715], "cardinal", [$.sub((await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "HttpAuthorizationHeader", { get: async () => L0["httpauthorizationheader"], set: async (v) => { L0["httpauthorizationheader"] = v; }, local: true }, false))], C)), 10)], C)), 4096)), async () => $.not((await $.wcall([$t700, $t705, $t710, $t715], "IdemPChar", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "HttpAuthorizationHeader", { get: async () => L0["httpauthorizationheader"], set: async (v) => { L0["httpauthorizationheader"] = v; }, local: true }, false))], C)), "BEARER "], C))))))) {
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtWrongFormat", C, false)));
  } else {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "Verify", [(await $.wcall([$t700, $t705, $t710, $t715], "copy", [(await $.wv([$t700, $t705, $t710, $t715], "HttpAuthorizationHeader", { get: async () => L0["httpauthorizationheader"], set: async (v) => { L0["httpauthorizationheader"] = v; }, local: true }, false)), 8, (await $.wv([$t700, $t705, $t710, $t715], "maxInt", C, false))], C)), $.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), async ($t849) => { await $.wset([$t700, $t705, $t710, $t715], "JWT", $t849, { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }); })], C)));
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", $.eq((await $.mv((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result")), (await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["HttpAuthorizationHeader", "JWT"], "kind": "function", "ptypes": ["RawUTF8", "TJWTContent"]});
  U.method("TJWTAbstract", "VerifyPayload", async function VerifyPayload(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
  const C = $.chain(Self, U);
  const L0 = {"token": $.copyArg(p0), "expectedsubject": $.copyArg(p1), "expectedissuer": $.copyArg(p2), "expectedaudience": $.copyArg(p3), "expiration": $.copyArg(p4), "signature": $.copyArg(p5), "payload": $.copyArg(p6), "ignoretime": $.copyArg(p7), "notbeforedelta": $.copyArg(p8), result: null, "p": null, "b": null, "v": $.sarr(), "now": 0, "time": 0, "text": null};
  await $.fixArgs(L0, ["token", "expectedsubject", "expectedissuer", "expectedaudience", "expiration", "signature", "payload", "ignoretime", "notbeforedelta"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtInvalidAlgorithm", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "B", (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "Token", { get: async () => L0["token"], set: async (v) => { L0["token"] = v; }, local: true }, false))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "P", (await $.wcall([$t700, $t705, $t710, $t715], "PosChar", [(await $.wv([$t700, $t705, $t710, $t715], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "."], C)), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), null))) {
    return L0.result;
  }
  if ($.truthy($.ne(Self, (await $.wv([$t700, $t705, $t710, $t715], "TJWTAbstract", C, false))))) {
    await $.wset([$t700, $t705, $t710, $t715], "text", (await $.wcall([$t700, $t705, $t710, $t715], "Base64URIToBin", [(await $.wcall([$t700, $t705, $t710, $t715], "PAnsiChar", [(await $.wv([$t700, $t705, $t710, $t715], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)), $.sub((await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)))], C)), { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
    if ($.truthy($.not((await $.wcall([$t700, $t705, $t710, $t715], "IdemPropNameU", [(await $.wcall([$t700, $t705, $t710, $t715], "copy", [(await $.wcall([$t700, $t705, $t710, $t715], "ToText", [Self], C)), 5, 10], C)), (await $.wcall([$t700, $t705, $t710, $t715], "JSONDecode", [(await $.wv([$t700, $t705, $t710, $t715], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false)), "alg"], C))], C))))) {
      return L0.result;
    }
  }
  await $.wset([$t700, $t705, $t710, $t715], "B", $.add((await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), 1), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "P", (await $.wcall([$t700, $t705, $t710, $t715], "PosChar", [(await $.wv([$t700, $t705, $t710, $t715], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "."], C)), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtInvalidSignature", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), null))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtInvalidPayload", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  await $.wset([$t700, $t705, $t710, $t715], "text", (await $.wcall([$t700, $t705, $t710, $t715], "Base64URIToBin", [(await $.wcall([$t700, $t705, $t710, $t715], "PAnsiChar", [(await $.wv([$t700, $t705, $t710, $t715], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)), $.sub((await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)))], C)), { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false)), ""))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), null))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "_Json", [(await $.wv([$t700, $t705, $t710, $t715], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "Payload", { get: async () => L0["payload"], set: async (v) => { L0["payload"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "JSON_OPTIONS_FAST", C, false))], C)));
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "JSONDecode", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false))], C)), ["iss", "aud", "exp", "nbf", "sub"], (await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "true", C, false))], C)));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtUnexpectedClaim", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy((await $.or_(((await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "ExpectedSubject", { get: async () => L0["expectedsubject"], set: async (v) => { L0["expectedsubject"] = v; }, local: true }, false)), "")), async () => $.not((await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [4])), "Idem", [(await $.wv([$t700, $t705, $t710, $t715], "ExpectedSubject", { get: async () => L0["expectedsubject"], set: async (v) => { L0["expectedsubject"] = v; }, local: true }, false))])))))), async () => ((await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "ExpectedIssuer", { get: async () => L0["expectedissuer"], set: async (v) => { L0["expectedissuer"] = v; }, local: true }, false)), "")), async () => $.not((await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [0])), "Idem", [(await $.wv([$t700, $t705, $t710, $t715], "ExpectedIssuer", { get: async () => L0["expectedissuer"], set: async (v) => { L0["expectedissuer"] = v; }, local: true }, false))])))))))))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtUnknownAudience", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  if ($.truthy((await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "ExpectedAudience", { get: async () => L0["expectedaudience"], set: async (v) => { L0["expectedaudience"] = v; }, local: true }, false)), "")), async () => $.not((await $.mcall((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [1])), "Idem", [(await $.wv([$t700, $t705, $t710, $t715], "ExpectedAudience", { get: async () => L0["expectedaudience"], set: async (v) => { L0["expectedaudience"] = v; }, local: true }, false))]))))))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Expiration", { get: async () => L0["expiration"], set: async (v) => { L0["expiration"] = v; }, local: true }, false)), null))) {
    await $.wset([$t700, $t705, $t710, $t715], "Expiration", 0, { get: async () => L0["expiration"], set: async (v) => { L0["expiration"] = v; }, local: true });
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [2])), "Value")), null)), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [3])), "Value")), null)))))) {
    await $.wset([$t700, $t705, $t710, $t715], "now", (await $.wv([$t700, $t705, $t710, $t715], "UnixTimeUTC", C, false)), { get: async () => L0["now"], set: async (v) => { L0["now"] = v; }, local: true });
    if ($.truthy($.ne((await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [2])), "Value")), null))) {
      await $.wset([$t700, $t705, $t710, $t715], "time", (await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [2])), "ToCardinal")), { get: async () => L0["time"], set: async (v) => { L0["time"] = v; }, local: true });
      await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtExpired", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy((await $.and_($.not((await $.wv([$t700, $t705, $t710, $t715], "IgnoreTime", { get: async () => L0["ignoretime"], set: async (v) => { L0["ignoretime"] = v; }, local: true }, false))), async () => ($.gt((await $.wv([$t700, $t705, $t710, $t715], "now", { get: async () => L0["now"], set: async (v) => { L0["now"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "time", { get: async () => L0["time"], set: async (v) => { L0["time"] = v; }, local: true }, false)))))))) {
        return L0.result;
      }
      if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Expiration", { get: async () => L0["expiration"], set: async (v) => { L0["expiration"] = v; }, local: true }, false)), null))) {
        await $.wset([$t700, $t705, $t710, $t715], "Expiration", (await $.wv([$t700, $t705, $t710, $t715], "time", { get: async () => L0["time"], set: async (v) => { L0["time"] = v; }, local: true }, false)), { get: async () => L0["expiration"], set: async (v) => { L0["expiration"] = v; }, local: true });
      }
    }
    if ($.truthy((await $.and_($.not((await $.wv([$t700, $t705, $t710, $t715], "IgnoreTime", { get: async () => L0["ignoretime"], set: async (v) => { L0["ignoretime"] = v; }, local: true }, false))), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [3])), "Value")), null)))))) {
      await $.wset([$t700, $t705, $t710, $t715], "time", (await $.mv((await $.idx((await $.wv([$t700, $t705, $t710, $t715], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), [3])), "ToCardinal")), { get: async () => L0["time"], set: async (v) => { L0["time"] = v; }, local: true });
      await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtNotBeforeFailed", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy((await $.or_(($.eq((await $.wv([$t700, $t705, $t710, $t715], "time", { get: async () => L0["time"], set: async (v) => { L0["time"] = v; }, local: true }, false)), 0)), async () => ($.lt($.add((await $.wv([$t700, $t705, $t710, $t715], "now", { get: async () => L0["now"], set: async (v) => { L0["now"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "PtrUInt", [(await $.wv([$t700, $t705, $t710, $t715], "NotBeforeDelta", { get: async () => L0["notbeforedelta"], set: async (v) => { L0["notbeforedelta"] = v; }, local: true }, false))], C))), (await $.wv([$t700, $t705, $t710, $t715], "time", { get: async () => L0["time"], set: async (v) => { L0["time"] = v; }, local: true }, false)))))))) {
        return L0.result;
      }
    }
  }
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "inc", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), async ($t850) => { await $.wset([$t700, $t705, $t710, $t715], "P", $t850, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }); })], C)));
  if ($.truthy($.ne((await $.wv([$t700, $t705, $t710, $t715], "Signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false)), null))) {
    await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FastSetString", [(await $.wv([$t700, $t705, $t710, $t715], "Signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t700, $t705, $t710, $t715], "StrLen", [(await $.wv([$t700, $t705, $t710, $t715], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C))], C)));
  }
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["Token", "ExpectedSubject", "ExpectedIssuer", "ExpectedAudience", "Expiration", "Signature", "Payload", "IgnoreTime", "NotBeforeDelta"], "kind": "function", "ptypes": ["RawUTF8", "RawUTF8", "RawUTF8", "RawUTF8", "PUnixTime", "PRawUTF8", "PVariant", "boolean", "TUnixTime"]});
  U.method("TJWTNone", "Create", async function Create(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"aclaims": $.copyArg(p0), "aaudience": $.copyArg(p1), "aexpirationminutes": $.copyArg(p2), "aididentifier": $.copyArg(p3), "aidobfuscationkey": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["aclaims", "aaudience", "aexpirationminutes", "aididentifier", "aidobfuscationkey"]);
  await $.wset([$t700, $t705, $t710, $t715], "fHeader", "{\"alg\":\"none\"}", C);
  await $.inherited(Self, "TJWTNone", "Create", ["none", (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aAudience", { get: async () => L0["aaudience"], set: async (v) => { L0["aaudience"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aExpirationMinutes", { get: async () => L0["aexpirationminutes"], set: async (v) => { L0["aexpirationminutes"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aIDIdentifier", { get: async () => L0["aididentifier"], set: async (v) => { L0["aididentifier"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aIDObfuscationKey", { get: async () => L0["aidobfuscationkey"], set: async (v) => { L0["aidobfuscationkey"] = v; }, local: true }, false))], arguments);
  return L0.result;
}, {"params": ["aClaims", "aAudience", "aExpirationMinutes", "aIDIdentifier", "aIDObfuscationKey"], "kind": "constructor", "ptypes": ["TJWTClaims", null, "integer", "TSynUniqueIdentifierProcess", "RawUTF8"]});
  U.method("TJWTNone", "CheckSignature", async function CheckSignature(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"headpayload": $.copyArg(p0), "signature": $.copyArg(p1), "jwt": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["headpayload", "signature"]);
  if ($.truthy($.eq((await $.wv([$t700, $t705, $t710, $t715], "signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false)), ""))) {
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false)));
  } else {
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtInvalidSignature", C, false)));
  }
  return L0.result;
}, {"params": ["headpayload", "signature", "JWT"], "kind": "procedure", "ptypes": ["RawUTF8", "RawByteString", "TJWTContent"]});
  U.method("TJWTNone", "ComputeSignature", async function ComputeSignature(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"headpayload": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["headpayload"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", "", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["headpayload"], "kind": "function", "ptypes": ["RawUTF8"]});
  U.method("TJWTSynSignerAbstract", "Create", async function Create(Self, p0, p1, p2, p3, p4, p5, p6, p7) {
  const C = $.chain(Self, U);
  const L0 = {"asecret": $.copyArg(p0), "asecretpbkdf2rounds": $.copyArg(p1), "aclaims": $.copyArg(p2), "aaudience": $.copyArg(p3), "aexpirationminutes": $.copyArg(p4), "aididentifier": $.copyArg(p5), "aidobfuscationkey": $.copyArg(p6), "apbkdf2secret": $.copyArg(p7), result: undefined, "algo": null};
  await $.fixArgs(L0, ["asecret", "asecretpbkdf2rounds", "aclaims", "aaudience", "aexpirationminutes", "aididentifier", "aidobfuscationkey", "apbkdf2secret"]);
  await $.wset([$t700, $t705, $t710, $t715], "algo", (await $.wv([$t700, $t705, $t710, $t715], "GetAlgo", C, false)), { get: async () => L0["algo"], set: async (v) => { L0["algo"] = v; }, local: true });
  await $.inherited(Self, "TJWTSynSignerAbstract", "Create", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "JWT_TEXT", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "algo", { get: async () => L0["algo"], set: async (v) => { L0["algo"] = v; }, local: true }, false))])), (await $.wv([$t700, $t705, $t710, $t715], "aClaims", { get: async () => L0["aclaims"], set: async (v) => { L0["aclaims"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aAudience", { get: async () => L0["aaudience"], set: async (v) => { L0["aaudience"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aExpirationMinutes", { get: async () => L0["aexpirationminutes"], set: async (v) => { L0["aexpirationminutes"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aIDIdentifier", { get: async () => L0["aididentifier"], set: async (v) => { L0["aididentifier"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aIDObfuscationKey", { get: async () => L0["aidobfuscationkey"], set: async (v) => { L0["aidobfuscationkey"] = v; }, local: true }, false))], arguments);
  if ($.truthy((await $.and_(($.ne((await $.wv([$t700, $t705, $t710, $t715], "aSecret", { get: async () => L0["asecret"], set: async (v) => { L0["asecret"] = v; }, local: true }, false)), "")), async () => ($.gt((await $.wv([$t700, $t705, $t710, $t715], "aSecretPBKDF2Rounds", { get: async () => L0["asecretpbkdf2rounds"], set: async (v) => { L0["asecretpbkdf2rounds"] = v; }, local: true }, false)), 0)))))) {
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSignPrepared", C, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "algo", { get: async () => L0["algo"], set: async (v) => { L0["algo"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aSecret", { get: async () => L0["asecret"], set: async (v) => { L0["asecret"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "fHeaderB64", C, false)), (await $.wv([$t700, $t705, $t710, $t715], "aSecretPBKDF2Rounds", { get: async () => L0["asecretpbkdf2rounds"], set: async (v) => { L0["asecretpbkdf2rounds"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aPBKDF2Secret", { get: async () => L0["apbkdf2secret"], set: async (v) => { L0["apbkdf2secret"] = v; }, local: true }, false))])));
  } else {
    await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "fSignPrepared", C, false)), "Init", [(await $.wv([$t700, $t705, $t710, $t715], "algo", { get: async () => L0["algo"], set: async (v) => { L0["algo"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "aSecret", { get: async () => L0["asecret"], set: async (v) => { L0["asecret"] = v; }, local: true }, false))])));
  }
  return L0.result;
}, {"params": ["aSecret", "aSecretPBKDF2Rounds", "aClaims", "aAudience", "aExpirationMinutes", "aIDIdentifier", "aIDObfuscationKey", "aPBKDF2Secret"], "kind": "constructor", "ptypes": ["RawUTF8", "integer", "TJWTClaims", null, "integer", "TSynUniqueIdentifierProcess", "RawUTF8", "PHash512Rec"]});
  U.method("TJWTSynSignerAbstract", "CheckSignature", async function CheckSignature(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"headpayload": $.copyArg(p0), "signature": $.copyArg(p1), "jwt": $.asRef(p2), result: undefined, "signer": null, "temp": null};
  await $.fixArgs(L0, ["headpayload", "signature"]);
  await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtInvalidSignature", C, false)));
  if ($.truthy($.ne((await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "SignatureSize", C, false))))) {
    return L0.result;
  }
  await $.wset([$t700, $t705, $t710, $t715], "signer", (await $.wv([$t700, $t705, $t710, $t715], "fSignPrepared", C, false)), { get: async () => L0["signer"], set: async (v) => { L0["signer"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "signer", { get: async () => L0["signer"], set: async (v) => { L0["signer"] = v; }, local: true }, false)), "Update", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false))], C))])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "signer", { get: async () => L0["signer"], set: async (v) => { L0["signer"] = v; }, local: true }, false)), "Final", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), async ($t851) => { await $.wset([$t700, $t705, $t710, $t715], "temp", $t851, { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }); })])));
  if ($.truthy((await $.wcall([$t700, $t705, $t710, $t715], "CompareMem", [(await $.wv([$t700, $t705, $t710, $t715], "temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, true)), (await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "signature", { get: async () => L0["signature"], set: async (v) => { L0["signature"] = v; }, local: true }, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "SignatureSize", C, false))], C)))) {
    await $.mset((await $.wv([$t700, $t705, $t710, $t715], "JWT", { get: async () => await L0["jwt"].get(), set: async (v) => { await L0["jwt"].set(v); }, local: true }, false)), "result", (await $.wv([$t700, $t705, $t710, $t715], "jwtValid", C, false)));
  }
  return L0.result;
}, {"params": ["headpayload", "signature", "JWT"], "kind": "procedure", "ptypes": ["RawUTF8", "RawByteString", "TJWTContent"]});
  U.method("TJWTSynSignerAbstract", "ComputeSignature", async function ComputeSignature(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"headpayload": $.copyArg(p0), result: null, "signer": null, "temp": null};
  await $.fixArgs(L0, ["headpayload"]);
  await $.wset([$t700, $t705, $t710, $t715], "signer", (await $.wv([$t700, $t705, $t710, $t715], "fSignPrepared", C, false)), { get: async () => L0["signer"], set: async (v) => { L0["signer"] = v; }, local: true });
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "signer", { get: async () => L0["signer"], set: async (v) => { L0["signer"] = v; }, local: true }, false)), "Update", [(await $.wcall([$t700, $t705, $t710, $t715], "pointer", [(await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "length", [(await $.wv([$t700, $t705, $t710, $t715], "headpayload", { get: async () => L0["headpayload"], set: async (v) => { L0["headpayload"] = v; }, local: true }, false))], C))])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "signer", { get: async () => L0["signer"], set: async (v) => { L0["signer"] = v; }, local: true }, false)), "Final", [$.ref(async () => (await $.wv([$t700, $t705, $t710, $t715], "temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), async ($t852) => { await $.wset([$t700, $t705, $t710, $t715], "temp", $t852, { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }); })])));
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wcall([$t700, $t705, $t710, $t715], "BinToBase64URI", [(await $.wv([$t700, $t705, $t710, $t715], "temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, true)), (await $.wv([$t700, $t705, $t710, $t715], "SignatureSize", C, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["headpayload"], "kind": "function", "ptypes": ["RawUTF8"]});
  U.method("TJWTSynSignerAbstract", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "FillCharFast", [(await $.wv([$t700, $t705, $t710, $t715], "fSignPrepared", C, false)), (await $.wcall([$t700, $t705, $t710, $t715], "SizeOf", [(await $.wv([$t700, $t705, $t710, $t715], "fSignPrepared", C, false))], C)), 0], C)));
  await $.inherited(Self, "TJWTSynSignerAbstract", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TJWTHS256", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha256", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTHS384", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha384", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTHS512", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha512", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTS3224", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha3224", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTS3256", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha3256", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTS3384", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha3384", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTS3512", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha3512", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTS3S128", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha3S128", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TJWTS3S256", "GetAlgo", async function GetAlgo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.wv([$t700, $t705, $t710, $t715], "saSha3S256", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"res": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["res"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "_TJWTResult", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["res"], "kind": "function", "ptypes": ["TJWTResult"]});
  U.func("ToCaption", async function ToCaption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"res": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["res"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "GetCaptionFromTrimmed", [(await $.idx((await $.wv([$t700, $t705, $t710, $t715], "_TJWTResult", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false))])), (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["res"], "kind": "function", "ptypes": ["TJWTResult"]});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"claim": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["claim"]);
  await $.wset([$t700, $t705, $t710, $t715], "result", (await $.idx((await $.wv([$t700, $t705, $t710, $t715], "_TJWTClaim", C, false)), [(await $.wv([$t700, $t705, $t710, $t715], "claim", { get: async () => L0["claim"], set: async (v) => { L0["claim"] = v; }, local: true }, false))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  return L0.result;
}, {"params": ["claim"], "kind": "function", "ptypes": ["TJWTClaim"]});
  U.func("ToText", async function ToText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"claims": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["claims"]);
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "GetSetNameShort", [(await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TJWTClaims", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "claims", { get: async () => L0["claims"], set: async (v) => { L0["claims"] = v; }, local: true }, false)), (await $.wv([$t700, $t705, $t710, $t715], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))], C)));
  return L0.result;
}, {"params": ["claims"], "kind": "function", "ptypes": ["TJWTClaims"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.wcall([$t700, $t705, $t710, $t715], "ComputeAesStaticTables", [], C));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TTextWriter", C, false)), "RegisterCustomJSONSerializerFromTextSimpleType", [(await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TSignAlgo", C, false))], C))])));
  await $.stmt((await $.mcall((await $.wv([$t700, $t705, $t710, $t715], "TTextWriter", C, false)), "RegisterCustomJSONSerializerFromText", [(await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TSynSignerParams", C, false))], C)), "algo:TSignAlgo secret,salt:RawUTF8 rounds:integer"])));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "GetEnumNames", [(await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TJWTResult", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "_TJWTResult", C, true))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "GetEnumNames", [(await $.wcall([$t700, $t705, $t710, $t715], "TypeInfo", [(await $.wv([$t700, $t705, $t710, $t715], "TJWTClaim", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "_TJWTClaim", C, true))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TMD5Buf", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TMD5Digest", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TAESContext", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "AESContextSize", C, false)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.le((await $.wv([$t700, $t705, $t710, $t715], "AESContextSize", C, false)), 300)], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHAContext", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "SHAContextSize", C, false)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA3Context", C, false))], C)), (await $.wv([$t700, $t705, $t710, $t715], "SHA3ContextSize", C, false)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq($.shl(1, (await $.wv([$t700, $t705, $t710, $t715], "AESBlockShift", C, false))), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TAESBlock", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TAESFullHeader", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TAESBlock", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TAESIVCTR", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TAESBlock", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.eq((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA256", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA1", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.gt((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA512", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA256", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.gt((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA3", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA512", C, false))], C)))], C)));
  await $.stmt((await $.wcall([$t700, $t705, $t710, $t715], "assert", [$.gt((await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "TSHA3", C, false))], C)), (await $.wcall([$t700, $t705, $t710, $t715], "sizeof", [(await $.wv([$t700, $t705, $t710, $t715], "THMAC_SHA512", C, false))], C)))], C)));
  return L0.result;
});
  return U;
}

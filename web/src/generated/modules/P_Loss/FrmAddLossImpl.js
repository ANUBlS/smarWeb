// Generated from FrmAddLossImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAddLossImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "INSWordExporter", "StdCtrls", "Buttons", "DBCtrls", "ComCtrls", "Mask", "XFSCtrls", "ExtCtrls", "Grids", "DBGrids", "Wordxp", "ComObj", "db", "oracle", "dblookup", "OleServer", "CMCurrencyEdit", "Office2000", "DmLossImpl", "CommanParametrs", "FrmMainLossImpl", "SBTranslateProc", "sboapiDataModuleImpl", "FrmAllLossImpl", "frmstatusimpl"]);
  const C = [U];
  U.defClass("TFrmAddLoss", "TForm", {"xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "report": {"name": "Report", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "wordexporter": {"name": "WordExporter", "type": "TINSWordExporter"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "dtapp": {"name": "dtApp", "type": "TDateTimePicker"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "dtactdate": {"name": "dtActDate", "type": "TDateTimePicker"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dtletter": {"name": "dtLetter", "type": "TDateTimePicker"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbcombobox1": {"name": "DBComboBox1", "type": "TDBComboBox"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "xflabel29": {"name": "XFLabel29", "type": "TXFLabel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel25": {"name": "XFLabel25", "type": "TXFLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "dblookupcombobox7": {"name": "DBLookupComboBox7", "type": "TDBLookupComboBox"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xflabel26": {"name": "XFLabel26", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "xflabel32": {"name": "XFLabel32", "type": "TXFLabel"}, "xflabel33": {"name": "XFLabel33", "type": "TXFLabel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xfspeedbutton1": {"name": "XFSpeedButton1", "type": "TXFSpeedButton"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "dtpclaim": {"name": "dtpClaim", "type": "TDateTimePicker"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "xflabel34": {"name": "XFLabel34", "type": "TXFLabel"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "xflabel39": {"name": "XFLabel39", "type": "TXFLabel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xfspeedbutton2": {"name": "XFSpeedButton2", "type": "TXFSpeedButton"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "xfgroupbox9": {"name": "XFGroupBox9", "type": "TXFGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "dbedit28": {"name": "DBEdit28", "type": "TDBEdit"}, "xflabel40": {"name": "XFLabel40", "type": "TXFLabel"}, "xfradiogroup2": {"name": "XFRadioGroup2", "type": "TXFRadioGroup"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "dblookupcombobox8": {"name": "DBLookupComboBox8", "type": "TDBLookupComboBox"}, "dblookupcombobox9": {"name": "DBLookupComboBox9", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "a": {"name": "a", "type": "real"}, "s": {"name": "s", "type": "real"}, "s1": {"name": "s1", "type": "real"}, "s2": {"name": "s2", "type": "real"}, "s3": {"name": "s3", "type": "real"}, "sum": {"name": "sum", "type": "real"}, "sub_id": {"name": "sub_id", "type": "integer"}, "sub_id1": {"name": "sub_id1", "type": "integer"}, "other_d": {"name": "other_d", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FrmAddLoss", null, "TFrmAddLoss");
  });
  U.method("TFrmAddLoss", "DBEdit18Change", async function DBEdit18Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "b": 0, "c": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit5")), "text")), ""))) {
      L0["a"] = 0;
    } else {
      L0["a"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit5")), "text"))]));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit18")), "text")), ""))) {
      L0["b"] = 0;
    } else {
      L0["b"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit18")), "text"))]));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit5")), "text")), ""))) {
      L0["c"] = 0;
    } else {
      L0["c"] = $.mul($.mul((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit5")), "Text"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSMotorkasko")), "FieldByName", ["EXTRAFRANSHIZ"])), "AsFloat"))), 0.01);
    }
    await $.mset((await $.v(C, "DBEdit12")), "Text", (await $.call(C, "floattostr", [$.sub($.sub(L0["a"], L0["b"]), L0["c"])])));
    await $.mset((await $.v(C, "DBEdit20")), "Text", (await $.mv((await $.v(C, "DBEdit12")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSModels")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSModels")), "SetVariable", ["PMARK_ID", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSModels")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "DBLookupComboBox6Enter", async function DBLookupComboBox6Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSdriver")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSdriver")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSdriver")), "SetVariable", ["p_kli_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["kli_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSdriver")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "DBLookupComboBox8CloseUp", async function DBLookupComboBox8CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue"));
    if ($.eq($t1, 0)) {
      await $.set(C, "sub_id", 0);
      await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
    }
    else if ($.eq($t1, 1)) {
      await $.set(C, "sub_id", 1);
      await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 1);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "DBLookupComboBox9CloseUp", async function DBLookupComboBox9CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox9")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ saheleri eyni olmalidi  !"])));
    await $.mset((await $.v(C, "DBLookupComboBox9")), "KeyValue", "");
    return L0.result;
  }
  { const $t2 = (await $.mv((await $.v(C, "DBLookupComboBox9")), "KeyValue"));
    if ($.eq($t2, 0)) {
      await $.set(C, "sub_id", 0);
      await $.set(C, "sub_id1", 0);
    }
    else if ($.eq($t2, 1)) {
      await $.set(C, "sub_id", 1);
      await $.set(C, "sub_id1", 1);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "DBNavigator2Click", async function DBNavigator2Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  {
    const $t3 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t3], "ODSClaimReport", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "ODSClaimReport", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t3], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t3], "ODSClaimReport", C, false)), "Open", []);
  }
  await $.stmt((await $.call(C, "CalcSum", [])));
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TFrmAddLoss", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d_id": 0, "ptype": 0, "pother_driver": 0, "a": 0, "b": 0, "c": 0, "t": false, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = $.add($.add((await $.call(C, "datetostr", [(await $.mv((await $.v(C, "dtpClaim")), "Date"))])), " "), (await $.call(C, "Timetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "Time"))])));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalnız Təsdiq olunmuş müqavilənin  zərəri redaktə etmək olar!"])));
    return L0.result;
  }
  L0["t"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyField")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ  secilmeyib  !"])));
    return L0.result;
  }
  { const $t4 = (await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue"));
    if ($.eq($t4, 0)) {
      await $.set(C, "sub_id", 0);
      await $.set(C, "sub_id1", 0);
    }
    else if ($.eq($t4, 1)) {
      await $.set(C, "sub_id", 1);
      await $.set(C, "sub_id1", 1);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), false))) {
    await $.set(C, "other_d", 0);
  } else {
    await $.set(C, "other_d", 1);
  }
  await $.stmt((await $.mcall((await $.v(C, "FrmAddLoss")), "XFButton1Click", [Self])));
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Rayon sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Küçə sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox7")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Avtoservis sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Qəza əmədaşı sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Hadisənin təsviri sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit24")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Digər sürücü sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit14")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Avto.yürüşü sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit7")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Məktubun №-si sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit8")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Arayışın №-si sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit9")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Protokolun №-si sahəsi boşdur!"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.v(C, "lossoperatin")), 1))) {
    await $.set(C, "losstesdiq", 0);
    { const $t5 = (await $.mv((await $.v(C, "DBLookupComboBox9")), "KeyValue"));
      if ($.eq($t5, 0)) {
        await $.set(C, "sub_id1", 0);
        await $.set(C, "sub_id", 0);
      }
      else if ($.eq($t5, 1)) {
        await $.set(C, "sub_id1", 1);
        await $.set(C, "sub_id", 1);
      }
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox9")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ saheleri eyni olmalidi  !"])));
      await $.mset((await $.v(C, "DBLookupComboBox9")), "KeyValue", "");
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit15")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Avto. Daşınmasına çəkilmiş xərclər sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit16")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Avto.Qiymətləndirilməsinə çəkilmiş xərclər sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit17")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Zərərin qarşısının alınmasına və zərərrin azaldılmasına çəkilmiş xərclər sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit12")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Yekun zərər məbləğı sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit11")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Yeni eh.hissələrinin dəyəri sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit21")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Amortizasiya məbləği sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit20")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Sığorta ödənişinin məbləği  sahəsi boşdur!"])));
      $.abort();
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit5")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Avto. real bazar dəyəri sahəsi boşdur!"])));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit18")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Qalıqların dəyəri sahəsi boşdur!"])));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit19")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Bank hesab nomrəsi sahəsi boşdur!"])));
        return L0.result;
      }
      await $.set(C, "losstesdiq", 1);
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked")), true))) {
      await $.mset((await $.v(C, "frmstatus")), "Tesdiq", 1);
      await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Color", (await $.v(C, "clGray")));
      await $.mset((await $.v(C, "frmstatus")), "Tesdiqdat", (await $.mv((await $.mv((await $.v(C, "frmstatus")), "DateTimePicker4")), "DateTime")));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["claim_status"])), "AsInteger")), 1))) {
        if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["auto_real_market_value"])), "AsString")), "")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["remains_value"])), "AsString")), "")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["bank_accno"])), "AsString")), "")))))) {
          await $.stmt((await $.call(C, "showmessage", ["Diqqət! Tam məvhalına uyğun məlumatlar tam yığılmadığindan təsdiqlənə bilməz!"])));
          await $.mset((await $.v(C, "frmstatus")), "Tesdiq", 0);
          await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Color", (await $.v(C, "clRed")));
          await $.mset((await $.v(C, "frmstatus")), "Tesdiqdat", (await $.call(C, "strtodate", ["30.12.1899"])));
          await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", false);
          return L0.result;
        }
      }
    } else {
      await $.mset((await $.v(C, "frmstatus")), "Tesdiq", 0);
      await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Color", (await $.v(C, "clred")));
      await $.mset((await $.v(C, "frmstatus")), "Tesdiqdat", (await $.call(C, "strtodate", ["30.12.1899"])));
      await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", true);
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "RefreshRecord", []);
    L0["t"] = true;
    if ($.truthy($.eq(L0["t"], true))) {
      {
        const $t6 = (await $.v(C, "DmLoss"));
        const $t7 = (await $.wv([$t6], "ODSMotorKasko", C, false));
        await $.mset((await $.wv([$t6, $t7], "ODSMOTORKaskoCLAIM_DATE", C, false)), "Value", (await $.mv((await $.wv([$t6, $t7], "dtpClaim", C, false)), "DateTime")));
        if ($.truthy($.in_((await $.wv([$t6, $t7], "State", C, false)), [(await $.wv([$t6, $t7], "dsEdit", C, false)), (await $.wv([$t6, $t7], "dsInsert", C, false))]))) {
          await $.stmt($.wcall([$t6, $t7], "Post", [], C));
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t6, $t7], "XFCheckBox2", C, false)), "Checked")), (await $.wv([$t6, $t7], "true", C, false))))) {
          await $.wset([$t6, $t7], "pother_driver", 1, { get: async () => L0["pother_driver"], set: async (v) => { L0["pother_driver"] = v; }, local: true });
        } else {
          await $.wset([$t6, $t7], "pother_driver", 0, { get: async () => L0["pother_driver"], set: async (v) => { L0["pother_driver"] = v; }, local: true });
        }
        {
          const $t8 = (await $.wv([$t6, $t7], "DmLoss", C, false));
          const $t9 = (await $.wv([$t6, $t7, $t8], "ODSClaimDescription", C, false));
          if ($.truthy($.in_((await $.wv([$t6, $t7, $t8, $t9], "State", C, false)), [(await $.wv([$t6, $t7, $t8, $t9], "dsEdit", C, false)), (await $.wv([$t6, $t7, $t8, $t9], "dsInsert", C, false))]))) {
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionMK_ID", C, false)), "Value", (await $.mv((await $.wv([$t6, $t7, $t8, $t9], "ODSMotorKaskoID", C, false)), "Value")));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionCID", C, false)), "Value", (await $.wv([$t6, $t7, $t8, $t9], "contactid", C, false)));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionAppDate", C, false)), "Value", (await $.wcall([$t6, $t7, $t8, $t9], "Integer", [(await $.wcall([$t6, $t7, $t8, $t9], "trunc", [(await $.mv((await $.wv([$t6, $t7, $t8, $t9], "dtApp", C, false)), "Date"))], C))], C)));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionLetterDate", C, false)), "Value", (await $.wcall([$t6, $t7, $t8, $t9], "Integer", [(await $.wcall([$t6, $t7, $t8, $t9], "trunc", [(await $.mv((await $.wv([$t6, $t7, $t8, $t9], "dtLetter", C, false)), "Date"))], C))], C)));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionActDate", C, false)), "Value", (await $.wcall([$t6, $t7, $t8, $t9], "Integer", [(await $.wcall([$t6, $t7, $t8, $t9], "trunc", [(await $.mv((await $.wv([$t6, $t7, $t8, $t9], "dtActDate", C, false)), "Date"))], C))], C)));
            await $.mset((await $.mcall((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescription", C, false)), "FieldByName", ["CLAIM_DATE"])), "AsDateTime", (await $.wcall([$t6, $t7, $t8, $t9], "StrToDateTime", [(await $.wv([$t6, $t7, $t8, $t9], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
            await $.mset((await $.mcall((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescription", C, false)), "FieldByName", ["other_driver"])), "AsInteger", (await $.wv([$t6, $t7, $t8, $t9], "pother_driver", { get: async () => L0["pother_driver"], set: async (v) => { L0["pother_driver"] = v; }, local: true }, false)));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionREFUSAL_DATE", C, false)), "Value", (await $.mv((await $.wv([$t6, $t7, $t8, $t9], "DateTimePicker1", C, false)), "DateTime")));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionSUBRAQASIYA", C, false)), "Value", (await $.wv([$t6, $t7, $t8, $t9], "sub_id", C, false)));
            if ($.truthy($.eq((await $.mv((await $.wv([$t6, $t7, $t8, $t9], "XFGroupBox5", C, false)), "Visible")), (await $.wv([$t6, $t7, $t8, $t9], "true", C, false))))) {
              await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionSUBRAQASIYA1", C, false)), "Value", (await $.wv([$t6, $t7, $t8, $t9], "sub_id1", C, false)));
            }
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionOTHER_DRIVER", C, false)), "Value", (await $.wv([$t6, $t7, $t8, $t9], "other_d", C, false)));
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescriptionTYPE", C, false)), "Value", 4);
            await $.mcall((await $.wv([$t6, $t7, $t8, $t9], "ODSClaimDescription", C, false)), "Post", []);
            await $.mcall((await $.mv((await $.wv([$t6, $t7, $t8, $t9], "DmLoss", C, false)), "ODSClaimDescription")), "RefreshRecord", []);
            await $.mset((await $.wv([$t6, $t7, $t8, $t9], "FrmMainLoss", C, false)), "dep_id", (await $.mv((await $.wcall([$t6, $t7, $t8, $t9], "FieldByName", ["id"], C)), "asinteger")));
          }
        }
        {
          const $t10 = (await $.wv([$t6, $t7], "DmLoss", C, false));
          if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t6, $t7, $t10], "FrmAddLoss", C, false)), "XFRadioButton2")), "Checked")), (await $.wv([$t6, $t7, $t10], "true", C, false))))) {
            await $.wset([$t6, $t7, $t10], "ptype", 1, { get: async () => L0["ptype"], set: async (v) => { L0["ptype"] = v; }, local: true });
          } else {
            await $.wset([$t6, $t7, $t10], "ptype", 0, { get: async () => L0["ptype"], set: async (v) => { L0["ptype"] = v; }, local: true });
          }
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7, $t10], "ODSContracts", C, false)), "FieldByName", ["type_id"])), "AsInteger")), 8))) {
            await $.wset([$t6, $t7, $t10], "ptype", 0, { get: async () => L0["ptype"], set: async (v) => { L0["ptype"] = v; }, local: true });
          }
          await $.mcall((await $.wv([$t6, $t7, $t10], "ODSClaimDescription", C, false)), "Edit", []);
          await $.mset((await $.mcall((await $.wv([$t6, $t7, $t10], "ODSClaimDescription", C, false)), "FieldByName", ["CLAIM_STATUS"])), "AsInteger", (await $.wv([$t6, $t7, $t10], "ptype", { get: async () => L0["ptype"], set: async (v) => { L0["ptype"] = v; }, local: true }, false)));
          await $.mset((await $.wv([$t6, $t7, $t10], "ODSClaimDescriptionSUBRAQASIYA", C, false)), "Value", (await $.wv([$t6, $t7, $t10], "sub_id", C, false)));
          await $.mcall((await $.wv([$t6, $t7, $t10], "ODSClaimDescription", C, false)), "Post", []);
        }
        if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t6, $t7], "FrmMainLoss", C, false)), "dep_id")), (-(1)))), async () => ($.ne((await $.mv((await $.wv([$t6, $t7], "FrmMainLoss", C, false)), "dep_id")), 0)))))) {
          {
            const $t11 = (await $.wv([$t6, $t7], "DmLoss", C, false));
            const $t12 = (await $.wv([$t6, $t7, $t11], "ODSClaims", C, false));
            await $.mcall((await $.wv([$t6, $t7, $t11, $t12], "ODSClaims", C, false)), "RefreshRecord", []);
            await $.mcall((await $.wv([$t6, $t7, $t11, $t12], "ODSClaims", C, false)), "Edit", []);
            await $.mset((await $.wv([$t6, $t7, $t11, $t12], "ODSClaimsDESC_ID", C, false)), "Value", (await $.mv((await $.wv([$t6, $t7, $t11, $t12], "ODSClaimDescriptionID", C, false)), "Value")));
            await $.stmt($.wcall([$t6, $t7, $t11, $t12], "Post", [], C));
            await $.mcall((await $.wv([$t6, $t7, $t11, $t12], "ODSClaims", C, false)), "RefreshRecord", []);
          }
          {
            const $t13 = (await $.wv([$t6, $t7], "DmLoss", C, false));
            const $t14 = (await $.wv([$t6, $t7, $t13], "ODSClaimSal", C, false));
            await $.mcall((await $.wv([$t6, $t7, $t13, $t14], "ODSClaimSal", C, false)), "RefreshRecord", []);
            await $.mcall((await $.wv([$t6, $t7, $t13, $t14], "ODSClaimSal", C, false)), "Edit", []);
            await $.mset((await $.wv([$t6, $t7, $t13, $t14], "ODSClaimSalDESC_ID", C, false)), "Value", (await $.mv((await $.wv([$t6, $t7, $t13, $t14], "ODSClaimDescriptionID", C, false)), "Value")));
            await $.stmt($.wcall([$t6, $t7, $t13, $t14], "Post", [], C));
          }
        }
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "lossstatus")), 1))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit26")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["İmtina məbləği sahəsi boşdur!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit25")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["İmtina səbəbi sahəsi boşdur!"])));
      return L0.result;
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "edit", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["REFUSAL_DATE"])), "AsDateTime", (await $.mv((await $.v(C, "DateTimePicker1")), "Date")));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Edit", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STATUS"])), "AsInteger", 1);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Post", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Zərər imtina statusuna keçdi."])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert"))) {
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "Refresh", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "RefreshRecord", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSClaimDescription")), "RefreshRecord", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STATUS"])), "AsInteger")), 4))) {
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Edit", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STATUS"])), "AsInteger", 2);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Post", []);
  }
  await $.mcall((await $.v(C, "FrmAddLoss")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  {
    const $t15 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t15], "ODSCusts", C, false)), "Open", []);
    await $.wset([$t15], "FileName", $.add((await $.wcall([$t15], "ExtractFilePath", [(await $.mv((await $.wv([$t15], "Application", C, false)), "ExeName"))], C)), "\\Kasko zerer akti.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
    await $.wset([$t15], "wrdApp", (await $.wcall([$t15], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
    await $.mset((await $.wv([$t15], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t15], "True", C, false)));
    await $.wset([$t15], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t15], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t15], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
    await $.wset([$t15], "wrdSelection", (await $.mv((await $.wv([$t15], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "insured"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "insured2"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "policynum"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t15], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSContractsPolicy_Num", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "insured1"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "mark"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSMotorKaskoInsuredMark", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "statenum"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSMotorKaskoInsuredStateNum", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "date"])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t15], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t15], "DateToStr", [(await $.mv((await $.wv([$t15], "ODSMotorKaskoCLAIM_DATE", C, false)), "Value"))], C))])));
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t15], "unAssigned", C, false)), (await $.wv([$t15], "unAssigned", C, false)), "claimnum"])));
    await $.stmt((await $.mcall((await $.wv([$t15], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t15], "ODSMotorKaskoClaim_Num", C, false)), "Value"))])));
    await $.wset([$t15], "n", (await $.mv((await $.wv([$t15], "ODSClaims", C, false)), "RecordCount")), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.mcall((await $.wv([$t15], "ODSClaims", C, false)), "First", []);
    { const $t16 = (await $.wv([$t15], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false));
      await $.wset([$t15], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t15], "false", C, false)));
        await $.stmt((await $.wcall([$t15], "FillRow", [1, (await $.wv([$t15], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), (await $.wcall([$t15], "IntToStr", [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t15], "ODSClaimsEName", C, false)), "Value")), (await $.mv((await $.wv([$t15], "ODSClaimsState", C, false)), "value"))], C)));
        await $.mcall((await $.wv([$t15], "ODSClaims", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "FillRow", async function FillRow(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"item": $.copyArg(p0), "doc": $.copyArg(p1), "row": $.copyArg(p2), "text0": $.copyArg(p3), "text1": $.copyArg(p4), "text2": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["item", "doc", "row", "text0", "text1", "text2"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [L0["item"]])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [L0["item"]])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [L0["item"]])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  return L0.result;
}, {"params": ["Item", "Doc", "Row", "Text0", "Text1", "Text2"], "kind": "procedure", "ptypes": ["integer", "Variant", "Integer", "String", "String", "String"]});
  U.method("TFrmAddLoss", "FillRow1", async function FillRow1(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"doc": $.copyArg(p0), "row": $.copyArg(p1), "text0": $.copyArg(p2), "text1": $.copyArg(p3), "text2": $.copyArg(p4), "text3": $.copyArg(p5), "text4": $.copyArg(p6), result: undefined};
  await $.fixArgs(L0, ["doc", "row", "text0", "text1", "text2", "text3", "text4"]);
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 1])), "Range")), "InsertAfter", [L0["text0"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 2])), "Range")), "InsertAfter", [L0["text1"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 3])), "Range")), "InsertAfter", [L0["text2"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 4])), "Range")), "InsertAfter", [L0["text3"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mcall((await $.mcall((await $.mv(L0["doc"], "Tables")), "Item", [1])), "Cell", [L0["row"], 5])), "Range")), "InsertAfter", [L0["text4"]])));
  return L0.result;
}, {"params": ["Doc", "Row", "Text0", "Text1", "Text2", "Text3", "Text4"], "kind": "procedure", "ptypes": ["Variant", "Integer", "String", "String", "String", "String", "String"]});
  U.method("TFrmAddLoss", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": '', "temporary": null, "btn": null, "oletrue": null, "bar": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["CLAIM_STATUS"])), "AsInteger")), 0))) {
    {
      const $t18 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "Open", []);
      await $.wset([$t18], "FileName", $.add((await $.wcall([$t18], "ExtractFilePath", [(await $.mv((await $.wv([$t18], "Application", C, false)), "ExeName"))], C)), "\\SigortaAkt.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
      await $.wset([$t18], "wrdApp", (await $.wcall([$t18], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
      await $.mset((await $.wv([$t18], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t18], "True", C, false)));
      await $.wset([$t18], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t18], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t18], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
      await $.wset([$t18], "wrdSelection", (await $.mv((await $.wv([$t18], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
      await $.wset([$t18], "Btn", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t18], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "CommandBars")), ["Standard"])), "Controls")), ["Print"])), { get: async () => L0["btn"], set: async (v) => { L0["btn"] = v; }, local: true });
      await $.mset((await $.wv([$t18], "Btn", { get: async () => L0["btn"], set: async (v) => { L0["btn"] = v; }, local: true }, false)), "Visible", (await $.wv([$t18], "False", C, false)));
      await $.mset((await $.wv([$t18], "Btn", { get: async () => L0["btn"], set: async (v) => { L0["btn"] = v; }, local: true }, false)), "Enabled", (await $.wv([$t18], "False", C, false)));
      await $.wset([$t18], "OleTrue", (await $.wv([$t18], "True", C, false)), { get: async () => L0["oletrue"], set: async (v) => { L0["oletrue"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t18], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "CommandBars")), ["Standard"])), "Controls")), ["Save"])), "Delete", [$.ref(async () => (await $.wv([$t18], "OleTrue", { get: async () => L0["oletrue"], set: async (v) => { L0["oletrue"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t18], "OleTrue", $t19, { get: async () => L0["oletrue"], set: async (v) => { L0["oletrue"] = v; }, local: true }); })])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "polisno"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["POLICY_NUM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "name"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["NAME1"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "namedriver"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["DRIVER"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "marka"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["MARKA"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "autono"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["INSUREDSTATENUM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "sassino"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["SASSI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "muherrikno"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["INSUREDENGINENUM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "qezaEm"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["QEZAEMEKTASI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "dat"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["TARIX"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "s_meblegi"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["INSSUMM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "amortizasiya"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["AMORTIZASIYA_AMMOUNT"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "countyazi"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["SAYYAZI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "avto_deyeri"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["AVTODEYER"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "yeni_eh_deyeri"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["YENI_E_DEYERI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Fransiza"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["FRANSHIZ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "faiz"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["AVT_R_DEYER_S_MEBLEQE_NISBETI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Claimdat"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["CLAIM_DATE"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Unvan"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["UNVAN"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Teyinat"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["DETAIL"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "namecust"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["name1"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "namedriver1"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["TEXSIRLISEXS"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "idareetmeH"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["IDAREETMEHUQUQU"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "service"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["SERVIS"])), "AsString"))])));
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["AUTO_ASSESS_COSTS"])), "AsFloat")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Avto_q_c_x"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["AUTO_ASSESS_COSTS"])), "AsString")), " AZN")])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Avto_q_c_x"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["UTO_TRANSPORTATION_COSTS"])), "AsFloat")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Avto_d_c_x"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["UTO_TRANSPORTATION_COSTS"])), "AsString")), " AZN")])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Avto_d_c_x"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
      }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["OTHER_COSTS"])), "AsFloat")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Z_q_a_c_x"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["OTHER_COSTS"])), "AsString")), " AZN")])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Z_q_a_c_x"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Avto_d_ziyan"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["FINAL_AMOUNT_LOSS"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "odenmis_s_odenisi"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["FINAL_PAYMENT_AMOUNT_LOSS"])), "AsString")), " AZN")])));
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "namecust1"])));
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["CUSTNAME"])), "AsString"))])));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "FieldByName", ["subraqasiya"])), "AsInteger")), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "r_meblegi"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["final_payment_amount_loss"])), "AsString")), " AZN")])));
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "q_t_sigorta_teskilat"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["QARSI_TEREF_S_TESKILAT"])), "AsString"))])));
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Baresinde_rt_surulmeli_sexs"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t18], "DSSigortaAkt", C, false)), "FieldByName", ["BAREDINDE_REQ_TELE_SURU_WEXS"])), "AsString"))])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "r_meblegi"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "q_t_sigorta_teskilat"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t18], "unAssigned", C, false)), (await $.wv([$t18], "unAssigned", C, false)), "Baresinde_rt_surulmeli_sexs"])));
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t18], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["CLAIM_STATUS"])), "AsInteger")), 1))) {
    {
      const $t20 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.wv([$t20], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "Open", []);
      await $.wset([$t20], "FileName", $.add((await $.wcall([$t20], "ExtractFilePath", [(await $.mv((await $.wv([$t20], "Application", C, false)), "ExeName"))], C)), "\\SigortaAktTam.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
      await $.wset([$t20], "wrdApp", (await $.wcall([$t20], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
      await $.mset((await $.wv([$t20], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t20], "True", C, false)));
      await $.wset([$t20], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t20], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t20], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
      await $.wset([$t20], "wrdSelection", (await $.mv((await $.wv([$t20], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "polisno"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["POLICY_NUM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "name"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["NAME1"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "name1"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["NAME1"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "namedriver"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["DRIVER"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "marka"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["MARKA"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "autono"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["INSUREDSTATENUM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "sassino"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["SASSI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "muherrikno"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["INSUREDENGINENUM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "qezaEm"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["QEZAEMEKTASI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "dat"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["TARIX"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "s_meblegi"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["INSSUMM"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "countnoyazi"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["SAYYAZI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "avto_realbazardeyeri"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["REALBAZARDEYERI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Claimdat"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["CLAIM_DATE"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Unvan"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["UNVAN"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Teyinat"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["DETAIL"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "namecust"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["NAME1"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "namedriver1"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["TEXSIRLISEXS"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "idareetmeH"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["IDAREETMEHUQUQU"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "service"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["SERVIS"])), "AsString"))])));
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["UTO_TRANSPORTATION_COSTS"])), "AsInteger")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Avto_d_c_x"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["UTO_TRANSPORTATION_COSTS"])), "AsString")), " AZN")])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Avto_d_c_x"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
      }
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Avto_d_ziyan"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["FINAL_AMOUNT_LOSS"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "qaliqlarinDeyeri"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["QALIQ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "realbazardeyeri2"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["REALBAZARDEYERI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Tammehvfaiz"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["ZERER"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "qaliqlarinDeyeri1"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["QALIQ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "odenis"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["ODENISMEBLEGI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "hesab"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["HESB"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "faizTam"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["AVT_R_DEYER_S_MEBLEQE_NISBETI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Qaliq_deyeri"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["QALIQ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Tam_mehv_frans_mebleq"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["TAM_MEHV_FRANS_MEBLEQI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Tam_mehv_frans_mebleq1"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["TAM_MEHV_FRANS_MEBLEQI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Extrafransiza"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["EXTRAFRANSHIZ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Extrafransiza1"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["EXTRAFRANSHIZ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Extrafransiza2"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["EXTRAFRANSHIZ"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "realbazar"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["REALBAZARDEYERI"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Avto_deymis_zerer"])));
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
      await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
      await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["FINAL_AMOUNT_LOSS"])), "AsString"))])));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t20], "ODSClaimDescription", C, false)), "FieldByName", ["subraqasiya"])), "AsInteger")), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "r_meblegi"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [$.add((await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["ODENISMEBLEGI"])), "AsString")), " AZN")])));
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "Baresinde_rt_surulmeli_sexs"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["BAREDINDE_REQ_TELE_SURU_WEXS"])), "AsString"))])));
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "paymentname"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["name1"])), "AsString"))])));
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["QARSI_TEREF_S_TESKILAT"])), "AsString")), ""))) {
          await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "q_t_sigorta_teskilat"])));
          await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
          await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t20], "DSSigortaAkt", C, false)), "FieldByName", ["QARSI_TEREF_S_TESKILAT"])), "AsString"))])));
        } else {
          await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "q_t_sigorta_teskilat"])));
          await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
          await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
        }
      } else {
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "r_meblegi"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t20], "unAssigned", C, false)), (await $.wv([$t20], "unAssigned", C, false)), "q_t_sigorta_teskilat"])));
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
        await $.stmt((await $.mcall((await $.wv([$t20], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", ["--------"])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": '', "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayıl tapılmadı";
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["template"] = (await $.v(C, "EmptyParam"));
  L0["templatebool"] = false;
  L0["itemindex"] = 1;
  await $.mcall((await $.v(C, "Wordapplication")), "Connect", []);
  await $.mset((await $.v(C, "Wordapplication")), "Visible", true);
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckSpellingAsYouType", false);
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckGrammarAsYouType", false);
  if ($.truthy((await $.call(C, "FileExists", [L0["ftemplatepath"]])))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Open", [L0["ftemplatepath"], L0["template"], L0["templatebool"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"]])));
  } else {
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [L0["filenotfound"]])));
  }
  await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordDocument")), "Application")), "Get_ActiveWindow")), "Caption", (await $.v(C, "Caption")));
  try {
    {
      const $t22 = (await $.v(C, "DmLoss"));
      const $t23 = (await $.wv([$t22], "DmLoss", C, false));
      const $t24 = (await $.wv([$t22, $t23], "WordDocument", C, false));
      await $.mcall((await $.mv((await $.wv([$t22, $t23, $t24], "dmLoss", C, false)), "DSSorgu")), "Close", []);
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSorgu")), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSorgu")), "Open", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Selection")), "GoTo_", [L0["what"], (await $.v(C, "EmptyParam")), (await $.v(C, "EmptyParam")), L0["obookmarkname"]])));
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
  } catch ($t21) {
    $.rethrowControl($t21);
    $.handled($t21);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Bukmarklar daxil edilmeyib "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "n": 0, "filename": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  {
    const $t25 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.wv([$t25], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "Open", []);
    await $.wset([$t25], "FileName", $.add((await $.wcall([$t25], "ExtractFilePath", [(await $.mv((await $.wv([$t25], "Application", C, false)), "ExeName"))], C)), "\\BankMektubu.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
    await $.wset([$t25], "wrdApp", (await $.wcall([$t25], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
    await $.mset((await $.wv([$t25], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t25], "True", C, false)));
    await $.wset([$t25], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t25], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t25], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
    await $.wset([$t25], "wrdSelection", (await $.mv((await $.wv([$t25], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "avtono"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["INSUREDSTATENUM"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "Marka"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["INSUREDMARK"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "ClaimDate"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["CLAIM_DATE"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "faydag"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["BENEFICIARY"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "Bankdate"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t25], "true", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["STAGE_BANKIN_CAVABI_DAT"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "name"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["NAME1"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t25], "unAssigned", C, false)), (await $.wv([$t25], "unAssigned", C, false)), "name1"])));
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t25], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.mcall((await $.wv([$t25], "DSPrintBank", C, false)), "FieldByName", ["NAME1"])), "AsString"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "CalcSum", async function CalcSum(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.set(C, "s", 0);
  await $.set(C, "s1", 0);
  await $.set(C, "s3", 0);
  {
    const $t26 = (await $.v(C, "DmLoss"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t26], "ODSClaims", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t26], "ODSClaims", C, false)), "Last", []);
      { const $t27 = $.sub((await $.mv((await $.wv([$t26], "ODSClaims", C, false)), "RecordCount")), 1);
        await $.wset([$t26], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t28 = true;
        for (;;) {
          if (!$t28) { await $.wset([$t26], "i", $.succ((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t28 = false;
          if (!($.ord((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t27))) break;
          await $.wset([$t26], "s", $.add((await $.wv([$t26], "s", C, false)), (await $.mv((await $.wv([$t26], "ODSClaimsCount", C, false)), "value"))), C);
          await $.wset([$t26], "s1", $.add((await $.wv([$t26], "s1", C, false)), (await $.mv((await $.wv([$t26], "ODSClaimsCost", C, false)), "value"))), C);
          await $.mcall((await $.wv([$t26], "ODSClaims", C, false)), "Prior", []);
          await $.tick();
        }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t26], "ODSClaimSal", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t26], "ODSClaimSal", C, false)), "Last", []);
      { const $t29 = $.sub((await $.mv((await $.wv([$t26], "ODSClaimSal", C, false)), "RecordCount")), 1);
        await $.wset([$t26], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t30 = true;
        for (;;) {
          if (!$t30) { await $.wset([$t26], "i", $.succ((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t30 = false;
          if (!($.ord((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t29))) break;
          await $.wset([$t26], "s3", $.add((await $.wv([$t26], "s3", C, false)), (await $.mv((await $.wv([$t26], "ODSClaimSalCost", C, false)), "value"))), C);
          await $.mcall((await $.wv([$t26], "ODSClaimSal", C, false)), "Prior", []);
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmAddLoss", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    if ($.truthy($.eq((await $.v(C, "losstesdiq")), 0))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STAGE_TESDIQ"])), "AsInteger")), 0))) {
        await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", false);
      }
    } else {
      await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", true);
    }
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddLoss", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSdriver")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSdriver")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScompanes")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScompanes")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSMarks")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSMarks")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSModels")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "odsmodels")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "subroqas")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "subroqas")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", true);
    await $.mset((await $.v(C, "BitBtn1")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.v(C, "lossoperatin")), 1))) {
    await $.mset((await $.v(C, "XFGroupBox5")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFGroupBox5")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "lossstatus")), 1))) {
    await $.mset((await $.v(C, "XFGroupBox8")), "Visible", true);
    await $.mset((await $.v(C, "BitBtn1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "XFGroupBox8")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "BitBtn1")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 4))) {
    await $.mset((await $.v(C, "BitBtn1")), "Enabled", true);
  }
  {
    const $t31 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t31], "ODSClaimReport", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t31], "ODSClaimReport", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t31], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.mcall((await $.wv([$t31], "ODSClaimReport", C, false)), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert"))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    await $.mset((await $.v(C, "dtpClaim")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.mset((await $.v(C, "dtLetter")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.mset((await $.v(C, "dtApp")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.mset((await $.v(C, "dtActDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "Time", (await $.call(C, "strtotime", ["00:00:00"])));
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "XFGroupBox8")), "Visible", false);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBGrid1")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBGrid2")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBNavigator2")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBNavigator1")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "XFGroupBox1")), "Enabled", false);
    await $.mset((await $.v(C, "DBEdit1")), "Text", "");
    await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "XFRadioGroup2")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "XFCheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "BitBtn1")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Edit"))) {
    await $.mset((await $.v(C, "DateTimePicker2")), "Time", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["CLAIM_DATE"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker1")), "datetime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["REFUSAL_DATE"])), "AsDateTime")));
    if ($.truthy($.eq((await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionCLAIM_DATE")), "Value"))])), "30.12.1899"))) {
      await $.mset((await $.v(C, "dtpClaim")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    } else {
      await $.mset((await $.v(C, "dtpClaim")), "DateTime", (await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionCLAIM_DATE")), "Value")));
    }
    if ($.truthy($.eq((await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionLetterDate")), "Value"))])), "30.12.1899"))) {
      await $.mset((await $.v(C, "dtLetter")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    } else {
      await $.mset((await $.v(C, "dtLetter")), "Date", (await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionLetterDate")), "Value")));
    }
    if ($.truthy($.eq((await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionAppDate")), "Value"))])), "30.12.1899"))) {
      await $.mset((await $.v(C, "dtApp")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    } else {
      await $.mset((await $.v(C, "dtApp")), "Date", (await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionAppDate")), "Value")));
    }
    if ($.truthy($.eq((await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionActDate")), "Value"))])), "30.12.1899"))) {
      await $.mset((await $.v(C, "dtActDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    } else {
      await $.mset((await $.v(C, "dtActDate")), "Date", (await $.mv((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescriptionActDate")), "Value")));
    }
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "XFGroupBox1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBGrid1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBGrid2")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBNavigator2")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBNavigator1")), "Enabled", true);
    await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["SUBRAQASIYA"])), "AsInteger")));
    await $.mset((await $.v(C, "XFRadioGroup2")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["SUBRAQASIYA1"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["OTHER_DRIVER"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFCheckBox2")), "Checked", true);
      await $.mset((await $.v(C, "XFPanel4")), "Enabled", true);
      await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
      await $.mset((await $.v(C, "XFPanel4")), "Enabled", false);
      await $.mset((await $.v(C, "XFCheckBox2")), "Checked", false);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["claim_status"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFGroupBox5")), "Visible")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox8")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox8")), "Enabled", true);
  }
  await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "PageControl1")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 1))) {
    await $.stmt((await $.mcall((await $.v(C, "FrmAddLoss")), "XFButton1Click", [Self])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "ReportClick", async function ReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "wordapp": null, "wrddatadoc": null, "wrdapp": null, "wrdselection": null, "i": 0, "j": 0, "n": 0, "m": 0, "filename": '', "s": 0, "s1": 0, "s2": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  {
    const $t32 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t32], "ODSCusts", C, false)), "Open", []);
    await $.wset([$t32], "s", 0, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.wset([$t32], "s1", 0, { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
    await $.wset([$t32], "s2", 0, { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
    await $.wset([$t32], "FileName", $.add((await $.wcall([$t32], "ExtractFilePath", [(await $.mv((await $.wv([$t32], "Application", C, false)), "ExeName"))], C)), "\\Kasko temir xercleri.doc"), { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true });
    await $.wset([$t32], "wrdApp", (await $.wcall([$t32], "CreateOleObject", ["Word.Application"], C)), { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true });
    await $.mset((await $.wv([$t32], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Visible", (await $.wv([$t32], "True", C, false)));
    await $.wset([$t32], "wrdDataDoc", (await $.mcall((await $.mv((await $.wv([$t32], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Documents")), "Open", [(await $.wv([$t32], "FileName", { get: async () => L0["filename"], set: async (v) => { L0["filename"] = v; }, local: true }, false))])), { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true });
    await $.wset([$t32], "wrdSelection", (await $.mv((await $.wv([$t32], "wrdApp", { get: async () => L0["wrdapp"], set: async (v) => { L0["wrdapp"] = v; }, local: true }, false)), "Selection")), { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true });
    await $.wset([$t32], "m", (await $.mv((await $.wv([$t32], "ODSClaimReport", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
    await $.wset([$t32], "n", (await $.mv((await $.wv([$t32], "ODSClaimSal", C, false)), "RecordCount")), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "policynum"])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t32], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t32], "ODSContractsPolicy_Num", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "insured"])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t32], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "insured1"])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t32], "ODSCustsName", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "mark"])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t32], "ODSMotorKaskoInsuredMark", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "statenum"])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t32], "ODSMotorKaskoInsuredStateNum", C, false)), "Value"))])));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "date"])));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.wcall([$t32], "DateToStr", [(await $.mv((await $.wv([$t32], "ODSMotorKaskoCLAIM_DATE", C, false)), "Value"))], C))])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Size", 11);
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t32], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "GoTo", [(-(1)), (await $.wv([$t32], "unAssigned", C, false)), (await $.wv([$t32], "unAssigned", C, false)), "claimnum"])));
    await $.mset((await $.mv((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "Font")), "Bold", (await $.wv([$t32], "false", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t32], "wrdSelection", { get: async () => L0["wrdselection"], set: async (v) => { L0["wrdselection"] = v; }, local: true }, false)), "TypeText", [(await $.mv((await $.wv([$t32], "ODSMotorKaskoClaim_Num", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t32], "ODSClaimReport", C, false)), "First", []);
    { const $t33 = (await $.mv((await $.wv([$t32], "ODSClaimReport", C, false)), "RecordCount"));
      await $.wset([$t32], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
      let $t34 = true;
      for (;;) {
        if (!$t34) { await $.wset([$t32], "j", $.succ((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
        $t34 = false;
        if (!($.ord((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t33))) break;
        await $.wset([$t32], "s1", $.add((await $.wv([$t32], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t32], "ODSClaimReportCount", C, false)), "value"))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
        await $.wset([$t32], "s2", $.add((await $.wv([$t32], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t32], "ODSClaimReportCost", C, false)), "value"))), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t32], "false", C, false)));
        await $.stmt((await $.wcall([$t32], "FillRow1", [(await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), (await $.wcall([$t32], "IntToStr", [(await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t32], "ODSClaimReportEName", C, false)), "Value")), (await $.wcall([$t32], "FloatToStr", [(await $.mv((await $.wv([$t32], "ODSClaimReportCount", C, false)), "value"))], C)), (await $.wcall([$t32], "FloatToStr", [(await $.mv((await $.wv([$t32], "ODSClaimReportCost", C, false)), "value"))], C)), (await $.wcall([$t32], "FloatToStr", [$.mul((await $.mv((await $.wv([$t32], "ODSClaimReportCount", C, false)), "value")), (await $.mv((await $.wv([$t32], "ODSClaimReportCost", C, false)), "value")))], C))], C)));
        if ($.truthy($.eq((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))))) {
          await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Add", []);
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2)])), "Range")), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Cell", [$.add((await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2), 1])), "Range")), "Paragraphs")), "Alignment", (await $.wv([$t32], "wdAlignParagraphCenter", C, false)));
          await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [1])), "Rows")), "Item", [$.add((await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2)])), "Range")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.stmt((await $.wcall([$t32], "FillRow1", [(await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), 2), "", "Cəmi :", (await $.wcall([$t32], "FloatToStr", [(await $.wv([$t32], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false))], C)), (await $.wcall([$t32], "FloatToStr", [(await $.wv([$t32], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false))], C)), (await $.wcall([$t32], "FloatToStr", [$.mul((await $.wv([$t32], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.wv([$t32], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)))], C))], C)));
        }
        await $.mcall((await $.wv([$t32], "ODSClaimReport", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t32], "ODSClaimSal", C, false)), "First", []);
    { const $t35 = (await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false));
      await $.wset([$t32], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t36 = true;
      for (;;) {
        if (!$t36) { await $.wset([$t32], "i", $.succ((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t36 = false;
        if (!($.ord((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t35))) break;
        await $.wset([$t32], "s", $.add((await $.wv([$t32], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t32], "ODSClaimSalCost", C, false)), "value"))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
        await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Font")), "Name", "Arial AzLat");
        await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), "Range")), "Bold", (await $.wv([$t32], "false", C, false)));
        await $.stmt((await $.wcall([$t32], "FillRow", [2, (await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), (await $.wcall([$t32], "IntToStr", [(await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)), (await $.mv((await $.wv([$t32], "ODSClaimSalName", C, false)), "Value")), (await $.wcall([$t32], "FloatToStr", [(await $.mv((await $.wv([$t32], "ODSClaimSalCost", C, false)), "value"))], C))], C)));
        await $.mcall((await $.wv([$t32], "ODSClaimSal", C, false)), "Next", []);
        if ($.truthy($.eq((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))))) {
          await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2)])), "Range")), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Cell", [$.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2), 1])), "Range")), "Paragraphs")), "Alignment", (await $.wv([$t32], "wdAlignParagraphCenter", C, false)));
          await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2)])), "Range")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.stmt((await $.wcall([$t32], "FillRow", [2, (await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 2), "", "Cəmi :", (await $.wcall([$t32], "FloatToStr", [(await $.wv([$t32], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))], C)));
          await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Add", []);
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3)])), "Range")), "Font")), "Name", "Arial AzLat");
          await $.mset((await $.mv((await $.mv((await $.mcall((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Cell", [$.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3), 1])), "Range")), "Paragraphs")), "Alignment", (await $.wv([$t32], "wdAlignParagraphCenter", C, false)));
          await $.mset((await $.mv((await $.mcall((await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), "Tables")), "Item", [2])), "Rows")), "Item", [$.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3)])), "Range")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.wset([$t32], "sum", $.add($.mul((await $.wv([$t32], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.wv([$t32], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false))), (await $.wv([$t32], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), C);
          await $.stmt((await $.wcall([$t32], "FillRow", [2, (await $.wv([$t32], "wrdDataDoc", { get: async () => L0["wrddatadoc"], set: async (v) => { L0["wrddatadoc"] = v; }, local: true }, false)), $.add((await $.wv([$t32], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 3), "", "Ümumi yekun :", (await $.wcall([$t32], "FloatToStr", [(await $.wv([$t32], "sum", C, false))], C))], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mk": '', "md": '', "s": '', "pother_driver": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = $.add($.add((await $.call(C, "datetostr", [(await $.mv((await $.v(C, "dtpClaim")), "Date"))])), " "), (await $.call(C, "Timetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "Time"))])));
  await $.set(C, "a", 0);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    $.abort();
  }
  {
    const $t37 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t37], "dsmarka", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t37], "dsmarka", C, false)), "SetVariable", ["pid", (await $.mv((await $.wv([$t37], "DBLookupComboBox1", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t37], "dsmarka", C, false)), "Open", []);
    await $.mcall((await $.wv([$t37], "dsmodel", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t37], "dsmodel", C, false)), "SetVariable", ["pid", (await $.mv((await $.wv([$t37], "DBLookupComboBox2", C, false)), "KeyValue"))])));
    await $.stmt((await $.mcall((await $.wv([$t37], "dsmodel", C, false)), "SetVariable", ["pmark_id", (await $.mv((await $.wv([$t37], "DBLookupComboBox1", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t37], "dsmodel", C, false)), "Open", []);
  }
  {
    const $t38 = (await $.v(C, "DmLoss"));
    const $t39 = (await $.wv([$t38], "ODSMotorKasko", C, false));
    await $.mset((await $.wv([$t38, $t39], "ODSMOTORKaskoCLAIM_DATE", C, false)), "Value", (await $.mv((await $.wv([$t38, $t39], "dtpClaim", C, false)), "Date")));
    if ($.truthy($.in_((await $.wv([$t38, $t39], "State", C, false)), [(await $.wv([$t38, $t39], "dsEdit", C, false)), (await $.wv([$t38, $t39], "dsInsert", C, false))]))) {
      await $.stmt($.wcall([$t38, $t39], "Post", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t38, $t39], "XFCheckBox2", C, false)), "Checked")), (await $.wv([$t38, $t39], "true", C, false))))) {
      await $.wset([$t38, $t39], "pother_driver", 1, { get: async () => L0["pother_driver"], set: async (v) => { L0["pother_driver"] = v; }, local: true });
    } else {
      await $.wset([$t38, $t39], "pother_driver", 0, { get: async () => L0["pother_driver"], set: async (v) => { L0["pother_driver"] = v; }, local: true });
    }
    {
      const $t40 = (await $.wv([$t38, $t39], "DmLoss", C, false));
      const $t41 = (await $.wv([$t38, $t39, $t40], "ODSClaimDescription", C, false));
      if ($.truthy($.in_((await $.wv([$t38, $t39, $t40, $t41], "State", C, false)), [(await $.wv([$t38, $t39, $t40, $t41], "dsEdit", C, false)), (await $.wv([$t38, $t39, $t40, $t41], "dsInsert", C, false))]))) {
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionMK_ID", C, false)), "Value", (await $.mv((await $.wv([$t38, $t39, $t40, $t41], "ODSMotorKaskoID", C, false)), "Value")));
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionCID", C, false)), "Value", (await $.wv([$t38, $t39, $t40, $t41], "contactid", C, false)));
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionAppDate", C, false)), "Value", (await $.wcall([$t38, $t39, $t40, $t41], "Integer", [(await $.wcall([$t38, $t39, $t40, $t41], "trunc", [(await $.mv((await $.wv([$t38, $t39, $t40, $t41], "dtApp", C, false)), "Date"))], C))], C)));
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionLetterDate", C, false)), "Value", (await $.wcall([$t38, $t39, $t40, $t41], "Integer", [(await $.wcall([$t38, $t39, $t40, $t41], "trunc", [(await $.mv((await $.wv([$t38, $t39, $t40, $t41], "dtLetter", C, false)), "Date"))], C))], C)));
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionActDate", C, false)), "Value", (await $.wcall([$t38, $t39, $t40, $t41], "Integer", [(await $.wcall([$t38, $t39, $t40, $t41], "trunc", [(await $.mv((await $.wv([$t38, $t39, $t40, $t41], "dtActDate", C, false)), "Date"))], C))], C)));
        await $.mset((await $.mcall((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescription", C, false)), "FieldByName", ["CLAIM_DATE"])), "AsDateTime", (await $.wcall([$t38, $t39, $t40, $t41], "StrToDateTime", [(await $.wv([$t38, $t39, $t40, $t41], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
        await $.mset((await $.mcall((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescription", C, false)), "FieldByName", ["other_driver"])), "AsInteger", (await $.wv([$t38, $t39, $t40, $t41], "pother_driver", { get: async () => L0["pother_driver"], set: async (v) => { L0["pother_driver"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionSUBRAQASIYA", C, false)), "Value", (await $.wv([$t38, $t39, $t40, $t41], "sub_id", C, false)));
        if ($.truthy($.eq((await $.mv((await $.wv([$t38, $t39, $t40, $t41], "XFGroupBox5", C, false)), "Visible")), (await $.wv([$t38, $t39, $t40, $t41], "true", C, false))))) {
          await $.mset((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescriptionSUBRAQASIYA1", C, false)), "Value", (await $.wv([$t38, $t39, $t40, $t41], "sub_id1", C, false)));
        }
        await $.mset((await $.mcall((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescription", C, false)), "FieldByName", ["mark"])), "AsString", (await $.mv((await $.mcall((await $.wv([$t38, $t39, $t40, $t41], "dsmarka", C, false)), "FieldByName", ["name"])), "AsString")));
        await $.mset((await $.mcall((await $.wv([$t38, $t39, $t40, $t41], "ODSClaimDescription", C, false)), "FieldByName", ["MODEL"])), "AsString", (await $.mv((await $.mcall((await $.wv([$t38, $t39, $t40, $t41], "dsmodel", C, false)), "FieldByName", ["name"])), "AsString")));
        await $.stmt($.wcall([$t38, $t39, $t40, $t41], "Post", [], C));
        await $.stmt($.wcall([$t38, $t39, $t40, $t41], "RefreshRecord", [], C));
        await $.mset((await $.wv([$t38, $t39, $t40, $t41], "FrmMainLoss", C, false)), "dep_id", (await $.mv((await $.wcall([$t38, $t39, $t40, $t41], "FieldByName", ["id"], C)), "asinteger")));
        await $.wset([$t38, $t39, $t40, $t41], "a", 1, C);
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "a")), 1))) {
    {
      const $t42 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t42], "ODSClaims", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t42], "ODSClaims", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t42], "ODSMotorkaskoId", C, false)), "value"))])));
      await $.stmt((await $.mcall((await $.wv([$t42], "ODSClaims", C, false)), "SetVariable", ["p_desc_id", (await $.mv((await $.wv([$t42], "FrmMainLoss", C, false)), "dep_id"))])));
      await $.mcall((await $.wv([$t42], "ODSClaims", C, false)), "Open", []);
      await $.mcall((await $.wv([$t42], "ODSClaimSal", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t42], "ODSClaimSal", C, false)), "SetVariable", ["eid", (await $.mv((await $.wv([$t42], "ODSMotorkaskoId", C, false)), "value"))])));
      await $.stmt((await $.mcall((await $.wv([$t42], "ODSClaimSal", C, false)), "SetVariable", ["p_desc_id", (await $.mv((await $.wv([$t42], "FrmMainLoss", C, false)), "dep_id"))])));
      await $.mcall((await $.wv([$t42], "ODSClaimSal", C, false)), "Open", []);
    }
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "XFGroupBox1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBGrid1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBGrid2")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBNavigator2")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBNavigator1")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "losstesdiq")), 0))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STAGE_TESDIQ"])), "AsInteger")), 0))) {
      await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", false);
    }
  } else {
    await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", true);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "XFCheckBox2Click", async function XFCheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFPanel4")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "XFPanel4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
    await $.mset((await $.v(C, "DBEdit24")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "XFSpeedButton1Click", async function XFSpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "claim_status": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    L0["claim_status"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    L0["claim_status"] = 1;
  }
  {
    const $t43 = (await $.v(C, "DmLoss"));
    await $.mset((await $.wv([$t43], "DBEdit1", C, false)), "Text", (await $.mcall((await $.mv((await $.wv([$t43], "DmLoss", C, false)), "OPCOMMON")), "CallStringFunction", ["GenerateLossNumber", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t43], "DmLoss", C, false)), "oDSClaimDescription")), "FieldByName", ["cid"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t43], "DmLoss", C, false)), "oDSClaimDescription")), "FieldByName", ["TYPE"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t43], "DmLoss", C, false)), "oDSClaimDescription")), "FieldByName", ["id"])), "AsInteger")), (await $.wv([$t43], "CLAIM_STATUS", { get: async () => L0["claim_status"], set: async (v) => { L0["claim_status"] = v; }, local: true }, false))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddLoss", "XFSpeedButton2Click", async function XFSpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit14")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!! Avto.yürüşü(km) sahəsi boşdur"])));
    }
    await $.mset((await $.v(C, "DBEdit21")), "Text", (await $.call(C, "floattostr", [(await $.mcall((await $.mv((await $.v(C, "DmLoss")), "amartizator")), "CallFloatFunction", ["get_Ammount_amartizator", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSClaimDescription")), "FieldByName", ["id"])), "AsInteger")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "DBEdit11")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit14")), "Text"))]))]]))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFarnsiza")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFarnsiza")), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSClaimDescription")), "FieldByName", ["cid"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFarnsiza")), "open", []);
    await $.mset((await $.v(C, "DBEdit20")), "Text", (await $.call(C, "floattostr", [$.sub($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit12")), "text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit21")), "Text"))]))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFarnsiza")), "FieldByName", ["fransiza"])), "AsFloat")))])));
  } catch ($t44) {
    $.rethrowControl($t44);
    if ($.excIs($t44, "EOracleError")) {
      L0["e"] = $.exc($t44);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t44; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

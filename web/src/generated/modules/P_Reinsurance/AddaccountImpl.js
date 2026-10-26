// Generated from AddaccountImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AddaccountImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "DBCtrls", "ComCtrls", "DMreinsuranceImpl", "Frmreinsoperationimpl"]);
  const C = [U];
  U.defClass("TAddaccount", "TForm", {"xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "dblookupcombobox7": {"name": "DBLookupComboBox7", "type": "TDBLookupComboBox"}, "dblookupcombobox8": {"name": "DBLookupComboBox8", "type": "TDBLookupComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Addaccount", null, "TAddaccount");
  });
  U.method("TAddaccount", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAddaccount", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "S"))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
    await $.mset((await $.v(C, "TabSheet1")), "TabVisible", true);
    await $.mset((await $.v(C, "TabSheet2")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
    await $.mset((await $.v(C, "TabSheet4")), "TabVisible", false);
    await $.mset((await $.v(C, "edit1")), "Text", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["SIGORTA_HAQQI"])), "AsFloat"))])));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "Z"))) {
      await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccZ")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccZ")), "SetVariable", ["p_bardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
      await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccZ")), "open", []);
      await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
      await $.mset((await $.v(C, "TabSheet1")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
      await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet4")), "TabVisible", false);
      await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["SIGORTA_HAQQI"])), "AsString")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "X"))) {
        await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccX")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccX")), "SetVariable", ["p_bardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccX")), "open", []);
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
        await $.mset((await $.v(C, "TabSheet1")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet2")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet3")), "TabVisible", true);
        await $.mset((await $.v(C, "TabSheet4")), "TabVisible", false);
      } else {
        await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccS")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccS")), "SetVariable", ["p_bardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustaccS")), "open", []);
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
        await $.mset((await $.v(C, "TabSheet1")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet2")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
        await $.mset((await $.v(C, "TabSheet4")), "TabVisible", true);
        await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["SIGORTA_HAQQI"])), "AsString")));
      }
    }
  }
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboBox6")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustacc")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustacc")), "SetVariable", ["p_bardero_no", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "TSCustacc")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddaccount", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "S"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri Hesabı(TS) sahəsi boşdur"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Kass və ya müxbir hesabı sahəsi boşdur"])));
      return L0.result;
    }
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_bardero_odeme", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "edit1")), "Text"))]))]])));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid1")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "Z"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri Hesabı(TS) sahəsi boşdur"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Kassa və ya müxbir hesabı sahəsi boşdur"])));
      return L0.result;
    }
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_lossbardero_odeme", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.mv((await $.v(C, "edit2")), "Text"))]])));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid3")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "X"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri Hesabı(TS) sahəsi boşdur"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox6")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Kassa və ya müxbir hesabı sahəsi boşdur"])));
      return L0.result;
    }
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_terbardero_odeme", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid5")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue"))]])));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid5")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid5")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsoperation")), "op")), "Sub"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox7")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri Hesabı(TS) sahəsi boşdur"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Kassa və ya müxbir hesabı sahəsi boşdur"])));
      return L0.result;
    }
    L0["a"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "P_ins_reins")), "CallProcedure", ["reins_subbardero_odeme", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")), (await $.mv((await $.v(C, "DBLookupComboBox8")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox7")), "KeyValue")), (await $.mv((await $.v(C, "edit3")), "Text"))]])));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsoperation")), "XDBGrid7")), "DataSource")), "DataSet")), "Locate", ["bardero_no", L0["a"], []])));
  }
  await $.mcall((await $.v(C, "Addaccount")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddaccount", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}

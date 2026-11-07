// Generated from ShecudileImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ShecudileImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Dmretsetitnq"]);
  const C = [U];
  U.defClass("TSecudile", "TForm", {"rgannuty": {"name": "RGAnnuty", "type": "TRadioGroup"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "gdovr": {"name": "Gdovr", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cmbboxperiodrate": {"name": "CmbBoxPeriodRate", "type": "TComboBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("Secudile", null, "TSecudile");
  });
  U.method("TSecudile", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "perrate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "dmrt")), "PersonLinkANUITET")), "AsInteger", (await $.mv((await $.mv((await $.v(C, "Secudile")), "RGAnnuty")), "ItemIndex")));
  await $.mset((await $.mv((await $.v(C, "dmrt")), "PersonLinkGUZESHT")), "AsInteger", (await $.call(C, "strtoint", [(await $.mv((await $.mv((await $.v(C, "Secudile")), "Gdovr")), "text"))])));
  { const $t1 = (await $.mv((await $.v(C, "CmbBoxPeriodRate")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      L0["perrate"] = 1;
    }
    else if ($.eq($t1, 1)) {
      L0["perrate"] = 3;
    }
    else if ($.eq($t1, 2)) {
      L0["perrate"] = 6;
    }
    else {
      L0["perrate"] = 12;
    }
  }
  await $.mset((await $.mv((await $.v(C, "dmrt")), "PersonLinkPERRATE")), "AsInteger", L0["perrate"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSecudile", "GdovrKeyPress", async function GdovrKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}

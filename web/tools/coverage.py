import sys,glob,collections,traceback
sys.path.insert(0,'.')
from pas2js import parse_unit_file, collect_sigs, gen_unit, PasError
from modules import ACTIONS
import os
R=os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))+'/'
dirs=sorted(set(d for _,d in ACTIONS.values()))+['Packages/sboapi50']
files=[f for d in dirs for f in glob.glob(R+d+'/*.pas') if not f.endswith('_TLB.pas') and not f.lower().endswith('/forms.pas')]
units=[];bad=[]
for f in files:
    try: units.append((f,parse_unit_file(f)))
    except Exception as e: bad.append((f,repr(e)[:200]))
sigs={}
for f,u in units: collect_sigs(u,sigs)
ok=fail=0; errs=collections.Counter(); samples={}
for f,u in units:
    try:
        code,o,fl=gen_unit(u,sigs,u['records']); ok+=o; fail+=fl
        for r in u['routines']:
            pass
    except Exception as e:
        bad.append((f,'GEN '+repr(e)[:200])); traceback.print_exc(); break
    for r in u['routines']:
        if r['error']:
            key=r['error'][:60]; errs[key]+=1; samples.setdefault(key,(f,r['sig']['name'],r['error']))
print('units',len(units),'unit-fail',len(bad),'routines ok',ok,'fail',fail)
for b in bad[:30]: print(' BAD',b)
for k,c in errs.most_common(40): print(c,samples[k])

# Installation files (SmartBank `Bin` folder)

The desktop SmartBank reads some per-bank files that sit next to `SmartBank.exe` and are not part of the
source repository. Copy them into this folder **unchanged** and rebuild the web app
(`docker compose up -d --build`); the web version then reads them as the desktop program does.

| File | Used by |
|---|---|
| `CMPopupMenu.ini` | Kreditlər / Kreditlərin idarə olunması — right-click menu of the credit list (plugin packages) |
| `CMToolBarBootom.ini`, `CMToolBarTop.ini` | Kreditlər / Kreditlərin idarə olunması — plugin tool bars |
| `CMMainMenu.ini` | credit manager main menu (if the bank uses one) |

Any `*.ini` file here is available to the program under its own name (`ExtractFilePath(Application.ExeName) + 'X.ini'`,
whatever folder the code builds the path from). The file is read as UTF-16/UTF-8 when it is one, otherwise as
Windows-1251. Every BPL package of `Packages/SB_Credit` and `Packages/ArCive_Credit` is already part of the web
build, so the `Plugin=X.bpl` entries of these files work as they are; a package outside those folders named by a
file here needs `python3 tools/build.py` once (it builds the packages the files name).

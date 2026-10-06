# Leben am Tollensetal – Bürgerinitiative (tollensetal.org)

Modernisierte, barrierefreie und vollständig responsive Website für die **Bürgerinitiative „Leben am Tollensetal“** (Alt Tellin / Hohenbüssow, Mecklenburg-Vorpommern).

Die Website dokumentiert den über ein Jahrzehnt währenden Widerstand gegen die industrielle Megafabrik Alt Tellin, bewahrt die historischen Dokumente, bietet eine Chronik bis zur verheerenden Brandkatastrophe vom 30. März 2021 und setzt sich für den Schutz der Flusslandschaft Tollensetal ein.

---

## 🌟 Merkmale des Relaunchs

- **100% Barrierefrei & Durchsuchbar:** Vollständige Ablösung der historischen 2500px-Bitmap-Grafik durch echtes, semantisches HTML5. Alle Texte sind screenreader-tauglich und suchmaschinenindizierbar.
- **Mobile First & Responsive:** Optimiert für Smartphones, Tablets und hochauflösende Desktop-Monitore.
- **Interaktive Chronik (2006–heute):** Chronologische Zeitleiste vom Skandal in Medow über die Sternmärsche bis zum Brand 2021 und heutigen Zukunftsinitiativen.
- **Mahnmal 2021:** Würdiges, dokumentarisches Gedenken an die Brandkatastrophe vom 30. März 2021 (ca. 50.000 verbrannte Tiere).
- **Vollständiges Text- & Dokumentenarchiv:** Alle historischen Originaltexte mit thematischen Reitern und aufklappbaren Artikeln sowie Original-PDFs zum Download.
- **Datenschutzfreundlich (DSGVO):** Keine Cookies, keine Tracking-Skripte, keine externen Schriftenserver (System-Font-Stack), extrem schnelle Ladezeiten.
- **Zero-Build & Wartungsarm:** Reines Vanilla HTML5, CSS und JavaScript – kann von Olaf und Mitstreitern direkt im Browser oder Editor ohne npm/Node-Build-Tools bearbeitet werden.

---

## 🚀 GitHub Pages & CI/CD Pipeline

Das Projekt wird automatisiert über GitHub Actions auf GitHub Pages bereitgestellt:

- **Pipeline-Datei:** `.github/workflows/deploy.yml`
- **Trigger:** Jeder Commit auf den Branch `main`
- **Domain:** `tollensetal.org` (konfiguriert via `CNAME`)

### GitHub Repository Einstellungen für Pages

Damit das Deployment über GitHub Actions greift:
1. Im GitHub Repository auf **Settings** → **Pages** gehen.
2. Unter **Build and deployment** > **Source** auswählen: **GitHub Actions**.
3. Nach dem ersten Push deployt der Workflow automatisch auf `https://tollensetal.org`.

---

## 💻 Lokale Vorschau

Da es sich um reine statische Dateien handelt, kann die Seite mit jedem einfachen Webserver lokal getestet werden:

### Mit Python:
```bash
python -m http.server 8000
```
Anschließend im Browser öffnen: [http://localhost:8000](http://localhost:8000)

### Mit Node / npx:
```bash
npx serve .
```

---

## 📁 Projektstruktur

```
WebSite.TT/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD Pipeline
├── assets/
│   ├── docs/                   # PDF- & DOC-Originaldokumente
│   │   ├── Gemeinsamer_Aufruf.pdf
│   │   ├── Tagesordnung.pdf
│   │   └── Leserbrief_Demminer_Zeitung_2009.doc
│   └── images/                 # Aufbereitete Fotos & Grafiken
│       ├── alt_tellin_brand_2021.jpg
│       ├── sternmarsch_2008.jpg
│       ├── medow_2006.jpg
│       ├── polizei_widerstand_2009.png
│       ├── tollense_weide.jpg
│       ├── tollense_steg.jpg
│       ├── tollense_schafe.jpg
│       └── tollense_landschaft_blick.jpg
├── archive_original/           # Lokale historische Sicherung der alten Seite
├── CNAME                       # Custom Domain (tollensetal.org)
├── index.html                  # Hauptseite (One-Pager mit semantischen Sektionen)
├── style.css                   # Modernes, modulares Stylesheet
├── main.js                     # Vanilla JS (Navigation, Lightbox, Archiv-Filter)
├── .gitignore
└── README.md
```

---

## 📬 Kontakt

**Bürgerinitiative Leben am Tollensetal**  
Hohenbüssow 1  
17129 Alt Tellin  
E-Mail: [info@tollensetal.org](mailto:info@tollensetal.org)  
Verantwortlich: Olaf Spillner

# RGC Webseite

Dies ist das Softwareprojekt für die modernisierte Webseite des Tanzsportclubs Rot-Gold-Casino Nürnberg.

## Technologien

- [NextJS](https://nextjs.org/) (mit [Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props))
- Styling über [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. Git-Repository klonen:

   ```shell
   git clone https://github.com/TSC-Rot-Gold-Casino-Nurnberg-e-V/rgc-website.git
   ```

2. Ins Projektverzeichnis wechseln:

   ```shell
   cd rgc-website
   ```

3. Erforderliche Pakete installieren:

   ```shell
   npm install
   ```

4. Umgebungskonfiguration erstellen:

   ```shell
   cp .env.example .env.local
   ```

   und die Werte in `.env.local` entsprechend anpassen

5. Entwicklungsserver starten:

   ```shell
   npm run dev
   ```

## Lokale Qualitaetschecks

Node.js `^22.12.0`, `^24.0.0` oder `>=26.0.0` wird benoetigt. Vor der
Uebergabe von Aenderungen zur Pruefung immer den vollstaendigen Check
ausfuehren:

```shell
npm run check
```

`check` prueft die Formatierung, ESLint, die von Next.js erzeugten Typen,
TypeScript und die gesamte Vitest-Suite. Die Pruefungen laufen bewusst
sequentiell und fuer alle Projektdateien, damit der Ablauf einfach und wartbar
bleibt.

Einzelne Befehle:

| Befehl | Zweck |
| --- | --- |
| `npm run format` | Nicht ignorierte Dateien formatieren |
| `npm run format:check` | Formatierung nicht ignorierter Dateien pruefen |
| `npm run lint` | ESLint ausfuehren |
| `npm run lint:fix` | ESLint-Autofixes anwenden |
| `npm run typecheck` | Next.js-Typen erzeugen und TypeScript pruefen |
| `npm test` | Gesamte Vitest-Suite ausfuehren |
| `npm run test:watch` | Vitest im Watch-Modus starten |
| `npm run build` | Produktionsbuild ausfuehren |

`format` und `lint:fix` veraendern Dateien absichtlich. `check` erzeugt bei
Bedarf nur ignorierte Next.js-Typdateien.

## Fehler bei Zugriffsrechten von Turnierergebnissen beheben

1. ZIP-Datei entpacken
2. Mit dem Terminal in den Ordner wechseln
3. Befehl `chmod -R 777 .` ausführen
4. ZIP-Datei wieder erstellen
5. ZIP-Datei hochladen

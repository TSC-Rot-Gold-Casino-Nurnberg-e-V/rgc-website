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

## Fehler bei Zugriffsrechten von Turnierergebnissen beheben

1. ZIP-Datei entpacken
2. Mit dem Terminal in den Ordner wechseln
3. Befehl `chmod -R 777 ./*` ausführen
4. ZIP-Datei wieder erstellen
5. ZIP-Datei hochladen

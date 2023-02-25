# RGC Webseite

Dies ist das Softwareprojekt für die modernisierte Webseite des Tanzsportclubs Rot-Gold-Casino Nürnberg.

## Technologien

- [NextJS](https://nextjs.org/) (mit [Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props))
- Styling über [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. Git-Repository klonen:

   ```
   git clone https://github.com/TSC-Rot-Gold-Casino-Nurnberg-e-V/rgc-website.git
   ```

2. Ins Projektverzeichnis wechseln:

   ```
   cd rgc-website
   ```

3. Erforderliche Pakete installieren:

   ```
   npm install
   ```

4. Umgebungskonfiguration erstellen:

   ```
   cp .env.example .env.local
   ```

   und die Werte in `.env.local` entsprechend anpassen

5. Entwicklungsserver starten:

   (setzt voraus, dass lokal das [RGC CMS](https://github.com/TSC-Rot-Gold-Casino-Nurnberg-e-V/rgc-cms) läuft)

   ```
   npm run dev
   ```

# Louis Blooms — Entwurf

Gestaltungsentwurf für den Onlineshop einer Berliner Floristik.
Statische Einzelseite, kein Backend.

**Ansehen:** https://larshaase.github.io/bloomoptica-entwurf/

## Stand

Entwurf. Preise, Zeitfenster und Texte sind Platzhalter. Zehn der Bilder sind
noch Stockmaterial (Unsplash-Lizenz), zwölf sind eigene Aufnahmen.

## Aufbau

| | |
|---|---|
| `index.html` | die komplette Seite, CSS und JavaScript inline |
| `bilder/` | WebP, feste Seitenverhältnisse (4:5, 1:1, 3:2) |
| `fonts/` | Jost, selbst gehostet — kein Google-CDN |

## Gestaltung

Orientiert an flowerbx.com: Grundton Schwarz, keine Rundungen, Versalien mit
weiter Sperrung, Farbe kommt ausschließlich aus den Blumen.

Bewegung nach fester Arbeitsanweisung — nur `transform` und `opacity`,
Dauern zwischen 150 und 300 ms, `prefers-reduced-motion` vollständig
respektiert.

# Kleine Geburtstags-Schnitzeljagd

Eine einfache statische Webseite mit Codewort-Eingabe und Geschenkseite.

## Bild hinzufügen

Lege das Geschenkfoto direkt neben `geschenk.html` und nenne es entweder:

- `Geschenk.jpg` für ein normales Foto
- `Geschenk.png` für eine Grafik oder ein Bild mit Transparenz

Die Seite probiert automatisch zuerst JPG und danach PNG.

## Veröffentlichung mit GitHub Pages

1. Erstelle auf GitHub ein neues Repository.
2. Lade die Dateien dieses Ordners in das Repository hoch.
3. Öffne im Repository `Settings` → `Pages`.
4. Wähle bei der Quelle `Deploy from a branch`, anschließend den Branch `main` und den Ordner `/ (root)`.
5. Speichere die Einstellung und öffne die angezeigte GitHub-Pages-Adresse.

Die Seite braucht keinen Server und keine Datenbank. Das Codewort wird im Browser geprüft; im Quellcode steht nur der Hash, nicht das lesbare Codewort. Für eine Geburtstags-Schnitzeljagd ist das ausreichend, aber keine echte Sicherheitsfunktion.

# AvalynxLoader

[![npm version](https://img.shields.io/npm/v/avalynx-loader)](https://www.npmjs.com/package/avalynx-loader)
[![npm downloads](https://img.shields.io/npm/dt/avalynx-loader)](https://www.npmjs.com/package/avalynx-loader)
[![jsDelivr](https://img.shields.io/jsdelivr/npm/hm/avalynx-loader)](https://www.jsdelivr.com/package/npm/avalynx-loader)
[![License](https://img.shields.io/npm/l/avalynx-loader)](LICENSE)
[![Tests](https://github.com/avalynx/avalynx-loader/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/avalynx/avalynx-loader/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/avalynx/avalynx-loader/branch/main/graph/badge.svg)](https://codecov.io/gh/avalynx/avalynx-loader)
[![GitHub stars](https://img.shields.io/github/stars/avalynx/avalynx-loader?style=flat&logo=github)](https://github.com/avalynx/avalynx-loader)

AvalynxLoader ist eine leichtgewichtige JavaScript-Bibliothek, die entwickelt wurde, um ein Lade-Overlay für DOM-Elemente bereitzustellen. Basierend auf Bootstrap >=5.3 ohne jegliche Framework-Abhängigkeiten.

## Funktionen

- **Leichtgewichtig**: AvalynxLoader ist eine leichtgewichtige Bibliothek ohne schwere Abhängigkeiten.
- **Lade-Overlay**: AvalynxLoader bietet eine einfache Möglichkeit, Lade-Overlays für DOM-Elemente zu erstellen und zu verwalten.

## Beispiel

Hier ist ein einfaches Beispiel, wie du AvalynxLoader in deinem Projekt verwenden kannst:

* [Übersicht](https://avalynx-loader.jbs-newmedia.de/examples/index.html)
* [Loader für 2 Elemente](https://avalynx-loader.jbs-newmedia.de/examples/loader-for-2-elements.html)
* [Loader für 3 Elemente mit Lade-Button](https://avalynx-loader.jbs-newmedia.de/examples/loader-for-3-elements-with-load-button.html)


## Installation

Um AvalynxLoader in deinem Projekt zu verwenden, kannst du es direkt in deine HTML-Datei einbinden. Stelle sicher, dass du Bootstrap 5.3 oder höher in deinem Projekt eingebunden hast, damit AvalynxLoader korrekt funktioniert.

Zuerst Bootstrap einbinden:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

Dann AvalynxLoader einbinden:

```html
<script src="pfad/zu/avalynx-loader.js"></script>
```

Ersetze `pfad/zu/avalynx-loader.js` durch den tatsächlichen Pfad zur Datei in deinem Projekt.

## Installation via jsDelivr ([Link](https://cdn.jsdelivr.net/npm/avalynx-loader/))

AvalynxLoader ist auch über [jsDelivr](https://www.jsdelivr.com/) verfügbar. Du kannst es so in dein Projekt einbinden:

```html
<script src="https://cdn.jsdelivr.net/npm/avalynx-loader@1.0.2/dist/js/avalynx-loader.min.js"></script>
```

## Installation via NPM ([Link](https://www.npmjs.com/package/avalynx-loader))

AvalynxLoader ist auch als npm-Paket verfügbar. Du kannst es mit dem folgenden Befehl zu deinem Projekt hinzufügen:

```bash
npm install avalynx-loader
```

Nach der Installation kannst du AvalynxLoader wie folgt in deine JavaScript-Datei importieren:

```javascript
import { AvalynxLoader } from 'avalynx-loader';
```

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-loader
```

Nach der Installation kannst du AvalynxLoader wie folgt in deine JavaScript-Datei importieren:

```javascript
import { AvalynxLoader } from 'avalynx-loader';
```

Stelle sicher, dass du auch das JS/CSS von Bootstrap in dein Projekt einbindest, damit AvalynxLoader korrekt angezeigt wird.

## Installation via Symfony AssetComposer

Weitere Informationen zum Symfony AssetComposer Bundle findest du [hier](https://github.com/jbsnewmedia/asset-composer-bundle).

```twig
{% do addAssetComposer('avalynx/avalynx-loader/dist/js/avalynx-loader.js') %}
```

Stelle sicher, dass du auch das JS/CSS von Bootstrap in dein Projekt einbindest, damit AvalynxLoader korrekt angezeigt wird.

## Installation via Composer ([Link](https://packagist.org/packages/avalynx/avalynx-loader))

AvalynxLoader ist auch als Composer-Paket verfügbar. Du kannst es mit dem folgenden Befehl zu deinem Projekt hinzufügen:

```bash
composer require avalynx/avalynx-loader
```

Nach der Installation kannst du AvalynxLoader wie folgt in deine HTML-Datei einbinden:

```html
<script src="vendor/avalynx/avalynx-loader/dist/js/avalynx-loader.js"></script>
``` 

Stelle sicher, dass du auch das JS/CSS von Bootstrap in dein Projekt einbindest, damit AvalynxLoader korrekt angezeigt wird.

## Verwendung

Um AvalynxLoader in deinem Projekt zu verwenden, binde die AvalynxLoader-JavaScript-Datei in dein Projekt ein und initialisiere die Klasse mit dem entsprechenden Selektor.

```javascript
const myLoader = new AvalynxLoader("#myElement");
myLoader.load=true;
/* etwas tun */
myLoader.load=false;
```

## Optionen

AvalynxLoader ermöglicht die folgenden Optionen zur Anpassung:

- `selector`: Ein benutzerdefinierter Selektor für die Zieltabellen im DOM (Standard: `'.avalynx-loader'`).
- `options`: Ein Objekt, das die folgenden Schlüssel enthält:
    - `className`: (string) Ein benutzerdefinierter Klassenname für das Loader-Element (Standard: `'spinner-border text-primary'`).
- `language` Ein Objekt, das die folgenden Schlüssel enthält:
    - `loaderText`: (string) Ein benutzerdefinierter Text für das Loader-Element. Wenn ein leerer String gesetzt wird, wird kein Text angezeigt. (Standard: `'Loading...'`).

## Beitragen

Beiträge sind willkommen! Wenn du etwas beitragen möchtest, forke bitte das Repository und sende einen Pull Request mit deinen Änderungen oder Verbesserungen. Wir suchen nach Beiträgen in den folgenden Bereichen:

- Fehlerbehebungen (Bug fixes)
- Funktionserweiterungen
- Dokumentationsverbesserungen

Bevor du deinen Pull Request einreichst, stelle bitte sicher, dass deine Änderungen gut dokumentiert sind und dem bestehenden Codestil des Projekts entsprechen.

## Lizenz

AvalynxLoader ist Open-Source-Software, die unter der [MIT-Lizenz](LICENSE) lizenziert ist.

## Kontakt

Wenn du Fragen, Feature-Anfragen oder Probleme hast, öffne bitte ein Issue in unserem [GitHub-Repository](https://github.com/avalynx/avalynx-loader/issues) oder sende einen Pull Request.

Vielen Dank, dass du AvalynxLoader für dein Projekt in Betracht ziehst!

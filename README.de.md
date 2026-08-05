# AvalynxLoader

[![npm version](https://jbs-newmedia.de/badge/npm/avalynx-loader/version.svg)](https://www.npmjs.com/package/avalynx-loader)
[![npm downloads](https://jbs-newmedia.de/badge/npm/avalynx-loader/download.svg)](https://www.npmjs.com/package/avalynx-loader)
[![jsDelivr](https://jbs-newmedia.de/badge/jsdelivr/avalynx-loader/hits.svg)](https://www.jsdelivr.com/package/npm/avalynx-loader)
[![License](https://jbs-newmedia.de/badge/npm/avalynx-loader/license.svg)](LICENSE)
[![Tests](https://jbs-newmedia.de/badge/github/avalynx/avalynx-loader/tests.svg)](https://github.com/avalynx/avalynx-loader/actions/workflows/tests.yml)
[![codecov](https://jbs-newmedia.de/badge/codecov/avalynx/avalynx-loader/coverage.svg)](https://codecov.io/gh/avalynx/avalynx-loader)
[![GitHub stars](https://jbs-newmedia.de/badge/github/avalynx/avalynx-loader/stars.svg)](https://github.com/avalynx/avalynx-loader)

AvalynxLoader ist eine leichtgewichtige JavaScript-Bibliothek, die entwickelt wurde, um ein Lade-Overlay für DOM-Elemente bereitzustellen. Basierend auf Bootstrap >=5.3 ohne jegliche Framework-Abhängigkeiten.

## Funktionen

- **Leichtgewichtig**: AvalynxLoader ist eine leichtgewichtige Bibliothek ohne schwere Abhängigkeiten.
- **Lade-Overlay**: AvalynxLoader bietet eine einfache Möglichkeit, Lade-Overlays für DOM-Elemente zu erstellen und zu verwalten.

## Beispiele

Hier ist ein einfaches Beispiel für die Verwendung von AvalynxLoader in Ihrem Projekt:

* [Übersicht](https://avalynx-loader.jbs-newmedia.de/examples/index.html)
* [Loader für 2 Elemente](https://avalynx-loader.jbs-newmedia.de/examples/loader-for-2-elements.html)
* [Loader für 3 Elemente mit Lade-Button](https://avalynx-loader.jbs-newmedia.de/examples/loader-for-3-elements-with-load-button.html)


## Installation

Um AvalynxLoader in Ihrem Projekt zu verwenden, können Sie es direkt in Ihre HTML-Datei einbinden. Stellen Sie sicher, dass Sie Bootstrap 5.3 oder höher in Ihrem Projekt eingebunden haben, damit AvalynxLoader korrekt funktioniert.

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

Ersetzen Sie `pfad/zu/avalynx-loader.js` durch den tatsächlichen Pfad zur Datei in Ihrem Projekt.

## Installation via jsDelivr ([Link](https://cdn.jsdelivr.net/npm/avalynx-loader/))

AvalynxLoader ist auch über [jsDelivr](https://www.jsdelivr.com/) verfügbar. Sie können es so in Ihr Projekt einbinden:

```html
<script src="https://cdn.jsdelivr.net/npm/avalynx-loader@1.0.3/dist/js/avalynx-loader.min.js"></script>
```

## Installation via NPM ([Link](https://www.npmjs.com/package/avalynx-loader))

AvalynxLoader ist auch als npm-Paket verfügbar. Sie können es mit dem folgenden Befehl zu Ihrem Projekt hinzufügen:

```bash
npm install avalynx-loader
```

Nach der Installation können Sie AvalynxLoader wie folgt in Ihre JavaScript-Datei importieren:

```javascript
import { AvalynxLoader } from 'avalynx-loader';
```

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-loader
```

Nach der Installation können Sie AvalynxLoader wie folgt in Ihre JavaScript-Datei importieren:

```javascript
import { AvalynxLoader } from 'avalynx-loader';
```

Stellen Sie sicher, dass Sie auch das JS/CSS von Bootstrap in Ihr Projekt einbinden, damit AvalynxLoader korrekt angezeigt wird.

## Installation via Symfony AssetComposer

Weitere Informationen zum Symfony AssetComposer Bundle finden Sie [hier](https://github.com/jbsnewmedia/asset-composer-bundle).

```twig
{% do addAssetComposer('avalynx/avalynx-loader/dist/js/avalynx-loader.js') %}
```

Stellen Sie sicher, dass Sie auch das JS/CSS von Bootstrap in Ihr Projekt einbinden, damit AvalynxLoader korrekt angezeigt wird.

## Installation via Composer ([Link](https://packagist.org/packages/avalynx/avalynx-loader))

AvalynxLoader ist auch als Composer-Paket verfügbar. Sie können es mit dem folgenden Befehl zu Ihrem Projekt hinzufügen:

```bash
composer require avalynx/avalynx-loader
```

Nach der Installation können Sie AvalynxLoader wie folgt in Ihre HTML-Datei einbinden:

```html
<script src="vendor/avalynx/avalynx-loader/dist/js/avalynx-loader.js"></script>
``` 

Stellen Sie sicher, dass Sie auch das JS/CSS von Bootstrap in Ihr Projekt einbinden, damit AvalynxLoader korrekt angezeigt wird.

## Verwendung

Um AvalynxLoader in Ihrem Projekt zu verwenden, binden Sie die AvalynxLoader-JavaScript-Datei in Ihr Projekt ein und initialisieren Sie die Klasse mit dem entsprechenden Selektor.

```javascript
const myLoader = new AvalynxLoader("#myElement");
myLoader.load=true;
/* etwas tun */
myLoader.load=false;
```

## Optionen

AvalynxLoader ermöglicht die folgenden Optionen zur Anpassung:

- `selector`: Ein benutzerdefinierter Selektor für die Loader-Elemente im DOM (Standard: `'.avalynx-loader'`).
- `options`: Ein Objekt, das die folgenden Schlüssel enthält:
    - `className`: (string) Ein benutzerdefinierter Klassenname für das Loader-Element (Standard: `'spinner-border text-primary'`).
- `language` Ein Objekt, das die folgenden Schlüssel enthält:
    - `loaderText`: (string) Ein benutzerdefinierter Text für das Loader-Element. Wenn ein leerer String gesetzt wird, wird kein Text angezeigt. (Standard: `'Loading...'`).

## Beitragen

Beiträge sind willkommen! Wenn Sie etwas beitragen möchten, forken Sie bitte das Repository und senden Sie einen Pull-Request mit Ihren Änderungen oder Verbesserungen. Wir suchen Beiträge in den folgenden Bereichen:

- Fehlerbehebungen (Bug fixes)
- Funktionserweiterungen
- Dokumentationsverbesserungen

Bevor Sie Ihren Pull-Request einreichen, stellen Sie bitte sicher, dass Ihre Änderungen gut dokumentiert sind und dem bestehenden Codestil des Projekts entsprechen.

## Lizenz

AvalynxLoader ist Open-Source-Software, die unter der [MIT-Lizenz](LICENSE) lizenziert ist.

## Kontakt

Wenn Sie Fragen, Funktionswünsche oder Probleme haben, eröffnen Sie bitte ein Issue in unserem [GitHub-Repository](https://github.com/avalynx/avalynx-loader/issues) oder reichen Sie einen Pull-Request ein.

Vielen Dank, dass Sie AvalynxLoader für Ihr Projekt in Betracht ziehen!
# AvalynxLoader

AvalynxLoader is a lightweight JavaScript library designed to provide a loading overlay for DOM elements. Based on Bootstrap >=5.3 without any framework dependencies.

## Features

- **Lightweight**: AvalynxLoader is a lightweight library without heavy dependencies.
- **Loading Overlay**: AvalynxLoader provides a simple way to create and manage loading overlays for DOM elements.

## Example

Here's a simple example of how to use AvalynxLoader in your project:

* [Overview](https://avalynx-loader.jbs-newmedia.de/examples/index.html)
* [Loader for 2 elements](https://avalynx-loader.jbs-newmedia.de/examples/loader-for-2-elements.html)
* [Loader for 3 elements with load button](https://avalynx-loader.jbs-newmedia.de/examples/loader-for-3-elements-with-load-button.html)


## Installation

To use AvalynxLoader in your project, you can directly include it in your HTML file. Ensure you have Bootstrap 5.3 or higher included in your project for AvalynxLoader to work correctly.

First, include Bootstrap:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

Then, include AvalynxLoader:

```html
<script src="path/to/avalynx-loader.js"></script>
```

Replace `path/to/avalynx-loader.js` with the actual path to the file in your project.

## Installation via jsDelivr ([Link](https://cdn.jsdelivr.net/npm/avalynx-loader/))

AvalynxLoader is also available via [jsDelivr](https://www.jsdelivr.com/). You can include it in your project like this:

```html
<script src="https://cdn.jsdelivr.net/npm/avalynx-loader@0.0.3/dist/js/avalynx-loader.min.js"></script>
```

## Installation via NPM ([Link](https://www.npmjs.com/package/avalynx-loader))

AvalynxLoader is also available as a npm package. You can add it to your project with the following command:

```bash
npm install avalynx-loader
```

After installing, you can import AvalynxLoader into your JavaScript file like this:

```javascript
import { AvalynxLoader } from 'avalynx-loader';
```

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-loader
```

After installing, you can import AvalynxLoader into your JavaScript file like this:

```javascript
import { AvalynxLoader } from 'avalynx-loader';
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxLoader displays correctly.

## Installation via Composer ([Link](https://packagist.org/packages/avalynx/avalynx-loader))

AvalynxLoader is also available as a Composer package. You can add it to your project with the following command:

```bash
composer require avalynx/avalynx-loader
```

After installing, you can import AvalynxLoader into your HTML file like this:

```html
<script src="vendor/avalynx/avalynx-loader/dist/js/avalynx-loader.js"></script>
``` 

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxLoader displays correctly.

## Usage

To use AvalynxLoader in your project, include the AvalynxLoader JavaScript file in your project and initialize the class with the appropriate selector.

```javascript
const myLoader = new AvalynxLoader("#myElement");
myLoader.load=true;
/* do something */
myLoader.load=false;
```

## Options

AvalynxLoader allows the following options for customization:

- `selector`: A custom selector for targeting tables within the DOM (default: `'.avalynx-loader'`).
- `options`: An object containing the following keys:
    - `className`: (string) A custom class name for the loader element (default: `'spinner-border text-primary'`).
- `language` An object containing the following keys:
    - `loaderText`: (string) A custom text for the loader element. If set to empty string, no text will be displayed. (default: `'Loading...'`).

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes or improvements. We're looking for contributions in the following areas:

- Bug fixes
- Feature enhancements
- Documentation improvements

Before submitting your pull request, please ensure your changes are well-documented and follow the existing coding style of the project.

## License

AvalynxLoader is open-sourced software licensed under the [MIT license](LICENSE).

## Contact

If you have any questions, feature requests, or issues, please open an issue on our [GitHub repository](https://github.com/avalynx/avalynx-loader/issues) or submit a pull request.

Thank you for considering AvalynxLoader for your project!

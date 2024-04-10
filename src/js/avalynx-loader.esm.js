/**
 * AvalynxLoader
 *
 * AvalynxLoader is a lightweight JavaScript library designed to provide a loading overlay for DOM elements. Based on Bootstrap >=5.3 without any framework dependencies.
 *
 * @version 0.0.1
 * @license MIT
 * @author https://github.com/avalynx/avalynx-loader/graphs/contributors
 * @website https://github.com/avalynx/
 * @repository https://github.com/avalynx/avalynx-loader.git
 * @bugs https://github.com/avalynx/avalynx-loader/issues
 *
 * @param {string} selector - The selector for the element(s) to update.
 * @param {object} options - Options for the loader.
 * @param {string} options.className - The class name for the loader spinner.
 * @param {string} options.loaderText - The text to display next to the loader spinner.
 *
 */

export class AvalynxLoader {
    constructor(selector, options = {}) {
        this.className = options.className || 'spinner-border text-primary';
        this.loaderText = options.loaderText || 'Loading...';

        if (!selector) {
            selector = '.avalynx-loader';
        }

        if (!selector.startsWith('.') && !selector.startsWith('#')) {
            selector = '.' + selector;
        }

        this.elements = document.querySelectorAll(selector);
        this.loaderOverlays = new Map();
    }

    set load(shouldLoad) {
        this.elements.forEach(element => {
            if (shouldLoad) {
                this.showLoader(element);
            } else {
                this.hideLoader(element);
            }
        });
    }

    showLoader(element) {
        this.ensureOverlayPresent(element);

        let overlay = this.loaderOverlays.get(element);
        overlay.style.display = 'flex';
    }

    ensureOverlayPresent(element) {
        let overlay = this.loaderOverlays.get(element);
        if (!overlay || !element.contains(overlay)) {
            this.setupOverlayAndLoader(element);
        }
    }

    hideLoader(element) {
        if (this.loaderOverlays.has(element)) {
            let overlay = this.loaderOverlays.get(element);
            overlay.style.display = 'none';
        }
    }

    setupOverlayAndLoader(element) {
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.display = 'none';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.backgroundColor = 'rgba(var(--bs-body-bg-rgb, 0, 0, 0), 0.7)';
        overlay.style.zIndex = '1000';

        const spinner = document.createElement('div');
        spinner.className = this.className;
        spinner.setAttribute('role', 'status');
        if (this.loaderText !== '') {
            spinner.innerHTML = '<span class="visually-hidden">' + this.loaderText + '</span>';
        } else {
            spinner.innerHTML = '';
        }

        overlay.appendChild(spinner);

        element.style.position = 'relative';
        element.appendChild(overlay);

        this.loaderOverlays.set(element, overlay);
    }
}

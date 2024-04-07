/**
 * AvalynxRef
 *
 * A Ref implementation for updating elements with a value like React's Ref or Vue's Ref.
 *
 * @version 0.0.1
 * @license MIT
 * @author https://github.com/avalynx/avalynx-ref/graphs/contributors
 * @website https://github.com/avalynx/
 * @repository https://github.com/avalynx/avalynx-ref.git
 * @bugs https://github.com/avalynx/avalynx-ref/issues
 *
 * @param {string} selector - The selector for the element(s) to update.
 * @param {object} options - Options for the ref.
 */

class AvalynxLoader {
	constructor(selector) {
		if (!selector) {
			selector = '.avalynx-loader';
		}

		if (!selector.startsWith('.') && !selector.startsWith('#')) {
			selector = '.' + selector;
		}

		this.elements = document.querySelectorAll(selector);
		// Statt eines einzelnen loaderOverlay, verwenden wir ein Map-Objekt
		// um jedem Element ein individuelles Overlay zuzuordnen.
		this.loaderOverlays = new Map();
	}

	set load(shouldLoad) {
		this.elements.forEach(element => {
			if (shouldLoad) {
				console.log('showLoader')
				this.showLoader(element);
			} else {
				console.log('hideLoader')
				this.hideLoader(element);
			}
		});
	}

	showLoader(element) {
		// Stellen Sie sicher, dass das Overlay vorhanden und korrekt im DOM platziert ist
		this.ensureOverlayPresent(element);

		let overlay = this.loaderOverlays.get(element);
		console.log(overlay);
		overlay.style.display = 'flex';
	}

	ensureOverlayPresent(element) {
		// Überprüfen Sie, ob das Overlay für das Element bereits existiert
		let overlay = this.loaderOverlays.get(element);
		if (!overlay || !element.contains(overlay)) {
			// Wenn das Overlay nicht existiert oder nicht mehr Teil des Elements ist,
			// richten Sie es neu ein.
			this.setupOverlayAndLoader(element);
		}
	}

	hideLoader(element) {
		// Versteckt das Overlay für das spezifische Element, falls vorhanden.
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
		spinner.className = 'spinner-border text-primary';
		spinner.setAttribute('role', 'status');
		spinner.innerHTML = '<span class="visually-hidden">Loading...</span>';

		overlay.appendChild(spinner);

		element.style.position = 'relative';
		element.appendChild(overlay);

		// Fügt das neu erstellte Overlay zum Map-Objekt hinzu.
		this.loaderOverlays.set(element, overlay);
	}
}


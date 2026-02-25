/**
 * AvalynxLoader Jest Tests
 * Comprehensive test suite for all important functionality
 */

const AvalynxLoader = require('../src/js/avalynx-loader.js');

describe('AvalynxLoader', () => {
    let consoleErrorSpy;

    beforeEach(() => {
        document.body.innerHTML = '';
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
        document.body.innerHTML = '';
    });

    describe('Constructor and selector handling', () => {
        test('initializes with default selector when none provided', () => {
            const el1 = document.createElement('div');
            el1.className = 'avalynx-loader';
            document.body.appendChild(el1);

            const loader = new AvalynxLoader();
            expect(loader.elements).toBeDefined();
            expect(loader.elements.length).toBe(1);
        });

        test('adds dot prefix if selector does not start with . or #', () => {
            const el = document.createElement('div');
            el.className = 'my-loader';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('my-loader');
            expect(loader.elements.length).toBe(1);
        });

        test('keeps # prefix for id selectors', () => {
            const el = document.createElement('div');
            el.id = 'unique-loader';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('#unique-loader');
            expect(loader.elements.length).toBe(1);
        });

        test('logs error and returns when no elements are found', () => {
            new AvalynxLoader('.not-existing');
            expect(consoleErrorSpy).toHaveBeenCalled();
            const msg = consoleErrorSpy.mock.calls[0][0];
            expect(msg).toMatch(/Loader\(s\) with selector/);
        });
    });

    describe('Options and language defaults/overrides', () => {
        test('uses default options and language', () => {
            const el = document.createElement('div');
            el.className = 'avalynx-loader';
            document.body.appendChild(el);

            const loader = new AvalynxLoader();
            expect(loader.options.className).toBe('spinner-border text-primary');
            expect(loader.language.loaderText).toBe('Loading...');
        });

        test('handles null or non-object options and language', () => {
            const el = document.createElement('div');
            el.className = 'null-check';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.null-check', null, null);
            expect(loader.options.className).toBe('spinner-border text-primary');
            expect(loader.language.loaderText).toBe('Loading...');
        });

        test('merges custom options and language', () => {
            const el = document.createElement('div');
            el.className = 'custom';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.custom', { className: 'spinner-grow text-danger' }, { loaderText: 'Bitte warten...' });
            expect(loader.options.className).toBe('spinner-grow text-danger');
            expect(loader.language.loaderText).toBe('Bitte warten...');
        });
    });

    describe('Overlay creation and visibility control', () => {
        function getOverlayFor(el, loader) {
            return loader.loaderOverlays.get(el);
        }

        test('load=true shows overlay; load=false hides overlay', () => {
            const el = document.createElement('div');
            el.className = 'target';
            el.style.width = '200px';
            el.style.height = '100px';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.target');

            // Initially there should be no overlay in DOM until first show
            expect(getOverlayFor(el, loader)).toBeUndefined();

            loader.load = true;
            const overlay = getOverlayFor(el, loader);
            expect(overlay).toBeInstanceOf(HTMLElement);
            expect(overlay.style.display).toBe('flex');

            loader.load = false;
            expect(overlay.style.display).toBe('none');
        });

        test('creates exactly one overlay per element and reuses it across calls', () => {
            const el = document.createElement('div');
            el.className = 'target2';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.target2');

            loader.load = true;
            const overlay1 = getOverlayFor(el, loader);
            expect(overlay1).toBeTruthy();

            // Calling load=true again should not create a new overlay
            loader.load = true;
            const overlay2 = getOverlayFor(el, loader);
            expect(overlay2).toBe(overlay1);

            // Ensure only one direct child (overlay) was appended
            const directChildren = Array.from(el.children).filter(child => child.nodeType === 1);
            expect(directChildren.length).toBe(1);
        });

        test('recreates overlay if it was removed from the element', () => {
            const el = document.createElement('div');
            el.className = 'target3';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.target3');
            loader.load = true;
            const overlay1 = getOverlayFor(el, loader);
            expect(overlay1).toBeTruthy();

            // Remove overlay from DOM manually
            overlay1.remove();
            // Next show should create a new overlay
            loader.load = true;
            const overlay2 = getOverlayFor(el, loader);
            expect(overlay2).toBeTruthy();
            expect(overlay2).not.toBe(overlay1);
        });

        test('hideLoader is a no-op if overlay does not exist', () => {
            const el = document.createElement('div');
            el.className = 'target4';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.target4');
            // Directly call hideLoader without showing
            expect(() => loader.hideLoader(el)).not.toThrow();
            expect(getOverlayFor(el, loader)).toBeUndefined();
        });

        test('works with multiple elements selected by the same selector', () => {
            const container = document.createElement('div');
            for (let i = 0; i < 3; i++) {
                const child = document.createElement('div');
                child.className = 'multi';
                container.appendChild(child);
            }
            document.body.appendChild(container);

            const loader = new AvalynxLoader('.multi');
            expect(loader.elements.length).toBe(3);

            loader.load = true;
            loader.elements.forEach(el => {
                const overlay = getOverlayFor(el, loader);
                expect(overlay).toBeTruthy();
                expect(overlay.style.display).toBe('flex');
            });

            loader.load = false;
            loader.elements.forEach(el => {
                const overlay = getOverlayFor(el, loader);
                expect(overlay.style.display).toBe('none');
            });
        });
    });

    describe('Spinner configuration and language text', () => {
        test('uses default spinner class and default loader text', () => {
            const el = document.createElement('div');
            el.className = 'spinner-default';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.spinner-default');
            loader.load = true;

            const overlay = loader.loaderOverlays.get(el);
            const spinner = overlay.querySelector('div');
            expect(spinner.className).toBe('spinner-border text-primary');
            const srOnly = spinner.querySelector('.visually-hidden');
            expect(srOnly).toBeTruthy();
            expect(srOnly.textContent).toBe('Loading...');
        });

        test('applies custom spinner class', () => {
            const el = document.createElement('div');
            el.className = 'spinner-custom';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.spinner-custom', { className: 'spinner-grow text-danger' });
            loader.load = true;

            const overlay = loader.loaderOverlays.get(el);
            const spinner = overlay.querySelector('div');
            expect(spinner.className).toBe('spinner-grow text-danger');
        });

        test('uses provided language text', () => {
            const el = document.createElement('div');
            el.className = 'lang-text';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.lang-text', {}, { loaderText: 'Bitte warten...' });
            loader.load = true;

            const overlay = loader.loaderOverlays.get(el);
            const spinner = overlay.querySelector('div');
            const srOnly = spinner.querySelector('.visually-hidden');
            expect(srOnly).toBeTruthy();
            expect(srOnly.textContent).toBe('Bitte warten...');
        });

        test('empty loaderText results in empty accessible text (no visible text)', () => {
            const el = document.createElement('div');
            el.className = 'lang-empty';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.lang-empty', {}, { loaderText: '' });
            loader.load = true;

            const overlay = loader.loaderOverlays.get(el);
            const spinner = overlay.querySelector('div');
            const srOnly = spinner.querySelector('.visually-hidden');
            // Accept either no span or an empty span; in both cases, nothing is announced visually
            if (srOnly) {
                expect(srOnly.textContent).toBe('');
            } else {
                expect(spinner.textContent).toBe('');
            }
        });
    });

    describe('Overlay style sanity checks', () => {
        test('overlay styles set for positioning and appearance', () => {
            const el = document.createElement('div');
            el.className = 'style-check';
            document.body.appendChild(el);

            const loader = new AvalynxLoader('.style-check');
            loader.load = true;

            const overlay = loader.loaderOverlays.get(el);
            expect(overlay.style.position).toBe('absolute');
            expect(overlay.style.top).toBe('0px');
            expect(overlay.style.left).toBe('0px');
            expect(overlay.style.width).toBe('100%');
            expect(overlay.style.height).toBe('100%');
            expect(overlay.style.alignItems).toBe('center');
            expect(overlay.style.justifyContent).toBe('center');
            expect(overlay.style.zIndex).toBe('1000');
            // Parent should become relative
            expect(el.style.position).toBe('relative');
        });
    });
});

import {AvalynxLoader} from '../src/js/avalynx-loader.esm.js';

describe('AvalynxLoader', () => {
    let avalynxLoader;
    let div;

    beforeEach(() => {
        div = document.createElement('div');
        div.id = 'test';
        document.body.appendChild(div);
        avalynxLoader = new AvalynxLoader('#test');
    });

    it('should create a avalynxLoader overlay when load is set to true', () => {
        avalynxLoader.load = true;
        expect(div.querySelector('div')).not.toBeNull();
    });

    it('should hide the loader overlay when load is set to false', () => {
        avalynxLoader.load = true;
        avalynxLoader.load = false;
        expect(div.querySelector('div').style.display).toBe('none');
    });

    it('should use the default class name and loader text if none are provided', () => {
        avalynxLoader.load = true;
        const spinner = div.querySelector('div');
        expect(avalynxLoader.options.className).toBe('spinner-border text-primary');
        expect(avalynxLoader.language.loaderText).toBe('Loading...');
    });

    it('should use the provided class name and loader text if they are provided', () => {
        avalynxLoader = new AvalynxLoader('#test', {className: 'test-class'}, {loaderText: 'Test text'});
        avalynxLoader.load = true;
        const spinner = div.querySelector('div');
        expect(avalynxLoader.options.className).toBe('test-class');
        expect(avalynxLoader.language.loaderText).toBe('Test text');
    });

});

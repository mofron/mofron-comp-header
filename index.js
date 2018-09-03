/**
 * @file   index.js
 * @brief  header component for mofron
 * @author simpart
 */
const mf      = require('mofron');
const Horizon = require('mofron-layout-horizon');
/**
 * @class mofron.comp.Header
 * @brief header component class
 */
mf.comp.Header = class extends mf.Component {
    constructor (po) {
        try {
            super();
            this.name('Header');
            this.prmMap('child');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            /* set header dom contents */
            let hdr = new mf.Dom({
                tag       : 'div',
                component : this,
                style     : { 'border-bottom-style' : 'solid',
                              'border-bottom-width' : '1px',
                              'float' : 'left' }
            });
            let pad = new mf.Dom({
                tag       : 'div',
                component : this,
                style     : { 'float'    : 'none',
                              'position' : 'static' }
            });
            
            /* set dom contents */
            this.adom().child([hdr, pad]);
            this.target(hdr);
            
            /* set default config */
            this.width('100%');
            this.height('0.5rem');
            this.bind(true);
            this.mainColor(new mf.Color(211,211,211));
            
            /* child comp is added at horizon layout */
            this.layout([new Horizon()]);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set/get header height
     *
     */
    height (prm) {
        try {
            let ret = super.height(prm);
            if (undefined === ret) {
                this.adom().child()[1].style({
                    'height' : super.height().toString()
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    bind (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return ('fixed' === this.style('position')) ? true : false;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            
            if (true === flg) {
                this.style({
                    position  : 'fixed',
                    'z-index' : 999
                });
            } else {
                this.style(
                    { position : null },
                    ('fixed' === this.style('position')) ? false : true
                );
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return mf.func.getColor(this.style('border-bottom-color'));
            }
            /* setter */
            if (true !== mf.func.isObject(prm, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'border-bottom-color' : prm.getStyle() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Header;
/* end of file */

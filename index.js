/**
 * @file   index.js
 * @brief  header component for mofron
 * @author simpart
 */
let mf = require('mofron');
let Horizon = require('mofron-layout-horizon');

/**
 * @class mofron.comp.Header
 * @brief header component class
 */
mf.comp.Header = class extends mf.Component {
    constructor (po) {
        try {
            super();
            this.name('Header');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            
            /* set header dom contents */
            var hdr = new mf.Dom({
                tag       : 'div',
                component : this,
                style     : { 'border-bottom' : 'solid 1px lightgray',
                              'float'         : 'left' }
            });
            var pad = new mf.Dom({
                tag       : 'div',
                component : this,
                style     : { 'float'    : 'none',
                              'position' : 'static' }
            });
            
            /* set dom contents */
            this.adom().child([hdr, pad]);
            this.target(hdr);
            
            /* set default size */
            this.size('100%', 50);
            this.bind(true);
            
            /* child comp is added at horizon layout */
            this.addLayout(new Horizon());
            
            /* set child component */
            if (true === mf.func.isInclude(prm, 'Component')) {
                this.addChild(prm);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts (thm) {
        try {
            if ( (null !== thm.color(0)) &&
                 (null === this.color()) ) {
                this.color(thm.color(0));
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set/get header height
     *
     * @param hei : (int,string) height
     */
    height (val) {
        try {
            let ret = super.height(val);
            if (undefined !== ret) {
                return ret;
            }
            this.adom().child()[1].style({
                'height' : ('number' === typeof val) ? val+'px' : px
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header background color setter / getter
     *
     * clr : (object) color
     */
    color (clr) {
        try {
            if (undefined === clr) {
                /* getter */
                return mf.func.getColor(this.style('background'));
            }
            /* setter */
            if (false === mf.func.isObject(clr, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.style({ 'background' : clr.getStyle() });
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
}
module.exports = mofron.comp.Header;
/* end of file */

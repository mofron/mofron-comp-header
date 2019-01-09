/**
 * @file   mofron-comp-header/index.js
 * @brief  header component for mofron
 * @author simpart
 */
const mf      = require('mofron');
const Horizon = require('mofron-layout-horizon');
const Border  = require('mofron-effect-border');
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
    
    /**
     * initialize dom contents
     * 
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.addChild(new mf.Component({}));
            this.target(this.child()[0].target());
            
            this.layout(new Horizon());
            this.effect(new Border({ type : 'bottom' }));
            
            this.size('100%', '0.5rem');
            this.bind(true);
            this.mainColor([211,211,211]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for header height
     * 
     * @param val (string) css value of height
     * @param val (undefined) call as getter
     * @return (string) height value
     * @param (null) not set yet
     */
    height (val) {
        try {
            let ret = super.height(val);
            if (undefined !== val) {
                this.getDomChild()[0].style({
                    height : val
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for bind header 
     * binding displays header even if user scrolls.
     * 
     * @param flg (boolean) binding status
     * @param flg (undefined) call as getter
     * @return (true) binding is enabled (default)
     * @return (false) binding is disabled
     */
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
    
    /**
     * setter/getter for bottom border color
     *
     * @param clr (string) 
     *
     */
    mainColor (clr) {
        try {
            let ret = this.effect('Border').color(clr);
            return (undefined !== ret) ? ret[0] : ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Header;
/* end of file */

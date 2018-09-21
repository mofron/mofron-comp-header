/**
 * @file   index.js
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
    
    initDomConts () {
        try {
            super.initDomConts();
            let conts = new mf.Component({});
            this.addChild(conts);
            this.target(conts.target());
            
            this.layout([ new Horizon() ]);
            this.effect([ new Border({ type  : 'bottom' }) ]);
            
            this.size('100%', '0.5rem');
            this.bind(true);
            this.mainColor(new mf.Color(211,211,211));
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
                /* setter */
                this.adom().child()[0].style({ 'height' : prm });
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
            let bdr = this.getConfig('effect', 'Border');
            return (null === bdr) ? null : bdr.color(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Header;
/* end of file */

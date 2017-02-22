/**
 * @file   index.js
 * @author simpart
 */
require('mofron-layout-horizon');

/**
 * @class comp.Header
 * @brief header component class
 */
mofron.comp.Header = class extends mofron.Component {
    /**
     * initialize component
     *
     * @param prm (object) Component
     */
    constructor (prm_opt) {
        try {
            super();
            this.name("Header");
            
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            /* set header dom contents */
            var hdr = new mofron.Dom('div',this);
            hdr.style('width'        , '100%');
            hdr.style('border-bottom', 'solid 1px lightgray');
            hdr.style('float'        , 'left');
            
            var pad = new mofron.Dom('div',this);
            pad.style('float'   , 'none');
            pad.style('position', 'static');
            
            /* set dom contents */
            this.vdom().child([
                hdr,
                pad
            ]);
            
            this.target(hdr);
            this.styleTgt(this.vdom());
            
            /* set default height */
            this.height(50);
            this.bind(true);
            
            
            /* child comp is added at horizon layout */
            this.addLayout(new mofron.layout.Horizon());
            
            /* set child component */
            if (true === mofron.func.isInclude(prm, 'Component')) {
                this.addChild(prm);
            }
            
            /* set theme color */
            var clr = this.theme().getColor(0);
            if (null != clr) {
                this.color(clr);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set/get header height
     *
     * @param hei : (int) height (px)
     */
    height (val) {
        try {
            if (undefined === val) {
                return this.style('height');
            }
            
            if (('number' !== typeof val) || (0 > val)) {
                throw new Error('invalid parameter');
            }
            this.style('height', val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set header background color
     *
     * clr : (object) color
     */
    color (clr) {
        try {
            if (undefined === clr) {
                return mofron.func.getColor(
                           this.style('background')
                       );
            }
            
            if ((null === clr) || ('object' !== (typeof clr))) {
                throw new Error('invalid parameter');
            }
            this.style('background', clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    bind (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                if ('fixed' === this.style('position')) {
                    return true;
                } else {
                    return false;
                }
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            if (true === flg) {
                this.style('position', 'fixed', true);
            } else {
                this.style('position', null, true);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.header = {};
module.exports = mofron.comp.Header;

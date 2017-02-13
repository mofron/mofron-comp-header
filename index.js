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
    constructor (prm, opt) {
        try {
            super(prm);
            this.name("Header");
            
            this.m_height = 50;
            
            if (null !== opt) {
                this.option(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            /* set header dom contents */
            var hdr = new mofron.util.Dom('div',this);
            this.vdom().addChild(hdr);
            this.vdom().addChild(new mofron.util.Dom('div',this));
            this.target(hdr);
            
            /* set style */
            hdr.style('width'        , '100%');
            hdr.style('border-bottom', 'solid 1px lightgray');
            hdr.style('position'     , 'fixed');
            
            /* set default height */
            this.height(this.height());
            
            /* child comp is added at horizon layout */
            this.addLayout(new mofron.layout.Horizon());
            
            /* set child component */
            if ((null !== prm) && ('object' === typeof prm)) {
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
    
    getEventTgt () {
        try {
            return this.vdom().getChild(1);
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
                return this.m_height;
            }
            
            if (('number' !== typeof val) || (0 > val)) {
                throw new Error('invalid parameter');
            }
            
            if (null === this.vdom()) {
                this.m_height = val;
                return;
            }
            
            this.target().style('height', val + 'px');
            this.vdom().getChild(1).style('height', val + 'px');
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
                return mofron.func.getColorObj(
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
}

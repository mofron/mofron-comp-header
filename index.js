/**
 * @file  mofron-comp-header/index.js
 * @brief header component for mofron
 *        ex. it is for placing at the top of the page and displaying the site title etc.
 * @feature A header's child components are placed horizontally since header has a horizon layout.
 * @attention it needs false value at bind parameter when you don't use in page top position.
 * @license MIT
 */
const Horizon = require('mofron-layout-horizon');
const cmputl  = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * constructor
     * 
     * @param (mixed) child parameter
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
	    /* init config */
            this.name("Header");
	    this.confmng().add("wrap", { type: "Dom" });
            
            if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
	    let wrap = new mofron.class.Component();
	    this.child(wrap);
	    this.childDom(wrap.childDom());
            
            this.layout(new Horizon());
            /* border config */
            this.style({
                "border-bottom-style" : "solid",
                "border-bottom-width" : "0.01rem"
            });
            
            this.size("100%", "0.5rem");
            this.bind(true);
            this.mainColor([211,211,211]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * header height
     * 
     * @param (string (size)) header height (default is "0.5rem")
     * @param (option) style option
     * @return (string (size)) header height
     * @type parameter
     */
    height (val, opt) {
        try {
            let ret = super.height(val,opt);
            if (undefined !== val) {
	        cmputl.rstyle(this, { height : val });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * binding header 
     * 
     * @param (boolean) true: header position is fixed. display header even if user scrolls. (default)
     *                  false: header position is not fixed.
     * @return (boolean) binding config
     * @type parameter
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
                this.style({ 'position': 'fixed', 'z-index': 999 });
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
     * border bottom color
     *
     * @param (mixed (color)) string: border bottom color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) stye option
     * @return (string) border bottom color
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
            return cmputl.color(this, "border-bottom-color", prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

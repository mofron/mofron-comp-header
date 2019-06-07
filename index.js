/**
 * @file   mofron-comp-header/index.js
 * @brief  header component for mofron
 * @author simpart
 */
const mf      = require('mofron');
const Horizon = require('mofron-layout-horizon');
const Border  = require('mofron-effect-border');

let mod_name = "Header";
mf.comp.Header = class extends mf.Component {
    
    /**
     * constructor
     * 
     * @param (string) 'child' function parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name(mod_name);
            this.prmOpt(po);
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
            this.addChild(new mf.Component());
            this.wrap(this.target());
            this.target(this.child()[0].target());
            
            this.layout(new Horizon());
            this.effect(new Border({ type : "bottom", tag: mod_name }));
            
            this.size("100%", "0.5rem");
            this.bind(true);
            this.mainColor([211,211,211]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * contents wrapper
     *
     * @type private
     */
    wrap (prm) {
       try { return this.member('wrap', ['Base', 'Dom'], prm); } catch (e) {
           console.error(e.stack);
           throw e;
       }
    }
    
    /**
     * header height
     * 
     * @param (string (size)) header height (default is "0.5rem")
     * @return (string (size)) header height
     * @type tag parameter
     */
    height (val) {
        try {
            let ret = super.height(val);
            if (undefined !== val) {
                this.wrap().style({ height : val });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * binding header 
     * binding displays header even if user scrolls.
     * 
     * @param (boolean) true: header position is fixed. display header even if user scrolls. (default)
     *                  false: header position is not fixed.
     * @return (boolean) binding config
     * @type tag parameter
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
     * @param (string (color)/[number, number, number]) border bottom  color (name, hex) / r,g,b
     * @return (string (color)) border bottom  color
     * @type tag parameter
     */
    mainColor (clr) {
        try {
            let ret = this.effect(['Border', mod_name]).color(clr);
            return (undefined !== ret) ? ret[0] : ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Header;
/* end of file */

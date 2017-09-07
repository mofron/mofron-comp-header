/**
 * @file   index.js
 * @author simpart
 */
let mf      = require('mofron');
let Horizon = require('mofron-layout-horizon');

/**
 * @class comp.Header
 * @brief header component class
 */
mf.comp.Header = class extends mf.Component {
    
    constructor (po) {
        try {
            super(po);
            this.name('Header');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            /* init header dom contents */
            var hdr = new mf.Dom({
                tag       : 'div',
                component : this,
                style     : {
                    'width'         : '100%',
                    'border-bottom' : 'solid 1px ' + new mf.Color(211,211,211).getStyle(),
                    'float'         : 'left'
                }
            });
            this.adom().child([
                hdr,
                new mf.Dom({
                    tag       : 'div',
                    component : this,
                    style     : {
                        'float'    : 'none',
                        'position' : 'static'
                    }
                })
            ]);
            this.target(hdr);
            
            /* set default height */
            this.height(50);
            this.bind(true);
            
            /* child comp is added at horizon layout */
            this.addLayout(new Horizon());
            
            /* set child component */
            if (true === mf.func.isInclude(prm, 'Component')) {
                this.addChild(prm);
            }
            
            /* set color */
            let thm_clr = this.theme().color(0);
            if (null !== thm_clr) {
                this.color(thm_clr);
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
            if (undefined === val) {
                /* getter */
                return mf.func.getLength(this.style('height'));
            }
            /* setter */
            var set_hei = {
                'height' : ('number' === typeof val) ? (val + 'px') : val
            };
            this.style(set_hei);
            this.adom().child()[1].style(set_hei);
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
mf.comp.header = {};
module.exports = mf.comp.Header;

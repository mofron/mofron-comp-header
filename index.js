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
    
    initDomConts (prm) {
        try {
            this.name('Header');
            
            /* set header dom contents */
            var hdr = new mofron.Dom({
                tag       : 'div',
                component : this,
                style     : {
                                'width'         : '100%',
                                'border-bottom' : 'solid 1px lightgray',
                                'float'         : 'left'
                            }
            });
            var pad = new mofron.Dom({
                tag       : 'div',
                component : this,
                style     : {
                                'float'    : 'none',
                                'position' : 'static'
                            }
            });
            
            /* set dom contents */
            this.vdom().child([hdr, pad]);
            this.target(hdr);
            
            /* set default height */
            this.height(50);
            this.bind(true);
            
            /* child comp is added at horizon layout */
            this.addLayout(new mofron.layout.Horizon());
            
            /* set child component */
            if (true === mofron.func.isInclude(prm, 'Component')) {
                this.addChild(prm);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            /* set theme color */
            this.color(
                (null === this.theme().getColor(0)) ? undefined : this.theme().getColor(0)
            );
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
                return mofron.func.getLength(this.style('height'));
            }
            /* setter */
            var set_hei = {
                'height' : ('number' === typeof val) ? (val + 'px') : val
            };
            this.style(set_hei);
            this.vdom().child()[1].style(set_hei);
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
                return mofron.func.getColor(this.style('background'));
            }
            /* setter */
            if (false === mofron.func.isObject(clr, 'Color')) {
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
                this.style({'position' : 'fixed'});
            } else {
                this.style({ 'position' : null }, true);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.header = {};
module.exports = mofron.comp.Header;

/**
 * @file   Header.js
 * @brief  Header Component Class
 * @author simpart
 */
mofron.comp.Header = class extends mofron.comp.Base {
    
    initContents (vd, prm) {
        try {
            /* set header style */
            var hdr_conts = new mofron.util.Vdom('div');
            
            hdr_conts.setStyle('width'        , '100%');
            hdr_conts.setStyle('border-bottom', 'solid 1px lightgray');
            hdr_conts.setStyle('position'     , 'fixed');
            
            vd.addChild(hdr_conts);
            
            var hdr_pad = new mofron.util.Vdom('div');
            vd.addChild(hdr_pad);
            
            /* set default height */
            this.height(50);
            
            /* child comp is added at horizon layout */
            this.addLayout(new mofron.layout.Horizon());
            
            if (undefined != mofron.theme) {
                var clr = mofron.theme.getColor(0);
                if (null !== clr) {
                    this.color(clr);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setThemeColor () {
        try {
            if (undefined != mofron.theme) {
                var clr = mofron.util.theme.getColor(0);
                if (null !== clr) {
                    this.color(clr);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getEventTgt () {
        try {
            return this.vdom;//.getChild(1);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getTarget() {
        try {
            return this.vdom.getChild(0);
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
            var _val = (val === undefined) ? null : val;
            var hdr  = this.getTarget();
            
            if (null === _val) {
                return hdr.getStyle('height');
            }
            if ('number' != (typeof _val)) {
                throw new Error('invalid parameter');
            }
            hdr.setStyle('height', val + 'px');
            this.vdom.getChild(1).setStyle('height', val + 'px');
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
            var _clr = (clr === undefined) ? null : clr;
            if (null === _clr) {
                return this.getStyle();
            }
            if ('object' != (typeof _clr)) {
                throw new Error('invalid parameter');
            }
            this.style('background', _clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}

# mofron-comp-header
this is header component for mofron
please see [here](https://github.com/mofron/mofron) about an overview of mofron

# sample
```javascript
let mf     = require('mofron');
let Text   = require('mofron-comp-text');
let Header = require('mofron-comp-header');

let hdr = new Header({
    height   : 70,
    color    : new mf.Color(173,216,230),
    addChild : new Text({
        param : 'Header',
        size  : 45
    })
});
hdr.visible(true);
```

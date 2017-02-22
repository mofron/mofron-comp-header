# mofron-comp-header
Base of Header Component for mofron

# sample
please see [here](https://github.com/simpart/mofron) about an overview of mofron

```javascript
let Mof    = require('mofron');
let Text   = require('mofron-comp-text');
let Header = require('mofron-comp-header');

new Header({
    param   : new Text({
                         param : 'Header',
                         size  : 45
                     }),
    height  : 70,
    color   : new Mof.Color(173,216,230),
    visible : true
});
```

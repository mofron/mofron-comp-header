# mofron-comp-header
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

A header component for [mofron](https://mofron.github.io/mofron/).

This component for placing at the top of the page etc. and displaying the site title etc.

## feature
A header's child components are placed horizontally since header has a horizon layout.


## attention
it maybe needs a 'false' config at bind parameter that used as a child component.

# Install

```bash
npm install mofron mofron-comp-header
```

# Sample

```html
<require>
    <tag module="mofron-comp-header">Header</tag>
</require>

<Header baseColor="#f0e6fa">
</Header>
```

# Parameter

|Simple<br>Param| Parameter Name     | Type                                          |    Description                   |
|:-------------:|:-------------------|:----------------------------------------------|:---------------------------------|
|               | bind               | boolean                                       | true:<br>header position is fixed. display header even if user scrolls. (default) |
|               |                    |                                               | false: header position is not fixed.        |
|               | mainColor          | string/array (color)                          | border bottom color (name,hex / [r,g,b,(a)])  |

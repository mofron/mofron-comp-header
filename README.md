# mofron-comp-header
A header component for [mofron](https://mofron.github.io/mofron/).

[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

This component for placing at the top of the page etc. and displaying the site title etc.

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

| Parameter Name     | Type                                          | Simple Param |    Description                   |
|:-------------------|:----------------------------------------------|:------------:|:---------------------------------|
| bind               | boolean                                        |             | true: header position is fixed. display header even if user scrolls. (default)<br>false: header position is not fixed.    |
| mainColor          | string (color) / [number, number, number]       |              | border bottom  color (name, hex) / r,g,b |

# semantic-ui-dropdown-canjs
A CanJS wrapper for Semantic UI dropdowns

![Semantic UI Dropdown](https://cloud.githubusercontent.com/assets/128857/16526554/0badc176-3f6f-11e6-9498-255ff452f16c.gif)

This wrapper allows you to use SemanticUI Dropdown with just html, no need to run jQuery plugin yourself.

A [can.view.attr](https://canjs.com/docs/can.view.attr.html) wrapper around the [SemanticUI Dropdown](http://semantic-ui.com/modules/dropdown.html). With `can.view.attr` you can add custom behavior to elements that contain a specified html attribute. Since SemanticUI is a set of jQuery plugins, `can.view.attr` is a natural way to invoke them in a [CanJS](https://canjs.com) or [DoneJS](https://donejs.com/) application.

SemanticUI's CSS should be imported separately. You can use `semantic-ui-css` package as in the included demo.


## Demo

See the included demo /demo/demo.html (run `npm install`, then `http-server` in the project root and browse /demo/demo.html).

## Installation
```
npm install semantic-ui-dropdown-canjs --save
```

## Usage
To use it, simply add the `semantic-dropdown` attribute to a Semantic UI Dropdown and bind to the hidden input. The value of the hidden input will become the lowercased inner text of the selected `.item`.
```html
<div class="ui selection dropdown" semantic-dropdown>
  <input type="hidden" {($value)}="gender">
  <i class="dropdown icon"></i>
  <div class="default text">Gender</div>
  <div class="menu">
    <div class="item">Male</div>
    <div class="item">Female</div>
  </div>
</div>
```

You can also manually override the value by adding a `data-value` attribute to each item.
```html
<div class="ui selection dropdown" semantic-dropdown>
  <input type="hidden" {($value)}="gender">
  <i class="dropdown icon"></i>
  <div class="default text">Gender</div>
  <div class="menu">
    <div class="item" data-value="1">Male</div>
    <div class="item" data-value="0">Female</div>
  </div>
</div>
```

## API

Attributes:
- `semantic-popover` - main attribute to invoke the wrapper

## Contributing
Pull requests are welcome.

## Authors
- [Ilya Fadeev](https://github.com/ilyavf)
- [Marshall Thompson](https://github.com/marshallswain)

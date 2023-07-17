## Lightweight DOM framework

Its pretty self explanatory and used for internal development of components that need to work within a very lightweight environment. Originally designed for the Atom IDE, so very much inspired by the Atom extensions. 

Take a look at [Element](https://github.com/modular-rocks/dom/blob/main/src/element/index.ts).

### Element
It accepts the following arguments (in order):

```
const element = new Element('div', 'my-class', 'My element!');
```

```
@param {type} string - type of dom node, default: 'div'.
@param {klass} string - class name.
@param {text} string - text content.
@param {opts} object - for adding addional params like data, attrs, children.
@returns {Element} Returns a instance of Element.
```

## Methods:

### text 
Sets or returns the text content 
```
element.text('new text');
// <div class='my-class'>new text</div>
```
```
@param {text} string - optional - text. 
```

### add 
Appends another component as a child 
```
element.add(new Element('span'));
// <div class='my-class'><span></span></div>
```
```
@param {component} Element 
```

### show 
Show the component; `display: block` 
```
element.show();
```

### hide 
Hide the component; `display: none` 
```
element.hide();
```


### toggle 
Toggle the visibility of the component; triggers `show()` or `hide()` depending on the visibility.

### clear 
Clear the innerHTML of the component; `innerHTML = ''` 
```
element.clear();
```

### replace 
`clear()` and `add()` a component 
```
element.replace(new Element('p'));
// <div class='my-class'><p></p></div>
```
```
@param {component} Element 
```

### toggleClass  
adds or removes a specific class string 
```
element.toggleClass(`toggled`);
// <div class='my-class toggled'></div>

element.toggleClass(`toggled`);
// <div class='my-class'></div>
```
```
@param {className} string 
```

### className  
overrides the className 
```
element.className(`new-class`);
// <div class='new-class'></div>
```
```
@param {className} string
```

### onClick   
Adds a `click` EventListener 
```
element.onClick(() => console.log('click));
```
```
@param {fn} Function  
```

### onDblClick   
Adds a `double click` EventListener 
```
element.onDblClick(() => console.log('click));
```
```
@param {fn} Function  
```

### attr   
Sets an attribute on the dom element 
```
element.attr('store-id', 3);
// <div class='my-class' store-id='3'></div>
```
```
@param {key} string 
@param {value} string
```

### insertTemplate (adds/appends template)
The same as setting innerHTML 
```
element.insertTemplate(`<span></span>`);
// <div class='my-class'><span></span></div>
```
```
@param {template} string 
```

### insertAsTemplate (appends as template)
Add a component as innerHTML 
```
element.insertTemplate(new Element('span'));
// <div class='my-class'><span></span></div>
```
```
@param {component} Element 
```

### addTemplate (replaces contents with template)
Append template 
```
element.insertTemplate(`<span></span>`);
// <div class='my-class'><span></span></div>
```
```
@param {template} string 
```

### addAsTemplate (replaces contents with template)
Append a component as innerHTML 
```
element.insertTemplate(new Element('span'));
// <div class='my-class'><span></span></div>
```
```
@param {component} Element 
```

There are other [Elements](https://github.com/modular-rocks/dom/blob/main/src/).

# datadom

DOM serializer / deserializer with scriptable plugins.

WIP, please consider this as an unstable library.


# Usage

install via npm:

    npm install --save @plotdb/datadom

Add `datadom.js` in your HTML:

    <script src="datadom.js"></script>


serialize/deserialize a DOM tree:

    json = datadom.serialize(document.querySelector("your-selector"), [])
    datadom.deserialize(json,[])
      .then({node, promise}) ->
        node # node is the deserialized DOM tree root.
        promise # promise for asynchronous content
      .then ({node, promise}) -> # all content prepared.

datadom is also a constructor:

    dd = new datadom({ ... })
    dd.init().then(function() { ... });


# API

constructor options:

 - `plugin`: function, of Array of functions as default plugin(s).
   - plugin function accepts 1 parameters: subtree root ( for serialize ) / subdoc root ( for deserialize )
 - `data`: datadom json
 - `node`: root of DOM tree. ignored if `data` is provided.
 - `window`: optional `window` object if run in NodeJS.

datadom object methods:

 - `init()`: initialize data and node ( from provided counterpart ). Return promise.
 - `update(ops)`: apply ops ( operation transformations ) to internal data and DOM tree.
 - `getData()`: return datadom json.
 - `getNode()`: return root of the corresponding DOM tree.

datadom class methods:

 - `serialize(node, plugin)`: convert DOM tree (with root `node`) into json.
   - `node`: root node of DOM tree to serialize
   - `plugin(d)`: optional handler for custom node types.
 - `deserialize(data, plugin)`: convert datadom json into DOM tree
   - `data`: a datadom json.
   - `plugin(d)`: optional handler for custom node types.


## Node.js

to run in nodeJS, use `jsdom` and pass `window` as an argument:

    datadom.deserialize(data, [], (new JSDOM()).window);

similarly, pass `window` in constructor when using `new datadom( ... )`:

    new datadom({ ..., window: (new JSDOM()).window)});


## Plugins

(TBD) check `doc/plugin.md` for more information.


# License

MIT

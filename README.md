# @plotdb/sheet

simple sheet ui in vanilla JS.



## Usage

install:

    npm install @plotdb/sheet


include:

    <script src="path-to/sheet.js"></script>
    <link rel="stylesheet" type="text/css" href="path-to/sheet.css"/>
    <div class="container"></div>


initialize:

    var s = new sheet({
      root: '.container',
      data: mydata = [[... ], ... /* array of arrays */]
    })


## API

 - `set({row, col, content})` - set content to `content` for cells in row `row` and col `col`.
 - `goto({row, col})` - set grid view starting from coordinate {row, col}
 - `render()` - force to re-render visible cells

## License

MIT

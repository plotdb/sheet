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


## Constructor Options

 - `root`: container element or selector.
 - `fixed`: {row, col}. default {row: 0, col: 0}
 - `frozen`: {row, col}. default {row: 0, col: 0}
 - `idx`: {row, col}. default {row: true, col: true}


## API

 - `set({row, col, data, range})` - set cell data to `data` for cell(s) in row `row` and col `col`.
   - update a range based on 2D array `data` when `range` is true.
 - `goto({row, col})` - set grid view starting from coordinate {row, col}
 - `render()` - force to re-render visible cells

## License

MIT

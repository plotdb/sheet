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
 - `size`: {row, col}. force cell size, in array by order.
   - default: {row: [], col: []}
 - `editing`: false to disable editing. default true.
   - (TBD) in the future we should be able to:
     - set edit permission ( e.g., edit, comment )
     - apply on range


## API

 - `set({row, col, data, range})`: set cell data to `data` for cell(s) in row `row` and col `col`.
   - update a range based on 2D array `data` when `range` is true.
 - `goto({row, col})`: set grid view starting from coordinate {row, col}
 - `render()`: force to re-render visible cells
 - `editing(v)`: set edit status to v, or return edit status if v is not provided.

## License

MIT

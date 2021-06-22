## row

use table-like DOM structure. hard to control cell width across row.


## grid

use flat DOM structure with cells all in the same level. easy for CSS grid.

However, updating content causes reflow, and will be quite slow if there are many cells.


## cluster

try to mimic the design of clusterize by clustering cells into 4. 

Works great in speed yet similar to row, hard to control size. It's also harder to maintain when we have 4 clusters.


## dynocell ( Work in Progress )

similar to grid, but only render the parts on screen. Promising performance but may need test in advance.



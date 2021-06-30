# Change Logs

## v0.1.0

 - rename `update` event to `change` event.
 - check sheet focus before pasting data
 - support copy tsv format text to clipboard. use `navigator.clipboard`, which doesn't support older browsers.


## v0.0.10

 - fix selection issue across frozen cells
 

## v0.0.9

 - fix column label issue (plotdb/sheet#1)


## v0.0.8

 - fix bug: cell overflow should be hidden so content won't overflow and cover following cells if size is fixed.


## v0.0.7

 - support sheet in shadow DOM mode
 - add editing option / api for togglgin editability
 - add size option
 - tweak style for `.fixed.frozen` cell.


## v0.0.6

 - re-focus sheet after selection moved to support quick editing
 - remove outline of sheet to prevent unwanted focus style.
 - tweak code for updating content
 - add event handler
 - fix bug of content updating issue when setting new data
 - fire update event when data is changed.
 - support range in `set` api.


## v0.0.5

 - add `tabindex` in root element to make it possible to capture key events.
 - check some events for event source.


## v0.0.4

 - tweak fixed cell style
 - prevent fixed cell from being edited


## v0.0.3

 - support fixed rows / columns, frozen rows / columns and idx cells toggling


## v0.0.2

 - fix bug: edited failed if edited node is outside range of visible sheet.


## v0.0.1

init commit

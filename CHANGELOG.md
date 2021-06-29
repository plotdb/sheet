# Change Logs

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

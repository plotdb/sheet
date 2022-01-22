# Change Logs

## v0.2.0

 - upgrade modules
 - rename internal variables `main` to `datadom`
 - rename `datadom.js`, `datadom.min.js` to `index.js` and `index.min.js`
 - further minimize generated js file with mangling and compression
 - remove redundant code in build script
 - use script directly instead of `npx` to speed up building
 - add `main` and `browser` field in `package.json`.
 - patch test code to make it work with upgraded modules
 - release with compact directory structure


## v0.1.1

 - upgrade `@plotdb/json0`


## v0.1.0

 - adding support to `comment` and `document-fragment`.
 - add plugin specification, and refactor code following plugin sepc.
 - make `serialize` asynchronous and process custom type correctly.
 - add `possess` to inject `custom object` into `custom node`.
 - tweak naming and update documentation.


## v0.0.4

 - return Promise in init if datadom is inited with node to unify init return value in different cases.


## v0.0.3

 - fix bug: update with ops should wrap ops in Array when applying.


## v0.0.2

 - fix bug - we don't need additional `then` statement in datadom init.
 - add default fallback for plugin if there is no plugin available.

# Repl.it Authentication.js
Easy HTML Authentication for javascript repl.it authentication API
## Get started
Simple!
```javascript
new Auth().append();
```
## Contribution
Submit a issue.
Require a pull request. Please be sure that your code is indented properly. Tab spacing is 2 spaces.
## Docs
```javascript
new Auth()
```
Creates OOP Auth.
Extends `new Auth`:
```javascript
.append(elem)
```
> Appends it after the `elem`
```javascript
.get(key)
```
> Gets a key from the `Auth` element
```javascript
.set(key,value)
```
> Sets `key` to `value`
```javascript
.set(key,value)
```
> Sets `key` to `value`
Extends `Auth`
```javascript
.ondone = function(e){
  //arguments
}
```
> Handler for when Authentication is complete. Default is `location.reload()`
```javascript
.onerror = function(e){
  //arguments
}
```
> Handler for when Authentication encounters an error.

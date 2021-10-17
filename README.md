# MyWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Table of Contents

- [About](#About)
- [Imports](#Imports)
- [Usage](#Usage)

## About
this package used to detect offline and online status and show or hide messages based on network status 
## Imports 

```js

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...
    NgofflineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

## Usage

```html

<ngoffline></ngoffline>

```
The default message is 'You are not connected', but you can change it

```html
<ngoffline message="Custom message"></ngoffline>

```
You can use directive to display or hide any html selector 

```html

<div ngoffline>
  this message will be displayed only if the status is offline
</div>

```

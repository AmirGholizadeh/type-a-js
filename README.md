# About TypeJS

TypeJS is a library in which you
can set configurations based on
your need to have a proper typing effect in your beautiful projects!
feel free to help me improve this library, this is my first library,
so i'll surely need the help of fellow developers.
## Install
to install this package use the command `npm i type-a-js`
## Let's learn TypeJS now
Configuration :
```
{
    init:{
    text:string;
    delay?: number;
    delayBetween?: number;
  }
  infinite?: {
    deleteInfinite: boolean,
    addInfinite: boolean
  };
  delete?: 
    {
      count: number;
      delayBetween?: number;
      delay?:number;
    }
  add?: {
      text: string;
      delayBetween?: number;
      delay?: number
    };
  cursorSpeed?: number;
  clearDelay?: number;
}
```
- `init` - the configuration for the initial text.
  - `text` - the inital text that you want it to type.
  - `delay` - the delay before typing it.
  - `delayBetween` - the delay between typing each character.
- `infinite` - you need this to make it type the text forever.
  - `deleteInfinite` - set to `false` if you don't want it to apply the deleting feature forever.
  - `addInfinite` - set to `false` if you don't want it to apply adding feature forever.
- `delete` - the configuration for deleting feature.
  - `count` - how many characters you want to delete?
  - `delayBetween` - the delay between deleting each character. default is the initial `delayBetween`.
  - `delay` - the delay before starting to delete. default is the initial `delay`.
- `add` - the configuration for adding feature.
  - `text` - the text you want to add.
  - `delayBetween` - the delay between adding each character. default is the inital `delayBetween`.
  - `delay` - the delay before starting to add. default is the inital `delay`.
- `cursorSpeed` - cursor fading away speed in ms.
- `clearDelay` - it's used while it's an infinite instance, the delay before clearing.

to make it start typing you also need to pass a `parentId`.

```
new TypeJS("#root", {
  init:{
    text:"hello world",
    delay:1000,
    delayBetween:50
  }
}).init();
```
notice `.init()`? you should use this to make it start its work. with that being said, it'll start typing after 1 second (`delay`), and with a delay of 50 ms (`delayBetween`) between each character.

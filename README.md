# arc-to

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Implements CanvasContext2D `arc()` function with bare 2D points, attempting to maintain visual consistency.

```js
var arc = require('arc-to')

var radius = 5
var points = arc(50, 50, radius, 0, Math.PI*2)
```

Now `points` will look like this:

```js
[ [ 55, 50 ],
  [ 54.75528258147577, 51.545084971874736 ],
  
  ... etc ...

  [ 54.75528258147577, 48.454915028125264 ],
  [ 55, 50 ] ]
]
```

## Usage

[![NPM](https://nodei.co/npm/arc-to.png)](https://nodei.co/npm/arc-to/)

#### `arcTo(x, y, radius, start, end[, clockwise, steps, path])`

Using [x, y] as the origin (center) and a circle `radius`, this draws an arc (i.e. part of a circle) from `start` to `end` angle (in radians) with the given `steps`. 

`x`, `y`, `radius`, `start` and `end` all default to zero if unspecified.

`clockwise` defaults to false.

If `steps` is not given, it will estimate it based on the cube root of the radius. 

You can also specify a `path` argument if you want the 2D points to be added to an existing array, rather than creating a new array.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/arc-to/blob/master/LICENSE.md) for details.

var arcTo = require('./')
var test = require('tape').test

test("implements arcTo with generic 2D arrays", function(t) {
    var path
    path = arcTo(100, 100, 25, 0, Math.PI*2, false, 4)
    t.equal(path.length, 5, 'gives us 5 segments')

    path = arcTo(100, 100, 20, 0, Math.PI*2, false, 4)
    t.deepEqual(path, [ [ 120, 100 ], [ 100, 120 ], [ 80, 100 ], [ 100, 80 ], [ 120, 100 ] ], 'creates a circle')

    path = arcTo(20, 20, 10, Math.PI/2, Math.PI/2, true, 4)
    t.deepEqual(path, [ [ 20, 30 ], [ 20, 30 ], [ 20, 30 ], [ 20, 30 ], [ 20, 30 ] ], 'creates a circle')    


    path = arcTo(20, 20, 10, 0, Math.PI*2, false)
    t.deepEqual(path[0].map(Math.round), path[path.length-1].map(Math.round), 'first and last point match')    
    
    t.end()
})
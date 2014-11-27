//if 'steps' is not specified, we'll just approximate it
module.exports = function arc(x, y, radius, start, end, clockwise, steps, path) {
    if (!path)
        path = []

    x = x||0
    y = y||0
    radius = radius||0
    start = start||0
    end = end||0

    //determine distance between the two angles
    //...probably a nicer way of writing this
    var dist = Math.abs(start-end)
    if (!clockwise && start > end)
        dist = 2*Math.PI - dist
    else if (clockwise && end > start)
        dist = 2*Math.PI - dist

    //approximate the # of steps using the cube root of the radius
    if (typeof steps !== 'number') 
        steps = Math.max(6, Math.floor(6 * Math.pow(radius, 1/3) * (dist / (Math.PI))))

    //ensure we have at least 3 steps..
    steps = Math.max(steps, 3)

    var f = dist / (steps),
        t = start

    //modify direction
    f *= clockwise ? -1 : 1

    for (var i=0; i<steps+1; i++) {
        var cs = Math.cos(t),
            sn = Math.sin(t)

        var nx = x + cs*radius,
            ny = y + sn*radius

        path.push([ nx, ny ])

        t += f
    }
    return path
}
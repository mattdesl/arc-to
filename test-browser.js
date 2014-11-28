require('canvas-testbed')(render, { once: true })

var arc = require('./')

//test conformance with Canvas HTML5 2D API
//RED - our implementation
//WHITE - canvas arc()
function render(ctx, width, height, dt) {
    ctx.clearRect(0,0,width,height)

    draw(ctx, [150, 150, 100, 0, Math.PI*2])
    draw(ctx, [175, 100, 10, 0, Math.PI])
    draw(ctx, [275, 100, 10, Math.PI/3, Math.PI])
    draw(ctx, [275, 150, 10, Math.PI, Math.PI/3])
    draw(ctx, [100, 150, 10, Math.PI, Math.PI/3, true])
    draw(ctx, [170, 150, 10, Math.PI, Math.PI*2, true])
    draw(ctx, [350, 150, 55, 0, Math.PI*1.5, false, 5])
    draw(ctx, [350, 150, 25, 0, Math.PI*2, false])
}

function draw(ctx, args) {
    var path = arc.apply(null, args)
    ctx.beginPath()
    path.forEach(function(p) {
        ctx.lineTo(p[0],p[1])
    })
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 7
    ctx.stroke()

    ctx.beginPath()
    ctx.arc.apply(ctx, args)
    ctx.strokeStyle = 'gray'
    ctx.lineWidth = 2
    ctx.stroke()
}


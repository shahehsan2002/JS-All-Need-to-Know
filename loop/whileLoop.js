// var i =0
// while (i < 10) {
//     console.log('Hello World')
//     i++
// }


var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 100+1)
    if (rand === 50) {
        isRunning = false
        console.log("Winner")
    }
    console.log("Random Number: " + rand)
}
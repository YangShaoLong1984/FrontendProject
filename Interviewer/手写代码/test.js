class Run {
    constructor(executor) {
        console.log(executor);
        console.log(arguments);
    }
}

let run = new Run('zs', 'ls')
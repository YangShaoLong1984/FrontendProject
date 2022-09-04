function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let res = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(
                value => {
                    count++;
                    res[i] = value;
                    if (count === promises.length) {
                        resolve(res);
                    }
                },
                reason => {
                    reject(reason);
                }
            )
        }
    })
}
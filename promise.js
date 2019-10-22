var promise = new Promise(function (resolve, reject) {
    const x = "Manisha";
    const y = "Manish"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a Manisha');
    }).
    catch(function () {
        console.log('Some error has occured');
    }); 

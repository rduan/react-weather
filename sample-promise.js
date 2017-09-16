function getTempCallback(location, callback) {
    callback(undefined,78);
    callback('City not found');
}

getTempCallback('london,uk', (err, temp)=>{
    if(err) {
        console.log('error',err);
    } else {
        console.log('success',temp);
    }
});

function getTempPromise(location) {
    return new Promise((resolve,reject)=>{
        resolve(79);
        reject('City not found');
    })
};

getTempPromise('london').then(temp=>{
    console.log('success',temp);
}, (err)=>{
    console.log('error',err);
})

function addPromise(a,b) {
    return new Promise((resolve, reject)=>{
        if (typeof a === 'number' && typeof b === 'number') {
            resolve (a+b);
        } else {
            reject(' a & b need to be numbers');
        }
    });
}

addPromise(2,3).then((v)=>{
    console.log('success',v);
},(err)=>{
    console.log('error',err);
});


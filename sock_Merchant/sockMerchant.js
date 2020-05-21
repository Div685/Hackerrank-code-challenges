
function sockMerchant(n, ar) {
    ar = ar.sort();
    //console.log(ar);
    //let removeArr = [];
    let addArr = [];
    for (let i = 0;i < ar.length; i = i+1){
        if(ar[i] === ar[i+1]){
            addArr.push(ar[i]);
            i = i+1;
        }
       // console.log(addArr + " i is: " + i);
    }
   // console.log(addArr.length);
   // console.log(addArr);
    return addArr.length;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
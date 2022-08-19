function initializeArrays(){
    let max = Math.pow(10,9);
    var odds = [1,3];
    var evens = [1,2];
    var odds2 = [];
    var evens2 = [];
    let i = 2;
    let j=0;
    let k=1;
    let m=1;
    let n=1;
    while(odds[odds.length-1]<=max && evens[evens.length-1]<=max){
        odds[i] = odds[j]+evens[k]+1;
        if(j==k){
            k++;
        }
        else{
            j++;
        }
        evens[i] = evens[m] +odds[n] +i;
        if(m==n){
            m++;
        }
        else{
            n++;
        }
        i++;
    }
    return [odds,evens];
    
}
let arr=initializeArrays();
let arrodd = arr[0];
let arreven = arr[1];


function binsearch (arr, x, start, end) {
    if (start > end) return -1;
    let mid=Math.floor((start + end)/2);
    if (arr[mid]===x) return mid;
    if(arr[mid] > x)
        return binsearch(arr, x, start, mid-1);
    else
        return binsearch(arr, x, mid+1, end);
}

function Musaei(q,arro,arre){
    var d=new Date();
    let m1 = binsearch(arro,q,0,arro.length-1);
    let m2 = binsearch(arre,q,0,arre.length-1);
    
    if(m1==-1 & m2==-1) console.log("Never");
    else if(m1>m2){
        console.log(m1*2+1);
    }
    else if(m2>m1){
        console.log(m2*2);
    }
    else{
        console.log("Never");
    }
    var f = new Date();
    return f-d;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question('Enter the quantity', quantity => {
    let time = Musaei(parseInt(quantity),arrodd,arreven);
    console.log(time+" milliseconds");
    readline.close();
  });




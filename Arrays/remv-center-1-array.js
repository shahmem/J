//remove cenetred one(greater than other) element in array(even)
//-------------------------------------------------------------
const myarray =[1,2,5,7,3,4];
for (let i=0; i< myarray.length;i++)
    {       let k = (myarray.length)/2
            let j = k-1
            if (myarray[k] > myarray[j]){
                var m=k
            }
            else{
                var m=j
            }
            if(i!=m)
        console.log(myarray[i]);    
}

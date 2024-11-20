//remove cenetred two element in array(even)
//------------------------------
const myarray =[1,2,3,4];
for (let i=0; i< myarray.length;i++)
    {       let k=(myarray.length)/2
            if (i != k && i != k-1 )
        console.log(myarray[i]);    
}
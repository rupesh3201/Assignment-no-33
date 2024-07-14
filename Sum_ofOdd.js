function sumOfOddNumbers(arr)
{
    let sum = 0 ;
    for(let i = 0; i < arr.length; i++)
        {
            if(arr[i]%2!==0)
            {
                //console.log(i)// its prints  odd nubers
                sum += arr[i]; // print sum of oddd  numners
            }
        }
        return sum ;
    }
    const arr = [1,2,3,4,5,6,7,8,9];
    const oddNum =  sumOfOddNumbers(arr);
    console.log(`sum of odd numbers: `+oddNum); 

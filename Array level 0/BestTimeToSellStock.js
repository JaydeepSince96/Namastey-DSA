const arr = [7,1,5,3,6,4]

function findMinVal(nums){
 let min = arr[0]
 let maxProfit = 0
 for(let i=0;i<arr.length;i++){
     if(arr[i]-min > maxProfit){
         maxProfit = arr[i] - min
     }
     if(arr[i]<min){
         min = arr[i]
     }
 }
 return maxProfit
}

const result = findMinVal(arr)
console.log(result)

// How we get the profit ? arr[i] - arr[i-1] that's how we get the profit.
// Now we will maintaining the two points min Price and maxProfit
// We iterate all the i th days stock value and check if we have PricesOfStock - minPriceStock > maxProfit (we assume maxProfit is 0) if maxProfit is bigger than it's previous simply assign new Profit value as Maxprofit = arr[i] - min 
// and then also check If stock value in iterating stock already have if any minimum price  arr[i] <min If there are any then simply just update it. and lastly just return the maxProfit.

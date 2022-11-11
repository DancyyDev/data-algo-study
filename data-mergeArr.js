const EMPTY_ARRAY = 0
const mergeSortedArr = (a, b) => {
  const mergedArr = []
  
  if(a.length === EMPTY_ARRAY && b.length === EMPTY_ARRAY){
    return []
  }
  if(a.length === EMPTY_ARRAY){
    return b
  }
  if (b.length === EMPTY_ARRAY) {
    return a
  }
     
  while(a.length > 0 && b.length > 0){
    if(a[0] < b[0]){
      mergedArr.push(a.shift())
    }
    if(a[0] > b[0]){
      mergedArr.push(b.shift())
    }
    if(a[0] === b[0]){
      mergedArr.push(b.shift())
    }
  }
  
  if(b.length > EMPTY_ARRAY){
    return mergedArr.concat(b)
  }
  if(a.length > EMPTY_ARRAY){
    return mergedArr.concat(a)
  }
}

console.log(mergeSortedArr([2,4,6,47],[1,4,6,12,55]))
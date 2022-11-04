//Building a data structure from start.

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    get(index) {
      return this.data[index]
    }
  
    push(el) {
      this.data[this.length] = el;
      this.length++
      return this.length;
    }
    
    pop(el) {
      const lastEl = this.data[this.length-1]
      delete this.data[this.length-1]
      this.length--
      return lastEl
    }
    
    remove(index) {
      const el = this.data[index]
      this.shiftEl(index)
    }
    
    switch(a, b) {
      let sub = this.data[a]
      if(a === NaN || b === NaN){
        return 
      }
      this.data[a] = this.data[b]
      this.data[b] = sub
      return this.length
    }
    
    // replace(index, item) {
    //   this.data[index] = this.data[item]
    //   return this.length
    // }
    
    shiftEl(index) {
      for(let i = index; i < this.length - 1; i++){
        this.data[i] = this.data[i+1]
      }
      delete this.data[this.length-1]
      this.length--
    }
  }
  
  const newArr = new MyArray();
  newArr.push('hello')
  newArr.push('world')
  newArr.push('i')
  newArr.push('am')
  newArr.push('dan')
  console.log(newArr)
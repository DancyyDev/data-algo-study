class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key,value){
      let a = this._hash(key)
      if(!this.data[a]){
        this.data[a] = [key,value]
        // this.data[a].push([key,value])
      }
      return this.data
    }
  
    get(key){
      let b = this._hash(key)
      if(!this.data[b]){
      return 'Not In Database'
      }
      return this.data[b]
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  // console.log(myHashTable)
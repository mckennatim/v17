

const storageLocal = (itemName)=>{
  var itemStr =  localStorage.getItem(itemName)
  const getItem=()=>{
    if(!localStorage.getItem(itemName)){
      return null
    }
    return JSON.parse(localStorage.getItem(itemName))
  }
  const setItem=(obj)=>{
    localStorage.setItem(itemName, JSON.stringify(obj))
  }
  const isToken=()=>{
    console.log('itemStr: ', itemStr)
    if(itemStr=="undefined" || itemStr==null)return false
    if(getItem().token.length<50) return false
    return true
  }
  return{
    itemName: itemName,
    itemStr: itemStr,
    getItem: getItem,
    setItem: setItem,
    modItem: (key, val)=>{
      var ni= getItem();
      if(ni){
        ni[key] =val
        setItem(ni)
      }
    },
    getToken: ()=>getItem().token,
    getKey: (key)=>getItem()[key],
    isToken:isToken
  }
}


export{storageLocal}



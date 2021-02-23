

const storageLocal = (itemName)=>{
  var itemStr =  localStorage.getItem(itemName)
  function getItem(){
    if(!localStorage.getItem(itemName) || localStorage.getItem(itemName)=='undefined'){
      return null
    }
    return JSON.parse(localStorage.getItem(itemName))
  }
  function setItem(obj){
    localStorage.setItem(itemName, JSON.stringify(obj))
  }
  function isToken(){
    if(itemStr=="undefined" || itemStr==null)return false
    if(getToken().length<50) return false
    return true
  }
  function getToken(){
    console.log('getItem(): ', getItem())
    if(getItem()){
      return getItem().token
    }
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
    getToken: getToken,
    getKey: (key)=>getItem()[key],
    isToken:isToken,
  }
}


export{storageLocal}



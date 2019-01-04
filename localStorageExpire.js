const localStorageUtil = {
    set(key, val, expire){
      var exp = expire ? Date.now() + expire*1000 : -1;
      localStorage.setItem(key, JSON.stringify({value: val, expire: exp}));
      console.log('set ok', JSON.stringify({value: val, expire: exp}));
    },
    get(key){
      var data = localStorage.getItem(key);
      console.log(data);

      if(!data) return null;

      var dataObj = JSON.parse(data);

      if(dataObj.expire == -1) return dataObj.value;

      if(Date.now() >= dataObj.expire){
        localStorage.removeItem(key);
        return null;
      }else {
        return dataObj.value;
      }
    }
}

module.exports = localStorageUtil;

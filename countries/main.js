(async function () {
    const loadData = async () => {
        return await fetch('./all-countries.json')
          .then((res) => {
            return res.json();
          })
          .then((loadedQuestions) => {
            return loadedQuestions;
          })
          .catch((err) => {
            console.error(err);
          });
      };
      const countrie = await loadData();
 
  const allCoutriesNames = countrie.map(function (ct) {
      return ct.name.common;
  });
  
  const  europeName = countrie.map(function (ct) {
    if((countrie.region==='Europe')){
        return ct.name.common;
    }
});

   const VN = countrie.filter((ct) => (ct.name.common === 'Vietnam'))

 
  
  console.log("thong tin tat ca ca nuoc",countrie);
  console.log('VN',VN);
  console.log("ten tat ca cac nuoc",allCoutriesNames);
  console.log('ten ca ncuo thuoc europe',europeName);
  
})();
(async function () {
  const loadData = async () => {
      return await fetch("./all-countries.json")
      .then((res) => {
          return res.json();
      })
      .then((loadedData) => {
          return loadedData;
      })
      .catch((err) =>{
          console.error(err);
      });
  };
  const countries = await loadData();
  const allCoutriesNames = countries.map((ct) => (ct.name.common))
  const europe = (countries.filter((ct) => (ct.region==='Europe'))).map((ct) => (ct.name.common))
  const InForVN = countries.filter((ct) => (ct.name.common === 'Vietnam'))
  

  console.log("thong tin cac nuoc",countries);
  console.log('thong tin Viet Nam',InForVN);
  console.log("ten tat ca cac nuoc",allCoutriesNames);
  console.log('ten tat ca cac nuoc e ro ',europe);
  
})();
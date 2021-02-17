var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];
  
  function isRubyComing(list) {
    let filterRuby = list.filter(developer => developer.language === "Ruby");
    
    if(filterRuby.length >0){
      return true
    }else return false
  }
  
  isRubyComing(list1)





  function isRubyComing(list) {
    return list.some(developer => developer.language === "Ruby");
  }
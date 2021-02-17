
var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];
  
  function getFirstPython(list) {
    let pythonDev = list.filter(dev => dev.language === "Python");
    
    if (!pythonDev.length){
      return "There will be no Python developers"
    }else return `${pythonDev[0].firstName},${pythonDev[0].country}`
  }
  
  getFirstPython(list1)
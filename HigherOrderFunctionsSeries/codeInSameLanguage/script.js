function isSameLanguage(list) {
    let sameLanguage1 = list.filter(dev => dev.language === 'JavaScript');
    let sameLanguage2 = list.filter(dev => dev.language === 'Ruby');
    let sameLanguage3 = list.filter(dev => dev.language === 'Java');
    let sameLanguage4 = list.filter(dev => dev.language === 'C');
    let sameLanguage5 = list.filter(dev => dev.language === 'Python');
    
    if(sameLanguage1.length === list.length || sameLanguage2.length === list.length || sameLanguage3.length === list.length || sameLanguage4.length === list.length || sameLanguage5.length === list.length){
      return true
    } else return false
    }


    function isSameLanguage(list) {
        return list.every(developer=> developer.language === list[0].language);
      }
    
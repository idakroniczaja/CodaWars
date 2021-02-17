function findAdmin(list, lang) {
    let adminArray = list.filter(developer => (developer.language === lang && developer.githubAdmin === "yes"));
 
    return adminArray
 }
function solution(string) {
    if(!string.split('').some(letter=>letter === letter.toUpperCase()) || !string.length) {
    return string
  }else{
    let array = string.split(/(?=[A-Z])/).join(' ')
    return array
  }
}
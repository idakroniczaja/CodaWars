
// Array ()



function accum(s) {
	let sArray = s.split('');
  return sArray.map((elem, index) => elem.toUpperCase() + Array(index+1).join(elem.toLowerCase())).join('-')
}


function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
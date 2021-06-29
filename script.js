

let a = [1, [1, 2, [3, 4]], [2,4]];



const getPlainArray = a => {

    let b = [];

    a.forEach(el => {
        if (Array.isArray(el)) {
            b = [...b, ...getPlainArray(el)]
        }
        else {
            b = [...b, el]
        }
        
    });
  
  
  return b;
}

console.log(getPlainArray(a))




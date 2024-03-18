let marks = [ 56,78,63,89,98,97,96];

let gradeA =  marks.filter((mark) => {
     if(mark>90)
     return mark;
     
})

console.log(gradeA);
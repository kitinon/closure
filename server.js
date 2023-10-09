for (let i=0; i<10; i++) {
  setTimeout(function() {
    console.log(i)
  }, 100)  // execute the callback after 1 sec.
}
console.log("outside for loop") // this will print first
// why i can still be 0..9 outside the loop?
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.body
  let index = 0;
input.addEventListener('keydown', function(e) {
  

  let key = parseInt(e.detail);


    if (key === konami[index]) {
      index++;

      if (index === konami.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
    console.log(index, e.detail)
    });

}

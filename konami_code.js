const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.body

input.addEventListener('keydown', function(e) {
  let index = 0;

  const key = parseInt(e.detail || e.which || e.location);


    if (key === konami[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
    console.log(index)
    });

}

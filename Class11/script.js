//<script type="text/babel">
      //babel transpiler
      //select that node

    const box = document.getElementById("root");
    const container = document.getElementById("container");
    const scoreEl = document.querySelector("h3");

let score = 0;

box.addEventListener("click", () => {
  const maxX = container.clientWidth - 80;
  const maxY = container.clientHeight - 80;

  const randomLeft = Math.floor(Math.random() * maxX);
  const randomTop = Math.floor(Math.random() * maxY);

  box.style.left = randomLeft + "px";
  box.style.top = randomTop + "px";

  score++;
  scoreEl.textContent = "Score: " + score;
});




      /*{ function MoveBox() {
        //logic
        return (
            <div>
          <h3>Score: {score}</h3>
          <div id="container">
            <div
              id="root"
              style={{ top: position.top + "px", left: position.left + "px" }}
              onClick={moveBox}
            ></div>
          </div>
        </div>
      );
    
      }

      ReactDOM.render(<MoveBox/>, ran); }
    </script>*/
    
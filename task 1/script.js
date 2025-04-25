// 1. Change Text on Click
document.getElementById("clickText").onclick = function () {
    this.innerText = "You clicked me!";
  };
  
  // 3. Toggle Visibility
  function toggleDiv() {
    const div = document.getElementById("toggleDiv");
    div.style.display = div.style.display === "none" ? "block" : "none";
  }
  
  // 4. Double Click Event
  document.getElementById("dblClickPara").ondblclick = function () {
    this.style.color = "#e74c3c";
  };
  
  // 5. Mouse Over Event
  const hoverBtn = document.getElementById("hoverButton");
  const msg = document.getElementById("message");
  
  hoverBtn.onmouseover = function () {
    msg.style.display = "block";
  };
  hoverBtn.onmouseout = function () {
    msg.style.display = "none";
  };

  







































































// javasscript task complete

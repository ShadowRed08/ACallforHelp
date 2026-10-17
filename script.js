let prev;

function state(el, detailed) {
  const subel = el.children;
  const init = subel[0];
  const detail = subel[1];
  if (init.tagName === "IMG") {
    init.style.display = detailed ? "none" : "block";
  }
  detail.style.display = detailed ? "block" : "none";
}

function hover(ev) {
  const el = ev.currentTarget;
  state(el, ev.type == "mouseover");
}

window.onload = function() {
  for (const el of document.getElementById("contact").children) {
    if (el.tagName !== "UL") continue;
    for (const li of el.children) {
      li.onmouseover = hover;
      li.onmouseout = hover;
    }
  }
}

import Collapse from "./Collapse";

const hw = document.querySelector("#collapse");

const dom = new Collapse();

dom.bindToDOM(hw);

dom.drawUI();

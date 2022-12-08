import Button from "./Button";

class NotifyButton {
  id = "drift_bis_trigger";
  type = "button";
  className = "btn";
  style = "width: 100%; margin-top: -10px;display: none";
  text = "Notify me when available.";
  constructor() {
    this.createUI();
  }
  createUI() {
    const BIS_trigger = document.createElement("button");
    BIS_trigger.id = this.id;
    BIS_trigger.type = this.type;
    BIS_trigger.className = this.className;

    BIS_trigger.style = this.style;
    BIS_trigger.innerText = this.text;
  }
}
NotifyButton();

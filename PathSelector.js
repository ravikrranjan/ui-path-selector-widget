(() => {
  const globalMouseMoveHandler = mouseMove.bind(this);
  const widgetSelectorId = "drift_widget_selector_back_in_stock";
  let target;
  let widgetSelector;
  function mouseMove($event) {
    if (target) {
      target.classList.remove("widget-selector");
    }
    target = $event?.target;
    if (!target) return;

    removeContextMenu();
    widgetSelector?.classList.remove("hide");
    target.classList.add("widget-selector");

    const pageX = $event.pageX;
    const pageY = $event.pageY;

    widgetSelector.style.top = pageY + 15 + "px";
    widgetSelector.style.left = pageX + 10 + "px";
  }

  function createWidgetSelector() {
    widgetSelector = document.createElement("div");
    widgetSelector.id = widgetSelectorId;
    widgetSelector.style.zIndex = Number.MAX_SAFE_INTEGER;
    widgetSelector.style.position = "absolute";
    widgetSelector.style.width = "200px";
    widgetSelector.style.boxShadow = "5px 5px 5px 5px darkgrey";
    widgetSelector.style.color = "black";
    widgetSelector.style.background = "snow";
    widgetSelector.innerHTML =
      "Do right click on add to cart button and click on confirm.";

    try {
      const selector = document.getElementById(widgetSelectorId);
      if (isSelector) {
        selector.parentNode.removeChild(selector);
      }
    } catch (error) {}

    document.body.appendChild(widgetSelector);
  }

  // create widget selector

  createWidgetSelector();

  //add global mouse move handler
  document.addEventListener("mousemove", globalMouseMoveHandler);
})();

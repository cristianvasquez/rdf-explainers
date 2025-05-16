import marimo

__generated_with = "0.13.10"
app = marimo.App(width="full")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _():
    import anywidget
    import traitlets
    from pathlib import Path
    return Path, anywidget, traitlets


@app.cell
def _(mo):
    mo.md(r"""# Simple counter widget""")
    return


@app.cell
def _(anywidget, traitlets):
    class CounterWidget(anywidget.AnyWidget):
      # Widget front-end JavaScript code
      _esm = """
        function render({ model, el }) {
          let getCount = () => model.get("count");
          let button = document.createElement("button");
          button.innerHTML = `count is ${getCount()}`;
          button.addEventListener("click", () => {
            model.set("count", getCount() + 1);
            model.save_changes();
          });
          model.on("change:count", () => {
            button.innerHTML = `count is ${getCount()}`;
          });
          el.appendChild(button);
        }
        export default { render };
      """
      _css = """
        button {
          padding: 5px !important;
          border-radius: 5px !important;
          background-color: #f0f0f0 !important;

          &:hover {
            background-color: lightblue !important;
            color: white !important;
          }
        }
      """
      # Stateful property that can be accessed by JavaScript & Python
      count = traitlets.Int(0).tag(sync=True)
    return (CounterWidget,)


@app.cell
def _(CounterWidget, mo):
    widgetCounter = mo.ui.anywidget(CounterWidget())
    widgetCounter

    # # In another cell, you can access the widget's value
    # widget.value

    # # You can also access the widget's specific properties
    # widget.count
    return


@app.cell
def _(mo):
    mo.md(
        r"""
    ## Application made Vite + Vue.js outputs

    The Vue.js application is built into a static distribution, that later on is later shown as Any-widget. 

    The result is below.
    """
    )
    return


@app.cell
def _(widget):
    widget
    return


@app.cell
def _(Path, Tmo):
    Tmo.ui.file_browser(
        initial_path=Path("src/app/"), multiple=True
    )
    return


@app.cell
def _(Path, mo):
    mo.ui.file_browser(
        initial_path=Path("hello_widget/"), multiple=True
    )
    return


@app.cell
def _(anywidget, mo, traitlets):

    class HelloWidget(anywidget.AnyWidget):
      _esm = "hello_widget/static/main.mjs"
      _css = "hello_widget/static/rdf-explainers.css"
      name = traitlets.Unicode().tag(sync=True)

    widget = mo.ui.anywidget(HelloWidget())
    return (widget,)


if __name__ == "__main__":
    app.run()

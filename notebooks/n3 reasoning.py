import marimo

__generated_with = "0.13.10"
app = marimo.App(width="full")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _():
    from rdflib import Graph
    return (Graph,)


@app.cell
def _():
    from rdf_explainers.eye_reasoner import EyeMode, run_eye
    return EyeMode, run_eye


@app.cell
def _(mo):
    mo.md(r"""# Applying N3 rules""")
    return


@app.cell
def _():
    data_and_rules = """@prefix : <http://example.org#>.

    :alice :eats :meat.
    :alice :eats :plants.

      {
        ?animal :eats :meat.
        ?animal :eats :plants.
      }
      =>
      {
        ?animal a :omnivore.
      }.

    """
    return (data_and_rules,)


@app.cell
def _(EyeMode, data_and_rules, run_eye):
    success, error = run_eye(n3_str=data_and_rules, eye_mode=EyeMode.ALL_TRIPLES) 
    return (success,)


@app.cell
def _(Graph, success):
    g = Graph()
    g.parse(data=success, format="n3")
    return (g,)


@app.cell
def _(g, pretty_query):
    pretty_query( "New triples",
    """
        SELECT ?s ?p ?o
        WHERE {
          ?s ?p ?o .    
        }
    """, g)
    return


@app.cell
def _(mo):
    mo.md(r"""# Notebook implementation""")
    return


@app.cell
def _(mo):
    def pretty_query(title, sparql_query, graph):
        results = graph.query(sparql_query)
        rows = [{str(var): str(row[var]) for var in row.labels} for row in results]
        return mo.vstack([

    mo.ui.table(data=rows, page_size=100),
                mo.md(f"""
    ```sparql
    {sparql_query}
    ```
    """),
    ])
    return (pretty_query,)


if __name__ == "__main__":
    app.run()

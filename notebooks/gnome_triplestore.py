import marimo

__generated_with = "0.13.10"
app = marimo.App(width="full")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _():
    from rdflib import Graph, URIRef, Literal
    return Graph, Literal, URIRef


@app.cell
def _():
    from rdf_explainers.eye_reasoner import EyeMode, run_eye
    return


@app.cell
def _(mo):
    mo.md(r"""# Querying Gnome's triplestore""")
    return


@app.cell
def _():
    import gi, sys
    gi.require_version('Tracker', '3.0')
    from gi.repository import GLib, Gio, Tracker

    return Tracker, sys


@app.cell
def _():
    import pandas as pd
    return (pd,)


@app.cell
def _(Tracker):
    connection = Tracker.SparqlConnection.new(
    Tracker.SparqlConnectionFlags.NONE,
    None,  # Database location, None creates it in-memory
    Tracker.sparql_get_ontology_nepomuk(),  # Ontology location
    None)
    return


@app.cell
def _(Tracker, pd, sys):
    def run_query(sparql_query):
        try:
            # Create a direct connection to the default Tracker store
            connection = Tracker.SparqlConnection.bus_new(
                "org.freedesktop.Tracker3.Miner.Files",
                None, 
                None
            )
        
            # Execute the SPARQL query
            cursor = connection.query(sparql_query)
        
            # Prepare data for DataFrame
            results = []
            columns = []
        
            # Get column names
            n_columns = cursor.get_n_columns()
            for i in range(n_columns):
                columns.append(cursor.get_variable_name(i))
        
            # Collect all the rows
            while cursor.next():
                row_data = []
                for i in range(n_columns):
                    value = cursor.get_string(i)[0] if cursor.get_string(i)[0] is not None else None
                    row_data.append(value)
                results.append(row_data)
        
            # Close the connection
            connection.close()
        
            # Create and return the DataFrame
            df = pd.DataFrame(results, columns=columns)
            return df
        
        except Exception as e:
            print(f"Error: {e}")
            sys.exit(-1)
            return None
    return (run_query,)


@app.cell
def _(run_query):
    # Run the query
    run_query("""
    SELECT * WHERE {
         ?s ?p ?o
    } LIMIT 10
    """)
    return


@app.cell
def _(run_query):
    run_query("""
    SELECT (COUNT(*) AS ?count) WHERE {
      ?s ?p ?o
    }
    """)
    return


@app.cell
def _(Graph, Literal, Tracker, URIRef):
    def construct_all_triples_to_turtle(output_file="output.ttl"):
        query = """
        CONSTRUCT {
            ?s ?p ?o
        } WHERE {
            ?s ?p ?o
        }
        """

        try:
            # Connect to Tracker SPARQL endpoint
            connection = Tracker.SparqlConnection.bus_new(
                "org.freedesktop.Tracker3.Miner.Files",
                None,
                None
            )

            cursor = connection.query(query)
            g = Graph()

            while cursor.next():
                s = cursor.get_string(0)[0]
                p = cursor.get_string(1)[0]
                o = cursor.get_string(2)[0]

                # Use URIRef for subject and predicate
                subj = URIRef(s)
                pred = URIRef(p)

                # Try to treat object as URI, fallback to Literal
                if o.startswith("http://") or o.startswith("https://") or o.startswith("urn:"):
                    obj = URIRef(o)
                else:
                    obj = Literal(o)

                g.add((subj, pred, obj))

            g.serialize(destination=output_file, format='turtle')
            print(f"Turtle file written to: {output_file}")

        except Exception as e:
            print(f"Error: {e}")
    return


@app.cell
def _():
    # construct_all_triples_to_turtle()
    return


@app.cell
def _():
    # g = Graph()
    # g.parse(data=success, format="n3")
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
    return


if __name__ == "__main__":
    app.run()

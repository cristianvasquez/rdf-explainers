import marimo

__generated_with = "0.12.10"
app = marimo.App(width="columns")


@app.cell(column=0)
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _():
    from rdflib import Graph
    return (Graph,)


@app.cell
def _():
    from rdf_explainers.misc import hello
    return (hello,)


@app.cell
def _():
    reasoning_rules = """@prefix : <http://example.org#>.

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
    return (reasoning_rules,)


@app.cell
def _():
    # g = Graph()
    # g.parse(data=result.stdout, format="n3")

    # for s, p, o in g:
    #     print(s, p, o)
    return


@app.cell
def _(reasoning_rules, run_eye):
    success, error = run_eye(n3_str=reasoning_rules)
    return error, success


@app.cell
def _(error):
    error
    return


@app.cell
def _(mo, success):
    mo.md(f"""
    ```n3
    {success}
    ```
    """)

    return


@app.cell
def _(Graph, success):
    g = Graph()
    g.parse(data=success, format="n3")

    q = """    SELECT *
        WHERE {
            ?s ?p ?o .
        }
    """

    results = g.query(q)
    serialized_results = [row.asdict() for row in results]
    return g, q, results, serialized_results


@app.cell
def _(mo, serialized_results):
    table = mo.ui.table(serialized_results)
    table
    return (table,)


@app.cell(column=1)
def _():
    import subprocess
    import os
    import tempfile

    def run_eye(n3_str: str):
        """
        Run EYE reasoner via Docker with given rules and optional query.

        :param reasoning_rules: N3 rules as a string.
        :param query: Optional N3 query as a string.
        :param eye_args: Optional list of extra EYE args (e.g. ["--pass-only-new"])
        :return: (stdout, stderr)
        """
        # Ensure temp files are inside $HOME so Docker can access them
        temp_dir = os.path.join(os.path.expanduser("~"), ".eye_tmp")
        os.makedirs(temp_dir, exist_ok=True)

        def create_temp_n3_file(content: str) -> str:
            tmp_file = tempfile.NamedTemporaryFile("w+", suffix=".n3", dir=temp_dir, delete=False)
            tmp_file.write(content)
            tmp_file.flush()
            tmp_file.close()
            return tmp_file.name

        temp_n3 = create_temp_n3_file(n3_str)

        try:
            current_dir = os.getcwd()
            home_dir = os.path.expanduser("~")

            cmd = [
                "docker", "run", "--net=host", "--rm",
                "-v", f"{home_dir}:{home_dir}",
                "-w", current_dir,
                "eyereasoner/eye",            
                "--quiet",
                "--pass-only-new",
                # "--pass",
                "--n3", temp_n3
            ]

            result = subprocess.run(cmd, capture_output=True, text=True)

            return result.stdout, result.stderr

        finally:
            os.remove(temp_n3)


    return os, run_eye, subprocess, tempfile


if __name__ == "__main__":
    app.run()

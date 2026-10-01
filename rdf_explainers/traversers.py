from rdflib import Graph, BNode, URIRef, RDF

def extract_connected_subgraph(g: Graph, root, max_depth: int = 1) -> Graph:
    """
    Extracts a subgraph of triples starting from `root`, following connected nodes
    up to the given depth. Depth 0 returns an empty graph.

    Depth semantics:
    - 0: return nothing
    - 1: triples with root as subject
    - 2: one level of traversal beyond root, etc.
    """
    subg = Graph()
    visited = set()

    def traverse(node, depth):
        if depth >= max_depth or node in visited:
            return
        visited.add(node)

        for p, o in g.predicate_objects(subject=node):
            subg.add((node, p, o))
            if isinstance(o, (BNode, URIRef)):
                traverse(o, depth + 1)

    if max_depth > 0:
        traverse(root, 0)

    return subg


def find_one_of_type(g: Graph, rdf_type: URIRef) -> URIRef:
    """
    Returns the first subject URI in the graph that is of the given rdf:type.
    Only considers URIRefs (not blank nodes).
    Raises ValueError if no such subject is found.
    """
    results = find_of_type(g, rdf_type)
    if not results:
        raise ValueError(f"No URIRef found with rdf:type {rdf_type}")
    return results[0]


def find_of_type(g: Graph, rdf_type: URIRef) -> list[URIRef]:
    """
    Returns a list of all subject URIs in the graph that are of the given rdf:type.
    Only considers URIRefs (not blank nodes).
    Returns an empty list if no such subjects are found.
    """
    return [s for s in g.subjects(RDF.type, rdf_type) if isinstance(s, URIRef)]

def extract_parts(g: Graph, types: list[URIRef]) -> str:
    """
    Returns connected subgraphs for all instances of the given RDF types.
    Args:
        g: The RDF graph to search in
        types: List of RDF types to find instances of
    Returns:
        String containing Turtle representation of all found subgraphs
    """
    result_graph = Graph()

    for rdf_type in types:
        instances = find_of_type(g, rdf_type)
        for root in instances:
            subgraph = extract_connected_subgraph(g, root, max_depth=1)
            result_graph += subgraph

    return result_graph


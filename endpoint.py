#!/usr/bin/python3

import gi, sys
gi.require_version('Tracker', '3.0')
from gi.repository import GLib, Gio, Tracker

def main():
    try:
        connection = Tracker.SparqlConnection.new(
            Tracker.SparqlConnectionFlags.NONE,
            None,  # Database location, None creates it in-memory
            Tracker.sparql_get_ontology_nepomuk(),  # Ontology location
            None)

        bus = Gio.bus_get_sync(Gio.BusType.SESSION, None)

        endpoint = Tracker.EndpointDBus.new(
            connection, bus, None, None)

        loop = GLib.MainLoop.new(None, False)
        print('Starting endpoint')
        loop.run()

        connection.close()

    except Exception as e:
        print('Error: {0}'.format(e))
        sys.exit(-1)

if __name__ == "__main__":
    main()

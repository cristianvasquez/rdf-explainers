import subprocess
import os
import tempfile

from enum import Enum

class EyeMode(Enum):
    ALL_TRIPLES = "--pass"
    ONLY_NEW_TRIPLES = "--pass-only-new"


def run_eye(n3_str: str, eye_mode: EyeMode = EyeMode.ALL_TRIPLES):
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


    # Run the EYE reasoner without proof explanation, in quiet mode and passing all deductive closures to the output:
    # eye --nope --quiet --pass socrates.n3

    try:
        current_dir = os.getcwd()
        home_dir = os.path.expanduser("~")

        cmd = [
            "docker", "run", "--net=host", "--rm",
            "-v", f"{home_dir}:{home_dir}",
            "-w", current_dir,
            "eyereasoner/eye",
            "--quiet",
            "--nope",
            eye_mode.value,
            "--n3", temp_n3
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        return result.stdout, result.stderr

    finally:
        os.remove(temp_n3)

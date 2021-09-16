import signal
from subprocess import Popen
import traceback
from constants import ROOT
import sys
from time import sleep
import shutil
import os
# import keyboard

class ConsoleTag:
    info='INFO'
    warning='WARNING'
    error='ERROR'

def console(input_str: str, tag: str = ConsoleTag.info) -> None:
    print()
    print('[ %s ] %s' % (tag, input_str))

console('Environment setting up...')


svelte_cmds = 'npm run svelte-silent'.split()
svelte_dev = Popen(svelte_cmds, cwd=ROOT)

electron_cmds = 'npm run electron-start'.split()
electron_process = Popen(electron_cmds, cwd=ROOT)

def shutdown_svelte():
    # svelte_dev.send_signal(signal.SIGTERM)
    # while True:
    #     sleep(0.1)
    #     if svelte_dev.poll() is None:
    #         break
    pass

def start_svelte():
    global svelte_dev
    svelte_dev = Popen(svelte_cmds, cwd=ROOT)

def shutdown_electron():
    electron_process.send_signal(signal.SIGTERM)
    while True:
        sleep(0.1)
        if electron_process.poll() is None:
            break

def start_electron():
    global electron_process
    electron_process = Popen(electron_cmds, cwd=ROOT)

def shutdown():
    shutdown_svelte()
    shutdown_electron()

def restart():
    shutdown()
    start_svelte()
    start_electron()

def empty_cache():
    shutil.rmtree(os.path.join(ROOT, 'public', 'build'))
    shutil.rmtree(os.path.join(ROOT, 'entry', 'dist'))

try:
    while True:
        next_cmd = sys.stdin.read(1)
        if next_cmd == "q": # Quit
            break
        if next_cmd == "r": # Soft Reload
            console('Reloading...')
            shutdown_svelte()
            start_svelte()
        if next_cmd == "R": # Hard Reload
            console("Restarting...")
            restart()
        if next_cmd == "C": # Hard Reload with empty cache
            console("Emptying cache...")
            empty_cache()
            console("Restarting...")
            restart()
except KeyboardInterrupt:
    pass
except Exception:
    traceback.print_exc()
finally:
    console('Shutting down...')
    shutdown()
    print()

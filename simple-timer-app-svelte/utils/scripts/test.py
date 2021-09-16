import sys

while True:
    print('Iterating')
    if sys.stdin.read(1) == "q":
        break
print('done')
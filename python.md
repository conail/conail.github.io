---
title: Programming Notes: Python
layout: post
---

Python is a dynamic, interpreted (bytecode compiled) language.

No type declarations of variables, parameters, functions or methods.

Good for automation.

Python is case-sensitive.

Code blocks are delimited strictly by indentation.

Hash Bang

Main function

# Assignment

Multiple assignment.  # x, y = y, x

# Functions

Lowercase name.

def main():

# Boilerplate Syntax

Run main function:

Checks that file is being interpreted interactively.

```
if __name__ == '_main__':
  main()

```

# Conditions

Logical connectives are spelt with letters (e.g. or and not).

# Initial Values

Empty string is false.
None is false.
0 is false.

# Comments

\# This is a comment.

"""
Multiline comments.
"""

# Modules

dir(module_name)

help(module_name[.function])

# print()

Comma concatenates with space.

Plus concatenates without space.

# Strings

Strings are immutable.

Format string is like printf.  'String %s foo %d' % ('foo', 40)

len()
find()
lower()
upper()

Negative indexes start from right-hand side.

## Slices

s[1:3] range from index 1 to 2.  (Up to but not including 3.)

s[1:] All the way to the end.

s[:] The whole string.

# Lists

Lists can contain elements of different types.

Many functions are deliberately consistent with strings.

List is a reference type.

a[:] creates a copy of a.

append() # returns None.
del a[1]
sorted(a) # takes optional arguments, e.g. reverse=True, key= (function, return a tuple if sorting on multiple criteria).
'\n'.join(a)
a.split(':') # splits on whitespace with no argument.

for x in list:

range(20) generates a series of numbers

Lists can't be modified while they are being iteratied.

## Comprehensions

[len(s) for s in a if condition]

## Membership

x in list

# Tuples

Tuples are immutable, and fixed size.

(1, 2, 3)

# Dictionaries

Dictionaries are hashtables.

d = {'d': }

d['a'] # Raises an error if not present

d.get('a') # returns None if not present

'a' in d

d.keys()
d.values()

# Exceptions

```pthon
try:
  f = open(filename, 'r')
  f.read()
except IOError:
print 'IO Error', filename
```

# IO

```python
f = open(filename, 'rU')

for lien in f:

f.close()
f.read() # reads the entire file into a string
```

# Regular Expressions

```
import re

match = re.search(pat, text)
match.group() # Shows matching text

r''
```

. any char
\w word char
\d digit
\s whitespace

Capitalize to invert

\+ 1 or more
\* 0 or more

[] choice
() group

```
re.findall(pat, text)
```

# Modules & Modularity

Code reuse.

Command line flags to alter behavior.

## Filesystem interface

import os

os.listdir(dir)
path = os.path.join(dir, filename)
os.path.abspath(path) # Expands path to absolute form.
os.path.exists(path)

import shutil

shutil.copy(src, dest)

## External processes

import commands

commands.getstatusoutput(cmd) # Waits and returns (status, stdout + stderr)

import sys

(status, ouput) = command.getstatusoutput(cmd)
if status:
  print(sys.stderr 'Error', output)
  sys.exit(1)

## Network

import urllib

uf = urllib.urlopen('http://localhost/')
uf.read()

urllib.urlretrieve(url, filename)

# Resources

PyQuick





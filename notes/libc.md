---
title: libc
layout: page
---

The C standard library (libc) is specified in the ANSI C standard, developed concurrently with the C library POSIX specification which is a superset of it.  It's sometimes called the ISO C library.

libc provides macros, type definitions and functions for common tasks like string handling, mathematical computations, input/output processing, memory management and other operating system services.

# Application Programming Interface

## Header Files

The API of the C standard library is declared in a number of header files.  Each header file contains one or more function declarations, data type definitions, and macros.

### Specification Version History

After a long period of stability, three new header files (iso646.h, wchar.h and wctype.h) were added with Normative Addendum 1 (NA1), an addition to the C Standard ratified in 1995.  Six more header files (complex.h, fenv.h, inttypes.h, stdbool.h, stdint.h and tgmath.h) were added in C99.  Five more (stdalign.h, stdatomic.h, stdnoreturn.h, threads.h and uchar.h) were added in C11.  In total, there are now 29 header files.

### Files

| assert.h      | Assert macro, assists with detecting logical errors and bugs.
| complex.h     | Functions for manipulating complex numbers.
| ctype.h       | Functions to classify characters by their types or to convert between character sets.
| errno.h       | Catalog of error codes reported by library functions.
| fenv.h        | Functions for controlling the floating-point environment.
| float.h       | Macro constants specifying  implementation-specific properties of the floating-point library.
| inttypes.h    | Defines exact width integer types.
| iso646.h      | Macros expressing ISO 646 tokens.
| limits.h      | Macro constants specifying implementation-specific properties of the integer types.
| locale.h      | Localization functions.
| math.h        | Common math functions.
| setjmp.h      | Macros setjmp and longjmp, used for non-local exits.
| signal.h      | Signal handling functions.
| stdalign.h    | Querying and specifying object alignment.
| stdarg.h      | Accessing arguments passed to a function.
| stdatomic.h   | Atomic data operations over threads.
| stdbool.h     | Defines boolean data type.
| stddef.h      | Types and macros.
| stdint.h      | Defines exact width integer types.
| stdio.h       | Core input and output functions.
| stdlib.h      | Numeric conversion functions, PRNG, memory allocation, process control.
| stdnoreturn.h | Specifies non-returning functions.
| string.h      | String handling functions.
| tgmath.h      | type-generic mathematical funtions.
| threads.h     | Management functions for threads, mutexes and condition variables.
| time.h        | Date and time handling functions.
| uchar.h       | Unicode types and functions.
| wchar.h       | wide string handling functions.
| wctype.h      | Functions to classify and convert wide characters.

complex.h, stdatomic.h and threads.h are conditional features that implementations are not required to support.

The POSIX standard adds several nonstandard C headers for Unix-specific functionality, including unistd.h and signal.h.

GNU libc includes the nonstandard alloca.h.

### Man Pages

Specific implementation details can be found in Section 3.  Underlying concepts are described in Section 7.

# Implementations

- BSD libc
- GNU libc (glibc)
- Microsoft C Run-Time Library
- klibc
- musl
- Bionic
- EGLLIBC
- Linux libc

## MMU less

- dietlibc
- uClibc
- Newlib

# libm

In Linux and FreeBSD, the mathematical functions in <math.h> are seperately bundled in the library libm.

# Links

1. https://www.gnu.org/software/libc/
1. https://en.wikipedia.org/wiki/C_standard_library
1. http://man7.org/linux/man-pages/man7/libc.7.html
1. https://en.wikipedia.org/wiki/Bionic_%28software%29
1. http://unix.stackexchange.com/questions/120380/what-c-library-version-does-my-system-use
1. http://www.schweikhardt.net/identifiers.html
1. A Study of Modern Linux API Usage and Compatibility: What to Support When Youâre Supporting

http://www.open-std.org/JTC1/SC22/WG14/www/docs/n1225.pdf
http://www.open-std.org/JTC1/SC22/WG14/www/docs/n1337.pdf
http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1106.txt

https://www.freebsd.org/cgi/man.cgi?tree

## Exploitation

### Buffer Overflow

Some library functions have had buffer overflow vulnerabilities:

- string-manipulation routines, including strcpy() and strcat(), that don't automatically check bounds.
- string routines in general, for side-effects, encouraging irresponsible buffer usage, not always guaranteeing null-terminated output, linear length calculation.
- printf() family of routines, for spoiling the execution stack when the format string doesn't match the arguments given e.g. format string attacks.
- gets() and scanf() family of I/O routines for lack of input length checking.

Except for gets(), security vulnerabilities can be avoided via auxiliary code to perform memory management, bounds checking, input checking, etc.  This is often done using wrappers that make the library functions safer and easier to use.  The Practice of Programming book uses wrappers commonly.

The mktemp() and strerror() routines are thread unsafe and vulnerable to race conditions.

Error handling in libc is not consistent and sometimes confusing.  Most functions raise exceptions, but some set errno, some do both and a few neither.

1. https://www.scribd.com/document/329083878/Return-to-Libc

## Standardization

C originally did not provide built-in functions unlike contemporary languages such as COBOL and Fortran.  Over time, C standard libraries emerged and were codified.

Unix and C were created at Bell Labs in the late 1960s.  During the 1970s, C became increasingly popular, with many organizations creating their own variants.  By the 1980s, compatibility between these variants became problematic and in 1983 ANSI formed a committee to specify a standard "ANSI C".  This work produced C89, which included a C standard library specification.

### POSIX Standard Library

POSIX and SUS (Single Unix Specification) include additional routines to the basic libc.  The POSIX specification includes header files for, among other uses, multi-threading, networking and regular expressions.  This are often implemented along with standard libc functionality.

### BSD libc

BSD libc is a superset of the POSIX standard library used by BSD operating systems (FreeBSD, NetBSD, OpenBSD, OS X).  It was released in 1994 as part of 4.4BSD and contains some extensions to the standard:

- sys/tree.h -- Red-black tree and Splay tree
- sys/queue.h - Linked list, queue, tail queue
- fgetln() in stdio.h - Read a file line by line
- fts.h - traverse a file hierarchy
- db.h - connect to Berkeley DB
- strlcat() and strlcpy() - secure alternatives for strncat() and strncpy()
- err.h - functions to print formatted error messages
- vis.h - contains vis(), displays non-printable characters in a visual format.

## Bionic

1. https://www.youtube.com/watch?v=G-36noTCaiA
1. https://android.googlesource.com/platform/bionic/
1. http://www.theregister.co.uk/2011/03/29/google_android_and_the_linux_headers/


## Jump-Oriented Programming

1. The missing link: explaining ELF static linking, semantically
1. Jump-oriented programming: a new class of code-reuse attack
1. The geometry of innocent flesh on the bone: return-into-libc without function calls (on the x86)
























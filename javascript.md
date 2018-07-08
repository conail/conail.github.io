---
title: Programming Notes: Javascript
layout: page
---

JavaScript is: 

- functional
- prototypical
- object-oriented
- interpreted (script)

JavaScript interpreters run:

- in the browser
- on a server (nodejs)

The JavaScript community is volatile, and tools evolve quickly.

We'll deal with ECMAScript standards first, starting at the beginning until we reach the most recent.  Then we'll take a look at variations on the language including typing, syntax etc.

# Host Envirionment

ES doesn't have a standard library.  It has /host objects/ that provide functionality by exposing the host environment to the program.

# Objects

An object is an unordered collection of properties each with zero or more attributes.
Attributes determine how each property can be used.
Properties are containers that hold other objects, primitive values or methods.
Primitive Values can be: Undefined, Null, Boolean, Number and String.
An Object has the built-in type Object.
A method is a function associated with an object via a property.

Built-in operators include unary operations, multiplication, additive, bitwise, relational, equality, logical, assignment and comma.

Variables are not required to declare type.  Types are not associated with properties.  Functions are not required to be declared textually before calls.

# Classes

ES Doesn't container proper classes like C++, Smalltalk or Java.  Instead, constructors create objects, allocating storage and assigning initial values to their properties.  

All functions, including constructors, are objects.  Each constructor has a Prototype property which can implement inheritance and shared properties.  The new keyword 

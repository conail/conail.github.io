# unittest -- Unit testing framework

unittest was inspired by JUnit.

- Test automation
- sharing of setup and shutdown code
- test aggregation into collections
- independence from the reporting framework

- fixture: preparation and cleanup required for 1+ tests
- case: atomic test unit.  checks for specific response for a set of inputs.  TestCase is the base class to extend.
- suite: a collection of test cases, test suites, or both.  Aggregates tests that should happen together.
- runner: orchestrates the execution of tests.

# Example

```
import unittest

class TestStringMethods(unittest.TestCase):
  def test_upper(self):
    self.assertEqual('foo'.upper(), 'FOO')

  def test_isupper(self):
    self.assertTrue('FOO'.isupper())
    self.assertFalse('Foo'.isupper())

  def test_split(self):
    s = 'hello world'
    self.assertEqual(s.split(), ['hello', 'world'])
    # check that s.split fails when the separator is not a string
    with self.assertRaises(TypeError)
      s.split(2)

if __name__ == '__main__':
  unittest.main()
```

A testcase is

# References

- https://docs.python.org/3.4/library/unittest.html
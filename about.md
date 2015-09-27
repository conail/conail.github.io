---
layout: page
title: About this Site
permalink: /about/
---

I make lots of notes.  This site stores them with minimal formatting and generate usable interfaces for display.

The pages below helped me find better ways to organize content.

- [Jekyll Documentation](http://jekyllrb.com/docs/home/)
- [How We build CMS Free Websites](https://developmentseed.org/blog/2012/07/27/build-cms-free-websites/), Developement Seed.
- [Overhaul of Page Generation](http://www.rioki.org/2014/12/02/overhaul-of-page-generation.html), rioki.

# Jekyll

[Jekyll](http://jekyllrb.com/) is a great, easy way to preprocess markup files for the web.  That it's built with [Github Pages](https://pages.github.com/) makes it stupidly easy to host a site.  However, there are a few rough edges for sites that aren't intended to be written as blogs.

By default, Jekyll finds 'static' content, that is files for which a publication date is not relevant, in the root folder.  It looks for HTML and Markdown files in the root that have a [front matter](http://jekyllrb.com/docs/frontmatter/) YAML block.  The front matter block can be applied to any type of content page and adds further annotations to documents.  For example, multiple categories can be added to create an overlapping taxonomy.

On most Jekyll sites, publication dates are the primary ranking.  Drafts and 'static' pages are content items without publication dates.  Drafts are omitted from preprocessing/publication as they're considered incomplete.  'Static' pages are considered outside of the normal publication flow.  It would be personally preferable to have content stored in a directory that is not the project root.  

# Topics

- [Databases](/databases)
  - [ISAM](/databases/isam)
  - [SQL](/databases/sql)
- [Data Mining](/data-mining)
  - [Reality Mining](/data-mining/reality-mining)
- [Operating Systems](/os)
  - [Linux](/os/linux)
    - [Virtualization](/os/linux/virtualization)
  - [Windows](/os/windows)
- [Microarchitecture](/microarchitecture)
- [Middleware](/middleware)

# Site Completeness Checklist

This list uses [Github Checklists](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)

Borrowed from [sparkbox](https://github.com/sparkbox/apprentice-at/blob/master/site_completeness_checklist.md).

---

## Early Dev Checklist 

* [ ] Dev site disallows indexing
* [ ] Ensure HTML-only rendering/form submission.
* [ ] all states of navigation/buttons (active, hover, inactive, etc)
* [ ] dropdown menus
* [ ] pagination
* [ ] headline styles that work when very long (wrap to multiple lines)
* [ ] Document directory structure.

### Design

* [ ] Hi-Res (retina-ready) images for any images that are vector/text
based
* [ ] favicon.ico
* [ ] apple-touch-icon.png
* [ ] apple-touch-icon-ipad.png (72×72)
* [ ] apple-touch-icon-ipad.png retina (152×152)
* [ ] apple-touch-icon-iphone4.png (114×114)
* [ ] apple-touch-icon-144x144-precomposed.png
* [ ] apple-touch-icon-120x120-precomposed.png
* [ ] apple-touch-icon-114x114-precomposed.png
* [ ] apple-touch-icon-72x72-precomposed.png
* [ ] apple-touch-icon-57x57-precomposed.png
* [ ] apple-touch-icon-precomposed.png (also 57x57)
* [ ] apple-touch-icon.png (also 57x57)

### Content

* [ ] 404 page
* [ ] search results page
* [ ] copyright page
* [ ] terms of use page
* [ ] any other legal page
* [ ] credit page / link
* [ ] humans.txt included
* [ ] robots.txt file pointing to sitemap.xml
* [ ] sitemap.xml
* [ ] meta tags (description)
* [ ] page titles appropriate and SEO
* [ ] imgs with alt text
* [ ] img title attributes appropriate and SEO

### Markup/CSS/JS Related

(in dynamic content)
* [ ] basic link styles
* [ ] blockquotes
* [ ] unordered lists
* [ ] ordered lists
* [ ] all 6 header tags
* [ ] inline images (left, right, center, etc in CMS content)
* [ ] print stylesheet
* [ ] jump to content link near top of markup (for accessibility)
* [ ] check for empty (href=#) links
* [ ] dynamically generated copyright date
* [ ] form validation in place
* [ ] error styles
* [ ] form required fields tested
* [ ] forms submit properly
* [ ] HTML validated
* [ ] CSS validated
* [ ] No JS errors
* [ ] CSS in the header
* [ ] JS in the footer
* [ ] Run Through [a11yproject](http://a11yproject.com/checklist.html) accessibility checklist

### Testing

Automation

* [ ] Automated unit tests.
* [ ] Automated integration tests.

Desktop

* [ ] are we going to have compatibility mode issues in IE?
* [ ] content accessible in IE 7,8,9
* [ ] design/content right in IE 9/10
* [ ] design/content right in latest PC Chrome
* [ ] design/content right in latest PC FireFox
* [ ] design/content right in latest Mac Safari
* [ ] design/content right in latest Mac Chrome
* [ ] design/content right in latest Mac FireFox
* [ ] design right on a retina display

Devices

* [ ] design/content right in iOS phone
* [ ] design/content right in iOS tablet
* [ ] design/content right in Android phone
* [ ] design/content right in Android tablet
* [ ] design/content right in Blackberry phone
* [ ] design/content right in Blackberry tablet
* [ ] design/content right in Kindle tablet
* [ ] design/content right in Windows phone
* [ ] design/content right in Windows tablet

###  Plan Launch

* [ ] Determine hosting solution.
* [ ] Determine launch plan. (staging environment, DNS changeover, etc)
* [ ] Get client’s google tracking ID.
* [ ] Get client’s mail marketing (mailchimp) ID.
* [ ] Get client’s social share ID’s.
* [ ] Get client’s social pages.

---

## Launch Checklist

* [ ] allow indexing
* [ ] Markup/CSS/JS Related
* [ ] include google analytics (proper UA string)
* [ ] Un-Comment-Out the Google Analytics ID so it works post launch.
* [ ] ensure local jquery files are in place
* [ ] local jquery version should be same as google jquery version
* [ ] add selectivizr only if needed
* [ ] add modernizr only if needed
* [ ] build custom version of modernizr (keep file small)

### Server Related

* [ ] The site is backed up
* [ ] Using expires headers
* [ ] Using gzip
* [ ] Minifying and combining our CSS
* [ ] Include caching option
* [ ] Page weight has been tested and is acceptable.

### Testing (How much testing do we do at launch?)

Desktop
* [ ] are we going to have compatibility mode issues in IE?
* [ ] content accessible in IE 7,8,9
* [ ] design/content right in IE 9/10
* [ ] design/content right in latest PC Chrome
* [ ] design/content right in latest PC FireFox
* [ ] design/content right in latest Mac Safari
* [ ] design/content right in latest Mac Chrome
* [ ] design/content right in latest Mac FireFox
* [ ] design right on a retina display

Devices
* [ ] design/content right in iOS phone
* [ ] design/content right in iOS tablet
* [ ] design/content right in Android phone
* [ ] design/content right in Android tablet
* [ ] design/content right in Blackberry phone
* [ ] design/content right in Blackberry tablet
* [ ] design/content right in Kindle tablet
* [ ] design/content right in Windows phone
* [ ] design/content right in Windows tablet

---

## Post Launch Checklist

### Project Management Related

After we launch a site, this is the procedure that we will follow. We
will wait approximately 14 days to allow for last minute changes,
bugs, etc.

* [ ] send thank you note after final payment is received and remind of
    30-day support timeframe
* [ ] Send documentation to client. (Check that code is commented well,
    send plugin list, any live or documented training)
* [ ] Archive live code. (Repository or Basecamp.)

### Marketing

* [ ] Submit to Galleries.
* [ ] Add to portfolio.
* [ ] Blog about launch.
* [ ] Tweet about launch.
* [ ] Request client quote/recommendation (if appropriate).

### Gallery Submittal:

1. [ ] We do a “normal submission” on www.awwwards.com because
it is well respected and well screened
http://www.awwwards.com/submit
for around $21

2. [ ] Then we use http://thecssgallerylist.com/ for sheer volume to
submit to 100 other sites (hitting many popular ones) for $20.

3. [ ] Then we hand-submit the site to a few other purposeful (but free)
galleries such as:
mediaqueri.es
http://www.mobileawesomeness.com/
http://creattica.com/

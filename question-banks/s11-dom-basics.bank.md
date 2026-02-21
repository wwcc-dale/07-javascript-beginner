---
bank_name: "Session 11: HTML Structure and DOM Basics"
---

1. What does this HTML structure represent? `<header><nav><a href="#home">Home</a></nav></header>`
*a) Semantic navigation inside a header element
b) Invalid HTML
c) Only for styling purposes
d) Should use divs instead

1. Which code snippet uses semantic HTML correctly?
*a) `<article><h2>Blog Post</h2><p>Content...</p></article>`
b) `<div class="article"><div class="title">Blog Post</div><div>Content...</div></div>`
c) `<span><b>Blog Post</b><span>Content...</span></span>`
d) `<p><h2>Blog Post</h2>Content...</p>`

1. What's wrong with this code? `<img src="logo.png">`
*a) Missing alt attribute for accessibility
b) src attribute is wrong
c) Should use background-image instead
d) Nothing wrong

1. How would you mark up a date as June 15, 2024 semantically?
*a) `<time datetime="2024-06-15">June 15, 2024</time>`
b) `<span class="date">June 15, 2024</span>`
c) `<div>June 15, 2024</div>`
d) `<p>June 15, 2024</p>`

1. What's the difference between `<strong>` and `<b>` in this context? `<p>Warning: <strong>Do not touch!</strong></p>`
*a) `<strong>` conveys semantic importance, `<b>` is just visual bold
b) They are completely identical
c) `<b>` is more important
d) `<strong>` is deprecated

1. Which structure correctly represents a blog post with image and caption?
*a) `<figure><img src="photo.jpg" alt="Sunset"><figcaption>Beautiful sunset</figcaption></figure>`
b) `<div><img src="photo.jpg"><p>Beautiful sunset</p></div>`
c) `<img src="photo.jpg"><span>Beautiful sunset</span>`
d) `<picture>Beautiful sunset<img src="photo.jpg"></picture>`

1. What does this structure represent? `<main><section><h2>About</h2><p>...</p></section></main>`
*a) Main content with a thematic section inside
b) Invalid nesting
c) Only for CSS styling
d) Should not use section

1. How many `<h1>` elements should this page have? `<header><h1>Site Name</h1></header><main><h1>Page Title</h1></main>`
*a) One (combine them or use h2 for one)
b) Two is correct
c) As many as needed
d) None

1. What's the purpose of this code? `<nav aria-label="Main navigation"><ul><li><a href="/">Home</a></li></ul></nav>`
*a) Creates accessible navigation with ARIA label for screen readers
b) aria-label does nothing
c) Should use class instead
d) Invalid HTML

1. Which is better for a site footer? `<footer><p>&copy; 2024 Company</p></footer>` or `<div class="footer"><p>&copy; 2024 Company</p></div>`
*a) First - uses semantic `<footer>` element
b) Second - div is more flexible
c) They are identical
d) Neither is correct

1. What does this represent? `<aside><h3>Related Links</h3><ul>...</ul></aside>`
*a) Sidebar content related but tangential to main content
b) Main navigation
c) Footer content only
d) Invalid HTML

1. Fix this code: `<section><article><h1>Title</h1></article></section>`
*a) `<article><h2>Title</h2><p>Content...</p></article>` (article should be standalone, use h2)
b) Code is perfect
c) Remove section
d) Use div instead

1. What's the accessibility issue? `<button><img src="icon.png"></button>`
*a) Missing alt text on image and button has no accessible label
b) Nothing wrong
c) Should use div instead
d) Images cannot be in buttons

1. Which correctly represents a definition list?
*a) `<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>`
b) `<ul><li><b>HTML</b> HyperText Markup Language</li></ul>`
c) `<list><term>HTML</term><def>HyperText Markup Language</def></list>`
d) `<define>HTML: HyperText Markup Language</define>`

1. What's wrong with: `<div><h3>Section</h3><h2>Subsection</h2></div>`
*a) Heading hierarchy is backwards (h2 should not follow h3)
b) Nothing wrong
c) Should use section instead of div
d) Cannot have multiple headings

1. How do you make this link open in new tab safely? `<a href="https://example.com">Link</a>`
*a) `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>`
b) `<a href="https://example.com" target="_blank">Link</a>`
c) `<a href="https://example.com" new-tab>Link</a>`
d) Cannot open in new tab

1. What is the DOM?
*a) A tree structure representing HTML that JavaScript can access
b) A CSS framework
c) A type of JavaScript
d) A database

1. Which selects a single element by ID?
a) document.querySelectorAll('#id')
*b) document.querySelector('#id')
c) document.getElement('#id')
d) document.selectId('#id')

1. What does querySelectorAll return?
a) A single element
*b) A collection of all matching elements
c) True or false
d) An error if no match

1. What's the difference between textContent and innerHTML?
*a) textContent is just text; innerHTML includes HTML tags
b) They are identical
c) innerHTML is faster
d) textContent modifies the DOM

1. How do you change an element's text?
a) element.text = 'new text'
*b) element.textContent = 'new text'
c) element.content = 'new text'
d) element.change('new text')

1. How do you select all elements with class "box"?
a) document.querySelector('box')
*b) document.querySelectorAll('.box')
c) document.getClass('box')
d) document.select('.box')

1. What will this do?
```js
const h1 = document.querySelector('h1');
h1.textContent = 'New Title';
```
*a) Change h1 text to 'New Title'
b) Add a new h1 element
c) Delete the h1
d) Nothing

1. How do you get an attribute value?
a) element.getAttribute
*b) element.getAttribute('attrName')
c) element.attr('attrName')
d) element.attrName

1. Which selects elements by class name?
a) querySelector only
b) getElementById only
*c) querySelector('.className')
d) getElementByClass

1. What's innerHTML used for?
*a) Getting or setting HTML content including tags
b) Getting text only
c) Deleting elements
d) Creating elements

1. How do you set an attribute?
a) element.attr('src', 'image.jpg')
*b) element.setAttribute('src', 'image.jpg')
c) element.src('image.jpg')
d) element.set('src', 'image.jpg')

1. Can you use CSS selectors with querySelector?
*a) Yes, any valid CSS selector
b) No, only IDs
c) Only classes
d) Only tag names

1. What selects the first p element?
a) document.querySelectorAll('p')
*b) document.querySelector('p')
c) document.getElement('p')
d) document.select('p')[0]

1. How do you change an image src?
a) image.src = 'new.jpg'
*b) image.setAttribute('src', 'new.jpg') or image.src = 'new.jpg'
c) image.change('src', 'new.jpg')
d) image.setSrc('new.jpg')

1. True or false: querySelector can select multiple elements.
*a) False (use querySelectorAll)
b) True

1. What does document represent?
*a) The entire HTML page
b) A CSS file
c) A JavaScript object
d) A function

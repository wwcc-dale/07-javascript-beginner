---
bank_name: "Session 13: Responsive Design and Media Queries"
---

1. What does this media query do? `@media screen and (max-width: 768px) { .card { width: 100%; } }`
*a) On screens 768px or smaller, cards become full width
b) On screens larger than 768px, cards are full width
c) Only applies at exactly 768px
d) Invalid syntax

1. Which is mobile-first? A) `.btn { font-size: 16px; } @media (min-width: 768px) { .btn { font-size: 18px; } }` B) `.btn { font-size: 18px; } @media (max-width: 768px) { .btn { font-size: 16px; } }`
*a) A (starts small, adds styles for larger screens)
b) B (starts large, reduces for mobile)
c) Both are mobile-first
d) Neither is mobile-first

1. What's the result at 500px wide? `@media (min-width: 768px) { .box { display: grid; } } @media (max-width: 767px) { .box { display: flex; } }`
*a) `display: flex` (500 < 767)
b) `display: grid` (500 < 768)
c) Both apply
d) Neither applies

1. Fix this viewport tag: `<meta name="viewport" content="width=768">`
*a) `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
b) Code is correct
c) Remove viewport tag
d) `<viewport>768px</viewport>`

1. What does `vw` mean in `width: 50vw`?
*a) 50% of viewport width (not parent width)
b) 50 pixels
c) 50% of parent width
d) Invalid unit

1. Which creates a 2-column responsive grid? `.container { display: grid; grid-template-columns: ____; }`
*a) `repeat(auto-fit, minmax(200px, 1fr))`
b) `2fr`
c) `1fr 1fr` only
d) `200px 200px`

1. What's the issue? `.text { font-size: 16px; } @media (max-width: 768px) { .text { font-size: 14px; } }`
*a) Nothing wrong (valid desktop-first approach)
b) Should use min-width
c) Font sizes wrong
d) Invalid syntax

1. Convert to relative: `.box { width: 320px; }` (parent is 1000px)
*a) `width: 32%` (320/1000 = 32%)
b) `width: 320%`
c) `width: 0.32%`
d) Cannot convert

1. What does this do? `img { max-width: 100%; height: auto; }`
*a) Images scale down to fit container, maintain aspect ratio
b) Images always 100% width
c) Images always 100% height
d) Invalid CSS

1. Which breakpoint comes first in mobile-first? A) `@media (min-width: 768px)` B) `@media (min-width: 1024px)`
*a) A (smaller breakpoint first in mobile-first)
b) B (larger first)
c) Order doesn't matter
d) Both apply together

1. What's the result? `.grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 20px; }`
*a) 3 columns (25%, 50%, 25% of available space) with 20px gaps
b) 3 equal columns
c) Invalid syntax
d) 1 column

1. Fix for mobile: `.nav { display: flex; } @media (max-width: 768px) { .nav { ____; } }`
*a) `flex-direction: column;`
b) `display: none;`
c) `flex-direction: flex;`
d) Cannot fix

1. What does `rem` base on? `html { font-size: 16px; } .text { font-size: 2rem; }`
*a) 32px (2 × root font-size of 16px)
b) 2px
c) 16px
d) Depends on parent

1. Which is better for responsive? A) `width: 300px;` B) `max-width: 300px;`
*a) B (allows shrinking below 300px on small screens)
b) A (fixed width is better)
c) They are identical
d) Both are bad

1. What happens? `.container { display: flex; flex-wrap: wrap; } .item { flex: 1 1 200px; }`
*a) Items wrap to new line when less than 200px, grow/shrink as needed
b) Fixed 200px items
c) Items never wrap
d) Invalid syntax

1. Correct media query for print? `@media print { ... }`
*a) True - applies styles when printing
b) Should be `@media screen`
c) Invalid syntax
d) Not supported

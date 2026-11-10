# Complete Girl Character Portfolio

This is the full standalone website, NOT an update or patch.
All character instances already use the included girl-avatar.svg.
The original name and reference content are preserved; change them to your own.

## Start
1. Extract the ZIP, preserving its folder structure.
2. Open index.html in your browser.
No npm, framework, build process, or internet connection is needed for the page itself.
Social links and email actions naturally open external services/apps.

## Files
portfolio/
  index.html                 Page content and section markup
  css/styles.css             Colors, spacing, responsive layout, animation
  js/script.js               Project data, carousel, tech skills, settings
  assets/girl-avatar.svg     Editable vector girl character
  README.md                  This guide

## Editing guide
- NAME: Find RAJESH, CHITYAL, Rajesh Chityal, and RC in index.html.
- EMAIL: Replace both mailto links and visible email text in index.html.
- BIOGRAPHY: Edit the ABOUT section in index.html.
- EXPERIENCE: Edit the three job articles in index.html.
- SERVICES: Edit the service cards and skill tags in index.html.
- COLORS: Edit the :root variables at the top of css/styles.css.
- CHARACTER: Edit assets/girl-avatar.svg or replace that file with your own SVG.
  All three character instances share this asset.
- PROJECTS: Edit the projects array near the top of js/script.js.
  Add or remove objects: carousel dots are generated automatically.
- PROJECT SCREENSHOTS: Put your image in assets and set a project's image field
  to "assets/your-image.jpg". Edit imageAlt for an accessible description.
- PROJECT LINKS: Fill in the url field. Empty URLs hide the project link.
- TECH SPHERES: Edit the skills array in js/script.js.
- SOCIAL PROFILES: Replace generic GitHub/LinkedIn/X/Instagram URLs in index.html.
- RESUME: Add your own assets/resume.pdf, then set showResume to true
  near the top of js/script.js. No resume PDF is supplied.

HTML, CSS, and JavaScript are non-minified, indented, and organized by
labeled sections. SVG drawing commands remain in SVG path attributes,
but each drawing element and major group has its own line/comment.

## What is included
Responsive navigation, girl character in hero/About/services, service accordions,
career timeline, five-project carousel, optional real project images and links,
CSS-animated skill spheres, email contact link, social links, keyboard navigation,
skip link, reduced-motion support, and automatic copyright year.

## Important scope notes
This is a screenshot-inspired recreation, not the original tutorial source.
The character is a custom 2D SVG, not the original 3D model.
The spheres are CSS animations, not interactive 3D physics.
Default project previews are CSS dashboard illustrations, not real screenshots.
Projects 2-5 are labeled examples. Biography and career details are reference
content, not verified credentials. Replace them before publication.
No contact-form backend, tracking, or analytics is included.

## Publish
Upload the folder contents to a static website host, retaining the css, js,
and assets directories beside index.html. Check your content and links first.

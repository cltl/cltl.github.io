# The CLTL pages

This guide to the CLTL GitHub repositories is built with [CloudCannon](http://cloudcannon.com/)'s [**Edition**](https://learn.cloudcannon.com/templates/edition/) template. 

## Layout
The template provides a two-column layout with a search field and a sections listing on the left column. 

### The sidebar
Besides the header and the search fields, the sidebar has three sections:

- Welcome page, stored as `index.md`
- documentation pages, stored under `_docs`. These pages are sectionned by category, where each category corresponds to a subfolder in `_docs`.
- index, stored as `repository-index.html`

### Note on category/folder and title/file names

The names of categories do not need to match folder names exactly: building iterates through the `_docs` subfolders regardless of their names, and reads the category from the first file it finds in each subfolder. One must make sure in this respect that files of a same category are in the same folder. 

The same holds for title/file names: only title names are read at building.

## Changes to the template
I have customized and adapted the template in places:

- changed the logo in the sidebar's header to a CLTL logo; the logo is stored as `images/emblem.svg`.
- modified `_layouts/default.html`:
    - page titles appear under the section/category title (in the sidebar and on the page itself), unless the category only has a single page with the same name; that is currently the case for the **teaching** section. 
    - removed the changelog and the attached posts, and replaced it by an index.



## How to modify the contents

### Modifying an existing page

You will find this page stored under `_docs/<category>/<page-title>`.

### Adding a page to an existing category

You will find that category's folder under `_docs/<category>`. Add a markdown file `<page-title>.md` for your page there. The file should have the following header:

```md
---
title: <page-title>
category: <category>
order: <n>
---
```

The order is used for sorting pages in a same category for sectioning. A file with a default header is provided under `_docs/_default.md`.

### Adding a category/section

Create a new folder `<category>` under `_docs`, and add a markdown file with the same category to it. 

### Adding a new sidebar section

This is more involved and requires modifying `_layouts/default.html`. 


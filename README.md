# The CLTL pages

The CLTL pages are now built with [Docusaurus](https://docusaurus.io/en/). 

Compared to the previous version, which was based on [Jekyll](https://jekyllrb.com/), we lose the ability of listing repositories by tag, but we gain a simpler site structure.

## How to modify the contents

### Modifying an existing page

You will find this page stored under `docs/<category>/<page-title>`.

### Adding a page to an existing category

You will find that category's folder under `docs/<category>`. Add a markdown file `<page-name>.md` for your page there. The name is not important, as it is the 'page id' that serves for linking documents through the site. The file should have the following header:

```md
---
id: <page-id>
title: <page-title>
---
```

You should link this page by adding its category and id to the file `./website/sidebars.json`. Subcategories can be specified directly in this file.

### Adding a category/section

We now have three categories: `research`, `resources`, and `teaching`.

To create a new category:

* Create a new folder under `docs`, e.g. `new-category`. This is not required for the website, but only to keep a clean structure.
* Add a new page for this category, e.g. `new-page.md` with id `new-page`. 
* Modify the file `./website/siteConfig.js` to add a tab for that category and link it to the first document in it: look for `headerLinks`, and add a line `{doc: 'new-category/new-page', label: 'LabelForThisCategory'},
* Add the page to the `./website/sidebars.json` file.




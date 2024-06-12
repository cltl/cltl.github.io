/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  researchSidebar: {
    'Research': ["research/event-detect", "research/entity-detect", "research/distrib-sem", "research/image-sound", "research/nlp-web", "research/perspectives", "research/robots", "research/sentiment", "research/word-sense"]
  },
  projectsSidebar: {
    'Projects': ["projects/clariah-plus", "projects/dutch-framenet", "projects/spotter"]
  },
  resourcesSidebar: {
    "Corpora": ["resources/corpora"],
    "Formats": ["resources/formats"],
    "Software": ["resources/newsreader", "resources/entity-linking-sys", "resources/syntax"],
    "Evaluation": ["resources/evaluation"],
  },
  teachingSidebar: {
    "Teaching Materials": ["teaching/teaching-materials"],
    "Resources": ["teaching/teaching-resources"],
    "Course Projects": ["teaching/teaching-projects"]
  },
  cltlSidebar: {
    'CLTL': ["internal/internal"]
  },

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

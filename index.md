---
layout: default
title: CLTL's GitHub Page
description: A site to help you navigate through our github repositories
---

# Computational Lexicology and Terminology Lab (CLTL)
	
We work on computational models of natural language in a large variety of topics including lexicons, ontologies, [word embeddings](#distributional-semantics), NLP for digital humanities and social science, event detection and coreference, opinion and argumentation mining, grounding and human-robot interaction and many others. You can find out more about our group on our <a href="http://cltl.nl">website</a>.

We create <b>a lot</b> of software and have a policy of <b>sharing</b> what we create. You can thus find most of our software <a href="https://github.com/cltl/">here</a>, in a long list of repositories. This page is meant to help you find your way, but since it is currently under construction, you may still want to browse through our 100+ repositories for a [full overview](#full-overview).


## Distributional Semantics

Most of our work on distributional semantic models is collected at the repostitory [Semantic Space Navigation](semantic_space_navigation/).


## Full Overview

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}

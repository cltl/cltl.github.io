---
layout: default
title: CLTL's GitHub Page
description: A site to help you navigate through our github repositories
---

# Computational Lexicology and Terminology Lab (CLTL)
	
We work on computational models of natural language in a large variety of topics including lexicons, ontologies, [word embeddings](#distributional-semantics), NLP for digital humanities and social science, event detection and coreference, opinion and argumentation mining, grounding and human-robot interaction and many others. You can find out more about our group on our <a href="http://cltl.nl">website</a>.

We create <b>a lot</b> of software and have a policy of <b>sharing</b> what we create. You can thus find most of our software <a href="https://github.com/cltl/">here</a>, in a long list of repositories. This page is meant to help you find your way, but since it is currently under construction, you may still want to browse through our 100+ repositories for a [full overview](#full-overview).

## Event Detection and Coreference

## Perspectives

## Entity Detection and Linking

**Head and tail of entity linking** - analyses of the head and the tail of entity linking can be found [here](EL-long-tail-phenomena/).

## Word Sense Disambiguation

## Nominal Coreference

## Corpora, Lexica, and Ontologies

## Language of Image and Sound 

## NLP and Semantic Web

**LOTUS** The code of the largest text index to the Linked Open Data cloud can be found at the repository [LOTUS](LOTUS/).

**Profiling** Code of our neural profiling machines built on top of background knowledge can be found in the repository [Profiling](Profiling/). Experiments where these profiling models are applied to establish identity of long-tail entities can be found [here](LongTailIdentity/). The annotation environment code for this project can be found [here](AnnotatingEntityProfiles/).

## Reinforcement Learning

## Sentiment and Opinion

## Distributional Semantics

Most of our work on distributional semantic models is collected at the repostitory [Semantic Space Navigation](semantic_space_navigation/).

## Communicative Robots

## Methods and Evaluation

## NLP Formats and Parsers

## Teaching material

## Software for humanities and Social sciences

## Mysterious software

## Full Overview

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}

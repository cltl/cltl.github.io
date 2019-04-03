---
layout: default
title: CLTL's GitHub Page
description: A site to help you navigate through our github repositories
---

# Computational Lexicology and Terminology Lab (CLTL)
	
We work on computational models of natural language in a large variety of topics including lexicons, ontologies, [word embeddings](#distributional-semantics), NLP for digital humanities and social science, event detection and coreference, opinion and argumentation mining, grounding and human-robot interaction and many others. You can find out more about our group on our <a href="http://cltl.nl">website</a>.

We create <b>a lot</b> of software and have a policy of <b>sharing</b> what we create. You can thus find most of our software <a href="https://github.com/cltl/">here</a>, in a long list of repositories. This page is meant to help you find your way, but since it is currently under construction, you may still want to browse through our 100+ repositories for a [full overview](#full-overview).

## Event Detection and Coreference

**TimeMLEventTrigger:** [this repository](https://cltl.github.io/TimeMLEventTrigger) contains conversion scripts and models to automatically extract event triggers following the TimeML Annotation Guidelines. 

## Perspectives

**GRaSP:** Our formal framework for modeling perspectives and their sources on content is called GRaSP (Grounded Representation and Source Perspective). [This paper](http://acl-bg.org/proceedings/2017/RANLP_W2%202017/pdf/KnowRSH003.pdf) explains how this framework provides a way to connect statements (in texts, video, images, etc.) to their source, the entities and events they mention, and the attitude of the source towards this content. [This repository](https://cltl.github.io/GRaSP/) provides the GRaSP ontology as well as examples illustrating GRaSP.

**Multilingual Event Factuality:** We are building a multi-lingual system for identifying the factuality of events. [This repository](http://cltl.github.io/vua_factuality/) contains the first version of the vua-perspectives-factuality module. The code for a basic implementation for Dutch and English can be found in [here](http://cltl.github.io/multilingual_factuality/). In addition, we provide various scripts (and some data) for running experiments on factuality classifiers [here](http://cltl.github.io/factuality_experimental_environment/). The setup is designed for modules using NAF and evaluation data annotated with the CAT tool. The current version supports experiments on the NewsReader MEANTIME corpus. 

**Affixal Negation:** We have created an affixal negation dictionary by annotating all direct antonym pairs in WordNet using an existing typology of affixal negation. The work is described in [this paper](http://aclweb.org/anthology/W16-5007) and the annotations can be found [here](https://cltl.github.io/lexical-negation-dictionary/).

**Negation & Inference:** [This repository](https://cltl.github.io/positive-interpretations/) contains the code for conducting the experiments as reported in [this paper](http://aclweb.org/anthology/C18-1191). We reimplemented a system for detecting implicit positive meaning from negated statements as described by [Blanco and Sarabi (2016)](http://aclweb.org/anthology/N16-1169) and propose a simple baseline that outperforms the system.

**Microportraits:** A microportrait is an impression of a target group or individual conveyed in a single text. [This repository](https://cltl.github.io/micro-portraits/) contains code to extract microportraits as described in [this paper](http://www.lrec-conf.org/proceedings/lrec2018/pdf/989.pdf), where we use microportraits extraction for investigating stereotyping of Muslims in the Dutch media.

**Storyline Extraction**: [this repository](https://cltl.github.io/EventStoryLine/) contains the materials associated with the StoryLine Extraction Task. The annotation scheme is described in [this paper](http://aclweb.org/anthology/W/W16/W16-5708.pdf) and the corpus is described in [this paper](http://aclweb.org/anthology/W/W17/W17-2711.pdf).

## Entity Detection and Linking

**Head and tail of entity linking** - analyses of the head and the tail of entity linking can be found [here](EL-long-tail-phenomena/).

**Long tail task** All code used to prepare our SemEval-2018 task \#5 "Counting events and participants in the long tail" can be found in the repository [LongTailQATask](LongTailQATask/).

**Systems** Our collaboratively-created system Relink is open-source ([code](relink/)). A human-inspired Entity linking system in progress can be found in the repository [HumanLikeEL](HumanLikeEL/). Our reimplementation of Babelfy is also on [github](BabelfyReimplementation/).

## Word Sense Disambiguation

**Performance on head and tail of WSD ([code](https://cltl.github.io/MoreIsNotAlwaysBetter/))**: we describe a set of experiments to analyze properties such as the volume, provenance, and balancing of training data in the framework of a state-of-the-art WSD system when evaluated on the SemEval-2013 English all-words dataset.

**The role of unannotated data** ([replication](https://cltl.github.io/wsd-dynamic-sense-vector/), [demo](https://cltl.github.io/LSTM-WSD/)) This paper presents a reproduction study of [Yuan et al. (2016)](http://aclweb.org/anthology/C16-1130) using mostly openly available datasets (GigaWord, SemCor, OMSTI) and software (TensorFlow). Our study showed that similar results can be obtained with much less data.

## Nominal Coreference

## Corpora, Lexica, and Ontologies

**Lexical data for historical Dutch** [data and scripts](https://github.com/cltl/clariah-vocab-conversion) This repository contains several historical and contemporaneous lexicons  for Dutch that have been  converted to one common format (LEMON-RDF).

## Language of Image and Sound 

## NLP and Semantic Web

**LOTUS** The code of the largest text index to the Linked Open Data cloud can be found at the repository [LOTUS](LOTUS/).

**Profiling** Code of our neural profiling machines built on top of background knowledge can be found in the repository [Profiling](Profiling/). Experiments where these profiling models are applied to establish identity of long-tail entities can be found [here](LongTailIdentity/). The annotation environment code for this project can be found [here](AnnotatingEntityProfiles/).

## Reinforcement Learning

## Sentiment and Opinion

**OpeNER Corpus:** In the [OpeNER project](http://www.opener-project.eu/project/), we have created a [corpus](https://cltl.github.io/OpeNER_corpus/) of news articles and hotel reviews annotated with opinion expressions, holders, targets and their relations.

**Opinion Mining:** The [Opinion Miner Deluxe ++](https://github.com/rubenIzquierdo/opinion_miner_deluxePP) is an improved version of the [first version of the opinion miner](http://cltl.github.io/opinion_miner_deluxe/) based on machine learning that can be trained using a list of KAF/NAF files. 

**Emotion Detection**: [this repository](https://cltl.github.io/EmotionTagger) contains code to score emotions and expressiveness in text.

## Distributional Semantics

Most of our work on distributional semantic models is collected at the repostitory [Semantic Space Navigation](semantic_space_navigation/).

## Communicative Robots

## Methods and Evaluation

## NLP Formats and Parsers

## Teaching material

**Python for text analysis ([repository](https://github.com/cltl/python-for-text-analysis))**: This is a practical course in Python, geared towards those who want to get some hands-on experience working with language data. (*now taught at the Vrije Universiteit Amsterdam in the [Humanities Research Master: Linguistics](http://masters.vu.nl/en/programmes/linguistics-research/index.aspx) (track [Human Language Technology](http://www.cltl.nl/teaching/human-language-technology/)) and the [Minor Digital Humanities and Social Analytics (BA)](https://www.vu.nl/nl/studiegids/2017-2018/minor/c-d/digital-humanities/index.aspx).*)

## Software for humanities and Social sciences

**[VU-RM-PIP3](https://cltl.github.io/vu-rm-pip3/):** a NewsReader pipeline for syntactic and semantic annotation of Dutch documents. This includes syntactic parsing, semantic role labelling, entity linking, coreference resolution, factuality and opinion mining, and more. We provide instructions for local installation and a docker image.

## Mysterious software

## Full Overview

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}

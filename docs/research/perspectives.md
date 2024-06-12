---
id: perspectives
title: Perspectives
---

## GRaSP
Our formal framework for modeling perspectives and their sources on content is called GRaSP (Grounded Representation and Source Perspective). [This paper](http://acl-bg.org/proceedings/2017/RANLP_W2%202017/pdf/KnowRSH003.pdf) explains how this framework provides a way to connect statements (in texts, video, images, etc.) to their source, the entities and events they mention, and the attitude of the source towards this content. [This repository](https://cltl.github.io/GRaSP/) provides the GRaSP ontology as well as examples illustrating GRaSP.

See also the [nwr-triple-api](https://github.com/cltl/nwr-triple-api) repository, for querying the KnowledgeStore populated with NewsReader output and representing the result as SEM-RDF or SEM-JSON

## Multilingual Event Factuality
 We are building a multi-lingual system for identifying the factuality of events. [This repository](http://cltl.github.io/vua_factuality/) contains the first version of the vua-perspectives-factuality module. The code for a basic implementation for Dutch and English can be found in [here](http://cltl.github.io/multilingual_factuality/). In addition, we provide various scripts (and some data) for running experiments on factuality classifiers [here](http://cltl.github.io/factuality_experimental_environment/). The setup is designed for modules using NAF and evaluation data annotated with the CAT tool. The current version supports experiments on the NewsReader MEANTIME corpus.

## Affixal Negation
 We have created an affixal negation dictionary by annotating all direct antonym pairs in WordNet using an existing typology of affixal negation. The work is described in [this paper](http://aclweb.org/anthology/W16-5007) and the annotations can be found [here](https://cltl.github.io/lexical-negation-dictionary/).

## Negation & Inference
 [This repository](https://cltl.github.io/positive-interpretations/) contains the code for conducting the experiments as reported in [this paper](http://aclweb.org/anthology/C18-1191). We reimplemented a system for detecting implicit positive meaning from negated statements as described by [Blanco and Sarabi (2016)](http://aclweb.org/anthology/N16-1169) and propose a simple baseline that outperforms the system.

## Microportraits
 A microportrait is an impression of a target group or individual conveyed in a single text. [This repository](https://cltl.github.io/micro-portraits/) contains code to extract microportraits as described in [this paper](http://www.lrec-conf.org/proceedings/lrec2018/pdf/989.pdf), where we use microportraits extraction for investigating stereotyping of Muslims in the Dutch media.

## Storyline Extraction
 [this repository](https://cltl.github.io/EventStoryLine/) contains the materials associated with the StoryLine Extraction Task. The annotation scheme is described in [this paper](http://aclweb.org/anthology/W/W16/W16-5708.pdf) and the corpus is described in [this paper](http://aclweb.org/anthology/W/W17/W17-2711.pdf).

## Biographies

* [BiographicalDataModels](https://github.com/cltl/BiographicalDataModels)
* [BiographyNet](https://github.com/cltl/BiographyNet): NLP tools and data used in BiographyNet

## Age discrimination

* [AgeDiscriminationBaseline](https://github.com/cltl/AgeDiscriminationBaseline)

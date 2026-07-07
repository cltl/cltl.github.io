
# DERIVED DATA
- TARGET-WORDS MATRIX
- HUMAN ANNOTATION STATISTICS
- SENSE-GROUPS
- BASE CONCEPTS

## Target Words Matrix

Target Words Matrix includes statistics for all target words in the DutchSemCor-project. There are two files (.csv and .txt) for the three word categories (nouns, verbs and adjectives), containing the same information. The csv file is a typical comma separated values format (in this case the separator is ‘|’), while the .txt file is a more human-readable plain text file.

The information represented for each lemma is the following:

+ lemma
+ part-of-speech
+ Number of instances in SONAR for the lemma
+ Manual annotations: number of instances annotated per sense for the lemma, and also how many of them had to be retrieved from the web, due to was not possible to find them in SONAR.
+ Accuracy: the accuracy for the lemma, for the fold-cross evaluation as well as for the all-words evaluation.
+ Automatic annotations: the number of instances automatically annotated per sense along with the average confidence of the system for all those instances. In the case of the CSV format, we have included a prefix for each sense representing the name of the system. For the manual annotations the prefix is ‘manual-‘.

The format of the CSV is one line for each lemma-pos containing the following information:
```
lemma | pos | total instances in sonar | timbl acc. in fold-cross | svm acc. fold-cross | ukb acc. fold-cross| timbl acc all-words | svm acc. all-words | ukb acc. all-words| manual-sense | num manualinstances | num instancesfrom web | …| [timbl|svm|ukb]-sense | num. automatic annotated by [timbl|svm|ukb] | avg. confidence | … |
```

[Download 4.1.TARGET_WORDS_MATRIX.zip](https://github.com/cltl/dutchsemcor/data/derived_data/target_words_matrix/4.1.TARGET_WORDS_MATRIX.zip)

## Human-annotation statistics

This .zip file contains statistical data on human annotations using the loganalyser (see other package). The files are csv files and are based on the log-file output of the DutchSemCor project.

4 files show statistics of the 4 different corpora:

– 1st cycle – the human annotations made independent of the WSD system
– 2nd cycle – the human annotations made through active learning using the TiMBL system
– All-words – the human annotations made on the all-words corpus for evaluating the WSD-systems
– Manual annotations – containing statistics on all human annotations

16 files show statistics of all human annotations based on PoS. 4 files contain an overview of the annotated lemma’s (.overview). 4 files provide information on multiple tags (the number of tokens that have been asigned two or more senses of the same lemma – .multiple tags). 4 files contain information on the time spent on annotating by the different annotators(.time). Finally, 4 files provide annotation statistics per lemma.

Overview
```
                # annos	    # overlapping annos	    nmr lemmas	IA weak
1. Manual anno  489.637     203.171	                2.941	    74%
a. 1st cycle	360.260	    274.344	                2.874	    94%
b. 2nd cycle	144.274	    132.666	                1.133	    44%
c. All-words	40.091	    6.085	                1.609	    89%
```

[Download Human_annotation_statistics.zip](https://github.com/cltl/dutchsemcor/data/derived_data/human_annotation_stats/Human_annotation_statistics.zip)

## Sense Groups

Cornetto2.0-sense-groups are relations between senses of Cornetto2.0, according to the dump of Cornetto of the 8th of July, 2012. Modifications to Cornetto after that date are not reflected in the sense-groups.

We derived 4 sets of sense-groups for lemmas based on different relations. A sense-group is a set of meanings of a word that are semantically close and therefore difficult to discriminate both for humans and machines. Metonymy, specialization and generalization of meaning of words can lead to closely related meanings that are compatible and can apply simultaneously in a context. An example of metonymy is “academie” (academy) referring to the institution or the building. A case of specialization/generalization is “behandeling” (treatment), referring to a medical treatment but also to treatment in general.

Metaphorical meanings are considered not to be compatible: i.e. in a context both meanings cannot both be true or relevant. E.g. “slang” (snake) can refer to the animal, a person, a tube or a snake-like structure or form but never to combinations. Unrelated meanings are often coming from different origins and have the same spelling by accident, e.g. “pad” (toad/path), referring to an animal or a small road. Both metaphorical and unrelated senses are intended to be excluded from sense-groups because their meanings are not compatible and can more easily be distinguished.

By distinguishing sense-groups it is possible to apply WSD at different levels of precision and relevance.

The files can have overlapping lemmas, lexical units and groups.

[Download cornetto2.0-sense-groups.zip](https://github.com/cltl/dutchsemcor/data/derived_data/sense_groups/cornetto2.0-sense-groups.zip)

## Base Concepts

Cornetto2.0-base-concepts is a list of synset identifiers from Cornetto2.0 that present the most important synsets in the wordnet graph. Importance is based on the position in the hierarchy and the number of relations. The base concepts are chosen in such a way that every synset is mapped to a base concept through the hypernym relations (either directly or indirectly).

Base Concepts play a crucial role in the semantic processing of text. Many semantic relations are similar for all concepts related to the same base concept.Hence, one of the approaches in DutchSemCor is to make a WSD classifier for BaseConcepts trained by all training data of synsets belonging to the same concepts.

The base concepts are extracted using the get-blc perl script created by Egoitz Laparra. The perl script is included in this distribution. The script requires synsets and relations in a particular format (see the readme.txt of the script). The DutchSemCor tool set provides a function to extract the data in the input formatfor the perl script. The shell script get-BC-import-data-from-cdb-syn.sh gives the calls to the java library and the perl script to generate the data file.

A dump of the Cornetto database is required as a starting point.

The resulting output files are given in the folder data, where the number in the file name indicate the minimal number of relations that a base concept should have. Furthermore, we created separate files using all the relations (all) or just the hypernym relations (hypo). For each setting, there is a file with just the base concepts and the number of related concepts (list) and a file that maps each synset to its corresponding base concept (rel).

[Download cornetto2.0-base-concepts.zip](https://github.com/cltl/dutchsemcor/data/derived_data/base_concepts/cornetto2.0-base-concepts.zip)


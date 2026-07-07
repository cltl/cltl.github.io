# Annotated Data

- HUMAN
- HUMAN-FILTERED
- ALL-WORDS
- MACHINE-SONAR
- HUMAN-SONAR-RANDOM-EVALUATION
- MACHINE-DOMAINS
- MACHINE-IDIOMS-DSC-XML
- MACHINE-NAMED-ENTITIES

## Human

HUMAN.log contains all annotations made by human annotators to train WSD-systems in the DutchSemCor project.

[Download HUMAN.log.zip in DSC-XML](https://github.com/cltl/dutchsemcor/data/annotated_data/human/HUMAN.log.zip)

1.2.1.HUMAN_ANNOTATIONS.zip contains three DSC-XML files for each Part-of-speech (noun, verb, adjective) including the manual annotations of the DutchSemCor project. The .zip file also contains the annotations resulting from the Active Learning process(second annotation phase, see below). When human annotators disagreed with the machine, the tag assigned by the human is selected.

[Download 1.2.1.HUMAN_ANNOTATIONS.zip in DSC-XML](https://github.com/cltl/dutchsemcor/data/annotated_data/human/1.2.1.HUMAN_ANNOTATIONS.zip)

The file table.annotations.DSC.08-01-12.sql is an SQL dump of the table used to store all the annotations done in the DutchSemCor project. This table contains annotations made manually (by humans), automatically (by a machine learning system) and also annotations for the all-words corpus.

[Download 1.1.1.SAT-SQL_DUMP.zip](https://github.com/cltl/dutchsemcor/data/annotated_data/human/1.1.1.SAT-SQL_DUMP.zip)

The file table.annotations.DSC.08-01-12.csv is an CSV file created from the table used to store all the annotations done in the DutchSemCor project. This table contains annotations made manually (by humans), automatically (by a machine learning system) and also annotations for the all-words corpus.

[Download 1.1.2.SAT-CSV_EXPORT.zip](https://github.com/cltl/dutchsemcor/data/annotated_data/human/1.1.2.SAT-CSV_EXPORT.zip)

### FIRST ANNOTATION PHASE

In the first phase of the project, 282,503 tokens for 2,870 nouns, verbs and adjectives (11,982 senses) were annotated manually by two annotators. The annotators needed to reach a high agreement and were instructed to select 25 diverse examples for each sense. The examples were selected using a sense annotation tool SAT(Görög & Vossen 2010; Van Gompel 2010; Vossen et al. 2011) from the 500 million token SoNaR corpus of written Dutch (Oostdijk et al., 2008) and the CGN Spoken Dutch Corpus (Eerten, 2007). The SAT is a user-friendly web application for semantic tagging developed for DutchSemCor. The SAT user interface combines lexicographic information from the Cornetto database with corpus data from available corpora.

[Download Human1stPhase.zip](https://github.com/cltl/dutchsemcor/data/annotated_data/human/Human1stPhase.zip)

### SECOND ANNOTATION PHASE (ACTIVE LEARNING)

In the second phase of the project, the manually annotated corpus of the first annotation phase is extended with more examples using a supervised WSD system and through Active Learning (AL). We designed the following procedure:

1. We build and test a supervised WSD system (Initial Learning WSD, or IL-WSD) using the examples from the first phase. 
2. All words with a tested accuracy above 80% are considered done and ready for completing the corpus. That is: the supervised system will be able to find more examples for the senses with sufficiently high confidence and high precision. 
3. All words that perform lower than 80% will undergo AL to obtain better results and more examples.

We defined the following AL procedure for all words that are tagged at less than 80% accuracy by IL-WSD:

1. Use IL-WSD to annotate all remaining SoNaR tokens of word w in WAL, where WAL is the set of words performing lower than 80% accuracy;
2. Present the annotators a selection of 50 tokens for w tagged with senses that perform badly;
3. The annotators tag these tokens with the proper sense, thus creating an Active Learning corpus (AL-corpus). Annotators can assign any of the senses to the tokens, thus also re-assign tokens to senses that already perform well;

The AL-corpus is used to improve the WSD system for words in WAL. This process can be repeated until we attain the desired results for all the words.

[Download HumanMachine2ndPhase.zip](https://github.com/cltl/dutchsemcor/data/annotated_data/human/HumanMachine2ndPhase.zip)

## Human filtered

1.2.2.HUMAN_ANNOTATIONS_FILTERED_FOR_TRAINING.zip includes three XML-files for each Part-of-speech containing the annotated examples used for the training and evaluation of our systems. This is a subset of the whole set of annotations where:

1) Only senses with at least 15 examples are considered
2) For the Active Learning examples, only those where the human annotator agree with the machine are selected.

[Download 1.2.2.HUMAN_ANNOTATIONS_FILTERED_FOR_TRAINING.zip in DSC-XML](https://github.com/cltl/dutchsemcor/data/annotated_data/human_filtered/1.2.2.HUMAN_ANNOTATIONS_FILTERED_FOR_TRAINING.zip)

## All-words

All-words.txt contains sequential annotations made by linguists to evaluate WSD-systems used in the DutchSemCor project.
- Number of tokens = 23.907
- Number of lemmas = 1.527

The All-words corpus covers a small number of texts, limited to a selection of genres and domains.

[Overview of genres and domains](https://github.com/cltl/dutchsemcor/data/annotated_data/all_words/OverviewOfGenresAndDomains.txt)

[Download All-words.zip](https://github.com/cltl/dutchsemcor/data/annotated_data/all_words/All-words.zip)

1.3.1.ALLWORDS_DSC.zip contains three XML files for each Part-of-speech (noun, verb, adjective) including the annotated examples for the allwords corpus developed in the DutchSemCor project. For each annotated example (element) the following information is stored in the DSC-XML file:

+ lemma: the lemma of the example
+ pos: the part-of-speech
+ sense_id: the lexical unit identifier of Cornetto for the example
+ token_id: the token identifier of the example in SONAR

[Download 1.3.1.ALLWORDS_DSC.zip](https://github.com/cltl/dutchsemcor/data/annotated_data/all_words/1.3.1.ALLWORDS_DSC.zip)

## machine domains

The data contains all the paragraphs in SONAR tagged with their corresponding domains (dutch labels). This tagging has been performed automatically by means of our domainTaggerDSC (also available to download).
One XML file has been created for each document in SONAR, and all the domains assigned to each paragraph for this SONAR document are contained in the XML file.
For each domain assigned to the paragraph, the confidence of the classifier is stored in the attribute ‘value’. All the XML files can be found in the folder DOMAINS_SONAR_XML.

[Download 1.6.MACHINE_DOMAINS.zip in DSC-XML](https://github.com/cltl/dutchsemcor_machine_annotations/machine_domains/1.6.MACHINE_DOMAINS.zip)

## Machine idioms

1.7.MACHINE_IDIOMS_DSC.zip contains all the idioms detected automatically in the SONAR corpus in a DSC-xml file. For each idiom detected the following information is stored:

+ form: the canonical form of the idiom
+ idiom_id: the identifier of the idiom in Cornetto
+ lemma: the lemma of the example
+ pos: the part-of-speech
+ token_id: the token identifier of the example in the SONAR corpus

[Download 1.7.MACHINE_IDIOMS_DSC.zip in DSC-XML](https://github.com/cltl/dutchsemcor_machine_annotations/machine_idioms/1.7.MACHINE_IDIOMS_DSC.zip)

## Machine Named Entities

Machine Named Entities contains all automatically annotated with the NER (see the content of the package [here](https://www.sgw.fsg.vu.nl/index.html)).

## Machine Sonar

The MachineSonarXML data contains the automatic annotation of all SONAR with our three WSD systems: 

* TIMBL
* SVM
* UKB

There is a file for each lemma. The lemma and its part-of-speech is contained in the name of the file (lemma.pos.xml), for instance the file timbl/meester.n.xml contains the automatic tagging by timbl of all the unannotated examples of the nouns meester in SONAR.
For each example there is a ‘token’ element under the general element ‘tokens’. For this token the token identifier in SONAR (token_id), the lexical unit identifier (sense) assigned by the annotator (timbl) with a certain value of confidence (confidence). The lemma and part-of-speech are also contained for verbosity.

[Download 1.4.1.MACHINE_SONAR_XML.zip in DSC-XML](https://github.com/cltl/dutchsemcor_machine_annotations/machine_sonar/1.4.1.MACHINE_SONAR_XML.zip)

## Random evaluation

Random-evaluation.txt contains annotations made by linguists to evaluate WSD-systems used in the DutchSemCor project.
- Number of tokens = 11.400
- Number of lemmas = 52

[Download Random-evaluation.zip](data/annotated_data/random_evaluation/Random-evaluation.zip)


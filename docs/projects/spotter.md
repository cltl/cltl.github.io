---
id: spotter
title: The Spotter Framework
---

This page documents the code, data and development of the SPOTTER Framework,
a framework designed to investigate referring expressions and convention formation within an increasing common ground in
Human-Robot Interaction.

The framework is described in [this paper](https://aclanthology.org/2024.lrec-main.1322).

### Paper abstract

Linguistic conventions that arise in dialogue reflect common ground and can increase communicative efficiency. Social robots that can understand these conventions and the process by which they arise have the potential to become efficient communication partners. 
Nevertheless, it is unclear how robots can engage in convention formation when presented with both familiar and new information.
We introduce an adaptable game framework, **SPOTTER**, to study the dynamics of convention formation for visually grounded referring expressions in both human-human and human-robot interaction. Specifically, we seek to elicit convention forming for members of an *inner circle* of well-known individuals in the common ground, as opposed to individuals from an *outer circle*, who are unfamiliar. We release an initial corpus of 5000 utterances from two exploratory pilot experiments in spoken Dutch.
Different from previous work focussing on human-human interaction, we find that referring expressions for both familiar and unfamiliar individuals maintain their length throughout human-robot interaction. Stable conventions are formed, although these conventions can be impacted by distracting outer circle individuals. With our distinction between familiar and unfamiliar, we create a contrastive operationalization of common ground, which aids research into convention formation.

## The SPOTTER game
The SPOTTER game is a two-person reference game. It consists of six rounds
in which the goal is to locate the position of characters in a visual scene.
The visual scene for each player contains the same characters, but they are in
a different order. Players must communicate to find the position of each character
in the other player's picture. The game is designed to support Human-Robot Interaction. However, it can also be used to
investigate Human-Human Interaction.

### Links
- [Source code for the game and the dataset](https://github.com/leolani/spotter)
- [Code for running the Wizard of Oz experiment](https://github.com/leolani/spot-woz/tree/spot)

## Data and experiments
The SPOTTER framework has been used in two Human-Robot Interaction pilot studies. The language used in the pilot studies was Dutch. Here,
the robot behaviour was 'faked' using the Wizard-of-Oz approach. The two pilot studies used 
two different versions of the game:
- **version 1**: The original version. This version uses cartoon-like figures. Players also only had to select whether a character was in the *same* or a *different* position.
- **version_2**: The latest, updated version. The cartoon-like faces have been replaced by more realistic faces. Players now have to select the exact position of a character in the other player's picture.

If you wish to use the framework for your experiments, we recommend to use the latest
version. 

### Participants
The dataset contains interactions from 21 participants:
- 7 participants for Version 1
- 14 participants for Version 2

### Annotation

The dataset contains one **Utterance** per line. Utterances been annotated with the following features:
- **Start**: The start time of an utterance in seconds
- **End**: The end time of an utterance in seconds
- **Text**: The text in the utterance
- **Speaker**: The source of the utterance, either *Human* or *Robot*
- **Mention**: The part of the utterance which contains the description of a character
- **Character**: The gold annotation for the referent of the mention
- **Round**: The round of the game. Any utterances that are not part of a round (i.e. before or in between rounds) are annotated as '0'
- **Transaction Unit**: A unit of the interaction which contains the utterances and turns needed to resolve the mention for one referent and identify them in the picture
- **Transaction Unit Relation**: The relation between subsequent utterances within the same Transaction Unit. For a full list of relations, we refer to Appendix C of our paper.
- **Dialog Act (DA)**: An automatically extracted Dialog Act for the utterance
- **Dialog Act Confidence (DA_conf)**: The confidence score for the automatically extracted Dialog Act

## Citation

If you use our framework or data, please cite our paper:

`@inproceedings{kruijt-etal-2024-spotter-framework,
    title = "{SPOTTER}: A Framework for Investigating Convention Formation in a Visually Grounded Human-Robot Reference Task",
    author = "Kruijt, Jaap  and
      van Minkelen, Peggy  and
      Donatelli, Lucia  and
      Vossen, Piek T.J.M.  and
      Konijn, Elly  and
      Baier, Thomas",
    editor = "Calzolari, Nicoletta  and
      Kan, Min-Yen  and
      Hoste, Veronique  and
      Lenci, Alessandro  and
      Sakti, Sakriani  and
      Xue, Nianwen",
    booktitle = "Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)",
    month = may,
    year = "2024",
    address = "Torino, Italy",
    publisher = "ELRA and ICCL",
    url = "https://aclanthology.org/2024.lrec-main.1322",
    pages = "15202--15215"}`
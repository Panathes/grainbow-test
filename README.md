# Documentation

## Introduction

Le projet réalisé est un gestionnaire de dette (je sais, ce n’est pas le sujet le plus vendeur) permettant de créer/lister/éditer et supprimer des dettes.

## Structure du projet

component: Contenant les composants React réutilisables de l'application.

type: Contenant le principal type manipuler (Debt).

page: Contenant les différentes vues de l'application.

utils: Contenant les données factice l’initialisation de l’application.

## Librairies utilisé:

Typescript

Bulma

Moment

React-hook-form

React-router-dom

Styled-components

Prettier

## Workflow 

Initialement je procède de la manière suivante : branche pour une nouvelle fonctionnalité > push sur la branche dev > push sur la branche main. Pour aller au plus vite j’ai décidé de push directement sur la branche main mais cela n’est clairement pas comment je fonctionne.


## Commandes

Pour installer et lancer le projet, réalisés les commandes suivantes:

npm i

npm start

## Explication sur certains choix techniques

### Formulaire: Formik vs React-hook-form

Initialement je voulais utiliser Formik, la libraires étant utilisé par Grainbow, mais en lisant un article, j’ai vu que Formik était plus maintenu et que la librairie de gestion de formulaire la plus plébiscité était React-hook-Form. J’ai voulu testé React-hook-form afin d’avoir une première expérience dessus.

### Les valeurs de isReimburse et choosePaymentMethod de DebtForm

Un choix plus intéressant serai de transformer ces 2 variables en type Enum

### Localstorage, useContext et Redux

Initialement je suis parti sur le choix d’utiliser useContext, trouvant que mettre en place un Redux était overkill par rapport au besoin. Mais au fur et à mesure que le test avançait, j’ai privilégié le choix d’utiliser uniquement le localstorage, pour pouvoir persister les données.

Update: j'ai remarqué un axe d'amélioration concernant le composant DebtTable, le composant contient la modal et le tableau. La meilleur solution serai de mettre la modal dans un commposant à part afin de séparer la resposabilité du composant.

### Storybook

J'ai hésité à mettre en place un storybook pour montrer l'utilisation des composants de l'application. Je ne sais pas si c'était le bon choix mais je trouvais également cela overkill par rapport au besoin.

## Difficulté rencontré

La seule difficulté rencontrée a été au moment de la réalisation de la fonctionnalité d’édition d’une dette. Les valeurs transmises au formulaire étaient toutes undefined.

Ceci est dû au fonctionnement du defaultValues : https://www.react-hook-form.com/api/useform/#defaultValues

Les valeurs sont définies au render du composant, avant le useEffect, rendant la valeur undefined.

Pour pallier à ce problème, j’ai choisi d’utiliser la props reset : https://www.react-hook-form.com/api/useform/reset/

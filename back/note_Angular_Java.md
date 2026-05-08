
	BACKEND - JAVA

JAVA = langage pour developper une appli backend.
Backend = programme (appli) qui tourne sur un serveur (Spring Boot utilise un serveur)
Spring = outil pour creer le programme 

Java app + Spring Boot = Serveur web qui écoute HTTP
Spring gère l’infrastructure, pas l'application.

✅ Spring gère :
-création des objets (Controller, Service, Repository)
-injection de dépendances
-transformation JSON ↔ Java
-connexion à la base de données
-gestion HTTP

✅ Le développeur gère : la logique metier
Exemples :
une tâche ne peut pas être vide
comment créer une tâche
quand une tâche est terminée
quelles règles appliquer


Backend comporte:  Controller → Service → Repository → Database

- SERVEUR (spring boot) :  ecoute des requetes HTTP

- CONTROLEUR : porte d'entree du back
--> reçoit les requetes http(GET, POST, DELETE, UPDATE...) et transforme en appel de méthode Java , renvoie la reponse.
--> appelle la logique metier

- SERVICE (Business logic) : coeur de l'appli
--> implemente les regles metiers
--> 

- REPOSITORY : acces / gere la base de donnnees 
--> lire - ecrire - supprimer les donnees

- ENTITES (models) : les tables en bases de donnees
--> Ex : un user , une tache ...

---------------------------

Role des API REST 

Le back ne parle pas directement avec Angular (front) : il expose une API REST -> HTTP - JSON
Ex : GET lire - POST creer - PUT/PATCH modifier - DELETE supprimer 

BASE DE DONNEES : le back stocke les donnees

-------------------------

👉 Le cycle d’une requête : Quand Angular appelle le backend :

Le frontend (Angular / navigateur) envoie une requête HTTP
Le Controller la reçoit
Le Controller appelle le Service
Le Service traite la logique métier (avec des objets Java)
Le Service appelle le Repository
Le Repository accède à la base de données
Le Repository renvoie les données au Service
Le Service renvoie le résultat au Controller
Le Controller renvoie une réponse HTTP (JSON) au frontend


----------------------------
FRAMEWORK  : Spring boot (pour construire un backend facilement)
A connaitre fonctionnement global de srping


Java (langage)
   ↓
Spring Boot (framework)
   ↓
Application backend (serveur web)
   ↓
API REST (utilisée par Angular)
---------------------------


Un serveur web est un programme qui :
écoute sur un port (ex: 8080)
reçoit des requêtes HTTP
envoie des réponses

Avec spring boot, le serveur est embarquer dans l'appli donc le programme Java devient lui meme un serveur.

Explication : Quand on demarre l'app 
	----> la java virtual machine demarre 
	----> Spring boot demarre et lance un serveur integré
	----> le serveur ouvre un port et attend des requetes http 
A ce moment le backend est fonctionnel	

	Quand Angular envoie une requete :
	----> la requete arrive sur le port
	----> le serveur la reçoit
	----> spring la redirige vers le bon controller
	----> controller la traite et la reponse est renvoyé

Navigateur / Angular
        ↓
HTTP request
        ↓
Tomcat (serveur)
        ↓
Spring (routing)
        ↓
Controller
        ↓
Service
        ↓
Repository
        ↓
Database

------------------------------

Le back (Java) communique avec le front (Angular) via le protocole HTTP

Une requete HTTP contient :
--> METHODE : GET - POST - PUT - DELETE (CRUD)

--> URL : /tasks ou /tasks/1 (identifie la source , important en REST ?)

--> Les HEADERS : Infos techniques -> type de contenu(json) , authentification ...

--> Le Body : contient les donnees(Json)

-------------------------------

Les donnees echangés sont en JSON (representation texte d'un objet)
Ex : une tache , un user ...
En backend Java : JSON ↔ objets Java automatiquement (Spring gère ça)

Reponse HTTP :
Le serveur renvoie : --> status code ( 200 - 201 - 400 - 404 ...)
		     --> headers et body

------------------------------		
REST : style d'architecture
Ex : ✔️ Bon    /tasks , /users 
     ❌ Mauvais  /getTasks , /createTask 



Utiliser les méthodes HTTP correctement
| Action                 | Méthode   | URL      |
| ---------------------- | --------- | -------- |
| Lire toutes les tâches | GET       | /tasks   |
| Lire une tâche         | GET       | /tasks/1 |
| Créer                  | POST      | /tasks   |
| Modifier               | PUT/PATCH | /tasks/1 |
| Supprimer              | DELETE    | /tasks/1 |
-------------------------------------------------

Angular → envoie HTTP
        ↓
Backend Java → reçoit
        ↓
Retour JSON + status code

-------------------------------
Transformation clé:

HTTP request → méthode Java → HTTP response
Exemple conceptuel :
GET /tasks
→ appelle une méthode Java
→ renvoie JSON


Telle methode correspond a telle requete HTTP

Dans un controller on definit : une URL - une methode http - une action java (spring fait le lien)

Cycle complet avec Controller
Requête HTTP
     ↓
Controller (recevoir une requête HTTP et renvoie une reponse http(json) au frontend)
     ↓
Service (logique metier = decide quoi faire . Renvoie la reponse au controller)
     ↓
Repository (accede a la base de donnee et renvoie les donnees au service)
     ↓
Database
     ↓
Retour Controller
     ↓
Réponse HTTP (JSON)

------------------------
Convention spring

Controller : gérer HTTP - validation simple - appeler le service
Service : logique métier
Repository : accès base

Controller = Interface entre HTTP et ton code Java
une requête HTTP déclenche UNE méthode
le Controller est juste un “pont”
Spring fait le mapping automatiquement
JSON est converti sans effort

-------------------------------
Spring parle à la base de données, mais la base de données fait le travail de stockage
PostgreSQL : un système de stockage.


REPOSITORY:
Fait les operations sur les donnees:
EX: sauvegarder une tache - recuperer des taches - supprimer une tache

Repository = couche qui permet de lire et écrire les données en base
----------------------
SERVICE :
vérifier si une tâche est valide
décider de la sauvegarder (mais c'est repository qui sauvegarde)
appeler le Repository 

-----------------------

qui stocke --> PostgreSQL ✔
qui demande --> Service ✔
qui exécute --> Repository + Spring ✔

--------------------------------

Service → décide = “je veux faire ça”
Repository → transmet la demande -> permet l’accès = “ok, je m’en occupe”
Spring → fait le travail technique = “je traduis en SQL”
PostgreSQL → stocke/exécute = “j’exécute”


-----------------------------
👉 Cas : créer une tâche
Étapes réelles :
Le client envoie une requête
Le Controller reçoit
Le Controller appelle le Service
Le Service :
vérifie le titre
applique les règles
demande au Repository de sauvegarder
Le Repository enregistre
La réponse remonte
--------------------

# 📚 RÉSUMÉ BACKEND JAVA 

## 🧠 1. Java

* Java est un **langage de programmation**
* Ce n’est PAS une application
* Il sert à créer des programmes (dont des backends)

---

## ⚙️ 2. Plateforme Java

* Java Platform = environnement complet

* Contient :

  * JVM
  * bibliothèques standard

* Java Virtual Machine exécute le programme Java

---

## 🌐 3. Backend

Un backend est :

* une application
* qui tourne en continu
* qui répond à des requêtes HTTP

👉 Java est utilisé pour créer ce backend

---

## 🚀 4. Spring Boot

* Spring Boot permet de créer un backend facilement
* Il lance un serveur web intégré (ex: Apache Tomcat)

👉 Ton application Java devient un serveur

---

## 🌐 5. HTTP

* Hypertext Transfer Protocol = protocole de communication

### Une requête contient :

* méthode (GET, POST, etc.)
* URL
* headers
* body (optionnel)

---

## 📦 6. JSON

* JSON = format d’échange de données
* utilisé entre frontend et backend

---

## 🧭 7. REST

* Representational State Transfer = style d’architecture

### Principes :

* utiliser des ressources (/tasks)
* utiliser les bonnes méthodes HTTP
* API stateless

---

## 🔄 8. Cycle d’une requête

Client (Angular)
↓
HTTP request
↓
Serveur (Tomcat)
↓
Spring
↓
Controller
↓
Service
↓
Repository
↓
Database
↓
Réponse JSON

OU 
Frontend → Controller → Service → Repository → Service → Controller → Frontend
---

## 🧱 9. Architecture en couches

Controller → Service → Repository → Database

* Controller = entrée HTTP
* Service = logique métier
* Repository = accès aux données

---

## 🎯 10. Controller

* Reçoit les requêtes HTTP
* Les transforme en méthodes(donnees) Java
* appelle le Service
* Retourne une réponse HTTP (transforme la reponse en JSON)


## 🎯 11. Service
* applique les règles métier
* manipule des objets java

Service = couche qui :
-contient les regles metiers
-fait les operations
-decide quoi faire avec les donnees

Logique metier = Regles de l'appli
Ex: limiter la longueur d'un titre / empecher la suppression d'une tache inexistante...

Un service doit :
-> 1 - Valider les donnees. Ex: verifier qu'un titre n'est pas vide 
-> 2 - Appliquer les regles metiers. Ex: une tache ne peut pas etre terminer 2fois
-> 3 - Coordonner les operations. Ex: Recuperer une tache, la modofer, la sauvegarder


## 🎯 12. Repository
* parle a la base de donnees
* fait les operations CRUD

------------------------------
Endpoint = porte d’entrée du backend exposée par le Controller
Le frontend frappe à la porte (endpoint)
Le Controller ouvre et répond

Une API = le point de communication entre :
le frontend (Angular)
le backend (Spring)

API REST = interface HTTP qui respecte REST


"Gérer une API REST, c’est définir des endpoints HTTP (dans le Controller) qui respectent les règles REST."
Tu "gères une API REST" quand tu définis : 
1. Des routes (URL) EX: /tasks
2. Des méthodes HTTP cohérentes EX: POST → créer GET → lire
3. Des réponses propres Ex : Json

👉 Un endpoint HTTP est : une adresse (URL = la ressource = /tasks) + une méthode HTTP
👉 C’est un point d’accès au backend.

Ex d'un endpoint : GET /tasks ou POST /tasks ou DELETE /tasks/1

-------------------------------------------

Une Entity = un objet Java qui représente une donnée de ton application

Entity = fiche d’information
chaque tâche = une fiche

Ex: Task = ton Entity principale = une tâche à faire
---------------
Quand le frontend envoie :
{
  "title": "faire les courses"
}
Le backend reçoit :
➡️ une requête HTTP avec un body en JSON

Ensuite spring transforme le JSON en objet Java car le back travaille avec avec objet JAVA et non json.

Front -> envoie requete http en JSON
Spring -> Transforme en objet JAVA(entity)
Le back -> travaille avec l'objet JAVA -> renvoie l'objet en JAVA
Spring -> Transforme l'objet JAVA en JSON -> renvoie au front en JSON

Le front parle en JSON 
Le back parle en objet JAVA
Spring fait la transformation

---------------------

Injection de dépendances = Spring crée les objets et les “injecte” là où ils sont nécessaires

👉 Spring crée et connecte automatiquement les objets (Controller, Service, Repository).


-----------------------------------------------
A Faire en codant:
écrire tes Entities
créer ton Controller
faire ton Service
connecter ton Repository
lancer Spring Boot
voir le résultat réel

-------------

🧭 Étapes générales d’un projet Java + Angular

🧰 1. Initialisation du backend (Spring Boot)

👉 Objectif : créer l’API
créer projet Spring Boot (Spring Initializr)
choisir dépendances (Web, JPA, etc.)
lancer le serveur backend
vérifier que l’application démarre


🧱 2. Conception du backend

👉 Objectif : structurer les données et la logique
définir les Entities (modèles de données)
définir les Repositories (accès base de données)
définir les Services (logique métier)
définir les Controllers (API REST / endpoints)

🗄️ 3. Base de données

👉 Objectif : stocker les données
choisir la base (PostgreSQL, MySQL…)
configurer la connexion dans Spring
vérifier que les tables sont créées


🌐 4. Développement de l’API (backend)

👉 Objectif : exposer les endpoints
créer endpoints REST (Controller)
connecter Service + Repository
tester API (Postman ou navigateur)
vérifier JSON entrée / sortie


💻 5. Initialisation du frontend (Angular)

👉 Objectif : créer l’interface utilisateur
créer projet Angular
installer dépendances
lancer serveur Angular
structurer l’app (components, services)


🔗 6. Communication Front ↔ Back

👉 Objectif : connecter les deux mondes
Angular envoie requêtes HTTP
Spring répond en JSON
utiliser services Angular (HTTP client)
connecter endpoints backend


🎨 7. Développement frontend

👉 Objectif : afficher et interagir avec les données
créer components (pages UI)
afficher données venant du backend
gérer formulaires (create/update)
gérer interactions utilisateur


🧪 8. Tests

👉 Objectif : vérifier que tout fonctionne
tester API backend
tester frontend
vérifier communication complète


🚀 9. Déploiement (plus tard)

👉 Objectif : mettre en ligne
backend sur serveur (Render, AWS, etc.)
frontend sur Netlify / Vercel
base de données en cloud

----------------------------------------------------------------

TO DO LIST 

🧰 Étape 1 : créer le projet Spring Boot
* utiliser Spring Initializr
Spring Boot est un framework Java pour créer des API REST
il configure le serveur web + les bibliothèques nécessaires au projet (les dependances)
il permet de construire un backend rapidement et proprement

👉 Spring Boot = boîte déjà prête
👉 Spring Initializr = machine qui fabrique la boîte
Spring Boot est un framework Java pour créer des applications backend (API REST)

------------------------------------

Ordre de constuction du backend:

1 - La base de donnees (Entity) : On definit ce qu'on stocke (structure des données)
EX: Task - id - title - done 

2 - Repository : On definit comment acceder aux donnees (couche “accès base de données")
EX: sauvegarder une tache - recuperer toutes les taches - supprimer une tache 

3 - Service : On definit la logique metier (cerveau de l'application)
EX:	Une tache doit avoir un titre non vide
	Marquer une tache comme terminé
	Filtrer les taches	
 
4 - Controller : On expose l'API REST (porte d’entrée HTTP (pour Angular))
EX:	GET /tasks - POST /tasks - DELETE /tasks/{id}

-------------------------------------


Bases de JAVA :
1) Les classes 
Une classe = un modele de qqchose. EX: Task - User ...

2) Les attributs
Les données dans une classe. Ex pour Task : id - title - done ... 

3) Les annotations : ce qui relie Java a Spring 
EX: @Entity - @Service - @RestController

------------------------------------

 Ex d'une implementation d'un flux complet pour une requete HTTP POST
1) Entity- Definir les donnees : creer une class (une donnee - objet qui sera utliser par tout) (Ex: une tache)
2) Repository- on la connecte a la base de donnee(postgresql) via Repository et la rendre persistante(stocker)
3) Service- Definir les actions / la logique metier (Ex: createTask())
4) Controller- Exposer une API pour le front(@PostMapping)

Explication simple:
-la requete arrive - elle est traitee
-la donnee est enregistree - une reponse est renvoye

---------------------------------------
1️⃣ Créer une tâche 
        POST (create)
        save()
   EX: POST: Front → "voici une task" → backend
   
2️⃣ Voir toutes les tâches (MAINTENANT)
        GET (= READ all)
        findAll()
   EX: GET: Front → "donne-moi les tasks" → backend
   
3️⃣ Voir une tâche
        GET /id
        findById()
4️⃣ Supprimer
        DELETE
        deleteById()

----------------------------------

POST JSON
   ↓
Spring → utilise setters
   ↓
Java object (Task)
   ↓
Service / Repository
   ↓
GET
   ↓
Spring → utilise getters
   ↓
JSON envoyé au front

-----------------------------

Creer un fichier docker-compose pour telecharger et lancer postgres
Dans le fichier application.yaml -> connecter spring-boot a cette base 

-----------------

@GetMapping("/{id}") // GET /tasks/1
    public Task findById(@PathVariable Long id)
    
 EX : GET /tasks/1
 Ici Spring '@PathVariable Long id' veut dire prendre le 1 dans l url (/tasks/1) et met le dans id.






































package com.todoapp.todo.repository; // ce fichier appartient au dossier repository

import com.todoapp.todo.entity.Task; // j utlise la class Task
import org.springframework.data.jpa.repository.JpaRepository;

// fournir save() et spring genere automatiquement le SQL
// le repository dit a spring de sauvegader une Task (JPA)
// spring traduit cela en sql et postgresql execute


//cette ligne dit à Spring de créer automatiquement un Repository capable de gérer
//les opérations de base sur Task en base de données”
public interface TaskRepository extends JpaRepository<Task, Long> {

}

// La db PostgreSQL stocke la Task et genere l'Id
// je veux toutes les focntions de base de spring


// Grace a JpaRepository , spring donne acces automatiqmt a :
// ✔ save() -> creer / modifier
// ✔ findAll() -> tout recuperer
// ✔ findById() -> chercher
// ✔ deleteById() -> supprimer

//Spring Data JPA donne automatiquement au Repository
//toutes les fonctions CRUD nécessaires.
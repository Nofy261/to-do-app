package com.todoapp.todo.entity;

import jakarta.persistence.*; // sert a utliser @

// Task = objet central que tout le monde va utliser(Repository, service...)
@Entity
@Table(name = "tasks")
public class Task {

    //chaque champ a un Id unique,généré automatiquemt par la db
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private boolean done;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}

// on definit une tache (un modele) de l'appli = une table dans la db
// ici Task = table dans la db avec 3 colonnes id - title - done


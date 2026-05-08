// ✔ reçoit les demandes du Controller
// ✔ utilise le Repository
// ✔ applique les règles métier
// le service ne parle pas directement au front ni a la base
// Controller → appelle Service
// Service → utilise Repository
// Repository → parle à la base

// ➕ Créer une tâche
// recevoir une Task
// vérifier si le titre est valide
// la sauvegarder en base

// 📋 Récupérer toutes les tâches
// demander au repository
// retourner la liste
// 🔍 Récupérer une tâche par id
// chercher une Task précise
// ❌ Supprimer une tâche
// supprimer via l’id

package com.todoapp.todo.service;

import com.todoapp.todo.entity.Task;
import com.todoapp.todo.repository.TaskRepository; 
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.util.Optional;
import org.springframework.http.HttpStatus;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // createTask = logique metier
    //reçoit la Task(en objet java et non http) envoyé par controller → sauvegarde en base → 
    // appelle repository qui renvoie Task avec id → retour au controller
    public Task createTask(Task task) {
        Task savedTask = taskRepository.save(task);//enregistre la tache dans la db
        return savedTask; // renvoie la tache sauvegardée
    }

    public List<Task> getTasks() {
        List<Task> taskList = taskRepository.findAll();
        return taskList;
    }

    public Task findById(Long id) {
        Optional<Task> task = taskRepository.findById(id);

        if(task.isPresent()) {
            return task.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
    }

    public Task updateTask(Long id, Task task) {
        Optional<Task> existingTask = taskRepository.findById(id);

        if (existingTask.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }

        Task updatedTask = existingTask.get();
        updatedTask.setTitle(task.getTitle());
        updatedTask.setDone(task.isDone());
        taskRepository.save(updatedTask);

        return updatedTask;
    }

    public void deleteTask(Long id) {
        Optional<Task> existingTask = taskRepository.findById(id);

        if (existingTask.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }

        taskRepository.deleteById(id);

        // return ResponseEntity.noContent().build(); // 204
        // return ResponseEntity.ok("Task deleted successfully");// 200
    }
}




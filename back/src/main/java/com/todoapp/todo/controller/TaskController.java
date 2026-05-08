package com.todoapp.todo.controller;

import com.todoapp.todo.entity.Task;
import com.todoapp.todo.service.TaskService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;// controller utlise service

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping // creation de la route POST /tasks
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @GetMapping // creation route/endpoint GET /tasks
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @GetMapping("/{id}") // GET /tasks/1
    public Task findById(@PathVariable Long id) {
        return taskService.findById(id);
    }

    @PutMapping("/{id}") // PUT /tasks/1
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<String> deleteTask(@PathVariable Long id) {
    //     taskService.deleteTask(id);
    //     return ResponseEntity.ok("Task deleted successfully");
    // }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void>deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

}

//@RestController : cette classe reçoit des requetes HTTP
//@RequestMapping("/tasks") : toutes les routes commencent par /tasks
//@RequestMapping("/tasks"): porte principale, convention REST
// créer une tâche (POST /tasks)
// reçoit la requete http - recupere le body(json->Task) et
// appelle Service qui gere la fonction createTask
// @PostMapping: reçoit les requetes HTTP POST
//@RequestBody: ANgular envoie du json et spring le transforme en objet Task
// cette methode delegue la logique au Service et renvoie le resultat
// @PathVariable : dit à Spring :“prends le {id} dans l’URL”
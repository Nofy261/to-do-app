// comment parler au backend
// Créer un service Angular capable de faire :
// GET http://localhost:8080/tasks

// 👉 le rôle du HttpClient : C’est l’outil Angular pour :
// envoyer des requêtes HTTP
// parler au backend
// recevoir du JSON


// Angular Service
//     ↓
// GET localhost:8080/tasks
//     ↓
// Spring répond JSON

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    private apiUrl = 'http://localhost:8080/tasks';//le endpoint

    constructor(private http: HttpClient) {} // outil pour faire la requete http

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl); //envoie un GET vers le back
    }
}

//Observable : Angular reçoit les donnees de façon asynchrone
// cad les donnees vont arriver plus tard
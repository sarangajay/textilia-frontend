import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config'; 
import { ClothInfomation } from '../models/ClothInfomation';

@Injectable({
    providedIn: 'root' 
})
export class ClothService {

    constructor(private http: HttpClient) { }

    create(data: any): Observable<ClothInfomation[]> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post<ClothInfomation[]>(environment.baseUrl, data, { headers });
    }
}
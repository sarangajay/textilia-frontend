import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private clothDataSubject = new BehaviorSubject<any>(null);
    clothData = this.clothDataSubject.asObservable();

    setClothData(data: any) {
        console.log("data " + data.size)
        this.clothDataSubject.next(data);
    }
}

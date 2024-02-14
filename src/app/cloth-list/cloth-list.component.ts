import { Component, Signal, WritableSignal, computed, signal } from "@angular/core";
import { ClothInfomation } from "../models/ClothInfomation";
import { Observable } from "rxjs";
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from "@angular/common";
import { DataService } from "../services/data.service";
import { TableModule } from 'primeng/table';

const initialValue: ClothInfomation = {
  id: '',
  name: '',
  size: '',
  color: '',
  createdTimestamp: '',
  updatedTimestamp: ''
};

export interface ClothInfoDisplay {
  text: string;
  value: string | number;
}

@Component({
  selector: 'app-cloth-list',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './cloth-list.component.html',
  styleUrl: './cloth-list.component.scss'
})
export class ClothListComponent {

  clothInitList: ClothInfomation[] = Array(1).fill(null).map(_ => ({ ...initialValue }));

  dataList: WritableSignal<ClothInfomation[]>;

  constructor(private dataService: DataService) {
    this.dataList = signal(this.clothInitList || []);
    if (this.dataService.clothData) {
      this.dataService.clothData?.subscribe(data => {
        this.updateWithData(data);
      });
    } else {
      console.log('clothData is null');
    }
  }

  updateWithData(data: ClothInfomation[]): void {
    console.log('Data received:', data);
    if (data) {
      this.dataList.set(data);
    } else {
      console.log('Data is null');
    }
  }


  rowData = computed(() => {
    const dataList = this.dataList();
    return dataList;
  });

}

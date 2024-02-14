  import { Component, OnInit } from '@angular/core';
  import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { ClothService } from '../services/cloth.service';
  import { DataService } from '../services/data.service';

  @Component({
    selector: 'app-cloth-add',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './cloth-add.component.html',
    styleUrl: './cloth-add.component.scss'
  })
  export class ClothAddComponent implements OnInit {
    userForm: any;

    constructor(private formBuilder: FormBuilder,
      private clothService: ClothService,
      private dataService: DataService) { }


    ngOnInit(): void {
      console.log("ngOnInit called")
      this.userForm = this.formBuilder.group({
        name: ['', Validators.required],
        size: ['', Validators.required],
        color: ['', Validators.required]
      });
    }

    submitForm(event: Event): void {
      event.stopPropagation();
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });

      if (this.userForm.valid) {
        const data = JSON.stringify(this.userForm.value, null, 2);
        console.log("submitForm called with" + data);

        this.clothService.create(data).subscribe({
          next: (res) => {
            this.dataService.setClothData(res);
            this.userForm.reset({
              name: '',
              size: '',
              color: ''
            });
          },
          error: (e) => console.error(e)
        });
      } else {
        console.log("Form is invalid");
      }

    }

  }

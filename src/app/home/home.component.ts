import { Component, OnInit, Type } from '@angular/core';
import { HttpProviderService } from '../Service/http-provider.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})

export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  closeResult = '';
  mealList!: Array<any>;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private httpProvider: HttpProviderService
  ) {}

  ngOnInit(): void {
    this.getAllMeals();
  }
  getAllMeals() {
     this.httpProvider.getAllMeal().subscribe(data=>{
      this.mealList = data.body;
     },error=>{
      console.log(error);
     })
  }

  AddMeal() {
    this.router.navigate(['/AddMeal']);
  }

  
  deleteMealConfirmation(meal: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteMeal(meal.id);
      },
        (reason) => {});
  }

  deleteMeal(mealId: any) {
    this.httpProvider.deleteMealById(mealId).subscribe(
      (response: any) => {
        
          this.toastr.success("Deleted Successfully", 'Success');
          this.getAllMeals();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}

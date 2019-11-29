import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Service1Service } from '../../services/service1.service';
import { comment } from 'src/app/models/comment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
 
  comments: comment[];
  name = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  comment = new FormControl('', [
    Validators.required,
    Validators.maxLength(99),
  ]);
  
  matcher = new MyErrorStateMatcher();


  constructor(private service1service: Service1Service, ) { }

  ngOnInit() {
    this.getcomment();
  }

  onSubmit(): void {
    if ( !this.name.value || !this.emailFormControl.value || !this.comment.value ) {return; }
    const name = this.name.value;
    const email = this.emailFormControl.value;
    const content = this.comment.value;
    const newcomment = {name, email, content}  as comment;
    this.service1service.updateComment(newcomment).subscribe();
    this.clearall();
    this.getcomment();
  }

  clearall(): void {
    this.name.setValue(' ');
    this.emailFormControl.setValue(' ');
    this.comment.setValue(' ');
  }

  getcomment(): void {
    this.service1service.getAllComment().subscribe(com => this.comments = com);
  }

}

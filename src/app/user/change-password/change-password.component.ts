import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  resultString:string='';
  passwordsMatch:boolean =true;
  oldPasswordCorrect:boolean =true;
  oldPassword:string;
  newPassword:string;
  confirmPassword:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.oldPasswordCorrect && this.passwordsMatch){
      this.userService.changePassword(localStorage.getItem('user_id')!,this.newPassword).subscribe((res)=>{
        if(res.response=='true'){
          this.resultString = '1';
          setTimeout(()=>{
            this.resultString='';
          },1500  )
        }else{
          this.resultString = '0';
          setTimeout(()=>{
            this.resultString='';
          },1500  )
        }
      });
      let myForm =  document.getElementById('myForm') as HTMLFormElement;
      myForm.reset();
    }else{

      alert('Check Fields');
      return;
    }
  }

  checkOldPassword(){
    this.userService.checkPassword(localStorage.getItem('user_id')!,this.oldPassword).subscribe(
      (res)=>{
        if (res.response=="true"){
          this.oldPasswordCorrect=true;
        }else{
          this.oldPasswordCorrect=false;
        }
      }
    );
  }

  checkPasswordsMatch(){
    if(this.newPassword === this.confirmPassword){
      this.passwordsMatch=true;
    }else{
      this.passwordsMatch=false;
    }
  }

}

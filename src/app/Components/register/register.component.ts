import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  entrar() {
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password

    if(usuario == "matheus" && password =="1234") {

      //mandar para tela de dashboard

      this.fakeLoading();
    }else {
      // mensagem de erro
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open("Usuario não encontrado", '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom'
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {

     this.router.navigate(['dashboard']);
      this.loading = false;
    }, 1500);
  }

}

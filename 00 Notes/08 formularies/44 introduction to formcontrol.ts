/**
 * la mejor manera de controlar los inputs son con un form control
 * se sugiere usar modulos reactivos.
 * 
 */

 /*
SharedModule.ts 
  ReactiveFormsModule form @angular/forms
    -> nos permite el control total
    -> agregar validaciones.
    -> agregar pruebas unitarias.
 */

 /*
footer.component.ts

   FormControl, Validators from @angular/forms

   class
      emailField: FormControl;

      constructor(){
          this.emailField = new FormControl('humberto',
           [
            //    Validators.minLength(4),
            //    Validators.maxLength(10),
                Validators.email
            ]);
        //   this.emailField.valueChanges
        //   .subscribe(value => {
        //       console.log(value);
        //   })
      }

      sendMail() {
          if (this.emailField.valid) {
              console.log(this.emailField.value);
          }
      }

 */

 /*
  app-footer
    <mat-form-field>
      <input matInput [formControl] = "emailField" type="text" placeholder="Digite su correo"/>
    </mat-form-field>
    
    {{emailField.valid}},{{ emailField.invalid}}
    <button mat-raised-button *ngIf="emailField.valid" (click)="sendMail()">enviar</button>
    <button mat-raised-button [disabled]="emailField.invalid" (click)="sendMail()">enviar</button>
    <p *ngIf="emailField.invalid">El campo no es válido</p>
 */

 /*
   recuerda que hay:
   valid
   invalid
   dirty
   touched

 */

 /*
  //recuerda el material debe estar en un modulo aparte.

 */

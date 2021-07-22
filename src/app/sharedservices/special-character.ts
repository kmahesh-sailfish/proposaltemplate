import { FormControl } from "@angular/forms";

export class SpecialCharacter {
    nameValidator(control: FormControl): { [key: string]: boolean } {
        const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (control.value && nameRegexp.test(control.value)) {
           return { invalidName: true };
        }
    }
}



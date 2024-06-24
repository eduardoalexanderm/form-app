import { FormControl } from "@angular/forms";

export const cantBeStrider = (control: FormControl) => {
    // const value = control.value?.trim().toLowerCase();
    // if (value === 'striders') {
    //     return {
    //         cantBeStriders: true
    //     }
    // }
    // return null;
    return{
        noStrider: true
    }
    // return null;
}
import { Component, OnInit, NgModule } from "@angular/core";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface Fruit {
  name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

export interface State {
  flag: string;
  name: string;
  population: string;
}

export interface User {
  name: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-form-layout",
  templateUrl: "./form-layout.component.html",
  styleUrls: ["./form-layout.component.scss"]
})
export class FormLayoutComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  
  
  panelOpenState = false;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  myControl = new FormControl();
  options: User[] = [{ name: "Mary" }, { name: "Shelley" }, { name: "Igor" }];
  filteredOptions: Observable<User[]>;

  matcher = new MyErrorStateMatcher();
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);


  myControl2 = new FormControl();
  options2: string[] = ["One", "Two", "Three"];

  color = 'primary';
  mode = 'determinate';
  value = 50;

  states: State[] = [
    {
      name: "Arkansas",
      population: "2.978M",
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"
    },
    {
      name: "California",
      population: "39.14M",
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg"
    },
    {
      name: "Florida",
      population: "20.27M",
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"
    },
    {
      name: "Texas",
      population: "27.47M",
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"
    }
  ];

  options3: FormGroup;

  constructor(fb: FormBuilder) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
    this.options3 = fb.group({
      hideRequired: false,
      floatLabel: "auto"
    });
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(
      state => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith<string | User>(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }
}

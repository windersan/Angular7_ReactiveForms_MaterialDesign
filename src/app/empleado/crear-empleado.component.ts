import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-crear-empleado",
  templateUrl: "./crear-empleado.component.html",
  styleUrls: ["./crear-empleado.component.css"]
})
export class CrearEmpleadoComponent implements OnInit {
  //empleadoFormGroup: FormGroup;

  empleadoFormGroup = this.fb.group({
    apellido: ["", Validators.required],
    email: [""],
    habilidades: this.fb.array([this.newSkillFormGroup()])
    // habilidades: this.fb.array([this.fb.control("")])
  });

  get habilidades() {
    return this.empleadoFormGroup.get("habilidades") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.empleadoFormGroup = this.fb.group({
    //   apellido: ["", Validators.required],
    //   email: [""],
    //   habilidades: this.fb.array([this.newSkillFormGroup()])
    // });
  }

  addSkill(): void {
    // (<FormArray>this.empleadoFormGroup.get("skills")).push(
    //   this.newSkillFormGroup()
    // );
    // console.log(this.empleadoFormGroup);
    this.habilidades.push(this.newSkillFormGroup());
    console.log(this.empleadoFormGroup);
  }

  newSkillFormGroup(): FormGroup {
    return this.fb.group({
      habilidad: [""],
      nivel: [""]
    });
  }
}

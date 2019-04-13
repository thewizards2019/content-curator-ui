import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  submitted = false;
  sentimentValue: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      sentiment: ['', Validators.required],
      profanity: ['', Validators.required]
    });

    this.sentimentValue = 0.5;
  }

  get f() { return this.settingsForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.settingsForm.invalid){
      return;
    }

    alert('Cool beans.')
  }

  onSliderChange(value:number){
    this.sentimentValue = value
  }

}

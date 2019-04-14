import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  submitted = false;
  sentimentValue: number;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      sentiment: ['', Validators.required],
      profanity: ['', Validators.required]
    });

    this.sentimentValue = this.apiService.getUserSettings().sentimentValue;
  }

  get f() { return this.settingsForm.controls; }

  onSubmit() {
    // this.submitted = true;

    // if (this.settingsForm.invalid) {
    //   return;
    // }
    this.apiService.setUserSettings('profanityValue', 'true');
    alert('Cool beans.');
  }

  onSliderChange(value: number) {
    this.sentimentValue = value;
  }

}

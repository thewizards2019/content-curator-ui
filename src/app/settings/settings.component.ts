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
  profanityValue: boolean;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      sentiment: [this.apiService.getUserSettings["sentimentValue"], Validators.required],
      profanity: [this.apiService.getUserSettings["profanityValue"], Validators.required]
    });

    this.sentimentValue = this.apiService.getUserSettings().sentimentValue;
    this.profanityValue = Boolean(this.apiService.getUserSettings().profanityValue);
  }

  get f() { return this.settingsForm.controls; }

  onSubmit() {
    // this.submitted = true;

    // if (this.settingsForm.invalid) {
    //   return;
    // }
    console.log("Posted values: Profanity -> " + this.settingsForm.get("profanity").value + " | sentiment -> " + this.settingsForm.get("sentiment").value);

    //sessionStorage.setItem('profanityValue', this.settingsForm.get('profanity').value);
    //sessionStorage.setItem('sentimentValue', this.settingsForm.get(''))
    this.apiService.setUserSettings('profanityValue', this.settingsForm.get('profanity').value);
    this.apiService.setUserSettings('sentimentValue', this.settingsForm.get('sentiment').value);

    console.log("Set user settings: Profanity -> " + this.apiService.getUserSettings().sentimentValue + " | Sentiment -> " + this.apiService.getUserSettings().profanityValue);
    //alert('Cool beans.');

  }

  slideChange(value: number) {
    this.sentimentValue = value;
  }

  onSliderChange(value: number) {
    this.sentimentValue = value;
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private http: HttpClient , private sanitizer: DomSanitizer) {}
  makesArr: any = [];
  modelsArr: any = [];
  imgString;
  responseData: any = [];
  makeResponseData: any = [];
  defaultmake = 'Select Make';
  modelReady = false;
  defaultmodel = 'Select Model';
  selectedMake = this.defaultmake;
  selectedModel = this.defaultmodel;

  selectModel(event) {
    console.log(event , 'this.selectedModel');
    this.selectedModel = event;
    if (this.selectedMake !== this.defaultmake && this.selectedModel !== this.defaultmodel) {
    this.http.get
    ('http://192.168.29.234:3400/api/getmodeldetailsother?make=' + this.selectedMake +  '&model=' + this.selectedModel).subscribe(res => {
      this.makeResponseData = res;
      console.log(res,"sjdhfsdgf")
      this.imgString =   this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.makeResponseData.imgbase64);

    });
  }
  }
  ngOnInit() {
      this.http.get('http://192.168.29.234:3400/api/getonlymakedetails').subscribe(res => {
        console.log("makes data init", res)
          this.makesArr = res;
      });
      }

      selectMake(event) {
        this.selectedMake = event;
        this.selectedModel = this.defaultmodel;
        console.log(this.selectedMake , 'this.selectedMake');
        this.modelReady = false;
        this.modelsArr = [];
      console.log("called model")
      this.http.get('http://192.168.29.234:3400/api/getonlymodeldetails?name=' + this.selectedMake).subscribe(res => {
        this.modelsArr = res;
        this.modelReady = true;

  });
      }
}

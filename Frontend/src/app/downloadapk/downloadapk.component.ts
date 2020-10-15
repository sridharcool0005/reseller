import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../apiCalls/api-call.service';

@Component({
  selector: 'app-downloadapk',
  templateUrl: './downloadapk.component.html',
  styleUrls: ['./downloadapk.component.scss']
})
export class DownloadapkComponent implements OnInit {
  otpSent = '';
  userdata;
  otpMessage = '';
  messageType = '';

  constructor(private userService: ApiCallService, private router: Router) { }

  ngOnInit() {
  }

  downloadapk(data) {

    console.log(data);
    this.userdata = data;
    this.userService.submitcustomerdetails(data).subscribe((res: any) => {
      if (res.status === 'success') {
        alert('OTP sent to your Mobile Number successfully.');
        this.otpSent = res.status;
      }
    });
  }

  onOtpChange(data) {
    console.log(data.length)
    if (data.length === 4) {
      this.userdata.otp = data;
      console.log(this.userdata);
      this.userService.verifyOTP(this.userdata).subscribe((res: any) => {
        if (res.success) {
          this.otpMessage = 'OTP verified. Please click to Download APK.';
          this.messageType = 'success';
          console.log(this.messageType)

        } else {
          this.otpMessage = res.message;
          this.messageType = 'error';
        }
      });
    }
  }

}

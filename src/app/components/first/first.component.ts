import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() {
    this.profile = {
      studentid: "B6016357",
      name: "Trirong Bamrungketaudom",
      gender: "Male",
      birthyear: 1998,
      email: "b6016357@g.sut.ac.th",
      phone: "062-1549445",
      img: "https://bit.ly/3bbKrxQ",
      address:
        "SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand",
      comment: "",
    };
  }

  ngOnInit(): void {
  }

  onClick() {
    alert(this.profile.address);
  }

}

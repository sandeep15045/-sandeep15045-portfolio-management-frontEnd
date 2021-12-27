import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-mutualfund',
  templateUrl: './mutualfund.component.html',
  styleUrls: ['./mutualfund.component.css']
})
export class MutualfundComponent implements OnInit {

  allMutual:any
  constructor(private memberService: MemberService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getMutualList();
  }

  getMutualList()
  {
    this.memberService.getAllMutual().subscribe(result=>{
      this.allMutual=result;
      console.log(this.allMutual)
    })
  }

}

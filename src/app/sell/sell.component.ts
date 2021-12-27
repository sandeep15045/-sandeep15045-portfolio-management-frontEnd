import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  allStocks:any
  constructor(private memberService: MemberService, private router:Router,private route:ActivatedRoute) { }


  ngOnInit() {
    this.getStocklist();
  }

  getStocklist(){
    this.memberService.getAllStocks().subscribe(result=>{
      this.allStocks=result;
      console.log(this.allStocks)
    })
  }

}

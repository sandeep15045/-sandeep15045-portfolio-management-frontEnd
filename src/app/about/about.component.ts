import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from '../member.service';
import { NetWorth } from '../net-worth';
import { PortFolioDetails } from '../port-folio-details';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockDetails } from '../stock-details';
import { MutualFundList } from '../mutual-fund-details';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  
})
export class AboutComponent implements OnInit {
  id:number
  product:PortFolioDetails=new PortFolioDetails();
  product1:any
  total:NetWorth=new NetWorth();
  total1:any
  chandraStock:[number]=[0]
  chandraMutualFund:[number]=[0]
  product2:PortFolioDetails=new PortFolioDetails();
  qty:number
  isloading:boolean=false

  abhiArray:[number]=[0]
  sandeepArray:[number]=[0]

  constructor(private memberService: MemberService, private router:Router, private route:ActivatedRoute){} 


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
    });
    this.getProduct(this.id);
    this.isloading=true;
  }
  getProduct(id:number){
    this.memberService.getRequestbyId(id).subscribe(result=>
      {
        
        this.product1=result

        this.product.portFolioId=this.id;
        this.product.stockList=this.product1.stockList;
        this.product.mutualFundList=this.product1.mutualFundList;
        for(let index=0;index<this.product.stockList.length;index++)
        {
          this.chandraStock.push(0);
          this.abhiArray.push(this.product.stockList[index].stockCount);
        }
        this.chandraStock.shift();
        this.abhiArray.shift();

        for(let index=0;index<this.product.mutualFundList.length;index++)
        {
          this.chandraMutualFund.push(0);
          this.sandeepArray.push(this.product.mutualFundList[index].mutualFundUnits);
        }
        this.chandraMutualFund.shift();
        this.sandeepArray.shift();

      })


    }
      displayNet(){
    
        this.memberService.getNetworth(this.product).subscribe(res=>{
          this.product1=res; 
        })   
      }

      toSell()
      {
        this.product2=this.product
        for(let  i =0;i<this.chandraStock.length;i++)
        {
          this.product2.stockList[i].stockCount = this.chandraStock[i];
          if(this.chandraStock[i] <= this.abhiArray[i]){
            this.abhiArray[i]= this.abhiArray[i]-this.chandraStock[i];
          }
        }
        
        for(let  i =0;i<this.chandraMutualFund.length;i++)
        {
          this.product2.mutualFundList[i].mutualFundUnits = this.chandraMutualFund[i];
          if(this.chandraMutualFund[i] <= this.sandeepArray[i]){
            this.sandeepArray[i] = this.sandeepArray[i] - this.chandraMutualFund[i];
          }
        }
       
        
        console.log(this.product2);
        console.log(this.product);
        this.memberService.sellAsset(this.product2).subscribe(result=>{
          this.product1=result;
          console.log(this.product2)
        })

       // this.router.navigate(["/course",this.id]);
      }
    
  }



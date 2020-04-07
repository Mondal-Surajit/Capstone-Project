import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProductsService, Count } from '../products.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  counts:Count[];
  counter:number[]=[];
  labels:string[]=[];
  counter1:number[]=[];
  labels1:string[]=[];
  counter2:number[]=[];
  labels2:string[]=[];
  show:boolean=true;
top3:boolean =false;
top5:boolean=false;
top7:boolean=false;

  chartOptions = {
    responsive: true
  };

  
  
  chartData = [
    { data: this.counter, label: 'Top 3 Viewed Product' }
  ];
  chartData1 = [
    { data: this.counter1, label: 'Top 5 Viewed Product' }
  ];
  chartData2 = [
    { data: this.counter2, label: 'Top 7 Viewed Product' }
  ];
 
  chartLabels;
  chartLabels1;
  chartLabels2;
  ifdata: boolean;
  type:string;
  showMenu()
  {
    this.show?this.show=false:this.show=true;
  }
  myFunction(){
    this.type='bar';
  }
  topthree()
  {
    this.top3?this.top3=false:this.top3=true;
  }

  topfive(){
    this.top5?this.top5=false:this.top5=true;
  }
  topseven(){
    this.top7?this.top7=false:this.top7=true;
  }
    
  
  constructor(private service:ProductsService) { 
    
  }

  ngOnInit(): void {
    this.counts=this.service.getChartData();
    if(this.counts.length===0)
     this.ifdata=false;

     else
     {
       this.ifdata=true;
    if(this.counts.length>0)
    { for(let i=0;i<this.counts.length && i<3;i++){
      this.counter[i]=this.counts[i].counter;
      this.labels[i]=this.counts[i].name; 
      console.log("IN > 0 IF")
    }
    this.chartLabels = this.labels;}
    

    if(this.counts.length>3)
    {for(let i=0;i<this.counts.length && i<5;i++){
      this.counter1[i]=this.counts[i].counter;
      this.labels1[i]=this.counts[i].name; 
      console.log("IN > 3 IF")
    }

    this.chartLabels1 = this.labels1;
  }
    else{
      for(let i=0;i<this.counter.length;i++)
      this.counter1[i]=this.counter[i];
      this.chartLabels1=this.labels;
      console.log("IN > 3 Else")
    }

    if(this.counts.length>5)
    {for(let i=0;i<this.counts.length && i<7;i++){
      this.counter2[i]=this.counts[i].counter;
      this.labels2[i]=this.counts[i].name; 
      console.log("IN > 5 if")
    }this.chartLabels2 = this.labels2;
  }

    else if(this.counts.length>3){
      for(let i=0;i<this.counter1.length;i++)
      this.counter2[i]=this.counter1[i];
      this.chartLabels2 = this.labels1;
      console.log("IN > 3 Else if")
    }
    else
    {
      for(let i=0;i<this.counter.length;i++)
      this.counter2[i]=this.counter[i];
      this.chartLabels2=this.labels;
      console.log("IN > 5 Else ")

    }
    
    
    
    console.log(this.labels)
    // this.chartData.push({data:this.counter,label:'Top Viewed Product'})
  }}

  onChartClick(event) {
    console.log(event);
  }

}

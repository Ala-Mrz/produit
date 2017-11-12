import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
id:string;
  produits = [
  ];
  constructor(private produitService:ServiceService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.produitService.getProducts().subscribe(responseProd => this.produits = responseProd);
    
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}

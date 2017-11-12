import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-produit-liver',
  templateUrl: './produit-liver.component.html',
  styleUrls: ['./produit-liver.component.css']
})
export class ProduitLiverComponent implements OnInit {
id :any;
Produit = [];
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:ServiceService) { 
    this.activatedRoute.params.subscribe((params:Params)=> {
      this.id = params; 
    })

    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getProduct(this.id).subscribe(produit => {
      this.Produit = produit;})
  }

  ngOnInit() { }
  

}

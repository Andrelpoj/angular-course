import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test', 'data:image/jpeg;base64,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')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
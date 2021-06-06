import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server/server.component';
import { ServersComponent } from './server/servers/servers.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesItemComponent } from './recipes/recipe-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from 'src/app/data/datafake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id:  string | null = '0';

  constructor(
    private route: ActivatedRoute
  ){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    if (this.id) {
      this.setValuesToComponent(this.id);
    }
  }

  setValuesToComponent(id: string){
    const result = datafake.filter(article => article.id.toString() == this.id)[0];
    if (result) {
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
    
  }
}

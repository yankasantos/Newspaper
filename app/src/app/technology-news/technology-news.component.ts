import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ModalComponent } from '../modal/modal.component';
import { TechnologyService } from '../shared/services/technology.service';
import { ListPostTechnology } from '../shared/model/list-post-technology.model';



@Component({
  selector: 'app-technology-news',
  templateUrl: './technology-news.component.html',
  styleUrls: ['./technology-news.component.scss']
})
export class TechnologyNewsComponent implements OnInit {

  postTechnology = {} as ListPostTechnology;
  listPostsTechnology: ListPostTechnology[];

  constructor(
    private _bottomSheet: MatBottomSheet,
    private technologyService: TechnologyService
    ){}

  ngOnInit(): void {
    this.getNews();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ModalComponent);
  }

  // Chama o serviço para obtém todos os posts
  getNews() {
    this.technologyService.getNews().subscribe((listPostsTechnology: ListPostTechnology[]) => {
      this.listPostsTechnology = listPostsTechnology;
    });
  }

}

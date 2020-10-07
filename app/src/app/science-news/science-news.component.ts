import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ModalComponent } from '../modal/modal.component';
import { ScienceService } from '../shared/services/science.service';
import { ListPostScience } from '../shared/model/list-post-science.model';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.scss']
})
export class ScienceNewsComponent implements OnInit {

  postScience = {} as ListPostScience;
  listPostsScience: ListPostScience[];

  constructor(
    private _bottomSheet: MatBottomSheet,
    private scienceService: ScienceService
    ){}

  ngOnInit(): void {
    this.getNews();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ModalComponent);
  }

  // Chama o serviço para obtém todos os posts
  getNews() {
    this.scienceService.getNews().subscribe((listPostsScience: ListPostScience[]) => {
      this.listPostsScience = listPostsScience;
      
    });
  }

}

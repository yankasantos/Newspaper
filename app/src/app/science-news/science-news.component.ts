import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.scss']
})
export class ScienceNewsComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet
    ) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ModalComponent);
  }

}

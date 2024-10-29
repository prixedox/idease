import { Component, OnInit } from '@angular/core';
import { ShortcutService } from '../../services/shortcut.service';
import { CategoryDTO } from '../../models/CategoryDTO';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cheatsheet',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cheatsheet.component.html',
  styleUrl: './cheatsheet.component.css'
})
export class CheatsheetComponent implements OnInit {
  categories: CategoryDTO[] = [];

  constructor(private shortcutService: ShortcutService) {}

  ngOnInit() {
    this.shortcutService.getShortcuts().subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }
}

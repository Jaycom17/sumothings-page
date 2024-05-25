import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  showDropdown: boolean = false;
  items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}];
  filteredItems = this.items;
  selected = "selecciona un item"

  filterItems(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.items = this.filteredItems.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
  }

  hideDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectItem(item: any) {
    this.selected = item.name;
    this.showDropdown = false;
  }
}

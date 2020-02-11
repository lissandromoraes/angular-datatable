import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'angular-datatable';

  public data = [
    {name: 'aserichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
    {name: 'dserichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
];
  title = 'angulardatatables';

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}




}

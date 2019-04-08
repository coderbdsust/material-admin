import {
  Component,
  OnInit
} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin];

  header = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };

  events: [
    { id:'idx2019',
      title: 'Disco Party', 
      start: '2019-04-06', 
      end: '2019-04-08' 
    }
  ];

  constructor() {}

  ngOnInit() {
  }


}

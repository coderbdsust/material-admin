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

  public calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin];

  public header = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };

  public eventList = [
    { 
      title: 'Disco Party', 
      date: '2019-04-01'
    },
    { 
      title: 'Farewell Party', 
      date: '2019-04-06'
    },
    { 
      title: 'Sleep Party', 
      date: '2019-04-08'
    }
  ];

  constructor() {}

  ngOnInit() {
  }


}

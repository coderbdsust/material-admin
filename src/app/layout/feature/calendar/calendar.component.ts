import {
  Component,
  OnInit
} from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  
  public calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    events: [
      { 
        title: 'Disco Party', 
        date: moment().subtract(3, 'd').format('LLLL')
      },
      { 
        title: 'Farewell Party', 
        date: moment().format('LLLL')
      },
      { 
        title: 'Sleep Party', 
        date: moment().add(9, 'days').format('LLLL')
      }
    ]
  };

  public header = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };

  constructor() {
    const name = Calendar.name;
  }

  ngOnInit() {}

}

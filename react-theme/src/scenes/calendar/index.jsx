import { useState } from "react";
import FullCalendar,* as formatDate from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () =>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected)=>{
    const title = prompt("Please enter a new title for your events")
    const calendarAPI = selected.view.calendar;
    calendarAPI.unselect();

    if(title) {
      calendarAPI.addEvent({
        id: `${selected.dateStr} - ${title}`, title,
        start: selected.startStr,
        end: selected.endStr,
        addday: selected.allDay,
      })    
    }
  }
   const handleEventClick = (selected) =>{
     if( window.confirm(`Are you to want delete the event ${selected.event.title}`))
    { selected.event.remove() }
   }
   return (
    <Box m ="20px">
      <Header title="CALENDAR" subtitle="Full Calendar" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDER SIDEBAR  */}
        <Box  
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">
            Events
          </Typography>
          <List>
            {currentEvents.map((event)=>(
              <ListItem 
                key = {event.id}
                sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
              >
              <ListItemText 
                primary = {event.title}
                secondary = {
                  <Typography>
                    {formatDate(event.start,{
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                } />
                </ListItem>
           ))}
          </List>
        </Box>
              {/* CALENDAR */}
              <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                  height="75vh"
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                  ]}
                  headerToolbar={{
                    left:"prev,next today",
                    center:"title",
                    right:"dayGridMonth ,timeGridWeek ,timeGridDay, listMonth",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable = {true}
                  selectMirror ={true}
                  dayMaxEvents = {true}
                  select = {handleDateClick}
                  eventClick ={handleEventClick}
                  eventsSet = {(events) => setCurrentEvents(events)}
                  initialEvents={[
                    {
                      id:"12345",
                      title:"All Day",
                      date: "2023-06-29",
                    },
                    {
                      id:"12345",
                      title:"Time events",
                      date: "2023-06-20",
                    }
                  ]}                  
                 />            
              </Box>
      </Box>
    </Box>
   )
  }

export default Calendar
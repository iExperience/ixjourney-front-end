import { Injectable } from '@angular/core';
import { User } from '../../models/user/user'
import { Program } from '../../models/program/program'
import { Location } from '../../models/location/location'
import { Period } from '../../models/period/period'
import { Session } from '../../models/session/session'
import { Choices } from '../../models/choices/choices';

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {
  // these store current data
  user: User;
  program: Program;
  location: Location;
  period: Period;
  session: Session;
  choices: Choices;

  // arrays that hold info from backend
  programs: Array<Program>;
  locations: Array<Location>;
  periods: Array<Period>;
  sessions: Array<Session>;

  // fields arrays
  tech: Array<string> = ["Data Science Course", "Full Stack Coding Course", "Digital Design Course"];
  business: Array<string> = ["Management Consulting Course", "Investment Finance Course", "Product Management Course"];
  design: Array<string> = ["Digital Design Course"];



  constructor() { 
    // Constructor populates all arrays, TESTED

    // Get programs
    fetch('https://students-staging.ixperience.co.za/api/v1/programs.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.programs = data;
      console.log(this.programs);
    })
    .catch(err => {
      console.log(err);
    })

    // Get locations
    fetch('https://students-staging.ixperience.co.za/api/v1/locations.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.locations = data;
      console.log(this.locations);
    })
    .catch(err => {
      console.log(err);
    })

    // Get periods
    fetch('https://students-staging.ixperience.co.za/api/v1/periods.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.periods = data;
      console.log(this.periods);
    })
    .catch(err => {
      console.log(err);
    })

    // Get sessions
    fetch('https://students-staging.ixperience.co.za/api/v1/sessions.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.sessions = data;
      console.log(this.sessions);
    })
    .catch(err => {
      console.log(err);
    })

    // TODO: get current user from user service
  }

  /* 
  TODO Mockups of functions by page
    - Fields -> Courses:
      - getProgramsByField(field: string) <-- inputs are tech, business, design
        - search programs array and returns array of programs with that field
        - create array for each field with the program names in the array for this
    - Courses -> Course Info: 
      - getDatesByProgram(program_id: number)
        - search sessions array for sessions with that program, 
          then for each session, get period from period_id (separate function? probably) 
          and return array with period objects
        - TODO: break this up into multiple functions? it's quite complicated
      - (NOT IN MOCKUP BUT) getDescriptionByCourseId? no place for it tho but we have the info...
    - Course Info -> Cities:
      - getCitiesByProgram(program: string)
        - searches sessions array for sessions with that program,
          then for each session, get city from city_id and return array with city objects
    - Cities -> City Info:
      - ???? Would this be the description? In which case just getCity would work?
  */

  /* Basic Get/Set for all of the fields in Choices, UNTESTED */

  getProgram() {
    return this.program;
  }

  setProgram(program_id: number) {
    for (var i = 0; i < this.programs.length; i++) {
      if (this.programs[i].id == program_id) {
        // set choices' program id
        this.choices.program_id = this.programs[i].id;
        // set program variable 
        this.program = this.programs[i];
      }
    }
  }

  getLocation() {
    return this.location;
  }

  setLocation(location_id: number) {
    for (var i = 0; i < this.locations.length; i++) {
      if (this.locations[i].id == location_id) {
        // set choices' location id
        this.choices.location_id = this.locations[i].id;
        // set location variable
        this.location = this.locations[i];
      }
    }
  }

  getPeriod() {
    return this.period;
  }

  setPeriod(period_id: number) {
    for (var i = 0; i < this.periods.length; i++) {
      if (this.periods[i].id == period_id) {
        // set choices' period id
        this.choices.period_id = this.periods[i].id;
        // set period variable
        this.period = this.periods[i];
      }
    }
  }

  getSession() {
    return this.session;
  }

  setSession(session_id: number) {
    for (var i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].id == session_id) {
        // set choices' session id
        this.choices.session_id = this.sessions[i].id;
        // set session variable
        this.session = this.sessions[i];
      }
    }
  }

  getFinAid() {
    return this.choices.finAid;
  }

  setFinAid(finAid: Boolean) {
    this.choices.finAid = finAid;
  }  

  getApplicationChoice() {
    return this.choices.applicationChoice;
  }

  // QUESTION: should applicationChoice be a string? or boolean? what type????
  setApplicationChoice(applicationChoice: string) {
    this.choices.applicationChoice = applicationChoice;
  }  


  /* FIELDS -> COURSES, UNTESTED */
  getProgramsByField(field: string) {
    // initialize array
    var specificPrograms = [];
    var fieldSelected: Array<string>;

    // set fieldSelected to correct field array
    if (field == "tech") { fieldSelected = this.tech; }
    else if (field == "business") { fieldSelected = this.business; }
    else if (field == "design") { fieldSelected = this.design; }

    // push all field-related programs to new array
    for (var i = 0; i < this.programs.length; i++) {
      for (var j = 0; i < fieldSelected.length; j++) {
        if (this.programs[i].name == fieldSelected[j]) {
          specificPrograms.push(this.programs[i]);
        }
      }
    }

    return specificPrograms;
  }


  /* COURSES -> COURSE INFO, UNTESTED */

  // helper for getDatesByProgramId
  getPeriodById(program_id: number) {
    for (var i = 0; i < this.programs.length; i++) {
      if (this.programs[i].id == program_id) {
        return this.programs[i];
      }
    }
  }

  getDatesByProgramId(program_id: number) {
    var specificSessions = [];
    
    // get all sessions with program_id
    for (var i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].program_id = program_id) {
        specificSessions.push(this.sessions[i]);
      }
    }

    var specificPeriods = [];
    // get all periods from the specific sessions
    for (var i = 0; i < specificSessions.length; i++) {
      var specificPeriod = this.getPeriodById(specificSessions[i].program_id);
      specificPeriods.push(specificPeriod);
    }
    
    return specificPeriods;
  }

  /* COURSE INFO -> CITIES, UNTESTED*/

  // helper for getLocationsByProgramId
  getLocationById(location_id: number) {
    for (var i = 0; i < this.locations.length; i++) {
      if (this.locations[i].id == location_id) {
        return this.locations[i];
      }
    }
  }
  
  getLocationsByProgramId(program_id: number){
    var specificSessions = [];
    
    // get all sessions with program_id
    for (var i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].program_id = program_id) {
        specificSessions.push(this.sessions[i]);
      }
    }

    var specificLocations = [];
    // get all locations from the specific sessions
    for (var i = 0; i < specificSessions.length; i++) {
      var specificLocation = this.getLocationById(specificSessions[i].location_id);
      specificLocations.push(specificLocation);
    }
    
    return specificLocations;

  }

  /* CITIES -> CITY INFO */

  // QUESTION: not sure exactly what we do here with the information from the database here? ask about this

}
import { Injectable } from '@angular/core';
import { User } from '../../models/user/user'
import { Program } from '../../models/program/program'
import { Location } from '../../models/location/location'
import { Period } from '../../models/period/period'
import { Session } from '../../models/session/session'
import { ProgramChoice } from '../../models/programChoice/programChoice';

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
  programChoice: ProgramChoice = new ProgramChoice;

  // arrays that hold info from backend
  allPrograms: Array<Program>;
  allLocations: Array<Location>;
  allPeriods: Array<Period>;
  allSessions: Array<Session>;

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
      this.allPrograms = data;
      console.log(this.allPrograms);
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
      this.allLocations = data;
      console.log(this.allLocations);
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
      this.allPeriods = data;
      console.log(this.allPeriods);
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
      this.allSessions = data;
      console.log(this.allSessions);
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

  // TODO for all Set: error checking to make sure id is valid???

  getProgram() {
    return this.program;
  }

  setProgram(program_id: number) {
    var found = this.allPrograms.find(function(element) {
      return (element.id == program_id);
    });

    // set choices' program id
    this.programChoice.program_id = program_id;
    // set program variable 
    this.program = found;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location_id: number) {
    var found = this.allLocations.find(function(element) {
      return (element.id == location_id);
    });

    // set choices' program id
    this.programChoice.location_id = location_id;
    // set program variable 
    this.location = found;
  }

  getPeriod() {
    return this.period;
  }

  setPeriod(period_id: number) {
    var found = this.allPeriods.find(function(element) {
      return (element.id == period_id);
    });

    // set choices' program id
    this.programChoice.period_id = period_id;
    // set program variable 
    this.period = found;
  }

  getSession() {
    return this.session;
  }

  setSession(session_id: number) {
    var found = this.allSessions.find(function(element) {
      return (element.id == session_id);
    });

    // set choices' program id
    this.programChoice.session_id = session_id;
    // set program variable 
    this.session = found;
  }

  getFinAid() {
    return this.programChoice.finAid;
  }

  setFinAid(finAid: Boolean) {
    this.programChoice.finAid = finAid;
  }  

  getApplicationChoice() {
    return this.programChoice.applicationChoice;
  }

  // QUESTION: should applicationChoice be a string? or boolean? what type????
  setApplicationChoice(applicationChoice: string) {
    this.programChoice.applicationChoice = applicationChoice;
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
    for (var i = 0; i < this.allPrograms.length; i++) {
      for (var j = 0; j < fieldSelected.length; j++) {
        if (this.allPrograms[i].name == fieldSelected[j]) {
          specificPrograms.push(this.allPrograms[i]);
        }
      }
    }

    return specificPrograms;
  }


  /* COURSES -> COURSE INFO, UNTESTED */

  // helper for getDatesByProgramId
  getPeriodById(period_id: number) {
    var found = this.allPeriods.find(function(element) {
      return (element.id == period_id);
    });

    return found;
  }

  getDatesByProgramId(program_id: number) {
    var specificSessions = [];
    
    // get all sessions with program_id
    for (var i = 0; i < this.allSessions.length; i++) {
      if (this.allSessions[i].program_id == program_id) {
        specificSessions.push(this.allSessions[i]);
      }
    }

    var specificPeriods = [];

    // get all periods from the specific sessions
    for (var i = 0; i < this.allPeriods.length; i++) {
      for (var j = 0; j < specificSessions.length; j++) {
        if (this.allPeriods[i].id == specificSessions[j].period_id) {
          var specificPeriod = this.getPeriodById(specificSessions[i].period_id);
          specificPeriods.push(specificPeriod);
          break;
        }
      }
    }    
    return specificPeriods;
  }

  /* COURSE INFO -> CITIES, UNTESTED*/

  // helper for getLocationsByProgramId
  getLocationById(location_id: number) {
    var found = this.allLocations.find(function(element) {
      return (element.id == location_id);
    });

    return found;
  }

  getLocationsByProgramId(program_id: number){
    var specificSessions = [];
    
    // get all sessions with program_id
    for (var i = 0; i < this.allSessions.length; i++) {
      if (this.allSessions[i].program_id == program_id) {
        specificSessions.push(this.allSessions[i]);
      }
    }

    var specificLocations = [];
    
    // get all locations from the specific sessions
    for (var i = 0; i < this.allLocations.length; i++) {
      for (var j = 0; j < specificSessions.length; j++) {
        if (this.allLocations[i].id == specificSessions[j].location_id) {
          var specificLocation = this.getLocationById(this.allLocations[i].id);
          specificLocations.push(specificLocation);
          break;
        }
      }
    }  
    return specificLocations;

  }

  /* CITIES -> CITY INFO */

  // QUESTION: not sure exactly what we do here with the information from the database here? ask about this

}
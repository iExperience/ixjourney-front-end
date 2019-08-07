programs: Array<Program>;
locations: Array<Location>;
periods: Array<Period>;
sessions: Array<Session>;

this.programs = [
    {
      id: 0,
      name: "Data Science",
      description: "data science yup"
    },
    {
      id: 1,
      name: "Digital Design",
      description: "digi design"
    },
    {
      id: 2,
      name: "Full Stack Coding",
      description: "ahh that's me"
    },
    { 
      id: 3,
      name: "Berlin",
      description: "that's in germany haha"
    }
  ];

  this.locations = [
    {
      id: 0,
      name: "Cape Town"
    },
    {
      id: 1,
      name: "Lisbon"
    },
    {
      id: 2,
      name: "Tel Aviv"
    },
    { 
      id: 3,
      name: "Berlin"
    }
  ];

  // question for rafi: what format are the dates in? string? datetime? clarify

  this.periods = [
    {
      // session 1 tel aviv
      id: 0,
      startdate: "05-25-2019",
      enddate: "07-05-2019",
    },
    // session 2 for cape town
    {
      id: 1,
      startdate: "06-30-2019",
      enddate: "08-10-2019",
    },
    // session 1 for lisbon and berlin
    {
      id: 2,
      startdate: "05-26-2019",
      enddate: "07-06-2019",
    },
    // session 2 for lisbon and berlin
    {
      id: 3,
      startdate: "07-07-2019",
      enddate: "08-17-2019",
    },
    // cape town ix immerse
    {
      id: 4,
      startdate: "06-02-2019",
      enddate: "08-10-2019",
    }
  ];

  this.sessions = [
    {
      id: 0,
      program_id: 0, // data science
      location_id: 2, // tel aviv
      period_id: 0 // may 25 - july 5
    },
    {
      id: 1,
      program_id: 0, // data science
      location_id: 0, // cape town
      period_id: 4 // june 2 - aug 10
    },
    {
      id: 2,
      program_id: 0, // data science
      location_id: 0, // cape town
      period_id: 1 // jun 30 - aug 10
    },
    {
      id: 3,
      program_id: 0, // data science
      location_id: 1, // lisbon
      period_id: 2 // may 26 - jul 6
    },
    {
      id: 4,
      program_id: 0, // data science
      location_id: 1, // lisbon
      period_id: 3 // jul 7 - aug 17
    },
    {
      id: 5,
      program_id: 2, // digital design
      location_id: 3, // berlin
      period_id: 2, // may 26 - jul 6
    },
    {
      id: 6,
      program_id: 2, // digital design
      location_id: 3, // berlin
      period_id: 3, // jul 7 - aug 17
    },
    {
      id: 7,
      program_id: 3, // fs coding
      location_id: 0, // cape town
      period_id: 4// jun 2 - aug 10
    },
    {
      id: 8,
      program_id: 3, // fs coding
      location_id: 0, // cape town
      period_id: 1 // jun 30 - aug 10
    },
    {
      id: 9,
      program_id: 3, // fs coding 
      location_id: 1, // lisbon
      period_id: 2 // may 26 - jul 6
    },
    {
      id: 10,
      program_id: 3, // fs coding
      location_id: 1, // lisbon
      period_id: 3, // jul 7 - aug 18
    },
    {
      id: 11,
      program_id: 4, // investment finance
      location_id: 2, // tel aviv
      period_id: 0 // may 25 - jul 5
    },
    {
      id: 12,
      program_id: 4, // investment finance
      location_id: 0, // cape town
      period_id: 4 // jun 2 - aug 10
    },
    {
      id: 13,
      program_id: 4, // investment finance
      location_id: 0, // cape town
      period_id: 1 // jun 30 - aug 10
    },
    {
      id: 14,
      program_id: 5, // management consulting
      location_id: 0, // cape town
      period_id: 4 // jun 2 - aug 10
    },
    {
      id: 15,
      program_id: 5, //management consulting
      location_id: 0, // cape town
      period_id: 1 // jun 30 - aug 10
    },
    {
      id: 16,
      program_id: 5, // management consulting
      location_id: 1, // lisbon
      period_id: 2 // may 26 - jul 6
    },
    {
      id: 17,
      program_id: 5, // management consulting
      location_id: 1, // lisbon
      period_id: 3 // jul 7 - aug 17
    },
    {
      id: 18,
      program_id: 5, // management consulting
      location_id: 3, // berlin
      period_id: 2 // may 26 - jul 6
    },
    {
      id: 19,
      program_id: 5, // management consulting
      location_id: 3, // berlin
      period_id: 3, // jul 7 - aug 17
    },
    {
      id: 20,
      program_id: 6, // product management
      location_id: 0, // cape town
      period_id: 4, // jun 2 - aug 10
    },
    {
      id: 21,
      program_id: 6, // product management
      location_id: 0, // cape town
      period_id: 1 // jun 30 - aug 10
    }
  ];
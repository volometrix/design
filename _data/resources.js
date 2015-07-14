// INSTRUCTIONS: Double quotes must be escaped by a backslash i.e. \"
// HTML is allowed
// Text between {{ and }} are Handlebars helper functions or text that will be replace from the context
// To insert literal "{{" and "}}", use HTML codes &#123; for "{" and &#125; for "}"

{
  names: {
    totalHours: "Total Time Collaborating",
    meetingHours: "Time in Meetings",
    mailHours: "Time in Email",
    oli_hours: "Organizational Load Index",
    teamOli_hours: "Organizational Load Index",
    teamOliTotal_hours: "Organizational Load Index",
    oliReceived_hours: "Organizational Load Received",
    teamOliReceived_hours: "Organizational Load Received",
    teamOliTotalReceived_hours: "Organizational Load Received",
    overload: "After Hours",
    timeBlock_2Hrs: "Time Fragmentation",
    internalNetworkSize: "Internal Network Size",
    externalNetworkSize: "External Network Size",
    externalNetworkBreadth: "External Network Breadth",
    utilization: "Utilization",
    doubleBookedHours: "Double Booked Hours",
    lowEngagementHours: "Low Engagement Hours",
    meetingHoursByIsCustomer_True: "Customer Meeting Hours",
    meetingHoursByIsExternal_True: "External Meeting Hours",
    redundantHours: "Redundant Hours",
    externalCollaborationHoursPct: "External Collaboration Hours",
    meetingsAttended: "Meetings Attended",
    meetingBreakdownDuration_from30to59Minutes: "Time Spent in Meetings w/Duration 30-59 min.",
    overloadMeetings: "Meeting Time Outside Working Hours",
    receivedMails: "Received Mail",
    sentMails: "Sent Mail",
    numAttachments: "Attachments",
    overloadMailsPercent: "Email Traffic Outside Working Hours",
    leadershipExposureCount: "Management Interactions",
    skipLevelExposureCount: "Skip Level Interactions",
    oneOnOneManagerCount: "One-on-one Manager Interactions",
    oneOnOneManagerHours: "One-on-one Manager Hours",
    managerCentralizationCount: "Manager Centralization",
    managerHoursTogether: "Hours With Manager",
    managerLoadAbsorption: "Manager Load Absorption",
    insularityByOrganization: "Insularity By {{canonicalDim 'organization'}}",
    insularityByFunction: "Insularity By {{canonicalDim 'function'}}",
    insularityByRegion: "Insularity By {{canonicalDim 'region'}}",
    insularityByLevel: "Insularity By {{canonicalDim 'level'}}"
// To be dealt with when network kpis are needed for personal dashboard
//intraDepartmentalNetworkDepth: "{{canonicalDim 'organization'}} Depth",
//intraLevelNetworkDepth: "{{canonicalDim 'level'}} Depth",
//intraRegionNetworkDepth: "{{canonicalDim 'region'}} Depth",
//intraFunctionNetworkDepth: "{{canonicalDim 'function'}} Depth"
},
metricCategories: {
  // "activity" is now also a category for hashtagged meetings like #wellness (see timeInvestment report)
  time: {
    name: "Time",
    description: "",
  // TODO: add internal meeting hours (isExternal_False) here once confirmed since external meeting hours is in this category
  metrics: ["doubleBookedHours", "externalCollaborationHours", "externalCollaborationHoursPct", "internalCollaborationHours", "intraTeamTotalCount", "intraTeamTotalHours", "lowEngagementHours",
  "mailHours", "mailHours", "meetingHours", "meetingHoursByIsCustomer_True", "meetingHoursByIsExternal_True",
  "oli_attendees", "oli_avgAttendees", "oli_avgDuration", "oli_avgRecipients", "oli_coAttendees", "oli_duration", "oli_hours", "oli_hoursReceived", "oli_mailHours", "oli_mails", "oli_meetingHours", "oli_num", "oli_recipients",
  "overload", "redundantHours", "timeBlock_1Hr", "timeBlock_2Hrs", "timeSpentWithLevel_Below", "totalHours", "utilization"]
  },
  meeting: {
    name: "Meeting",
    description: "",
    metrics: ["avgAttendedMeetingSizeKpi", "meetingsAttended",
    "meetingBreakdownAttendees_atLeast21", "meetingBreakdownAttendees_from11to20", "meetingBreakdownAttendees_from3to6", "meetingBreakdownAttendees_from7to10", "meetingBreakdownAttendees_only1", "meetingBreakdownAttendees_only2",
    "meetingBreakdownDuration_atLeast8", "meetingBreakdownDuration_from15to29Minutes", "meetingBreakdownDuration_from1to2Hours", "meetingBreakdownDuration_from2to8Hours", "meetingBreakdownDuration_from30to59Minutes", "meetingBreakdownDuration_lessThan15Minutes",
    "meetingBreakdownRecurring_nonRecurring", "meetingBreakdownRecurring_recurring", "meetingHoursByIsExternal_False",
    "meetingHoursByLevel_Above", "meetingHoursByLevel_Below", "meetingHoursByLevel_Same",
    "meetingTimeSpentInCategory", "organizedMeetingHours", "overloadMeetings", "percentRedundantHours", "tooManyMailsHours"]
  },
  email: {
    name: "Email",
    description: "",

    metrics: ["numAttachments", "overloadMailsCount", "overloadMailsPercent", "receivedMails", "sentMails", "sentMailsByIsExternal_False", "sentMailsByIsExternal_True"]
  },
  management: {
    name: "Management Contact",
    description: "",
    metrics: ["leadershipContact", "leadershipExposureCount", "leadershipExposureHours",
    "managerCentralizationCount", "managerCentralizationCountNumerator", "managerCentralizationHoursNumerator", "managerHoursTogether", "managerLoadAbsorption", "managerLoadAbsorptionNumerator", "managementRedundantHours", "managerTeamBrokeringCount", "managerTeamBrokeringHours",
    "oneOnOneCoachingHours", "oneOnOneManagerCount", "oneOnOneManagerHours",
    "skipLevelExposureCount", "skipLevelExposureHours", "staffMeetingHours"]
  },
  network: {
    name: "Network",
    description: "",
    metrics: ["centrality", "customerNetworkBreadth", "customerNetworkSize", "internalNetworkSize", "internalNetworkBreadth", "externalNetworkSize", "externalNetworkBreadth", "intraFunctionNetworkDepth", "intraLevelNetworkDepth", "intraRegionNetworkDepth", "intraDepartmentalNetworkDepth", "internalNetworkVelocity", "networkEfficiency"]
  },
  insularity: {
    name: "Insularity",
    description: "",
    metrics: ["insularityByFunction", "insularityByFunctionNumerator", "insularityByLevel", "insularityByLevelNumerator", "insularityByOrganization", "insularityByOrganizationNumerator", "insularityByRegion", "insularityByRegionNumerator"]
  }
},
  units: {
  // Alphabetical order (except notKpis which are separated out)
  attendees: ["oli_attendees", "oli_avgAttendees", "oli_coAttendees",
  // not KPIs
  "avgAttendedMeetingSize", "avgMeetingSize", "meetingSize", "teamMeetingSize"],
  " ": ["attendedMeetingQuality", "centrality", "customerEigenvectorCentrality", "externalEigenvectorCentrality", "organizedMeetingQuality"], // no units
  "%": ["insularityByFunction", "insularityByLevel", "insularityByOrganization", "insularityByRegion", "lowEngagementPercent", "managerCentralizationCount", "managerLoadAbsorption", "overloadMailsPercent", "percentRedundantHours",
  // not KPIs
  "externalCollaborationHoursPct", "redundancy"],
  dollars: ["timeCostInActivity", "timeCostWithAttribute"],
  // units for dynamically generated "activity" metrics (like #wellness) are "hours" for now (see timeInvestment report)
  hours: ["customerCollaborationHours", "doubleBookedHours", "externalCollaborationHours",
  "insularityByFunctionNumerator", "insularityByLevelNumerator", "insularityByOrganizationNumerator", "insularityByRegionNumerator",
  "internalCollaborationHours", "intraTeamTotalHours", "leadershipExposureHours", "lowEngagementHours", "mailHours", "mailTimeSpentInActivity",
  "managementRedundantHours", "managerCentralizationHoursNumerator", "managerHoursTogether", "managerLoadAbsorptionNumerator", "managerTeamBrokeringHours",
  "meetingBreakdownAttendees_atLeast21", "meetingBreakdownAttendees_from11to20", "meetingBreakdownAttendees_from3to6", "meetingBreakdownAttendees_from7to10", "meetingBreakdownAttendees_only1", "meetingBreakdownAttendees_only2",
  "meetingBreakdownDuration_atLeast8", "meetingBreakdownDuration_from15to29Minutes", "meetingBreakdownDuration_from1to2Hours", "meetingBreakdownDuration_from2to8Hours", "meetingBreakdownDuration_from30to59Minutes", "meetingBreakdownDuration_lessThan15Minutes", "meetingBreakdownRecurring_nonRecurring", "meetingBreakdownRecurring_recurring",
  "meetingHours", "meetingHoursByIsCustomer_True", "meetingHoursByIsCustomer_False", "meetingHoursByIsExternal_False", "meetingHoursByIsExternal_True", "meetingHoursByLevel_Above", "meetingHoursByLevel_Below", "meetingHoursByLevel_Same",
  "meetingTimeSpentInActivity", "meetingTimeSpentInCategory",
  "networkEfficiency",
  "oli_avgDuration", "oli_duration", "oli_hours", "oli_hoursReceived", "oli_mailHours", "oli_meetingHours",
  "oneOnOneCoachingHours", "oneOnOneManagerHours", "organizedMeetingHours", "overload", "overloadMeetings", "redundantHours", "skipLevelExposureHours", "staffMeetingHours",
  "timeSpentInActivity", "timeSpentWithAttribute", "timeSpentWithLevel_Below", "tooManyMailsHours", "totalHours", "utilization",
  // not KPIs
  "collabTimeTotal", "oli", "oliMeetingHours", "meetingTime"],
  // type of person
  connections: ["customerNetworkBreadth", "customerNetworkSize", "externalNetworkBreadth", "externalNetworkSize", "internalNetworkBreadth", "internalNetworkSize", "internalNetworkVelocity", "intraDepartmentalNetworkDepth", "intraFunctionNetworkDepth", "intraLevelNetworkDepth", "intraRegionNetworkDepth", "leadershipContact"],
  // type of person
  recipients: ["oli_recipients"],
  people: ["avgAttendedMeetingSizeKpi", "numMailPeopleInActivity", "numMeetingPeopleInActivity", "numPeopleInActivity", "numPeopleWithAttribute", "oli_avgRecipients"],
  emails: ["oli_mails", "overloadMailsCount", "receivedMails", "sentMails", "sentMailsByIsCustomer_False", "sentMailsByIsCustomer_True", "sentMailsByIsExternal_False", "sentMailsByIsExternal_True", "numMailsInActivity", "numMailsWithAttribute",
  // not KPIs
  "mailsToParent"],
  meetings: ["meetingsAttended", "oli_num", "numMeetingsInActivity", "numMeetingsWithAttribute"],
  attachments: ["numAttachments"],
  count: ["intraTeamTotalCount", "managerCentralizationCountNumerator", "managerTeamBrokeringCount", "oneOnOneManagerCount"],
  occurrences: ["leadershipExposureCount", "skipLevelExposureCount"],
  blocks: ["timeBlock_1Hr", "timeBlock_2Hrs",
  // not KPIs
  "fragmentation"],
  // not KPI
  "FTE Equivalents": ["fteEquivalentSavings"]
},
// TODO: Replace ratioMetrics with units["%"] array
ratioMetrics: {
  insularityByOrganization: true,
  insularityByFunction: true,
  insularityByRegion: true,
  insularityByLevel: true,
  managerCentralizationCount: true,
  managerLoadAbsorption: true,
  overloadMailsPercent: true,
  externalCollaborationHoursPct: true
},
// Add KPI Base names for any KPIs that are user-defined here
  customKpis: {
  // KPI filtered by "activity" (topic search term)
  activity: ["mailTimeSpentInActivity", "meetingTimeSpentInActivity", "timeSpentInActivity", "timeCostInActivity", "numMailPeopleInActivity", "numMeetingPeopleInActivity", "numPeopleInActivity", "numMeetingsInActivity", "numMailsInActivity"],
  // KPI filtered by category - outlook categories and hashtags in meeting subject lines
  category: ["meetingTimeSpentInCategory"],
  // KPI filtered by "relationship" (attribute or group of attributes)
  relationship: ["timeSpentWithAttribute", "timeCostWithAttribute", "numPeopleWithAttribute", "numMeetingsWithAttribute", "numMailsWithAttribute"]
},
// hashtagged meeting categories (for timeInvestment report)
  predefinedActivities: {
    "#wellness": {
      definition: "Time spent on your health and wellness. Also may include exercise health medical categories.",
      want: "HIGHER"
    },
    "#family": {
  definition: "", // TODO: Fill in
  want: "HIGHER"
  },
  "#home": {
    definition: "Time spend tending to home-related issues.",
    want: "HIGHER"
  },
  "#community": {
    definition: "Time spent for the betterment of community.",
    want: "HIGHER"
  },
  "#whitespace": {
  definition: "", // TODO: Fill in
  want: "HIGHER"
  },
  "#expenses": {
    definition: "Time spent dealing with expenses and itemization.",
    want: "HIGHER"
  },
  "#profdev": {
    definition: "Time spent on professional development.",
    want: "HIGHER"
  }
},
// Items list under metric that are not true backend KPIs
// Eventually get rid of them or put them in a different place
notKpis: ["avgAttendedMeetingSize", "avgMeetingSize", "collabTimeTotal", "fragmentation", "fteEquivalentSavings", "lowEngagementPercent", "mailsToParent", "meetingSize", "meetingTime", "oli", "oliMeetingHours", "redundancy", "teamMeetingSize"],
/*
* For `want` properties, currently supported values are: "HIGHER" and "LOWER" (from Metric.want)
* HIGHER: we want our actual value to be higher than or equal to our goal value (within 1 decimal place)
* LOWER: we want our actual value to be lower than or equal to our goal value (within 1 decimal place)
*/
metric: { // Alphabetical order
  attendedMeetingQuality: {
    name: "",
    definition: ""
  },
  avgAttendedMeetingSize: {
    name: "",
    definition: ""
  },
  avgAttendedMeetingSizeKpi: {
    name: "Meeting Size (Meetings Attended)",
    definition: "The average number of people present in meetings you attended. All attendees (internal and external) are included in calculation."
  },
  avgMeetingSize: {
    shortTitle: "Avg Meeting Size",
    definition: "Average number of people attending the same meeting during the time period"
  },
  centrality: {
    name: "Centrality",
    definition: "Centrality is a measure of how highly connected individuals are within the organization. Individuals with higher centrality have many connections to other individuals with high connections. Generally, these are leaders within a network as they have many connections to other well-connected individuals. Connections are defined based on recent email and meeting with fewer than 5 people involved."
  },
  collabTimeTotal: {
    title: "Total Time Collaborating",
    definition: "Total time spent in meetings or email outside of M-F {{workDayStart}}-{{workDayEnd}}"
  },
  customerCollaborationHours: {
    name: "Customer Collaboration Hours",
    definition: "Estimated time an individual interacts with a customer in emails and meetings with your organization’s customers"
  },
  customerEigenvectorCentrality: {
    name: "Customer Centrality",
    definition: "Customer Centrality is a measure of how highly connected individuals within the organization are connected to internal people and customers. Individuals with higher centrality have many connections to other individuals with high connections. Generally, these are leaders within a network as they have many connections to other well-connected individuals. Connections are defined based on recent email and meeting with fewer than 5 people involved."
  },
  customerNetworkBreadth: {
    name: "Customer Network Breadth",
    definition: "The number of customers with which an individual has at least one connection. A connection is made with at least two meetings or emails involving less than 5 people."
  },
  customerNetworkSize: {
    name: "Customer Network Size",
    definition: "The number of customers with whom you had at least two <b>meaningful interactions</b> per month. A meaningful interaction is defined as a meeting or email between five or fewer people."
  },
  doubleBookedHours: {
    title: "Double Booked Hours",
    definition: "The average number of hours per week where members of each group were scheduled for multiple simultaneous meetings.",
    name: "Double Booked Hours"
  },
  externalCollaborationHours: {
    name: "External Collaboration Hours",
    definition: "External collaboration time estimates how much time an individual spends in emails and meetings with individuals from external organizations."
  },
  externalCollaborationHoursPct: {
    title: "External Collaboration Hours",
    definition: "<p>Percent of collaboration time spent involving external people</p>"
  },
  externalEigenvectorCentrality: {
    name: "External Centrality",
    definition: "External Centrality is a measure of how highly connected individuals within the organization are connected to internal and external people. Individuals with higher centrality have many connections to other individuals with high connections. Generally, these are leaders within a network as they have many connections to other well-connected individuals. Connections are defined based on recent email and meeting with fewer than 5 people involved."
  },
  externalNetworkBreadth: {
    name: "External Network Breadth",
    definition: ""
  },
  externalNetworkSize: {
    name: "External Network Size",
    definition: ""
  },
  fragmentation: {
    title: "Time Fragmentation"
  },
  fteEquivalentSavings: {
    title: "FTE Equivalent Savings",
    label: "FTE equivalents saved during this time period",
    definition: "Number of Full Time Employee equivalents saved within this time period, compared to the baseline. A positive number such as \"20\" would indicate that work equivalent to the potential effort of 20 employees was saved. Conversely, a negative number such as \"-20\" indicates this amount of additional work was required."
  },
  insularityByFunction: {
    title: "Insularity By {{canonicalDim 'function'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'function'}}."
  },
  insularityByFunctionNumerator: {
    name: "",
    definition: ""
  },
  insularityByLevel: {
    title: "Insularity By {{canonicalDim 'level'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'level'}}."
  },
  insularityByLevelNumerator: {
    name: "",
    definition: ""
  },
  insularityByOrganization: {
    title: "Insularity By {{canonicalDim 'organization'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'organization'}}."
  },
  insularityByOrganizationNumerator: {
    name: "",
    definition: ""
  },
  insularityByRegion: {
    title: "Insularity By {{canonicalDim 'region'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'region'}}."
  },
  insularityByRegionNumerator: {
    name: "",
    definition: ""
  },
  internalCollaborationHours: {
    name: "",
    definition: ""
  },
  internalNetworkBreadth: {
    name: "Internal Network Breadth",
    definition: "An individual's internal network size is the number of unique departments that they have connections with. An individual with a higher internal network size is well-connected to many different teams within the organization."
  },
  internalNetworkSize: {
    name: "Internal Network Size",
    definition: ""
  },
  internalNetworkVelocity: {
    name: "",
    definition: ""
  },
  intraDepartmentalNetworkDepth: {
    name: "",
    definition: ""
  },
  intraFunctionNetworkDepth: {
    name: "Intra Function Network Depth",
    definition: "Engagement within function measures the total connections the individual has other individuals within their shared function."
  },
  intraLevelNetworkDepth: {
    name: "",
    definition: ""
  },
  intraRegionNetworkDepth: {
    name: "",
    definition: ""
  },
  intraTeamTotalCount: {
    name: "",
    definition: ""
  },
  intraTeamTotalHours: {
    name: "",
    definition: ""
  },
  leadershipContact: {
    name: "",
    definition: ""
  },
  leadershipExposureCount: {
    title: "Management Interactions",
    definition: "<p>The average number of occurrences per week where members of each group interacted with someone who is at least one {{canonicalDim 'level'}} above them (e.g. manager or leader). </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting.</p>",
    name: "Management Interactions"
  },
  leadershipExposureHours: {
    name: "",
    definition: ""
  },
  lowEngagementHours: {
    title: "Low Engagement Hours",
    definition: "<p>The average number of hours per week spent by the members of each group in meetings where they were not fully engaged. </p><p>A meeting attendee's time is counted as Low Engagement when they are double-booked, redundant, or send more than 2 emails per hour during a meeting; Low Engagement Meeting Hours is the average of the time spent in each of these three scenarios.</p>",
    name: "Low Engagement Hours"
  },
  lowEngagementPercent: {
    name: "",
    definition: ""
  },
  mailHours: {
    name: "Time in Email",
    definition: ""
  },
  mailsToParent: {
    name: "",
    definition: ""
  },
  mailTimeSpentInActivity: {
    name: "Time Spent with Mail Activity",
    definition: "Amount of time spent with a mail activity"
  },
  managementRedundantHours: {
    name: "Management Redundant Hours",
    definition: "The number of meeting hours where your function had redundancy. If three or more {{chain 'canonicalDim' 'plural' 'layer' true}} of management from your function are present within the same meeting (e.g. yourself, your manager, and your manager's superior) that meeting is considered to have redundancy."
  },
  managerCentralizationCount: {
    title: "Manager Centralization",
    definition: "<p>Within each group, the percentage of a team's emails and meetings where that team's manager is involved. </p><p>In this case, \"team\" is defined as a manager and that manager's direct reports.</p>"
  },
  managerCentralizationCountNumerator: {
    name: "",
    definition: ""
  },
  managerCentralizationHoursNumerator: {
    name: "",
    definition: ""
  },
  managerHoursTogether: {
    title: "Hours With Manager",
    definition: "The average number of hours per week members of each group spent in meetings with their direct supervisor.",
    name: "Hours With Manager"
  },
  managerLoadAbsorption: {
    title: "Manager Load Absorption",
    definition: "The average ratio of a team member's meeting hours to their manager's meeting hours."
  },
  managerLoadAbsorptionNumerator: {
    name: "",
    definition: ""
  },
  managerTeamBrokeringCount: {
    name: "",
    definition: ""
  },
  managerTeamBrokeringHours: {
    name: "",
    definition: ""
  },
  meetingBreakdownAttendees_atLeast21: {
    name: "",
    definition: ""
  },
  meetingBreakdownAttendees_from11to20: {
    name: "",
    definition: ""
  },
  meetingBreakdownAttendees_from3to6: {
    name: "",
    definition: ""
  },
  meetingBreakdownAttendees_from7to10: {
    name: "",
    definition: ""
  },
  meetingBreakdownAttendees_only1: {
    name: "",
    definition: ""
  },
  meetingBreakdownAttendees_only2: {
    name: "",
    definition: ""
  },
  meetingBreakdownDuration_atLeast8: {
    name: "",
    definition: ""
  },
  meetingBreakdownDuration_from15to29Minutes: {
    name: "",
    definition: ""
  },
  meetingBreakdownDuration_from1to2Hours: {
    name: "",
    definition: ""
  },
  meetingBreakdownDuration_from2to8Hours: {
    name: "",
    definition: ""
  },
  meetingBreakdownDuration_from30to59Minutes: {
    title: "Time Spent in Meetings w/Duration 30-59 min.",
    definition: "Time Spent in Meetings w/Duration 30-59 min.",
    name: "Time Spent in Meetings w/Duration 30-59 min."
  },
  meetingBreakdownDuration_lessThan15Minutes: {
    name: "",
    definition: ""
  },
  meetingBreakdownRecurring_nonRecurring: {
    name: "",
    definition: ""
  },
  meetingBreakdownRecurring_recurring: {
    name: "",
    definition: ""
  },
  meetingHours: {
    name: "Time in Meetings",
    definition: ""
  },
  meetingHoursByIsCustomer_False: {
    name: "Non Customer Meeting Hours",
    definition: "The amount of time in meetings where there are no customers"
  },
  meetingHoursByIsCustomer_True: {
    title: "Customer Meeting Hours",
    definition: "The amount of time an individual spends in meetings with customers",
    name: "Customer Meeting Hours"
  },
  meetingHoursByIsExternal_False: {
    name: "Internal Meeting Hours",
    definition: "The number of hours per week spent in meetings where only people internal to your organization were present"
  },
  meetingHoursByIsExternal_True: {
    title: "External Meeting Hours",
    definition: "The number of hours per week spent in meetings where people external to your organization were present",
//definition: "The average number of hours per week spent by the members of each group in meetings where people external to your organization were present.",
name: "External Meeting Hours"
},
meetingHoursByLevel_Above: {
  name: "",
  definition: ""
},
meetingHoursByLevel_Below: {
  name: "",
  definition: ""
},
meetingHoursByLevel_Same: {
  name: "",
  definition: ""
},
meetingSize: {
  shortTitle: "Meeting Size"
},
meetingTime: {
},
meetingTimeSpentInActivity: {
  name: "Time Spent with Meeting Activity",
  definition: "Amount of time spent with a meeting activity"
},
meetingTimeSpentInCategory: {
  name: "",
  definition: ""
},
meetingsAttended: {
  title: "Meetings Attended",
  definition: "The average number of meetings attended per week by the members of each group.",
  name: "Meetings Attended"
},
networkEfficiency: {
  name: "",
  definition: ""
},
numAttachments: {
  title: "Attachments",
  definition: "The average number of attachments sent per week by the members of each group.",
  name: "Attachments"
},
numMailPeopleInActivity: {
  name: "Number of People with Mail Activity",
  definition: "Number of people with a mail activity"
},
numMailsInActivity: {
  name: "Number of Mails with Activity",
  definition: "Number of mails with an activity"
},
numMailsWithAttribute: {
  name: "Number of Mails with Attributes",
  definition: "Number of mails with attributes"
},
numMeetingPeopleInActivity: {
  name: "Number of People with Meeting Activity",
  definition: "Number of people with a meeting activity"
},
numMeetingsInActivity: {
  name: "Number of Meetings with Activity",
  definition: "Number of meetings with an activity"
},
numMeetingsWithAttribute: {
  name: "Number of Meetings with Attributes",
  definition: "Number of meetings with attributes"
},
numPeopleInActivity: {
  name: "Number of People with Activity",
  definition: "Number of people with an activity"
},
numPeopleWithAttribute: {
  name: "Number of People with Attributes",
  definition: "Number of people with attributes"
},
oli: {
  shortTitle: "OLI",
  longTitle: "Organizational Load Index",
  definition: "Number of hours a person consumes from the rest of the organization based on meetings they organize and emails they send. For instance, if you organize a one hour meeting for 5 people in your organization, the Organizational Load was 5 hours for the invitees + 1 hour of your time = 6 hours total"
},
oli_avgAttendees: {
  name: "",
  definition: ""
},
oli_avgDuration: {
  name: "",
  definition: ""
},
oli_avgRecipients: {
  name: "",
  definition: ""
},
oliMeetingHours: {
  title: "OLI Meeting Hours",
  definition: "The organizational load imposed by each meeting, accounting for overlapping meetings and system excluded meetings."
},
oli_attendees: {
  name: "",
  definition: ""
},
oli_coAttendees: {
  name: "",
  definition: ""
},
oli_duration: {
  name: "",
  definition: ""
},
oli_hours: {
  name: "Organizational Load Index",
  definition: ""
},
oli_hoursReceived: {
  name: "",
  definition: ""
},
oli_mailHours: {
  name: "",
  definition: ""
},
oli_mails: {
  name: "",
  definition: ""
},
oli_meetingHours: {
  name: "",
  definition: ""
},
oli_num: {
  name: "",
  definition: ""
},
oli_recipients: {
  name: "",
  definition: ""
},
oneOnOneCoachingHours: {
  name: "One-on-one Coaching Hours",
  definition: "The number of hours per week spent in one-on-one meetings with your direct reports",
  want: "HIGHER"
},
oneOnOneManagerCount: {
  title: "One-on-one Manager Interactions",
  definition: "The average number of one-on-one meetings per week (one employee, one manager) attended by the members of each group.",
  name: "One-on-one Manager Interactions"
},
oneOnOneManagerHours: {
  title: "One-on-one Manager Hours",
//definition: "The average number of hours per week spent in one-on-one meetings (one employee, one manager) by the members of each group.",
definition: "The number of hours per week spent in one-on-one meetings with your manager",
name: "One-on-one Manager Hours",
want: "HIGHER"
},
organizedMeetingHours: {
  name: "",
  definition: ""
},
organizedMeetingQuality: {
  name: "",
  definition: ""
},
overload: {
  name: "After Hours",
  definition: ""
},
overloadMailsCount: {
  name: "",
  definition: ""
},
overloadMailsPercent: {
  title: "Email Traffic Outside Working Hours",
  definition: "The percentage of email communication occurring outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period."
},
overloadMeetings: {
  title: "Meeting Time Outside Working Hours",
  definition: "The average number of hours per week each user spent in meetings that took place outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period.",
  name: "Meeting Time Outside Working Hours"
},
percentRedundantHours: {
  name: "Management Redundancy",
  definition: "The percentage of meeting hours where your function was redundant. If three or more {{chain 'canonicalDim' 'plural' 'layer' true}} of management from your function are present within the same meeting (e.g. yourself, your manager, and your manager's superior) that meeting is considered to have redundancy."
},
receivedMails: {
  title: "Received Mail",
  definition: "The average number of emails received per week by the members of each group.",
  name: "Received Mail"
},
redundancy: {
  shortTitle: "Redundancy",
  definition: "The percentage of meeting hours marked as redundant: if there are more than two {{chain 'canonicalDim' 'plural' 'layer'}} within the same {{canonicalDim 'function'}} present in a meeting, the third and beyond are considered redundant. For example, if two Senior Product Managers and the Director of Product are in the same meeting with people from another function like marketing or engineering, none of them are redundant. However, if some Junior Product Managers also attended the meeting, they would be considered redundant."
},
redundantHours: {
  title: "Redundant Hours",
  definition: "The average number of hours per week spent by the members of each group in meetings where they are considered redundant.",
  name: "Redundant Hours"
},
sentMails: {
  title: "Sent Mail",
  definition: "The average number of emails sent per week by the members of each group.",
  name: "Sent Mail"
},
sentMailsByIsCustomer_False: {
  name: "Non Customer Email Count",
  definition: "The count of emails sent to non-customers"
},
sentMailsByIsCustomer_True: {
  name: "Customer Emails",
  definition: "The count of emails where there is at least one customer is a recipient"
},
sentMailsByIsExternal_False: {
  name: "",
  definition: ""
},
sentMailsByIsExternal_True: {
  name: "",
  definition: ""
},
skipLevelExposureCount: {
  title: "Skip Level Interactions",
  definition: "<p>The average number of occurrences per week where members of each group interacted with someone who is at least two {{chain 'canonicalDim' 'plural' 'level'}} above them. </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting.</p>",
  name: "Skip Level Interactions"
},
skipLevelExposureHours: {
  name: "",
  definition: ""
},
staffMeetingHours: {
  name: "",
  definition: ""
},
teamMeetingSize: {
  shortTitle: "Meeting Size"
},
timeBlock_1Hr: {
  name: "",
  definition: ""
},
timeBlock_2Hrs: {
  name: "Time Fragmentation",
  definition: ""
},
timeCostInActivity: {
  name: "Time Cost with Activity",
  definition: "Time cost with an activity"
},
timeCostWithAttribute: {
  name: "Time Cost with Attributes",
  definition: "Time cost with attributes"
},
timeSpentInActivity: {
  name: "Time Spent with Activity",
  definition: "Amount of time spent with an activity"
},
timeSpentWithAttribute: {
  name: "Time Spent with Attributes",
  definition: "Amount of time spent with attributes"
},
timeSpentWithLevel_Below: {
  name: "Assistance from Support",
  definition: "Estimated time spent with team members one level below the group member over the time period selected."
},
tooManyMailsHours: {
  name: "",
  definition: ""
},
totalHours: {
  name: "Total Time Collaborating",
  definition: ""
},
utilization: {
  name: "Utilization",
  definition: ""
}
},
oldMetrics: {
  oli: {
    shortTitle: "OLI",
    longTitle: "Organizational Load Index",
    definition: "Number of hours a person consumes from the rest of the organization based on meetings they organize and emails they send. For instance, if you organize a one hour meeting for 5 people in your organization, the Organizational Load was 5 hours for the invitees + 1 hour of your time = 6 hours total"
  },
  oliMeetingHours: {
    title: "OLI Meeting Hours",
    definition: "The organizational load imposed by each meeting, accounting for overlapping meetings and system excluded meetings."
  },
  collabTimeTotal: {
    title: "Total Time Collaborating",
    definition: "Total time spent in meetings or email outside of M-F {{workDayStart}}-{{workDayEnd}}"
  },
  fragmentation: {
    title: "Time Fragmentation"
  },
  meetingSize: {
    shortTitle: "Meeting Size"
  },
  teamMeetingSize: {
    shortTitle: "Meeting Size"
  },
  avgMeetingSize: {
    shortTitle: "Avg Meeting Size",
    definition: "Average number of people attending the same meeting during the time period"
  },
  redundancy: {
    shortTitle: "Redundancy",
    definition: "The percentage of meeting hours marked as redundant: if there are more than two {{chain 'canonicalDim' 'plural' 'layer'}} within the same {{canonicalDim 'function'}} present in a meeting, the third and beyond are considered redundant. For example, if two Senior Product Managers and the Director of Product are in the same meeting with people from another function like marketing or engineering, none of them are redundant. However, if some Junior Product Managers also attended the meeting, they would be considered redundant."
  },
  fteEquivalentSavings: {
    title: "FTE Equivalent Savings",
    label: "FTE equivalents saved during this time period",
    definition: "Number of Full Time Employee equivalents saved within this time period, compared to the baseline. A positive number such as \"20\" would indicate that work equivalent to the potential effort of 20 employees was saved. Conversely, a negative number such as \"-20\" indicates this amount of additional work was required."
  },
  doubleBookedHours: {
    title: "Double Booked Hours",
    definition: "The average number of hours per week where members of each group were scheduled for multiple simultaneous meetings."
  },
  lowEngagementHours: {
    title: "Low Engagement Hours",
    definition: "<p>The average number of hours per week spent by the members of each group in meetings where they were not fully engaged. </p><p>A meeting attendee's time is counted as Low Engagement when they are double-booked, redundant, or send more than 2 emails per hour during a meeting; Low Engagement Meeting Hours is the average of the time spent in each of these three scenarios.</p>"
  },
  meetingHoursByIsExternal_True: {
    title: "External Meeting Hours",
    definition: "The average number of hours per week spent by the members of each group in meetings where people external to your organization were present."
  },
  redundantHours: {
    title: "Redundant Hours",
    definition: "The average number of hours per week spent by the members of each group in meetings where they are considered redundant."
  },
  externalCollaborationHoursPct: {
    title: "External Collaboration Hours",
    definition: "<p>Percent of collaboration time spent involving external people</p>"
  },
  meetingsAttended: {
    title: "Meetings Attended",
    definition: "The average number of meetings attended per week by the members of each group."
  },
  meetingBreakdownDuration_from30to59Minutes: {
    title: "Time Spent in Meetings w/Duration 30-59 min.",
    definition: "Time Spent in Meetings w/Duration 30-59 min."
  },
  overloadMeetings: {
    title: "Meeting Time Outside Working Hours",
    definition: "The average number of hours per week each user spent in meetings that took place outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period."
  },
  receivedMails: {
    title: "Received Mail",
    definition: "The average number of emails received per week by the members of each group."
  },
  sentMails: {
    title: "Sent Mail",
    definition: "The average number of emails sent per week by the members of each group."
  },
  numAttachments: {
    title: "Attachments",
    definition: "The average number of attachments sent per week by the members of each group."
  },
  overloadMailsPercent: {
    title: "Email Traffic Outside Working Hours",
    definition: "The percentage of email communication occurring outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period."
  },
  leadershipExposureCount: {
    title: "Management Interactions",
    definition: "<p>The average number of occurrences per week where members of each group interacted with someone who is at least one {{canonicalDim 'level'}} above them (e.g. manager or leader). </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting.</p>"
  },
  skipLevelExposureCount: {
    title: "Skip Level Interactions",
    definition: "<p>The average number of occurrences per week where members of each group interacted with someone who is at least two {{chain 'canonicalDim' 'plural' 'level'}} above them. </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting.</p>"
  },
  oneOnOneManagerCount: {
    title: "One-on-one Manager Interactions",
    definition: "The average number of one-on-one meetings per week (one employee, one manager) attended by the members of each group."
  },
  oneOnOneManagerHours: {
    title: "One-on-one Manager Hours",
    definition: "The average number of hours per week spent in one-on-one meetings (one employee, one manager) by the members of each group."
  },
  managerCentralizationCount: {
    title: "Manager Centralization",
    definition: "<p>Within each group, the percentage of a team's emails and meetings where that team's manager is involved. </p><p>In this case, \"team\" is defined as a manager and that manager's direct reports.</p>"
  },
  managerHoursTogether: {
    title: "Hours With Manager",
    definition: "The average number of hours per week members of each group spent in meetings with their direct supervisor."
  },
  managerLoadAbsorption: {
    title: "Manager Load Absorption",
    definition: "The average ratio of a team member's meeting hours to their manager's meeting hours."
  },
  insularityByOrganization: {
    title: "Insularity By {{canonicalDim 'organization'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'organization'}}."
  },
  insularityByFunction: {
    title: "Insularity By {{canonicalDim 'function'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'function'}}."
  },
  insularityByRegion: {
    title: "Insularity By {{canonicalDim 'region'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'region'}}."
  },
  insularityByLevel: {
    title: "Insularity By {{canonicalDim 'level'}}",
    definition: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'level'}}."
  }
},
/* Use Cases categorization for metricExplorer metrics - used in Metric Overview */
useCases: {
  sales: ["meetingHoursByIsExternal_True", "totalHours", "externalNetworkBreadth", "externalNetworkSize", "intraFunctionNetworkDepth", "internalNetworkBreadth", "internalNetworkSize", "intraLevelNetworkDepth", "networkEfficiency", "internalNetworkVelocity", "intraDepartmentalNetworkDepth", "intraRegionNetworkDepth"],
  employee: ["utilization", "overload", "numAttachments", "doubleBookedHours", "timeBlock_2Hrs", "intraFunctionNetworkDepth", "managerHoursTogether", "insularityByFunction", "insularityByLevel", "insularityByOrganization", "insularityByRegion", "internalNetworkBreadth", "internalNetworkSize", "intraLevelNetworkDepth", "lowEngagementHours", "mailHours", "leadershipExposureCount", "managerCentralizationCount", "managerLoadAbsorption", "meetingHours", "meetingsAttended", "networkEfficiency", "internalNetworkVelocity", "oneOnOneManagerCount", "oneOnOneManagerHours", "managerCentralizationCount", "intraDepartmentalNetworkDepth", "oli_hours", "receivedMails", "redundantHours", "intraRegionNetworkDepth", "sentMails", "skipLevelExposureCount", "meetingBreakdownDuration_from30to59Minutes"],
  organization: ["utilization", "overload", "numAttachments", "doubleBookedHours", "timeBlock_2Hrs", "managerHoursTogether", "insularityByFunction", "insularityByLevel", "insularityByOrganization", "insularityByRegion", "lowEngagementHours", "mailHours", "leadershipExposureCount", "managerCentralizationCount", "managerLoadAbsorption", "meetingHours", "meetingsAttended", "oneOnOneManagerCount", "oneOnOneManagerHours", "managerCentralizationCount", "oli_hours", "receivedMails", "redundantHours", "sentMails", "skipLevelExposureCount", "meetingBreakdownDuration_from30to59Minutes"]
},
benchmark: {
overall: "vs. Everyone",  // Should we use vs company?
level: "vs. {{canonicalDim 'level' false}}",
organization: "vs. {{canonicalDim 'organization' false}}",
region: "vs. {{canonicalDim 'region' false}}",
dimension: "vs. {{chain 'canonicalDim' dim false}}",

// Averages
overallAverage: "vs. Company Avg.",
levelAverage: "vs. {{canonicalDim 'level' false}} Avg.",
organizationAverage: "vs. {{canonicalDim 'organization' false}} Avg.",
regionAverage: "vs. {{canonicalDim 'region' false}} Avg.",
dimensionAverage: "vs. {{chain 'canonicalDim' dim false}} Avg."
},
chart: {
  noData: "<p class=\"noData\">Not enough data to display this chart. Adjust the filters or time period to expand your selection.</p>",
  showByDimension: "<b>Show data by: </b>",
  compareByDimension: "<b>Compare to colleagues with the same: </b>",
  period: {
    title: "Period",
    titleAvg: "Period Avg.",
    definition: "The value of each metric during the selected month.",
    definitionAvg: "The average value of each metric during the selected months."
  },
  periodTotal: {
    title: "Period Total",
    definition: "The total value of each metric during the selected months."
  },
  ltd: {
    title: "LTD (Launch-to-Date)",
    definition: "The monthly average for each metric from the specified launch date ({{prettyDate launchDate}}) through the end date of the selected time period."
  },
  ltdVsBaseline: {
    title: "LTD vs Baseline",
    definition: "The percent difference between the LTD value and the baseline period value."
  },
  baseline: {
    title: "Baseline",
    definition: "The average monthly value for the period of time from {{prettyDate startBaseline}} through {{prettyDate endBaseline}}. This is used as a baseline for comparison."
  },
  vsPeers: {
    title: "vs Colleagues",
    definition: "Comparison of your metric value to colleagues at your {{canonicalDim 'level' false}} expressed as percentage deciles. Eg. Highest 10% means that your value is among the highest compared to people at your {{canonicalDim 'level' true}}."
  },
  oli: {
    title: "{{timePeriod}} Organizational Load Index",
    definition: "Estimated load your meetings and email imposed upon the organization each {{timePeriod}}, on average",
    meetingsOrganizedByMe: "Average meetings organized by you each week",
    internalAttendees: "Average internal attendees at your meetings",
    mailsSent: "Average emails you sent internally each week",
    recipientHours: "Estimated hours recipients spent reading your email each week"
  },
  metricVsGoal: {
    title: "{{metric}} vs Goal",
    definition: "Compares {{metric}} to the specified goal for the time period selected expressed as % difference to goal. For example, a value of \"10%\" indicates this item required 10% more time than expected. A negative value such as \"-20%\" indicates this item required 20% less time than expected."
  },
  weeklyTrend: {
    title: "Weekly Trend",
    footnote: "Four week trends are from {{prettyDate trendStart}} to {{prettyDate trendEnd}}",
    shortDefinition: "Four week trend",
    definition: "One week's worth of data is represented by each plot point in this trend line. The dates specified in \"Time Period\" are expanded to include entire weeks."
  },
  collabTimeTotal: {
    definition: "Estimated average {{timePeriod}} time spent in meetings & email",
    pie: {
      footnote: "* Percentages are based on proportional time allocated."
    },
    bar: {
      title: "Top {{number}} by {{dimension}}"
    }
  },
  afterHours: {
    definition: "Average {{timePeriod}} time spent in meetings or email outside of M-F {{workDayStart}}-{{workDayEnd}}"
  },
  mailTime: {
//definition: "Estimated average {{timePeriod}} time spent sending / receiving email",
//TODO: change helpers to have timePeriod="week" in old and new dashboard if keeping the below change
definition: "Estimated time spent sending and receiving email per week",
sent: {
  title: "{{timePeriod}} Sent Mail Averages",
  numberEmails: "Emails Sent",
  internalRecipients: "Internal recipients",
  externalRecipients: "External recipients",
  hoursSpent: "Time spent writing emails"
},
received: {
  title: "{{timePeriod}} Received Mail Averages",
  receivedFromInternal: "From known internal senders",
  receivedFromOther: "From other senders",
  internalSenders: "Internal senders",
  hoursSpent: "Time spent reading emails"
}
},
meetingTime: {
  definition: "Average weekly time spent in meetings",
  stats: {
    title: "{{capitalize timePeriod}} Meeting Averages",
    meetingsUnit: "Meetings",
    hoursDoubleBooked: "Double-booked",
    numberOneOnOne: "No. of 1:1 meetings",
    attendees: "Meeting attendees",
    duration: "Avg. duration (hours)"
  }
},
fragmentation: {
  timeBlocks: {
    title: "<strong>{{numHours}} hour time blocks</strong>",
    definition: "<span class=\"small\">Average {{timePeriod}} number of {{numHours}}-hour blocks of time uninterrupted by meetings</span>"
  }
},
meetingTables: {
  title: "Meetings",
  titles: {
    business: "Attended",
    organizedByYou: "Organized",
    excluded: "Excluded",
    rated: "Rated"
  },
  empty: {
    business: "No meetings were attended by you during this time period. Click \"Excluded Meetings\" to check for any that may have been excluded.",
    organizedByYou: "No meetings were organized by you during this time period. Click \"Excluded Meetings\" to check for any that may have been excluded.",
    excluded: "No meetings from within this time period have been marked as excluded. You may exclude meetings from Meetings Attended or Meetings Organized by clicking the \"X\" icon.",
    rated: "You have not yet assigned a rating to any meetings within this time period. Meetings that you have rated will appear here. Use the \"Rated by Me\" column to assign ratings."
  },
  meetingSize: "All attendees (internal and external) are included in calculation",
  excludeMeetingPopup: "<p>Thank you for classifying this meeting! We moved it to the \"Excluded Meetings\" list.</p> <p>Your feedback helps update the algorithms that predict whether meetings should be included in the dataset.</p> <p>Look for continuously improving accuracy in the future, and feel free to <a href=\"mailto:Support@VoloMetrix.com\" data-uv-trigger=\"contact\" target=\"_blank\">send us your feedback directly</a>.</p>"
},
meetingCategories: {
  title: "Meeting Categories",
  empty: "<p class=\"explanation\" style=\"max-width: 800px\">No meetings were tagged. Label meetings in your calendar to see how much time is spent in each Category.</p> <p class=\"explanation\" style=\"max-width: 800px\"><b>Outlook</b> supports colored and named categories. You can create your own categories as well as re-name the existing colored ones. To assign a category or color to a meeting, open a meeting, and select the appropriate category or color.</p> <p class=\"explanation\" style=\"max-width: 800px\"><b>Google Calendar</b> does not support categories. However, any hashtags in the meeting's subject will be interpreted as categories for that meeting. For example, a meeting with subject \"Sync on Top Secret Project #ClientMeeting\" will assign that meeting to category ClientMeeting.</p>"
},
benchmarkGoals: {
  emptyGoals: "Select one or more benchmarks to track as personal goals.",
  setGoal: "Set your personal target",
  showAllGoals: "Show all",
  hideGoals: "Show less",
  showAllBenchmarks: "Show all",
  hideBenchmarks: "Show less",
  maxGoalsReached: "The maximum number of goals is {{maxPersonalGoals}}.<br><br>Please remove an existing goal before setting a new one.",
  setGoalPopup: {
    compareTo: "Measure me compared to others in my",
    information: "Targets and tracking are for your personal information only. No one else in your organization will see your targets or your personal metrics.",
    applyChangesButton: "Apply Changes",
    clearChangesButton: "Clear Changes",
    stopTargetingButton: "Stop Targeting"
  }
},
teamDistribution: {
  title: "Team Distribution",
  description: "This table displays the Organizational Load Imposed and Month-over-Month (MoM) OLI improvement of team members.",
  empty: "Insufficient data to show team breakdown"
}
},
report: {
  personalTab: "Personal",
  teamTab: "Team",
  personalGoals: {
    activity: {
      header: "How you spent your time"
    },
    meetings: {
      header: "Meeting effectiveness",
      subheader: "Organize and attend more effective meetings.",
      categories: {
        duration: "Duration is less than 1 hour",
        attendees: "Fewer than 6 attendees",
        engagement: "100% engagement",
        declines: "Non-double booked time",
        levels: "Fewer than two levels present"
      },
      tooltip: {
        duration: "Everyone&rsquo;s time counts, making larger meetings more costly. Additionally, more people make it harder to focus, and can limit the meeting&rsquo;s productivity.<br><a href='/Home/PersonalGoalsFAQ'>Learn more</a>.",
        attendees: "Scheduling longer meetings increases the meeting&rsquo;s cost and the possibility of conversations running off topic. Be frugal with your time and others&rsquo;.<br><a href='/Home/PersonalGoalsFAQ'>Learn more</a>.",
        engagement: "Your percentage of time in meetings where you are highly engaged (not multitasking, not too many levels present, and not double booked).<br><a href='/Home/PersonalGoalsFAQ'>Learn more</a>.",
        declines: "There are other ways to keep your peers in the loop than inviting everyone to every meeting. Only invite people who are absolutely necessary to the meeting to avoid high levels of declines and double bookings.<br><a href='/Home/PersonalGoalsFAQ'>Learn more</a>.",
        levels: "Before you attend or organize a meeting, make sure that the attendees won&rsquo;t create redundancies. It&rsquo;s unnecessary to have more than two levels of employees present at most meetings.<br><a href='/Home/PersonalGoalsFAQ'>Learn more</a>."
      },
      modal: {
        header: "Percent time spent in high quality meetings (<a href='/Home/PersonalGoalsFAQ#personal-goals-faq-meetings'>Learn more</a>). Your goal is for {{highQualityMeetingGoal}}% of your meetings to be considered high quality.",
        subheader: "Set a new % of meeting time in high quality meetings:"
      }
    },
    work: {
      header: "Think/work time",
      subheader: "Ensure you have ample time scheduled to work and think. Your goal is <b>{{twoHourBlockGoal}} days</b> with one or more two-hour blocks with no meetings.",
      goalTooltip: "The default goal is set based on historical average from other people in your level.",
      numDays: "days with a two-hour block"
    },
    email: {
      header: "Email time",
      subheader: "Be aware of the amount of time you spend sending and receiving emails compared to your colleagues.",
      emailHours: "hours in email"
    },
    balance: {
      header: "After hours work",
      subheader: "Here's how many days you had meetings or sent and received emails after-hours. Your goal is <b>{{balanceGoal}} days</b> with no after-hours work.",
      goalTooltip: "The default goal is set based on historical average from other people in your level.",
      noAfterHoursDays: "days without after-hours work"
    },
    impact: {
      header: "Time demand on colleagues",
      subheader: "When you email your colleagues or invite them to meetings, you take time out of their schedules. This shows how much time you imposed on your coworkers compared to their average.",
      oliImposed: "hrs imposed"
    }
  },
  behavioralProfile: {
    content: {
      title: "Behavioral Group Profile",
      description: "What do your teams look like? What are common behaviors do successful groups exhibit and how do they compare to other groups? <br><br> <ul class='disc-inside'><li>Create different groups within your organization and easily visualize patterns between 3 groups. </li><li>Identify the user groups with the filters provided to define the populations for comparison. </li><li>Learn what key behaviors define different groups</li></ul>"
    }
  },
  timeInvestment: {
// metrics in order of desired appearance in report
metrics: ["meetingHours", "meetingHoursByIsExternal_False", "meetingHoursByIsExternal_True", "mailHours", "overload", "oneOnOneCoachingHours", "oneOnOneManagerHours"],

// "bottom metrics" are the last `numMetricsBelowGrayLine` metrics from the above list
// we will add a gray border line above the first of these "bottom metrics" that appear in the report
numMetricsBelowGrayLine: 2,

benchmarkOverMax: "Benchmark is beyond the chart",
valueOverMax: "Value is beyond the chart",

legend: {
  myValue: "Your time",
benchmarkValue: "Company average", //"Your peers' average time",
goalNotSet: "Your goal is not set",
goalSet: "Your goal is set",
goalMet: "Your goal is achieved"
}
},
relationshipExplorer: {
  titles: {
    dimDefinition: "Dimension Definition"
  },
  dimAGroups: "Dimension A Groups",
  dimBGroups: "Dimension B Groups",
  runReport: "Run"
},
rawUsage: {
  weekly: "Last Week",
  monthly: "Last Month",
  allTime: "All Time",
  runReport: "Run Report"
},
personalLoad: {
  title: "Your Personal Report",
  personalTab: "Personal Report",
  teamTab: "Team Report",
  yourDimensionIntro: "Compared with colleagues in {{dimName}}: {{dimValue}}",
  comparedToYourLevel: "Compared with colleagues in your {{canonicalDim 'level' true }}",
  noComparisonAvailable: "No comparison to colleagues in your level available.",
  titles: {
    dashboard: "Dashboard",
    loadImposed: "Organizational Load Imposed",
    loadReceived: "Organizational Load Received",
    ranking: "Ranking",
    collabTopPeople: "Key People",
    collabTopGroups: "Key Groups",
    teamDistribution: "Team Distribution",
meetingSize: "Meeting Size", // TODO: REMOVE
personalDetails: "Personal Details",
yourTeam: "Team Details"
},
headlines: {
  thisMonth: "This month:",
  hoursSaved: {
    positiveTitle: "Organizational Load Imposed",
    negativeTitle: "Organizational Load Imposed",
    positiveDescription: "Emails you sent and meetings you organized consumed <strong>{{absoluteValue value}}</strong>% less hours from your colleagues than last month.",
    negativeDescription: "Emails you sent and meetings you organized consumed <strong>{{absoluteValue value}}</strong>% more hours from your colleagues than last month. Are there people you could leave off cc lists or meeting invites?",
    neutralDescription: "No change was observed in the hours you imposed on colleagues than last month.",
    nanDescription: "No comparison to the month before available"
  },
  meetingSizeReduced: {
    positiveTitle: "Meeting Size",
    negativeTitle: "Meeting Size",
    positiveDescription: "The meetings you attended were, on average, <strong>{{absoluteValue value}}</strong>% smaller than last month. Smaller meetings are generally more effective – continue to look for opportunities to decline invites to ineffective meetings.",
    negativeDescription: "The meetings you attended were, on average, <strong>{{absoluteValue value}}</strong>% larger than last month. Bigger meetings are generally less effective – look for opportunities to decline invites to ineffective meetings.",
    neutralDescription: "The meetings you attended were, on average, the same as last month. Bigger meetings are generally less effective – look for opportunities to decline invites to ineffective meetings.",
    nanDescription: "No comparison to the month before available"
  },
  efficiency: {
    positiveTitle: "Management Redundant Hours",
    negativeTitle: "Management Redundant Hours",
    positiveDescription: "Excessive layers of management is a common cause of inefficient meetings. The number of meeting hours with signs of excessive management comprised <strong>{{absoluteValue value}}</strong>% less of your meeting hours than last month.",
    negativeDescription: "Excessive layers of management is a common cause of inefficient meetings. The number of meeting hours with signs of excessive management comprised <strong>{{absoluteValue value}}</strong>% more of your meeting hours than last month.",
    neutralDescription: "Excessive layers of management is a common cause of inefficient meetings. The number of meeting hours with signs of excessive management comprised the same amount as last month.",
    nanDescription: "No comparison to the month before available"
  }
},
teamHeadlines: {
  hoursSaved: {
    positiveTitle: "Organizational Load Imposed",
    negativeTitle: "Organizational Load Imposed",
    positiveDescription: "Emails your team sent and meetings they organized consumed <strong>{{absoluteValue value}}</strong>% less hours from the organization than last month.",
    negativeDescription: "Emails your team sent and meetings they organized consumed <strong>{{absoluteValue value}}</strong>% more hours from the organization than last month.",
    neutralDescription: "Your team consumed the same number of hours from the organization through emails they sent and meetings they organized as last month."
  },
  meetingSizeReduced: {
    positiveTitle: "Meeting Size",
    negativeTitle: "Meeting Size",
    positiveDescription: "By attending meetings with <strong>{{absoluteValue value}}</strong>% less people than last month your team members contributed to an environment of more effective meetings.",
    negativeDescription: "Meetings your team members attended were, on average, <strong>{{absoluteValue value}}</strong>% larger than last month; a signal there may be large, ineffective meetings your team can opt-out of.",
    neutralDescription: "Meetings your team members attended were, on average, the same size as last month; are there large, ineffective meetings they can opt-out of?",
    nanDescription: "No comparison to the month before available"
  },
  efficiency: {
    positiveTitle: "Management Redundant Hours",
    negativeTitle: "Management Redundant Hours",
    positiveDescription: "Excessive layers of management is a common cause of inefficient meetings. Your team showed signs of increasing efficiency with excess management present in <strong>{{absoluteValue value}}</strong>% fewer meeting hours than last month.",
    negativeDescription: "Excessive layers of management is a common cause of inefficient meetings. Your team showed signs of excess management in <strong>{{absoluteValue value}}</strong>% more meeting hours than last month.",
    neutralDescription: "Excessive layers of management is a common cause of inefficient meetings. Your team showed signs of excess management in the same amount of meeting hours as last month."
  }
},
columns: {
  lastMonth: "Last month",
  baseline: "Baseline",
  changeFromBaseline: "Change from baseline",
  trend: "6-month Trend"
},
dashboard: {
// NEW BACKEND UPDATES
// TODO: REMOVE/FIX
oli_hours: "Organizational Load Imposed",
avgAttendedMeetingSizeKpi: "Meeting Size",
percentRedundantHours: "Management Redundancy",

orgLoadMe: "Organizational Load Imposed",
orgLoad: "Organizational Load Imposed (per person)",
orgLoadReceived: "Organizational Load Received (per person)",
orgLoadTotal: "Team Total Organizational Load Imposed",
orgLoadTotalReceived: "Team Total Organizational Load Received",
meetingSize: "Meeting size",
managementRedundancy: "Management Redundancy",
columns: {
  title: "&nbsp;",
  period: "Period",
  periodAvg: "Period Avg.",
  periodTotal: "Period Total",
  ltd: "LTD",
  ltdVsBaseline: "LTD vs Baseline",
  baseline: "Baseline",
  sixMonthTrend: "6-month Trend",
//vsPeers: "vs {{#if team}}Other Teams{{else}}Colleagues{{/if}}"
vsPeers: "{{#if team}}Your team relative to other teams{{else}}You relative to your colleagues{{/if}}",

thisMonth: "This month",
vsLastMonth: "% Change since last month",
vsBaseline: "% Change since baseline"
},
vsPeersMiddle: "Highest 50%"//"In the middle"
},
noTeamMembers: "No members on your team"
},
personalDashboard: {
// Note: some of these are used for personalLoad
title: "Your Personal Report",
titles: {
  benchmarksAndGoals: "My Benchmarks and Goal-Setting",
  goals: "Goals",
  benchmarks: "Benchmarks",

// For re-ordering sections
collaborationBehavior: "Collaboration Behavior",
collabGroups: "Top Collaboration People & Groups",
collabTopPeople: "Top People Collaborated With",
collabTimeOfDay: "Collaboration by Time of Day",
collabTopGroups: "Top Groups Collaborated With",

collabTimeAndTopics: "Total Collab Time & Top Topics",
topTopics: "Top Topics",
collabTime: "Collaboration Time Breakdown",

afterHoursAndHoursPerDay: "After Hours & Hours Per Day",
afterHours: "After Hours",
averageMeetingAndMail: "Average Meeting & Mail Hours / Day",

mailDetails: "Mail Details",
mailStatistics: "Mail Statistics",
meetingDetails: "Meeting Details",
meetingStatistics: "Meeting Statistics"
}
},
metricExplorer: {
  comparisonByGroupTab: "Comparison",
  trendTab: "Trend",
  comparisonByPersonTab: "Person"
},
collabToolsEfficacyDashboard: {
  emailsSent: {
    title: "Emails Sent (per user per week)",
    definition: "The average number of emails sent every week by each user, within this time period. Excludes mail where the sender is the only recipient."
  },
  emailTrafficAfterHours: {
    title: "Email traffic outside working hours",
    definition: "The percentage of email communication occurring outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period."
  },
  emailsToEMC: {
    title: "Emails to EMC (total per month)",
    definition: "The average number of emails to EMC each month within this time period."
  },
  numberAttachments: {
    title: "Number of attachments (per user per week)",
    definition: "The average number of attachments sent every week by each user within this time period. Excludes mail where the sender is the only recipient."
  },
  meetingTime: {
    title: "Time spent in meetings (per user per week)",
    definition: "The average number of hours per week each user spent in meetings within this time period."
  },
  lowEngagementHours: {
    title: "Meeting hours that are low engagement",
    definition: "The percentage of meeting time considered to be \"Low Engagement.\" Low Engagement occurs in any of the following scenarios: An attendee sends two or more emails per hour during a meeting, an attendee is considered redundant, or an attendee is double-booked."
  },
  doubleBookedTime: {
    title: "Double-booked time (per user per week)",
    definition: "The average number of hours per week where each user was double-booked within this time period."
  },
  meetingTimeAfterHours: {
    title: "Meeting time outside business hours (per user per week)",
    definition: "The average number of hours per week each user spent in meetings that took place outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period."
  },
  networkEfficiency: {
    title: "Network Efficiency (hours per connection)",
    definition: "The ratio of hours to connections during this time period. For example, if 5 hours were spent with 20 connections in January, Network Efficiency for January would be 0.25. (5 / 20 = 0.25) If 50 hours are spent with 50 connections in February, Network Efficiency for February would be 1. (50 / 50 = 1) Combined, the total for these two months is 55 hours across 70 connections: a Network Efficiency of 0.786. (55 / 70 = 0.786)"
  },
  averageNetworkSize: {
    title: "Average Internal Network Size (per user)",
    definition: "The average number of people in each user's network, during this time period. A person is considered part of a user's network after two meaningful interactions with that person have occurred. A \"meaningful interaction\" is a meeting or email with 5 or fewer attendees or recipients."
  },
  period: {
    title: "Period",
    definition: "The value of each metric during the selected time period. The time period is configurable in the sidebar. If a time period of longer than one month is specified, monthly averages are shown."
  },
  ltd: {
    title: "LTD (Launch-to-Date)",
    definition: "The monthly average for each metric from the specified launch date ({{prettyDate launchDate}}) through the end date of the selected time period."
  },
  ltdVsBaseline: {
    title: "LTD vs Baseline",
    definition: "The percent difference between the LTD value and the baseline period value."
  },
  baseline: {
    title: "Baseline",
    definition: "The average monthly value for the period of time from {{prettyDate startBaseline}} through {{prettyDate endBaseline}}. This is used as a baseline for comparison."
  },
  hrGroupVariability: {
    title: "{{canonicalDim 'function' false}} Variability",
    definition: "The LTD vs Baseline value for each {{canonicalDim 'function' false}}."
  },
  regionVariability: {
    title: "{{canonicalDim 'region' false}} Variability",
    definition: "The LTD vs Baseline value for each {{canonicalDim 'region' false}}."
  },
  trend: {
    title: "Trend",
    definition: "Metric values for recent months."
  }
}
},
tooltips: {
  filters: {
    savedFilters: "Easily save and see your previous filter settings. You can always edit or remove later."
  },
  metricExplorer: {
    overload: "The average hours members of each group spent per week on meetings and email outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday.",
    overloadMailsPercent: "The percentage of email communication occurring outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period.",
    overloadMeetings: "The average number of hours per week each user spent in meetings that took place outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday during this time period.",
    externalNetworkBreadth: "<p>External Network Breadth shows you how many connections (at least 2 meaningful interactions) there have been with <b>domains</b> outside of your company over the period of time selected. This metric does not show how many external <b>people</b>-connections there are; see the metric \"External Network Size\" for this.</p><p>Example: If your time period is three months, you would need to have 6 meaningful interactions with <b>any one person</b> over that time period to be counted as a \"connection\" with that domain. (3 months x 2 meaningful interactions per month = 6.) </p><p>Reminder: A \"meaningful interaction\" is a meeting or email thread with 5 or fewer attendees or recipients.</p><p>Note: External Network Breadth can only be shown at a per month level.</p>",
    internalNetworkBreadth: "The average number of internal {{chain 'canonicalDim' 'plural' 'organization'}} that the members of each group are connected to.",
    externalNetworkSize: "<p>External Network Size shows you how many connections (at least 2 meaningful interactions) there are with people outside of your company over the period of time selected. </p><p>Example: If your time period is three months, you would need to have 6 meaningful interactions over that time period to be counted as a \"connection.\" (3 months x 2 meaningful interactions per month = 6.)</p><p>Reminder: A \"meaningful interaction\" is a meeting or email thread with 5 or fewer attendees / recipients.</p><p>Note: External Network Size can only be shown at a per month level.</p>",
    timeBlock_2Hrs: "<p>Time fragmentation is the number of 2-hour blocks of time between meetings, assuming that the workday starts at {{workDayStart}} and ends at {{workDayEnd}}.</p><p>For instance, if you have a one hour meeting at 10am and a two hour meeting at 2pm, then you would have two 2-hour blocks of time.</p>",
    internalNetworkSize: "<p>Internal Network Size shows you how many connections (at least 2 meaningful interactions) there are with people inside your dataset over the period of time selected.</p><p>Example: If your time period is three months, you would need to have 6 meaningful interactions over that time period to be counted as a \"connection.\" (3 months x 2 meaningful interactions per month = 6.)</p><p>Reminder: A \"meaningful interaction\" is a meeting or email thread with 5 or fewer attendees / recipients.</p><p>Note: Internal Network Size can only be shown at a per month level.</p>",
    meetingHours: "The average number of hours per week spent in meetings by the members of each group.",
    mailHours: "The average number of hours per week spent sending and received mails by the members of each group.",
    meetingsAttended: "The average number of meetings attended per week by the members of each group.",
    oli_hours: "<p>Organizational Load is the number of hours a person consumes from the rest of the organization based on meetings they organize and emails they send.</p><p>For instance, if you organize a one hour meeting for a total of 5 people (including yourself) in your organization, the Organizational Load was 5 hours.</p>",
    receivedMails: "The average number of emails received per week by the members of each group.",
    sentMails: "The average number of emails sent per week by the members of each group.",
    totalHours: "The average hours per week spent on meetings and email by the members of each group.",
    utilization: "<p>Utilization is calculated by looking at the spread of hours between a person's <b>first</b> sent email or meeting attended in a day and that person's <b>last</b> sent email or meeting attended that day.</p><p>For instance, if you sent your first email at 7am, your first meeting started at 9am, your last meeting ended at 4:30pm, and you sent your last email at 6pm, your utilization for that day would be 11 hours.</p>",
    doubleBookedHours: "The average number of hours per week where members of each group were scheduled for multiple simultaneous meetings.",
    lowEngagementHours: "<p>The average number of hours per week spent by the members of each group in meetings where they were not fully engaged. </p><p>A meeting attendee's time is counted as Low Engagement when they are double-booked, redundant, or send more than 2 emails per hour during a meeting; Low Engagement Meeting Hours is the average of the time spent in each of these three scenarios.</p>",
    meetingHoursByIsExternal_True: "The average number of hours per week spent by the members of each group in meetings where people external to your organization were present.",
    redundantHours: "The average number of hours per week spent by the members of each group in meetings where they are considered redundant.",
    meetingBreakdownDuration_from30to59Minutes: "The average number of hours per week spent by the members of each group in meetings with a duration of between 30 and 59 minutes.",
    numAttachments: "The average number of attachments sent per week by the members of each group.",
    leadershipExposureCount: "<p>The average number of occurrences per week where members of each group interacted with someone who is at least one {{canonicalDim 'level'}} above them (e.g. manager or leader). </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting.</p>",
    skipLevelExposureCount: "<p>The average number of occurrences per week where members of each group interacted with someone who is at least two {{chain 'canonicalDim' 'plural' 'level'}} above them. </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting.</p>",
    skipLevelExposureHours: "<p>The average number of hours per week where members of each group interacted with someone who is at least two {{chain 'canonicalDim' 'plural' 'level'}} above them. </p><p>In this case, an \"interaction\" is considered to have occurred when the people in question are part of the same meeting, or are included in the same email.</p>", // Currently unused
    oneOnOneManagerCount: "The average number of one-on-one meetings per week (one employee, one manager) attended by the members of each group.",
    oneOnOneManagerHours: "The average number of hours per week spent in one-on-one meetings (one employee, one manager) by the members of each group.",
    managerCentralizationCount: "<p>Within each group, the percentage of a team's emails and meetings where that team's manager is involved. </p><p>In this case, \"team\" is defined as a manager and that manager's direct reports.</p>",
    managerHoursTogether: "The average number of hours per week members of each group spent in meetings with their direct supervisor.",
    managerLoadAbsorption: "The average ratio of a team member's meeting hours to their manager's meeting hours.",
    centrality: "<p>Centrality measures how central a person is to the flow of information within the company. </p><p>Generally, a high centrality means that a person has more connections, and the people that they are connected to also have many connections. For very large companies this number will be rather low for everyone.</p>",
    insularityByOrganization: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'organization'}}.",
    insularityByFunction: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'function'}}.",
    insularityByRegion: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'region'}}.",
    insularityByLevel: "The percentage shown represents the amount of time each group spent on meetings and email that involved only others from within their own {{canonicalDim 'level'}}.",
    intraFunctionNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'function'}}.",
    intraDepartmentalNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'organization'}}.",
    intraLevelNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'level'}}.",
    intraRegionNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'region'}}.",
    internalNetworkVelocity: "The average number of new connections per month added by the members of each group.",
    networkEfficiency: "<p>The average time spent each month collaborating with each internal network connection over the specified time period. </p><p>For example, a value of \"1.6\" indicates that an average of 1.6 hours per month were spent on each person within the internal network over the specified time period.</p>",
    externalCollaborationHoursPct: "<p>Percent of collaboration time spent involving external people</p>"
},
// Names and Tooltips from Nikolay's spreadsheet - https://docs.google.com/a/volometrix.com/spreadsheets/d/13Zkov92a3_i_rklUzjtEfElvxlJR-H6Yebiqme8_R-Q/edit#gid=1551046150
metricOverview: {
  doubleBookedHours: {
    title: "Double Booked Hours",
    text: "The average time you were scheduled in simultaneous meetings each week."
  },
  externalNetworkBreadth: {
    title: "External Network Breadth",
    text: "The number of external domains in which you have at least one connection. A connection is made with at least two meetings or emails involving less than 5 people."
  },
  externalNetworkSize: {
    title: "External Network Size",
    text: "The number of connections you have outside your company. A connection is made with an email or meeting involving less than five people. "
  },
  insularityByFunction: {
    title: "Insularity by Function",
    text: "The percent of time you spent emailing and meeting within your job function, , relative to your total time emailing and meeting."
  },
  insularityByLevel: {
    title: "Insularity by Level",
    text: "The percent of time you spent emailing and meeting within our organization level, , relative to your total time emailing and meeting"
  },
  insularityByOrganization: {
    title: "Insularity by Organization",
    text: "The percent of time you spent emailing and meeting within your organization, relative to your total time emailing and meeting"
  },
  insularityByRegion: {
    title: "Insularity by Region",
    text: "The percent of time you spent emailing and meeting within your geographic region, , relative to your total time emailing and meeting"
  },
  internalNetworkBreadth: {
    title: "Internal Network Breadth",
    text: "The number of internal departments in which you have at least one connection."
  },
  internalNetworkSize: {
    title: "Internal Network Size",
    text: "The number of connections you have within your company. A connection is made with at least two emails or meetings involving less than five people. "
  },
  internalNetworkVelocity: {
    title: "Network Velocity",
    text: "The average number of new connections per month."
  },
  intraDepartmentalNetworkDepth: {
    title: "Organizational Depth",
    text: "The average number of connections within your organization."
  },
  intraFunctionNetworkDepth: {
    title: "Function Depth",
    text: "The average number of connections within your job function."
  },
  intraLevelNetworkDepth: {
    title: "Level Depth",
    text: "The average number of connections within your job level."
  },
  intraRegionNetworkDepth: {
    title: "Region Depth",
    text: "The average number of connections within your geographic region."
  },
  leadershipExposureCount: {
    title: "Management Interactions",
    text: "The average number of meetings you had with a person at least one level above you each week."
  },
  lowEngagementHours: {
    title: "Low Engagement Hours",
    text: "The average time you spent in double booked or redundant meetings or sending more than two emails per hour in meetings each week. "
  },
  mailHours: {
    title: "Mail Hours",
    text: "The average time you spent with email each week."
  },
  managerCentralizationCount: {
    title: "Manager Centralization",
    text: "The percent of a team's meetings and emails in which the manager of the team was involved"
  },
  managerHoursTogether: {
    title: "Hours with Manager",
    text: "The average time you spent meeting with your direct manager"
  },
  managerLoadAbsorption: {
    title: "Manager Load Absorption",
    text: "The average ratio of time you spent in meetings compared to your managers."
  },
  meetingBreakdownDuration_from30to59Minutes: {
    title: "Time Spent in Meetings 30-59 min Duration",
    text: "The average number of 30 to 59 minute meetings you attend each week."
  },
  meetingHours: {
    title: "Meeting Hours",
    text: "The average time you spent in meetings each week."
  },
  meetingHoursByIsExternal_True: {
    title: "External Meeting Hours",
    text: "The average time you spent with people outside of your organization."
  },
  meetingsAttended: {
    title: "Meetings Attended",
    text: "The average number of meetings you attend each week."
  },
  networkEfficiency: {
    title: "Network Efficiency",
    text: "The average time spent collaborating with each internal connection per month"
  },
  numAttachments: {
    title: "Attachments",
    text: "The average number of email attachments you send each week."
  },
  oli_hours: {
    title: "Organizational Load",
    text: "The time you cost the organization with email and meetings."
  },
  oneOnOneManagerCount: {
    title: "One-on-one Manager Interactions",
    text: "The average number of one-on-one meetings you attended each week."
  },
  oneOnOneManagerHours: {
    title: "One-on-one Manager Hours",
    text: "The average time you spent in one-on-one meetings each week."
  },
  overload: {
    title: "Collaboration Hours Outside {{workDayStart}}-{{workDayEnd}}",
    text: "The average time you spent with email and meetings outside regular business hours each week."
  },
  receivedMails: {
    title: "Received Mail",
    text: "The average number of emails you receive each week."
  },
  redundantHours: {
    title: "Redundant Meeting Hours",
    text: "The average time you spent in redundant meetings. "
  },
  sentMails: {
    title: "Sent Mail",
    text: "The average number of emails you send each week."
  },
  skipLevelExposureCount: {
    title: "Skip Level Interactions",
    text: "The average number of meetings you had with a person at least two levels above you each week."
  },
  timeBlock_2Hrs: {
    title: "Fragmentation",
    text: "The number of 2-hour blocks of time you had between meetings each day 8 am to 5 pm."
  },
  totalHours: {
    title: "Collaboration Hours",
    text: "The average time you spent with email and meetings each week."
  },
  utilization: {
    title: "Utilization",
    text: "The length of time between your first email or meeting and last email or meeting each day."
  }
},
emailOverview: {
  hourlyDistribution: "Time distribution of sent email, based on the home-office time zone of each email sender."
},
meetingOverview: {
  engagementDetails: "<p>This report shows what fraction of time in meetings is being used ineffectively.</p><p><ul><li>&bull; Each {{canonicalDim 'function'}} is allowed to have two {{chain 'canonicalDim' 'plural' 'layer'}} represented at a meeting. The time of any further attendees from that {{canonicalDim 'function'}} is considered <b>Redundant</b>.</li><li>&bull; If a calendar contains two overlapping meetings of two hours duration or less, that time is considered <b>Double-Booked</b>.</li><li>&bull; If a person sends more than two emails per hour during a meeting, that time is counted as <b>Too Many Mails</b>.</li></ul></p><p>None of these are authoritative measures of meeting time spent ineffectively, but together they are indicative. <b>Low Engagement Hours</b> is the average of the three measures.</p>"
},
personalDashboard: {
  orgLoad: "The hours you consumed from the rest of the organization based on meetings you organized and emails you sent.",
//orgLoadAdhoc: "<p>The hours you consumed from the rest of the organization based on meetings you organized and emails you sent.</p><p>The four week trend shows your weekly organizational load index for the last four weeks.</p>",
orgLoadAdhoc: "<p>The hours you consumed from the rest of the organization based on meetings you organized and emails you sent.</p> <p>Statistics are represented as averages per week within the specified time period.</p> <p>The four week trend shows your organizational load index for each of the last four weeks.</p>",
collabGroups: "<p>The people that you spent the most time collaborating with (through meetings and email) during this period, represented as averages per week.</p> <p>The \"Initiated by you\" column shows what percentage of the hours spent with that person can be attributed to emails you sent or meetings you organized.</p> <p>The \"4 week Push/Pull\" column shows the amount of collaboration time initiated by this person as well as the amount of collaboration time initiated by you.</p> <p>Generally, more blue bars indicate you are driving the relationship with that person, whereas more red bars indicate they are driving the relationship.</p>",
//collabByTimeday: "Hours spent in meetings and sending email for each hour of the day this week, in local time based on office location.",
collabByTimeday: "<p>This graph shows how much time is spent in meetings and email during each hour of the day.</p> <p>For example, 5 hours of meeting time at 3 pm indicates that you had an hour-long meeting at 3 pm five days out of the week.</p>",
topGroupsCollaboratedWith: "<p>The groups that you spent the most time collaborating with (through meetings and email) during this period, represented as averages per week.</p> <p>The \"Initiated by you\" column shows what percentage of the hours spent with that person can be attributed to emails you sent or meetings you organized.</p> <p>The \"4 week Push/Pull\" column shows the amount of collaboration time initiated by this person as well as the amount of collaboration time initiated by you.</p> <p>Generally, more blue bars indicate you are driving the relationship with that person, whereas more red bars indicate they are driving the relationship.</p>",
//totalTimeCollaborating: "Estimated time spent collaborating this week, based on meetings and sent email.",
totalTimeCollaborating: "<p>Estimated time spent collaborating through meetings and email this period, represented as average time per week.</p> <p>The four week trend shows your collaboration time for each of the last four weeks.</p>",
//topTopics: "The topics you discussed most this week, based on the subject lines of meetings and email.",
topTopics: "The topics you discussed most this week, based on the subject lines of your meetings and email from this period. The size of the words in the word cloud are proportional to their frequency: larger words are more common.",
//collabTime: "Your time spent collaborating this week, and the details for the top 5 groups in each dimension.",
collabTime: "Your collaboration time with each group. Use \"Show By\" to view how your collaboration time is divided among the groups within a particular dimension.",
//afterHours: "Time spent this week working outside of the standard {{workDayStart}}-{{workDayEnd}} Monday-Friday workday for your home office location's time zone, based on your meetings and sent email.",
afterHours: "<p>Time spent working outside the hours of {{workDayStart}}-{{workDayEnd}} Monday-Friday (in your office's local time), based on your meetings and sent email.</p> <p>The four week trend shows your \"after hours\" time for each of the last four weeks.</p>",
timeSpent: "Time spent in meetings or email for each day of this week.",
//avgTime: "Average daily time spent in meetings or email.",
avgTime: "<p>The amount of time you spend in meetings or email each day of the week.</p> <p>For example, 2 hours of mail time on Wednesday indicates that you spent an average of 2 hours reading and writing email each Wednesday during this period.</p> <p>Statistics are represented as averages per week within the specified time period.</p>",
//mailDetails: "<p>Statistics for your emails during the reporting period. Mail time is estimated based on 5 minutes per sent mail and 2.5 minutes per received mail.</p><p>The four week trend shows your total mail time for the last four weeks.</p>",
mailDetails: "<p>The estimated time you spent sending and receiving email during this period. This is compared to the averages for people in your company, level, and department.</p> <p>Statistics are represented as averages per week within the specified time period.</p> <p>The four week trend shows your total mail time for each of the last four weeks.</p>",
mailStatistics: "<p>Information about the mail you sent and received, both within and outside of your company.</p> <p>\"Internal recipients\" and \"Internal senders\" indicate how many people your email is divided among. For example, if you received 80 emails from known internal senders, and there were 4 internal senders, you can infer that most of your email communication involves this select few people.</p> <p>Statistics are represented as averages per week within the specified time period.</p>",
//meetingDetails: "<p>Statistics for your meetings during the reporting period, along with benchmarks to compare your time with others in the company.</p><p>The four week trend shows your total meeting time over the last four weeks.</p>",
meetingDetails: "<p>The time you spent in meetings during this period. This is compared to the averages for people in your company, level, and department.</p> <p>Statistics are represented as averages per week within the specified time period.</p> <p>The four week trend shows your total meeting time for each of the last four weeks.</p>",
meetingStatistics: "<p>Information about the meetings you attended during this period, as well as the amount of contiguous time available to you outside of meetings.</p> <p>\"Double-booked\" refers to the amount of time where you were scheduled for multiple meetings simultaneously.</p> <p>\"No. of 1:1 meetings\" refers to the number of one-on-one meetings you attended.</p> <p>\"Meeting Attendees\" refers to the number of people who were present at meetings you attended.</p> <p>Statistics are represented as averages per week within the specified time period.</p>",
meetings: "<p>Details for each meeting you attended during the period of the report. Time where you are double booked will only be counted toward your total meeting hours once.</p> <p>The Meetings Organized tab shows all meetings which you organzied and are most likely work related.</p> <p>The Meetings Attended tab shows all meetings initiated by someone else which you did not decline, and are most likely work related.</p> <p>If a meeting appears in the Organized or Attended tabs which was not work related, click the X to mark that meeting as an excluded meeting.</p> <p>The Excluded Meetings tab shows all meetings which were most likely not work related. These meetings do not count toward your total hours. If a meeting appears here that is work related, you can click the + icon to mark it as a business meeting. It will be assined either to the Meetings Organized or Attended tabs.</p> <p>The Rated Meetings tab shows all of the meetings that you rated this week. Meetings which were marked as excluded will not appear here.</p>",
meetingSize: "The number of attendees who were present in the meetings you attended during this period.",
meetingCategories: "In your calendar, you are able to tag meetings with different categories. Meetings with multiple categories will be counted in each tagged category.",
poll: "Take a Poll"
},
personalDashboardBenchmarks: {
  doubleBookedHours: "The number of hours per week where you were scheduled for multiple simultaneous meetings, during this time period.",
  externalCollaborationHoursPct: "The percentage of your time per week spent with people external to your company. For example, these could be vendors, customers, clients, etc.",
//externalNetworkBreadth: "<p>External Network Breadth shows you how many connections (at least 2 meaningful interactions) there have been with domains outside of your company over the period of time selected. This metric does not show how many external people-connections there are; see the metric \"External Network Size\" for this. <p></p>Example: If your time period is three months, you would need to have 6 meaningful interactions with any one person over that time period to be counted as a \"connection\" with that domain (3 months x 2 meaningful interactions per month = 6). <p></p>Reminder: A \"meaningful interaction\" is a meeting or email thread with 5 or fewer attendees or recipients. <p></p>Note: External Network Breadth can only be shown at a per month level.</p>",
//externalNetworkSize: "<p>External Network Size shows you how many connections (at least 2 meaningful interactions) there are with people outside of your company over the period of time selected. <p></p>Example: If your time period is three months, you would need to have 6 meaningful interactions over that time period to be counted as a \"connection\" (3 months x 2 meaningful interactions per month = 6). <p></p>Reminder: A \"meaningful interaction\" is a meeting or email thread with 5 or fewer attendees / recipients. <p></p>Note: External Network Size can only be shown at a per month level.</p>",
// To be dealt with when network kpis are needed for personal dashboard
//intraDepartmentalNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'organization' true}}.",
//intraFunctionNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'function' true}}.",
//intraLevelNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'level' true}}.",
//intraRegionNetworkDepth: "The average number of people that members of this group are connected to, within their own {{canonicalDim 'region' true}}.",
insularityByFunction: "The percentage of time you spent on meetings and email that involved only others from within your own {{canonicalDim 'function'}}.",
insularityByLevel: "The percentage of time you spent on meetings and email that involved only others from within your own {{canonicalDim 'level'}}.",
insularityByOrganization: "The percentage of time you spent on meetings and email that involved only others from within your own {{canonicalDim 'organization'}}.",
insularityByRegion: "The percentage of time you spent on meetings and email that involved only others from within your own {{canonicalDim 'region'}}.",
//internalNetworkBreadth: "The average number of internal departments that the members of each group are connected to.",
//internalNetworkSize: "<p>Internal Network Size shows you how many connections (at least 2 meaningful interactions) there are with people inside your dataset over the period of time selected. </p><p>Example: If your time period is three months, you would need to have 6 meaningful interactions over that time period to be counted as a \"connection\" (3 months x 2 meaningful interactions per month = 6). <p></p>Reminder: A \"meaningful interaction\" is a meeting or email thread with 5 or fewer attendees / recipients. </p><p>Note: Internal Network Size can only be shown at a per month level.</p>",
//internalNetworkVelocity: "The average number of new connections per month added by the members of each group.",
leadershipExposureCount: "The average number of occurrences per week where you were present in a meeting with someone who is at least one {{canonicalDim 'level' true}} above yourself – for example, a manager or leader.",
lowEngagementHours: "<p>During this time period, the number of hours per week you spent in meetings where you were not considered fully engaged in the meeting. <p></p>A meeting attendee\'s time is counted as Low Engagement when they are double-booked, redundant, or send more than 2 emails per hour during a meeting; Low Engagement Hours is the average of the time spent in each of these three scenarios.</p>",
mailHours: "The number of hours per week you spent sending and receiving email during this time period.",
managerCentralizationCount: "The percentage of your team’s email and meetings where your manager is involved.",
managerHoursTogether: "The number of hours per week you spent in meetings with your direct supervisor during this time period.",
managerLoadAbsorption: "The ratio of your meeting hours to your manager\'s meeting hours.",
meetingBreakdownDuration_from30to59Minutes: "The number of hours per week you spent in meetings with a duration of between 30 and 59 minutes, during this time period.",
meetingHours: "The number of hours per week you spent in meetings during this time period.",
meetingHoursByIsExternal_True: "During this time period, the number of hours per week you spent in meetings where people external to your organization were present.",
meetingsAttended: "The number of meetings you attended per week during this time period.",
//networkEfficiency: "<p>The average time spent each month collaborating with each internal network connection over the specified time period. </p><p>For example, a value of \"1.6\" indicates that an average of 1.6 hours per month were spent on each person within the internal network over the specified time period.</p>",
numAttachments: "Your average number of attachments sent per week during this time period.",
oli_hours: "<p>The amount of organizational load your meetings and email imposed per week, during this time period. </p><p>Organizational Load is the number of hours a person consumes from the rest of the organization based on meetings they organize and emails they send. </p><p>For instance, if you organize a two hour meeting that includes yourself and four others, the Organizational Load for that meeting is 10 hours. (5 attendees, 2 hours each)</p>",
oneOnOneManagerCount: "The number of meetings per week you attended that involved only yourself and your direct supervisor during this time period.",
oneOnOneManagerHours: "The number of hours per week you spent in meetings involving only yourself and your direct supervisor during this time period.",
overload: "The number of hours you spent per week on meetings and email outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday, during this time period.",
overloadMailsPercent: "The percentage of email you sent outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday, during this time period.",
overloadMeetings: "The number of hours per week you spent in meetings that took place outside of {{workDayStart}}-{{workDayEnd}} Monday through Friday, during this time period.",
receivedMails: "Your average number of emails received per week during this time period.",
redundantHours: "<p>During this time period, the number of hours per week you spent in meetings where you were considered \"redundant.\" </p><p>If three or more {{chain 'canonicalDim' 'plural' 'layer'}} of management from your {{canonicalDim 'function' true}} are present within the same meeting (e.g. yourself, your manager, and your manager’s superior) the lowest {{chain 'canonicalDim' 'plural' 'level'}} are considered redundant.</p>",
sentMails: "Your average number of emails sent per week during this time period.",
skipLevelExposureCount: "The number of occurrences per week during this time period where you were present in a meeting with someone who is at least two {{chain 'canonicalDim' 'plural' 'level'}} above yourself, such as your manager’s superior.",
timeBlock_2Hrs: "<p>The number of unfragmented blocks of time available to you per week during this time period. </p><p>Time fragmentation is the number of 2-hour blocks of time between meetings, assuming that the workday starts at {{workDayStart}} and ends at {{workDayEnd}}. </p><p>For instance, if you have a meeting from 9-10am and another meeting from 1-2pm, then you would have two 2-hour blocks of time: one from 11am to 1pm and one from 2pm to 4pm.</p>",
totalHours: "The number of hours per week you spent on meetings and email during this time period.",
utilization: "<p>Your utilization per week during this time period. </p><p>Utilization is calculated by measuring the time between a person\'s <b>first</b> sent email or meeting attended in a day and that person\'s <b>last</b> sent email or meeting attended that day. </p><p>For instance, if your first meeting started at 9am, and you sent your last email at 6pm, your utilization for that day would be 9 hours.</p>"
},
personalLoad: {
// DASHBOARD SECTION
// OLI
oli_hours: {
  title: "Organization Load Imposed (OLI)",
  text: "The hours you consumed from the organization, based on meetings you organized and email you sent. Click the Plus icon to show the details of collaboration activity that can contribute to your OLI."
},
// OLI Meetings
oli_meetingHours: {
  title: "Meeting Hours (meetings organized)",
  text: "The total hours spent by attendees in meetings you organized. For example, a 1-hour meeting with 6 attendees is counted as 6 meeting hours. Click the \"plus\" icon to show meeting details."
},
oli_num: {
  title: "Number of meetings",
  text: "The number of meetings you organized with people from your organization in attendance."
},
oli_avgAttendees: {
  title: "Average Meeting Size",
  text: "The average number of people present in meetings you organized. Only internal attendees are included in calculation."
},
oli_avgDuration: {
  title: "Average Meeting Duration",
  text: "The average length of meetings you organized, represented in hours."
},
// OLI Mails
oli_mailHours: {
  title: "Email Hours",
  text: "The total hours spent by recipients reading email you sent. Email is assumed to require 5 minutes per email per recipient. For example, if you send one email to six people, this is counted as 30 minutes of time spent. Click the \"plus\" icon to show the details of email you sent."
},
oli_mails: {
  title: "Number of Emails",
  text: "The number of emails you sent."
},
oli_avgRecipients: {
  title: "Average Number of Recipients",
  text: "The average number of recipients included within email you sent."
},

// Meeting Size / Management Redundancy
avgAttendedMeetingSizeKpi: {
  title: "Meeting Size (Meetings Attended)",
  text: "The average number of people present in meetings you attended. All attendees (internal and external) are included in calculation."
},
percentRedundantHours: {
  title: "Management Redundancy",
  text: "The percentage of meeting hours where your function was redundant. If three or more {{chain 'canonicalDim' 'plural' 'layer' true}} of management from your function are present within the same meeting (e.g. yourself, your manager, and your manager's superior) that meeting is considered to have redundancy."
},
// same as tooltip under `metric`
managementRedundantHours: {
  title: "Management Redundant Hours",
  text: "The number of meeting hours where your function had redundancy. If three or more {{chain 'canonicalDim' 'plural' 'layer' true}} of management from your function are present within the same meeting (e.g. yourself, your manager, and your manager's superior) that meeting is considered to have redundancy."
},

// Based on meeting overview -> engagement details
redundancy: "<p>The percentage of meeting hours marked as redundant: if there are more than two {{chain 'canonicalDim' 'plural' 'layer'}} within the same function present in a meeting, the third and beyond are considered redundant. For example, if two Senior Product Managers and the Director of Product are in the same meeting with people from another function like marketing or engineering, none of them are redundant. However, if some Junior Product Managers also attended the meeting, they would be considered redundant.</p> <p>When comparing the LTD and Baseline values for Management Redundancy, this comparison is measured in percentage points (pp).</p>",
redundancyYesOrNo: "If three or more {{chain 'canonicalDim' 'plural' 'layer'}} of management from your function are present within the same meeting (e.g. yourself, your manager, and your manager's superior) that meeting is considered to have redundancy within your function.",
meetingRedundancy: "This report shows what fraction of time in meetings is being used ineffectively.</p><p>Each {{canonicalDim 'function'}} is allowed to have two {{chain 'canonicalDim' 'plural' 'layer'}} represented at a meeting. The time of any further attendees from that {{canonicalDim 'function'}} is considered <b>Redundant</b>.",
topGroupsCollaboratedWith: "<p>The groups that you spent the most time collaborating with (through meetings and email) during this period, represented as averages per week.</p> <p>The \"Initiated by you\" column shows what percentage of the hours spent with this group can be attributed to emails you sent or meetings you organized.</p> <p>The \"4 week Push/Pull\" column shows the amount of collaboration time initiated by this group as well as the amount of collaboration time initiated by you.</p> <p>Generally, more blue bars indicate you are driving the relationship with a group, whereas more red bars indicate they are driving the relationship.</p>",
topGroupsTeamCollaboratedWith: "<p>The groups that your team spent the most time collaborating with (through meetings and email) during this period, represented as averages per week.</p> <p>The \"Initiated by your team\" column shows what percentage of the hours spent with this group can be attributed to emails your team sent or meetings your team organized.<p> </p>The \"4 week Push/Pull\" column shows the amount of collaboration time initiated by this group as well as the amount of collaboration time initiated by your team.</p> <p>Generally, more blue bars indicate your team is driving the relationship with this group, whereas more red bars indicate they are driving the relationship.</p>",
collabTopPeople: "<p>The people that you spent the most time collaborating with (through meetings and email) during this period, represented as averages per week.</p> <p>The \"Initiated by you\" column shows what percentage of the hours spent with that person can be attributed to emails you sent or meetings you organized.</p> <p>The \"4 week Push/Pull\" column shows the amount of collaboration time initiated by this person as well as the amount of collaboration time initiated by you.</p> <p>Generally, more blue bars indicate you are driving the relationship with that person, whereas more red bars indicate they are driving the relationship.</p>",
teamMeetingSize: "The number of attendees who were present in the meetings your average team member attended.",
teamOli_hours: "The hours your average team member consumed from the rest of the organization based on meetings they organized and emails they sent.",
teamOliReceived_hours: "The hours the rest of the organization imposed on your average team member based on meetings they organized and emails they sent.",
teamOliTotal_hours: "<p>The hours your team members consumed from the rest of the organization based on meetings they organized and emails they sent.</p><p>Comparison against other teams is not available for this metric due to variability in team sizes. Total values for teams of different sizes cannot be directly compared.</p>",
teamOliTotalReceived_hours: "<p>The hours the rest of the organization imposed on your team members based on meetings they organized and emails they sent.<p></p>Comparison against other teams is not available for this metric due to variability in team sizes. Total values for teams of different sizes cannot be directly compared.</p>",
ranking: "This section compares your OLI, Meeting Size, and Management Redundancy metrics with those of your colleagues within the specified category. Colleagues' data is anonymized.",
yourTeam: "Your team represents you and your direct reports as defined by the company's HR system. The table below lists the members of your team along with key company-defined metadata elements. Team composition and metadata will be updated periodically. If any immediate changes are required please contact support@volometrix.com",
meetings: "<p>Details for each meeting you attended during the period of the report. Time where you are double booked will only be counted toward your total meeting hours once.</p> <p>The Meetings Organized tab shows all meetings which you organzied and are most likely work related.</p> <p>The Meetings Attended tab shows all meetings initiated by someone else which you did not decline, and are most likely work related.</p> <p>If a meeting appears in the Organized or Attended tabs which was not work related, click the X to mark that meeting as an excluded meeting.</p> <p>The Excluded Meetings tab shows all meetings which were most likely not work related. These meetings do not count toward your total hours. If a meeting appears here that is work related, you can click the + icon to mark it as a business meeting. It will be assined either to the Meetings Organized or Attended tabs.</p>",
personalDetails: "The table below lists key metadata elements as provided by your company and will be updated periodically. If any immediate changes are required, please contact support@volometrix.com"
},
executiveScorecard: {
  oli: {
    title: "Organizational Load Index",
    shortTitle: "OLI",
    text: "Number of hours a person consumes from the rest of the organization based on meetings they organize and emails they send. For instance, if you organize a one hour meeting for 5 people in your organization, the Organizational Load was 5 hours for the invitees + 1 hour of your time = 6 hours total"
  },
  meetingSize: {
    title: "Avg Meeting Size",
    text: "The average number of people present in the meetings attended by the members of this {{canonicalDim 'function' true}}."
  },
  redundancy: {
    title: "Redundancy",
    text: "The percentage of meeting hours marked as redundant: if there are more than two {{chain 'canonicalDim' 'plural' 'layer'}} within the same {{canonicalDim 'function'}} present in a meeting, the third and beyond are considered redundant. For example, if two Senior Product Managers and the Director of Product are in the same meeting with people from another function like marketing or engineering, none of them are redundant. However, if some Junior Product Managers also attended the meeting, they would be considered redundant."
  }
},

internalNetworkSize: "The number of internal people with whom you had at least two <b>meaningful interactions</b> per month. A meaningful interaction is defined as a meeting or email between five or fewer people.",
externalNetworkSize: "The number of external people with whom you had at least two <b>meaningful interactions</b> per month. A meaningful interaction is defined as a meeting or email between five or fewer people.",
externalNetworkBreadth: "The number of external domains with whom you have at least one connection. A meaningful interaction is defined as a meeting or email between five or fewer people.",
totalHours: "Estimated time spent collaborating, based on meetings and email.",
meetingHours: "Estimated time spent in meetings, based on meetings attended.",
mailHours: "Estimated time spent on email. Time estimate is based on 5 minutes per sent mail and 2.5 minutes per received mail.",
oli_hours: "The hours you consumed from the rest of the organization based on meetings you organized and emails you sent.",
// NOTE: EDIT THESE ORG LOAD RECEIVED DEFINITIONS
oliReceived_hours: "The hours the rest of the organization consumed from you based on meetings they organized and emails they sent.",
overload: "Time spent working outside of the standard {{workDayStart}}-{{workDayEnd}} Monday-Friday workday for your home office location time zone, based on your meetings and sent email.",
timeBlock_2Hrs: "<p>Time fragmentation is the number of 2 hour blocks of time between meetings, assuming that the workday starts at {{workDayStart}} and ends at {{workDayEnd}}.</p><p>For instance, if you have a one hour meeting at 10am and a two hour meeting at 2pm, then you would have two 2-hour blocks of time.</p>",
utilization: "<p>Utilization is calculated by looking at the spread of hours between a person's <b>first</b> sent email or meeting attended in a day and that person's <b>last</b> sent email or meeting attended that day.</p><p>For instance, if you sent your first email at 7am, your first meeting started at 9am, your last meeting ended at 4:30pm, and you sent your last email at 6pm, your utilization for that day would be 11 hours.</p>",
drilldownLink: "Click to explore across various dimensions",
meetingSize: "The number of attendees who were present in the meetings you attended during this period."    // from personal dashboard tooltip
},
feedback: {
  poll: {
    title: "Poll"
  }
}
};



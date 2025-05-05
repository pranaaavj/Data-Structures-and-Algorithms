//! Final Draft for fake data

function generateRealisticFakeData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    'Fake_Responses_Test'
  );
  const numRows = 40;

  const keralaRespondents = [
    {
      name: 'Achu',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Binoy',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Bhathran',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Bithul',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Fathima',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Fais',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Rizamuneer',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Afsal',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Working',
    },
    {
      name: 'Muhammed Ibrahim',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Ashwanth',
      gender: 'Male',
      age: 19,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Muqsid',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Greeshma',
      gender: 'Female',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Jayakumar',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Nivin',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Rathika',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Sabu',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anusree',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Sharath',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Abay',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Binthu',
      gender: 'Female',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Fizan',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Santhose',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Sachin',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Ritwik',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Akhiljih',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Amaljith',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Ashwathy',
      gender: 'Female',
      age: 18,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Pranamika',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Rekha',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Smitha',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Alan',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anose',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Salman',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Al Ameen',
      gender: 'Male',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Sharath',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Anbin',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Malavika',
      gender: 'Female',
      age: 19,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Sreeshiva',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Anaswara',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anulakshmi',
      gender: 'Female',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
  ];

  const characteristics = [
    'Extremely uncharacteristic of me',
    'Somewhat uncharacteristic of me',
    'Only slightly characteristic of me',
    'Somewhat characteristic of me',
    'Extremely characteristic of me',
  ];

  const frequency = [
    'Not at all',
    'Sometimes',
    'Moderately often',
    'Often',
    'All the time',
  ];

  const baseDate = new Date('2025-05-05T08:00:00'); // Fixed date, start at 8 AM
  let currentTime = baseDate;

  const responseProfiles = [
    { characteristicBias: [1, 2, 2, 3, 3], frequencyBias: [1, 2, 2, 3, 4] }, // Balanced
    { characteristicBias: [0, 0, 1, 3, 4], frequencyBias: [0, 1, 1, 2, 3] }, // Low expressive
    { characteristicBias: [2, 3, 3, 4, 4], frequencyBias: [2, 3, 3, 4, 4] }, // Highly expressive
  ];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    // Generate timestamp between May 5 - May 8
    row.push(
      Utilities.formatDate(
        currentTime,
        Session.getScriptTimeZone(),
        'dd/MM/yyyy HH:mm:ss'
      )
    );

    // Unique or common Indian name
    const respondent = keralaRespondents[i];
    row.push(respondent.name);
    row.push(respondent.age);
    row.push(respondent.gender);
    row.push(respondent.education);
    row.push(respondent.occupation);

    const profile =
      responseProfiles[Math.floor(Math.random() * responseProfiles.length)];

    // Section 1 - 29 responses (characteristicBias used)
    for (let j = 0; j < 29; j++) {
      const index =
        profile.characteristicBias[
          Math.floor(Math.random() * profile.characteristicBias.length)
        ];
      row.push(characteristics[index]);
    }

    // Section 2 - 30 responses (frequencyBias used)
    for (let j = 0; j < 30; j++) {
      const index =
        profile.frequencyBias[
          Math.floor(Math.random() * profile.frequencyBias.length)
        ];
      row.push(frequency[index]);
    }

    sheet.appendRow(row);

    const hourIncrement = Math.floor(Math.random() * 5) + 1; // 1 to 5 hours
    const minuteIncrement = Math.floor(Math.random() * 60); // 0 to 59 minutes
    const secondIncrement = Math.floor(Math.random() * 60); // 0 to 59 seconds

    const totalMillis =
      (hourIncrement * 3600 + minuteIncrement * 60 + secondIncrement) * 1000;
    currentTime = new Date(currentTime.getTime() + totalMillis);
  }
}

// const keralaRespondents = [
//   { name: 'Achu', gender: 'Male', age: 24 },
//   { name: 'Binoy', gender: 'Male', age: 21 },
//   { name: 'Bhathran', gender: 'Male', age: 21 },
//   { name: 'Bithul', gender: 'Male', age: 22 },
//   { name: 'Fathima', gender: 'Female', age: 24 },
//   { name: 'Fais', gender: 'Male', age: 24 },
//   { name: 'Rizamuneer', gender: 'Female', age: 25 },
//   { name: 'Afsal', gender: 'Male', age: 22 },
//   { name: 'Muhammed Ibrahim', gender: 'Male', age: 25 },
//   { name: 'Ashwanth', gender: 'Male', age: 25 },

//   { name: 'Muqsid', gender: 'Male', age: 24 },
//   { name: 'Greeshma', gender: 'Female', age: 21 },
//   { name: 'Jayakumar', gender: 'Male', age: 21 },
//   { name: 'Nivin', gender: 'Male', age: 22 },
//   { name: 'Rathika', gender: 'Female', age: 24 },
//   { name: 'Sabu', gender: 'Male', age: 24 },
//   { name: 'Anusree', gender: 'Female', age: 25 },
//   { name: 'Sharath', gender: 'Male', age: 22 },
//   { name: 'Abay', gender: 'Male', age: 25 },
//   { name: 'Binthu', gender: 'Female', age: 25 },

//   { name: 'Fizan', gender: 'Male', age: 24 },
//   { name: 'Santhose', gender: 'Male', age: 21 },
//   { name: 'Sachin', gender: 'Male', age: 22 },
//   { name: 'Ritwik', gender: 'Male', age: 24 },
//   { name: 'Akhiljih', gender: 'Male', age: 22 },
//   { name: 'Amaljith', gender: 'Male', age: 25 },
//   { name: 'Ashwathy', gender: 'Female', age: 21 },
//   { name: 'Pranamika', gender: 'Female', age: 24 },
//   { name: 'Rekha', gender: 'Female', age: 25 },
//   { name: 'Smitha', gender: 'Female', age: 25 },

//   { name: 'Alan', gender: 'Male', age: 24 },
//   { name: 'Anose', gender: 'Male', age: 21 },
//   { name: 'Salman', gender: 'Male', age: 22 },
//   { name: 'Al Ameen', gender: 'Male', age: 24 },
//   { name: 'Sharath', gender: 'Male', age: 22 },
//   { name: 'Anbin', gender: 'Male', age: 25 },
//   { name: 'Malavika', gender: 'Female', age: 21 },
//   { name: 'Sreeshiva', gender: 'Female', age: 24 },
//   { name: 'Anaswara', gender: 'Female', age: 25 },
//   { name: 'Anulakshmi', gender: 'Female', age: 25 },
// ];

// // Fake data generator
// function generateRealisticFakeData() {
//   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
//     'Fake_Responses_Test'
//   );
//   const numRows = 10;

//   const keralaRespondents = [
//     { name: 'Achu', gender: 'Male', age: 24 },
//     { name: 'Binoy', gender: 'Male', age: 21 },
//     { name: 'Bhathran', gender: 'Male', age: 21 },
//     { name: 'Bithul', gender: 'Male', age: 22 },
//     { name: 'Fathima', gender: 'Female', age: 24 },
//     { name: 'Fais', gender: 'Male', age: 24 },
//     { name: 'Rizamuneer', gender: 'Female', age: 25 },
//     { name: 'Afsal', gender: 'Male', age: 22 },
//     { name: 'Muhammed Ibrahim', gender: 'Male', age: 25 },
//     { name: 'Dawood', gender: 'Male', age: 25 },
//   ];

//   const indianNames = [
//     'Aarav',
//     'Vivaan',
//     'Aditya',
//     'Vihaan',
//     'Arjun',
//     'Sai',
//     'Krishna',
//     'Rohan',
//     'Anaya',
//     'Diya',
//     'Ishita',
//     'Tanvi',
//     'Meera',
//     'Saanvi',
//     'Avni',
//     'Nandita',
//     'Sneha',
//     'Riya',
//     'Kavya',
//     'Isha',
//     'Alok',
//     'Manav',
//     'Reyansh',
//     'Rudra',
//     'Shaurya',
//     'Tanish',
//     'Yash',
//     'Zoya',
//     'Farhan',
//     'Siddharth',
//   ];

//   const genders = ['Male', 'Female'];
//   const educationLevels = ['Higher Secondary', 'Undergraduate', 'Postgraduate'];
//   const occupations = ['Student', 'Working', 'Both'];

//   const characteristics = [
//     'Extremely uncharacteristic of me',
//     'Somewhat uncharacteristic of me',
//     'Only slightly characteristic of me',
//     'Somewhat characteristic of me',
//     'Extremely characteristic of me',
//   ];

//   const frequency = [
//     'Not at all',
//     'Sometimes',
//     'Moderately often',
//     'Often',
//     'All the time',
//   ];

//   const baseDate = new Date('2025-05-05T08:00:00'); // Fixed date, start at 8 AM
//   let currentTime = baseDate;

//   const usedNames = new Set();

//   for (let i = 0; i < numRows; i++) {
//     const row = [];

//     // Generate timestamp between May 5 - May 8
//     row.push(
//       Utilities.formatDate(
//         currentTime,
//         Session.getScriptTimeZone(),
//         'dd/MM/yyyy HH:mm:ss'
//       )
//     );

//     // Unique or common Indian name
//     let name;
//     do {
//       name = indianNames[Math.floor(Math.random() * indianNames.length)];
//     } while (usedNames.has(name));
//     usedNames.add(name);
//     row.push(name);

//     // Age 20-26 (realistic range for form respondents)
//     row.push(Math.floor(Math.random() * 7) + 20);

//     // Gender, Education, Occupation
//     row.push(genders[Math.floor(Math.random() * genders.length)]);
//     row.push(
//       educationLevels[Math.floor(Math.random() * educationLevels.length)]
//     );
//     row.push(occupations[Math.floor(Math.random() * occupations.length)]);

//     // Section 1 - 29 responses
//     for (let j = 0; j < 29; j++) {
//       row.push(
//         characteristics[Math.floor(Math.random() * characteristics.length)]
//       );
//     }

//     // Section 2 - 30 responses
//     for (let j = 0; j < 30; j++) {
//       row.push(frequency[Math.floor(Math.random() * frequency.length)]);
//     }

//     sheet.appendRow(row);

//     const increment = Math.floor(Math.random() * 11) + 5; // 5 to 15 mins
//     currentTime = new Date(currentTime.getTime() + increment * 60000);
//   }
// }

// Claude unrealisiclly realistic once
function generateRealisticFakeData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    'Fake_Responses_Test'
  );
  const numRows = 40;

  const keralaRespondents = [
    {
      name: 'Achu',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Binoy',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Bhathran',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Bithul',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Fathima',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Fais',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Rizamuneer',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Afsal',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Working',
    },
    {
      name: 'Muhammed Ibrahim',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Ashwanth',
      gender: 'Male',
      age: 19,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Muqsid',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Greeshma',
      gender: 'Female',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Jayakumar',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Nivin',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Rathika',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Sabu',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anusree',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Sharath',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Abay',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Binthu',
      gender: 'Female',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Fizan',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Santhose',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Sachin',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Ritwik',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Akhiljih',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Amaljith',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Ashwathy',
      gender: 'Female',
      age: 18,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Pranamika',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Rekha',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Smitha',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Alan',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anose',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Salman',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Al Ameen',
      gender: 'Male',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Sharath',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Anbin',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Malavika',
      gender: 'Female',
      age: 19,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Sreeshiva',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Anaswara',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anulakshmi',
      gender: 'Female',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
  ];

  // AQ Scale - Aggression Questionnaire (Buss & Perry, 1992)
  const characteristics = [
    'Extremely uncharacteristic of me',
    'Somewhat uncharacteristic of me',
    'Only slightly characteristic of me',
    'Somewhat characteristic of me',
    'Extremely characteristic of me',
  ];

  // ATQ Scale - Automatic Thoughts Questionnaire (Hollon & Kendall, 1980)
  const frequency = [
    'Not at all',
    'Sometimes',
    'Moderately often',
    'Often',
    'All the time',
  ];

  // Define AQ subscales based on the questions from the image
  // Physical Aggression: 1, 5, 9, 13, 17, 21, 24, 27, 29
  // Verbal Aggression: 2, 6, 10, 14, 18
  // Anger: 3, 7, 11, 15, 19, 22, 25
  // Hostility: 4, 8, 12, 16, 20, 23, 26, 28
  const aqSubscales = {
    physicalAggression: [0, 4, 8, 12, 16, 20, 23, 26, 28],
    verbalAggression: [1, 5, 9, 13, 17],
    anger: [2, 6, 10, 14, 18, 21, 24],
    hostility: [3, 7, 11, 15, 19, 22, 25, 27],
  };

  // Define ATQ subscales based on Hollon & Kendall, 1980
  // Personal Maladjustment (PMDC): 7, 10, 14, 20, 26
  // Negative Self-Concept (NSNE): 2, 3, 9, 21, 23, 24, 28
  // Low Self-Esteem (LSE): 17, 18
  // Helplessness: 29, 30
  const atqSubscales = {
    pmdc: [6, 9, 13, 19, 25],
    nsne: [1, 2, 8, 20, 22, 23, 27],
    lse: [16, 17],
    helplessness: [28, 29],
  };

  // Create more focused profile types that align with real psychological patterns
  const responseProfiles = [
    // Regular profile - generally balanced, low aggression, moderate negative thoughts
    {
      name: 'Low Aggression / Moderate Negative Thoughts',
      weight: 0.45, // 45% of respondents
      aqBias: {
        physicalAggression: { bias: [2, 2, 3, 1, 0], weight: 1.0 }, // Lower physical aggression
        verbalAggression: { bias: [1, 2, 3, 2, 0], weight: 1.0 }, // Moderate verbal aggression
        anger: { bias: [1, 2, 3, 2, 0], weight: 1.0 }, // Moderate anger
        hostility: { bias: [1, 2, 3, 2, 0], weight: 1.0 }, // Moderate hostility
      },
      atqBias: {
        pmdc: { bias: [2, 3, 2, 1, 0], weight: 1.0 }, // Moderate personal maladjustment
        nsne: { bias: [2, 3, 2, 1, 0], weight: 1.0 }, // Moderate negative self-concept
        lse: { bias: [2, 3, 2, 1, 0], weight: 1.0 }, // Moderate low self-esteem
        helplessness: { bias: [3, 3, 2, 0, 0], weight: 1.0 }, // Low helplessness
      },
    },
    // High aggression profile - high aggression with moderate-high negative thoughts
    {
      name: 'High Aggression / High Negative Thoughts',
      weight: 0.25, // 25% of respondents
      aqBias: {
        physicalAggression: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher physical aggression
        verbalAggression: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher verbal aggression
        anger: { bias: [0, 0, 2, 3, 3], weight: 1.0 }, // High anger
        hostility: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher hostility
      },
      atqBias: {
        pmdc: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher personal maladjustment
        nsne: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher negative self-concept
        lse: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher low self-esteem
        helplessness: { bias: [1, 2, 2, 3, 0], weight: 1.0 }, // Moderate helplessness
      },
    },
    // Low aggression with high negative thoughts profile
    {
      name: 'Low Aggression / High Negative Thoughts',
      weight: 0.2, // 20% of respondents
      aqBias: {
        physicalAggression: { bias: [3, 3, 2, 0, 0], weight: 1.0 }, // Low physical aggression
        verbalAggression: { bias: [2, 3, 2, 1, 0], weight: 1.0 }, // Low verbal aggression
        anger: { bias: [2, 3, 2, 1, 0], weight: 1.0 }, // Low anger
        hostility: { bias: [1, 2, 3, 2, 0], weight: 1.0 }, // Moderate hostility
      },
      atqBias: {
        pmdc: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher personal maladjustment
        nsne: { bias: [0, 1, 1, 3, 3], weight: 1.0 }, // High negative self-concept
        lse: { bias: [0, 0, 1, 3, 4], weight: 1.0 }, // Very high low self-esteem
        helplessness: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher helplessness
      },
    },
    // High aggression with low negative thoughts profile
    {
      name: 'High Aggression / Low Negative Thoughts',
      weight: 0.1, // 10% of respondents
      aqBias: {
        physicalAggression: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher physical aggression
        verbalAggression: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher verbal aggression
        anger: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher anger
        hostility: { bias: [0, 1, 2, 3, 2], weight: 1.0 }, // Higher hostility
      },
      atqBias: {
        pmdc: { bias: [3, 3, 2, 0, 0], weight: 1.0 }, // Low personal maladjustment
        nsne: { bias: [3, 3, 2, 0, 0], weight: 1.0 }, // Low negative self-concept
        lse: { bias: [3, 3, 2, 0, 0], weight: 1.0 }, // Low low self-esteem
        helplessness: { bias: [4, 3, 1, 0, 0], weight: 1.0 }, // Very low helplessness
      },
    },
  ];

  // Add small amount of inconsistency - how often respondent gives inconsistent answers
  const inconsistencyRate = 0.05; // 5% chance of inconsistency per question

  // Set up timestamp generation with more realistic patterns
  const baseDate = new Date('2025-05-05T08:00:00'); // Start at 8 AM on May 5th
  let currentTime = baseDate;

  // Peak times when most people would take surveys
  const peakHours = [9, 12, 15, 20, 22]; // 9 AM, 12 PM, 3 PM, 8 PM, 10 PM

  // Make weekdays more likely than weekends for submissions
  const dayWeights = [1, 1, 1, 1, 1, 0.6, 0.4]; // Mon-Sun (May 5 2025 is a Monday)

  // Assign profiles to respondents - use weighted selection
  const assignedProfiles = [];
  for (let i = 0; i < numRows; i++) {
    // Calculate cumulative weights
    let totalWeight = responseProfiles.reduce(
      (sum, profile) => sum + profile.weight,
      0
    );
    let randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    // Select profile based on weight
    let selectedProfile = responseProfiles[0];
    for (const profile of responseProfiles) {
      cumulativeWeight += profile.weight;
      if (randomValue <= cumulativeWeight) {
        selectedProfile = profile;
        break;
      }
    }

    assignedProfiles.push(selectedProfile);
  }

  // Function to select a biased response based on subscale and question index
  function getBiasedResponse(profile, questionIndex, isAQ) {
    const subscales = isAQ ? aqSubscales : atqSubscales;
    const responseOptions = isAQ ? characteristics : frequency;

    // Determine which subscale this question belongs to
    let subscaleKey = null;
    for (const [key, indices] of Object.entries(subscales)) {
      if (indices.includes(questionIndex)) {
        subscaleKey = key;
        break;
      }
    }

    // If no subscale found or we want to add inconsistency, use random response
    if (!subscaleKey || Math.random() < inconsistencyRate) {
      return responseOptions[
        Math.floor(Math.random() * responseOptions.length)
      ];
    }

    // Get the bias array for this subscale
    const biasArray = isAQ
      ? profile.aqBias[subscaleKey].bias
      : profile.atqBias[subscaleKey].bias;

    // Calculate weighted random index
    const totalWeight = biasArray.reduce((sum, weight) => sum + weight, 0);
    let randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = 0; i < biasArray.length; i++) {
      cumulativeWeight += biasArray[i];
      if (randomValue <= cumulativeWeight) {
        return responseOptions[i];
      }
    }

    // Fallback
    return responseOptions[Math.floor(Math.random() * responseOptions.length)];
  }

  // Function to simulate realistic timestamp
  function generateRealisticTimestamp(currentTime) {
    // Get current day of week (0-6, 0 is Sunday)
    const dayOfWeek = currentTime.getDay();
    const currentHour = currentTime.getHours();

    // Base increment (minutes)
    let baseIncrement = 30 + Math.floor(Math.random() * 90); // 30-120 minutes

    // Adjust for peak hours - submissions come faster during peak times
    const hourFactor = peakHours.includes(currentHour) ? 0.7 : 1.3;

    // Adjust for day of week - weekdays have more submissions than weekends
    const dayFactor = dayWeights[dayOfWeek];

    // Calculate final increment
    const finalIncrement = Math.floor(baseIncrement * hourFactor * dayFactor);

    // Add random minutes and seconds
    const minutesToAdd = finalIncrement;
    const secondsToAdd = Math.floor(Math.random() * 60);

    return new Date(
      currentTime.getTime() + (minutesToAdd * 60 + secondsToAdd) * 1000
    );
  }

  // Generate and append rows
  for (let i = 0; i < numRows; i++) {
    const row = [];
    const profile = assignedProfiles[i];
    const respondent = keralaRespondents[i];

    // Generate timestamp
    currentTime = generateRealisticTimestamp(currentTime);
    row.push(
      Utilities.formatDate(
        currentTime,
        Session.getScriptTimeZone(),
        'dd/MM/yyyy HH:mm:ss'
      )
    );

    // Add demographic info
    row.push(respondent.name);
    row.push(respondent.age);
    row.push(respondent.gender);
    row.push(respondent.education);
    row.push(respondent.occupation);

    // Section 1 - Aggression Questionnaire (29 questions)
    for (let j = 0; j < 29; j++) {
      row.push(getBiasedResponse(profile, j, true));
    }

    // Section 2 - Automatic Thoughts Questionnaire (30 questions)
    for (let j = 0; j < 30; j++) {
      row.push(getBiasedResponse(profile, j, false));
    }

    sheet.appendRow(row);
  }

  // Optional: Add metadata about profiles used
  const metadataSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Metadata') ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Metadata');

  metadataSheet.clear();
  metadataSheet.appendRow(['Profile Distribution']);
  metadataSheet.appendRow([
    'Profile Name',
    'Target %',
    'Actual Count',
    'Actual %',
  ]);

  // Count actual profile distribution
  const profileCounts = {};
  responseProfiles.forEach((profile) => {
    profileCounts[profile.name] = 0;
  });

  assignedProfiles.forEach((profile) => {
    profileCounts[profile.name]++;
  });

  // Add profile stats
  responseProfiles.forEach((profile) => {
    const count = profileCounts[profile.name];
    metadataSheet.appendRow([
      profile.name,
      (profile.weight * 100).toFixed(1) + '%',
      count,
      ((count / numRows) * 100).toFixed(1) + '%',
    ]);
  });
}

// ----------------------------------

// Claude 2 - less realistic

function generateRealisticFakeData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    'Fake_Responses_Test'
  );
  const numRows = 40;

  const keralaRespondents = [
    {
      name: 'Achu',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Binoy',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Bhathran',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Bithul',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Fathima',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Fais',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Rizamuneer',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Afsal',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Working',
    },
    {
      name: 'Muhammed Ibrahim',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Ashwanth',
      gender: 'Male',
      age: 19,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Muqsid',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Greeshma',
      gender: 'Female',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Jayakumar',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Nivin',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Rathika',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Sabu',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anusree',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Sharath',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Abay',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Binthu',
      gender: 'Female',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Fizan',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Santhose',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Sachin',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Ritwik',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Akhiljih',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Amaljith',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Ashwathy',
      gender: 'Female',
      age: 18,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Pranamika',
      gender: 'Female',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Rekha',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Smitha',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Alan',
      gender: 'Male',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anose',
      gender: 'Male',
      age: 20,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Salman',
      gender: 'Male',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Both',
    },
    {
      name: 'Al Ameen',
      gender: 'Male',
      age: 23,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Sharath',
      gender: 'Male',
      age: 21,
      education: 'Undergraduate',
      occupation: 'Student',
    },
    {
      name: 'Anbin',
      gender: 'Male',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Malavika',
      gender: 'Female',
      age: 19,
      education: 'Higher Secondary',
      occupation: 'Student',
    },
    {
      name: 'Sreeshiva',
      gender: 'Female',
      age: 24,
      education: 'Postgraduate',
      occupation: 'Both',
    },
    {
      name: 'Anaswara',
      gender: 'Female',
      age: 25,
      education: 'Postgraduate',
      occupation: 'Working',
    },
    {
      name: 'Anulakshmi',
      gender: 'Female',
      age: 22,
      education: 'Undergraduate',
      occupation: 'Student',
    },
  ];

  // AQ Scale - Aggression Questionnaire (Buss & Perry, 1992)
  const characteristics = [
    'Extremely uncharacteristic of me',
    'Somewhat uncharacteristic of me',
    'Only slightly characteristic of me',
    'Somewhat characteristic of me',
    'Extremely characteristic of me',
  ];

  // ATQ Scale - Automatic Thoughts Questionnaire (Hollon & Kendall, 1980)
  const frequency = [
    'Not at all',
    'Sometimes',
    'Moderately often',
    'Often',
    'All the time',
  ];

  // Define AQ subscales based on the questions from the image
  // Physical Aggression: 1, 5, 9, 13, 17, 21, 24, 27, 29
  // Verbal Aggression: 2, 6, 10, 14, 18
  // Anger: 3, 7, 11, 15, 19, 22, 25
  // Hostility: 4, 8, 12, 16, 20, 23, 26, 28
  const aqSubscales = {
    physicalAggression: [0, 4, 8, 12, 16, 20, 23, 26, 28],
    verbalAggression: [1, 5, 9, 13, 17],
    anger: [2, 6, 10, 14, 18, 21, 24],
    hostility: [3, 7, 11, 15, 19, 22, 25, 27],
  };

  // Define ATQ subscales based on Hollon & Kendall, 1980
  // Personal Maladjustment (PMDC): 7, 10, 14, 20, 26
  // Negative Self-Concept (NSNE): 2, 3, 9, 21, 23, 24, 28
  // Low Self-Esteem (LSE): 17, 18
  // Helplessness: 29, 30
  const atqSubscales = {
    pmdc: [6, 9, 13, 19, 25],
    nsne: [1, 2, 8, 20, 22, 23, 27],
    lse: [16, 17],
    helplessness: [28, 29],
  };

  // Create profile types that align with real psychological patterns but with more randomness
  const responseProfiles = [
    // Regular profile - generally balanced, low aggression, moderate negative thoughts
    {
      name: 'Low Aggression / Moderate Negative Thoughts',
      weight: 0.4, // 40% of respondents
      aqBias: {
        physicalAggression: { bias: [2, 2, 3, 2, 1], weight: 1.0 }, // Lower physical aggression
        verbalAggression: { bias: [1, 2, 3, 2, 1], weight: 1.0 }, // Moderate verbal aggression
        anger: { bias: [1, 2, 3, 2, 1], weight: 1.0 }, // Moderate anger
        hostility: { bias: [1, 2, 3, 2, 1], weight: 1.0 }, // Moderate hostility
      },
      atqBias: {
        pmdc: { bias: [2, 2, 3, 2, 1], weight: 1.0 }, // Moderate personal maladjustment
        nsne: { bias: [2, 2, 3, 2, 1], weight: 1.0 }, // Moderate negative self-concept
        lse: { bias: [2, 2, 3, 2, 1], weight: 1.0 }, // Moderate low self-esteem
        helplessness: { bias: [2, 3, 3, 1, 1], weight: 1.0 }, // Low-moderate helplessness
      },
    },
    // High aggression profile - high aggression with moderate-high negative thoughts
    {
      name: 'High Aggression / High Negative Thoughts',
      weight: 0.2, // 20% of respondents
      aqBias: {
        physicalAggression: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher physical aggression
        verbalAggression: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher verbal aggression
        anger: { bias: [1, 1, 2, 3, 3], weight: 1.0 }, // High anger
        hostility: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher hostility
      },
      atqBias: {
        pmdc: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher personal maladjustment
        nsne: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher negative self-concept
        lse: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher low self-esteem
        helplessness: { bias: [1, 2, 2, 3, 1], weight: 1.0 }, // Moderate helplessness
      },
    },
    // Low aggression with high negative thoughts profile
    {
      name: 'Low Aggression / High Negative Thoughts',
      weight: 0.15, // 15% of respondents
      aqBias: {
        physicalAggression: { bias: [2, 3, 3, 1, 1], weight: 1.0 }, // Low physical aggression
        verbalAggression: { bias: [2, 2, 3, 2, 1], weight: 1.0 }, // Low-moderate verbal aggression
        anger: { bias: [2, 2, 3, 2, 1], weight: 1.0 }, // Low-moderate anger
        hostility: { bias: [1, 2, 3, 2, 1], weight: 1.0 }, // Moderate hostility
      },
      atqBias: {
        pmdc: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher personal maladjustment
        nsne: { bias: [1, 1, 2, 3, 3], weight: 1.0 }, // High negative self-concept
        lse: { bias: [1, 1, 1, 3, 3], weight: 1.0 }, // Very high low self-esteem
        helplessness: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher helplessness
      },
    },
    // High aggression with low negative thoughts profile
    {
      name: 'High Aggression / Low Negative Thoughts',
      weight: 0.1, // 10% of respondents
      aqBias: {
        physicalAggression: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher physical aggression
        verbalAggression: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher verbal aggression
        anger: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher anger
        hostility: { bias: [1, 1, 2, 3, 2], weight: 1.0 }, // Higher hostility
      },
      atqBias: {
        pmdc: { bias: [2, 3, 2, 1, 1], weight: 1.0 }, // Low personal maladjustment
        nsne: { bias: [2, 3, 2, 1, 1], weight: 1.0 }, // Low negative self-concept
        lse: { bias: [2, 3, 2, 1, 1], weight: 1.0 }, // Low low self-esteem
        helplessness: { bias: [3, 3, 2, 1, 1], weight: 1.0 }, // Very low helplessness
      },
    },
    // "Middle of the road" profile - people who tend to select middle options
    {
      name: 'Middle Response Bias',
      weight: 0.15, // 15% of respondents
      aqBias: {
        physicalAggression: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
        verbalAggression: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
        anger: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
        hostility: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
      },
      atqBias: {
        pmdc: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
        nsne: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
        lse: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
        helplessness: { bias: [1, 2, 4, 2, 1], weight: 1.0 }, // Center-weighted
      },
    },
  ];

  // Add more inconsistency - respondents often get fatigued or answer inconsistently
  const inconsistencyRate = 0.15; // 15% chance of inconsistency per question

  // Add response fatigue - tendency to give more patterned responses toward end of survey
  const fatigueFactor = 0.3; // As survey progresses, increase pattern-based responses

  // Set up timestamp generation with more realistic patterns
  const baseDate = new Date('2025-05-05T08:00:00'); // Start at 8 AM on May 5th
  let currentTime = baseDate;

  // Peak times when most people would take surveys
  const peakHours = [9, 12, 15, 20, 22]; // 9 AM, 12 PM, 3 PM, 8 PM, 10 PM

  // Make weekdays more likely than weekends for submissions
  const dayWeights = [1, 1, 1, 1, 1, 0.6, 0.4]; // Mon-Sun (May 5 2025 is a Monday)

  // Assign profiles to respondents - use weighted selection
  const assignedProfiles = [];
  for (let i = 0; i < numRows; i++) {
    // Calculate cumulative weights
    let totalWeight = responseProfiles.reduce(
      (sum, profile) => sum + profile.weight,
      0
    );
    let randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    // Select profile based on weight
    let selectedProfile = responseProfiles[0];
    for (const profile of responseProfiles) {
      cumulativeWeight += profile.weight;
      if (randomValue <= cumulativeWeight) {
        selectedProfile = profile;
        break;
      }
    }

    assignedProfiles.push(selectedProfile);
  }

  // Function to select a biased response based on subscale and question index
  function getBiasedResponse(profile, questionIndex, isAQ, questionNumber) {
    const subscales = isAQ ? aqSubscales : atqSubscales;
    const responseOptions = isAQ ? characteristics : frequency;

    // Calculate fatigue factor - increases as the survey progresses
    // First questionnaire: 29 questions, Second questionnaire: 30 questions
    const totalQuestions = isAQ ? 29 : 30;
    const surveyProgress = isAQ
      ? questionNumber / 29
      : (questionNumber + 29) / 59;

    // Increase inconsistency as survey progresses
    const adjustedInconsistencyRate =
      inconsistencyRate + surveyProgress * fatigueFactor;

    // Add response patterns common in real surveys:

    // 1. Middle response bias (selecting middle options more)
    if (Math.random() < 0.1 + surveyProgress * 0.2) {
      // Return middle option ("Only slightly characteristic" or "Moderately often")
      return responseOptions[2];
    }

    // 2. Straight-lining (answering the same for several questions in a row)
    if (questionNumber > 3 && Math.random() < 0.05 + surveyProgress * 0.25) {
      // Return same answer as "previous question" by picking a random response
      const straightLineOption = Math.floor(
        Math.random() * responseOptions.length
      );
      return responseOptions[straightLineOption];
    }

    // 3. Extreme responding (some people tend to use only endpoints)
    if (Math.random() < 0.08) {
      // Return either first or last option
      return Math.random() < 0.5 ? responseOptions[0] : responseOptions[4];
    }

    // Determine which subscale this question belongs to
    let subscaleKey = null;
    for (const [key, indices] of Object.entries(subscales)) {
      if (indices.includes(questionIndex)) {
        subscaleKey = key;
        break;
      }
    }

    // If no subscale found or we want to add inconsistency, use random response
    if (!subscaleKey || Math.random() < adjustedInconsistencyRate) {
      return responseOptions[
        Math.floor(Math.random() * responseOptions.length)
      ];
    }

    // Get the bias array for this subscale
    const biasArray = isAQ
      ? profile.aqBias[subscaleKey].bias
      : profile.atqBias[subscaleKey].bias;

    // Calculate weighted random index
    const totalWeight = biasArray.reduce((sum, weight) => sum + weight, 0);
    let randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = 0; i < biasArray.length; i++) {
      cumulativeWeight += biasArray[i];
      if (randomValue <= cumulativeWeight) {
        return responseOptions[i];
      }
    }

    // Fallback
    return responseOptions[Math.floor(Math.random() * responseOptions.length)];
  }

  // Function to simulate realistic timestamp
  function generateRealisticTimestamp(currentTime) {
    // Get current day of week (0-6, 0 is Sunday)
    const dayOfWeek = currentTime.getDay();
    const currentHour = currentTime.getHours();

    // Base increment (minutes)
    let baseIncrement = 30 + Math.floor(Math.random() * 90); // 30-120 minutes

    // Adjust for peak hours - submissions come faster during peak times
    const hourFactor = peakHours.includes(currentHour) ? 0.7 : 1.3;

    // Adjust for day of week - weekdays have more submissions than weekends
    const dayFactor = dayWeights[dayOfWeek];

    // Calculate final increment
    const finalIncrement = Math.floor(baseIncrement * hourFactor * dayFactor);

    // Add random minutes and seconds
    const minutesToAdd = finalIncrement;
    const secondsToAdd = Math.floor(Math.random() * 60);

    return new Date(
      currentTime.getTime() + (minutesToAdd * 60 + secondsToAdd) * 1000
    );
  }

  // Generate and append rows
  for (let i = 0; i < numRows; i++) {
    const row = [];
    const profile = assignedProfiles[i];
    const respondent = keralaRespondents[i];

    // Generate timestamp
    currentTime = generateRealisticTimestamp(currentTime);
    row.push(
      Utilities.formatDate(
        currentTime,
        Session.getScriptTimeZone(),
        'dd/MM/yyyy HH:mm:ss'
      )
    );

    // Add demographic info
    row.push(respondent.name);
    row.push(respondent.age);
    row.push(respondent.gender);
    row.push(respondent.education);
    row.push(respondent.occupation);

    // Add some randomness for how the person approaches the survey
    const hasResponsePattern = Math.random() < 0.3; // 30% chance a person has a specific response pattern
    let responsePattern = null;

    if (hasResponsePattern) {
      // Choose a response pattern
      const patternType = Math.random();
      if (patternType < 0.25) {
        // Alternating pattern (back and forth between options)
        responsePattern = 'alternating';
      } else if (patternType < 0.5) {
        // Zigzag pattern (gradually increasing then decreasing)
        responsePattern = 'zigzag';
      } else if (patternType < 0.75) {
        // Lazy pattern (tends toward middle options)
        responsePattern = 'lazy';
      } else {
        // Rush pattern (tends toward extremes)
        responsePattern = 'rush';
      }
    }

    // Section 1 - Aggression Questionnaire (29 questions)
    for (let j = 0; j < 29; j++) {
      // If person has a response pattern and is in the latter half of the questionnaire
      if (responsePattern && j > 14 && Math.random() < 0.7) {
        // Apply pattern-based response instead of psychologically consistent one
        if (responsePattern === 'alternating') {
          row.push(characteristics[j % 5]);
        } else if (responsePattern === 'zigzag') {
          row.push(characteristics[Math.abs((j % 8) - 4 + 1)]);
        } else if (responsePattern === 'lazy') {
          row.push(characteristics[Math.floor(Math.random() * 3) + 1]); // Middle 3 options
        } else if (responsePattern === 'rush') {
          row.push(characteristics[Math.random() < 0.5 ? 0 : 4]); // Extremes
        }
      } else {
        // Normal biased response
        row.push(getBiasedResponse(profile, j, true, j));
      }
    }

    // Section 2 - Automatic Thoughts Questionnaire (30 questions)
    for (let j = 0; j < 30; j++) {
      // If person has a response pattern and is deeper into the survey
      if (responsePattern && j > 10 && Math.random() < 0.8) {
        // Apply pattern-based response instead of psychologically consistent one
        if (responsePattern === 'alternating') {
          row.push(frequency[j % 5]);
        } else if (responsePattern === 'zigzag') {
          row.push(frequency[Math.abs((j % 8) - 4 + 1)]);
        } else if (responsePattern === 'lazy') {
          row.push(frequency[Math.floor(Math.random() * 3) + 1]); // Middle 3 options
        } else if (responsePattern === 'rush') {
          row.push(frequency[Math.random() < 0.5 ? 0 : 4]); // Extremes
        }
      } else {
        // Normal biased response
        row.push(getBiasedResponse(profile, j, false, j + 29));
      }
    }

    sheet.appendRow(row);
  }

  // Optional: Add metadata about profiles used
  const metadataSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Metadata') ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Metadata');

  metadataSheet.clear();
  metadataSheet.appendRow(['Profile Distribution']);
  metadataSheet.appendRow([
    'Profile Name',
    'Target %',
    'Actual Count',
    'Actual %',
  ]);

  // Count actual profile distribution
  const profileCounts = {};
  responseProfiles.forEach((profile) => {
    profileCounts[profile.name] = 0;
  });

  assignedProfiles.forEach((profile) => {
    profileCounts[profile.name]++;
  });

  // Add profile stats
  responseProfiles.forEach((profile) => {
    const count = profileCounts[profile.name];
    metadataSheet.appendRow([
      profile.name,
      (profile.weight * 100).toFixed(1) + '%',
      count,
      ((count / numRows) * 100).toFixed(1) + '%',
    ]);
  });
}

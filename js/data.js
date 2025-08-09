// Placeholder data: replace img and social links later
// Note on SEO: names and ringNames are plain text; alt text mirrors names.

const SUPERSTARS = [
  {
    id: 'khali',
    name: 'Dalip Singh Rana',
    ringName: 'The Great Khali',
  dob: 'August 27, 1972',
    birthplace: 'Dhiraina, India',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/khali.jpg',
    bio: 'The first Indian-born World Heavyweight Champion and WWE Hall of Famer; an iconic figure who paved the way for future talent.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/The_Great_Khali',
      instagram: 'https://www.instagram.com/thegreatkhali',
      facebook: 'https://www.facebook.com/TheGreatKhali/',
      youtube: 'https://www.youtube.com/@TheGreatKhali2572',
      wwe: 'https://www.wwe.com/superstars/the-great-khali'
    }
  },
  {
    id: 'gama-singh',
    name: 'Gardowar Singh Sahota',
    ringName: 'Gama Singh',
  dob: 'December 8, 1954',
    birthplace: 'Punjab, India',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/gama-singh.jpg',
    bio: 'Earliest Indian-origin talent featured by WWE in the 1980s; Jinder Mahal (nephew).',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Gama_Singh',
      instagram: 'https://www.instagram.com/gr8gamasingh',
      note: 'Jinder Mahal (nephew)'
    }
  },
  {
    id: 'tiger-ali-singh',
    name: 'Tiger Ali Singh',
    ringName: 'Tiger Ali Singh',
  dob: 'March 9, 1971',
    birthplace: 'Toronto, Ontario, Canada',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/tiger-ali-singh.jpg',
    bio: 'Active in WWE in the late 1990s and early 2000s; son of legendary wrestler Tiger Jeet Singh.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Tiger_Ali_Singh',
      related: [
        'https://en.wikipedia.org/wiki/Tiger_Jeet_Singh'
      ]
    }
  },
  {
    id: 'singh-brothers',
    name: 'Sunil Singh & Samir Singh',
    ringName: 'The Singh Brothers',
  dob: '',
    birthplace: 'Burnaby, British Columbia, Canada',
    gender: 'male',
    type: 'tag-team',
  photo: 'assets/superstars/singh-brothers.jpg',
    bio: 'Popular tag team aligned with Jinder Mahal; involved in major storylines.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/The_Bollywood_Boyz',
      instagram: 'https://www.instagram.com/harvsihra',
      wwe: [
        'https://www.wwe.com/superstars/samir-singh',
        'https://www.wwe.com/superstars/sunil-singh'
      ]
    }
  },
  {
    id: 'jinder-mahal',
    name: 'Yuvraj Singh Dhesi',
    ringName: 'Jinder Mahal',
  dob: 'July 19, 1986',
    birthplace: 'Calgary, Alberta, Canada',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/jinder-mahal.jpg',
    bio: 'Former WWE Champion; among the most successful Indian-origin performers.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Jinder_Mahal',
      instagram: 'https://www.instagram.com/rajthemaharaja',
      wwe: 'https://www.wwe.com/superstars/jinder-mahal'
    }
  },
  {
    id: 'akam',
    name: 'Sunny Dhinsa',
    ringName: 'Akam',
  dob: 'May 20, 1993',
    birthplace: 'Abbotsford, British Columbia, Canada',
    gender: 'male',
    type: 'tag-team',
  photo: 'assets/superstars/akam.jpg',
    bio: 'One half of the dominant Authors of Pain tag team; of Indian descent.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Akam_(wrestler)',
      instagram: 'https://www.instagram.com/sunnydhinsa'
    }
  },
  {
    id: 'kavita-devi',
    name: 'Kavita Dalal',
    ringName: 'Kavita Devi',
  dob: '20 September 1986',
    birthplace: 'Malvi, Jind District, Haryana, India',
    gender: 'female',
    type: 'singles',
  photo: 'assets/superstars/kavita-devi.jpg',
    bio: 'First Indian woman signed by WWE; competed in NXT and notable tournaments.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Kavita_Devi',
      instagram: 'https://www.instagram.com/kavitanxt'
    }
  },
  {
    id: 'jeet-rama',
    name: 'Satender Dagar',
    ringName: 'Jeet Rama',
  dob: '12 January 1981',
    birthplace: 'Sonipat district, Haryana, India',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/jeet-rama.jpg',
    bio: 'Indian wrestler who competed in NXT; currently COO of Wrestling Xtreme Mania in India.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Jeet_Rama',
      instagram: 'https://www.instagram.com/jeetrama_wwe',
      facebook: 'https://www.facebook.com/JAANU1217/'
    }
  },
  {
    id: 'mahabali-shera',
    name: 'Amanpreet Singh Randhawa',
    ringName: 'Mahabali Shera',
  dob: '2 May 1990',
    birthplace: 'Firozpur, Punjab, India',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/mahabali-shera.jpg',
    bio: 'From India’s Ring Ka King project; later signed with WWE in 2018.',
    socials: {
      instagram: 'https://www.instagram.com/mahabalishera',
      facebook: [
        'https://www.facebook.com/realmahabalishera',
        'https://www.facebook.com/amanpreet.randhawa.353/'
      ],
      x: 'https://x.com/MahabaliShera',
      website: [
        'https://www.indianlionshera.com/',
        'https://mahabalishera.com'
      ]
    }
  },
  {
    id: 'sanga',
    name: 'Saurav Gurjar',
    ringName: 'Sanga',
  dob: '26 September 1985',
    birthplace: 'Dabra, Madhya Pradesh, India',
    gender: 'male',
    type: 'tag-team',
  photo: 'assets/superstars/sanga.jpg',
    bio: 'Former kickboxing champion; part of Indus Sher with Veer Mahan in NXT.',
    socials: {
      instagram: 'https://www.instagram.com/thesauravgurjar',
      facebook: 'https://www.facebook.com/bheemmb111/',
      youtube: 'https://www.youtube.com/@off-beatparinde'
    }
  },
  {
    id: 'veer-mahaan',
    name: 'Rinku Singh Rajput',
    ringName: 'Veer Mahaan',
  dob: '8 August 1988',
    birthplace: 'Gopiganj, Uttar Pradesh, India',
    gender: 'male',
    type: 'tag-team',
  photo: 'assets/superstars/veer-mahaan.jpg',
    bio: 'Raw roster member known for his imposing presence and promising potential.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Rinku_Singh_(baseball)',
      instagram: 'https://www.instagram.com/realrinkurajput',
      facebook: 'https://www.facebook.com/WweRinkuRajput',
      threads: 'https://www.threads.net/@realrinkurajput'
    }
  },
  {
    id: 'shanky',
    name: 'Dilsher Shanky',
    ringName: 'Shanky',
  dob: '19 June 1992',
    birthplace: 'Jagadhri, Haryana, India',
    gender: 'male',
    type: 'tag-team',
  photo: 'assets/superstars/shanky.jpg',
    bio: 'Wrestler and Bollywood actor; aligned with Jinder Mahal in WWE; known for dance gimmick.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Shanky',
      instagram: 'https://www.instagram.com/dilsher.shanky'
    }
  },
  {
    id: 'giant-zanjeer',
    name: 'Sukhwinder Singh Grewal',
    ringName: 'Giant Zanjeer',
  dob: '',
    birthplace: '',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/giant-zanjeer.jpg',
    bio: 'Billed as the tallest Indian wrestler; appeared in Superstar Spectacle India.',
    socials: {
      instagram: 'https://www.instagram.com/sukhi_grewal99/',
      threads: 'https://www.threads.net/@sukhi_grewal99'
    }
  },
  {
    id: 'guru-raaj',
    name: 'Laxmikant Rajpoot',
    ringName: 'Guru Raaj',
  dob: '',
    birthplace: '',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/guru-raaj.jpg',
    bio: 'WWE’s first high-flying Indian wrestler; featured on NXT and 205 Live.',
    socials: {
      instagram: 'https://www.instagram.com/gururaajwwe/',
      facebook: 'https://www.facebook.com/laxmikant.rajpoot/',
      x: 'https://x.com/gururaajwwe',
      threads: 'https://www.threads.net/@gururaajwwe'
    }
  },
  {
    id: 'mustafa-ali',
    name: 'Mustafa Ali',
    ringName: 'Mustafa Ali',
  dob: 'March 28, 1986',
    birthplace: 'Bolingbrook, Illinois, U.S.',
    gender: 'male',
    type: 'singles',
  photo: 'assets/superstars/mustafa-ali.jpg',
    bio: 'Born to an Indian mother; known for in-ring talent and meaningful storytelling.',
    socials: {
      wikipedia: 'https://en.wikipedia.org/wiki/Mustafa_Ali',
      instagram: 'https://www.instagram.com/mustafa_ali/?hl=en',
      wwe: 'https://www.wwe.com/superstars/mustafa-ali',
      x: 'https://x.com/mustafaali_x?lang=en'
    }
  }
];

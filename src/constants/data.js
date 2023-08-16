export const menu = [
  {
    id: 1,
    title: "Dashboard",
    Imagepath: "/assets/dashboard.svg",
    route: "/",
    children: "",
  },
  {
    id: 2,
    title: "Practice",
    Imagepath: "/assets/practise.svg",
    route: "/practice",
    children: "",
  },
  {
    id: 3,
    title: "Provider",
    Imagepath: "/assets/provider.svg",
    route: "/provider",
    children: "",
  },
  {
    id: 4,
    title: "Patient",
    Imagepath: "/assets/patient.svg",
    route: "/patient",
    children: "",
  },
  {
    id: 5,
    title: "Documents",
    Imagepath: "/assets/documents.svg",
    children: [
      {
        id: 1,
        title: "CODING WITH AI",
        Imagepath: "/assets/codingwithai.svg",
        route: "/codingwithai",
      },
      {
        id: 2,
        title: "CODING MANUAL",
        Imagepath: "/assets/codingmanual.svg",
        route: "/codingmanual",
      },
    ],
  },
  {
    id: 6,
    title: "Tickets",
    Imagepath: "/assets/tickets.svg",
    route: "/tickets",
    children: "",
  },
  {
    id: 7,
    title: "Coding Library",
    Imagepath: "/assets/codinglib.svg",
    children: [
      {
        id: 1,
        title: "CPT CODE",
        Imagepath: "/assets/cpt-code.svg",
        route: "/cpt-code",
      },
      {
        id: 2,
        title: "ICD CODE",
        Imagepath: "/assets/icd-code.svg",
        route: "/icd-code",
      },
    ],
  },
];

export const cardsData = [
  {
    id: 1,
    path: "/assets/openticket.svg",
    status: "Open",
    numoftickets: "120",
  },
  {
    id: 2,
    path: "/assets/inprogressticket.svg",
    status: "In Progress",
    numoftickets: "120",
  },
  {
    id: 3,
    path: "/assets/completedticket.svg",
    status: "Completed",
    numoftickets: "120",
  },
  {
    id: 4,
    path: "/assets/pendingticket.svg",
    status: "Pending",
    numoftickets: "120",
  },
];

export const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "In Progress",
      data: [6, 12, 8, 5, 3, 1, 3],
      backgroundColor: "rgba(146, 101, 174, 1)", // Color for the bars
      barPercentage: 0.6, // Increase this value to increase the width of the bars
      categoryPercentage: 0.8, // Increase this value to increase the gap between the bars
    },
    {
      label: "Open",
      data: [8, 10, 6, 5, 6, 4, 10],
      backgroundColor: "rgba(103, 115, 123, 1)", // Color for the bars
      barPercentage: 0.6, // Increase this value to increase the width of the bars
      categoryPercentage: 0.8, // Increase this value to increase the gap between the bars
    },
    {
      label: "Completed",
      data: [10, 8, 4, 5, 9, 8, 5],
      backgroundColor: "rgba(0, 235, 186, 1)", // Color for the bars
      barPercentage: 0.6, // Increase this value to increase the width of the bars
      categoryPercentage: 0.8, // Increase this value to increase the gap between the bars
    },
    {
      label: "Pending",
      data: [12, 6, 2, 5, 2, 12, 2],
      backgroundColor: "rgba(255, 114, 63, 1)", // Color for the bars
      barPercentage: 0.6, // Increase this value to increase the width of the bars
      categoryPercentage: 0.8, // Increase this value to increase the gap between the bars
    },
  ],
};

export const documentsdata = [
  {
    id: 1,
    title: "Import",
    iconPath: "/assets/importdocuments.svg",
    amount: "120",
  },
  {
    id: 2,
    title: "Fax",
    iconPath: "/assets/fax.svg",
    amount: "120",
  },
  {
    id: 1,
    title: "Team Name",
    iconPath: "/assets/email.svg",
    amount: "120",
  },
  {
    id: 1,
    title: "Docuhub",
    iconPath: "/assets/docubub.svg",
    amount: "120",
  },
];

export const mockTable = [
  {
    id: 1,
    "Practice Name": "Isador",
    "Practice Code": "Kruger",
    "Team Name": "ikruger0@huffingtonpost.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-04-28T11:19:35Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 2,
    "Practice Name": "Brady",
    "Practice Code": "Gommery",
    "Team Name": "bgommery1@amazon.de",
    NPI: "NPI",
    "Taxonomy ID": "2022-12-11T17:35:54Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 3,
    "Practice Name": "Boycie",
    "Practice Code": "Drei",
    "Team Name": "bdrei2@uol.com.br",
    NPI: "NPI",
    "Taxonomy ID": "2021-04-25T04:40:04Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 4,
    "Practice Name": "Connie",
    "Practice Code": "Wooffinden",
    "Team Name": "cwooffinden3@desdev.cn",
    NPI: "NPI",
    "Taxonomy ID": "2022-04-12T17:18:02Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 5,
    "Practice Name": "Denni",
    "Practice Code": "Huie",
    "Team Name": "dhuie4@toplist.cz",
    NPI: "NPI",
    "Taxonomy ID": "2021-01-15T15:08:19Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 6,
    "Practice Name": "Denney",
    "Practice Code": "Moncarr",
    "Team Name": "dmoncarr5@jigsy.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-12-23T09:44:18Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 7,
    "Practice Name": "Nowell",
    "Practice Code": "Leeburn",
    "Team Name": "nleeburn6@reddit.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-05-02T23:30:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 8,
    "Practice Name": "Rosie",
    "Practice Code": "Mattaus",
    "Team Name": "rmattaus7@google.co.uk",
    NPI: "NPI",
    "Taxonomy ID": "2022-12-14T07:51:24Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 9,
    "Practice Name": "Hetti",
    "Practice Code": "Capnor",
    "Team Name": "hcapnor8@google.ru",
    NPI: "NPI",
    "Taxonomy ID": "2022-11-09T02:01:23Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 10,
    "Practice Name": "Sayre",
    "Practice Code": "Moriarty",
    "Team Name": "smoriarty9@usa.gov",
    NPI: "NPI",
    "Taxonomy ID": "2023-05-29T08:10:06Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 11,
    "Practice Name": "Kippie",
    "Practice Code": "McArtan",
    "Team Name": "kmcartana@nhs.uk",
    NPI: "NPI",
    "Taxonomy ID": "2021-07-18T23:40:11Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 12,
    "Practice Name": "Madalena",
    "Practice Code": "Waye",
    "Team Name": "mwayeb@yahoo.co.jp",
    NPI: "NPI",
    "Taxonomy ID": "2022-11-13T18:22:09Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 13,
    "Practice Name": "Norby",
    "Practice Code": "Filon",
    "Team Name": "nfilonc@admin.ch",
    NPI: "NPI",
    "Taxonomy ID": "2021-02-05T23:38:07Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 14,
    "Practice Name": "Jemima",
    "Practice Code": "Stovine",
    "Team Name": "jstovined@bloglines.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-05-14T00:26:26Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 15,
    "Practice Name": "Hermie",
    "Practice Code": "Evetts",
    "Team Name": "hevettse@example.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-01-09T06:08:10Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 16,
    "Practice Name": "Robb",
    "Practice Code": "Guage",
    "Team Name": "rguagef@nifty.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-11-18T02:35:10Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 17,
    "Practice Name": "Dave",
    "Practice Code": "Standall",
    "Team Name": "dstandallg@over-blog.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-03-01T14:37:21Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 18,
    "Practice Name": "Husein",
    "Practice Code": "Arlett",
    "Team Name": "harletth@squidoo.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-12-24T02:15:36Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 19,
    "Practice Name": "Zahara",
    "Practice Code": "Odgaard",
    "Team Name": "zodgaardi@studiopress.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-02-11T20:53:10Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 20,
    "Practice Name": "Curry",
    "Practice Code": "O'Codihie",
    "Team Name": "cocodihiej@slideshare.net",
    NPI: "NPI",
    "Taxonomy ID": "2020-06-28T00:30:46Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 21,
    "Practice Name": "Moria",
    "Practice Code": "Blenkharn",
    "Team Name": "mblenkharnk@bbb.org",
    NPI: "NPI",
    "Taxonomy ID": "2021-03-23T22:43:07Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 22,
    "Practice Name": "Dannie",
    "Practice Code": "Helleckas",
    "Team Name": "dhelleckasl@wordpress.org",
    NPI: "NPI",
    "Taxonomy ID": "2022-03-29T06:03:00Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 23,
    "Practice Name": "Gail",
    "Practice Code": "Benet",
    "Team Name": "gbenetm@diigo.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-05-31T08:42:44Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 24,
    "Practice Name": "Davon",
    "Practice Code": "Methven",
    "Team Name": "dmethvenn@ft.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-12-26T22:25:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 25,
    "Practice Name": "Bent",
    "Practice Code": "Godsell",
    "Team Name": "bgodsello@free.fr",
    NPI: "NPI",
    "Taxonomy ID": "2021-08-19T13:13:47Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 26,
    "Practice Name": "Arabella",
    "Practice Code": "Cham",
    "Team Name": "achamp@squidoo.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-05-31T19:23:11Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 27,
    "Practice Name": "Husain",
    "Practice Code": "Gilhooly",
    "Team Name": "hgilhoolyq@marriott.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-05-04T13:23:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 28,
    "Practice Name": "Susanna",
    "Practice Code": "Tredger",
    "Team Name": "stredgerr@chron.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-07-15T14:56:36Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 29,
    "Practice Name": "Xylina",
    "Practice Code": "Bunworth",
    "Team Name": "xbunworths@usnews.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-10-19T05:19:53Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 30,
    "Practice Name": "Baily",
    "Practice Code": "Ethridge",
    "Team Name": "bethridget@cbsnews.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-03-04T12:43:55Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 31,
    "Practice Name": "Berky",
    "Practice Code": "Laste",
    "Team Name": "blasteu@nih.gov",
    NPI: "NPI",
    "Taxonomy ID": "2020-07-17T05:07:27Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 32,
    "Practice Name": "Hana",
    "Practice Code": "Shoubridge",
    "Team Name": "hshoubridgev@multiply.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-04-22T17:24:13Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 33,
    "Practice Name": "Nolly",
    "Practice Code": "Rebert",
    "Team Name": "nrebertw@pagesperso-orange.fr",
    NPI: "NPI",
    "Taxonomy ID": "2022-03-31T04:40:42Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 34,
    "Practice Name": "Cassie",
    "Practice Code": "Akhurst",
    "Team Name": "cakhurstx@e-recht24.de",
    NPI: "NPI",
    "Taxonomy ID": "2021-09-19T05:41:32Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 35,
    "Practice Name": "Harris",
    "Practice Code": "Colvie",
    "Team Name": "hcolviey@google.es",
    NPI: "NPI",
    "Taxonomy ID": "2023-02-06T13:56:03Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 36,
    "Practice Name": "Reynard",
    "Practice Code": "Sulter",
    "Team Name": "rsulterz@auda.org.au",
    NPI: "NPI",
    "Taxonomy ID": "2021-08-19T18:47:57Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 37,
    "Practice Name": "Ruben",
    "Practice Code": "Rigge",
    "Team Name": "rrigge10@cafepress.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-03-24T05:01:06Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 38,
    "Practice Name": "Vince",
    "Practice Code": "Le Claire",
    "Team Name": "vleclaire11@wsj.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-07-09T12:20:49Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 39,
    "Practice Name": "Gery",
    "Practice Code": "Longhorne",
    "Team Name": "glonghorne12@nsw.gov.au",
    NPI: "NPI",
    "Taxonomy ID": "2021-05-02T22:15:40Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 40,
    "Practice Name": "Jakob",
    "Practice Code": "Owbrick",
    "Team Name": "jowbrick13@icq.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-03-08T18:52:46Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 41,
    "Practice Name": "Ernesta",
    "Practice Code": "Burmingham",
    "Team Name": "eburmingham14@admin.ch",
    NPI: "Bigender",
    "Taxonomy ID": "2020-05-12T08:02:51Z",
    "Creation Date": "1/01/01",
    Status: false,
  },
  {
    id: 42,
    "Practice Name": "Odetta",
    "Practice Code": "Skae",
    "Team Name": "oskae15@tripod.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-12-01T08:23:47Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 43,
    "Practice Name": "Denice",
    "Practice Code": "Alesio",
    "Team Name": "dalesio16@ucla.edu",
    NPI: "NPI",
    "Taxonomy ID": "2022-06-18T11:14:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 44,
    "Practice Name": "Kori",
    "Practice Code": "Dodds",
    "Team Name": "kdodds17@cornell.edu",
    NPI: "Genderqueer",
    "Taxonomy ID": "2021-12-14T21:12:09Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 45,
    "Practice Name": "Aura",
    "Practice Code": "St Clair",
    "Team Name": "astclair18@java.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-04-28T21:15:34Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 46,
    "Practice Name": "Luigi",
    "Practice Code": "Minshaw",
    "Team Name": "lminshaw19@un.org",
    NPI: "NPI",
    "Taxonomy ID": "2022-05-13T15:05:40Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 47,
    "Practice Name": "Herminia",
    "Practice Code": "Antuk",
    "Team Name": "hantuk1a@va.gov",
    NPI: "NPI",
    "Taxonomy ID": "2023-03-29T00:03:09Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 48,
    "Practice Name": "Ezra",
    "Practice Code": "Littrell",
    "Team Name": "elittrell1b@wiley.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-03-11T15:22:01Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 49,
    "Practice Name": "Thorin",
    "Practice Code": "Matantsev",
    "Team Name": "tmatantsev1c@pagesperso-orange.fr",
    NPI: "NPI",
    "Taxonomy ID": "2022-11-12T20:51:40Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 50,
    "Practice Name": "Gabbie",
    "Practice Code": "Nashe",
    "Team Name": "gnashe1d@google.de",
    NPI: "NPI",
    "Taxonomy ID": "2022-01-19T06:39:05Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 51,
    "Practice Name": "Ag",
    "Practice Code": "Gormley",
    "Team Name": "agormley1e@sbwire.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-09-08T18:00:03Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 52,
    "Practice Name": "Nert",
    "Practice Code": "Melloi",
    "Team Name": "nmelloi1f@technorati.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-10-19T10:44:04Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 53,
    "Practice Name": "Gallard",
    "Practice Code": "Hagan",
    "Team Name": "ghagan1g@devhub.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-06-29T02:16:19Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 54,
    "Practice Name": "Celeste",
    "Practice Code": "Riatt",
    "Team Name": "criatt1h@washington.edu",
    NPI: "NPI",
    "Taxonomy ID": "2021-06-28T06:26:02Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 55,
    "Practice Name": "Neilla",
    "Practice Code": "Adriani",
    "Team Name": "nadriani1i@miibeian.gov.cn",
    NPI: "NPI",
    "Taxonomy ID": "2020-11-12T16:24:30Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 56,
    "Practice Name": "Cornell",
    "Practice Code": "Trevain",
    "Team Name": "ctrevain1j@booking.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-10-21T17:36:37Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 57,
    "Practice Name": "Davy",
    "Practice Code": "Rook",
    "Team Name": "drook1k@vistaprint.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-04-08T17:02:03Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 58,
    "Practice Name": "Kettie",
    "Practice Code": "Zealander",
    "Team Name": "kzealander1l@salon.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-09-16T21:24:19Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 59,
    "Practice Name": "Abra",
    "Practice Code": "Moreby",
    "Team Name": "amoreby1m@msn.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-10-07T06:29:50Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 60,
    "Practice Name": "Charlton",
    "Practice Code": "Sare",
    "Team Name": "csare1n@vinaora.com",
    NPI: "Polygender",
    "Taxonomy ID": "2021-07-18T21:36:50Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 61,
    "Practice Name": "Giles",
    "Practice Code": "Clout",
    "Team Name": "gclout1o@samsung.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-06-08T18:35:46Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 62,
    "Practice Name": "Walther",
    "Practice Code": "Risebrow",
    "Team Name": "wrisebrow1p@cmu.edu",
    NPI: "NPI",
    "Taxonomy ID": "2020-08-23T17:01:19Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 63,
    "Practice Name": "Silvain",
    "Practice Code": "Akers",
    "Team Name": "sakers1q@blogtalkradio.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-07-06T13:23:33Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 64,
    "Practice Name": "Phyllida",
    "Practice Code": "Weiner",
    "Team Name": "pweiner1r@e-recht24.de",
    NPI: "Non-binary",
    "Taxonomy ID": "2021-10-15T20:06:03Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 65,
    "Practice Name": "Ker",
    "Practice Code": "Brunn",
    "Team Name": "kbrunn1s@bandcamp.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-11-16T23:20:00Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 66,
    "Practice Name": "Yvette",
    "Practice Code": "Crockett",
    "Team Name": "ycrockett1t@wix.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-06-21T20:23:14Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 67,
    "Practice Name": "Orelee",
    "Practice Code": "Cherm",
    "Team Name": "ocherm1u@google.pl",
    NPI: "NPI",
    "Taxonomy ID": "2021-08-04T06:16:44Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 68,
    "Practice Name": "Justis",
    "Practice Code": "Kissock",
    "Team Name": "jkissock1v@amazon.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-04-06T02:21:09Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 69,
    "Practice Name": "Dru",
    "Practice Code": "Frossell",
    "Team Name": "dfrossell1w@xing.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-02-26T00:03:10Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 70,
    "Practice Name": "Gustavo",
    "Practice Code": "Duligall",
    "Team Name": "gduligall1x@psu.edu",
    NPI: "NPI",
    "Taxonomy ID": "2023-02-07T00:31:12Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 71,
    "Practice Name": "Jasen",
    "Practice Code": "Warrillow",
    "Team Name": "jwarrillow1y@moonfruit.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-01-17T22:02:29Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 72,
    "Practice Name": "Drucy",
    "Practice Code": "Boc",
    "Team Name": "dboc1z@is.gd",
    NPI: "NPI",
    "Taxonomy ID": "2022-10-12T01:43:13Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 73,
    "Practice Name": "Libby",
    "Practice Code": "Nevison",
    "Team Name": "lnevison20@nasa.gov",
    NPI: "NPI",
    "Taxonomy ID": "2023-05-17T10:35:40Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 74,
    "Practice Name": "Lora",
    "Practice Code": "Vallender",
    "Team Name": "lvallender21@redcross.org",
    NPI: "NPI",
    "Taxonomy ID": "2023-03-12T21:24:16Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 75,
    "Practice Name": "Klara",
    "Practice Code": "Paley",
    "Team Name": "kpaley22@slate.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-07-18T04:44:06Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 76,
    "Practice Name": "Randal",
    "Practice Code": "Pengelly",
    "Team Name": "rpengelly23@miibeian.gov.cn",
    NPI: "NPI",
    "Taxonomy ID": "2021-11-01T10:48:26Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 77,
    "Practice Name": "Shanna",
    "Practice Code": "Meak",
    "Team Name": "smeak24@mac.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-06-13T03:33:39Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 78,
    "Practice Name": "Nonna",
    "Practice Code": "McConnachie",
    "Team Name": "nmcconnachie25@fotki.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-04-03T10:50:01Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 79,
    "Practice Name": "Pammi",
    "Practice Code": "Bousler",
    "Team Name": "pbousler26@npr.org",
    NPI: "NPI",
    "Taxonomy ID": "2021-12-06T20:04:10Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 80,
    "Practice Name": "Illa",
    "Practice Code": "Tarbet",
    "Team Name": "itarbet27@issuu.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-01-16T13:31:37Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 81,
    "Practice Name": "Ladonna",
    "Practice Code": "Courtin",
    "Team Name": "lcourtin28@java.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-12-22T03:18:08Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 82,
    "Practice Name": "Jordain",
    "Practice Code": "Udale",
    "Team Name": "judale29@answers.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-06-14T14:19:11Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 83,
    "Practice Name": "Remy",
    "Practice Code": "Harrad",
    "Team Name": "rharrad2a@w3.org",
    NPI: "NPI",
    "Taxonomy ID": "2021-08-04T01:50:32Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 84,
    "Practice Name": "Camellia",
    "Practice Code": "Batstone",
    "Team Name": "cbatstone2b@fc2.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-10-22T17:15:03Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 85,
    "Practice Name": "Errol",
    "Practice Code": "Dodshon",
    "Team Name": "edodshon2c@yale.edu",
    NPI: "NPI",
    "Taxonomy ID": "2020-09-06T23:30:21Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 86,
    "Practice Name": "Meara",
    "Practice Code": "Udie",
    "Team Name": "mudie2d@netscape.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-06-05T16:24:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 87,
    "Practice Name": "Enrique",
    "Practice Code": "Mariner",
    "Team Name": "emariner2e@discuz.net",
    NPI: "NPI",
    "Taxonomy ID": "2021-01-31T15:22:56Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 88,
    "Practice Name": "Jayme",
    "Practice Code": "Cuppleditch",
    "Team Name": "jcuppleditch2f@ted.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-10-26T04:04:24Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 89,
    "Practice Name": "Ernestus",
    "Practice Code": "Hardiker",
    "Team Name": "ehardiker2g@twitpic.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-11-26T01:03:59Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 90,
    "Practice Name": "Rees",
    "Practice Code": "Persian",
    "Team Name": "rpersian2h@scientificamerican.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-01-09T13:25:49Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 91,
    "Practice Name": "Derry",
    "Practice Code": "Steven",
    "Team Name": "dsteven2i@bing.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-07-09T16:49:38Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 92,
    "Practice Name": "Bartlett",
    "Practice Code": "Grewar",
    "Team Name": "bgrewar2j@123-reg.co.uk",
    NPI: "Genderfluid",
    "Taxonomy ID": "2020-07-25T20:10:17Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 93,
    "Practice Name": "Kermie",
    "Practice Code": "Currm",
    "Team Name": "kcurrm2k@ft.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-05-02T17:14:42Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 94,
    "Practice Name": "Kylen",
    "Practice Code": "Marzellano",
    "Team Name": "kmarzellano2l@purevolume.com",
    NPI: "NPI",
    "Taxonomy ID": "2023-03-06T16:46:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 95,
    "Practice Name": "Logan",
    "Practice Code": "Rogan",
    "Team Name": "lrogan2m@google.it",
    NPI: "NPI",
    "Taxonomy ID": "2022-03-23T12:16:56Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 96,
    "Practice Name": "Christoph",
    "Practice Code": "Kiffin",
    "Team Name": "ckiffin2n@blinklist.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-03-20T05:52:47Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 97,
    "Practice Name": "Brittney",
    "Practice Code": "Shilleto",
    "Team Name": "bshilleto2o@youtube.com",
    NPI: "NPI",
    "Taxonomy ID": "2022-10-29T13:00:01Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 98,
    "Practice Name": "Christoffer",
    "Practice Code": "Kief",
    "Team Name": "ckief2p@ycombinator.com",
    NPI: "NPI",
    "Taxonomy ID": "2020-10-03T07:14:45Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 99,
    "Practice Name": "Ellyn",
    "Practice Code": "Ovenden",
    "Team Name": "eovenden2q@w3.org",
    NPI: "NPI",
    "Taxonomy ID": "2020-09-13T05:26:39Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
  {
    id: 100,
    "Practice Name": "Ingrim",
    "Practice Code": "Plunket",
    "Team Name": "iplunket2r@discovery.com",
    NPI: "NPI",
    "Taxonomy ID": "2021-12-09T04:33:33Z",
    "Creation Date": "1/01/01",
    Status: true,
  },
];
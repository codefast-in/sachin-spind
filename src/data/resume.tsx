import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SmartphoneIcon } from "lucide-react";

export const DATA = {
  name: "Sachin Gadre",
  alternateNames: ["Sachin Gadare", "Sachin Spind", "Spind"],
  initials: "SG",
  url: "https://sachin-spind.vercel.app",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "React Native and full stack developer. I build production iOS and Android apps and web apps, currently healthcare apps at NeuroEquilibrium.",
  summary:
  "React Native and full stack software developer building production iOS and Android apps, currently on healthcare products at NeuroEquilibrium with React Native 0.84, TypeScript and Redux. Improved app performance by 60% and shipped releases that grew new users by 10%. Built [Tap In Shorts](/#projects) and [ZimCupid](/#projects), both live on Google Play and the App Store, and built Code Emergency with AIIMS Bhopal for emergency medical teams. Beyond mobile, I build full stack web apps with Next.js, Node.js, Express and MongoDB. I hold a [Master's degree in Computer Applications (MCA)](/#education). You may also know me as Sachin Gadare or Sachin Spind.",
  avatarUrl: "/avatar.jpg",
  skills: [
    "React Native",
    "Expo",
    "EAS",
    "React Navigation",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Material UI",
    "REST APIs",
    "Firebase",
    "Push Notifications",
    "Socket.io",
    "ZegoCloud",
    "Zoom SDK",
    "Stripe",
    "Google Maps API",
    "Deep Linking",
    "Social Login",
    "Node.js",
    "Express.js",
    "MongoDB",
    "VPS Deployment",
    "GitHub",
    "AWS CodeCommit",
    "Postman",
    "Google Play Store",
    "Apple App Store",
    "Claude",
    "Cursor",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sachinspindofficial@gmail.com",
    tel: "+919516905325",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/codefast-in",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sachin-spind/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sachin_SPind",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:sachinspindofficial@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "NeuroEquilibrium Diagnostic Systems",
      href: "https://www.neuroequilibrium.in/",
      badges: [],
      location: "Jaipur",
      title: "Software Engineer",
      logoUrl: "/neuro.png",
      start: "April 2026",
      end: "Present",
      description: "I build and maintain cross-platform healthcare apps in React Native and TypeScript, including patient management and health monitoring, with healthcare APIs, secure data handling and payments. I improved overall app performance by 60% and shipped 4 releases with new features that grew new users by 10%. I migrated the legacy app codebase to meet current Google Play and App Store guidelines, and owned a new app end to end: development, testing and release on both stores."
    }, {
      company: "Dev Technosys Private Limited",
      href: "https://devtechnosys.com/",
      badges: [],
      location: "Jaipur",
      title: "React Native Developer",
      logoUrl: "/devtech.png",
      start: "June 2025",
      end: "April 2026",
      description: "I designed, built and optimized cross-platform apps for international clients across industries. I built Tap In Shorts from scratch for a US client and delivered core features for the ZimCupid dating app; both are live on Google Play and the App Store."
    }, {
      company: "Beangate IT Solutions",
      href: "https://beangates.com/",
      badges: [],
      location: "Bhopal",
      title: "Mobile and Web Application Developer",
      logoUrl: "/beangate.png",
      start: "January 2023",
      end: "June 2025",
      description: "I built cross-platform React Native apps and responsive web interfaces with React, Next.js, Shadcn, Material UI and Next UI, integrating REST APIs with backend teams. I built Code Emergency with AIIMS Bhopal, and delivered client web projects, including Ramya Online Center: an e-commerce site with admin and employee panels on Node.js, Express and MongoDB, deployed on a Hostinger VPS."
    },

  ],
  education: [
    {
      school: "Technocrats Institute of Technology, Bhopal",
      href: "https://www.rgpv.ac.in/",
      degree: "Master of Computer Applications (MCA), RGPV",
      logoUrl: "/RGPVlogo.webp",
      start: "2022",
      end: "2024",
    },
    {
      school: "Govt. Autonomous Post Graduate College, Chhindwara",
      href: "https://rdvv.mponline.gov.in/portal/index.aspx",
      degree: "Bachelor of Computer Applications (BCA), RDVV",
      logoUrl: "/RDVVlogo.webp",
      start: "2018",
      end: "2021",
    },
    {
      school: "Higher Secondary",
      href: "https://mpbse.nic.in/",
      degree: "Physics, Chemistry and Maths with IT additional (PCM)",
      logoUrl: "/MPBoardlogo.jpg",
      start: "2016",
      end: "2021",
    },

  ],
  projects: [
    {
      title: "Tap In Shorts",
      href: "https://tapinshorts.com/",
      dates: "TAP IN SHORT ORIGINALS LLC (US)",
      active: true,
      description:
        "A short-video streaming app I built from scratch, owning the architecture, feature development and deployment. Series-based short videos with trimming, likes, comments, saves, sharing and deep linking, plus Stripe payments, social login and referral rewards with coins.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Stripe",
        "Social Login",
        "Deep Linking",
      ],
      links: [
        {
          type: "Website",
          href: "https://tapinshorts.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.just.tapin",
          icon: <SmartphoneIcon className="size-3" />,
        },
        {
          type: "iOS",
          href: "https://apps.apple.com/in/app/tap-in-shorts/id6762819306",
          icon: <SmartphoneIcon className="size-3" />,
        },
      ],
      image: "/projects/tapin-cover.jpg",
      video: "",
    },
    {
      title: "ZimCupid",
      href: "https://zimcupid.com/",
      dates: "Tendai Solutions LLC",
      active: true,
      description:
        "A dating app where I fixed critical chat failures by building reliable real-time messaging with Socket.io, integrated ZegoCloud audio and video calling and push notifications for messages, matches and calls, and published the app on both stores.",
      technologies: [
        "React Native",
        "Socket.io",
        "ZegoCloud",
        "Push Notifications",
      ],
      links: [
        {
          type: "Website",
          href: "https://zimcupid.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.zimcupid.live",
          icon: <SmartphoneIcon className="size-3" />,
        },
        {
          type: "iOS",
          href: "https://apps.apple.com/in/app/zimcupid/id1403505138",
          icon: <SmartphoneIcon className="size-3" />,
        },
      ],
      image: "/projects/zimcupid-cover.jpg",
      video: "",
    },
    {
      title: "Code Emergency",
      href: "",
      dates: "AIIMS Bhopal (onsite)",
      active: true,
      description:
        "Built with AIIMS Bhopal, a React Native app that guides emergency medical teams through critical care protocols in situations such as cardiac arrest and accidents. Continuous audio guidance and text-to-speech, offline access to protocols, tested across devices including background audio on iOS and Android.",
      technologies: [
        "React Native",
        "Expo Audio",
        "Expo Speech",
        "Redux",
        "React Navigation",
      ],
      links: [],
      image: "/projects/code-emergency-cover.jpg",
      video: "",
    },
    {
      title: "Patient App, tele-rehabilitation",
      href: "https://play.google.com/store/apps/details?id=com.nedsapp",
      dates: "NeuroEquilibrium",
      active: true,
      description:
        "The app patients use for online physiotherapy and counselling sessions with doctors over the Zoom Video SDK. I built OTP login and the appointment flow (session packs, slot booking, reschedule, cancel and join rules), fixed a billing gap in session booking, added week-wise home exercises and multi-language support, and upgraded it to React Native 0.84 with Android target API 36.",
      technologies: [
        "React Native",
        "TypeScript",
        "Zoom Video SDK",
        "Redux",
      ],
      links: [
        {
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.nedsapp",
          icon: <SmartphoneIcon className="size-3" />,
        },
      ],
      image: "/projects/patient-app-cover.jpg",
      video: "",
    },
    {
      title: "Ramya Online Center",
      href: "https://ramyaonlinecenter.com",
      dates: "April 2024 - July 2024",
      active: true,
      description:
        "An e-commerce site for a startup offering MP Online and CSC shop services in the Raisen district of Madhya Pradesh, with admin and employee panels, deployed on a Hostinger VPS.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next UI",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://ramyaonlinecenter.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/ramya.mp4",
    },
    {
      title: "Shakya Sales",
      href: "https://sakya-salse-lcfk.onrender.com/",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "HTML", "CSS", "Java Script", "Email JS"
      ],
      links: [
        {
          type: "Website",
          href: "https://sakya-salse-lcfk.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/codefast-in/Sakya-salse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shakya.png",
      video: "",
    },

  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;

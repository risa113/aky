import { getAsset } from '../utils/assets';
export const collegeInfo = {
  name: "AKY Polytechnic College",
  fullName: "AKY POLYTECHNIC COLLEGE",
  trust: "AKY Charitable and Educational Trust",
  established: 2015,
  doteCode: "592",
  aicteApproval: "Approved by AICTE, New Delhi",
  doteAffiliation: "Affiliated to Directorate of Technical Education (DOTE), Chennai",
  address: "4 / 254, Tirunelveli - Tenkasi Main Road, Near M.S. University, Seethaparpanallur Post, Tirunelveli - 627012, Tamil Nadu, India.",
  phones: ["+91 84890 10999", "+91 84891 10999"],
  email: "akypoly@gmail.com",
  founder: {
    name: "AKY Syed Abdul Kader",
    title: "Founder & Managing Trustee",
    image: getAsset("/images/about/founder.jpg"),
    quote: "All birds find shelter during a rain. But an Eagle avoids rain by flying above the Clouds.",
    scientistQuoteAuthor: "Dr. A.P.J. Abdul Kalam",
    chineseProverb: "While planning for a year – sow corn; While planning for a decade – plant trees; While planning for a life – train and educate people.",
    message: "AKY Polytechnic is established with a noble ambition to provide skill oriented technical education to the rural based students in the under developed areas of Tirunelveli and make them as Eagles to tackle all the hardships of the society. Engineering education is the activity of teaching knowledge and principles related to the professional practice of engineering. The diploma education includes the initial education for becoming an engineer in any advanced field of his study. The infrastructure facilities in the college are made available within the unique green environment and the serene atmosphere are greatly conductive to help the learning community.",
    vision: "As per this Chinese proverb, AKY Polytechnic College has been established with the primary ambition to train and educate young talents in various fields of engineering. Education in its general sense is a form of learning in which the knowledge, skills, values, beliefs and habits of a group of people are transferred from one generation to the next through discussion, teaching, training, and or research. We are very alert and ambitious that every student who gets his admission in AKY Polytechnic should complete his course with good percentage of marks and leave the campus with more than one offer for his appointment for his future career."
  },
  motto: ["Skill", "Knowledge", "Innovation", "Career"],
};

export const heroSlides = [
  {
    image: getAsset("/images/about/college-facts1.jpg"),
    title: "Main Campus Entrance Arch & Academic Wing",
    subtitle: "Opp. Vallavankottai Bus Stand, Tirunelveli - Tenkasi Highway",
    tag: "Campus Entrance"
  },
  {
    image: getAsset("/images/about/campus1.jpg"),
    title: "AKY Polytechnic College Main Academic Building",
    subtitle: "Modern multi-storey engineering wings with green landscaped grounds",
    tag: "Academic Complex"
  },
  {
    image: getAsset("/images/about/transport.jpg"),
    title: "College Bus Fleet for Safe & Punctual Transit",
    subtitle: "Covering all major transit routes across Tirunelveli, Tenkasi & Alangulam",
    tag: "Transport Network"
  },
  {
    image: getAsset("/images/about/placement.jpg"),
    title: "Building Careers with Assured Corporate Placements",
    subtitle: "Students holding multiple appointment offer letters from core engineering industries",
    tag: "Placement Success"
  },
  {
    image: getAsset("/images/gallery/mech/1.jpg"),
    title: "Advanced Heavy Lathe & Machine Tool Workshop",
    subtitle: "Intensive shop-floor hands-on engineering training from semester one",
    tag: "Engineering Labs"
  },
  {
    image: getAsset("/images/about/lifeataky.jpg"),
    title: "Interactive Classroom & Technical Seminar Sessions",
    subtitle: "Dedicated faculty mentorship guiding students in engineering fundamentals",
    tag: "Classroom Learning"
  },
  {
    image: getAsset("/images/about/culture.jpg"),
    title: "Vibrant Campus Life & Traditional Celebrations",
    subtitle: "Holistic student personality development through sports and cultural events",
    tag: "Campus Life"
  }
];

export const managementTeam = [
  {
    id: 1,
    name: "AKY Syed Abdul Kader",
    role: "Founder, Chairman & Managing Trustee",
    image: getAsset("/images/about/founder.jpg"),
    quote: "All birds find shelter during a rain. But an Eagle avoids rain by flying above the Clouds.",
    org: "AKY Charitable and Educational Trust",
    desc: "Philanthropist and educational visionary committed to bringing modern technical education and high-paying engineering careers to rural youth of Tirunelveli."
  },
  {
    id: 2,
    name: "Board of Trustees",
    role: "Governing Council & Management",
    image: getAsset("/images/about/college-facts2.jpg"),
    quote: "While planning for a life – train and educate people.",
    org: "AKY Charitable and Educational Trust",
    desc: "Overseeing state-of-the-art laboratory infrastructure, transport network across Tirunelveli-Tenkasi highway, student scholarships, and campus facilities."
  },
  {
    id: 3,
    name: "Academic Directorship & Principal",
    role: "Head of Institution & Academic Council",
    image: getAsset("/images/about/campus2.jpg"),
    quote: "Skill • Knowledge • Innovation • Career",
    org: "AKY Polytechnic College",
    desc: "Guiding faculty excellence, DOTE curriculum rigor, hands-on workshop training, and 100% placement assurance in leading engineering MNCs."
  }
];

export const departments = [
  {
    id: "civil-engineering",
    slug: "civil-engineering",
    code: "CE",
    title: "Civil Engineering",
    degree: "Diploma in Civil Engineering",
    duration: "3 Years Full Time (Direct 2nd Yr for +2/ITI)",
    intake: 60,
    icon: "architecture",
    iconColor: "text-[#e8a317]",
    iconBg: "bg-[#e8a317]",
    image: getAsset("/images/gallery/civil/1.jpg"),
    shortDesc: "Comprehensive instruction in Surveying, CAD & Structural Drafting, Soil Mechanics, Construction Material Testing, and Environmental Engineering.",
    overview: "The Department of Civil Engineering at AKY Polytechnic College imparts rigorous training in fundamental concepts and modern practices of civil infrastructure development. Students gain extensive hands-on experience in leveling, theodolite surveying, total station, concrete testing, and CAD building drafting.",
    vision: "To develop ethically grounded, innovative civil diploma engineers equipped with modern surveying and construction competencies capable of driving sustainable infrastructure.",
    laboratories: [
      { name: "Surveying Laboratory", desc: "Equipped with Total Stations, Digital Theodolites, Dumpy Levels, and Prismatic Compasses." },
      { name: "Material Testing & Strength of Materials Lab", desc: "Universal Testing Machine (UTM), compression testing machine, hardness testers, and impact testers." },
      { name: "Hydraulics & Fluid Machinery Lab", desc: "Venturimeter, orifice meters, centrifugal pumps, Pelton wheel, and pipe friction apparatus." },
      { name: "CAD & Civil Drafting Lab", desc: "High-performance workstations with AutoCAD, Revit, and structural analysis modeling software." },
      { name: "Environmental Engineering Lab", desc: "Water quality analysis, turbidity meter, pH meter, and BOD/COD incubators." }
    ],
    careers: [
      "Site Supervisor / Junior Engineer (PWD, Highway Dept, Metro Rail)",
      "CAD & BIM Drafting Specialist",
      "Surveying Specialist / GIS Field Engineer",
      "Quality Control & Material Testing Inspector",
      "Estimator & Billing Engineer in construction firms"
    ],
    syllabus: [
      "Engineering Mechanics & Building Materials",
      "Surveying I & II (Conventional and Advanced GPS/Total Station)",
      "Strength of Materials & Theory of Structures",
      "Water Supply & Sanitary Engineering",
      "Concrete Technology & Construction Management",
      "Computer Aided Building Planning and 3D Drafting"
    ]
  },
  {
    id: "mechanical-engineering",
    slug: "mechanical-engineering",
    code: "ME",
    title: "Mechanical Engineering",
    degree: "Diploma in Mechanical Engineering",
    duration: "3 Years Full Time (Direct 2nd Yr for +2/ITI)",
    intake: 60,
    icon: "settings",
    iconColor: "text-primary",
    iconBg: "bg-primary-container",
    image: getAsset("/images/gallery/mech/1.jpg"),
    shortDesc: "Advanced training in CAD/CAM design, CNC machining centers, Thermal fluid power, Mechatronics, and Industrial manufacturing safety.",
    overview: "Mechanical Engineering is the backbone of modern industrial manufacturing and automation. The department provides intensive shop-floor exposure covering CNC turning & milling, welding, foundry, automotive engines, heat transfer, and automated pneumatic systems.",
    vision: "To produce industry-ready mechanical diploma holders adept in modern design tools, precision manufacturing, and thermal sciences with leadership qualities.",
    laboratories: [
      { name: "Manufacturing Technology & Machine Shop", desc: "Heavy-duty lathe machines, shaping, slotting, milling, drilling, and grinding equipment." },
      { name: "CNC Machining Laboratory", desc: "Industry-standard CNC Lathe and CNC Vertical Machining Center (VMC) with FANUC/Siemens controllers." },
      { name: "Thermal Engineering & IC Engines Lab", desc: "Single & multi-cylinder petrol and diesel engine test rigs with computerized dynamometers." },
      { name: "Fluid Mechanics & Pneumatics Lab", desc: "Pneumatic logic trainer kits, hydraulic jacks, flow measurement benches, and gear pumps." },
      { name: "CAD/CAM & Simulation Lab", desc: "SolidWorks, Creo, Mastercam, and AutoCAD software on high-speed computing network." },
      { name: "Metrology & Quality Inspection Lab", desc: "Vernier calipers, micrometers, profile projectors, dial gauges, and surface roughness testers." },
      { name: "Mechatronics Lab", desc: "PLC programming trainers, electro-pneumatic valves, sensors, and robotics pick-and-place arms." }
    ],
    careers: [
      "CNC Programmer & Machine Operator",
      "Production & Manufacturing Supervisor",
      "Quality Assurance & Maintenance Technician",
      "Automotive Service Engineer / Assembly Specialist",
      "CAD Designer / Draftsman"
    ],
    syllabus: [
      "Manufacturing Processes & Workshop Practice",
      "Fluid Mechanics and Thermodynamics",
      "Strength of Materials and Machine Elements",
      "CNC Programming, CAD/CAM and Automation",
      "Automobile Engineering & Power Plant Systems",
      "Industrial Engineering and Factory Management"
    ]
  },
  {
    id: "eee",
    slug: "eee",
    code: "EEE",
    title: "Electrical & Electronics",
    degree: "Diploma in Electrical & Electronics Engineering",
    duration: "3 Years Full Time (Direct 2nd Yr for +2/ITI)",
    intake: 60,
    icon: "bolt",
    iconColor: "text-[#39A935]",
    iconBg: "bg-[#39A935]",
    image: getAsset("/images/course/cu-4.jpg"),
    shortDesc: "Power systems, AC/DC heavy motors, PLC automation, Electrical drafting, renewable energy grids, and high-voltage circuit protection.",
    overview: "The Department of Electrical & Electronics Engineering trains students in generation, transmission, distribution, and control of electrical energy. Practical training emphasizes domestic & industrial wiring, winding of transformers, PLC programming, solar PV installations, and power electronics drives.",
    vision: "To instill comprehensive technical knowledge in electrical machines, power electronics, and automation enabling graduates to spearhead energy transition.",
    laboratories: [
      { name: "Electrical Machines Laboratory", desc: "DC shunt/series motors, 3-phase alternators, synchronous motors, induction motors, and slip ring machines." },
      { name: "Power Electronics & Drives Lab", desc: "SCR, MOSFET, IGBT converter panels, PWM inverters, chopper circuits, and AC/DC speed controllers." },
      { name: "Control Systems & PLC Automation Lab", desc: "Programmable Logic Controllers (PLC), SCADA simulation software, and stepper motor control modules." },
      { name: "Electrical Wiring, Winding & Repair Lab", desc: "Armature winding jigs, industrial switchboards, earth testing apparatus, and residential electrical panels." },
      { name: "Electronics & Microcontroller Lab", desc: "8051 and Arduino development boards, digital multimeters, signal generators, and regulated DC supplies." }
    ],
    careers: [
      "Electrical Maintenance Supervisor (TANGEDCO, Railways, Metro)",
      "Substation Operator & Switchgear Technician",
      "PLC & Industrial Automation Technician",
      "Solar / Wind Renewable Energy Installation Engineer",
      "Licensed Electrical Contractor (C-License eligibility)"
    ],
    syllabus: [
      "Circuits and Electrical Networks",
      "DC & AC Electrical Machines",
      "Electronic Devices, Digital Logic and Microcontrollers",
      "Power Generation, Transmission and Switchgear Protection",
      "Power Electronics and Industrial Drives",
      "Energy Auditing and Renewable Power Systems"
    ]
  },
  {
    id: "ece",
    slug: "ece",
    code: "ECE",
    title: "Electronics & Comm.",
    degree: "Diploma in Electronics & Communication Engineering",
    duration: "3 Years Full Time (Direct 2nd Yr for +2/ITI)",
    intake: 60,
    icon: "sensors",
    iconColor: "text-primary-dark",
    iconBg: "bg-primary",
    image: getAsset("/images/gallery/ece/1.jpg"),
    shortDesc: "Microcontroller programming, VLSI principles, IoT embedded devices, wireless communication networks, and optical fiber transmission technology.",
    overview: "Electronics & Communication Engineering bridges hardware and software. Students learn semiconductor design, RF communication, wireless networking, audio-video transmission, embedded systems, PCB etching, and IoT sensor integration.",
    vision: "To cultivate competent electronics professionals capable of designing and maintaining cutting-edge telecommunication and embedded electronic systems.",
    laboratories: [
      { name: "Analog & Digital Communication Lab", desc: "AM/FM modulation trainers, digital PAM/PWM kits, spectrum analyzers, and RF transmission antennas." },
      { name: "Microcontroller & Embedded Systems Lab", desc: "ARM Cortex, 8051, PIC, and ESP32 IoT boards with sensor arrays and display modules." },
      { name: "VLSI Design & Simulation Lab", desc: "Xilinx Vivado, ModelSim, FPGA Spartan kits, and Verilog/VHDL simulation environments." },
      { name: "Optical Fiber & Microwave Lab", desc: "Laser diodes, optical fiber link test benches, power meters, and klystron microwave benches." },
      { name: "PCB Fabrication & Soldering Lab", desc: "PCB etching tanks, UV exposure units, drilling machines, and SMD soldering stations." }
    ],
    careers: [
      "Telecom & 5G Network Support Engineer (Jio, Airtel, BSNL)",
      "Embedded Systems & IoT Hardware Tester",
      "PCB Design & Assembly Technician",
      "Consumer Electronics Service Engineer",
      "Robotics and Sensor Interfacing Specialist"
    ],
    syllabus: [
      "Semiconductor Devices and Circuits",
      "Digital Electronics and Linear Integrated Circuits",
      "Analog & Digital Communication Systems",
      "Microcontroller Programming and Embedded C",
      "VLSI Design and Programmable Logic",
      "Optical Communication, Radar and Satellite Systems"
    ]
  }
];

export const facilities = [
  {
    id: "library",
    title: "Central Library",
    icon: "menu_book",
    image: getAsset("/images/about/library.jpg"),
    desc: "Extensive textbooks, national journals & digital reading room with DELNET access.",
    detail: "Over 12,000 engineering volumes, reference books, subscribed national technical journals, previous university question papers, and an automated digital library section with high-speed internet."
  },
  {
    id: "laboratories",
    title: "Modern Laboratories",
    icon: "science",
    image: getAsset("/images/gallery/mech/3.jpg"),
    desc: "High-end CNC, electrical machines, material testing & computing labs with industry equipment.",
    detail: "Over 20 well-equipped laboratories across Civil, Mechanical, EEE, and ECE disciplines adhering strictly to DOTE and AICTE safety and equipment standards."
  },
  {
    id: "sports",
    title: "Sports & Athletics",
    icon: "sports_cricket",
    image: getAsset("/images/about/sports.jpg"),
    desc: "Expansive grounds for cricket, volleyball, kabaddi, football & athletic track.",
    detail: "Dedicated Physical Education Director conducting regular inter-polytechnic tournaments, annual sports day, yoga sessions, and physical conditioning."
  },
  {
    id: "transport",
    title: "Bus Fleet Transport",
    icon: "directions_bus",
    image: getAsset("/images/about/transport.jpg"),
    desc: "Dedicated fleet of college buses operating across Tirunelveli, Tenkasi & Alangulam routes.",
    detail: "GPS-enabled institutional buses offering safe, punctual daily transit for day-scholar students and faculty covering all major towns in Tirunelveli and Tenkasi districts."
  },
  {
    id: "canteen",
    title: "Hygienic Canteen",
    icon: "restaurant",
    image: getAsset("/images/about/canteen.jpg"),
    desc: "Nutritious, freshly prepared meals, healthy snacks and refreshments daily.",
    detail: "Spacious dining hall monitored for utmost cleanliness and hygiene, serving nutritious South Indian breakfast, lunch, and tea at subsidized rates."
  },
  {
    id: "internet",
    title: "Internet & Wi-Fi",
    icon: "wifi",
    image: getAsset("/images/about/internet.jpg"),
    desc: "High-speed optical fiber connectivity campus-wide for digital learning and research.",
    detail: "100+ Mbps leased line fiber optic network providing uninterrupted internet access in computer centers, faculty rooms, and library."
  },
  {
    id: "auditorium",
    title: "Auditorium & Halls",
    icon: "theater_comedy",
    image: getAsset("/images/about/campus2.jpg"),
    desc: "Acoustically treated auditorium for technical symposiums, guest lectures and cultural events.",
    detail: "Fully furnished hall equipped with professional projection systems, high-fidelity sound, and air-conditioning for seminars and workshops."
  },
  {
    id: "hostel",
    title: "Secure Hostels",
    icon: "hotel",
    image: getAsset("/images/about/hostel.jpg"),
    desc: "Safe, warden-monitored residential facilities with study tables and RO drinking water.",
    detail: "Separate safe residential accommodations with 24/7 security, warden supervision, recreation rooms, and medical first-aid."
  },
  {
    id: "training",
    title: "Training & Dev",
    icon: "model_training",
    image: getAsset("/images/about/training-development.jpg"),
    desc: "Continuous soft-skills, communicative English and technical aptitude enhancement programs.",
    detail: "Regular career readiness workshops, CAD certification courses, mock group discussions, and personality grooming starting from semester 3."
  },
  {
    id: "placement",
    title: "Placement Support",
    icon: "handshake",
    image: getAsset("/images/about/placement.jpg"),
    desc: "Dedicated Placement Cell arranging campus interviews with leading industrial recruiters.",
    detail: "Active corporate tie-ups with automotive, civil infrastructure, manufacturing, and electrical engineering firms facilitating high placement conversion."
  }
];

export const recruiters = [
  { name: "TATA", division: "Motors & Steel", logo: getAsset("/images/patnar-logo/p-1.png"), color: "text-[#0756a6]" },
  { name: "TVS", division: "Motor Company", logo: getAsset("/images/patnar-logo/p-3.png"), color: "text-red-600" },
  { name: "ASHOK LEYLAND", division: "Commercial Vehicles", logo: getAsset("/images/patnar-logo/p-4.png"), color: "text-[#0756a6]" },
  { name: "MAHINDRA", division: "Automotive Division", logo: getAsset("/images/patnar-logo/p-5.png"), color: "text-red-700" },
  { name: "L&T", division: "Construction & Tech", logo: getAsset("/images/patnar-logo/p-6.png"), color: "text-[#0756a6]" },
  { name: "INFOSYS", division: "Technical Support", logo: getAsset("/images/patnar-logo/p-7.png"), color: "text-blue-600" }
];

export const initialNews = [
  {
    id: 1,
    title: "Admissions Open 2026–27 for 1st Year & Lateral Entry",
    category: "Admissions",
    date: "May 10, 2026",
    color: "bg-blue-100 text-[#0756a6]",
    summary: "Applications are now invited for 1st Year Diploma (after 10th/SSLC) and Direct 2nd Year Lateral Entry (after +2/ITI) across Civil, Mechanical, EEE, and ECE departments.",
    content: "AKY Polytechnic College announces the commencement of admissions for the academic year 2026–27. Scholarships are available for meritorious rural students, sports achievers, and first-generation graduates. Prospective candidates can apply online or visit the college campus admissions desk."
  },
  {
    id: 2,
    title: "Industrial Visit to Madurai Heavy Tech & Automation",
    category: "Student Activities",
    date: "Apr 26, 2026",
    color: "bg-green-100 text-[#39A935]",
    summary: "Mechanical and Electrical final year students completed an intensive on-site exposure program studying industrial boilers and automated robotic assembly lines.",
    content: "As part of practical industrial immersion, 85 diploma students from the Mechanical and EEE departments spent three days inspecting automated production plants, CNC machining centers, and heavy electrical switchgear substations in Madurai under faculty guidance."
  },
  {
    id: 3,
    title: "Annual College Day & District Sports Championship 2026",
    category: "Campus Events",
    date: "Mar 15, 2026",
    color: "bg-amber-100 text-[#e8a317]",
    summary: "A grand collegiate celebration recognizing academic gold medalists, project innovators, and athletic winners graced by regional industrial dignitaries.",
    content: "The 11th Annual Day and Sports Championship concluded with thrilling performances and athletic events. Managing Trustee AKY Syed Abdul Kader distributed trophies to academic toppers and placement achievers."
  },
  {
    id: 4,
    title: "State-Level Technical Symposium 'TECHSPARK 2026'",
    category: "Technical Events",
    date: "Feb 18, 2026",
    color: "bg-purple-100 text-purple-700",
    summary: "Over 350 polytechnic students from across Tamil Nadu participated in paper presentation, CAD modeling, circuit debugging, and robotics challenges.",
    content: "TECHSPARK 2026 provided a prestigious platform for budding polytechnic innovators to demonstrate their engineering solutions. Cash prizes and merit certificates were awarded to top innovators."
  }
];

export const galleryItems = [
  {
    id: 1,
    category: "Campus",
    title: "AKY Polytechnic College Red Arch Entrance Gate",
    imageUrl: getAsset("/images/about/college-facts1.jpg")
  },
  {
    id: 2,
    category: "Campus",
    title: "Campus Main Administration Building & Facade",
    imageUrl: getAsset("/images/about/campus1.jpg")
  },
  {
    id: 3,
    category: "Laboratories",
    title: "Mechanical Lathe Workshop & Students in Uniform",
    imageUrl: getAsset("/images/gallery/mech/1.jpg")
  },
  {
    id: 4,
    category: "Laboratories",
    title: "Civil Engineering Surveying Lab & Field Instruments",
    imageUrl: getAsset("/images/gallery/civil/1.jpg")
  },
  {
    id: 5,
    category: "Laboratories",
    title: "Electronics & Microcontroller Testing Lab",
    imageUrl: getAsset("/images/gallery/ece/1.jpg")
  },
  {
    id: 6,
    category: "Industrial Visits",
    title: "Student Training & Placement Offer Letters Distribution",
    imageUrl: getAsset("/images/about/placement.jpg")
  },
  {
    id: 7,
    category: "Campus",
    title: "AKY College Bus Transport Fleet",
    imageUrl: getAsset("/images/about/transport.jpg")
  },
  {
    id: 8,
    category: "Events",
    title: "Students Life at AKY Classroom & Interactive Seminars",
    imageUrl: getAsset("/images/about/lifeataky.jpg")
  },
  {
    id: 9,
    category: "Events",
    title: "Social Responsibility & Community Outreach Camp",
    imageUrl: getAsset("/images/about/social-responsibility.jpg")
  },
  {
    id: 10,
    category: "Campus",
    title: "Central Library & Digital Reading Hall",
    imageUrl: getAsset("/images/about/library.jpg")
  },
  {
    id: 11,
    category: "Events",
    title: "Annual Sports Tournament & Athletic Ground",
    imageUrl: getAsset("/images/about/sports.jpg")
  },
  {
    id: 12,
    category: "Events",
    title: "Traditional Cultural Festival & Pongal Celebration",
    imageUrl: getAsset("/images/about/culture.jpg")
  }
];

export const initialEnquiries = [
  {
    id: "ENQ-2026-001",
    studentName: "M. Vignesh Kumar",
    parentName: "Murugan S",
    phone: "+91 94862 11234",
    email: "vignesh.murugan@gmail.com",
    course: "Mechanical Engineering",
    qualification: "10th (SSLC)",
    percentage: "86.4%",
    date: "2026-09-08",
    status: "New",
    notes: "Interested in hostel accommodation and CNC lab training."
  },
  {
    id: "ENQ-2026-002",
    studentName: "K. Priya Dharshini",
    parentName: "Kasi Rajan T",
    phone: "+91 98421 78901",
    email: "priya.kasi@yahoo.com",
    course: "Electronics & Communication Engineering",
    qualification: "10th (SSLC)",
    percentage: "91.2%",
    date: "2026-09-07",
    status: "Contacted",
    notes: "Enquired about bus route from Tenkasi and fee scholarship."
  },
  {
    id: "ENQ-2026-003",
    studentName: "S. Mohamed Aslam",
    parentName: "Syed Ibrahim A",
    phone: "+91 82201 45678",
    email: "aslam.mohamed@outlook.com",
    course: "Electrical & Electronics Engineering",
    qualification: "+2 Higher Secondary (Lateral Entry)",
    percentage: "78.5%",
    date: "2026-09-06",
    status: "Follow-up",
    notes: "Applying for direct second year lateral entry admission."
  },
  {
    id: "ENQ-2026-004",
    studentName: "R. Manikandan",
    parentName: "Ramachandran P",
    phone: "+91 97910 65432",
    email: "mani.rc@gmail.com",
    course: "Civil Engineering",
    qualification: "10th (SSLC)",
    percentage: "74.0%",
    date: "2026-09-04",
    status: "Converted",
    notes: "Document verification completed; seat reserved."
  }
];

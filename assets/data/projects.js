const generateImages = (id, count) =>
    Array.from({ length: count }, (_, i) => `assets/img/projects/project${id}_${i + 1}.png`);

const projectsData = [
    {
        id: 1,
        title: "University Openhouse Dynamic Platform",
        tag: "Full-Stack Capstone Project",
        description: "<strong>From Static to Strategic:</strong> Re-engineered a legacy static university website into a <strong>Modern Dynamic Ecosystem</strong>. This project was driven by the need for real-time content control and enhanced user engagement through cross-platform integration.<br><br>• <strong>Smart CMS & Branding:</strong> Developed a custom CMS that empowers admins to manage multimedia content, typography, and site themes dynamically.<br>• <strong>Analytics Dashboard:</strong> Built an <strong>Admin Control Center</strong> that visualizes registration data and activity engagement through interactive real-time graphs.<br>• <strong>Omnichannel Experience:</strong> Integrated a seamless registration flow across both the <strong>Web Platform</strong> and a <strong>Line Official Account (Line OA)</strong>, featuring QR Code check-ins and activity tracking.<br>• <strong>Data Management:</strong> Full CRUD capabilities for managing participants, activities, and Q&A content with automated verification systems.",
        images: generateImages(1, 4),
        tech: ["HTML/CSS/Javascript", "Firebase", "Line Messaging API", "Data Visualization"],
        demo: "https://oph-web-40aea.web.app"
    },
    {
        id: 2,
        title: "Medium Content Engagement & Performance Analysis",
        tag: "Data Science Project",
        description: "An exploratory data analysis (EDA) project focused on identifying key factors that drive engagement for technical articles. <strong>Analyzed over 6,500 records</strong> to understand how metadata like title length and publication types influence reader interactions.<br><br>Key highlights include:<br>• <strong>Automated Auditing:</strong> Used YData-Profiling for rapid data health checks.<br>• <strong>Feature Engineering:</strong> Created custom metrics to test engagement hypotheses.<br>• <strong>Visual Insights:</strong> Leveraged Seaborn for complex multivariate analysis and correlation mapping.",
        images: generateImages(2, 4),
        tech: ["Python", "Pandas", "Seaborn", "YData-Profiling"],
        demo: "https://colab.research.google.com/drive/13_1fn-d9PQ5RDD-fb_ltT2G2wiN42ah-?usp=sharing"
    },
    {
        id: 3,
        title: "CineLog: Database-Driven Movie Review System",
        tag: "Software Development",
        description: "My foundational software project focusing on <strong>Relational Database Management</strong>. Developed a fully functional desktop application for cinema enthusiasts to manage and explore film reviews through a Python-integrated SQL database.<br><br>• <strong>Advanced SQL Logic:</strong> Implemented complex queries using <strong>JOINs</strong> and aggregate functions (SUM, COUNT) to sync real-time statistics.<br>• <strong>CRUD Architecture:</strong> Built a complete system for user authentication and content management.<br>• <strong>Data-Driven UI:</strong> Integrated <strong>Tkinter Treeview</strong> to render dynamic database records into an organized tabular interface.",
        images: generateImages(3, 3),
        tech: ["Python", "SQLite", "Tkinter", "Relational Database"],
        demo: "https://github.com/Chalotte026/Movie-Review-System/blob/main/project_1year/project1.py"
    },
    {
        id: 4,
        title: "Bangkok Travel: Cross-Platform Mobile App",
        tag: "Mobile Development",
        description: "A location-based mobile application developed with <strong>.NET MAUI</strong> and <strong>C#</strong>. Designed to help users discover and manage travel destinations in Bangkok with real-time location services.<br><br>• <strong>Geolocator Integration:</strong> Implemented hardware-level GPS requests to find locations near the user.<br>• <strong>Local Data Storage:</strong> Leveraged <strong>SQLite</strong> for asynchronous data persistence (CRUD operations).<br>• <strong>Platform Navigation:</strong> Developed custom logic to trigger native map applications (Apple Maps/Google Maps) based on the device's operating system.",
        images: generateImages(4, 5),
        tech: [".NET MAUI", "C#", "SQLite", "Geolocation API"],
        demo: "https://github.com/Chalotte026/BKTravelApp"
    },
    {
        id: 5,
        title: "Zoo Classifier: AI-Powered Species Categorization",
        tag: "Artificial Intelligence",
        description: "An intelligent desktop application that bridges <strong>Machine Learning</strong> and <strong>Software Engineering</strong>. I implemented the <strong>Logistic Model Tree (LMT)</strong> algorithm to classify animal species with a high precision rate.<br><br>• <strong>High-Performance AI:</strong> Achieved a <strong>96.03% classification accuracy</strong> through rigorous cross-validation using the Weka API.<br>• <strong>Interactive GUI:</strong> Developed a Java Swing interface that allows users to input 16 physiological attributes for instant AI predictions.<br>• <strong>Data-Model Integration:</strong> Successfully mapped complex ML output into a user-friendly desktop environment.",
        images: generateImages(5, 5),
        tech: ["Java", "Weka API", "Machine Learning", "Hoeffding Tree"],
        demo: "https://github.com/Chalotte026/Zoo-Classifier-Java-ML/blob/main/src/zooWithGUI.java"
    },
    {
        id: 6,
        title: "Sales Performance Intelligence Dashboard",
        tag: "Business Intelligence",
        description: "An advanced **Power BI** dashboard developed to decode business performance metrics. I visualized <strong>$955K in sales data</strong> to uncover profitability trends across various product categories and regional markets.<br><br>• <strong>Strategic Insights:</strong> Identified key profit drivers and underperforming segments through multi-dimensional analysis.<br>• <strong>Geospatial Mapping:</strong> Utilized map visualizations to track sales distribution across global cities.<br>• <strong>Operational Metrics:</strong> Analyzed shipping modes and customer segments to optimize business workflows.",
        images: generateImages(6, 6),
        tech: ["Power BI", "Data Visualization", "DAX", "Business Analytics"],
        demo: "" 
    }

];

const allTags = [...new Set(projectsData.map(project => project.tag))];
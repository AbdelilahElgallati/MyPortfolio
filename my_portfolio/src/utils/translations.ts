export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            formations: 'Education',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            name: 'Abdelilah Elgallati',
            title: 'AI, Machine Learning & Data Engineer',
            tagline: 'Turning data into intelligent, production-ready products',
            status: 'Master\'s graduate (July 2026) · Available immediately',
            cta: 'Explore My Work',
            cv: 'Download CV'
        },
        about: {
            title: 'About Me',
            bio: 'I am an AI & Data engineer holding two Master\'s degrees (Sorbonne Paris Nord University and Sidi Mohamed Ben Abdellah University, both completed in July 2026). I build end-to-end intelligent systems: from large-scale machine learning and recommender systems to RAG assistants and full-stack SaaS platforms. Most recently, I worked as an AI & MLOps Engineer Intern at eGlobal Digital on a multi-role virtual exhibition platform combining FastAPI, Next.js, RAG, Whisper and real-time features.',
            status: 'I am actively looking for a junior role in AI / ML engineering, GenAI & NLP, data science or software engineering. I am available immediately, open to relocation worldwide, comfortable with business travel, and happy to work remotely.',
            funFact: 'Fun fact: I can debug code faster with a cup of coffee! ☕',
            languagesTitle: 'Languages',
            languages: [
                { name: 'Arabic', level: 'Native' },
                { name: 'French', level: 'Fluent' },
                { name: 'English', level: 'Professional' }
            ],
            highlights: [
                { value: '2', label: 'Master\'s degrees (2026)' },
                { value: '3.6M', label: 'Samples in my CTR challenge pipeline' },
                { value: '0.9495', label: 'Validation AUC (MM-CTR)' },
                { value: '6 mo', label: 'AI & MLOps internship' }
            ]
        },
        formations: {
            title: 'Education',
            items: [
                {
                    degree: 'Master 2 (M2) in Computer Science for Data Exploration and Decision Support (EIDD)',
                    institution: 'Sorbonne Paris Nord University, Paris',
                    year: '2025 - July 2026',
                    description: 'Graduated July 2026. Master 2 degree in data science and decision-support systems, business intelligence and machine learning. Dual degree program with USMBA Fez.'
                },
                {
                    degree: 'Master\'s Degree in Web Intelligence and Data Science (WISD)',
                    institution: 'Sidi Mohamed Ben Abdellah University, Fez',
                    year: '2024 - July 2026',
                    description: 'Graduated July 2026. Web intelligence, data science, NLP and machine learning. Dual degree program with Sorbonne Paris Nord University.'
                },
                {
                    degree: 'Bachelor\'s Degree in Software Engineering and Information Systems',
                    institution: 'Higher School of Technology, Essaouira',
                    year: '2023 - 2024',
                    description: 'Software engineering, information systems, system design and development practices.'
                },
                {
                    degree: 'University Diploma of Technology (DUT) in Computer Science',
                    institution: 'Higher School of Technology, Essaouira',
                    year: '2021 - 2023',
                    description: 'Computer science fundamentals and practical applications.'
                },
                {
                    degree: 'Baccalaureate in Mathematical Sciences B',
                    institution: 'Mohammed 5 High School, Essaouira',
                    year: '2020 - 2021',
                    description: 'Advanced mathematics and scientific studies.'
                }
            ],
            certificationsTitle: 'Certifications',
            certifications: [
                { name: 'Data Ingestion with Pandas', issuer: '365 Data Science', year: '2025' },
                { name: 'Machine Learning in Python', issuer: '365 Data Science', year: '2025' },
                { name: 'Deep Learning with TensorFlow 2', issuer: '365 Data Science', year: '2025' },
                { name: 'Power BI', issuer: '365 Data Science', year: '2025' },
                { name: 'Introduction to Data and Data Science', issuer: '365 Data Science', year: '2025' }
            ]
        },
        experience: {
            title: 'Experience',
            items: [
                {
                    title: 'AI & MLOps Engineer Intern',
                    company: 'eGlobal Digital, Casablanca',
                    duration: '02/2026 - 07/2026',
                    description: 'Contributed to IVEP, an AI-powered SaaS virtual-exhibition platform with immersive 3D environments and Admin, Organizer, Enterprise and Visitor portals. Worked on RAG-based assistance, multilingual translation and Whisper transcription, built recommendation/matchmaking features, and worked across backend, AI, data and deployment (Docker, Redis, WebSockets/SSE).',
                    technologies: ['FastAPI', 'Next.js', 'MongoDB', 'Redis', 'Docker', 'RAG', 'Whisper', 'WebSockets/SSE']
                },
                {
                    title: 'Web Developer Intern',
                    company: 'Big4Com, Marrakech',
                    duration: '04/2024 - 06/2024',
                    description: 'Developed MyInvoice, an automated invoicing platform for small businesses and freelancers. Designed RESTful APIs and built a React frontend with customer management and PDF invoice generation.',
                    technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'REST API']
                },
                {
                    title: 'Web Developer Intern',
                    company: 'Big4Com, Marrakech',
                    duration: '04/2023 - 06/2023',
                    description: 'Developed a travel-agency platform with online booking and an administrative back office. Designed the relational database and a responsive interface for multiple devices.',
                    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS']
                },
                {
                    title: 'Web Developer Intern',
                    company: 'Province of Essaouira',
                    duration: '06/2022',
                    description: 'Developed an employee management website, with database design using the Merise methodology.',
                    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Merise']
                }
            ]
        },
        skills: {
            title: 'Skills',
            categories: {
                ml: 'Machine Learning & Data',
                genai: 'GenAI, NLP & Search',
                backend: 'Backend',
                frontend: 'Frontend & Mobile',
                data: 'Databases',
                tools: 'Infrastructure & Tools',
                soft: 'Soft Skills'
            },
            items: {
                ml: ['Python', 'PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation', 'Recommender Systems', 'Computer Vision (YOLOv8, OpenCV)', 'Multimodal Learning', 'Power BI'],
                genai: ['LLMs', 'RAG', 'LangChain', 'LlamaIndex', 'Sentence-Transformers', 'Hugging Face Transformers', 'FAISS', 'ChromaDB', 'CLIP', 'Whisper', 'Semantic Search', 'Multilingual NLP'],
                backend: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'SSE', 'JWT Authentication', 'Scrapy', 'Background / Scheduled Jobs'],
                frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Expo / React Native', 'Three.js', 'React Three Fiber'],
                data: ['SQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Prisma', 'Redis'],
                tools: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'PM2', 'Git & GitHub', 'Vercel', 'Hetzner VPS', 'Cloudflare R2', 'Playwright', 'Postman', 'CI/CD concepts'],
                soft: ['Problem solving', 'Teamwork', 'Adaptability', 'Autonomy', 'Clear technical communication']
            }
        },
        projects: {
            title: 'Projects',
            description: 'A selection of my AI, data and software engineering work',
            viewGithub: 'View on GitHub',
            liveDemo: 'Live Demo',
            privateRepo: 'Private repository (internship project)',
            featured: 'Featured',
            others: 'More Projects',
            loading: 'Loading projects...',
            error: 'Failed to load projects. Please try again later.',
            items: [
                {
                    name: 'Intelligent Virtual Exhibition Platform (IVEP)',
                    featured: true,
                    description: 'Production-oriented, multi-role SaaS for virtual events (Admin, Organizer, Enterprise, Visitor) with immersive 3D exhibitions, real-time chat (WebSockets + Redis pub/sub), SSE notifications, Stripe payments, Daily.co meetings, a scoped RAG assistant, Whisper transcription and EN/FR/AR translation. Built during my internship at eGlobal Digital, 30+ backend domain modules.',
                    technologies: ['FastAPI', 'Next.js', 'TypeScript', 'MongoDB', 'Redis', 'ChromaDB', 'Whisper', 'Stripe', 'Docker', 'Nginx'],
                    githubUrl: null,
                    demoUrl: null
                },
                {
                    name: 'WWW 2025 MM-CTR Challenge',
                    featured: true,
                    description: 'Multimodal click-through-rate prediction for short-video recommendation on 3.6M training samples. CLIP image/text embeddings (512D to normalized 128D) feed a CTR model combining categorical embeddings, a 2-layer/8-head Transformer, a Deep Cross Network and a DNN. Reached 0.9495 validation AUC, trained on 2x Tesla T4 GPUs.',
                    technologies: ['PyTorch', 'CLIP', 'Transformers', 'Deep Cross Network', 'Hugging Face', 'Pandas'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/WWW-2025-MM-CTR-Challenge-Task-1-2-Solution',
                    demoUrl: null
                },
                {
                    name: 'Course Materials RAG',
                    featured: true,
                    description: 'Multilingual RAG assistant that answers questions from PDFs, Markdown and YouTube transcripts. Uses 768D Sentence-Transformer embeddings, FAISS, MMR diversity, course-scoped retrieval with fallback, source attribution and Llama 3.3 70B via Groq.',
                    technologies: ['FastAPI', 'React', 'TypeScript', 'FAISS', 'Sentence-Transformers', 'Groq', 'Llama 3.3'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Course-Materials-RAG',
                    demoUrl: null
                },
                {
                    name: 'MovieRec: Adaptive Hybrid Recommender',
                    featured: true,
                    description: 'Hybrid movie recommender on MovieLens 100K with TMDB enrichment. Recommendation weights adapt to how many ratings a user has (popularity, content-based, collaborative filtering) to handle cold start and progressive personalization.',
                    technologies: ['Python', 'Flask', 'React', 'TypeScript', 'MongoDB', 'TF-IDF', 'Collaborative Filtering'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Movie-Recommender-System-Project',
                    demoUrl: null
                },
                {
                    name: 'Internship Aggregator',
                    featured: true,
                    description: 'Platform that scrapes, stores and serves internship listings. Scheduled Scrapy crawlers, a FastAPI backend with paginated search, statistics, scrape-status and manual-trigger endpoints, and a Next.js frontend.',
                    technologies: ['FastAPI', 'Scrapy', 'Supabase', 'APScheduler', 'Next.js', 'Tailwind CSS'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Internship',
                    demoUrl: null
                },
                {
                    name: 'AutoTollBooth',
                    featured: true,
                    description: 'Computer-vision app that detects and tracks vehicles in traffic videos and counts inflow/outflow across a configurable line. Selectable YOLOv8 model sizes, adjustable confidence threshold and live annotated preview.',
                    technologies: ['YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/AutoTollBooth',
                    demoUrl: null
                },
                {
                    name: 'Anime Recommendation System',
                    description: 'Recommendation app built on a cleaned and Jikan-enriched anime catalog. SVD prototyping in notebooks, with a production TF-IDF and cosine-similarity engine served via Flask and a React/TypeScript frontend.',
                    technologies: ['Python', 'Pandas', 'Flask', 'React', 'TF-IDF'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Anime-Ratings-Analysis-Recommender-System',
                    demoUrl: null
                },
                {
                    name: 'Terrasse Bleue',
                    description: 'Café ordering platform with an Expo mobile app, a Next.js admin dashboard and public menu, a backend API, and PostgreSQL with Prisma migrations and structured seed data, in a pnpm monorepo.',
                    technologies: ['Expo', 'Next.js', 'PostgreSQL', 'Prisma', 'Node.js'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Terrasse-Bleue',
                    demoUrl: null
                },
                {
                    name: 'SwapChic',
                    description: 'Full-stack marketplace with JWT/Passport authentication, media uploads (Cloudinary), Redis-backed services and Socket.IO real-time features.',
                    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.IO'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/SwapChic',
                    demoUrl: null
                },
                {
                    name: 'Robust Sentiment Analysis',
                    description: 'Modular NLP experimentation pipeline for sentiment classification and robustness against textual adversarial attacks, with separate preprocessing, model, evaluation and Docker components.',
                    technologies: ['Python', 'TensorFlow', 'Hugging Face', 'NLP', 'Docker'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Analyse-de-sentiment-robuste-face-aux-attaques-adversariales-textuelles',
                    demoUrl: null
                },
                {
                    name: 'Hate Speech Detection',
                    description: 'NLP and machine learning system that detects and classifies hate speech in text.',
                    technologies: ['Python', 'Jupyter Notebook', 'NLP', 'Machine Learning'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Hate-Speech-Detection',
                    demoUrl: null
                },
                {
                    name: 'Fruit Vision AI',
                    description: 'Web interface that integrates a Roboflow segmentation API to detect fruits in uploaded or linked images and show nutrition information.',
                    technologies: ['React', 'Tailwind CSS', 'Roboflow API'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Fruits-Segmentations-Web',
                    demoUrl: null
                },
                {
                    name: 'Coach_Poche',
                    description: 'AI fitness-coach app that generates weekly exercise plans from the user\'s profile, goals, sport and equipment using Llama 3.3 70B.',
                    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Groq'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Coach_Poche',
                    demoUrl: null
                },
                {
                    name: 'MyInvoice',
                    description: 'Invoicing platform for small businesses and freelancers with client, product and invoice management, history, dark mode and an Arabic UI. Based on my Big4Com internship.',
                    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/MyInvoice',
                    demoUrl: null
                },
                {
                    name: 'Travel Agency Website',
                    description: 'Travel agency management system with tour packages, booking, customer management and a responsive design.',
                    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Agence_Voyage',
                    demoUrl: null
                }
            ]
        },
        contact: {
            title: 'Get In Touch',
            description: 'I am available immediately. Whether you have a role, a project or a question, feel free to reach out.',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message',
                success: 'Message sent successfully!',
                error: 'Failed to send message. Please try again.'
            },
            info: {
                title: 'Contact Information',
                email: 'Email',
                phone: 'Phone',
                phoneValue: '+212 708135350',
                location: 'Location',
                locationValue: 'Essaouira, Morocco (open to relocation worldwide)',
                availability: 'Available for',
                availabilityValue: 'Full-time roles, internships, remote and international opportunities',
                linkedin: 'https://linkedin.com/in/abdelilah-elgallati',
                github: 'https://github.com/AbdelilahElgallati'
            }
        },
        footer: {
            rights: 'All rights reserved.',
            email: 'abdelilah.elgallati6@gmail.com',
            contact: 'Contact'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            formations: 'Formation',
            experience: 'Expérience',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact'
        },
        hero: {
            name: 'Abdelilah Elgallati',
            title: 'Ingénieur IA, Machine Learning & Data',
            tagline: 'Transformer les données en produits intelligents prêts pour la production',
            status: 'Diplômé de Master (juillet 2026) · Disponible immédiatement',
            cta: 'Découvrir Mon Travail',
            cv: 'Télécharger le CV'
        },
        about: {
            title: 'À Propos de Moi',
            bio: 'Ingénieur IA & Data titulaire de deux Masters (Université Sorbonne Paris Nord et Université Sidi Mohamed Ben Abdellah, tous deux obtenus en juillet 2026). Je conçois des systèmes intelligents de bout en bout : de l\'apprentissage automatique à grande échelle et des systèmes de recommandation aux assistants RAG et aux plateformes SaaS full-stack. Récemment, j\'ai effectué un stage d\'ingénieur IA & MLOps chez eGlobal Digital sur une plateforme d\'exposition virtuelle multi-rôles combinant FastAPI, Next.js, RAG, Whisper et des fonctionnalités temps réel.',
            status: 'Je recherche activement un poste junior en ingénierie IA / ML, GenAI & NLP, data science ou génie logiciel. Je suis disponible immédiatement, ouvert à la mobilité internationale et aux déplacements professionnels, et à l\'aise avec le télétravail.',
            funFact: 'Fait amusant : Je peux déboguer du code plus rapidement avec une tasse de café ! ☕',
            languagesTitle: 'Langues',
            languages: [
                { name: 'Arabe', level: 'Langue maternelle' },
                { name: 'Français', level: 'Courant' },
                { name: 'Anglais', level: 'Professionnel' }
            ],
            highlights: [
                { value: '2', label: 'Masters (2026)' },
                { value: '3,6M', label: 'Échantillons dans mon pipeline CTR' },
                { value: '0,9495', label: 'AUC de validation (MM-CTR)' },
                { value: '6 mois', label: 'Stage IA & MLOps' }
            ]
        },
        formations: {
            title: 'Formation',
            items: [
                {
                    degree: 'Master, Informatique pour l\'Exploration des Données et l\'Aide à la Décision (EIDD)',
                    institution: 'Université Sorbonne Paris Nord, Paris',
                    year: '2025 - Juillet 2026',
                    description: 'Diplômé en juillet 2026. Science des données et systèmes d\'aide à la décision, informatique décisionnelle et apprentissage automatique. Double diplôme franco-marocain.'
                },
                {
                    degree: 'Master, Intelligence Web et Science des Données (WISD)',
                    institution: 'Université Sidi Mohamed Ben Abdellah, Fès',
                    year: '2024 - Juillet 2026',
                    description: 'Diplômé en juillet 2026. Intelligence web, science des données, NLP et apprentissage automatique.'
                },
                {
                    degree: 'Licence, Génie Logiciel et Systèmes d\'Information',
                    institution: 'École Supérieure de Technologie, Essaouira',
                    year: '2023 - 2024',
                    description: 'Génie logiciel, systèmes d\'information, conception de systèmes et pratiques de développement.'
                },
                {
                    degree: 'DUT, Informatique',
                    institution: 'École Supérieure de Technologie, Essaouira',
                    year: '2021 - 2023',
                    description: 'Fondamentaux de l\'informatique et applications pratiques.'
                },
                {
                    degree: 'Baccalauréat, Sciences Mathématiques B',
                    institution: 'Lycée Mohammed 5, Essaouira',
                    year: '2020 - 2021',
                    description: 'Études avancées en mathématiques et sciences.'
                }
            ],
            certificationsTitle: 'Certifications',
            certifications: [
                { name: 'Data Ingestion with Pandas', issuer: '365 Data Science', year: '2025' },
                { name: 'Machine Learning in Python', issuer: '365 Data Science', year: '2025' },
                { name: 'Deep Learning with TensorFlow 2', issuer: '365 Data Science', year: '2025' },
                { name: 'Power BI', issuer: '365 Data Science', year: '2025' },
                { name: 'Introduction to Data and Data Science', issuer: '365 Data Science', year: '2025' }
            ]
        },
        experience: {
            title: 'Expérience professionnelle',
            items: [
                {
                    title: 'Stagiaire Ingénieur IA & MLOps',
                    company: 'eGlobal Digital, Casablanca',
                    duration: '02/2026 - 07/2026',
                    description: 'Contribution à IVEP, une plateforme SaaS d\'exposition virtuelle propulsée par l\'IA, avec environnements 3D immersifs et portails Admin, Organisateur, Entreprise et Visiteur. Travail sur l\'assistance RAG, la traduction multilingue et la transcription Whisper, développement de fonctionnalités de recommandation/matchmaking, et travail transversal sur le backend, l\'IA, la data et le déploiement (Docker, Redis, WebSockets/SSE).',
                    technologies: ['FastAPI', 'Next.js', 'MongoDB', 'Redis', 'Docker', 'RAG', 'Whisper', 'WebSockets/SSE']
                },
                {
                    title: 'Stagiaire Développeur Web',
                    company: 'Big4Com, Marrakech',
                    duration: '04/2024 - 06/2024',
                    description: 'Développement de MyInvoice, une plateforme de facturation automatisée pour petites entreprises et freelances. Conception d\'API RESTful et d\'un frontend React avec gestion des clients et génération de factures PDF.',
                    technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'REST API']
                },
                {
                    title: 'Stagiaire Développeur Web',
                    company: 'Big4Com, Marrakech',
                    duration: '04/2023 - 06/2023',
                    description: 'Développement d\'une plateforme pour agence de voyage avec réservation en ligne et back-office d\'administration. Conception de la base de données relationnelle et d\'une interface responsive.',
                    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS']
                },
                {
                    title: 'Stagiaire Développeur Web',
                    company: 'Province d\'Essaouira',
                    duration: '06/2022',
                    description: 'Développement d\'un site de gestion des employés, avec conception de la base de données selon la méthode Merise.',
                    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Merise']
                }
            ]
        },
        skills: {
            title: 'Compétences',
            categories: {
                ml: 'Machine Learning & Data',
                genai: 'GenAI, NLP & Recherche',
                backend: 'Backend',
                frontend: 'Frontend & Mobile',
                data: 'Bases de données',
                tools: 'Infrastructure & Outils',
                soft: 'Compétences Relationnelles'
            },
            items: {
                ml: ['Python', 'PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Évaluation de modèles', 'Systèmes de recommandation', 'Vision par ordinateur (YOLOv8, OpenCV)', 'Apprentissage multimodal', 'Power BI'],
                genai: ['LLMs', 'RAG', 'LangChain', 'LlamaIndex', 'Sentence-Transformers', 'Hugging Face Transformers', 'FAISS', 'ChromaDB', 'CLIP', 'Whisper', 'Recherche sémantique', 'NLP multilingue'],
                backend: ['FastAPI', 'Flask', 'Node.js', 'Express.js', 'APIs REST', 'WebSockets', 'SSE', 'Authentification JWT', 'Scrapy', 'Tâches planifiées / en arrière-plan'],
                frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Expo / React Native', 'Three.js', 'React Three Fiber'],
                data: ['SQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Prisma', 'Redis'],
                tools: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'PM2', 'Git & GitHub', 'Vercel', 'Hetzner VPS', 'Cloudflare R2', 'Playwright', 'Postman', 'Notions de CI/CD'],
                soft: ['Résolution de problèmes', 'Travail en équipe', 'Adaptabilité', 'Autonomie', 'Communication technique claire']
            }
        },
        projects: {
            title: 'Projets',
            description: 'Une sélection de mes travaux en IA, data et génie logiciel',
            viewGithub: 'Voir sur GitHub',
            liveDemo: 'Démo Live',
            privateRepo: 'Dépôt privé (projet de stage)',
            featured: 'À la une',
            others: 'Autres Projets',
            loading: 'Chargement des projets...',
            error: 'Échec du chargement des projets. Veuillez réessayer plus tard.',
            items: [
                {
                    name: 'Plateforme Intelligente d\'Exposition Virtuelle (IVEP)',
                    featured: true,
                    description: 'SaaS multi-rôles orienté production pour événements virtuels (Admin, Organisateur, Entreprise, Visiteur) avec expositions 3D immersives, chat temps réel (WebSockets + Redis pub/sub), notifications SSE, paiements Stripe, réunions Daily.co, assistant RAG à périmètre restreint, transcription Whisper et traduction EN/FR/AR. Réalisé pendant mon stage chez eGlobal Digital, plus de 30 modules backend.',
                    technologies: ['FastAPI', 'Next.js', 'TypeScript', 'MongoDB', 'Redis', 'ChromaDB', 'Whisper', 'Stripe', 'Docker', 'Nginx'],
                    githubUrl: null,
                    demoUrl: null
                },
                {
                    name: 'WWW 2025 MM-CTR Challenge',
                    featured: true,
                    description: 'Prédiction multimodale du taux de clic pour la recommandation de vidéos courtes sur 3,6M d\'échantillons d\'entraînement. Les embeddings CLIP image/texte (512D vers 128D normalisés) alimentent un modèle CTR combinant embeddings catégoriels, Transformer 2 couches/8 têtes, Deep Cross Network et DNN. AUC de validation de 0,9495, entraînement sur 2x Tesla T4.',
                    technologies: ['PyTorch', 'CLIP', 'Transformers', 'Deep Cross Network', 'Hugging Face', 'Pandas'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/WWW-2025-MM-CTR-Challenge-Task-1-2-Solution',
                    demoUrl: null
                },
                {
                    name: 'Course Materials RAG',
                    featured: true,
                    description: 'Assistant RAG multilingue qui répond à des questions à partir de PDF, Markdown et transcriptions YouTube. Embeddings Sentence-Transformer 768D, FAISS, diversité MMR, récupération par cours avec repli, attribution des sources et Llama 3.3 70B via Groq.',
                    technologies: ['FastAPI', 'React', 'TypeScript', 'FAISS', 'Sentence-Transformers', 'Groq', 'Llama 3.3'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Course-Materials-RAG',
                    demoUrl: null
                },
                {
                    name: 'MovieRec : Recommandeur Hybride Adaptatif',
                    featured: true,
                    description: 'Système de recommandation hybride sur MovieLens 100K enrichi via TMDB. Les pondérations s\'adaptent au nombre de notes de l\'utilisateur (popularité, contenu, filtrage collaboratif) pour gérer le démarrage à froid et la personnalisation progressive.',
                    technologies: ['Python', 'Flask', 'React', 'TypeScript', 'MongoDB', 'TF-IDF', 'Filtrage collaboratif'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Movie-Recommender-System-Project',
                    demoUrl: null
                },
                {
                    name: 'Agrégateur de Stages',
                    featured: true,
                    description: 'Plateforme qui collecte, stocke et expose des offres de stage. Crawlers Scrapy planifiés, backend FastAPI avec recherche paginée, statistiques, statut de collecte et déclenchement manuel, et frontend Next.js.',
                    technologies: ['FastAPI', 'Scrapy', 'Supabase', 'APScheduler', 'Next.js', 'Tailwind CSS'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Internship',
                    demoUrl: null
                },
                {
                    name: 'AutoTollBooth',
                    featured: true,
                    description: 'Application de vision par ordinateur qui détecte et suit les véhicules dans des vidéos de trafic et compte les entrées/sorties à travers une ligne configurable. Choix de la taille du modèle YOLOv8, seuil de confiance réglable et aperçu annoté en direct.',
                    technologies: ['YOLOv8', 'PyTorch', 'OpenCV', 'Streamlit'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/AutoTollBooth',
                    demoUrl: null
                },
                {
                    name: 'Système de Recommandation d\'Animes',
                    description: 'Application de recommandation basée sur un catalogue d\'animes nettoyé et enrichi via Jikan. Prototypage SVD en notebook, avec un moteur TF-IDF et similarité cosinus en production servi via Flask et un frontend React/TypeScript.',
                    technologies: ['Python', 'Pandas', 'Flask', 'React', 'TF-IDF'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Anime-Ratings-Analysis-Recommender-System',
                    demoUrl: null
                },
                {
                    name: 'Terrasse Bleue',
                    description: 'Plateforme de commande pour café avec application mobile Expo, tableau de bord admin et menu public Next.js, API backend, et PostgreSQL avec migrations Prisma et données de départ structurées, dans un monorepo pnpm.',
                    technologies: ['Expo', 'Next.js', 'PostgreSQL', 'Prisma', 'Node.js'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Terrasse-Bleue',
                    demoUrl: null
                },
                {
                    name: 'SwapChic',
                    description: 'Marketplace full-stack avec authentification JWT/Passport, téléversement de médias (Cloudinary), services Redis et fonctionnalités temps réel Socket.IO.',
                    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.IO'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/SwapChic',
                    demoUrl: null
                },
                {
                    name: 'Analyse de Sentiment Robuste',
                    description: 'Pipeline NLP modulaire pour la classification de sentiments et la robustesse face aux attaques adversariales textuelles, avec composants séparés de prétraitement, modèles, évaluation et Docker.',
                    technologies: ['Python', 'TensorFlow', 'Hugging Face', 'NLP', 'Docker'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Analyse-de-sentiment-robuste-face-aux-attaques-adversariales-textuelles',
                    demoUrl: null
                },
                {
                    name: 'Détection de Discours Haineux',
                    description: 'Système de NLP et machine learning qui détecte et classifie les discours haineux dans le texte.',
                    technologies: ['Python', 'Jupyter Notebook', 'NLP', 'Machine Learning'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Hate-Speech-Detection',
                    demoUrl: null
                },
                {
                    name: 'Fruit Vision AI',
                    description: 'Interface web intégrant une API de segmentation Roboflow pour détecter les fruits dans des images importées ou liées et afficher les informations nutritionnelles.',
                    technologies: ['React', 'Tailwind CSS', 'Roboflow API'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Fruits-Segmentations-Web',
                    demoUrl: null
                },
                {
                    name: 'Coach_Poche',
                    description: 'Application de coaching sportif IA qui génère des plans d\'entraînement hebdomadaires selon le profil, les objectifs, le sport et l\'équipement, avec Llama 3.3 70B.',
                    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Groq'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Coach_Poche',
                    demoUrl: null
                },
                {
                    name: 'MyInvoice',
                    description: 'Plateforme de facturation pour petites entreprises et freelances : gestion des clients, produits et factures, historique, mode sombre et interface en arabe. Issue de mon stage chez Big4Com.',
                    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/MyInvoice',
                    demoUrl: null
                },
                {
                    name: 'Site Web d\'Agence de Voyage',
                    description: 'Système de gestion d\'agence de voyage avec forfaits touristiques, réservation, gestion des clients et design responsive.',
                    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
                    githubUrl: 'https://github.com/AbdelilahElgallati/Agence_Voyage',
                    demoUrl: null
                }
            ]
        },
        contact: {
            title: 'Contactez-moi',
            description: 'Je suis disponible immédiatement. Que vous ayez un poste, un projet ou une question, n\'hésitez pas à me contacter.',
            form: {
                name: 'Nom',
                email: 'Email',
                subject: 'Sujet',
                message: 'Message',
                send: 'Envoyer le Message',
                success: 'Message envoyé avec succès !',
                error: 'Échec de l\'envoi du message. Veuillez réessayer.'
            },
            info: {
                title: 'Informations de Contact',
                email: 'Email',
                phone: 'Téléphone',
                phoneValue: '+212 708135350',
                location: 'Localisation',
                locationValue: 'Essaouira, Maroc (ouvert à la mobilité internationale)',
                availability: 'Disponible pour',
                availabilityValue: 'CDI/CDD, stages, télétravail et opportunités internationales',
                linkedin: 'https://linkedin.com/in/abdelilah-elgallati',
                github: 'https://github.com/AbdelilahElgallati'
            }
        },
        footer: {
            rights: 'Tous droits réservés.',
            email: 'abdelilah.elgallati6@gmail.com',
            contact: 'Contact'
        }
    }
};
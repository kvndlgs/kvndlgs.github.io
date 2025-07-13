export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  features?: string[];
  duration?: string;
  teamSize?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Cyper: Rap Battle Generator',
    description: 'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and a complete admin dashboard for inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://rapbattleai.netlify.app',
    githubUrl: 'https://github.com/kvndlgs/ecommerce-platform',
    featured: true,
    features: [
      'User registration and authentication',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order tracking and management',
      'Admin dashboard for product and order management',
      'Responsive design for all devices',
      'Email notifications for orders'
    ],
    duration: '4 months',
    teamSize: '1',
    role: 'Full-Stack Developer'
  },
  {
    id: 2,
    title: 'Parapluie: AI In Service of Senior Financlial Security',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A modern task management solution designed for teams. Built with React and Socket.io for real-time collaboration, featuring drag-and-drop kanban boards, time tracking, team chat, and comprehensive project analytics.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://taskflow-demo.com',
    githubUrl: 'https://github.com/johndoe/task-management',
    featured: true,
    features: [
      'Real-time collaborative editing',
      'Drag-and-drop kanban boards',
      'Time tracking and reporting',
      'Team chat and notifications',
      'Project analytics and insights',
      'File attachments and comments',
      'Mobile-responsive design',
      'Dark/light theme support'
    ],
    duration: '3 months',
    teamSize: '2 developers',
    role: 'Frontend Lead & UI/UX Designer'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A comprehensive weather dashboard with location-based forecasts and interactive maps.',
    longDescription: 'An intuitive weather application providing detailed forecasts, interactive weather maps, and location-based weather alerts. Features a clean, responsive design with data visualization using Chart.js and integration with multiple weather APIs.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation API', 'CSS Modules'],
    liveUrl: 'https://weather-dash-demo.com',
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    features: [
      'Current weather conditions',
      '7-day detailed forecast',
      'Interactive weather maps',
      'Location-based alerts',
      'Historical weather data',
      'Weather data visualization',
      'Favorite locations management',
      'Offline data caching'
    ],
    duration: '2 months',
    teamSize: '1 developer',
    role: 'Solo Full-Stack Developer'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics platform for social media performance tracking and insights.',
    longDescription: 'A powerful analytics dashboard that helps businesses track their social media performance across multiple platforms. Features include automated data collection, custom reporting, engagement analytics, and AI-powered insights for content optimization.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Chart.js', 'Docker'],
    liveUrl: 'https://social-analytics-demo.com',
    githubUrl: 'https://github.com/johndoe/social-analytics',
    features: [
      'Multi-platform social media integration',
      'Real-time analytics dashboard',
      'Custom report generation',
      'Engagement rate tracking',
      'Competitor analysis',
      'AI-powered content insights',
      'Automated scheduling suggestions',
      'Export to PDF/Excel'
    ],
    duration: '5 months',
    teamSize: '4 developers',
    role: 'Backend Lead & Data Engineer'
  },
  {
    id: 5,
    title: 'Recipe Sharing Platform',
    description: 'A community-driven platform for sharing and discovering recipes with social features.',
    longDescription: 'A vibrant community platform where food enthusiasts can share, discover, and rate recipes. Features include recipe creation tools, social interactions, meal planning, shopping list generation, and nutritional information.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Tailwind CSS', 'Cloudinary'],
    liveUrl: 'https://recipe-share-demo.com',
    githubUrl: 'https://github.com/johndoe/recipe-platform',
    features: [
      'Recipe creation and editing tools',
      'Photo upload and management',
      'Rating and review system',
      'Social following and feeds',
      'Meal planning calendar',
      'Shopping list generation',
      'Nutritional information display',
      'Advanced search and filtering'
    ],
    duration: '3 months',
    teamSize: '2 developers',
    role: 'Full-Stack Developer'
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'A modern LMS for online education with video streaming and progress tracking.',
    longDescription: 'A comprehensive learning management system designed for online education. Features include course creation tools, video streaming, interactive quizzes, progress tracking, discussion forums, and certificate generation.',
    image: 'https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io', 'Stripe', 'FFmpeg'],
    liveUrl: 'https://lms-demo.com',
    githubUrl: 'https://github.com/johndoe/lms-platform',
    features: [
      'Course creation and management',
      'Video streaming with HLS',
      'Interactive quizzes and assignments',
      'Student progress tracking',
      'Discussion forums and chat',
      'Certificate generation',
      'Payment processing for courses',
      'Mobile app companion'
    ],
    duration: '6 months',
    teamSize: '5 developers',
    role: 'Technical Lead & Architecture Designer'
  }
];
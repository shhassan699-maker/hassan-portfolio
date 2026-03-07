import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    icon: "💬",
    name: "GetChatly",
    type: "Mobile & Web App",
    description: "A centralized AI platform providing access to GPT-4, GPT-4o, DeepSeek, Gemini and others under one subscription.",
    tags: ["API Testing", "AI Validation", "Web Testing", "Mobile Testing"],
    details: "Performed complete web testing including chatbot model switching, UI functionality, subscription flow, and AI response accuracy.",
    features: [
      "Chatbot model switching validation",
      "Subscription flow testing",
      "AI response accuracy testing",
      "UI/UX functionality checks"
    ]
  },
  {
    id: 2,
    icon: "✈️",
    name: "Flight Tracker",
    type: "Mobile App",
    description: "A real-time flight tracking app similar to FlightRadar24 with live aircraft location tracking.",
    tags: ["API Testing", "Real-time Testing", "Map Testing"],
    details: "Tested live aircraft location tracking, map rendering, and API integrations for accurate flight information display.",
    features: [
      "Live aircraft location accuracy",
      "Map rendering performance",
      "API integration validation",
      "Real-time data sync testing"
    ]
  },
  {
    id: 3,
    icon: "🏥",
    name: "SoapSuds",
    type: "Healthcare App",
    description: "A medical application for virtual consultations between patients and doctors with AI-powered features.",
    tags: ["Healthcare", "Audio Testing", "Security Testing"],
    details: "Validated audio recording features, automated medicine suggestions, and secure cloud storage of medical history.",
    features: [
      "Audio recording validation",
      "AI medicine suggestion accuracy",
      "Secure cloud storage testing",
      "Virtual consultation flow"
    ]
  },
  {
    id: 4,
    icon: "🎤",
    name: "AI Transcribe App",
    type: "Mobile App",
    description: "Intelligent speech-to-text solution converting live or recorded audio/video into written transcripts.",
    tags: ["AI Testing", "NLP Testing", "Multilingual"],
    details: "Tested real-time transcription, multilingual support, and accuracy of AI-generated text.",
    features: [
      "Real-time transcription accuracy",
      "Multilingual support testing",
      "Audio/video format compatibility",
      "AI text accuracy benchmarking"
    ]
  },
  {
    id: 5,
    icon: "🏍️",
    name: "Moto Rider & Driver",
    type: "Android App",
    description: "Multi-mode ride-hailing app with automatic bidding, instant fare, and flex fare negotiation systems.",
    tags: ["Functional Testing", "Bidding Logic", "Workflow Testing"],
    details: "Conducted functional testing on bidding logic, fare assignment, ride request handling, and driver acceptance workflows.",
    features: [
      "Automatic bidding logic validation",
      "Instant fare assignment testing",
      "Flex fare negotiation flow",
      "Driver acceptance workflow testing"
    ]
  },
  {
    id: 6,
    icon: "🎨",
    name: "Artostream",
    type: "iOS App",
    description: "An art marketplace where artists upload artwork for buyers with seamless transaction processing.",
    tags: ["iOS Testing", "E-commerce", "Image Rendering"],
    details: "Ensured seamless transactions, proper image rendering, and an optimized user experience.",
    features: [
      "Transaction flow validation",
      "Image rendering quality checks",
      "Upload/download performance",
      "User experience optimization"
    ]
  },
  {
    id: 7,
    icon: "💼",
    name: "Job Finder",
    type: "Mobile & Web",
    description: "A job portal allowing users to search, filter, and apply for jobs similar to Indeed.",
    tags: ["End-to-End Testing", "Resume Upload", "Notification Testing"],
    details: "Tested job listing accuracy, application flow, resume upload features, and user notifications.",
    features: [
      "Job listing accuracy",
      "Application submission flow",
      "Resume upload functionality",
      "Push notification delivery"
    ]
  },
  {
    id: 8,
    icon: "📱",
    name: "Deen",
    type: "iOS App",
    description: "iOS app with app blocking, content restriction, screen time tracking, prayer notifications, and Qibla direction.",
    tags: ["Security Testing", "iOS Testing", "Exploratory Testing"],
    details: "Conducted exploratory testing to uncover usability issues and enhance app security.",
    features: [
      "App blocking functionality",
      "18+ content restriction",
      "Screen time tracking accuracy",
      "Prayer notification scheduling"
    ]
  },
  {
    id: 9,
    icon: "🗂️",
    name: "FalkonData",
    type: "Web App",
    description: "Healthcare document management system for secure document upload and sharing via unique customer links.",
    tags: ["Security Testing", "Data Integrity", "Healthcare"],
    details: "Verified data integrity, link generation, and secure storage of patient information.",
    features: [
      "Data integrity validation",
      "Secure link generation",
      "Patient data protection",
      "Document upload/download testing"
    ]
  }
]
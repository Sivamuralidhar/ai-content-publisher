import { 
    MessageSquare,  
    Newspaper, 
    Mail, 
    Megaphone, 
    TrendingUp,
    Calendar,
    Award,
    Users,
    Gift
  } from 'lucide-react';
  
  export const templateCategories = [
    {
      id: 'social-media',
      title: "Social Media Posts",
      description: "Engaging posts for various platforms",
      icon: MessageSquare,
      templates: [
        { name: "Product Launch Announcement", prompt: "New product announcement with key features and benefits" },
        { name: "Company Milestone", prompt: "Celebrate company achievements and growth" },
        { name: "Industry Insights", prompt: "Share expert knowledge and trends" },
        { name: "Behind the Scenes", prompt: "Show company culture and team moments" }
      ]
    },
    {
      id: 'blog-content',
      title: "Blog Articles",
      description: "Well-structured blog content",
      icon: Newspaper,
      templates: [
        { name: "How-to Guide", prompt: "Step-by-step tutorial format" },
        { name: "Industry Analysis", prompt: "Deep dive into market trends" },
        { name: "Case Study", prompt: "Success story with results" },
        { name: "Expert Interview", prompt: "Q&A format with industry leader" }
      ]
    },
    {
      id: 'email-marketing',
      title: "Email Campaigns",
      description: "Compelling email content",
      icon: Mail,
      templates: [
        { name: "Welcome Series", prompt: "Onboarding new subscribers" },
        { name: "Product Newsletter", prompt: "Featured products and updates" },
        { name: "Event Invitation", prompt: "Upcoming event announcement" },
        { name: "Customer Feedback", prompt: "Request for testimonials" }
      ]
    },
    {
      id: 'ad-copy',
      title: "Ad Copy",
      description: "Persuasive advertising content",
      icon: Megaphone,
      templates: [
        { name: "PPC Ad", prompt: "Search engine advertising copy" },
        { name: "Social Media Ad", prompt: "Paid social media content" },
        { name: "Display Ad", prompt: "Visual advertising copy" },
        { name: "Landing Page", prompt: "Conversion-focused content" }
      ]
    },
    {
      id: 'marketing',
      title: "Marketing Materials",
      description: "Professional marketing content",
      icon: TrendingUp,
      templates: [
        { name: "Press Release", prompt: "News announcement format" },
        { name: "Product Description", prompt: "Compelling product details" },
        { name: "Brand Story", prompt: "Company narrative" },
        { name: "Value Proposition", prompt: "Unique selling points" }
      ]
    },
    {
      id: 'events',
      title: "Event Content",
      description: "Event promotion and updates",
      icon: Calendar,
      templates: [
        { name: "Webinar Promotion", prompt: "Online event marketing" },
        { name: "Conference Updates", prompt: "Event schedule and highlights" },
        { name: "Workshop Description", prompt: "Training session details" },
        { name: "Live Stream Announcement", prompt: "Real-time event promotion" }
      ]
    },
    {
      id: 'testimonials',
      title: "Social Proof",
      description: "Customer success stories",
      icon: Award,
      templates: [
        { name: "Customer Review", prompt: "Product experience highlight" },
        { name: "Success Story", prompt: "Client transformation" },
        { name: "Testimonial", prompt: "Customer feedback showcase" },
        { name: "Case Result", prompt: "Achievement spotlight" }
      ]
    },
    {
      id: 'community',
      title: "Community Content",
      description: "Engage your audience",
      icon: Users,
      templates: [
        { name: "AMA Session", prompt: "Q&A event format" },
        { name: "Community Challenge", prompt: "Engagement activity" },
        { name: "Member Spotlight", prompt: "Community highlight" },
        { name: "Discussion Prompt", prompt: "Conversation starter" }
      ]
    },
    {
      id: 'seasonal',
      title: "Seasonal Content",
      description: "Time-sensitive campaigns",
      icon: Gift,
      templates: [
        { name: "Holiday Campaign", prompt: "Seasonal promotion" },
        { name: "Special Offer", prompt: "Limited-time deal" },
        { name: "Event Series", prompt: "Themed content" },
        { name: "Seasonal Update", prompt: "Timely announcement" }
      ]
    }
  ];
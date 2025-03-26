export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  time: string;
}

export interface EventsByDate {
  [date: string]: Event[];
}

const events: EventsByDate = {
  "2025-03-25": [
    {
      id: "event-1",
      title: "Coffee with Alex",
      description:
        "Meet with Alex to brainstorm ideas for the upcoming product launch...",
      imageUrl: "https://picsum.photos/seed/312/1920/1080?coffee",
      time: "09:00 AM",
    },
    {
      id: "event-2",
      title: "Team Standup",
      description: "Weekly standup meeting with the dev team...",
      imageUrl: "https://picsum.photos/seed/737/1920/1080?teamwork,meeting",
      time: "02:00 PM",
    },
  ],
  "2025-03-26": [
    {
      id: "event-3",
      title: "Yoga Session",
      description: "Join for a relaxing yoga session...",
      imageUrl: "https://picsum.photos/seed/392/1920/1080?yoga,meditation",
      time: "12:00 PM",
    },
    {
      id: "event-4",
      title: "Product Demo",
      description: "Demo of UI improvements...",
      imageUrl:
        "https://picsum.photos/seed/249/1920/1080?presentation,technology",
      time: "03:30 PM",
    },
  ],
  "2025-03-13": [
    {
      id: "event-5",
      title: "Design Review Meeting",
      description: "Discuss new UI/UX changes...",
      imageUrl: "https://picsum.photos/seed/1056/1920/1080?design,UX",
      time: "10:00 AM",
    },
    {
      id: "event-6",
      title: "Lunch with Sarah",
      description: "Catch up with Sarah over sushi...",
      imageUrl: "https://picsum.photos/seed/1080/1920/1080?sushi,lunch",
      time: "01:00 PM",
    },
  ],
  "2025-03-14": [
    {
      id: "event-7",
      title: "Tech Talk: AI in 2025",
      description: "Join the latest AI discussions in the company...",
      imageUrl: "https://picsum.photos/seed/180/1920/1080?AI,technology",
      time: "11:00 AM",
    },
    {
      id: "event-8",
      title: "Gym Workout",
      description: "Hit the gym for a full-body session...",
      imageUrl: "https://picsum.photos/seed/223/1920/1080?gym,fitness",
      time: "06:00 PM",
    },
  ],
  "2025-03-15": [
    {
      id: "event-9",
      title: "Code Review Session",
      description: "Review PRs and discuss refactoring ideas...",
      imageUrl: "https://picsum.photos/seed/321/1920/1080?coding,programming",
      time: "09:30 AM",
    },
    {
      id: "event-10",
      title: "Movie Night",
      description: "Watch the new sci-fi thriller...",
      imageUrl: "https://picsum.photos/seed/340/1920/1080?cinema,movie",
      time: "08:00 PM",
    },
  ],
  "2025-03-16": [
    {
      id: "event-11",
      title: "Weekend Hike",
      description: "Explore the mountain trails with friends...",
      imageUrl: "https://picsum.photos/seed/1055/1920/1080?hiking,mountains",
      time: "07:00 AM",
    },
    {
      id: "event-12",
      title: "Book Club",
      description: "Discuss the latest mystery novel...",
      imageUrl: "https://picsum.photos/seed/1067/1920/1080?books,reading",
      time: "04:00 PM",
    },
  ],
  "2025-03-17": [
    {
      id: "event-13",
      title: "Sunday Brunch",
      description: "Enjoy pancakes and fresh coffee...",
      imageUrl: "https://picsum.photos/seed/296/1920/1080?brunch,breakfast",
      time: "10:00 AM",
    },
    {
      id: "event-14",
      title: "Evening Meditation",
      description: "Wind down with guided meditation...",
      imageUrl: "https://picsum.photos/seed/1047/1920/1080?meditation,relax",
      time: "07:30 PM",
    },
  ],
};

export default events;

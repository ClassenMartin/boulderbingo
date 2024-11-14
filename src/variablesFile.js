export const HOLDS = [
  {
    name: "crimps",
    image: "",
    description:
      "Small holds that require the climber to grip with their fingers bent at a sharp angle, often using just the fingertips.",
    type: "hold",
  },
  {
    name: "jugs",
    image: "",
    description:
      "Large, deep holds that can be easily gripped with an open hand, providing a comfortable rest for climbers.",
    type: "hold",
  },
  {
    name: "slopers",
    image: "",
    description:
      "Rounded, sloping holds that require the climber to use friction and body positioning to maintain grip.",
    type: "hold",
  },
  {
    name: "pockets",
    image: "",
    description:
      "Holds with a small hole or pocket, where the climber inserts one or more fingers to gain control.",
    type: "hold",
  },
  {
    name: "volumes",
    image: "",
    description:
      "Large, angular holds that extend from the wall, often used to create features like ledges or ramps.",
    type: "hold",
  },
  {
    name: "crack",
    image: "",
    description:
      "A hold formed by a narrow gap or crack in the rock, requiring a variety of techniques like jamming or stemming to climb.",
    type: "hold",
  },
  {
    name: "pinches",
    image: "",
    description:
      "Holds that require the climber to pinch with their fingers and thumb, often used for smaller or awkwardly shaped grips.",
    type: "hold",
  },
];

export const COLORS = [
  {
    name: "red",
    rgb: "rgb(255, 0, 0)",
    description:
      "A bright color often associated with passion, energy, and danger.",
    type: "color",
  },
  {
    name: "blue",
    rgb: "rgb(0, 0, 255)",
    description:
      "A cool color often associated with calmness, trust, and the sky.",
    type: "color",
  },
  {
    name: "green",
    rgb: "rgb(0, 255, 0)",
    description:
      "A color often associated with nature, growth, and tranquility.",
    type: "color",
  },
  {
    name: "yellow",
    rgb: "rgb(255, 255, 0)",
    description:
      "A bright, vibrant color often associated with happiness, optimism, and caution.",
    type: "color",
  },
  {
    name: "orange",
    rgb: "rgb(255, 165, 0)",
    description:
      "A warm, energetic color often associated with enthusiasm, creativity, and warmth.",
    type: "color",
  },
  {
    name: "purple",
    rgb: "rgb(128, 0, 128)",
    description:
      "A color often associated with royalty, luxury, and creativity.",
    type: "color",
  },
  {
    name: "pink",
    rgb: "rgb(255, 192, 203)",
    description:
      "A soft, gentle color often associated with love, compassion, and femininity.",
    type: "color",
  },
  {
    name: "brown",
    rgb: "rgb(165, 42, 42)",
    description:
      "A warm, earthy color often associated with stability, reliability, and nature.",
    type: "color",
  },
  {
    name: "magenta",
    rgb: "rgb(255, 0, 255)",
    description:
      "A vibrant color created by mixing red and blue, often associated with creativity and uniqueness.",
    type: "color",
  },
  {
    name: "black",
    rgb: "rgb(0, 0, 0)",
    description:
      "A color often associated with power, elegance, and the absence of light.",
    type: "color",
  },
];

export const MOVES = [
  {
    name: "dyno",
    image: "",
    description:
      "A dynamic move where the climber jumps to reach a hold, often involving both hands and feet leaving the wall.",
    type: "move",
  },
  {
    name: "flip",
    image: "",
    description:
      "A move where the climber rotates their body in the air, usually to adjust to a new position or reach a hold.",
    type: "move",
  },
  {
    name: "paddle",
    image: "",
    description:
      "A move where the climber uses both hands to press against the holds on either side, typically used in wide or overhung positions.",
    type: "move",
  },
  {
    name: "mantle",
    image: "",
    description:
      "A move where the climber pushes down on a hold with their hands while bringing their body up over the top of a ledge or lip.",
    type: "move",
  },
  {
    name: "heelhook",
    image: "",
    description:
      "A move where the climber places their heel on a hold to gain leverage and pull themselves up, often used on overhangs.",
    type: "move",
  },
  {
    name: "toehook",
    image: "",
    description:
      "A move where the climber hooks their toes around a hold, typically used to gain stability or control on steep terrain.",
    type: "move",
  },
  {
    name: "run in",
    image: "",
    description:
      "A move where the climber approaches the wall and uses momentum to run into a series of holds, often used in bouldering problems.",
    type: "move",
  },
  {
    name: "runner",
    image: "",
    description:
      "A move where the climber moves fluidly along a series of holds, typically transitioning from one set of grips to the next with minimal effort.",
    type: "move",
  },
];

export const TERRAINS = [
  {
    name: "slab -10",
    image: "",
    description:
      "A slab that leans back slightly, making it easier to balance but more technical in footwork, as it's less steep than vertical.",
    type: "terrain",
  },
  {
    name: "slab -5",
    image: "",
    description:
      "A gentle, almost vertical slab; climbers rely on balance and precision, with less reliance on handholds due to the angle.",
    type: "terrain",
  },
  {
    name: "vertical 0",
    image: "",
    description:
      "A perfectly vertical wall where climbers must balance equally on both hands and feet, with gravity pulling straight down.",
    type: "terrain",
  },
  {
    name: "overhang 10",
    image: "",
    description:
      "A mild overhanging wall that begins to test a climber's strength and endurance due to the steepness.",
    type: "terrain",
  },
  {
    name: "overhang 20",
    image: "",
    description:
      "An increasingly steep wall that requires significant upper body strength, as gravity pulls climbers outwards.",
    type: "terrain",
  },
  {
    name: "overhang 30",
    image: "",
    description:
      "A steep overhang where climbers need a solid grip and core strength to prevent their body from swinging out.",
    type: "terrain",
  },
  {
    name: "overhang 40",
    image: "",
    description:
      "A challenging incline, demanding both power and technical skill; climbers use core tension to maintain body control.",
    type: "terrain",
  },
  {
    name: "roof 50",
    image: "",
    description:
      "An overhanging wall that approaches a ceiling-like angle, requiring advanced strength and technique to navigate.",
    type: "terrain",
  },
  {
    name: "roof 60",
    image: "",
    description:
      "A nearly horizontal section that requires intense grip strength and precise footwork to prevent swinging out.",
    type: "terrain",
  },
  {
    name: "roof 70",
    image: "",
    description:
      "A very steep, almost horizontal section where climbers rely heavily on powerful grips and core tension.",
    type: "terrain",
  },
  {
    name: "roof 80",
    image: "",
    description:
      "An extreme overhang or roof section that is nearly horizontal, requiring advanced skill, endurance, and upper body strength.",
    type: "terrain",
  },
];

export const AMOUNTOFMOVES = [
  {
    name: "two",
    image: "",
    description:
      "A short climb or 'problem' with just two moves, usually requiring precise and powerful moves.",
    type: "amount",
  },
  {
    name: "three",
    image: "",
    description:
      "A sequence of three moves, often emphasizing quick transitions and efficient body positioning.",
    type: "amount",
  },
  {
    name: "four",
    image: "",
    description:
      "A climb that requires four moves, blending technique and power to complete.",
    type: "amount",
  },
  {
    name: "five",
    image: "",
    description:
      "A climb of five moves that often demands a good balance of strength and technique.",
    type: "amount",
  },
  {
    name: "six",
    image: "",
    description:
      "A sequence of six moves, requiring climbers to maintain endurance while executing a longer sequence.",
    type: "amount",
  },
  {
    name: "seven",
    image: "",
    description:
      "A seven-move problem, typically challenging a climber's stamina and technique over a medium-length route.",
    type: "amount",
  },
  {
    name: "eight",
    image: "",
    description:
      "A route with eight moves, demanding consistent technique and strength for completion.",
    type: "amount",
  },
  {
    name: "nine",
    image: "",
    description:
      "A nine-move sequence, often pushing climbers' endurance and testing their ability to conserve energy.",
    type: "amount",
  },
  {
    name: "ten",
    image: "",
    description:
      "A climb of ten moves, generally requiring careful pacing and endurance throughout the route.",
    type: "amount",
  },
  {
    name: "eleven",
    image: "",
    description:
      "An eleven-move route that challenges endurance and technique, requiring sustained effort.",
    type: "amount",
  },
  {
    name: "twelve",
    image: "",
    description:
      "A long twelve-move climb, demanding excellent endurance, precise technique, and energy conservation.",
    type: "amount",
  },
];

export const STYLES = [
  {
    name: "tricky",
    image: "",
    description:
      "A climbing style that requires precise footwork, balance, and technique to overcome difficult moves.",
    type: "style",
  },
  {
    name: "power",
    image: "",
    description:
      "A climbing style that relies on strength, explosiveness, and physical endurance to tackle challenging moves.",
    type: "style",
  },
  {
    name: "delicate",
    image: "",
    description:
      "A climbing style that emphasizes subtle movements, light touches, and fine control to maintain balance and precision.",
    type: "style",
  },
  {
    name: "chaos",
    image: "",
    description:
      "A climbing style where the climber uses a mix of powerful and unpredictable movements, often improvising to make it through tough sections.",
    type: "style",
  },
  {
    name: "straight forward",
    image: "",
    description:
      "A climbing style that involves a direct approach with minimal technical complexity, focusing on clear, simple moves.",
    type: "style",
  },
  {
    name: "ballern",
    image: "",
    description:
      "A bold and confident climbing style that involves taking risks and committing to powerful, dynamic movements.",
    type: "style",
  },
  {
    name: "low percentage",
    image: "",
    description:
      "A climbing style that involves attempting difficult moves with a lower likelihood of success, often relying on precision and timing.",
    type: "style",
  },
];

export const TOPICS = [
  {
    name: "handcuffed",
    image: "",
    description:
      "A climbing scenario where the climber’s hands are restricted, often requiring creative movement and body positioning.",
    type: "topic",
  },
  {
    name: "hide and seek",
    image: "",
    description:
      "A style of climbing where the climber must find and use obscure or hidden holds to progress.",
    type: "topic",
  },
  {
    name: "surprise",
    image: "",
    description:
      "A climbing style where unexpected moves or sequences challenge the climber's adaptability and problem-solving skills.",
    type: "topic",
  },
  {
    name: "fast slow slow",
    image: "",
    description:
      "A technique involving a mix of rapid, controlled movements followed by slow, deliberate actions to maintain balance.",
    type: "topic",
  },
  {
    name: "slow fast slow",
    image: "",
    description:
      "A climbing pattern where the climber starts with a slow, cautious approach, accelerates for a quick move, and then slows down again for precision.",
    type: "topic",
  },
  {
    name: "slow slow fast",
    image: "",
    description:
      "A style that emphasizes slow, careful movements with a burst of speed for a challenging or dynamic move.",
    type: "topic",
  },
  {
    name: "fast slow fast",
    image: "",
    description:
      "A technique where the climber uses quick movements followed by a slow and precise action, ending with another fast motion to complete the move.",
    type: "topic",
  },
  {
    name: "slow",
    image: "",
    description:
      "A climbing style that emphasizes slow, deliberate movements to maintain control and balance, often used in delicate or technical situations.",
    type: "topic",
  },
  {
    name: "fast",
    image: "",
    description:
      "A dynamic style of climbing that relies on speed, aggression, and momentum to complete movements quickly.",
    type: "topic",
  },
  {
    name: "fast slow",
    image: "",
    description:
      "A style where the climber alternates between fast, explosive moves and slower, more controlled actions to adapt to the terrain.",
    type: "topic",
  },
  {
    name: "slow fast",
    image: "",
    description:
      "A climbing method where the climber takes slow, careful actions before making a fast, decisive move to progress.",
    type: "topic",
  },
];

export const FEELINGS = [
  {
    name: "rage",
    image: "/pictures/feelings/rage.png",
    description: "A strong feeling of intense anger or fury.",
    type: "feeling",
  },
  {
    name: "happiness",
    image: "/pictures/feelings/happy.png",
    description:
      "A state of contentment and joy, often associated with positive experiences.",
    type: "feeling",
  },
  {
    name: "joy",
    image: "/pictures/feelings/joy.png",
    description: "A deep feeling of great pleasure and delight.",
    type: "feeling",
  },
  {
    name: "confusion",
    image: "/pictures/feelings/alldie.png",
    description: " Aprofound feeling of not knowing what to do.",
    type: "feeling",
  },
  // {
  //   name: "madness",
  //   image: "/pictures/feelings/rage.png",
  //   description:
  //     "A state of mental instability or extreme irrational behavior.",
  //   type: "feeling",
  // },
  // {
  //   name: "we will all die",
  //   image: "/pictures/feelings/alldie.png",
  //   description: "A grim realization of the inevitable nature of mortality.",
  //   type: "feeling",
  // },
];

export const STARTS = [
  {
    name: "one hold",
    image: "/pictures/colors/flowerSkinny.jpg",
    description:
      "A climbing start where the climber begins with only one hand or foot on a hold, requiring precise movement to establish balance.",
    type: "start",
  },
  {
    name: "two holds",
    image: "/pictures/colors/flowerSkinny.jpg",
    description:
      "A climbing start where the climber begins with both hands or feet on separate holds, often requiring quick coordination and control.",
    type: "start",
  },
  {
    name: "run in",
    image: "/pictures/colors/flowerSkinny.jpg",
    description:
      "A start where the climber approaches the wall and uses momentum to quickly engage the first hold, often with a dynamic movement.",
    type: "start",
  },
  {
    name: "jumpstart",
    image: "/pictures/colors/flowerSkinny.jpg",
    description:
      "A start where the climber jumps to reach the first hold, requiring explosive power and timing.",
    type: "start",
  },
  {
    name: "standstart",
    image: "",
    description:
      "A climbing start where the climber begins by standing on the ground and placing their hands or feet on the first holds to initiate the climb.",
    type: "start",
  },
  {
    name: "sitstart",
    image: "/pictures/colors/flowerSkinny.jpg",
    description:
      "A start where the climber begins seated on the ground, typically with hands and feet on the first holds, requiring strong core engagement to stand up.",
    type: "start",
  },
];

export const GRADES = [
  {
    name: "3",
    vScale: "VB",
    description: "Beginner/Introductory",
    image: "",
    type: "grade",
  },
  {
    name: "3+",
    vScale: "VB",
    description: "Beginner/Introductory",
    image: "",
    type: "grade",
  },
  { name: "4", vScale: "VB", description: "Easy", image: "", type: "grade" },
  { name: "4+", vScale: "V0", description: "Easy", image: "", type: "grade" },
  {
    name: "5",
    vScale: "V1",
    description: "Moderate",
    image: "",
    type: "grade",
  },
  {
    name: "5+",
    vScale: "V2",
    description: "Moderate",
    image: "",
    type: "grade",
  },
  {
    name: "6A",
    vScale: "V3",
    description: "Challenging",
    image: "",
    type: "grade",
  },
  {
    name: "6A+",
    vScale: "V3-V4",
    description: "Challenging",
    image: "",
    type: "grade",
  },
  {
    name: "6B",
    vScale: "V4",
    description: "Difficult",
    image: "",
    type: "grade",
  },
  {
    name: "6B+",
    vScale: "V4-V5",
    description: "Difficult",
    image: "",
    type: "grade",
  },
  {
    name: "6C",
    vScale: "V5",
    description: "Very Difficult",
    image: "",
    type: "grade",
  },
  {
    name: "6C+",
    vScale: "V5-V6",
    description: "Very Difficult",
    image: "",
    type: "grade",
  },
  {
    name: "7A",
    vScale: "V6",
    description: "Advanced",
    image: "",
    type: "grade",
  },
  {
    name: "7A+",
    vScale: "V7",
    description: "Advanced",
    image: "",
    type: "grade",
  },
  {
    name: "7B",
    vScale: "V8",
    description: "Very Advanced",
    image: "",
    type: "grade",
  },
  {
    name: "7B+",
    vScale: "V8-V9",
    description: "Very Advanced",
    image: "",
    type: "grade",
  },
  { name: "7C", vScale: "V9", description: "Elite", image: "", type: "grade" },
  {
    name: "7C+",
    vScale: "V10",
    description: "Elite",
    image: "",
    type: "grade",
  },
  {
    name: "8A",
    vScale: "V11",
    description: "Expert level",
    image: "",
    type: "grade",
  },
  {
    name: "8A+",
    vScale: "V12",
    description: "Expert level",
    image: "",
    type: "grade",
  },
  {
    name: "8B",
    vScale: "V13",
    description: "Professional/World-class",
    image: "",
    type: "grade",
  },
  {
    name: "8B+",
    vScale: "V14",
    description: "Professional/World-class",
    image: "",
    type: "grade",
  },
  {
    name: "8C",
    vScale: "V15",
    description: "Exceptional ability",
    image: "",
    type: "grade",
  },
  {
    name: "8C+",
    vScale: "V16",
    description: "Exceptional ability",
    image: "",
    type: "grade",
  },
  {
    name: "9A",
    vScale: "V17",
    description: "Cutting-edge, hardest in the world",
    image: "",
    type: "grade",
  },
  {
    name: "9A+",
    vScale: "V17+",
    description: "Cutting-edge, hardest in the world",
    image: "",
    type: "grade",
  },
];

export const LEVELS = [
  {
    name: "1",
    image: "",
    description: "Initial contact - introductory challenges ahead",
    type: "level",
  },
  {
    name: "2",
    image: "",
    description: "Getting familiar - start exploring new skills",
    type: "level",
  },
  {
    name: "3",
    image: "",
    description: "Warming up - simple but essential tasks",
    type: "level",
  },
  {
    name: "4",
    image: "",
    description: "Picking up pace - challenges now require focus",
    type: "level",
  },
  {
    name: "5",
    image: "",
    description: "Halfway there - tasks are more complex",
    type: "level",
  },
  {
    name: "6",
    image: "",
    description: "Sharper skills needed - stay alert for new twists",
    type: "level",
  },
  {
    name: "7",
    image: "",
    description: "Intensifying - tests demand strategy and precision",
    type: "level",
  },
  {
    name: "8",
    image: "",
    description: "Advanced challenges - mastery of earlier skills required",
    type: "level",
  },
  {
    name: "9",
    image: "",
    description: "Penultimate test - obstacles are now very tough",
    type: "level",
  },
  {
    name: "10",
    image: "",
    description: "Final level - only the strongest will succeed",
    type: "level",
  },
];

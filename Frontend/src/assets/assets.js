import home from "./Home.jpg";
import home2 from "./Home2.jpg";
import chooseTour from "./ChooseTour.jpg";
import search_icon from "./search_icon.png";
import jaipur from "./Jaipur.jpg";
import banglore from "./Banglore.jpg";
import mumbai from "./Mumbai.jpg";
import kerela from "./Kerela.jpg";
import mussoorie from "./Mussoorie.jpg";
import rishikesh from "./Rishikesh.jpg";

export const homeImages = { home, home2, chooseTour, search_icon };

export const package_list = [
  {
    _id: "1",
    name: "Jaipur",
    image: jaipur,
    price: 500,
    description:
      "Jaipur is the capital and the largest city of the Indian state of Rajasthan.",
    day: "4 Days 5 Nights",
    longDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, voluptates a eum nisi quidem aut ut quod ab, architecto at nobis provident maxime assumenda exercitationem delectus ad nostrum, sunt totam magni molestiae facilis fugiat dolor autem earum? Natus quisquam eos sapiente, quos temporibus voluptate laboriosam amet nisi? Soluta, repellat assumenda.",
    itinerary: [
      {
        day: 1,
        title: "City Palace & Hawa Mahal",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, voluptates a eum nisi quidem aut ut quod ab.",
      },
      {
        day: 2,
        title: "Jantar Mantar & Amber Palace",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, voluptates a eum nisi quidem aut ut quod ab.",
      },
      {
        day: 3,
        title: "Nahargrah Fort & The City Palace",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, voluptates a eum nisi quidem aut ut quod ab.quos temporibus voluptate laboriosam amet nisi? Soluta, repellat assumenda.",
      },
      {
        day: 4,
        title: "Jal Mahal & Jaigarh Fort",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, voluptates a eum nisi quidem aut ut quod ab.",
      },
    ],
    category: "Rajasthan",
  },
  {
    _id: "2",
    name: "Banglore",
    image: banglore,
    price: 500,
    description:
      "Jaipur is the capital and the largest city of the Indian state of Rajasthan.",
    day: "4 Days 5 Nights",
    category: "Karnataka",
  },
  {
    _id: "3",
    name: "Mumbai",
    image: mumbai,
    price: 500,
    description:
      "Jaipur is the capital and the largest city of the Indian state of Rajasthan.",
    day: "4 Days 5 Nights",
    category: "Maharastra",
  },
  {
    _id: "4",
    name: "Kerela",
    image: kerela,
    price: 500,
    description:
      "Jaipur is the capital and the largest city of the Indian state of Rajasthan.",
    day: "4 Days 5 Nights",
    category: "Rajasthan",
  },
  {
    _id: "5",
    name: "Mussoorie",
    image: mussoorie,
    price: 500,
    description:
      "Jaipur is the capital and the largest city of the Indian state of Rajasthan.",
    day: "4 Days 5 Nights",
    category: "Uttarakhand",
  },
  {
    _id: "6",
    name: "Rishikesh",
    image: rishikesh,
    price: 500,
    description:
      "Jaipur is the capital and the largest city of the Indian state of Rajasthan.",
    day: "4 Days 5 Nights",
    category: "Uttarakhand",
  },
];

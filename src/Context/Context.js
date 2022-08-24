// import foodfiesta from "../assets/ProductImages/foodfiesta.png";
// import covinfo from "../assets/ProductImages/covinfo.png";
// import alcatraz from "../assets/ProductImages/alcatraz.png";
// import happyhomes from "../assets/ProductImages/happyhomes.png";
// import flagow from "../assets/ProductImages/flagow.png";
// import amazon from "../assets/ProductImages/amazon.png";
// import shope from "../assets/ProductImages/shope.png";
import diseasePrediction from "../assets/ProductImages/DiseasePrediction.png";
import foodVillaa from "../assets/ProductImages/FoodVillaa.JPG";
import weather from "../assets/ProductImages/WhatsTheWeather.JPG";

export const states = {
  projects: [
    {
      title: "Disease Prediction",
      img: diseasePrediction,
      description: `This is a disease prediction WebApp where the user can select symptoms that he is suffering from and based on those symptoms a disease is predicted. You can further know about the disease as I have used another API for the same. `,
      url: "https://diseaseprediction.netlify.app/",
    },
    {
      title: "Food Villaa",
      img: foodVillaa,
      description: `This is a food recipe webApp which is using EDAMAM recipe API for the response. The user can search for any recipe and it will give the results accordingly`,
      url: "https://foodvillaa.netlify.app/",
    },
    {
      title: "What's the Weather",
      img: weather,
      description: `This is a weather details WebApp where the user can search for weather information for any location. I have used react-redux and redux-sagas for this project to handle the global state and API calls `,
      url: "https://whatstheweathersite.netlify.app/",
    },
    //     {
    //       title: "Alcatraz",
    //       img: alcatraz,
    //       description: `A virtual escape room is a web-based, moderated game that is conducted over a video
    // conference platform like Zoom or Microsoft Teams. In a virtual escape room, a group of
    // players works together to uncover clues and solve puzzles in order to “escape” from a themed
    // location`,
    //       url: "http://runaway.games/",
    //     },
    //     {
    //       title: "Covid Tracker",
    //       img: covinfo,
    //       description: `This web app tracks worldwide covid cases and can even separate them country-
    // wise. This also shows the number of people recovered and deaths. Also, it shows
    // a line graph to better visualize the data and a sorted list of countries by covid
    // cases.`,
    //       url: "https://covid19-90f4c.web.app/",
    //     },
    //     {
    //       title: "Happy Homes",
    //       img: happyhomes,
    //       description: `This is basically a real estate app. It uses Google Maps API, to show
    //       maps with markups of the houses which are filtered by conditions set by the user, and
    //        data is fetched from a database. Users can filter houses by distance, house area, and
    //         price. It is Mobile responsive as well.`,
    //       url: "https://happpyhomes.web.app/",
    //     },
    //     {
    //       title: "MiniMall",
    //       img: shope,
    //       description: `This is fully functional Ecommerece website made using react and redux. And has
    //       awesome feautures like sign-in, payment using stripe, cart, and much more. `,
    //       url: "https://shopereact.web.app/",
    //     },
    //     {
    //       title: "Flagow",
    //       img: flagow,
    //       description: `It's again my original design. It's an interactive fun quiz game that tests your
    // knowledge of ags, capitals, and currencies. This is just the rst version and a lot
    // more functionality will be coming to this.`,
    //       url: "https://itsflagow.web.app/",
    //     },
    //     {
    //       title: "FoodFiesta",
    //       img: foodfiesta,
    //       description: `This app is completely orignal.It is using spoonacular API to fetch the data. You
    // can search recipes, nd a random recipe, nd food facts and jokes. I will be
    // integrating it with tomato API to get info about local food places`,
    //       url: "https://itsfoodfiesta.web.app/",
    //     },
    //     {
    //       title: "Amazon Clone",
    //       img: amazon,
    //       description: `This was my personal project. In which I made an exact replica of Amazon. Which
    // even had user authentication provided by rebase and complete payment
    // processing using stripe api. It had all the features like cart and ratings of the
    // product.`,
    //       url: "https://e-clone-33ffe.web.app/",
    //     },
  ],
};

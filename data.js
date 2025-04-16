

class FoodSpot {
    constructor(name, address, category, rating, visited, imageURL) {
        this.name = name;
        this.address = address;  // This will be an object with street, city, state, zip
        this.category = category;
        this.rating = rating;
        this.visited = visited;
        this.imageURL = imageURL;
    }
}



var FoodSpotsList = [
    new FoodSpot(
        "MUN Korean Steakhouse",
        {
            street: "3519 W 6th St",
            city: "Los Angeles",
            state: "CA",
            zip: "90020"
        },
        "Korean",
        4.3,
        false,
        "https://lh3.googleusercontent.com/p/AF1QipP4OLucFylMkDqr2eIAC8cEngl476yVPfPw6k3o=w203-h152-k-no"
    ),
    new FoodSpot(
        "Sweet Wheat",
        {
            street: "1430 S Pacific Coast Hwy",
            city: "Redondo Beach",
            state: "CA",
            zip: "90277"
        },
        "Bakery",
        4.6,
        true,
        "https://lh3.googleusercontent.com/p/AF1QipPsAEeoD22ArnzHbrj7s3HJ9wCUw7CB5xzFV-uV=w1320-h1431-p-k-no"
    ),
    new FoodSpot(
        "Jus' Poke",
        {
            street: "501 N Pacific Coast Hwy",
            city: "Redondo Beach",
            state: "CA",
            zip: "90277"
        },
        "Poke",
        4.8,
        true,
        "https://images.squarespace-cdn.com/content/v1/5260401be4b0ef761731719b/1391052830283-3PHWMN278N50JUSWYWBR/Jus+Poke+Logo+Cropped.png?format=1500w"
    ),
    new FoodSpot(
        "Dominique's Kitchen",
        {
            street: "522 S Pacific Coast Hwy",
            city: "Redondo Beach",
            state: "CA",
            zip: "90277"
        },
        "French",
        4.7,
        true,
        "DomKit.png"
    ),
    new FoodSpot(
        "Arsicault Bakery",
        {
            street: "397 Arguello Blvd",
            city: "San Francisco",
            state: "CA",
            zip: "94118"
        },
        "Bakery",
        4.8,
        false,
        "https://lh3.googleusercontent.com/p/AF1QipPdwMLXOvuTgHi630GS5fY0PPT7dhz4sGt7lWwu=w203-h152-k-no"
    ),
    new FoodSpot(
        "Il Giardino di Lilli",
        {
            street: "7467 Girard Ave",
            city: "La Jolla",
            state: "CA",
            zip: "92037"
        },
        "Cafe",
        4.7,
        false,
        "https://lillilajolla.com/wp-content/uploads/2022/06/coffee-pastries-lilli-la-jolla-1200x867.jpg"
    ),
    new FoodSpot(
        "DASHI OKUME",
        {
            street: "50 Norman Ave",
            city: "Brooklyn",
            state: "NY",
            zip: "11222"
        },
        "Japanese",
        4.7,
        false,
        "https://lh3.googleusercontent.com/p/AF1QipOijbzxZ0X-wcVrTyu0Fo7NgX_2Q1V_lWegPvLW=w203-h135-k-no"
    ),
    new FoodSpot(
        "Awan",
        {
            street: "866 Huntley Dr",
            city: "West Hollywood",
            state: "CA",
            zip: "90069"
        },
        "Ice Cream",
        4.8,
        false,
        "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-o-I3k-8OQv3L_29TZ_NOisRPVYzBmL2Q6mPvX_uaVCGmu1oepc6F-7N7Qj1j33a4aKapy5IpKpP3H0JGSGszetHguBG10koXEWKsPkBQVwlFFNWpNk1LYsPWQnLWs3kxQkc8=s1092-k-no"
    ),
    new FoodSpot(
        "626 Ice Cream",
        {
            street: "160 E Duarte Rd STE E",
            city: "Arcadia",
            state: "CA",
            zip: "91006"
        },
        "Ice Cream",
        4.8,
        false,
        "https://lh3.googleusercontent.com/gps-cs-s/AB5caB9KzO_KdPhkLmg2-zyqxyIyaG9FoyniYYtaKEOKIYZ9QUA9-uB56uHNC9QHeZZhMHmglvRyTc9Se1kfsmZEqIVcb_A8ciV44LH9DMdFjvZoEKNtXyNDrcaTSC5waNBtQazZPjCSuA=w203-h152-k-no",
    ),
    new FoodSpot(
        "Cobi's",
        {
            street: "2104 Main St",
            city: "Santa Monica",
            state: "CA",
            zip: "90405"
        },
        "Southeat Asian",
        4.5,
        false,
        "https://lh3.googleusercontent.com/p/AF1QipOo5mOCzWbvVUe0XBdEXBRBXHCZNb79yaURAe_u=w203-h125-k-no"
    ),
    new FoodSpot(
        "Holbox",
        {
            street: "3655 S Grand Ave c9",
            city: "Los Angeles",
            state: "CA",
            zip: "90007"
        },
        "Seafood",
        4.8,
        false,
        "https://lh3.googleusercontent.com/p/AF1QipOl12iTv4eOc8-kgNNy8Lzf4JFfTDLu2ZV2slAJ=w203-h135-k-no"
    ),
    new FoodSpot(
        "Tartine Manufactory",
        {
            street: "595 Alabama St",
            city: "San Francisco",
            state: "CA",
            zip: "94110"
        },
        "Bakery",
        4.5,
        true,
        "https://lh3.googleusercontent.com/p/AF1QipMSsglwSBpX41UbEEnmC_q-mbXuB1v3OiO49lww=w203-h121-k-no"
    ),
    new FoodSpot(
        "Danbi",
        {
            street: "3465 W 6th St Suite 90-100",
            city: "Los Angeles",
            state: "CA",
            zip: "90020"
        },
        "Korean",
        4.6,
        false,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KOlH7subjcUz7xt4fpNQDAF1oNgso_pUlA&s"
    ),
    new FoodSpot(
        "Layla Bagels",
        {
            street: "1614 Ocean Park Blvd",
            city: "Santa Monica",
            state: "CA",
            zip: "90405"
        },
        "Bagel",
        4.5,
        false,
        "https://lh3.googleusercontent.com/p/AF1QipPZhzPdTwaTEsD7lxD19EzQERUhvv3LT-Kj4DHE=w203-h203-k-no"
    ),
    new FoodSpot(
        "Handel's Homemade Ice Cream & Yogurt",
        {
            street: "1882 S Pacific Coast Hwy",
            city: "Redondo Beach",
            state: "CA",
            zip: "90277"
        },
        "Ice Cream",
        4.8,
        true,
        "https://lh3.googleusercontent.com/p/AF1QipMJz9Aw_0PpJ8D39wLEvP_p_uLAwMJqH_z3xmTF=w203-h152-k-no"
    ),
    new FoodSpot(
        "Inaba",
        {
            street: "20920 Hawthorne Blvd",
            city: "Torrance",
            state: "CA",
            zip: "90503"
        },
        "Japanese",
        4.6,
        true,
        "https://lh3.googleusercontent.com/p/AF1QipNObLIX1tIeIDQRyroDSBh9p2heCcR3DtypOG9u=w203-h152-k-no"
    ),
    new FoodSpot(
        "Baekjeong",
        {
            street: "1725 W Carson St",
            city: "Torrance",
            state: "CA",
            zip: "90501"
        },
        "Korean",
        4.4,
        true,
        "https://lh3.googleusercontent.com/p/AF1QipO8IOiFO0PMibmuriylIQhiFi81VeSVXbgsGIF8=w203-h152-k-no"
    ),
    new FoodSpot(
        "Sal's Place",
        {
            street: "350 N Robertson Blvd",
            city: "West Hollywood",
            state: "CA",
            zip: "90048"
        },
        "Italian",
        4.7,
        false,
        "https://s3-media0.fl.yelpcdn.com/bphoto/h0iEFXbmZ-2XC3EvbGP2Ng/o.jpg"
    ),
    new FoodSpot(
        "Pine and Crane",
        {
            street: "1120 S Grand Ave Unit 101",
            city: "Los Angeles",
            state: "CA",
            zip: "90015"
        },
        "Taiwanese",
        4.6,
        false,
        "https://images.squarespace-cdn.com/content/v1/5f76f9c28892cb5ed09394f5/d6623139-5a21-4912-80fc-ff9da7032dde/porknoodle.png?format=2500w"
    ),
    new FoodSpot(
        "Dialog Cafe",
        {
            street: "8766 Holloway Dr",
            city: "West Hollywood",
            state: "CA",
            zip: "90069"
        },
        "Cafe",
        4.8,
        false,
        "https://lh3.googleusercontent.com/gps-cs-s/AB5caB9y4S2jRV_vrPxLuuisun0xG2Fy26_Hri797tMcSYfkC0GVzs_dwEgcNfKpaqhIwqopelcpdl0Z0VGkeJq55s85OZQwL_mV_xHc-V9mK59fcWC111lNGKcZGfSOnFtmu-Dx_T0O=w203-h152-k-no"
    ),

];
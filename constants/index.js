export const categories = [
    {
        id:1,
        name: 'Pizza',
        image: require('../assets/images/pizza.png')
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/burger.png'),
    },
    {
        id: 3,
        name: 'Drink',
        image: require('../assets/images/tropical-drink.png'),
    },
    {
        id: 4,
        name: 'Noodles',
        image: require('../assets/images/spaghetti.png'),
    },
    {
        id:5,
        name: 'Hot and Spicy',
        image: require('../assets/images/takeout-box.png'),
    },

]

export const featured = {
    id: 1,
    title: 'Pizza',
    description: 'Delicious and unique ',
    restaurants: [
        {
            id: 1,
            name: 'Pizza Hut',
            image: require('../assets/images/PizzaHut.jpg'),
            description: 'Famous for its pan pizzas',
            address: '123 Vo Thi Sau',
            stars: 4.5,
            reviews: '5.2k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Pepperoni Pizza',
                    description: 'Classic pepperoni with extra cheese',
                    price: '15',
                    image: require('../assets/images/PepperoniPizza.jpg')
                },
                {
                    id: 2,
                    name: 'Margherita Pizza',
                    description: 'Traditional Italian pizza with fresh basil and tomatoes',
                    price: '14',
                    image: require('../assets/images/MargheritaPizza.jpg')
                },
                {
                    id: 3,
                    name: 'BBQ Chicken Pizza',
                    description: 'Grilled chicken with tangy BBQ sauce and onions',
                    price: '16',
                    image: require('../assets/images/bbqchickenpizza.jpg')
                }
            ]
        },
        {
            id: 2,
            name: 'Domino Pizza',
            image: require('../assets/images/DominoPizza.jpg'),
            description: 'Speedy delivery and customizable pizzas',
            address: '456 Oak Street',
            stars: 4.2,
            reviews: '4.8k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Supreme Pizza',
                    description: 'Loaded with assorted toppings including peppers, onions, and sausage',
                    price: '17',
                    image: require('../assets/images/SupremePizza.jpg')
                },
                {
                    id: 2,
                    name: 'Vegetarian Pizza',
                    description: 'Fresh vegetables including mushrooms, peppers, and olives',
                    price: '15',
                    image: require('../assets/images/VegetarianPizza.jpg')
                },
                {
                    id: 3,
                    name: 'Meat Lovers Pizza',
                    description: 'A carnivore\'s delight with pepperoni, sausage, and bacon',
                    price: '18',
                    image: require('../assets/images/MeatLoversPizza.jpg')
                }
            ]
        },
        { id: 3,
            name: 'Little Caesars',
            image: require('../assets/images/LittleCaesarsPizza.jpg'),
            description: 'Affordable and convenient hot-n-ready pizzas',
            address: '789 Elm Street',
            stars: 4.0,
            reviews: '4.2k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Cheese Pizza',
                    description: 'Simple and classic with gooey melted cheese',
                    price: '10',
                    image: require('../assets/images/CheesePizza.jpg')
                },
                {
                    id: 2,
                    name: 'Hawaiian Pizza',
                    description: 'Tropical flavors with ham and pineapple',
                    price: '12',
                    image: require('../assets/images/HawaiianPizza.jpg')
                },
                {
                    id: 3,
                    name: 'Buffalo Chicken Pizza',
                    description: 'Spicy chicken with buffalo sauce and ranch drizzle',
                    price: '13',
                    image: require('../assets/images/BuffaloChickenPizza.jpg')
                }
            ]
        }
           
    ],
    id: 2,
    title2: 'Chicken',
    description2: 'Delicious and unique ',
    restaurants2: [
        {
            id: 1,
            name: 'Lotteria',
            image: require('../assets/images/PizzaHut.jpg'),
            description: 'Famous for its pan pizzas',
            address: '123 Vo Thi Sau',
            stars: 4.5,
            reviews: '5.2k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Pepperoni Pizza',
                    description: 'Classic pepperoni with extra cheese',
                    price: '15',
                    image: require('../assets/images/PepperoniPizza.jpg')
                },
                {
                    id: 2,
                    name: 'Margherita Pizza',
                    description: 'Traditional Italian pizza with fresh basil and tomatoes',
                    price: '14',
                    image: require('../assets/images/MargheritaPizza.jpg')
                },
                {
                    id: 3,
                    name: 'BBQ Chicken Pizza',
                    description: 'Grilled chicken with tangy BBQ sauce and onions',
                    price: '16',
                    image: require('../assets/images/bbqchickenpizza.jpg')
                }
            ]
        },
        
        {
            id: 3,
            name: 'Popeyes',
            image: require('../assets/images/LittleCaesarsPizza.jpg'),
            description: 'Affordable and convenient hot-n-ready pizzas',
            address: '789 Elm Street',
            stars: 4.0,
            reviews: '4.2k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Cheese Pizza',
                    description: 'Simple and classic with gooey melted cheese',
                    price: '10',
                    image: require('../assets/images/CheesePizza.jpg')
                },
                {
                    id: 2,
                    name: 'Hawaiian Pizza',
                    description: 'Tropical flavors with ham and pineapple',
                    price: '12',
                    image: require('../assets/images/HawaiianPizza.jpg')
                },
                {
                    id: 3,
                    name: 'Buffalo Chicken Pizza',
                    description: 'Spicy chicken with buffalo sauce and ranch drizzle',
                    price: '13',
                    image: require('../assets/images/BuffaloChickenPizza.jpg')
                }
            ]
        },
        {
            id: 2,
            name: 'Texas Chicken',
            image: require('../assets/images/DominoPizza.jpg'),
            description: 'Speedy delivery and customizable pizzas',
            address: '456 Oak Street',
            stars: 4.2,
            reviews: '4.8k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Supreme Pizza',
                    description: 'Loaded with assorted toppings including peppers, onions, and sausage',
                    price: '17',
                    image: require('../assets/images/SupremePizza.jpg')
                },
                {
                    id: 2,
                    name: 'Vegetarian Pizza',
                    description: 'Fresh vegetables including mushrooms, peppers, and olives',
                    price: '15',
                    image: require('../assets/images/VegetarianPizza.jpg')
                },
                {
                    id: 3,
                    name: 'Meat Lovers Pizza',
                    description: 'A carnivore\'s delight with pepperoni, sausage, and bacon',
                    price: '18',
                    image: require('../assets/images/MeatLoversPizza.jpg')
                }
            ]
        },
    ]
};

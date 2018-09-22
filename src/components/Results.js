import React from 'react';

const data = {
  Appetizers: [
    'Indian Style Rice',
    'Indian Fish Coconut Curry',
    'Indian Butter Chicken',
    'Indian-Spiced Mixed Nuts',
    'Spicy Red Lentil and Chickpea Stew (Paulas Moroccan Lentil Stew)',
  ],
  Salads: [
    'Zucchini and Tomato Curry',
    'Kerala Spiced Peas',
    'Mango Lassi',
    'Indian Spiced Cauliflower and Potato',
    'Strawberry Lassi',
  ],
  'Side Dishes': [
    'Curried Ground Turkey with Potatoes',
    'Skinny Chicken Tikka Masala',
    'Curried Sauteed Cauliflower',
    'Basmati Rice',
    'Keema (Indian-Style Ground Meat)',
  ],
  'Main Dishes': [
    'Easy Mango Lassi',
    'Tandoori Chicken',
    'Chana Masala',
    'Middle Eastern Spicy Ground Beef with Baharat Seasoning, Mint, and Cilantro',
    'Chicken Tikka Masala',
  ],
  'Lunch and Snacks': [
    'Indian Sweet Bread',
    'Dahi Chicken Curry, Doi Murgh',
    'Masala Chai (Indian Spiced Tea)',
    'Goan Curried Braised Beef With Coconut Milk, Vinegar and Potatoes',
    'BOMBAY ALOO',
  ],
  'Breakfast and Brunch': [
    'Tandoori Turkey Breast',
    'Slow Cooker Lamb Rogan Josh',
    'Indian Roasted Red Lentil Soup',
    'Squash & Red Lentil Curry',
    'Lamb and Fresh Plum Tagine',
  ],
  Beverages: [
    'Indian Spicy Chai Tea',
    'Indian Dhal (Lentil Puree)',
    'Pineapple Lassi',
    'Panchratani Daal, Five-Lentils Medley',
    'Healthy Tandoori Chicken Kebab',
  ],
  'Condiments and Sauces': [
    'Mint and Pomegranate Raita',
    'Eggplant Chana Masala',
    'Chickpea Curry with Quinoa',
    'Tandoori Chicken Tikka',
    'Indian Curried Poached Eggs',
  ],
  'Afternoon Tea': [
    'Kerala style Fish Molee/Moly',
    'Indian-Seasoned Vegetable Patties',
    'Hotel Saravana Bhavan Vegetable Kurma',
    'Butter Chicken',
    'Peanut Chicken Curry',
  ],
  Desserts: [
    'Indian Lentil Soup',
    'Indian Lamb Curry',
    'Masala Chai (Hot Indian Tea spiced with Cardamom and Ginger)\x80\x93 Lamb and Spinach Curry',
    'Naan (Indian Flat Bread)',
  ],
  '': [
    'Rasgulla -Famous Bengali Sweet | Indian Sweet',
    'Creamy Chicken Tikka Masala',
    'Indian Naan',
    'Tawa Pulao',
    'Indian Potatoes with Mustard Seeds (Sookhi Bhaji)',
  ],
  Breads: [
    'Paneer Kofta Curry',
    'Indian Chai Oatmeal',
    'Mauritian Vegan Briyani with Okra and Soya Chunks (Textured Vegetable Protein)',
    'Coconut Rice',
    'Mango Iced Tea',
  ],
  Soups: [
    'Quinoa Cauliflower Biryani. Vegan Glutenfree',
    'Matar Paneer',
    'Saffron Rice',
    'Dhal Makhani',
    'Aloo Matar Dry Recipe-How to make dry aloo matar',
  ],
  Cocktails: [
    'Indian Saffron Chicken',
    'Easy Indian Naan Bread',
    'Indian Basmati Rice Seasoned with Garam Masala',
    'Indian Aloo Gobi',
    'Indian Spiced Beef Kabobs',
    'Lamb Saag ',
  ],
};

export default class Results extends React.Component {
  render () {
    return (
      <div>
        {Object.keys(data).map(category => (
          <React.Fragment>
            <h3>{category}</h3>
            <ul>
              {data[category].map(listing => <li>{listing}</li>)}
            </ul>
          </React.Fragment>

        ))}
      </div>
    )
  }
}

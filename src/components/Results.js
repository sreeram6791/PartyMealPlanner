import React from 'react';

const data = {
  "Afternoon Tea": [
    "Bangladeshi Beef Samosas", 
    "Indian Saffron Chicken", 
    "BOMBAY ALOO", 
    "Chicken Makhani (Indian Butter Chicken)", 
    "Spicy Tandoori Chicken, Indian Mexican Fusion"
  ], 
  "Appetizers": [
    "Indian Spiced Cauliflower and Potato", 
    "Mango Lassi", 
    "Curried Ground Turkey with Potatoes", 
    "Skinny Chicken Tikka Masala", 
    "Middle Eastern Spicy Ground Beef with Baharat Seasoning, Mint, and Cilantro"
  ], 
  "Beverages": [
    "Saffron Rice", 
    "Chettinad Chicken curry recipe-how to make chettinad chicken curry", 
    "Tandoori Chicken Recipe - Grilled Chicken With Spiced Yogurt Marinade", 
    "Chickpea Curry with Quinoa", 
    "Indian Cardamom Lassi"
  ], 
  "Breads": [
    "Halibut with Indian spices", 
    "- Naan,  Boiled rice", 
    "Healthy Slow Cooker Indian Butter Chicken", 
    "Mauritian Vegan Briyani with Okra and Soya Chunks (Textured Vegetable Protein)", 
    "Indian Spiced Rice"
  ], 
  "Breakfast and Brunch": [
    "Mutton Do Pyaza", 
    "Indian Roasted Red Lentil Soup", 
    "Goan Curried Braised Beef With Coconut Milk, Vinegar and Potatoes", 
    "Home \u00c2\u00bb Non-Vegetarian \u00c2\u00bb Keema Matar (Minced Lamb & Green Peas)", 
    "Avarakkai Kuzhambu, Avarakkai Paruppu Curry, Broad Beans Curry"
  ], 
  "Cocktails": [
    "Butter Chicken/ Murgh Makhani", 
    "Dhal Makhani", 
    "Red Lentils and Spinach in Masala Sauce", 
    "30-Minute Vegan Chana Masala", 
    "Healthy Slow Cooked Tikka Masala"
  ], 
  "Condiments and Sauces": [
    "Indian Saffron Rice", 
    "Lamb Saag \u00e2\u0080\u0093 Lamb and Spinach Curry", 
    "Lahsooni Methi paneer", 
    "Indian Kadai Chicken", 
    "Indian Cumin Potatoes"
  ], 
  "Desserts": [
    "Indian Beef Curry", 
    "Indian Kheer", 
    "Masala Chai (Indian Spiced Tea)", 
    "Chicken Tikka Tacos", 
    "Indian Rogan Josh"
  ], 
  "Lunch and Snacks": [
    "Masala Chai (Hot Indian Tea spiced with Cardamom and Ginger)", 
    "Boneless Tandoori Chicken recipe in oven-how to make tandoori chicken", 
    "Vegan Bombay Potatoes and Peas", 
    "Eggplant Curry", 
    "Aloo Paratha Recipe | How to make Punjabi Aloo ka Paratha"
  ], 
  "Main Dishes": [
    "Easy Mango Lassi", 
    "Indian Fish Coconut Curry", 
    "Keema (Indian-Style Ground Meat)", 
    "Indian Style Rice", 
    "Zucchini and Tomato Curry"
  ], 
  "Salads": [
    "Strawberry Lassi", 
    "Indian Butter Chicken", 
    "Chana Masala", 
    "Indian-Spiced Mixed Nuts", 
    "Tandoori Chicken"
  ], 
  "Side Dishes": [
    "Kerala Spiced Peas", 
    "Spicy Red Lentil and Chickpea Stew (Paulas Moroccan Lentil Stew)", 
    "Basmati Rice", 
    "Chicken Tikka Masala", 
    "Curried Sauteed Cauliflower"
  ], 
  "Soups": [
    "Chicken Biryani", 
    "Curry Cauliflower Rice and Quinoa", 
    "Indian Naan Bread", 
    "Slow Cooker Tikka Masala", 
    "Indian Garbanzo Beans (Chole)"
  ]
}
;

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

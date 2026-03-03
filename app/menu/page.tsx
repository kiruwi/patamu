import type { Metadata } from "next";
import Link from "next/link";

type MenuItem = {
  name: string;
  price: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
  layout?: "table" | "lines";
  note?: string;
};

type MenuCategory = {
  title: string;
  image: string;
  imageAlt: string;
  groups: MenuGroup[];
};

export const metadata: Metadata = {
  title: "Patamu Restaurant Menu | Patamu Restaurant & Lodge",
  description:
    "Freshly prepared African and international dishes at Patamu Restaurant. All prices in TSH.",
};

const menuCategories: MenuCategory[] = [
  {
    title: "Starters",
    image:
      "https://images.unsplash.com/photo-1672636401816-5baecca0d8d4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh avocado salad served in a bowl.",
    groups: [
      {
        title: "Soup",
        layout: "lines",
        items: [{ name: "Zucchini Soup", price: "5,000" }],
      },
      {
        title: "Salads",
        items: [
          { name: "Vegetable Salad", price: "5,000" },
          { name: "Cucumber & Tomato Salad", price: "5,000" },
          { name: "Avocado Salad", price: "5,000" },
          { name: "Fruit Plate", price: "5,000" },
        ],
      },
    ],
  },
  {
    title: "Desserts",
    image:
      "https://images.unsplash.com/photo-1555411093-7440ae076e89?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh fruit salad served in a bowl.",
    groups: [
      {
        title: "Desserts",
        items: [
          { name: "Chocolate Mousse", price: "7,000" },
          { name: "Mango Mousse", price: "7,000" },
          { name: "Banana Mousse", price: "7,000" },
          { name: "Fruit Salad", price: "5,000" },
          { name: "Banana Fritter", price: "5,000" },
        ],
      },
    ],
  },
  {
    title: "Main Courses",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Mixed African main course platter with grilled meats.",
    groups: [
      {
        title: "Beef",
        items: [
          { name: "Beef Curry", price: "9,000" },
          { name: "Roasted Beef", price: "9,000" },
          { name: "Beef Stir Fry", price: "10,000" },
          { name: "Beef Pepper Steak", price: "10,000" },
          { name: "Grilled Beef", price: "10,000" },
        ],
      },
      {
        title: "Chicken",
        items: [
          { name: "Chicken Curry", price: "9,000" },
          { name: "Roasted Chicken", price: "9,000" },
          { name: "Rosemary Chicken", price: "10,000" },
          { name: "Stir Fry Chicken", price: "10,000" },
          { name: "Grilled Chicken", price: "10,000" },
          { name: "Organic Steamed Chicken (Kienyeji)", price: "30,000" },
        ],
      },
      {
        title: "Fish",
        items: [
          { name: "Steamed Fish", price: "10,000" },
          { name: "Pan Fried Fish", price: "10,000" },
          { name: "Fish Curry", price: "10,000" },
        ],
      },
      {
        title: "Pork",
        items: [
          { name: "Pork Curry", price: "9,000" },
          { name: "Roasted Pork", price: "9,000" },
          { name: "Stir Fry Pork", price: "10,000" },
          { name: "Grilled Pork", price: "10,000" },
        ],
      },
    ],
  },
  {
    title: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Freshly baked pizza topped with basil and cheese.",
    groups: [
      {
        title: "Pizza",
        items: [
          { name: "Margherita", price: "18,000" },
          { name: "Mushroom", price: "18,000" },
          { name: "Sausage", price: "18,000" },
          { name: "Chicken", price: "20,000" },
          { name: "Minced Beef", price: "20,000" },
          { name: "Beef", price: "20,000" },
        ],
        note: "Extra topping: +3,000",
      },
    ],
  },
  {
    title: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Grilled beef burger with fries on a plate.",
    groups: [
      {
        title: "Burgers",
        items: [
          { name: "Beef Burger", price: "15,000" },
          { name: "Chicken Burger", price: "15,000" },
          { name: "Cheese Burger", price: "17,000" },
        ],
      },
    ],
  },
  {
    title: "BBQ Grill",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Assorted grilled barbecue skewers and meat.",
    groups: [
      {
        title: "BBQ Grill",
        items: [
          { name: "Chicken Skewers", price: "5,000" },
          { name: "Beef Skewer", price: "5,000" },
          { name: "Beef BBQ (1kg)", price: "15,000" },
          { name: "Goat BBQ (1kg)", price: "20,000" },
          { name: "Chicken BBQ (Whole)", price: "32,000" },
        ],
      },
    ],
  },
  {
    title: "Sides",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Steamed rice and roasted potatoes served as sides.",
    groups: [
      {
        title: "Potatoes",
        layout: "lines",
        items: [
          { name: "Mashed Potatoes", price: "5,000" },
          { name: "French Fries", price: "5,000" },
          { name: "Roasted Wedges", price: "5,000" },
          { name: "Sautéed Potatoes", price: "5,000" },
        ],
      },
      {
        title: "Rice",
        layout: "lines",
        items: [
          { name: "Steamed Rice", price: "5,000" },
          { name: "Turmeric Rice", price: "5,000" },
          { name: "Vegetable Rice", price: "5,000" },
          { name: "Brown Rice", price: "5,000" },
        ],
      },
    ],
  },
];

function MenuGroupView({ group }: { group: MenuGroup }) {
  if (group.layout === "lines") {
    return (
      <div className="restaurant-menu-group">
        <h3>{group.title}</h3>
        <ul className="restaurant-menu-lines">
          {group.items.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span>
              <span>TSH {item.price}</span>
            </li>
          ))}
        </ul>
        {group.note ? <p className="restaurant-menu-note">{group.note}</p> : null}
      </div>
    );
  }

  return (
    <div className="restaurant-menu-group">
      <h3>{group.title}</h3>
      <table className="restaurant-menu-table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {group.items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>TSH {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {group.note ? <p className="restaurant-menu-note">{group.note}</p> : null}
    </div>
  );
}

export default function MenuPage() {
  return (
    <main className="restaurant-menu-page">
      <div className="restaurant-menu-shell">
        <header className="restaurant-menu-header">
          <Link href="/" className="restaurant-menu-home">
            Back to home
          </Link>
          <div className="restaurant-menu-intro">
            <h1>Patamu Restaurant Menu</h1>
            <p>Freshly prepared African and international dishes.</p>
            <p>All prices in TSH.</p>
          </div>
        </header>

        {menuCategories.map((category) => (
          <section className="restaurant-menu-category" key={category.title}>
            <figure className="restaurant-menu-media">
              <img src={category.image} alt={category.imageAlt} loading="lazy" />
            </figure>
            <div className="restaurant-menu-content">
              <h2>{category.title}</h2>
              {category.groups.map((group) => (
                <MenuGroupView key={group.title} group={group} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

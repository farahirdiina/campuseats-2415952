const vendors = [
  {
    id: "kafe-maryam",
    name: "Kafe Maryam",
    location: "Mahallah Maryam, Block A",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "mar-1",
        name: "Nasi Ayam Gepuk",
        description: "Fried chicken with rice and sambal",
        price: 7.5,
        category: "Rice",
        available: true,
      },
      {
        id: "mar-2",
        name: "Spaghetti Bolognese",
        description: "Pasta with meat sauce",
        price: 8,
        category: "western",
        available: true,
      },
      {
        id: "mar-3",
        name: "Iced Hazelnut Chocolate",
        description: "Chocolate Hazelnut Drink",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
  {
    id: "kafe-aminah",
    name: "Kafe Aminah",
    location: "Mahallah Aminah, Groun Floor",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "ami-1",
        name: "Nasi Ayam Penyet",
        description: "Smashed fried chicken with rice and sambal",
        price: 9,
        category: "Rice",
        available: true,
      },
      {
        id: "ami-3",
        name: "   Air Bandung",
        description: "Rose Syrup with milk ",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
];

export default vendors;

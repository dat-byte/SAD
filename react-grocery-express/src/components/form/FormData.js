const FormData = {
  customer: {
    placeholder: [
      "Account ID",
      "First Name",
      "Last Name",
      "Phone Number",
      "Credit",
      "Rating (Integer)",
      "Address (Integer)"
    ],
    formData: {
      account_id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      credit: "",
      rating: "",
      address: ""
    },
    input: ["account_id", "first_name", "last_name", "phone_number", "credit", "rating", "address"]
  },
  employee: {
    placeholder: [
      "Account",
      "First Name",
      "Last Name",
      "Phone Number",
      "TAX ID",
      "License ID",
      "Experience (Integer)",
    ],
    formData: {
      account_id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      tax_id: "",
      license_id: "",
      experience: "",
    },
    input: [
      "account_id",
      "first_name",
      "last_name",
      "phone_number",
      "tax_id",
      "license_id",
      "experience",
    ],
  },
  store: {
    placeholder: [
      "Store Name",
      "Store Revenue",
      "Spending Tier 1",
      "Spending Tier 2",
      "Spending Tier 3",
      "Address (Integer)"
    ],
    formData: {
      store_id: "",
      store_revenue: "",
      spending_tier_1: "",
      spending_tier_2: "",
      spending_tier_3: "",
      address: ""
    },
    input: [
      "store_id",
      "store_revenue",
      "spending_tier_1",
      "spending_tier_2",
      "spending_tier_3",
      "address"
    ],
  },
  drone: {
    placeholder: [
      "Drone ID",
      "Weight Capacity",
      "Fuel",
      "Max Fuel",
      "Make Refueling Drone (true or false)",
      "Select Store",
      "Select Employee",
    ],
    formData: {
      drone_id: "",
      weight_cap: "",
      fuel: "",
      max_fuel: "",
      make_refuel_drone: "",
      store_id: "",
      employee: ""
    },
    input: [
      "drone_id",
      "weight_cap",
      "fuel",
      "max_fuel",
      "make_refuel_drone",
      "store_id",
      "employee",
    ],
  },
  item: {
    placeholder: ["Select Store", "Item Name", "Item Weight"],
    formData: {
      store_id: "",
      item_name: "",
      item_weight: "",
    },
    input: ["store_id", "item_name", "item_weight"],
  },
  order: {
    placeholder: [
      "Select Store",
      "Select Customer",
      "Select Drone",
      "Order ID",
      "Distance for Deliver",
    ],
    formData: {
      store_id: "",
      customer_id: "",
      drone_id: "",
      order_id: "",
      distance_to_deliver: "",
    },
    input: [
      "store_id",
      "customer_id",
      "drone_id",
      "order_id",
      "distance_to_deliver",
    ],
  },
  "send-refueling-drone": {
    placeholder: [
      "Select Store",
      "Select Drone to Refuel",
      "Select Refueling Drone",
    ],
    formData: {
      store_id: "",
      drone_refuel_id: "",
      refueling_drone_id: "",
    },
    input: ["store_id", "drone_refuel_id", "refueling_drone_id"],
  },
  "transfer-order": {
    placeholder: ["Select Store", "Select Order", "Select Drone"],
    formData: {
      store_id: "",
      order_id: "",
      drone_id: "",
    },
    input: ["store_id", "order_id", "drone_id"],
  },
  "add-item-to-order": {
    placeholder: [
      "Select Store",
      "Select Order",
      "Select Item",
      "Quantity (Integer)",
      "Unit Price",
    ],
    formData: {
      store_id: "",
      order_id: "",
      item_name: "",
      quantity: "",
      price: "",
    },
    input: ["store_id", "order_id", "item_name", "quantity", "price"],
  },
  coupon: {
    placeholder: [
        'Coupon Code',
        'Discount Percent',
        'Expiration Date MM/DD/YYYY',
        'Select Store'
    ],
    formData: {
        coupon_id: "",
        discount: "",
        expiration: "",
        store_id: ""
    },
    input: ['coupon_id', 'discount', 'expiration', 'store_id']
  },
  "purchase-order": {
    placeholder: [
      'Store ID',
      'Order ID'
    ],
    formData: {
      store_id: "",
      order_id: ""
    },
    input: ['store_id', 'order_id']
  }
};

export default FormData;

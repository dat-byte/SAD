const FormData = {
  customer: {
    placeholder: [
      "Account ID",
      "First Name",
      "Last Name",
      "Phone Number",
      "Credit",
    ],
    formData: {
      account_id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      credit: "",
    },
    input: ["account_id", "first_name", "last_name", "phone_number", "credit"],
  },
  employee: {
    placeholder: [
      "Account",
      "First Name",
      "Last Name",
      "Phone Number",
      "TAX ID",
      "License ID",
      "Experience",
    ],
    formData: {
      account_id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      tax_id: "",
      licencse_id: "",
      experience: "",
    },
  },
  store: {
    placeholder: [
      "Store Name",
      "Store Revenue",
      "Spending Tier 1",
      "Spending Tier 2",
      "Spending Tier 3",
    ],
    formData: {
      store_id: "",
      store_revenue: "",
      spending_tier_1: "",
      spending_tier_2: "",
      spending_tier_3: "",
    },
  },
  drone: {
    placeholder: [
      "Drone ID",
      "Weight Capacity",
      "Remaining Flights",
      "Make Refueling Drone",
      "Select Store",
      "Select Employee",
    ],
    formData: {
      drone_id: "",
      weight_cap: "",
      remaining_flights: "",
      make_refuel_drone: "",
      store: "",
      employee: "",
    },
  },
  item: {
    placeholder: ["Select Store", "Item Name", "Item Weight"],
    formData: {
      store_id: "",
      item_name: "",
      item_weight: "",
    },
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
  },
  "transfer-order": {
    placeholder: ["Select Store", "Select Order", "Select Drone"],
    formData: {
      store_id: "",
      order_id: "",
      drone_id: "",
    },
  },
  "add-item-to-order": {
    placeholder: [
      "Select Store",
      "Select Order",
      "Select Item",
      "Quantity (Whole Number)",
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
};

export default FormData;

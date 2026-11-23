const getOrderSummary = function ({
  orderId = "unknown",
  customer = "unknownCustomer",
  items: [first] = "noItems",
}) {
  const {address: {city} = "unknownCity"} = customer;
  return `Order ${orderId} to ${city} : ${first}`;
};

const order = {
  orderId: "ORD-901",
  customer: {
    name: "Kabir",
    address: {
      city: "Bengaluru",
      pin: "560001",
    },
  },
  items: ["Mechanical Keyboard", "USB-C Hub", "Mouse Pad"],
};

console.log(getOrderSummary(order));

const rawLogs =
  "  ord-101:LAPTOP:2:vip | ord-102:mouse:5:standard | ord-103:KEYBOARD:1:vip | ord-104:monitor:1:guest  ";

const inventory = {
  laptop: {price: 1000, stock: 5},
  mouse: {price: 50, stock: 2},
  keyboard: {price: 150, stock: 10},
  monitor: {price: 300, stock: 0},
};

const applyDiscount = function (price, discount, qty) {
  return price * ((100 - discount) / 100) * qty;
};

const parseAndClean = function (logs) {
  const parsedLogs = [];
  const cleanedLogs = logs.split("|");
  for (const log of cleanedLogs) {
    const [id, item, qty, tier] = log.trim().split(":");
    const normalizedItem = item.toLowerCase();
    const quantity = Number(qty);
    parsedLogs.push({
      id,
      item: normalizedItem,
      qty: quantity,
      tier,
    });
  }
  return parsedLogs;
};

const processOrders = function (logs, currentInventory) {
  let totalRevenue = 0;
  const lowStockAlerts = [];
  const updatedInventory = {...currentInventory};
  const parsedOrders = parseAndClean(logs);
  const processedOrders = [];

  for (const {id, item, qty, tier} of parsedOrders) {
    let status = null;
    let finalTotal = 0;

    if (qty > updatedInventory[item].stock) {
      status = "FAIL";
    } else {
      status = "SUCESS";
      updatedInventory[item].stock -= qty;

      switch (tier) {
        case "vip":
          finalTotal = applyDiscount(updatedInventory[item].price, 20, qty);
          break;
        case "standard":
          finalTotal = applyDiscount(updatedInventory[item].price, 10, qty);
          break;
        default:
          finalTotal = applyDiscount(updatedInventory[item].price, 0, qty);
      }
    }
    processedOrders.push({id, item, finalTotal, status});
    totalRevenue += finalTotal;

    if (updatedInventory[item].stock <= 2) {
      lowStockAlerts.push(`${item} ( ${updatedInventory[item].stock} left)`);
    }
  }
  return {
    processedOrders,
    totalRevenue,
    updatedInventory,
    lowStockAlerts,
  };
};

console.log(processOrders(rawLogs, inventory));

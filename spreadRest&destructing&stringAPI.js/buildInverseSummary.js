const getCleanedExtraTags = function (tags, defaultTag = "standard") {
  const cleanedTags = [];
  for (const tag of tags) {
    const replacedTag = tag.replaceAll("_", " ");
    const cleanedTag = replacedTag.trim().toLowerCase();
    cleanedTags.push(cleanedTag);
  }
  return [defaultTag, ...cleanedTags];
};

const getMaskedCardNum = function (cardNum) {
  const digitsOnly = cardNum.trim().replaceAll("-", "");
  const maskedCardNum = digitsOnly.slice(-4).padStart(12, "*");
  return maskedCardNum;
};

const getFormattedName = function (name) {
  const cleanedName = name.trim().toLowerCase();
  const firstCapital = cleanedName.at(0).toUpperCase();
  const remainingLetters = cleanedName.slice(1);
  return firstCapital.concat(remainingLetters);
};

const getFormattedId = function (id) {
  return id.trim().toUpperCase();
};

const buildInvoiceSummary = function (orderData, ...extraTags) {
  const {
    orderId = "unknown",
    customerName = "guest",
    cardNumber = "0000",
    items = [],
    internalSecretToken,
    ...safeOrderMeta
  } = orderData;
  const cleanedOrderId = getFormattedId(orderId);
  const cleanedCustomerName = getFormattedName(customerName);
  const maskedCard = getMaskedCardNum(cardNumber);
  const [primaryItem, ...otherItems] = items;
  const extraItemsCount = otherItems.length;
  const tags = getCleanedExtraTags(extraTags);

  return {
    ...safeOrderMeta,
    orderId: cleanedOrderId,
    customerName: cleanedCustomerName,
    maskedCard,
    primaryItem,
    extraItemsCount,
    tags,
  };
};

const rawOrder = {
  orderId: "  ord-2026-8841  ",
  customerName: "ananya rao",
  cardNumber: "4532-0151-1283-0366",
  items: ["Mechanical Keyboard", "USB-C Cable", "Laptop Stand", "Webcam"],
  internalSecretToken: "tok_live_998877",
};

console.log(buildInvoiceSummary(rawOrder, "EXPRESS", "  GIFT_WRAP  "));
